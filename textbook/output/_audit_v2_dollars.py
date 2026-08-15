import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TS = (ROOT / "src" / "data" / "math-ch1-logic.ts").read_text(encoding="utf-8")

# Pull out every JS string literal (double-quoted, JSON.dumps style) for a rough audit.
strs = re.findall(r'"((?:[^"\\]|\\.)*)"', TS)

bad = []
for s in strs:
    # count unescaped $ (a literal "$" in a JSON string is just "$", no backslash needed)
    n = s.count("$")
    if n % 2 != 0:
        bad.append((n, s))

out = [f"total strings {len(strs)}", f"odd-$ strings {len(bad)}"]
for n, s in bad:
    out.append(f"--- n={n} ---")
    out.append(s)
Path(__file__).with_name("_audit_v2_dollars_full.txt").write_text("\n".join(out), encoding="utf-8")
print("wrote report")
