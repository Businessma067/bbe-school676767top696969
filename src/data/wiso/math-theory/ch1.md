# Kapitel 1 — Logik und Mengenlehre

Moderne ökonomische Argumente sind mathematische Argumente. Sie brauchen saubere Logik, und sie reden ständig über Sammlungen von Alternativen: Budgetmengen, machbare Entscheidungen, Gruppen von Arbeitnehmern und so weiter. Dieses Kapitel baut diese Werkzeuge von Anfang an.

Sie lernen, was eine Menge ist, wie man Mengen kombiniert, wie man "wenn ... dann ..." richtig schreibt und wie man überprüft, ob eine Schlussfolgerung wirklich folgt. Die Ideen passen zu den Prüfungsthemen in §§1.1–1.4. Nichts hier setzt voraus, dass Sie bereits die formale Logik kennen.

## Lernziele

- Geben Sie eine Menge an, indem Sie Elemente auflisten oder eine definierende Eigenschaft angeben.
- Verwenden Sie die Mitgliedschaft $\in$ und die Einbeziehung $\subseteq$ , und unterscheiden Sie sie voneinander.
Bilden Sie Vereinigungen, Schnittpunkte, Unterschiede und Ergänzungen und lesen Sie sie in einem Venn-Diagramm.
Die Zahl endlich überlappt sich mit der Einschluss-Ausschluss-Formel.
- Erkennen Sie Wörter und öffnen Sie Wörter und verwenden Sie $\Rightarrow$ und $\Leftrightarrow$ sorgfältig.
- Erzählen Sie die notwendigen Bedingungen von ausreichenden und verwenden Sie das Kontrapositiv.
Verneinen Sie Aussagen mit $\forall$ und $\exists$ und respektieren Sie die Reihenfolge der Quantifikatoren.
- Folgen Sie direkten, kontrapositiven und widersprüchlichen Beweisen und führen Sie ein korrektes Induktionsargument aus.

---

## 1.1 Mengen: Elemente, Teilmengen & Potenzmengen

### Was eine Menge ist

In gewöhnlicher Sprache gruppieren wir immer ähnliche Objekte: das akademische Personal einer Universität, die Pflanzen in einem Garten, alle schottischen Unternehmen mit mehr als 300 Mitarbeitern oder alle deutschen Steuerzahler, die in einem bestimmten Jahr zwischen 50 000 und 100 000 Euro verdient haben. In der Mathematik wird eine solche Sammlung als **Menge** bezeichnet, und die Objekte, die dazu gehören, sind ihre **Elemente** (oder Elemente).

Der einfachste Weg, eine Menge zu schreiben, besteht darin, ihre Elemente zwischen Zahnspangen in beliebiger Reihenfolge aufzulisten:

$$
S = \{a,b,c\}.
$$

Lesen Sie die Zahnspange als "die Menge, aus der besteht". Zwei Mengen sind **gleich **, wenn sie genau die gleichen Elemente enthalten. Ordnung spielt keine Rolle, und die Wiederholung eines Namens fügt kein neues Element hinzu:

$$
\{1,2,3\} = \{3,2,1\}, \qquad \{1,1,2,3\} = \{1,2,3\}.
$$

Die Menge ohne Elemente wird $\emptyset$ geschrieben und heißt **leere Menge**. Es gibt nur eine leere Menge: Eine Menge wird vollständig durch ihre Elemente bestimmt, so dass es nicht zwei verschiedene Sammlungen geben kann, die beide nichts enthalten.

### Eine Eigenschaft angeben

Nicht jede Menge kann aufgelistet werden. Viele wirtschaftliche Mengen sind unendlich. Ein Standard-Beispiel ist ein **Budgetbetrag**. Angenommen, zwei Waren haben Mengen $x$ und $y$ , Preise $p$ und $q$ , und der Verbraucher hat Geld $m$ . Wenn der Verbraucher zu wenig ausgeben kann und Mengen nicht negativ sein müssen, ist der Budgetbetrag

$$
B = \{(x,y) : px + qy \le m,\ x \ge 0,\ y \ge 0\}.
$$

 [[FIGURE:budget-set|The budget set B is the filled triangle of nonnegative bundles that cost at most m.]]

Das allgemeine Muster ist

$$
S = \{\text{typical member} : \text{defining properties}\}.
$$

Vor dem Doppelpunkt benennen Sie das typische Objekt. Nach dem Doppelpunkt listen Sie die Bedingungen auf, die das Objekt erfüllen muss. Der Doppelpunkt wird „so gelesen, dass (einige Texte verwenden stattdessen $|$ ). Finite Mengen kann auch so geschrieben werden, für Beispiel "all people currently alive".

**Beispiel 1.** Let

$$
A = \{x \in \mathbb{Z} : x^2 = 9\}.
$$

Löse zuerst $x^2 = 9$ : $x = 3$ oder $x = -3$ . Beide sind ganze Zahlen, also $A = \{-3,3\}$ . Wenn das Universum die natürlichen Zahlen anstelle der ganzen Zahlen wäre, würde $-3$ fallen gelassen und nur $\{3\}$ würde bleiben. Beobachten Sie immer, welches Universum der Menge-Builder verwendet.

### Mitgliedschaft

Write

$$
x \in S
$$

zu sagen, dass $x$ ein Element von $S$ ist, und $x \notin S$ zu sagen, dass es nicht ist. Zum Beispiel $d \notin \{a,b,c\}$ .

Denken Sie an einen Studenten, der einen Laptop und ein Smartphone kaufen muss, die jeweils als "billig" oder "teuer" erhältlich sind, sich aber das teuer-teure Paar nicht leisten können. Die erschwingliche Menge $B$ hat drei Kombinationen. Die Wahl des Schülers $s$ muss $s \in B$ erfüllen. Die unerschwingliche Kombination $t$ erfüllt $t \notin B$ .

### Teilmengen

Es sind $A$ und $B$ Mengen. Wir sagen $A$ ist eine **Teilmenge** von $B$ und schreiben $A \subseteq B$ , wenn jedes Element von $A$ auch ein Element von $B$ ist. Insbesondere

$$
A \subseteq A, \qquad \emptyset \subseteq A
$$

Immer halten. Zwei Mengen sind genau dann gleich, wenn jede eine Teilmenge des anderen ist:

 $$
A = B \quad\text{if and only if}\quad A \subseteq B\ \text{and}\ B \subseteq A.
$$

Eine **richtige ** Teilmenge von $B$ ist eine Teilmenge, die nicht gleich $B$ ist. Eine Menge ist niemals eine richtige Teilmenge ihrer selbst.

