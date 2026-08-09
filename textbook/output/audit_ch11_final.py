# -*- coding: utf-8 -*-
"""Final comprehensive Ch11 scar audit after polish passes."""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = json.loads((ROOT / "textbook/output/ch11_raw.json").read_text(encoding="utf-8"))
OUT = ROOT / "textbook/output/_audit_ch11_final.txt"

CHECKS = [
    ("header", re.compile(r"Chapter\s+11\.|Practice\s+Worksheet", re.I)),
    ("amount_dollar_paren", re.compile(r"\d(?:,\d{3})*\$\(")),
    ("nested_slash_dollar", re.compile(r"/\$\(|\[1\s*-\s*\$|\(a/r\)\$\[")),
    ("flat_decimal_pow", re.compile(r"\((?:\d+\.\d+|1\+[^)]+)\)\d{1,3}\b")),
    ("neg_flat", re.compile(r"\(\d+\.\d+\)-\d")),
    ("e_digit", re.compile(r"(?<![A-Za-z\\0-9$])e-?\d+\.\d")),
    ("glue_geom", re.compile(r"\b1\.0\d{3,}\b|\b0\.9\d{3,}\b")),  # may FP
    ("kn_flat", re.compile(r"\bkn\b|\bkt-1\b|\bk\d+-1\b")),
    ("broken_brace", re.compile(r"e\^\{[^}]*$|\\delta Bt|rAt")),
    ("lower_ctx", None),  # special
    ("disc_scar", re.compile(r"=\s*282\b|=\s*1062\b|502\s*=")),
    ("empty_math", re.compile(r"\$\s*\$")),
]


def all_text(t: dict) -> str:
    return "\n".join(
        [
            t.get("title") or "",
            t.get("context") or "",
            t.get("given") or "",
            t.get("formulas") or "",
            t.get("steps") or "",
            *(t.get("statements") or []),
            *(t.get("explanations") or []),
        ]
    )


def main() -> None:
    counts = Counter()
    samples: dict[str, list[str]] = {}
    issues = []
    for sub in RAW["subsections"]:
        for t in sub["tasks"]:
            loc = f"{sub['id']}/{t['local_num']}"
            ctx = t.get("context") or ""
            if ctx and ctx[0].islower():
                counts["lower_ctx"] += 1
                samples.setdefault("lower_ctx", []).append(f"{loc}: {ctx[:80]}")
                issues.append(f"lower_ctx {loc}")
            blob = all_text(t)
            for name, rx in CHECKS:
                if rx is None:
                    continue
                for m in rx.finditer(blob):
                    # glue_geom filter: ignore already KaTeX ^{ or values like 0.34009
                    if name == "glue_geom":
                        snip = blob[max(0, m.start() - 2) : m.end() + 8]
                        if "^{" in snip or re.match(r"0\.\d{4,}$", m.group(0)):
                            # long decimals from calc results are OK
                            if len(m.group(0).split(".")[-1]) >= 4 and not re.match(
                                r"1\.0\d{2}\d+$|0\.9\d{2}\d+$", m.group(0)
                            ):
                                pass
                            # keep only 1.0XXn / 0.9XXn style (4-5 chars after point total ~4)
                            g = m.group(0)
                            # e.g. 1.0510 (2+2) or 0.9720
                            if not re.fullmatch(r"(?:1|0)\.\d{4}", g):
                                continue
                    counts[name] += 1
                    msg = f"{loc}: {blob[max(0,m.start()-22):m.end()+22]!r}"
                    samples.setdefault(name, []).append(msg)
                    issues.append(f"{name} {msg}")

    lines = [f"issues={len(issues)}", "COUNTS:"]
    for k, v in counts.most_common():
        lines.append(f"  {k}: {v}")
    for k, msgs in samples.items():
        lines.append(f"\n## {k}")
        for m in msgs[:20]:
            lines.append(f"  {m}")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print("\n".join(lines[:100]))
    print("wrote", OUT)


if __name__ == "__main__":
    main()
