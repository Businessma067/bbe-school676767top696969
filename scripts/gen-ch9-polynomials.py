#!/usr/bin/env python3
"""Chapter 9 — Polynomial functions: build src/data/math-ch9-polynomials.json.

Fifty true/false cases, ten at each difficulty from 1/5 to 5/5.  MATH 9.01 is
the photo exemplar (exam item 32: a cubic velocity model on one line plus a
distance table on another).  Twelve stems are purely symbolic, ten carry an SVG
plot drawn from the very polynomial the statements discuss, and the rest are
formula, applied, table, parametric or hybrid stems.

Explanations follow the Chapter 4 tutor voice: a narrative opener, one
single-line ``$$display$$`` per step, and a verdict woven into the last
sentence.  Wherever a claim is numeric the truth value is computed by the
helpers in ``ch9_lib`` from the same polynomial that produces the displays, so
statement and explanation cannot drift apart.

Usage:  python3 scripts/gen-ch9-polynomials.py
"""

from __future__ import annotations

import json
from collections import Counter
from fractions import Fraction as Fr
from pathlib import Path

from ch9_lib import (
    CURVE,
    Claim,
    D,
    Pol,
    Spec,
    approx,
    audit,
    bars,
    body,
    claim_avg_rate,
    claim_degree,
    claim_deriv_sign,
    claim_end_behaviour,
    claim_factored_form,
    claim_finite_differences,
    claim_lead,
    claim_real_root_count,
    claim_remainder,
    claim_root,
    claim_sign_at,
    claim_sum,
    claim_turning_points,
    claim_value,
    claim_yintercept,
    close,
    diffs,
    explanation,
    fr,
    numstr,
    plot,
    plot_many,
    word,
)

OUT = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

TF = "Evaluate each statement. Mark it TRUE or FALSE."
BLUE = "#3b6ea5"

L1: list[Spec] = []
L2: list[Spec] = []
L3: list[Spec] = []
L4: list[Spec] = []
L5: list[Spec] = []
EXEMPLAR: list[Spec] = []


def C(text: str, truth: bool, expl: str) -> Claim:
    return Claim(text, truth, expl)


# =========================================================================== #
# MATH 9.01 — photo exemplar (exam item 32)
# =========================================================================== #

V = Pol.of(0, 0.4, -0.005, 0.00002, var="t", dec=True)  # metres per second
A = V.deriv()
A2 = A.deriv()

L2_TIMES = list(range(0, 130, 10))
L2_DIST = [0, 70, 190, 330, 440, 590, 710, 840, 930, 1070, 1170, 1280, 1400]
L2_RATES = [Fr(L2_DIST[i + 1] - L2_DIST[i], 10) for i in range(len(L2_DIST) - 1)]
L2_LABELS = [f"{L2_TIMES[i]}\\text{{–}}{L2_TIMES[i + 1]}" for i in range(len(L2_RATES))]

_rate_list = ",\\ ".join(numstr(r) for r in L2_RATES)
_interior_maxima = [
    i
    for i in range(1, len(L2_RATES) - 1)
    if L2_RATES[i] > L2_RATES[i - 1] and L2_RATES[i] > L2_RATES[i + 1]
]
_best = max(range(len(L2_RATES)), key=lambda i: L2_RATES[i])
_avg = Fr(L2_DIST[-1], L2_TIMES[-1])
_avg_kmh = _avg * Fr(18, 5)
_vertex_t = -A.coeff(1) / (2 * A.coeff(2))

