# Kapitel 4 — Gleichungen

Eine Gleichung fragt, wann zwei Ausdrücke den gleichen Wert haben. Bei der BBE-Mathematikprüfung geht es in Kapitel 4 weniger um Arithmetik als vielmehr um Regeln: welche Technik passt, welche Werte erlaubt sind, wie viele Lösungen existieren und ob eine vorgeschlagene Wurzel eine Domänenprüfung überlebt.

Dieser Leitfaden folgt der Live-Kapitel-4-Karte (4.1-4.5). Es verbringt den größten Teil seines Raums mit den Regeln selbst. Ein kurzer Schlussblock zeigt dann, wie diese Regeln in schwierigen Wahr/Falsch-Prüfungsaufgaben erscheinen.

## Lernziele

- Reduzieren Sie eine lineare Gleichung auf $Ax=B$ und klassifizieren Sie eindeutige / keine / unendlich viele Lösungen, einschließlich Parameterfälle.
Verwenden Sie die Diskriminante und Vieta auf der Quadratik und erkennen Degeneration, wenn der führende Koeffizient verschwindet.
Anwendung von Domänenregeln und Fremd-Wurzel-Prüfungen auf rationale, radikale und absolute Gleichungen.
Verwenden Sie das Umschreiben der gleichen Basis, die Substitution $u=a^{x}>0$ und die Protokollkonvertierung mit Argumentbeschränkungen.
- Getrennte algebraische und stoffliche Ausgangserzeugnisse in gebührenpflichtigen, arbeitsplatzabhängigen und wachstumsbezogenen Geschichten.
- Richter Wahr/Falsch Behauptungen aus dem gelösten Bild, nicht aus Slogans.

---

## 4.1 Linear Gleichungen in one unknown

### Was „linear hier bedeutet

Nach dem Erweitern von Klammern und dem Kombinieren ähnlicher Begriffe kann eine lineare Gleichung in einer unbekannten immer geschrieben werden

$$
Ax=B,
$$

wobei $A$ und $B$ nicht $x$ enthalten. Jede erlaubte Bewegung (das Hinzufügen der gleichen Menge zu beiden Seiten, das Multiplizieren beider Seiten mit einer Nicht-Null-Konstante, das Löschen eines gemeinsamen Nenners) soll diese Form erreichen, ohne die Lösungsmenge zu ändern, mit Ausnahme von Werten, die Sie absichtlich ausschließen, weil ein Nenner Null war.

### Die drei Fälle von $Ax=B$

| Zustand | Bedeutung | Prüfungsformulierung |
| --- | ---
| $A\neq 0$ | Einzigartige Lösung $x=\dfrac{B}{A}$ | “genau eine Lösung”, “das einzigartige Gleichgewicht”, ... |
| $A=0$ und $B\neq 0$ | Widerspruch: $0=B\neq 0$ | “keine Lösung”, “unmöglich für jeden $x$ ” |
| $A=0$ und $B=0$ | Identität: $0=0$ für jeden erlaubten $x$ | „wahr für alle $x$ , „eine Identität, „unendlich viele Lösungen |

Diese drei Fälle sind die lineare Kernregel. Fast jede parametrische Wahr/Falsch Behauptung fragt, in welcher der drei Boxen Sie sich befinden.

**Regel.** Eine Gleichung ist nur dann eine Identität, wenn sowohl $A=0$ als auch $B=0$ gleichzeitig gelten. Ein Parameter, der in den Koeffizienten erscheint, reicht nicht aus.

### Clearing fractions

Wenn Begriffe Nenner haben, multiplizieren Sie jeden Begriff mit einem gemeinsamen Vielfachen dieser Nenner (oft ihr Produkt). Dieser Schritt ist nur von den Nullen dieser Nenner erlaubt.

**Regeln beim Clearing von Brüchen**

1. Liste ausgeschlossene Werte zuerst: jeder Nenner $\neq 0$ .
2. Multiplizieren Sie die gesamte Gleichung mit dem gemeinsamen Vielfachen, nicht nur mit einer Seite.
3. Erweitern und Sammeln in $Ax=B$ .
4. Lösen, dann lehnen Sie jeden Kandidaten ab, der einen ausgeschlossenen Wert erreicht (dies ist für rationale Gleichungen in 4.3 wichtiger, aber die Gewohnheit beginnt hier).

