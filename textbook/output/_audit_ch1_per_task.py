# -*- coding: utf-8 -*-
"""Per-task audit of Ch1 Logic: length variety, $ scars, template pads, single-paragraph."""
from __future__ import annotations

import json
import re
from pathlib import Path

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")
OUT = Path(__file__).with_name("_ch1_audit_report.txt")

PAD_MARKERS = [
    "Name the concrete mismatch",
    "Write the claimed arrow",
    "Once the English is translated",
    "Pull the one shared",
    "Holding the claim",
    "lines up with the shared objects",
    "Use the scenario above as the shared setup",
]

SCAR_PATTERNS = [
    (r"-\\?\$\d", "minus-before-dollar like -$3"),
    (r"\$[^$]*\b(and|or|the|only|not|with|from|that|which|this)\b[^$]*\$", "english-inside-$"),
    (r"\$[^$]*\)\$", "suspicious closing paren inside $"),
    (r"=\s*\\emptyset\)\$", "emptyset)-scar"),
    (r"\\in D 3", "garbage 'in D 3'"),
    (r"(?<!\\)\$[^$]*\$[^$]*\$(?!\$)", "possible odd $ run"),
]


def body_of(expl: str) -> str:
    return re.sub(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*\n*", "", expl, flags=re.I)


def odd_dollars(s: str) -> int:
    # count unescaped $
    n = 0
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            i += 2
            continue
        if s[i] == "$":
            if i + 1 < len(s) and s[i + 1] == "$":
                i += 2
                continue
            n += 1
        i += 1
    return n % 2


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    lines = []
    summary = {
        "single_para_all_five": 0,
        "low_variety": 0,
        "dollar_odd": 0,
        "scars": 0,
        "pads": 0,
        "needs_rewrite": 0,
    }
    for t in tasks:
        issues = []
        words = []
        paras = []
        for i, e in enumerate(t["tactical_explanations"]):
            b = body_of(e)
            w = len(re.findall(r"\S+", b))
            p = len([x for x in re.split(r"\n\s*\n", b.strip()) if x.strip()])
            words.append(w)
            paras.append(p)
            letter = "ABCDE"[i]
            if odd_dollars(b) or odd_dollars(t["statements"][i]) or odd_dollars(t["context"]):
                issues.append(f"{letter}: odd $ count")
                summary["dollar_odd"] += 1
            for pat, name in SCAR_PATTERNS:
                blob = "\n".join([t["context"], t["statements"][i], b, t["solution_overview"]])
                if re.search(pat, blob):
                    issues.append(f"{letter}: scar {name}")
                    summary["scars"] += 1
                    break
            for pad in PAD_MARKERS:
                if pad in b or pad in t["solution_overview"]:
                    issues.append(f"pad:{pad[:28]}")
                    summary["pads"] += 1
                    break

        # variety: max/min word ratio within task
        wmin, wmax = min(words), max(words)
        ratio = (wmax / wmin) if wmin else 99
        if all(p == 1 for p in paras):
            issues.append("ALL five explanations are single-paragraph")
            summary["single_para_all_five"] += 1
        if ratio < 2.0 and wmax < 120:
            issues.append(f"low length variety words={words} ratio={ratio:.1f}")
            summary["low_variety"] += 1
        if issues:
            summary["needs_rewrite"] += 1

        lines.append(
            f"{t['id']} [{t['difficulty_level']}] {t['title']}\n"
            f"  words A-E: {words}  paras: {paras}  ratio={ratio:.1f}\n"
            f"  issues: {'; '.join(issues) if issues else 'OK-ish'}\n"
        )

    header = (
        f"CH1 AUDIT {len(tasks)} tasks\n"
        f"needs_rewrite={summary['needs_rewrite']}\n"
        f"single_para_all_five={summary['single_para_all_five']}\n"
        f"low_variety={summary['low_variety']}\n"
        f"dollar_odd_hits={summary['dollar_odd']}\n"
        f"scar_hits={summary['scars']}\n"
        f"pad_hits={summary['pads']}\n"
        f"{'='*60}\n"
    )
    OUT.write_text(header + "\n".join(lines), encoding="utf-8")
    print(header)
    print("wrote", OUT)


if __name__ == "__main__":
    main()
