# -*- coding: utf-8 -*-
"""Deep word/digit audit across all Ch11 fields."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EXTRACT_DIR = ROOT / "textbook" / "output" / "ch11_extract"
OUT = ROOT / "textbook" / "output" / "_audit_ch11_deep_report.txt"

CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)"
    r"(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])"
)

# Flat exponent scars (power beside, not superscript)
FLAT_POWER = re.compile(
    r"(?<![\^_{])"  # not already in ^
    r"(?:"
    r"\((\d+\.\d+)\)(\d{1,3})\b"  # (1.006)12
    r"|\(1\+r/n\)n\b"
    r"|\(1\+i\)n\b"
    r"|(?<![A-Za-z\\])e\^\("  # e^(
    r"|(?<![A-Za-z\\$])e\^rt\b"
    r"|\)\d{1,2}(?=\s*[=≈,]|\s*$)"  # )12 at end of expr (risky)
    r")"
)

NESTED_DOLLAR = re.compile(r"\[\s*\$[^$\]]+\$\s*-|/\s*\$\(|\(a/r\)\[\s*\$")
BAD_SUB = re.compile(r"e\^\{rAt\}|\\delta Bt|r1\\cdot|r2\\cdot|A0e\^|B0e\^")
LOWER_START = re.compile(
    r"^(and|or|of|for|with|to|from|vs\.?|&|under|plus|then|frequencies|"
    r"maturity|rates|equipment|bank|payment|horizon|fund)\b",
    re.I,
)
WEIRD_TOKENS = re.compile(
    r"\b(?:combi|woth|depreciatin|worh|cu rently|curently|growscontinuously|"
    r"familly|portfoilo|annutiy|perpertuity)\b",
    re.I,
)
# Words stuck together mid-sentence (camel-ish from PDF glue)
STUCK = re.compile(r"(?<=[a-z])(?=[A-Z][a-z]{2,})")  # familyOffice — maybe OK in titles
HYPHEN_GLUE = re.compile(r"[a-z]-\s+[a-z]")  # broken hyphenation across line: deprecia- ting was already joined wrong?

# Truncated mid-word endings
TRUNC_TAIL = re.compile(r"\b[A-Za-z]{2,}(?:atin|enti|combi|wort|curren|depreciatin)\b", re.I)

# Unpaired $ counting carefully
def unpaired_dollars(text: str) -> bool:
    # remove currency and math pairs
    s = CURRENCY.sub("", text or "")
    s = re.sub(r"\$\$[\s\S]*?\$\$", "", s)
    # remove inline math greedily non-greedy
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"\$(?![\d])[^$\n]+?\$", "", s)
    return s.count("$") % 2 == 1 or s.count("$") > 0


def looks_like_math_inner(inner: str) -> bool:
    t = (inner or "").strip()
    if not t:
        return False
    if "|" in t:
        return False
    if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", t) and not re.search(r"[=<>≠≤≥]", t):
        if not re.search(r"\\[a-zA-Z]+", t):
            return False
    if re.search(r"[=<>≠≤≥+×·\-/^\\()_]", t) and re.search(r"[A-Za-z0-9]", t):
        return True
    if re.search(r"\\[a-zA-Z]+", t):
        return True
    return False


def prose_as_math_hits(text: str) -> list[str]:
    hits = []
    s = text or ""
    i = 0
    while i < len(s):
        if s.startswith("$$", i):
            end = s.find("$$", i + 2)
            if end == -1:
                break
            inner = s[i + 2 : end]
            if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", inner) and not re.search(r"[=<>]", inner):
                hits.append(inner[:80])
            i = end + 2
            continue
        if s[i] == "$":
            m = CURRENCY.match(s, i)
            if m:
                i = m.end()
                continue
            end = s.find("$", i + 1)
            if end != -1:
                inner = s[i + 1 : end]
                if looks_like_math_inner(inner) and re.search(
                    r"[A-Za-z]{4,}\s+[A-Za-z]{3,}", inner
                ) and not re.search(r"[=<>\\]", inner):
                    hits.append(inner[:80])
                i = end + 1
                continue
        i += 1
    return hits


def fields(task: dict) -> list[tuple[str, str]]:
    out = [
        ("title", task.get("title") or ""),
        ("context", task.get("context") or ""),
        ("given", task.get("given") or ""),
        ("formulas", task.get("formulas") or ""),
        ("steps", task.get("steps") or ""),
    ]
    for i, s in enumerate(task.get("statements") or []):
        out.append((f"S{i}", s))
    for i, e in enumerate(task.get("explanations") or []):
        out.append((f"E{i}", e))
    return out


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    issues: list[str] = []
    counts = Counter()
    samples: dict[str, list[str]] = Counter()  # type: ignore
    sample_map: dict[str, list[str]] = {}

    def add(kind: str, msg: str) -> None:
        counts[kind] += 1
        issues.append(f"[{kind}] {msg}")
        sample_map.setdefault(kind, []).append(msg)

    total_tasks = 0
    for sub in data["subsections"]:
        sid = sub["id"]
        for t in sub["tasks"]:
            total_tasks += 1
            loc = f"{sid}/{t['local_num']}"
            ctx = t.get("context") or ""
            title = t.get("title") or ""

            if not title.strip():
                add("empty_title", loc)
            if not ctx.strip():
                add("empty_context", loc)
            if ctx and (ctx[0].islower() or LOWER_START.match(ctx)):
                add("lower_context", f"{loc}: {ctx[:90]}")

            # Title incomplete endings
            if re.search(
                r"(?:\b(?:a|an|the|and|or|of|for|with|to|from|Under|Plus|Then)$)",
                title.strip(),
            ):
                add("title_incomplete", f"{loc}: {title}")

            if len(t.get("statements") or []) != 5:
                add("stmt_count", f"{loc}: {len(t.get('statements') or [])}")
            if len(t.get("explanations") or []) != 5:
                add("expl_count", f"{loc}: {len(t.get('explanations') or [])}")
            if len(t.get("answer_key") or []) != 5:
                add("ans_count", f"{loc}")

            for fname, text in fields(t):
                for m in FLAT_POWER.finditer(text):
                    # filter false positives: years)12 months style — rare
                    snip = text[max(0, m.start() - 25) : m.end() + 25]
                    if re.search(r"(?:months|years|days|weeks|people|items)\)\d", snip):
                        continue
                    add("flat_power", f"{loc}/{fname}: {snip!r}")
                for m in NESTED_DOLLAR.finditer(text):
                    snip = text[max(0, m.start() - 15) : m.end() + 30]
                    add("nested_dollar", f"{loc}/{fname}: {snip!r}")
                for m in BAD_SUB.finditer(text):
                    add("bad_sub", f"{loc}/{fname}: {m.group(0)}")
                for m in WEIRD_TOKENS.finditer(text):
                    add("weird_token", f"{loc}/{fname}: {m.group(0)}")
                for m in TRUNC_TAIL.finditer(text):
                    add("trunc", f"{loc}/{fname}: {m.group(0)} :: {text[max(0,m.start()-10):m.end()+15]!r}")
                if unpaired_dollars(text):
                    add("unpaired_$", f"{loc}/{fname}: count leftover")
                for hit in prose_as_math_hits(text):
                    add("prose_math", f"{loc}/{fname}: {hit!r}")

                # PDF join remnants like "combi nes" already fixed; check " $ " empty math
                if "$$ $" in text or "$ $" in text:
                    add("empty_math", f"{loc}/{fname}")

                # Side-power classic remaining: digit after closing paren without ^
                # already in FLAT_POWER

                # Check ^( without brace that should be ^{}
                for m in re.finditer(r"\^(\d+)\b", text):
                    # inside $ is OK as LaTeX ^2 sometimes; prefer ^{n}
                    # only flag if outside math and looks flat: (1.05)^6 without braces is OK for KaTeX
                    pass

                # a2 without underscore in math-looking NPV
                if re.search(r"(?<![_$a-zA-Z])a[0-3]/(?:1\+r)", text):
                    add("unsub_a", f"{loc}/{fname}: {re.search(r'a[0-3]/\(1\+r[^)]*\)', text).group(0) if re.search(r'a[0-3]/\(1\+r[^)]*\)', text) else 'aN'}")

    # Cross-check extract titles presence for known truncated patterns
    for extract in sorted(EXTRACT_DIR.glob("11.*.txt")):
        # light: ensure File read works
        text = extract.read_text(encoding="utf-8", errors="replace")
        if "Capstone" in text and "Growth and Decay" in text:
            # ensure task has full title
            pass

    lines = []
    lines.append(f"TOTAL TASKS: {total_tasks}")
    lines.append(f"TOTAL ISSUES: {len(issues)}")
    lines.append("COUNTS:")
    for k, v in counts.most_common():
        lines.append(f"  {k}: {v}")
    lines.append("")
    lines.append("SAMPLES BY KIND (up to 25 each):")
    for kind, msgs in sample_map.items():
        lines.append(f"\n## {kind} ({len(msgs)})")
        for m in msgs[:25]:
            lines.append(f"  - {m}")

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines[:80]))
    print(f"\n... full report: {OUT}")
    print(f"issue total: {len(issues)}")


if __name__ == "__main__":
    main()
