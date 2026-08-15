# -*- coding: utf-8 -*-
"""Focused punct/symbol audit for g.20.json only."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

P = Path(__file__).resolve().parents[2] / "src/data/english/grammar_parts/g.20.json"
data = json.loads(P.read_text(encoding="utf-8-sig"))
rows: list[str] = []


def note(kind: str, loc: str, snip: str) -> None:
    rows.append(f"{kind}\t{loc}\t{snip.replace(chr(10), ' / ')[:220]}")


BACKREF = re.compile(r"(?<!\\)\\[0-9]")
NO_APOS = re.compile(
    r"(?i)\b(doesnt|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|"
    r"wouldnt|couldnt|shouldnt|didnt|mustnt|neednt)\b"
)

for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt:
            note("FFFD", loc, stmt)
        if BACKREF.search(stmt) or "\\1" in stmt:
            note("BACKREF", loc, stmt)
        if re.search(r"\s[,;:]\s*[,.;:]", stmt):
            note("DBL_PUNCT", loc, stmt)
        if re.search(r'(?i)Direct:\s*"[^"]+"\s+"[^"]+"', stmt) and "→" not in stmt:
            note("STMT_MISSING_ARROW", loc, stmt)
        if re.search(r'\."\.\s*$', stmt):
            note("STMT_DBL_END", loc, stmt[-40:])
        if "--" in stmt:
            note("ASCII_EM_STMT", loc, stmt)
        if "->" in stmt and "→" not in stmt:
            note("ASCII_ARROW_STMT", loc, stmt)

    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/E{chr(65+ei)}"
        if "\ufffd" in expl:
            note("FFFD", loc, expl)
        if BACKREF.search(expl) or "\\1" in expl:
            m = BACKREF.search(expl) or re.search(r"\\1", expl)
            note("BACKREF", loc, expl[m.start() - 20 : m.end() + 20] if m else expl[:80])
        m = re.match(r"^(\*\*[A-E]\).+?\*\*)", expl.strip(), re.S)
        if m:
            claim = m.group(1).replace("\n", " ")
            # statement already ends .?!" then another .
            if re.search(r'[.?!]["”]?\.\*\*$', claim) or re.search(r'\."[?!]?\.\*\*$', claim):
                note("CLAIM_DBL_PERIOD", loc, claim[-90:])
            # also .\".** pattern
            if re.search(r'\."\.\*\*$', claim):
                note("CLAIM_DBL_PERIOD2", loc, claim[-90:])
        if NO_APOS.search(expl):
            note("NO_APOS", loc, NO_APOS.search(expl).group(0))
        if re.search(r"(?i)unpacks?\s+(?:fairly\s+)?into\s+(?![\"""])", expl):
            note("UNPACK_UNQUOTED", loc, re.search(r"(?i).{0,20}unpacks?.{0,90}", expl).group(0))
        if re.search(r"(?i)\bbecomes?\s+(?:The|A|An)\s+[A-Z]", expl) and not re.search(
            r'(?i)\bbecomes?\s+[\"“]', expl
        ):
            note("BECOMES_UNQUOTED", loc, re.search(r"(?i).{0,15}becomes?.{0,70}", expl).group(0))
        # "must become X" without arrow/quotes
        if re.search(r"(?i)must become\s+(?![\"""])", expl):
            note("MUST_BECOME", loc, re.search(r"(?i).{0,25}must become.{0,40}", expl).group(0))
        if re.search(r"(?i)\bequals?\s+", expl):
            note("EQUALS", loc, re.search(r"(?i).{0,20}equals?.{0,50}", expl).group(0))
        if "->" in expl and "→" not in expl[max(0, expl.find("->") - 5) : expl.find("->") + 5]:
            note("ASCII_ARROW", loc, re.search(r".{0,30}->.{0,30}", expl).group(0))
        if "--" in expl:
            note("ASCII_EM", loc, re.search(r".{0,20}--.{0,20}", expl).group(0))
        # bare → without quotes on either side (heuristic)
        for am in re.finditer(r"(.{0,40})→(.{0,40})", expl):
            left, right = am.group(1), am.group(2)
            # tip-like Decide → to is OK if short forms
            note("ARROW_CTX", loc, (left + "→" + right).replace("\n", " / "))
        # ellipsis ascii
        if "..." in expl:
            note("ASCII_ELLIPSIS", loc, re.search(r".{0,15}\.\.\..{0,15}", expl).group(0))
        # claim vs statement mismatch
        stmt = task["statements"][ei]
        if m:
            # extract claim text between ") " and final **
            cm = re.match(r"^\*\*[A-E]\)\s*(.+?)\*\*", expl.strip(), re.S)
            if cm:
                claim_text = cm.group(1).strip()
                # if stmt ends with punct, claim should equal stmt (no extra .)
                if stmt[-1] in ".?!":
                    if claim_text != stmt:
                        # allow claim == stmt without extra period; flag extras
                        if claim_text.rstrip(".") != stmt.rstrip(".?!") and claim_text != stmt:
                            note("CLAIM_MISMATCH", loc, f"claim={claim_text[:60]!r} stmt={stmt[:60]!r}")
                        elif claim_text == stmt + ".":
                            note("CLAIM_DBL_PERIOD3", loc, claim_text[-60:])
                else:
                    # stmt lacks end punct — claim may add .
                    pass

counts = Counter(r.split("\t", 1)[0] for r in rows)
out = Path(__file__).with_name("_audit_g20_punct.txt")
text = "COUNTS " + repr(dict(counts)) + f"\nTOTAL {len(rows)}\n" + "\n".join(rows) + "\n"
out.write_text(text, encoding="utf-8")
print("COUNTS", dict(counts))
print("TOTAL", len(rows))
print("Wrote", out)
