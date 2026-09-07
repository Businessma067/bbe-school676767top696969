#!/usr/bin/env python3
"""WRITE FROM SCRATCH unlocked Ch4–Ch5 tactical_explanations (math-panel plain).

Never polishes prior letter text. Builds brand-new tutor prose from statement +
subsection + answer_key, with deliberate short/medium/long mix inside every case.

Unlocked: first floor(n * 0.35) cases. Locked indices untouched.
"""

from __future__ import annotations

import hashlib
import json
import re
import statistics
from collections import Counter
from pathlib import Path

ROOT = Path("/workspace")
UNLOCK = {
    ROOT / "src/data/economics-cases-ch4-subtopics.json": 105,
    ROOT / "src/data/economics-cases-ch5-subtopics.json": 244,
}

PREFIX = re.compile(r"^(TRUE|FALSE)\s*[—–-]\s*", re.I)
CLOSER_RE = re.compile(r"So the statement is (True|False)\.\s*$")

BANNED = [
    "settle the letter",
    "nothing exotic",
    "held against the chapter test",
    "statement explanation",
    "absolute wording is the trap",
    "those restricting words stretch",
    "the sentence therefore reports",
    "under that definition the assertion",
    "under that classification the",
    "once the defining feature is restored",
    "swap in the textbook criterion",
    "one clear counterexample under the right criterion",
    "nothing in the wording contradicts",
    "evaluated against the textbook standard",
    "connect the claim to",
    "sort the claim by",
    "score this letter",
    "on that basis the assertion",
    "that misclassification is enough",
]


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", normalize_ws(text))
    out = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        if not re.search(r"[.!?]$", p):
            p += "."
        out.append(p)
    return out


def split_paras(body: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", body.strip()) if p.strip()]


def body_of(expl: str) -> str:
    t = expl.strip()
    m = PREFIX.match(t)
    if m:
        t = t[m.end() :]
    t = CLOSER_RE.sub("", t).strip()
    return t


def word_set(s: str) -> set[str]:
    return set(re.findall(r"[a-z][a-z'-]{2,}", s.lower()))


def jaccard(a: str, b: str) -> float:
    wa, wb = word_set(a), word_set(b)
    if not wa or not wb:
        return 0.0
    return len(wa & wb) / len(wa | wb)


def length_tier(case_id: str, letter_idx: int) -> str:
    patterns = [
        ("short", "medium", "long", "short", "medium"),
        ("medium", "short", "long", "medium", "short"),
        ("long", "short", "medium", "long", "short"),
        ("short", "long", "medium", "short", "long"),
        ("medium", "long", "short", "medium", "long"),
        ("long", "medium", "short", "long", "medium"),
        ("short", "medium", "short", "long", "medium"),
        ("medium", "short", "medium", "long", "short"),
    ]
    return patterns[seed(case_id, "pat") % len(patterns)][letter_idx]


def pick(case_id: str, letter: str, tag: str, options: list[str]) -> str:
    return options[seed(case_id, letter, tag) % len(options)]


def stem_hook(statement: str) -> str:
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
        r"orientation",
        r"products?",
        r"internal(?:ly generated)? funds?",
        r"external (?:finance|creditors?|funds?)",
        r"unlimited liability",
        r"limited liability",
        r"printers?",
        r"bonds?",
        r"profitability objectives?",
        r"marketing objectives?",
    ]
    earliest = None
    for pat in pats:
        m = re.search(pat, statement, re.I)
        if not m:
            continue
        if earliest is None or m.start() < earliest[0]:
            earliest = (m.start(), m.group(0))
    if earliest:
        return earliest[1].lower() if earliest[1][:1].isupper() and " " not in earliest[1] else earliest[1]
    # Avoid "For …" lead fragments as hooks
    s = re.sub(r"^(For|When|If|Even when)\s+", "", statement.strip(), flags=re.I)
    words = re.findall(r"[A-Za-z][A-Za-z-]{2,}", s)
    stop = {"the", "and", "for", "with", "that", "this", "from", "into", "about"}
    words = [w for w in words if w.lower() not in stop]
    return " ".join(words[:3]).lower() if words else "this claim"


def ctx_noun(context: str) -> str:
    if not context:
        return ""
    m = re.search(
        r"\b(bakery|restaurant|consultancy|consultants?|landscape|sensor|"
        r"cosmetics?|dental|hospital|printers?|vehicles?|cleaning|catering|"
        r"bicycle|shop|firm|business|company|partnership|corporation)\b",
        context,
        re.I,
    )
    return m.group(0) if m else ""


# ── teaching banks by chapter theme ─────────────────────────────────────────


