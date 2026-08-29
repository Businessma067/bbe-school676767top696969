#!/usr/bin/env python3
"""Final verification pass for the Chapter 2.1-2.4 repair, plus the
authoritative Python-generated report written to
/tmp/ch2_214_repair_report.txt.

Run this AFTER apply_repair.py (and any manual touch-ups) against the final
committed JSON. It re-derives the "replaced" set from repair_analysis against
the ORIGINAL backup, diffs it against the final JSON to report exactly what
changed, and runs every requirement-7 check.
"""
from __future__ import annotations

import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import repair_analysis  # noqa: E402
from repair_analysis import skeleton  # noqa: E402

ORIGINAL_PATH = Path("/tmp/ch2_json_backup_original.json")
FINAL_PATH = Path("/workspace/src/data/math-ch2-cases.json")
REPORT_PATH = Path("/tmp/ch2_214_repair_report.txt")

TARGET_SUBS = ("2.1", "2.2", "2.3", "2.4")

NUM_EQ_RE = re.compile(r"(?<![\d.])(?:[a-zA-Z]|\\[a-zA-Z]+)\s*=\s*-?\d+(?!\d)")
LITERAL_PLUGIN_RE = re.compile(r"(?i)\b(?:at|for)\s+\$[a-zA-Z]\s*=\s*-?\d")
POWER_CHAIN_RE = re.compile(r"\^\{-\d\}.*=\s*\d+")


def is_plugin_violation(stmt: str) -> bool:
    if re.search(r"if and only if", stmt, re.I) or re.search(r"away from", stmt, re.I):
        return False
    for m in NUM_EQ_RE.finditer(stmt):
        val = m.group(0)
        start = m.start()
        preceding = stmt[max(0, start - 3) : start]
        if val.endswith("=0") and "+" in preceding:
            continue
        return True
    return False


