# -*- coding: utf-8 -*-
"""Final audit: FlashcardMath-compatible $ parity + structural checks."""
from __future__ import annotations

import json
import re
from pathlib import Path

OV = Path(__file__).with_name("ch5_expl_overrides.json")
TS = Path(__file__).resolve().parents[2] / "src" / "data" / "math-ch5-linear-equations.ts"

CURRENCY = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)(?![0-9A-Za-z+\-*=(\\{^_$])"
)

CRITICAL = [
    ("split_paren", re.compile(r"\$[^$\n]*\$\([^$)]*\)\$")),
    ("orphan_eq", re.compile(r"\$\s*=\s*")),
    ("title_dangle", re.compile(r"\*\*[^*]*[+\-×·/]\.\*\*")),
    ("display_trunc", re.compile(r"\$\$\s*\d+\.\d+[a-zA-Z]\s*=\s*0\s*\$\$")),
    ("space_dollar_eq", re.compile(r"(?i)(predicted|value)\s*\$=")),
    ("solar_scar", re.compile(r"33 \+\.\*\*|0\.21u = 0\$\$|(?<![\d$])\.29u")),
    ("trunc_decimal_scar", re.compile(r"=\s*\d+\$\.\d+\$")),
    ("nested_open", re.compile(r"\$=\s*\$\d")),
]


def leftover_dollars(text: str) -> list[str]:
    """Mirror FlashcardMath: mask math spans, then currency, then unpaired $."""
    bag: list[str] = []

    def stash(whole: str) -> str:
        bag.append(whole)
        return "¤"

    plain = re.sub(r"\$\$[\s\S]*?\$\$|\$[^$\n]+\$", lambda m: stash(m.group(0)), text)
    plain = CURRENCY.sub("¤", plain)
    return [plain[max(0, i - 28) : i + 36] for i, c in enumerate(plain) if c == "$"]


def main() -> None:
    data = json.loads(OV.read_text(encoding="utf-8"))
    ts = TS.read_text(encoding="utf-8")

    critical_hits: list[tuple[int, str, str]] = []
    leftover_hits: list[tuple[int, str, str]] = []
    age_ok = "x - 5 = 3(y - 5)" in data["47"]["solution_overview"]
    solar_ok = (
        "$33 + 0.21u = 0.29u$" in ts
        and "0.21u = 0$$" not in ts
        and "33 +.**" not in ts
    )

    for key, item in data.items():
        n = int(key)
        chunks = [("ov", item.get("solution_overview") or "")] + [
            (chr(65 + i), e or "") for i, e in enumerate(item.get("tactical_explanations") or [])
        ]
        for where, text in chunks:
            for name, rx in CRITICAL:
                for m in rx.finditer(text):
                    critical_hits.append((n, f"{where}/{name}", m.group(0)[:70]))
            for ctx in leftover_dollars(text):
                leftover_hits.append((n, where, ctx))

    print("=== FINAL AUDIT ===")
    print(f"critical structural scars: {len(critical_hits)}")
    for n, w, s in critical_hits[:20]:
        print(f"  T{n}/{w}: {s!r}")
    print(f"true unpaired $ (after math+currency mask): {len(leftover_hits)}")
    for n, w, s in leftover_hits[:12]:
        print(f"  T{n}/{w}: {s!r}")
    print(f"Solar T24 in TS: {'PASS' if solar_ok else 'FAIL'}")
    print(f"Age T47 Part1 keeps 3(y-5): {'PASS' if age_ok else 'FAIL'}")

    # Spot samples
    for n in (2, 24, 41, 47):
        ov = data[str(n)]["solution_overview"]
        m = re.search(r"\*\*Part 3: Solve\.\*\*([\s\S]{0,500})", ov)
        print(f"\n--- T{n} Part3 head ---")
        print((m.group(1) if m else "")[:400])
        if n == 47:
            m1 = re.search(r"\*\*Part 1:[\s\S]*?\*\*Part 2:", ov)
            print("--- T47 Part1 ---")
            print((m1.group(0) if m1 else "")[:500])

    report = Path(__file__).with_name("_audit_math_report.txt")
    lines = [
        "=== FINAL AUDIT ===",
        f"critical: {len(critical_hits)}",
        f"unpaired $: {len(leftover_hits)}",
        f"Solar: {'PASS' if solar_ok else 'FAIL'}",
        f"Age paren product: {'PASS' if age_ok else 'FAIL'}",
        "",
        "--- CRITICAL ---",
    ]
    lines += [f"T{n}/{w}: {s}" for n, w, s in critical_hits] or ["(none)"]
    lines += ["", "--- UNPAIRED $ ---"]
    lines += [f"T{n}/{w}: {s}" for n, w, s in leftover_hits] or ["(none)"]
    report.write_text("\n".join(lines), encoding="utf-8")
    print("\nwrote", report)


if __name__ == "__main__":
    main()
