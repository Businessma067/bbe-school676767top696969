# -*- coding: utf-8 -*-
"""Pass5: finish nested-$ annuity / mortgage formulas."""
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

    # (a/r)$[1 - $1/(1+r)^{n}$]$
    apply(
        r"\(a/r\)\$\[\s*1\s*-\s*\$1/\(1\+r\)\^\{n\}\$\s*\]\$",
        "$(a/r)[1 - 1/(1+r)^{n}]$",
    )
    # Pn = (a/r)$[1 - $1/(1+r)^{n}$]$ already covered; also without trailing $
    apply(
        r"\(a/r\)\$\[\s*1\s*-\s*\$1/\(1\+r\)\^\{n\}\$\s*\]",
        "$(a/r)[1 - 1/(1+r)^{n}]",
    )

    # [1 - $1/(1.045)^{15}$] → $[1 - 1/(1.045)^{15}]$
    apply(
        r"\[\s*1\s*-\s*\$1/\(([^)]+)\)\^\{([^}]+)\}\$\s*\]",
        lambda m: f"$[1 - 1/({m.group(1)})^{{{m.group(2)}}}]$",
    )

    # [1-$(1.12)^{-6}$] → $[1-(1.12)^{-6}]$
    apply(
        r"\[\s*1\s*-\s*\$(\([^)]+\)\^\{[^}]+\})\$\s*\]",
        lambda m: f"$[1-{m.group(1)}]$",
    )

    # V/$(1.06)^{4}$ → $V/(1.06)^{4}$
    apply(
        r"\b([A-Za-z]\w*)/\$\(([^)]+)\)\^\{([^}]+)\}\$",
        lambda m: f"${m.group(1)}/({m.group(2)})^{{{m.group(3)}}}$",
    )

    # Remaining: 1/$(1.06)^{4}$ style without letter
    apply(
        r"(?<![\w])/\$\(([^)]+)\)\^\{([^}]+)\}\$",
        lambda m: f"$/({m.group(1)})^{{{m.group(2)}}}$",  # weird
    )
    # Fix accidental $/ → better
    apply(
        r"(?<![A-Za-z0-9,])1/\$\(([^)]+)\)\^\{([^}]+)\}\$",
        lambda m: f"$1/({m.group(1)})^{{{m.group(2)}}}$",
    )

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
    hits = []
    rx = re.compile(
        r"\(a/r\)\$\[|"
        r"\[\s*1\s*-\s*\$|"
        r"\[\s*1-\$|"
        r"/\$\(|"
        r"Chapter\s+11\.|"
        r"Practice\s+Worksheet"
    )
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
                    f"{blob[max(0,m.start()-18):m.end()+28]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("pass5 edits:", total)
    hits = leftover(data)
    print("leftover:", len(hits))
    for h in hits[:40]:
        print(" ", h)
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
