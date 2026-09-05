"""Helpers to patch tactical_explanations in math-ch1-logic.ts."""
from __future__ import annotations

import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch1-logic.ts")
LETTERS = "ABCDE"


def escape_ts_template(s: str) -> str:
    """Escape for a TS template literal (backticks / ${)."""
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def unescape_ts_template(s: str) -> str:
    out = []
    i = 0
    while i < len(s):
        if s[i] == "\\" and i + 1 < len(s):
            out.append(s[i + 1])
            i += 2
        else:
            out.append(s[i])
            i += 1
    return "".join(out)


def pack(letter: str, truth: bool, body: str) -> str:
    body = body.strip()
    verdict = "True" if truth else "False"
    if not re.search(r"so the statement is\s+(True|False)", body, re.I):
        body = body.rstrip() + f"\n\nSo the statement is {verdict}."
    return f"**{letter}.** → {verdict}\n\n{body}"


def find_case_block(text: str, case_id: str) -> tuple[int, int]:
    m = re.search(rf"case_id:\s*`{re.escape(case_id)}`", text)
    if not m:
        raise KeyError(case_id)
    start = text.rfind("{", 0, m.start())
    # next case_id or end of MATH_CH1_CORE array
    nxt = re.search(r"\n  \{\n    id: `math-1-", text[m.end():])
    if nxt:
        end = m.end() + nxt.start()
    else:
        # fall back: find tactical_explanations closing and solution_overview
        end = len(text)
    return start, end


def replace_tactical(text: str, case_id: str, explanations: list[str]) -> str:
    if len(explanations) != 5:
        raise ValueError(f"{case_id}: need 5 explanations, got {len(explanations)}")
    m = re.search(rf"case_id:\s*`{re.escape(case_id)}`", text)
    if not m:
        raise KeyError(case_id)
    # Find tactical_explanations array after this case_id, before next case_id
    rest = text[m.end():]
    next_case = re.search(r"\n  \{\n    id: `math-1-", rest)
    limit = next_case.start() if next_case else len(rest)
    region = rest[:limit]
    te = re.search(r"tactical_explanations:\s*\[", region)
    if not te:
        raise RuntimeError(f"No tactical_explanations for {case_id}")
    # Find matching closing ]
    i = te.end()
    depth = 1
    in_tick = False
    while i < len(region) and depth:
        ch = region[i]
        if in_tick:
            if ch == "\\" and i + 1 < len(region):
                i += 2
                continue
            if ch == "`":
                in_tick = False
            i += 1
            continue
        if ch == "`":
            in_tick = True
            i += 1
            continue
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
        i += 1
    abs_start = m.end() + te.start()
    abs_end = m.end() + i  # points just after ]
    new_arr_parts = []
    for ex in explanations:
        # explanations are already raw (unescaped) markdown; escape for TS
        new_arr_parts.append("      `" + escape_ts_template(ex) + "`")
    new_block = "tactical_explanations: [\n" + ",\n".join(new_arr_parts) + ",\n    ]"
    return text[:abs_start] + new_block + text[abs_end:]


def replace_overview(text: str, case_id: str, overview: str) -> str:
    m = re.search(rf"case_id:\s*`{re.escape(case_id)}`", text)
    if not m:
        raise KeyError(case_id)
    rest = text[m.end():]
    next_case = re.search(r"\n  \{\n    id: `math-1-", rest)
    limit = next_case.start() if next_case else len(rest)
    region = rest[:limit]
    om = re.search(r"solution_overview:\s*`", region)
    if not om:
        raise RuntimeError(f"No solution_overview for {case_id}")
    # find closing backtick
    i = om.end()
    while i < len(region):
        if region[i] == "\\" and i + 1 < len(region):
            i += 2
            continue
        if region[i] == "`":
            break
        i += 1
    abs_start = m.end() + om.start()
    abs_end = m.end() + i + 1
    new = "solution_overview: `" + escape_ts_template(overview) + "`"
    return text[:abs_start] + new + text[abs_end:]


def load() -> str:
    return PATH.read_text(encoding="utf-8")


def save(text: str) -> None:
    PATH.write_text(text, encoding="utf-8")


def apply_case(
    text: str,
    case_id: str,
    answer_key: list[bool],
    bodies: list[str],
    overview: str | None = None,
) -> str:
    expls = [pack(LETTERS[i], answer_key[i], bodies[i]) for i in range(5)]
    text = replace_tactical(text, case_id, expls)
    if overview is not None:
        text = replace_overview(text, case_id, overview)
    return text


def replace_one_letter(text: str, case_id: str, letter_idx: int, explanation: str) -> str:
    """Replace a single letter (0=A..4=E) in tactical_explanations."""
    m = re.search(rf"case_id:\s*`{re.escape(case_id)}`", text)
    if not m:
        raise KeyError(case_id)
    rest = text[m.end() :]
    next_case = re.search(r"\n  \{\n    id: `math-1-", rest)
    limit = next_case.start() if next_case else len(rest)
    region = rest[:limit]
    te = re.search(r"tactical_explanations:\s*\[", region)
    if not te:
        raise RuntimeError(f"No tactical_explanations for {case_id}")
    # Find letter_idx-th template string
    i = te.end()
    found = 0
    while i < len(region):
        while i < len(region) and region[i] in " \t\n\r,":
            i += 1
        if i >= len(region) or region[i] == "]":
            raise RuntimeError(f"Letter index {letter_idx} out of range for {case_id}")
        if region[i] != "`":
            raise RuntimeError(f"Expected template at letter {found} for {case_id}")
        start_tick = i
        i += 1
        while i < len(region):
            if region[i] == "\\" and i + 1 < len(region):
                i += 2
                continue
            if region[i] == "`":
                break
            i += 1
        end_tick = i + 1  # after closing `
        if found == letter_idx:
            abs_start = m.end() + start_tick
            abs_end = m.end() + end_tick
            new = "`" + escape_ts_template(explanation) + "`"
            return text[:abs_start] + new + text[abs_end:]
        found += 1
        i = end_tick
    raise RuntimeError(f"Letter index {letter_idx} not found for {case_id}")
