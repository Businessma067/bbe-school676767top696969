#!/usr/bin/env python3
"""Re-translate ch12-p01 with segment-preserving KaTeX; patch overlay."""
from __future__ import annotations

import json
import re
import time
from pathlib import Path

import requests

PACK = Path("textbook/output/wiso_math_retranslate/ch12-p01.json")
OVERLAY = Path("src/data/wiso/math-de-ch12.json")
CACHE = Path("textbook/output/wiso_math_retranslate/_ch12_p01_seg_cache.json")
OUT = Path("textbook/output/wiso_math_retranslate/_ch12_p01_seg.json")

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$)")

PHRASES = [
    ("So the statement is True.", "Die Aussage ist wahr."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("So the statement is true.", "Die Aussage ist wahr."),
    ("So the statement is false.", "Die Aussage ist falsch."),
    ("→ True", "→ Richtig"),
    ("→ False", "→ Falsch"),
    ("Expressed as a percentage, this is approximately", "Als Prozentangabe ist das näherungsweise"),
    ("Converting this to a percentage, the probability is approximately", "Umgerechnet in Prozent beträgt die Wahrscheinlichkeit näherungsweise"),
    ("The claim states that", "Die Behauptung besagt, dass"),
    ("The statement claims this probability is", "Die Aussage behauptet, diese Wahrscheinlichkeit sei"),
    ("The statement claims", "Die Aussage behauptet"),
    ("This statement asks for the", "Diese Aussage fragt nach der"),
    ("This statement asks for", "Diese Aussage fragt nach"),
    ("This statement asks to compare", "Diese Aussage verlangt den Vergleich"),
    ("This statement asks if", "Diese Aussage fragt, ob"),
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
    ("conditional probability", "bedingte Wahrscheinlichkeit"),
    ("condition", "Bedingung"),
    ("complementary event", "Komplementärereignis"),
    ("favorable outcomes", "günstige Ergebnisse"),
    ("at random", "zufällig"),
    ("committee", "Ausschuss"),
    ("committees", "Ausschüsse"),
    ("full house", "Full House"),
    ("four of a kind", "Vierling"),
    ("two pair", "Zwei Paare"),
    ("flush", "Flush"),
]


def split_segments(text: str) -> list[tuple[str, str]]:
    """Return list of (kind, chunk) where kind in {'text','math'}."""
    parts: list[tuple[str, str]] = []
    last = 0
    for m in KATEX_RE.finditer(text):
        if m.start() > last:
            parts.append(("text", text[last : m.start()]))
        parts.append(("math", m.group(0)))
        last = m.end()
    if last < len(text):
        parts.append(("text", text[last:]))
    return parts


def apply_phrases(text: str) -> str:
    out = text
    for en, de in sorted(PHRASES, key=lambda p: len(p[0]), reverse=True):
        out = out.replace(en, de)
    return out


def needs_mt(text: str) -> bool:
    return bool(
        re.search(
            r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|"
            r"which|each|statement|claim|calculate|number|ways|total|given|using|"
            r"then|than|more|less|first|next|compare|divide|matches|exactly|"
            r"people|members|hand|cards|deck|select|selected|formed|form|"
            r"probability|combination|expected|condition|True|False|So the|"
            r"asks|asserts|compares|determined|provided|calculated|approx)\b",
            text,
            re.I,
        )
    )


def mt_google(text: str) -> str:
    if not text.strip() or not re.search(r"[A-Za-z]", text):
        return text
    url = "https://translate.googleapis.com/translate_a/single"
    params = {"client": "gtx", "sl": "en", "tl": "de", "dt": "t", "q": text}
    r = requests.get(url, params=params, timeout=60)
    r.raise_for_status()
    data = r.json()
    return "".join(part[0] for part in data[0] if part and part[0])


def translate_text_chunk(text: str, cache: dict[str, str]) -> str:
    if text in cache:
        return cache[text]
    step = apply_phrases(text)
    if needs_mt(step):
        try:
            step = mt_google(step)
            time.sleep(0.12)
        except Exception as e:
            print("MT fail", e)
    step = apply_phrases(step)
    step = step.replace("—", "-").replace("–", "-")
    # common MT artifacts
    step = step.replace("Diese Anweisung", "Diese Aussage")
    step = step.replace("Die Anweisung", "Die Aussage")
    cache[text] = step
    return step


def translate_explanation(en: str, letter: str, is_true: bool, cache: dict[str, str]) -> str:
    segs = split_segments(en)
    out: list[str] = []
    for kind, chunk in segs:
        if kind == "math":
            out.append(chunk)  # identical KaTeX
        else:
            out.append(translate_text_chunk(chunk, cache))
    de = "".join(out)
    header = "Richtig" if is_true else "Falsch"
    closer = "wahr" if is_true else "falsch"
    de = re.sub(rf"^\*\*{letter}\.\*\*\s*→\s*\S+", f"**{letter}.** → {header}", de)
    de = de.replace("—", "-").replace("–", "-")
    de = re.sub(
        r"(Die Aussage ist (wahr|falsch|richtig)\.|So the statement is (True|False)\.)\s*$",
        f"Die Aussage ist {closer}.",
        de.strip(),
        flags=re.I,
    )
    if not de.endswith(f"Die Aussage ist {closer}."):
        de = de.rstrip() + f"\n\nDie Aussage ist {closer}."
    return de + "\n"


def main() -> None:
    pack = json.loads(PACK.read_text(encoding="utf-8"))
    cache: dict[str, str] = {}
    if CACHE.exists():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))
    rows = []
    for c in pack:
        cid = c["case_id"]
        print("CASE", cid, flush=True)
        expl = []
        for i, en in enumerate(c["tactical_explanations_en"]):
            letter = chr(65 + i)
            print(f"  {letter}", flush=True)
            de = translate_explanation(en, letter, bool(c["answer_key"][i]), cache)
            # verify katex identity
            en_k = KATEX_RE.findall(en)
            de_k = KATEX_RE.findall(de)
            if en_k != de_k:
                raise SystemExit(f"KaTeX mismatch {cid} {letter}")
            expl.append(de)
            CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
        rows.append({"case_id": cid, "answer_key": c["answer_key"], "tactical_explanations": expl})
    OUT.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
    for row in rows:
        overlay[row["case_id"]]["tactical_explanations"] = row["tactical_explanations"]
    OVERLAY.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("patched", OVERLAY)


if __name__ == "__main__":
    main()
