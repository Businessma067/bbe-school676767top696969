#!/usr/bin/env python3
"""Rewrite the most repetitive Chapter 7 stems into varied single-model tasks.

Before this pass 60 of the 97 tasks opened with the same "Let $f(x)=\\dots$ and
$g(x)=\\dots$" pair even when the five claims only ever talked about one of the
two functions.  Thirty of those are replaced here by stems that each show a
single object: one parabola, one line, a story carrying one model, a table of
measurements, a factored form, or a set of conditions the reader must turn into
a rule.  The topic stays linear and quadratic functions throughout.

Statement wordings and their truth values come from ``scripts/ch7_stem_kit.py``
so the answer keys are computed, never typed.  Run
``scripts/enrich-ch7-explanations-ch4.py`` afterwards to regenerate the
overviews and the Chapter 4 style explanations.
"""

from __future__ import annotations

import json
from pathlib import Path

from sympy import Rational, Symbol, expand

import ch7_stem_kit as K

x = Symbol("x")
PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")

R = Rational
TASKS: dict[str, dict] = {}


def task(case_id: str, *, title: str, kind: str, context: str, claims, table: str | None = None):
    statements = [c[0] for c in claims]
    key = [bool(c[1]) for c in claims]
    if len(statements) != 5:
        raise SystemExit(f"{case_id}: expected 5 statements, got {len(statements)}")
    if not 1 <= sum(key) <= 4:
        raise SystemExit(f"{case_id}: {sum(key)} true statements breaks the exam format")
    if len(set(statements)) != 5:
        raise SystemExit(f"{case_id}: repeated statement")
    TASKS[case_id] = {
        "title": title,
        "stem_kind": kind,
        "context": context,
        "statements": statements,
        "answer_key": key,
        "tables_markdown": table,
    }


MARK = "Evaluate each statement. Mark it TRUE or FALSE."


# --------------------------------------------------------------------------- #
# One parabola, nothing else
# --------------------------------------------------------------------------- #

p52 = expand(2 * x**2 - 8)
task(
    "MATH 7.52",
    title="Reading a Parabola Straight From Its Coefficients",
    kind="parabola",
    context=f"The parabola $p$ is given by $p(x)=2x^{{2}}-8$. {MARK}",
    claims=[
        K.q_opens("p", p52, up=True),
        K.q_roots("p", p52, 2, -2),
        K.y_intercept("p", p52, -8),
        K.q_axis("p", p52, 1),
        K.q_extreme("p", p52, -8, smallest=True),
    ],
)

q53 = expand(-3 * x**2 + 12 * x - 4)
task(
    "MATH 7.53",
    title="A Parabola That Turns Downwards",
    kind="parabola",
    context=f"Consider the quadratic function $q(x)=-3x^{{2}}+12x-4$. {MARK}",
    claims=[
        K.q_opens("q", q53, up=False),
        K.q_axis("q", q53, 2),
        K.q_extreme("q", q53, 8, smallest=False),
        K.y_intercept("q", q53, 4),
        K.q_root_count("q", q53, "two"),
    ],
)

p54 = expand((x + 3) ** 2 - 7)
task(
    "MATH 7.54",
    title="Vertex Form Read at a Glance",
    kind="parabola",
    context=(
        "A parabola is already written in completed-square form: "
        f"$p(x)=\\left(x+3\\right)^{{2}}-7$. {MARK}"
    ),
    claims=[
        K.q_vertex("p", p54, -3, -7),
        K.q_axis("p", p54, 3),
        K.q_opens("p", p54, up=True),
        K.q_extreme("p", p54, -7, smallest=True),
        K.q_expand("p", p54, expand(x**2 + 6 * x + 2)),
    ],
)