def teach_ch4(statement: str, truth: bool, subsection: str, context: str) -> list[str]:
    sl = statement.lower()
    hook = stem_hook(statement)
    scene = ctx_noun(context)
    bits: list[str] = []

    # Sole trader
    if any(k in sl for k in ("sole propriet", "sole trader", "sole tradership")) or subsection == "4.1":
        if "one person" in sl or "owned by one" in sl or ("manages and runs" in sl):
            bits.append(
                "A sole proprietorship puts ownership and day-to-day control in one natural person. "
                "That person owns the trading assets, chooses suppliers and prices, and keeps residual risk."
            )
            bits.append(
                "There is no co-owner layer and no separate company person standing between the proprietor and the business."
            )
        if "without necessarily" in sl or "other opinion" in sl:
            bits.append(
                "With no partners or board, decision rights are undivided. Advice can be taken, but consultation is optional — not a structural requirement of the form."
            )
        if "legal entit" in sl or "legal person" in sl or "legal personality" in sl:
            if truth:
                bits.append(
                    "A sole trader is not a separate legal entity. Contracts, assets, and liabilities attach to the owner personally, so profits flow onto the owner's personal income tax statement."
                )
            else:
                bits.append(
                    "A sole proprietorship is not a separate legal person. Corporate personality, stand-alone corporate tax filing, or default limited liability do not appear just because a trading name or bank account exists."
                )
                bits.append(
                    "Picture a neighbourhood bakery run by one owner-manager: suppliers and the tax office still look to that person, not to a fictional company shell."
                )
        if "personal income tax" in sl or "profits are reported" in sl:
            bits.append(
                "Because there is no corporate taxpayer, trading profit is attributed to the proprietor and declared on the personal income tax statement."
            )
        if "unlimited liability" in sl or ("private assets" in sl) or ("personal property" in sl and "creditor" in sl):
            if truth:
                bits.append(
                    "Unlimited liability means creditors are not capped at assets labelled “business property.” If business cash is short, private assets can be reached."
                )
            else:
                bits.append(
                    "Limited liability would wall off private assets once business assets are exhausted. Sole proprietors do not get that wall."
                )
                bits.append(
                    "Collateral pledged to one lender secures that lender — it does not convert the firm into a limited company for everyone else."
                )
        if "limited liability" in sl and ("sole" in sl or subsection == "4.1"):
            if not truth:
                bits.append(
                    "Incorporating as a company can create limited liability; calling the firm a “sole proprietorship” does not. The labels are different legal shells."
                )
        if "easy to establish" in sl or "no financial requirement" in sl or ("no minimum" in sl and "capital" in sl):
            bits.append(
                "Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit — that is why the form is described as easy to establish."
            )
        if "continu" in sl or "retir" in sl or "illness" in sl:
            if truth:
                bits.append(
                    "Continuity hangs on one person’s capacity to own and manage. Retirement or long-term illness can stall customers and contracts unless succession is arranged."
                )
            else:
                bits.append(
                    "Nothing in the sole-trader shell automatically keeps operations unchanged when the owner retires or is long absent. Staff do not inherit ownership by default."
                )
        if "hire" in sl or "personnel" in sl or "employee" in sl or "staff" in sl:
            if truth:
                bits.append(
                    "Hiring is allowed. Assistants expand capacity, but residual risk and key decisions stay with the proprietor."
                )
            else:
                bits.append(
                    "Employment does not shift unlimited liability onto workers or incorporate the firm. Headcount is not an incorporation trigger."
                )

    # Partnership
    if "partner" in sl or subsection == "4.2":
        if "two or more" in sl or "jointly found" in sl:
            bits.append(
                "When two or more persons jointly found a business, the ownership form is a partnership. Rights, duties, and profit shares are normally fixed in a partnership agreement."
            )
        if "partnership agreement" in sl:
            bits.append(
                "The agreement settles ownership shares, profit and loss splits, roles, and decision rules so disputes have a written baseline."
            )
        if "general partnership" in sl or ("equal rights" in sl and "partner" in sl):
            bits.append(
                "In a general partnership, partners jointly own and manage. Each general partner typically has equal rights and responsibilities unless the agreement says otherwise."
            )
        if "solely liable" in sl or ("unlimited liability" in sl and "partner" in sl):
            if truth:
                bits.append(
                    "Each general partner can be pursued for the full remaining business debt — liability is not capped at that partner’s profit share."
                )
            else:
                bits.append(
                    "Profit-sharing ratios do not cap a general partner’s liability. A creditor may claim the whole shortfall from any general partner."
                )
        if "limited partner" in sl:
            if truth:
                bits.append(
                    "A limited partner’s loss is normally capped at the contribution, provided that partner stays out of day-to-day management."
                )
            else:
                bits.append(
                    "Active management usually breaks the limited-partner pattern. The liability cap is tied to a passive capital role, not to merely holding a title."
                )
                bits.append(
                    "A silent investor who never manages can keep the cap; the same person taking daily control risks losing that protection."
                )
        if "specialis" in sl or "share the tasks" in sl:
            bits.append(
                "Partners can divide tasks — one on clients, one on operations — while still sharing ownership risk under the agreement."
            )

    # Corporation
    if any(k in sl for k in ("corporation", "shareholder", "share capital", "board of directors", "ipo", "gmbh", "aktiengesellschaft")) or subsection == "4.3":
        if "legal person" in sl or "legal entit" in sl:
            bits.append(
                "A corporation is a legal person of its own: it can own assets, hire, contract, sue and be sued in its own name."
            )
        if "shareholder" in sl and ("manag" in sl or "need not" in sl or "director" in sl):
            bits.append(
                "Shareholders provide capital but need not run operations day to day; directors and executives can manage without owning shares."
            )
        if "limited liability" in sl:
            if truth:
                bits.append(
                    "Shareholders’ liability is typically limited to capital invested. Creditors claim against the company, not automatically against private homes."
                )
            else:
                bits.append(
                    "Corporate owners do not usually face unlimited personal liability for company debts beyond what they invested in shares."
                )
        if "more difficult" in sl or "harder" in sl or "complex" in sl:
            bits.append(
                "Setup is harder than for sole traders or partnerships: capital rules, filings, and governance layers make formation more formal."
            )
        if "more options" in sl or "raise financial" in sl or "share capital as well as loans" in sl:
            bits.append(
                "Corporations can raise share capital and also borrow — bank loans, credit, and for larger firms bonds — so the funding menu is broader than for many unincorporated firms."
            )
        if "exclusively on share capital" in sl or ("cannot raise loans" in sl):
            bits.append(
                "Share capital is central, but corporations are not barred from loans or trade credit. Debt finance remains available alongside equity."
            )
        if "secondary" in sl or ("market price" in sl and "share" in sl) or "ipo" in sl:
            bits.append(
                "Cash arrives at issue. Later secondary-market price rises enrich traders among themselves; they do not inject fresh cash into the issuer."
            )
        if "bond" in sl:
            bits.append(
                "Bondholders are creditors with interest and repayment claims, not residual owners with voting equity."
            )

    # Finance sources / choice
    if any(
        k in sl
        for k in (
            "internal",
            "external",
            "retained",
            "trade credit",
            "overdraft",
            "mortgage",
            "collateral",
            "gearing",
            "long-term",
            "short-term",
            "owner's savings",
            "owner savings",
        )
    ):
        if "retained" in sl or ("sale of" in sl and "asset" in sl):
            if truth and "internal" in sl:
                bits.append(
                    "Internal finance comes from inside the firm: profit kept rather than withdrawn, or cash from selling assets no longer needed. No new outside creditor is created for that slice."
                )
            elif not truth:
                bits.append(
                    "Retained profit and unused-asset sales are internal sources. Labelling them external confuses origin — surplus already inside — with the bank account where cash sits."
                )
        if ("owner" in sl and ("savings" in sl or "invest" in sl)) or "investor" in sl:
            if "external" in sl:
                bits.append(
                    "In this chapter’s map, owner start-up savings and outside investor funds are external: they enter from outside retained trading surplus."
                )
        if "overdraft" in sl:
            bits.append(
                "A bank overdraft is flexible short-term credit on a business current account. Interest is typically charged only while the account is overdrawn."
            )
        if "trade credit" in sl:
            if "long-term" in sl and not truth:
                bits.append(
                    "Trade credit defers payment to suppliers for a short agreed period — weeks, not years. Deferral alone does not make it long-term debt finance."
                )
            elif "liabilit" in sl and not truth:
                bits.append(
                    "Trade credit is still a liability to the supplier. Deferring payment does not erase the sole proprietor’s obligation or unlimited liability for those purchases."
                )
            else:
                bits.append(
                    "Trade credit lets the firm buy now and pay the supplier later under agreed terms. It is a short-term liability until invoices are cleared."
                )
        if "mortgage" in sl or "collateral" in sl:
            bits.append(
                "Long-term bank loans are often secured on land or property through a mortgage. Collateral reduces lender risk; it does not erase the borrower’s repayment duty."
            )
        if "gearing" in sl or ("high" in sl and "loan" in sl and "risk" in sl):
            bits.append(
                "Heavy loan dependence raises gearing and insolvency risk. Lenders watch that ratio when deciding whether to extend more credit."
            )
        if "matching" in sl or ("long-lived" in sl) or ("long-term finance" in sl and "capital" in sl):
            bits.append(
                "Matching pairs the life of the asset with the term of the finance: fund long-lived capital goods with long-term funds, and routine materials with short-term credit."
            )

    # Unincorporated / overview
    if "unincorporated" in sl or "incorporated" in sl:
        bits.append(
            "Unincorporated firms (sole traders, partnerships) lack separate legal personality. Incorporated companies are legal persons with limited liability for shareholders as the usual pattern."
        )

    if not bits:
        focus = hook
        if truth:
            bits.append(
                f"The claim about {focus} lines up with how this chapter defines the ownership form or finance source."
            )
            bits.append(
                f"Keep the textbook criterion for {focus} in view: legal personality, liability, and where the money comes from are the usual sorting keys."
            )
        else:
            bits.append(
                f"The claim about {focus} collides with the chapter definition of the ownership form or finance source."
            )
            bits.append(
                f"Restore the right test for {focus} — liability, legal personality, or internal versus external origin — and the sentence no longer holds."
            )

    if not truth:
        # Topic-tied counterexample only (avoid cross-topic leftovers)
        cx_bank: list[tuple[tuple[str, ...], str]] = [
            (("sole", "propriet", "trader"), "A one-person repair booth with personal tax on profits is still a sole trader even with a fancy trading name."),
            (("partner",), "Two consultants sharing an agreement remain partners; profit shares do not cap a general partner’s liability."),
            (("limited partner",), "A silent investor who never manages can keep the liability cap; taking daily control risks losing it."),
            (("corporation", "shareholder", "share capital"), "A company can still borrow and use trade credit; share capital is not the only funding door."),
            (("trade credit",), "Supplier invoices due in thirty days remain short-term trade credit, not long-term loan capital."),
            (("retained", "internal", "external"), "Retained earnings left in the firm are internal finance even though the cash sits in a bank account."),
            (("overdraft",), "Interest on an overdraft is typically due only while the account is overdrawn, not as a flat annual fee for an unused limit."),
            (("unlimited liability", "private asset", "limited liability"), "Collateral for one lender does not convert a sole trader into a limited company for all creditors."),
        ]
        for keys, text in cx_bank:
            if any(k in sl for k in keys):
                bits.append(text)
                break
        else:
            if scene:
                bits.append(
                    f"In the stem’s {scene} setting, applying the correct legal or finance label already overturns the absolute wording."
                )

    # Dedup while preserving order
    seen: set[str] = set()
    out: list[str] = []
    for b in bits:
        key = normalize_ws(b).lower()[:100]
        if key in seen:
            continue
        seen.add(key)
        out.append(b)
    return out


