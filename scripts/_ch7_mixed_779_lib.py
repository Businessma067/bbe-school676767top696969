"""Shared helpers for Ch7 mixed 7.79-voice letter rewrites."""
from __future__ import annotations

import re

BANNED = [
    "as in the overview",
    "from the overview",
    "in the overview",
    "the overview",
    "Matching the claim",
    r"\deg",
    r"\circ",
    "from the figure:",
    "from the table:",
]


def D(s: str) -> str:
    inner = re.sub(r"\s+", " ", s).strip()
    return f"$${inner}$$"


def join(*parts: str) -> str:
    return "\n\n".join(p.strip() for p in parts if p and str(p).strip())


def normalize_displays(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        inner = re.sub(r"\s+", " ", m.group(1)).strip()
        return f"$${inner}$$" if inner else ""

    text = re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def expl(letter: str, truth: bool, *parts: str) -> str:
    verd = "True" if truth else "False"
    body = join(*parts)
    if body.lower().count("so the statement is") != 1:
        raise ValueError(f"{letter}: close phrase must appear once ({body[-120:]!r})")
    if not body.endswith(f", so the statement is {verd}."):
        raise ValueError(f"{letter}: missing close ({body[-80:]!r})")
    low = body.lower()
    for b in ("as in the overview", "from the overview", "in the overview", "the overview"):
        if b in low:
            raise ValueError(f"{letter}: overview dependence ({b})")
    if "from the figure:" in low or "from the table:" in low:
        raise ValueError(f"{letter}: From-the-figure prefix")
    return normalize_displays(f"**{letter}.** → {verd}\n\n{body}")
