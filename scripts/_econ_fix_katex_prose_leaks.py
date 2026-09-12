#!/usr/bin/env python3
"""Repair KaTeX that leaked into economics explanation prose.

Safe line-scan approach (does not smash adjacent $$ … $$ blocks):
1) Wrap bare percent compares: 61.7\\% > 29.8\\%
2) Wrap orphan TeX lines: \\text{…}, \\frac{…}, …
3) Replace remaining prose \\% with %
4) Replace remaining prose \\le/\\ge/\\approx with unicode only in prose
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data"

BARE_PCT = re.compile(
    r"^([\d{,}.]+\\%\s*(?:>|<|\\le|\\ge|\\leq|\\geq|\\approx|≤|≥|≈)\s*[\d{,}.]+\\%)\s*$"
)
BARE_NUM_COMPARE = re.compile(
    r"^([\d{,}.]+\\%\s*(?:>|<|\\le|\\ge|\\leq|\\geq|\\approx)\s*[\d{,}.]+(?:\\%)?)\s*$"
)
ORPHAN = re.compile(
    r"^(\\(?:text|frac|dfrac|tfrac|mathrm|mathbf|approx|le|ge|leq|geq|quad|times|sum|prod|begin).+)$"
)


def repair_explanation(ex: str) -> str:
    if not isinstance(ex, str):
        return ex

    lines = ex.split("\n")
    out: list[str] = []
    in_display = False

    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Toggle / pass through display math fences.
        if stripped == "$$":
            in_display = not in_display
            out.append(line)
            i += 1
            continue

        if in_display:
            out.append(line)
            i += 1
            continue

        # Inline $...$ lines are rare as whole-line; still treat as prose unless orphan TeX.
        if BARE_PCT.match(stripped) or BARE_NUM_COMPARE.match(stripped):
            out.append("$$")
            out.append(stripped)
            out.append("$$")
            i += 1
            continue

        if ORPHAN.match(stripped) and "$" not in stripped:
            out.append("$$")
            out.append(stripped)
            out.append("$$")
            i += 1
            continue

        # Prose cleanup for TeX escapes that should never appear outside math.
        if "\\" in line:
            cleaned = line.replace("\\%", "%")
            # Only rewrite relation commands when the line is not a sentence
            if re.search(r"\\(?:le|ge|leq|geq|approx)\\b", cleaned):
                if len(stripped) <= 60 and not re.search(
                    r"[A-Za-z]{5,}", re.sub(r"\\[a-zA-Z]+|[\d.%\\]+", " ", stripped)
                ):
                    out.append("$$")
                    out.append(stripped)
                    out.append("$$")
                    i += 1
                    continue
                cleaned = (
                    cleaned.replace("\\leq", "≤")
                    .replace("\\geq", "≥")
                    .replace("\\le", "≤")
                    .replace("\\ge", "≥")
                    .replace("\\approx", "≈")
                )
            out.append(cleaned)
        else:
            out.append(line)
        i += 1

    if in_display:
        # Unclosed $$ — close it.
        out.append("$$")

    text = "\n".join(out)
    text = re.sub(r"\n{3,}", "\n\n", text)
    if ex.endswith("\n") and not text.endswith("\n"):
        text += "\n"
    return text


def audit(path: Path) -> dict:
    data = json.loads(path.read_text())
    bare_pct = orphan = prose_cmd = 0
    samples: list[tuple] = []
    for case in data:
        for ex in case.get("tactical_explanations") or []:
            if not isinstance(ex, str):
                continue
            in_disp = False
            for line in ex.split("\n"):
                s = line.strip()
                if s == "$$":
                    in_disp = not in_disp
                    continue
                if in_disp:
                    continue
                if BARE_PCT.match(s) or BARE_NUM_COMPARE.match(s):
                    bare_pct += 1
                if ORPHAN.match(s):
                    orphan += 1
                    if len(samples) < 6:
                        samples.append((case.get("case_id"), s[:100]))
                prose_cmd += len(
                    re.findall(r"\\(?:%|le|ge|leq|geq|approx|frac|text|quad|times)", line)
                )
    return {
        "bare_pct": bare_pct,
        "orphan": orphan,
        "prose_cmd": prose_cmd,
        "samples": samples,
    }


def main() -> None:
    for ch in range(2, 7):
        path = DATA / f"economics-cases-ch{ch}-subtopics.json"
        if not path.exists():
            continue
        before = audit(path)
        data = json.loads(path.read_text())
        changed = 0
        for case in data:
            te = case.get("tactical_explanations")
            if not isinstance(te, list):
                continue
            new = []
            for ex in te:
                if isinstance(ex, str):
                    nxt = repair_explanation(ex)
                    if nxt != ex:
                        changed += 1
                    new.append(nxt)
                else:
                    new.append(ex)
            case["tactical_explanations"] = new
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        after = audit(path)
        print(f"{path.name}: changed={changed}")
        print(f"  before={before}")
        print(f"  after={after}")


if __name__ == "__main__":
    main()
