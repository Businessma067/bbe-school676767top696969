#!/usr/bin/env python3
"""Apply the Chapter 2.1-2.4 repair: replace flagged statements with
genuinely different, symbolic, non-plug-in claims drawn from per-subsection
template libraries, update answer_key + explanations, write the JSON back,
and emit a Python-generated plain-text report of every change.
"""
from __future__ import annotations

import json
import sys
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from repair_analysis import compute_replace_set, skeleton  # noqa: E402
from repair_templates_21 import T21_TEMPLATES  # noqa: E402
from repair_templates_22 import T22_TEMPLATES  # noqa: E402
from repair_templates_23 import T23_TEMPLATES  # noqa: E402
from repair_templates_24 import T24_TEMPLATES  # noqa: E402

JSON_PATH = Path("/workspace/src/data/math-ch2-cases.json")
REPORT_PATH = Path("/tmp/ch2_214_repair_report.txt")

TEMPLATES_BY_SUB = {
    "2.1": T21_TEMPLATES,
    "2.2": T22_TEMPLATES,
    "2.3": T23_TEMPLATES,
    "2.4": T24_TEMPLATES,
}

SINGLE = ["x", "t", "u", "w", "v", "k", "h", "n", "m", "z", "r", "s", "g", "y"]
PAIR = [
    ("x", "y"), ("a", "b"), ("p", "q"), ("u", "v"), ("m", "n"), ("r", "s"),
    ("c", "d"), ("k", "\\ell"), ("g", "h"), ("w", "z"), ("s", "t"), ("e", "f"),
]
TRIPLE = [
    ("a", "b", "c"), ("p", "q", "r"), ("x", "y", "z"), ("u", "v", "w"),
    ("m", "n", "t"), ("c", "d", "e"), ("r", "s", "t"), ("g", "h", "k"),
]
QUAD = [
    ("a", "b", "c", "d"), ("p", "q", "r", "s"), ("u", "v", "w", "z"), ("m", "n", "p", "q"),
]


def letters_for_arity(arity: int, idx: int):
    if arity == 1:
        return (SINGLE[idx % len(SINGLE)],)
    if arity == 2:
        return PAIR[idx % len(PAIR)]
    if arity == 3:
        return TRIPLE[idx % len(TRIPLE)]
    return QUAD[idx % len(QUAD)]


LETTERS = "ABCDE"


def format_explanation(letter: str, truth: bool, body: str) -> str:
    verdict = "True" if truth else "False"
    return f"**{letter}.** → {verdict}\n\n{body.strip()}\n\nSo the statement is {verdict}."


