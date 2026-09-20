"""Merge textbook/output/wiso_cases/*.json into chapter banks."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "textbook" / "output" / "wiso_cases"
DEST = ROOT / "src" / "data"

CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$", re.I)


def load_pack(path: Path) -> list[dict]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict) and "cases" in data:
        data = data["cases"]
    if not isinstance(data, list):
        raise SystemExit(f"{path} is not a JSON array")
    return data


def main() -> None:
    packs = sorted(SRC.glob("*.json"))
    if not packs:
        raise SystemExit(f"no packs in {SRC}")
    by_ch: dict[int, list[dict]] = {1: [], 2: [], 3: [], 4: []}
    seen: set[str] = set()
    errors: list[str] = []
    for path in packs:
        for case in load_pack(path):
            cid = case.get("case_id", "")
            if cid in seen:
                errors.append(f"duplicate {cid} in {path.name}")
                continue
            seen.add(cid)
            sub = str(case.get("subsection", ""))
            ch = int(sub.split(".")[0]) if sub else 0
            if ch not in by_ch:
                errors.append(f"{cid}: bad subsection {sub}")
                continue
            expl = case.get("tactical_explanations") or []
            key = case.get("answer_key") or []
            stmts = case.get("statements") or []
            if not (len(expl) == len(key) == len(stmts) == 5):
                errors.append(f"{cid}: expected 5 statements/keys/explanations")
            for i, (e, k) in enumerate(zip(expl, key)):
                m = CLOSER.search((e or "").strip())
                want = "wahr" if k else "falsch"
                if not m:
                    errors.append(f"{cid} {chr(65+i)}: missing closer")
                elif m.group(1).lower() != want:
                    errors.append(f"{cid} {chr(65+i)}: closer={m.group(1)} key={want}")
                if "—" in (e or ""):
                    errors.append(f"{cid} {chr(65+i)}: em dash")
            by_ch[ch].append(case)
    for ch, rows in by_ch.items():
        rows.sort(
            key=lambda c: (
                tuple(int(p) for p in str(c.get("subsection", "0")).split(".")),
                int(str(c.get("case_id", "0")).split(".")[-1]),
            )
        )
        out = DEST / f"wiso-economics-cases-ch{ch}-subtopics.json"
        out.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"ch{ch}: {len(rows)} cases -> {out.name}")
    if errors:
        print("ISSUES:")
        for e in errors[:80]:
            print(" ", e)
        if len(errors) > 80:
            print(f"  ... {len(errors) - 80} more")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
