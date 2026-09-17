# Kapitel 9 — Polynomfunktionen

Ein Polynom ist eine endliche Summe von Potenzen einer Variablen mit konstanten Koeffizienten. Das gleiche Objekt erscheint als Kubikgeschwindigkeitsgesetz, Lagerkosten, Temperaturplan, Graph mit zwei Umdrehungen oder eine kurze Tabelle mit Abtastwerten. Die Geschichten ändern sich. Die Algebra tut es nicht.

Dieses Kapitel beginnt mit der Definition von Grad und Leitkoeffizient und baut jedes Werkzeug auf, das die BBE-Aufgaben verwenden: Bewertung, Parität, Endverhalten, Wurzeln und Faktoren, Vielfalt, Summen und Produkte, Zusammensetzung, Treffen von Kurven, endliche Unterschiede, parametrische Familien und angewandte Modelle, die eine Formel mit einer Tabelle mischen. Die späteren Beispiele kombinieren mehrere Ideen, weil die schwierigen Fragen selten sagen Ihnen, welche Regel zu verwenden.

## Lernziele

Lesen Sie Grad, Leitkoeffizient und konstante Begriff aus jeder schriftlichen Form.
- Bewerten Sie ein Polynom und schreiben Sie es bei Bedarf in absteigenden Potenzen um.
- Entscheiden Sie gerade, ungerade oder weder von Koeffizienten oder von $p(-x)$ .
Prognostizieren Sie das Endverhalten aus dem Grad und dem Vorzeichen des führenden Koeffizienten.
- Verwenden Sie Wurzeln, Faktoren, den Faktor Menge und Multiplizität (Touch versus Cross).
- Verfolgen Sie, wie sich der Grad unter Summe, Differenz, Produkt und Zusammensetzung ändert, einschließlich Stornierung.
- Gebundene Wendepunkte und Zählen von Treffen zweier Polynomgraphen.
Diagnosegrad aus gleich beabstandeten Proben durch Subtraktion benachbarter Werte.
- Bauen Sie ein monisches Polynom aus einem Wurzelmuster, einschließlich fraktionierter Wurzeln, und lesen Sie die Summen und Produkte von Vieta.
Behandeln Sie Ein-Parameter-Familien: Wie viele echte Nullen, wo die Umdrehungen sitzen und was der Schiebebuchstabe tut.
- Lösen Sie angewandte Stiele, die die Differenzierung eines kubischen Modells mit Tabellendurchschnitten mischen.
- Entdecken Sie die üblichen Fallen, die Wahr / Falk Aussagen auf der Prüfung umdrehen.

---

## 9.1 Was ein Polynom ist

### Die Formel

Ein **Polynom** in einer Variablen $x$ ist eine Funktion der Form

$$
p(x)=a_n x^n+a_{n-1}x^{n-1}+\cdots+a_1 x+a_0,
$$

wobei $n$ eine nicht negative ganze Zahl ist, ist jede $a_i$ eine reelle Konstante und $a_n\neq 0$ wenn das Polynom nicht das Nullpolynom ist.

Die Zahl $n$ ist der ** Grad** von $p$ , geschrieben $\deg(p)=n$ . Der Koeffizient $a_n$ ist der **führende Koeffizient**. Die Konstante $a_0$ ist der **konstante Term**, und er ist gleich $p(0)$ .

Wenn der führende Koeffizient $1$ ist, wird das Polynom **monic** genannt. Viele Umbauaufgaben verlangen eine monische Kubik aus einem bestimmten Wurzelmuster.

Typical low degrees:

| Degree | Name | Beispiel |
| --- | --- | --- |
| $0$ | constant (nonzero) | $p(x)=5$ |
| $1$ | linear | $p(x)=2x-3$ |
| $2$ | quadratic | $p(x)=x^2-4x+1$ |
| $3$ | cubic | $p(x)=x^3-2x+4$ |
| $4$ | quartic | $p(x)=x^4-3x^2+5$ |

Das Nullpolynom $p(x)=0$ ist ein Spezialfall. Sein Grad wird oft undefiniert gelassen oder als $-\infty$ definiert, so dass Gradregeln für Produkte konsistent bleiben. Prüfungsaufgaben funktionieren fast immer mit Polynomen, die nicht null sind.

### Was ist kein Polynom

 $f(x)=2^x$ ist exponentiell: Die Variable sitzt im Exponenten. $f(x)=\sqrt{x}=x^{1/2}$ hat einen gebrochenen Exponenten. $f(x)=1/x=x^{-1}$ hat einen negativen Exponenten. $f(x)=|x|$ ist kein Polynom. $f(x)=\ln x$ ist kein Polynom.

Eine **Leistungsfunktion $ax^b$ aus Kapitel 8 ist nur dann ein Polynom, wenn $b$ eine nicht negative ganze Zahl ist. Summen verschiedener Potenzen, wie $x^3+x$ , sind Polynome, aber sie sind keine reinen Potenzfunktionen.

**Beispiel 1.** Let

$$
p(x)=5-3x^2+x^4.
$$

Rewrite in descending powers:

$$
p(x)=x^4-3x^2+5.
$$

Die höchste Überlebensleistung ist $x^4$ , also $\deg(p)=4$ . Der führende Koeffizient ist $1$ . Der konstante Term ist $5$ . Es gibt keinen Term $x^3$ und keinen Term $x$ : Diese Koeffizienten sind Null, aber Nullkoeffizienten ändern den Grad nicht.

**Beispiel 2.** Let

$$
q(x)=4x^3-x+5.
$$

Dann $\deg(q)=3$ und der führende Koeffizient ist $4$ . Der Koeffizient von $x$ ist $-1$ . Das Zitieren von $-1$ als Leitkoeffizient ist eine gemeinsame Vermischung zwischen den beiden Enden des Polynoms.

### Domain

Jedes Polynom wird für jedes reelle $x$ definiert. Es gibt keinen Nenner zum Verschwinden und keine gerade Wurzel einer negativen Zahl. Wenn eine Geschichte $q\ge 0$ für Quantität oder $t\ge 0$ für Zeit einschränkt, kommt diese Einschränkung von der Geschichte, nicht von der Algebra des Polynoms selbst.

---

## 9.2 Evaluation und Basic Reading

### Substitution

Um $p$ bei einer Zahl $a$ auszuwerten, ersetzen Sie jedes $x$ durch $a$ und vereinfachen Sie die Befugnisse.

**Beispiel 1.** Für $p(x)=x^3-2x+4$

$$
p(0)=4,\qquad p(1)=1-2+4=3,\qquad p(-1)=-1+2+4=5.
$$

Beobachten Sie die Zeichen sorgfältig, wenn die Eingabe negativ ist. Odd Powers Flip-Zeichen Selbst Befugnisse nicht.

### Constant term versus leading term

 $p(0)$ ist immer der konstante Begriff. Der führende Begriff $a_n x^n$ dominiert für große $|x|$ , aber er ist nicht $p(0)$ .

Behauptungen, die "die übrig gebliebene Konstante" mit "dem führenden Koeffizienten" verwechseln, erscheinen oft, wenn das Polynom in der Reihenfolge geschrieben wird, wie in $5-3x^2+x^4$ .

### Factored form

Ein Produkt linearer Faktoren ist immer noch ein Polynom. Die Erweiterung ist optional, wenn die Behauptung nur Wurzeln oder Grad benötigt.

