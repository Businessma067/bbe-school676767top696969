#!/usr/bin/env python3
"""
Safer German translation of BBE math theory markdown for WiSo.

- Protects fences, embeds, links, and KaTeX
- Translates paragraph-by-paragraph
- Detects Argos garble and retries sentence-wise; if still broken, keeps English
  for that paragraph only (better than nonsense German)

Usage:
  python3 scripts/translate-wiso-math-theory.py [start] [end]
"""

from __future__ import annotations

import importlib.util
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "src/data/math-theory"
OUT_DIR = ROOT / "src/data/wiso/math-theory"

spec = importlib.util.spec_from_file_location("tr", ROOT / "scripts/translate-wiso-math-full.py")
tr = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(tr)

HEADING_GLOSSARY = [
    ("Learning objectives", "Lernziele"),
    ("What this chapter covers", "Was dieses Kapitel abdeckt"),
    ("Quick recap", "Kurze Wiederholung"),
    ("Worked examples", "Ausgearbeitete Beispiele"),
    ("Common pitfalls", "Häufige Fehler"),
    ("Exam tips", "Prüfungstipps"),
    ("Definition", "Definition"),
    ("Theorem", "Satz"),
    ("Proposition", "Aussage"),
    ("Corollary", "Korollar"),
    ("Example", "Beispiel"),
    ("Remark", "Bemerkung"),
    ("Proof", "Beweis"),
    ("Solution", "Lösung"),
    ("Summary", "Zusammenfassung"),
    ("Logic and set theory", "Logik und Mengenlehre"),
    ("Elementary algebra", "Elementare Algebra"),
    ("Financial mathematics", "Finanzmathematik"),
    ("Linear equations in two unknowns", "Lineare Gleichungen mit zwei Unbekannten"),
    ("Linear and quadratic functions", "Lineare und quadratische Funktionen"),
    ("Power functions", "Potenzfunktionen"),
    ("Polynomial functions", "Polynomfunktionen"),
    ("Exponential and logarithmic functions", "Exponential- und Logarithmusfunktionen"),
    ("Differentiation and single-variable optimization", "Differenzialrechnung und Optimierung"),
    ("Standard probability", "Elementare Wahrscheinlichkeitsrechnung"),
    ("Binomial distribution", "Binomialverteilung"),
    ("Equations", "Gleichungen"),
    ("Inequalities", "Ungleichungen"),
]

FENCE_RE = re.compile(r"(```[\s\S]*?```)")
DISPLAY_RE = re.compile(r"\$\$[\s\S]+?\$\$")
INLINE_RE = re.compile(r"(?<!\\)\$[^$\n]+?(?<!\\)\$")
EMBED_RE = re.compile(r"\[\[(?:FIGURE:[^\]]+|NOTE:[^\]]+)\]\]")
LINK_RE = re.compile(r"(!?\[[^\]]*\]\([^)]+\))")
GARBLE_RE = re.compile(
    r"(vonzu|\bvon(?:\s+von){3,}\b|druck-|Nachschütten|fisch-fisch|Geararar|"
    r"⟦|⟧|zurechtgerückt Dann)",
    re.I,
)
EN_MARK = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|learning|objectives|"
    r"definition|example|theorem|chapter|consider)\b",
    re.I,
)


