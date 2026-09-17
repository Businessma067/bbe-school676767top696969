# Kapitel 8 — Potenzfunktionen

Eine Power-Funktion erhöht den Input auf einen festen Exponenten. Die gleiche Form erscheint als Kosten, die mit der Skala fallen, als Output, der mit der Arbeit wächst, als Preis, der mit der Quantität fällt, und als einfache Grafik wie $y=x^2$ oder $y=1/x$ .

Die Aufgaben in diesem Kapitel fragen immer wieder die gleichen wenigen Züge: Benennen Sie die Domäne, bewerten Sie eine ** Ebene **, skalieren Sie mit $k^{b}$ , stellen Sie einen Koeffizienten wieder her, komponieren Sie zwei Potenzen und lesen Sie ein Limit. Einige Artikel sind als reine Formeln geschrieben. Viele weitere sind **Textaufgaben**: ein Lagerhaus, ein Harzwürfel, eine Wartezeitregel, eine Nachfragekurve. Die Geschichte ändert sich. Die Algebra tut es nicht.

Polynome mit mehreren verschiedenen hinzugefügten Potenzen gehören zum nächsten Kapitel. Exponentielle Funktionen $a^x$ gehören zu Kapitel 10.

## Lernziele

Ich möchte sie wieder auf den Weg bringen.
- Entscheiden Sie die Domäne aus dem Exponenten: Ganzzahlen, Wurzeln und negative Potenzen.
- Erzählen Sie sogar Graphen aus ungeraden Graphen und sagen Sie, wenn die Funktion weder ist.
Vergleichen Sie $x^p$ und $x^q$ auf $(0,1)$ und auf $(1,\infty)$ .
- Lesen Sie Grenzen als $x\to\infty$ , als $x\to 0^+$ , und an einem Loch wie $x=0$ für $1/x$ .
- Invertieren Sie eine Power-Funktion und lösen Sie $ax^b=c$ .
- Erzählen Sie ein **level $f(x)$ von einer **scale $f(kx)/f(x)=k^b$ .
- Stellen Sie den Koeffizienten von einem geprüften Punkt wieder her und setzen Sie dann zwei Potenzen zusammen.
- Behandeln Sie isoelastische Nachfrage, Einnahmen und eine endliche prozentuale Veränderung, ohne sie mit $b$ mal dem Prozent zu verwechseln.
- Arbeiten Sie sowohl Formelelemente als auch **Textaufgaben** (Lagerhaus, Harzwürfel, Wartezeit, Nachfrage) mit der gleichen Algebra.
- Spot-affine Add-ons, Unit-Änderungen und durchschnittliche Produkt $f(x)/x$ .

---

## 8.1 Was eine Power-Funktion ist

### Die Formel

Eine **power-Funktion** hat die Form

$$
f(x)=ax^{b},
$$

Dabei ist $a\neq 0$ eine Konstante **Koeffizient** und $b$ eine Konstante **Exponent**. Der Eingang $x$ ist die Basis. Der Exponent ändert sich nicht mit $x$ .

Typische Elemente der Familie:

| Formel | Gleiche Form | Name, den Sie hören werden |
| --- | ---
| $x^2$ | $ax^2$ | quadratisch | $x^3$ | $ax^3$ | cube |
| $x^{1/2}=\sqrt{x}$ | $a\sqrt{x}$ | quadratische Wurzel |
| $x^{1/3}=\sqrt[3]{x}$ | $a\sqrt[3]{x}$ | cube Wurzel |
| $x^{-1}=1/x$ | $a/x$ | wechselseitig |
| $x^{-2}=1/x^2$ | $a/x^2$ | inverse Quadrat |

Die Konstante $a$ streckt den Graphen vertikal. Wenn $a<0$ , wird der Graph auch durch die $x$ -Achse gespiegelt.

### Was ist keine Power-Funktion

T0 ist exponentiell: Die Variable ist der Exponent. $f(x)=x^2+x$ ist ein Polynom mit zwei verschiedenen Potenzen. $f(x)=(x+1)^2$ erweitert sich zu $x^2+2x+1$ , was wiederum keine einzige Potenz ist. $f(x)=x^x$ ist keine Machtfunktion, weil der Exponent nicht konstant ist.

Eine lineare Funktion $f(x)=mx+c$ ist nur im Spezialfall $c=0$ eine Leistungsfunktion, wenn sie zu $f(x)=mx^1$ wird. Ein Nicht-Null-Abschnitt verdirbt die Form $ax^b$ .

**Beispiel 1.** Ein Lager erhebt eine Bearbeitungsgebühr

$$
C(q)=12q^{0.8}
$$

Euro zu verarbeiten $q$ Kisten. Dies ist eine Power-Funktion mit $a=12$ und $b=0.8$ . Die Gebühr

$$
C(q)=12q^{0.8}+40
$$

ist keine reine Power-Funktion, wegen der hinzugefügten $40$ .

**Beispiel 2 (Text).** Noras Druckerei stellt eine Reihe von $n>0$ -Kopien als feste Einrichtung und eine quadratische Gebühr in Rechnung,

$$
C(n)=F+A n^{1/2}.
$$

Ein $16$ -copy run kostet $250$ Euro. Ein $64$ -copy run kostet $450$ Euro. Ist $C$ eine Leistungsfunktion von $n$ ? Wiederherstellen $F$ und $A$ , dann entscheiden.

Die beiden Rechnungen sind

$$
F+4A=250, \qquad F+8A=450,
$$

weil $\sqrt{16}=4$ und $\sqrt{64}=8$ . Subtrahieren $F$ :

$$
4A=200 \quad\Rightarrow\quad A=50.
$$

Dann $F+4\cdot 50=250$ , also $F=50$ . Die wieder eingezogene Rechnung ist

$$
C(n)=50+50\sqrt{n}.
$$

Das $50$ Euro-Setup befindet sich außerhalb der Potenz von $n$ . $C$ ist also **nicht** eine Leistungsfunktion der Laufgröße, obwohl der variable Teil $n^{1/2}$ ist. Eine Aussage „die ganze Rechnung ist proportional zu $\sqrt{n}$ ist falsch. Eine Aussage "Einheitskosten $C(n)/n$ fallen, wenn $n$ wächst" kann immer noch wahr sein, weil das übrig gebliebene Setup auf mehr Kopien verteilt ist.

### Die Algebra, die Sie bereits brauchen