h58 = expand(-(x**2) + 6 * x - 5)
task(
    "MATH 7.58",
    title="Locating the Peak of a Downward Parabola",
    kind="parabola",
    context=f"The function $h$ is given by $h(x)=-x^{{2}}+6x-5$. {MARK}",
    claims=[
        K.q_opens("h", h58, up=False),
        K.q_axis("h", h58, 3),
        K.q_extreme("h", h58, 4, smallest=False),
        K.y_intercept("h", h58, 5),
        K.q_roots("h", h58, 1, 5),
    ],
)

p61 = expand(3 * x**2 - 12 * x + 7)
task(
    "MATH 7.61",
    title="A Stretched Parabola and Its Turning Point",
    kind="parabola",
    context=f"Let $p(x)=3x^{{2}}-12x+7$. {MARK}",
    claims=[
        K.q_axis("p", p61, 2),
        K.q_vertex("p", p61, 2, -5),
        K.q_extreme("p", p61, 7, smallest=True),
        K.lead_coefficient("p", p61, 3),
        K.q_monotone("p", p61, 2, decreasing=True),
    ],
)

q63 = expand(x**2 + 8 * x + 10)
task(
    "MATH 7.63",
    title="Completing the Square With a Negative Constant",
    kind="parabola",
    context=f"Consider the parabola $q(x)=x^{{2}}+8x+10$. {MARK}",
    claims=[
        K.q_complete_square("q", q63, q63),
        K.q_vertex("q", q63, -4, -6),
        K.q_extreme("q", q63, 10, smallest=True),
        K.q_range("q", q63, -6, at_least=True),
        K.q_axis("q", q63, 4),
    ],
)

p66 = expand(2 * x**2 - 18)
task(
    "MATH 7.66",
    title="A Parabola With the $y$-Axis as Its Mirror",
    kind="parabola",
    context=f"The parabola $p$ has the rule $p(x)=2x^{{2}}-18$. {MARK}",
    claims=[
        K.q_axis_yaxis("p", p66),
        K.q_equal_values("p", p66, -3, 3),
        K.q_roots("p", p66, 3, -3),
        K.q_prod_roots("p", p66, 9),
        K.q_extreme("p", p66, -18, smallest=True),
    ],
)

q73 = expand(x**2 - 10 * x + 21)
task(
    "MATH 7.73",
    title="Turning Point, Zeros and a Horizontal Probe",
    kind="parabola",
    context=f"Let $q(x)=x^{{2}}-10x+21$. {MARK}",
    claims=[
        K.q_vertex("q", q73, 5, -4),
        K.q_roots("q", q73, 3, 7),
        K.q_root_distance("q", q73, 4),
        K.q_extreme("q", q73, 21, smallest=True),
        K.q_horizontal("q", q73, -4),
    ],
)

p87 = expand(x**2 + 3 * x - 40)
task(
    "MATH 7.87",
    title="Root Spacing Against the Axis of a Parabola",
    kind="parabola",
    context=f"The parabola $p$ is given by $p(x)=x^{{2}}+3x-40$. {MARK}",
    claims=[
        K.q_root_distance("p", p87, 13),
        K.q_axis("p", p87, R(-3, 2)),
        K.q_sum_roots("p", p87, 3),
        K.q_prod_roots("p", p87, -40),
        K.q_monotone("p", p87, -2, decreasing=False),
    ],
)


# --------------------------------------------------------------------------- #
# A parabola handed over in factored form
# --------------------------------------------------------------------------- #

q55 = expand((x - 1) * (x + 6))
task(
    "MATH 7.55",
    title="Zeros Straight From a Product of Factors",
    kind="parabola",
    context=(
        "A quadratic function is handed over already factored: "
        f"$q(x)=\\left(x-1\\right)\\left(x+6\\right)$. {MARK}"
    ),
    claims=[
        K.q_roots("q", q55, 1, -6),
        K.q_sum_roots("q", q55, -5),
        K.q_opens("q", q55, up=False),
        K.y_intercept("q", q55, -6),
        K.q_expand("q", q55, expand(x**2 + 5 * x - 6)),
    ],
)

