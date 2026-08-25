"""Shared helpers for Chapter 2 elementary-algebra exam tasks."""

from __future__ import annotations

LETTERS = "ABCDE"


def expl(i: int, truth: bool, body: str) -> str:
    letter = LETTERS[i]
    verdict = "True" if truth else "False"
    body = body.strip()
    if not body.endswith("."):
        body += "."
    return (
        f"**{letter}.** → {verdict}\n\n"
        f"{body}\n\n"
        f"So the statement is {verdict}."
    )


def task(
    *,
    title: str,
    subsection: str,
    difficulty: str,
    context: str,
    items: list[tuple[str, bool, str]],
    overview: str,
) -> dict:
    if len(items) != 5:
        raise ValueError(f"{title}: expected 5 items, got {len(items)}")
    statements, keys, explanations = [], [], []
    for i, (stmt, truth, body) in enumerate(items):
        statements.append(stmt.strip())
        keys.append(bool(truth))
        explanations.append(expl(i, bool(truth), body))
    return {
        "title": title.strip(),
        "subsection": subsection,
        "difficulty_level": difficulty,
        "context": context.strip(),
        "statements": statements,
        "answer_key": keys,
        "tactical_explanations": explanations,
        "solution_overview": overview.strip(),
        "placeholder": False,
    }
