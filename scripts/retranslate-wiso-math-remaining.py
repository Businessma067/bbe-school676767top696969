#!/usr/bin/env python3
"""
Re-translate remaining English fields in WiSo math overlays.

Uses the English bank as source for any field that is still English / mostly
English, protects currency \\$ and KaTeX, and NEVER falls back to English —
broken math tokens trigger a sentence-level retry instead.

Usage:
  python3 scripts/retranslate-wiso-math-remaining.py [chapter]
  python3 scripts/retranslate-wiso-math-remaining.py 1 13
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

# Extra high-frequency exam phrases (applied before Argos).
EXTRA_PHRASES: list[tuple[str, str]] = [
    ("Evaluate each statement. Mark it TRUE or FALSE.", "Bewerte jede Aussage. Markiere sie mit WAHR oder FALSCH."),
    ("Evaluate each statement. Mark it True or False.", "Bewerte jede Aussage. Markiere sie mit Wahr oder Falsch."),
    ("Mark each statement TRUE or FALSE.", "Markiere jede Aussage mit WAHR oder FALSCH."),
    ("Mark each statement True or False.", "Markiere jede Aussage mit Wahr oder Falsch."),
    ("Mark it TRUE or FALSE.", "Markiere sie mit WAHR oder FALSCH."),
    ("Mark it True or False.", "Markiere sie mit Wahr oder Falsch."),
    ("Consider the following", "Betrachte Folgendes"),
    ("Which of the following", "Welche der folgenden"),
    ("So the statement is True.", "Die Aussage ist wahr."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("So the statement is true.", "Die Aussage ist wahr."),
    ("So the statement is false.", "Die Aussage ist falsch."),
    ("Topics:", "Themen:"),
    ("Shared solution:", "Gemeinsame Lösung:"),
    ("Learning objectives", "Lernziele"),
]

CURRENCY_RE = re.compile(r"\\\$")
DISPLAY_RE = re.compile(r"\$\$[\s\S]+?\$\$")
INLINE_RE = re.compile(r"(?<!\\)\$[^$\n]+?(?<!\\)\$")
PLACEHOLDER_RE = re.compile(r"⟦|⟧")
REPEAT_RE = re.compile(r"\b(\w{3,})\b(?:[\s,.-]+\1\b){3,}", re.I)
EN_MARK = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|been|"
    r"which|each|true|false|consider|following|evaluate|statement|given|find|"
    r"calculate|let|when|then|into|account|interest|deposit|owner|basic|"
    r"operations|explicit|so|claim|claims|substitute|expand|compute|because|"
    r"since|therefore|hence|thus|probability|derivative|equation|inequality)\b",
    re.I,
)
DE_MARK = re.compile(
    r"[äöüÄÖÜß]|\b(der|die|das|und|ist|von|mit|für|eine|ein|sind|wahr|falsch|"
    r"sei|seien|gegeben|berechnen|aussage|behauptung|betrachte|markiere|"
    r"bewerte|lösung|themen)\b",
    re.I,
)


def protect_all(text: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def keep(m: re.Match[str]) -> str:
        tokens.append(m.group(0))
        return f" ⟦T{len(tokens) - 1}⟧ "

    masked = CURRENCY_RE.sub(keep, text)
    masked = DISPLAY_RE.sub(keep, masked)
    masked = INLINE_RE.sub(keep, masked)
    return masked, tokens


def restore_all(text: str, tokens: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return tokens[i] if 0 <= i < len(tokens) else m.group(0)

    out = re.sub(r"\s*⟦T(\d+)⟧\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *([,.;:!?])", r"\1", out)
    out = re.sub(r" \n", "\n", out)
    return out.strip()


def is_englishish(text: str, src: str | None = None) -> bool:
    if not text or not str(text).strip():
        return False
    s = str(text)
    if src is not None and s == src:
        return True
    # Pure KaTeX / symbols — leave alone
    plain = re.sub(r"\$[^$]*\$", " ", s)
    plain = re.sub(r"\\[a-zA-Z]+", " ", plain)
    if not re.search(r"[A-Za-zÄÖÜäöüß]{3,}", plain):
        return False
    en = len(EN_MARK.findall(s))
    de = len(DE_MARK.findall(s))
    if en >= 3 and en > de * 1.2:
        return True
    if en >= 2 and de == 0 and re.search(r"[A-Za-z]{4,}", plain):
        return True
    return False


def is_broken(text: str, tokens: list[str]) -> bool:
    if PLACEHOLDER_RE.search(text):
        return True
    if REPEAT_RE.search(text):
        return True
    for tok in tokens:
        if tok.startswith("$$") and tok not in text:
            return True
    return False


def mt_block(step: str) -> str:
    """One Argos pass per block; split only when the block is very long."""
    if not tr.needs_mt(step):
        return step
    if len(step) <= 1800:
        return tr.translate_fragment(step)
    # Long explanations: paragraph first, then ~900-char slices.
    paragraphs = re.split(r"(\n\s*\n)", step)
    out: list[str] = []
    for part in paragraphs:
        if not part or part.isspace() or re.fullmatch(r"\n\s*\n", part or ""):
            out.append(part)
            continue
        if not tr.needs_mt(part):
            out.append(part)
            continue
        if len(part) <= 1800:
            out.append(tr.translate_fragment(part))
            continue
        # Slice on sentence boundaries approximately every 900 chars
        buf = ""
        pieces: list[str] = []
        for sent in re.split(r"(?<=[.!?])\s+", part):
            if len(buf) + len(sent) > 900 and buf:
                pieces.append(tr.translate_fragment(buf.strip()))
                buf = sent
            else:
                buf = f"{buf} {sent}".strip() if buf else sent
        if buf:
            pieces.append(tr.translate_fragment(buf.strip()))
        out.append(" ".join(pieces))
    return "".join(out)


def translate_piece(text: str) -> str:
    """Translate one prose chunk; never return English source on failure."""
    original = text
    masked, tokens = protect_all(original)
    step = masked
    for en, de in EXTRA_PHRASES:
        step = step.replace(en, de)
    step = tr.rewrite_let_be(step)
    step = tr.apply_phrases(step)
    step = re.sub(r",\s*and\s+", " und ", step, flags=re.I)
    step = re.sub(r"\sand\s+", " und ", step, flags=re.I)
    step = tr.apply_words(step)
    step = mt_block(step)
    step = tr.apply_words(step)
    step = tr.apply_post_fixes(step)
    step = re.sub(r"^Lass\b", "Es seien", step)
    step = re.sub(r"\bLass\b", "Es seien", step)
    restored = restore_all(step, tokens)

    if is_broken(restored, tokens):
        # Retry paragraph-by-paragraph with fresh protect
        parts = re.split(r"(\n\s*\n)", original)
        out: list[str] = []
        for part in parts:
            if not part or part.isspace() or re.fullmatch(r"\n\s*\n", part or ""):
                out.append(part)
                continue
            m2, tok2 = protect_all(part)
            p = tr.apply_phrases(tr.rewrite_let_be(m2))
            p = tr.apply_words(p)
            p = mt_block(p)
            p = tr.apply_post_fixes(tr.apply_words(p))
            r = restore_all(p, tok2)
            out.append(r if not PLACEHOLDER_RE.search(r) else part)
        restored = "".join(out)

    # Final post polish
    restored = re.sub(r"\bTRUE\b", "WAHR", restored)
    restored = re.sub(r"\bFALSE\b", "FALSCH", restored)
    restored = re.sub(r"→\s*True\b", "→ Wahr", restored)
    restored = re.sub(r"→\s*False\b", "→ Falsch", restored)
    return restored


def translate_field(text: str | None) -> str | None:
    if text is None:
        return None
    if not str(text).strip():
        return text
    return translate_piece(str(text))


def process_chapter(ch: int) -> dict:
    en_rows = {r["id"]: r for r in json.loads((EN_DIR / f"ch{ch}.json").read_text())}
    path = OUT_DIR / f"math-de-ch{ch}.json"
    de = json.loads(path.read_text()) if path.exists() else {}
    updated = 0
    scanned = 0

    for tid, src in en_rows.items():
        overlay = de.get(tid) or {}
        row = dict(overlay)

        for f in ("title", "context", "solution_overview"):
            src_val = src.get(f)
            cur = row.get(f, src_val)
            scanned += 1
            if src_val and is_englishish(cur or "", src_val):
                row[f] = translate_field(src_val)
                updated += 1
            elif f not in row and src_val:
                row[f] = translate_field(src_val)
                updated += 1

        for f in ("statements", "tactical_explanations"):
            src_arr = src.get(f) or []
            cur_arr = list(row.get(f) or src_arr)
            # normalize length to source
            while len(cur_arr) < len(src_arr):
                cur_arr.append(src_arr[len(cur_arr)])
            new_arr = []
            for i, src_item in enumerate(src_arr):
                cur_item = cur_arr[i] if i < len(cur_arr) else src_item
                scanned += 1
                if isinstance(src_item, str) and is_englishish(str(cur_item or ""), src_item):
                    new_arr.append(translate_field(src_item))
                    updated += 1
                else:
                    new_arr.append(cur_item)
            row[f] = new_arr

        de[tid] = row
        if updated and updated % 10 == 0:
            path.write_text(json.dumps(de, ensure_ascii=False, indent=2) + "\n")
            print(f"  checkpoint {tid}: updated={updated}", flush=True)

    path.write_text(json.dumps(de, ensure_ascii=False, indent=2) + "\n")
    return {"chapter": ch, "updated": updated, "scanned": scanned, "tasks": len(en_rows)}


def main() -> None:
    if len(sys.argv) == 2:
        start = end = int(sys.argv[1])
    elif len(sys.argv) >= 3:
        start, end = int(sys.argv[1]), int(sys.argv[2])
    else:
        start, end = 1, 13

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for ch in range(start, end + 1):
        print(f"=== Chapter {ch} ===", flush=True)
        info = process_chapter(ch)
        print(
            f"ch{ch}: updated {info['updated']} / scanned {info['scanned']} "
            f"({info['tasks']} tasks)",
            flush=True,
        )


if __name__ == "__main__":
    main()
