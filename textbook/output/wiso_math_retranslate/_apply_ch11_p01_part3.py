# --- MATH 11.19 (overview_short True) ---
PATCH["MATH 11.19"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Schreibe den Verarbeitungsindex um, indem du die Wurzel im Nenner in eine negative Potenz verwandelst:

$$
M(x) = \dfrac{x^{2}+1}{\sqrt{x+3}}
$$

$$
M(x) = (x^{2}+1)(x+3)^{-\frac{1}{2}}
$$

genau die in der Behauptung genannte Produktform. Diese Umschreibung bereitet die Produktregel sauber vor.

$$
M(x) = (x^{2}+1)\cdot (x+3)^{-\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Wende die Produktregel auf $M(x)=(x^{2}+1)(x+3)^{-\frac{1}{2}}$ an und fasse über einen Nenner zusammen. Die Zählerrechnung

$$
2x(x+3)-\tfrac{1}{2}(x^{2}+1) = \tfrac{1}{2}(3x^{2}+12x-1)
$$

liefert

$$
M'(x) = \dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}
$$

das passt zur behaupteten Formel.

$$
M(x) = (x^{2}+1)(x+3)^{-\frac{1}{2}}
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $x=1$ ein; beachte $x+3=4$ und $4^{\frac{3}{2}}=8$:

$$
M'(1) = \dfrac{3+12-1}{2\cdot 8}
$$

$$
M'(1) = \dfrac{14}{16}
$$

$$
M'(1) = \dfrac{7}{8}
$$

Zähler $14$ und Nenner $16$ kürzen sich durch $2$. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Die Auswertung bei $x=1$ hat bereits

$$
M'(1) = \dfrac{7}{8}
$$

geliefert, was nicht gleich $\dfrac{13}{8}$ ist. Eine Falle ist, den Zähler als $3+12+1=16$ oder $12-1=11$ falsch zu berechnen. Der Wert in der Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
M'(1) = \dfrac{13}{8}
$$

$$
x = 1
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Falsch

Die Ableitungsformel

$$
M'(x) = \dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}
$$

hängt noch in Zähler und Nenner von $x$ ab. Sie ist daher keine konstante Funktion. Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Schreibe den Verarbeitungsindex als Potenzprodukt um:

$$M(x)=\dfrac{x^{2}+1}{\sqrt{x+3}}=(x^{2}+1)(x+3)^{-\frac{1}{2}}$$

Die Produktregel, über einen Nenner gebracht, liefert

$$M'(x)=\dfrac{3x^{2}+12x-1}{2(x+3)^{\frac{3}{2}}}$$

Bei $x=1$ wertet das zu

$$M'(1)=\dfrac{14}{2\cdot 8}=\dfrac{7}{8}$$

aus, nicht $\dfrac{13}{8}$. Die Ableitung hängt noch in Zähler und Nenner von $x$ ab, sie ist also keine Konstante.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.20 ---
PATCH["MATH 11.20"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Der Leistungsindex ist das Produkt $F(t)=(t^{2}+1)\ln(t+1)$. Wende die Produktregel an: differenziere die Quadratfunktion und den Logarithmus der Reihe nach,

Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du zusammenfasst.

$$
F(t) = (t^{2}+1) \cdot \ln(t+1)
$$

$$
u(t) = t^{2} + 1
$$

$$
v(t) = \ln{(t + 1 )}
$$

$$
u'(t) = 2 t
$$

$$
v'(t) = \frac{1}{t + 1}
$$

$$
F'(t) = (2 t)\cdot(\ln{(t + 1 )}) + (t^{2} + 1)\cdot(\frac{1}{t + 1})
$$

Erst nach dieser Produktregel-Entwicklung vereinfachen wir zur behaupteten Form.

$$
F'(t) = 2t\cdot\ln(t+1)+\dfrac{t^{2}+1}{t+1}
$$

das passt zur behaupteten Formel. Beide Summanden sind nötig.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $t=1$ in die erste Ableitung ein:

$$
F'(1) = 2\cdot 1\cdot\ln 2+\dfrac{1+1}{2}
$$

$$
F'(1) = 2\ln 2+1
$$

Der zweite Summand vereinfacht sich an dieser Stelle zu $1$, aber das ist speziell für $t=1$, keine allgemeine Regel.

$$
t = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere $F'$ erneut: die Produktregel an $2t\ln(t+1)$ und die Quotientenregel an $\dfrac{t^{2}+1}{t+1}$ ordnen sich um zu

$$
F''(t) = 2\ln(t+1)+\dfrac{4t}{t+1}-\dfrac{t^{2}+1}{(t+1)^{2}}
$$

das passt zur behaupteten zweiten Ableitung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Setze $t=1$ in die zweite Ableitung ein:

$$
F''(1) = 2\ln 2+\dfrac{4}{2}-\dfrac{2}{4}
$$

$$
F''(1) = 2\ln 2+2-\dfrac{1}{2}
$$

$$
F''(1) = 2\ln 2+\dfrac{3}{2}
$$

Achte auf die Arithmetik $2-\tfrac{1}{2}=\tfrac{3}{2}$. Der berechnete Wert passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Die echte Produktregel-Ableitung ist

$$
F'(t) = 2t\cdot\ln(t+1)+\dfrac{t^{2}+1}{t+1}
$$

Den Logarithmus-Term wegzulassen erzeugt $2t+\dfrac{t^{2}+1}{t+1}$, dem der Summand $2t\ln(t+1)$ fehlt. Dieser Shortcut ist falsch.

$$
F'(t) = 2t+\dfrac{t^{2}+1}{t+1}
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
}

# --- MATH 11.21 (overview_short True) ---
PATCH["MATH 11.21"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Differenziere den kubischen Gewinnplan $\pi(q)=-q^{3}+12q^{2}-21q$ termweise:

$$
\pi'(q) = -3q^{2}+24q-21
$$

das passt zur behaupteten ersten Ableitung. Achte auf die Vorzeichen: der Leitterm liefert $-3q^{2}$, nicht $+3q^{2}$.

$$
\pi(q) = -q^{3}+12q^{2}-21q
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $q=1$ in die erste Ableitung ein:

$$
\pi'(1) = -3+24-21
$$

$$
-3 + 24 = 21
$$

$$
21 - 21 = 0
$$

$$
\pi'(1) = 0
$$

also verschwindet die Ableitung an dieser Menge. Die drei Terme heben sich genau auf: $-3+24=21$, dann $21-21=0$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Differenziere das erste Ableitungspolynom noch einmal:

$$
\pi''(q) = -6q+24
$$

das passt zur behaupteten zweiten Ableitung. Sie verfolgt, wie sich der Grenzgewinn selbst mit dem Output ändert. Vergleich mit der Behauptung:

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Setze $q=3$ in die zweite Ableitung ein:

$$
\pi''(3) = -6\cdot 3+24
$$

$$
\pi''(3) = -18+24
$$

$$
-18 + 24 = 6
$$

$$
\pi''(3) = 6
$$

$$
\pi''(3) = 6\neq 0
$$

Die zweite Ableitung verschwindet bei $q=4$, nicht bei $q=3$. Die Auswertung in der Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Falsch

Die Tangentensteigung bei $q=1$ ist genau der erste Ableitungswert

$$
\pi'(1) = 0
$$

also null, nicht streng positiv. Eine horizontale Tangente ist keine streng steigende.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
q = 1
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Tagesgewinn folgt dem kubischen Plan

$$\pi(q)=-q^{3}+12q^{2}-21q$$

Ein- und zweifaches Differenzieren liefert die ersten beiden Ableitungen

$$\pi'(q)=-3q^{2}+24q-21\qquad \pi''(q)=-6q+24$$

An den genannten Stellen gelten die konkreten Werte

$$\pi'(1)=0\qquad \pi''(3)=6\neq 0$$

Insbesondere ist die Tangentensteigung bei $q=1$ genau null, diese Steigung ist also nicht streng positiv. Die Nullstelle der zweiten Ableitung würde $-6q+24=0$ lösen, also $q=4$, nicht $q=3$.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.22 (overview_short True) ---
PATCH["MATH 11.22"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Die Versandkosten sind der lineare Plan $C(q)=45+9q$. Ihre Ableitung ist die konstante Steigung

$$
C'(q) = 9
$$

genau die behaupteten konstanten Grenzkosten. Die Fixkosten $45$ verschwinden unter dem Differenzieren.

$$
C(q) = 45+9q
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Weil die Grenzkosten konstant $9$ sind, liefert jede besondere Menge (einschließlich $q=20$) denselben Wert

$$
C'(20) = 9
$$

An $q=20$ ist für eine konstante Ableitung nichts Besonderes.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Falsch

Stückkosten sind der separate Quotient

$$
\dfrac{C(q)}{q} = \dfrac{45}{q}+9
$$

der den konstanten Grenzkosten $9$ nur im Grenzfall $q\to\infty$ gleicht, nicht für jedes endliche $q>0$. Der Fixkostenbeitrag $\dfrac{45}{q}$ hält sie auseinander. Die Identifikation in der Behauptung ist falsch.

Die Aussage ist falsch."""
        ),
        T(
            r"""**D.** → Richtig

Eine lineare Funktion ist bereits ihre eigene Tangente. Mit Steigung $9$ und Achsenabschnitt $45$ ist die Tangente bei $q=10$ (und an jedem anderen $q$) einfach

$$
y = 45+9q
$$

das passt zur Behauptung. Die Punkt-Steigungs-Form mit $C(10)=135$ liefert dieselbe Gerade.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Richtig

Differenzieren der konstanten Grenzkosten noch einmal liefert

$$
C''(q) = 0
$$

für jedes $q$. Ein linearer Kostenplan hat überall Krümmung null.

Die Aussage ist wahr."""
        ),
    ],
    "solution_overview": T(
        r"""Die Versandkosten folgen dem linearen Plan

$$C(q)=45+9q$$

Ihre Ableitungen sind die Konstanten

$$C'(q)=9\qquad C''(q)=0$$

also sind die Grenzkosten an jeder Menge $9$, einschließlich $q=20$. Stückkosten sind der separate Quotient

$$\dfrac{C(q)}{q}=\dfrac{45}{q}+9$$

der den Grenzkosten nur im Grenzfall $q\to\infty$ gleicht, nicht für jedes endliche $q>0$. Weil $C$ bereits linear mit Steigung $9$ ist, ist die Tangente an jedem Punkt (insbesondere bei $q=10$) die Gerade $y=45+9q$ selbst.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.23 (overview_short True) ---
PATCH["MATH 11.23"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Wende die Potenzregel auf $Q(L)=4L^{\frac{5}{2}}$ an: multipliziere mit $\tfrac{5}{2}$ und senke den Exponenten:

$$
Q'(L) = 4\cdot\dfrac{5}{2}L^{\frac{3}{2}}
$$

$$
Q'(L) = 10L^{\frac{3}{2}}
$$

das passt zum behaupteten Grenzprodukt. Lasse den Exponenten nicht bei $\tfrac{5}{2}$.

$$
Q(L) = 4L^{\frac{5}{2}}
$$

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Setze $L=1$ in die Grenzprodukt-Regel ein:

$$
Q'(1) = 10\cdot 1^{\frac{3}{2}}
$$

$$
Q'(1) = 10
$$

Jede positive Potenz von $1$ bleibt $1$, daher ist die Auswertung unmittelbar.

$$
L = 1
$$

das passt zur Behauptung.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $L=4$ ein und nutze $4^{\frac{3}{2}}=(\sqrt{4})^{3}=2^{3}=8$:

$$
Q'(4) = 10\cdot 8
$$

$$
10\times 8 = 80
$$

$$
Q'(4) = 80
$$

Eine Falle wäre $4^{\frac{5}{2}}=32$ (das originale $Q$) statt $4^{\frac{3}{2}}=8$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Richtig

Differenziere das Grenzprodukt noch einmal:

$$
Q''(L) = 10\cdot\dfrac{3}{2}L^{\frac{1}{2}}
$$

$$
Q''(L) = 15L^{\frac{1}{2}}
$$

das passt zur behaupteten zweiten Ableitung. Der positive Koeffizient zeigt: das Grenzprodukt steigt selbst noch.

Die Aussage ist wahr."""
        ),
        T(
            r"""**E.** → Falsch

Weil der Exponent $\dfrac{3}{2}$ positiv ist,

$$
Q'(L) = 10L^{\frac{3}{2}}
$$

steigt mit $L$. Der Vergleich $Q'(1)=10$ mit $Q'(4)=80$ bestätigt den Anstieg. Die Behauptung, es falle, ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

Die Aussage ist falsch."""
        ),
    ],
    "solution_overview": T(
        r"""Der Output folgt der Fünf-Halbe-Produktionsregel

$$Q(L)=4L^{\frac{5}{2}}\qquad(L>0)$$

Zwei Anwendungen der Potenzregel liefern

$$Q'(L)=10L^{\frac{3}{2}}\qquad Q''(L)=15L^{\frac{1}{2}}$$

Die Auswertung des Grenzprodukts ergibt

$$Q'(1)=10\qquad Q'(4)=10\cdot 8=80$$

Weil der Exponent $\dfrac{3}{2}$ positiv ist, steigt $Q'(L)$ mit $L$ statt zu fallen: hier wachsendes (nicht abnehmendes) Grenzprodukt bei der gegebenen Potenz.

Nutze diesen Ableitungsaufbau für jeden Buchstaben: zuerst vereinfachen, an genannten Stellen auswerten, dann jede Behauptung annehmen oder verwerfen."""
    ),
}

# --- MATH 11.24 ---
PATCH["MATH 11.24"] = {
    "tactical_explanations": [
        T(
            r"""**A.** → Richtig

Erlös ist Preis mal verkaufte Tickets. Expandiere mit dem linearen Tarif:

$$
R(q) = q\cdot\Bigl(60-\dfrac{1}{2}q\Bigr)
$$

$$
R(q) = 60q-\dfrac{1}{2}q^{2}
$$

das passt zur behaupteten Erlösfunktion. Behalte den Koeffizienten $\tfrac{1}{2}$ bei $q^{2}$, nicht $1$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**B.** → Richtig

Differenziere die Erlös-Quadratfunktion termweise:

$$
R'(q) = 60-q
$$

das passt zum behaupteten Grenzerlös. Die Ableitung von $-\tfrac{1}{2}q^{2}$ ist $-q$, nicht $-\tfrac{1}{2}q$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**C.** → Richtig

Setze $q=20$ in den Grenzerlös ein:

$$
R'(20) = 60-20
$$

$$
60 - 20 = 40
$$

$$
R'(20) = 40 = 40
$$

$$
R'(20) = 40
$$

Der berechnete Wert passt zur Behauptung. Verwechsle dies nicht mit $p(20)=50$.

Die Aussage ist wahr."""
        ),
        T(
            r"""**D.** → Falsch

Grenzerlös ist $R'(q)=60-q$, während der Tarif

$$
p(q) = 60-\dfrac{1}{2}q
$$

ist. Sie unterscheiden sich um den Faktor bei $q$: $R'$ fällt doppelt so steil wie $p$. Sie gleichzusetzen vergisst, dass der Erlös das Produkt $q\,p(q)$ ist. Die Behauptung ist falsch.

Umformulieren der Behauptung kann einen algebraischen Widerspruch nicht reparieren.

$$
R'(q) = p(q)
$$

das passt nicht zur Behauptung.

Die Aussage ist falsch."""
        ),
        T(
            r"""**E.** → Richtig

Zuerst Höhe und Steigung bei $q=20$ auswerten:

$$
R(20) = 60\cdot 20-\dfrac{1}{2}\cdot 400 = 1000
$$

$$
R'(20) = 40
$$

Die Punkt-Steigungs-Form liefert dann die Tangente

$$
y = 1000+40(q-20)
$$

genau wie behauptet.

Die Aussage ist wahr."""
        ),
    ],
}


def extract_katex_tokens(text: str) -> list[str]:
    """Extract $...$ and $$...$$ segments in order (non-greedy)."""
    tokens = []
    i = 0
    while i < len(text):
        if text.startswith("$$", i):
            j = text.find("$$", i + 2)
            if j < 0:
                break
            tokens.append(text[i : j + 2])
            i = j + 2
        elif text[i] == "$":
            j = text.find("$", i + 1)
            if j < 0:
                break
            tokens.append(text[i : j + 1])
            i = j + 1
        else:
            i += 1
    return tokens


def katex_ok(en: str, de: str) -> bool:
    return extract_katex_tokens(en) == extract_katex_tokens(de)


def main() -> None:
    pack = json.loads(SRC_PACK.read_text(encoding="utf-8"))
    live = json.loads(LIVE.read_text(encoding="utf-8"))
    done_rows = []
    errors: list[str] = []
    patched = 0

    for case in pack:
        cid = case["case_id"]
        if cid not in PATCH:
            errors.append(f"missing PATCH for {cid}")
            continue
        row = PATCH[cid]
        expl = row["tactical_explanations"]
        key = case["answer_key"]
        en_expl = case["tactical_explanations_en"]

        if len(expl) != 5:
            errors.append(f"{cid}: need 5 explanations")
            continue

        for i, e in enumerate(expl):
            if "—" in e:
                errors.append(f"{cid} {chr(65+i)}: em dash")
            m = CLOSER.search(e.strip())
            if not m:
                errors.append(f"{cid} {chr(65+i)}: missing closer")
            else:
                want = "wahr" if key[i] else "falsch"
                if m.group(1).lower() != want:
                    errors.append(f"{cid} {chr(65+i)}: closer/key mismatch")
            # English leftovers (rough)
            for bad in ("So the statement", "True", "False", "which matches the claim", "Rephrasing"):
                if bad in e and bad not in ("True", "False"):
                    # True/False only bad outside Richtig/Falsch headers - already DE
                    pass
            if re.search(r"\b(So the statement|which matches the claim|Rephrasing the claim)\b", e):
                errors.append(f"{cid} {chr(65+i)}: English leftover")
            if not katex_ok(en_expl[i], e):
                en_tok = extract_katex_tokens(en_expl[i])
                de_tok = extract_katex_tokens(e)
                # report first mismatch
                for a, b in zip(en_tok, de_tok):
                    if a != b:
                        errors.append(f"{cid} {chr(65+i)}: KaTeX mismatch: EN={a[:60]!r} DE={b[:60]!r}")
                        break
                else:
                    if len(en_tok) != len(de_tok):
                        errors.append(
                            f"{cid} {chr(65+i)}: KaTeX count EN={len(en_tok)} DE={len(de_tok)}"
                        )

        if cid not in live:
            errors.append(f"{cid}: not in live file")
            continue

        live[cid]["tactical_explanations"] = [e.rstrip("\n") for e in expl]
        out_row = {
            "case_id": cid,
            "answer_key": key,
            "tactical_explanations": [e.rstrip("\n") for e in expl],
        }

        if case.get("solution_overview_short"):
            ov = row.get("solution_overview")
            if not ov:
                errors.append(f"{cid}: missing solution_overview")
            else:
                if "—" in ov:
                    errors.append(f"{cid}: overview em dash")
                live[cid]["solution_overview"] = ov.rstrip("\n")
                out_row["solution_overview"] = ov.rstrip("\n")
                en_ov = case.get("solution_overview_en") or ""
                if en_ov and not katex_ok(en_ov, ov):
                    errors.append(f"{cid}: overview KaTeX mismatch")

        done_rows.append(out_row)
        patched += 1

    if errors:
        print("ISSUES:")
        for e in errors[:80]:
            print(" ", e)
        if len(errors) > 80:
            print(f"  ... {len(errors)-80} more")
        raise SystemExit(1)

    DONE_PACK.parent.mkdir(parents=True, exist_ok=True)
    DONE_PACK.write_text(json.dumps(done_rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    LIVE.write_text(json.dumps(live, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"patched {patched} case_ids in {LIVE.name}")
    print(f"wrote {DONE_PACK}")


if __name__ == "__main__":
    main()
