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

# =========================================================================== #
# Difficulty 2/5
# =========================================================================== #

_p = Pol.desc(2, -3, -11, 6)
L2.append(
    Spec(
        case="",
        title="Factor Theorem and Remainders on a Cubic",
        context=f"Let ${_p.eq('P')}$ for every real $x$. " + TF,
        difficulty=2,
        stem_kind="formula",
        claims=[
            claim_root(_p, 3, style="factor"),
            claim_remainder(_p, 1, 6),
            claim_root(_p, Fr(-1, 2)),
            claim_real_root_count(_p, 3),
            claim_value(_p, 2, -12),
        ],
        overview=body(
            "Everything here rests on one fact: substituting a number into a polynomial gives "
            "the remainder left by dividing out the matching linear bracket, so a zero and a "
            "factor are the same piece of information.",
            D(_p.eq("P")),
            D(_p.factored(_p.rational_roots(), name="P(x)")),
            "The three brackets vanish at $x=-2$, $x=\\frac{1}{2}$ and $x=3$, so those are the "
            "zeros; any other input leaves a non-zero remainder.",
            D("P(1)=-6\\qquad P(2)=-12\\qquad P\\left(-\\frac{1}{2}\\right)=\\frac{21}{2}"),
        ),
    )
)

_f = Pol.desc(1, -4)
_g = Pol.desc(3, 1, -2)
L2.append(
    Spec(
        case="",
        title="Hunting Coefficients in a Product",
        context=f"Two functions are given by ${_f.eq('f')}$ and ${_g.eq('g')}$. " + TF,
        difficulty=2,
        stem_kind="formula",
        claims=[
            claim_sum(_f, _g, op_kind="*", claimed=Pol.desc(3, -11, -6, 8)),
            claim_sum(_f, _g, op_kind="*", claimed_coeff=(2, -11)),
            claim_sum(_f, _g, op_kind="*", claimed_coeff=(0, -8)),
            claim_sum(_f, _g, op_kind="*", claimed_degree=3),
            claim_sum(_f, _g, op_kind="+", claimed_degree=3),
        ],
        overview=body(
            "Multiplying a linear function by a quadratic one gives every term of the first a "
            "turn against every term of the second.",
            D(f"{_f.eq('f')}\\qquad {_g.eq('g')}"),
            D(f"f(x)g(x)={(_f * _g).latex()}"),
            "Degrees add here, $1+2=3$, but adding the two functions cannot lift anything above "
            "the quadratic already present in $g$.",
            D(f"f(x)+g(x)={(_f + _g).latex()}"),
        ),
    )
)

_p = Pol.desc(-2, 1, 0, 0, -5)
L2.append(
    Spec(
        case="",
        title="Both Arms of a Quartic With a Negative Lead",
        context=f"Consider the polynomial function ${_p.eq('P')}$. " + TF,
        difficulty=2,
        stem_kind="formula",
        claims=[
            claim_degree(_p, 4),
            claim_lead(_p, -2),
            claim_end_behaviour(_p, side="right", rises=False),
            claim_end_behaviour(_p, side="left", rises=True),
            claim_yintercept(_p, 5),
        ],
        overview=body(
            "For large inputs the quartic term decides everything, so both arms of the graph "
            "follow the sign of $-2x^{4}$.",
            D(_p.eq("P")),
            D("\\text{leading term}=-2x^{4}"),
            "An even power keeps the sign of $x^{4}$ positive on both sides, and the factor "
            "$-2$ then turns both arms downwards. Only the constant term survives at $x=0$.",
            D("P(0)=-5"),
        ),
    )
)

_p = Pol.desc(1, 0, -5, 0, 4)
L2.append(
    Spec(
        case="",
        title="A Quartic Graph With Four Crossings",
        context=(
            "The figure shows the graph of a polynomial function $f$ on the window "
            "$-2.6\\le x\\le 2.6$. " + TF
        ),
        difficulty=2,
        stem_kind="graph",
        figure=plot(_p, xlim=(-2.6, 2.6), ylim=(-4, 10), ystep=2, label="y = f(x)"),
        claims=[
            claim_real_root_count(
                _p,
                4,
                name="f",
                roots=[-2, -1, 1, 2],
                text="The curve meets the horizontal axis exactly four times.",
                opener=(
                    "The crossings are the zeros of the function, and here the expression "
                    "splits into linear brackets, each handing over one crossing."
                ),
            ),
            claim_yintercept(_p, 4, name="f"),
            claim_turning_points(_p, 2, name="f"),
            C(
                "The curve is symmetric about the vertical axis.",
                True,
                body(
                    "A graph is symmetric about the vertical axis exactly when replacing $x$ by "
                    "$-x$ leaves the function unchanged, and that happens when only even "
                    "powers appear.",
                    D(_p.eq("f")),
                    "Every power present here is even, and an even power cannot notice a change "
                    "of sign in the input.",
                    D("f(-x)=\\left(-x\\right)^{4}-5\\left(-x\\right)^{2}+4=x^{4}-5x^{2}+4"),
                    close(True, "The two expressions agree for every $x$"),
                ),
            ),
            claim_end_behaviour(_p, side="left", rises=False, name="f"),
        ],
        overview=body(
            "The curve in the picture belongs to",
            D(_p.eq("f")),
            D(_p.factored([-2, -1, 1, 2], name="f(x)")),
            "so it cuts the horizontal axis at $x=-2,-1,1,2$ and passes the vertical axis at "
            "height $4$. Only even powers appear, which is the symmetry visible in the drawing.",
            D("f(0)=4"),
            "Between the four crossings the curve must turn three times, and both arms climb "
            "because the degree is even with a positive leading coefficient.",
        ),
    )
)

_p = Pol.desc(1, 0, -3, 2)
L2.append(
    Spec(
        case="",
        title="Where a Cubic Only Touches the Axis",
        context=(
            "The figure shows the graph of a polynomial function $f$ on the window "
            "$-3\\le x\\le 2.5$. " + TF
        ),
        difficulty=2,
        stem_kind="graph",
        figure=plot(_p, xlim=(-3, 2.5), ylim=(-4, 8), ystep=2, label="y = f(x)"),
        claims=[
            claim_real_root_count(
                _p,
                2,
                name="f",
                roots=[-2, 1],
                text="The curve meets the horizontal axis at exactly two places.",
                opener=(
                    "Two of the three linear factors of this cubic turn out to be the same, so "
                    "the list of crossings is shorter than the degree."
                ),
            ),
            claim_root(_p, 1, name="f"),
            C(
                "At $x=1$ the curve passes from one side of the horizontal axis to the other.",
                False,
                body(
                    "A curve changes side only if the values around the zero have opposite "
                    "signs, so the sign just left and just right of $x=1$ decides it.",
                    D("f(x)=\\left(x-1\\right)^{2}\\left(x+2\\right)"),
                    "The bracket $\\left(x-1\\right)^{2}$ is a square, so it is never negative, "
                    "and near $x=1$ the other bracket $\\left(x+2\\right)$ stays positive.",
                    D("f(0.9)=0.029\\qquad f(1.1)=0.031"),
                    close(
                        False,
                        "The values on both sides are positive, so the curve only touches the "
                        "axis and turns back",
                    ),
                ),
            ),
            claim_yintercept(_p, 2, name="f"),
            claim_turning_points(_p, 3, name="f"),
        ],
        overview=body(
            "The picture belongs to the cubic",
            D(_p.eq("f")),
            D("f(x)=\\left(x-1\\right)^{2}\\left(x+2\\right)"),
            "The repeated bracket at $x=1$ is a square, so the curve reaches the axis there and "
            "bounces back instead of crossing; at $x=-2$ the single bracket lets it pass "
            "through.",
            D("f(0)=2\\qquad f(1)=0\\qquad f(-2)=0"),
            "There are two turning points: the local maximum at $x=-1$ and the touching point "
            "at $x=1$ itself.",
        ),
    )
)