### Parameters

Wenn $A$ oder $B$ von einem Parameter $a$ abhängt, behandeln Sie $a$ als vorübergehend fixiert und lösen Sie nach $x$ . Sie erhalten entweder

- eine Formel $x=x(a)$ über die Menge, in der $A(a)\neq 0$ , oder
- ein Spezialfall $A(a)=0$ , der mit der Drei-Fall-Tabelle oben klassifiziert werden muss.

**Regeln für Parameter Behauptungen**

1. Schreiben Sie die ausgeschlossene Menge für $a$ (Nenner und später jeder Wert, der ein Modell undefiniert macht).
2. Form $A(a)$ und $B(a)$ sorgfältig; ein Zeichenfehler ruiniert hier jede spätere Behauptung.
3. Auf $\{a:A(a)\neq 0\}$ , Studie $x(a)=\dfrac{B(a)}{A(a)}$ : Zeichendiagramme, Ganzzahlbedingungen, Ungleichungen wie $x\geq 0$ .
4. Auf $\{a:A(a)=0\}$ entscheiden Sie separat, ob $B(a)=0$ (Identität) oder $B(a)\neq 0$ (keine Lösung).
5. Verschmelze niemals diese beiden Welten. Eine Behauptung "für jeden $a>3$ gibt es ein einzigartiges Negativ $x$ " handelt vom Formelzweig, nicht von einer Identität.

**Integrierte Lösungen.** Wenn $x(a)$ zu etwas wie $-3+\dfrac{5}{3-a}$ vereinfacht wird, dann ist der Wert $x$ genau dann ganzzahlig, wenn $3-a$ $5$ teilt. Diese Teilersprache ist ein Standard-Prüfungsschritt.

### Word models

Fee, Budget und Mixture Stories sind immer noch lineare Gleichungen. Die zusätzliche Regel ist ein physikalischer Filter: Nach dem Lösen verwerfen Sie Wurzeln, die eine explizite Einschränkung im Stamm verletzen (positiver Preis, nicht negative Menge usw.). Algebra kann eine negative Wurzel erlauben; die Geschichte kann nicht.

---

## 4.2 Quadratic Gleichungen

### Standard form

Eine quadratische Gleichung ist

 $$
ax^{2}+bx+c=0\qquad\text{with }a\neq 0.
$$

Die Bedingung $a\neq 0$ ist Teil der Definition. Wenn ein Stamm eine Formel schreibt, die quadratisch aussieht, aber $a=0$ erlaubt, müssen Sie die quadratische Theorie verlassen und auf die lineare Drei-Fall-Regel zurückgreifen.

### Discriminant rule

$$
\Delta=b^{2}-4ac.
$$

| | | | | | | | | | | | | | | | | | | | | |
| --- | ---
| $\Delta>0$ | Zwei verschiedene reale Wurzeln | Das Parabel kreuzt die Achse zweimal. |
| $\Delta=0$ | Eine echte Wurzel, Multiplizität zwei | Das Parabel berührt einmal; immer noch ein $x$ -Wert. |
| $\Delta<0$ | Keine wirklichen Wurzeln | Keine wirkliche Kreuzung |

Die quadratische Formel

$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}
$$

ist nur verfügbar, wenn $\Delta\geq 0$ (für echte Lösungen) und $a\neq 0$ .

**Regel.** "Zahl der realen Lösungen" zählt verschiedene reale $x$ -Werte, es sei denn, der Stamm sagt ausdrücklich "Multiplizität zählen". Eine doppelte Wurzel ist eine echte Lösung mit der Vielfalt zwei.

### Vieta’s rules

Wenn $a\neq 0$ und die Wurzeln $x_{1},x_{2}$ reell sind (Multiplizität zählen),

$$
x_{1}+x_{2}=-\frac{b}{a},\qquad x_{1}x_{2}=\frac{c}{a}.
$$

**Wie man sie auf Wahr/Falsch Behauptungen verwendet**

- Gleiches Zeichen von Wurzeln: brauchen $x_{1}x_{2}>0$ (und schauen Sie sich normalerweise auch die Summe an, um sowohl positiv als auch negativ zu entscheiden).
Gegensätzliche Zeichen: brauchen $x_{1}x_{2}<0$ , das heißt $\dfrac{c}{a}<0$ .
- Summe Null: $x_{2}=-x_{1}$ iff $b=0$ .

