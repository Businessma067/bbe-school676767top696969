#!/usr/bin/env python3
"""Exam-style inequality tasks for subsection 6.5.

Pure MATH 13.18-style stems: independent True/False claims with domain
conditions. Varied inequality types (linear, quadratic, rational, absolute
value, roots, exponential/log, parameters, two-variable).
"""
from __future__ import annotations

from ch6_exam_style_pure import PURE_SPECS

LETTERS = "ABCDE"


def _expl(letter: str, answer: bool, body: str) -> str:
    """Bodies are authored with clean $...$ math; do not run wrap_math."""
    verdict = "True" if answer else "False"
    body = body.rstrip()
    if not body.endswith("."):
        body += "."
    lower = body.lower()
    if (
        "so the statement is" not in lower
        and "the statement is true" not in lower
        and "the statement is false" not in lower
    ):
        body = f"{body} So the statement is {verdict}."
    return f"**{letter}.** → {verdict}\n\n{body}"


def task(
    n: int,
    title: str,
    overview: str,
    items: list[tuple[str, bool, str]],
    difficulty: str,
    context: str | None = None,
) -> dict:
    statements = [it[0] for it in items]
    answers = [it[1] for it in items]
    expls = [
        _expl(LETTERS[i], answers[i], items[i][2])
        for i in range(len(items))
    ]
    ctx = context or (
        "Let $x$ be a real number. Which of the following statements is/are correct?"
    )
    return {
        "id": f"math-6-{n}",
        "case_id": f"MATH 6.{n:02d}",
        "title": title,
        "subsection": "6.5",
        "context": ctx,
        "statements": list(statements),
        "answer_key": answers,
        "tactical_explanations": expls,
        "difficulty_level": difficulty,
        "sort_order": n,
        "solution_overview": overview,
        "placeholder": False,
    }


SPECS: list[dict] = list(PURE_SPECS)


def exam_style_tasks(start_n: int = 89) -> list[dict]:
    out = []
    for i, s in enumerate(SPECS):
        out.append(
            task(
                start_n + i,
                s["title"],
                s["overview"],
                s["items"],
                s["diff"],
                context=s.get("context"),
            )
        )
    return out


def main() -> None:
    import json
    from pathlib import Path

    root = Path(__file__).resolve().parents[2]
    path = root / "src" / "data" / "math-ch6-inequalities.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    kept = [t for t in data["tasks"] if t.get("subsection") != "6.5"]
    start = max((t["sort_order"] for t in kept), default=0) + 1
    extra = exam_style_tasks(start)
    data["tasks"] = kept + extra
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"merged {len(extra)} exam-style tasks starting at math-6-{start}")


if __name__ == "__main__":
    main()