Auf den positiven Realen gelten die üblichen Machtregeln:

$$
x^{p}x^{q}=x^{p+q}, \qquad \frac{x^{p}}{x^{q}}=x^{p-q}, \qquad (x^{p})^{q}=x^{pq}, \qquad x^{0}=1 \ (x\neq 0).
$$

Also

$$
x^{-b}=\frac{1}{x^{b}} \quad (x\neq 0), \qquad x^{1/n}=\sqrt[n]{x}
$$

wenn die Wurzel definiert ist. Diese Identitäten sind, wie Sie eine Aussage umschreiben, bevor Sie sie als wahr oder falsch beurteilen.

**Beispiel 3.** Rewrite $\dfrac{8}{x^{3/2}}$ .

$$
\frac{8}{x^{3/2}}=8x^{-3/2}.
$$

Das ist eine Power-Funktion mit $a=8$ und $b=-3/2$ . Jetzt $x^{3/2}=(x^{1/2})^{3}$ , also ist eine gerade Wurzel beteiligt und $x=0$ wird durch den negativen Exponenten ausgeschlossen. Domain: $x>0$ .

Das Rewrite ist keine Dekoration. Exam Aussagen verbergen oft einen negativen Exponenten in einem Bruch. Sobald die Formel $ax^{b}$ ist, sind Domäne, Skala und Limits die übliche Checkliste.

---

## 8.2 Domain und Einschränkungen

Die **Domain** ist die Menge von real $x$ , für die $f(x)$ eine reelle Zahl ist. Bei Potenzfunktionen wird die Domain vom Exponenten entschieden. Überprüfen Sie immer drei Dinge: Division durch Null, sogar Wurzeln von negativen Zahlen und ob $x=0$ erlaubt ist.

### Positive integer exponents

Wenn $b=1,2,3,\ldots$ , dann ist $x^b$ für jedes reelle $x$ definiert. Insbesondere $0^b=0$ .

$$
f(x)=x^4 \quad\text{has domain }\mathbb{R}.
$$

### Negative integer exponents

Wenn $b=-1,-2,-3,\ldots$ , teilen Sie durch eine Potenz von $x$ , also ist $x=0$ verboten.

$$
f(x)=x^{-3}=\frac{1}{x^3}, \qquad \text{domain } \mathbb{R}\setminus\{0\}.
$$

### Wurzeln und gebrochene Exponenten

Schreiben Sie einen Bruch in niedrigsten Begriffen, $b=p/q$ mit $q>0$ .

- Wenn $q$ **odd** ist, ist $x^{p/q}=\sqrt[q]{x^p}$ für alle $x$ definiert, wobei $x^p$ Sinn macht. Cube Wurzeln von Negativen sind in Ordnung: $\sqrt[3]{-8}=-2$ .
- Wenn $q$ **even** ist, können Sie diese Wurzel einer negativen Zahl nicht in den Realen nehmen. Quadratische Wurzeln brauchen $x\ge 0$ , und wenn der Exponent auch negativ ist, müssen Sie auch $x=0$ fallen lassen.

Eine kompakte Tabelle für die Fälle, die in den Aussagen erscheinen:

| $f(x)$ | Domain |
| --- | ---
| $x^{2}$ , $x^{4}$ , $x^{3}$ | alle real $x$ | $\sqrt{x}=x^{1/2}$ | $x\ge 0$ |
| $\sqrt[3]{x}=x^{1/3}$ | alle real $x$ |
| $x^{2/3}=(\sqrt[3]{x})^{2}$ | alle real $x$ |
| $x^{3/2}=(\sqrt{x})^{3}$ | $x\ge 0$ |
| $1/\sqrt{x}=x^{-1/2}$ | $x>0$ |
| $1/x^{2}=x^{-2}$ | $x\neq 0$ |
| $x^{1/4}$ | $x\ge 0$ |

**Beispiel 1.** Ist $x=-8$ im Bereich von $f(x)=x^{2/3}$ ?

Ja. Nimm zuerst den Würfel Wurzel: $\sqrt[3]{-8}=-2$ . Dann quadratisch: $(-2)^{2}=4$ Also $f(-8)=4$ . Die gerade Macht ist nach der ungeraden Wurzel außen, so dass negative Eingänge erlaubt sind.

**Beispiel 2.** Ist $x=-8$ im Bereich von $g(x)=x^{3/2}$ ?

Nein. $x^{3/2}=(\sqrt{x})^{3}$ braucht eine quadratische Wurzel. $\sqrt{-8}$ ist nicht real. "Reparieren" Sie dies nicht, indem Sie es als $\sqrt{x^3}=\sqrt{-512}$ lesen, was ebenfalls nicht real ist.

Die Reihenfolge in $p/q$ ist für die Domäne wichtig, nicht nur der Dezimalwert des Exponenten.

### Zero as an input

Wenn $b>0$ , dann $0^b=0$ . Der Graph trifft auf den Ursprung.
- Wenn $b<0$ , dann ist $0^b$ undefiniert. Es gibt ein Loch, normalerweise eine vertikale Asymptote, bei $x=0$ .
- $0^0$ bleibt undefiniert. Prüfungen, die $x=0$ in $x^{0}$ einfügen, sollten als falsch oder außerhalb der üblichen Konvention $x^0=1$ für $x\neq 0$ behandelt werden.

**Beispiel 3.** Eine Aussage sagt: $f(x)=5x^{-0.4}$ ist definiert in $x=0$ und $f(0)=0$ .

Falsch. Der Exponent ist negativ, also würden Sie durch $0^{0.4}=0$ teilen. Die Funktion ist nur für $x>0$ definiert (und, wenn eine gerade Wurzel beteiligt ist, auch nicht für $x<0$ ). Hier $-0.4=-2/5$ , also $f(x)=5/x^{2/5}=5/(\sqrt[5]{x})^{2}$ . Die fünfte Wurzel existiert für Negative, aber $x=0$ ist immer noch out.

**Beispiel 4 (text).** A turbidity gauge reports

$$
R(t)=\frac{50}{t^{2}}
$$

Einheiten, $t$ Stunden nach einem Reset. Ein Kollege schreibt: "Beim Reset ist die Lesung $0$ , weil nichts Zeit hatte, das Wasser zu trüben."

