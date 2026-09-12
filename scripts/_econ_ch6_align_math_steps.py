#!/usr/bin/env python3
"""Merge consecutive one-line $$ displays in ch6 into aligned blocks.

Fixes uneven/centered KaTeX rows like:
  $$\\text{CA} = 255 + 171 + 105$$
  $$\\text{CA} = 531$$
→ one left-aligned aligned environment with &= .
"""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
SOLE_DISPLAY = re.compile(r"^\$\$\s*([\s\S]*?)\s*\$\$$")
MIN_RUN = 3


def is_oneline_display(para: str) -> bool:
    m = SOLE_DISPLAY.match(para.strip())
    if not m:
        return False
    body = m.group(1).strip()
    if not body or "\\begin{" in body:
        return False
    # single visual line (allow spaces)
    if "\n" in body:
        return False
    return len(body) <= 120


def to_aligned_row(body: str) -> str:
    s = body.strip()
    if "&" in s:
        return s
    # Prefer first relation at depth 0
    rels = [
        (r"\\approx", "\\\\approx"),
        (r"\\simeq", "\\\\simeq"),
        (r"\\leq", "\\\\leq"),
        (r"\\geq", "\\\\geq"),
        (r"\\le", "\\\\le"),
        (r"\\ge", "\\\\ge"),
        (r"\\neq", "\\\\neq"),
        ("=", "="),
        (">", ">"),
        ("<", "<"),
    ]
    depth = 0
    i = 0
    while i < len(s):
        ch = s[i]
        if ch == "{":
            depth += 1
            i += 1
            continue
        if ch == "}":
            depth = max(0, depth - 1)
            i += 1
            continue
        if depth == 0:
            for lit, _ in rels:
                if lit.startswith("\\"):
                    # match latex command
                    cmd = lit  # like \\approx stored as \approx in pattern - we used raw
                    pass
            # latex commands
            for cmd in ("\\approx", "\\simeq", "\\leq", "\\geq", "\\le", "\\ge", "\\neq"):
                if s.startswith(cmd, i):
                    return f"{s[:i].rstrip()} &{s[i:]}"
            if ch in "=<>":
                # skip == 
                return f"{s[:i].rstrip()} &{s[i:]}"
        i += 1
    # no relation — pad left
    return f"& {s}"


def format_aligned(bodies: list[str]) -> str:
    rows = [to_aligned_row(b) for b in bodies]
    inner = " \\\\\n".join(rows)
    return f"$$\n\\begin{{aligned}}\n{inner}\n\\end{{aligned}}\n$$"


def merge_paragraphs(text: str) -> str:
    parts = re.split(r"\n\s*\n", text.strip())
    out: list[str] = []
    i = 0
    while i < len(parts):
        if not is_oneline_display(parts[i]):
            out.append(parts[i])
            i += 1
            continue
        j = i
        while j < len(parts) and is_oneline_display(parts[j]):
            j += 1
        run = parts[i:j]
        if len(run) >= MIN_RUN:
            bodies = [SOLE_DISPLAY.match(p.strip()).group(1).strip() for p in run]
            out.append(format_aligned(bodies))
        else:
            out.extend(run)
        i = j
    return "\n\n".join(out).strip() + "\n"


def main() -> None:
    data = json.loads(PATH.read_text())
    changed = 0
    for case in data:
        new = []
        for e in case["tactical_explanations"]:
            fe = merge_paragraphs(e.rstrip() + "\n").rstrip() + "\n"
            # keep no trailing requirement - JSON strings usually no final \n inside
            fe = fe.rstrip("\n")
            # ensure closer intact
            if fe != e:
                changed += 1
            new.append(fe)
        case["tactical_explanations"] = new
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"letters changed: {changed}")

    # verify sample
    for c in data:
        if c["case_id"] == "CASE 6.1.017":
            for i, e in enumerate(c["tactical_explanations"]):
                if "255 + 171" in e or "CA} = 255" in e:
                    print(c["case_id"], chr(65 + i))
                    print(e[:700])
                    return
    # fallback search
    for c in data:
        for i, e in enumerate(c["tactical_explanations"]):
            if "255 + 171 + 105" in e:
                print(c["case_id"], chr(65 + i))
                print(e[:800])
                return


if __name__ == "__main__":
    main()
