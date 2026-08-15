"""Merge filler batches into 1.2_POLISHED and validate all banks."""
from __future__ import annotations

import json
from pathlib import Path

BANKS = Path(__file__).with_name("ch1_logic_banks")


def validate_bank(path: Path) -> list[dict]:
    bank = json.loads(path.read_text(encoding="utf-8"))
    if len(bank) != 30:
        raise SystemExit(f"{path.name}: expected 30, got {len(bank)}")
    for t in bank:
        if t.get("is_filler"):
            raise SystemExit(f"{path.name}: filler remains {t.get('title')}")
        if len(t.get("statements") or []) != 5:
            raise SystemExit(f"{path.name}: bad statements {t.get('id')}")
        if len(t.get("answer_key") or []) != 5:
            raise SystemExit(f"{path.name}: bad answers {t.get('id')}")
        if len(t.get("tactical_explanations") or []) != 5:
            raise SystemExit(f"{path.name}: bad expl {t.get('id')}")
        if not (t.get("context") or "").strip():
            raise SystemExit(f"{path.name}: empty context {t.get('id')}")
        if any(not (s or "").strip() for s in t["statements"]):
            raise SystemExit(f"{path.name}: empty statement {t.get('id')}")
        if len(t.get("solution_overview") or "") < 200:
            raise SystemExit(
                f"{path.name}: short overview {t.get('id')} ({len(t.get('solution_overview') or '')})"
            )
    return bank


def main() -> None:
    validate_bank(BANKS / "1.1_POLISHED.json")
    print("1.1 OK")

    auto = json.loads((BANKS / "1.2_AUTO.json").read_text(encoding="utf-8"))
    fa = json.loads((BANKS / "1.2_FILLERS_A.json").read_text(encoding="utf-8"))
    fb = json.loads((BANKS / "1.2_FILLERS_B.json").read_text(encoding="utf-8"))
    by_so = {t["sort_order"]: t for t in fa + fb}
    print("fillers", sorted(by_so))
    out: list[dict] = []
    for t in auto:
        if t.get("is_filler"):
            rep = by_so.get(t["sort_order"])
            if not rep:
                raise SystemExit(f"missing filler sort_order {t['sort_order']}")
            rep = dict(rep)
            for k in ("id", "case_id", "subsection", "sort_order", "difficulty_level"):
                rep[k] = t[k]
            for k in ("is_filler", "filler_theme", "needs_polish", "source_pdf_num"):
                rep.pop(k, None)
            out.append(rep)
        else:
            t2 = dict(t)
            for k in ("is_filler", "needs_polish", "source_pdf_num"):
                t2.pop(k, None)
            out.append(t2)
    (BANKS / "1.2_POLISHED.json").write_text(
        json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    validate_bank(BANKS / "1.2_POLISHED.json")
    print("1.2 OK")

    for sid in ("1.3", "1.4"):
        path = BANKS / f"{sid}_POLISHED.json"
        bank = json.loads(path.read_text(encoding="utf-8"))
        for t in bank:
            for k in ("is_filler", "needs_polish", "source_pdf_num"):
                t.pop(k, None)
        path.write_text(json.dumps(bank, ensure_ascii=False, indent=2), encoding="utf-8")
        validate_bank(path)
        print(f"{sid} OK")


if __name__ == "__main__":
    main()
