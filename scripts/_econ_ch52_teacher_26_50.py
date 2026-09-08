#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 5.2.26–CASE 5.2.50 from scratch (ch6 teacher voice)."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")

REWRITES: dict[str, list[str]] = {
    "CASE 5.2.26": [
        "Biggest advertising spend does not equal a USP. The message and the perceived difference matter; raw media budget alone does not meet the objective.\n\nSo the statement is False.",
        "Differentiation joins sales and profit on the objective list — it does not replace them. Firms still need volume and margins.\n\nSo the statement is False.",
        "A USP does not require a patent. Perceived uniqueness from design, service, or promotion can be valid without an invention filing.\n\nSo the statement is False.",
        "Brand loyalty and USP aims work together. Attracting loyal buyers through uniqueness is complementary, not mutually exclusive.\n\nSo the statement is False.",
        "With a USP, customers may see the product as special, unique, or better than the rest. That customer perception is exactly what the objective seeks.\n\nSo the statement is True.",
    ],
    "CASE 5.2.27": [
        "Businesses build a USP because it helps pull in many loyal customers. Differentiation is a loyalty magnet in the framework.\n\nSo the statement is True.",
        "If customers see the product as the same as rivals, there is no strong USP. Sameness and a strong USP contradict each other by definition.\n\nSo the statement is False.",
        "Differentiation does not stop customers comparing substitutes. They still compare — the USP tries to win that comparison.\n\nSo the statement is False.",
        "Industry awards are nice but not required. A USP can exist without sweeping every quality prize.\n\nSo the statement is False.",
        "Promotion can reshape perceived uniqueness after launch. Messaging and branding keep working on how customers classify the product.\n\nSo the statement is False.",
    ],
    "CASE 5.2.28": [
        "A USP can rest on the product itself — features, service, design — not only on the promotion mix. Limiting it to ads alone is too narrow.\n\nSo the statement is False.",
        "USPs are created to attract more loyal buyers, not to shrink volume on purpose. Targeting fewer buyers is not the primary aim.\n\nSo the statement is False.",
        "Product differentiation is the positioning achieved through a USP: making the offer unlike similar products.\n\nSo the statement is True.",
        "Design features rivals do not emphasise can carry a USP. The hotel’s personalised service design is a classic example.\n\nSo the statement is True.",
        "Promotional messaging shapes how uniqueness is perceived. Ads and stories can make the difference feel real to guests.\n\nSo the statement is True.",
    ],
    "CASE 5.2.29": [
        "Brand identity helps customers see why one product differs from close substitutes. Recognition carries the difference story.\n\nSo the statement is True.",
        "Differentiation and market segmentation are related but not identical. Segmentation picks groups; differentiation positions the offer within or across them.\n\nSo the statement is False.",
        "A credible USP makes similar products look distinct in the buyer’s mind. Perception of difference is the win.\n\nSo the statement is True.",
        "Differentiated products can still compete on price. A USP does not freeze prices or erase all price competition.\n\nSo the statement is False.",
        "Service quality can form part of a USP. Differentiation is not limited to physical specs.\n\nSo the statement is True.",
    ],
    "CASE 5.2.30": [
        "Brand advertising is often how firms pursue a USP objective — building recognition of what makes the offer different.\n\nSo the statement is True.",
        "USP work tries to reduce pure price comparison with undifferentiated rivals. Standing apart softens “same product, lower price” pressure.\n\nSo the statement is True.",
        "Customers can perceive uniqueness even when many functions overlap. Branding and experience fill the gap features leave.\n\nSo the statement is True.",
        "Delivery speed can be the distinguishing USP element. Fast fulfilment is a valid uniqueness claim.\n\nSo the statement is True.",
        "Packaging design contributes to differentiation and can support a USP. Look and unboxing are part of the offer.\n\nSo the statement is True.",
    ],
    "CASE 5.2.31": [
        "Ethical sourcing can be a USP in a crowded bakery category. Values-based difference still counts as differentiation.\n\nSo the statement is True.",
        "When many similar alternatives sit on the shelf, differentiation is how the business stands out.\n\nSo the statement is True.",
        "Clear USPs often travel with brand loyalty programmes. The uniqueness story and the loyalty mechanic reinforce each other.\n\nSo the statement is True.",
        "Durability can be the characteristic a USP emphasises — built to last versus throwaway rivals.\n\nSo the statement is True.",
        "Promotion stressing craftsmanship can build a perceived USP for handmade goods. The story makes the difference felt.\n\nSo the statement is True.",
    ],
    "CASE 5.2.32": [
        "Even with a legal monopoly, brand-building can still matter for trust and recognition. Calling it unnecessary is too absolute.\n\nSo the statement is False.",
        "Differentiation objectives push customers to see the offer as unlike substitutes. That “unlike” perception is the goal.\n\nSo the statement is True.",
        "A strong brand can convince customers the product is better than the rest. Belief and preference follow recognition.\n\nSo the statement is True.",
        "A firm can emphasise both delivery speed and quality. Multiple USP angles can coexist rather than cancel each other.\n\nSo the statement is False.",
        "Creating a USP is listed among recognised marketing objectives in the textbook overview.\n\nSo the statement is True.",
    ],
    "CASE 5.2.33": [
        "Warranty terms can form a valid USP. Guarantees differentiate when rivals offer weaker cover.\n\nSo the statement is True.",
        "Feeling unique can win attention even in a crowded field. Perceived difference still pulls eyes and interest.\n\nSo the statement is True.",
        "Brand-building and USP objectives jointly attract loyal repeat buyers. Recognition plus difference feeds loyalty.\n\nSo the statement is True.",
        "A USP can rest on post-purchase experience — support, reliability in use — not only on pre-purchase claims.\n\nSo the statement is True.",
        "Promotional differentiation shapes perception before the first buy. Messaging sets expectations of uniqueness early.\n\nSo the statement is True.",
    ],
    "CASE 5.2.34": [
        "Differentiation is pursued specifically to attract loyal customers. Calling the two unrelated cuts the main motive for USP work.\n\nSo the statement is False.",
        "Without a USP, similar products compete mainly on price. That pressure is why businesses chase differentiation.\n\nSo the statement is True.",
        "Environmental credentials can be the distinguishing USP factor — craftsmanship guarantee plus green claims, for example.\n\nSo the statement is True.",
        "Different product lines under one corporate brand can each carry their own USP. Line-level uniqueness is normal.\n\nSo the statement is True.",
        "Rivals disagreeing does not void a USP. What matters is whether customers see the product as better or different.\n\nSo the statement is False.",
    ],
    "CASE 5.2.35": [
        "USP creation is not a short-term tactic swapped out for profit each quarter. Differentiation stays on the ongoing objective set.\n\nSo the statement is False.",
        "Support quality can differentiate and attract buyers who value help. Assistance becomes the uniqueness cue.\n\nSo the statement is True.",
        "A USP makes — or seems to make — the product unlike similar offerings. Actual or perceived difference both fit.\n\nSo the statement is True.",
        "Brand investment is a marketing activity that supports USP objectives. Spend on recognition backs uniqueness claims.\n\nSo the statement is True.",
        "One prominent characteristic, promoted consistently, can carry differentiation. Focus beats a scatter of weak claims.\n\nSo the statement is True.",
    ],
    "CASE 5.2.36": [
        "Consistent branding across channels can keep a perceived USP alive. Same story, many touchpoints.\n\nSo the statement is True.",
        "USP and satisfaction interrelate: customers must experience the claimed difference or the USP collapses.\n\nSo the statement is True.",
        "Differentiation strategies often target buyers seeking premium perceived quality. Positioning follows that preference.\n\nSo the statement is True.",
        "USP objectives aim to make the firm’s offer memorable against rivals. Memorability is the competitive point.\n\nSo the statement is True.",
        "Local sourcing can be promoted as a USP. Origin and proximity become the distinguishing story.\n\nSo the statement is True.",
    ],
    "CASE 5.2.37": [
        "A USP pulls loyal customers who identify with the brand’s differentiated identity. Loyalty follows that fit.\n\nSo the statement is True.",
        "Firms pursue differentiation so the product appears special relative to the rest. “Special versus the rest” is the aim.\n\nSo the statement is True.",
        "Promoting innovation can support a USP in technology-heavy categories. Newness becomes the difference cue.\n\nSo the statement is True.",
        "Reputation built over time reinforces the USP. Trust accumulated on past purchases backs uniqueness claims.\n\nSo the statement is True.",
        "A USP can mix a product feature with a distinctive promotional style. Substance and style together.\n\nSo the statement is True.",
    ],
    "CASE 5.2.38": [
        "Differentiation does not require abandoning satisfaction. Both stay on the objective list and support each other.\n\nSo the statement is False.",
        "Differentiation sits alongside satisfaction and market share in the stated marketing objectives.\n\nSo the statement is True.",
        "When products look similar, buyers lean on USP cues to choose. Those cues tip the comparison.\n\nSo the statement is True.",
        "In a saturated market, no differentiation makes loyal customers hard to win. Standing out is how loyalty starts.\n\nSo the statement is True.",
        "Building a brand is a means toward perceived uniqueness — a tool for the USP end, not an unrelated side project.\n\nSo the statement is True.",
    ],
    "CASE 5.2.39": [
        "Customisation options can differentiate an otherwise standard category offer. Choice itself becomes the USP.\n\nSo the statement is True.",
        "Perceived exclusivity supports premium pricing. Differentiation and price positioning can reinforce each other.\n\nSo the statement is True.",
        "USP messaging must match what customers later experience, or loyalty fades. Promise and delivery have to align.\n\nSo the statement is True.",
        "Government verification is not required for a USP to be valid. Customer perception of difference is enough.\n\nSo the statement is False.",
        "Differentiation reduces substitutability in the customer’s view. The offer feels less interchangeable with rivals.\n\nSo the statement is True.",
    ],
    "CASE 5.2.40": [
        "Reliability can be the key characteristic a USP highlights — beans that roast consistently, batches you can trust.\n\nSo the statement is True.",
        "Symbols and logos help communicate differentiated identity. Visual brand marks carry the uniqueness story.\n\nSo the statement is True.",
        "Spend on differentiation supports seeming better than alternatives. That “better than” perception is an explicit aim.\n\nSo the statement is True.",
        "Building a brand is not the same as instantly grabbing maximum share. Brand work and share gains are related but not identical events.\n\nSo the statement is False.",
        "Market share is relative to competitors, not an absolute sales total with no rival reference. Dropping the comparison empties the concept.\n\nSo the statement is False.",
    ],
    "CASE 5.2.41": [
        "A USP created through promotion still counts as differentiation here. Perception shaped by messaging is recognised.\n\nSo the statement is True.",
        "Highest absolute sales does not always mean highest share — it depends how the market is defined. A big seller in a huge market can still hold a modest share.\n\nSo the statement is False.",
        "Differentiation and USP objectives connect to building a loyal following. Uniqueness is meant to attract stickiness.\n\nSo the statement is True.",
        "Market share is a competitiveness indicator. Calling share objectives unrelated to competitiveness misreads the framework.\n\nSo the statement is False.",
        "Gaining and maintaining market share is a marketing objective many businesses pursue explicitly.\n\nSo the statement is True.",
    ],
    "CASE 5.2.42": [
        "Market share shows relative importance versus competitors in the same market. That comparative reading is the point.\n\nSo the statement is True.",
        "Gaining share does not require doubling production costs. Cost paths vary; the claim is too absolute.\n\nSo the statement is False.",
        "In the marketing framework, market share serves as a competitiveness indicator.\n\nSo the statement is True.",
        "Businesses compare their share with competitors’ positions in the same defined market.\n\nSo the statement is True.",
        "Rising share can signal improved relative performance against rivals — even when absolute figures need separate reading.\n\nSo the statement is True.",
    ],
    "CASE 5.2.43": [
        "Market share and satisfaction percentage are different measures. Share is relative sales weight; satisfaction is experience quality.\n\nSo the statement is False.",
        "Share objectives are set with competitors in view. Ignoring rivals empties the meaning of relative share.\n\nSo the statement is False.",
        "During intense rivalry, maintaining share can be an explicit marketing objective for the hotel group and similar firms.\n\nSo the statement is True.",
        "Share is the firm’s portion of total sales in the defined market. That slice definition is standard.\n\nSo the statement is True.",
        "Share can fall while absolute sales rise if the total market grows faster. Declining share does not always mean falling absolute sales.\n\nSo the statement is False.",
    ],
    "CASE 5.2.44": [
        "Losing share can indicate weakened competitiveness against other suppliers. Relative standing has slipped.\n\nSo the statement is True.",
        "When a new competitor enters, campaigns often aim to protect share. Defence is a normal share response.\n\nSo the statement is True.",
        "Share objectives add a relative dimension beside absolute sales aims. Volume and share complement each other.\n\nSo the statement is True.",
        "Share is one marketing objective among several — satisfaction, USP, sales, profit still matter. It is not the only one that counts.\n\nSo the statement is False.",
        "Small absolute sales can still mean a large share in a niche. Niche leadership is share, not raw volume.\n\nSo the statement is True.",
    ],
    "CASE 5.2.45": [
        "How share changes over time is part of assessing competitiveness. Trajectories matter, not only a single snapshot.\n\nSo the statement is True.",
        "Past leadership does not maintain share with zero marketing spend. Rivals keep pressing; defence costs money and effort.\n\nSo the statement is False.",
        "Share is relative — it compares rivals. Calling it absolute importance without comparison strips the concept.\n\nSo the statement is False.",
        "A new entrant does not automatically receive 50% share. Launch share starts from what customers actually buy.\n\nSo the statement is False.",
        "Share objectives do not replace profitability analysis. Both remain on the managerial checklist.\n\nSo the statement is False.",
    ],
    "CASE 5.2.46": [
        "Firms that care about share want to know where they stand versus rivals. Position relative to competitors is the interest.\n\nSo the statement is True.",
        "Relative market importance is what market share measures — not total assets. Assets size the balance sheet, not the market slice.\n\nSo the statement is False.",
        "Gaining share does not always lift profit in the same period. Price cuts or heavy promotion can win share while squeezing margins.\n\nSo the statement is False.",
        "Share needs a defined market boundary. Without that definition, the percentage is meaningless.\n\nSo the statement is False.",
        "Share objectives in this chapter compare firms inside a contested market. A “market with no competitors” is outside that comparative setting, so the claim does not describe how share is used as a competitiveness indicator here.\n\nSo the statement is False.",
    ],
    "CASE 5.2.47": [
        "Loyalty programmes support share maintenance by retaining buyers. Calling share maintenance unrelated to loyalty tools misses that link.\n\nSo the statement is False.",
        "Gaining share often means taking customers from competitors. Relative gains usually come from someone else’s loss.\n\nSo the statement is True.",
        "Share is a relative measure, not just an absolute sales total. The comparison is built in.\n\nSo the statement is True.",
        "Share objectives follow market analysis. Setting them without analysing the market the firm operates in fights the framework.\n\nSo the statement is False.",
        "In a growing market, stable share still means rising absolute sales. The pie expands under a constant slice.\n\nSo the statement is True.",
    ],
    "CASE 5.2.48": [
        "Share and sales volume often move together, not always in opposite directions. The claim of permanent opposition is wrong.\n\nSo the statement is False.",
        "Competitiveness indicators include market share; staff headcount alone does not replace it.\n\nSo the statement is False.",
        "Losing share to a rival suggests satisfaction or differentiation problems — not that satisfaction objectives were exceeded.\n\nSo the statement is False.",
        "Plans may set a minimum share threshold to stay competitive. That floor is a concrete marketing objective.\n\nSo the statement is True.",
        "Share objectives are for commercial firms as well as other organisations — not only government agencies.\n\nSo the statement is False.",
    ],
    "CASE 5.2.49": [
        "Share analysis helps managers read competitive dynamics in their industry. Who is gaining or losing becomes visible.\n\nSo the statement is True.",
        "When rivals gain ground, a firm defending share may raise promotional spend. Defence spending is a normal response.\n\nSo the statement is True.",
        "Relative importance is shown by market share, not by advertising spend. Spend is an input; share is the position outcome.\n\nSo the statement is False.",
        "Share objectives interrelate with satisfaction and differentiation. Happy, differentiated buyers help hold the slice.\n\nSo the statement is True.",
        "Relative importance in the market is exactly what share is designed to indicate.\n\nSo the statement is True.",
    ],
    "CASE 5.2.50": [
        "Equal absolute sales can mean different shares if the markets differ in size. Context of the total matters.\n\nSo the statement is True.",
        "Gaining share does not require the total market to shrink. Share can rise in expanding markets too.\n\nSo the statement is False.",
        "Monthly share tracking is monitoring a competitiveness indicator. That is a standard managerial use.\n\nSo the statement is True.",
        "Share and USP objectives can be pursued together. Differentiation often supports share aims rather than blocking them.\n\nSo the statement is False.",
        "Zero share means the firm is not leading that market, however famous the brand. Leadership requires sales in the defined market.\n\nSo the statement is False.",
    ],
}


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    by_id = {c["case_id"]: c for c in data}
    for cid, expls in REWRITES.items():
        case = by_id[cid]
        assert len(expls) == 5 == len(case["answer_key"]) == len(case["statements"])
        for i, (expl, ans) in enumerate(zip(expls, case["answer_key"])):
            ending = "So the statement is True." if ans else "So the statement is False."
            assert expl.rstrip().endswith(ending), (cid, i, expl[-80:], ending)
            assert "TRUE —" not in expl and "FALSE —" not in expl
            assert "tied to buyer type" not in expl.lower()
            assert "whichever the stem" not in expl.lower()
        case["tactical_explanations"] = expls
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Rewrote {len(REWRITES)} cases")


if __name__ == "__main__":
    main()
