#!/usr/bin/env python3
"""
QA-fix WiSo math DE overlay Chapter 4 (Gleichungen).

Uses MyMemory HTTP API + glossary. Rewrites fields that are garbled,
English-heavy, or have $ mismatches vs EN. Saves every 5 tasks.
Preserves DE-only orphans (4.165, 4.215) with polish only.
"""

from __future__ import annotations

import hashlib
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path("/workspace")
DE_PATH = ROOT / "src/data/wiso/math-de-ch4.json"
EN_PATH = Path("/tmp/wiso-math-en/ch4.json")
CACHE_PATH = Path("/tmp/wiso-math-qa-ch4-mt-cache.json")
PROGRESS = Path("/tmp/wiso-math-qa-ch4-progress.json")
REPORT = Path("/tmp/wiso-math-qa-ch4-report.md")

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$)")

PHRASES: list[tuple[str, str]] = sorted(
    [
        (
            "Evaluate each statement. Mark it TRUE or FALSE.",
            "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.",
        ),
        (
            "Evaluate each statement. Mark it True or False.",
            "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.",
        ),
        (
            "Mark each statement TRUE or FALSE.",
            "Markiere jede Aussage mit Richtig oder Falsch.",
        ),
        (
            "Mark each statement True or False.",
            "Markiere jede Aussage mit Richtig oder Falsch.",
        ),
        ("Mark it TRUE or FALSE.", "Markiere sie mit Richtig oder Falsch."),
        ("Mark it True or False.", "Markiere sie mit Richtig oder Falsch."),
        ("So the statement is True.", "Die Aussage ist richtig."),
        ("So the statement is False.", "Die Aussage ist falsch."),
        ("So the statement is true.", "Die Aussage ist richtig."),
        ("So the statement is false.", "Die Aussage ist falsch."),
        ("The statement is true.", "Die Aussage ist richtig."),
        ("The statement is false.", "Die Aussage ist falsch."),
        ("→ True", "→ Richtig"),
        ("→ False", "→ Falsch"),
        ("left-hand side", "linke Seite"),
        ("right-hand side", "rechte Seite"),
        ("infinitely many solutions", "unendlich viele Lösungen"),
        ("no solution", "keine Lösung"),
        ("real number", "reelle Zahl"),
        ("real numbers", "reelle Zahlen"),
        ("real value", "reeller Wert"),
        ("real values", "reelle Werte"),
        ("real root", "reelle Wurzel"),
        ("real roots", "reelle Wurzeln"),
        ("real solution", "reelle Lösung"),
        ("real solutions", "reelle Lösungen"),
        ("integer solution", "ganzzahlige Lösung"),
        ("integer solutions", "ganzzahlige Lösungen"),
        ("absolute value", "Absolutbetrag"),
        ("Absolute value", "Absolutbetrag"),
        ("absolute-value", "Absolutbetrag"),
        ("quadratic equation", "quadratische Gleichung"),
        ("linear equation", "lineare Gleichung"),
        ("parametric linear", "parametrische lineare"),
        ("parametric", "parametrisch"),
        ("discriminant", "Diskriminante"),
        ("completing the square", "quadratische Ergänzung"),
        ("half-life", "Halbwertszeit"),
        ("Half-life", "Halbwertszeit"),
        ("doubling time", "Verdopplungszeit"),
        ("natural logarithm", "natürlicher Logarithmus"),
        ("common denominator", "gemeinsamer Nenner"),
        ("clearing the denominators", "Beseitigen der Nenner"),
        ("We begin by", "Wir beginnen damit,"),
        ("We analyze", "Wir analysieren"),
        ("We define", "Wir definieren"),
        ("We have", "Wir haben"),
        ("Multiplying", "Multiplikation von"),
        ("Topics:", "Themen:"),
        ("**Part 1:", "**Teil 1:"),
        ("**Part 2:", "**Teil 2:"),
        ("**Answer.**", "**Antwort.**"),
        ("Hence ", "Daher "),
        ("Thus ", "Somit "),
        ("Therefore ", "Daher "),
        ("Because ", "Weil "),
        ("Let ", "Es seien "),
        ("the unknown", "die Unbekannte"),
        ("the parameter", "der Parameter"),
        ("identity", "Identität"),
        ("extraneous", "außerwesentlich"),
        ("nonnegative", "nichtnegativ"),
        ("admissible", "zulässig"),
        ("Definitionsbereich", "Definitionsbereich"),
    ],
    key=lambda x: -len(x[0]),
)