**Regel.** $\Delta>0$ allein bedeutet **nicht** gegensätzliche Zeichen. Sie benötigen auch den Produkttest.

### Degenerationsregel, wenn der führende Koeffizient verschwindet

Wenn der Stamm $(k-1)x^{2}+\cdots=0$ und $k=1$ ist, verschwindet der Term $x^{2}$ . Die Gleichung wird linear (oder eine konstante Gleichung). Die linearen Fälle sind anzuwenden.

**Regel.** "Leading coefficient zero ⇒ no Solution" ist generell Falsch. Es kann eine perfekt lösbare lineare Gleichung oder eine Identität oder ein Widerspruch werden. Sie müssen überprüfen.

### Factoring und Vervollständigen des Quadrats

Ein Faktorisieren über die Realen ist möglich, wenn $\Delta$ ein perfektes Quadrat ist (für rationale Koeffizienten) oder allgemeiner, wenn die Wurzeln real sind. Das Quadrat neu schreiben

$$
ax^{2}+bx+c=a\left(\left(x+\frac{b}{2a}\right)^{2}-\frac{\Delta}{4a^{2}}\right)
$$

und macht den Scheitelpunkt und das Zeichen von $\Delta$ sichtbar. Beide Methoden gehorchen derselben diskriminierenden Regel; sie sind keine zweite Theorie.

### Substitution rule

Eine Gleichung in $x^{2}$ oder $x+\dfrac{1}{x}$ ist oft quadratisch in einem neuen unbekannten $u$ .

**Rules**

1. Definieren Sie $u$ explizit ( $u=x^{2}$ , $u=2^{x}$ , ...).
2. Lösen Sie die quadratische für $u$ .
3. Übersetzen Sie jeden $u$ -Wurzel zurück zu $x$ , mit dem Bereich von $u$ .
4. Endgültige $x$ -Lösungen sorgfältig zählen: jedes $u>0$ in $u=x^{2}$ gibt zwei reelle $x$ ; $u=0$ gibt eins; $u<0$ gibt keines.

### Applied parabolas

Für $P(q)=-(q-r)(q-s)$ mit $r<s$ :

- Wurzeln sind $q=r$ und $q=s$ ;
- die Achse ist $q=\dfrac{r+s}{2}$ ;
- weil das führende Verhalten $-q^{2}$ ist, hat man $P(q)>0$ für $q\in(r,s)$ und $P(q)<0$ außerhalb $[r,s]$ .

**Regel.** Die Achslage ist nicht dasselbe wie der Maximalwert. Der Maximalwert wird an der Achse $P$ ausgewertet.

---

## 4.3 Rationale, radikale und absolute Gleichungen

### Rational Gleichungen: domain first

Eine rationale Gleichung ist eine Gleichheit von rationalen Ausdrücken. Die Regel lautet:

**Domain first, algebra second, check last.**

1. **Domain.** Jeder Nenner $\neq 0$ . Schreiben Sie die ausgeschlossene Menge, bevor Sie das LCD berühren.
2. ** Klar.** Multiplizieren Sie mit dem LCD auf der Domain.
3. ** Löse die Polynom-Beziehung, die du erhältst.
4. **Check.** Verwerfen Sie jeden Kandidaten in der ausgeschlossenen Menge.

**Regel über Stornierung.** Wenn Sie einen Faktor $(x-c)$ abbrechen, "sieht" die vereinfachte Gleichung nicht mehr $x=c$ . Aber wenn $x=c$ einen ursprünglichen Nenner Null gemacht hat, bleibt es verboten. Sie können es nicht wieder in die vereinfachte Formel stecken und nennen, dass ein Wert der ursprünglichen linken Seite.

### Fremde Ursachen aus dem Clearing

Das Multiplizieren mit einem LCD, das von $x$ abhängt, kann im Prinzip Extras einführen, wenn Sie mit Null multiplizieren. In der Praxis, mit einem echten LCD aus den Nennern gebaut, ist der übliche Schaden das Gegenteil: Sie müssen sich an die Löcher erinnern, mit denen Sie begonnen haben. In jedem Fall ist die Überprüfung der Domain obligatorisch.

### Arbeitsgeschwindigkeit und durchschnittliche Geschwindigkeit

Ein Zwei-Arbeiter-Modell sieht oft aus wie