**Beispiel 2.** Angenommen, der oben genannte Schüler beschließt, niemals ein teures Smartphone zu kaufen. Die restlichen Optionen bilden eine Menge $A$ mit zwei Kombinationen. Dann $A \subseteq B$ : jede verbleibende Option war bereits erschwinglich, aber $B$ ist größer.

### Elemente versus Teilmengen

Mitgliedschaft und Inklusion beantworten unterschiedliche Fragen.

Die Frage, die sie stellt
| --- | ---
| $x \in A$ | Ist $x$ eines der in $A$ aufgeführten Objekte? |
| $S \subseteq A$ | Ist jedes Objekt innerhalb $S$ auch in $A$ aufgeführt? |

**Beispiel 3.** Let $A = \{a,b,c\}$ . Dann ist $a \in A$ wahr, aber $\{a\} \in A$ ist falsch: die Elemente von $A$ sind die Buchstaben $a$ , $b$ , $c$ , nicht die Singletonmenge $\{a\}$ . Inzwischen ist $\{a\} \subseteq A$ wahr, weil sein einziges Element $a$ in $A$ sitzt. Die leere Menge befriedigt $\emptyset \subseteq A$ , aber $\emptyset \in A$ ist falsch, es sei denn $\emptyset$ wird als Element geschrieben.

Das Verwirren von $\in$ mit $\subseteq$ ist eine der häufigsten Prüfungsfallen in diesem Kapitel.

### Die Potenzmenge

Die **Potenzmenge $\mathcal{P}(A)$ ist die Menge aller Teilmengen von $A$ . Wenn $A$ $n$ verschiedene Elemente hat, kann jedes Element unabhängig von einer Teilmenge beibehalten oder ausgelassen werden.

$$
|\mathcal{P}(A)| = 2^n.
$$

**Beispiel 4.** Für $A = \{a,b,c\}$

$$
\mathcal{P}(A) = \bigl\{\emptyset,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ A\bigr\}.
$$

Das sind $2^3 = 8$ -Submengen: eine leere Menge, drei Singletons, drei Paare und $A$ selbst.

### Mächtigkeit einer endlichen Menge

Wenn $A$ endlich ist, schreiben Sie $n(A)$ (oder $|A|$ ) für die Anzahl verschiedener Elemente in $A$ . Zwei endliche Mengen haben die gleiche Mächtigkeit, wenn es eine Eins-zu-Eins-Korrespondenz zwischen ihnen gibt. Unendliche Mengen können auch eine Mächtigkeit in diesem Sinne teilen; Die tiefe Theorie dieser Idee geht auf Cantor zurück, aber die Prüfung braucht nur die endlichen Zählregeln des nächsten Abschnitts.

---

## 1.2 Mengenoperationen, Komplemente & Abzählen

### Vereinigung, Schnittmenge und Differenz

Drei grundlegende Operationen kombinieren zwei Mengen $A$ und $B$ :

| Notation | Name | Bedeutung |
| --- | ---
| $A \cup B$ | Vereinigung | Elemente in $A$ oder in $B$ oder in beiden |
| $A \cap B$ | Schnittmenge | Elemente in $A$ und $B$ |
| $A \setminus B$ | Differenz | Elemente in $A$ aber nicht in $B$ |

In symbols:

 $$
A \cup B = \{x : x \in A\ \text{or}\ x \in B\},,\quad A \cap B = \{x : x \in A\ \text{and}\ x \in B\},,\quad A \setminus B = \{x : x \in A\ \text{and}\ x \notin B\}.
$$

In der Mathematik ist das Wort "oder" **inklusiv **: " $x \in A$ oder $x \in B$ " erlaubt $x$ , in beiden zu sitzen.

**Beispiel 1.** Lassen Sie $A = \{1,2,3,4,5\}$ und $B = \{3,6\}$ . Dann

$$
A \cup B = \{1,2,3,4,5,6\}, \quad
A \cap B = \{3\}, \quad
A \setminus B = \{1,2,4,5\}, \quad
B \setminus A = \{6\}.
$$

 [[FIGURE:venn-two-set-ops|Elementary set operations and inclusion (compare Sydsaeter Fig. 1.1.1).]]

Eine wirtschaftliche Lesart der gleichen Operationen: unter Arbeitern in Kalifornien in einem bestimmten Jahr, lassen Sie $A$ diejenigen sein, die mindestens \ $ 35 000 verdient haben und lassen Sie $B$ diejenigen mit einem Nettowert von mindestens \ $ 200 000 sein. Dann ist $A \cup B$ die "oder" -Gruppe, $A \cap B$ ist die "und" -Gruppe, und $A \setminus B$ sind Hochverdiener, deren Nettovermögen unter $ 200 000 bleibt.

Zwei Mengen sind **disjunkt**, wenn sie nichts teilen:

$$
A \cap B = \emptyset.
$$

### Universelle Menge und Komplement

Wenn Sie mit mehreren Mengen gleichzeitig arbeiten, hilft es oft, sie alle als Teilmengen einer festen **universellen Menge $U$ anzusehen. Wenn $A \subseteq U$ , ist das **Komplement** von $A$ in $U$

$$
A^c = U \setminus A,
$$

die Menge der Elemente von $U$ , die nicht in $A$ sind. Ergänzungen sind nur in Bezug auf ein angegebenes Universum sinnvoll. Ändern Sie $U$ und $A^c$ ändert sich damit.

 [[FIGURE:venn-complement|Complement of A inside the universal set U.]]

**Beispiel 2.** Lasst $U$ alle Studenten an einer Universität sein. Sei $F$ die Studentinnen, $M$ die Mathematikstudenten, $C$ der Chor, $B$ die Biologiestudenten und $T$ die Tennisspieler. Dann:

- $U \setminus M$ ist jeder, der keine Mathematik studiert;
- $M \cup C$ ist jeder, der Mathematik studiert, im Chor singt oder beides;
- $F \cap T$ ist die Tennisspielerin;
- $M \setminus (B \cap T)$ sind die Mathematikstudenten, die nicht sowohl Biologen als auch Tennisspieler sind.

Die letzte Menge ist gleich $(M \setminus B) \cup (M \setminus T)$ . Das ist ein Sonderfall einer allgemeinen Identität, die Sie mit einem Venn-Diagramm überprüfen können:

$$
M \setminus (B \cap T) = (M \setminus B) \cup (M \setminus T).
$$

### Venn-Diagramme

