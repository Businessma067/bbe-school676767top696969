# -*- coding: utf-8 -*-
"""Structural semantic checks: answer_key vs closing true/false polarity."""
from __future__ import annotations

import json
import re
from pathlib import Path

PARTS = Path(__file__).resolve().parents[2] / "src" / "data" / "english" / "grammar_parts"
OUT = Path(__file__).with_name("_semantic_struct_audit.txt")

rows: list[str] = []


def closing_verdict(expl: str) -> str | None:
    last = re.split(r"\n\n+", expl.strip())[-1]
    # prefer bold tokens
    falses = len(re.findall(r"(?i)\*\*false\*\*", last))
    trues = len(re.findall(r"(?i)\*\*true\*\*", last))
    if falses and not trues:
        return "false"
    if trues and not falses:
        return "true"
    if falses and trues:
        # true version + is false is common on false items
        if re.search(r"(?i)\bis\s+\*\*false\*\*", last) or re.search(
            r"(?i)\bthis\s+is\s+\*\*false\*\*", last
        ):
            return "false"
        if re.search(r"(?i)\bis\s+\*\*true\*\*", last):
            return "true"
        return "ambiguous"
    # unbolded fallback
    if re.search(r"(?i)\bis false\b", last):
        return "false"
    if re.search(r"(?i)\bis true\b", last):
        return "true"
    return None


for i in range(1, 21):
    data = json.loads((PARTS / f"g.{i}.json").read_text(encoding="utf-8-sig"))
    for ti, task in enumerate(data["tasks"]):
        stmts = task["statements"]
        keys = task["answer_key"]
        expls = task["tactical_explanations"]
        if not (len(stmts) == len(keys) == len(expls) == 5):
            rows.append(f"LEN_MISMATCH\tg.{i}#t{ti+1}\t{len(stmts)}/{len(keys)}/{len(expls)}")
            continue
        for ei in range(5):
            letter = chr(65 + ei)
            loc = f"g.{i}#t{ti+1}/{letter}"
            key = bool(keys[ei])
            expl = expls[ei]
            # claim must contain statement text (normalized)
            claim = expl.strip().split("\n\n", 1)[0]
            stmt = stmts[ei].strip()
            # strip **A) ** and trailing **
            claim_body = re.sub(r"^\*\*[A-E]\)\s*", "", claim)
            claim_body = re.sub(r"\*\*\s*$", "", claim_body).strip()
            # allow missing final period differences
            def norm(s: str) -> str:
                return re.sub(r"\s+", " ", s).strip().rstrip(".")

            if norm(claim_body) != norm(stmt) and norm(stmt) not in norm(claim_body):
                rows.append(f"CLAIM_MISMATCH\t{loc}\tclaim≠statement")
            verdict = closing_verdict(expl)
            if verdict is None:
                rows.append(f"NO_VERDICT\t{loc}\tkey={key}")
            elif verdict == "ambiguous":
                rows.append(f"AMBIG_VERDICT\t{loc}\tkey={key}")
            elif (verdict == "true") != key:
                rows.append(f"POLARITY\t{loc}\tkey={'TRUE' if key else 'FALSE'} close={verdict}")

text = "\n".join(rows) + f"\n\nTOTAL {len(rows)}\n"
OUT.write_text(text, encoding="utf-8")
from collections import Counter

c = Counter(r.split("\t", 1)[0] for r in rows)
print(dict(c))
print("TOTAL", len(rows))
print("Wrote", OUT)
for r in rows[:40]:
    print(r[:200])