_v = Pol.of(0, 240, -64, 4, var="x")
L2.append(
    Spec(
        case="",
        title="An Open Box Cut From a Rectangular Sheet",
        context=(
            "A square of side $x$ centimetres is cut from each corner of a $20$ cm by $12$ cm "
            "metal sheet, and the flaps are folded up to form an open box. The volume in cubic "
            "centimetres is therefore $V(x)=x\\left(20-2x\\right)\\left(12-2x\\right)$, with "
            "$0<x<6$. " + TF
        ),
        difficulty=2,
        stem_kind="applied",
        claims=[
            C(
                f"Expanding the three brackets gives $V(x)={_v.latex()}$.",
                True,
                body(
                    "Multiplying out is a matter of taking the two large brackets first and "
                    "then letting the factor $x$ through.",
                    D(
                        "\\left(20-2x\\right)\\left(12-2x\\right)"
                        "=240-64x+4x^{2}"
                    ),
                    "Multiplying that by the remaining factor $x$ raises every power by one:",
                    D(f"V(x)={_v.latex()}"),
                    close(True, "The expansion matches the cubic written in the claim"),
                ),
            ),
            claim_value(
                _v,
                2,
                256,
                name="V",
                unit="cubic centimetres",
                text="Cutting corners of side $2$ cm gives a box of volume $256$ cm$^{3}$.",
            ),
            C(
                "At $x=6$ the formula returns a volume of zero.",
                True,
                body(
                    "The formula is a product, so it vanishes as soon as one of its factors "
                    "does; the geometry says the same thing, because a $12$ cm side loses two "
                    "flaps of $6$ cm and nothing is left to fold.",
                    D("V(6)=6\\left(20-12\\right)\\left(12-12\\right)"),
                    D("V(6)=0"),
                    close(
                        True,
                        "The middle bracket closes at $x=6$ and the volume collapses to $0$",
                    ),
                ),
            ),
            C(
                "Cutting corners of side $3$ cm gives a larger box than cutting $2$ cm.",
                False,
                body(
                    "Comparing two boxes needs nothing but the two volumes, and each of them is "
                    "one substitution into the expanded cubic.",
                    D(f"V(2)={_v.subst(2)}={numstr(_v.at(2))}"),
                    D(f"V(3)={_v.subst(3)}={numstr(_v.at(3))}"),
                    "The $3$ cm corner takes more metal out of the base than it adds in height, "
                    "so the box comes out slightly smaller.",
                    close(False, "At $252$ against $256$ cubic centimetres the $3$ cm box loses"),
                ),
            ),
            claim_degree(_v, 2, name="V"),
        ],
        overview=body(
            "The three brackets multiply out to a cubic in the corner size.",
            D(f"V(x)={_v.latex()}"),
            D("V(2)=256\\qquad V(3)=252\\qquad V(6)=0"),
            "So a $2$ cm corner already beats a $3$ cm corner, and at $x=6$ the box has no "
            "base left at all. The highest power is $x^{3}$, so the model has degree $3$.",
        ),
    )
)

_d = Pol.of(40, 18, -6, 0.5, var="t", dec=True)
L2.append(
    Spec(
        case="",
        title="Morning Water Demand as a Cubic",
        context=(
            "A utility models the town's water draw, in thousands of litres per hour, by "
            f"${_d.eq('D', arg='t')}$, where $t$ is the number of hours after 6 a.m. and "
            "$0\\le t\\le 8$. " + TF
        ),
        difficulty=2,
        stem_kind="applied",
        claims=[
            claim_value(_d, 2, 56, name="D", unit="thousand litres per hour"),
            claim_value(_d, 4, 52, name="D", unit="thousand litres per hour"),
            claim_avg_rate(
                _d,
                0,
                4,
                2,
                name="D",
                unit="thousand litres per hour, per hour",
                text=(
                    "Between 6 a.m. and 10 a.m. the draw grows on average by $2$ thousand "
                    "litres per hour, for each hour that passes."
                ),
            ),
            C(
                "The draw at noon is the same as the draw at 6 a.m.",
                True,
                body(
                    "Noon is six hours after 6 a.m., so the two readings to compare are $D(6)$ "
                    "and $D(0)$.",
                    D(_d.eq("D", arg="t")),
                    D(f"D\\left(6\\right)={_d.subst(6)}={numstr(_d.at(6), dec=True)}"),
                    D(f"D\\left(0\\right)={numstr(_d.at(0), dec=True)}"),
                    close(
                        True,
                        "Both moments give $40$ thousand litres per hour, so the model has "
                        "returned to its starting level",
                    ),
                ),
            ),
            claim_deriv_sign(
                _d,
                4,
                decreasing=False,
                name="D",
                rate_name="D'",
                unit="\\text{thousand litres per hour}^{2}",
                text="At 10 a.m. the draw is still rising.",
                opener=(
                    "Whether a modelled quantity rises or falls at a given moment is settled by "
                    "the sign of its rate of change, which is the derivative of the model."
                ),
            ),
        ],
        overview=body(
            "The model is a cubic in the hours since 6 a.m.",
            D(_d.eq("D", arg="t")),
            D("D(0)=40\\qquad D(2)=56\\qquad D(4)=48\\qquad D(6)=40"),
            "The draw climbs to a morning peak, sags back through the middle of the day and "
            "returns to its 6 a.m. level at noon. Its rate of change is",
            D(_d.deriv().eq("D'", arg="t")),
            "which is negative at $t=4$, so the quantity is falling there even though the "
            "average across the first four hours is positive.",
        ),
    )
)

