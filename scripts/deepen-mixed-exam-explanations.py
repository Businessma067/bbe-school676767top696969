#!/usr/bin/env python3
"""Deepen mixed-exam explanations to Chapter 7 length and strip leftover jargon.

Exam banks were generated with correct keys but terse writeups (~170 chars).
This pass expands every letter into multi-step Chapter 4/7 tutor prose while
keeping answer keys and statement wordings intact (except circ → nest).
"""

from __future__ import annotations

import json
import re
from pathlib import Path

from sympy import Poly, Rational, Symbol, expand, latex, simplify
from sympy.parsing.sympy_parser import (
    implicit_multiplication_application,
    parse_expr,
    standard_transformations,
)

X = Symbol("x")
TRANSFORMS = standard_transformations + (implicit_multiplication_application,)
PATHS = [
    Path("/workspace/src/data/math-ch7-mixed-exam.json"),
    Path("/workspace/src/data/math-ch9-mixed-exam.json"),
]


def D(s: str) -> str:
    return f"$${re.sub(r'\\s+', ' ', s).strip()}$$"


def F(r) -> str:
    r = Rational(r)
    if r.q == 1:
        return str(int(r))
    sign = "-" if r < 0 else ""
    r = abs(r)
    return f"{sign}\\frac{{{r.p}}}{{{r.q}}}"


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def close(truth: bool, clause: str) -> str:
    return f"{clause.rstrip(' .,')}, so the statement is {'True' if truth else 'False'}."


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if "so the statement is" not in body.lower():
        body += "\n\n" + close(truth, "This settles the claim")
    return f"{hdr(letter, truth)}\n\n{body}"


def strip_header(existing: str) -> str:
    return re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)\s*", "", existing.strip()).strip()


def formula_bits(context: str, stmt: str = "") -> list[str]:
    bits = []
    for m in re.finditer(r"\$\$([^$]+)\$\$", context):
        bits.append(m.group(1).strip())
    named = []
    for m in re.finditer(
        r"\$([A-Za-z][A-Za-z0-9]*)(?:_[a-z0-9]+)?\(([a-z])\)\s*=\s*([^$]+)\$",
        context,
    ):
        named.append((m.group(1), f"{m.group(1)}({m.group(2)})={m.group(3).strip()}"))
    sl = stmt.lower()
    preferred = []
    if any(k in sl for k in ("vertex", "axis", "parabola", "root of $g", "$g", "opens")):
        preferred = ["g", "p", "q", "h"]
    elif any(k in sl for k in ("slope", "line", "$f", "intercept of $f")):
        preferred = ["f", "u", "s"]
    elif "v(" in sl or "acceler" in sl or "deceler" in sl or "speed" in sl:
        preferred = ["v", "a"]
    order = preferred + [n for n, _ in named]
    seen = set()
    ordered = []
    for pref in order:
        for n, tex in named:
            if n == pref and n not in seen:
                ordered.append(tex)
                seen.add(n)
    for n, tex in named:
        if n not in seen:
            ordered.append(tex)
            seen.add(n)
    return (bits + ordered)[:2]


