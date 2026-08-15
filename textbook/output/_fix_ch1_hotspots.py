# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        if t["id"] == "math-1-50":
            t["tactical_explanations"][0] = (
                "**A.** → True\n\n"
                "A universal claim fails as soon as a single **counterexample** appears.\n\n"
                "Negating a universal quantifier gives an existential with the inner formula negated:\n\n"
                "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$\n\n"
                "Here $\\neg(x^2 \\ge 0)$ is $x^2 < 0$."
            )
            t["tactical_explanations"][2] = (
                "**C.** → True\n\n"
                "A universal claim fails as soon as a single **counterexample** appears.\n\n"
                "$$\\neg(\\exists x\\, P(x)) \\equiv \\forall x\\, \\neg P(x)$$\n\n"
                "Negating \"$x > 100$\" gives \"$x \\le 100$,\" matching the statement exactly."
            )
        if t["id"] == "math-1-61":
            t["tactical_explanations"][2] = (
                "**C.** → True\n\n"
                "$\\neg S \\Rightarrow C$ is logically equivalent to $S \\lor C$ by the standard "
                "equivalence for material implication "
                "$(\\neg A \\Rightarrow B) \\equiv (A \\lor B)$.\n\n"
                "So the statement is True."
            )
        if t["id"] == "math-1-85":
            t["statements"][4] = (
                "To prove $\\exists x\\,P(x)$ is true, one satisfying value suffices; "
                "to prove $\\forall x\\,P(x)$ is true, one needs a general argument "
                "for an arbitrary $x$, not a finite check."
            )
            t["tactical_explanations"][3] = (
                "**D.** → False\n\n"
                "An existential claim needs only one working witness.\n\n"
                "The original is $\\exists x\\,\\forall d\\,\\mathrm{Late}(x,d)$; "
                "its negation is $\\forall x\\,\\exists d\\,\\neg\\mathrm{Late}(x,d)$ — "
                '"every employee has at least one non-late day," which is weaker than '
                '"all employees are never late" '
                "($\\forall x\\,\\forall d\\,\\neg\\mathrm{Late}(x,d)$).\n\n"
                "So the statement is False."
            )
        if t["id"] == "math-1-73":
            t["tactical_explanations"][3] = (
                "**D.** → True\n\n"
                "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$\n\n"
                "Applied here, this gives exactly \"there exists a fish that does not live in water\" "
                "— correctly formed regardless of its truth."
            )
        if t["id"] == "math-1-96":
            t["tactical_explanations"][0] = (
                "**A.** → True\n\n"
                "$$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$$\n\n"
                "Negating the universal claim correctly yields an existence claim for a "
                "**counterexample** triangle.\n\n"
                "So the statement is True."
            )

    out = [build.normalize_task_dollars(t) for t in tasks]
    build.write_ts(out)
    print("rewrote hotspots", len(out))


if __name__ == "__main__":
    main()
