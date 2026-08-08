# -*- coding: utf-8 -*-
"""Merge detailed explanation batches into math-ch5 TypeScript."""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "linear_eq_60_raw.json"
BATCH_DIR = ROOT / "textbook" / "output" / "batches"
OUT = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"

raw_tasks = json.loads(RAW.read_text(encoding="utf-8"))
by_num = {t["num"]: t for t in raw_tasks}

detailed: dict[int, dict] = {}
for path in sorted(BATCH_DIR.glob("detailed_*.json")):
    arr = json.loads(path.read_text(encoding="utf-8"))
    for item in arr:
        detailed[int(item["num"])] = item

missing = [n for n in range(1, 61) if n not in detailed]
if missing:
    raise SystemExit(f"Missing detailed tasks: {missing}")

mismatch = []
for n, d in detailed.items():
    raw = by_num[n]
    expls = d["tactical_explanations"]
    if len(expls) != 5:
        mismatch.append(f"task {n}: expected 5 expls, got {len(expls)}")
        continue
    for i, ans in enumerate(raw["answer_key"]):
        text = expls[i].lower()
        # Accept *(correct)* / *(false)* or — TRUE/FALSE
        want_true = bool(ans)
        has_correct = "(correct)" in text or "— true" in text or "—true" in text
        has_false = "(false)" in text or "— false" in text or "—false" in text
        if want_true and has_false and not has_correct:
            mismatch.append(f"task {n} stmt {i}: raw TRUE but explanation says false")
        if (not want_true) and has_correct and not has_false:
            mismatch.append(f"task {n} stmt {i}: raw FALSE but explanation says correct")

if mismatch:
    print("WARN verdict checks:")
    for m in mismatch[:30]:
        print(" ", m)
    if len(mismatch) > 30:
        print(f"  ... +{len(mismatch)-30} more")


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def clean_text(s: str) -> str:
    s = s.replace("\u2212", "-").replace("\u00d7", "\\times ").replace("\u2192", "\\to ")
    s = s.replace("\u2014", "—").replace("\u2013", "–").replace("\u00b7", "\\cdot ")
    # Repair common encoding mangling from batch writers
    s = s.replace(" ? ", " — ").replace(" ?\n", " —\n")
    s = s.replace("\\(", "$").replace("\\)", "$")
    s = s.replace("\\[", "$$").replace("\\]", "$$")
    s = re.sub(r"[ \t]+\n", "\n", s)
    return s.strip()


def flatten(s: str) -> str:
    return re.sub(r"\s+", " ", clean_text(s)).strip()


def mathify_light(text: str) -> str:
    text = clean_text(text)
    return text


def build_context(t: dict) -> str:
    narrative = flatten(t["narrative"])
    given = flatten(t["given"])
    parts = [narrative]
    if given:
        parts += ["", f"**Variables:** {mathify_light(given)}"]
    return "\n".join(parts)


lines: list[str] = []
lines.append("/**")
lines.append(" * Chapter 5 — Linear equations in two unknowns")
lines.append(" * 60 tasks from Linear_Equations_All_60_Tasks_Reranked PDF.")
lines.append(" * Explanations expanded into detailed textbook-style prose.")
lines.append(" */")
lines.append("")
lines.append('import type { MathTask } from "@/data/math-chapters";')
lines.append("")
lines.append("export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [")

for n in range(1, 61):
    t = by_num[n]
    d = detailed[n]
    d5 = max(1, min(5, math.ceil(float(t["difficulty_10"]) / 2.0)))
    diff = f"{d5}/5"
    overview = clean_text(d["solution_overview"])
    expls = [clean_text(e) for e in d["tactical_explanations"]]

    lines.append("  {")
    lines.append(f'    id: "math-5-{n}",')
    lines.append(f'    case_id: "MATH 5.{n:02d}",')
    lines.append(f'    title: `{esc(clean_text(t["title"]))}`,')
    lines.append(f"    context: `{esc(build_context(t))}`,")
    lines.append("    statements: [")
    for s in t["statements"]:
        lines.append(f"      `{esc(clean_text(s))}`,")
    lines.append("    ],")
    lines.append(
        "    answer_key: ["
        + ", ".join("true" if a else "false" for a in t["answer_key"])
        + "],"
    )
    lines.append("    tactical_explanations: [")
    for e in expls:
        lines.append(f"      `{esc(e)}`,")
    lines.append("    ],")
    lines.append(f'    difficulty_level: "{diff}",')
    lines.append(f"    sort_order: {n},")
    lines.append(f"    solution_overview: `{esc(overview)}`,")
    lines.append("  },")

lines.append("];")
lines.append("")
OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", OUT)
print("bytes", OUT.stat().st_size)
print("tasks", 60)
print("mismatches", len(mismatch))