p65 = expand(-3 * (x + 2) * (x - 5))
task(
    "MATH 7.65",
    title="A Negative Stretch Keeps the Zeros",
    kind="parabola",
    context=f"Let $p(x)=-3\\left(x+2\\right)\\left(x-5\\right)$. {MARK}",
    claims=[
        K.q_roots("p", p65, -2, 5),
        K.q_opens("p", p65, up=False),
        K.q_axis("p", p65, R(3, 2)),
        K.lead_coefficient("p", p65, 3),
        K.q_prod_roots("p", p65, -10),
    ],
)

w77 = expand(R(1, 2) * (x + 1) * (x - 7))
task(
    "MATH 7.77",
    title="Half-Scaled Factors and the Values a Parabola Reaches",
    kind="parabola",
    context=f"Consider $w(x)=\\frac{{1}}{{2}}\\left(x+1\\right)\\left(x-7\\right)$. {MARK}",
    claims=[
        K.q_roots("w", w77, -1, 7),
        K.q_axis("w", w77, 3),
        K.q_expand("w", w77, w77),
        K.q_extreme("w", w77, -8, smallest=True),
        K.q_range("w", w77, 0, at_least=True),
    ],
)


# --------------------------------------------------------------------------- #
# One line, nothing else
# --------------------------------------------------------------------------- #

s11 = expand(6 - 2 * x)
task(
    "MATH 7.11",
    title="A Falling Line and Its Two Axis Crossings",
    kind="line",
    context=f"The line $s$ has the rule $s(x)=6-2x$. {MARK}",
    claims=[
        K.l_slope("s", s11, -2),
        K.y_intercept("s", s11, 6),
        K.l_monotone("s", s11, increasing=True),
        K.l_zero("s", s11, 3),
        K.value_at("s", s11, 4, -1),
    ],
)

t16 = expand((5 - x) / 2)
task(
    "MATH 7.16",
    title="A Line Written as a Single Fraction",
    kind="line",
    context=f"A line is given in the unusual shape $t(x)=\\frac{{5-x}}{{2}}$. {MARK}",
    claims=[
        K.l_slope("t", t16, R(-1, 2)),
        K.y_intercept("t", t16, R(5, 2)),
        K.l_zero("t", t16, 5),
        K.l_point("t", t16, 3, 2),
        K.l_step("t", t16, 4, -2),
    ],
)

u57 = expand(4 * x + 10)
task(
    "MATH 7.57",
    title="Where a Rising Line Crosses the Axes",
    kind="line",
    context=f"Let $u(x)=4x+10$. {MARK}",
    claims=[
        K.l_zero("u", u57, R(-5, 2)),
        K.y_intercept("u", u57, 10),
        K.l_slope("u", u57, 10),
        K.l_monotone("u", u57, increasing=True),
        K.value_at("u", u57, 3, 22),
    ],
)

v59 = expand(x / 3 - 2)
task(
    "MATH 7.59",
    title="A Gentle Slope in Fraction Form",
    kind="line",
    context=f"The line $v$ is given by $v(x)=\\frac{{1}}{{3}}x-2$. {MARK}",
    claims=[
        K.l_slope("v", v59, R(1, 3)),
        K.l_zero("v", v59, 6),
        K.y_intercept("v", v59, -2),
        K.l_step("v", v59, 3, 1),
        K.l_monotone("v", v59, increasing=False),
    ],
)


# --------------------------------------------------------------------------- #
# A story carrying one model
# --------------------------------------------------------------------------- #

C04 = expand(3 * x + 5)
task(
    "MATH 7.04",
    title="A Taxi Fare That Grows With the Distance",
    kind="applied",
    context=(
        "A taxi charges a fixed call-out fee plus a fixed amount per kilometre, so "
        "the fare in euros after $x$ kilometres is $C(x)=3x+5$. "
        f"{MARK}"
    ),
    claims=[
        K.a_value("fare", C04, 4, 17, unit="euros"),
        K.a_step("fare", C04, 3, step_noun="kilometre", unit="euros"),
        K.a_constant_change("fare", C04, step_noun="kilometre"),
        K.a_solve("fare", C04, 20, 5, unit="euros"),
        K.a_doubling("fare", C04),
    ],
)

