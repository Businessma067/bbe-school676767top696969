# Kapitel 5 Lineare Gleichungen mit zwei Unbekannten

Dieses Kapitel ist die vollständige Theorie der linearen Gleichungen mit zwei Unbekannten und der daraus aufgebauten Systeme. Es beginnt von Anfang an mit dem, was eine Gleichung ist und was es bedeutet, eine zu lösen, und baut sich dann auf Systeme, ihre Geometrie, jede Standardlösungsmethode und harte Mehrschrittprobleme auf. Wenn Sie noch nie ein System gelöst haben, beginnen Sie im ersten Abschnitt und lesen Sie direkt durch. Nichts geht hier davon aus, dass Sie sich an etwas erinnern, das über das Hinzufügen, Multiplizieren und Bewegen von Termen über ein Gleichheitszeichen hinausgeht.

## Lernziele

- Verstehen Sie, was eine Gleichung ist, was eine Lösung ist und warum bewegliche Begriffe erlaubt sind.
- Definieren Sie eine lineare Gleichung in zwei Unbekannten und beschreiben Sie ihre gesamte Lösungsmenge.
- Lesen Sie ein System von zwei Gleichungen und sagen Sie genau, was es bedeutet, es zu lösen.
Sehen Sie sich die drei geometrischen Fälle an: Linien, die sich kreuzen, Linien, die parallel sind, und eine Zeile zweimal geschrieben.
- Verwenden Sie nur Transformationen, die die Lösungsmenge unverändert halten.
- Löse Systeme durch Substitution, durch Eliminierung, durch Vergleich und durch Graph.
- Entscheide allein aus den Koeffizienten, ob es eine Lösung, keine oder unendlich viele gibt.
- Behandeln Sie unordentliche Systeme mit Klammern, Brüchen, Dezimalstellen und Unbekannten in Nennern.
Verwandeln Sie harte Wortprobleme in Systeme, lösen Sie sie und lesen Sie die Antwort zurück in die Geschichte.

---

## 5.1 Ab Null: Gleichungen mit einer Unbekannten

### Was eine Gleichung ist

Eine **Gleichung** ist eine Aussage, dass zwei Beträge gleich sind, wobei mindestens eine Zahl fehlt. Die fehlende Nummer wird als Brief geschrieben und als **unbekannt** bezeichnet.

$$
3x + 4 = 19.
$$

Dies sagt: einige Zahl $x$ , multipliziert mit $3$ , dann erhöht um $4$ , ergibt $19$ . Die Gleichung **auflösen ** bedeutet, jeden Wert von $x$ zu finden, der die Aussage wahr macht.

Stellen Sie sich eine Gleichung als Balance-Skala vor. Die linke Seite sitzt in einer Pfanne, die rechte Seite in der anderen, und sie sind eben. Solange Sie mit beiden Pfannen dasselbe tun, bleibt die Waage auf Höhe. Diese einzige Idee ist die ganze Methode.

### Schritt für Schritt lösen

$$
3x + 4 = 19.
$$

Nehmen Sie $4$ von beiden Seiten weg. Die Skala bleibt Level:

$$
3x = 15.
$$

Teilen Sie beide Seiten durch $3$ :

$$
x = 5.
$$

Überprüfen Sie nun die Antwort in der ursprünglichen Gleichung, denn das ist der einzige Ort, an dem sich ein Fehler nicht verstecken kann:

 $$
3(5) + 4 = 19. \quad \text{True.}
$$

### Zwei Worte, die Sie treffen werden

Ein **term** ist ein einzelnes Stück des Ausdrucks, wie $3x$ oder $4$ . Ein **koeffizient** ist die Zahl, die einen Buchstaben multipliziert, so dass in $3x$ der Koeffizient $3$ ist.

Die wichtige Lektion aus diesem Abschnitt ist, dass eine Gleichung mit einer unbekannten normalerweise das Unbekannte auf einen einzigen Wert festlegt. Das ist genau das, was aufhört zu arbeiten, wenn ein zweites unbekanntes erscheint, und sich damit zu befassen, ist der rest des kapitels.

---

## 5.2 Eine Gleichung, zwei Unbekannte

### Die Definition

Eine Gleichung ist **linear in zwei Unbekannten**, wenn sie als

$$
ax + by = c,
$$

wobei $x$ und $y$ die Unbekannten sind und $a$ , $b$ , $c$ Zahlen mit $a$ und $b$ nicht beide Nullen erhalten. Die Zahlen $a$ und $b$ sind die **Koeffizienten** und $c$ ist der **konstante Begriff**.

Das Wort linear bedeutet, dass jedes Unbekannte nur der ersten Potenz erscheint. Nichts ist quadriert, die Unbekannten werden nie miteinander multipliziert, und kein Unbekanntes sitzt in einer Wurzel oder unter einem Bruchbalken.

| Gleichung | Linear in zwei Unbekannten? | Grund |
| --- | ---
und die beiden Unbekannten der ersten Macht
| $y = 4 - 2x$ | Ja | Verabredet sich zu $2x + y = 4$ |
| $x^2 + y = 4$ | Nein | $x$ ist kariert |
| $xy = 6$ | Nein Die Unbekannten werden miteinander multipliziert.
| $\dfrac{1}{x} + y = 1$ | Nein | $x$ sitzt in einem Nenner |
| $\sqrt{y} + x = 3$ | Nein | $y$ ist unter einer Wurzel |

### Wie eine Lösung jetzt aussieht

Mit zwei Unbekannten kann eine einzelne Zahl keine Antwort sein. Du musst sagen, was $x$ ist **und $y$ gleichzeitig ist. Ein **Lösung** ist also ein geordnetes Paar $(x, y)$ , das die Gleichung wahr macht. Die Reihenfolge ist wichtig: $(1,3)$ bedeutet $x = 1$ und $y = 3$ , während $(3,1)$ das Gegenteil bedeutet.

**Beispiel 1.** Look at

$$
2x + y = 7.
$$

Test $(2,3)$ : $2(2) + 3 = 7$ , wahr, also ist es eine Lösung. Test $(1,5)$ : $2(1) + 5 = 7$ , auch wahr, also ist es auch eine Lösung. Test $(2,4)$ : $2(2) + 4 = 8$ , falsch, also ist es keine Lösung.

### Warum es unendlich viele Lösungen gibt

Wählen Sie einen beliebigen Wert, den Sie für $x$ mögen. Die Gleichung wird dann eine gewöhnliche unbekannte Gleichung für $y$ , und sie hat immer eine Antwort. So können Sie nie aus Lösungen laufen.

**Beispiel 2.** Rearrange $2x + y = 7$ into

$$
y = 7 - 2x,
$$

