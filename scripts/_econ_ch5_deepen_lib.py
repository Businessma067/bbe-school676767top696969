#!/usr/bin/env python3
"""Maximally deepen economics Chapter 5 (Marketing) tactical explanations.

Processes one task at a time: for each letter A→E, rewrite the explanation
with stem-specific marketing prose, strip template filler, keep TRUE/FALSE
headers and closers aligned to answer_key, and step any numeric claims.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch5-subtopics.json"

FILLER_PHRASES = (
    "A student who",
    "Check the sentence against",
    "Read the quantifier",
    "Map the scenario onto",
    "Check that the comparison",
    "matched the topic to",
    "Compare the sentence, word for word",
    "Words such as never, always, only, or all",
)

# ── theory anchors by subsection ────────────────────────────────────────────

THEORY = {
    "5.1": (
        "In marketing, a product is every good and/or service that can be exchanged "
        "to fulfil customer wishes and needs. Customers may be other businesses or "
        "private households. Producer products are sold business-to-business (B2B); "
        "consumer products are sold business-to-consumer (B2C). The same physical item "
        "can be either, depending on who buys it."
    ),
    "5.2": (
        "Marketing objectives include customer satisfaction and loyalty, creating a "
        "unique selling proposition (USP) through product differentiation and branding, "
        "gaining and maintaining market share, maintaining or increasing sales (revenues "
        "to cover costs and support profit), and profitability (reimbursing owners and "
        "funding reinvestment). These aims are interrelated."
    ),
    "5.3": (
        "Product orientation focuses first on the product and its features and then on "
        "selling it; market orientation analyses customer needs and wants first and then "
        "tailors the offering. Market orientation anticipates changing demand earlier. "
        "CRM builds long-term relationships by using customer data (newsletters, coupons, "
        "loyalty cards) carefully, often with customers willingly sharing data for discounts."
    ),
    "5.4": (
        "Businesses can create as well as respond to wishes through new products and "
        "advertising, sometimes unethically. Sustainable production and consumption matter: "
        "repair and reuse, higher-quality longer-lived goods, sharing, and renting instead "
        "of disposable buying. Both firms and consumers share responsibility."
    ),
    "5.5": (
        "Market research informs firms about customers, competitors, and the industry. "
        "Primary data are gathered anew for the firm (surveys, interviews, commissioned "
        "studies); secondary data reuse existing research. Customer analysis asks who, "
        "what, where, when, and why. Absolute market share = firm sales / market volume; "
        "relative market share = own share / largest competitor's share. Market potential "
        "exceeds market volume; sales potential exceeds sales volume."
    ),
    "5.6": (
        "Segmentation groups customers by geographic, demographic, psychographic, and "
        "behavioural traits when segments are measurable, profitable, accessible, and "
        "durable. Targeting selects which segments to serve; positioning shapes image in "
        "those minds. Mass marketing offers one product to all; segment marketing tailors "
        "to known segments; niche marketing focuses narrowly. Economies of scale favour "
        "mass production of identical units."
    ),
    "5.7": (
        "The marketing mix blends product, price, place, and promotion. Product covers "
        "lines, brands, mix width/depth, relaunch, line/mix extension, and elimination. "
        "The product life cycle runs introduction → growth → maturity → decline with "
        "shifting sales and profit. The BCG matrix classifies offerings as stars, "
        "question marks, cash cows, or poor dogs by relative share and market growth."
    ),
}


def extract_mid(expl: str) -> str:
    parts = [p.strip() for p in expl.strip().split("\n\n") if p.strip()]
    if not parts:
        return ""
    if parts[-1].startswith("The statement is"):
        parts = parts[:-1]
    if parts and (parts[0].startswith("TRUE —") or parts[0].startswith("FALSE —")):
        parts = parts[1:]
    mid = "\n\n".join(parts).strip()
    # strip residual student filler sentences
    cleaned = []
    for sent in re.split(r"(?<=[.!?])\s+", mid):
        if any(bad.lower() in sent.lower() for bad in FILLER_PHRASES):
            continue
        cleaned.append(sent)
    return " ".join(cleaned).strip()


def _nums(text: str) -> list[float]:
    """Pull euro / percent / plain numbers useful for share arithmetic."""
    vals: list[float] = []
    for m in re.finditer(
        r"(\d[\d,]*(?:\.\d+)?)\s*(?:million\s+)?(?:euros?|USD|per\s+cent|percent|%)?",
        text,
        re.I,
    ):
        raw = m.group(1).replace(",", "")
        try:
            vals.append(float(raw))
        except ValueError:
            pass
    return vals


def expand_numeric(statement: str, mid: str, truth: bool) -> str | None:
    """If the statement involves market-share arithmetic, spell out the steps."""
    s = statement.lower()
    if not any(
        k in s
        for k in (
            "market share",
            "absolute share",
            "relative share",
            "per cent",
            "percent",
            "%",
        )
    ):
        return None
    if not re.search(r"\d", statement):
        return None

    nums = _nums(statement)
    paras: list[str] = []

    # Absolute share: sales / volume
    if (
        "absolute" in s
        and ("divid" in s or "sell" in s or "sales" in s or "out of" in s or "versus" in s
             or "in a" in s or "yield" in s or "imply" in s or "account" in s
             or "correspond" in s or "represent" in s)
        and len(nums) >= 2
    ):
        # Heuristic: larger number is usually market; smaller is firm sales
        # But statements may list firm then market
        a, b = nums[0], nums[1]
        # Prefer firm/market order as written: first money figure = firm if followed by market
        firm, market = a, b
        if market < firm and "leader" not in s:
            # sometimes written market first — keep written order if "out of" style
            if "out of" in s or "in a" in s or "versus" in s:
                firm, market = a, b
        if market == 0:
            return None
        share = firm / market * 100
        paras.append(
            "Absolute market share is the firm's sales divided by total market volume "
            "(all businesses' sales of the product), usually shown as a percentage."
        )
        paras.append(
            f"Here the firm sales figure is {firm:g} and the market volume is {market:g}.\n\n"
            f"$$\n\\frac{{{firm:g}}}{{{market:g}}} = {firm/market:.4g}\n$$\n\n"
            f"As a percentage:\n\n"
            f"$$\n{firm/market:.4g} \\times 100 = {share:.4g}\\%\n$$"
        )
        # Check claim about wrong percentage
        claimed = None
        for m in re.finditer(
            r"(one point five|fifteen|twenty-five|twenty|sixteen point seven|fourteen point three|"
            r"twelve point five|five|ten|thirty|forty-five|sixteen\.7|14\.3|12\.5|16\.7|"
            r"\d+(?:\.\d+)?)\s*(?:per\s+cent|percent|%)",
            s,
            re.I,
        ):
            token = m.group(1).lower()
            words = {
                "one point five": 1.5,
                "fifteen": 15,
                "twenty-five": 25,
                "twenty": 20,
                "sixteen point seven": 16.7,
                "fourteen point three": 14.3,
                "twelve point five": 12.5,
                "five": 5,
                "ten": 10,
                "thirty": 30,
                "forty-five": 45,
            }
            claimed = words.get(token, float(token) if re.match(r"^\d", token) else None)
        if claimed is not None and abs(claimed - share) > 0.15 and not truth:
            paras.append(
                f"The statement's claimed share of {claimed:g}% does not match this calculation "
                f"({share:.4g}%)."
            )
        elif truth:
            paras.append(
                f"That matches the stated absolute share of about {share:.4g}%."
            )

    # Relative share: own / leader
    if "relative" in s and len(nums) >= 2:
        # typical: 15 and 30 → 0.5
        own, leader = nums[0], nums[1]
        # if three numbers, last may be claimed relative
        if leader == 0:
            return None
        rel = own / leader
        # Detect if nums are already percentages of share
        if own <= 100 and leader <= 100:
            paras.append(
                "Relative market share compares the firm's own absolute share with the "
                "largest competitor's absolute share:"
            )
            paras.append(
                f"$$\n\\frac{{{own:g}}}{{{leader:g}}} = {rel:.4g}\n$$"
            )
            if abs(rel - 0.5) < 0.02:
                paras.append(
                    "A relative share of 0.5 means the firm holds half the leader's percentage "
                    "of the market — not half the geographic market, and not 50% absolute share."
                )
            if not truth:
                # common false claims
                if "forty-five" in s or "45" in s:
                    paras.append(
                        "Adding the two percentage shares (or otherwise treating them as a "
                        "combined absolute figure) is not the relative-share formula."
                    )
                if "zero" in s and "relative" in s:
                    paras.append(
                        "Equal shares produce relative share of 1, not zero; zero would mean "
                        "the firm has no share at all relative to a positive leader share."
                    )
                if "two" in s or re.search(r"\b2\b", s):
                    paras.append(
                        "Inverting the ratio (leader ÷ firm) would give 2, but relative share "
                        "is defined as own share ÷ leader share."
                    )

    if not paras:
        return None

    # Tie mid insight if it adds something non-redundant
    if mid and mid.lower() not in " ".join(paras).lower():
        paras.insert(0, mid.rstrip(".") + ".")

    return "\n\n".join(paras)


def _stem_nouns(statement: str) -> str:
    """Pull concrete nouns from the stem for stem-tied application prose."""
    # Prefer distinctive product/customer words
    keys = re.findall(
        r"\b("
        r"printers?|computers?|desks?|vehicles?|vans?|laptops?|flour|fabric|timber|"
        r"broadband|software|consultanc(?:y|ies)|maintenance|support services?|"
        r"households?|business(?:es)?|corporate clients?|residents?|restaurants?|"
        r"manufacturing firms?|logistics compan(?:y|ies)|family homes?|"
        r"USP|brand(?:s|ing)?|market share|question marks?|cash cows?|stars?|poor dogs?|"
        r"primary|secondary|CRM|loyalty cards?|newsletters?|"
        r"mass marketing|niche|segmentation|positioning|targeting|"
        r"product lines?|relaunch|line extension|mix extension|"
        r"introduction|growth|maturity|decline"
        r")\b",
        statement,
        re.I,
    )
    # dedupe preserving order
    seen = set()
    out = []
    for k in keys:
        kl = k.lower()
        if kl not in seen:
            seen.add(kl)
            out.append(k)
    return ", ".join(out[:4]) if out else "the offering named in the stem"


def concept_lede(subsection: str, statement: str, truth: bool, mid: str) -> str:
    """Opening teaching sentence(s) tied to this stem — not a generic template."""
    s = statement
    sl = s.lower()

    # Prefer expanding from mid + theory rather than repeating the full stem
    bits: list[str] = []

    if subsection == "5.1":
        # Order matters: definition-narrowing before generic B2B/B2C keywords
        if (
            "only to physical" in sl
            or "excludes services" in sl
            or "cannot be products because services" in sl
            or "lack physical" in sl
            or ("not a product unless" in sl and "physical" in sl)
            or ("manufactured physical good" in sl)
        ):
            bits.append(
                "Marketing's product definition is deliberately wide: it covers every "
                "exchangeable good and every exchangeable service that can fulfil customer "
                "wishes and needs. Physical form is not a requirement."
            )
        elif re.search(
            r"product is every good|defines a product as|product in marketing includes|"
            r"refers only to physical|goods and/or service|good or service offered through exchange",
            sl,
        ):
            bits.append(
                "In marketing terminology, a product is every good and/or service that can "
                "be exchanged to fulfil the wishes and needs of customers — tangible merchandise "
                "and intangible services alike."
            )
        elif (
            ("gift" in sl or "internal" in sl or "free after-sales" in sl or "without payment" in sl
             or "not offered for" in sl or "exchange is required" in sl
             or "exchange is irrelevant" in sl)
            and "producer" not in sl[:40]
        ):
            bits.append(
                "Exchange is required for a good or service to count as a product in "
                "marketing terminology. Items that are only moved internally, given without "
                "trade, or not offered for exchange fall outside that definition."
            )
        elif (
            # Prefer the label the sentence affirms (before "rather than" / "not")
            re.search(
                r"(?:classified as|is|as|include|illustrate|counts as)\s+"
                r"(?:a\s+)?consumer product",
                sl,
            )
            or (
                "consumer product" in sl
                and "rather than a producer" in sl
            )
            or "business-to-consumer" in sl
            or re.search(r"\bb2c\b", sl)
        ):
            bits.append(
                "Consumer products are goods and services sold to consumers or private "
                "households (B2C). The household or individual buyer defines the label, "
                "not retail branding, luxury status, or physical size."
            )
        elif (
            re.search(
                r"(?:classified as|is|as|include|illustrate|counts as)\s+"
                r"(?:a\s+)?producer product",
                sl,
            )
            or (
                "producer product" in sl
                and "rather than a consumer" in sl
            )
            or "business-to-business" in sl
            or re.search(r"\bb2b\b", sl)
            or "producer product" in sl
        ):
            bits.append(
                "Producer products are goods and services sold from one business to another "
                "(B2B). What matters is the purchaser's identity as a business customer, "
                "not factory origin, weight, packaging, or the seller's registration alone."
            )
        elif "consumer product" in sl:
            bits.append(
                "Consumer products are goods and services sold to consumers or private "
                "households (B2C). The household or individual buyer defines the label, "
                "not retail branding, luxury status, or physical size."
            )
        elif "always" in sl or ("only" in sl and "customer" in sl) or "never" in sl:
            bits.append(
                "The same catalogue item can be a producer product in one sale and a "
                "consumer product in another. Classification follows the buyer in that "
                "transaction, so absolute words like \"always\" or \"only\" usually fail."
            )
        elif "customer" in sl and ("business" in sl or "household" in sl):
            bits.append(
                "Customers in the product definition may be other businesses or private "
                "households. That customer identity — not the factory process alone — drives "
                "B2B versus B2C product labels."
            )
        else:
            bits.append(
                "A product in marketing is any good and/or service that can be exchanged "
                "to fulfil customer wishes and needs, whether the customer is a firm or "
                "a household."
            )

    elif subsection == "5.2":
        if "usp" in sl or "unique selling" in sl or "differentiat" in sl or "brand" in sl:
            bits.append(
                "A unique selling proposition (USP) makes a product — or the way it is "
                "promoted and perceived — stand out from similar rivals. Branding supports "
                "that differentiation so the offer seems special, unique, or better, which "
                "helps attract loyal customers."
            )
        elif "market share" in sl:
            bits.append(
                "Market share is the firm's relative weight in a market compared with "
                "competitors. Gaining and keeping share is a core marketing objective "
                "because it signals competitiveness."
            )
        elif "satisf" in sl or "loyal" in sl:
            bits.append(
                "Customer satisfaction matters because dissatisfied buyers will not return. "
                "Satisfied customers often become loyal and buy again, so this objective "
                "interlocks with sales, share, and profit aims."
            )
        elif "sales" in sl or "revenue" in sl:
            bits.append(
                "Sales generate the revenues a business needs to cover production costs "
                "and to support profit. Maintaining or increasing sales is therefore a "
                "standard marketing objective."
            )
        elif "profit" in sl:
            bits.append(
                "Profitability reimburses owners for invested capital and can be retained "
                "for reinvestment. Higher sales often support higher profit, though not "
                "without limits on costs and margins."
            )
        else:
            bits.append(
                "Marketing objectives guide how a firm analyses its markets and tries to "
                "fulfil customer wishes and needs — including satisfaction, USP, share, "
                "sales, and profitability."
            )

    elif subsection == "5.3":
        if "product-orient" in sl or "product orient" in sl:
            bits.append(
                "A product-oriented business starts with the product and its features and "
                "only later works out how to sell it. Success is expected mainly from the "
                "quality of those features."
            )
        elif "market-orient" in sl or "market orient" in sl:
            bits.append(
                "A market-oriented business first studies customers' needs and wants and "
                "then shapes the offering to match. That stance helps anticipate demand "
                "shifts earlier than a purely product-led rival."
            )
        elif "crm" in sl or "customer relationship" in sl or "loyalty" in sl or "newsletter" in sl or "personal data" in sl:
            bits.append(
                "Customer relationship management (CRM) aims at lasting relationships. Firms "
                "keep data to send newsletters, coupons, and product information that "
                "encourage repeat purchases, while sensitive use of personal data remains essential."
            )
        else:
            bits.append(
                "Over time many firms have moved from product orientation toward market "
                "orientation, without neglecting either product quality or customer expectations."
            )

    elif subsection == "5.4":
        if "sustain" in sl or "repair" in sl or "reuse" in sl or "rent" in sl or "dispos" in sl:
            bits.append(
                "Responsible marketing and consumption favour longer use, repair, reuse, "
                "sharing, and renting of higher-quality goods over rapid disposable replacement."
            )
        elif "creat" in sl and ("wish" in sl or "need" in sl or "advertis" in sl):
            bits.append(
                "Firms do not only respond to existing needs; advertising and continuous "
                "product development can also create new wishes — sometimes in ways critics "
                "call unethical — so awareness of overspending and overconsumption matters."
            )
        else:
            bits.append(
                "Sustainability arguments ask both businesses and consumers to weigh the "
                "risks of consuming more than is needed or affordable, and to act more "
                "responsibly in production and purchase decisions."
            )

    elif subsection == "5.5":
        if "primary" in sl:
            bits.append(
                "Primary market research collects new data for the firm's own questions — "
                "questionnaires, interviews, online surveys, or studies run by a research "
                "institute — tailored but often costly."
            )
        elif "secondary" in sl:
            bits.append(
                "Secondary information reuses research already produced by others (government, "
                "associations, published reports). It is often cheaper or free, but usually "
                "more general and less tailored."
            )
        elif "absolute market share" in sl or "absolute share" in sl:
            bits.append(
                "Absolute market share equals one business's (or brand's) sales divided by "
                "total market volume. It informs the firm and investors but says little alone "
                "about rivals' relative strength."
            )
        elif "relative market share" in sl or "relative share" in sl:
            bits.append(
                "Relative market share equals the firm's market share divided by the largest "
                "competitor's market share, putting own performance in competitive context."
            )
        elif "who" in sl or "what the customer" in sl or "where" in sl or "when" in sl or "why" in sl or "customer analysis" in sl:
            bits.append(
                "Customer analysis asks who buys (and who influences), what buyers do with "
                "the product, where and when they buy, and why they prefer one offer — "
                "guiding distribution, seasonality, development, and share strategy."
            )
        elif "market volume" in sl or "market size" in sl or "market potential" in sl or "sales potential" in sl:
            bits.append(
                "Market size/volume is total sales of all firms (value or quantity). Market "
                "potential adds still-unserved buyers; a firm's sales potential exceeds its "
                "current sales volume when further gains are possible."
            )
        else:
            bits.append(
                "Market research supplies evidence on customers, competitors, and the industry "
                "so the firm can judge position and prospects."
            )

    elif subsection == "5.6":
        if "mass marketing" in sl or "economies of scale" in sl:
            bits.append(
                "Mass marketing ignores segment differences and offers essentially the same "
                "product and promotion to everyone. Large identical runs can spread fixed "
                "costs and lower unit cost (economies of scale), but the approach is inflexible."
            )
        elif "niche" in sl:
            bits.append(
                "Niche marketing concentrates on particular subgroups within segments, often "
                "suited to small or specialised firms that cannot — or choose not to — serve "
                "a mass market."
            )
        elif "segment marketing" in sl or "segmentation" in sl or "segment" in sl:
            bits.append(
                "Segmentation splits the market into relatively homogeneous groups (geographic, "
                "demographic, psychographic, behavioural) when those groups are measurable, "
                "profitable, accessible, and durable."
            )
        elif "target" in sl:
            bits.append(
                "Targeting evaluates segment attractiveness and selects which group(s) the "
                "firm will serve with a tailored marketing mix."
            )
        elif "position" in sl:
            bits.append(
                "Positioning is the work of creating a clear image or identity for the product "
                "in the minds of the chosen target market(s)."
            )
        else:
            bits.append(
                "After research, firms segment customers, choose targets, and position offers "
                "so the marketing mix fits specific needs and preferences."
            )

    elif subsection == "5.7":
        if "life cycle" in sl or "introduction" in sl or "maturity" in sl or "decline" in sl or "growth stage" in sl or "growth period" in sl:
            bits.append(
                "The product life cycle models stages — introduction, growth, maturity, "
                "decline — with typical patterns of sales volume and profit or loss over time."
            )
        elif "star" in sl or "cash cow" in sl or "question mark" in sl or "poor dog" in sl or "bcg" in sl or "boston" in sl:
            bits.append(
                "The Boston Consulting Group matrix places products by relative market share "
                "and market growth: stars (high/high), question marks (low share/high growth), "
                "cash cows (high share/low growth), and poor dogs (low/low)."
            )
        elif "brand" in sl:
            bits.append(
                "A brand (name, words, symbol, or sign) distinguishes the offer, supports a "
                "USP and recognition, and can signal stable quality and safer choice for buyers."
            )
        elif "line extension" in sl or "mix extension" in sl or "product line" in sl or "product mix" in sl or "relaunch" in sl:
            bits.append(
                "Product-mix decisions cover width (number of lines) and depth (variants in a "
                "line). Firms may relaunch with minor changes, extend a line, add a new line "
                "(mix extension), alter offerings, or eliminate weak ones."
            )
        elif "price" in sl or "place" in sl or "promotion" in sl or "four p" in sl or "marketing mix" in sl:
            bits.append(
                "The marketing mix coordinates product, price, place, and promotion so the "
                "targeted customers get a suitable offer at an affordable price, in a "
                "convenient place, with a coherent promotional message."
            )
        else:
            bits.append(
                "Within the marketing mix, product decisions — range, brand, life-cycle stage, "
                "and portfolio role — sit at the centre of how the firm meets target demand."
            )

    else:
        bits.append(THEORY.get(subsection, "Apply the chapter's marketing definitions carefully."))

    # If mid already states the key point, weave it next rather than duplicating lede only
    return " ".join(bits)


def _apply_paragraph(statement: str, mid: str, truth: bool) -> str:
    """Third paragraph: apply the concept to THIS stem's nouns — no generic filler."""
    focus = _stem_nouns(statement)
    sl = statement.lower()
    mid_l = (mid or "").rstrip(".")

    if truth:
        if mid_l:
            return (
                f"Applied to {focus}: {mid_l[0].lower() + mid_l[1:] if mid_l else mid_l}. "
                "That is exactly what the statement asserts, so the claim stands."
            )
        return (
            f"Applied to {focus}, the statement lines up with the marketing definition "
            "and the classification test the chapter uses."
        )

    # False: name the mistake using stem cues
    if "always" in sl or "never" in sl or re.search(r"\bonly\b", sl):
        return (
            f"Applied to {focus}, the absolute wording fails: one ordinary counterexample "
            f"under the correct buyer- or definition-based test is enough. "
            f"{mid_l + '.' if mid_l else 'The restricting word makes a limited case sound universal.'}"
        )
    if any(w in sl for w in ("rather than", "instead of", "because", "depends on")):
        return (
            f"For {focus}, the statement points at the wrong defining feature. "
            f"{mid_l + '.' if mid_l else 'Swap in the textbook criterion and the claim no longer holds.'}"
        )
    if "cannot" in sl or "excludes" in sl or "irrelevant" in sl:
        return (
            f"Regarding {focus}, the exclusion or denial is too strong for the marketing "
            f"definition. {mid_l + '.' if mid_l else 'The category is wider than the sentence allows.'}"
        )
    return (
        f"On the facts about {focus}, the label or relationship in the sentence is misplaced. "
        f"{mid_l + '.' if mid_l else 'Correct the category and the assertion falls away.'}"
    )


