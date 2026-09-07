#!/usr/bin/env python3
"""Maximally deepen economics Chapter 4 (Business organisation & finance) explanations.

Processes one task at a time: letters A→E, stem-specific ownership/finance prose,
strip template filler, keep TRUE/FALSE headers and closers aligned to answer_key,
and unpack any %/amount claims step-by-step in words.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"

FILLER_PHRASES = (
    "A student who",
    "Check the sentence against",
    "Read the quantifier",
    "Map the scenario onto",
    "Check that the comparison",
    "matched the topic to",
    "Compare the sentence, word for word",
    "Words such as never, always, only, or all",
    "Match each claim to the definition",
)

THEORY = {
    "4.1": (
        "A sole proprietorship is owned, managed, and run by one person. It is easy to "
        "establish (no mandatory minimum capital). It is not a separate legal entity, so "
        "profits are taxed on the owner's personal income tax statement. The owner faces "
        "unlimited liability: private assets are also at stake. Continuity can suffer if "
        "the proprietor retires or falls long-term ill. Owner savings and investor/bank "
        "funds are external finance; retained profit and sale of unused assets are internal. "
        "Internal finance avoids interest; all credit forms are liabilities."
    ),
    "4.2": (
        "A partnership is a business jointly founded by two or more persons. Partners "
        "normally set a partnership agreement covering rights, responsibilities, and "
        "profit/loss division. In a general partnership partners have equal rights and "
        "unlimited liability (each can be solely liable for all debts). Limited partners "
        "in a limited partnership have liability capped at their contribution and typically "
        "must not take part in management. Partnership finance resembles sole-trader finance "
        "but pools several persons' savings and collateral."
    ),
    "4.3": (
        "A corporation is a legal person with rights and obligations like a natural person "
        "in business: it can own property, hire, contract, sue and be sued. Shareholders "
        "need not manage day to day; managers need not be shareholders. Liability of "
        "shareholders is generally limited to capital invested. Share capital is long-term "
        "external equity; secondary-market price rises do not raise new cash for the issuer. "
        "IPOs issue new shares; later trading is among investors. Boards oversee; executives "
        "run operations. Bonds are long-term debt finance distinct from bank loans."
    ),
    "4.4": (
        "Unincorporated businesses (sole traders, partnerships) are not legal entities of "
        "their own; incorporated businesses (companies) are legal persons. Figure-style "
        "classifications turn on legal personality and liability, not on whether capital is "
        "pooled, whether tax is personal, or whether shares are listed. Limited liability "
        "marks incorporated forms; it does not make a firm unincorporated. Ownership can "
        "separate from day-to-day management in corporations via directors and managers."
    ),
    "4.5": (
        "Sources of finance split into equity and debt, and into internal and external. "
        "Share capital from outside investors is external equity; retained earnings are "
        "internal equity. Bank overdrafts and trade credit are short-term debt; long-term "
        "bank loans and bonds are long-term external debt. Owner loans are debt, not share "
        "capital. Classification follows the claim type (ownership claim vs repayment "
        "obligation) and origin (inside surplus vs outside providers), not merely which "
        "bank account holds the cash."
    ),
    "4.6": (
        "Choosing finance weighs cost (interest and issuance/admin costs), gearing/risk "
        "(high loan capital raises insolvency risk and can make new lenders reluctant), and "
        "intended use / matching (fund long-lived capital expenditure with long-term finance; "
        "fund revenue spending and materials with short-term credit). Interest is not the "
        "sole cost; matching and gearing cannot be ignored. High gearing does not ban all "
        "trade credit for materials, but heavy loan dependence is a warning signal."
    ),
}


def extract_mid(expl: str) -> str:
    parts = [p.strip() for p in expl.strip().split("\n\n") if p.strip()]
    if not parts:
        return ""
    if parts[-1].startswith("The statement is"):
        parts = parts[:-1]
    if parts and (parts[0].startswith("TRUE —") or parts[0].startswith("FALSE —")):
        # drop opener line's boilerplate after em dash if present
        first = parts[0]
        if " — " in first:
            after = first.split(" — ", 1)[1].strip()
            if any(bad.lower() in after.lower() for bad in FILLER_PHRASES):
                parts = parts[1:]
            else:
                parts[0] = after
        else:
            parts = parts[1:]
    mid = "\n\n".join(parts).strip()
    cleaned = []
    for sent in re.split(r"(?<=[.!?])\s+", mid):
        if any(bad.lower() in sent.lower() for bad in FILLER_PHRASES):
            continue
        cleaned.append(sent)
    return " ".join(cleaned).strip()


def _pct_steps(statement: str) -> str | None:
    """Unpack simple percentage / amount claims into stepped prose."""
    if not re.search(r"\d", statement):
        return None
    nums = []
    for m in re.finditer(r"(\d[\d,]*(?:\.\d+)?)\s*(%|per\s*cent|percent)?", statement, re.I):
        raw = m.group(1).replace(",", "")
        try:
            nums.append((float(raw), bool(m.group(2))))
        except ValueError:
            pass
    if not nums:
        return None
    lines = ["The statement uses quantitative claims that should be read in order:"]
    for i, (v, is_pct) in enumerate(nums, 1):
        if is_pct:
            lines.append(
                f"Step {i}: the figure {v:g}% is a percentage share or rate — "
                f"it means {v:g} per 100 units of the base named in the sentence."
            )
        else:
            lines.append(
                f"Step {i}: the amount {v:g} is a named quantity in the stem and must be "
                f"kept attached to the item it measures (capital, shares, price, or debt)."
            )
    if len(nums) >= 2 and nums[0][1] is False and nums[1][1] is False:
        a, b = nums[0][0], nums[1][0]
        if b != 0 and a <= b * 20:
            lines.append(
                f"If a ratio is implied, compare {a:g} with {b:g} directly rather than "
                f"swapping the base:\n\n$$\n\\frac{{{a:g}}}{{{b:g}}} = {a/b:.4g}\n$$"
            )
    return "\n\n".join(lines)


def concept_body(subsection: str, statement: str, truth: bool, mid: str, context: str) -> str:
    """Build maximally expanded teaching prose for one letter."""
    sl = statement.lower()
    ctx = (context or "").lower()
    chunks: list[str] = []

    # ── shared ownership / legal personality ──────────────────────────────
    if any(
        k in sl
        for k in (
            "sole proprietorship",
            "sole proprietor",
            "sole trader",
            "sole tradership",
        )
    ) or subsection == "4.1":
        if "one person" in sl or ("owned by one" in sl) or ("owns, manages" in sl) or (
            "owns and manages" in sl
        ):
            chunks.append(
                "A sole proprietorship concentrates ownership and day-to-day control in a "
                "single natural person. That person owns the trading assets, makes the "
                "operating decisions, and bears the residual risk. There is no co-owner "
                "layer and no separate company person standing between the proprietor and "
                "the business."
            )
        if "not a legal entity" in sl or "lacks separate legal" in sl or (
            "separate legal person" in sl
        ) or ("legal entity of its own" in sl) or ("legal personality" in sl):
            if truth:
                chunks.append(
                    "Legal personality means a firm can hold rights and duties in its own "
                    "name as a distinct person in law. A sole proprietorship does not have "
                    "that status: contracts, assets, and liabilities attach to the owner "
                    "personally. Unincorporated status is therefore the correct description."
                )
            else:
                chunks.append(
                    "A sole proprietorship is not a separate legal person. Features that "
                    "belong to corporations — independent corporate personality, corporate "
                    "tax filing, or limited liability by default — do not arise merely "
                    "because a trading name is registered, a bank account is opened, or "
                    "staff are hired."
                )
        if "personal income tax" in sl or ("pays tax on the profit" in sl) or (
            "taxed on the owner's" in sl
        ) or ("profits are reported" in sl) or ("profits are assessed" in sl):
            if truth:
                chunks.append(
                    "Because there is no separate corporate taxpayer, trading profit is "
                    "attributed to the proprietor. Mechanically: revenues minus deductible "
                    "expenses yield taxable business profit, and that profit is declared on "
                    "the owner's personal income tax statement rather than on a stand-alone "
                    "corporate return."
                )
            else:
                chunks.append(
                    "Pass-through personal taxation does not create a corporate tax entity "
                    "and does not exempt profits from tax. Dividends are a corporate "
                    "distribution concept; sole traders do not need to issue dividends "
                    "before personal tax is due on business profit."
                )
        if "unlimited liability" in sl or "private assets" in sl or (
            "personal property" in sl and "creditor" in sl
        ) or ("liable for all debts" in sl):
            if truth:
                chunks.append(
                    "Unlimited liability means repayment is not capped at assets labelled "
                    "as business property. If business resources cannot cover debts, "
                    "creditors may reach the proprietor's private assets. That personal "
                    "exposure is the risk counterpart of undivided control."
                )
            else:
                chunks.append(
                    "Limited liability would wall off private assets once business assets "
                    "are exhausted; sole proprietors do not enjoy that wall. Collateral "
                    "pledged to a lender secures that lender's claim — it does not convert "
                    "the firm into a limited company or erase unlimited liability for "
                    "remaining shortfalls."
                )
        if "easy to establish" in sl or "no financial requirement" in sl or (
            "no minimum" in sl and "capital" in sl
        ) or ("minimum share capital" in sl):
            if truth:
                chunks.append(
                    "Unlike many company forms, a sole proprietorship can start without a "
                    "mandatory minimum share-capital deposit. That low formal barrier is "
                    "why the form is described as easy to establish for small businesses — "
                    "even though owners often still inject personal savings voluntarily."
                )
            else:
                chunks.append(
                    "There is no mandatory minimum share capital before a sole trader may "
                    "begin. Confusing sole proprietorship with company capital rules, or "
                    "reading 'no requirement' as 'owners never contribute savings,' "
                    "misstates how start-up funding works in practice."
                )
        if "continu" in sl or "retir" in sl or "illness" in sl or "succession" in sl:
            if truth:
                chunks.append(
                    "Continuity is tied to one person's capacity to own and manage. "
                    "Retirement or long-term illness removes that centre of control. "
                    "Without a planned transfer, sale, or covering arrangement, customers, "
                    "contracts, and decisions can stall — staff do not automatically become "
                    "owners."
                )
            else:
                chunks.append(
                    "Nothing in the sole-proprietorship form automatically preserves "
                    "unchanged operations when the owner retires or is long-term absent. "
                    "Employees do not inherit ownership by default, and the firm does not "
                    "silently convert into a partnership. Succession must be arranged."
                )
        if "hire" in sl or "personnel" in sl or "employee" in sl or "staff" in sl:
            if truth:
                chunks.append(
                    "Hiring is allowed. Assistants can handle routine work, but key "
                    "management decisions and residual risk stay with the proprietor. "
                    "Employment expands capacity; it does not transfer ownership or "
                    "unlimited liability to staff."
                )
            else:
                chunks.append(
                    "Employment does not shift unlimited liability onto workers, hand them "
                    "strategic control, or incorporate the firm. Headcount is not an "
                    "incorporation trigger and wages do not allocate owner liability."
                )
        if "decision" in sl or "without necessarily" in sl or "other opinion" in sl or (
            "management" in sl and "depend" in sl
        ):
            chunks.append(
                "With no co-owners, decision rights are undivided. The proprietor can act "
                "without a partners' vote or board resolution. Advice may be taken, but "
                "consultation is not a structural requirement of the form."
            )

    # finance classification (appears across 4.1 and 4.5)
    if any(
        k in sl
        for k in (
            "internal",
            "external",
            "retained profit",
            "retained earnings",
            "owner's investment",
            "owner investment",
            "own savings",
            "trade credit",
            "overdraft",
            "mortgage",
            "collateral",
            "share capital",
            "bond",
            "gearing",
            "long-term",
            "short-term",
        )
    ):
        if "retained" in sl or ("sale of" in sl and "asset" in sl) or (
            "unused asset" in sl
        ) or ("unneeded asset" in sl) or ("not needed" in sl and "sale" in sl):
            if truth and "internal" in sl:
                chunks.append(
                    "Internal finance comes from resources already inside the firm: profit "
                    "kept rather than withdrawn, or cash released by selling assets the "
                    "business no longer needs. No new creditor is created for that funding "
                    "slice, so interest charges attached to borrowing are avoided."
                )
            elif not truth and "external" in sl and (
                "retained" in sl or "sale" in sl
            ):
                chunks.append(
                    "Retained profit and asset disposals are internal, not external. They "
                    "originate from the firm's own surplus or owned assets — not from an "
                    "outside investor or lender — even though the cash ends up in the "
                    "business bank account."
                )
            elif not truth and "withdrawn" in sl:
                chunks.append(
                    "Once profit is withdrawn for personal spending it has left the "
                    "business. The same surplus cannot simultaneously be personal drawings "
                    "and internal reinvestment finance."
                )
            elif truth and "withdraw" in sl:
                chunks.append(
                    "The proprietor may withdraw profit for personal use instead of "
                    "reinvesting it. Retention for internal finance is a choice, not an "
                    "automatic rule whenever revenues exceed expenses."
                )
        if (
            ("owner" in sl and ("savings" in sl or "investment" in sl or "invest" in sl))
            or "investor fund" in sl
            or ("funds from investors" in sl)
            or ("bank credit" in sl)
            or ("creditor" in sl and "external" in sl)
        ):
            if truth and "external" in sl:
                chunks.append(
                    "In this chapter's sources-of-finance framework, money injected from "
                    "outside retained trading surplus is external: owner savings at "
                    "start-up, investor capital, and bank or other creditor funds. Legal "
                    "sameness of owner and firm does not re-label owner capital as internal."
                )
            elif not truth and "internal" in sl and (
                "owner" in sl or "investor" in sl or "bank" in sl or "creditor" in sl
            ):
                chunks.append(
                    "Depositing borrowed or invested cash in the business account only "
                    "records receipt. Owner start-up savings, investor funds, and bank "
                    "credit remain external sources — they are not internal finance "
                    "generated by operations."
                )
        if "trade credit" in sl:
            if truth:
                chunks.append(
                    "Trade credit is a supplier agreement allowing deferred payment for "
                    "purchases. It creates a short-term external liability until settlement. "
                    "Deferral changes cash timing; it is not a grant and not internal finance."
                )
            else:
                chunks.append(
                    "Trade credit must be repaid within the agreed period. It is typically "
                    "short-term purchase-cycle finance, not long-term debt, and it does not "
                    "erase the proprietor's liability or the need to manage cash-flow timing."
                )
        if "overdraft" in sl:
            if truth:
                chunks.append(
                    "A bank overdraft is flexible short-term credit on a current account: "
                    "the balance may go negative within a limit. Interest is charged when "
                    "the account is overdrawn, not on a healthy positive balance. The "
                    "facility is external debt, not internal finance."
                )
            else:
                chunks.append(
                    "An overdraft does not incorporate the firm, create limited liability, "
                    "or cease to be a liability because it is short-term. Interest is not "
                    "charged as if a positive credit balance were borrowed."
                )
        if "collateral" in sl or "mortgage" in sl:
            if truth:
                chunks.append(
                    "Long-term lenders commonly require pledgeable assets — often land and "
                    "property via a mortgage — as security. Collateral backs repayment; the "
                    "loan remains a liability. If private property was pledged and the "
                    "business cannot repay, that property remains at stake."
                )
            else:
                chunks.append(
                    "Pledging collateral secures the lender; it does not waive all interest, "
                    "exclude the loan from liabilities, incorporate the firm, or remove "
                    "unlimited liability for any remaining shortfall. Short-term supplier "
                    "trade credit also does not typically demand a mortgage over the home."
                )
        if "interest" in sl and ("internal" in sl or "retained" in sl or "overdraft" in sl):
            if truth and "only when" in sl and "overdrawn" in sl:
                chunks.append(
                    "Overdraft pricing follows use: interest accrues on the overdrawn "
                    "amount during overdrawn periods, not on unused positive balances."
                )
            elif not truth and (
                "retained" in sl or "internal" in sl
            ) and "interest" in sl:
                chunks.append(
                    "Retained profit kept in the firm is not treated as a loan from the "
                    "owner that must pay market interest. Avoiding creditor interest is "
                    "precisely why internal finance is attractive."
                )
        if "share capital" in sl:
            if truth and ("external equity" in sl or "outside investor" in sl):
                chunks.append(
                    "Share capital subscribed by outside investors is external equity: "
                    "investors hold ownership claims, not a fixed repayment schedule like "
                    "a bank loan. It lengthens the firm's equity base."
                )
            elif not truth and "internal" in sl:
                chunks.append(
                    "Share capital from outside investors is external equity, not internal "
                    "equity. Internal equity is retained earnings generated by the firm "
                    "itself and kept rather than distributed."
                )
        if "bond" in sl:
            chunks.append(
                "Bonds issued to investors are a form of long-term external debt finance: "
                "the company borrows from bondholders and owes interest and principal "
                "according to the bond terms, distinct from equity share capital."
            )
        if "gearing" in sl or "loan capital" in sl and subsection == "4.6":
            if truth:
                chunks.append(
                    "Gearing reflects how heavily the firm relies on loan capital relative "
                    "to equity. High gearing raises fixed interest burdens and insolvency "
                    "risk if revenues dip, and can make new lenders reluctant to extend "
                    "further credit."
                )
            else:
                chunks.append(
                    "High gearing is a risk warning; it does not automatically forbid every "
                    "short-term trade-credit purchase of materials, nor is interest the only "
                    "criterion when choosing finance. Matching asset life and overall risk "
                    "still matter."
                )

    # ── partnerships 4.2 ──────────────────────────────────────────────────
    if subsection == "4.2" or "partnership" in sl:
        if "two or more" in sl or "jointly found" in sl or (
            "called a partnership" in sl
        ):
            chunks.append(
                "When two or more persons jointly found a business, the ownership form is "
                "a partnership. Joint founding — shared ownership intent — is the defining "
                "step that distinguishes it from a sole proprietorship."
            )
        if "partnership agreement" in sl:
            chunks.append(
                "Partners need a partnership agreement to settle ownership shares, "
                "decision rights, responsibilities, and how profits and losses are "
                "divided. Without clear terms, disputes over control and residual claims "
                "are harder to resolve."
            )
        if "general partnership" in sl or ("equal rights" in sl and "partner" in sl):
            chunks.append(
                "In a general partnership, partners typically share equal rights, "
                "liabilities, and responsibilities unless varied by agreement. Unlimited "
                "liability means each partner can be pursued for the firm's debts."
            )
        if "limited partner" in sl or "limited partnership" in sl:
            if truth:
                chunks.append(
                    "In a limited partnership, limited partners' liability is capped at "
                    "what they contributed, and they normally must not take part in "
                    "management — that is the price of the liability cap. General partners "
                    "continue to manage and usually retain unlimited liability."
                )
            else:
                chunks.append(
                    "Limited partners who take part in management risk losing the liability "
                    "shield that limited status provides. Limited liability is not a free "
                    "add-on to active control; the non-management rule is structural."
                )
        if "solely liable" in sl or ("unlimited liability" in sl and "partner" in sl):
            chunks.append(
                "Under unlimited liability in a general partnership, each partner can be "
                "solely liable for all debts of the business: creditors need not split "
                "claims proportionally before pursuing one partner's private assets."
            )
        if "specialis" in sl or "share the tasks" in sl:
            chunks.append(
                "Partners can divide tasks and specialise — one in sales, another in "
                "operations — while still sharing ownership. Specialisation is an "
                "operational advantage of multi-person ownership."
            )
        if "finance" in sl and ("sole" in sl or "resemble" in sl or "similar" in sl):
            chunks.append(
                "Partnership finance broadly resembles sole-proprietorship finance "
                "(owner capital, retained profit, bank and trade credit) but can draw on "
                "several partners' savings and collateral, often expanding capacity."
            )

    # ── corporations 4.3 ──────────────────────────────────────────────────
    if subsection == "4.3" or "corporation" in sl or "shareholder" in sl or (
        "stock exchange" in sl
    ) or ("ipo" in sl) or ("dividend" in sl and "share" in sl):
        if "legal" in sl and (
            "person" in sl or "entity" in sl or "sue" in sl or "contract" in sl
        ):
            chunks.append(
                "As a legal person, a corporation holds rights and obligations in its own "
                "name: it can own land and property, hire people, close contracts, sue, and "
                "be sued. Those capacities do not require every shareholder to act personally "
                "in each transaction."
            )
        if "shareholder" in sl and ("manage" in sl or "day-to-day" in sl):
            chunks.append(
                "Ownership and management can separate: shareholders who found or fund the "
                "corporation need not run daily operations, and hired managers need not own "
                "shares. Boards and executives supply the governance layer."
            )
        if "limited liability" in sl or ("liable" in sl and "capital" in sl):
            chunks.append(
                "Shareholders' financial exposure is generally limited to what they "
                "invested in share capital. Creditors claim against the company as legal "
                "person; they do not automatically seize shareholders' private homes for "
                "ordinary company debts."
            )
        if "secondary" in sl or ("stock exchange" in sl and "price" in sl) or (
            "market price" in sl and "rise" in sl
        ):
            if truth:
                chunks.append(
                    "After issue, shares trade among investors. A rise in the secondary-market "
                    "price enriches the selling shareholder relative to their purchase price; "
                    "it does not by itself inject new cash into the corporation's accounts."
                )
            else:
                chunks.append(
                    "Secondary-market appreciation is not a corporate financing inflow. The "
                    "issuer receives proceeds at issue (for example at an IPO); later price "
                    "changes between investors do not automatically raise new share capital "
                    "for the firm."
                )
        if "ipo" in sl or "initial public" in sl or (
            "issue" in sl and "new share" in sl
        ):
            chunks.append(
                "An IPO (or other primary issue) sells new shares and can raise equity "
                "finance for the issuer. Later exchange trading is mainly secondary: "
                "ownership passes between investors without a new capital raise unless "
                "the company issues again."
            )
        if "dividend" in sl:
            chunks.append(
                "Dividends distribute part of corporate profit to shareholders. Dividend "
                "policy affects how attractive shares look versus capital gains, but paying "
                "dividends is a distribution choice — not the same mechanism as sole-trader "
                "profit drawings."
            )
        if "preferred" in sl and "share" in sl:
            chunks.append(
                "Preferred shares often carry priority on dividends (and sometimes on "
                "liquidation proceeds) while voting rights may be reduced or absent compared "
                "with ordinary shares. Preference is about financial priority, not identical "
                "control rights."
            )
        if "board" in sl or "director" in sl:
            chunks.append(
                "The board of directors oversees strategy and appoints or supervises "
                "executive management. Day-to-day running typically sits with managers; "
                "shareholders exercise control mainly through appointments and major votes, "
                "not by personally managing every contract."
            )
        if "bond" in sl and "loan" in sl:
            chunks.append(
                "Corporate bonds and bank loans are both debt, but bonds are issued to "
                "investors in the market whereas bank loans are negotiated with lenders. "
                "Neither is equity: both create repayment obligations rather than residual "
                "ownership claims."
            )
        if "nominal" in sl or ("share capital" in sl and "calculat" in sl):
            chunks.append(
                "Share capital is built from the capital attached to issued shares (often "
                "thought of via nominal or par amounts × number of shares, depending on the "
                "jurisdiction's presentation). Ownership fractions follow shareholdings, not "
                "day-to-day managerial titles."
            )

    # ── classification 4.4 ────────────────────────────────────────────────
    if subsection == "4.4" or "unincorporated" in sl or "incorporated" in sl:
        chunks.append(
            "The unincorporated/incorporated split turns on legal personality. "
            "Unincorporated firms (sole traders, partnerships) are not legal entities of "
            "their own; incorporated companies are legal persons. Pooling capital, filing "
            "personal tax, listing shares, or enjoying limited liability must be attached "
            "to the correct side of that split — limited liability marks incorporated "
            "forms, and listing is not the sole criterion of incorporation."
        )

    # ── finance choice 4.6 ────────────────────────────────────────────────
    if subsection == "4.6" or "capital expenditure" in sl or "revenue spending" in sl or (
        "matching" in sl
    ) or ("intended use" in sl):
        if "capital expenditure" in sl or "many years" in sl or "long-lived" in sl or (
            "warehouse" in sl
        ) or ("plant" in sl):
            if truth:
                chunks.append(
                    "Capital expenditure on assets used over many years should normally be "
                    "matched with long-term finance so repayment horizons align with the "
                    "asset's service life. Funding a multi-year plant from rolling weekly "
                    "supplier credit mismatches term and use."
                )
            else:
                chunks.append(
                    "Funding long-lived assets from short-term supplier credit ignores "
                    "matching: the asset still binds capital for years while the credit "
                    "may fall due in days or weeks, creating refinancing pressure."
                )
        if "revenue" in sl and (
            "material" in sl or "short-term" in sl or "working capital" in sl
        ):
            chunks.append(
                "Revenue spending and routine materials purchases are typically suited to "
                "short-term credit (trade credit, overdrafts) because the cash cycle is "
                "short. Matching still applies — just toward shorter instruments."
            )
        if "interest" in sl and ("sole" in sl or "only" in sl or "absolute" in sl):
            chunks.append(
                "Interest matters, but it is not the sole cost or sole criterion. Issuance "
                "and administration costs, gearing risk, and intended use / term matching "
                "also shape the choice between loans, share issues, and short-term credit."
            )

    # numeric unpacking
    num = _pct_steps(statement)
    if num:
        chunks.append(num)

    # mid insight from prior explanation if non-redundant
    mid_clean = extract_mid(mid) if mid else ""
    if mid_clean:
        ml = mid_clean.lower().rstrip(".")
        joined = " ".join(chunks).lower()
        if ml not in joined and len(mid_clean) > 40:
            # avoid reintroducing filler
            if not any(bad.lower() in mid_clean.lower() for bad in FILLER_PHRASES):
                chunks.append(mid_clean.rstrip(".") + ".")

    # context tie-in (short)
    if "bakery" in ctx and "bakery" not in " ".join(chunks).lower():
        chunks.append(
            "Applied to the bakery (or other named sole trader) in the stem, the same "
            "ownership and finance rules hold: one owner-manager, personal tax and "
            "liability, and ordinary credit instruments as personal obligations."
        )
    if "repair workshop" in ctx and "workshop" not in " ".join(chunks).lower():
        chunks.append(
            "In the repair-workshop setting, continuity and decision authority still "
            "centre on the sole proprietor until a deliberate transfer is made."
        )

    # Personal wealth / viability (sole trader finance)
    if "financial capacit" in sl or "financial funds of the business" in sl or (
        "personal wealth" in sl
    ) or ("personal financial" in sl) or ("lacks financial funds" in sl) or (
        "limited personal wealth" in sl
    ):
        if truth:
            chunks.append(
                "Funding capacity for a sole proprietorship tracks what the owner can "
                "supply or attract. Personal financial capacity therefore shapes how much "
                "finance is available at start-up and in early expansion — legal ease of "
                "entry does not invent capital by itself."
            )
        else:
            chunks.append(
                "Personal wealth and funding capacity do affect whether and how easily a "
                "sole proprietorship can be established or expanded. Claiming they have no "
                "bearing reverses the usual finance constraint for this form."
            )

    # zero capital / voluntary savings quirks
    if "zero capital" in sl or (
        "does not stop the owner from contributing" in sl
    ) or ("never contributes personal capital" in sl):
        chunks.append(
            "No mandatory minimum capital means the law does not force a deposit before "
            "trading — it does not mean owners contribute nothing. In practice most sole "
            "traders still inject personal savings voluntarily despite the zero entry gate. "
            "The useful contrast is ‘no legal minimum’ versus ‘no owner funding at all,’ "
            "which are not the same claim."
        )

    # equity vs debt overview leftovers
    if "equity finance" in sl or "debt finance" in sl:
        chunks.append(
            "Equity finance creates ownership claims (share capital, retained earnings); "
            "debt finance creates repayment obligations (overdrafts, trade credit, loans, "
            "bonds). Internal versus external further asks whether funds came from inside "
            "surplus or from outside providers."
        )

    # truth/false wrap application — varied, non-formulaic
    pick = sum(ord(c) for c in statement) % 3
    if truth:
        wraps = (
            "On that basis the assertion matches the ownership or finance rule being tested.",
            "So the sentence is a correct description of the mechanism at work in this case.",
            "That is why the claim stands for this form of business or source of finance.",
        )
    else:
        wraps = (
            "On that basis the assertion attaches the wrong legal, tax, liability, or finance label.",
            "So the sentence does not survive once the correct mechanism is applied.",
            "That misclassification is enough to reject the claim.",
        )
    chunks.append(wraps[pick])

    # Ensure substance without dumping the entire theory block verbatim
    body = "\n\n".join(dict.fromkeys(chunks))  # light dedupe preserving order
    if len(body) < 180:
        extra = []
        if subsection in ("4.1", "4.4") and "sole" in sl:
            extra.append(
                "Keep the sole-trader triad in view: one owner-manager, no separate legal "
                "personality with personal tax on profits, and unlimited liability for debts."
            )
        elif subsection == "4.2":
            extra.append(
                "Keep the partnership triad in view: multi-person ownership, an agreement "
                "governing rights and profit shares, and unlimited liability for general partners "
                "(with limited partners capped only if they stay out of management)."
            )
        elif subsection == "4.3":
            extra.append(
                "Keep the corporate triad in view: separate legal personality, transferable "
                "share capital with limited shareholder liability, and possible separation of "
                "shareholders from day-to-day managers."
            )
        elif subsection in ("4.5", "4.1"):
            extra.append(
                "Keep the finance map in view: internal (retained profit, asset sales) versus "
                "external (owner start-up savings, investors, creditors), and equity claims "
                "versus debt obligations with short- versus long-term maturity."
            )
        elif subsection == "4.6":
            extra.append(
                "Keep the three choice criteria in view: cost (interest and issuance costs), "
                "gearing/insolvency risk, and matching finance term to the life of the asset or spending."
            )
        else:
            extra.append(THEORY.get(subsection, "")[:280])
        body = "\n\n".join(extra + [body])
    return body


def deepen_letter(
    subsection: str,
    statement: str,
    truth: bool,
    old: str,
    context: str = "",
) -> str:
    header = "TRUE —" if truth else "FALSE —"
    closer = "The statement is true." if truth else "The statement is false."
    body = concept_body(subsection, statement, truth, old, context)
    text = f"{header} {body.strip()}\n\n{closer}"
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    # Final filler sweep
    for bad in FILLER_PHRASES:
        if bad in text:
            # drop sentences containing bad phrases
            kept = []
            for para in text.split("\n\n"):
                if any(bad.lower() in para.lower() for bad in FILLER_PHRASES):
                    # try sentence-level
                    sents = re.split(r"(?<=[.!?])\s+", para)
                    sents = [
                        s
                        for s in sents
                        if not any(b.lower() in s.lower() for b in FILLER_PHRASES)
                    ]
                    if sents:
                        kept.append(" ".join(sents))
                else:
                    kept.append(para)
            text = "\n\n".join(kept)
    if not text.startswith(header):
        text = f"{header} {text}"
    if not text.rstrip().endswith(closer):
        text = text.rstrip() + "\n\n" + closer
    return text.strip() + "\n"


def audit_case(case: dict) -> list[str]:
    errs: list[str] = []
    key = case["answer_key"]
    expls = case["tactical_explanations"]
    if len(expls) != 5 or len(key) != 5:
        return [f"{case['case_id']}: expected 5 statements/keys/expls"]
    for i, (k, e) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        truth = bool(k) if not isinstance(k, str) else k == "True"
        want = "TRUE —" if truth else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: expected opener {want!r}")
        closer = "The statement is true." if truth else "The statement is false."
        if not e.rstrip().endswith(closer):
            errs.append(f"{case['case_id']} {letter}: missing closer {closer!r}")
        for bad in FILLER_PHRASES:
            if bad in e:
                errs.append(f"{case['case_id']} {letter}: filler left ({bad!r})")
        body = e[len(want) :].strip()
        if body.endswith(closer):
            body = body[: -len(closer)].strip()
        if len(body) < 120:
            errs.append(f"{case['case_id']} {letter}: body too thin ({len(body)} chars)")
    return errs


def deepen_case(case: dict) -> dict:
    sub = case["subsection"]
    ctx = case.get("context") or ""
    new_expls = []
    for stmt, truth, old in zip(
        case["statements"], case["answer_key"], case["tactical_explanations"]
    ):
        new_expls.append(
            deepen_letter(sub, stmt, bool(truth), old, ctx)
        )
    case["tactical_explanations"] = new_expls
    return case


def load() -> list[dict]:
    return json.loads(PATH.read_text(encoding="utf-8"))


def save(data: list[dict]) -> None:
    PATH.write_text(
        json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )


def deepen_range(
    start_id: str, end_id: str, *, write: bool = True
) -> tuple[list[str], list[str]]:
    data = load()
    ids: list[str] = []
    capturing = False
    for c in data:
        if c["case_id"] == start_id:
            capturing = True
        if capturing:
            ids.append(c["case_id"])
        if c["case_id"] == end_id:
            break
    by_id = {c["case_id"]: c for c in data}
    ok: list[str] = []
    errs: list[str] = []
    for cid in ids:
        case = by_id[cid]
        deepen_case(case)
        e = audit_case(case)
        if e:
            errs.extend(e)
        else:
            ok.append(cid)
            print(f"OK {cid}")
    if errs:
        return ok, errs
    if write:
        save(data)
    return ok, errs
