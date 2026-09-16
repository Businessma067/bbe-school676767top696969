#!/usr/bin/env python3
"""
Translate BBE math banks into WiSo German overlay JSON.

- Protects KaTeX ($...$ / $$...$$)
- Applies a domain glossary before/after MT (WU-style math German)
- Uses Argos Translate locally for remaining English prose
- Validates placeholders are restored

Usage:
  python3 scripts/translate-wiso-math-full.py [start] [end]
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import argostranslate.translate

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "src/data/wiso"
BANK_DIR = ROOT / "src/data"

# Phrase glossary — longest first. Applied on prose with KaTeX already masked.
PHRASE_GLOSSARY: list[tuple[str, str]] = [
    ("So the statement is True.", "Die Aussage ist wahr."),
    ("So the statement is False.", "Die Aussage ist falsch."),
    ("So the statement is true.", "Die Aussage ist wahr."),
    ("So the statement is false.", "Die Aussage ist falsch."),
    ("the statement is True", "die Aussage ist wahr"),
    ("the statement is False", "die Aussage ist falsch"),
    ("the statement is true", "die Aussage ist wahr"),
    ("the statement is false", "die Aussage ist falsch"),
    ("→ True", "→ Wahr"),
    ("→ False", "→ Falsch"),
    ("-> True", "→ Wahr"),
    ("-> False", "→ Falsch"),
    ("which matches the claim.", "was mit der Behauptung übereinstimmt."),
    ("which does not match the claim.", "was nicht mit der Behauptung übereinstimmt."),
    ("which matches the claimed", "was mit dem behaupteten"),
    ("matching the claimed", "übereinstimmend mit dem behaupteten"),
    ("matches the claim", "stimmt mit der Behauptung überein"),
    ("does not match the claim", "stimmt nicht mit der Behauptung überein"),
    ("The computed roster matches the claim.", "Die berechnete Menge stimmt mit der Behauptung überein."),
    ("The computed value matches the claim.", "Der berechnete Wert stimmt mit der Behauptung überein."),
    ("The numerical comparison fails, so the claim is false.", "Der Zahlenvergleich scheitert, daher ist die Behauptung falsch."),
    ("Rephrasing the claim cannot repair an algebraic contradiction.", "Eine Umformulierung der Behauptung behebt keinen algebraischen Widerspruch."),
    ("Substitute the given values into both sides and compare.", "Setze die gegebenen Werte auf beiden Seiten ein und vergleiche."),
    ("Substitute the given values into both sides of the claimed inequality.", "Setze die gegebenen Werte auf beiden Seiten der behaupteten Ungleichung ein."),
    ("Substitute into both sides and compare the values.", "Setze auf beiden Seiten ein und vergleiche die Werte."),
    ("Both sides equal , as claimed.", "Beide Seiten sind gleich, wie behauptet."),
    ("Both sides become , as claimed.", "Beide Seiten ergeben denselben Wert, wie behauptet."),
    ("The two sides agree.", "Beide Seiten stimmen überein."),
    ("The two sides do not agree.", "Beide Seiten stimmen nicht überein."),
    ("Those two figures agree.", "Diese beiden Werte stimmen überein."),
    ("Since , the figures disagree.", "Da die Werte voneinander abweichen, stimmen sie nicht überein."),
    ("The sides disagree with the claim that both equal .", "Die Seiten widersprechen der Behauptung, beide seien gleich."),
    ("Isolate the unknown by inverse operations: undo addition or subtraction first, then divide by a nonzero coefficient.",
     "Isoliere die Unbekannte durch Umkehroperationen: zuerst Addition oder Subtraktion rückgängig machen, dann durch einen von null verschiedenen Koeffizienten dividieren."),
    ("Each letter is a separate mini-problem; do not reuse a root from another letter.",
     "Jeder Buchstabe ist ein eigenes Mini-Problem; eine Wurzel aus einem anderen Buchstaben nicht wiederverwenden."),
    ("Intersection keeps only elements that sit in both inputs",
     "Die Schnittmenge enthält nur Elemente, die in beiden Eingabemengen liegen"),
    ("Intersection keeps elements that sit in both inputs",
     "Die Schnittmenge enthält Elemente, die in beiden Eingabemengen liegen"),
    ("Intersection keeps only elements that sit in both",
     "Die Schnittmenge enthält nur Elemente, die in beiden Mengen"),
    ("Intersection keeps elements that sit in both",
     "Die Schnittmenge enthält Elemente, die in beiden Mengen"),
    ("Union keeps elements that sit in at least one",
     "Die Vereinigung enthält Elemente, die in mindestens einer der Mengen liegen"),
    ("Difference keeps members of", "Die Differenz enthält Elemente von"),
    ("keeps members of", "enthält Elemente von"),
    ("that miss", "die nicht in"),
    ("that sit in both inputs", "die in beiden Eingabemengen liegen"),
    ("sit in both inputs", "in beiden Eingabemengen liegen"),
    ("Two sets are disjoint when they share no elements.",
     "Zwei Mengen sind disjunkt, wenn sie keine gemeinsamen Elemente haben."),
    ("Two sets are disjoint when they share no elements",
     "Zwei Mengen sind disjunkt, wenn sie keine gemeinsamen Elemente haben"),
    ("Collect the keepers:", "Die verbleibenden Elemente sammeln:"),
    ("Test each member of", "Prüfe jedes Element von"),
    ("Expressed as a percentage, this is approximately", "Als Prozentangabe ist das näherungsweise"),
    ("As a percentage, this is approximately", "Als Prozentangabe ist das näherungsweise"),
    ("This probability is approximately", "Diese Wahrscheinlichkeit beträgt näherungsweise"),
    ("This probability is", "Diese Wahrscheinlichkeit beträgt"),
    ("The claim states that this probability is greater than",
     "Die Behauptung besagt, dass diese Wahrscheinlichkeit größer ist als"),
    ("The claim states this probability is greater than",
     "Die Behauptung besagt, dass diese Wahrscheinlichkeit größer ist als"),
    ("The claim states that this probability is less than",
     "Die Behauptung besagt, dass diese Wahrscheinlichkeit kleiner ist als"),
    ("The claim states this probability is less than",
     "Die Behauptung besagt, dass diese Wahrscheinlichkeit kleiner ist als"),
    ("The claim is about", "Die Behauptung betrifft"),
    ("The claim needs more than", "Die Behauptung erfordert mehr als"),
    ("The statement claims this number is", "Die Aussage behauptet, diese Zahl sei"),
    ("The statement claims this probability is", "Die Aussage behauptet, diese Wahrscheinlichkeit sei"),
    ("Compare the computed value with the claim", "Vergleiche den berechneten Wert mit der Behauptung"),
    ("This equals the claimed value", "Das entspricht dem behaupteten Wert"),
    ("which matches the claimed formula", "was mit der behaupteten Formel übereinstimmt"),
    ("matching the claimed formula", "übereinstimmend mit der behaupteten Formel"),
    ("matching the claimed second derivative", "übereinstimmend mit der behaupteten zweiten Ableitung"),
    ("The parabola opens upwards, which is the opposite of the claim.",
     "Die Parabel öffnet sich nach oben — das Gegenteil der Behauptung."),
    ("A positive leading coefficient turns the arms upwards.",
     "Ein positiver Leitkoeffizient öffnet die Parabel nach oben."),
    ("A square is nonnegative, so the rearranged inequality holds.",
     "Ein Quadrat ist nichtnegativ, daher gilt die umgestellte Ungleichung."),
    ("Move all terms to one side and recognise a square.",
     "Bringe alle Terme auf eine Seite und erkenne ein Quadrat."),
    ("Expand the square fully and compare with the truncated right-hand side.",
     "Multipliziere das Quadrat vollständig aus und vergleiche mit der verkürzten rechten Seite."),
    ("The truncated form drops the cross term, so the values disagree.",
     "Die verkürzte Form lässt den Mischterm weg, daher weichen die Werte ab."),
    ("Write the product as two factors and differentiate each factor before combining.",
     "Schreibe das Produkt als zwei Faktoren und differenziere jeden Faktor, bevor du kombinierst."),
    ("Only after that product-rule expansion do we simplify to the claimed form.",
     "Erst nach der Produktregel-Entwicklung vereinfachen wir zur behaupteten Form."),
    ("Expand the cube by the binomial cube identity, term by term.",
     "Entwickle den Kubus mit der binomischen Kubusformel, Term für Term."),
    ("The expansion matches the claim.", "Die Entwicklung stimmt mit der Behauptung überein."),
    ("Rewrite as a difference of squares (Sophie Germain), factor, then evaluate.",
     "Schreibe als Differenz von Quadraten (Sophie Germain), faktorisiere und werte aus."),
    ("The sum of the roots is", "Die Summe der Wurzeln ist"),
    ("The slope is", "Die Steigung ist"),
    ("the number the claim names", "die Zahl, die die Behauptung nennt"),
    ("The constant cancels, leaving the slope", "Die Konstante fällt weg; übrig bleibt die Steigung"),
    ("That is the original number.", "Das ist die ursprüngliche Zahl."),
    ("kilometres per hour", "Kilometer pro Stunde"),
    ("kilometers per hour", "Kilometer pro Stunde"),
    ("Basic operations on explicit sets", "Grundoperationen mit explizit gegebenen Mengen"),
    ("Set-builder notation and equality of sets", "Mengenschreibweise und Gleichheit von Mengen"),
    ("Subsets, elements, and the power set", "Teilmengen, Elemente und die Potenzmenge"),
    ("Balancing Crate Counts Between Two Depots", "Kistenbestände zwischen zwei Lagern ausgleichen"),
    ("Reading Unit Prices Off Two Supplier Invoices", "Stückpreise aus zwei Lieferantenrechnungen ablesen"),
    ("Splitting Savings Between Two Interest-Bearing Accounts", "Ersparnisse auf zwei verzinsliche Konten aufteilen"),
]

# "Let A, B, and C be …" patterns handled separately for natural German.
LET_BE_RE = re.compile(
    r"\bLet\s+(.+?)\s+be\s+(finite\s+)?(sets|set|integers|integer|real numbers|reals|numbers)\b",
    re.I,
)

LET_BE_MAP = {
    "sets": "Mengen",
    "set": "eine Menge",
    "integers": "ganze Zahlen",
    "integer": "eine ganze Zahl",
    "real numbers": "reelle Zahlen",
    "reals": "reelle Zahlen",
    "numbers": "Zahlen",
}


def rewrite_let_be(text: str) -> str:
    def repl(m: re.Match[str]) -> str:
        names = m.group(1).strip()
        finite = "endliche " if m.group(2) else ""
        kind = LET_BE_MAP.get(m.group(3).lower(), m.group(3))
        # "A, B, and C" → "A, B und C"
        names = re.sub(r",\s*and\s+", " und ", names, flags=re.I)
        names = re.sub(r"\band\s+", "und ", names, flags=re.I)
        if kind.startswith("eine "):
            return f"Es sei {names} {finite}{kind}"
        return f"Es seien {names} {finite}{kind}"

    out = LET_BE_RE.sub(repl, text)
    # "Let $A=…$, $B=…$, and $C=…$." definition lists
    if re.match(r"^\s*Let\b", out, flags=re.I):
        out = re.sub(r"^\s*Let\b", "Es seien", out, count=1, flags=re.I)
        out = re.sub(r",\s*and\s+", " und ", out, flags=re.I)
    return out

# Single-token / short replacements on word boundaries (after phrases).
WORD_GLOSSARY: list[tuple[str, str]] = [
    (r"\bIntersection\b", "Schnittmenge"),
    (r"\bintersection\b", "Schnittmenge"),
    (r"\bUnion\b", "Vereinigung"),
    (r"\bunion\b", "Vereinigung"),
    (r"\bDifference\b", "Differenz"),
    (r"\bdifference\b", "Differenz"),
    (r"\bComplement\b", "Komplement"),
    (r"\bcomplement\b", "Komplement"),
    (r"\bSubset\b", "Teilmenge"),
    (r"\bsubset\b", "Teilmenge"),
    (r"\bPower set\b", "Potenzmenge"),
    (r"\bpower set\b", "Potenzmenge"),
    (r"\bcardinality\b", "Mächtigkeit"),
    (r"\bCardinality\b", "Mächtigkeit"),
    (r"\bdisjoint\b", "disjunkt"),
    (r"\bDisjoint\b", "Disjunkt"),
    (r"\bclaim\b", "Behauptung"),
    (r"\bClaim\b", "Behauptung"),
    (r"\bclaims\b", "Behauptungen"),
    (r"\broster\b", "Liste"),
    (r"\bkeepers\b", "verbleibenden Elemente"),
    (r"\bTrue\b", "Wahr"),
    (r"\bFalse\b", "Falsch"),
    (r"\btrue\b", "wahr"),
    (r"\bfalse\b", "falsch"),
    (r"\bsets\b", "Mengen"),
    (r"\bSets\b", "Mengen"),
    (r"\bset\b", "Menge"),
    (r"\bSet\b", "Menge"),
    (r"\belements\b", "Elemente"),
    (r"\belement\b", "Element"),
    (r"\bmembers\b", "Elemente"),
    (r"\bmember\b", "Element"),
    (r"\bprobability\b", "Wahrscheinlichkeit"),
    (r"\bProbability\b", "Wahrscheinlichkeit"),
    (r"\bderivative\b", "Ableitung"),
    (r"\bDerivative\b", "Ableitung"),
    (r"\binquality\b", "Ungleichung"),
    (r"\bequation\b", "Gleichung"),
    (r"\bequations\b", "Gleichungen"),
    (r"\binqualities\b", "Ungleichungen"),
    (r"\broot\b", "Wurzel"),
    (r"\broots\b", "Wurzeln"),
    (r"\bslope\b", "Steigung"),
    (r"\bparabola\b", "Parabel"),
    (r"\bstatement\b", "Aussage"),
    (r"\bStatement\b", "Aussage"),
    (r"\bstatements\b", "Aussagen"),
]

# Fix common Argos / glossary bleed mistakes.
POST_FIXES: list[tuple[str, str]] = [
    (r"\bSätze\b", "Mengen"),
    (r"\bSatz\b", "Menge"),
    (r"\bAnspruch\b", "Behauptung"),
    (r"\bAnsprüche\b", "Behauptungen"),
    (r"\bWahrhaftig\b", "Wahr"),
    (r"\bSets\b", "Mengen"),
    (r"\bSet\b", "Menge"),
    (r"\bhält\b", "enthält"),
    (r"\bKlage\b", "Behauptung"),
    (r"\bKlagen\b", "Behauptungen"),
    (r"von prüfen:", "von"),
    (r"Prüfe jedes Element von prüfen", "Prüfe jedes Element"),
    (r"Depot South", "Süddepot"),
    (r"Depot North", "Norddepot"),
    (r"\bSouth\b", "Süd"),
    (r"\bNorth\b", "Nord"),
    (r"vermissen\.", "enthalten sind."),
    (r"die Y vermissen", "die nicht in Y liegen"),
    (r"die \$Y\$ vermissen", "die nicht in $Y$ liegen"),
    (r"Ersetzen Sie", "Setze"),
    (r"vergleichen Sie", "vergleiche"),
    (r"Lass ", "Es seien "),
    (r"liegen Inputs", "liegen"),
    (r"\bInputs\b", "Eingabemengen"),
    (r"in beiden Mengen\s+(\$[^$]+\$)\s+und\s+(\$[^$]+\$)", r"in sowohl \1 als auch \2 liegen"),
    (r"die nicht in\s+(\$[^$]+\$)\.", r"die nicht in \1 liegen."),
    (r"die nicht in\s+(⟦K\d+⟧)\.", r"die nicht in \1 liegen."),
    (r"enthält Elemente von\s+(\$[^$]+\$)\s+die nicht in\s+(\$[^$]+\$)",
     r"enthält Elemente von \1, die nicht in \2 liegen"),
]

KATEX_RE = re.compile(r"(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)")
# Avoid translating pure-math / nearly-empty prose.
ALPHA_RE = re.compile(r"[A-Za-zÄÖÜäöüß]")


def protect_katex(text: str) -> tuple[str, list[str]]:
    tokens: list[str] = []

    def repl(m: re.Match[str]) -> str:
        i = len(tokens)
        tokens.append(m.group(0))
        return f" ⟦K{i}⟧ "

    return KATEX_RE.sub(repl, text), tokens


def restore_katex(text: str, tokens: list[str]) -> str:
    def repl(m: re.Match[str]) -> str:
        i = int(m.group(1))
        return tokens[i] if 0 <= i < len(tokens) else m.group(0)

    # Keep a single surrounding space when the placeholder had spaces.
    out = re.sub(r"\s*⟦K(\d+)⟧\s*", lambda m: f" {repl(m)} ", text)
    out = re.sub(r"[ \t]+\n", "\n", out)
    out = re.sub(r"\n[ \t]+", "\n", out)
    out = re.sub(r"[ \t]{2,}", " ", out)
    out = re.sub(r" *([,.;:!?])", r"\1", out)
    return out.strip()


def apply_phrases(text: str) -> str:
    out = text
    for en, de in sorted(PHRASE_GLOSSARY, key=lambda p: len(p[0]), reverse=True):
        out = out.replace(en, de)
    return out


def apply_words(text: str) -> str:
    out = text
    for pattern, repl in WORD_GLOSSARY:
        out = re.sub(pattern, repl, out)
    return out


def apply_post_fixes(text: str) -> str:
    out = text
    for pattern, repl in POST_FIXES:
        out = re.sub(pattern, repl, out)
    return out


def needs_mt(text: str) -> bool:
    """True if leftover Latin letters suggest untranslated English."""
    english_markers = re.compile(
        r"\b(the|and|or|of|to|for|with|that|this|from|into|both|between|two|three|"
        r"only|when|then|than|each|all|any|not|does|do|did|can|cannot|must|"
        r"should|would|which|where|what|how|let|keep|keeps|sit|sits|share|"
        r"match|matches|compare|expand|substitute|compute|claim|statement|"
        r"true|false|set|sets|element|elements|union|intersection|difference|"
        r"inputs|members|miss|agree|disagree|claimed|approximately|"
        r"balancing|reading|splitting|finding|pricing|extracting|stripping|"
        r"counts|prices|tickets|accounts|before|after|weekly|hidden|delivery|"
        r"supplier|invoices|adult|child|crate|depots|depot|interest|"
        r"bearing|menu|fee|rate|structure|mobile|production|report|"
        r"using|from|into|over|under|above|below|same|equal|equals|"
        r"given|value|values|number|numbers|solve|solving|find|show|"
        r"prove|check|verify|because|since|therefore|hence|thus|"
        r"basic|operations|explicit|finite|infinite)\b",
        re.I,
    )
    return bool(english_markers.search(text))


def translate_title(text: str | None) -> str | None:
    """Titles are short — always run glossary + Argos."""
    if text is None:
        return None
    if not str(text).strip():
        return text
    masked, tokens = protect_katex(str(text))
    step = rewrite_let_be(masked)
    step = apply_phrases(step)
    step = apply_words(step)
    step = translate_fragment(step)
    step = apply_words(step)
    step = apply_post_fixes(step)
    return restore_katex(step, tokens)


def translate_fragment(text: str) -> str:
    text = text.strip()
    if not text:
        return text
    if not ALPHA_RE.search(text):
        return text
    try:
        return argostranslate.translate.translate(text, "en", "de")
    except Exception:
        return text


def translate_text(text: str | None) -> str | None:
    if text is None:
        return None
    if not str(text).strip():
        return text

    masked, tokens = protect_katex(str(text))
    # Work paragraph-wise so Argos doesn't choke on huge blocks.
    paragraphs = re.split(r"(\n\s*\n)", masked)
    out_parts: list[str] = []
    for part in paragraphs:
        if not part or part.isspace() or re.fullmatch(r"\n\s*\n", part or ""):
            out_parts.append(part)
            continue
        step = rewrite_let_be(part)
        step = apply_phrases(step)
        # Normalize remaining English "and" between math tokens before German polish.
        step = re.sub(r",\s*and\s+", " und ", step, flags=re.I)
        step = re.sub(r"\sand\s+", " und ", step, flags=re.I)
        # "sit in both X and Y" after KaTeX masking / partial glossary
        step = re.sub(
            r"\bsit in both\s+(.+?)\s+(?:and|und)\s+(.+?)([.:]|$)",
            r"in sowohl \1 als auch \2 liegen\3",
            step,
            flags=re.I,
        )
        step = re.sub(
            r"in beiden Mengen\s+(.+?)\s+(?:and|und)\s+(.+?)([.:\n]|$)",
            r"in sowohl \1 als auch \2 liegen\3",
            step,
            flags=re.I,
        )
        step = apply_words(step)
        if needs_mt(step):
            # Translate sentence-ish chunks while keeping placeholders intact.
            chunks = re.split(r"(?<=[.!?])\s+|\n+", step)
            rebuilt: list[str] = []
            seps = re.findall(r"(?<=[.!?])\s+|\n+", step)
            for i, chunk in enumerate(chunks):
                if needs_mt(chunk):
                    rebuilt.append(translate_fragment(chunk))
                else:
                    rebuilt.append(chunk)
                if i < len(seps):
                    rebuilt.append(seps[i])
            step = "".join(rebuilt)
            step = apply_words(step)
        step = apply_post_fixes(step)
        out_parts.append(step)

    restored = restore_katex("".join(out_parts), tokens)
    # Ensure every KaTeX token came back.
    if any(f"⟦K{i}⟧" in restored for i in range(len(tokens))):
        return text  # fail safe: keep English rather than corrupt math
    if any(tok not in restored for tok in tokens if len(tok) > 2):
        # Some whitespace-normalized inline math may still match after restore;
        # only bail if a whole display block vanished.
        for tok in tokens:
            if tok.startswith("$$") and tok not in restored:
                return text
    # Final German word-order polish after math is restored.
    restored = re.sub(
        r"enthält Elemente von\s+(\$[^$]+\$)\s+die nicht in\s+(\$[^$]+\$)([.]|$)",
        r"enthält Elemente von \1, die nicht in \2 liegen\3",
        restored,
    )
    restored = re.sub(
        r"die nicht in\s+(\$[^$]+\$)\s*\.",
        r"die nicht in \1 liegen.",
        restored,
    )
    return restored


def load_chapter_tasks(chapter: int) -> list[dict]:
    dump = Path(f"/tmp/wiso-math-en/ch{chapter}.json")
    if dump.exists():
        return json.loads(dump.read_text())
    return load_chapter_tasks_via_node(chapter)


def load_chapter_tasks_via_node(chapter: int) -> list[dict]:
    """Load tasks through the existing TS loader for fidelity."""
    import subprocess

    script = f"""
