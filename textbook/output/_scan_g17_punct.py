# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.17.json")
data = json.loads(p.read_text(encoding="utf-8-sig"))

# mirror audit filters for g.17 only
BACKREF = re.compile(r"(?<!\\)\\[0-9]")
UNPACK = re.compile(r"(?i)unpacks?\s+(fairly\s+)?into\s+")
INTO_THE = re.compile(r"(?i)\binto\s+The\s+[A-Z]")
NO_APOS = re.compile(
    r"(?i)\b(doesnt|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|"
    r"wouldnt|couldnt|shouldnt|didnt|mustnt|neednt)\b"
)
PARA_GAP = re.compile(
    r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]'
)

rows = []
for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task.get("statements", [])):
        loc = f"task{ti+1}/S{chr(65+si)}"
        if BACKREF.search(stmt):
            rows.append(("STMT_BACKREF", loc, stmt))
        if "\ufffd" in stmt:
            rows.append(("STMT_FFFD", loc, stmt))

    for ei, expl in enumerate(task.get("tactical_explanations", [])):
        loc = f"task{ti+1}/{chr(65+ei)}"
        stmt = task["statements"][ei]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        if not m:
            rows.append(("NO_CLAIM", loc, expl[:80]))
            continue
        claim = m.group(2)
        # double period: statement already ends with punct AND claim adds another
        if re.search(r'[.!?]"?\.\s*$', claim) or claim.endswith(".."):
            rows.append(("DBL_CLAIM", loc, repr(claim[-60:])))
        # claim should equal statement exactly (preferred)
        if claim != stmt:
            rows.append(("CLAIM_NE_STMT", loc, f"claim={claim!r}"[:120], f"stmt={stmt!r}"[:120]))
        if BACKREF.search(expl):
            rows.append(("BACKREF", loc, BACKREF.search(expl).group(0)))
        if UNPACK.search(expl):
            rows.append(("UNPACK", loc, UNPACK.search(expl).group(0)))
        if INTO_THE.search(expl):
            mm = INTO_THE.search(expl)
            rows.append(("INTO_THE", loc, expl[mm.start() - 20 : mm.end() + 50]))
        # also soft: into the so/The
        if re.search(r"(?i)\binto the\b", expl):
            mm = re.search(r"(?i).{0,25}\binto the\b.{0,50}", expl)
            rows.append(("INTO_THE_SOFT", loc, mm.group(0).replace("\n", " / ") if mm else ""))
        if NO_APOS.search(expl):
            rows.append(("NO_APOS", loc, NO_APOS.search(expl).group(0)))
        if PARA_GAP.search(expl):
            mm = PARA_GAP.search(expl)
            # false positives ending on claim headers with map/equals in tip? check arrow nearby
            snippet = expl[mm.start() : mm.end() + 40]
            if "→" not in snippet:
                rows.append(("PARA_GAP", loc, snippet.replace("\n", " / ")))
        # equals/becomes/maps without arrow quotes
        for verb in ("equals", "equal", "becomes", "become", "maps", "map", "reads"):
            for mm in re.finditer(rf"\b{verb}\b", expl, re.I):
                ctx = expl[max(0, mm.start() - 40) : mm.end() + 70].replace("\n", " / ")
                rows.append(("VERB_CTX", loc, ctx))

print(f"issues: {len(rows)}")
for r in rows:
    print("\t".join(str(x) for x in r))
