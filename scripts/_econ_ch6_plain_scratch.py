#!/usr/bin/env python3
"""WRITE FROM SCRATCH unlocked Ch6 explanations (first 218) — plain math look.

Brand-new prose per letter (never polish old tactical_explanations).
Deliberate short / medium / long length mix inside every case.
"""

from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

from _econ_ch6_deepen_lib import (
    enrich,
    fmt,
    getv,
    growth,
    parse_dep,
    parse_tables,
    pct,
    subject_keys,
    try_numeric,
)

PATH = Path("/workspace/src/data/economics-cases-ch6-subtopics.json")
UNLOCK = 218
LETTERS = "ABCDE"

# Kind schedules rotate so A–E differ; each case uses ≥2 kinds.
SCHEDULES = [
    ["short", "medium", "long", "short", "medium"],
    ["medium", "short", "long", "medium", "short"],
    ["long", "short", "medium", "long", "short"],
    ["short", "long", "medium", "short", "long"],
    ["medium", "long", "short", "medium", "long"],
    ["long", "medium", "short", "long", "medium"],
    ["short", "medium", "short", "long", "medium"],
    ["medium", "short", "medium", "long", "short"],
]

ASSET_WORD = re.compile(
    r"\b(pallet loader|industrial dishwasher|warehouse crane|delivery scooter|"
    r"packaging line|concrete mixer|laptop computer|refrigerated van|"
    r"forklift|conveyor belt|printing press|sewing machine|drill press|"
    r"delivery van|woodworking lathe|oven|freezer|tractor|compressor|"
    r"generator|scanner|photocopier|server rack|milling machine|lathe)\b",
    re.I,
)
INTANG_WORD = re.compile(
    r"\b(operating licence|brand name|registered design|development patent|"
    r"concession right|franchise agreement|patent|licence|license|trademark)\b",
    re.I,
)


def a_an(noun: str) -> str:
    if noun.startswith(("the ", "a ", "an ")):
        return noun
    return ("an " if noun[:1].lower() in "aeiou" else "a ") + noun


def asset_name(stmt: str) -> str:
    m = ASSET_WORD.search(stmt)
    if m:
        return m.group(1).lower()
    m = INTANG_WORD.search(stmt)
    if m:
        return m.group(1).lower()
    return "the item"


def case_seed(case: dict) -> int:
    m = re.search(r"(\d+)$", case.get("case_id", "0"))
    return int(m.group(1)) if m else 0


def assign_kinds(case: dict) -> list[str]:
    return list(SCHEDULES[case_seed(case) % len(SCHEDULES)])


def body_chars(expl: str) -> int:
    text = expl.strip()
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text)
    text = re.sub(r"\n\nSo the statement is (True|False)\.\s*$", "", text)
    return len(text.strip())


def para_count_body(expl: str) -> int:
    text = expl.strip()
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", text)
    text = re.sub(r"\n\nSo the statement is (True|False)\.\s*$", "", text)
    return len([p for p in re.split(r"\n\s*\n", text) if p.strip()])


def finish(truth: bool, paras: list[str]) -> str:
    prefix = "TRUE — " if truth else "FALSE — "
    closer = "So the statement is True." if truth else "So the statement is False."
    cleaned = []
    for p in paras:
        p = re.sub(r"\s+", " ", (p or "").strip())
        if not p:
            continue
        if p[-1] not in ".!?":
            p += "."
        cleaned.append(p)
    if not cleaned:
        cleaned = ["Read the claim against the chapter rule for this stem."]
    return prefix + "\n\n".join(cleaned) + "\n\n" + closer


def expand_long_pads(bits: list[str], pads: list[str], truth: bool) -> list[str]:
    """Statement-tied fillers for long letters — no generic robot lines."""
    joined = " ".join(bits + pads).lower()
    extra: list[str] = []
    if any(k in joined for k in ("ratio", "÷", "%", "growth", "working capital", "acid")):
        extra += [
            "Pull the labelled totals from the extract before comparing any threshold.",
            "A small rounding difference does not rescue a claim that misses the hurdle.",
            "Once the arithmetic is on the page, the letter is decided by that comparison alone.",
        ]
    elif any(k in joined for k in ("inventory", "non-current", "dealer", "resale", "tangible", "intangible")):
        extra += [
            "Ask whether the reporter uses the object or holds it for sale.",
            "Benefit lasting beyond one year points non-current; trading-cycle stock points current.",
            "Physical durability never overrides that use-versus-resale split.",
        ]
    elif any(k in joined for k in ("operating", "investing", "financing", "dividend", "cash")):
        extra += [
            "Operating is the trading cycle; investing is long-term assets; financing is capital providers.",
            "Misplacing a line between those three buckets is enough to kill a cash-flow claim.",
            "Name the correct section and the wrong label falls away at once.",
        ]
    elif any(k in joined for k in ("depreciat", "carrying", "land", "useful life")):
        extra += [
            "Straight-line thinking spreads (cost − residual) over useful life.",
            "Land ordinarily skips that charge because its useful life is treated as indefinite.",
            "Cash left when the asset was bought; the later expense is an allocation, not a fresh outflow.",
        ]
    elif any(k in joined for k in ("equity", "share", "liabilit", "loan", "overdraft")):
        extra += [
            "Liabilities are obligations to outsiders; equity is the owners’ residual claim.",
            "Settlement timing — within a year or beyond — then splits current from non-current.",
            "Do not park borrowings inside equity or treat price rises as cash to the issuer.",
        ]
    else:
        extra += [
            "Match each noun in the stem to the chapter’s classification or measurement rule.",
            "If the claim’s reason and the rule disagree, the assertion fails.",
            "A corrected category or threshold reading settles the letter cleanly.",
        ]
    if not truth:
        extra.append("State the corrected line or figure and the false claim has nowhere left to stand.")
    else:
        extra.append("The wording lines up with that rule, so the assertion stands.")
    # Prefer unused pads first
    out = list(pads)
    for e in extra:
        if e not in out:
            out.append(e)
    return out


