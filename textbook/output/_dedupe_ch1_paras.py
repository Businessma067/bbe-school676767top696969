# -*- coding: utf-8 -*-
"""Deduplicate near-duplicate paragraphs in explanations."""
from __future__ import annotations

import importlib.util
import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

CHAIN_DUP = re.compile(
    r"(Chain the relevant rules[^\n]*\n\n)+",
    re.I,
)


def dedupe_paras(s: str) -> str:
    paras = [p.strip() for p in s.split("\n\n") if p.strip()]
    out = []
    seen_norm = set()
    for p in paras:
        # normalize for near-dup detection
        norm = re.sub(r"\s+", " ", p.lower())
        norm = norm[:100]
        # skip near-duplicate chain tips
        if "chain the relevant rules" in norm and any("chain the relevant rules" in x for x in seen_norm):
            continue
        if norm in seen_norm:
            continue
        seen_norm.add(norm)
        # capitalize accidental lowercase starts (except math/$$)
        if p[0].islower() and not p.startswith("$"):
            p = p[0].upper() + p[1:]
        out.append(p)
    return "\n\n".join(out)


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    n = 0
    for t in tasks:
        for i, e in enumerate(t["tactical_explanations"]):
            ne = dedupe_paras(e)
            if ne != e:
                t["tactical_explanations"][i] = ne
                n += 1
        t["solution_overview"] = dedupe_paras(t["solution_overview"])
    build.write_ts(tasks)
    DUMP.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
    print("deduped", n)


if __name__ == "__main__":
    main()
