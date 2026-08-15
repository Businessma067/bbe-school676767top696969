import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.14.json")
data = json.loads(p.read_text(encoding="utf-8"))
by_id = {t["id"]: t for t in data["tasks"]}

fixes = []

# --- en-g-14-01 C: dual **false**/**true** closing ---
t = by_id["en-g-14-01"]
old = t["tactical_explanations"][2]
new = old.replace(
    'Insisted that drops third-person agreement, so the line is **false**; the **true** version is "The landlord insisted that the tenant paint the hallway before moving out."',
    'Insisted that drops third-person agreement, so the line is **false** — "The landlord insisted that the tenant paint the hallway before moving out."',
)
assert old != new, "01C"
t["tactical_explanations"][2] = new
fixes.append("en-g-14-01 C: closing dual **true** after **false** → dash repair only")

# --- en-g-14-01 D: rebuild-as direction / quotes ---
old = t["tactical_explanations"][3]
new = old.replace(
    'Rebuild as "that she takes the night train" → "that she take the night train" and the Lisbon plan is fine.',
    '"that she takes the night train" → "that she take the night train" and the Lisbon plan is fine.',
)
assert old != new, "01D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-01 D: rebuild wording (quoted wrong→right with arrow)")

# --- en-g-14-03 overview typo ---
t = by_id["en-g-14-03"]
old = t["solution_overview"]
new = old.replace(
    "Ordinary present agreement and indicative are/are repaired are the traps.",
    'Ordinary present agreement and indicative "is/are + participle" are the traps.',
)
assert old != new, "03ov"
t["solution_overview"] = new
fixes.append('en-g-14-03 overview: garbled "are/are repaired" → "is/are + participle"')

# --- en-g-14-04 B: dual closing ---
t = by_id["en-g-14-04"]
old = t["tactical_explanations"][1]
new = old.replace(
    'Necessary that still wants bare cover, so the line is **false**; the **true** version is "It is necessary that the tent cover the sleeping bags completely."',
    'Necessary that still wants bare cover, so the line is **false** — "It is necessary that the tent cover the sleeping bags completely."',
)
assert old != new, "04B"
t["tactical_explanations"][1] = new
fixes.append("en-g-14-04 B: closing dual **true** after **false** → dash repair only")

# --- en-g-14-04 D: Trap bold false ---
old = t["tactical_explanations"][3]
new = old.replace(
    "Institution subjects like the school often keep a **false** third-person -s.",
    "Institution subjects like the school often keep a false third-person -s.",
)
assert old != new, "04D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-04 D: unbold Trap 'false' (not a verdict token)")

# --- en-g-14-09 C: dual closing ---
t = by_id["en-g-14-09"]
old = t["tactical_explanations"][2]
new = old.replace(
    'Demanded that ticket sales resume needs bare resume, so the line is **false**; the **true** version is "Fans demanded that ticket sales resume immediately."',
    'Demanded that ticket sales resume needs bare resume, so the line is **false** — "Fans demanded that ticket sales resume immediately."',
)
assert old != new, "09C"
t["tactical_explanations"][2] = new
fixes.append("en-g-14-09 C: closing dual **true** after **false** → dash repair only")

# --- en-g-14-10 D: advice says are but statement is ---
t = by_id["en-g-14-10"]
old = t["tactical_explanations"][3]
new = old.replace(
    "Asked that laundry tickets needs be collected, not are, so this is **false**",
    "Asked that laundry tickets needs be collected, not is, so this is **false**",
)
assert old != new, "10D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-10 D: closing 'not are' → 'not is' (statement has is collected)")

# --- en-g-14-13 D: Trap bold true ---
t = by_id["en-g-14-13"]
old = t["tactical_explanations"][3]
new = old.replace(
    "Clustered nouns like inventory counts hide the **true** verb that must stay bare.",
    "Clustered nouns like inventory counts hide the true verb that must stay bare.",
)
assert old != new, "13D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-13 D: unbold Trap 'true' (not a verdict token)")

# --- en-g-14-15 B: Trap bold false ---
t = by_id["en-g-14-15"]
old = t["tactical_explanations"][1]
new = old.replace(
    "Role nouns after imperative that almost always tempt a **false** -s.",
    "Role nouns after imperative that almost always tempt a false -s.",
)
assert old != new, "15B"
t["tactical_explanations"][1] = new
fixes.append("en-g-14-15 B: unbold Trap 'false'")

# --- en-g-14-17 D: Trap bold false ---
t = by_id["en-g-14-17"]
old = t["tactical_explanations"][3]
new = old.replace(
    "Assessment verbs like retake often keep a **false** third-person -s.",
    "Assessment verbs like retake often keep a false third-person -s.",
)
assert old != new, "17D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-17 D: unbold Trap 'false'")

# --- en-g-14-18 D: not are → not is ---
t = by_id["en-g-14-18"]
old = t["tactical_explanations"][3]
new = old.replace(
    "Proposed that membership fees needs be raised, not are, so the sentence is **false**",
    "Proposed that membership fees needs be raised, not is, so the sentence is **false**",
)
assert old != new, "18D"
t["tactical_explanations"][3] = new
fixes.append("en-g-14-18 D: closing 'not are' → 'not is' (statement has is raised)")

# --- en-g-14-20 B: Trap bold false ---
t = by_id["en-g-14-20"]
old = t["tactical_explanations"][1]
new = old.replace(
    "Critical safety wording often keeps a **false** remains after that.",
    "Critical safety wording often keeps a false remains after that.",
)
assert old != new, "20B"
t["tactical_explanations"][3 if False else 1] = new  # index 1 = B
fixes.append("en-g-14-20 B: unbold Trap 'false'")

# write
p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("Wrote", p)
for f in fixes:
    print("-", f)
