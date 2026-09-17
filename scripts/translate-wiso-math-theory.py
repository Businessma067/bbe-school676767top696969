#!/usr/bin/env python3
"""
Translate BBE math theory markdown guides to German for WiSo.

Protects fenced code, KaTeX ($...$ / $$...$$), and [[FIGURE:...]] / [[NOTE:...]]
embeds. Writes to src/data/wiso/math-theory/chN.md

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


def translate_line(line: str) -> str:
    raw = line
    # Keep pure separators / empty
    if not raw.strip():
        return raw
    if re.fullmatch(r"[-*_]{3,}\s*", raw.strip()):
        return raw

    leading = re.match(r"^(\s*#{1,6}\s*|\s*[-*+]\s*|\s*\d+\.\s*)", raw)
    prefix = leading.group(1) if leading else ""
    body = raw[len(prefix) :] if leading else raw

    for en, de in HEADING_GLOSSARY:
        body = re.sub(re.escape(en), de, body, flags=re.I)

    masked, tokens = protect(body)
    step = tr.rewrite_let_be(masked)
    step = tr.apply_phrases(step)
    step = tr.apply_words(step)
    if tr.needs_mt(step):
        # Split long lines into clauses
        chunks = re.split(r"(?<=[.:;!?])\s+", step)
        seps = re.findall(r"(?<=[.:;!?])\s+", step)
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
    body_out = restore(step, tokens).rstrip()
    # Preserve original trailing newline structure via caller
    return prefix + body_out


def translate_markdown(text: str) -> str:
    lines = text.split("\n")
    out: list[str] = []
    in_fence = False
    buf: list[str] = []

    def flush_buf():
        nonlocal buf
        if not buf:
            return
        block = "\n".join(buf)
        # Translate paragraph blocks for better Argos context when short
        if len(block) < 800 and "\n" not in block.strip():
            out.append(translate_line(block))
        else:
            for line in buf:
                out.append(translate_line(line))
        buf = []

    for line in lines:
        if line.strip().startswith("```"):
            flush_buf()
            in_fence = not in_fence
            out.append(line)
            continue
        if in_fence:
            out.append(line)
            continue
        if not line.strip():
            flush_buf()
            out.append(line)
            continue
        buf.append(line)
    flush_buf()
    result = "\n".join(out)
    # Ensure file ends with newline
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
        de = translate_markdown(src.read_text(encoding="utf-8"))
        dst.write_text(de, encoding="utf-8")
        print(f"wrote {dst} ({len(de)} chars)", flush=True)


if __name__ == "__main__":
    main()
