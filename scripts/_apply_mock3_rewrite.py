# -*- coding: utf-8 -*-
"""Apply per-letter mock3-style tactical_explanations to demo JSON.

Loads scripts/_new_te/{math,economics}.json (list of 5-string lists per task)
and writes into src/data/mock-exam-demo-sourced.json without touching
statements, answer_key, case_ids, or context.
"""
from __future__ import annotations

import json
import statistics as st
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src/data/mock-exam-demo-sourced.json"
TE_DIR = ROOT / "scripts/_new_te"


def letter_lens(task):
    return [len(x) for x in task["tactical_explanations"]]


def subject_stats(tasks):
    spreads, all_lens = [], []
    for t in tasks:
        lens = letter_lens(t)
        all_lens.extend(lens)
        spreads.append(max(lens) - min(lens))
    return {
        "avg_len": sum(all_lens) / len(all_lens),
        "med_len": st.median(all_lens),
        "avg_spread": sum(spreads) / len(spreads),
        "med_spread": st.median(spreads),
        "spreads": spreads,
        "per_task": [
            {"case_id": t["case_id"], "lens": letter_lens(t), "spread": max(letter_lens(t)) - min(letter_lens(t))}
            for t in tasks
        ],
    }


def main():
    data = json.loads(SRC.read_text(encoding="utf-8"))
    before = {s: subject_stats(data[s]) for s in ("math", "economics")}

    for subj in ("math", "economics"):
        new = json.loads((TE_DIR / f"{subj}.json").read_text(encoding="utf-8"))
        assert len(new) == len(data[subj]), f"{subj}: expected {len(data[subj])} tasks, got {len(new)}"
        for ti, letters in enumerate(new):
            assert len(letters) == 5, f"{subj}[{ti}] need 5 letters"
            ak = data[subj][ti]["answer_key"]
            for i, L in enumerate("ABCDE"):
                want = "True" if ak[i] else "False"
                header = f"**{L}.** → {want}"
                assert letters[i].startswith(header), (
                    f"{subj}[{ti}] {L}: bad header\n got {letters[i][:40]!r}\n want {header!r}"
                )
                assert letters[i].count("$$") % 2 == 0, f"{subj}[{ti}] {L}: unbalanced $$"
            data[subj][ti]["tactical_explanations"] = letters

    SRC.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    after = {s: subject_stats(data[s]) for s in ("math", "economics")}

    report = {"before": before, "after": after}
    (ROOT / "scripts/_rewrite_spread_report.json").write_text(
        json.dumps(report, indent=2), encoding="utf-8"
    )
    for s in ("math", "economics"):
        b, a = before[s], after[s]
        print(f"=== {s} ===")
        print(f"  before avg_len={b['avg_len']:.0f} med_len={b['med_len']:.0f} avg_spread={b['avg_spread']:.0f} med_spread={b['med_spread']:.0f}")
        print(f"  after  avg_len={a['avg_len']:.0f} med_len={a['med_len']:.0f} avg_spread={a['avg_spread']:.0f} med_spread={a['med_spread']:.0f}")
        for row in a["per_task"]:
            print(f"  {row['case_id']}: {row['lens']} spread={row['spread']}")


if __name__ == "__main__":
    main()