Die Formel lautet $50t^{-2}$ . Der Exponent ist negativ, also ist $t=0$ nicht in der Domäne. Es gibt keine wirkliche Lektüre beim Reset. Der Graph hat dort eine vertikale Asymptote: Wenn $t\to 0^{+}$ der Index willkürlich groß wird, fällt er nicht auf $0$ . Die Geschichte über "keine Zeit zur Wolke" ist Chemie, nicht dieses Modell.

Ein zweites Instrument auf der gleichen Schicht zeichnet gelöste Last $D(t)=6\sqrt{t}$ auf. Dieser ** akzeptiert $t=0$ und $D(0)=0$ . Gleicher Buchstabe $t$ , zwei verschiedene Exponenten, zwei verschiedene Domänen. Kopieren Sie die Domain nicht von einer Formel auf die andere.

---

## 8.3 Graphen, gerade und ungerade

### gerade und ungerade

Eine Funktion ist **even**, wenn $f(-x)=f(x)$ für jedes $x$ in der Domäne ist (und $-x$ ist dann auch in der Domäne). Der Graph ist symmetrisch über die $y$ -Achse.

Eine Funktion ist **odd** wenn $f(-x)=-f(x)$ für jedes $x$ in der Domäne. Der Graph ist unter einer halben Umdrehung um den Ursprung symmetrisch.

Für $f(x)=x^{n}$ mit $n$ eine ganze Zahl:

- even $n$ (including $0$ if you count $x^0=1$) gives an even function;
- odd $n$ gives an odd function.

Also sind $x^2$ und $x^{-2}=1/x^2$ gerade. $x^3$ und $x^{-1}=1/x$ sind ungerade.

Eine Funktion, deren Domäne über $0$ nicht symmetrisch ist, kann nicht gerade oder ungerade sein. $\sqrt{x}$ ist nur für $x\ge 0$ definiert, ist also weder gerade noch ungerade. Nennen Sie es nicht, nur weil die Formel "sieht aus wie" eine Halbmacht.

**Beispiel 1.** Check $f(x)=4x^{-2}$ .

$$
f(-x)=4(-x)^{-2}=4x^{-2}=f(x).
$$

Sogar. Der Graph befindet sich auf beiden Seiten über der $x$ -Achse, und die beiden Flügel stimmen überein.

**Beispiel 2.** Check $g(x)=-x^{5}$ .

$$
g(-x)=-(-x)^{5}=-(-x^{5})=x^{5}=-g(x).
$$

Odd. Das Minuszeichen vorne zerstört nicht die Ungereimtheiten: es spiegelt nur den üblichen $x^5$ Graphen durch die $x$ -Achse wider.

 [[FIGURE:power-even-odd|Even power $x^{2}$ versus odd power $x^{3}$. Axes, ticks and a clip frame; $x^{3}$ leaves the window because it grows faster.]]

**Beispiel 3 (Text).** Das Signal eines Leuchtfeuers ist $S(x)=80/x^{3}$ Millivolt im Abstand $x>0$ Meter. Eine Aussage sagt: $S$ ist eine gerade Funktion, weil der Graph rechts von $0$ mit dem Graphen links übereinstimmen würde, wenn wir ihn zeichnen könnten.

Lehnen Sie die Behauptung ab. Die Domäne von $S$ ist $x>0$ , was nicht symmetrisch zu $0$ ist. Eine Funktion, die nicht für $-x$ definiert ist, kann nicht gerade oder ungerade sein. Das gleiche gilt für $T$ . Even / Odd ist ein Test, den Sie nur ausführen, nachdem die Domain überprüft wurde.

### Form auf der positiven Achse

Für $x>0$ und $a>0$ :

- wenn $b>0$ , beginnt der Graph am Ursprung (oder nähert sich ihm, wenn Sie nur $x>0$ betrachten) und steigt, wenn $x$ wächst;
- wenn $b<0$ , ist der Graph hoch in der Nähe von $0$ und fällt in Richtung $0$ , wenn $x$ wächst;
- wenn $b=0$ , ist der Graph die horizontale Linie $y=a$ (für $x\neq 0$ ).

Der Wert $b=1$ ist der Strahl $y=ax$ . Der Wert $b=2$ ist eine Parabel-Öffnung. Der Wert $b=1/2$ ist die rechte Quadrat-Wurzel-Kurve: steil bei $0$ , dann abflachend.

---

## 8.4 Erhöhen, Erniedrigen und Vergleichen von Exponenten

### Monotonicity on $(0,\infty)$

Angenommen $a>0$ . Dann ist $f(x)=ax^{b}$ auf $(0,\infty)$

- **strictly increasing** if $b>0$;
- **strictly decreasing** if $b<0$;
- constant if $b=0$.

Wenn $a<0$ , kehrt sich die Ungleichungen um: $ax^{2}$ mit $a<0$ nimmt ab, wenn $x$ durch positive Werte zunimmt.

Auf der ganzen realen Linie hängt die Geschichte von sogar versus ungerade. $x^2$ fällt auf $(-\infty,0]$ und steigt auf $[0,\infty)$ . $x^3$ steigt auf die gesamte $\mathbb{R}$ .

**Beispiel 1.** Eine Aussage sagt: $h(x)=x^{-1/3}$ steigt auf $(0,\infty)$ .

Falsch. Der Exponent ist negativ, so wie $x$ wächst der Würfel Wurzel wächst und $1$ über diesem Würfel Wurzel fällt. Überprüfen Sie zwei Punkte: $h(1)=1$ und $h(8)=1/2$ .

### Vergleich zweier Mächte

Für $x>0$ hängt das Ranking von $x^{p}$ und $x^{q}$ davon ab, ob $x$ kleiner als $1$ oder größer als $1$ ist.

Fix $p>q$ . Dann

$$
\begin{cases}
x^{p} < x^{q} & \text{if } 0<x<1,\\
x^{p} = x^{q} & \text{if } x=1,\\
x^{p} > x^{q} & \text{if } x>1.
\end{cases}
$$

Bei $x=1$ ist jede Potenz $1$ . Auf $(0,1)$ macht ein höherer Exponent einen kleineren Wert, weil Sie eine Zahl, die kleiner als $1$ ist, häufiger multiplizieren. Auf $(1,\infty)$ macht ein höherer Exponent einen größeren Wert.

**Beispiel 2.** Vergleichen Sie $x$ , $x^{2}$ und $x^{3}$ bei $x=1/2$ und bei $x=2$ .

