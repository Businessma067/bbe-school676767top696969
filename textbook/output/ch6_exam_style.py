#!/usr/bin/env python3
"""Exam-style inequality tasks for subsection 6.5.

Includes classic mixed exam claims plus varied real-life word scenarios.
Explanations emphasize reading the wording, translating to an inequality,
then solving step by step.
"""
from __future__ import annotations

from ch6_math import (
    embed_display_fractions_stashed,
    normalize_division_to_fractions,
    restore_fraction_stash,
    wrap_math,
    wrap_statement,
)

LETTERS = "ABCDE"


def _stmt(text: str) -> str:
    return wrap_statement(text)


def _prepare(text: str) -> str:
    if not text:
        return text
    prepared = normalize_division_to_fractions(text)
    prepared, fracs = embed_display_fractions_stashed(prepared)
    wrapped = wrap_math(prepared)
    return restore_fraction_stash(wrapped, fracs)


def _expl(letter: str, statement: str, answer: bool, body: str) -> str:
    verdict = "true" if answer else "false"
    sk = _stmt(statement)
    # Keep authored **Case** / **Setup** headers; only wrap math.
    body = _prepare(body)
    return f"**{letter}) {sk}**  ({verdict})\n\n{body}"


def task(
    n: int,
    title: str,
    overview: str,
    items: list[tuple[str, bool, str]],
    difficulty: str,
    context: str | None = None,
) -> dict:
    statements = [it[0] for it in items]
    answers = [it[1] for it in items]
    expls = [
        _expl(LETTERS[i], statements[i], answers[i], items[i][2])
        for i in range(len(items))
    ]
    ctx = context or "Evaluate each statement. Mark it TRUE or FALSE."
    return {
        "id": f"math-6-{n}",
        "case_id": f"MATH 6.{n:02d}",
        "title": title,
        "subsection": "6.5",
        "context": wrap_math(ctx) if context else ctx,
        "statements": [_stmt(s) for s in statements],
        "answer_key": answers,
        "tactical_explanations": expls,
        "difficulty_level": difficulty,
        "sort_order": n,
        "solution_overview": wrap_math(overview),
        "placeholder": False,
    }


