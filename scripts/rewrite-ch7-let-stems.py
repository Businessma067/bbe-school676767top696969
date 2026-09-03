#!/usr/bin/env python3
"""Replace leftover \"Let f / Let g\" openings in Chapter 7.

The previous diversify pass already turned thirty stems into single-object
tasks.  The remaining sixty still open with the same template even though the
five claims keep talking about both functions.  This pass only rewrites the
English wrapper: names, formulas, and answer keys stay put.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch7-linear-quadratic.json")
MARK = "Evaluate each statement. Mark it TRUE or FALSE."

# Explicit new contexts.  Formulas are copied verbatim from the live bank.
NEW = {
    "MATH 7.02": f"A line and a parabola are given by $f(x)=3x-5$ and $g(x)=-2x^{{2}}+x+4$. {MARK}",
    "MATH 7.03": f"The parabola $g$ and the line $f$ have the rules $g(x)=x^{{2}}-6x+5$ and $f(x)=2x+1$. {MARK}",
    "MATH 7.05": f"Start from the line $f(x)=5x$ and the parabola $g(x)=x^{{2}}-4$. {MARK}",
    "MATH 7.06": f"A completed-square parabola and a matching line are supplied: $g(x)=(x-2)^{{2}}+3$ and $f(x)=x-2$. {MARK}",
    "MATH 7.07": f"Two functions are handed over already written out: $f(x)=\\frac{{1}}{{2}}x+7$ and $g(x)=3x^{{2}}-x$. {MARK}",
    "MATH 7.08": f"Here is the identity line together with a parabola: $f(x)=x$ and $g(x)=x^{{2}}-2x$. {MARK}",
    "MATH 7.10": f"A quadratic arrives already factored, next to a line: $g(x)=(x+1)(x-4)$ and $f(x)=-2x+3$. {MARK}",
    "MATH 7.12": f"Read the line $f(x)=2x-1$ and the parabola $g(x)=x^{{2}}-5x+6$. {MARK}",
    "MATH 7.13": f"The following pair is given: the parabola $g(x)=2x^{{2}}-8x+3$ together with the line $f(x)=x+3$. {MARK}",
    "MATH 7.14": f"A concrete line $f$ and a concrete parabola $g$ are supplied: $f(x)=x+1$, $g(x)=x^{{2}}-x-2$. {MARK}",
    "MATH 7.15": f"The parabola $g(x)=x^{{2}}+4x+1$ is compared with the line $f(x)=-x$. {MARK}",
    "MATH 7.17": f"A scaled factored parabola sits next to a line through the origin: $g(x)=2(x-1)(x-3)$ and $f(x)=3x$. {MARK}",
    "MATH 7.18": f"A downward-sloping line and a parabola are written $f(x)=-x+2$ and $g(x)=x^{{2}}+x-6$. {MARK}",
    "MATH 7.19": f"A difference of squares $g(x)=x^{{2}}-9$ is given together with the line $f(x)=2x+1$. {MARK}",
    "MATH 7.21": f"The pair $f(x)=x-1$ and $g(x)=x^{{2}}-1$ is given. {MARK}",
    "MATH 7.22": (
        "A general parabola is written $g(x)=ax^{2}+bx+c$ with $a\\neq 0$, and "
        f"$\\Delta=b^{{2}}-4ac$ stands for its discriminant. {MARK}"
    ),
    "MATH 7.23": (
        "A quadratic is given in the general shape $g(x)=ax^{2}+bx+c$ with "
        f"$a\\neq 0$. Judge the claims about evenness. {MARK}"
    ),
    "MATH 7.24": f"The parabola $g(x)=x^{{2}}-4x+5$ is paired with the line $f(x)=2x-3$. {MARK}",
    "MATH 7.25": f"A line and a parabola are given by $f(x)=2x+1$ and $g(x)=x^{{2}}-x-2$. {MARK}",
    "MATH 7.26": f"Start from the line $f(x)=3x$ and the parabola $g(x)=x^{{2}}-6x+10$. {MARK}",
    "MATH 7.28": f"The line $f$ and the parabola $g$ have the rules $f(x)=x-1$ and $g(x)=x^{{2}}-2x-3$. {MARK}",
    "MATH 7.29": f"Two functions are handed over already written out: $f(x)=4x-1$ and $g(x)=x^{{2}}-4x+1$. {MARK}",
    "MATH 7.30": f"Here is the identity line together with a parabola: $f(x)=x$ and $g(x)=x^{{2}}+x+1$. {MARK}",
    "MATH 7.31": (
        "A non-constant line $f$ and a parabola $g$ are given; no further "
        f"numeric data are supplied. {MARK}"
    ),
    "MATH 7.33": (
        "Take any line $f$ and any parabola $g$ over $\\mathbb{R}$. Judge the "
        f"claims about their graphs. {MARK}"
    ),
    "MATH 7.34": (
        "A parabola is already written in completed-square form "
        f"$g(x)=a(x-h)^{{2}}+k$ with $a\\neq 0$. Judge the claims about the range of $g$. {MARK}"
    ),
    "MATH 7.35": (
        "A line $f$ and a parabola $g$ are given; write $d=f-g$ for their "
        f"difference. {MARK}"
    ),
    "MATH 7.36": (
        "A fixed parabola $g(x)=x^{2}-2x+2$ is compared with the family of "
        f"lines $f_t(x)=tx$ as the real parameter $t$ varies. {MARK}"
    ),
    "MATH 7.37": f"Read the line $f(x)=3x-1$ and the parabola $g(x)=2x^{{2}}-4x-6$. {MARK}",
    "MATH 7.38": f"The following pair is given: the parabola $g(x)=x^{{2}}-3x-10$ together with the line $f(x)=-3x+6$. {MARK}",
    "MATH 7.39": (
        "A concrete line $f$ and a concrete parabola $g$ are supplied, and "
        f"$d=f-g$ is their difference: $f(x)=2x+3$, $g(x)=x^{{2}}-x-2$. {MARK}"
    ),
    "MATH 7.40": (
        "A one-parameter family of parabolas $g_a(x)=ax^{2}-4x+1$ with "
        f"$a\\neq 0$ is compared with the identity line $f(x)=x$. {MARK}"
    ),
    "MATH 7.41": (
        "A general parabola is written $g(x)=ax^{2}+bx+c$ with $a\\neq 0$. "
        "Write $S$ for the sum of the roots of $g$ in $\\mathbb{C}$, and write "
        f"$\\ell$ for the axis of symmetry of its graph. No concrete coefficients are given. {MARK}"
    ),
    "MATH 7.42": (
        "A non-constant line $f$ and a parabola $g$ are given, with no further "
        f"numeric data. Judge the claims about nested functions. {MARK}"
    ),
    "MATH 7.43": (
        "A general line $f(x)=mx+k$ with $m\\neq 0$ is paired with a general "
        f"parabola $g(x)=ax^{{2}}+bx+c$ with $a\\neq 0$. {MARK}"
    ),
    "MATH 7.44": (
        "A general parabola $g(x)=ax^{2}+bx+c$ with $a\\neq 0$ is compared "
        "with the family of lines $f_t(x)=tx+1$ parametrised by "
        f"$t\\in\\mathbb{{R}}$. {MARK}"
    ),
    "MATH 7.46": f"A line and a parabola are given by $f(x)=4x+2$ and $g(x)=x^{{2}}-x-2$. {MARK}",
    "MATH 7.47": (
        "A fixed parabola $g(x)=x^{2}-4x+1$ is compared with the family of "
        f"lines $f_k(x)=kx+1$ as the real parameter $k$ varies. {MARK}"
    ),
    "MATH 7.49": f"The parabola $g(x)=x^{{2}}-6x+5$ is paired with the line $f(x)=4x-8$. {MARK}",
    "MATH 7.50": (
        "The line $f(x)=2x$ is compared with the vertically shifted family "
        f"$g_s(x)=x^{{2}}-x-2+s$, where $s$ is a real shift. {MARK}"
    ),
    "MATH 7.51": f"Start from the line $f(x)=7x+2$ and the parabola $g(x)=x^{{2}}+6x$. {MARK}",
    "MATH 7.69": (
        "A non-constant line $f$ and a parabola $g$ whose leading coefficient "
        f"$a$ is nonzero are given; no numeric data are supplied. {MARK}"
    ),
    "MATH 7.70": (
        "A line $f$ and a parabola $g$ with nonzero leading coefficient $a$ "
        f"are given; write $d=g-f$ for their difference. No numeric data are supplied. {MARK}"
    ),
    "MATH 7.71": f"A horizontal line $f(x)=2$ sits next to the parabola $g(x)=x^{{2}}+2x+3$. {MARK}",
    "MATH 7.79": (
        "A non-constant line $f$ with inverse $f^{-1}$ is given together "
        f"with a parabola $g$. No numeric data are supplied. {MARK}"
    ),
    "MATH 7.80": (
        "A line $f$ and a parabola $g$ are mirrored by replacing $x$ with "
        f"$-x$: write $\\tilde f(x)=f(-x)$ and $\\tilde g(x)=g(-x)$. No numeric data are supplied. {MARK}"
    ),
    "MATH 7.82": (
        "A line $f$ with slope $m$ and a parabola $g$ with nonzero leading "
        "coefficient $a$ are given; write $d=g-f$ for their difference. "
        f"No numeric data are supplied. {MARK}"
    ),
    "MATH 7.83": (
        "A quadratic $g(x)=ax^{2}+bx+c$ with nonzero $a$ has two distinct "
        "real roots; write $S$ for their sum and $P$ for their product. "
        f"No numeric data are supplied. {MARK}"
    ),
    "MATH 7.84": (
        "A fixed parabola $g(x)=x^{2}-2x-5$ is compared with the family of "
        "slope-one lines $f_c(x)=x+c$, where $c$ runs through $\\mathbb{R}$. "
        f"{MARK}"
    ),
    "MATH 7.85": (
        "A one-parameter family of parabolas $g_a(x)=ax^{2}+2x-3$ with "
        "$a\\neq 0$ is compared with the fixed line $f(x)=x+1$. Consider "
        f"what the real parameter $a$ can do. {MARK}"
    ),
    "MATH 7.86": f"Read the line $f(x)=5x+1$ and the parabola $g(x)=3x^{{2}}-2x-1$. {MARK}",
    "MATH 7.88": f"The following pair is given: the line $f(x)=-6x+4$ together with the parabola $g(x)=2x^{{2}}+3x-2$. {MARK}",
    "MATH 7.89": (
        "A parabola $g$ has vertex $V$ and nonzero leading coefficient $a$. "
        "A line $f$ of slope $m$ is drawn through that same vertex. "
        f"No numeric data are supplied. {MARK}"
    ),
    "MATH 7.90": (
        "A non-constant line $f$ and a parabola $g$ are given. Consider the "
        "nested functions $g(g(x))$ and $g(f(g(x)))$. No numeric data are "
        f"supplied. {MARK}"
    ),
    "MATH 7.91": (
        "A parabola $g$ with nonzero leading coefficient $a$ is given "
        f"together with a line $f$. No numeric data are supplied. {MARK}"
    ),
    "MATH 7.92": (
        "A non-constant line $f$ has slope $m$, and an outer parabola is "
        "written $q(y)=Ay^{2}+By+C$ with nonzero $A$. Set $g(x)=q(f(x))$. "
        f"No numeric data are supplied. {MARK}"
    ),
    "MATH 7.93": (
        "A parabola $g$ has nonzero leading coefficient and axis of symmetry "
        "$\\ell$. Two distinct real numbers $u$ and $v$ satisfy $g(u)=g(v)$. "
        f"No numeric data are supplied. {MARK}"
    ),
    "MATH 7.94": (
        "A fixed parabola $g(x)=x^{2}-4x+6$ is compared with the family of "
        "lines $f_t(x)=t(x-1)+2$ obtained as the real parameter $t$ varies. "
        f"{MARK}"
    ),
    "MATH 7.95": (
        "A fixed line $f(x)=2x-1$ is compared with the family of parabolas "
        f"$g_r(x)=(x-r)^{{2}}-4$ obtained as the real shift $r$ varies. {MARK}"
    ),
    "MATH 7.97": f"A concrete line $f$ and a concrete parabola $g$ are supplied: $f(x)=3x-7$, $g(x)=x^{{2}}-5x+2$. {MARK}",
    "MATH 7.57": f"The line $u$ is given by $u(x)=4x+10$. {MARK}",
    "MATH 7.61": f"The parabola $p$ is given by $p(x)=3x^{{2}}-12x+7$. {MARK}",
    "MATH 7.65": (
        "A scaled factored parabola is written "
        f"$p(x)=-3\\left(x+2\\right)\\left(x-5\\right)$. {MARK}"
    ),
    "MATH 7.73": f"Consider the quadratic $q(x)=x^{{2}}-10x+21$. {MARK}",
    "MATH 7.81": (
        "Three pairwise distinct points $P$, $Q$ and $R$ of the plane are given, "
        "no two of which lie on the same vertical line. No coordinates are supplied. "
        f"{MARK}"
    ),
}


def main() -> None:
    data = json.loads(PATH.read_text())
    changed = 0
    missing = []
    for t in data["tasks"]:
        cid = t["case_id"]
        if cid not in NEW:
            continue
        old = t["context"]
        new = NEW[cid]
        if old != new:
            t["context"] = new
            changed += 1
        # keep the same $f(x)=$ / $g(x)=$ formulas so the enricher can still parse them
    leftover = [
        t["case_id"]
        for t in data["tasks"]
        if re.search(r"(?i)let\s+\$?[fg]\b", t.get("context") or "")
    ]
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"rewrote {changed} contexts")
    print(f"leftover Let f/g: {len(leftover)} {leftover}")


if __name__ == "__main__":
    main()
