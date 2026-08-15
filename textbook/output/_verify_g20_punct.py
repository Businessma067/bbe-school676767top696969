# -*- coding: utf-8 -*-
"""Verify g.20 bans=0 against both audit rule sets."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

PARTS = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts")
data = json.loads((PARTS / "g.20.json").read_text(encoding="utf-8-sig"))
rows: list[str] = []


def note(kind: str, loc: str, snip: str) -> None:
    rows.append(f"{kind}\t{loc}\t{snip.replace(chr(10), ' / ')[:220]}")


BACKREF = re.compile(r"(?<!\\)\\[0-9]")
NO_APOS = re.compile(
    r"(?i)\b(doesnt|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|"
    r"wouldnt|couldnt|shouldnt|didnt|mustnt|neednt)\b"
)
UNPACK = re.compile(r"(?i)unpacks?\s+(fairly\s+)?into\s+")
INTO_THE = re.compile(r"(?i)\binto\s+The\s+[A-Z]")
VERB_DOT = re.compile(r"(?i)\b(maps?|equals?|becomes?|reads?|rewrites?|paraphrases?)\s+\.\s+")
INTO_DOT = re.compile(r"(?i)\b(into|as|to)\s+\.\s+[A-Z\"“]")

for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt:
            note("FFFD", loc, stmt)
        if BACKREF.search(stmt) or "\\1" in stmt:
            note("BACKREF", loc, stmt)
        if re.search(r"\s[,;:]\s*[,.;:]", stmt):
            note("DBL_PUNCT", loc, stmt)
        if stmt.strip() and stmt.strip()[-1] not in '.?!"\')':
            note("NO_END_PUNCT", loc, stmt[-60:])
        if re.search(r"(?<=\w)\s+\.\s+(?=[A-Z\"“])", stmt):
            note("SPACED_DOT", loc, stmt)
        if re.search(r'(?i)Direct:\s*"[^"]+"\s+"[^"]+"', stmt) and "→" not in stmt and "->" not in stmt:
            note("STMT_MISSING_ARROW", loc, stmt)
        if re.search(r'\."\.\s*$', stmt):
            note("STMT_DBL_END", loc, stmt[-40:])

    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/E{chr(65+ei)}"
        if "\ufffd" in expl:
            note("FFFD", loc, expl)
        if BACKREF.search(expl) or "\\1" in expl:
            note("BACKREF", loc, "found")
        if UNPACK.search(expl):
            m2 = re.search(r"(?i).{0,25}unpacks?.{0,100}", expl)
            note("UNPACK", loc, m2.group(0) if m2 else "")
            if "→" not in expl and "->" not in expl:
                note("UNPACK_NO_ARROW", loc, m2.group(0) if m2 else "")
            if re.search(r"(?i)into\s+[A-Z]", expl) and not re.search(r'(?i)into\s+[\"“]', expl):
                note("UNPACK_UNQUOTED", loc, m2.group(0) if m2 else "")
        if INTO_THE.search(expl):
            m2 = INTO_THE.search(expl)
            note("INTO_THE_UNQUOTED", loc, expl[m2.start() - 20 : m2.end() + 50])
        if VERB_DOT.search(expl):
            m2 = VERB_DOT.search(expl)
            note("VERB_DOT", loc, expl[m2.start() - 10 : m2.end() + 40])
        if INTO_DOT.search(expl):
            m2 = INTO_DOT.search(expl)
            note("INTO_DOT", loc, expl[m2.start() - 10 : m2.end() + 30])
        m = NO_APOS.search(expl)
        if m:
            note("NO_APOS", loc, m.group(0))
        m2 = re.search(
            r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]',
            expl,
        )
        if m2 and "→" not in m2.group(0):
            # filter equal weight false positive
            if re.search(r"(?i)\bequal(?:s|\s+weight)\b", m2.group(0)) and not re.search(
                r"(?i)\bequals?\s+", m2.group(0)
            ):
                pass
            elif re.search(r"(?i)\bequal\s+weight\b", expl[m2.start() : m2.end() + 20]):
                pass
            else:
                # still flag true equals/become PARA_GAP
                if re.search(r"(?i)\b(equals?|becomes?|unpacks?|paraphrases?|maps?)\b", m2.group(0)):
                    # skip "equal weight" which can match equals? poorly — equals? matches "equal"
                    span = m2.group(0)
                    if re.search(r"(?i)\bequal\s+weight\b", span):
                        pass
                    elif re.match(r"(?i)equal\s", span) and "equals" not in span.lower():
                        pass
                    else:
                        note("PARA_GAP", loc, span)
        m = re.match(r"^(\*\*[A-E]\).+?\*\*)", expl.strip(), re.S)
        if m:
            claim = m.group(1).replace("\n", " ")
            if re.search(r'\."\.\*\*$', claim):
                note("CLAIM_DBL_PERIOD", loc, claim[-80:])
            elif re.search(r'[.?!]\.\*\*$', claim):
                note("CLAIM_DBL_PERIOD", loc, claim[-80:])
        if re.search(r"(?i)must become\s+(?![\"""])", expl):
            note("MUST_BECOME", loc, "bare")
        if re.search(r"(?i)unpacks?\s+(?:fairly\s+)?into\s+(?![\"""])", expl):
            note("UNPACK_UNQUOTED2", loc, "bare")
        if re.search(r'[a-zA-Z]"?\.\.(?!\.)', expl):
            note("DBL_PERIOD", loc, re.search(r".{0,40}\.\..{0,20}", expl).group(0))
        # claim matches statement
        stmt = task["statements"][ei]
        cm = re.match(r"^\*\*([A-E])\)\s*(.+?)\*\*", expl.strip(), re.S)
        if cm:
            if cm.group(1) != chr(65 + ei):
                note("LETTER", loc, cm.group(1))
            if stmt[-1] in ".?!" and cm.group(2) != stmt:
                note("CLAIM_MISMATCH", loc, "diff")

# answer_key sanity
for ti, task in enumerate(data["tasks"]):
    assert len(task["statements"]) == len(task["answer_key"]) == len(task["tactical_explanations"]) == 5

counts = Counter(r.split("\t", 1)[0] for r in rows)
out = Path(__file__).with_name("_verify_g20_punct.txt")
out.write_text(
    f"COUNTS {dict(counts)}\nTOTAL {len(rows)}\nbans={len(rows)}\n" + "\n".join(rows) + "\n",
    encoding="utf-8",
)
print(f"bans={len(rows)}")
print("COUNTS", dict(counts))

# spot-check patched snippets
checks = [
    '"The selection criteria is" → "The selection criteria are"',
    '"Who\'s" → "who has"',
    '"Who\'s" → "who is"',
    '"Who\'s been" → "who has been"',
    '"Who\'s attending" → "who is attending"',
    '"influence on the timeline" → "will affect the project timeline"',
    'Countable approvals: "approvals" → "fewer formal approvals"',
]
blob = json.dumps(data, ensure_ascii=False)
for c in checks:
    print(("OK" if c in blob else "MISSING"), c[:60])
