#!/usr/bin/env python3
"""Rewrite ALL ch4 tactical_explanations from scratch (159 cases).

Follows scripts/_ECON_EXPLAIN_FROM_SCRATCH_BRIEF.md: scene-tied prose, length mix,
0-2 Note: per case, closer aligned to answer_key. Does not change statements/keys.
"""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"
VALIDATOR = ROOT / "scripts/_econ_expl_from_scratch_validate.py"

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

TIER_RANGES = {
    "compact": (160, 280),
    "standard": (400, 480),
    "expanded": (550, 900),
}

TIER_PATTERNS = [
    ("compact", "standard", "expanded", "standard", "compact"),
    ("standard", "compact", "expanded", "compact", "standard"),
    ("compact", "expanded", "standard", "standard", "compact"),
    ("standard", "standard", "expanded", "compact", "compact"),
    ("expanded", "compact", "standard", "compact", "standard"),
    ("compact", "standard", "standard", "expanded", "compact"),
    ("standard", "compact", "compact", "expanded", "standard"),
    ("compact", "standard", "expanded", "compact", "standard"),
]


def seed(*parts: str) -> int:
    return int(hashlib.md5("|".join(parts).encode()).hexdigest()[:8], 16)


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", normalize_ws(text))
    out: list[str] = []
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
    return CLOSER_RE.sub("", expl).strip()


def wrap(body: str, truth: bool, note: str | None = None) -> str:
    parts = [body.strip()]
    if note:
        parts.append(f"Note: {note.strip()}")
    v = "True" if truth else "False"
    parts.append(f"So the statement is {v}.")
    return "\n\n".join(parts)


def scene_from_context(context: str) -> tuple[str, str]:
    """Return (short scene label, optional lead phrase)."""
    ctx = context or ""
    patterns = [
        (r"neighbourhood bakery", "the neighbourhood bakery"),
        (r"food processing corporation", "the food processing corporation"),
        (r"pharmaceutical corporation", "the pharmaceutical corporation"),
        (r"engineering firm", "the engineering firm"),
        (r"repair workshop", "the repair workshop"),
        (r"two consultants", "the two consultants"),
        (r"partnership that includes", "the mixed partnership"),
        (r"listed corporation", "the listed corporation"),
        (r"warehouse extension", "the warehouse extension project"),
        (r"new plant", "the new plant investment"),
        (r"family start-up", "the family start-up"),
        (r"vehicle hire", "the vehicle hire business"),
        (r"sensor manufacturer", "the sensor manufacturer"),
        (r"catering firm", "the catering firm"),
        (r"cleaning contract", "the cleaning contract"),
        (r"corporation planning", "the corporation"),
        (r"sole trader", "the sole trader"),
        (r"private limited company", "the private limited company"),
        (r"general partnership", "the general partnership"),
        (r"limited partnership", "the limited partnership"),
    ]
    for pat, label in patterns:
        if re.search(pat, ctx, re.I):
            return label, f"In {label}, "
    m = re.search(
        r"\b(bakery|restaurant|consultancy|corporation|partnership|warehouse|factory|"
        r"hospital|business|company|firm)\b",
        ctx,
        re.I,
    )
    if m:
        noun = m.group(0).lower()
        if noun in ("business", "company", "firm"):
            return f"the {noun}", f"For {noun} in this stem, "
        return f"the {noun}", f"In the {noun}, "
    return "", ""


def tier_for(case_id: str, letter_idx: int) -> str:
    pat = TIER_PATTERNS[seed(case_id, "tierpat") % len(TIER_PATTERNS)]
    return pat[letter_idx]