$$
\left(\tfrac12\right)^{3}=\tfrac18 < \left(\tfrac12\right)^{2}=\tfrac14 < \tfrac12,
$$

$$
2^{3}=8 > 2^{2}=4 > 2.
$$

Eine Aussage " $x^{3}>x^{2}$ für alle $x>0$ " ist falsch. Es gilt nur für $x>1$ .

[[FIGURE:power-vergleichen| $y=x$ , $y=x^{2}$ und $y=x^{3}$ auf $[0,2]$ ]. Sie treffen sich bei $(1,1)$ . Danach wächst $x^{3}$ zuerst aus dem Fenster.]

**Beispiel 3.** Was ist größer, $\sqrt{0.09}$ oder $0.09^{2}$ ?

$$
\sqrt{0.09}=0.3, \qquad 0.09^{2}=0.0081.
$$

Hier erfüllen $0<0.09<1$ und die Exponenten $1/2<2$ , so dass die höhere Leistung kleiner ist, was mit $0.0081<0.3$ übereinstimmt.

### Extra-Output von einer weiteren Einheit

Prüfungsgeschichten fragen oft, ob "eine zusätzliche Stunde Arbeit" mehr Output in kleinem Maßstab als in großem Maßstab hinzufügt. Sie können dies mit zwei gewöhnlichen Unterschieden beantworten. Sie brauchen keine Ableitung.

Nimm $Q(L)=\sqrt{L}$ . Dann

$$
Q(4)-Q(1)=2-1=1, \qquad Q(9)-Q(4)=3-2=1,
$$

Aber die Schritte in $L$ waren $3$ und $5$ . Gleicher zusätzlicher Output erforderte später mehr zusätzliche Arbeit. Über gleiche Schritte von $1$ ,

$$
Q(4)-Q(3)=\sqrt{4}-\sqrt{3}\approx 0.268, \qquad Q(9)-Q(8)=\sqrt{9}-\sqrt{8}\approx 0.172.
$$

Die zusätzliche Ausgabe von einer weiteren Stunde ist kleiner, wenn $L$ bereits groß ist. Das ist das übliche Bild für $0<b<1$ . Für $b>1$ wächst der zusätzliche Output. Für $b=1$ bleibt es konstant.

**Beispiel 4 (Text).** Ernte folgt $Y(h)=2h^{1/3}$ Kilogramm nach $h$ Gießstunden. Acht Stunden geben $4$ kg. Ein Züchter sagt: "Eine zusätzliche Stunde nach $8$ Stunden fügt die gleichen Kilogramm hinzu wie eine zusätzliche Stunde nach $27$ Stunden, weil sich der Koeffizient $2$ nie ändert."

Der Koeffizient ist nicht der zusätzliche Output. Vergleichen Sie zwei gleiche einstündige Schritte:

$$
Y(9)-Y(8)=2\bigl(9^{1/3}-8^{1/3}\bigr)\approx 2(2.080-2)=0.160,
$$

$$
Y(28)-Y(27)=2\bigl(28^{1/3}-3\bigr)\approx 2(3.037-3)=0.074.
$$

Die zusätzliche Stunde ist später weniger wert. Der Exponent $1/3<1$ ist der ganze Grund. Eine Aussage, dass der zusätzliche Output konstant ist, würde $b=1$ benötigen.

---

## 8,5 Grenzen und Asymptoten

Ein **limit** beschreibt den Wert, dem sich $f(x)$ nähert, auch wenn $f$ nie dort landet. Potenzfunktionen haben drei Grenzen, die Sie in der Lage sein müssen, den Exponenten abzulesen.

### As $x$ becomes large

Für $a>0$ und $x\to\infty$ :

 $$
ax^{b} \to
\begin{cases}
\infty & \text{if } b>0,\\
a & \text{if } b=0,\\
0 & \text{if } b<0.
\end{cases}
$$

So wächst $x^{5}$ ohne Grenzen, und $1/x^{5}$ stirbt zu $0$ ab. Je größer $|b|$ ist, desto schneller wächst eine positive Leistung und desto schneller fällt eine negative Leistung auf $0$ .

Als $x\to-\infty$ werden nur ganzzahlige (oder ungerade Wurzel) Potenzen definiert. Selbst positive Kräfte gehen immer noch auf $+\infty$ (für $a>0$ ). Odd positive Kräfte gehen zu $-\infty$ . Negative gerade Kräfte gehen immer noch zu $0$ von oben. Negative ungerade Potenzen gehen zu $0$ von unten.

**Beispiel 1.** A Aussage says: “As $x\to\infty$ , $x^{-4}$ becomes large.”

Falsch. $x^{-4}=1/x^{4}$ becomes small. $\lim_{x\to\infty}x^{-4}=0$ .

### Wenn sich $x$ $0$ von rechts nähert

Für $a>0$ und $x\to 0^{+}$ :

 $$
ax^{b} \to
\begin{cases}
0 & \text{if } b>0,\\
a & \text{if } b=0,\\
\infty & \text{if } b<0.
\end{cases}
$$

Positive Kräfte gehen zum Ursprung. Negative Kräfte explodieren. Deshalb können $1/x$ und $1/\sqrt{x}$ keinen endlichen Wert bei $0$ erhalten.

Von links, $x\to 0^{-}$ , muss die Funktion für negativ $x$ definiert werden. Dann $1/x\to-\infty$ , während $1/x^{2}\to+\infty$ . Die beiden einseitigen Grenzen von $1/x$ bei $0$ sind nicht gleich, so dass $\lim_{x\to 0}1/x$ nicht existiert.

### Asymptotes

Wenn $b<0$ , ist die Linie $x=0$ eine ** vertikale Asymptote**. Die Linie $y=0$ ist eine **horizontale Asymptote** als $|x|\to\infty$ .

 [[FIGURE:power-reciprocal|$1/x$ (odd, sign change) and $1/x^{2}$ (even, always positive). Both have a hole at the origin: vertical asymptote $x=0$ and horizontal asymptote $y=0$.]]

**Beispiel 2.** Let $p(x)=3/x^{2}$ . Welche der folgenden sind wahr?

 $p(x)>0$ für alle $x\neq 0$ . Stimmt.
Falsch: Die Werte werden groß positiv.
- $\lim_{x\to\infty}p(x)=0$ .
- Der Graph kreuzt die $y$ -Achse. Falsch: $x=0$ befindet sich nicht in der Domain.