_vals = [0, 3, 12, 33, 72, 135]
L2.append(
    Spec(
        case="",
        title="Reading a Degree Off a Difference Table",
        context=(
            "A laboratory records one measurement at each of the settings "
            "$n=0,1,2,3,4,5$, which are equally spaced. " + TF
        ),
        difficulty=2,
        stem_kind="table",
        tables="\n".join(
            ["| Setting $n$ | Measurement |", "| --- | --- |"]
            + [f"| {i} | {v} |" for i, v in enumerate(_vals)]
        ),
        claims=[
            claim_finite_differences(
                _vals,
                3,
                constant=True,
                quantity="the recorded measurements",
                text="Differencing the measurements three times gives a constant row.",
            ),
            claim_finite_differences(
                _vals,
                2,
                constant=True,
                quantity="the recorded measurements",
                text="Differencing the measurements twice already gives a constant row.",
            ),
            C(
                "A polynomial of degree $3$ in $n$ reproduces every entry of the table.",
                True,
                body(
                    "Each round of differencing removes one degree, so the round at which the "
                    "row first goes flat names the degree of the polynomial behind equally "
                    "spaced data.",
                    D("\\text{first differences}: 3,\\ 9,\\ 21,\\ 39,\\ 63"),
                    D("\\text{second differences}: 6,\\ 12,\\ 18,\\ 24"),
                    D("\\text{third differences}: 6,\\ 6,\\ 6"),
                    "The flat row appears on the third round, and a cubic through the six points "
                    "is exactly what that signals.",
                    D("f(n)=n^{3}+2n"),
                    close(
                        True,
                        "That cubic reproduces $0,3,12,33,72,135$ entry for entry",
                    ),
                ),
            ),
            C(
                "Continuing the pattern, the measurement at $n=6$ would be $228$.",
                True,
                body(
                    "Extending a difference table means adding one more entry to the constant "
                    "row and then working back up, each row rebuilding the one above it.",
                    D("\\text{third differences}: 6,\\ 6,\\ 6,\\ \\mathbf{6}"),
                    D("\\text{second differences}: 6,\\ 12,\\ 18,\\ 24,\\ \\mathbf{30}"),
                    D("\\text{first differences}: 3,\\ 9,\\ 21,\\ 39,\\ 63,\\ \\mathbf{93}"),
                    D("135+93=228"),
                    close(True, "The next measurement would read $228$"),
                ),
            ),
            C(
                "The measurements grow by the same amount from one setting to the next.",
                False,
                body(
                    "Equal steps from one entry to the next would mean the first differences "
                    "never change, so the first row of the table settles the matter on its own.",
                    D("\\text{first differences}: 3,\\ 9,\\ 21,\\ 39,\\ 63"),
                    "Those gaps grow steadily instead of repeating a single value.",
                    close(False, "The steps are all different, from $3$ up to $63$"),
                ),
            ),
        ],
        overview=body(
            "The settings are equally spaced, so differencing is the natural tool.",
            D("\\text{measurements}: 0,\\ 3,\\ 12,\\ 33,\\ 72,\\ 135"),
            D("\\text{first differences}: 3,\\ 9,\\ 21,\\ 39,\\ 63"),
            D("\\text{second differences}: 6,\\ 12,\\ 18,\\ 24"),
            D("\\text{third differences}: 6,\\ 6,\\ 6"),
            "The row goes flat on the third round, which names degree $3$; the cubic behind the "
            "data is $f(n)=n^{3}+2n$, and extending the table upwards predicts $228$ at $n=6$.",
        ),
    )
)

_vals = [2, 4, 12, 26, 46, 72]
L2.append(
    Spec(
        case="",
        title="Quadratic or Cubic? A Revenue Table Decides",
        context=(
            "A subscription service records monthly revenue, in thousands of euros, for its "
            "first six months. The month numbers are equally spaced. " + TF
        ),
        difficulty=2,
        stem_kind="table",
        tables="\n".join(
            ["| Month $n$ | Revenue (thousand €) |", "| --- | --- |"]
            + [f"| {i} | {v} |" for i, v in enumerate(_vals)]
        ),
        claims=[
            claim_finite_differences(
                _vals,
                2,
                constant=True,
                quantity="the monthly revenues",
                text="Differencing the revenues twice gives a constant row.",
            ),
            claim_finite_differences(
                _vals,
                1,
                constant=True,
                quantity="the monthly revenues",
                text="The revenue grows by the same amount every month.",
            ),
            C(
                "A quadratic in $n$ fits the six revenue figures exactly.",
                True,
                body(
                    "The row that first becomes constant names the degree, because each round "
                    "of differencing peels one degree away.",
                    D("\\text{first differences}: 2,\\ 8,\\ 14,\\ 20,\\ 26"),
                    D("\\text{second differences}: 6,\\ 6,\\ 6,\\ 6"),
                    "The second round is already flat, so a polynomial of degree $2$ is enough; "
                    "fitting one to the first three points gives",
                    D("R(n)=3n^{2}-n+2"),
                    close(True, "That quadratic returns $2,4,12,26,46,72$ in order"),
                ),
            ),
            claim_finite_differences(
                _vals,
                3,
                constant=True,
                quantity="the monthly revenues",
                text="Differencing the revenues three times gives a row of zeros.",
            ),
            C(
                "Extending the pattern, month $6$ would bring in $102$ thousand euros.",
                False,
                body(
                    "Extending the table means repeating the constant row once more and then "
                    "rebuilding the rows above it.",
                    D("\\text{second differences}: 6,\\ 6,\\ 6,\\ 6,\\ \\mathbf{6}"),
                    D("\\text{first differences}: 2,\\ 8,\\ 14,\\ 20,\\ 26,\\ \\mathbf{32}"),
                    D("72+32=104"),
                    "The fitted quadratic agrees:",
                    D("R(6)=3\\cdot 36-6+2=104"),
                    close(False, "Month $6$ would bring $104$ thousand euros, not $102$"),
                ),
            ),
        ],
        overview=body(
            "Six equally spaced readings invite a difference table.",
            D("\\text{revenues}: 2,\\ 4,\\ 12,\\ 26,\\ 46,\\ 72"),
            D("\\text{first differences}: 2,\\ 8,\\ 14,\\ 20,\\ 26"),
            D("\\text{second differences}: 6,\\ 6,\\ 6,\\ 6"),
            "Flat on the second round means degree $2$, so the third differences are all zero "
            "and the fitted model is",
            D("R(n)=3n^{2}-n+2"),
            "which predicts $104$ for month $6$.",
        ),
    )
)

