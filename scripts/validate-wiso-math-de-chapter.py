#!/usr/bin/env python3
"""Validate a WiSo German math overlay chapter against EN dump."""
import json, re, sys
from pathlib import Path

EN_MARK = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|true|false|consider|"
    r"evaluate|statement|given|let|claim|because|therefore|rider|discount|"
    r"union|intersection|keeps|elements|exactly|subsets)\b",
    re.I,
)
GARBLE = re.compile(
    r"('{3,}|\"{3,}|\.{15,}|1;00;00|vonzu|\bvon(?:\s+von){3,}\b|"
    r"Derfleisch|eribel|Kner\.\.|connect''|die die de|⟦|⟧|ZZTOK|\bTK\d+\b)",
    re.I,
)

def prose(s):
    plain = re.sub(r"\$[^$]*\$", " ", s)
    return re.sub(r"\\[a-zA-Z]+", " ", plain)

def main():
    ch = int(sys.argv[1])
    de = json.loads(Path(f"src/data/wiso/math-de-ch{ch}.json").read_text())
    en_rows = {r["id"]: r for r in json.loads(Path(f"/tmp/wiso-math-en/ch{ch}.json").read_text())}
    issues = []
    if set(de) != set(en_rows):
        issues.append(f"key mismatch: de={len(de)} en={len(en_rows)} missing={sorted(set(en_rows)-set(de))[:5]}")
    for tid, src in en_rows.items():
        t = de.get(tid)
        if not t:
            issues.append(f"{tid}: missing"); continue
        for f in ["title", "context", "solution_overview"]:
            s = t.get(f) or ""
            if GARBLE.search(s):
                issues.append(f"{tid}.{f}: garble")
            elif len(EN_MARK.findall(s)) >= 4 and len(re.findall(r"[äöüÄÖÜß]|\b(der|die|das|und|wahr|falsch)\b", s, re.I)) < 2:
                if re.search(r"[A-Za-z]{4,}", prose(s)):
                    issues.append(f"{tid}.{f}: mostly English")
            # dollar parity rough
            if (s.count("$") - s.count("\\$")) % 2:
                issues.append(f"{tid}.{f}: odd $ count")
        for f in ["statements", "tactical_explanations"]:
            arr = t.get(f) or []
            sa = src.get(f) or []
            if len(arr) != len(sa):
                issues.append(f"{tid}.{f}: len {len(arr)}!={len(sa)}")
            for i, s in enumerate(arr):
                if not isinstance(s, str):
                    continue
                if GARBLE.search(s):
                    issues.append(f"{tid}.{f}[{i}]: garble")
                elif len(EN_MARK.findall(s)) >= 4 and len(re.findall(r"[äöüÄÖÜß]|\b(der|die|das|und|wahr|falsch)\b", s, re.I)) < 2:
                    if re.search(r"[A-Za-z]{4,}", prose(s)):
                        issues.append(f"{tid}.{f}[{i}]: mostly English")
    print(f"ch{ch}: {len(issues)} issues")
    for x in issues[:40]:
        print(" ", x)
    if len(issues) > 40:
        print(f"  ... +{len(issues)-40} more")
    return 1 if issues else 0

if __name__ == "__main__":
    raise SystemExit(main())
