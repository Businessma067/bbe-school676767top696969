# 2. Kapitel 3 - Finanzmathematik

Finanzmathematik vergleicht gezahltes oder erhaltenes Geld zu unterschiedlichen Terminen. Ein Euro heute und ein Euro in fünf Jahren sind nicht gleichwertig, weil der heutige Euro Zinsen verdienen kann. In diesem Kapitel wird diese Idee in Formeln für Spar-, Kredit-, Anleihen-, Hypotheken- und Investitionsprojekte umgesetzt.

Das Kapitel beginnt bei Null und enthält das Timing durchgehend sichtbar. Jeder Kurs muss seiner Zahlungsfrist entsprechen, jeder Cashflow muss am richtigen Datum sitzen, und jeder Vergleich muss Alternativen zu einem gemeinsamen Datum bringen, bevor er entscheidet, welcher größer oder billiger ist.

 [[NOTE:Exam note|Across recent BBE years, financial mathematics on the exam has tended to use simpler setups: simple interest, basic compound growth, ordinary present values, and the more standard versions of the formulas in this chapter. The harder constructions below are still worth understanding, but the better exam strategy is to sharpen the core skills first. Master timing, rate conversion, discounting, ordinary annuities, and the plain loan and IRR patterns before trying to cover every advanced variant in the chapter.]]

## Lernziele

- Unterscheiden Sie nominale, periodische und effektive Zinssätze.
- Berechnen Sie zukünftige Werte unter diskreter und kontinuierlicher Compoundierung.
- Lösen Sie Compound-Growth Gleichungen für die Startmenge, Rate oder Zeit.
- Diskontierung eines oder mehrerer zukünftiger Cashflows zum Barwert.
- Arbeiten mit endlichen und unendlichen geometrischen Reihen und Test-Konvergenz.
- Bewerte gewöhnliche Annuitäten, fällige Annuitäten, aufgeschobene Streams und Permanenz.
Berechnen Sie gleiche Kreditzahlungen und folgen Sie einem Tilgungsplan.
Vergleichen Sie vollständige Zahlungspläne an einem gemeinsamen Bewertungsdatum.
- Berechnen Sie den Nettobarwert und die interne Rendite.
- Erkennen, wann ein IRR-Eindeutigkeitsergebnis gilt und wann nicht.

---

## 3.1 Zinsperioden und effektive Zinssätze

### One period at a time

Angenommen, ein Betrag $S_0$ wird zu einem nominalen Jahreszinssatz $r$ investiert, wobei Zinsen pro Jahr hinzugefügt werden. Das Jahr ist in $n$ Zinsperioden unterteilt, so dass der in einem Zeitraum verwendete Zinssatz

$$
i = \frac{r}{n}.
$$

Nach $t$ Jahren gab es $nt$ Perioden. Der kumulierte Betrag ist

$$
S(t) = S_0\left(1+\frac{r}{n}\right)^{nt}.
$$

Die Stücke haben unterschiedliche Jobs:

| Symbol | Bedeutung |
| --- | ---
| $S_0$ | Hauptzeit $0$ |
| $r$ | nominale Jahresrate als Dezimalzahl |
| $n$ | Anzahl der Compoundierungsperioden pro Jahr |
| $r/n$ | Rate pro Compoundierungsperiode |
| $nt$ | Gesamtzahl der Perioden |
| $S(t)$ | Balance nach $t$ Jahren |

Eine monatliche Rate muss mit einer Anzahl von Monaten gepaart werden. Ein vierteljährlicher Menge muss mit einer Anzahl von Quartalen gepaart werden. Das Mischen einer Jahresrate mit einer monatlichen Zählung ist kein kleiner Notationsfehler; es ändert die Antwort.

**Beispiel 1.** Eine Druckerei Einlagen \ $ 6.000 bei einer nominalen jährlichen Rate von $7.20\%$ , monatlich zusammengesetzt.

Die monatliche Rate ist

$$
i = \frac{0.072}{12} = 0.006 = 0.60\%.
$$

Nach einem Jahr:

$$
S(1)
= 6,000(1.006)^{12}
\approx 6,446.55.
$$

Das Konto verdient im Laufe des Jahres etwa 446,55 $.

### Nominalsatz gegenüber effektiver Jahresrate

Der Nominalzinssatz $r$ ist der notierte Jahreszinssatz, bevor die Zinseszinsung innerhalb des Jahres einbezogen wird. Die **effektive Jahresrate**, geschrieben $R$ , ist das tatsächliche prozentuale Wachstum über ein ganzes Jahr:

$$
R = \left(1+\frac{r}{n}\right)^n - 1.
$$

für das Druckereikonto,

$$
R = (1.006)^{12}-1 \approx 0.074424 = 7.44\%.
$$

Die effektive Rate übersteigt die nominale $7.20\%$ Rate um etwa $0.24$ **Prozentpunkte**. Das ist kein $0.24\%$ relativer Anstieg. Prozentpunkte subtrahieren zwei Mengen direkt.

Wenn Zinsen jährlich zusammengesetzt werden, $n=1$ , also

$$
R = (1+r)^1-1=r.
$$

Für eine feste positive Nominalrate erhöht die Erhöhung der Compoundierungshäufigkeit die effektive Rate. Die Zunahmen werden kleiner, da die Frequenz sehr groß wird.

### Eine direkt zitierte periodische Rate

Manchmal ergibt das Problem eine monatliche Rate anstelle einer nominalen jährlichen Rate.

**Beispiel 2.** A store card charges $1.75\%$ per month.

Die angegebene nominale Jahresrate, die durch Multiplikation mit $12$ erhalten wird, ist

$$
12(1.75\%)=21.00\%.
$$

Die effektive Jahresrate ist

$$
R=(1.0175)^{12}-1\approx 0.23143=23.14\%.
$$

Ein unbezahltes $ 2.000 Gleichgewicht wächst zu

$$
2,000(1.0175)^{12}\approx 2,462.88.
$$

Multipliziert man die monatliche Rate mit $12$ ergibt sich das nominale Angebot, nicht das wahre einjährige Wachstum.

### Comparing offers

Frequenz allein entscheidet nicht, welches Angebot besser ist, wenn sich die nominalen Raten unterscheiden. Konvertieren Sie jedes Angebot in eine effektive Rate oder berechnen Sie jeden zukünftigen Wert über den gleichen Horizont.

**Beispiel 3.** Vergleichen:

- Offer I: $6.4\%$ nominal, compounded quarterly;
- Offer II: $6.5\%$ nominal, compounded semi-annually.

Die effektiven Mengen sind

$$
R_{\mathrm{I}}
=\left(1+\frac{0.064}{4}\right)^4-1
\approx 6.56\%,
$$

$$
R_{\mathrm{II}}
=\left(1+\frac{0.065}{2}\right)^2-1
\approx 6.61\%.
$$

Bieten Sie II-Verbindungen seltener an, gewinnen aber immer noch, weil ihre höhere Nominalrate die niedrigere Frequenz mehr als ausgleicht.

### Rückwärts lösen

Die gleiche Wachstumsgleichung kann für verschiedene Unbekannte neu angeordnet werden.

Für den ursprünglichen Hauptverpflichteten:

$$
S_0
=\frac{S(t)}
{\left(1+\frac{r}{n}\right)^{nt}}.
$$

Zeitlich:

$$
t
=\frac{\ln\left(S(t)/S_0\right)}
{n\ln\left(1+r/n\right)}.
$$

Für einen erforderlichen nominalen Zinssatz beginnen Sie mit

$$
\frac{S(t)}{S_0}
=\left(1+\frac{r}{n}\right)^{nt}
$$

und nimm die $nt$ -te Wurzel:

$$
r
=n\left[
\left(\frac{S(t)}{S_0}\right)^{1/(nt)}-1
\right].
$$

**Beispiel 4.** At $7.2\%$ nominal compounded monthly, doubling requires

$$
(1.006)^m=2,
$$

wobei $m$ die Anzahl der Monate ist. Daher

$$
m
=\frac{\ln 2}{\ln(1.006)}
\approx 115.87.
$$

Das sind ungefähr $9.65$ Jahre. Das zusammengesetzte Wachstum ist exponentiell, so dass die Verdoppelung der Rate die Zeit nicht genau halbiert und die Verdoppelung der Zeit das Gleichgewicht nicht verdoppelt.

**Beispiel 5.** Ein Unternehmen will 80.000 $ in acht Jahren und kann heute 50.000 $ investieren. Die Zinsen werden vierteljährlich zusammengesetzt. Finden Sie die erforderliche nominale Jahresrate.

Es gibt

$$
nt=4\cdot8=32
$$

quarters, so

$$
80,000
=50,000\left(1+\frac{r}{4}\right)^{32}.
$$

Dividieren Sie durch $ 50.000, bevor Sie die Wurzel nehmen:

$$
1+\frac{r}{4}
=\left(\frac{80,000}{50,000}\right)^{1/32}.
$$

Daher

$$
r
=4\left[(1.6)^{1/32}-1\right]
\approx0.0592=5.92\%.
$$

Die $5.92\%$ ist eine nominale jährliche Rate. Die Quartalsrate, die tatsächlich im Konto verwendet wird, ist etwa $1.48\%$ .

**Beispiel 6.** Zwei Sparkonten werden verwendet, um \ $ 15.000 bis \ $ 22.000 zu wachsen:

- Account A pays $6.00\%$ nominal, compounded monthly.
- Account B pays $6.15\%$ nominal, compounded quarterly.

Für Konto A sei $m$ die Anzahl der Monate:

$$
m
=\frac{\ln(22,000/15,000)}
{\ln(1+0.06/12)}
\approx76.80.
$$

Das sind ungefähr $6.40$ Jahre. Für Konto B sei $q$ die Anzahl der Quartale:

$$
q
=\frac{\ln(22,000/15,000)}
{\ln(1+0.0615/4)}
\approx25.10.
$$

Das sind ungefähr $6.28$ Jahre. Account B erreicht das Ziel zuerst, obwohl es sich weniger häufig zusammensetzt. Die Nennrate und die Compoundierungshäufigkeit sind gemeinsam zu bewerten.

**Beispiel 7.** Ein Geldmarktkonto zahlt nominal, zusammengesetzt täglich mit einem 365-Tage-Jahr. Ein Rentner Einlagen \ $ 20.000 für ein Jahr.

Die Tagesrate ist

$$
i=\frac{0.0425}{365}
\approx0.00011644
=0.011644\%.
$$

Es gibt 365 Perioden, nicht 12:

