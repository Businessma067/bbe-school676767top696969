# -*- coding: utf-8 -*-
"""Pass3: fix nested-$ annuity brackets and remaining formula scars."""
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

    def apply(pat: str, fn) -> None:
        nonlocal work, n

        def _r(m: re.Match) -> str:
            nonlocal n
            n += 1
            return fn(m)

        work, _ = re.subn(pat, _r, work)

    # [$(1.05)^{6}$ - 1] / [$(1.13)^{4}$-1] → $[(1.05)^{6} - 1]$
    apply(
        r"\[\s*\$(\([^)]+\)\^\{[^}]+\})\$\s*-\s*1\s*\]",
        lambda m: f"$[{m.group(1)} - 1]$",
    )
    # (a/r)[$(1+r)^{n}$ - 1]
    apply(
        r"\(a/r\)\[\s*\$(\(1\+r\)\^\{n\})\$\s*-\s*1\s*\]",
        lambda m: f"$(a/r)[{m.group(1)} - 1]$",
    )
    # F6 = (2,000/0.05)$[(1.05)^{6} - 1]$ → wrap leading part if needed is optional

    # C(5) = $C_0 e^{r1\cdot3}$·$e^{r2\cdot2}$ → $C_0 e^{r_1\cdot 3} e^{r_2\cdot 2}$
    apply(
        r"\$C_0 e\^\{r1\\cdot3\}\$·\$e\^\{r2\\cdot2\}\$",
        lambda m: "$C_0 e^{r_1 \\cdot 3} e^{r_2 \\cdot 2}$",
    )
    apply(
        r"\$C_0 e\^\{r1\\cdot 3\}\$?\s*[·⋅]\s*\$?e\^\{r2\\cdot 2\}\$",
        lambda m: "$C_0 e^{r_1 \\cdot 3} e^{r_2 \\cdot 2}$",
    )
    apply(r"e\^\{r1\\cdot\s*3\}", lambda m: "e^{r_1 \\cdot 3}")
    apply(r"e\^\{r2\\cdot\s*2\}", lambda m: "e^{r_2 \\cdot 2}")

    # Flat power leftovers still outside math: )12 without ^{
    # Already handled in pass1; catch `(1.006)12` again if any
    apply(
        r"(?<![\^${])\((\d+\.\d+)\)(\d{1,3})\b",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )
    apply(
        r"(?<![\^${])\((1\+[rn]/[a-zA-Z]*)\)([nNt]|\d+)\b",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )

    # Broken: ·$e → join
    work = work.replace("}$·$", "} ")
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


def leftover_report(data: dict) -> list[str]:
    hits: list[str] = []
    rx = re.compile(
        r"\[\s*\$[^]]+\$\s*-|"
        r"\)\d{1,3}\b|"
        r"(?<![A-Za-z\\])e\^\(|"
        r"rAt|\\delta Bt|r1\\cdot|r2\\cdot|"
        r"a\d/\$\("
    )
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            if t.get("context") and t["context"][0].islower():
                hits.append(f"{sub['id']}/{t['local_num']} LOWER: {t['context'][:80]}")
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
                # skip legitimate like (t) or years)12 months - tighten with context
                g = m.group(0)
                if g.startswith(")") and re.search(r"(?:months|years|days|periods|payments)\)\d", blob[max(0,m.start()-20):m.end()]):
                    continue
                hits.append(
                    f"{sub['id']}/{t['local_num']}: {g!r} :: {blob[max(0,m.start()-20):m.end()+24]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("pass3 edits:", total)
    hits = leftover_report(data)
    print("leftover scars:", len(hits))
    for h in hits[:80]:
        print(" ", h)
    subprocess.check_call([sys.executable, str(EMIT)])
    t20 = next(t for t in data["subsections"][1]["tasks"] if t["local_num"] == 20)
    print("formulas:", t20.get("formulas"))


if __name__ == "__main__":
    main()
