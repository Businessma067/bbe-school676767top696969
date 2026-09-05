#!/usr/bin/env python3
"""Audit / gate-check Ch7+Ch9 tactical explanations after binomial-depth deepen.

Does not rewrite content; validates headers, closes, $ balance, banned tokens,
and prints length medians for the four target banks.
"""
from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

FILES = [
    Path("src/data/math-ch7-linear-quadratic.json"),
    Path("src/data/math-ch7-mixed-exam.json"),
    Path("src/data/math-ch9-polynomials.json"),
    Path("src/data/math-ch9-mixed-exam.json"),
]


def main() -> None:
    for path in FILES:
        data = json.loads(path.read_text())["tasks"]
        lens = []
        for t in data:
            for i, e in enumerate(t["tactical_explanations"]):
                letter = "ABCDE"[i]
                verd = "True" if t["answer_key"][i] else "False"
                if not e.startswith(f"**{letter}.** → {verd}"):
                    raise SystemExit(f"{t['case_id']} {letter}: bad header")
                if e.count("so the statement is") != 1:
                    raise SystemExit(f"{t['case_id']} {letter}: close count")
                if not e.rstrip().endswith(f"so the statement is {verd}."):
                    raise SystemExit(f"{t['case_id']} {letter}: close mismatch")
                if e.count("$") % 2:
                    raise SystemExit(f"{t['case_id']} {letter}: unbalanced $")
                if r"\deg" in e or r"\circ" in e:
                    raise SystemExit(f"{t['case_id']} {letter}: deg/circ")
                if "as in the overview" in e.lower() or "from the overview" in e.lower():
                    raise SystemExit(f"{t['case_id']} {letter}: overview dependence")
                if " qrt{" in e or "(qrt{" in e:
                    raise SystemExit(f"{t['case_id']} {letter}: corrupted sqrt")
                for s in t["statements"]:
                    if s.startswith("From the figure") or s.startswith("From the table"):
                        raise SystemExit(f"{t['case_id']}: From-the-figure prefix")
                lens.append(len(e))
        print(
            f"{path.name}: n={len(lens)} median={statistics.median(lens):.0f} "
            f"min={min(lens)} max={max(lens)} "
            f"lt250={sum(1 for n in lens if n < 250)} "
            f"lt350={sum(1 for n in lens if n < 350)}"
        )
    print("OK")


if __name__ == "__main__":
    main()
