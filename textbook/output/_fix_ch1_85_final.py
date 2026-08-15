# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import re
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

        def scrub(s: str) -> str:
            s = re.sub(r"\$\\forall\$\s+day", "every day", s)
            s = re.sub(r"\$\\exists\$\s+day", "some day", s)
            s = re.sub(r"\$\\exists x\\,\\forall\$\s*day", r"$\\exists x\\,\\forall d$", s)
            s = re.sub(r"\$\\forall x\\,\\exists\$\s*day", r"$\\forall x\\,\\exists d$", s)
            s = re.sub(
                r"\$\\exists x\\,\\forall\$ day, Late\(x,day\)",
                r"$\\exists x\\,\\forall d\\,\\mathrm{Late}(x,d)$",
                s,
            )
            s = re.sub(
                r"\$\\forall x\\,\\exists\$ day,\$\\neg\\mathrm\{Late\}\$\(x,day\)",
                r"$\\forall x\\,\\exists d\\,\\neg\\mathrm{Late}(x,d)$",
                s,
            )
            s = re.sub(
                r"\$\(\s*\\forall x\$,\s*every day,\$\\neg\\mathrm\{Late\}\$\)",
                r"$(\\forall x\\,\\forall d\\,\\neg\\mathrm{Late}(x,d))$",
                s,
            )
            return s

        t["context"] = scrub(t["context"])
        t["solution_overview"] = scrub(t["solution_overview"])
        t["statements"] = [scrub(s) for s in t["statements"]]
        t["tactical_explanations"] = [scrub(s) for s in t["tactical_explanations"]]

    out = [build.normalize_task_dollars(t) for t in tasks]
    build.write_ts(out)
    print("ok", len(out))


if __name__ == "__main__":
    main()
