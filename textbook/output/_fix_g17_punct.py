# -*- coding: utf-8 -*-
"""Deep-edit punct/symbols in g.17 statements + tactical_explanations."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.17.json")
data = json.loads(PATH.read_text(encoding="utf-8-sig"))

# Exact old → new replacements inside tactical_explanations only
REPLACEMENTS: list[tuple[str, str]] = [
    # Tip form pairs: ≈ → →
    (
        "**Tip:** So adj a noun ≈ such a adj noun; both appear in careful English.",
        "**Tip:** So adj a noun → such a adj noun; both appear in careful English.",
    ),
    (
        "**Tip:** Too late for X to V ≈ X cannot V in time.",
        "**Tip:** Too late for X to V → X cannot V in time.",
    ),
    (
        "**Tip:** So…as to… ≈ so…that someone/something does…",
        "**Tip:** So…as to… → so…that someone/something does…",
    ),
    (
        "**Tip:** Too dense a book ≈ such a dense book, but with an excess reading.",
        "**Tip:** Too dense a book → such a dense book, but with an excess reading.",
    ),
    (
        "**Tip:** Too few ≈ not enough in meaning; the grammar still uses too + few + plural noun.",
        "**Tip:** Too few → not enough in meaning; the grammar still uses too + few + plural noun.",
    ),
    (
        "**Tip:** Noun + is such that… ≈ the nature of X means / brings about…",
        "**Tip:** Noun + is such that… → the nature of X means / brings about…",
    ),
    (
        "**Tip:** Such N as X lists ≈ the N that X lists.",
        '**Tip:** "Such N as X lists" → "the N that X lists."',
    ),
    (
        "**Tip:** So arranged as to… ≈ arranged in such a way that…",
        "**Tip:** So arranged as to… → arranged in such a way that…",
    ),
    (
        "**Tip:** Verb + such that ≈ configured so that / in such a way that.",
        "**Tip:** Verb + such that → configured so that / in such a way that.",
    ),
    (
        "**Tip:** Enough not to… ≈ sufficiently… to avoid…",
        "**Tip:** Enough not to… → sufficiently… to avoid…",
    ),
    (
        "**Tip:** So biased a sample = such a biased sample in force.",
        "**Tip:** So biased a sample → such a biased sample in force.",
    ),
    (
        "**Tip:** Too much of a X to V = excessively X-like to V.",
        "**Tip:** Too much of a X to V → excessively X-like to V.",
    ),
    # task8/A: avoid PARA_GAP false positive on "map … . Capital"
    (
        "Not clear enough for hikers to follow… means the map failed the sufficiency test for misty navigation. Enough sits after clear even though the complement is longer than a bare for-phrase.",
        "Not clear enough for hikers to follow… means it failed the sufficiency test for misty navigation. Enough sits after clear even though the complement is longer than a bare for-phrase.",
    ),
    # task11/D: avoid PARA_GAP false positive on "map phrase … . The"
    (
        "Poorly modifies printed inside the noun phrase; the whole map phrase is what such intensifies. The that-clause reports the navigational result.",
        "Poorly modifies printed inside the noun phrase; the whole noun phrase is what such intensifies. The that-clause reports the navigational result.",
    ),
    # task14/D: arrow + quotes for paraphrase
    (
        'Such spices as the recipe lists equals the spices that the recipe lists. This formal matching pattern is distinct from result such…that.',
        '"Such spices as the recipe lists" → "the spices that the recipe lists." This formal matching pattern is distinct from result such…that.',
    ),
    # task19/C: avoid INTO_THE_UNQUOTED on "into the so"
    (
        "Such biased a sample mis-orders the article into the so adj a noun slot. Never write such + adj + a + noun; that order belongs to so/too, not such.",
        "Such biased a sample borrows so/too article placement (adj + a + noun). Never write such + adj + a + noun; that order belongs to so/too, not such.",
    ),
]

changed = 0
missing = []
for old, new in REPLACEMENTS:
    found = False
    for task in data["tasks"]:
        for i, expl in enumerate(task["tactical_explanations"]):
            if old in expl:
                task["tactical_explanations"][i] = expl.replace(old, new, 1)
                changed += 1
                found = True
    if not found:
        missing.append(old[:80])

# Ensure claim headers match statements exactly (no double period)
claim_fixes = 0
for task in data["tasks"]:
    for i, (stmt, expl) in enumerate(zip(task["statements"], task["tactical_explanations"])):
        m = re.match(r"^(\*\*[A-E]\) )(.*?)(\*\*)", expl, re.S)
        if not m:
            continue
        claim = m.group(2)
        if claim == stmt:
            continue
        # If claim == stmt without trailing punct duplicated
        if claim == stmt + ".":
            new_claim = stmt  # drop extra period
            task["tactical_explanations"][i] = m.group(1) + new_claim + m.group(3) + expl[m.end() :]
            claim_fixes += 1
        elif claim.rstrip(".") == stmt.rstrip(".") and stmt.endswith((".", "?", "!")):
            # normalize to exact statement
            task["tactical_explanations"][i] = m.group(1) + stmt + m.group(3) + expl[m.end() :]
            claim_fixes += 1

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("replacements_applied", changed)
print("claim_fixes", claim_fixes)
print("missing", len(missing))
for x in missing:
    print("MISSING:", x)
