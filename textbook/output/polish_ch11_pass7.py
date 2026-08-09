# -*- coding: utf-8 -*-
"""Pass7: finish amount$(...) ^{n}$ glue in 11.3."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"


def polish_text(s: str) -> tuple[str, int]:
    if not s:
        return s, 0
    work = s
    n = 0

    def apply(pat: str, repl) -> None:
        nonlocal work, n

        def _r(m: re.Match) -> str:
            nonlocal n
            n += 1
            return repl(m) if callable(repl) else repl

        work, _ = re.subn(pat, _r, work)

    # 5,000$(t + 2)^{2}$ / 50,000$(1.051271)^{-3}$ / 3,000$(22.2222)^{2}$
    apply(
        r"(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\$(\([^)]+\)\^\{[^}]+\})\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )
    # letter forms A$(t+k)^{2}$
    apply(
        r"\b([A-Za-z])\$(\([^)]+\)\^\{[^}]+\})\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )
    # × 400$(t + 2)^{2}$ already covered by digit pattern

    work = re.sub(r"\${3,}", "$$", work)
    return work, n


def polish_task(task: dict) -> int:
    total = 0
    for key in ("title", "context", "given", "formulas", "steps"):
        if task.get(key):
            task[key], c = polish_text(task[key])
            total += c
    for i, s in enumerate(task.get("statements") or []):
        task["statements"][i], c = polish_text(s)
        total += c
    for i, e in enumerate(task.get("explanations") or []):
        task["explanations"][i], c = polish_text(e)
        total += c
    return total


def leftover(data: dict) -> list[str]:
    rx = re.compile(r"\d(?:,\d{3})*\$\(|\)\$2|\)2e-|kn\s*-\s*1|Chapter\s+11\.|Practice\s+Worksheet")
    hits = []
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            blob = "\n".join(
                [
                    t.get("title") or "",
                    t.get("context") or "",
                    t.get("given") or "",
                    t.get("formulas") or "",
                    t.get("steps") or "",
                    *(t.get("statements") or []),
                    *(t.get("explanations") or []),
                ]
            )
            for m in rx.finditer(blob):
                hits.append(
                    f"{sub['id']}/{t['local_num']}: {m.group(0)!r} :: "
                    f"{blob[max(0,m.start()-18):m.end()+22]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("pass7 edits:", total)
    hits = leftover(data)
    print("leftover:", len(hits))
    for h in hits[:40]:
        print(" ", h)
    # spot 11.3/9
    t = next(x for x in data["subsections"][2]["tasks"] if x["local_num"] == 9)
    print("11.3/9 ctx:", t["context"][:140])
    print("11.3/9 form:", (t.get("formulas") or "")[:140])
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
