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

# --- MATH 11.13 (overview_short True) ---
PATCH["MATH 11.13"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Grenzerlös ist die Ableitung der quadratischen Erlösregel $R(q)=50q-q^{2}$. Termweises Differenzieren liefert

$$
R'(q) = 50-2q
$$

das passt zur behaupteten Formel. Schreibe nicht nur $-2q$ und lasse die $50$ weg.

$$
R(q) = 50q-q^{2}
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze die genannte Menge $q=20$ in den Grenzerlös ein:

$$
R'(20) = 50-2\cdot 20
$$

$$
R'(20) = 50-40
$$

$$
50 - 40 = 10
$$

$$
R'(20) = 10 = 10
$$

$$
R'(20) = 10
$$

Eine Falle wäre $50-20=30$ ohne den Faktor $2$ bei $q$. Die korrekte Steigung ist $10$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Werte die Erlösfunktion selbst bei $q=20$ aus:

$$
R(20) = 50\cdot 20-20^{2}
$$

$$
R(20) = 1000-400
$$

$$
1000 - 400 = 600
$$

$$
R(20) = 600 = 600
$$

$$
R(20) = 600
$$

Das ist die Höhe auf der Kurve, nicht die Steigung. Die Höhe passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Mit dem Punkt $(20,600)$ und der Steigung $R'(20)=10$ liefert die Punkt-Steigungs-Form

$$
y-600 = 10(q-20)
$$

$$
y = 600+10(q-20)
$$

die behauptete Tangente. $600$ durch $R'(20)$ zu ersetzen würde die Gleichung zerstören.

$$
q = 20
$$

$$
R'(20) = 10
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die Steigung der Tangente bei $q=20$ ist der Ableitungswert

$$
R'(20) = 10>0
$$

also steigt die Tangente von links nach rechts, sie fällt nicht. Der Erlös nimmt bei $q=20$ noch zu, weil das Maximum $R'(q)=0$ erst später bei $q=25$ liegt.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
q = 20
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Tageserlös wird durch die konkave Quadratfunktion modelliert

$$R(q)=50q-q^{2}$$

Termweises Differenzieren liefert den Grenzerlös

$$R'(q)=50-2q$$

Bei der genannten Menge wertet man sowohl die Steigung als auch die Höhe auf der Kurve aus:

$$R'(20)=10\qquad R(20)=600$$

Die Punkt-Steigungs-Form baut dann die Tangente

$$y=600+10(q-20)$$

Insbesondere ist die Tangentensteigung bei $q=20$ die positive Zahl $10$, keine negative Steigung: das Erlösmaximum liegt bei $q=25$, daher liegt $q=20$ noch auf der steigenden Seite.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.14 ---
PATCH["MATH 11.14"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Zuverlässigkeitswert ist die verschachtelte fünfte Potenz $G(x)=(3x^{2}+4)^{5}$. Die Kettenregel multipliziert die äußere Potenz mit der inneren Ableitung $6x$:

Benenne die äußere Potenz und den inneren Ausdruck, dann multipliziere mit der inneren Ableitung, bevor du vereinfachst.

$$
G(x) = (3x^{2}+4)^{5}
$$

$$
\text{outer: }w^{5}\quad\text{with }w = 3x^{2}+4
$$

$$
\dfrac{d}{dx}(3x^{2}+4) = 6 x
$$

$$
G'(x) = 5(3x^{2}+4)^{4} \cdot (6 x)
$$

$$
G'(x) = 5(3x^{2}+4)^{4}\cdot 6x
$$

$$
G'(x) = 30x(3x^{2}+4)^{4}
$$

das passt zur behaupteten Formel. Die innere $6x$ zu vergessen ist hier die klassische Kettenregel-Falle. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Bei $x=1$ gilt $3x^{2}+4=7$ und $7^{4}=2401$, also

$$
G'(1) = 30\cdot 1\cdot 7^{4}
$$

$$
G'(1) = 30\cdot 2401
$$

$$
30\times 2401 = 72030
$$

$$
G'(1) = 72030
$$

Berechne nicht versehentlich $7^{5}$: die äußere Potenz ist bereits auf $4$ abgesenkt. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $G'(x)=30x(3x^{2}+4)^{4}$ erneut mit der Produktregel und klammere die gemeinsame Potenz $(3x^{2}+4)^{3}$ aus:

$$
G''(x) = 30(3x^{2}+4)^{3}(27x^{2}+4)
$$

Der Faktor $27x^{2}+4$ entsteht aus dem Zusammenfassen der beiden Produktregel-Stücke. Mit der behaupteten zweiten Ableitung:

$$
G'(x) = 30x(3x^{2}+4)^{4}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $x=0$ in die zweite Ableitung ein:

$$
G''(0) = 30\cdot 4^{3}\cdot 4
$$

$$
G''(0) = 30\cdot 64\cdot 4
$$

$$
30\times 64 = 1920
$$

$$
1920\times 4 = 7680
$$

$$
G''(0) = 7680
$$

Hier ist $3(0)^{2}+4=4$ und $27(0)^{2}+4=4$. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die erste Ableitung trägt einen expliziten Faktor $x$:

$$
G'(0) = 30\cdot 0\cdot 4^{4}
$$

$$
G'(0) = 0
$$

nicht $30$. Eine Falle ist, den Leitkoeffizienten $30$ abzulesen und das verschwindende $x$ zu ignorieren. Der Wert in der Behauptung ist falsch. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
G'(0) = 30
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
}

# --- MATH 11.15 ---
PATCH["MATH 11.15"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Grenzkosten sind die erste Ableitung des kubischen Kostenplans. Termweises Differenzieren liefert

$$
C'(q) = 12q^{2}-36q+40
$$

genau die behauptete Grenzkostenformel. Die Konstante $100$ verschwindet, wie Konstanten beim Differenzieren stets.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Differenziere das Grenzkostenpolynom noch einmal:

$$
C''(q) = 24q-36
$$

das passt zur behaupteten zweiten Ableitung. Sie misst, wie schnell sich die Grenzkosten selbst ändern. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $q=\dfrac{3}{2}$ in die zweite Ableitung ein:

$$
C''\!\left(\dfrac{3}{2}\right) = 24\cdot\dfrac{3}{2}-36
$$

$$
24\cdot\dfrac{3}{2}-36 = 36-36 = 0
$$

$$
36 - 36 = 0
$$

also verschwindet die zweite Ableitung dort. Das ist der natürliche Kandidat für einen Wendepunkt von $C$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Werte die zweite Ableitung bei $q=1$ aus:

$$
C''(1) = 24-36
$$

$$
24 - 36 = -12
$$

$$
C''(1) = -12 = -12
$$

$$
C''(1) = -12
$$

das ist negativ, nicht positiv. Das Vorzeichen in der Behauptung ist falsch: links von $q=\tfrac{3}{2}$ ist die Kostenkurve noch konkav nach unten. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Werte die zweite Ableitung bei $q=2$ aus:

$$
C''(2) = 48-36
$$

$$
48 - 36 = 12
$$

$$
C''(2) = 12 = 12
$$

$$
C''(2) = 12>0
$$

also ist die zweite Ableitung dort positiv. Rechts von der Nullstelle bei $q=\tfrac{3}{2}$ hat die Krümmung nach oben gewechselt.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.16 ---
PATCH["MATH 11.16"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Beschwerdeindex ist der Quotient $K(t)=\dfrac{t+4}{t+1}$. Die Quotientenregel vereinfacht sofort zu

$$
K(t) = \dfrac{t+4}{t+1}
$$

$$
u(t) = t+4
$$

$$
v(t) = t+1
$$

$$
u'(t) = 1
$$

$$
v'(t) = 1
$$

$$
K'(t) = \dfrac{(1)(t+1) - (t+4)(1)}{(t+1)^{2}}
$$

$$
K'(t) = \dfrac{(t+1)-(t+4)}{(t+1)^{2}}
$$

$$
K'(t) = -\dfrac{3}{(t+1)^{2}}
$$

Die Zählerdifferenz $1-4=-3$ ist die ganze Geschichte.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze die genannte Trainingszeit $t=2$ ein:

$$
K'(2) = -\dfrac{3}{(2+1)^{2}}
$$

$$
K'(2) = -\dfrac{3}{9}
$$

$$
K'(2) = -\dfrac{1}{3}
$$

Behalte das Minus: mehr Training senkt den Beschwerdeindex. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Für jedes $t>0$ ist der Zählerfaktor $-3$ negativ und der Nenner $(t+1)^{2}$ positiv, also

$$
K'(t)<0
$$

durchgängig. Eine negative Ableitung bedeutet: der Index fällt streng in der Trainingszeit.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Die Ableitung misst die momentane Indexänderung pro zusätzlicher Trainingsstunde. Bei $t=2$ beträgt diese Rate

$$
K'(2) = -\dfrac{1}{3}
$$

also ändert eine zusätzliche Stunde den Index um ungefähr $-\dfrac{1}{3}$. Die vorzeichenbehaftete Rate ist genau das, was die Behauptung berichtet.

$$
t = 2
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Richtig

Differenziere $K'(t)=-3(t+1)^{-2}$ noch einmal:

$$
K''(t) = (-3)\cdot(-2)(t+1)^{-3}
$$

$$
K''(t) = \dfrac{6}{(t+1)^{3}}
$$

das passt zur behaupteten zweiten Ableitung. Das positive Vorzeichen bedeutet: die Abnahme von $K$ wird mit wachsendem $t$ flacher. Vergleich mit der Behauptung:

$$
K'(t) = -3(t+1)^{-2}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
    ],
}

# --- MATH 11.17 (overview_short True) ---
PATCH["MATH 11.17"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Sicherheitswert ist die verschachtelte vierte Potenz $S(x)=(2x+5)^{4}$. Die Kettenregel multipliziert mit der inneren Steigung $2$:

Benenne die äußere Potenz und den inneren Ausdruck, dann multipliziere mit der inneren Ableitung, bevor du vereinfachst.

$$
S(x) = (2x+5)^{4}
$$

$$
\text{outer: }w^{4}\quad\text{with }w = 2x+5
$$

$$
\dfrac{d}{dx}(2x+5) = 2
$$

$$
S'(x) = 4(2x+5)^{3} \cdot (2)
$$

$$
S'(x) = 4(2x+5)^{3}\cdot 2
$$

$$
S'(x) = 8(2x+5)^{3}
$$

das passt zur behaupteten Formel. Die innere $2$ aus dem linearen Term zu vergessen ist die übliche Falle. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $x=0$ ein und nutze $2\cdot 0+5=5$:

$$
S'(0) = 8\cdot 5^{3}
$$

$$
S'(0) = 8\cdot 125
$$

$$
8\times 125 = 1000
$$

$$
S'(0) = 1000
$$

Verwechsle dies nicht mit $S(0)=5^{4}=625$. Der Ableitungswert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $S'(x)=8(2x+5)^{3}$ erneut, wieder multipliziert mit der inneren Steigung $2$:

$$
S''(x) = 8\cdot 3(2x+5)^{2}\cdot 2
$$

$$
S''(x) = 48(2x+5)^{2}
$$

das passt zur behaupteten zweiten Ableitung. Das Koeffizientenmuster $8\to 48$ ist konsistent mit $4\cdot 3\cdot 2^{2}$.

$$
S'(x) = 8(2x+5)^{3}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $x=0$ in die zweite Ableitung ein:

$$
S''(0) = 48\cdot 5^{2}
$$

$$
S''(0) = 48\cdot 25
$$

$$
48\times 25 = 1200
$$

$$
S''(0) = 1200
$$

Der berechnete Wert passt zur Behauptung. Behalte $5^{2}=25$, nicht $5^{3}$. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Richtig

Differenziere $S''(x)=48(2x+5)^{2}$ noch einmal:

$$
S'''(x) = 48\cdot 2(2x+5)\cdot 2
$$

$$
S'''(x) = 192(2x+5)
$$

das passt zur behaupteten dritten Ableitung. Noch ein Differenzieren würde die Konstante $384$ hinterlassen.

$$
S''(x) = 48(2x+5)^{2}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
    ],
    "solution_overview": T(
        r"""Der Verpackungs-Sicherheitswert ist die verschachtelte vierte Potenz

$$S(x)=(2x+5)^{4}$$

Wiederholte Kettenregel, stets multipliziert mit der inneren Steigung $2$, liefert

$$S'(x)=8(2x+5)^{3}\qquad S''(x)=48(2x+5)^{2}\qquad S'''(x)=192(2x+5)$$

Die Auswertung der ersten beiden Ableitungen am Ursprung gibt die konkreten Werte

$$S'(0)=8\cdot 5^{3}=1000\qquad S''(0)=48\cdot 25=1200$$

Jedes Differenzieren multipliziert sowohl mit der fallenden äußeren Potenz als auch mit der konstanten inneren Steigung $2$.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.18 (overview_short True) ---
PATCH["MATH 11.18"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Engagement-Index ist das Produkt $E(t)=t\cdot\ln(t+1)$. Wende die Produktregel an: differenziere $t$ und $\ln(t+1)$ der Reihe nach,

Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du zusammenfasst.

$$
E(t) = t \cdot \ln(t+1)
$$

$$
u(t) = t
$$

$$
v(t) = \ln{(t + 1 )}
$$

$$
u'(t) = 1
$$

$$
v'(t) = \frac{1}{t + 1}
$$

$$
E'(t) = (1)\cdot(\ln{(t + 1 )}) + (t)\cdot(\frac{1}{t + 1})
$$

Erst nach dieser Produktregel-Entwicklung vereinfachen wir zur behaupteten Form.

$$
E'(t) = \ln(t+1)+t\cdot\dfrac{1}{t+1}
$$

$$
E'(t) = \ln(t+1)+\dfrac{t}{t+1}
$$

das passt zur behaupteten Formel. Behalte beide Summanden: keiner allein ist die volle Ableitung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $t=1$ in die erste Ableitung ein:

$$
E'(1) = \ln(1+1)+\dfrac{1}{1+1}
$$

$$
E'(1) = \ln 2+\dfrac{1}{2}
$$

Ersetze $\dfrac{1}{2}$ nicht durch $1$. Der berechnete Wert passt zur Behauptung.

$$
t = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $E'(t)=\ln(t+1)+\dfrac{t}{t+1}$ erneut. Schreibe $\dfrac{t}{t+1}=1-\dfrac{1}{t+1}$ um und differenziere dann:

$$
E''(t) = \dfrac{1}{t+1}+\dfrac{1}{(t+1)^{2}}
$$

das passt zur behaupteten zweiten Ableitung.

$$
E'(t) = \ln(t+1)+\dfrac{t}{t+1}
$$

$$
\dfrac{t}{t+1} = 1-\dfrac{1}{t+1}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $t=1$ in die zweite Ableitung ein:

$$
E''(1) = \dfrac{1}{2}+\dfrac{1}{4}
$$

$$
E''(1) = \dfrac{3}{4}
$$

Die beiden positiven Beiträge addieren sich sauber. Der berechnete Wert passt zur Behauptung.

$$
t = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die korrekte Produktregel-Ableitung ist

$$
E'(t) = \ln(t+1)+\dfrac{t}{t+1}
$$

Den zweiten Summanden durch die Konstante $1$ zu ersetzen lässt den Faktor $\dfrac{t}{t+1}$ weg und erzeugt eine andere Funktion. Dieser Shortcut ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
E'(t) = \ln(t+1)+1
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Engagement-Index ist das Produkt

$$E(t)=t\cdot\ln(t+1)\qquad(t>0)$$

Die Produktregel liefert

$$E'(t)=\ln(t+1)+\dfrac{t}{t+1}$$

also $E'(1)=\ln 2+\dfrac{1}{2}$. Nochmaliges Differenzieren ergibt

$$E''(t)=\dfrac{1}{t+1}+\dfrac{1}{(t+1)^{2}}$$

und daher $E''(1)=\dfrac{3}{4}$. Der falsche Shortcut $E'(t)=\ln(t+1)+1$ lässt den Faktor $\dfrac{t}{t+1}$ weg: ein klassischer Produktregel-Fehler.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}


# --- MATH 11.19 (overview_short True) ---
PATCH["MATH 11.19"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Schreibe den Verarbeitungsindex um, indem du die Wurzel im Nenner in eine negative Potenz verwandelst:

$$
M(x) = \dfrac{x^{2}+1}{\sqrt{x+3}}
$$

$$
M(x) = (x^{2}+1)(x+3)^{-\frac{1}{2}}
$$

genau die in der Behauptung genannte Produktform. Diese Umschreibung bereitet die Produktregel sauber vor.

$$
M(x) = (x^{2}+1)\cdot (x+3)^{-\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Wende die Produktregel auf $M(x)=(x^{2}+1)(x+3)^{-\frac{1}{2}}$ an und fasse über einen Nenner zusammen. Die Zählerrechnung

$$
2x(x+3)-\tfrac{1}{2}(x^{2}+1) = \tfrac{1}{2}(3x^{2}+12x-1)
$$

liefert

$$
M'(x) = \dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}
$$

das passt zur behaupteten Formel.

$$
M(x) = (x^{2}+1)(x+3)^{-\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $x=1$ ein; beachte $x+3=4$ und $4^{\frac{3}{2}}=8$:

$$
M'(1) = \dfrac{3+12-1}{2\cdot 8}
$$

$$
M'(1) = \dfrac{14}{16}
$$

$$
M'(1) = \dfrac{7}{8}
$$

Zähler $14$ und Nenner $16$ kürzen sich durch $2$. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Die Auswertung bei $x=1$ hat bereits

$$
M'(1) = \dfrac{7}{8}
$$

geliefert, was nicht gleich $\dfrac{13}{8}$ ist. Eine Falle ist, den Zähler als $3+12+1=16$ oder $12-1=11$ falsch zu berechnen. Der Wert in der Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
M'(1) = \dfrac{13}{8}
$$

$$
x = 1
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Falsch

Die Ableitungsformel

$$
M'(x) = \dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}
$$

hängt noch in Zähler und Nenner von $x$ ab. Sie ist daher keine konstante Funktion. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Schreibe den Verarbeitungsindex als Potenzprodukt um:

$$M(x)=\dfrac{x^{2}+1}{\sqrt{x+3}}=(x^{2}+1)(x+3)^{-\frac{1}{2}}$$

Die Produktregel, über einen Nenner gebracht, liefert

$$M'(x)=\dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}$$

Bei $x=1$ wertet das zu

$$M'(1)=\dfrac{14}{2\cdot 8}=\dfrac{7}{8}$$

aus, nicht $\dfrac{13}{8}$. Die Ableitung hängt noch in Zähler und Nenner von $x$ ab, sie ist also keine Konstante.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.20 ---
PATCH["MATH 11.20"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Leistungsindex ist das Produkt $F(t)=(t^{2}+1)\ln(t+1)$. Wende die Produktregel an: differenziere die Quadratfunktion und den Logarithmus der Reihe nach,

Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du zusammenfasst.

$$
F(t) = (t^{2}+1) \cdot \ln(t+1)
$$

$$
u(t) = t^{2} + 1
$$

$$
v(t) = \ln{(t + 1 )}
$$

$$
u'(t) = 2 t
$$

$$
v'(t) = \frac{1}{t + 1}
$$

$$
F'(t) = (2 t)\cdot(\ln{(t + 1 )}) + (t^{2} + 1)\cdot(\frac{1}{t + 1})
$$

Erst nach dieser Produktregel-Entwicklung vereinfachen wir zur behaupteten Form.

$$
F'(t) = 2t\cdot\ln(t+1)+\dfrac{t^{2}+1}{t+1}
$$

das passt zur behaupteten Formel. Beide Summanden sind nötig.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $t=1$ in die erste Ableitung ein:

$$
F'(1) = 2\cdot 1\cdot\ln 2+\dfrac{1+1}{2}
$$

$$
F'(1) = 2\ln 2+1
$$

Der zweite Summand vereinfacht sich an dieser Stelle zu $1$, aber das ist speziell für $t=1$, keine allgemeine Regel.

$$
t = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $F'$ erneut: die Produktregel an $2t\ln(t+1)$ und die Quotientenregel an $\dfrac{t^{2}+1}{t+1}$ ordnen sich um zu

$$
F''(t) = 2\ln(t+1)+\dfrac{4t}{t+1}-\dfrac{t^{2}+1}{(t+1)^{2}}
$$

das passt zur behaupteten zweiten Ableitung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $t=1$ in die zweite Ableitung ein:

$$
F''(1) = 2\ln 2+\dfrac{4}{2}-\dfrac{2}{4}
$$

$$
F''(1) = 2\ln 2+2-\dfrac{1}{2}
$$

$$
F''(1) = 2\ln 2+\dfrac{3}{2}
$$

Achte auf die Arithmetik $2-\tfrac{1}{2}=\tfrac{3}{2}$. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die echte Produktregel-Ableitung ist

$$
F'(t) = 2t\cdot\ln(t+1)+\dfrac{t^{2}+1}{t+1}
$$

Den Logarithmus-Term wegzulassen erzeugt $2t+\dfrac{t^{2}+1}{t+1}$, dem der Summand $2t\ln(t+1)$ fehlt. Dieser Shortcut ist falsch.

$$
F'(t) = 2t+\dfrac{t^{2}+1}{t+1}
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
}

# --- MATH 11.21 (overview_short True) ---
PATCH["MATH 11.21"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Differenziere den kubischen Gewinnplan $\pi(q)=-q^{3}+12q^{2}-21q$ termweise:

$$
\pi'(q) = -3q^{2}+24q-21
$$

das passt zur behaupteten ersten Ableitung. Achte auf die Vorzeichen: der Leitterm liefert $-3q^{2}$, nicht $+3q^{2}$.

$$
\pi(q) = -q^{3}+12q^{2}-21q
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $q=1$ in die erste Ableitung ein:

$$
\pi'(1) = -3+24-21
$$

$$
-3 + 24 = 21
$$

$$
21 - 21 = 0
$$

$$
\pi'(1) = 0
$$

also verschwindet die Ableitung an dieser Menge. Die drei Terme heben sich genau auf: $-3+24=21$, dann $21-21=0$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere das erste Ableitungspolynom noch einmal:

$$
\pi''(q) = -6q+24
$$

das passt zur behaupteten zweiten Ableitung. Sie verfolgt, wie sich der Grenzgewinn selbst mit dem Output ändert. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Setze $q=3$ in die zweite Ableitung ein:

$$
\pi''(3) = -6\cdot 3+24
$$

$$
\pi''(3) = -18+24
$$

$$
-18 + 24 = 6
$$

$$
\pi''(3) = 6
$$

$$
\pi''(3) = 6\neq 0
$$

Die zweite Ableitung verschwindet bei $q=4$, nicht bei $q=3$. Die Auswertung in der Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Falsch

Die Tangentensteigung bei $q=1$ ist genau der erste Ableitungswert

$$
\pi'(1) = 0
$$

also null, nicht streng positiv. Eine horizontale Tangente ist keine streng steigende.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
q = 1
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Tagesgewinn folgt dem kubischen Plan

$$\pi(q)=-q^{3}+12q^{2}-21q$$

Ein- und zweifaches Differenzieren liefert die ersten beiden Ableitungen

$$\pi'(q)=-3q^{2}+24q-21\qquad \pi''(q)=-6q+24$$

An den genannten Stellen gelten die konkreten Werte

$$\pi'(1)=0\qquad \pi''(3)=6\neq 0$$

Insbesondere ist die Tangentensteigung bei $q=1$ genau null, diese Steigung ist also nicht streng positiv. Die Nullstelle der zweiten Ableitung würde $-6q+24=0$ lösen, also $q=4$, nicht $q=3$.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.22 (overview_short True) ---
PATCH["MATH 11.22"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Die Versandkosten sind der lineare Plan $C(q)=45+9q$. Ihre Ableitung ist die konstante Steigung

$$
C'(q) = 9
$$

genau die behaupteten konstanten Grenzkosten. Die Fixkosten $45$ verschwinden unter dem Differenzieren.

$$
C(q) = 45+9q
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Weil die Grenzkosten konstant $9$ sind, liefert jede besondere Menge (einschließlich $q=20$) denselben Wert

$$
C'(20) = 9
$$

An $q=20$ ist für eine konstante Ableitung nichts Besonderes.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Falsch

Stückkosten sind der separate Quotient

$$
\dfrac{C(q)}{q} = \dfrac{45}{q}+9
$$

der den konstanten Grenzkosten $9$ nur im Grenzfall $q\to\infty$ gleicht, nicht für jedes endliche $q>0$. Der Fixkostenbeitrag $\dfrac{45}{q}$ hält sie auseinander. Die Identifikation in der Behauptung ist falsch.

Die Aussage ist falsch."""
        ),
        T(
            r"""**D.** → Richtig

Eine lineare Funktion ist bereits ihre eigene Tangente. Mit Steigung $9$ und Achsenabschnitt $45$ ist die Tangente bei $q=10$ (und an jedem anderen $q$) einfach

$$
y = 45+9q
$$

das passt zur Behauptung. Die Punkt-Steigungs-Form mit $C(10)=135$ liefert dieselbe Gerade.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Richtig

Differenzieren der konstanten Grenzkosten noch einmal liefert

$$
C''(q) = 0
$$

für jedes $q$. Ein linearer Kostenplan hat überall Krümmung null.

Die Aussage ist wahr."""
        ),
    ],
    "solution_overview": T(
        r"""Die Versandkosten folgen dem linearen Plan

$$C(q)=45+9q$$

Ihre Ableitungen sind die Konstanten

$$C'(q)=9\qquad C''(q)=0$$

also sind die Grenzkosten an jeder Menge $9$, einschließlich $q=20$. Stückkosten sind der separate Quotient

$$\dfrac{C(q)}{q}=\dfrac{45}{q}+9$$

der den Grenzkosten nur im Grenzfall $q\to\infty$ gleicht, nicht für jedes endliche $q>0$. Weil $C$ bereits linear mit Steigung $9$ ist, ist die Tangente an jedem Punkt (insbesondere bei $q=10$) die Gerade $y=45+9q$ selbst.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.23 (overview_short True) ---
PATCH["MATH 11.23"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Wende die Potenzregel auf $Q(L)=4L^{\frac{5}{2}}$ an: multipliziere mit $\tfrac{5}{2}$ und senke den Exponenten:

$$
Q'(L) = 4\cdot\dfrac{5}{2}L^{\frac{3}{2}}
$$

$$
Q'(L) = 10L^{\frac{3}{2}}
$$

das passt zum behaupteten Grenzprodukt. Lasse den Exponenten nicht bei $\tfrac{5}{2}$.

$$
Q(L) = 4L^{\frac{5}{2}}
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $L=1$ in die Grenzprodukt-Regel ein:

$$
Q'(1) = 10\cdot 1^{\frac{3}{2}}
$$

$$
Q'(1) = 10
$$

Jede positive Potenz von $1$ bleibt $1$, daher ist die Auswertung unmittelbar.

$$
L = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $L=4$ ein und nutze $4^{\frac{3}{2}}=(\sqrt{4})^{3}=2^{3}=8$:

$$
Q'(4) = 10\cdot 8
$$

$$
10\times 8 = 80
$$

$$
Q'(4) = 80
$$

Eine Falle wäre $4^{\frac{5}{2}}=32$ (das originale $Q$) statt $4^{\frac{3}{2}}=8$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Differenziere das Grenzprodukt noch einmal:

$$
Q''(L) = 10\cdot\dfrac{3}{2}L^{\frac{1}{2}}
$$

$$
Q''(L) = 15L^{\frac{1}{2}}
$$

das passt zur behaupteten zweiten Ableitung. Der positive Koeffizient zeigt: das Grenzprodukt steigt selbst noch.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Weil der Exponent $\dfrac{3}{2}$ positiv ist,

$$
Q'(L) = 10L^{\frac{3}{2}}
$$

steigt mit $L$. Der Vergleich $Q'(1)=10$ mit $Q'(4)=80$ bestätigt den Anstieg. Die Behauptung, es falle, ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Output folgt der Fünf-Halbe-Produktionsregel

$$Q(L)=4L^{\frac{5}{2}}\qquad(L>0)$$

Zwei Anwendungen der Potenzregel liefern

$$Q'(L)=10L^{\frac{3}{2}}\qquad Q''(L)=15L^{\frac{1}{2}}$$

Die Auswertung des Grenzprodukts ergibt

$$Q'(1)=10\qquad Q'(4)=10\cdot 8=80$$

Weil der Exponent $\dfrac{3}{2}$ positiv ist, steigt $Q'(L)$ mit $L$ statt zu fallen: hier wachsendes (nicht abnehmendes) Grenzprodukt bei der gegebenen Potenz.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.24 ---
PATCH["MATH 11.24"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Erlös ist Preis mal verkaufte Tickets. Expandiere mit dem linearen Tarif:

$$
R(q) = q\cdot\Bigl(60-\dfrac{1}{2}q\Bigr)
$$

$$
R(q) = 60q-\dfrac{1}{2}q^{2}
$$

das passt zur behaupteten Erlösfunktion. Behalte den Koeffizienten $\tfrac{1}{2}$ bei $q^{2}$, nicht $1$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Differenziere die Erlös-Quadratfunktion termweise:

$$
R'(q) = 60-q
$$

das passt zum behaupteten Grenzerlös. Die Ableitung von $-\tfrac{1}{2}q^{2}$ ist $-q$, nicht $-\tfrac{1}{2}q$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $q=20$ in den Grenzerlös ein:

$$
R'(20) = 60-20
$$

$$
60 - 20 = 40
$$

$$
R'(20) = 40 = 40
$$

$$
R'(20) = 40
$$

Der berechnete Wert passt zur Behauptung. Verwechsle dies nicht mit $p(20)=50$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Grenzerlös ist $R'(q)=60-q$, während der Tarif

$$
p(q) = 60-\dfrac{1}{2}q
$$

ist. Sie unterscheiden sich um den Faktor bei $q$: $R'$ fällt doppelt so steil wie $p$. Sie gleichzusetzen vergisst, dass der Erlös das Produkt $q\,p(q)$ ist. Die Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
R'(q) = p(q)
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Zuerst Höhe und Steigung bei $q=20$ auswerten:

$$
R(20) = 60\cdot 20-\dfrac{1}{2}\cdot 400 = 1000
$$

$$
R'(20) = 40
$$

Die Punkt-Steigungs-Form liefert dann die Tangente

$$
y = 1000+40(q-20)
$$

genau wie behauptet.

Die Aussage ist wahr."""
        ),
    ],
}


