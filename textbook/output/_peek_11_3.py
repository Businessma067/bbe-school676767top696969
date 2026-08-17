from pathlib import Path
bak = Path("textbook/output/_math-ch11-financial.bak.ts").read_text(encoding="utf-8")
cur = Path("src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
key = "math-11-3"
for label, t in [("bak", bak), ("cur", cur)]:
    i = t.find("id: `" + key + "`")
    j = t.find("**Part 3: Solve.**", i)
    print("====", label, "====")
    print(t[j : j + 520])
    print()
