# Kapitel 6 — Ungleichungen

Ungleichungen auf der BBE Prüfung sind fast immer wahr/falsch Behauptungen über Lösung Mengen. Ein kurzer Stamm führt eine Situation ein, dann fünf unabhängige Aussagen jede Behauptung eine bestimmte Lösung Menge oder Eigentum. Ihre Aufgabe ist es, jede Aussage wahr oder falsch für sich zu markieren.

Dieses Kapitel ist ein Typ-für-Typ-Lehrleitfaden für jedes Ungleichheitsformat, das in der Praxis verwendet wird Mengen. Es umfasst die Erkennung, eine wiederholbare Methode für jeden Typ, vollständig Ausgearbeitete Beispiele, die Fallen, die Schüler am häufigsten fangen, eine schnelle Plug-in-Prüfung für Grenzen und ein einseitiges Spickzettel am Ende.

## Lernziele

Erkennen Sie jeden der sechs Ungleichheitstypen, die in der Prüfung erscheinen.
- Wenden Sie eine wiederholbare, schrittweise Methode für jeden Typ an.
- Erstellen Sie Zeichendiagramme und verwenden Sie die Abkürzung für Wellenkurven korrekt.
- Behandeln Sie absolute Werte, Radikale, zusammengesetzte Ungleichungen und Wortprobleme, ohne Endpunkte zu verlieren.
- Wissen, welche Werte immer ausgeschlossen sind (Nenner Nullen, Domänenbeschränkungen).
- Verwenden Sie eine schnelle numerische Prüfung, um eine behauptete Aussage unter Zeitdruck zu bestätigen oder zu töten.
Vermeiden Sie die Fallen, die für die meisten falschen Antworten verantwortlich sind.

---

## 6.1 Wie funktioniert die Frage der BBE wahr/falsch Ungleichheit

Jede Ungleichheitsfrage in der Prüfung folgt der gleichen Form: ein kurzer Stamm (oft „Ungleichheitslösungsmengen bewerten), gefolgt von fünf unabhängigen Aussagen mit der Bezeichnung A–E. Jede Aussage behauptet eine bestimmte Lösungsmenge oder Eigenschaft für eine bestimmte Ungleichheit. Markieren Sie jede Aussage unabhängig voneinander WAHR oder FALSCH. Es gibt keine Teilkreditlogik, die die fünf Aussagen miteinander verknüpft. Eine Frage mit fünf WAHREN Aussagen ist genauso gültig wie eine mit fünf FALSCHEN Aussagen.

In der Praxis fällt jede Aussage in einen von sechs wiederkehrenden Typen. Sobald Sie erkennen können, welchen Typ Sie betrachten, ist die Methode, um es zu lösen, immer die gleiche. Nur die Zahlen ändern sich. Das ist die wahre Fertigkeit, die getestet wird: schnelle, zuverlässige Typerkennung, gefolgt von einem sauberen, wiederholbaren Verfahren.

### Die sechs Typen auf einen Blick

| Typ | Erkenne es von | Core Tool |
| --- | ---
| Rational | Ein Bruchteil von linearen / quadratischen Faktoren, z. B. $\dfrac{x-3}{x+2}\le 0$ | Kritische Punkte + Zeichendiagramm |
| Quadratisches Zeichen | Ein einzelnes quadratisches im Vergleich zu $0$ , z.B. $x^2-x-6\ge 0$ | Factoring oder Diskriminanztest |
Verbindung (doppelt) Zwei Ungleichheitszeichen um ein Quadrat, z.B. $-1\le x^2-4x\le 5$ | In zwei Teile geteilt, auflösen, schneiden |
| Absoluter Wert | Ein oder mehrere Absolutwertbalken | Case Split oder Quadrat beider Seiten |
| Radikal | Eine quadratische Wurzel $\sqrt{\,\cdot\,}$ | Domain zuerst, dann isolieren und quadrat |
| Lineares Wortproblem | Ein Setup in der realen Welt (Rechnungen, Temperatur, Kredite) | Übersetzen in eine Ungleichheit, Lösen, Kontrollzeichen kippen |

Es gibt auch eine schnelle Plug-in-Technik, um eine Aussage unter Zeitdruck zu bestätigen oder zu töten. Sie wird in Abschnitt 6.10 vollständig behandelt. Lesen Sie es einmal und Sie können es für jeden Typ unten verwenden.

---

## 6.2 Rational Ungleichungen (sign charts)

Eine rationale Ungleichheit vergleicht einen Bruchteil von faktorisierten Ausdrücken mit Null, wie z.B.

 $$
\frac{x-3}{x+2}\le 0
\quad\text{or}\quad
\frac{x^2-9}{x^2-16}\le 0.
$$

Diese können zwei, drei oder sogar vier kritische Punkte haben, aber die Methode ändert sich nie.

### Step-by-step method

1. Den Zähler und Nenner vollständig faktorisieren.
2. Finde jeden kritischen Punkt: Werte, die den Zähler Null machen, und Werte, die den Nenner Null machen. Markieren Sie die Nullen des Nenners wie immer ausgeschlossen. Division durch Null ist niemals erlaubt, egal was das Ungleichheitssymbol ist.
3. Zeichne die kritischen Punkte auf einen Zahlenstrahl. Sie teilen die Linie in Regionen auf.
4. Testen Sie eine Zahl aus jeder Region im faktorisierten Ausdruck, um ihr Vorzeichen zu finden ( $+$ oder $-$ ). Tun Sie dies für jede Region. Gehen Sie nicht davon aus, dass sich das Muster einfach abwechselt, insbesondere mit drei oder mehr kritischen Punkten.
5. Halten Sie die Regionen mit der Ungleichheit übereinstimmen: positive Regionen für $>$ oder $\ge$ , negative Regionen für $<$ oder $\le$ .
6. Entscheiden Sie die Endpunkte: Ein Punkt, an dem der Zähler Null ist, ist enthalten, wenn die Ungleichheit $\le$ oder $\ge$ (nicht-streng) ist, und ausgeschlossen, wenn es $<$ oder $>$ (streng) ist. Ein Punkt, bei dem der Nenner Null ist, ist unabhängig vom Symbol immer ausgeschlossen.

