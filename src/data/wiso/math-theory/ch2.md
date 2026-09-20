# Kapitel 2 — Elementare Algebra

Elementare Algebra ist die Sprache fast jedes späteren Kapitels der BBE-Mathematikprüfung. Bevor Sie über Gleichungen, Ungleichungen, Funktionen oder Optimierung sprechen können, müssen Sie in der Lage sein, Befugnisse zu erweitern, zu faktorisieren, zu annullieren, umzuschreiben und absolute Werte zu verarbeiten, ohne zu ändern, was ein Ausdruck bedeutet.

Dieses Kapitel beginnt mit den grundlegenden Identitäten und baut die genauen Fähigkeiten des Kapitels 2 Wahr/Falsch-Aufgabentests auf. Die Prüfung fordert Sie selten auf, Zahlen einzufügen. Es fordert Sie auf zu entscheiden, ob eine symbolische Identität für jeden erlaubten Wert gilt und ob eine Vereinfachung die ursprüngliche Domäne behält.

## Lernziele

- Erweitern Sie Produkte und Quadrate unter Verwendung des Verteilungsgesetzes und der standardmäßigen quadratischen Identitäten.
- Faktorunterschiede von Quadraten, Summen und Differenzen von Würfeln und Gemeinsam-Faktor-Gruppierungen.
Addieren, subtrahieren, multiplizieren und teilen Sie rationale Ausdrücke, wobei Sie jeden ausgeschlossenen Wert im Auge behalten.
Wenden Sie die Gesetze der Exponenten für positive, negative und gebrochene Mächte an.
- Schreiben Sie Wurzeln als fraktionierte Befugnisse um und vereinfachen Sie verschachtelte Wurzeln auf der erlaubten Domain.
Verwenden Sie Absolutwertdefinitionen, Entfernungsbedeutung und Gleichungen oder Ungleichungen mit $|\,{\cdot}\,|$ .
- Entdecken Sie die gängigen falschen "Identitäten", die vertraut aussehen, aber für einige reelle Zahlen scheitern.
- Entscheiden Sie die Wahrheit/Falsch-Prüfungen Behauptungen, indem Sie beide Seiten umschreiben und Domains überprüfen, nicht indem Sie von einem Slogan raten.

---

## 2.1 Erweiterung, Factoring und Identitäten

### Was eine Identität ist

Eine **Identität** ist eine Gleichheit, die für jeden Wert in der angegebenen Domäne gilt. Auf der Prüfung, eine Behauptung wie

$$
(a+b)^2 = a^2 + 2ab + b^2
$$

ist Wahr, weil beide Seiten für jedes reale Paar $(a,b)$ übereinstimmen. Eine Behauptung wie

$$
(a+b)^2 = a^2 + b^2
$$

Falsch ist, weil es bereits versagt, wenn $a=1$ und $b=1$ .

Die Prüfung liebt Aussagen, die fast richtig aussehen. Ihre Aufgabe ist es, sorgfältig zu erweitern oder zu faktorisieren und zu sehen, ob die beiden Seiten das gleiche Polynom (oder der gleiche Ausdruck in der angegebenen Domäne) sind.

### Das Verteilungsrecht

Für alle reellen Zahlen $a$ , $b$ , und $c$ ,

$$
a(b+c) = ab + ac.
$$

mit zwei Klammern,

$$
(a+b)(c+d) = ac + ad + bc + bd.
$$

Ein nützlicher Spezialfall ist das Muster „Summe mal Differenz:

$$
(a+b)(c+d) + (a+b)(e+f) = (a+b)\bigl((c+d)+(e+f)\bigr),
$$

Aber die sauberere alltägliche Gruppierung, die Sie treffen, ist

$$
uw + uz + vw + vz = (u+v)(w+z).
$$

**Beispiel 1.** Expand $(x+3)(x-5)$ .

