#!/usr/bin/env python3
"""Merge retranslated DE packs into src/data/wiso/math-de-chN.json."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACKS = ROOT / "textbook" / "output" / "wiso_math_retranslate_done"
DE = ROOT / "src" / "data" / "wiso"

CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$", re.I)


def main() -> None:
    if not PACKS.exists():
        raise SystemExit(f"missing {PACKS}")
    by_ch: dict[int, list[dict]] = {}
    for path in sorted(PACKS.glob("ch*-p*.json")):
        m = re.match(r"ch(\d+)-p", path.name)
        if not m:
            continue
        ch = int(m.group(1))
        data = json.loads(path.read_text(encoding="utf-8"))
        if isinstance(data, dict) and "cases" in data:
            data = data["cases"]
        by_ch.setdefault(ch, []).extend(data)

    errors: list[str] = []
    for ch, rows in sorted(by_ch.items()):
        path = DE / f"math-de-ch{ch}.json"
        overlay = json.loads(path.read_text(encoding="utf-8"))
        updated = 0
        for row in rows:
            cid = row["case_id"]
            if cid not in overlay:
                overlay[cid] = {}
            expl = row.get("tactical_explanations")
            if not expl or len(expl) != 5:
                errors.append(f"{cid}: need 5 explanations")
                continue
            key = row.get("answer_key")
            for i, e in enumerate(expl):
                if "—" in e:
                    errors.append(f"{cid} {chr(65+i)}: em dash")
                m = CLOSER.search(e.strip())
                if not m:
                    errors.append(f"{cid} {chr(65+i)}: missing closer")
                elif key is not None and i < len(key):
                    want = "wahr" if key[i] else "falsch"
                    if m.group(1).lower() != want:
                        errors.append(f"{cid} {chr(65+i)}: closer/key mismatch")
            overlay[cid]["tactical_explanations"] = expl
            if row.get("solution_overview"):
                overlay[cid]["solution_overview"] = row["solution_overview"]
            # keep existing title/context/statements unless provided
            for f in ("title", "context", "statements"):
                if row.get(f):
                    overlay[cid][f] = row[f]
            updated += 1
        path.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"ch{ch}: updated {updated} -> {path.name}")
    if errors:
        print("ISSUES:")
        for e in errors[:60]:
            print(" ", e)
        if len(errors) > 60:
            print(f"  ... {len(errors)-60} more")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