**Beispiel 1.** Löse $\dfrac{x-3}{x+2}\le 0$ .

Critical points: numerator zero at $x=3$; denominator zero at $x=-2$ (always excluded).

| Interval | Sign |
| --- | --- |
| $(-\infty,-2)$ | $+$ |
| $(-2,3)$ | $-$ |
| $(3,\infty)$ | $+$ |

Die Ungleichung fragt nach $\le 0$ , also behalte die negative Region bei und schließe $x=3$ ein (Zähler Null und das Symbol ist nicht streng), aber niemals $x=-2$ .

Lösung: $(-2,3]$, equivalently $-2 < x \le 3$.

**Beispiel 2.** Löse $\dfrac{x^2-9}{x^2-16}\le 0$ .

Zähler Null bei $x=\pm 3$ ; Nenner Null bei $x=\pm 4$ (ausgenommen). Vier kritische Punkte bedeuten, dass fünf Regionen getestet werden müssen.

| Interval | Sign |
| --- | --- |
| $(-\infty,-4)$ | $+$ |
| $(-4,-3)$ | $-$ |
| $(-3,3)$ | $+$ |
| $(3,4)$ | $-$ |
| $(4,\infty)$ | $+$ |

Behalten Sie die negativen Regionen plus $x=\pm 3$ (Zähler Null), aber niemals $x=\pm 4$ .

Lösung: $(-4,-3]\cup[3,4)$.

 [[NOTE:Common trap|The number of critical points tells you how many regions to check, not a shortcut to guess the pattern. With four critical points you get five regions. Skip testing even one of them and you can easily flip a sign by mistake. Always test a real number in every single region.]]

---

## 6.3 Die wellige Kurvenregel

Das Testen einer Zahl in jeder einzelnen Region funktioniert immer, aber es ist langsam, und langsame Kostenmarken unter Prüfungsdruck. Es gibt eine schnellere Regel, die manchmal als Wellenkurvenmethode oder Intervallmethode bezeichnet wird und mit der Sie eine Region testen und das Zeichen jeder anderen Region ableiten können.

### Schritte zur Anwendung der Regel

1. Menge zu Null: Bewegen Sie jeden Term zur Seite, so dass die Ungleichheit den Ausdruck mit $0$ vergleicht (mit $>$ , $<$ , $\le$ oder $\ge$ ).
2. Finden Sie kritische Punkte: Faktor den Zähler und Nenner vollständig, dann Menge jeden Faktor gleich Null, um jede Wurzel und jeden ausgeschlossenen (undefinierten) Punkt zu finden.
3. Zeichnen Sie auf einen Zahlenstrahl: Stellen Sie die kritischen Punkte in Ordnung. Sie teilen die Linie in offene Intervalle.
4. Testen Sie nur das rechteste Intervall: Wählen Sie eine beliebige Zahl, die größer als jeder kritische Punkt ist, und überprüfen Sie das Zeichen dort.
5. Sweep nach links, abwechselnd: ausgehend von diesem bekannten Zeichen, stellen Sie sich eine kontinuierliche wellige Kurve vor, die durch die kritischen Punkte führt und über der Linie für $+$ und darunter für $-$ schwingt. Jedes Mal, wenn die Kurve einen kritischen Punkt kreuzt, dreht sich das Vorzeichen, solange dieser Punkt von einem Faktor kommt, der zu einer ungeraden Potenz erhöht wurde (am häufigsten ein einfacher, nicht wiederholter Faktor).

 [[FIGURE:ineq-wavy-general|The wavy curve threads through each root, alternating above (+) and below (−) the axis. This is exactly the shape the rule produces when every factor is a simple, odd-power factor.]]

Angewandt auf das Vier-Kritische-Punkte-Beispiel $\dfrac{x^2-9}{x^2-16}\le 0$ : anstatt alle fünf Regionen einzeln zu testen, testen Sie nur die rechte ( $x>4$ , was $+$ ergibt), dann lassen Sie die Kurve nach links über jede Wurzel wechseln.

 [[FIGURE:ineq-wavy-four-roots|Test $x>4$ once (positive), then alternate leftward across $x=4$, $x=3$, $x=-3$, and $x=-4$. The two denominator roots (open circles) still flip the sign like any simple factor; they are just never allowed in the final answer.]]

Ein Test statt fünf, und das Ergebnis stimmt mit dem Zeichendiagramm überein, das zuvor durch direkte Tests erstellt wurde. Die Regel ist eine Abkürzung, keine andere Antwort.

### Wichtige Ausnahme 1: Auch Mächte drehen das Zeichen nicht um

Wenn ein Faktor auf eine gerade Potenz angehoben wird, z. B. $(x-1)^2$ , oder innerhalb eines absoluten Wertes erscheint, berührt die Kurve die Achse an dieser Wurzel, springt aber auf die gleiche Seite zurück, anstatt durchzuqueren. Das Zeichen ändert sich dort nicht.

 [[FIGURE:ineq-wavy-even-power|Solving $\dfrac{(x-1)^2(x+3)}{x-2}\ge 0$: the curve crosses normally at $x=-3$ and at $x=2$ (both simple factors), but merely touches and bounces at $x=1$, because $(x-1)^2$ is an even-power factor. Both sides of $x=1$ stay negative.]]

Dies hat eine subtile Konsequenz, die es wert ist, erinnert zu werden. Bei $x=1$ ist der Ausdruck genau gleich $0$ , und $0$ befriedigt $\ge 0$ , so dass $x=1$ eine gültige, isolierte Lösung ist, obwohl sie sich in einer ansonsten negativen Region befindet. Die volle Lösungsmenge ist hier

$$
(-\infty,-3]\cup\{1\}\cup(2,\infty).
$$