$$
R
=\left(1+\frac{0.0425}{365}\right)^{365}-1
\approx4.34\%.
$$

Der Jahresendsaldo ist ungefähr \ $ 20.868.27. Die tägliche Compoundierung ergibt ein etwas höheres Ergebnis als die monatliche Compoundierung bei gleicher nominaler Rate, bleibt aber immer noch unter der Obergrenze für die kontinuierliche Compoundierung.

---

## 3.2 Continuous Compounding

### Growth at every instant

Da die Anzahl der Compoundierungsperioden ohne Grenzen wächst,

$$
\left(1+\frac{r}{n}\right)^n \longrightarrow e^r.
$$

Unter kontinuierlicher Compoundierung wächst eine Anfangsmenge $S_0$ entsprechend

$$
S(t)=S_0e^{rt}.
$$

Der einjährige Wachstumsfaktor ist $e^r$ , so dass die effektive Jahresrate

$$
R_{\mathrm{cont}}=e^r-1.
$$

Die Verdoppelung des nominalen Zinssatzes verdoppelt nicht den effektiven Jahreszinssatz. Bei $r=9\%$

$$
e^{0.09}-1\approx9.42\%,
$$

while at $r=18\%$,

$$
e^{0.18}-1\approx19.72\%.
$$

Die Relation ist exponentiell:

$$
e^{2r}=(e^r)^2,
$$

nicht $e^{2r}=2e^r$ .

Jedes weitere Jahr multipliziert den aktuellen Saldo mit dem gleichen Faktor:

$$
S(t+1)=S(t)e^r.
$$

Der Faktor bleibt konstant, aber der Dollaranstieg wächst, weil das Gleichgewicht, das multipliziert wird, größer wird.

**Beispiel 1.** Eine Bäckereieinlage \ $ 4.500 bei einer kontinuierlichen Rate von $5\%$ .

$$
S(1)=4,500e^{0.05}\approx 4,730.72.
$$

Das erste Jahr Interesse ist

$$
4,730.72-4,500.00=230.72.
$$

Jährliche Compoundierung bei der gleichen nominalen Rate ergibt \$4,725,00, so kontinuierliche Compoundierung produziert \$5,72 mehr.

### Die durchgehende Obergrenze

Für den **gleichen Nominalzins** $r>0$

$$
\left(1+\frac{r}{n}\right)^n < e^r
$$

für jedes endliche $n$ . Kontinuierliche Compoundierung ist daher die durch Erhöhung der Frequenz erhaltene Decke.

Bei diesem Vergleich muss der Nominalsatz festgelegt bleiben. Ein höherer, vierteljährlich zusammengesetzter Nominalzinssatz kann einen niedrigeren, kontinuierlich zusammengesetzten Nominalzinssatz übertreffen. "Continuous gewinnt immer" ist falsch, wenn sich die Preise unterscheiden.

**Beispiel 2.** Bei einer gemeinsamen nominalen Rate von $10\%$ :

$$
K_{\mathrm{yearly}}=1.10,
$$

$$
K_{\mathrm{semi}}=(1.05)^2=1.1025,
$$

$$
K_{\mathrm{cont}}=e^{0.10}\approx1.105171.
$$

Die Bestellung erfolgt jährlich $<$ halbjährlich $<$ kontinuierlich.

**Beispiel 3.** Ein Schatzmeister investiert 60.000 $ für zwei Jahre und vergleicht:

- Bank X: $6.8\%$ continuously;
- Bank Y: $6.9\%$ nominal, compounded monthly;
- Bank Z: $7.0\%$ nominal, compounded quarterly.

Die zukünftigen Werte sind

$$
S_X
=60,000e^{0.068(2)}
\approx68,740.91,
$$

$$
S_Y
=60,000\left(1+\frac{0.069}{12}\right)^{24}
\approx68,851.32,
$$

$$
S_Z
=60,000\left(1+\frac{0.07}{4}\right)^8
\approx68,932.91.
$$

Bank X-Verbindungen kontinuierlich, aber endet zuletzt, weil es die niedrigste nominale Rate hat. Würden alle drei $7.0\%$ zitiert, würde die kontinuierliche Compoundierung wieder den größten Wert erzeugen. Frequenzvergleiche sind nur gültig, nachdem die nominale Differenz behandelt wurde.

### Lösung für Zeit oder Rate

Aus $S(t)=S_0e^{rt}$ :

$$
S_0=S(t)e^{-rt},
$$

$$
t=\frac{\ln(S(t)/S_0)}{r},
$$

$$
r=\frac{\ln(S(t)/S_0)}{t}.
$$

Um 150.000 $ in fünf Jahren bei einer kontinuierlichen Rate von $4.5\%$ zu haben, ist die erforderliche Einzahlung heute

$$
S_0
=150,000e^{-0.045(5)}
\approx119,777.40.
$$

Der negative Exponent bewegt das Ziel von Jahr 5 auf heute rückwärts.

Die Zeit, die benötigt wird, um eine Investition mit einem Faktor $M>0$ zu multiplizieren, ist

$$
t_M=\frac{\ln M}{r}.
$$

So

$$
t_4=\frac{\ln4}{r}
=\frac{2\ln2}{r}
=2t_2.
$$

Die Vervierfachung dauert genau zwei Verdopplungszeiten bei konstanter kontinuierlicher Rate. Das Verdreifachen dauert nicht drei Verdopplungszeiten; es dauert $\ln3/\ln2$ Verdopplungszeiten.

### Continuous depreciation

Das gleiche exponentielle Gesetz beschreibt den Zerfall, wenn der Exponent negativ ist. Wenn ein Vermögenswert kontinuierlich an Wert verliert $\delta>0$ ,

$$
v(t)=v_0e^{-\delta t}.
$$

Der nach $t$ Jahren verbleibende Bruchteil ist $e^{-\delta t}$ .

**Beispiel 4.** A courier fleet worth \$60,000 depreciates continuously at $10\%$ per year.

Nach fünf Jahren:

$$
v(5)=60,000e^{-0.10(5)}
=60,000e^{-0.5}
\approx36,391.84.
$$

Um herauszufinden, wann $40\%$ bleibt:

$$
0.40=e^{-0.10t},
$$

$$
t=\frac{-\ln(0.40)}{0.10}\approx9.16.
$$

Die Zeit ist ungefähr $9.16$ Jahre. Der verlorene Prozentsatz ist $60\%$ , aber die Gleichung muss den Bruch **verbleibend**, $0.40$ .

Wenn die anfänglichen und späteren Werte bekannt sind, lösen Sie dasselbe Gesetz für die Abschreibungsrate:

$$
\delta
=\frac{\ln(v_0/v(t))}{t}.
$$

**Beispiel 5.** Ausrüstung fällt von 180.000 $ auf 95.000 $ in sieben Jahren unter kontinuierlicher Abschreibung.

$$
\delta
=\frac{\ln(180,000/95,000)}{7}
\approx0.0913=9.13\%.
$$

Der Logarithmus verwendet den Anfangswert geteilt durch den späteren Wert, so dass der Zähler positiv ist. Die Verwendung des umgekehrten Verhältnisses würde zu einer negativen Abschreibungsrate führen.

### Kombination von kontinuierlichen Raten und Phasen

Kontinuierliche Wachstumsraten addieren den Exponenten. Wenn ein Vermögenswert mit dem Zinssatz $g$ wächst, während eine kontinuierliche Gebühr für den Zinssatz $f$ abgezogen wird, ist das Nettogesetz

$$
S(t)=S_0e^{(g-f)t}.
$$

Wenn sich die Rate zwischen den Phasen ändert, multiplizieren Sie die Phasenfaktoren:

$$
S
=S_0e^{r_1t_1}e^{r_2t_2}
=S_0e^{r_1t_1+r_2t_2}.
$$

Das gleiche Ergebnis kann mit einer zeitgewichteten kontinuierlichen Rate geschrieben werden

$$
r_{\mathrm{eff}}
=\frac{r_1t_1+r_2t_2}{t_1+t_2},
$$

so

$$
S=S_0e^{r_{\mathrm{eff}}(t_1+t_2)}.
$$

**Beispiel 6.** Der Umsatz wächst vier Jahre lang kontinuierlich bei $10\%$ , dann drei Jahre lang bei $4\%$ :

$$
S(7)=S_0e^{0.10(4)+0.04(3)}
=S_0e^{0.52}.
$$

Die zeitgewichtete kontinuierliche Rate ist

$$
r_{\mathrm{eff}}
=\frac{0.10\cdot4+0.04\cdot3}{7}
\approx0.0743=7.43\%.
$$

Setze dies nicht durch den ungewichteten Durchschnitt $(10\%+4\%)/2=7\%$ . Die längere Phase muss mehr zählen.

Eine kontinuierliche Managementgebühr funktioniert im gleichen Exponenten. Wenn eine Investition kontinuierlich $7\%$ verdient, aber eine kontinuierliche Gebühr von $1.2\%$ berechnet, dann ist ihr Nettozinssatz

$$
0.07-0.012=0.058.
$$

Eine anfängliche \ $ 100.000 wird daher

$$
100,000e^{0.058(6)}
\approx141,623.22
$$

nach sechs Jahren. Das Abziehen der Gebühr vom endgültigen Dollarsaldo wäre falsch, da die Gebühr das Wachstum während der gesamten Haltedauer reduziert.

### Crossover zwischen zwei Vermögenswerten

Suppose

$$
A(t)=A_0e^{gt},
\qquad
B(t)=B_0e^{-\delta t}.
$$

Beim Crossover, $A(t)=B(t)$ :

$$
A_0e^{gt}=B_0e^{-\delta t}.
$$

Daher

$$
t=\frac{\ln(B_0/A_0)}{g+\delta}.
$$

Dies ist die gleiche logarithmische Idee wie die Verdoppelung der Zeit, die jetzt auf zwei exponentielle Pfade angewendet wird.

**Beispiel 7.** Ein Start-up-Einsatz ist 50.000 $ wert und wächst kontinuierlich bei $4\%$ . Fabrikausrüstung ist im Wert von $ 250.000 und abwertet kontinuierlich bei $12\%$ .

Beim Crossover:

$$
50,000e^{0.04t}
=250,000e^{-0.12t}.
$$

Bewegen Sie beide Exponentialfaktoren auf die gleiche Seite:

$$
e^{0.16t}=5.
$$

Somit

$$
t=\frac{\ln5}{0.16}\approx10.06.
$$

Der Crossover tritt nach etwa $10.06$ Jahren auf. Der gemeinsame Wert ist ungefähr

