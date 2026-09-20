#!/usr/bin/env python3
"""MT pass for ch12-p01 tactical explanations; KaTeX protected."""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

import requests

ROOT = Path(__file__).resolve().parents[3]
PACK = ROOT / "textbook/output/wiso_math_retranslate/ch12-p01.json"
OUT = ROOT / "textbook/output/wiso_math_retranslate/_ch12_p01_mt.json"
CACHE = ROOT / "textbook/output/wiso_math_retranslate/_ch12_p01_mt_cache.json"

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$)")

PHRASES = [
    ("So the statement is True.", "Die Aussage ist wahr."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("So the statement is true.", "Die Aussage ist wahr."),
    ("So the statement is false.", "Die Aussage ist falsch."),
    ("→ True", "→ Richtig"),
    ("→ False", "→ Falsch"),
    ("-> True", "→ Richtig"),
    ("-> False", "→ Falsch"),
    ("Expressed as a percentage, this is approximately", "Als Prozentangabe ist das näherungsweise"),
    ("As a percentage, this is approximately", "Als Prozentangabe ist das näherungsweise"),
    ("The claim states that", "Die Behauptung besagt, dass"),
    ("The claim states", "Die Behauptung besagt"),
    ("This statement asks for", "Diese Aussage fragt nach"),
    ("This statement asks to", "Diese Aussage verlangt,"),
    ("This statement compares", "Diese Aussage vergleicht"),
    ("This statement asserts that", "Diese Aussage behauptet, dass"),
    ("solution overview", "Lösungsübersicht"),
    ("sample space", "Ergebnisraum"),
    ("combination formula", "Kombinationsformel"),
    ("combinations", "Kombinationen"),
    ("combination", "Kombination"),
    ("probability", "Wahrscheinlichkeit"),
    ("Probability", "Wahrscheinlichkeit"),
    ("expected value", "Erwartungswert"),
    ("Expected value", "Erwartungswert"),
    ("conditional", "bedingt"),
    ("condition", "Bedingung"),
    ("Condition", "Bedingung"),
    ("complementary event", "Komplementärereignis"),
    ("favorable outcomes", "günstige Ergebnisse"),
    ("at random", "zufällig"),
]


def protect(text: str) -> tuple[str, list[str]]:
    toks: list[str] = []

    def repl(m: re.Match[str]) -> str:
        toks.append(m.group(0))
        return f" ZZTOK{len(toks) - 1}ZZ "

    return KATEX_RE.sub(repl, text), toks


def restore(text: str, toks: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        return toks[int(m.group(1))]

    out = re.sub(r"\s*ZZTOK(\d+)ZZ\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]+\n", "\n", out)
    out = re.sub(r"\n[ \t]+", "\n", out)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = out.replace("—", "-")
    return out.strip() + ("\n" if text.endswith("\n") else "")


def apply_phrases(text: str) -> str:
    out = text
    for en, de in sorted(PHRASES, key=lambda p: len(p[0]), reverse=True):
        out = out.replace(en, de)
    return out


def mt_google(text: str) -> str:
    """Unofficial Google translate endpoint."""
    if not text.strip() or not re.search(r"[A-Za-z]", text):
        return text
    url = "https://translate.googleapis.com/translate_a/single"
    params = {"client": "gtx", "sl": "en", "tl": "de", "dt": "t", "q": text}
    r = requests.get(url, params=params, timeout=60)
    r.raise_for_status()
    data = r.json()
    return "".join(part[0] for part in data[0] if part and part[0])


def translate_one(en: str, cache: dict[str, str]) -> str:
    if en in cache:
        return cache[en]
    masked, toks = protect(en)
    step = apply_phrases(masked)
    # Translate paragraph-ish chunks to keep context
    parts = re.split(r"(\n\n+)", step)
    out_parts: list[str] = []
    for part in parts:
        if not part or part.isspace() or re.fullmatch(r"\n+", part):
            out_parts.append(part)
            continue
        if not re.search(r"[A-Za-z]", part):
            out_parts.append(part)
            continue
        # Already mostly German after phrases?
        if not re.search(
            r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|"
            r"which|each|true|false|statement|claim|probability|committee|"
            r"calculate|number|ways|total|given|using|then|than|more|less|"
            r"first|next|compare|divide|subtract|matches|exactly)\b",
            part,
            re.I,
        ):
            out_parts.append(part)
            continue
        try:
            de = mt_google(part)
            time.sleep(0.15)
        except Exception as e:
            print("MT fail:", e)
            de = part
        out_parts.append(de)
    merged = "".join(out_parts)
    merged = apply_phrases(merged)
    # Fix headers if MT mangled
    merged = re.sub(r"\*\*([A-E])\.\*\*\s*→\s*(True|Wahr|Richtig)", r"**\1.** → Richtig", merged, flags=re.I)
    merged = re.sub(r"\*\*([A-E])\.\*\*\s*→\s*(False|Falsch)", r"**\1.** → Falsch", merged, flags=re.I)
    merged = merged.replace("—", "-")
    result = restore(merged, toks)
    # Force closers from English truth if present
    if en.rstrip().endswith("So the statement is True.") or "So the statement is True." in en:
        result = re.sub(r"(Die Aussage ist (wahr|falsch|richtig)\.?|So the statement is True\.)\s*$", "Die Aussage ist wahr.", result.strip(), flags=re.I) + "\n"
    if en.rstrip().endswith("So the statement is False.") or "So the statement is False." in en:
        result = re.sub(r"(Die Aussage ist (wahr|falsch|richtig)\.?|So the statement is False\.)\s*$", "Die Aussage ist falsch.", result.strip(), flags=re.I) + "\n"
    cache[en] = result
    return result


def main() -> None:
    pack = json.loads(PACK.read_text(encoding="utf-8"))
    cache: dict[str, str] = {}
    if CACHE.exists():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))
    out_rows = []
    for c in pack:
        cid = c["case_id"]
        print("CASE", cid)
        expl = []
        for i, en in enumerate(c["tactical_explanations_en"]):
            print(f"  {chr(65+i)} len={len(en)}")
            de = translate_one(en, cache)
            # enforce closer vs answer_key
            want = "wahr" if c["answer_key"][i] else "falsch"
            header = "Richtig" if c["answer_key"][i] else "Falsch"
            de = re.sub(rf"^\*\*{chr(65+i)}\.\*\*\s*→\s*\w+", f"**{chr(65+i)}.** → {header}", de)
            de = re.sub(r"Die Aussage ist (wahr|falsch|richtig)\.\s*$", f"Die Aussage ist {want}.", de.strip(), flags=re.I) + "\n"
            expl.append(de)
            CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
        out_rows.append({"case_id": cid, "answer_key": c["answer_key"], "tactical_explanations": expl})
    OUT.write_text(json.dumps(out_rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote", OUT)


if __name__ == "__main__":
    main()
