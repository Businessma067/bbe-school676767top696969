#!/usr/bin/env python3
"""Parse Inequalities_Regrouped_By_Topic.pdf into math-ch6 JSON + TS."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader

from ch6_math import (
    embed_display_fractions_stashed,
    leftover_unicode,
    normalize_division_to_fractions,
    restore_fraction_stash,
    unpaired_dollars,
    wrap_math,
    wrap_statement,
)

PDF = Path("/Users/yehor/Downloads/Inequalities_Regrouped_By_Topic.pdf")
ROOT = Path(__file__).resolve().parents[2]
OUT_JSON = ROOT / "src" / "data" / "math-ch6-inequalities.json"
OUT_TS = ROOT / "src" / "data" / "math-ch6-inequalities.ts"
DUMP = ROOT / "textbook" / "output" / "ch6_pdf_extract.txt"

SECTIONS = {
    "Rational Inequalities": ("6.1", "Rational Inequalities"),
    "Quadratic Sign Inequalities": ("6.2", "Quadratic Sign Inequalities"),
    "Compound & Special Inequalities": ("6.3", "Compound & Special Inequalities"),
    "Word Problems": ("6.4", "Word Problems"),
}

HEADER_RE = re.compile(
    r"BBE School\s*[—–-]\s*Inequalities Sorted by Topic\s*\n\s*\d+\s*\n",
    re.I,
)
QUESTION_RE = re.compile(r"^Question\s+(\d+)(?:\s+[—–-]\s+(.+))?$")
STATEMENT_RE = re.compile(r"^Statement\s+([A-E])$")
DIFF_RE = re.compile(r"^Difficulty:\s*(\d)\s*/\s*5")
ANSWER_RE = re.compile(r"^Answer:\s*(TRUE|FALSE)\b", re.I)
TYPE_RE = re.compile(r"^Type:\s*(.+)$")
TRAP_RE = re.compile(r"^Common trap:\s*(.*)$", re.I)
QUICK_RE = re.compile(r"^(?:Quick check|Easier method)\b[^:]*:\s*(.*)$", re.I)
INTERVAL_HDR_RE = re.compile(r"^Interval\s+Sign\s*$", re.I)
SIGN_ROW_RE = re.compile(
    r"^(\S.*)\s+([+\-–−])\s*$"
)

LIGATURE_FIXES = [
    (r"\blef side\b", "left side"),
    (r"\blef endpoints\b", "left endpoints"),
    (r"\blef endpoint\b", "left endpoint"),
    (r"\blef condition\b", "left condition"),
    (r"\bthe lef\b", "the left"),
    (r"\bThe lef\b", "The left"),
    (r"\bcutof\b", "cutoff"),
    (r"direction-\s+preserving", "direction-preserving"),
    (r"non-\s+strict", "non-strict"),
    (r"non-\s+negative", "non-negative"),
    (r"non-\s+positive", "non-positive"),
    (r"(\d)-\s+credit", r"\1-credit"),
    (r"similar-\s+looking", "similar-looking"),
    (r"double-\s+checking", "double-checking"),
    (r"overtime-\s+adjusted", "overtime-adjusted"),
    (r"break-\s+even", "break-even"),
]

DOTS_ONLY_RE = re.compile(r"^\.{2,}$")
MATH_ARROW_STAR_RE = re.compile(r"(?<=[\d)])\s*\*\s*(?=[(A-Za-z])")
TRAILING_DOTS_RE = re.compile(r"\.\s+\.{2,}\s*")
FOUR_DOTS_RE = re.compile(r"\.{4,}")
STRAY_DOT_PAREN_RE = re.compile(r"\((\d+\.\d+)\.\s*\)")
ENDS_MATH_OP_RE = re.compile(r"[<>=≤≥≠+\-−×/→]$")

ARROW_STEP_RE = re.compile(r"\s→\s")

GENERIC_TRAP_PATTERNS = [
    r"always test (?:a )?(?:point|one value|a value) in (?:every|each) region",
    r"test one value in every region",
    r"test (?:a )?(?:specific )?number rather than (?:guessing|trusting)",
    r"(?:four|three|five) (?:regions|intervals).*(?:chances to slip|easy to)",
    r"lose track of (?:one )?sign flip",
    r"sign pattern just alternates",
    r"assuming the pattern simply alternates",
    r"see Questions?",
    r"Question\s+\d+",
    r"appears here for (?:a )?(?:third|second) time",
    r"both halves of a compound inequality must be solved and intersected",
    r"each half of (?:a|the) compound inequality must (?:still be )?solved",
    r"An irrational boundary makes the single-interval answer look plausible",
    r"Seeing an irrational boundary.*makes it tempting",
    r"makes it tempting to report one continuous interval",
    r"When both halves of a compound inequality produce irrational roots",
    r"Combining a double quadratic inequality into what looks like one smooth range",
    r"When one half of a compound inequality turns out to be true for all real numbers",
    r"When one half of a compound inequality reduces to a perfect square",
    r"When one half of a compound inequality collapses to a perfect square",
    r"When a compound inequality's left half collapses to a perfect square",
    r"Don't assume the left half of a compound inequality is automatically",
    r"Don't assume a compound inequality's left half is automatically",
    r"always intersect both halves carefully rather than reporting only the outer",
    r"With (?:two|three|four) critical points",
    r"With (?:two|three|four) (?:numerator roots|intervals)",
    r"it's easy to (?:forget|lose track|assume|only check)",
    r"always verify with a test point, since a quadratic numerator",
]

USEFUL_TRAP_PATTERNS = [
    r"denominator zero|denominator's root|division by 0|makes the denominator",
    r"squared numerator",
    r"isolated (?:point|extra)",
    r"perfect square.*(?:strictly|never negative|exactly one|single gap)",
    r"strict factored|excludes a whole interval|whole middle|interior region is excluded",
    r"don't commute|order.*(?:discount|coupon|percent)",
    r"rounds in opposite directions",
    r"target average|average speed.*not|goal.*not the|not the target speed|not the number that solves",
    r"extraneous|square root.*(?:negative|domain)|under the square root",
    r"absolute value.*(?:distance|split|cases)",
    r"sign doesn't flip|numerator stays (?:non-)?negative|quadratic numerator.*negative between",
    r"multiplying or dividing by a negative|direction.*flip",
    r"negative discriminant.*(?:good news|guarantees|no real|always true)",
    r"repeated root behaves",
    r"only the one that comes from the numerator",
    r"numerator.*denominator|denominator.*numerator",
    r"percentage discounts and flat-amount",
    r"whole number.*round",
]

# Word Problems — Average Cycling Speed (task 10 in 6.4): replace meta statement E.
STATEMENT_OVERRIDES: dict[tuple[str, str, str], dict[str, str]] = {
    ("6.4", "Average Cycling Speed", "E"): {
        "text": (
            "The inequality (12+x)/2 ≥ 15 correctly models "
            "the average-speed requirement."
        ),
        "explanation": (
            "Average speed equals total distance divided by total time. "
            "The first hour covers 12 miles and the second covers x miles, "
            "so the average is (12+x)/2. "
            "Requiring at least 15 mph over 2 hours gives (12+x)/2 ≥ 15."
        ),
    },
    ("6.4", "Average Cycling Speed", "C"): {
        "trap": (
            "The number 15 is the target average speed, not the minimum speed "
            "required in the second hour when the first segment falls below that goal."
        ),
    },
}


def fix_extract(s: str) -> str:
    s = s.replace("\u00a0", " ")
    s = s.replace("\ufeff", "")
    for pat, repl in LIGATURE_FIXES:
        s = re.sub(pat, repl, s)
    s = FOUR_DOTS_RE.sub("", s)
    s = STRAY_DOT_PAREN_RE.sub(r"(\1)", s)
    s = TRAILING_DOTS_RE.sub(". ", s)
    s = MATH_ARROW_STAR_RE.sub(" → ", s)
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()


def join_lines(lines: list[str]) -> str:
    """Join PDF wrap lines. Blank lines are page breaks, not new paragraphs."""
    if not lines:
        return ""
    cur = ""
    for raw in lines:
        line = fix_extract(raw)
        if not line or DOTS_ONLY_RE.match(line):
            continue
        if cur.endswith("-") and re.match(r"^[a-z]", line):
            cur = cur + line
        elif cur and ENDS_MATH_OP_RE.search(cur):
            cur = cur + " " + line
        else:
            cur = f"{cur} {line}".strip() if cur else line
    return fix_extract(cur)


def extract_pdf() -> str:
    reader = PdfReader(str(PDF))
    chunks: list[str] = []
    for i, page in enumerate(reader.pages):
        if i < 18:
            continue
        text = page.extract_text() or ""
        chunks.append(text)
    raw = "\n".join(chunks)
    raw = HEADER_RE.sub("\n", raw)
    return raw


def is_question_header(line: str) -> bool:
    return bool(QUESTION_RE.match(line))


def is_section_header(line: str) -> bool:
    return line in SECTIONS


def parse_sign_row(line: str) -> tuple[str, str] | None:
    m = SIGN_ROW_RE.match(line)
    if not m:
        return None
    interval, sign = m.group(1).strip(), m.group(2)
    if not re.search(r"[\(\[∞∞]", interval) and "," not in interval:
        if not re.search(r"[\)\]]", interval):
            return None
    sign_tex = "+" if sign == "+" else "-"
    return interval, sign_tex


def parse_document(raw: str) -> list[dict]:
    lines = [fix_extract(ln) for ln in raw.splitlines()]
    questions: list[dict] = []
    section_id = None
    section_title = None
    i = 0
    n = len(lines)

    def peek_nonempty(j: int) -> str:
        while j < n and not lines[j]:
            j += 1
        return lines[j] if j < n else ""

    while i < n:
        line = lines[i]
        if is_section_header(line):
            section_id, section_title = SECTIONS[line]
            i += 1
            continue
        m_q = QUESTION_RE.match(line)
        if not m_q:
            i += 1
            continue
        if section_id is None:
            i += 1
            continue

        qnum = int(m_q.group(1))
        qtitle = (m_q.group(2) or "").strip()
        i += 1
        q_diff = None
        context_lines: list[str] = []

        def skip_empty(j: int) -> int:
            while j < n and not lines[j]:
                j += 1
            return j

        i = skip_empty(i)
        if i < n and DIFF_RE.match(lines[i]):
            q_diff = DIFF_RE.match(lines[i]).group(1) + "/5"
            i += 1

        while i < n:
            nxt = lines[i]
            if STATEMENT_RE.match(nxt) or is_question_header(nxt) or is_section_header(nxt):
                break
            context_lines.append(nxt)
            i += 1

        statements: list[dict] = []
        i = skip_empty(i)
        while i < n and STATEMENT_RE.match(lines[i]):
            letter = STATEMENT_RE.match(lines[i]).group(1)
            i += 1
            s_diff = q_diff
            i = skip_empty(i)
            if i < n and DIFF_RE.match(lines[i]):
                s_diff = DIFF_RE.match(lines[i]).group(1) + "/5"
                i += 1

            stmt_lines: list[str] = []
            while i < n:
                if ANSWER_RE.match(lines[i]) or STATEMENT_RE.match(lines[i]) or is_question_header(lines[i]) or is_section_header(lines[i]):
                    break
                stmt_lines.append(lines[i])
                i += 1

            i = skip_empty(i)
            answer = None
            if i < n and ANSWER_RE.match(lines[i]):
                answer = ANSWER_RE.match(lines[i]).group(1).upper() == "TRUE"
                i += 1

            i = skip_empty(i)
            typ = ""
            if i < n and TYPE_RE.match(lines[i]):
                typ = TYPE_RE.match(lines[i]).group(1).strip()
                i += 1

            expl_lines: list[str] = []
            chart: list[tuple[str, str]] = []
            trap = ""
            quick = ""

            def at_stmt_boundary(s: str) -> bool:
                return bool(
                    STATEMENT_RE.match(s)
                    or is_question_header(s)
                    or is_section_header(s)
                )

            while i < n:
                cur = lines[i]
                if at_stmt_boundary(cur):
                    break
                if INTERVAL_HDR_RE.match(cur):
                    i += 1
                    while i < n:
                        row = parse_sign_row(lines[i]) if lines[i] else None
                        if row:
                            chart.append(row)
                            i += 1
                            continue
                        if not lines[i]:
                            i += 1
                            if i < n and parse_sign_row(lines[i]):
                                continue
                            break
                        break
                    continue
                tm = TRAP_RE.match(cur)
                if tm:
                    trap_lines = [tm.group(1)]
                    i += 1
                    while i < n:
                        nxt = lines[i]
                        if (
                            at_stmt_boundary(nxt)
                            or QUICK_RE.match(nxt)
                            or INTERVAL_HDR_RE.match(nxt)
                            or TRAP_RE.match(nxt)
                            or not nxt and peek_nonempty(i) and (
                                STATEMENT_RE.match(peek_nonempty(i))
                                or is_question_header(peek_nonempty(i))
                                or QUICK_RE.match(peek_nonempty(i))
                            )
                        ):
                            break
                        if not nxt:
                            i += 1
                            continue
                        trap_lines.append(nxt)
                        i += 1
                    trap = join_lines(trap_lines)
                    continue
                qm = QUICK_RE.match(cur)
                if qm:
                    quick_lines = [qm.group(1)]
                    i += 1
                    while i < n:
                        nxt = lines[i]
                        if (
                            at_stmt_boundary(nxt)
                            or TRAP_RE.match(nxt)
                            or INTERVAL_HDR_RE.match(nxt)
                            or QUICK_RE.match(nxt)
                        ):
                            break
                        if not nxt:
                            i += 1
                            if i < n and (
                                at_stmt_boundary(lines[i])
                                or TRAP_RE.match(lines[i])
                                or QUICK_RE.match(lines[i])
                                or is_question_header(lines[i])
                            ):
                                break
                            continue
                        quick_lines.append(nxt)
                        i += 1
                    quick = join_lines(quick_lines)
                    continue
                expl_lines.append(cur)
                i += 1

            stmt_text = join_lines(stmt_lines)
            dm = DIFF_RE.match(stmt_text)
            if dm:
                s_diff = dm.group(1) + "/5"
                stmt_text = DIFF_RE.sub("", stmt_text, count=1).strip()

            statements.append(
                {
                    "letter": letter,
                    "text": stmt_text,
                    "answer": answer,
                    "type": typ,
                    "explanation": join_lines(expl_lines),
                    "chart": chart,
                    "trap": trap,
                    "quick": quick,
                    "difficulty": s_diff or "—",
                }
            )

        questions.append(
            {
                "pdf_num": qnum,
                "title": qtitle,
                "section_id": section_id,
                "section_title": section_title,
                "context": join_lines(context_lines),
                "difficulty": q_diff,
                "statements": statements,
            }
        )

    return questions


def chart_markdown(chart: list[tuple[str, str]]) -> str:
    if not chart:
        return ""
    rows = ["| Interval | Sign |", "| --- | --- |"]
    for interval, sign in chart:
        rows.append(f"| {wrap_math(interval)} | {sign} |")
    return "\n".join(rows)


def split_arrow_chains(text: str) -> str:
    """Put each algebraic step on its own line instead of chaining with arrows."""
    if " → " not in text:
        return text
    parts = ARROW_STEP_RE.split(text)
    return "\n\n".join(p.strip() for p in parts if p.strip())


def split_sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z(])", text.strip())
    return [p.strip() for p in parts if p.strip()]


def expand_critical_points_block(text: str) -> str:
    m = re.match(r"^(Critical points:\s*)(.+)$", text, re.S)
    if not m:
        return text
    body = m.group(2).strip()
    chunks = [c.strip() for c in re.split(r";\s*", body) if c.strip()]
    if len(chunks) <= 1:
        return f"**Critical points**\n\n{body}"
    lines = []
    for chunk in chunks:
        if chunk and chunk[0].islower():
            chunk = chunk[0].upper() + chunk[1:]
        lines.append(chunk)
    return "**Critical points**\n\n" + "\n\n".join(lines)


def expand_rational_explanation(text: str) -> str:
    text = expand_critical_points_block(text)
    text = re.sub(r"\bCritical points:\s*", "**Critical points**\n\n", text, count=1)
    text = re.sub(
        r"\.\s+The inequality asks for ",
        r".\n\n**Solution selection**\n\nThe inequality asks for ",
        text,
    )
    text = re.sub(
        r"\.\s+(Keep the (?:non-)?(?:positive|negative|non-negative|non-positive) )",
        r".\n\n**Solution selection**\n\n\1",
        text,
    )
    text = re.sub(
        r"\.\s+(The inequality is strict )",
        r".\n\n**Strictness**\n\n\1",
        text,
    )
    text = re.sub(
        r"\.\s+Solution:\s*",
        r".\n\n**Solution**\n\n",
        text,
    )
    text = re.sub(
        r"\.\s+(True solution set:\s*)",
        r".\n\n**Correct solution**\n\n\1",
        text,
    )
    text = re.sub(
        r"\.\s+(Notice the pattern )",
        r".\n\n**Sign note**\n\nNotice the pattern ",
        text,
    )
    text = re.sub(
        r"\.\s+(The numerator )",
        r".\n\n**Numerator note**\n\nThe numerator ",
        text,
        count=1,
    )
    text = re.sub(
        r"\.\s+(For \$x > 3\$)",
        r".\n\n**Case analysis**\n\nFor $x > 3$",
        text,
    )
    text = re.sub(
        r"\.\s+(But \$x = -2\$ also works:)",
        r".\n\n**Extra zero**\n\nBut $x = -2$ also works:",
        text,
    )
    return split_arrow_chains(text)


def expand_quadratic_explanation(text: str) -> str:
    text = re.sub(r"^Factor:\s*", "**Factor**\n\n", text)
    text = re.sub(r"\.\s+Critical points:\s*", ".\n\n**Critical points**\n\n", text)
    text = re.sub(
        r"\.\s+(Keep the (?:non-)?(?:positive|negative|non-negative|non-positive) )",
        r".\n\n**Solution selection**\n\n\1",
        text,
    )
    text = re.sub(
        r"\.\s+(The (?:parabola|discriminant|quadratic|inequality is strict) )",
        r".\n\n**Analysis**\n\n\1",
        text,
        count=1,
    )
    text = re.sub(
        r"\.\s+(A non-strict )",
        r".\n\n**Endpoint rule**\n\nA non-strict ",
        text,
    )
    text = re.sub(
        r"\.\s+(Since )",
        r".\n\n**Conclusion**\n\nSince ",
        text,
        count=1,
    )
    text = re.sub(
        r"\.\s+(The branch )",
        r".\n\n**Second branch**\n\nThe branch ",
        text,
    )
    text = re.sub(
        r"\.\s+(The stated )",
        r".\n\n**Compare to claim**\n\nThe stated ",
        text,
    )
    return split_arrow_chains(text)


def expand_word_explanation(text: str) -> str:
    if re.match(r"^Solving ", text):
        text = re.sub(r"^Solving ", "**Solve**\n\nSet up and solve. ", text, count=1)
    starters = [
        (r"^Average speed ", "**Setup**\n\nAverage speed "),
        (r"^Each one-hour ", "**Setup**\n\nEach one-hour "),
        (r"^Isolating ", "**Solve**\n\nIsolating "),
        (r"^Set up ", "**Setup**\n\nSet up "),
        (r"^At \$", "**Evaluate**\n\nAt $"),
        (r"^With \$", "**Evaluate**\n\nWith $"),
        (r"^This restates ", "**Conclusion**\n\nThis restates "),
        (r"^Applying ", "**Order of operations**\n\nApplying "),
        (r"^\"Discount first\"", "**Model**\n\n\"Discount first\""),
        (r"^500 \+", "**Evaluate**\n\n500 +"),
    ]
    for pat, repl in starters:
        if re.search(pat, text):
            text = re.sub(pat, repl, text, count=1)
            break
    text = re.sub(
        r"\.\s+(Requiring at least )",
        r".\n\n**Inequality**\n\nRequiring at least ",
        text,
    )
    text = re.sub(
        r"\.\s+(Dividing both sides )",
        r".\n\n**Solve**\n\nDividing both sides ",
        text,
    )
    text = re.sub(
        r"\.\s+(Clearing the denominator )",
        r".\n\n**Solve**\n\nClearing the denominator ",
        text,
    )
    return split_arrow_chains(text)


def split_compound_algebra_steps(text: str) -> str:
    """Put each rewrite of a compound/radical inequality on its own line."""
    text = re.sub(r"(\))\.\s+([xX]|[-−]?\d+\s*[<≤])", r"\1.\n\n\2", text)
    text = re.sub(r"(\))\.\s+(x²|x\^2|\()", r"\1.\n\n\2", text)
    text = re.sub(r"(> 0|≥ 0|≤ 0|< 0),\s+(true for every)", r"\1.\n\n**Result for this part:** \2", text)
    text = re.sub(r"(> 0|≥ 0|≤ 0|< 0)\.\s+(true for every)", r"\1.\n\n**Result for this part:** True for every", text)
    text = re.sub(r"(?<=[0-9\)])\s*, giving ", r".\n\n**Interval from this part:** ", text)
    text = re.sub(r", so this piece gives ", r".\n\n**Interval from this part:** ", text)
    text = re.sub(r"(?<=[\)0-9])\s*, i\.e\. ", r".\n\n**Equivalent form:** that is, ", text)
    text = re.sub(r"(?<=[\)0-9])\s*, which factors as ", r".\n\n**Factor:** which factors as ", text)
    return text


def expand_absolute_value_regions(text: str) -> str:
    """Split multi-region absolute-value walkthroughs into labeled cases."""
    if not re.search(r"split into (?:two|three|four) regions", text):
        return text
    text = re.sub(
        r"(split into (?:two|three|four) regions\.)\s*",
        r"\1\n\n",
        text,
    )
    region_n = 1
    text = re.sub(
        r"(regions\.)\s+(x\s*[<>−-]\s*[^.:]+):",
        lambda m: f"{m.group(1)}\n\n**Region 1**\n\n{m.group(2)}:",
        text,
        count=1,
    )

    def next_region(match: re.Match[str]) -> str:
        nonlocal region_n
        region_n += 1
        return f".\n\n**Region {region_n}**\n\n{match.group(1)}:"

    text = re.sub(r"\.\s+([-−]?\d+\s*≤\s*x\s*≤\s*[^.:]+):", next_region, text)
    text = re.sub(r"(included)\.\s*(x\s*>\s*[^.:]+):", r"\1.\n\n**Region 3**\n\n\2:", text)
    text = re.sub(r"\.\s+(x\s*>\s*[^.:]+):", next_region, text)
    text = re.sub(
        r"(Combining all (?:three )?pieces gives|Combining all pieces gives)",
        r"\n\n**Combine regions**\n\n\1",
        text,
    )
    return text


def expand_compound_explanation(text: str) -> str:
    """Break compound-inequality solutions into labeled, step-by-step blocks."""
    text = re.sub(
        r"\bSplit (?:the compound inequality into two separate ones|into two inequalities)\.\s*",
        "Split the compound inequality into two separate parts.\n\n",
        text,
        count=1,
    )
    text = re.sub(r"\bLeft part:\s*", "**Left part**\n\n", text)
    text = re.sub(r"\bRight part:\s*", "\n\n**Right part**\n\n", text)
    text = re.sub(r"\bFirst:\s*", "**First inequality**\n\n", text)
    text = re.sub(r"\bSecond:\s*", "\n\n**Second inequality**\n\n", text)
    text = re.sub(
        r"\bIntersecting(?: both| the two)?:\s*",
        "\n\n**Intersection**\n\n",
        text,
    )
    text = split_arrow_chains(text)
    text = split_compound_algebra_steps(text)
    text = expand_absolute_value_regions(text)

    text = re.sub(r"\bCase 1 —", "**Case 1** —", text)
    text = re.sub(r"\bCase 2 —", "**Case 2** —", text)
    text = re.sub(r"(?<!\*)\bCase 1\b(?!\*)", "**Case 1**", text)
    text = re.sub(r"(?<!\*)\bCase 2\b(?!\*)", "**Case 2**", text)
    text = re.sub(r"(\*\*Case [12]\*\* — [^:\n]+:)\s+", r"\1\n\n", text)

    text = re.sub(
        r"([.!?])\s+(\*\*Case 2\*\* —)",
        r"\1\n\n\2",
        text,
    )
    text = re.sub(
        r"(\*\*Case 1 result\*\*\s*\n\n[^\n]+)\.\s+(\*\*Case 2\*\* —)",
        r"\1.\n\n\2",
        text,
    )

    text = re.sub(r"\bDomain:\s*", "**Domain restriction**\n\n", text)

    text = re.sub(r"\.\s+(True solution:)", r".\n\n**Correct answer**\n\nTrue solution:", text)
    text = re.sub(
        r"\.\s+(Since the left condition)",
        r".\n\n**Final answer**\n\nSince the left condition",
        text,
    )
    text = re.sub(
        r"\.\s+(By the quadratic formula, the roots are)",
        r".\n\n**Quadratic formula**\n\nBy the quadratic formula, the roots are",
        text,
    )
    text = re.sub(r"\. Discriminant:", r".\n\n**Discriminant check**\n\nDiscriminant:", text)

    text = re.sub(
        r"\.\s+(Union of both cases:)",
        r".\n\n**Combine cases**\n\nUnion of both cases:",
        text,
    )
    text = re.sub(
        r"\.\s+(Combining both cases:)",
        r".\n\n**Combine cases**\n\nCombining both cases:",
        text,
    )
    text = re.sub(
        r"\.\s+(Combined with )",
        r".\n\n**Restrict to this case**\n\nCombined with ",
        text,
    )
    text = re.sub(
        r"\.\s+(Every domain value here works:)",
        r".\n\n**Case 1 result**\n\nEvery domain value here works:",
        text,
    )
    text = re.sub(
        r"(holds automatically for (?:all|the entire)[^.]+\.)\s+(\*\*Case 2\*\* —)",
        r"\1\n\n\2",
        text,
    )
    text = re.sub(
        r"(automatically greater than a negative number\.)\s+(\*\*Case 2\*\* —)",
        r"\1\n\n**Case 1 result**\n\nEvery domain value in this slice works.\n\n\2",
        text,
    )
    text = re.sub(
        r"(So this case contributes [^.]+\.)\s+(Combining both cases:|\*\*Combine cases\*\*)",
        r"\1\n\n**Case 2 result**\n\n\2",
        text,
    )
    text = re.sub(
        r"\):\s*split the absolute value:",
        r"):\n\n**Split |·| into branches**\n\nSplit the absolute value:",
        text,
    )
    text = re.sub(r"squaring is safe:\s*", "squaring is safe:\n\n", text)
    text = re.sub(r", so square:\s*", ", so square both sides:\n\n", text)
    text = re.sub(r", so square both sides:\s*", ", so square both sides:\n\n", text)
    text = re.sub(
        r"\) or \((?=[^)]*(?:giving|impossible|x ≤|x \\ge))",
        r")\n\n**OR branch**\n\n(",
        text,
    )
    return text


def prepare_prose_math(text: str) -> str:
    if not text:
        return text
    prepared = normalize_division_to_fractions(text)
    prepared, fracs = embed_display_fractions_stashed(prepared)
    wrapped = wrap_math(prepared)
    return restore_fraction_stash(wrapped, fracs)


def format_explanation_body(text: str, section_id: str) -> str:
    if not text:
        return text
    if section_id == "6.1":
        text = expand_rational_explanation(text)
    elif section_id == "6.2":
        text = expand_quadratic_explanation(text)
    elif section_id == "6.3":
        text = expand_compound_explanation(text)
    elif section_id == "6.4":
        text = expand_word_explanation(text)
    elif section_id == "6.5":
        # Exam-style writeups already use labeled blocks; keep arrow splits + compound labels.
        text = expand_compound_explanation(text)
        text = expand_word_explanation(text)
    else:
        text = split_arrow_chains(text)
    return prepare_prose_math(text)


def should_keep_trap(trap: str, st: dict) -> bool:
    if not trap:
        return False
    for pat in GENERIC_TRAP_PATTERNS:
        if re.search(pat, trap, re.I):
            return False
    if st.get("chart") and re.search(
        r"test (?:a )?(?:point|one value|a value|a specific).{0,30}region",
        trap,
        re.I,
    ):
        return False
    return any(re.search(pat, trap, re.I) for pat in USEFUL_TRAP_PATTERNS)


def apply_statement_overrides(q: dict) -> None:
    key_base = (q["section_id"], q.get("title") or "")
    for st in q["statements"]:
        key = (*key_base, st["letter"])
        override = STATEMENT_OVERRIDES.get(key)
        if not override:
            continue
        if "text" in override:
            st["text"] = override["text"]
        if "explanation" in override:
            st["explanation"] = override["explanation"]
        if "trap" in override:
            st["trap"] = override["trap"]
        if "answer" in override:
            st["answer"] = override["answer"]


def parse_diff(value: str | None) -> int | None:
    m = re.match(r"(\d)/5", value or "")
    return int(m.group(1)) if m else None


def section_progress_band(section_id: str, local_index: int, section_size: int) -> tuple[int, int]:
    """Return the target difficulty band for a question's position within its subsection."""
    if section_size <= 0:
        return (2, 3)
    t = local_index / section_size
    bands: dict[str, list[tuple[float, tuple[int, int]]]] = {
        "6.1": [(0.20, (1, 2)), (0.45, (2, 3)), (0.70, (3, 4)), (1.01, (4, 5))],
        "6.2": [(0.20, (1, 2)), (0.45, (2, 3)), (0.70, (3, 4)), (1.01, (4, 5))],
        "6.3": [(0.23, (2, 3)), (0.46, (3, 4)), (0.77, (4, 4)), (1.01, (4, 5))],
        "6.4": [(0.32, (2, 3)), (0.64, (3, 4)), (0.88, (4, 4)), (1.01, (4, 5))],
        "6.5": [(0.20, (3, 3)), (0.50, (3, 4)), (0.80, (4, 5)), (1.01, (5, 5))],
    }
    for threshold, band in bands.get(section_id, bands["6.1"]):
        if t <= threshold:
            return band
    return (4, 5)


