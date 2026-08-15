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


def fix(s: str) -> str:
    if not s:
        return s

    reps = [
        ("[-1, \\infty)", "$[-1, \\infty)$"),
        ("[3,\\infty)", "$[3, \\infty)$"),
        ("[3, \\infty)", "$[3, \\infty)$"),
        ("(1, \\infty)", "$(1, \\infty)$"),
        ("(1,\\infty)", "$(1, \\infty)$"),
        ("$T^2 = 4$ < 16", "$T^2 = 4 < 16$"),
    ]
    for a, b in reps:
        s = s.replace(a, b)

    # undo double wrapping
    for inner in (
        "[-1, \\infty)",
        "[3, \\infty)",
        "(1, \\infty)",
    ):
        s = s.replace(f"$${inner}$$", f"${inner}$")
        s = s.replace(f"$${inner}$", f"${inner}$")
        s = s.replace(f"${inner}$)", f"${inner}$")

    # mangled cond contrappositive
    s = s.replace(
        "by contrappositive reasoning $(\\neg ($cond$1 \\land$ cond$2) \\Rightarrow \\neg$ Approved)",
        "by contrappositive reasoning "
        "$(\\neg(\\mathrm{cond}_1 \\land \\mathrm{cond}_2) \\Rightarrow \\neg\\mathrm{Approved})$",
    )
    s = s.replace(
        "by contrappositive reasoning $(\\neg ($cond$1 \\land$ cond$2) \\Rightarrow \\neg$ Approved)",
        "by contrappositive reasoning "
        "$(\\neg(\\mathrm{cond}_1 \\land \\mathrm{cond}_2) \\Rightarrow \\neg\\mathrm{Approved})$",
    )
    # spelling contrappositive vs contrappositive
    s = re.sub(
        r"reasoning \$\(\\neg \(\$cond\$1 \\land\$ cond\$2\) \\Rightarrow \\neg\$ Approved\)",
        r"reasoning $(\\neg(\\mathrm{cond}_1 \\land \\mathrm{cond}_2) "
        r"\\Rightarrow \\neg\\mathrm{Approved})$",
        s,
    )
    s = re.sub(
        r"\$\(\\neg \(\$cond\$1 \\land\$ cond\$2\) \\Rightarrow \\neg\$ Approved\)",
        r"$(\\neg(\\mathrm{cond}_1 \\land \\mathrm{cond}_2) \\Rightarrow \\neg\\mathrm{Approved})$",
        s,
    )
    return s


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    for t in tasks:
        t["context"] = fix(t["context"])
        t["solution_overview"] = fix(t["solution_overview"])
        t["statements"] = [fix(s) for s in t["statements"]]
        t["tactical_explanations"] = [fix(s) for s in t["tactical_explanations"]]
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)
    print("wrote", len(out))


if __name__ == "__main__":
    main()