def extract_katex_tokens(text: str) -> list[str]:
    """Extract $...$ and $$...$$ segments in order (non-greedy)."""
    tokens = []
    i = 0
    while i < len(text):
        if text.startswith("$$", i):
            j = text.find("$$", i + 2)
            if j < 0:
                break
            tokens.append(text[i : j + 2])
            i = j + 2
        elif text[i] == "$":
            j = text.find("$", i + 1)
            if j < 0:
                break
            tokens.append(text[i : j + 1])
            i = j + 1
        else:
            i += 1
    return tokens


def katex_ok(en: str, de: str) -> bool:
    return extract_katex_tokens(en) == extract_katex_tokens(de)


def main() -> None:
    pack = json.loads(SRC_PACK.read_text(encoding="utf-8"))
    live = json.loads(LIVE.read_text(encoding="utf-8"))
    done_rows = []
    errors: list[str] = []
    patched = 0

    for case in pack:
        cid = case["case_id"]
        if cid not in PATCH:
            errors.append(f"missing PATCH for {cid}")
            continue
        row = PATCH[cid]
        expl = row["tactical_explanations"]
        key = case["answer_key"]
        en_expl = case["tactical_explanations_en"]

        if len(expl) != 5:
            errors.append(f"{cid}: need 5 explanations")
            continue

        for i, e in enumerate(expl):
            if "—" in e:
                errors.append(f"{cid} {chr(65+i)}: em dash")
            m = CLOSER.search(e.strip())
            if not m:
                errors.append(f"{cid} {chr(65+i)}: missing closer")
            else:
                want = "wahr" if key[i] else "falsch"
                if m.group(1).lower() != want:
                    errors.append(f"{cid} {chr(65+i)}: closer/key mismatch")
            # English leftovers (rough)
            for bad in ("So the statement", "True", "False", "which matches the claim", "Rephrasing"):
                if bad in e and bad not in ("True", "False"):
                    # True/False only bad outside Richtig/Falsch headers - already DE
                    pass
            if re.search(r"\b(So the statement|which matches the claim|Rephrasing the claim)\b", e):
                errors.append(f"{cid} {chr(65+i)}: English leftover")
            if not katex_ok(en_expl[i], e):
                en_tok = extract_katex_tokens(en_expl[i])
                de_tok = extract_katex_tokens(e)
                # report first mismatch
                for a, b in zip(en_tok, de_tok):
                    if a != b:
                        errors.append(f"{cid} {chr(65+i)}: KaTeX mismatch: EN={a[:60]!r} DE={b[:60]!r}")
                        break
                else:
                    if len(en_tok) != len(de_tok):
                        errors.append(
                            f"{cid} {chr(65+i)}: KaTeX count EN={len(en_tok)} DE={len(de_tok)}"
                        )

        if cid not in live:
            errors.append(f"{cid}: not in live file")
            continue

        live[cid]["tactical_explanations"] = [e.rstrip("\n") for e in expl]
        out_row = {
            "case_id": cid,
            "answer_key": key,
            "tactical_explanations": [e.rstrip("\n") for e in expl],
        }

        if case.get("solution_overview_short"):
            ov = row.get("solution_overview")
            if not ov:
                errors.append(f"{cid}: missing solution_overview")
            else:
                if "—" in ov:
                    errors.append(f"{cid}: overview em dash")
                live[cid]["solution_overview"] = ov.rstrip("\n")
                out_row["solution_overview"] = ov.rstrip("\n")
                en_ov = case.get("solution_overview_en") or ""
                if en_ov and not katex_ok(en_ov, ov):
                    errors.append(f"{cid}: overview KaTeX mismatch")

        done_rows.append(out_row)
        patched += 1

    if errors:
        print("ISSUES:")
        for e in errors[:80]:
            print(" ", e)
        if len(errors) > 80:
            print(f"  ... {len(errors)-80} more")
        raise SystemExit(1)

    DONE_PACK.parent.mkdir(parents=True, exist_ok=True)
    DONE_PACK.write_text(json.dumps(done_rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    LIVE.write_text(json.dumps(live, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"patched {patched} case_ids in {LIVE.name}")
    print(f"wrote {DONE_PACK}")


if __name__ == "__main__":
    main()
