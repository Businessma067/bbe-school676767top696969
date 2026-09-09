#!/usr/bin/env python3
"""Rewrite ALL ch4–ch5 tactical_explanations as plain task answers.

Direct voice: explain the statement like a clear exam answer — not third person,
not theatrical teacher scaffolding. Keeps 0–2 Note: traps per case where useful.
"""

from __future__ import annotations

import hashlib
import importlib.util
import json
import re
import statistics
import sys
from collections import Counter
from pathlib import Path

ROOT = Path("/workspace")
SCRATCH = ROOT / "scripts" / "_econ_ch45_scratch_plain.py"

_spec = importlib.util.spec_from_file_location("_scratch", SCRATCH)
_scratch = importlib.util.module_from_spec(_spec)
assert _spec.loader
_spec.loader.exec_module(_scratch)

teach_ch4 = _scratch.teach_ch4
teach_ch5 = _scratch.teach_ch5
seed = _scratch.seed
normalize_ws = _scratch.normalize_ws
sentences = _scratch.sentences
split_paras = _scratch.split_paras
stem_hook = _scratch.stem_hook

FILES = [
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
]

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

KIND_PATTERNS = [
    ("S", "M", "L", "S", "M"),
    ("M", "S", "L", "M", "S"),
    ("L", "S", "M", "L", "S"),
    ("S", "L", "M", "S", "L"),
    ("M", "L", "S", "M", "L"),
    ("L", "M", "S", "L", "M"),
    ("S", "M", "S", "L", "M"),
    ("M", "S", "M", "L", "S"),
]

FORBIDDEN = [
    "fill the stem",
    "when you hear",
    "rehearse before the exam",
    "i want you",
    "applied to this stem",
    "the claim fits the chapter definition",
    "neighbouring vocabulary",
    "walk into",
    "picture bakery",
    "picture business",
    "picture printer",
    "keep the bakery",
    "fill in the stem",
    "at the board",
    "narrate",
    "that is how introductory marketing classifies the offering once you fill",
    "similar marketing vocabulary can mislead",
    "the familiar vocabulary is not enough",
    "picture ",
    "look —",
    "finally, ",
    "on this point, ",
    "by contrast, ",
    "next, ",
]

STEM_NOUN = re.compile(
    r"\b("
    r"sole proprietorships?|sole proprietors?|partnerships?|partners?|corporations?|"
    r"shareholders?|share capital|retained profits?|trade credit|overdrafts?|bonds?|"
    r"mortgages?|collateral|gearing|printers?|producer products?|consumer products?|"
    r"loyalty cards?|newsletters?|CRM|USP|market share|product[- ]orientation|"
    r"market[- ]orientation|primary research|secondary (?:data|research|information)|"
    r"segmentation|targeting|positioning|mass marketing|niche marketing|"
    r"product life cycle|question marks?|cash cows?|stars?|poor dogs?|"
    r"cleaning contracts?|catering|consultancy|maintenance|software|flour|vehicles?"
    r")\b",
    re.I,
)


def stem_focus(statement: str) -> str:
    hits = STEM_NOUN.findall(statement)
    seen: set[str] = set()
    out: list[str] = []
    for h in hits:
        k = h.lower()
        if k not in seen:
            seen.add(k)
            out.append(h)
    return out[0] if out else ""


def teach_bits(case: dict, statement: str, truth: bool) -> list[str]:
    sub = str(case.get("subsection") or "")
    ctx = case.get("context") or ""
    if sub.startswith("4") or "CASE 4" in str(case.get("case_id")):
        bits = teach_ch4(statement, truth, sub, ctx)
    else:
        bits = teach_ch5(statement, truth, sub, ctx)
        if sub >= "5.4":
            bits = _extend_ch5(bits, statement, truth, sub)
    return _scrub_bits(bits)