SPECS: list[dict] = [
    {
        "title": "Exam-style tasks — 1",
        "diff": "4/5",
        "overview": (
            "Mixed exam claims: a fenced rectangle with a 3:1 ratio, a quadratic height model, "
            "average production cost, a storage-and-budget factory, and a rational/absolute-value "
            "system. Solve every constraint, including integer rounding and case splits."
        ),
        "items": [
            (
                "A farmer is planning a new rectangular field. He has 80 meters of fencing "
                "available. If he wants the field area to be at least 48 m^2 and to maintain "
                "the ratio 3:1 between the longer and shorter side of the field, then the "
                "shorter side can be between 4 and 20 meters long (both values included).",
                False,
                """**Setup**

Let the shorter side be $w$ meters and the longer side $3w$ meters.

**Fencing**

At most 80 m is available:
$2(3w + w) \\le 80$
$8w \\le 80$
$w \\le 10$.

**Area**

$3w \\cdot w \\ge 48$
$w^{2} \\ge 16$
$w \\ge 4$ (using $w > 0$).

**Intersection**

$4 \\le w \\le 10$.

**Compare to claim**

The claimed interval $[4, 20]$ overshoots the fencing limit: $w = 20$ would need 160 m of fence. The true range is $[4, 10]$.

**Quick check:** $w = 4$ gives area 48 and uses 32 m of fence; $w = 10$ uses 80 m; $w = 20$ needs 160 m.""",
            ),
            (
                "If the position of an object above ground in meters after x seconds is described "
                "by the function $f(x) = -5x^{2} + 70x + 3$, then the object is more than "
                "123 meters above ground between 2 and 12 seconds.",
                True,
                """**Inequality**

$-5x^{2} + 70x + 3 > 123$
$-5x^{2} + 70x - 120 > 0$.

**Solve**

Divide by $-5$ and reverse the inequality:
$x^{2} - 14x + 24 < 0$
$(x - 2)(x - 12) < 0$
$2 < x < 12$.

**Compare to claim**

“More than 123 m” excludes the endpoints, where $f(2) = f(12) = 123$. The object is above 123 m on the open interval $(2, 12)$.

**Quick check:** $f(7) = 248 > 123$; $f(2) = 123$.""",
            ),
            (
                "If the costs of producing x units of a product are 150 + 0.2x EUR, at least "
                "83 units must be produced for the average costs per unit to be below 2 EUR "
                "(note that only whole numbers of units can be produced).",
                False,
                """**Inequality**

$\\dfrac{150 + 0.2x}{x} < 2$, $x > 0$.

**Solve**

$\\dfrac{150}{x} < 1.8$
$x > \\dfrac{150}{1.8} = 83.\\overline{3}$.

**Integer production**

The smallest whole $x$ is 84, not 83.

**Compare to claim**

At $x = 83$, average cost is $\\dfrac{166.6}{83} \\approx 2.007$ EUR, still above 2 EUR.

**Quick check:** $x = 84$ gives $\\dfrac{166.8}{84} = 1.986 < 2$.""",
            ),
            (
                "To produce one unit of a certain product, three raw materials — A, B, and C — "
                "are required. Specifically, 3 units of A, 2 units of B, and 4 units of C are "
                "used. The raw materials cost 40 EUR, 50 EUR, and 25 EUR per unit, respectively, "
                "and the production of one unit of the product costs 12 EUR. The producer has "
                "a total budget of 21,400 EUR and storage capacity for at most 475 units of all "
                "raw materials combined. Then, the maximum number of products that can be "
                "produced is less than 50.",
                False,
                """**Setup**

Let $n$ be the number of products.

**Storage**

$9n \\le 475$
$n \\le 52$.

**Budget**

Cost per product: $3 \\cdot 40 + 2 \\cdot 50 + 4 \\cdot 25 + 12 = 332$ EUR.
$332n \\le 21400$
$n \\le 64$.

**Binding constraint**

Storage gives the tighter cap $n \\le 52$. The maximum is 52, which is not less than 50.

**Quick check:** $n = 52$ stores 468 units and costs 17,264 EUR; $n = 53$ needs 477 stored units.""",
            ),
            (
                "The inequality system $\\dfrac{4}{x} < x < |2 - 3x|$ is satisfied if and only if $|x| > 2$.",
                False,
                """**Domain**

$x \\ne 0$.

**Left part:** $\\dfrac{4}{x} < x$

**Case 1** — $x > 0$: $x^{2} > 4$, so $x > 2$.

**Case 2** — $x < 0$: multiplying reverses, $x^{2} < 4$, so $-2 < x < 0$.

**Right part:** $x < |2 - 3x|$

**Case 1** — $x \\le \\dfrac{2}{3}$: $x < 2 - 3x$ gives $x < \\dfrac{1}{2}$. Combined: $x < \\dfrac{1}{2}$.

**Case 2** — $x > \\dfrac{2}{3}$: $x < 3x - 2$ gives $x > 1$. Combined: $x > 1$.

**Intersection**

Left set $(2, \\infty) \\cup (-2, 0)$ with right set $(-\\infty, \\dfrac{1}{2}) \\cup (1, \\infty)$ yields
$(-2, 0) \\cup (2, \\infty)$.

**Compare to claim**

$|x| > 2$ is $(-\\infty, -2) \\cup (2, \\infty)$. It wrongly includes numbers less than $-2$ and drops the working interval $(-2, 0)$.

**Quick check:** $x = -1$ satisfies $\\dfrac{4}{-1} < -1 < |2+3|$, but $|-1|$ is not greater than 2.""",
            ),
        ],
    },
    {
        "title": "Exam-style tasks — 2",
        "diff": "3/5",
        "overview": (
            "A 4:1 fenced plot, a quadratic height window, a unit-cost cutoff, a two-constraint "
            "factory, and a factored quadratic inequality."
        ),
        "items": [
            (
                "A gardener has 80 meters of fencing for a rectangular plot and wants the longer "
                "side to stay in a 4:1 ratio with the shorter side. If the area must be at least "
                "64 m^2, then the shorter side can be any length from 4 m to 20 m, inclusive.",
                False,
                """**Setup**

Shorter side $w$, longer side $4w$.

**Fencing**

$2(4w + w) \\le 80$
$w \\le 8$.

**Area**

$4w^{2} \\ge 64$
$w \\ge 4$.

**Intersection**

$4 \\le w \\le 8$, not $[4, 20]$.

**Quick check:** $w = 20$ would need 200 m of fence.""",
            ),
            (
                "If the height in meters after t seconds is $h(t) = -5t^{2} + 40t + 8$, then "
                "the object is more than 83 meters above the ground between 3 and 5 seconds.",
                True,
                """**Inequality**

$-5t^{2} + 40t + 8 > 83$
$-5t^{2} + 40t - 75 > 0$.

**Solve**

$t^{2} - 8t + 15 < 0$
$(t - 3)(t - 5) < 0$
$3 < t < 5$.

**Quick check:** $h(4) = 88 > 83$; $h(3) = 83$.""",
            ),
            (
                "If producing x units costs 200 + 0.5x EUR, then at least 45 whole units must "
                "be made for the average cost per unit to fall below 5 EUR.",
                True,
                """**Inequality**

$\\dfrac{200 + 0.5x}{x} < 5$.

**Solve**

$x > \\dfrac{200}{4.5} \\approx 44.44$, so the first whole number is 45.

**Quick check:** $x = 44$ averages about 5.045 EUR; $x = 45$ averages about 4.944 EUR.""",
            ),
            (
                "Each product uses 2 units of A, 3 units of B, and 1 unit of C. The materials "
                "cost 30 EUR, 20 EUR, and 40 EUR per unit, and finishing one product costs 8 EUR. "
                "With a 10,000 EUR budget and storage for at most 200 raw-material units in total, "
                "the maximum number of products is less than 30.",
                False,
                """**Storage**

$6n \\le 200$
$n \\le 33$.

**Budget**

$168n \\le 10000$
$n \\le 59$.

**Binding constraint**

Maximum is 33, which is not less than 30.

**Quick check:** $n = 33$ stores 198 units and costs 5,544 EUR.""",
            ),
            (
                "The inequality $x^{2} - 9x + 14 \\le 0$ has solution set $[2, 7]$.",
                True,
                """**Factor**

$(x - 2)(x - 7) \\le 0$.

**Solution selection**

Keep the closed interval between the roots: $[2, 7]$.

**Quick check:** $x = 4$ gives $-6 \\le 0$; $x = 8$ gives $6 > 0$.""",
            ),
        ],
    },
    {
        "title": "Exam-style tasks — 3",
        "diff": "4/5",
        "overview": (
            "A 5:2 courtyard, a quadratic profit window claimed as an exact closed interval, "
            "average-cost rounding, a factory with a storage bind, and an absolute-value inequality."
        ),
        "items": [
            (
                "A rectangular courtyard uses at most 96 m of fencing, keeps a 5:2 ratio of "
                "length to width, and must have area at least 160 m^2. Then every shorter-side "
                "length from 8 m to 12 m inclusive is feasible.",
                True,
                """**Setup**

Width $w$, length $\\dfrac{5w}{2}$.

**Fencing**

$7w \\le 96$
$w \\le \\dfrac{96}{7} \\approx 13.71$.

**Area**

$\\dfrac{5}{2} w^{2} \\ge 160$
$w \\ge 8$.

**Intersection**

$8 \\le w \\le 13.71$. The closed interval $[8, 12]$ lies inside this, so every such width works.

**Quick check:** $w = 12$ uses 84 m of fence and has area 360 m^2.""",
            ),
            (
                "If $p(x) = -2x^{2} + 24x - 10$, then the solution set of $p(x) > 50$ is exactly "
                "the closed interval $[4, 8]$.",
                False,
                """**Inequality**

$-2x^{2} + 24x - 10 > 50$
$x^{2} - 12x + 30 < 0$.

**Quadratic formula**

Roots $6 \\pm \\sqrt{6}$. Since $\\sqrt{6} \\approx 2.45$, the solution is the open interval
$(6 - \\sqrt{6},\\, 6 + \\sqrt{6}) \\approx (3.55, 8.45)$.

**Compare to claim**

The true set is open, not closed, and its endpoints are $6 \\pm \\sqrt{6}$, not 4 and 8.

**Quick check:** $p(4) = 54 > 50$, so 4 is inside the true set, not a boundary.""",
            ),
            (
                "If producing x units costs 80 + 0.4x EUR, then at least 40 whole units are "
                "needed for the average cost to fall below 3 EUR.",
                False,
                """**Inequality**

$\\dfrac{80 + 0.4x}{x} < 3$
$x > \\dfrac{80}{2.6} \\approx 30.77$.

**Integer production**

The cutoff is $x \\ge 31$, not 40. Forty units work, but 31 through 39 already work too.

**Quick check:** $x = 31$ gives $\\dfrac{92.4}{31} \\approx 2.98 < 3$.""",
            ),
            (
                "Each product uses 5 units of A, 1 unit of B, and 2 units of C, costing 10 EUR, "
                "80 EUR, and 15 EUR per unit of material, plus 20 EUR to finish. Budget 8,000 EUR, "
                "storage at most 240 raw-material units. Then the maximum number of products is "
                "less than 50.",
                True,
                """**Storage**

$8n \\le 240$
$n \\le 30$.

**Budget**

Cost per product: $50 + 80 + 30 + 20 = 180$ EUR.
$180n \\le 8000$
$n \\le 44$.

**Binding constraint**

Maximum $n = 30$, which is less than 50.

**Quick check:** $n = 30$ stores 240 units and costs 5,400 EUR.""",
            ),
            (
                "The inequality $|x - 3| \\le 5$ has solution set $[-2, 8]$.",
                True,
                """**Rewrite**

$-5 \\le x - 3 \\le 5$
$-2 \\le x \\le 8$.

**Quick check:** $x = -2$ gives $|-5| = 5$; $x = 8$ gives $|5| = 5$; $x = -3$ gives 6, which is not $\\le 5$.""",
            ),
        ],
    },
    {
        "title": "Exam-style tasks — 4",
        "diff": "4/5",
        "overview": (
            "A 2:1 pen, a closed quadratic height interval, a unit-cost claim, a budget-bound "
            "factory, and a square-root inequality with domain."
        ),
        "items": [
            (
                "A rectangular pen uses at most 60 m of fencing, has sides in the ratio 2:1, and "
                "needs area at least 72 m^2. Then the shorter side can be any length from 6 m to "
                "15 m inclusive.",
                False,
                """**Setup**

Sides $w$ and $2w$.

**Fencing**

$6w \\le 60$
$w \\le 10$.

**Area**

$2w^{2} \\ge 72$
$w \\ge 6$.

**Intersection**

$6 \\le w \\le 10$. The claimed 15 m upper bound exceeds the 10 m fencing cap.

**Quick check:** $w = 15$ would need 90 m of fence.""",
            ),
            (
                "If $s(t) = -4t^{2} + 32t + 5$ is height in meters, then $s(t) \\ge 53$ for all t "
                "in $[2, 6]$.",
                True,
                """**Inequality**

$-4t^{2} + 32t + 5 \\ge 53$
$t^{2} - 8t + 12 \\le 0$
$(t - 2)(t - 6) \\le 0$
$2 \\le t \\le 6$.

**Compare to claim**

The closed interval $[2, 6]$ is exactly the solution, so the height is at least 53 m throughout that interval.

**Quick check:** $s(2) = 53$; $s(4) = 69$.""",
            ),
            (
                "If costs are 120 + 0.25x EUR, then 80 whole units are enough to bring average "
                "cost strictly below 1.70 EUR.",
                False,
                """**Inequality**

$\\dfrac{120 + 0.25x}{x} < 1.70$
$\\dfrac{120}{x} < 1.45$
$x > \\dfrac{120}{1.45} \\approx 82.76$.

**Integer production**

Need $x \\ge 83$. Eighty units give $\\dfrac{120 + 20}{80} = 1.75$, which is still above 1.70 EUR.

**Quick check:** $x = 83$ gives $\\dfrac{120 + 20.75}{83} \\approx 1.696 < 1.70$.""",
            ),
            (
                "Each finished good uses 4 units of A and 3 units of B. A costs 25 EUR and B "
                "costs 40 EUR; finishing costs 10 EUR. Budget 9,000 EUR and at most 180 stored "
                "raw-material units. Then the maximum output is less than 25.",
                False,
                """**Storage**

$7n \\le 180$
$n \\le 25$ (since $7 \\cdot 25 = 175$, $7 \\cdot 26 = 182$).

**Budget**

$100n + 120n + 10n = 230n \\le 9000$
$n \\le 39$.

**Binding constraint**

Maximum is 25, which is not less than 25. The claim says less than 25, so it is false.

**Quick check:** $n = 25$ stores 175 units and costs 5,750 EUR.""",
            ),
            (
                "The solution set of $\\sqrt{x + 3} \\ge 2$ is $x \\ge 1$.",
                True,
                """**Domain restriction**

$x + 3 \\ge 0$, so $x \\ge -3$.

**Case 1** — right side negative: 2 is positive, so this case does not apply.

**Case 2** — both sides non-negative: square:
$x + 3 \\ge 4$
$x \\ge 1$.

**Restrict to this case**

Combined with the domain $x \\ge -3$, the tighter bound is $x \\ge 1$.

**Quick check:** $x = 1$ gives $\\sqrt{4} = 2$; $x = 0$ gives $\\sqrt{3} \\approx 1.73 < 2$.""",
            ),
        ],
    },
    {
        "title": "Exam-style tasks — 5",
        "diff": "5/5",
        "overview": (
            "A 5:3 greenhouse, a quadratic “between” claim with the wrong interval, average cost "
            "with a trap at the boundary, a three-material plan, and a two-sided compound inequality."
        ),
        "items": [
            (
                "A greenhouse uses at most 120 m of fencing, keeps a 5:3 ratio of length to width, "
                "and needs area at least 375 m^2. Then the shorter side can be any length from "
                "5 m to 15 m inclusive.",
                False,
                """**Setup**

Width $w$, length $\\dfrac{5w}{3}$. Perimeter bound:
$2\\bigl(\\dfrac{5w}{3} + w\\bigr) \\le 120$
$\\dfrac{16w}{3} \\le 120$
$w \\le 22.5$.

**Area**

$\\dfrac{5}{3} w^{2} \\ge 375$
$w^{2} \\ge 225$
$w \\ge 15$.

**Intersection**

$15 \\le w \\le 22.5$. The claimed lower end 5 m fails the area bound: $w = 5$ gives area $\\dfrac{5}{3} \\cdot 25 \\approx 41.7$, far below 375.

**Quick check:** $w = 15$ gives area 375 and uses $\\dfrac{16 \\cdot 15}{3} = 80$ m of fence.""",
            ),
            (
                "If $f(x) = -x^{2} + 10x + 4$, then $f(x) > 20$ between 1 and 9, endpoints included.",
                False,
                """**Inequality**

$-x^{2} + 10x + 4 > 20$
$x^{2} - 10x + 16 < 0$
$(x - 2)(x - 8) < 0$
$2 < x < 8$.

**Compare to claim**

The true interval is $(2, 8)$, not the closed $[1, 9]$. Both claimed endpoints fail: $f(1) = 13$ and $f(9) = 13$, neither greater than 20.

**Quick check:** $f(5) = 29 > 20$; $f(1) = 13$.""",
            ),
            (
                "If producing x units costs 90 + 0.6x EUR, then 150 whole units are the fewest "
                "that make average cost strictly less than 1.20 EUR.",
                False,
                """**Inequality**

$\\dfrac{90 + 0.6x}{x} < 1.20$
$\\dfrac{90}{x} < 0.60$
$x > 150$.

**Integer production**

$x = 150$ gives $\\dfrac{90 + 90}{150} = 1.20$, which is not strictly below 1.20. The first whole number that works is 151.

**Quick check:** $x = 151$ gives $\\dfrac{90 + 90.6}{151} \\approx 1.196 < 1.20$.""",
            ),
            (
                "A product needs 1 unit of A, 4 units of B, and 2 units of C at 60 EUR, 15 EUR, "
                "and 20 EUR, plus 5 EUR finishing. Budget 12,000 EUR, storage 400. Then the "
                "maximum number of products is less than 50.",
                False,
                """**Storage**

$7n \\le 400$
$n \\le 57$.

**Budget**

$60 + 60 + 40 + 5 = 165$ EUR per product.
$165n \\le 12000$
$n \\le 72$.

**Binding constraint**

Maximum 57, which is not less than 50.

**Quick check:** $n = 57$ stores 399 units and costs 9,405 EUR.""",
            ),
            (
                "The compound inequality $-1 \\le 2x - 5 \\le 7$ has solution set $[2, 6]$.",
                True,
                """**Split**

$-1 \\le 2x - 5$ and $2x - 5 \\le 7$.

**Left part**

$4 \\le 2x$
$x \\ge 2$.

**Right part**

$2x \\le 12$
$x \\le 6$.

**Intersection**

$[2, 6]$.

**Quick check:** $x = 2$ gives $-1$; $x = 6$ gives 7.""",
            ),
        ],
    },
    {
        "title": "Exam-style tasks — 6",
        "diff": "5/5",
        "overview": (
            "A triangle-inequality style fence is not used; instead: a 1:1 square plot claim, "
            "a motion quadratic with a false closed interval, a cost-average trap, a factory "
            "where budget binds, and $|2x+1| > 5$."
        ),
        "items": [
            (
                "A square plot uses at most 40 m of fencing and must have area at least 81 m^2. "
                "Then every side length from 9 m to 12 m inclusive is feasible.",
                False,
                """**Setup**

A square of side $s$ has perimeter $4s$ and area $s^{2}$.

**Fencing**

$4s \\le 40$
$s \\le 10$.

**Area**

$s^{2} \\ge 81$
$s \\ge 9$.

**Intersection**

$9 \\le s \\le 10$. Side 12 m would need 48 m of fence, so the claimed interval $[9, 12]$ is too wide.

**Quick check:** $s = 10$ uses 40 m and has area 100; $s = 12$ needs 48 m.""",
            ),
            (
                "If $h(t) = -5t^{2} + 30t + 10$, then the object is at least 40 m above the ground "
                "for every t in $[1, 5]$, endpoints included.",
                False,
                """**Inequality**

$-5t^{2} + 30t + 10 \\ge 40$
$-5t^{2} + 30t - 30 \\ge 0$
$t^{2} - 6t + 6 \\le 0$.

**Quadratic formula**

Roots $3 \\pm \\sqrt{3}$. Since $\\sqrt{3} \\approx 1.73$, the solution is
$[3 - \\sqrt{3},\\, 3 + \\sqrt{3}] \\approx [1.27, 4.73]$.

**Compare to claim**

$[1, 5]$ is larger than the true interval. At $t = 1$, $h(1) = -5 + 30 + 10 = 35 < 40$. At $t = 5$, $h(5) = -125 + 150 + 10 = 35 < 40$.

**Quick check:** $h(3) = -45 + 90 + 10 = 55 \\ge 40$.""",
            ),
            (
                "If producing x units costs 48 + 1.2x EUR, then at least 40 whole units must be "
                "produced for average cost to be at most 2.40 EUR.",
                True,
                """**Inequality**

$\\dfrac{48 + 1.2x}{x} \\le 2.40$
$\\dfrac{48}{x} \\le 1.20$
$x \\ge 40$.

**Integer production**

The bound is already an integer, and the inequality is non-strict, so 40 units meet it exactly.

**Quick check:** $x = 40$ gives $\\dfrac{48 + 48}{40} = 2.40$; $x = 39$ gives $\\dfrac{48 + 46.8}{39} \\approx 2.43 > 2.40$.""",
            ),
            (
                "Each product uses 6 units of A and 2 units of B at 12 EUR and 90 EUR, plus 4 EUR "
                "to finish. Budget 7,000 EUR, storage 300. Then the maximum number of products is "
                "less than 50.",
                True,
                """**Storage**

$8n \\le 300$
$n \\le 37$.

**Budget**

$72 + 180 + 4 = 256$ EUR per product.
$256n \\le 7000$
$n \\le 27.34$, so $n \\le 27$.

**Binding constraint**

Budget is tighter. Maximum is 27, which is less than 50.

**Quick check:** $n = 27$ costs 6,912 EUR and stores 216 units; $n = 28$ costs 7,168 EUR, over budget.""",
            ),
            (
                "The inequality $|2x + 1| > 5$ has solution set $x < -3$ or $x > 2$.",
                True,
                """**Split**

$2x + 1 > 5$ or $2x + 1 < -5$.

**First inequality**

$2x > 4$
$x > 2$.

**Second inequality**

$2x < -6$
$x < -3$.

**Combine cases**

$x < -3$ or $x > 2$.

**Quick check:** $x = 0$ gives $|1| = 1$, not $> 5$; $x = 3$ gives $|7| = 7 > 5$.""",
            ),
        ],
    },
]


from ch6_exam_style_life import LIFE_SPECS
from ch6_exam_style_questions import QUESTION_SPECS

SPECS.extend(LIFE_SPECS)
SPECS.extend(QUESTION_SPECS)


def exam_style_tasks(start_n: int = 89) -> list[dict]:
    out = []
    for i, s in enumerate(SPECS):
        out.append(
            task(
                start_n + i,
                s["title"],
                s["overview"],
                s["items"],
                s["diff"],
                context=s.get("context"),
            )
        )
    return out


def main() -> None:
    import json
    from pathlib import Path

    root = Path(__file__).resolve().parents[2]
    path = root / "src" / "data" / "math-ch6-inequalities.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    kept = [t for t in data["tasks"] if t.get("subsection") != "6.5"]
    start = max((t["sort_order"] for t in kept), default=0) + 1
    extra = exam_style_tasks(start)
    data["tasks"] = kept + extra
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"merged {len(extra)} exam-style tasks starting at math-6-{start}")


if __name__ == "__main__":
    main()
