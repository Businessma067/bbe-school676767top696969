#!/usr/bin/env python3
"""Build a reviewable vocabulary source lexicon from the English Texts bank."""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXTS = ROOT / "src" / "data" / "english" / "texts.json"
OUT = ROOT / "textbook" / "output" / "vocab_lexicon.json"

QUOTED = re.compile(r'"([^"\n]{2,80})"')
WORD = re.compile(r"[A-Za-z][A-Za-z'-]{2,}")
STOP = {
    "according", "statement", "passage", "paragraph", "correct", "incorrect",
    "true", "false", "means", "used", "suggests", "implies", "described",
}


def normalise(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def main() -> None:
    bank = json.loads(TEXTS.read_text(encoding="utf-8"))
    subsection_by_id = {s["id"]: s for s in bank["subsections"]}
    entries: dict[str, dict] = {}
    source_counts: defaultdict[str, int] = defaultdict(int)

    for task in bank["tasks"]:
        if task.get("kind") != "vocabulary":
            continue
        subsection = subsection_by_id[task["subsection"]]
        passage = subsection["passage"]
        highlights = task.get("highlights") or [""] * 5
        explanations = task.get("tactical_explanations") or [""] * 5

        for index, statement in enumerate(task["statements"]):
            candidates = [normalise(x) for x in QUOTED.findall(statement)]
            highlight = normalise(highlights[index]) if index < len(highlights) else ""
            if highlight:
                candidates.insert(0, highlight)
            if not candidates:
                candidates = [
                    word for word in WORD.findall(statement)
                    if word.lower() not in STOP and len(word) >= 6
                ][:2]

            seen_here: set[str] = set()
            for term in candidates:
                key = term.casefold()
                if key in seen_here or len(term) > 80:
                    continue
                seen_here.add(key)
                if key not in entries:
                    entries[key] = {
                        "term": term,
                        "sources": [],
                    }
                entries[key]["sources"].append({
                    "subsection": subsection["id"],
                    "passage_title": subsection["title"],
                    "task_id": task["id"],
                    "statement_index": index + 1,
                    "statement": statement,
                    "answer": bool(task["answer_key"][index]),
                    "explanation": explanations[index],
                    "passage_anchor": highlight if highlight and highlight in passage else "",
                })
                source_counts[subsection["id"]] += 1

    payload = {
        "source": str(TEXTS.relative_to(ROOT)).replace("\\", "/"),
        "description": (
            "Lexical candidates extracted from Texts tasks whose kind is "
            "'vocabulary'. Sources preserve the passage topic and original "
            "teaching explanation for grounded Vocabulary authoring."
        ),
        "entry_count": len(entries),
        "source_counts": dict(sorted(source_counts.items())),
        "entries": sorted(entries.values(), key=lambda item: item["term"].casefold()),
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {payload['entry_count']} entries to {OUT}")


if __name__ == "__main__":
    main()