Zeichne jede Menge als Region in der Ebene. Overlaps zeigen geteilte Elemente. Für zwei Mengen hat das übliche Bild vier Regionen: nur $A$ , nur $B$ , beide und keine. Für drei Mengen $A$ , $B$ , $C$ muss ein korrektes Diagramm Raum für alle acht Kombinationen lassen:

1. $(A \cap B) \setminus C$
2. $(B \cap C) \setminus A$
3. $(C \cap A) \setminus B$
4. $A \setminus (B \cup C)$
5. $B \setminus (C \cup A)$
6. $C \setminus (A \cup B)$
7. $A \cap B \cap C$
8. $(A \cup B \cup C)^c$

 [[FIGURE:venn-three-regions|Venn diagram for three sets with all eight regions labelled (Sydsaeter Fig. 1.1.3).]]

Mit vier oder mehr Mengen wird das Bild unkontrollierbar ( $2^n$ Regionen für $n$ Mengen), also benutze stattdessen Algebra.

### Identitäten, die immer gelten

Aus den Definitionen oder durch das Schattieren von Venn-Regionen erhalten Sie Identitäten, die für jede Auswahl von Mengen wahr sind. Zwei wichtige Verteilungsgesetze sind

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C),,\quad A \cup (B \cap C) = (A \cup B) \cap (A \cup C).
$$

 [[FIGURE:venn-distributive|The shaded region is A ∩ (B ∪ C), which equals (A ∩ B) ∪ (A ∩ C) (Sydsaeter Fig. 1.1.2).]]

Vereinigung und Schnittmenge sind assoziativ, so dass Klammern in $A \cup B \cup C$ und $A \cap B \cap C$ fallen gelassen werden können. Sie können nicht frei in gemischten Ausdrücken fallen gelassen werden: $A \cap (B \cup C)$ ist im Allgemeinen nicht gleich $(A \cap B) \cup C$ .

**De Morgans Gesetze** (für Ergänzungen bezüglich $U$ ) sind

$$
(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c.
$$

 [[FIGURE:venn-de-morgan-union|De Morgan: the complement of a union is the intersection of the complements.]]

 [[FIGURE:venn-de-morgan-inter|De Morgan: the complement of an intersection is the union of the complements.]]

In Worten: Die Ergänzung einer Vereinigung ist die Schnittmenge der Ergänzungen, und die Ergänzung einer Schnittmenge ist die Vereinigung der Ergänzungen. Das gleiche Muster erstreckt sich auf jede endliche Familie von Mengen.

**Beispiel 3.** Let $A = \{1,2,3\}$ , $B = \{2,3\}$ , $C = \{4,5\}$ . Dann

$$
A \cap (B \cup C) = \{1,2,3\} \cap \{2,3,4,5\} = \{2,3\},
$$

while

$$
(A \cap B) \cup C = \{2,3\} \cup \{4,5\} = \{2,3,4,5\}.
$$

Die beiden Ergebnisse unterscheiden sich, was zeigt, warum die Klammern in $A \cap (B \cup C)$ Materie.

### Zählen mit Überlappungen

Für endliche Mengen,

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B),
$$

weil die Schnittmenge zweimal gezählt wurde, wenn Sie $n(A)$ und $n(B)$ hinzugefügt haben. Auch

$$
n(A \setminus B) = n(A) - n(A \cap B).
$$

**Beispiel 4.** Eine Umfrage ergab, dass 50 Menschen Kaffee und 40 Tee mögen, darunter 35, die beides mögen, und dass 10 beides mögen. Wie viele Menschen haben geantwortet?

Die Gruppe "Kaffee oder Tee" hat Größe

$$
n(C \cup T) = 50 + 40 - 35 = 55.
$$

Fügen Sie die 10 hinzu, die weder mögen:

$$
n(U) = 55 + 10 = 65.
$$

 [[FIGURE:venn-survey-count|Coffee-and-tea survey: overlap 35, neither 10, so |U| = 65.]]

**Beispiel 5.** Unter 1000 Zeitungslesern lesen 420 $A$ , 316 $B$ , 160 $C$ , mit paarweisen Überlappungen $n(A \cap B) = 116$ , $n(A \cap C) = 100$ , $n(B \cap C) = 30$ und dreifacher Überlappung $n(A \cap B \cap C) = 16$ .

Um herauszufinden, wie viele lesen $A$ aber nicht $B$ :

$$
n(A \setminus B) = n(A) - n(A \cap B) = 420 - 116 = 304.
$$

Um herauszufinden, wie viele $C$ lesen, aber weder $A$ noch $B$ , beginnen Sie mit $C$ und entfernen Sie alle, die auch in $A$ oder $B$ sitzen. Die Verwendung der Drei-Menge-Einschluss-Ausschluss-Formel für die vollständige Vereinigung ist der systematische Weg, wenn mehrere Überlappungen gleichzeitig angegeben werden.

---

## 1.3 Aussagenlogik & Implikationen

In diesem Abschnitt geht es darum, alltägliche Regeln so zu lesen, wie eine Prüfung sie liest: als präzise Pfeile, Ands und Ors. Banken, Universitäten, Geschäfte und Verträge sprechen alle in "wenn / nur wenn / wenn und nur wenn". Die Mathematik ist in jedem Fall gleich. Der schwierige Teil ist zu hören, welcher Pfeil tatsächlich versprochen wurde.

### Warum sorgfältige Logik wichtig ist

Routinealgebra ohne Logik kann Unsinn erzeugen. Berücksichtigung

$$
x + 2 = \sqrt{4 - x}.
$$

Quadratur, Erweiterung und Aufhebung kann ausspucken $x = -5$ . Das Ersetzen des Zurücks schlägt fehl: Die linke Seite ist $-3$ , während $\sqrt{9} = 3$ . Einige algebraische Schritte waren nur einseitig. Ein Wert, der am Ende einer Kette von Implikationen erscheint, muss die ursprüngliche Gleichung nicht lösen. Überprüfen Sie Kandidaten immer in der Originalaussage. Der Rest dieses Abschnitts erklärt die logische Form dieses Fehlers und der formulierten Regeln, die Sie in der Wirtschaft treffen.

### Zur Erinnerung an Quadratwurzeln

Für $a \ge 0$ bedeutet das Symbol $\sqrt{a}$ die eindeutige **nicht negative ** Zahl $x$ mit $x^2 = a$ . Wenn beide Zeichen gewünscht sind, schreiben Sie $\pm\sqrt{a}$ . Wenn $a < 0$ , gibt es keine echte quadratische Wurzel.

