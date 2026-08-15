#!/usr/bin/env python3
"""Merge Vocabulary INPUT drafts + polished explanation patches into vocabulary.json."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK = ROOT / "src" / "data" / "english" / "vocabulary.json"
PATCH_DIR = ROOT / "textbook" / "output" / "vocab_patches"

SUBSECTIONS = [
    {"id": "v.1", "title": "Confusable Pairs"},
    {"id": "v.2", "title": "Usage in Context"},
    {"id": "v.3", "title": "Business Collocations"},
    {"id": "v.4", "title": "Academic & Formal Vocabulary"},
    {"id": "v.5", "title": "Near-Synonyms & Nuance"},
    {"id": "v.6", "title": "Word Formation & Affixes"},
]


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    tasks: list[dict] = []
    all_statements: list[str] = []
    empty_hl = 0
    bad_hl = 0
    short_expl = 0

    for sub in SUBSECTIONS:
        sid = sub["id"]
        input_path = PATCH_DIR / f"{sid}_INPUT.json"
        polish_path = PATCH_DIR / f"{sid}.json"
        if not input_path.exists():
            raise SystemExit(f"Missing draft: {input_path}")

        draft = load_json(input_path)
        if draft.get("subsection_id") != sid:
            raise SystemExit(f"{input_path.name}: bad subsection_id")
        if len(draft["tasks"]) != 30:
            raise SystemExit(f"{input_path.name}: expected 30 tasks")

        polish_by_id: dict[str, dict] = {}
        if polish_path.exists():
            polished = load_json(polish_path)
            if polished.get("subsection_id") != sid:
                raise SystemExit(f"{polish_path.name}: bad subsection_id")
            polish_by_id = {t["id"]: t for t in polished["tasks"]}
            print(f"using polish {polish_path.name}: {len(polish_by_id)} tasks")
        else:
            print(f"WARN: no polish for {sid}; using INPUT explanations")

        for task in draft["tasks"]:
            tid = task["id"]
            statements = task["statements"]
            answers = task["answer_key"]
            highlights = task["highlights"]
            explanations = list(task["tactical_explanations"])
            overview = task.get("solution_overview") or ""

            polished_task = polish_by_id.get(tid)
            if polished_task:
                if polished_task.get("solution_overview"):
                    overview = polished_task["solution_overview"]
                if polished_task.get("tactical_explanations"):
                    explanations = list(polished_task["tactical_explanations"])

            if not (
                len(statements)
                == len(answers)
                == len(explanations)
                == len(highlights)
                == 5
            ):
                raise SystemExit(f"{tid}: arrays must all be length 5")
            if not overview.strip():
                raise SystemExit(f"{tid}: missing solution_overview")

            for index, (statement, highlight, explanation) in enumerate(
                zip(statements, highlights, explanations)
            ):
                if not highlight:
                    empty_hl += 1
                elif highlight not in statement:
                    bad_hl += 1
                    print(f"WARN {tid}: highlight not in statement: {highlight!r}")
                expected_header = f"**{'ABCDE'[index]}) {statement}"
                if not explanation.startswith(expected_header):
                    raise SystemExit(f"{tid}.{index + 1}: explanation header mismatch")
                if len(explanation) < 300:
                    short_expl += 1
                    print(f"WARN {tid}.{index}: short explanation ({len(explanation)})")
                all_statements.append(statement)

            tasks.append(
                {
                    "id": tid,
                    "case_id": task["case_id"],
                    "title": task["title"],
                    "context": task["context"],
                    "statements": statements,
                    "answer_key": answers,
                    "tactical_explanations": explanations,
                    "highlights": highlights,
                    "solution_overview": overview,
                    "difficulty_level": task["difficulty_level"],
                    "sort_order": task["sort_order"],
                    "subsection": sid,
                }
            )

    unique = len(set(all_statements))
    if unique != len(all_statements):
        raise SystemExit(
            f"Duplicate statements detected: {len(all_statements) - unique} collisions"
        )

    payload = {"subsections": SUBSECTIONS, "tasks": tasks}
    BANK.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(tasks)} tasks -> {BANK}")
    print(
        f"unique statements={unique}, empty highlights={empty_hl}, "
        f"bad highlights={bad_hl}, short explanations={short_expl}"
    )
    if bad_hl or short_expl:
        sys.exit(2)


if __name__ == "__main__":
    main()