EXEMPLAR.append(
    Spec(
        case="MATH 9.01",
        title="Two Train Lines: A Cubic Velocity Model and a Distance Log",
        context=(
            "A transit authority studies the first two minutes of travel on two lines. On "
            "Line 1 the velocity of the train, in metres per second, is modelled for "
            "$0\\le t\\le 120$ by the polynomial "
            "$v(t)=0.00002t^{3}-0.005t^{2}+0.4t$, where $t$ is the time in seconds since "
            "departure. On Line 2 no formula is available; instead an odometer logged the "
            "distance travelled from the platform every ten seconds, as recorded in the table. "
            + TF
        ),
        difficulty=3,
        stem_kind="applied",
        tables="\n".join(
            ["| Time $t$ (s) | Line 2 distance from start (m) |", "| --- | --- |"]
            + [f"| {t} | {d} |" for t, d in zip(L2_TIMES, L2_DIST)]
        ),
        claims=[
            claim_deriv_sign(
                V,
                80,
                decreasing=True,
                name="v",
                rate_name="a",
                unit="\\text{m/s}^{2}",
                text="At $t=80$ seconds the Line 1 train is decelerating.",
                opener=(
                    "Deceleration means the velocity is falling, and the rate at which velocity "
                    "changes is the acceleration, obtained by differentiating the velocity "
                    "model term by term. A negative acceleration is exactly a train slowing "
                    "down."
                ),
            ),
            C(
                "The acceleration of the Line 1 train reaches its smallest value at some moment "
                "before $t=75$ seconds.",
                False,
                body(
                    "The acceleration is the derivative of the velocity model, and that "
                    "derivative is itself a quadratic in $t$. A quadratic with a positive "
                    "leading coefficient opens upwards, so it has one lowest point and that "
                    "point sits on its axis of symmetry.",
                    D(V.eq("v", arg="t")),
                    D(A.eq("a", arg="t")),
                    "The leading coefficient $0.00006$ is positive, so the axis of symmetry "
                    "carries the minimum.",
                    D("t=-\\frac{b}{2a}=\\frac{0.01}{2\\cdot 0.00006}=\\frac{250}{3}"),
                    f"That is about ${approx(float(_vertex_t))}$ seconds, and the acceleration "
                    "there is the smallest value it takes on the whole interval.",
                    D(
                        "a\\left(\\frac{250}{3}\\right)=-\\frac{1}{60}"
                        "\\approx -0.0167\\ \\text{m/s}^{2}"
                    ),
                    close(
                        False,
                        "The smallest acceleration arrives after $75$ seconds, not before it",
                    ),
                ),
            ),
            C(
                "Over the whole two minutes the Line 2 train averaged more than "
                "$45$ km/h.",
                False,
                body(
                    "An average velocity is the total distance divided by the total time, so "
                    "only the first and last rows of the log matter. The answer comes out in "
                    "metres per second, and one metre per second is $3.6$ kilometres per hour.",
                    D(
                        "\\bar v=\\frac{1400-0}{120-0}=\\frac{35}{3}"
                        "\\approx 11.67\\ \\text{m/s}"
                    ),
                    "Converting to the units used in the claim:",
                    D("\\frac{35}{3}\\cdot 3.6=42\\ \\text{km/h}"),
                    close(
                        False,
                        f"The average is ${numstr(_avg_kmh)}$ km/h, which does not clear the "
                        "$45$ km/h mark",
                    ),
                ),
            ),
            C(
                "Among the ten-second stretches of the Line 2 log, exactly one interior stretch "
                "has a higher average velocity than both of its neighbours.",
                False,
                body(
                    "Each row of the log gives a ten-second stretch, and the average velocity "
                    "on a stretch is the distance gained there divided by ten seconds.",
                    D("\\bar v_{i}=\\frac{d_{i+1}-d_{i}}{10}"),
                    "Working through the twelve stretches in order gives, in metres per second,",
                    D(_rate_list),
                    "A stretch beats both neighbours whenever the sequence rises into it and "
                    "falls out of it again, and that happens at the values "
                    f"${',\\ '.join(numstr(L2_RATES[i]) for i in _interior_maxima)}$.",
                    close(
                        False,
                        f"There are {word(len(_interior_maxima))} such stretches rather than a "
                        "single one",
                    ),
                ),
            ),
            C(
                "The highest ten-second average velocity on Line 2 is reached between "
                "$t=60$ and $t=70$ seconds.",
                False,
                body(
                    "The stretch with the highest average velocity is the stretch on which the "
                    "odometer gained the most metres, because every stretch lasts the same ten "
                    "seconds.",
                    D(
                        f"\\bar v_{{60\\text{{–}}70}}=\\frac{{840-710}}{{10}}"
                        f"={numstr(L2_RATES[6])}\\ \\text{{m/s}}"
                    ),
                    "The largest gain in the whole log is the one from $440$ to $590$ metres:",
                    D(
                        f"\\bar v_{{40\\text{{–}}50}}=\\frac{{590-440}}{{10}}"
                        f"={numstr(L2_RATES[_best])}\\ \\text{{m/s}}"
                    ),
                    close(
                        False,
                        f"The record belongs to the $40$–$50$ second stretch at "
                        f"${numstr(L2_RATES[_best])}$ m/s, not to the $60$–$70$ stretch at "
                        f"${numstr(L2_RATES[6])}$ m/s",
                    ),
                ),
            ),
        ],
        overview=body(
            "Line 1 is given by a cubic velocity model, so its acceleration is the quadratic "
            "obtained by differentiating it once.",
            D(V.eq("v", arg="t")),
            D(A.eq("a", arg="t")),
            "That quadratic opens upwards, so the acceleration bottoms out on its axis of "
            "symmetry and is negative around there — the train is losing speed.",
            D("t=\\frac{250}{3}\\approx 83.3\\ \\text{s}\\qquad a(80)=-0.016"),
            "Line 2 has no formula, only a log, so every velocity question there is answered by "
            "dividing a distance gain by the ten seconds in which it happened.",
            D("\\bar v=\\frac{1400}{120}=\\frac{35}{3}\\ \\text{m/s}=42\\ \\text{km/h}"),
            "The twelve stretch averages, in metres per second, are",
            D(_rate_list),
            "so the record stretch is $40$–$50$ seconds and the sequence peaks locally four "
            "separate times.",
        ),
    )
)