Der Punkt $x=1$ muss von selbst wieder hinzugefügt werden, getrennt von der Intervallnotation um ihn herum.

 [[NOTE:Common trap|It is tempting to assume the sign simply alternates at every critical point without checking each factor’s power. An even-power factor (or an absolute value) is the one case where the curve bounces instead of crossing. Always check the power of each factor before assuming the next region flips sign.]]

### Wichtige Ausnahme 2: Nenner Nullen sind immer ausgeschlossen

Ein kritischer Punkt, der vom Nenner kommt, verhält sich immer noch normal für Zeichenzwecke. Die Kurve kreuzt oder springt dort genau wie jede andere Wurzel, nach der gleichen ungeraden / geraden Regel oben. Aber unabhängig davon, wie sich das Zeichen verhält und unabhängig davon, ob die Ungleichheit streng ist oder nicht ( $<$ , $>$ , $\le$ , oder $\ge$ ), kann ein Wert, der den Nenner Null macht, niemals in der endgültigen Antwort erscheinen. Division durch Null ist undefiniert. Das Ungleichheitssymbol überschreibt das nie.

 [[NOTE:Common trap|It is easy to treat a denominator zero exactly like a numerator zero once the sign chart is built, including it in the answer whenever the symbol is ≤ or ≥. A denominator zero is excluded unconditionally, even when every other rule would seem to include it.]]

---

## 6.4 Quadratic sign Ungleichungen

Diese vergleichen einen einzelnen quadratischen Ausdruck mit Null, wie $x^2-x-6\ge 0$ oder $x^2-6x+9\ge 0$ . Es gibt zwei Geschmacksrichtungen, denen Sie begegnen werden: eine Quadratik, die in zwei verschiedene Wurzeln einfließt, und einen Sonderfall, das perfekte Quadrat, das nur eine wiederholte Wurzel hat. Ein drittes geschmacksmuster hat überhaupt keine faktoren, und das ist, wo der diskriminant kommt.

### Methode A: zwei verschiedene Wurzeln

1. Faktor die quadratische in zwei lineare Faktoren, z. B. $x^2-x-6=(x-3)(x+2)$ .
2. Die Wurzeln teilen den Zahlenstrahl in drei Regionen. Da der führende Koeffizient positiv ist (öffnet sich nach oben), ist der Ausdruck außerhalb der Wurzeln positiv und zwischen ihnen negativ.
3. Passen Sie das Zeichen dem Ungleichheitssymbol an, einschließlich der Endpunkte für $\le/\ge$ und schließen Sie sie für $</>$ aus.

**Beispiel 1.** Löse $x^2-x-6\ge 0$ .

Faktor: $(x-3)(x+2)$ . Wurzeln bei $x=-2$ und $x=3$ .

Positiv außerhalb der Wurzeln (nach oben öffnendes Parabel), so ist die Lösung $x\le -2$ oder $x\ge 3$ . Beide Zweige, einschließlich der Wurzeln, da das Symbol $\ge$ ist.

 [[NOTE:Common trap|A quadratic that is non-negative “outside its roots” always produces two separate branches. It is tempting to report only the branch that feels more intuitive (for example only the larger values) and quietly drop the other one. Also: the sign of the expression is not the same thing as the sign of x. An expression being ≤ 0 does not tell you that x itself is negative.]]

### Method B: perfect squares (one repeated root)

Ein Ausdruck wie $x^2-6x+9$ Faktoren als $(x-3)^2$ . Ein Quadrat ist nie negativ, also ist $(x-3)^2\ge 0$ wahr für jede reelle Zahl. Gleichheit (das Quadrat gleich genau Null) geschieht nur bei der einzelnen wiederholten Wurzel, $x=3$ . Es passiert nicht auch bei $x=-3$ , auch wenn das durch Symmetrie verlockend aussehen könnte.

 [[NOTE:Common trap|It is easy to assume a perfect square has two symmetric roots like a general quadratic (a and −a). A perfect square (x − a)² has exactly one repeated root at x=a, nowhere else.]]

### Method C: no real roots (discriminant test)

Wenn ein Quadrat nicht gut faktorisiert, berechnen Sie die Diskriminante $b^2-4ac$ .

- Wenn die Diskriminante negativ ist, berührt das Parabel die $x$ -Achse überhaupt nicht.
- Wenn der führende Koeffizient positiv ist, sitzt das gesamte Parabel über der $x$ -Achse. Der Ausdruck ist immer positiv, niemals null, niemals negativ.
- Wenn der führende Koeffizient negativ ist, sitzt das gesamte Parabel unterhalb der $x$ -Achse. Immer negativ.

**Beispiel 2.** Ist $x^2-4x+5<0$ jemals wahr?

Diskriminant: $16-20=-4$ (negativ). Der Leitkoeffizient ist positiv, so dass das Parabel vollständig über der $x$ -Achse bleibt. Der Ausdruck ist nie kleiner als $0$ . Diese Ungleichheit hat überhaupt keine Lösungen (nicht "unendlich viele").

 [[NOTE:Common trap|A negative discriminant on a “< 0” question is easy to misread as “the parabola must dip below the axis somewhere.” It means the exact opposite: the parabola never crosses the x-axis at all.]]

---

## 6.5 Compound (double) quadratic Ungleichungen

Diese haben die Form $a\le\text{(quadratic)}\le b$ : zwei Ungleichheitssymbole, die einen quadratischen Ausdruck wie $-1\le x^2-6x+8\le 3$ einfügen.

### Step-by-step method

1. Split in zwei separate Ungleichungen: der "linke Teil" (quadratisch $\ge a$ oder $> a$ ) und der "rechte Teil" (quadratisch $\le b$ oder $< b$ ).
2. Lösen Sie jeden Teil vollständig für sich allein unter Verwendung von Typ-2-Methoden (Factoring oder die quadratische Formel, wenn die Wurzeln keine ganzen Zahlen sind).
3. Schneiden Sie die beiden Lösungsmengen. Dies ist der Schritt, den die Schüler überspringen. Die beiden Hälften müssen richtig kombiniert werden, nicht nur angeschaut.
4. Tragen Sie die Strenge jeder Seite bis zur endgültigen Antwort durch. Wenn beide Hälften nicht streng sind ( $\le/\ge$ ), behalten Sie die gemeinsamen Endpunkte. Wenn eine der beiden Hälften streng ist ( $</>$ ), fällt dieser Endpunkt aus.