h09 = expand(-5 * x**2 + 20 * x)
task(
    "MATH 7.09",
    title="A Ball Thrown Straight Upwards",
    kind="applied",
    context=(
        "A ball is thrown straight up from the ground and its height in metres "
        "after $x$ seconds is $H(x)=-5x^{2}+20x$. "
        f"{MARK}"
    ),
    claims=[
        K.a_extreme_at("height", h09, 2, largest=True),
        K.a_extreme_value("height", h09, 20, largest=True, unit="metres"),
        K.a_zeros("height", h09, 0, 4),
        K.a_value("height", h09, 1, 20, unit="metres"),
        K.a_positive_between("height", h09, 0, 4),
    ],
)

V56 = expand(200 - 8 * x)
task(
    "MATH 7.56",
    title="A Water Tank Draining at a Steady Rate",
    kind="applied",
    context=(
        "A tank drains at a steady rate: after $x$ minutes it still holds "
        "$V(x)=200-8x$ litres. "
        f"{MARK}"
    ),
    claims=[
        K.a_step("volume", V56, -8, step_noun="minute", unit="litres"),
        K.a_value("volume", V56, 10, 120, unit="litres"),
        K.a_solve("volume", V56, 0, 25, unit="litres"),
        K.a_doubling("volume", V56),
        K.a_constant_change("volume", V56, step_noun="minute"),
    ],
)

Rev62 = expand(-2 * x**2 + 36 * x)
task(
    "MATH 7.62",
    title="Ticket Price Against Weekly Revenue",
    kind="applied",
    context=(
        "A small cinema models its weekly revenue in euros at a ticket price of "
        "$x$ euros by $R(x)=-2x^{2}+36x$. "
        f"{MARK}"
    ),
    claims=[
        K.a_extreme_at("weekly revenue", Rev62, 9, largest=True),
        K.a_extreme_value("weekly revenue", Rev62, 162, largest=True, unit="euros"),
        K.a_zeros("weekly revenue", Rev62, 0, 18),
        K.a_average_rate("weekly revenue", Rev62, 2, 6, 16, unit="euros"),
        K.a_value("weekly revenue", Rev62, 10, 160, unit="euros"),
    ],
)

F74 = expand(R(1, 50) * x**2 - 2 * x + 80)
task(
    "MATH 7.74",
    title="Fuel Use Against Cruising Speed",
    kind="applied",
    context=(
        "For a lorry cruising at $x$ kilometres per hour, the fuel used on a fixed "
        "route is modelled by $F(x)=\\frac{1}{50}x^{2}-2x+80$ litres. "
        f"{MARK}"
    ),
    claims=[
        K.a_extreme_at("fuel use", F74, 50, largest=False),
        K.a_extreme_value("fuel use", F74, 30, largest=False, unit="litres"),
        K.a_average_rate("fuel use", F74, 20, 40, -1, unit="litres"),
        K.a_never_zero("fuel use", F74),
        K.a_value("fuel use", F74, 100, 80, unit="litres"),
    ],
)

P76 = expand(-(x**2) + 24 * x - 80)
task(
    "MATH 7.76",
    title="A Profit Curve With Two Break-Even Points",
    kind="applied",
    context=(
        "A workshop's monthly profit in hundreds of euros, when $x$ machines are "
        "produced, is modelled by $P(x)=-x^{2}+24x-80$. "
        f"{MARK}"
    ),
    claims=[
        K.a_extreme_at("profit", P76, 12, largest=True),
        K.a_extreme_value("profit", P76, 64, largest=True),
        K.a_zeros("profit", P76, 4, 20),
        K.a_average_rate("profit", P76, 0, 10, 14),
        K.a_value("profit", P76, 2, 0),
    ],
)



