# Kapitel 7 — Lineare und quadratische Funktionen

Eine lineare Funktion zieht eine gerade Linie. Eine quadratische Funktion zeichnet ein Parabel. In der BBE-Prüfung werden Sie in Kapitel 7 aufgefordert, diese Graphen aus Formeln, Tabellen und Geschichten zu lesen und Wahr/Falsch-Behauptungen über Steigung, Schnittpunkte, Scheitelpunkt, Achse, Wurzeln, Meetings und Umschreibungen zu entscheiden.

Dieses Kapitel beginnt bei Null. Es baut die beiden Familien ein Stück nach dem anderen, zeigt dann, wie sie sich treffen, wie Komposition funktioniert, wie ein Parameter einen Graphen rutscht und wie angewandte Geschichten die gleiche Algebra verbergen. Die späteren Beispiele kombinieren mehrere Ideen, denn die schwierigen Aufgaben benennen selten die Formel, die Sie benötigen.

Kapitel 4 löst Gleichungen. Dieses Kapitel untersucht die Funktionen selbst: wie der Graph aussieht, wo er sich dreht, wo er eine Linie kreuzt und was passiert, wenn Sie die Ausdrücke verschieben oder verschachteln.

## Lernziele

- Recognise $f(x)=mx+c$ and read slope, intercepts, and monotonicity from the formula.
- Recognise $g(x)=ax^{2}+bx+c$ with $a\neq 0$ and read opening direction from $a$ .
Bewegen Sie sich zwischen Standardform, Vertexform und Faktorform.
- Find the axis $x=-b/(2a)$ and the vertex, and connect the axis to Vieta’s sum of roots.
- Verwenden Sie den Diskriminanten, um echte Wurzeln und Meetings mit einer horizontalen Linie zu zählen.
- Entscheiden Sie, wie oft eine Linie auf ein Parabel trifft, einschließlich der Tangenz.
- Lesen Sie lineares und quadratisches Verhalten aus Tabellen, indem Sie erste und zweite Unterschiede überprüfen.
- Expand a nested rule such as $g(f(x))$ and see that the order of nesting matters.
- Bauen Sie eine Linie oder ein Parabel aus Wurzeln, einen Scheitelpunkt oder ein paar Punkte neu auf.
Übersetzen Sie angewandte Geschichten (Tarif, Ballwurf, Einnahmen, Kosten) in die gleiche Algebra.
- Finde die üblichen Fallen: Verwechseln von Wurzeln mit dem Scheitelpunkt, Halbsummenfehler, falsche Verschachtelungsgrade.

---

## 7.1 Linear functions

### Die Formel

Eine **lineare Funktion** hat die Form

$$
f(x)=mx+c,
$$

wobei $m$ und $c$ Konstanten sind. Der Graph ist eine gerade Linie.

| Symbol | Name | Was es tut |
| --- | ---
| $m$ | Steigung (Gradient) | Steigen Sie über den Lauf; wie viel $f$ ändert sich, wenn $x$ um $1$ erhöht wird
| $c$ | $y$ -Abschnitt | Der Wert $f(0)$ ; wo die Linie die vertikale Achse kreuzt |
| $x$ | Eingang | Die horizontale Koordinate |

Wenn $m>0$ , steigt die Linie an, wenn Sie sich nach rechts bewegen. Wenn $m<0$ , fällt die Linie. Wenn $m=0$ , ist der Graph eine horizontale Linie in Höhe $c$ .

### Intercepts

Der ** $y$ -Abschnitt** ist der Punkt $(0,c)$ .

Der ** $x$ -Abschnitt** (Wurzel der Linie) löst $mx+c=0$ . Wenn $m\neq 0$

$$
x=-\frac{c}{m}.
$$

Wenn $m=0$ und $c\neq 0$ , gibt es keinen $x$ -Abschnitt. Wenn $m=0$ und $c=0$ , ist jeder $x$ ein Abschnitt (die Nullfunktion).

**Beispiel 1.** Take $f(x)=-2x+6$ .

- Steigung $m=-2$ : die Linie fällt um $2$ für jede Einheit Schritt nach rechts.
- $y$ -Abschnitt: $(0,6)$ .
- $x$ -intercept: $-2x+6=0$ gibt $x=3$ , also den Punkt $(3,0)$ .

### Andere Schriften der gleichen Linie

Die gleiche Linie kann als

$$
f(x)=m(x-x_{0})+y_{0}
$$

wenn er gezwungen ist, einen bekannten Punkt $(x_{0},y_{0})$ zu durchlaufen. Expanding stellt $mx+c$ mit $c=y_{0}-mx_{0}$ wieder her.

Eine Zeile, geschrieben als ein einzelner Bruch, für Beispiel

$$
f(x)=\frac{2x-4}{3}=\frac{2}{3}x-\frac{4}{3},
$$

ist immer noch linear. Zuerst den konstanten Nenner löschen, dann lesen Sie $m$ und $c$ .

### Durchschnittliche Änderungsrate

Zwischen zwei Eingängen $x_{1}$ und $x_{2}$

$$
\frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}}=m.
$$

Für eine lineare Funktion entspricht die durchschnittliche Rate der Steigung in jedem Intervall. Das ist der Tabellentest für eine Linie: Aufeinanderfolgende erste Differenzen sind konstant, wenn der $x$ -Schritt konstant ist.

**Beispiel 2.** Ein Taxipreis ist

$$
C(d)=3.5+1.2\,d
$$

Euro für Entfernung $d$ Kilometer. Die feste Gebühr ist $3.5$ . Jeder zusätzliche Kilometer fügt $1.2$ hinzu. Der Graph ist eine steigende Linie. Die Behauptung "der Fahrpreis verdoppelt sich, wenn sich die Entfernung verdoppelt" ist generell falsch, da die feste Gebühr ungleich Null ist.

---

## 7.2 Quadratische Funktionen: Standardform und Öffnung

### Die Formel

Eine **quadratische Funktion** hat die Form

 $$
g(x)=ax^{2}+bx+c\qquad\text{with }a\neq 0.
$$

Die Bedingung $a\neq 0$ ist Teil der Definition. Wenn $a=0$ , bricht der Ausdruck zu einer linearen (oder konstanten) Funktion zusammen, und die Parabel-Theorie gilt nicht mehr.

Der Graph ist ein **Parabel**.

| Koeffizient | Rolle |
| --- | ---
| $a$ | Öffnung und vertikale Dehnung |
| $b$ | Horizontale Anordnung der Achse (zusammen mit $a$ ) |
| $c$ | $y$ -Abschnitt: $g(0)=c$ |

### Opening direction

- Wenn $a>0$ , öffnet sich das Parabel ** nach oben **. Der Scheitelpunkt ist ein globales **Minimum ** (ein Trog).
- Wenn $a<0$ , öffnet sich das Parabel ** nach unten **. Der Scheitelpunkt ist ein globales **maximum ** (ein Peak).

Das Ändern der Größe von $|a|$ dehnt oder komprimiert den Graphen vertikal. Das Ersetzen von $a$ durch $-a$ dreht den Graphen durch die $x$ -Achse, behält aber nur dann die gleiche Symmetrieachse, wenn die anderen Koeffizienten entsprechend angepasst werden. Für einen festen $b$ und $c$ bewegt das Umdrehen des Zeichens von $a$ den Scheitelpunkt.