**Beispiel 1.** Löse $-1\le x^2-6x+8\le 3$ .

Links: $x^2-6x+8\ge -1$ wird $x^2-6x+9\ge 0$ , was $(x-3)^2\ge 0$ , wahr für jedes reelle $x$ .

Rechter Teil: $x^2-6x+8\le 3$ wird $x^2-6x+5\le 0$ , was $(x-1)(x-5)\le 0$ ist, also $1\le x\le 5$ .

Da der linke Teil nie etwas einschränkt, ist die volle Lösung genau der rechte Teil: $[1,5]$ .

**Beispiel 2.** Eine Version, in der beide Hälften wirklich einschränken: $-4 < x^2-4x < 5$ .

Linker Teil: $x^2-4x+4>0$ wird $(x-2)^2>0$ , wahr für jedes $x$ außer $x=2$ (wobei das Quadrat genau $0$ ist).

Right part: $x^2-4x-5<0$ becomes $(x-5)(x+1)<0$, so $-1 < x < 5$.

Schnitt: $(-1,5)$ , aber mit dem einzelnen Punkt $x=2$ entfernt.

Lösung: $(-1,2)\cup(2,5)$.

**Beispiel 3.** Eine Version, die sich in zwei separate geschlossene Intervalle aufteilt: $-1\le x^2-4x+2\le 4$ .

Links: $x^2-4x+3\ge 0$ wird $(x-1)(x-3)\ge 0$ , also $x\le 1$ oder $x\ge 3$ .

Rechts: $x^2-4x-2\le 0$ . Nach der quadratischen Formel sind Wurzeln $x=2\pm\sqrt{6}$ , was $2-\sqrt{6}\le x\le 2+\sqrt{6}$ ergibt.

Das Kreuzen von $[2-\sqrt{6},1]$ mit $[3,2+\sqrt{6}]$ ergibt zwei separate geschlossene Intervalle, nicht einen glatten Bereich.

Lösung: $[2-\sqrt{6},1]\cup[3,2+\sqrt{6}]$.

 [[NOTE:Common trap|Seeing an irrational boundary like 2 ± √6 makes a single continuous interval look plausible. But each half of the compound inequality must be solved and intersected independently. This very often carves a gap right out of the middle. Similarly, when one half turns out to be true for all real numbers (a perfect square ≥ 0), it is tempting to think it must still narrow the answer somehow. It does not. The other half does all the work.]]

### Sehen der Schnittmenge: Schattierung von zwei Zahlenlinien

Zwei Intervallausdrücke zu lesen und sie in deinem Kopf zu schneiden, ist genau der Punkt, an dem sich der oben genannte Fehler einschleicht. Ein einfaches Bild macht es zum NarrenBeweis: Zeichne die Lösung zu jedem Teil als schraffiertes (schraffiertes) Band direkt über einem Zahlenstrahl und suche dann nach den $x$ -Werten, die in beiden Bändern schraffiert sind.

 [[FIGURE:ineq-compound-intersection|Left part shaded with forward slashes, right part shaded with backslashes. The intersection is only the $x$-values covered by both patterns. Here, two separate closed pieces, with a genuine gap between $x=1$ and $x=3$.]]

Wie man dieses Diagramm selbst erstellt:

1. Zeichne einen horizontalen Zahlenstrahl und markiere jeden kritischen Wert aus beiden Teilen darauf (hier: $2-\sqrt{6}$ , $1$ , $3$ , $2+\sqrt{6}$ , links nach rechts).
2. Direkt über der Linie schraffieren oder schraffieren Sie den Bereich, der nur den linken Teil löst. Verwenden Sie einen gefüllten Punkt für einen eingeschlossenen Endpunkt ( $\le/\ge$ ) und einen offenen Kreis für einen ausgeschlossenen ( $</>$ ).
3. Auf einer zweiten Zeile mit der gleichen Skala schattieren Sie den Bereich, der nur den rechten Teil löst, mit einer anderen Lukenrichtung, so dass die beiden leicht voneinander zu unterscheiden sind.
4. Stapeln Sie die beiden Linien und schauen Sie gerade nach unten durch sie: die Schnittmenge ist überall dort, wo beide Schraffurmuster die gleichen $x$ -Werte abdecken. Redraw nur diese Überlappung auf einer dritten Zeile als Ihre endgültige Antwort.
5. Kopieren Sie den korrekten Stil des offenen/geschlossenen Kreises für jeden überlebenden Endpunkt, von welcher ursprünglichen Linie auch immer er stammt. Das Bild verhindert den leichten Fehler, einen offenen Kreis leise auf einen geschlossenen zu aktualisieren.

---

## 6,6 Absoluter Wert Ungleichung

Dies ist der vielfältigste Typ. Die Methode hängt genau davon ab, was sich innerhalb (und wie viele) Absolutwertbalken befinden. Es gibt vier gemeinsame Untermuster.

### A. Einfacher absoluter Wert: |Ausdruck| im Vergleich zu einer Zahl

Rewrite $|\text{expression}| > k$ as “expression $> k$ OR expression $< -k$ ” (for $>$ / $\ge$ ), or $|\text{expression}| < k$ as “ $-k < \text{expression} < k$ ” (for $<$ / $\le$ ). Löse jeden Zweig.

**Beispiel 1.** Löse $|2x+1|-3>0$ .

Schreibe als $|2x+1|>3$ um, was sich aufteilt in: $2x+1>3$ (so $x>1$ ) oder $2x+1<-3$ (so $x<-2$ ).

Lösung: $x<-2$ oder $x>1$ .

### B. Summe oder Differenz zweier Entfernungen: $|x-a|\pm|x-b|$

