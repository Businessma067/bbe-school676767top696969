# -*- coding: utf-8 -*-
"""Pass8: last P1 scars — kn, glued geom, r_A$$, false k^{n-1}."""
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

    # 11.3/19: $r_A$$(t + k)^{2}$ → $r A(t + k)^{2}$
    apply(
        r"\$r_A\$\$(\(\s*t\s*\+\s*k\s*\)\^\{2\})\$",
        r"$r A(t + k)^{2}$",
    )
    apply(r"2A\(t\s*\+\s*k\)\s*=\s*\$r_A\$\$", r"$2A(t + k) = r A$")
    # if still: 2A(t + k) = $r A(t + k)^{2}$ after partial
    apply(
        r"\$2A\(t \+ k\) = r A\$(\(t \+ k\)\^\{2\})\$?",
        r"$2A(t + k) = r A(t + k)^{2}$",
    )

    # false a·($k^{n-1}$)/(k-1) → a(k^{n}-1)/(k-1)
    apply(
        r"a\s*[·⋅×]?\s*\(\s*\$k\^\{n-1\}\$\s*\)\s*/\s*\(\s*k\s*-\s*1\s*\)",
        r"$a(k^{n}-1)/(k-1)$",
    )
    apply(
        r"a\s*[·⋅×]\s*\(\s*\$k\^\{n-1\}\$\s*\)/\(k-1\)",
        r"$a(k^{n}-1)/(k-1)$",
    )
    apply(
        r"sn\s*=\s*a\s*[·⋅×]\s*\(\s*\$k\^\{n-1\}\$\s*\)/\(k-1\)",
        r"$s_n = a(k^{n}-1)/(k-1)$",
    )

    # sn = a·(1 - kn)/(1 - k)
    apply(
        r"sn\s*=\s*a\s*[·⋅×]\s*\(\s*1\s*-\s*kn\s*\)\s*/\s*\(\s*1\s*-\s*k\s*\)",
        r"$s_n = a(1 - k^{n})/(1 - k)$",
    )
    apply(r"\(\s*1\s*-\s*kn\s*\)", r"$(1 - k^{n})$")
    apply(r"(?<![A-Za-z])\bkn\b", r"$k^{n}$")

    # glued powers remaining
    GEOM = [
        (r"\b0\.888\b", r"$0.88^{8}$"),
        (r"\b1\.206\b", r"$1.20^{6}$"),
        (r"\b1\.205\b", r"$1.20^{5}$"),
        (r"\b1\.0311\b", r"$1.03^{11}$"),
        (r"\b1\.0120\b", r"$1.01^{20}$"),
        (r"\b1\.0320\b", r"$1.03^{20}$"),
        (r"\b0\.9415\b", r"$0.94^{15}$"),
        (r"\b1\.066\b(?!\d)", r"$1.06^{6}$"),
        (r"\b1\.204\b", r"$1.20^{4}$"),
        (r"\b1\.208\b", r"$1.20^{8}$"),
    ]
    for pat, repl in GEOM:
        apply(pat, repl)

    # (1 + r)t2 / V/(1+r)k
    apply(r"\(1\s*\+\s*r\)t2\b", r"$(1+r)^{t_2}$")
    apply(r"\(1\s*\+\s*r\)t(\d)\b", lambda m: f"$(1+r)^{{t_{m.group(1)}}}$")
    apply(r"V/\(1\+r\)k\b", r"$V/(1+r)^{k}$")
    apply(r"PV0\s*=\s*V/\(1\+r\)k\b", r"$PV_0 = V/(1+r)^{k}$")

    # e^{-rt}$* → e^{-rt^*}
    apply(r"\$e\^\{-rt\}\$\*", r"$e^{-rt^*}$")
    apply(r"e\^\{-rt\}\$\*", r"e^{-rt^*}")

    # ∑n=1 ∞ 1/np ; ∑an
    apply(r"∑n=1\s*∞\s*1/np", r"$\\sum_{n=1}^{\\infty} 1/n^{p}$")
    apply(r"∑an\b", r"$\\sum a_n$")
    apply(r"∑n=1\s*∞\s*an", r"$\\sum_{n=1}^{\\infty} a_n$")

    # Fix over-escaped lim/sum already stored as $\\lim → should be $\lim
    # In JSON string we want \lim for KaTeX. Currently may have \\lim after bad replace.
    # When reading JSON, \\ becomes \. If we wrote $\\lim in Python string that's $\lim in file.
    # Agent said over-escaped $\\lim - meaning in the TS/JSON the content has \\lim literally (double backslash for KaTeX wrong).
    # Fix: replace $\\lim with $\lim etc in the text as stored after JSON load (one backslash in Python = one in data)
    # If data has `\\lim` (two chars \ \ l) wait - JSON "\\lim" loads as `\lim`. 
    # Over-escape means data literally contains `\lim` doubled as `\\lim` string (backslash backslash lim)
    apply(r"\$\\\\lim", r"$\\lim")
    apply(r"\$\\\\sum", r"$\\sum")
    # If we incorrectly have `$\\lim` in Python meaning `$\lim` - skip

    # Normalize common double-backslash LaTeX commands that got doubled
    for cmd in ("lim", "sum", "mathrm", "cdot", "times", "infty", "to"):
        apply(rf"\\\\{cmd}", rf"\\{cmd}")

    work = re.sub(r"\${3,}", "$$", work)
    work = work.replace("$ $", " ")
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
    rx = re.compile(
        r"\$r_A\$\$|"
        r"\(1\s*-\s*kn\)|"
        r"(?<![A-Za-z$])\bkn\b|"
        r"k\^\{n-1\}|"
        r"\b0\.888\b|\b1\.206\b|\b1\.205\b|\b1\.0311\b|\b0\.9415\b|"
        r"\(1\s*\+\s*r\)t2|"
        r"V/\(1\+r\)k|"
        r"e\^\{-rt\}\$\*"
    )
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
    print("pass8 edits:", total)
    hits = leftover(data)
    print("leftover:", len(hits))
    for h in hits[:40]:
        print(" ", h)
    # spot checks
    for sid, num, field in [("11.3", 19, "steps"), ("11.4", 2, "formulas"), ("11.4", 10, "steps")]:
        sub = next(s for s in data["subsections"] if s["id"] == sid)
        t = next(x for x in sub["tasks"] if x["local_num"] == num)
        print(f"{sid}/{num} {field}:", (t.get(field) or "")[:160].replace("\n", " | "))
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