**Beispiel 1.** Vergleichen Sie $g(x)=2x^{2}-8x+5$ und $h(x)=-2x^{2}-8x+5$ .

Beide haben die gleichen $b$ und $c$ , aber entgegengesetzt $a$ . Der erste öffnet sich. Der zweite öffnet sich. Ihre Achsen sind unterschiedlich, weil die Achsenformel $a$ verwendet:

$$
x=-\frac{b}{2a}.
$$

Für $g$ ist die Achse $x=2$ . Für $h$ ist die Achse $x=-2$ .

### Der $y$ -Abschnitt

Immer $g(0)=c$ . Behauptungen, die $c$ mit der Scheitelpunkthöhe verwechseln, sind allgemein und falsch.

### Weit rechts und weit links

As $x\to+\infty$ :

- wenn $a>0$ , dann $g(x)\to+\infty$ ;
- wenn $a<0$ , dann $g(x)\to-\infty$ .

Als $x\to-\infty$ dominiert derselbe führende Begriff $ax^{2}$ , und die Zeichen drehen sich relativ zum rechten Ende nur in dem Sinne um, dass beide Enden den gleichen Weg gehen: ein aufwärts gerichtetes Parabel geht auf beiden Seiten zu $+\infty$ und ein abwärts gerichtetes Parabel geht auf beiden Seiten zu $-\infty$ .

Deshalb kann eine Linie eine Parabel auf beiden Seiten niemals für immer "einfangen". Eine Linie wächst höchstens linear. Ein Quadrat überholt schließlich jede Linie in Richtung seiner Öffnung.

---

## 7.3 Achse, Scheitelpunkt und Vervollständigung des Quadrats

### Achse der Symmetrie

Die ** Achse der Symmetrie** von $g(x)=ax^{2}+bx+c$ ist die vertikale Linie

$$
x=-\frac{b}{2a}.
$$

Jedes Parabel dieser Form ist symmetrisch zu dieser Linie. Der konstante Term $c$ erscheint nie in der Achsenformel, so dass das Ändern von $c$ allein den Graphen nach oben oder unten rutscht, ohne die Achse zu bewegen.

### Vertex

Der **vertex** ist der Wendepunkt. Seine Abszisse ist der Achsenwert. Seine Ordinate ist der Funktionswert dort:

$$
h=-\frac{b}{2a},\qquad k=g(h).
$$

Der Scheitelpunkt ist der Punkt $(h,k)$ .

- Wenn $a>0$ , dann ist $k$ der globale Minimalwert von $g$ .
- Wenn $a<0$ , dann ist $k$ der globale Maximalwert von $g$ .

Der Scheitelpunkt existiert immer über den Realen, ob das Parabel echte Wurzeln hat oder nicht. Eine negative Diskriminante entfernt den Scheitelpunkt nicht.

### Das Quadrat ausfüllen

Vervollständigen des Quadrats umschreibt die quadratische als

$$
g(x)=a\left(x-h\right)^{2}+k,
$$

Es heißt **vertex form**. Hier ist $(h,k)$ der Scheitelpunkt und $a$ ist der gleiche Leitkoeffizient wie in Standardform.

Eine Standardberechnung ist

$$
g(x) = ax^{2}+bx+c = a\left(x^{2}+\frac{b}{a}x\right)+c
$$

$$
= a\left(\left(x+\frac{b}{2a}\right)^{2}-\left(\frac{b}{2a}\right)^{2}\right)+c = a\left(x+\frac{b}{2a}\right)^{2}+c-\frac{b^{2}}{4a}.
$$

So

$$
h=-\frac{b}{2a},\qquad k=c-\frac{b^{2}}{4a}=\frac{4ac-b^{2}}{4a}=-\frac{\Delta}{4a},
$$

wobei $\Delta=b^{2}-4ac$ die Diskriminante ist.

**Beispiel 1.** Take $g(x)=x^{2}-6x+5$ .

$$
g(x)=(x-3)^{2}-9+5=(x-3)^{2}-4.
$$

Der Scheitelpunkt ist $(3,-4)$ . Die Achse ist $x=3$ . Da $a=1>0$ , ist der Wert $-4$ ein Minimum.

**Beispiel 2.** Take $g(x)=-2x^{2}+8x-3$ .

$$
g(x) = -2\left(x^{2}-4x\right)-3,\quad = -2\left((x-2)^{2}-4\right)-3,\quad = -2(x-2)^{2}+8-3 = -2(x-2)^{2}+5.
$$

Der Scheitelpunkt ist $(2,5)$ . Der Graph öffnet sich, also ist $5$ ein Maximum.

### Einzigartigkeit der Vertex-Form

Jedes reale Quadrat gibt eine Darstellung $a(x-h)^{2}+k$ mit einem einzigartigen $(a,h,k)$ zu. Der führende Koeffizient ist einzigartig. Der Vertex ist einzigartig. Das Ersetzen von $h$ durch $-h$ ändert den Graphen, es sei denn $h=0$ .

### Range

Aus Vertex-Form:

- wenn $a>0$ , ist der Bereich $[k,+\infty)$ ;
- wenn $a<0$ , ist der Bereich $(-\infty,k]$ .

Eine Behauptung, dass ein nach unten gerichtetes Parabel „jeden wirklichen Wert annimmt, ist falsch. Es überschreitet nie seinen Peak $k$ .

---

## 7.4 Wurzeln, faktorisierte Form und Vieta

### Real roots as $x$-intercepts

Die wahren Wurzeln von $g$ sind die Lösungen von $g(x)=0$ . Geometrisch sind sie die Punkte, an denen das Parabel die horizontale Achse trifft.

### Factored form

Wenn es zwei echte Wurzeln $r$ und $s$ gibt (möglicherweise gleich),

$$
g(x)=a(x-r)(x-s).
$$

Wenn $r=s$ , ist dies eine doppelte Wurzel und der Graph berührt die Achse an einem Punkt.

**Beispiel 1.** $g(x)=2(x-1)(x-4)=2x^{2}-10x+8$ .

- Wurzeln bei $x=1$ und $x=4$ .
- Achse im Mittelpunkt $x=\dfrac{1+4}{2}=2.5$ - Führender Koeffizient $2>0$ , also öffnet sich der Graph.
- Im offenen Intervall $(1,4)$ ist das Produkt $(x-1)(x-4)$ negativ, also $g$ ist negativ zwischen den Wurzeln. Draußen $[1,4]$ , $g$ ist positiv.

### Vieta’s rules

Für $g(x)=ax^{2}+bx+c$ mit $a\neq 0$ , wenn die Wurzeln (in $\mathbb{C}$ , Multiplizität zählen) $r$ und $s$ sind, dann

$$
r+s=-\frac{b}{a},\qquad rs=\frac{c}{a}.
$$

Über den Realen halten diese Formeln immer noch, wenn die Wurzeln real sind.

### Achse als die Hälfte der Summe von Wurzeln

Die Achse ist

$$
x=-\frac{b}{2a}=\frac{r+s}{2}.
$$

Schreibe $S=r+s$ . Dann ist die Achse $x=S/2$ , nicht $x=S$ . Diese halbsumme tatsache ist eine der häufigsten fallen im kapitel.

