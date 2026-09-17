#!/usr/bin/env python3
"""
Repair WiSo German math overlays:
- Protect currency \\$ before KaTeX
- Re-translate fields with leftover placeholders, $ mismatches, or garbled text
- Fall back to English for a field if repair still breaks math
"""

from __future__ import annotations

import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "src/data/wiso"
EN_DIR = Path("/tmp/wiso-math-en")

spec = importlib.util.spec_from_file_location("tr", ROOT / "scripts/translate-wiso-math-full.py")
tr = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(tr)

CURRENCY_RE = re.compile(r"\\\$")
# Inline/display math, but not currency \$
DISPLAY_RE = re.compile(r"\$\$[\s\S]+?\$\$")
INLINE_RE = re.compile(r"(?<!\\)\$[^$\n]+?(?<!\\)\$")
PLACEHOLDER_RE = re.compile(r"⟦|⟧|XXLAT|�")
GARBLE_RE = re.compile(
    r"(Nur-Nur|Iso-Iso|Gesenk-Senkte|christid|Dieierst|meistentensemble|"
    r"auf wertesierter|Ich bin der hers|Daseins-Nur)",
    re.I,
)


def protect_all(text: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def keep(m: re.Match[str]) -> str:
        i = len(tokens)
        tokens.append(m.group(0))
        return f" ⟦T{i}⟧ "

    # 1) currency \$
    masked = CURRENCY_RE.sub(keep, text)
    # 2) display $$...$$
    masked = DISPLAY_RE.sub(keep, masked)
    # 3) inline $...$
    masked = INLINE_RE.sub(keep, masked)
    return masked, tokens


def restore_all(text: str, tokens: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return tokens[i] if 0 <= i < len(tokens) else m.group(0)

    out = re.sub(r"\s*⟦T(\d+)⟧\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *([,.;:!?])", r"\1", out)
    return out.strip()


def translate_safe(text: str | None) -> str | None:
    if text is None:
        return None
    if not str(text).strip():
        return text
    original = str(text)
    masked, tokens = protect_all(original)

    # Reuse glossary / Argos pipeline on masked prose
    paragraphs = re.split(r"(\n\s*\n)", masked)
    out_parts: list[str] = []
    for part in paragraphs:
        if not part or part.isspace() or re.fullmatch(r"\n\s*\n", part or ""):
            out_parts.append(part)
            continue
        step = tr.rewrite_let_be(part)
        step = tr.apply_phrases(step)
        step = re.sub(r",\s*and\s+", " und ", step, flags=re.I)
        step = re.sub(r"\sand\s+", " und ", step, flags=re.I)
        step = tr.apply_words(step)
        if tr.needs_mt(step):
            chunks = re.split(r"(?<=[.!?])\s+|\n+", step)
            seps = re.findall(r"(?<=[.!?])\s+|\n+", step)
            rebuilt: list[str] = []
            for i, chunk in enumerate(chunks):
                if tr.needs_mt(chunk):
                    rebuilt.append(tr.translate_fragment(chunk))
                else:
                    rebuilt.append(chunk)
                if i < len(seps):
                    rebuilt.append(seps[i])
            step = "".join(rebuilt)
            step = tr.apply_words(step)
        step = tr.apply_post_fixes(step)
        out_parts.append(step)

    restored = restore_all("".join(out_parts), tokens)
    if PLACEHOLDER_RE.search(restored):
        return original
    if restored.count("$") != original.count("$"):
        return original
    if GARBLE_RE.search(restored):
        return original
    return restored


def field_broken(src: str | None, dst: str | None) -> bool:
    if src is None and dst is None:
        return False
    s = src or ""
    d = dst or ""
    if not s:
        return False
    if not d:
        return True
    if PLACEHOLDER_RE.search(d):
        return True
    if s.count("$") != d.count("$"):
        return True
    if GARBLE_RE.search(d):
        return True
    # mostly English still?
    if tr.needs_mt(d) and len(d) > 40:
        return True
    return False


def repair_overlay(src: dict, dst: dict) -> dict:
    out = dict(dst)
    # title always try safe translate if broken/english
    if field_broken(src.get("title"), out.get("title")) or tr.needs_mt(out.get("title") or ""):
        out["title"] = translate_safe(src.get("title")) or src.get("title")

    for field in ("context", "solution_overview"):
        if field_broken(src.get(field), out.get(field)):
            repaired = translate_safe(src.get(field))
            out[field] = repaired if repaired is not None else src.get(field)

    if src.get("statements"):
        stmts = list(out.get("statements") or src["statements"])
        while len(stmts) < len(src["statements"]):
            stmts.append(src["statements"][len(stmts)])
        for i, s in enumerate(src["statements"]):
            cur = stmts[i] if i < len(stmts) else None
            if field_broken(s, cur):
                stmts[i] = translate_safe(s) or s
        out["statements"] = stmts

    if src.get("tactical_explanations"):
        expl = list(out.get("tactical_explanations") or src["tactical_explanations"])
        while len(expl) < len(src["tactical_explanations"]):
            expl.append(src["tactical_explanations"][len(expl)])
        for i, s in enumerate(src["tactical_explanations"]):
            cur = expl[i] if i < len(expl) else None
            if field_broken(s, cur):
                expl[i] = translate_safe(s) or s
        out["tactical_explanations"] = expl

    return out


def main() -> None:
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 13
    for ch in range(start, end + 1):
        en_path = EN_DIR / f"ch{ch}.json"
        de_path = OUT_DIR / f"math-de-ch{ch}.json"
        if not en_path.exists() or not de_path.exists():
            print("skip missing", ch)
            continue
        en_list = json.loads(en_path.read_text())
        en_map = {t["id"]: t for t in en_list}
        de = json.loads(de_path.read_text())
        repaired = 0
        out: dict = {}
        for i, (tid, overlay) in enumerate(de.items(), 1):
            src = en_map.get(tid)
            if not src:
                out[tid] = overlay
                continue
            new_overlay = repair_overlay(src, overlay)
            if new_overlay != overlay:
                repaired += 1
            out[tid] = new_overlay
            if i % 20 == 0:
                print(f"ch{ch} [{i}/{len(de)}] repaired_so_far={repaired}", flush=True)
                de_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        # ensure all english ids present
        for tid, src in en_map.items():
            if tid not in out:
                out[tid] = repair_overlay(src, {})
                repaired += 1
        de_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        print(f"ch{ch} done repaired={repaired}/{len(out)}", flush=True)


if __name__ == "__main__":
    main()
