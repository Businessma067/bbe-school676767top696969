# -*- coding: utf-8 -*-
"""Remove Ch11 floating dots: Unicode middot, KaTeX \\cdot, and bullet • markers."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook/output/ch11_raw.json"
FIX_DIR = ROOT / "textbook/output/ch11_subsection_fixes"
EMIT = ROOT / "textbook/output/emit_ch11_from_raw.py"


def fix_string(s: str) -> str:
    if not s:
        return s
    out = s

    # KaTeX center-dot → times
    out = out.replace("\\cdot", "\\times")

    # `$a$·$b$` / `$a$ · $b$`
    out = re.sub(r"\$\s*\u00b7\s*\$", r" \\times ", out)
    # remaining middots
    out = out.replace("\u00b7", " × ")

    # Bullet markers → drop glyph; keep text / structure
    # "• item" or lone "•"
    out = re.sub(r"(?m)^\s*\u2022\s*", "", out)
    out = out.replace("\u2022", "")

    # OCR ellipsis junk
    out = re.sub(r"\?\?\?", "…", out)

    # Lone punctuation-only lines (stray . · •)
    lines = []
    for ln in out.split("\n"):
        if re.fullmatch(r"[\s.\u00b7\u2022\u22c5*\-–—]+", ln) and ln.strip() in {
            ".",
            "·",
            "•",
            "*",
            "-",
            "–",
            "—",
            "⋅",
            "",
        }:
            if ln.strip() == "":
                lines.append("")
            continue
        lines.append(ln)
    out = "\n".join(lines)

    out = re.sub(r" {2,}", " ", out)
    out = re.sub(r" \n", "\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out


def mutate(obj) -> int:
    n = 0
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            if isinstance(v, str):
                nv = fix_string(v)
                if nv != v:
                    obj[k] = nv
                    n += 1
            else:
                n += mutate(v)
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            if isinstance(v, str):
                nv = fix_string(v)
                if nv != v:
                    obj[i] = nv
                    n += 1
            else:
                n += mutate(v)
    return n


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = mutate(data)
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("string fields changed", total)

    for sub in data["subsections"]:
        (FIX_DIR / f"{sub['id']}.json").write_text(
            json.dumps(sub["tasks"], ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print("synced", sub["id"])

    subprocess.check_call([sys.executable, str(EMIT)])

    ts = (ROOT / "src/data/math-ch11-financial.ts").read_text(encoding="utf-8")
    print("TS middot", ts.count("\u00b7"))
    print("TS bullet", ts.count("\u2022"))
    print("TS cdot", ts.count("\\cdot"))
    print("TS times", ts.count("\\times") + ts.count(" × "))


if __name__ == "__main__":
    main()
