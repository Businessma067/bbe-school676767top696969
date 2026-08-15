# -*- coding: utf-8 -*-
"""Strict ban audit for g.12 — Format notes only."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

path = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(path.read_text(encoding="utf-8-sig"))
rows: list[tuple[str, str, str]] = []


def note(kind: str, loc: str, snippet: str) -> None:
    rows.append((kind, loc, snippet.replace("\n", " / ")[:220]))


BACKREF = re.compile(r"(?<!\\)\\[0-9]")

for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt:
            note("FFFD", loc, stmt)
        if BACKREF.search(stmt):
            note("BACKREF", loc, stmt)
        if re.search(r"(?<!\.)\.\.(?!\.)", stmt) and "…" not in stmt:
            note("DBL_PERIOD", loc, stmt)
        if "Direct" in stmt or "Reported" in stmt:
            if "→" not in stmt and "->" not in stmt:
                note("STMT_NO_ARROW", loc, stmt)

    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/{chr(65+ei)}"
        stmt = task["statements"][ei]
        header = expl.split("\n", 1)[0]
        if re.search(r"[.?!][\"'”’]?\.\*\*", header):
            note("DBL_CLAIM", loc, header)
        m = re.match(r"\*\*[A-E]\) (.*)\*\*", header)
        if m:
            claim = m.group(1)
            c = re.sub(r"[.?!]+$", "", claim)
            s = re.sub(r"[.?!]+$", "", stmt)
            if c != s:
                note("CLAIM_NEQ", loc, f"{c[:60]} || {s[:60]}")
        if "\ufffd" in expl:
            note("FFFD", loc, "fffd")
        if BACKREF.search(expl):
            mm = BACKREF.search(expl)
            note("BACKREF", loc, expl[mm.start() - 20 : mm.end() + 20])
        for tip in re.finditer(r"(?im)^\*\*Tip:\*\*\s*(.+)$", expl):
            body = tip.group(1)
            if (
                re.search(
                    r"(?i)\b(decide|stop|avoid|refuse|consider|enjoy|promise)\b.{0,40}\b(to|_ing|-ing|gerund|infinitive)\b",
                    body,
                )
                and "→" not in body
            ):
                note("TIP_NO_ARROW", loc, body)
        for mm in re.finditer(
            r"(?i)\b(unpacks?(?:\s+fairly)?\s+into|becomes|paraphrases?\s+as)\s+[A-Z]",
            expl,
        ):
            window = expl[mm.start() : mm.end() + 60]
            after = expl[mm.end() : mm.end() + 20]
            if mm.group(1).lower().startswith("become") and re.match(
                r"\s+(a|an|the|more|less|available|legal)\b", after, re.I
            ):
                continue
            if "→" not in window and not re.search(
                r'^[\"“]', expl[mm.end() : mm.end() + 1] or " "
            ):
                note("BAD_XFORM", loc, window)
        if re.search(r"\s--\s|\s---\s", expl):
            note("ASCII_DASH", loc, "found --")
        if re.search(r'(?:fails|hold|doesn.t hold|line fails)\s+-\s+"', expl):
            note("HYPHEN_DASH", loc, "hyphen before quote")
        for frag in ["â€™", "â€", "Ã", "Â", "\uFFFD"]:
            if frag in expl or frag in stmt:
                note("MOJIBAKE", loc, frag)
        # Tip with = that should be → for form gloss
        for tip in re.finditer(r"(?im)^\*\*Tip:\*\*\s*(.+)$", expl):
            body = tip.group(1)
            if " = " in body and "→" not in body:
                note("TIP_EQ", loc, body)
        # closing hyphen dash before repair quote (should be —)
        if re.search(r'(?:doesn.t hold|fails|fall short|collapses)\s+-\s+"', expl):
            note("CLOSE_HYPHEN", loc, "close hyphen")

print("BANS", len(rows))
print(dict(Counter(k for k, _, _ in rows)))
for k, loc, s in rows:
    print(f"{k}\t{loc}\t{s}")
assert len(data["tasks"]) == 20
print(
    "tasks=20 stmts=%d expls=%d keys=%d"
    % (
        sum(len(t["statements"]) for t in data["tasks"]),
        sum(len(t["tactical_explanations"]) for t in data["tasks"]),
        sum(len(t["answer_key"]) for t in data["tasks"]),
    )
)
print("JSON OK")