DE_FIXES: list[tuple[str, str]] = [
    ("Markieren Sie es Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere es Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere sie mit Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere sie als wahr oder falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Bewerten Sie jede Aussage.", "Bewerte jede Aussage."),
    ("→ Wahr", "→ Richtig"),
    ("Die Aussage ist wahr.", "Die Aussage ist richtig."),
    ("Die Aussage ist also wahr.", "Die Aussage ist richtig."),
    ("dem Anspruch", "der Behauptung"),
    ("Der Anspruch", "Die Behauptung"),
    ("den Anspruch", "die Behauptung"),
    ("des Anspruchs", "der Behauptung"),
    ("realen Wert", "reellen Wert"),
    ("realen Werte", "reelle Werte"),
    ("reale Zahl", "reelle Zahl"),
    ("reale Zahlen", "reelle Zahlen"),
    ("reale Lösung", "reelle Lösung"),
    ("reale Lösungen", "reelle Lösungen"),
    ("reale Wurzel", "reelle Wurzel"),
    ("reale Wurzeln", "reelle Wurzeln"),
    ("wirklichen Lösungen", "reelle Lösungen"),
    ("wirkliche Lösungen", "reelle Lösungen"),
    ("echten Wert", "reellen Wert"),
    ("echte Lösungen", "reelle Lösungen"),
    ("Domäne", "Definitionsbereich"),
    ("Logbuch", "natürlicher Logarithmus"),
    ("Protokoll", "Logarithmus"),
    ("Verbriefung", "Behauptung"),
    ("Umstand", "Fall"),
    ("Multiplizieren Sie", "Multipliziere"),
    ("Beseitigen Sie", "Beseitige"),
    ("Betrachten Sie", "Betrachte"),
    ("Lassen Sie", "Es seien"),
    ("für die die", "für die"),
    ("vom vom", "vom"),
]

GARBLE = re.compile(
    r"ausgaben|aufzu|ihn gäbe|Zigarettenreich|richtigen richtigen|dauerzeit|pausen|"
    r"vom vom|mittelte|Schließe We|Grund: plötzlich|für die die|Umstand|Protokoll|"
    r"Verbriefung|Logbuch|Endkunden|morrize|Domäne|wirklichen Lösungen|echten Wert|"
    r"lassen \$|Gefahr Gefahr|anrei|gesamtheitlich|Dienen Dienen|TEIL TEIL|"
    r"connect|Iso-Iso|Nur-Nur|Gesenk|eribel|Derfleisch|⟦|⟧|aufzuausgaben|"
    r"Zeuge richtigen|Gebausgaben|wessen sich|Kreuzung vom Ende|"
    r"Art und Anzahl der realen|Multiplizieren Sie|Bewerbung|Bekanntgabe|"
    r"Mehrwertsteuer|Article\b",
    re.I,
)

EN_MARK = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|"
    r"which|each|true|false|consider|evaluate|statement|given|let|claim|"
    r"because|therefore|hence|thus|equation|solve|solving|we|when|then|"
    r"multiplying|gives|grouping|terms|containing|unknown|admissible|"
    r"identity|satisfied|exclude|splitting|nonnegative|auxiliary|"
    r"completing|denote|modeled|decreases|parameter|infinitely|many|"
    r"solutions|clearing|common|denominator|exactly|real|value|values)\b",
    re.I,
)

DE_MARK = re.compile(
    r"[äöüÄÖÜß]|\b(der|die|das|und|ist|von|mit|für|eine|ein|sind|wahr|falsch|"
    r"richtig|aussage|behauptung|gleichung|lösung|sei|gegeben|parameter)\b",
    re.I,
)


def protect(text: str) -> tuple[str, list[str]]:
    toks: list[str] = []

    def repl(m: re.Match[str]) -> str:
        toks.append(m.group(0))
        return f" ZZTOK{len(toks) - 1}ZZ "

    # protect currency first
    text2 = re.sub(r"\\\$", lambda m: repl(m), text)
    return KATEX_RE.sub(repl, text2), toks


