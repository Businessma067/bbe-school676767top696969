"""Assemble Chapter 2 task JSON from subsection modules.

Explanations follow MATH 13.18: letter header bound to the answer key,
a named-rule sentence, display math as its own ``$$...$$`` paragraph,
and a verdict closer. Lengths vary inside each task — one short
conceptual block (13.18 B), the rest compact or stepped (13.18 A/D/E).
No padding prelude; no identical five-block template.

When statements are independent (no shared stem condition),
``solution_overview`` is cleared so every claim’s reasoning lives only in
its tactical explanation. Shared-setup stems keep one overview.
"""

from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from common import statements_are_independent  # noqa: E402
from s21 import TASKS as T21  # noqa: E402
from s22 import TASKS as T22  # noqa: E402
from s23 import TASKS as T23  # noqa: E402
from s24 import TASKS as T24  # noqa: E402
from s25 import TASKS as T25  # noqa: E402

LETTERS = "ABCDE"
_HDR = re.compile(r"^\*\*[A-F]\.\*\*\s*→\s*(True|False)\s*", re.I)
_CLOSER = re.compile(
    r"(?:,?\s*)?(?:so |matching these figures to the claim, )?"
    r"(?:the statement is (?:True|False)\.?)\s*$",
    re.I,
)
_DISPLAY = re.compile(r"\$\$(.+?)\$\$", re.S)
_HAS_VERDICT = re.compile(r"the statement is (?:True|False)\.?\s*$", re.I)

# Trailing tautologies that only repeat the closer.
_TAUTOLOGY = re.compile(
    r"[,;]?\s*(?:"
    r"The reported leftover matches\.|"
    r"The reported value is correct\.|"
    r"The leftover is the claimed constant\.|"
    r"The claim matches\.|"
    r"matching the claim\.|"
    r"Matching the claim\."
    r")\s*$",
    re.I,
)


def _clean_inner(inner: str) -> str:
    inner = inner.strip().rstrip(".")
    inner = re.sub(r"\s*\n\s*", " ", inner)
    return inner.strip()


def format_display_math(text: str, *, same_line: bool = True) -> str:
    """Put each display on its own paragraph, MATH 13.18 / Ch4 layout."""

    def repl(m: re.Match[str]) -> str:
        inner = _clean_inner(m.group(1))
        if same_line:
            return f"\n\n$${inner}$$\n\n"
        return f"\n\n$$\n{inner}\n$$\n\n"

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
            chunks.append(f"$${_clean_inner(only.group(1))}$$")
            continue
        lead = re.match(r"^\$([^$]+)\$\.?\s+(.+)$", raw, re.S)
        if lead and _looks_like_identity(lead.group(1)) and "=" in lead.group(1):
            chunks.append(
                f"$${_clean_inner(lead.group(1))}$$\n\n{lead.group(2).strip()}"
            )
            continue
        chunks.append(raw)
    return "\n\n".join(chunks)


def _looks_like_identity(inner: str) -> bool:
    return any(tok in inner for tok in ("=", r"\frac", r"\sqrt", r"\cdot", "^"))


def _strip_raw(raw: str) -> str:
    body = raw.strip()
    body = _HDR.sub("", body).strip()
    body = _CLOSER.sub("", body).strip()
    body = re.sub(r"\)\.\s*$", ")", body)
    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    return body


def _strip_tautology(body: str) -> str:
    body = body.strip()
    body = _TAUTOLOGY.sub("", body).strip()
    return body


def _sentences(prose: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z])", prose.strip())
    return [p.strip() for p in parts if p.strip()]