**Beispiel 2.** Angenommen, $g(x)=ax^{2}+bx+c$ und $S$ sind die Summe der Wurzeln. Die Behauptung „die Achse ist die Linie $x=S$ ist falsch. Die Achse ist $x=S/2$ . Wenn $S=0$ , dann $b=0$ und die Achse ist die $y$ -Achse.

### Sign Informationen aus Summe und Produkt

| Zustand | Bedeutung für echte Wurzeln |
| --- | ---
| $rs>0$ und $r+s>0$ | Beide Wurzeln positiv (wenn sie real sind) |
| $rs>0$ und $r+s<0$ | Beide Wurzeln negativ |
| $rs<0$ | Gegensätzliche Zeichen |
| $r+s=0$ | Gegenüber liegende Wurzeln: $s=-r$ , und die Achse ist $x=0$ |

Eine positive Summe allein erzwingt nicht beide Wurzeln positiv. Wurzeln $-1$ und $3$ summieren sich zu $2$ , haben aber entgegengesetzte Vorzeichen. Sie benötigen auch den Produkttest.

### Ändern $c$ bewegt die Achse nicht

Da die Achse nur von und $a$ abhängt, lässt eine vertikale Verschiebung, die sich ändert $c$ allein die Achse fest. Es verändert die Wurzeln und das Produkt $rs=c/a$ .

---

## 7.5 Diskriminierende und zählende Wurzeln

### Der Diskriminierende

$$
\Delta=b^{2}-4ac.
$$

| $\Delta$ | Echte Wurzeln | Graph gegen die $x$ -Achse |
| --- | ---
| $\Delta>0$ | Zwei verschiedene reale Wurzeln | Zwei Kreuzungen |
| $\Delta=0$ | Eine echte Wurzel (doppelt) | Tangenz an der Abszisse des Vertex? Nicht immer die Scheitelpunkthöhe Null, aber der Berührungspunkt liegt auf der Symmetrieachse |
| $\Delta<0$ | Keine wirklichen Wurzeln | Keine Kreuzung; der gesamte Graph bleibt strikt oberhalb oder unterhalb der $x$ -Achse |

Wenn $\Delta=0$ , ist die eindeutige Wurzel genau der Achsenwert $x=-b/(2a)$ , und der Scheitelpunkt liegt auf der $x$ -Achse.

### Vertex existiert auch wenn $\Delta<0$ �

Die Formel $x=-b/(2a)$ verwendet nicht $\Delta$ . Also "keine echten Wurzeln ⇒ kein Vertex" ist falsch.

### Gegenseitige Anzeichen von $a$ und $c$

Wenn $a$ und $c$ entgegengesetzte Vorzeichen haben, dann $ac<0$ , also $-4ac>0$ , daher $\Delta=b^{2}-4ac>0$ . Es gibt immer zwei verschiedene reale Wurzeln in diesem Fall. Eine Wurzel ist positiv und eine negativ, weil das Produkt $c/a$ negativ ist.

### Horizontal probe lines

Die Frage, wie oft $g(x)=k$ echte Lösungen hat, ist dasselbe wie das Lernen

$$
ax^{2}+bx+(c-k)=0
$$

mit Diskriminanz

$$
\Delta(k)=b^{2}-4a(c-k).
$$

Geometrisch sind dies Treffen zwischen dem Parabel und der horizontalen Linie $y=k$ .

- Zwei Besprechungen, wenn die Ebene $k$ streng auf der Seite des Scheitels sitzt, die die Öffnung erlaubt.
- Ein Treffen (Tangenz), wenn $k$ der Scheitelpunkthöhe entspricht.
- Keine Besprechung, wenn $k$ jenseits des Scheitels in die falsche Richtung ist.

**Beispiel 1.** Let $g(x)=(x-2)^{2}+(s-4)$ . Dies ist eine vertikale Schichtfamilie.

- Achse $x=2$ für jede $s$ .
- Scheitelhöhe $s-4$ - Zwei echte Wurzeln, wenn $s-4<0$ , das ist $s<4$ .
- Doppelwurzel, wenn $s=4$ .
- Keine echte Wurzel, wenn $s>4$ .

---

## 7.6 Treffen einer Linie und eines Parabels

### Die Gleichung der Sitzungen

Es sei $f(x)=mx+d$ linear und $g(x)=ax^{2}+bx+c$ quadratisch. Ihre Graphen treffen sich, wo

$$
g(x)=f(x)\iff ax^{2}+(b-m)x+(c-d)=0.
$$

Dies ist wieder eine quadratische Gleichung (es sei denn $a=0$ , was es nicht ist). Die Diskriminante dieser Differenz entscheidet über die Anzahl der Sitzungen.

| Diskriminant von $g-f$ | Geometrische Bedeutung |
| --- | ---
| Positive | Zwei verschiedene Treffpunkte |
| Zero | Genau ein Treffen: Die Linie tangiert das Parabel |
Negativ | Kein Treffen |

Eine Linie und ein Parabel treffen sich nie mehr als zweimal. Diese Strukturgrenze hängt nicht von den jeweiligen Koeffizienten ab.

### Tangency

Tangenz bedeutet, dass sich die Graphen an einem Punkt berühren und dort die gleiche Steigung teilen. Für Aufgaben in Kapitel 7 genügt es, die Diskriminante von $g-f$ auf Null zu setzen. Das erzeugt eine Bedingung für einen Parameter (oft eine Steigung oder eine vertikale Verschiebung).

**Beispiel 1.** Lassen Sie $g(x)=x^{2}$ und $f_{m}(x)=mx+1$ . Meetings lösen

$$
x^{2}-mx-1=0,\qquad \Delta=m^{2}+4.
$$

Hier $\Delta>0$ für jede reale $m$ , so dass jede solche Linie zweimal auf das Parabel trifft. Es gibt keine Tangenz in dieser Familie, weil der konstante Begriff die Linie davon abhält, sich in eine Tangentenposition mit diesem Abschnitt zu setzen.

**Beispiel 2.** Lassen Sie $g(x)=x^{2}$ und $f_{t}(x)=2x+t$ . Dann

$$
x^{2}-2x-t=0,\qquad \Delta=4+4t=4(1+t).
$$

- Zwei Treffen, wenn $t>-1$ .
- Tangenz wenn $t=-1$ .
- Kein Treffen, wenn $t<-1$ .

### Summe und Produkt des Treffens Abszissen

Wenn die Meetings unter $x_{1}$ und $x_{2}$ stattfinden, gibt Vieta auf $g-f=0$ ihre Summe und ihr Produkt an. Behauptungen über "das Produkt des Treffens Abszissen ist negativ" sind Produkt-of-Wurzeln Behauptungen für diese Differenz Gleichung.

### Vertex relativ zu einer Linie

Eine häufige Behauptung fragt, ob der Scheitelpunkt auf einer gegebenen Linie, darüber oder darunter liegt. Berechnen Sie den Scheitelpunkt $(h,k)$ und vergleiche dann $k$ mit $f(h)$ . Verwechseln Sie nicht "Vertikel auf der Symmetrieachse" mit "Vertikel auf der angegebenen Linie".

### Secants und Akkorde

Ein Akkord, der die beiden Wurzeln eines Parabels verbindet, ist nur dann ein horizontales Segment auf der $x$ -Achse, wenn beide Wurzeln real sind und Sie $(r,0)$ mit $(s,0)$ verbinden. Eine gestrichelte Linie in einer Figur kann diesem Akkord ähnlich aussehen, aber auf einer anderen Höhe sitzen. Stellen Sie beide Formeln vor dem Vergleich wieder her.