dann Werte von $x$ ein.

| $x$ | $y = 7 - 2x$ | Lösung pair |
| --- | --- | --- |
| $0$ | $7$ | $(0,7)$ |
| $1$ | $5$ | $(1,5)$ |
| $2$ | $3$ | $(2,3)$ |
| $3$ | $1$ | $(3,1)$ |
| $-1$ | $9$ | $(-1,9)$ |
| $\tfrac12$ | $6$ | $\left(\tfrac12, 6\right)$ |

Der Tisch könnte für immer weitergehen, und Brüche und Negative sind erlaubt. Eine lineare Gleichung in zwei Unbekannten hat also nicht "die Antwort". Es hat eine endlose Familie von Antworten.

**Beispiel 3.** Das gleiche funktioniert mit größeren Koeffizienten. von

$$
3x - 5y = 15
$$

Wir bekommen $y = \dfrac{3x - 15}{5}$ . Dann gibt $x = 0$ $y = -3$ , $x = 5$ gibt $y = 0$ , und $x = 10$ gibt $y = 3$ . Werte von $x$ , die keine Vielfachen von $5$ sind, funktionieren immer noch, sie geben nur fraktionierte $y$ , wie bei $x = 1$ und $y = -\dfrac{12}{5}$ .

---

## 5.3 Das Bild einer Gleichung

### Der Graph ist eine gerade Linie

Zeichnen Sie jedes Lösungspaar als Punkt in der Koordinatenebene auf und Sie erhalten eine gerade Linie. Deshalb werden diese Gleichungen als linear bezeichnet, und deshalb funktioniert die Geometrie in den nächsten Abschnitten so gut.

Der schnellste Weg, um die Linie von $ax + by = c$ zu zeichnen, ist die Verwendung der beiden Abschnitte.

1. Setze $x = 0$ und finde $y$ . Das ist der Punkt, an dem die Linie auf die vertikale Achse trifft.
2. Setzen Sie $y = 0$ und finden Sie $x$ . Das ist der Punkt, an dem er auf die horizontale Achse trifft.
3. Zeichne die Linie durch diese beiden Punkte.

**Beispiel 1.** Für $3x - 5y = 15$ gibt $x = 0$ $y = -3$ , so dass die Linie durch $(0,-3)$ geht. Ich führe . . . . . . . . . . . . . . . . . . . . . Zwei Punkte reichen aus, um eine gerade Linie zu fixieren.

### Slope form

Wenn $b \neq 0$ , lösen Sie für $y$ :

$$
y = -\frac{a}{b}x + \frac{c}{b}.
$$

Dies ist die bekannte Form $y = mx + n$ , wobei $m$ die **Steigung** ist, was bedeutet, wie steil die Linie ansteigt, und $n$ der Wert von $y$ ist, wenn $x = 0$ .

Für $3x - 5y = 15$ wird dies $y = \dfrac{3}{5}x - 3$ , so dass die Steigung $\dfrac35$ ist und die Linie die vertikale Achse bei $-3$ kreuzt.

### Die beiden Flat Cases

Wenn $b = 0$ , ist die Gleichung $ax = c$ , also $x = \dfrac{c}{a}$ und $y$ ist frei. Der Graph ist eine vertikale Linie, denn Beispiel $2x = 8$ gibt die Linie $x = 4$ .

Wenn $a = 0$ , ist die Gleichung $by = c$ , also $y = \dfrac{c}{b}$ und $x$ ist frei. Der Graph ist eine horizontale Linie, denn Beispiel $3y = -9$ gibt die Linie $y = -3$ .

Denken Sie daran: **eine Gleichung gibt eine ganze Reihe von Möglichkeiten **. Um auf einem einzigen Punkt zu landen, benötigen Sie eine zweite Information.

---

## 5.4 Systeme: zwei Gleichungen auf einmal

### Die Definition

(Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen) (Aktenzeichen)

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2.
\end{cases}
$$

Die Klammer wird als "und", nicht "oder" gelesen. Beide Zeilen des Systems sprechen von dem gleichen $x$ und dem gleichen $y$ . Solche Gleichungen werden auch **simultane Gleichungen** genannt, weil sie gleichzeitig gelten.

Eine **Lösung des Systems** ist ein geordnetes Paar $(x,y)$ , das **beide** befriedigt. Gleichungen. Die Menge aller dieser Paare ist die **Lösungsmenge**, und das System zu lösen bedeutet, diese Menge vollständig zu beschreiben.

**Beispiel 1.** Take

$$
\begin{cases}
2x + y = 7,\\
x - y = 2.
\end{cases}
$$

Erste Gleichung: $2(3) + 1 = 7$ , wahr. Zweitens: $3 - 1 = 2$ , wahr. Also ist $(3,1)$ eine Lösung des Systems.

Überprüfen Sie nun $(1,5)$ . Es erfüllt die erste Gleichung, da $2(1) + 5 = 7$ , aber die zweite gibt $1 - 5 = -4$ , nicht $2$ . Ein Paar, das nur eine Gleichung passt, ist hier wertlos. Beide Bedingungen müssen gelten.

### Warum in der Regel zwei Fakten benötigt werden

Jede Gleichung allein erlaubt eine ganze Reihe von Paaren. Beides gleichzeitig zu fordern, schneidet diese Freiheit hart ab, und normalerweise überlebt genau ein Paar. Das ist die praktische Regel, die Sie ständig anwenden werden: Zwei Unbekannte brauchen normalerweise zwei unabhängige Fakten.

Das Wort unabhängig ist wichtig. "Die Summe von zwei Zahlen ist $10$ " und "zweimal ihre Summe ist $20$ " sind die gleiche Tatsache zweimal gesagt, so dass sie immer noch eine ganze Reihe von Möglichkeiten.

---

## 5.5 Die Geometrie eines Systems

Jede Gleichung ist eine Linie, und eine Lösung des Systems ist ein Punkt, der von beiden Linien geteilt wird. Zwei gerade Linien in einer Ebene können auf genau drei Arten sitzen, so dass ein System genau drei mögliche Ergebnisse hat.

| Lage der Linien | Anzahl der Lösungen | Name |
| --- | ---
| Sie kreuzen sich an einem Punkt | Genau einer | Konsequent und unabhängig |
| Sie sind parallel und unterschiedlich | Keine | Inkonsistenz |
Sie liegen übereinander, unendlich viele, beständig und abhängig.

### Case 1: they cross once

Verschiedene Steigungen zwingen die Linien, sich zu treffen, und zwei gerade Linien können sich nur einmal treffen.

**Beispiel 1.**

$$
\begin{cases}
y = 2x + 1,\\
y = -x + 7.
\end{cases}
$$

