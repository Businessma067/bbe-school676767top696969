# -*- coding: utf-8 -*-
import json
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src" / "data" / "mock-exam-demo-sourced.json"
data = json.loads(PATH.read_text(encoding="utf-8"))

old = """Compute the discriminant:

$$
(-1)^{2}=1
$$

$$
4\\cdot(-8)=-32
$$

$$
1-(-32)=33
$$

Apply the quadratic formula:

$$
x=\\frac{1\\pm\\sqrt{33}}{2}
$$"""

new = """Discriminant and roots:

$$
(-1)^{2}-4\\cdot(-8)=1+32=33\\qquad x=\\frac{1\\pm\\sqrt{33}}{2}
$$"""

for task in data["math"]:
    if task["case_id"] != "DEMO MATH 4.H02":
        continue
    te = task["tactical_explanations"][3]
    if old not in te:
        raise SystemExit("MISS")
    task["tactical_explanations"][3] = te.replace(old, new, 1)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("fixed D")
    break
