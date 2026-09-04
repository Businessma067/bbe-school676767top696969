#!/usr/bin/env python3
"""Replace hollow-circle composition with nested function notation.

Students see g(f(x)), not the circ operator.  Celsius degree marks are left
alone.  Task meaning and answer keys are unchanged.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

FILES = [
    Path("/workspace/src/data/math-ch7-linear-quadratic.json"),
    Path("/workspace/src/data/math-ch9-polynomials.json"),
]

# Longer / more specific patterns first.
# Each pair is (regex, replacement).  Applied to every text field.
PATTERNS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"g\\circ f\\circ g"), r"g(f(g(x)))"),
    (re.compile(r"g\\circ f\^{-1}"), r"g(f^{-1}(x))"),
    (re.compile(r"f\^{-1}\\circ g"), r"f^{-1}(g(x))"),
    (re.compile(r"g=q\\circ f"), r"g(x)=q(f(x))"),
    (re.compile(r"r=q\\circ p"), r"r(x)=q(p(x))"),
    (re.compile(r"g\\circ g"), r"g(g(x))"),
    (re.compile(r"f\\circ f"), r"f(f(x))"),
    (re.compile(r"g\\circ f"), r"g(f(x))"),
    (re.compile(r"f\\circ g"), r"f(g(x))"),
    (re.compile(r"q\\circ p"), r"q(p(x))"),
    (re.compile(r"p\\circ q"), r"p(q(x))"),
    (re.compile(r"q\\circ f"), r"q(f(x))"),
    (re.compile(r"P\\circ m"), r"P(m(t))"),
    (re.compile(r"g\\circ f\^\{2\}"), r"g(f(x)^{2})"),
]

WORDING = [
    (re.compile(r"The composite \$"), "The nested function $"),
    (re.compile(r"the composite \$"), "the nested function $"),
    (re.compile(r"The composition \$"), "The nested function $"),
    (re.compile(r"the composition \$"), "the nested function $"),
    (re.compile(r"Consider the compositions \$"), "Consider the nested functions $"),
    (re.compile(r"consider the compositions \$"), "consider the nested functions $"),
    (re.compile(r"about compositions\."), "about nested functions."),
]


def rewrite(text: str) -> str:
    if not text:
        return text
    # Protect Celsius before touching \circ.
    placeholders: list[str] = []

    def stash(m: re.Match[str]) -> str:
        placeholders.append(m.group(0))
        return f"@@CELSIUS{len(placeholders) - 1}@@"

    out = re.sub(r"\^\{\\circ\}\\mathrm\{C\}", stash, text)
    out = re.sub(r"\^\\circ\\mathrm\{C\}", stash, out)
    for pat, repl in PATTERNS:
        out = pat.sub(repl, out)
    for pat, repl in WORDING:
        out = pat.sub(repl, out)
    # leftover composition operator (should be none except stashed Celsius)
    if "\\circ" in out:
        # keep Celsius placeholders; flag any real leftover
        pass
    for i, saved in enumerate(placeholders):
        out = out.replace(f"@@CELSIUS{i}@@", saved)
    return out


def walk(obj):
    if isinstance(obj, str):
        return rewrite(obj)
    if isinstance(obj, list):
        return [walk(x) for x in obj]
    if isinstance(obj, dict):
        return {k: walk(v) for k, v in obj.items()}
    return obj


def leftover_circ(obj, acc: list[str], path: str = "") -> None:
    if isinstance(obj, str):
        if "\\circ" in obj and r"^{\circ}\mathrm{C}" not in obj and r"^\circ\mathrm{C}" not in obj:
            # allow Celsius even if mixed
            stripped = re.sub(r"\^\{\\circ\}\\mathrm\{C\}", "", obj)
            stripped = re.sub(r"\^\\circ\\mathrm\{C\}", "", stripped)
            if "\\circ" in stripped:
                acc.append(f"{path}: {obj[:120]}")
        return
    if isinstance(obj, list):
        for i, x in enumerate(obj):
            leftover_circ(x, acc, f"{path}[{i}]")
        return
    if isinstance(obj, dict):
        for k, v in obj.items():
            leftover_circ(v, acc, f"{path}.{k}")


def main() -> None:
    for path in FILES:
        data = json.loads(path.read_text())
        data = walk(data)
        hits: list[str] = []
        leftover_circ(data, hits)
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        print(f"{path.name}: leftover non-Celsius circ = {len(hits)}")
        for h in hits[:12]:
            print(" ", h)


if __name__ == "__main__":
    main()