---

## 7.7 Tabellen: erster und zweiter Unterschied

Viele Kapitel 7 Aufgaben geben eine Tabelle und keine Formel. Ihre Aufgabe ist es, zu entscheiden, ob die versteckte Regel eine Linie oder ein Parabel ist, und dann das wieder aufzubauen, was Sie brauchen (Steigung, Leitkoeffizient, Achse, Scheitelpunkt, nächster Wert).

Fast jede Tabelle im Kurs verwendet gleich beabstandete Eingaben mit Schritt $1$ (für Beispiel $n=0,1,2,3,\ldots$ oder $p=1,2,3,\ldots$ ). Arbeiten Sie zuerst mit diesem Fall.

### First differences

Schreiben Sie die Outputs in einer Reihe. Unter jedem Paar von Nachbarn, schreiben Sie die Lücke

$$
\text{next output}-\text{current output}.
$$

Diese Lücken sind die **ersten Unterschiede **.

**Beispiel 1 (line).**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $y$ | $-1$ | $2$ | $5$ | $8$ | $11$ |

First differences: $3,3,3,3$.

Die ersten Unterschiede sind konstant. Die Regel ist linear. Mit Schritt $1$ ist diese gemeinsame Lücke die Steigung:

$$
m=3.
$$

Mit dem ersten Punkt,

$$
y=3x-1.
$$

Sie können die Tabelle jetzt erweitern, indem Sie die gleiche Lücke beibehalten: $y(5)=11+3=14$ .

### Second differences

Wenn die ersten Unterschiede nicht konstant sind, bilden Sie Lücken dieser Lücken. Das sind die **zweiten Unterschiede **.

**Beispiel 2 (Parabel).**

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- | --- |
| $s_n$ | $3$ | $0$ | $-1$ | $0$ | $3$ | $8$ |

First differences: $-3,-1,1,3,5$.

Second differences: $2,2,2,2$.

Die zweiten Unterschiede sind konstant und ungleich Null. Die Regel ist also quadratisch. Mit Schritt $1$ ,

 $$
\text{common second difference}=2a.
$$

Hier $2a=2$ , also $a=1$ . Matching der ersten beiden Punkte gibt

$$
s_n=n^{2}-4n+3=(n-1)(n-3).
$$

Aus dieser umgebauten Formel können Sie alles lesen, was die Behauptungen verlangen:

- Wurzeln bei $n=1$ und $n=3$ ;
- Achse im Mittelpunkt $n=2$ ;
- Scheitelhöhe $s_2=-1$ ;
- der nächste Wert $s_6=6^{2}-4\cdot 6+3=15$ , nicht $12$ .

### Wie man sich für einen Prüfungstisch entscheidet

1. Erste Differenzen berechnen.
2. Wenn sie konstant sind, verwenden Sie eine Linie. Steigung entspricht dieser gemeinsamen Lücke, wenn der Schritt $1$ ist.
3. Wenn sie nicht konstant sind, berechnen Sie zweite Differenzen.
4. Wenn zweite Unterschiede konstant sind, verwenden Sie ein Parabel. Der Leitkoeffizient erfüllt $2a=$ diese gemeinsame zweite Lücke, wenn der Schritt $1$ ist.
5. Rebuild nur so weit, wie die Behauptung braucht: manchmal reicht $a$ allein, manchmal braucht man auch Wurzeln, Achse oder einen weiteren Tabellenwert.

### Fallen, die im Kurs auftauchen

Eine Behauptung kann sagen, dass eine Linie durch den ersten und letzten Punkt auch einen mittleren Punkt trifft. Überprüfen Sie diesen mittleren Wert direkt. In Beispiel 2 hat die Linie durch $(0,3)$ und $(5,8)$ Steigung $1$ , also bei $n=2$ prognostiziert sie $5$ , aber die Tabelle hat $-1$ . Die Behauptung ist falsch.
Eine Behauptung kann das Muster falsch erweitern. Fügen Sie die gleiche zweite Differenz zu den ersten Differenzen hinzu und fügen Sie diese neue erste Differenz zum letzten Ausgang hinzu. Erfinden Sie keine neue Lücke.
- Konstante erste Unterschiede bedeuten eine Linie. Zwingen Sie kein Parabel auf diesen Tisch.

**Beispiel 3 (revenue table).**

| $p$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- |
| $R$ | $7$ | $12$ | $15$ | $16$ | $15$ |

Erste Unterschiede: $5,3,1,-1$ . Zweite Unterschiede: $-2,-2,-2$ Also $2a=-2$ und $a=-1$ . Matching $R(1)=7$ erholt sich

$$
R(p)=p(8-p)=-p^{2}+8p.
$$

Der Peak befindet sich im Mittelpunkt $p=4$ der Wurzeln $0$ und $8$ . Der Umsatz steigt nicht bei jedem aufgeführten Schritt: von $4$ nach $5$ fällt er von $16$ nach $15$ .

---

## 7.8 Eine Linie und ein Parabel verschachteln

Kursaufgaben geben oft eine Linie $f$ und ein Parabel $g$ , dann fragen Sie nach $g(f(x))$ oder $f(g(x))$ . Sie brauchen keine abstrakte Gradtheorie. Erweitern Sie den Ausdruck und lesen Sie das Ergebnis.

### Was Nesting bedeutet

 $g(f(x))$ bedeutet: Berechnen Sie zuerst den Zeilenwert und geben Sie diese Zahl dann in das Parabel ein.

 $f(g(x))$ bedeutet: Berechnen Sie zuerst den Parabel-Wert und geben Sie diese Zahl dann in die Zeile ein.

### Beide Orders erweitern

**Beispiel 1.** Lassen Sie $f(x)=x+1$ und $g(x)=x^{2}$ .

$$
g(f(x))=(x+1)^{2}=x^{2}+2x+1,,\quad f(g(x))=x^{2}+1.
$$

Beide Ergebnisse haben die höchste Leistung $x^{2}$ . Das Verschachteln einer Zeile mit einem Parabel erzeugt keinen Term $x^{3}$ . Die falsche Behauptung $1+2=3$ , also gibt es einen $x^{3}$ Begriff ist eine Standardfalle.

Die beiden Nestings sind unterschiedliche Funktionen. Eine schnelle Überprüfung:

$$
g(f(1))=4,\qquad f(g(1))=2.
$$

Behauptungen, dass "die beiden verschachtelten Regeln identisch sind" oder "sie haben den gleichen Scheitelpunkt", sind hier falsch.

Aus den Erweiterungen können Sie auch Geometrie lesen:

- $g(f(x))=(x+1)^{2}$ ist ein perfektes Quadrat, so dass sein Scheitelpunkt auf der horizontalen Achse liegt;
- $f(g(x))=x^{2}+1$ hat die gleiche Achse $x=0$ wie $g$ und Vertex $(0,1)$ .

### Checking a rewrite Behauptung

Einige Aufgaben Behauptung, dass das Parabel mit der Zeile geschrieben werden kann, zum Beispiel

$$
g(x)=f(x)^{2}-6\,f(x)+6.
$$

Die Methode ist einfach: Setze $f(x)$ durch seine Formel und erweitern Sie. Wenn Sie $g(x)$ wiederherstellen, ist die Behauptung wahr. Wenn nicht, ist es falsch.

