#!/usr/bin/env python3
"""Apply MATH 8.108–8.117 deep tactical explanations from JSON bodies."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/math-ch8-exam.json"
BODIES = ROOT / "scripts/ch8_exam_108_117_bodies.json"


def wrap(letter: str, answer: bool, body: str) -> str:
    verd = "True" if answer else "False"
    return (
        f"**{letter}.** → {verd}\n\n"
        f"{body.strip()}\n\n"
        f"So the statement is {verd}."
    )


def main() -> None:
    payload = json.loads(BODIES.read_text(encoding="utf-8"))
    deep = payload["deep"]
    overviews = payload.get("overviews") or {}

    data = json.loads(PATH.read_text(encoding="utf-8"))
    lens: list[int] = []
    n = 0
    for t in data["tasks"]:
        cid = t["case_id"]
        if cid not in deep:
            continue
        bodies = deep[cid]
        if len(bodies) != 5:
            raise SystemExit(f"{cid} has {len(bodies)} bodies")
        t["tactical_explanations"] = [
            wrap(L, bool(ans), body)
            for L, ans, body in zip("ABCDE", t["answer_key"], bodies)
        ]
        if cid in overviews:
            t["solution_overview"] = overviews[cid]
        for e in t["tactical_explanations"]:
            if e.count("$$") % 2:
                raise SystemExit(f"odd $$ in {cid}")
            lens.append(len(e))
        n += 1

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    med = sorted(lens)[len(lens) // 2]
    print(
        f"Updated {n} tasks; letter avg={sum(lens)/len(lens):.0f} "
        f"median={med} min={min(lens)} max={max(lens)} under250={sum(1 for x in lens if x<250)}"
    )


if __name__ == "__main__":
    main()
