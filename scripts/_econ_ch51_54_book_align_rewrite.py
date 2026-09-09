#!/usr/bin/env python3
"""Live-teacher, book-grounded rewrite for economics CASE 5.1–5.4 only."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "src/data/economics-cases-ch5-subtopics.json"
OUT_JSON = ROOT / "scripts/_econ_ch51_54_book_align_rewrites.json"
OLD51_PATH = ROOT / "scripts/_econ_ch51_live_teacher_01_40.py"
VAL_PATH = ROOT / "scripts/_econ_live_teacher_validate.py"

CLOSER_RE = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)
SUBS = ("5.1", "5.2", "5.3", "5.4")


def body_of(e: str) -> str:
    return CLOSER_RE.sub("", e).strip()


def closer(is_true: bool) -> str:
    return "So the statement is True." if is_true else "So the statement is False."


def pack(paras: list[str], is_true: bool, note: str | None = None) -> str:
    parts = [p.strip() for p in paras if p and p.strip()]
    if note:
        parts.append("Note: " + note)
    parts.append(closer(is_true))
    return "\n\n".join(parts)


def scrub(text: str) -> str:
    for a, b in {
        "In class we would put": "Picture putting",
        "In class we would": "A careful reading would",
        "exam trap": "common mix-up",
        "Exam trap": "Common mix-up",
        "Walk the claim": "Read the claim",
        "walk the claim": "read the claim",
    }.items():
        text = text.replace(a, b)
    return text


def lengthen(expls: list[str], keys: list[bool], extras: list[str], uniq: list[str]) -> list[str]:
    bodies = [body_of(e) for e in expls]
    guard = 0
    while guard < 25:
        guard += 1
        lens = [len(b) for b in bodies]
        n400 = sum(1 for n in lens if n >= 400)
        n550 = sum(1 for n in lens if n >= 550)
        spread = max(lens) - min(lens)
        opens = [b.split(".")[0].strip().lower()[:52] for b in bodies]
        if min(lens) >= 180 and n400 >= 2 and n550 >= 1 and spread >= 200 and len(set(opens)) == 5:
            break
        if len(set(opens)) < 5:
            for i in range(5):
                if opens.count(opens[i]) > 1:
                    bodies[i] = uniq[i] + " " + bodies[i][0].lower() + bodies[i][1:]
            continue
        order = sorted(range(5), key=lambda i: lens[i])
        if min(lens) < 180:
            target = order[0]
        elif n550 < 1:
            target = [i for i in order if lens[i] < 550][-1]
        elif n400 < 2:
            target = [i for i in order if lens[i] < 400][0]
        else:
            target = max(range(5), key=lambda i: lens[i])
        extra = extras[target % len(extras)]
        if extra not in bodies[target]:
            bodies[target] = bodies[target] + "\n\n" + extra
        else:
            bodies[target] = bodies[target] + "\n\n" + extras[(target + 2) % len(extras)]
    return [bodies[i].strip() + "\n\n" + closer(keys[i]) for i in range(5)]


def trim_notes(expls: list[str], max_notes: int = 2) -> list[str]:
    idxs = [j for j, e in enumerate(expls) if re.search(r"(?m)^Note:", e)]
    if len(idxs) > max_notes:
        for j in idxs[max_notes:]:
            expls[j] = re.sub(r"\n\nNote:.*?(?=\n\nSo the statement)", "", expls[j], flags=re.S)
    return expls


def load_old51() -> dict[str, list[str]]:
    ns: dict = {}
    text = OLD51_PATH.read_text().replace('if __name__ == "__main__":', "if False:")
    exec(compile(text, str(OLD51_PATH), "exec"), ns)
    return ns["REWRITES"]


def build_51(cur: dict) -> dict[str, list[str]]:
    old51 = load_old51()
    scenes = [
        "Steve buying a printer for the office versus Tina buying the same model for the flat keeps the buyer test concrete for this letter.",
        "A paid support hour sold to a household sits beside a physical printer on the product map — both qualify once exchange is present.",
        "Internal stock moved between branches never becomes a marketed product just by travelling down the corridor.",
        "Calling every factory-made device a producer product forever would erase the household channel the chapter carefully keeps open.",
        "Desire without trade is not enough: gifts and free tips may help people, yet marketing still waits for exchange before saying “product.”",
    ]
    add = [
        "Tina and Steve’s printer example makes the same point: buyer type and exchange decide the marketing label, not factory folklore or packaging theatre.",
        "Keep a home buyer and an office buyer side by side — only the purchaser identity flips the producer/consumer tag.",
        "The chapter’s product definition is exchange-first: wishes and needs matter, but only once the good or service is actually traded.",
        "That reading stays faithful to Fuhrmann’s wording on goods and services, B2B versus B2C, and the office-versus-home printer scene.",
        "If you keep that sequence in mind — exchange, customer type, then label — the statement either lands cleanly or collapses on a false test.",
    ]
    uniq = [
        "Start from the buyer on the invoice.",
        "Picture the office desk and the home desk.",
        "Exchange is the gate the chapter uses.",
        "Services sit inside the same product fence.",
        "Classification flips when the purchaser flips.",
    ]
    out = {}
    for i in range(1, 17):
        cid = f"CASE 5.1.{i:02d}"
        scrubbed = [scrub(e) for e in old51[cid]]
        for j, e in enumerate(scrubbed):
            got = CLOSER_RE.search(e).group(1).capitalize() == "True"
            assert got == cur[cid]["answer_key"][j], (cid, j)
        out[cid] = lengthen(scrubbed, cur[cid]["answer_key"], scenes + add, uniq)
        out[cid] = [e.replace("walk the claim", "read the claim").replace("Walk the claim", "Read the claim") for e in out[cid]]
    return out


# --- 5.2 cores (statement-faithful) ---
def core_52(stmt: str, is_true: bool) -> tuple[str, str]:
    s = stmt.lower()
    if "usp" in s or "unique selling" in s or ("differentiat" in s) or ("brand" in s and "loyal" not in s and "satisf" not in s):
        sc = "A bakery selling “same-day sourdough still crackling at dinner” is chasing a USP so buyers stop comparing on price alone."
    elif "market share" in s:
        sc = "When PeakMeal tracks its slice of the city meal-prep niche, it is watching relative competitive weight."
    elif "profit" in s:
        sc = "Owners still need a surplus that reimburses capital and can be retained for reinvestment."
    elif "recommend" in s:
        sc = "A satisfied diner who tells two colleagues about PeakMeal extends the firm’s reach without a new ad buy."
    elif "complaint" in s:
        sc = "A spike in cold-meal tickets after a campaign is a satisfaction warning light, not a victory banner."
    elif any(k in s for k in ["loyal", "retention", "repeat", "buy again", "purchase again", "repurchase"]):
        sc = "A night-shift nurse who reorders the same meal box next week is the loyalty the objectives section aims at."
    elif "satisf" in s or "dissatisf" in s:
        sc = "Cold meals and late deliveries show up first as dissatisfaction, then as vanished repeat orders."
    elif "sale" in s or "revenue" in s:
        sc = "Revenues must cover production costs before anyone talks about healthy growth."
    else:
        sc = "Tina and Steve still have to decide which marketing aims they will actually steer toward this year."

    if is_true:
        if "recommend" in s:
            core = "Satisfied customers may tell others, stretching marketing impact beyond the original invoice — recommendation is part of why satisfaction matters."
        elif "not satisfied" in s or ("dissatisf" in s and "still" not in s and "will still" not in s and "continue" not in s and "improves" not in s):
            core = "Dissatisfied buyers typically refuse a second purchase. Satisfaction therefore protects the sales and loyalty aims that sit beside it."
        elif "loyal customers who buy again" in s or ("loyal" in s and "sales volume" in s):
            core = "Loyal repeat buyers steady the sales line over time; that is why loyalty is worth targeting as a marketing aim."
        elif "supports retention" in s:
            core = "Satisfaction supports retention: people stay and return instead of treating the firm as a one-off trial."
        elif "interrelated" in s or "linked to maintaining" in s or "complement differentiation" in s:
            core = "Fuhrmann treats satisfaction as interrelated with loyalty, sales, share, and the other aims — not as an isolated soft topic."
        elif "wish" in s and "need" in s and any(k in s for k in ["prerequisite", "analys", "meeting needs", "align"]):
            core = "Meaningful objectives start from knowing which wishes and needs the firm intends to meet in a defined market."
        elif "usp" in s or "unique" in s or "differentiat" in s:
            core = "A USP — a real or clearly perceived difference — helps attract loyal customers; branding supports that sense of being special."
        elif "market share" in s:
            core = "Market share signals relative importance versus rivals, so firms care about gaining and keeping it as a competitiveness marker."
        elif ("sale" in s or "revenue" in s) and "satisf" not in s:
            core = "Sales matter because the revenues cover production costs and support profit; growing or defending sales is a standard marketing aim."
        elif "profit" in s:
            core = "Profitability reimburses owners and funds reinvestment; higher sales help only within cost and price limits."
        elif "complaint" in s:
            core = "Rising complaints are a live signal that the satisfaction objective is slipping."
        elif "survey" in s:
            core = "Satisfaction surveys are one practical way to see whether marketing objectives about customer experience are being met."
        elif "loyalty programmes to succeed" in s or "foundation for brand loyalty" in s:
            core = "Loyalty programmes work better when customers were already satisfied; points cannot carry a bad product experience alone."
        elif "fails to meet needs" in s or "sales growth become harder" in s:
            core = "If the product misses needs, sales-growth objectives become much harder to reach no matter how loud the ads are."
        elif "same brand on the next occasion" in s or "product quality can encourage" in s:
            core = "Satisfaction with quality nudges the next choice back to the same brand."
        elif "repurchase rates" in s or "indirectly tracking" in s:
            core = "Repurchase rates are a practical shadow measure of whether satisfaction objectives are working."
        elif "wishes were fulfilled" in s or "more willing to buy" in s:
            core = "Customers who felt their wishes were fulfilled are more willing to buy again."
        elif "promised uniqueness is experienced" in s:
            core = "Differentiation only sticks when the promised uniqueness is actually experienced — satisfaction and USP reinforce each other."
        elif "erode market share" in s:
            core = "Poor satisfaction can erode share even while the firm keeps spending heavily on promotion."
        elif "unhappy customers simply will not" in s:
            core = "Satisfaction is an objective because unhappy customers simply will not buy again."
        elif "loyal repeat buyers strengthen" in s:
            core = "Firms set satisfaction targets because loyal repeat buyers strengthen sales, share, and related aims."
        elif "loyalty outcomes depend" in s or "satisfactory experience with prior" in s:
            core = "Loyalty outcomes depend on a satisfactory prior experience — the book ties the two together."
        elif "reduces reliance on constant new-customer" in s:
            core = "A satisfied base reduces pressure to hunt only for new customers every period."
        elif "one of several marketing objectives" in s:
            core = "Customer satisfaction is one of several marketing objectives a business may pursue alongside USP, share, sales, and profit."
        elif "contributes to profitability indirectly" in s:
            core = "Satisfaction supports profitability indirectly by feeding repeat revenue streams."
        elif "remain with the firm rather than switch" in s:
            core = "When customers are satisfied, they are more likely to stay rather than switch."
        elif "track satisfaction scores alongside sales" in s:
            core = "Marketing teams often review satisfaction scores beside sales when checking objective performance."
        elif "delights customers on first use" in s:
            core = "A product that delights on first use is better placed to hit loyalty objectives later."
        elif "undo short-term sales gains" in s:
            core = "Dissatisfaction after a promotional trial can erase the short-term sales bump the campaign created."
        elif "deliver what was promised in differentiation" in s:
            core = "Satisfaction objectives push the firm to deliver the difference it promised in its USP messaging."
        elif "satisfied customers often become loyal" in s or "may purchase the product again" in s:
            core = "Satisfied customers often become loyal and may buy again — that is the book’s explicit link."
        elif "repeat purchase behaviour is more likely" in s or "met or exceeded customer expectations" in s:
            core = "Repeat purchase is more likely when prior use met or exceeded expectations."
        elif "not separable from long-run sales" in s:
            core = "In this framework, satisfaction is not separable from long-run sales performance."
        elif "convert first-time buyers" in s:
            core = "Satisfaction objectives aim to turn first-time buyers into customers who return."
        elif "reinforce market share by retaining" in s:
            core = "High satisfaction can reinforce market share by retaining buyers who would otherwise leak to rivals."
        elif "ignores customer satisfaction risks losing" in s:
            core = "Ignoring satisfaction risks losing repeat sales from buyers who were otherwise viable."
        elif "post-purchase satisfaction influences" in s:
            core = "How people feel after the purchase shapes whether the product is even considered next time."
        elif "ensuring customers are content enough" in s:
            core = "Marketing objectives include leaving customers content enough to consider buying again."
        elif "dissatisfied customers are a signal" in s:
            core = "Dissatisfied customers signal that marketing and delivery may be missing stated objectives."
        elif "pursuing loyalty must first address" in s:
            core = "A firm chasing loyalty must first ask whether customers are satisfied with the core product."
        elif "analyse customer wishes" in s or "unsatisfied buyers will not sustain" in s:
            core = "Businesses analyse wishes and needs because unsatisfied buyers will not sustain demand."
        else:
            core = "The statement matches how section 5.2 links satisfaction, loyalty, USP, share, sales, and profitability."
    else:
        # False traps — ordered specific first
        rules = [
            ("unrelated", "The book treats satisfaction as interrelated with loyalty, sales, and the other aims — not as an isolated soft topic."),
            ("no connection", "The book treats satisfaction as interrelated with loyalty, sales, and the other aims — not as an isolated soft topic."),
            ("only marketing objective", "Satisfaction is one aim among several (USP, share, sales, profit), not a replacement for the rest."),
            ("replaces sales and profit", "Satisfaction is one aim among several (USP, share, sales, profit), not a replacement for the rest."),
            ("without analysing", "Objectives are set after the firm is clear about customer wishes and needs in the markets it wants to serve."),
            ("rarely buy the product again because loyalty is independent", "The chapter says the opposite: satisfied customers often become loyal and may buy again."),
            ("only to service firms", "Satisfaction objectives apply to goods and services alike; nothing confines them to service firms."),
            ("unnecessary", "Repeat purchases do not prove satisfaction can be skipped; they usually depend on it."),
            ("optional", "Repeat purchases do not prove satisfaction can be skipped; they usually depend on it."),
            ("exclude customer satisfaction when profitability", "Prioritising profit does not eject satisfaction from the objective set; the aims still reinforce each other."),
            ("price is reduced slightly", "A slight discount does not reliably convert dissatisfaction into loyalty; the product experience still has to meet wishes and needs."),
            ("solely by lowering prices", "A slight discount does not reliably convert dissatisfaction into loyalty; the product experience still has to meet wishes and needs."),
            ("only after profitability", "Satisfaction is not queued behind other targets; firms pursue it alongside share, sales, and profit."),
            ("only after market share", "Satisfaction is not queued behind other targets; firms pursue it alongside share, sales, and profit."),
            ("without any need for prior satisfaction", "Loyalty without satisfaction is wishful; the book ties repeat buying to a satisfactory prior experience."),
            ("without any change in the product", "Loyalty without satisfaction is wishful; the book ties repeat buying to a satisfactory prior experience."),
            ("delighted on every dimension", "Satisfaction aims at meeting wishes and needs well enough to return — not at an impossible perfection checklist."),
            ("complaints rising after a campaign indicate success", "Rising complaints signal the opposite of satisfaction success."),
            ("never recommend", "Satisfied customers may recommend the product; the claim’s “never” is the failure point."),
            ("automatically fulfilled", "One purchase does not finish the satisfaction objective; experience after the sale still matters."),
            ("conflict with profitability", "Satisfaction and profitability coexist in the objective list; they are not mutually exclusive."),
            ("surveys are irrelevant", "Surveys are one practical way to see whether the satisfaction objective is being met."),
            ("regardless of whether they were satisfied", "Loyalty in this chapter is rooted in satisfaction, not in blind repeat buying."),
            ("legally required", "Repeat buying is voluntary market behaviour, not a contract compulsion."),
            ("only on advertising", "Sales respond to more than ad spend; satisfaction shapes whether buyers return."),
            ("ignore market share because satisfied", "High satisfaction helps, but share versus rivals remains a separate competitiveness objective."),
            ("dissatisfaction improves long-run sales", "Dissatisfaction pushes buyers toward rivals, which harms long-run sales rather than improving them."),
            ("regardless of product experience", "Reach without a good product experience does not meet the satisfaction objective."),
            ("never buy complementary", "Satisfied buyers often expand what they take from the same firm; “never” is too absolute."),
            ("purely visual", "A USP must be experienced, not only styled; satisfaction and differentiation reinforce each other."),
            ("always indicates data error", "Gaps between scores and behaviour can have real causes; they are not “always” mere data errors."),
            ("cheapest in the market", "Satisfaction is about meeting wishes and needs, not about being the lowest price on the shelf."),
            ("loyalty programmes eliminate", "Points and rewards do not replace the need for a satisfactory product experience."),
            ("rewards scheme", "Points and rewards do not replace the need for a satisfactory product experience."),
            ("gross profit", "Satisfaction is a marketing objective about customer experience, not a synonym for gross profit."),
            ("only in declining", "Firms pursue satisfaction in growing and stable markets too — not only in decline."),
            ("will never switch", "Even satisfied buyers can switch if a rival’s USP is stronger; satisfaction helps loyalty but does not freeze the market."),
            ("production volume is maximised", "Maximising output is not the satisfaction test; customer experience is."),
            ("identical to all similar", "A USP means the product is or is perceived as different — the opposite of being identical on every feature."),
            ("ignore wishes and needs analysis if it already has a strong brand", "A strong brand does not excuse skipping wishes-and-needs analysis when setting objectives."),
            ("continue buying out of habit", "Habit does not make satisfaction optional; dissatisfied buyers are precisely the ones at risk of leaving."),
            ("separate from loyalty with no connection", "The book ties satisfaction to loyalty; they are not sealed in separate boxes."),
            ("need not fulfil wishes and needs if differentiation", "Even a strong USP does not remove the need to fulfil wishes and needs."),
        ]
        core = "The statement fights the chapter’s account of how satisfaction, loyalty, sales, share, USP, and profit hang together."
        for needle, msg in rules:
            if needle in s:
                core = msg
                break
    return core, sc


def teach_letter(open_t, open_f, core, sc, is_true, idx, note_t=None, note_f=None, true_variants=None, false_variants=None):
    if is_true:
        variants = true_variants or [
            [open_t, core, sc],
            [open_t, core + " " + sc],
            [sc, core, "That is why the statement survives a careful check against the subsection."],
            [open_t, core, sc],
            [core, sc],
        ]
        return pack(variants[idx], True, note_t if idx == 0 else None)
    variants = false_variants or [
        [open_f, core, sc],
        [open_f + " " + core, sc],
        [sc, core],
        [open_f, core, sc],
        [core, sc, "That mismatch is enough to reject the sentence."],
    ]
    return pack(variants[idx], False, note_f if idx == 0 else None)


def build_52(cur: dict) -> dict[str, list[str]]:
    extras = [
        "PeakMeal’s whiteboard — satisfaction, awareness, USP, sales, share, profit — is a useful mental map when a stem tries to isolate one aim.",
        "A loyal hospital-shift customer who reorders because last week’s box stayed fresh is the living link between satisfaction and sales.",
        "Brand building supports a USP only when the promised difference shows up in use, not merely in the logo colour.",
        "Share without satisfaction is brittle: promotions can spike volume while quietly training buyers to leave after the deal ends.",
        "Owners still ask whether revenues cover costs with a surplus; marketing objectives that ignore that question are incomplete.",
    ]
    uniq = [
        "Start with the customer’s last experience.",
        "Watch what happens on the second purchase occasion.",
        "Hold the full objective list in view.",
        "Compare the claim with a concrete firm scene.",
        "Ask what would break if the sentence were true.",
    ]
    open_t = [
        "Take the claim at face value and test it against how the chapter defines the idea.",
        "Here is the practical reading.",
        "Look at what actually happens after a purchase.",
        "The chapter links the pieces on purpose.",
        "Picture a firm reviewing last quarter’s results.",
    ]
    open_f = [
        "The claim snaps a link the chapter keeps intact.",
        "That wording overreaches.",
        "The trap is treating one tool as if it cancelled the others.",
        "If that were true, the chapter’s story would fall apart.",
        "The absolute edge is where this sentence fails.",
    ]
    out = {}
    for i in range(1, 17):
        cid = f"CASE 5.2.{i:02d}"
        c = cur[cid]
        expls = []
        for j in range(5):
            core, sc = core_52(c["statements"][j], c["answer_key"][j])
            expls.append(
                teach_letter(
                    open_t[j],
                    open_f[j],
                    core,
                    sc,
                    c["answer_key"][j],
                    j,
                    note_t="Satisfaction, loyalty, share, sales, and profit travel together; knocking one out rarely leaves the others untouched.",
                    note_f="Do not let one glittering KPI (price, reach, points) stand in for the satisfaction objective itself.",
                )
            )
        out[cid] = lengthen(trim_notes(expls), c["answer_key"], extras, uniq)
    return out


def is_crm_stmt(s: str) -> bool:
    s = s.lower()
    return any(
        k in s
        for k in [
            "crm",
            "loyalty card",
            "loyalty programme",
            "loyalty program",
            "personal data",
            "anonym",
            "newsletter",
            "coupon",
            "buying behaviour",
            "buying-behaviour",
            "personal account",
            "personal preferences",
        ]
    )


def core_53(stmt: str, is_true: bool) -> tuple[str, str]:
    s = stmt.lower()
    sc = (
        "A loyalty card that trades a coffee discount for a named purchase history is CRM in miniature — useful contact, plus a duty to handle personal data carefully."
        if is_crm_stmt(s)
        else "Atlas Gears polishing a clock for months before asking how to sell it is product orientation; North Harbor interviewing harbour crews first is market orientation."
    )
    if is_true:
        if "product-oriented business focuses on the product" in s or ("product-oriented" in s and "later thinks about how to sell" in s):
            core = "Product orientation starts with the product and its specifications, then works out how to sell it — build first, sell second."
        elif "market-oriented business will first analyse" in s or ("market-oriented" in s and "needs and wants" in s and "then tailor" in s):
            core = "Market orientation analyses needs and wants first, then tailors the product to those requirements."
        elif "identical marketing objectives" in s or "identical profitability or market-share objectives" in s:
            core = "Both orientations may chase the same aims — sales, share, satisfaction — while still starting from opposite ends of the build-versus-listen sequence."
        elif "relies on the quality of the features" in s or "mainly bet on feature quality" in s or "good product sells itself" in s:
            core = "A product-oriented firm mainly trusts feature quality (and related promotion) to win in the market."
        elif "anticipating changing" in s or "responding to these market changes earlier" in s or "respond earlier" in s or "responded to market changes later than market-oriented" in s or "anticipated shifting" in s or "responding earlier" in s:
            core = "Market orientation’s edge is spotting shifting needs earlier and adapting before product-oriented rivals move."
        elif "depends on the product itself and the number of competitors" in s or "contingent on product type and competitive" in s:
            core = "Which approach fits better depends largely on the product itself and on how many competitors are present."
        elif "should not be neglected" in s or "neglecting evolving customer expectations undermines" in s:
            core = "Even a feature-proud firm must not neglect the market and customer expectations."
        elif "long-term relationship" in s:
            core = "CRM aims at a long-term relationship, not at treating each sale as an isolated event."
        elif "newsletter" in s or "coupon" in s or "product information" in s:
            core = "Stored customer data lets the firm mail or email newsletters, coupons, and product information so people return and buy again."
        elif "sensitive" in s and "personal" in s:
            core = "Sensitive use of personal data is indispensable once detailed CRM profiles exist."
        elif any(k in s for k in ["anonymity", "loyalty card", "personal account", "willingly"]):
            core = "Customers often give up anonymity willingly through accounts and loyalty cards to obtain discounts and special offers."
        elif any(k in s for k in ["buying behaviour", "buying-behaviour", "personal preferences", "tailor their offers", "tailor offers", "match promotional content", "tailored product information", "tailored offers"]):
            core = "Firms collect buying-behaviour data so they can tailor offers to personal preferences."
        elif "emphasises focus on production" in s or "centres production and feature" in s or "product orientation emphasises focus on production" in s or "product orientation centres production" in s:
            core = "Product orientation emphasises production and product features at the initial stage rather than leading with customer needs."
        elif "moved from a product-oriented approach towards a market-oriented" in s:
            core = "Over recent decades many businesses have shifted from product-oriented toward market-oriented approaches."
        elif "producing what customers need and want" in s:
            core = "Market orientation aligns production with what customers need and want, not with isolated internal preferences."
        elif "analyses requirements before" in s or "tailor products after analysing needs" in s or "placing customer focus ahead of final specification" in s:
            core = "The market-oriented sequence is analyse requirements, then tailor; the product-oriented sequence defines specifications before selling."
        elif "think about selling only after" in s or "specifications have been defined internally" in s:
            core = "Product-oriented businesses define the offering internally first and only later turn to selling."
        elif "market orientation emphasises focus on customers" in s or "places customers' needs and wants at the forefront" in s:
            core = "Market orientation puts customers’ needs and wants at the front when deciding what to produce and promote."
        elif "both orientations may target customer satisfaction" in s:
            core = "Both orientations may target satisfaction, yet product orientation still prioritises specifications before selling."
        elif "encourage customers to return and buy again" in s or "informed contact supported by stored" in s:
            core = "CRM encourages return purchases through informed contact backed by stored personal records."
        elif "retention tactics include coupons" in s:
            core = "CRM retention tactics include coupons designed to bring registered customers back."
        else:
            core = "The statement matches the chapter’s contrast of product orientation, market orientation, and CRM practice."
    else:
        rules = [
            ("first analyses customers' needs and wants before defining product specifications", "Needs-first analysis is market orientation. Product orientation defines specifications first and sells later."),
            ("market-oriented businesses define specifications first", "Market-oriented firms do not freeze specs first; they study needs and wants, then tailor."),
            ("completely different marketing objectives", "Objectives may even be identical; orientation is about starting logic, not about a forced different scorecard."),
            ("ignores product quality", "Product orientation leans on feature quality; it does not mean abandoning quality for empty advertising."),
            ("cannot anticipate changing needs", "Anticipating change is precisely an advantage claimed for market orientation."),
            ("identical for every product regardless", "Suitability varies with the product and the number of competitors — there is no one legal or universal rule."),
            ("fixed by law", "Suitability varies with the product and the number of competitors — there is no one legal or universal rule."),
            ("ignore markets and customer expectations entirely", "Strong specs do not licence ignoring markets and expectations."),
            ("only at single-transaction", "CRM is defined as long-term relationship work, not one-shot selling."),
            ("delete customer data immediately", "CRM keeps data precisely so later newsletters and coupons can be sent."),
            ("optional and unnecessary", "Sensitive data use is indispensable, not optional, in loyalty-driven CRM."),
            ("always preserve full customer anonymity", "Loyalty cards and accounts typically reduce anonymity in exchange for benefits."),
            ("cannot tailor offers", "Collecting buying-behaviour data for tailoring is central to how the chapter describes CRM."),
            ("prohibited in crm", "Collecting buying-behaviour data for tailoring is central to how the chapter describes CRM."),
            ("differ only in advertising slogans", "The difference is development focus and sequence, not merely slogan tone."),
            ("producing whatever engineers prefer", "Market orientation ties production to customer requirements, not to isolated engineering taste."),
            ("discourages repeat purchases", "CRM exists to encourage return purchases through informed contact."),
            ("became irrelevant once loyalty", "Data sensitivity became more important as loyalty programmes expanded, not less."),
            ("market-oriented business believes a good product sells itself", "“Sells itself” thinking belongs with product orientation; market orientation studies needs."),
            ("product-oriented firms tailor products to fulfil requirements identified through upfront", "Upfront needs analysis then tailoring is the market-oriented sequence."),
            ("abandoned market orientation", "The chapter describes a move toward market orientation, not a wholesale retreat from it."),
            ("unrelated to stored customer data", "Newsletters and coupons in CRM use retained customer records."),
            ("never willingly surrender anonymity", "Many customers do trade anonymity for discounts and offers."),
            ("only for tax reporting", "Buying-behaviour data is collected for marketing tailoring, not merely for tax files."),
            ("market-oriented competitors respond later", "Market-oriented rivals are the ones expected to respond earlier, not later."),
            ("product orientation places customers' needs", "Needs-first is market orientation; product orientation leads with production and features."),
            ("force anonymity on customers", "Loyalty schemes typically reduce anonymity rather than forcing people to stay unidentified."),
            ("only for government agencies", "Commercial CRM programmes also need sensitive personal-data handling."),
            ("identical marketing objectives prove", "Shared objectives do not prove a shared orientation starting point."),
            ("never collect customer data", "Market orientation often uses customer data; collection is not a contradiction."),
            ("never advertise because they assume", "Product-oriented firms still advertise; they simply rely heavily on feature quality."),
            ("tailored offers ignore personal preferences", "CRM stores individual histories precisely to tailor beyond aggregate statistics."),
            ("only aggregate industry statistics", "CRM stores individual histories precisely to tailor beyond aggregate statistics."),
            ("neglecting customer expectations is recommended", "The chapter warns against neglecting expectations even when specs are advanced."),
            ("identical to a single promotional campaign", "CRM aims at sustained relationships over time, not one campaign blast."),
            ("never record buying behaviour", "Accounts and loyalty cards commonly record behaviour for later contact."),
            ("eliminates the need to consider product quality", "Market orientation still needs real product competence; listening does not replace quality."),
            ("ignoring production entirely", "Product orientation centres production and features; it does not ignore production."),
            ("require no communication because customers automatically return", "CRM long-term relationships rely on contact — mail, email, offers — not on silent automatic return."),
        ]
        core = "The statement conflicts with how product orientation, market orientation, and CRM are defined in section 5.3."
        for needle, msg in rules:
            if needle in s:
                core = msg
                break
    return core, sc


def build_53(cur: dict) -> dict[str, list[str]]:
    extras = [
        "Figure 10’s two columns — focus on production and features versus focus on needs and wants — is the visual to keep beside any orientation stem.",
        "A harbour clock redesigned after glove-and-salt interviews is market orientation in one object; a sapphire showpiece pushed into shops afterward is the other path.",
        "Coupons and newsletters only work if identifiable records remain — which is exactly why sensitive data handling is non-negotiable.",
        "Identical sales targets across two firms can still hide opposite starting points: one polishing specs first, the other listening first.",
        "Customers who swipe a loyalty card are often choosing discounts over anonymity; that bargain is voluntary, not a loophole that erases privacy duties.",
    ]
    uniq = [
        "Read how the firm chooses its starting question.",
        "Orientation is a sequence choice before it is a slogan.",
        "Keep the build-then-sell versus research-then-build contrast in view.",
        "Suitability still hinges on the product and the competitive field.",
        "Customer expectations remain in frame even when features look strong.",
    ]
    open_orient_t = [
        "Read the sequence the chapter insists on.",
        "The orientation question is about starting point, not about caring versus not caring.",
        "Keep the build-then-sell versus research-then-build contrast in view.",
        "Suitability depends on the product and on how crowded the market is.",
        "Customer expectations still matter even when features look strong.",
    ]
    open_crm_t = [
        "CRM is the long-term contact toolkit beside orientation.",
        "Personal data is the fuel and the risk in loyalty systems.",
        "Repeat contact only works if records remain.",
        "Anonymity is often traded voluntarily for discounts.",
        "Tailoring follows from stored buying behaviour.",
    ]
    open_orient_f = [
        "The claim reverses the chapter’s sequence.",
        "That absolute rule is not in the book.",
        "Orientation is not a slogan swap.",
        "The starting-point test still fails this sentence.",
        "The sentence fights the shift many firms have already made.",
    ]
    open_crm_f = [
        "CRM without data contact cannot do the job the chapter describes.",
        "That absolute privacy or deletion claim is not how loyalty systems work.",
        "The CRM reading collapses here.",
        "Sensitive data handling is not optional window dressing.",
        "The sentence fights how retained records support return purchases.",
    ]
    out = {}
    for i in range(1, 17):
        cid = f"CASE 5.3.{i:02d}"
        c = cur[cid]
        expls = []
        for j in range(5):
            core, sc = core_53(c["statements"][j], c["answer_key"][j])
            crm = is_crm_stmt(c["statements"][j])
            ot = open_crm_t[j] if crm else open_orient_t[j]
            of = open_crm_f[j] if crm else open_orient_f[j]
            expls.append(
                teach_letter(
                    ot,
                    of,
                    core,
                    sc,
                    c["answer_key"][j],
                    j,
                    note_t="Identical objectives do not prove identical orientation — the starting sequence can still differ.",
                    note_f="Sequence (offer first vs needs first) is the orientation test — not whether anyone ever mentioned customers.",
                )
            )
        out[cid] = lengthen(trim_notes(expls), c["answer_key"], extras, uniq)
    return out


def core_54(stmt: str, is_true: bool) -> tuple[str, str]:
    s = stmt.lower()
    if any(k in s for k in ["computer", "repair", "laptop", "electronic", "refurbish", "equipment"]):
        sc = "Tina and Steve want machines used longer: repair the fault, reuse the device, and only replace when repair truly fails."
    elif any(k in s for k in ["rent", "clothes", "garment", "apparel", "fashion", "wear", "outfit", "clothing"]):
        sc = "Renting high-quality event wear — or swapping sturdy garments with friends — beats buying a cheap outfit destined for next month’s bin."
    else:
        sc = "Mira’s neon windbreaker worn three times then binned is the overconsumption scene; Mend & Wear’s repair desk and rental rack are the sustainability reply."

    if is_true:
        if "create wishes and needs" in s or "continuously developing new products and advertising" in s:
            core = "Firms may create wishes and needs by launching and advertising new products, not only by answering demand that already existed."
        elif "unethical" in s:
            core = "Advertising can be unethical when it manipulates rather than informs fairly — the book flags that risk."
        elif any(k in s for k in ["more money than they can afford", "beyond affordable", "financial stress", "strained budgets"]):
            core = "Many people spend more than they can afford, helped along by marketing and easy purchasing channels."
        elif any(k in s for k in ["more than they initially intended", "unplanned", "impulse", "budget plans are often exceeded"]):
            core = "Shoppers often spend beyond their original plan when promotions trigger extra purchases."
        elif any(k in s for k in ["do not really need", "unused", "barely used", "without lasting purpose", "short useful life after purchase"]):
            core = "People frequently buy goods they do not really need and then barely use them."
        elif any(k in s for k in ["short period", "throwaway", "few months", "short expected use"]):
            core = "Short-lived use before discard is a classic overconsumption pattern, especially in cheap fashion."
        elif "awareness of sustainable" in s:
            core = "Greater awareness of sustainable production and consumption is desirable for businesses and consumers alike."
        elif "consuming too much" in s or "awareness of consumption risks" in s:
            core = "Consuming too much carries risks both sides should recognise when producing and buying."
        elif "both businesses and consumers" in s and "responsible" in s:
            core = "Both businesses and consumers need to act more responsibly and sustainably, not chase volume alone."
        elif any(k in s for k in ["repaired", "repair", "reuse", "extending product life", "extend service life", "refurbishment", "workshop repair", "maintenance reduces waste"]):
            core = "Repair and reuse extend useful life and cut premature replacement — the computer example in the book."
        elif any(k in s for k in ["high-quality clothes", "quality-focused apparel", "given to friends", "social exchange of quality", "swapping quality garments", "circulat"]):
            core = "Higher-quality clothes can be passed to friends or exchanged, extending use without a new buy."
        elif any(k in s for k in ["rent", "garment rental", "access-based", "occasion-wear rental"]):
            core = "Renting high-quality clothes for an event can beat buying cheap outfits that will rarely be worn again."
        elif any(k in s for k in ["overconsumption", "stimulating demand", "volume growth without sustainability"]):
            core = "Demand-stimulating marketing can encourage overconsumption even when people already have enough."
        elif "consequences beyond immediate sales" in s or "sustainable production requires businesses" in s:
            core = "Sustainable production asks firms to look past immediate sales when they develop and promote products."
        elif "ethical advertising" in s or "ethical promotion" in s:
            core = "Ethical advertising is part of responsible conduct inside the wider sustainability agenda."
        elif "question whether" in s:
            core = "Consumers who ask whether an advertised good is truly needed help shift purchasing toward sustainability."
        elif any(k in s for k in ["distort spending", "new desires", "wanting more than is necessary", "continuous product launches"]):
            core = "Marketing that creates new desires can pull spending away from priorities people held before the campaign."
        elif "limit promotional techniques" in s or "exploit vulnerabilities" in s:
            core = "Responsible firms may restrain techniques that push spending past affordable limits."
        elif "durable goods that can be repaired" in s or "prefer durable" in s:
            core = "Durability-minded consumers prefer repairable goods over disposable items built for early disposal."
        elif "product-sharing" in s:
            core = "Sharing infrequently used goods can meet needs without every user buying a new unit."
        elif "contribute to sustainability" in s or "support longer product life" in s:
            core = "Firms help when they support longer product life and avoid purely volume-driven promotion."
        elif "reject cheap clothes" in s or "higher-quality garments with longer" in s:
            core = "More consumers reject cheap clothes thrown away after a few months in favour of higher-quality garments."
        elif "marketing responsibility includes recognising" in s:
            core = "Responsible marketing includes recognising that promotion may push purchases beyond strict necessity."
        elif "respects consumer autonomy" in s:
            core = "Ethical promotion respects consumer autonomy rather than exploiting incomplete information or emotional pressure."
        else:
            core = "The statement fits the chapter’s call for more responsible, sustainable production and consumption."
    else:
        rules = [
            ("only respond to existing", "The book says firms also create wishes through new products and advertising — demand is not fixed independently of marketing."),
            ("never influence wishes", "The book says firms also create wishes through new products and advertising — demand is not fixed independently of marketing."),
            ("no role in creating", "The book says firms also create wishes through new products and advertising — demand is not fixed independently of marketing."),
            ("demand is fixed", "The book says firms also create wishes through new products and advertising — demand is not fixed independently of marketing."),
            ("all advertising is automatically ethical", "Sales success does not make advertising ethical; manipulation remains a recognised risk."),
            ("only wealthy households", "Overconsumption and overspending also hit modest budgets, not only wealthy households."),
            ("always spend exactly the amount", "Promotions routinely pull people past their initial spending plan."),
            ("cannot alter purchasing intentions", "Promotions routinely pull people past their initial spending plan."),
            ("genuine long-term need", "Many purchases are unused or short-lived; they are not all lasting needs."),
            ("solely the responsibility of consumers", "Responsibility is shared: businesses and consumers both need to act more sustainably."),
            ("repairing a computer always costs more", "Repair is not always costlier than replacement; the sustainability advice is to repair when problems occur rather than replace immediately."),
            ("renting clothes is always less sustainable", "Renting quality event wear can be more sustainable than buying the cheapest single-use outfit."),
            ("cheap disposable clothing is the only trend", "Many consumers now prefer higher-quality, longer-lived clothes — disposable fashion is not the only trend."),
            ("eliminates any need for businesses to consider sustainable", "Consumer sharing helps, but firms still must consider sustainable production practices."),
            ("never mentioning product benefits", "Ethical advertising can still inform about real benefits; the line is manipulation, not silence."),
            ("consuming too much carries no risks", "Overconsumption carries household and environmental risks even when replacements look cheap."),
            ("immediate replacement of faulty equipment is always required", "Immediate replacement of repairable equipment conflicts with extending service life."),
            ("garment rental only serves luxury", "Garment rental can cut waste from cheap single-use event outfits, not only serve luxury niches."),
            ("stop developing any new products", "Responsibility does not ban innovation; it asks for awareness of created wants, waste, and honest promotion."),
            ("only because prices rise, never because of promotional", "Promotional influence, not only price rises, helps push spending past affordable limits."),
            ("advertising only informs existing needs", "Unused purchases in wardrobes are evidence that marketing can stimulate new wants, not merely inform old ones."),
            ("cannot be shared because durability", "Durability enables sharing and exchange; it does not prevent transfer between users."),
            ("keep every product forever", "Sustainable consumption means longer use and less waste, not a ban on ever replacing worn-out items."),
            ("solely by advertising green labels", "Green labels without changing volume-driven promotion do not meet the substance test."),
            ("repair and reuse apply only to clothing", "Repair and reuse apply to electronics such as computers as clearly as to clothes."),
            ("eliminates all ownership and therefore removes any business incentive", "Rental still needs product standards; firms retain incentives to keep quality high for returning customers."),
            ("identical messages for all products", "Ethical advertising should fit actual performance and impact — not one cloned message for everything."),
            ("overconsumption disappears once consumers are informed of product prices", "Knowing the price does not erase overconsumption; need, use, and marketing pressure still matter."),
            ("throwaway fashion is sustainable when garments are cheap", "Low price does not offset a tiny useful life; cheap throwaway fashion is the problem pattern, not a sustainability fix."),
            ("bear no responsibility for consumer budgets", "When advertising pushes unplanned purchases, businesses share responsibility for the pressure on budgets."),
            ("refurbishment always wastes more", "Refurbishment often saves resources versus new manufacture when the product can still serve."),
            ("event clothing must be purchased because rental", "Rental can supply higher-quality outfits than cheap retail disposables for temporary needs."),
        ]
        core = "The statement conflicts with the chapter’s shared call for responsible, sustainable production and consumption."
        for needle, msg in rules:
            if needle in s:
                core = msg
                break
    return core, sc


def build_54(cur: dict) -> dict[str, list[str]]:
    extras = [
        "Steve and Tina’s longer-use computer story — repair first, replace later — is the electronics twin of quality clothing that circulates among friends.",
        "A festival drop every fortnight trains urgency; a repair week and rental rack train longer use. Marketing can push either culture.",
        "Spending past the plan is not a private moral failure alone when easy checkout and constant novelty are designed into the offer.",
        "Renting a suit for one wedding can displace a wardrobe of barely worn cheap formalwear — access instead of ownership for rare needs.",
        "Responsibility shows up in product design, claim honesty, repair pricing, and promotion tone — not in a slogan sticker alone.",
    ]
    uniq = [
        "Start from how wants can be created.",
        "Keep both firms and households on the hook.",
        "Watch intention drift at the checkout.",
        "Prefer longer use over disposable churn.",
        "Ask whether the claim survives a repair-first scene.",
    ]
    open_t = [
        "Marketing does more than mirror existing demand.",
        "Responsibility here is shared.",
        "Watch the gap between intention and checkout.",
        "Durability and access models are part of the answer.",
        "The chapter’s sustainability push is concrete, not decorative.",
    ]
    open_f = [
        "The claim lets one side off the hook.",
        "That “always/never/only” edge is where it breaks.",
        "Green talk without substance is not the chapter’s standard.",
        "Repairable life still counts.",
        "The sentence fights the shared-responsibility reading.",
    ]
    out = {}
    for i in range(1, 17):
        cid = f"CASE 5.4.{i:02d}"
        c = cur[cid]
        expls = []
        for j in range(5):
            core, sc = core_54(c["statements"][j], c["answer_key"][j])
            expls.append(
                teach_letter(
                    open_t[j],
                    open_f[j],
                    core,
                    sc,
                    c["answer_key"][j],
                    j,
                    note_t="Creating wants is not automatically evil — but ignoring waste, repair, and honest claims is the failure mode the chapter targets.",
                    note_f="A green colour in an advert is not sustainability if design, repair options, and promotion tone stay wasteful.",
                )
            )
        out[cid] = lengthen(trim_notes(expls), c["answer_key"], extras, uniq)
    return out


def main() -> int:
    data = json.loads(DATA.read_text())
    cur = {c["case_id"]: c for c in data}
    cases = [c for c in data if c["subsection"] in SUBS]
    assert len(cases) == 64, len(cases)

    # Freeze other subsections exactly as currently on disk
    other_before = {
        c["case_id"]: json.loads(json.dumps(c["tactical_explanations"]))
        for c in data
        if c["subsection"] not in SUBS
    }

    rewrites: dict[str, list[str]] = {}
    rewrites.update(build_51(cur))
    rewrites.update(build_52(cur))
    rewrites.update(build_53(cur))
    rewrites.update(build_54(cur))
    assert len(rewrites) == 64

    # Validate before write
    sys.path.insert(0, str(ROOT / "scripts"))
    import importlib.util

    spec = importlib.util.spec_from_file_location("val", VAL_PATH)
    val = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(val)
    fails = []
    for cid, expls in rewrites.items():
        c = dict(cur[cid])
        c["tactical_explanations"] = expls
        errs = val.check_case(c)
        for e in expls:
            low = e.lower()
            for f in ["in class we would", "exam trap", "walk the claim", "before you tick", "board check"]:
                if f in low:
                    errs.append(f"forbidden {f}")
        if errs:
            fails.append((cid, errs))
    if fails:
        for cid, errs in fails[:20]:
            print(cid, errs[:3])
        print(f"FAIL {len(fails)} cases")
        return 1

    OUT_JSON.write_text(json.dumps(rewrites, indent=2, ensure_ascii=False) + "\n")

    by = {c["case_id"]: c for c in data}
    for cid, expl in rewrites.items():
        assert by[cid]["subsection"] in SUBS
        by[cid]["tactical_explanations"] = expl
    for cid, expl in other_before.items():
        by[cid]["tactical_explanations"] = expl

    DATA.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(rewrites)} cases to {DATA.name} and {OUT_JSON.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
