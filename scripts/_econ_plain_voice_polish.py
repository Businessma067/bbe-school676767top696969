#!/usr/bin/env python3
"""Polish econ explanations: plain direct voice, not third-person textbook,
and not theatrical classroom/teacher scaffolding.

Keeps content and answer closers; strips exam-meta and board-talk templates.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace/src/data")
FILES = [
    "economics-cases-ch2-subtopics.json",
    "economics-cases-ch3-subtopics.json",
    "economics-cases-ch4-subtopics.json",
    "economics-cases-ch5-subtopics.json",
    "economics-cases-ch6-subtopics.json",
]

CLOSER = re.compile(r"(So the statement is (?:True|False)\.?)\s*$", re.I | re.M)

# Whole paragraphs / sentences that are pure scaffolding — drop them.
DROP_PARAS = [
    re.compile(
        r"^Once you put the corrected category beside the sentence, the overreach is obvious — that is the move I want you to rehearse before the exam\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^that is the move I want you to rehearse before the exam\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Don't skip to the tick — name the rule,? plug the numbers,? then judge the claim\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Talk it through at the board:.*$",
        re.I,
    ),
    re.compile(
        r"^Keep the audience and timing in view — that is usually where these claims win or lose\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Use the line items above — the ratio or category follows once the arithmetic is on the page\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Walk the words against the chapter rule before you decide\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Pull the labelled line items first; the category or ratio follows from those numbers\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Stack each noun in the claim against the definition before you decide true or false\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Note: one clean counterexample or one failed comparison is enough — you do not need every chapter rule at once\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Do not let a familiar accounting term rescue a claim whose reason is wrong\..*$",
        re.I,
    ),
    re.compile(
        r"^Similar marketing vocabulary can mislead; stick to the criterion the chapter actually applies\.?\s*$",
        re.I,
    ),
    re.compile(
        r"^Similar .+ vocabulary can mislead; stick to the criterion the chapter actually applies\.?\s*$",
        re.I,
    ),
]

# Line / fragment replacements (order matters).
REPLACEMENTS: list[tuple[re.Pattern[str], str]] = [
    (
        re.compile(
            r"This sounds plausible until you notice what (.+?) actually requires\.",
            re.I,
        ),
        r"Check what \1 actually requires.",
    ),
    (
        re.compile(
            r"When you hear \"audit\", don't picture a guarantee that every euro is perfect\. "
            r"The auditor is saying the statements look fairly presented — no material mistakes jumped out — "
            r"not that the firm is bound to profit next year\.",
            re.I,
        ),
        "An audit gives reasonable assurance, not absolute certainty. "
        "It means the statements look fairly presented — free from material misstatement — "
        "not that every euro is exact or that the firm will profit next year.",
    ),
    (
        re.compile(
            r"When you hear \"audit\", don't picture a guarantee that every euro is perfect\.",
            re.I,
        ),
        "An audit gives reasonable assurance, not absolute certainty.",
    ),
    (
        re.compile(
            r"That's exactly what this claim says about",
            re.I,
        ),
        "That matches this claim about",
    ),
    (
        re.compile(r"^Look at the table —\s*", re.I | re.M),
        "From the figures: ",
    ),
    (
        re.compile(r"^Look —\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(r"^Here's the catch:\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(r"^Here is the catch:\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(r"^First decide:\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(r"^Ask who would read it:\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(
            r"Keep the (.+?) concrete: fill the stem's nouns into the claim before you decide\.",
            re.I,
        ),
        r"Take \1 as the concrete scene.",
    ),
    (
        re.compile(
            r"Keep the (.+?) concrete: fill the stem['’]s nouns into the claim before you decide\.",
            re.I,
        ),
        r"Take \1 as the concrete scene.",
    ),
    (
        re.compile(
            r"In «([^»]+)», the stem nouns either fit the definition or they do not — "
            r"neighbouring vocabulary should not tempt you into a softer rewrite of the sentence\.",
            re.I,
        ),
        r"Under \1, either the nouns fit the definition or they do not — "
        r"a softer rewrite of the sentence does not help.",
    ),
    (
        re.compile(
            r"In «([^»]+)», the stem nouns either fit the definition or they do not — "
            r"neighbouring vocabulary should not tempt a softer rewrite of the sentence\.",
            re.I,
        ),
        r"Under \1, either the nouns fit the definition or they do not — "
        r"a softer rewrite of the sentence does not help.",
    ),
    (
        re.compile(
            r"Walk through the words against the definition — here the label and the reason match what the chapter teaches\.",
            re.I,
        ),
        "The label and the reason match the definition.",
    ),
    (
        re.compile(
            r"Walk through (.+?) and compare with the claim\.",
            re.I,
        ),
        r"Apply \1 and compare with the claim.",
    ),
    (
        re.compile(r"^Note:\s*", re.I | re.M),
        "",
    ),
    (
        re.compile(
            r"I want you to rehearse before the exam",
            re.I,
        ),
        "matters for the answer",
    ),
    (
        re.compile(r"rehearse before the exam", re.I),
        "check carefully",
    ),
    (
        re.compile(r"at the board", re.I),
        "",
    ),
    (
        re.compile(r"fill the stem['’]s nouns into the claim before you decide", re.I),
        "use the case nouns in the claim",
    ),
    (
        re.compile(r"fill the stem's nouns into the claim before you decide", re.I),
        "use the case nouns in the claim",
    ),
    (
        re.compile(
            r"Don't let a familiar term rescue a claim whose reason is wrong\.",
            re.I,
        ),
        "A familiar term does not rescue a claim whose reason is wrong.",
    ),
]


def clean_para(p: str) -> str | None:
    t = p.strip()
    if not t:
        return None
    for drop in DROP_PARAS:
        if drop.match(t):
            return None
    for pat, repl in REPLACEMENTS:
        t = pat.sub(repl, t)
    t = re.sub(r"[ \t]{2,}", " ", t)
    t = re.sub(r" +\.", ".", t)
    t = re.sub(r" ,", ",", t)
    t = re.sub(r"—\s*—", "—", t)
    t = t.strip(" \t—")
    if not t or len(t) < 3:
        return None
    # Drop leftover empty scaffolding after replacements
    if t.lower() in {"look.", "catch.", "note."}:
        return None
    return t


def polish_explanation(text: str) -> str:
    m = CLOSER.search(text.strip())
    if not m:
        closer = ""
        body = text.strip()
    else:
        closer = m.group(1)
        if not closer.endswith("."):
            closer += "."
        # Normalize closer spelling used in files
        if closer.lower().startswith("so the statement"):
            verd = "True" if "true" in closer.lower() else "False"
            closer = f"So the statement is {verd}."
        body = CLOSER.sub("", text.strip()).strip()

    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    out: list[str] = []
    for p in paras:
        cleaned = clean_para(p)
        if cleaned:
            out.append(cleaned)

    if not out:
        # Fallback: keep original body lightly cleaned
        out = [clean_para(body) or body]

    result = "\n\n".join(out)
    if closer:
        result = result.rstrip() + "\n\n" + closer
    return result.strip() + "\n" if False else result.strip()


def process_file(path: Path) -> dict:
    data = json.loads(path.read_text())
    changed = 0
    for case in data:
        key = "tactical_explanations"
        if key not in case:
            continue
        new_list = []
        for e in case[key]:
            polished = polish_explanation(e)
            if polished != e.strip():
                changed += 1
            new_list.append(polished)
        case[key] = new_list
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return {"file": path.name, "letters_changed": changed, "cases": len(data)}


def main() -> None:
    for name in FILES:
        path = ROOT / name
        info = process_file(path)
        print(info)


if __name__ == "__main__":
    main()