def main() -> None:
    data, tasks, slots, replace, reasons = compute_replace_set()

    # Seed the global "already used" statement-text set from every statement
    # in the whole bank that is NOT being replaced, so new content can never
    # collide with something still standing (in 2.1-2.4 or in 2.5).
    global_stmt_texts: set[str] = set()
    for ti, t in enumerate(tasks):
        for si, s in enumerate(t["statements"]):
            if (ti, si) not in replace:
                global_stmt_texts.add(s)

    by_task: dict[int, list[int]] = defaultdict(list)
    for ti, si in replace:
        by_task[ti].append(si)

    global_usage: dict[str, int] = defaultdict(int)
    template_letter_idx: dict[str, int] = defaultdict(int)

    report_rows = []  # (case_id, title, subsection, letter, reason, old_stmt, new_stmt, old_truth, new_truth)

    for ti in sorted(by_task):
        t = tasks[ti]
        sub = t["subsection"]
        templates = TEMPLATES_BY_SUB[sub]
        si_list = sorted(by_task[ti])

        kept_skeletons = {
            skeleton(t["statements"][si])
            for si in range(len(t["statements"]))
            if si not in si_list
        }
        used_template_ids_this_task: set[str] = set()
        newly_assigned_skeletons: set[str] = set()

        for si in si_list:
            candidates = sorted(templates, key=lambda tp: (global_usage[tp.id], tp.id))
            chosen = None
            chosen_stmt = chosen_truth = chosen_body = None

            def try_template(tp, allow_over_cap=False):
                if tp.id in used_template_ids_this_task:
                    return None
                if not allow_over_cap and global_usage[tp.id] >= tp.cap:
                    return None
                base_idx = template_letter_idx[tp.id]
                pool_span = {1: len(SINGLE), 2: len(PAIR), 3: len(TRIPLE), 4: len(QUAD)}[tp.arity]
                for attempt in range(pool_span):
                    letters = letters_for_arity(tp.arity, base_idx + attempt)
                    stmt, truth, body = tp.make(letters)
                    sk = skeleton(stmt)
                    if sk in kept_skeletons or sk in newly_assigned_skeletons:
                        continue
                    if stmt in global_stmt_texts:
                        continue
                    return tp, stmt, truth, body, base_idx + attempt + 1
                return None

            for tp in candidates:
                result = try_template(tp)
                if result:
                    chosen, chosen_stmt, chosen_truth, chosen_body, next_idx = result
                    template_letter_idx[chosen.id] = next_idx
                    break

            if chosen is None:
                for tp in candidates:
                    result = try_template(tp, allow_over_cap=True)
                    if result:
                        chosen, chosen_stmt, chosen_truth, chosen_body, next_idx = result
                        template_letter_idx[chosen.id] = next_idx
                        break

            if chosen is None:
                raise RuntimeError(
                    f"No template available for {t['case_id']} slot {LETTERS[si]}"
                )

            letter_ch = LETTERS[si]
            old_stmt = t["statements"][si]
            old_truth = bool(t["answer_key"][si])

            t["statements"][si] = chosen_stmt
            t["answer_key"][si] = chosen_truth
            t["tactical_explanations"][si] = format_explanation(letter_ch, chosen_truth, chosen_body)

            used_template_ids_this_task.add(chosen.id)
            newly_assigned_skeletons.add(skeleton(chosen_stmt))
            global_usage[chosen.id] += 1
            global_stmt_texts.add(chosen_stmt)

            report_rows.append(
                {
                    "case_id": t["case_id"],
                    "title": t["title"],
                    "subsection": sub,
                    "letter": letter_ch,
                    "reason": reasons[(ti, si)],
                    "template": chosen.id,
                    "old_stmt": old_stmt,
                    "new_stmt": chosen_stmt,
                    "old_truth": old_truth,
                    "new_truth": chosen_truth,
                }
            )

    JSON_PATH.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")

    write_report(report_rows, tasks, replace)
    print(f"Replaced {len(report_rows)} statements across {len({r['case_id'] for r in report_rows})} tasks.")
    print(f"Report written to {REPORT_PATH}")


def write_report(report_rows, tasks, replace) -> None:
    from collections import Counter

    touched_tasks = sorted({r["case_id"] for r in report_rows})
    by_sub = Counter(r["subsection"] for r in report_rows)
    by_reason = Counter(r["reason"].split("(")[0] for r in report_rows)
    by_template = Counter(r["template"] for r in report_rows)

    lines = []
    lines.append("=" * 78)
    lines.append("CHAPTER 2 (2.1-2.4) REPAIR REPORT")
    lines.append("=" * 78)
    lines.append("")
    lines.append(f"Total statements replaced: {len(report_rows)}")
    lines.append(f"Total tasks touched:       {len(touched_tasks)}")
    lines.append("")
    lines.append("By subsection:")
    for sub in ("2.1", "2.2", "2.3", "2.4"):
        lines.append(f"  {sub}: {by_sub.get(sub, 0)} statements replaced")
    lines.append("")
    lines.append("By original violation reason:")
    for reason, cnt in by_reason.most_common():
        lines.append(f"  {reason:24s} {cnt}")
    lines.append("")
    lines.append("By replacement template used (id: count):")
    for tid, cnt in by_template.most_common():
        lines.append(f"  {tid:36s} {cnt}")
    lines.append("")
    lines.append("=" * 78)
    lines.append("TASKS TOUCHED")
    lines.append("=" * 78)

    rows_by_task = defaultdict(list)
    for r in report_rows:
        rows_by_task[r["case_id"]].append(r)

    for case_id in sorted(rows_by_task, key=lambda c: (c.split()[1])):
        rows = rows_by_task[case_id]
        title = rows[0]["title"]
        sub = rows[0]["subsection"]
        lines.append("")
        lines.append(f"{case_id}  [{sub}]  {title}  ({len(rows)} statement(s) replaced)")
        for r in sorted(rows, key=lambda x: x["letter"]):
            lines.append(
                f"  [{r['letter']}] reason={r['reason']}  template={r['template']}  "
                f"{r['old_truth']} -> {r['new_truth']}"
            )
            lines.append(f"      OLD: {r['old_stmt']}")
            lines.append(f"      NEW: {r['new_stmt']}")

    REPORT_PATH.write_text("\n".join(lines) + "\n")


if __name__ == "__main__":
    main()
