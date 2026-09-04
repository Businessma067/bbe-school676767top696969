#!/usr/bin/env python3
"""Apply binomial-depth tutoring explanations to the Ch 11.5 exam bank."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from _ch115_deep_bodies import DEEP_BODIES, DEEP_OVERVIEWS  # noqa: E402

PATH = ROOT / "src" / "data" / "math-ch11-exam.json"


def wrap(letter: str, answer: bool, body: str) -> str:
    verd = "True" if answer else "False"
    return (
        f"**{letter}.** → {verd}\n\n"
        f"{body.strip()}\n\n"
        f"So the statement is {verd}."
    )


def main() -> None:
    data = json.loads(PATH.read_text())
    lens: list[int] = []
    for t in data["tasks"]:
        cid = t["case_id"]
        if cid not in DEEP_BODIES:
            raise SystemExit(f"Missing DEEP_BODIES for {cid}")
        bodies = DEEP_BODIES[cid]
        if len(bodies) != 5:
            raise SystemExit(f"{cid} has {len(bodies)} bodies")
        t["tactical_explanations"] = [
            wrap(letter, ans, body)
            for letter, ans, body in zip("ABCDE", t["answer_key"], bodies)
        ]
        for e in t["tactical_explanations"]:
            lens.append(len(e))
            if "So the statement is" not in e:
                raise SystemExit(f"Missing closer in {cid}")
            # no claim-echo scaffolds
            for bad in ("Assumption:", "How to solve", "Applied:", "Conclusion:"):
                if bad in e:
                    raise SystemExit(f"Scaffold {bad!r} in {cid}")
        if cid in DEEP_OVERVIEWS:
            t["solution_overview"] = DEEP_OVERVIEWS[cid].strip()

    data["explanation_style"] = (
        "Natural tutoring (binomial depth): shared solution_overview once; each claim as "
        "**A.** → True/False — teach the idea, derive on the given numbers/figure, conclude "
        "with 'So the statement is True/False.' No statement echo; all divisions as \\dfrac."
    )

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(
        f"Wrote {PATH.name}: {len(data['tasks'])} tasks, "
        f"expl avg={sum(lens)/len(lens):.0f} min={min(lens)} max={max(lens)}"
    )


if __name__ == "__main__":
    main()