**Beispiel 2.** Let

$$
p(x)=(x-1)(x+2)(x-3).
$$

Jeder Faktor trägt Grad $1$ , also $\deg(p)=3$ . Die Nullen sind $x=1$ , $x=-2$ und $x=3$ . Expanding Gives

$$
p(x)=x^3-2x^2-5x+6,
$$

aber Sie brauchen die erweiterte Form nicht, um zu antworten: "Wo verschwindet $p$ ?"

**Beispiel 3.** Let

$$
p(x)=(2x-1)(x^2+1).
$$

Das quadratische $x^2+1$ hat keine wirklichen Wurzeln. Die einzige wirkliche Wurzel kommt von $2x-1=0$ , also $x=\frac12$ . Der Grad ist immer noch $3$ , weil $x^2+1$ zum Grad $2$ beiträgt.

---

## 9.3 Gerade und ungerade Polynome

### Die Definitionen

Eine Funktion $p$ ist **even** wenn

$$
p(-x)=p(x)
$$

für jedes $x$ in der Domain. Sein Graph ist symmetrisch über die $y$ -Achse.

Eine Funktion $p$ ist **odd**

$$
p(-x)=-p(x)
$$

für jeden $x$ . Sein Graph ist durch den Ursprung symmetrisch.

Die meisten Polynome sind weder. Der Test ist mechanisch: Form $p(-x)$ und vergleichen.

### Ablesung des Koeffizienten

Für ein Polynom ist Parität ein Koeffizient, der liest:

- nur gerade Kräfte ( $x^0$ , $x^2$ , $x^4$ , ...) überleben in einem geraden Polynom;
- nur ungerade Potenzen ( $x$ , $x^3$ , $x^5$ , ...) überleben in einem ungeraden Polynom.

Wenn sowohl gerade als auch ungerade Potenzen mit Koeffizienten ungleich Null erscheinen, ist $p$ keines von beiden.

**Beispiel 1.** Let $p(x)=x^3-4x$ . Dann

$$
p(-x)=-x^3+4x=-(x^3-4x)=-p(x),
$$

Also ist $p$ ungerade.

**Beispiel 2.** Let $p(x)=x^4-3x^2+5$ . Es erscheinen nur gerade Kräfte, also ist $p$ gerade.

**Beispiel 3.** Let $p(x)=x^3+x^2$ . Dann

$$
p(-x)=-x^3+x^2,
$$

die weder $p(x)$ noch $-p(x)$ ist. Das Polynom ist weder gerade noch ungerade.

### Shifts destroy oddness

Wenn $p$ ungerade und $c\neq 0$ ist, dann

$$
q(x)=p(x)+c
$$

Rezensiv: Rezensiv: Rezensiv Eine ungerade Funktion muss $0$ an $0$ senden, so dass $q$ nicht ungerade sein kann. Vertikale Verschiebungen erhalten Gleichmäßigkeit, wenn $p$ gerade war, weil

$$
q(-x)=p(-x)+c=p(x)+c=q(x).
$$

Prüfungsstängel fügen oft eine Konstante hinzu und fragen, ob die Parität überlebt. Überprüfen Sie $q(0)$ zuerst für Ungerade.

### Gerade und ungerade Teile

Jedes Polynom teilt sich eindeutig als

$$
p(x)=p_{\mathrm{even}}(x)+p_{\mathrm{odd}}(x),
$$

wo

$$
p_{\mathrm{even}}(x)=\frac{p(x)+p(-x)}{2},\qquad
p_{\mathrm{odd}}(x)=\frac{p(x)-p(-x)}{2}.
$$

Sie brauchen selten die Formeln nach Namen. Sie brauchen die Gewohnheit, sogar Kräfte und ungerade Kräfte separat zu sammeln.

---

## 9.4 End behaviour

### Was "Anfang" und "Ende" hier bedeuten

Für jedes reelle $x$ wird ein Polynom definiert. Der Graph hat also keinen ersten oder letzten Punkt auf der Achse. Wenn wir sagen, wo der Graph **anfängt** und **endet**, meinen wir ganz links und ganz rechts:

- ganz links: Was passiert als $x\to-\infty$ ;
- ganz rechts: Was passiert als $x\to+\infty$ .

In beiden Richtungen steigt der Graph entweder ohne Grenze ( $+\infty$ ) oder fällt ohne Grenze ( $-\infty$ ). Diese beiden Enden sind das **Endverhalten**.

### Der Leitbegriff entscheidet über das Fernfeld

Für große $|x|$ folgt der Graph von $p$ seinem führenden Term $a_n x^n$ . Terme mit niedrigerem Grad werden im Vergleich dazu klein.

Zwei Fakten kontrollieren das Bild:

1. ob der Grad $n$ gerade oder ungerade ist;
2. das Vorzeichen des führenden Koeffizienten $a_n$ .

| Degree | Leading coefficient | Far left ( $x\to-\infty$ ) | Far right ( $x\to+\infty$ ) |
| --- | --- | --- | --- |
| even | $a_n>0$ | $+\infty$ | $+\infty$ |
| even | $a_n<0$ | $-\infty$ | $-\infty$ |
| odd | $a_n>0$ | $-\infty$ | $+\infty$ |
| odd | $a_n<0$ | $+\infty$ | $-\infty$ |

Seltsamer Grad: Die beiden Enden gehen ** entgegengesetzte ** Wege.

[[FIGURE:poly-ends-odd|Odd-degree polynomials. Solid curve: positive lead (left −∞, right +∞). Dashed curve: negative lead (left +∞, right −∞).]]

Sogar Grad: Die beiden Enden gehen den **samen ** Weg.

 [[FIGURE:poly-ends-even|Even-degree polynomials. Solid curve: positive lead (both ends +∞). Dashed curve: negative lead (both ends −∞).]]

**Beispiel 1.** Für $p(x)=-2x^3+x+1$ ist der Grad ungerade und $a_n=-2<0$ . So

 $$
p(x)\to-\infty\quad\text{as }x\to+\infty,
\qquad
p(x)\to+\infty\quad\text{as }x\to-\infty.
$$

**Example 2.** For $p(x)=x^4-3x^2+5$ , the degree is even and $a_n=1>0$ . Both ends go to $+\infty$ .

### Vergleich zweier Polynome im Unendlichen

Wenn $\deg(p)>\deg(q)$ , dann für große positive $x$ das Vorzeichen von $p(x)-q(x)$ stimmt mit dem Vorzeichen des führenden Begriffs von $p$ . Wenn die Grade gleich sind, vergleiche die führenden Koeffizienten der Differenz.

Ein Quartic mit positivem Blei sitzt schließlich über jedem Kubik. Eine ungerade Kubik mit negativem Blei fällt schließlich unter jede horizontale Linie ganz rechts.

---

## 9.5 Wurzeln, Faktoren und Multiplizität

### Wurzel und Null

Eine reelle Zahl $r$ ist ein **Wurzel** (oder **Null**) von $p$ , wenn $p(r)=0$ . Geometrisch trifft der Graph die $x$ -Achse bei $x=r$ .

### Factor Menge

Für ein Polynom $p$ und eine reelle Zahl $r$

 $$
p(r)=0\quad\text{if and only if}\quad (x-r)\text{ divides }p(x).
$$

