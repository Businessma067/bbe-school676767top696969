# -*- coding: utf-8 -*-
"""Measure length/$$ stats of NEW[] bodies in patch_demo_explanations.py."""
import re
from pathlib import Path

text = Path("scripts/patch_demo_explanations.py").read_text(encoding="utf-8")
idx_econ = text.find("# ECONOMICS")
idx_math = text.find("# MATH")
# find apply section
idx_apply = text.find("# Apply + validate")
econ_text = text[idx_econ:idx_math]
math_text = text[idx_math:idx_apply]


def grab(s):
    return re.findall(r'r"""(.*?)"""', s, re.S)


ee = grab(econ_text)
mm = grab(math_text)
print("econ letters", len(ee), "math", len(mm))


def st(arr, name):
    lens = [len(e) for e in arr]
    blocks = [e.count("$$") / 2 for e in arr]
    print(
        name,
        "n",
        len(lens),
        "avg",
        round(sum(lens) / len(lens), 1),
        "min",
        min(lens),
        "max",
        max(lens),
        "$$avg",
        round(sum(blocks) / len(blocks), 2),
    )


st(ee, "patch econ (raw NEW)")
st(mm, "patch math (raw NEW)")

# Also simulate split_econ_frac_result
pat = re.compile(
    r"\$\$\s*(\\frac\{[^{}]+\}\{[^{}]+\})\s*(=|\\approx)\s*([^\n$]+?)\s*\$\$",
    re.M,
)


def split_econ(text):
    def repl(m):
        frac, op, rhs = m.group(1), m.group(2), m.group(3).strip()
        return f"$$\n{frac}\n$$\n\n$$\n{op} {rhs}\n$$"

    return pat.sub(repl, text)


ee2 = [split_econ(e) for e in ee]
st(ee2, "patch econ (after split)")