Die Ausdrücke innerhalb der Balken ändern das Vorzeichen bei $x=a$ und $x=b$ . Teilen Sie den Zahlenstrahl in drei Regionen um diese beiden Punkte, schreiben Sie die absoluten Werte ohne Balken in jeder Region um und lösen Sie die resultierende (jetzt barfreie) Ungleichheit Region für Region.

**Beispiel 2.** Löse $|x-1|+|x+2|\le 5$ .

Kritische Punkte bei $x=1$ und $x=-2$ , wobei drei Regionen angegeben werden.

- $x<-2$ : Ausdruck wird zu $-2x-1$ . Lösen $-2x-1\le 5$ ergibt $x\ge -3$ , so dass diese Region $[-3,-2)$ beiträgt.
- $-2\le x\le 1$ : Ausdruck kollabiert zu einer Konstante, $3$ . Da $3\le 5$ immer diese ganze Region enthalten ist.
- $x>1$ : Ausdruck wird $2x+1$ . Lösen $2x+1\le 5$ ergibt $x\le 2$ , so dass diese Region $(1,2]$ beiträgt.

Kombinieren Sie alle drei Stücke: $[-3,2]$ .

 [[NOTE:Common trap|The middle region, between the two critical points, always collapses to a constant. It is the piece most often forgotten entirely. Always check it as its own case, separately from the two outer branches. It is also possible for one of the three regions to contribute nothing at all. Never assume a region works just because its neighbour does.]]

### C. Absoluter Wert vs. Absoluter Wert: $|\text{expr}_1|$ im Vergleich zu $|\text{expr}_2|$

Dies ist der einzige Fall, in dem die Quadratur beider Seiten immer sicher ist, ohne dass eine Fallaufteilung erforderlich ist, da beide Seiten automatisch nicht negativ sind. Quadrieren Sie beide Seiten, erweitern und lösen Sie die resultierende quadratische Ungleichheit mit Typ-2-Methoden.

**Beispiel 3.** Löse $|3x-1|<|x+5|$ .

Quadrat beide Seiten: $(3x-1)^2<(x+5)^2$ .

Erweitern: $9x^2-6x+1 < x^2+10x+25$ , also $8x^2-16x-24<0$ , dann $x^2-2x-3<0$ , dann $(x-3)(x+1)<0$ .

Lösung: $-1 < x < 3$.

 [[NOTE:Common trap|Comparing two absolute values is one of the few places where squaring is unconditionally safe. The risk here is not a missed case. It is an arithmetic slip while expanding the squares. Double-check every term.]]

### D. Verschachtelte absolute Werte: $||\text{expr}|-k|$ im Vergleich zu einer Zahl

Schälen Sie eine Schicht nach der anderen ab und arbeiten von außen nach innen. Zuerst lösen Sie die äußeren Balken in eine zusammengesetzte Ungleichheit auf $|\text{expr}|$ , dann lösen Sie diesen inneren absoluten Wert auf die normale Weise.

**Beispiel 4.** Löse $||x-2|-3|<2$ .

Outer layer first: $-2 < |x-2|-3 < 2$, so $1 < |x-2| < 5$.

Der linke Teil, $|x-2|>1$ , schließt $1\le x\le 3$ aus (halten $x<1$ oder $x>3$ ).

Der rechte Teil, $|x-2|<5$ , beschränkt sich auf $-3 < x < 7$ .

Kombinieren (Entfernen von $[1,3]$ aus $(-3,7)$ ): $(-3,1)\cup(3,7)$ .

 [[NOTE:Common trap|With nested absolute values, it is natural to get the regions right but forget to carry each layer’s strictness (≤ vs <) all the way through to the final endpoints. Always check each boundary point directly in the original inequality.]]

---

## 6.7 Radical (square root) Ungleichungen

Dabei handelt es sich um einen oder mehrere quadratische Wurzeln, wie $\sqrt{x+4}>x-2$ . Sie verlangen mehr Sorgfalt als jeder andere Typ, denn die Quadratur beider Seiten ist nur gültig, wenn bekannt ist, dass beide Seiten nicht negativ sind, und die Domäne der quadratischen Wurzel selbst ist eine Einschränkung, die Sie vom ersten Schritt an verfolgen müssen.

### Step-by-step method (single radical)

1. Finden Sie die Domäne zuerst: Was auch immer sich innerhalb der quadratischen Wurzel befindet, muss $\ge 0$ sein.
2. Wenn die Ungleichheit $\sqrt{\cdots} >$ (etwas) ist, in zwei Fälle aufgeteilt, basierend darauf, ob dieses "Etwas" (die nicht-radikale Seite) negativ oder nicht-negativ ist:
Fall 1: Die andere Seite ist negativ. Eine Quadratwurzel ist immer $\ge 0$ , also ist sie automatisch größer als jede negative Zahl. Der gesamte Domain-Slice ist in diesem Fall eine Lösung ohne weitere Arbeit.
Fall 2: Die andere Seite ist nicht negativ. Beide Seiten sind jetzt nicht negativ, daher ist die Quadratur sicher. Quadrat, lösen Sie die resultierende Polynomungleichheit und schneiden Sie den Zustand dieses Falles.
3. Zusammenführung der Ergebnisse beider Fälle.

**Beispiel 1.** Löse $\sqrt{x+4}>x-2$ .

Domain: $x+4\ge 0$, so $x\ge -4$.

Fall 1 ( $x<2$ , rechte Seite negativ): Jeder Domänenwert arbeitet hier automatisch, also $-4\le x < 2$ .

Case 2 ($x\ge 2$, right side non-negative): square safely,

$$
x+4 > x^2-4x+4
\quad\Rightarrow\quad
x^2-5x < 0
\quad\Rightarrow\quad
x(x-5)<0
\quad\Rightarrow\quad
0 < x < 5.
$$

Kombiniert mit $x\ge 2$ : $2\le x < 5$ .

Vereinigung: $[-4,2)\cup[2,5)=[-4,5)$ .

### Wenn die Ungleichheit stattdessen $\sqrt{\cdots} <$ (etwas) ist