Die Steigungen $2$ und $-1$ sind unterschiedlich. Am Treffpunkt geben beide Formeln das gleiche $y$ , also

$$
2x + 1 = -x + 7,
$$

$$
3x = 6, \qquad x = 2,
$$

und dann $y = 2(2) + 1 = 5$ . Die einzigartige Lösung ist $(2,5)$ .

### Case 2: no Lösung

Gleiche Steigungen mit unterschiedlichen Starthöhen ergeben parallele Linien, die sich nie berühren.

**Beispiel 2.**

$$
\begin{cases}
y = 3x + 2,\\
y = 3x - 4.
\end{cases}
$$

Wenn einige $x$ in beiden funktionierten, dann $3x + 2 = 3x - 4$ , was zu $2 = -4$ vereinfacht. Das ist unmöglich, also gibt es keine Lösung. Das System ist inkonsequent, und die beiden Fakten widersprechen sich.

### Case 3: infinitely many Lösungs

Manchmal ist die zweite Gleichung nur die erste in Verkleidung.

**Beispiel 3.**

$$
\begin{cases}
x + 2y = 4,\\
3x + 6y = 12.
\end{cases}
$$

Multiplizieren Sie die erste Gleichung mit $3$ und Sie erhalten die zweite genau. Die zweite Gleichung trägt also keine neuen Informationen, und jeder Punkt der Linie $x + 2y = 4$ löst das System. Sie können die Antwort als $x = 4 - 2t$ , $y = t$ beschreiben, wobei $t$ eine beliebige Zahl ist.

Die Gewohnheit, hier zu bauen, ist, dass "keine Lösung" und "unendlich viele Lösungen" echte Antworten sind, keine Anzeichen dafür, dass Sie einen Fehler gemacht haben. Spätere Abschnitte zeigen, wie jeder in der Algebra auftaucht.

---

## 5.6 Bewegungen, die erlaubt sind

Zwei Systeme sind **äquivalent**, wenn sie genau die gleiche Lösungsmenge haben. Jede Lösungsmethode funktioniert auf die gleiche Weise: Setze das System durch ein einfacheres gleichwertiges System, immer wieder, bis die Antwort offensichtlich ist.

Diese Bewegungen ändern nie die Lösung Menge.

1. **Vertauschen Sie die beiden Gleichungen.** Ordnung war nie Teil der Bedeutung.
2. **Hinzufügen oder subtrahieren Sie den gleichen Betrag auf beiden Seiten einer Gleichung.** Das Gleichgewicht bleibt eben.
3. ** Multiplizieren oder teilen Sie eine ganze Gleichung durch eine Zahl, die nicht Null ist.** Die Verdoppelung beider Seiten einer wahren Gleichheit enthält sie wahr.
4. **Setze eine Gleichung durch ihre Summe mit oder Differenz von der anderen Gleichung.** Wenn zwei Mengen beide wahr sind, ist auch ihre Summe wahr.
5. ** Vereinfachen Sie eine Seite, ohne ihren Wert zu ändern**, für Beispiel durch Erweiterung von Klammern oder Sammeln ähnlicher Begriffe.

Zwei Züge sind verboten, und beide sind in echten Fehlern üblich.

Wenn man eine Gleichung mit Null multipliziert, wird sie in $0 = 0$ , was für alles wahr ist und so die Information wegwirft. Und das Multiplizieren nur eines Teils einer Seite bricht die Gleichheit, was der häufigste Fehler in diesem Kapitel ist.

**Beispiel 1.** Um Brüche in

$$
\frac{x}{2} + \frac{y}{3} = 1,
$$

multiply **every term** by $6$:

$$
3x + 2y = 6.
$$

**Beispiel 2.** Scaling $2x + 3y = 12$ by $3$ gives

$$
6x + 9y = 36,
$$

nicht $6x + 9y = 12$ . Die rechte Seite ist Teil der Gleichung und muss ebenfalls multipliziert werden.

---

## 5.7 Substitution

Substitution verwandelt ein System in eine einzige Gleichung mit einer Unbekannten, die Sie bereits aus §5.1 zu handhaben wissen.

Der Plan:

1. Wählen Sie eine Gleichung und drücken Sie eine unbekannte in Bezug auf die andere aus.
2. Setzen Sie diesen Ausdruck in die **andere ** Gleichung.
3. Lösen Sie die resultierende eine unbekannte Gleichung.
4. Setze den Wert zurück, um das zweite Unbekannte zu erhalten.
5. Schreiben Sie die Antwort als bestelltes Paar, dann überprüfen Sie sie in beiden ursprünglichen Gleichungen.

Schritt 2 ist das, was die Leute falsch machen. Setzt man den Ausdruck wieder in die gleiche Gleichung, aus der er stammt, ergibt $0 = 0$ und sagt Ihnen nichts.

**Beispiel 1 (a gentle start).**

$$
\begin{cases}
y = 2x - 1,\\
3x + 2y = 12.
\end{cases}
$$

Die erste Gleichung sagt uns bereits, was $y$ ist, also ersetzen Sie $y$ in der zweiten:

$$
3x + 2(2x - 1) = 12,
$$

$$
3x + 4x - 2 = 12,
$$

$$
7x = 14, \qquad x = 2.
$$

Dann $y = 2(2) - 1 = 3$ . Die Lösung ist $(2,3)$ , und die Prüfung gibt $3(2) + 2(3) = 12$ , wahr.

**Beispiel 2 (einen Koeffizienten von eins isolieren).**

$$
\begin{cases}
x - 3y = 7,\\
4x + 5y = 45.
\end{cases}
$$

In der ersten Gleichung $x$ hat der Koeffizient $1$ , so dass die Isolierung nichts kostet:

$$
x = 7 + 3y.
$$

Ersatz für die zweite Gleichung:

$$
4(7 + 3y) + 5y = 45,
$$

$$
28 + 12y + 5y = 45,
$$

$$
17y = 17, \qquad y = 1,
$$

und dann $x = 7 + 3(1) = 10$ . Die Lösung ist $(10,1)$ . Überprüfen Sie: $10 - 3 = 7$ und $4(10) + 5 = 45$ , beide wahr.

**Beispiel 3 (Fraktionen unterwegs, ganze Zahlen am Ende).**

$$
\begin{cases}
3x + 2y = 8,\\
5x - 4y = 6.
\end{cases}
$$

Kein Koeffizient ist $1$ , so dass etwas Bruchstück erscheinen wird. Isolieren Sie $y$ in der ersten Gleichung:

$$
y = \frac{8 - 3x}{2}.
$$

Ersatz für die zweite Gleichung:

$$
5x - 4 \cdot \frac{8 - 3x}{2} = 6.
$$

