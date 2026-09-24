#!/usr/bin/env python3
"""Merge chapter hard-demo JSON slices into the EN overlay file."""
from __future__ import annotations

import json
import sys
from pathlib import Path

OUT = Path("/workspace/src/data/demo-math-hard-en.json")
SLICES = [
    Path("/tmp/demo-hard-out/ch1-2.json"),
    Path("/tmp/demo-hard-out/ch3-4.json"),
    Path("/tmp/demo-hard-out/ch5-6.json"),
    Path("/tmp/demo-hard-out/ch7-8.json"),
]
REQUIRED = json.load(open("/tmp/demo-math-free-meta.json"))
REQUIRED_IDS = {row["case_id"] for row in REQUIRED}

FIELDS = (
    "title",
    "context",
    "statements",
    "answer_key",
    "tactical_explanations",
    "solution_overview",
    "difficulty_level",
)


def validate(case_id: str, row: dict) -> list[str]:
    errs = []
    for f in FIELDS:
        if f not in row:
            errs.append(f"{case_id}: missing {f}")
    if "statements" in row and len(row["statements"]) != 5:
        errs.append(f"{case_id}: statements len {len(row['statements'])}")
    if "answer_key" in row and len(row["answer_key"]) != 5:
        errs.append(f"{case_id}: answer_key len")
    if "tactical_explanations" in row:
        ex = row["tactical_explanations"]
        if len(ex) != 5:
            errs.append(f"{case_id}: explanations len")
        else:
            for i, e in enumerate(ex):
                if not isinstance(e, str) or len(e) < 200:
                    errs.append(f"{case_id}: expl[{i}] too short ({len(e) if isinstance(e,str) else type(e)})")
                letter = "ABCDE"[i]
                if isinstance(e, str) and not e.lstrip().startswith(f"**{letter}."):
                    errs.append(f"{case_id}: expl[{i}] header not **{letter}.")
                if isinstance(e, str) and row.get("answer_key"):
                    want = "True" if row["answer_key"][i] else "False"
                    head = e.split("\n", 1)[0]
                    if want not in head:
                        errs.append(f"{case_id}: expl[{i}] verdict mismatch want {want} in {head!r}")
    if row.get("difficulty_level") != "5/5":
        errs.append(f"{case_id}: difficulty not 5/5")
    return errs


def main() -> int:
    merged: dict = {}
    missing_files = [str(p) for p in SLICES if not p.exists()]
    if missing_files:
        print("MISSING slices:", missing_files, file=sys.stderr)
        return 2
    for path in SLICES:
        data = json.loads(path.read_text())
        print(f"loaded {path.name}: {len(data)} keys")
        merged.update(data)

    errs: list[str] = []
    for cid in sorted(REQUIRED_IDS):
        if cid not in merged:
            errs.append(f"missing required {cid}")
            continue
        errs.extend(validate(cid, merged[cid]))

    extra = sorted(set(merged) - REQUIRED_IDS)
    if extra:
        print("note: extra keys (kept):", extra[:10], "..." if len(extra) > 10 else "")

    if errs:
        print(f"VALIDATION FAILED ({len(errs)}):", file=sys.stderr)
        for e in errs[:80]:
            print(" ", e, file=sys.stderr)
        if len(errs) > 80:
            print(f"  ... +{len(errs)-80} more", file=sys.stderr)
        return 1

    # Keep only required fields + only required ids
    clean = {}
    for cid in sorted(REQUIRED_IDS):
        row = merged[cid]
        clean[cid] = {f: row[f] for f in FIELDS}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(clean, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {OUT} with {len(clean)} tasks")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
