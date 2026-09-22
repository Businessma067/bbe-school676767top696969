#!/usr/bin/env python3
"""QA-fix WiSo German math overlay for chapter 12."""
from __future__ import annotations

import json
import re
from pathlib import Path

DE_PATH = Path("/workspace/src/data/wiso/math-de-ch12.json")
EN_PATH = Path("/tmp/wiso-math-en/ch12.json")
FULL_PATH = Path("/tmp/wiso-ch12-qa/full_fixes.json")
LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
EVAL = "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch."


def extract_math_blocks(text: str) -> list[str]:
    return re.findall(r"\$\$[\s\S]*?\$\$", text)


def has_spam(s: str) -> bool:
    checks = [
        r"(\bDen\b\s*){6,}",
        r"(\baus den\b\s*){4,}",
        r"(e/e/){4,}",
        r"(\bok\.\s*){3,}",
        r"m{6,}",
        r"(Sink-){4,}",
        r"(Versicherter-){3,}",
        r"(\bET\b\s*){6,}",
        r"(\ben\b\s*){10,}",
        r"(\bTages\b\s*){6,}",
        r"(Zeit der Zeit){3,}",
        r"(\b\w{3,}[-]){8,}",
    ]
    return any(re.search(p, s, re.I if "ok" in p else 0) for p in checks) or (
        "....." in s and re.search(r"\.{12,}", s) is not None
    )


def bad_header(s: str) -> bool:
    return not re.match(r"\*\*[A-E]\.\*\*\s*→\s*(Richtig|Falsch|Wahr)", s.strip())


def needs_rebuild(s: str) -> bool:
    if has_spam(s) or bad_header(s):
        return True
    plain = re.sub(r"\$\$[\s\S]*?\$\$", " ", s)
    plain = re.sub(r"\$[^$]*\$", " ", plain)
    if re.search(
        r"\b(Thus|Therefore|However|Since|There are|is größer|is not|Comparing the|"
        r"So the statement|This statement|would be|would equal)\b",
        plain,
    ):
        return True
    if "Umstand" in plain or "Veranstaltung" in plain or "Zu wählen wir" in plain:
        return True
    if not re.search(r"Die Aussage ist (richtig|falsch|wahr)\.?\s*$", s.strip(), re.I | re.M):
        return True
    return False


def rebuild(letter: str, true: bool, statement: str, en_expl: str) -> str:
    verdict = "Richtig" if true else "Falsch"
    end = "richtig" if true else "falsch"
    confirm = (
        "Die Rechnung mit den gegebenen Werten bestätigt die Behauptung."
        if true
        else "Die Rechnung mit den gegebenen Werten widerlegt die Behauptung."
    )
    blocks = extract_math_blocks(en_expl)
    chunks = [
        f"**{letter}.** → {verdict}",
        f"Aussage {letter}: {statement.strip()} {confirm}",
    ]
    if blocks:
        chunks.append("\n\n".join(blocks))
    chunks.append(f"Die Aussage ist {end}.")
    return "\n\n".join(chunks) + "\n"


def normalize_eval(text: str) -> str:
    if not text:
        return text
    patterns = [
        r"Bewerten Sie jede Aussage\.?\s*Markieren Sie sie als wahr oder falsch\.?",
        r"Bewerte jede Aussage\.?\s*Markiere sie mit Wahr oder Falsch\.?",
        r"Bewerten Sie jede Aussage mit Wahr oder Falsch(?: anhand der gegebenen Wahrscheinlichkeiten und Rechenregeln)?\.?",
        r"Evaluate each statement\.?\s*Mark it TRUE or FALSE\.?",
    ]
    for p in patterns:
        text = re.sub(p, EVAL, text, flags=re.I)
    return text


def fix_prose(text: str) -> str:
    if not text:
        return text
    reps = [
        (r"\bVeranstaltung\b", "Ereignis"),
        (r"\bUmstand\b", "Fall"),
        (r"There are \$", "Es gibt $"),
        (r"Thus, there are \$", "Damit gibt es $"),
        (r"\bThus,\b", "Damit"),
        (r"\bTherefore:\b", "Daher:"),
        (r"\bTherefore\b", "Daher"),
        (r"\bHowever,\b", "Allerdings"),
        (r"\bHowever\b", "Allerdings"),
        (r"\bSince \$", "Da $"),
        (r" is größer than ", " größer ist als "),
        (r" is not größer than ", " nicht größer ist als "),
        (r"Comparing the values,", "Vergleich der Werte:"),
        (r" would be \$", " ist $"),
        (r" would equal \$", " gleich $ ist,"),
        (r"gesamt Möglichkeiten", "Möglichkeiten insgesamt"),
        (r"which is \$", "also $"),
        (r" is kleiner than ", " kleiner ist als "),
        (r"Statement ([A-E])", r"Aussage \1"),
        (r"Die Aussage ist wahr\.", "Die Aussage ist richtig."),
        (r"→ Wahr\b", "→ Richtig"),
        (r"→ True\b", "→ Richtig"),
        (r"→ False\b", "→ Falsch"),
        (r"\\text\{Total outcomes\}", r"\\text{Gesamtausgänge}"),
        (r"\\text\{defective items\}", r"\\text{defekte Artikel}"),
        (r"\\text\{items selected\}", r"\\text{gezogene Artikel}"),
    ]
    for a, b in reps:
        text = re.sub(a, b, text)
    return text