### Worte und offene Worte

Eine **Aussage** ist eine Behauptung, die entweder wahr oder falsch ist.

Wahr: "Alle Individuen, die atmen, sind am Leben."
Falsch: „Alle Menschen, die atmen, sind gesund.
- Noch keine Aussage: "67 ist eine große Zahl", bis "groß" definiert ist.

Eine Behauptung mit einer freien Variablen, wie z. B. $x^2 - 1 = 0$ , ist eine **offene Aussage**. Stecken Sie verschiedene Werte von $x$ ein und Sie erhalten verschiedene geschlossene Mengen, einige wahr und einige falsch. Bis ein Wert gewählt ist, ist die offene Behauptung selbst nicht einfach wahr oder falsch. Die gleiche Idee erscheint in der Ökonomie als "Gewinn gleich Null, wenn der Preis den Durchschnittskosten entspricht": Es wird erst dann zu einer Ja / Nein-Sage, wenn die Zahlen festgelegt sind.

### Die Wahrheitstabelle einer Implikation

Wenn immer $P$ wahr ist, muss $Q$ auch wahr sein, schreiben

$$
P \Rightarrow Q.
$$

Lesen Sie es als " $P$ impliziert $Q$ ", "if $P$ , then $Q$ ", " $Q$ if $P$ " oder " $P$ only if $Q$ ".

Die entscheidende Prüfung Tatsache ist, wenn $P \Rightarrow Q$ ist **falsch**. Es scheitert in genau einem Fall: $P$ wahr und $Q$ falsch. In jeder anderen Reihe enthält es.

| $P$ | $Q$ | $P \Rightarrow Q$ |
| --- | --- | --- |
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

Eine Implikation mit einem falschen "wenn" -Teil ist also automatisch wahr, was auch immer der "dann" -Teil tut. Deshalb bricht ein trockener Tag nie die Regel "wenn es regnet, wird das Picknick abgesagt", auch wenn das Picknick aus einem anderen Grund abgesagt wird.

**Beispiel 1.** Correct implications:

- $x > 2 \Rightarrow x^2 > 4$ �
- $xy = 0 \Rightarrow (x = 0\ \text{or}\ y = 0)$ �
- $S$ ist ein Quadrat $\Rightarrow$ $S$ ist ein Rechteck
- Sie lebt in Paris $\Rightarrow$ Sie lebt in Frankreich

(Here Paris means Paris, France.)

### Umkehrung, Negation und Kontraposition

Aus einer Implikation $P \Rightarrow Q$ werden ständig drei Verwandte bei Prüfungen benannt:

| Name | Form | Gleicher Wahrheitswert wie das Original? |
| --- | ---
| Original | $P \Rightarrow Q$ |
| ** Converse** | $Q \Rightarrow P$ | no |
| **Inverse** | $\neg P \Rightarrow \neg Q$ | no |
| **Contrapositiv ** | $\neg Q \Rightarrow \neg P$ | **ja, immer ** |

Nur das Kontrapositiv ist logisch äquivalent zum Original. Das Gegenteil und das Gegenteil sind äquivalent zueinander, aber nicht zum Original.

**Beispiel 2 (Picknick).** Regel des Veranstalters: "Wenn es regnet, wird das Picknick abgesagt." Schreiben Sie $P$ für Regen und $Q$ für Stornierung, also $P \Rightarrow Q$ .

| Relative | In Worten | Folgt der Regel? |
| --- | ---
| Converse | Wenn es abgesagt wird, dann regnet es.
Wenn es keinen Regen gibt, dann nicht abgesagt.
| Kontrapositiv | Wenn nicht abgesagt, dann kein Regen.

Testtag: kein Regen, aber das Picknick wird wegen eines Veranstaltungsortkonflikts abgesagt. Dann ist $P$ falsch und $Q$ wahr.

- Original $P \Rightarrow Q$ : wahr (falsch antecedent).
- Umgekehrt $Q \Rightarrow P$ : falsch (ohne Regen abgesagt).
- Inverse $\neg P \Rightarrow \neg Q$ : falsch (kein Regen, aber abgesagt).
- Kontrapositiv: immer noch wahr, wenn das Original ist.

So trennt ein alltäglicher Tag das Original von seiner Umkehrung und Umkehrung.

Die **Negation** von $P \Rightarrow Q$ ist keine weitere Implikation. Es ist die Single Failure Row:

$$
\neg(P \Rightarrow Q) \equiv P \land \neg Q.
$$

Zum Picknick: "Es regnet ** und ** das Picknick wird nicht abgesagt."

### Äquivalenz

Wenn beide $P \Rightarrow Q$ und $Q \Rightarrow P$ halten, schreiben Sie

$$
P \Leftrightarrow Q
$$

(" $P$ if und nur wenn $Q$ " oder "iff"). Ein Bikonditional ist wahr genau dann, wenn $P$ und $Q$ den **selben** Wahrheitswert haben: beide wahr oder beide falsch. Ein wahrer Teil ist nicht genug. Das ist der Unterschied zwischen $\Leftrightarrow$ und $\lor$ .

**Beispiel 3.** Correct equivalences:

 $$
(x < -2\ \text{or}\ x > 2) \Leftrightarrow x^2 > 4,
$$

 $$
xy = 0 \Leftrightarrow (x = 0\ \text{or}\ y = 0),
$$

$$
A \subseteq B \Leftrightarrow B^c \subseteq A^c.
$$

In Beispiel 1 ist nur die Produktregel eine Zwei-Wege-Äquivalenz. $x = -3$ hat $x^2 > 4$ ohne $x > 2$ . Ein Rechteck muss kein Quadrat sein. Millionen Menschen leben in Frankreich außerhalb von Paris.

### Notwendige und ausreichende Bedingungen

Gleiche Pfeile, anderes Vokabular:

| Wording | Bedeutung |
| --- | ---
| $P$ ist **ausreichend** für $Q$ | $P \Rightarrow Q$ |
| $Q$ ist **notwendig** für $P$ | $P \Rightarrow Q$ (gleicher Pfeil, anderes Ende) |
| $P$ ist **notwendig und ausreichend** für $Q$ | $P \Leftrightarrow Q$ |

"Das Leben in Frankreich ist notwendig, um in Paris zu leben" ist wahr. "In Paris zu leben ist notwendig, um in Frankreich zu leben" ist falsch. In Paris zu leben ** ist ** ausreichend, um in Frankreich zu leben.

**Beispiel 4 (Schwellenwerte).** Vergleichen Sie $x > 10$ und $x > 5$ .