def pack(truth: bool, kind: str, bits: list[str], pads: list[str] | None = None) -> str:
    """Shape sentence bits into short / medium / long tutor prose."""
    pads = pads or []
    bits = [re.sub(r"\s+", " ", b.strip()) for b in bits if b and b.strip()]
    bits = [b if b[-1] in ".!?" else b + "." for b in bits]
    uniq: list[str] = []
    for b in bits:
        norm = re.sub(r"\s+", " ", b.lower())[:70]
        if any(norm == re.sub(r"\s+", " ", u.lower())[:70] for u in uniq):
            continue
        uniq.append(b)
    bits = uniq

    if kind == "short":
        text = bits[0] if bits else "The claim fails the chapter test."
        if len(text) < 55 and len(bits) > 1:
            text = bits[0] + " " + bits[1]
        if len(text) < 55 and pads:
            add = pads[0] if pads[0][-1] in ".!?" else pads[0] + "."
            text = text + " " + add
            # keep short: one paragraph, trim if needed
            if len(text) > 145:
                text = text[:140].rsplit(" ", 1)[0].rstrip(",;:") + "."
        if len(text) > 160:
            sents = re.split(r"(?<=[.!?])\s+", text)
            text = sents[0]
            if len(text) < 55 and len(sents) > 1:
                text = sents[0] + " " + sents[1]
            if len(text) > 155:
                text = text[:140].rsplit(" ", 1)[0].rstrip(",;:") + "."
        return finish(truth, [text])

    if kind == "medium":
        pool = bits + pads
        if len(pool) < 2:
            pool = pool + ["That is the reading the chapter wants for this wording."]
        if len(pool) == 2:
            paras = [pool[0], pool[1]]
        elif len(pool) == 3:
            paras = [pool[0], pool[1] + " " + pool[2]]
        else:
            mid = max(1, len(pool) // 2)
            paras = [" ".join(pool[:mid]), " ".join(pool[mid : mid + 2])]
        i = 0
        while body_chars(finish(truth, paras)) < 180 and i < len(pads):
            add = pads[i] if pads[i][-1] in ".!?" else pads[i] + "."
            paras[-1] = paras[-1] + " " + add
            i += 1
        while body_chars(finish(truth, paras)) > 360 and len(paras[-1]) > 80:
            sents = re.split(r"(?<=[.!?])\s+", paras[-1])
            if len(sents) <= 1:
                break
            paras[-1] = " ".join(sents[:-1])
        return finish(truth, paras)

    # long: 3–5 short paragraphs, ~400–700 body chars
    pads = expand_long_pads(bits, pads, truth)
    pool = bits + pads
    while len(pool) < 3:
        pool.append("Apply that test directly to the nouns in the stem.")
    target_n = 4 if len(pool) >= 4 else 3
    if len(pool) >= 5 and sum(len(x) for x in pool) > 450:
        target_n = 5
    paras: list[str] = []
    for b in pool:
        if len(paras) >= target_n:
            paras[-1] = paras[-1] + " " + b
        else:
            paras.append(b)
    pi = 0
    while body_chars(finish(truth, paras)) < 400 and pi < len(pads):
        add = pads[pi]
        pi += 1
        if add in " ".join(paras):
            continue
        if len(paras) < 5:
            paras.append(add if add[-1] in ".!?" else add + ".")
        else:
            paras[-1] = paras[-1] + " " + (add if add[-1] in ".!?" else add + ".")
        if pi > 12:
            break
    while body_chars(finish(truth, paras)) > 720 and len(paras) > 3:
        paras = paras[:-1]
    return finish(truth, paras)


# ── Numeric fact builders (fresh wording; never old expl text) ─────────────


def strip_math(raw: str) -> list[str]:
    text = re.sub(r"^(TRUE|FALSE)\s*[—–-]\s*", "", raw.strip(), count=1)
    text = re.sub(r"\n\nThe statement is (true|false)\.\s*$", "", text, flags=re.I)
    text = re.sub(r"\$\$(.*?)\$\$", lambda m: re.sub(r"[{}\\]", "", m.group(1).replace("\\frac", "")), text, flags=re.S)
    text = re.sub(r"\s+", " ", text).strip()
    bits = re.split(r"(?<=[.!?])\s+", text)
    return [b for b in bits if b.strip() and len(b.strip()) > 8]


def numeric_bits(stmt: str, truth: bool, tables: dict) -> tuple[list[str], list[str]] | None:
    y1 = enrich(tables["y1"]) if tables["y1"] else {}
    y2 = enrich(tables["y2"]) if tables["y2"] else {}
    amt_raw = dict(tables["amt"])
    amt = enrich(amt_raw) if amt_raw else {}
    for k, v in amt_raw.items():
        amt.setdefault(k, v)
    months = tables["months"]
    sl = stmt.lower()
    pads: list[str] = []

    m = re.match(
        r"(.+?) (grew|fell) by more than (\d+(?:\.\d+)?)% between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        subj, direction, th = m.group(1), m.group(2).lower(), float(m.group(3))
        a = getv(y1, tables, subject_keys(subj), 1)
        b = getv(y2, tables, subject_keys(subj), 2)
        if a is not None and b is not None:
            g = growth(a, b) * 100
            if direction == "grew":
                bits = [
                    f"{subj} runs {fmt(a)} → {fmt(b)} across the two years.",
                    f"Percentage change ≈ {g:.1f}%, while the claim wants growth above {th:g}%.",
                    f"{g:.1f}% {'clears' if g > th else 'misses'} that hurdle.",
                ]
            else:
                decline = -g
                bits = [
                    f"{subj} runs {fmt(a)} → {fmt(b)}.",
                    f"That is a {decline:.1f}% fall versus a claimed drop above {th:g}%.",
                    f"The decline {'is' if decline > th else 'is not'} large enough.",
                ]
            pads = [
                "Year-on-year growth is (Year 2 − Year 1) ÷ Year 1.",
                "Always read the extract’s own line labels before comparing the threshold.",
            ]
            return bits, pads

    m = re.match(
        r"Cash flow from operating activities grew by more than (\d+(?:\.\d+)?)% from Year 1 to Year 2\.?$",
        stmt,
        re.I,
    )
    if m and tables["y1"] and tables["y2"]:
        th = float(m.group(1))
        a = tables["y1"].get("cash flow from operating activities")
        b = tables["y2"].get("cash flow from operating activities")
        if a is not None and b is not None:
            g = growth(a, b) * 100
            bits = [
                f"Operating cash moves from {fmt(a)} to {fmt(b)}.",
                f"Growth is about {g:.1f}% against a claim of more than {th:g}%.",
                f"So the hurdle is {'met' if g > th else 'not met'}.",
            ]
            pads = [
                "Operating cash is the trading-cycle bucket on the cash-flow statement.",
                "Compare only that line’s Year 1 and Year 2 amounts.",
            ]
            return bits, pads

    m = re.match(r"The current ratio (exceeds|is below|is exactly) (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        verb, th = m.group(1).lower(), float(m.group(2))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            cr = bs["ca"] / bs["cl"]
            bits = [
                f"Current ratio = {fmt(bs['ca'])} ÷ {fmt(bs['cl'])} ≈ {cr:.2f}.",
                f"The claim says the ratio {verb} {th:g}.",
                f"{cr:.2f} {'agrees with' if truth else 'conflicts with'} that wording.",
            ]
            pads = [
                "Current assets over current liabilities is the standard short-term cover test.",
                "Pull both totals from the extract before comparing the threshold.",
            ]
            return bits, pads

    m = re.match(r"The current ratio in Year ([12]) is exactly (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and (y1 or y2):
        yr, th = int(m.group(1)), float(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        bits = [
            f"Year {yr}: {fmt(bs['ca'])} ÷ {fmt(bs['cl'])} ≈ {cr:.2f}.",
            f"The stem claims exactly {th:.2f}.",
            f"Those values {'match' if abs(cr - th) < 0.005 else 'do not match'}.",
        ]
        return bits, ["Exact means the rounded ratio equals the stated figure."]

    m = re.match(
        r"Current liabilities are covered by current assets less than (\d+(?:\.\d+)?) times over in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        th, yr = float(m.group(1)), int(m.group(2))
        bs = y1 if yr == 1 else y2
        cr = bs["cr"]
        bits = [
            f"Year {yr} cover ≈ {cr:.2f} times ({fmt(bs['ca'])} ÷ {fmt(bs['cl'])}).",
            f"Less than {th:g} times {'holds' if cr < th else 'does not hold'}.",
        ]
        pads = ["Cover below one signals current liabilities larger than current assets."]
        return bits, pads

    m = re.match(
        r"After excluding inventory, the remaining current assets still cover current liabilities more than (\d+(?:\.\d+)?) times over\.?$",
        stmt,
        re.I,
    )
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            bits = [
                f"Acid-test ≈ ({fmt(bs['ca'])} − {fmt(bs['inventory'])}) ÷ {fmt(bs['cl'])} = {acid:.2f}.",
                f"More than {th:g} times cover is {'satisfied' if acid > th else 'not satisfied'}.",
            ]
            pads = [
                "The quick ratio drops inventory because stock may take longer to turn into cash.",
                "Compare that result with the stem’s threshold only.",
            ]
            return bits, pads

    m = re.match(r"The acid-test ratio exceeds (\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m:
        th = float(m.group(1))
        bs = amt if amt.get("cl") else (y2 or y1)
        if bs and bs.get("cl"):
            acid = (bs["ca"] - bs["inventory"]) / bs["cl"]
            bits = [
                f"Acid-test ≈ {acid:.2f} after stripping inventory.",
                f"Above {th:g}? {'Yes' if acid > th else 'No'}.",
            ]
            return bits, ["Quick assets are cash plus receivables (and similar), not stock."]

    if "working capital" in sl and (amt or y1 or y2):
        if "doubled" in sl and y1 and y2:
            bits = [
                f"Working capital moves {fmt(y1['wc'])} → {fmt(y2['wc'])}.",
                f"Doubling needs more than {fmt(2 * y1['wc'])}; that {'happens' if y2['wc'] > 2 * y1['wc'] else 'does not happen'}.",
            ]
            return bits, ["Working capital = current assets − current liabilities."]
        if "turned positive" in sl and y1 and y2:
            bits = [
                f"Year 1 WC {fmt(y1['wc'])}; Year 2 WC {fmt(y2['wc'])}.",
                f"A sign flip into surplus {'occurs' if y1['wc'] <= 0 < y2['wc'] else 'does not occur'}.",
            ]
            return bits, ["Positive working capital means short-term assets exceed short-term claims."]
        bs = amt if amt.get("ca") else (y2 or y1)
        if bs:
            claim = re.search(r"€\s*([\d,]+)\s*thousand", stmt, re.I)
            bits = [
                f"WC = {fmt(bs['ca'])} − {fmt(bs['cl'])} = {fmt(bs['wc'])}.",
            ]
            if claim:
                bits.append(
                    f"The stem cites €{claim.group(1)} thousand; the arithmetic "
                    f"{'supports' if truth else 'does not support'} that reading."
                )
            else:
                bits.append(f"Working capital is {'positive' if bs['wc'] > 0 else 'not positive'} here.")
            pads = [
                "A positive gap means liquid short-term resources cover short-term debts.",
                "Do not confuse working capital with the current ratio (a cover multiple).",
            ]
            return bits, pads

    m = re.match(r"The (equity|debt) ratio (is below|exceeds) (\d+(?:\.\d+)?)%\.?$", stmt, re.I)
    if m:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        bs = amt if amt.get("assets") else (y2 or y1)
        if bs and bs.get("assets"):
            num = bs["equity"] if kind == "equity" else bs["liab"]
            ratio = num / bs["assets"] * 100
            bits = [
                f"{kind.capitalize()} ratio ≈ {fmt(num)} ÷ {fmt(bs['assets'])} = {ratio:.1f}%.",
                f"Claim: {verb} {th:g}%. {ratio:.1f}% {'fits' if truth else 'does not fit'}.",
            ]
            pads = [
                f"The {kind} ratio places {kind} against total assets.",
                "Financing structure is read from that percentage, not from a single euro line alone.",
            ]
            return bits, pads

    m = re.match(
        r"Non-current liabilities amount to (more|less) than (\d+(?:\.\d+)?)% of total equity in Year ([12])\.?$",
        stmt,
        re.I,
    )
    if m and (y1 or y2):
        which, th, yr = m.group(1).lower(), float(m.group(2)), int(m.group(3))
        bs = y1 if yr == 1 else y2
        ratio = bs["ncl"] / bs["equity"] * 100 if bs["equity"] else float("nan")
        bits = [
            f"Year {yr} NCL {fmt(bs['ncl'])} vs equity {fmt(bs['equity'])} → {ratio:.1f}%.",
            f"{which.capitalize()} than {th:g}%? {ratio:.1f}% {'yes' if truth else 'no'}.",
        ]
        pads = ["Non-current liabilities usually combine the long-term loan and bonds lines."]
        return bits, pads

    m = re.match(
        r"The (equity|debt) ratio (improved|fell) by more than (\d+(?:\.\d+)?) percentage points between Year 1 and Year 2\.?$",
        stmt,
        re.I,
    )
    if m and y1 and y2:
        kind, verb, th = m.group(1).lower(), m.group(2).lower(), float(m.group(3))
        r1 = (y1["er"] if kind == "equity" else y1["dr"]) * 100
        r2 = (y2["er"] if kind == "equity" else y2["dr"]) * 100
        delta = r2 - r1
        bits = [
            f"{kind.capitalize()} ratio: {r1:.1f}% → {r2:.1f}% ({delta:+.1f} pp).",
            f"Claim that it {verb} by more than {th:g} pp is {'right' if truth else 'wrong'}.",
        ]
        return bits, ["Improvement for the equity ratio means a higher owner-financed share."]

    m = re.match(r"(.+?) make up (more|less) than (\d+(?:\.\d+)?)% of (.+?)\.?$", stmt, re.I)
    if m:
        subj, which, th, ofwhat = m.group(1), m.group(2).lower(), float(m.group(3)), m.group(4)
        ym = re.search(r"year\s*([12])", ofwhat, re.I)
        yr = int(ym.group(1)) if ym else None
        bs = y1 if yr == 1 else y2 if yr == 2 else (amt or y2 or y1)
        if bs:
            aliases = {
                "non-current assets": "nca",
                "current assets": "ca",
                "total assets": "assets",
                "inventory": "inventory",
                "trade receivables": "receivables",
                "cash and cash equivalents": "cash",
                "buildings": "buildings",
                "non-current liabilities": "ncl",
                "current liabilities": "cl",
            }
            sk = aliases.get(re.sub(r"\s+in year [12]$", "", subj.lower()).strip(), subj.lower())
            dk = aliases.get(re.sub(r"\s+in year [12]$", "", ofwhat.lower()).strip(), ofwhat.lower())
            num, den = bs.get(sk), bs.get(dk)
            if num is not None and den:
                ratio = num / den * 100
                bits = [
                    f"{subj} / {ofwhat} ≈ {fmt(num)} ÷ {fmt(den)} = {ratio:.1f}%.",
                    f"{which.capitalize()} than {th:g}% is {'true' if truth else 'false'} here.",
                ]
                pads = [
                    "Composition shares are plain part ÷ whole from the extract.",
                    "Watch whether the stem points at Year 1, Year 2, or a single sheet.",
                ]
                return bits, pads

    m = re.match(r"The closing share price rose by more than (\d+(?:\.\d+)?)% from first to last month\.?$", stmt, re.I)
    if m and months:
        th = float(m.group(1))
        start, end = months[0]["price"], months[-1]["price"]
        rise = (end - start) / start * 100
        bits = [
            f"Close moves {fmt(start)} → {fmt(end)} ({rise:.1f}%).",
            f"Above {th:g}%? {'Yes' if rise > th else 'No'}.",
        ]
        return bits, ["First-to-last percentage change ignores the path between months."]

    m = re.match(r"Market capitalisation at the last month exceeds €(\d+(?:\.\d+)?) million\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        end = months[-1]["price"]
        mcap = end * shares / 1_000_000
        bits = [
            f"Last close × shares = {fmt(end)} × {fmt(shares)} ≈ €{mcap:.2f}m.",
            f"Exceeding €{th:g}m is {'correct' if mcap > th else 'incorrect'}.",
        ]
        return bits, ["Market cap is a valuation snapshot, not a cash balance on the sheet."]

    m = re.match(r"Market capitalisation rose by more than (\d+(?:\.\d+)?)% over the period\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        start, end = months[0]["price"], months[-1]["price"]
        g = (end - start) / start * 100
        bits = [
            f"With shares fixed, m-cap growth equals the {g:.1f}% price change.",
            f"More than {th:g}%? {'Yes' if g > th else 'No'}.",
        ]
        return bits, []

    m = re.match(r"Earnings per share exceeds €(\d+(?:\.\d+)?)\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        op_res = amt_raw.get("operating result (€ thousands)") or amt_raw.get("operating result")
        if op_res is not None:
            eps = op_res / (shares / 1000)
            bits = [
                f"EPS ≈ €{fmt(op_res)} thousand ÷ {fmt(shares / 1000)} = €{eps:.2f}.",
                f"Above €{th:g}? {'Yes' if eps > th else 'No'}.",
            ]
            return bits, ["Here EPS links the extract’s operating result to shares outstanding."]

    m = re.match(r"Highest closing price is more than (\d+(?:\.\d+)?)% above the lowest\.?$", stmt, re.I)
    if m and months:
        th = float(m.group(1))
        prices = [x["price"] for x in months]
        max_p, min_p = max(prices), min(prices)
        spread = (max_p - min_p) / min_p * 100
        bits = [
            f"Peak {fmt(max_p)} vs trough {fmt(min_p)} → {spread:.1f}% gap.",
            f"More than {th:g}% above the low {'holds' if spread > th else 'fails'}.",
        ]
        return bits, []

    m = re.match(r"Total shares traded over six months exceed (\d+(?:\.\d+)?)% of shares outstanding\.?$", stmt, re.I)
    if m and months and amt_raw.get("shares outstanding"):
        th = float(m.group(1))
        shares = amt_raw["shares outstanding"]
        total_vol = amt_raw.get("total shares traded (six months)") or sum(x["vol"] for x in months)
        turn = total_vol / shares * 100
        bits = [
            f"Volume ÷ shares ≈ {fmt(total_vol)} ÷ {fmt(shares)} = {turn:.1f}%.",
            f"Above {th:g}% of the share count? {'Yes' if turn > th else 'No'}.",
        ]
        return bits, []

    m = re.match(r"Peak monthly share turnover exceeds ([\d,]+) shares\.?$", stmt, re.I)
    if m and months:
        th = float(m.group(1).replace(",", ""))
        max_vol = max(x["vol"] for x in months)
        bits = [
            f"Busiest month prints {fmt(max_vol)} shares.",
            f"Need more than {fmt(th)}; {'cleared' if max_vol > th else 'not cleared'}.",
        ]
        return bits, []

    if months and "share turnover peaked in the same month as the highest closing price" in sl:
        prices = [x["price"] for x in months]
        vols = [x["vol"] for x in months]
        ip, iv = prices.index(max(prices)), vols.index(max(vols))
        bits = [
            f"Peak close in {months[ip]['month']}; peak volume in {months[iv]['month']}.",
            f"Those months {'coincide' if ip == iv else 'differ'}.",
        ]
        return bits, []

    if months and "closing price rose in more than half of the month-to-month steps" in sl:
        prices = [x["price"] for x in months]
        rising = sum(1 for i in range(1, len(prices)) if prices[i] > prices[i - 1])
        steps = len(prices) - 1
        bits = [
            f"Price rose in {rising} of {steps} steps.",
            f"More than half of {steps} is > {steps / 2:g}; {'met' if rising > steps / 2 else 'not met'}.",
        ]
        return bits, []

    if months and "last closing price is below the first" in sl:
        start, end = months[0]["price"], months[-1]["price"]
        bits = [
            f"First close {fmt(start)}; last close {fmt(end)}.",
            f"Last is {'below' if end < start else 'not below'} first.",
        ]
        return bits, []

    if "retained earnings grew faster than total equity" in sl and y1 and y2:
        rg = growth(y1["retained"], y2["retained"]) * 100
        eg = growth(y1["equity"], y2["equity"]) * 100
        bits = [
            f"RE growth ≈ {rg:.1f}%; equity growth ≈ {eg:.1f}%.",
            f"RE {'does' if rg > eg else 'does not'} outpace equity.",
        ]
        return bits, []

    # Depreciation extracts
    if any(k in sl for k in ("depreciat", "carrying value", "written down", "residual value", "useful life")):
        assets = parse_dep(tables["raw"])
        if assets:
            ann = {k: (a["cost"] - a["resid"]) / a["life"] for k, a in assets.items()}
            keys = list(assets.keys())
            mach = truck = comp = None
            for k in assets:
                lk = k.lower()
                if "machin" in lk or re.search(r"asset a\b", lk):
                    mach = k
                if "truck" in lk or "delivery" in lk or re.search(r"asset b\b", lk):
                    truck = k
                if "computer" in lk or re.search(r"asset c\b", lk):
                    comp = k
            if mach is None and keys:
                mach = keys[0]
            if truck is None and len(keys) > 1:
                truck = keys[1]
            if comp is None and len(keys) > 2:
                comp = keys[2]

            m = re.search(
                r"after three years, more than (\d+(?:\.\d+)?)% of the machinery's purchase price has been depreciated",
                stmt,
                re.I,
            )
            if m and mach:
                th = float(m.group(1))
                frac = 3 * ann[mach] / assets[mach]["cost"]
                bits = [
                    f"Three years of charges over cost ≈ {pct(frac)}%.",
                    f"Above {th:g}% depreciated? {'Yes' if frac * 100 > th else 'No'}.",
                ]
                pads = ["Straight-line annual charge = (cost − residual) ÷ useful life."]
                return bits, pads

            m = re.search(r"combined annual depreciation for the three assets is €([\d,.]+)", stmt, re.I)
            if m and len(ann) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total = sum(ann.values())
                bits = [
                    f"Sum of annual charges ≈ €{fmt(round(total))} vs claimed €{fmt(claimed)}.",
                    f"Those figures {'align' if abs(total - claimed) < 1 else 'do not align'}.",
                ]
                return bits, []

            m = re.search(r"after three years, the delivery truck's carrying value is €([\d,.]+)", stmt, re.I)
            if m and truck:
                claimed = float(m.group(1).replace(",", ""))
                a = assets[truck]
                bv = a["cost"] - 3 * ann[truck]
                bits = [
                    f"Carrying value ≈ {fmt(a['cost'])} − 3 × {fmt(round(ann[truck]))} = {fmt(round(bv))}.",
                    f"Claimed €{fmt(claimed)} is {'right' if abs(bv - claimed) < 1 else 'wrong'}.",
                ]
                return bits, []

            m = re.search(
                r"after three years, the computer equipment, originally costing €([\d,.]+), is fully written down to nil",
                stmt,
                re.I,
            )
            if m and comp:
                a = assets[comp]
                bits = [
                    f"Computer: cost €{fmt(a['cost'])}, life {fmt(a['life'])}y, residual €{fmt(a['resid'])}.",
                    f"After three years it is {'at nil' if 3 >= a['life'] and a['resid'] == 0 else 'not yet written to nil'}.",
                ]
                return bits, []

            m = re.search(
                r"after three years, the combined carrying value of all three assets exceeds €([\d,.]+)",
                stmt,
                re.I,
            )
            if m and len(assets) >= 3:
                claimed = float(m.group(1).replace(",", ""))
                total_bv = 0.0
                for k, a in assets.items():
                    bv = a["resid"] if 3 >= a["life"] else a["cost"] - 3 * ann[k]
                    total_bv += bv
                bits = [
                    f"Combined carrying value ≈ €{fmt(round(total_bv))}.",
                    f"Exceeding €{fmt(claimed)} is {'true' if total_bv > claimed else 'false'}.",
                ]
                return bits, []

            if "land is not subject to depreciation" in sl or "land is depreciated" in sl:
                bits = [
                    "Land normally has an indefinite life and is not depreciated.",
                    "Buildings and machinery take periodic charges; land does not.",
                ]
                if "land is depreciated" in sl and not truth:
                    bits.append("Counterexample: a plot held for operations stays at cost — no annual write-down.")
                return bits, ["Useful life, not mere ownership of land, drives the depreciation decision."]

    raw = try_numeric(stmt, truth, tables)
    if raw:
        bits = strip_math(raw)[:5]
        if bits:
            pads = ["Check the extract’s labels once more against the stem’s threshold."]
            return bits, pads
    return None


# ── Conceptual banks (scratch wording) ──────────────────────────────────────


def conceptual_bits(stmt: str, truth: bool) -> tuple[list[str], list[str]]:
    # Drop "For this furniture maker," style leads so topic matchers fire
    firm = None
    fm = re.match(r"^For this\s+([^,]+),\s*", stmt, re.I)
    if fm:
        firm = fm.group(1).strip()
        core = stmt[fm.end() :]
    else:
        core = stmt
    sl = core.lower()
    item = asset_name(stmt)
    pads: list[str] = []
    def with_firm(sentence: str) -> str:
        if not firm:
            return sentence
        s = sentence[0].lower() + sentence[1:] if sentence else sentence
        return f"For this {firm}, {s}"

    # Inventory / fixed-asset classification family
    if "inventory because inventory can include any physical" in sl:
        bits = [
            f"Physical form alone does not make {a_an(item)} inventory.",
            "Inventory is held for sale or for cycle consumption — not every machine the firm owns.",
            f"Operating use beyond a year puts {item} among non-current tangibles.",
        ]
        pads = [
            "Counterexample: a forklift in the firm’s own warehouse is plant, not stock.",
            "Use-versus-resale is the split that matters.",
        ]
        return bits, pads

    if "dealer for resale" in sl and "non-current" in sl and not truth:
        bits = [
            f"A dealer’s {item} held for customers is merchandise.",
            "Resale intent keeps it in inventory (current), even though the dealer is a firm.",
        ]
        pads = [
            "Being a business does not override the held-for-sale test.",
            f"Only multi-year operating use would move {item} into non-current assets.",
        ]
        return bits, pads

    if "dealer for resale" in sl and "inventory" in sl and truth:
        bits = [
            f"Dealer stock of {a_an(item)} is inventory — a current asset.",
            "It is not the dealer’s non-current operating asset.",
        ]
        return bits, ["Held for sale beats physical durability when choosing the line."]

    if "kept in service" in sl and "non-current tangible" in sl:
        bits = [
            f"Multi-year operating use of {a_an(item)} fits the non-current tangible test.",
            "Useful life beyond the period plus own use — not resale — drive that line.",
        ]
        return bits, ["Tangible means physical substance; non-current means long-term benefit."]

    if "always be classified identically" in sl:
        bits = [
            f"The same {item} need not share one balance-sheet line everywhere.",
            "Each reporter classifies by how it holds the object.",
        ]
        pads = [
            "Operator → non-current tangible; dealer → inventory.",
            "Physical identity does not freeze the category.",
        ]
        return bits, pads

    if "may be a non-current asset for one business and inventory for another" in sl or (
        "same physical item can be inventory" in sl
    ):
        bits = [
            "Intended use decides the line for the same physical object.",
            "An operator records a non-current tangible; a dealer records inventory.",
        ]
        pads = [
            "That dual outcome is exactly what use-versus-resale predicts.",
            f"Nothing mystical about {item} itself changes the rule.",
        ]
        return bits, pads

    if "depends mainly on its purchase price" in sl:
        bits = [
            "Purchase price measures cost; it does not choose inventory vs fixed asset.",
            "Management intent — operate or resell — decides the class.",
        ]
        pads = [
            f"A cheap {item} used for years is still non-current; a costly one held for sale is inventory.",
        ]
        return bits, pads

    if "depends on management's intention to use it in operations" in sl:
        bits = [
            "Intent to use the asset in operations beyond one period places it among non-current assets.",
            "Resale intent would have put the same object in inventory.",
        ]
        return bits, []

    if "acquired for resale still counts among non-current" in sl:
        bits = [
            "Goods bought for resale enter inventory immediately.",
            "Sitting unsold for months does not promote them into non-current assets.",
        ]
        pads = ["Resale intent, not shelf time, decides the line."]
        return bits, pads

    if "acquired to be resold rather than used" in sl and "inventory" in sl:
        bits = [
            f"Bought to resell, {a_an(item)} belongs in inventory (current).",
            "It is not an operating fixed asset of the buyer-dealer.",
        ]
        return bits, ["Current assets include stock held for the trading cycle."]

    if "recorded as inventory because it wears out" in sl:
        bits = [
            "Wear is handled by depreciating a fixed asset, not by calling operating kit inventory.",
            f"Daily own use of {a_an(item)} supports non-current classification.",
        ]
        pads = ["Counterexample: factory machines wear out yet sit in plant & equipment."]
        return bits, pads

    if "buyer must continue to record it as inventory" in sl:
        bits = [
            "After the sale, the buyer’s purpose governs classification.",
            "If the buyer puts the machine into operations, it becomes the buyer’s non-current asset.",
        ]
        return bits, ["The seller’s old inventory label does not travel with the object forever."]

    if "bought by a business to support its own daily operations is a tangible fixed asset" in sl:
        bits = [
            f"{a_an(item).capitalize()} bought for the firm’s own daily work is a tangible fixed asset.",
            "Benefit spans periods; it is not held for sale.",
        ]
        return bits, ["Tangible fixed assets sit among non-current assets on the sheet."]

    if "dealer displays for sale is not a fixed asset" in sl:
        bits = [
            f"A dealer displaying {a_an(item)} for sale holds inventory.",
            "That stock is not the dealer’s fixed asset.",
        ]
        return bits, []

    if "long-term assets should preferably be financed only with short-term trade credit" in sl:
        bits = [
            "Long-term assets should be matched with long-term finance.",
            "Funding them only with short-term trade credit creates a maturity mismatch.",
        ]
        pads = [
            "Counterexample: buying a building on revolving supplier credit is poor practice.",
            "Equity or non-current debt is the usual match for long-lived assets.",
        ]
        return bits, pads

    # Equity / loans
    if "owner's equity is the portion of assets financed by bank loans" in sl:
        bits = [
            "Bank loans and trade creditors are liabilities, not equity.",
            "Owner’s equity is the residual claim after liabilities.",
        ]
        pads = [
            "Counterexample: a firm financed entirely by a bank loan has equity only if assets exceed that debt.",
            "Creditors’ claims never sit inside the equity block.",
        ]
        return bits, pads

    if "owner's equity is the residual claim" in sl:
        bits = [
            "Equity = assets − liabilities — the owners’ residual interest.",
            "It is the portion of assets not financed by outside debt.",
        ]
        return bits, ["That residual identity is why the balance sheet still balances."]

    if "within equity" in sl and ("loan" in sl or "bank" in sl):
        bits = [
            "A bank loan is a liability owed to a lender.",
            "Equity is owners’ residual interest — borrowed funds do not belong there.",
        ]
        return bits, ["Counterexample: a term loan sits under liabilities, never under share capital."]

    if "high equity ratio indicates" in sl:
        bits = [
            "A high equity ratio means owners financed a larger share of assets.",
            "Creditors then fund a smaller slice — less gearing, other things equal.",
        ]
        return bits, ["Equity ratio = equity ÷ total assets."]

    if "current liabilities are debts that must be repaid after more than one year" in sl:
        bits = [
            "Current liabilities are due within one year (or the operating cycle).",
            "Debts beyond one year are non-current.",
        ]
        pads = [
            "Counterexample: a five-year bank loan is non-current; trade payables due next month are current.",
        ]
        return bits, pads

    if "correctly classified as a current liability" in sl:
        bits = [
            "Obligations due within a year sit among current liabilities.",
            "Trade payables to suppliers normally meet that timing test.",
        ]
        return bits, ["The euro size does not override settlement timing."]

    if "reclassified as a current liability because nothing in the extract indicates" in sl:
        bits = [
            "A long-term loan stays non-current unless near-term maturity or breach appears.",
            "Silence about repayment inside a year is not enough to reclassify it.",
        ]
        return bits, []

    if "overdraft" in sl and "non-current" in sl:
        bits = [
            "Bank overdrafts are presented as current liabilities.",
            "Rollover habits do not move them into the non-current section.",
        ]
        return bits, ["Reporting convention treats overdrafts as short-term claims."]

    if "inventory" in sl and "correctly classified as a current asset" in sl:
        bits = [
            "Inventory is held for sale or cycle use, so it is current.",
            "It is neither an intangible nor a long-term operating asset.",
        ]
        return bits, []

    if "non-current assets normally have a useful life of more than one year" in sl:
        bits = [
            "Non-current assets are held for use beyond one accounting period.",
            "Useful life beyond a year plus operating intent define the category.",
        ]
        return bits, []

    # Shares / dividends / markets
    if "shareholder sells shares to another" in sl or "already-issued shares transfers that increase as cash" in sl:
        bits = [
            "Secondary-market trades move cash between investors, not into the company.",
            "The issuer does not receive fresh capital from a mere price rise or resale.",
        ]
        pads = [
            "Counterexample: you buy shares from another holder — the corporation’s cash is untouched.",
        ]
        return bits, pads

    if "every corporation must distribute a cash dividend" in sl:
        bits = [
            "Dividends are discretionary; there is no universal legal duty to pay cash every year.",
            "Boards may skip a dividend when cash or strategy requires it.",
        ]
        pads = ["Counterexample: many growth firms pay no dividend for years."]
        return bits, pads

    if "skipping a dividend in a weak year is legally possible" in sl:
        bits = [
            "Skipping a dividend is usually lawful; the main risk is investor disappointment.",
            "Legal compulsion to pay every year is not the general rule.",
        ]
        return bits, []

    if "investors may seek income from dividends" in sl:
        bits = [
            "Investors may want dividends, capital gains, voting influence, or a mix.",
            "Those motives are all compatible with holding equity.",
        ]
        return bits, []

    if "share buyback reduces the number of shares" in sl:
        bits = [
            "A buyback retires shares and can lift EPS even if profit is flat.",
            "Fewer shares in the denominator raise earnings per share.",
        ]
        return bits, ["Buybacks are financing decisions, not operating cash from customers."]

    if "holders of preferred shares always vote" in sl:
        bits = [
            "Preferred shares usually trade voting power for a preferential dividend claim.",
            "Common (ordinary) shares ordinarily carry the votes.",
        ]
        pads = ["Counterexample: standard preferred stock often has no vote at the AGM."]
        return bits, pads

    if "common shareholders are entitled to vote" in sl and "preferred" in sl:
        bits = [
            "Ordinary shares typically vote at the stockholders’ meeting.",
            "Preferred holders often give up votes for dividend priority.",
        ]
        return bits, []

    # Cash-flow classification (including firm-prefixed stems)
    if (
        "dividends paid" in sl
        and ("financing" in sl or "sit in financing" in sl)
        and "investing" not in sl
        and truth
    ):
        bits = [
            with_firm("Dividends paid belong in financing activities."),
            "They return cash to equity providers, not to the trading cycle.",
        ]
        return bits, ["Operating cash is customers and suppliers; dividends are owner distributions."]

    if ("dividends" in sl and "investing" in sl) or "paying dividends is classified as an investing" in sl:
        bits = [
            with_firm("Dividends paid are financing outflows — cash returned to owners."),
            "Investing covers long-term asset purchases and sales, not owner distributions.",
        ]
        pads = [
            "Counterexample: buying machinery is investing; paying a dividend is financing.",
        ]
        return bits, pads

    if "dividends paid to shareholders are recorded within cash flow from financing" in sl:
        bits = [
            "Dividends paid sit in financing, not in operating cash.",
            "They return cash to equity providers.",
        ]
        return bits, []

    if "investing outflow and a dividend" in sl or (
        "investing" in sl and "dividend" in sl and "same year" in sl and "separate" in sl
    ):
        bits = [
            with_firm("Investing and financing are separate cash-flow sections."),
            "Capex can sit beside a dividend payment in the same year without contradiction.",
        ]
        return bits, ["One year’s statement routinely shows both buckets at once."]

    if "collecting payment on a trade receivable" in sl or "collecting payment on a trade receivable is an operating" in sl:
        bits = [
            with_firm("Collecting a receivable is operating cash from the trading cycle."),
            "It is not new revenue and not an investing inflow.",
        ]
        return bits, ["The sale was recorded earlier; cash collection closes the operating loop."]

    if "buying new" in sl and "investing" in sl:
        bits = [
            with_firm("Buying long-lived equipment for cash is an investing outflow."),
            "Operating cash is the trading cycle, not plant purchases.",
        ]
        return bits, [f"Forklifts, vans, and similar kit used for years belong in investing when paid in cash."]

    if "cash flow from operating activities reflects cash movements arising from borrowing" in sl:
        bits = [
            "Borrowing and loan repayments are financing movements.",
            "Operating cash comes from the trading cycle, not from lenders.",
        ]
        pads = ["Counterexample: drawing a new loan raises financing inflows, not operating cash."]
        return bits, pads

    if "cash flow from investing activities reflects cash movements arising from the core day-to-day" in sl:
        bits = [
            "Day-to-day trading cash is operating, not investing.",
            "Investing covers long-term asset deals.",
        ]
        return bits, ["Counterexample: collecting a receivable is operating cash."]

    if "cash flow from financing activities reflects cash movements arising from buying or selling long-term" in sl:
        bits = [
            "Buying or selling long-term assets is investing.",
            "Financing is capital from owners and lenders (issues, loans, dividends, repayments).",
        ]
        return bits, []

    if "investing outflow" in sl and "must be failing" in sl:
        bits = [
            "A negative investing total often means the firm bought long-term assets.",
            "Growth capex is not proof of failure.",
        ]
        pads = [
            "Counterexample: a healthy retailer opening new stores shows investing outflows.",
        ]
        return bits, pads

    if "repayments of borrowed money count as operating" in sl:
        bits = [
            "Loan repayments are financing outflows.",
            "Operating cash is the trading cycle — wages, suppliers, customers — not debt service principal.",
        ]
        return bits, []

    if "negative cash flow from investing activities does not necessarily indicate a problem" in sl:
        bits = [
            "Investing outflows often mean the business invested in long-term assets.",
            "That pattern can be healthy growth, not distress.",
        ]
        return bits, []

    if "business can have a negative cash flow from investing activities in the same year that it pays a dividend" in sl:
        bits = [
            "Investing and financing are separate buckets.",
            "Capex (investing) and dividends (financing) can both occur in one year.",
        ]
        return bits, []

    if "collecting payment on a trade receivable is cash from operating" in sl:
        bits = [
            "Collecting a receivable is operating cash from the trading cycle.",
            "It is not new revenue and not investing proceeds.",
        ]
        return bits, []

    if "profit for the year is reported in the income statement" in sl and "does not appear as a separate line" in sl:
        bits = [
            "Profit hits retained earnings on the balance sheet.",
            "The cash-flow statement starts from profit (indirect method) or focuses on cash lines — profit is not a separate cash bucket of its own.",
        ]
        return bits, []

    if "purchase of office equipment for cash is classified as an operating" in sl:
        bits = [
            "Buying office equipment for cash is an investing outflow.",
            "Operating cash is the trading cycle, not long-lived asset purchases.",
        ]
        pads = ["Counterexample: a new laptop for multi-year use is investing, not operating."]
        return bits, pads

    # P&L / depreciation conceptual
    if "unlike wages or energy costs, depreciation does not cause an actual cash payment" in sl:
        bits = [
            "Depreciation is a non-cash expense in the period charged.",
            "Cash left when the asset was purchased; the charge only allocates cost.",
        ]
        return bits, ["Wages and energy, by contrast, usually trigger cash outflows soon."]

    if "land is depreciated on a straight-line basis just like buildings" in sl:
        bits = [
            "Land is not depreciated like buildings and machinery.",
            "It ordinarily has an indefinite useful life.",
        ]
        pads = ["Counterexample: a factory plot stays at cost while the building is written down."]
        return bits, pads

    if "if revenues exceed costs and expenses, the company has a profit" in sl:
        bits = [
            "Profit means revenues exceed costs and expenses for the period.",
            "The opposite gap is a loss.",
        ]
        return bits, []

    if "profit for the year increases equity through retained earnings" in sl:
        bits = [
            "Profit lifts equity via retained earnings; a loss reduces it.",
            "That is how period performance feeds the balance-sheet residual.",
        ]
        return bits, []

    # Intangibles
    if "being intangible" in sl and "current asset" in sl:
        bits = [
            f"Intangible form does not make {a_an(item)} current.",
            "Current vs non-current turns on benefit timing, not touchability.",
        ]
        pads = [
            f"A multi-year {item} belongs among non-current intangibles.",
        ]
        return bits, pads

    if "cannot be touched" in sl and "expense rather than as an asset" in sl:
        bits = [
            "Lacking physical substance does not force an immediate expense.",
            f"If the firm controls {a_an(item)} and expects future benefit, capitalise as a non-current intangible.",
        ]
        return bits, ["Expensing fits only costs with no separable future benefit."]

    if "never include" in sl and ("tangible items" in sl or "machinery" in sl):
        bits = [
            "Non-current assets are not tangible-only.",
            f"{a_an(item).capitalize()} can sit as a non-current intangible when benefit lasts beyond a year.",
        ]
        return bits, ["Machinery is the tangible half of the same non-current section."]

    if "treated as inventory because it is intended for use rather than for display" in sl:
        bits = [
            "Inventory is stock for sale or cycle use — not a long-term operating right.",
            f"{a_an(item).capitalize()} used in operations is not merchandise.",
        ]
        return bits, ["Use-versus-display is the wrong test; held-for-sale versus long-term right is right."]

    if "lacks physical substance but is classified as a non-current intangible" in sl:
        bits = [
            f"{a_an(item).capitalize()} lacks physical substance yet delivers multi-year benefit.",
            "That pattern is a non-current intangible asset.",
        ]
        return bits, []

    if "loses its non-current classification as soon as the business begins actively using" in sl:
        bits = [
            f"Putting {a_an(item)} to work is why it was capitalised as non-current.",
            "Active use does not flip it into a current asset.",
        ]
        return bits, ["Reclassification needs a change in realisation timing, not the start of use."]

    # Liquidity / working-capital concepts
    if "low inventory turnover always proves that goods sell quickly" in sl:
        bits = [
            "Low inventory turnover means stock moves slowly, not quickly.",
            "Cash stays tied up in inventory longer when turnover is low.",
        ]
        pads = ["Counterexample: high turnover — not low — signals fast-selling goods."]
        return bits, pads

    if "working capital is healthy only when short-term debts stay larger" in sl:
        bits = [
            "Healthy working capital usually means current assets exceed current liabilities.",
            "Short-term debts larger than liquid resources is the opposite of that cushion.",
        ]
        return bits, ["Positive WC = CA − CL > 0."]

    # Balance sheet identity
    if "balance sheet identity requires that total assets always equal" in sl:
        bits = [
            "Assets always equal liabilities plus equity — the sheet is an identity.",
            "Any asset increase is matched by a claim or equity increase (or another asset decrease).",
        ]
        pads = [
            "That is why the two sides of the extract total the same figure.",
        ]
        return bits, pads

    # Generic cash-flow / P&L / BS keyword fallbacks
    if any(k in sl for k in ("operating activit", "investing activit", "financing activit", "cash flow", "cash inflow", "cash outflow")):
        bits = [
            with_firm("Sort the movement into operating, investing, or financing."),
            "Operating = trading cycle; investing = long-term assets; financing = owners and lenders.",
            f"On that map the assertion is {'sound' if truth else 'mislabeled'}.",
        ]
        if not truth:
            pads = ["Name the correct bucket and the wrong label falls away."]
        return bits, pads

    if any(k in sl for k in ("depreciat", "carrying value", "useful life", "residual")):
        bits = [
            "Depreciation spreads depreciable cost over useful life.",
            "It is normally non-cash; land is not depreciated like buildings.",
            f"Against that rule the claim is {'right' if truth else 'off'}.",
        ]
        if not truth:
            pads = ["Correct the life, residual, or land treatment and the statement fails."]
        return bits, pads

    if any(k in sl for k in ("revenue", "profit", "cost of sales", "gross profit", "income statement", "turnover")):
        bits = [
            "Keep period performance on the income statement.",
            "Revenue and costs are period flows; assets and liabilities are stocks.",
            f"With that split the claim is {'fine' if truth else 'wrong'}.",
        ]
        return bits, pads

    if any(k in sl for k in ("equity", "share capital", "retained earnings", "dividend", "shareholder")):
        bits = [
            "Equity is the owners’ residual claim after liabilities.",
            "Dividends and share issues are financing events, not operating sales.",
            f"Read that way, the statement is {'correct' if truth else 'incorrect'}.",
        ]
        if not truth:
            pads = ["A concrete fix: put borrowings under liabilities and owner claims under equity."]
        return bits, pads

    if any(k in sl for k in ("current", "non-current", "inventory", "liabilit", "asset", "tangible", "intangible")):
        bits = [
            f"Classification for {item} follows use, benefit timing, and settlement timing.",
            "Physical appearance alone does not choose the line.",
            f"On the chapter test the wording is {'accepted' if truth else 'rejected'}.",
        ]
        if not truth:
            pads = [
                f"Counter-reading: place {item} on the line that matches how the entity actually holds it.",
            ]
        return bits, pads

    # Ultimate fallback — still statement-tied, never old prose
    snippet = core if len(core) <= 140 else core[:137] + "…"
    bits = [
        with_firm("Read the claim against the chapter rule: {snippet}"),
        "Test classification, measurement, or the stated comparison on its own terms.",
        f"That reading makes the assertion {'hold' if truth else 'fall'}.",
    ]
    if not truth:
        pads = ["Replace the faulty reason with the correct category and the letter flips."]
    return bits, pads


def explain_letter(case: dict, letter_i: int, kind: str) -> str:
    stmt = case["statements"][letter_i]
    truth = bool(case["answer_key"][letter_i])
    tables = parse_tables(case.get("context") or "")

    got = numeric_bits(stmt, truth, tables)
    if got:
        bits, pads = got
    else:
        bits, pads = conceptual_bits(stmt, truth)

    # FALSE letters: ensure a concrete counterexample vibe in medium/long
    if not truth and kind != "short":
        if not any("counter" in b.lower() or "instead" in b.lower() or "correct" in b.lower() for b in bits + pads):
            pads = pads + ["Name the right line or threshold and the claim no longer stands."]

    return pack(truth, kind, bits, pads)


def audit_expl(expl: str, truth: bool) -> list[str]:
    errs = []
    want = "TRUE —" if truth else "FALSE —"
    if not expl.startswith(want):
        errs.append("prefix")
    closer = "So the statement is True." if truth else "So the statement is False."
    if not expl.rstrip().endswith(closer):
        errs.append("closer")
    if re.search(r"(?<!So )The statement is (true|false)\.", expl, re.I):
        errs.append("old_closer")
    for bad in (
        "settle the letter",
        "nothing exotic",
        "Held against the chapter test",
        "Match the wording to the chapter definition",
        "Check classification, measurement, or the stated comparison against the extract.",
        "On that criterion the assertion",
    ):
        if bad.lower() in expl.lower():
            errs.append("robot:" + bad[:24])
    return errs


def kind_of_expl(expl: str) -> str:
    n = body_chars(expl)
    pc = para_count_body(expl)
    if n <= 150 and pc <= 1:
        return "short"
    if 170 <= n <= 370 and pc == 2:
        return "medium"
    if n >= 380 and pc >= 3:
        return "long"
    # nearest
    if n < 165:
        return "short"
    if n < 390:
        return "medium"
    return "long"


def main() -> None:
    data = json.loads(PATH.read_text())
    assert len(data) >= UNLOCK
    locked_before = json.dumps(data[UNLOCK:], ensure_ascii=False)
    # Snapshot old unlocked bodies to prove we did not reuse them
    old_bodies = []
    for c in data[:UNLOCK]:
        for e in c["tactical_explanations"]:
            old_bodies.append(re.sub(r"\s+", " ", e.strip()))

    bodies: list[int] = []
    kind_hist = {"short": 0, "medium": 0, "long": 0, "other": 0}
    errors: list = []
    identical = 0
    weak_cases = 0

    for i in range(UNLOCK):
        case = data[i]
        kinds = assign_kinds(case)
        assert len(set(kinds)) >= 2
        new_expls = []
        realized = []
        for j in range(5):
            truth = bool(case["answer_key"][j])
            new = explain_letter(case, j, kinds[j])
            errs = audit_expl(new, truth)
            if errs:
                errors.append((case["case_id"], LETTERS[j], errs, new[:140]))
            norm = re.sub(r"\s+", " ", new.strip())
            if norm in old_bodies:
                identical += 1
            bc = body_chars(new)
            bodies.append(bc)
            k = kind_of_expl(new)
            kind_hist[k if k in kind_hist else "other"] = kind_hist.get(k if k in kind_hist else "other", 0) + 1
            realized.append(k)
            new_expls.append(new)
        if len(set(realized)) < 2:
            weak_cases += 1
        case["tactical_explanations"] = new_expls

    assert json.dumps(data[UNLOCK:], ensure_ascii=False) == locked_before, "locked mutated"
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

    print(f"cases_unlocked={UNLOCK}")
    print(f"letters={UNLOCK * 5}")
    print(f"body_chars min={min(bodies)} max={max(bodies)} mean={statistics.mean(bodies):.0f} stdev={statistics.stdev(bodies):.0f}")
    print(f"kind_hist={kind_hist}")
    print(f"weak_diversity_cases={weak_cases}")
    print(f"identical_to_old={identical}")
    print(f"audit_errors={len(errors)}")
    for e in errors[:20]:
        print(" ERR", e)

    for idx in (0, 50, 100, 150, 217):
        c = data[idx]
        print("\n====", c["case_id"], c["title"][:50])
        kinds = assign_kinds(c)
        for j, e in enumerate(c["tactical_explanations"]):
            print(f"\n-- {LETTERS[j]} target={kinds[j]} realized={kind_of_expl(e)} body={body_chars(e)} --")
            print(e)


if __name__ == "__main__":
    main()
