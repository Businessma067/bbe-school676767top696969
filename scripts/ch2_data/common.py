"""Shared helpers for Chapter 2 elementary-algebra exam tasks."""

from __future__ import annotations

from explain import assign_profiles, generate_body

LETTERS = "ABCDE"


def task(
    *,
    title: str,
    subsection: str,
    difficulty: str,
    context: str,
    items: list[tuple[str, bool] | tuple[str, bool, str]],
    overview: str,
) -> dict:
    if len(items) != 5:
        raise ValueError(f"{title}: expected 5 items, got {len(items)}")
    statements: list[str] = []
    keys: list[bool] = []
    for item in items:
        if len(item) == 2:
            stmt, truth = item
        elif len(item) == 3:
            stmt, truth, _legacy = item
        else:
            raise ValueError(f"{title}: item must be (statement, truth)")
        statements.append(str(stmt).strip())
        keys.append(bool(truth))

    profiles = assign_profiles(statements, subsection)
    explanations = [
        generate_body(statements[i], keys[i], subsection, i, profile=profiles[i])
        for i in range(5)
    ]

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