- $x > 10$ ist ausreichend für $x > 5$ : die stärkere Ungleichheit zwingt die schwächere.
- $x > 5$ ist notwendig für $x > 10$ : gleicher Pfeil, rückwärts gelesen.
- $x > 10$ ist nicht notwendig für $x > 5$ : $x = 7$ ist ein Gegenspiel.
- Die beiden Bedingungen sind nicht gleichwertig: das offene Intervall $(5,10]$ befriedigt das schwächere allein.

**Beispiel 5 (university chain).** Rules:

1. Einschreiben in Advanced Macro nur, wenn Intermediate Macro übergeben wird.
2. Einschreiben in Intermediate Macro nur, wenn Grundsätze übergeben wird.

Maria ist in Advanced eingeschrieben. "Nur wenn" bedeutet Advanced $\Rightarrow$ Intermediate, nicht umgekehrt. So hat Maria Intermediate und dann Principles bestanden. Das Bestehen von Prinzipien ist ** notwendig ** für Fortgeschrittene, aber nicht ** ausreichend **: Ein Student kann Prinzipien bestehen und niemals Intermediate nehmen.

**Beispiel 6 (Bankkredit).** Eine Bank genehmigt ein Darlehen **nur wenn ** Kredit-Score $\ge 700$ **und ** Schulden-Einkommen-Verhältnis $< 40\%$ . Schreiben Sie $L$ für die Genehmigung und $R$ für "beide Hürden geräumt". Die Regel ist

$$
L \Rightarrow R.
$$

Bewerber P hat Punktzahl $750$ und Verhältnis $35\%$ : $R$ enthält. Das tut **nicht ** Force Approval. Das Erfüllen einer notwendigen Bedingung enthält die Datei am Leben; es erzeugt kein Ja.

Bewerber Q hat eine Punktzahl $720$ und ein Verhältnis $45\%$ : $R$ schlägt fehl. Das Kontrapositive $\neg R \Rightarrow \neg L$ lehnt den Kredit sofort ab.

**Beispiel 7 (Arzt).** Diagnostiziert mit $X$ nur, wenn beide Symptome A und B auftreten; beide Symptome garantieren immer noch nicht die Diagnose, da andere Bedingungen ausgeschlossen werden müssen. Also Diagnose $\Rightarrow$ (A und B), während (A und B) $\Rightarrow$ Diagnose abgelehnt wird. Symptome sind notwendig, nicht ausreichend. Ein Patient mit A, aber nicht B kann nicht mit $X$ diagnostiziert werden. Ein Patient mit beiden kann immer noch warten, während andere Ursachen ausgeschlossen sind.

### Und, oder nicht

| Connective | Symbol | Wahr, wenn |
| --- | ---
Und beides ist wahr.
| oder | $\lor$ | mindestens ein Teil wahr (**inklusive**) |
| nicht | $\neg$ | die innere Behauptung falsch |

Inklusives "oder" erlaubt immer beides. Exklusives "oder" (genau eines) ist eine andere Behauptung und muss explizit angegeben werden.

**Beispiel 8.** Die Zahl 7 ist Primzahl und nicht gerade. $P$ : "7 ist prim" (T). $Q$ : "7 ist gerade" (F).

| Compound | Wert |
| --- | ---
| $P \land Q$ | F |
| $P \lor Q$ | T |
| $\neg(P \land Q)$ | T |
| $\neg P \land \neg Q$ | F |

Das Verneinen der gesamten Halterung ist nicht dasselbe wie das Verneinen jedes Stücks. De Morgan:

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q, \qquad \neg(P \lor Q) \equiv \neg P \land \neg Q.
$$

**Beispiel 9 (Kurspass).** Pass if und nur wenn Anwesenheit $\ge 80\%$ **und** final $\ge 50$ :

$$
\text{Pass} \Leftrightarrow A \land F.
$$

Student K: $85\%$ Anwesenheit, final $48$ . Dann $A$ wahr, $F$ falsch, also kein Pass. Student L: $75\%$ Teilnahme, final $90$ . Dann $A$ falsch, $F$ wahr, also kein Pass. Eine hohe Prüfungsmarke repariert niemals fehlende Anwesenheit, und Beinahe-Miss-Scores zählen nie: $49$ schlägt genau so fehl wie $10$ . Die Regel überprüft zwei separate Schwellenwerte, nicht einen Durchschnitt. Deshalb kann $(80\%,50)$ passieren, während $(79\%,100)$ fehlschlägt.

**Beispiel 10 (Online-Filter).** Ein Shop zeigt einen Artikel genau dann an, wenn er **nicht ** ist (im Verkauf ** oder ** außer Lager). Schreiben Sie $S$ zum Verkauf und $O$ für out of stock. Anzeigemittel

$$
\neg(S \lor O) \equiv \neg S \land \neg O:
$$

weder im Verkauf noch außerhalb des Lagers. Ein Artikel zum Verkauf, aber auf Lager ist versteckt. Ein Artikel, der nicht zum Verkauf steht, aber nicht auf Lager ist, ist versteckt. Nur "nicht im Verkauf und auf Lager" wird gezeigt. Das falsche Umschreiben $\neg S \lor \neg O$ würde die ersten beiden Elemente anzeigen; De Morgan verbietet, das "oder" zu behalten, wenn sich das "nicht" bewegt.

**Beispiel 11 (Marktstudie).** Von 100 Verbrauchern kauften 40 X, 35 Y und 15 beide. Einschließlich ‚X oder Y‘

$$
40 + 35 - 15 = 60.
$$

Exklusiv "genau einer von X, Y" lässt die beiden Käufer fallen und verlässt $25 + 20 = 45$ .

### Warum das Überprüfen von Lösungen durch Logik erzwungen wird

Zurück zu $x + 2 = \sqrt{4 - x}$ . Implizite Markierungspfeile:

$$
x + 2 = \sqrt{4 - x}
\Rightarrow (x + 2)^2 = 4 - x
$$

$$
\Rightarrow x^2 + 4x + 4 = 4 - x
$$

$$
\Rightarrow x^2 + 5x = 0
$$

$$
\Rightarrow x(x + 5) = 0
$$

 $$
\Rightarrow (x = 0\ \text{or}\ x = -5).
$$

Im ersten Schritt wird $a = b \Rightarrow a^2 = b^2$ verwendet, was wahr ist, aber **nicht reversibel**: $a^2 = b^2$ erlaubt auch $a = -b$ . Die Kette beweist also nur, dass jede echte Lösung $0$ oder $-5$ sein muss. Es beweist nicht, dass beide Werte funktionieren. Ersatz zeigt, dass nur $x = 0$ überlebt. Getrennt davon lässt der Sprung von $x^2 + 5x = 0$ nach $x + 5 = 0$ die Wurzel $x = 0$ zu Unrecht fallen.