**Beispiel 2.** Lassen Sie $f(x)=x+1$ und $g(x)=x^{2}-4x+1$ . Erweitern Sie das vorgeschlagene Rewrite:

$$
(x+1)^{2}-6(x+1)+6=x^{2}+2x+1-6x-6+6=x^{2}-4x+1=g(x).
$$

Die Behauptung ist wahr.

Sie brauchen keinen allgemeinen Menge über Polynombasen für diese Aufgaben. Erweitern und vergleichen.

### Shifts you meet in claims

- $g(x)+s$ bewegt den Graphen um $s$ nach oben und lässt die Achse fest.
- $g(x-t)$ bewegt den Graphen rechts um $t$ und bewegt die Achse mit ihm.
Multiplizieren mit einer Konstante von Null dehnt die Höhe aus und enthält die Wurzeln, wenn die Konstante ungleich Null ist.

Das reicht für die Verschiebung und Verschachtelung der Behauptungen im Kapitel.

---

## 7.9 Parametric families

### Was ein Parameter tut

Ein Parameter $m$ , $t$ oder $s$ gleitet oft die Steigung einer Linie, gleitet eine Linie vertikal oder gleitet ein Parabel nach oben, unten oder seitlich. Jede Behauptung über "für welche Werte es zwei Treffen / Tangenzen / keine gibt" ist eine diskriminierende Bedingung in diesem Parameter.

### Typical patterns

1. **Sliding Steigung Familie.** $f_{m}(x)=mx+d$ gegen eine feste Parabel. Menge $\Delta(m)=0$ für Tangenz.
2. Vertikale Verschiebung einer Linie. $f_{t}(x)=mx+t$ . Wiederum $\Delta(t)=0$ markiert die Tangente.
3. Vertikale Verschiebung eines Parabels. $g_{s}(x)=a(x-h)^{2}+(s-k_{0})$ . Die Wurzelzahl wird umgedreht, wenn der Scheitelpunkt die $x$ -Achse kreuzt.
4. **Horizontale Folie.** $g_{t}(x)=a(x-t)^{2}+k$ . Die Achse bewegt sich mit $t$ . Meetings mit einer festen Linie ändern sich mit $t$ .

**Beispiel 1.** Gemeinsames Abfangen mit einem gleitenden zweiten Treffen: Eine Linie durch einen festen Punkt auf der Parabel trifft die Parabel in der Regel woanders wieder. Das zweite Treffen kann aus der Differenzgleichung nach Aufhebung der bekannten Wurzel $(x-x_{0})$ gelöst werden.

### Opening constraints

Manchmal multipliziert ein Parameter den führenden Koeffizienten für Beispiel $g_{a}(x)=ax^{2}+bx+c$ . Dann "öffnet sich nach oben" bedeutet $a>0$ , und Treffen mit einer festen Linie werden Bedingungen auf $a$ durch eine diskriminierende Ungleichheit.

---

## 7.10 Wiederaufbau und angewandte Geschichten

### Rebuild a line

Eine nicht vertikale Linie wird festgelegt durch:

- Steigung und ein Punkt, oder
- zwei verschiedene Punkte oder
- Steigung und Interception.

Zwei Punkte bestimmen

$$
m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}},\qquad f(x)=y_{1}+m(x-x_{1}).
$$

### Rebuild a parabola

Common sufficient data:

| Daten | Typische Rekonstruktion |
| --- | ---
| Zwei Wurzeln $r,s$ und führende $a$ | $g(x)=a(x-r)(x-s)$ |
| Vertex $(h,k)$ und ein weiterer Punkt | $g(x)=a(x-h)^{2}+k$ , lösen für $a$ |
| Drei nicht-kollineare Punkte | Lösen Sie das $3\times 3$ System für $a,b,c$ |
| Roots und der Wert an einem zusätzlichen Punkt | Faktorisierte Form mit unbekannt $a$ , dann kalibrieren |

**Beispiel 1.** Vertex $(2,5)$ und Punkt $(0,1)$ :

$$
g(x)=a(x-2)^{2}+5,\qquad g(0)=4a+5=1\implies a=-1.
$$

So $g(x)=-(x-2)^{2}+5$.

**Beispiel 2.** Wurzeln bei $1$ und $5$ , monic Parabel:

$$
g(x)=(x-1)(x-5)=x^{2}-6x+5.
$$

Die Achse ist $x=3$ . Die Scheitelpunkthöhe ist $g(3)=-4$ . Eine Behauptung, dass der Peak $5$ ist, weil „einer der Wurzeln $5$ ist, ist Unsinn.

### Angewandte Geschichten verwenden die gleiche Algebra

| Story | Versteckte Funktion | Typische Prüfung fragt |
| --- | ---
| Taxi / Entleerungstank mit konstanter Geschwindigkeit | Linear | Steigung, Abfang, Verdopplungsfalle |
| Ballwurf / Bogen | Abwärts Parabel | Peak als Mittelpunkt der Bodenzeiten |
| Ticketeinnahmen | Oft quadratisch im Preis | Break-even Wurzeln, vertex Einnahmen |
| Kostensenkung | Aufwärts Parabel | Mindestkosten, Besprechungen mit einer Haushaltslinie |
| Profit | Revenue minus Kosten | Profit Peak braucht nicht gleich Revenue Peak |

Für einen Ball, der gerade nach oben mit den Bodenzeiten $t=r$ und $t=s$ geworfen wird,

$$
h(t)=a(t-r)(t-s)\qquad(a<0),
$$

und die größte Höhe tritt im Mittelpunkt $(r+s)/2$ auf. Nach der Spitze fällt die Höhe. Behauptungen, dass "die Höhe nach dem Höhepunkt steigt", sind falsch.

Umsatzspitze gegenüber Gewinnspitze: Wenn die Kosten auch von der gleichen Variable abhängen, unterscheiden sich die beiden Vertex-Standorte im Allgemeinen. Übertragen Sie den Umsatzvertex nicht auf das Gewinndiagramm, ohne neu zu berechnen.

---

## 7.11 Lesen von Graphen ohne gedruckte Formeln

Viele Prüfungsaufgaben zeigen eine solide Parabel und eine gestrichelte Linie mit Zecken, aber kein geschlossenes Formular. Der Arbeitsauftrag lautet:

1. Wiederherstellung der Parabel aus markierten Wurzeln, Scheitelpunkt oder ein paar Gitterpunkte.
2. Die Linie aus Abschnitten und Steigungshaken wiederherstellen.
3. Erst dann urteilen Behauptungen über Begegnungen, Lücken, Akkorde und Mittelpunkte.

**Beispiel 1.** Ein Quadrat mit nach unten gerichteter Einheit, das bei $(0,4)$ gipfelt und die Achse bei $x=\pm 2$ Kräfte trifft

$$
g(x)=4-x^{2}.
$$

Eine gestrichelte Linie durch $(0,2)$ mit Steigung $-1$ Kräften

$$
f(x)=-x+2.
$$

Meetings lösen $4-x^{2}=-x+2$ , also $(x-2)(x+1)=0$ . Meetings bei $x=-1$ und $x=2$ . Das Produkt der Abszissen ist $-2<0$ . An der sich drehenden Abszisse $x=0$ sitzt die Linie in der Höhe $2$ , während die Kurve bei $4$ sitzt, so dass die Linie zwei Einheiten unterhalb der Kurve ist, nicht oben.

