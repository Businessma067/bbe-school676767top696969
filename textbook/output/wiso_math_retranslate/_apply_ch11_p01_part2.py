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
