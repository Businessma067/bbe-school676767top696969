from pathlib import Path
import re

t = Path("src/data/math-ch1-logic.ts").read_text(encoding="utf-8")
ids = re.findall(r'id: "(math-1-\d+)"', t)
print("tasks", len(ids), ids[0], ids[-1])
print("Given_count", t.count("**Given:**"))
print("Rule_count", t.count("**Rule:**"))
print("Work_count", t.count("**Work:**"))
print("Results_count", t.count("**Results:**"))
print("Conclusion_count", t.count("**Conclusion:**"))

for start, end in [(1, 27), (28, 54), (55, 81), (82, 108)]:
    given = 0
    conclusion = 0
    for i in range(start, end + 1):
        if i < 108:
            m = re.search(
                rf'id: "math-1-{i}"[\s\S]*?(?=id: "math-1-{i+1}")',
                t,
            )
        else:
            m = re.search(rf'id: "math-1-{i}"[\s\S]*$', t)
        if not m:
            print(f"missing math-1-{i}")
            continue
        chunk = m.group(0)
        given += chunk.count("**Given:**")
        conclusion += chunk.count("**Conclusion:**")
    print(f"{start}-{end}: Given={given} Conclusion={conclusion}")