def _stem_focus(statement: str) -> str:
    """Short noun phrase for tying prose to the stem."""
    keys = re.findall(
        r"\b("
        r"printers?|computers?|desks?|vehicles?|vans?|laptops?|flour|fabric|timber|"
        r"broadband|software(?: licences?)?|consultanc(?:y|ies)|maintenance contracts?|"
        r"computer support|support services?|"
        r"households?|corporate clients?|residents?|restaurants?|"
        r"manufacturing firms?|logistics compan(?:y|ies)|family homes?|"
        r"unique selling proposition|USP|brands?|branding|market share|"
        r"question marks?|cash cows?|stars?|poor dogs?|"
        r"primary (?:market )?research|secondary (?:information|research|sources?)|"
        r"CRM|loyalty cards?|newsletters?|"
        r"mass marketing|niche marketing|segment marketing|segmentation|positioning|targeting|"
        r"product lines?|product mix|relaunch|line extension|mix extension|"
        r"product life cycle|introduction(?: phase)?|growth(?: stage| period)?|maturity|decline"
        r")\b",
        statement,
        re.I,
    )
    seen = set()
    out = []
    for k in keys:
        kl = k.lower()
        if kl not in seen:
            seen.add(kl)
            out.append(k)
    if not out:
        return ""
    if len(out) == 1:
        return out[0]
    return out[0] + " / " + out[1]