Die $4$ und die $2$ annullieren, weshalb die Isolierung von $y$ hier schlau war:

$$
5x - 2(8 - 3x) = 6,
$$

$$
5x - 16 + 6x = 6,
$$

$$
11x = 22, \qquad x = 2,
$$

und dann $y = \dfrac{8 - 6}{2} = 1$ . Die Lösung ist $(2,1)$ . Überprüfen Sie die zweite Gleichung: $5(2) - 4(1) = 6$ , wahr.

**Beispiel 4 (harder, negative answer, ugly middle).**

$$
\begin{cases}
4x + 7y = -2,\\
5x - 2y = 19.
\end{cases}
$$

Isolieren Sie $x$ in der zweiten Gleichung:

$$
x = \frac{19 + 2y}{5}.
$$

Setze den ersten:

$$
4 \cdot \frac{19 + 2y}{5} + 7y = -2.
$$

Multiplizieren Sie die gesamte Gleichung mit $5$ , um den Bruch zu löschen, und erinnern Sie sich an die rechte Seite:

$$
4(19 + 2y) + 35y = -10,
$$

$$
76 + 8y + 35y = -10,
$$

$$
43y = -86, \qquad y = -2.
$$

Dann $x = \dfrac{19 + 2(-2)}{5} = \dfrac{15}{5} = 3$ . Die Lösung ist $(3,-2)$ . Überprüfen Sie beide: $4(3) + 7(-2) = -2$ und $5(3) - 2(-2) = 19$ , beide wahr.

**Beispiel 5 (wie die Sonderfälle erscheinen).** In

$$
\begin{cases}
y = 3x + 2,\\
-6x + 2y = 1,
\end{cases}
$$

substitution gives

$$
-6x + 2(3x + 2) = 1,
$$

$$
-6x + 6x + 4 = 1,
$$

$$
4 = 1.
$$

Beide Unbekannten verschwanden und was übrig bleibt, ist falsch, so dass das System keine Lösung hat. Wenn die zweite Gleichung $-6x + 2y = 4$ gewesen wäre, würden die gleichen Schritte bei $4 = 4$ enden, was immer wahr ist, und das System hätte unendlich viele Lösungen.

Substitution ist die natürliche Wahl, wenn ein Koeffizient $1$ oder $-1$ ist oder wenn eine Gleichung bereits als $y = \ldots$ oder $x = \ldots$ geschrieben ist.

---

## 5.8 Elimination

Eliminierung entfernt ein Unbekanntes durch Hinzufügen oder Subtrahieren ganzer Gleichungen. Es ist normalerweise die schnellere Methode, wenn kein Koeffizient $1$ ist.

Der Plan:

1. Schreibe beide Gleichungen als $ax + by = c$ .
2. Vereinfache jeden einzelnen und teile durch einen gemeinsamen Faktor, wenn du kannst.
3. Skalieren Sie eine oder beide Gleichungen, so dass eine unbekannte gleiche oder entgegengesetzte Koeffizienten hat.
4. Subtrahieren, wenn sie gleich sind, addieren, wenn sie entgegengesetzt sind. Das Unbekannte verschwindet.
5. Lösen Sie das verbleibende Unbekannte, ersetzen Sie es und überprüfen Sie es.

**Beispiel 1 (Koeffizienten stimmen bereits überein).**

$$
\begin{cases}
5x + 2y = 24,\\
3x + 2y = 16.
\end{cases}
$$

Die Terme $y$ sind identisch, also subtrahieren Sie die zweite Gleichung von der ersten:

$$
(5x - 3x) + (2y - 2y) = 24 - 16,
$$

$$
2x = 8, \qquad x = 4.
$$

Das Ersetzen in $3x + 2y = 16$ gibt $2y = 4$ , also $y = 2$ . Die Lösung ist $(4,2)$ .

**Beispiel 2 (Skala beide Gleichungen, dann hinzufügen).**

$$
\begin{cases}
2x + 3y = 16,\\
5x - 2y = 2.
\end{cases}
$$

Um $y$ zu entfernen, machen Sie die $y$ Koeffizienten $6$ und $-6$ . Multiplizieren Sie die erste Gleichung mit $2$ und die zweite mit $3$ :

$$
\begin{cases}
4x + 6y = 32,\\
15x - 6y = 6.
\end{cases}
$$

Die Terme $y$ sind jetzt entgegengesetzt, also fügen Sie hinzu:

$$
19x = 38, \qquad x = 2.
$$

Von $2x + 3y = 16$ erhalten wir $3y = 12$ , also $y = 4$ . Die Lösung ist $(2,4)$ .

**Beispiel 3 (verwenden Sie das kleinste gemeinsame Vielfache).**

$$
\begin{cases}
6x - 5y = 3,\\
4x + 3y = 21.
\end{cases}
$$

Um $x$ zu entfernen, verwenden Sie das kleinste gemeinsame Vielfache von $6$ und $4$ , was $12$ ist. Multiplizieren Sie die erste Gleichung mit $2$ und die zweite mit $3$ :

$$
\begin{cases}
12x - 10y = 6,\\
12x + 9y = 63.
\end{cases}
$$

Jetzt sind die Terme $x$ gleich, also subtrahieren Sie den ersten von dem zweiten:

$$
19y = 57, \qquad y = 3.
$$

Von $4x + 3(3) = 21$ erhalten wir $4x = 12$ , also $x = 3$ . Die Lösung ist $(3,3)$ . Überprüfen Sie die erste Gleichung: $6(3) - 5(3) = 3$ , wahr.

**Beispiel 4 (härter, große Skalierung und eine negative Antwort).**

$$
\begin{cases}
7x + 9y = 8,\\
5x - 4y = 37.
\end{cases}
$$

Entfernen Sie $y$ . Das kleinste gemeinsame Vielfache von $9$ und $4$ ist $36$ , also multipliziere die erste Gleichung mit $4$ und die zweite mit $9$ :

$$
\begin{cases}
28x + 36y = 32,\\
45x - 36y = 333.
\end{cases}
$$

Add them:

$$
73x = 365, \qquad x = 5.
$$

Von $7(5) + 9y = 8$ erhalten wir $9y = -27$ , also $y = -3$ . Die Lösung ist $(5,-3)$ . Überprüfen Sie die zweite Gleichung: $5(5) - 4(-3) = 25 + 12 = 37$ , wahr.

### Zwei Gewohnheiten, die Fehler verhindern

Schrumpfen, bevor Sie wachsen. In $4x + 6y = 22$ ist jeder Term gerade, also teile durch $2$ und arbeite mit $2x + 3y = 11$ . Kleinere Zahlen bedeuten weniger Ausrutscher.

