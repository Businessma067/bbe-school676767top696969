# -*- coding: utf-8 -*-
"""Apply deep-semantic fixes to g.12 tactical_explanations only."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(PATH.read_text(encoding="utf-8-sig"))

# Map: (task_index 0-based, expl_index 0-based) -> exact old expl substring replacements
# Prefer whole-explanation replacements for safety when multiple spots change.

FIXES: dict[tuple[int, int], str] = {}

# --- Task 1 ---
FIXES[(0, 1)] = """**B) Despite of the heavy rain, we finished the outdoor photography session.**

The word of after despite is never standard English. The noun phrase itself is fine — only the extra preposition breaks the linker. "Despite of the heavy rain" → "Despite the heavy rain," or "in spite of the heavy rain."

**Trap:** "Despite of" is a high-frequency exam near-miss because in spite of does need of.

Despite never takes of, so the line is **false**; the sound versions are "Despite the heavy rain, we finished the outdoor photography session." or "In spite of the heavy rain, we finished the outdoor photography session."
"""

FIXES[(0, 3)] = """**D) Because the delay, the museum tour started twenty minutes late.**

Because introduces a clause, so "Because the delay" leaves you hanging with only a noun. "Because the delay" → "because of the delay" or "Because there was a delay." Cause linkers: because → clause; because of → noun.

**Tip:** Because + noun → insert of, or rebuild as a full clause.

Because wants a clause, not a bare noun, so the wording is **false** — "Because of the delay, the museum tour started twenty minutes late." or "Because there was a delay, the museum tour started twenty minutes late."
"""

FIXES[(0, 4)] = """**E) The picnic was cancelled owing a sudden thunderstorm.**

The fixed causal unit is owing to + noun. Here to is missing, so "owing a sudden thunderstorm" fails even though the meaning is clear. "owing a sudden thunderstorm" → "owing to a sudden thunderstorm" and the cause phrase works again.

**Tip:** Treat "owing to" as one linker; if to is gone, the pattern collapses.

The fixed causal linker is owing to, so this is **false** — "The picnic was cancelled owing to a sudden thunderstorm."
"""

# --- Task 2 B ---
FIXES[(1, 1)] = """**B) Although the crowded platform, Maya found a seat on the morning train.**

Although cannot sit in front of a bare noun phrase such as "the crowded platform." "Although the crowded platform" → "Although the platform was crowded…" or switch to in spite of / despite. The missing finite verb is what makes although illegal here.

**Trap:** A noun after although is usually a despite transplant that still looks plausible at speed.

Although cannot govern a bare noun, so the line is **false** — "Although the platform was crowded, Maya found a seat on the morning train."
"""

# --- Task 4 A ---
FIXES[(3, 0)] = """**A) Despite of repeated reminders, Nina forgot to water the balcony plants.**

Despite never partners with of. The noun phrase "repeated reminders" is fine; the extra preposition is the only error. "Despite of repeated reminders" → "Despite repeated reminders…"

**Trap:** Despite of looks parallel to in spite of, which is why this trap catches so many learners.

Despite never partners with of, so the line is **false** — "Despite repeated reminders, Nina forgot to water the balcony plants."
"""

# --- Task 7 B ---
FIXES[(6, 1)] = """**B) Despite that the kitchen was tiny, they hosted a lively dinner.**

"Despite that" + clause is non-standard in careful exam English. "Despite that…" → "Although…" or "despite the fact that…" Do not force despite to swallow a bare that-clause.

**Trap:** Despite that sounds like a neat shortcut beside despite the fact that — and that is the near-miss.

Bare "despite that" + clause is non-standard in careful exam English, so the line is **false** — "Although the kitchen was tiny, they hosted a lively dinner."
"""

# --- Task 8 E: prefer in spite of repair matching D's meaning ---
FIXES[(7, 4)] = """**E) Whereas the power cut, the audience stayed in their seats.**

Whereas requires a full clause, not a noun phrase. "Whereas the power cut" → "Whereas the power failed…" or switch to despite / in spite of. Contrast linkers are not interchangeable without rewriting what follows.

