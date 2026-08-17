# -*- coding: utf-8 -*-
"""Per-task audit of Ch1 Logic: leading dashes + real math scars."""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

TS = Path("src/data/math-ch1-logic.ts")
OUT = Path("textbook/output/_audit_ch1_dashes_symbols.txt")
t = TS.read_text(encoding="utf-8")

# Split on id lines with optional leading spaces
parts = re.split(r'(?=^\s*id:\s*"math-1-\d+")', t, flags=re.M)
tasks: list[tuple[str, str]] = []
for part in parts:
    m = re.match(r'\s*id:\s*"(math-1-\d+)"', part)
    if m:
        tasks.append((m.group(1), part))


def extract_strings(body: str) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    m = re.search(r'solution_overview:\s*"((?:\\.|[^"\\])*)"', body)
    if m:
        out.append(("overview", m.group(1)))
    arr = re.search(
        r"tactical_explanations:\s*\[([\s\S]*?)\],\s*\n\s*difficulty_level", body
    )
    if arr:
        for i, em in enumerate(re.finditer(r'"((?:\\.|[^"\\])*)"', arr.group(1))):
            out.append((f"expl{i}", em.group(1)))
    return out


def iter_math_spans(s: str):
    """Yield (start, end, kind, inner) for $...$ and $$...$$, skipping currency."""
    i = 0
    while i < len(s):
        if s.startswith("$$", i):
            j = s.find("$$", i + 2)
            if j == -1:
                yield i, len(s), "broken_display", s[i:]
                return
            yield i, j + 2, "display", s[i + 2 : j]
            i = j + 2
            continue
        if s[i] == "$":
            j = s.find("$", i + 1)
            if j == -1:
                yield i, len(s), "broken_inline", s[i:]
                return
            yield i, j + 1, "inline", s[i + 1 : j]
            i = j + 1
            continue
        i += 1


issues: list[str] = []
dash_hits: list[str] = []

for tid, body in tasks:
    # Leading list dashes in TS string escapes: \n- 
    for m in re.finditer(r'\\n-\s+([^\n\\]{0,70})', body):
        dash_hits.append(f"{tid}: - {m.group(1)}")

    for kind, raw in extract_strings(body):
        # Work on the string as stored for JS (unescape \\ -> \ and \n)
        s = bytes(raw, "utf-8").decode("unicode_escape") if False else raw
        # Proper TS-string unescape for our purposes:
        s = raw.replace(r"\\", "\0").replace(r"\n", "\n").replace(r'\"', '"').replace("\0", "\\")

        # Split brace scars
        if r"$\{$" in raw or r"$}$" in raw or r"$\{$" in s:
            issues.append(f"{tid}.{kind}: split_brace")

        # English proper names inside set math
        for _a, _b, mk, inner in iter_math_spans(s):
            if mk.startswith("broken"):
                issues.append(f"{tid}.{kind}: {mk} …{inner[:50]!r}")
                continue
            # Capitalized English name in set braces
            if re.search(r"\\?\{[^}]*[A-Z][a-z]{2,}", inner):
                issues.append(f"{tid}.{kind}: name_in_math_set ${{{inner[:40]}}}")
            # Multi-word English inside math
            stripped = re.sub(r"\\[a-zA-Z]+\*?", " ", inner)
            stripped = re.sub(r"[^A-Za-z\s]", " ", stripped)
            if re.search(
                r"\b(the|and|or|for|with|from|that|which|this|into|only|also|both|every|some|keeps|members|missing)\b",
                stripped,
                re.I,
            ):
                issues.append(f"{tid}.{kind}: english_in_{mk} ${inner[:50]}$")

        # Bare backslash commands outside math
        # Build mask of math regions
        mask = [False] * len(s)
        for a, b, mk, _inner in iter_math_spans(s):
            for k in range(a, min(b, len(s))):
                mask[k] = True
        for cmd in (
            "cap",
            "cup",
            "setminus",
            "subseteq",
            "emptyset",
            "neg",
            "land",
            "lor",
            "Rightarrow",
            "forall",
            "exists",
            "times",
            "in",
            "notin",
            "quad",
            "mathcal",
            "binom",
            "ge",
            "le",
            "neq",
        ):
            for m in re.finditer(rf"\\{cmd}\b", s):
                if m.start() < len(mask) and not mask[m.start()]:
                    issues.append(f"{tid}.{kind}: bare\\{cmd}")

        # Unbalanced braces in math inners
        for _a, _b, mk, inner in iter_math_spans(s):
            if mk.startswith("broken"):
                continue
            if inner.count("{") != inner.count("}"):
                issues.append(f"{tid}.{kind}: unbalanced_braces_in_{mk} ${inner[:60]}$")

lines = [
    f"tasks={len(tasks)}",
    "=== leading dashes ===",
    f"count={len(dash_hits)}",
    *dash_hits,
    "",
    "=== symbol issues ===",
    f"count={len(issues)}",
    *issues,
]
OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"tasks={len(tasks)} dashes={len(dash_hits)} issues={len(issues)} -> {OUT}")