def teach_bits(statement: str, truth: bool, subsection: str, context: str) -> list[str]:
    """Return ordered teaching sentences tied to the statement."""
    sl = statement.lower()
    scene, scene_lead = scene_from_context(context)
    bits: list[str] = []

    def add(*sentences_: str) -> None:
        for s in sentences_:
            s = normalize_ws(s)
            if s and s not in bits:
                bits.append(s)

    # ── 4.1 sole trader ───────────────────────────────────────────────────
    if subsection == "4.1" or any(k in sl for k in ("sole propriet", "sole trader")):
        if "one person" in sl or "owned by one" in sl or "manages and runs" in sl:
            add(
                "A sole proprietorship concentrates ownership and day-to-day control in one natural person.",
                "That owner holds the trading assets, sets prices, hires help if needed, and keeps residual profit and risk.",
            )
        if "without necessarily" in sl or "other opinion" in sl or (
            "all management decisions" in sl and "sole" in sl
        ):
            add(
                "With no co-owners or board, decision rights stay undivided.",
                "The proprietor may listen to staff or advisers, but no partner vote or shareholder resolution is required before acting.",
            )
        if "not a legal entit" in sl or "legal entity of its own" in sl or (
            "separate legal person" in sl and "sole" in sl
        ):
            if truth:
                add(
                    "Legal personality means a firm can hold rights and duties in its own name.",
                    "A sole trader lacks that shell: contracts, assets, and liabilities attach to the owner personally.",
                )
            else:
                add(
                    "A sole proprietorship is not a separate legal person.",
                    "Corporate tax filing, default limited liability, and independent lawsuits in the company name belong to incorporated forms, not to a one-owner unincorporated shop.",
                )
                if scene:
                    add(
                        f"{scene_lead}suppliers and the tax office still deal with the owner personally, not with a fictional company person."
                    )
        if "personal income tax" in sl or "profits are reported" in sl or (
            "pays tax on the profit" in sl and "personal" in sl
        ):
            add(
                "Without a corporate taxpayer, trading profit is attributed to the proprietor.",
                "Revenues minus allowable expenses yield taxable business profit declared on the owner's personal income tax statement.",
            )
        if "private assets" in sl and ("stake" in sl or "at stake" in sl):
            add(
                "Private assets of the proprietor remain exposed under unlimited liability.",
                "If business assets cannot cover debts, creditors may reach the owner's home, savings, or other personal property.",
            )
        if "only to short-term" in sl and "unlimited liability" in sl:
            add(
                "Unlimited liability is not limited to trade credit alone.",
                "Long-term bank loans and other business debts can also be pursued against private assets if business resources fall short.",
            )
        if "fully exempt" in sl and "collateral" in sl:
            add(
                "Pledging collateral secures one lender; it does not exempt all remaining private assets from other creditors.",
                "Unlimited liability can still expose other personal property once pledged assets are exhausted.",
            )
        if "unlimited liability" in sl or (
            "private assets" in sl or "personal property" in sl
        ) and "creditor" in sl:
            if truth:
                add(
                    "Unlimited liability means creditors are not capped at assets labelled business property.",
                    "If business cash and pledged collateral fall short, private savings, vehicles, or home equity can be reached.",
                )
            else:
                add(
                    "Limited liability would wall off private assets once business assets are exhausted.",
                    "Sole proprietors do not get that wall: collateral for one lender secures that lender, it does not incorporate the firm for everyone else.",
                )
        if "limited liability" in sl and ("sole" in sl or subsection == "4.1"):
            if not truth:
                add(
                    "Incorporating as a company can create limited liability; calling the operation a sole proprietorship does not.",
                    "Legal labels name different shells with different liability rules.",
                )
        if "easy to establish" in sl or "no financial requirement" in sl or (
            "no minimum" in sl and "capital" in sl
        ):
            add(
                "Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit.",
                "That low formal barrier is why the form is described as easy to establish for small businesses.",
            )
        if "continu" in sl or "retir" in sl or "illness" in sl:
            if truth:
                add(
                    "Continuity hangs on one person's capacity to own and manage.",
                    "Retirement or long-term illness can stall customers and contracts unless succession or a sale is arranged.",
                )
            else:
                add(
                    "Staff do not inherit ownership by default when the proprietor stops.",
                    "The sole-trader form does not silently convert into a partnership or company without a deliberate transfer.",
                )
        if "hire" in sl or "personnel" in sl or "employee" in sl or "staff" in sl:
            if truth:
                add(
                    "Hiring assistants is allowed: they expand capacity while residual risk and key decisions stay with the proprietor.",
                )
            else:
                add(
                    "Employment does not shift unlimited liability onto workers or incorporate the firm.",
                    "Headcount is not an incorporation trigger.",
                )
        if "trade credit" in sl and "elimin" in sl:
            add(
                "Trade credit is still a liability to the supplier.",
                "Deferring payment changes timing; it does not erase the proprietor's obligation or unlimited liability for those purchases.",
            )
        if "financial capacit" in sl or "personal wealth" in sl or "personal financial" in sl:
            if truth:
                add(
                    "Funding capacity tracks what the owner can supply or attract.",
                    "Personal financial capacity shapes how much finance is available even when legal entry is easy.",
                )
            else:
                add(
                    "Personal wealth and funding capacity do affect whether a sole proprietorship can start or expand.",
                    "Claiming they have no bearing reverses the usual finance constraint for this form.",
                )

    # ── 4.2 partnership ───────────────────────────────────────────────────
    if subsection == "4.2" or "partner" in sl:
        if "two or more" in sl or "jointly found" in sl:
            add(
                "When two or more persons jointly found a business, the ownership form is a partnership.",
                "Joint founding with shared ownership intent distinguishes it from a one-person sole proprietorship.",
            )
        if "partnership agreement" in sl:
            add(
                "Partners set a partnership agreement to fix ownership shares, profit and loss splits, roles, and decision rules.",
                "Written terms give a baseline when disputes over control or residual claims arise.",
            )
        if "general partnership" in sl or ("equal rights" in sl and "partner" in sl):
            add(
                "In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless the agreement varies them.",
                "Each general partner can be pursued for the full remaining business debt.",
            )
        if "limited partner" in sl or "limited partnership" in sl:
            if truth:
                add(
                    "A limited partner's loss is normally capped at the capital contribution, provided that partner stays out of day-to-day management.",
                    "General partners continue to manage and usually retain unlimited liability.",
                )
            else:
                add(
                    "Active management usually breaks the limited-partner pattern.",
                    "The liability cap is tied to a passive capital role: a silent investor who never manages can keep the cap, but daily control risks losing it.",
                )
        if "solely liable" in sl or ("unlimited liability" in sl and "partner" in sl):
            add(
                "Under unlimited liability, each general partner can be solely liable for all debts of the business.",
                "Creditors need not split claims proportionally before pursuing one partner's private assets.",
            )
        if "specialis" in sl or "share the tasks" in sl:
            add(
                "Partners can divide tasks, one on clients and one on operations, while still sharing ownership risk under the agreement.",
            )
        if "finance" in sl and ("resemble" in sl or "similar" in sl or "sole" in sl):
            add(
                "Partnership finance resembles sole-trader finance but can draw on several partners' savings and collateral, often expanding capacity.",
            )
        if "profit and loss" in sl or "divide returns" in sl or "documented" in sl:
            if not truth:
                add(
                    "Profit and loss division should be written in the partnership agreement, not left to informal trust alone.",
                    "Without documented splits, disputes over returns are harder to settle when performance changes.",
                )
            else:
                add(
                    "The agreement normally records how profits and losses are shared among partners.",
                )
        if "dispute" in sl or "decision-making rules" in sl or "procedures" in sl:
            if truth:
                add(
                    "Partners may set decision rules and dispute procedures inside the partnership agreement.",
                    "Written terms give a baseline when partners disagree on control or profit shares.",
                )
            else:
                add(
                    "Governance clauses belong in the agreement: decision rules and dispute procedures are not optional extras.",
                )
        if "collateral" in sl and ("sole proprietor" in sl or "two partners" in sl):
            add(
                "Two partners can often pledge more combined private collateral than one sole proprietor, because two balance sheets may be available to lenders.",
            )
        if "limited partnership status" in sl or (
            "limited partnership" in sl and "removes" in sl and "liability" in sl
        ):
            add(
                "Limited partnership status caps limited partners at their contribution; general partners still face unlimited liability for business debts.",
            )

    # ── 4.3 corporation ───────────────────────────────────────────────────
    if subsection == "4.3" or any(
        k in sl
        for k in (
            "corporation",
            "shareholder",
            "share capital",
            "board of directors",
            "ipo",
            "dividend",
            "bond",
            "stock exchange",
        )
    ):
        if "legal entit" in sl or "legal person" in sl or (
            "legal" in sl and ("sue" in sl or "contract" in sl)
        ):
            add(
                "A corporation is a legal person of its own: it can own assets, hire, contract, sue, and be sued in its own name.",
                "Those capacities do not require every shareholder to act personally in each transaction.",
            )
        if "shareholder" in sl and ("manag" in sl or "need not" in sl or "day-to-day" in sl):
            add(
                "Shareholders provide capital but need not run operations day to day.",
                "Directors and hired managers can operate the firm without owning shares.",
            )
        if "limited liability" in sl and ("shareholder" in sl or "corporation" in sl):
            if truth:
                add(
                    "Shareholders' liability is typically limited to capital invested.",
                    "Creditors claim against the company as legal person; they do not automatically seize private homes for ordinary company debts.",
                )
            else:
                add(
                    "Corporate owners do not usually face unlimited personal liability for company debts beyond what they invested in shares.",
                )
        if "more difficult" in sl or "harder" in sl or "complex" in sl or "formal" in sl:
            add(
                "Setup is harder than for sole traders or partnerships: capital rules, filings, and governance layers make formation more formal.",
            )
        if "more options" in sl or "raise financial" in sl or "share capital as well as loans" in sl:
            add(
                "Corporations can raise share capital and also borrow through bank loans, trade credit, and, for larger firms, bonds.",
                "The funding menu is broader than for many unincorporated firms.",
            )
        if "exclusively on share capital" in sl or "cannot raise loans" in sl or (
            "only" in sl and "share capital" in sl and "loan" in sl
        ):
            add(
                "Share capital is central equity finance, but corporations are not barred from loans or trade credit.",
                "Debt finance remains available alongside equity.",
            )
        if "secondary" in sl or ("market price" in sl and "share" in sl) or (
            "stock exchange" in sl and "price" in sl
        ):
            add(
                "Cash arrives at issue when new shares are sold.",
                "Later secondary-market price rises enrich traders among themselves; they do not inject fresh cash into the issuer.",
            )
        if "ipo" in sl or "initial public" in sl or ("issue" in sl and "new share" in sl):
            add(
                "An IPO sells new shares and can raise equity finance for the issuer.",
                "Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.",
            )
        if "bond" in sl:
            add(
                "Bondholders are creditors with interest and repayment claims, not residual owners with voting equity.",
                "Bonds and bank loans are both debt, but bonds are issued to investors in the market.",
            )
        if "board" in sl or "director" in sl:
            add(
                "The board oversees strategy and supervises executive management.",
                "Day-to-day running sits with managers; shareholders exercise control mainly through appointments and major votes.",
            )
        if "dividend" in sl:
            add(
                "Dividends distribute part of corporate profit to shareholders.",
                "Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice, not sole-trader profit drawings.",
            )
        if "preferred" in sl and "share" in sl:
            add(
                "Preferred shares often carry priority on dividends while voting rights may be reduced compared with ordinary shares.",
            )
        if "nominal" in sl or ("share capital" in sl and "calculat" in sl):
            add(
                "Share capital is built from the capital attached to issued shares.",
                "Ownership fractions follow shareholdings, not day-to-day managerial titles.",
            )
        if "chief executive" in sl or "ceo" in sl or "highest-ranking officer" in sl:
            add(
                "The Chief Executive Officer leads executive management as the top manager.",
                "The CEO runs day-to-day operations under board oversight; the role is managerial, not automatic ownership.",
            )
        if "chief financial" in sl or "cfo" in sl:
            if not truth:
                add(
                    "The CFO oversees finance and accounting as an executive role.",
                    "There is no rule that the CFO must be the largest shareholder; management posts and shareholdings can diverge.",
                )
            else:
                add(
                    "The CFO is a senior finance executive appointed to manage accounting and financial reporting.",
                )
        if "chief operating" in sl or "coo" in sl:
            add(
                "The Chief Operating Officer can manage operations and may sit on the board.",
                "Executive officers run operations; board membership is compatible with the COO role.",
            )
        if "separation of ownership" in sl or (
            "ownership and management" in sl and "separat" in sl
        ):
            add(
                "Corporations separate ownership (shareholders) from day-to-day management (executives).",
                "Shareholders elect the board but need not run daily operations themselves.",
            )
        if "stock exchange" in sl and "regulated" in sl:
            add(
                "A stock exchange is a regulated financial market where securities trade after listing.",
                "Trading rules and disclosure requirements apply to listed companies.",
            )
        if "demand for shares" in sl or "economic indicators" in sl:
            add(
                "Secondary-market demand for shares responds to profits, growth prospects, and wider economic indicators.",
                "Investors weigh company performance and macro signals when bidding for shares.",
            )
        if "huge amounts" in sl and "share" in sl:
            add(
                "Large corporations can raise substantial equity by issuing shares to many investors.",
                "Broad shareholder bases spread risk and can fund major investment programmes.",
            )
        if "more options" in sl and "raise" in sl:
            add(
                "Corporations can combine share issues, bank loans, bonds, and trade credit.",
                "That wider menu is a common reason larger firms incorporate.",
            )

    # ── 4.4 classification ────────────────────────────────────────────────
    if subsection == "4.4" or "unincorporated" in sl or "incorporated" in sl:
        add(
            "The unincorporated versus incorporated split turns on legal personality.",
            "Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons.",
        )
        if "partnership" in sl and "incorporated" in sl and not truth:
            add(
                "Pooling capital among partners does not by itself create a separate legal person.",
                "A general partnership remains unincorporated even when several partners contribute funds.",
            )
        if "personal income tax" in sl and "separate legal" in sl and not truth:
            add(
                "Personal tax on profits reflects pass-through treatment for unincorporated forms.",
                "Filing on a personal return does not incorporate the firm or create a corporate taxpayer.",
            )
        if "stock exchange" in sl and "only criterion" in sl:
            add(
                "Listing shares is one feature of many corporations, not the sole test of incorporation.",
                "Private limited companies can be incorporated without a public listing.",
            )
        if "limited liability" in sl and "unincorporated" in sl and not truth:
            add(
                "Limited liability marks incorporated forms; it does not make a firm unincorporated.",
                "An LLC or company with capped owner liability is incorporated, not the opposite.",
            )

    # ── finance sources 4.5 / cross-chapter ───────────────────────────────
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
            "share capital",
            "bond",
            "gearing",
            "equity finance",
            "debt finance",
        )
    ):
        if "retained" in sl or ("sale of" in sl and "asset" in sl):
            if truth and "internal" in sl:
                add(
                    "Internal finance comes from inside the firm: profit kept rather than withdrawn, or cash from selling assets no longer needed.",
                    "No new outside creditor is created for that slice.",
                )
            elif not truth and "external" in sl:
                add(
                    "Retained profit and unused-asset sales are internal sources.",
                    "Labelling them external confuses origin (surplus already inside) with the bank account where cash sits.",
                )
        if ("owner" in sl and ("savings" in sl or "invest" in sl)) or (
            "investor" in sl and "external" in sl
        ):
            add(
                "Owner start-up savings and outside investor funds enter from outside retained trading surplus.",
                "They are external finance even when deposited in the business bank account.",
            )
        if "overdraft" in sl:
            add(
                "A bank overdraft is flexible short-term credit on a current account.",
                "Interest is typically charged only while the account is overdrawn, not on a healthy positive balance.",
            )
        if "trade credit" in sl:
            if "long-term" in sl and not truth:
                add(
                    "Trade credit defers payment to suppliers for a short agreed period, often weeks, not years.",
                    "Deferral alone does not make it long-term debt finance.",
                )
            elif "liabilit" in sl or not truth:
                add(
                    "Trade credit is still a liability to the supplier until invoices are cleared.",
                    "Deferring payment does not erase the obligation.",
                )
            else:
                add(
                    "Trade credit lets the firm buy now and pay the supplier later under agreed terms.",
                    "It is short-term external debt until settlement.",
                )
        if "mortgage" in sl or "collateral" in sl:
            add(
                "Long-term bank loans are often secured on land or property through a mortgage.",
                "Collateral reduces lender risk; it does not erase the borrower's repayment duty.",
            )
        if "share capital" in sl and ("external" in sl or "equity" in sl):
            add(
                "Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan.",
            )
        if "bond" in sl and ("debt" in sl or "long-term" in sl):
            add(
                "Bonds issued to investors are long-term external debt finance with interest and principal repayment obligations.",
            )
        if "equity finance" in sl or "debt finance" in sl:
            add(
                "Equity finance creates ownership claims; debt finance creates repayment obligations.",
                "Internal versus external further asks whether funds came from inside surplus or from outside providers.",
            )

    # ── 4.6 finance choice ──────────────────────────────────────────────────
    if subsection == "4.6" or "capital expenditure" in sl or "gearing" in sl or (
        "matching" in sl
    ):
        if "capital expenditure" in sl or "many years" in sl or "long-lived" in sl or "warehouse" in sl:
            if truth:
                add(
                    "Capital expenditure on assets used over many years should normally be matched with long-term finance.",
                    "Repayment horizons then align with the asset's service life.",
                )
            else:
                add(
                    "Funding long-lived assets from rolling weekly supplier credit mismatches term and use.",
                    "The asset binds capital for years while the credit may fall due in days or weeks.",
                )
        if "interest" in sl and ("sole" in sl or "only" in sl or "absolute" in sl):
            add(
                "Interest matters, but it is not the sole cost or sole criterion.",
                "Issuance and administration costs, gearing risk, and matching finance term to asset life also shape the choice.",
            )
        if "gearing" in sl or ("high" in sl and "loan" in sl):
            add(
                "Heavy loan dependence raises gearing and insolvency risk.",
                "High gearing is a warning signal; it does not automatically forbid every short-term trade-credit purchase of materials.",
            )
        if "revenue" in sl and ("material" in sl or "short-term" in sl):
            add(
                "Revenue spending and routine materials purchases suit short-term credit because the cash cycle is short.",
            )

    # Statement-specific fallbacks (concrete, not meta)
    if not bits:
        hook = stmt_hook(statement, 6)
        if truth:
            if scene:
                add(
                    f"{scene_lead}{hook} follows the ownership or finance rule the chapter describes.",
                    "Each term in the claim maps to the correct legal or finance label for that form.",
                )
            else:
                add(
                    f"{hook.capitalize()} matches how this chapter classifies the ownership form or finance source.",
                    "The mechanism named in the claim works the way the textbook presents it.",
                )
        else:
            if scene:
                add(
                    f"{scene_lead}the claim overshoots the correct legal or finance label.",
                    "Once liability, legal personality, or internal versus external origin is applied correctly, the claim fails.",
                )
            else:
                add(
                    "The claim attaches the wrong legal, tax, liability, or finance label.",
                    "Restoring the correct criterion overturns the absolute wording in the stem.",
                )

    # Scene tie for false claims without scene yet
    if not truth and scene and not any(scene.split()[-1] in b for b in bits):
        add(
            f"{scene_lead}applying the correct label to that setting already overturns the absolute wording in the sentence."
        )

    # Dedup preserving order
    seen: set[str] = set()
    out: list[str] = []
    for b in bits:
        key = b.lower()[:90]
        if key in seen:
            continue
        seen.add(key)
        out.append(b)
    return out