L2.append(
    Spec(
        case="",
        title="Zeros, Factors and How Many There Can Be",
        context=(
            "Let $P$ be a polynomial function with real coefficients and let $c$ be a real "
            "number. No formula and no numerical data are supplied. " + TF
        ),
        difficulty=2,
        stem_kind="symbolic",
        claims=[
            C(
                "If $P(c)=0$, then $\\left(x-c\\right)$ is a factor of $P(x)$.",
                True,
                body(
                    "Dividing $P$ by a linear bracket leaves a quotient and a constant "
                    "remainder, because the remainder has to be of lower degree than the "
                    "divisor.",
                    D("P(x)=\\left(x-c\\right)Q(x)+r"),
                    "Substituting $x=c$ closes the bracket and exposes the remainder on its own.",
                    D("P(c)=0\\cdot Q(c)+r=r"),
                    "So the remainder is the value $P(c)$, and here that value is $0$.",
                    D("P(x)=\\left(x-c\\right)Q(x)"),
                    close(True, "With no remainder left, the bracket is a genuine factor"),
                ),
            ),
            C(
                "If $\\left(x-c\\right)$ is a factor of $P(x)$, then $P(c)=0$.",
                True,
                body(
                    "Being a factor means the polynomial can be written as that bracket times "
                    "something else, with nothing left over.",
                    D("P(x)=\\left(x-c\\right)Q(x)"),
                    "Substituting $x=c$ makes the first factor vanish, and a product with a "
                    "zero factor is zero whatever the other factor happens to be.",
                    D("P(c)=0\\cdot Q(c)=0"),
                    close(True, "The value at $c$ has to be $0$"),
                ),
            ),
            C(
                "A polynomial of degree $n\\ge 1$ can have more than $n$ distinct real zeros.",
                False,
                body(
                    "Every distinct zero contributes its own linear factor, and those factors "
                    "multiply together inside the polynomial.",
                    D(
                        "P(x)=\\left(x-c_{1}\\right)\\left(x-c_{2}\\right)\\cdots"
                        "\\left(x-c_{k}\\right)Q(x)"),
                    "Each bracket raises the degree by one, so $k$ distinct zeros already "
                    "demand degree at least $k$.",
                    D("k\\le n"),
                    close(
                        False,
                        "More than $n$ distinct zeros would force a degree above $n$, which "
                        "contradicts the assumption",
                    ),
                ),
            ),
            C(
                "Every polynomial of degree $3$ has at least one real zero.",
                True,
                body(
                    "For an odd degree the two arms of the graph are governed by the same "
                    "leading term but by opposite signs of $x^{3}$, so they leave in opposite "
                    "directions.",
                    D("P(x)=a x^{3}+\\left(\\text{lower powers}\\right)"),
                    "One arm therefore ends up above the horizontal axis and the other below "
                    "it, and a polynomial graph has no jumps or breaks anywhere.",
                    D("P(x_{1})<0<P(x_{2})"),
                    close(
                        True,
                        "An unbroken curve running from below the axis to above it has to meet "
                        "it somewhere",
                    ),
                ),
            ),
            C(
                "Every polynomial of degree $4$ has at least one real zero.",
                False,
                body(
                    "An even degree sends both arms of the graph the same way, so nothing forces "
                    "the curve to reach the horizontal axis at all.",
                    D("P(x)=x^{4}+1"),
                    "A fourth power is never negative, so the smallest value this polynomial "
                    "can take is at $x=0$.",
                    D("P(x)\\ge 1>0"),
                    close(
                        False,
                        "This degree-$4$ polynomial stays strictly above the axis and so has no "
                        "real zero",
                    ),
                ),
            ),
        ],
        overview=body(
            "Two structural facts carry all five claims. First, division by a linear bracket "
            "leaves a constant remainder equal to the value there, which ties zeros and factors "
            "together.",
            D("P(x)=\\left(x-c\\right)Q(x)+P(c)"),
            "Second, each distinct zero costs one degree, so a degree-$n$ polynomial cannot "
            "have more than $n$ of them. Parity then decides existence: an odd degree forces "
            "the arms apart and guarantees a crossing, while an even degree does not.",
            D("x^{4}+1\\ge 1>0"),
        ),
    )
)

# =========================================================================== #
# Difficulty 3/5
# =========================================================================== #

_p = Pol.desc(1, -6, 9, 4, -12)
L3.append(
    Spec(
        case="",
        title="A Repeated Bracket Inside a Quartic",
        context=(
            "A quartic function factorises as "
            "$P(x)=\\left(x-2\\right)^{2}\\left(x+1\\right)\\left(x-3\\right)$. " + TF
        ),
        difficulty=3,
        stem_kind="formula",
        claims=[
            claim_real_root_count(
                _p,
                3,
                roots=[-1, 2, 3],
                text="$P$ has exactly three distinct real zeros.",
                opener=(
                    "Zeros come from the brackets, but a bracket that appears twice still names "
                    "only one number, so the count of distinct zeros can fall short of the "
                    "degree."
                ),
            ),
            claim_degree(_p, 4),
            C(
                "At $x=2$ the graph of $P$ touches the horizontal axis without crossing it.",
                True,
                body(
                    "Crossing requires the values on the two sides of a zero to have opposite "
                    "signs, so the shape at a zero is decided by how many times its bracket "
                    "appears.",
                    D("P(x)=\\left(x-2\\right)^{2}\\left(x+1\\right)\\left(x-3\\right)"),
                    "The bracket $\\left(x-2\\right)^{2}$ is a square and never turns negative, "
                    "so the sign near $x=2$ is set by the remaining two brackets, which are "
                    "both close to $3$ and $-1$ there.",
                    D("P(1.9)=-0.0319\\qquad P(2.1)=-0.0279"),
                    close(
                        True,
                        "Both neighbours sit below the axis, so the curve comes up to the axis "
                        "and turns back down",
                    ),
                ),
            ),
            C(
                "The graph of $P$ crosses the horizontal axis four times.",
                False,
                body(
                    "A quartic has at most four zeros counted with repeats, but repeats do not "
                    "produce extra meetings with the axis and a squared bracket does not even "
                    "produce a crossing.",
                    D("P(x)=\\left(x-2\\right)^{2}\\left(x+1\\right)\\left(x-3\\right)"),
                    "The brackets vanish at $x=-1$, $x=2$ and $x=3$ only, and of those the "
                    "middle one is a touch rather than a crossing.",
                    D("\\text{crossings}=2\\qquad \\text{touches}=1"),
                    close(
                        False,
                        "The curve genuinely passes through the axis twice, at $x=-1$ and "
                        "$x=3$",
                    ),
                ),
            ),
            claim_yintercept(_p, 12),
        ],
        overview=body(
            "Multiplying the brackets out gives the expanded quartic,",
            D(_p.eq("P")),
            "but the factored form is the useful one:",
            D("P(x)=\\left(x-2\\right)^{2}\\left(x+1\\right)\\left(x-3\\right)"),
            "There are three distinct zeros, $-1$, $2$ and $3$. The squared bracket makes $x=2$ "
            "a touching point, while the two single brackets are genuine crossings.",
            D("P(0)=-12"),
        ),
    )
)