def protect(text: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def keep(m: re.Match[str]) -> str:
        tokens.append(m.group(0))
        return f" ⟦T{len(tokens) - 1}⟧ "

    masked = FENCE_RE.sub(keep, text)
    masked = EMBED_RE.sub(keep, masked)
    masked = LINK_RE.sub(keep, masked)
    masked = DISPLAY_RE.sub(keep, masked)
    masked = INLINE_RE.sub(keep, masked)
    return masked, tokens


def restore(text: str, tokens: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return tokens[i] if 0 <= i < len(tokens) else m.group(0)

    out = re.sub(r"\s*⟦T(\d+)⟧\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *\n", "\n", out)
    return out


def apply_headings(text: str) -> str:
    out = text
    for en, de in HEADING_GLOSSARY:
        out = re.sub(re.escape(en), de, out, flags=re.I)
    return out


def is_garbled(text: str) -> bool:
    if GARBLE_RE.search(text):
        return True
    if text.count(" von ") >= 8:
        return True
    return False


def translate_prose(text: str) -> str:
    """Translate a prose block; fall back to English if Argos garbles it."""
    if not text.strip():
        return text
    if not EN_MARK.search(text) and not tr.needs_mt(text):
        return apply_headings(text)

    masked, tokens = protect(text)
    step = apply_headings(masked)
    step = tr.rewrite_let_be(step)
    step = tr.apply_phrases(step)
    step = tr.apply_words(step)

    if tr.needs_mt(step) or EN_MARK.search(step):
        if len(step) <= 1200:
            step = tr.translate_fragment(step)
        else:
            chunks = re.split(r"(?<=[.!?])\s+", step)
            seps = re.findall(r"(?<=[.!?])\s+", step)
            rebuilt: list[str] = []
            for i, chunk in enumerate(chunks):
                if tr.needs_mt(chunk) or EN_MARK.search(chunk):
                    rebuilt.append(tr.translate_fragment(chunk))
                else:
                    rebuilt.append(chunk)
                if i < len(seps):
                    rebuilt.append(seps[i])
            step = "".join(rebuilt)
        step = tr.apply_words(step)

    step = tr.apply_post_fixes(step)
    out = restore(step, tokens).rstrip()

    if is_garbled(out) or "⟦" in out:
        # Retry sentence-by-sentence from original
        masked2, tokens2 = protect(text)
        parts = re.split(r"(?<=[.!?])\s+", masked2)
        seps = re.findall(r"(?<=[.!?])\s+", masked2)
        rebuilt = []
        for i, chunk in enumerate(parts):
            piece = apply_headings(chunk)
            piece = tr.apply_phrases(tr.rewrite_let_be(piece))
            piece = tr.apply_words(piece)
            if tr.needs_mt(piece) or EN_MARK.search(piece):
                piece = tr.translate_fragment(piece)
            piece = tr.apply_post_fixes(tr.apply_words(piece))
            if is_garbled(piece):
                piece = chunk  # keep English sentence
            rebuilt.append(piece)
            if i < len(seps):
                rebuilt.append(seps[i])
        out = restore("".join(rebuilt), tokens2).rstrip()
        if is_garbled(out):
            return apply_headings(text)  # last resort: English + German headings
    return out


def translate_markdown(text: str) -> str:
    lines = text.split("\n")
    out: list[str] = []
    in_fence = False
    buf: list[str] = []

    def flush():
        nonlocal buf
        if not buf:
            return
        # Preserve markdown prefix on first line (heading / list)
        block = "\n".join(buf)
        first = buf[0]
        prefix_m = re.match(r"^(\s*#{1,6}\s*|\s*[-*+]\s*|\s*\d+\.\s*|\s*\|)", first)
        if prefix_m and len(buf) == 1:
            prefix = prefix_m.group(1)
            body = first[len(prefix) :]
            out.append(prefix + translate_prose(body))
        else:
            out.append(translate_prose(block))
        buf = []

    for line in lines:
        if line.strip().startswith("```"):
            flush()
            in_fence = not in_fence
            out.append(line)
            continue
        if in_fence:
            out.append(line)
            continue
        if not line.strip():
            flush()
            out.append(line)
            continue
        # Flush before new headings
        if re.match(r"^\s*#{1,6}\s+", line) and buf:
            flush()
        buf.append(line)
    flush()
    result = "\n".join(out)
    if not result.endswith("\n"):
        result += "\n"
    return result


def main() -> None:
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 13
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for ch in range(start, end + 1):
        src = SRC_DIR / f"ch{ch}.md"
        dst = OUT_DIR / f"ch{ch}.md"
        print(f"=== Theory ch{ch} ({src.stat().st_size} bytes) ===", flush=True)
        # Always translate from English source
        de = translate_markdown(src.read_text(encoding="utf-8"))
        dst.write_text(de, encoding="utf-8")
        print(f"wrote {dst} ({len(de)} chars)", flush=True)


if __name__ == "__main__":
    main()