$$
\frac{1}{x}+\frac{1}{x+d}=\frac{1}{T}
$$

mit $x>0$ , $x+d>0$ , $T>0$ . Nach dem Clearing erhalten Sie normalerweise eine quadratische. Algebra kann zwei gründe geben; die geschichte enthält nur diejenigen, die die positivität (und andere angegebene) einschränkungen erfüllen.

**Regel.** Eine negative Wurzel der gelöschten Gleichung ist nicht automatisch eine Lösung des ursprünglichen Ratenproblems.

### Radikale Gleichungen: Einweg-Implikation der Quadratur

Sogar Wurzeln erfordern nicht-negative Radikale. Das ist die Domänenregel.

Die algebraische Gefahr ist anders: wenn $U=V$ , dann $U^{2}=V^{2}$ , aber das Gegenteil ist Falsch. Quadratur kann eine falsche Gleichheit in eine wahre verwandeln. Also:

1. Schreiben Sie die Domain (radicands $\geq 0$ , und alle anderen Einschränkungen).
2. Einen Radikalen isolieren.
3. Beide Seiten quadrieren.
4. Lösen.
5. **Testen Sie jeden Kandidaten in der ursprünglichen Gleichung** (und gegen die Domain).

**Regel.** Ein Kandidat kann aus zwei verschiedenen Gründen scheitern: Er verlässt die Domäne oder er bleibt in der Domäne, erfüllt aber die nicht quadrierte Gleichung nicht. Exam Behauptungen verwechseln oft diese beiden Gründe. Lesen Sie sie sorgfältig durch.

Substitutionen wie $u=\sqrt{f(x)}$ fügen die Regel $u\geq 0$ durch Definition der Quadratwurzel hinzu. Negative $u$ -Wurzeln des Hilfsquadrats werden verworfen, selbst wenn das entsprechende $x$ im Radicandbereich gewesen wäre.

### Absolutwert-Gleichungen

Die Definition

$$
\lvert A\rvert=
\begin{cases}
A,& A\geq 0,\\
-A,& A<0
\end{cases}
$$

impliziert die Lösungsregel

| Rechts | Lösungen von $\lvert A\rvert=c$ |
| --- | ---
| $c>0$ | $A=c$ oder $A=-c$ |
| $c=0$ | $A=0$ |
| $c<0$ | keine wirkliche Lösung |

**Geometrische Regel.** $\lvert x-a\rvert$ ist der Abstand von $x$ zu $a$ auf der Linie. Also $\lvert x-a\rvert=\lvert x-b\rvert$ bedeutet $x$ ist äquidistant von $a$ und $b$ , daher $x=\dfrac{a+b}{2}$ .

**Ungleichheitsgefährten** (oft in Behauptungen gemischt):

$$
\lvert A\rvert<c\ (c>0)\ \Longleftrightarrow\ -c<A<c,
$$

 $$
\lvert A\rvert>c\ (c>0)\ \Longleftrightarrow\ A<-c\text{ or }A>c.
$$

**Regel.** Identitäten wie $\lvert x+y\rvert=\lvert x\rvert+\lvert y\rvert$ sind nicht immer wahr. Sie scheitern, wenn $x$ und $y$ entgegengesetzte Anzeichen haben.

---

## 4.4 Exponentielle und logarithmische Gleichungen

### Gleiche Basisregel für Exponentiale

Wenn $a>0$ und $a\neq 1$ , ist die Karte $t\mapsto a^{t}$ eins zu eins auf $\mathbb{R}$ . Daher

$$
a^{f(x)}=a^{g(x)}
\quad\Longleftrightarrow\quad
f(x)=g(x).
$$

**Regel.** Sie müssen zuerst beide Seiten mit der **samen ** Basis umschreiben. $4^{x}=(2^{x})^{2}=2^{2x}$ $8^{x}=(2^{x})^{3}$ , und so weiter.

### Range Rule für $a^{x}$

Für $a>0$ , $a\neq 1$

 $$
a^{x}>0\qquad\text{for every real }x.
$$

Es gibt kein echtes $x$ mit $a^{x}\leq 0$ . Diese einzelne Tatsache treibt die meisten exponentiellen Wahr/Falsch-Falle nach einer Substitution $u=a^{x}$ .

### Substitution $u=a^{x}$

Many exam Gleichungen become quadratic in $u$:

