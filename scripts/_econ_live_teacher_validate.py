#!/usr/bin/env python3
"""Validate live-teacher rewrite rules for econ tactical_explanations."""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def body(e: str) -> str:
    return CLOSER.sub("", e).strip()


def closer_verdict(e: str) -> str | None:
    m = CLOSER.search(e)
    return m.group(1).capitalize() if m else None


def check_case(c: dict) -> list[str]:
    errs: list[str] = []
    expl = c["tactical_explanations"]
    key = c["answer_key"]
    if len(expl) != 5 or len(key) != 5:
        return [f"{c['case_id']}: expected 5 explanations/keys"]
    bodies = [body(e) for e in expl]
    lens = [len(b) for b in bodies]
    notes = sum(1 for e in expl if re.search(r"(?m)^Note:", e))
    if any(n < 160 for n in lens):
        errs.append(f"{c['case_id']}: body under 160 (state-line risk); lens={lens}")
    if sum(1 for n in lens if n >= 400) < 2:
        errs.append(f"{c['case_id']}: need ≥2 letters ≥400; lens={lens}")
    if not any(n >= 550 for n in lens):
        errs.append(f"{c['case_id']}: need ≥1 letter ≥550; lens={lens}")
    if max(lens) - min(lens) < 200:
        errs.append(f"{c['case_id']}: spread {max(lens)-min(lens)} < 200; lens={lens}")
    if notes > 2:
        errs.append(f"{c['case_id']}: too many Note: blocks ({notes}); max 2 per case")
    opens = [b.split(".")[0].strip().lower()[:52] for b in bodies]
    if len(set(opens)) < 5:
        errs.append(f"{c['case_id']}: duplicate openings")
    stock = (
        "tied to buyer type",
        "whichever the stem is testing",
        "walk the claim",
        "definition letters live or die",
        "matches the chapter reading",
    )
    for i, e in enumerate(expl):
        want = "True" if key[i] else "False"
        got = closer_verdict(e)
        if got != want:
            errs.append(f"{c['case_id']} {chr(65+i)}: closer={got} key={want}")
        low = e.lower()
        for s in stock:
            if s in low:
                errs.append(f"{c['case_id']} {chr(65+i)}: stock `{s}`")
        # crude state-line: single short sentence body
        paras = [p.strip() for p in bodies[i].split("\n\n") if p.strip() and not p.strip().startswith("Note:")]
        if len(paras) == 1 and lens[i] < 200 and paras[0].count(".") <= 2:
            errs.append(f"{c['case_id']} {chr(65+i)}: looks like bare state-line")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("file")
    ap.add_argument("--from-id")
    ap.add_argument("--to-id")
    ap.add_argument("--exclude", action="append", default=[])
    args = ap.parse_args()
    data = json.loads(Path(args.file).read_text())
    ids = [c["case_id"] for c in data]
    if args.from_id:
        i0 = ids.index(args.from_id)
        i1 = ids.index(args.to_id) if args.to_id else len(ids) - 1
        data = data[i0 : i1 + 1]
    exclude = set(args.exclude)
    errs: list[str] = []
    for c in data:
        if c["case_id"] in exclude:
            continue
        errs.extend(check_case(c))
    if errs:
        print(f"FAIL {len(errs)} issues")
        for e in errs[:100]:
            print(e)
        if len(errs) > 100:
            print(f"... +{len(errs)-100} more")
        return 1
    print(f"OK {len(data)} cases")
    return 0


if __name__ == "__main__":
    sys.exit(main())