def compute_task_difficulty(
    q: dict,
    local_index: int,
    section_size: int,
) -> str:
    stmt_vals = [parse_diff(st.get("difficulty")) for st in q["statements"]]
    stmt_vals = [v for v in stmt_vals if v is not None]
    q_val = parse_diff(q.get("difficulty"))
    if q_val is not None:
        stmt_vals.append(q_val)

    lo, hi = section_progress_band(q["section_id"], local_index, section_size)
    if not stmt_vals:
        return f"{max(lo, min(3, hi))}/5"

    peak = max(stmt_vals)
    avg = round(sum(stmt_vals) / len(stmt_vals))

    # Blend statement signal with subsection progression.
    target = max(avg, lo)
    target = min(target, hi)

    # Allow a late-set peak to reach the top band when statements are genuinely hard.
    if peak >= 5 and local_index >= max(1, section_size - 2):
        target = 5
    elif peak >= 4 and target < 4 and local_index >= max(1, round(section_size * 0.55)):
        target = 4
    elif peak <= 2 and local_index <= max(1, round(section_size * 0.2)):
        target = min(target, 2)

    return f"{target}/5"


def build_explanation(st: dict, statement_katex: str, section_id: str) -> str:
    letter = st["letter"]
    verdict = "true" if st["answer"] else "false"
    parts = [f"**{letter}) {statement_katex}**  ({verdict})"]
    if st["explanation"]:
        parts.append(format_explanation_body(st["explanation"], section_id))
    chart = chart_markdown(st["chart"])
    if chart:
        parts.append("**Sign chart**")
        parts.append(chart)
    if st["trap"] and should_keep_trap(st["trap"], st):
        parts.append(f"**Common trap:** {prepare_prose_math(st['trap'])}")
    if st["quick"]:
        parts.append(f"**Quick check:** {prepare_prose_math(st['quick'])}")
    return "\n\n".join(parts)