# --------------------------------------------------------------------------- #
# A table of measurements
# --------------------------------------------------------------------------- #

def md_table(points, xh="$x$", yh="$y$") -> str:
    head = f"| {xh} | {yh} |\n| --- | --- |"
    rows = "\n".join(f"| ${K.F(a)}$ | ${K.F(b)}$ |" for a, b in points)
    return f"{head}\n{rows}"


pts20 = [(R(k), R(4 * k - 3)) for k in range(5)]
task(
    "MATH 7.20",
    title="A Table That Climbs at a Steady Rate",
    kind="table",
    context=(
        "The table below lists five values of a function measured at equally "
        f"spaced inputs. {MARK}"
    ),
    table=md_table(pts20),
    claims=[
        K.t_first_diff_constant(pts20),
        K.t_slope(pts20, 4),
        K.t_rule(pts20, expand(4 * x - 3)),
        K.t_average_rate(pts20, R(1), R(4), 4),
        K.t_continue(pts20, 5, 18),
    ],
)

pts60 = [(R(k), R(k**2 + 1)) for k in range(5)]
task(
    "MATH 7.60",
    title="Constant Second Differences in a Table",
    kind="table",
    context=(
        "A function was sampled at five consecutive whole numbers and the results "
        f"were collected in the table below. {MARK}"
    ),
    table=md_table(pts60),
    claims=[
        K.t_first_diff_constant(pts60),
        K.t_second_diff(pts60, 2),
        K.t_quadratic_model(pts60),
        K.t_rule(pts60, expand(x**2 + 1)),
        K.t_continue(pts60, 5, 26),
    ],
)

pts64 = [(R(k), R(10 - 3 * k)) for k in range(5)]
task(
    "MATH 7.64",
    title="Which Model Fits the Measurements?",
    kind="table",
    context=(
        "A meter reading was recorded once per minute for five minutes; $x$ counts "
        f"the minutes and $y$ is the reading. {MARK}"
    ),
    table=md_table(pts64, "$x$ (min)", "$y$ (reading)"),
    claims=[
        K.t_linear_model(pts64),
        K.t_slope(pts64, -3),
        K.t_average_rate(pts64, R(0), R(4), -3),
        K.t_rule(pts64, expand(10 - 3 * x)),
        K.t_second_diff(pts64, -3),
    ],
)

pts72 = [(R(k), R(2 * k**2 - 3 * k + 1)) for k in range(5)]
task(
    "MATH 7.72",
    title="The Quadratic Hidden Behind a Data Table",
    kind="table",
    context=(
        "The five pairs below come from one polynomial rule of degree at most two. "
        f"{MARK}"
    ),
    table=md_table(pts72),
    claims=[
        K.t_first_diff_constant(pts72),
        K.t_second_diff(pts72, 4),
        K.t_lead_coefficient(pts72, 2),
        K.t_rule(pts72, expand(2 * x**2 - 3 * x + 1)),
        K.t_extreme_row(pts72, R(1), largest=False),
    ],
)

pts78 = [(R(k), R(-5 * k**2 + 30 * k)) for k in range(5)]
task(
    "MATH 7.78",
    title="Heights of a Stone Recorded Every Second",
    kind="table",
    context=(
        "A stone is launched upwards and its height above the ground is measured "
        f"once per second. {MARK}"
    ),
    table=md_table(pts78, "$x$ (s)", "$y$ (m)"),
    claims=[
        K.t_first_diff_constant(pts78),
        K.t_second_diff(pts78, -10),
        K.t_rule(pts78, expand(-5 * x**2 + 30 * x)),
        K.t_extreme_row(pts78, R(3), largest=True),
        K.t_continue(pts78, 5, 25),
    ],
)


# --------------------------------------------------------------------------- #
# Rebuilding a rule from conditions
# --------------------------------------------------------------------------- #