$$
(x+3)(x-5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15.
$$

### Quadrate von Summen und Differenzen

$$
(a+b)^2 = a^2 + 2ab + b^2,
$$

$$
(a-b)^2 = a^2 - 2ab + b^2.
$$

Der mittlere Begriff $2ab$ (oder $-2ab$ ) ist derjenige, den die Schüler fallen lassen. Aus diesem Grund

$$
(m+n)^2 = m^2 + n^2
$$

ist eine klassische Falsche Behauptung.

Also watch scalar multiples:

$$
(2t)^2 = 4t^2,
$$

nicht $2t^2$ . Das Quadrat gilt für das gesamte Produkt $2t$ .

**Beispiel 2.** Expand $(3x-1)^2$ .

$$
(3x-1)^2 = 9x^2 - 6x + 1.
$$

### Differenz der Quadrate

$$
a^2 - b^2 = (a-b)(a+b).
$$

Dies ist eines der nützlichsten Factoring-Tools für die Prüfung. Es erklärt auch, warum, für $a\neq b$

$$
\frac{a^2-b^2}{a-b} = a+b
$$

ist Wahr: Sie kündigen den gemeinsamen Faktor $a-b$ , und die verbleibende Domäne schließt $a=b$ noch aus.

### Cubes

$$
a^3 - b^3 = (a-b)(a^2 + ab + b^2),
$$

$$
a^3 + b^3 = (a+b)(a^2 - ab + b^2).
$$

Eine verwandte Identität mit Summe und Produkt ist

$$
p^3 + q^3 = (p+q)^3 - 3pq(p+q).
$$

Wenn $p+q=s$ und $pq=r$ dann

$$
p^3 + q^3 = s^3 - 3rs.
$$

Prüfungsfallen ersetzen oft $3rs$ durch $3r$ oder $3s$ . Überprüfen Sie die Formel Buchstabe für Buchstabe.

### Ein Quadrat ausfüllen und ein Quadrat erkennen

Manchmal ist ein Ausdruck bereits ein Quadrat in Verkleidung:

$$
x^4 + 2x^2 y^2 + y^4 = (x^2 + y^2)^2.
$$

Likewise,

$$
w^2 - 8w + 16 = (w-4)^2.
$$

Das Erkennen des Quadrats macht die späteren Absolutwert- und Wurzelschritte viel einfacher.

### Factoring by grouping

Wenn vier Begriffe Faktoren in Paaren teilen, gruppieren Sie sie:

$$
x^3 + 3x^2 - x - 3 = x^2(x+3) - 1(x+3) = (x^2-1)(x+3) = (x-1)(x+1)(x+3).
$$

Überprüfen Sie immer, ob das gemeinsame Binom wirklich üblich ist, bevor Sie es ausklammern.

### Wie man eine 2.1 Wahr/Falsch Behauptung beurteilt

1. Schreibe die geforderte Gleichheit auf.
2. Erweitern Sie die kompliziertere Seite oder Faktor beide Seiten in die gleiche Form.
3. Vergleichen Sie Koeffizienten (oder vergleiche, nachdem Sie alles zur Seite gebracht haben).
4. Wenn die Behauptung sagt „für jedes reale ..., ist ein Gegenspiel genug, um es falsch zu machen.
5. Wenn es eine Identität ist, zeigen Sie die Algebra, die beweist, dass beide Seiten übereinstimmen.

**Beispiel 3.** Ist $(h+k)^2 = h^2 + k^2$ Wahr für jedes echte Paar $(h,k)$ ?

Nein. Nehmen Sie $h=1$ , $k=1$ . Linke Seite $4$ , rechte Seite $2$ . Die Behauptung ist falsch.

---

## 2.2 Rationale Ausdrücke und algebraische Brüche

### Domain comes first

Ein **rationaler Ausdruck** ist ein Quotient von Polynomen (oder allgemeiner ein algebraischer Bruchteil). Sie ist nur dort definiert, wo der Nenner nicht Null ist.

Bevor Sie etwas vereinfachen, listen Sie die ausgeschlossenen Werte auf. Nachdem Sie abbrechen, gehören diese Ausschlüsse immer noch zum ursprünglichen Ausdruck.

**Beispiel 4.** Überlegen

$$
R(x) = \frac{x^2-16}{x-4}.
$$

Die ursprüngliche Domäne schließt $x=4$ aus. In diesem Bereich,

$$
R(x) = \frac{(x-4)(x+4)}{x-4} = x+4.
$$

So ist die Behauptung " $R(x)=x+4$ auf seiner Domäne" wahr, während " $R(4)=8$ " falsch ist, weil $R(4)$ nicht definiert ist.

### Addition und Subtraktion von Fraktionen

mit ungleichen Nennern $a$ und $b$

$$
\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab}.
$$

More generally,

$$
\frac{p}{q} + \frac{r}{s} = \frac{ps + qr}{qs},
$$

wenn $q,s\neq 0$ .

Eine häufige falsche Behauptung ist

$$
\frac{1}{m} + \frac{1}{n} = \frac{1}{m+n}.
$$

Das würde sagen, dass die Summe der Reziproken gleich der Reziproke der Summe ist, was falsch ist.

Eine andere Falle benutzt den falschen gemeinsamen Nenner:

$$
\frac{8}{c} + \frac{3}{d} = \frac{8d + 3c}{cd},
$$

nicht $\dfrac{8d+3c}{c+d}$ .

### Multiplikation und Division

$$
\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD},
$$

$$
\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{AD}{BC},
$$

Vorausgesetzt, jeder Nenner ist ungleich Null.

Faktor zuerst, dann gemeinsame Faktoren abbrechen. Stornieren Sie keine Begriffe über ein Pluszeichen.

