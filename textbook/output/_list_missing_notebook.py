from pathlib import Path
import re

t = Path("src/data/math-ch1-logic.ts").read_text(encoding="utf-8")
missing = []
for i in range(1, 109):
    if i < 108:
        m = re.search(rf'id: "math-1-{i}"([\s\S]*?)(?=id: "math-1-{i+1}")', t)
    else:
        m = re.search(rf'id: "math-1-{i}"([\s\S]*?)\Z', t)
    chunk = m.group(1) if m else ""
    has_given = "**Given:**" in chunk
    conclusions = chunk.count("**Conclusion:**")
    if not has_given or conclusions != 5:
        missing.append(f"math-1-{i}: Given={'Y' if has_given else 'N'} Conclusions={conclusions}")

print("\n".join(missing) if missing else "ALL_OK")
print("missing_count", len(missing))