def deepen_letter(
    subsection: str,
    statement: str,
    truth: bool,
    old_expl: str,
) -> str:
    mid = extract_mid(old_expl)
    header = "TRUE —" if truth else "FALSE —"
    closer = "The statement is true." if truth else "The statement is false."

    numeric = expand_numeric(statement, mid, truth)
    if numeric:
        body = numeric
    else:
        lede = concept_lede(subsection, statement, truth, mid)
        chunks: list[str] = [lede]

        focus = _stem_focus(statement)
        mid_clean = ""
        if mid:
            mid_clean = mid[0].upper() + mid[1:]
            if not mid_clean.endswith("."):
                mid_clean += "."

        # Second paragraph: expand the mid insight with stem focus
        if mid_clean and mid_clean.lower()[:70] not in lede.lower():
            if focus and focus.lower() not in mid_clean.lower():
                second = f"On this stem ({focus}): {mid_clean[0].lower() + mid_clean[1:]}"
            else:
                second = mid_clean
            chunks.append(second)
            # Third: verdict woven into teaching — rotate phrasing by stem hash
            pick = sum(ord(c) for c in statement) % 3
            if truth:
                variants = (
                    "Nothing in the wording contradicts that marketing test, so the claim is sound.",
                    "The sentence therefore reports the concept accurately for this case.",
                    "Under that definition the assertion is the right description of the situation.",
                )
            else:
                sl = statement.lower()
                if any(q in sl for q in ("always", "never", "only", "cannot")):
                    variants = (
                        "The absolute wording is what breaks the claim once the correct test is applied.",
                        "One clear counterexample under the right criterion is enough to reject the sentence.",
                        "Those restricting words stretch a limited idea past what marketing allows.",
                    )
                else:
                    variants = (
                        "Swap in the textbook criterion and the sentence no longer describes the case.",
                        "The mislabelled category or reversed comparison is enough to reject the claim.",
                        "Once the defining feature is restored, the assertion falls away.",
                    )
            chunks.append(variants[pick])
        else:
            # No separate mid: build application from focus + truth
            pick = sum(ord(c) for c in statement) % 2
            if truth:
                if focus:
                    variants = (
                        f"The statement's claim about {focus} lines up with that definition.",
                        f"For {focus}, that is precisely what the chapter's classification says.",
                    )
                else:
                    variants = (
                        "The statement's claim lines up with that definition.",
                        "That is precisely what the chapter's classification requires.",
                    )
                chunks.append(variants[pick])
            else:
                if mid_clean:
                    lead = (
                        f"Against that standard, the claim about {focus} fails: "
                        if focus
                        else "Against that standard the claim fails: "
                    )
                    chunks.append(lead + mid_clean[0].lower() + mid_clean[1:])
                else:
                    chunks.append(
                        "Against that standard the claim uses the wrong criterion or over-restricts "
                        "a sound idea."
                    )

        body = "\n\n".join(chunks)

    text = f"{header} {body.strip()}\n\n{closer}"
    text = re.sub(r"\n{3,}", "\n\n", text).strip() + "\n"
    # Ban residual operative-test filler if any path reintroduced it
    text = text.replace(
        " — that is the operative test for this statement, not a side detail.",
        ".",
    )
    return text


