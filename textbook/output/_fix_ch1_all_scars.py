# -*- coding: utf-8 -*-
"""Fix remaining Ch1 Logic $ scars / broken inline math across all tasks."""
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


def esc_currency(text: str) -> str:
    """Escape prose currency amounts so they do not open math spans."""
    # already escaped \$ — leave alone
    return re.sub(
        r"(?<!\\)\$(?=\d)",
        r"\\$",
        text,
    )


def fix_complements(text: str) -> str:
    """Rewrite unicode superscript-c mixes into closed KaTeX spans."""
    # Xᶜ $= \{...\}$  /  Xᶜ $\cap$ Yᶜ $= \{...\}$
    text = re.sub(
        r"([A-Z])ᶜ\s*\$\\cap\$\s*([A-Z])ᶜ\s*\$=\s*(\\\{[^$]*\\\})\$",
        r"$\1^{c} \\cap \2^{c} = \3$",
        text,
    )
    text = re.sub(
        r"([A-Z])ᶜ\s*\$\\cup\$\s*([A-Z])ᶜ\s*\$=\s*(\\\{[^$]*\\\})\$",
        r"$\1^{c} \\cup \2^{c} = \3$",
        text,
    )
    text = re.sub(
        r"\(\$([A-Z]\s*\\(?:cap|cup)\s*[A-Z])\$\)ᶜ\s*=\s*([A-Z])ᶜ\s*\$\\(?:cap|cup)\$\s*([A-Z])ᶜ",
        lambda m: f"$({m.group(1)})^{{c}} = {m.group(2)}^{{c}} "
        + ("\\cap " if "\\cap" in text[m.start() : m.end()] else "\\cup ")
        + f"{m.group(3)}^{{c}}$",
        text,
    )
    # Simpler explicit forms used in the bank:
    replacements = [
        (
            "$(X \\cap Y)$ᶜ = Xᶜ $\\cup$ Yᶜ",
            "$(X \\cap Y)^{c} = X^{c} \\cup Y^{c}$",
        ),
        (
            "$(A \\cap B)$ᶜ = Aᶜ $\\cup$ Bᶜ",
            "$(A \\cap B)^{c} = A^{c} \\cup B^{c}$",
        ),
        (
            "$(A \\cup B)$ᶜ = Aᶜ $\\cap$ Bᶜ.",
            "$(A \\cup B)^{c} = A^{c} \\cap B^{c}$.",
        ),
        (
            "$(A \\cap B)$ᶜ = Aᶜ $\\cup$ Bᶜ.",
            "$(A \\cap B)^{c} = A^{c} \\cup B^{c}$.",
        ),
        (
            "Xᶜ $\\cap$ Yᶜ $= \\{10, 11, 12\\}$",
            "$X^{c} \\cap Y^{c} = \\{10, 11, 12\\}$",
        ),
        (
            "Xᶜ $\\cup$ Yᶜ $= \\{1, 2, 3, 10, 11, 12\\}$",
            "$X^{c} \\cup Y^{c} = \\{1, 2, 3, 10, 11, 12\\}$",
        ),
        (
            "Xᶜ $= \\{7, 8, 9, 10, 11, 12\\}$",
            "$X^{c} = \\{7, 8, 9, 10, 11, 12\\}$",
        ),
        (
            "Aᶜ $\\cap$ Bᶜ $= \\{6, 7, 8, 9, 10\\}$",
            "$A^{c} \\cap B^{c} = \\{6, 7, 8, 9, 10\\}$",
        ),
        (
            "Aᶜ $\\cup$ Bᶜ $= \\{1, 2, 3, 9, 10\\}$",
            "$A^{c} \\cup B^{c} = \\{1, 2, 3, 9, 10\\}$",
        ),
        (
            "$(X \\cup Y)$ᶜ $= \\{10, 11, 12\\}$",
            "$(X \\cup Y)^{c} = \\{10, 11, 12\\}$",
        ),
        (
            "$(A \\cup B)$ᶜ $= \\{8, 9, 10\\}$",
            "$(A \\cup B)^{c} = \\{8, 9, 10\\}$",
        ),
        (
            "$(A \\cap B)$ᶜ $= \\{1, 2, 3, 6, 7, 8, 9, 10\\}$",
            "$(A \\cap B)^{c} = \\{1, 2, 3, 6, 7, 8, 9, 10\\}$",
        ),
        (
            "$(A \\cup B)$ᶜ $= \\{9, 10\\}$.",
            "$(A \\cup B)^{c} = \\{9, 10\\}$.",
        ),
        (
            "$(A \\cap B)$ᶜ $= \\{1, 2, 3, 4, 5, 9, 10\\}$.",
            "$(A \\cap B)^{c} = \\{1, 2, 3, 4, 5, 9, 10\\}$.",
        ),
    ]
    for a, b in replacements:
        text = text.replace(a, b)

    # Remaining prose mentions of Xᶜ / Aᶜ → $X^{c}$
    text = re.sub(r"(?<!\$)([A-Z])ᶜ(?!\$)", r"$\1^{c}$", text)
    # Fix double-wrapping accidental $$X^{c}$$
    text = text.replace("$$", "$$")  # no-op keep display
    text = re.sub(r"\$\$([A-Z]\^\{c\})\$\$", r"$\1$", text)
    text = re.sub(r"\$([A-Z]\^\{c\})\$\$", r"$\1$", text)
    text = re.sub(r"\$\$([A-Z]\^\{c\})\$", r"$\1$", text)
    # Collapse adjacent $X^{c}$$ = → merge if we created $X^{c}$ $=
    text = re.sub(r"\$([A-Z]\^\{c\})\$\s*\$=", r"$\1 =", text)
    text = re.sub(r"\$([A-Z]\^\{c\})\$\s*\$\\", r"$\1 \\", text)
    return text


