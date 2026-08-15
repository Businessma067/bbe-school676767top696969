# -*- coding: utf-8 -*-
"""Strip leftover pads, fix truncations, ensure easy claims have 2 short paras."""
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

PADS = [
    "Write both sides as explicit element lists and compare them one entry at a time — a single missing or extra element is enough to kill equality.",
    "When sizes of a union are involved, inclusion-exclusion for two sets is\n\n$$\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert - \\lvert A \\cap B\\rvert$$\n\nUse every term that the scenario actually supplies.",
    "Point to the failing truth-row or counterexample; that alone settles the claim.",
    "Name the exact failing case: true premise with false conclusion, or a swapped arrow (converse/inverse) that the given implication does not buy.",
    "Name the concrete mismatch: a wrong element, a missed element, or a swapped operation.",
    "Write the claimed arrow next to $p \\Rightarrow q$ so a converse slip is obvious.",
    "Once the English is translated into symbols, the shared facts decide it directly.",
]

FIX_EXPL = {
    ("math-1-44", 1): (
        "**B.** → True\n\n"
        "Disjunction $\\lor$ is true when at least one side is true.\n\n"
        "Here P (\"7 is prime\") is true, so $P \\lor Q$ is true even though Q is false."
    ),
}


def scrub(s: str) -> str:
    for p in PADS:
        s = s.replace(p, "")
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = re.sub(r"[ \t]+\n", "\n", s)
    return s.strip()


def ensure_two_paras(expl: str, verdict: bool) -> str:
    m = re.match(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n?(.*)$", expl, re.S)
    if not m:
        return expl
    head, body = m.group(1), m.group(2).strip()
    paras = [p for p in re.split(r"\n\s*\n", body) if p.strip()]
    if len(paras) >= 2:
        return f"{head}\n\n" + "\n\n".join(paras)
    text = paras[0] if paras else body
    closer = "So the statement is True." if verdict else "So the statement is False."
    if closer.lower() in text.lower():
        if ". " in text:
            a, b = text.split(". ", 1)
            return f"{head}\n\n{a}.\n\n{b}"
        return f"{head}\n\n{text}"
    if len(text.split()) <= 45:
        return f"{head}\n\n{text}\n\n{closer}"
    parts = re.split(r"(?<=[.!?])\s+", text, maxsplit=1)
    if len(parts) == 2:
        return f"{head}\n\n{parts[0]}\n\n{parts[1]}"
    return f"{head}\n\n{text}"


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    for t in tasks:
        t["context"] = scrub(t["context"])
        t["solution_overview"] = scrub(t["solution_overview"])
        t["statements"] = [scrub(s) for s in t["statements"]]
        new = []
        for i, e in enumerate(t["tactical_explanations"]):
            if (t["id"], i) in FIX_EXPL:
                e = FIX_EXPL[(t["id"], i)]
            else:
                e = ensure_two_paras(scrub(e), bool(t["answer_key"][i]))
            new.append(e)
        t["tactical_explanations"] = new
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)
    pads = sum(
        1
        for t in out
        for e in t["tactical_explanations"]
        if "Write both sides as explicit" in e
    )
    trunc = sum(
        1
        for t in out
        for e in t["tactical_explanations"]
        if e.rstrip().endswith("at least one")
    )
    print("wrote", len(out), "pads", pads, "trunc", trunc)


if __name__ == "__main__":
    main()