Eine Sehne, die die Achskreuzungen $(\pm 2,0)$ verbindet, liegt auf der $x$ -Achse. Sie fällt nicht mit der gestrichelten Linie $y=-x+2$ zusammen.

---

## 7.12 Common errors

### Fehler 1: Verwechseln von Wurzeln mit dem Scheitelpunkt

Wurzeln sind $x$ -Abschnitte. Der Scheitelpunkt ist der Wendepunkt. Sie fallen nur in Sonderfällen zusammen (zum Beispiel eine doppelte Wurzel auf der Achse). "Der Scheitelpunkt ist an der Wurzel $x=3$ " ist normalerweise falsch, wenn es zwei verschiedene Wurzeln gibt.

### Fehler 2: Schreiben der Achse als $x=S$ anstelle von $x=S/2$

Wenn $S$ die Summe der Wurzeln ist, ist die Achse der Mittelpunkt $S/2$ .

### Error 3: “no real roots ⇒ no vertex”

Die Vertex-Formel benötigt niemals $\Delta\geq 0$ .

### Fehler 4: „positive Summe von Wurzeln ⇒ beide Wurzeln positiv

Gegensätzliche Zeichen können immer noch eine positive Summe produzieren. Überprüfen Sie das Produkt.

### Fehler 5: Erfinden eines $x^{3}$ Begriffs aus Nesting

Erweitern Sie $g(f(x))$ oder $f(g(x))$ . Für eine Linie und ein Parabel bleibt die höchste Kraft $x^{2}$ . Fügen Sie nicht $1+2=3$ hinzu.

### Fehler 6: Angenommen, die Nesting-Reihenfolge spielt keine Rolle

 $g(f(x))$ und $f(g(x))$ können beide quadratisch sein und dennoch unterschiedliche Funktionen haben. Überprüfen Sie mit einem Testpunkt.

### Fehler 7: Denken einer vertikalen Verschiebung bewegt die Achse

Durch Ändern von $c$ oder Hinzufügen einer Konstante wird der Graph vertikal verschoben. Die Achse bleibt stehen.

### Fehler 8: Verwechseln einer Sekantenebene für die $x$ -Achse

Eine horizontale gestrichelte Linie in der Höhe $k\neq 0$ ist nicht die Achse. Treffen mit dieser Linie sind nicht die Wurzeln von $g$ .

### Error 9: forcing a parabola onto arithmetic table data

Constant first differences mean linear. Constant second differences mean quadratic.

### Fehler 10: "Die Linie verdoppelt sich, wenn sich $x$ verdoppelt"

Nur wahr für Linien durch den Ursprung. Ein Nullpunkt bricht die reine Proportionalität.

### Error 11: transferring a revenue peak onto a profit peak

Different objective functions have different vertices.

### Fehler 12: Anzugeben, dass eine Zeile ein Parabel dreimal treffen kann

Die Differenz $g-f$ hat höchstens $2$ .

### Error 13: wrong completed-square sign

Von $x^{2}+bx$ ist das abgeschlossene Quadrat $\left(x+\dfrac{b}{2}\right)^{2}-\left(\dfrac{b}{2}\right)^{2}$ . Das Ablegen des Minuszeichens ruiniert die Scheitelpunkthöhe.

### Fehler 14: "Ändern $c$ ändert nie die Wurzeln"

Das tut es normalerweise. Es bewegt die Achse nicht, aber Wurzeln hängen von $c$ ab.

### Fehler 15: Lesen der Durchschnittsrate, als ob es die sofortige Steigung eines Parabels wäre

Auf einem Parabel entspricht die durchschnittliche Rate über $[x_{1},x_{2}]$ der Steigung des Akkords, was der Ableitung im Mittelpunkt entspricht, nicht an einem Endpunkt. Für Kapitel 7 vergleiche die Durchschnittsraten sorgfältig und behandeln Sie sie nicht als Steigung eines linearen Modells, es sei denn, die Funktion ist linear.

---

## 7.13 Difficult exam-style tasks

Die acht Aufgaben unten werden aus dem Kurs Kapitel 7.5 Bank genommen (Schwierigkeit $5/5$ ). Jeder ist ein Wahr/Falsch-Pack. Arbeiten Sie von der Tabelle, Formel oder Zahlendaten, nicht von einem Slogan. Wenn der Live-Kurs eine Figur oder einen unbedruckten Tisch zeigt, werden die benötigten Werte ausgeschrieben, damit Sie hier üben können.

### Exam task 1 — Sampled heights (table)

Für $n=0,1,2,3,4,5$ wird eine Sequenz $s_n$ aufgezeichnet. Es wird kein geschlossenes Formular geliefert.

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- | --- |
| $s_n$ | $3$ | $0$ | $-1$ | $0$ | $3$ | $8$ |

**Claims.**

1. Die einzigartige Quadratik durch die aufgeführten Punkte hat Wurzeln bei $n=1$ und $n=3$ .
2. Die Verlängerung des Konstanten-Sekunden-Differenz-Musters um einen Schritt nach $n=5$ ergibt $s_6=12$ .
3. Die Achse dieses interpolierenden Parabels ist $n=2$ , die eindeutig aufgeführte Eingabe der kleinsten Höhe.
4. Eine Linie, die mit $s_0$ und $s_5$ übereinstimmt, stimmt auch mit $s_2$ überein.
5. Die Scheitelpunkthöhe des interpolierenden Parabels ist gleich $-1$ .

**Lösung.**

First differences: $-3,-1,1,3,5$ . Second differences: $2,2,2,2$ . So $2a=2$ and $a=1$ . Matching der ersten Punkte erholt

$$
s_n=n^{2}-4n+3=(n-1)(n-3).
$$

Wurzeln bei $1$ und $3$ : Behauptung 1 wahr. Achse im Mittelpunkt $n=2$ , und $s_2=-1$ ist das einzigartig aufgeführte Minimum: Behauptungen 3 und 5 wahr.

Nächster Wert: Halten Sie die zweite Differenz $2$ , also ist die nächste erste Differenz nach $5$ $7$ , daher $s_6=8+7=15$ , nicht $12$ . Behauptung 2 falsch.

Linie durch $(0,3)$ und $(5,8)$ hat Steigung $1$ , so dass bei $n=2$ $5$ vorhergesagt wird, aber $s_2=-1$ . Behauptung 4 falsch.

**Answers.** Wahr, Falsch, Wahr, Falsch, Wahr.

### Exam task 2 — Ticket desk revenue (applied table)

Ein Club verkauft die Eintrittspreise $p$ Euro. Der Gesamtumsatz $R$ wird zu fünf Preisen beobachtet. Es wird keine Formel gedruckt.

| $p$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| --- | --- | --- | --- | --- | --- |
| $R$ | $7$ | $12$ | $15$ | $16$ | $15$ |

**Claims.**

1. Unter den aufgeführten Preisen tritt das einzigartige Maximum in der Mitte der beiden Preise auf, bei denen der Umsatz gleich $15$ ist.
2. Rebuilding eine quadratische von der konstanten zweiten Differenz gewinnt führenden Koeffizient $-1$ .
3. Umsatz steigt bei jedem aufgeführten Schritt von $p=1$ auf $p=5$ .
4. Das interpolierende Parabel hat Wurzeln $0$ und $8$ , so dass seine Achse $p=4$ ist.
5. Die Erhöhung des Preises von $4$ auf $5$ verringert die aufgeführten Einnahmen um $1$ Euro.

