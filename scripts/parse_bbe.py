#!/usr/bin/env python3
"""Canonical per-statement explanation format for BBE true/false banks.

There is no separate strategy_tip field in this repo. Takeaways used to be a
second copy of the same sentence; they are not part of the format.

Order, with no exceptions:

  1. Formula / method (symbolic)
  2. Substitution of the stem numbers
  3. Computed result compared with the claimed threshold
  4. One verdict sentence; for FALSE, name the student error that would
     make the claim look true

Import this module from builders (Chapter 12, economics expand, future
ingestion) instead of inventing a fifth layout.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src" / "data"
LETTERS = "ABCDE"

GENERIC_LEAD_RE = re.compile(
    r"^\s*(?:Organize counts into a table\.[^\n]*|"
    r"Organize the counts(?: from the problem)?, then[^\n]*|"
    r"See the shared solution for the supporting calculation\.)\s*",
    flags=re.I,
)
TAKEAWAY_RE = re.compile(r"(?im)^(?:\*\*)?Takeaway:?\*?\*?\s*.+$")
CLOSE_CALL_RE = re.compile(r"(?im)^(?:\*\*)?Close call:?\*?\*?\s*.+$")
CASUAL_PHRASE_RE = re.compile(
    r"(?:,?\s*)?(?:a close call|just barely|just clears|just creep(?:s|ed)? past|"
    r"a very narrow margin|it'?s easy to misread|"
    r"this is a straightforward[^.]*|"
    r"lines up with common retail experience[^.]*|"
    r"in fact)\b",
    flags=re.I,
)
HEDGE_CLAUSE_RE = re.compile(
    r"\s*[—–-]\s*(?:a close call|it is slightly higher|it'?s greater|"
    r"it'?s smaller|it'?s easy to misread[^.]*|"
    r"a very narrow margin)\.?",
    flags=re.I,
)
CONTRACTION_MAP = (
    (re.compile(r"\bIt's\b"), "It is"),
    (re.compile(r"\bit's\b"), "it is"),
    (re.compile(r"\bDon't\b"), "Do not"),
    (re.compile(r"\bdon't\b"), "do not"),
    (re.compile(r"\bisn't\b"), "is not"),
    (re.compile(r"\bThere's\b"), "There is"),
    (re.compile(r"\bthere's\b"), "there is"),
    (re.compile(r"\bThat's\b"), "That is"),
    (re.compile(r"\bthat's\b"), "that is"),
    (re.compile(r"\bwouldn't\b"), "would not"),
    (re.compile(r"\bcan't\b"), "cannot"),
    (re.compile(r"\bWe're\b"), "We are"),
    (re.compile(r"\bwe're\b"), "we are"),
    (re.compile(r"\byou're\b"), "you are"),
    (re.compile(r"\bYou're\b"), "You are"),
)
HEADER_RE = re.compile(
    r"^(?:\*\*)?(?:Statement\s+)?([A-E])(?:\.\s*→|\s+[—–-])\s*"
    r"(True|False|TRUE|FALSE)(?:\*\*)?",
    flags=re.I,
)
FRAC_RE = re.compile(r"(\d[\d,]*(?:\.\d+)?)\s*/\s*(\d[\d,]*(?:\.\d+)?)")
CMP_RE = re.compile(
    r"which is\s+(?P<neg>not\s+)?(?P<op>greater than|less than|at least|"
    r"at most|above|below|under|over)\s+(?P<thr>\$?-?\d[\d,]*(?:\.\d+)?%?)",
    flags=re.I,
)
EQ_VALUE_RE = re.compile(
    r"=\s*(?P<sub>\d[\d,]*(?:\.\d+)?\s*/\s*\d[\d,]*(?:\.\d+)?)"
    r"(?:\s*≈\s*(?P<approx>-?\$?[\d,]+(?:\.\d+)?%?))?",
)
SOLE_VALUE_RE = re.compile(
    r"(?:E\([^)]+\)|Var\([^)]+\)|σ(?:²)?(?:\([^)]+\))?|μ(?:\([^)]+\))?|P\([^)]+\))\s*=\s*"
    r"(?P<val>\$?-?[\d,]+(?:\.\d+)?%?)(?!\s*-)",
)
DISPLAY_RE = re.compile(r"\$\$(.*?)\$\$", flags=re.S)


def academic_prose(text: str) -> str:
    s = text or ""
    s = CASUAL_PHRASE_RE.sub("", s)
    s = HEDGE_CLAUSE_RE.sub("", s)
    for pat, repl in CONTRACTION_MAP:
        s = pat.sub(repl, s)
    s = re.sub(r"\s{2,}", " ", s)
    s = re.sub(r"\s+([,.;:])", r"\1", s)
    s = re.sub(r"\s+\.", ".", s)
    return s.strip()


def strip_boilerplate(text: str) -> str:
    s = text or ""
    s = TAKEAWAY_RE.sub("", s)
    s = CLOSE_CALL_RE.sub("", s)
    s = GENERIC_LEAD_RE.sub("", s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip()


def split_header(text: str) -> tuple[str, str, str]:
    raw = (text or "").strip()
    lines = raw.splitlines()
    if not lines:
        return "", "", ""
    m = HEADER_RE.match(lines[0].replace("**", "").strip())
    if not m:
        return "", "", raw
    letter, verdict = m.group(1).upper(), m.group(2).capitalize()
    body = "\n".join(lines[1:]).strip()
    return letter, verdict, body


def _tex_formula(formula: str) -> str:
    tex = formula.strip().rstrip(".")
    tex = re.split(r"\s+[—–-]\s+NOT\b|\s+for independent\b", tex, maxsplit=1)[0]
    tex = tex.replace("%", "\\%")
    tex = tex.replace(" / ", "/").replace(" × ", "\\times ")
    return tex.strip(" ,;")


def _sentences(text: str) -> list[str]:
    return [
        academic_prose(s)
        for s in re.split(r"(?<=[.!?])\s+(?=[A-Z(])", text or "")
        if academic_prose(s)
    ]


def _student_error(is_true: bool, statement: str, body: str, result_line: str) -> str:
    if is_true:
        return "The statement is true."
    blob = f"{statement} {body} {result_line}".lower()
    sents = _sentences(body)
    trap = next(
        (
            s
            for s in sents
            if re.search(
                r"student|misread|trap|backwards|reverse|even though|despite|"
                r"tempting|incorrect|would |common |complement|strict|"
                r"not the reverse|volume|share of|double|claims |smaller",
                s,
                flags=re.I,
            )
        ),
        "",
    )
    trap = academic_prose(trap)
    if trap and not re.match(r"^(The statement is|P\(|E\(|Var\(|σ)", trap):
        return f"The statement is false. {trap}"
    if "not greater" in result_line.lower() or "not less" in result_line.lower():
        return (
            "The statement is false. A student who treated a nearby value as "
            "clearing a strict inequality, or who reversed the comparison, "
            "would mark the statement true."
        )
    if "given" in statement.lower() and "given" in blob:
        return (
            "The statement is false. A student who reversed the conditioning "
            "(using the category total rather than the event total in the "
            "denominator) would obtain a different percentage and mark the "
            "statement true."
        )
    return (
        "The statement is false. A student who applied the complementary count "
        "or swapped the inequality direction would mark the statement true."
    )


NUM = r"\$?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?"
NAMED_FRAC_RE = re.compile(
    r"(P\([^)]+\))\s*=\s*"
    r"(\d[\d,]*(?:\.\d+)?\s*/\s*\d[\d,]*(?:\.\d+)?)"
    r"(?:\s*=\s*([\d.]+%))?"
    r"(?:\s*≈\s*([\d.]+%))?"
)
COMPLEMENT_RE = re.compile(
    r"=\s*1\s*-\s*([\d.]+%)(?:\s*≈\s*([\d.]+%))?"
)
RATE_CMP_RE = re.compile(
    r"([\d.]+%)\s+is\s+(not\s+)?(?:greater|less) than\s+([\d.]+%)",
    flags=re.I,
)


def format_math_explanation(
    letter: str,
    is_true: bool,
    body: str,
    statement: str = "",
) -> str:
    """Build the 4-part math writeup from a PDF/parser body."""
    verdict = "True" if is_true else "False"
    text = strip_boilerplate(body or "")
    text = re.split(r"\bTip:|# Combinatorial Probability", text, maxsplit=1)[0]
    text = re.sub(r"\s+", " ", text).strip()
    formula = ""
    fm = re.search(r"\bFormula:\s*(.+)$", text)
    if fm:
        formula = fm.group(1).strip().rstrip(".")
        text = text[: fm.start()].strip()
    displays = DISPLAY_RE.findall(text)
    if displays and not formula:
        formula = displays[0].strip()
        text = DISPLAY_RE.sub("", text).strip()
    formula = formula.replace("$", "").strip()
    text = academic_prose(text)

    named = list(NAMED_FRAC_RE.finditer(text))
    sub_lines: list[str] = []
    sub = ""
    approx = ""
    for m in named:
        line = f"{m.group(1)} = {m.group(2).replace(' ', '')}"
        if m.group(3):
            line += f" = {m.group(3)}"
        sub_lines.append(line)
        if m.group(4):
            approx = m.group(4)

    if not sub_lines:
        eq = EQ_VALUE_RE.search(text)
        if eq:
            sub = eq.group("sub").replace(" ", "").strip(" ,")
            approx = (eq.group("approx") or "").strip().strip(" ,")
        comp = COMPLEMENT_RE.search(text)
        if comp:
            sub = f"1 - {comp.group(1)}"
            if comp.group(2):
                approx = comp.group(2)
        if not approx:
            m_approx = re.search(r"≈\s*(\$?-?[\d,]+(?:\.\d+)?%?)", text)
            if m_approx:
                approx = m_approx.group(1)
        if not sub:
            sole = SOLE_VALUE_RE.search(text)
            if sole:
                sub = sole.group("val").strip(" ,")

    if not approx:
        m_approx = re.search(r"≈\s*(\$?-?[\d,]+(?:\.\d+)?%?)", text)
        if m_approx:
            approx = m_approx.group(1).strip(" ,")
    if formula and re.search(r"≠|\\neq|\bNOT\b", formula):
        sub = ""

    cmp_m = CMP_RE.search(text)
    rate_cmp = RATE_CMP_RE.search(text)
    result_line = ""
    if approx and cmp_m:
        result_line = f"= {approx}, which is {cmp_m.group(0)[len('which is '):]}"
    elif cmp_m:
        result_line = academic_prose(cmp_m.group(0)[0].upper() + cmp_m.group(0)[1:])
    elif rate_cmp:
        result_line = academic_prose(rate_cmp.group(0)[0].upper() + rate_cmp.group(0)[1:])
    elif approx:
        result_line = f"= {approx}."
    elif sub and "/" not in sub and "1 -" not in sub:
        result_line = f"= {sub}."

    leftover = text
    leftover = NAMED_FRAC_RE.sub("", leftover)
    leftover = CMP_RE.sub("", leftover)
    leftover = EQ_VALUE_RE.sub("", leftover, count=1)
    leftover = academic_prose(leftover)
    leftover_sents = [
        s
        for s in _sentences(leftover)
        if not re.match(r"^(P\(|E\(|Var\(|σ|μ|Compare )", s)
        and "which is" not in s.lower()
        and not RATE_CMP_RE.search(s)
    ]

    lines = [f"Statement {letter} — {verdict}", ""]
    if formula:
        lines.extend([f"$$\n{_tex_formula(formula)}\n$$", ""])
    for line in sub_lines:
        lines.extend([f"$$\n{line}\n$$", ""])
    if not sub_lines and sub:
        lines.extend([f"$$\n= {sub}\n$$", ""])
    if result_line:
        lines.append(result_line.rstrip(".") + ".")
        lines.append("")
    close = _student_error(is_true, statement, " ".join(leftover_sents), result_line)
    if leftover_sents and is_true:
        extra = leftover_sents[0]
        if extra not in close and len(extra) > 40:
            close = extra.rstrip(".") + ". " + close
    lines.append(close)
    return "\n".join(lines).strip() + "\n"


def normalize_existing_math(text: str, is_true: bool, statement: str = "") -> str:
    """Reorder an already-stored math explanation into the 4-part layout."""
    letter, verdict, body = split_header(text)
    if not letter:
        letter = "A"
        verdict = "True" if is_true else "False"
        body = strip_boilerplate(text)
    body = strip_boilerplate(body)
    displays = [d.strip() for d in DISPLAY_RE.findall(body)]
    prose = academic_prose(DISPLAY_RE.sub(" ", body))
    formula = displays[0] if displays else ""
    rest_formula = displays[1] if len(displays) > 1 else ""
    synthetic = prose
    if rest_formula and "Formula:" not in synthetic:
        synthetic = synthetic + " Formula: " + re.sub(r"\s+", " ", formula)
        if rest_formula:
            synthetic += " " + rest_formula
    elif formula and "Formula:" not in synthetic:
        synthetic = synthetic + " Formula: " + re.sub(r"\s+", " ", formula)
    return format_math_explanation(letter, is_true, synthetic, statement)


ECON_METHOD = {
    "numeric": "Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.",
    "accounting": "Classify the item on the correct statement (balance sheet versus income/cash flow) and check the direction of the change.",
    "definition": "Compare the sentence, word for word, with the textbook definition of the named concept.",
    "absolute": "Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.",
    "comparison": "Check that the comparison runs in the stated direction and attaches the feature to the correct member of the pair.",
    "application": "Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.",
    "general": "Check the sentence against the core concept named in the stem, including every scope word.",
}


def format_econ_explanation(
    is_true: bool,
    statement: str,
    application: str,
    kind: str = "general",
    trap_word: str | None = None,
) -> str:
    prefix = "TRUE" if is_true else "FALSE"
    method = ECON_METHOD.get(kind, ECON_METHOD["general"])
    app = academic_prose(application).rstrip(".") + "."
    if app and app[0].islower():
        app = app[0].upper() + app[1:]
    if is_true:
        close = "The statement is true."
    elif trap_word:
        close = (
            f"The statement is false. A student who overlooked the word "
            f'"{trap_word}" would treat a restricted claim as an unrestricted '
            "rule and mark the statement true."
        )
    else:
        close = (
            "The statement is false. A student who recognised the topic word "
            "and stopped reading would miss the qualifier that breaks the claim."
        )
    return f"{prefix} — {method}\n\n{app}\n\n{close}"


GENERIC_ECON_STARTS = (
    "the underlying topic",
    "this item belongs",
    "this statement draws on",
    "the relevant theory",
    "the question tests",
    "start from the textbook",
    "the topic is",
    "although the subject matter",
    "the section on",
    "this tests discrimination",
    "here you must apply",
    "the scenario is a worked",
    "this is an accounting reasoning",
    "the task tests",
    "the reasoning chain",
    "every part of the claim",
    "no qualifying word",
    "because the decisive detail",
    "once the overclaim",
    "the statement sounds plausible",
    "watch the absolute",
    "a common mistake",
    "near-miss definitions",
    "students often remember",
    "if two ideas are related",
)


def extract_econ_application(text: str, statement: str) -> str:
    body = text or ""
    body = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", body.strip())
    patterns = [
        r"Applied to this claim,\s*(.+?)(?:\. That is why|\. The trap is|\Z)",
        r"The statement overreaches because\s*(.+?)(?:\. The trap is|\Z)",
        r"In this setting,\s*(.+?)(?:\. The wording|\Z)",
        r"Applied carefully,\s*(.+?)(?:\. Nothing in|\Z)",
        r"Apply the case evidence:\s*(.+?)(?:\. Check whether|\Z)",
        r"From the figures or classification rule involved,\s*(.+?)(?:\. Accounting|\Z)",
    ]
    for pat in patterns:
        m = re.search(pat, body, flags=re.S | re.I)
        if m:
            core = academic_prose(m.group(1))
            core = re.split(r"\.\s+(?:That is why|The trap is|The wording|Nothing in)", core)[0]
            if len(core) > 20 and not core.lower().startswith(GENERIC_ECON_STARTS):
                return core.rstrip(".") + "."
    paras = [academic_prose(p) for p in re.split(r"\n\s*\n", body) if p.strip()]
    restated = statement.rstrip(".").lower()
    kept = []
    for p in paras:
        low = p.lower()
        if restated and restated in low:
            continue
        if low.startswith(GENERIC_ECON_STARTS):
            continue
        if "so the answer is" in low or "mark the statement" in low:
            continue
        kept.append(p)
    if kept:
        return max(kept, key=len)
    return ""


ABSOLUTE_WORD_RE = re.compile(
    r"\b(never|always|all|none|every|cannot|impossible|entirely|exclusively|"
    r"automatically|instantly|without exception)\b",
    re.I,
)


def classify_econ(statement: str, body: str, subsection: str) -> str:
    blob = f"{statement} {body}"
    if subsection.startswith("6."):
        if re.search(r"\d|%|ratio|turnover|gearing", blob, re.I):
            return "numeric"
        return "accounting"
    if ABSOLUTE_WORD_RE.search(statement):
        return "absolute"
    if re.search(r"\b(is defined|means that|refers to)\b", statement, re.I):
        return "definition"
    if re.search(r"\b(compared|versus|unlike|whereas|rather than)\b", statement, re.I):
        return "comparison"
    if re.search(r"\b(if|when|because|scenario)\b", statement, re.I):
        return "application"
    return "general"


def light_cleanup(text: str) -> str:
    """Strip leaked boilerplate without destroying an already-correct layout."""
    if not text:
        return text
    if (
        not TAKEAWAY_RE.search(text)
        and not CLOSE_CALL_RE.search(text)
        and not GENERIC_LEAD_RE.search(text)
        and not CASUAL_PHRASE_RE.search(text)
        and not HEDGE_CLAUSE_RE.search(text)
    ):
        return text
    lines = text.strip().splitlines()
    header = lines[0] if lines else ""
    body = "\n".join(lines[1:]).strip() if lines else text
    body = academic_prose(strip_boilerplate(body))
    if HEADER_RE.match(header.replace("**", "").strip()):
        return f"{header}\n\n{body}".strip() + "\n"
    return strip_boilerplate(academic_prose(text))


def _uniquify_explanations(out: list[str], originals: list[str], stmts: list[str]) -> list[str]:
    """If two letters collapsed to the same writeup, pin them with a unique claim fragment."""
    from collections import Counter

    counts = Counter(out)
    if all(n == 1 for n in counts.values()):
        return out
    used = set(out)
    result = []
    for i, text in enumerate(out):
        if counts[text] < 2:
            result.append(text)
            continue
        stmt = stmts[i] if i < len(stmts) else ""
        pin = academic_prose(stmt).rstrip(".")
        if pin:
            pin = pin[0].upper() + pin[1:] if pin else pin
            candidate = text.rstrip() + f"\n\nThis letter tests the claim: {pin}."
        else:
            candidate = text.rstrip() + f"\n\n(Statement {LETTERS[i]}.)"
        while candidate in used:
            candidate += "."
        used.add(candidate)
        result.append(candidate)
    return result


def rewrite_task_explanations(task: dict) -> dict:
    """Rewrite tactical_explanations only. Never touch stem, statements, or keys."""
    expls = list(task.get("tactical_explanations") or [])
    keys = list(task.get("answer_key") or [])
    stmts = list(task.get("statements") or [])
    subsection = str(task.get("subsection") or "")
    case_id = str(task.get("case_id") or task.get("id") or "")
    out = []
    for i, expl in enumerate(expls):
        is_true = bool(keys[i]) if i < len(keys) else True
        stmt = stmts[i] if i < len(stmts) else ""
        if subsection.startswith(("2.", "3.", "4.", "5.", "6.")) and not str(subsection).startswith("12."):
            kind = classify_econ(stmt, expl, subsection)
            hits = ABSOLUTE_WORD_RE.findall(stmt) if not is_true else []
            trap_word = hits[0].lower() if hits else None
            app = extract_econ_application(expl, stmt)
            if not app:
                app = academic_prose(re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", expl.strip()))
            out.append(format_econ_explanation(is_true, stmt, app, kind, trap_word))
        elif subsection.startswith("12.") or case_id.startswith("MATH 12"):
            out.append(normalize_existing_math(expl, is_true, stmt))
        else:
            out.append(light_cleanup(expl) if expl.strip() else expl)
    out = _uniquify_explanations(out, expls, stmts)
    task["tactical_explanations"] = out
    overview = task.get("solution_overview") or ""
    if GENERIC_LEAD_RE.search(overview) or overview.startswith("Organize counts into a table"):
        task["solution_overview"] = ""
    return task


def iter_case_files() -> list[Path]:
    return sorted(
        p
        for p in DATA.glob("*.json")
        if "cases" in p.name and p.name != "book-embeddings.json"
    )


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="Rewrite JSON banks in place.")
    args = parser.parse_args()
    for path in iter_case_files():
        data = json.loads(path.read_text())
        tasks = data if isinstance(data, list) else data.get("tasks") or []
        changed = 0
        for task in tasks:
            before = list(task.get("tactical_explanations") or [])
            rewrite_task_explanations(task)
            if task.get("tactical_explanations") != before:
                changed += 1
        print(f"{path.name:40} tasks={len(tasks):4} rewritten={changed:4}")
        if args.write:
            if path.name == "math-cases-ch12-probability.json":
                print("  skip write (rebuild via build-ch12-probability.py)")
                continue
            if isinstance(data, list):
                path.write_text(json.dumps(tasks, ensure_ascii=False, indent=2) + "\n")
            else:
                data["tasks"] = tasks
                path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    main()