Mit anderen Worten, $x-r$ ist ein Faktor genau dann, wenn die Substitution bei $r$ Null zurückgibt.

Der Begleiter Menge ist der **Restsatz**: Wenn $p$ durch $x-r$ geteilt wird, ist der Rest die Konstante $p(r)$ . Also wenn

**Beispiel 1 (ganzzahlige Wurzel).** Let $p(x)=x^3-4x^2+x+6$ . Dann

$$
p(2)=8-16+2+6=0,
$$

Also ist $x-2$ ein Faktor. Auch

$$
p(-1)=-1-4-1+6=0,
$$

Also ist $x+1$ ein Faktor.

**Beispiel 2 (fraktionelle Wurzel).** lassen

$$
p(x)=(2x-1)(x+2)(x-3).
$$

Eine Wurzel kommt von $2x-1=0$ , also

$$
x=\frac12.
$$

Überprüfen Sie den Faktor Menge durch Substitution:

$$
p\Bigl(\frac12\Bigr)=\Bigl(2\cdot\frac12-1\Bigr)\Bigl(\frac12+2\Bigr)\Bigl(\frac12-3\Bigr)=0\cdot\frac52\cdot\Bigl(-\frac52\Bigr)=0.
$$

Also teilt $x-\frac12$ $p$ . Wenn Sie den Bruch löschen, kann derselbe Faktor als Ganzzahl-Koeffizientenzeile $2x-1$ geschrieben werden:

$$
x-\frac12=\frac{1}{2}(2x-1).
$$

Beide Formen markieren dieselbe Wurzel. In der Prüfung kann eine Behauptung sagen " $x-\frac12$ ist ein Faktor" oder " $2x-1$ ist ein Faktor". Beide sind wahr für diese $p$ .

**Beispiel 3 (ein weiterer Bruchteil).** Es seien $q(x)=2x^3+x^2-x$ . Factor out $x$ zuerst:

$$
q(x)=x(2x^2+x-1)=x(2x-1)(x+1).
$$

Die Wurzeln sind $0$ , $\frac12$ und $-1$ . Insbesondere

$$
q\Bigl(\frac12\Bigr)=2\Bigl(\frac12\Bigr)^3+\Bigl(\frac12\Bigr)^2-\frac12=\frac14+\frac14-\frac12=0,
$$

Also wieder $x-\frac12$ (oder $2x-1$ ) ist ein Faktor. Eine falsche Behauptung könnte sagen, dass die einzigen Wurzeln Ganzzahlen sind; Die Hälfte ist leicht zu übersehen, wenn Sie nur $\pm 1,\pm 2$ testen.

### Multiplicity

If

$$
p(x)=(x-r)^m q(x)
$$

Mit $q(r)\neq 0$ und $m\ge 1$ ist dann $r$ eine Wurzel von **Multiplicity** $m$ .

- Multiplicity $1$ (einfache Wurzel): der Graph **kreuzt die Achse bei $r$ .
- Multiplicity $2$ (doppelte Wurzel): Der Graph **berührt** die Achse bei $r$ und dreht sich um.
- Höhere gleichmäßige Multiplizität: Berührungen und Wendungen.
Höhere ungerade Vielfalt: Kreuze, aber flacher als eine einfache Kreuzung.

**Beispiel 2.** Let

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

Es gibt eine doppelte Wurzel bei $x=1$ und eine einfache Wurzel bei $x=-3$ . Der Graph berührt $x=1$ und kreuzt $x=-3$ . Deutliche reale Nullen: zwei. Wurzeln gezählt mit Multiplizität: drei.

### Multiple Wurzeln und die Ableitung

Wenn $(x-r)^2$ $p$ teilt, dann verschwinden sowohl $p$ als auch $p'$ bei $r$ :

 $$
p(r)=0\quad\text{and}\quad p'(r)=0.
$$

Umgekehrt, für Polynome über den Realen, zwingt $p(r)=p'(r)=0$ $(x-r)^2$ $p$ zu teilen.

Eine einfache Wurzel von $p$ muss keine Wurzel von $p'$ sein. Eine Wurzel von $p'$ muss keine Wurzel von $p$ sein (es kann ein Wendepunkt außerhalb der Achse sein).

**Beispiel 3.** Für $p(x)=(x+1)^2(x-2)$

$$
p'(-1)=0
$$

wegen des quadratischen Faktors, aber

$$
p'(2)
$$

muss nicht Null sein: $x=2$ ist nur eine einfache Wurzel.

### Wie viele echte Wurzeln?

Ein Polynom von Nichtnull Grad $n$ hat **höchstens** $n$ reale Wurzeln, Multiplizität zählend, und höchstens $n$ verschiedene reale Wurzeln.

Ein Kubikum hat immer mindestens eine reelle Wurzel (seltsame Polynome mit reellen Koeffizienten kreuzen die Achse immer mindestens einmal). Es kann drei verschiedene reale Wurzeln oder eine reale Wurzel und zwei komplexe konjugierte Wurzeln oder ein wiederholtes reales Muster wie eine doppelte Wurzel plus eine einfache Wurzel haben.

Eine vertikale Verschiebung $p(x)+c$ behält den gleichen Grad, so dass sie immer noch höchstens $\deg(p)$ unterschiedliche reelle Wurzeln hat. Shifting kann nicht mehr Wurzeln schaffen, als der Grad erlaubt.

### Rebuilding a monic cubic

Wenn eine monische Kubik Wurzeln hat $r$ , $s$ , $t$ (aufgeführt mit Multiplizität), dann

$$
p(x)=(x-r)(x-s)(x-t).
$$

Erweitern Sie, wenn eine Behauptung nach Koeffizienten fragt.

**Vieta** für eine monische kubische $x^3+Ax^2+Bx+C$ sagt:

$$
r+s+t=-A,\qquad rs+rt+st=B,\qquad rst=-C.
$$

Die Summe der Wurzeln (mit Multiplizität) ist also das Negative des Koeffizienten $x^2$ .

**Beispiel 4.** Double Wurzel at $1$ , simple Wurzel at $-3$ :

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

Die Summe der Wurzeln mit der Multiplizität: $1+1+(-3)=-1$ , die mit $-A=-1$ übereinstimmt.

### Integer roots

Wenn ein monisches Polynom ganzzahlige Koeffizienten und eine ganzzahlige Wurzel $r$ hat, dann teilt $r$ den konstanten Term. Dies ist ein schneller Filter für Kandidaten Wurzeln, keine vollständige Lösungsmethode. Die meisten BBE-Stämme geben den Kandidaten oder der faktorisierten Form direkt.

---

## 9.6 Summen, Produkte und Zusammensetzung

### Grad einer Summe

Wenn $\deg(p)=n$ , $\deg(q)=m$ und $n>m$ , dann

$$
\deg(p+q)=n.
$$

Der führende Begriff von $p$ überlebt unverändert.

Wenn $n=m$ und die Leitkoeffizienten $a$ und $b$ sind, dann:

- wenn $a+b\neq 0$ , dann $\deg(p+q)=n$ mit Leitkoeffizient $a+b$ ;
- wenn $a+b=0$ , die oberen Terme aufheben und $\deg(p+q)<n$ (oder $p+q$ ist das Nullpolynom).