1. Schreibe jeden Exponentialen in der Basis um $a$ .
2. Menge $u=a^{x}$ .
3. Lösen Sie die quadratische in $u$ .
4. Halten Sie nur positiv $u$ -Wurzeln.
5. Zurück zu $x=\log_{a} u$ (ein echtes $x$ pro positivem $u$ ).

**Regel.** Eine negative oder nullte Wurzel der $u$ -Quadrat ist keine exponentielle Lösung, auch wenn $\Delta>0$ für diese Quadratik ist.

Wenn das $u$ -Quadrat $\Delta<0$ hat, gibt es kein reales $u$ und daher kein reales $x$ .

### Logarithmic conversion rule

Für $b>0$ , $b\neq 1$ und $A>0$

$$
\log_{b} A=c
\quad\Longleftrightarrow\quad
A=b^{c}.
$$

Die Argumentbeschränkung $A>0$ ist obligatorisch. Das Ändern der Gleichung in exponentielle Form entfernt sie nicht; Sie überprüfen immer noch $A>0$ am Ende (und oft vorne).

### Logarithmus-Algebraregeln (mit Domäne)

Für $x>0$ , $y>0$

$$
\log_{b}(xy)=\log_{b} x+\log_{b} y,
\qquad
\log_{b}\!\left(\frac{x}{y}\right)=\log_{b} x-\log_{b} y,
\qquad
\log_{b}(x^{r})=r\log_{b} x.
$$

**Regel.** Die Summenregel erfordert **jeden ** Faktor positiv. Wenn $x<0$ und $y<0$ , dann $xy>0$ so $\log_{b}(xy)$ kann existieren, aber $\log_{b} x$ und $\log_{b} y$ nicht. Schreiben $\log_{b}(xy)=\log_{b} x+\log_{b} y$ in diesem Fall ist Falsch.

### Growth models

Für $N(t)=N_{0}\cdot 2^{t/T}$ mit $N_{0}>0$ und $T>0$ :

- $N$ ist immer positiv;
- Erhöhung $t$ um $T$ multipliziert $N$ um $2$ ;
- Erhöhung von $t$ um $2T$ multipliziert $N$ mit $4$ , nicht durch Hinzufügen von $2N_{0}$ .

**Regel.** Verdoppelung ist Multiplikation, nicht Addition. Nach zwei Verdopplungsperioden haben Sie $4N_{0}$ , niemals $3N_{0}$ .

---

## 4.5 Gemischte Prüfung Mengen und Wahr/Falsch Strategie

Unterabschnitt 4.5 verwendet die oben genannten Regeln für interne Gebühren, Überschüsse, Arbeitsraten und Wachstumsgeschichten wieder. Die fünf Behauptungen A–E sind unabhängig.

### Working order

1. **Inventar.** Unbekannte, Parameter, Domänenausschlüsse, physikalische Einschränkungen.
2. **Klassifizieren.** Linear, quadratisch, rational, radikal, absolut, exponentiell oder log.
3. ** Wenden Sie die Matching-Regeln** von 4.1-4.4 an, einschließlich Degenerationsfällen.
4. ** Überprüfen Sie** Kandidaten gegen Domain- und Story-Einschränkungen.
5. ** Beurteile jede Behauptung** aus diesem fertigen Bild.

### Was Wahr/Falsch Behauptungen normalerweise testen

| Behauptungstyp | Regel, die Sie brauchen
| --- | ---
| Anzahl der Lösungen | Diskriminant, $Ax=B$ Fälle oder Positiv- $u$ Filter |
| Zeichen einer parametrierten Wurzel | Zeichendiagramm von $x(a)$ |
| “Identität für einige $a$ ” | Simultan $A(a)=B(a)=0$ |
| „Wert an einem stornierten Loch | Domainausschluss überlebt Vereinfachung |
| „Gegenzeichen Wurzeln | Produkt $c/a$ , nicht nur $\Delta>0$ |
| Wachstumsarithmetik | Multiplizieren Sie mit Potenzen von $2$ , addieren Sie nicht |

### Frequent Falsch slogans

