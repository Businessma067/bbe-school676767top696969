# -*- coding: utf-8 -*-
"""Replace true/false synonym verdicts in explanation closings only (safe)."""
from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

PARTS = Path(__file__).resolve().parents[2] / "src" / "data" / "english" / "grammar_parts"

# Reset parts from last commit so we don't stack failed passes.
subprocess.check_call(
    ["git", "checkout", "HEAD", "--"] + [str(PARTS / f"g.{i}.json") for i in range(1, 21)]
)

REPLACERS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"(?i)\bdoesn['\u2019]t hold\b"), "is false"),
    (re.compile(r"(?i)\bdoes not hold\b"), "is false"),
    (re.compile(r"(?i)\bfalls short\b"), "is false"),
    # verdict "fails" not followed by "to/the/a/..." object test
    (re.compile(r"(?i)\bfails\b(?=\s*[;:—–.,\"']|$)"), "is false"),
    (re.compile(r"(?i)\bfails\b(?=\s+[\"“])"), "is false"),
    (re.compile(r"(?i)\bso the line fails\b"), "so the line is false"),
    (re.compile(r"(?i)\bso this fails\b"), "so this is false"),
    (re.compile(r"(?i)\bso the wording fails\b"), "so the wording is false"),
    (re.compile(r"(?i)\bso the sentence fails\b"), "so the sentence is false"),
    (re.compile(r"(?i)\bfalls\b(?=\s*[:—–-])"), "is false"),
    (re.compile(r"(?i)\bthe wording stands\b"), "the wording is true"),
    (re.compile(r"(?i)\bthe sentence stands\b"), "the sentence is true"),
    (re.compile(r"(?i)\bthe line stands\b"), "the line is true"),
    (re.compile(r"(?i)\bthis line stands\b"), "this line is true"),
    (re.compile(r"(?i)\bthis stands\b"), "this is true"),
    (re.compile(r"(?i)\bit stands\b"), "it is true"),
    (re.compile(r"(?i)\bthe attachment stands\b"), "the attachment is true"),
    (re.compile(r"(?i)\bthe pattern stands\b"), "the pattern is true"),
    (re.compile(r"(?i)\bthe idiom stands\b"), "the idiom is true"),
    (re.compile(r"(?i)\bthe wording holds\b"), "the wording is true"),
    (re.compile(r"(?i)\bthe sentence holds\b"), "the sentence is true"),
    (re.compile(r"(?i)\bthis line holds\b"), "this line is true"),
    (re.compile(r"(?i)\bthe line holds\b"), "the line is true"),
    (re.compile(r"(?i)\bthis holds\b"), "this is true"),
    (re.compile(r"(?i)\bit holds\b"), "it is true"),
    (re.compile(r"(?i)\bif only holds\b"), "if only is true"),
    (re.compile(r"(?i)\bare sound\b"), "are true"),
    (re.compile(r"(?i)\bis sound\b"), "is true"),
    (re.compile(r"(?i)\bthe sound version\b"), "the true version"),
    (re.compile(r"(?i)\ba sound version\b"), "a true version"),
    (re.compile(r"(?i)\bis fine\b"), "is true"),
    (re.compile(r"(?i)\bis valid\b"), "is true"),
    (re.compile(r"(?i)\bare valid\b"), "are true"),
    (re.compile(r"(?i)\bis legal\b"), "is true"),
    (re.compile(r"(?i)\bare legal\b"), "are true"),
    (re.compile(r"(?i)\bis correct\b"), "is true"),
    (re.compile(r"(?i)\bare correct\b"), "are true"),
    # residual end-of-sentence verdicts
    (re.compile(r"(?i)\bstands\b(?=\s*[.!?]|$)"), "is true"),
    (re.compile(r"(?i)\bholds\b(?=\s*[.!?]|$)"), "is true"),
]


def fix_close(close: str) -> str:
    out = close
    for pat, rep in REPLACERS:
        out = pat.sub(rep, out)
    out = re.sub(r"(?i)\bis is true\b", "is true", out)
    out = re.sub(r"(?i)\bis is false\b", "is false", out)
    out = re.sub(r" {2,}", " ", out)
    return out


def main() -> None:
    changed = 0
    for i in range(1, 21):
        path = PARTS / f"g.{i}.json"
        data = json.loads(path.read_text(encoding="utf-8-sig"))
        for task in data["tasks"]:
            for idx, expl in enumerate(task["tactical_explanations"]):
                paras = [p for p in re.split(r"\n\n+", expl.strip()) if p.strip()]
                if not paras:
                    continue
                new_last = fix_close(paras[-1])
                if new_last == paras[-1]:
                    continue
                changed += 1
                paras[-1] = new_last
                body = "\n\n".join(paras)
                if expl.endswith("\n"):
                    body += "\n"
                task["tactical_explanations"][idx] = body
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    ban = re.compile(
        r"(?i)\b(stands|holds|is sound|are sound|doesn['\u2019]t hold|does not hold|"
        r"falls short|the sound version)\b"
    )
    awkward: list[str] = []
    leftover: list[str] = []
    fails_left: list[str] = []
    for i in range(1, 21):
        data = json.loads((PARTS / f"g.{i}.json").read_text(encoding="utf-8-sig"))
        for task in data["tasks"]:
            for expl in task["tactical_explanations"]:
                last = re.split(r"\n\n+", expl.strip())[-1]
                if re.search(r"(?i)\bthe is (true|false)\b|\bis is (true|false)\b", last):
                    awkward.append(last[:160])
                if ban.search(last):
                    leftover.append(last[:160])
                if re.search(r"(?i)\bfails\b", last):
                    fails_left.append(last[:160])

    print("changed", changed)
    print("awkward", len(awkward))
    for s in awkward[:10]:
        print(" AWK", s)
    print("leftover_ban", len(leftover))
    for s in leftover[:15]:
        print(" LEFT", s)
    print("fails_left", len(fails_left))
    for s in fails_left[:10]:
        print(" FAIL", s)


if __name__ == "__main__":
    main()
