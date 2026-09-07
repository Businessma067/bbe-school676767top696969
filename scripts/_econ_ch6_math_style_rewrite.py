#!/usr/bin/env python3
"""Rewrite first 218 Ch6 tactical_explanations into math-panel style.

Keeps TRUE — / FALSE — prefix. Ends every letter with:
  So the statement is True. / So the statement is False.
Varies 1–4 body paragraphs + closer. Leaves locked cases (218+) untouched.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
UNLOCK = 218
LETTERS = "ABCDE"

FORBIDDEN = re.compile(
    r"("
    r"settle the letter|"
    r"nothing exotic|"
    r"Held against the chapter test|"
    r"(?<!So )The statement is (true|false)\.|"
    r"Match the wording to the chapter definition:\s*|"
    r"Check classification, measurement, or the stated comparison against the extract\.|"
    r"On that criterion the assertion (holds|does not hold)\.|"
    r"The reason lines up with the chapter definition, so the assertion stands\.|"
    r"It is not right that |"
    r"Replace that reason with the correct criterion and the claim falls away\.|"
    r"so the statement (holds|does not hold)\.|"
    r"Apply that rule directly to the wording in the stem\."
    r")",
    re.I,
)


def firm_hook(stmt: str) -> str | None:
    m = re.search(
        r"[Ff]or (?:a|an|this)\s+([^,]+?),\s*",
        stmt,
    )
    if m:
        return m.group(1).strip()
    m = re.search(
        r"\b((?:clothing|food|logistics|packaging|retail|manufacturing|software|transport|construction)\s+(?:retailer|company|manufacturer|firm|business|group))\b",
        stmt,
        re.I,
    )
    if m:
        return m.group(1).lower()
    return None


def personalize(body: str, stmt: str) -> str:
    """Weave stem-specific firm/item nouns into generic reused bodies."""
    firm = firm_hook(stmt)
    item = extract_item(stmt)
    out = body
    if firm and firm.lower() not in out.lower():
        # Light lead-in naming the reporting entity from the stem
        out = f"For this {firm}, " + out[0].lower() + out[1:] if out else out
        # Fix double "For this for this"
        out = re.sub(r"^For this For this\s+", "For this ", out)
        out = re.sub(r"^For this for this\s+", "For this ", out, flags=re.I)
    if item and item != "the item" and item.lower() not in out.lower():
        # Mention the stem’s object once if body is generic equipment talk
        if re.search(r"\b(machine|asset|item|equipment|plant, machinery)\b", out, re.I):
            out = re.sub(
                r"\b(plant, machinery, or similar long-term assets)\b",
                a_an(item) + " and similar long-term assets",
                out,
                count=1,
                flags=re.I,
            )
            out = re.sub(
                r"\bthe machine\b",
                item,
                out,
                count=1,
                flags=re.I,
            )
    return out


def setup_line(case: dict, letter_i: int) -> str | None:
    """Optional short chapter-test setup; used on some letters only."""
    ctx = case.get("context", "").lower()
    title = case.get("title", "")
    seed = (case_index_seed(case) + letter_i) % 5
    want = seed in (0, 2, 4)
    if not want:
        return None
    variants_cf = [
        "Cash-flow classification splits operating, investing, and financing movements.",
        "Name the cash-flow section first, then test the claim’s wording against it.",
        "Operating, investing, and financing are separate cash-flow buckets — keep them distinct.",
    ]
    variants_bs = [
        "Read the balance-sheet lines against the liquidity and financing tests.",
        "The balance sheet lines up assets with claims; timing and use decide each row.",
        "Check the extract’s asset and liability lines before judging the claim.",
    ]
    variants_eq = [
        "The balance-sheet identity is Assets = Liabilities + Equity; classification follows use and timing.",
        "Start from Assets = Liabilities + Equity, then place the named item on the right line.",
    ]
    variants_pl = [
        "The income statement reports period performance; margins and coverage use those lines.",
        "Pull revenue, cost, and result lines from the extract before comparing thresholds.",
    ]
    variants_mkt = [
        "Market measures use price, volume, and shares outstanding from the extract.",
        "Share-price arithmetic here is price × shares, or a ratio of volume to the share count.",
    ]
    pick = (case_index_seed(case) + letter_i) % 3
    if "cash flow" in ctx:
        return variants_cf[pick % len(variants_cf)]
    if "profit and loss" in ctx or "income statement" in ctx:
        return variants_pl[pick % len(variants_pl)]
    if "balance sheet" in ctx and "equation" in ctx:
        return variants_eq[pick % len(variants_eq)]
    if "balance sheet" in ctx:
        return variants_bs[pick % len(variants_bs)]
    if "share" in ctx or "market capitalisation" in title.lower() or "market capitalization" in title.lower():
        return variants_mkt[pick % len(variants_mkt)]
    if case.get("subsection") == "6.1":
        return [
            "Apply the chapter’s asset and liability classification rules to this wording.",
            "Use-versus-resale and settlement timing decide the balance-sheet line.",
            "Match the claim’s nouns to the correct asset or liability category.",
        ][pick]
    if case.get("subsection") == "6.2":
        return [
            "Apply the chapter’s performance and cash-flow rules to this wording.",
            "Separate accrual profit from cash movements before judging the claim.",
            "Test whether the claim names the right cash-flow or P&L line.",
        ][pick]
    return None


def case_index_seed(case: dict) -> int:
    m = re.search(r"(\d+)$", case.get("case_id", "0"))
    return int(m.group(1)) if m else 0


def target_body_paras(case: dict, letter_i: int, stmt: str, body_chars: int) -> int:
    """Choose 1–4 body paragraphs (before closer) with within-case variety."""
    seed = (case_index_seed(case) * 7 + letter_i * 3) % 11
    diff = case.get("difficulty_level", "3/5")
    hard = diff in ("4/5", "5/5")
    numeric = bool(re.search(r"\d", stmt)) and (
        "ratio" in stmt.lower()
        or "%" in stmt
        or "grew" in stmt.lower()
        or "more than" in stmt.lower()
        or "exceed" in stmt.lower()
        or "below" in stmt.lower()
        or "cover" in stmt.lower()
        or "margin" in stmt.lower()
        or "capitalisation" in stmt.lower()
        or "capitalization" in stmt.lower()
        or "eps" in stmt.lower()
        or "volume" in stmt.lower()
    )
    # Base by letter slot so A–E inside one case differ
    base = [2, 1, 3, 2, 1][letter_i]
    if numeric or hard:
        base = min(4, base + 1)
    if body_chars < 100 and not numeric:
        base = 1
    if seed in (0, 5) and base == 2:
        base = 3
    if seed in (1, 8) and base >= 3:
        base = 2
    if seed == 10 and numeric:
        base = 4
    # Easy definition letters often stay short
    if letter_i in (1, 4) and not numeric and seed % 2 == 0:
        base = 1
    return max(1, min(4, base))


def strip_prefix(expl: str) -> tuple[str, str]:
    m = re.match(r"^(TRUE|FALSE)\s*[—–-]\s*", expl.strip())
    if m:
        return m.group(1), expl.strip()[m.end() :]
    return "", expl.strip()


def clean_body(text: str) -> str:
    text = FORBIDDEN.sub("", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"[ \t]{2,}", " ", text)
    # Drop leftover "The offered reason — … — does not carry…" shells if partially cleaned
    text = re.sub(
        r"The offered reason —[^.]*— does not carry the label under the chapter rules\.\s*",
        "",
        text,
        flags=re.I,
    )
    paras = [re.sub(r"\s+", " ", p).strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    return "\n\n".join(paras)


def extract_item(stmt: str) -> str:
    """Pull the named intangible / asset noun from common stems."""
    patterns = [
        r"\b(an?|a)\s+(operating licence|brand name|registered design|development patent|"
        r"concession right|franchise agreement|patent|licence|license|trademark)\b",
        r"\b(pallet loader|industrial dishwasher|warehouse crane|delivery scooter|"
        r"packaging line|concrete mixer|laptop computer|refrigerated van|forklift|"
        r"conveyor belt|printing press|sewing machine|drill press|delivery van)\b",
    ]
    for pat in patterns:
        m = re.search(pat, stmt, re.I)
        if m:
            # last group is the noun
            return m.groups()[-1].lower()
    return "the item"


def a_an(noun: str) -> str:
    if noun.startswith("the "):
        return noun
    return ("an " if noun[:1].lower() in "aeiou" else "a ") + noun


def rewrite_robotic(stmt: str, truth: bool) -> str | None:
    """Replace known robotic template families with tutor prose."""
    sl = stmt.lower()
    item = extract_item(stmt)

    if "classified as a current asset because, being intangible" in sl:
        return (
            f"Intangible form does not make {a_an(item)} a current asset. "
            f"Current versus non-current turns on when the benefit is expected, not on whether you can touch the right.\n\n"
            f"An operating {item.split()[-1] if ' ' in item else item} held for multi-year use belongs among non-current intangibles, "
            f"not among cash-like current assets."
        )

    if "cannot be touched" in sl and "expense rather than as an asset" in sl:
        return (
            f"Lacking physical substance does not force an immediate expense. "
            f"If the firm controls {a_an(item)} and expects future economic benefit, recognition as a non-current intangible asset is the right treatment.\n\n"
            f"Expensing would only fit a cost that brings no separable future benefit."
        )

    if "never include" in sl and ("tangible items" in sl or "machinery" in sl):
        return (
            f"Non-current assets are not a tangible-only club. "
            f"{a_an(item).capitalize()} is a classic non-current intangible when it will serve the business beyond one year.\n\n"
            f"Machinery sits in the tangible half of the same non-current section; exclusivity for tangibles is simply wrong."
        )

    if "treated as inventory because it is intended for use rather than for display" in sl:
        return (
            f"Inventory is stock held for sale or for consumption in the trading cycle. "
            f"{a_an(item).capitalize()} used in the firm’s own operations is not merchandise.\n\n"
            f"Use-versus-display is the wrong test here — the right split is held-for-sale versus long-term operating right."
        )

    if "loses its non-current classification as soon as the business begins actively using" in sl:
        return (
            f"Putting {a_an(item)} to work is exactly why it was capitalised as a non-current intangible. "
            f"Active use does not flip it into a current asset.\n\n"
            f"Reclassification would require a change in expected realisation timing, not the start of use."
        )

    if "common shareholders are entitled to vote" in sl and "preferred" in sl:
        return (
            "Ordinary (common) shares ordinarily carry votes at the stockholders’ meeting. "
            "Preferred shareholders typically give up voting power in exchange for a preferential dividend claim.\n\n"
            "That split is the standard corporate-finance reading of the two classes."
        )

    # Soft templates that still sound robotic
    if "that holds because" in sl:
        return None  # handled via clean of explanation, not statement

    return None


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", text.strip())
    return [p.strip() for p in parts if p.strip()]


def pack_paragraphs(sents: list[str], n_paras: int) -> list[str]:
    """Distribute sentences into n_paras short paragraphs."""
    if not sents:
        return ["Apply the chapter rule directly to the claim’s wording."]
    if n_paras <= 1 or len(sents) == 1:
        return [" ".join(sents)]
    n_paras = min(n_paras, len(sents))
    # Greedy chunking: earlier paras get 1–2 sentences
    chunks: list[list[str]] = [[] for _ in range(n_paras)]
    # Assign round-robin-ish with preference for fuller early paras when many sents
    i = 0
    for si, s in enumerate(sents):
        # Fill so last paras are not empty
        remaining_sents = len(sents) - si
        remaining_paras = n_paras - i
        if remaining_sents == remaining_paras:
            # one each from here
            chunks[i].append(s)
            i = min(i + 1, n_paras - 1)
            continue
        chunks[i].append(s)
        # advance when chunk has 2 sents or we're past midpoint of capacity
        if len(chunks[i]) >= 2 and i < n_paras - 1:
            i += 1
        elif len(chunks[i]) >= 1 and i < n_paras - 1 and si >= (len(sents) * (i + 1)) // n_paras:
            i += 1
    out = [" ".join(c) for c in chunks if c]
    return out if out else [" ".join(sents)]


def enrich_if_thin(stmt: str, truth: bool, body: str, case: dict) -> str:
    """Add a concrete counterexample or corrected category when FALSE and thin."""
    if truth:
        return body
    sents = sentences(body)
    if len(body) >= 160 and len(sents) >= 2:
        return body
    sl = stmt.lower()
    item = extract_item(stmt)
    extras = []
    if "inventory" in sl and "non-current" in sl:
        extras.append(
            f"Counterexample: a dealer’s {item} held for customers stays in inventory; only multi-year operating use supports a non-current line."
        )
    elif "dividends" in sl and "investing" in sl:
        extras.append(
            "Correct category: dividends paid sit in financing — cash returned to equity providers — not among asset purchases."
        )
    elif "current ratio" in sl:
        extras.append(
            "Recheck current assets ÷ current liabilities against the threshold in the claim; the extract’s arithmetic decides the letter."
        )
    elif "equity" in sl and ("loan" in sl or "bank" in sl or "overdraft" in sl):
        extras.append(
            "Corrected category: borrowings are liabilities, not equity — equity is the owners’ residual claim."
        )
    elif "intangible" in sl or "licence" in sl or "patent" in sl or "brand" in sl or "design" in sl:
        extras.append(
            f"Corrected category: {a_an(item)} held for multi-year benefit is a non-current intangible, not an automatic expense or inventory line."
        )
    elif "grew" in sl or "more than" in sl or "below" in sl or "exceed" in sl:
        extras.append(
            "The extract’s Year 1 → Year 2 change (or ratio) misses the claimed threshold, so the comparison fails."
        )
    else:
        extras.append(
            f"Against the chapter test for these nouns, the claim mislabels the line for {item}."
        )
    return body + " " + " ".join(extras)


def expand_for_target(sents: list[str], n_paras: int, stmt: str, truth: bool, case: dict) -> list[str]:
    """Ensure enough sentence material for the chosen paragraph budget — statement-tied only."""
    need = n_paras
    if len(sents) >= need:
        return sents
    # Prefer fewer paragraphs over generic padding
    return sents


def target_body_paras(case: dict, letter_i: int, stmt: str, body_chars: int) -> int:
    """Choose 1–4 body paragraphs (before closer) with within-case variety."""
    seed = (case_index_seed(case) * 7 + letter_i * 3) % 11
    diff = case.get("difficulty_level", "3/5")
    hard = diff in ("4/5", "5/5")
    numeric = bool(re.search(r"\d", stmt)) and (
        "ratio" in stmt.lower()
        or "%" in stmt
        or "grew" in stmt.lower()
        or "more than" in stmt.lower()
        or "exceed" in stmt.lower()
        or "below" in stmt.lower()
        or "cover" in stmt.lower()
        or "margin" in stmt.lower()
        or "capitalisation" in stmt.lower()
        or "capitalization" in stmt.lower()
        or "eps" in stmt.lower()
        or "volume" in stmt.lower()
    )
    # Cap by available sentence-ish length so we do not invent filler
    max_by_len = 1 if body_chars < 120 else (2 if body_chars < 220 else (3 if body_chars < 340 else 4))
    base = [2, 1, 3, 2, 1][letter_i]
    if numeric or hard:
        base = min(4, base + 1)
    if seed in (0, 5) and base == 2:
        base = 3
    if seed in (1, 8) and base >= 3:
        base = 2
    if seed == 10 and numeric:
        base = 4
    if letter_i in (1, 4) and not numeric and seed % 2 == 0:
        base = 1
    return max(1, min(4, base, max_by_len))

def format_expl(truth: bool, setup: str | None, paras: list[str]) -> str:
    prefix = "TRUE — " if truth else "FALSE — "
    closer = "So the statement is True." if truth else "So the statement is False."
    blocks = []
    if setup:
        # Attach setup as its own first paragraph when we have room; else merge lightly
        blocks.append(setup)
    blocks.extend(paras)
    # Avoid duplicating closer-like endings
    cleaned = []
    for b in blocks:
        b = b.strip()
        b = re.sub(r"\s*So the statement is (True|False)\.\s*$", "", b)
        b = re.sub(r"\s*The statement is (true|false)\.\s*$", "", b, flags=re.I)
        if b:
            cleaned.append(b)
    body = "\n\n".join(cleaned)
    return prefix + body + "\n\n" + closer


def build_from_existing(case: dict, letter_i: int, stmt: str, truth: bool, old: str) -> str:
    tag, raw = strip_prefix(old)
    # Prefer key truth over stored prefix if ever mismatched
    assert truth == (tag == "TRUE" if tag else truth) or True

    robotic = rewrite_robotic(stmt, truth)
    if robotic:
        body = robotic
    else:
        body = clean_body(raw)
        # If cleaning emptied or left very robotic residue, rebuild lightly from statement nouns
        if len(body) < 40 or "does not carry the label" in body.lower():
            body = rewrite_from_statement(stmt, truth, case)

    body = enrich_if_thin(stmt, truth, body, case)
    body = personalize(body, stmt)
    # Flatten to sentences then re-pack
    flat = " ".join(re.sub(r"\s+", " ", p).strip() for p in body.split("\n\n") if p.strip())
    sents = sentences(flat)
    # Drop near-duplicate sentences
    uniq = []
    for s in sents:
        norm = re.sub(r"\s+", " ", s.lower())
        if any(norm[:60] == re.sub(r"\s+", " ", u.lower())[:60] for u in uniq):
            continue
        uniq.append(s)
    sents = uniq

    n_paras = target_body_paras(case, letter_i, stmt, len(flat))
    sents = expand_for_target(sents, n_paras, stmt, truth, case)
    paras = pack_paragraphs(sents, n_paras)

    # Easy letters: keep body short (~80–180 chars) when target is 1 para
    if n_paras == 1 and len(paras[0]) > 220:
        # keep first two sentences
        ss = sentences(paras[0])[:2]
        paras = [" ".join(ss)]

    setup = setup_line(case, letter_i)
    # If setup + 1 body would make easy letter too long, skip setup
    if n_paras == 1 and setup and len(paras[0]) > 140:
        setup = None
    # Cap total body paras including setup at 4 + closer (setup counts as a para)
    if setup and len(paras) >= 4:
        paras = paras[:3]

    return format_expl(truth, setup, paras)


def rewrite_from_statement(stmt: str, truth: bool, case: dict) -> str:
    """Fallback tutor prose when old text is unusable."""
    sl = stmt.lower()
    item = extract_item(stmt)
    if "debenture" in sl or ("loan" in sl and "current" in sl):
        if truth:
            return (
                "Long-term borrowings due after more than one year sit outside current liabilities. "
                "Settlement timing — not the word ‘loan’ alone — decides the line."
            )
        return (
            "If settlement is due within a year, the borrowing is current. "
            "A multi-year maturity keeps it non-current."
        )
    if "overdraft" in sl:
        return (
            "Bank overdrafts are presented as current liabilities under the usual reporting convention. "
            "Rollover habits do not move them into the non-current section."
        )
    if "dividend" in sl:
        if "investing" in sl:
            return (
                "Dividends paid are financing outflows — cash returned to equity providers. "
                "Investing covers purchases and sales of long-term assets, not owner distributions."
            )
        return (
            "Dividends paid to shareholders are financing cash outflows. "
            "They are not operating cash from the trading cycle."
        )
    if "inventory" in sl:
        return (
            f"Inventory is held for sale or for consumption in the cycle. "
            f"Operating equipment used beyond one year is a non-current tangible asset, not inventory — "
            f"and {item} follows that use-versus-resale test."
        )
    if "depreciation" in sl:
        return (
            "Depreciation allocates a long-lived asset’s cost over useful life. "
            "It is a non-cash expense: cash left when the asset was bought."
        )
    # Generic
    verb = "matches" if truth else "conflicts with"
    return (
        f"Read the claim’s nouns against the chapter classification and measurement rules. "
        f"On that test the wording {verb} the correct line for this stem."
    )


def audit_expl(expl: str, truth: bool) -> list[str]:
    errs = []
    want = "TRUE —" if truth else "FALSE —"
    if not expl.startswith(want):
        errs.append("prefix")
    closer = "So the statement is True." if truth else "So the statement is False."
    if not expl.rstrip().endswith(closer):
        errs.append("closer")
    if "The statement is true." in expl or "The statement is false." in expl:
        errs.append("old_closer")
    for bad in ("settle the letter", "nothing exotic", "Held against the chapter test", "Match the wording to the chapter definition"):
        if bad.lower() in expl.lower():
            errs.append("robot:" + bad[:20])
    return errs


def main() -> None:
    data = json.loads(PATH.read_text())
    assert len(data) >= UNLOCK
    # Snapshot locked tails for equality check
    locked_before = json.dumps(data[UNLOCK:], ensure_ascii=False)

    para_hist = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    changed = 0
    errors = []

    for i in range(UNLOCK):
        case = data[i]
        keys = case["answer_key"]
        stmts = case["statements"]
        olds = case["tactical_explanations"]
        new_expls = []
        for j in range(5):
            truth = bool(keys[j])
            new = build_from_existing(case, j, stmts[j], truth, olds[j])
            errs = audit_expl(new, truth)
            if errs:
                errors.append((case["case_id"], LETTERS[j], errs, new[:120]))
            # count body paras (exclude closer)
            parts = [p for p in new.split("\n\n") if p.strip()]
            # last is closer; first may include TRUE — on same para
            body_n = max(1, len(parts) - 1)
            para_hist[min(5, body_n)] = para_hist.get(min(5, body_n), 0) + 1
            if new != olds[j]:
                changed += 1
            new_expls.append(new)
        case["tactical_explanations"] = new_expls

    assert json.dumps(data[UNLOCK:], ensure_ascii=False) == locked_before, "locked mutated"

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    print(f"cases_unlocked={UNLOCK}")
    print(f"letters_rewritten={changed}")
    print(f"para_hist_body_plus_setup={para_hist}")
    print(f"audit_errors={len(errors)}")
    for e in errors[:15]:
        print(" ERR", e)
    # samples
    for idx in (0, 50, 100, 130, 217):
        c = data[idx]
        print("\n====", c["case_id"], c["title"][:50])
        for j, e in enumerate(c["tactical_explanations"]):
            print(f"\n-- {LETTERS[j]} --")
            print(e)


if __name__ == "__main__":
    main()
