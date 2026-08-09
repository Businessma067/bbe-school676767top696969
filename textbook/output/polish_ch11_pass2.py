# -*- coding: utf-8 -*-
"""Second-pass polish: remaining Ch11 KaTeX/nesting scars."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"

CURRENCY_RE = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)"
    r"(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])"
)


def protect(text: str) -> tuple[str, list[str]]:
    bag: list[str] = []

    def keep(m: re.Match) -> str:
        bag.append(m.group(0))
        return f"§C{len(bag)-1}§"

    return CURRENCY_RE.sub(keep, text or ""), bag


def restore(text: str, bag: list[str]) -> str:
    out = text
    for i, v in enumerate(bag):
        out = out.replace(f"§C{i}§", v)
    return out


def polish_text(s: str) -> tuple[str, int]:
    if not s:
        return s, 0
    work, bag = protect(s)
    n = 0

    def apply(pat: str, fn) -> None:
        nonlocal work, n

        def _r(m: re.Match) -> str:
            nonlocal n
            n += 1
            return fn(m)

        work, _ = re.subn(pat, _r, work)

    def fix_br(m: re.Match) -> str:
        body = re.sub(r"\$([^$]+)\$", r"\1", m.group(1))
        body = re.sub(r"\s+", " ", body).strip()
        return f"$[{body}]$"

    # Annuity brackets: [$(1.05)^{6}$ - 1] → $[(1.05)^{6} - 1]$
    apply(
        r"\[\s*((?:\$[^$]+\$|[^\[\]$])*?\^\{[^}]+\}(?:\$)?(?:\s*[-+]\s*1)?)\s*\]",
        fix_br,
    )

    apply(
        r"\(a/r\)\s*\$\[\(1\+r\)\^\{n\}\s*-\s*1\]\$",
        lambda m: "$(a/r)[(1+r)^{n} - 1]$",
    )
    apply(
        r"\(a/r\)\[\s*\$\(1\+r\)\^\{n\}\$\s*-\s*1\s*\]",
        lambda m: "$(a/r)[(1+r)^{n} - 1]$",
    )

    # a2/$(1+r)^{2}$ → $a_2/(1+r)^{2}$
    apply(
        r"\ba(\d)\s*/\s*\$\(1\+r\)\^\{(\d+)\}\$",
        lambda m: f"$a_{m.group(1)}/(1+r)^{{{m.group(2)}}}$",
    )

    apply(r"\$A_0 e\^\{rAt\}\$", lambda m: "$A_0 e^{r_A t}$")
    apply(r"\$B_0 e\^\{-\\delta Bt\}\$", lambda m: "$B_0 e^{-\\delta_B t}$")
    apply(r"e\^\{rAt\}", lambda m: "e^{r_A t}")
    apply(r"e\^\{-\\delta Bt\}", lambda m: "e^{-\\delta_B t}")
    apply(r"A0e\^\(rAt\)", lambda m: "$A_0 e^{r_A t}$")
    apply(r"B0e\^\(-δBt\)", lambda m: "$B_0 e^{-\\delta_B t}$")
    apply(r"A0e\^\(-δBt\)", lambda m: "$A_0 e^{-\\delta_B t}$")
    apply(r"B0e\^\(-\\delta Bt\)", lambda m: "$B_0 e^{-\\delta_B t}$")

    def ehat(m: re.Match) -> str:
        inner = m.group(1).replace("×", r"\cdot ").replace("−", "-")
        return f"$e^{{{inner}}}$"

    apply(r"(?<![A-Za-z])e\^\(([^)]+)\)", ehat)
    apply(r"S0(?=\$e\^\{)", lambda m: "$S_0")
    apply(r"S0e\^", lambda m: "$S_0 e^")

    apply(
        r"\(\$e\^\{([^}]+)\}\$\)(\d+)\b",
        lambda m: f"$(e^{{{m.group(1)}}})^{{{m.group(2)}}}$",
    )
    apply(
        r"\(\$([^$]+)\$\)(\d+)\b",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )

    apply(
        r"n\s*[×x]\s*\[\s*\(\s*\$S\(t\)\$\s*/\s*\$S_0\$\s*\)\s*1/nt\s*-\s*1\s*\]",
        lambda m: "$n[(S(t)/S_0)^{1/(nt)} - 1]$",
    )
    apply(r"\(\$S\(t\)\$/\$S_0\$\)1/nt", lambda m: "(S(t)/S_0)^{1/(nt)}")

    def npv(m: re.Match) -> str:
        body = m.group(0)
        body = (
            body.replace("a0", "a_0")
            .replace("a1", "a_1")
            .replace("a2", "a_2")
            .replace("a3", "a_3")
        )
        body = re.sub(r"\$", "", body)
        return f"${body}$"

    apply(
        r"(?<!\$)\ba0\s*\+\s*a1/\(1\+r\)(?:\s*\+\s*a2/\(1\+r\)(?:\^2|\^\{2\}))?(?:\s*\+\s*a3/\(1\+r\)(?:\^3|\^\{3\}))?(?!\$)",
        npv,
    )
    apply(
        r"(?<!\$)\ba0\s*\+\s*a1/\(1\+r\)\s*\+\s*\$a_2/\(1\+r\)\^\{2\}\$(?:\s*\+\s*\$a_3/\(1\+r\)\^\{3\}\$)?",
        npv,
    )

    work = re.sub(r"\${3,}", "$$", work)
    work = restore(work, bag)
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
        r"\)\d{1,3}\b|\[\$[^\]]+\$\s*-|a\d/\$\(|(?<![A-Za-z])e\^\(|rAt|\\delta Bt|e\^\{rAt\}"
    )
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            if t["context"] and t["context"][0].islower():
                hits.append(f"{sub['id']}/{t['local_num']} LOWER: {t['context'][:70]}")
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
                    f"{sub['id']}/{t['local_num']}: {m.group(0)!r} :: {blob[max(0,m.start()-18):m.end()+22]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = 0
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            total += polish_task(t)
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("second-pass edits:", total)
    hits = leftover_report(data)
    print("leftover scars:", len(hits))
    for h in hits[:60]:
        print(" ", h)
    subprocess.check_call([sys.executable, str(EMIT)])
    t20 = next(t for t in data["subsections"][1]["tasks"] if t["local_num"] == 20)
    assert "Growth and Decay" in t20["title"], t20["title"]
    assert t20["context"].startswith("A family"), t20["context"][:40]
    print("capstone OK")
    print("11.2/20 formulas:", (t20.get("formulas") or "")[:200])


if __name__ == "__main__":
    main()
