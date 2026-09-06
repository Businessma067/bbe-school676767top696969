#!/usr/bin/env python3
"""Merge Ch10 explanation body modules into math-ch10-exp-log.json.

No character floors/ceilings: letter length follows the claim (Ch7/Ch9 style).
"""
from __future__ import annotations

import importlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / "src/data/math-ch10-exp-log.json"
sys.path.insert(0, str(ROOT / "scripts"))

HEADER_RE = re.compile(r"^\*\*([A-E])\.\*\*\s*→\s*(True|False)\s*$", re.M)
CLOSE_RE = re.compile(r"So the statement is (True|False)\.\s*$")
LETTERS = "ABCDE"


def load_bodies() -> dict[str, dict]:
    bodies: dict[str, dict] = {}
    for mod_name, attr in (
        ("_ch10_expl_bodies_101", "BODIES_101"),
        ("_ch10_expl_bodies_102", "BODIES_102"),
        ("_ch10_expl_bodies_103", "BODIES_103"),
    ):
        path = ROOT / "scripts" / f"{mod_name}.py"
        if not path.exists():
            raise SystemExit(f"missing {path}")
        # fresh load
        if mod_name in sys.modules:
            del sys.modules[mod_name]
        mod = importlib.import_module(mod_name)
        chunk = getattr(mod, attr)
        overlap = set(bodies) & set(chunk)
        if overlap:
            raise SystemExit(f"overlap keys: {sorted(overlap)[:5]}")
        bodies.update(chunk)
    return bodies


def check_letter(case_id: str, i: int, text: str, truth: bool) -> None:
    let = LETTERS[i]
    verd = "True" if truth else "False"
    lines = text.strip().splitlines()
    if not lines or not HEADER_RE.match(lines[0]):
        raise SystemExit(f"{case_id} {let}: bad header {lines[:1]!r}")
    m = HEADER_RE.match(lines[0])
    assert m
    if m.group(1) != let or m.group(2) != verd:
        raise SystemExit(f"{case_id} {let}: header {lines[0]!r} != {verd}")
    if not CLOSE_RE.search(text.strip()):
        raise SystemExit(f"{case_id} {let}: missing closer")
    cm = CLOSE_RE.search(text.strip())
    assert cm
    if cm.group(1) != verd:
        raise SystemExit(f"{case_id} {let}: closer mismatch")
    if text.count("$$") % 2:
        raise SystemExit(f"{case_id} {let}: unbalanced $$")


def main() -> None:
    bodies = load_bodies()
    payload = json.loads(BANK.read_text(encoding="utf-8"))
    tasks = payload["tasks"]
    if len(bodies) != len(tasks):
        missing = sorted({t["case_id"] for t in tasks} - set(bodies))
        extra = sorted(set(bodies) - {t["case_id"] for t in tasks})
        raise SystemExit(
            f"count {len(bodies)} != {len(tasks)}; missing {missing[:10]} extra {extra[:10]}"
        )

    for t in tasks:
        cid = t["case_id"]
        body = bodies[cid]
        ov = body["solution_overview"].strip()
        teas = [e.strip() for e in body["tactical_explanations"]]
        if len(teas) != 5:
            raise SystemExit(f"{cid}: need 5 letters")
        if len(ov) < 40:
            raise SystemExit(f"{cid}: empty overview")
        for i, (e, truth) in enumerate(zip(teas, t["answer_key"])):
            check_letter(cid, i, e, bool(truth))
        t["solution_overview"] = ov
        t["tactical_explanations"] = teas

    BANK.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("applied", len(tasks), "ok")


if __name__ == "__main__":
    main()