def algebraic_overview(section_title: str, statements: list[dict]) -> str:
    types = []
    seen = set()
    for st in statements:
        t = (st.get("type") or "").strip()
        if t and t not in seen:
            seen.add(t)
            types.append(t)
    type_line = "; ".join(types[:3])
    if section_title.startswith("Rational"):
        method = (
            "Find the zeros of the numerator and the excluded zeros of the denominator, "
            "then read the sign of the expression on each open interval. Include a critical "
            "point only when it comes from the numerator and the inequality is non-strict. "
            "A denominator zero is never a solution."
        )
    elif section_title.startswith("Quadratic"):
        method = (
            "Factor the quadratic (or read the discriminant), mark the roots, and test the "
            "sign on each interval. A non-strict inequality keeps the roots; a strict one drops them. "
            "A quadratic that opens upward is non-negative outside its roots and non-positive between them."
        )
    else:
        method = (
            "Identify the type (compound, absolute value, or radical), write the domain when a "
            "square root is present, split at the points where expressions change sign, and "
            "intersect every condition. Boundary points follow the strictness of the piece that produced them."
        )
    bits = ["Evaluate each statement. Mark it TRUE or FALSE.", "", method]
    if type_line:
        bits.extend(["", f"Types in this set: {type_line}."])
    return "\n".join(bits)


