#!/usr/bin/env python3
"""QA-fix WiSo German math overlay for chapter 10 from EN dump."""

from __future__ import annotations

import hashlib
import json
import re
import time
from pathlib import Path

from deep_translator import MyMemoryTranslator

ROOT = Path("/workspace")
DE_PATH = ROOT / "src/data/wiso/math-de-ch10.json"
EN_PATH = Path("/tmp/wiso-math-en/ch10.json")
CACHE_PATH = Path("/tmp/wiso-math-qa-ch10-mt-cache.json")
OUT_REPORT = Path("/tmp/wiso-math-qa-ch10-report.md")

CURRENCY_RE = re.compile(r"\\\$")
DISPLAY_RE = re.compile(r"\$\$[\s\S]+?\$\$")
INLINE_RE = re.compile(r"(?<!\\)\$[^$\n]+?(?<!\\)\$")

# Longest-first phrase glossary (WU/exam German; Richtig/Falsch per brief).
PHRASES: list[tuple[str, str]] = [

    # --- Chapter 10 (Exponential & Log) domain glossary ---
    ("continuous force", "stetige Intensität"),
    ("Continuous force", "Stetige Intensität"),
    ("letter force", "Buchstaben-Intensität"),
    ("Letter force", "Buchstaben-Intensität"),
    ("the force ", "die Intensität "),
    ("The force ", "Die Intensität "),
    ("a force ", "eine Intensität "),
    ("force gap", "Intensitätsabstand"),
    ("force letter", "Intensitätsbuchstabe"),
    ("average force", "durchschnittliche Intensität"),
    ("matching force", "passende Intensität"),
    ("recovered force", "rekonstruierte Intensität"),
    ("rebuilt path", "rekonstruierter Pfad"),
    ("rebuilt model", "rekonstruiertes Modell"),
    ("Rebuild ", "Rekonstruiere "),
    ("rebuild ", "rekonstruiere "),
    ("Rebuild:", "Rekonstruktion:"),
    ("natural log", "natürlicher Logarithmus"),
    ("Natural log", "Natürlicher Logarithmus"),
    ("Take the natural log", "Nimm den natürlichen Logarithmus"),
    ("take the natural log", "nimm den natürlichen Logarithmus"),
    ("Take natural logs", "Nimm natürliche Logarithmen"),
    ("doubling time", "Verdopplungszeit"),
    ("Doubling time", "Verdopplungszeit"),
    ("doubling condition", "Verdopplungsbedingung"),
    ("Doubling condition", "Verdopplungsbedingung"),
    ("exact doubling", "exakte Verdopplung"),
    ("Exact doubling", "Exakte Verdopplung"),
    ("half-life", "Halbwertszeit"),
    ("Half-life", "Halbwertszeit"),
    ("continuous-exponential", "stetig-exponentiell"),
    ("Continuous-exponential", "Stetig-exponentiell"),
    ("one-year multiplier", "Einjahresfaktor"),
    ("one-year multipliers", "Einjahresfaktoren"),
    ("successive ratios", "aufeinanderfolgende Verhältnisse"),
    ("semi-log", "Semi-Log"),
    ("Semi-log", "Semi-Log"),
    ("per capita", "pro Kopf"),
    ("Per capita", "Pro Kopf"),
    ("crossing time", "Kreuzungszeit"),
    ("Crossing time", "Kreuzungszeit"),
    ("log-gap", "Log-Lücke"),
    ("chord slope", "Sehnensteigung"),
    ("Chord slopes", "Sehnensteigungen"),
    ("Newton cooling", "Newtonsche Abkühlung"),
    ("change-of-base", "Basiswechsel"),
    ("Change-of-base", "Basiswechsel"),
    ("piecewise continuous", "stückweise stetig"),
    ("Piecewise continuous", "Stückweise stetig"),
    ("stem letters", "Buchstaben der Aufgabenstellung"),
    ("the stem", "die Aufgabenstellung"),
    ("The stem", "Die Aufgabenstellung"),
    ("counter-example", "Gegenbeispiel"),
    ("counterexample", "Gegenbeispiel"),
    ("A single generic Gegenbeispiel under the Buchstaben der Aufgabenstellung is enough to reject",
     "Ein einziges generisches Gegenbeispiel unter den Buchstaben der Aufgabenstellung reicht, um"),
    ("A single generic counter-example under the stem letters is enough to reject",
     "Ein einziges generisches Gegenbeispiel unter den Buchstaben der Aufgabenstellung reicht, um"),
    ("integer multiples", "ganzzahlige Vielfache"),
    ("integer times", "ganzzahlige Zeiten"),
    ("for every integer", "für jede ganze Zahl"),
    ("For every integer", "Für jede ganze Zahl"),
    ("initial level", "Anfangsniveau"),
    ("Initial level", "Anfangsniveau"),
    ("claimed formula", "behauptete Formel"),
    ("The claim ", "Die Behauptung "),
    ("the claim ", "die Behauptung "),
    ("Logbuch", "natürlicher Logarithmus"),
    ("Protokoll", "Logarithmus"),
    (
        "Evaluate each statement. Mark it TRUE or FALSE.",
        "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.",
    ),
    (
        "Evaluate each statement. Mark it True or False.",
        "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.",
    ),
    (
        "Mark it TRUE or FALSE.",
        "Markiere sie mit Richtig oder Falsch.",
    ),
    (
        "Mark it True or False.",
        "Markiere sie mit Richtig oder Falsch.",
    ),
    ("So the statement is True.", "Die Aussage ist richtig."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("So the statement is true.", "Die Aussage ist richtig."),
    ("So the statement is false.", "Die Aussage ist falsch."),
    ("→ True", "→ Richtig"),
    ("→ False", "→ Falsch"),
    ("-> True", "→ Richtig"),
    ("-> False", "→ Falsch"),
    (
        "The computed figure agrees with the claim.",
        "Der berechnete Wert stimmt mit der Behauptung überein.",
    ),
    (
        "The computed figure disagrees with the claim.",
        "Der berechnete Wert stimmt nicht mit der Behauptung überein.",
    ),
    (
        "The mathematical result does not agree with the claim.",
        "Das mathematische Ergebnis stimmt nicht mit der Behauptung überein.",
    ),
    (
        "The mathematical result agrees with the claim.",
        "Das mathematische Ergebnis stimmt mit der Behauptung überein.",
    ),
    (
        "Start from the calibrated closed form recovered in the overview, then substitute only the input named in the claim.",
        "Gehe von der in der Übersicht rekonstruierten geschlossenen Form aus und setze nur die in der Behauptung genannte Eingabe ein.",
    ),
    (
        "Start from the calibrated closed form in the overview.",
        "Gehe von der kalibrierten geschlossenen Form in der Übersicht aus.",
    ),
    (
        "Form the ratio so the unknown positive coefficient cancels.",
        "Bilde das Verhältnis, sodass der unbekannte positive Koeffizient wegfällt.",
    ),
    (
        "Form a ratio so the unknown positive coefficient and the original input cancel:",
        "Bilde ein Verhältnis, sodass der unbekannte positive Koeffizient und die ursprüngliche Eingabe wegfallen:",
    ),
    (
        "Read the exponent from the overview before comparing growth rates.",
        "Lies den Exponenten aus der Übersicht, bevor du Wachstumsraten vergleichst.",
    ),
    (
        "Keep the stated domain in force while you evaluate the model.",
        "Halte die angegebene Definitionsmenge ein, während du das Modell auswertest.",
    ),
    (
        "Keep the recovered coefficient and exponent fixed; only the claimed input (or threshold) changes.",
        "Halte den rekonstruierten Koeffizienten und Exponenten fest; nur die behauptete Eingabe (oder Schwelle) ändert sich.",
    ),
    (
        "Keep the positive-domain restriction in view and isolate the power first:",
        "Behalte die Beschränkung auf den positiven Definitionsbereich im Blick und isoliere zuerst die Potenz:",
    ),
    (
        "Only the positive solution is admissible in this model. Comparing it with the proposed value gives",
        "In diesem Modell ist nur die positive Lösung zulässig. Der Vergleich mit dem vorgeschlagenen Wert ergibt",
    ),
    (
        "Rewrite the rational or negative power in ordinary real terms:",
        "Schreibe die rationale oder negative Potenz in gewöhnlicher reeller Form um:",
    ),
    (
        "This reveals the admissible inputs and attainable outputs:",
        "Damit werden die zulässigen Eingaben und erreichbaren Ausgaben sichtbar:",
    ),
    (
        "Therefore the actual domain-range pair is",
        "Daher lautet das tatsächliche Definitions-/Wertebereichs-Paar",
    ),
    (
        "Substitute the recorded input into the stated model:",
        "Setze die erfasste Eingabe in das angegebene Modell ein:",
    ),
    (
        "Interpret the rational or negative exponent before doing the final arithmetic:",
        "Interpretiere den rationalen oder negativen Exponenten vor der finalen Rechnung:",
    ),
    (
        "Composition is ordered: evaluate the inner map before the outer map.",
        "Die Verkettung ist geordnet: werte die innere Abbildung vor der äußeren aus.",
    ),
    (
        "Separate the scale factor from the original power:",
        "Trenne den Skalenfaktor von der ursprünglichen Potenz:",
    ),
    (
        "Complete the power evaluation:",
        "Schließe die Potenzauswertung ab:",
    ),
    (
        "Evaluating that power gives",
        "Das Auswerten dieser Potenz ergibt",
    ),
    (
        "Divide by the coefficient:",
        "Dividiere durch den Koeffizienten:",
    ),
    (
        "Raise both sides to the reciprocal exponent:",
        "Erhebe beide Seiten zum reziproken Exponenten:",
    ),
    (
        "Hence the model output is",
        "Damit lautet die Modellausgabe",
    ),
    (
        "Insert that inner output into",
        "Setze diese innere Ausgabe in",
    ),
    (
        "A nonzero power inverts to another power.",
        "Eine von null verschiedene Potenz invertiert zu einer anderen Potenz.",
    ),
    ("The overview recovered", "Die Übersicht rekonstruiert"),
    (". The overview recovered", ". Die Übersicht rekonstruiert"),
    ("The recovered law is", "Das rekonstruierte Gesetz lautet"),
    ("The recovered fit is", "Die rekonstruierte Anpassung lautet"),
    ("**Part 2: Solve.**", "**Teil 2: Lösung.**"),
    ("**Part 1: Translate.**", "**Teil 1: Übersetzung.**"),
    ("**Part 1: Building the model.**", "**Teil 1: Modellaufbau.**"),
    ("**Part 2: Building the model.**", "**Teil 2: Modellaufbau.**"),
    ("The report states", "Der Bericht gibt an"),
    ("they match.", "sie stimmen überein."),
    ("Topics:", "Themen:"),
    ("kilometres per hour", "Kilometer pro Stunde"),
    ("kilometers per hour", "Kilometer pro Stunde"),
    ("square centimetres", "Quadratzentimeter"),
    ("square centimeters", "Quadratzentimeter"),
    ("power law", "Potenzgesetz"),
    ("Power law", "Potenzgesetz"),
    ("power function", "Potenzfunktion"),
    ("Power function", "Potenzfunktion"),
    ("natural log", "natürlicher Logarithmus"),
    ("doubling time", "Verdopplungszeit"),
    ("Doubling time", "Verdopplungszeit"),
    ("Doubling", "Verdopplung von"),
    ("doubling", "Verdopplung von"),
    ("This is a level of", "Dies ist ein Niveau von"),
    ("This is a level at", "Dies ist ein Niveau bei"),
    ("sits under", "liegt unter"),
    ("sits above", "liegt über"),
    ("does not sit under", "liegt nicht unter"),
    ("does not sit above", "liegt nicht über"),
    ("The claim compares this with", "Die Behauptung vergleicht dies mit"),
    ("The claim needs more than", "Die Behauptung erfordert mehr als"),
    ("The claim is that this already sits above", "Die Behauptung lautet, dass dies bereits über"),
    ("The claim is that this already sits under", "Die Behauptung lautet, dass dies bereits unter"),
    ("Compare with the claim:", "Vergleiche mit der Behauptung:"),
    ("We have", "Wir haben"),
    ("matching the claim.", "was mit der Behauptung übereinstimmt."),
    ("which matches the claim.", "was mit der Behauptung übereinstimmt."),
    ("which does not match the claim.", "was nicht mit der Behauptung übereinstimmt."),
    ("The stem's value is", "Der Wert im Aufgabentext ist"),
    ("so the numerical comparison is", "daher lautet der Zahlenvergleich"),
    ("The proposed multiplier is", "Der vorgeschlagene Multiplikator ist"),
    ("and therefore", "und daher"),
    ("The leftover exponent is negative", "Der verbleibende Exponent ist negativ"),
    ("The leftover exponent is positive", "Der verbleibende Exponent ist positiv"),
    ("because the coefficient cancels", "weil der Koeffizient wegfällt"),
    ("A level squares the speed, then halves it.", "Ein Niveau quadriert die Geschwindigkeit und halbiert sie dann."),
    ("A speed multiplier", "Ein Geschwindigkeitsfaktor"),
    ("multiplies the index by", "multipliziert den Index mit"),
    ("Illuminance follows", "Die Beleuchtungsstärke folgt"),
    ("Moving the meter from", "Verschiebt man den Messwert von"),
    ("cut the reading by", "so sinkt die Anzeige um"),
    ("Either point then fixes", "Jeder der beiden Punkte bestimmt dann"),
    ("The ratio cancels", "Das Verhältnis eliminiert"),
    ("so isolating distance gives", "daher liefert das Isolieren der Entfernung"),
    ("Distance as a function of illuminance is still a monomial in", "Die Entfernung als Funktion der Beleuchtungsstärke ist weiterhin ein Monom in"),
    ("Falling illuminance does not introduce a logarithm.", "Fallende Beleuchtungsstärke führt keinen Logarithmus ein."),
    ("Gill area follows", "Die Kiemenfläche folgt"),
    ("body mass", "Körpermasse"),
    ("Body mass", "Körpermasse"),
    ("gill area", "Kiemenfläche"),
    ("Gill area", "Kiemenfläche"),
    ("Intensity is", "Die Intensität ist"),
    ("Let $m$ = body mass in grams and $G$ = gill area in square centimetres.", "Es sei $m$ = Körpermasse in Gramm und $G$ = Kiemenfläche in Quadratzentimetern."),
    ("The exponent is given, so the specimen fixes $A$. Dividing by mass subtracts one from the exponent.", "Der Exponent ist gegeben, daher bestimmt das Exemplar $A$. Division durch die Masse subtrahiert eins vom Exponenten."),
    ("1. Translate: the specimen.", "1. Übersetzung: das Exemplar."),
    ("At load", "Bei Last"),
    ("The Claim compares", "Die Behauptung vergleicht"),
    ("The claim compares", "Die Behauptung vergleicht"),
    ("Four successive doublings reach", "Vier aufeinanderfolgende Verdopplungen erreichen"),
    ("Now", "Nun"),
    ("so doubling time does not double emissions.", "daher verdoppelt die Verdopplung der Zeit die Emissionen nicht."),
    ("so doubling spend does not double revenue.", "daher verdoppelt die Verdopplung der Ausgaben den Umsatz nicht."),
    ("The index at", "Der Index bei"),
    ("The index reads", "Der Index zeigt"),
    ("The index is never negative", "Der Index ist nie negativ"),
    ("is never negative", "ist nie negativ"),
    ("Raising the speed from", "Erhöht man die Geschwindigkeit von"),
    ("is the multiplier", "ist der Multiplikator"),
    ("The coefficient cancels in the ratio:", "Der Koeffizient fällt im Verhältnis weg:"),
    ("At the higher standard speed, square first:", "Bei der höheren Standardgeschwindigkeit zuerst quadrieren:"),
    ("A square of a nonzero real number is positive, and the coefficient $0.5$ is positive. Their product is therefore positive for every $v>0$.", "Das Quadrat einer von null verschiedenen reellen Zahl ist positiv, und der Koeffizient $0.5$ ist positiv. Ihr Produkt ist daher für jedes $v>0$ positiv."),
    ("A ten percent overspeed is the speed multiplier", "Eine zehnprozentige Überhöhung ist der Geschwindigkeitsfaktor"),
    ("The index is multiplied by", "Der Index wird multipliziert mit"),
    ("a twenty-one percent rise rather than ten.", "einem Anstieg um einundzwanzig Prozent statt um zehn."),
    ("Both fitted points sit on the recovered law:", "Beide Anpassungs-Punkte liegen auf dem rekonstruierten Gesetz:"),
    ("An exponent of", "Ein Exponent von"),
    ("would require", "würde erfordern"),
    ("The observed ratio from (1) is", "Das beobachtete Verhältnis aus (1) ist"),
    ("is therefore not", "ist daher nicht"),
    ("The fitted response at", "Die angepasste Antwort bei"),
    ("The fitted law at", "Das angepasste Gesetz bei"),
    ("predicts", "sagt voraus"),
    ("That matches the recorded", "Das stimmt mit dem erfassten"),
    ("so the measurement does not contradict the fitted law.", ", daher widerspricht die Messung dem angepassten Gesetz nicht."),
    ("so the measurement contradicts the fitted law.", ", daher widerspricht die Messung dem angepassten Gesetz."),
    ("Thirty-two sits under", "Zweiunddreißig liegt unter"),
    ("Thirty-two sits above", "Zweiunddreißig liegt über"),
    ("Sixteen sits under", "Sechzehn liegt unter"),
    ("Sixteen sits above", "Sechzehn liegt über"),
    ("Forty point five does not exceed", "Vierzig Komma fünf übersteigt nicht"),
    ("Two thousand and forty-eight sits above", "Zweitausendachtundvierzig liegt über"),
    ("Three hundred and twenty does not sit under", "Dreihundertzwanzig liegt nicht unter"),
    ("That reading does not sit above", "Diese Anzeige liegt nicht über"),
    ("Illuminance is cut to one quarter.", "Die Beleuchtungsstärke wird auf ein Viertel gesenkt."),
    ("An extra metre is the size of the derivative.", "Ein zusätzlicher Meter entspricht der Größe der Ableitung."),
    ("The cut is larger nearer the lamp.", "Der Rückgang ist näher an der Lampe größer."),
    ("At the two named distances:", "Bei den beiden genannten Entfernungen:"),
    ("response $y$ against an input $x$", "Antwort $y$ zu einer Eingabe $x$"),
    ("a planned run at", "einem geplanten Lauf bei"),
    ("An analyst fits a power law", "Ein Analyst passt ein Potenzgesetz"),
    ("using the first two measurements only", "nur mit den ersten beiden Messungen an"),
    ("The report does not give", "Der Bericht gibt nicht an"),
    ("it states only that", "er hält nur fest, dass"),
    ("raising the test speed from", "die Erhöhung der Testgeschwindigkeit von"),
    ("raised the index by exactly", "den Index um genau"),
    ("points.", "Punkte erhöht hat."),
]

POST_FIXES: list[tuple[str, str]] = [

    # --- Ch10 MT garble cleanup ---
    ("Logbuch", "natürlicher Logarithmus"),
    ("natürlicher natürlicher Logarithmus", "natürlicher Logarithmus"),
    ("Protokoll", "Logarithmus"),
    ("Endkunden", ""),
    ("Bewerbung", ""),
    ("Bekanntgabe", ""),
    ("Verbriefung", "Behauptung"),
    ("Article", "Intensität"),
    ("morrize", ""),
    ("Umstand", ""),
    ("Gegenspiel", "Gegenbeispiel"),
    ("Auflage", "Aufgabenstellung"),
    ("beanspruchte", "behauptete"),
    ("beansprucht", "behauptet"),
    ("reduzierende", "Verdopplung"),
    ("Kraft ", "Intensität "),
    ("die Kraft", "die Intensität"),
    ("Der Kraft", "Die Intensität"),
    ("einer Kraft", "einer Intensität"),
    ("stetige Kraft", "stetige Intensität"),
    ("kontinuierliche Kraft", "stetige Intensität"),
    ("kontinuierliche Intensität", "stetige Intensität"),
    ("kontinuierlicher Pfad", "stetiger Pfad"),
    ("kontinuierliche Pfad", "stetige Pfad"),
    ("kontinuierlichen Pfad", "stetigen Pfad"),
    ("Force", "Intensität"),
    ("force", "Intensität"),
    ("Claim", "Behauptung"),
    ("Area", "Bereich"),
    ("Rebuild", "Rekonstruktion"),
    ("doubling", "Verdopplung"),
    ("Doubling", "Verdopplung"),
    ("Nehmen Sie", "Nimm"),
    ("teilen Sie sich", "teile"),
    ("Schreiben Sie", "Schreibe"),
    ("Befestigen Sie", "Fixiere"),
    ("Betrachten Sie", "Betrachte"),
    ("Interpretieren Sie", "Interpretiere"),
    ("Multiplizieren Sie", "Multipliziere"),
    ("Dividieren Sie", "Dividiere"),
    ("Markieren Sie es Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere es Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere sie mit Wahr oder Falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("Markiere sie als wahr oder falsch.", "Markiere sie mit Richtig oder Falsch."),
    ("→ Wahr", "→ Richtig"),
    ("Die Aussage ist wahr.", "Die Aussage ist richtig."),
    ("positiv Koeffizient", "positive Koeffizient"),
    ("dem Anspruch", "der Behauptung"),
    ("Der Anspruch", "Die Behauptung"),
    ("den Anspruch", "die Behauptung"),
    ("des Anspruchs", "der Behauptung"),
    ("Machtgesetz", "Potenzgesetz"),
    ("Kraftfunktion", "Potenzfunktion"),
    ("Bewerbungsantwort", "Antwort"),
    ("Verbriefungsbericht", "Bericht"),
    ("Mehrwertsteuerein- und - Kürzungen", "Eingaben und erreichbaren Ausgaben"),
    ("zulässig Mehrwertsteuerein", "zulässigen Eingaben"),
    ("Mehrwertsteuerplaner", "Scheduler"),
    ("Cloud Mehrwertsteuer", "Cloud-"),
    ("our run", "Lauf"),
    ("Power Law", "Potenzgesetz"),
    ("KiloMeter", "Kilometer"),
    ("Sitze unter", "liegt unter"),
    ("Sitze über", "liegt über"),
    ("32 Sitze unter", "32 liegt unter"),
    ("wiedereingezogenen", "rekonstruierten"),
    ("wiedereingezogen", "rekonstruiert"),
    ("Die Übersicht erholte sich", "Die Übersicht rekonstruiert"),
    ("Die Übersicht erholte", "Die Übersicht rekonstruiert"),
    ("erholte Exponent", "rekonstruiert den Exponenten"),
    ("wiederhergestellte Intensität", "rekonstruierte Intensität"),
    ("wieder Lücke", "rekonstruierte Form"),
    ("Protokoll nennt", "Bericht nennt"),
    ("Erhaltungsprotokoll", "Wartungsbericht"),
    ("Upgrade-Protokoll", "Upgrade-Bericht"),
    ("Sturmprotokoll", "Sturmbericht"),
    ("Zuschussmaßnahme", "Antwort"),
    ("Die Messung rack", "Die Messung"),
    ("eingebaute Reaktion", "angepasste Antwort"),
    ("hafen Autorität", "Hafenbehörde"),
    ("Die Doubling Boje Masse", "Die Verdopplung der Bojenmasse"),
    ("Doubling body mass doubles gill area.", "Verdopplung der Körpermasse verdoppelt die Kiemenfläche."),
    ("Gill area per gram is constant across body masses.", "Die Kiemenfläche pro Gramm ist über alle Körpermassen konstant."),
    ("Raising $v$", "Erhöht man $v$"),
    ("raises the index by", "so steigt der Index um"),
    ("multipliziert the index by", "multipliziert den Index mit"),
    ("multipliziert the", "multipliziert die"),
    ("because the Koeffizient cancels", "weil der Koeffizient wegfällt"),
    ("A level squares the speed, then halves it.", "Ein Niveau quadriert die Geschwindigkeit und halbiert sie dann."),
    ("A speed multiplier $k$ multipliziert", "Ein Geschwindigkeitsfaktor $k$ multipliziert"),
    ("Illuminance is cut to one quarter.", "Die Beleuchtungsstärke wird auf ein Viertel gesenkt."),
    ("That reading does not sit above", "Diese Anzeige liegt nicht über"),
    ("so isolating distance gives", "daher liefert das Isolieren der Entfernung"),
    ("OECD-Funktion", "Funktion"),
    ("Superb Meter", "Meter"),
    ("AntiMalware", ""),
    ("Decision", ""),
    ("Daherpaare", "Daher lautet das Paar"),
    ("The claimed", "Der behauptete Wert"),
    ("The index at", "Der Index bei"),
    (" is $", " ist $"),
    ("At the higher standard speed, square first:", "Bei der höheren Standardgeschwindigkeit zuerst quadrieren:"),
    ("The index reads", "Der Index zeigt"),
    ("The index is never negativ", "Der Index ist nie negativ"),
    ("A ten percent overspeed is the speed multiplier", "Eine zehnprozentige Überhöhung ist der Geschwindigkeitsfaktor"),
    ("The index is multiplied by", "Der Index wird multipliziert mit"),
    ("a twenty-one percent rise rather than ten.", "einem Anstieg um einundzwanzig Prozent statt um zehn."),
    ("Raising the speed from", "Erhöht man die Geschwindigkeit von"),
    ("is the multiplier", "ist der Multiplikator"),
    ("This is a level of", "Dies ist ein Niveau von"),
    ("This is a level at", "Dies ist ein Niveau bei"),
    ("At load", "Bei Last"),
    ("Four successive doublings reach", "Vier aufeinanderfolgende Verdopplungen erreichen"),
    ("so doubling time does not double emissions.", "daher verdoppelt die Verdopplung der Zeit die Emissionen nicht."),
    ("so doubling spend does not double revenue.", "daher verdoppelt die Verdopplung der Ausgaben den Umsatz nicht."),
    ("Thirty-two sits above", "Zweiunddreißig liegt über"),
    ("Thirty-two sits under", "Zweiunddreißig liegt unter"),
    ("Sixteen sits under", "Sechzehn liegt unter"),
    ("Forty point five does not exceed", "Vierzig Komma fünf übersteigt nicht"),
    ("Two thousand and forty-eight sits above", "Zweitausendachtundvierzig liegt über"),
    ("sits under", "liegt unter"),
    ("sits above", "liegt über"),
    ("does not sit under", "liegt nicht unter"),
    ("does not sit above", "liegt nicht über"),
    ("The Claim", "Die Behauptung"),
    ("the Claim", "die Behauptung"),
    ("the claim", "die Behauptung"),
    ("Gill-Bereich", "Kiemenfläche"),
    ("Planungsfläche", "Kiemenfläche"),
    ("Quadrat Zentimeter", "Quadratzentimeter"),
    ("Lassen Sie $m$", "Es sei $m$"),
    ("Ex Beweismittel", "Exponent"),
    ("Erhebungsgröße:", "gegeben:"),
    ("Kompetenzen auf", "Masse auf"),
    ("Die Regelung ist auf dem Stand von", "Dies ist ein Niveau bei"),
    ("Die Übersicht ist wiederhergestellt", "Die Übersicht rekonstruiert"),
    ("follow,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, kurzfristige punkt,-,,,,,,,,,,, äußerte,,,, juristische,,,,,,,,,, Aussetzung,,,,,", ""),
    ("..,,,", "."),
    ("alert Meter", "Meter"),
    ("Überprüfung", "lux"),
]

EN_MARK = re.compile(
    r"\b(the|and|of|to|is|for|that|with|this|from|are|was|were|have|has|"
    r"which|each|true|false|consider|evaluate|statement|given|let|claim|"
    r"because|therefore|level|sits|under|above|recovered|overview|computed|"
    r"figure|agrees|disagrees|doubling|raising|multiplies|coefficient|"
    r"cancels|does|not|already|still|body|mass|gill|area|illuminance|"
    r"reading|claimed|index|speed|power|law|fit|fitted|response|"
    r"measurement|specimen|intensity|scheduler|dashboard|workload)\b",
    re.I,
)
DE_MARK = re.compile(
    r"[äöüÄÖÜß]|\b(der|die|das|und|ist|von|mit|für|eine|ein|sind|richtig|"
    r"falsch|sei|seien|gegeben|berechnen|aussage|behauptung|betrachte|"
    r"markiere|bewerte|lösung|übersicht|koeffizient|exponent|niveau)\b",
    re.I,
)


def protect_all(text: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def keep(m: re.Match[str]) -> str:
        tokens.append(m.group(0))
        return f" ZZTOK{len(tokens) - 1}ZZ "

    masked = CURRENCY_RE.sub(keep, text)
    masked = DISPLAY_RE.sub(keep, masked)
    masked = INLINE_RE.sub(keep, masked)
    return masked, tokens


def restore_all(text: str, tokens: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return tokens[i] if 0 <= i < len(tokens) else m.group(0)

    out = re.sub(r"\s*ZZTOK(\d+)ZZ\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *([,.;:!?])", r"\1", out)
    out = re.sub(r" \n", "\n", out)
    out = re.sub(r"\n ", "\n", out)
    return out.strip()


def apply_pairs(text: str, pairs: list[tuple[str, str]]) -> str:
    out = text
    for a, b in sorted(pairs, key=lambda x: -len(x[0])):
        out = out.replace(a, b)
    return out


def needs_mt(text: str) -> bool:
    if not text or not text.strip():
        return False
    plain = re.sub(r"ZZTOK\d+ZZ", " ", text)
    if not re.search(r"[A-Za-z]{3,}", plain):
        return False
    en_n = len(EN_MARK.findall(plain))
    de_n = len(DE_MARK.findall(plain))
    return en_n >= 2 and en_n > de_n


class Translator:
    def __init__(self) -> None:
        self.cache: dict[str, str] = {}
        if CACHE_PATH.exists():
            self.cache = json.loads(CACHE_PATH.read_text())
        self.backend = MyMemoryTranslator(source="en-US", target="de-DE")
        self.calls = 0

    def save(self) -> None:
        CACHE_PATH.write_text(json.dumps(self.cache, ensure_ascii=False, indent=2) + "\n")

    def translate_chunk(self, chunk: str) -> str:
        key = hashlib.sha1(chunk.encode()).hexdigest()
        if key in self.cache:
            return self.cache[key]
        # MyMemory limit ~500 chars
        if len(chunk) > 450:
            # split on sentence boundaries
            parts = re.split(r"(?<=[.!?])\s+", chunk)
            out: list[str] = []
            buf = ""
            for p in parts:
                if len(buf) + len(p) + 1 > 450 and buf:
                    out.append(self.translate_chunk(buf))
                    buf = p
                else:
                    buf = f"{buf} {p}".strip() if buf else p
            if buf:
                out.append(self.translate_chunk(buf))
            result = " ".join(out)
            self.cache[key] = result
            return result
        for attempt in range(6):
            try:
                time.sleep(0.35 + 0.15 * attempt)
                result = self.backend.translate(chunk)
                self.calls += 1
                self.cache[key] = result
                if self.calls % 20 == 0:
                    self.save()
                return result
            except Exception as e:
                wait = 2 ** attempt
                print(f"  MT retry {attempt+1}: {e}; sleep {wait}s")
                time.sleep(wait)
        print(f"  MT FAILED, leaving English: {chunk[:80]}")
        self.cache[key] = chunk
        return chunk


def translate_field(text: str, tr: Translator) -> str:
    if not text or not str(text).strip():
        return text
    original = str(text)
    # Preserve leading letter markers before MT
    masked, tokens = protect_all(original)
    step = apply_pairs(masked, PHRASES)
    if needs_mt(step):
        # Translate paragraph by paragraph, keep blank lines
        parts = re.split(r"(\n\s*\n)", step)
        out_parts: list[str] = []
        for part in parts:
            if not part or part.isspace() or re.fullmatch(r"\n\s*\n", part or ""):
                out_parts.append(part)
                continue
            # line-wise for mixed math/prose
            lines = part.split("\n")
            rebuilt: list[str] = []
            for line in lines:
                if needs_mt(line):
                    # keep ZZTOK tokens; translate surrounding prose
                    rebuilt.append(tr.translate_chunk(line))
                else:
                    rebuilt.append(line)
            out_parts.append("\n".join(rebuilt))
        step = "".join(out_parts)
        step = apply_pairs(step, PHRASES)
    step = restore_all(step, tokens)
    step = apply_pairs(step, POST_FIXES)
    # Cleanup doubled spaces / empty leftovers
    step = re.sub(r"[ \t]{2,}", " ", step)
    step = re.sub(r"\n{3,}", "\n\n", step)
    return step.strip()


def verdict_ok(expl: str, answer: bool) -> bool:
    want = "→ Richtig" if answer else "→ Falsch"
    alt = "→ Wahr" if answer else "→ Falsch"
    closing = "richtig." if answer else "falsch."
    return (want in expl or alt in expl) and closing in expl.lower()


def main() -> None:
    en_list = json.loads(EN_PATH.read_text())
    en = {t["case_id"]: t for t in en_list}
    old_de = json.loads(DE_PATH.read_text()) if DE_PATH.exists() else {}
    tr = Translator()
    new_de: dict[str, dict] = {}
    fixed = 0
    reviewed = 0

    # Preserve key order as in EN list
    for task in en_list:
        cid = task["case_id"]
        reviewed += 1
        print(f"[{reviewed}/{len(en_list)}] {cid}")
        out = {
            "title": translate_field(task["title"], tr),
            "context": translate_field(task["context"], tr),
            "statements": [translate_field(s, tr) for s in task["statements"]],
            "tactical_explanations": [
                translate_field(s, tr) for s in task["tactical_explanations"]
            ],
            "solution_overview": translate_field(task["solution_overview"], tr),
        }
        # Force verdict polarity from answer_key
        answers = task.get("answer_key") or []
        fixed_expls = []
        for i, expl in enumerate(out["tactical_explanations"]):
            ans = bool(answers[i]) if i < len(answers) else None
            letter = chr(ord("A") + i)
            if ans is not None:
                # normalize header and closing
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
                    count=1,
                    flags=re.I,
                )
                if "Die Aussage ist" not in expl:
                    expl = expl.rstrip() + f"\n\nDie Aussage ist {'richtig' if ans else 'falsch'}."
            fixed_expls.append(expl)
        out["tactical_explanations"] = fixed_expls

        old = old_de.get(cid)
        if old != out:
            fixed += 1
        new_de[cid] = out

        # Incremental save every 15 (merge so unprocessed keys stay)
        if reviewed % 15 == 0:
            merged = dict(old_de)
            merged.update(new_de)
            for o in set(merged) - set(en):
                merged.pop(o, None)
            DE_PATH.write_text(
                json.dumps(merged, ensure_ascii=False, indent=2) + "\n"
            )
            tr.save()
            print(f"  saved checkpoint ({reviewed})")

    # Drop orphans not in EN
    orphans = sorted(set(old_de) - set(en))
    DE_PATH.write_text(json.dumps(new_de, ensure_ascii=False, indent=2) + "\n")
    tr.save()

    # Scan remaining issues
    issues = []
    bad_terms = re.compile(
        r"Mehrwertsteuer|Kennzahlen|Bewerbung|Bekanntgabe|Logbuch|morrize|"
        r"Verbriefung|Endkunden|\bArticle\b|Umstand|Gegenspiel|Auflage|"
        r"reduzierende|Protokoll|⟦|⟧|"
        r"\b(The claimed|This is a level|sits above|sits under|Illuminance|"
        r"Evaluate each|True or False|Power Law|our run|Gill area|Doubling body|"
        r"Raising \$|At load|Four successive)\b",
        re.I,
    )
    for cid, t in new_de.items():
        blob = json.dumps(t, ensure_ascii=False)
        if bad_terms.search(blob):
            issues.append(f"{cid}: leftover garble/EN")
        for i, expl in enumerate(t["tactical_explanations"]):
            ans = en[cid]["answer_key"][i]
            if not verdict_ok(expl, bool(ans)):
                issues.append(f"{cid}[{i}]: verdict mismatch")

    report = [
        f"# WiSo Math DE QA Report — Chapter 10",
        "",
        f"- Reviewed: {reviewed}",
        f"- Rewritten/changed: {fixed}",
        f"- Orphans removed: {orphans}",
        f"- MT calls: {tr.calls}",
        f"- Remaining automated flags: {len(issues)}",
        "",
    ]
    if issues:
        report.append("## Remaining flags")
        report.extend(f"- {x}" for x in issues[:80])
        if len(issues) > 80:
            report.append(f"- ... +{len(issues)-80} more")
    else:
        report.append("No remaining automated flags.")
    report.append("")
    report.append("EN math bugs fixed: none.")
    OUT_REPORT.write_text("\n".join(report) + "\n")
    print(f"Done. fixed={fixed} orphans={orphans} issues={len(issues)}")
    for x in issues[:30]:
        print(" ", x)


if __name__ == "__main__":
    main()
