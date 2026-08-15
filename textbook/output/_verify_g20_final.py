# -*- coding: utf-8 -*-
import json
import re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
text = p.read_text(encoding="utf-8-sig")
# capitalize One item tip
old = 'one item → "criterion"; several → "criteria".'
new = 'One item → "criterion"; several → "criteria".'
if old in text:
    text = text.replace(old, new, 1)
    p.write_text(text, encoding="utf-8")
    print("capitalized One item")
else:
    print("One item already ok or missing")

d = json.loads(p.read_text(encoding="utf-8-sig"))
assert len(d["tasks"]) == 20
n = 0
bans = []
for ti, t in enumerate(d["tasks"]):
    assert len(t["statements"]) == len(t["answer_key"]) == len(t["tactical_explanations"]) == 5
    for ei, (s, e) in enumerate(zip(t["statements"], t["tactical_explanations"])):
        n += 1
        m = re.match(r"^\*\*([A-E])\)\s*(.+?)\*\*", e.strip(), re.S)
        assert m and m.group(1) == chr(65 + ei) and m.group(2) == s
        if "\\1" in e or "\\1" in s or "\ufffd" in e or "\ufffd" in s:
            bans.append(("BACKREF", ti + 1, ei))
        if re.search(r"(?i)must become\s+(?![\"""])", e):
            bans.append(("MUST_BECOME", ti + 1, ei))
        if re.search(r"(?i)Who's equals", e):
            bans.append(("WHO_EQUALS", ti + 1, ei))
        m2 = re.search(
            r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]',
            e,
        )
        if (
            m2
            and "→" not in m2.group(0)
            and re.search(r"(?i)\b(equals?|becomes?|unpacks?|paraphrases?|maps?)\b", m2.group(0))
            and "equal weight" not in m2.group(0).lower()
            and not re.match(r"(?i)equal\s", m2.group(0))
        ):
            bans.append(("PARA_GAP", ti + 1, chr(65 + ei), m2.group(0)[:60]))
        cm = re.match(r"^(\*\*[A-E]\).+?\*\*)", e.strip(), re.S)
        if cm and re.search(r'\."\.\*\*$', cm.group(1).replace("\n", " ")):
            bans.append(("CLAIM_DBL", ti + 1, ei))

out = Path(__file__).with_name("_verify_g20_final.txt")
out.write_text(f"items={n}\nbans={len(bans)}\n" + "\n".join(map(str, bans)) + "\n", encoding="utf-8")
print(f"items={n} bans={len(bans)}")