def teach_ch5(statement: str, truth: bool, subsection: str, context: str) -> list[str]:
    sl = statement.lower()
    hook = stem_hook(statement)
    scene = ctx_noun(context)
    bits: list[str] = []

    if subsection == "5.1" or any(
        k in sl for k in ("product", "producer", "consumer", "printer", "b2b", "b2c", "service")
    ):
        if (
            "only to physical" in sl
            or "excludes services" in sl
            or "lack physical" in sl
            or ("not a product unless" in sl and "physical" in sl)
        ):
            bits.append(
                "Marketing’s product definition is deliberately wide: every exchangeable good and every exchangeable service that can fulfil customer wishes and needs."
            )
            bits.append(
                "Physical form is not required. A consultancy hour or maintenance visit sold to a customer is still a product."
            )
        elif re.search(
            r"product is every good|defines a product as|product in marketing includes|"
            r"good or service offered through exchange|goods and/or service",
            sl,
        ):
            bits.append(
                "In marketing terms, a product is every good and/or service that can be exchanged to fulfil customers’ wishes and needs — merchandise and services alike."
            )
        if "producer product" in sl:
            if truth:
                bits.append(
                    "Producer products are goods and services sold from one business to another (B2B). The purchaser’s identity as a business customer drives the label."
                )
            else:
                bits.append(
                    "Factory origin, packaging, or the seller’s registration alone do not define a producer product. Buyer type in that transaction does."
                )
        if "consumer product" in sl:
            if truth:
                bits.append(
                    "Consumer products are goods and services sold to private households or individual consumers (B2C). The household buyer defines the label."
                )
            else:
                bits.append(
                    "Retail packaging size or shelf display does not define a consumer product. A business buyer makes the same item a producer product."
                )
        if "printer" in sl:
            if not truth:
                bits.append(
                    "A printer bought for office use by a firm is a producer product; the same model sold to a household is a consumer product. “Always” fails."
                )
            else:
                bits.append(
                    "Printers illustrate buyer-based labelling: office purchase → producer product; household purchase → consumer product."
                )
        if "always" in sl or ("only" in sl and ("product" in sl or "customer" in sl)):
            bits.append(
                "The same catalogue item can be producer in one sale and consumer in another. Absolute words usually overstretch the buyer test."
            )
        if "customer" in sl and ("business" in sl or "household" in sl):
            bits.append(
                "Customers may be other businesses or private households. That identity — not the factory process alone — drives B2B versus B2C labels."
            )
        if "cleaning contract" in sl or "catering" in sl:
            bits.append(
                "A cleaning contract sold to a hospital trust is B2B (producer); sold to a private household it is B2C (consumer). Design sameness does not freeze the label."
            )

    # 5.2 objectives — stay inside the objectives subsection
    if subsection == "5.2":
        if re.search(r"\b(satisfied|satisfaction|dissatisf)", sl):
            if truth:
                bits.append(
                    "If customers are not satisfied, they are unlikely to buy again. Satisfaction therefore sits at the centre of marketing objectives."
                )
            else:
                bits.append(
                    "Satisfaction is tightly linked to repeat purchase. Treating it as unrelated to whether buyers return misreads the objective set."
                )
        if "loyal" in sl and "anonym" not in sl and "crm" not in sl:
            bits.append(
                "Satisfied customers often become loyal and purchase again, so loyalty objectives interlock with sales and share aims."
            )
        if "usp" in sl or "unique selling" in sl or "differentiat" in sl or "brand" in sl:
            bits.append(
                "A unique selling proposition makes the offer stand out. Branding supports that differentiation so the product seems special or better than close rivals."
            )
        if "market share" in sl:
            bits.append(
                "Market share is the firm’s weight in a market relative to competitors. Gaining and keeping share signals competitiveness."
            )
        if "sales" in sl or "revenue" in sl:
            bits.append(
                "Sales generate revenues needed to cover costs and support profit. Maintaining or increasing sales is a standard marketing objective."
            )
        if "profit" in sl:
            bits.append(
                "Profitability reimburses owners and can fund reinvestment. Higher sales help only if costs and margins cooperate."
            )
        if "interrelated" in sl or "interlock" in sl or "prerequisite" in sl:
            bits.append(
                "Satisfaction, loyalty, USP, share, sales, and profit reinforce one another rather than sitting in sealed boxes."
            )

    if subsection == "5.3" or any(
        k in sl
        for k in (
            "product-orient",
            "market-orient",
            "crm",
            "loyalty card",
            "newsletter",
            "personal data",
            "anonym",
            "orientation",
        )
    ):
        if "product-orient" in sl or "product orient" in sl:
            bits.append(
                "Product orientation starts with features and quality, then works out how to sell. Success is expected mainly from the offering itself."
            )
        if "market-orient" in sl or "market orient" in sl:
            bits.append(
                "Market orientation studies customer needs and wants first, then shapes the offering. That stance helps catch demand shifts earlier."
            )
        if "orientation" in sl and "product-orient" not in sl and "market-orient" not in sl:
            bits.append(
                "Orientation fit depends on the offering and how rivals compete: some paths lead with product features, others with customer research first."
            )
        if "crm" in sl or "customer relationship" in sl or "loyalty" in sl or "newsletter" in sl or "anonym" in sl:
            if truth:
                bits.append(
                    "CRM builds lasting relationships by using customer data for newsletters, coupons, and tailored information that encourage repeat purchases."
                )
            else:
                bits.append(
                    "Loyalty cards and personalised coupons work because the firm can recognise returning customers."
                )
                bits.append(
                    "Deleting every record after each sale, or promising total anonymity while targeting, fights that mechanism."
                )
                bits.append(
                    "Customers often share data willingly for discounts — careful use matters, but blank anonymity is not how CRM programmes run."
                )
        if "neglect" in sl or "quality is high" in sl or "should not be neglected" in sl:
            bits.append(
                "Even strong product quality does not excuse ignoring markets and shifting customer expectations."
            )
        if "different orientation" in sl or "orientation paths" in sl or "follow different" in sl:
            bits.append(
                "Rivals may share profit aims yet follow different orientation paths — one product-led, another market-led — depending on the offering and competition."
            )

    if not bits:
        if truth:
            bits.append(
                f"The wording on {hook} matches the marketing test this chapter uses."
            )
            bits.append(
                f"Keep the buyer, exchange, or orientation criterion for {hook} in view when you judge the sentence."
            )
        else:
            bits.append(
                f"The wording on {hook} fights the marketing test this chapter uses."
            )
            bits.append(
                f"Apply the buyer-based or definition-based criterion to {hook} and the overstretch shows quickly."
            )

    if not truth:
        cx_bank: list[tuple[tuple[str, ...], str]] = [
            (("physical", "service", "excludes"), "A consultancy hour sold to a client is a product even though nothing physical changes hands."),
            (("printer",), "Office printers bought by a logistics firm are producer products despite households also using similar models."),
            (("consumer product", "packaging", "retail"), "A catering tray sold to a household is consumer; the same tray sold to a company canteen is producer."),
            (("producer product", "factory", "manufactur"), "Buyer type decides: sold to another firm it is a producer product; sold to a household it is not."),
            (("satisf",), "Dissatisfied buyers rarely become loyal — satisfaction and repurchase move together."),
            (("crm", "anonym", "loyalty", "deleting"), "CRM coupons need recognised customers; permanent anonymity after every sale removes the tool."),
            (("always", "only"), "One ordinary counter-sale under the right buyer test already overturns the absolute wording."),
        ]
        for keys, text in cx_bank:
            if any(k in sl for k in keys):
                bits.append(text)
                break
        else:
            if scene:
                bits.append(
                    f"In the stem’s {scene} setting, one ordinary counter-sale under the right buyer test already overturns the claim."
                )

    seen: set[str] = set()
    out: list[str] = []
    for b in bits:
        key = normalize_ws(b).lower()[:100]
        if key in seen:
            continue
        seen.add(key)
        out.append(b)
    return out


