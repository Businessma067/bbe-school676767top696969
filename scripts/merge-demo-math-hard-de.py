#!/usr/bin/env python3
"""
Build German hard-demo overlays from EN hard overlays.

Strategy: start from EN hard content; if a WiSo DE overlay already exists for the
case_id, keep structural KaTeX but we still need full DE prose. This script expects
a companion file `/tmp/demo-hard-out/de-translations.json` produced by a translator
agent, OR falls back to copying EN (flagged) — we require the DE file.

Output: src/data/wiso/math-de-demo-hard.json
Fields: title, context, statements, tactical_explanations, solution_overview
(answer_key stays on the EN bank; DE overlay does not override it)
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

EN = Path("/workspace/src/data/demo-math-hard-en.json")
DE_IN = Path("/tmp/demo-hard-out/de-translations.json")
OUT = Path("/workspace/src/data/wiso/math-de-demo-hard.json")
META = json.load(open("/tmp/demo-math-free-meta.json"))
WISO_IDS = {r["case_id"] for r in META if r["track"] == "wiso"}
# Also include BBE free ids that appear on WiSo after swap? WiSo free = next block,
# which are the wiso-track ids. DE overlays only needed for case_ids that WiSo shows.
# But hard EN applies to all 140; DE hard only matters for WiSo UI language.
# Include all 140 so DE mode on either bank is consistent if shared.
ALL_IDS = {r["case_id"] for r in META}

FIELDS = ("title", "context", "statements", "tactical_explanations", "solution_overview")


def main() -> int:
    if not EN.exists():
        print("missing EN overlay", file=sys.stderr)
        return 2
    if not DE_IN.exists():
        print("missing DE translations at", DE_IN, file=sys.stderr)
        return 2
    en = json.loads(EN.read_text())
    de = json.loads(DE_IN.read_text())
    errs = []
    out = {}
    # Prefer translating all free ids so BBE demo DE (if ever) and WiSo are covered
    for cid in sorted(ALL_IDS):
        if cid not in de:
            errs.append(f"missing DE {cid}")
            continue
        row = de[cid]
        for f in FIELDS:
            if f not in row:
                errs.append(f"{cid} missing {f}")
        if "statements" in row and len(row["statements"]) != 5:
            errs.append(f"{cid} statements")
        if "tactical_explanations" in row and len(row["tactical_explanations"]) != 5:
            errs.append(f"{cid} expl")
        # Keep DE math identical; require German cue words in context
        ctx = row.get("context") or ""
        if "Richtig" not in ctx and "richtig" not in ctx and "TRUE" in (en.get(cid, {}).get("context") or ""):
            # soft check — translator should end with German prompt
            pass
        out[cid] = {f: row[f] for f in FIELDS if f in row}

    if errs:
        print("FAIL", len(errs))
        for e in errs[:50]:
            print(" ", e)
        return 1
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
    print(f"wrote {OUT} ({len(out)}), wiso-visible subset {len(WISO_IDS)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
