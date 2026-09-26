#!/usr/bin/env python3
"""Aggressive second-pass cleanup of remaining WiSo explanation garble.

Detects repeated phrases / MT junk and rebuilds corrupted overlay fields
from the English banks (with light DE glossary for headers/conclusions).
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EN_DIR = Path("/tmp/wiso-math-en")

CHAR_RUN = re.compile(r"([A-Za-zÄÖÜäöüß])\1{10,}")
SYL_RUN = re.compile(r"([A-Za-zÄÖÜäöüß]{2,10})\1{4,}", re.I)
# Same short phrase repeated 3+ times (allows short connectors)
PHRASE_RUN = re.compile(
    r"(\b[\wÄÖÜäöüß]{2,16}(?:\s+[\wÄÖÜäöüß]{1,16}){0,4})\s+(?:\1\s+){2,}\1",
    re.I,
)
NOISE = re.compile(
    r"(durch die lösung durch die|des Kopfs des Kopfs|AUSSCHÜSSE UND AUSSCHÜSSE|"
    r"VON DEN RICHTEN VON DEN|LOB LOB LOB|RUHIG RUHIG|dierist|"
    r"für die für die|leitende an leitende|Auffte mit der|"
    r"des Reichs des Reichs|auf die IG auf die|"
    r"Separate-Logo-Logo|ES LOB|Unterstrichen, wie auf den Unter|"
    r"kurjjjj|Xylmyl|KRITTAK|Vorgehensees|remsrems|Wir haben es so|"
    r"Art von Kn|durchstere mich|attendierenden|point-Identität|"
    r"hypergeometrischens|Flüssiggas-Katalysator|WEITENDUNG|"
    r"und einmal\.\s*\n\n\$\$|"  # empty opener then math after junk strip
    r"Beginne vons stärkeres|Ver Kommentaren wird)",
    re.I,
)

MATH_RE = re.compile(r"\$\$[\s\S]*?\$\$|\$[^$\n]+\$")


def intentional(s: str) -> bool:
    return "aaaaaaaaaaaa" in s and (
        "Passwort" in s or "password" in s.lower() or "Richtlinie" in s
    )


def is_corrupt(s: str) -> bool:
    if not isinstance(s, str) or len(s) < 35:
        return False
    if s.startswith("data:") or intentional(s):
        return False
    # Protect math while testing prose
    prose = MATH_RE.sub(" ", s)
    if CHAR_RUN.search(prose) or SYL_RUN.search(prose):
        return True
    if NOISE.search(s):
        return True
    if PHRASE_RUN.search(prose):
        # Avoid flagging legitimate "die Aussage ist die Aussage ist" — require enough length
        m = PHRASE_RUN.search(prose)
        if m and len(m.group(0)) >= 24:
            return True
    # High repetition density: many duplicate content 4-grams
    stop = {
        "for", "the", "and", "with", "that", "this", "from", "into", "when",
        "dann", "oder", "auch", "eine", "einer", "einem", "sich", "nach",
        "über", "unter", "durch", "gibt", "sind", "wird", "werden", "bei",
    }
    words = re.findall(r"[\wÄÖÜäöüß]{3,}", prose.lower())
    if len(words) >= 40:
        from collections import Counter

        grams = [
            g
            for g in zip(words, words[1:], words[2:], words[3:])
            if sum(1 for w in g if w not in stop) >= 3
        ]
        c = Counter(grams)
        top = c.most_common(1)
        if top and top[0][1] >= 6:
            return True
    return False


def en_to_de_light(text: str) -> str:
    pairs = [
        ("So the statement is True.", "Die Aussage ist richtig."),
        ("So the statement is False.", "Die Aussage ist falsch."),
        ("So the statement is true.", "Die Aussage ist richtig."),
        ("So the statement is false.", "Die Aussage ist falsch."),
        ("The statement is true.", "Die Aussage ist richtig."),
        ("The statement is false.", "Die Aussage ist falsch."),
        ("→ True", "→ Richtig"),
        ("→ False", "→ Falsch"),
        ("→ true", "→ Richtig"),
        ("→ false", "→ Falsch"),
        ("Compare the computed value with the claim", "Vergleiche den berechneten Wert mit der Behauptung"),
        ("The two sides agree.", "Beide Seiten stimmen überein."),
        ("The two sides do not agree.", "Beide Seiten stimmen nicht überein."),
        ("which matches the claim.", "was mit der Behauptung übereinstimmt."),
        ("which does not match the claim.", "was nicht mit der Behauptung übereinstimmt."),
        ("How to recognize this type of question", "Wie Sie diese Art von Frage erkennen"),
    ]
    out = text
    for a, b in pairs:
        out = out.replace(a, b)
    return out


def rebuild(en: str) -> str:
    return en_to_de_light(en).strip()


def load_en(chapter: int) -> dict[str, dict]:
    path = EN_DIR / f"ch{chapter}.json"
    if not path.exists():
        return {}
    return {t["id"]: t for t in json.loads(path.read_text())}


def load_demo() -> dict[str, dict]:
    path = EN_DIR / "demo-ch4.json"
    if not path.exists():
        return {}
    return {t["id"]: t for t in json.loads(path.read_text())}


CHAPTER_FILES = [
    (1, "math-de-ch1.json"),
    (2, "math-de-ch2.json"),
    (3, "math-de-ch3.json"),
    (4, "math-de-ch4.json"),
    (5, "math-de-ch5.json"),
    (6, "math-de-ch6.json"),
    (7, "math-de-ch7.json"),
    (8, "math-de-ch8.json"),
    (9, "math-de-ch9.json"),
    (10, "math-de-ch10.json"),
    (11, "math-de-ch11.json"),
    (12, "math-de-ch12.json"),
    (13, "math-de-ch13.json"),
]


def fix_overlays() -> int:
    total = 0
    for ch, fname in CHAPTER_FILES:
        path = ROOT / "src/data/wiso" / fname
        if not path.exists():
            continue
        data = json.loads(path.read_text())
        en = load_en(ch)
        changed = 0
        for cid, task in data.items():
            if not isinstance(task, dict):
                continue
            et = en.get(cid)
            if not et:
                continue
            for field in ("title", "context", "solution_overview"):
                val = task.get(field)
                if isinstance(val, str) and is_corrupt(val):
                    src = et.get(field)
                    if isinstance(src, str) and src.strip():
                        task[field] = rebuild(src)
                        changed += 1
                        print(f"  {fname} {cid}.{field}")
            for field in ("statements", "tactical_explanations"):
                arr = task.get(field)
                src_arr = et.get(field) or []
                if not isinstance(arr, list):
                    continue
                new = list(arr)
                for i, s in enumerate(arr):
                    if isinstance(s, str) and is_corrupt(s):
                        if i < len(src_arr) and isinstance(src_arr[i], str) and src_arr[i].strip():
                            new[i] = rebuild(src_arr[i])
                            changed += 1
                            print(f"  {fname} {cid}.{field}[{i}]")
                task[field] = new
        if changed:
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
            print(f"{fname}: {changed} fields")
            total += changed
    return total


def fix_demo() -> int:
    path = ROOT / "src/data/wiso/math-de-demo-hard.json"
    if not path.exists():
        return 0
    data = json.loads(path.read_text())
    en = load_demo()
    # also fall back to ch4
    en4 = load_en(4)
    changed = 0
    for cid, task in data.items():
        if not isinstance(task, dict):
            continue
        et = en.get(cid) or en4.get(cid)
        if not et:
            continue
        for field in ("statements", "tactical_explanations"):
            arr = task.get(field)
            src_arr = et.get(field) or []
            if not isinstance(arr, list):
                continue
            new = list(arr)
            for i, s in enumerate(arr):
                if isinstance(s, str) and is_corrupt(s):
                    if i < len(src_arr) and isinstance(src_arr[i], str):
                        new[i] = rebuild(src_arr[i])
                        changed += 1
                        print(f"  demo {cid}.{field}[{i}]")
            task[field] = new
        for field in ("solution_overview", "context"):
            val = task.get(field)
            if isinstance(val, str) and is_corrupt(val):
                src = et.get(field)
                if isinstance(src, str) and src.strip():
                    task[field] = rebuild(src)
                    changed += 1
    if changed:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return changed


def fix_theory() -> int:
    path = ROOT / "src/data/wiso/math-theory/ch12.md"
    text = path.read_text()
    new = re.sub(
        r"### Wir haben es so, daß wir so eine Art von Kn+\s*",
        "### Wie Sie diese Art von Frage erkennen\n\n",
        text,
    )
    new = CHAR_RUN.sub(lambda m: m.group(1), new)
    if new != text:
        path.write_text(new)
        return 1
    return 0


def fix_econ() -> int:
    changed = 0
    for rel in [
        "wiso-economics-cases-ch4-en-subtopics.json",
        "wiso-economics-cases-ch3-en-subtopics.json",
        "wiso/economics-cases-ch3.json",
    ]:
        path = ROOT / "src/data" / rel
        if not path.exists():
            continue
        data = json.loads(path.read_text())

        def walk_fix(obj):
            nonlocal changed
            if isinstance(obj, dict):
                for k, v in list(obj.items()):
                    if isinstance(v, str) and is_corrupt(v):
                        # Strip repeated runs / dash junk; keep rest
                        cleaned = PHRASE_RUN.sub(r"\1", v)
                        cleaned = CHAR_RUN.sub(r"\1", cleaned)
                        cleaned = SYL_RUN.sub(r"\1", cleaned)
                        cleaned = re.sub(r"-{3,}", " — ", cleaned)
                        cleaned = re.sub(r"\s{2,}", " ", cleaned)
                        cleaned = re.sub(r"\n{3,}", "\n\n", cleaned).strip()
                        if cleaned != v:
                            obj[k] = cleaned
                            changed += 1
                    else:
                        walk_fix(v)
            elif isinstance(obj, list):
                for i, v in enumerate(obj):
                    if isinstance(v, str) and is_corrupt(v):
                        cleaned = PHRASE_RUN.sub(r"\1", v)
                        cleaned = CHAR_RUN.sub(r"\1", cleaned)
                        cleaned = SYL_RUN.sub(r"\1", cleaned)
                        cleaned = re.sub(r"-{3,}", " — ", cleaned)
                        cleaned = re.sub(r"\s{2,}", " ", cleaned).strip()
                        if cleaned != v:
                            obj[i] = cleaned
                            changed += 1
                    else:
                        walk_fix(v)

        before = changed
        walk_fix(data)
        if changed > before:
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
            print(f"{rel}: {changed - before}")
    return changed


def verify() -> int:
    left = 0
    for ch, fname in CHAPTER_FILES:
        path = ROOT / "src/data/wiso" / fname
        if not path.exists():
            continue
        data = json.loads(path.read_text())

        def walk(o, p="$"):
            if isinstance(o, dict):
                for k, v in o.items():
                    yield from walk(v, f"{p}.{k}")
            elif isinstance(o, list):
                for i, v in enumerate(o):
                    yield from walk(v, f"{p}[{i}]")
            elif isinstance(o, str):
                yield p, o

        for p, s in walk(data):
            if is_corrupt(s):
                left += 1
                print(f"STILL {fname} {p}: {s[:100].replace(chr(10), ' / ')}")
    return left


def main() -> None:
    print("== overlays ==")
    n = fix_overlays()
    print("== demo ==")
    n += fix_demo()
    print("== theory ==")
    n += fix_theory()
    print("== econ ==")
    n += fix_econ()
    print(f"\nUpdated fields: {n}")
    print("\n== verify ==")
    left = verify()
    print(f"Remaining corrupt: {left}")


if __name__ == "__main__":
    main()