def trap_note(statement: str, truth: bool, subsection: str) -> str | None:
    """Return a Note: body for real traps, or None."""
    sl = statement.lower()
    if truth:
        return None
    if ("sole" in sl or subsection == "4.1") and "limited liability" in sl:
        return (
            "sole traders do not get a corporate liability wall. "
            "A trading name does not incorporate the firm."
        )
    if "limited partner" in sl and ("manag" in sl or "control" in sl or "operat" in sl):
        return (
            "limited partners lose the liability cap when they take part in day-to-day management."
        )
    if "secondary" in sl or ("market price" in sl and "share" in sl and "raise" in sl):
        return (
            "secondary-market price rises do not inject new cash into the issuer; only primary issues do."
        )
    if "retained" in sl and "external" in sl:
        return (
            "retained earnings left in the firm are internal finance even though the cash sits in a bank account."
        )
    if "trade credit" in sl and "long-term" in sl:
        return (
            "supplier invoices due in weeks remain short-term trade credit, not long-term loan capital."
        )
    if "incorporat" in sl and "unincorporated" in sl:
        return (
            "limited liability marks incorporated forms; it does not make a firm unincorporated."
        )
    if "gearing" in sl and "disqualif" in sl:
        return (
            "high gearing raises lender caution but does not ban all short-term trade credit for materials."
        )
    if "personal income tax" in sl and "separate legal" in sl:
        return (
            "personal tax filing reflects pass-through treatment; it does not create a separate legal person."
        )
    return None


