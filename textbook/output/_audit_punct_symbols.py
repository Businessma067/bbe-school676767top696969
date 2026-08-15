# -*- coding: utf-8 -*-
"""Audit English grammar statements + explanations for punct/symbol damage."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PARTS = ROOT / "src" / "data" / "english" / "grammar_parts"
OUT = Path(__file__).with_name("_punct_symbol_audit.txt")

rows: list[str] = []


def note(kind: str, loc: str, snippet: str) -> None:
    clean = snippet.replace("\n", " / ").replace("\t", " ")
    rows.append(f"{kind}\t{loc}\t{clean[:240]}")


NO_APOS = re.compile(
    r"(?i)\b(doesnt|cant|wont|isnt|arent|wasnt|werent|havent|hasnt|hadnt|"
    r"wouldnt|couldnt|shouldnt|didnt|mustnt|neednt)\b"
)
BACKREF = re.compile(r"(?<!\\)\\[0-9]")
UNPACK = re.compile(r"(?i)unpacks?\s+(fairly\s+)?into\s+")
INTO_THE = re.compile(r"(?i)\binto\s+The\s+[A-Z]")
VERB_DOT = re.compile(
    r"(?i)\b(maps?|equals?|becomes?|reads?|rewrites?|paraphrases?)\s+\.\s+"
)
INTO_DOT = re.compile(r"(?i)\b(into|as|to)\s+\.\s+[A-Z\"“]")
MISSING_ARROW_PAIR = re.compile(
    r"(?i)\b(stop|decide|avoid|refuse|promise|consider|enjoy)\s+(to|-ing)\s+"
    r"(?!→)(?=\+|base|verb|infinitive|gerund)"
)

for i in range(1, 21):
    path = PARTS / f"g.{i}.json"
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    for ti, task in enumerate(data["tasks"]):
        for si, stmt in enumerate(task.get("statements", [])):
            loc = f"g.{i}.json#task{ti + 1}/S{chr(65 + si)}"
            if "\ufffd" in stmt:
                note("FFFD", loc, stmt)
            if BACKREF.search(stmt):
                note("BACKREF", loc, stmt)
            if re.search(r"\s[,;:]\s*[,.;:]", stmt):
                note("DBL_PUNCT", loc, stmt)
            if stmt.strip() and stmt.strip()[-1] not in '.?!"\')':
                note("NO_END_PUNCT", loc, stmt[-60:])
            # bare space-dot anomalies
            if re.search(r"(?<=\w)\s+\.\s+(?=[A-Z\"“])", stmt):
                note("SPACED_DOT", loc, stmt)

        for ei, expl in enumerate(task.get("tactical_explanations", [])):
            loc = f"g.{i}.json#task{ti + 1}/{chr(65 + ei)}"
            if "\ufffd" in expl:
                idx = expl.index("\ufffd")
                note("FFFD", loc, expl[max(0, idx - 30) : idx + 30])
            m = BACKREF.search(expl)
            if m:
                a, b = max(0, m.start() - 35), min(len(expl), m.end() + 35)
                note("BACKREF", loc, expl[a:b])
            if UNPACK.search(expl):
                m2 = re.search(r"(?i).{0,25}unpacks?.{0,100}", expl)
                note("UNPACK", loc, m2.group(0) if m2 else expl[:120])
                if "→" not in expl and "->" not in expl:
                    note("UNPACK_NO_ARROW", loc, m2.group(0) if m2 else "")
                if re.search(r'(?i)into\s+[A-Z]', expl) and not re.search(
                    r'(?i)into\s+[\"“]', expl
                ):
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
            # Tip lines that should have arrow between forms but use plain "to" only — flag Tip: X to Y without → when both sides look like forms
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
            # phrase then period then capital continuation that looks like a paraphrase gap
            if re.search(
                r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]',
                expl,
            ):
                m2 = re.search(
                    r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?).{0,80}',
                    expl,
                )
                if m2 and '→' not in m2.group(0):
                    note("PARA_GAP", loc, m2.group(0))

counts = Counter(r.split("\t", 1)[0] for r in rows)
text = "\n".join(rows) + f"\n\nTOTAL {len(rows)}\nCOUNTS {dict(counts)}\n"
OUT.write_text(text, encoding="utf-8")
print(dict(counts))
print("TOTAL", len(rows))
print("Wrote", OUT)
