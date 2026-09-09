#!/usr/bin/env python3
"""Merge finished econ_expl_rewrite packs back into src/data banks + validate."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACK_DIR = ROOT / "textbook" / "output" / "econ_expl_rewrite"
DATA = ROOT / "src" / "data"

BAD = re.compile(
    r"^(TRUE|FALSE)\s*[—–-]|"
    r"Read the quantifier|This statement draws on|A student who overlooked|"
    r"It is important to note|In conclusion",
    re.I,
)


def pack_done(path: Path) -> bool:
    try:
        cases = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return False
    if not isinstance(cases, list) or not cases:
        return False
    for c in cases:
        expl = c.get("tactical_explanations") or []
        if len(expl) != 5:
            return False
        if any(not str(e).strip() or BAD.search(str(e)) for e in expl):
            return False
        if any("—" in str(e) for e in expl):
            return False
        keys = c.get("answer_key") or []
        for i, e in enumerate(expl):
            want = bool(keys[i]) if i < len(keys) else True
            low = str(e).strip().lower()
            if want and not low.endswith("the statement is true."):
                return False
            if not want and not low.endswith("the statement is false."):
                return False
    return True


def status() -> None:
    packs = sorted(PACK_DIR.glob("*.json"))
    done = [p for p in packs if pack_done(p)]
    print(f"packs {len(done)}/{len(packs)} done")
    pending = [p.name for p in packs if p not in done]
    if pending[:20]:
        print("pending sample:", ", ".join(pending[:20]))


def merge() -> None:
    by_id: dict[str, list[str]] = {}
    packs = sorted(PACK_DIR.glob("*.json"))
    for path in packs:
        if not pack_done(path):
            print("SKIP incomplete", path.name)
            continue
        for c in json.loads(path.read_text(encoding="utf-8")):
            by_id[c["case_id"]] = list(c["tactical_explanations"])
    print("loaded explanations for", len(by_id), "cases")

    for ch in range(2, 7):
        path = DATA / f"economics-cases-ch{ch}-subtopics.json"
        cases = json.loads(path.read_text(encoding="utf-8"))
        hit = miss = 0
        for c in cases:
            cid = c["case_id"]
            if cid in by_id:
                c["tactical_explanations"] = by_id[cid]
                hit += 1
            else:
                miss += 1
        path.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"ch{ch}: updated={hit} missing={miss}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "merge":
        merge()
    else:
        status()