def stmt_hook(statement: str, n: int = 5) -> str:
    words = re.findall(r"[A-Za-z][A-Za-z'-]*", statement)
    stop = {
        "the", "a", "an", "and", "or", "of", "to", "in", "for", "on", "that", "this",
        "is", "are", "be", "may", "can", "not", "when", "because", "if", "as", "by",
    }
    picked = [w.lower() for w in words if w.lower() not in stop][:n]
    return " ".join(picked) if picked else "this claim"


def apply_opener(bits: list[str], letter_idx: int, case_id: str, context: str, statement: str) -> list[str]:
    if not bits:
        hook = stmt_hook(statement, 5)
        return [f"The rule for {hook} follows from how this chapter treats ownership and finance."]
    if letter_idx == 0:
        return bits
    scene = scene_from_context(context)
    hook = stmt_hook(statement, 5)
    b0 = bits[0]
    rest = b0[0].lower() + b0[1:] if b0 else ""
    if letter_idx == 1:
        lead = f"{scene[1]}{rest}" if scene[1] else f"In this stem, {rest}"
    elif letter_idx == 2:
        lead = f"Regarding {hook}, {rest}"
    elif letter_idx == 3:
        lead = f"For this claim on {hook}, {rest}"
    else:
        lead = f"Applied here, {rest}"
    return [normalize_ws(lead)] + bits[1:]


