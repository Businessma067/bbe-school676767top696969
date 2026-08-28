"""MATH 13.18 voice helpers for hard Ch2 explanation bodies.

Bodies authored here are raw algebra + prose. assemble.py binds letter headers,
assigns short/stepped/medium styles, and adds verdict closers.
"""

from __future__ import annotations


def D(formula: str) -> str:
    return f"$${formula.strip().strip('$')}$$"


def step(label: str, formula: str, *, after: str = "") -> str:
    """Name the rule, show one display block, optionally bridge to the next step."""
    label = label.rstrip(": ")
    out = f"{label}:\n\n{D(formula)}"
    if after:
        out += f"\n\n{after.strip()}"
    return out


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and p.strip())


def explain(opener: str, steps: list[tuple[str, str, str]], closer: str) -> str:
    """Opener paragraph, one named step per display, pre-closer comparison."""
    parts = [opener.strip()]
    for label, formula, after in steps:
        parts.append(step(label, formula, after=after))
    parts.append(closer.strip())
    return join(*parts)


# Back-compat aliases used while migrating hard_exam_bank.py
S = step