$$
50,000e^{0.04(\ln5/0.16)}
\approx74,767.44.
$$

Die anfängliche Lücke ist fünffach, aber das Verhältnis der beiden Werte wächst kontinuierlich mit der kombinierten Rate $4\%+12\%=16\%$ .

**Beispiel 8.** Auf $ 25.000, vergleiche jährliche und kontinuierliche Compoundierung mit dem gleichen nominalen Zinssatz.

Bei $3\%$ für ein Jahr:

$$
S_{\mathrm{cont}}
=25,000e^{0.03}
\approx25,761.36,
$$

$$
S_{\mathrm{annual}}
=25,000(1.03)
=25,750.00.
$$

Die Lücke ist nur \$11.36. Bei $15\%$ für ein Jahr wächst die Lücke auf

$$
25,000e^{0.15}-25,000(1.15)
\approx295.86.
$$

Die Rate bei $3\%$ zu halten, aber den Horizont auf acht Jahre zu verlängern, gibt

$$
25,000e^{0.24}
-25,000(1.03)^8
\approx111.98.
$$

Der kontinuierliche Vorteil wächst sowohl mit der Rate als auch mit dem Horizont. Es ist keine feste Dollarprämie.

---

## 3.3 Gegenwartswert

### Verschieben einer zukünftigen Zahlung zurück zu heute

Der Barwert beantwortet diese Frage:

> Wie viel Geld würde heute in eine angegebene zukünftige Zahlung wachsen?

Für einen Betrag $K$ fällig in $t$ Jahren mit einer jährlichen Rate $r$ :

$$
PV=K(1+r)^{-t}
=\frac{K}{(1+r)^t}.
$$

Der einjährige Diskontfaktor ist

$$
d=\frac{1}{1+r}.
$$

Beim kontinuierlichen Compoundieren:

$$
PV=Ke^{-rt}.
$$

Der zukünftige Wert multipliziert sich mit einem Wachstumsfaktor. Der Barwert dividiert durch den gleichen Faktor.

**Beispiel 1.** Ein $ 8.000 Bonus ist in einem Jahr fällig und die jährliche Rate ist $5\%$ .

$$
d=(1.05)^{-1}\approx0.952381,
$$

$$
PV=8,000(1.05)^{-1}\approx7,619.05.
$$

Bei einer höheren Rate ist der heute erforderliche Betrag niedriger, weil weniger Geld heute in die gleiche \ $ 8.000 wachsen kann.

### Annual versus continuous discounting

Bei der gleichen positiven angegebenen Rate und Horizont, kontinuierliche Compoundierung wächst Geld schneller. Es diskontiert daher zukünftiges Geld stärker:

$$
Ke^{-rt}<K(1+r)^{-t}.
$$

**Beispiel 2. ** Eine Zahlung von 1 \ 1 \ 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . .

Continuous:

$$
PV_{\mathrm{cont}}
=12,000e^{-0.06(3)}
\approx10,023.24.
$$

Annual:

$$
PV_{\mathrm{annual}}
=12,000(1.06)^{-3}
\approx10,075.43.
$$

Der kontinuierliche Gegenwartswert ist niedriger, nicht höher.

Die beiden Übereinkommen können mit einem entsprechenden Jahressatz verglichen werden. Wenn kontinuierliche Diskontierung zu Rate $r_c$ den gleichen Barwert wie jährliche Diskontierung zu Rate $r_a$ ergibt, dann

$$
1+r_a=e^{r_c},
$$

so

$$
r_a=e^{r_c}-1.
$$

Diese Äquivalenz hängt nicht vom Zahlungshorizont ab. Das gleiche $r_a$ funktioniert für jedes $t>0$ .

### Several payments

Cashflows zu unterschiedlichen Zeitpunkten können nicht zuerst addiert und einmal diskontiert werden, es sei denn, sie teilen sich das gleiche Datum. Rabatt jede Zahlung separat, dann fügen Sie hinzu:

$$
PV
=\sum_{j=1}^{m}
\frac{K_j}{(1+r)^{t_j}}
$$

einer jährlichen Compoundierung oder

$$
PV
=\sum_{j=1}^{m}
K_je^{-rt_j}
$$

unter kontinuierlicher Compoundierung.

**Beispiel 3.** Ein Softwareunternehmen erhält 40.000 $ in zwei Jahren und 65.000 $ in fünf Jahren zu einem jährlichen Interesse von $5\%$ :

$$
PV
=\frac{40,000}{(1.05)^2}
+\frac{65,000}{(1.05)^5}.
$$

Jeder Begriff trägt seinen eigenen Exponenten, weil jede Zahlung für eine andere Länge der Zeit wartet.

**Beispiel 4.** Ein Franchise-Vertrag zahlt 30.000 in fünf Jahren und 55.000 in zehn Jahren. Der kontinuierliche Abzinsungssatz ist $8\%$ .

Der fünfjährige Diskontfaktor ist

$$
e^{-0.08(5)}=e^{-0.4}\approx0.67032.
$$

Da zehn Jahre zweimal fünf Jahre sind, ist sein Diskontfaktor das Quadrat des Fünfjahresfaktors:

$$
e^{-0.08(10)}
=e^{-0.8}
=\left(e^{-0.4}\right)^2
\approx0.44933.
$$

Ermäßigen Sie die beiden Zahlungen separat:

$$
PV_1
=30,000e^{-0.4}
\approx20,109.60,
$$

$$
PV_2
=55,000e^{-0.8}
\approx24,713.09.
$$

Der kombinierte Barwert ist

$$
PV\approx20,109.60+24,713.09
=44,822.69.
$$

Hinzufügen von 30.000 $ und 55.000 $ zuerst und die Anwendung eines Diskontfaktors würde stillschweigend beide Zahlungen am selben Datum platzieren.

### Vergleich von sofortigen und aufgeschobenen Zahlungen

Bringen Sie jede Option zu einem gemeinsamen Datum. Wenn Option A heute 22.000 und Option B 25.500 in drei Jahren bei $6\%$ ist,

$$
PV_B=\frac{25,500}{(1.06)^3}\approx21,410.29.
$$

Option B hat den kleineren Barwert. Vergleicht man 22.000 $ direkt mit 25.500 $ ignoriert drei Jahre Opportunitätskosten.

### Lösung für eine unbekannte Zeit oder Rate

Aus $PV=K(1+r)^{-t}$ :

$$
t
=\frac{\ln(K/PV)}
{\ln(1+r)}.
$$

Für kontinuierliche Diskontierung:

$$
r=\frac{\ln(K/PV)}{t}.
$$

Überprüfen Sie immer die Richtung. Wenn $K>PV$ und $t>0$ , sollte der implizite positive Diskontsatz positiv sein.

**Beispiel 5.** Investoren zahlen heute 2.000.000 $ für eine garantierte Zahlung von 3.200.000 $ in Jahren. Unter kontinuierlicher Abzinsung,

$$
2,000,000
=3,200,000e^{-4.5r}.
$$

Der beobachtete Abzinsungsfaktor ist

$$
\frac{2,000,000}{3,200,000}=0.625.
$$

Daher

$$
r
=-\frac{\ln(0.625)}{4.5}
\approx0.1044=10.44\%.
$$

Wenn der gleiche Abzinsungsfaktor in nur drei Jahren auftreten müsste, wäre der implizierte Zinssatz

$$
-\frac{\ln(0.625)}{3}
\approx15.67\%.
$$

Der gleiche Gesamtrabatt, der in weniger Zeit komprimiert wird, erfordert eine höhere Jahresrate.

### Lösung für eine erforderliche zukünftige Zahlung

Manchmal ist das Barwertziel bekannt und der zukünftige Nennbetrag unbekannt. Unter jährlicher Compoundierung,

$$
K=PV(1+r)^t.
$$

unter kontinuierlicher Compoundierung,

$$
K=PVe^{rt}.
$$

**Beispiel 6.** Ein Unternehmen benötigt Forderungen mit einem kombinierten Barwert von 100.000 $. Es hat bereits \ $ 42.000 fällig in drei Jahren. Eine zweite Forderung ist in sechs Jahren fällig, und die jährliche Rate ist $6\%$ .

Die erste Forderung trägt

$$
PV_1
=\frac{42,000}{(1.06)^3}
\approx35,264.01.
$$

Der zweite muss beitragen

$$
PV_2
=100,000-35,264.01
=64,735.99
$$

heute. Wachsen, dass erforderlich Barwert auf Jahr 6:

$$
K_2
=64,735.99(1.06)^6
\approx91,829.24.
$$

Dies ist ein zweistufiges Problem: Finden Sie zuerst den fehlenden Barwert und verschieben Sie diesen Betrag dann auf sein eigenes Zahlungsdatum.

Für kontinuierliche Gleichgültigkeit, nehmen Sie an, ein Beratungsunternehmen kann \ $ 35.000 jetzt oder eine Zahlung in vier Jahren bei $6.5\%$ nehmen. Die entsprechende zukünftige Zahlung ist

$$
K
=35,000e^{0.065(4)}
\approx45,392.55.
$$

Die zukünftige Option muss größer als \ $ 35.000 sein, weil es für vier Jahre des Wartens kompensiert.

### Optimales Timing eines wachsenden Assets

Einige Vermögenswerte werden wertvoller, wenn sie länger gehalten werden, aber das Warten reduziert auch den zukünftigen Verkaufserlös. Wenn der Marktwert zum Zeitpunkt $t$ $P(t)$ ist und der kontinuierliche Zinssatz $r$ ist, ist der Barwert des Verkaufs zum Zeitpunkt $t$

$$
f(t)=P(t)e^{-rt}.
$$

Differentiate:

