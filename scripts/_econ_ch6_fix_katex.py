#!/usr/bin/env python3
"""Fix KaTeX / formula syntax in ch6 tactical_explanations.

Fixes:
  1. Bare English LHS labels inside $$...$$ → \\text{...}
  2. Truncated prose after % (e.g. ``is 33.`` when math shows 33.7%)
  3. Cramped aligned steps, env balance, risky number commas
"""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")

# Bare labels used as math LHS (not already \\text{...})
BARE_LABELS = (
    "Share",
    "Cost",
    "Residual",
    "Equity",
    "Surplus",
    "Coverage",
    "CA",
    "CL",
    "WC",
    "OM",
    "ETR",
    "NCL",
    "growth",
)

TRUNC_CLOSER = re.compile(
    r"(?P<prefix>[^\n]*?\bis|Actual)\s+(?P<num>\d+(?:\.\d+)?)\.\s*\n\nSo the statement",
    re.I,
)
TRUNC_ACTUAL = re.compile(
    r"(?P<prefix>Actual)\s+(?P<num>\d+(?:\.\d+)?)\.\s*\n\nSo the statement",
    re.I,
)
PERCENT_IN_EXPL = re.compile(r"(?:\\approx\s+|=\s+|\\le\s+|\\ge\s+|>\s+|<\s+)?([\d.]+)\\%")
GLUED_FRAC = re.compile(r"(=\s*[\d{,}]+)\s*(\\frac[\s\S]*)")
BROKEN_COMMA = re.compile(r"(?<!\{)(?<!\{,)\b(\d{1,3}),(\d{3})\b(?!\})")


def wrap_bare_labels(body: str) -> tuple[str, int]:
    """Wrap bare English LHS labels with \\text{...}."""
    n = 0
    for label in BARE_LABELS:
        pat = re.compile(
            rf"(?<!\\text{{)(?<![A-Za-z]){re.escape(label)}(?![A-Za-z])"
        )

        def repl(m: re.Match[str], lab: str = label) -> str:
            nonlocal n
            n += 1
            return rf"\text{{{lab}}}"

        body = pat.sub(repl, body)
    return body, n


def fix_display_body(body: str) -> tuple[str, int]:
    """Split glued ``= N\\frac`` rows and balance aligned envs."""
    changes = 0

    # Split ``= 45000\\frac{...}`` onto separate aligned rows
    if re.search(r"=\s*[\d{,}]+\s*\\frac", body.replace("\n", " ")):
        if "\\begin{aligned}" not in body:
            lines = body.split("\n")
            out: list[str] = []
            i = 0
            while i < len(lines):
                line = lines[i]
                nxt = lines[i + 1].strip() if i + 1 < len(lines) else ""
                if (
                    re.search(r"=\s*[\d{,}]+\s*$", line)
                    and nxt.startswith("\\frac")
                    and "\\\\" not in line
                ):
                    out.append(line.rstrip() + " \\\\[0.65em]")
                    changes += 1
                    i += 1
                    continue
                out.append(line)
                i += 1
            body = "\n".join(out)
        else:
            body = GLUED_FRAC.sub(r"\1 \\\\[0.65em]\n& \2", body)
            if body != GLUED_FRAC.sub("", body):
                changes += 1

    # Ensure \\begin{aligned} / \\end{aligned} balance
    begins = body.count("\\begin{aligned}")
    ends = body.count("\\end{aligned}")
    if begins > ends:
        body = body.rstrip() + "\n\\end{aligned}" * (begins - ends)
        changes += begins - ends
    elif ends > begins:
        # drop stray closing tags from the end inward
        for _ in range(ends - begins):
            body = re.sub(r"\n?\\end\{aligned\}\s*$", "", body, count=1)
        changes += ends - begins

    # KaTeX-safe thousands separators (only plain comma forms)
    def comma_repl(m: re.Match[str]) -> str:
        nonlocal changes
        changes += 1
        return f"{m.group(1)}{{,}}{m.group(2)}"

    body = BROKEN_COMMA.sub(comma_repl, body)

    return body, changes


def fix_math_block(body: str) -> tuple[str, dict[str, int]]:
    stats = {"labels": 0, "syntax": 0}
    body, n = wrap_bare_labels(body)
    stats["labels"] += n
    body, n = fix_display_body(body)
    stats["syntax"] += n
    return body, stats


def nearest_percent(expl: str, trunc_num: str) -> str | None:
    """Find the percent in math that matches a truncated prose integer."""
    percents = PERCENT_IN_EXPL.findall(expl)
    if not percents:
        return None
    # Prefer the last computed result (usually the answer percent)
    for pv in reversed(percents):
        if pv == trunc_num:
            return pv
        if "." in pv and pv.split(".")[0] == trunc_num:
            return pv
        if pv.startswith(trunc_num + "."):
            return pv
    return None


def fix_truncations(text: str) -> tuple[str, int]:
    """Restore truncated ``is N.`` / ``Actual N.`` prose from nearby percents."""
    n = 0

    def closer_repl(m: re.Match[str]) -> str:
        nonlocal n
        prefix = m.group("prefix")
        num = m.group("num")
        pv = nearest_percent(text, num)
        if not pv:
            return m.group(0)
        n += 1
        return f"{prefix} {pv}%.\n\nSo the statement"

    text = TRUNC_CLOSER.sub(closer_repl, text)

    # ``Year 2 NCL/equity is 33.`` — prefix not caught by is/Actual pattern
    def equity_repl(m: re.Match[str]) -> str:
        nonlocal n
        prefix = m.group("prefix")
        num = m.group("num")
        pv = nearest_percent(text, num)
        if not pv:
            return m.group(0)
        n += 1
        return f"{prefix}{pv}%.\n\nSo the statement"

    text = re.sub(
        r"(?P<prefix>[^\n]*?\bis\s+)(?P<num>\d+(?:\.\d+)?)\.\s*\n\nSo the statement",
        equity_repl,
        text,
    )
    return text, n