def _extend_ch5(bits: list[str], statement: str, truth: bool, subsection: str) -> list[str]:
    """Add marketing-mix / research / segmentation teaching for 5.4–5.7."""
    sl = statement.lower()
    extra: list[str] = []

    if subsection == "5.4":
        if "sustain" in sl or "repair" in sl or "reuse" in sl or "rent" in sl or "dispos" in sl:
            extra.append(
                "Responsible production and consumption favour repair, reuse, sharing, and renting "
                "longer-lived goods instead of disposable buying."
            )
        elif "creat" in sl and ("wish" in sl or "need" in sl or "advertis" in sl):
            extra.append(
                "Firms can shape demand through new products and advertising, not only respond to "
                "existing wishes — which raises ethical questions about overspending."
            )
        else:
            extra.append(
                "Both businesses and consumers share responsibility for sustainable production "
                "and consumption choices."
            )
    elif subsection == "5.5":
        if "primary" in sl:
            extra.append(
                "Primary research gathers new data for the firm — surveys, interviews, or "
                "commissioned studies — tailored but often costly."
            )
        elif "secondary" in sl:
            extra.append(
                "Secondary data reuse existing research from government, associations, or "
                "published reports — cheaper but less tailored."
            )
        elif "absolute market share" in sl or "absolute share" in sl:
            extra.append(
                "Absolute market share is the firm's sales divided by total market volume."
            )
        elif "relative market share" in sl or "relative share" in sl:
            extra.append(
                "Relative market share compares the firm's share with the largest competitor's share."
            )
        elif any(w in sl for w in ("who", "what", "where", "when", "why", "customer analysis")):
            extra.append(
                "Customer analysis asks who buys, what they do with the product, where and when "
                "they buy, and why they choose one offer."
            )
        elif "market potential" in sl or "sales potential" in sl or "market volume" in sl:
            extra.append(
                "Market volume is total industry sales; market potential includes buyers not yet "
                "served, and a firm's sales potential can exceed its current sales."
            )
        else:
            extra.append(
                "Market research informs the firm about customers, competitors, and industry prospects."
            )
    elif subsection == "5.6":
        if "mass marketing" in sl or "economies of scale" in sl:
            extra.append(
                "Mass marketing offers one product to all buyers; large identical runs can cut unit "
                "cost through economies of scale."
            )
        elif "niche" in sl:
            extra.append(
                "Niche marketing focuses on a narrow subgroup, often suited to small specialised firms."
            )
        elif "segment" in sl:
            extra.append(
                "Segmentation groups customers by geographic, demographic, psychographic, or "
                "behavioural traits when segments are measurable, profitable, accessible, and durable."
            )
        elif "target" in sl:
            extra.append(
                "Targeting selects which segment(s) the firm will serve with a tailored mix."
            )
        elif "position" in sl:
            extra.append(
                "Positioning shapes how the product is seen in the minds of the chosen target market."
            )
        else:
            extra.append(
                "After research, firms segment customers, choose targets, and position the offer."
            )
    elif subsection == "5.7":
        if "life cycle" in sl or any(w in sl for w in ("introduction", "maturity", "decline", "growth stage")):
            extra.append(
                "The product life cycle runs introduction → growth → maturity → decline, with "
                "typical shifts in sales and profit."
            )
        elif any(w in sl for w in ("star", "cash cow", "question mark", "poor dog", "bcg", "boston")):
            extra.append(
                "The BCG matrix classifies products by relative market share and market growth: "
                "stars, question marks, cash cows, and poor dogs."
            )
        elif "line extension" in sl or "mix extension" in sl or "product mix" in sl or "relaunch" in sl:
            extra.append(
                "Product-mix decisions cover width and depth; firms may relaunch, extend a line, "
                "add a new line, or eliminate weak products."
            )
        elif any(w in sl for w in ("marketing mix", "four p", "price", "place", "promotion")):
            extra.append(
                "The marketing mix blends product, price, place, and promotion for the target customer."
            )
        else:
            extra.append(
                "Product decisions — range, brand, life-cycle stage, and portfolio role — sit at "
                "the centre of the marketing mix."
            )

    if extra:
        return extra + [b for b in bits if b.lower()[:40] not in extra[0].lower()[:40]]
    return bits


def _scrub_bits(bits: list[str]) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for b in bits:
        low = b.lower()
        if any(f in low for f in FORBIDDEN):
            continue
        if "matches the marketing test" in low or "fights the marketing test" in low:
            continue
        if "lines up with how this chapter defines" in low:
            continue
        if "collides with the chapter definition" in low:
            continue
        key = normalize_ws(b).lower()[:90]
        if key in seen:
            continue
        seen.add(key)
        out.append(normalize_ws(b))
    return out


def apply_line(statement: str, truth: bool, focus: str) -> str:
    sl = statement.lower()
    if focus:
        if truth:
            return f"That matches how {focus} is treated in this chapter."
        if any(w in sl for w in ("always", "never", "only", "automatically", "exclusively")):
            return (
                f"For {focus}, the absolute wording is too strong — one counterexample under "
                "the correct test is enough to reject the sentence."
            )
        return f"For {focus}, the label or relationship in the sentence does not hold."
    if truth:
        return "The wording matches the chapter rule as written."
    if any(w in sl for w in ("always", "never", "only")):
        return "Absolute words such as always, never, or only usually carry the trap here."
    return "Once the correct criterion is restored, the sentence no longer holds."


