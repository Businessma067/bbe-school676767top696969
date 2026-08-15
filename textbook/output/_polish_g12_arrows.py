# -*- coding: utf-8 -*-
import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.12.json")
data = json.loads(PATH.read_text(encoding="utf-8-sig"))

REPL = [
    (
        '"Despite that…" → although, or despite the fact that. Do not force despite to swallow a bare that-clause.',
        '"Despite that…" → "Although…" or "despite the fact that…" Do not force despite to swallow a bare that-clause.',
    ),
    (
        '"despite her wrist ached" → although, or "despite her aching wrist." Do not feed a tensed clause directly to despite.',
        '"despite her wrist ached" → "although her wrist ached" or "despite her aching wrist." Do not feed a tensed clause directly to despite.',
    ),
    (
        '"Despite most guests preferred…" → although, or "despite most guests preferring…" Keep the idea; change either the linker or the verb shape.',
        '"Despite most guests preferred…" → "Although most guests preferred…" or "despite most guests preferring…" Keep the idea; change either the linker or the verb shape.',
    ),
    (
        '"Despite membership rose…" → although, or "despite the rise in membership" / "despite membership rising." Do not feed a tensed clause to despite.',
        '"Despite membership rose…" → "Although membership rose…" or "despite the rise in membership" / "despite membership rising." Do not feed a tensed clause to despite.',
    ),
]

n = 0
missing = []
for old, new in REPL:
    found = False
    for task in data["tasks"]:
        for i, expl in enumerate(task["tactical_explanations"]):
            if old in expl:
                task["tactical_explanations"][i] = expl.replace(old, new, 1)
                n += 1
                found = True
    if not found:
        missing.append(old[:80])

PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("polished", n)
print("missing", missing)