p67 = expand(3 * (x + 4) * (x - 2))
task(
    "MATH 7.67",
    title="Rebuilding a Parabola From Its Zeros",
    kind="rebuild",
    context=(
        "A parabola $p$ has zeros $-4$ and $2$ and leading coefficient $3$; recover "
        f"its rule before judging the claims. {MARK}"
    ),
    claims=[
        K.q_rule("p", p67, p67),
        K.q_axis("p", p67, -1),
        K.y_intercept("p", p67, -24),
        K.q_extreme("p", p67, -27, smallest=True),
        K.q_sum_roots("p", p67, 4),
    ],
)

u68 = expand(-x / 2 + 3)
task(
    "MATH 7.68",
    title="A Line Fixed by a Slope and One Point",
    kind="rebuild",
    context=(
        "A line $u$ has slope $-\\frac{1}{2}$ and passes through the point $(4,1)$; "
        f"recover its rule before judging the claims. {MARK}"
    ),
    claims=[
        K.q_rule("u", u68, u68),
        K.y_intercept("u", u68, 3),
        K.l_zero("u", u68, 6),
        K.value_at("u", u68, -2, 4),
        K.l_monotone("u", u68, increasing=True),
    ],
)

q75 = expand(2 * (x - 3) ** 2 - 8)
task(
    "MATH 7.75",
    title="A Parabola Pinned by Its Vertex and One Point",
    kind="rebuild",
    context=(
        "A parabola $q$ has its vertex at $(3,-8)$ and passes through the point "
        f"$(1,0)$; recover its rule before judging the claims. {MARK}"
    ),
    claims=[
        K.q_rule("q", q75, q75),
        K.q_roots("q", q75, 1, 5),
        K.y_intercept("q", q75, 10),
        K.lead_coefficient("q", q75, 2),
        K.q_horizontal("q", q75, -8),
    ],
)


# --------------------------------------------------------------------------- #
# Patching the bank
# --------------------------------------------------------------------------- #

STUB = "The stem fixes a single model; the enricher rebuilds this overview."


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = data["tasks"]
    by_id = {t["case_id"]: t for t in tasks}

    missing = sorted(set(TASKS) - set(by_id))
    if missing:
        raise SystemExit(f"unknown case ids: {missing}")

    for case_id, spec in TASKS.items():
        t = by_id[case_id]
        t["title"] = spec["title"]
        t["stem_kind"] = spec["stem_kind"]
        t["context"] = spec["context"]
        t["statements"] = spec["statements"]
        t["answer_key"] = spec["answer_key"]
        t["solution_overview"] = STUB
        t["tactical_explanations"] = [
            f"**{'ABCDE'[i]}.** → {'True' if spec['answer_key'][i] else 'False'}\n\n"
            "The enricher fills this in, so the statement is "
            f"{'True' if spec['answer_key'][i] else 'False'}."
            for i in range(5)
        ]
        if spec["tables_markdown"]:
            t["tables_markdown"] = spec["tables_markdown"]
        else:
            t.pop("tables_markdown", None)

    titles = [t["title"] for t in tasks]
    dups = sorted({t for t in titles if titles.count(t) > 1})
    if dups:
        raise SystemExit(f"duplicate titles: {dups}")

    for t in tasks:
        n_true = sum(bool(v) for v in t["answer_key"])
        if not 1 <= n_true <= 4:
            raise SystemExit(f"{t['case_id']}: {n_true} true statements")

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    kinds: dict[str, int] = {}
    for t in tasks:
        kinds[t["stem_kind"]] = kinds.get(t["stem_kind"], 0) + 1
    fg = sum(1 for t in tasks if "f(x)" in t["context"] and "g(x)" in t["context"])
    print(f"rewrote {len(TASKS)} stems")
    print("stem kinds:", dict(sorted(kinds.items())))
    print("tasks still showing both $f(x)$ and $g(x)$:", fg)
    print(f"wrote {len(tasks)} tasks -> {PATH}")


if __name__ == "__main__":
    main()
