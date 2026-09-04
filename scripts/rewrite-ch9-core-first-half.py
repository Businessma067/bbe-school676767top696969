"""Rewrite every tactical explanation for the first half of the Chapter 9 core bank.

Scope: tasks at indices 0..57 of src/data/math-ch9-polynomials.json (math-9-1
through math-9-58). The second half of the array is left untouched.

Style target: Chapter 4 (src/data/math-ch4-cases.json). Each letter opens with a
narrative sentence, alternates single-formula displays with prose, and closes
with ", so the statement is True/False."

The dictionaries below also record the statement repairs and answer-key
corrections that the rewrite required; see
scripts/ch9-core-first-half-key-fixes.md.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

DATA = Path(__file__).resolve().parents[1] / "src/data/math-ch9-polynomials.json"

FIRST_HALF = 58
LETTERS = "ABCDE"

BANNED = [
    r"\\deg",
    r"\\circ",
    r"\\text\{",
    "Matching the claim",
    "read the stem fully",
    "translate words",
    "Keep the intermediate",
    "From the stem,",
    "Each letter is then",
    "as forced by the coefficients",
    "for every real shift of the graph",
    "and the same holds after replacing",
    "equals settled by",
    "A solver who",
    "rushed solver",
    "Watch.",
    "Trap:",
    "—",
]

# (task id, statement index) -> replacement statement text.
# Every entry replaces generator debris that had leaked into the live card:
# spilled solution_overview boilerplate, or a tacked-on clause that made the
# claim unreadable ("... for every real shift of the graph").
STMT_FIXES: dict[tuple[str, int], str] = {
    ("math-9-5", 4): r"$p$ is an even function.",
    ("math-9-6", 3): r"$s$ is a quadratic function.",
    ("math-9-9", 3): r"The first differences of the tabled values are $-1$, $1$ and $5$.",
    ("math-9-10", 1): r"The leading coefficient of $p$ is $5$.",
    ("math-9-11", 4): r"The constant term of $p$ is $-1$.",
    ("math-9-12", 4): r"$h(0)=2$.",
    ("math-9-15", 4): r"As $x\to -\infty$, $p(x)\to +\infty$.",
    ("math-9-17", 3): r"$q$ is an odd function.",
    ("math-9-18", 3): r"The leading coefficient of $T$ is negative.",
    ("math-9-24", 3): r"The highest interval average cost of the table is on $[0,5]$.",
    ("math-9-25", 2): r"If a cubic has three distinct real roots, it factors into three real linear factors.",
    ("math-9-25", 3): r"Changing the constant term can change the number of distinct real roots.",
    ("math-9-26", 3): r"The highest power of $x$ in $p$ is $x^{n}$.",
    ("math-9-28", 3): r"The second differences are constant.",
    ("math-9-31", 3): r"The highest power of $x$ in $p+q$ is $x^{n+m}$.",
    ("math-9-31", 4): r"For suitable $p$ and $q$ the highest power of $x$ in $p\cdot q$ can drop below $x^{n+m}$.",
    ("math-9-32", 1): r"The highest power of $x$ in $p-q$ is $x^{n}$.",
    ("math-9-32", 2): r"The highest power of $x$ in $p\cdot q$ is $x^{2n}$.",
    ("math-9-32", 4): r"The graphs of $p$ and $q$ have the same end behaviour on the far right.",
    ("math-9-33", 2): r"$p=p_{\mathrm{e}}+p_{\mathrm{o}}$ for every polynomial $p$.",
    ("math-9-33", 3): r"If $p$ contains only even powers, then $p_{\mathrm{e}}$ is the zero polynomial.",
    ("math-9-35", 4): r"The derivative $p_c'$ depends on $c$.",
    ("math-9-36", 2): r"For $a=3$ the polynomial $p_a$ has three distinct real roots.",
    ("math-9-36", 4): r"$p_a$ has three distinct real roots exactly when $-2<a<2$.",
    ("math-9-37", 3): r"The first rider's acceleration $a(t)$ is a quadratic polynomial in $t$.",
    ("math-9-37", 4): r"The second rider's interval speeds have only one local maximum.",
    ("math-9-38", 3): r"As $x\to +\infty$, $p(x)\to -\infty$.",
    ("math-9-40", 3): r"For $k=-1$ the polynomial $g_k$ has three distinct real roots.",
    ("math-9-42", 4): r"If $x-a$ appears in $p$ with multiplicity $3$, then $p''(a)\neq 0$.",
    ("math-9-43", 3): r"The derivative $p'$ has the same highest power $x^{n}$ as $p$.",
    ("math-9-45", 3): r"If $a$ is an integer root of $p$, then $x-a$ is a factor of $p$ with integer coefficients.",
    ("math-9-47", 2): r"The highest interval rate of the table is on $[0,8]$.",
    ("math-9-49", 1): r"$p$ is even.",
    ("math-9-50", 3): r"$p$ has a stationary point at $x=0$.",
    ("math-9-51", 3): r"The peak interval speed of the table occurs on $[30,40]$.",
    ("math-9-51", 4): r"$v$ is a cubic polynomial in $t$.",
    ("math-9-54", 3): r"The first differences of the tabled values are $1,15,65,175,369$.",
    ("math-9-55", 1): r"A real cubic can have four distinct real zeros.",
    ("math-9-55", 4): r"Every real cubic has three distinct real zeros.",
}

# (task id, statement index) -> corrected truth value.
KEY_FIXES: dict[tuple[str, int], bool] = {
    ("math-9-4", 4): False,    # p(-4) = -70, so -4 is not a root
    ("math-9-5", 4): False,    # 2x^3 - x^2 + 2x - 1 has odd powers
    ("math-9-6", 3): True,     # the cubic terms cancel, leaving 4x^2 + x - 2
    ("math-9-10", 1): False,   # in descending order the lead is x^4, coefficient 1
    ("math-9-11", 4): False,   # x^3 - x has constant term 0
    ("math-9-12", 4): False,   # h(0) = (-2)(1) = -2
    ("math-9-17", 3): False,   # (x-1)^3 is a shifted cube, not odd
    ("math-9-18", 3): True,    # the lead of T is -0.01
    ("math-9-24", 3): False,   # interval averages rise to 22 on [15,20]
    ("math-9-25", 2): True,    # three distinct real roots give three real linear factors
    ("math-9-25", 3): True,    # x^3 - 3x + c changes root count with c
    ("math-9-26", 3): True,    # a_n != 0 keeps x^n on top
    ("math-9-28", 3): False,   # second differences are 14, 50, 110, 194
    ("math-9-29", 4): False,   # h(30) = 3 while h(3) = 2.244
    ("math-9-31", 3): False,   # adding never adds exponents
    ("math-9-31", 4): False,   # nonzero leads multiply to a nonzero lead
    ("math-9-32", 1): True,    # subtracting doubles the leading coefficient
    ("math-9-32", 2): True,    # the product of the leads is -a^2, nonzero
    ("math-9-33", 2): True,    # the two halves add back to p
    ("math-9-35", 4): False,   # differentiating kills the constant c
    ("math-9-36", 2): False,   # three distinct roots need -2 < a < 2
    ("math-9-37", 3): True,    # differentiating a cubic gives a quadratic
    ("math-9-37", 4): True,    # 6, 8, 10, 12, 14, 10 peaks once
    ("math-9-38", 3): True,    # the leading coefficient is -1
    ("math-9-40", 3): False,   # k = -1 leaves the single root 0
    ("math-9-42", 4): False,   # a triple factor forces p''(a) = 0
    ("math-9-43", 1): False,   # n - 3 is not the stationary-point count
    ("math-9-43", 3): False,   # p' drops one power to x^{n-1}
    ("math-9-44", 3): True,    # odd n pairs every coefficient with a distinct partner
    ("math-9-45", 3): True,    # monic division by x - a stays integral
    ("math-9-47", 2): False,   # the table peaks at 20 units per hour on [16,24]
    ("math-9-48", 2): False,   # p'(-3) = 16
    ("math-9-49", 1): True,    # x^4 - 5x^2 + 4 has only even powers
    ("math-9-51", 4): True,    # v has highest power t^3
    ("math-9-54", 0): False,   # third differences are 36, 60, 84
    ("math-9-55", 1): False,   # a cubic has at most three distinct zeros
    ("math-9-55", 4): False,   # x^3 has a single triple zero
    ("math-9-56", 2): True,    # h'(11) = -0.254
}

# Context repair: the stem named the polynomial f while all five cards call it p.
CONTEXT_FIXES: dict[str, tuple[str, str]] = {
    "math-9-58": ("Suppose $f(x)=a_n x^{n}", "Suppose $p(x)=a_n x^{n}"),
}

# Overview repair: the table cannot come from x^3 - x + 1, which takes the value
# 1 at x = -1 while the table records 2.
OVERVIEW_FIXES: dict[str, str] = {
    "math-9-9": (
        "Four samples at $x=-1,0,1,2$ pin a cubic down uniquely. The first differences "
        "$-1$, $1$, $5$ already grow, so the data cannot come from a straight line, and "
        "the symmetric pair $p(-1)=p(1)=2$ is visible without any algebra."
    ),
}

EXPL: dict[str, list[str]] = {}