**Beispiel 3.** Eine Anforderungsfunktion ist $p(q)=18q^{-0.5}$ für $q>0$ . Wenn die nachgefragte Menge riesig wird, nähert sich der Preis $0$ . Wenn sich die Menge $0$ nähert, wird der Preis willkürlich groß. Beide Limits sind das Standard-Negativ-Exponentenbild, kein Programmierfehler im Modell.

**Beispiel 4 (Text).** Mediane Antwortzeit folgt $W(k)=216\,k^{-3/2}$ Millisekunden auf $k>0$ Server. Ein Manager behauptet zwei Dinge: "Mit einer sehr großen Farm setzt sich das Warten auf $216$ ms ein" und "in der Nähe von $k=0$ fällt das Warten auf $0$ ."

Beides sind die ausgetauschten Limits. Der Exponent ist negativ, also

 $$
\lim_{k\to\infty}W(k)=0, \qquad \lim_{k\to 0^{+}}W(k)=\infty.
$$

Eine große Farm fährt in Richtung $0$ , nicht in Richtung des Koeffizienten. Eine zusammenbrechende Farm lässt Warten explodieren, nicht verblassen. Die Zahl $216$ ist der Koeffizient, nicht eine Etage.

---

## 8.6 Level versus scale

Fast jede Aufgabe in diesem Kapitel ist eine von zwei Fragen. Sie zu mischen ist der schnellste Weg, um eine wahre Aussage falsch zu markieren.

### A level

Ein **level** ist ein Wert der Funktion an einem Eingang:

$$
f(x)=ax^{b}.
$$

Sie benötigen den Koeffizienten $a$ . Der Exponent wirkt auf $x$ , niemals auf $a$ . Also $5\cdot 3^{3}=5\cdot 27=135$ , nicht $5^{3}=125$ .

**Beispiel 1.** Masse $M(s)=5s^{3}$ Gramm. Dann $M(2)=5\cdot 8=40$ und $M(1)=5$ . Am Eingang der Einheit ist jede Leistung $1$ , so dass der Pegel gleich dem Koeffizienten ist. Dieser Zufall stirbt, sobald $s\neq 1$ .

### A scale factor

Eine **Skala fragt, was passiert, wenn die Eingabe mit $k>0$ multipliziert wird:

$$
\frac{f(kx)}{f(x)}=\frac{a(kx)^{b}}{ax^{b}}=k^{b}.
$$

Der Koeffizient hebt sich auf. Verdoppeln $a$ verdoppelt jede Ebene und lässt jedes Verhältnis unverändert.

| Exponent $b$ | Verdoppelung des Eingabemengen ( $k=2$ ) | Zehn Prozent extra ( $k=1.1$ ) |
| --- | ---
| $1$ | $\times 2$ | $\times 1.1$ ( $+10\%$ ) |
| $2$ | $\times 4$ | $\times 1.21$ ( $+21\%$ ) |
| $3$ | $\times 8$ | $\times 1.331$ ( $+33.1\%$ ) |
| $1/2$ | $\times\sqrt{2}\approx 1.414$ | $\times\sqrt{1.1}\approx 1.049$ |
| $-1$ | $\times 1/2$ | $\times 1/1.1\approx 0.909$ |
| $-2$ | $\times 1/4$ | $\times 1/1.21\approx 0.826$ |

Eine fünfzig Prozent breitere Platte ist $k=1.5$ , nicht "plus fünfzig Prozent der Farbe". Wenn die Grundierung als Radius zum Quadrat gilt, wird die Farbe mit $1.5^{2}=2.25$ multipliziert. Die Halbierung des Radius ist $k=0.5$ und $0.5^{2}=0.25$ , nicht $0.5$ . Prozentsatz nach oben und prozentual nach unten sind nicht einmal symmetrisch $b\neq 1$ .

**Beispiel 2.** Energieindex $E(v)=0.5 v^{2}$ . Eine Übergeschwindigkeit von zehn Prozent ist $k=1.1$ :

$$
1.1^{2}=1.21.
$$

Also $E$ steigt um $21\%$ , nicht um $10\%$ . Die Falle kopiert den Prozentsatz der Eingabe auf die Ausgabe. Der Koeffizient $0.5$ geht nie in das Verhältnis ein.

**Beispiel 3.** Ausgabe $Q(s)=8s^{1/2}$ . Das Vervierfachen des Personals ist $k=4$ , also wird die Ausgabe mit $4^{1/2}=2$ multipliziert, nicht mit $4$ . Eine Aussage, dass "viermal das Personal viermal die Kisten gibt" ist die $b=1$ Geschichte.

**Beispiel 4 (Text, ein vollständiger Prüfungsgegenstand).** Ein Würfelharzblock hat Masse $M(s)=5s^{3}$ Gramm für Seite $s>0$ Zentimeter. Beurteile diese fünf Behauptungen. Dies ist der gleiche Rhythmus wie die Praxisbank: Einige Buchstaben sind Ebenen, einer ist eine Skala, zwei sind Fallennummern.

1. Seite $2$ cm ergibt Masse $40$ Gramm.
Level. $M(2)=5\cdot 2^{3}=5\cdot 8=40$ . Der Exponent wirkt auf die Seite, niemals auf die $5$ .

2. Seite $3$ cm ergibt Masse $125$ Gramm. $M(3)=5\cdot 27=135$ , nicht $125$ . Die Zahl $125$ ist $5^{3}$ : jemand würfelte die Dichte und ignorierte die Seite. Falsch.

3. Verdoppeln der Seite multipliziert die Masse mit $8$ .
Maßstab. Der Koeffizient hebt auf:

   $$
   \frac{M(2s)}{M(s)}=2^{3}=8.
   $$

Stimmt. "Zweimal die Seite, zweimal die Masse" wäre Exponent $1$ . "Viermal die Masse" wäre die Gebietsgeschichte, Exponent $2$ .

4. Seite $1$ cm ergibt Masse $5$ Gramm.
Wahr, aber nur, weil jede Potenz von $1$ $1$ ist. Ein Leser, der $5$ würfelte, würde wieder auf $125$ landen und diesen Brief mit (2) verwechseln.

5. Seite $4$ cm ergibt Masse $240$ Gramm. $M(4)=5\cdot 64=320$ , nicht $240$ . Nichts in $5s^{3}$ erzeugt $240$ .

