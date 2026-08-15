# -*- coding: utf-8 -*-
"""Undo false \\$ escapes on math, keep real currency, finish scar fixes."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
import importlib.util

spec = importlib.util.spec_from_file_location("build", Path(__file__).parent / "_build_ch1_v2.py")
build = importlib.util.module_from_spec(spec)
spec.loader.exec_module(build)

DUMP = Path(__file__).with_name("_ch1_tasks_dump.json")


def undo_false_currency(text: str) -> str:
    """Turn \\$digits back into $digits everywhere (math was wrongly escaped)."""
    return text.replace("\\$", "$")


def escape_real_money(text: str) -> str:
    """Escape only currency-shaped amounts (comma groups or 'million')."""
    text = re.sub(
        r"(?<!\\)\$(?=\d{1,3}(?:,\d{3})+(?:\.\d+)?(?:\b|[^0-9A-Za-z\\{^_]))",
        r"\\$",
        text,
    )
    text = re.sub(
        r"(?<!\\)\$(?=\d+\s*million\b)",
        r"\\$",
        text,
        flags=re.I,
    )
    return text


def fix_remaining(text: str) -> str:
    # Split negation still present
    text = re.sub(r"\$\\neg\$\s*\(([^)$]+)\)", r"$\\neg(\1)$", text)
    text = text.replace("$\\Leftrightarrow \\neg$ banned", "$\\Leftrightarrow \\neg$ banned")  # leave prose
    text = text.replace(
        "member $\\Leftrightarrow \\neg$ banned",
        "member $\\Leftrightarrow$ not banned",
    )

    # Interval missing closer
    text = text.replace("$A \\cup B = (0, 15]", "$A \\cup B = (0, 15]$")

    # Complement leftovers with unicode ᶜ
    text = text.replace("$(X \\cup Y)$ᶜ", "$(X \\cup Y)^{c}$")
    text = text.replace("$(A \\cap B)$ᶜ", "$(A \\cap B)^{c}$")
    text = text.replace("$(A \\cup B)$ᶜ", "$(A \\cup B)^{c}$")
    text = re.sub(r"(?<!\$)([A-Z])ᶜ(?!\$)", r"$\1^{c}$", text)
    text = re.sub(r"\$([A-Z]\^\{c\})\$\s*\$", r"$\1$", text)

    # Split complement intersection in explanations
    text = text.replace("$X^{c} \\cap$ $Y^{c}$", "$X^{c} \\cap Y^{c}$")
    text = text.replace("$A^{c} \\cup$ $B^{c}$", "$A^{c} \\cup B^{c}$")

    # math-1-47 statement
    text = text.replace(
        '"$(x \\in P \\land x \\neq 2) \\Rightarrow$ ($x$ is odd)" is a true statement for all $x$',
        '"$((x \\in P) \\land (x \\neq 2)) \\Rightarrow$ ($x$ is odd)" is true for all $x$',
    )

    # Broken half-escaped explanations from prior pass (common scars)
    replacements = [
        (
            "so $5 \\notin A \\setminus B. The correct set is A \\setminus B = (0, 5)$.",
            "so $5 \\notin A \\setminus B$. The correct set is $A \\setminus B = (0, 5)$.",
        ),
        (
            "and $1 \\in N but $1 \\notin E, so the inclusion is strict (proper).",
            "and $1 \\in N$ but $1 \\notin E$, so the inclusion is strict (proper).",
        ),
        (
            "Both $6 and $8 are elements of A.",
            "Both $6$ and $8$ are elements of A.",
        ),
        (
            "64 - 1 = 63, which does equal $63.",
            "$64 - 1 = 63$, which does equal $63$.",
        ),
        (
            "has $2^n$ members",
            "has $2^n$ members",
        ),
        (
            "has $2^n members",
            "has $2^n$ members",
        ),
        (
            "so D has $2^3$ = 8 subsets: $\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a,b\\}, \\{a,c\\}, \\{b,c\\}, \\{a,b,c\\}.",
            "so D has $2^3 = 8$ subsets: $\\emptyset$, $\\{a\\}$, $\\{b\\}$, $\\{c\\}$, $\\{a,b\\}$, $\\{a,c\\}$, $\\{b,c\\}$, $\\{a,b,c\\}$.",
        ),
        (
            "$3 satisfies (3-2)(3-3) = 0$.",
            "$3$ satisfies $(3-2)(3-3) = 0$.",
        ),
        (
            "$2 is a root, but so is $3 —",
            "$2$ is a root, but so is $3$ —",
        ),
        (
            "greater than $2 keeps only x = 3 from the two roots, so C = \\{3\\}$.",
            "greater than $2$ keeps only $x = 3$ from the two roots, so $C = \\{3\\}$.",
        ),
        (
            "There are exactly $4 subsets of D containing exactly $3 elements.",
            "There are exactly $4$ subsets of D containing exactly $3$ elements.",
        ),
        (
            "There are exactly $5 subsets of D containing exactly $2 elements.",
            "There are exactly $5$ subsets of D containing exactly $2$ elements.",
        ),
        (
            "Choosing $3 of the $4 elements",
            "Choosing $3$ of the $4$ elements",
        ),
        (
            "Choosing $2 of the $4 elements can be done in $C(4,2) = 6$ ways, which is $6, not $5.",
            "Choosing $2$ of the $4$ elements can be done in $C(4,2) = 6$ ways, which is $6$, not $5$.",
        ),
        (
            "share the element $2, so the blocks of \\mathcal{S}'$ are not disjoint",
            "share the element $2$, so the blocks of $\\mathcal{S}'$ are not disjoint",
        ),
        (
            "$7 \\notin G, so \\{5,6,7\\}$ is not even a subset of G",
            "$7 \\notin G$, so $\\{5,6,7\\}$ is not even a subset of G",
        ),
        (
            "H continues without end ($2, 4, 6, 8, \\dots$).",
            "H continues without end ($2$, $4$, $6$, $8$, $\\dots$).",
        ),
        (
            "$1 \\in \\mathbb{N} but $1 \\notin H (it is odd).",
            "$1 \\in \\mathbb{N}$ but $1 \\notin H$ (it is odd).",
        ),
        (
            "every even number $2n$ comes from exactly one n.",
            "every even number $2n$ comes from exactly one $n$.",
        ),
        (
            "$2 \\in A and x \\in B.\n\nSo the ordered pair (2,x), with first coordinate from A and second from B, belongs to A \\times B$.",
            "$2 \\in A$ and $x \\in B$.\n\nSo the ordered pair $(2,x)$, with first coordinate from A and second from B, belongs to $A \\times B$.",
        ),
        (
            "$(1, m)$ has its first coordinate $1 from B, not A.\n\nSo it is not a member of A \\times B$ —",
            "$(1, m)$ has its first coordinate $1$ from B, not A.\n\nSo it is not a member of $A \\times B$ —",
        ),
        (
            "Out of 40 total, $31 are in A \\cup B$, leaving $40 - 31 = 9$ in neither set.",
            "Out of 40 total, $31$ are in $A \\cup B$, leaving $40 - 31 = 9$ in neither set.",
        ),
        (
            "Out of 60 total, $50 are in A \\cup B$, leaving $60 - 50 = 10$ in neither set.",
            "Out of 60 total, $50$ are in $A \\cup B$, leaving $60 - 50 = 10$ in neither set.",
        ),
        (
            "Out of 50 total, $33 are in A \\cup B$, leaving $50 - 33 = 17$ in neither set.",
            "Out of 50 total, $33$ are in $A \\cup B$, leaving $50 - 33 = 17$ in neither set.",
        ),
        (
            "and $3$ do all three.",
            "and $3$ do all three.",
        ),
        (
            "removing the $3 who also cook leaves $7$ who do exactly",
            "removing the $3$ who also cook leaves $7$ who do exactly",
        ),
        (
            "Photography-and-hiking members number $10; removing the $3 who also cook leaves $7$ who do exactly photography and hiking.",
            "Photography-and-hiking members number $10$; removing the $3$ who also cook leaves $7$ who do exactly photography and hiking.",
        ),
        (
            "But 3, 5, 7, 11, $13 \\in P$ are all odd and not in E, so P ⊄ E.",
            "But $3,5,7,11,13 \\in P$ are all odd and not in E, so $P \\not\\subseteq E$.",
        ),
        (
            "a multiple of $2 (4 = 2 \\times 2)$, so this holds",
            "a multiple of $2$ ($4 = 2 \\times 2$), so this holds",
        ),
        (
            "$\\lvert X \\rvert$ + $\\lvert Y \\rvert$ - $2\\lvert X \\cap Y \\rvert = 40$ + 35 - 30 = 45.",
            "$\\lvert X \\rvert + \\lvert Y \\rvert - 2\\lvert X \\cap Y \\rvert = 40 + 35 - 30 = 45$.",
        ),
        (
            "A set with 3 elements has $2^3 = 8 subsets in total",
            "A set with 3 elements has $2^3 = 8$ subsets in total",
        ),
        (
            "so $15 \\notin A \\cup B$.",
            "so $15 \\notin A \\cup B$.",
        ),
    ]
    for a, b in replacements:
        text = text.replace(a, b)

    # Generic: close "$N word" patterns that lost the closer before English
    # Fix "$digits \\cmd" that lost closer mid-span — already handled above.

    # Power: "$2^n members" → "$2^n$ members"
    text = re.sub(r"\$2\^n(?!\$)(?=\s+members)", r"$2^n$", text)
    text = re.sub(r"\$2\^3(?!\$)(?=\s*=)", r"$2^3$", text)

    return text


def map_fields(t: dict, fn):
    for key in ("context", "solution_overview", "title"):
        if t.get(key):
            t[key] = fn(t[key])
    for key in ("statements", "tactical_explanations"):
        if t.get(key):
            t[key] = [fn(x) if isinstance(x, str) else x for x in t[key]]
    return t


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    n = 0
    for t in tasks:
        before = json.dumps(t, ensure_ascii=False)
        map_fields(t, undo_false_currency)
        map_fields(t, fix_remaining)
        map_fields(t, escape_real_money)
        # Explicit statement overrides
        if t["id"] == "math-1-13":
            t["statements"][1] = "$A \\cup B = (0, 15]$"
            t["statements"][0] = "$A \\cap B = [5, 10]$"
            t["statements"][2] = "$10 \\in A \\cap B$"
            t["statements"][3] = "$5 \\in A \\setminus B$"
        if t["id"] == "math-1-44":
            t["statements"][2] = "$\\neg(P \\land Q)$ is true"
            t["statements"][4] = "$\\neg(P \\lor Q)$ is true"
            t["tactical_explanations"][2] = (
                "**C.** → True\n\n"
                "Since $P \\land Q$ is false (see part a), its negation "
                "$\\neg(P \\land Q)$ is true.\n\n"
                "So the statement is True."
            )
            t["tactical_explanations"][4] = (
                "**E.** → False\n\n"
                "Since $P \\lor Q$ is true (see part b), its negation "
                "$\\neg(P \\lor Q)$ must be false, not true.\n\n"
                "So the statement is False."
            )
            t["tactical_explanations"][0] = (
                "**A.** → False\n\n"
                '"$\\land$" (and) is true only when both parts are true.\n\n'
                'Since Q ("7 is even") is false, $P \\land Q$ is false regardless of P.'
            )
            t["tactical_explanations"][3] = (
                "**D.** → False\n\n"
                '"$\\land$" requires BOTH sides true.\n\n'
                "$\\neg P$ is false (since P, \"7 is prime,\" is true), so "
                "$\\neg P \\land \\neg Q$ is false regardless of $\\neg Q$ - "
                "mixing up $\\land$ with $\\lor$ flips the answer.\n\n"
                "So the statement is False."
            )
        if t["id"] == "math-1-47":
            t["statements"][3] = (
                '"$((x \\in P) \\land (x \\neq 2)) \\Rightarrow$ ($x$ is odd)" '
                "is true for all $x$"
            )
        if t["id"] == "math-1-16":
            t["statements"][0] = "$6 \\in A$."
            t["statements"][4] = "A has exactly $63$ proper subsets."
        if t["id"] == "math-1-17":
            t["statements"][1] = "$3 \\in A$."
        if t["id"] == "math-1-18":
            t["statements"][0] = "$\\mathcal{P}(D)$ has $16$ elements."
            t["statements"][2] = "There are exactly $4$ subsets of D containing exactly $3$ elements."
            t["statements"][4] = "There are exactly $5$ subsets of D containing exactly $2$ elements."
        if t["id"] == "math-1-9":
            t["tactical_explanations"][2] = (
                "**C.** → True\n\n"
                "$X^{c} = \\{7,...,12\\}$ and $Y^{c} = \\{1,2,3,10,11,12\\}$; "
                "their intersection is $\\{10, 11, 12\\}$, matching "
                "$(X \\cup Y)^{c}$ from part (b), as **De Morgan**'s law predicts.\n\n"
                "So the statement is True."
            )
            t["tactical_explanations"][4] = (
                "**E.** → False\n\n"
                "**Union** stacks every element that appears in at least one of the sets; "
                "shared elements are listed once.\n\n"
                "$X^{c} \\cup Y^{c} = \\{7,8,9,10,11,12\\} \\cup \\{1,2,3,10,11,12\\} "
                "= \\{1,2,3,7,8,9,10,11,12\\}$.\n\n"
                "The statement's set is missing 7, 8, and 9 - it has actually been confused "
                "with $X^{c} \\cap Y^{c}$ from part (c), which produces a different, smaller set.\n\n"
                "So the statement is False."
            )
        if t["id"] == "math-1-10":
            t["tactical_explanations"][4] = (
                "**E.** → False\n\n"
                "Computing $A^{c} \\cup B^{c} = \\{6,7,8,9,10\\} \\cup \\{1,2,3,9,10\\} "
                "= \\{1,2,3,6,7,8,9,10\\}$ - the statement omits 6, 7, and 8.\n\n"
                "This value should equal $(A \\cap B)^{c}$ from statement (d), not "
                "$(A \\cup B)^{c}$ from statement (a); confusing the two is the trap."
            )
        if t["id"] == "math-1-95":
            for i, s in enumerate(t["statements"]):
                t["statements"][i] = s.replace("\\$", "$")
            for i, e in enumerate(t["tactical_explanations"]):
                t["tactical_explanations"][i] = e.replace("\\$", "$")
        after = json.dumps(t, ensure_ascii=False)
        if before != after:
            n += 1

    out = [build.normalize_task_dollars(t) for t in tasks]
    build.write_ts(out)
    print(f"repaired {n} tasks; wrote {len(out)}")


if __name__ == "__main__":
    main()
