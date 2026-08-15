# -*- coding: utf-8 -*-
"""Apply deep semantic fixes to g.7.json"""
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.7.json")
data = json.loads(p.read_text(encoding="utf-8"))
by_id = {t["id"]: t for t in data["tasks"]}

# --- T01 D: missing **true**; fix highlight refuse→refused ---
t = by_id["en-g-7-01"]
t["highlights"][3] = "refused to share"
t["tactical_explanations"][3] = (
    "**D) Noah refused to share his notes before the chemistry quiz.**\n\n"
    "Refuse correctly pairs with a to-infinitive: \"refuse to share.\" "
    "The meaning is a willful no — he will not share the notes — and English packages that as refuse + to + verb. "
    "Nothing after the chemistry quiz changes the complement.\n\n"
    "Refuse packages a willful no with to + verb, so refuse to share keeps the wording **true**.\n"
)

# --- T02 B: highlight enjoy→enjoys ---
t = by_id["en-g-7-02"]
t["highlights"][1] = "enjoys reading"

# --- T03 E: missing **true** ---
t = by_id["en-g-7-03"]
t["tactical_explanations"][4] = (
    "**E) The driver refused to open the boot without seeing ID.**\n\n"
    "Refuse + to-infinitive is correct: \"refused to open the boot without seeing ID.\" "
    "Refusal language almost always pairs with to + base verb, and this line does it right. "
    "The ID condition sits after the infinitive without rewriting refuse's pattern.\n\n"
    "Refusal language pairs with to + base verb, so refused to open is **true**.\n"
)

# --- T06 B: missing **true** ---
t = by_id["en-g-7-06"]
t["tactical_explanations"][1] = (
    "**B) Kids usually enjoy building sandcastles at low tide.**\n\n"
    "Enjoy + gerund is correct: \"enjoy building sandcastles at low tide.\" "
    "Building is the liked activity, so -ing is required. Enjoy to build would be the wrong camp.\n\n"
    "Building is the liked activity, so enjoy + -ing keeps the wording **true**.\n"
)

# --- T07 E: bad dual repair; missed-announcement sense prefers purpose + listen to ---
t = by_id["en-g-7-07"]
t["tactical_explanations"][4] = (
    "**E) He stopped to listen music and missed the announcement.**\n\n"
    "Two faults stack here. Listen needs to before its object (\"listen to music\"), and the "
    "missed-announcement outcome fits a purpose pause — he interrupted something in order to listen, "
    "so attention went to the music instead of the announcement. "
    "Quit-listening (\"stopped listening\") would make missing the announcement harder to motivate.\n\n"
    "**Trap:** \"Stop to listen music\" drops listen's to and leaves stop's sense under-specified.\n\n"
    "Missing to after listen breaks the line, and the coherent repair is purpose + listen to, so this is **false**: "
    "\"He stopped to listen to music and missed the announcement.\"\n"
)

# --- T08 A: pronoun she→speaker; E: unbold false friend ---
t = by_id["en-g-7-08"]
t["tactical_explanations"][0] = (
    "**A) I avoid checking social media before breakfast.**\n\n"
    "Avoid + gerund is correct: \"avoid checking social media before breakfast.\" "
    "That is a habit the speaker tries not to do, which is classic avoid + -ing. "
    "Avoid to check would be the crossed pattern.\n\n"
    "Habit-avoidance after avoid takes -ing, so avoid checking is **true**.\n"
)
t["tactical_explanations"][4] = (
    "**E) She refused helping with the dishes until her homework was done.**\n\n"
    "Refuse needs to + verb — \"refused to help with the dishes,\" not \"refused helping.\" "
    "Refuse + -ing is a classic false friend with avoid and enjoy. "
    "The homework condition does not unlock a gerund after refuse.\n\n"
    "**Trap:** Refuse + -ing mimics avoid wrongly — flip → to + verb.\n\n"
    "Refuse + -ing mimics avoid wrongly, so the line is **false**: "
    "\"She refused to help with the dishes until her homework was done.\"\n"
)

# --- T11 A: missing **true**; C: missing **false** ---
t = by_id["en-g-7-11"]
t["tactical_explanations"][0] = (
    "**A) We decided not to climb the ridge after the weather warning.**\n\n"
    "Decide + not + to-infinitive is the correct negation: \"decided not to climb the ridge.\" "
    "You negate the infinitive with not before to, not by switching to a gerund. "
    "The weather warning explains why, without changing the pattern.\n\n"
    "Negating decide's plan puts not before to, so decided not to climb is **true**.\n"
)
t["tactical_explanations"][2] = (
    "**C) They refused not to apologise, even though everyone expected it.**\n\n"
    "The intended sense here is almost always \"refused to apologise\" (would not apologise). "
    "\"Refused not to apologise\" stacks a second not onto refuse and reads as a muddled double negation "
    "unless you truly mean they insisted on apologising. "
    "\"Even though everyone expected it\" sets up contrast with a refusal to apologise, so the stacked not fails as written.\n\n"
    "**Trap:** Refused not to usually muddles refuse to; put not only when you truly mean \"refuse to not do X.\"\n\n"
    "The natural reading is wouldn't apologise, so refused not to muddles the sense and the line is **false**: "
    "\"They refused to apologise, even though everyone expected it.\"\n"
)

