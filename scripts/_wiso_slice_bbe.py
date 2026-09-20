"""Dump mapped BBE cases into small JSON files for WISO adaptation agents."""
from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "textbook" / "output" / "wiso_bbe_src"
OUT.mkdir(parents=True, exist_ok=True)

FILES = {
    2: ROOT / "src" / "data" / "economics-cases-ch2-subtopics.json",
    3: ROOT / "src" / "data" / "economics-cases-ch3-subtopics.json",
    4: ROOT / "src" / "data" / "economics-cases-ch4-subtopics.json",
    5: ROOT / "src" / "data" / "economics-cases-ch5-subtopics.json",
    6: ROOT / "src" / "data" / "economics-cases-ch6-subtopics.json",
}

KEEP = {
    "subsection",
    "case_id",
    "title",
    "context",
    "statements",
    "answer_key",
    "difficulty_level",
}


def main() -> None:
    for ch, path in FILES.items():
        rows = json.loads(path.read_text(encoding="utf-8"))
        buckets: dict[str, list] = defaultdict(list)
        for row in rows:
            slim = {k: row.get(k) for k in KEEP}
            buckets[row["subsection"]].append(slim)
        for sub, items in sorted(buckets.items()):
            out = OUT / f"{sub}.json"
            out.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"{sub}: {len(items)} -> {out.name}")


if __name__ == "__main__":
    main()
