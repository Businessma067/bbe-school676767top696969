# -*- coding: utf-8 -*-
"""Verify g.17 bans against punct/symbol audit rules."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
path = ROOT / "src" / "data" / "english" / "grammar_parts" / "g.17.json"
data = json.loads(path.read_text(encoding="utf-8-sig"))

BACKREF = re.compile(r"(?<!\\)\\[0-9]")
UNPACK = re.compile(r"(?i)unpacks?\s+(fairly\s+)?into\s+")
INTO_THE = re.compile(r"(?i)\binto\s+The\s+[A-Z]")
NO_APOS = re.compile(
    r"(?i)\b(doesnt|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|"
    r"wouldnt|couldnt|shouldnt|didnt|mustnt|neednt)\b"
)
VERB_DOT = re.compile(
    r"(?i)\b(maps?|equals?|becomes?|reads?|rewrites?|paraphrases?)\s+\.\s+"
)
INTO_DOT = re.compile(r"(?i)\b(into|as|to)\s+\.\s+[A-Z\"“]")
PARA_GAP = re.compile(
    r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]'
)

rows = []

def note(kind, loc, snip):
    rows.append(f"{kind}\t{loc}\t{snip.replace(chr(10),' / ')[:240]}")

for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task.get("statements", [])):
        loc = f"task{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt:
            note("FFFD", loc, stmt)
        if BACKREF.search(stmt):
            note("BACKREF", loc, stmt)
        if re.search(r"\s[,;:]\s*[,.;:]", stmt):
            note("DBL_PUNCT", loc, stmt)
        if stmt.strip() and stmt.strip()[-1] not in '.?!"\')':
            note("NO_END_PUNCT", loc, stmt[-60:])

    for ei, expl in enumerate(task.get("tactical_explanations", [])):
        loc = f"task{ti+1}/{chr(65+ei)}"
        stmt = task["statements"][ei]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        if not m:
            note("NO_CLAIM", loc, expl[:80])
        else:
            claim = m.group(2)
            if claim != stmt:
                note("CLAIM_NE_STMT", loc, f"C={claim!r} S={stmt!r}"[:200])
            if re.search(r'[.!?]"?\.\s*$', claim) or claim.endswith(".."):
                note("DBL_CLAIM_PERIOD", loc, claim[-60:])
        if "\ufffd" in expl:
            note("FFFD", loc, expl)
        if BACKREF.search(expl):
            note("BACKREF", loc, BACKREF.search(expl).group(0))
        if UNPACK.search(expl):
            note("UNPACK", loc, UNPACK.search(expl).group(0))
            if "→" not in expl and "->" not in expl:
                note("UNPACK_NO_ARROW", loc, "")
        if INTO_THE.search(expl):
            mm = INTO_THE.search(expl)
            note("INTO_THE_UNQUOTED", loc, expl[mm.start() - 20 : mm.end() + 50])
        if VERB_DOT.search(expl):
            mm = VERB_DOT.search(expl)
            note("VERB_DOT", loc, expl[mm.start() - 10 : mm.end() + 40])
        if INTO_DOT.search(expl):
            mm = INTO_DOT.search(expl)
            note("INTO_DOT", loc, expl[mm.start() - 10 : mm.end() + 30])
        if NO_APOS.search(expl):
            note("NO_APOS", loc, NO_APOS.search(expl).group(0))
        if PARA_GAP.search(expl):
            mm = PARA_GAP.search(expl)
            snip = expl[mm.start() : mm.end() + 40]
            if "→" not in snip:
                note("PARA_GAP", loc, snip)
        # leftover ≈ in tips
        if "≈" in expl:
            note("APPROX_LEFT", loc, expl[expl.index("≈") - 30 : expl.index("≈") + 30])
        # tip form pairs using bare = between forms (heuristic)
        for tip in re.finditer(r"(?im)^(?:\*\*)?Tip:?\*\*?\s*(.+)$", expl):
            tip_body = tip.group(1)
            if (
                re.search(r"(?i)\b(to|-ing|gerund|infinitive)\b", tip_body)
                and "→" not in tip_body
                and "->" not in tip_body
                and re.search(r"(?i)\b(decide|stop|avoid|refuse|consider|enjoy|promise)\b", tip_body)
                and re.search(r"(?i)(/|,|;|\band\b)", tip_body)
            ):
                note("TIP_MAYBE_ARROW", loc, tip_body[:160])

print("BANS", len(rows))
print("COUNTS", dict(Counter(r.split("\t", 1)[0] for r in rows)))
for r in rows:
    print(r)

# json roundtrip sanity
json.loads(path.read_text(encoding="utf-8"))
print("JSON_OK")
print("TASKS", len(data["tasks"]))
print("EXPLS", sum(len(t["tactical_explanations"]) for t in data["tasks"]))
print("STMTS", sum(len(t["statements"]) for t in data["tasks"]))