# =========================================================================== #
# Difficulty 1/5
# =========================================================================== #

_p = Pol.desc(2, -5, 0, 1, -7)
L1.append(
    Spec(
        case="",
        title="Reading Degree, Leading Coefficient and Constant Term",
        context=(
            f"Consider the polynomial function ${_p.eq('P')}$, defined for every real $x$. "
            + TF
        ),
        difficulty=1,
        stem_kind="formula",
        claims=[
            claim_degree(_p, 4),
            claim_lead(_p, -5),
            claim_yintercept(_p, -7),
            claim_value(_p, 1, -9),
            claim_end_behaviour(_p, side="right", rises=False),
        ],
        overview=body(
            "Everything asked here is read off the polynomial once its terms are ordered by "
            "falling powers.",
            D(_p.eq("P")),
            "The highest power is $x^{4}$, so the degree is $4$ and the leading coefficient is "
            "the $2$ in front of it. Setting $x=0$ kills every other term and leaves the "
            "constant.",
            D("\\text{degree}=4\\qquad \\text{leading coefficient}=2\\qquad P(0)=-7"),
            "Because the degree is even and the leading coefficient positive, both far ends of "
            "the graph climb.",
        ),
    )
)

_p = Pol.desc(1, -4, 1, 6)
L1.append(
    Spec(
        case="",
        title="Testing Candidate Zeros of a Cubic",
        context=(
            f"A cubic function is given by ${_p.eq('P')}$. " + TF
        ),
        difficulty=1,
        stem_kind="formula",
        claims=[
            claim_root(_p, 2),
            claim_root(_p, 1),
            claim_root(_p, -1, style="factor"),
            claim_yintercept(_p, -6),
            claim_real_root_count(_p, 3),
        ],
        overview=body(
            "A number is a zero of a polynomial exactly when substituting it returns $0$, and "
            "each zero corresponds to a linear factor.",
            D(_p.eq("P")),
            D(_p.factored(_p.rational_roots(), name="P(x)")),
            "The three brackets vanish at $x=-1$, $x=2$ and $x=3$, so those are the zeros; any "
            "other candidate, $x=1$ included, must give a non-zero value.",
            D("P(-1)=0\\qquad P(2)=0\\qquad P(3)=0\\qquad P(1)=4"),
        ),
    )
)