def flatten_short(body: str) -> str:
    """13.18 B: one or two sentences, inline math, no display block."""
    displays = [_clean_inner(m) for m in _DISPLAY.findall(body)]
    # Keep a numeric check inline; drop a pure-letter identity the prose already names.
    keep = next((d for d in displays if re.search(r"\d", d) and r"\qquad" not in d), None)

    def repl(m: re.Match[str]) -> str:
        inner = _clean_inner(m.group(1))
        if keep is not None and inner == keep:
            return f" ${inner}$ "
        return " "

    text = _DISPLAY.sub(repl, body)
    text = re.sub(r"\s+", " ", text).strip()
    # Display used to complete a colon lead-in; after dropping it, start a new sentence.
    text = re.sub(r":\s+(?=[A-Z])", ". ", text)
    text = re.sub(r"\$\s+(?=[A-Z])", "$. ", text)
    text = _strip_tautology(text).strip(" ,;")
    if text and not text.endswith((".", "!", "?")):
        text += "."
    sents = _sentences(text)
    if sents and sents[0].endswith(":"):
        sents = sents[1:] or sents
    if not sents:
        return f"${keep}$." if keep else ""
    if len(sents) == 1:
        return sents[0]
    return sents[0] + " " + sents[-1]


def split_chain_display(inner: str) -> list[str]:
    """Turn a numeric a=b=c chain into two 13.18-style display lines."""
    if r"\qquad" in inner or inner.count("=") < 2:
        return [inner]
    if not re.search(r"\d", inner):
        return [inner]
    parts = [p.strip() for p in inner.split("=")]
    if len(parts) < 3:
        return [inner]
    left = f"{parts[0]} = {parts[1]}"
    right = "= " + " = ".join(parts[2:])
    return [left, right]


def restyle_stepped(body: str) -> str:
    """13.18 A/D: named rule, then one display per step."""
    body = format_display_math(body)
    body = promote_inline_identities(body)
    body = format_display_math(body)
    pieces: list[str] = []
    for para in re.split(r"\n\n+", body.strip()):
        raw = para.strip()
        if not raw:
            continue
        m = re.fullmatch(r"\$\$(.+)\$\$", raw, re.S)
        if m:
            for chunk in split_chain_display(_clean_inner(m.group(1))):
                pieces.append(f"$${chunk}$$")
            continue
        pieces.append(raw)
    return "\n\n".join(pieces)


def restyle_medium(body: str) -> str:
    body = format_display_math(body)
    body = promote_inline_identities(body)
    return format_display_math(body)


def finish(body: str, verdict: str, style: str) -> str:
    body = _strip_tautology(body).strip()
    if _HAS_VERDICT.search(body):
        return _HAS_VERDICT.sub(f"the statement is {verdict}.", body)

    already_matches = bool(re.search(r"\bmatch", body, re.I))
    if style == "short" or (style == "match" and already_matches):
        return f"{body}\n\nSo the statement is {verdict}."
    if style == "match":
        return (
            f"{body}\n\n"
            f"The derived form agrees with the claim, so the statement is {verdict}."
            if verdict == "True"
            else f"{body}\n\nThe derived form disagrees with the claim, so the statement is False."
        )
    if style == "against":
        if verdict == "False":
            return (
                f"{body}\n\n"
                f"The claim’s comparison is incorrect, so the statement is False."
            )
        return (
            f"{body}\n\n"
            f"Comparing this value with the claim shows the statement is True."
        )
    # medium / stepped — 13.18 A: closer hangs off the last sentence
    last = body.split("\n")[-1]
    if body.rstrip().endswith("$$") or re.search(r"\bso\b", last, re.I):
        return f"{body}\n\nSo the statement is {verdict}."
    body = body.rstrip(".")
    return f"{body}, so the statement is {verdict}."


def assign_styles(bodies: list[str]) -> list[str]:
    """One short, one stepped, one match/against, two medium — like 13.18 A–E."""
    n = len(bodies)
    disp_counts = [len(_DISPLAY.findall(b)) for b in bodies]
    # Flatten a 1-display item: dropping the block is what makes 13.18 B short.
    short_i = min(
        range(n),
        key=lambda i: (0 if disp_counts[i] == 1 else 1, len(bodies[i]), i),
    )
    long_i = max(
        (i for i in range(n) if i != short_i),
        key=lambda i: (len(bodies[i]), disp_counts[i], i),
        default=short_i,
    )
    rest = [i for i in range(n) if i not in (short_i, long_i)]
    match_i = rest[0] if rest else None
    against_i = rest[1] if len(rest) > 1 else None
    styles = ["medium"] * n
    styles[short_i] = "short"
    styles[long_i] = "stepped"
    if match_i is not None:
        styles[match_i] = "match"
    if against_i is not None:
        styles[against_i] = "against"
    return styles