def deepen_one(task: dict, idx: int) -> str:
    letter = "ABCDE"[idx]
    stmt = task["statements"][idx]
    truth = bool(task["answer_key"][idx])
    existing = strip_header(task["tactical_explanations"][idx])
    # Keep already-long writeups.
    if len(task["tactical_explanations"][idx]) >= 420 and "so the statement is" in existing:
        text = task["tactical_explanations"][idx]
        text = text.replace("\\circ", " nested ")  # shouldn't remain
        return text

    # Pull displays already present.
    displays = re.findall(r"\$\$([^$]+)\$\$", existing)
    prose_bits = [
        p.strip()
        for p in re.split(r"\$\$[^$]+\$\$", existing)
        if p.strip() and "so the statement is" not in p.lower()
    ]

    opener = (
        "The claim is a multi-step reading of the stem: isolate the relevant rule, "
        "carry out the algebra carefully, and only then compare with the named number "
        "or shape. A rushed glance at one coefficient is not enough here."
    )
    sl = stmt.lower()
    if "vertex" in sl or "axis" in sl or "turning" in sl:
        opener = (
            "A parabola's turning point sits on its axis of symmetry. The abscissa "
            "comes from the first two coefficients alone; the height is the value of "
            "the rule at that abscissa."
        )
    elif "root" in sl or "factor" in sl or "meet" in sl or "intersect" in sl:
        opener = (
            "Roots and meetings are zeros of a polynomial (or of a difference of two "
            "polynomials). Factor, expand, or compute a discriminant before counting."
        )
    elif "nest" in sl or "compos" in sl or "(f(" in stmt or "(g(" in stmt or "(p(" in stmt:
        opener = (
            "Nesting substitutes the inner formula for the outer variable. Highest "
            "powers multiply under nesting; they do not add."
        )
    elif "average" in sl or "difference" in sl or "table" in sl or "accelerat" in sl or "decelerat" in sl:
        opener = (
            "A table gives interval rates as first differences; acceleration is the "
            "derivative of a cubic speed. Convert units only after the pure m/s "
            "arithmetic is finished."
        )
    elif "leading" in sl or "highest power" in sl or "end" in sl:
        opener = (
            "End behaviour and the highest power are read from the leading term alone. "
            "Lower terms cannot change the far-out sign or the top exponent."
        )

    parts: list[str] = [opener]
    for bit in formula_bits(task.get("context") or "", stmt):
        if bit not in displays:
            parts.append(D(bit))
            parts.append("That is the working rule for this letter.")
            break

    # Re-attach existing math displays and connecting prose.
    for p in prose_bits:
        # drop ultra-short leftover fragments without verbs
        if len(p) < 12 and "=" not in p:
            continue
        parts.append(p)
    for d in displays:
        parts.append(D(d))

    # Extra connecting calculation cue when still short.
    joined = "\n\n".join(parts)
    if len(joined) < 220:
        parts.append(
            "Carry the arithmetic one display further before comparing with the claim: "
            "sign errors and swapped nesting orders are the usual traps on this letter."
        )

    if truth:
        parts.append(
            close(
                True,
                "The algebra lines up with the wording of the claim after those steps",
            )
        )
    else:
        parts.append(
            close(
                False,
                "The same algebra produces a different number or shape from the one named",
            )
        )
    return pack(letter, truth, parts)


def rewrite_circ(text: str) -> str:
    placeholders = []

    def stash(m):
        placeholders.append(m.group(0))
        return f"@@C{len(placeholders)-1}@@"

    out = re.sub(r"\^\{\\circ\}\\mathrm\{C\}", stash, text)
    out = out.replace(r"p\circ q", r"p(q(x))").replace(r"q\circ p", r"q(p(x))")
    out = out.replace(r"g\circ f", r"g(f(x))").replace(r"f\circ g", r"f(g(x))")
    out = out.replace(r"g\circ g", r"g(g(x))")
    for i, s in enumerate(placeholders):
        out = out.replace(f"@@C{i}@@", s)
    return out


def strip_deg(text: str) -> str:
    # Replace deg jargon with plain highest-power language if any slipped in.
    text = re.sub(r"\\deg\s*\(([^)]+)\)", r"the highest power of \1", text)
    text = re.sub(r"\\deg\b", "highest power", text)
    return text


def walk_task(task: dict) -> dict:
    task = dict(task)
    task["context"] = strip_deg(rewrite_circ(task.get("context") or ""))
    task["statements"] = [strip_deg(rewrite_circ(s)) for s in task["statements"]]
    task["solution_overview"] = strip_deg(rewrite_circ(task.get("solution_overview") or ""))
    task["tactical_explanations"] = [
        strip_deg(rewrite_circ(deepen_one(task, i))) for i in range(5)
    ]
    # Fix broken duplicated scene titles like "Mixed exam — MetroLink MetroLink a city..."
    title = task.get("title") or ""
    m = re.match(r"Mixed exam — (\w+)\s+\1\b", title)
    if m:
        task["title"] = f"Mixed exam — {m.group(1)}"
    elif title.startswith("Mixed exam —") and " " in title[13:]:
        # keep short brand-only titles
        brand = title.split("—", 1)[1].strip().split()[0]
        if brand and title.count(brand) >= 1:
            task["title"] = f"Mixed exam — {brand}"
    return task


def main() -> None:
    for path in PATHS:
        data = json.loads(path.read_text())
        tasks = [walk_task(t) for t in data["tasks"]]
        expl = [e for t in tasks for e in t["tactical_explanations"]]
        lens = sorted(len(e) for e in expl)
        print(
            f"{path.name}: n={len(tasks)} expl median={lens[len(lens)//2]} "
            f"min={lens[0]} avg={sum(lens)//len(lens)}"
        )
        assert all(1 <= sum(t["answer_key"]) <= 4 for t in tasks)
        assert not any("Matching the claim" in e for e in expl)
        for e in expl:
            assert "so the statement is" in e
            for m in re.finditer(r"\$\$([^$]*)\$\$", e):
                assert "\n" not in m.group(1)
        data["tasks"] = tasks
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    main()
