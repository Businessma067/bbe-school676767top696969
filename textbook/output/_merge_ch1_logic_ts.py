"""Merge polished subsection JSON banks into src/data/math-ch1-logic.ts"""
from __future__ import annotations

import json
import re
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")
OUT = Path(__file__).resolve().parents[2] / "src" / "data" / "math-ch1-logic.ts"

SUBS = [
    ("1.1", "Sets: Elements, Subsets & Power Sets"),
    ("1.2", "Set Operations, Complements & Counting"),
    ("1.3", "Propositional Logic & Implications"),
    ("1.4", "Quantifiers, Validity & Deduction"),
]


def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def task_to_ts(t: dict) -> str:
    fields = []
    fields.append(f"    id: {js_str(t['id'])},")
    fields.append(f"    case_id: {js_str(t['case_id'])},")
    fields.append(f"    title: {js_str(t['title'])},")
    fields.append(f"    subsection: {js_str(t['subsection'])},")
    fields.append(f"    context: {js_str(t['context'])},")
    fields.append("    statements: [")
    for s in t["statements"]:
        fields.append(f"      {js_str(s)},")
    fields.append("    ],")
    fields.append(
        "    answer_key: ["
        + ", ".join("true" if x else "false" for x in t["answer_key"])
        + "],"
    )
    fields.append("    tactical_explanations: [")
    for s in t["tactical_explanations"]:
        fields.append(f"      {js_str(s)},")
    fields.append("    ],")
    fields.append(f"    difficulty_level: {js_str(t['difficulty_level'])},")
    fields.append(f"    sort_order: {t['sort_order']},")
    fields.append(f"    solution_overview: {js_str(t['solution_overview'])},")
    return "  {\n" + "\n".join(fields) + "\n  }"


def main() -> None:
    tasks = []
    for sid, _title in SUBS:
        # prefer POLISHED, else AUTO
        polished = BANKS / f"{sid}_POLISHED.json"
        auto = BANKS / f"{sid}_AUTO.json"
        path = polished if polished.exists() else auto
        if not path.exists():
            raise SystemExit(f"missing {path}")
        bank = json.loads(path.read_text(encoding="utf-8"))
        if len(bank) != 30:
            raise SystemExit(f"{path} has {len(bank)} tasks")
        for t in bank:
            if t.get("is_filler"):
                raise SystemExit(f"{path}: filler stub remains: {t.get('title')}")
            if not t.get("context") or any(not s for s in t["statements"]):
                raise SystemExit(f"{path}: incomplete task {t.get('id')}")
            if len(t["statements"]) != 5 or len(t["answer_key"]) != 5:
                raise SystemExit(f"{path}: bad lengths {t.get('id')}")
            if len(t.get("tactical_explanations") or []) != 5:
                raise SystemExit(f"{path}: bad expl {t.get('id')}")
            if not t.get("solution_overview") or len(t["solution_overview"]) < 200:
                raise SystemExit(f"{path}: short overview {t.get('id')}")
        tasks.extend(bank)

    # renumber global ids sequentially
    for i, t in enumerate(tasks, start=1):
        t["id"] = f"math-1-{i}"
        t["case_id"] = f"MATH 1.{i:02d}"

    sub_ts = ",\n".join(
        f'  {{ id: "{sid}", title: "{title}" }}' for sid, title in SUBS
    )
    body = ",\n".join(task_to_ts(t) for t in tasks)
    text = f'''/**
 * Chapter 1 — Logic (subsections 1.1–1.4).
 * Sourced from LOGIC.pdf practice set + unique generated fillers; explanations in Ch11 style.
 */

import type {{ MathTask }} from "@/data/math-chapters";

export const MATH_CH1_SUBSECTIONS = [
{sub_ts},
] as const;

export const MATH_CH1_LOGIC: MathTask[] = [
{body},
];
'''
    OUT.write_text(text, encoding="utf-8")
    print("wrote", OUT, "tasks", len(tasks))


if __name__ == "__main__":
    main()