**Beispiel 1.** Lassen Sie $p(x)=x^3+x$ und $q(x)=-x^3+4x^2-2$ . Dann

$$
p+q=4x^2+x-2,
$$

der Grad $2$ hat, strikt kleiner als $3$ . Die Annullierung gleicher Leitbedingungen ist der ganze Sinn der Behauptung.

Für die Differenz $p-q$ mit gleichem Grad und führenden Koeffizienten $a$ und $b$ bricht sich die Spitzenleistung nur auf, wenn $a-b=0$ , also wenn $a=b$ . Wenn $a=-b\neq 0$ , dann $p+q$ abbricht, während $p-q$ den Grad $n$ behält.

### Grad eines Produkts

Wenn $p$ und $q$ ungleich Null sind,

$$
\deg(p\cdot q)=\deg(p)+\deg(q).
$$

Leitkoeffizienten multiplizieren sich. Es gibt keine Streichung des Top-Begriffs in einem Produkt von Polynomen, die nicht null sind.

**Beispiel 2.** A non-constant linear factor times a cubic produces a degree- $4$ polynomial.

### Composition multiplies degrees

Wenn $\deg(p)=n\ge 1$ und $\deg(q)=m\ge 1$ dann

$$
\deg\bigl(q(p(x))\bigr)=nm,\qquad
\deg\bigl(p(q(x))\bigr)=nm.
$$

Beide Zusammensetzungen haben den gleichen Grad. Sie sind normalerweise **nicht ** das gleiche Polynom.

**Beispiel 3.** Lassen Sie $p(x)=x^2$ und $q(x)=x^3+1$ . Dann

$$
q(p(x))=(x^2)^3+1=x^6+1,
$$

$$
p(q(x))=(x^3+1)^2=x^6+2x^3+1.
$$

Gleicher Grad $6$ , verschiedene Formeln. Nesting ist nicht kommutativ.

Wenn $p$ nicht konstant ist, ist $q(p(x))$ nur in degenerierten Fällen eine Nicht-Null-Konstante, die Ihnen die Prüfung fast nie gibt. Für gewöhnliche ungleich Null $q$ von positivem Grad ist $q(p(x))$ nicht konstant.

### Quadrat eines Quadrats

Expressions such as

$$
\bigl(x^2+ax+b\bigr)^2-(x^2+ax+b)
$$

Erweitern Sie sich im Allgemeinen auf den Grad $4$ . Berücksichtigen Sie die gemeinsame Quadratik, wenn Wurzeln benötigt werden:

$$
u^2-u=u(u-1)
$$

mit $u=x^2+ax+b$ .

---

## 9.7 Graphen, Wendepunkte und Meetings

### Turning points

Ein **Wendepunkt** ist ein Ort, an dem sich der Graph von steigend zu fallen oder von fallend zu steigen ändert. Bei einem Turn ist die Steigung Null, also

$$
p'(x)=0.
$$

