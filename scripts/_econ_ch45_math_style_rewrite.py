#!/usr/bin/env python3
"""Rewrite unlocked Ch4–Ch5 tactical_explanations into math-panel style.

Source teaching: git show 89d6c648^ (pre-lock cleanup bank).
Only first floor(n * 0.35) cases are touched. Locked cases untouched.

Format after TRUE — / FALSE —:
  free tutor paragraphs (short / medium / longer mixed within each case)
  blank line
  So the statement is True. | So the statement is False.
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path("/workspace")
PARENT = "89d6c648^"
UNLOCK_RATIO = 0.35

FILES = [
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
]

PREFIX = re.compile(r"^(TRUE|FALSE)\s*[—–-]\s*", re.I)

BANNED_SUBSTR = [
    "settle the letter",
    "nothing exotic",
    "held against the chapter test",
    "the statement is true.",
    "the statement is false.",
    "absolute wording is the trap",
    "those restricting words stretch",
    "the sentence therefore reports",
    "under that definition the assertion",
    "under that classification the",
    "once the defining feature is restored",
    "the mislabelled category or reversed comparison",
    "swap in the textbook criterion",
    "one clear counterexample under the right criterion",
    "nothing in the wording contradicts",
    "evaluated against the textbook standard",
    "connect the claim to",
    "sort the claim by",
]

FILLER_PARA = re.compile(
    r"""^(
      The\ statement\ is\ (true|false)\.?
      |Held\ against\ the\ chapter\ test\b
      |Absolute\ wording\ is\ the\ trap\b
      |Those\ restricting\ words\ stretch\b
      |The\ sentence\ therefore\ reports\b
      |Nothing\ in\ the\ wording\ contradicts\b
      |Under\ that\ definition\ the\ assertion\b
      |Under\ that\ classification\ the\ (assertion|claim)\b
      |Once\ the\ defining\ feature\ is\ restored\b
      |The\ mislabelled\ category\ or\ reversed\ comparison\b
      |Swap\ in\ the\ textbook\ criterion\b
      |The\ absolute\ wording\ is\ what\ breaks\b
      |One\ clear\ counterexample\ under\ the\ right\ criterion\b
      |Swap\ in\ the\ right\ criterion\b
      |Put\ beside\ that\ test\b
      |That\ is\ the\ mechanism\ the\ sentence\b
      |So\ the\ claim\ about\b
      |Nothing\ exotic\ is\ required\b
      |If\ two\ readings\ seem\ plausible\b
      |A\ quick\ counter-check\ against\ the\ definition\b
      |Keep\ neighbouring\ labels\b
      |The\ distinguishing\ feature\ for\b
      |Yes\s*—\s*that\ is\ how\b
      |No\s*—\s*that\ is\ not\ how\b
      |Read\ the\ claim\ on\b
      |This\ is\ a\ fair\ intro-level\ description\b
      |This\ mislabels\b
      |The\ wording\ (tracks|fights)\ the\ definition\b
      |The\ sentence\ is\ (right|wrong)\ about\b
      |On\ [A-Za-z].{0,40},\s*the\ statement\ names\ the\ (correct|wrong)\ mechanism\b
      |Score\ this\ letter\b
      |Apply\ the\ chapter\ mechanism\b
      |That\ misclassification\ is\ enough\b
      |On\ that\ basis\ the\ assertion\b
      |Name\ the\ ownership\ form\ or\ finance\ source\b
    )""",
    re.I | re.X,
)

TRAIL_CLOSER = re.compile(
    r"""\s*(
      The\ statement\ is\ (true|false)\.?
      |Under\ that\ classification\ the\ (assertion|claim)\s+[^.]*\.
      |The\ sentence\ therefore\ reports\ the\ concept\ accurately[^.]*\.
      |Held\ against\ the\ chapter\ test[^.]*\.
      |Absolute\ wording\ is\ the\ trap[^.]*\.
      |Those\ restricting\ words\ stretch[^.]*\.
      |Once\ the\ defining\ feature\ is\ restored[^.]*\.
      |Swap\ in\ the\ textbook\ criterion[^.]*\.
      |The\ absolute\ wording\ is\ what\ breaks[^.]*\.
      |One\ clear\ counterexample[^.]*\.
      |Nothing\ in\ the\ wording\ contradicts[^.]*\.
      |Put\ beside\ that\ test[^.]*\.
      |So\ the\ claim\ about[^.]*\.
      |Nothing\ exotic\ is\ required[^.]*\.
      |If\ two\ readings\ seem\ plausible[^.]*\.
      |A\ quick\ counter-check[^.]*\.
      |Keep\ neighbouring\ labels[^.]*\.
      |The\ distinguishing\ feature\ for[^.]*\.
      |That\ is\ the\ mechanism\ the\ sentence[^.]*\.
      |Swap\ in\ the\ right\ criterion[^.]*\.
    )+\s*$""",
    re.I | re.X,
)

CLOSER_RE = re.compile(r"So the statement is (True|False)\.\s*$")


def unlock_n(n: int) -> int:
    return int(n * UNLOCK_RATIO)


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def git_show_json(rev_path: str) -> list:
    raw = subprocess.check_output(["git", "show", rev_path], cwd=ROOT)
    return json.loads(raw)


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def split_paras(body: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", body.strip()) if p.strip()]


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", normalize_ws(text))
    return [s.strip() for s in parts if s.strip()]


def strip_trail(p: str) -> str:
    out = p
    prev = None
    while prev != out:
        prev = out
        out = TRAIL_CLOSER.sub("", out).strip()
    out = re.sub(r"\s*The statement is (true|false)\.?\s*$", "", out, flags=re.I).strip()
    out = re.sub(r"\s*So the statement is (True|False)\.?\s*$", "", out).strip()
    return out


def is_filler(p: str) -> bool:
    one = normalize_ws(p)
    if not one:
        return True
    if FILLER_PARA.match(one):
        return True
    if re.fullmatch(r"The statement is (true|false)\.?", one, re.I):
        return True
    if re.fullmatch(r"So the statement is (True|False)\.?", one):
        return True
    low = one.lower()
    for b in BANNED_SUBSTR:
        if low == b or low.startswith(b):
            return True
    return False


STOCK_META = re.compile(
    r"Apply the chapter mechanism|name the ownership form or finance source|"
    r"That misclassification is enough|On that basis the assertion|"
    r"Check the stem against the ownership / marketing test|"
    r"Apply the chapter definition directly to this claim|"
    r"Apply the chapter definition — the claim overshoots|"
    r"So the claim that|"
    r"mislabels or overstretches the idea|"
    r"That is why the claim stands|"
    r"form of business or source of finance|"
    r"Read against the chapter test for|"
    r"Keep the textbook criterion for|"
    r"the letter stays consistent",
    re.I,
)


def normalize_stem_sent(s: str) -> str:
    """Keep teaching content from 'On this stem (...): ...' wrappers."""
    m = re.match(r"^On this stem\s*\([^)]*\)\s*:\s*(.+)$", s.strip(), re.I)
    if m:
        s = m.group(1).strip()
    else:
        m2 = re.match(r"^On this stem[^:]*:\s*(.+)$", s.strip(), re.I)
        if m2:
            s = m2.group(1).strip()
    if s and s[0].islower():
        s = s[0].upper() + s[1:]
    return s


def clean_body_paras(raw_expl: str) -> list[str]:
    text = (raw_expl or "").strip()
    m = PREFIX.match(text)
    body = text[m.end() :].strip() if m else text
    paras: list[str] = []
    for p in split_paras(body):
        p = strip_trail(p)
        if not p or is_filler(p):
            continue
        # Do not drop a whole paragraph for an embedded stock sentence —
        # filter at sentence level below.
        kept = []
        for s in sentences(p):
            s = normalize_stem_sent(s)
            if FILLER_PARA.match(s) or STOCK_META.search(s):
                continue
            if re.fullmatch(r"The statement is (true|false)\.?", s, re.I):
                continue
            if re.fullmatch(r"So the statement is (True|False)\.?", s):
                continue
            low = s.lower()
            if any(low.startswith(b) for b in BANNED_SUBSTR):
                continue
            kept.append(s)
        if not kept:
            continue
        paras.append(" ".join(kept))
    out: list[str] = []
    seen: set[str] = set()
    for p in paras:
        key = normalize_ws(p).lower()[:120]
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
    return out


def stmt_tokens(statement: str) -> set[str]:
    stop = {
        "the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
        "and", "or", "of", "to", "in", "on", "for", "with", "by", "from",
        "that", "this", "these", "those", "it", "its", "as", "at", "not",
        "can", "may", "must", "does", "do", "did", "has", "have", "had",
        "when", "who", "which", "than", "into", "also", "only", "all",
        "any", "own", "more", "most", "such", "their", "they", "them",
    }
    return {
        w
        for w in re.findall(r"[a-z][a-z-]{2,}", statement.lower())
        if w not in stop
    }


def score_sentence(sent: str, tokens: set[str]) -> int:
    words = set(re.findall(r"[a-z][a-z-]{2,}", sent.lower()))
    overlap = len(words & tokens)
    # Boost concrete example / counterexample sentences
    boost = 0
    sl = sent.lower()
    for tip in (
        "printer",
        "vehicle",
        "restaurant",
        "household",
        "hiring",
        "hire",
        "personnel",
        "trading name",
        "routinely",
        "even if",
        "does not",
        "do not",
        "instead",
        "rather than",
        "for example",
        "for instance",
    ):
        if tip in sl and any(tip in t or tip.split()[0] in tokens for t in tokens):
            boost += 2
        elif tip in sl and tip.split()[0] in tokens:
            boost += 3
    # Penalize residual meta / wrap sentences
    if STOCK_META.search(sent) or sent.lower().startswith("so the claim"):
        boost -= 8
    if sent.lower().startswith("on that basis"):
        boost -= 8
    return overlap * 3 + boost


def rank_sentences(paras: list[str], statement: str) -> list[str]:
    tokens = stmt_tokens(statement)
    sents: list[str] = []
    for p in paras:
        for s in sentences(p):
            if s not in sents and not STOCK_META.search(s):
                sents.append(s)
    ranked = sorted(
        enumerate(sents),
        key=lambda iv: (-score_sentence(iv[1], tokens), iv[0]),
    )
    return [s for _, s in ranked]


def claim_snippet(statement: str, limit: int = 90) -> str:
    s = normalize_ws(statement or "")
    if len(s) > limit:
        s = s[: limit - 1].rstrip() + "…"
    return s


def noun_hook(statement: str) -> str:
    """Pull a short noun phrase for statement-tied fallbacks."""
    pats = [
        r"sole proprietorships?",
        r"sole proprietors?",
        r"limited partnerships?",
        r"limited partners?",
        r"general partnerships?",
        r"partnership agreements?",
        r"partnerships?",
        r"corporations?",
        r"shareholders?",
        r"share capital",
        r"retained profits?",
        r"trade credit",
        r"bank overdrafts?",
        r"overdrafts?",
        r"collateral",
        r"mortgages?",
        r"producer products?",
        r"consumer products?",
        r"unique selling propositions?",
        r"\bUSPs?\b",
        r"market share",
        r"customer satisfaction",
        r"loyalty (?:cards?|programmes?|programs?)",
        r"product[- ]orient(?:ed|ation)",
        r"market[- ]orient(?:ed|ation)",
        r"\bCRM\b",
        r"products?",
        r"internal(?:ly generated)? funds?",
        r"external (?:finance|creditors?|funds?)",
    ]
    earliest = None
    for pat in pats:
        m = re.search(pat, statement, re.I)
        if not m:
            continue
        if earliest is None or m.start() < earliest[0]:
            earliest = (m.start(), m.group(0))
    if earliest:
        return earliest[1]
    words = re.findall(r"[A-Za-z][A-Za-z-]{2,}", statement)
    return " ".join(words[:3]) if words else "the claim"


def fallback_paras(statement: str, truth: bool, case_id: str, letter: str) -> list[str]:
    focus = noun_hook(statement)
    sl = statement.lower()
    bits: list[str] = []

    if truth:
        bits.append(
            f"The stem’s point on {focus} matches how the concept is defined in this chapter."
        )
        bits.append(
            f"Keep that criterion for {focus} in view when you judge the wording."
        )
        if any(k in sl for k in ("always", "never", "only", "exclusively")):
            bits.append(
                f"Even with strong wording, the claim still lines up with how {focus} is defined here."
            )
    else:
        bits.append(
            f"The stem’s point on {focus} collides with how the concept is defined in this chapter."
        )
        if "service" in sl and "product" in sl and ("only" in sl or "exclud" in sl or "physical" in sl):
            bits.append(
                "A consultancy hour or maintenance visit sold to a customer is still a product in marketing terms."
            )
        elif "printer" in sl:
            bits.append(
                "A printer bought for office use by a business is a producer product even when households also buy similar models."
            )
        elif "producer" in sl and ("factory" in sl or "packaging" in sl or "manufactur" in sl):
            bits.append(
                "Buyer type decides the label: sold to another firm it is a producer product; sold to a household it is not."
            )
        elif "consumer" in sl and ("packaging" in sl or "shelf" in sl or "factory" in sl or "always" in sl):
            bits.append(
                "A business buyer makes the same item a producer product even if households are the most visible end users."
            )
        elif "sole" in sl and ("legal person" in sl or "corporate" in sl or "tax" in sl or "trading name" in sl):
            bits.append(
                "A sole trader is not a separate legal person, so corporate personality does not attach from a trading name alone."
            )
        elif "hire" in sl or "personnel" in sl or "employee" in sl:
            bits.append(
                "Sole traders routinely hire staff; lack of separate legal personality does not ban employment."
            )
        elif "limited partner" in sl and ("manag" in sl or "day-to-day" in sl):
            bits.append(
                "Active management usually breaks the limited-partner pattern; the liability cap is tied to staying out of control."
            )
        elif "anonym" in sl or ("deleting" in sl and "data" in sl) or "crm" in sl:
            bits.append(
                "Loyalty cards and follow-up coupons work because the firm can recognise returning customers."
            )
        else:
            bits.append(
                f"Restore the textbook criterion for {focus} and the assertion no longer describes the case."
            )

    if seed(case_id, letter, "fb") % 2 and len(bits) > 1:
        bits = [bits[0], bits[-1]] + bits[1:-1]
    return bits


def length_tier(case_id: str, letter: str, letter_idx: int, difficulty: str) -> str:
    """Assign short / medium / long so each case mixes lengths."""
    # Rotate a pattern per case so A–E are not uniform
    patterns = [
        ("short", "medium", "long", "medium", "short"),
        ("medium", "short", "long", "short", "medium"),
        ("long", "short", "medium", "long", "short"),
        ("short", "long", "medium", "short", "long"),
        ("medium", "long", "short", "medium", "long"),
        ("long", "medium", "short", "long", "medium"),
    ]
    pat = patterns[seed(case_id, "pat") % len(patterns)]
    tier = pat[letter_idx]
    # Slight difficulty nudge: 3/5 prefers medium/long
    if difficulty.startswith("3") and tier == "short" and seed(case_id, letter, "nudge") % 3 == 0:
        tier = "medium"
    if difficulty.startswith("1") and tier == "long" and seed(case_id, letter, "nudge") % 2 == 0:
        tier = "medium"
    return tier


def pack_tier(
    paras: list[str],
    tier: str,
    case_id: str,
    letter: str,
    statement: str = "",
    truth: bool = True,
) -> str:
    """Pack teaching paragraphs into short / medium / longer bodies."""
    # Prefer statement-tied sentences first, then fall back to original order blend
    ranked = rank_sentences(paras, statement) if statement else []
    chronological: list[str] = []
    for p in paras:
        for s in sentences(p):
            if s not in chronological:
                chronological.append(s)

    # Blend: for short, use ranked; for medium/long, keep chrono but promote top ranked if buried
    if tier == "short":
        sents = ranked or chronological
    else:
        sents = chronological[:]
        if ranked:
            top = ranked[0]
            if top in sents:
                sents.remove(top)
                sents.insert(0, top)

    if tier == "short":
        # 1 short paragraph: 1–2 statement-tied sentences, body ~80–180 chars
        take: list[str] = []
        for s in sents:
            take.append(s)
            body = " ".join(take)
            if len(body) >= 90:
                break
            if len(take) >= 2:
                break
        if not take and sents:
            take = [sents[0]]
        body = " ".join(take)
        if len(body) > 240 and len(take) > 1:
            # Prefer the highest-scoring single sentence that is long enough
            for s in take:
                if len(s) >= 80:
                    body = s
                    break
            else:
                body = take[0]
        # FALSE short letters need a concrete correction when possible
        if not truth and len(sents) > len(take):
            for s in sents[len(take) :]:
                if any(
                    k in s.lower()
                    for k in (
                        "not",
                        "instead",
                        "rather",
                        "still",
                        "routinely",
                        "even if",
                        "does not",
                        "do not",
                        "cannot",
                        "counter",
                    )
                ):
                    if s not in body:
                        cand = (body + " " + s).strip()
                        if len(cand) <= 280:
                            body = cand
                            break
        return body

    if tier == "medium":
        if len(sents) >= 3:
            mid = 1 if len(sents[0]) > 120 else 2
            p1 = " ".join(sents[:mid])
            p2 = " ".join(sents[mid : mid + 2])
            return f"{p1}\n\n{p2}"
        if len(sents) == 2:
            return f"{sents[0]}\n\n{sents[1]}"
        if len(sents) == 1:
            return sents[0]
        return ""

    # long: 3–4 short paragraphs
    chunks: list[str] = []
    for s in sents[:4]:
        chunks.append(s)
    if len(chunks) < 3:
        for s in chronological:
            if s not in chunks:
                chunks.append(s)
            if len(chunks) >= 3:
                break
    if len(chunks) >= 4:
        return "\n\n".join(chunks[:4])
    if len(chunks) >= 2:
        return "\n\n".join(chunks)
    return chunks[0] if chunks else ""


def build_expl(
    old_expl: str,
    statement: str,
    truth: bool,
    case_id: str,
    letter: str,
    letter_idx: int,
    difficulty: str,
) -> str:
    prefix = "TRUE —" if truth else "FALSE —"
    verd = "True" if truth else "False"
    closer = f"So the statement is {verd}."

    paras = clean_body_paras(old_expl)
    if not paras or sum(len(sentences(p)) for p in paras) < 1:
        paras = fallback_paras(statement, truth, case_id, letter)

    # Ensure enough raw material for long tier
    tier = length_tier(case_id, letter, letter_idx, difficulty)
    n_sents = sum(len(sentences(p)) for p in paras)
    if tier == "long" and n_sents < 3:
        for extra in fallback_paras(statement, truth, case_id, letter + "x"):
            if extra not in paras and all(extra != p for p in paras):
                # Avoid exact duplicate sentences
                if not any(extra in p for p in paras):
                    paras.append(extra)
            if sum(len(sentences(p)) for p in paras) >= 3:
                break
    if tier == "medium" and n_sents < 2:
        for extra in fallback_paras(statement, truth, case_id, letter + "y"):
            if not any(extra in p for p in paras):
                paras.append(extra)
            if sum(len(sentences(p)) for p in paras) >= 2:
                break

    body = pack_tier(paras, tier, case_id, letter, statement, truth).strip()
    if not body:
        body = fallback_paras(statement, truth, case_id, letter)[0]

    # Final ban sweep
    low = body.lower()
    for b in BANNED_SUBSTR:
        if b in low and b not in ("the statement is true.", "the statement is false."):
            body = pack_tier(
                fallback_paras(statement, truth, case_id, letter + "z"),
                tier if tier != "long" else "medium",
                case_id,
                letter,
                statement,
                truth,
            ).strip()
            break

    # Body length soft targets
    if len(body) < 80:
        extras = [
            s
            for p in paras
            for s in sentences(p)
            if s not in body and not STOCK_META.search(s)
        ]
        for s in extras:
            body = (body + " " + s).strip()
            if len(body) >= 90:
                break
        if len(body) < 80:
            for s in fallback_paras(statement, truth, case_id, letter + "thin"):
                if s not in body:
                    body = (body + " " + s).strip()
                if len(body) >= 90:
                    break

    if tier == "short" and len(body) > 260:
        # Keep the best-scoring lead sentence(s)
        ranked = rank_sentences([body], statement)
        body = ranked[0] if ranked and len(ranked[0]) >= 80 else " ".join(sentences(body)[:2])

    # Optional short setup for some longer letters only
    if tier == "long" and seed(case_id, letter, "setup") % 7 == 0:
        focus = noun_hook(statement)
        # Skip vague hooks that make the setup look mistargeted
        if focus.lower() not in {"product", "the claim", "claim"}:
            setup = (
                f"Start from how this chapter defines {focus}."
                if truth
                else f"Start from how this chapter defines {focus} — the claim overshoots it."
            )
            if setup.lower() not in body.lower():
                body = setup + "\n\n" + body

    body = body.strip()
    body = strip_trail(body)
    return f"{prefix} {body}\n\n{closer}"


def audit_case(case: dict) -> list[str]:
    errs: list[str] = []
    tiers_proxy: list[int] = []
    for i, (k, e) in enumerate(zip(case["answer_key"], case["tactical_explanations"])):
        letter = "ABCDE"[i]
        want = "TRUE —" if k else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: bad prefix")
        verd = "True" if k else "False"
        if not e.rstrip().endswith(f"So the statement is {verd}."):
            errs.append(f"{case['case_id']} {letter}: bad closer")
        low = e.lower()
        for b in (
            "settle the letter",
            "nothing exotic",
            "held against the chapter test",
            "the statement is true.",
            "the statement is false.",
        ):
            # allow only in closer for So the statement…
            if b in ("the statement is true.", "the statement is false."):
                # strip closer then check
                body = CLOSER_RE.sub("", e).strip()
                if b in body.lower():
                    errs.append(f"{case['case_id']} {letter}: banned {b}")
            elif b in low:
                errs.append(f"{case['case_id']} {letter}: banned {b}")
        body = PREFIX.sub("", CLOSER_RE.sub("", e).strip()).strip()
        pcount = len(split_paras(body))
        tiers_proxy.append(pcount)
        if len(body) < 60:
            errs.append(f"{case['case_id']} {letter}: thin body {len(body)}")
    # Within-case mix: not all same paragraph count
    if len(set(tiers_proxy)) < 2:
        errs.append(f"{case['case_id']}: flat para mix {tiers_proxy}")
    return errs


def rewrite_file(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    old = git_show_json(f"{PARENT}:src/data/{path.name}")
    assert len(old) == len(data), f"length mismatch {path.name}"
    n = unlock_n(len(data))
    locked_snap = json.loads(json.dumps(data[n:]))

    lens: list[int] = []
    para_counts: list[int] = []
    errs: list[str] = []
    short_n = med_n = long_n = 0

    for i in range(n):
        case = data[i]
        old_case = old[i]
        assert case["case_id"] == old_case["case_id"]
        assert case["statements"] == old_case["statements"]
        assert case["answer_key"] == old_case["answer_key"]

        new_expls = []
        for j, (stmt, truth) in enumerate(zip(case["statements"], case["answer_key"])):
            letter = "ABCDE"[j]
            tier = length_tier(
                case["case_id"], letter, j, str(case.get("difficulty_level", "2/5"))
            )
            if tier == "short":
                short_n += 1
            elif tier == "medium":
                med_n += 1
            else:
                long_n += 1
            expl = build_expl(
                old_case["tactical_explanations"][j],
                stmt,
                bool(truth),
                case["case_id"],
                letter,
                j,
                str(case.get("difficulty_level", "2/5")),
            )
            new_expls.append(expl)
            lens.append(len(expl))
            body = PREFIX.sub("", CLOSER_RE.sub("", expl).strip()).strip()
            para_counts.append(len(split_paras(body)))
        case["tactical_explanations"] = new_expls
        errs.extend(audit_case(case))

    assert data[n:] == locked_snap, f"locked mutated in {path.name}"
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {
        "file": path.name,
        "unlocked_cases": n,
        "letters": n * 5,
        "len_min": min(lens),
        "len_max": max(lens),
        "len_avg": sum(lens) // len(lens),
        "para_dist": dict(Counter(para_counts)),
        "tiers": {"short": short_n, "medium": med_n, "long": long_n},
        "audit_errs": len(errs),
        "audit_sample": errs[:12],
    }


def main() -> None:
    for path in FILES:
        info = rewrite_file(path)
        print(json.dumps(info, indent=2))


if __name__ == "__main__":
    main()
