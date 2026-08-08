# -*- coding: utf-8 -*-
"""Strip spoon-fed parenthetical glosses from Ch5 statement stems."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
OUT = ROOT / "textbook" / "output"
RAW = OUT / "linear_eq_60_raw.json"
OV = OUT / "ch5_expl_overrides.json"

ALWAYS_DROP_SUBSTR = [
    "portion earned specifically",
    "beyond the usable amounts",
    "as the memo describes",
    "cost of the studs and drywall beyond",
    "overtime paid at the base rate",
    "no delivery fee",
    "halfway to the nine-year mark",
    "cost ÷ total meters",
    "cost / total meters",
    "total profit ÷ total tonnage",
    "retail total minus wholesale",
    "priced at their per-unit rates",
    "using only the",
    "ignoring waste",
    "total fee ÷ aum",
    "total fuel ÷ total distance",
    "total return ÷ total fund",
]

HINTISH = re.compile(
    r"""
    ^\s*(?:
        the\s+(?:portion|cost|amount|difference|total|sum|product|rate|price|number)\b
      | specifically\b
      | i\.e\.|e\.g\.|that\s+is\b
      | meaning\b|namely\b|which\s+is\b|which\s+means\b
      | overtime\s+paid\b
      | paid\s+at\s+the\b
      | halfway\s+to\b
      | (?:cost|profit|retail|total).*(?:÷|/|minus|plus)
      | no\s+delivery\s+fee\b
    )
    """,
    re.I | re.X,
)


def is_hint_paren(inner: str) -> bool:
    t = inner.strip()
    low = t.lower()
    for s in ALWAYS_DROP_SUBSTR:
        if s in low:
            return True
    if HINTISH.search(t):
        return True
    # Pure formula gloss: "cost ÷ …", "a − b", but keep "x - y" / "y : x" / ratios with vars
    if "÷" in t or re.search(r"\bminus\b", low):
        return True
    # Long how-to gloss inside the claim (> 40 chars, starts explaining method)
    if len(t) >= 40 and re.search(
        r"\b(using only|ignoring|priced at|calculated|computed|defined as|meaning)\b",
        low,
    ):
        return True
    return False


def strip_hints(stmt: str) -> str:
    def repl(m: re.Match) -> str:
        return "" if is_hint_paren(m.group(1)) else m.group(0)

    out = re.sub(r"\s*\(([^)]+)\)", repl, stmt)
    out = re.sub(r"\s{2,}", " ", out)
    out = re.sub(r"\s+([.,;])", r"\1", out)
    # Keep spaces around ratio colons: (7: 2.5) → (7 : 2.5)
    out = re.sub(r"\((\d+)\s*:\s*(\d+(?:\.\d+)?)\)", r"(\1 : \2)", out)
    out = re.sub(r"\(([A-Za-z])\s*:\s*([A-Za-z])\)", r"(\1 : \2)", out)
    return out.strip()


def patch_expl_header(expl: str, old_stmt: str, new_stmt: str) -> str:
    if not expl or old_stmt == new_stmt:
        return expl
    esc = re.escape(old_stmt.rstrip("."))
    return re.sub(
        rf"(\*\*[A-E]\)\s*){esc}(\.?)\*\*",
        lambda m: f"{m.group(1)}{new_stmt.rstrip('.')}{m.group(2)}**",
        expl,
        count=1,
    )


def main() -> None:
    # Re-load from a fresh PDF-aligned baseline when possible? Use current raw.
    raw = json.loads(RAW.read_text(encoding="utf-8"))
    ov = json.loads(OV.read_text(encoding="utf-8"))
    changes = []
    for t in raw:
        n = t["num"]
        key = str(n)
        stmts = t.get("statements") or []
        new_stmts = []
        for i, s in enumerate(stmts):
            ns = strip_hints(s)
            new_stmts.append(ns)
            if ns != s:
                changes.append((n, "ABCDEF"[i], s, ns))
                if key in ov:
                    expls = ov[key].get("tactical_explanations") or []
                    if i < len(expls):
                        expls[i] = patch_expl_header(expls[i], s, ns)
                    ov[key]["tactical_explanations"] = expls
        t["statements"] = new_stmts

    RAW.write_text(json.dumps(raw, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    OV.write_text(json.dumps(ov, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"changed {len(changes)} statements")
    for n, let, old, new in changes:
        print(f"--- {n}{let}")
        print(" OLD", old)
        print(" NEW", new)


if __name__ == "__main__":
    main()
