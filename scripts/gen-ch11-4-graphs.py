#!/usr/bin/env python3
"""Generate harder Chapter 11.4 graph-interpretation tasks.

Mix: complex single graphs, dual comparison grids, and unlabeled triples
with statements mostly about derivative relationships (not just matching labels).
"""

from __future__ import annotations

import json
import math
from pathlib import Path

from ch11_svg import svg_dual, svg_single, svg_triple

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
    if "so the statement is" not in body.lower() and "The statement is" not in body:
        body = body.rstrip() + f"\n\nThe statement is {verd}."
    return f"**{letter}.** → {verd}\n\n{body}"


# ── Function families (callables) ────────────────────────────────────────────

def fp_cubic_three_zeros(x: float) -> float:
    """f'(x)=(x-1)(x-2.5)(x-5) — three zeros, not a parabola."""
    return (x - 1) * (x - 2.5) * (x - 5)


def fpp_from_cubic(x: float) -> float:
    # expand: (x-1)(x-2.5)(x-5)=x^3-8.5x^2+18.5x-12.5
    # f''=3x^2-17x+18.5
    return 3 * x * x - 17 * x + 18.5


def f_from_cubic(x: float) -> float:
    # antiderivative of x^3-8.5x^2+18.5x-12.5
    return 0.25 * x**4 - (8.5 / 3) * x**3 + 9.25 * x**2 - 12.5 * x


def fp_quartic(x: float) -> float:
    """f'(x)=(x-0.5)(x-2)(x-3.5)(x-5.5)/4 — four zeros."""
    return ((x - 0.5) * (x - 2) * (x - 3.5) * (x - 5.5)) / 4


def fp_sin_mod(x: float) -> float:
    """f'(x)=2sin(x)+0.4 — oscillatory derivative."""
    return 2 * math.sin(x) + 0.4


def f_sin_mod(x: float) -> float:
    return -2 * math.cos(x) + 0.4 * x


def fpp_sin_mod(x: float) -> float:
    return 2 * math.cos(x)


def fp_exp_poly(x: float) -> float:
    """f'(x)=(4-x)*exp(-0.35x) — skewed unimodal."""
    return (4 - x) * math.exp(-0.35 * x)


def fpp_exp_poly(x: float) -> float:
    # product: -e^{-0.35x} + (4-x)(-0.35)e^{-0.35x} = e^{-0.35x}(-1 -0.35(4-x))
    return math.exp(-0.35 * x) * (-1 - 0.35 * (4 - x))


def f_exp_poly(x: float) -> float:
    # ∫(4-x)e^{-0.35x} dx — integrate by parts numerically not needed; use closed form
    # ∫(4-x)e^{ax} with a=-0.35: use formula ∫xe^{ax}=(e^{ax}/a^2)(ax-1)
    a = -0.35
    # ∫4 e^{ax} - ∫x e^{ax} = 4/a e^{ax} - e^{ax}/a^2 (ax-1)
    return math.exp(a * x) * (4 / a - (a * x - 1) / (a * a))


def fp_rational_hump(x: float) -> float:
    """f'(x)=8x/(1+x^2) — odd hump/valley pair."""
    return 8 * x / (1 + x * x)


def f_rational_hump(x: float) -> float:
    return 4 * math.log(1 + x * x)


def fpp_rational_hump(x: float) -> float:
    # d/dx [8x/(1+x^2)] = 8(1-x^2)/(1+x^2)^2
    return 8 * (1 - x * x) / (1 + x * x) ** 2


def fp_piece_smooth(x: float) -> float:
    """Smooth cubic spline-like: sin wave with linear drift."""
    return math.sin(1.2 * x) + 0.25 * x - 0.8


def gp_compare(x: float) -> float:
    """Second firm's f'-like curve for dual tasks."""
    return math.cos(x) - 0.3


def hp_wiggly(x: float) -> float:
    """Higher-frequency wiggle for hard singles."""
    return 1.5 * math.sin(2 * x) * math.exp(-0.15 * x)


def hq_wiggly(x: float) -> float:
    """Companion for dual: phase-shifted."""
    return 1.5 * math.cos(2 * x) * math.exp(-0.15 * x)


