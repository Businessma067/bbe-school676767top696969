#!/usr/bin/env python3
"""
Repair leaked/corrupted KaTeX placeholders in WISO math DE overlays.
Does NOT rewrite German explanations — only replaces broken ⟦Kn⟧ / �K… artifacts
with the matching KaTeX tokens from the English source.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DE = ROOT / "src" / "data" / "wiso"
EN_DIR = Path("/tmp/wiso-math-en")

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)")
# Capture trailing punctuation that was glued to the placeholder
BROKEN = re.compile(
    r"⟦\s*K\s*(\d+)\s*⟧"
    r"|⟦\s*K\s*(\d+)\s*([.:,;]?)"
    r"|�[^⟦\nK]{0,24}?K\s*(\d+)\s*⟧?"
    r"|💔\s*K\s*(\d+)"
    r"|(?<![A-Za-z0-9])K\s*(\d+)\s*⟧"
)


def extract_katex(text: str) -> list[str]:
    return KATEX_RE.findall(text or "")


def has_junk(text: str) -> bool:
    if not text:
        return False
    return (
        "\ufffd" in text
        or "💔" in text
        or "⟦K" in text
        or "⟦ K" in text
        or bool(re.search(r"K\s*\d+\s*⟧", text))
    )


def fix_text(de: str, en: str) -> str:
    tokens = extract_katex(en)
    if not has_junk(de):
        return de

    def repl(m: re.Match[str]) -> str:
        idx = None
        trail = ""
        if m.group(1) is not None:
            idx = int(m.group(1))
        elif m.group(2) is not None:
            idx = int(m.group(2))
            trail = m.group(3) or ""
        elif m.group(4) is not None:
            idx = int(m.group(4))
        elif m.group(5) is not None:
            idx = int(m.group(5))
        elif m.group(6) is not None:
            idx = int(m.group(6))
        if idx is None or not (0 <= idx < len(tokens)):
            return m.group(0)
        return tokens[idx] + trail

    out = BROKEN.sub(repl, de)
    # Drop any leftover unmapped placeholder scraps
    out = re.sub(r"⟦\s*K\s*\d+[^\n⟧]{0,12}⟧?", "", out)
    out = out.replace("\ufffd", "")
    out = out.replace("💔", "")
    # Space between math and following letter: $x$Der → $x$ Der
    out = re.sub(r"(\$[^$\n]+\$)([A-Za-zÄÖÜäöüß])", r"\1 \2", out)
    out = re.sub(r"(\$\$)([A-Za-zÄÖÜäöüß])", r"\1\n\2", out)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *\n", "\n", out)
    return out


def dump_en_if_needed(chapters: list[int]) -> None:
    missing = [c for c in chapters if not (EN_DIR / f"ch{c}.json").exists()]
    if not missing:
        return
    import subprocess

    EN_DIR.mkdir(parents=True, exist_ok=True)
    script = ROOT / "scripts" / "_dump_math_en_tmp.mts"
    script.write_text(
        """
import { writeFileSync, mkdirSync } from "fs";
import { loadMathChapterTasks } from "../src/data/math-chapters.ts";
const out = "/tmp/wiso-math-en";
mkdirSync(out, { recursive: true });
for (const ch of JSON.parse(process.argv[2])) {
  const tasks = await loadMathChapterTasks(ch);
  writeFileSync(`${out}/ch${ch}.json`, JSON.stringify(tasks.map(t => ({
    case_id: t.case_id,
    tactical_explanations: t.tactical_explanations,
    solution_overview: t.solution_overview ?? null,
  }))));
}
""",
        encoding="utf-8",
    )
    subprocess.run(["npx", "--yes", "tsx", str(script), json.dumps(missing)], cwd=ROOT, check=True)
    script.unlink(missing_ok=True)


def main() -> None:
    chapters = [int(x) for x in sys.argv[1:]] or list(range(1, 14))
    dump_en_if_needed(chapters)
    for ch in chapters:
        en_path = EN_DIR / f"ch{ch}.json"
        de_path = DE / f"math-de-ch{ch}.json"
        if not de_path.exists():
            continue
        en_map = {
            t["case_id"]: t
            for t in (json.loads(en_path.read_text(encoding="utf-8")) if en_path.exists() else [])
        }
        overlay = json.loads(de_path.read_text(encoding="utf-8"))
        fixed_n = 0
        still = 0
        for cid, row in overlay.items():
            en = en_map.get(cid)
            if not en:
                continue
            changed = False
            expl = list(row.get("tactical_explanations") or [])
            en_e = en.get("tactical_explanations") or []
            for i, de_e in enumerate(expl):
                if not has_junk(de_e):
                    continue
                src = en_e[i] if i < len(en_e) else ""
                new = fix_text(de_e, src)
                if new != de_e:
                    expl[i] = new
                    changed = True
                    fixed_n += 1
                if has_junk(expl[i]):
                    still += 1
            if row.get("solution_overview") and has_junk(row["solution_overview"]):
                row["solution_overview"] = fix_text(
                    row["solution_overview"], en.get("solution_overview") or ""
                )
                changed = True
            if changed:
                row["tactical_explanations"] = expl
                overlay[cid] = row
        de_path.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        # recount junk
        text = de_path.read_text(encoding="utf-8")
        rem = text.count("\ufffd") + text.count("💔") + len(re.findall(r"⟦\s*K", text))
        print(f"ch{ch}: repaired_fields={fixed_n} still_junk_markers≈{rem}", flush=True)


if __name__ == "__main__":
    main()
