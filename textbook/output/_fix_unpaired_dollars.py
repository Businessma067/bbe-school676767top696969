# -*- coding: utf-8 -*-
"""Fix remaining unpaired/$ mis-escapes in Ch11 after currency pass."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook/output/ch11_raw.json"
FIX_DIR = ROOT / "textbook/output/ch11_subsection_fixes"

# Specific exact-string repairs (from unpaired audit)
REPLACEMENTS = [
    (
        r"gives \$3r = \\ln(34{,}200/28{,}000)$",
        r"gives $3r = \\ln(34{,}200/28{,}000)$",
    ),
    (
        r"because \$4 = 2^{2}$ means",
        r"because $4 = 2^{2}$ means",
    ),
    (
        r", \$40{,}000/(1.05)^{2}$, gives",
        r", $\$40{,}000/(1.05)^{2}$, gives",
    ),
    (
        r", \$65{,}000/(1.05)^{5}$, gives",
        r", $\$65{,}000/(1.05)^{5}$, gives",
    ),
    (
        r", \$25{,}500/(1.06)^{3}$, gives",
        r", $\$25{,}500/(1.06)^{3}$, gives",
    ),
    (
        r", \$42{,}000/(1.06)^{3}$, gives",
        r", $\$42{,}000/(1.06)^{3}$, gives",
    ),
    (
        r"$P(0) = \$40${,}000e^{0} = \$40{,}000$",
        r"$P(0) = \$40{,}000 e^{0} = \$40{,}000$",
    ),
    (
        r"Combined factor = \$1 + (1/0.11)[1-(1.11)^{-9}]$",
        r"Combined factor = $1 + (1/0.11)[1-(1.11)^{-9}]$",
    ),
    (
        r"Combined factor = \$1 + (1/0.12)[1-(1.12)^{-7}]$",
        r"Combined factor = $1 + (1/0.12)[1-(1.12)^{-7}]$",
    ),
]


def apply(s: str) -> tuple[str, int]:
    n = 0
    for a, b in REPLACEMENTS:
        if a in s:
            s = s.replace(a, b)
            n += 1
    return s, n


def mutate(obj) -> int:
    changed = 0
    if isinstance(obj, dict):
        for k, v in obj.items():
            if isinstance(v, str):
                nv, c = apply(v)
                if c:
                    obj[k] = nv
                    changed += c
            else:
                changed += mutate(v)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            if isinstance(v, str):
                nv, c = apply(v)
                if c:
                    obj[i] = nv
                    changed += c
            else:
                changed += mutate(v)
    return changed


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = mutate(data)
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("raw changes", total)

    # sync subsection fix files from raw
    for sub in data["subsections"]:
        sid = sub["id"]
        path = FIX_DIR / f"{sid}.json"
        path.write_text(json.dumps(sub["tasks"], ensure_ascii=False, indent=2), encoding="utf-8")
        print("synced", path.name)

    # emit
    import subprocess, sys
    subprocess.check_call([sys.executable, str(ROOT / "textbook/output/emit_ch11_from_raw.py")])


if __name__ == "__main__":
    main()
