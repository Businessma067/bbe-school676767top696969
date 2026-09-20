# -*- coding: utf-8 -*-
"""Patch overlay with translated tactical_explanations from batch JSON files."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
OVERLAY = ROOT / "src" / "data" / "wiso" / "math-de-ch12.json"
BATCH_DIR = ROOT / "textbook" / "output" / "wiso_math_retranslate_done"
CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$", re.I)

def load_batches():
    rows = []
    for p in sorted(BATCH_DIR.glob("_ch12p02_batch*.json")):
        rows.extend(json.loads(p.read_text(encoding="utf-8")))
    return rows

def validate(row):
    errs = []
    cid = row["case_id"]
    expl = row["tactical_explanations"]
    key = row["answer_key"]
    if len(expl) != 5:
        errs.append(f"{cid}: need 5")
    for i, e in enumerate(expl):
        if "—" in e:
            errs.append(f"{cid} {chr(65+i)}: em dash")
        m = CLOSER.search(e.strip())
        if not m:
            errs.append(f"{cid} {chr(65+i)}: missing closer")
        elif key is not None and i < len(key):
            want = "wahr" if key[i] else "falsch"
            if m.group(1).lower() != want:
                errs.append(f"{cid} {chr(65+i)}: closer/key mismatch")
        hdr = "Richtig" if key[i] else "Falsch"
        if f"**{chr(65+i)}.** → {hdr}" not in e.split("\n", 1)[0]:
            errs.append(f"{cid} {chr(65+i)}: bad header")
    return errs

def main():
    rows = load_batches()
    overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
    errs = []
    updated = 0
    for row in rows:
        errs.extend(validate(row))
        cid = row["case_id"]
        if cid not in overlay:
            errs.append(f"{cid}: missing in overlay")
            continue
        overlay[cid]["tactical_explanations"] = row["tactical_explanations"]
        updated += 1
    if errs:
        print("ISSUES:")
        for e in errs:
            print(" ", e)
        raise SystemExit(1)
    OVERLAY.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {updated} cases -> {OVERLAY.name}")

if __name__ == "__main__":
    main()
