"""Shared helpers for Chapter 2 elementary-algebra exam tasks."""

from __future__ import annotations

import re

from explain import assign_profiles, generate_body

LETTERS = "ABCDE"


def statements_are_independent(context: str) -> bool:
    """True when there is no shared stem condition — only a domain prompt."""
    ctx = (context or "").strip()
    if re.match(r"^Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?\s*$", ctx, re.I):
        return True
    if ctx.startswith("Let $") and "Which of the following" in ctx:
        return True
    return False


def task(
    *,
    title: str,
    subsection: str,
    difficulty: str,
    context: str,
    items: list[tuple[str, bool] | tuple[str, bool, str]],
    overview: str,
) -> dict:
    """Build one Chapter 2 task.

    ``overview`` is kept only when the stem has a shared condition that every
    claim uses. For independent statements (generic ``Let $x$…`` / ``Evaluate
    each statement`` stems), ``solution_overview`` is left empty so all
    reasoning sits in the per-statement explanations.
    """
    if len(items) != 5:
        raise ValueError(f"{title}: expected 5 items, got {len(items)}")
    statements: list[str] = []
    keys: list[bool] = []
    authored: list[str | None] = []
    for item in items:
        if len(item) == 2:
            stmt, truth = item
            body: str | None = None
        elif len(item) == 3:
            stmt, truth, body = item
        else:
            raise ValueError(f"{title}: item must be (statement, truth[, body])")
        statements.append(str(stmt).strip())
        keys.append(bool(truth))
        authored.append(None if body is None else str(body).strip())

    profiles = assign_profiles(statements, subsection)
    explanations: list[str] = []
    for i in range(5):
        if authored[i]:
            explanations.append(authored[i])
        else:
            explanations.append(
                generate_body(
                    statements[i], keys[i], subsection, i, profile=profiles[i]
                )
            )

    ctx = context.strip()
    overview_out = "" if statements_are_independent(ctx) else overview.strip()

    return {
        "title": title.strip(),
        "subsection": subsection,
        "difficulty_level": difficulty,
        "context": ctx,
        "statements": statements,
        "answer_key": keys,
        "tactical_explanations": explanations,
        "solution_overview": overview_out,
        "placeholder": False,
    }