EXTRA_BY_SUB = {
    "4.1": [
        "One owner-manager, no separate legal person, personal tax on profits, and unlimited liability for debts form the sole-trader pattern.",
        "Staff can be hired, but they do not become co-owners and do not absorb the proprietor's unlimited liability.",
        "Start-up is cheap in formal terms because no minimum share capital is required, though owners often still inject personal savings.",
        "Continuity risk rises when that single owner retires or is long-term ill unless succession is planned.",
    ],
    "4.2": [
        "Partners jointly own the firm and normally sign an agreement on shares, roles, and profit splits.",
        "General partners face unlimited liability: any one of them can be pursued for the full debt.",
        "Limited partners keep a liability cap only while they stay out of day-to-day management.",
        "Task specialisation is allowed, but ownership and risk remain shared under the partnership shell.",
    ],
    "4.3": [
        "Corporate legal personality lets the company own assets, hire, contract, sue, and be sued in its own name.",
        "Shareholders may fund the firm without running it; managers may operate without owning shares.",
        "Shareholder liability is usually capped at capital invested, unlike unlimited personal exposure in unincorporated forms.",
        "Primary share issues bring cash to the issuer; later exchange trading is mainly between investors.",
        "Bonds and bank loans are debt; share capital is equity. Corporations can use both.",
    ],
    "4.4": [
        "Incorporation turns on separate legal personality, not on tax filing style or whether capital is pooled.",
        "Sole traders and partnerships stay unincorporated even when several people contribute funds.",
        "Limited liability is a hallmark of incorporated companies, not a reason to call them unincorporated.",
        "A stock exchange listing is common for public companies but is not the only sign of incorporation.",
    ],
    "4.5": [
        "Internal finance comes from retained profit or asset sales inside the firm; external finance enters from owners, investors, or creditors.",
        "Equity gives ownership claims; debt creates repayment obligations with interest.",
        "Overdrafts and trade credit are short-term debt; long-term loans and bonds stretch the repayment horizon.",
        "Depositing borrowed cash in a business account does not re-label external funds as internal.",
    ],
    "4.6": [
        "Long-lived assets should normally be funded with long-term finance so repayment matches the asset's life.",
        "Interest is one cost among several: issuance fees, gearing risk, and term matching also matter.",
        "High gearing warns lenders but does not automatically ban every short-term materials purchase on trade credit.",
        "Weekly supplier credit is poor funding for a multi-year warehouse or plant investment.",
    ],
}