**Trap:** Whereas + the same noun that works after in spite of is a neat swap trap.

Whereas cannot take a bare noun phrase, so the wording is **false** — "In spite of the power cut, the audience stayed in their seats."
"""

# --- Task 9 E ---
FIXES[(8, 4)] = """**E) Early doubts were widespread, the results however still matched the prediction with no change in word order.**

Parked mid-clause however without proper clause punctuation makes the sentence clumsy and formally wrong here. Park however at a clause edge with a semicolon or period, or set it off as a legal parenthetical. Do not leave it as a loose insert between two clauses glued by a comma.

**Trap:** Loose mid-clause however with weak punctuation is a polished-looking splice at this difficulty.

Loose mid-clause however without strong punctuation fails here, so the wording is **false** — "Early doubts were widespread; however, the results still matched the prediction."
"""

# --- Task 9 C: keep original order in repair ---
FIXES[(8, 2)] = """**C) The experiment succeeded although early doubts from the lab team.**

Although cannot take "early doubts…" without a verb. "although early doubts…" → "although the team had early doubts…" Same concession, different grammar after the linker.

**Trap:** Although + noun looks like a quick rewrite of the despite line and is a mid-level transplant trap.

Although needs a verb after it, so this is **false** — "The experiment succeeded although the team had early doubts from the lab team."
"""

# --- Task 10 E ---
FIXES[(9, 4)] = """**E) Even though high pollen levels, a few athletes still trained outdoors.**

Even though cannot take a bare noun phrase such as "high pollen levels." Switch to despite high pollen levels, or add a verb after even though. Same outdoor-training idea, wrong follow-on.

**Trap:** Even though + noun is the sister trap to although + noun — plausible if you just saw despite + noun.

Even though cannot take a bare noun phrase, so the wording is **false** — "Even though pollen levels were high, a few athletes still trained outdoors."
"""

# --- Task 11 B: comma to match A ---
FIXES[(10, 1)] = """**B) She kept painting despite her wrist ached after every session.**

Despite cannot take the finite clause "her wrist ached." "despite her wrist ached" → "although her wrist ached" or "despite her aching wrist." Do not feed a tensed clause directly to despite.

**Trap:** Despite + subject + verb is a mid/hard near-miss when the meaning is clearly concessive.

Despite cannot swallow a finite clause, so this is **false** — "She kept painting, although her wrist ached after every session."
"""

# --- Task 12 D ---
FIXES[(11, 3)] = """**D) Although roadworks slowing traffic, several passengers still made their connections.**

Although needs a finite verb: "Although roadworks slowing traffic" → "Although roadworks slowed traffic…" Bare -ing after although is a common transfer error from the despite pattern. Add a tensed verb or switch linker.

**Trap:** Although + -ing transplants the legal despite line and looks nearly grammatical.

Although needs a tensed verb, so the line is **false** — "Although roadworks slowed traffic, several passengers still made their connections."
"""

# --- Task 13 D: finite-clause repair (cleaner than awkward because of + -ing) ---
FIXES[(12, 3)] = """**D) Because having only two rehearsals, the conductor shortened the programme.**

Bare because needs subject + verb, not a hanging -ing phrase. Add of, or rewrite: "Because having only two rehearsals" → "Because they had only two rehearsals…" A solitary -ing after because leaves the clause unfinished.

**Trap:** Because + -ing is the ugly twin of legal because of + -ing — easy to miss at speed.

Bare because cannot hang an -ing phrase alone, so the wording is **false** — "Because they had only two rehearsals, the conductor shortened the programme."
"""

# --- Task 14 C ---
FIXES[(13, 2)] = """**C) Although what the guidebook claimed, the gallery was still closed on Mondays.**

Although needs an ordinary clause, not "although what…" without a verb frame that makes sense as although’s partner. "Although what the guidebook claimed" → "Although the guidebook claimed otherwise…" Rebuild rather than forcing the what-clause under although.

**Trap:** Although what… looks parallel to despite what… and is a hard near-miss.

