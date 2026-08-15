# -*- coding: utf-8 -*-
"""Broader Ch11 scar audit after currency/KaTeX pass."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
raw = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))

PATTERNS = [
    ("ASSIGN_MONEY", re.compile(r"\$[^$\n]{1,60}\$\s*=\s*-?\$\d")),
    ("FLAT_POWER", re.compile(r"\)(\d{1,3})(?![0-9.}])")),  # (1.06)12
    ("FLAT_EXP_E", re.compile(r"\be\^(-?\d)")),  # e^0.05 flat-ish without {
    ("NESTED_DOLLAR", re.compile(r"\$[^$]*\$[^$]*\$")),  # rough: 3+ dollars close — filtered
    ("PROSE_IN_MATH", re.compile(
        r"\$[^$]{0,80}\b(?:monthly|yearly|annual|rate|amount|years?|and|the|for|with|from)\b[^$]{0,80}\$"
    )),
    ("GLUED_LABEL", re.compile(
        r"\b(?:Sdiscrete|Scontinuous|PVI+|PVII+|aordinary|adue|Kyearly|Kcontinuous|EAR(?:max)?)\b"
    )),
    ("TRUNC_TOC", re.compile(r"\b(?:Given:\s*Symbol|Worksheet|Chapter\s*11)\b", re.I)),
    ("SMASH_BULLET", re.compile(r"[A-Za-z0-9%]•")),
    ("RAW_TIMES_MISS", re.compile(r"\d\s*[xX]\s*\$")),  # dubious
]

FIELDS = ("title", "context", "statements", "given", "formulas", "steps", "explanations")


def unpaired_dollars(s: str) -> bool:
    # count unescaped $
    n = 0
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            i += 2
            continue
        if s[i] == "$":
            n += 1
        i += 1
    return n % 2 == 1


def walk_strings(obj, path, out):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk_strings(v, path + [k], out)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk_strings(v, path + [str(i)], out)
    elif isinstance(obj, str):
        out.append(("/".join(path), obj))


report = []
totals = {k: 0 for k, _ in PATTERNS}
totals["UNPAIRED_$"] = 0

for sub in raw["subsections"]:
    sid = sub["id"]
    for t in sub["tasks"]:
        strings = []
        walk_strings(t, [sid, f"t{t['local_num']}"], strings)
        for path, s in strings:
            if unpaired_dollars(s):
                totals["UNPAIRED_$"] += 1
                report.append(("UNPAIRED_$", path, s[:160].replace("\n", "\\n")))
            for name, pat in PATTERNS:
                if name == "NESTED_DOLLAR":
                    continue  # too noisy; use unpaired + assign
                for m in pat.finditer(s):
                    # skip false flat power inside ^{12} already
                    if name == "FLAT_POWER":
                        start = m.start()
                        if start > 0 and s[start - 1 : start + 1] == "}^{":
                            continue
                        # (1.06)^{12} — our pattern is )digits without ^{}
                        pass
                    if name == "PROSE_IN_MATH":
                        inner = m.group(0)[1:-1]
                        # allow \mathrm{...} and escaped currency
                        if "\\" in inner and not re.search(
                            r"\b(?:monthly|yearly|amount|years?)\b", inner
                        ):
                            # still flag monthly etc
                            if not re.search(
                                r"(?<!\\mathrm\{)(?<!\\text\{)\b(?:monthly|yearly|annual rate|amount|years?)\b",
                                inner,
                                re.I,
                            ):
                                # glue words and/the/for often false positive near inequalities — keep but mark
                                pass
                    totals[name] += 1
                    snip = s[max(0, m.start() - 30) : m.end() + 40].replace("\n", "\\n")
                    report.append((name, path, snip.encode("ascii", "replace").decode()))

# Prefer actionable subset for print
print("=== TOTALS ===")
for k, v in totals.items():
    print(f"{k}: {v}")

# Deduplicate-ish print top per category
shown = {k: 0 for k in totals}
print("\n=== SAMPLES (≤12 per category) ===")
for kind, path, snip in report:
    if shown.get(kind, 0) >= 12:
        continue
    shown[kind] = shown.get(kind, 0) + 1
    print(f"[{kind}] {path}: ...{snip}...")

out = ROOT / "textbook/output/_audit_ch11_post_currency.txt"
lines = [f"{k}: {v}" for k, v in totals.items()] + [""] + [
    f"[{a}] {b}: {c}" for a, b, c in report
]
out.write_text("\n".join(lines), encoding="utf-8")
print("\nwrote", out, "rows", len(report))