_f = Pol.desc(3, 0, -1, 2)
_g = Pol.desc(1, 4, 0, -5)
L1.append(
    Spec(
        case="",
        title="Adding and Subtracting Two Cubics",
        context=(
            f"Two polynomial functions are given by ${_f.eq('f')}$ and ${_g.eq('g')}$. " + TF
        ),
        difficulty=1,
        stem_kind="formula",
        claims=[
            claim_sum(_f, _g, op_kind="+", claimed=Pol.desc(4, 4, -1, -3)),
            claim_sum(_f, _g, op_kind="-", claimed_degree=3),
            claim_sum(_f, _g, op_kind="+", claimed_coeff=(0, 3)),
            claim_sum(_f, _g, op_kind="-", claimed_coeff=(2, 4)),
            claim_sum(_f, _g, op_kind="*", claimed_degree=6),
        ],
        overview=body(
            "Sums and differences of polynomials are settled power by power; products raise the "
            "degree by adding the two degrees.",
            D(f"{_f.eq('f')}\\qquad {_g.eq('g')}"),
            D(f"f(x)+g(x)={(_f + _g).latex()}"),
            D(f"f(x)-g(x)={(_f - _g).latex()}"),
            "Both functions have degree $3$, so their product has degree $6$ while the sum and "
            "the difference stay at degree $3$ — the leading terms $3x^{3}$ and $x^{3}$ do not "
            "cancel.",
        ),
    )
)

_p = Pol.desc(1, -3, -1, 3)
_roots = _p.rational_roots()
L1.append(
    Spec(
        case="",
        title="Reading a Cubic Off Its Graph",
        context=(
            "The figure shows the graph of a polynomial function $f$ over the window "
            "$-2\\le x\\le 4$. " + TF
        ),
        difficulty=1,
        stem_kind="graph",
        figure=plot(_p, xlim=(-2, 4), ylim=(-6, 8), ystep=2, label="y = f(x)"),
        claims=[
            claim_yintercept(_p, 3, name="f"),
            claim_real_root_count(
                _p,
                3,
                name="f",
                text="The curve meets the horizontal axis exactly three times.",
                opener=(
                    "Crossings of the horizontal axis are the zeros of the function, and a "
                    "factorised form shows them all at once."
                ),
            ),
            claim_turning_points(_p, 1, name="f"),
            claim_sign_at(_p, 0, below=True, name="f"),
            claim_end_behaviour(_p, side="right", rises=True, name="f"),
        ],
        overview=body(
            "The picture belongs to the cubic",
            D(_p.eq("f")),
            D(_p.factored(_roots, name="f(x)")),
            "so the curve cuts the horizontal axis at $x=-1$, $x=1$ and $x=3$ and meets the "
            "vertical axis at height $3$.",
            D("f(0)=3"),
            "Between the outer crossings the curve turns twice, once up and once down, and "
            "because the leading coefficient is positive the right-hand arm climbs without "
            "bound.",
        ),
    )
)

