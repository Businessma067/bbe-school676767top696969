# -*- coding: utf-8 -*-
"""Deep semantic audit helper for g.12."""
from __future__ import annotations

import json
import re
from pathlib import Path

path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(path.read_text(encoding="utf-8-sig"))

issues: list[tuple[str, str, str]] = []


def note(kind: str, loc: str, snip: str = "") -> None:
    issues.append((kind, loc, snip.replace("\n", " / ")[:240]))


QUOTE_RE = re.compile(r"[\"“]([^\"”]+)[\"”]")

for ti, task in enumerate(data["tasks"], 1):
    keys = task["answer_key"]
    stmts = task["statements"]
    expls = task["tactical_explanations"]
    overview = task.get("solution_overview", "")
    ans_line = ""
    m_ans = re.search(r"\*\*Answer\.\*\*\s*(.+)$", overview)
    if m_ans:
        ans_line = m_ans.group(1)
        expected = []
        for lab, val in re.findall(r"([A-E])=(TRUE|FALSE)", ans_line):
            expected.append(val == "TRUE")
        if expected != keys:
            note("OVERVIEW_KEY_MISMATCH", f"T{ti}", f"{expected} vs {keys}")

    for ei, (stmt, key, expl) in enumerate(zip(stmts, keys, expls)):
        loc = f"T{ti}/{chr(65 + ei)}"
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        if not m:
            note("NO_CLAIM", loc)
            continue
        letter, claim = m.group(1), m.group(2)
        if letter != chr(65 + ei):
            note("LETTER", loc, letter)
        if claim != stmt:
            note("CLAIM_NE", loc, f"{claim!r} || {stmt!r}")

        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        body = "\n\n".join(parts[1:-1]) if len(parts) > 2 else ""

        trues = re.findall(r"\*\*true\*\*", closing, re.I)
        falses = re.findall(r"\*\*false\*\*", closing, re.I)
        true_version = bool(re.search(r"the \*\*true\*\* version", closing, re.I))

        if key is True:
            if not trues:
                note("TRUE_NO_BOLD_CLOSE", loc, closing)
            if falses:
                note("TRUE_CLOSE_HAS_FALSE", loc, closing)
        else:
            if not falses:
                note("FALSE_NO_BOLD_CLOSE", loc, closing)
            if trues and not true_version and not falses:
                note("FALSE_CLOSE_TRUE_ONLY", loc, closing)
            # mid-body bold true that isn't 'true version'
            for bt in re.finditer(r".{0,40}\*\*true\*\*.{0,40}", body, re.I):
                chunk = bt.group(0)
                if "true** version" not in chunk.lower() and "the **true** version" not in chunk.lower():
                    note("FALSE_BODY_TRUE_BOLD", loc, chunk)

            qs = QUOTE_RE.findall(closing)
            if not qs:
                note("FALSE_NO_QUOTE", loc, closing)
            else:
                for q in qs:
                    # fragment repair ending with comma, too short
                    if q.rstrip().endswith(",") and len(q.split()) < 8:
                        note("PARTIAL_REPAIR", loc, q)
                    # repair that still contains the exact error phrase un-fixed
                    # (heuristic later)

        # stamp / imperative closings
        if re.search(
            r"(?i)so the statement (holds|is false)|Keep this|Accept the line|Mark it wrong|Reject this|Call it wrong|Strike ",
            closing,
        ):
            note("STAMP_CLOSE", loc, closing)
        if re.search(r"(?i)\b(write |repair to |mark \*\*false\*\*)", closing):
            note("IMPERATIVE_CLOSE", loc, closing)

        for tip in re.finditer(r"(?im)^\*\*(Tip|Trap):\*\* (.+)$", expl):
            if re.search(r"(?i)mark \*\*false\*\*|Accept the line|Reject this|Keep this", tip.group(2)):
                note("TIP_COACH", loc, tip.group(2))

        # closing repeating **false** awkwardly
        if len(falses) >= 2:
            note("DOUBLE_FALSE_CLOSE", loc, closing)

print("ISSUES", len(issues))
from collections import Counter

print(Counter(k for k, _, _ in issues))
for k, loc, s in issues:
    print(f"{k}\t{loc}\t{s}")

# Dump every false item repair for manual semantic check
print("\n==== FALSE REPAIRS ====")
for ti, task in enumerate(data["tasks"], 1):
    for ei, (stmt, key, expl) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        if key is True:
            continue
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        qs = QUOTE_RE.findall(closing)
        print(f"T{ti}/{chr(65+ei)}")
        print("  STMT:", stmt)
        print("  REPAIR:", qs)
        print("  CLOSE:", closing)
        print()