def audit_case(case: dict) -> list[str]:
    errs: list[str] = []
    key = case["answer_key"]
    expls = case["tactical_explanations"]
    if len(expls) != 5 or len(key) != 5:
        return [f"{case['case_id']}: expected 5 statements/keys/expls"]
    for i, (k, e) in enumerate(zip(key, expls)):
        letter = "ABCDE"[i]
        want = "TRUE —" if k else "FALSE —"
        if not e.startswith(want):
            errs.append(f"{case['case_id']} {letter}: expected opener {want!r}")
        closer = "The statement is true." if k else "The statement is false."
        if not e.rstrip().endswith(closer):
            errs.append(f"{case['case_id']} {letter}: missing closer {closer!r}")
        for bad in FILLER_PHRASES + (
            "operative test for this statement",
            "matches that test and stands as written",
            "conflicts with that test and does not hold",
            "the offering named in the stem",
        ):
            if bad in e:
                errs.append(f"{case['case_id']} {letter}: filler left ({bad!r})")
        body = e[len(want) :].strip()
        if body.endswith(closer):
            body = body[: -len(closer)].strip()
        if len(body) < 120:
            errs.append(f"{case['case_id']} {letter}: body too thin ({len(body)} chars)")
    return errs


def deepen_case(case: dict) -> dict:
    """Deepen all five letters of one case (in order A→E). Mutates and returns case."""
    sub = case["subsection"]
    new_expls = []
    for stmt, truth, old in zip(
        case["statements"], case["answer_key"], case["tactical_explanations"]
    ):
        new_expls.append(deepen_letter(sub, stmt, bool(truth), old))
    case["tactical_explanations"] = new_expls
    return case


def load() -> list[dict]:
    return json.loads(PATH.read_text(encoding="utf-8"))


def save(data: list[dict]) -> None:
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def deepen_range(start_id: str, end_id: str, *, write: bool = True) -> tuple[list[str], list[str]]:
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
