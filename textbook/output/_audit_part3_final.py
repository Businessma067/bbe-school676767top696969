import re
from pathlib import Path

t = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
start = t.find("id: `math-11-81`")
end = t.find("id: `math-11-123`")
# include through end of 123
end = t.find("**Answer.**", t.find("**Part 3: Solve.**", end))
end = t.find("`", end + 20)  # rough
chunk = t[start:]
# find last task end better
last = t.find("id: `math-11-123`")
k = t.find("difficulty_level", last)
chunk = t[start:k]

print("comma splits:", re.findall(r".{0,30}\d\$, \$.{0,30}", chunk))
print("alt:", re.findall(r"\d\$,\s*\$", chunk))
# also verify parse
print("tasks", sum(1 for n in range(81, 124) if f"id: `math-11-{n}`" in t))

# show 81 and 123 part3
for n in (81, 100, 111, 123):
    i = t.find(f"id: `math-11-{n}`")
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    print("====", n, "====")
    print(t[j:k][:500])
    print()
