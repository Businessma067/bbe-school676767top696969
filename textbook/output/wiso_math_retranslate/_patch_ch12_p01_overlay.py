#!/usr/bin/env python3
"""Post-fix MT German and patch live overlay math-de-ch12.json."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(".")
PACK = ROOT / "textbook/output/wiso_math_retranslate/ch12-p01.json"
MT = ROOT / "textbook/output/wiso_math_retranslate/_ch12_p01_mt.json"
OVERLAY = ROOT / "src/data/wiso/math-de-ch12.json"
REPORT = ROOT / "textbook/output/wiso_math_retranslate/_ch12_p01_patch_report.txt"

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$)")

# Post-MT German cleanup (prose only after KaTeX protect)
PROSE_FIXES: list[tuple[str, str]] = [
    (r"\bWahrheit\b", "Wahrscheinlichkeit"),  # rare MT bleed
    (r"\bKomitee\b", "Ausschuss"),
    (r"\bKomitees\b", "Ausschüsse"),
    (r"\bAusschussmitglieder\b", "Ausschussmitglieder"),
    (r"\bErwartungswert\b", "Erwartungswert"),
    (r"\bKombination\b", "Kombination"),
    (r"\bBedingung\b", "Bedingung"),
    (r"\bWahrscheinlichkeit\b", "Wahrscheinlichkeit"),
    (r"\bLösungsübersicht\b", "Lösungsübersicht"),
    (r"\bDie Aussage ist richtig\.", "Die Aussage ist wahr."),
    (r"\bDie Aussage ist Richtig\.", "Die Aussage ist wahr."),
    (r"\bDie Aussage ist Falsch\.", "Die Aussage ist falsch."),
    (r"—", "-"),
    (r"–", "-"),
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
    return out.strip() + "\n"


def extract_katex(text: str) -> list[str]:
    return KATEX_RE.findall(text)


def polish(de: str, letter: str, is_true: bool) -> str:
    masked, toks = protect(de)
    for pat, repl in PROSE_FIXES:
        masked = re.sub(pat, repl, masked)
    header = "Richtig" if is_true else "Falsch"
    closer = "wahr" if is_true else "falsch"
    masked = re.sub(
        rf"^\*\*{letter}\.\*\*\s*→\s*\S+",
        f"**{letter}.** → {header}",
        masked,
    )
    out = restore(masked, toks)
    out = re.sub(
        r"Die Aussage ist (wahr|falsch|richtig)\.\s*$",
        f"Die Aussage ist {closer}.",
        out.strip(),
        flags=re.I,
    )
    if not out.endswith(f"Die Aussage ist {closer}."):
        out = out.rstrip() + f"\n\nDie Aussage ist {closer}."
    return out + "\n"


def main() -> None:
    pack = json.loads(PACK.read_text(encoding="utf-8"))
    rows = json.loads(MT.read_text(encoding="utf-8"))
    overlay = json.loads(OVERLAY.read_text(encoding="utf-8"))
    report: list[str] = []
    updated = 0
    for row, src in zip(rows, pack):
        cid = row["case_id"]
        assert cid == src["case_id"]
        polished = []
        for i, de in enumerate(row["tactical_explanations"]):
            letter = chr(65 + i)
            is_true = bool(row["answer_key"][i])
            de2 = polish(de, letter, is_true)
            en_k = extract_katex(src["tactical_explanations_en"][i])
            de_k = extract_katex(de2)
            if en_k != de_k:
                report.append(f"{cid} {letter}: KaTeX mismatch count en={len(en_k)} de={len(de_k)}")
                # restore exact KaTeX from EN by position if counts match
                if len(en_k) == len(de_k):
                    # rebuild: protect DE prose structure but force EN katex
                    masked, toks = protect(de2)
                    if len(toks) == len(en_k):
                        toks = list(en_k)
                        de2 = restore(masked, toks)
                        de2 = polish(de2, letter, is_true)
                        de_k = extract_katex(de2)
                        if en_k != de_k:
                            report.append(f"{cid} {letter}: KaTeX still mismatch after force")
            polished.append(de2)
        if cid not in overlay:
            overlay[cid] = {}
            report.append(f"{cid}: created missing overlay entry")
        overlay[cid]["tactical_explanations"] = polished
        updated += 1
    OVERLAY.write_text(json.dumps(overlay, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    report.insert(0, f"updated {updated} cases in {OVERLAY}")
    REPORT.write_text("\n".join(report) + "\n", encoding="utf-8")
    print("\n".join(report[:40]))
    print("done")


if __name__ == "__main__":
    main()