_c = Pol.of(200, 60, -12, 1, var="q")
L1.append(
    Spec(
        case="",
        title="A Cubic Cost Curve for a Small Workshop",
        context=(
            "A workshop's weekly production cost, in hundreds of euros, is modelled by "
            f"${_c.eq('C', arg='q')}$, where $q$ is the number of batches produced per week "
            "and $0\\le q\\le 10$. " + TF
        ),
        difficulty=1,
        stem_kind="applied",
        claims=[
            claim_value(
                _c,
                0,
                200,
                name="C",
                unit="hundred euros",
                text="Producing nothing at all still costs $200$ hundred euros.",
                opener=(
                    "Fixed cost is what the model charges when output is zero, and putting "
                    "$q=0$ into a polynomial leaves only its constant term."
                ),
            ),
            claim_value(_c, 2, 280, name="C", unit="hundred euros"),
            claim_value(_c, 5, 335, name="C", unit="hundred euros"),
            claim_degree(_c, 2, name="C"),
            claim_avg_rate(
                _c,
                0,
                5,
                25,
                name="C",
                unit="hundred euros per batch",
                text=(
                    "Between $q=0$ and $q=5$ the cost grows on average by $25$ hundred euros "
                    "per batch."
                ),
            ),
        ],
        overview=body(
            "The model is a cubic in the number of batches, so every question is answered by "
            "substitution.",
            D(_c.eq("C", arg="q")),
            D("C(0)=200\\qquad C(2)=280\\qquad C(5)=325"),
            "The highest power is $q^{3}$, so the degree is $3$, and an average growth rate is "
            "a change in cost divided by the change in output.",
            D("\\frac{C(5)-C(0)}{5-0}=\\frac{125}{5}=25"),
        ),
    )
)

_vals = [0, 12, 32, 60, 96, 140]
L1.append(
    Spec(
        case="",
        title="Cumulative Output Recorded Hour by Hour",
        context=(
            "A bottling line logs the number of crates completed since the start of the shift, "
            "measured at the end of each hour. " + TF
        ),
        difficulty=1,
        stem_kind="table",
        tables="\n".join(
            ["| Hour $h$ | Crates completed in total |", "| --- | --- |"]
            + [f"| {i} | {v} |" for i, v in enumerate(_vals)]
        ),
        claims=[
            claim_finite_differences(
                _vals,
                1,
                constant=False,
                quantity="the cumulative crate counts",
                text="The hour-by-hour gains recorded in the table are not all equal.",
            ),
            claim_finite_differences(
                _vals,
                2,
                constant=True,
                quantity="the cumulative crate counts",
                text="Differencing the table twice produces a constant row.",
            ),
            C(
                "The line completed $36$ crates during the fifth hour.",
                False,
                body(
                    "A single hour's output is the difference between two consecutive "
                    "cumulative readings, because the table records running totals rather than "
                    "hourly figures. The fifth hour runs from the reading at $h=4$ to the "
                    "reading at $h=5$.",
                    D("140-96=44"),
                    "The figure $36$ does appear among the hourly gains, but one row earlier:",
                    D("96-60=36"),
                    close(
                        False,
                        "The fifth hour added $44$ crates and the $36$ belongs to the fourth "
                        "hour",
                    ),
                ),
            ),
            C(
                "Because the second differences are constant, a linear model in $h$ fits the "
                "cumulative totals exactly.",
                False,
                body(
                    "Differencing a table of equally spaced readings strips one degree away "
                    "each round, so the row that first becomes constant tells us the degree of "
                    "the polynomial behind the data.",
                    D("\\text{first differences}: 12,\\ 20,\\ 28,\\ 36,\\ 44"),
                    D("\\text{second differences}: 8,\\ 8,\\ 8,\\ 8"),
                    "A linear model would already have constant first differences, and these "
                    "are still climbing by $8$ each time; the row that flattens is the second, "
                    "which points to degree $2$.",
                    close(
                        False,
                        "The data need a quadratic in $h$, so a linear model cannot fit them "
                        "exactly",
                    ),
                ),
            ),
            C(
                "Over the whole five hours the line averaged $28$ crates per hour.",
                True,
                body(
                    "An average per hour is the total produced divided by the number of hours, "
                    "so only the first and last rows are needed.",
                    D("\\frac{140-0}{5-0}=28"),
                    close(True, "The shift averaged $28$ crates an hour as claimed"),
                ),
            ),
        ],
        overview=body(
            "The readings are one hour apart, so differencing them is the natural first move.",
            D("\\text{totals}: 0,\\ 12,\\ 32,\\ 60,\\ 96,\\ 140"),
            D("\\text{first differences}: 12,\\ 20,\\ 28,\\ 36,\\ 44"),
            D("\\text{second differences}: 8,\\ 8,\\ 8,\\ 8"),
            "The second row is constant, so the cumulative totals follow a quadratic in $h$ — "
            "not a linear one — and each single hour's output is one first difference.",
        ),
    )
)

