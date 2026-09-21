#!/usr/bin/env python3
"""Build src/data/wiso-mock-exam-1-math-de.json from the BBE Mock 2 English math tasks.

Structure, answer keys, figures and tables are taken unchanged from the English
source; title, context, statements, solution_overview and tactical_explanations
are replaced by the German BBE mock-teacher versions kept in DE below.
"""

import json
import pathlib
import re
import sys

EN_SOURCE = pathlib.Path("/tmp/mock2-math-en.json")
OUT = pathlib.Path(__file__).resolve().parents[1] / "src/data/wiso-mock-exam-1-math-de.json"

DE = {}

DE["MATH 1.108"] = {
    "title": "Sieben Finalisten und der Turnierkader",
    "context": (
        "Sieben Finalisten — Uma, Victor, Wendy, Xavier, Yara, Zane und Bianca — entscheiden "
        "über ihre Turnierteilnahme. Die Teilnahme folgt diesen Regeln:\n\n"
        "1. Uma nimmt genau dann teil, wenn Victor teilnimmt.\n\n"
        "2. Wenn Victor teilnimmt, dann nimmt Wendy teil.\n\n"
        "3. Genau eine Person von Wendy oder Xavier nimmt teil (nie beide, nie keine).\n\n"
        "4. Wenn Xavier teilnimmt, dann nimmt Yara nicht teil.\n\n"
        "5. Mindestens eine Person von Yara oder Zane nimmt teil.\n\n"
        "6. Zane nimmt nur dann teil, wenn Bianca nicht teilnimmt.\n\n"
        "7. Wenn Bianca teilnimmt, dann nimmt Uma teil.\n\n"
        "8. Mindestens vier der sieben Finalisten nehmen teil."
    ),
    "statements": [
        "Victor nimmt in jedem gültigen Kader teil.",
        "Es ist möglich, dass Xavier in einem gültigen Kader teilnimmt.",
        "Wenn Bianca teilnimmt, dann nimmt Zane nicht teil.",
        "Es gibt genau einen gültigen Kader, der alle acht Regeln erfüllt.",
        "Es ist möglich, dass genau sechs der sieben Finalisten teilnehmen.",
    ],
    "solution_overview": (
        "**Teil 1: Ansatz.**\n\n"
        "Schreibe $U,V,W,X,Y,Z,B$ dafür, dass Uma, Victor, Wendy, Xavier, Yara, Zane, Bianca "
        "teilnehmen. Der Aufgabentext lautet dann\n\n"
        "$$(1)\\ U\\Leftrightarrow V,\\qquad (2)\\ V\\Rightarrow W,\\qquad "
        "(3)\\ (W\\land\\neg X)\\lor(\\neg W\\land X),$$\n\n"
        "$$(4)\\ X\\Rightarrow\\neg Y,\\qquad (5)\\ Y\\lor Z,\\qquad "
        "(6)\\ Z\\Rightarrow\\neg B,\\qquad (7)\\ B\\Rightarrow U,$$\n\n"
        "und (8) mindestens vier der sieben nehmen teil. „$P$ nur dann, wenn $Q$“ ist "
        "$P\\Rightarrow Q$.\n\n"
        "**Teil 2: Gemeinsame Zwangsschlüsse (gelten für alle Buchstaben).**\n\n"
        "Nimm testweise $\\neg V$ an: dann $\\neg U$ nach (1) und $\\neg B$ nach der "
        "Kontraposition von (7). Regel (3) spaltet in $W\\land\\neg X$ (höchstens $\\{W,Y,Z\\}$, "
        "Größe $\\le 3$) oder $X\\land\\neg W$ (dann $\\neg Y$ nach (4) und $Z$ nach (5), "
        "Größe $2$). Beide Fälle verletzen (8), also ist Victor erzwungen. Daraus folgen $U$ "
        "nach (1), $W$ nach (2) und $\\neg X$ nach (3).\n\n"
        "Erzwungener Kern: $\\{U,V,W\\}$ dabei, $X$ draußen. Für $Y,Z,B$ lassen die Regeln "
        "(5)–(6) nur die Ergänzungen $\\{Y\\}$, $\\{Z\\}$, $\\{Y,B\\}$, $\\{Y,Z\\}$ zu.\n\n"
        "**Wahrheitstafel der gültigen Kader (erzwungene Spalten zuerst).**\n\n"
        "| $U$ | $V$ | $W$ | $X$ | $Y$ | $Z$ | $B$ | Größe | gültig? |\n"
        "| --- | --- | --- | --- | --- | --- | --- | ---: | --- |\n"
        "| 1 | 1 | 1 | 0 | 1 | 0 | 0 | 4 | ja |\n"
        "| 1 | 1 | 1 | 0 | 1 | 0 | 1 | 5 | ja |\n"
        "| 1 | 1 | 1 | 0 | 1 | 1 | 0 | 5 | ja |\n"
        "| 1 | 1 | 1 | 0 | 0 | 1 | 0 | 4 | ja |\n"
        "| 1 | 1 | 1 | 0 | 0 | 0 | * | $\\le 3$ | nein, (5) verletzt |\n"
        "| 1 | 1 | 1 | 0 | * | 1 | 1 | — | nein, (6) verletzt |\n\n"
        "Es gibt also genau vier gültige Kader. Xavier ist nie dabei, und sechs Teilnehmende "
        "kommen nie zustande, weil $X=0$ gilt und $Z=B=1$ verboten ist."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Prüfe, ob Victor erzwungen ist, über den Gegentest: nimm an, Victor ist draußen, "
            "und schau, ob dann noch ein Kader alle acht Regeln erfüllt.\n\n"
            "Annahme $\\neg V$. Regel (1) ist die Äquivalenz $U\\Leftrightarrow V$, also ist "
            "auch Uma draußen:\n\n"
            "$$\\neg V \\implies \\neg U$$\n\n"
            "Regel (7) ist $B\\Rightarrow U$. Die Kontraposition $\\neg U\\Rightarrow\\neg B$ "
            "wirft auch Bianca heraus:\n\n"
            "$$\\neg U \\implies \\neg B$$\n\n"
            "Übrig bleiben nur Wendy, Xavier, Yara und Zane. Regel (3) lässt genau eine Person "
            "von Wendy oder Xavier zu, also zwei Fälle.\n\n"
            "**Fall Wendy dabei, Xavier draußen.** Dann können höchstens Wendy, Yara und Zane "
            "teilnehmen, also höchstens drei Personen. Regel (8) verlangt vier — der Fall "
            "scheitert.\n\n"
            "**Fall Xavier dabei, Wendy draußen.** Regel (4) ist $X\\Rightarrow\\neg Y$, also "
            "ist Yara draußen. Regel (5) verlangt $Y\\lor Z$, damit muss Zane teilnehmen. Der "
            "Kader ist dann $\\{X,Z\\}$ mit Größe $2$, wieder unter vier.\n\n"
            "Beide Zweige ohne Victor verletzen Regel (8). Also nimmt Victor in jedem gültigen "
            "Kader teil.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Falsch\n\n"
            "Aus Buchstabe A steht fest: Victor ist in jedem gültigen Kader. Zieh diese "
            "Information durch die folgenden Regeln durch.\n\n"
            "Regel (2) ist $V\\Rightarrow W$. Mit Victor dabei muss Wendy teilnehmen:\n\n"
            "$$V \\implies W$$\n\n"
            "Regel (3) lässt genau eine Person von Wendy oder Xavier zu. Wendy ist dabei, also "
            "kann Xavier nicht dabei sein:\n\n"
            "$$W \\implies \\neg X$$\n\n"
            "Xavier ist damit aus jedem gültigen Kader ausgeschlossen. Die Behauptung verlangt "
            "einen Kader mit Xavier — den gibt es nicht.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**C.** → Wahr\n\n"
            "Regel (6) lautet „Zane nimmt nur dann teil, wenn Bianca nicht teilnimmt“, als "
            "Implikation\n\n"
            "$$Z \\Rightarrow \\neg B$$\n\n"
            "Die Kontraposition von $P\\Rightarrow Q$ ist $\\neg Q\\Rightarrow\\neg P$. Hier "
            "ist $P=Z$ und $Q=\\neg B$, also\n\n"
            "$$\\neg(\\neg B) \\Rightarrow \\neg Z$$\n\n"
            "$$B \\Rightarrow \\neg Z$$\n\n"
            "Das ist genau „Wenn Bianca teilnimmt, dann nimmt Zane nicht teil“. Die Behauptung "
            "gibt damit nur eine zwingende Folge von Regel (6) wieder.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Falsch\n\n"
            "Mit erzwungenem Victor liefern $V\\Rightarrow W$ und Regel (3) auch Uma dabei, "
            "Wendy dabei und Xavier draußen. Der erzwungene Kern ist also\n\n"
            "$$\\{U,V,W\\}\\quad\\text{mit }X\\text{ draußen}$$\n\n"
            "Frei bleiben nur $Y,Z,B$ unter (5) $Y\\lor Z$ und (6) $Z\\Rightarrow\\neg B$, also "
            "nie Zane und Bianca zusammen. Die erlaubten Ergänzungen sind\n\n"
            "$$\\{Y\\},\\quad \\{Z\\},\\quad \\{Y,B\\},\\quad \\{Y,Z\\}$$\n\n"
            "Das Tripel $\\{Y,Z,B\\}$ verletzt (6), $\\{B\\}$ allein verletzt (5), $\\{Z,B\\}$ "
            "verletzt (6). Jede erlaubte Ergänzung liefert einen anderen vollständigen Kader "
            "auf demselben Kern, also gibt es vier gültige Kader und nicht genau einen.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Falsch\n\n"
            "Ein Kader der Größe sechs bräuchte sechs der sieben Finalisten. Der Kern "
            "$\\{U,V,W\\}$ ist gesetzt und Xavier ist ausgeschlossen, also müssten Yara, Zane "
            "und Bianca alle drei dazukommen:\n\n"
            "$$\\{U,V,W,Y,Z,B\\}$$\n\n"
            "Regel (6) ist aber $Z\\Rightarrow\\neg B$, Zane und Bianca können nicht beide "
            "teilnehmen. Die Ergänzung $\\{Y,Z,B\\}$ ist damit verboten.\n\n"
            "Die erlaubten Ergänzungen haben Größe $1$ oder $2$, die Kader also Größe $4$ oder "
            "$5$. Die Größe sechs tritt nie auf.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 2.137"] = {
    "title": "Klausuraufgaben – 1",
    "context": "Bewerte jede Aussage. Markiere sie mit WAHR oder FALSCH.",
    "statements": [
        "Für alle reellen $x$, $y$, $z$ gilt $x^2+y^2+z^2-xy-yz-zx=\\tfrac12\\left[(x-y)^2+(y-z)^2+(z-x)^2\\right]$.",
        "Bei $t=2$ sind sowohl $\\dfrac{1}{1+\\dfrac{1}{1+\\frac1t}}$ als auch $\\dfrac{t+1}{2t+1}$ gleich $\\dfrac{3}{5}$.",
        "Für $u>0$ und $v>0$ mit $u\\neq v$ gilt $\\dfrac{\\sqrt u-\\sqrt v}{\\sqrt u+\\sqrt v}=\\dfrac{u-2\\sqrt{uv}+v}{u-v}$.",
        "Bei $x=-2$, $y=3$ sind sowohl $|xy|$ als auch $|x|\\,|y|$ gleich $6$.",
        "Wenn $p>q$, dann $p^2>q^2$.",
    ],
    "solution_overview": (
        "Fünf kurze Einzelprüfungen aus der Termumformung. Die binomische Formel "
        "$(a-b)^2=a^2-2ab+b^2$ trägt A und C, der Kettenbruch in B wird von innen nach außen "
        "vereinfacht, D ist die Multiplikativität des Betrags $|xy|=|x|\\,|y|$, und E scheitert "
        "an der dritten binomischen Formel:\n\n"
        "$$p^{2}-q^{2}=(p-q)(p+q)$$\n\n"
        "Quadrieren ist nur auf $[0,\\infty)$ monoton; bei negativen Zahlen kippt die Ordnung."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Rechne die rechte Seite aus und vergleiche sie mit der linken.\n\n"
            "Die drei Quadrate der Differenzen:\n\n"
            "$$(x-y)^2=x^2-2xy+y^2$$\n\n"
            "$$(y-z)^2=y^2-2yz+z^2$$\n\n"
            "$$(z-x)^2=z^2-2zx+x^2$$\n\n"
            "Addieren und halbieren:\n\n"
            "$$\\tfrac12\\bigl[(x-y)^2+(y-z)^2+(z-x)^2\\bigr]=x^2+y^2+z^2-xy-yz-zx$$\n\n"
            "Beide Seiten stimmen für alle reellen $x$, $y$, $z$ überein.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Vereinfache den Kettenbruch von innen nach außen, mit $t\\neq 0$, $t\\neq -1$ und "
            "$t\\neq -\\tfrac12$.\n\n"
            "Innerste Summe:\n\n"
            "$$1+\\frac{1}{t}=\\frac{t+1}{t}$$\n\n"
            "Erster Kehrwert:\n\n"
            "$$\\frac{1}{1+\\frac{1}{t}}=\\frac{t}{t+1}$$\n\n"
            "Äußere Summe:\n\n"
            "$$1+\\frac{t}{t+1}=\\frac{2t+1}{t+1}$$\n\n"
            "Äußerer Kehrwert:\n\n"
            "$$\\dfrac{1}{1+\\dfrac{1}{1+\\frac{1}{t}}}=\\dfrac{t+1}{2t+1}$$\n\n"
            "Einsetzen von $t=2$ liefert auf beiden Seiten\n\n"
            "$$\\dfrac{2+1}{2\\cdot 2+1}=\\dfrac{3}{5}$$\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Mache den Nenner wurzelfrei, indem du mit dem konjugierten Ausdruck "
            "$\\sqrt{u}-\\sqrt{v}$ erweiterst.\n\n"
            "$$\\dfrac{\\sqrt{u}-\\sqrt{v}}{\\sqrt{u}+\\sqrt{v}}"
            "=\\dfrac{(\\sqrt{u}-\\sqrt{v})^{2}}{(\\sqrt{u}+\\sqrt{v})(\\sqrt{u}-\\sqrt{v})}"
            "=\\dfrac{(\\sqrt{u}-\\sqrt{v})^{2}}{u-v}$$\n\n"
            "Der Zähler nach der binomischen Formel:\n\n"
            "$$(\\sqrt{u}-\\sqrt{v})^{2}=u-2\\sqrt{uv}+v$$\n\n"
            "Zusammen also\n\n"
            "$$\\dfrac{\\sqrt{u}-\\sqrt{v}}{\\sqrt{u}+\\sqrt{v}}"
            "=\\dfrac{u-2\\sqrt{uv}+v}{u-v}$$\n\n"
            "Wegen $u\\neq v$ ist der Nenner ungleich null, die Umformung also zulässig. Das "
            "ist genau die behauptete Form.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Wahr\n\n"
            "Setze $x=-2$ und $y=3$ in beide Betragsausdrücke ein.\n\n"
            "Erst multiplizieren, dann Betrag:\n\n"
            "$$xy=(-2)\\cdot 3=-6$$\n\n"
            "$$|xy|=|-6|=6$$\n\n"
            "Erst Beträge, dann multiplizieren:\n\n"
            "$$|x|=|-2|=2,\\qquad |y|=|3|=3$$\n\n"
            "$$|x|\\,|y|=2\\cdot 3=6$$\n\n"
            "Beide Seiten ergeben $6$, genau den behaupteten Wert. Allgemein gilt "
            "$|xy|=|x|\\,|y|$ für alle reellen $x,y$; hier ist es die konkrete Zahlenprobe.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Quadrieren erhält die Ordnung nicht auf ganz $\\mathbb{R}$.\n\n"
            "Zerlege die Differenz der Quadrate:\n\n"
            "$$p^{2}-q^{2}=(p-q)(p+q)$$\n\n"
            "Aus $p>q$ folgt $p-q>0$, aber der Faktor $p+q$ kann negativ sein. Dann ist das "
            "Produkt negativ.\n\n"
            "Gegenbeispiel $p=-1$, $q=-3$: es gilt $-1>-3$, aber\n\n"
            "$$p^{2}=1,\\qquad q^{2}=9,\\qquad 1<9$$\n\n"
            "Aus $p>q$ folgt also nicht $p^{2}>q^{2}$.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 11.60"] = {
    "title": "Bewertung zweier Franchise-Zahlungen mit gemeinsamem Zeithorizont",
    "context": (
        "Ein Franchisevertrag sichert einem Investor zwei Zahlungen des Franchisenehmers zu: "
        "USD 30 000 in genau 5 Jahren und USD 55 000 in genau 10 Jahren, also nach dem "
        "doppelten Horizont. Diskontiert wird stetig mit 8 % pro Jahr. Weil der zweite "
        "Zahlungszeitpunkt genau doppelt so weit entfernt liegt, ist sein Diskontfaktor das "
        "Quadrat des ersten. Die Aufgabe verwendet $K_1 = 30000$ bei $t_1 = 5$, "
        "$K_2 = 55000$ bei $t_2 = 10$ und $r = 0{,}08$."
    ),
    "statements": [
        "Der Diskontfaktor für die 5-Jahres-Zahlung beträgt etwa 0,6703.",
        "Der Diskontfaktor für die 10-Jahres-Zahlung beträgt etwa 0,4493.",
        "Der Barwert der Zahlung über USD 30 000 beträgt etwa USD 21 500,00.",
        "Der Barwert der Zahlung über USD 55 000 beträgt etwa USD 26 000,00.",
        "Der gesamte Barwert, den der Investor heute für beide Zahlungen zahlen sollte, beträgt etwa USD 47 500,00.",
    ],
    "solution_overview": (
        "Zwei Zahlungen, stetige Diskontierung. Bei stetiger Verzinsung mit der Rate $r$ hat "
        "eine Zahlung $K$ nach $t$ Jahren den Barwert\n\n"
        "$$\\mathrm{BW}=K\\,e^{-rt}$$\n\n"
        "**Teil 1: Ansatz.**\n\n"
        "$$K_1 = 30\\,000,\\qquad t_1 = 5,\\qquad K_2 = 55\\,000,\\qquad t_2 = 10,\\qquad r = 0{,}08$$\n\n"
        "**Teil 2: Rechnung.**\n\n"
        "$$e^{-0{,}08\\cdot 5}=e^{-0{,}4}\\approx 0{,}6703$$\n\n"
        "$$e^{-0{,}08\\cdot 10}=e^{-0{,}8}\\approx 0{,}4493$$\n\n"
        "Weil $t_2=2t_1$ ist, gilt $(0{,}6703)^{2}\\approx 0{,}4493$.\n\n"
        "$$\\mathrm{BW}_1 = 30\\,000\\,e^{-0{,}4}\\approx 20\\,109{,}60$$\n\n"
        "$$\\mathrm{BW}_2 = 55\\,000\\,e^{-0{,}8}\\approx 24\\,713{,}09$$\n\n"
        "$$\\mathrm{BW} = 20\\,109{,}60+24\\,713{,}09\\approx 44\\,822{,}69$$\n\n"
        "Der faire Preis heute liegt also bei rund USD 44 823."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Stetige Diskontierung mit $r=0{,}08$ über $t_1=5$ Jahre benutzt den Faktor "
            "$e^{-rt}$:\n\n"
            "$$e^{-0{,}08\\cdot 5}=e^{-0{,}4}$$\n\n"
            "Numerisch ist $e^{-0{,}4}\\approx 0{,}670320$, gerundet also $0{,}6703$. Das ist "
            "genau der behauptete Wert.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Der zweite Horizont ist $t_2=10=2\\cdot 5$, also\n\n"
            "$$e^{-0{,}08\\cdot 10}=e^{-0{,}8}=\\left(e^{-0{,}4}\\right)^{2}$$\n\n"
            "Mit $e^{-0{,}4}\\approx 0{,}6703$ folgt\n\n"
            "$$(0{,}6703)^{2}\\approx 0{,}4493$$\n\n"
            "Direkt gerechnet ist $e^{-0{,}8}\\approx 0{,}449329$, gerundet $0{,}4493$. Das "
            "passt zur Behauptung.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Falsch\n\n"
            "Barwert der ersten Zahlung:\n\n"
            "$$\\mathrm{BW}_{1}=30\\,000\\cdot e^{-0{,}4}\\approx 30\\,000\\cdot 0{,}67032"
            "=20\\,109{,}60$$\n\n"
            "Behauptet werden rund $21\\,500$. Aber\n\n"
            "$$20\\,109{,}60\\neq 21\\,500$$\n\n"
            "Die Abweichung von fast USD 1400 ist keine Rundungsfrage.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**D.** → Falsch\n\n"
            "Barwert der zweiten Zahlung:\n\n"
            "$$\\mathrm{BW}_{2}=55\\,000\\cdot e^{-0{,}8}\\approx 55\\,000\\cdot 0{,}449329"
            "=24\\,713{,}09$$\n\n"
            "Behauptet werden rund $26\\,000$. Aber\n\n"
            "$$24\\,713{,}09\\neq 26\\,000$$\n\n"
            "Auch hier liegt die Behauptung deutlich zu hoch.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Falsch\n\n"
            "Addiere die beiden Barwerte aus C und D:\n\n"
            "$$\\mathrm{BW}=\\mathrm{BW}_{1}+\\mathrm{BW}_{2}\\approx 20\\,109{,}60"
            "+24\\,713{,}09=44\\,822{,}69$$\n\n"
            "Behauptet werden rund $47\\,500$. Aber\n\n"
            "$$44\\,822{,}69\\neq 47\\,500$$\n\n"
            "Der korrekte Gesamtbarwert liegt bei rund USD 44 823.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 4.165"] = {
    "title": "Durchschnittsgeschwindigkeit einer Rundfahrt und algebraische Gleichungsformen",
    "context": (
        "Ein Logistikunternehmen bedient eine Lieferstrecke zwischen zwei Standorten mit einer "
        "einfachen Entfernung von $d = 120\\text{ km}$. Der Lieferwagen fährt hin mit der "
        "konstanten Geschwindigkeit $v\\text{ km/h}$ und zurück auf derselben Strecke wegen "
        "wiederkehrender Staus nur mit $v - 20\\text{ km/h}$. Die Durchschnittsgeschwindigkeit "
        "der gesamten Rundfahrt ist das harmonische Mittel der beiden Teilgeschwindigkeiten und "
        "wird mit $\\bar{v} = 48\\text{ km/h}$ protokolliert. Die Analyse betrachtet die "
        "zugehörige Bruchgleichung sowie daraus abgeleitete Wurzel-, Substitutions- und "
        "Betragsgleichungen."
    ),
    "statements": [
        "Multipliziert man die Bruchgleichung $\\frac{2}{\\frac{1}{v} + \\frac{1}{v-20}} = 48$ mit dem Hauptnenner, so entsteht eine quadratische Gleichung, deren Lösungen die Summe $68$ haben; unter der Bedingung $v > 20$ ist genau eine dieser Lösungen zulässig.",
        "Wird die Rückfahrgeschwindigkeit $w = v - 20$ durch die Wurzelgleichung $\\sqrt{10w} = w - 20$ beschrieben, so liefert das Quadrieren beider Seiten eine algebraische Gleichung mit zwei verschiedenen reellen Lösungen, die beide auch Lösungen der ursprünglichen Wurzelgleichung sind.",
        "Die Gleichung $\\frac{v}{v-20} - 3\\sqrt{\\frac{v}{v-20}} - 4 = 0$, die sich mit der Substitution $u = \\sqrt{\\frac{v}{v-20}}$ auf eine quadratische Gleichung zurückführen lässt, hat im physikalisch sinnvollen Bereich $v > 20$ keine reelle Lösung.",
        "Die Betragsgleichung $|v - 50| + |v - 70| = 30$ hat genau zwei reelle Lösungen, und deren arithmetisches Mittel ist gleich der zulässigen Hingeschwindigkeit $v = 60\\text{ km/h}$.",
        "Wird die Geschwindigkeitsminderung auf der Rückfahrt durch einen beliebigen positiven Parameter $c > 0$ dargestellt, so besitzt die Bruchgleichung $\\frac{2v(v-c)}{2v-c} = 48$ für eine Durchschnittsgeschwindigkeit von $48\\text{ km/h}$ genau dann mindestens eine physikalisch sinnvolle Lösung $v > c$, wenn $c < 48$ gilt.",
    ],
    "solution_overview": (
        "Bei gleich langen Teilstrecken ist die Durchschnittsgeschwindigkeit $\\bar{v}$ das "
        "harmonische Mittel aus Hingeschwindigkeit $v$ und Rückgeschwindigkeit $v-20$:\n\n"
        "$$\\bar{v} = \\frac{2}{\\frac{1}{v} + \\frac{1}{v - 20}} = \\frac{2v(v - 20)}{2v - 20} "
        "= \\frac{v(v - 20)}{v - 10}$$\n\n"
        "Mit $\\bar{v} = 48$ entsteht die Bruchgleichung\n\n"
        "$$\\frac{v(v - 20)}{v - 10} = 48$$\n\n"
        "Beide Teilgeschwindigkeiten müssen positiv sein, daher gilt die Definitionsbedingung "
        "$v > 20$. Nenner beseitigen:\n\n"
        "$$v(v - 20) = 48(v - 10)$$\n\n"
        "$$v^2 - 20v = 48v - 480$$\n\n"
        "$$v^2 - 68v + 480 = 0$$\n\n"
        "$$(v - 60)(v - 8) = 0$$\n\n"
        "Die algebraischen Lösungen sind $v = 60$ und $v = 8$. Für $v = 8$ wäre die "
        "Rückgeschwindigkeit $v - 20 = -12$, also negativ — eine Scheinlösung. Zulässig ist "
        "nur $v = 60\\text{ km/h}$ mit Rückgeschwindigkeit $w = 40\\text{ km/h}$."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Prüfe Wurzelsumme und Zulässigkeit an der quadratischen Gleichung, die nach dem "
            "Beseitigen der Nenner entsteht.\n\n"
            "Aus dem Modell der Durchschnittsgeschwindigkeit folgt\n\n"
            "$$v^2 - 68v + 480 = 0$$\n\n"
            "Nach dem Satz von Vieta ist die Summe der Lösungen von $v^2 + bv + c = 0$ gleich "
            "$-b$:\n\n"
            "$$v_1 + v_2 = -(-68) = 68$$\n\n"
            "Faktorisieren liefert die beiden Lösungen:\n\n"
            "$$v_1 = 60, \\quad v_2 = 8$$\n\n"
            "Der Definitionsbereich verlangt positive Geschwindigkeiten auf beiden Teilstrecken, "
            "also $v > 20$. Es ist $60 > 20$ zulässig, während $8 < 20$ die negative "
            "Rückgeschwindigkeit $8 - 20 = -12\\text{ km/h}$ erzeugt und damit ausscheidet. "
            "Summe $68$, genau eine zulässige Lösung — beides wie behauptet.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Falsch\n\n"
            "Quadrieren ist keine Äquivalenzumformung; es kann Scheinlösungen erzeugen. Also "
            "lösen und anschließend zurücksetzen.\n\n"
            "Die Wurzelgleichung lautet\n\n"
            "$$\\sqrt{10w} = w - 20$$\n\n"
            "Die linke Seite ist als Hauptwurzel nicht negativ, also muss $w - 20 \\ge 0$ "
            "gelten, das heißt $w \\ge 20$. Quadrieren:\n\n"
            "$$10w = (w - 20)^2$$\n\n"
            "$$10w = w^2 - 40w + 400$$\n\n"
            "$$w^2 - 50w + 400 = 0$$\n\n"
            "$$(w - 40)(w - 10) = 0$$\n\n"
            "Die algebraischen Lösungen sind $w = 40$ und $w = 10$. Probe für $w = 40$: "
            "$\\sqrt{400} = 20$ und $40 - 20 = 20$ — gültig. Probe für $w = 10$: "
            "$\\sqrt{100} = 10$, aber $10 - 20 = -10$ — Scheinlösung. Es sind also nicht beide "
            "Lösungen gültig.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**C.** → Falsch\n\n"
            "Substituiere den wiederkehrenden Wurzelterm und löse die entstehende quadratische "
            "Gleichung.\n\n"
            "Setze $u = \\sqrt{\\frac{v}{v-20}}$ mit $u \\ge 0$. Die Gleichung wird zu\n\n"
            "$$u^2 - 3u - 4 = 0$$\n\n"
            "$$(u - 4)(u + 1) = 0$$\n\n"
            "Wegen $u \\ge 0$ entfällt $u = -1$, es bleibt $u = 4$. Rücksubstitution:\n\n"
            "$$\\sqrt{\\frac{v}{v-20}} = 4$$\n\n"
            "$$\\frac{v}{v-20} = 16$$\n\n"
            "$$v = 16(v - 20)$$\n\n"
            "$$15v = 320$$\n\n"
            "$$v = \\frac{64}{3} = 21\\tfrac{1}{3}$$\n\n"
            "Wegen $21\\tfrac{1}{3} > 20$ liegt diese Lösung im zulässigen Bereich $v > 20$. Es "
            "gibt dort also sehr wohl eine reelle Lösung.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**D.** → Wahr\n\n"
            "Löse die Betragsgleichung $|v - 50| + |v - 70| = 30$ über eine Fallunterscheidung "
            "an den Knickstellen $v = 50$ und $v = 70$.\n\n"
            "Fall $v \\ge 70$: beide Klammern sind nicht negativ.\n\n"
            "$$(v - 50) + (v - 70) = 30$$\n\n"
            "$$2v - 120 = 30$$\n\n"
            "$$v = 75$$\n\n"
            "Wegen $75 \\ge 70$ ist das eine gültige Lösung.\n\n"
            "Fall $50 \\le v < 70$:\n\n"
            "$$(v - 50) - (v - 70) = 30$$\n\n"
            "$$20 = 30$$\n\n"
            "Widerspruch, in diesem Intervall gibt es keine Lösung.\n\n"
            "Fall $v < 50$: beide Klammern sind negativ.\n\n"
            "$$-(v - 50) - (v - 70) = 30$$\n\n"
            "$$120 - 2v = 30$$\n\n"
            "$$v = 45$$\n\n"
            "Wegen $45 < 50$ ist auch das gültig. Es gibt also genau zwei Lösungen, $v = 45$ "
            "und $v = 75$, mit dem Mittelwert\n\n"
            "$$\\frac{45 + 75}{2} = 60$$\n\n"
            "Das ist genau die zulässige Hingeschwindigkeit $v = 60\\text{ km/h}$.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Prüfe die Parameterbedingung, indem du die allgemeine Bruchgleichung löst.\n\n"
            "Nenner beseitigen in $\\frac{2v(v-c)}{2v-c} = 48$:\n\n"
            "$$2v(v - c) = 48(2v - c)$$\n\n"
            "$$2v^2 - 2cv = 96v - 48c$$\n\n"
            "$$v^2 - (c + 48)v + 24c = 0$$\n\n"
            "Die Diskriminante ist\n\n"
            "$$\\Delta = (c + 48)^2 - 4\\cdot 24c = c^2 + 96c + 2304 - 96c = c^2 + 2304$$\n\n"
            "Wegen $c^2 + 2304 > 0$ für jedes reelle $c$ gibt es immer zwei reelle Lösungen. "
            "Die größere ist\n\n"
            "$$v_+ = \\frac{c + 48 + \\sqrt{c^2 + 2304}}{2}$$\n\n"
            "$$v_+ - c = \\frac{48 - c + \\sqrt{c^2 + 2304}}{2}$$\n\n"
            "Für jedes $c > 0$ gilt\n\n"
            "$$\\sqrt{c^2 + 2304} > \\sqrt{c^2 - 96c + 2304} = |c - 48| \\ge c - 48$$\n\n"
            "also $48 - c + \\sqrt{c^2 + 2304} > 0$ und damit $v_+ > c$. Eine physikalisch "
            "sinnvolle Lösung existiert für jedes $c > 0$, nicht nur für $c < 48$.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 5.17"] = {
    "title": "Wasserwerk Riverside, Streit um die Rechnung",
    "context": (
        "Eine Kundin wendet sich an das Wasserwerk Riverside wegen zweier aufeinanderfolgender "
        "Rechnungen. Im Mai verbrauchte sie 18 m³ und erhielt eine Rechnung über USD 56,10 — "
        "auf diese Mai-Rechnung wurde allerdings ein Säumniszuschlag von 10 % auf den gesamten "
        "Rechnungsbetrag aufgeschlagen. Im Juni verbrauchte sie 25 m³ ohne Zuschlag und zahlte "
        "USD 65,00. Die Abrechnungsstelle behauptet, die Grundgebühr betrage USD 18,00 und der "
        "Arbeitspreis USD 1,85 je m³."
    ),
    "statements": [
        "Die Behauptung der Abrechnungsstelle, die monatliche Grundgebühr betrage USD 18,00, ist richtig.",
        "Der Arbeitspreis beträgt USD 2,00 je Kubikmeter.",
        "Nach Herausrechnen des Säumniszuschlags betrug die eigentliche Wasserrechnung im Mai USD 51,00.",
        "Einer Kundin mit 40 m³ Verbrauch in einem Monat würden USD 85,00 berechnet.",
        "Wäre derselbe Säumniszuschlag von 10 % auf die Juni-Rechnung über USD 65,00 angewendet worden, hätte die Summe USD 71,50 betragen.",
    ],
    "solution_overview": (
        "Im Mai: 18 m³ und USD 56,10 nach einem Säumniszuschlag von 10 % auf den gesamten "
        "Betrag. Im Juni: 25 m³ ohne Zuschlag für USD 65,00. Die Abrechnungsstelle behauptet "
        "USD 18,00 Grundgebühr und USD 1,85 je m³.\n\n"
        "**Teil 1: Gleichungssystem aufstellen.**\n\n"
        "Sei $x$ die monatliche Grundgebühr und $y$ der Preis je Kubikmeter. Vor dem Aufstellen "
        "der Mai-Gleichung muss der Zuschlag von 10 % herausgerechnet werden:\n\n"
        "$$\\frac{56{,}10}{1{,}10} = 51$$\n\n"
        "$$x + 18y = 51 \\tag{1}$$\n\n"
        "$$x + 25y = 65 \\tag{2}$$\n\n"
        "**Teil 2: Lösen.**\n\n"
        "Gleichung (1) von (2) abziehen:\n\n"
        "$$7y = 14$$\n\n"
        "$$y = 2$$\n\n"
        "Einsetzen in (1):\n\n"
        "$$x + 36 = 51$$\n\n"
        "$$x = 15$$\n\n"
        "**Ergebnis.** Grundgebühr USD 15,00, Arbeitspreis USD 2,00 je m³."
    ),
    "explanations": [
        (
            "**A.** → Falsch\n\n"
            "Vergleiche den berechneten Wert der Grundgebühr mit der Behauptung der "
            "Abrechnungsstelle.\n\n"
            "Aus dem Gleichungssystem folgt\n\n"
            "$$x = 15$$\n\n"
            "Behauptet wird\n\n"
            "$$x = 18{,}00$$\n\n"
            "Die Grundgebühr liegt tatsächlich bei USD 15,00, nicht bei USD 18,00.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**B.** → Wahr\n\n"
            "Lies den Arbeitspreis aus dem gelösten Gleichungssystem ab.\n\n"
            "Die Differenz der beiden Rechnungen ohne Zuschlag betrifft nur den Verbrauch:\n\n"
            "$$7y = 65 - 51 = 14$$\n\n"
            "$$y = 2$$\n\n"
            "Der Arbeitspreis beträgt also USD 2,00 je Kubikmeter — genau wie behauptet, und "
            "nicht die von der Abrechnungsstelle genannten USD 1,85.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Rechne den Säumniszuschlag aus der Mai-Rechnung heraus. Ein Zuschlag von 10 % "
            "bedeutet Multiplikation mit dem Faktor $1{,}10$, also Division durch $1{,}10$ zum "
            "Zurückrechnen:\n\n"
            "$$\\frac{56{,}10}{1{,}10} = 51$$\n\n"
            "Probe: $51 \\cdot 1{,}10 = 56{,}10$.\n\n"
            "Die eigentliche Wasserrechnung im Mai betrug also USD 51,00, genau wie behauptet. "
            "Kontrolle mit den Werten $x = 15$ und $y = 2$: $15 + 18 \\cdot 2 = 51$.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Falsch\n\n"
            "Die Rechnung setzt sich aus Grundgebühr und verbrauchsabhängigem Anteil "
            "zusammen:\n\n"
            "$$R = x + q\\cdot y$$\n\n"
            "Mit den berechneten Werten $x = 15$ und $y = 2$ sowie $q = 40$:\n\n"
            "$$40 \\cdot 2 = 80$$\n\n"
            "$$15 + 80 = 95$$\n\n"
            "Berechnet werden also USD 95,00, behauptet werden USD 85,00. Die Werte stimmen "
            "nicht überein.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Wahr\n\n"
            "Ein Säumniszuschlag von 10 % auf den gesamten Rechnungsbetrag ist die "
            "Multiplikation mit $1{,}10$.\n\n"
            "Die Juni-Rechnung lautet über USD 65,00, also\n\n"
            "$$65 \\cdot 1{,}10 = 71{,}50$$\n\n"
            "Das ist genau der behauptete Betrag von USD 71,50.\n\n"
            "Die Aussage ist wahr."
        ),
    ],
}

DE["MATH 6.MOCK.INEQ"] = {
    "title": "Mehrschrittige Ungleichungen in Textaufgaben",
    "context": "Entscheide für jede Aussage über Ungleichungen, ob sie wahr oder falsch ist.",
    "statements": [
        "Wenn die Länge eines rechteckigen Gartens mindestens $4\\ \\mathrm{m}$ größer ist als seine Breite und der Flächeninhalt höchstens $45\\ \\mathrm{m}^{2}$ beträgt, dann kann die Breite $5\\ \\mathrm{m}$ nicht überschreiten.",
        "Ein Kurier fährt mit einer Durchschnittsgeschwindigkeit von höchstens $72\\ \\mathrm{km/h}$. Bis $16{:}00$ Uhr hat er mindestens $126\\ \\mathrm{km}$ zurückgelegt. Dann muss er spätestens um $14{:}15$ Uhr gestartet sein.",
        "Eine Saftmischung muss mindestens $12\\%$ Konzentrat enthalten. Ausgehend von $2$ Litern mit $18\\%$ Konzentrat darf höchstens $1$ Liter Wasser zugegeben werden, ohne die Vorgabe zu verletzen.",
        "Ein Preisgeld von $18\\,200$ EUR wird so aufgeteilt, dass der zweite Platz mindestens $75\\%$ des ersten Platzes und der dritte Platz mindestens $75\\%$ des zweiten Platzes erhält. Wenn der erste Platz höchstens $8\\,000$ EUR erhält, dann erhält der dritte Platz zwingend weniger als $4\\,500$ EUR.",
        "Die Lösungsmenge der Ungleichung $\\dfrac{2x-5}{x+1}\\ge 1$ (mit $x\\ne -1$) ist genau $[-4,\\infty)$.",
    ],
    "solution_overview": (
        "Jede Textbehauptung wird zuerst in eine Ungleichung übersetzt, dann sauber gelöst oder "
        "abgeschätzt und schließlich mit der Behauptung verglichen. Zwei Standardwerkzeuge "
        "reichen dafür aus: quadratische Ungleichungen über die Nullstellen des zugehörigen "
        "Produkts, zum Beispiel\n\n"
        "$$(w+9)(w-5)\\le 0\\ \\Longleftrightarrow\\ -9\\le w\\le 5$$\n\n"
        "und Bruchungleichungen über eine Vorzeichentabelle, nachdem alles auf eine Seite "
        "gebracht wurde:\n\n"
        "$$\\frac{2x-5}{x+1}\\ge 1\\ \\Longleftrightarrow\\ \\frac{x-6}{x+1}\\ge 0$$\n\n"
        "Beim Teilen durch eine negative Zahl und beim Multiplizieren mit einem negativen Nenner "
        "dreht sich das Ungleichungszeichen um."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Sei die Breite $w>0$ in Metern, die Länge dann mindestens $w+4$. Die "
            "Flächenschranke liefert im günstigsten Fall\n\n"
            "$$w(w+4)\\le 45$$\n\n"
            "$$w^{2}+4w-45\\le 0$$\n\n"
            "$$(w+9)(w-5)\\le 0$$\n\n"
            "Ein Produkt ist genau dann nicht positiv, wenn $w$ zwischen den Nullstellen liegt, "
            "also $w\\in[-9,5]$. Zusammen mit $w>0$ bleibt $0<w\\le 5$. Die Breite kann also "
            "$5\\ \\mathrm{m}$ nicht überschreiten.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Für mindestens $126\\ \\mathrm{km}$ bei höchstens $72\\ \\mathrm{km/h}$ muss die "
            "Fahrzeit $t$ erfüllen\n\n"
            "$$72\\,t\\ge 126$$\n\n"
            "$$t\\ge \\dfrac{126}{72}=1{,}75\\ \\mathrm{h}=1\\ \\mathrm{h}\\ 45\\ \\mathrm{min}$$\n\n"
            "Rechnet man von $16{:}00$ Uhr $1\\ \\mathrm{h}\\ 45\\ \\mathrm{min}$ zurück, "
            "landet man bei $14{:}15$ Uhr. Jeder spätere Start ließe weniger als $1{,}75$ "
            "Stunden übrig, womit die Strecke unter der Geschwindigkeitsgrenze nicht zu "
            "schaffen wäre. Der Start lag also spätestens um $14{:}15$ Uhr.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Zwei Liter mit $18\\%$ enthalten\n\n"
            "$$2\\cdot 0{,}18=0{,}36\\ \\text{Liter Konzentrat}$$\n\n"
            "Die Menge des Konzentrats ändert sich beim Verdünnen nicht. Nach Zugabe von $w$ "
            "Litern Wasser lautet die Bedingung\n\n"
            "$$\\dfrac{0{,}36}{2+w}\\ge 0{,}12$$\n\n"
            "$$0{,}36\\ge 0{,}12(2+w)$$\n\n"
            "$$3\\ge 2+w$$\n\n"
            "$$w\\le 1$$\n\n"
            "Es darf also höchstens $1$ Liter Wasser zugegeben werden.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Falsch\n\n"
            "Schreibe $a$, $b$, $c$ für den ersten, zweiten und dritten Platz mit\n\n"
            "$$a+b+c=18\\,200,\\qquad b\\ge 0{,}75a,\\qquad c\\ge 0{,}75b,\\qquad a\\le 8\\,000$$\n\n"
            "Ein Gegenbeispiel genügt. Wähle\n\n"
            "$$a=7\\,800,\\quad b=0{,}75\\cdot 7\\,800=5\\,850,\\quad c=18\\,200-13\\,650=4\\,550$$\n\n"
            "Prüfung der Bedingungen:\n\n"
            "$$4\\,550\\ge 0{,}75\\cdot 5\\,850=4\\,387{,}5\\qquad\\text{und}\\qquad 7\\,800\\le 8\\,000$$\n\n"
            "Alle Vorgaben sind erfüllt, aber $c=4\\,550$ liegt nicht unter $4\\,500$. Der "
            "dritte Platz muss also nicht zwingend weniger als $4\\,500$ EUR erhalten.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Falsch\n\n"
            "Bringe alles auf eine Seite, statt mit dem Nenner zu multiplizieren — sein "
            "Vorzeichen ist unbekannt.\n\n"
            "$$\\dfrac{2x-5}{x+1}-1\\ge 0$$\n\n"
            "$$\\dfrac{2x-5-(x+1)}{x+1}\\ge 0$$\n\n"
            "$$\\dfrac{x-6}{x+1}\\ge 0$$\n\n"
            "Kritische Stellen sind $x=-1$ (Definitionslücke) und $x=6$. Die Vorzeichentabelle "
            "liefert\n\n"
            "$$\\dfrac{x-6}{x+1}\\ge 0\\quad\\text{für}\\quad x\\in(-\\infty,-1)\\cup[6,\\infty)$$\n\n"
            "Das ist nicht das Intervall $[-4,\\infty)$; zum Beispiel erfüllt $x=0$ die "
            "Ungleichung nicht, liegt aber in $[-4,\\infty)$.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 7.47"] = {
    "title": "Parameterfenster für zwei Schnittpunkte",
    "context": (
        "Die feste Parabel $g(x)=x^{2}-4x+1$ wird mit der Geradenschar $f_k(x)=kx+1$ "
        "verglichen, wobei der reelle Parameter $k$ variiert. Bewerte jede Aussage. Markiere "
        "sie mit WAHR oder FALSCH."
    ),
    "statements": [
        "Für jedes $k$ schneiden sich die Graphen im Punkt $(0,1)$.",
        "Es gibt genau eine Steigung, für die die Gerade die Parabel in genau einem Punkt berührt.",
        "Diese eine Berührung liegt im gemeinsamen $y$-Achsenabschnitt $(0,1)$ und die Steigung stimmt dort mit der Steigung der Parabel überein.",
        "Neben dem gemeinsamen $y$-Achsenabschnitt können sich die Graphen noch in einem Punkt mit positiver $x$-Koordinate treffen.",
        "Es gibt ein reelles $k$, für das sich die Graphen nicht treffen.",
    ],
    "solution_overview": (
        "Jede Gerade der Schar hat denselben $y$-Achsenabschnitt wie die Parabel.\n\n"
        "$$g(x) = x^{2}-4x+1,\\qquad f_{k}(x) = kx+1$$\n\n"
        "Die Differenz lässt sich daher immer durch $x$ ausklammern:\n\n"
        "$$g(x)-f_{k}(x)=x^{2}-(4+k)x=x\\bigl(x-(4+k)\\bigr)$$\n\n"
        "Die Nullstelle $x=0$ existiert also für jede Steigung. Die zweite Schnittstelle liegt "
        "bei $x=4+k$. Berührung heißt, dass beide Nullstellen zusammenfallen, also $k=-4$; das "
        "ist genau die Ableitung $g'(0)=-4$. Für jedes andere $k$ gibt es einen zweiten "
        "Schnittpunkt, und für $k>-4$ liegt er bei positivem $x$."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Jede Gerade $f_{k}(x)=kx+1$ geht durch $(0,1)$, und die Parabel ebenfalls, denn "
            "ihr absolutes Glied ist $1$.\n\n"
            "$$g(0)=1,\\qquad f_{k}(0)=1$$\n\n"
            "Algebraisch sieht man es an der Differenz:\n\n"
            "$$g(x)-f_{k}(x)=x^{2}-(4+k)x=x\\bigl(x-(4+k)\\bigr)$$\n\n"
            "Der Faktor $x$ liefert die Nullstelle bei $x=0$, unabhängig von $k$. Der "
            "gemeinsame Punkt ist $(0,1)$.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Ein einziger Schnittpunkt bedeutet, dass die zweite Nullstelle von $g-f_{k}$ mit "
            "$x=0$ zusammenfällt. Nach dem Ausklammern von $x$ liegt sie bei $x=4+k$.\n\n"
            "$$g(x)-f_{k}(x)=x\\bigl(x-(4+k)\\bigr)$$\n\n"
            "Zusammenfallen heißt\n\n"
            "$$4+k=0\\quad\\Longrightarrow\\quad k=-4$$\n\n"
            "Für jede andere Steigung ist die zweite Nullstelle von $0$ verschieden, es gibt "
            "dann zwei Schnittpunkte. Genau eine Steigung erzeugt also eine Berührung.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Die Berührsteigung ist $k=-4$, gewonnen aus $4+k=0$. Bei dieser Steigung ist der "
            "einzige Schnittpunkt der gemeinsame $y$-Achsenabschnitt $(0,1)$:\n\n"
            "$$g(x)-f_{-4}(x)=x^{2}$$\n\n"
            "Die doppelte Nullstelle bei $x=0$ ist die algebraische Form der Berührung. Die "
            "Steigung der Parabel an derselben Stelle ist\n\n"
            "$$g'(x)=2x-4,\\qquad g'(0)=-4$$\n\n"
            "Die Gerade durch $(0,1)$ mit der Steigung $g'(0)=-4$ ist genau $y=-4x+1$, also "
            "$f_{-4}$. Übereinstimmende Steigungen im gemeinsamen Punkt sind die geometrische "
            "Form der Berührung.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Wahr\n\n"
            "Neben der Nullstelle $x=0$ liegt der zweite Schnittpunkt bei $x=4+k$. Diese Stelle "
            "ist positiv, sobald\n\n"
            "$$4+k>0\\quad\\Longleftrightarrow\\quad k>-4$$\n\n"
            "Nimm als Beispiel die waagerechte Gerade der Schar mit $k=0$. Der zweite "
            "Schnittpunkt liegt dann bei $x=4$:\n\n"
            "$$g(4)=16-16+1=1,\\qquad f_{0}(4)=1$$\n\n"
            "Der Punkt $(4,1)$ hat eine positive erste Koordinate und liegt auf beiden "
            "Graphen.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Jede Gerade der Schar trifft die Parabel bereits in $(0,1)$, unabhängig von "
            "$k$.\n\n"
            "$$g(0)=f_{k}(0)=1$$\n\n"
            "Auch die Diskriminante der Differenz zeigt das: sie ist ein Quadrat und damit nie "
            "negativ.\n\n"
            "$$\\Delta(k)=(4+k)^{2}\\ge 0$$\n\n"
            "Sie wird nur bei der Berührsteigung $k=-4$ null, und auch dort gibt es einen "
            "gemeinsamen Punkt. Für jedes andere $k$ gibt es zwei Schnittpunkte. Es existiert "
            "also kein reelles $k$ ohne Schnittpunkt.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 8.95"] = {
    "title": "Nachtproduktion an Broten auf zwei Ofenlinien",
    "context": (
        "Eine regionale Bäckerei muss über Nacht $30$ Tausend Brote backen und kann sie auf "
        "zwei Ofenlinien aufteilen. Der Energiekostenindex von Linie 1 folgt $C_{1}(q)=a q^{2}$, "
        "der von Linie 2 folgt $C_{2}(q)=b q^{2}$, wobei $q$ die Ausgabemenge der jeweiligen "
        "Linie in Tausend Broten ist. Ein Durchlauf von $10$ Tausend Broten auf Linie 1 ergab "
        "den Indexwert $100$, ein Durchlauf von $8$ Tausend Broten auf Linie 2 ergab $16$. "
        "Bewerte jede Aussage. Markiere sie mit WAHR oder FALSCH."
    ),
    "statements": [
        "Den gesamten Auftrag auf die günstigere Linie zu konzentrieren, ist der günstigste Plan.",
        "Alle dreißigtausend Brote auf Linie 2 zu legen, ergibt einen Indexwert über $200$.",
        "Die günstigere Linie sollte den größeren Anteil des Nachtauftrags übernehmen.",
        "Der durchschnittliche Kostenindex von Linie 1 sinkt, wenn ihre Ausgabemenge steigt.",
        "Die Aufteilung sechs zu vierundzwanzig ergibt einen Indexwert unter $200$.",
    ],
    "solution_overview": (
        "Dreißig Tausend Brote werden zwischen $C_{1}(q)=aq^{2}$ und $C_{2}(q)=bq^{2}$ "
        "aufgeteilt. Ein Durchlauf von $10$ Tausend auf Linie 1 ergab $100$, einer von $8$ "
        "Tausend auf Linie 2 ergab $16$.\n\n"
        "**Teil 1: Modell aufstellen.**\n\n"
        "Seien $q_{1}$ und $q_{2}$ die beiden Mengen in Tausend Broten mit $q_{1}+q_{2}=30$. "
        "Jeder protokollierte Durchlauf bestimmt einen Koeffizienten:\n\n"
        "$$a\\cdot 10^{2}=100 \\tag{1}$$\n\n"
        "$$b\\cdot 8^{2}=16 \\tag{2}$$\n\n"
        "**Teil 2: Lösen.**\n\n"
        "Aus (1) folgt $a=1$, aus (2) folgt $b=\\tfrac{1}{4}$. Die Kostenfunktionen lauten also "
        "$C_{1}(q)=q^{2}$ und $C_{2}(q)=\\tfrac{q^{2}}{4}$.\n\n"
        "Die günstigste Aufteilung im Inneren gleicht die Grenzkosten an. Aus "
        "$2q_{1}=\\tfrac{1}{2}q_{2}$ folgt $q_{2}=4q_{1}$, zusammen mit $q_{1}+q_{2}=30$ "
        "also\n\n"
        "$$q_{1}=6,\\qquad q_{2}=24$$\n\n"
        "Randlösung und innere Aufteilung kosten\n\n"
        "$$C_{2}(30)=225,\\qquad C_{1}(6)+C_{2}(24)=36+144=180$$\n\n"
        "**Ergebnis.** $a=1$, $b=\\tfrac{1}{4}$, Aufteilung $(6,24)$, Randlösung $225$, "
        "Aufteilung $180$."
    ),
    "explanations": [
        (
            "**A.** → Falsch\n\n"
            "Die günstigere Linie ist Linie 2, denn\n\n"
            "$$b=\\tfrac{1}{4}<1=a$$\n\n"
            "Den ganzen Auftrag dorthin zu legen, kostet\n\n"
            "$$C_{2}(30)=\\tfrac{30^{2}}{4}=225$$\n\n"
            "Die grenzkostengleiche Aufteilung $(6,24)$ kostet dagegen\n\n"
            "$$C_{1}(6)+C_{2}(24)=36+144=180$$\n\n"
            "Wegen $180<225$ ist die Aufteilung günstiger als die Konzentration auf die "
            "billigere Linie.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**B.** → Wahr\n\n"
            "Alle dreißig Tausend Brote auf Linie 2 ergeben\n\n"
            "$$C_{2}(30)=\\tfrac{30^{2}}{4}=\\tfrac{900}{4}=225$$\n\n"
            "Vergleich mit der Schranke $200$:\n\n"
            "$$225>200$$\n\n"
            "Der Indexwert liegt über $200$, wie behauptet.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Mit $a=1$ und $b=\\tfrac{1}{4}$ ist Linie 2 die günstigere. Gleichsetzen der "
            "Grenzkosten liefert\n\n"
            "$$2q_{1}=\\tfrac{1}{2}q_{2}\\quad\\Longrightarrow\\quad q_{2}=4q_{1}$$\n\n"
            "Mit $q_{1}+q_{2}=30$ folgt\n\n"
            "$$q_{1}=6,\\qquad q_{2}=24$$\n\n"
            "Die günstigere Linie 2 übernimmt $24$ Tausend Brote gegenüber $6$ Tausend auf "
            "Linie 1, also tatsächlich den größeren Anteil.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Falsch\n\n"
            "Der durchschnittliche Kostenindex von Linie 1 ist der Quotient aus Kosten und "
            "Menge:\n\n"
            "$$\\frac{C_{1}(q)}{q}=\\frac{q^{2}}{q}=q$$\n\n"
            "Der Durchschnitt ist also gleich der Menge selbst und wächst mit ihr. Zum "
            "Beispiel\n\n"
            "$$\\frac{C_{1}(5)}{5}=5\\qquad\\text{gegenüber}\\qquad \\frac{C_{1}(10)}{10}=10$$\n\n"
            "Die Durchschnittskosten steigen mit der Ausgabemenge, sie sinken nicht.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Wahr\n\n"
            "Die Aufteilung sechs zu vierundzwanzig kostet\n\n"
            "$$C_{1}(6)+C_{2}(24)=6^{2}+\\tfrac{24^{2}}{4}=36+144=180$$\n\n"
            "Vergleich mit der in der Behauptung genannten Schranke $200$:\n\n"
            "$$180<200$$\n\n"
            "Der Indexwert liegt unter $200$, wie behauptet.\n\n"
            "Die Aussage ist wahr."
        ),
    ],
}

DE["MATH 9.72"] = {
    "title": "Verschobene kubische Funktion: Nullstellen nach einer Vertikalverschiebung (Satz 1)",
    "context": (
        "Die Abbildung zeigt $p(x)=x \\left(x^{2} - 3\\right)$. Es sei $q(x)=p(x)+c$. Bewerte "
        "jede Aussage. Markiere sie mit WAHR oder FALSCH."
    ),
    "statements": [
        "Für $c=0$ hat $q$ drei reelle Nullstellen.",
        "Die Extremstellen von $q$ hängen von $c$ ab.",
        "Es gibt ein $c$, für das $q$ nur eine reelle Nullstelle hat.",
        "$p$ ist ungerade.",
        "Für jedes $c$ bleibt $q$ ungerade.",
    ],
    "solution_overview": (
        "Ausgangsfunktion und Verschiebung sind\n\n"
        "$$p(x)=x\\left(x^{2}-3\\right)=x^{3}-3x,\\qquad q(x)=p(x)+c$$\n\n"
        "Eine Vertikalverschiebung ändert Achsenabschnitte und Nullstellenzahl, aber nicht die "
        "Ableitung und damit auch nicht die Extremstellen:\n\n"
        "$$q'(x)=p'(x)=3x^{2}-3\\quad\\Longrightarrow\\quad x=\\pm 1$$\n\n"
        "Die Extremwerte sind $p(-1)=2$ (lokales Maximum) und $p(1)=-2$ (lokales Minimum). "
        "Für $|c|>2$ verschiebt sich der gesamte Schlängelbereich über oder unter die "
        "$x$-Achse, es bleibt nur eine Nullstelle.\n\n"
        "Symmetrie ist eine Frage der Exponenten: nur ungerade Potenzen ergeben eine ungerade "
        "Funktion, und eine ungerade Funktion muss $q(0)=0$ erfüllen."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Für $c=0$ ist $q$ genau $p$. Faktorisiere und lies die Nullstellen ab.\n\n"
            "$$q(x)=x\\left(x^{2}-3\\right)=x\\left(x-\\sqrt{3}\\right)\\left(x+\\sqrt{3}\\right)$$\n\n"
            "Die Nullstellen sind\n\n"
            "$$x=0,\\qquad x=\\sqrt{3},\\qquad x=-\\sqrt{3}$$\n\n"
            "Drei verschiedene Linearfaktoren ergeben drei verschiedene reelle Nullstellen.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Falsch\n\n"
            "Eine Vertikalverschiebung $q=p+c$ ändert die Ableitung nicht, also können sich die "
            "Extremstellen nicht mit $c$ verschieben.\n\n"
            "$$q'(x)=p'(x)=3x^{2}-3$$\n\n"
            "$$3x^{2}-3=0\\quad\\Longrightarrow\\quad x=\\pm 1$$\n\n"
            "Diese Stellen sind von $c$ unabhängig. Das Addieren einer Konstanten hebt oder "
            "senkt den Graphen, verschiebt ihn aber nicht nach links oder rechts.\n\n"
            "Die Extremwerte ändern sich sehr wohl: $q(\\pm 1)=\\mp 2+c$. Gefragt sind aber die "
            "Extremstellen, und die bleiben fest.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**C.** → Wahr\n\n"
            "Das lokale Maximum von $p$ ist $p(-1)=2$, das lokale Minimum ist $p(1)=-2$. Wird "
            "um mehr als $2$ nach oben verschoben, liegen beide Extremwerte über der "
            "$x$-Achse.\n\n"
            "$$q(x)=x^{3}-3x+c$$\n\n"
            "Für $c=3$ gilt\n\n"
            "$$q(-1)=2+3=5>0,\\qquad q(1)=-2+3=1>0$$\n\n"
            "Der Graph schneidet die Achse dann nur noch einmal, weit links. Ein solches $c$ "
            "existiert also.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Wahr\n\n"
            "Ungerade heißt $p(-x)=-p(x)$. Die gegebene kubische Funktion enthält nur ungerade "
            "Potenzen.\n\n"
            "$$p(x)=x^{3}-3x$$\n\n"
            "$$p(-x)=(-x)^{3}-3(-x)=-x^{3}+3x=-\\left(x^{3}-3x\\right)=-p(x)$$\n\n"
            "Die Identität gilt auf ganz $\\mathbb{R}$, und wie für ungerade Funktionen "
            "erforderlich ist $p(0)=0$.\n\n"
            "Zahlenprobe:\n\n"
            "$$p(-2)=-8+6=-2,\\qquad -p(2)=-(8-6)=-2$$\n\n"
            "Beide Seiten stimmen überein.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Das Addieren einer Konstanten ungleich null zerstört die Punktsymmetrie, denn eine "
            "ungerade Funktion muss im Ursprung verschwinden.\n\n"
            "$$q(0)=p(0)+c=c$$\n\n"
            "Ist $c\\neq 0$, so ist $q(0)\\neq 0$ und $q$ damit nicht ungerade. Schon die kleine "
            "Verschiebung $c=1$ liefert\n\n"
            "$$q(x)=x^{3}-3x+1,\\qquad q(1)=-1,\\qquad q(-1)=3\\neq -q(1)=1$$\n\n"
            "Die Symmetrie von $p$ überträgt sich also nur für $c=0$ auf $q$; die Behauptung "
            "„für jedes $c$“ ist damit widerlegt.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 10.MOCK.RAD"] = {
    "title": "Radioaktiver Tracer: Zerfall, diskreter Zerfall und Verdünnung",
    "context": (
        "Ein Labor lagert einen radioaktiven Tracer, dessen Aktivität (in Becquerel) nach $t$ "
        "Stunden durch\n\n"
        "$$\nA(t)=A_{0}\\,e^{-kt},\\qquad A(0)=A_{0}=2{,}4\\cdot 10^{6},\\qquad "
        "k=\\ln 2\\,/\\,6\n$$\n\n"
        "beschrieben wird. Die Halbwertszeit beträgt also genau $6$ Stunden. Eine zweite, "
        "unabhängig zerfallende Probe hat die Aktivität\n\n"
        "$$\nB(t)=1{,}5\\cdot 10^{6}\\cdot (0{,}92)^{t}.\n$$\n\n"
        "Entscheide für jede Aussage, ob sie wahr oder falsch ist."
    ),
    "statements": [
        "Es gilt $A(t)=2{,}4\\cdot 10^{6}\\cdot \\left(\\dfrac{1}{2}\\right)^{t/6}$.",
        "Schreibt man $B(t)=1{,}5\\cdot 10^{6}e^{\\delta t}$, so erfüllt die stetige Zerfallsrate $\\delta$ die Bedingung $\\delta>-0{,}08$; der stetige Zerfall ist also betragsmäßig schwächer als $8\\%$ pro Stunde.",
        "Nach $18$ Stunden liegt die Aktivität $A(18)$ noch über $4\\cdot 10^{5}$.",
        "Die Aktivität $B(t)$ fällt erstmals zu einem Zeitpunkt $t<12$ unter $5\\cdot 10^{5}$.",
        "Angenommen, der verbleibende Tracer wird nach $6$ Stunden so verdünnt, dass seine Aktivität als $0{,}6\\,A(6)\\,e^{-k(t-6)}$ weiterläuft. Dann fällt die Aktivität erst zu einem Zeitpunkt $t>15$ unter $2\\cdot 10^{5}$.",
    ],
    "solution_overview": (
        "Drei Werkzeuge reichen für alle fünf Aussagen. Erstens: das stetige Modell mit "
        "Halbwertszeit $T$ lässt sich als reine Zweierpotenz schreiben,\n\n"
        "$$A(t)=A_{0}e^{-kt}=A_{0}\\left(\\tfrac{1}{2}\\right)^{t/T},\\qquad k=\\frac{\\ln 2}{T}$$\n\n"
        "Zweitens: eine Potenz $b^{t}$ wird über $b^{t}=e^{t\\ln b}$ in die stetige Form "
        "überführt, sodass sich die Zerfallsraten vergleichen lassen. Drittens: "
        "Schwellenzeiten werden logarithmiert, wobei sich das Ungleichungszeichen beim Teilen "
        "durch den negativen Faktor $\\ln b$ umdreht.\n\n"
        "Die Zahlenwerte der Aufgabe sind $k=\\ln 2/6\\approx 0{,}115525$ und "
        "$\\ln 0{,}92\\approx -0{,}08338$."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Halbwertszeit $6$ Stunden bedeutet $A(6)=\\tfrac{1}{2}A_{0}$. Setze "
            "$k=\\ln 2/6$ in das stetige Modell ein:\n\n"
            "$$A(t)=A_{0}\\,e^{-(\\ln 2)\\,t/6}=A_{0}\\left(e^{\\ln 2}\\right)^{-t/6}"
            "=A_{0}\\left(\\dfrac{1}{2}\\right)^{t/6}$$\n\n"
            "Mit $A_{0}=2{,}4\\cdot 10^{6}$ ist das genau die behauptete Formel.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Falsch\n\n"
            "Schreibe die Potenz als $e$-Funktion:\n\n"
            "$$B(t)=1{,}5\\cdot 10^{6}\\cdot (0{,}92)^{t}=1{,}5\\cdot 10^{6}\\,e^{t\\ln 0{,}92}$$\n\n"
            "also\n\n"
            "$$\\delta=\\ln 0{,}92\\approx -0{,}08338$$\n\n"
            "Vergleich mit $-0{,}08$:\n\n"
            "$$-0{,}08338 < -0{,}08$$\n\n"
            "Die behauptete Ungleichung $\\delta>-0{,}08$ gilt also nicht. Betragsmäßig ist "
            "$|\\delta|\\approx 8{,}34\\%$ pro Stunde und damit stärker als $8\\%$, nicht "
            "schwächer.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**C.** → Falsch\n\n"
            "Achtzehn Stunden sind genau drei Halbwertszeiten zu je $6$ Stunden:\n\n"
            "$$\\dfrac{18}{6}=3$$\n\n"
            "Jede Halbwertszeit halbiert die Aktivität, drei Halbwertszeiten achteln sie "
            "also:\n\n"
            "$$A(18)=2{,}4\\cdot 10^{6}\\cdot \\left(\\dfrac{1}{2}\\right)^{3}"
            "=2{,}4\\cdot 10^{6}\\cdot \\dfrac{1}{8}=3{,}0\\cdot 10^{5}$$\n\n"
            "Behauptet wird ein Wert über $4\\cdot 10^{5}$, tatsächlich gilt aber\n\n"
            "$$3{,}0\\cdot 10^{5}<4{,}0\\cdot 10^{5}$$\n\n"
            "Die Aktivität liegt nach $18$ Stunden bereits unter der genannten Schwelle.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**D.** → Falsch\n\n"
            "Löse die Ungleichung $B(t)<5\\cdot 10^{5}$:\n\n"
            "$$1{,}5\\cdot 10^{6}\\cdot (0{,}92)^{t}<5\\cdot 10^{5}$$\n\n"
            "$$(0{,}92)^{t}<\\dfrac{1}{3}$$\n\n"
            "$$t\\ln 0{,}92<\\ln\\dfrac{1}{3}$$\n\n"
            "Wegen $\\ln 0{,}92<0$ dreht sich beim Teilen das Ungleichungszeichen um:\n\n"
            "$$t>\\dfrac{\\ln(1/3)}{\\ln 0{,}92}\\approx\\dfrac{-1{,}0986}{-0{,}08338}"
            "\\approx 13{,}18$$\n\n"
            "Die Schwelle wird also erst bei etwa $t\\approx 13{,}18$ Stunden unterschritten, "
            "und das ist nicht vor $t=12$.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Wahr\n\n"
            "Zum Zeitpunkt der Verdünnung gilt\n\n"
            "$$A(6)=2{,}4\\cdot 10^{6}\\cdot \\tfrac{1}{2}=1{,}2\\cdot 10^{6}$$\n\n"
            "Die Aktivität nach der Verdünnung ist damit\n\n"
            "$$C(t)=0{,}6\\cdot 1{,}2\\cdot 10^{6}\\,e^{-k(t-6)}"
            "=7{,}2\\cdot 10^{5}\\,e^{-k(t-6)}$$\n\n"
            "Gefordert ist $C(t)<2\\cdot 10^{5}$. Mit $s=t-6$:\n\n"
            "$$e^{-ks}<\\dfrac{2}{7{,}2}=\\dfrac{5}{18}\\approx 0{,}2778$$\n\n"
            "$$s>\\dfrac{-\\ln(5/18)}{k},\\qquad k=\\dfrac{\\ln 2}{6}\\approx 0{,}115525$$\n\n"
            "$$s\\approx\\dfrac{1{,}281}{0{,}115525}\\approx 11{,}09$$\n\n"
            "$$t=6+11{,}09\\approx 17{,}09>15$$\n\n"
            "Die Schwelle wird also erst nach mehr als $15$ Stunden unterschritten.\n\n"
            "Die Aussage ist wahr."
        ),
    ],
}

DE["MATH 11.108"] = {
    "title": "Draht zu Quadrat und Kreis: Gesamtfläche minimieren",
    "context": (
        "Ein Draht der Länge $60$ cm wird in zwei Stücke zerschnitten. Ein Stück wird zu einem "
        "Quadrat gebogen, das andere zu einem Kreis. Ziel ist es, die insgesamt eingeschlossene "
        "Fläche von Quadrat und Kreis zu minimieren. Es sei $x$ die Drahtlänge für das Quadrat "
        "($0\\le x\\le 60$). Entscheide für jede Behauptung WAHR oder FALSCH."
    ),
    "statements": [
        "Die insgesamt eingeschlossene Fläche als Funktion der Quadrat-Drahtlänge $x$ ist $A(x)=\\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi}$.",
        "Die Steigung dieser Gesamtfläche ist $A'(x)=\\dfrac{x}{8}-\\dfrac{60-x}{2\\pi}$.",
        "Die Gesamtfläche hat an der Aufteilung $x=\\dfrac{240}{4+\\pi}$ eine waagerechte Tangente.",
        "An dieser Aufteilung ist die Flächenkurve linksgekrümmt, die Aufteilung ist also ein lokales Minimum der Gesamtfläche.",
        "Weil zwei Figuren beteiligt sind, lässt sich die Aufgabe nicht auf eine Extremwertaufgabe mit nur einer Variablen zurückführen.",
    ],
    "solution_overview": (
        "Ein $60$ cm langer Draht wird geteilt: die Länge $x$ für das Quadrat, $60-x$ für den "
        "Kreis, mit $0\\le x\\le 60$. Die Quadratseite ist $x/4$, der Kreisradius folgt aus "
        "$2\\pi r=60-x$, also $r=(60-x)/(2\\pi)$. Die Gesamtfläche ist\n\n"
        "$$A(x)=\\left(\\dfrac{x}{4}\\right)^{2}+\\pi\\left(\\dfrac{60-x}{2\\pi}\\right)^{2}"
        "=\\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi}$$\n\n"
        "Ableiten und klassifizieren:\n\n"
        "$$A'(x)=\\dfrac{x}{8}-\\dfrac{60-x}{2\\pi},\\qquad "
        "A''(x)=\\dfrac{1}{8}+\\dfrac{1}{2\\pi}>0$$\n\n"
        "Aus $A'(x)=0$ folgt die einzige kritische Stelle $x=\\dfrac{240}{4+\\pi}$ in "
        "$(0,60)$, und wegen $A''>0$ ist sie ein lokales Minimum. Die Nebenbedingung erlaubt "
        "es, beide Figuren durch $x$ auszudrücken; damit ist die Aufgabe eine gewöhnliche "
        "Extremwertaufgabe in einer Variablen."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Sei $x$ die Drahtlänge für das Quadrat, dann bleiben $60-x$ für den Kreis. Die "
            "Quadratseite ist $x/4$, und aus dem Kreisumfang $2\\pi r=60-x$ folgt "
            "$r=\\dfrac{60-x}{2\\pi}$. Die Gesamtfläche allein in Abhängigkeit von $x$:\n\n"
            "$$A(x) = \\left(\\dfrac{x}{4}\\right)^{2}+\\pi r^{2}"
            "=\\dfrac{x^{2}}{16}+\\pi\\cdot\\dfrac{(60-x)^{2}}{4\\pi^{2}}$$\n\n"
            "$$A(x) = \\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi}$$\n\n"
            "Das ist genau die behauptete Funktion.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Leite die Gesamtfläche nach $x$ ab, den Kreisterm mit der Kettenregel:\n\n"
            "$$A'(x) = \\dfrac{2x}{16}+\\dfrac{2(60-x)\\cdot(-1)}{4\\pi}$$\n\n"
            "$$A'(x) = \\dfrac{x}{8}-\\dfrac{60-x}{2\\pi}$$\n\n"
            "Das stimmt mit der behaupteten Ableitung überein.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Eine waagerechte Tangente bedeutet $A'(x)=0$. Setze die Ableitung null:\n\n"
            "$$\\dfrac{x}{8}=\\dfrac{60-x}{2\\pi}$$\n\n"
            "Beide Seiten mit $8\\cdot 2\\pi$ multiplizieren:\n\n"
            "$$2\\pi x = 8(60-x)$$\n\n"
            "$$2\\pi x + 8x = 480$$\n\n"
            "$$x(2\\pi+8)=480$$\n\n"
            "$$x=\\dfrac{480}{2\\pi+8}=\\dfrac{240}{4+\\pi}$$\n\n"
            "Das ist genau die behauptete Stelle, und sie liegt mit $x\\approx 33{,}6$ im "
            "zulässigen Bereich $(0,60)$.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Wahr\n\n"
            "Berechne die zweite Ableitung an der kritischen Stelle:\n\n"
            "$$A''(x) = \\dfrac{1}{8}+\\dfrac{1}{2\\pi}>0$$\n\n"
            "Die zweite Ableitung ist konstant und positiv, die Kurve also überall "
            "linksgekrümmt. Eine waagerechte Tangente bei positiver Krümmung ist nach dem "
            "Kriterium der zweiten Ableitung ein lokales Minimum. Die Aufteilung "
            "$x=\\dfrac{240}{4+\\pi}$ minimiert die Gesamtfläche also lokal.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Zwei Figuren treten auf, aber beide sind durch die einzige Teilungsvariable $x$ "
            "festgelegt: die Quadratseite ist $x/4$, der Kreisradius $(60-x)/(2\\pi)$.\n\n"
            "$$A(x)=\\dfrac{x^{2}}{16}+\\dfrac{(60-x)^{2}}{4\\pi},\\qquad x\\in[0,60]$$\n\n"
            "Nach dem Einsetzen der Nebenbedingung ist das eine gewöhnliche Extremwertaufgabe "
            "in einer Variablen auf einem abgeschlossenen Intervall, genau so wie in den "
            "Buchstaben A bis D durchgeführt. Die Zahl der Figuren verhindert die Reduktion "
            "nicht.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}

DE["MATH 12.150"] = {
    "title": "Ein Quiz-Wettbewerb (Vergleich zweier Formate)",
    "context": (
        "Eine Quizliga wählt zwischen zwei Quizformaten mit je 4 Fragen. In Format A ist $X$ "
        "die Anzahl der richtigen Antworten mit $P(X=0)=0{,}05$, $P(X=1)=0{,}20$, "
        "$P(X=2)=0{,}35$, $P(X=3)=0{,}30$ und $P(X=4)=0{,}10$. In Format B gilt "
        "$P(X=0)=0{,}15$, $P(X=1)=0{,}20$, $P(X=2)=0{,}15$, $P(X=3)=0{,}30$ und "
        "$P(X=4)=0{,}20$."
    ),
    "statements": [
        "Beide Formate haben denselben Erwartungswert von $X$.",
        "Format B hat eine größere Varianz von $X$ als Format A.",
        "In Format A trägt der Wert $x = 4$ mehr zur Varianz von $X$ bei als $x = 0$.",
        "In Format B trägt der Wert $x = 4$ mehr zur Varianz von $X$ bei als $x = 0$.",
        "Die Standardabweichung von B ist mehr als doppelt so groß wie die Standardabweichung von A.",
    ],
    "solution_overview": (
        "Verglichen werden zwei Quizformate A und B. In beiden Fällen beschreibt die "
        "Zufallsvariable $X$ die Anzahl richtiger Antworten bei $4$ Fragen; die "
        "Wahrscheinlichkeitsverteilung ist jeweils vorgegeben.\n\n"
        "**Teil 1: Erwartungswerte.** Es gilt $E[X]=\\sum x\\,P(X=x)$.\n\n"
        "$$E[X_A] = 0\\cdot 0{,}05 + 1\\cdot 0{,}20 + 2\\cdot 0{,}35 + 3\\cdot 0{,}30 + 4\\cdot 0{,}10 = 2{,}20$$\n\n"
        "$$E[X_B] = 0\\cdot 0{,}15 + 1\\cdot 0{,}20 + 2\\cdot 0{,}15 + 3\\cdot 0{,}30 + 4\\cdot 0{,}20 = 2{,}20$$\n\n"
        "Beide Formate haben also denselben Erwartungswert $2{,}20$.\n\n"
        "**Teil 2: Varianzen.** Mit $\\mathrm{Var}(X)=E[X^{2}]-\\left(E[X]\\right)^{2}$ und\n\n"
        "$$E[X_A^{2}] = 0 + 0{,}20 + 1{,}40 + 2{,}70 + 1{,}60 = 5{,}90$$\n\n"
        "$$E[X_B^{2}] = 0 + 0{,}20 + 0{,}60 + 2{,}70 + 3{,}20 = 6{,}70$$\n\n"
        "folgt\n\n"
        "$$\\mathrm{Var}(X_A) = 5{,}90 - 2{,}20^{2} = 5{,}90 - 4{,}84 = 1{,}06$$\n\n"
        "$$\\mathrm{Var}(X_B) = 6{,}70 - 2{,}20^{2} = 6{,}70 - 4{,}84 = 1{,}86$$\n\n"
        "**Teil 3: Standardabweichungen.**\n\n"
        "$$\\sigma_A = \\sqrt{1{,}06}\\approx 1{,}0296,\\qquad "
        "\\sigma_B = \\sqrt{1{,}86}\\approx 1{,}3638$$\n\n"
        "Der Beitrag eines einzelnen Wertes $x$ zur Varianz ist "
        "$P(X=x)\\left(x-E[X]\\right)^{2}$."
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Der Erwartungswert ist die Summe aus Ausprägung mal Wahrscheinlichkeit, "
            "$E[X]=\\sum x\\,P(X=x)$.\n\n"
            "Format A:\n\n"
            "$$E[X_A] = 0{,}20 + 0{,}70 + 0{,}90 + 0{,}40 = 2{,}20$$\n\n"
            "Format B:\n\n"
            "$$E[X_B] = 0{,}20 + 0{,}30 + 0{,}90 + 0{,}80 = 2{,}20$$\n\n"
            "Beide Erwartungswerte betragen $2{,}20$ und sind damit gleich.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Wahr\n\n"
            "Die Varianz misst die Streuung um den Mittelwert, "
            "$\\mathrm{Var}(X) = E[X^{2}] - \\left(E[X]\\right)^{2}$.\n\n"
            "$$\\mathrm{Var}(X_A) = 5{,}90 - 4{,}84 = 1{,}06$$\n\n"
            "$$\\mathrm{Var}(X_B) = 6{,}70 - 4{,}84 = 1{,}86$$\n\n"
            "Der Vergleich ergibt\n\n"
            "$$1{,}86 > 1{,}06$$\n\n"
            "Format B streut also stärker, obwohl beide denselben Erwartungswert haben.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**C.** → Wahr\n\n"
            "Der Beitrag eines Wertes $x$ zur Varianz ist $P(X=x)\\left(x-E[X]\\right)^{2}$. "
            "Für Format A ist $E[X_A]=2{,}20$.\n\n"
            "Beitrag von $x=4$:\n\n"
            "$$0{,}10\\cdot (4 - 2{,}20)^{2} = 0{,}10\\cdot 3{,}24 = 0{,}324$$\n\n"
            "Beitrag von $x=0$:\n\n"
            "$$0{,}05\\cdot (0 - 2{,}20)^{2} = 0{,}05\\cdot 4{,}84 = 0{,}242$$\n\n"
            "Der Vergleich ergibt\n\n"
            "$$0{,}324 > 0{,}242$$\n\n"
            "In Format A trägt $x=4$ also mehr zur Varianz bei als $x=0$.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Falsch\n\n"
            "Dieselbe Rechnung für Format B, wieder mit $E[X_B]=2{,}20$.\n\n"
            "Beitrag von $x=4$:\n\n"
            "$$0{,}20\\cdot (4 - 2{,}20)^{2} = 0{,}20\\cdot 3{,}24 = 0{,}648$$\n\n"
            "Beitrag von $x=0$:\n\n"
            "$$0{,}15\\cdot (0 - 2{,}20)^{2} = 0{,}15\\cdot 4{,}84 = 0{,}726$$\n\n"
            "Der Vergleich ergibt\n\n"
            "$$0{,}648 < 0{,}726$$\n\n"
            "Obwohl $x=0$ in Format B seltener ist, wiegt der größere Abstand zum Mittelwert "
            "schwerer. Der Wert $x=4$ trägt also nicht mehr bei als $x=0$.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**E.** → Falsch\n\n"
            "Die Standardabweichung ist die Wurzel der Varianz.\n\n"
            "$$\\sigma_A = \\sqrt{1{,}06}\\approx 1{,}0296$$\n\n"
            "$$\\sigma_B = \\sqrt{1{,}86}\\approx 1{,}3638$$\n\n"
            "Das Doppelte von $\\sigma_A$ ist\n\n"
            "$$2\\cdot 1{,}0296 \\approx 2{,}0592$$\n\n"
            "Vergleich mit $\\sigma_B$:\n\n"
            "$$1{,}3638 < 2{,}0592$$\n\n"
            "Die Standardabweichung von B ist also nicht mehr als doppelt so groß wie die von "
            "A; das Verhältnis beträgt nur etwa $1{,}32$.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
    "tables_markdown": (
        "| x | 0 | 1 | 2 | 3 | 4 |\n"
        "| --- | --- | --- | --- | --- | --- |\n"
        "| Format A | 0,05 | 0,2 | 0,35 | 0,3 | 0,1 |\n\n"
        "| x | 0 | 1 | 2 | 3 | 4 |\n"
        "| --- | --- | --- | --- | --- | --- |\n"
        "| Format B | 0,15 | 0,2 | 0,15 | 0,3 | 0,2 |"
    ),
}

DE["MATH 13.78"] = {
    "title": "Screening in einer Gemeindeklinik",
    "context": (
        "An einem Screening-Tag mit 80 unabhängigen Patienten werden positive und negative "
        "Befunde im Verhältnis 3 : 17 erwartet. Die Standardabweichung der Anzahl der positiven "
        "Befunde an diesem Tag beträgt $\\sqrt{10{,}2}$. Bewerte jede Aussage. Markiere sie mit "
        "WAHR oder FALSCH."
    ),
    "statements": [
        "Ein einzelner Patient wird mit der Wahrscheinlichkeit 0,85 negativ getestet.",
        "Unter den nächsten 20 Patienten beträgt die erwartete Anzahl positiver Befunde 4.",
        "Bei 40 Patienten beträgt die Varianz der Anzahl positiver Befunde 5,1.",
        "Die Wahrscheinlichkeit für 3 aufeinanderfolgende positive Befunde ist kleiner als 0,005.",
        "Die Wahrscheinlichkeit für höchstens 1 positiven Befund unter den nächsten 8 Patienten ist größer als 0,7.",
    ],
    "solution_overview": (
        "An einem Screening-Tag mit 80 unabhängigen Patienten werden positive und negative "
        "Befunde im Verhältnis 3 : 17 erwartet; die Standardabweichung der positiven Befunde "
        "beträgt $\\sqrt{10{,}2}$.\n\n"
        "Aus dem Verhältnis $3:17$ folgt die Trefferwahrscheinlichkeit\n\n"
        "$$p = \\dfrac{3}{3+17} = 0{,}15$$\n\n"
        "Die Anzahl der positiven Befunde wird als $X\\sim\\mathrm{Bin}(80;\\,0{,}15)$ "
        "modelliert. Probe über die Standardabweichung:\n\n"
        "$$\\mathrm{Var}(X)=np(1-p)=80\\cdot 0{,}15\\cdot 0{,}85=10{,}2$$\n\n"
        "Für Teilgruppen der Größe $n$ gelten dieselben Formeln $E[X]=np$ und "
        "$\\mathrm{Var}(X)=np(1-p)$, und Einzelwahrscheinlichkeiten folgen aus\n\n"
        "$$P(X=x)=\\binom{n}{x}p^{x}(1-p)^{n-x}$$"
    ),
    "explanations": [
        (
            "**A.** → Wahr\n\n"
            "Bestimme zuerst die Trefferwahrscheinlichkeit aus dem Verhältnis $3:17$:\n\n"
            "$$p = \\dfrac{3}{3+17} = \\dfrac{3}{20} = 0{,}15$$\n\n"
            "Jeder Patient wird entweder positiv oder negativ getestet, die "
            "Gegenwahrscheinlichkeit ist also\n\n"
            "$$1-p = 1-0{,}15 = 0{,}85$$\n\n"
            "Das stimmt mit der behaupteten Wahrscheinlichkeit überein.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**B.** → Falsch\n\n"
            "Für eine binomialverteilte Anzahl $X\\sim\\mathrm{Bin}(n;\\,p)$ ist der "
            "Erwartungswert das Produkt aus Anzahl der Versuche und "
            "Trefferwahrscheinlichkeit:\n\n"
            "$$E[X] = np$$\n\n"
            "Mit $n=20$ und $p=0{,}15$:\n\n"
            "$$E[X] = 20\\cdot 0{,}15 = 3$$\n\n"
            "Behauptet werden $4$, berechnet ergibt sich $3$.\n\n"
            "Die Aussage ist falsch."
        ),
        (
            "**C.** → Wahr\n\n"
            "Für $X\\sim\\mathrm{Bin}(n;\\,p)$ lautet die Varianzformel\n\n"
            "$$\\mathrm{Var}(X) = np(1-p)$$\n\n"
            "Einsetzen von $n=40$, $p=0{,}15$ und $1-p=0{,}85$:\n\n"
            "$$\\mathrm{Var}(X) = 40\\cdot 0{,}15\\cdot 0{,}85$$\n\n"
            "$$40\\cdot 0{,}15 = 6,\\qquad 6\\cdot 0{,}85 = 5{,}1$$\n\n"
            "Das ist genau die behauptete Varianz.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**D.** → Wahr\n\n"
            "Die Befunde sind unabhängig, eine Serie von Treffern multipliziert also dieselbe "
            "Wahrscheinlichkeit $p$:\n\n"
            "$$P(\\text{3 positive Befunde in Folge}) = p^{3}$$\n\n"
            "Mit $p=0{,}15$:\n\n"
            "$$p^{3} = (0{,}15)^{3} = 0{,}003375$$\n\n"
            "Vergleich mit der Schranke $0{,}005$:\n\n"
            "$$0{,}003375 < 0{,}005$$\n\n"
            "Die behauptete Ungleichung gilt also.\n\n"
            "Die Aussage ist wahr."
        ),
        (
            "**E.** → Falsch\n\n"
            "Sei $X\\sim\\mathrm{Bin}(8;\\,0{,}15)$. „Höchstens 1 positiver Befund“ ist die "
            "Vereinigung der unvereinbaren Fälle $X=0$ und $X=1$:\n\n"
            "$$P(X\\le 1) = \\sum_{x=0}^{1} \\binom{8}{x}p^{x}(1-p)^{8-x}$$\n\n"
            "Die beiden Einzelwahrscheinlichkeiten:\n\n"
            "$$P(X = 0) = \\binom{8}{0}(0{,}15)^{0}(0{,}85)^{8}\\approx 0{,}2725$$\n\n"
            "$$P(X = 1) = \\binom{8}{1}(0{,}15)^{1}(0{,}85)^{7}\\approx 0{,}3847$$\n\n"
            "Addieren:\n\n"
            "$$P(X\\le 1) \\approx 0{,}2725 + 0{,}3847 = 0{,}6572$$\n\n"
            "Vergleich mit der Schranke $0{,}7$:\n\n"
            "$$0{,}6572 < 0{,}7$$\n\n"
            "Die behauptete Ungleichung gilt also nicht.\n\n"
            "Die Aussage ist falsch."
        ),
    ],
}


def build():
    en = json.loads(EN_SOURCE.read_text(encoding="utf-8"))
    out = []
    for task in en:
        cid = task["case_id"]
        de = DE[cid]
        item = {
            "case_id": cid,
            "id": task["id"],
            "title": de["title"],
            "chapter": task["chapter"],
            "subsection": task["subsection"],
            "context": de["context"],
            "statements": de["statements"],
            "answer_key": task["answer_key"],
            "tactical_explanations": de["explanations"],
            "difficulty_level": task["difficulty_level"],
            "solution_overview": de["solution_overview"],
            "figure": task.get("figure"),
            "tables_markdown": de.get("tables_markdown", task.get("tables_markdown")),
        }
        out.append(item)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return out


LETTERS = ["A", "B", "C", "D", "E"]
FORBIDDEN = ["sorg-sorg", "→ True", "→ False", "→ Richtig", "Kommentar", "So the statement"]


def validate(built):
    en = {t["case_id"]: t for t in json.loads(EN_SOURCE.read_text(encoding="utf-8"))}
    errors, warnings = [], []

    if len(built) != 13:
        errors.append(f"expected 13 tasks, got {len(built)}")

    for task in built:
        cid = task["case_id"]
        for field, n in (("statements", 5), ("answer_key", 5), ("tactical_explanations", 5)):
            if len(task[field]) != n:
                errors.append(f"{cid}: {field} has {len(task[field])} entries, expected {n}")

        if task["answer_key"] != en[cid]["answer_key"]:
            errors.append(f"{cid}: answer_key differs from EN source")

        if not task["solution_overview"].strip():
            errors.append(f"{cid}: empty solution_overview")

        for i, expl in enumerate(task["tactical_explanations"]):
            letter = LETTERS[i]
            expected_head = f"**{letter}.** → " + ("Wahr" if task["answer_key"][i] else "Falsch")
            if not expl.startswith(f"**{letter}.**"):
                errors.append(f"{cid}[{letter}]: does not start with **{letter}.**")
            if not expl.startswith(expected_head):
                errors.append(f"{cid}[{letter}]: header does not match answer_key ({expected_head!r})")
            tail = "Die Aussage ist wahr." if task["answer_key"][i] else "Die Aussage ist falsch."
            if not expl.rstrip().endswith(tail):
                errors.append(f"{cid}[{letter}]: does not end with {tail!r}")

        blob = json.dumps(task, ensure_ascii=False)
        for bad in FORBIDDEN:
            if bad in blob:
                errors.append(f"{cid}: contains forbidden text {bad!r}")
        for bad in ("→ Wahr", "→ Falsch"):
            pass

        # dollar balance, ignoring escaped \$ and the base64 figure payload
        for field in ("context", "solution_overview"):
            warnings += dollar_check(cid, field, task[field])
        for i, s in enumerate(task["statements"]):
            warnings += dollar_check(cid, f"statements[{i}]", s)
        for i, e in enumerate(task["tactical_explanations"]):
            warnings += dollar_check(cid, f"expl[{LETTERS[i]}]", e)

        for i, e in enumerate(task["tactical_explanations"]):
            for m in re.finditer(r"\^\d\d", e):
                warnings.append(f"{cid}[{LETTERS[i]}]: unbraced multi-digit exponent {m.group(0)!r}")

    return errors, warnings


def dollar_check(cid, field, text):
    stripped = re.sub(r"\\\$", "", text)
    blocks = stripped.count("$$")
    singles = stripped.replace("$$", "").count("$")
    out = []
    if blocks % 2:
        out.append(f"{cid}.{field}: odd number of '$$' ({blocks})")
    if singles % 2:
        out.append(f"{cid}.{field}: odd number of inline '$' ({singles})")
    return out


if __name__ == "__main__":
    data = build()
    errs, warns = validate(data)
    print(f"wrote {OUT} with {len(data)} tasks")
    for w in warns:
        print("WARN:", w)
    for e in errs:
        print("ERROR:", e)
    sys.exit(1 if errs else 0)