### Teilweise Stornierung und übrig gebliebene Faktoren

Nach dem Abbrechen, prüfen Sie, was bleibt.

**Beispiel 5.** Für $t\neq -3$ und $t\neq 2$

$$
\frac{t^2-4}{t+3} \cdot \frac{t^2-9}{t-2}
= \frac{(t-2)(t+2)}{t+3} \cdot \frac{(t-3)(t+3)}{t-2}
= (t+2)(t-3).
$$

Eine falsche Geschwisteraussage könnte ein zusätzliches $(t+3)$ behalten oder ein Zeichen in $(t-3)$ fallen lassen.

### Compound (stacked) fractions

A stacked fraction

$$
\frac{\dfrac{A}{B}}{\dfrac{C}{D}}
$$

bedeutet $\dfrac{A}{B}\div\dfrac{C}{D}$ . Schreiben Sie es als Produkt um, bevor Sie es vereinfachen.

**Beispiel 6.** Für $x\neq\pm 2$ und $a,b\neq 0$

$$
\frac{\dfrac{8a^2 b}{4x^2-16}}{\dfrac{4ab}{2x+4}}
= \frac{8a^2 b}{4(x-2)(x+2)} \cdot \frac{2(x+2)}{4ab}
= \frac{a}{x-2},
$$

Nach sorgfältiger Absage. Eine Behauptung, dass das Ergebnis $\dfrac{a}{x+2}$ ist, ist Falsch.

### Differenz der gegenseitigen Quadrate

Für $hk\neq 0$

$$
\frac{1}{h^2} - \frac{1}{k^2} = \frac{k^2 - h^2}{h^2 k^2}.
$$

### Wie man eine 2.2 Behauptung beurteilt

1. Schreiben Sie die Domainausschlüsse von jedem Nenner.
2. Faktorzähler und Nenner.
3. Stornieren Sie nur gemeinsame Faktoren, niemals Summanden.
4. Das vereinfachte Formblatt mit dem beanspruchten Formblatt vergleichen.
5. Fragen Sie, ob die beanspruchte Gleichheit noch die ursprüngliche Domäne respektiert (insbesondere bei annullierten Wurzeln).

---

## 2.3 Mächte, Wurzeln und negative Exponenten

### Integer exponent laws

Für eine Nicht-Null-Basis $a$ und ganze Zahlen $m$ , $n$ ,

$$
a^m \cdot a^n = a^{m+n},
$$

$$
\frac{a^m}{a^n} = a^{m-n},
$$

$$
(a^m)^n = a^{mn}.
$$

Der häufigste Schlupf ist das Hinzufügen statt Multiplikation für eine Potenz einer Potenz:

$$
(u^3)^4 = u^{12},
$$

nicht $u^7$ .

Ein weiterer Ausrutscher ist der falsche Umgang mit einem Quotienten von Befugnissen:

$$
\frac{t^4}{t^2} = t^2,
$$

nicht $t^3$ .

### Negative exponents

Für $a\neq 0$

$$
a^{-n} = \frac{1}{a^n}.
$$

Produkte und Quotienten verwenden immer noch die gleichen Gesetze:

$$
\frac{u^{-2}}{u^3} = u^{-2-3} = u^{-5} = \frac{1}{u^5}.
$$

Eine falsche Behauptung könnte sagen, dass dies gleich $u^{1}$ ist.

### Fractional powers und Wurzeln

Für $x>0$ (und sorgfältig auf breiteren Domänen, wenn die Wurzel ungerade ist),

$$
x^{1/2} = \sqrt{x}, \qquad x^{m/n} = \sqrt[n]{x^m} = \bigl(\sqrt[n]{x}\bigr)^m
$$

wenn die Ausdrücke definiert sind.

Nützliche Produkt- und Quotientenregeln für nicht negative $p$ , $q$ sind

$$
\sqrt{p}\cdot\sqrt{q} = \sqrt{pq},
$$

$$
\frac{\sqrt{p}}{\sqrt{q}} = \sqrt{\frac{p}{q}} \quad (q>0).
$$

Der falsche Bruder

$$
\sqrt{p}\cdot\sqrt{q} = \sqrt{p+q}
$$

ist bei der Prüfung sehr verbreitet.

### Nested roots

$$
\sqrt{\sqrt{u}} = (u^{1/2})^{1/2} = u^{1/4}
$$

für $u\ge 0$ . Es ist nicht $\dfrac{u^{1/2}}{2}$ .

Also,

$$
\sqrt{x^3} = x^{3/2}
$$

für $x>0$ .

### Combining fractional exponents

$$
u^{2/3} \cdot u^{1/3} = u^{1}
$$

für $u>0$ . Fügen Sie die Exponenten nur hinzu, wenn die Basen übereinstimmen.

### Wie man eine 2.3 Behauptung beurteilt