Hier muss die rechte Seite nicht-negativ sein, damit die Ungleichung eine Haltewahrscheinlichkeit hat (eine Quadratwurzel kann niemals kleiner als eine negative Zahl sein), so dass die Anforderung sofort Teil der Domänenbeschränkung wird. Es gibt keinen "automatischen" fall, um den man sich sorgen machen muss.

### Zwei Radikale: Summe oder Differenz

Wenn zwei quadratische Wurzeln beteiligt sind, ist ein Quadratschritt nie genug. Isolieren Sie einen Radikalen auf seiner eigenen Seite, einmal quadrieren (überprüfen Sie, ob die verbleibende Seite zuerst nicht negativ ist), vereinfachen Sie, dann wiederholen Sie: isolieren und wieder quadrieren. Jeder Quadraturschritt führt eine neue Nebenbedingung ein, die gelöst und geschnitten werden muss. Stoppen Sie nicht nach dem ersten Platz.

**Beispiel 2.** Löse $\sqrt{2x+3}-\sqrt{x+1}>1$ .

Domain: $x\ge -1$ . Umschreiben als $\sqrt{2x+3}>1+\sqrt{x+1}$ . Die rechte Seite ist mindestens $1$ , daher ist die Quadratur gültig:

$$
2x+3 > 1+2\sqrt{x+1}+(x+1)
\quad\Rightarrow\quad
x+1 > 2\sqrt{x+1}.
$$

Es ist $v=\sqrt{x+1}\ge 0$ , also $x+1=v^2$ . Die Ungleichheit wird $v^2>2v$ , also $v(v-2)>0$ , daher $v>2$ (da $v\ge 0$ ).

Also $\sqrt{x+1}>2$ bedeutet $x+1>4$ , daher $x>3$ .

### Ein härterer Doppelradikalfall mit zwei Wurzeln zum Vergleich

Nach zwei Quadraturrunden kann die quadratische Formel zwei Wurzeln zurückgeben, aber eine Domänenbeschränkung, die auf dem Weg aufgegriffen wurde (für Beispiel $x\ge -1$ ), kann eine von ihnen ausschließen. Wenn zum Beispiel $x^2-2x-11>0$ Wurzeln $1\pm 2\sqrt{3}$ gibt, dann ist da $1-2\sqrt{3}\approx -2.46$ unter dem erforderlichen $x\ge -1$ liegt, nur die größere Wurzel wichtig.

Korrekte Lösungsgrenze: $x > 1+2\sqrt{3}$ , nicht die kleinere, irrelevante Wurzel.

 [[NOTE:Common trap|The three biggest radical-inequality mistakes: (1) squaring before checking that both sides are non-negative, which can introduce false solutions; (2) stopping after one squaring step when two radicals are present; and (3) after the quadratic formula hands back two roots, picking the smaller one without checking it against the domain restrictions collected along the way. When in doubt, plug a test value from your proposed answer directly back into the original (unsquared) inequality.]]

---

## 6.8 Linear Ungleichungen in word problems

Diese beschreiben eine reale Situation (eine Telefonrechnung, eine Filialmitgliedschaft, ein Darlehen, eine Temperaturumwandlung) und bitten Sie, sie in eine Ungleichheit zu übersetzen, sie zu lösen und spezifische Behauptungen darüber zu überprüfen. Die Algebra ist einfach (immer linear), aber das Setup und die Zeichen-Flip-Regel sind, wo Markierungen verloren gehen.

### Step-by-step method

1. Übersetzen Sie die Situation in eine Ungleichheit. Identifizieren Sie, welche Menge verglichen wird (Gesamtkosten, Saldo, umgerechnete Temperatur) und welche Schwelle sie erfüllen muss.
2. Isolieren Sie die Variable genau wie bei jeder linearen Ungleichheit.
3. Achten Sie auf einen negativen Koeffizienten: Wenn eine Menge mit zunehmender Variable abnimmt (eine Rechnung, die pro eingelöstem Punkt nach unten geht, ein Kreditsaldo, der pro Zahlung nach unten geht), bedeutet das Isolieren der Variable, durch eine negative Zahl zu dividieren, und das dreht die Ungleichheitsrichtung um.
4. Spezifische numerische Behauptungen durch direkte Substitution überprüfen. Das ist fast immer schneller als das Re-deriving der allgemeinen Lösung.

**Beispiel 1.** A $\$400 $ bill drops by $ \$0.50 $ per loyalty point redeemed ($ x $ points). The customer wants the bill $ \le \$250$.

Menge up: $400-0.5x\le 250$ , so $-0.5x\le -150$ .

Wenn man beide Seiten durch $-0.5$ (negativ) teilt, wird die Ungleichheit umgedreht: $x\ge 300$ .

Die Mindestanzahl der einzulösenden Punkte ist also $300$ , nicht " $x\le 300$ ", was hier der einfache Fehler ist.

**Beispiel 2.** Unit conversion: $C=\dfrac{5}{9}(F-32)$ , safety limit $C\le 30$ .

Lösen $\dfrac{5}{9}(F-32)\le 30$ ergibt $F-32\le 54$ , also $F\le 86$ .

Die äquivalente Fahrenheit-Sicherheitsgrenze ist $86^\circ\mathrm{F}$ , nicht einfach " $30^\circ\mathrm{F}$ ." Verschiedene Einheitenskalen haben unterschiedliche Nullpunkte und unterschiedliche Skalenfaktoren, so dass eine numerische Schwelle nicht unverändert zwischen ihnen übertragen wird. Sie müssen tatsächlich die Ungleichheit lösen, um das umgewandelte Limit zu finden.

*??? ??? ??? ??? ???? ???? ???? ????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

Da $1.2$ positiv ist, bleibt die Richtung gleich: $B < 250$ .

