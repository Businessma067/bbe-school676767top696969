# -*- coding: utf-8 -*-
"""Expand thin puzzle A–E bodies that are only one short sentence."""
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

# Extra natural sentences keyed by (task_id, letter) — no situation repeat.
EXTRA = {
    ("math-1-102", "D"): (
        "So if Maria stays out, Noah is forced out as well. That reading follows from the "
        "contrapositive alone; you do not need a separate attendance count to see it."
    ),
    ("math-1-102", "A"): (
        "So Noah joining already rules Zoe out. The guarantee is logical, not contingent on "
        "Maria or Leo's choices."
    ),
    ("math-1-103", "A"): (
        "There is no path where Ben plays and Dan also plays. Once Carla is forced in by Ben, "
        "rule 3 immediately drops Dan."
    ),
    ("math-1-103", "D"): (
        "So Dan playing already keeps Carla out. The claim is just the contrapositive of rule 3, "
        "and that direction is always available."
    ),
    ("math-1-104", "A"): (
        "Owen cooking therefore already keeps Quinn out. You get that from the contrapositive of "
        "rule 4 without inventing a new rule."
    ),
    ("math-1-104", "B"): (
        "Owen and Priya cooking together is blocked at the first rule. There is no later rule that "
        "could reopen that combination."
    ),
    ("math-1-104", "D"): (
        "Whenever Priya cooks, Quinn cooks too — that is exactly what rule 3 says, so the claim "
        "adds no extra constraint beyond the given list."
    ),
    ("math-1-105", "B"): (
        "Fatima going therefore already keeps Hugo home. The claim is just the contrapositive of "
        "rule 6, and it holds in every valid trip."
    ),
    ("math-1-105", "C"): (
        "With Diego already ruled out, rule 4 has only one way left to succeed, and that way is "
        "Hugo going. So Hugo is fixed in every valid roster."
    ),
    ("math-1-106", "C"): (
        "Caleb presenting therefore forces Ethan to present as well. That is rule 4 read forward, "
        "with no extra assumptions."
    ),
    ("math-1-106", "D"): (
        "Aiden is never in a valid roster, so the contrapositive of rule 5 immediately drops Faye "
        "as well. Faye presenting cannot happen."
    ),
    ("math-1-107", "B"): (
        "Quinn reviewing therefore already keeps Petra out. That is the contrapositive of rule 1, "
        "and it holds for every valid assignment."
    ),
}


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    letters = "ABCDE"
    n = 0
    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            letter = letters[i]
            key = (t["id"], letter)
            if key not in EXTRA:
                continue
            if "\n\n" not in e:
                continue
            head, body = e.split("\n\n", 1)
            add = EXTRA[key]
            if add in body:
                continue
            # Only pad if still thin
            if len(body) >= 220:
                continue
            t["tactical_explanations"][i] = f"{head}\n\n{body.rstrip()} {add}"
            n += 1
    build.write_ts(tasks)
    print("expanded", n)


if __name__ == "__main__":
    main()
