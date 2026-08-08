# -*- coding: utf-8 -*-
"""Strip Ch5 explanation gimmicks → plain tutorial prose like the reference screenshots."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OV = ROOT / "textbook" / "output" / "ch5_expl_overrides.json"

# Drop these labeled "фишки" blocks entirely (label + rest of paragraph).
DROP_BLOCKS = re.compile(
    r"(?:^|\n)\s*\*\*"
    r"(?:Watch|Why it fails|Related model relation|Tip|Trap|Coach)\.?\*\*"
    r"[^\n]*(?:\n(?!\s*\*\*|\s*$)[^\n]*)*",
    flags=re.I,
)

# Keep the prose, drop only the loud label.
RELABEL = [
    (re.compile(r"\*\*Direct check\.\*\*\s*", re.I), ""),
    (re.compile(r"\*\*Where it breaks\.\*\*\s*", re.I), ""),
    (re.compile(r"\*\*Setup\.\*\*\s*", re.I), ""),
    (re.compile(r"\*\*Computation\.\*\*\s*", re.I), ""),
]

# Boilerplate we invent that the screenshots never use.
BOILER = [
    re.compile(
        r"^This claim holds under the solved system\.\s*"
        r"The recovered values are:\s*\*\*[^*]+\*\*\.\s*",
        re.I | re.M,
    ),
    re.compile(
        r"^This claim does not hold once the system is solved correctly\.\s*"
        r"The recovered values are:\s*\*\*[^*]+\*\*\.\s*",
        re.I | re.M,
    ),
    re.compile(
        r"\nCompare that recomputed figure with the wording of the statement"
        r"[^\n]*(?:\n(?!\s*\*\*|\s*$)[^\n]*)*",
        re.I,
    ),
]

VERDICT_TAIL = re.compile(
    r"—\s*\*\*(TRUE|FALSE)\*\*",
    re.I,
)


def clean_paragraphs(text: str) -> str:
    text = text.replace("\r\n", "\n").strip()
    text = DROP_BLOCKS.sub("", text)
    for rx, rep in RELABEL:
        text = rx.sub(rep, text)
    for rx in BOILER:
        text = rx.sub("", text)
    # Header: **B) …** — **FALSE**  →  **B) …** (false)
    text = VERDICT_TAIL.sub(lambda m: f" ({m.group(1).lower()})", text)
    # collapse blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)
    # tidy spaces
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n[ \t]+", "\n", text)
    return text.strip()


def clean_overview(ov: str) -> str:
    ov = clean_paragraphs(ov)
    # Drop our old section chip if still present
    ov = re.sub(
        r"^\*\*What's going on\.\*\*\s*",
        "",
        ov,
        count=1,
        flags=re.I,
    )
    lines = ov.split("\n")
    kept: list[str] = []
    for ln in lines:
        if re.match(r"^\*\*(Watch|Why it fails|Tip|Trap)\.", ln, re.I):
            continue
        kept.append(ln)
    return "\n".join(kept).strip()


def main() -> None:
    data = json.loads(OV.read_text(encoding="utf-8"))
    for key, item in data.items():
        item["solution_overview"] = clean_overview(item.get("solution_overview") or "")
        item["tactical_explanations"] = [
            clean_paragraphs(x or "") for x in (item.get("tactical_explanations") or [])
        ]
    OV.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    # sample
    print("task 1 A-E tip remnants?", "Watch" in json.dumps(data["1"]))
    print("--- overview head ---")
    print("\n".join(data["1"]["solution_overview"].splitlines()[:25]))
    print("--- A ---")
    print(data["1"]["tactical_explanations"][0][:500])


if __name__ == "__main__":
    main()