Subtrahieren Sie vollständige Seiten, nicht einzelne Begriffe. Für Beispiel

$$
(2x + 3y) - (5x - 2y) = 2x + 3y - 5x + 2y = -3x + 5y.
$$

Beachten Sie, dass $-2y$ zu $+2y$ wurde. Das Vergessen dieses Vorzeichens ist der klassische Eliminierungsfehler, und das Schreiben der Subtraktion in Klammern verhindert es zuerst.

Genau wie die Substitution kündigt die Beseitigung die Sonderfälle an. Eine übrig gebliebene Aussage wie $0 = 7$ bedeutet keine Lösung und $0 = 0$ bedeutet unendlich viele.

---

## 5.9 Vergleich und Graphik

### Comparison

Wenn beide Gleichungen das gleiche Unbekannte geben, Menge die beiden Ausdrücke einander gleich.

**Beispiel 1.**

$$
\begin{cases}
y = 4x - 3,\\
y = x + 6.
\end{cases}
$$

Beide rechten Seiten sind gleich $y$ , also gleichen sie sich gegenseitig:

$$
4x - 3 = x + 6,
$$

$$
3x = 9, \qquad x = 3,
$$

und $y = 3 + 6 = 9$ . Die Lösung ist $(3,9)$ .

Dies ist Substitution, die unterschiedliche Kleidung trägt, und es ist der schnellste Weg, wenn beide Gleichungen bereits für dasselbe Unbekannte gelöst sind.

### Graphing

Zeichnen Sie beide Linien und lesen Sie den Kreuzungspunkt ab. Graphing eignet sich hervorragend zum Verständnis und zeigt sofort, in welchem der drei Fälle Sie sich befinden, da Sie sehen können, ob sich die Linien kreuzen, parallel verlaufen oder übereinstimmen.

Seine Schwäche ist Präzision. Eine Lösung wie $\left(\dfrac{7}{3}, \dfrac{4}{3}\right)$ kann nicht zuverlässig aus einem handgezeichneten Bild gelesen werden. Verwenden Sie also den Graphen, um zu sehen, was vor sich geht, und bestätigen Sie dann genaue Werte mit Substitution oder Eliminierung.

---

## 5.10 Zähllösungen aus den Koeffizienten

Manchmal ist die Frage nicht "was ist die Lösung", sondern "wie viele Lösungen gibt es". Sie können das beantworten, ohne etwas zu lösen.

Für das System

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2,
\end{cases}
$$

Vergleichen Sie die Verhältnisse der Übereinstimmungskoeffizienten.

| Zustand | Linien | Lösungen |
| --- | ---
| $\dfrac{a_1}{a_2} \neq \dfrac{b_1}{b_2}$ | Kreuz an einem Punkt | Genau eins |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} \neq \dfrac{c_1}{c_2}$ | Parallel und anders | Keine |
| $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | Die gleiche Linie | unendlich viele |

Die Idee hinter dem Tisch ist einfach. Die ersten beiden Verhältnisse vergleichen die Richtungen der Linien und die dritte vergleicht ihre Positionen. Gleiche Richtung und unterschiedliche Position bedeutet parallel. Gleiche Richtung und gleiche Position bedeutet eine Linie.

Ratios benötigen nicht null Nenner, so gibt es eine Division freie Version des gleichen Tests. Berechnung

$$
D = a_1b_2 - a_2b_1,
$$

wird als **determinant** des Systems bezeichnet. Wenn $D \neq 0$ , gibt es genau eine Lösung. Wenn $D = 0$ , haben die Linien die gleiche Richtung, und die Konstanten entscheiden, ob es keine Lösung oder unendlich viele gibt.

**Beispiel 1.**

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 11.
\end{cases}
$$

Hier $\dfrac24 = \dfrac36 = \dfrac12$ , aber $\dfrac{5}{11} \neq \dfrac12$ . Die Linien sind parallel, es gibt also keine Lösung. Die Determinante stimmt zu: $D = 2(6) - 4(3) = 0$ .

**Beispiel 2.**

$$
\begin{cases}
2x + 3y = 5,\\
4x + 6y = 10.
\end{cases}
$$

Jetzt sind alle drei Verhältnisse gleich $\dfrac12$ , so dass die beiden Gleichungen eine Linie beschreiben und es unendlich viele Lösungen gibt.

### Härtere Arbeit: Systeme mit einem Buchstaben in den Koeffizienten

Diese Probleme sehen einschüchternd aus und sind eigentlich nur die Tabelle oben, rückwärts gelesen.

**Beispiel 3.** Für welchen Wert von $k$ das System

$$
\begin{cases}
3x - ky = 7,\\
6x - 4y = 5
\end{cases}
$$

have no Lösung?

Keine Lösung benötigt die Richtungsverhältnisse gleich und das konstante Verhältnis unterschiedlich. So

$$
\frac{3}{6} = \frac{-k}{-4} = \frac{k}{4}, \qquad \frac{k}{4} = \frac12, \qquad k = 2.
$$

Überprüfen Sie die Konstanten: $\dfrac{7}{5} \neq \dfrac12$ , so dass mit $k = 2$ die Linien wirklich parallel sind und es keine Lösung gibt. Für jede andere $k$ unterscheiden sich die Richtungen, so dass es genau eine Lösung gibt, und kein Wert von $k$ gibt unendlich viele.

**Beispiel 4.** Für die $m$ und $n$

$$
\begin{cases}
2x + 3y = 7,\\
mx + 9y = n
\end{cases}
$$

have infinitely many Lösungs?

Alle drei Verhältnisse müssen übereinstimmen:

$$
\frac{2}{m} = \frac{3}{9} = \frac{7}{n} = \frac13.
$$

Von $\dfrac{2}{m} = \dfrac13$ erhalten wir $m = 6$ und von $\dfrac{7}{n} = \dfrac13$ erhalten wir $n = 21$ . Die zweite Gleichung muss also $6x + 9y = 21$ sein, was genau dreimal die erste ist.

**Beispiel 5.** Wobei $k$

$$
\begin{cases}
kx + 2y = 6,\\
3x - y = 4
\end{cases}
$$

have exactly one Lösung?

Verwenden Sie die Determinante: $D = k(-1) - 3(2) = -k - 6$ . Eine Lösung benötigt $D \neq 0$ , also $k \neq -6$ . Wenn $k = -6$ die erste Gleichung $-6x + 2y = 6$ wird, ist das $-3x + y = 3$ , während die zweite $-3x + y = -4$ sagt. Diese widersprechen einander, also gibt $k = -6$ keine Lösung.

---

## 5.11 Unordentliche Systeme und nützliche Tricks

Real questions rarely arrive in standard form. Clean up first, choose a method second.

### Brackets