1. Überprüfen Sie die angegebene Domain (oft $x>0$ , oder $u\neq 0$ ).
2. Schreibe Wurzeln als Bruchkräfte um, wenn dies die Algebra klärt.
3. Ein Gesetz auf einmal anwenden: Produkt, Quotient oder Macht einer Macht.
4. Vergleichen Sie die resultierende einzelne Macht (oder Wurzel) mit der Behauptung.
5. Lehnen Sie jeden Slogan ab, der die Addition von Basen mit der Multiplikation von Wurzeln vermischt.

**Beispiel 7.** Ist $\sqrt{p}\cdot\sqrt{q}=\sqrt{p+q}$ Wahr für alle $p,q\ge 0$ ?

No. Take $p=q=1$ . Left side $1$ , right side $\sqrt{2}$ . Falsch.

---

## 2.4 Absoluter Wert und algebraisches Umschreiben

### Definition

Für eine reelle Zahl $x$

$$
|x| =
\begin{cases}
x, & \text{if } x\ge 0,\\
-x, & \text{if } x<0.
\end{cases}
$$

Immediate consequences:

 $$
|x| \ge 0 \quad \text{for every real } x,
$$

$$
|x|=0 \iff x=0,
$$

$$
|-x| = |x|.
$$

Die Behauptung $|x|=-x$ für jedes reale $x$ ist falsch, weil sie für positive $x$ fehlschlägt.

### Abstand auf der Strecke

Die Zahl $|a-b|$ ist der Abstand zwischen $a$ und $b$ auf der reellen Linie.

Wenn ein Punkt zwischen $x$ und $6$ liegt, dann

$$
|x-1| + |x-6| = 5,
$$

die Länge dieses Segments. Außerhalb des Segments ist die Summe größer. Eine Behauptung, dass $|a-1|+|a-7|=6$ für jedes reale $a$ falsch ist.

### Produkt- und Skalarregeln

$$
|xy| = |x|\,|y|,
$$

$$
|cx| = |c|\,|x|.
$$

Falsche Slogans zur Ablehnung:

$$
|z+h| = |z| + |h|
$$

(Dies ist keine Identität; es scheitert, wenn $z$ und $h$ entgegengesetzte Zeichen haben),

$$
|4n| = |n| + 4.
$$

### Quadratwurzeln

Für jeden realen $w$

$$
\sqrt{w^2} = |w|.
$$

Nach Abschluss eines Quadrats,

$$
\sqrt{(w-4)^2} = |w-4|.
$$

Den absoluten Wert fallen zu lassen und $w-4$ für jedes reelle $w$ zu schreiben, ist falsch.

### Absolutwert-Gleichungen

Die Gleichung $|A|=c$ mit $c>0$ teilt sich in zwei gewöhnliche Gleichungen:

 $$
A = c \quad \text{or} \quad A = -c.
$$

Wenn $c=0$ , dann $A=0$ . Wenn $c<0$ , gibt es keine wirkliche Lösung.

**Beispiel 8.** Löse $|2u-5|=7$ .

 $$
2u-5 = 7 \quad \text{or} \quad 2u-5 = -7,
$$

Also $u=6$ oder $u=-1$ . Eine Behauptung, die nur $u=6$ auflistet, ist Falsch.

### Absolute Wertgleichungen

Für $c>0$

$$
|A| < c \iff -c < A < c,
$$

 $$
|A| > c \iff A < -c \text{ or } A > c.
$$

**Beispiel 9.** $|u-3|<5$ means $-2 < u < 8$ .

### Wie man eine 2.4 Behauptung beurteilt

1. Übersetzen Sie absolute Werte in Entfernungen oder in stückweise Definitionen.
2. Für Gleichungen, aufgeteilt in die beiden signierten Fälle, wenn die rechte Seite positiv ist.
3. Für Ungleichungen, umschreiben als zusammengesetzte Ungleichheit oder eine Vereinigung von Strahlen.
4. Testen Sie Slogans wie $|x+y|=|x|+|y|$ mit entgegengesetzten Zeichen.
5. Behalten Sie nach $\sqrt{(\text{expression})^2}$ den absoluten Wert, es sei denn, das Innere ist nicht negativ bekannt.

---

## 2.5 Gemischte Prüfungsmengen und BBE-artige Wahr/Falsch-Strategie

Unterabschnitt 2.5 mischt die früheren Fähigkeiten in einer Aufgabe. Ein Stamm kann Summe und Produkt von zwei Unbekannten oder zwei verwandten rationalen Ausdrücken geben und dann fünf unabhängige Behauptungen fragen.

### Arbeiten aus symmetrischen Daten

Wenn Sie $a+b=s$ und $ab=r$ kennen, benötigen Sie oft nicht die separaten Werte auf einmal:

