from pathlib import Path
t = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
i = t.find("id: `math-11-81`")
j = t.find("**Part 3: Solve.**", i)
k = t.find("**Answer.**", j)
print(t[j:k])
