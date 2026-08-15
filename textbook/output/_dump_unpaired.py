# -*- coding: utf-8 -*-
import json
from pathlib import Path

raw = json.loads(Path("textbook/output/ch11_raw.json").read_text(encoding="utf-8"))


def unpaired(s: str) -> bool:
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


def walk(obj, path, acc):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == "answer_key":
                continue
            walk(v, path + [k], acc)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            walk(v, path + [str(i)], acc)
    elif isinstance(obj, str) and unpaired(obj):
        acc.append(("/".join(path), obj))


acc = []
for sub in raw["subsections"]:
    for t in sub["tasks"]:
        walk(t, [sub["id"], f"t{t['local_num']}"], acc)

Path("textbook/output/_audit_unpaired.txt").write_text(
    "\n\n".join(f"### {p}\n{s}" for p, s in acc), encoding="utf-8"
)
print("count", len(acc))
for p, s in acc:
    print("===", p)
    print(s.encode("ascii", "replace").decode())
    print()
