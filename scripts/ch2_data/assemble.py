"""Assemble Chapter 2 task JSON from subsection modules.

Explanations are rebound to statements A–E and rewritten in the Chapter 4 /
MATH 13.18 layout: letter header, named-rule prose, display math on its own
lines, lowercase closer.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from s21 import TASKS as T21  # noqa: E402
from s22 import TASKS as T22  # noqa: E402
from s23 import TASKS as T23  # noqa: E402
from s24 import TASKS as T24  # noqa: E402
from s25 import TASKS as T25  # noqa: E402

LETTERS = "ABCDE"
_HDR = re.compile(r"^\*\*[A-F]\.\*\*\s*→\s*(True|False)\s*", re.I)
_CLOSER = re.compile(
    r"(?:so the statement is (?:True|False)\.?)\s*$",
    re.I,
)
_DISPLAY = re.compile(r"\$\$(.+?)\$\$", re.S)


def _clean_inner(inner: str) -> str:
    inner = inner.strip().rstrip(".")
    inner = re.sub(r"\s*\n\s*", " ", inner)
    return inner.strip()


def format_display_math(text: str) -> str:
    """Put each $$ formula on its own lines, matching Ch4 / Ch13."""

    def repl(m: re.Match[str]) -> str:
        return f"\n\n$$\n{_clean_inner(m.group(1))}\n$$\n\n"

    s = _DISPLAY.sub(repl, text)
    s = re.sub(r"\$\$\n\n\.", "$$\n\n", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def promote_inline_identities(text: str) -> str:
    """Lift a standalone or leading $identity$ into a display block."""
    chunks: list[str] = []
    for para in re.split(r"\n\n+", text.strip()):
        raw = para.strip()
        if not raw:
            continue
        only = re.fullmatch(r"\$([^$]+)\$\.?", raw)
        if only and _looks_like_identity(only.group(1)):
            chunks.append(f"$$\n{_clean_inner(only.group(1))}\n$$")
            continue
        lead = re.match(r"^\$([^$]+)\$\.?\s+(.+)$", raw, re.S)
        if lead and _looks_like_identity(lead.group(1)) and "=" in lead.group(1):
            chunks.append(
                f"$$\n{_clean_inner(lead.group(1))}\n$$\n\n{lead.group(2).strip()}"
            )
            continue
        chunks.append(raw)
    return "\n\n".join(chunks)


def _looks_like_identity(inner: str) -> bool:
    return any(tok in inner for tok in ("=", r"\frac", r"\sqrt", r"\cdot", "^"))


_PRELUDE = {
    "2.1": (
        "The claim is checked as an expansion or factoring identity. "
        "Distribute, collect like terms, or factor, then compare both sides."
    ),
    "2.2": (
        "The claim is checked as an identity of algebraic fractions on the "
        "stated domain. Clear nested layers or cancel common factors."
    ),
    "2.3": (
        "The claim is checked with the power rules — product, quotient, and "
        "power of a power — on the stated domain."
    ),
    "2.4": (
        "The claim is checked by rewriting absolute values piecewise, or by "
        "an algebraic identity that holds for every real input named in the statement."
    ),
    "2.5": (
        "The claim is checked as an algebraic identity on the domain named "
        "in the statement. Carry out the expansion, cancellation, or exponent arithmetic."
    ),
}


def format_ch13_explanation(i: int, truth: bool, raw: str, subsection: str = "2.5") -> str:
    """Bind explanation i to letter A–E and the answer key, Ch13 closing style."""
    letter = LETTERS[i]
    verdict = "True" if truth else "False"
    body = raw.strip()
    body = _HDR.sub("", body).strip()
    body = _CLOSER.sub("", body).strip()
    body = format_display_math(body)
    body = promote_inline_identities(body)
    body = format_display_math(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = re.sub(r"\$\$\n\n\.", "$$\n\n", body).strip()

    math_only = bool(re.fullmatch(r"(?:\s*\$\$.*?\$\$\s*)+", body, re.S))
    prose = re.sub(r"\$\$.*?\$\$", " ", body, flags=re.S)
    prose = re.sub(r"\$[^$]+\$", " ", prose)
    prose = re.sub(r"\s+", " ", prose).strip(" .")
    if math_only or len(prose) < 48:
        prelude = _PRELUDE.get(subsection, _PRELUDE["2.5"])
        body = f"{prelude}\n\n{body}" if body else prelude

    prose = re.sub(r"\$\$.*?\$\$", "", body, flags=re.S).strip()
    if prose and not re.search(r"[.!?]$", prose) and not body.rstrip().endswith("$$"):
        body = body.rstrip(".") + "."

    return (
        f"**{letter}.** → {verdict}\n\n"
        f"{body}\n\n"
        f"so the statement is {verdict}."
    )


def bind_explanations(task: dict) -> dict:
    keys = task["answer_key"]
    expls = task["tactical_explanations"]
    if len(expls) != len(keys):
        raise ValueError(f"{task.get('title')}: explanations {len(expls)} vs keys {len(keys)}")
    task["tactical_explanations"] = [
        format_ch13_explanation(i, bool(keys[i]), expls[i], task.get("subsection", "2.5")) for i in range(len(keys))
    ]
    return task


def _display_is_isolated(expl: str) -> bool:
    """Every $$ opener/closer sits on its own line."""
    for line in expl.split("\n"):
        if "$$" in line and line.strip() != "$$":
            return False
    return True


def lint(tasks: list[dict]) -> list[str]:
    errs: list[str] = []
    titles = []
    stmt_set = set()
    for t in tasks:
        titles.append(t["title"])
        if len(t["statements"]) != 5:
            errs.append(f"{t['title']}: not 5 statements")
        if len(t["answer_key"]) != 5:
            errs.append(f"{t['title']}: not 5 answers")
        if len(t["tactical_explanations"]) != 5:
            errs.append(f"{t['title']}: not 5 explanations")
        firsts = []
        for s in t["statements"]:
            if s in stmt_set:
                errs.append(f"duplicate statement: {s[:80]}")
            stmt_set.add(s)
            firsts.append(" ".join(s.split()[:4]).lower())
        if len(set(firsts)) < 4:
            errs.append(f"{t['title']}: statement openings too similar")
        for i, expl in enumerate(t.get("tactical_explanations", [])):
            letter = LETTERS[i]
            verdict = "True" if t["answer_key"][i] else "False"
            head = f"**{letter}.** → {verdict}"
            if not expl.startswith(head):
                errs.append(f"{t['title']} {letter}: header {expl[:40]!r} != {head}")
            closer = f"so the statement is {verdict}."
            if not expl.rstrip().endswith(closer):
                errs.append(f"{t['title']} {letter}: closer mismatch")
            if "$$" in expl and not _display_is_isolated(expl):
                errs.append(f"{t['title']} {letter}: $$ not on its own line")
    if len(titles) != len(set(titles)):
        errs.append("duplicate titles")
    return errs


def main() -> None:
    raw = T21 + T22 + T23 + T24 + T25
    out_tasks = []
    for i, t in enumerate(raw, start=1):
        item = bind_explanations(dict(t))
        item["id"] = f"math-2-{i}"
        item["case_id"] = f"MATH 2.{i:02d}"
        item["sort_order"] = i
        out_tasks.append(item)
    errs = lint(out_tasks)
    if errs:
        print("LINT ERRORS:")
        for e in errs:
            print(" -", e)
        sys.exit(1)
    dest = Path("/workspace/src/data/math-ch2-cases.json")
    dest.write_text(json.dumps({"tasks": out_tasks}, indent=1, ensure_ascii=False) + "\n")
    print(f"wrote {len(out_tasks)} tasks to {dest}")
    print(Counter(t["subsection"] for t in out_tasks))
    n_disp = sum(
        expl.count("\n$$\n")
        for t in out_tasks
        for expl in t["tactical_explanations"]
    )
    print(f"display-math delimiters: {n_disp}")


if __name__ == "__main__":
    main()