Wenn $\deg(p)=n$ , dann $\deg(p')=n-1$ , also $p'$ hat höchstens $n-1$ reelle Wurzeln. Ein Polynom des Grades $n$ weist daher höchstens $n-1$ Wendepunkte auf.

| Grad von $p$ | Grad von $p'$ | Höchstens wie viele Drehungen |
| --- | ---
| $2$ | $1$ | $1$ |
| $3$ | $2$ | $2$ |
| $4$ | $3$ | $3$ |

Ein Kubikum kann zwei Umdrehungen, eine Umdrehung oder keine haben (zum Beispiel ein streng ansteigendes Kubikum).

**Beispiel 1.** Für $p(x)=x^3-3x$

$$
p'(x)=3x^2-3=3(x-1)(x+1).
$$

Es gibt zwei Umdrehungen, bei $x=-1$ (lokal max) und $x=1$ (lokal min). Die gleiche Kubik kommt von $-\infty$ links und geht zu $+\infty$ rechts.

 [[FIGURE:poly-turning-points|A cubic with two turning points. Far left: the graph comes from −∞. Far right: it goes to +∞. The marked peaks are the turns.]]

### Eine Skizze lesen

Prüfungszahlen für Kubik zeigen oft:

- drei verschiedene Achskreuzungen (drei einfache reale Wurzeln);
- oder eine Berührung und ein Kreuz (doppelte Wurzel plus einfache Wurzel);
- oder eine einzelne Kreuzung (eine echte Wurzel).

Zwischen aufeinanderfolgenden Wurzeln einer glatten Funktion gibt es mindestens einen Wendepunkt. Ein Kubikum, das sich dreimal kreuzt, muss sich mindestens zweimal drehen, und da ein Kubikum höchstens zwei Umdrehungen hat, dreht es sich genau zweimal, einmal in jeder Lücke zwischen den Wurzeln.

### Sitzungen mit horizontaler Linie

Eine gestrichelte horizontale Linie $y=c$ auf der Figur fragt, wie viele Lösungen

$$
p(x)=c
$$

hat. Zählen Sie die Kreuzungen der Kurve mit dieser gestrichelten Linie. Jede Kreuzung ist ein Treffen.

 [[FIGURE:poly-horizontal-line|The solid cubic meets the dashed line y = c three times, so p(x) = c has three real solutions for that height c.]]

Wenn Sie die gestrichelte Linie über dem lokalen Maximum anheben, verschwinden einige Meetings. Wenn Sie Menge $c=0$ , sind die Treffen genau die Wurzeln.

### Treffen zweier Polynome

Die Graphen von $p$ und $q$ treffen sich, wo

$$
p(x)-q(x)=0.
$$

Wenn $p-q$ nicht das Nullpolynom ist, ist die Anzahl der Treffen höchstens $\deg(p-q)$ .

**Beispiel 2.** Eine Kubik und eine Linie: $p(x)-(\ell x+m)$ ist immer noch Grad $3$ , wenn der $x^3$ -Koeffizient der Kubik ungleich Null ist, also höchstens drei Sitzungen.

Eine quartic und eine quadratische: die Differenz hat Grad höchstens $4$ , also höchstens vier Sitzungen.

Wenn führende Begriffe abbrechen, kann die Differenz einen niedrigeren Grad als das ursprüngliche Polynom haben, und die Anzahl der Besprechungen fällt damit.

### Local behaviour near a double root

In der Nähe einer doppelten Wurzel sieht der Graph aus wie ein Parabel, das die Achse berührt. Behauptungen, dass „die Abbildung drei verschiedene Kreuzungen zeigt, sind falsch, wenn einer der Achsenkontakte nur eine Tangenz ist.

---

## 9.8 Tabellen ohne Formel (endliche Unterschiede)

### Wofür dieser Abschnitt ist

Manchmal gibt Ihnen die Prüfung **nicht ** die Polynomformel. Es gibt nur eine Tabelle von Werten, für Beispielabstand alle $10$ Sekunden, oder Kosten an den Ausgängen $0,1,2,3,\ldots$ .

Sie müssen noch Fragen beantworten wie:

- Wie hoch könnte das sein?
- Was ist der nächste fehlende Wert?
- Wo ist eine Wurzel (eine Null in der Tabelle)?
Welcher Zeitblock hatte die höchste Durchschnittsgeschwindigkeit?

**Endliche Unterschiede** sind das Werkzeug dafür. Der Name klingt schwer. Die Idee ist die gewöhnliche Subtraktion in einer Spalte.

### Schritt 1: Schreibe die Sprünge

Angenommen, die Eingaben sind gleich beabstandet (gleicher Schritt jedes Mal: $1$ , oder $10$ , oder eine beliebige feste $h$ ). Listen Sie die Ausgänge in einer Zeile auf. Schreiben Sie unter ihnen, wie viel jeder Wert zum nächsten gesprungen ist:

 $$
\text{first difference}=\text{next value}-\text{this value}.
$$

Diese Sprünge sind die **ersten Unterschiede **.

Machen Sie dasselbe mit den ersten Unterschieden. Diese neuen Sprünge sind die **zweiten Unterschiede **. Machen Sie weiter, wenn es nötig ist.

### Schritt 2: Lesen Sie den Grad, ab dem die Zeile konstant wird

Wenn der Schritt festgelegt ist und die Tabelle wirklich von einem Polynom des Grades $n$ kommt:

Wenn diese Zeile konstant wird Der Grad ist |
| --- | ---
| erste Unterschiede | $1$ (linear) |
| zweite Unterschiede | $2$ (quadratisch) |
| dritte Unterschiede | $3$ (kubisch) |
| vierte Unterschiede | $4$ (Quartal) |

So:

- konstante erste Differenzen bedeuten eine gerade Linie;
- konstante zweite Differenzen bedeuten ein Parabel;
- konstante dritte Differenzen bedeuten eine Kubik;
- und so weiter.

Wenn sich die zweiten Unterschiede noch ändern, ist die Tabelle **nicht ** quadratisch. Dieser eine Menge tötet viele Falsche Behauptungen.

**Beispiel 1.** Samples

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | --- | --- | --- | --- | --- |
| $p(x)$ | $1$ | $2$ | $9$ | $28$ | $65$ |

Erste Unterschiede: $1,7,19,37$ (nicht konstant).

Zweite Unterschiede: $6,12,18$ (nicht konstant).

Third differences: $6,6$ (constant).

Der Tisch passt also kubisch. Eine Behauptung, dass $p$ quadratisch sein könnte, ist falsch, weil die zweiten Unterschiede nicht konstant sind.

**Beispiel 2.** Samples

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- |
| $p(x)$ | $4$ | $0$ | $-2$ | $-2$ | $0$ | $4$ |

First differences: $-4,-2,0,2,4$.

Second differences: $2,2,2,2$ (constant).

Der Tisch ist quadratisch. Mit Schritt $1$ bedeutet konstante zweite Differenz $2$ Leitkoeffizient $1$ für $ax^2+\cdots$ , weil diese Konstante gleich $2a$ ist. Auch $p(-1)=0$ und $p(2)=0$ , also $x+1$ und $x-2$ sind Faktoren.

Um das nächste Sample bei $x=4$ vorherzusagen: setzen Sie die konstante zweite Differenz $2$ fort. Die nächste erste Differenz ist $4+2=6$ , also ist der nächste Wert $4+6=10$ .

### Wo Sie dies in der Praxis anwenden

1. **Grad-Diagnose.** "Ist das kubisch?" Prüfen Sie, ob sich dritte Differenzen auf eine Konstante einstellen.
2. **Nächster Wert.** Erweitern Sie die konstante Differenzreihe um einen Schritt und bauen Sie den nächsten Tabelleneintrag neu auf.
3. **Wurzeln von einem Tisch.** Eine Null in der Ausgabezeile ist eine Wurzel. Dann gilt der Faktor Menge.
4. **Zug / Liefertabellen.** Abstand gegen die Zeit: Die ersten Unterschiede über jeden Block sind die in diesem Block zurückgelegten Meter. Teilen Sie durch den Zeitschritt, um die durchschnittliche Geschwindigkeit in diesem Block zu erhalten. Der Whole-Trip-Durchschnitt ist die Gesamtentfernung über die Gesamtzeit. Konvertieren Sie m/s in km/h mit dem Faktor $3.6$ , wenn die Behauptung km/h verwendet.
5. **Lokale Spitzen auf einem Tisch. ** Schauen Sie sich die Abfolge der Intervallgeschwindigkeiten an. Ein lokales Maximum ist ein Wert höher als beide Nachbarn oder ein Plateau, das auf beiden Seiten fällt. Zwei separate Plateaus mit einem Dip zwischen ihnen sind ** zwei ** Spitzen, nicht eine.

Sie brauchen keinen ausgefallenen Namen für die Methode in der Antwort. Sie brauchen die Subtraktionen und die Regel der konstanten Reihe.

---

## 9.9 Familien mit Schiebenummer (Parameter)

### Wofür dieser Abschnitt ist

Manchmal schreibt die Prüfung eine Formel, die noch einen Buchstaben enthält, für Beispiel

$$
p_a(x)=x^3-3x+a
$$

oder

$$
g_k(x)=x^3-kx.
$$

Dieser Buchstabe ist ein **Parameter **. Jede Auswahl des Buchstabens gibt ein anderes Polynom, aber sie gehören alle zur gleichen Familie.

Typical claims:

- Für welche Werte gibt es drei echte Wurzeln?
- bewegen sich die sich drehenden $x$ -Werte, wenn sich der Buchstabe ändert?
Ist jedes Element ungerade?
Gibt es einen Wert, der eine doppelte Wurzel ausmacht?

In diesem Abschnitt geht es also um ** eine Form mit einer Schiebesteuerung **, nicht um eine brandneue Theorie.

### Bild 1: Schieben Sie den Graphen nach oben oder unten

Take

$$
p_a(x)=x^3-3x+a.
$$

Der Buchstabe $a$ wird nur am Ende hinzugefügt. Das Hinzufügen einer Konstante bewegt den gesamten Graphen nach oben (wenn $a$ zunimmt) oder nach unten (wenn $a$ abnimmt). Es streckt den Graphen nicht seitlich.

Differentiate:

$$
p_a'(x)=3x^2-3.
$$

Es gibt kein $a$ in der Ableitung. So bleiben die Umdrehungen an den gleichen $x$ -Orten

$$
x=\pm 1
$$

für jeden $a$ . Nur die Höhe dieser Umdrehungen ändert sich:

$$
p_a(\pm 1)=\mp 2+a.
$$

**Wie viele Wurzeln?**

- Für $a=0$ hat $p_0(x)=x(x^2-3)$ drei verschiedene reelle Wurzeln.
- Wenn Sie zu weit nach oben oder unten rutschen, schneidet die $x$ -Achse das Wackeln nicht mehr dreimal. Dann bleibt nur noch eine echte Wurzel übrig.

**Double Wurzel.** Eine doppelte Wurzel benötigt sowohl $p_a(r)=0$ als auch $p_a'(r)=0$ . Für $r=1$ , das zwingt $a=2$ . Für $r=-1$ erzwingt es $a=-2$ .

**Praktische Nutzung.** Behauptungen über "die Wendepunkte hängen nicht von $a$ ab" beziehen sich auf die $x$ -Koordinaten. Die Punkte als Paare $(x,y)$ bewegen sich vertikal mit $a$ . Lesen Sie den Wortlaut.

### Bild 2: Ändern der linearen Dehnung

Take

$$
g_k(x)=x^3-kx=x(x^2-k).
$$

Jetzt sitzt der Brief vor $x$ , nicht als einfaches Add-on. Factoring zeigt die Wurzeln auf einmal:

- $x=0$ ist immer eine Wurzel;
- die anderen Wurzeln sind $x=\pm\sqrt{k}$ wenn $k>0$ .

Checkliste, die Sie wiederverwenden können:

| Frage | Antwort für $g_k$ |
| --- | ---
Ist jedes $g_k$ ungerade? Nur ungerade Kräfte erscheinen, für jeden $k$ . |
Drei verschiedene reale Nullen? | Genau wenn $k>0$ . |
| Wiederholte Wurzel? | Bei $k=0$ , wo $g_0(x)=x^3$ . |
| Nur eine echte Null? | Wenn $k<0$ . |
Wo sind die Turns? Für $k>0$ sitzen sie bei $x=\pm\sqrt{k/3}$ , also bewegen sie sich mit $k$ . |

**Praktische Nutzung.** Dies ist die Familie hinter vielen „Parametern $k$ / $m$ / $t$ Wahr/Falsch-Paketen: Ungerade für alle $k$ , Anzahl der Nullen und ob $g_k(2)=0$ für einen benannten $k$ (Ersatz und Überprüfung).

### Der Kontrast in einem Menge

- $p_a(x)=x^3-3x+a$ : Rutsche nach oben / unten. Turns halten die gleichen $x$ . Die Anzahl der Wurzeln kann sich ändern.
- $g_k(x)=x^3-kx$ : Strecken Sie den linearen Teil. Turns bewegen sich mit $k$ . Die Wurzelzahl ändert sich mit dem Vorzeichen von $k$ .

Sie brauchen fast nie eine diskriminierende Formel nach Namen. Fügen Sie bei der Prüfung den benannten Parameter ein, Faktor, wenn Sie können, und testen Sie die beanspruchte Wurzel durch Substitution.

---

## 9.10 Applied polynomial models

### Cost, revenue, height, temperature, speed

Die angewandten Stängel des Kapitels nennen ein Polynom von Zeit, Menge oder Ausgabe. Spätere Behauptungen sind gewöhnliche Polynomoperationen in Verkleidung:

- einen benannten Wert ersetzen;
- Lesegrad oder Leitkoeffizient;
Faktor, um positive Wurzeln zu sehen;
- Differenzieren, um Geschwindigkeit von der Position oder Beschleunigung von der Geschwindigkeit zu erhalten;
Vergleichen Sie ein Formelmodell mit einer aufgezeichneten Tabelle.

**Beispiel (Lagerhaus).** Wochenkosten

$$
C(q)=q^3-6q^2+20q=q(q^2-6q+20)
$$

für $q\ge 0$ . Das quadratische $q^2-6q+20$ hat diskriminante $36-80<0$ , so dass es nie verschwindet. Die einzige nicht negative Wurzel von $C$ ist $q=0$ . Behauptungen über eine andere positive Break-Even-Quote sind falsch.

### Differentiation inside a cubic speed law

Wenn die Geschwindigkeit kubisch ist,

$$
v(t)=at^3+bt^2+ct+d,
$$

Dann ist die Beschleunigung die quadratische

$$
a(t)=v'(t)=3at^2+2bt+c,
$$

und das Extrem der Beschleunigung löst $a'(t)=0$ , eine lineare Gleichung.

Eine Verzögerung im Augenblick bedeutet dort $a(t)<0$ . Minimale Beschleunigung in einem langen Intervall, wenn $a''>0$ (äquivalent, wenn der führende Koeffizient von $a$ positiv ist), tritt an diesem kritischen Punkt von $a$ auf.

### Mischformel und Tabelle

Eine Linie kann durch eine geschlossene kubische Form gegeben sein. Eine andere Linie kann nur durch eine Entfernungstabelle angegeben werden. Behandeln Sie sie separat. Importieren Sie die Ableitung des Cubic nicht in die Tabellenzeile. In der Tabellenzeile arbeiten Sie nur mit ersten Differenzen und Durchschnittswerten.

---

## 9.11 Common errors

### Fehler 1: Den konstanten Term mit dem führenden Koeffizienten verwechseln

In $5-3x^2+x^4$ ist die Konstante $5$ und die Leitung ist $1$ . Ordnung spielt keine Rolle, wenn Sie in absteigenden Mächten umschreiben.

### Fehler 2: Zitieren eines niedrigeren Koeffizienten als Lead

In $4x^3-x+5$ ist der Lead $4$ , nicht $-1$ .

### Error 3: forgetting cancellation in a sum

Gleicher Grad und entgegengesetzte Leitkoeffizienten machen $\deg(p+q)<n$ . Angenommen, der Grad bleibt immer bei $n$ ist falsch.

### Fehler 4: Hinzufügen von Grad unter Komposition

Zusammensetzung multipliziert Grad: $nm$ , nicht $n+m$ . Produkte fügen Grad hinzu. Tauschen Sie die beiden Regeln nicht.

### Error 5: assuming $p\circ q=q\circ p$

Gleicher Grad bedeutet nicht dasselbe Polynom.

### Error 6: counting a tangency as a crossing

Eine doppelte Wurzel ist eine eindeutige Null, und der Graph berührt statt kreuzt. "Drei Kreuzungen" scheitern, wenn ein Kontakt eine Berührung ist.

### Error 7: counting multiplicity totals as distinct zeros

 $x(x-3)^2(x+1)$ hat drei verschiedene Nullen, obwohl die Multiplizität insgesamt vier ist.

### Fehler 8: Denken, dass eine vertikale Verschiebung zusätzliche Wurzeln jenseits des Grades schafft

Grad wird durch Hinzufügen einer Konstante erhalten. Es bleiben höchstens $n$ verschiedene reale Wurzeln.

### Error 9: thinking every vertical shift preserves oddness

Eine Nicht-Null-Konstante tötet die Seltsamkeit, weil $q(0)\neq 0$ . Evenness überlebt.

### Fehler 10: Lesen der ersten Unterschiede als Beweis einer quadratischen

Constant first differences mean linear. Constant second differences mean quadratic. Constant third differences mean cubic.

### Fehler 11: Stoppen bei $p(r)=0$ , wenn die Behauptung $p'(r)=0$ benötigt

Wiederholte Faktoren erfordern beides. Eine einfache Wurzel erzwingt nicht $p'(r)=0$ .

### Fehler 12: Verwechseln stationärer Abszissen mit stationären Punkten als Paare $(x,y)$

Ein additiver Parameter kann die $x$ -Koordinaten beim Bewegen der $y$ -Koordinaten fix lassen. Lesen Sie den Wortlaut der Behauptung.

### Error 13: converting units incorrectly on average speed

Meter pro Sekunde zu Kilometer pro Stunde verwendet den Faktor $3.6$ . Der Whole-Trip-Durchschnitt verwendet die Gesamtentfernung über die Gesamtzeit, nicht die maximale Intervallgeschwindigkeit.

### Fehler 14: Behandlung von zwei Tischplateaus als ein lokales Maximum

Ein Eintauchen zwischen zwei gleichen Spitzen erzeugt zwei lokale Maxima der diskreten Geschwindigkeitsfolge.

### Fehler 15: Angenommen, ein Kubik hat immer drei verschiedene reale Wurzeln

Ungerade Grad garantiert mindestens eine echte Wurzel, nicht drei. Das Parameterfenster ist wichtig.

---

## 9.12 Difficult exam-style Beispiels

Die folgenden Stiele passen zum Stil der schwierigeren Aufgaben und gemischten Prüfungsgegenstände des Kapitels. Arbeite jeden Brief. Antworten und kurze Gründe folgen jedem Stamm.

### Beispiel A — Kubische Geschwindigkeit und Entfernungstabelle

Elisabeth fährt zwischen den Haltestellen $A$ und $B$ .

$$
v(t)=0.00002t^3-0.005t^2+0.4t.
$$

Zeile L2 zeichnet die Entfernung von $A$ alle $10$ Sekunden auf:

| $t$ (s) | $0$ | $10$ | $20$ | $30$ | $40$ | $50$ | $60$ | $70$ | $80$ | $90$ | $100$ | $110$ | $120$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| distance (m) | $0$ | $70$ | $160$ | $290$ | $430$ | $580$ | $730$ | $860$ | $1010$ | $1160$ | $1280$ | $1350$ | $1400$ |

Entscheiden Sie sich für Wahr oder Falsch:

**A.** Linie L1 verlangsamt sich bei $t=80$ .

**B.** Die minimale Beschleunigung von L1 auf dem Lauf wird vor $t=75$ erreicht.

**C.** Die durchschnittliche Geschwindigkeit von L2 von $A$ nach $B$ ist mehr als $45$ km/h.

**D.** Die Geschwindigkeit von L2 (aus der Tabelle) hat nur ein lokales Maximum.

**E.** Die höchste Intervallmittelgeschwindigkeit von L2 tritt zwischen $60$ und $70$ Sekunden auf.

**Lösungs.**

**A.** Wahr. Beschleunigung ist

$$
a(t)=v'(t)=0.00006t^2-0.01t+0.4.
$$

Dann $a(80)=-0.016<0$ , also verlangsamt sich L1.

**B.** Falsch. Minimieren Sie $a$ , indem Sie $a'(t)=0$ lösen:

$$
a'(t)=0.00012t-0.01=0\implies t=\frac{250}{3}\approx 83.3>75.
$$

**C.** Falsch. Whole-trip average:

$$
\frac{1400}{120}=\frac{35}{3}\ \mathrm{m/s},\qquad
\frac{35}{3}\cdot 3.6=42\ \mathrm{km/h},
$$

die nicht mehr als $45$ ist.

**D.** Falsch. Intervallgeschwindigkeiten (m/s): $7,9,13,14,15,15,13,15,15,12,7,5$ . Zwei separate Plateaus bei $15$ mit einem $13$ zwischen ihnen ergeben zwei lokale Maxima.

**E.** Falsch. Auf $[60,70]$ ist der Durchschnitt $13$ m/s, während mehrere Blöcke $15$ m/s erreichen.

---

### Beispiel B — Family $p_a(x)=x^3-3x+a$

Es seien $p_a(x)=x^3-3x+a$ .

**A.** Die stationären Abszissen von $p_a$ hängen nicht von $a$ ab.

**B.** Für $a=0$ gibt es drei verschiedene reale Wurzeln.

**C.** Für jedes reale $a$ gibt es drei verschiedene reale Wurzeln.

**D.** Es gibt eine einzigartige $a$ , für die $x=1$ eine doppelte Wurzel ist.

**E.** Der führende Koeffizient von $p_a$ hängt von $a$ ab.

**Lösungs.**

**A.** Wahr: $p_a'(x)=3x^2-3=0$ gibt $x=\pm 1$ für jedes $a$ . Die $y$ -Werte an diesen Abszissen bewegen sich mit $a$ , aber die Behauptung nennt hier nur Abszissen.

**B.** Wahr: $x^3-3x=x(x-\sqrt{3})(x+\sqrt{3})$ .

**C.** Falsch: big $|a|$ hinterlässt nur eine echte Wurzel.

**D.** Wahr: $p_a(1)=0$ und $p_a'(1)=0$ Kraft $-2+a=0$ , also $a=2$ .

**E.** Falsch: Der Lead ist immer $1$ .

---

### Beispiel C — Doppelwurzel und eine einfache Wurzel

Ein monisches kubisches $p$ hat eine doppelte Wurzel bei $x=1$ und eine einfache Wurzel bei $x=-3$ .

**A.** $p(x)=x^3+x^2-5x+3$.

**B.** $p'(1)=0$.

**C.** $p(-3)=0$ und $p'(-3)=0$ .

**D.** Der konstante Term von $p$ ist $3$ .

**E.** Die Summe der mit der Multiplizität gezählten Wurzeln ist $-1$ .

**Lösungs.**

**A.** Wahr:

$$
p(x)=(x-1)^2(x+3)=x^3+x^2-5x+3.
$$

**B.** Wahr: der quadratische Faktor Kräfte $p'(1)=0$ .

**C.** Falsch: $p(-3)=0$ , aber die Wurzel ist einfach, also $p'(-3)\neq 0$ .

**D.** Wahr: $p(0)=3$ .

**E.** Wahr: $1+1+(-3)=-1$ , passend zum Negativ des $x^2$ Koeffizienten.

---

### Beispiel D — Leading-term cancellation

Es seien $p$ und $q$ beide haben Grad $n$ , mit führenden Koeffizienten $a$ und $b$ , wobei $a+b=0$ und $a\neq 0$ .

**A.** Die höchste Potenz in $p+q$ ist strikt kleiner als $n$ .

**B.** Die höchste Potenz in $p-q$ ist immer noch $x^n$ .

**C.** Die höchste Potenz in $p\cdot q$ ist $x^{2n}$ .

**D.** $p+q$ muss das Nullpolynom sein.

**E.** Die Graphen von $p$ und $-q$ haben ganz rechts das gleiche Endverhalten.

**Lösungs.**

**A.** Wahr: Führende Begriffe annullieren in der Summe.

**B.** Wahr: führender Koeffizient von $p-q$ ist $a-b=a-(-a)=2a\neq 0$ .

**C.** Wahr: product degrees add.

**D.** Falsch: Niedrigere Begriffe können überleben. Die Stornierung des oberen Terms allein erzwingt nicht das Nullpolynom.

**E.** Wahr: $-q$ hat den führenden Koeffizienten $-b=a$ , den gleichen wie $p$ und den gleichen Grad, so dass die rechtsextremen Enden übereinstimmen.

---

### Beispiel E — Quadraturfaktor, Ableitung und Parität

Es seien $p(x)=(x+1)^2(x-2)$ .

**A.** $p'(-1)=0$.

**B.** $p'(2)=0$.

**C.** $p$ hat genau zwei verschiedene reelle Nullen.

**D.** $p(0)=-2$.

**E.** $p$ ist eine ungerade Funktion.

**Lösungs.**

**A.** Wahr: multiplicity $2$ at $x=-1$ .

**B.** Falsch: $x=2$ ist einfach.

**C.** Wahr: Nullen nur bei $-1$ und $2$ .

**D.** Wahr: $p(0)=(1)^2(-2)=-2$ .

**E.** Falsch: sowohl gerade als auch ungerade Potenzen erscheinen nach der Expansion und $p(0)\neq 0$ .

---

### Beispiel F — Composition degrees

Es sind $\deg(p)=n\ge 1$ und $\deg(q)=m\ge 1$ .

**A.** $\deg(q(p(x)))=nm$.

**B.** $\deg(q(p(x)))=n+m$.

**C.** $\deg(p(q(x)))=nm$ as well.

**D.** $p(q(x))$ und $q(p(x))$ sind immer das gleiche Polynom.

**E.** Wenn $p$ non-constant und $q$ non-constant ist, dann ist $q(p(x))$ non-constant.

**Lösungs.**

**A.** Wahr.

**B.** Falsch: Diese Regel gilt für Produkte, nicht für die Zusammensetzung.

**C.** Wahr.

**D.** Falsch: counterBeispiels such as $p(x)=x^2$ , $q(x)=x^3+1$ .

**E.** Wahr: degree $nm\ge 1$ .

---

### Beispiel G — Endliche Differenzen ohne geschlossene Form

Ein unbekanntes Polynom wird mit Einheitsabstand abgetastet:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| --- | --- | --- | --- | --- | --- | --- |
| $p(x)$ | $4$ | $0$ | $-2$ | $-2$ | $0$ | $4$ |

**A.** Die zweiten Unterschiede sind ständig $2$ , so dass ein Quadrat mit dem führenden Koeffizienten $1$ in die Spalten passt.

**B.** Der Faktor $x+1$ teilt $p$ .

**C.** Der Faktor $x-2$ teilt $p$ .

**D.** Die ersten Unterschiede sind nicht konstant, so dass die Proben nicht von einem linearen Polynom stammen.

**E.** Das Erweitern des gleichen Second-Differenz-Musters ergibt $p(4)=10$ .

**Lösungs.**

Alle fünf sind wahr. Erste Differenzen $-4,-2,0,2,4$ ; zweite Differenzen $2,2,2,2$ . Dann $p(-1)=p(2)=0$ , und das nächste Sample ist $4+6=10$ .

---

### Beispiel H — Odd family $g_k(x)=x^3-kx$

**A.** Für jedes reale $k$ ist $g_k$ ungerade.

**B.** Wenn $k=1$ , dann hat $g_k$ drei verschiedene reelle Nullen.

*Der Wert $k=0$ ist genau dann, wenn $g_k$ eine wiederholte reale Wurzel am Ursprung in dieser Familie hat.

**D.** Wenn $k=4$ , dann $g_k(2)=0$ .

**E.** Wenn $k=3$ , sind die stationären Punkte bei $x=\pm 1$ .

**Lösungs.**

Alle fünf sind wahr.

$$
g_k(-x)=-g_k(x)
$$

Für jeden $k$ . Für $k=1$ , Nullen bei $-1,0,1$ . Für $k=0$ , $g_0(x)=x^3$ . Für $k=4$ , $g_4(x)=x(x-2)(x+2)$ . Für $k=3$ , $g_3'(x)=3x^2-3=0$ bei $\pm 1$ .

---

## 9.13 Zusammenfassung reference

Frage: Was tun?
| --- | ---
| Grad / Leitkoeffizient | Schreiben Sie in absteigenden Potenzen um; lesen Sie den höchsten Begriff von Null. |
| Constant term | Evaluate $p(0)$ , or read $a_0$ . |
| Even / odd / neither | Form $p(-x)$ , or inspect parity of powers. |
| End behaviour | Use degree parity and sign of $a_n$ . |
| Is $r$ a root? | Compute $p(r)$ . |
| Is $x-r$ a factor? | Factor theorem: same as $p(r)=0$ . |
| Multiplicity $\ge 2$ ? | Check $p(r)=p'(r)=0$ , or read a squared factor. |
Touch oder Cross? | Even multiplicity touches; odd multiplicity crosses. |
| Rebuild monic from roots | Write $\prod(x-r_i)$ and expand if needed. |
| Vieta sum of roots | For monic $x^3+Ax^2+\cdots$ , sum is $-A$ . |
| Degree of $p+q$ | Max of degrees, unless leading terms cancel. |
| Degree of $p\cdot q$ | Sum of degrees. |
| Degree of $q(p(x))$ | Product of degrees. |
| Turning-point budget | At most $\deg(p)-1$ . |
| Meetings of $p$ and $q$ | Roots of $p-q$ ; at most $\deg(p-q)$ . |
| Tabellengradtest | Nachbarwerte subtrahieren; die erste konstante Differenzzeile gibt den Grad an. |
| Nächster Tabellenwert | Erweitern Sie die Reihe konstante Differenz, dann einen Schritt neu aufbauen. |
| Parameter $p(x)+a$ | Graph slides up/down; turn $x$ -values stay put; root count may change. |
| Parameter $x^3-kx$ | Odd for all $k$ ; root count depends on the sign of $k$ ; turns move with $k$ . |
| Angewandte kubische Geschwindigkeit | Differenzieren für die Beschleunigung; Tabellenunterschiede separat verwenden. |

Central formulas:

$$
p(x)=a_n x^n+\cdots+a_0,\quad a_n\neq 0,\quad \deg(p)=n,
$$

$$
p(r)=0\iff (x-r)\mid p(x),
$$

$$
\deg(p\cdot q)=\deg(p)+\deg(q),
$$

$$
\deg(q\circ p)=\deg(q)\cdot\deg(p)\quad(\deg p,\deg q\ge 1),
$$

$$
\text{$n$-th differences constant}\iff \text{samples fit a degree-$n$ polynomial}.
$$

Für einen anatomischen Cubikum mit Wurzeln $r,s,t$ (mit Pluralität):

$$
p(x)=(x-r)(x-s)(x-t)=x^3-(r+s+t)x^2+\cdots.
$$

**Arbeitsauftrag.** Schreibe das Polynom um, wenn die Potenzen verwürfelt sind. Name Grad und führen vor der Beantwortung Form Behauptungen. Übersetzen Sie Wörter in eine Bewertung, eine Faktorprüfung, eine Ableitungsbedingung, eine Gradregel oder eine Differenztabelle. Auf gemischten Stielen halten Sie die geschlossene Linie und die Tabellenlinie getrennt. Halten Sie genaue Brüche bis zum endgültigen Vergleich.

**Selbstkontrolle.** Kannst du den Grad von $5-3x^2+x^4$ auf einen Blick finden? Warum hat $4x^3-x+5$ einen Leitkoeffizienten $4$ ? Wie testen Sie die Merkwürdigkeit, ohne zu expandieren? Was macht $-2x^3$ ganz links und ganz rechts? Warum gibt $p(r)=0$ einen Faktor $x-r$ , und wie funktioniert das für $r=\frac12$ ? Wie kann ein Kubik nur zwei verschiedene reale Nullen haben? Wann fällt $\deg(p+q)$ unter $\max(\deg p,\deg q)$ ? Warum ist $\deg(q\circ p)=nm$ statt $n+m$ ? Wie viele Umdrehungen kann ein Kubik haben, und wie zählt man Meetings mit einer gestrichelten horizontalen Linie? Was sagen Ihnen konstante dritte Unterschiede über eine Tabelle, wenn keine Formel angegeben wird? Wie unterscheidet sich das Hinzufügen von $a$ vom Setzen von $k$ vor $x$ in $x^3-kx$ ? Und warum kann ein Zugstamm sowohl $v'(80)<0$ als auch eine Frage zu ersten Unterschieden einer Entfernungstabelle in demselben Artikel stellen?
