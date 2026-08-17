from pathlib import Path

t = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
for n in [1, 40, 41, 52, 80, 81]:
    needle = "id: `math-11-%d`" % n
    i = t.find(needle)
    if i < 0:
        print(n, "missing")
        continue
    j = t.find("**Part 3: Solve.**", i)
    k = t.find("**Answer.**", j)
    print("====", n, "====")
    print(t[j:k][:800])
    print()
