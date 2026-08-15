# -*- coding: utf-8 -*-
"""Second pass: strip leftover template padding; fix binom brace false-positives."""
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

PAD = re.compile(
    r"(?:Tier\s+\d+\s*-\s*[A-Za-z0-9 ]+\s*)?"
    r"Pull the one shared fact this claim needs from the setup\."
    r"(?:\s*Compare the wording to that fact carefully\.)?"
    r"(?:\s*The verdict is \*\*(?:true|false)\*\*\.)?",
    re.I,
)

PAD2 = re.compile(
    r"(?:So the claim is (?:true|false): it (?:lines up with those shared facts|overreaches or swaps a definition for its converse)\.)"
    r"|(?:Work from the forced facts first, then test whether this particular wording adds anything extra\.)"
    r"|(?:If the wording uses exactly, always, never, or only if, check that the rules really force that strong reading\.)"
    r"|(?:Chain the relevant conditionals \(and contrapositives\) in order instead of jumping to a yes/no\.)"
    r"|(?:After the chain is done, glance back at the claim once to make sure no English gloss changed the math\.)"
    r"|(?:Write the scenario on paper first:.*?(?:own wording\.|freedom remains\.))"
    r"|(?:Start from the shared notebook facts.*?(?:own wording\.|slips\.))"
    r"|(?:This claim needs a full notebook write-up.*?(?:formulas\.|others\.))"
    r"|(?:Copy the given sets or propositions onto a working line\..*?shared facts\.)"
    r"|(?:Write the relevant shared objects.*?flipped the answer\.)"
    r"|(?:Check this claim directly against the given facts; it is \*\*(?:true|false)\*\*\.)",
    re.S | re.I,
)

VERDICT_TAIL = re.compile(r"\s*The verdict is \*\*(?:true|false)\*\*\.?", re.I)


def clean(s: str) -> str:
    s = PAD.sub("", s)
    s = PAD2.sub("", s)
    s = VERDICT_TAIL.sub("", s)
    # binom brace false-positive in FlashcardMath detector → C(n,k)
    s = re.sub(r"\\binom\{(\d+)\}\{(\d+)\}", r"C(\1,\2)", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = re.sub(r" +\n", "\n", s)
    # trim trailing spaces before closing of explanations
    return s.strip()


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    for t in tasks:
        t["context"] = clean(t["context"])
        t["solution_overview"] = clean(t["solution_overview"])
        t["statements"] = [clean(s) for s in t["statements"]]
        t["tactical_explanations"] = [clean(s) for s in t["tactical_explanations"]]
        # Ensure binomial headers still present
        for i, e in enumerate(t["tactical_explanations"]):
            if not re.match(r"^\*\*[A-E]\.\*\*\s*→\s*(True|False)", e):
                raise SystemExit(f"missing header {t['id']}[{i}]: {e[:60]}")
        for field in ("context", "solution_overview", *t["tactical_explanations"]):
            if "Pull the one shared fact" in field:
                raise SystemExit(f"pad left in {t['id']}")
    build.write_ts(tasks)
    print("cleaned", len(tasks))


if __name__ == "__main__":
    main()