Erweitern Sie alles und sammeln Sie dann ähnliche Begriffe.

**Beispiel 1.** Von

$$
2(x + 3y) - (x - y) = 10
$$

Wir bekommen $2x + 6y - x + y = 10$ , also $x + 7y = 10$ . Achten Sie auf das Minuszeichen vor der Halterung, da es beide Begriffe nach innen dreht.

### Fractions

Multiply every term by a common denominator.

**Beispiel 2.**

$$
\begin{cases}
\dfrac{x}{2} + \dfrac{y}{3} = 8,\\
\dfrac{x}{4} - \dfrac{y}{2} = 0.
\end{cases}
$$

Multiplizieren Sie die erste Gleichung mit $6$ und die zweite mit $4$ :

$$
\begin{cases}
3x + 2y = 48,\\
x - 2y = 0.
\end{cases}
$$

Die zweite Gleichung sagt $x = 2y$ . Substitutieren gibt $6y + 2y = 48$ , also $y = 6$ und $x = 12$ . Die Lösung ist $(12,6)$ .

### Decimals

Multiplizieren Sie mit einer Zehnerpotenz, die von der längsten Dezimalzahl gewählt wird.

**Beispiel 3.** Die Gleichung $0.3x + 0.05y = 1.2$ hat höchstens zwei Dezimalstellen, also multiplizieren Sie mit $100$ :

$$
30x + 5y = 120,
$$

und dann durch $5$ teilen, um $6x + y = 24$ zu erhalten.

### Proportions

Eine als Verhältnis gegebene Gleichung wird nach der Kreuzmultiplikation linear.

**Beispiel 4.** Von

$$
\frac{x + 1}{y + 2} = \frac34
$$

Wir bekommen $4(x + 1) = 3(y + 2)$ , also $4x + 4 = 3y + 6$ und schließlich $4x - 3y = 2$ .

### Unknowns in denominators

Eine Gleichung wie $\dfrac{3}{x} + \dfrac{2}{y} = 2$ ist nicht linear in $x$ und $y$ . Aber es ist linear in $\dfrac1x$ und $\dfrac1y$ , und das ist genug.

**Beispiel 5.** Lösen

$$
\begin{cases}
\dfrac{3}{x} + \dfrac{2}{y} = 2,\\
\dfrac{9}{x} - \dfrac{4}{y} = 1.
\end{cases}
$$

Es sind $u = \dfrac1x$ und $v = \dfrac1y$ . Das System wird gewöhnlich:

$$
\begin{cases}
3u + 2v = 2,\\
9u - 4v = 1.
\end{cases}
$$

Multiplizieren Sie die erste Gleichung mit $2$ , um $6u + 4v = 4$ zu erhalten, und fügen Sie dann die zweite hinzu:

$$
15u = 5, \qquad u = \frac13.
$$

Dann ergibt $3\left(\dfrac13\right) + 2v = 2$ $v = \dfrac12$ . Übersetzen Sie jetzt zurück: $x = \dfrac1u = 3$ und $y = \dfrac1v = 2$ . Überprüfen Sie die zweite ursprüngliche Gleichung: $\dfrac93 - \dfrac42 = 3 - 2 = 1$ , wahr.

Zwei Warnungen für diesen Trick. Verlieren Sie niemals den letzten Übersetzungsschritt, denn $u$ und $v$ sind nicht die Antwort. Und Null ist in einem Nenner nicht erlaubt, also können $x = 0$ und $y = 0$ hier niemals Lösungen sein.

### Grouped unknowns

Wenn $x + y$ und $x - y$ als Blöcke erscheinen, behandeln Sie die Blöcke als Unbekannte.

**Beispiel 6.** Lösen

$$
\begin{cases}
2(x + y) + 3(x - y) = 24,\\
4(x + y) - (x - y) = 20.
\end{cases}
$$

Es sind $s = x + y$ und $d = x - y$ :

$$
\begin{cases}
2s + 3d = 24,\\
4s - d = 20.
\end{cases}
$$

Aus der zweiten Gleichung $d = 4s - 20$ . Ersetzen gibt $2s + 12s - 60 = 24$ , also $14s = 84$ und $s = 6$ , dann $d = 4$ . Lösen Sie schließlich das kleine System $x + y = 6$ und $x - y = 4$ , das $x = 5$ und $y = 1$ ergibt.

### Choosing a method

| Situation | Bequeme Methode |
| | | | | |
| Eine unbekannte bereits isoliert | Substitution oder Vergleich |
| Ein Koeffizient gleich $1$ oder $-1$ | Substitution |
| Matching oder entgegengesetzte Koeffizienten | Eliminierung sofort |
Ungeschickte Koeffizienten auf beiden Unbekannten | Eliminierung nach der Skalierung |
| Brüche, Dezimalstellen oder Klammern | zuerst aufräumen, dann entscheiden |
| Unbekannt in Nennern | Ersatz $u = 1/x$ , $v = 1/y$ |
| Nur die Form der Antwort zählt | Graph oder der Verhältnistest |

Jede richtige Methode gibt die gleiche Lösungsmenge, so dass die Wahl nur über Geschwindigkeit und Komfort.

---

## 5.12 Probleme in Systeme umwandeln

Wortprobleme sind, wo dieses Kapitel seinen Platz verdient. Die Algebra ist die leichte Hälfte. Die wahre Fähigkeit ist die Übersetzung.

Die Routine:

1. Sagen Sie klar, was jeder Buchstabe bedeutet, mit Einheiten.
2. Schreiben Sie eine Gleichung für jede unabhängige Tatsache im Text.
3. Lösen Sie mit welcher Methode auch immer passt.
4. Lesen Sie die Zahlen zurück in die Geschichte und überprüfen Sie, ob sie auch dort sinnvoll sind.

Die nützlichste Phrase zur Notationskarte:

| Text | Gleichungsstück |
| --- | ---
Die Summe ist $30$ | $x + y = 30$ |
| $x$ ist $4$ mehr als $y$ | $x = y + 4$ | $x$ ist $4$ kleiner als $y$ | $x = y - 4$ | doppelt so viele $x$ wie $y$ | $x = 2y$ |
| das Verhältnis von $x$ zu $y$ ist $3 : 5$ | $5x = 3y$ |
| Gesamtkosten für $x$ Artikel bei $12$ jeweils | $12x$ |
| $15\%$ von $y$ | $0.15y$ |

**Beispiel 1 (Ziffern einer Zahl).** Die Ziffern einer zweistelligen Zahl addieren sich zu $11$ . Das Vertauschen der Ziffern macht die Zahl $27$ größer. Finde die Nummer.

