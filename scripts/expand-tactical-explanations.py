#!/usr/bin/env python3
"""
Rewrite economics tactical_explanations into teacher-style tutor prose
for Full Course practice and Custom Mock Builder (chapters 2–6).

No TRUE/FALSE em-dash leads. No stamped method boilerplate.
Keeps the real application core and expands it into calm worked reasoning.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

from parse_bbe import (
    ABSOLUTE_WORD_RE,
    classify_econ,
    extract_econ_application,
    format_econ_explanation,
    scrub_econ_dashes,
)

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src" / "data"

METHOD_LEAD_RE = re.compile(
    r"^(?:TRUE|FALSE)\s*[—–-]\s*"
    r"(?:Read the quantifier|Check that the comparison|Map the scenario|"
    r"Check the sentence against|Apply the statement's figure|"
    r"Classify the item on the correct statement|"
    r"Compare the sentence, word for word).*$",
    re.I | re.M,
)
STUDENT_WHO_RE = re.compile(
    r"\s*A student who (?:overlooked|matched)[\s\S]*?(?:mark the statement true\.?)\s*",
    re.I,
)
MARK_CMD_RE = re.compile(
    r"\b(?:mark the statement (?:true|false)|so mark the statement|"
    r"the only consistent answer is|so the answer is true|"
    r"the statement stands|so the statement holds)\b[^.]*\.?",
    re.I,
)


def parse_expl(text: str) -> tuple[bool | None, str]:
    m = re.match(r"^(TRUE|FALSE)\s*[—–-]\s*(.+)$", text.strip(), re.S)
    if not m:
        return None, text.strip()
    return m.group(1) == "TRUE", m.group(2).strip()


def strip_ai_stamps(text: str) -> str:
    body = text or ""
    body = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", body.strip())
    body = METHOD_LEAD_RE.sub("", body)
    body = STUDENT_WHO_RE.sub(" ", body)
    body = MARK_CMD_RE.sub("", body)
    # Drop leftover method-only first paragraph if extract missed it.
    paras = [p.strip() for p in re.split(r"\n\s*\n", body) if p.strip()]
    cleaned: list[str] = []
    for p in paras:
        low = p.lower()
        if low.startswith(
            (
                "read the quantifier",
                "check that the comparison",
                "map the scenario",
                "check the sentence against",
                "apply the statement's figure",
                "classify the item on the correct",
                "compare the sentence, word for word",
                "this statement draws on",
                "the underlying topic",
                "this item belongs",
                "the relevant theory",
                "the question tests",
                "start from the textbook",
                "evaluated against the textbook",
                "on the fuhrmann definition",
                "this statement is correct",
                "this statement is false",
                "the claim is correct",
                "the claim is false",
                "the reasoning chain is complete",
                "every part of the claim aligns",
                "because the decisive detail is wrong",
                "once the overclaim",
                "the statement sounds plausible",
                "watch the absolute wording",
                "a common mistake is to recognise",
                "near-miss definitions are deliberately",
                "students often remember that two concepts",
                "if two ideas are related, the statement",
            )
        ):
            continue
        if re.fullmatch(r"the statement is (?:true|false)\.?", low):
            continue
        cleaned.append(p)
    return "\n\n".join(cleaned).strip()


def expand_one(
    statement: str,
    is_true: bool,
    short_expl: str,
    subsection: str,
    used_mistakes: set[str] | None = None,
) -> str:
    from parse_bbe import sanitize_econ_application

    raw = strip_ai_stamps(short_expl)
    application = sanitize_econ_application(
        extract_econ_application(raw or short_expl, statement) or ""
    )
    if not application:
        application = sanitize_econ_application(raw)
    if not application:
        _, body = parse_expl(short_expl)
        application = sanitize_econ_application(strip_ai_stamps(body) or body)
    if not application:
        # Last resort: first non-stamp sentence from the old explanation.
        for sentence in re.split(r"(?<=[.!?])\s+", raw or short_expl):
            cleaned = sanitize_econ_application(sentence)
            if cleaned:
                application = cleaned
                break

    kind = classify_econ(statement, application, subsection)
    hits = ABSOLUTE_WORD_RE.findall(statement) if not is_true else []
    trap_word = hits[0].lower() if hits else None
    return scrub_econ_dashes(
        format_econ_explanation(
            is_true, statement, application, kind, trap_word, used_mistakes
        )
    )


def process_file(path: Path, dry_run: bool = False) -> dict[str, int]:
    cases: list[dict[str, Any]] = json.loads(path.read_text(encoding="utf-8"))
    stats = {"cases": len(cases), "expanded": 0, "skipped": 0}

    for case in cases:
        subsection = str(case.get("subsection", ""))
        statements: list[str] = case.get("statements") or []
        keys: list[bool] = case.get("answer_key") or []
        expls: list[str] = case.get("tactical_explanations") or []

        new_expl: list[str] = []
        used: set[str] = set()
        for i, stmt in enumerate(statements):
            old = expls[i] if i < len(expls) else ""
            key = bool(keys[i]) if i < len(keys) else False
            new_expl.append(expand_one(stmt, key, old, subsection, used))
            stats["expanded"] += 1

        from parse_bbe import _uniquify_explanations

        case["tactical_explanations"] = _uniquify_explanations(
            new_expl, expls, statements
        )

    if not dry_run:
        path.write_text(
            json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
    return stats


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--chapters", default="2,3,4,5,6")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    chapters = [c.strip() for c in args.chapters.split(",") if c.strip()]

    total = {"cases": 0, "expanded": 0, "skipped": 0}
    for ch in chapters:
        path = DATA_DIR / f"economics-cases-ch{ch}-subtopics.json"
        if not path.exists():
            print(f"skip missing {path}")
            continue
        stats = process_file(path, dry_run=args.dry_run)
        print(f"ch{ch}: {stats}")
        for k in total:
            total[k] += stats[k]

    print("TOTAL:", total)


if __name__ == "__main__":
    main()