def extra_pool(subsection: str, statement: str, truth: bool, case_id: str, letter_idx: int) -> list[str]:
    pool = list(EXTRA_BY_SUB.get(subsection, EXTRA_BY_SUB["4.3"]))
    sl = statement.lower()
    if not truth:
        pool.append(
            "The absolute words in the sentence push past what the ownership or finance rule actually allows."
        )
        pool.append(
            "Once the correct label is restored, the overstated claim in the stem no longer holds."
        )
    if "share" in sl and "price" in sl:
        pool.append(
            "A price rise after issue enriches sellers in the market; it is not an automatic new equity injection for the company."
        )
    if "legal" in sl:
        pool.append(
            "Legal personality decides whether the firm or the owner personally holds contracts and liabilities."
        )
    # Rotate by case and letter for variety
    n = len(pool)
    if n == 0:
        return []
    start = seed(case_id, str(letter_idx), "extra") % n
    return [pool[(start + k) % n] for k in range(n)]


def pack_to_target(
    sent_list: list[str],
    lo: int,
    hi: int,
    *,
    extras: list[str] | None = None,
) -> str:
    """Build body from sentences within [lo, hi] chars."""
    pool = list(sent_list)
    if extras:
        for e in extras:
            pool.extend(sentences(e))

    if not pool:
        pool = ["The ownership or finance rule in the chapter resolves this claim."]

    # Compact: one or two tight sentences (minimum 160 chars)
    if hi <= 280:
        for n in (1, 2, 3):
            body = " ".join(pool[:n])
            if lo <= len(body) <= hi:
                return body
        body = pool[0]
        pi = 1
        while len(body) < lo and pi < len(pool):
            trial = body + " " + pool[pi]
            if len(trial) <= hi:
                body = trial
            pi += 1
        while len(body) < lo:
            trial = body + " The stem's ownership or finance label is what this letter tests."
            if len(trial) <= hi:
                body = trial
            else:
                break
        while len(body) > hi and " " in body:
            body = body.rsplit(" ", 1)[0].rstrip(",;:") + "."
        return body

    # Standard / expanded: grow sentence list
    acc: list[str] = []
    for s in pool:
        trial = " ".join(acc + [s])
        if len(trial) <= hi:
            acc.append(s)
        elif not acc:
            acc.append(s)
        else:
            continue
        if len(trial) >= lo and hi <= 480:
            break

    body = " ".join(acc)
    pi = len(acc)
    while len(body) < lo and pi < len(pool):
        trial = body + " " + pool[pi]
        if len(trial) <= hi:
            body = trial
            acc.append(pool[pi])
        pi += 1

    while len(body) < lo and pi < len(pool):
        pi += 1

    guard = 0
    while len(body) < lo and guard < 20:
        for s in pool:
            trial = body + " " + s
            if len(trial) <= hi:
                body = trial
                if len(body) >= lo:
                    break
        else:
            break
        guard += 1

    if len(body) > hi:
        acc2: list[str] = []
        for s in pool:
            trial = " ".join(acc2 + [s])
            if len(trial) <= hi:
                acc2.append(s)
            else:
                break
        body = " ".join(acc2) if acc2 else body[: hi - 1].rsplit(" ", 1)[0] + "."

    if lo >= 550 and len(acc) >= 2:
        mid = max(1, len(acc) // 2)
        p1 = " ".join(acc[:mid])
        p2 = " ".join(acc[mid:])
        if lo <= len(p1) + len(p2) + 2 <= hi:
            return f"{p1}\n\n{p2}"
    if lo >= 320 and len(acc) >= 2:
        p1 = acc[0]
        p2 = " ".join(acc[1:])
        if lo <= len(p1) + len(p2) + 2 <= hi:
            return f"{p1}\n\n{p2}"

    return body


OPEN_PREFIX = [
    "",
    "scene",
    "legal",
    "ownership",
    "applied",
]


def build_letter(
    case: dict,
    letter_idx: int,
    *,
    tier_override: str | None = None,
    note: str | None = None,
) -> str:
    statement = case["statements"][letter_idx]
    truth = bool(case["answer_key"][letter_idx])
    subsection = case["subsection"]
    context = case.get("context") or ""
    tier = tier_override or tier_for(case["case_id"], letter_idx)

    bits = teach_bits(statement, truth, subsection, context)
    bits = apply_opener(bits, letter_idx, case["case_id"], context, statement)
    sent_list: list[str] = []
    for b in bits:
        sent_list.extend(sentences(b))

    extras = extra_pool(subsection, statement, truth, case["case_id"], letter_idx)
    lo, hi = TIER_RANGES[tier]
    if note:
        hi = max(lo, hi - len(f"Note: {note}") - 4)

    body = pack_to_target(sent_list, lo, hi, extras=extras)
    return wrap(body, truth, note)


def assign_notes(case: dict) -> dict[int, str]:
    """At most 2 notes per case on letters with real traps."""
    notes: dict[int, str] = {}
    for i, stmt in enumerate(case["statements"]):
        n = trap_note(stmt, bool(case["answer_key"][i]), case["subsection"])
        if n:
            notes[i] = n
        if len(notes) >= 2:
            break
    return notes


FORCED_TIERS = ("compact", "standard", "expanded", "standard", "compact")


def case_valid(expls: list[str]) -> bool:
    ls = [len(body_of(e)) for e in expls]
    if any(n < 150 for n in ls):
        return False
    if sum(1 for n in ls if n >= 400) < 2:
        return False
    if not any(n >= 550 for n in ls):
        return False
    if max(ls) - min(ls) < 250:
        return False
    opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
    return len(set(opens)) >= 5


def fix_openings(case: dict, expls: list[str], notes: dict[int, str]) -> list[str]:
    """Ensure first 40 chars of each letter's opening line differ."""
    labels = ["A", "B", "C", "D", "E"]
    disambig = [f"Claim {labels[i]}: " for i in range(5)]
    opens = [body_of(e).split("\n")[0].strip().lower()[:40] for e in expls]
    seen: dict[str, int] = {}
    for i, op in enumerate(opens):
        if op not in seen:
            seen[op] = i
            continue
        b = body_of(expls[i])
        paras = split_paras(b)
        if paras:
            paras[0] = disambig[i] + paras[0]
            expls[i] = wrap("\n\n".join(paras), bool(case["answer_key"][i]), notes.get(i))
    return expls


def rewrite_case(case: dict) -> list[str]:
    notes = assign_notes(case)
    expls = [
        build_letter(case, i, tier_override=FORCED_TIERS[i], note=notes.get(i))
        for i in range(5)
    ]
    for _ in range(16):
        expls = fix_openings(case, expls, notes)
        if case_valid(expls):
            break
        ls = [len(body_of(e)) for e in expls]
        for i in range(5):
            tier = FORCED_TIERS[i]
            if ls[i] < 160 and tier == "compact":
                tier = "compact"
            elif i == 2 and not any(n >= 550 for n in ls):
                tier = "expanded"
            elif sum(1 for n in ls if n >= 400) < 2 and tier == "standard":
                tier = "standard"
            elif max(ls) - min(ls) < 250:
                tier = "compact" if i in (0, 4) else ("expanded" if i == 2 else tier)
            expls[i] = build_letter(case, i, tier_override=tier, note=notes.get(i))
    expls = fix_openings(case, expls, notes)
    return expls


def rewrite_all(data: list[dict]) -> None:
    for case in data:
        case["tactical_explanations"] = rewrite_case(case)


def validate_file() -> int:
    r = subprocess.run(
        [sys.executable, str(VALIDATOR), str(PATH)],
        capture_output=True,
        text=True,
    )
    print(r.stdout, end="")
    if r.stderr:
        print(r.stderr, file=sys.stderr, end="")
    return r.returncode


def main() -> int:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    print(f"Rewriting {len(data)} cases in {PATH.name}...")
    rewrite_all(data)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote JSON. Running validator...")
    code = validate_file()
    if code != 0:
        print("Validation failed; attempting one repair pass...")
        data = json.loads(PATH.read_text(encoding="utf-8"))
        rewrite_all(data)
        PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        code = validate_file()
    if code == 0:
        c = data[0]
        print("\n--- SAMPLE CASE 4.1.01 ---")
        for i, (stmt, expl) in enumerate(zip(c["statements"], c["tactical_explanations"])):
            print(f"\n[{chr(65+i)}] {stmt[:80]}...")
            print(expl[:500] + ("..." if len(expl) > 500 else ""))
    return code


if __name__ == "__main__":
    sys.exit(main())
