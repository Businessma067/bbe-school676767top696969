#!/usr/bin/env python3
"""Unwrap \\begin{aligned}/align*/gather* KaTeX stacks into centered $$ lines.

Operates on math data under src/data (*.ts template-literal sources and *.json).
Row breaks are only \\ (optionally \\[...]) at end-of-line — never mid-command
escapes like \\frac / \\times in .ts sources.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace/src/data")

# Environments used as multi-step formula stacks
ENVS = ("aligned", "align", "align\\*", "gather", "gather\\*")
ENV_ALT = "|".join(ENVS)

# Source-level (TS / decoded JSON strings): single \ before begin/end
BLOCK_RE = re.compile(
    rf"\$\$\s*\\begin\{{({ENV_ALT})}}\s*([\s\S]*?)\\end\{{\1}}\s*\$\$",
    re.M,
)

# Row break: \\ or \\[1em] then EOL (do not match \\frac / \\times / ...)
ROW_BREAK_RE = re.compile(r"[ \t]*\\\\(?:\[[^\]]*\])?[ \t]*\n")

REL_OPS = r"\\approx|\\simeq|\\leq|\\geq|\\le|\\ge|\\neq|\\equiv|\\sim|>|<|="


def strip_align_amp(row: str) -> str:
    s = row.strip()
    if not s:
        return ""
    # A &= B  /  &= C
    s = re.sub(r"\s*&=\s*", " = ", s)
    # A &\approx B
    s = re.sub(rf"\s*&\s*({REL_OPS})", r" \1", s)
    # leading alignment tab: & P(...)  /  &
    s = re.sub(r"^\s*&\s*", "", s)
    # stray alignment tabs (rare)
    s = re.sub(r"(?<!\\)&", "", s)
    s = re.sub(r"\s{2,}", " ", s).strip()
    return s


def unwrap_body(body: str) -> str:
    rows = ROW_BREAK_RE.split(body)
    blocks: list[str] = []
    for row in rows:
        line = strip_align_amp(row)
        if not line:
            continue
        blocks.append(f"$$\n{line}\n$$")
    return "\n\n".join(blocks) if blocks else ""


def convert_text(text: str) -> tuple[str, int]:
    count = 0

    def repl(m: re.Match[str]) -> str:
        nonlocal count
        count += 1
        return unwrap_body(m.group(2))

    return BLOCK_RE.sub(repl, text), count


def convert_json_obj(obj: object) -> tuple[object, int]:
    total = 0
    if isinstance(obj, str):
        new, n = convert_text(obj)
        return new, n
    if isinstance(obj, list):
        out = []
        for item in obj:
            ni, n = convert_json_obj(item)
            total += n
            out.append(ni)
        return out, total
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            nv, n = convert_json_obj(v)
            total += n
            out[k] = nv
        return out, total
    return obj, 0


def process_ts(path: Path) -> int:
    original = path.read_text()
    updated, n = convert_text(original)
    if n:
        path.write_text(updated)
    return n


def process_json(path: Path) -> int:
    original = path.read_text()
    data = json.loads(original)
    updated, n = convert_json_obj(data)
    if n:
        path.write_text(json.dumps(updated, ensure_ascii=False, indent=2) + "\n")
    return n


def remaining(path: Path) -> dict[str, int]:
    text = path.read_text()
    # Count source-level \begin{...} (TS / raw). For JSON raw file, begin is \\begin.
    if path.suffix == ".json":
        return {
            "aligned": len(re.findall(r"\\\\begin\{aligned\}", text)),
            "align": len(re.findall(r"\\\\begin\{align\*?\}", text)),
            "gather": len(re.findall(r"\\\\begin\{gather\*?\}", text)),
        }
    return {
        "aligned": len(re.findall(r"(?<!\\)\\begin\{aligned\}", text)),
        "align": len(re.findall(r"(?<!\\)\\begin\{align\*?\}", text)),
        "gather": len(re.findall(r"(?<!\\)\\begin\{gather\*?\}", text)),
    }


def main() -> None:
    paths = (
        sorted(ROOT.glob("math-*.ts"))
        + sorted(ROOT.glob("math-*.json"))
        + sorted((ROOT / "math-theory").glob("*.md"))
    )
    before = {str(p): remaining(p) for p in paths}
    changed_files: list[str] = []
    total_unwrapped = 0

    for path in paths:
        b = before[str(path)]
        if not any(b.values()):
            continue
        if path.suffix == ".json":
            n = process_json(path)
        else:
            # .ts template sources and .md theory pages share source-level escapes
            n = process_ts(path)
        total_unwrapped += n
        if n:
            changed_files.append(str(path.relative_to(ROOT.parent.parent)))

    print("=== BEFORE (files with hits) ===")
    for p, c in before.items():
        if any(c.values()):
            print(f"  {Path(p).name}: {c}")

    print(f"\nunwrapped_blocks={total_unwrapped}")
    print("changed_files:")
    for f in changed_files:
        print(f"  {f}")

    print("\n=== AFTER ===")
    after_total = {"aligned": 0, "align": 0, "gather": 0}
    for path in paths:
        c = remaining(path)
        for k in after_total:
            after_total[k] += c[k]
        if any(c.values()):
            print(f"  REMAINING {path.name}: {c}")
    print(f"  totals: {after_total}")

    # sample from ch5
    sample_path = ROOT / "math-ch5-linear-equations.ts"
    text = sample_path.read_text()
    idx = text.find("y =620 - 360")
    if idx >= 0:
        print("\n=== SAMPLE (ch5 North/South) ===")
        print(text[idx - 20 : idx + 80])


if __name__ == "__main__":
    main()
