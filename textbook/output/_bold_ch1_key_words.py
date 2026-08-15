# -*- coding: utf-8 -*-
"""
Bold only important words inside Ch1 tactical explanations (sparse).

UI (MathProse/RichMathLine) already renders **word** as <strong>.
We add 1–2 key pedagogical terms per explanation body — never true/false/and/not.
"""
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

# Longer phrases first so we don't bold a substring of a better phrase.
KEY_PHRASES = [
    "contrapositive",
    "biconditional",
    "if and only if",
    "inclusion-exclusion",
    "proper subset",
    "power set",
    "empty set",
    "De Morgan",
    "De Morgan's",
    "symmetric difference",
    "Cartesian product",
    "counterexample",
    "vacuously",
    "vacuous",
    "necessary condition",
    "sufficient condition",
    "only if",
    "converse",
    "inverse",
    "unless",
    "partition",
    "disjoint",
    "complement",
    "membership",
    "intersection",
    "difference",
    "subset",
    "union",
    "forced",
    "unique",
    "uniqueness",
]


def mask_math(s: str) -> tuple[str, list[str]]:
    bag: list[str] = []

    def stash(m: re.Match) -> str:
        bag.append(m.group(0))
        return f"\ue000{len(bag)-1}\ue001"

    s = re.sub(r"\$\$[\s\S]*?\$\$", stash, s)
    s = re.sub(r"\$[^$]*\$", stash, s)
    return s, bag


def unmask(s: str, bag: list[str]) -> str:
    return re.sub(r"\ue000(\d+)\ue001", lambda m: bag[int(m.group(1))], s)


def bold_sparse(body: str, max_n: int = 2) -> str:
    """Bold up to max_n key phrases in body (outside math). Keep existing **Trap:**."""
    masked, bag = mask_math(body)
    # Protect existing bold
    existing: list[str] = []

    def stash_bold(m: re.Match) -> str:
        existing.append(m.group(0))
        return f"\ue010{len(existing)-1}\ue011"

    work = re.sub(r"\*\*[^*]+\*\*", stash_bold, masked)
    n = 0
    for phrase in KEY_PHRASES:
        if n >= max_n:
            break
        # already covered by a longer bold? skip if phrase appears inside existing bold text
        pat = re.compile(rf"(?<!\*)\b({re.escape(phrase)})\b(?!\*)", re.I)

        def repl(m: re.Match, _n=n) -> str:
            # preserve original casing
            return f"**{m.group(1)}**"

        new_work, count = pat.subn(repl, work, count=1)
        if count:
            work = new_work
            n += 1

    work = re.sub(r"\ue010(\d+)\ue011", lambda m: existing[int(m.group(1))], work)
    return unmask(work, bag)


def process_expl(expl: str) -> str:
    m = re.match(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n?(.*)$", expl, re.S)
    if not m:
        return expl
    head, body = m.group(1), m.group(2).strip()
    # Slightly more bold room on longer write-ups
    words = len(re.findall(r"\S+", body))
    max_n = 1 if words < 50 else (2 if words < 120 else 3)
    body = bold_sparse(body, max_n=max_n)
    return f"{head}\n\n{body}"


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    with_body_bold = 0
    total_bolds = 0
    for t in tasks:
        new = []
        for e in t["tactical_explanations"]:
            e2 = process_expl(e)
            body = re.sub(r"^\*\*[A-E]\.\*\*[^\n]*\n*", "", e2)
            # count bold excluding Trap:
            bolds = re.findall(r"\*\*([^*]+)\*\*", body)
            if bolds:
                with_body_bold += 1
                total_bolds += len(bolds)
            new.append(e2)
        t["tactical_explanations"] = new
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)
    print(
        f"wrote {len(out)}; expls_with_bold={with_body_bold}/540; "
        f"bold_spans={total_bolds}"
    )


if __name__ == "__main__":
    main()
