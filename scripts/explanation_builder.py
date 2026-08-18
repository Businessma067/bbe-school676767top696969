#!/usr/bin/env python3
"""Template-driven explanation builder.

Builders extract structured quantities (counts, probabilities, thresholds,
compare-ops). This module does the arithmetic in Python and renders a fixed
layout: formula → substitution → result vs threshold → verdict.

Prose is not a source of numbers. parse_bbe and the Chapter 12/13 builders
import this instead of assembling formulas in free text.
"""

from __future__ import annotations

import math
import re
from dataclasses import dataclass, field

LETTERS = "ABCDE"
MINUS_RE = re.compile(r"[-−–]")
FLAT_C_RE = re.compile(r"\bC(\d{2,3})(\d)\b")
BINOM_RE = re.compile(r"\\binom\{(\d+)\}\{(\d+)\}")
AS_ABOVE_RE = re.compile(r",?\s*as computed above\.?", flags=re.I)
CASUAL_RE = re.compile(
    r"a close call|just barely|just clears|just creep|narrow margin|"
    r"easy to misread|straightforward",
    flags=re.I,
)
HEADER_RE = re.compile(
    r"^(?:\*\*)?(?:Statement\s+)?([A-E])(?:\.\s*→|\s+[—–-])\s*"
    r"(True|False|TRUE|FALSE)",
    flags=re.I,
)


def format_number(value: float, ndigits: int = 4) -> str:
    if abs(value - round(value)) < 1e-9:
        return f"{int(round(value)):,}"
    s = f"{value:.{ndigits}f}".rstrip("0").rstrip(".")
    if abs(value) >= 1000:
        try:
            whole, frac = s.split(".")
            s = f"{int(whole):,}.{frac}"
        except ValueError:
            s = f"{int(round(value)):,}"
    return s


def format_percent(value: float, ndigits: int = 3) -> str:
    """`value` is a probability in [0, 1] or already a percent > 1.5."""
    pct = value * 100.0 if 0 <= value <= 1.5 else value
    s = f"{pct:.{ndigits}f}".rstrip("0").rstrip(".")
    return f"{s}%"


def parse_number(text: str) -> float | None:
    s = (text or "").strip().replace(",", "").replace("$", "").replace("%", "")
    s = s.replace("{,}", "")
    if not s:
        return None
    try:
        return float(s)
    except ValueError:
        return None


def ratio(num: float, den: float) -> float:
    if den == 0:
        raise ZeroDivisionError("denominator is 0")
    return num / den


def binom_tex(n: int, k: int) -> str:
    return rf"\binom{{{n}}}{{{k}}}"


def expand_flat_c(text: str) -> str:
    """C525 → \\binom{52}{5} so digits cannot swap between copies."""

    def repl(m: re.Match[str]) -> str:
        return binom_tex(int(m.group(1)), int(m.group(2)))

    return FLAT_C_RE.sub(repl, text)


def drop_dangling_refs(text: str) -> str:
    s = AS_ABOVE_RE.sub("", text or "")
    s = re.sub(r"\s{2,}", " ", s)
    return s.strip()


def coerce_display_value(value: str, threshold: str | None) -> str:
    """If the threshold is a percent, show the computed value as a percent too."""
    raw = (value or "").strip().rstrip(".")
    if not raw:
        return raw
    if "%" in raw:
        return raw if raw.endswith("%") else raw
    thr = threshold or ""
    num = parse_number(raw)
    if num is None:
        return raw
    if "%" in thr or (0 < num <= 1.5 and re.search(r"\d+%", thr or "")):
        return format_percent(num)
    if 0 < num <= 1 and "%" in (thr or ""):
        return format_percent(num)
    return raw


def python_compare(value: float, op: str, threshold: float) -> bool:
    op_l = (op or "").lower().strip()
    if op_l in {"greater than", "above", "over"}:
        return value > threshold
    if op_l in {"less than", "below", "under"}:
        return value < threshold
    if op_l in {"at least"}:
        return value >= threshold
    if op_l in {"at most"}:
        return value <= threshold
    if op_l in {"equal to", "equals"}:
        return math.isclose(value, threshold, rel_tol=1e-6, abs_tol=1e-9)
    raise ValueError(f"unknown compare op {op!r}")


def align_units(value: float, threshold: float, threshold_text: str) -> tuple[float, float]:
    """Put value and threshold into the same unit (percent vs proportion)."""
    thr_is_pct = "%" in (threshold_text or "")
    if thr_is_pct and 0 <= value <= 1.5 and threshold > 1.5:
        return value * 100.0, threshold
    if thr_is_pct and 0 <= value <= 1.5 and threshold <= 1.5:
        return value * 100.0, threshold * 100.0
    if (not thr_is_pct) and value > 1.5 and 0 <= threshold <= 1.5:
        return value, threshold * 100.0
    return value, threshold


@dataclass
class Quantities:
    """Structured numbers extracted from a source block — never from generated prose."""

    letter: str
    is_true: bool
    formula: str = ""
    numerator: float | None = None
    denominator: float | None = None
    value: float | None = None
    value_display: str = ""
    as_percent: bool = False
    compare: str | None = None
    threshold: float | None = None
    threshold_display: str = ""
    extras: list[str] = field(default_factory=list)
    mistake: str = ""
    substitution: str = ""


def computed_value(q: Quantities) -> float | None:
    if q.value is not None:
        return q.value
    if q.numerator is not None and q.denominator is not None:
        return ratio(q.numerator, q.denominator)
    return None


def python_verdict(q: Quantities) -> bool | None:
    val = computed_value(q)
    if val is None or q.compare is None or q.threshold is None:
        return None
    left, right = align_units(val, q.threshold, q.threshold_display)
    return python_compare(left, q.compare, right)