_p = Pol.desc(1, -3, 0, 4)
L3.append(
    Spec(
        case="",
        title="Matching a Picture to a Product of Brackets",
        context=(
            "The figure shows the graph of a cubic function $f$ on the window "
            "$-2\\le x\\le 3.5$. " + TF
        ),
        difficulty=3,
        stem_kind="graph",
        figure=plot(_p, xlim=(-2, 3.5), ylim=(-4, 10), ystep=2, label="y = f(x)"),
        claims=[
            claim_factored_form(
                _p,
                Pol.from_roots([-1, 2, 2]),
                candidate_latex="\\left(x+1\\right)\\left(x-2\\right)^{2}",
                name="f",
            ),
            claim_factored_form(
                _p,
                Pol.from_roots([-1, -1, 2]),
                candidate_latex="\\left(x+1\\right)^{2}\\left(x-2\\right)",
                name="f",
            ),
            claim_yintercept(_p, 4, name="f"),
            claim_turning_points(_p, 2, name="f"),
            claim_sign_at(_p, 3, below=True, name="f"),
        ],
        overview=body(
            "The drawing shows a cubic that crosses the axis once on the left and then comes "
            "down to touch it before climbing away, which is the signature of one single "
            "bracket and one squared bracket.",
            D("f(x)=\\left(x+1\\right)\\left(x-2\\right)^{2}"),
            D(_p.eq("f")),
            "The crossing is at $x=-1$ and the touch is at $x=2$; the vertical axis is met at "
            "height $4$, which is also the local maximum of the curve.",
            D("f(0)=4\\qquad f(2)=0\\qquad f(3)=4"),
            "Swapping which bracket is squared would move both features and give a different "
            "cubic altogether.",
        ),
    )
)

_p = Pol.desc(-1, 0, 5, 0, -4)
L3.append(
    Spec(
        case="",
        title="A Quartic Turned Upside Down",
        context=(
            "The figure shows the graph of a polynomial function $g$ on the window "
            "$-2.6\\le x\\le 2.6$. " + TF
        ),
        difficulty=3,
        stem_kind="graph",
        figure=plot(_p, xlim=(-2.6, 2.6), ylim=(-8, 4), ystep=2, label="y = g(x)"),
        claims=[
            claim_end_behaviour(_p, side="right", rises=False, name="g"),
            claim_real_root_count(
                _p,
                4,
                name="g",
                roots=[-2, -1, 1, 2],
                text="The curve meets the horizontal axis exactly four times.",
                opener=(
                    "The crossings are the zeros, and the expression comes apart into four "
                    "linear brackets once the minus sign is pulled out front."
                ),
            ),
            claim_yintercept(_p, -4, name="g"),
            claim_turning_points(_p, 2, name="g"),
            C(
                "The largest value $g$ takes on the window is reached at $x=0$.",
                False,
                body(
                    "The value at $x=0$ is only the constant term, and the picture shows two "
                    "humps rising above it on either side, so the peak must be looked for away "
                    "from the vertical axis.",
                    D(_p.eq("g")),
                    D("g(0)=-4"),
                    "The humps sit where the curve turns, at $x=\\pm\\sqrt{\\frac{5}{2}}"
                    "\\approx \\pm 1.58$, and there the value is",
                    D("g\\left(\\pm 1.58\\right)\\approx 2.25"),
                    close(
                        False,
                        "The value $2.25$ on the humps beats the $-4$ at the origin, so $x=0$ "
                        "is a local low point rather than the highest place",
                    ),
                ),
            ),
        ],
        overview=body(
            "The curve in the picture belongs to",
            D(_p.eq("g")),
            D("g(x)=-\\left(x+2\\right)\\left(x+1\\right)\\left(x-1\\right)\\left(x-2\\right)"),
            "so it crosses the axis at $x=-2,-1,1,2$ and passes the vertical axis at $-4$. The "
            "leading coefficient is negative and the degree even, so both arms plunge.",
            D("g(0)=-4\\qquad g\\left(\\pm 1.58\\right)\\approx 2.25"),
            "Between the four crossings the curve turns three times: two humps above the axis "
            "and the dip at the origin between them.",
        ),
    )
)

_c = Pol.of(500, 40, -1.5, 0.02, var="q", dec=True)
L3.append(
    Spec(
        case="",
        title="Marginal Cost From a Cubic Cost Function",
        context=(
            "A plant's total weekly cost in euros is modelled by "
            f"${_c.eq('C', arg='q')}$, where $q$ is the number of units produced and "
            "$0\\le q\\le 60$. " + TF
        ),
        difficulty=3,
        stem_kind="applied",
        claims=[
            claim_value(_c, 10, 770, name="C", unit="euros"),
            C(
                "The marginal cost function of the plant is "
                f"$C'(q)={_c.deriv().latex()}$.",
                True,
                body(
                    "Marginal cost is the rate at which total cost changes with output, so it "
                    "is the derivative of the cost model, taken term by term.",
                    D(_c.eq("C", arg="q")),
                    "Each power drops by one and picks up its old exponent as a factor, while "
                    "the fixed cost $500$ contributes nothing to the rate.",
                    D(f"C'(q)={_c.deriv().latex()}"),
                    close(True, "That is exactly the expression written in the claim"),
                ),
            ),
            C(
                "Marginal cost is at its lowest at an output of $20$ units.",
                False,
                body(
                    "The marginal cost is a quadratic in $q$ with a positive leading "
                    "coefficient, so it opens upwards and takes its lowest value on its axis of "
                    "symmetry.",
                    D(f"C'(q)={_c.deriv().latex()}"),
                    D("q=-\\frac{b}{2a}=\\frac{3}{2\\cdot 0.06}=25"),
                    "At that output the marginal cost is",
                    D(
                        f"C'\\left(25\\right)={_c.deriv().subst(25)}"
                        f"={numstr(_c.deriv().at(25), dec=True)}"
                    ),
                    close(
                        False,
                        "The cheapest extra unit comes at $q=25$, not at $q=20$",
                    ),
                ),
            ),
            claim_deriv_sign(
                _c,
                10,
                decreasing=False,
                name="C",
                rate_name="C'",
                unit="\\text{euros per unit}",
                text="At an output of $10$ units the total cost is still rising.",
                opener=(
                    "Total cost rises exactly where marginal cost is positive, so the sign of "
                    "the derivative at that output settles the claim."
                ),
            ),
            claim_avg_rate(
                _c,
                0,
                20,
                25,
                name="C",
                unit="euros per unit",
                text=(
                    "Raising output from $0$ to $20$ units costs on average $25$ euros per "
                    "extra unit."
                ),
            ),
        ],
        overview=body(
            "The cost model is a cubic in output, and its derivative is the marginal cost.",
            D(_c.eq("C", arg="q")),
            D(f"C'(q)={_c.deriv().latex()}"),
            "Marginal cost is a quadratic opening upwards, so it dips to a minimum on its axis "
            "of symmetry at $q=25$ and is positive well before that, which is why total cost "
            "keeps climbing.",
            D("C'(10)=16\\qquad C'(25)=2.5"),
            "Total cost itself moves from $500$ at zero output to $860$ at twenty units.",
            D("\\frac{C(20)-C(0)}{20-0}=\\frac{360}{20}=18"),
        ),
    )
)

