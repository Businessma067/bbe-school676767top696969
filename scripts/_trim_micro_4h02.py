# -*- coding: utf-8 -*-
"""Extra micro-step collapse for 4.H02 / 9.H01 E."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src" / "data" / "mock-exam-demo-sourced.json"
data = json.loads(PATH.read_text(encoding="utf-8"))


def walk(obj):
    if isinstance(obj, dict):
        if "case_id" in obj and "tactical_explanations" in obj:
            yield obj
        for v in obj.values():
            yield from walk(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from walk(v)


REPLACEMENTS: dict[str, dict[str, list[tuple[str, str]]]] = {
    "DEMO MATH 4.H02": {
        "A": [
            (
                """Compute the discriminant:

$$
26^{2}=676
$$

$$
4\\cdot 9=36
$$

$$
676-36=640
$$

Apply the quadratic formula:

$$
x=\\frac{26\\pm\\sqrt{640}}{2}
$$

$$
\\sqrt{640}=8\\sqrt{10}
$$

$$
\\frac{26}{2}=13
$$

$$
\\frac{8\\sqrt{10}}{2}=4\\sqrt{10}
$$

$$
x=13\\pm 4\\sqrt{10}
$$""",
                """Discriminant and roots:

$$
26^{2}-4\\cdot 9=676-36=640
$$

$$
x=\\frac{26\\pm\\sqrt{640}}{2}=13\\pm 4\\sqrt{10}
$$""",
            ),
        ],
        "C": [
            (
                """$$
x^{2}-9x+9=0
$$

$$
9^{2}=81
$$

$$
4\\cdot 9=36
$$

$$
81-36=45
$$

$$
x=\\frac{9\\pm\\sqrt{45}}{2}
$$

$$
\\sqrt{45}=3\\sqrt{5}
$$

$$
x=\\frac{9\\pm 3\\sqrt{5}}{2}
$$""",
                """$$
x^{2}-9x+9=0
$$

$$
9^{2}-4\\cdot 9=81-36=45\\qquad x=\\frac{9\\pm\\sqrt{45}}{2}=\\frac{9\\pm 3\\sqrt{5}}{2}
$$""",
            ),
            (
                """$$
x^{2}-3x+1=0
$$

$$
3^{2}=9
$$

$$
4\\cdot 1=4
$$

$$
9-4=5
$$

$$
x=\\frac{3\\pm\\sqrt{5}}{2}
$$""",
                """$$
x^{2}-3x+1=0
$$

$$
3^{2}-4\\cdot 1=9-4=5\\qquad x=\\frac{3\\pm\\sqrt{5}}{2}
$$""",
            ),
        ],
        "D": [
            (
                """$$
(-1)^{2}=1
$$

$$
4\\cdot(-8)=-32
$$

$$
1-(-32)=33
$$

$$
x=\\frac{1\\pm\\sqrt{33}}{2}
$$""",
                """$$
(-1)^{2}-4\\cdot(-8)=1+32=33\\qquad x=\\frac{1\\pm\\sqrt{33}}{2}
$$""",
            ),
        ],
        "E": [
            (
                """$$
(-11)^{2}=121
$$

$$
4\\cdot 22=88
$$

$$
121-88=33
$$

$$
x=\\frac{11\\pm\\sqrt{33}}{2}
$$""",
                """$$
(-11)^{2}-4\\cdot 22=121-88=33\\qquad x=\\frac{11\\pm\\sqrt{33}}{2}
$$""",
            ),
        ],
    },
    "DEMO MATH 9.H01": {
        "E": [
            (
                r"""Substitute $a=3$, $b=-6$, $c=0$, $d=0$:

$$
r(x)=3x^{3}+(-6)x^{2}+0\cdot x+0
$$

$$
r(x)=3x^{3}-6x^{2}
$$

Factor out the common monomial $3x^{2}$:

$$
3x^{3}=3x^{2}\cdot x
$$

$$
-6x^{2}=3x^{2}\cdot(-2)
$$

$$
3x^{3}-6x^{2}=3x^{2}\bigl(x-2\bigr)
$$

$$
r(x)=3x^{2}(x-2)
$$

Expand to verify:

$$
3x^{2}\cdot x=3x^{3}
$$

$$
3x^{2}\cdot(-2)=-6x^{2}
$$

$$
3x^{3}+(-6x^{2})=3x^{3}-6x^{2}
$$

Roots from the factorisation: $x=0$ from $x^{2}$ (multiplicity $2$), and $x=2$ from $x-2$ (multiplicity $1$).

Confirm with the derivative test at $x=0$:

$$
r'(x)=9x^{2}-12x
$$

$$
r'(0)=0\qquad r(0)=0
$$

so multiplicity at least $2$ at $0$. At $x=2$:

$$
r(2)=3\cdot 4\cdot 0=0
$$

$$
r'(2)=9\cdot 4-12\cdot 2
$$

$$
12\cdot 2=24\qquad 36-24=12
$$

$$
r'(2)=12\neq 0
$$

so $x=2$ is a simple root. The claim holds.

So the statement is True.""",
                r"""Substitute $a=3$, $b=-6$, $c=0$, $d=0$:

$$
r(x)=3x^{3}-6x^{2}=3x^{2}(x-2)
$$

Roots from the factorisation: $x=0$ (multiplicity $2$) and $x=2$ (multiplicity $1$). Confirm with the derivative $r'(x)=9x^{2}-12x$:

$$
r'(0)=0\qquad r(0)=0
$$

so multiplicity at least $2$ at $0$. At $x=2$:

$$
r(2)=0\qquad r'(2)=9\cdot 4-12\cdot 2=36-24=12\neq 0
$$

so $x=2$ is a simple root. The claim holds.

So the statement is True.""",
            ),
        ],
    },
}

changed = 0
misses = 0
for case in walk(data):
    cid = case["case_id"]
    if cid not in REPLACEMENTS:
        continue
    for letter, pairs in REPLACEMENTS[cid].items():
        i = "ABCDE".index(letter)
        te = case["tactical_explanations"][i]
        for old, new in pairs:
            if old not in te:
                print("MISS", cid, letter)
                misses += 1
                continue
            te = te.replace(old, new, 1)
            changed += 1
        case["tactical_explanations"][i] = te

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("changed", changed, "misses", misses)

chars: list[int] = []
dds: list[int] = []
for case in walk(data):
    if "MATH" not in case.get("case_id", ""):
        continue
    for te in case["tactical_explanations"]:
        chars.append(len(te))
        dds.append(len(re.findall(r"\$\$", te)) // 2)
print("math avg chars", round(sum(chars) / len(chars)), "avg dd", round(sum(dds) / len(dds), 1))