def teach_paras(case: dict, statement: str, truth: bool) -> list[str]:
    sub = str(case.get("subsection") or "")
    ctx = case.get("context") or ""
    if sub.startswith("4") or "CASE 4" in str(case.get("case_id")):
        return teach_ch4(statement, truth, sub, ctx)
    return teach_ch5(statement, truth, sub, ctx)


def chapter_pads(case: dict, statement: str, truth: bool) -> list[str]:
    sub = str(case.get("subsection") or "")
    hook_l = stem_hook(statement).lower()
    if sub.startswith("4"):
        pads = [
            f"Keep {hook_l} sorted by legal personality, liability, and where the money comes from.",
            "Neighbouring labels with similar vocabulary should not pull the classification away.",
            "Once that defining feature is fixed, the true/false call is stable.",
        ]
        if not truth:
            pads.append(
                "A single well-chosen counterexample under the right ownership or finance test is enough."
            )
        else:
            pads.append("Nothing further in the stem overturns that ownership or finance reading.")
        return pads
    pads = [
        f"Keep {hook_l} tied to buyer type, exchange, or orientation — whichever the stem is testing.",
        "Similar marketing vocabulary can mislead; stick to the criterion the chapter actually uses.",
        "Walk the claim against that criterion once and the verdict holds.",
    ]
    if not truth:
        pads.append(
            "One ordinary counterexample under the right marketing test overturns the overstretch."
        )
    else:
        pads.append("Nothing further in the stem overturns that marketing reading.")
    return pads