_wind_cum = [0, 6, 16, 24, 38, 47, 62, 73, 80, 93, 105]
_wind_hours = list(range(0, 22, 2))
_wind_rates = [Fr(_wind_cum[i + 1] - _wind_cum[i], 2) for i in range(10)]
_wind_labels = [f"{_wind_hours[i]}-{_wind_hours[i + 1]}" for i in range(10)]
_wind_peaks = [
    i
    for i in range(1, 9)
    if _wind_rates[i] > _wind_rates[i - 1] and _wind_rates[i] > _wind_rates[i + 1]
]
_wind_best = max(range(10), key=lambda i: _wind_rates[i])
L3.append(
    Spec(
        case="",
        title="Two-Hourly Output From a Wind Farm Log",
        context=(
            "A wind farm's control room records the total energy delivered since midnight, in "
            "megawatt hours, at the end of every second hour. No formula is fitted to the "
            "readings; the bar chart shows the average output on each two-hour stretch, in "
            "megawatt hours per hour. " + TF
        ),
        difficulty=3,
        stem_kind="table",
        tables="\n".join(
            ["| Hour $t$ | Energy delivered in total (MWh) |", "| --- | --- |"]
            + [f"| {t} | {v} |" for t, v in zip(_wind_hours, _wind_cum)]
        ),
        figure=bars(
            _wind_labels,
            [float(r) for r in _wind_rates],
            ylabel="MWh per hour",
            xlabel="hour of the day",
        ),
        claims=[
            C(
                "Across the whole twenty hours the farm averaged $5.25$ MWh per hour.",
                True,
                body(
                    "An average output is the total energy divided by the total time, so only "
                    "the first and last readings of the log are needed.",
                    D("\\bar P=\\frac{105-0}{20-0}"),
                    D("\\bar P=5.25\\ \\text{MWh per hour}"),
                    close(True, "The overall average is $5.25$ MWh per hour"),
                ),
            ),
            C(
                "The best two-hour stretch of the day was from hour $6$ to hour $8$.",
                False,
                body(
                    "Every stretch lasts the same two hours, so the best stretch is simply the "
                    "one on which the running total gained the most.",
                    D(
                        "\\bar P_{6\\text{–}8}=\\frac{38-24}{2}"
                        f"={numstr(_wind_rates[3])}\\ \\text{{MWh per hour}}"
                    ),
                    "The largest gain in the log is the jump from $47$ to $62$ megawatt hours:",
                    D(
                        "\\bar P_{10\\text{–}12}=\\frac{62-47}{2}"
                        f"={numstr(_wind_rates[_wind_best])}\\ \\text{{MWh per hour}}"
                    ),
                    close(
                        False,
                        "The record belongs to hours $10$ to $12$ at "
                        f"${numstr(_wind_rates[_wind_best])}$ MWh per hour",
                    ),
                ),
            ),
            C(
                "Exactly two of the interior stretches deliver more than both of their "
                "neighbours.",
                False,
                body(
                    "A stretch beats both neighbours whenever the sequence of stretch averages "
                    "rises into it and falls out of it again, so read the bars in order.",
                    D(",\\ ".join(numstr(r) for r in _wind_rates)),
                    "The bars turn downwards immediately after the values "
                    + ",\\ ".join(f"${numstr(_wind_rates[i])}$" for i in _wind_peaks)
                    + ", each of which is taller than both of its neighbours.",
                    close(
                        False,
                        f"There are {word(len(_wind_peaks))} such stretches rather than two",
                    ),
                ),
            ),
            C(
                "Hours $8$ to $10$ delivered less energy than hours $6$ to $8$.",
                True,
                body(
                    "The energy delivered on a stretch is the gain in the running total across "
                    "it, so subtract consecutive readings.",
                    D("47-38=9\\ \\text{MWh}"),
                    D("38-24=14\\ \\text{MWh}"),
                    close(
                        True,
                        "The later stretch delivered $9$ megawatt hours against $14$ for the "
                        "earlier one",
                    ),
                ),
            ),
            C(
                "The running totals grow along a straight line, so a polynomial of degree $1$ "
                "reproduces the log exactly.",
                False,
                body(
                    "Straight-line growth means the running total gains the same amount every "
                    "stretch, which is exactly the statement that the first differences never "
                    "change.",
                    D("\\text{gains}: 6,\\ 10,\\ 8,\\ 14,\\ 9,\\ 15,\\ 11,\\ 7,\\ 13,\\ 12"),
                    "Those gains jump around instead of repeating a single value, and the bar "
                    "chart shows the same restlessness.",
                    close(
                        False,
                        "No linear model can match a log whose gains range from $6$ up to $15$",
                    ),
                ),
            ),
        ],
        overview=body(
            "There is no formula here, only a log, so every rate is a gain divided by the two "
            "hours in which it happened.",
            D("\\bar P_{i}=\\frac{E_{i+1}-E_{i}}{2}"),
            "The ten stretch averages, in megawatt hours per hour, are",
            D(",\\ ".join(numstr(r) for r in _wind_rates)),
            "The record stretch is hours $10$ to $12$ at $7.5$, four separate stretches beat "
            "both of their neighbours, and the whole day averages",
            D("\\frac{105}{20}=5.25\\ \\text{MWh per hour}"),
            "Because those gains keep changing, the running total is nowhere near a straight "
            "line.",
        ),
    )
)

_model = Pol.of(0, 5, -2, 1, var="n")
_tab = [4, 10, 24, 52, 100]
L3.append(
    Spec(
        case="",
        title="Testing a Proposed Cubic Against a Table",
        context=(
            "An analyst logs the cumulative number of installations after each of the first "
            "five weeks and proposes the model "
            f"${_model.eq('f', arg='n')}$, where $n$ is the week number. " + TF
        ),
        difficulty=3,
        stem_kind="table",
        tables="\n".join(
            ["| Week $n$ | Installations in total |", "| --- | --- |"]
            + [f"| {i + 1} | {v} |" for i, v in enumerate(_tab)]
        ),
        claims=[
            claim_value(
                _model,
                3,
                24,
                name="f",
                unit="installations",
                text="The proposed model reproduces the week-$3$ entry of the table.",
                opener=(
                    "Testing a model against a table is substitution: put the week number in "
                    "and see whether the recorded figure comes back out."
                ),
            ),
            claim_finite_differences(
                _tab,
                3,
                constant=True,
                quantity="the cumulative installations",
                text="Differencing the recorded totals three times gives a constant row.",
            ),
            claim_finite_differences(
                _tab,
                2,
                constant=True,
                quantity="the cumulative installations",
                text="Differencing the recorded totals twice already gives a constant row.",
            ),
            claim_value(
                _model,
                6,
                172,
                name="f",
                unit="installations",
                text="The model predicts $172$ installations in total by the end of week $6$.",
            ),
            C(
                "The week-$4$ total is larger than the week-$1$ and week-$2$ totals added "
                "together.",
                True,
                body(
                    "This is a comparison of recorded figures, so no model is needed at all — "
                    "just the rows themselves.",
                    D("4+10=14"),
                    D("52>14"),
                    close(
                        True,
                        "The week-$4$ total of $52$ comfortably clears the combined $14$ of the "
                        "first two weeks",
                    ),
                ),
            ),
        ],
        overview=body(
            "The proposed model is a cubic in the week number.",
            D(_model.eq("f", arg="n")),
            D("f(1)=4\\qquad f(2)=10\\qquad f(3)=24\\qquad f(4)=52\\qquad f(5)=100"),
            "Those are precisely the recorded totals, so the model fits, and its own difference "
            "table confirms the degree:",
            D("\\text{first differences}: 6,\\ 14,\\ 28,\\ 48"),
            D("\\text{second differences}: 8,\\ 14,\\ 20"),
            D("\\text{third differences}: 6,\\ 6"),
            "Extending the model one week further gives",
            D("f(6)=216-72+30=174"),
        ),
    )
)