Vergleichen Sie dies mit dem Treue-Punkte Beispiel oben. Dort war der Koeffizient, der isoliert wurde, negativ, also drehte sich die Richtung um. Hier ist es positiv, also nicht. Überprüfen Sie immer das Zeichen der Zahl, durch die Sie teilen.

 [[NOTE:Common trap|Dividing or multiplying an inequality by a negative number always flips the inequality symbol. This is the single most commonly forgotten rule in word problems, especially whenever the setup describes something that decreases as the variable increases (a bill going down, a loan balance shrinking). Also watch for strict vs. non-strict wording: “under $300” excludes $300 itself, so a value that lands exactly on the boundary fails a strict inequality even though it looks close enough.]]

---

## 6.9 Master trap list

Wenn Sie nur fünf Minuten vor der Prüfung haben, lesen Sie diesen Abschnitt.

| Typ | Fallen zum Erinnern |
| --- | ---
Ein Wert, der den Nenner Null macht, wird immer ausgeschlossen, unabhängig davon, was das Ungleichheitssymbol ist, und obwohl das Zeichen immer noch normal über diesen Punkt wechselt. |
Die wellige Kurvenregel wechselt nur automatisch über ungerade (einfache) Faktoren. Ein Gleichstromfaktor lässt die Kurve springen, nicht kreuzen, so dass das Zeichen auf beiden Seiten gleich bleibt. |
Das quadratische Zeichen „Ausdruck $\le 0$ beschränkt $x$ auf ein Intervall. Es sagt nichts darüber aus, ob $x$ selbst positiv oder negativ ist. |
Ein perfektes Quadrat $(x-a)^2$ hat eine wiederholte Wurzel bei $x=a$ , nicht zwei symmetrische Wurzeln wie $a\pm$ etwas. |
| Quadratisches Zeichen | Ein negativer Diskriminant auf einer " $< 0$ " Behauptung bedeutet überhaupt keine Lösungen, nicht "unendlich viele". |
| Compound | Lösen und schneiden Sie beide Hälften unabhängig voneinander. Eine irrationale Grenze kann Sie dazu verleiten, ein glattes Intervall zu melden, wenn die wahre Antwort eine Lücke hat. |
| Verbindung | Wenn eine Hälfte wahr für alle realen $x$ ist, macht die andere Hälfte die ganze Einschränkung. Sie schränkt die Dinge nicht von selbst weiter ein. |
| Absoluter Wert | Der mittlere Bereich zwischen zwei kritischen Punkten (für $|x-a|\pm|x-b|$ ) kollabiert normalerweise zu einer Konstante. Überspringen Sie nicht die Überprüfung. |
Für verschachtelte Balken, arbeiten außerhalb-in einer Schicht zu einer Zeit, und tragen jede Schicht Strenge durch die endgültigen Endpunkte. |
| Radikal | Niemals quadratisch, bevor bestätigt wird, dass beide Seiten nicht negativ sind. Split in Fälle zuerst, wenn die nicht-radikale Seite negativ sein könnte. |
Zwei Radikale brauchen zwei Runden der Isolierung und Quadratur. Stoppen nach einem ist der häufigste Shortcut-Fehler. |
| Radikal | Nachdem die quadratische Formel zwei Wurzeln ergibt, überprüfen Sie beide gegen jede Domänenbeschränkung, die auf dem Weg gesammelt wurde, bevor Sie eine auswählen. |
Die Einteilung oder die Multiplikation mit einer negativen Zahl macht die Ungleichheits-Richtung aus. Dies geschieht immer dann, wenn eine Menge abnimmt, wenn die Variable zunimmt. |
| Word-Probleme | Strenge Ungleichungen ( $<$ oder $>$ ) schließen den eigenen Grenzwert aus, auch wenn eine Substitution genau darauf landet. |

---

## 6.10 Die Schnellprüfmethode

Jedes gearbeitete Beispiel in diesem Handbuch wird mit der richtigen Methode gelöst: Factoring, Zeichendiagramme, Fallaufteilungen und so weiter. Aber es gibt ein zweites, viel schnelleres Werkzeug, das es wert ist, am Prüfungstag bereit zu sein: der schnelle Check. Es wird Ihnen keine Methode beibringen, und es kann keine ersetzen, aber es ist der schnellste Weg, um einen Fehler zu erkennen, bevor Sie sich zu einer Antwort verpflichten.

### Was es ist

Eine schnelle Überprüfung ersetzt einfach eine bestimmte, bequeme Zahl in die ursprüngliche Ungleichheit, vor jeder Algebra, Quadratur oder Fallaufteilung, und sieht, ob die resultierende Aussage wahr oder falsch ist. Es sagt Ihnen, ob ein bestimmter Wert zur Lösungsmenge gehört. Mehr nicht.

### Wann man es benutzt

- Um einen Grenzwert zu überprüfen. Wählen Sie nach dem Lösen einen Endpunkt Ihres Intervalls und stecken Sie ihn in die ursprüngliche Ungleichheit, um zu bestätigen, dass er enthalten (geschlossen) oder ausgeschlossen (offen) sein sollte.
Um eine behauptete Aussage schnell zu testen. In der Prüfung nennt eine wahr/falsch Aussage oft eine bestimmte Zahl oder ein kurzes Intervall. Testen eines repräsentativen Wertes von innen (oder außen) dieses Intervalls ist in der Regel schneller als das Ableiten der vollständigen Lösung von Grund auf.
- Um einen Zeichenfehler zu fangen. Wenn Ihr abgeleitetes Intervall und ein schneller numerischer Test nicht übereinstimmen, haben Sie einen Fehler gefunden. Gehen sie zurück durch die methode, anstatt beiden antworten blind zu vertrauen.
- Direkt nach der Quadratur beider Seiten (Radikal- oder Absolutwerttypen). Quadratur kann falsche Lösungen einführen, so dass das Testen eines Wertes in der ursprünglichen, nicht quadrierten Ungleichheit der zuverlässigste Weg ist, um zu bestätigen, dass er wirklich gehört.

### Wann man sich nicht darauf verlassen kann