def trim_to(text: str, limit: int) -> str:
    """Prefer complete sentences; never leave a dangling half-thought."""
    text = normalize_ws(text)
    if len(text) <= limit:
        return text
    sents = sentences(text)
    acc = []
    for s in sents:
        trial = " ".join(acc + [s])
        if len(trial) <= limit:
            acc.append(s)
        else:
            break
    if acc:
        return " ".join(acc)
    # Single sentence too long: use a compact rewrite rather than shearing words
    return ""


def short_body(clean: list[str], statement: str, truth: bool, case: dict) -> str:
    """Build a short letter body from teaching paras without mid-sentence cuts."""
    candidates: list[str] = []
    for p in clean:
        for s in sentences(p):
            if 50 <= len(s) <= 140:
                candidates.append(s)
            elif len(s) < 50:
                candidates.append(s)
    # Try single good sentence
    for s in candidates:
        if 50 <= len(s) <= 140:
            return s
    # Try pair of short sentences
    for i, s in enumerate(candidates):
        for t in candidates[i + 1 : i + 3]:
            combo = f"{s} {t}" if s.endswith(".") else f"{s}. {t}"
            combo = normalize_ws(combo)
            if 50 <= len(combo) <= 140:
                return combo
    # Compact statement-tied fallback
    hook = stem_hook(statement).lower()
    if truth:
        fb = f"The claim on {hook} matches how this chapter defines the idea."
    else:
        fb = f"The claim on {hook} conflicts with how this chapter defines the idea."
    if len(fb) > 140:
        fb = trim_to(fb, 140) or fb[:140]
    # If first teaching sentence is usable after soft shorten via clause
    if candidates:
        s = candidates[0]
        if len(s) > 140:
            # Split on em dash or semicolon
            for sep in (" — ", "; ", ". "):
                if sep in s:
                    left = s.split(sep)[0].rstrip(",;: ") + "."
                    if 50 <= len(left) <= 140:
                        return left
        if len(s) < 50:
            return (s.rstrip(".") + ". That is the chapter reading.").strip()
    return fb