def build_tasks() -> list[dict]:
    tasks: list[dict] = []
    n = 121

    def add(**kw):
        nonlocal n
        kw.setdefault("id", f"math-11-{n}")
        kw.setdefault("case_id", f"MATH 11.{n}")
        kw.setdefault("sort_order", n)
        kw.setdefault("difficulty_level", "4/5")
        tasks.append(kw)
        n += 1

    # ══════════════════════════════════════════════════════════════════════
    # SINGLES — complex f' / f (not plain parabolas)
    # ══════════════════════════════════════════════════════════════════════

    fig1 = svg_single(
        fp_cubic_three_zeros,
        xmin=0,
        xmax=6,
        ymin=-8,
        ymax=8,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-8, -4, 0, 4, 8],
        mark_points=[(1, 0), (2.5, 0), (5, 0)],
    )
    add(
        title="Cubic first derivative with three zeros",
        context=(
            "The graph shows $f'$, not $f$. The plotted curve is a cubic-looking derivative "
            "with three axis crossings. Decide TRUE or FALSE for each claim about $f$."
        ),
        statements=[
            "The function $f$ has local extrema at each of the three zeros of $f'$ shown.",
            "On the middle interval between the first and second zero of $f'$, the function $f$ is decreasing.",
            "Exactly two of the three zeros of $f'$ are local maxima of $f$.",
            "Between the second and third zero of $f'$, the graph of $f'$ is above the axis, so $f$ is increasing there.",
            "Because $f'$ has three zeros, $f$ must have an inflection point at each of those three $x$-values.",
        ],
        answer_key=[True, True, False, False, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "At each marked zero the curve of $f'$ crosses the axis (sign change). "
                "For a differentiable $f$, each such sign-changing zero is a local extremum of $f$.",
            ),
            expl(
                "B",
                True,
                "Between $x=1$ and $x=2.5$, the plotted $f'$ lies below the axis, so $f'<0$ "
                "and $f$ is decreasing on that middle interval.",
            ),
            expl(
                "C",
                False,
                "Sign pattern of this cubic $f'$: $+$ then $-$ then $+$ then $-$ "
                "(or the reverse of a standard monic cubic through those roots). "
                "Reading the figure: after $x=0$ the curve is positive, then negative between "
                "the first two zeros, then positive between the second and third? "
                "Check: at $x=0$, $(-1)(-2.5)(-5)=-12.5<0$; at $x=1.5$, $(0.5)(-1)(-3.5)>0$; "
                "at $x=3.5$, $(2.5)(1)(-1.5)<0$; at $x=5.5$, $(4.5)(3)(0.5)>0$. "
                "So signs: $-$ on $(0,1)$, $+$ on $(1,2.5)$, $-$ on $(2.5,5)$, $+$ after $5$. "
                "Local max where $+$ to $-$ (at $2.5$ only among interior shown pattern for max); "
                "local min at $1$ and at $5$. So zeros that are local maxima of $f$: only one "
                "($x=2.5$), not two.",
            ),
            expl(
                "D",
                False,
                "Between the second and third zero ($2.5$ and $5$), $f'$ is negative "
                "(see the sign chart above), so $f$ is decreasing — not increasing.",
            ),
            expl(
                "E",
                False,
                "Inflection points of $f$ track sign changes of $f''$, i.e. extrema of $f'$, "
                "not the zeros of $f'$. Zeros of $f'$ are candidates for extrema of $f$.",
            ),
        ],
        solution_overview=(
            "Read the three zeros of a cubic $f'$ with a careful sign chart; extrema of $f$ "
            "follow sign changes of $f'$, while inflections follow extrema of $f'$."
        ),
        figure=fig1,
        difficulty_level="4/5",
    )

    # Fix answer C reasoning - I computed signs carefully. Let me double-check statement C:
    # "Exactly two of the three zeros of f' are local maxima of f" - FALSE (only one max at 2.5)
    # Good.

    fig2 = svg_single(
        fp_sin_mod,
        xmin=0,
        xmax=2 * math.pi,
        ymin=-2.5,
        ymax=3,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, 0, 2],
    )
    add(
        title="Oscillatory first derivative",
        context=(
            "The graph shows an oscillatory $f'$ on $[0,2\\pi]$ approximately. "
            "Decide TRUE or FALSE for each claim about $f$ — use only the picture."
        ),
        statements=[
            "Wherever the graph of $f'$ lies above the horizontal axis, $f$ is increasing.",
            "The function $f$ has more than one local maximum on the window shown.",
            "At every peak of the graph of $f'$, the function $f$ has a local maximum.",
            "On intervals where $f'$ is falling through positive values, $f$ is still increasing but becoming less steep.",
            "Because $f'$ oscillates, $f$ itself must cross the horizontal axis in this window.",
        ],
        answer_key=[True, True, False, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "By definition of the first derivative: $f'>0$ means $f$ is (strictly) increasing.",
            ),
            expl(
                "B",
                True,
                "Each time $f'$ changes from $+$ to $-$, $f$ has a local maximum. The oscillatory "
                "graph crosses down through the axis more than once in the window.",
            ),
            expl(
                "C",
                False,
                "A peak of $f'$ is where $f''=0$ and $f'$ changes from rising to falling — an "
                "inflection of $f$ (steepest climb), not a local max of $f$. Local maxima of $f$ "
                "occur at zeros of $f'$ with a $+$ to $-$ change.",
            ),
            expl(
                "D",
                True,
                "If $f'>0$, $f$ increases. If in addition $f'$ is decreasing, the slope is "
                "getting smaller while still positive — climbing, but less steeply.",
            ),
            expl(
                "E",
                False,
                "Oscillation of $f'$ controls the slope of $f$, not whether $f$ itself crosses "
                "zero. A vertical shift of $f$ would keep the same $f'$ and change the roots of $f$.",
            ),
        ],
        solution_overview=(
            "Oscillatory $f'$ means multiple extrema of $f$; peaks of $f'$ are inflections of $f$, "
            "not peaks of $f$."
        ),
        figure=fig2,
        difficulty_level="4/5",
    )

    fig3 = svg_single(
        fp_exp_poly,
        xmin=0,
        xmax=8,
        ymin=-1.5,
        ymax=4,
        title="Graph of the first derivative f′",
        xticks=[0, 2, 4, 6, 8],
        yticks=[-1, 0, 1, 2, 3],
        mark_points=[(4, 0)],
    )
    add(
        title="Skewed unimodal derivative (not a parabola)",
        context=(
            "The graph shows $f'$: a single-humped, asymmetric curve with one zero near $x=4$. "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ is increasing on $(0,4)$ and decreasing on $(4,8)$.",
            "The function $f$ has a local maximum near $x=4$.",
            "The steepest climb of $f$ in the window occurs at the peak of $f'$, not at the zero of $f'$.",
            "Because the hump of $f'$ is skewed, $f$ cannot have an inflection point in $(0,4)$.",
            "After $x=4$, $f'$ is negative but approaching zero, so $f$ decreases ever more slowly.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Left of the zero, $f'>0$; right of the zero, $f'<0$.",
            ),
            expl(
                "B",
                True,
                "Sign change of $f'$ from $+$ to $-$ at the marked zero ⇒ local max of $f$.",
            ),
            expl(
                "C",
                True,
                "The largest positive value of $f'$ is the height of the hump — that is where "
                "$f$ rises most steeply. At the zero, the slope of $f$ is $0$.",
            ),
            expl(
                "D",
                False,
                "Skew does not remove inflection. Where $f'$ itself peaks (left of $x=4$), "
                "$f''$ changes sign, so $f$ has an inflection there.",
            ),
            expl(
                "E",
                True,
                "Negative $f'$ approaching the axis from below means slopes that are negative "
                "but closer and closer to zero — decreasing, but flattening.",
            ),
        ],
        solution_overview=(
            "One skewed hump of $f'$: max of $f$ at the zero; steepest climb at the peak of $f'$."
        ),
        figure=fig3,
        difficulty_level="4/5",
    )

    fig4 = svg_single(
        fp_quartic,
        xmin=0,
        xmax=6,
        ymin=-6,
        ymax=6,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-4, 0, 4],
    )
    add(
        title="Quartic first derivative with four zeros",
        context=(
            "The graph shows $f'$ with four axis crossings in the window. Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ has four local extrema in this window (one at each zero of $f'$ that changes sign).",
            "The open intervals between consecutive zeros of $f'$ alternate between increasing and decreasing behaviour of $f$.",
            "A local minimum of $f'$ in the picture is a local minimum of $f$.",
            "If $f'$ is positive on an interval between two consecutive zeros, then $f$ is increasing on that interval.",
            "Having four zeros forces $f''$ to be identically zero.",
        ],
        answer_key=[True, True, False, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Each transversal zero of $f'$ produces a local max or min of $f$. Four crossings "
                "give four extrema.",
            ),
            expl(
                "B",
                True,
                "Consecutive intervals inherit alternating signs of a continuous $f'$ that crosses "
                "the axis each time — so increasing and decreasing intervals alternate.",
            ),
            expl(
                "C",
                False,
                "A local min of $f'$ is about $f''$ changing $-$ to $+$, i.e. an inflection of $f$ "
                "(or a change in how slopes evolve), not a min of $f$.",
            ),
            expl(
                "D",
                True,
                "Directly from the sign of $f'$.",
            ),
            expl(
                "E",
                False,
                "Four zeros of $f'$ say nothing that would force $f''\\equiv 0$. The figure itself "
                "shows $f'$ rising and falling, so $f''$ is not zero.",
            ),
        ],
        solution_overview=(
            "Four zeros of $f'$ ⇒ four extrema of $f$ and alternating monotonicity intervals."
        ),
        figure=fig4,
        difficulty_level="5/5",
    )

    fig5 = svg_single(
        f_rational_hump,
        xmin=-3,
        xmax=3,
        ymin=-1,
        ymax=6,
        title="Graph of the function f",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[0, 2, 4, 6],
    )
    add(
        title="Reading a non-polynomial graph of f",
        context=(
            "The figure shows $f$ itself (a flattened valley at the origin with rising sides). "
            "Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ has a local minimum at $x=0$.",
            "The function $f$ is decreasing on $(-3,0)$ and increasing on $(0,3)$.",
            "Because the graph is symmetric about the $y$-axis, $f'$ is an odd function in this model.",
            "The graph being flattest near $x=0$ means $|f'|$ is smallest near $x=0$.",
            "An inflection of $f$ must occur at $x=0$ because that is where $f$ is minimal.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "The curve bottoms at $x=0$ and rises on both sides.",
            ),
            expl(
                "B",
                True,
                "Left of $0$ the graph falls toward the trough; right of $0$ it rises.",
            ),
            expl(
                "C",
                True,
                "Even symmetry of $f$ implies $f'(-x)=-f'(x)$: the slope on the left is the "
                "negative of the slope on the right.",
            ),
            expl(
                "D",
                True,
                "Visually the tangent is nearly horizontal near the trough, so $|f'|$ is near $0$.",
            ),
            expl(
                "E",
                False,
                "A local minimum is about $f'=0$ with a sign change of $f'$. Inflection is about "
                "$f''$ changing sign. At a typical smooth trough, $f''>0$ on both sides nearby "
                "with no concavity switch required at the trough itself.",
            ),
        ],
        solution_overview=(
            "Even trough of $f$: min at $0$, odd $f'$, flat slope near the bottom; min ≠ inflection."
        ),
        figure=fig5,
        difficulty_level="4/5",
    )

    fig6 = svg_single(
        hp_wiggly,
        xmin=0,
        xmax=6,
        ymin=-2,
        ymax=2,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6],
        yticks=[-2, -1, 0, 1, 2],
    )
    add(
        title="Damped oscillatory derivative",
        context=(
            "The graph shows a damped wave for $f'$. Decide TRUE or FALSE about $f$."
        ),
        statements=[
            "Later zeros of $f'$ still create local extrema of $f$, even though the oscillations shrink.",
            "As the amplitude of $f'$ decays, the local max/min of $f$ become milder (smaller slope changes).",
            "Once $|f'|$ stays below $0.5$ late in the window, $f$ can no longer change monotonicity.",
            "A zero of $f'$ with no sign change would not create a local extremum of $f$.",
            "The decay of the wave means $f''\\to 0$ in the sense that turns of $f'$ become less sharp over time in this picture.",
        ],
        answer_key=[True, True, False, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Any sign-changing zero of $f'$ is still a local extremum of $f$, regardless of amplitude.",
            ),
            expl(
                "B",
                True,
                "Smaller $|f'|$ near those zeros means gentler turning of $f$ — extrema still exist, "
                "but slopes nearby are closer to zero.",
            ),
            expl(
                "C",
                False,
                "Monotonicity changes whenever $f'$ changes sign, even if $|f'|$ is small. "
                "A tiny sign change still swaps increasing ↔ decreasing.",
            ),
            expl(
                "D",
                True,
                "Classic first-derivative test: no sign change ⇒ not a local extremum (e.g. flat inflection).",
            ),
            expl(
                "E",
                True,
                "Visually the turns of $f'$ get milder as the envelope decays — consistent with "
                "weaker curvature of $f'$ later in the window.",
            ),
        ],
        solution_overview=(
            "Damping changes the size of slopes, not the logic of sign changes of $f'$."
        ),
        figure=fig6,
        difficulty_level="5/5",
    )

    # keep classic-style but harder claims
    fig7 = svg_single(
        fp_rational_hump,
        xmin=-3,
        xmax=3,
        ymin=-5,
        ymax=5,
        title="Graph of the first derivative f′",
        xticks=[-3, -2, -1, 0, 1, 2, 3],
        yticks=[-4, -2, 0, 2, 4],
        mark_points=[(0, 0)],
    )
    add(
        title="Odd first derivative with a positive and a negative lobe",
        context=(
            "The graph shows $f'$ with a valley on the left and a hump on the right, crossing "
            "at the origin. Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ is decreasing on $(-3,0)$ and increasing on $(0,3)$.",
            "The function $f$ has a local minimum at $x=0$.",
            "The function $f$ is concave down on $(0,1)$ because $f'$ is falling there after its peak.",
            "The two extrema of $f'$ (one trough, one peak) mark two inflection points of $f$.",
            "Since $f'(0)=0$ and $f'$ changes $-$ to $+$, $x=0$ is a local maximum of $f$.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Left lobe is below the axis ($f'<0$); right lobe is above ($f'>0$).",
            ),
            expl(
                "B",
                True,
                "Sign change $-$ to $+$ at $0$ ⇒ local minimum of $f$.",
            ),
            expl(
                "C",
                True,
                "After the positive peak of $f'$, the curve of $f'$ falls toward zero — "
                "$f'$ decreasing ⇒ $f''<0$ ⇒ concave down for $f$.",
            ),
            expl(
                "D",
                True,
                "Extrema of $f'$ are zeros of $f''$ with sign change ⇒ inflections of $f$.",
            ),
            expl(
                "E",
                False,
                "$-$ to $+$ is a local minimum, not a maximum.",
            ),
        ],
        solution_overview=(
            "Odd $f'$: min of $f$ at $0$; lobes give decrease then increase; extrema of $f'$ = inflections of $f$."
        ),
        figure=fig7,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # DUALS — two graphs in one grid
    # ══════════════════════════════════════════════════════════════════════

    dual1 = svg_dual(
        {
            "fn": fp_sin_mod,
            "xmin": 0,
            "xmax": 6,
            "ymin": -2.5,
            "ymax": 3,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        {
            "fn": gp_compare,
            "xmin": 0,
            "xmax": 6,
            "ymin": -2.5,
            "ymax": 3,
            "title": "Graph B  (g′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        caption="Two first-derivative graphs in one figure",
    )
    add(
        title="Compare two oscillatory first derivatives",
        context=(
            "Graph A shows $f'$ and Graph B shows $g'$ for two different differentiable "
            "functions. Decide TRUE or FALSE — claims may refer to one graph, the other, or both."
        ),
        statements=[
            "On a short interval just after $x=0$, Graph A is positive while Graph B is positive as well, so both $f$ and $g$ are increasing there.",
            "Graph B crosses the axis more often than Graph A in this window.",
            "Whenever Graph A is below the axis, $f$ is decreasing — regardless of what Graph B does.",
            "If at some $x_0$ one has Graph A above Graph B but both negative, then both $f$ and $g$ are decreasing at $x_0$, and $f$ is decreasing less steeply than $g$ whenever Graph A is less negative.",
            "A local maximum of $f$ occurs wherever Graph A has a peak.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Near $x=0^+$, both curves start positive in the figure ($f'(0)=0.4>0$, "
                "$g'(0)=0.7>0$), so both underlying functions increase there.",
            ),
            expl(
                "B",
                True,
                "In the window shown, Graph A has a single axis crossing while Graph B has two. "
                "So Graph B crosses the axis more often than Graph A.",
            ),
            expl(
                "C",
                True,
                "Monotonicity of $f$ depends only on the sign of $f'$ (Graph A).",
            ),
            expl(
                "D",
                True,
                "Both negative ⇒ both decreasing. The less negative derivative corresponds to "
                "the gentler downward slope.",
            ),
            expl(
                "E",
                False,
                "Peaks of Graph A are extrema of $f'$, hence inflections of $f$, not maxima of $f$.",
            ),
        ],
        solution_overview=(
            "Compare signs and relative heights of two derivative graphs; peaks of a derivative "
            "are not peaks of the original function."
        ),
        figure=dual1,
        difficulty_level="5/5",
    )

    # Fix dual1 B - let me make a clearer true/false. Cos crosses differently than 2sin+0.4.
    # Actually g'=cos-0.3 zeros when cos=0.3; f'=2sin+0.4 zeros when sin=-0.2.
    # Number of zeros in [0,6]: roughly similar. Statement B as False is OK.

    dual2 = svg_dual(
        {
            "fn": fp_exp_poly,
            "xmin": 0,
            "xmax": 8,
            "ymin": -1.5,
            "ymax": 4,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6, 8],
            "yticks": [-1, 0, 2, 4],
        },
        {
            "fn": fpp_exp_poly,
            "xmin": 0,
            "xmax": 8,
            "ymin": -2,
            "ymax": 2,
            "title": "Graph B  (f″)",
            "xticks": [0, 2, 4, 6, 8],
            "yticks": [-2, -1, 0, 1],
        },
        caption="First and second derivatives of the same f",
    )
    add(
        title="Paired f′ and f″ for a skewed model",
        context=(
            "Graph A is $f'$ and Graph B is $f''$ for the same function. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph B is negative throughout most of the right half of the window, so $f'$ is decreasing there.",
            "The zero of Graph A near $x=4$ is a local maximum of $f$, while the zero of Graph B marks where $f'$ has a horizontal tangent.",
            "Wherever Graph B is positive, the graph of $f'$ (Graph A) is rising.",
            "Because Graph A eventually stays negative, $f$ decreases on a long right-hand interval.",
            "Graph B being the derivative of Graph A means that peaks of Graph A line up with zeros of Graph B.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "$f''<0$ ⇒ $f'$ decreasing — read off Graph B's sign.",
            ),
            expl(
                "B",
                True,
                "Zero of $f'$ with $+$ to $-$ ⇒ max of $f$. Zero of $f''$ ⇒ critical point of $f'$.",
            ),
            expl(
                "C",
                True,
                "Positive second derivative means the first derivative is increasing.",
            ),
            expl(
                "D",
                True,
                "After the zero of Graph A, Graph A stays below the axis in the window.",
            ),
            expl(
                "E",
                True,
                "Standard alignment: extrema of $f'$ occur where $f''=0$.",
            ),
        ],
        solution_overview=(
            "Read $f$ from signs of Graph A and read how $f'$ bends from signs of Graph B."
        ),
        figure=dual2,
        difficulty_level="4/5",
    )

    dual3 = svg_dual(
        {
            "fn": f_from_cubic,
            "xmin": 0,
            "xmax": 6,
            "ymin": -20,
            "ymax": 15,
            "title": "Graph A  (f)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-15, 0, 10],
        },
        {
            "fn": fp_cubic_three_zeros,
            "xmin": 0,
            "xmax": 6,
            "ymin": -8,
            "ymax": 8,
            "title": "Graph B  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-8, 0, 8],
        },
        caption="A function and its first derivative",
    )
    add(
        title="Match turning points of f to zeros of f′",
        context=(
            "Graph A shows $f$ and Graph B shows $f'$. Decide TRUE or FALSE."
        ),
        statements=[
            "Every turning point visible on Graph A lines up vertically with a zero of Graph B.",
            "Where Graph B is negative, Graph A is falling.",
            "Graph A has more turning points than Graph B has zeros.",
            "An inflection of Graph A occurs where Graph B has a local extremum.",
            "If Graph B lies above the axis on an interval, Graph A cannot have a local maximum inside that open interval.",
        ],
        answer_key=[True, True, False, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Turning points of $f$ require $f'=0$ (smooth case) — alignment with Graph B's zeros.",
            ),
            expl(
                "B",
                True,
                "Negative derivative ⇒ decreasing $f$.",
            ),
            expl(
                "C",
                False,
                "They match one-for-one here: three turning points, three zeros.",
            ),
            expl(
                "D",
                True,
                "Inflections of $f$ ↔ extrema of $f'$.",
            ),
            expl(
                "E",
                True,
                "On an open interval where $f'>0$, $f$ is strictly increasing, so it cannot "
                "have a local maximum inside that interval.",
            ),
        ],
        solution_overview=(
            "Geometric dictionary between a graph of $f$ and a graph of $f'$."
        ),
        figure=dual3,
        difficulty_level="4/5",
    )

    dual4 = svg_dual(
        {
            "fn": hp_wiggly,
            "xmin": 0,
            "xmax": 6,
            "ymin": -2,
            "ymax": 2,
            "title": "Graph A  (P′ for firm A)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        {
            "fn": hq_wiggly,
            "xmin": 0,
            "xmax": 6,
            "ymin": -2,
            "ymax": 2,
            "title": "Graph B  (P′ for firm B)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        caption="Marginal profit curves for two firms",
    )
    add(
        title="Two firms’ marginal profit graphs compared",
        context=(
            "Graph A is firm A's marginal profit $P_A'$ and Graph B is firm B's marginal profit "
            "$P_B'$. Decide TRUE or FALSE."
        ),
        statements=[
            "Firm A should expand output on intervals where Graph A is positive.",
            "The two firms always have the same expanding/contracting recommendation at every $x$, because the graphs are phase-shifted versions of related waves.",
            "A local profit peak for firm A occurs where Graph A changes from positive to negative.",
            "Near points where Graph A is far above Graph B and both are positive, firm A's profit is rising faster than firm B's.",
            "If Graph B is negative while Graph A is positive at the same $x$, firm A wants to expand while firm B wants to contract.",
        ],
        answer_key=[True, False, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Positive marginal profit means an extra unit raises profit.",
            ),
            expl(
                "B",
                False,
                "Phase shift means the sign patterns are offset — they disagree on some intervals.",
            ),
            expl(
                "C",
                True,
                "First-derivative test for $P_A$: $+$ to $-$ at a zero of $P_A'$.",
            ),
            expl(
                "D",
                True,
                "Larger positive $P'$ means a steeper rise in profit.",
            ),
            expl(
                "E",
                True,
                "Opposite signs of marginal profit ⇒ opposite expand/contract advice.",
            ),
        ],
        solution_overview=(
            "Compare signs and heights of two marginal-profit graphs; phase shift breaks lockstep advice."
        ),
        figure=dual4,
        difficulty_level="5/5",
    )

    dual5 = svg_dual(
        {
            "fn": fp_quartic,
            "xmin": 0,
            "xmax": 6,
            "ymin": -6,
            "ymax": 6,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-4, 0, 4],
        },
        {
            "fn": lambda x: 4 * x**3 - 34.5 * x**2 + 82.75 * x - 48.125,
            # derivative of quartic/4 expanded roughly - actually compute f'' from fp_quartic
            "xmin": 0,
            "xmax": 6,
            "ymin": -20,
            "ymax": 20,
            "title": "Graph B  (f″)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-15, 0, 15],
        },
        caption="f′ and f″ for a four-critical-point model",
    )

    # Better f'' for fp_quartic = ((x-0.5)(x-2)(x-3.5)(x-5.5))/4
    # Use numerical derivative for the panel to avoid algebra mistakes
    def fpp_quartic_num(x: float) -> float:
        h = 1e-4
        return (fp_quartic(x + h) - fp_quartic(x - h)) / (2 * h)

    dual5 = svg_dual(
        {
            "fn": fp_quartic,
            "xmin": 0,
            "xmax": 6,
            "ymin": -6,
            "ymax": 6,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-4, 0, 4],
        },
        {
            "fn": fpp_quartic_num,
            "xmin": 0,
            "xmax": 6,
            "ymin": -12,
            "ymax": 12,
            "title": "Graph B  (f″)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-8, 0, 8],
        },
        caption="f′ and f″ for a four-critical-point model",
    )
    add(
        title="Four zeros of f′ paired with f″",
        context=(
            "Graph A is $f'$ (four zeros) and Graph B is $f''$. Decide TRUE or FALSE."
        ),
        statements=[
            "Each time Graph A crosses the axis, $f$ has a local extremum (assuming transversal crossings).",
            "Graph B's zeros sit under the peaks and troughs of Graph A.",
            "On intervals where Graph B is positive, Graph A is rising, so $f$ is concave up.",
            "Having four zeros of $f'$ automatically means $f''$ has exactly four zeros.",
            "Between two consecutive zeros of Graph A, the sign of Graph A is constant, so $f$ is strictly mono­tonic on that open interval.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Transversal zeros of $f'$ are local extrema of $f$.",
            ),
            expl(
                "B",
                True,
                "Zeros of $f''$ = critical points of $f'$.",
            ),
            expl(
                "C",
                True,
                "$f''>0$ ⇒ $f'$ increasing and $f$ concave up.",
            ),
            expl(
                "D",
                False,
                "$f''$ is one degree lower in the polynomial case and generally has three zeros "
                "for a quartic $f'$, not four. Count the axis crossings of Graph B in the figure.",
            ),
            expl(
                "E",
                True,
                "Continuous $f'$ cannot change sign without a zero; between consecutive zeros "
                "the sign is fixed ⇒ $f$ strictly mono­tonic.",
            ),
        ],
        solution_overview=(
            "Four extrema from four zeros of $f'$; $f''$ has fewer zeros; concavity follows the sign of Graph B."
        ),
        figure=dual5,
        difficulty_level="5/5",
    )

    dual6 = svg_dual(
        {
            "fn": fp_sin_mod,
            "xmin": 0,
            "xmax": 6,
            "ymin": -2.5,
            "ymax": 3,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        {
            "fn": f_sin_mod,
            "xmin": 0,
            "xmax": 6,
            "ymin": -3,
            "ymax": 5,
            "title": "Graph B  (f)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2, 4],
        },
        caption="Oscillatory f′ beside its antiderivative f",
    )
    add(
        title="Oscillatory pair: read f from f′ and check consistency",
        context=(
            "Graph A is $f'$ and Graph B is $f$. Decide TRUE or FALSE."
        ),
        statements=[
            "Peaks on Graph B occur where Graph A changes from positive to negative.",
            "Troughs on Graph B occur where Graph A changes from negative to positive.",
            "Where Graph A is most positive, Graph B is locally steepest upward.",
            "Graph B can be shifted vertically without changing Graph A.",
            "If Graph A were replaced by its absolute value, Graph B's turning points would stay in the same places.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Local max of $f$: $f'$ changes $+$ to $-$.",
            ),
            expl(
                "B",
                True,
                "Local min of $f$: $f'$ changes $-$ to $+$.",
            ),
            expl(
                "C",
                True,
                "Largest $f'$ ⇒ steepest positive slope of $f$.",
            ),
            expl(
                "D",
                True,
                "Constants vanish under differentiation: $f+C$ has the same $f'$.",
            ),
            expl(
                "E",
                False,
                "Absolute value of $f'$ destroys sign information, so the first-derivative test "
                "locations and the shape of $f$ both change.",
            ),
        ],
        solution_overview=(
            "Consistency checks between an oscillatory $f'$ and its integral graph $f$."
        ),
        figure=dual6,
        difficulty_level="4/5",
    )

    # ══════════════════════════════════════════════════════════════════════
    # TRIPLES — one grid; statements mostly about derivatives
    # ══════════════════════════════════════════════════════════════════════

    trip1 = svg_triple(
        [
            {
                "fn": f_sin_mod,
                "xmin": 0,
                "xmax": 6,
                "ymin": -3,
                "ymax": 5,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2, 4],
            },
            {
                "fn": fp_sin_mod,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2.5,
                "ymax": 3,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2],
            },
            {
                "fn": fpp_sin_mod,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2.5,
                "ymax": 2.5,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2],
            },
        ],
        caption="Three graphs in one grid: f, f′, f″ unlabeled",
    )
    add(
        title="Trigonometric triple: reason about the derivatives",
        context=(
            "Graphs A–C are $f$, $f'$, and $f''$ in unknown order, drawn in one figure. "
            "Focus on derivative relationships. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph B is the derivative of Graph A: peaks of A line up with zeros of B that change $+$ to $-$.",
            "Graph C is the derivative of Graph B: zeros of C sit under peaks/troughs of B.",
            "Wherever Graph B is positive, Graph A is increasing.",
            "Graph C alone is enough to decide where $f$ is increasing.",
            "Graph A must be $f''$ because it has the largest vertical range.",
        ],
        answer_key=[True, True, True, False, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Turning points of A match axis crossings of B with the max/min sign pattern — "
                "so B $=A'$. With the oscillatory family, A is $f$ and B is $f'$.",
            ),
            expl(
                "B",
                True,
                "C tracks the slope of B: extrema of B align with zeros of C, so C $=B'=f''$.",
            ),
            expl(
                "C",
                True,
                "Positive first derivative ⇒ increasing $f$.",
            ),
            expl(
                "D",
                False,
                "$f''$ (Graph C) controls concavity of $f$, not where $f$ increases. "
                "Increasing/decreasing needs the sign of $f'$.",
            ),
            expl(
                "E",
                False,
                "Vertical range is a bad label. Here A is the most integrated (smoothest drift) "
                "curve — $f$, not $f''$. $f''$ is the pure cosine-looking Graph C.",
            ),
        ],
        solution_overview=(
            "Identify by differentiation alignment; use $f'$ for monotonicity and $f''$ for concavity."
        ),
        figure=trip1,
        difficulty_level="5/5",
    )

    trip2 = svg_triple(
        [
            {
                "fn": fp_exp_poly,
                "xmin": 0,
                "xmax": 8,
                "ymin": -1.5,
                "ymax": 4,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6, 8],
                "yticks": [-1, 0, 2, 4],
            },
            {
                "fn": f_exp_poly,
                "xmin": 0,
                "xmax": 8,
                "ymin": -5,
                "ymax": 12,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6, 8],
                "yticks": [0, 5, 10],
            },
            {
                "fn": fpp_exp_poly,
                "xmin": 0,
                "xmax": 8,
                "ymin": -2,
                "ymax": 1.5,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6, 8],
                "yticks": [-2, -1, 0, 1],
            },
        ],
        caption="Three graphs in one grid: skewed exponential family",
    )
    add(
        title="Exponential-family triple focused on derivative signs",
        context=(
            "Graphs A–C are $f$, $f'$, $f''$ unlabeled in one figure. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is $f'$: it has a single hump and one late zero.",
            "Graph C is $f''$: it is largely negative after an early interval, matching a mostly falling Graph A.",
            "Wherever Graph A is positive, Graph B is increasing.",
            "Graph B is $f''$ because it ends highest on the right.",
            "A zero of Graph C occurs near the peak of Graph A.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Single skewed hump with one zero is the $f'$ shape in this family.",
            ),
            expl(
                "B",
                True,
                "After the peak of $f'$, slopes of $f'$ are negative ⇒ $f''<0$, matching Graph C.",
            ),
            expl(
                "C",
                True,
                "If A $=f'$ and B $=f$, positive A ⇒ increasing B.",
            ),
            expl(
                "D",
                False,
                "Graph B is the cumulative (integral) shape — $f$, not $f''$. $f''$ is Graph C.",
            ),
            expl(
                "E",
                True,
                "Peak of $f'$ ⇒ $f''=0$.",
            ),
        ],
        solution_overview=(
            "Skewed hump = $f'$; integral-looking rise-then-flatten = $f$; sign chart of $f''$ = Graph C."
        ),
        figure=trip2,
        difficulty_level="5/5",
    )

    trip3 = svg_triple(
        [
            {
                "fn": fpp_rational_hump,
                "xmin": -3,
                "xmax": 3,
                "ymin": -5,
                "ymax": 9,
                "title": "Graph A",
                "xticks": [-3, -1, 1, 3],
                "yticks": [-4, 0, 4, 8],
            },
            {
                "fn": fp_rational_hump,
                "xmin": -3,
                "xmax": 3,
                "ymin": -5,
                "ymax": 5,
                "title": "Graph B",
                "xticks": [-3, -1, 1, 3],
                "yticks": [-4, 0, 4],
            },
            {
                "fn": f_rational_hump,
                "xmin": -3,
                "xmax": 3,
                "ymin": -1,
                "ymax": 6,
                "title": "Graph C",
                "xticks": [-3, -1, 1, 3],
                "yticks": [0, 2, 4, 6],
            },
        ],
        caption="Three graphs in one grid: rational odd/even family",
    )
    add(
        title="Rational triple: derivative-of-derivative statements",
        context=(
            "Graphs A–C are $f$, $f'$, $f''$ in unknown order. Prefer claims about how the "
            "curves differentiate into each other. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is the derivative of Graph B.",
            "Graph B is the derivative of Graph C.",
            "Graph B is an odd-looking curve; Graph C is even-looking — consistent with $C'=B$ and $C$ even ⇒ $B$ odd.",
            "Zeros of Graph A occur at the peak and trough of Graph B.",
            "Graph A being positive near $x=0$ means Graph B is increasing through the origin.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "A is $f''$, B is $f'$: the double-lobe second derivative matches slopes of the "
                "odd first-derivative graph.",
            ),
            expl(
                "B",
                True,
                "B $=f'$, C $=f$: the valley of C has slope graph B.",
            ),
            expl(
                "C",
                True,
                "Even $f$ ⇒ odd $f'$. The pictures match that symmetry dictionary.",
            ),
            expl(
                "D",
                True,
                "Extrema of $f'$ are zeros of $f''$.",
            ),
            expl(
                "E",
                True,
                "$f''>0$ near $0$ ⇒ $f'$ increasing through $0$ (from negative to positive values).",
            ),
        ],
        solution_overview=(
            "Use even/odd symmetry and differentiation alignment, not degree counting."
        ),
        figure=trip3,
        difficulty_level="5/5",
    )

    trip4 = svg_triple(
        [
            {
                "fn": fp_cubic_three_zeros,
                "xmin": 0,
                "xmax": 6,
                "ymin": -8,
                "ymax": 8,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-8, 0, 8],
            },
            {
                "fn": fpp_from_cubic,
                "xmin": 0,
                "xmax": 6,
                "ymin": -15,
                "ymax": 20,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-10, 0, 10, 20],
            },
            {
                "fn": f_from_cubic,
                "xmin": 0,
                "xmax": 6,
                "ymin": -20,
                "ymax": 15,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-15, 0, 10],
            },
        ],
        caption="Three graphs in one grid: cubic f′ family",
    )
    add(
        title="Cubic-derivative triple: statements about f′ and f″",
        context=(
            "Graphs A–C are $f$, $f'$, $f''$ unlabeled. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A is $f'$ because it has three zeros.",
            "Graph B is $f''$ because it has two zeros (a quadratic shape).",
            "Wherever Graph B is negative, Graph A is decreasing.",
            "Graph C's turning points line up with Graph A's zeros.",
            "Graph B's values alone tell you where $f$ is increasing.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Three axis crossings match the cubic $f'$.",
            ),
            expl(
                "B",
                True,
                "Quadratic-looking Graph B is $f''=A'$.",
            ),
            expl(
                "C",
                True,
                "$f''<0$ ⇒ $f'$ decreasing.",
            ),
            expl(
                "D",
                True,
                "Extrema of $f$ at zeros of $f'$.",
            ),
            expl(
                "E",
                False,
                "Sign of $f''$ is concavity of $f$ / monotonicity of $f'$, not monotonicity of $f$. "
                "You need Graph A's sign for where $f$ increases.",
            ),
        ],
        solution_overview=(
            "Three zeros ⇒ $f'$; two zeros ⇒ $f''$; do not confuse $f''$ with monotonicity of $f$."
        ),
        figure=trip4,
        difficulty_level="4/5",
    )

    trip5 = svg_triple(
        [
            {
                "fn": hq_wiggly,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2,
                "ymax": 2,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2],
            },
            {
                "fn": hp_wiggly,
                "xmin": 0,
                "xmax": 6,
                "ymin": -2,
                "ymax": 2,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-2, 0, 2],
            },
            {
                "fn": lambda x: (hp_wiggly(x + 1e-4) - hp_wiggly(x - 1e-4)) / (2e-4),
                "xmin": 0,
                "xmax": 6,
                "ymin": -4,
                "ymax": 4,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-4, 0, 4],
            },
        ],
        caption="Three graphs in one grid: damped waves (related by differentiation)",
    )
    add(
        title="Damped-wave triple stressing f′ versus f″ roles",
        context=(
            "Among Graphs A–C, one is a function's first derivative, one is that same function's "
            "second derivative, and one is a phase-shifted cousin (not necessarily $f$ itself). "
            "Treat B as $f'$ and C as $f''$ for the claims below. Decide TRUE or FALSE."
        ),
        statements=[
            "Taking Graph B as $f'$, Graph C matches $f''$ if zeros of C sit under peaks/troughs of B.",
            "If Graph B is $f'$, then $f$ is increasing wherever Graph B is above the axis.",
            "If Graph C is $f''$, then $f$ is concave up wherever Graph C is above the axis.",
            "Graph A being a phase shift of Graph B means A and B always share the same zeros.",
            "Smaller late amplitudes in B mean later extrema of $f$ involve smaller slope magnitudes.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "That alignment is the graphical definition of differentiating B to get C.",
            ),
            expl(
                "B",
                True,
                "Sign of $f'$ controls monotonicity of $f$.",
            ),
            expl(
                "C",
                True,
                "Sign of $f''$ controls concavity of $f$.",
            ),
            expl(
                "D",
                False,
                "A horizontal phase shift moves zeros — they do not stay aligned.",
            ),
            expl(
                "E",
                True,
                "Damping shrinks $|f'|$ near later zeros ⇒ milder turns of $f$.",
            ),
        ],
        solution_overview=(
            "Separate phase-shift comparisons from true derivative pairs; use signs of $f'$/$f''$ correctly."
        ),
        figure=trip5,
        difficulty_level="5/5",
    )

    trip6 = svg_triple(
        [
            {
                "fn": f_from_cubic,
                "xmin": 0,
                "xmax": 6,
                "ymin": -20,
                "ymax": 15,
                "title": "Graph A",
                "xticks": [0, 2, 4, 6],
                "yticks": [-15, 0, 10],
            },
            {
                "fn": fpp_from_cubic,
                "xmin": 0,
                "xmax": 6,
                "ymin": -15,
                "ymax": 20,
                "title": "Graph B",
                "xticks": [0, 2, 4, 6],
                "yticks": [-10, 0, 10],
            },
            {
                "fn": fp_cubic_three_zeros,
                "xmin": 0,
                "xmax": 6,
                "ymin": -8,
                "ymax": 8,
                "title": "Graph C",
                "xticks": [0, 2, 4, 6],
                "yticks": [-8, 0, 8],
            },
        ],
        caption="Three graphs in one grid: shuffled cubic family",
    )
    add(
        title="Shuffled triple: mostly claims about f′ and f″",
        context=(
            "Graphs A–C are $f$, $f'$, $f''$ unlabeled in one figure. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph C is $f'$.",
            "Graph B is $f''$.",
            "Graph A is $f$.",
            "On intervals where Graph C is decreasing, Graph B is negative.",
            "The number of zeros of Graph C equals the number of turning points of Graph A.",
        ],
        answer_key=[True, True, True, True, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Three zeros ⇒ $f'$.",
            ),
            expl(
                "B",
                True,
                "Quadratic-looking ⇒ $f''$.",
            ),
            expl(
                "C",
                True,
                "Remaining curve with three turns ⇒ $f$.",
            ),
            expl(
                "D",
                True,
                "Decreasing $f'$ ⇔ $f''<0$.",
            ),
            expl(
                "E",
                True,
                "Each transversal zero of $f'$ is a turning point of $f$.",
            ),
        ],
        solution_overview=(
            "Shuffled layout still identified by zero counts and differentiation alignment."
        ),
        figure=trip6,
        difficulty_level="4/5",
    )

    # One more hard single + one more dual to reach ~22
    fig8 = svg_single(
        lambda x: (x - 1) * (x - 3) * math.exp(-0.2 * x),
        xmin=0,
        xmax=7,
        ymin=-3,
        ymax=3,
        title="Graph of the first derivative f′",
        xticks=[0, 1, 2, 3, 4, 5, 6, 7],
        yticks=[-2, 0, 2],
        mark_points=[(1, 0), (3, 0)],
    )
    add(
        title="Product-of-factors times a decaying envelope",
        context=(
            "The graph shows $f'$ with two zeros and a decaying envelope. Decide TRUE or FALSE."
        ),
        statements=[
            "The function $f$ has a local extremum at each marked zero of $f'$.",
            "Between the two zeros, the sign of $f'$ is constant, so $f$ is strictly mono­tonic there.",
            "Because of the decay, the local extremum farther to the right is associated with smaller $|f'|$ nearby than a similar shape without decay would suggest.",
            "The rightmost zero of $f'$ cannot be a local extremum of $f$ once the envelope is small.",
            "An inflection of $f$ occurs where this $f'$ graph has a local peak or trough between the zeros.",
        ],
        answer_key=[True, True, True, False, True],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Sign-changing zeros ⇒ local extrema of $f$.",
            ),
            expl(
                "B",
                True,
                "No zero inside ⇒ no sign change ⇒ strict monotonicity of $f$.",
            ),
            expl(
                "C",
                True,
                "Decay shrinks amplitudes to the right.",
            ),
            expl(
                "D",
                False,
                "Amplitude does not cancel the first-derivative test — a sign change still makes an extremum.",
            ),
            expl(
                "E",
                True,
                "Local extrema of $f'$ ⇒ inflections of $f$.",
            ),
        ],
        solution_overview=(
            "Envelope decay changes sizes, not the sign-change logic for extrema and inflections."
        ),
        figure=fig8,
        difficulty_level="5/5",
    )

    dual7 = svg_dual(
        {
            "fn": lambda x: (x - 1) * (x - 3) * math.exp(-0.2 * x),
            "xmin": 0,
            "xmax": 7,
            "ymin": -3,
            "ymax": 3,
            "title": "Graph A  (f′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        {
            "fn": lambda x: (x - 2) * (x - 5) * math.exp(-0.15 * x),
            "xmin": 0,
            "xmax": 7,
            "ymin": -3,
            "ymax": 3,
            "title": "Graph B  (g′)",
            "xticks": [0, 2, 4, 6],
            "yticks": [-2, 0, 2],
        },
        caption="Two different first-derivative graphs compared",
    )
    add(
        title="Compare two damped two-zero derivatives",
        context=(
            "Graph A is $f'$ and Graph B is $g'$ for different functions. Decide TRUE or FALSE."
        ),
        statements=[
            "Graph A has its zeros near $1$ and $3$, while Graph B's zeros are farther right.",
            "There exist intervals where $f$ is increasing while $g$ is decreasing.",
            "The firm (or function) whose derivative graph is higher at a fixed $x$ has the larger instantaneous rate of change there.",
            "Both graphs being eventually near zero means both $f$ and $g$ become almost flat late in the window.",
            "Equal number of zeros implies $f$ and $g$ have the same global maximum value.",
        ],
        answer_key=[True, True, True, True, False],
        tactical_explanations=[
            expl(
                "A",
                True,
                "Read the axis crossings off the figure.",
            ),
            expl(
                "B",
                True,
                "Different zero locations ⇒ intervals with opposite signs for $f'$ and $g'$.",
            ),
            expl(
                "C",
                True,
                "The value of the first derivative is the instantaneous rate.",
            ),
            expl(
                "D",
                True,
                "Small $|f'|$ and $|g'|$ ⇒ nearly flat $f$ and $g$.",
            ),
            expl(
                "E",
                False,
                "Number of critical points does not determine function values — no common scale "
                "for $f$ and $g$ is even given.",
            ),
        ],
        solution_overview=(
            "Compare zero locations and heights of two derivative graphs; critical-point counts ≠ value comparisons."
        ),
        figure=dual7,
        difficulty_level="5/5",
    )

    assert len(tasks) >= 20, len(tasks)
    # renumber sort_order densely from 121
    for i, t in enumerate(tasks):
        t["sort_order"] = 121 + i
        t["id"] = f"math-11-{121 + i}"
        t["case_id"] = f"MATH 11.{121 + i}"
    return tasks


def main() -> None:
    tasks = build_tasks()
    OUT_JSON.write_text(
        json.dumps([{k: v for k, v in t.items() if k != "figure"} for t in tasks], indent=2)
    )
    OUT_TS.write_text(",\n".join(task_ts(t) for t in tasks) + "\n")
    print(f"Wrote {len(tasks)} tasks")
    for t in tasks:
        print(t["case_id"], t["title"][:50], "fig", len(t["figure"]))


if __name__ == "__main__":
    main()
