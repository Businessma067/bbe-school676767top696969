from pathlib import Path
import re

t = Path("src/data/math-ch1-logic.ts").read_text(encoding="utf-8")

def chunk(i: int) -> str:
    if i < 108:
        m = re.search(rf'id: "math-1-{i}"([\s\S]*?)(?=id: "math-1-{i+1}")', t)
    else:
        m = re.search(rf'id: "math-1-{i}"([\s\S]*?)\Z', t)
    return m.group(1) if m else ""

for start, end in [(1, 27), (28, 54), (55, 81), (82, 108)]:
    given = sum("**Given:**" in chunk(i) for i in range(start, end + 1))
    work = sum("**Work:**" in chunk(i) for i in range(start, end + 1))
    results = sum("**Results:**" in chunk(i) for i in range(start, end + 1))
    conclusion = sum(chunk(i).count("**Conclusion:**") for i in range(start, end + 1))
    print(f"{start}-{end}: Given={given} Work={work} Results={results} Conclusion={conclusion}")
