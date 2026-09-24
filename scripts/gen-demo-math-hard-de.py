#!/usr/bin/env python3
"""
Build src/data/wiso/math-de-demo-hard.json from the EN hard overlay.

Applies long phrase glossary on RAW text (so KaTeX inside idioms still matches),
then word-level cleanup on math-protected prose.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

EN_PATH = Path("/workspace/src/data/demo-math-hard-en.json")
OUT_PATH = Path("/workspace/src/data/wiso/math-de-demo-hard.json")

# Exact pad / structural strings from the EN generator (must match byte-for-byte).
PAD_AND_STRUCT: list[tuple[str, str]] = [
    (
        "Evaluate each statement. Mark it TRUE or FALSE.",
        "Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch.",
    ),
    ("The statement is true.", "Die Aussage ist richtig."),
    ("The statement is false.", "Die Aussage ist falsch."),
    ("So the statement is True.", "Die Aussage ist richtig."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("→ True", "→ Richtig"),
    ("→ False", "→ Falsch"),
    (
        "Recompute the decisive intermediate quantity and place it beside the claimed figure. "
        "Only exact agreement after simplification is allowed; a shifted index, an omitted factor of $2$, "
        "or a reversed inequality is enough to reject the sentence.",
        "Berechne die entscheidende Zwischengröße erneut und stelle sie neben die behauptete Zahl. "
        "Nur exakte Übereinstimmung nach dem Vereinfachen ist erlaubt; ein verschobener Index, ein "
        "vergessener Faktor $2$ oder eine umgekehrte Ungleichung reichen aus, die Aussage abzulehnen.",
    ),
    (
        "Cross-check by a second independent path (expansion versus substitution, or Cramer versus "
        "elimination). Accept the claim only when both paths recover the same constant, set, or interval "
        "named in the statement; otherwise mark it false.",
        "Prüfe mit einem zweiten unabhängigen Weg (Ausmultiplizieren gegen Substitution oder Cramer gegen "
        "Elimination). Akzeptiere die Behauptung nur, wenn beide Wege dieselbe Konstante, Menge oder dasselbe "
        "Intervall wie in der Aussage liefern; andernfalls ist sie falsch.",
    ),
    (
        "Box the accepted value and reread the verbal claim against that box. Equality to a different "
        "constant, a reversed inequality, or an impossible quantifier order forces False; otherwise True.",
        "Markiere den akzeptierten Wert und lies die verbale Behauptung dagegen. Gleichheit zu einer anderen "
        "Konstante, eine umgekehrte Ungleichung oder eine unmögliche Quantorenreihenfolge erzwingen Falsch; sonst Richtig.",
    ),
    (
        "Keep the shared parameters fixed across all five claims; only the asserted conclusion changes. Reuse the intermediate quantities computed here when you grade each statement.",
        "Halte die gemeinsamen Parameter für alle fünf Aussagen fest; nur die behauptete Schlussfolgerung ändert sich. Wiederverwende die hier berechneten Zwischengrößen beim Bewerten jeder Aussage.",
    ),
    (
        "Track every algebraic substitution in order: first isolate the target quantity, then insert the given parameters, then simplify exponents and coefficients before comparing to the claim.",
        "Verfolge jede algebraische Substitution der Reihe nach: Isoliere zuerst die Zielgröße, setze dann die gegebenen Parameter ein und vereinfache Exponenten und Koeffizienten, bevor du mit der Behauptung vergleichst.",
    ),
    (
        "On an exam script, write the intermediate KaTeX lines exactly as above so a marker can verify each step; skipping a factor of $2$, a sign flip, or a period-count is the usual trap.",
        "Schreibe in einer Klausur die Zwischenschritte genau wie oben, damit jede Zeile prüfbar bleibt; typische Fallen sind ein vergessener Faktor $2$, ein Vorzeichenfehler oder eine falsch gezählte Periode.",
    ),
    (
        "Finally re-read the verbal claim against the boxed numeric or symbolic result: agreement means True, any strict mismatch means False.",
        "Lies die verbale Behauptung abschließend gegen das numerische oder symbolische Ergebnis: Übereinstimmung bedeutet Richtig, jede echte Abweichung bedeutet Falsch.",
    ),
]

# Domain phrases (longest first applied). Avoid bare "the claim" — it mangles "claimed".
GLOSSARY: list[tuple[str, str]] = [
    ("which matches the claim exactly.", "was genau mit der Behauptung übereinstimmt."),
    ("Compute the intersection elementwise from the rosters:", "Berechne den Durchschnitt elementweise aus den Aufzählungen:"),
    ("An integer $x$ lies in", "Eine ganze Zahl $x$ liegt in"),
    ("Union collects every element from either roster:", "Die Vereinigung sammelt jedes Element aus einer der beiden Aufzählungen:"),
    ("The claim asserts", "Die Behauptung lautet"),
    ("These rosters differ", "Diese Aufzählungen unterscheiden sich"),
    ("so the equality fails.", "daher gilt die Gleichheit nicht."),
    ("For the universal–existential order, choose", "Für die All–Existenz-Reihenfolge wähle"),
    ("For the swapped quantifiers, a single", "Bei vertauschten Quantoren müsste ein einzelnes"),
    ("which is impossible once", "was unmöglich ist, sobald"),
    ("Hence the biconditional claim is correct.", "Damit ist die bikonditionale Behauptung korrekt."),
    ("The power set of an", "Die Potenzmenge einer"),
    ("Solve the system", "Löse das System"),
    ("Use elimination, substitution, or Cramer.", "Nutze Elimination, Substitution oder Cramer."),
    ("so a unique solution exists.", "daher existiert eine eindeutige Lösung."),
    ("Inserting into the second and simplifying yields", "Einsetzen in die zweite Gleichung und Vereinfachen liefert"),
    ("Cramer's rule gives", "Die Cramersche Regel liefert"),
    ("The claim states", "Die Behauptung nennt"),
    ("off by $1$.", "abweichend um $1$."),
    ("Second Cramer coordinate:", "Zweite Cramer-Koordinate:"),
    ("Agreements with the elimination solution", "Übereinstimmung mit der Eliminationslösung"),
    ("Replacing the right-hand side by", "Ersetzt man die rechte Seite durch"),
    ("keeps the same solution", "bleibt dieselbe Lösung"),
    ("If the first RHS becomes", "Wenn die erste rechte Seite zu"),
    ("still satisfies", "noch erfüllt"),
    ("The solution must move; uniqueness for the new nonsingular system forbids reusing",
     "Die Lösung muss wandern; die Eindeutigkeit des neuen regulären Systems verbietet die Wiederverwendung von"),
    ("The homogeneous system with the same coefficient matrix has only the trivial solution",
     "Das homogene System mit derselben Koeffizientenmatrix hat nur die triviale Lösung"),
    ("the only solution is the zero vector.", "ist die einzige Lösung der Nullvektor."),
    ("Equivalently, the two homogenous lines through the origin are non-parallel and meet only at",
     "Gleichwertig: die beiden homogenen Geraden durch den Ursprung sind nicht parallel und treffen sich nur in"),
    ("into the first equation:", "in die erste Gleichung ein:"),
    ("so the claim fails.", "daher scheitert die Behauptung."),
    ("True solution is", "Die wahre Lösung ist"),
    ("the system is singular and has infinitely many solutions.",
     "ist das System singulär und besitzt unendlich viele Lösungen."),
    ("Singularity requires", "Singularität verlangt"),
    ("so the system is nonsingular with exactly one solution.",
     "daher ist das System regulär mit genau einer Lösung."),
    ("Infinite solutions would need both", "Unendlich viele Lösungen bräuchten beides:"),
    ("and consistent augmented rank.", "und konsistenten Rang der erweiterten Matrix."),
    ("System matrix determinant", "Determinante der Systemmatrix"),
    ("Direct evaluation:", "Direkte Auswertung:"),
    ("Homogeneity of degree", "Homogenität vom Grad"),
    ("is increasing on", "ist wachsend auf"),
    ("because the exponent", "weil der Exponent"),
    ("is negative.", "negativ ist."),
    ("**decreasing**", "**fallend**"),
    ("decays toward $0$.", "fällt gegen $0$."),
    ("Negative exponent does not create increase for positive $c$.",
     "Ein negativer Exponent erzeugt bei positivem $c$ kein Wachstum."),
    ("The constant $c$ cancels for $c\\neq 0$.", "Die Konstante $c$ kürzt sich für $c\\neq 0$."),
    ("is concave down on", "ist konkav nach unten auf"),
    ("for these parameters.", "für diese Parameter."),
    ("Second derivative:", "Zweite Ableitung:"),
    ("so $f$ is concave **up**, not concave down.",
     "also ist $f$ konkav **nach oben**, nicht nach unten."),
    ("True value", "Der wahre Wert"),
    ("adds an extra", "addiert zusätzlich"),
    ("The constants cancel:", "Die Konstanten kürzen sich:"),
    ("The claim leaves a spurious factor", "Die Behauptung lässt einen überzähligen Faktor"),
    ("Define the finite sets", "Definiere die endlichen Mengen"),
    ("and the universe", "sowie das Universum"),
    ("Also let", "Sei außerdem"),
    ("be any set with", "eine beliebige Menge mit"),
    ("Fix integers", "Seien die ganzen Zahlen"),
    ("Nested membership, intersections, and a finite power set",
     "Verschachtelte Zugehörigkeit, Durchschnitte und eine endliche Potenzmenge"),
    ("Three-set algebra with a quantified partner on a finite domain",
     "Drei-Mengen-Algebra mit quantifiziertem Partner auf endlicher Trägermenge"),
    ("Symmetric difference, complements, and implication traps",
     "Symmetrische Differenz, Komplemente und Implikationsfallen"),
    ("Survey counts, De Morgan, and a forced committee size",
     "Umfragezahlen, De Morgan und eine erzwungene Ausschussgröße"),
    ("Roster identities mixed with tautology checks",
     "Aufzählungsidentitäten gemischt mit Tautologie-Checks"),
    ("Two-variable linear system with", "Lineares $2\\times 2$-System mit"),
    ("Power-function scaling with", "Potenzfunktion-Skalierung mit"),
    ("Vertex form, expansion, and line-parabola meetings",
     "Scheitelpunktform, Ausmultiplizieren und Geraden-Parabel-Schnitte"),
    ("Compound growth and annuity PV with", "Zinseszins und Rentenbarwert mit"),
    ("A principal", "Ein Kapital"),
    ("is invested at nominal annual rate", "wird zum nominalen Jahreszinssatz"),
    ("times per year for", "Perioden pro Jahr über"),
    ("Separately, an ordinary annuity pays", "Separat zahlt eine nachschüssige Rente"),
    ("at the end of each month for", "am Ende jedes Monats über"),
    ("Cross-check:", "Gegenprobe:"),
    ("Critical points:", "Kritische Stellen:"),
    ("numerator zero", "Zählernullstelle"),
    ("denominator zero", "Nennernullstelle"),
    ("Sign chart on the", "Vorzeichenwechsel auf den"),
    ("Sign chart auf der", "Vorzeichenwechsel auf den"),  # if partially translated
    ("three intervals determined by", "drei Intervallen, bestimmt durch"),
    ("shows the quotient is nonpositive precisely on the",
     "zeigt, dass der Quotient genau auf dem"),
    ("closed–open segment between them described in the claim.",
     "halboffenen Segment zwischen ihnen liegt, das in der Behauptung beschrieben ist."),
    ("A quick midpoint test confirms.", "Ein schneller Mittelpunkttest bestätigt das."),
    ("only if", "genau dann, wenn"),
    ("Scanning yields", "Das Durchmustern liefert"),
    ("holds for every", "gilt für jedes"),
    ("for each", "für jedes"),
    ("independent of", "unabhängig von"),
    ("Verification:", "Probe:"),
    ("Substitution:", "Substitution:"),
    ("Determinant", "Die Determinante"),
    ("Cramer:", "Cramer:"),
    ("Plug", "Setze"),
    ("Define", "Definiere"),
    ("parameters", "Parameter"),
    ("solution", "Lösung"),
    ("Claimed", "Behauptet wird"),
    ("because", "weil"),
    ("unless", "außer wenn"),
    ("Here", "Hier"),
    ("while", "während"),
    ("With", "Mit"),
    ("one has", "gilt"),
    ("At", "Bei"),
    ("not", "nicht"),
    ("then", "dann"),
]

WORD_MAP = [
    (r"\bTrue\b", "Richtig"),
    (r"\bFalse\b", "Falsch"),
    (r"\btrue\b", "richtig"),
    (r"\bfalse\b", "falsch"),
    (r"\band\b", "und"),
    (r"\bor\b", "oder"),
    (r"\bwith\b", "mit"),
    (r"\bfrom\b", "aus"),
    (r"\binto\b", "in"),
    (r"\bfor all\b", "für alle"),
    (r"\bLet\b", "Sei"),
    (r"\blet\b", "sei"),
    (r"\bHence\b", "Daher"),
    (r"\bTherefore\b", "Daher"),
    (r"\bThus\b", "Somit"),
    (r"\bSince\b", "Da"),
    (r"\bBecause\b", "Weil"),
    (r"\bHowever\b", "Allerdings"),
    (r"\bFinally\b", "Schließlich"),
    (r"\bFirst\b", "Zuerst"),
    (r"\bexactly\b", "genau"),
    (r"\bunique\b", "eindeutig"),
    (r"\bmust\b", "muss"),
    (r"\bholds\b", "gilt"),
    (r"\bfails\b", "scheitert"),
    (r"\byears\b", "Jahre"),
    (r"\byear\b", "Jahr"),
    (r"\bmonths\b", "Monate"),
    (r"\bmonth\b", "Monat"),
    (r"\bstrictly\b", "strikt"),
    (r"\bgreater than\b", "größer als"),
    (r"\bless than\b", "kleiner als"),
    (r"\bat least\b", "mindestens"),
    (r"\bat most\b", "höchstens"),
    (r"\binfinitely many\b", "unendlich viele"),
    (r"\bdoes not\b", "nicht"),
    (r"\bcannot\b", "kann nicht"),
    (r"\bthe claim\b", "die Behauptung"),
    (r"\bthe statement\b", "die Aussage"),
    (r"\bthe solution\b", "die Lösung"),
    (r"\bthe system\b", "das System"),
    (r"\bthe function\b", "die Funktion"),
    (r"\bthe set\b", "die Menge"),
    (r"\bthe equation\b", "die Gleichung"),
    (r"\bthe inequality\b", "die Ungleichung"),
    (r"\bthe determinant\b", "die Determinante"),
    (r"\bthe interval\b", "das Intervall"),
    (r"\bthe vertex\b", "der Scheitelpunkt"),
    (r"\bthe line\b", "die Gerade"),
    (r"\bthe same\b", "dieselbe"),
    (r"\bthe only\b", "die einzige"),
    (r"\ba unique\b", "eine eindeutige"),
    (r"\botherwise\b", "andernfalls"),
]

MATH_PATTERN = re.compile(
    r"(\$\$.*?\$\$|\$[^$]+\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))",
    re.DOTALL,
)


def protect_math(text: str) -> tuple[str, list[str]]:
    slots: list[str] = []

    def repl(m: re.Match[str]) -> str:
        slots.append(m.group(0))
        return f"⟦M{len(slots)-1}⟧"

    return MATH_PATTERN.sub(repl, text), slots


def restore_math(text: str, slots: list[str]) -> str:
    for i, s in enumerate(slots):
        text = text.replace(f"⟦M{i}⟧", s)
    return text


def apply_phrases(text: str, pairs: list[tuple[str, str]]) -> str:
    for en, de in sorted(pairs, key=lambda p: len(p[0]), reverse=True):
        text = text.replace(en, de)
    return text


def translate_prose(text: str) -> str:
    # 1) Exact pads/structs on RAW text (KaTeX inside still matches).
    text = apply_phrases(text, PAD_AND_STRUCT)
    text = apply_phrases(text, GLOSSARY)
    # 2) Word map with math protected.
    protected, slots = protect_math(text)
    for pat, rep in WORD_MAP:
        protected = re.sub(pat, rep, protected)
    protected = protected.replace("→ True", "→ Richtig").replace("→ False", "→ Falsch")
    return restore_math(protected, slots)


def convert_case(row: dict) -> dict:
    expls = []
    for i, expl in enumerate(row["tactical_explanations"]):
        truth = row["answer_key"][i]
        letter = "ABCDE"[i]
        body = translate_prose(expl)
        tag = "Richtig" if truth else "Falsch"
        end = "Die Aussage ist richtig." if truth else "Die Aussage ist falsch."
        lines = body.split("\n")
        if lines and lines[0].startswith(f"**{letter}."):
            lines = lines[1:]
            if lines and lines[0].strip() == "":
                lines = lines[1:]
        body_core = "\n".join(lines).strip()
        for closer in (
            "Die Aussage ist richtig.",
            "Die Aussage ist falsch.",
            "The statement is true.",
            "The statement is false.",
            "So the statement is True.",
            "So the statement is False.",
        ):
            if body_core.endswith(closer):
                body_core = body_core[: -len(closer)].rstrip()
        expls.append(f"**{letter}.** → {tag}\n\n{body_core}\n\n{end}")

    ctx = translate_prose(row["context"])
    for marker in ("Bewerte jede Aussage", "Evaluate each statement", "Decide each"):
        j = ctx.find(marker)
        if j != -1:
            ctx = ctx[:j].rstrip()
    ctx = ctx.rstrip(" .") + ". Bewerte jede Aussage. Markiere sie mit Richtig oder Falsch."

    return {
        "title": translate_prose(row["title"]),
        "context": ctx,
        "statements": [translate_prose(s) for s in row["statements"]],
        "tactical_explanations": expls,
        "solution_overview": translate_prose(row["solution_overview"]),
    }


def main() -> None:
    en = json.loads(EN_PATH.read_text(encoding="utf-8"))
    out = {cid: convert_case(row) for cid, row in en.items()}
    for cid, row in en.items():
        for i, expl in enumerate(out[cid]["tactical_explanations"]):
            want = "Richtig" if row["answer_key"][i] else "Falsch"
            assert f"→ {want}" in expl.split("\n", 1)[0], (cid, i, expl[:80])
            assert len(expl) >= 400, (cid, i, len(expl))
            assert "Recompute the decisive" not in expl, cid
            assert "The statement is true" not in expl and "The statement is false" not in expl, cid
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUT_PATH} keys={len(out)}")
    sample = out["MATH 1.01"]["tactical_explanations"][0]
    print(sample[:500])
    # residual English heuristic
    eng = re.compile(r"\b(Recompute|Cross-check|which matches|Compute the|the claim|statement is true)\b")
    bad = 0
    for cid, row in out.items():
        blob = "\n".join(
            [row["title"], row["context"], *row["statements"], *row["tactical_explanations"], row["solution_overview"]]
        )
        if eng.search(blob):
            bad += 1
    print("cases with strong EN leftovers", bad)


if __name__ == "__main__":
    main()