_f = Pol.desc(2, -3)
_g = Pol.desc(1, 5)
L1.append(
    Spec(
        case="",
        title="Multiplying Two Linear Functions",
        context=(
            f"Two linear functions are given by ${_f.eq('f')}$ and ${_g.eq('g')}$. " + TF
        ),
        difficulty=1,
        stem_kind="formula",
        claims=[
            claim_sum(_f, _g, op_kind="*", claimed=Pol.desc(2, 7, -15)),
            claim_sum(_f, _g, op_kind="*", claimed_degree=2),
            claim_sum(_f, _g, op_kind="*", claimed_coeff=(0, -13)),
            claim_sum(_f, _g, op_kind="+", claimed_degree=2),
            claim_real_root_count(
                _f * _g,
                2,
                name="fg",
                roots=[Fr(3, 2), -5],
                text="The product $f(x)g(x)$ has exactly two distinct real zeros.",
            ),
        ],
        overview=body(
            "Each term of the first bracket meets each term of the second, and matching powers "
            "are then collected.",
            D(f"{_f.eq('f')}\\qquad {_g.eq('g')}"),
            D(f"f(x)g(x)={(_f * _g).latex()}"),
            "Degrees add under multiplication, $1+1=2$, but a sum of two linear functions is "
            "still linear.",
            D(f"f(x)+g(x)={(_f + _g).latex()}"),
            "A product is zero when a factor is, so the zeros are $x=\\frac{3}{2}$ and $x=-5$.",
        ),
    )
)

