# -*- coding: utf-8 -*-
"""Bold every true/false token in Grammar tactical_explanations; then audit true-counts."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PARTS = ROOT / "src" / "data" / "english" / "grammar_parts"


def bold_tf(text: str) -> str:
    return re.sub(r"(?<!\*)\b(true|false)\b(?!\*)", r"**\1**", text, flags=re.I)


def main() -> None:
    changed_expls = 0
    bold_count = 0
    for i in range(1, 21):
        path = PARTS / f"g.{i}.json"
        data = json.loads(path.read_text(encoding="utf-8-sig"))
        for task in data["tasks"]:
            for idx, expl in enumerate(task["tactical_explanations"]):
                new = bold_tf(expl)
                if new != expl:
                    changed_expls += 1
                    task["tactical_explanations"][idx] = new
                bold_count += len(re.findall(r"\*\*(?:true|false)\*\*", new, flags=re.I))
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    naked = 0
    for i in range(1, 21):
        data = json.loads((PARTS / f"g.{i}.json").read_text(encoding="utf-8-sig"))
        for task in data["tasks"]:
            for expl in task["tactical_explanations"]:
                naked += len(re.findall(r"(?i)(?<!\*)\b(true|false)\b(?!\*)", expl))

    # Audit true-count distribution across all grammar tasks
    dist = Counter()
    total_tasks = 0
    for i in range(1, 21):
        data = json.loads((PARTS / f"g.{i}.json").read_text(encoding="utf-8-sig"))
        for task in data["tasks"]:
            total_tasks += 1
            key = task["answer_key"]
            # answer_key may be list of bool or "TRUE"/"FALSE"
            trues = 0
            for v in key:
                if isinstance(v, bool):
                    trues += int(v)
                else:
                    trues += int(str(v).strip().upper() in {"TRUE", "T", "1", "YES"})
            dist[trues] += 1

    print(f"changed_expls={changed_expls}")
    print(f"bold_tokens={bold_count}")
    print(f"naked_remaining={naked}")
    print(f"total_tasks={total_tasks}")
    for n in range(0, 6):
        print(f"trues={n}: {dist.get(n, 0)}")
    print(f"sum_check={sum(dist.values())}")

    # samples
    data = json.loads((PARTS / "g.1.json").read_text(encoding="utf-8-sig"))
    for expl in data["tasks"][0]["tactical_explanations"][:2]:
        last = re.split(r"\n\n+", expl.strip())[-1]
        print("SAMPLE:", last[:200])


if __name__ == "__main__":
    main()
