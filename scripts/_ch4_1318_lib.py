"""Shared helpers for MATH 13.18-style Ch4 explanation rewrites."""

from __future__ import annotations

import re

LETTERS = "ABCDE"

OPENERS = [
    "Undo the operations in reverse order.",
    "Translate the claim into algebra first.",
    "Isolate the unknown one step at a time.",
    "Name the governing equation, then solve it.",
    "Start from the displayed model and check the claim against it.",
    "Clear the displayed equation before comparing with the claim.",
    "Work from the shared recovery, then do only this claim’s extra arithmetic.",
    "Read the coefficient and constant carefully before rearranging.",
    "Keep the stated domain in force while you solve.",
    "Compare the recovered value with the figure in the claim.",
]


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def close(truth: bool) -> str:
    v = "True" if truth else "False"
    return f"Comparing with the claim, so the statement is {v}."


def close_short(truth: bool) -> str:
    v = "True" if truth else "False"
    return f"So the statement is {v}."


def D(formula: str) -> str:
    return f"$${formula.strip().strip('$')}$$"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def pack(letter: str, truth: bool, *parts: str, short: bool = False) -> str:
    body = join(*parts)
    closer = close_short(truth) if short else close(truth)
    if "so the statement is" not in body.lower():
        body = join(body, closer)
    return f"{hdr(letter, truth)}\n\n{body}"


def opener(i: int) -> str:
    return OPENERS[i % len(OPENERS)]


def latex_int(n: int | float) -> str:
    if isinstance(n, float) and abs(n - round(n)) < 1e-12:
        n = int(round(n))
    return str(n)


def normalize_existing(letter: str, truth: bool, text: str) -> str:
    """Force header + closer; leave body otherwise intact."""
    verd = "True" if truth else "False"
    body = text.strip()
    body = re.sub(
        r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)\s*",
        "",
        body,
        count=1,
    ).strip()
    body = re.sub(
        r"\n+So the statement is (True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    ).strip()
    body = re.sub(
        r"\n+Matching.*?so the statement is (True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    ).strip()
    body = re.sub(
        r"\n+The claim is (True|False)\.?\s*$",
        "",
        body,
        flags=re.I,
    ).strip()
    return pack(letter, truth, body)