Slogan Warum es scheitert
| --- | ---
| Quadratur bewahrt die Lösung Menge | Umgekehrte Implikation ist falsch; Extras erscheinen. |
| Cancelled Hole kann ausgewertet werden | Der ursprüngliche Nenner verbietet diese Eingabe immer noch. |
| Leitkoeffizient $0$ ⇒ keine Lösung | Kann zu einer lösbaren linearen Gleichung werden. |
| $\Delta>0$ ⇒ Gegenzeichen Wurzeln | Brauchen Sie auch $x_{1}x_{2}<0$ . |
| $\log(xy)=\log x+\log y$ ohne Überprüfungen | Jeder Faktor muss positiv sein. |
T4 kann negativ sein. Der Bereich ist $(0,\infty)$ . |
| Zwei Verdopplungen addieren $2N_{0}$ | Sie multiplizieren sich mit $4$ . |

---

## 4.6 A few difficult exam-style tasks

Das Bankformat ist ein Stamm und fünf unabhängige Wahr/Falsch Behauptungen. Die drei folgenden Aufgaben dienen der Ausübung der Regeln, nicht deren Ersetzung. Lesen Sie den übereinstimmenden Abschnitt oben, bevor Sie diese nach Mustern suchen.

### Exam task 1 — Parametric linear equation

Für $a\neq -1$

$$
\frac{ax-6}{a+1}+2=\frac{3x-a}{a+1}.
$$

**A.** Für jedes $a>3$ ist die einzigartige Lösung $x$ strikt negativ.
**B.** Wenn $a\in(0,1)$ , dann ist $x$ streng positiv.
**C.** Es gibt $a\neq -1$ , für die die Gleichung eine Identität ist.
**D.** Genau drei verschiedene ganze Zahlen $a$ ergeben eine ganzzahlige Lösung $x$ .
**E.** Man hat $x\geq 0$ if und nur wenn $a\in\left[\dfrac{4}{3},3\right)$ .

**Lösung (rules in action).**

Clear $a+1$: $(a-3)x=4-3a$.

Wenn $a\neq 3$ , dann $x=\dfrac{3a-4}{3-a}=-3+\dfrac{5}{3-a}$ .
- Wenn $a=3$ , dann $0=4-9=-5\neq 0$ : keine Lösung.
- Identität würde $a-3=0$ und $4-3a=0$ zusammen brauchen: unmöglich.

**A Wahr:** für $a>3$ , Zähler $3a-4>0$ und Nenner $3-a<0$ , also $x<0$ , und Einzigartigkeit gilt.
**B Falsch:** auf $(0,1)$ bekommt man $x<0$ .
**C Falsch:** niemals beide Koeffizienten verschwinden.
**D Falsch: $x$ integer iff $3-a$ dividiert $5$ , also $3-a\in\{\pm1,\pm5\}$ , was vier ganze Zahlen $a\in\{2,4,8,-2\}$ ergibt.
**E Wahr:** Zeichendiagramm von $\dfrac{3a-4}{3-a}$ auf $\mathbb{R}\setminus\{-1,3\}$ liefert $x\geq 0$ genau auf $\left[\tfrac{4}{3},3\right)$ .

**Answers:** A Wahr, B Falsch, C Falsch, D Falsch, E Wahr.

### Prüfungsaufgabe 2 — Parametrisierte Quadratik und Degeneration

$$
(k-1)x^{2}-2(k+1)x+(2k-1)=0.
$$

**A.** Eine doppelte reale Wurzel tritt genau bei $k=0$ und $k=5$ auf.
**B.** Wenn $k=1$ , gibt es keine wirkliche Lösung.
**C.** Immer wenn die Gleichung quadratisch und $\Delta>0$ ist, haben die Wurzeln entgegengesetzte Vorzeichen.
**D.** Wenn $k=5$ , ist die einzigartige Wurzel $x=\dfrac{3}{2}$ .
**E.** Für $k=0$ erzeugt die Substitution $x=y^{2}$ vier verschiedene reelle $y$ .

**Lösung.**

Für $k\neq 1$ , $\Delta=4k(5-k)$ , also $\Delta=0$ bei $k=0$ und $k=5$ .

**A Wahr.**
**B Falsch: $k=1$ gibt $-4x+1=0$ , also $x=\dfrac14$ (lineare Degenerationsregel).
**C Falsch:** Gegenzeichen brauchen $\dfrac{2k-1}{k-1}<0$ ; z.B. $k=2$ hat $\Delta>0$ aber Produkt $3>0$ .
**D Wahr:** $k=5$ ergibt $(2x-3)^{2}=0$ .
**E Falsch: $k=0$ forces $x=-1$ ; dann hat $y^{2}=-1$ kein wirkliches $y$ .