$$
f'(t)
=e^{-rt}\bigl[P'(t)-rP(t)\bigr].
$$

At an interior optimum $t^*$:

$$
P'(t^*)=rP(t^*).
$$

Equivalently,

$$
\frac{P'(t^*)}{P(t^*)}=r.
$$

Der Vermögenswert sollte verkauft werden, wenn seine proportionale Wachstumsrate auf den Zinssatz fällt. Vor diesem Zeitpunkt wächst das Warten das Asset schnell genug, um die Verzögerung zu rechtfertigen. Danach gewinnt die Diskontierung.

Die zweite Bedingung für ein echtes Maximum ist

$$
P''(t^*)-rP'(t^*)<0.
$$

**Beispiel 7.** Ein Holzstand hat Wert

$$
P(t)=5,000(t+2)^2
$$

und $r=0.08$ . Seit

$$
P'(t)=10,000(t+2),
$$

Die Bedingung erster Ordnung gibt

$$
10,000(t+2)
=0.08\left[5,000(t+2)^2\right].
$$

Weil $t+2>0$ durch $5,000(t+2)$ geteilt wird:

$$
2=0.08(t+2),
$$

so

$$
t^*=23.
$$

Das Optimum ist in Jahren. Das Finden des Datums ist nicht das Ende der Berechnung. Zu diesem Zeitpunkt ist der zukünftige Marktwert

$$
P(23)
=5,000(25)^2
=3,125,000.
$$

Bringen Sie diesen Betrag zurück 23 Jahre:

$$
f(23)
=3,125,000e^{-0.08(23)}
\approx496,304.46.
$$

Die zweitrangige Menge ist

$$
P''(23)-0.08P'(23)
=10,000-0.08(250,000)
=-10,000<0,
$$

Das bestätigt ein Maximum. Als direkte Kontrolle gibt das Warten bis zum Jahr 25

$$
f(25)
=5,000(27)^2e^{-2}
\approx493,297.11,
$$

Dies ist niedriger als der Wert im Jahr 23.

Für die Familie $P(t)=A(t+k)^2$ gibt die gleiche Berechnung

$$
t^*=\frac{2}{r}-k.
$$

Die Skala $A$ hebt sich auf. Ein höherer Zinssatz macht das Warten teurer und bewegt die optimale Zeit früher.

### Vergleichende Statik und Eckfälle

Wenn sich das Optimum mit $r$ ändert, verwendet das Kapitel

$$
\frac{dt^*}{dr}
=\frac{P(t^*)}
{P''(t^*)-rP'(t^*)}.
$$

Bei einem echten Maximum ist der Nenner negativ, während $P(t^*)>0$ also

$$
\frac{dt^*}{dr}<0.
$$

Die Ableitung wird in Bezug auf $r$ als Dezimalzahl geschrieben genommen. Eine Änderung um einen Prozentpunkt bedeutet $\Delta r=0.01$ , nicht $\Delta r=1$ .

**Beispiel 8.** At a forestry cooperative's current optimum,

$$
P(t^*)=520,000,
\qquad
P'(t^*)=46,800,
\qquad
P''(t^*)=3,120,
$$

und $r=0.09$ . Überprüfen Sie zunächst, ob der Punkt die Bedingung erster Ordnung erfüllt:

$$
rP(t^*)
=0.09(520,000)
=46,800
=P'(t^*).
$$

Als nächstes berechnen Sie den Nenner:

$$
P''(t^*)-rP'(t^*)
=3,120-0.09(46,800)
=-1,092.
$$

Es ist negativ, so dass die Bedingung zweiter Ordnung gilt. Die Empfindlichkeit ist

$$
\frac{dt^*}{dr}
=\frac{520,000}{-1,092}
\approx-476.19.
$$

Lokal hat ein einprozentualer Anstieg der Rate die Näherung

$$
\Delta t^*
\approx-476.19(0.01)
=-4.76.
$$

Die lokale Schätzung ist eine Reduktion von etwa $4.76$ Jahren. Die große Zahl $-476.19$ bezieht sich auf eine vollständige Einheitsänderung der Dezimalrate. Wenn man es als den Effekt einer Änderung von einem Prozentpunkt interpretiert, würde die Antwort um einen Faktor von $100$ übertrieben.

Nicht jedes Problem hat ein inneres Optimum. Wenn

$$
P(t)=P_0e^{gt},
$$

dann

$$
f(t)=P_0e^{(g-r)t}.
$$

- Wenn $g<r$ , Der Barwert fällt mit der Zeit, also verkaufen Sie sofort.
- Wenn $g>r$ , steigt der aktuelle Wert weiter, so dass es in diesem Modell keine endliche Maximierungszeit gibt.
- Wenn $g=r$ , ist der aktuelle Wert über die Zeit konstant.

Zwingen Sie die Bedingung erster Ordnung nicht, um eine innere Antwort zu erzeugen, wenn das Maximum an einer Grenze liegt oder nicht zu einer endlichen Zeit auftritt.

**Beispiel 9.** Eine Partie Wein ist es wert

$$
P(t)=40,000e^{0.05t},
$$

Während der kontinuierliche Abzinsungssatz $8\%$ ist. Sein Barwert ist

$$
f(t)
=40,000e^{(0.05-0.08)t}
=40,000e^{-0.03t}.
$$

Dies fällt für jeden $t>0$ , so dass die beste Verkaufszeit die Grenze $t^*=0$ . Warten auf zehn Jahre gibt nur

$$
f(10)
=40,000e^{-0.3}
\approx29,632.73.
$$

Wenn der Diskontsatz stattdessen $4\%$ wäre, würde $f(t)=40,000e^{0.01t}$ weiter steigen. Es gäbe keine endliche Maximierungszeit in diesem Modell. Ein steigender Marktpreis allein beweist nicht, dass das Warten den Barwert erhöht.

---

## 3.4 Geometric Series

### Sequenz, Term und Summe

Eine geometrische Sequenz beginnt bei $a$ und multipliziert mit dem gleichen Quotienten $k$ jede Periode:

$$
a,\ ak,\ ak^2,\ \ldots
$$

Der $j$ -te Term, der den ersten Term als $j=1$ zählt, ist

$$
a_j=ak^{j-1}.
$$

Eine **serie** fügt die begriffe hinzu. Die Summe der ersten $n$ Terme ist

$$
s_n=a+ak+\cdots+ak^{n-1}.
$$

Für $k\ne1$ :

$$
s_n
=a\frac{k^n-1}{k-1}
=a\frac{1-k^n}{1-k}.
$$

Beide Versionen sind die gleiche Formel. Wählen Sie das Formular, das die Zeichen leicht enthält.

Wenn $k=1$ , ist jeder Term gleich $a$ , also

$$
s_n=an.
$$

Die allgemeine Bruchformel kann nicht bei $k=1$ verwendet werden, da ihr Nenner Null wäre.

**Beispiel 1.** Startup-Umsatz ist \ $ 50 Millionen im Jahr 1 und wächst $10\%$ pro Jahr für fünf Jahre. Hier $a=50$ $k=1.10$ $n=5$ .

Year 5 revenue:

$$
a_5=50(1.10)^4\approx73.21.
$$

Five-year total:

$$
s_5
=50\frac{(1.10)^5-1}{1.10-1}
\approx305.26.
$$

Der fünfte Begriff verwendet Exponent $4$ ; die Fünf-Term-Summenformel verwendet Exponent $5$ .

### Unendliche geometrische Reihe

Wenn $|k|<1$ , nähern sich die Potenzen $k^n$ Null. Die Finite-Summen-Ansätze

$$
s_\infty=\frac{a}{1-k}.
$$

Wenn $|k|\ge1$ , die unendliche geometrische Reihe divergiert und hat keine endliche Summe.

**Beispiel 2.** Monatlicher Gewinn beginnt bei \ $ 2.000 und Hälften jeden Monat:

$$
2,000+1,000+500+250+\cdots
$$

Hier $a=2,000$ und $k=0.5$ also

$$
s_\infty
=\frac{2,000}{1-0.5}
=4,000.
$$

Die ersten vier Monate insgesamt \$3,750, die unterhalb der Begrenzung \$4,000 insgesamt ist.

**Beispiel 3.** Einzahlungen beginnen bei \$800 und jede spätere Einzahlung ist $90\%$ der vorherigen:

$$
s_\infty=\frac{800}{1-0.90}=8,000.
$$

Die ersten zehn Einlagen insgesamt

$$
s_{10}
=800\frac{1-(0.90)^{10}}{1-0.90}
\approx5,210.57,
$$

 $65.13\%$ der unendlichen Summe.

### Wachstum, Rückgang und Wechselzeichen

Der Quotient enthält sowohl Größe als auch Richtung:

- $0<k<1$ : positive Begriffe sinken;
- $k>1$ : positive Begriffe wachsen;
- $-1<k<0$ : Zeichen wechseln sich ab, während Größen schrumpfen;
- $k\le-1$ : Zeichen wechseln sich ab, ohne für die Konvergenz genug zu schrumpfen.

Eine unendliche alternierende geometrische Reihe konvergiert immer dann, wenn $|k|<1$ . Die Summe kann kleiner als der erste positive Begriff sein, weil spätere negative Begriffe ihn teilweise aufheben.

**Beispiel 4.** Ein Vertrag erzeugt den Wechselstrom

$$
4,000-2,000+1,000-500+\cdots.
$$

Hier $a=4,000$ und $k=-0.5$ . Da $|k|=0.5<1$ , konvergiert der Strom:

$$
s_\infty
=\frac{4,000}{1-(-0.5)}
=2,666.67.
$$

Die Verwendung von $1-0.5$ im Nenner würde das Wechselzeichen ignorieren und das falsche Ergebnis liefern.

### Kalenderverzögerung und Seriensumme

Die geometrischen Formeln in diesem Abschnitt fügen die aufgeführten Beträge hinzu. Wenn ein Stream im Jahr 6 statt im Jahr 1 beginnt, aber kein Zinssatz angegeben wird, ändert die Verzögerung nicht ihre nominale Gesamtsumme. Diskontierung gehört nur zu einer separaten Barwertberechnung.

**Beispiel 5.** Ein gemeinnütziger Trust zahlt seinen ersten 50.000-Dollar-Zuschuss im Jahr 6. Jedes spätere Stipendium ist $96\%$ des vorherigen.

$$
50,000,\quad
50,000(0.96),\quad
50,000(0.96)^2,\ldots
$$

Die nominale Summe aller Zuschüsse ist

$$
\frac{50,000}{1-0.96}
=1,250,000.
$$

Die ersten 15 Zuschüsse insgesamt

$$
s_{15}
=50,000
\frac{1-(0.96)^{15}}{1-0.96}.
$$

Der Kalender sagt uns, wann die Zuschüsse erfolgen. Der Quotient $0.96$ sagt uns, wie sich ihre Größen ändern. Beides schafft keinen Diskontsatz.

### Übereinstimmung mit der Periodeneinheit

Der Exponent zählt Begriffe, nicht automatisch Jahre. Konvertieren Sie den Kalenderhorizont in die gleiche Einheit, die der Quotient verwendet.

**Beispiel 6.** Ein Weinberg bringt 10.000 lb im ersten Quartal. Der Ertrag fällt dann um $2\%$ jedes Quartal für fünf Jahre.

Five years contains

$$
n=5\cdot4=20
$$

Viertel. Daher

$$
s_{20}
=10,000
\frac{1-(0.98)^{20}}{1-0.98}
\approx166,196.01.
$$

Die Summe ist ungefähr $166,196.01$ lb. Die Rendite des zwanzigsten Quartals ist ein Begriff, keine Summe:

$$
a_{20}
=10,000(0.98)^{19}
\approx6,812.33.
$$

Das ist ungefähr $6,812.33$ lb. Die Verwendung von $n=5$ würde nur fünf Viertel oder $1.25$ Jahre betragen.

### Endliche Phase, gefolgt von einer unendlichen Phase

Behandle jede Phase als eigene Serie. Erzwingen Sie nicht einen Quotienten und einen Horizont auf das gesamte Modell.

**Beispiel 7.** Ein Technologieunternehmen projiziert 4 Millionen US-Dollar Umsatz im Jahr 1, wächst um $20\%$ für sechs Jahre. Es modelliert dann den Umsatz von Jahr 6 als erste Laufzeit eines separaten Stroms, der für immer um $15\%$ sinkt.

Die sechsjährige Phase ist endlich, also verursacht $k=1.20>1$ kein Problem:

$$
s_6
=4\frac{(1.20)^6-1}{1.20-1}
\approx39.72
$$

Millionen Dollar. Jahr 6 Einnahmen sind

$$
a_6=4(1.20)^5=9.95328
$$

Millionen Dollar. Für den separaten Terminalstrom $k=0.85$ , also

$$
s_{\infty,\mathrm{terminal}}
=\frac{9.95328}{1-0.85}
\approx66.36
$$

Millionen Dollar. Unter dem Nominalsummenmodell dieser Aufgabe ist die kombinierte Summe ungefähr

$$
39.72+66.36=106.08
$$

Millionen Dollar. Die endliche Wachstumsphase kann $k>1$ haben; nur die unendliche Phase braucht $|k|<1$ .

### Ein geometrisches Modell rückwärts lösen

Sie können auch für das erste oder für die Anzahl der Strings

Wenn $s_n$ , $k$ und $n$ bekannt sind, dann

$$
a
=s_n\frac{k-1}{k^n-1}.
$$

**Beispiel 8.** Die Wiederauffüllungskosten steigen um $15\%$ pro Monat für sechs Monate und insgesamt 58.000 $.

$$
a
=58,000
\frac{1.15-1}{(1.15)^6-1}
\approx6,625.74.
$$

Die Kosten des sechsten Monats sind

$$
a_6
=6,625.74(1.15)^5
\approx13,326.73.
$$

Die Gesamtformel bestimmt den ersten Monat. Der Begriff Formel bestimmt dann einen bestimmten Monat.

**Beispiel 9.** Ein Marketingbudget beginnt bei 200.000 $ und wächst um $12\%$ pro Jahr. Finden Sie das erste Jahr, in dem die kumulativen Ausgaben \ $ 3.000.000 überschreiten.

Die Ungleichheit lösen

$$
200,000
\frac{(1.12)^n-1}{0.12}
>3,000,000.
$$

Dies reduziert sich auf

$$
(1.12)^n>2.8,
$$

so

$$
n>\frac{\ln2.8}{\ln1.12}\approx9.09.
$$

Die kleinste ganze Zahl ist $n=10$ . Die Überprüfung der Nachbarwerte bestätigt die Überfahrt:

$$
s_9\approx2,955,131.26,
$$

$$
s_{10}\approx3,509,747.01.
$$

Für eine Frage des ersten Kreuzens reicht es nicht aus, die Decke zu nehmen. Überprüfen Sie die ganze Zahl sofort unten und die gewählte ganze Zahl.

### Vergleich zweier geometrischer Ströme

Wenn Einnahmen und Kosten mit unterschiedlichen Raten wachsen, berechnen Sie zwei Summen, bevor Sie subtrahieren. Ein Quotient kann nicht beide Ströme repräsentieren.

**Beispiel 10.** Jahresumsatz beginnt bei 150.000 $ und wächst um $1\%$ . Die jährliche Wartung beginnt bei $ 120.000 und wächst um $3\%$ . Über 12 Jahre:

$$
s_{\mathrm{revenue}}
=150,000
\frac{(1.01)^{12}-1}{0.01}
\approx1,902,375.45,
$$

$$
s_{\mathrm{cost}}
=120,000
\frac{(1.03)^{12}-1}{0.03}
\approx1,703,043.55.
$$

Daher ist der kumulative Gewinn ungefähr

$$
1,902,375.45-1,703,043.55
=199,331.90.
$$

Der Umsatz beginnt höher, aber die Kosten haben die schnellere Wachstumsrate. Die Verlängerung des Horizonts kann den kumulativen Vorteil verringern, auch wenn beide Summen weiter steigen.

Unterscheiden Sie einen Begriff Crossover von einem kumulativen Total Crossover. Ein Strom kann die größere Zahlung im Jahr $8$ erzeugen, während er immer noch die kleinere achtjährige Gesamtsumme hat. Vergleichen Sie den einzelnen Begriff $a_j$ und die laufende Summe $s_n$ separat.

### Begriffe gegen Null sind nicht genug

Für jede konvergente Serie

$$
\sum_{n=1}^{\infty}a_n,
$$

Es ist notwendig, dass

$$
a_n\longrightarrow0.
$$

Aber diese Bedingung reicht nicht aus. Die harmonische Reihe

$$
1+\frac12+\frac13+\cdots
$$

diverges even though its terms approach zero.

Für eine $p$ -Serie:

$$
\sum_{n=1}^{\infty}\frac{1}{n^p}
$$

konvergiert, wenn und nur wenn

$$
p>1.
$$

So divergiert $\sum 1/n$ , während $\sum 1/n^2$ konvergiert. "Die Zahlungen werden kleiner" ist kein vollständiger Konvergenztest.

---

## 3.5 Annuities, Annuities Due & Perpetuities

### Timing comes first

Eine **gewöhnliche Annuität ** zahlt den gleichen Betrag $a$ am **Ende ** jeder Periode. Eine **annuität fällig ** zahlt am **start ** jeder periode.

Für $n$ jährliche ordentliche Rentenzahlungen ist die Zeitleiste:

| Time | $0$ | $1$ | $2$ | $\cdots$ | $n$ |
| --- | --- | --- | --- | --- | --- |
| Payment | none | $a$ | $a$ | $\cdots$ | $a$ |

Für eine Annuität fällig:

| Time | $0$ | $1$ | $2$ | $\cdots$ | $n-1$ |
| --- | --- | --- | --- | --- | --- |
| Payment | $a$ | $a$ | $a$ | $\cdots$ | $a$ |

Die Anzahl der Zahlungen ist immer noch $n$ . Nur ihre Daten verschieben sich eine Periode früher.

### Eine Einzahlung oder Zahlung

Eine gegenwärtige Ablagerung $P$ wächst zu

$$
F=P(1+r)^n.
$$

Eine zukünftige Zahlung $A$ hat einen Barwert

$$
P=\frac{A}{(1+r)^n}.
$$

Dies sind die One-Cash-Flow-Bausteine für jede Annuitätsformel.

### Zukünftiger Wert einer gewöhnlichen Annuität

Angenommen, $a$ wird am Ende jeder Periode hinterlegt. Unmittelbar nach der $n$ -ten Einzahlung hat die letzte Einzahlung keine Zinsen verdient, die vorherige eine Periode und die erste Periode $n-1$ :

$$
F_n
=a+a(1+r)+\cdots+a(1+r)^{n-1}.
$$

Dies ist geometrisch mit Quotient $1+r$ :

$$
F_n
=\frac{a}{r}\left[(1+r)^n-1\right].
$$

**Beispiel 1.** Eine Zahnklinik Einlagen \ $ 2.000 an jedem Jahresende für sechs Jahre bei $5\%$ :

$$
F_6
=\frac{2,000}{0.05}\left[(1.05)^6-1\right]
\approx13,603.83.
$$

Die Gesamteinlagen sind \$12.000, so dass die Zinsen \$1,603,83.

Die Formel ist direkt proportional zu $a$ . Die Erhöhung jeder Einzahlung um $50\%$ erhöht den zukünftigen Wert um genau $50\%$ . Die Verdoppelung der Anzahl der Jahre verdoppelt nicht nur den zukünftigen Wert, da sich frühere Einlagen weiter erhöhen.

### Barwert einer gewöhnlichen Annuität

Rabatt jede Zahlung auf Zeit $0$ :

$$
P_n
=\frac{a}{1+r}
+\frac{a}{(1+r)^2}
+\cdots+
\frac{a}{(1+r)^n}.
$$

Diese geometrische Summe vereinfacht sich

$$
P_n
=\frac{a}{r}
\left[
1-\frac{1}{(1+r)^n}
\right].
$$

Gegenwärtiger und zukünftiger Wert sind verknüpft durch

$$
F_n=P_n(1+r)^n.
$$

So

$$
P_n=\frac{F_n}{(1+r)^n}.
$$

**Beispiel 2.** Ein Rentner zieht \ $ 2.400 an jedem Jahresende für 15 Jahre von einem Konto ab, das $4.5\%$ verdient:

$$
P_{15}
=\frac{2,400}{0.045}
\left[
1-\frac{1}{(1.045)^{15}}
\right]
\approx25,774.91.
$$

Nominal Auszahlungen insgesamt \ $ 36.000, aber nur \ $ 25.774.91 wird heute benötigt, weil der Restbetrag Zinsen verdient, während Auszahlungen auftreten.

### Perpetuities

Es sei $n\to\infty$ in der gewöhnlichen Annuität Gegenwartswert Formel. Wenn $r>0$

$$
\frac{1}{(1+r)^n}\longrightarrow0,
$$

So eine Ebene Permanenz zahlen $a$ an jedem Periodenende hat Wert

$$
P_\infty=\frac{a}{r}.
$$

**Beispiel 3.** Ein Stipendium zahlt 5.000 $ an jedem Jahresende für immer bei $6\%$ :

$$
P_\infty=\frac{5,000}{0.06}=83,333.33.
$$

A 20-year version costs less:

$$
P_{20}
=\frac{5,000}{0.06}
\left[
1-\frac{1}{(1.06)^{20}}
\right]
\approx57,349.61.
$$

Die Verlängerung einer endlichen Annuität bewegt ihren Wert in Richtung der Ewigkeitsgrenze, aber jede zusätzliche entfernte Zahlung fügt weniger Gegenwartswert hinzu.

### Annuities due

Jede Zahlung in einer fälligen Annuität erfolgt eine Periode früher als die entsprechende ordentliche Annuität Zahlung. Jeder ist daher einen Faktor $1+r$ am selben Bewertungsdatum mehr wert:

$$
P_{\mathrm{due}}=P_n(1+r),
$$

$$
F_{\mathrm{due}}=F_n(1+r).
$$

Eine gleichwertige Gegenwartswertform ist

$$
P_{\mathrm{due}}=a+P_{n-1}.
$$

Die erste Zahlung ist bereits zum Zeitpunkt $0$ , und die verbleibenden $n-1$ Zahlungen bilden eine gewöhnliche Annuität.

**Beispiel 4.** Ein Fitnessstudio zahlt 3.000 $ zu Beginn jedes Jahres für sechs Jahre bei $5\%$ .

Der zukünftige Matching-Annuity-Wert ist

$$
F_{\mathrm{ordinary}}
=\frac{3,000}{0.05}
\left[(1.05)^6-1\right]
\approx20,405.74.
$$

Move every deposit one year earlier:

$$
F_{\mathrm{due}}
=20,405.74(1.05)
\approx21,426.03.
$$

Der fällige Wert ist um 1.020,29 $ größer, da jede Einzahlung eine zusätzliche Zinsperiode verdient.

Für einen Kredit oder Kaufpreis mit sofort beginnenden Zahlungen kommt dem Kreditgeber das frühere Timing zugute. Halten Sie den Barwert fest, ist die erforderliche Rente-fällige Zahlung daher niedriger als die erforderliche ordentliche Rente Zahlung.

**Beispiel 5.** Ein fünfjähriger kommerzieller Mietvertrag erfordert 24.000 $ zu Beginn eines jeden Jahres. Die Jahresrate ist $6\%$ .

Erster Wert der passenden Jahresendrente:

$$
P_{\mathrm{ordinary}}
=\frac{24,000}{0.06}
\left[
1-(1.06)^{-5}
\right]
\approx101,096.73.
$$

Dann verschieben Sie jede Zahlung ein Jahr früher:

$$
P_{\mathrm{due}}
=101,096.73(1.06)
\approx107,162.53.
$$

Die Differenz ist etwa \ $ 6.065.80. Diese Lücke entspricht einem Jahreszins auf den Barwert der ordentlichen Annuität:

$$
0.06(101,096.73)\approx6,065.80.
$$

### Deferred perpetuities

Wenn die erste Dauerzahlung später als der gewöhnliche Zeitplan erfolgt, verwenden Sie zwei Phasen:

1. die Ewigkeit einen Zeitraum vor ihrer ersten Zahlung zu bewerten;
2. Diskontieren Sie diesen Wert zurück in die Zeit $0$ .

Für eine Ewigkeit mit der ersten Zahlung $a$ zum Zeitpunkt $m$ :

$$
PV_{m-1}=\frac{a}{r},
$$

dann

$$
PV_0
=\frac{a/r}{(1+r)^{m-1}}.
$$

Zählen Sie die Verzögerung vom Bewertungsdatum bis zum Datum, an dem die Standardformel gültig ist. Die meisten latenten Stream-Fehler sind Off-by-One-Timing-Fehler.

**Beispiel 6.** Ein Stiftungsfonds zahlt \ $ 10.000 für immer, mit der ersten Zahlung am Ende des Jahres 5. Die Jahresrate ist $6\%$ .

Eine Periode vor der ersten Zahlung, zum Zeitpunkt $4$ , ist die Ewigkeit wert

$$
PV_4
=\frac{10,000}{0.06}
=166,666.67.
$$

Jetzt diskontieren, dass Single Time-4 Wert zurück vier Jahre:

$$
PV_0
=\frac{166,666.67}{(1.06)^4}
\approx132,015.61.
$$

Discounting für fünf Jahre wäre ein off-by-one Fehler. Die Permanenzformel bewertet den Stream bereits eine Periode vor seiner ersten Zahlung.

### Growing perpetuities

Wenn die nächste Zahlung $a_1$ ist und spätere Zahlungen für immer mit konstanter Rate $g$ wachsen, mit erforderlicher Rückkehr $r>g$ , ist der Barwert

$$
P=\frac{a_1}{r-g}.
$$

Die Formel benötigt die **nächste ** Zahlung und eine strikt positive Lücke $r-g$ . Wenn $g\ge r$ , bricht das Modell und die Formel kann nicht verwendet werden.

Wenn eine gerade gezahlte Dividende $D_0$ mit Rate $g$ wächst, dann

$$
D_1=D_0(1+g),
$$

und die Gordon-Aktienformel ist

$$
P=\frac{D_1}{r-g}=\frac{D_0(1+g)}{r-g}.
$$

**Beispiel 7.** Ein Mietobjekt zahlt 24.000 $ am Ende des Jahres 1 und wächst dann für immer bei $2.5\%$ . Die erforderliche Rückkehr ist $8\%$ :

$$
P=\frac{24,000}{0.08-0.025}=436,363.64.
$$

Ohne Wachstum wäre die gleiche erste Zahlung nur wert

$$
\frac{24,000}{0.08}=300,000.
$$

Wachstum fügt Wert hinzu, aber nur, während $g$ unter $r$ bleibt.

**Beispiel 8.** Eine Aktie hat gerade eine Dividende von 3,00 $ gezahlt. Dividenden werden voraussichtlich für immer bei $3\%$ wachsen, und Investoren benötigen $9\%$ .

Der Zähler muss die Dividende des nächsten Jahres sein:

$$
D_1=3.00(1.03)=3.09.
$$

Daher

$$
P
=\frac{3.09}{0.09-0.03}
=51.50.
$$

Die direkte Verwendung von $D_0=3.00$ würde den Anteil auf \$50.00 bewerten und ihn unterschätzen. Die Formel beginnt mit der ersten zukünftigen Zahlung, nicht mit der bereits erfolgten Zahlung.

### Comparing payment streams

Wählen Sie niemals einen Plan aus seiner nominalen Gesamtsumme allein. Berechnen Sie den Barwert jedes Plans zum gleichen Zinssatz.

**Beispiel 9.** Maschinen kosten heute entweder \$ 18.000 oder \$ 2.500 an jedem Jahresende für neun Jahre bei $7\%$ .

Der Ratenzahlungsplan hat Barwert

$$
P_9
=\frac{2,500}{0.07}
\left[
1-\frac{1}{(1.07)^9}
\right]
\approx16,288.08.
$$

Seine nominale Gesamt ist \ $ 22.500, aber seine Gegenwartswert Kosten ist unter \ $ 18.000, weil die meisten Zahlungen später auftreten.

**Beispiel 10.** Ein Unternehmen vergleicht zwei Beitragspläne über neun Jahre:

- Plan A investiert \ $ 75.000 sofort mit einer kontinuierlichen Rate von $6.25\%$ .
Plan B trägt die gleiche nominale Summe durch neun gleiche Jahresendzahlungen von 8.333,33 in ein Konto ein, das jährlich T1 verdient.

Plan A wächst für die vollen neun Jahre:

$$
F_A
=75,000e^{0.0625(9)}
\approx131,629.13.
$$

Bei Plan B erhält der letzte Beitrag vor dem Vergleichsdatum keine Zinsen und jeder frühere Beitrag für eine andere Anzahl von Jahren:

$$
F_B
=8,333.33
\frac{(1.0625)^9-1}{0.0625}
\approx96,757.60.
$$

Die nominalen Beiträge sind gleich, aber ihr Timing ist es nicht. Plan A ist viel größer, weil jeder Dollar von Anfang an investiert wird.

---

## 3.6 Mortgage Repayments

### Ein Darlehen ist eine Annuität von der anderen Seite betrachtet

Angenommen, ein Darlehen von $K$ wird von $n$ gleichen Ende der Periode Zahlungen von $a$ zurückgezahlt, mit periodischen Zinssatz $r$ . Der Kreditbetrag entspricht dem Barwert des Zahlungsstroms:

$$
K
=\frac{a}{r}
\left[
1-(1+r)^{-n}
\right].
$$

Lösung für die Zahlung:

$$
a
=\frac{rK}
{1-(1+r)^{-n}}.
$$

Die Rate $r$ muss die Rate ** pro Zahlungsperiode** sein. Lassen Sie $y$ die Kreditlaufzeit in Jahren sein. Für monatliche Zahlungen unter einem nominalen Jahreszins $j$ monatlich zusammengesetzt:

$$
r=\frac{j}{12},
\qquad
n=12y.
$$

**Beispiel 1.** A distributor borrows \$60,000, repaid by six annual payments at $12\%$ :

$$
a
=\frac{0.12(60,000)}
{1-(1.12)^{-6}}
\approx14,593.54.
$$

### Zinsen und Kapital in jeder Zahlung

Jede Zahlung hat zwei Teile. Lassen Sie $I_j$ das Interesse an der Zahlung $j$ sein, und lassen Sie $Q_j$ seinen Hauptanteil sein:

$$
I_j
=rB_{j-1},
$$

$$
Q_j
=a-rB_{j-1},
$$

$$
B_j
=B_{j-1}-Q_j,
$$

wobei $B_{j-1}$ der Saldo vor der Zahlung $j$ ist.

Equivalently:

$$
B_j=B_{j-1}(1+r)-a.
$$

Für das \ $ 60.000 Darlehen:

| Jahr | Eröffnungssaldo | Zinsen | Hauptsaldo | Abschlusssaldo |
| --- | ---: | ---:
| 1 | \$60.000,00 | \$7,200.00 | \$7,393,54 | \$52,606,46
| 2 | \$52,606,46 | \$6,312,77 | \$8,280,77 | \$44,325.69

Wenn das Gleichgewicht fällt, sinkt das Interesse. Da die Gesamtzahlung fest bleibt, steigt der Hauptanteil.

Die Hauptanteile über den gesamten Zeitplan addieren sich zum ursprünglichen Kreditbetrag, vorbehaltlich nur kleiner Rundungsanpassungen. Gesamtzinsen sind

$$
na-K.
$$

Nachdem $m$ gleiche Zahlungen geleistet wurden, bleiben $n-m$ Zahlungen. Der ausstehende Saldo ist daher der Barwert der verbleibenden Annuität:

$$
B_m
=\frac{a}{r}
\left[
1-(1+r)^{-(n-m)}
\right].
$$

Diese Abkürzung vermeidet den Wiederaufbau der gesamten Amortisationstabelle, wenn nur das verbleibende Gleichgewicht benötigt wird.

### Monthly loan Beispiel

**Beispiel 2.** Finance \$24.000 für vier Jahre bei $9\%$ nominal, monatlich zusammengesetzt.

$$
r=\frac{0.09}{12}=0.0075,
\qquad
n=48.
$$

Die monatliche Zahlung ist

$$
a
=\frac{0.0075(24,000)}
{1-(1.0075)^{-48}}
\approx597.24.
$$

Die insgesamt bezahlt ist etwa \$28,667,57, so dass die Gesamtzinsen sind etwa \$4,667,57.

Vergleichen Sie nicht 597,24 $ pro Monat mit einer jährlichen Zahlung, ohne die Zeiteinheit umzurechnen. Zahlungsbeträge aus verschiedenen Zeiträumen beantworten unterschiedliche Fragen.

**Beispiel 3.** Eine 200.000-Dollar-Hypothek hat eine nominale Jahresrate von $6\%$ , monatlich zusammengesetzt und eine 20-jährige Laufzeit.

Die monatliche Rate und Anzahl der Zahlungen sind

$$
r=\frac{0.06}{12}=0.005,
\qquad
n=20(12)=240.
$$

Die monatliche Zahlung ist

$$
a
=\frac{0.005(200,000)}
{1-(1.005)^{-240}}
\approx1,432.86.
$$

Nach 60 Zahlungen verbleiben 180 Zahlungen. Der ausstehende Saldo ist

$$
B_{60}
=\frac{1,432.86}{0.005}
\left[
1-(1.005)^{-180}
\right]
\approx169,799.20.
$$

Der Kreditnehmer hat in den ersten fünf Jahren etwa 85.971,60 $ bezahlt, aber der Saldo ist nur um etwa 30.200,80 $ gefallen. Vorfällige Zahlungen sind zinsintensiv, da sie auf einen großen ausstehenden Saldo erhoben werden.

### Payments beginning immediately

Wenn die erste Zahlung sofort erfolgt, ist der Zeitplan eine Annuität fällig. Der Barwert ist

$$
K
=a+
\frac{a}{r}
\left[
1-(1+r)^{-(n-1)}
\right].
$$

Die sofortige Zahlung wird nicht abgezinst. Die verbleibenden $n-1$ Zahlungen bilden eine gewöhnliche Annuität.

Equivalently:

$$
K
=a(1+r)
\frac{1-(1+r)^{-n}}{r}.
$$

Für einen festen Barwert benötigt ein Sofortstartplan eine niedrigere Zahlung als ein Periodenendeplan, da jede Zahlung früher eintrifft.

### Festzahlung und unbekannte Anzahl von Zeiträumen

Manchmal wird die Zahlung $a$ gegeben und die Anzahl der Perioden ist unbekannt. Die logarithmische Formel gilt, wenn $a>rK$ :

$$
n
\ge
\frac{\ln a-\ln(a-rK)}
{\ln(1+r)}.
$$

Verwenden Sie die kleinste ganze Zahl mindestens so groß wie die rechte Seite. Sofern dieser Ausdruck nicht bereits eine ganze Zahl ist, ist die endgültige Zahlung kleiner als der reguläre Betrag.

Wenn $N$ bereits gleiche Zahlungen von $a$ geleistet wurden und eine letzte Zahlung verbleibt, wachsen Sie das ursprüngliche Darlehen und subtrahieren Sie die gewachsenen Zahlungen:

$$
B_N
=K(1+r)^N
-a\frac{(1+r)^N-1}{r}.
$$

Die letzte Zahlung ist dann $B_N(1+r)$ , die den Restbetrag nach einer weiteren Zinsbelastung abrechnet.

**Beispiel 4.** Ein Darlehen von 35.000 $ bei $13\%$ wird mit festen jährlichen Zahlungen von 10.000 $ zurückgezahlt.

$$
\frac{\ln(10,000)-\ln(10,000-0.13\cdot35,000)}
{\ln(1.13)}
\approx4.9663.
$$

Fünf Zahlungen sind erforderlich. Nach vier Zahlungen von \ $ 10.000, ist der Restbetrag

$$
B_4
=35,000(1.13)^4
-10,000\frac{(1.13)^4-1}{0.13}
\approx8,568.61.
$$

Die fünfte Zahlung ist

$$
8,568.61(1.13)\approx9,682.53.
$$

### Einlagen innerhalb einer Zinsperiode

Wenn Zinsen jährlich gutgeschrieben werden, aber Einlagen im Laufe des Jahres eingehen, wendet das Kapitel einfache Zinsen für den Bruchteil des Jahres an, in dem jede Einzahlung tatsächlich gehalten wird.

Für eine Einzahlung $D$ für den Bruchteil $q$ eines Jahres:

$$
D(1+rq).
$$

**Beispiel 5.** Vier \$250 Einzahlungen werden am Quartalsende gemacht und jährliche Zinsen sind $8\%$ . Am Jahresende ist ihr kombiniertes Äquivalent

$$
250\left(1+0.08\cdot\frac34\right)
+250\left(1+0.08\cdot\frac24\right)
+250\left(1+0.08\cdot\frac14\right)
+250.
$$

Dies vereinfacht die

$$
250(4+1.5\cdot0.08)=1,030.
$$

Die erste einzahlung verdient drei viertel eines jahres zinsen; die letzte verdient keine vor dem jahresende kreditdatum.

Wenn sich das gleiche Quartalsmuster für mehrere Jahre wiederholt, behandeln Sie 1.030 als Jahresendrentenzahlung und verknüpfen Sie sie mit der Formel für den zukünftigen Wert der gewöhnlichen Annuität. Ignorieren Sie nicht die Intra-Jahres-Zinsen und verwenden Sie einfach 1.000 $ als jährliche Einzahlung.

### Comparing complete repayment plans

Bringen Sie jeden Plan zum Barwert. Schließen Sie sofortige Barteile zum vollen Wert ein und diskontieren Sie alle späteren Zahlungen.

**Beispiel 6.** Eine Flotte kostet \ $ 500.000 Bargeld heute oder sieben Zahlungen von \ $ 100.000 ab sofort.

At $10\%$:

$$
PV_B
=100,000+
\frac{100,000}{0.10}
\left[
1-(1.10)^{-6}
\right]
\approx535,526.07.
$$

Bargeld ist billiger.

At $14\%$:

$$
PV_B\approx488,866.75.
$$

Der Ratenzahlungsplan wird billiger. Ein höherer Abzinsungssatz reduziert den Wert der sechs verspäteten Zahlungen, reduziert jedoch nicht den unmittelbaren Preis von 500.000 USD.

---

## 3.7 Interne Rendite

### Cashflow-Zeichen und Kapitalwert

Write cash flows as

$$
a_0,a_1,\ldots,a_n,
$$

wo $a_0$ jetzt auftritt, $a_1$ am Ende des Jahres 1 und so weiter. Ein Investitionsaufwand ist negativ, eine Rendite positiv.

Zum Abzinsungssatz $r$ , ist der Nettobarwert

$$
NPV(r)
=a_0
+\frac{a_1}{1+r}
+\frac{a_2}{(1+r)^2}
+\cdots+
\frac{a_n}{(1+r)^n}.
$$

Ein positiver Kapitalwert bedeutet, dass die abgezinsten Renditen die anfänglichen Ausgaben zu diesem erforderlichen Menge übersteigen. Ein negativer NPV bedeutet, dass sie es nicht tun.

### Definition der IRR

Die **interne Rendite** ist eine Rate $r^*>-1$ , die NPV gleich Null macht:

$$
a_0
+\frac{a_1}{1+r^*}
+\cdots+
\frac{a_n}{(1+r^*)^n}
=0.
$$

Beim IRR entspricht der Barwert der Renditen genau dem Barwert der Kosten.

### One-period project

Investieren Sie jetzt $a>0$ und erhalten Sie $b>0$ in einem Jahr:

$$
-a+\frac{b}{1+r}=0.
$$

Daher

$$
r=\frac{b}{a}-1.
$$

**Beispiel 1.** Eine Bäckerei verbringt \ $ 8.000 auf einem Ofen und erhält \ $ 9.600 nach einem Jahr:

$$
r=\frac{9,600}{8,000}-1=0.20=20\%.
$$

Bei einem $15\%$ Diskontsatz:

$$
NPV
=-8,000+\frac{9,600}{1.15}
\approx347.83>0.
$$

At $25\%$:

$$
NPV
=-8,000+\frac{9,600}{1.25}
=-320<0.
$$

Für diesen konventionellen Cashflow werden Mengen unter dem IRR positiver NPV und Mengen oberhalb davon negativer NPV verwendet.

### Ewige und endliche Rückkehr

Wenn auf einen anfänglichen Aufwand von $K$ für immer eine Pegelzahlung $a$ folgt, ist die Null-NPV-Beziehung

$$
-K+\frac{a}{r}=0.
$$

Somit

$$
r=\frac{a}{K}.
$$

**Beispiel 2.** Eine Lizenz kostet 50.000 $ und zahlt 6.000 $ an jedem Jahresende für immer:

$$
r=\frac{6,000}{50,000}=0.12=12\%.
$$

Wenn das gleiche Projekt bezahlt \ $ 6.000 nur in den Jahren 1 und 2, würde seine IRR Gleichung stattdessen

$$
-50,000
+\frac{6,000}{1+r}
+\frac{6,000}{(1+r)^2}
=0.
$$

Dieses endliche Projekt hat eine IRR von etwa $-58.84\%$ . Diese negative Rate ist mathematisch gültig, weil sie über $-100\%$ bleibt. Zwei kleine Zahlungen können einen Aufwand von 50.000 $ nicht zurückgewinnen, es sei denn, die Vergleichsrate ist stark negativ.

### Zwei-Perioden-Projekt und Substitution

für

$$
a_0+\frac{a_1}{1+r}+\frac{a_2}{(1+r)^2}=0,
$$

Es seien

$$
s=(1+r)^{-1}.
$$

Dann wird die IRR-Beziehung zu einer quadratischen:

$$
a_2s^2+a_1s+a_0=0.
$$

Lösen Sie für eine zulässige $s>0$ , dann erholen

$$
r=\frac1s-1.
$$

**Beispiel 3.** Ein Logistikunternehmen gibt 12.000 $ aus und erhält 7.000 $ an jedem der nächsten zwei Jahresenden:

$$
-12,000+7,000s+7,000s^2=0.
$$

Divide by $1,000$:

$$
7s^2+7s-12=0.
$$

Die positive Lösung ist

$$
s=\frac{-7+\sqrt{385}}{14}\approx0.90153.
$$

Daher

$$
r=\frac{1}{0.90153}-1\approx0.10922=10.92\%.
$$

Melden Sie eine quadratische Wurzel nicht automatisch. Die Substitution erfordert $s=1/(1+r)>0$ , und die endgültige Rate muss $r>-1$ erfüllen.

### Bracketing an IRR

Wenn eine genaue Lösung unbequem ist, berechnen Sie den NPV mit zwei Raten.

If

$$
NPV(r_1)>0,
$$

und

$$
NPV(r_2)<0.
$$

und die konventionellen Cashflow-Bedingungen unten gelten, dann liegt der eindeutige IRR zwischen $r_1$ und $r_2$ .

**Beispiel 4.** Ein Projekt kostet jetzt 45.000 $, hat einen Abfluss von 3.000 $ im Jahr 1, dann gibt es 28.000 $ und 35.000 $ zurück. Der NPV ist positiv bei $8\%$ und negativ bei $12\%$ , so dass eine Null zwischen diesen Raten liegt. Der Cashflow des Jahres 1 ist jedoch negativ, so dass die Standard-Einzigartigkeit des Kapitels Menge nicht gilt. Ein Zeichenwechsel klammert eine Wurzel; es beweist nicht von selbst Einzigartigkeit.

**Beispiel 5.** A project has cash flows

$$
-40,000,\quad22,000,\quad27,600.
$$

Um zu überprüfen, ob $15\%$ der IRR ist, ersetzen Sie ihn in NPV:

$$
NPV(0.15)
=-40,000
+\frac{22,000}{1.15}
+\frac{27,600}{(1.15)^2}.
$$

Die beiden diskontierten Renditen sind

$$
\frac{22,000}{1.15}
\approx19,130.43,
$$

$$
\frac{27,600}{1.3225}
\approx20,869.57.
$$

Ihre Summe ist \ $ 40.000, also $NPV(0.15)=0$ . Eine IRR-Behauptung wird durch Substitution verifiziert, nicht durch den Vergleich der nicht abgezinsten Gesamtsumme allein.

### Einzigartigkeit und Positivität Menge

Die saubere Garantie des Kapitels gilt, wenn

$$
a_0<0
$$

und

$$
a_1,\ldots,a_n>0.
$$

Unter diesem Muster gibt es eine einzigartige IRR $r^*>-1$ . Die NPV-Funktion fällt, wenn $r$ steigt, weil jede positive zukünftige Rendite stärker diskontiert wird.

Der IRR ist genau dann positiv, wenn der nicht abgezinste Gesamtbetrag positiv ist:

$$
a_0+a_1+\cdots+a_n>0.
$$

Ändern spätere Cashflows das Vorzeichen, entfällt die Menge-Garantie. Das Projekt kann immer noch eine IRR haben, aber Existenz und Einzigartigkeit müssen überprüft und nicht angenommen werden.

### Wie sich Änderungen auf IRR auswirken

Mit zukünftigen Renditen festgelegt:

- Verringerung der anfänglichen Ausgaben erhöht IRR;
- Erhöhung einer positiven zukünftigen Rendite erhöht IRR.

Diese Effekte sind nichtlinear. Die Verdoppelung jeder zukünftigen Rendite bei gleichzeitiger Beibehaltung der Ausgaben verdoppelt nicht nur die IRR.

**Beispiel 6.** Ein Café investiert 34.000 $ und erhält 16.000 $ nach einem Jahr und 24.000 $ nach zwei. Die IRR ist etwa $10.78\%$ .

Wenn der Aufwand auf \ $ 30.000 fällt, während die Renditen fixiert bleiben, dann

$$
-30,000+16,000s+24,000s^2=0
$$

hat die gültige Lösung $s=5/6$ . Daher

$$
r=\frac{1}{5/6}-1=0.20=20\%.
$$

Der Aufwand sank um etwa $11.76\%$ , aber der IRR stieg nicht um $11.76\%$ . IRR reagiert nichtlinear, weil der Diskontfaktor bei unterschiedlichen Befugnissen für Cashflows zu unterschiedlichen Zeitpunkten erscheint.

### Comparing projects

Für ein einjähriges Projekt ist der IRR-Vergleich direkt.

Project X:

$$
r_X=\frac{17,250}{15,000}-1=15\%.
$$

Project Y:

$$
r_Y=\frac{24,750}{22,000}-1=12.5\%.
$$

Unter dem IRR-Kriterium des Kapitels wird X bevorzugt, weil es den höheren IRR hat.

Verwechseln Sie einen positiven Kapitalwert zu einem gewählten Marktpreis nicht mit dem IRR des Projekts. NPV fragt, ob das Projekt eine bestimmte erforderliche Rate schlägt. IRR fragt, welche Rate seinen eigenen NPV genau Null macht.

**Beispiel 7.** Eine Genossenschaft für erneuerbare Energien vergleicht zwei Solardesigns.

- Design A kostet 120.000 $ und gibt 54.000 $ im Jahr 1 und 88.000 $ im Jahr 2 zurück.
- Design B kostet 70.000 $ und gibt 81.200 $ im Jahr 1 zurück.

Verwenden Sie für Design A $s=(1+r)^{-1}$ :

$$
88,000s^2+54,000s-120,000=0.
$$

Divide by \$2,000:

$$
44s^2+27s-60=0.
$$

Die zulässige Wurzel ist ungefähr $s=0.90057$ , also

$$
r_A
=\frac{1}{0.90057}-1
\approx11.04\%.
$$

Design B ist ein Ein-Perioden-Projekt:

$$
r_B
=\frac{81,200}{70,000}-1
=16\%.
$$

Das IRR-Kriterium bevorzugt daher Design B. Ein Marktpreis-NPV-Check bei $13\%$ erzählt die gleiche Geschichte:

$$
NPV_A(0.13)
=-120,000
+\frac{54,000}{1.13}
+\frac{88,000}{(1.13)^2}
\approx-3,295.48,
$$

$$
NPV_B(0.13)
=-70,000
+\frac{81,200}{1.13}
\approx1,858.41.
$$

Design A kann die erforderliche $13\%$ nicht verdienen, während Design B sie noch übertrifft. Der Vergleich von Projekten ist stärker, wenn das IRR-Ranking und eine NPV-Prüfung beide richtig interpretiert werden.

---

## Zusammenfassung reference

| Aufgabe | Methode |
| --- | ---
| Diskrete Zukunftswert | $S(t)=S_0(1+r/n)^{nt}$ |
| Effektive Jahresrate | $R=(1+r/n)^n-1$ |
| Kontinuierlicher Zukunftswert | $S(t)=S_0e^{rt}$ |
| Kontinuierliche Abschreibung | $v(t)=v_0e^{-\delta t}$ |
| Jährlicher Barwert | $PV=K(1+r)^{-t}$ |
| Kontinuierlicher Barwert | $PV=Ke^{-rt}$ |
| Endliche geometrische Summe | $s_n=a(k^n-1)/(k-1)$ für $k\ne1$ |
| Unendliche geometrische Summe | $s_\infty=a/(1-k)$ when $|k|<1$ |
| Zukunftswert der ordentlichen Annuität | $F_n=(a/r)[(1+r)^n-1]$ |
| Gewöhnliche Annuität Barwert | $P_n=(a/r)[1-(1+r)^{-n}]$ |
| Annuität fällig | multiplizieren Sie den passenden gewöhnlichen Wert mit $1+r$ |
| Permanenzstufe | $P=a/r$ |
| Wachsende Permanenz | $P=a_1/(r-g)$ wenn $r>g$ |
| Gleiche Kreditzahlung | $a=rK/[1-(1+r)^{-n}]$ |
| Verbleibender Kreditsaldo nach $m$ Zahlungen | $B_m=(a/r)[1-(1+r)^{-(n-m)}]$ |
| Periodenzins | Rate pro Periode $\times$ Eröffnungsbilanz |
| Kapitalwert | $NPV(r)=\sum_{j=0}^{n}a_j/(1+r)^j$ |
| Interne Rendite | lösen $NPV(r)=0$ |

### Direction checks

Mehr Compoundierung bei gleichem positiven Nominalzins erhöht den zukünftigen Wert und EAR.
- Kontinuierliche Compoundierung ist die Obergrenze nur, wenn der nominale Zinssatz festgelegt wird.
- Ein höherer positiver Diskontsatz senkt den Barwert.
- Eine Zahlung früher zu verschieben, erhöht ihren Barwert.
Eine fällige Annuität ist mehr wert als die passende gewöhnliche Annuität.
Eine wachsende Permanenz ist nur dann mehr wert als die übereinstimmende Permanenz, wenn $0\le g<r$ .
- Bei einem amortisierenden Darlehen sinken die Zinsen und die Kapitalrückzahlung steigt im Laufe der Zeit.
- Bei herkömmlichen Investment-Cashflows sinkt der NPV mit steigendem Diskontsatz.

### Working order

1. Zeichnen oder beschreiben Sie die Cashflow-Daten.
2. Umrechnung des Satzes in die Zahlungs- oder Zinseszinsperiode.
3. Entscheiden Sie, ob in der Frage ein Wert zum gegenwärtigen Zeitpunkt oder zu einem zukünftigen Zeitpunkt verlangt wird.
4. Wählen Sie die Formel erst, nachdem das Timing klar ist.
5. Behalten Sie die volle Präzision während der Berechnung und rundes Geld einmal am Ende.
6. Vergleichen Sie Alternativen zum gleichen Zeitpunkt und mit der gleichen Tarifvereinbarung.
7. Überprüfen Sie die Richtung des Ergebnisses, bevor Sie es annehmen.

**Selbstkontrolle.** Was ist der Unterschied zwischen einem nominalen Zinssatz und einem effektiven Zinssatz? Warum ergibt die kontinuierliche Compoundierung den niedrigsten Barwert bei einem gemeinsamen positiven Nominalzinssatz? Welcher Exponent gehört zum fünften Term einer geometrischen Sequenz? Warum beweist $a_n\to0$ nicht, dass eine Serie konvergiert? Warum ist eine Annuität mehr wert als eine gewöhnliche Annuität? Wie ändert sich der Zinsanteil einer Hypothekenzahlung, wenn der Saldo fällt? Welche Cashflow-Zeichen garantieren eine eindeutige IRR? Warum kann ein Mixed-Zeichen-Projekt außerhalb dieses Satzes fallen?