- Als deine einzige Methode. Ein einzelner Test sagt Ihnen über eine einzelne Zahl. Es kann nicht die Form einer ganzen Lösungsmenge (wie viele Intervalle es gibt, wo sie beginnen und enden) von selbst zeigen.
- Nahe einer Region Grenze, die Sie noch nicht identifiziert haben. Wenn Sie nicht bereits wissen, wo die kritischen Punkte sind, kann eine Handvoll zufälliger Tests leicht ein enges Intervall ganz verpassen.

**Beispiel 1.** Behauptung: “ $x=4$ satisfies $\dfrac{x^2-9}{x^2-16}\le 0$ .”

Anstatt das gesamte Zeichendiagramm neu zu erstellen, ersetzen Sie $x=4$ direkt in den ursprünglichen Ausdruck: $\dfrac{16-9}{16-16}=\dfrac{7}{0}$ , undefiniert.

Ein undefinierter Ausdruck kann niemals eine Ungleichheit befriedigen. Die Behauptung ist FALSCH, und diese einzige Substitution bestätigt sie sofort, ohne das vollständige Zeichendiagramm zu benötigen.

**Beispiel 2.** Behauptung: “ $x=2$ satisfies $-4 < x^2-4x < 5$ .”

Setze direkt: $2^2-4(2)=4-8=-4$ . Überprüfen Sie beide Hälften: ist $-4 < -4$ wahr? Nein. Die linke Seite ist streng ( $<$ ), und $-4$ ist nicht strikt kleiner als $-4$ .

Die Behauptung ist FALSCH, gefangen in einer Substitution, obwohl $x=2$ aussehen könnte, als sollte es auf einen Blick funktionieren.

 [[NOTE:Common trap|A quick check that comes back TRUE only proves that one number works. It never proves the rest of a claimed interval is correct. Use it to confirm a specific claim or to disprove one (a single failure is enough to kill a statement), not as a substitute for solving the inequality properly.]]

---

## 6.11 Zusammenfassung cheat sheet

### Rational: $\dfrac{\text{factor}}{\text{factor}}\gtrless 0$

- Finden Sie Nullen von Zähler und Nenner.
- Nenner Nullen sind immer ausgeschlossen.
- Wellige Kurve: Testen Sie einmal die rechte Region, dann wechseln Sie nach links. Odd-Power-Faktoren kreuzen; Gerade-Power-Faktoren springen (kein Flip).
- Behalten Sie Regionen, die mit dem Symbol übereinstimmen; schließen Sie Zählernullierungen nur ein, wenn $\le/\ge$ .

### Quadratic sign: $\text{(quadratic)}\gtrless 0$

- Zwei Wurzeln: Außerhalb-Wurzeln ist positiv, zwischen-Wurzeln ist negativ (für ein Parabel nach oben).
- Perfektes Quadrat: eine wiederholte Wurzel; immer $\ge 0$ .
- Keine echten Wurzeln: Überprüfen Sie Diskriminanzzeichen + Leitkoeffizient, um zu wissen, ob es immer positiv oder immer negativ ist.

### Compound: $a\gtrless\text{(quadratic)}\gtrless b$

- Split in linken und rechten Teil.
- Löse jeden unabhängig.
- Schnitt. Nehmen Sie kein einziges glattes Intervall an; Schatten Sie beide auf einem Zahlenstrahl und suchen Sie nach der Überlappung.
- Nicht-strenge Endpunkte überleben, wenn beide Seiten sie zulassen; eine strenge Ungleichheit kann einen einzigen ausgeschlossenen Punkt ausarbeiten.

### Absoluter Wert

- $|\text{expr}| > k$ bedeutet $\text{expr} > k$ ODER $\text{expr} < -k$ $|\text{expr}| < k$ bedeutet $-k < \text{expr} < k$ .
- $|x-a|\pm|x-b|$ : Split bei $a$ und $b$ , überprüfen Sie alle drei Regionen einschließlich der Mitte.
- $|\text{expr}_1|$ vs $|\text{expr}_2|$ : sicher zum Quadrat direkt, kein Fall Split erforderlich.
- Verschachtelte Stäbe: außen abziehen, eine Schicht nach der anderen.

### Radical: $\sqrt{\text{expr}}\gtrless\text{(something)}$

- Domain first: innerhalb der Wurzel $\ge 0$ .
- Wenn Sie mit etwas vergleichen, das negativ sein könnte, teilen Sie es vor dem Quadratieren in Fälle auf.
- Zwei Radikale: Eins isolieren, quadrieren, vereinfachen, das andere isolieren, wieder quadrieren.
- Überprüfen Sie nach dem Quadrieren jede Grenze direkt in der ursprünglichen (unquadrierten) Ungleichheit.

### Word problems

Übersetzen Sie die Situation zuerst in eine Ungleichheit. Identifizieren Sie, was mit welchem Schwellenwert verglichen wird.
- Isolieren Sie die Variable.
Dividieren / Multiplizieren mit einer negativen Zahl dreht die Richtung.
Strenger Wortlaut ("unter", "weniger als") schließt den Grenzwert selbst aus.

### Quick-Check-Methode

- Setze eine bestimmte Zahl direkt in die ursprüngliche Ungleichheit, ohne Algebra zuerst.
- Verwenden Sie es, um eine Grenze zu überprüfen, eine Behauptung zu testen oder einen Zeichenfehler zu erkennen. Niemals als Ihre einzige Methode.
Ein fehlgeschlagener Test reicht aus, um eine behauptete Aussage zu widerlegen; ein bestandener Test bestätigt nur diese einzelne Zahl.

**Arbeitsauftrag am Prüfungstag.** Identifizieren Sie den Typ, führen Sie die Matching-Methode aus und überprüfen Sie dann einen beliebigen Endpunkt oder benannten Wert.

**Selbstkontrolle.** Können Sie die sechs Typen und ihre Kernwerkzeuge auflisten? Können Sie für eine rationale Ungleichheit sagen, welche Endpunkte enthalten sind und welche immer ausgeschlossen sind? Für eine zusammengesetzte Ungleichheit, erinnern Sie sich, sich zu schneiden, anstatt zu schauen? Für Radikale, schreiben Sie die Domain vor dem Quadrieren?
