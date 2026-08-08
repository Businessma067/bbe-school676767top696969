# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path


def looks_like_eq(s: str) -> bool:
    s = s.strip()
    if not s or "$$" in s or s.startswith("**") or s.startswith("#"):
        return False
    if "=" not in s or len(s) > 90:
        return False
    if s.lower().startswith("final"):
        return False
    soft = re.sub(r"\s+", "", s)
    if not re.match(r"^[0-9a-zA-Z+\-().=/\\]+$", soft):
        return False
    left = s.split("=", 1)[0]
    return bool(re.search(r"[a-zA-Z0-9]", left))


def wrap_bare_eqs(text: str) -> str:
    lines = text.split("\n")
    out: list[str] = []
    i = 0
    while i < len(lines):
        ln = lines[i]
        if looks_like_eq(ln):
            block = [ln.strip()]
            j = i + 1
            while j < len(lines) and looks_like_eq(lines[j]):
                block.append(lines[j].strip())
                j += 1
            out.append("$$\n" + " \\\\\n".join(block) + "\n$$")
            i = j
            continue
        out.append(ln)
        i += 1
    return "\n".join(out)


for path in sorted(Path("textbook/output/batches").glob("detailed_*.json")):
    arr = json.loads(path.read_text(encoding="utf-8"))
    fixed = 0
    for item in arr:
        before = item["solution_overview"]
        after = wrap_bare_eqs(before)
        if after != before:
            item["solution_overview"] = after
            fixed += 1
        for idx, e in enumerate(item["tactical_explanations"]):
            ae = wrap_bare_eqs(e)
            if ae != e:
                item["tactical_explanations"][idx] = ae
                fixed += 1
    path.write_text(json.dumps(arr, ensure_ascii=False, indent=2), encoding="utf-8")
    print(path.name, "blocks touched", fixed)

print("done")