def statement_pin(statement: str, limit: int = 14) -> str:
    s = re.sub(r"\s+", " ", statement or "").strip().rstrip(".")
    s = re.sub(r"^\$+|\$+$", "", s).strip()
    words = s.split()
    if len(words) <= limit:
        return s
    return " ".join(words[:limit]) + "…"


def unique_mistake(draft: str, used: set[str], q: Quantities, statement: str) -> str:
    text = drop_dangling_refs(draft or "").strip()
    if CASUAL_RE.search(text):
        text = CASUAL_RE.sub("", text).strip(" ,.")
    pin = statement_pin(statement)
    val = computed_value(q)
    shown = ""
    if val is not None:
        shown = format_percent(val) if q.as_percent or (0 <= val <= 1.5 and q.threshold_display.endswith("%")) else format_number(val)
    if not text:
        if shown:
            text = (
                f"A student who reversed the comparison around {shown} "
                "would mark the statement true."
            )
        elif pin:
            text = (
                f'A student who matched the topic to "{pin}" without checking '
                "the rest of the sentence would mark the statement true."
            )
        else:
            text = (
                f"A student who reversed the comparison on statement {q.letter} "
                "would mark the statement true."
            )
    if text not in used:
        used.add(text)
        return text
    if shown and shown not in text:
        text = f"{text.rstrip('.')} ({shown})."
        if text not in used:
            used.add(text)
            return text
    if pin and pin.lower() not in text.lower():
        text = f'{text.rstrip(".")}. The disputed claim is "{pin}."'
        if text not in used:
            used.add(text)
            return text
    text = f"{text.rstrip('.')}. (Statement {q.letter}.)"
    if text in used:
        raise ValueError(f"mistake sentence collides for statement {q.letter}")
    used.add(text)
    return text


def render(q: Quantities, used_mistakes: set[str], statement: str = "") -> str:
    lines = [f"Statement {q.letter} — {'True' if q.is_true else 'False'}", ""]
    formula = expand_flat_c(q.formula.strip())
    if formula:
        lines.extend([f"$$\n{formula}\n$$", ""])
    if q.substitution:
        sub = expand_flat_c(q.substitution.strip().lstrip("=").strip())
        if sub and sub not in {"1", "1.0"}:
            lines.extend([f"$$\n= {sub}\n$$", ""])
    elif q.numerator is not None and q.denominator is not None:
        lines.extend(
            [
                f"$$\n= {format_number(q.numerator, 6)}/{format_number(q.denominator, 6)}\n$$",
                "",
            ]
        )
    val = computed_value(q)
    result = q.value_display
    if not result and val is not None:
        result = format_percent(val) if q.as_percent else format_number(val)
    if result:
        result = coerce_display_value(result, q.threshold_display or "")
    if result and q.compare and q.threshold_display:
        holds = python_verdict(q)
        neg = "" if holds else "not "
        # If the stored letter is False, the comparison the *statement* made fails.
        if q.is_true is False and holds is True:
            neg = "not "
        if q.is_true is True and holds is False:
            neg = "not "
        lines.append(f"= {result}, which is {neg}{q.compare} {q.threshold_display}.")
        lines.append("")
    elif result:
        lines.append(f"= {result}.")
        lines.append("")
    for extra in q.extras:
        extra = drop_dangling_refs(expand_flat_c(extra)).strip()
        if extra and extra.lower() not in {"the statement is true.", "the statement is false."}:
            lines.append(extra)
            lines.append("")
    if q.is_true:
        lines.append("The statement is true.")
    else:
        mistake = unique_mistake(q.mistake, used_mistakes, q, statement)
        lines.append(f"The statement is false. {mistake}")
    return "\n".join(lines).strip() + "\n"


def last_mistake_sentence(text: str) -> str:
    body = (text or "").strip()
    if not body:
        return ""
    m = re.search(r"The statement is false\.\s*(.*)$", body, flags=re.S | re.I)
    if not m:
        return ""
    return re.sub(r"\s+", " ", m.group(1)).strip()


def seal_question_explanations(
    expls: list[str],
    statements: list[str],
    keys: list[bool],
) -> list[str]:
    """Hard uniqueness gate for False-statement mistake sentences within one question."""
    used: set[str] = set()
    out = list(expls)
    for i, text in enumerate(out):
        is_true = bool(keys[i]) if i < len(keys) else True
        if is_true:
            continue
        mistake = last_mistake_sentence(text)
        if not mistake:
            continue
        if mistake not in used:
            used.add(mistake)
            continue
        stmt = statements[i] if i < len(statements) else ""
        q = Quantities(letter=LETTERS[i] if i < 5 else "A", is_true=False, mistake=mistake)
        replacement = unique_mistake(mistake, used, q, stmt)
        if text.rstrip().endswith(mistake):
            out[i] = text.rstrip()[: -len(mistake)].rstrip() + " " + replacement + "\n"
        else:
            out[i] = re.sub(
                r"(The statement is false\.)\s*.*$",
                r"\1 " + replacement,
                text,
                count=1,
                flags=re.S | re.I,
            )
            if not out[i].endswith("\n"):
                out[i] += "\n"
    # Second pass: reject leftover collisions rather than shipping them.
    seen: set[str] = set()
    for i, text in enumerate(out):
        is_true = bool(keys[i]) if i < len(keys) else True
        if is_true:
            continue
        mistake = last_mistake_sentence(text)
        if not mistake:
            continue
        if mistake in seen:
            raise ValueError(f"mistake collision remains on statement {LETTERS[i]}")
        seen.add(mistake)
    return out