def pack(paras: list[str], tier: str, case: dict, letter: str, statement: str, truth: bool) -> str:
    """Pack teaching paragraphs into short / medium / long without scrambling sentence order."""
    clean = [normalize_ws(p) for p in paras if normalize_ws(p)]
    if not clean:
        clean = [
            f"The claim about {stem_hook(statement)} "
            + ("matches" if truth else "conflicts with")
            + " the chapter definition."
        ]

    pads = chapter_pads(case, statement, truth)

    if tier == "short":
        return short_body(clean, statement, truth, case)

    if tier == "medium":
        if len(clean) >= 2:
            p1, p2 = clean[0], clean[1]
        else:
            s = sentences(clean[0])
            if len(s) >= 2:
                p1, p2 = s[0], " ".join(s[1:])
            else:
                p1 = clean[0]
                p2 = pads[0]
        i = 2
        while len(p1) + len(p2) < 180:
            if i < len(clean):
                p2 = (p2 + " " + clean[i]).strip()
                i += 1
            else:
                p2 = (p2 + " " + pads[(i - 2) % len(pads)]).strip()
                i += 1
                if i > 6:
                    break
        body = f"{p1}\n\n{p2}"
        if len(p1) + len(p2) > 360:
            s1 = sentences(p1)[:2]
            s2 = sentences(p2)[:2]
            body = " ".join(s1) + "\n\n" + " ".join(s2)
        return body

    chunks = list(clean)
    pi = 0
    while len(chunks) < 3:
        chunks.append(pads[pi % len(pads)])
        pi += 1
    body = "\n\n".join(chunks[:5])
    guard = 0
    while len(body) < 400 and guard < 6:
        body = body + "\n\n" + pads[guard % len(pads)]
        parts = []
        seen = set()
        for p in split_paras(body):
            k = p.lower()[:80]
            if k in seen:
                continue
            seen.add(k)
            parts.append(p)
        body = "\n\n".join(parts[:5])
        guard += 1
    if len(body) > 720:
        parts = split_paras(body)
        while len("\n\n".join(parts)) > 700 and len(parts) > 3:
            parts = parts[:-1]
        body = "\n\n".join(parts)
    while len(split_paras(body)) < 3:
        body = body + "\n\n" + pads[len(split_paras(body)) % len(pads)]
    return body


