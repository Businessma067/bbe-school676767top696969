# -*- coding: utf-8 -*-
"""Re-emit math-ch5-linear-equations.ts from raw JSON + optional explanation overrides (no PDF)."""
from __future__ import annotations

import json
import math
import re
from pathlib import Path

# Import generators from the rebuild module without re-running PDF loop.
import importlib.util

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "linear_eq_60_raw.json"
TS_OUT = ROOT / "src" / "data" / "math-ch5-linear-equations.ts"
OVERRIDE_PATHS = [
    ROOT / "textbook" / "output" / "ch5_expl_overrides.json",
]

# Load rebuild helpers without executing its module-level PDF scrape.
src = (ROOT / "textbook" / "output" / "rebuild_ch5_from_pdf.py").read_text(encoding="utf-8")
# Cut off at the scrape loop
cut = src.find("\ntasks = []")
if cut < 0:
    raise SystemExit("could not locate scrape loop in rebuild_ch5_from_pdf.py")
helper_src = src[:cut] + "\n"
# Remove top-level doc open side effects that will fail
helper_src = re.sub(r"^doc = pymupdf\.open.*\n", "", helper_src, flags=re.M)
helper_src = re.sub(r"^import pymupdf\n", "", helper_src, flags=re.M)
ns: dict = {}
exec(compile(helper_src, "rebuild_helpers", "exec"), ns)

esc = ns["esc"]
clean = ns["clean"]
statement_explanation = ns["statement_explanation"]
build_overview = ns["build_overview"]

tasks = json.loads(RAW.read_text(encoding="utf-8"))

# Apply table/context hard fixes (same source of truth as PDF rebuild)
import sys

sys.path.insert(0, str(ROOT / "textbook" / "output"))
from ch5_table_fixes import CONTEXT_FIXES, TABLE_MARKDOWN  # noqa: E402

for t in tasks:
    n = int(t["num"])
    if n in CONTEXT_FIXES:
        t["context"] = CONTEXT_FIXES[n]
    if n in TABLE_MARKDOWN:
        t["tables_markdown"] = TABLE_MARKDOWN[n].strip()
RAW.write_text(json.dumps(tasks, ensure_ascii=False, indent=2), encoding="utf-8")
print("applied table/context fixes to raw:", sorted(set(CONTEXT_FIXES) | set(TABLE_MARKDOWN)))

overrides: dict[str, dict] = {}
for path in OVERRIDE_PATHS:
    if not path.exists():
        continue
    blob = json.loads(path.read_text(encoding="utf-8"))
    for key, val in blob.items():
        if isinstance(val, dict) and "tactical_explanations" in val and "solution_overview" in val:
            overrides[str(key)] = val
    print(f"loaded {path.name}: {len(blob)}")

lines = [
    "/**",
    " * Chapter 5 — Linear equations in two unknowns",
    " * Structured prose + markdown tables from PDF (UI-native, no screenshots).",
    " */",
    "",
    'import type { MathTask } from "@/data/math-chapters";',
    "",
    "export const MATH_CH5_LINEAR_EQUATIONS: MathTask[] = [",
]

used_ov = 0
for t in tasks:
    d5 = max(1, min(5, math.ceil(float(t["difficulty_10"]) / 2.0)))
    n = t["num"]
    ov = overrides.get(str(n))
    if ov and isinstance(ov.get("tactical_explanations"), list) and len(ov["tactical_explanations"]) == 5:
        expls = [str(x) for x in ov["tactical_explanations"]]
        overview = str(ov["solution_overview"])
        used_ov += 1
    else:
        expls = [
            statement_explanation(
                "ABCDE"[i],
                t["answer_key"][i],
                t["statements"][i],
                t["explanations"][i],
                t["model"],
                t["final_answer"],
                t.get("coach") or "",
                is_first=(i == 0),
            )
            for i in range(5)
        ]
        overview = build_overview(
            t["model"],
            t.get("solution") or "",
            t["final_answer"],
            t.get("coach") or "",
            title=clean(t["title"]),
            context=t.get("context") or "",
        )

    lines.append("  {")
    lines.append(f'    id: "math-5-{n}",')
    lines.append(f'    case_id: "MATH 5.{n:02d}",')
    lines.append(f'    title: `{esc(clean(t["title"]))}`,')
    lines.append(f"    context: `{esc(t['context'])}`,")
    if t.get("tables_markdown"):
        lines.append(f"    tables_markdown: `{esc(t['tables_markdown'])}`,")
    lines.append("    statements: [")
    for s in t["statements"]:
        lines.append(f"      `{esc(s)}`,")
    lines.append("    ],")
    lines.append(
        "    answer_key: [" + ", ".join("true" if a else "false" for a in t["answer_key"]) + "],"
    )
    lines.append("    tactical_explanations: [")
    for e in expls:
        lines.append(f"      `{esc(e)}`,")
    lines.append("    ],")
    lines.append(f'    difficulty_level: "{d5}/5",')
    lines.append(f"    sort_order: {n},")
    lines.append(f"    solution_overview: `{esc(overview)}`,")
    lines.append("  },")

lines += ["];", ""]
TS_OUT.write_text("\n".join(lines), encoding="utf-8")
print("wrote", TS_OUT)
print("overrides applied", used_ov, "/60")
