#!/usr/bin/env python3
"""Post-polish WiSo §3.5 German marketing cases after Argos pass."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/wiso/economics-cases-ch3.json"

# Phrase replacements (longer first). Applied to title/context/statements/explanations.
PHRASES: list[tuple[str, str]] = [
    (r"\bCustomer Relationship Management\b", "Kundenbeziehungsmanagement (CRM)"),
    (r"\bWho-Customer Research\b", "Wer-Kundenforschung"),
    (r"\bWhat-Customer Research\b", "Was-Kundenforschung"),
    (r"\bWhere-Customer Research\b", "Wo-Kundenforschung"),
    (r"\bWhen-Customer Research\b", "Wann-Kundenforschung"),
    (r"\bWhy-Customer Research\b", "Warum-Kundenforschung"),
    (r"\bWho-Customer-Analyse\b", "Wer-Kundenanalyse"),
    (r"\bWhat-Customer-Analyse\b", "Was-Kundenanalyse"),
    (r"\bWhere-Customer-Analyse\b", "Wo-Kundenanalyse"),
    (r"\bWhen-Customer-Analyse\b", "Wann-Kundenanalyse"),
    (r"\bWhy-Customer-Analyse\b", "Warum-Kundenanalyse"),
    (r"\bWho-Customer-Arbeit\b", "Wer-Kundenanalyse"),
    (r"\bWhat-Customer-Arbeit\b", "Was-Kundenanalyse"),
    (r"\bWhere-Customer-Arbeit\b", "Wo-Kundenanalyse"),
    (r"\bWhen-Customer-Arbeit\b", "Wann-Kundenanalyse"),
    (r"\bWhy-Customer-Arbeit\b", "Warum-Kundenanalyse"),
    (r"\bWho-Customer Work\b", "Wer-Kundenanalyse"),
    (r"\bWhat-Customer Work\b", "Was-Kundenanalyse"),
    (r"\bWhere-Customer Work\b", "Wo-Kundenanalyse"),
    (r"\bWhen-Customer Work\b", "Wann-Kundenanalyse"),
    (r"\bWhy-Customer Work\b", "Warum-Kundenanalyse"),
    (r"\bWho-Customer Insight\b", "Wer-Kundeninsight"),
    (r"\bWhat-Customer Insight\b", "Was-Kundeninsight"),
    (r"\bWhere-Customer Insight\b", "Wo-Kundeninsight"),
    (r"\bWhen-Customer Insight\b", "Wann-Kundeninsight"),
    (r"\bWhy-Customer Insight\b", "Warum-Kundeneinsicht"),
    (r"\bWho[- ]Customer\b", "Wer-Kunden"),
    (r"\bWhat[- ]Customer\b", "Was-Kunden"),
    (r"\bWhere[- ]Customer\b", "Wo-Kunden"),
    (r"\bWhen[- ]Customer\b", "Wann-Kunden"),
    (r"\bWhy[- ]Customer\b", "Warum-Kunden"),
    (r"\bwhat-customer research\b", "Was-Kundenforschung"),
    (r"\bWho-Customer\b", "Wer-Kunden"),
    (r"\bWhat-Customer\b", "Was-Kunden"),
    (r"\bWhere-Customer\b", "Wo-Kunden"),
    (r"\bWhen-Customer\b", "Wann-Kunden"),
    (r"\bWhy-Customer\b", "Warum-Kunden"),
    (r"\bFeature Fit\b", "Passung der Produktmerkmale"),
    (r"\bfeature fit\b", "Passung der Produktmerkmale"),
    (r"\bVariable-Cost-Plus-Preis\b", "Preisbildung auf Basis variabler Kosten plus Aufschlag"),
    (r"\bVariable-Cost-Plus\b", "variable Kosten plus Aufschlag"),
    (r"\bHome-Office\b", "Homeoffice"),
    (r"\bStatement\b", "Aussage"),
    (r"\bFalse\b", "falsch"),
    (r"\bTrue\b", "wahr"),
    # Do NOT globally replace Tools — brand names like Mesa Tools must stay.
    (r"^Review\b", "Betrachten Sie"),
    (r"^Analyze\b", "Analysieren Sie"),
    (r"^Consider\b", "Betrachten Sie"),
    (r"^Assess\b", "Beurteilen Sie"),
    (r"\bPenetrationsforschung\b", "Penetrationspreispolitik"),
    (r"\bMarketing-Zielleistung\b", "Erreichung der Marketingziele"),
    (r"Sterne und Kühe im Kern", "Stars und Cash Cows im Kern"),
    (r"Sterne und Cash Cows", "Stars und Cash Cows"),
    (r"Arme Hunde wenige", "Poor Dogs wenige"),
    (r"\bArme Hunde\b", "Poor Dogs"),
    (r"\barme Hunde\b", "Poor Dogs"),
    (r"Fragezeichen unter Beobachtung", "Question Marks unter Beobachtung"),
    (r"Warum-Fahrer", "Warum-Treiber"),
    (r"Warum-Kundeninsight", "Warum-Kundeneinsicht"),
    (r"Wer-Kundeninsight", "Wer-Kundeneinsicht"),
    (r"Was-Kundeninsight", "Was-Kundeneinsicht"),
    (r"Wo-Kundeninsight", "Wo-Kundeneinsicht"),
    (r"Wann-Kundeninsight", "Wann-Kundeneinsicht"),
    (r"\bSupport\b", "Betreuung"),
    # Fix awkward "Überprüfen Sie" opener when it is Review-translation of stem
    (r"^Überprüfen Sie die Marketingdefinition", "Betrachten Sie die Marketingdefinition"),
    (r"^Überprüfen Sie ", "Betrachten Sie "),
    (r"^Review ", "Betrachten Sie "),
]

# Ensure explanation footer consistency
FOOTER_RE = re.compile(
    r"\n*\n?(Die Aussage ist( daher| also)? (wahr|falsch)\.?|So the statement is (True|False)\.?)\s*$",
    re.I,
)


def polish_text(text: str) -> str:
    out = text
    for pat, repl in PHRASES:
        out = re.sub(pat, repl, out)
    # Collapse duplicate spaces (keep newlines)
    out = re.sub(r"[ \t]{2,}", " ", out)
    return out.strip()


def ensure_footer(expl: str, is_true: bool) -> str:
    body = FOOTER_RE.sub("", expl).strip()
    footer = "Die Aussage ist wahr." if is_true else "Die Aussage ist falsch."
    return f"{body}\n\n{footer}"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    n = 0
    for case in data:
        if case.get("subsection") != "3.5":
            continue
        before = json.dumps(case, ensure_ascii=False)
        case["title"] = polish_text(case["title"])
        case["context"] = polish_text(case.get("context") or "")
        case["statements"] = [polish_text(s) for s in case["statements"]]
        answers = case["answer_key"]
        case["tactical_explanations"] = [
            ensure_footer(polish_text(e), bool(answers[i]))
            for i, e in enumerate(case["tactical_explanations"])
        ]
        case.pop("needs_de_translation", None)
        after = json.dumps(case, ensure_ascii=False)
        if before != after:
            n += 1
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Polished {n} cases")


if __name__ == "__main__":
    main()