def scrub(body: str) -> str:
    paras = []
    for p in split_paras(body):
        kept = []
        for s in sentences(p):
            low = s.lower()
            if any(b in low for b in BANNED):
                continue
            if re.fullmatch(r"The statement is (true|false)\.?", s, re.I):
                continue
            if re.fullmatch(r"So the statement is (True|False)\.?", s):
                continue
            kept.append(s)
        if kept:
            paras.append(" ".join(kept))
    return "\n\n".join(paras).strip()


def build_expl(case: dict, letter_idx: int, old_expl: str) -> str:
    statement = case["statements"][letter_idx]
    truth = bool(case["answer_key"][letter_idx])
    letter = "ABCDE"[letter_idx]
    case_id = case["case_id"]
    tier = length_tier(case_id, letter_idx)
    prefix = "TRUE —" if truth else "FALSE —"
    verd = "True" if truth else "False"
    closer = f"So the statement is {verd}."

    paras = teach_paras(case, statement, truth)
    # Optional short setup for some long letters only — prepend, do not scramble
    if tier == "long" and seed(case_id, letter, "setup") % 4 == 0:
        setup = pick(
            case_id,
            letter,
            "setup",
            [
                f"Start from how this chapter defines {stem_hook(statement)}.",
                f"Hold the stem next to the chapter test for {stem_hook(statement)}.",
            ]
            if truth
            else [
                f"Start from how this chapter defines {stem_hook(statement)} — the claim overshoots it.",
                f"Hold the stem next to the chapter test for {stem_hook(statement)}; the mismatch shows quickly.",
            ],
        )
        paras = [setup] + paras

    body = scrub(pack(paras, tier, case, letter, statement, truth))

    if old_expl and jaccard(body, body_of(old_expl)) > 0.55:
        # Alternate pad order / drop setup for novelty
        alt = list(paras[1:]) + list(paras[:1]) if len(paras) > 1 else paras
        body2 = scrub(pack(alt, tier, case, letter + "alt", statement, truth))
        if jaccard(body2, body_of(old_expl)) < jaccard(body, body_of(old_expl)):
            body = body2

    # Soft shape enforcement
    if tier == "short":
        body = short_body(split_paras(body) or [body], statement, truth, case)
    elif tier == "medium":
        if len(split_paras(body)) < 2:
            s = sentences(body)
            if len(s) >= 2:
                body = s[0] + "\n\n" + " ".join(s[1:])
            else:
                body = body + "\n\n" + chapter_pads(case, statement, truth)[0]
        if len(body) < 180:
            body = body + "\n\n" + chapter_pads(case, statement, truth)[0]
    else:
        while len(split_paras(body)) < 3:
            body = body + "\n\n" + chapter_pads(case, statement, truth)[len(split_paras(body)) % 3]
        if len(body) < 400:
            body = body + "\n\n" + chapter_pads(case, statement, truth)[2]

    body = scrub(body)
    fixed = []
    for p in split_paras(body):
        s_keep = []
        for s in sentences(p):
            if re.search(r"\b(the|a|an|to|for|with|of|and|or|th)\.$", s, re.I):
                continue
            s_keep.append(s)
        if s_keep:
            fixed.append(" ".join(s_keep))
    body = "\n\n".join(fixed) if fixed else body

    low = body.lower()
    for b in BANNED:
        if b in low:
            body = re.sub(re.escape(b), "the chapter test", body, flags=re.I)

    if not body.strip():
        body = chapter_pads(case, statement, truth)[0]

    return f"{prefix} {body.strip()}\n\n{closer}"


