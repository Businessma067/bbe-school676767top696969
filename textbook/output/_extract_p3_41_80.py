import re
path = r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts"
with open(path, encoding="utf-8") as f:
    text = f.read()
out = []
for n in range(41, 81):
    tid = f"math-11-{n}"
    m = re.search(rf"id: `{tid}`,", text)
    if not m:
        out.append(f"MISSING {tid}")
        continue
    start = m.start()
    m2 = re.search(r"id: `math-11-\d+`,", text[start + 10 :])
    end = start + 10 + m2.start() if m2 else len(text)
    chunk = text[start:end]
    p3 = re.search(r"\*\*Part 3: Solve\.\*\*(.*?)(?=\*\*Answer\.\*\*|$)", chunk, re.S)
    if not p3:
        out.append(f"NO PART3 {tid}")
        continue
    body = p3.group(1).strip()
    out.append("=" * 60)
    out.append(tid)
    out.append(body)
    out.append("")
out_path = r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_p3_41_80.txt"
with open(out_path, "w", encoding="utf-8") as f:
    f.write("\n".join(out))
print(f"Wrote {out_path}, {len(out)} lines")
