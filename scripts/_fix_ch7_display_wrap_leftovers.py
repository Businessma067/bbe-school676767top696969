#!/usr/bin/env python3
"""Manual leftover display-wrap repairs for Ch7 LQ + mixed exam banks."""

from __future__ import annotations

import json
import re
from pathlib import Path

LQ_PATH = Path("src/data/math-ch7-linear-quadratic.json")
MX_PATH = Path("src/data/math-ch7-mixed-exam.json")


def load(path: Path) -> dict:
    return json.loads(path.read_text())


def dump(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")


def task(data: dict, cid: str) -> dict:
    return next(t for t in data["tasks"] if t["case_id"] == cid)


def replace_te(data: dict, cid: str, idx: int, old: str, new: str, label: str, fixed: list[str]) -> None:
    t = task(data, cid)
    te = t["tactical_explanations"][idx]
    if old not in te:
        print(f"WARNING missing in {cid} te[{idx}] ({label})")
        for m in re.finditer(r".{0,50}(?:qquad|quad|A = 0).{0,90}", te):
            print(" ", repr(m.group(0)))
        return
    t["tactical_explanations"][idx] = te.replace(old, new, 1)
    fixed.append(f"{cid} letter index {idx} — {label}")


def main() -> None:
    lq = load(LQ_PATH)
    mx = load(MX_PATH)
    fixed: list[str] = []

    replace_te(
        lq,
        "MATH 7.32",
        3,
        "$$g(1)=0\\qquad (1+1)^{2}$$\n\n$$g(1)=4$$",
        "$$g(1)=0,\\qquad (1+1)^{2}=4$$",
        "complete g(1) vs replaced formula",
        fixed,
    )

    replace_te(
        lq,
        "MATH 7.33",
        2,
        "$$(g-f)(x_{0})=0\\qquad (g-f)'(x_{0})$$\n\n$$(g-f)(x_{0})=0$$",
        "$$(g-f)(x_{0})=0,\\qquad (g-f)'(x_{0})=0$$",
        "tangency: value and derivative both zero",
        fixed,
    )

    replace_te(
        lq,
        "MATH 7.69",
        0,
        "$$g(x)-f(x)=a(x-h)^{2}+k\\qquad a$$\n\n$$a(x-h)^{2}+k\\qquad a>0$$",
        "$$g(x)-f(x)=a(x-h)^{2}+k,\\qquad a>0$$",
        "completed-square difference with a>0",
        fixed,
    )
    replace_te(
        lq,
        "MATH 7.69",
        2,
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q)\\qquad a$$\n\n$$ax^{2}+(b-m)x+(c-q)\\qquad a<0$$",
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q),\\qquad a<0$$",
        "difference with a<0",
        fixed,
    )
    replace_te(
        lq,
        "MATH 7.69",
        3,
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q)\\qquad a$$\n\n$$ax^{2}+(b-m)x+(c-q)\\qquad a>0$$",
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q),\\qquad a>0$$",
        "difference with a>0",
        fixed,
    )
    replace_te(
        lq,
        "MATH 7.69",
        4,
        "$$d(x)=ax^{2}+(b-m)x+(c-q)\\qquad a$$\n\n$$ax^{2}+(b-m)x+(c-q)\\qquad a>0$$",
        "$$d(x)=ax^{2}+(b-m)x+(c-q),\\qquad a>0$$",
        "d with a>0",
        fixed,
    )

    replace_te(
        lq,
        "MATH 7.91",
        1,
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q)\\qquad a$$\n\n$$ax^{2}+(b-m)x+(c-q)\\qquad a>0$$",
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q),\\qquad a>0$$",
        "difference with a>0",
        fixed,
    )
    replace_te(
        lq,
        "MATH 7.91",
        2,
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q)\\qquad a$$\n\n$$ax^{2}+(b-m)x+(c-q)\\qquad a>0$$",
        "$$g(x)-f(x)=ax^{2}+(b-m)x+(c-q),\\qquad a>0$$",
        "difference with a>0",
        fixed,
    )

    te91 = task(lq, "MATH 7.91")["tactical_explanations"][2]
    if r"\gek_{d}" in te91:
        task(lq, "MATH 7.91")["tactical_explanations"][2] = te91.replace(r"\gek_{d}", r"\ge k_{d}")
        fixed.append("MATH 7.91 letter index 2 — fix \\gek typo")

    replace_te(
        lq,
        "MATH 7.94",
        4,
        "$$\\text{vertex of }g=(2,2)\\quad\\text{and}$$\n\n$$g(1)=3\\neq 2$$",
        "$$\\text{vertex of }g=(2,2),\\qquad g(1)=3\\neq 2$$",
        "vertex height vs g(1)",
        fixed,
    )

    replace_te(
        lq,
        "MATH 7.81",
        1,
        "$$(0,0),\\;(1,1),\\;(2,2)$$\n\n$$A = 0,\\;B$$\n\n$$A x_{P}^{2}+B x_{P}+C=1,\\;C$$\n\n$$A x_{P}^{2}+B x_{P}+C=0$$",
        "$$(0,0),\\;(1,1),\\;(2,2)$$\n\n$$A=0,\\quad B=1,\\quad C=0$$",
        "collinear interpolant A,B,C",
        fixed,
    )

    replace_te(
        mx,
        "MATH 7.E29",
        1,
        "$$(0-2)^{2}+1=5\\qquad (2-2)^{2}+1$$\n\n$$(0-2)^{2}+1=1\\qquad (4-2)^{2}+1$$\n\n$$(0-2)^{2}+1=5$$",
        "$$(0-2)^{2}+1=5,\\qquad (2-2)^{2}+1=1,\\qquad (4-2)^{2}+1=5$$",
        "complete table substitutions",
        fixed,
    )

    dump(LQ_PATH, lq)
    dump(MX_PATH, mx)

    print("FIXED:")
    for item in fixed:
        print(" ", item)
    print(f"total replacements: {len(fixed)}")


if __name__ == "__main__":
    main()