Although what… lacks a normal clause frame, so the line is **false** — "Although the guidebook claimed otherwise, the gallery was still closed on Mondays."
"""

# --- Task 15 E tip coach + closing already fine; fix tip ---
FIXES[(14, 4)] = """**E) Although most guests preferring the terrace, the hosts moved the buffet outside.**

Although still needs "Although most guests preferred…" with a finite verb. Preferring alone after although is not enough. Final check on every although: find the tensed verb, or the line fails.

**Trap:** Although + preferring steals the legal -ing shape from in spite of / because of.

Although still needs tensed preferred, so this is **false** — "Although most guests preferred the terrace, the hosts moved the buffet outside."
"""

# --- Task 16 B ---
FIXES[(15, 1)] = """**B) Despite of having little free time, Sam joined the weekend cycling club.**

"Despite of having little free time" → "Despite having little free time…" Despite + -ing is fine; despite of + -ing is not. One illegal of ruins an otherwise good gerund concession.

**Trap:** Despite of before -ing still looks parallel to in spite of having…

Despite of is never standard, so the line is **false** — "Despite having little free time, Sam joined the weekend cycling club."
"""

# --- Task 20 E tip coach ---
FIXES[(19, 4)] = """**E) Although membership rising at the community garden, the organisers ordered more tools.**

Although still needs "Although membership rose…" with a finite verb. Preferring the -ing shape under although fails the tensed-verb check. Final check on every although: find the tensed verb, or the line fails.

**Trap:** Although + rising steals the legal -ing form from in spite of / because of — a late-section transplant trap.

Although still needs tensed rose, so the wording is **false** — "Although membership rose at the community garden, the organisers ordered more tools."
"""

changed = []
for (ti, ei), new in FIXES.items():
    old = data["tasks"][ti]["tactical_explanations"][ei]
    new = new.strip() + "\n"
    if old == new:
        changed.append((ti + 1, chr(65 + ei), "UNCHANGED"))
        continue
    data["tasks"][ti]["tactical_explanations"][ei] = new
    changed.append((ti + 1, chr(65 + ei), "UPDATED"))

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("wrote", PATH)
for row in changed:
    print(row)

# quick re-validate
import re
from collections import Counter

issues = []
data2 = json.loads(PATH.read_text(encoding="utf-8-sig"))
assert len(data2["tasks"]) == 20
for ti, task in enumerate(data2["tasks"], 1):
    for ei, (stmt, key, expl) in enumerate(
        zip(task["statements"], task["answer_key"], task["tactical_explanations"])
    ):
        loc = f"T{ti}/{chr(65+ei)}"
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", expl, re.S)
        assert m and m.group(1) == chr(65 + ei) and m.group(2) == stmt, loc
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        has_t = bool(re.search(r"\*\*true\*\*", closing, re.I))
        has_f = bool(re.search(r"\*\*false\*\*", closing, re.I))
        if key and not has_t:
            issues.append(("TRUE_NO_T", loc, closing))
        if (not key) and not has_f:
            issues.append(("FALSE_NO_F", loc, closing))
        if key and has_f:
            issues.append(("TRUE_HAS_F", loc, closing))
        if re.search(r"(?i)\b(write |repair to |mark \*\*false\*\*)", closing):
            issues.append(("IMPERATIVE", loc, closing))
        for tip in re.finditer(r"(?im)^\*\*(Tip|Trap):\*\* (.+)$", expl):
            if re.search(r"(?i)mark \*\*false\*\*", tip.group(2)):
                issues.append(("TIP_MARK", loc, tip.group(2)))
        if (not key) and re.search(r"\*\*true\*\*", "\n\n".join(parts[1:-1]), re.I):
            body = "\n\n".join(parts[1:-1])
            if "the **true** version" not in body.lower() and "the **true** version" not in closing.lower():
                # allow only 'true version' pattern in closing of false
                for bt in re.finditer(r".{0,30}\*\*true\*\*.{0,30}", body, re.I):
                    if "true** version" not in bt.group(0).lower():
                        issues.append(("FALSE_BODY_TRUE", loc, bt.group(0)))

print("POST issues", len(issues), Counter(k for k, _, _ in issues))
for row in issues:
    print(row)