Einseitige Implikationen verengen die Kandidaten. Nur eine Äquivalenz oder eine explizite Überprüfung in der ursprünglichen Gleichung bestätigt sie. Die gleiche Gewohnheit gilt für formulierte Regeln: Nachdem Sie "nur wenn" in einen Pfeil übersetzt haben, fragen Sie, ob der umgekehrte Pfeil jemals gewährt wurde.

---

## 1.4 Quantoren, Gültigkeit & Schlussfolgern

Abschnitt 1.3 baute einzelne Pfeile. Dieser Abschnitt baut längere Argumente auf: wie Mengen bewiesen werden, wie "für jeden" und "gibt es" interagieren und wann eine Schlussfolgerung wirklich aus gegebenen Prämissen folgt.

### Sätze als Implikationen

Ein mathematischer Menge kann geschrieben werden

$$
P \Rightarrow Q,
$$

wobei $P$ die **Prämissen** und $Q$ die **Schlussfolgerungen** sammelt. Drei Standard-Beweis-Formen erscheinen immer wieder.

### Direkter Beweis

Nehmen Sie $P$ an und leiten Sie $Q$ durch gültige Schritte ab.

**Beispiel 1.** Show $-x^2 + 5x - 4 > 0 \Rightarrow x > 0$ .

Nehmen wir die linke Ungleichheit an. Füge $x^2 + 4$ zu beiden Seiten hinzu: $5x > x^2 + 4$ . Da $x^2 + 4 \ge 4$ für jedes reelle $x$ , erhält man $5x > 4$ , also $x > 4/5$ , und insbesondere $x > 0$ .

### Kontrapositionsbeweis

Beweisen Sie stattdessen $\neg Q \Rightarrow \neg P$ . Äquivalenz mit dem Original gibt $P \Rightarrow Q$ kostenlos.

Nehmen Sie im gleichen Beispiel $x \le 0$ an. Dann $5x \le 0$ , also $-x^2 + 5x - 4$ ist eine Summe von drei nicht-positiven Termen und kann nicht positiv sein.

**Beispiel 2 (ganzzahlig).** Wenn $x$ und $y$ ganze Zahlen sind und $xy$ ungerade ist, dann sind beide $x$ und $y$ ungerade. Kontrapositiv: Wenn mindestens einer von $x,y$ gerade ist, dann ist $xy$ gerade. Das ist sofort, weil ein gerader Faktor ein gerades Produkt erzwingt.

### Beweis durch Widerspruch

Nehmen Sie $P$ zusammen mit $\neg Q$ an und leiten Sie etwas Unmögliches ab. Dann können $P$ und $\neg Q$ nicht beide halten, also $P \Rightarrow Q$ .

Angenommen $-x^2 + 5x - 4 > 0$ und $x \le 0$ erzwingen gleichzeitig $5x > x^2 + 4$ und $5x \le 0$ , daher $0 > x^2 + 4$ , was absurd ist.

### Deduktives versus induktives Schließen

** Deduktive ** Argumentation folgt logischen Regeln von Prämissen zu Schlussfolgerungen. Mathematische Beweise sind deduktiv.

**Induktives Denken in der alltäglichen Wissenschaft zieht eine allgemeine Behauptung aus Beobachtungen: "Das Preisniveau stieg für jedes der letzten Jahre, also wird es nächstes Jahr steigen." Empirisch nützlich, niemals ein mathematischer Beweis. Winkel in tausend Dreiecken zu messen und immer $180^\circ$ zu finden, ist ein starker Beweis, kein Beweis für jedes Dreieck. Die seit zwanzig Jahren steigenden Gewinne eines Unternehmens beweisen nicht, dass sie in diesem Jahr steigen.

### Vollständige Induktion

**Mathematische Induktion** ist eine vollständig logische Methode zum Nachweis von $P(n)$ für jede natürliche Zahl $n$ . Es ist nicht dasselbe wie alltägliches induktives Denken.

** DAS GRUND DER MATHEMATISCHEN INDUKTION.** Angenommen:

1. $P(1)$ ist wahr (**base case**);
2. für jedes natürliche $k$ , wenn $P(k)$ wahr ist, dann ist $P(k + 1)$ wahr (**Induktionsschritt**).

Dann ist $P(n)$ wahr für jedes natürliche $n$ .

Die Annahme $P(k)$ innerhalb des Schrittes ist die **Induktionshypothese**. Denken Sie an eine unendliche Leiter: Wenn Sie die erste Sprosse erklimmen können, und von jeder Sprosse aus können Sie immer die nächste erklimmen, können Sie jede Sprosse erreichen.

**Beispiel 3.** Summe der ersten $n$ ungerade Zahlen:

$$
P(n):\quad 1 + 3 + 5 + \cdots + (2n - 1) = n^2.
$$

Base: $n = 1$ gives $1 = 1^2$.

Schritt: Annehmen $P(k)$ , fügen Sie die nächste ungerade Zahl $2k + 1$ hinzu:

$$
1 + 3 + \cdots + (2k - 1) + (2k + 1) = k^2 + (2k + 1) = (k + 1)^2.
$$

Das ist $P(k + 1)$ . Durch Induktion gilt $P(n)$ für alle natürlichen $n$ .

**Beispiel 4.** Für jede positive ganze Zahl $n$

$$
3 + 3^2 + \cdots + 3^n = \tfrac12\bigl(3^{n+1} - 3\bigr).
$$

Beide Seiten sind gleich $3$ wenn $n = 1$ . Wenn die Formel für $n = k$ gilt, fügen Sie $3^{k+1}$ hinzu und vereinfachen Sie die Formel für $n = k + 1$ .

Das Überprüfen von $n = 1,2,3,4,5$ ist ein Beweis, kein Beweis. Ohne den allgemeinen Schritt von $k$ zu $k + 1$ ist der Fall $n = 6$ noch offen. Das Prinzip erstreckt sich auf alle $n \ge n_0$ : Überprüfen Sie $P(n_0)$ , dann zeigen Sie $P(k) \Rightarrow P(k + 1)$ für $k \ge n_0$ .