$$
a^2 + b^2 = (a+b)^2 - 2ab = s^2 - 2r,
$$

$$
(a-b)^2 = (a+b)^2 - 4ab = s^2 - 4r,
$$

$$
a^3 + b^3 = s^3 - 3rs,
$$

$$
\frac{1}{a} + \frac{1}{b} = \frac{a+b}{ab} = \frac{s}{r}.
$$

**Beispiel 10.** Angenommen, $a+b=11$ und $ab=18$ .

Dann

$$
a^2 + b^2 = 121 - 36 = 85,
$$

$$
(a-b)^2 = 121 - 72 = 49,
$$

$$
\frac{1}{a} + \frac{1}{b} = \frac{11}{18}.
$$

Die Behauptung $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{18}{11}$ ist Falsch (Zähler und Nenner ausgetauscht). Lösen der quadratischen $t^2 - 11t + 18=0$ ergibt $\{a,b\}=\{2,9\}$ .

### Beibehaltung von Domains nach Vereinfachung

Whenever a task simplifies a rational expression, ask:

- Welche Werte wurden zu Beginn ausgeschlossen?
Dissensationen, die nicht von uns bekannt sind.
- Kann eine spätere Behauptung den Ausdruck an einer abgebrochenen Wurzel auswerten?

Wenn die vereinfachte Formel $x+4$ ist, aber der ursprüngliche Ausdruck $x=4$ ausgeschlossen ist, ist das Ersetzen von $x=4$ illegal.

### Independent claims

Bei den BBE-Algebraaufgaben sind die fünf Aussagen A–E getrennt. Eine wahre Behauptung macht die nächste nicht wahr. Beurteilen Sie jede Zeile nach ihrer eigenen Algebra und ihrem eigenen Domänensatz.

### Worked Wahr/Falsch walkthroughs

**Beispiel 11.** Stamm: Lasst $x$ und $y$ real sein. Behauptung: $(x+y)^2 = x^2 + y^2$ .

Erweitern Sie die linke Seite:

$$
(x+y)^2 = x^2 + 2xy + y^2.
$$

Dies entspricht $x^2+y^2$ nur wenn $2xy=0$ . Es scheitert an $x=y=1$ . Urteil: **Falsch**.

**Beispiel 12.** Stamm: $x\neq 4$ . Behauptung: $\dfrac{x^2-16}{x-4} = x+4$ , und auch die zusätzliche Behauptung $R(4)=8$ für $R(x)=\dfrac{x^2-16}{x-4}$ .

Factor and cancel auf der angegebenen Domain:

$$
\frac{(x-4)(x+4)}{x-4} = x+4 \quad (x\neq 4).
$$

Die Identität auf der Domain ist **Wahr**. Die Auswertung bei $x=4$ ist **Falsch**, weil $R(4)$ undefiniert ist.

**Beispiel 13.** Stem: $u\neq 0$ . Behauptung: $(u^3)^4 = u^7$ .

Macht einer Macht multipliziert Exponenten:

$$
(u^3)^4 = u^{12}.
$$

Also ist $u^7$ falsch. Urteil: **Falsch**.

**Beispiel 14.** Stem: every real $w$ . Behauptung: $\sqrt{(w-4)^2} = w-4$ .

Die Identität ist

$$
\sqrt{(w-4)^2} = |w-4|.
$$

Wenn $w=1$ , links $3$ , rechts $-3$ . Urteil: **Falsch**.

**Beispiel 15.** Stem: $a+b=11$ , $ab=18$ . Behauptung: $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{18}{11}$ .

$$
\frac{1}{a}+\frac{1}{b} = \frac{a+b}{ab} = \frac{11}{18}.
$$

Die beanspruchte Fraktion steht auf dem Kopf. Urteil: **Falsch**.

### A reliable exam order

1. Lesen Sie den Domain-Menge im Stamm ("nonzero", "positiv", " $x\neq 4$ " usw.).
2. Schreibe jede Behauptung in eine klare Gleichheit oder Ungleichheit um.
3. Erweitern, faktorisieren oder wenden Sie die Übereinstimmungsregel / Absolutwertregel an.
4. Vergleichen Sie beide Seiten oder testen Sie ein billiges Gegenspiel, wenn die Behauptung wie ein Slogan aussieht.
5. Nur dann markieren Wahr oder Falsch.

### Frequent Falsch slogans (checklist)

Slogan Warum es scheitert
| --- | ---
| $(a+b)^2 = a^2 + b^2$ | Fehlende $2ab$ |
| $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{1}{a+b}$ | Falscher gemeinsamer Nenner. |
| $(a^m)^n = a^{m+n}$ | Sollte $a^{mn}$ sein. |
| $\sqrt{p}+\sqrt{q}=\sqrt{p+q}$ oder $\sqrt{p}\sqrt{q}=\sqrt{p+q}$ | Wurzeln fügen diesen Weg nicht hinzu. |
| $\lvert x+y\rvert=\lvert x\rvert+\lvert y\rvert$ immer | Fails für entgegengesetzte Zeichen. |
| Cancelled Hole kann ersetzt werden | Domain des ursprünglichen Ausdrucks bleibt. |
| $\sqrt{w^2}=w$ für jeden realen $w$ | Sollte $\lvert w\rvert$ sein. |