def build_tasks(questions: list[dict]) -> list[dict]:
    tasks: list[dict] = []
    n = 0
    counts: dict[str, int] = {}
    section_totals: dict[str, int] = {}
    for q in questions:
        sid = q["section_id"]
        section_totals[sid] = section_totals.get(sid, 0) + 1
    for q in questions:
        apply_statement_overrides(q)
        sid = q["section_id"]
        counts[sid] = counts.get(sid, 0) + 1
        local = counts[sid]
        n += 1
        stmts_k = []
        answers = []
        expls = []
        for st in q["statements"]:
            sk = wrap_statement(st["text"])
            stmts_k.append(sk)
            answers.append(bool(st["answer"]))
            expls.append(build_explanation(st, sk, sid))

        is_word = sid == "6.4"
        if is_word:
            title = q["title"] or f"Word problem {q['pdf_num']}"
            context = wrap_math(q["context"]) if q["context"] else "Evaluate each statement. Mark it TRUE or FALSE."
            overview = context
        else:
            title = f"{q['section_title']} — {local}"
            context = "Evaluate each statement. Mark it TRUE or FALSE."
            overview = algebraic_overview(q["section_title"], q["statements"])

        tasks.append(
            {
                "id": f"math-6-{n}",
                "case_id": f"MATH 6.{n:02d}",
                "title": title,
                "subsection": sid,
                "context": context,
                "statements": stmts_k,
                "answer_key": answers,
                "tactical_explanations": expls,
                "difficulty_level": compute_task_difficulty(q, local, section_totals[sid]),
                "sort_order": n,
                "solution_overview": overview,
                "placeholder": False,
            }
        )
    return tasks


