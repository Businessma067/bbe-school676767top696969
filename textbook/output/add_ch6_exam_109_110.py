#!/usr/bin/env python3
"""Append MATH 6.109 and 6.110 exam-style inequality tasks to the Ch6 bank."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / "src" / "data" / "math-ch6-inequalities.json"

TASKS = [
    {
        "id": "math-6-109",
        "case_id": "MATH 6.109",
        "title": "Exam-style tasks - 21",
        "subsection": "6.5",
        "context": "Evaluate each statement. Mark it TRUE or FALSE.",
        "statements": [
            (
                "A landscaper is designing a rectangular flower bed whose length is twice the "
                "width plus 1 meter. At most 50 meters of edging is available, and the bed area "
                "must be at least $48\\,m^{2}$. Then the width can be any real number from 4 to 8 "
                "meters inclusive."
            ),
            (
                "A drone's altitude in meters after $t$ seconds is given by "
                "$h(t)=-4t^{2}+48t+5$. The drone stays at least 101 meters above the ground for "
                "every time $t$ between 3 and 9 seconds inclusive."
            ),
            (
                "If the cost of producing $x$ units is $210+0.5x$ EUR, then at least 70 whole "
                "units must be produced for the average cost per unit to fall strictly below "
                "3.50 EUR."
            ),
            (
                "Each gadget uses 4 kg of metal at 18 EUR/kg, 3 liters of resin at 25 EUR/L, and "
                "5 fasteners at 4 EUR each, plus 20 EUR of labor. With a budget of 18,000 EUR "
                "and warehouse space for at most 420 raw units in total (kilograms, liters, and "
                "fasteners combined), the maximum number of gadgets that can be produced is "
                "less than 35."
            ),
            (
                "The inequality $|3x-2|>2|x+1|$ is satisfied if and only if $|x-2|>2$."
            ),
        ],
        "answer_key": [False, True, False, False, True],
        "tactical_explanations": [
            (
                "**A.** → False\n\n"
                "Let $w>0$ be the width; then the length is $2w+1$.\n\n"
                "**Edging**\n\n"
                "$$2\\bigl(w+(2w+1)\\bigr)\\le 50$$\n\n"
                "$$6w+2\\le 50$$\n\n"
                "$$w\\le 8$$\n\n"
                "**Area**\n\n"
                "$$w(2w+1)\\ge 48$$\n\n"
                "$$2w^{2}+w-48\\ge 0$$\n\n"
                "The positive root of $2w^{2}+w-48=0$ is\n\n"
                "$$w=\\dfrac{-1+\\sqrt{385}}{4}\\approx 4.66.$$\n\n"
                "So the feasible widths are approximately $[4.66,8]$, not $[4,8]$. At $w=4$ the "
                "area is only $36\\,m^{2}$. Therefore the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "Require $h(t)\\ge 101$:\n\n"
                "$$-4t^{2}+48t+5\\ge 101$$\n\n"
                "$$-4t^{2}+48t-96\\ge 0$$\n\n"
                "Divide by $-4$ and reverse:\n\n"
                "$$t^{2}-12t+24\\le 0$$\n\n"
                "$$\\bigl(t-(6-2\\sqrt{3})\\bigr)\\bigl(t-(6+2\\sqrt{3})\\bigr)\\le 0$$\n\n"
                "$$6-2\\sqrt{3}\\le t\\le 6+2\\sqrt{3}.$$\n\n"
                "Since $6-2\\sqrt{3}\\approx 2.54$ and $6+2\\sqrt{3}\\approx 9.46$, the closed "
                "interval $[3,9]$ lies entirely inside the solution set. Direct checks: "
                "$h(3)=h(9)=113\\ge 101$. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "$$\\dfrac{210+0.5x}{x}<3.5\\qquad(x>0)$$\n\n"
                "$$\\dfrac{210}{x}<3$$\n\n"
                "$$x>70.$$\n\n"
                "Only whole numbers of units are allowed, so the smallest admissible $x$ is 71, "
                "not 70. At $x=70$ the average equals exactly 3.50 EUR. Therefore the statement "
                "is False."
            ),
            (
                "**D.** → False\n\n"
                "Cost per gadget:\n\n"
                "$$4\\cdot 18+3\\cdot 25+5\\cdot 4+20=187\\text{ EUR}.$$\n\n"
                "Raw units per gadget: $4+3+5=12$.\n\n"
                "**Budget:** $187n\\le 18000\\Rightarrow n\\le 96.25$.\n\n"
                "**Storage:** $12n\\le 420\\Rightarrow n\\le 35$.\n\n"
                "Storage is binding, so the maximum is exactly 35, which is not less than 35. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "Both sides are nonnegative, so squaring preserves the strict inequality:\n\n"
                "$$(3x-2)^{2}>4(x+1)^{2}$$\n\n"
                "$$9x^{2}-12x+4>4x^{2}+8x+4$$\n\n"
                "$$5x^{2}-20x>0$$\n\n"
                "$$5x(x-4)>0$$\n\n"
                "$$x<0\\quad\\text{or}\\quad x>4.$$\n\n"
                "The condition $|x-2|>2$ expands to the same two rays $x<0$ or $x>4$. "
                "Endpoints fail both forms ($x=0$ and $x=4$ give equality). Therefore the "
                "statement is True."
            ),
        ],
        "difficulty_level": "5/5",
        "sort_order": 109,
        "solution_overview": (
            "Independent exam claims: a rectangular flower bed with edging and area "
            "constraints, a quadratic drone altitude window, a strict average-cost threshold "
            "with integer production, a dual budget-and-storage factory bound, and an "
            "absolute-value comparison rewritten by squaring. Solve each claim on its own; "
            "watch endpoints, integer rounding, and binding resource constraints."
        ),
        "placeholder": False,
    },
    {
        "id": "math-6-110",
        "case_id": "MATH 6.110",
        "title": "Exam-style tasks - 22",
        "subsection": "6.5",
        "context": "Evaluate each statement. Mark it TRUE or FALSE.",
        "statements": [
            (
                "A box office sells standing tickets for 28 EUR and seated tickets for 45 EUR. "
                "Seated tickets must outnumber standing tickets in the exact ratio $2:1$, total "
                "tickets sold cannot exceed 40, and revenue must be at least 1,200 EUR. Then "
                "the only possible whole numbers of standing tickets are 12 and 13."
            ),
            (
                "The temperature in a kiln after $x$ minutes is $T(x)=-x^{2}+20x+80$ degrees "
                "Celsius. The kiln is hotter than $176^{\\circ}\\mathrm{C}$ between 8 and 12 "
                "minutes."
            ),
            (
                "A courier charges an 8 EUR base fare plus 0.35 EUR per kilometre, and then "
                "adds a flat 15\\% fuel surcharge on the entire fare. With a budget of 40 EUR, "
                "every trip of at most 80 km is affordable."
            ),
            (
                "A bakery makes cakes that each require $0.5$ kg of flour at 2 EUR/kg, $0.2$ kg "
                "of sugar at 3 EUR/kg, 3 eggs at 0.40 EUR each, and 1.50 EUR of energy. With a "
                "budget of 600 EUR and refrigerated storage for at most 200 eggs, the maximum "
                "number of cakes that can be produced is less than 70."
            ),
            (
                "The inequality $\\sqrt{3x-2}\\le|x-4|$ holds if and only if $x\\le 2$ or "
                "$x\\ge 9$."
            ),
        ],
        "answer_key": [False, True, False, True, False],
        "tactical_explanations": [
            (
                "**A.** → False\n\n"
                "Let $s$ be the number of standing tickets (a nonnegative integer). Then there "
                "are $2s$ seated tickets and $3s$ tickets in total.\n\n"
                "**Capacity**\n\n"
                "$$3s\\le 40\\Rightarrow s\\le 13.$$\n\n"
                "**Revenue**\n\n"
                "$$28s+45\\cdot(2s)=118s\\ge 1200\\Rightarrow "
                "s\\ge\\dfrac{1200}{118}\\approx 10.17.$$\n\n"
                "So $s\\in\\{11,12,13\\}$. The claim omits $s=11$, which already yields revenue "
                "$1298\\ge 1200$. Therefore the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "$$-x^{2}+20x+80>176$$\n\n"
                "$$-x^{2}+20x-96>0$$\n\n"
                "$$x^{2}-20x+96<0$$\n\n"
                "$$(x-8)(x-12)<0$$\n\n"
                "$$8<x<12.$$\n\n"
                "“Hotter than” is a strict inequality, so the open interval $(8,12)$ matches "
                "“between 8 and 12 minutes”. At the endpoints $T(8)=T(12)=176$, which is not "
                "hotter. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "Let $d$ be the distance in kilometres.\n\n"
                "$$1.15\\bigl(8+0.35d\\bigr)\\le 40$$\n\n"
                "$$8+0.35d\\le\\dfrac{40}{1.15}=\\dfrac{800}{23}$$\n\n"
                "$$0.35d\\le\\dfrac{800}{23}-8=\\dfrac{616}{23}$$\n\n"
                "$$d\\le\\dfrac{616}{23\\cdot 0.35}=\\dfrac{1760}{23}\\approx 76.52.$$\n\n"
                "Trips of 80 km exceed the budget. Therefore the statement is False."
            ),
            (
                "**D.** → True\n\n"
                "Cost per cake:\n\n"
                "$$0.5\\cdot 2+0.2\\cdot 3+3\\cdot 0.40+1.50=4.30\\text{ EUR}.$$\n\n"
                "**Budget:** $4.3n\\le 600\\Rightarrow n\\le 139.5$.\n\n"
                "**Eggs:** $3n\\le 200\\Rightarrow n\\le 66.\\overline{6}$, so $n\\le 66$.\n\n"
                "The egg limit is binding; the maximum is 66, which is less than 70. Therefore "
                "the statement is True."
            ),
            (
                "**E.** → False\n\n"
                "Domain: $3x-2\\ge 0\\Rightarrow x\\ge\\dfrac{2}{3}$.\n\n"
                "**Case $x\\ge 4$.** Then $\\sqrt{3x-2}\\le x-4$. Squaring:\n\n"
                "$$3x-2\\le(x-4)^{2}=x^{2}-8x+16$$\n\n"
                "$$0\\le x^{2}-11x+18=(x-2)(x-9).$$\n\n"
                "On $[4,\\infty)$ this forces $x\\ge 9$.\n\n"
                "**Case $\\dfrac{2}{3}\\le x<4$.** Then $\\sqrt{3x-2}\\le 4-x$. Squaring again "
                "yields $(x-2)(x-9)\\ge 0$, hence $x\\le 2$ on this half-line. Combined with "
                "the domain: $\\dfrac{2}{3}\\le x\\le 2$.\n\n"
                "The full solution is "
                "$\\bigl[\\dfrac{2}{3},2\\bigr]\\cup[9,\\infty)$. The claim $x\\le 2$ or "
                "$x\\ge 9$ wrongly includes $\\bigl(-\\infty,\\dfrac{2}{3}\\bigr)$. Therefore "
                "the statement is False."
            ),
        ],
        "difficulty_level": "5/5",
        "sort_order": 110,
        "solution_overview": (
            "Independent exam claims: a 2:1 ticket-mix revenue problem with an integer "
            "capacity cap, a quadratic kiln-temperature window, a courier fare with a "
            "percentage surcharge, a bakery limited by budget and egg storage, and a "
            "square-root versus absolute-value inequality requiring case splits. Each "
            "statement stands alone; domain restrictions and integer cutoffs decide several "
            "false claims."
        ),
        "placeholder": False,
    },
]


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    existing = {t["id"] for t in data["tasks"]}
    for task in TASKS:
        if task["id"] in existing:
            raise SystemExit(f"{task['id']} already present")
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        assert len(task["tactical_explanations"]) == 5
        data["tasks"].append(task)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"appended {[t['case_id'] for t in TASKS]}")


if __name__ == "__main__":
    main()
