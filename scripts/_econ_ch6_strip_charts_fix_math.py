#!/usr/bin/env python3
"""Remove redundant [[CHART]] blocks from ch6 contexts and fix cramped math steps."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
CHART_BLOCK = re.compile(r"\n?\[\[CHART[\s\S]*?\[\[/CHART\]\]\n?", re.M)


def strip_charts(context: str) -> str:
    out = CHART_BLOCK.sub("\n\n", context)
    return re.sub(r"\n{3,}", "\n\n", out).strip() + "\n"


def fix_display_body(body: str) -> str:
    """Split `= 45,000` immediately followed by \\frac onto separate aligned rows."""
    if "\\begin{aligned}" in body or "\\begin{gather" in body:
        return body
    lines = body.split("\n")
    changed = False
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        nxt = lines[i + 1].strip() if i + 1 < len(lines) else ""
        if (
            re.search(r"=\s*[\d{,}]+\s*$", line)
            and nxt.startswith("\\frac")
            and "\\\\" not in line
        ):
            out.append(line.rstrip() + " \\\\[0.65em]")
            changed = True
            i += 1
            continue
        out.append(line)
        i += 1
    if not changed:
        return body
    return "\n".join(out)


def fix_math_in_text(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        body = fix_display_body(m.group(1))
        return f"$${body}$$"

    return re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)


def merge_adjacent_frac_blocks(text: str) -> str:
    """Merge `$$...= N$$` + `$$\\frac...` into one aligned block."""
    pat = re.compile(
        r"\$\$\s*([\s\S]*?=\s*[\d{,}]+)\s*\$\$\s*\n\s*\$\$\s*(\\frac[\s\S]*?)\s*\$\$",
        re.M,
    )

    def repl(m: re.Match[str]) -> str:
        left = m.group(1).strip()
        right = m.group(2).strip()
        if "\\begin{aligned}" in left:
            return m.group(0)
        first = left
        if "&=" not in first:
            first = re.sub(r"=\s*", "&=", first, count=1)
        return f"$$\n\\begin{{aligned}}\n{first} \\\\[0.65em]\n& {right}\n\\end{{aligned}}\n$$"

    prev = None
    out = text
    while out != prev:
        prev = out
        out = pat.sub(repl, out)
    return out


def process_case(case: dict) -> tuple[bool, bool]:
    changed_ctx = changed_expl = False
    ctx = case.get("context") or ""
    new_ctx = strip_charts(ctx)
    if new_ctx != ctx:
        case["context"] = new_ctx
        changed_ctx = True
    expls = case.get("tactical_explanations") or []
    new_expl: list[str] = []
    for e in expls:
        fixed = fix_math_in_text(e)
        fixed = merge_adjacent_frac_blocks(fixed)
        new_expl.append(fixed)
        if fixed != e:
            changed_expl = True
    if changed_expl:
        case["tactical_explanations"] = new_expl
    return changed_ctx, changed_expl


def main() -> None:
    data = json.loads(PATH.read_text())
    ctx_n = expl_n = 0
    for case in data:
        c, e = process_case(case)
        ctx_n += int(c)
        expl_n += int(e)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    charts_left = sum(c.get("context", "").count("[[CHART") for c in data)
    print(f"charts stripped from {ctx_n} cases; math fixed in {expl_n} cases; charts left={charts_left}")


if __name__ == "__main__":
    main()
