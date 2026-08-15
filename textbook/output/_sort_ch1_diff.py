"""Sort each polished bank by difficulty then renumber sort_order 1..30."""
from __future__ import annotations

import json
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")
RANK = {"1/5": 1, "2/5": 2, "3/5": 3, "4/5": 4, "5/5": 5}


def main() -> None:
    for sid in ("1.1", "1.2", "1.3", "1.4"):
        path = BANKS / f"{sid}_POLISHED.json"
        bank = json.loads(path.read_text(encoding="utf-8"))
        bank.sort(key=lambda t: (RANK.get(t.get("difficulty_level", "3/5"), 3), t.get("sort_order", 0)))
        for i, t in enumerate(bank, start=1):
            t["sort_order"] = i
        path.write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding="utf-8")
        print(sid, [t["difficulty_level"] for t in bank])


if __name__ == "__main__":
    main()
