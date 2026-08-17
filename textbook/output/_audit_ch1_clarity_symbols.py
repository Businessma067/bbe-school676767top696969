# -*- coding: utf-8 -*-
"""Audit Ch1 for symbol scars and beginner-clarity red flags."""
from __future__ import annotations

import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    issues: list[str] = []
    scar_res = [
        ("name_in_set_dollars", re.compile(r"\$\\\{[^$]*\$")),
        ("split_neg", re.compile(r"\$\\neg\$\s+[A-Za-z(]")),
        ("eq_then_interval", re.compile(r"=\$\s*[\[(]")),
        ("lone_cup_cap", re.compile(r"\$\\(?:cup|cap|lor|land)\$")),
        ("overview_cites_only", re.compile(r"the overview (gives|shows|provides|lists|notes)", re.I)),
    ]
    for t in tasks:
        tid = t["id"]
        for field, text in [
            ("overview", t.get("solution_overview") or ""),
            *[
                (f"expl{i}", e)
                for i, e in enumerate(t.get("tactical_explanations") or [])
            ],
        ]:
            for name, rx in scar_res:
                if rx.search(text):
                    issues.append(f"{tid}.{field}: {name}")
            if field.startswith("expl") and len(text) < 160:
                issues.append(f"{tid}.{field}: short<{len(text)}")
            if field == "overview" and len(text) < 280:
                issues.append(f"{tid}.overview: short<{len(text)}")

    out = Path(__file__).with_name("_audit_ch1_clarity_symbols.txt")
    out.write_text(
        "\n".join([f"tasks={len(tasks)}", f"issues={len(issues)}", *issues]),
        encoding="utf-8",
    )
    print(f"issues={len(issues)} -> {out}")


if __name__ == "__main__":
    main()
