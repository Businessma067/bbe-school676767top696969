# -*- coding: utf-8 -*-
"""Stricter punct/symbol audit for statements + explanations."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

PARTS = Path(__file__).resolve().parents[2] / "src" / "data" / "english" / "grammar_parts"
OUT = Path(__file__).with_name("_punct_symbol_audit2.txt")

rows: list[str] = []


def note(kind: str, loc: str, snip: str) -> None:
    rows.append(f"{kind}\t{loc}\t{snip.replace(chr(10), ' / ')[:220]}")


for i in range(1, 21):
    data = json.loads((PARTS / f"g.{i}.json").read_text(encoding="utf-8-sig"))
    for ti, task in enumerate(data["tasks"]):
        for si, stmt in enumerate(task["statements"]):
            loc = f"g.{i}#t{ti+1}/S{chr(65+si)}"
            if "\\1" in stmt or re.search(r"\\[0-9]", stmt):
                note("BACKREF", loc, stmt)
            if "\ufffd" in stmt:
                note("FFFD", loc, stmt)
            # Direct reported-speech style missing arrow between quotes
            if re.search(r'(?i)Direct:\s*"[^"]+"\s+"[^"]+"', stmt) and "→" not in stmt and "->" not in stmt:
                note("STMT_MISSING_ARROW", loc, stmt)
            if re.search(r'\."\.\s*$', stmt):
                note("STMT_DBL_END", loc, stmt[-40:])
            if re.search(r"(?i)\b(to|into|as)\s+\.\s+", stmt):
                note("STMT_TO_DOT", loc, stmt)

        for ei, expl in enumerate(task["tactical_explanations"]):
            loc = f"g.{i}#t{ti+1}/E{chr(65+ei)}"
            if re.search(r"\\[0-9]", expl):
                m = re.search(r".{0,40}\\[0-9].{0,50}", expl)
                note("BACKREF", loc, m.group(0) if m else expl[:80])
            if "\ufffd" in expl:
                note("FFFD", loc, expl)
            # claim header ends with .".**
            m = re.match(r"^(\*\*[A-E]\).+?\*\*)", expl.strip(), re.S)
            if m and re.search(r'\."\.\*\*$', m.group(1).replace("\n", " ")):
                note("CLAIM_DBL_PERIOD", loc, m.group(1)[-80:])
            elif re.search(r'\."\.\*\*', expl[:220]):
                note("CLAIM_DBL_PERIOD", loc, expl[:160].replace("\n", " / "))
            # unpack/paraphrase/become without quotes for the example sentence
            if re.search(r"(?i)unpacks?\s+(?:fairly\s+)?into\s+(?![\"""])", expl):
                note("UNPACK_UNQUOTED", loc, re.search(r"(?i).{0,20}unpacks?.{0,90}", expl).group(0))
            if re.search(r"(?i)\bbecomes\s+(?:The|A|An)\s+[A-Z]", expl) and not re.search(
                r'(?i)\bbecomes\s+[\"“]', expl
            ):
                # only flag if short active→passive transform context
                if re.search(r"(?i)(passive|subject|agent|object)", expl):
                    note("BECOMES_UNQUOTED", loc, re.search(r"(?i).{0,15}becomes .{0,70}", expl).group(0))
            if re.search(r"(?i)paraphrases?\s+(?:cleanly\s+)?as\s+(?![\"""])[A-Z]", expl):
                note("PARAPHRASE_UNQUOTED", loc, re.search(r"(?i).{0,15}paraphrases?.{0,80}", expl).group(0))
            # double periods like If the rules were not enforced..
            if re.search(r'[a-zA-Z]"?\.\.(?!\.)', expl):
                note("DBL_PERIOD", loc, re.search(r".{0,40}\.\..{0,20}", expl).group(0))
            # Tip line using ASCII hyphen where arrow belongs between forms
            for tip in re.finditer(r"(?im)^(?:\*\*)?Tip:?\*\*?\s*(.+)$", expl):
                body = tip.group(1)
                if re.search(r"(?i)(decide|stop|avoid|refuse|promise|consider).{0,30}\s-\s+(to|-ing|gerund|infinitive)", body) and "→" not in body:
                    note("TIP_HYPHEN_NOT_ARROW", loc, body[:140])

counts = Counter(r.split("\t", 1)[0] for r in rows)
OUT.write_text("\n".join(rows) + f"\n\nTOTAL {len(rows)}\nCOUNTS {dict(counts)}\n", encoding="utf-8")
print(dict(counts))
print("TOTAL", len(rows))
for r in rows[:35]:
    print(r[:200])