def emit_ts() -> str:
    return '''/**
 * Chapter 6 — Inequalities (subsections 6.1–6.5).
 * 6.1–6.4 sourced from Inequalities_Regrouped_By_Topic.pdf;
 * 6.5 exam-style tasks from textbook/output/ch6_exam_style.py.
 */

import type { MathTask } from "@/data/math-chapters";
import ch6 from "@/data/math-ch6-inequalities.json";

export const MATH_CH6_SUBSECTIONS = [
  { id: "6.1", title: "Rational Inequalities" },
  { id: "6.2", title: "Quadratic Sign Inequalities" },
  { id: "6.3", title: "Compound & Special Inequalities" },
  { id: "6.4", title: "Word Problems" },
  { id: "6.5", title: "Exam-style tasks" },
] as const;

export const MATH_CH6_INEQUALITIES: MathTask[] = (ch6.tasks as MathTask[]).map((t) => ({
  ...t,
  placeholder: false,
}));
'''


def qa_report(questions: list[dict], tasks: list[dict]) -> None:
    from collections import Counter

    by_sec = Counter(q["section_id"] for q in questions)
    print("questions by section:", dict(by_sec))
    n_stmt = sum(len(q["statements"]) for q in questions)
    print("statements:", n_stmt)
    missing_ans = [
        (q["section_id"], q["pdf_num"], st["letter"])
        for q in questions
        for st in q["statements"]
        if st["answer"] is None
    ]
    empty_stmt = [
        (q["section_id"], q["pdf_num"], st["letter"])
        for q in questions
        for st in q["statements"]
        if not st["text"]
    ]
    print("missing answers:", missing_ans)
    print("empty statements:", empty_stmt)
    lens = Counter(len(q["statements"]) for q in questions)
    print("statements-per-question:", dict(lens))

    leftover = []
    unpaired = []
    for t in tasks:
        blob = "\n".join(
            [t["title"], t["context"], t.get("solution_overview") or "", *t["statements"], *t["tactical_explanations"]]
        )
        lu = leftover_unicode(blob)
        if lu:
            leftover.append((t["id"], lu[:8]))
        if unpaired_dollars(blob):
            unpaired.append(t["id"])
    print("tasks with leftover unicode math:", leftover[:20], "count", len(leftover))
    print("unpaired dollars:", unpaired)

    print("\n--- sample statements ---")
    for t in tasks[:2] + [x for x in tasks if x["subsection"] == "6.2"][:1] + [
        x for x in tasks if x["subsection"] == "6.3"
    ][:1] + [x for x in tasks if x["subsection"] == "6.4"][:1]:
        print(t["id"], t["subsection"], t["title"])
        print(" ", t["statements"][0][:200])
        print("  answers", t["answer_key"])


def main() -> None:
    from ch6_exam_style import exam_style_tasks

    raw = extract_pdf()
    DUMP.parent.mkdir(parents=True, exist_ok=True)
    DUMP.write_text(raw, encoding="utf-8")
    questions = parse_document(raw)
    tasks = build_tasks(questions)
    tasks.extend(exam_style_tasks(start_n=len(tasks) + 1))
    OUT_JSON.write_text(
        json.dumps({"tasks": tasks}, ensure_ascii=False, indent=1) + "\n",
        encoding="utf-8",
    )
    OUT_TS.write_text(emit_ts(), encoding="utf-8")
    print("wrote", OUT_JSON, "and", OUT_TS)
    qa_report(questions, tasks)


if __name__ == "__main__":
    sys.exit(main() or 0)