def maybe_note(
    case: dict, statement: str, truth: bool, case_i: int, li: int, notes_used: int
) -> str | None:
    if notes_used >= 2:
        return None
    sl = statement.lower()
    sub = str(case.get("subsection") or "")

    if not truth:
        if sub.startswith("4") and "limited liability" in sl and "sole" in sl:
            return (
                "Note: sole traders do not get a corporate liability wall — a trading name "
                "does not incorporate the firm."
            )
        if sub.startswith("4") and "limited partner" in sl:
            return (
                "Note: limited-partner protection expects a passive capital role — daily "
                "management can remove the cap."
            )
        if sub.startswith("4") and ("share price" in sl or "secondary" in sl):
            return (
                "Note: cash enters at issue; later exchange gains enrich traders, not the "
                "issuer's share capital."
            )
        if sub.startswith("4") and re.search(r"\b(only|never|always)\b", sl):
            if (case_i + li) % 5 == 0:
                return "Note: absolute words such as only, never, and always often mark the trap."
        if sub.startswith("5") and ("physical" in sl or "service" in sl) and "product" in sl:
            return "Note: a marketed product includes exchangeable services, not only physical goods."
        if sub.startswith("5") and ("producer" in sl or "consumer" in sl):
            return (
                "Note: buyer type in that transaction drives the label — factory origin and "
                "packaging do not."
            )
        if sub.startswith("5") and ("product-orient" in sl or "market-orient" in sl):
            return (
                "Note: orientation is about sequence — product first versus needs first — "
                "not about ignoring quality."
            )
        if sub.startswith("5") and ("crm" in sl or "anonym" in sl or "loyalty" in sl):
            return "Note: CRM needs recognised customers; total anonymity after every sale breaks it."
        if sub.startswith("5") and re.search(r"\b(only|never|always)\b", sl):
            if (case_i + li) % 6 == 0:
                return "Note: absolute words such as only, never, and always usually carry the trap."
    elif truth and notes_used == 0 and (case_i + li) % 9 == 0:
        if sub.startswith("4") and "retained" in sl:
            return "Note: retained earnings are internal equity — profit kept inside rather than paid out."
        if sub.startswith("5") and "exchange" in sl:
            return "Note: exchange is required — desire without a trade does not create a marketed product."
    return None


def pack_paras(bits: list[str], kind: str, statement: str, truth: bool) -> list[str]:
    focus = stem_focus(statement)
    apply = apply_line(statement, truth, focus)

    if not bits:
        hook = stem_hook(statement)
        if truth:
            bits = [f"{hook.capitalize()} is defined the way the sentence describes."]
        else:
            bits = [f"The sentence misstates how {hook} works in this chapter."]

    if kind == "S":
        core = bits[0]
        if len(core) < 120 and len(bits) > 1:
            core = core + " " + bits[1]
        if len(core) < 90:
            core = core + " " + apply
        return [core[:320].rsplit(" ", 1)[0] + "." if len(core) > 320 else core]

    if kind == "M":
        p1 = bits[0]
        p2 = bits[1] if len(bits) > 1 else apply
        if apply.lower() not in p2.lower() and apply.lower() not in p1.lower():
            p2 = p2 + " " + apply
        return [p1, p2]

    paras = bits[:3]
    if apply.lower() not in " ".join(paras).lower():
        paras.append(apply)
    while len(paras) < 3 and len(bits) > len(paras):
        paras.append(bits[len(paras)])
    return paras[:4]


def wrap(body: str, truth: bool) -> str:
    closer = f"So the statement is {'True' if truth else 'False'}."
    return body.rstrip() + f"\n\n{closer}"


def body_of(expl: str) -> str:
    return CLOSER_RE.sub("", expl).strip()


def scrub_body(body: str) -> str:
    paras = []
    for p in split_paras(body):
        low = p.lower()
        if any(f in low for f in FORBIDDEN):
            continue
        p = re.sub(r"^(Look|Finally|Next|By contrast|On this point)\s*[—–-]?\s*", "", p, flags=re.I)
        p = re.sub(r"\s+", " ", p).strip()
        if p:
            paras.append(p)
    return "\n\n".join(paras).strip()