---

## 2.6 Prüfungsaufgaben mit vollen Lösungen

Unterabschnitt 2.5 auf der Website mischt mehrere Algebra-Fähigkeiten in einem Stamm, fragt dann fünf unabhängige Wahr/Falsch Behauptungen. Die drei Aufgaben unten folgen diesem Prüfungsformat. Jede Behauptung wird allein beurteilt. Die gearbeiteten Lösungen verwenden den gleichen Rhythmus wie die Praxisbank: Nennen Sie die Regel, schreiben Sie die Algebra, dann geben Sie das Urteil.

### Prüfung Aufgabe 1 - Gemischte Identitäten, Radikale und absoluter Wert

Bewerten Sie jede Aussage. Markieren Sie es Wahr oder Falsch.

**A.** Für $u>0$ und $v>0$ gilt $\left(u^{2}v\right)^{3}=u^{6}v^{3}$ .

**B.** Wenn $a+b+c=0$ und $abc\neq 0$ , dann $\dfrac{1}{ab}+\dfrac{1}{bc}+\dfrac{1}{ca}=0$ .

**C.** Für $x\ge 0$ gilt, dass $\sqrt{x}+\sqrt{x+2\sqrt{x}+1}=2\sqrt{x}+1$ .

**D.** Für real $x$ ist die Ungleichheit $\lvert 2x-1\rvert<3$ äquivalent zum offenen Intervall $-1<x<2$ .

**E.** Für jede positive ganze Zahl $n$ ist das Polynom $u^{n}-1$ durch $u-1$ teilbar.

**Complete Lösung.**

**A.** → Wahr

Verteilen Sie einen äußeren Exponenten über ein Produkt und multiplizieren Sie dann die Exponenten auf übereinstimmenden Basen.

Beginnen Sie von $\left(u^{2}v\right)^{3}$ mit $u,v>0$ :

$$
\left(u^{2}v\right)^{3}=(u^{2})^{3}\,v^{3}=u^{6}v^{3}.
$$

Die Exponenten auf $u$ multiplizieren sich mit $2\cdot 3=6$ und der Faktor $v$ trägt $v^{3}$ bei. Das stimmt mit der Behauptung überein.

**B.** → Wahr

Löschen Sie einen gemeinsamen Nenner und verwenden Sie die Hypothese, dass die Summe der Variablen Null ist.

$$
\frac{1}{ab}+\frac{1}{bc}+\frac{1}{ca}
=\frac{c+a+b}{abc}
=\frac{a+b+c}{abc}.
$$

Der Zähler verschwindet durch Hypothese, so dass die Summe $0$ ist.

**C.** → Wahr

Vervollständigen Sie das Quadrat unter dem Radikal, bevor Sie das Hauptquadrat Wurzel nehmen.

Für $x\ge 0$

$$
x+2\sqrt{x}+1=(\sqrt{x}+1)^{2},
$$

so

$$
\sqrt{x+2\sqrt{x}+1}=\sqrt{x}+1.
$$

Add $\sqrt{x}$:

$$
\sqrt{x}+\sqrt{x+2\sqrt{x}+1}=2\sqrt{x}+1.
$$

**D.** → Wahr

Schreibe die Absolutwertungleichheit als zweiseitige Grenze um und isoliere dann $x$ .

$$
\lvert 2x-1\rvert<3
\quad\Longleftrightarrow\quad
-3<2x-1<3.
$$

Add $1$ throughout:

$$
-2<2x<4.
$$

Teilen Sie durch den positiven Koeffizienten $2$ :

$$
-1<x<2.
$$

Dieses offene Intervall ist genau die beanspruchte Lösungsmenge.

**E.** → Wahr

Faktor $u^{n}-1$ durch die geometrische Summenidentität (oder den Faktor Menge bei $u=1$ anwenden).

Für jede positive ganze Zahl $n$

$$
u^{n}-1=(u-1)\bigl(u^{n-1}+u^{n-2}+\cdots+u+1\bigr).
$$

Der zweite Faktor ist ein Polynom, also teilt $u-1$ $u^{n}-1$ . Entsprechend ergibt das Ersetzen von $u=1$ $1^{n}-1=0$ , und der Faktor Menge liefert die gleiche Schlussfolgerung.

**Answers:** A Wahr, B Wahr, C Wahr, D Wahr, E Wahr.

### Exam task 2 — Symmetric archive data