**Lösung.**

Erste Unterschiede: $5,3,1,-1$ . Zweite Unterschiede: $-2,-2,-2$ Also $2a=-2$ und $a=-1$ . Matching $R(1)=7$ erholt sich

$$
R(p)=p(8-p)=-p^{2}+8p.
$$

Einnahmen $15$ treten bei $p=3$ und $p=5$ auf; der Mittelpunkt ist $p=4$ , wobei $R=16$ das eindeutig aufgeführte Maximum ist. Behauptung 1 wahr. Behauptung 2 wahr. Behauptung 3 falsch, weil der Schritt von $4$ nach $5$ fällt. Wurzeln $0$ und $8$ geben Achse $p=4$ : Behauptung 4 wahr. Von $16$ bis $15$ ist ein Tropfen von $1$ : Behauptung 5 wahr.

**Answers.** Wahr, Wahr, Falsch, Wahr, Wahr.

### Prüfungsaufgabe 3 - Besprechungen, Vertex und ein Umschreiben in $f$

Es sind $f(x)=x+1$ und $g(x)=x^{2}-4x+1$ . Arbeite in Symbolen; es wird keine Figur geliefert.

**Claims.**

1. Die Summe der sich treffenden Abszissen der beiden Graphen ist gleich $5$ .
2. Die Achse von $g$ ist $x=2$ , was die Hälfte der Vieta-Summe der Wurzeln von $g$ ist.
3. Der Scheitelpunkt von $g$ liegt $3$ Einheiten unterhalb der horizontalen Achse.
4. Das Produkt der Wurzeln von $g$ ist gleich $1$ , entspricht $g(0)$ .
5. $g(x)=f(x)^{2}-6\,f(x)+6$ .

**Lösung.**

Treffen: $x^{2}-4x+1=x+1$ gibt $x^{2}-5x=0$ , also $x=0$ oder $x=5$ .

Für $g$ , Summe von Wurzeln $4$ , Achse $x=2$ : Behauptung 2 wahr. Scheitelpunkthöhe $g(2)=4-8+1=-3$ : Behauptung 3 wahr. Produkt $c/a=1$ und $g(0)=1$ : Behauptung 4 wahr.

Erweitern Sie das Rewrite:

$$
(x+1)^{2}-6(x+1)+6=x^{2}-4x+1=g(x).
$$

Behauptung 5 wahr.

**Answers.** Wahr, Wahr, Wahr, Wahr, Wahr.

### Exam task 4 — Sliding slope family

Für jedes reelle $t$ lassen Sie $f_{t}(x)=tx$ und $g(x)=x^{2}+1$ . Studieren Sie, wie die Linienfamilie das feste Parabel trifft.

**Claims.**

1. Tangenz tritt genau an den beiden Steigungen $t=2$ und $t=-2$ auf.
2. Die Graphen vermissen einander nie: Jedes reale $t$ erzeugt mindestens eine Besprechung.
Für $t=0$ treffen sich die Graphen an zwei reellen Punkten, weil $x^{2}+1$ Faktoren über den Realen.
4. Wenn $t=3$ die Graphen einander vermissen, weil $|t|>2$ eine negative Diskriminante erzwingt.
5. Die Achse von $g$ hängt von $t$ ab, und für $t=0$ fällt diese Achse mit der Linie $f_{0}$ zusammen.

**Lösung.**

Meetings lösen $x^{2}-tx+1=0$ . Diskriminant $\Delta(t)=t^{2}-4$

- verpassen, wenn $|t|<2$ ;
- Tangenz, wenn $t=\pm 2$ ;
- zwei Treffen, wenn $|t|>2$ .

Behauptung 1 wahr. Behauptung 2 falsch (fehlen, wenn $|t|<2$ ). Behauptung 3 falsch ( $t=0$ gibt $x^{2}+1=0$ , keine echte Wurzel). Behauptung 4 falsch ( $t=3$ gibt $\Delta=5>0$ , zwei Sitzungen). Achse von $g$ ist $x=0$ für jede $t$ , und $f_{0}$ ist die horizontale Linie $y=0$ , nicht die vertikale Achse: Behauptung 5 falsch.

**Answers.** Wahr, Falsch, Falsch, Falsch, Falsch.

### Prüfungsaufgabe 5 - Rebuild von Vertex und einem Punkt

Ein Parabel hat Vertex $(2,-3)$ und geht durch $(0,5)$ . Es öffnet sich nach oben.

**Claims.**

1. Der Dehnungsfaktor in Scheitelpunktform ist gleich $2$ , also ist die umgebaute Regel $g(x)=2(x-2)^{2}-3$ .
2. $g(4)=g(0)=5$ , die Symmetrie eines Parabels über $x=2$ .
3. $g(1)=-1$ und $g(3)=-1$ , so dass diese beiden Eingänge gleich weit von der Achse $x=2$ .
Der Scheitelpunkt liegt oberhalb der horizontalen Achse, daher haben beide gegebenen Punkte $(0,5)$ und $(2,-3)$ eine positive Höhe.
5. Die Regel ist $g(x)=(x-2)^{2}-3$ .

**Lösung.**

Starten Sie von $g(x)=a(x-2)^{2}-3$ . Verwenden Sie $(0,5)$ :

$$
4a-3=5\implies 4a=8\implies a=2.
$$

Also $g(x)=2(x-2)^{2}-3$ . Behauptung 1 wahr. Behauptung 5 falsch. Symmetrie über $x=2$ ergibt $g(4)=g(0)=5$ und $g(1)=g(3)=-1$ : Behauptungen 2 und 3 wahr. Die Scheitelhöhe $-3$ liegt unterhalb der Achse und der Punkt $(2,-3)$ ist nicht positiv: Behauptung 4 falsch.

**Answers.** Wahr, Wahr, Wahr, Falsch, Falsch.

### Exam task 6 — Line inside a square (nesting)

Es sind $f(x)=x+1$ und $g(x)=x^{2}$ . Studieren Sie die verschachtelten Regeln $g(f(x))$ und $f(g(x))$ .

**Claims.**

1. Die verschachtelte Regel $g(f(x))$ erweitert sich zu einem perfekten Quadrat, so dass ihr Scheitelpunkt auf der horizontalen Achse liegt.
2. Die verschachtelte Regel $f(g(x))$ hat die gleiche Symmetrieachse wie $g$ .
3. Die beiden verschachtelten Regeln sind als Funktionen identisch.
4. Die verschachtelten Regeln $g(f(x))$ und $f(g(x))$ haben den gleichen Scheitelpunkt.
5. Die höchste Potenz, die in $f(g(x))$ erscheint, ist $x^{3}$ .

**Lösung.**

$$
g(f(x))=(x+1)^{2}=x^{2}+2x+1,\qquad f(g(x))=x^{2}+1.
$$

Behauptung 1 wahr (vertex $(-1,0)$ auf der Achse). Behauptung 2 wahr (beide haben Achse $x=0$ ). Die Funktionen unterscheiden sich: $g(f(1))=4$ während $f(g(1))=2$ , also Behauptung 3 falsch. Die Eckpunkte $(-1,0)$ und $(0,1)$ unterscheiden sich, so Behauptung 4 falsch. Die höchste Leistung in $f(g(x))$ ist $x^{2}$ , nicht $x^{3}$ : Behauptung 5 falsch.

