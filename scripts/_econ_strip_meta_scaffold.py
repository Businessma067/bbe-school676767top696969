#!/usr/bin/env python3
"""Strip exam-technique / meta scaffolding from econ tactical_explanations.

Keeps economic teaching; removes process instructions that do not explain the claim.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

CLOSER_RE = re.compile(
    r"(?:\n\n)?So the statement is (True|False)\.?\s*$", re.I
)

# Full sentences / clauses to drop (case-insensitive where noted).
DROP_SENTENCE_RES: list[re.Pattern[str]] = [
    re.compile(p, re.I)
    for p in [
        r"Hold the statement against the chapter map before you tick it\.?",
        r"In class we would check the claim with one worked example\.?",
        r"In class we would check the category, not the adjective\.?",
        r"In class we would name the true category beside that trap, then lock the (?:True|False) call\.?",
        r"In class we would[^.?!]*[.?!]",
        r"Here is the catch with this letter\.?",
        r"Here is the catch: the claim smuggles in a false absolute\.?",
        r"Here is the catch\.?",
        r"Here is the living reading of the claim\.?",
        r"Here the letter lines up with how the chapter draws the line\.?",
        r"Read the assertion as a classroom check on the core idea\.?",
        r"This one holds once you pin the definition and try it on the stem\.?",
        r"Take the claim at face value and test it against the chapter definition\.?",
        r"Start from the stem.?s concrete choice, then match the rule\.?",
        r"Start from the ownership form the stem actually names\.?",
        r"Press the assertion onto the stem.?s scene and it falls apart\.?",
        r"Look past the confident phrasing[^.?!]*[.?!]",
        r"Look at what the statement quietly swaps\.?",
        r"Watch which shortcut the statement tries\.?",
        r"Watch the trap in the reason clause\.?",
        r"The wording sounds tidy until you press it against the definition\.?",
        r"Spell out the claim in plain words, then check whether[^.?!]*[.?!]",
        r"If the letter holds, you can point to the chapter line without[^.?!]*[.?!]",
        r"Contrast the true category with the trap students reach for when they rush the paper\.?",
        r"Contrast the true category with the shortcut on offer\.?",
        r"Nothing in the letter needs a second twist beyond the chapter line\.?",
        r"That reading matches the stem once you keep[^.?!]*[.?!]",
        r"A quick board check[^.?!]*[.?!]",
        r"Oral exam habit:[^.?!]*[.?!]",
        r"Stay with the stem.?s nouns[^.?!]*[.?!]",
        r"Stay with the nouns in [^.?!]*[.?!]",
        r"Keep the stem.?s scene in front of you\.?",
        r"Sort the nouns first, then the verdict follows\.?",
        r"Say it the way we would at the board\.?",
        r"The absolute wording is doing the damage\.?",
        r"Begin with the stem.?s scene, then test the wording\.?",
        r"Hold the true category beside the trap\.?",
        r"Use the objective list as the rubric\.?",
        r"Name the purchaser out loud:[^.?!]*[.?!]",
        r"For a typical sole-trader business, ownership and final say sit with one natural person\.?",
        r"For a typical sole trader, company-style shields and automatic succession are the wrong story\.?",
        r"Neighbour categories stay neighbours; this sentence earns its own bucket\.?",
        r"If a rival definition is swapped in, the stem.?s facts stop matching, so stay with this one\.?",
        r"Talk the claim through once more with the same nouns until the category feels inevitable\.?",
        r"Keep asking what each noun contributes to the offer[^.?!]*[.?!]",
        r"On a quiet Tuesday in that same firm, the same classification still holds\.?",
        r"Put “[^”]*” on the board for a moment\.?",
        r'Put "[^"]*" on the board for a moment\.?',
        r"If a classmate tried to deny the claim,[^.?!]*[.?!]",
        r"The letter overreaches, reverses a sequence, or collapses two distinct measures into one false rule\.?",
        r"held against the chapter, the claim fails for[^.?!]*[.?!]",
        r"A short counter-scene helps:[^.?!]*[.?!]",
        r"Students sometimes reserve scarcity for poor households only[^.?!]*[.?!]",
        r"Slow down on the wording:[^.?!]*[.?!]",
    ]
]

# Meta Note: paragraphs (entire paragraph starting with Note:)
DROP_NOTE_RES: list[re.Pattern[str]] = [
    re.compile(p, re.I)
    for p in [
        r"Note:\s*keep the stem.?s form label fixed[^\n]*",
        r"Note:\s*absolutes such as never[^\n]*",
        r"Note:\s*limited liability and sole proprietorship sit on different lines of the chapter map[^\n]*",
        r"Note:\s*separate the scoreboard[^\n]*",
        r"Note:\s*primary issue versus secondary trading is the exam split[^\n]*",
        r"Note:[^\n]*Slow down on the wording:[^\n]*",
        r"Note:[^\n]*common exam tripwires[^\n]*",
        r"Note:[^\n]*exam trap[^\n]*",
        r"Note:[^\n]*exam split[^\n]*",
    ]
]

# Extra filler paragraphs that pad without teaching
DROP_PARA_RES: list[re.Pattern[str]] = [
    re.compile(p, re.I | re.S)
    for p in [
        r"Finite budget, finite hours, finite stock[^.]*\.?\s*Economising is ranking uses under that limit rather than pretending the pot is endless\.\s*(?:The statement matches that discipline\.|The statement pretends the limit vanishes\.)?",
    ]
]


def strip_meta(text: str) -> str:
    m = CLOSER_RE.search(text)
    closer = m.group(0).strip() if m else ""
    verdict = m.group(1) if m else None
    body = CLOSER_RE.sub("", text).strip()

    for rx in DROP_NOTE_RES:
        body = rx.sub("", body)
    for rx in DROP_PARA_RES:
        body = rx.sub("", body)
    for rx in DROP_SENTENCE_RES:
        body = rx.sub("", body)

    # Clean whitespace / empty paras
    body = re.sub(r"[ \t]+", " ", body)
    body = re.sub(r" *\n *", "\n", body)
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    # Drop tiny leftover glue fragments
    cleaned = []
    for p in paras:
        p = p.strip(" ;,")
        if len(p) < 25 and not p.startswith("Note:"):
            continue
        # fix leading lowercase after strip
        if p and p[0].islower():
            p = p[0].upper() + p[1:]
        cleaned.append(p)
    body = "\n\n".join(cleaned).strip()
    if not closer and verdict:
        closer = f"So the statement is {verdict}."
    if closer and not closer.startswith("So the"):
        closer = f"So the statement is {verdict}."
    if body:
        return f"{body}\n\n{closer}" if closer else body
    return closer


def main() -> None:
    thin: list[tuple[str, str, int]] = []
    for ch in range(2, 6):
        path = Path(f"src/data/economics-cases-ch{ch}-subtopics.json")
        data = json.loads(path.read_text())
        changed = 0
        for c in data:
            new_expl = []
            for i, e in enumerate(c["tactical_explanations"]):
                ne = strip_meta(e)
                if ne != e:
                    changed += 1
                body = CLOSER_RE.sub("", ne).strip()
                if len(body) < 120:
                    thin.append((c["case_id"], chr(65 + i), len(body)))
                # ensure closer matches key
                want = "True" if c["answer_key"][i] else "False"
                if not ne.rstrip().endswith(f"So the statement is {want}."):
                    body2 = CLOSER_RE.sub("", ne).strip()
                    ne = f"{body2}\n\nSo the statement is {want}." if body2 else f"So the statement is {want}."
                new_expl.append(ne)
            c["tactical_explanations"] = new_expl
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
        print(f"ch{ch}: rewrote {changed} letters")
    print(f"thin (<120 body): {len(thin)}")
    for row in thin[:40]:
        print(" ", row)
    if len(thin) > 40:
        print(f"  ... +{len(thin)-40} more")
    Path("/tmp/econ_meta_thin.json").write_text(json.dumps(thin, indent=2))


if __name__ == "__main__":
    main()