L3.append(
    Spec(
        case="",
        title="Symmetry, Parity and the Shape of the Arms",
        context=(
            "Let $P$ be a polynomial function with real coefficients. Nothing is said about its "
            "coefficients beyond what each statement assumes. " + TF
        ),
        difficulty=3,
        stem_kind="symbolic",
        claims=[
            C(
                "If every power appearing in $P(x)$ is even, then the graph of $P$ is symmetric "
                "about the horizontal axis.",
                False,
                body(
                    "Symmetry about the horizontal axis would mean that whenever a height "
                    "belongs to the graph, so does its negative — and that cannot happen for a "
                    "function, which allots one height to each input.",
                    D("P(-x)=P(x)"),
                    "Even powers do give a symmetry, but the mirror is the vertical axis: "
                    "replacing $x$ by $-x$ leaves each even power alone.",
                    D("\\left(-x\\right)^{2}=x^{2}\\qquad \\left(-x\\right)^{4}=x^{4}"),
                    close(
                        False,
                        "The mirror line is the vertical axis, not the horizontal one",
                    ),
                ),
            ),
            C(
                "If every power appearing in $P(x)$ is odd, then $P(-x)=-P(x)$ holds for every "
                "real $x$.",
                True,
                body(
                    "An odd power carries a change of sign in its input straight through to the "
                    "output, because the minus sign is used an odd number of times.",
                    D("\\left(-x\\right)^{3}=-x^{3}\\qquad \\left(-x\\right)^{5}=-x^{5}"),
                    "Every term of $P$ therefore flips sign at once, and a common factor of "
                    "$-1$ can be taken outside the whole sum.",
                    D("P(-x)=-\\left(a_{1}x+a_{3}x^{3}+\\cdots\\right)=-P(x)"),
                    close(True, "The identity holds for every real $x$"),
                ),
            ),
            C(
                "A polynomial in which only odd powers appear must pass through the origin.",
                True,
                body(
                    "Passing through the origin means the value at $x=0$ is $0$, so only the "
                    "constant term of the polynomial matters.",
                    D("P(x)=a_{1}x+a_{3}x^{3}+a_{5}x^{5}+\\cdots"),
                    "A constant term would be $a_{0}x^{0}$, an even power, so it is absent by "
                    "assumption and every remaining term dies at $x=0$.",
                    D("P(0)=0"),
                    close(True, "The graph is forced through $(0,0)$"),
                ),
            ),
            C(
                "If $P$ has odd degree, then the number of its distinct real zeros is odd.",
                False,
                body(
                    "An odd degree does guarantee at least one crossing, because the two arms "
                    "of the graph head in opposite directions, but it says nothing about how "
                    "the zeros in between are arranged.",
                    D("P(x)=x^{2}\\left(x-1\\right)"),
                    "This cubic has odd degree, yet its distinct zeros are only $x=0$ and "
                    "$x=1$, because the bracket at $0$ is repeated.",
                    D("\\text{distinct real zeros}=2"),
                    close(False, "Two is an even count, so the rule fails already here"),
                ),
            ),
            C(
                "If $P$ has even degree, then the two arms of its graph head in the same "
                "direction.",
                True,
                body(
                    "For inputs far from the origin the leading term dwarfs the rest, so both "
                    "arms are governed by $a x^{n}$ alone.",
                    D("P(x)\\approx a x^{n}\\quad\\text{for large }\\left|x\\right|"),
                    "With $n$ even, the power $x^{n}$ is positive on both sides, so the sign of "
                    "$a$ decides one common direction for both arms.",
                    D("\\left(-x\\right)^{n}=x^{n}\\quad\\text{for even }n"),
                    close(
                        True,
                        "Both arms rise when $a>0$ and both fall when $a<0$",
                    ),
                ),
            ),
        ],
        overview=body(
            "Two ideas run through all five claims. Replacing $x$ by $-x$ leaves even powers "
            "untouched and flips odd ones, which is where the symmetries come from.",
            D("\\left(-x\\right)^{n}=x^{n}\\ (n\\text{ even})\\qquad "
              "\\left(-x\\right)^{n}=-x^{n}\\ (n\\text{ odd})"),
            "And far from the origin the leading term decides both arms, so an even degree "
            "sends them the same way while an odd degree splits them. Counting distinct zeros, "
            "however, is a separate matter: repeated brackets shorten the list.",
            D("x^{2}\\left(x-1\\right)\\ \\text{has degree }3\\ \\text{but two zeros}"),
        ),
    )
)