def fix_math_in_text(text: str) -> tuple[str, dict[str, int]]:
    total = {"labels": 0, "syntax": 0}

    def repl(m: re.Match[str]) -> str:
        body, stats = fix_math_block(m.group(1))
        total["labels"] += stats["labels"]
        total["syntax"] += stats["syntax"]
        return f"$${body}$$"

    text = re.sub(r"\$\$([\s\S]*?)\$\$", repl, text)
    return text, total


def validate(data: list[dict]) -> dict[str, int | list[str]]:
    """Post-run validation counts."""
    bare_share = 0
    truncated = 0
    aligned_bad: list[str] = []
    brace_bad: list[str] = []

    for case in data:
        cid = case.get("case_id", "?")
        for expl in case.get("tactical_explanations") or []:
            for m in re.finditer(r"\$\$([\s\S]*?)\$\$", expl):
                body = m.group(1)
                if re.search(r"(?<!\\text\{)(?<![A-Za-z])Share(?![A-Za-z])", body):
                    bare_share += 1
                b = body.count("\\begin{aligned}")
                e = body.count("\\end{aligned}")
                if b != e:
                    aligned_bad.append(f"{cid}: aligned {b}/{e}")
                opens = body.count("{")
                closes = body.count("}")
                if opens != closes:
                    brace_bad.append(f"{cid}: braces {opens}/{closes}")

            if re.search(
                r"(?:\bis|Actual|actual growth is)\s+\d+(?:\.\d+)?\.\s*\n\nSo the statement",
                expl,
            ):
                percents = PERCENT_IN_EXPL.findall(expl)
                m = re.search(
                    r"(?:\bis|Actual|actual growth is)\s+(\d+(?:\.\d+)?)\.\s*\n\nSo the statement",
                    expl,
                )
                if m and percents:
                    trunc = m.group(1)
                    if any(
                        p.split(".")[0] == trunc or p.startswith(trunc + ".")
                        for p in percents
                    ):
                        truncated += 1

    return {
        "bare_share": bare_share,
        "truncated": truncated,
        "aligned_bad": aligned_bad,
        "brace_bad": brace_bad,
    }


def sample_explanations(data: list[dict]) -> dict[str, str]:
    out: dict[str, str] = {}
    for case in data:
        cid = case.get("case_id", "")
        expls = case.get("tactical_explanations") or []
        if cid == "CASE 6.1.005" and len(expls) > 1:
            out["CASE 6.1.005 B"] = expls[1]
        for i, e in enumerate(expls):
            if "\\text{Share}" in e and "CASE 6.1.005 B" not in out:
                out[f"{cid} letter {i} Share"] = e[:600] + ("..." if len(e) > 600 else "")
                break
        if len(out) >= 2:
            break
    return out


def process(data: list[dict]) -> dict[str, int]:
    stats = {
        "cases_changed": 0,
        "expls_changed": 0,
        "labels_wrapped": 0,
        "syntax_fixed": 0,
        "truncations_fixed": 0,
    }
    for case in data:
        changed = False
        new_expl: list[str] = []
        for expl in case.get("tactical_explanations") or []:
            fixed = expl
            fixed, trunc_n = fix_truncations(fixed)
            fixed, math_stats = fix_math_in_text(fixed)
            if fixed != expl:
                changed = True
                stats["expls_changed"] += 1
                stats["truncations_fixed"] += trunc_n
                stats["labels_wrapped"] += math_stats["labels"]
                stats["syntax_fixed"] += math_stats["syntax"]
            new_expl.append(fixed)
        if changed:
            case["tactical_explanations"] = new_expl
            stats["cases_changed"] += 1
    return stats


def main() -> None:
    data = json.loads(PATH.read_text())
    stats = process(data)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    val = validate(data)
    samples = sample_explanations(data)

    print("=== ch6 KaTeX fix ===")
    print(f"cases changed: {stats['cases_changed']}")
    print(f"explanations changed: {stats['expls_changed']}")
    print(f"labels wrapped (\\text{{...}}): {stats['labels_wrapped']}")
    print(f"syntax fixes (aligned/commas/glued): {stats['syntax_fixed']}")
    print(f"truncations restored: {stats['truncations_fixed']}")
    print()
    print("=== validation ===")
    print(f"bare Share in math: {val['bare_share']}")
    print(f"truncated is N. (with nearby %): {val['truncated']}")
    print(f"aligned imbalance: {len(val['aligned_bad'])}")
    print(f"brace imbalance: {len(val['brace_bad'])}")
    if val["aligned_bad"]:
        print("  samples:", val["aligned_bad"][:3])
    if val["brace_bad"]:
        print("  samples:", val["brace_bad"][:3])
    print()
    print("=== samples ===")
    for name, text in samples.items():
        print(f"--- {name} ---")
        # show last ~400 chars (closer + math tail)
        tail = text if len(text) < 500 else "..." + text[-500:]
        print(tail)
        print()


if __name__ == "__main__":
    main()
