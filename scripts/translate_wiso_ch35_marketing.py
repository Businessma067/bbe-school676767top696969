#!/usr/bin/env python3
"""
Translate WiSo §3.5 Marketing cases (BBE 5.x English) into exam German
aligned with Wirtschaft verstehen 2026 §3.5.

Uses Argos Translate offline + terminology glossary / stem normalisation.
Removes needs_de_translation when a case is written back.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/wiso/economics-cases-ch3.json"
CACHE = ROOT / "scripts/_cache_ch35_argos.json"
TITLES_PATH = ROOT / "scripts/data_ch35_titles_de.json"

TITLE_DE: dict[str, str] = json.loads(TITLES_PATH.read_text(encoding="utf-8"))

GLOSSARY_PHRASES: list[tuple[str, str]] = [
    # Keep longer / more specific first
    (r"\bUnique Selling Proposition\b", "Alleinstellungsmerkmal (USP)"),
    (r"\bunique selling proposition\b", "Alleinstellungsmerkmal (USP)"),
    (r"\bUSP\b", "USP"),
    (r"\bBoston Consulting Group\b", "BCG-Portfolio"),
    (r"\bBCG matrix\b", "BCG-Matrix"),
    (r"\bBCG Matrix\b", "BCG-Matrix"),
    (r"\bmarketing mix\b", "Marketing-Mix"),
    (r"\bMarketing Mix\b", "Marketing-Mix"),
    (r"\bproduct life cycle\b", "Produktlebenszyklus"),
    (r"\bProduct Life Cycle\b", "Produktlebenszyklus"),
    (r"\bproduct lifecycle\b", "Produktlebenszyklus"),
    (r"\bmarket research\b", "Marktforschung"),
    (r"\bMarket Research\b", "Marktforschung"),
    (r"\bprimary research\b", "Primärforschung"),
    (r"\bsecondary research\b", "Sekundärforschung"),
    (r"\bmarket share\b", "Marktanteil"),
    (r"\bMarket Share\b", "Marktanteil"),
    (r"\bmarket potential\b", "Marktpotenzial"),
    (r"\bmarket volume\b", "Marktvolumen"),
    (r"\bsales volume\b", "Absatzvolumen"),
    (r"\bsales potential\b", "Absatzpotenzial"),
    (r"\btarget group\b", "Zielgruppe"),
    (r"\btarget market\b", "Zielmarkt"),
    (r"\bmarket segmentation\b", "Marktsegmentierung"),
    (r"\bmarket orientation\b", "Marktorientierung"),
    (r"\bproduct orientation\b", "Produktorientierung"),
    (r"\bproducer products?\b", "Produktionsgüter"),
    (r"\bProducer products?\b", "Produktionsgüter"),
    (r"\bconsumer products?\b", "Konsumgüter"),
    (r"\bConsumer products?\b", "Konsumgüter"),
    (r"\bproducer product\b", "Produktionsgut"),
    (r"\bconsumer product\b", "Konsumgut"),
    (r"\bbusiness-to-business\b", "Business-to-Business (B2B)"),
    (r"\bbusiness to business\b", "Business-to-Business (B2B)"),
    (r"\bB2B\b", "B2B"),
    (r"\bB2C\b", "B2C"),
    (r"\bCustomer Relationship Management\b", "Kundenbeziehungsmanagement (CRM)"),
    (r"\bCRM\b", "CRM"),
    (r"\bpersonal selling\b", "Persönlicher Verkauf"),
    (r"\bPersonal Selling\b", "Persönlicher Verkauf"),
    (r"\bpublic relations\b", "Öffentlichkeitsarbeit (PR)"),
    (r"\bPublic Relations\b", "Öffentlichkeitsarbeit (PR)"),
    (r"\bsales promotion\b", "Verkaufsförderung"),
    (r"\bSales Promotion\b", "Verkaufsförderung"),
    (r"\bpoint of sale\b", "Verkaufsstätte"),
    (r"\bfranchising\b", "Franchising"),
    (r"\brelaunch\b", "Relaunch"),
    (r"\bRelaunch\b", "Relaunch"),
    (r"\bpenetration pricing\b", "Penetrationspreispolitik"),
    (r"\bskimming pricing\b", "Abschöpfungspreispolitik"),
    (r"\bcharm pricing\b", "psychologische Preisgestaltung (Charm Pricing)"),
    (r"\btrade discount\b", "Handelsrabatt"),
    (r"\bcash cows?\b", "Cash Cows"),
    (r"\bCash cows?\b", "Cash Cows"),
    (r"\bquestion marks?\b", "Question Marks"),
    (r"\bQuestion marks?\b", "Question Marks"),
    (r"\bpoor dogs?\b", "Poor Dogs"),
    (r"\bPoor dogs?\b", "Poor Dogs"),
]

# German post-edits after Argos (order matters).
POST_DE: list[tuple[str, str]] = [
    (r"Bewerten Sie die folgenden wirtschaftlichen Aussagen", "Beurteilen Sie die folgenden wirtschaftlichen Aussagen"),
    (r"Analysieren Sie die folgenden wirtschaftlichen Aussagen", "Beurteilen Sie die folgenden wirtschaftlichen Aussagen"),
    (r"Überprüfen Sie die folgenden wirtschaftlichen Aussagen", "Beurteilen Sie die folgenden wirtschaftlichen Aussagen"),
    (r"Die Aussage ist also falsch\.?", "Die Aussage ist falsch."),
    (r"Die Aussage ist also wahr\.?", "Die Aussage ist wahr."),
    (r"Also ist die Aussage falsch\.?", "Die Aussage ist falsch."),
    (r"Also ist die Aussage wahr\.?", "Die Aussage ist wahr."),
    (r"So ist die Aussage falsch\.?", "Die Aussage ist falsch."),
    (r"So ist die Aussage wahr\.?", "Die Aussage ist wahr."),
    (r"\bHerstellerprodukte\b", "Produktionsgüter"),
    (r"\bHerstellerprodukt\b", "Produktionsgut"),
    (r"\bVerbraucherprodukte\b", "Konsumgüter"),
    (r"\bVerbraucherprodukt\b", "Konsumgut"),
    (r"\bKonsumentenprodukte\b", "Konsumgüter"),
    (r"\bKonsumentenprodukt\b", "Konsumgut"),
    (r"Einzigartige Verkaufsproposition", "Alleinstellungsmerkmal (USP)"),
    (r"einzigartige Verkaufsproposition", "Alleinstellungsmerkmal (USP)"),
    (r"Einzigartiges Verkaufsversprechen", "Alleinstellungsmerkmal (USP)"),
    (r"einzigartiges Verkaufsversprechen", "Alleinstellungsmerkmal (USP)"),
    (r"Marketing-Mix Vier Ps", "Marketing-Mix der vier P"),
    (r"\bvier Ps\b", "vier P"),
    (r"\bVier Ps\b", "vier P"),
    (r"\bProduktlebenszyklusmodell\b", "Produktlebenszyklus"),
    (r"\bMarktforschungsquellen\b", "Quellen der Marktforschung"),
    (r"\bGeschäfts-zu-Geschäft\b", "Business-to-Business (B2B)"),
    (r"\bGeschäft zu Geschäft\b", "Business-to-Business (B2B)"),
    (r"private Haushalte", "private Haushalte"),
    (r"\bZielmarktsegment\b", "Marktsegment"),
    (r"\bpsychografische\b", "psychographische"),
    (r"\bPsychografische\b", "Psychographische"),
    (r"\bVerhaltenssegmentierung\b", "verhaltensbezogene Segmentierung"),
    (r"\bDemografische Segmentierung\b", "Demographische Segmentierung"),
    (r"\bdemografische\b", "demographische"),
    (r"\bGeografische Segmentierung\b", "Geographische Segmentierung"),
    (r"\bgeografische\b", "geographische"),
    # Fix common Argos artifacts
    (r" / ", "/"),
    (r"\s+\n", "\n"),
    (r"  +", " "),
]

CTX_TAIL_EN = re.compile(
    r"(Evaluate|Analyze|Review|Consider|Assess|Examine|Study)\s+the following economic assertions:?\s*$",
    re.I,
)
CTX_TAIL_DE = "Beurteilen Sie die folgenden wirtschaftlichen Aussagen:"


def load_translator():
    from argostranslate import translate

    installed = translate.get_installed_languages()
    en = next(l for l in installed if l.code == "en")
    de = next(l for l in installed if l.code == "de")
    return en.get_translation(de)


def glossary_pre(text: str) -> str:
    out = text
    for pat, repl in GLOSSARY_PHRASES:
        out = re.sub(pat, repl, out)
    return out


def post_de(text: str) -> str:
    out = text.strip()
    for pat, repl in POST_DE:
        out = re.sub(pat, repl, out)
    # Normalize explanation footer if True/False English leaked
    out = re.sub(r"\n*So the statement is True\.?\s*$", "\n\nDie Aussage ist wahr.", out, flags=re.I)
    out = re.sub(r"\n*So the statement is False\.?\s*$", "\n\nDie Aussage ist falsch.", out, flags=re.I)
    out = re.sub(r"\n*The statement is True\.?\s*$", "\n\nDie Aussage ist wahr.", out, flags=re.I)
    out = re.sub(r"\n*The statement is False\.?\s*$", "\n\nDie Aussage ist falsch.", out, flags=re.I)
    # Ensure footer on explanations that lost it
    return out.strip()


def translate_text(tr, text: str, cache: dict[str, str]) -> str:
    key = text
    if key in cache:
        return cache[key]
    # Protect already-German glossary inserts by translating after glossary_pre on EN
    prepared = glossary_pre(text)
    # Chunk long texts by paragraphs to avoid quality drop
    parts = re.split(r"(\n\n+)", prepared)
    out_parts: list[str] = []
    for part in parts:
        if not part or part.isspace() or part.startswith("\n"):
            out_parts.append(part)
            continue
        # Skip if mostly already German glossary tokens only — still translate
        try:
            out_parts.append(tr.translate(part))
        except Exception as e:
            print(f"WARN translate fail: {e}", file=sys.stderr)
            out_parts.append(part)
    raw = "".join(out_parts)
    result = post_de(raw)
    cache[key] = result
    return result


def normalize_context(tr, ctx: str, cache: dict[str, str]) -> str:
    ctx = (ctx or "").strip()
    if not ctx:
        return CTX_TAIL_DE
    # Replace English assertion tail
    if CTX_TAIL_EN.search(ctx):
        body = CTX_TAIL_EN.sub("", ctx).strip()
        if body:
            body_de = translate_text(tr, body, cache)
            # remove trailing punctuation duplication
            body_de = body_de.rstrip(" .:;")
            return f"{body_de}. {CTX_TAIL_DE}"
        return CTX_TAIL_DE
    de = translate_text(tr, ctx, cache)
    if "Beurteilen Sie die folgenden" not in de and "wirtschaftlichen Aussagen" not in de:
        de = de.rstrip(" .:;") + ". " + CTX_TAIL_DE
    return post_de(de)


def ensure_expl_footer(expl: str, is_true: bool) -> str:
    text = expl.strip()
    # Strip any existing footer variants
    text = re.sub(
        r"\n*\n?(Die Aussage ist( daher| also)? (wahr|falsch)\.?)\s*$",
        "",
        text,
        flags=re.I,
    ).strip()
    footer = "Die Aussage ist wahr." if is_true else "Die Aussage ist falsch."
    return f"{text}\n\n{footer}"


def looks_english(s: str) -> bool:
    """Heuristic: high ratio of common English function words."""
    if not s:
        return False
    low = s.lower()
    en_hits = sum(
        1
        for w in [
            " the ",
            " and ",
            " of ",
            " to ",
            " is ",
            " are ",
            " with ",
            " for ",
            " that ",
            " this ",
            " from ",
            " product ",
            " marketing ",
            " customer ",
            " evaluate ",
            " statement ",
        ]
        if w in f" {low} "
    )
    de_hits = sum(
        1
        for w in [
            " der ",
            " die ",
            " das ",
            " und ",
            " ist ",
            " sind ",
            " nicht ",
            " ein ",
            " eine ",
            " für ",
            " mit ",
            " aussage ",
            " produkt ",
            " marketing ",
            " kunden ",
        ]
        if w in f" {low} "
    )
    return en_hits >= 3 and en_hits > de_hits


def translate_case(tr, case: dict, cache: dict[str, str]) -> dict:
    cid = case["case_id"]
    title = TITLE_DE.get(cid) or post_de(translate_text(tr, case["title"], cache))

    context = normalize_context(tr, case.get("context") or "", cache)

    statements = [post_de(translate_text(tr, s, cache)) for s in case["statements"]]
    answers = case["answer_key"]
    expls = []
    for i, e in enumerate(case["tactical_explanations"]):
        de = post_de(translate_text(tr, e, cache))
        is_true = bool(answers[i]) if i < len(answers) else False
        expls.append(ensure_expl_footer(de, is_true))

    out = dict(case)
    out["title"] = title
    out["context"] = context
    out["statements"] = statements
    out["tactical_explanations"] = expls
    # Preserve answer_key, case_id, source_* unchanged
    out.pop("needs_de_translation", None)
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="Translate only first N pending cases")
    ap.add_argument("--offset", type=int, default=0)
    ap.add_argument("--source", type=str, default="", help="Filter source_bbe_subsection e.g. 5.1")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--ids", type=str, default="", help="Comma-separated case_ids")
    args = ap.parse_args()

    data = json.loads(PATH.read_text(encoding="utf-8"))
    cache: dict[str, str] = {}
    if CACHE.exists():
        try:
            cache = json.loads(CACHE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            cache = {}

    pending = [
        i
        for i, c in enumerate(data)
        if c.get("subsection") == "3.5"
        and (c.get("needs_de_translation") or looks_english(c.get("title") or ""))
    ]
    if args.source:
        pending = [i for i in pending if data[i].get("source_bbe_subsection") == args.source]
    if args.ids:
        want = {x.strip() for x in args.ids.split(",") if x.strip()}
        pending = [i for i in pending if data[i]["case_id"] in want]

    pending = pending[args.offset :]
    if args.limit:
        pending = pending[: args.limit]

    print(f"Pending to translate this run: {len(pending)}", flush=True)
    if not pending:
        return

    tr = load_translator()
    t0 = time.time()
    done = 0
    for idx in pending:
        case = data[idx]
        print(f"  [{done+1}/{len(pending)}] {case['case_id']} …", flush=True)
        data[idx] = translate_case(tr, case, cache)
        done += 1
        if done % 10 == 0:
            CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
            if not args.dry_run:
                PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"    checkpoint @ {done}, {time.time()-t0:.0f}s", flush=True)

    CACHE.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
    if not args.dry_run:
        PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    left = sum(1 for c in data if c.get("subsection") == "3.5" and c.get("needs_de_translation"))
    print(f"Done {done} in {time.time()-t0:.0f}s; remaining needs_de_translation={left}")


if __name__ == "__main__":
    main()