**Answers.** Wahr, Wahr, Falsch, Falsch, Falsch.

### Exam task 7 — Ball toss (figure)

Ein Ball wird gerade nach oben geworfen. Die Abbildung zeigt die Höhe $h$ (Meter) gegen die Zeit $t$ (Sekunden) als eine feste braune Kurve; die horizontale Achse ist Bodenhöhe. Die sichtbaren Grundzeiten sind $t=0$ und $t=6$ , und der markierte Peak hat eine Höhe $9$ .

**Claims.**

1. Die Zeit der größten Höhe ist der Mittelpunkt der beiden sichtbaren Bodenzeiten.
2. Die größte Höhe tritt bei $t=2$ auf, was der Mittelpunkt der beiden sichtbaren Bodenzeiten wäre.
3. Bei $t=1$ ist die Höhe größer als bei $t=5$ .
4. Nach dem Gipfel steigt die Höhe weiter an.
5. Die größte Höhe auf der Figur ist $8$ Meter, die Höhe entspricht $t=4$ .

**Lösung.**

Recover

$$
h(t)=t(6-t)=9-(t-3)^{2}.
$$

Peak im Mittelpunkt $t=3$ , Höhe $9$ . Behauptung 1 wahr. Behauptung 2 falsch (Namen $t=2$ ). Höhen bei $t=1$ und $t=5$ sind gleich ( $5$ ), so Behauptung 3 falsch. Nach der Spitze fällt das fertige Quadrat, so Behauptung 4 falsch. Die größte Höhe ist $9$ , nicht $8$ , also Behauptung 5 falsch.

**Answers.** Wahr, Falsch, Falsch, Falsch, Falsch.

### Exam task 8 — Vertical shift family

Für jedes reelle $s$ lassen Sie $g_{s}(x)=(x-2)^{2}+(s-4)$ . Studieren Sie, wie die vertikale Verschiebung den Graphen verändert.

**Claims.**

1. Für $s=3$ sitzt der Scheitelpunkt eine Einheit unter der Achse, so dass es zwei verschiedene reelle Wurzeln gibt, deren Mittelpunkt $x=2$ ist.
2. Für $s=4$ liegt der Scheitelpunkt auf der Achse, also gibt es eine doppelte Wurzel bei $x=2$ und keine andere.
3. Für $s=5$ sitzt der Scheitelpunkt eine Einheit über der Achse, also hat $g_{s}$ keine echte Wurzel.
4. Die Symmetrieachse von $g_{s}$ ist $x=2$ für jeden $s$ , weil sich der Term $(x-2)^{2}$ nie horizontal bewegt.
Die Scheitelpunkthöhe von $g_{s}$ ist gleich $s-4$ , so dass der Graph genau unter der Achse sitzt, wenn $s<4$ .

**Lösung.**

Achse $x=2$ für jede $s$ . Scheitelhöhe $s-4$ . Lösung $(x-2)^{2}=4-s$ :

- $s=3$ : zwei Wurzeln, Mittelpunkt $2$ ;
- $s=4$ : doppelte Wurzel bei $2$ ;
- $s=5$ : keine echte Wurzel.

Alle fünf Behauptungen sind wahr.

**Answers.** Wahr, Wahr, Wahr, Wahr, Wahr.

---

## 7.14 Zusammenfassung reference

| Question | What to do |
| --- | --- |
| Read a line $mx+c$ | Slope $m$ , $y$ -intercept $c$ , $x$ -intercept $-c/m$ if $m\neq 0$ |
| Opening of $ax^{2}+bx+c$ | Up if $a>0$ , down if $a<0$ |
| Axis of a parabola | $x=-b/(2a)$ |
| Vertex | $(h,g(h))$ with $h=-b/(2a)$ ; or read $(h,k)$ from vertex form |
| Complete the square | Reach $a(x-h)^{2}+k$ |
| Real roots | Solve $g(x)=0$ ; use $\Delta=b^{2}-4ac$ to count them |
| Vieta | Sum $-b/a$ , product $c/a$ ; axis $=(\text{sum})/2$ |
| Line meets parabola | Solve $g(x)=f(x)$ ; discriminant of $g-f$ counts meetings |
| Tangency | Discriminant of $g-f$ equals zero |
| Table: linear? | Constant first differences |
| Table: quadratic? | Constant second differences; with step $1$ , $2a=$ that gap |
| Nesting $g(f(x))$ or $f(g(x))$ | Expand; highest power stays $x^{2}$ ; order matters |
| Rewrite claim using a line | Replace the line by its formula and expand |
| Rebuild from vertex and a point | Start from $a(x-h)^{2}+k$ , solve for $a$ |
| Ball toss peak | Midpoint of the two ground times |
| Parameter root-count | Track vertex height or $\Delta(\text{parameter})$ |

Die zentralen Formeln sind

$$
f(x)=mx+c,,\quad g(x)=ax^{2}+bx+c\qquad(a\neq 0),
$$

$$
x_{\text{axis}}=-\frac{b}{2a},
$$

$$
g(x)=a\left(x+\frac{b}{2a}\right)^{2}-\frac{\Delta}{4a},
$$

$$
\Delta=b^{2}-4ac,
$$

$$
r+s=-\frac{b}{a},\qquad rs=\frac{c}{a},
$$

 $$
g(x)-f(x)=0\quad\text{for meetings}.
$$

**Arbeitsauftrag.** Nennen Sie, ob das Objekt eine Zeile, ein Parabel, eine Differenz, eine Tabelle oder eine Geschichte ist. Stellen Sie die Formel (oder den diskriminierenden Zustand) wieder her, bevor Sie eine Behauptung beurteilen. Für Graphen ohne gedruckte Formeln zuerst aus Ticks neu erstellen. Für verschachtelte Ausdrücke erweitern und vergleichen; erfinden Sie keinen Term $x^{3}$ . Für Vieta Behauptungen schreiben Sie Summe und Produkt explizit und denken Sie daran, dass die Achse die Halbsumme ist. Halten Sie Parameterfälle getrennt: zwei Meetings, Tangenz oder keine.

**Selbstkontrolle.** Kannst du Steigung und beide Abschnitte von $f(x)=mx+c$ lesen? Warum ist $a\neq 0$ für eine Quadratik wichtig? Wie bekommt man die Achse von Koeffizienten, und warum ist es $S/2$ statt $S$ ? Warum hat ein Parabel immer noch einen Scheitelpunkt, wenn $\Delta<0$ ? Wie oft kann eine Linie ein Parabel treffen? Was sagen Ihnen konstante erste und zweite Unterschiede in einer Tabelle? Nach der Erweiterung $g(f(x))$ für eine Linie und ein Parabel, warum ist die höchste Potenz $x^{2}$ , nicht $x^{3}$ ? Wie baut man ein Parabel aus einem Scheitelpunkt und einem zusätzlichen Punkt wieder auf? In einer Ball-Toss-Figur, wo ist der Peak relativ zu den Bodenzeiten? Und warum können eine Umsatzspitze und eine Gewinnspitze an verschiedenen Eingabemengen sitzen?
