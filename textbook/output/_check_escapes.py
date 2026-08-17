#!/usr/bin/env python3
import re
from pathlib import Path
import importlib.util

spec = importlib.util.spec_from_file_location(
    "rw", r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_rewrite_p3_41_80.py"
)
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

for n in (42, 52):
    body = mod.PART3[n]
    print(f"=== PART3[{n}] first line repr ===")
    print(repr(body.split("\n")[0]))
    print(f"backslash count before times:", body.split("times")[0][-4:])

t = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\math-ch11-financial.ts").read_text(
    encoding="utf-8"
)
for n in (42, 52, 53, 41):
    m = re.search(
        rf"id: `math-11-{n}`,.*?\*\*Part 3: Solve\.\*\*\n\n(.*?)\n\n\*\*Answer\.\*\*",
        t,
        re.S,
    )
    line = m.group(1).split("\n")[0]
    print(f"=== FILE {n} first line repr ===")
    print(repr(line))
