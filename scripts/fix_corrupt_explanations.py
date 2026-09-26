#!/usr/bin/env python3
"""Strip OCR/MT gibberish from WiSo math overlays and a few related banks."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Repeated syllables / characters and known noise fragments from bad MT.
REPEAT = re.compile(
    r"(?:"
    r"([a-zäöüßA-ZÄÖÜ]{1,12})\1{4,}|"
    r"([a-zA-ZäöüÄÖÜß])\2{12,}|"
    r"(?:rems){3,}|"
    r"(?:überstimmbar[- ]?){3,}|"
    r"(?:Kann-){3,}|"
    r"(?:sich-zu-){3,}|"
    r"(?:an die ){4,}|"
    r"(?:WWW){3,}|"
    r"(?:bebe){4,}|"
    r"(?:unen){4,}|"
    r"(?:eses){4,}|"
    r"(?:nnnn){2,}|"
    r"-{6,}"
    r")",
    re.I,
)

NOISE = re.compile(
    r"(kurjjjj|jjjliesjn|Xylmyl|KRITTAK|Vorgehensees|christ christitens|"
    r"erstimmrechts|stimmsrech|Überprüferschnitt|massemasse|stossenstossen|"
    r"testesteste|KAHNIGAHI|maßinfektions|Propagkolqui|"
    r"Thessensens|Übernennennen|zweprerer|nsensensen|"
    r"absabsabs|sabens verlierten|Gefuß strukturiert|durchstere mich|"
    r"gesamtentax|Wehacke|Ichnnnn|Harmonischâ|fachsaches|denstreasense|"
    r"Mediens den|infektionenst|Haschbümm|Russ und er er nicht|"
    r"kundenreak|Übersendsd|Gebietds derend|"
    r"point-Identität|attendierenden)",
    re.I,
)

MATH_RE = re.compile(r"\$\$[\s\S]*?\$\$|\$[^$\n]+\$")
LETTER_HDR = re.compile(
    r"^(\*\*[A-E]\.\*\*\s*→\s*(?:Richtig|Falsch|Wahr|True|False))",
    re.I,
)
CONCLUSION_DE = re.compile(
    r"Die Aussage ist (richtig|falsch|wahr)\.?",
    re.I,
)
CONCLUSION_EN = re.compile(
    r"(?:So )?the statement is (true|false)\.?",
    re.I,
)


def is_intentional_repeat(s: str) -> bool:
    """Password / counter-example strings that legitimately repeat a letter."""
    return "aaaaaaaaaaaa" in s and (
        "Passwort" in s or "password" in s.lower() or "Richtlinie" in s or "policy" in s.lower()
    )


def is_corrupt(s: str) -> bool:
    if not isinstance(s, str) or len(s) < 40:
        return False
    if s.startswith("data:") or "%3Csvg" in s[:100]:
        return False
    if is_intentional_repeat(s):
        return False
    if REPEAT.search(s) or NOISE.search(s):
        return True
    # Long dash-run artifacts in English econ explanations
    if re.search(r"-{3,}", s) and ("statement" in s.lower() or "thus the" in s.lower()):
        return True
    return False


def para_is_corrupt(p: str) -> bool:
    if is_intentional_repeat(p):
        return False
    if REPEAT.search(p) or NOISE.search(p):
        return True
    if len(p) > 100 and len(set(p.replace(" ", ""))) < 14:
        return True
    return False


def extract_math(text: str) -> list[str]:
    return MATH_RE.findall(text)


def sanitize(s: str) -> str:
    """Remove gibberish paragraphs; keep math, letter header, and conclusion."""
    if is_intentional_repeat(s):
        return s

    header = ""
    m = LETTER_HDR.match(s.strip())
    if m:
        header = m.group(1).strip()

    concl = ""
    cm = CONCLUSION_DE.search(s) or CONCLUSION_EN.search(s)
    if cm:
        raw = cm.group(0)
        if CONCLUSION_DE.search(raw):
            word = CONCLUSION_DE.search(raw).group(1).lower()
            concl = f"Die Aussage ist {'richtig' if word in ('richtig', 'wahr') else 'falsch'}."
        else:
            word = CONCLUSION_EN.search(raw).group(1).lower()
            concl = f"The statement is {'true' if word == 'true' else 'false'}."

    # Protect math while scanning paragraphs
    blocks: list[str] = []

    def save_math(m: re.Match[str]) -> str:
        blocks.append(m.group(0))
        return f"⟦M{len(blocks) - 1}⟧"

    masked = MATH_RE.sub(save_math, s)
    # Drop letter header / conclusion from body scan (re-add later)
    if header:
        masked = masked.replace(header, "", 1)
    if cm:
        masked = masked.replace(cm.group(0), "", 1)

    kept: list[str] = []
    for part in re.split(r"\n\s*\n", masked):
        part = part.strip()
        if not part:
            continue
        math_here = re.findall(r"⟦M\d+⟧", part)
        if para_is_corrupt(part):
            # Keep only math placeholders from the corrupt paragraph
            if math_here:
                kept.extend(math_here)
            continue
        cleaned = REPEAT.sub("", part)
        cleaned = NOISE.sub("", cleaned)
        cleaned = re.sub(r"-{3,}", " — ", cleaned)
        cleaned = re.sub(r"\s{2,}", " ", cleaned).strip(" -\t")
        if cleaned:
            kept.append(cleaned)

    body_parts: list[str] = []
    if header:
        body_parts.append(header)
    body_parts.extend(kept)
    if concl:
        body_parts.append(concl)

    result = "\n\n".join(body_parts)
    for i, block in enumerate(blocks):
        result = result.replace(f"⟦M{i}⟧", block)
    result = re.sub(r"\n{3,}", "\n\n", result).strip()
    return result


def useful(cleaned: str, original: str) -> bool:
    if not cleaned or len(cleaned) < 20:
        return False
    if CONCLUSION_DE.search(cleaned) or CONCLUSION_EN.search(cleaned):
        if "$$" in cleaned or "$" in cleaned or len(cleaned) >= 60:
            return True
        # header + conclusion only is acceptable for letter bodies
        if LETTER_HDR.match(cleaned):
            return True
    if "$$" in cleaned and len(cleaned) >= 40:
        return True
    if len(cleaned) >= max(60, int(0.35 * len(original))):
        return True
    return False


def en_to_de_light(text: str) -> str:
    """Glossary-style EN→DE for rebuilt overlays (no MT engine)."""
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
        ("Change of base is the universal identity", "Basiswechsel ist die universelle Identität"),
        ("A single logarithm linearises the continuous path.", "Ein einziger Logarithmus linearisiert den stetigen Pfad."),
        ("How to recognize this type of question", "Wie Sie diese Art von Frage erkennen"),
    ]
    out = text
    for a, b in pairs:
        out = out.replace(a, b)
    return out


# Explicit German replacements when sanitizing cannot recover meaning.
MANUAL: dict[tuple[str, str, str | int | None], str] = {
    ("math-de-ch3.json", "MATH 11.69", ("statements", 1)): (
        "Die über die 12 Jahre gesammelten Lizenzgebühren betragen etwa \\$175,000.00."
    ),
    ("math-de-ch3.json", "MATH 11.119", ("statements", 2)): (
        "Bei einem Zinssatz von 13 % ist der Kapitalwert des Projekts negativ."
    ),
    ("math-de-ch3.json", "MATH 11.86", ("tactical_explanations", 4)): (
        "**E.** → Richtig\n\n"
        "In der Annuitätsformel lassen Sie $n\\to\\infty$. Dann $(1.06)^n\\to\\infty$, so\n\n"
        "$$\\frac{1}{(1.06)^n}\\to 0$$\n\n"
        "$$P_n \\to \\frac{5,000}{0.06} = 83,333.33$$\n\n"
        "Vergleiche den berechneten Wert mit der Behauptung (derselbe Grenzwert). "
        "Beide Seiten stimmen überein.\n\n"
        "Die Aussage ist richtig."
    ),
    ("math-de-ch3.json", "MATH 11.141", ("tactical_explanations", 1)): (
        "**B.** → Richtig\n\n"
        "Die nominal monatlich wandelbare Quote multipliziert den Monatssatz mit zwölf:\n\n"
        "$$j_{12} = 12 \\times i_m$$\n\n"
        "$$\\approx 12 \\times 0.00682149$$\n\n"
        "$$j_{12} \\approx 0.081858 = 8.1858\\%$$\n\n"
        "Vergleiche den berechneten Wert mit der Behauptung ($8.1858\\%$). "
        "Beide Seiten stimmen überein.\n\n"
        "Die Aussage ist richtig."
    ),
    ("math-de-ch10.json", "MATH 10.1.36", "solution_overview"): (
        "Ein einziger Logarithmus linearisiert den stetigen Pfad.\n\n"
        "$$\\ln P(t)=\\ln P_0+kt$$\n\n"
        "Ein zweiter Logarithmus liefert $\\ln(\\ln P_0+kt)$, nicht $kt$. "
        "Algebraische Fehler, die $\\ln P+kt$ exponentieren, führen einen Extrafaktor "
        "$e^{kt}$ ein statt $P$ zu quadrieren."
    ),
    ("math-de-ch10.json", "MATH 10.2.13", "solution_overview"): (
        "Basiswechsel ist die universelle Identität $\\log_{b}a=\\ln a/\\ln b$ für "
        "$a>0$ und $b>0$, $b\\neq 1$. Jede andere Hilfsbasis (einschließlich $10$) "
        "funktioniert ebenso. Für $b=e$ erhält man $\\ln$. Graphen schneiden ihre "
        "vertikalen Asymptoten nie, und $a$ muss keine ganze Zahl sein."
    ),
    ("math-de-ch4.json", "MATH 4.171", "solution_overview"): (
        "Wenn die beiden Seiten einer Exponentialgleichung unterschiedliche Basen tragen, "
        "lässt sich keine gemeinsame Basis durch Umschreiben von Potenzen erzeugen. "
        "Die Standardtechnik ist, auf beiden Seiten den Logarithmus zu nehmen; dadurch "
        "wird jeder Exponent zu einem Faktor:\n\n"
        "$$\\log\\left(a^{f(x)}\\right) = f(x)\\log a$$\n\n"
        "Es entsteht eine lineare Gleichung in $x$, sodass genau eine reelle Lösung "
        "existiert, sobald die Basen verschieden sind."
    ),
    ("math-de-ch4.json", "MATH 4.181", ("statements", 0)): (
        "Der Wechsel zur Basis $2$ formt die Gleichung zu $\\tfrac{3}{2}\\log_{2} x = 6$ um."
    ),
    ("math-de-ch8.json", "MATH 8.25", ("statements", 2)): (
        "Die für eine gegebene Fläche benötigte Zeit ist selbst eine Potenzfunktion dieser Fläche."
    ),
    ("math-de-ch11.json", "MATH 11.76", "solution_overview"): (
        "Studio A meldet Bestand $P_A(Q)=50$ mit Steigung $P_A^{\\prime}(Q)=0$, daher\n"
        "$$R_A^{\\prime}(Q)=C_A^{\\prime}(Q)$$\n"
        "und eine winzige Mengenänderung lässt den Gewinn lokal unverändert, obwohl die Firma "
        "bereits einen soliden Gewinn erzielt. Studio B meldet Bestand $P_B(Q)=0$ mit Steigung "
        "$P_B^{\\prime}(Q)=4>0$, ist also derzeit an der Gewinnschwelle, doch eine kleine "
        "Ausweitung würde Gewinn erzeugen. Höhe und Steigung sind unabhängig: $P^{\\prime}=0$ "
        "bedeutet nicht, dass die Firma nichts verdient, und $P=0$ schließt positiven "
        "Grenzgewinn nicht aus."
    ),
    ("math-de-ch11.json", "MATH 11.80", "solution_overview"): (
        "Beide Verkaufsstellen verkaufen $Q=40$ mit demselben $R^{\\prime}(40)=3$. Das Café "
        "meldet außerdem $P^{\\prime}(40)=1$, also\n"
        "$$C^{\\prime}(40)=R^{\\prime}(40)-P^{\\prime}(40)=3-1=2.$$\n"
        "Der Kiosk meldet dagegen $C^{\\prime}(40)=5$, also\n"
        "$$P^{\\prime}(40)=R^{\\prime}(40)-C^{\\prime}(40)=3-5=-2.$$\n"
        "Ein zusätzliches Stück erhöht daher den Gewinn im Café ($P^{\\prime}=1>0$) und "
        "senkt ihn am Kiosk ($P^{\\prime}=-2<0$). Gleiches $Q$ und gleiches $R^{\\prime}$ "
        "erzwingen nicht dasselbe $C^{\\prime}$."
    ),
    ("math-de-ch11.json", "MATH 11.160", "solution_overview"): (
        "Lesen Sie zuerst die Figur: Benennen Sie die gezeichneten Kurven, markieren Sie "
        "Nullstellen und Probenhöhen, und übersetzen Sie dann Vorzeichen in Monotonie und "
        "Wendepunkte.\n\n"
        "Braun ist $f'$, Grün ist $f''$, und Violett ist eine weitere Ableitung $h'$ auf "
        "gemeinsamen Achsen. Grün ist null bei $x=3$, unter dem tiefsten Punkt von Braun. "
        "Auf $(0,3)$ ist Grün negativ, also fällt Braun. Violett liegt überall etwa um $1$ "
        "über Braun (parallele Verschiebung). Bei $x=1$ ist Braun positiv, also steigt $f$ "
        "dort. Violett berührt die Achse bei $x=3$ ohne Vorzeichenwechsel (nichtnegativ, "
        "nur berührend), sodass diese Berührung nach dem ersten Ableitungstest kein "
        "lokales Extremum von $h$ erzwingen muss."
    ),
    ("math-de-demo-hard.json", "MATH 4.02", ("statements", 1)): (
        "Setzt man $x=20$ in die ursprüngliche linke Seite ein, ergibt sich ein Wert, "
        "der streng kleiner als $58$ ist."
    ),
    ("math-de-demo-hard.json", "MATH 4.02", ("statements", 3)): (
        "Bei $k=18$ übersteigt die ursprüngliche linke Seite die ursprüngliche rechte Seite."
    ),
    ("math-de-demo-hard.json", "MATH 4.04", ("statements", 3)): (
        "Bei $x=0$ übersteigt die ursprüngliche linke Seite die ursprüngliche rechte Seite."
    ),
}


def set_field(task: dict, field_spec: str | tuple, value: str) -> None:
    if isinstance(field_spec, str):
        task[field_spec] = value
        return
    field, idx = field_spec
    arr = list(task[field])
    arr[idx] = value
    task[field] = arr


def get_field(task: dict, field_spec: str | tuple) -> str:
    if isinstance(field_spec, str):
        return task.get(field_spec) or ""
    field, idx = field_spec
    return (task.get(field) or [""])[idx]


def walk_mutate(obj, fix_fn, path="$"):
    changed = 0
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            if isinstance(v, str):
                new = fix_fn(v, f"{path}.{k}")
                if new is not None and new != v:
                    obj[k] = new
                    changed += 1
            else:
                changed += walk_mutate(v, fix_fn, f"{path}.{k}")
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            if isinstance(v, str):
                new = fix_fn(v, f"{path}[{i}]")
                if new is not None and new != v:
                    obj[i] = new
                    changed += 1
            else:
                changed += walk_mutate(v, fix_fn, f"{path}[{i}]")
    return changed


def load_en(chapter: int) -> dict[str, dict]:
    path = Path(f"/tmp/wiso-math-en/ch{chapter}.json")
    if not path.exists():
        return {}
    return {t["id"]: t for t in json.loads(path.read_text())}


def rebuild_from_en(en_text: str, prefer_de_conclusion: bool = True) -> str:
    text = en_to_de_light(en_text)
    if prefer_de_conclusion:
        text = re.sub(
            r"The statement is (true|false)\.",
            lambda m: "Die Aussage ist richtig."
            if m.group(1).lower() == "true"
            else "Die Aussage ist falsch.",
            text,
            flags=re.I,
        )
    return text.strip()


def fix_overlay_file(rel: str, chapter: int | None) -> int:
    path = ROOT / "src/data/wiso" / rel
    if not path.exists():
        path = ROOT / "src/data" / rel
    data = json.loads(path.read_text())
    en = load_en(chapter) if chapter is not None else {}
    changed = 0

    # Manual overrides first
    for (fname, case_id, field_spec), value in MANUAL.items():
        if fname != rel:
            continue
        if case_id not in data:
            print(f"  WARN missing {case_id} in {rel}")
            continue
        old = get_field(data[case_id], field_spec)
        if old != value:
            set_field(data[case_id], field_spec, value)
            changed += 1
            print(f"  manual {case_id} {field_spec}")

    def fix_str(s: str, p: str) -> str | None:
        if not is_corrupt(s):
            return None
        cleaned = sanitize(s)
        if useful(cleaned, s):
            return cleaned
        # Try EN rebuild for overlay keys like $.MATH 11.20.tactical_explanations[3]
        m = re.search(r"\.(MATH [^.\[]+)\.(statements|tactical_explanations|solution_overview)(?:\[(\d+)\])?", p)
        if m and en:
            cid, field, idx = m.group(1), m.group(2), m.group(3)
            task = en.get(cid)
            if task:
                src = task.get(field)
                if idx is not None and isinstance(src, list):
                    src = src[int(idx)]
                if isinstance(src, str) and src.strip():
                    rebuilt = rebuild_from_en(src)
                    print(f"  en-rebuild {p}")
                    return rebuilt
        # Last resort: sanitized remnant or drop noise paragraphs only
        if cleaned and len(cleaned) >= 20:
            return cleaned
        print(f"  WARN could not fully repair {p}")
        return cleaned or s

    changed += walk_mutate(data, fix_str)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return changed


def fix_econ_en() -> int:
    path = ROOT / "src/data/wiso-economics-cases-ch4-en-subtopics.json"
    data = json.loads(path.read_text())
    changed = 0

    def fix_str(s: str, p: str) -> str | None:
        if not is_corrupt(s) and "----" not in s and "--and" not in s and "--can" not in s and "--is" not in s:
            return None
        new = s
        new = re.sub(r"-{2,}", " — ", new)
        new = re.sub(r"\s+—\s+and thus the statement\.?", "", new, flags=re.I)
        new = re.sub(r"\s{2,}", " ", new)
        new = re.sub(r"\n{3,}", "\n\n", new).strip()
        # Remove leftover broken clause fragments that are pure scaffolding noise
        new = re.sub(
            r"Without \"[^\"]*—[^.]+\.",
            "",
            new,
        )
        new = re.sub(r"\s{2,}", " ", new)
        new = re.sub(r"\n{3,}", "\n\n", new).strip()
        if new != s:
            return new
        return None

    changed += walk_mutate(data, fix_str)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    return changed


def fix_theory_ch12() -> int:
    path = ROOT / "src/data/wiso/math-theory/ch12.md"
    text = path.read_text()
    new = re.sub(
        r"### Wir haben es so, daß wir so eine Art von Kn+\s*",
        "### Wie Sie diese Art von Frage erkennen\n\n",
        text,
    )
    if new != text:
        path.write_text(new)
        return 1
    return 0


def main() -> None:
    overlays = [
        ("math-de-ch1.json", 1),
        ("math-de-ch2.json", 2),
        ("math-de-ch3.json", 3),
        ("math-de-ch4.json", 4),
        ("math-de-ch8.json", 8),
        ("math-de-ch9.json", 9),
        ("math-de-ch10.json", 10),
        ("math-de-ch11.json", 11),
        ("math-de-ch12.json", 12),
        ("math-de-demo-hard.json", 4),
    ]
    total = 0
    for rel, ch in overlays:
        print(f"\n== {rel} ==")
        n = fix_overlay_file(rel, ch)
        print(f"  changed fields: {n}")
        total += n

    print("\n== econ en ==")
    n = fix_econ_en()
    print(f"  changed fields: {n}")
    total += n

    print("\n== theory ch12 ==")
    n = fix_theory_ch12()
    print(f"  changed: {n}")
    total += n

    print(f"\nTotal field updates: {total}")


if __name__ == "__main__":
    main()
