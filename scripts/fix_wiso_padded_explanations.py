#!/usr/bin/env python3
"""
Rebuild WiSo German math explanations that contain MT gibberish or empty
verification padding. Keep only what is needed: header, math, reasoning,
conclusion — drop Columbus/Belosung noise and Geschichtsdaten boilerplate.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EN_DIR = Path("/tmp/wiso-math-en")
OUT = ROOT / "src/data/wiso"

MATH_RE = re.compile(r"\$\$[\s\S]*?\$\$|(?<!\\)\$[^$\n]+?(?<!\\)\$")

DROP_EN_PARA = re.compile(
    r"^(?:"
    r"Express the travel time first|"
    r"Substituting the recovered value|"
    r"Verify by substituting|"
    r"Substituting the claimed figure|"
    r"If the claimed figure is forced|"
    r"The pure solute amount stays constant|"
    r"So the statement is"
    r")",
    re.I,
)

NEEDS_REBUILD_DE = re.compile(
    r"Beschreiben die Begebenheiten|"
    r"Geschichtsdaten|"
    r"Das Einsetzen des (berechneten|behaupteten) Werts|"
    r"Prüfe durch Einsetzen|"
    r"Setzt man den behaupteten Wert|"
    r"Belosung|"
    r"Vorsrehns|"
    r"Profeltstätte|"
    r"urf-nergerechneten|"
    r"Aussichtsversorgung|"
    r"gegebenischeischee",
    re.I,
)

NEEDS_REBUILD_EN = re.compile(
    r"Express the travel time first|"
    r"Substituting the recovered value|"
    r"Substituting the claimed figure|"
    r"Verify by substituting|"
    r"story data are reproduced|"
    r"data given in the story|"
    r"data in the story",
    re.I,
)

# Longest-first; only whole-phrase / sentence fragments (safe to replace literally).
PHRASES: list[tuple[str, str]] = [
    (
        "Both values are strictly positive and satisfy the original equation, so there are two distinct positive solutions rather than exactly one.",
        "Beide Werte sind streng positiv und erfüllen die ursprüngliche Gleichung, also gibt es zwei verschiedene positive Lösungen statt genau einer.",
    ),
    (
        "When both sides are the same expression, the equation is an identity:",
        "Wenn beide Seiten derselbe Ausdruck sind, ist die Gleichung eine Identität:",
    ),
    (
        "which is never true. The equation is a contradiction with no real solution, not infinitely many.",
        "was nie gilt. Die Gleichung ist ein Widerspruch ohne reelle Lösung, nicht mit unendlich vielen.",
    ),
    (
        "Every real $x$ is a solution, not none. The candidate's claim fails.",
        "Jede reelle $x$ ist eine Lösung, nicht keine. Die Behauptung des Kandidaten scheitert.",
    ),
    (
        "Both sides are the same expression, so every real $x$ satisfies it.",
        "Beide Seiten sind derselbe Ausdruck, daher erfüllt jede reelle $x$ die Gleichung.",
    ),
    (
        "Both are admissible, so there are two real solutions, not one.",
        "Beide sind zulässig, also gibt es zwei reelle Lösungen, nicht eine.",
    ),
    (
        "Both satisfy the original absolute-value equation.",
        "Beide erfüllen die ursprüngliche Absolutwertgleichung.",
    ),
    (
        "The claim confuses the width with the longer side.",
        "Die Behauptung verwechselt die Breite mit der längeren Seite.",
    ),
    (
        "That volume is four-fifths of capacity:",
        "Diese Menge ist vier Fünftel der Kapazität:",
    ),
    (
        "An absolute-value equation $|A| = c$ with $c > 0$ splits into two ordinary equations:",
        "Eine Absolutwertgleichung $|A| = c$ mit $c > 0$ zerfällt in zwei gewöhnliche Gleichungen:",
    ),
    (
        "Expand the left-hand side:",
        "Linke Seite ausmultiplizieren:",
    ),
    (
        "The claimed speed matches.",
        "Die behauptete Geschwindigkeit stimmt.",
    ),
    (
        "Both parts of the claim hold.",
        "Beide Teile der Behauptung gelten.",
    ),
    (
        "matching Vieta's constant term.",
        "stimmt mit dem konstanten Term nach Vieta überein.",
    ),
    (
        "So the statement is True.",
        "Die Aussage ist richtig.",
    ),
    (
        "So the statement is False.",
        "Die Aussage ist falsch.",
    ),
    ("→ True", "→ Richtig"),
    ("→ False", "→ Falsch"),
]


# Regex patterns applied on math-masked prose (order matters).
REGEX_RULES: list[tuple[str, str]] = [
    # Travel-time templates
    (
        r"(?i)hours?\.\s*Three and a half hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Dreieinhalb Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*One and a half hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Eineinhalb Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Forty-five minutes before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"45 Minuten vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Thirty minutes before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"30 Minuten vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Fifteen minutes before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"15 Minuten vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Six hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Sechs Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Four hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Vier Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Three hours before (⟦M\d+⟧) is (⟦M\d+⟧), not (⟦M\d+⟧)\.",
        r"Drei Stunden vor \1 ist \2, nicht \3.",
    ),
    (
        r"(?i)hours?\.\s*Three hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Drei Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\.\s*Two hours before (⟦M\d+⟧) is (⟦M\d+⟧)\.",
        r"Zwei Stunden vor \1 ist \2.",
    ),
    (
        r"(?i)hours?\s*\(\s*(⟦M\d+⟧)\s*h\s*(⟦M\d+⟧)\s*min\)\.\s*From (⟦M\d+⟧) back (⟦M\d+⟧) h (⟦M\d+⟧) min lands at (⟦M\d+⟧), not (⟦M\d+⟧)\.",
        r"Fahrzeit (\1 h \2 min). Von \3 um \4 h \5 min zurück ergibt \6, nicht \7.",
    ),
    (
        r"(?i)hours?\s*\(\s*(⟦M\d+⟧)\s*minutes?\)\.\s*Forty-five minutes before (⟦M\d+⟧) is (⟦M\d+⟧), not (⟦M\d+⟧)\.",
        r"Fahrzeit (\1 Minuten). 45 Minuten vor \2 ist \3, nicht \4.",
    ),
    (
        r"(?i)hours?\s*\(\s*(⟦M\d+⟧)\s*minutes?\)\.\s*Fifteen minutes before (⟦M\d+⟧) is (⟦M\d+⟧), not (⟦M\d+⟧)\.",
        r"Fahrzeit (\1 Minuten). 15 Minuten vor \2 ist \3, nicht \4.",
    ),
    # Common stems
    (r"(?i)^Check:\s*", "Probe: "),
    (r"(?i)^Known sum:\s*", "Bekannte Summe: "),
    (r"(?i)^Missing score:\s*", "Fehlende Punktzahl: "),
    (r"(?i)^Combined rates:\s*", "Kombinierte Raten: "),
    (r"(?i)^Factor:\s*", "Faktorisieren: "),
    (r"(?i)^Area:\s*", "Fläche: "),
    (r"(?i)^Pythagoras:\s*", "Pythagoras: "),
    (r"(?i)^Pythagoras with legs (⟦M\d+⟧) and height (⟦M\d+⟧):", r"Pythagoras mit Katheten \1 und Höhe \2:"),
    (r"(?i)\(positive height\)\.", "(positive Höhe)."),
    (r"(?i)\(positive root\)\. Check:", "(positive Wurzel). Probe:"),
    (r"(?i)^The slower printer alone needs (⟦M\d+⟧) hours?\.", r"Der langsamere Drucker allein braucht \1 Stunden."),
    (r"(?i)^The unique real solution is (⟦M\d+⟧), not (⟦M\d+⟧)\.", r"Die eindeutige reelle Lösung ist \1, nicht \2."),
    (r"(?i)^The unique solution is (⟦M\d+⟧), not (⟦M\d+⟧)\.", r"Die eindeutige Lösung ist \1, nicht \2."),
    (r"(?i)^The unique real solution is (⟦M\d+⟧), which is an odd integer\.", r"Die eindeutige reelle Lösung ist \1, eine ungerade ganze Zahl."),
    (r"(?i)^Capacity is (⟦M\d+⟧) litres?, not (⟦M\d+⟧)\.", r"Das Fassungsvermögen beträgt \1 Liter, nicht \2."),
    (r"(?i)^square metres?, not (⟦M\d+⟧)\.", r"Quadratmeter, nicht \1."),
    (r"(?i)^Width is (⟦M\d+⟧) cm, not (⟦M\d+⟧)\.", r"Die Breite beträgt \1 cm, nicht \2."),
    (r"(?i)^Longer side (⟦M\d+⟧) m\. Check:", r"Längere Seite \1 m. Probe:"),
    (r"(?i)^Longer side (⟦M\d+⟧) cm, not (⟦M\d+⟧) cm\. Check:", r"Längere Seite \1 cm, nicht \2 cm. Probe:"),
    (r"(?i)^Equal sides (⟦M\d+⟧) cm, base (⟦M\d+⟧) cm\. Check:", r"Gleichschenklige Seiten \1 cm, Basis \2 cm. Probe:"),
    (r"(?i)^Positive (⟦M\d+⟧), larger integer (⟦M\d+⟧)\. Check:", r"Positiv \1, größere ganze Zahl \2. Probe:"),
    (r"(?i)^Positive (⟦M\d+⟧), longer side (⟦M\d+⟧) cm\. Check:", r"Positiv \1, längere Seite \2 cm. Probe:"),
    (r"(?i)^Positive width (⟦M\d+⟧), so the longer side is (⟦M\d+⟧) cm\. Check:", r"Positive Breite \1, also ist die längere Seite \2 cm. Probe:"),
    (r"(?i)^Positive width (⟦M\d+⟧) forces length (⟦M\d+⟧) m, not (⟦M\d+⟧) m\.", r"Positive Breite \1 erzwingt Länge \2 m, nicht \3 m."),
    (r"(?i)^Let the width be (⟦M\d+⟧) metres?:", r"Sei die Breite \1 Meter:"),
    (r"(?i)^Let the shorter side be (⟦M\d+⟧) cm:", r"Sei die kürzere Seite \1 cm:"),
    (r"(?i)^Let the smallest be (⟦M\d+⟧):", r"Sei die kleinste \1:"),
    (r"(?i)^Let the winner's award be (⟦M\d+⟧) EUR:", r"Sei die Auszeichnung des Siegers \1 EUR:"),
    (r"(?i)^Let width be (⟦M\d+⟧), length (⟦M\d+⟧)\. Outer dimensions (⟦M\d+⟧) by (⟦M\d+⟧):", r"Sei die Breite \1, Länge \2. Äußere Maße \3 mal \4:"),
    (r"(?i)^Outer rectangle (⟦M\d+⟧) m by (⟦M\d+⟧) m:", r"Äußeres Rechteck \1 m mal \2 m:"),
    (r"(?i)^Outer square side (⟦M\d+⟧) m\. Path area:", r"Äußere Quadratseite \1 m. Wegfläche:"),
    (r"(?i)^Volume delivered:\s*(⟦M\d+⟧) litres?\.", r"Gelieferte Menge: \1 Liter."),
    (r"(?i)^In (⟦M\d+⟧) seconds the train covers its own length (⟦M\d+⟧) m:", r"In \1 Sekunden legt der Zug seine eigene Länge \2 m zurück:"),
    (r"(?i)^Let (⟦M\d+⟧) be hours after (⟦M\d+⟧) when they meet\. Then B has driven (⟦M\d+⟧) hours?:", r"Sei \1 die Stunden nach \2, wenn sie sich treffen. Dann ist B \3 Stunden gefahren:"),
    (r"(?i)^Meeting time (⟦M\d+⟧)\. Distances:\s*(⟦M\d+⟧) km each\.", r"Treffpunktzeit \1. Distanzen: \2 km jeweils."),
    (r"(?i)^Product (⟦M\d+⟧), matching Vieta's constant term\.", r"Produkt \1, stimmt mit dem konstanten Term nach Vieta überein."),
    (r"(?i)^so (⟦M\d+⟧) forces (⟦M\d+⟧)\.", r"also erzwingt \1 den Wert \2."),
    (r"(?i)^so (⟦M\d+⟧), not (⟦M\d+⟧)\.", r"also \1, nicht \2."),
    (r"(?i)^(⟦M\d+⟧) requires (⟦M\d+⟧), so (⟦M\d+⟧)\. Cases:", r"\1 erfordert \2, also \3. Fälle:"),
    (r"(?i)^Rewrite (⟦M\d+⟧)\. Because (⟦M\d+⟧) is one-to-one on (⟦M\d+⟧),", r"Umschreiben \1. Weil \2 eineindeutig auf \3 ist,"),
    (r"(?i)^The value (⟦M\d+⟧) is admissible since (⟦M\d+⟧)\.", r"Der Wert \1 ist zulässig, da \2."),
    (r"(?i)^The value (⟦M\d+⟧) avoids the hole (⟦M\d+⟧), so it is admissible\.", r"Der Wert \1 vermeidet die Polstelle \2 und ist zulässig."),
    (r"(?i)^The integer (⟦M\d+⟧) has two digits, matching the claim\.", r"Die ganze Zahl \1 hat zwei Ziffern und stimmt mit der Behauptung überein."),
    (r"(?i)^The comparison equation (⟦M\d+⟧) yields", r"Die Vergleichsgleichung \1 ergibt"),
    (r"(?i)^Because (⟦M\d+⟧), the claim holds\.", r"Weil \1, gilt die Behauptung."),
    (r"(?i)^The claim is (⟦M\d+⟧)\.", r"Die Behauptung lautet \1."),
    (r"(?i)^Five scores sum to", "Fünf Punktzahlen summieren sich zu"),
    (r"(?i)^Only (⟦M\d+⟧) is a positive physical time\.", r"Nur \1 ist eine positive physikalische Zeit."),
    (r"(?i)^Adding only (⟦M\d+⟧) litres? gives concentration", r"Nur \1 Liter ergeben die Konzentration"),
    (r"(?i)^Adding (⟦M\d+⟧) litres? gives concentration", r"\1 Liter ergeben die Konzentration"),
    (r"(?i)^Pigment (⟦M\d+⟧) litres?\. Target (⟦M\d+⟧):", r"Pigment \1 Liter. Ziel \2:"),
    (r"(?i)^Pure bleach (⟦M\d+⟧) litres?\. For (⟦M\d+⟧):", r"Reines Bleichmittel \1 Liter. Für \2:"),
    (r"(?i)^Pure acid (⟦M\d+⟧) litres?\. Target (⟦M\d+⟧):", r"Reine Säure \1 Liter. Ziel \2:"),
    (r"(?i)^Concentrate (⟦M\d+⟧)\. Target (⟦M\d+⟧):", r"Konzentrat \1. Ziel \2:"),
    (r"(?i)^Pulp volume (⟦M\d+⟧)\. Target (⟦M\d+⟧):", r"Fruchtfleischvolumen \1. Ziel \2:"),
    (r"(?i)^Fat volume (⟦M\d+⟧)\. Target (⟦M\d+⟧):", r"Fettvolumen \1. Ziel \2:"),
    (r"(?i)^Syrup (⟦M\d+⟧)\. Target (⟦M\d+⟧):", r"Sirup \1. Ziel \2:"),
    (r"(?i)^A (⟦M\d+⟧) step-down is a factor (⟦M\d+⟧):", r"Eine Absenkung um \1 ist ein Faktor \2:"),
    (r"(?i)^Subtract (⟦M\d+⟧) from both sides:", r"Subtrahiere \1 von beiden Seiten:"),
    (r"(?i)^Multiply by (⟦M\d+⟧):", r"Multipliziere mit \1:"),
    (r"(?i)^Transferring back through (⟦M\d+⟧) gives", r"Zurückrechnen über \1 ergibt"),
    (r"(?i)^Throughout, (⟦M\d+⟧) denotes the decadic logarithm and (⟦M\d+⟧)\. Set (⟦M\d+⟧) and rearrange:", r"Durchgängig bezeichnet \1 den Zehnerlogarithmus und \2. Setze \3 und forme um:"),
    (r"(?i)^Throughout, (⟦M\d+⟧) denotes the decadic logarithm and (⟦M\d+⟧)\. Write (⟦M\d+⟧) and apply the power rule:", r"Durchgängig bezeichnet \1 den Zehnerlogarithmus und \2. Schreibe \3 und wende die Potenzregel an:"),
    (r"(?i)^Throughout, (⟦M\d+⟧) denotes the decadic logarithm and (⟦M\d+⟧)\. Write (⟦M\d+⟧)\. Also (⟦M\d+⟧), so", r"Durchgängig bezeichnet \1 den Zehnerlogarithmus und \2. Schreibe \3. Außerdem \4, also"),
    (r"(?i)^Throughout, (⟦M\d+⟧) denotes the decadic logarithm and (⟦M\d+⟧)\. Write (⟦M\d+⟧):", r"Durchgängig bezeichnet \1 den Zehnerlogarithmus und \2. Schreibe \3:"),
    (r"(?i)^The integers are (⟦M\d+⟧), (⟦M\d+⟧), and (⟦M\d+⟧)\. The largest is (⟦M\d+⟧), not (⟦M\d+⟧)\. The triple ending at (⟦M\d+⟧) sums to (⟦M\d+⟧)\.", r"Die ganzen Zahlen sind \1, \2 und \3. Die größte ist \4, nicht \5. Das Tripel mit Ende \6 summiert sich zu \7."),
    (r"(?i)^Second place (⟦M\d+⟧) EUR, not (⟦M\d+⟧)\.", r"Zweiter Platz \1 EUR, nicht \2."),
    (r"(?i)^Second place (⟦M\d+⟧) EUR\.", r"Zweiter Platz \1 EUR."),
    (r"(?i)^Second share (⟦M\d+⟧) EUR, not (⟦M\d+⟧)\.", r"Zweiter Anteil \1 EUR, nicht \2."),
    (r"(?i)^Second share (⟦M\d+⟧) EUR\.", r"Zweiter Anteil \1 EUR."),
    (r"(?i)^Second payout (⟦M\d+⟧) EUR\.", r"Zweite Auszahlung \1 EUR."),
    (r"(?i)^Second stipend (⟦M\d+⟧) EUR\.", r"Zweites Stipendium \1 EUR."),
    (r"(?i)^Second commission (⟦M\d+⟧) EUR, not (⟦M\d+⟧)\.", r"Zweite Provision \1 EUR, nicht \2."),
    (r"(?i)^Middle heir:\s*(⟦M\d+⟧) EUR\.", r"Mittlerer Erbe: \1 EUR."),
    (r"(?i)^Middle award (⟦M\d+⟧) EUR\.", r"Mittlere Auszeichnung \1 EUR."),
    (r"(?i)^Middle bursary (⟦M\d+⟧) EUR\.", r"Mittleres Stipendium \1 EUR."),
    (r"(?i)^Middle fellowship (⟦M\d+⟧) EUR\.", r"Mittleres Fellowship \1 EUR."),
    (r"(?i)^Runner-up:\s*(⟦M\d+⟧) EUR\.", r"Zweiter: \1 EUR."),
    (r"(?i)\(rejected\),", "(verworfen),"),
    (r"(?i)^The equation becomes\s*$", "Die Gleichung wird zu"),
    (r"(?i)^The equation becomes\s*", "Die Gleichung wird zu "),
    (
        r"(?i)^\.?\s*Since (⟦M\d+⟧), the solution of the given equation is strictly smaller than the solution of (⟦M\d+⟧)\.",
        r"Da \1, ist die Lösung der gegebenen Gleichung streng kleiner als die Lösung von \2.",
    ),
    (
        r"(?i)^Throughout, (⟦M\d+⟧) denotes the decadic logarithm and (⟦M\d+⟧)\. Write (⟦M\d+⟧) and note (⟦M\d+⟧):",
        r"Durchgängig bezeichnet \1 den Zehnerlogarithmus und \2. Schreibe \3 und beachte \4:",
    ),
    (
        r"(?i)^The solution equals (⟦M\d+⟧), so it is not strictly greater than (⟦M\d+⟧)\.",
        r"Die Lösung ist \1, also nicht streng größer als \2.",
    ),
    (
        r"(?i)^The solution equals (⟦M\d+⟧), so it is nicht strictly greater than (⟦M\d+⟧)\.",
        r"Die Lösung ist \1, also nicht streng größer als \2.",
    ),
    (r"(?i)^Product (⟦M\d+⟧),", r"Produkt \1,"),
    (r"(?i)^Pigment (⟦M\d+⟧) Liter\. Ziel", r"Pigment \1 Liter. Ziel"),
    (r"(?i)^Positive Breite", "Positive Breite"),  # already German
    # Generic leftovers (keep last)
    (r"(?i)\bhours\b", "Stunden"),
    (r"(?i)\blitres?\b", "Liter"),
    (r"(?i)\bmetres?\b", "Meter"),
    (r"(?i)\bminutes?\b", "Minuten"),
    (r"(?i)\bbefore\b", "vor"),
    (r"(?i)\bstrictly greater than\b", "streng größer als"),
    (r"(?i)\bstrictly smaller than\b", "streng kleiner als"),
    (r"(?i)\bnot\b", "nicht"),
]


def mask_math(text: str) -> tuple[str, list[str]]:
    blocks: list[str] = []

    def keep(m: re.Match[str]) -> str:
        blocks.append(m.group(0))
        return f"⟦M{len(blocks) - 1}⟧"

    return MATH_RE.sub(keep, text), blocks


def unmask_math(text: str, blocks: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return blocks[i] if 0 <= i < len(blocks) else m.group(0)

    out = re.sub(r"⟦M(\d+)⟧", repl, text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *\n *", "\n", out)
    out = re.sub(r"\n{3,}", "\n\n", out)
    return out.strip()


def translate_paragraph(para: str) -> str:
    """Translate one paragraph; math already masked as ⟦Mn⟧."""
    out = para
    for en, de in PHRASES:
        out = out.replace(en, de)
    for pat, repl in REGEX_RULES:
        out = re.sub(pat, repl, out)
    return re.sub(r"[ \t]{2,}", " ", out).strip()


def translate_en(text: str) -> str:
    # Apply literal phrases that may span math first on the raw text.
    out = text
    for en, de in PHRASES:
        out = out.replace(en, de)

    paras_out: list[str] = []
    for para in re.split(r"\n\s*\n", out):
        para = para.strip()
        if not para:
            continue
        masked, blocks = mask_math(para)
        translated = translate_paragraph(masked)
        paras_out.append(unmask_math(translated, blocks))
    return "\n\n".join(p for p in paras_out if p)


def clean_en_explanation(text: str) -> str:
    paras = []
    for p in re.split(r"\n\s*\n", text.strip()):
        p = p.strip()
        if not p:
            continue
        if DROP_EN_PARA.match(p):
            continue
        if re.fullmatch(r"So the statement is (True|False)\.?", p, re.I):
            continue
        paras.append(p)

    body = "\n\n".join(paras)
    true = bool(re.search(r"→\s*True", text, re.I))
    false = bool(re.search(r"→\s*False", text, re.I))
    concl = (
        "Die Aussage ist richtig."
        if true and not false
        else ("Die Aussage ist falsch." if false else "")
    )
    translated = translate_en(body)
    if concl and "Die Aussage ist" not in translated:
        translated = translated.rstrip() + "\n\n" + concl
    translated = translated.replace("Die Aussage ist wahr.", "Die Aussage ist richtig.")
    return translated.strip()


def strip_de_padding(text: str) -> str:
    drop = re.compile(
        r"^(?:"
        r"Beschreiben die Begebenheiten|"
        r"Das Einsetzen des (berechneten|behaupteten) Werts|"
        r"Prüfe durch Einsetzen|"
        r"Setzt man den behaupteten Wert"
        r")",
        re.I,
    )
    paras = []
    for p in re.split(r"\n\s*\n", text.strip()):
        p = p.strip()
        if not p or drop.match(p):
            continue
        paras.append(p)
    return "\n\n".join(paras).strip()


def rebuild_needed(de_text: str, en_text: str | None) -> bool:
    if de_text and NEEDS_REBUILD_DE.search(de_text):
        return True
    if en_text and NEEDS_REBUILD_EN.search(en_text):
        return True
    return False


MANUAL: dict[tuple[str, str, tuple | str], str] = {
    ("math-de-ch8.json", "MATH 8.85", ("statements", 2)): (
        "Die für eine gegebene Dosisrate benötigte Entfernung ist selbst eine Potenz dieser Dosisrate."
    ),
}


def load_en(ch: int) -> dict[str, dict]:
    path = EN_DIR / f"ch{ch}.json"
    if not path.exists():
        return {}
    return {t["id"]: t for t in json.loads(path.read_text())}


def english_leftovers(text: str) -> list[str]:
    masked, _ = mask_math(text)
    # Only flag clearly English stems still present (avoid German "also"/"In"/etc.)
    hits = re.findall(
        r"\b(?:hours?|before|lands at|Check:|Rewrite|Because|Throughout|"
        r"denotes the|gives|forces|requires|Cases:|rejected|matching Vieta|"
        r"litres?|metres?|True|False|Subtract|Multiply|Adding only|Target |"
        r"Longer side|Equal sides|Capacity is|Volume delivered|Meeting time|"
        r"Outer rectangle|Outer square|Let the|Set |Write |Known sum|Missing score|"
        r"Combined rates|Factor:|The equation becomes|strictly greater|"
        r"strictly smaller|satisfies it|the claim|solution of the given)\b",
        masked,
        re.I,
    )
    return hits


def main() -> None:
    changed_total = 0
    leftovers = 0
    samples: list[str] = []

    en4 = load_en(4)
    path4 = OUT / "math-de-ch4.json"
    de4 = json.loads(path4.read_text())

    for cid, task in de4.items():
        et = en4.get(cid) or {}
        en_list = et.get("tactical_explanations") or []
        de_list = list(task.get("tactical_explanations") or [])
        changed = False
        for i, de_text in enumerate(de_list):
            en_text = en_list[i] if i < len(en_list) else None
            if not isinstance(de_text, str):
                continue
            if not rebuild_needed(de_text, en_text if isinstance(en_text, str) else None):
                continue
            if not isinstance(en_text, str) or not en_text.strip():
                cleaned = strip_de_padding(de_text)
                if cleaned != de_text:
                    de_list[i] = cleaned
                    changed = True
                    changed_total += 1
                continue
            new = clean_en_explanation(en_text)
            if new and new != de_text:
                de_list[i] = new
                changed = True
                changed_total += 1
                bad = english_leftovers(new)
                if bad:
                    leftovers += 1
                    if leftovers <= 8:
                        print(f"LEFTOVER {cid}[{i}]: {bad[:8]} :: {new[:160]!r}")
                if cid == "MATH 4.227" and i == 1:
                    samples.append(new)
                elif len(samples) < 2 and "Stunden vor" in new:
                    samples.append(f"{cid}[{i}]\n{new}")
        if changed:
            task["tactical_explanations"] = de_list

    path4.write_text(json.dumps(de4, ensure_ascii=False, indent=2) + "\n")

    for (fname, cid, field), value in MANUAL.items():
        fpath = OUT / fname
        data = json.loads(fpath.read_text())
        task = data[cid]
        if isinstance(field, tuple):
            key, idx = field
            arr = list(task[key])
            if arr[idx] != value:
                arr[idx] = value
                task[key] = arr
                changed_total += 1
        else:
            if task.get(field) != value:
                task[field] = value
                changed_total += 1
        fpath.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    # Verify no Columbus / Geschichtsdaten remain
    blob = path4.read_text()
    for marker in ("Belosung", "Geschichtsdaten", "Älterenn", "Vorsrehns"):
        print(f"marker {marker}: {blob.count(marker)}")

    print(f"updated {changed_total} fields; leftovers_in {leftovers}")
    for s in samples:
        print("=" * 40)
        print(s)


if __name__ == "__main__":
    main()
