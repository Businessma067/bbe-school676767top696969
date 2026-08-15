import json, re
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.4.json")
data = json.loads(p.read_text(encoding="utf-8"))
assert isinstance(data["tasks"], list) and len(data["tasks"]) == 20

issues = []
for task in data["tasks"]:
    tid = task["id"]
    for i, (s, k, e) in enumerate(zip(task["statements"], task["answer_key"], task["tactical_explanations"])):
        letter = "ABCDE"[i]
        m = re.match(r"\*\*([A-E])\) (.*?)\*\*", e)
        assert m and m.group(1) == letter
        assert m.group(2) == s, (tid, letter, m.group(2), s)
        last = e.strip().split("\n\n")[-1]
        bold_in_last = re.findall(r"\*\*(true|false)\*\*", last, re.I)
        if not bold_in_last:
            issues.append(f"{tid} {letter}: no TF in closing: {last[:100]}")
        else:
            expected = "true" if k else "false"
            if expected not in [x.lower() for x in bold_in_last]:
                issues.append(f"{tid} {letter}: closing missing {expected}: {last[:120]}")
        # mid-body bold false/true outside closing (except 'the **true** version' on falses is OK)
        body = "\n\n".join(e.strip().split("\n\n")[:-1])
        mid = re.findall(r"\*\*(true|false)\*\*", body, re.I)
        for tf in mid:
            if tf.lower() == "true" and "true** version" in body.replace(" ", "").lower():
                continue
            # any mid bold TF that isn't the repair phrase
            if re.search(r"\*\*" + tf + r"\*\*", body) and "the **true** version" not in body:
                # allow only if it's 'the **true** version'
                for mm in re.finditer(r".{0,25}\*\*(true|false)\*\*.{0,25}", body, re.I):
                    frag = mm.group(0)
                    if "the **true** version" in frag or "the **true** version" in body[max(0,mm.start()-10):mm.end()+20]:
                        continue
                    if "**true** version" in frag:
                        continue
                    issues.append(f"{tid} {letter}: mid-body bold TF: {frag.replace(chr(10),' ')}")

# known bad SVA should be gone
text = p.read_text(encoding="utf-8")
if "book club do not have" in text:
    issues.append("book club do not still present")

print("JSON ok, tasks", len(data["tasks"]))
print("issues", len(issues))
for x in issues:
    print("-", x)

# recount bold tf closings
missing = 0
for task in data["tasks"]:
    for i, (k, e) in enumerate(zip(task["answer_key"], task["tactical_explanations"])):
        last = e.strip().split("\n\n")[-1]
        expected = "true" if k else "false"
        if not re.search(r"\*\*" + expected + r"\*\*", last, re.I):
            missing += 1
            print("STILL MISSING", task["id"], "ABCDE"[i], expected)
print("missing closings", missing)
