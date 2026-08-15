"""Rebalance difficulty_level within each subsection to a clear easy→hard curve."""
from __future__ import annotations

import json
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")

# Target curve for 30 tasks (indices 0..29)
CURVE = (
    ["1/5"] * 6
    + ["2/5"] * 8
    + ["3/5"] * 8
    + ["4/5"] * 5
    + ["5/5"] * 3
)


def main() -> None:
    assert len(CURVE) == 30
    for sid in ("1.1", "1.2", "1.3", "1.4"):
        path = BANKS / f"{sid}_POLISHED.json"
        bank = json.loads(path.read_text(encoding="utf-8"))
        bank = sorted(bank, key=lambda t: t["sort_order"])
        for i, t in enumerate(bank):
            t["difficulty_level"] = CURVE[i]
            t["sort_order"] = i + 1
        path.write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding="utf-8")
        print(sid, "rebalanced")


if __name__ == "__main__":
    main()