def format_ch13_explanation(i: int, truth: bool, raw: str, style: str) -> str:
    letter = LETTERS[i]
    verdict = "True" if truth else "False"
    body = _strip_raw(raw)

    if style == "short":
        body = flatten_short(body)
    elif style == "stepped":
        body = restyle_stepped(body)
    else:
        body = restyle_medium(body)

    body = re.sub(r"\n{3,}", "\n\n", body).strip()
    body = finish(body, verdict, style)
    return f"**{letter}.** → {verdict}\n\n{body}"


def bind_explanations(task: dict) -> dict:
    keys = task["answer_key"]
    expls = task["tactical_explanations"]
    if len(expls) != len(keys):
        raise ValueError(f"{task.get('title')}: explanations {len(expls)} vs keys {len(keys)}")
    stripped = [_strip_raw(e) for e in expls]
    styles = assign_styles(stripped)
    task["tactical_explanations"] = [
        format_ch13_explanation(i, bool(keys[i]), expls[i], styles[i])
        for i in range(len(keys))
    ]
    if statements_are_independent(task.get("context", "")):
        task["solution_overview"] = ""
    return task


def _display_is_isolated(expl: str) -> bool:
    """Every $$ is either a lone delimiter line or a full $$...$$ paragraph."""
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
            errs.append(f"{t['title']}: shared Let-hypothesis in context; each statement must carry its own conditions")
        latex_hits: dict[str, int] = {}
        for s in t["statements"]:
            for frag in re.findall(r"\$([^$]{12,})\$", s):
                key = re.sub(r"\s+", "", frag)[:28]
                latex_hits[key] = latex_hits.get(key, 0) + 1
        reused = [k for k, n in latex_hits.items() if n >= 3]
        if reused:
            errs.append(f"{t['title']}: same expression reused on 3+ statements ({reused[0][:40]})")
        lens = [len(e) for e in t.get("tactical_explanations", [])]
        if lens and max(lens) - min(lens) < 40:
            errs.append(f"{t['title']}: explanation lengths too uniform ({min(lens)}–{max(lens)})")
        for i, expl in enumerate(t.get("tactical_explanations", [])):
            letter = LETTERS[i]
            verdict = "True" if t["answer_key"][i] else "False"
            head = f"**{letter}.** → {verdict}"
            if not expl.startswith(head):
                errs.append(f"{t['title']} {letter}: header {expl[:40]!r} != {head}")
            if not re.search(rf"the statement is {verdict}\.?\s*$", expl, re.I):
                errs.append(f"{t['title']} {letter}: closer mismatch")
            if "The claim is checked" in expl:
                errs.append(f"{t['title']} {letter}: generic prelude")
            if "$$" in expl and not _display_is_isolated(expl):
                errs.append(f"{t['title']} {letter}: $$ not isolated")
        if statements_are_independent(t.get("context", "")) and (
            t.get("solution_overview") or ""
        ).strip():
            errs.append(
                f"{t['title']}: independent statements must not have solution_overview"
            )
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
        expl.count("$$") // 2
        for t in out_tasks
        for expl in t["tactical_explanations"]
    )
    print(f"display-math blocks: {n_disp}")
    lens = [len(e) for t in out_tasks for e in t["tactical_explanations"]]
    spreads = [
        max(len(e) for e in t["tactical_explanations"])
        - min(len(e) for e in t["tactical_explanations"])
        for t in out_tasks
    ]
    lens.sort()
    print(
        f"expl len min/med/mean/max: {lens[0]} / {lens[len(lens)//2]} / "
        f"{sum(lens)//len(lens)} / {lens[-1]}"
    )
    spreads.sort()
    print(
        f"within-task spread min/med/max: {spreads[0]} / "
        f"{spreads[len(spreads)//2]} / {spreads[-1]}"
    )


if __name__ == "__main__":
    main()
