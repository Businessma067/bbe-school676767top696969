"""Audit Chapter 1 shared solutions and per-statement explanations."""

from __future__ import annotations

import json
import re
from pathlib import Path


TASKS = Path(__file__).with_name("_ch1_tasks_dump.json")
GENERIC_PHRASES = (
    "The shared objects are",
    "Every claim is decided by",
    "Fix the truth values of",
    "Read the quantified statement",
    "Work from the given sets",
)


def sentence_key(text: str) -> str:
    text = re.sub(r"\$+.*?\$+", " MATH ", text)
    text = re.sub(r"\*\*", "", text)
    text = re.sub(r"[^a-z0-9\s]", " ", text.lower())
    return re.sub(r"\s+", " ", text).strip()


def main() -> None:
    tasks = json.loads(TASKS.read_text(encoding="utf-8"))
    issues: list[str] = []

    for task in tasks:
        task_id = task["id"]
        overview = (task.get("solution_overview") or "").strip()
        statements = task.get("statements") or []
        explanations = task.get("tactical_explanations") or []
        answer_key = task.get("answer_key") or []

        if len(statements) != len(explanations) or len(statements) != len(answer_key):
            issues.append(
                f"{task_id}: length mismatch "
                f"statements={len(statements)} explanations={len(explanations)} "
                f"answers={len(answer_key)}"
            )

        if len(overview) < 180:
            issues.append(f"{task_id}: shared solution too short ({len(overview)} chars)")
        for phrase in GENERIC_PHRASES:
            if phrase.lower() in overview.lower():
                issues.append(f"{task_id}: generic overview phrase: {phrase!r}")

        for i, explanation in enumerate(explanations):
            letter = chr(ord("A") + i)
            verdict = "True" if answer_key[i] else "False"
            expected = f"**{letter}.** → {verdict}"
            if not explanation.startswith(expected):
                issues.append(
                    f"{task_id}.{letter}: expected header {expected!r}, "
                    f"got {explanation[:30]!r}"
                )
            if len(explanation) < 90:
                issues.append(
                    f"{task_id}.{letter}: explanation too short "
                    f"({len(explanation)} chars)"
                )

            sentences = [
                sentence_key(s)
                for s in re.split(r"(?<=[.!?])\s+", explanation)
                if len(sentence_key(s)) >= 35
            ]
            seen: set[str] = set()
            for sentence in sentences:
                if sentence in seen:
                    issues.append(
                        f"{task_id}.{letter}: duplicate sentence: {sentence[:90]}"
                    )
                seen.add(sentence)

    report = Path(__file__).with_name("_audit_ch1_shared_solutions.txt")
    report.write_text(
        "\n".join([f"tasks: {len(tasks)}", f"issues: {len(issues)}", *issues]),
        encoding="utf-8",
    )
    print(f"tasks={len(tasks)} issues={len(issues)} report={report}")


if __name__ == "__main__":
    main()
