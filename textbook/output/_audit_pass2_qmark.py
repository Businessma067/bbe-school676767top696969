# -*- coding: utf-8 -*-
"""Scan for leftover OCR junk: bare ? for ×/≈, weird glues."""
import json
import re
from pathlib import Path

raw = json.loads(Path("textbook/output/ch11_raw.json").read_text(encoding="utf-8"))

PATS = [
    ("QMARK_OP", re.compile(r"\d\s*\?\s*[\d$\\(]|\)\s*\?\s*\d|%\s*\?\s*\d")),
    ("QMARK_APX", re.compile(r"\?\s*\d+\.\d+")),  # ? 115.85 meaning ≈
    ("DOUBLE_DOLLAR_MONEY", re.compile(r"\$\\\$")),  # $\ $ money open
    ("BACKTICK", re.compile(r"`")),
]


def walk(obj, path, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk(v, path + [k], acc)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], acc)
    elif isinstance(obj, str):
        acc.append(("/".join(path), obj))


by = {f"11.{i}": [] for i in range(1, 8)}
for sub in raw["subsections"]:
    for t in sub["tasks"]:
        acc = []
        walk(t, [sub["id"], f"t{t['local_num']}"], acc)
        for p, s in acc:
            for name, pat in PATS:
                for m in pat.finditer(s):
                    by[sub["id"]].append(
                        (name, p, s[max(0, m.start() - 25) : m.end() + 35].replace("\n", "\\n"))
                    )

for sid, hits in by.items():
    print(f"=== {sid} {len(hits)} ===")
    for kind, p, sn in hits[:25]:
        print(f"  [{kind}] {p}: ...{sn.encode('ascii','replace').decode()}...")
    if len(hits) > 25:
        print(f"  ... +{len(hits)-25}")

Path("textbook/output/_audit_pass2_qmark.txt").write_text(
    "\n".join(
        f"[{k}] {p}: {s}" for sid, hits in by.items() for k, p, s in hits
    ),
    encoding="utf-8",
)
print("total", sum(len(v) for v in by.values()))