def rewrite_file(path: Path, n_unlock: int) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    assert n_unlock == int(len(data) * 0.35)
    locked_snap = json.loads(json.dumps(data[n_unlock:]))
    old_unlock = json.loads(json.dumps(data[:n_unlock]))

    lens: list[int] = []
    body_lens: list[int] = []
    para_counts: list[int] = []
    tiers = Counter()
    similar = 0
    errs: list[str] = []
    samples: list[dict] = []

    for i in range(n_unlock):
        case = data[i]
        old_case = old_unlock[i]
        new_expls = []
        case_tiers = []
        for j in range(5):
            letter = "ABCDE"[j]
            tier = length_tier(case["case_id"], j)
            case_tiers.append(tier)
            tiers[tier] += 1
            expl = build_expl(case, j, old_case["tactical_explanations"][j])
            new_expls.append(expl)
            lens.append(len(expl))
            b = body_of(expl)
            body_lens.append(len(b))
            para_counts.append(len(split_paras(b)))
            if jaccard(b, body_of(old_case["tactical_explanations"][j])) > 0.6:
                similar += 1
            # audits
            want = "TRUE —" if case["answer_key"][j] else "FALSE —"
            if not expl.startswith(want):
                errs.append(f"{case['case_id']} {letter}: bad prefix")
            verd = "True" if case["answer_key"][j] else "False"
            if not expl.rstrip().endswith(f"So the statement is {verd}."):
                errs.append(f"{case['case_id']} {letter}: bad closer")
            if len(b) < 45:
                errs.append(f"{case['case_id']} {letter}: thin {len(b)}")
            low = b.lower()
            for ban in ("settle the letter", "nothing exotic", "held against the chapter test"):
                if ban in low:
                    errs.append(f"{case['case_id']} {letter}: banned {ban}")
        if len(set(case_tiers)) < 2:
            errs.append(f"{case['case_id']}: flat tiers {case_tiers}")
        case["tactical_explanations"] = new_expls
        if i in (0, 1, n_unlock // 2, n_unlock - 1):
            samples.append(
                {
                    "case_id": case["case_id"],
                    "tiers": case_tiers,
                    "body_lens": [len(body_of(e)) for e in new_expls],
                    "A": new_expls[0][:280],
                    "C": new_expls[2][:280],
                }
            )

    assert data[n_unlock:] == locked_snap, f"locked mutated in {path.name}"
    # statements/keys unchanged
    for i in range(n_unlock):
        assert data[i]["statements"] == old_unlock[i]["statements"]
        assert data[i]["answer_key"] == old_unlock[i]["answer_key"]
        assert data[i]["case_id"] == old_unlock[i]["case_id"]

    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {
        "file": path.name,
        "unlocked_cases": n_unlock,
        "letters": n_unlock * 5,
        "body_min": min(body_lens),
        "body_max": max(body_lens),
        "body_mean": round(statistics.mean(body_lens), 1),
        "body_stdev": round(statistics.pstdev(body_lens), 1),
        "tiers": dict(tiers),
        "para_dist": dict(Counter(para_counts)),
        "high_similarity_to_old": similar,
        "audit_errs": len(errs),
        "audit_sample": errs[:15],
        "samples": samples,
    }


def main() -> None:
    for path, n in UNLOCK.items():
        info = rewrite_file(path, n)
        print(json.dumps(info, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
