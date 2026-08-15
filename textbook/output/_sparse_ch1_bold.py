# -*- coding: utf-8 -*-
"""Sparse bold in Ch1 explanations: keep letter headers only; strip junk body bold."""
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

# leftover pad fragments still glued into prose
FRAGMENTS = [
    " next to $p \\Rightarrow q$ so a converse slip is obvious.",
    " next to $p \\Rightarrow q$ so a converse slip is obvious",
    "Write the claimed arrow next to $p \\Rightarrow q$ so a converse slip is obvious.",
]

# Words allowed as sparse body bold (at most one per explanation)
IMPORTANT = {
    "Trap",
    "converse",
    "contrapositive",
    "inverse",
    "biconditional",
    "vacuous",
    "partition",
}


def strip_body_bold(body: str) -> str:
    """Remove all **...** from body, then optionally restore one important token."""
    tokens: list[str] = []

    def stash(m: re.Match) -> str:
        tokens.append(m.group(1))
        return m.group(1)  # unbold

    plain = re.sub(r"\*\*([^*]+)\*\*", stash, body)

    # Restore at most one important word, case-sensitive match from original tokens
    restored = False
    for tok in tokens:
        key = tok.strip()
        if key in IMPORTANT or key.lower() in {x.lower() for x in IMPORTANT}:
            # bold first occurrence of this exact token as whole word-ish
            pat = re.compile(rf"(?<!\*)\b{re.escape(key)}\b(?!\*)")
            if pat.search(plain):
                plain = pat.sub(f"**{key}**", plain, count=1)
                restored = True
                break

    # If explanation is a clear trap (False + converse/inverse language) and no bold yet,
    # prefix **Trap:** once when body starts with trap-ish wording and verdict false context
    # (caller handles Trap separately if desired)

    return plain


def process_expl(expl: str) -> str:
    m = re.match(r"^(\*\*[A-E]\.\*\*\s*→\s*(?:True|False))\s*\n\n?(.*)$", expl, re.S)
    if not m:
        # overview-like or broken
        s = expl
        for fr in FRAGMENTS:
            s = s.replace(fr, "")
        # keep **Answer.** only
        parts = []
        i = 0
        for bm in re.finditer(r"\*\*([^*]+)\*\*", s):
            parts.append(s[i : bm.start()])
            tok = bm.group(1)
            if tok.startswith("Answer"):
                parts.append(f"**{tok}**")
            else:
                parts.append(tok)
            i = bm.end()
        parts.append(s[i:])
        return "".join(parts)

    head, body = m.group(1), m.group(2)
    for fr in FRAGMENTS:
        body = body.replace(fr, "")
    body = strip_body_bold(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()

    # Sparse Trap label for false claims that discuss converse/inverse/trap
    verdict_false = "→ False" in head
    if verdict_false and not body.startswith("**Trap:**"):
        low = body.lower()
        if any(w in low for w in ("converse", "inverse", "trap:", "common misconception", "fallacy")):
            if not body.startswith("**"):
                body = "**Trap:** " + body[0].lower() + body[1:] if body else body

    return f"{head}\n\n{body}"


def process_overview(ov: str) -> str:
    for fr in FRAGMENTS:
        ov = ov.replace(fr, "")
    # strip bold except Answer
    out = []
    i = 0
    for bm in re.finditer(r"\*\*([^*]+)\*\*", ov):
        out.append(ov[i : bm.start()])
        tok = bm.group(1)
        if tok.startswith("Answer"):
            out.append(f"**{tok}**")
        else:
            out.append(tok)
        i = bm.end()
    out.append(ov[i:])
    return "".join(out)


def main() -> None:
    tasks = json.loads(DUMP.read_text(encoding="utf-8"))
    out = []
    for t in tasks:
        t["solution_overview"] = process_overview(t["solution_overview"])
        t["tactical_explanations"] = [process_expl(e) for e in t["tactical_explanations"]]
        out.append(build.normalize_task_dollars(t))
    build.write_ts(out)

    # stats
    from collections import Counter

    bolds = Counter()
    for t in out:
        for e in t["tactical_explanations"]:
            body = re.sub(r"^\*\*[A-E]\.\*\*[^\n]*\n*", "", e)
            for m in re.finditer(r"\*\*([^*]+)\*\*", body):
                bolds[m.group(1)] += 1
    print("wrote", len(out))
    print("body bold tokens:", dict(bolds))


if __name__ == "__main__":
    main()
