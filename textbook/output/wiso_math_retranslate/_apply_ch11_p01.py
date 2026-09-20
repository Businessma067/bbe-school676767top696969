# -*- coding: utf-8 -*-
"""Apply full 1:1 DE tactical translations for ch11-p01 into live math-de-ch11.json."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SRC_PACK = ROOT / "textbook/output/wiso_math_retranslate/ch11-p01.json"
DONE_PACK = ROOT / "textbook/output/wiso_math_retranslate_done/ch11-p01.json"
LIVE = ROOT / "src/data/wiso/math-de-ch11.json"

CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$")


def T(s: str) -> str:
    """Normalize: no em dashes; ensure trailing newline not required."""
    if "—" in s:
        raise ValueError("em dash in translation")
    return s.strip() + "\n"


# Full 1:1 German translations keyed by case_id
PATCH: dict[str, dict] = {}

# --- MATH 11.04 ---
PATCH["MATH 11.04"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Erlös ist Preis mal verkaufte Menge. Expandiere das Produkt mit dem linearen Preisplan:

$$
R(q) = q\cdot(80-2q)
$$

$$
R(q) = 80q-2q^{2}
$$

Lass den Ausdruck nicht als $q(80-2q)$ stehen, wenn die Behauptung die expandierte Quadratform verlangt. Genau diese expandierte Form ist genannt.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Grenzerlös ist die Ableitung der gesamten Erlösfunktion, nicht die Ableitung des Preises allein. Termweises Differenzieren von $R(q)=80q-2q^{2}$ liefert

$$
R'(q) = 80-4q
$$

Eine Falle ist, $R'(q)=-2$ aus der Preissteigung zu schreiben. Die behauptete Formel stimmt mit der korrekten Ableitung überein.

$$
R(q) = 80q-2q^{2}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze die genannte Absatzmenge $q=10$ in den Grenzerlös ein:

$$
R'(10) = 80-4\cdot 10
$$

$$
R'(10) = 80-40
$$

$$
80 - 40 = 40
$$

$$
R'(10) = 40 = 40
$$

$$
R'(10) = 40
$$

Verwechsle dies nicht mit dem Preis $p(10)=60$ oder dem Erlös $R(10)=600$. Die Steigungsrechnung stimmt mit der Behauptung überein.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Der Preisplan allein hat die Steigung $p'(q)=-2$, während die Ableitung des Erlöses

$$
R'(q) = 80-4q
$$

ist. Das sind für jedes $q>0$ verschiedene Funktionen. $R'$ mit $p'$ gleichzusetzen vergisst, dass der Erlös das Produkt $q\,p(q)$ ist. Die Identifikation in der Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
R'(q) = p'(q)
$$

$$
p'(q) = -2
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Zuerst Höhe und Steigung bei $q=10$ auswerten:

$$
R(10) = 80\cdot 10-2\cdot 100 = 600
$$

$$
R'(10) = 40
$$

Die Punkt-Steigungs-Form liefert dann die Tangente

$$
y = 600+40(q-10)
$$

genau wie behauptet. $600$ durch $p(10)$ zu ersetzen würde die Tangentengleichung zerstören. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.05 ---
PATCH["MATH 11.05"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Stückkosten sind Gesamtkosten geteilt durch Output. Spalte den Quotienten termweise:

$$
A(q) = \dfrac{300+6q+\dfrac{3}{100}q^{2}}{q}
$$

$$
A(q) = \dfrac{300}{q}+6+\dfrac{3}{100}q
$$

Jeder Term von $C$ trägt getrennt bei: die Fixkosten werden $\dfrac{300}{q}$, der lineare Teil bleibt $6$, und der quadratische Teil wird proportional zu $q$. Das ist die behauptete Vereinfachung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Differenziere den Stückkostenausdruck termweise mit $\dfrac{d}{dq}\bigl(q^{-1}\bigr)=-q^{-2}$ und behandle die Konstante $6$ unter dem Differenzieren als null:

$$
A'(q) = -\dfrac{300}{q^{2}}+\dfrac{3}{100}
$$

Eine Falle ist, $\dfrac{3}{100}q$ wie $\dfrac{3}{100}q^{2}$ abzuleiten. Die behauptete Ableitung stimmt.

$$
\dfrac{d}{dq}\bigl(q^{-1}\bigr) = -q^{-2}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $q=100$ in die Stückkostenableitung ein:

$$
A'(100) = -\dfrac{300}{10000}+\dfrac{3}{100}
$$

$$
A'(100) = -0.03+0.03
$$

$$
A'(100) = 0
$$

Die beiden Beiträge heben sich an dieser Menge genau auf. Die Ableitung verschwindet dort und passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Grenzkosten sind die Ableitung $C'(q)$ der Gesamtkosten, während

$$
A'(q) = -\dfrac{300}{q^{2}}+\dfrac{3}{100}
$$

die Änderungsrate der Stückkosten ist. Das sind verschiedene Größen: die eine verfolgt die Steigung von $C$, die andere die Steigung von $C/q$. $A'$ mit Grenzkosten gleichzusetzen ist falsch. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Eine verschwindende erste Ableitung bedeutet eine horizontale Tangente am Graphen von $A$. Wegen

$$
A'(100) = 0
$$

sind die Stückkosten bei $q=100$ lokal flach. Ob Minimum oder Maximum, sagt das allein noch nicht, aber lokale Flachheit ist genau das, was die Behauptung aussagt.

$$
q = 100
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.07 ---
PATCH["MATH 11.07"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Response-Index ist das Produkt $S(x)=x^{2}\cdot e^{-x}$. Wende die Produktregel an und klammere $x\,e^{-x}$ aus:

Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du zusammenfasst.

$$
S(x) = x^{2} \cdot e^{-x}
$$

$$
u(x) = x^{2}
$$

$$
v(x) = e^{- x}
$$

$$
u'(x) = 2 x
$$

$$
v'(x) = - e^{- x}
$$

$$
S'(x) = (2 x)\cdot(e^{- x}) + (x^{2})\cdot(- e^{- x})
$$

Erst nach dieser Produktregel-Entwicklung vereinfachen wir zur behaupteten Form.

$$
S'(x) = 2x\,e^{-x}+x^{2}(-e^{-x})
$$

$$
S'(x) = x\,e^{-x}(2-x)
$$

Eine Falle ist, das Kettenregel-Minus von $e^{-x}$ zu vergessen. Die faktorisierte Form stimmt genau mit der Behauptung überein.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $x=2$ in die faktorisierte Ableitung ein:

$$
S'(2) = 2\cdot e^{-2}\cdot(2-2)
$$

$$
S'(2) = 0
$$

Der Faktor $(2-x)$ verschwindet, daher ist das ganze Produkt null, obwohl $e^{-2}\neq 0$. Die Ableitung verschwindet bei dieser Intensität und passt zur Behauptung.

$$
x = 2
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $S'(x)=x\,e^{-x}(2-x)$ erneut mit der Produktregel. Ausklappen und Potenzen von $x$ sammeln liefert

$$
S''(x) = e^{-x}(x^{2}-4x+2)
$$

Bleibe nicht bei einem unvereinfachten Drei-Faktor-Produkt stehen: der kompakte Polynomfaktor ist entscheidend. Mit dieser Form:

$$
S''(x) = e^{-x}\cdot (x^{2}-4x+2)
$$

$$
S'(x) = x\,e^{-x}(2-x)
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $x=1$ in die erste Ableitung ein:

$$
S'(1) = 1\cdot e^{-1}\cdot(2-1)
$$

$$
S'(1) = e^{-1}
$$

Hier ist der Faktor $(2-x)$ gleich $1$, daher reduziert sich die Ableitung sauber auf $e^{-1}$. Der berechnete Wert passt zur Behauptung.

$$
x = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Richtig

Eine horizontale Tangente bedeutet genau Steigung null. Aus der Auswertung bei $x=2$ folgt

$$
S'(2) = 0
$$

also ist die Tangente am Graphen dort horizontal. Verwechsle „horizontale Tangente“ nicht mit „horizontale Asymptote“: hier geht es um eine lokal flache Steigung.

$$
x = 2
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.08 ---
PATCH["MATH 11.08"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Schreibe die Nachfrage als $D(a)=7(a+9)^{\frac{1}{2}}$ und wende die Kettenregel an; multipliziere mit der inneren Steigung $1$:

$$
D'(a) = 7\cdot\dfrac{1}{2}(a+9)^{-\frac{1}{2}}
$$

$$
D'(a) = \dfrac{7}{2\sqrt{a+9}}
$$

Eine Falle ist, den Faktor $\dfrac{1}{2}$ aus der Wurzelpotenz zu vergessen. Die vereinfachte Formel passt zur Behauptung.

$$
D(a) = 7(a+9)^{\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $a=7$ ein; beachte $a+9=16$ und $\sqrt{16}=4$:

$$
D'(7) = \dfrac{7}{2\cdot 4}
$$

$$
D'(7) = \dfrac{7}{8}
$$

Berechne nicht $D(7)=7\cdot 4=28$, wenn die Behauptung die Ableitung verlangt. Die Steigung stimmt.

$$
a = 7
$$

$$
a+9 = 16
$$

$$
\sqrt{16} = 4
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $D'(a)=\dfrac{7}{2}(a+9)^{-\frac{1}{2}}$ noch einmal:

$$
D''(a) = \dfrac{7}{2}\cdot\Bigl(-\dfrac{1}{2}\Bigr)(a+9)^{-\frac{3}{2}}
$$

$$
D''(a) = -\dfrac{7}{4}(a+9)^{-\frac{3}{2}}
$$

Das Minuszeichen zeigt abnehmende Grenzerträge. Mit der behaupteten zweiten Ableitung:

$$
D'(a) = \dfrac{7}{2}(a+9)^{-\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Nahe $a=7$ sagt das Modell einen Zuwachs von etwa

$$
D'(7) = \dfrac{7}{8}
$$

Nachfrageeinheiten pro zusätzlicher Werbeeinheit voraus, nicht $7$. Den Koeffizienten $7$ in $D(a)$ mit dem Grenzertrag bei $a=7$ zu verwechseln überschätzt die Steigung stark. Die Behauptung überschätzt den Grenzertrag.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
a = 7
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Vergleiche die Ableitung bei den beiden Werbeniveaus:

$$
D'(16) = \dfrac{7}{2\sqrt{25}} = \dfrac{7}{10}
$$

$$
D'(0) = \dfrac{7}{2\sqrt{9}} = \dfrac{7}{6}
$$

Wegen $\dfrac{7}{10}<\dfrac{7}{6}$ ist die Ableitung bei $a=16$ kleiner als bei $a=0$. Das sind abnehmende Erträge in Aktion.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.09 ---
PATCH["MATH 11.09"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Erlös ist das Produkt $R(n)=(20-3n)\sqrt{2n+1}$. Wende die Produktregel an und fasse über den gemeinsamen Nenner $\sqrt{2n+1}$ zusammen:

Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du zusammenfasst.

$$
R(n) = (20-3n) \cdot \sqrt{2n+1}
$$

$$
u(n) = (20-3n)
$$

$$
v(n) = \sqrt{2n+1}
$$

$$
R'(n) = u'(n)\,v(n) + u(n)\,v'(n)
$$

Erst nach dieser Produktregel-Entwicklung vereinfachen wir zur behaupteten Form.

$$
R'(n) = \dfrac{-3(2n+1)+(20-3n)}{\sqrt{2n+1}}
$$

$$
R'(n) = \dfrac{17-9n}{\sqrt{2n+1}}
$$

Die Zähleralgebra $ -6n-3+20-3n=17-9n $ ist der heikle Schritt. Mit der behaupteten vereinfachten Formel:

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $n=1$ in die zusammengefasste Ableitung ein:

$$
R'(1) = \dfrac{17-9}{\sqrt{2+1}}
$$

$$
R'(1) = \dfrac{8}{\sqrt{3}}
$$

Rationalisiere nicht von $\dfrac{8}{\sqrt{3}}$ weg, wenn nicht gefordert: die Behauptung behält diese Form. Der berechnete Wert stimmt.

$$
n = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Bevor man einen gemeinsamen Nenner bildet, schreibt die Produktregel die beiden Stücke getrennt: differenziere den Preisfaktor und den Nachfragefaktor der Reihe nach,

$$
R'(n) = -3\sqrt{2n+1}+\dfrac{20-3n}{\sqrt{2n+1}}
$$

genau die in der Behauptung genannte Zwischenform. Unzusammengefasst zu lassen ist hier Absicht.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Eine kritische Stelle löst $R'(n)=0$. Bei positivem Nenner $\sqrt{2n+1}$ muss der Zähler verschwinden:

$$
17-9n = 0
$$

$$
n = \dfrac{17}{9}
$$

das passt zur behaupteten Nullstelle. Setze nicht versehentlich $17-9n=\sqrt{2n+1}$. Vergleich mit der Behauptung:

$$
R'(n) = 0
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die Ableitung wechselt das Vorzeichen an der kritischen Stelle

$$
n = \dfrac{17}{9}
$$

und $\dfrac{17}{9}<2$. Der Erlös steigt also auf einem Teil von $(0,2)$ und fällt auf dem Rest, er ist nicht auf dem ganzen Intervall steigend. Die Behauptung überschätzt die Monotonie. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
}

# --- MATH 11.10 ---
PATCH["MATH 11.10"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Die Wartungszeit pro effektiver Einheit ist der Quotient $T(n)=\dfrac{2n^{2}+8n}{n+1}$. Wende die Quotientenregel mit Zähler $u=2n^{2}+8n$ und Nenner $v=n+1$ an:

$$
T(n) = \dfrac{2n^{2}+8n}{n+1}
$$

$$
u(n) = 2n^{2}+8n
$$

$$
v(n) = n+1
$$

$$
u'(n) = 4 n + 8
$$

$$
v'(n) = 1
$$

$$
T'(n) = \dfrac{(4 n + 8)(n+1) - (2n^{2}+8n)(1)}{(n+1)^{2}}
$$

$$
T'(n) = \dfrac{(4n+8)(n+1)-(2n^{2}+8n)\cdot 1}{(n+1)^{2}}
$$

$$
T'(n) = \dfrac{2n^{2}+4n+8}{(n+1)^{2}}
$$

das passt zur behaupteten Formel.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $n=1$ in diese Ableitung ein:

$$
T'(1) = \dfrac{2+4+8}{2^{2}}
$$

$$
T'(1) = \dfrac{14}{4}
$$

$$
T'(1) = \dfrac{7}{2}
$$

Berechne nicht $T(1)=\dfrac{10}{2}=5$, wenn die Behauptung die Steigung verlangt. Die berechnete Ableitung stimmt.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Für $n>0$ ist der Zähler $2n^{2}+4n+8=2(n^{2}+2n+4)$ eine Summe positiver Terme (Diskriminante $4-16<0$), und der Nenner $(n+1)^{2}$ ist positiv. Daher

$$
T'(n) = \dfrac{2n^{2}+4n+8}{(n+1)^{2}}>0
$$

für jedes $n>0$. Eine positive Ableitung bedeutet: $T$ ist streng steigend.

$$
2n^{2}+4n+8 = 2(n^{2}+2n+4)
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Falsches Kürzen würde $\dfrac{2n+8}{n+1}$ liefern, aber die echte Ableitung nach der Quotientenregel ist

$$
T'(n) = \dfrac{2n^{2}+4n+8}{(n+1)^{2}}
$$

Diese Ausdrücke sind nicht identisch: der falsche lässt sowohl die quadratische Zählerstruktur als auch den quadrierten Nenner weg. Die Aussage ist falsch. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
T'(n) = \dfrac{2n+8}{n+1}
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Falsch

Für $n>0$ verschwindet der Zähler $2n^{2}+4n+8$ nie (Diskriminante $4-16<0$), und der Nenner bleibt positiv, also

$$
T'(n) = \dfrac{2n^{2}+4n+8}{(n+1)^{2}}>0
$$

durchgängig. Eine streng positive Ableitung trifft nie null, daher existiert keine solche Nullstelle und

$$
T'(n) = 0
$$

passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
}

# --- MATH 11.11 ---
PATCH["MATH 11.11"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Differenziere den Log-Nutzen $U(x)=40\ln(x+1)-x$ termweise. Die Kettenregel am Logarithmus liefert $\dfrac{40}{x+1}$, die lineare Strafe $-1$:

$$
U'(x) = \dfrac{40}{x+1}-1
$$

das passt zur behaupteten ersten Ableitung. Schreibe nicht $\dfrac{40}{x}$ und vergesse die Verschiebung $+1$.

$$
U(x) = 40\ln(x+1)-x
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze die genannte Lernzeit $x=3$ in die erste Ableitung ein:

$$
U'(3) = \dfrac{40}{3+1}-1
$$

$$
U'(3) = \dfrac{40}{4}-1
$$

$$
U'(3) = 9
$$

Eine Falle wäre, bei $\dfrac{40}{4}=10$ stehenzubleiben und das Subtrahieren von $1$ zu vergessen. Die volle Rechnung passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $U'(x)=40(x+1)^{-1}-1$ noch einmal. Die Konstante $-1$ verschwindet, und die Potenzregel an $(x+1)^{-1}$ liefert

$$
U''(x) = -40(x+1)^{-2}
$$

$$
U''(x) = -\dfrac{40}{(x+1)^{2}}
$$

das passt zur behaupteten zweiten Ableitung. Das Minuszeichen zeigt abnehmenden Grenznutzen.

$$
U'(x) = 40(x+1)^{-1}-1
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Die erste Ableitung bei $x=0$ ergibt den gewöhnlichen endlichen Wert

$$
U'(0) = \dfrac{40}{1}-1
$$

$$
U'(0) = 39
$$

also ist die Ableitung bei $x=0$ definiert. Das Argument des Logarithmus ist $x+1$, gleich $1$ bei $x=0$: keine Division durch null. Die Behauptung ist falsch.

$$
x = 0
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Die erste Ableitung misst die momentane Nutzenänderung pro zusätzlicher Lernstunde. Bei $x=3$ beträgt diese Rate

$$
U'(3) = 9
$$

also ändert eine zusätzliche Stunde nahe diesem Niveau den Nutzen um ungefähr $9$ Nutzeneinheiten. Die Näherungssprache passt zur Ableitungsinterpretation.

$$
x = 3
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.12 ---
PATCH["MATH 11.12"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Wende die Potenzregel auf die Lernkurven-Kosten $c(N)=1000N^{-\frac{1}{2}}$ an: multipliziere mit dem Exponenten $-\tfrac{1}{2}$ und senke die Potenz:

$$
c'(N) = 1000\cdot\Bigl(-\dfrac{1}{2}\Bigr)N^{-\frac{3}{2}}
$$

$$
c'(N) = -500N^{-\frac{3}{2}}
$$

das passt zur behaupteten Formel. Behalte das Minus: Lernkurven fallen.

$$
c(N) = 1000N^{-\frac{1}{2}}
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $N=4$ ein und nutze $4^{-\frac{3}{2}}=\dfrac{1}{8}$:

$$
c'(4) = -500\cdot\dfrac{1}{8}
$$

$$
c'(4) = -\dfrac{125}{2}
$$

Eine Falle wäre $4^{-\frac{1}{2}}=\tfrac{1}{2}$ statt $4^{-\frac{3}{2}}=\tfrac{1}{8}$. Der korrekte Wert passt zur Behauptung.

$$
N = 4
$$

$$
4^{-\frac{3}{2}} = \dfrac{1}{8}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Für jedes $N>0$ ist die Potenz $N^{-\frac{3}{2}}$ positiv, der Leitkoeffizient $-500$ negativ. Daher

$$
c'(N)<0
$$

durchgängig im Definitionsbereich. Eine negative Ableitung bedeutet: die Stückkosten fallen weiter, wenn der kumulierte Output steigt.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Die Ableitung $c'(N)$ misst Euro Stückkosten, die man pro zusätzlicher Einheit kumulierten Outputs gewinnt (oder verliert). Bei $N=4$ beträgt diese Rate

$$
c'(4) = -\dfrac{125}{2}
$$

also senkt eine zusätzliche Einheit die Stückkosten um ungefähr $\dfrac{125}{2}$ Euro. Der Betrag der negativen Ableitung ist die Größe der Verringerung.

$$
N = 4
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Vergleiche die Beträge bei den beiden kumulierten Outputs:

$$
\dfrac{|c'(8)|}{|c'(4)|} = \dfrac{8^{-\frac{3}{2}}}{4^{-\frac{3}{2}}}
$$

$$
\dfrac{|c'(8)|}{|c'(4)|} = \dfrac{1}{2\sqrt{2}}\neq 2
$$

Weil $c'$ wie $N^{-\frac{3}{2}}$ skaliert, multipliziert eine Verdopplung von $N$ den Betrag mit $2^{-\frac{3}{2}}$, nicht mit $2$. Die Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
}
