#!/usr/bin/env python3
"""Build work packs of BBE EN cases whose DE explanations are too short."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EN = ROOT / "textbook" / "output" / "wiso_math_en"
DE = ROOT / "src" / "data" / "wiso"
OUT = ROOT / "textbook" / "output" / "wiso_math_retranslate"
OUT.mkdir(parents=True, exist_ok=True)

RATIO = 0.75


def is_short(en: str, de: str) -> bool:
    if not en:
        return False
    if not de:
        return True
    r = (len(de) + 1) / (len(en) + 1)
    return r < RATIO or len(de) < max(120, 0.4 * len(en))


def main() -> None:
    summary = []
    for ch in range(1, 14):
        en_tasks = json.loads((EN / f"ch{ch}.json").read_text(encoding="utf-8"))
        de = json.loads((DE / f"math-de-ch{ch}.json").read_text(encoding="utf-8"))
        need = []
        for t in en_tasks:
            cid = t["case_id"]
            row = de.get(cid) or {}
            en_e = t.get("tactical_explanations") or []
            de_e = row.get("tactical_explanations") or []
            short_idx = []
            for i, a in enumerate(en_e):
                b = de_e[i] if i < len(de_e) else ""
                if is_short(a, b):
                    short_idx.append(i)
            # also solution_overview
            en_so = t.get("solution_overview") or ""
            de_so = row.get("solution_overview") or ""
            so_short = bool(en_so) and is_short(en_so, de_so)
            if short_idx or so_short:
                need.append(
                    {
                        "case_id": cid,
                        "short_letters": short_idx,
                        "solution_overview_short": so_short,
                        "answer_key": t.get("answer_key"),
                        "title_en": t.get("title"),
                        "context_en": t.get("context"),
                        "statements_en": t.get("statements"),
                        "tactical_explanations_en": en_e,
                        "solution_overview_en": en_so or None,
                        "title_de_existing": row.get("title"),
                        "context_de_existing": row.get("context"),
                        "statements_de_existing": row.get("statements"),
                        "tactical_explanations_de_existing": de_e,
                        "solution_overview_de_existing": de_so or None,
                    }
                )
        # chunk into packs of 20
        packs = []
        for i in range(0, len(need), 20):
            chunk = need[i : i + 20]
            packs.append(chunk)
            path = OUT / f"ch{ch}-p{len(packs):02d}.json"
            path.write_text(json.dumps(chunk, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        summary.append({"ch": ch, "cases_need": len(need), "packs": len(packs)})
        print(f"ch{ch}: {len(need)} cases -> {len(packs)} packs")
    (OUT / "_summary.json").write_text(json.dumps(summary, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
