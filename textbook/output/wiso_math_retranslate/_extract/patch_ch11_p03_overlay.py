#!/usr/bin/env python3
"""Merge ch11-p03 DE parts and patch src/data/wiso/math-de-ch11.json."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
PARTS = ROOT / "textbook" / "output" / "wiso_math_retranslate" / "_extract" / "ch11-p03-de-parts"
SRC = ROOT / "textbook" / "output" / "wiso_math_retranslate" / "ch11-p03.json"
OVERLAY = ROOT / "src" / "data" / "wiso" / "math-de-ch11.json"

CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$")


def main() -> None:
    de: dict[str, list[str]] = {}
    for path in sorted(PARTS.glob("part*.json")):
        chunk = json.loads(path.read_text(encoding="utf-8"))
        de.update(chunk)

    # fix accidental Cyrillic if any
    for cid, expls in de.items():
        de[cid] = [e.replace("логик", "logik").replace("—", ", ") for e in expls]

    src = json.loads(SRC.read_text(encoding="utf-8"))
    errors: list[str] = []
    expected_ids = [c["case_id"] for c in src]
    if set(de) != set(expected_ids):
        errors.append(f"id mismatch: missing={set(expected_ids)-set(de)} extra={set(de)-set(expected_ids)}")

    for c in src:
        cid = c["case_id"]
        key = c["answer_key"]
        expls = de.get(cid, [])
        if len(expls) != 5:
            errors.append(f"{cid}: need 5, got {len(expls)}")
            continue
        for i, e in enumerate(expls):
            letter = chr(65 + i)
            if "—" in e:
                errors.append(f"{cid} {letter}: em dash")
            if "True" in e or "False" in e or "So the statement" in e:
                errors.append(f"{cid} {letter}: leftover English")
            want_header = "Richtig" if key[i] else "Falsch"
            if f"→ {want_header}" not in e.split("\n", 1)[0]:
                errors.append(f"{cid} {letter}: header want {want_header}")
            m = CLOSER.search(e.strip())
            if not m:
                errors.append(f"{cid} {letter}: missing closer")
            else:
                want = "wahr" if key[i] else "falsch"
                if m.group(1).lower() != want:
                    errors.append(f"{cid} {letter}: closer/key mismatch")
            # length sanity vs EN (DE often ~same or longer)
            en_len = len(c["tactical_explanations_en"][i])
            if len(e) < en_len * 0.55:
                errors.append(f"{cid} {letter}: suspiciously short {len(e)} vs EN {en_len}")

    if errors:
        print("ISSUES:")
        for e in errors:
            print(" ", e)
        raise SystemExit(1)

    overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
    updated = 0
    for cid, expls in de.items():
        if cid not in overlay:
            raise SystemExit(f"missing overlay entry {cid}")
        overlay[cid]["tactical_explanations"] = expls
        updated += 1

    OVERLAY.write_text(
        json.dumps(overlay, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"patched {updated} cases into {OVERLAY}")


if __name__ == "__main__":
    main()