Ein Algebra-Archiv speichert zwei reelle Zahlen $a$ und $b$ nur über die Datensätze $a+b=11$ und $ab=18$ . Die ursprüngliche Ordnung wurde nicht aufgezeichnet, so dass jede Schlussfolgerung aus symmetrischen Identitäten oder aus dem Quadrat mit Wurzeln $a$ und $b$ folgen muss.

Welche der folgenden Aussagen ist/sind korrekt?

**A.** $a^{2}+b^{2}=85$.

**B.** $(a-b)^{2}=49$.

**C.** $a^{3}+b^{3}=738$.

**D.** $\{a,b\}=\{2,9\}$.

**E.** $\dfrac{1}{a}+\dfrac{1}{b}=\dfrac{18}{11}$.

**Complete Lösung.**

Stehende Identitäten für diesen Stamm:

$$
a^{2}+b^{2}=(a+b)^{2}-2ab,
\qquad
(a-b)^{2}=(a+b)^{2}-4ab,
$$

$$
a^{3}+b^{3}=(a+b)^{3}-3ab(a+b),
\qquad
\frac{1}{a}+\frac{1}{b}=\frac{a+b}{ab}.
$$

**A.** → Wahr

Die Summe der Quadrate ergibt sich aus dem Quadrat der Summe, nachdem das Mischprodukt entfernt wurde.

$$
a^{2}+b^{2}=(a+b)^{2}-2ab=11^{2}-2\cdot 18=121-36=85.
$$

**B.** → Wahr

Die quadratische Lücke ist eine weitere elementare Identität in $a+b$ und $ab$ .

$$
(a-b)^{2}=(a+b)^{2}-4ab=121-72=49.
$$

**C.** → Falsch

Würfel erweitern sich durch die gleiche Summe und Produkt; der mittlere Begriff ist $3ab(a+b)$ .

$$
a^{3}+b^{3}=(a+b)^{3}-3ab(a+b)=11^{3}-3\cdot 18\cdot 11=1331-594=737.
$$

Die Behauptung behauptet $738$ , aber die Identität produziert $737$ .

**D.** → Wahr

Das ungeordnete Paar $\{a,b\}$ ist die Wurzelmenge des monischen Quadrats mit diesen Koeffizienten.

$$
t^{2}-(a+b)t+ab=0
\quad\Longrightarrow\quad
t^{2}-11t+18=0.
$$

Factor:

$$
t^{2}-11t+18=(t-2)(t-9).
$$

Die Wurzeln sind $t=2$ und $t=9$ , also $\{a,b\}=\{2,9\}$ .

**E.** → Falsch

Die Summe der Reziproken ist das Verhältnis der Summe zum Produkt, nicht umgekehrt.

$$
\frac{1}{a}+\frac{1}{b}=\frac{a+b}{ab}=\frac{11}{18}.
$$

Die Behauptung druckt $\dfrac{18}{11}$ statt $\dfrac{11}{18}$ .

**Answers:** A Wahr, B Wahr, C Falsch, D Wahr, E Falsch.

### Prüfungsaufgabe 3 — Rationalrechner mit Domänen

A symbolic calculator studies

 $$
R(x)=\dfrac{x^{2}-16}{x-4}
\qquad\text{and}\qquad
S(x)=\dfrac{1}{x-4}+\dfrac{1}{x+4}.
$$

Der erste Ausdruck ist für $x\neq 4$ definiert, während der zweite auch $x=-4$ ausschließt. Vereinfachungen müssen diese ursprünglichen Domänenbeschränkungen beibehalten, auch wenn nachdem Faktoren aufgehoben wurden.

Welche der folgenden Aussagen ist/sind korrekt?

**A.** $R(x)=x+4$ on its domain.

**B.** $R(4)=8$.

**C.** $S(x)=\dfrac{2x}{x^{2}-16}$.

**D.** $S(0)=0$.

**E.** $S(x)=0$ has exactly one real Lösung.

**Complete Lösung.**

Arbeiten Sie an den angegebenen Domänen: $R$ schließt $x=4$ aus und $S$ schließt $x=\pm 4$ aus.

**A.** → Wahr

Faktorisieren Sie in der Domäne $x\neq 4$ die Differenz der Quadrate und löschen Sie den gemeinsamen linearen Faktor.

$$
R(x)=\frac{(x-4)(x+4)}{x-4}=x+4\qquad(x\neq 4).
$$

**B.** → Falsch

 $R$ ist am ausgeschlossenen Punkt $x=4$ undefiniert, so dass $R(4)$ nicht durch die Formel definiert ist.

$$
R(4)=\frac{4^{2}-16}{4-4}
$$

hat einen verschwindenden Nenner. Die Behauptung behauptet $R(4)=8$ , was eine Auswertung über ein Loch in der Domäne hinaus erfordern würde. Darum ist die Aussage falsch.