Eine berühmte falsche "Induktion" behauptet, dass in jedem Raum von $n$ Menschen alle das gleiche Einkommen haben. Die Basis $n = 1$ ist in Ordnung. Der gebrochene Schritt gibt vor, dass überlappende Gruppen von $n$ eine Gruppe von $n + 1$ zwingen, zusammenzupassen, was bereits beim Übergang von $1$ zu $2$ fehlschlägt. Die Moral: Der induktive Schritt muss für jeden *** arbeiten $k$ , einschließlich der unangenehmen.

### Quantoren

| Symbol | Lesen Sie als | Wahr, wenn
| --- | ---
| $\forall x$ | für jedes $x$ | jedes Objekt im Universum funktioniert |
| $\exists x$ | es existiert ein $x$ | mindestens ein Objekt funktioniert |

One counterBeispiel kills $\forall$. One witness confirms $\exists$.

Negation tauscht den Quantifikator aus und negiert die innere Behauptung:

$$
\neg\forall x\, P(x) \equiv \exists x\, \neg P(x),
$$

$$
\neg\exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

Für eine Implikation innerhalb einer allgemeinen Behauptung,

$$
\neg\forall x\,(P(x) \Rightarrow Q(x)) \equiv \exists x\,(P(x) \land \neg Q(x)):
$$

Eine Ausnahme ist ein Fall, in dem das "wenn" gilt und das "dann" fehlschlägt.

**Beispiel 5.** Über den Realen: $\forall x\,(x^2 \ge 0)$ ist wahr, also $\exists x\,(x^2 < 0)$ ist falsch. $\exists x\,(x^2 = -1)$ ist falsch in $\mathbb{R}$ . Die Negation von $\exists x\,(x > 100)$ ist $\forall x\,(x \le 100)$ .

**Beispiel 6 (Primes).** "Jede Primzahl $p > 2$ ist ungerade" ist wahr: eine gerade ganze Zahl über $2$ hat mindestens drei positive Teiler. Die Zahl $2$ ist kein CounterBeispiel, weil sie die Domain $p > 2$ ausfällt. Richtige Negation: "Es gibt eine Primzahl $p > 2$ , die gerade ist." Die Umkehrung "jede ungerade ganze Zahl $> 2$ ist prim" ist falsch; $9$ ist ein Gegenspiel.

**Beispiel 7 (restricted domain).** Lasst $P = \{2,3,5,7,11,13\}$ und $E = \{2,4,6,8,10,12,14\}$ dann $P \cap E = \{2\}$ und $P \setminus E = \{3,5,7,11,13\}$ . Die Behauptung " $\forall x \in P$ , $x$ ist ungerade" schlägt bei $2$ fehl. Die eingeschränkte Behauptung „für jeden $x \in P$ mit $x \ne 2$ , $x$ ist ungerade gilt. Subsethood $P \subseteq E$ schlägt bei $3$ fehl.

### Reihenfolge der Quantoren

Wer zuerst gewählt wird, verändert die Bedeutung.

**Beispiel 8.** Über positive Reals:

$$
\forall x > 0\ \exists y\ (y > x)
$$

ist wahr: gegeben $x$ , nimm $y = x + 1$ . umgekehrt,

$$
\exists y\ \forall x > 0\ (y > x)
$$

ist falsch: kein einzelnes $y$ schlägt jede positive Zahl, weil $x = y + 1$ sie besiegt.

**Beispiel 9 (Prüfungen).** Aussage 1: "Es gibt einen Schüler, der bei jeder Prüfung über 90 Punkte erzielt hat", $\exists s\,\forall e\, G(s,e)$ . Aussage 2: "Für jede Prüfung gibt es einen Schüler, der über 90 Punkte erzielt hat", $\forall e\,\exists s\, G(s,e)$ .

Menge 1 impliziert Aussage 2: Wiederverwendung der gleichen starken Schüler bei jeder Prüfung. Das Gegenteil scheitert. Bild zwei Prüfungen und zwei Studenten:

Prüfung 1 | Prüfung 2
| --- | ---
Student X | über 90 | unter 90 |
Student Y | unter 90 | über 90 |

Jede Prüfung hat einen Highscorer, also ist Aussage 2 wahr. Niemand klärt beides, also ist Menge 1 falsch. Mit nur einer Prüfung fallen die beiden Aussagen zu derselben Behauptung zusammen.

**Beispiel 10 (Produkte).** "Für jede positive ganze Zahl $m$ existiert eine positive ganze Zahl $n$ mit $m \cdot n = 100$ " ist $\forall m\,\exists n:\ mn = 100$ . Bei $m = 4$ nehmen Sie $n = 25$ . Bei $m = 3$ ist $n = 100/3$ keine ganze Zahl, daher scheitert die universelle Behauptung. Korrekte Negation: $\exists m\,\forall n:\ mn \ne 100$ , und $m = 3$ ist ein Zeuge. Umkehren zu $\exists n\,\forall m:\ mn = 100$ fragt nach einem $n$ , der jedem $m$ dient, was ebenfalls falsch ist.

### Gültigkeit eines Arguments

Ein Argument mit Prämissen $P_1,\ldots,P_n$ und Schlussfolgerung $C$ ist **gültig**, wenn es unmöglich ist, dass alle Prämissen wahr sind, während $C$ falsch ist. Bei der Gültigkeit geht es um Form, nicht darum, ob die Prämissen in der realen Welt wahr sind. Ein gültiges Argument mit wahrer Prämisse heißt **sound**. Gültigkeit allein macht die Schlussfolgerung nicht wahr in der Welt; es verbietet nur das Muster "premises wahr, Schlussfolgerung falsch."

**Beispiel 11 (Ökonomen).** Prämissen: Alle Ökonomen studieren menschliches Verhalten; einige Ökonomen sind auf Spieltheorie spezialisiert. Fazit: Einige Spieltheoretiker studieren menschliches Verhalten.

 $$
\forall x\,(E(x) \Rightarrow H(x)), \qquad
\exists x\,(E(x) \land G(x)), \qquad
\text{therefore}\quad
\exists x\,(G(x) \land H(x)).
$$

Von der existentiellen Prämisse nehmen Sie einen Zeugen $a$ mit $E(a)$ und $G(a)$ . Die universelle Prämisse gibt $H(a)$ $G(a) \land H(a)$ . Die Schlussfolgerung folgt in jeder Situation, in der die Prämissen gelten: Das Argument ist gültig.

Ändern Sie die zweite Prämisse in "keine auf Spieltheorie spezialisierten Ökonomen". Jetzt stellen Sie sich eine Welt mit Ökonomen vor, die alle Verhalten studieren und mit niemandem in der Spieltheorie. Prämissen wahr, Schlussfolgerung falsch: Das modifizierte Argument ist ungültig.