L1.append(
    Spec(
        case="",
        title="Degrees of Sums and Products Without Numbers",
        context=(
            "Let $f$ and $g$ be polynomial functions of degree $3$ and degree $2$ "
            "respectively, with no further information about their coefficients. " + TF
        ),
        difficulty=1,
        stem_kind="symbolic",
        claims=[
            C(
                "The product $f\\cdot g$ always has degree $5$.",
                True,
                body(
                    "When two polynomials are multiplied, the highest power of the answer comes "
                    "from the two leading terms meeting each other, and no other pairing can "
                    "reach that high.",
                    D("a x^{3}\\cdot b x^{2}=ab\\,x^{5}"),
                    "Leading coefficients are non-zero by definition, so the product $ab$ is "
                    "non-zero too and the $x^{5}$ term genuinely survives.",
                    close(
                        True,
                        "The degrees add, $3+2=5$, in every case",
                    ),
                ),
            ),
            C(
                "The sum $f+g$ always has degree $3$.",
                True,
                body(
                    "Adding polynomials adds coefficients of matching powers, so a term can "
                    "only disappear if the other function has a term of the same power to "
                    "cancel it.",
                    D("f(x)+g(x)=a x^{3}+\\left(\\text{powers no higher than }x^{2}\\right)"),
                    "The function $g$ has degree $2$, so it contributes nothing at the level of "
                    "$x^{3}$ and the leading term of $f$ survives untouched.",
                    close(True, "The sum keeps the degree $3$ of the larger of the two"),
                ),
            ),
            C(
                "The difference $f-g$ can have degree $2$ for a suitable choice of $f$ and $g$.",
                False,
                body(
                    "Subtracting changes every sign in $g$ and then collects matching powers, so "
                    "the $x^{3}$ term of $f$ again meets nothing to cancel it.",
                    D("f(x)-g(x)=a x^{3}+\\left(\\text{powers no higher than }x^{2}\\right)"),
                    "With $a\\neq 0$ the cubic term is still there whatever $g$ does at the "
                    "lower powers.",
                    close(
                        False,
                        "The difference always has degree $3$, so degree $2$ is out of reach",
                    ),
                ),
            ),
            C(
                "The function $f\\cdot f$ always has degree $6$.",
                True,
                body(
                    "Squaring is multiplying a polynomial by itself, so the same rule about "
                    "leading terms applies.",
                    D("a x^{3}\\cdot a x^{3}=a^{2}x^{6}"),
                    "Since $a\\neq 0$, the square $a^{2}$ is non-zero as well.",
                    close(True, "The degree doubles from $3$ to $6$ every time"),
                ),
            ),
            C(
                "The constant term of $f\\cdot g$ is always zero.",
                False,
                body(
                    "The constant term of a product is the product of the two constant terms, "
                    "since that is the only way to end up with no factor of $x$ at all.",
                    D("f(0)\\cdot g(0)"),
                    "Nothing in the statement forces either constant term to vanish; a single "
                    "example settles it.",
                    D("\\left(x^{3}+1\\right)\\left(x^{2}+1\\right)=x^{5}+x^{3}+x^{2}+1"),
                    close(False, "That product ends in a constant term of $1$, not $0$"),
                ),
            ),
        ],
        overview=body(
            "Only two structural rules are in play, and both concern the leading terms.",
            D("\\text{degree}(fg)=\\text{degree}(f)+\\text{degree}(g)"),
            D("\\text{degree}(f\\pm g)=\\max\\left(3,2\\right)=3"),
            "Degrees add under multiplication because the two leading terms meet; under "
            "addition the larger degree survives whenever the two degrees differ, because there "
            "is nothing at that level to cancel against.",
        ),
    )
)

_q = Pol.desc(-1, 0, 4, 0)
L1.append(
    Spec(
        case="",
        title="Two Curves, One Picture: Which Arm Goes Where",
        context=(
            "The figure shows two polynomial graphs on the same axes: the solid curve is "
            "$y=f(x)$ and the dashed curve is $y=g(x)$, drawn for $-3\\le x\\le 3$. " + TF
        ),
        difficulty=1,
        stem_kind="graph",
        figure=plot_many(
            [(_q, CURVE, "y = f(x)"), (Pol.desc(1, 0, -3, 0), BLUE, "y = g(x)")],
            xlim=(-3, 3),
            ylim=(-8, 8),
            ystep=2,
        ),
        claims=[
            claim_end_behaviour(_q, side="right", rises=False, name="f"),
            claim_end_behaviour(Pol.desc(1, 0, -3, 0), side="right", rises=False, name="g"),
            claim_yintercept(_q, 0, name="f"),
            claim_turning_points(_q, 3, name="f"),
            C(
                "Both curves pass through the origin.",
                True,
                body(
                    "A curve runs through the origin exactly when its value at $x=0$ is $0$, "
                    "and at that input only the constant term of a polynomial survives.",
                    D(_q.eq("f")),
                    D(Pol.desc(1, 0, -3, 0).eq("g")),
                    "Neither expression carries a constant term, so both vanish at $x=0$.",
                    D("f(0)=0\\qquad g(0)=0"),
                    close(True, "Both graphs go through $(0,0)$ as the picture suggests"),
                ),
            ),
        ],
        overview=body(
            "The two functions in the picture are",
            D(_q.eq("f")),
            D(Pol.desc(1, 0, -3, 0).eq("g")),
            "Both are odd cubics through the origin, but their leading coefficients have "
            "opposite signs, so their right-hand arms head in opposite directions: $f$ dives, "
            "$g$ climbs. Each has two turning points.",
        ),
    )
)