def restore(text: str, toks: list[str]) -> str:
    out = re.sub(r"\s*ZZTOK(\d+)ZZ\s*", lambda m: f" {toks[int(m.group(1))]} ", text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *([,.;:!?])", r"\1", out)
    out = re.sub(r" \n", "\n", out)
    out = re.sub(r"\n ", "\n", out)
    return out.strip()


def apply_phrases(text: str) -> str:
    out = text
    for a, b in PHRASES:
        out = out.replace(a, b)
    return out


def apply_de_fixes(text: str) -> str:
    out = text
    for a, b in DE_FIXES:
        out = out.replace(a, b)
    out = re.sub(r"\b([A-Za-zÄÖÜäöüß]{4,})\s+\1\b", r"\1", out)
    out = re.sub(r",{3,}", ",", out)
    out = re.sub(r"[ \t]{2,}", " ", out)
    return out


def needs_mt(text: str) -> bool:
    plain = re.sub(r"ZZTOK\d+ZZ", " ", text)
    if not re.search(r"[A-Za-z]{4,}", plain):
        return False
    return len(EN_MARK.findall(plain)) >= 2


def field_needs_rewrite(cur: str | None, src: str | None) -> bool:
    if not src or not str(src).strip():
        return False
    if cur is None or not str(cur).strip():
        return True
    s = str(cur)
    if GARBLE.search(s):
        return True
    if s.count("$") != str(src).count("$"):
        return True
    plain = re.sub(r"\$\$[\s\S]+?\$\$", " ", s)
    plain = re.sub(r"\$[^$]*\$", " ", plain)
    en = len(EN_MARK.findall(plain))
    de = len(DE_MARK.findall(plain))
    if en >= 3 and en > de:
        return True
    if re.search(r"\$[^$\n]{1,40}\$[A-ZÄÖÜ]", s):
        return True
    return False


class MT:
    def __init__(self) -> None:
        self.cache: dict[str, str] = {}
        if CACHE_PATH.exists():
            self.cache = json.loads(CACHE_PATH.read_text())
        self.calls = 0

    def save(self) -> None:
        CACHE_PATH.write_text(json.dumps(self.cache, ensure_ascii=False, indent=2) + "\n")

    def _key(self, s: str) -> str:
        return hashlib.sha1(s.encode()).hexdigest()

    def translate(self, chunk: str) -> str:
        chunk = chunk.strip()
        if not chunk:
            return chunk
        k = self._key(chunk)
        if k in self.cache:
            return self.cache[k]
        if chunk in self.cache:
            return self.cache[chunk]
        if len(chunk) > 450:
            parts = re.split(r"(?<=[.!?])\s+", chunk)
            out, buf = [], ""
            for p in parts:
                if len(buf) + len(p) + 1 > 450 and buf:
                    out.append(self.translate(buf))
                    buf = p
                else:
                    buf = f"{buf} {p}".strip() if buf else p
            if buf:
                out.append(self.translate(buf))
            result = " ".join(out)
            self.cache[k] = result
            return result

        url = (
            "https://api.mymemory.translated.net/get?q="
            + urllib.parse.quote(chunk)
            + "&langpair=en|de"
        )
        for attempt in range(10):
            try:
                time.sleep(0.35 + 0.25 * attempt)
                with urllib.request.urlopen(url, timeout=30) as resp:
                    data = json.loads(resp.read().decode())
                result = (data.get("responseData") or {}).get("translatedText") or ""
                status = data.get("responseStatus")
                if status and int(status) != 200:
                    raise RuntimeError(f"status {status}: {result[:120]}")
                if not result.strip():
                    raise RuntimeError("empty translation")
                # MyMemory sometimes echoes EN when quota low
                if result.strip() == chunk.strip() and len(EN_MARK.findall(chunk)) >= 2:
                    raise RuntimeError("echoed English")
                self.calls += 1
                self.cache[k] = result
                if self.calls % 15 == 0:
                    self.save()
                    print(f"  MT calls={self.calls} cache={len(self.cache)}", flush=True)
                return result
            except Exception as e:
                wait = min(45, 2**attempt)
                print(f"  MT retry {attempt + 1}: {e}; sleep {wait}s", flush=True)
                time.sleep(wait)
        print(f"  MT FAIL leave EN: {chunk[:100]}", flush=True)
        self.cache[k] = chunk
        return chunk


def translate_text(text: str, mt: MT) -> str:
    if not text or not str(text).strip():
        return text
    masked, toks = protect(str(text))
    step = apply_phrases(masked)
    if needs_mt(step):
        lines = step.split("\n")
        rebuilt = []
        for line in lines:
            if needs_mt(line):
                rebuilt.append(mt.translate(line))
            else:
                rebuilt.append(line)
        step = "\n".join(rebuilt)
        step = apply_phrases(step)
    step = restore(step, toks)
    step = apply_de_fixes(step)
    return step.strip()


def normalize_verdicts(expls: list[str], answers: list) -> list[str]:
    out = []
    for i, expl in enumerate(expls):
        ans = bool(answers[i]) if i < len(answers) else None
        letter = chr(ord("A") + i)
        if ans is not None:
            expl = re.sub(
                rf"\*\*{letter}\.\*\*\s*→\s*(Richtig|Falsch|Wahr|True|False)",
                f"**{letter}.** → {'Richtig' if ans else 'Falsch'}",
                expl,
                count=1,
                flags=re.I,
            )
            expl = re.sub(
                r"Die Aussage ist (richtig|falsch|wahr)\.",
                f"Die Aussage ist {'richtig' if ans else 'falsch'}.",
                expl,
                flags=re.I,
            )
            if not re.search(r"Die Aussage ist (richtig|falsch)\.", expl, re.I):
                expl = expl.rstrip() + f"\n\nDie Aussage ist {'richtig' if ans else 'falsch'}."
        out.append(expl)
    return out


def polish_orphan(text: str) -> str:
    return apply_de_fixes(text or "")


def scan_issues(de: dict, en: dict) -> list[str]:
    issues = []
    for cid, t in de.items():
        blob = json.dumps(t, ensure_ascii=False)
        if GARBLE.search(blob):
            issues.append(f"{cid}: leftover garble")
        for field_name in ("title", "context", "solution_overview"):
            field = t.get(field_name) or ""
            if (field.count("$") - field.count("\\$")) % 2:
                issues.append(f"{cid}.{field_name}: odd $")
        for f in ("statements", "tactical_explanations"):
            for i, field in enumerate(t.get(f) or []):
                if isinstance(field, str) and (field.count("$") - field.count("\\$")) % 2:
                    issues.append(f"{cid}.{f}[{i}]: odd $")
        if cid in en:
            src = en[cid]
            for f in ("title", "context", "solution_overview"):
                if field_needs_rewrite(t.get(f), src.get(f)):
                    issues.append(f"{cid}.{f}: still needs rewrite")
            ak = src.get("answer_key") or []
            for i, expl in enumerate(t.get("tactical_explanations") or []):
                if i >= len(ak):
                    break
                ans = bool(ak[i])
                want = "richtig" if ans else "falsch"
                hdr = "Richtig" if ans else "Falsch"
                if f"→ {hdr}" not in expl and f"**{chr(ord('A')+i)}.**" in expl:
                    issues.append(f"{cid}[{i}]: header verdict")
                if f"ist {want}." not in expl.lower():
                    issues.append(f"{cid}[{i}]: closing verdict")
    return issues


def main() -> None:
    en_list = json.loads(EN_PATH.read_text())
    en = {t["case_id"]: t for t in en_list}
    existing = json.loads(DE_PATH.read_text()) if DE_PATH.exists() else {}
    mt = MT()

    # Preserve orphans unless progress resumes a full rebuild
    new_de: dict[str, dict] = {}
    start = 0
    if PROGRESS.exists():
        prog = json.loads(PROGRESS.read_text())
        new_de = prog.get("tasks", {})
        start = int(prog.get("next_index", 0))
        print(f"Resuming at index {start}, have {len(new_de)} tasks", flush=True)

    # Keep polished orphans in the final map
    orphans = {cid: existing[cid] for cid in ("MATH 4.165", "MATH 4.215") if cid in existing}

    for idx, task in enumerate(en_list):
        if idx < start:
            continue
        cid = task["case_id"]
        print(f"[{idx + 1}/{len(en_list)}] {cid}", flush=True)
        prev = existing.get(cid) or new_de.get(cid) or {}

        def pick(field: str, src_val: str):
            cur = prev.get(field)
            if field_needs_rewrite(cur if isinstance(cur, str) else None, src_val):
                return translate_text(src_val, mt)
            # still apply light fixes
            return apply_de_fixes(cur if isinstance(cur, str) else src_val)

        out = {
            "title": pick("title", task["title"]),
            "context": pick("context", task.get("context") or ""),
            "statements": [],
            "tactical_explanations": [],
            "solution_overview": pick("solution_overview", task.get("solution_overview") or ""),
        }

        prev_stmts = list(prev.get("statements") or [])
        for i, s in enumerate(task.get("statements") or []):
            cur = prev_stmts[i] if i < len(prev_stmts) else None
            if field_needs_rewrite(cur if isinstance(cur, str) else None, s):
                out["statements"].append(translate_text(s, mt))
            else:
                out["statements"].append(apply_de_fixes(cur if isinstance(cur, str) else s))

        prev_texps = list(prev.get("tactical_explanations") or [])
        for i, s in enumerate(task.get("tactical_explanations") or []):
            cur = prev_texps[i] if i < len(prev_texps) else None
            if field_needs_rewrite(cur if isinstance(cur, str) else None, s):
                out["tactical_explanations"].append(translate_text(s, mt))
            else:
                out["tactical_explanations"].append(
                    apply_de_fixes(cur if isinstance(cur, str) else s)
                )

        out["tactical_explanations"] = normalize_verdicts(
            out["tactical_explanations"], [bool(x) for x in (task.get("answer_key") or [])]
        )
        new_de[cid] = out

        if (idx + 1) % 5 == 0 or idx + 1 == len(en_list):
            # Keep unprocessed existing tasks; overlay repaired ones from new_de.
            ordered: dict[str, dict] = {}
            for k in list(existing.keys()) + list(new_de.keys()):
                if k in ordered:
                    continue
                if k in new_de:
                    ordered[k] = new_de[k]
                elif k in orphans:
                    orow = orphans[k]
                    ordered[k] = {
                        "title": polish_orphan(orow.get("title") or ""),
                        "context": polish_orphan(orow.get("context") or ""),
                        "statements": [
                            polish_orphan(x) for x in (orow.get("statements") or [])
                        ],
                        "tactical_explanations": [
                            polish_orphan(x)
                            for x in (orow.get("tactical_explanations") or [])
                        ],
                        "solution_overview": polish_orphan(
                            orow.get("solution_overview") or ""
                        ),
                    }
                else:
                    ordered[k] = existing[k]
            for k, v in new_de.items():
                ordered[k] = v
            payload = json.dumps(ordered, ensure_ascii=False, indent=2) + "\n"
            DE_PATH.write_text(payload)
            PROGRESS.write_text(
                json.dumps({"next_index": idx + 1, "tasks": new_de}, ensure_ascii=False)
            )
            mt.save()
            print(f"  checkpoint {idx + 1}", flush=True)

    # final merge for report
    final = json.loads(DE_PATH.read_text())
    issues = scan_issues(final, en)
    report = [
        "# WiSo Math DE QA Report — Chapter 4 (Gleichungen)",
        "",
        f"- Reviewed: {len(en_list)} EN tasks (+ {len(orphans)} DE orphans polished in place)",
        f"- Overlay keys written: {len(final)}",
        f"- MT calls this run: {mt.calls}",
        f"- Remaining automated flags: {len(issues)}",
        "",
    ]
    if orphans:
        report.append("## Orphans (no EN bank entry)")
        report.append("")
        for cid in orphans:
            report.append(f"- {cid}: polished in place only")
        report.append("")
    if issues:
        report.append("## Remaining flags")
        report.append("")
        report.extend(f"- {x}" for x in issues[:120])
        if len(issues) > 120:
            report.append(f"- … +{len(issues) - 120} more")
    else:
        report.append("No remaining automated flags.")
    report.append("")
    report.append("EN math bugs fixed: none in this pass.")
    report.append("")
    REPORT.write_text("\n".join(report) + "\n")
    print(f"Done. tasks={len(final)} issues={len(issues)} mt={mt.calls}", flush=True)
    for x in issues[:40]:
        print(" ", x, flush=True)


if __name__ == "__main__":
    main()