Schreibe die Formel. Höhe gegen Skala entscheiden. Setzen Sie den Exponenten niemals auf $a$ . Das ist das Kapitel in Miniatur.

### Überschreiten zweier Befugnisse

Wenn $F(n)=2n^{2}$ und $G(n)=n^{3}$ auf $n>0$ , dann

$$
G(n)-F(n)=n^{2}(n-2).
$$

Sie treffen sich bei $n=2$ . Für $n>2$ ist die Kubik größer. Für $0<n<2$ ist die Quadratik größer. Wie $n\to\infty$ , das Verhältnis $G/F=n/2\to\infty$ , nicht $1$ . Der höhere Exponent dominiert im Unendlichen.

**Beispiel 5 (Text).** Zwei Inspektionsrechnungen auf einer Charge von $n>0$ Dokumenten: automatisiert $C(n)=n^{2}$ und manuell $D(n)=16n$ . Auf einer Charge von $16$ kosten sie das gleiche, $256$ jeder. Eine Aussage sagt: "Vergangenes $16$ dokumentiert, dass die automatisierte Rechnung billiger ist, weil eine Maschine bei großen Chargen gewinnen sollte."

Die Lücke ist

$$
C(n)-D(n)=n(n-16).
$$

Für $n>16$ ist die Lücke **positiv**, also ist automatisiert teurer, nicht billiger. Die Quadratik wächst schneller, wenn Sie am Treffpunkt vorbei sind. Die Geschichte über Maschinen ist nicht die Algebra. Die Algebra ist das Zeichen von $n-16$ .

---

## 8.7 Calibration

Oft gibt der Stamm den Exponenten und einen auditierten Punkt. Dann

$$
a=\frac{f(x_0)}{x_0^{b}}.
$$

Danach verwendet jede andere Ebene dieses $a$ , und jede Skala ignoriert es immer noch.

**Beispiel 1.** $Q(s)=A s^{1/2}$ und $Q(25)=40$ . Dann $A\cdot 5=40$ , also $A=8$ und $Q(s)=8s^{1/2}$ . Die Vervierfachung des Personals verdoppelt immer noch die Leistung, auch wenn eine spätere Aussage vorgibt, $A$ sei $16$ .

Manchmal ist das Audit ein **Differenz** aus zwei Ebenen:

$$
A\bigl(x_2^{b}-x_1^{b}\bigr)=\text{recorded gain}.
$$

Lösen Sie für $A$ , dann gehen Sie weiter. Behandeln Sie den Gewinn nicht so, als wäre es eine einzelne Ebene $A x^{b}$ .

**Beispiel 2 (Text).** Warten Sie $W(k)=A k^{-3/2}$ Millisekunden für $k>0$ Server. Das Protokoll gibt nicht $A$ an. Es zeichnet nur auf, dass der Wechsel von $4$ -Servern zu $9$ -Servern die mittlere Wartezeit um genau $19$ ms kürzt. Wiederherstellen $A$ , dann $W(4)$ und $W(9)$ .

Die aufgezeichnete $19$ ist diese Differenz, keine Ebene:

$$
W(4)-W(9)=A\bigl(4^{-3/2}-9^{-3/2}\bigr)=19.
$$

Jetzt $4^{-3/2}=1/8$ und $9^{-3/2}=1/27$ , also

$$
A\Bigl(\frac{1}{8}-\frac{1}{27}\Bigr)=19, \qquad A\cdot\frac{19}{216}=19, \qquad A=216.
$$

Dann $W(4)=216/8=27$ und $W(9)=216/27=8$ . Ein Solver, der $19$ so behandelte, als wäre es $W(4)$ , würde den falschen Koeffizienten zurückgewinnen und jeder spätere Buchstabe würde ihm folgen.

Zwei Punkte können auch einen unbekannten Exponenten wiederherstellen. If $f(kx)/f(x)=r$ , then $k^{b}=r$ , so $b=\log r/\log k$ . You only need logarithms if $b$ is not a small integer you can test by matching powers, such as $1.2^{3}=1.728$ .

### Wechsel der Einheiten

Wenn $s$ in Metern ist und Sie auf Zentimeter umschalten, schreiben Sie eine lineare Änderung $s=0.01 u$ . Dann $as^{b}=a(0.01)^{b} u^{b}$ . Der Exponent bleibt $b$ ; der Koeffizient absorbiert den Einheitsfaktor. Eine Aussage, dass "Wechseleinheiten den Exponenten ändern" falsch ist.

---

## 8.8 Inverse, Zusammensetzung und Durchschnittsprodukt

### Lösung $ax^{b}=c$

$$
x=\Bigl(\frac{c}{a}\Bigr)^{1/b}
$$

wenn die wahre Wurzel existiert. Sogar eine ganze Zahl $b$ kann zwei echte Wurzeln ergeben, wenn $c/a>0$ . Odd $b$ gibt einen.

**Beispiel 1.** $2x^{3}=54$ gibt nur $x=3$ :

$$
x^{3}=27, \qquad x=3.
$$

Sogar Ganzzahl $b$ kann zwei echte Wurzeln geben: $x^{4}=16$ gibt $x=\pm 2$ . Eine Aussage, die nur die positive Wurzel auflistet, wenn $b$ gerade ist, ist unvollständig, es sei denn, die Domäne war bereits auf $x>0$ beschränkt.

### Inverse

Auf $(0,\infty)$ mit $a>0$ und $b\neq 0$

$$
y=ax^{b} \quad\Rightarrow\quad x=a^{-1/b} y^{1/b}.
$$

Der neue Exponent ist die Reziprozität. Wenn zwei Stufen sich gegenseitig rückgängig machen, multiplizieren sich ihre Exponenten mit $1$ und die Koeffizienten werden so abgestimmt, dass $g(f(x))=x$ .

**Beispiel 2.** $Q=4L^{1/2}$ invertiert zu $L=Q^{2}/16$ . Verdoppelung $Q$ multipliziert $L$ mit $4=2^{1/(1/2)}$ .

**Beispiel 3 (Text).** Ernte ist $Y(h)=2h^{1/3}$ auf $h>0$ . Ein Züchter will $10$ kg statt $4$ kg und fragt, ob die Bewässerungszeit noch eine Erntekraft ist.

Löse $2h^{1/3}=Y$ für $h$ :

$$
h=\Bigl(\frac{Y}{2}\Bigr)^{3}.
$$

