#!/usr/bin/env python3
"""Rewrite Ch7 mixed-exam tactical explanations into MATH 7.79 tutoring voice.

Overviews stay short structural prep (already ~100 chars). Letters become
self-contained teaching narratives with one display per step and a natural
close “…, so the statement is True/False.”

Stems, statements, answer keys, and figures are left unchanged.
"""
from __future__ import annotations

import json
import re
import statistics
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).resolve().parent))

from _ch7_mixed_779_a import pack as pack_a  # noqa: E402
from _ch7_mixed_779_b import pack as pack_b  # noqa: E402
from _ch7_mixed_779_lib import BANNED, join, normalize_displays  # noqa: E402
from _ch7_mixed_779_splice import EXTRAS  # noqa: E402

PATH = ROOT / "src/data/math-ch7-mixed-exam.json"
LETTERS = "ABCDE"


def validate_text(tid: str, letter: str, text: str, truth: bool) -> list[str]:
    issues: list[str] = []
    verdict = "True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verdict}\n\n"):
        issues.append(f"{tid} {letter}: bad header {text[:40]!r}")
    if not text.rstrip().endswith(f", so the statement is {verdict}."):
        issues.append(f"{tid} {letter}: bad close {text[-80:]!r}")
    if text.count("so the statement is") != 1:
        issues.append(f"{tid} {letter}: close count")
    low = text.lower()
    for bad in BANNED:
        if bad.startswith(r"\\"):
            if bad in text:
                issues.append(f"{tid} {letter}: banned {bad!r}")
        elif bad.lower() in low:
            issues.append(f"{tid} {letter}: banned {bad!r}")
    if "as in the overview" in low or "from the overview" in low:
        issues.append(f"{tid} {letter}: overview cross-ref")
    if re.search(r"from the (figure|table)\s*:", text, re.I):
        issues.append(f"{tid} {letter}: From-the-figure")
    for inner in re.findall(r"\$\$([\s\S]*?)\$\$", text):
        if "\n" in inner:
            issues.append(f"{tid} {letter}: multiline display")
    n = len(text)
    if n < 400 or n > 650:
        issues.append(f"{tid} {letter}: length {n} outside 400–650")
    return issues


def splice(text: str, extra: tuple[str, ...]) -> str:
    added = join(*extra)
    if not added:
        return text
    head, close = text.rsplit("\n\n", 1)
    if "so the statement is" not in close:
        raise ValueError("splice: last paragraph is not the close")
    return normalize_displays(head + "\n\n" + added + "\n\n" + close)


def main() -> None:
    letters = {}
    letters.update(pack_a())
    letters.update(pack_b())

    data = json.loads(PATH.read_text())
    tasks = data["tasks"]
    issues: list[str] = []
    expl_lens: list[int] = []
    ov_lens: list[int] = []
    patched = 0

    for task in tasks:
        tid = task["id"]
        if tid not in letters:
            issues.append(f"{tid}: missing letter pack")
            continue
        pack = letters[tid]
        if len(pack) != 5:
            issues.append(f"{tid}: pack has {len(pack)} letters")
            continue
        keys = task["answer_key"]
        new_expls = []
        for i, letter in enumerate(LETTERS):
            text = pack[i]
            extra = EXTRAS.get((tid, letter))
            if extra:
                text = splice(text, extra)
            truth = bool(keys[i])
            issues.extend(validate_text(tid, letter, text, truth))
            new_expls.append(text)
            expl_lens.append(len(text))
        # leave overviews untouched
        task["tactical_explanations"] = new_expls
        ov_lens.append(len(task.get("solution_overview") or ""))
        patched += 1

        # statements must not gain From-the-figure
        for s in task["statements"]:
            if re.search(r"^From the (figure|table):", s, re.I):
                issues.append(f"{tid}: statement From-the-figure")

    if issues:
        length_issues = [i for i in issues if ": length " in i]
        other = [i for i in issues if ": length " not in i]
        if other:
            raise SystemExit("validation:\n" + "\n".join(other[:80]))
        print("length warnings:")
        for i in length_issues:
            print(" ", i)

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    ov_med = statistics.median(ov_lens)
    let_med = statistics.median(expl_lens)
    print(f"patched {patched} tasks")
    print(
        f"overviews n={len(ov_lens)} min={min(ov_lens)} median={ov_med:.0f} "
        f"max={max(ov_lens)}"
    )
    print(
        f"letters n={len(expl_lens)} min={min(expl_lens)} "
        f"p10={sorted(expl_lens)[len(expl_lens)//10]} "
        f"median={let_med:.0f} "
        f"p90={sorted(expl_lens)[9*len(expl_lens)//10]} "
        f"max={max(expl_lens)}"
    )
    if ov_med > 200:
        raise SystemExit(f"overview median {ov_med} > 200")
    if let_med < 420:
        raise SystemExit(f"letter median {let_med} < 420")
    shorts = [n for n in expl_lens if n < 400]
    longs = [n for n in expl_lens if n > 650]
    print(f"below 400: {len(shorts)}; above 650: {len(longs)}")


if __name__ == "__main__":
    main()