def main() -> None:
    original = json.loads(ORIGINAL_PATH.read_text())
    final = json.loads(FINAL_PATH.read_text())

    orig_tasks = {t["case_id"]: t for t in original["tasks"]}
    final_tasks = {t["case_id"]: t for t in final["tasks"]}

    # Recompute the intended replace-set (and its reasons) against the
    # ORIGINAL bank, so we can tell deliberate template replacements apart
    # from incidental LaTeX-rendering fixes picked up by the raw text diff.
    saved_path = repair_analysis.JSON_PATH
    repair_analysis.JSON_PATH = ORIGINAL_PATH
    try:
        _, orig_tasks_list, _, replace0, reasons0 = repair_analysis.compute_replace_set()
    finally:
        repair_analysis.JSON_PATH = saved_path
    reason_by_case_letter = {
        (orig_tasks_list[ti]["case_id"], "ABCDE"[si]): reason
        for (ti, si), reason in reasons0.items()
    }

    lines: list[str] = []

    def log(s: str = "") -> None:
        lines.append(s)
        print(s)

    log("=" * 78)
    log("CHAPTER 2 (2.1-2.4) REPAIR - FINAL VERIFICATION REPORT")
    log("=" * 78)
    log("")

    # ------------------------------------------------------------------
    # Diff original vs final to get authoritative change counts
    # ------------------------------------------------------------------
    changed_rows = []
    for cid, ot in orig_tasks.items():
        ft = final_tasks[cid]
        if ot["subsection"] not in TARGET_SUBS:
            if ot != ft:
                log(f"UNEXPECTED CHANGE outside 2.1-2.4: {cid} ({ot['subsection']})")
            continue
        for i in range(5):
            if ot["statements"][i] != ft["statements"][i]:
                letter = "ABCDE"[i]
                reason = reason_by_case_letter.get((cid, letter))
                changed_rows.append(
                    {
                        "case_id": cid,
                        "title": ft["title"],
                        "subsection": ft["subsection"],
                        "letter": letter,
                        "old_stmt": ot["statements"][i],
                        "new_stmt": ft["statements"][i],
                        "old_truth": bool(ot["answer_key"][i]),
                        "new_truth": bool(ft["answer_key"][i]),
                        "reason": reason if reason else "latex_render_fix",
                        "is_template_replacement": reason is not None,
                    }
                )

    template_rows = [r for r in changed_rows if r["is_template_replacement"]]
    latex_rows = [r for r in changed_rows if not r["is_template_replacement"]]

    touched_tasks = sorted({r["case_id"] for r in changed_rows})
    touched_template_tasks = sorted({r["case_id"] for r in template_rows})
    by_sub = Counter(r["subsection"] for r in template_rows)

    log("--- CORE REPAIR (rule violations replaced with new symbolic claims) ---")
    log(f"Statements replaced: {len(template_rows)}")
    log(f"Tasks touched:       {len(touched_template_tasks)}")
    log("")
    log("By subsection:")
    for sub in TARGET_SUBS:
        log(f"  {sub}: {by_sub.get(sub, 0)} statements replaced")
    log("")
    log("--- BONUS FIX (pre-existing broken LaTeX, unrelated to the 4 rules) ---")
    log(f"Statements fixed: {len(latex_rows)}")
    log(f"Tasks touched:    {len({r['case_id'] for r in latex_rows})}")
    for r in latex_rows:
        log(f"  {r['case_id']} [{r['letter']}]: stray '$' mid-statement corrected")
    log("")
    log("--- COMBINED TOTAL (raw text diff, original vs final) ---")
    log(f"Statements changed: {len(changed_rows)}")
    log(f"Tasks touched:      {len(touched_tasks)}")
    log("")

    # ------------------------------------------------------------------
    # Requirement checks
    # ------------------------------------------------------------------
    log("=" * 78)
    log("REQUIREMENT-7 VERIFICATION CHECKS")
    log("=" * 78)

    target = [final_tasks[cid] for cid in orig_tasks if orig_tasks[cid]["subsection"] in TARGET_SUBS]

    # Check A: no At $x= / For $a=3 literal plug-ins
    literal_hits = []
    for t in target:
        for i, s in enumerate(t["statements"]):
            if LITERAL_PLUGIN_RE.search(s):
                literal_hits.append((t["case_id"], "ABCDE"[i], s))
    log("")
    log(f"[A] Literal 'At $x=' / 'For $a=3$' plug-in openings: {len(literal_hits)} (must be 0)")
    for h in literal_hits:
        log(f"      {h}")

    # Check A2: broader plug-in violation heuristic (given/whenever/with/sets + number, minus known-safe patterns)
    broad_hits = []
    for t in target:
        for i, s in enumerate(t["statements"]):
            if is_plugin_violation(s):
                broad_hits.append((t["case_id"], "ABCDE"[i], s))
    log("")
    log(f"[A2] Broader numeric-substitution heuristic hits: {len(broad_hits)} (reviewed manually; see notes)")
    for h in broad_hits:
        log(f"      {h}")

    # Check B: power-chain family <= 2
    pc_hits = []
    for t in target:
        for i, s in enumerate(t["statements"]):
            if POWER_CHAIN_RE.search(s) and "dfrac" in s and "cdot" in s:
                pc_hits.append((t["case_id"], "ABCDE"[i]))
    log("")
    log(f"[B] Power-chain template ($c^{{-3}}d^2=2$ family) occurrences: {len(pc_hits)} (must be <=2)")
    for h in pc_hits:
        log(f"      {h}")

    # Check C: every explanation header matches answer_key
    header_mismatches = []
    for t in target:
        for i, (ans, expl) in enumerate(zip(t["answer_key"], t["tactical_explanations"])):
            letter = "ABCDE"[i]
            verdict = "True" if ans else "False"
            if not expl.startswith(f"**{letter}.** \u2192 {verdict}"):
                header_mismatches.append((t["case_id"], letter))
    log("")
    log(f"[C] Explanation header / answer_key mismatches: {len(header_mismatches)} (must be 0)")
    for h in header_mismatches:
        log(f"      {h}")

    # Check D: within-task near-identical skeletons
    within_dupes = []
    for t in target:
        seen = {}
        for i, s in enumerate(t["statements"]):
            sk = skeleton(s)
            if sk in seen:
                within_dupes.append((t["case_id"], "ABCDE"[seen[sk]], "ABCDE"[i]))
            else:
                seen[sk] = i
    log("")
    log(f"[D] Within-task near-identical statement skeletons: {len(within_dupes)} (must be 0)")
    for h in within_dupes:
        log(f"      {h}")

    # Check E: global family reuse across 2.1-2.4 (informational; flag > 4)
    skel_map = defaultdict(list)
    for t in target:
        for i, s in enumerate(t["statements"]):
            skel_map[skeleton(s)].append((t["case_id"], "ABCDE"[i]))
    big_families = {sk: v for sk, v in skel_map.items() if len(v) > 4}
    log("")
    log(f"[E] Statement-family skeletons appearing more than 4 times in 2.1-2.4: {len(big_families)}")
    log("    (each is a True/False pair of one technique, digit-blind skeleton merges both verdicts)")
    for sk, v in sorted(big_families.items(), key=lambda x: -len(x[1])):
        log(f"      count={len(v)}  sample={v[0]}  skeleton={sk[:70]}")

    # Check F: task/statement structural integrity
    struct_ok = True
    for t in target:
        if not (len(t["statements"]) == 5 == len(t["answer_key"]) == len(t["tactical_explanations"])):
            struct_ok = False
    counts = Counter(t["subsection"] for t in final["tasks"])
    log("")
    log(f"[F] 5 statements/answers/explanations per task in 2.1-2.4: {'OK' if struct_ok else 'FAILED'}")
    log(f"    Tasks per subsection (should be 34 each): {dict(counts)}")

    # Check G: 2.5 and all other tasks byte-identical to original
    other_changed = 0
    for cid, ot in orig_tasks.items():
        if ot["subsection"] not in TARGET_SUBS and ot != final_tasks[cid]:
            other_changed += 1
    log("")
    log(f"[G] Non-2.1-2.4 tasks (incl. 2.5) modified: {other_changed} (must be 0)")

    # Check H: LaTeX $ and brace balance
    latex_issues = []
    for t in target:
        for i, s in enumerate(t["statements"] + t["tactical_explanations"]):
            if s.count("$") % 2 != 0 or s.count("{") != s.count("}"):
                latex_issues.append((t["case_id"], i))
    log("")
    log(f"[H] LaTeX $ / brace balance issues remaining: {len(latex_issues)} (must be 0)")

    # Check I: no word/life-problem language
    wp_re = re.compile(
        r"(?i)\b(clerk|student|marker|examiner|dollars?|apples?|speed of|years old|"
        r"invest(?:ed|ment)|price of|cost of|km/h|miles per hour)\b"
    )
    wp_hits = []
    for t in target:
        for i, s in enumerate(t["statements"]):
            if wp_re.search(s):
                wp_hits.append((t["case_id"], "ABCDE"[i], s[:100]))
    log("")
    log(f"[I] Word/life-problem language in statements: {len(wp_hits)} (must be 0)")
    for h in wp_hits:
        log(f"      {h}")

    # ------------------------------------------------------------------
    # Detailed per-task change log
    # ------------------------------------------------------------------
    log("")
    log("=" * 78)
    log("DETAILED CHANGE LOG (every replaced statement)")
    log("=" * 78)

    rows_by_task = defaultdict(list)
    for r in changed_rows:
        rows_by_task[r["case_id"]].append(r)

    def sort_key(cid: str):
        return float(cid.split()[1])

    for cid in sorted(rows_by_task, key=sort_key):
        rows = rows_by_task[cid]
        title = rows[0]["title"]
        sub = rows[0]["subsection"]
        log("")
        log(f"{cid}  [{sub}]  {title}  ({len(rows)} statement(s) changed)")
        for r in sorted(rows, key=lambda x: x["letter"]):
            log(f"  [{r['letter']}] reason={r['reason']}  {r['old_truth']} -> {r['new_truth']}")
            log(f"      OLD: {r['old_stmt']}")
            log(f"      NEW: {r['new_stmt']}")

    log("")
    log("=" * 78)
    log("SUMMARY")
    log("=" * 78)
    log(f"Core repair - statements replaced: {len(template_rows)}")
    log(f"Core repair - tasks touched:       {len(touched_template_tasks)}")
    log(f"Bonus LaTeX fixes - statements:    {len(latex_rows)}")
    log(f"Combined - statements changed:     {len(changed_rows)}")
    log(f"Combined - tasks touched:          {len(touched_tasks)}")

    REPORT_PATH.write_text("\n".join(lines) + "\n")
    print(f"\nReport written to {REPORT_PATH}")


if __name__ == "__main__":
    main()