Das ist ein Würfel einer linearen Funktion von $Y$ , immer noch eine Potenz von $Y$ . Bei $Y=10$

$$
h=\Bigl(\frac{10}{2}\Bigr)^{3}=125
$$

Stunden. Die Verdoppelung der Ernte von $4$ kg auf $8$ kg multipliziert Stunden mit $2^{3}=8$ , von $8$ Stunden auf $64$ Stunden. Wenn der Stamm $Y=2+h^{1/3}$ gewesen wäre, hätte die Inverse die Power-Funktionsklasse verlassen. Der Stamm hat keine Setup-Stunden, so dass die Inverse ein Monom bleibt.

### Zusammensetzung von zwei Mächten

Wenn $u=A x^{p}$ und $v=B u^{q}$ dann

$$
v=B A^{q} x^{pq}.
$$

Exponenten **multiply**. Koeffizienten kombinieren sich als $B A^{q}$ , nicht als $BA$ . Der innere Exponent $3/2$ und der äußere $2/3$ ergeben ein lineares Monom. Innenquadrat Wurzel und Außenquadrat geben auch Exponent $1$ .

**Beispiel 4.** Metall $M=8u^{3/2}$ , Stärke $S=\frac12 M^{2/3}$ . Dann

$$
S=\frac12\cdot (8u^{3/2})^{2/3}
=\frac12\cdot 8^{2/3}\, u
=\frac12\cdot 4\, u
=2u.
$$

Der innere Exponent $3/2$ und der äußere $2/3$ multiplizieren sich mit $1$ . Stärke ist proportional zur Reinheit. Ein rivalisierendes Zitat $S=2u+5$ ist **affin **. Es ist keine Power-Funktion, wegen des Interception. Sie treffen sich, wo $2u=1.8u+5$ , also $u=25$ , einmal, nicht "nie".

### Average product

Für $f(x)=ax^{b}$ auf $x>0$

$$
\frac{f(x)}{x}=ax^{b-1}.
$$

Der übrig gebliebene Exponent ist $b-1$ . Wenn $b<1$ , fällt das durchschnittliche Produkt **** als $x$ wächst. Wenn $b>1$ , es ** steigt **. Wenn $b=1$ , ist es konstant. Dies ist, wie Quadrat-Wurzel-Technologien und Kubikkosten auseinander erzählt werden, ohne ein Diagramm zu zeichnen.

**Beispiel 5 (Text).** Der Lagerdurchsatz beträgt $H(s)=8s^{1/2}$ Paletten pro Stunde mit $s>0$ Personal. Eine Aussage sagt: „Paletten pro Arbeiter bleiben konstant, wenn die Schicht vergrößert wird, weil sich die Technologie nie ändert.

Paletten pro Arbeiter ist das Durchschnittsprodukt

$$
\frac{H(s)}{s}=8s^{-1/2}.
$$

erblichen Exponenten negativ, so dass der Durchschnitt **falls** als $s$ wächst. Bei $s=16$ ist das durchschnittliche Produkt $2$ . Bei $s=64$ ist es $1$ . Die Technologie ist die gleiche Macht. Der Durchschnitt ist nicht konstant. Konstante durchschnittliche Produkt benötigen würde $b=1$ .

---

## 8.9 Nachfrage, Umsatz und eine endliche prozentuale Veränderung

Isoelastische Nachfrage ist eine Negativ-Power-Funktion, für Beispiel

 $$
q=Ap^{-3}\qquad\text{or}\qquad p=Aq^{-1/2}.
$$

Einnahmen sind $R=pq$ . Ersatz $p=A q^{-b}$ gibt

$$
R=A q^{1-b}.
$$

Wenn $b>1$ (elastisch), eine höhere Menge senkt den Umsatz. Wenn $0<b<1$ (inelastisch), erhöht eine höhere Menge Einnahmen. Wenn $b=1$ , ist der Umsatz die Konstante $A$ .

### Die Elastizitätsabkürzung gegenüber der genauen Skala

Ein $10\%$ Preisanstieg ist $k=1.1$ , nicht "add $0.10$ mal Exponent und Stop". Der genaue Mengenfaktor ist $k^{b}$ .

$$
\frac{q(1.1p)}{q(p)}=1.1^{-3}\approx 0.751.
$$

Die Quantität fällt um etwa $24.9\%$ . Die Abkürzung $3\times 10\%=30\%$ ist eine Vermutung erster Ordnung. Es übertreibt den Schnitt. Prüfungsaussagen bitten Sie oft, die genaue $k^{b}$ mit einer runden Schwelle wie $20\%$ oder $30\%$ zu vergleichen und separat zu sagen, ob die Einnahmen steigen oder fallen.

**Beispiel 1.** Hochelastische Nachfrage: Preis nach oben, Menge nach unten um mehr als der Preis stieg, also $pq$ fällt. Inelastische Nachfrage ist die entgegengesetzte Region für Einnahmen.

**Beispiel 2 (Text).** Monatliche Abonnements folgen $q(p)=A p^{-2}$ , und bei $5$ Euro verkauft der Dienst $400$ Abonnements. Einnahmen sind $R=pq$ . Ein vorgeschlagener Preisanstieg von $10\%$ soll die Menge um genau $20\%$ senken und den Umsatz steigern.

First recover $A$:

$$
A\cdot 5^{-2}=400 \quad\Rightarrow\quad A\cdot \frac{1}{25}=400 \quad\Rightarrow\quad A=10000.
$$

Also $q(p)=10000\,p^{-2}$ und $R(p)=10000\,p^{-1}$ . Ein $10\%$ Anstieg ist $k=1.1$ , nicht "zweimal $10\%$ , weil der Exponent $-2$ ist":

$$
\frac{q(1.1p)}{q(p)}=1.1^{-2}\approx 0.8264.
$$

Die Quantität fällt um etwa $17.4\%$ , nicht um $20\%$ und nicht um $30\%$ . Einnahmen zum neuen Preis ist

$$
R(5.5)=\frac{10000}{5.5}\approx 1818,
$$

Gegen $R(5)=2000$ . Einnahmen **fallen**. Für $q\propto p^{-2}$ ist der Exponent auf Einnahmen $1-2=-1$ , so dass ein höherer Preis $R$ . Die Elastizitätsabkürzung $2\times 10\%=20\%$ ist eine Vermutung erster Ordnung. Der genaue Faktor ist $k^{b}$ .

