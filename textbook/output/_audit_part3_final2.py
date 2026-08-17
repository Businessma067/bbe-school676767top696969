import re
from pathlib import Path

t = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
real = []
for n in range(81, 124):
    i = t.find(f"id: `math-11-{n}`")
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    block = t[j:k]
    for m in re.finditer(r"(\d)\$, \$(\d{3})(?!\d)", block):
        real.append((n, m.group(0), block[max(0, m.start() - 20) : m.end() + 20]))
    # also \\\approx
    if re.search(r"\\{3,}approx", block):
        real.append((n, "approx", "triple"))
    # $At 
    if re.search(r"\$At ", block):
        real.append((n, "$At", "eng"))

print("real thousands scars", len(real))
for r in real[:20]:
    print(r)

# digits outside for part3 steps
bad = 0
for n in range(81, 124):
    i = t.find(f"id: `math-11-{n}`")
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    for line in t[j:k].splitlines():
        m = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
        if not m:
            continue
        body = m.group(1)
        tmp = body.replace("\\$", "")
        outside = re.sub(r"\$[^$]*\$", "", tmp)
        if re.search(r"\d", outside):
            bad += 1
            print("DIGIT OUT", n, body[:120])
print("digits_outside", bad)
print("OK sample 81 done")
