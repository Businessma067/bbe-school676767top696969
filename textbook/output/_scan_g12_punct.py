# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(p.read_text(encoding="utf-8-sig"))
print("tasks", len(data["tasks"]))
print("items", sum(len(t["statements"]) for t in data["tasks"]))

BACKREF = re.compile(r"(?<!\\)\\[0-9]")

for ti, task in enumerate(data["tasks"]):
    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/{chr(65+ei)}"
        stmt = task["statements"][ei]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        claim = m.group(2) if m else None
        if claim != stmt:
            print("CLAIM_MISMATCH", loc)
            print("  stmt :", repr(stmt))
            print("  claim:", repr(claim))
        if claim and claim.endswith(".."):
            print("DBL_DOT", loc, repr(claim[-40:]))
        if claim and re.search(r'[.?!]["\u201d]\.$', claim):
            print("DBL_AFTER_QUOTE", loc, repr(claim[-40:]))
        if BACKREF.search(expl):
            print("BACKREF", loc)
        if "\ufffd" in expl:
            print("FFFD", loc)
        # tip form pairs without arrow
        for tip in re.finditer(r"(?im)^\*\*Tip:\*\* (.+)$", expl):
            tip_body = tip.group(1)
            if "\u2192" not in tip_body and re.search(
                r"(?i)(decide|stop|avoid|refuse|consider|enjoy|promise|because|despite|although|owing|noun|clause|-ing|\bto\b)",
                tip_body,
            ):
                if re.search(r"(/|,|;|\bvs\b|\bversus\b|\bnot\b|\bbefore\b|\bafter\b)", tip_body):
                    print("TIP_NO_ARROW", loc, tip_body[:160])
        # form charts with hyphen that should be arrow
        for mm in re.finditer(
            r"(?i)\b(noun|clause|finite|despite|although|because(?: of)?|owing(?: to)?|in spite of)\s*[-–]\s*(noun|clause|finite|of|to)",
            expl,
        ):
            print("HYPHEN_FORM", loc, mm.group(0))
        # already has arrow?
        if "\u2192" in expl:
            print("HAS_ARROW", loc)
        # patterns like Delete X and write "Y" or switch to "Z"
        for mm in re.finditer(
            r'(?i)(delete|drop|remove|insert|restore|repair|rewrite|rebuild|switch|change|convert|prefer)\b[^.!?\n]{0,100}?"[^"]{4,}"',
            expl,
        ):
            chunk = mm.group(0).replace("\n", " ")
            if "\u2192" not in chunk and re.search(r'(?i)(write|to |as |or )', chunk):
                print("TRANSFORM_CAND", loc, chunk[:180])

    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if BACKREF.search(stmt):
            print("BACKREF_S", loc)
        if "\ufffd" in stmt:
            print("FFFD_S", loc)
        if "->" in stmt and "\u2192" not in stmt:
            print("ASCII_ARROW_S", loc, stmt)
        if re.search(r"\s[,;:]\s*[,.;:]", stmt):
            print("DBL_PUNCT_S", loc, stmt)