L3.append(
    Spec(
        case="",
        title="What Division Leaves Behind",
        context=(
            "Let $P$ and $Q$ be polynomial functions with real coefficients, and consider "
            "dividing one by the other. No coefficients are supplied. " + TF
        ),
        difficulty=3,
        stem_kind="symbolic",
        claims=[
            C(
                "If $P$ has degree $5$ and is divided by a polynomial of degree $2$, the "
                "quotient has degree $3$.",
                True,
                body(
                    "Division writes the dividend as divisor times quotient plus a remainder of "
                    "lower degree than the divisor, and degrees add across that product.",
                    D("P(x)=Q(x)S(x)+R(x)"),
                    "The remainder cannot reach degree $5$, since its degree is below $2$, so "
                    "the leading term of $P$ has to come from the product.",
                    D("5=2+\\text{degree of }S"),
                    close(True, "The quotient is forced to have degree $3$"),
                ),
            ),
            C(
                "In that division the remainder has degree at most $2$.",
                False,
                body(
                    "The whole point of stopping the division is that the remainder can no "
                    "longer be divided by the divisor, which means its degree has dropped below "
                    "the divisor's.",
                    D("\\text{degree of }R<\\text{degree of }Q=2"),
                    "A remainder of degree $2$ could still be divided once more, so the process "
                    "would not have finished.",
                    D("\\text{degree of }R\\le 1"),
                    close(
                        False,
                        "The genuine ceiling is $1$, one below the divisor's degree",
                    ),
                ),
            ),
            C(
                "If $P(1)=0$ and $P(2)=0$, then $\\left(x-1\\right)\\left(x-2\\right)$ divides "
                "$P(x)$.",
                True,
                body(
                    "The first zero hands over a factor straight away, by the same argument "
                    "that turns any zero into a bracket.",
                    D("P(x)=\\left(x-1\\right)S(x)"),
                    "Substituting $x=2$ into that identity uses the second zero; the first "
                    "bracket becomes $1$, so the burden falls on $S$.",
                    D("0=P(2)=\\left(2-1\\right)S(2)=S(2)"),
                    "So $S$ itself has a zero at $2$ and therefore carries the second bracket.",
                    D("P(x)=\\left(x-1\\right)\\left(x-2\\right)T(x)"),
                    close(True, "The product of the two brackets divides $P$ exactly"),
                ),
            ),
            C(
                "If $P(3)=5$, then $\\left(x-3\\right)$ is a factor of $P(x)-5$.",
                True,
                body(
                    "A bracket is a factor of a polynomial exactly when the polynomial vanishes "
                    "at the matching number, so look at the shifted function rather than at $P$ "
                    "itself.",
                    D("H(x)=P(x)-5"),
                    "Evaluating $H$ at $3$ uses the one piece of information given.",
                    D("H(3)=P(3)-5=5-5=0"),
                    close(
                        True,
                        "The shifted polynomial has a zero at $3$, so the bracket divides it",
                    ),
                ),
            ),
            C(
                "If $P$ and $Q$ both have degree $4$, then $P-Q$ has degree $4$.",
                False,
                body(
                    "Subtracting collects matching powers, and when two polynomials share the "
                    "same degree their leading terms can annihilate each other.",
                    D("P(x)=x^{4}+x\\qquad Q(x)=x^{4}-1"),
                    "Both have degree $4$, but the quartic terms cancel exactly and what "
                    "survives is far smaller.",
                    D("P(x)-Q(x)=x+1"),
                    close(False, "The difference here has degree $1$, not $4$"),
                ),
            ),
        ],
        overview=body(
            "Division of polynomials always takes the same shape, with a remainder strictly "
            "below the divisor in degree.",
            D("P(x)=Q(x)S(x)+R(x),\\qquad \\text{degree of }R<\\text{degree of }Q"),
            "Degrees add across the product, which pins the quotient down. Zeros and brackets "
            "are interchangeable, and the trick extends to shifted functions such as $P(x)-5$. "
            "Only subtraction breaks the pattern: equal degrees may cancel.",
            D("\\left(x^{4}+x\\right)-\\left(x^{4}-1\\right)=x+1"),
        ),
    )
)

L3.append(
    Spec(
        case="",
        title="The Family $x^{3}-ax$ as the Parameter Moves",
        context=(
            "For each real number $a>0$ define the polynomial function "
            "$P_{a}(x)=x^{3}-ax$. Statements below must hold for the whole family unless a "
            "particular $a$ is named. " + TF
        ),
        difficulty=3,
        stem_kind="parametric",
        claims=[
            C(
                "Every member of the family passes through the origin.",
                True,
                body(
                    "A curve runs through the origin when the value at $x=0$ is $0$, and at "
                    "that input every term carrying a power of $x$ disappears.",
                    D("P_{a}(x)=x^{3}-ax"),
                    "There is no constant term to survive, whatever the parameter happens to be.",
                    D("P_{a}(0)=0"),
                    close(True, "The origin lies on every curve of the family"),
                ),
            ),
            C(
                "Every member of the family has three distinct real zeros.",
                True,
                body(
                    "Pulling the common factor $x$ out reduces the hunt for zeros to a factor "
                    "of $x$ and a difference of squares.",
                    D("P_{a}(x)=x\\left(x^{2}-a\\right)"),
                    "Because $a$ is strictly positive it has a real square root, and the second "
                    "bracket then splits as well.",
                    D(
                        "P_{a}(x)=x\\left(x-\\sqrt{a}\\right)"
                        "\\left(x+\\sqrt{a}\\right)"
                    ),
                    "The three numbers $0$, $\\sqrt{a}$ and $-\\sqrt{a}$ are different from one "
                    "another precisely because $\\sqrt{a}>0$.",
                    close(True, "Every member has three distinct real zeros"),
                ),
            ),
            C(
                "Every member of the family has exactly three turning points.",
                False,
                body(
                    "The curve turns where its rate of change vanishes, so differentiate the "
                    "family once and count the solutions.",
                    D("P_{a}'(x)=3x^{2}-a"),
                    "That is a quadratic, and a quadratic cannot vanish at more than two places.",
                    D("x=\\pm\\sqrt{\\frac{a}{3}}"),
                    close(
                        False,
                        "Each member turns exactly twice, and a cubic can never manage three "
                        "turns",
                    ),
                ),
            ),
            C(
                "There is a value $a>0$ for which the graph of $P_{a}$ has no turning point at "
                "all.",
                False,
                body(
                    "A turning point needs the rate of change to vanish, so ask when the "
                    "derivative has no real solution.",
                    D("P_{a}'(x)=3x^{2}-a=0"),
                    D("x^{2}=\\frac{a}{3}"),
                    "With $a>0$ the right-hand side is strictly positive, so it always has two "
                    "real square roots — the equation can never come out empty.",
                    close(
                        False,
                        "Every positive parameter delivers two turning points, so no such $a$ "
                        "exists",
                    ),
                ),
            ),
            C(
                "For $a=12$ the local maximum of $P_{a}$ sits at $x=-2$.",
                True,
                body(
                    "The turning points come from the derivative, and with a positive leading "
                    "coefficient the left-hand one is the local maximum: the curve climbs into "
                    "it and falls away after it.",
                    D("P_{12}'(x)=3x^{2}-12"),
                    D("3x^{2}=12\\quad\\Rightarrow\\quad x=\\pm 2"),
                    "The left turning point is at $x=-2$, and the height there is",
                    D(
                        "P_{12}(-2)=\\left(-2\\right)^{3}-12\\left(-2\\right)=16"
                    ),
                    close(
                        True,
                        "The local maximum of this member is the point $\\left(-2,16\\right)$",
                    ),
                ),
            ),
        ],
        overview=body(
            "Factoring the family once answers most of the questions.",
            D("P_{a}(x)=x\\left(x-\\sqrt{a}\\right)\\left(x+\\sqrt{a}\\right)"),
            "For every $a>0$ there are three distinct zeros, and the origin is always one of "
            "them. Differentiating gives a quadratic, so there are always exactly two turning "
            "points and never more, never fewer.",
            D("P_{a}'(x)=3x^{2}-a\\qquad x=\\pm\\sqrt{\\frac{a}{3}}"),
            "With $a=12$ those turning points land on $x=\\pm 2$, the left one being the local "
            "maximum at height $16$.",
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