**Answers:** A Wahr, B Falsch, C Falsch, D Wahr, E Falsch.

### Prüfungsaufgabe 3 - Radikale Überprüfung gegen Domäne und eine Exponentialbereichsregel

Part I: $2x-5\sqrt{x+3}+3=0$.  
Part II: $4^{x}-2^{x+2}+5=0$.

**A.** Die Domäne von Teil I ist $(-3,\infty)$ .
**B.** Mit $u=\sqrt{x+3}$ erscheint genau ein zulässiges $u$ , was ein eindeutiges $x=6$ ergibt.
**C.** Der Kandidat $x=-\dfrac{11}{4}$ scheitert nur, weil er die Domain verlässt.
**D.** Teil II wird $u^{2}-4u+5=0$ mit $u=2^{x}$ .
**E.** Teil II hat keine wirkliche Lösung.

**Lösung.**

Teil I Domain ist $x\geq -3$ . Dann geben $u\geq 0$ und $2u^{2}-5u-3=0$ $u=3$ oder $u=-\tfrac12$ ; nur $u=3$ überlebt, also $x=6$ . Der Wert $x=-\tfrac{11}{4}$ befindet sich immer noch in der Domain, kommt aber von illegal $u<0$ .

Teil II: $u=2^{x}>0$ liefert $u^{2}-4u+5=0$ mit $\Delta<0$ , also kein reales $u$ und kein reales $x$ .

**A Falsch** (Domain ist geschlossen). **B Wahr.** **C Falsch** (Domain ist nicht der Grund). **D Wahr. **E Wahr. **

**Answers:** A Falsch, B Wahr, C Falsch, D Wahr, E Wahr.

---

## 4.7 Zusammenfassung reference

| Situation | Regieren |
| --- | ---
| $Ax=B$ | Einzigartig / keine / Identität von $A$ und $B$ . |
| Parameter in linearer Gleichung | Formelzweig wenn $A\neq 0$ ; separater Fall wenn $A=0$ . |
| Quadratisch $a\neq 0$ | Lesen Sie die Anzahl der realen Wurzeln aus $\Delta$ . |
| Leitkoeffizient wird $0$ | Fallen Sie zurück zu linearen Fällen; erfinden Sie keine Leere. |
| Vieta-Zeichen Behauptungen | Verwenden Sie Produkt und Summe; $\Delta>0$ ist nicht genug für entgegengesetzte Zeichen. |
| Rationale Gleichung | Domain → LCD → lösen → Löcher ablehnen. |
| Radikale Gleichung | Domain → isolieren → Macht erhöhen → Originals prüfen |
| $\lvert A\rvert=c$ | Verwenden Sie die Tabelle $c>0$ / $c=0$ / $c<0$ | Exponential in base $a$ | Same-base cancelment oder $u=a^{x}>0$ . |
| Logarithmus | $\log_{b} A=c\Leftrightarrow A=b^{c}$ mit $A>0$ . |
| Wachstum durch Verdoppelung | Multiplizieren; nicht hinzufügen |

### Key formulas

$$
Ax=B,
\qquad
\Delta=b^{2}-4ac,
\qquad
x=\frac{-b\pm\sqrt{\Delta}}{2a},
$$

$$
x_{1}+x_{2}=-\frac{b}{a},\quad x_{1}x_{2}=\frac{c}{a},
$$

$$
\lvert A\rvert=c\ (c>0)\ \Longleftrightarrow\ A=\pm c,
\qquad
\log_{b} A=c\ \Longleftrightarrow\ A=b^{c}\ (A>0),
$$

 $$
a^{x}>0\quad\text{for all real }x.
$$

### Selbstkontrolle

- Geben Sie die drei Fälle von $Ax=B$ an, ohne zu schauen.
- Warum ist " $\Delta>0$ ⇒ gegensätzliche Vorzeichen Wurzeln" Falsch?
Was sind die zwei verschiedenen Gründe, warum ein radikaler Kandidat scheitern kann?
- Warum ist eine nicht positive Wurzel eines $u=a^{x}$ Quadrats nutzlos?
- Ist nach zwei Verdopplungsperioden der Betrag $3N_{0}$ oder $4N_{0}$ ?