### Böden, Kappen und Lernkurven

A **floor** or **ceiling** is an inequality on top of the power, such as “cost cannot fall below $12$ ” or “output cannot exceed $400$ ”. Die Macht gibt immer noch die Formel; die Kappe kürzt sie ab. The formula $12+40x^{-1/2}$ is a floor plus a power, hence not a pure monomial.

Eine **Lernkurve** ist immer noch $ax^{b}$ mit $b<0$ (oder $0<b<1$ am kumulativen Output, abhängig vom Stamm). Zusätzliche Erfahrung senkt die Einheitsstunden. Eine $80\%$ Lernkurve bedeutet, dass die Verdoppelung der kumulativen Ausgabe die Einheitszeit mit $0.8=2^{b}$ multipliziert, also $b=\log 0.8/\log 2<0$ . Die gleiche Skala Identität wie in 8.6.

---

## 8.10 Common errors

1. **Exponent auf dem Koeffizienten. $5s^{3}$ bei $s=3$ ist $135$ , nicht $125=5^{3}$ .
2. **Scale kopiert als Level.** Verdoppelung $A$ verdoppelt $f(x)$ , nicht $f(kx)/f(x)$ .
3. ** Prozentsatz geerbt.** $k=1.1$ und $b=2$ geben $+21\%$ , nicht $+10\%$ .
4. ** Domain kopiert von einem Nachbarn. $\sqrt{x}$ lehnt Negative ab und akzeptiert $0$ . $x^{-2}$ akzeptiert Negative und weigert sich $0$ .
5. **Even/odd by eye.** $\sqrt{x}$ ist weder. $1/x^{2}$ ist gerade.
6. **Vergleichen von Potenzen ohne Aufteilung bei $1$ .** $x^{3}>x^{2}$ nur für $x>1$ .
7. ** Limits bei $0$ getauscht mit Limits bei $\infty$ .** Negative Exponenten sterben im Unendlichen und explodieren bei $0$ .
8. **Affine called a power.** $ax^{b}+c$ with $c\neq 0$ is not $ax^{b}$ .
9. ** Komposition als $BA$ statt $B A^{q}$ .** Der äußere Exponent trifft den inneren Koeffizienten.
10. **Inverses Fehlen der negativen Wurzel**, wenn $b$ gerade ist, oder Erfinden einer, wenn $b$ ungerade ist.
11. **Elastizität Abkürzung als genau behandelt. ** Verwenden Sie $k^{b}$ für eine endliche Änderung.
12. ** Durchschnittsprodukt mit dem gleichen Exponenten wie das Gesamtprodukt. ** Der übrig gebliebene Exponent ist $b-1$ .

---

## 8.11 Zusammenfassung reference

Frage: Was tun?
| --- | ---
Ist es eine Machtfunktion? | Kann es geschrieben werden $ax^{b}$ mit $b$ Konstante und keine zusätzliche Interception? |
Sogar Wurzel: $x\ge 0$ . Negativer Exponent: $x\neq 0$ . Beide: $x>0$ . Ungerade Ganzzahl: alle $x$ . |
Berechnen Sie $a x^{b}$ . Exponent nur auf $x$ . |
| Skala | $f(kx)/f(x)=k^{b}$ . Koeffizient hebt sich auf. |
| $10\%$ extra input | $k=1.1$ , Faktor $1.1^{b}$ , nicht $b\times 10\%$ . |
| Gerade oder ungerade | Überprüfen Sie $f(-x)$ nachdem die Domain symmetrisch ist. |
| $x\to\infty$ | $b>0\to\infty$ ; $b<0\to 0$ . |
| $x\to 0^{+}$ | $b>0\to 0$ ; $b<0\to\infty$ . |
| Kalibrieren | $a=f(x_0)/x_0^{b}$ , oder teilen Sie eine aufgezeichnete Differenz. |
| Komponieren $A x^{p}$ dann $B(\,\cdot\,)^{q}$ | Exponent $pq$ , Koeffizient $B A^{q}$ . |
| Inverse auf $(0,\infty)$ | $a^{-1/b} y^{1/b}$ . |
| Durchschnittsprodukt | $ax^{b-1}$ . Zeichen von $b-1$ sagt Aufstieg oder Fall. |
| Verdoppeln Sie die Ausgabe $Q=AL^{b}$ | Multiplizieren Sie $L$ mit $2^{1/b}$ . |
| Isoelastische Einnahmen | $R=A q^{1-b}$ von $p=A q^{-b}$ . |

Standard identities:

$$
f(x)=ax^{b}, \qquad \frac{f(kx)}{f(x)}=k^{b}, \qquad \frac{f(x)}{x}=ax^{b-1}.
$$

$$
f^{-1}(y)=a^{-1/b} y^{1/b} \quad (x>0,\ a>0,\ b\neq 0).
$$

**Arbeitsauftrag.** Schreibe $ax^{b}$ . Fix die Domain. Entscheiden Sie, ob die Behauptung eine Ebene, eine Skala, eine Kalibrierung, eine Zusammensetzung oder eine Grenze ist. Setzen Sie niemals den Exponenten auf den Koeffizienten. Kopieren Sie niemals einen Prozentsatz vom Eingang zum Ausgang, es sei denn $b=1$ . Überprüfen Sie affine Interceptions, bevor Sie etwas eine Power-Funktion aufrufen.

**Selbstkontrolle.** Warum ist $5\cdot 3^{3}$ nicht $125$ ? Warum bleibt die Verdoppelung des Koeffizienten $f(2x)/f(x)$ unverändert? Was ist $1.1^{2}$ als prozentualer Anstieg? Warum akzeptiert $\sqrt{x}$ $0$ und lehnt $-4$ ab, während $x^{-2}$ das Gegenteil tut? Wenn $u=8x^{3/2}$ und $v=\frac12 u^{2/3}$ , warum ist $v$ proportional zu $x$ ? Für $q\propto p^{-3}$ , ist ein $10\%$ Preisanstieg genau ein $30\%$ Mengenrückgang? Warum fällt $f(x)/x$ , wenn $0<b<1$ ? In einer Druckereirechnung $F+A\sqrt{n}$ , was verhindert, dass die gesamte Rechnung eine Macht von $n$ ist? Und wenn das Warten zwischen zwei Servern um $19$ ms fällt, warum ist das $19$ nicht der Koeffizient $A$ ?
