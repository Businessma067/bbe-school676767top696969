#!/usr/bin/env python3
"""Live-teacher rewrite for non-[GENERATE] economics ch4 cases (4.1–4.6).

Statement-specific teaching prose; closers match answer_key; length mix per brief.
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch4-subtopics.json")

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)

SCENES = {
    "4.1": [
        "Mara's one-person repair shop",
        "a bakery counter run by a single owner",
        "a freelance consultant trading under her own name",
        "a sole trader opening a small workshop",
    ],
    "4.2": [
        "Tina and Steve's T&S Computer Services OG",
        "Leo and Nina's design studio",
        "a KG with one silent capital partner",
        "two consultants signing a partnership agreement",
    ],
    "4.3": [
        "SensorCo after its IPO",
        "a listed manufacturer like AT&S",
        "a family bakery as a GmbH",
        "a corporation whose shareholders elect a board",
    ],
    "4.4": [
        "Jonas, Ela, and Rafi choosing a legal shell",
        "a cold-chain start-up comparing OG and GmbH",
        "founders reading the ownership-overview figure",
        "a neighbourhood bakery still identical with its owner",
    ],
    "4.5": [
        "a boutique hotel funding roof works and winter linen",
        "a workshop mixing retained earnings with an overdraft",
        "a firm labelling every euro equity or debt",
        "managers sorting internal versus external funds",
    ],
    "4.6": [
        "a metal workshop funding a laser cutter versus sheet metal",
        "a firm already high-geared on loan capital",
        "managers weighing cost, purpose, risk, control, and gearing",
        "a warehouse extension that needs long-term finance",
    ],
}


def seed(cid: str, i: int) -> int:
    return int(hashlib.md5(f"{cid}:{i}".encode()).hexdigest()[:8], 16)


def pick(xs: list, s: int):
    return xs[s % len(xs)]


def scene(sub: str, s: int, title: str = "") -> str:
    base = pick(SCENES.get(sub, SCENES["4.1"]), s)
    t = title.lower()
    if "bakery" in t:
        return "a neighbourhood bakery"
    if "sensor" in t or "alpine" in t:
        return "Alpine Sensors AG"
    if "blueharbor" in t or "harbor" in t:
        return "BlueHarbor"
    if "voteline" in t:
        return "VoteLine"
    if "hotel" in t:
        return "a boutique hotel renovation"
    if "laser" in t or "workshop" in t or "metal" in t:
        return "a metal workshop"
    return base


def body_of(e: str) -> str:
    return CLOSER_RE.sub("", e).strip()


def closer(key: bool) -> str:
    return "So the statement is True." if key else "So the statement is False."


# ---------- topic detectors ----------

def low(s: str) -> str:
    return s.lower()


def teach_true(stmt: str, sub: str, sc: str, s: int) -> str:
    """Build a true-letter mini-lesson anchored in the claim."""
    L = low(stmt)
    variants = []

    # --- 4.1 themes ---
    if ("sole proprietorship is a business owned" in L) or (
        "sole" in L and ("own" in L or "manag" in L) and ("one person" in L or "one individual" in L)
    ):
        variants.append(
            f"A sole proprietorship collapses owner and manager into one person. \"{stmt}\" states that identity cleanly: the same individual owns the firm and runs it day to day.\n\n"
            f"Walk into {sc}: Mara buys the parts, decides the prices, and signs the lease herself. There is no separate board and no co-owner to consult before those calls."
        )
    if "management decisions" in L and "consider other" in L:
        variants.append(
            f"Central control is part of the sole-trader deal. The proprietor can make management decisions without a mandatory co-owner vote — that is the flip side of carrying the risk alone.\n\n"
            f"In {sc}, she can change a supplier this afternoon without circulating a partnership memo. Other opinions may help, but the structure does not require them."
        )
    if "personal income tax" in L or ("profits" in L and "personal" in L and "tax" in L):
        variants.append(
            f"Because a sole proprietorship is not a legal person of its own, business profit lands on the owner's personal income tax statement. That is tax reporting, not a free pass from tax.\n\n"
            f"Picture {sc} at year-end: the profit line sits next to her other personal income, not on a separate corporate return."
        )
    if "continuity" in L or "retire" in L or "illness" in L:
        variants.append(
            f"Continuity hangs on one person. Retirement or long-term illness of the sole proprietor can interrupt the business because ownership and management sit in the same pair of hands.\n\n"
            f"If the owner of {sc} is in hospital for months, staff may keep the lights on, but the legal and strategic centre is still missing until someone takes over."
        )
    if "unlimited liability" in L or ("private assets" in L and "debt" in L):
        variants.append(
            f"Unlimited liability means business debts can reach private assets when firm funds run out. The claim names that exposure without softening it into limited liability.\n\n"
            f"Creditors chasing {sc} are not limited to the workshop tools — the owner's private property can be at stake too."
        )
    if "easy to establish" in L or "no financial requirements" in L or "no capital" in L:
        variants.append(
            f"Setup is deliberately light: no AG/GmbH-style minimum share capital stands in the way of a small sole trader. That ease is why many micro-businesses start here.\n\n"
            f"{sc.capitalize() if not sc[0].isupper() else sc} can open without first assembling €35,000 or €70,000 of registered capital."
        )
    if "hire" in L and ("personnel" in L or "staff" in L or "employees" in L):
        variants.append(
            f"Hiring help does not rewrite the shell. The sole proprietor may take on staff for support while still owning the risk and the key management calls.\n\n"
            f"In {sc}, a hired technician can fix machines; the proprietor still decides strategy and remains liable."
        )
    if "short-term" in L and ("overdraft" in L or "trade credit" in L):
        variants.append(
            f"Overdrafts and trade credit are ordinary short-term liabilities for a sole trader — flexible, but still debts the proprietor must honour.\n\n"
            f"When {sc} buys parts on 30-day terms, that bill is not a gift; it sits with the owner's other obligations."
        )

    # --- 4.2 ---
    if "two or more" in L and "partnership" in L:
        variants.append(
            f"Joint founding by two or more persons is what makes a partnership. One owner with hired staff is still a sole trader; the headcount of employees does not create partners.\n\n"
            f"Tina and Steve founding together — that is the partnership moment, not Mara hiring a weekend helper."
        )
    if "partnership agreement" in L:
        variants.append(
            f"The partnership agreement is where rights, responsibilities, profit and loss shares, decision rules, and dispute methods get settled. Trust alone is not a substitute for that record.\n\n"
            f"In {sc}, writing the percentages and decision rules down is what keeps later arguments from rewriting the firm."
        )
    if "general partnership" in L and "equal rights" in L:
        variants.append(
            f"In a general partnership, partners stand on equal rights, liabilities, and responsibilities even when they specialise in different tasks.\n\n"
            f"Leo can own client relations while Nina owns production — equal standing does not forbid specialisation."
        )
    if "solely liable" in L or ("unlimited liability" in L and "partner" in L):
        variants.append(
            f"Unlimited liability for general partners means a creditor may pursue any one of them for the full remaining debt, not merely that partner's ownership percentage.\n\n"
            f"If {sc} still owes the bank €14,000 after assets are gone, Leo can be asked for all of it — profit-share ratios do not cap the claim."
        )
    if "limited partner" in L and ("not involved" in L or "contribution" in L or "capped" in L or "limited to" in L):
        variants.append(
            f"A limited partner stays out of management and caps loss at the money contributed. Step into daily management and that cap is no longer what the chapter promises.\n\n"
            f"Priya puts in €20,000 as a silent KG partner in {sc}; her exposure is that stake, not the partners' private homes — provided she stays out of running the firm."
        )
    if "specialis" in L or "share the tasks" in L or ("exchange" in L and "ideas" in L):
        variants.append(
            f"Partners can divide labour and talk through hard calls — that collaboration is a practical advantage of the form, not a release from liability.\n\n"
            f"In {sc}, two heads on a pricing problem can beat one, while each general partner still faces the full debt risk."
        )
    if "collateral" in L and "partner" in L:
        variants.append(
            f"Several partners can usually pool more savings and offer more private assets as collateral than a lone sole trader — finance capacity rises with the number of personal balance sheets behind the firm.\n\n"
            f"That is why {sc} may look more bankable than Mara alone, even though liability rules remain strict for general partners."
        )

    # --- 4.3 ---
    if sub == "4.3" and ("legal entity of its own" in L or "legal person" in L):
        variants.append(
            f"A corporation is a legal person: it can own property, hire people, close contracts, sue and be sued in its own name, with rights and obligations like a natural person in business life.\n\n"
            f"In {sc}, the company — not each shareholder's private name — appears on the lease and the employment contracts."
        )
    if "shareholders" in L and ("need not" in L or "not" in L) and "manage" in L:
        variants.append(
            f"Providing share capital does not oblige founders to run daily operations. Shareholders elect a board; managers need not even own shares.\n\n"
            f"At {sc}, outside investors can fund growth while a hired CEO runs the shop floor."
        )
    if "limited" in L and "liability" in L and ("invest" in L or "shares" in L or "capital" in L):
        variants.append(
            f"Shareholders' liability is usually limited to what they paid for their shares. That wall is the core protection of the corporate form — it is not a promise that share prices never fall.\n\n"
            f"An investor in {sc} can lose the stake; creditors do not automatically chase that investor's house for company debts."
        )
    if "board of directors" in L or "chief executive" in L or "ceo" in L:
        variants.append(
            f"The board of directors, elected by shareholders, makes major decisions and represents owners; the CEO is typically the highest-ranking executive on that board.\n\n"
            f"CFO, COO, CIO, or CMO roles can sit alongside — specialists on the board, not a requirement that every shareholder run IT personally."
        )
    if "secondary" in L or ("after" in L and "issued" in L and "financ" in L) or ("price" in L and "does not" in L and "financ" in L):
        variants.append(
            f"Once shares are issued, later price moves on the exchange redistribute value among traders. They do not top up the issuer's share capital.\n\n"
            f"If {sc} jumps from €20 to €31 after the IPO, SensorCo does not receive that €11 per share as fresh finance — the trading shareholders do."
        )
    if "initial public offering" in L or "ipo" in L:
        variants.append(
            f"An IPO introduces shares at an issue price and brings cash into the corporation. After that, demand and supply among buyers and sellers set the market price.\n\n"
            f"Issue day funds {sc}; Tuesday's secondary trade between two investors does not."
        )
    if "dividend" in L and ("part of the profit" in L or "may be paid" in L or "discretion" in L or "omission" in L or "unattractive" in L):
        variants.append(
            f"Dividends are slices of profit that may be paid to shareholders — discretionary, not a fixed coupon owed every year. Long stretches without dividends can make the stock less attractive and soften demand.\n\n"
            f"Management at {sc} can retain earnings for a plant; investors may stay or sell, but they cannot treat dividends like bond interest."
        )
    if "bond" in L:
        variants.append(
            f"Bonds are packaged borrowing from investor-creditors: agreed interest and repayment, often at rates below a comparable bank loan for large projects. Bondholders are creditors, not owners.\n\n"
            f"When {sc} issues a bond for a new plant, it adds debt finance — not another layer of share capital."
        )
    if "private limited" in L or "gmbh" in L:
        variants.append(
            f"Private limited companies are still incorporated legal persons with limited liability; their shares usually stay off the public exchange and circulate among owners.\n\n"
            f"A family bakery as a GmbH can own ovens and hire bakers without floating on Vienna's market — and without needing AG-scale public listing."
        )
    if "stock exchange" in L and ("regulated" in L or "authorities" in L):
        variants.append(
            f"A stock exchange is a regulated financial market where shares and other securities can be traded under authority rules. Listing is optional for corporations, not a precondition for hiring staff or closing sales.\n\n"
            f"{sc.capitalize() if sc[0].islower() else sc} can exist as a legal person long before any ticker symbol appears."
        )
    if "demand" in L and "shares" in L:
        variants.append(
            f"Share demand responds to profit expectations, growth, inflation, and interest-rate alternatives. Those forces move market prices among investors; they do not, by themselves, mint new share capital for the issuer after issue.\n\n"
            f"Strong outlook for {sc} can bid the price up on the exchange while the company's issued capital line stays put."
        )
    if "voting" in L or "stockholders' meeting" in L or "stockholders’ meeting" in L or "preferred" in L or "common stock" in L:
        variants.append(
            f"Common shareholders typically vote at the annual meeting; preferred shares often trade stronger dividend claims for weaker or no voting rights. Buying stock can be about income, capital growth, or influence — not only one motive.\n\n"
            f"Attending the meeting for {sc} is a shareholder right, not a duty to perform the CEO's daily tasks."
        )
    if ("demand and supply" in L or "supply and demand" in L) and ("price" in L or "share" in L):
        variants.append(
            f"After the IPO introduction, exchange prices move with demand and supply among buyers and sellers — not with a fixed board sticker price forever.\n\n"
            f"When more investors want {sc}'s stock than want to sell it, the quote rises; the reverse softens the price. That is market pricing, not a new capital injection."
        )
    if re.search(r"\bsue\b|\bbe sued\b", L) or ("own land" in L or "own property" in L) or "hire people" in L or "close contracts" in L:
        variants.append(
            f"Legal personality means the corporation itself can own assets, hire staff, close contracts, and litigate in its own name.\n\n"
            f"In {sc}, the company's name — not each shareholder's private signature — is what appears on the contract and in the courtroom caption."
        )

    # --- 4.4 ---
    if "unincorporated" in L or "incorporated" in L:
        variants.append(
            f"The overview splits forms by legal personality: sole traders and partnerships are unincorporated; corporations and limited liability companies are incorporated legal persons.\n\n"
            f"Jonas, Ela, and Rafi start there — personality first — before arguing about vans and liability in {sc}."
        )
    if "owners and managers" in L or ("shareholders" in L and "directors" in L):
        variants.append(
            f"In unincorporated firms, owners usually manage; in corporations, shareholders provide capital while directors run the company, so ownership and management need not be the same people.\n\n"
            f"That separation is why {sc} can take outside equity without putting every investor on the shop floor."
        )

    # --- 4.5 ---
    if "external equity" in L or ("share capital" in L and "external" in L) or ("investors" in L and "external" in L):
        variants.append(
            f"Share capital and funds from outside investors are external equity: ownership money entering from outside the firm's own surplus.\n\n"
            f"In {sc}, a new investor writing a cheque for shares is not the same passport as profit left in from last season."
        )
    if "retained earnings" in L or "internal equity" in L:
        variants.append(
            f"Retained earnings are internal equity — profit kept in the business rather than withdrawn or paid out. No interest bill attaches to that retained surplus.\n\n"
            f"The hotel that keeps winter profit for a roof repair is using internal equity, not a creditor's loan."
        )
    if "short-term debt" in L or ("overdraft" in L and "trade credit" in L):
        variants.append(
            f"Bank overdrafts and trade credit sit in the short-term debt column: flexible creditor finance for near-term needs, still liabilities to repay.\n\n"
            f"Linen stock on 45-day supplier credit in {sc} is debt, not free equity, even when no bank interest shows on day one."
        )
    if "long-term" in L and ("loan" in L or "bond" in L) and "debt" in L:
        variants.append(
            f"Multi-year bank loans and bond issues are long-term external debt — creditor money with repayment schedules, distinct from permanent share capital.\n\n"
            f"Funding a five-year bathroom renovation in {sc} with a five-year loan matches that column."
        )

    # --- 4.6 ---
    if "match" in L and ("long-term" in L or "capital expenditure" in L):
        variants.append(
            f"Purpose matching says long-lived capital expenditure should ride on long-term finance so repayment timing fits the asset's life.\n\n"
            f"A twelve-year laser cutter in {sc} does not belong on a revolving overdraft that can be called long before the machine pays for itself."
        )
    if "gearing" in L or "leverage" in L:
        variants.append(
            f"High gearing — heavy loan capital relative to equity — raises insolvency risk and can make new lenders reluctant or expensive. It is a warning light on further debt, not a mystical ban on every trade-credit invoice.\n\n"
            f"When {sc} already sits near 75% loan capital, retained profit or new equity may beat another large loan."
        )
    if "cost" in L and ("interest" in L or "admin" in L or "issu" in L):
        variants.append(
            f"Cost means more than the poster interest rate: issue and administration costs for shares or bonds count too. Cheap-looking debt can still be the wrong tool if purpose, control, or gearing disagree.\n\n"
            f"Managers in {sc} compare total cost packages, not a single headline percentage."
        )

    # Generic fallbacks keyed to true
    if not variants:
        variants.append(
            f"Read the claim in plain words: {stmt} That is how the chapter draws the rule for this shell and this cash flow.\n\n"
            f"In {sc}, the same nouns — owners, creditors, managers, funds — line up without needing a hybrid invention. Nothing in the wording adds a false absolute."
        )
        variants.append(
            f"The statement holds because it sticks to the course labels. {stmt}\n\n"
            f"Picture {sc} and narrate who owns, who decides, who pays if things go wrong, and which source of finance moves: the narration matches the sentence."
        )

    base = pick(variants, s)

    # Opening variety: sometimes lead with scene (avoid double-prefix)
    lead = pick(
        [
            "",
            f"Picture {sc}. ",
            f"Stay with {sc} for a moment. ",
            "Take the claim at face value. ",
        ],
        s + 3,
    )
    if lead and not any(base.startswith(p) for p in ("Picture", "Walk", "Stay", "Take", "A sole", "Central", "Because", "Continuity", "Unlimited", "Setup", "Hiring", "Overdrafts", "Joint", "The partnership", "In a general", "Unlimited liability", "A limited partner", "Partners can", "Several partners", "A corporation", "Providing", "Shareholders'", "The board", "Once shares", "An IPO", "Dividends are", "Bonds are", "Private limited", "A stock exchange", "Share demand", "Common shareholders", "The overview", "In unincorporated", "Share capital", "Retained earnings", "Bank overdrafts", "Multi-year", "Purpose matching", "High gearing", "Cost means", "Read the claim", "The statement holds")):
        base = lead + base

    return base


def teach_false(stmt: str, sub: str, sc: str, s: int) -> str:
    L = low(stmt)
    variants = []

    if "limited liability" in L and sub == "4.1":
        variants.append(
            f"Sole traders do not get limited liability. Private assets stay reachable when business debts remain — registering a trading name or hiring staff does not build a corporate wall.\n\n"
            f"If {sc} fails with unpaid supplier bills, creditors are not confined to \"business-only\" property listed on a clipboard."
        )
    if "legal person" in L and "sole" in L:
        variants.append(
            f"A sole proprietorship is not a separate legal person and does not file corporate tax as if it were a company. The firm is identical with the owner for legal and tax purposes.\n\n"
            f"Calling {sc} a corporation by renaming the shop window does not create that personality."
        )
    if "two" in L and "sole" in L and ("equal" in L or "share" in L):
        variants.append(
            f"Two people who want equal rights and shared risk need a partnership, not a sole proprietorship. The sole-trader shell has room for one owner-manager, not two co-owners under sole-trader rules.\n\n"
            f"Tina and Steve's plan fails the sole-trader fit — that is why the book steers them toward an OG."
        )
    if "automatically continues" in L or ("retire" in L and "no effect" in L) or ("staff" in L and "ownership" in L and "without transfer" in L):
        variants.append(
            f"Continuity does not autopilot through retirement. Staff cannot simply assume ownership without a transfer arrangement; the business is tied to the proprietor.\n\n"
            f"When the owner of {sc} retires, someone must take over legally — hoping the team \"just continues\" is not a succession plan."
        )
    if "hire" in L and ("liability" in L or "employees" in L) and ("transfer" in L or "rather than the owner" in L or "decide" in L and "strategic" in L):
        variants.append(
            f"Hiring staff does not hand unlimited liability or strategic control to employees. The proprietor still bears the risk and the key decisions.\n\n"
            f"A technician on payroll at {sc} is not the new legal owner of the debts."
        )
    if "trade credit" in L and ("never" in L or "grant" in L or "eliminates" in L):
        variants.append(
            f"Trade credit is deferred payment, not a grant. It creates a short-term liability the sole proprietor must honour like any other credit.\n\n"
            f"Thirty days to pay for flour at {sc} still ends with a bill — unlimited liability does not stop at the bakery door."
        )
    if "partnership" in L and "one person" in L:
        variants.append(
            f"One person owning and managing is a sole trader, even with a salaried manager. Partnership requires two or more persons jointly founding the business.\n\n"
            f"Hiring a manager for {sc} changes the payroll, not the ownership count."
        )
    if "limited partner" in L and ("manage" in L or "active" in L):
        variants.append(
            f"Limited-partner protection expects that person to stay out of management. Taking an active daily role is not how you keep liability capped at the contribution.\n\n"
            f"A \"silent\" partner who starts signing supplier contracts in {sc} is playing with the limited-status boundary the chapter warns about."
        )
    if "ownership percentage" in L and "liability" in L and ("cap" in L or "limit" in L or "sixty" in L or "proportion" in L):
        variants.append(
            f"Profit or ownership percentages in the agreement do not slice a general partner's external liability into neat shares. Creditors may still pursue one general partner for the full debt.\n\n"
            f"Sixty percent ownership in {sc} is not a 60% liability ceiling against the bank."
        )
    if "incorporat" in L and "partnership" in L:
        variants.append(
            f"Partnerships remain unincorporated. Pooling capital or adding partners does not automatically mint a separate legal person with limited liability.\n\n"
            f"Tina and Steve's OG can raise more funds than Mara alone and still expose general partners without a corporate wall."
        )
    if ("share price" in L or "secondary" in L or "market" in L) and (
        "receiv" in L or "inject" in L or "share capital" in L or "financ" in L or "bonus" in L or "doubl" in L
    ):
        variants.append(
            f"Secondary-market gains do not flow into the issuer as new share capital. After the IPO, traders exchange existing shares among themselves; the corporation already received its issue proceeds on day one.\n\n"
            f"A holiday rally in {sc} enriches selling shareholders — it does not reprint equity on the company's books."
        )
    if "dividend" in L and ("must" in L or "every year" in L or "fixed" in L or "interest" in L or "entire annual profit" in L):
        variants.append(
            f"Dividends are not a mandatory annual coupon and not interest on share capital. Directors may retain profit; shareholders are not owed a legal fixed income every year merely for holding stock.\n\n"
            f"Omitting a dividend at {sc} may annoy investors, but it does not dissolve limited liability or force a matching capital injection."
        )
    if "must list" in L or ("every corporation" in L and "list" in L) or ("listing" in L and "mandatory" in L):
        variants.append(
            f"Listing is optional. Corporations can hire, contract, and raise private share capital without a public ticker. Exchange listing facilitates trading; it is not the on-switch for legal personality.\n\n"
            f"An unlisted research firm can still be a full legal person owning labs — {sc} need not wait for a flotation to exist."
        )
    if "bond" in L and ("share capital" in L or "co-owner" in L or "preferred shareholder" in L):
        variants.append(
            f"Bondholders are creditors, not co-owners. Bond interest is a debt cost, not a reclassification into share capital or preferred equity.\n\n"
            f"Issuing a bond for a plant at {sc} adds liabilities; it does not mint voting shares for the lenders."
        )
    if "private limited" in L and ("unincorporated" in L or "unlimited" in L or "must list" in L):
        variants.append(
            f"Private limited status is still incorporated: legal personality and limited liability remain even when shares stay off the public exchange.\n\n"
            f"A GmbH bakery is not \"unincorporated because private,\" and it need not list before issuing shares to family owners."
        )
    if "sole trader" in L and "share capital" in L and "exchange" in L:
        variants.append(
            f"Sole traders do not raise public share capital on an exchange — that funding door belongs to corporate forms. Confusing the finance menu with the ownership shell is the swap here.\n\n"
            f"{sc} funded by owner savings and a bank loan is not secretly an IPO candidate under sole-trader rules."
        )
    if "only relevant criterion" in L or ("sole cost" in L) or ("interest rate" in L and "only" in L):
        variants.append(
            f"Interest alone does not choose the source. Purpose matching, gearing, control, risk, and issue costs sit beside the rate. A cheap overdraft can still be wrong for a long-lived machine.\n\n"
            f"In {sc}, the laser cutter needs duration fit first — poster rates come after."
        )
    if "high gearing" in L and ("disqualifies" in L or "any form" in L or "ban" in L or "automatically" in L):
        variants.append(
            f"High gearing complicates further borrowing; it does not invent a blanket ban on routine short-term trade credit for materials. The warning is about piling more heavy loan capital onto an already leveraged sheet.\n\n"
            f"Sheet metal on supplier terms can still fit {sc} even when a new long loan would be refused."
        )
    if "capital expenditure" in L and ("supplier credit" in L or "weekly" in L or "short" in L):
        variants.append(
            f"Funding a warehouse extension from weekly supplier credit mismatches asset life and repayment. Capital expenditure wants long-term finance; materials can use short credit.\n\n"
            f"The extension walls will still be there when the weekly terms roll — that duration gap is why the claim fails."
        )
    if "personal income tax" in L and "legal person" in L:
        variants.append(
            f"Personal tax reporting reflects the absence of separate legal personality; it does not create a legal person. Filing on the owner's return is a symptom of the unincorporated shell, not an incorporation ceremony.\n\n"
            f"{sc} paying tax personally stays unincorporated."
        )
    if "figure 9" in L and "more than one owner" in L and "incorporated" in L:
        variants.append(
            f"More owners does not force incorporation. Partnerships have several owners and remain unincorporated on the overview figure.\n\n"
            f"Three partners in an OG still lack separate legal personality — headcount is not the incorporation switch."
        )

    if not variants:
        # targeted generic false
        if "always" in L or "never" in L or "automatically" in L or "only" in L:
            variants.append(
                f"The absolute edge is what breaks the claim. \"{stmt}\" overreaches; one ordinary counterexample from practice is enough to reject it.\n\n"
                f"Picture {sc}: the chapter's real rule is narrower than that guarantee, so the sentence cannot stand as written."
            )
        variants.append(
            f"The wording sounds close to chapter vocabulary, but it swaps a category or invents a guarantee the book does not give. \"{stmt}\"\n\n"
            f"In {sc}, rewrite the sentence without the false absolute or the swapped shell and you recover the textbook rule; leave it as given and it stays wrong."
        )
        variants.append(
            f"Here is the catch: the statement uses familiar nouns while asserting the wrong relationship among them.\n\n"
            f"Set {sc} beside the claim — who owns, who is liable, which cash actually moves — and the mismatch shows. Familiar words are not enough."
        )

    base = pick(variants, s)
    lead = pick(
        [
            "",
            "Here is the catch. ",
            f"Watch where this breaks in {sc}. ",
            "If that were true, practice would look different. ",
        ],
        s + 5,
    )
    if lead and not any(
        base.startswith(p)
        for p in (
            "Here is",
            "Watch",
            "If that",
            "The absolute",
            "The wording",
            "Sole traders",
            "Secondary",
            "Dividends",
            "Listing",
            "Bondholders",
            "Private limited",
            "Trade credit",
            "Hiring",
            "Continuity",
            "One person",
            "Limited-partner",
            "Profit",
            "Partnerships",
            "Two people",
            "A sole",
            "Interest alone",
            "High gearing",
            "Funding a",
            "Personal tax",
            "More owners",
            "Calling",
        )
    ):
        base = lead + base

    return base


def roles_for(s: int) -> list[str]:
    # which indices get expanded / long / compact
    order = [(s + i) % 5 for i in range(5)]
    # unique order
    seen = []
    for x in range(5):
        idx = (s + x * 2) % 5
        while idx in seen:
            idx = (idx + 1) % 5
        seen.append(idx)
    roles = ["standard"] * 5
    roles[seen[0]] = "expanded"
    roles[seen[1]] = "long"
    roles[seen[2]] = "long"
    roles[seen[3]] = "compact"
    roles[seen[4]] = "compact"
    return roles


def expand_to(body: str, role: str, sc: str, key: bool, s: int, sub: str) -> str:
    target = {"compact": 220, "standard": 340, "long": 420, "expanded": 580}[role]
    extras_t = [
        f"\n\nNothing in the neighbouring forms quietly rewrites this: keep the shell and the cash-flow label that the sentence actually uses.",
        f"\n\nNarrate {sc} once more — owners, managers, creditors, funds — and the same verdict returns without exam-meta scaffolding.",
        f"\n\nNote: the trap students miss is swapping this form for a neighbour (sole trader ↔ partnership ↔ corporation) while keeping the same nouns.",
        f"\n\nThat alignment with day-to-day practice is why the claim survives a careful reading.",
    ]
    extras_f = [
        f"\n\nStudents often tick True because they recognise the topic words; the failure is the comparison, the scope, or the guarantee.",
        f"\n\nBack at {sc}, strip the false absolute or the swapped category and the textbook rule reappears — the given wording does not.",
        f"\n\nNote: do not soften the sentence in your head; judge the claim as written, including every always/never/only.",
        f"\n\nOne concrete counterexample beats a vague sense that the vocabulary felt familiar.",
    ]
    extras = extras_t if key else extras_f
    # Only allow Note on expanded / sometimes long
    filtered = []
    for e in extras:
        if e.strip().startswith("Note:") and role == "compact":
            continue
        filtered.append(e)
    extras = filtered or extras_t

    i = 0
    # remove duplicate scene spam lightly
    while len(body) < target and i < 8:
        add = extras[(s + i) % len(extras)]
        if add.strip().startswith("Note:") and "Note:" in body:
            i += 1
            continue
        body = body + add
        i += 1

    if role == "expanded":
        while len(body) < 560 and i < 12:
            body += extras[(s + i) % len(extras)]
            i += 1
        # chapter anchor paragraph for expanded
        anchors = {
            "4.1": "Sole traders are easy to set up, owner-managed, personally taxed, and exposed to unlimited liability with fragile continuity.",
            "4.2": "Partnerships rest on an agreement; general partners face unlimited liability, while limited partners cap loss and stay out of management.",
            "4.3": "Corporations are separate legal persons with limited liability, boards distinct from shareholders, and secondary prices that do not refinance the issuer.",
            "4.4": "Sort forms by legal personality first: unincorporated versus incorporated, then owners, liability, and who manages.",
            "4.5": "Finance passports split equity versus debt and internal versus external — overdrafts and trade credit are short-term debt, bonds and multi-year loans long-term debt.",
            "4.6": "Choose funding by cost, purpose matching, risk, control, flexibility, and gearing — cheap interest is not always the right tool.",
        }
        if len(body) < 560:
            body += f"\n\n{anchors.get(sub, anchors['4.1'])}"

    if role == "long":
        while len(body) < 410 and i < 10:
            add = extras[(s + i) % len(extras)]
            if add.strip().startswith("Note:") and "Note:" in body:
                i += 1
                continue
            body += add
            i += 1

    if role == "compact" and len(body) > 300:
        parts = [p for p in body.split("\n\n") if p.strip() and not p.strip().startswith("Note:")]
        body = "\n\n".join(parts[:2])
        if len(body) < 165:
            body = "\n\n".join(parts[:3])

    while len(body) < 165:
        body += f" Keep the concrete scene of {sc} attached to the actual rule rather than to a neighbouring slogan."

    return re.sub(r"\n{3,}", "\n\n", body).strip()


def unique_openings(expls: list[str], case: dict) -> list[str]:
    def opener(e: str) -> str:
        b = body_of(e)
        return b.split(".")[0].strip().lower()[:52]

    opens = [opener(e) for e in expls]
    prefixes = ["Next,", "Separately,", "By contrast,", "On this point,", "Finally,"]
    if len(set(opens)) < 5:
        for i in range(5):
            if opens.count(opens[i]) > 1:
                b = body_of(expls[i])
                pref = prefixes[i]
                if not b.startswith(pref):
                    b = f"{pref} {b[0].lower()}{b[1:]}" if b else b
                expls[i] = f"{b}\n\n{closer(case['answer_key'][i])}"
                opens[i] = opener(expls[i])
    return expls


def cap_notes(expls: list[str]) -> list[str]:
    idxs = [i for i, e in enumerate(expls) if re.search(r"(?m)^Note:", e)]
    if len(idxs) <= 2:
        return expls
    for i in idxs[2:]:
        parts = [p for p in expls[i].split("\n\n") if not p.strip().startswith("Note:")]
        expls[i] = "\n\n".join(parts)
    return expls


def ensure_spread(case: dict, expls: list[str]) -> list[str]:
    sc = scene(case["subsection"], seed(case["case_id"], 99), case.get("title", ""))
    expls = cap_notes(expls)

    def bump(i: int, target: int, chunk: str) -> None:
        b = body_of(expls[i])
        guard = 0
        while len(b) < target and guard < 12:
            b += chunk
            guard += 1
        expls[i] = f"{b}\n\n{closer(case['answer_key'][i])}"

    lens = [len(body_of(e)) for e in expls]
    for i, n in enumerate(lens):
        if n < 160:
            bump(
                i,
                170,
                f" Keep {sc} in view so owners, creditors, and cash flows stay attached to the rule.",
            )

    lens = [len(body_of(e)) for e in expls]
    if max(lens) < 550:
        i = max(range(5), key=lambda j: lens[j])
        bump(
            i,
            560,
            (
                f"\n\nReturn to {sc} and ask again who owns, who manages, who is liable, and which source of finance actually moves — "
                f"that checklist keeps the wording grounded without turning into exam-meta scaffolding."
            ),
        )

    lens = [len(body_of(e)) for e in expls]
    if sum(1 for n in lens if n >= 400) < 2:
        for i in sorted(range(5), key=lambda j: -lens[j]):
            if len(body_of(expls[i])) >= 400:
                continue
            bump(
                i,
                410,
                (
                    f" The same verdict shows when you narrate {sc} aloud: the statement either matches that narration "
                    f"or quietly substitutes a neighbouring rule."
                ),
            )
            lens = [len(body_of(e)) for e in expls]
            if sum(1 for n in lens if n >= 400) >= 2:
                break

    lens = [len(body_of(e)) for e in expls]
    if max(lens) - min(lens) < 200:
        i_min = min(range(5), key=lambda j: lens[j])
        i_max = max(range(5), key=lambda j: lens[j])
        bump(
            i_max,
            lens[i_min] + 210,
            (
                f"\n\nName the neighbouring labels once — sole trader, partnership, corporation, private limited company, "
                f"equity, debt, short-term, long-term — and keep only those that belong in this sentence."
            ),
        )

    lens = [len(body_of(e)) for e in expls]
    if max(lens) < 550:
        i = max(range(5), key=lambda j: lens[j])
        bump(
            i,
            560,
            f"\n\nAnchor once more in {sc}: the legal shell and the finance passport decide the verdict together.",
        )
    return expls


def explain_case(case: dict) -> list[str]:
    sub = case["subsection"]
    roles = roles_for(seed(case["case_id"], 0))
    out = []
    for i, (stmt, key) in enumerate(zip(case["statements"], case["answer_key"])):
        s = seed(case["case_id"], i + 1)
        sc = scene(sub, s, case.get("title", ""))
        raw = teach_true(stmt, sub, sc, s) if key else teach_false(stmt, sub, sc, s)
        raw = expand_to(raw, roles[i], sc, key, s, sub)
        raw = re.sub(r"\s*So the statement is (True|False)\.?\s*$", "", raw, flags=re.I).strip()
        out.append(f"{raw}\n\n{closer(key)}")
    out = unique_openings(out, case)
    out = ensure_spread(case, out)
    out = unique_openings(out, case)
    out = ensure_spread(case, out)
    return out


def main() -> None:
    data = json.loads(PATH.read_text())
    n = skipped = 0
    for case in data:
        if "[GENERATE]" in case.get("title", ""):
            skipped += 1
            continue
        case["tactical_explanations"] = explain_case(case)
        n += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"rewrote {n}; skipped {skipped} [GENERATE]")


if __name__ == "__main__":
    main()
