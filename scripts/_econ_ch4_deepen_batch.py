#!/usr/bin/env python3
"""Apply maximally deepened tactical explanations to economics Ch4, one task at a time.

Usage:
  python3 scripts/_econ_ch4_deepen_batch.py --start 'CASE 4.1.01' --end 'CASE 4.1.20'
  python3 scripts/_econ_ch4_deepen_batch.py --ids 'CASE 4.1.01' 'CASE 4.1.02'
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"

# Import patch map from companion module written per batch
from _econ_ch4_expl_patches import PATCHES  # noqa: E402


def audit(case: dict) -> list[str]:
    errs: list[str] = []
    key = case["answer_key"]
    expls = case["tactical_explanations"]
    if len(expls) != 5 or len(key) != 5:
        errs.append(f"{case['case_id']}: expected 5 statements/keys/expls")
        return errs
    for i, (k, e) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        is_true = k is True or k == "True"
        want = "TRUE —" if is_true else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: expected opener {want!r}")
        closer = (
            "The statement is true." if is_true else "The statement is false."
        )
        if not e.rstrip().endswith(closer):
            errs.append(f"{case['case_id']} {letter}: missing closer {closer!r}")
        for bad in (
            "A student who",
            "Check the sentence against",
            "Read the quantifier",
            "Map the scenario onto",
            "Check that the comparison",
            "matched the topic to",
        ):
            if bad in e:
                errs.append(f"{case['case_id']} {letter}: filler left ({bad!r})")
        # Must have real body beyond opener + closer
        body = e[len(want) :].strip()
        if body.endswith(closer):
            body = body[: -len(closer)].strip()
        if len(body) < 80:
            errs.append(f"{case['case_id']} {letter}: body too thin ({len(body)} chars)")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--start", default=None)
    ap.add_argument("--end", default=None)
    ap.add_argument("--ids", nargs="*", default=None)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    data = json.loads(PATH.read_text())
    by_id = {c["case_id"]: c for c in data}

    if args.ids:
        ids = args.ids
    elif args.start and args.end:
        ids = []
        capturing = False
        for c in data:
            if c["case_id"] == args.start:
                capturing = True
            if capturing:
                ids.append(c["case_id"])
            if c["case_id"] == args.end:
                break
    else:
        print("Provide --ids or --start/--end", file=sys.stderr)
        return 2

    all_errs: list[str] = []
    updated = 0
    for cid in ids:
        if cid not in PATCHES:
            all_errs.append(f"{cid}: no patch in PATCHES")
            continue
        case = by_id[cid]
        # Apply one task at a time
        new_expls = PATCHES[cid]
        if len(new_expls) != 5:
            all_errs.append(f"{cid}: patch must have 5 explanations")
            continue
        case["tactical_explanations"] = new_expls
        errs = audit(case)
        if errs:
            all_errs.extend(errs)
            continue
        updated += 1
        print(f"OK {cid}")

    if all_errs:
        print("AUDIT FAILURES:", file=sys.stderr)
        for e in all_errs:
            print(" ", e, file=sys.stderr)
        return 1

    if not args.dry_run:
        PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
        print(f"Wrote {updated} tasks to {PATH}")
    else:
        print(f"Dry-run OK for {updated} tasks")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
