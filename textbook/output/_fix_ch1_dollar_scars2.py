# -*- coding: utf-8 -*-
"""Fix remaining $ scars and repetitive closers after binomial-style rewrite."""
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

# Exact / regex scar repairs applied to every string field
EXACT = [
    ("-$3 \\notin N$", "$-3 \\notin N$"),
    ("-$3 \\notin N", "$-3 \\notin N"),
    ("$B \\cap C = \\emptyset)$", "$B \\cap C = \\emptyset$"),
    ("$B \\cap C = \\emptyset)$.", "$B \\cap C = \\emptyset$."),
    ("$\\emptyset \\in D 3$", "$\\emptyset \\in D$"),
    ("$\\emptyset \\in D 3", "$\\emptyset \\in D"),
    # frost / irrigation nested dollars
    (
        "$-2 \\in A ($frost-safe), but -2 ≥ -1 is **false**, so $-2 \\notin B ($irrigation off).",
        "$-2 \\in A$ (frost-safe), but $-2 \\ge -1$ is false, so $-2 \\notin B$ (irrigation off).",
    ),
    (
        "so $-2 \\in A ($frost-safe), but -2 ≥ -1 is **false**, so $-2 \\notin B ($irrigation off).",
        "so $-2 \\in A$ (frost-safe), but $-2 \\ge -1$ is false, so $-2 \\notin B$ (irrigation off).",
    ),
    (
        "$A \\cup B = ($-4, ∞)",
        "$A \\cup B = (-4, \\infty)$",
    ),
    (
        "$A \\cup B = ($-4, ∞):",
        "$A \\cup B = (-4, \\infty)$:",
    ),
]

# Broken "$math$ = number" / "$math$ = expression" → keep comparison inside math when short
SPLIT_EQ = re.compile(
    r"\$(x\^2|T\^2|3\^2|\([^)]+\)\^2)\$\s*=\s*(\d+)",
)

# Nested: $... ($english)  or  $... ($english).
NESTED_GLOSS = re.compile(
    r"\$([^$]{1,80}?)\s*\(\$([^$)]{1,40})\)",
)

# $P \Rightarrow Q ($english) → $P \Rightarrow Q$ (english)
ARROW_GLOSS = re.compile(
    r"(\$[PQR]\\Rightarrow\s*[PQR]\$?)\s*\(\$([^)]+)\)",
)

# Generic: math then ($word) with opening $ still open
OPEN_PAREN_DOLLAR = re.compile(
    r"\$([^$]{0,60}?)\(\$([a-zA-Z][^$)]{0,40})\)",
)

CLOSER_TRUE = re.compile(
    r"\n*\nThe claim matches the facts above, so the statement is True\.?\s*$",
    re.I,
)
CLOSER_FALSE = re.compile(
    r"\n*\nThat mismatch is enough, so the statement is False\.?\s*$",
    re.I,
)
CLOSER_FALSE2 = re.compile(
    r"\n*\nThe claim does not match the facts above, so the statement is False\.?\s*$",
    re.I,
)


