#!/usr/bin/env python3
"""
Expand short TRUE/FALSE tactical_explanations into detailed tutor-style explanations
for Custom Mock Builder / Full Course economics cases (chapters 2–6).
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from typing import Any

from parse_bbe import (
    ABSOLUTE_WORD_RE,
    classify_econ,
    extract_econ_application,
    format_econ_explanation,
)

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src" / "data"

SUBTOPIC_HINTS: dict[str, str] = {
    "2.1": "participation in the economy, scarcity, economising, and economic decision-making",
    "2.2": "scarcity of resources, opportunity cost, and trade-offs",
    "2.3": "economics as the study of decisions under scarcity at micro and macro level",
    "2.4": "exchange, circular flow, money, and division of labour",
    "2.5": "market, planned, and mixed economic systems",
    "2.6": "supply, demand, and market interaction",
    "2.7": "competition, market structures, and price-taking versus price-making",
    "3.1": "factors of production and how businesses combine them",
    "3.2": "primary, secondary, and tertiary business activity",
    "3.3": "profit-oriented businesses versus not-for-profit organisations",
    "3.4": "business size, SMEs, and large enterprises",
    "3.5": "local, national, and international business scope",
    "3.6": "the business environment and stakeholder interests",
    "4.1": "sole proprietorship / sole traders",
    "4.2": "partnerships and partner liability",
    "4.3": "corporations and limited liability",
    "4.4": "comparing forms of business ownership",
    "4.5": "sources of finance (equity, debt, internal and external)",
    "4.6": "choosing an appropriate source of finance",
    "5.1": "what counts as a marketing product (goods and services, B2B and B2C)",
    "5.2": "objectives of marketing",
    "5.3": "product orientation versus market orientation",
    "5.4": "responsibility, sustainability, and ethics in marketing",
    "5.5": "market research methods and interpretation",
    "5.6": "market segmentation and targeting",
    "5.7": "the marketing mix (4 Ps)",
    "6.1": "the balance sheet and classification of assets and liabilities",
    "6.2": "income statement, cash flow statement, and financial statement timing",
    "6.3": "reading balance sheets and income statements for structure and risk",
    "6.4": "financial versus management accounting",
    "6.5": "financial ratios and analysis of statements",
}

ABSOLUTE_TRAP = re.compile(
    r"\b(never|always|all|none|every|cannot|impossible|entirely|exclusively|"
    r"automatically|instantly|without exception)\b",
    re.I,
)
CONDITIONAL_ONLY = re.compile(r"\bonly\s+(when|if|after|once|where|because)\b", re.I)
NUMERIC_MARKERS = re.compile(
    r"(\d+[\d,.]*\s*%|€\s*\d|≈|ratio|turnover|gearing|days|Year\s*[12]|"
    r"current ratio|asset turnover|collection period|inventory|receivables|liabilit)",
    re.I,
)
DEFINITION_MARKERS = re.compile(
    r"\b(is defined|definition|means that|refers to|is the total|is a measure|"
    r"classified as|counts towards|attributed to)\b",
    re.I,
)
COMPARISON_MARKERS = re.compile(
    r"\b(compared with|compared to|versus|unlike|whereas|in contrast|longer than|"
    r"shorter than|more than|less than|rather than|instead of)\b",
    re.I,
)


def stable_index(*parts: str) -> int:
    h = hashlib.md5("|".join(parts).encode()).hexdigest()
    return int(h[:8], 16)


def parse_expl(text: str) -> tuple[bool | None, str]:
    m = re.match(r"^(TRUE|FALSE)\s*[—–-]\s*(.+)$", text.strip(), re.S)
    if not m:
        return None, text.strip()
    return m.group(1) == "TRUE", m.group(2).strip()


def already_expanded(text: str) -> bool:
    body = parse_expl(text)[1]
    return len(body) >= 380 or body.count(". ") >= 4


def classify(statement: str, body: str, subsection: str) -> str:
    blob = f"{statement} {body}"
    if subsection.startswith("6."):
        if NUMERIC_MARKERS.search(blob):
            return "numeric"
        return "accounting"
    if ABSOLUTE_TRAP.search(statement) and not CONDITIONAL_ONLY.search(statement):
        return "absolute"
    if DEFINITION_MARKERS.search(statement):
        return "definition"
    if COMPARISON_MARKERS.search(statement):
        return "comparison"
    if re.search(r"\b(if|when|because|scenario|consider|sold to|produces in)\b", statement, re.I):
        return "application"
    return "general"


def verdict_label(is_true: bool) -> str:
    return "correct" if is_true else "false"


def trap_note(statement: str, is_true: bool) -> str | None:
    if is_true or CONDITIONAL_ONLY.search(statement):
        return None
    hits = ABSOLUTE_TRAP.findall(statement)
    if not hits:
        return None
    word = hits[0].lower()
    return (
        f'Watch the absolute wording "{word}": exam statements often sound plausible until a single '
        f"scope word turns an otherwise familiar idea into an overclaim."
    )


def pick(variants: list[str], seed: int) -> str:
    return variants[seed % len(variants)]


def opening_line(is_true: bool, statement: str, seed: int) -> str:
    short = statement.rstrip(".")
    label = verdict_label(is_true)
    opts = [
        f"This statement is {label}.",
        f"The claim is {label}.",
        f"Evaluated against the textbook standard, this assertion is {label}.",
        f"On the Fuhrmann definition used in the entrance exam, the sentence is {label}.",
    ]
    return f"{pick(opts, seed)} {short}."


def concept_paragraph(subsection: str, kind: str, seed: int) -> str:
    hint = SUBTOPIC_HINTS.get(subsection, "introductory business and economics")
    if kind == "numeric":
        return pick(
            [
                f"This item belongs to the accounting block on {hint}. "
                "Ratio and classification questions ask you to connect a figure or comparison in the case "
                "with the correct statement category, not merely to recognise a number.",
                f"The underlying topic is {hint}. "
                "When figures appear, the exam checks whether you can interpret them in accounting terms—"
                "what increased, what ratio is implied, and whether the label (current, non-current, equity, and so on) fits.",
            ],
            seed,
        )
    if kind == "accounting":
        return pick(
            [
                f"This is an accounting reasoning item on {hint}. "
                "Decide whether the sentence correctly describes how a transaction, balance-sheet line, or period result affects assets, liabilities, or equity.",
                f"The task tests {hint}. "
                "Financial statements distinguish stocks (balance sheet at a date) from flows (income and cash over a period); many false statements swap those roles.",
            ],
            seed,
        )
    if kind == "definition":
        return pick(
            [
                f"The question tests a precise definition from the section on {hint}. "
                "Entrance-exam statements often copy a definition almost correctly; one altered phrase is enough to make the whole sentence wrong.",
                f"Start from the textbook definition in {hint}. "
                "A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.",
            ],
            seed + 1,
        )
    if kind == "absolute":
        return pick(
            [
                f"The topic is {hint}, but the decisive skill here is reading quantifiers. "
                "Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.",
                f"Although the subject matter is {hint}, this is really a logic check on overstatement. "
                "Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.",
            ],
            seed + 2,
        )
    if kind == "comparison":
        return pick(
            [
                f"The section on {hint} frequently contrasts two similar ideas side by side. "
                "A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.",
                f"This tests discrimination within {hint}: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.",
            ],
            seed + 3,
        )
    if kind == "application":
        return pick(
            [
                f"Here you must apply ideas from {hint} to a concrete situation rather than recite a definition from memory. "
                "Ownership, customer type, stakeholder group, or country of production usually decides the verdict.",
                f"The scenario is a worked example of {hint}. "
                "Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.",
            ],
            seed + 4,
        )
    return pick(
        [
            f"This statement draws on {hint}. "
            "Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.",
            f"The relevant theory comes from {hint}. "
            "Identify which definition or relationship the sentence is trying to test before deciding true or false.",
        ],
        seed + 5,
    )


def application_paragraph(statement: str, body: str, is_true: bool, kind: str, seed: int) -> str:
    core = body.rstrip(".")
    if kind in ("numeric", "accounting"):
        return pick(
            [
                f"Apply the case evidence: {core}. "
                "Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.",
                f"From the figures or classification rule involved, {core.lower() if core[0].isupper() else core}. "
                "Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.",
            ],
            seed,
        )
    if not is_true:
        return pick(
            [
                f"Applied to this claim, {core.lower() if core[0].isupper() else core}. "
                "That is why the sentence does not survive careful reading.",
                f"The statement overreaches because {core.lower() if core[0].isupper() else core}. "
                "The trap is to agree with the topic while missing the one detail that breaks the logic.",
            ],
            seed,
        )
    return pick(
        [
            f"In this setting, {core.lower() if core[0].isupper() else core}. "
            "The wording matches the textbook relationship without adding extra conditions.",
            f"Applied carefully, {core.lower() if core[0].isupper() else core}. "
            "Nothing in the sentence stretches the concept beyond its standard use.",
        ],
        seed,
    )


def misconception_paragraph(statement: str, is_true: bool, kind: str, seed: int) -> str | None:
    if is_true and kind != "absolute":
        return None
    trap = trap_note(statement, is_true)
    if trap:
        return trap
    if not is_true and kind == "definition":
        return pick(
            [
                "A common mistake is to recognise the topic word (GDP, NPO, SME, liability) and stop reading. "
                "The exam rewards checking every qualifier in the definition.",
                "Near-miss definitions are deliberately written to sound familiar. "
                "Compare the statement phrase by phrase with the book version instead of trusting the overall topic.",
            ],
            seed,
        )
    if not is_true and kind == "comparison":
        return pick(
            [
                "Students often remember that two concepts differ but swap the direction of the comparison. "
                "Verify which side of the pair is longer, larger, riskier, or more regulated.",
                "If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.",
            ],
            seed,
        )
    if is_true and kind == "absolute":
        return None
    return None


def conclusion_paragraph(is_true: bool, seed: int) -> str:
    if is_true:
        return pick(
            [
                "The reasoning chain is complete, so mark the statement true.",
                "Every part of the claim aligns with the standard concept, so the statement stands.",
                "No qualifying word breaks the definition or scenario, so the answer is true.",
            ],
            seed,
        )
    return pick(
        [
            "Because the decisive detail is wrong, mark the statement false.",
            "Once the overclaim or mislabel is exposed, the only consistent answer is false.",
            "The statement sounds plausible but fails on precision, so it is false.",
        ],
        seed,
    )


def expand_one(
    statement: str,
    is_true: bool,
    short_expl: str,
    subsection: str,
    case_id: str,
    index: int,
) -> str:
    _, body = parse_expl(short_expl)
    if not body:
        body = "See the statement and answer key."
    if already_expanded(short_expl):
        application = extract_econ_application(short_expl, statement)
    else:
        application = body
    kind = classify_econ(statement, application, subsection)
    hits = ABSOLUTE_WORD_RE.findall(statement) if not is_true else []
    trap_word = hits[0].lower() if hits else None
    return format_econ_explanation(is_true, statement, application, kind, trap_word)


def process_file(path: Path, dry_run: bool = False) -> dict[str, int]:
    cases: list[dict[str, Any]] = json.loads(path.read_text(encoding="utf-8"))
    stats = {"cases": len(cases), "expanded": 0, "skipped": 0}

    for case in cases:
        subsection = str(case.get("subsection", ""))
        case_id = str(case.get("case_id", ""))
        statements: list[str] = case.get("statements") or []
        keys: list[bool] = case.get("answer_key") or []
        expls: list[str] = case.get("tactical_explanations") or []

        new_expl: list[str] = []
        for i, stmt in enumerate(statements):
            old = expls[i] if i < len(expls) else ""
            key = bool(keys[i]) if i < len(keys) else False
            new_expl.append(expand_one(stmt, key, old, subsection, case_id, i))
            stats["expanded"] += 1

        case["tactical_explanations"] = new_expl

    if not dry_run:
        path.write_text(json.dumps(cases, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
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
