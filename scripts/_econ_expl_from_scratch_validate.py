#!/usr/bin/env python3
"""Validate from-scratch econ explanation rewrite (ch2–ch6)."""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

FORBIDDEN = [
    "i want you",
    "rehearse before",
    "fill the stem",
    "neighbouring vocabulary",
    "apply that definition to the claim",
    "the sentence accurately describes",
    "the wording on ",
    "the wording fits",
    "fits the standard definition",
    "apply that definition",
    "here is the catch",
    "here's the catch",
    "look —",
    "when you hear",
    "at the board",
    "the claim about ",
    "the claim fits the chapter",
    "the claim does not match the chapter",
]


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
    if any(n < 150 for n in lens):
        errs.append(f"{c['case_id']}: body under 150; lens={lens}")
    if sum(1 for n in lens if n >= 400) < 2:
        errs.append(f"{c['case_id']}: need ≥2 letters ≥400; lens={lens}")
    if not any(n >= 550 for n in lens):
        errs.append(f"{c['case_id']}: need ≥1 letter ≥550; lens={lens}")
    if max(lens) - min(lens) < 250:
        errs.append(f"{c['case_id']}: spread {max(lens)-min(lens)} < 250; lens={lens}")
    if notes > 2:
        errs.append(f"{c['case_id']}: too many Note: ({notes}); max 2")
    opens = [b.split("\n")[0].strip().lower()[:40] for b in bodies]
    if len(set(opens)) < 5:
        errs.append(f"{c['case_id']}: duplicate openings")
    for i, e in enumerate(expl):
        want = "True" if key[i] else "False"
        got = closer_verdict(e)
        if got != want:
            errs.append(f"{c['case_id']} {chr(65+i)}: closer={got} key={want}")
        low = e.lower()
        for s in FORBIDDEN:
            if s in low:
                errs.append(f"{c['case_id']} {chr(65+i)}: forbidden `{s}`")
        if "—" in e:
            errs.append(f"{c['case_id']} {chr(65+i)}: em dash")
        # hollow meta: very short + no concrete nouns from statement
        if lens[i] < 200 and re.search(
            r"^(the sentence|the assertion|the wording|yes\.|no\.)", bodies[i], re.I
        ):
            errs.append(f"{c['case_id']} {chr(65+i)}: hollow opener")
        for m in re.finditer(r"\$\$([\s\S]*?)\$\$", e):
            b = m.group(1)
            if re.search(r"\\text\{[^}]*\\text\{", b):
                errs.append(f"{c['case_id']} {chr(65+i)}: nested \\text")
            if b.count("{") != b.count("}"):
                errs.append(f"{c['case_id']} {chr(65+i)}: brace mismatch in math")
            if re.search(r"(?<!\\text\{)(?<!\\mathrm\{)\bShare\b", b):
                errs.append(f"{c['case_id']} {chr(65+i)}: bare Share in math")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("file")
    ap.add_argument("--from-id")
    ap.add_argument("--to-id")
    args = ap.parse_args()
    data = json.loads(Path(args.file).read_text())
    ids = [c["case_id"] for c in data]
    if args.from_id:
        i0 = ids.index(args.from_id)
        i1 = ids.index(args.to_id) if args.to_id else len(ids) - 1
        data = data[i0 : i1 + 1]
    errs: list[str] = []
    for c in data:
        errs.extend(check_case(c))
    if errs:
        print(f"FAIL {len(errs)} issues")
        for e in errs[:80]:
            print(e)
        if len(errs) > 80:
            print(f"... +{len(errs)-80} more")
        return 1
    print(f"OK {len(data)} cases")
    return 0


if __name__ == "__main__":
    sys.exit(main())