**Beispiel 12 (Diebstahlhinweise).** Genau einer von Ann, Ben, Cara, Dan ist schuldig. Hinweise:

1. Wenn Ann schuldig ist, ist Dan unschuldig.
2. Wenn Ben unschuldig ist, dann ist Cara unschuldig.
3. Dan ist schuldig.
4. Wenn Cara schuldig ist, dann ist Ann schuldig.

Clue (3) ist eine flache Behauptung, keine Implikation: Dan ist schuldig. Mit "genau einem schuldigen" werden ann, ben und cara sofort freigelassen. Die bedingten Hinweise sind dann konsistent, aber überflüssig für die Benennung der schuldigen Person. Ein Hinweis mit einem falschen "wenn" -Teil (Ann innocent macht Hinweis (1) leer) fügt keine neuen Informationen hinzu.

**Beispiel 13 (Wahrheitserzähler und Lügner).** Auf einer Insel sagt jeder immer die Wahrheit oder lügt immer. X sagt: "Sie lügen immer." Y sagt: "X und ich sind beide Lügner."

Fall x lügner: dann wäre y ein wahrheitserzähler, also wäre ys satz wahr und zwingt y, ein lügner zu sein. Widerspruch. Fall X Wahrheitserzähler: dann ist Y ein Lügner, und Ys Konjunktion "beide Lügner" ist falsch, weil X kein Lügner ist. Konsequent. X sagt die Wahrheit und Y lügt. Die Methode ist Beweis durch Fälle plus Widerspruch auf dem unmöglichen Fall.

### Einen Schluss zusammensetzen

1. Schreibe jeden Menge als $\Rightarrow$ , $\Leftrightarrow$ , $\land$ , $\lor$ , $\forall$ oder $\exists$ um.
2. Trennen Sie "nur wenn" (notwendig) von "wenn / wann immer" (ausreichend) und von "wenn und nur wenn" (beide Wege).
3. Verwenden Sie das Kontrapositiv, wenn ein Misserfolg leichter zu handhaben ist als ein Erfolg.
4. Fragen Sie bei verschachtelten Quantifikatoren, wer sich zuerst bewegt und ob spätere Entscheidungen von früheren abhängen können.
5. Um Ungültigkeit nachzuweisen, ist eine konkrete Situation anzugeben, in der die Prämissen gelten und die Schlussfolgerung fehlschlägt.
6. Nach einer Kette von einseitigen Implikationen in der Algebra, überprüfen Sie die Kandidaten in der ursprünglichen Aussage.

---

## Referenz-Zusammenfassung

.
| --- | ---
| Definieren Sie eine Menge | Listenelemente oder verwenden Sie $\{\text{object} : \text{property}\}$ |
| Test $A = B$ | Überprüfen Sie sowohl $A \subseteq B$ als auch $B \subseteq A$ |
| Tell $\in$ from $\subseteq$ | Element aufgeführt in der Menge vs jedes Element einer Sammlung sitzt in der Menge |
| Zähle Teilmengen einer $n$ -Elementmenge | $2^n$ |
| Form $A \cup B$ , $A \cap B$ , $A \setminus B$ | oder / und / in $A$ aber nicht $B$ |
| Nehmen Sie eine Ergänzung | Relativ zu einem angegebenen Universum $U$ |
| Verwende De Morgan | Komplement verwandelt sich $\cup$ in $\cap$ und $\cap$ in $\cup$ | Zählen Sie eine Vereinigung von zwei endlichen Mengen | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ |
| Lesen Sie $P \Rightarrow Q$ | Wenn $P$ dann $Q$ ; scheitert nur, wenn $P$ wahr und $Q$ falsch |
| Form converse / inverse / contrapositive | $Q \Rightarrow P$ / $\neg P \Rightarrow \neg Q$ / $\neg Q \Rightarrow \neg P$ ; nur der letzte passt zum Original |
| Read necessary vs sufficient | “nur wenn” → necessary; “wenn / wann immer” → sufficient; “iff” → both |
| Verneinen Sie eine Implikation | $P \land \neg Q$ , keine weitere Implikation |
| Bestätigen Sie eine Kandidatenlösung | Setze sie in die ursprüngliche Gleichung oder Aussage |
| Negate $\forall$ / $\exists$ | Tauschen Sie den Quantifikator und negieren Sie die innere Behauptung |
| Vergleichen Sie $\forall\exists$ mit $\exists\forall$ | Spätere Variablen können / dürfen nicht von früheren abhängen |
| Beweisen Sie $P(n)$ für alle $n$ | Basisfall $P(1)$ , dann $P(k) \Rightarrow P(k + 1)$ für jeden $k$ |
| Testvalidität | Fragen Sie, ob Prämissen wahr sein können, während die Schlussfolgerung falsch ist |

Key formulas:

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C),
$$

$$
(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c,
$$

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B),
$$

$$
P \Rightarrow Q \ \equiv\ \neg Q \Rightarrow \neg P,
$$

$$
\neg\forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad
\neg\exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

**Arbeitsauftrag für eine Prüfung Aussage.** Benennen Sie das Universum und schreiben Sie die Behauptung in Symbole um. Für Mengen berechnen oder schattieren Sie die relevanten Regionen vor dem Vergleich. Entscheiden Sie für Implikationen, welcher Pfeil beansprucht wird, und testen Sie das Gegenteil separat. Für Quantifikatoren, fixieren Sie die Reihenfolge und versuchen Sie einen Zeugen oder ein CounterBeispiel. Schreiben Sie für die Induktion den Basisfall und den genauen induktiven Schritt, nicht eine Handvoll numerischer Prüfungen.

**Selbstkontrolle.** Wann sind zwei Mengen gleich? Warum ist $\emptyset \subseteq A$ immer wahr, während $\emptyset \in A$ normalerweise falsch ist? Was erlaubt das inklusive "oder", das das exklusive "oder" verbieten würde? Wie lesen Sie " $P$ nur wenn $Q$ " als Pfeil? Warum zwingt Sie eine einseitige Implikation nach dem Quadratieren, Lösungen zu überprüfen? Wie negiert man "für jede Primzahl $p > 2$ , $p$ ist ungerade"? Warum bedeutet $\forall x\,\exists y$ nicht dasselbe wie $\exists y\,\forall x$ ? Welche zwei Zutaten machen einen Beweis durch Induktion vollständig? Welches einzelne Bild zeigt, dass ein Argument ungültig ist?