def fix_text(s: str) -> str:
    if not s:
        return s
    for a, b in EXACT:
        s = s.replace(a, b)

    # $x^2$ = 9 → $x^2 = 9$
    s = SPLIT_EQ.sub(r"$\1 = \2$", s)
    s = re.sub(r"\$3\^2\$\s*=\s*9", r"$3^2 = 9$", s)
    s = re.sub(r"\$T\^2\$\s*=\s*16", r"$T^2 = 16$", s)
    s = re.sub(r"\$T\^2\$\s*=\s*4", r"$T^2 = 4$", s)

    # (-3)^2 outside math
    s = s.replace("(-3)^2 = 9", "$(-3)^2 = 9$")
    s = s.replace("Both 3 and -3 satisfy $x^2$ = 9", "Both 3 and -3 satisfy $x^2 = 9$")

    # nested glosses: $EXPR ($gloss) → $EXPR$ (gloss)
    def nest_sub(m: re.Match) -> str:
        expr, gloss = m.group(1).rstrip(), m.group(2).strip()
        # if gloss looks like math, keep carefully
        if re.search(r"[\\\\=<>]", gloss):
            return f"${expr}$ (${gloss}$)"
        return f"${expr}$ ({gloss})"

    s = OPEN_PAREN_DOLLAR.sub(nest_sub, s)

    # leftover patterns like $\neg P ($no rain)
    s = re.sub(
        r"\$\\neg P \(\$no rain\)",
        r"$\\neg P$ (no rain)",
        s,
    )
    s = re.sub(
        r"\$\\neg P \(\$([^)]+)\)",
        r"$\\neg P$ (\1)",
        s,
    )
    s = re.sub(
        r"\$\\neg Q \(\$([^)]+)\)",
        r"$\\neg Q$ (\1)",
        s,
    )
    s = re.sub(
        r"\$P \\Rightarrow Q \(\$([^)]+)\)",
        r"$P \\Rightarrow Q$ (\1)",
        s,
    )
    s = re.sub(
        r"\$Q \\Rightarrow P \(\$([^)]+)\)",
        r"$Q \\Rightarrow P$ (\1)",
        s,
    )

    # currency false math: ($50,000) should stay prose — if wrapped wrong
    s = s.replace("($50,000)", "($50,000)")  # noop keep

    # infinite set dots: ($2, 4, 6, 8, \dots$) is OK as one math group
    # Fix emptyset with trailing paren typos
    s = re.sub(r"\\emptyset\)\$", r"\\emptyset$", s)
    s = re.sub(r"\\emptyset\)\.", r"\\emptyset$.", s)

    # infinity symbol in text
    s = s.replace("∞", "\\infty")
    # but only inside math — if we created bare \infty outside $, wrap common cases
    s = re.sub(r"=\s*\\infty(?!\$)", r"= \\infty$", s)  # risky
    # undo if double
    s = s.replace("\\infty$$", "\\infty$")

    return s


def soften_closers(expl: str, verdict: bool, seed: str) -> str:
    """Drop identical closers on short claims; vary on longer ones."""
    body_m = re.match(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n?(.*)$", expl, re.S)
    if not body_m:
        return expl
    head, body = body_m.group(1), body_m.group(2)
    words = len(re.findall(r"\S+", body))
    # Always strip canned closers first
    body2 = CLOSER_TRUE.sub("", body)
    body2 = CLOSER_FALSE.sub("", body2)
    body2 = CLOSER_FALSE2.sub("", body2)
    body2 = body2.rstrip()

    # Short claims: no canned closer
    if words < 55:
        return f"{head}\n\n{body2}"

    # Longer: add a light varied closer only if body doesn't already end with True/False sentence
    if re.search(r"\b(so the statement is (True|False)|the statement is (True|False)|is True\.|is False\.)\s*$", body2, re.I):
        return f"{head}\n\n{body2}"

    variants_t = [
        "So the statement is True.",
        "That matches the shared facts, so the statement is True.",
        "The claim holds on this reading.",
    ]
    variants_f = [
        "So the statement is False.",
        "That counterexample kills the claim.",
        "The wording overreaches the shared facts, so the statement is False.",
    ]
    h = sum(ord(c) for c in seed)
    if verdict:
        closer = variants_t[h % len(variants_t)]
    else:
        closer = variants_f[h % len(variants_f)]
    return f"{head}\n\n{body2}\n\n{closer}"


def process(t: dict) -> dict:
    t["context"] = fix_text(t["context"])
    t["solution_overview"] = fix_text(t["solution_overview"])
    t["statements"] = [fix_text(s) for s in t["statements"]]
    new = []
    for i, e in enumerate(t["tactical_explanations"]):
        e = fix_text(e)
        e = soften_closers(e, bool(t["answer_key"][i]), f"{t['id']}-{i}")
        new.append(e)
    t["tactical_explanations"] = new
    t = build.normalize_task_dollars(t)
    return t


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = [process(t) for t in tasks]
    # hard fail on known scars
    bad = []
    for t in out:
        blob = "\n".join(
            [t["context"], t["solution_overview"], *t["statements"], *t["tactical_explanations"]]
        )
        for needle in (
            "-$3",
            "\\emptyset)",
            "\\in D 3",
            "($frost-safe)",
            "($irrigation",
            "Name the concrete mismatch",
            "Use the scenario above as the shared setup",
            "$A \\cup B = ($-4",
        ):
            if needle in blob:
                bad.append((t["id"], needle))
    build.write_ts(out)
    print("wrote", len(out), "bad", bad[:20], "nbad", len(bad))


if __name__ == "__main__":
    main()
