#!/usr/bin/env python3
"""Analysis pass: determine which (task_idx, stmt_idx) slots in subsections
2.1-2.4 must be replaced, per the four repair rules. Pure analysis, no writes.
"""
from __future__ import annotations

import json
import re
from collections import Counter, defaultdict
from pathlib import Path

JSON_PATH = Path("/workspace/src/data/math-ch2-cases.json")
TARGET_SUBS = ("2.1", "2.2", "2.3", "2.4")

POWER_CHAIN_QUOTA = 2
DEFAULT_FAMILY_THRESHOLD = 4  # families larger than this get trimmed
DEFAULT_FAMILY_QUOTA = 4


def skeleton(s: str) -> str:
    s2 = re.sub(r"\d+(\.\d+)?", "N", s)

    def repl_math(m: re.Match) -> str:
        inner = m.group(1)
        seen: dict[str, str] = {}
        counter = [0]

        def sub_letter(mm: re.Match) -> str:
            key = mm.group(0)
            if key not in seen:
                seen[key] = f"V{counter[0]}"
                counter[0] += 1
            return seen[key]

        inner2 = re.sub(r"\\[a-zA-Z]+|[a-zA-Z]", sub_letter, inner)
        return f"${inner2}$"

    return re.sub(r"\$([^$]+)\$", repl_math, s2)


def is_power_chain(stmt: str) -> bool:
    return bool(
        re.search(r"\^\{-\d\}.*=\s*\d+", stmt) and "dfrac" in stmt and "cdot" in stmt
    )


NUM_EQ_RE = re.compile(r"(?<![\d.])(?:[a-zA-Z]|\\[a-zA-Z]+)\s*=\s*-?\d+(?!\d)")


def plugin_violation(stmt: str) -> bool:
    real_hits = []
    for m in NUM_EQ_RE.finditer(stmt):
        val = m.group(0)
        start = m.start()
        preceding = stmt[max(0, start - 3) : start]
        if val.endswith("=0") and "+" in preceding:
            continue  # vanishing-sum hypothesis like a+b+c=0, fine
        real_hits.append(val)
    if not real_hits:
        return False
    # exclude universal biconditionals like "|k|=0 if and only if k=0"
    if re.search(r"if and only if", stmt, re.I):
        return False
    # exclude "away from X=n" domain-exclusion phrasing
    if re.search(r"away from", stmt, re.I):
        return False
    return True


def load_slots():
    data = json.loads(JSON_PATH.read_text())
    tasks = data["tasks"]
    slots = []
    for ti, t in enumerate(tasks):
        if t["subsection"] not in TARGET_SUBS:
            continue
        for si, s in enumerate(t["statements"]):
            slots.append(
                {
                    "ti": ti,
                    "si": si,
                    "case_id": t["case_id"],
                    "sub": t["subsection"],
                    "sk": skeleton(s),
                    "stmt": s,
                    "power_chain": is_power_chain(s),
                }
            )
    return data, tasks, slots


def compute_replace_set():
    data, tasks, slots = load_slots()
    replace: set[tuple[int, int]] = set()
    reasons: dict[tuple[int, int], str] = {}

    # Rule 1: numeric plug-in violations
    for sl in slots:
        key = (sl["ti"], sl["si"])
        if plugin_violation(sl["stmt"]):
            replace.add(key)
            reasons[key] = "plugin"

    # Rule 2: within-task near-identical skeletons
    by_task: dict[int, list[dict]] = defaultdict(list)
    for sl in slots:
        by_task[sl["ti"]].append(sl)
    for ti, group in by_task.items():
        seen_sk: dict[str, tuple[int, int]] = {}
        for sl in sorted(group, key=lambda x: x["si"]):
            key = (sl["ti"], sl["si"])
            if key in replace:
                continue  # already flagged, will be replaced anyway
            if sl["sk"] in seen_sk:
                replace.add(key)
                reasons[key] = f"within_task_dup(of {seen_sk[sl['sk']]})"
            else:
                seen_sk[sl["sk"]] = key

    # Rule 3a: power-chain family global quota = 2
    pc_slots = [sl for sl in slots if sl["power_chain"] and (sl["ti"], sl["si"]) not in replace]
    pc_slots.sort(key=lambda sl: (sl["ti"], sl["si"]))
    for sl in pc_slots[POWER_CHAIN_QUOTA:]:
        key = (sl["ti"], sl["si"])
        replace.add(key)
        reasons[key] = "power_chain_quota"

    # Rule 3b: other global family quota
    fam_map: dict[str, list[dict]] = defaultdict(list)
    for sl in slots:
        key = (sl["ti"], sl["si"])
        if key in replace:
            continue
        if sl["power_chain"]:
            continue
        fam_map[sl["sk"]].append(sl)
    for sk, group in fam_map.items():
        if len(group) <= DEFAULT_FAMILY_THRESHOLD:
            continue
        group.sort(key=lambda sl: (sl["ti"], sl["si"]))
        for sl in group[DEFAULT_FAMILY_QUOTA:]:
            key = (sl["ti"], sl["si"])
            replace.add(key)
            reasons[key] = f"family_quota({sk[:40]})"

    return data, tasks, slots, replace, reasons


def main():
    data, tasks, slots, replace, reasons = compute_replace_set()
    print(f"Total slots (2.1-2.4): {len(slots)}")
    print(f"Total marked for replacement: {len(replace)}")

    touched_tasks = {ti for ti, si in replace}
    print(f"Tasks touched: {len(touched_tasks)}")

    by_sub = Counter()
    for ti, si in replace:
        by_sub[tasks[ti]["subsection"]] += 1
    print("By subsection:", dict(by_sub))

    by_reason_kind = Counter()
    for k, r in reasons.items():
        kind = r.split("(")[0]
        by_reason_kind[kind] += 1
    print("By reason:", dict(by_reason_kind))


if __name__ == "__main__":
    main()