Es sind $a$ die Zehnerziffer und $b$ die Einheiten Ziffer. Die Zahl selbst ist $10a + b$ , nicht $ab$ und das ist der Schritt, den die meisten Leute enthalten sind. Die getauschte Zahl ist $10b + a$ . Die beiden Fakten geben

$$
\begin{cases}
a + b = 11,\\
10b + a = 10a + b + 27.
\end{cases}
$$

Tidy die zweite Gleichung:

$$
9b - 9a = 27, \qquad b - a = 3.
$$

Fügen Sie dies zu $a + b = 11$ hinzu:

$$
2b = 14, \qquad b = 7, \qquad a = 4.
$$

Die Zahl ist $47$ . Überprüfen Sie die Geschichte: $4 + 7 = 11$ , und $74 - 47 = 27$ . Beide Ziffern sind ganze Zahlen zwischen $0$ und $9$ , daher ist die Antwort legal.

**Beispiel 2 (Mischen von zwei Lösungen).** Ein Labor mischt eine $40\%$ Säurelösung mit einer $15\%$ Säurelösung, um $20$ Liter $25\%$ zu erhalten. Lösung. Wie viel von jedem wird verbraucht?

Es seien $x$ Liter der starken Lösung und $y$ Liter der schwachen. Eine Gleichung zählt Liter Flüssigkeit, die andere Liter reine Säure:

$$
\begin{cases}
x + y = 20,\\
0.4x + 0.15y = 0.25(20) = 5.
\end{cases}
$$

Löschen Sie die Dezimalzahlen, indem Sie die zweite Gleichung mit $100$ multiplizieren und dann durch $5$ teilen:

$$
40x + 15y = 500, \qquad 8x + 3y = 100.
$$

Aus der ersten Gleichung $x = 20 - y$ , so

$$
8(20 - y) + 3y = 100,
$$

$$
160 - 5y = 100, \qquad y = 12, \qquad x = 8.
$$

Also $8$ Liter der $40\%$ Lösung und $12$ Liter der $15\%$ Lösung. Überprüfen Sie die Säure: $0.4(8) + 0.15(12) = 3.2 + 1.8 = 5$ , was $25\%$ von $20$ Litern ist.

**Beispiel 3 (Boot und Strömung).** Ein Boot fährt $36$ km stromabwärts in $2$ Stunden und das gleiche $36$ km stromaufwärts in $3$ Stunden. Finden Sie die Geschwindigkeit des Bootes in stillem Wasser und die Geschwindigkeit der Strömung.

Es sei $b$ die Bootsgeschwindigkeit und $c$ die aktuelle Geschwindigkeit, beide in km pro Stunde. Stromabwärts hilft der Strom, stromaufwärts wehrt er sich:

$$
\begin{cases}
b + c = \dfrac{36}{2} = 18,\\
b - c = \dfrac{36}{3} = 12.
\end{cases}
$$

Füge die Gleichungen hinzu: $2b = 30$ , also $b = 15$ , und dann $c = 3$ . Das Boot fährt $15$ km/h in stillem Wasser und die Strömung läuft bei $3$ km/h. Beide sind positiv, was sie sein müssen, und die Strömung ist langsamer als das Boot, sonst wäre es unmöglich, stromaufwärts zu gehen.

**Beispiel 4 (Kostenstruktur und Break-even).** Die monatlichen Gesamtkosten eines Standes betragen $1400$ , wenn er $100$ Tassen serviert, und $2600$ , wenn er $250$ Tassen serviert. Die Kosten werden aus einem festen Teil und einem konstanten Betrag pro Tasse gemacht. Finden Sie beide Teile und finden Sie dann, wie viele Tassen zu einem Preis von $20$ pro Tasse verkauft werden müssen, um den Gewinn zu erzielen.

Es seien $F$ die Fixkosten pro Monat und $v$ die variablen Kosten pro Tasse:

$$
\begin{cases}
F + 100v = 1400,\\
F + 250v = 2600.
\end{cases}
$$

Subtrahieren Sie die erste Gleichung von der zweiten:

$$
150v = 1200, \qquad v = 8,
$$

und dann $F = 1400 - 100(8) = 600$ . Der Stand zahlt also jeden Monat $600$ plus $8$ pro Tasse.

Break-Even bedeutet, dass Einnahmen den Gesamtkosten entsprechen. Mit $q$ Tassen verkauft zu $20$ jeder,

$$
20q = 600 + 8q,
$$

$$
12q = 600, \qquad q = 50.
$$

Fünfzig Tassen pro Monat decken die Kosten. Beachten Sie, wie das System das Kostenmodell produzierte, und das Modell beantwortete dann eine neue Frage.

**Beispiel 5 (zwei Arbeitssätze).** Zusammen arbeitend, beendet eine Maschine für $3$ Stunden und eine andere für $4$ Stunden genau einen Job. Der gleiche Job ist auch beendet, wenn die erste Maschine $6$ Stunden und die zweite Maschine $2$ Stunden arbeitet. Wie lange braucht jede Maschine allein?

Preise sind die Unbekannten hier, nicht Zeiten. Sei $a$ der Bruchteil des Jobs, den die erste Maschine in einer Stunde erledigt, und $b$ dasselbe für die zweite Maschine:

$$
\begin{cases}
3a + 4b = 1,\\
6a + 2b = 1.
\end{cases}
$$

Multiplizieren Sie die erste Gleichung mit $2$ :

$$
6a + 8b = 2,
$$

Subtrahieren Sie dann die zweite Gleichung:

$$
6b = 1, \qquad b = \frac16.
$$

Von $3a + 4\left(\dfrac16\right) = 1$ erhalten wir $3a = \dfrac13$ , also $a = \dfrac19$ . Eine Rate von $\dfrac19$ des Jobs pro Stunde bedeutet, dass die erste Maschine $9$ Stunden allein und die zweite $6$ Stunden allein benötigt.

**Beispiel 6 (Geld aufgeteilt zu zwei Raten).** Ein Betrag von $10000$ wird zwischen einem Konto, das $5\%$ pro Jahr zahlt, und einem, das $8\%$ pro Jahr zahlt, aufgeteilt. Das Gesamtinteresse für das Jahr ist $680$ . Wie viel ging in jedes Konto?

Es sei $x$ der Betrag bei $5\%$ und $y$ der Betrag bei $8\%$ :

$$
\begin{cases}
x + y = 10000,\\
0.05x + 0.08y = 680.
\end{cases}
$$

Multiplizieren Sie die zweite Gleichung mit $100$ , um $5x + 8y = 68000$ zu erhalten, und ersetzen Sie $x = 10000 - y$ :

$$
50000 - 5y + 8y = 68000,
$$

$$
3y = 18000, \qquad y = 6000, \qquad x = 4000.
$$