def build_expl(case: dict, case_i: int, li: int, kind: str, notes_used: int) -> tuple[str, int]:
    statement = case["statements"][li]
    truth = bool(case["answer_key"][li])

    bits = teach_bits(case, statement, truth)
    paras = pack_paras(bits, kind, statement, truth)
    body = scrub_body("\n\n".join(paras))

    note = maybe_note(case, statement, truth, case_i, li, notes_used)
    added = 0
    if note and kind in ("M", "L", "S"):
        if note.lower() not in body.lower():
            body += "\n\n" + note
            added = 1

    if len(body) < 100:
        extra = bits[min(1, len(bits) - 1)] if bits else apply_line(statement, truth, stem_focus(statement))
        if extra.lower() not in body.lower():
            body += "\n\n" + extra

    return wrap(scrub_body(body), truth), added


def rewrite_case(case: dict, case_i: int) -> list[str]:
    if "[GENERATE]" in case.get("title", ""):
        return case["tactical_explanations"]

    kinds = list(KIND_PATTERNS[case_i % len(KIND_PATTERNS)])
    if "L" not in kinds:
        kinds[2] = "L"

    expls: list[str] = []
    notes = 0
    for li, kind in enumerate(kinds):
        expl, add = build_expl(case, case_i, li, kind, notes)
        notes += add
        expls.append(expl)

    # Cap notes at 2 per case
    note_idxs = [i for i, e in enumerate(expls) if re.search(r"(?m)^Note:", body_of(e))]
    for i in note_idxs[2:]:
        b = re.sub(r"\n\nNote:.*", "", body_of(expls[i]), flags=re.S)
        expls[i] = wrap(scrub_body(b), bool(case["answer_key"][i]))

    return expls


def validate_file(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    errs: list[str] = []
    note_cases = 0
    note_letters = 0
    forbidden_hits = 0
    closers_ok = 0
    total_letters = 0

    for case in data:
        if "[GENERATE]" in case.get("title", ""):
            continue
        case_notes = 0
        for i, (expl, key) in enumerate(zip(case["tactical_explanations"], case["answer_key"])):
            total_letters += 1
            body = body_of(expl)
            want = f"So the statement is {'True' if key else 'False'}."
            if expl.rstrip().endswith(want):
                closers_ok += 1
            else:
                errs.append(f"{case['case_id']} letter {i}: bad closer")
            low = body.lower()
            for f in FORBIDDEN:
                if f in low:
                    forbidden_hits += 1
                    errs.append(f"{case['case_id']} letter {i}: forbidden '{f}'")
            if re.search(r"(?m)^Note:", body):
                note_letters += 1
                case_notes += 1
        if case_notes:
            note_cases += 1
        if case_notes > 2:
            errs.append(f"{case['case_id']}: {case_notes} notes (>2)")

    return {
        "file": path.name,
        "cases": len(data),
        "letters": total_letters,
        "closers_ok": closers_ok,
        "forbidden_hits": forbidden_hits,
        "note_cases": note_cases,
        "note_letters": note_letters,
        "errors": errs[:20],
        "error_count": len(errs),
    }


def rewrite_file(path: Path) -> int:
    data = json.loads(path.read_text(encoding="utf-8"))
    snap = json.loads(json.dumps(data))
    n = 0
    for i, case in enumerate(data):
        if "[GENERATE]" in case.get("title", ""):
            continue
        new = rewrite_case(case, i)
        case["tactical_explanations"] = new
        n += 1
        assert case["statements"] == snap[i]["statements"]
        assert case["answer_key"] == snap[i]["answer_key"]
        assert case["case_id"] == snap[i]["case_id"]
        assert case.get("title") == snap[i].get("title")
        assert case.get("context") == snap[i].get("context")
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return n


def sample_ch5(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    case = data[0]
    return {
        "case_id": case["case_id"],
        "statement_A": case["statements"][0],
        "answer_A": case["answer_key"][0],
        "explanation_A": case["tactical_explanations"][0],
    }


def main() -> int:
    total = 0
    reports = []
    for path in FILES:
        n = rewrite_file(path)
        total += n
        rep = validate_file(path)
        reports.append(rep)
        print(f"rewrote {n} cases in {path.name}")
        print(json.dumps(rep, indent=2, ensure_ascii=False))

    sample = sample_ch5(FILES[1])
    print("\nCH5 SAMPLE:")
    print(json.dumps(sample, indent=2, ensure_ascii=False))

    ok = all(r["error_count"] == 0 and r["closers_ok"] == r["letters"] for r in reports)
    ok = ok and any(r["note_letters"] > 0 for r in reports)
    print(f"\nVALIDATION: {'OK' if ok else 'FAILED'}")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
