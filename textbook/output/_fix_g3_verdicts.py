"""Fix g.3 missing **true** closings and mid-body polarity bold."""
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.3.json")
data = json.loads(p.read_text(encoding="utf-8"))

replacements = [
    (
        'Keep focusing on "number" as the **true** subject head.',
        'Keep focusing on "number" as the real subject head.',
    ),
    (
        "Modifiers after the nearer noun invite a **false** singular after nor.",
        "Modifiers after the nearer noun invite a wrong singular after nor.",
    ),
    (
        'Nearer singular "aunt" after nor governs the verb, so "has signed" keeps the line intact.',
        'Nearer singular "aunt" after nor governs the verb, so "has signed" keeps the line **true**.',
    ),
    (
        'Several guests is the sense of "a number of guests," so plural "have requested" works here.',
        'Several guests is the sense of "a number of guests," so plural "have requested" is **true**.',
    ),
    (
        'Together-with volunteers stay parenthetical, so singular "has approved" keeps the sentence sound.',
        'Together-with volunteers stay parenthetical, so singular "has approved" keeps the sentence **true**.',
    ),
    (
        '"Every parcel" locks in a singular verb, so "requires" fits cleanly here.',
        '"Every parcel" locks in a singular verb, so "requires" is **true** here.',
    ),
    (
        'Nearer plural "chorus members" after nor take "were ready," so the agreement is clean.',
        'Nearer plural "chorus members" after nor take "were ready," so the agreement is **true**.',
    ),
    (
        '"Every member" takes one vote at a time, so singular "has cast" keeps the sentence sound.',
        '"Every member" takes one vote at a time, so singular "has cast" keeps the sentence **true**.',
    ),
    (
        'Along-with helpers never become co-subjects, so singular "has signed" keeps the sentence sound.',
        'Along-with helpers never become co-subjects, so singular "has signed" keeps the sentence **true**.',
    ),
    (
        'Two conditions remain after the invert, so plural "there remain" is the right framing.',
        'Two conditions remain after the invert, so plural "there remain" is **true**.',
    ),
    (
        'As-well-as secretaries stay parenthetical, so singular "was delayed" keeps the line intact.',
        'As-well-as secretaries stay parenthetical, so singular "was delayed" keeps the line **true**.',
    ),
    (
        'Formal plural "data" takes "do not," so the exam-safe agreement stands here.',
        'Formal plural "data" takes "do not," so the exam-safe agreement is **true**.',
    ),
    (
        'Nearer singular "lawyer" after nor takes "has requested," so this agreement is clean.',
        'Nearer singular "lawyer" after nor takes "has requested," so this agreement is **true**.',
    ),
    (
        'Along-with sous-chefs stay outside the subject, so singular "reviews" keeps the sentence sound.',
        'Along-with sous-chefs stay outside the subject, so singular "reviews" keeps the sentence **true**.',
    ),
    (
        'Formal plural "data" still takes "suggest" under modifiers, so the pattern is right.',
        'Formal plural "data" still takes "suggest" under modifiers, so the pattern is **true**.',
    ),
    (
        'Several clauses is the sense of "a number of clauses," so plural "survive" works here.',
        'Several clauses is the sense of "a number of clauses," so plural "survive" is **true**.',
    ),
    (
        'Three open points remain after the aside, so plural "there remain" keeps the sentence sound.',
        'Three open points remain after the aside, so plural "there remain" keeps the sentence **true**.',
    ),
    (
        'Formal plural "data" pairs with "confirm," so the exam default keeps this line intact.',
        'Formal plural "data" pairs with "confirm," so the exam default keeps this line **true**.',
    ),
    (
        'Together-with advisers stay parenthetical, so singular "has cleared" keeps the wording intact.',
        'Together-with advisers stay parenthetical, so singular "has cleared" keeps the wording **true**.',
    ),
    (
        '"Each of the house agreements" keeps a singular head, so "provides" works here.',
        '"Each of the house agreements" keeps a singular head, so "provides" is **true**.',
    ),
    (
        '"Every parcel" stays singular through the relative clause, so "requires" keeps this intact.',
        '"Every parcel" stays singular through the relative clause, so "requires" keeps this **true**.',
    ),
]

changed = 0
for task in data["tasks"]:
    for i, expl in enumerate(task["tactical_explanations"]):
        orig = expl
        for old, new in replacements:
            if old in expl:
                expl = expl.replace(old, new)
        if expl != orig:
            task["tactical_explanations"][i] = expl
            changed += 1

still = []
for old, new in replacements:
    found_old = any(
        old in expl
        for task in data["tasks"]
        for expl in task["tactical_explanations"]
    )
    found_new = any(
        new in expl
        for task in data["tasks"]
        for expl in task["tactical_explanations"]
    )
    if found_old:
        still.append(("OLD_REMAINS", old[:80]))
    if not found_new:
        still.append(("NEW_MISSING", new[:80]))

p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("changed_explanations", changed)
print("still", still)
json.loads(p.read_text(encoding="utf-8"))
print("json_ok")