**C.** → Wahr

Kombinieren Sie die beiden reziproken Terme über das Produkt der linearen Faktoren.

$$
S(x)=\frac{1}{x-4}+\frac{1}{x+4}
=\frac{(x+4)+(x-4)}{(x-4)(x+4)}
=\frac{2x}{x^{2}-16}.
$$

**D.** → Wahr

Bewerten Sie die vereinfachte Form am Ursprung.

$$
S(0)=\frac{2\cdot 0}{0-16}=0.
$$

**E.** → Wahr

Lösen Sie $S(x)=0$ auf der Domain $x\neq\pm 4$ .

 $$
\frac{2x}{x^{2}-16}=0
\quad\Longleftrightarrow\quad
2x=0\text{ and }x^{2}-16\neq 0
\quad\Longleftrightarrow\quad
x=0.
$$

Seit $0\neq\pm 4$ ist die Wurzel zulässig. Kein anderer Zähler Wurzel existiert, also gibt es genau eine echte Lösung.

**Answers:** A Wahr, B Falsch, C Wahr, D Wahr, E Wahr.

### Wie man eine vollständige Prüfung-Stil-Aufgabe markiert

1. Lesen Sie den Stamm einmal: Notieren Sie sich jede Domänenbeschränkung und jedes gegebene symmetrische Datum.
2. Für jede Behauptung mit einer Identität, einem gemeinsamen Nenner oder einem absoluten Wertsplit umschreiben, bevor Sie entscheiden.
3. Wenn eine Behauptung wie ein bekannter Slogan aussieht, erweitern Sie sie entweder vollständig oder testen Sie ein billiges Gegenspiel.
4. Markieren Sie die fünf Urteile unabhängig voneinander. Eine wahre Antwort zieht die nächste Behauptung nicht mit.

---

## 2.7 Zusammenfassung reference

| Aufgabe | Methode |
| --- | ---
| Erweitern Sie ein Produkt | Verwenden Sie Verteilung; halten Sie jeden Cross Term. |
| Erweitern Sie ein Quadrat | Verwenden Sie $a^2\pm 2ab + b^2$ . |
| Faktor $a^2-b^2$ | Schreiben Sie $(a-b)(a+b)$ . |
| Faktorwürfel | Verwenden Sie $a^3\pm b^3$ Formeln. |
| Rationale Ausdrücke hinzufügen | Gemeinsamer Nenner = Produkt von Nennern (nach Factoring). |
| Vereinfachen Sie einen Quotienten | Faktor, annullieren Sie gemeinsame Faktoren, halten Sie Ausschlüsse. |
Macht einer Macht Multipliziere Exponenten.
| Produkt der Befugnisse | Hinzufügen von Exponenten. |
| Verschachtelte Quadratwurzel | Verwenden Sie $u^{1/4}$ , nicht die Hälfte von $\sqrt{u}$ . |
| Absoluter Wert Gleichung $\lvert A\rvert=c>0$ | Löse $A=c$ und $A=-c$ . |
| Absolutwertungleichheit $\lvert A\rvert<c$ | Rewrite $-c<A<c$ . |
| Symmetrische $a+b$ , $ab$ Daten | Verwenden Sie $a^2+b^2$ , $a^3+b^3$ , und Reziproken-Summen-Identitäten. |

### Key formulas

$$
(a\pm b)^2 = a^2 \pm 2ab + b^2,
$$

$$
a^2 - b^2 = (a-b)(a+b),
$$

$$
a^3 - b^3 = (a-b)(a^2+ab+b^2),
$$

$$
\frac{1}{a}+\frac{1}{b}=\frac{a+b}{ab},
$$

$$
a^m a^n = a^{m+n},\quad (a^m)^n=a^{mn},\quad a^{-n}=\frac{1}{a^n},
$$

$$
\sqrt{w^2}=\lvert w\rvert,\quad \lvert xy\rvert=\lvert x\rvert\,\lvert y\rvert.
$$

### Working order on an exam Aussage

1. Bereich.
2. Umschreiben.
3. Identitätsprüfung oder Gegenspiel.
4. Urteil.

### Selbstkontrolle

- Können Sie $(2x-3)^2$ erweitern, ohne die mittlere Laufzeit fallen zu lassen?
- Warum ist $\dfrac{x^2-16}{x-4}=x+4$ � Wahr auf seiner Domain aber $R(4)=8$ Falsch?
- Was ist $(u^3)^4$ und warum ist $u^7$ falsch?
- Warum ist $\sqrt{(x-1)^2}$ gleich $\lvert x-1\rvert$ statt $x-1$ ?
Wenn $a+b=11$ und $ab=18$ , was ist $\dfrac{1}{a}+\dfrac{1}{b}$ ?