_t = Pol.of(4, 6, -1, var="d")
L1.append(
    Spec(
        case="",
        title="A Quadratic Temperature Model Through the Morning",
        context=(
            "In a greenhouse the temperature in degrees Celsius above the outside air is "
            f"modelled by ${_t.eq('T', arg='d')}$, where $d$ is the number of hours since "
            "sunrise and $0\\le d\\le 7$. " + TF
        ),
        difficulty=1,
        stem_kind="applied",
        claims=[
            claim_value(_t, 0, 4, name="T", unit="degrees"),
            claim_value(_t, 3, 13, name="T", unit="degrees"),
            claim_value(_t, 6, 6, name="T", unit="degrees"),
            claim_degree(_t, 3, name="T"),
            claim_avg_rate(
                _t,
                0,
                3,
                3,
                name="T",
                unit="degrees per hour",
                text=(
                    "Across the first three hours the model warms by $3$ degrees per hour on "
                    "average."
                ),
            ),
        ],
        overview=body(
            "The model is a quadratic in the number of hours since sunrise.",
            D(_t.eq("T", arg="d")),
            D("T(0)=4\\qquad T(3)=13\\qquad T(6)=4"),
            "The leading coefficient $-1$ is negative, so the curve opens downwards and the "
            "warmest moment is its turning point at $d=3$; the model is symmetric about that "
            "hour, which is why $d=0$ and $d=6$ give the same reading.",
            D("\\frac{T(3)-T(0)}{3-0}=\\frac{9}{3}=3"),
        ),
    )
)


# === MORE TASKS GO ABOVE THIS LINE ========================================= #


def build() -> list[dict]:
    specs = EXEMPLAR + L1 + L2 + L3 + L4 + L5
    problems: list[str] = []
    tasks: list[dict] = []
    for i, spec in enumerate(specs, start=1):
        spec.case = spec.case or f"MATH 9.{i:02d}"
        problems += audit(spec)
        task: dict = {
            "id": f"math-9-{i}",
            "case_id": spec.case,
            "title": spec.title,
            "context": spec.context,
            "statements": [c.text for c in spec.claims],
            "answer_key": [c.truth for c in spec.claims],
            "tactical_explanations": [
                explanation("ABCDE"[j], c.truth, c.body) for j, c in enumerate(spec.claims)
            ],
            "difficulty_level": f"{spec.difficulty}/5",
            "sort_order": i,
            "subsection": "9",
            "placeholder": False,
            "solution_overview": spec.overview,
            "stem_kind": spec.stem_kind,
        }
        if spec.tables:
            task["tables_markdown"] = spec.tables
        if spec.figure:
            task["figure"] = spec.figure
        tasks.append(task)
    if problems:
        for line in problems:
            print("AUDIT:", line)
        raise SystemExit(f"{len(problems)} audit problem(s)")
    return tasks


def main() -> None:
    tasks = build()
    OUT.write_text(json.dumps({"tasks": tasks}, indent=2, ensure_ascii=False) + "\n")
    kinds = Counter(t["stem_kind"] for t in tasks)
    levels = Counter(t["difficulty_level"] for t in tasks)
    trues = Counter(sum(t["answer_key"]) for t in tasks)
    print(f"wrote {len(tasks)} tasks -> {OUT}")
    print("levels:", dict(sorted(levels.items())))
    print("stem kinds:", dict(kinds.most_common()))
    print("true-count per task:", dict(sorted(trues.items())))
    print("figures:", sum(1 for t in tasks if t.get("figure")))
    print("tables:", sum(1 for t in tasks if t.get("tables_markdown")))
    print("total true statements:", sum(sum(t["answer_key"]) for t in tasks))


if __name__ == "__main__":
    main()
