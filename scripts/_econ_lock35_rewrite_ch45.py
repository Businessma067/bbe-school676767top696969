#!/usr/bin/env python3
"""Rewrite unlocked (~35%) Ch4–Ch5 tactical_explanations as natural tutor prose.

Only first floor(n*0.35) cases are touched. Locked cases are left untouched.
Each letter gets 2–5 teaching sentences tied to that statement — no robotic closers,
no shared definition dump across A–E.
"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UNLOCK_RATIO = 0.35

FILES = [
    ROOT / "src/data/economics-cases-ch4-subtopics.json",
    ROOT / "src/data/economics-cases-ch5-subtopics.json",
]


def unlock_n(n: int) -> int:
    return int(n * UNLOCK_RATIO)


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def n_sentences(case_id: str, letter: str) -> int:
    # Skew away from a flat ~270–290 plateau: plenty of short and long answers.
    r = seed(case_id, letter, "n") % 100
    if r < 22:
        return 2
    if r < 45:
        return 3
    if r < 75:
        return 4
    return 5


def focus_phrase(statement: str) -> str:
    """One clean noun phrase from the stem (prefer the grammatical subject)."""
    pats = [
        r"sole proprietorships?",
        r"sole proprietors?",
        r"sole traders?",
        r"limited partnerships?",
        r"limited partners?",
        r"general partnerships?",
        r"partnership agreements?",
        r"partnerships?",
        r"partners?",
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
        r"dental membership schemes?",
        r"specialty cosmetics",
        r"vehicle maintenance(?: services?)?",
        r"printers?",
        r"vehicles?",
        r"restaurants?",
        r"households?",
        r"products?",
        r"profits?",
        r"revenues?",
        r"employees?",
        r"personnel",
        r"administrative tasks?",
        r"boards? of directors",
        r"internal(?:ly generated)? funds?",
        r"external creditors?",
    ]
    earliest = None
    for pat in pats:
        m2 = re.search(pat, statement, re.I)
        if not m2:
            continue
        if earliest is None or m2.start() < earliest[0]:
            earliest = (m2.start(), m2.group(0))
    if earliest:
        return earliest[1]
    # Subject-ish fallback: noun after article / possessive
    m3 = re.search(
        r"\b(?:the|a|an|this|that|each|every|when|because|even when|hiring)\s+([a-z][a-z\s-]{2,40}?)(?:\s+(?:is|are|means|may|can|of)\b|,)",
        statement,
        re.I,
    )
    if m3:
        return m3.group(1).strip()[:40]
    return "the claim"




# ── teaching cores keyed by detected topic ──────────────────────────────────

def detect_topics(statement: str, subsection: str) -> list[str]:
    sl = statement.lower()
    topics: list[str] = []

    def add(t: str) -> None:
        if t not in topics:
            topics.append(t)

    corp_subject = bool(
        re.match(r"^\s*corporations?\b", statement, re.I)
        or re.match(r"^\s*shareholders?\b", statement, re.I)
        or re.search(r"\bcorporations?\b.*\b(share capital|loans?|credit|liability|set up|difficult)", sl)
    )
    sole_mention = any(
        k in sl for k in ("sole proprietor", "sole trader", "sole proprietorship")
    )
    # "than sole proprietors" comparisons under a corporate subject are not sole-prop topics
    sole_ctx = (sole_mention and not corp_subject) or (subsection == "4.1" and not corp_subject)
    # Contrast "rather than … board" inside sole-prop stems is management, not corp theory
    board_contrast = "board of director" in sl and sole_ctx and not corp_subject

    # Finance first (wins over generic sole dumps)
    if "trade credit" in sl:
        add("trade_credit")
    if "overdraft" in sl:
        add("overdraft")
    if "retained" in sl or ("sale" in sl and "asset" in sl) or ("unused" in sl and "asset" in sl):
        add("internal_finance")
    if "internal" in sl and ("finance" in sl or "fund" in sl or "interest" in sl):
        add("internal_finance")
    if "external" in sl and ("finance" in sl or "fund" in sl or "creditor" in sl or "interest" in sl):
        add("external_finance")
    if (("owner" in sl and "saving" in sl) or "investor" in sl) and (
        "finance" in sl or "fund" in sl or "external" in sl or "internal" in sl
    ):
        add("external_finance")
    if "collateral" in sl or "mortgage" in sl:
        add("collateral")

    if "limited partner" in sl or "limited partnership" in sl:
        add("limited_partner")
    if "general partnership" in sl or ("partnership" in sl and "unlimited" in sl):
        add("general_partner")
    if "partnership agreement" in sl:
        add("partner_agreement")
    if ("partnership" in sl or (subsection == "4.2" and "partner" in sl)) and not (
        corp_subject and re.search(r"\bthan\b.*\bpartnership", sl)
    ):
        add("partnership")

    if corp_subject or (
        any(k in sl for k in ("corporation", "shareholder", "share capital"))
        and not board_contrast
        and not (sole_ctx and "rather than" in sl)
    ):
        add("corporation")

    if sole_ctx:
        if "legal" in sl or "tax" in sl or "corporate income" in sl or "entity" in sl or "legal person" in sl:
            add("sole_legal_tax")
        if "liab" in sl or "private asset" in sl or "personal property" in sl:
            add("sole_liability")
        if any(k in sl for k in ("continu", "retir", "illness", "succession")):
            add("sole_continuity")
        ownership_def = bool(re.search(r"owned by one|owns,? manages|owns and (?:manages|runs)", sl))
        if (
            any(
                k in sl
                for k in (
                    "decision",
                    "consult",
                    "opinion",
                    "board",
                    "personnel",
                    "employee",
                    "hire",
                    "staff",
                    "delegat",
                )
            )
            or ("manage" in sl and not ownership_def)
            or ("risk" in sl and "unlimited" not in sl)
        ):
            add("sole_management")
        if "easy" in sl or ("minimum" in sl and "capital" in sl) or (
            "difficult" in sl and "set up" in sl and "corporation" in sl
        ):
            add("sole_setup")
        # Ownership definition stems (owned by one person…) — keep sole, skip management dump
        if re.search(r"owned by one|owns,? manages|owns and (?:manages|runs)", sl):
            add("sole")
        elif "sole_management" not in topics and "sole_legal_tax" not in topics:
            add("sole")
        elif "owned" in sl or "proprietorship is" in sl:
            add("sole")

    # If corporations compared with sole/partnership on formation difficulty
    if "corporation" in sl and ("difficult" in sl or "more options" in sl or "financial funds" in sl):
        # corporation topic should lead
        if "corporation" in topics:
            topics = ["corporation"] + [t for t in topics if t != "corporation"]
        else:
            topics = ["corporation"] + topics

    # Marketing
    if "excludes services" in sl or "only to physical" in sl or "lack physical" in sl or (
        "physical" in sl and "product" in sl and ("only" in sl or "unless" in sl)
    ):
        add("product_services")
    if "good and/or service" in sl or "every good" in sl or (
        "product is" in sl and "service" in sl and "wish" in sl
    ):
        add("product_def")
    if (
        any(k in sl for k in ("exchange", "gift", "without payment", "not offered for"))
        and "product" in sl
    ) or ("internal" in sl and "product" in sl and "exchange" in sl):
        add("product_exchange")
    if "producer product" in sl or "business-to-business" in sl or re.search(r"\bb2b\b", sl):
        add("producer")
    if "consumer product" in sl or "business-to-consumer" in sl or re.search(r"\bb2c\b", sl):
        add("consumer")
    if ("always" in sl or "must keep one fixed" in sl) and "product" in sl:
        add("buyer_flip")
    if "factory" in sl or "packaging size" in sl or "manufactured" in sl:
        add("buyer_not_factory")
    if "usp" in sl or "unique selling" in sl or "differentiat" in sl or (
        "brand" in sl and subsection.startswith("5.2")
    ):
        add("usp")
    if "market share" in sl or (re.search(r"\bshare\b", sl) and subsection.startswith("5.2")):
        add("market_share")
    if "satisf" in sl or ("loyal" in sl and "customer" in sl and "crm" not in sl):
        add("satisfaction")
    if ("sales" in sl or "revenue" in sl) and subsection.startswith("5.2"):
        add("sales_obj")
    if "profit" in sl and subsection.startswith("5."):
        add("profit_obj")
    if "product-orient" in sl or "product orient" in sl:
        add("product_orientation")
    if "market-orient" in sl or "market orient" in sl:
        add("market_orientation")
    if any(
        k in sl
        for k in (
            "crm",
            "customer relationship",
            "newsletter",
            "coupon",
            "loyalty card",
            "loyalty programme",
            "loyalty program",
            "personal data",
            "anonymity",
        )
    ):
        add("crm")

    # Orientation fit / quality stems in 5.3 without explicit labels
    if subsection == "5.3" and not any(
        t in topics for t in ("product_orientation", "market_orientation", "crm")
    ):
        if "orientation" in sl or "expect" in sl or "competitor" in sl:
            add("market_orientation")
            add("product_orientation")

    if not topics:
        fb = {
            "4.1": ["sole"],
            "4.2": ["partnership"],
            "4.3": ["corporation"],
            "5.1": ["product_def"],
            "5.2": ["satisfaction"],
            "5.3": ["market_orientation", "product_orientation"],
        }
        for t in fb.get(subsection, ["product_def"]):
            add(t)
    return topics


TEACH: dict[str, dict[str, list[str]]] = {
    "sole": {
        "true": [
            "A sole proprietorship concentrates ownership and day-to-day running in one natural person.",
            "That person owns the trading assets and makes the operating decisions.",
        ],
        "false": [
            "A sole proprietorship is still one natural person owning and running the firm — not a separate company person.",
            "Features that belong to corporations do not attach just because a trading name is used.",
        ],
    },
    "sole_legal_tax": {
        "true": [
            "Because the business is not a separate legal entity, trading profit flows through to the owner.",
            "Profits are declared on the owner's personal income tax return rather than on a stand-alone corporate return.",
        ],
        "false": [
            "A sole proprietorship has no separate legal personality and does not file corporate income tax on its own.",
            "Separate corporate tax filing belongs to incorporated forms, not to a sole trader.",
        ],
    },
    "sole_liability": {
        "true": [
            "Unlimited liability means creditors can reach the proprietor's private assets if business assets are insufficient.",
            "Personal exposure is the risk counterpart of undivided ownership and control.",
        ],
        "false": [
            "Sole proprietors do not enjoy limited liability by default; private assets remain at stake for business debts.",
            "Pledging collateral or hiring staff does not convert the firm into a limited company.",
        ],
    },
    "sole_continuity": {
        "true": [
            "Continuity depends on that one person's capacity to own and manage.",
            "Retirement or long-term illness can stall operations unless a transfer, sale, or covering arrangement is planned.",
        ],
        "false": [
            "Nothing in the sole-proprietorship form automatically keeps trading unchanged when the owner retires or is long-term absent.",
            "Employees do not inherit ownership by default.",
        ],
    },
    "sole_management": {
        "true": [
            "With no co-owners, decision rights are undivided: no partners' vote or board resolution is required.",
            "The proprietor may listen to advisers, but consultation is not a structural duty of the form.",
            "Delegating bookkeeping or routine tasks does not hand strategic authority to employees.",
        ],
        "false": [
            "Hiring expands capacity; staff execute assigned work while strategic direction stays with the proprietor.",
            "Employment is not an incorporation trigger and does not shift residual risk onto workers.",
        ],
    },
    "sole_setup": {
        "true": [
            "The form is comparatively easy to establish: there is typically no mandatory minimum share-capital deposit.",
            "Owners may still inject personal savings voluntarily even though no company-style capital floor applies.",
        ],
        "false": [
            "There is no mandatory minimum share capital before a sole trader may begin.",
            "Confusing sole proprietorship with company capital rules misstates how start-up funding works.",
        ],
    },
    "partnership": {
        "true": [
            "A partnership is a business jointly founded by two or more persons who share ownership.",
            "Partners can divide tasks and specialise while remaining jointly responsible under the form's liability rules.",
        ],
        "false": [
            "Joint founding by two or more persons is what defines a partnership — not a sole trader with helpers.",
            "Adding employees alone does not create a partnership; ownership must be shared.",
        ],
    },
    "partner_agreement": {
        "true": [
            "Partners normally set a partnership agreement covering rights, responsibilities, and profit-and-loss division.",
            "Clear written terms make disputes over control and residual claims easier to resolve.",
        ],
        "false": [
            "Skipping an agreement does not erase shared ownership; it only leaves rights and profit shares less clear.",
        ],
    },
    "general_partner": {
        "true": [
            "In a general partnership, partners typically share equal rights and responsibilities unless varied by agreement.",
            "Unlimited liability means each partner can be pursued for the firm's debts — including from private assets.",
        ],
        "false": [
            "General partners do not enjoy capped liability merely because tasks are divided.",
            "Creditors need not split claims proportionally before pursuing one partner's private assets.",
        ],
    },
    "limited_partner": {
        "true": [
            "A limited partner's liability is capped at the capital contributed.",
            "Limited partners typically must not take part in management — that is the usual trade-off for the cap.",
        ],
        "false": [
            "Active management usually breaks the limited-partner pattern; capped liability is tied to staying out of day-to-day control.",
            "Calling someone a limited partner does not cap liability if they act as a general managing partner.",
        ],
    },
    "corporation": {
        "true": [
            "A corporation is a separate legal person: it can own property, hire, contract, sue and be sued in its own name.",
            "Shareholders' liability is generally limited to capital invested; creditors claim against the company first.",
            "Shareholders need not manage day to day, and corporations can raise both share capital and loan finance.",
            "Corporations are more difficult to set up than sole proprietorships or partnerships because incorporation needs extra formal steps.",
        ],
        "false": [
            "Shareholders do not usually bear unlimited liability for ordinary company debts beyond what they invested.",
            "Corporations are not limited to share issues alone — loans and credit are normal funding sources too.",
            "Incorporation involves more formal steps than a sole proprietorship or partnership.",
        ],
    },
    "internal_finance": {
        "true": [
            "Internal finance comes from inside the firm: retained profit or cash from selling assets no longer needed.",
            "No new outside creditor is created for that funding slice, so borrowing interest is avoided on it.",
        ],
        "false": [
            "Retained profit and surplus-asset sales are internal, not external, even though cash lands in the business account.",
            "Once profit is withdrawn for personal spending it has left the business and cannot also count as internal reinvestment.",
        ],
    },
    "external_finance": {
        "true": [
            "External finance comes from outside sources such as owner start-up savings, investor funds, bank credit, or bonds.",
            "Legal sameness of owner and firm does not re-label owner capital as internal finance.",
        ],
        "false": [
            "Owner start-up savings, investor funds, and bank credit remain external — depositing them in the business account only records receipt.",
            "External labels follow the origin of the funds, not which drawer holds the cash.",
        ],
    },
    "trade_credit": {
        "true": [
            "Trade credit lets the firm pay suppliers later and creates a short-term external liability until settlement.",
            "Deferral changes cash timing; it is not a grant and not internal finance.",
        ],
        "false": [
            "Trade credit must be repaid within the agreed period and does not erase the proprietor's liability.",
            "It is purchase-cycle finance, not long-term equity.",
        ],
    },
    "overdraft": {
        "true": [
            "A bank overdraft is flexible short-term external credit: the account may go negative within a limit.",
            "Interest is charged when the account is overdrawn, not on a healthy positive balance.",
        ],
        "false": [
            "An overdraft remains a liability and does not create limited liability or incorporate the firm.",
        ],
    },
    "collateral": {
        "true": [
            "Long-term lenders often require pledgeable assets — frequently land or property via a mortgage — as security.",
            "Collateral backs repayment; the loan itself remains a liability, and pledged private property can still be at stake.",
        ],
        "false": [
            "Pledging collateral secures the lender; it does not waive all interest or convert unlimited liability into limited liability.",
        ],
    },
    "product_def": {
        "true": [
            "In marketing, a product is every good and/or service that can be exchanged to fulfil customer wishes and needs.",
            "Tangible merchandise and intangible services both qualify when they are offered through exchange.",
        ],
        "false": [
            "Narrowing 'product' to one physical category fights the wide marketing definition.",
        ],
    },
    "product_services": {
        "true": [
            "Services exchanged to fulfil wishes and needs are products in marketing terminology.",
        ],
        "false": [
            "Marketing's product definition deliberately includes services as well as physical goods.",
            "Physical form is not a requirement for the product label.",
        ],
    },
    "product_exchange": {
        "true": [
            "Exchange is required: the good or service must be offered in a customer trade.",
        ],
        "false": [
            "Items moved only internally or given without trade fall outside the marketing product definition.",
            "Payment or exchange is not optional decoration — it is part of what makes something a product here.",
        ],
    },
    "producer": {
        "true": [
            "Producer products are sold business-to-business: the purchaser is another firm.",
            "What matters is the buyer's identity as a business customer in that transaction.",
        ],
        "false": [
            "Factory origin, weight, or the seller's registration alone do not define a producer product.",
            "If the buyer is a household, the same item is a consumer product instead.",
        ],
    },
    "consumer": {
        "true": [
            "Consumer products are sold business-to-consumer: the buyer is a consumer or private household.",
            "Household or individual purchase — not retail branding or luxury status — drives the label.",
        ],
        "false": [
            "Packaging size or shelf display does not define a consumer product.",
            "A business buyer makes the sale B2B even if households also use similar models.",
        ],
    },
    "buyer_flip": {
        "true": [
            "Classification follows the buyer in that transaction, so the label can change from sale to sale.",
        ],
        "false": [
            "The same catalogue item can be a producer product in one sale and a consumer product in another.",
            "Absolute words like 'always' usually fail once you change who is buying.",
        ],
    },
    "buyer_not_factory": {
        "true": [
            "Buyer type — business versus household — is the classification test.",
        ],
        "false": [
            "Manufacturing location and packaging size are not the defining tests for producer versus consumer products.",
            "Ask who is purchasing, not where the item was made or how large the box is.",
        ],
    },
    "satisfaction": {
        "true": [
            "Dissatisfied customers are unlikely to buy again; satisfied buyers often become loyal and return.",
            "Satisfaction therefore interlocks with sales, share, and profit aims rather than sitting alone.",
        ],
        "false": [
            "Satisfaction is tightly linked to repeat purchase and loyalty — it is not an unrelated side goal.",
        ],
    },
    "usp": {
        "true": [
            "A unique selling proposition makes the offer stand out from similar rivals.",
            "Branding supports that differentiation so the product seems special, unique, or better to buyers.",
        ],
        "false": [
            "Without a clear point of difference, close substitutes compete mainly on price or habit — that is not a USP.",
        ],
    },
    "market_share": {
        "true": [
            "Market share is the firm's relative weight in a market compared with competitors.",
            "Gaining and keeping share is a standard marketing objective because it signals competitiveness.",
        ],
        "false": [
            "Share is not ignored once sales exist; competitive standing remains a tracked marketing aim.",
        ],
    },
    "sales_obj": {
        "true": [
            "Sales generate the revenues a business needs to cover costs and support profit.",
            "Maintaining or increasing sales is therefore a core marketing objective.",
        ],
        "false": [
            "Sales volume matters for covering costs; treating it as irrelevant to marketing objectives misreads the chapter.",
        ],
    },
    "profit_obj": {
        "true": [
            "Profitability reimburses owners for invested capital and can fund reinvestment.",
            "Higher sales often help, but profit still depends on costs and margins as well as revenue.",
        ],
        "false": [
            "Profit is not automatic from any sales increase; costs and margins still decide the residual.",
        ],
    },
    "product_orientation": {
        "true": [
            "A product-oriented business starts with the product and its features and only later works out how to sell it.",
            "Success is expected mainly from the quality of those features.",
        ],
        "false": [
            "Starting with customer-needs analysis is market orientation, not product orientation.",
            "Product orientation is feature-first, then selling plans — not needs-first design.",
        ],
    },
    "market_orientation": {
        "true": [
            "A market-oriented business first studies customers' needs and wants and then shapes the offering to match.",
            "That stance helps anticipate demand shifts earlier than a purely product-led approach.",
        ],
        "false": [
            "Skipping needs analysis and leading with specifications alone is product orientation, not market orientation.",
        ],
    },
    "crm": {
        "true": [
            "CRM aims at lasting relationships by keeping customer data for newsletters, coupons, and product information.",
            "Customers often willingly share data through loyalty cards or accounts in exchange for discounts.",
        ],
        "false": [
            "Deleting all personal records after every transaction, or promising complete anonymity, would defeat CRM's retention purpose.",
            "Sensitive use of data still matters — but recognition of returning customers is the point of the tools.",
        ],
    },
}


def pick_teach(
    topics: list[str],
    truth: bool,
    case_id: str,
    letter: str,
    statement: str = "",
) -> list[str]:
    key = "true" if truth else "false"
    sl = statement.lower()
    lines: list[str] = []

    def score(line: str) -> int:
        ll = line.lower()
        s = 0
        for kw in (
            "tax", "legal person", "share capital", "loan", "credit", "board",
            "continu", "retir", "decision", "delegat", "employee", "hire",
            "retained", "internal", "external", "trade credit", "overdraft",
            "producer", "consumer", "service", "exchange", "satisf", "usp",
            "market share", "sales", "profit", "orient", "crm", "anonym", "coupon",
            "agreement", "unlimited", "limited partner", "set up", "difficult",
            "liability", "finance",
        ):
            if kw in sl and kw in ll:
                s += 3
        if ("liab" in sl or "liability" in sl) and ("liab" in ll or "liability" in ll):
            s += 4
        if ("loan" in sl or "credit" in sl or "share capital" in sl) and (
            "loan" in ll or "credit" in ll or "share capital" in ll or "equity" in ll or "share issues" in ll
        ):
            s += 3
        return s

    for topic in topics:
        block = TEACH.get(topic, {})
        opts = block.get(key) or block.get("true") or block.get("false") or []
        if not opts:
            continue
        ranked = sorted(opts, key=lambda ln: (-score(ln), seed(case_id, letter, ln[:40]) % 7))
        lines.append(ranked[0])
        if len(ranked) > 1 and score(ranked[1]) > 0 and len(lines) < 2:
            lines.append(ranked[1])
        if len(lines) >= 2:
            break
    out: list[str] = []
    for ln in lines:
        if ln not in out:
            out.append(ln)
    return out


def apply_sentence(
    statement: str,
    truth: bool,
    focus: str,
    topics: list[str],
    case_id: str,
    letter: str,
) -> str:
    sl = statement.lower()

    if "sales double" in sl and "rivals" in sl and "share" in sl:
        return (
            "Share is firm sales ÷ market volume, so equal proportional growth leaves that "
            "ratio the same — the chapter still wants share tracked separately from absolute sales."
        )
    if not truth and ("always" in sl or "never" in sl or re.search(r"\bonly\b", sl)):
        return (
            f"Absolute wording is the trap: one ordinary counterexample under the right test "
            f"for {focus} is enough."
        )
    if not truth and "printer" in sl:
        return (
            "A printer bought for office use by a business is a producer product even when "
            "households also buy similar models."
        )
    if truth and "vehicle" in sl and "restaurant" in sl:
        return (
            "Sold into the restaurant chain's operations, the vehicle is B2B and therefore a producer product."
        )
    if truth and "vehicle" in sl and any(
        k in sl for k in ("personal", "domestic", "household", "individual consumer")
    ):
        return (
            "Sold for personal or domestic use to a household buyer, that vehicle is a consumer product."
        )
    if not truth and "excludes services" in sl:
        return "Consultancy, maintenance, or support sold to customers still count as products."
    if not truth and "packaging" in sl:
        return "Retail pack size never replaces the household-versus-business buyer test."
    if not truth and "factory" in sl:
        return "Where the item was manufactured does not decide B2B versus B2C."
    if not truth and "separate legal person" in sl and "sole" in sl:
        return "Treating the sole trader as a corporate taxpayer mixes up unincorporated and incorporated forms."
    if not truth and ("exclusively on share capital" in sl or "cannot raise loans" in sl):
        return "Bank loans, bonds, and other credit sit beside equity in normal corporate finance."
    if not truth and ("anonymity" in sl or "deleting all personal" in sl):
        return "Loyalty cards and follow-up coupons work because the firm can recognise returning customers."
    if truth and "partnership agreement" in sl:
        return "Without those terms, fights over control and residual claims are harder to settle."
    if truth and "more difficult to set up" in sl:
        return "Incorporation needs more formal steps than starting as a sole trader or partnership."
    if truth and ("internally generated" in sl or ("retained profit" in sl and "interest" in sl)):
        return "Avoiding creditor interest is exactly why retained surplus is attractive internal finance."
    if not truth and "unrelated" in sl and "satisf" in sl:
        return "Repeat purchase and loyalty are the practical payoff of satisfaction — not a separate sealed box."
    if truth and "identical marketing objectives" in sl:
        return "Orientation is about sequence and emphasis; stated goals like share or profit can still look alike."

    variants_t = [
        f"Put beside that test, the wording on {focus} holds.",
        f"That is the mechanism the sentence correctly names for {focus}.",
        f"So the claim about {focus} follows the chapter definition.",
        f"Nothing exotic is required — that is exactly how intro courses treat {focus}.",
    ]
    variants_f = [
        f"Put beside that test, the wording on {focus} fails.",
        f"That is the mechanism the sentence misnames for {focus}.",
        f"So the claim about {focus} does not survive the chapter definition.",
        f"Swap in the right criterion and the assertion on {focus} collapses.",
    ]
    pool = variants_t if truth else variants_f
    return pool[seed(case_id, letter, "app") % len(pool)]


def opener(statement: str, truth: bool, focus: str, case_id: str, letter: str, used: set[str]) -> str:
    """Natural first sentence — unique within the case; grammar-safe around focus."""
    style = seed(case_id, letter, "op") % 6
    if truth:
        cands = [
            f"The sentence is right about {focus}.",
            f"Yes — that is how {focus} works in this chapter.",
            f"Read the claim on {focus} against the textbook test: it fits.",
            f"This is a fair intro-level description of {focus}.",
            f"The wording tracks the definition of {focus}.",
            f"On {focus}, the statement names the correct mechanism.",
        ]
    else:
        cands = [
            f"The sentence is wrong about {focus}.",
            f"No — that is not how {focus} works in this chapter.",
            f"Read the claim on {focus} against the textbook test: it fails.",
            f"This mislabels {focus} at intro level.",
            f"The wording fights the definition of {focus}.",
            f"On {focus}, the statement names the wrong mechanism.",
        ]
    for i in range(len(cands)):
        cand = cands[(style + i) % len(cands)]
        key = cand[:48]
        if key not in used:
            used.add(key)
            return cand
    used.add(f"{letter}:{focus}"[:48])
    return cands[style]


def extra_sentence(
    statement: str,
    truth: bool,
    focus: str,
    topics: list[str],
    case_id: str,
    letter: str,
) -> str | None:
    sl = statement.lower()
    if "corporation" in topics and truth and any(
        k in sl for k in ("difficult", "more options", "financial funds", "share capital as well")
    ):
        return (
            "Formation is heavier than for unincorporated forms, but the legal-person structure "
            "opens more financing routes."
        )
    if "sole_continuity" in topics and truth:
        return "Staff do not automatically become owners when the proprietor steps away."
    if "buyer_flip" in topics or (
        "always" in sl and any(t in topics for t in ("producer", "consumer", "product_def"))
    ):
        return "Change the purchaser and the producer/consumer label can flip even if the item looks identical."
    if "market_orientation" in topics and "product_orientation" in topics and truth and "identical" in sl:
        return "Firms may chase similar objectives while still starting from opposite ends of the process."
    if truth and "limited_partner" in topics:
        return "Capital contribution without management is the classic limited-partner pattern."
    if not truth and "satisfaction" in topics and "unrelated" in sl:
        return "Marketing objectives are taught as interrelated, not as sealed boxes."
    if "crm" in topics and not truth:
        return "Recognition of returning customers is the point of newsletters, coupons, and loyalty tools."
    if "internal_finance" in topics and truth:
        return "The cash may sit in the same bank account; the label still follows its origin inside operations."
    extras = [
        f"Keep neighbouring labels from a different ownership or marketing category out of the reading.",
        f"The distinguishing feature for {focus} is usually enough to settle the letter.",
        f"If two readings seem plausible, prefer the chapter's defining test over everyday usage.",
        f"A quick counter-check against the definition keeps the judgement stable.",
    ]
    return extras[seed(case_id, letter, "ex") % len(extras)]


def build_expl(case: dict, letter: str, statement: str, truth: bool, used_openers: set[str]) -> str:
    prefix = "TRUE —" if truth else "FALSE —"
    focus = focus_phrase(statement)
    topics = detect_topics(statement, case.get("subsection", ""))
    target = n_sentences(case["case_id"], letter)

    sents: list[str] = []
    sents.append(opener(statement, truth, focus, case["case_id"], letter, used_openers))

    teach = pick_teach(topics, truth, case["case_id"], letter, statement)
    app = apply_sentence(statement, truth, focus, topics, case["case_id"], letter)

    # Always teach at least one concept line, then the stem-tied application
    for line in teach[:1]:
        if line not in sents:
            sents.append(line)
    if app not in sents:
        sents.append(app)
    for line in teach[1:]:
        if len(sents) >= target:
            break
        if line not in sents:
            sents.append(line)

    while len(sents) < 2:
        sents.append(teach[0] if teach else f"Apply the chapter definition carefully to {focus}.")

    if len(sents) < target:
        extra = extra_sentence(statement, truth, focus, topics, case["case_id"], letter)
        if extra and extra not in sents:
            sents.append(extra)

    # If still short, prefer another high-scoring teach line only
    if len(sents) < target:
        for line in teach:
            if line not in sents:
                sents.append(line)
            if len(sents) >= target:
                break

    # Cap at target (keep at least 2)
    if len(sents) > target:
        sents = sents[: max(2, target)]

    # Paragraph break for longer answers
    if len(sents) >= 4:
        mid = (len(sents) + 1) // 2
        body = " ".join(sents[:mid]) + "\n\n" + " ".join(sents[mid:])
    else:
        body = " ".join(sents)

    # Ban robotic closers if any slipped in
    body = re.sub(
        r"(?is)\s*(The statement is (true|false)\.|The sentence therefore reports.*|"
        r"Under that definition the assertion.*|Nothing in the wording contradicts.*)\s*$",
        "",
        body,
    ).strip()

    return f"{prefix} {body}"


def rewrite_case(case: dict) -> list[str]:
    used: set[str] = set()
    out = []
    for i, (stmt, truth) in enumerate(zip(case["statements"], case["answer_key"])):
        out.append(build_expl(case, "ABCDE"[i], stmt, bool(truth), used))
    return out


def audit(case: dict) -> list[str]:
    errs = []
    opens = []
    for i, (k, e) in enumerate(zip(case["answer_key"], case["tactical_explanations"])):
        letter = "ABCDE"[i]
        want = "TRUE —" if k else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: prefix")
        if re.search(r"The statement is (true|false)", e, re.I):
            errs.append(f"{case['case_id']} {letter}: closer")
        body = e.split("—", 1)[-1].strip()
        sents = [s for s in re.split(r"(?<=[.!?])\s+", body.replace("\n\n", " ")) if s.strip()]
        if not (2 <= len(sents) <= 5):
            errs.append(f"{case['case_id']} {letter}: sents={len(sents)}")
        if len(body) < 90:
            errs.append(f"{case['case_id']} {letter}: short")
        opens.append(body.split(".")[0][:45])
    if len(set(opens)) < 3:
        errs.append(f"{case['case_id']}: similar openers ({len(set(opens))})")
    return errs


def main() -> None:
    # Reload from git HEAD to rewrite from original unlocked content? 
    # Worktree may already be rewritten — that's fine; we overwrite unlocked again.
    for path in FILES:
        data = json.loads(path.read_text(encoding="utf-8"))
        n = unlock_n(len(data))
        # Snapshot locked for safety check
        locked_snap = json.loads(json.dumps(data[n:]))
        errs: list[str] = []
        lens: list[int] = []
        for i in range(n):
            data[i]["tactical_explanations"] = rewrite_case(data[i])
            errs.extend(audit(data[i]))
            lens.extend(len(x) for x in data[i]["tactical_explanations"])
        assert data[n:] == locked_snap, f"locked mutated in {path.name}"
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(
            f"{path.name}: unlocked {n}/{len(data)} letters={n*5} "
            f"len[{min(lens)}..{max(lens)}] avg={sum(lens)//len(lens)} "
            f"audit_errs={len(errs)}"
        )
        for e in errs[:6]:
            print(" ", e)


if __name__ == "__main__":
    main()
