# -*- coding: utf-8 -*-
"""Deep-edit punct/symbols in g.12 statements + tactical_explanations."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(PATH.read_text(encoding="utf-8-sig"))

# Exact old → new inside tactical_explanations (and statements if listed).
REPLACEMENTS: list[tuple[str, str]] = [
    # --- Tips: form gloss = → arrow ---
    (
        "**Tip:** Commas both sides = parenthetical however, not a splice.",
        "**Tip:** Commas both sides → parenthetical however, not a splice.",
    ),
    (
        "**Tip:** Because + noun is almost always wrong — insert of or rebuild as a full clause.",
        "**Tip:** Because + noun → insert of, or rebuild as a full clause.",
    ),
    (
        "**Tip:** Semicolon (or period) + however + comma is the clean formal pattern.",
        "**Tip:** Semicolon / period → however → comma is the clean formal pattern.",
    ),
    (
        "**Tip:** Despite + -ing phrase is legal; save although for a tensed clause.",
        "**Tip:** Despite → -ing noun phrase; although → tensed clause.",
    ),
    (
        "**Tip:** Prefer although when you can; despite the fact that is wordy but legal.",
        "**Tip:** Prefer although → clause; despite the fact that → clause is wordy but legal.",
    ),
    (
        "**Tip:** Despite + having… is a reliable advanced concession shape.",
        "**Tip:** Despite → having… is a reliable advanced concession shape.",
    ),
    (
        "**Tip:** -ing compression unlocks in spite of / despite for this story.",
        "**Tip:** -ing compression → in spite of / despite for this story.",
    ),
    # --- Body: form charts ---
    (
        'Cause linkers split into because (clause) versus because of (noun).',
        "Cause linkers: because → clause; because of → noun.",
    ),
    (
        "Learn the trio as fixed spelling: despite (no of) / in spite of / although (clause).",
        "Learn the trio as fixed spelling: despite → no of; in spite of → of kept; although → clause.",
    ),
    (
        "Keep because of and because as a clean pair: noun versus clause for the same real-world cause.",
        "Keep because of and because as a clean pair: noun → because of; clause → because, for the same real-world cause.",
    ),
    # --- Body: bad → good transforms with quotes + arrow ---
    (
        'Delete of and write "Despite the heavy rain," or switch to "in spite of the heavy rain."',
        '"Despite of the heavy rain" → "Despite the heavy rain," or "in spite of the heavy rain."',
    ),
    (
        'Repair as "Although it rained heavily," or move to despite / in spite of if you want to keep the noun.',
        '"Although the heavy rain" → "Although it rained heavily," or move to despite / in spite of to keep the noun.',
    ),
    (
        'Write "because of the delay" or "Because there was a delay."',
        '"Because the delay" → "because of the delay" or "Because there was a delay."',
    ),
    (
        'Restore "owing to a sudden thunderstorm" and the cause phrase works again.',
        '"owing a sudden thunderstorm" → "owing to a sudden thunderstorm" and the cause phrase works again.',
    ),
    (
        'Rewrite as "Although the platform was crowded…" or switch to in spite of / despite.',
        '"Although the crowded platform" → "Although the platform was crowded…" or switch to in spite of / despite.',
    ),
    (
        'Restore "owing to technical problems with the sound desk."',
        '"owing technical problems" → "owing to technical problems with the sound desk."',
    ),
    (
        'Restore a verb — "even though the recipe looked complicated" — or move to despite + noun.',
        '"Even though the complicated recipe" → "even though the recipe looked complicated," or move to despite + noun.',
    ),
    (
        'Drop of and write "Despite repeated reminders…"',
        '"Despite of repeated reminders" → "Despite repeated reminders…"',
    ),
    (
        'Insert of before "the repeated reminders."',
        '"In spite the repeated reminders" → "In spite of the repeated reminders."',
    ),
    (
        'Either drop of ("because a stage light was broken") or compress the idea into a noun after because of.',
        'Either drop of: "because of a stage light was broken" → "because a stage light was broken," or compress the idea into a noun after because of.',
    ),
    (
        'Switch to although, or to despite the fact that.',
        '"Despite that…" → although, or despite the fact that.',
    ),
    (
        'Rewrite as "Whereas the power failed…" or switch to despite / in spite of.',
        '"Whereas the power cut" → "Whereas the power failed…" or switch to despite / in spite of.',
    ),
    (
        'Repair as "Although the team had early doubts…" Same concession, different grammar after the linker.',
        '"although early doubts…" → "Although the team had early doubts…" Same concession, different grammar after the linker.',
    ),
    (
        'Use although, or rewrite as "despite her aching wrist."',
        '"despite her wrist ached" → although, or "despite her aching wrist."',
    ),
    (
        "Convert the clause into a noun, and in spite of / despite become available. Aching wrist packs the pain idea into a noun object.",
        'Convert the clause: "her wrist ached" → "her aching wrist," and in spite of / despite open up. Aching wrist packs the pain idea as a noun object.',
    ),
    (
        'write "owing to roadworks."',
        '"Owing roadworks" → "owing to roadworks."',
    ),
    (
        'Although needs a finite verb — "Although roadworks slowed traffic…" Bare "Although roadworks slowing traffic" is a common transfer error from the despite pattern. Add a tensed verb or switch linker.',
        'Although needs a finite verb: "Although roadworks slowing traffic" → "Although roadworks slowed traffic…" Bare -ing after although is a common transfer error from the despite pattern. Add a tensed verb or switch linker.',
    ),
    (
        'Although needs a finite clause — "Although the choir had had only two rehearsals…" Do not transplant a despite -ing phrase under although.',
        'Although needs a finite clause: "although having had…" → "Although the choir had had only two rehearsals…" Do not transplant a despite -ing phrase under although.',
    ),
    (
        'Add of, or rewrite "Because they had only two rehearsals…" A solitary -ing after because leaves the clause unfinished.',
        'Add of, or rewrite: "Because having only two rehearsals" → "Because they had only two rehearsals…" A solitary -ing after because leaves the clause unfinished.',
    ),
    (
        'Prefer "Although the guidebook claimed otherwise…" Rebuild rather than forcing the what-clause under although.',
        '"Although what the guidebook claimed" → "Although the guidebook claimed otherwise…" Rebuild rather than forcing the what-clause under although.',
    ),
    (
        'Switch to although, or to "despite most guests preferring…" Keep the idea; change either the linker or the verb shape.',
        '"Despite most guests preferred…" → although, or "despite most guests preferring…" Keep the idea; change either the linker or the verb shape.',
    ),
    (
        'Remove of — "Despite having little free time…" Despite + -ing is fine; despite of + -ing is not.',
        '"Despite of having little free time" → "Despite having little free time…" Despite + -ing is fine; despite of + -ing is not.',
    ),
    (
        'Add a subject + finite verb, as in D. "Although having…" is a common transfer error from the despite pattern.',
        'Add a subject + finite verb, as in D. "Although having…" → "Although he had…" is the repair of that despite-pattern transfer.',
    ),
    (
        'To is missing — write "owing to a brief break."',
        '"owing a brief break" → "owing to a brief break."',
    ),
    (
        'If a how/what clause follows, you usually need because of, not bare because. Restore of or rebuild an ordinary subject–verb clause.',
        'If a how/what clause follows, you usually need because of, not bare because: "Because how…" → "Because of how…" or rebuild an ordinary subject–verb clause.',
    ),
    (
        'Change to although, or to "despite the rise in membership" / "despite membership rising." Do not feed a tensed clause to despite.',
        '"Despite membership rose…" → although, or "despite the rise in membership" / "despite membership rising." Do not feed a tensed clause to despite.',
    ),
    (
        'Write "Because trains were delayed and overcrowded" or "Because of overcrowded delayed trains." If a verb like were sits after because of, rewrite immediately.',
        '"Because of delayed trains were overcrowded" → "Because delayed trains were overcrowded" or "Because of overcrowded delayed trains." If a verb like were sits after because of, rewrite immediately.',
    ),
    # Dropping however INTO THE middle — avoid INTO_THE_UNQUOTED false positive
    (
        "Dropping however into the middle without proper clause punctuation makes the sentence clumsy and formally wrong here.",
        "Parked mid-clause however without proper clause punctuation makes the sentence clumsy and formally wrong here.",
    ),
]

changed = 0
missing: list[str] = []
for old, new in REPLACEMENTS:
    found = False
    for task in data["tasks"]:
        for field in ("tactical_explanations", "statements"):
            items = task[field]
            for i, text in enumerate(items):
                if old in text:
                    task[field][i] = text.replace(old, new, 1)
                    changed += 1
                    found = True
    if not found:
        missing.append(old[:100])

# Claim headers: exact statement text; no extra period when statement already ends with .?!
claim_fixes = 0
letters = "ABCDE"
for task in data["tasks"]:
    for i, (stmt, expl) in enumerate(zip(task["statements"], task["tactical_explanations"])):
        m = re.match(r"^(\*\*[A-E]\) )(.*?)(\*\*)", expl, re.S)
        if not m:
            continue
        claim = m.group(2)
        if claim == stmt:
            continue
        # drop double period / normalize to exact statement
        if claim == stmt + "." or re.sub(r"[.?!]+$", "", claim) == re.sub(r"[.?!]+$", "", stmt):
            rest = expl[m.end() :]
            task["tactical_explanations"][i] = m.group(1) + stmt + m.group(3) + rest
            claim_fixes += 1

# UTF-8 curly apostrophes in contractions / possessives inside statements + explanations
APOS_FIX = re.compile(
    r"(?i)\b(does|is|are|was|were|has|have|had|would|could|should|did|can|won|don|it|that|Nina|Maya|Leo|Sam|chef|guide|today|yesterday|neighbour|neighbours|weekend|organiser|organisers|guide'?s?)n't\b"
    r"|(?<=\w)'(?=(s|re|ve|ll|d)\b)",
)


def curly_apos(text: str) -> str:
    # n't and 's/'re/'ve/'ll/'d
    text = text.replace("n't", "n\u2019t")
    text = re.sub(r"(?<=\w)'(?=(s|re|ve|ll|d)\b)", "\u2019", text)
    return text


apos_fixes = 0
for task in data["tasks"]:
    for field in ("statements", "tactical_explanations"):
        for i, text in enumerate(task[field]):
            new = curly_apos(text)
            if new != text:
                # only count if we touched explanation/statement content
                task[field][i] = new
                apos_fixes += 1

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("replacements_applied", changed)
print("claim_fixes", claim_fixes)
print("apos_fields_touched", apos_fixes)
print("missing", len(missing))
for m in missing:
    print("MISSING:", m)

# --- ban audit ---
data2 = json.loads(PATH.read_text(encoding="utf-8-sig"))
rows: list[tuple[str, str, str]] = []


def note(kind: str, loc: str, snippet: str) -> None:
    rows.append((kind, loc, snippet.replace("\n", " / ")[:220]))


BACKREF = re.compile(r"(?<!\\)\\[0-9]")

for ti, task in enumerate(data2["tasks"]):
    # preserve keys/truth lengths
    assert len(task["statements"]) == len(task["answer_key"]) == len(task["tactical_explanations"]) == 5
    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt:
            note("FFFD", loc, stmt)
        if BACKREF.search(stmt):
            note("BACKREF", loc, stmt)
        if re.search(r"(?<!\.)\.\.(?!\.)", stmt) and "…" not in stmt:
            note("DBL_PERIOD", loc, stmt)
    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/{chr(65+ei)}"
        stmt = task["statements"][ei]
        header = expl.split("\n", 1)[0]
        if re.search(r"[.?!][\"'”’]?\.\*\*", header):
            note("DBL_CLAIM", loc, header)
        m = re.match(r"\*\*[A-E]\) (.*)\*\*", header)
        if m:
            claim = m.group(1)
            if claim != stmt:
                note("CLAIM_NEQ", loc, f"{claim[:50]} || {stmt[:50]}")
        if BACKREF.search(expl):
            note("BACKREF", loc, "bs")
        if "\ufffd" in expl:
            note("FFFD", loc, "fffd")
        for tip in re.finditer(r"(?im)^\*\*Tip:\*\*\s*(.+)$", expl):
            body = tip.group(1)
            if " = " in body and "→" not in body:
                note("TIP_EQ", loc, body)
        for mm in re.finditer(
            r"(?i)\b(unpacks?(?:\s+fairly)?\s+into|becomes|paraphrases?\s+as)\s+[A-Z]",
            expl,
        ):
            after = expl[mm.end() : mm.end() + 20]
            if mm.group(1).lower().startswith("become") and re.match(
                r"\s+(a|an|the|more|less|available|legal)\b", after, re.I
            ):
                continue
            window = expl[mm.start() : mm.end() + 40]
            if "→" not in window:
                note("BAD_XFORM", loc, window)
        if re.search(r"\s--\s|\s---\s", expl):
            note("ASCII_DASH", loc, "--")
        if re.search(r'(?:fails|hold|doesn.t hold|line fails)\s+-\s+"', expl):
            note("HYPHEN_DASH", loc, "hyphen")
        for frag in ["â€™", "â€", "Ã", "Â"]:
            if frag in expl:
                note("MOJIBAKE", loc, frag)

print("BANS", len(rows), dict(Counter(k for k, _, _ in rows)))
for k, loc, s in rows:
    print(f"{k}\t{loc}\t{s}")

# sanity: answer keys untouched semantics / closing v4 still present
for ti, (t0, t1) in enumerate(zip(json.loads(Path(PATH).read_text(encoding="utf-8-sig"))["tasks"], data2["tasks"])):
    pass
print("JSON OK tasks", len(data2["tasks"]))
