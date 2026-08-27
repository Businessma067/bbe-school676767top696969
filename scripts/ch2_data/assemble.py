"""Assemble Chapter 2 task JSON from subsection modules.

Explanations are authored from scratch in explain.py (content-aware, MATH 13.18).
This module only binds letter headers, normalises display math, and adds closers.
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
_DISPLAY = re.compile(r"\$\$(.+?)\$\$", re.S)
_HAS_VERDICT = re.compile(r"the statement is (?:True|False)\.?\s*$", re.I)


def _clean_inner(inner: str) -> str:
    inner = inner.strip().rstrip(".")
    inner = re.sub(r"\s*\n\s*", " ", inner)
    return inner.strip()


def format_display_math(text: str) -> str:
    """Put each display formula on its own paragraph, matching Ch4 / MATH 13.18."""

    def repl(m: re.Match[str]) -> str:
        return f"\n\n$${_clean_inner(m.group(1))}$$\n\n"

    s = _DISPLAY.sub(repl, text)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def promote_inline_identities(text: str) -> str:
    """Lift a standalone $identity$ into a display block when appropriate."""
    chunks: list[str] = []
    for para in re.split(r"\n\n+", text.strip()):
        raw = para.strip()
        if not raw:
            continue
        only = re.fullmatch(r"\$([^$]+)\$\.?", raw)
        if only and _looks_like_identity(only.group(1)):
            chunks.append(f"$${_clean_inner(only.group(1))}$$")
            continue
        chunks.append(raw)
    return "\n\n".join(chunks)


def _looks_like_identity(inner: str) -> bool:
    return any(tok in inner for tok in ("=", r"\frac", r"\sqrt", r"\cdot", "^"))


def finish(body: str, verdict: str) -> str:
    """Add a MATH 13.18 / Ch4 closer without templating the algebra."""
    body = body.strip()
    if _HAS_VERDICT.search(body):
        return _HAS_VERDICT.sub(f"the statement is {verdict}.", body)

    if re.search(r"\bmatch(?:es|ing)?\b", body, re.I):
        return f"{body}\n\nMatching these figures to the claim, the statement is {verdict}."
    if re.search(r"\bdisagree\b|\bcontradict|\bincorrect\b|\bdoes not match\b", body, re.I):
        if verdict == "False":
            return (
                f"{body}\n\n"
                f"The claim’s comparison is incorrect, so the statement is False."
            )
    if re.search(r"\bSo the statement is\b", body):
        return body

    trimmed = body.rstrip()
    if trimmed.endswith("$$") or re.search(r"\$\$\s*$", trimmed):
        return f"{body}\n\nSo the statement is {verdict}."

    last = body.split("\n")[-1]
    if re.search(r"\bso\b", last, re.I):
        return f"{body}\n\nSo the statement is {verdict}."
    if len(body) < 180 and "$$" not in body:
        return f"{body}\n\nSo the statement is {verdict}."
    body = body.rstrip(".")
    return f"{body}, so the statement is {verdict}."


def bind_explanation(i: int, truth: bool, body: str) -> str:
    letter = LETTERS[i]
    verdict = "True" if truth else "False"
    body = format_display_math(body)
    body = promote_inline_identities(body)
    body = format_display_math(body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = finish(body, verdict)
    return f"**{letter}.** → {verdict}\n\n{body}"


def bind_explanations(task: dict) -> dict:
    keys = task["answer_key"]
    expls = task["tactical_explanations"]
    if len(expls) != len(keys):
        raise ValueError(f"{task.get('title')}: explanations {len(expls)} vs keys {len(keys)}")
    task["tactical_explanations"] = [
        bind_explanation(i, bool(keys[i]), expls[i]) for i in range(len(keys))
    ]
    return task


def _display_is_isolated(expl: str) -> bool:
    for line in expl.split("\n"):
        if "$$" not in line:
            continue
        s = line.strip()
        if s == "$$":
            continue
        if s.startswith("$$") and s.endswith("$$") and s.count("$$") == 2:
            continue
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
        if re.search(r"(?i)\blet\s+\$", t["context"]):
            errs.append(f"{t['title']}: shared Let-hypothesis in context")
        latex_hits: dict[str, int] = {}
        for s in t["statements"]:
            for frag in re.findall(r"\$([^$]{12,})\$", s):
                key = re.sub(r"\s+", "", frag)[:28]
                latex_hits[key] = latex_hits.get(key, 0) + 1
        reused = [k for k, n in latex_hits.items() if n >= 3]
        if reused:
            errs.append(f"{t['title']}: same expression reused on 3+ statements ({reused[0][:40]})")
        for i, expl in enumerate(t.get("tactical_explanations", [])):
            letter = LETTERS[i]
            verdict = "True" if t["answer_key"][i] else "False"
            head = f"**{letter}.** → {verdict}"
            if not expl.startswith(head):
                errs.append(f"{t['title']} {letter}: header mismatch")
            if not re.search(rf"the statement is {verdict}\.?\s*$", expl, re.I):
                errs.append(f"{t['title']} {letter}: closer mismatch")
            if "The claim is checked" in expl:
                errs.append(f"{t['title']} {letter}: generic prelude")
            if "$$" in expl and not _display_is_isolated(expl):
                errs.append(f"{t['title']} {letter}: $$ not isolated")
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
    lens = [len(e) for t in out_tasks for e in t["tactical_explanations"]]
    spreads = [
        max(len(e) for e in t["tactical_explanations"])
        - min(len(e) for e in t["tactical_explanations"])
        for t in out_tasks
    ]
    blocks = [e.count("$$") // 2 for t in out_tasks for e in t["tactical_explanations"]]
    lens.sort()
    spreads.sort()
    print(
        f"expl len min/med/max: {lens[0]} / {lens[len(lens)//2]} / {lens[-1]}"
    )
    print(
        f"within-task spread min/med/max: {spreads[0]} / {spreads[len(spreads)//2]} / {spreads[-1]}"
    )
    print(
        f"display blocks min/med/max: {min(blocks)} / "
        f"{sorted(blocks)[len(blocks)//2]} / {max(blocks)}"
    )


if __name__ == "__main__":
    main()