import {{ loadMathChapterTasks }} from "./src/data/math-chapters.ts";
const tasks = await loadMathChapterTasks({chapter});
const slim = tasks.map((t) => ({{
  id: t.case_id || t.id,
  title: t.title,
  context: t.context,
  statements: t.statements,
  tactical_explanations: t.tactical_explanations,
  solution_overview: t.solution_overview,
}}));
process.stdout.write(JSON.stringify(slim));
"""
    path = ROOT / f"scripts/_dump_ch{chapter}.mts"
    path.write_text(script)
    try:
        proc = subprocess.run(
            ["npx", "tsx", str(path)],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=True,
        )
        return json.loads(proc.stdout)
    finally:
        path.unlink(missing_ok=True)


def translate_task(task: dict) -> dict:
    overlay: dict = {}
    if task.get("title"):
        overlay["title"] = translate_title(task["title"])
    if task.get("context"):
        overlay["context"] = translate_text(task["context"])
    if task.get("statements"):
        overlay["statements"] = [translate_text(s) or s for s in task["statements"]]
    if task.get("tactical_explanations"):
        overlay["tactical_explanations"] = [
            translate_text(s) or s for s in task["tactical_explanations"]
        ]
    if task.get("solution_overview"):
        overlay["solution_overview"] = translate_text(task["solution_overview"])
    return overlay


def main() -> None:
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 13
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for ch in range(start, end + 1):
        print(f"=== Chapter {ch} ===", flush=True)
        tasks = load_chapter_tasks(ch)
        out: dict[str, dict] = {}
        out_path = OUT_DIR / f"math-de-ch{ch}.json"
        for i, task in enumerate(tasks, 1):
            tid = task["id"]
            print(f"[{i}/{len(tasks)}] {tid}", flush=True)
            out[tid] = translate_task(task)
            if i % 10 == 0:
                out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        print(f"wrote {out_path} ({len(out)} tasks)", flush=True)


if __name__ == "__main__":
    main()
