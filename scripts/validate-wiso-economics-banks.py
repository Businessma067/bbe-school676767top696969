#!/usr/bin/env python3
"""Validate WiSo economics JSON banks against Wirtschaft verstehen 2026 TOC."""
from __future__ import annotations

import json
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BANK_DIR = ROOT / "src/data/wiso"

EXPECTED_SUBS = {
    1: {"1.1", "1.2", "1.3", "1.4", "1.5"},
    2: {"2.1", "2.2", "2.3", "2.4", "2.5", "2.6"},
    3: {"3.1", "3.2", "3.3", "3.4", "3.5"},
    4: {"4.1", "4.2", "4.3", "4.4"},
}

ENGLISH_MARKERS = re.compile(
    r"\b(the|and|is|are|company|companies|money|inflation|marketing|customer|customers)\b",
    re.I,
)


def validate_row(row: dict, path: str, idx: int) -> list[str]:
    errs: list[str] = []
    cid = row.get("case_id", f"idx{idx}")
    stmts = row.get("statements") or []
    keys = row.get("answer_key") or []
    expl = row.get("tactical_explanations") or []
    if len(stmts) != 5:
        errs.append(f"{path} {cid}: expected 5 statements, got {len(stmts)}")
    if len(keys) != 5:
        errs.append(f"{path} {cid}: expected 5 answer_key, got {len(keys)}")
    if len(expl) != 5:
        errs.append(f"{path} {cid}: expected 5 explanations, got {len(expl)}")
    if not all(isinstance(k, bool) for k in keys):
        errs.append(f"{path} {cid}: answer_key must be booleans")
    if not row.get("subsection"):
        errs.append(f"{path} {cid}: missing subsection")
    if not row.get("title"):
        errs.append(f"{path} {cid}: missing title")
    if row.get("needs_de_translation"):
        errs.append(f"{path} {cid}: still flagged needs_de_translation")
    # English leftovers (heuristic; skip if explicitly still pending)
    blob = " ".join(
        [str(row.get("title", "")), str(row.get("context", "")), *map(str, stmts[:2])]
    )
    if ENGLISH_MARKERS.search(blob) and not row.get("needs_de_translation"):
        # Only flag strong English sentence openers / calques — not DE marketing
        # loanwords (Segment, Brand) or compound expansions (Customer-Relationship-…).
        if re.search(
            r"\b(The company|Marketing mix|Customers? are|This statement|Evaluate the)\b",
            blob,
        ):
            errs.append(f"{path} {cid}: likely English leftovers")
    return errs


def main() -> int:
    errors: list[str] = []
    print("WiSo economics bank validation (Wirtschaft verstehen 2026)\n")
    for ch, expected in EXPECTED_SUBS.items():
        path = BANK_DIR / f"economics-cases-ch{ch}.json"
        if not path.exists():
            errors.append(f"missing {path}")
            continue
        rows = json.loads(path.read_text())
        counts = Counter(r.get("subsection") for r in rows)
        print(f"ch{ch}: {len(rows)} cases → {dict(sorted(counts.items()))}")
        for sub in sorted(expected):
            n = counts.get(sub, 0)
            if n == 0:
                errors.append(f"ch{ch}: subsection {sub} has 0 cases")
            elif n < 15 and ch != 2:
                print(f"  WARN {sub}: only {n} cases (prefer ≥15–20)")
        unexpected = set(counts) - expected
        if unexpected:
            errors.append(f"ch{ch}: unexpected subsections {sorted(unexpected)}")
        for i, row in enumerate(rows):
            errors.extend(validate_row(row, path.name, i))

    if errors:
        print(f"\n{len(errors)} issue(s):")
        for e in errors[:80]:
            print(" -", e)
        if len(errors) > 80:
            print(f" ... and {len(errors) - 80} more")
        return 1
    print("\nOK — structure checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