def apply_full(de: dict, en: dict, cid: str, fix: dict) -> None:
    src = en[cid]
    task = {
        "title": fix["title"],
        "context": fix["context"],
        "statements": list(fix["statements"]),
        "tactical_explanations": [],
        "solution_overview": fix["solution_overview"],
    }
    for i, stmt in enumerate(task["statements"]):
        task["tactical_explanations"].append(
            rebuild(LETTERS[i], bool(src["answer_key"][i]), stmt, src["tactical_explanations"][i])
        )
    de[cid] = task


def main() -> None:
    de = json.loads(DE_PATH.read_text())
    en_list = json.loads(EN_PATH.read_text())
    en = {t["case_id"]: t for t in en_list}
    full = json.loads(FULL_PATH.read_text())
    stats = {"full": 0, "early": 0, "rebuilt": 0, "touched": 0, "clean": 0}

    for k in [x for x in de if x not in en]:
        del de[k]
    stats["extras_removed"] = [x for x in ("MATH 12.150", "MATH 12.186", "MATH 12.205") if x not in de]

    for t in en_list:
        cid = t["case_id"]
        if cid in full:
            apply_full(de, en, cid, full[cid])
            stats["full"] += 1
            continue

        task = de[cid]
        src = en[cid]
        changed = False

        for f in ("title", "context", "solution_overview"):
            old = task.get(f) or ""
            new = fix_prose(normalize_eval(old))
            if new != old:
                task[f] = new
                changed = True

        stmts = [fix_prose(s) for s in (task.get("statements") or [])]
        if stmts != task.get("statements"):
            task["statements"] = stmts
            changed = True

        expls = list(task.get("tactical_explanations") or [])
        rebuilt = False
        for i, s in enumerate(expls):
            if needs_rebuild(s):
                expls[i] = rebuild(
                    LETTERS[i],
                    bool(src["answer_key"][i]),
                    stmts[i] if i < len(stmts) else src["statements"][i],
                    src["tactical_explanations"][i],
                )
                rebuilt = True
                changed = True
            else:
                new = fix_prose(s)
                new = re.sub(r"Die Aussage ist wahr\.", "Die Aussage ist richtig.", new)
                new = re.sub(r"→ Wahr\b", "→ Richtig", new)
                if new != s:
                    expls[i] = new
                    changed = True
        task["tactical_explanations"] = expls

        if re.search(r"Evaluate each|TRUE or FALSE", src.get("context") or "", re.I):
            if EVAL not in (task.get("context") or ""):
                task["context"] = EVAL
                changed = True

        de[cid] = task
        if rebuilt:
            stats["rebuilt"] += 1
        elif changed:
            stats["touched"] += 1
        else:
            stats["clean"] += 1

    # Force-rebuild early chapter 01–27 explanations (heavy corruption zone).
    for t in en_list:
        cid = t["case_id"]
        n = int(cid.split(".")[-1])
        if n > 27 or cid in full:
            continue
        src = en[cid]
        task = de[cid]
        task["tactical_explanations"] = [
            rebuild(LETTERS[i], bool(src["answer_key"][i]), stmt, src["tactical_explanations"][i])
            for i, stmt in enumerate(task["statements"])
        ]
        task["context"] = fix_prose(normalize_eval(task.get("context") or ""))
        task["solution_overview"] = fix_prose(normalize_eval(task.get("solution_overview") or ""))
        # Germanize common EN labels inside overview math
        task["solution_overview"] = task["solution_overview"].replace(
            r"\text{Total outcomes}", r"\text{Gesamtausgänge}"
        )
        de[cid] = task
        stats["early"] += 1

    ordered = {t["case_id"]: de[t["case_id"]] for t in en_list}
    DE_PATH.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(stats, ensure_ascii=False, indent=2))

    # Verify critical fixes landed
    d2 = json.loads(DE_PATH.read_text())
    assert d2["MATH 12.114"]["title"] == "Gewinnszenario eines Start-ups"
    assert "Den Den Den" not in d2["MATH 12.03"]["tactical_explanations"][4]
    assert len(d2) == 215
    print("VERIFY_OK")


if __name__ == "__main__":
    main()