# --- T16 A: missing **true**; E: WRONG KEY enjoy when → false ---
t = by_id["en-g-7-16"]
t["answer_key"][4] = False
t["tactical_explanations"][0] = (
    "**A) What made them stop to check the tyre pressure was a strange vibration.**\n\n"
    "Stop to check means pause driving in order to check the tyre pressure after a strange vibration. "
    "The cleft \"what made them…\" still keeps stop's meaning split intact. "
    "Purpose of the pause is what the to-infinitive marks.\n\n"
    "Cleft framing does not rewrite purpose after stop, so stop to check inside What made them… is **true**.\n"
)
t["tactical_explanations"][4] = (
    "**E) He enjoys when friends drop by without calling first.**\n\n"
    "Bare enjoy + when-clause is not careful exam English. Prefer anticipatory it "
    "(\"enjoys it when friends drop by\") or a gerund/noun object. "
    "A when-clause after enjoy does not unlock enjoy to + verb either — the gap is the missing it (or a rephrase), not an infinitive.\n\n"
    "**Trap:** Enjoy when… sounds fluent but careful English wants enjoy it when… / enjoy + -ing.\n\n"
    "Bare enjoy + when without it falls short in exam English, so this is **false** — "
    "\"He enjoys it when friends drop by without calling first.\"\n"
)
t["solution_overview"] = (
    "Four lines are sound once you separate stop's two meanings and allow decide that; "
    "bare enjoy + when still needs repair.\n\n"
    "**Part 1: What to watch for.**\n\n"
    "Cleft frames do not rewrite stop to versus stop -ing. Consider still wants -ing. "
    "Decide that + clause is a grammatical alternative to decide to. "
    "Bare enjoy + when is not — use enjoy it when, or enjoy + -ing / noun.\n\n"
    "**Part 2: How to decide.**\n\n"
    "Check stop by meaning first, then accept legal clause objects after decide. "
    "Do not treat every informal clause after enjoy as automatically fine.\n\n"
    "**Answer.** A=TRUE, B=TRUE, C=TRUE, D=TRUE, E=FALSE"
)

# --- T19 D: WRONG KEY enjoy that → false ---
t = by_id["en-g-7-19"]
t["answer_key"][3] = False
t["tactical_explanations"][3] = (
    "**D) He enjoys that his sister always remembers his birthday.**\n\n"
    "Enjoy does not take a bare that-clause as object in standard exam English. "
    "Repair with the fact that, a gerund paraphrase, or a different verb (like / love). "
    "His sister remembering the birthday is a fact/situation — but enjoy still needs a noun-like object, not that + clause alone.\n\n"
    "**Trap:** Enjoy that… looks parallel to promise that / decide that, but enjoy is not in that club.\n\n"
    "A bare that-clause after enjoy is not standard, so this is **false** — "
    "\"He enjoys the fact that his sister always remembers his birthday.\"\n"
)
t["solution_overview"] = (
    "Minimal pairs, that-clause alternatives where they are legal, and the idiom stop short of -ing. "
    "Confirm which structure is actually complementing which verb.\n\n"
    "**Part 1: What to watch for.**\n\n"
    "Avoid keeps -ing even after a fronted participle clause; the to version is the false twin. "
    "Promise that is a valid clause object; enjoy that is not — prefer the fact that or a rephrase. "
    "Stop short of + -ing nests another verb's complement inside an idiom.\n\n"
    "**Part 2: How to decide.**\n\n"
    "Compare near-identical lines first. Then check whether that-clauses or idioms are carrying the object, "
    "and whether that verb actually allows a that-clause.\n\n"
    "**Answer.** A=TRUE, B=FALSE, C=TRUE, D=FALSE, E=TRUE"
)

# --- T20 A: missing **true**; A closing was soft ---
t = by_id["en-g-7-20"]
t["tactical_explanations"][0] = (
    "**A) Had they considered postponing, they might have decided to wait for clearer skies.**\n\n"
    "Consider + gerund and decide + to-infinitive are both correct inside a conditional: "
    "had they considered postponing, they might have decided to wait. "
    "Complex syntax still respects each verb's fixed complement.\n\n"
    "**Tip:** Complex syntax still respects each verb's fixed complement.\n\n"
    "Conditional wrappers still leave consider with -ing and decide with to, so both complements stand and the line is **true**.\n"
)

p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("Wrote", p)

# Verify
data2 = json.loads(p.read_text(encoding="utf-8"))
assert data2["tasks"][15]["answer_key"] == [True, True, True, True, False]
assert data2["tasks"][18]["answer_key"] == [True, False, True, False, True]

issues = []
letters = "ABCDE"
for task in data2["tasks"]:
    for i, (k, s, e) in enumerate(zip(task["answer_key"], task["statements"], task["tactical_explanations"])):
        letter = letters[i]
        import re
        m = re.match(r"\*\*([A-E])\) (.*)\*\*\n", e)
        assert m and m.group(1) == letter
        claim = m.group(2)
        expected = s if s.rstrip().endswith((".", "?", "!")) else s + "."
        if claim != expected:
            issues.append(("CLAIM", task["id"], letter, claim, expected))
        verdict = e.strip().split("\n\n")[-1]
        if k and "**true**" not in verdict:
            issues.append(("MISS_TRUE", task["id"], letter, verdict))
        if (not k) and "**false**" not in verdict:
            issues.append(("MISS_FALSE", task["id"], letter, verdict))
print("Post-verify issues:", len(issues))
for x in issues:
    print(x)
