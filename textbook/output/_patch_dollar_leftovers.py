# -*- coding: utf-8 -*-
"""Patch leftover prose $ collisions in Ch5 overrides."""
from __future__ import annotations

import json
import re
from pathlib import Path

OV = Path(__file__).with_name("ch5_expl_overrides.json")


def main() -> None:
    data = json.loads(OV.read_text(encoding="utf-8"))

    c5 = data["5"]["tactical_explanations"][2]
    for old, new in [
        (
            "At 4%, its $6,000 balance earns $0.04 \\times 6000 = 240$.",
            "At 4%, its $6,000 balance earns $240 (because 0.04 × 6000 = 240).",
        ),
        (
            "At 4%, its $6000 balance earns $0.04(6000)=240$.",
            "At 4%, its $6,000 balance earns $240 (because 0.04 × 6000 = 240).",
        ),
        (
            "At 4%, its $6000 balance earns $0.04 \\times 6000 = 240$.",
            "At 4%, its $6,000 balance earns $240 (because 0.04 × 6000 = 240).",
        ),
    ]:
        c5 = c5.replace(old, new)
    data["5"]["tactical_explanations"][2] = c5

    e8 = data["8"]["tactical_explanations"][4]
    for old, new in [
        (
            "At $120 each, the cost is $75 \\times 120 = 9000$.",
            "At $120 each, the cost is $9,000 (because 75 × 120 = 9000).",
        ),
        (
            "At $120 each, the cost is $75(120)=9000$.",
            "At $120 each, the cost is $9,000 (because 75 × 120 = 9000).",
        ),
    ]:
        e8 = e8.replace(old, new)
    data["8"]["tactical_explanations"][4] = e8

    for key in ("51", "58"):
        ov = data[key]["solution_overview"]
        ov = ov.replace("retainer ($).", "retainer (in dollars).")
        ov = ov.replace("per policy ($),", "per policy (in dollars),")
        ov = ov.replace("of coverage ($).", "of coverage (in dollars).")
        data[key]["solution_overview"] = ov

    data["18"]["solution_overview"] = data["18"]["solution_overview"].replace(
        'Each "costs $X more than" comparison',
        'Each "costs X more than" comparison',
    )

    for item in data.values():
        ov = item.get("solution_overview") or ""
        ov2 = re.sub(r"\bLet ([a-zA-Z]\d*) = ", r"Let $\1 =$ ", ov)
        item["solution_overview"] = ov2

    OV.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("T5/C snippet:", data["5"]["tactical_explanations"][2].split("\n\n")[1][:120])
    print("T8/E snippet:", data["8"]["tactical_explanations"][4].split("\n\n")[1][:120])


if __name__ == "__main__":
    main()