def fix_generic_scars(text: str) -> str:
    # Split negation: $\neg$ $(P \land Q)$ → $\neg(P \land Q)$
    text = re.sub(r"\$\\neg\$\s*\(\s*\$([^$]+)\$\s*\)", r"$\\neg(\1)$", text)
    text = re.sub(r"\$\\neg\$\s*\(([^)$]+)\)", r"$\\neg(\1)$", text)

    # Lone connective between parenthesized diffs:
    # ($A \setminus B$)$ \cup$ $(B \setminus A)$ → $(A \setminus B) \cup (B \setminus A)$
    text = re.sub(
        r"\(\$([^$]+)\$\)\s*\$\\cup\$\s*\$?\(([^)$]+)\)\$?",
        r"$(\1) \\cup (\2)$",
        text,
    )
    text = re.sub(
        r"\(\$([^$]+)\$\)\s*\$\\cap\$\s*\$?\(([^)$]+)\)\$?",
        r"$(\1) \\cup (\2)$" if False else r"$(\1) \\cap (\2)$",
        text,
    )

    # Broken intervals: (0$, 15] / (0$, 5)
    text = re.sub(r"\(0\$,\s*15\]", r"(0, 15]", text)
    text = re.sub(r"\$A \\cup B = \(0\$,\s*15\]\$?", r"$A \\cup B = (0, 15]$", text)
    text = text.replace("$A \\cup B = (0$, 15]", "$A \\cup B = (0, 15]$")
    text = text.replace("$A \\setminus B = (0$, 5).", "$A \\setminus B = (0, 5)$.")
    text = text.replace("$A \\cap B =$ [5, 10]", "$A \\cap B = [5, 10]$")

    # Cartesian scars
    text = text.replace("(2, $x) \\in A \\times B$.", "$(2, x) \\in A \\times B$.")
    text = text.replace("(x, $2) \\in A \\times B$.", "$(x, 2) \\in A \\times B$.")
    text = text.replace("(2,$x) \\notin B \\times A$", "$(2, x) \\notin B \\times A$")

    # Symmetric difference definition
    text = text.replace(
        "AΔB = ($A \\setminus B$)$ \\cup$ $(B \\setminus A)$",
        "$A\\triangle B = (A \\setminus B) \\cup (B \\setminus A)$",
    )
    text = text.replace(
        "AΔB = ($A \\setminus B$)$ \\cap$ $(B \\setminus A)$",
        "$A\\triangle B = (A \\setminus B) \\cap (B \\setminus A)$",
    )
    text = text.replace("AΔB $= \\{1, 2, 5, 6\\}$.", "$A\\triangle B = \\{1, 2, 5, 6\\}$.")
    text = text.replace("$A \\cap B \\subseteq$ AΔB.", "$A \\cap B \\subseteq A\\triangle B$.")
    text = text.replace("then AΔB $= A \\cup B$.", "then $A\\triangle B = A \\cup B$.")
    text = text.replace("So AΔB $= A \\cup B$.", "So $A\\triangle B = A \\cup B$.")
    text = text.replace("and AΔB are", "and $A\\triangle B$ are")

    # Stray closing paren inside math: $x \in A)$ → $x \in A$)
    text = text.replace("$x \\in A)$", "$x \\in A$)")
    text = text.replace("$x \\notin B)$", "$x \\notin B$)")

    # Quote glue words around land: " $\land$ " → "$\\land$"
    text = text.replace('" $\\land$ "', '"$\\land$"')
    text = text.replace('" $\\lor$ "', '"$\\lor$"')

    return text


TASK_OVERRIDES = {
    "math-1-47": {
        "statements": {
            3: (
                '"$(x \\in P \\land x \\neq 2) \\Rightarrow$ ($x$ is odd)" '
                "is a true statement for all $x$"
            ),
        }
    },
}


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
        map_fields(t, fix_complements)
        map_fields(t, fix_generic_scars)
        # Currency escape only on money tasks (62, 75) and any remaining odd-$ from amounts
        if t["id"] in ("math-1-62", "math-1-75") or "$1" in before or "$2" in before or "$20" in before:
            map_fields(t, esc_currency)

        ov = TASK_OVERRIDES.get(t["id"])
        if ov:
            for i, s in ov.get("statements", {}).items():
                t["statements"][i] = s

        after = json.dumps(t, ensure_ascii=False)
        if before != after:
            n += 1

    out = [build.normalize_task_dollars(t) for t in tasks]
    build.write_ts(out)
    print(f"fixed scars in {n} tasks; wrote {len(out)}")


if __name__ == "__main__":
    main()