Also $4000$ bei $5\%$ und $6000$ bei $8\%$ .

### Die Geschichte Mengen Extra Regeln

Algebra weiß nicht, was die Buchstaben bedeuten, also müssen Sie den Sinn des Problems selbst anwenden. Anzahl der Personen, Tickets oder Maschinen müssen ganze Zahlen sein. Längen, Preise, Massen und Geschwindigkeiten können nicht negativ sein. Eine Ziffer muss zwischen $0$ und $9$ liegen. Wenn die Algebra $-3$ Stühle oder $2.5$ Studenten zurückgibt, ist das Modell oder die Arithmetik falsch, obwohl die Zahlen die Gleichungen erfüllen.

---

## 5.13 Überprüfung und die zu vermeidenden Fehler

### Wie man richtig überprüft

Setze das Paar in **beide original** Gleichungen, die als erste geschrieben. Die Überprüfung gegen Ihre eigene neu arrangierte Version ist schwach, da jeder Fehler, den Sie beim Umordnen gemacht haben, wiederholt und versteckt wird.

Für $(2,4)$ im System von Beispiel 2 in §5.8:

$$
2(2) + 3(4) = 16, \qquad 5(2) - 2(4) = 2.
$$

Beide sind wahr, also ist das Paar bestätigt.

Wenn die Antwort von einem Wortproblem stammt, führen Sie einen zweiten Check in Wörtern aus. Fügen die beiden Zahlen wirklich zu dem hinzu, was der Text sagte, und machen sie Sinn als Objekte, Preise oder Geschwindigkeiten?

### Frequent mistakes

1. **Versuchen, zwei Unbekannte mit einer Gleichung festzuhalten. ** Eine Gleichung hinterlässt eine ganze Reihe von Paaren.
2. **Umkehren einer Beziehung. $x$ ist $4$ kleiner als $y$ ist $x = y - 4$ . Das Lesen als $x = y + 4$ ändert das ganze Problem.
3. **Schreiben einer zweistelligen Zahl als $ab$ .** Es ist $10a + b$ .
4. ** Multiplizieren Sie nur eine Seite oder nur einen Teil einer Seite. ** Skalierung $2x + 3y = 12$ von $3$ ergibt $6x + 9y = 36$ .
5. **Verlieren eines Zeichens beim Subtrahieren von Gleichungen.** Klammern Sie zuerst beide Seiten, dann entfernen Sie die Halterungen.
6. **Setze die Gleichung durch den Ausdruck. ** Verwenden Sie immer die andere Gleichung.
7. **Stoppen nach einem Unbekannten. ** Die Antwort ist ein Paar, also beenden Sie die Rücksubstitution.
8. **In nur einer Gleichung prüfen.** Ein falsches Paar befriedigt oft einen von ihnen.
9. ** Lesen $0 = 5$ als $x = 0$ .** Ein Widerspruch bedeutet keine Lösung.
10. **Lesen $0 = 0$ als keine Lösung.** Eine Identität bedeutet unendlich viele Lösungen.
11. ** Runden in der Mitte. ** Halten Sie Brüche bis zur letzten Zeile, dann Runde einmal, wenn gefragt.
12. **Ignorieren, was die Geschichte erlaubt. ** Negative Zählungen und fraktionierte Menschen sind keine Antworten.

---

## 5.14 Zusammenfassung reference

| Aufgabe | Methode |
| --- | ---
| Eine lineare Gleichung erkennen | Es kann als $ax + by = c$ geschrieben werden, nur erste Kräfte |
| Beschreibe die Lösungen einer Gleichung | Unendlich viele Paare, die eine gerade Linie bilden |
| Löse ein System | Finde jedes Paar, das beide Gleichungen erfüllt |
| Eine unbekannte bereits isoliert | Substitution oder Vergleich |
| Ein Koeffizient von $1$ oder $-1$ | Substitution |
| Koeffizienten passen oder sind entgegengesetzt | Eliminierung |
| Ungeschickte Koeffizienten | Skalieren Sie auf ein gemeinsames Vielfaches, dann eliminieren |
Brüche oder Dezimalzahlen multiplizieren, um sie zu löschen
| Unbekannte in Nennern | Menge $u = 1/x$ , $v = 1/y$ , lösen, dann zurück übersetzen |
| $x + y$ und $x - y$ als Blöcke | Menge $s = x + y$ , $d = x - y$ |
| Zählen Sie die Lösungen | Vergleichen Sie Koeffizientenverhältnisse oder testen Sie $D = a_1b_2 - a_2b_1$ |
| Ein Widerspruch erscheint | Keine Lösung |
| Eine Identität erscheint | unendlich viele Lösungen |
| Verifizieren | Setze beide Original-Gleichungen und lesen Sie die Geschichte erneut |

Standardform eines Systems:

$$
\begin{cases}
a_1x + b_1y = c_1,\\
a_2x + b_2y = c_2.
\end{cases}
$$

Steigungsform einer Gleichung, wenn $b \neq 0$ :

$$
y = -\frac{a}{b}x + \frac{c}{b}.
$$

Uniqueness test:

$$
D = a_1b_2 - a_2b_1, \qquad D \neq 0 \ \Rightarrow \ \text{exactly one Lösung}.
$$

**Arbeitsauftrag.** Reinigen Sie beide Formeln in Standardform und klare Brüche, Dezimalstellen und Klammern. Wählen Sie Substitution, wenn ein Unbekanntes leicht zu isolieren ist, und Eliminierung, wenn Koeffizienten leicht zu vergleichen sind. Lösen Sie für ein Unbekanntes, ersetzen Sie das andere und schreiben Sie die Antwort als geordnetes Paar. Dann überprüfen Sie das Paar in beiden ursprünglichen Gleichungen und lesen Sie einen Widerspruch als keine Lösung und eine Identität als unendlich viele.

**Selbstkontrolle.** Warum hat eine einzelne lineare Gleichung in zwei Unbekannten unendlich viele Lösungen? Was bedeutet eine Lösung eines Systems in einem Graphen? Was sind die drei möglichen Positionen von zwei Linien, und was bedeutet jede für die Lösungsmenge? Welche Transformationen eines Systems sind erlaubt und zwei sind verboten? Wann ist Substitution schneller als Eliminierung? Wie sagen Ihnen die Koeffizientenverhältnisse oder die Determinante die Anzahl der Lösungen, bevor Sie lösen? Was bedeuten die Endungen $0 = 0$ und $0 = 5$ ? Warum wird eine zweistellige Zahl als $10a + b$ geschrieben? Und warum kann ein Paar, das beide Gleichungen erfüllt, immer noch eine falsche Antwort auf ein Wortproblem sein?
