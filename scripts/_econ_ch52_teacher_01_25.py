#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 5.2.01–CASE 5.2.25 from scratch (ch6 teacher voice)."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")

REWRITES: dict[str, list[str]] = {
    "CASE 5.2.01": [
        "Unhappy buyers walk away. If the product disappointed them, the next purchase usually goes to someone else — or nowhere at all.\n\nSo the statement is True.",
        "When a purchase meets expectations, many customers stick with the brand and buy again. That is the loyalty path the objective set relies on.\n\nSo the statement is True.",
        "Satisfaction and repurchase are tightly linked. Calling them unrelated cuts the main reason firms chase satisfaction objectives in the first place.\n\nA dairy buyer who hated the last carton rarely returns for another.\n\nSo the statement is False.",
        "Satisfaction sits in the same objective pack as sales and loyalty, not in a sealed box of its own.\n\nHappy customers buy again (sales) and stay (loyalty); miss satisfaction and those targets wobble together.\n\nSo the statement is True.",
        "Marketing objectives only make sense once you know what customers want. Wishes-and-needs analysis comes first; then you can set targets that actually fit the market.\n\nSo the statement is True.",
    ],
    "CASE 5.2.02": [
        "Skip satisfaction and you bleed repeat sales even from buyers who could have stayed. The sportswear buyer who finds the kit uncomfortable simply does not reorder.\n\nSo the statement is True.",
        "Loyalty without a fix is wishful thinking. A dissatisfied customer does not turn into a loyal repeater while the product stays the same.\n\nAthlete ads and loyalty points do not paper over a poor fit or feel.\n\nSo the statement is False.",
        "After the sale, how the product felt shapes whether it is even on the shortlist next time. Post-purchase satisfaction is a gate to future consideration.\n\nSo the statement is True.",
        "Satisfaction is one marketing objective among several. Sales and profit goals stay on the list; satisfaction does not replace them.\n\nSo the statement is False.",
        "Firms analyse wishes and needs before they set marketing objectives. Jumping straight to targets without that analysis fights the framework.\n\nSo the statement is False.",
    ],
    "CASE 5.2.03": [
        "Loyal customers who come back keep volume alive period after period. That repeat stream is why loyalty sits among the core marketing aims.\n\nSo the statement is True.",
        "Satisfaction is about keeping buyers, not only landing a single transaction. Retention, not one-off spikes, is the point.\n\nSo the statement is True.",
        "Loyalty is not independent of satisfaction. Satisfied customers are the ones who tend to buy again; the claim that they rarely return gets the link backwards.\n\nSo the statement is False.",
        "Happy customers often tell friends. That word-of-mouth stretches the original sale’s impact beyond the first buyer.\n\nSo the statement is True.",
        "Goods producers chase satisfaction just as service firms do. A manufacturer’s buyer who is unhappy will not repurchase either.\n\nSo the statement is False.",
    ],
    "CASE 5.2.04": [
        "Repeat purchase does not make satisfaction optional — it is often the result of satisfaction working. Treating repurchase as proof that satisfaction targets are unnecessary misreads the objective set.\n\nSo the statement is False.",
        "Among marketing objectives is making sure customers are content enough to think about buying again. That contentment target is explicit, not optional fluff.\n\nSo the statement is True.",
        "Rising dissatisfaction is a warning light: delivery or marketing may be missing the stated aims. Ignore the signal and share and sales usually follow downward.\n\nSo the statement is True.",
        "Prioritising profit does not kick satisfaction out of the objective set. Profitability and satisfaction are pursued together, not as substitutes.\n\nSo the statement is False.",
        "A small price cut rarely converts a dissatisfied buyer into a repeater. Disappointment about quality or fit tends to outweigh a modest discount.\n\nSo the statement is False.",
    ],
    "CASE 5.2.05": [
        "Satisfaction is not parked until profit targets clear. The dairy co-op can survey milk buyers and chase margins in the same planning cycle.\n\nSo the statement is False.",
        "Satisfaction surveys show whether marketing objectives are landing with real buyers. They are a practical check, not a side hobby.\n\nSo the statement is True.",
        "Loyalty programmes fail if the core product disappoints. Address satisfaction with the milk itself before you expect brand loyalty to stick.\n\nSo the statement is True.",
        "Loyalty grows out of prior satisfaction. Customers do not become loyal while still unhappy with what they bought.\n\nSo the statement is False.",
        "When prior use met or beat expectations, the next purchase is much more likely. That is the repeat-behaviour pattern the chapter leans on.\n\nSo the statement is True.",
    ],
    "CASE 5.2.06": [
        "Satisfaction feeds share and sales over time. Claiming zero connection to those objectives severs links the framework treats as central.\n\nHappy buyers stay; share and volume hold. Unhappy buyers leave; both slip.\n\nSo the statement is False.",
        "A strong brand does not excuse skipping wishes-and-needs analysis. Markets still shift, and objectives still need that grounding.\n\nSo the statement is False.",
        "Long-run sales performance rides on whether customers were satisfied. In this framework the two are not cleanly separable.\n\nSo the statement is True.",
        "Satisfaction objectives do not demand delight on every single dimension. Customers return when the offer is good enough on what matters — not only when every feature is perfect.\n\nSo the statement is False.",
        "Rising complaints after a campaign signal a satisfaction problem, not success. That is the opposite of hitting the satisfaction objective.\n\nSo the statement is False.",
    ],
    "CASE 5.2.07": [
        "Unsatisfied buyers do not keep demand alive. That is why firms start by analysing wishes and needs before locking objectives.\n\nSo the statement is True.",
        "The satisfaction goal is to turn a first purchase into a return visit. Conversion to repeat custom is the point.\n\nSo the statement is True.",
        "High satisfaction retains buyers, and retained buyers protect share. A plan that delivers on satisfaction can therefore reinforce market share.\n\nSo the statement is True.",
        "Satisfied customers often recommend products. Treating satisfaction as a private feeling that never spreads is wrong.\n\nSo the statement is False.",
        "Price cuts alone do not deliver satisfaction. Quality, fit, and experience matter; undercutting rivals is not the sole route.\n\nSo the statement is False.",
    ],
    "CASE 5.2.08": [
        "One purchase does not tick the satisfaction box. The hardware buyer who never returns has not fulfilled that objective for the chain.\n\nSo the statement is False.",
        "Habit does not make dissatisfaction harmless. Unhappy customers eventually leave, so satisfaction objectives are not optional.\n\nSo the statement is False.",
        "Satisfaction and profitability can coexist. Loyal, happy buyers support revenue; the objectives are complementary, not mutually exclusive.\n\nSo the statement is False.",
        "A rising complaint trend is evidence the satisfaction objective is slipping. Managers treat that as a miss, not noise.\n\nSo the statement is True.",
        "Satisfaction surveys are a standard way to judge whether marketing objectives are working. Calling them irrelevant ignores a core feedback loop.\n\nSo the statement is False.",
    ],
    "CASE 5.2.09": [
        "Brand loyalty programmes need a satisfied base. Without that foundation, points and cards have little to build on.\n\nSo the statement is True.",
        "If the product misses needs, sales-growth targets become much harder. Satisfaction failure leaks straight into volume aims.\n\nSo the statement is True.",
        "A loyal customer is not someone who keeps buying while unhappy. Loyalty in this chapter rests on satisfaction, not on indifference to it.\n\nSo the statement is False.",
        "Quality that satisfies encourages the same brand choice next time. That is how satisfaction feeds brand stickiness.\n\nSo the statement is True.",
        "Marketing objectives treat satisfaction as tied to keeping competitive sales alive. The two are planned together.\n\nSo the statement is True.",
    ],
    "CASE 5.2.10": [
        "Repurchase rates are a practical proxy for satisfaction success. Track them and you are watching that objective indirectly.\n\nSo the statement is True.",
        "When wishes feel fulfilled, willingness to buy again rises. The coffee drinker who loved the last bag comes back for more.\n\nSo the statement is True.",
        "Differentiation promises uniqueness; satisfaction checks that the promise was felt. The two objectives reinforce each other.\n\nSo the statement is True.",
        "Heavy promotion cannot permanently prop up share if satisfaction is poor. Unhappy buyers still leave, and share erodes.\n\nSo the statement is True.",
        "Satisfaction is an objective precisely because unhappy customers will not buy again. That simple link puts it on the target list.\n\nSo the statement is True.",
    ],
    "CASE 5.2.11": [
        "Satisfaction work does not wait until share targets are already hit. Firms pursue both in parallel, not in a strict queue.\n\nSo the statement is False.",
        "Satisfaction and loyalty are connected in the objective set, not sealed off from each other. Treating them as unrelated misreads the framework.\n\nSo the statement is False.",
        "Loyalty outcomes rest on a satisfactory prior experience. Without that, loyalty programmes and claims ring hollow.\n\nSo the statement is True.",
        "Strong differentiation does not excuse failing to fulfil wishes and needs. Differentiation still has to deliver for the customer.\n\nSo the statement is False.",
        "Firms set satisfaction targets because loyal repeaters strengthen sales, share, and related aims. Satisfaction is a hub objective, not a side note.\n\nSo the statement is True.",
    ],
    "CASE 5.2.12": [
        "Satisfied customers buy again by choice, not because a contract forces them. Legal compulsion is not the driver.\n\nSo the statement is False.",
        "Market analysis of needs lets the firm align the product with satisfaction goals. That alignment is how objectives stay realistic.\n\nSo the statement is True.",
        "Sales are not advertising-only. Satisfaction shapes repeat volume; calling the two unrelated ignores that channel.\n\nSo the statement is False.",
        "High satisfaction does not license ignoring share. Competitors still move, and share remains a separate competitiveness check.\n\nSo the statement is False.",
        "Dissatisfaction pushes buyers toward rivals, not toward more of your range. It harms long-run sales rather than improving them.\n\nSo the statement is False.",
    ],
    "CASE 5.2.13": [
        "High promotional reach cannot rescue a poor stay. Guest experience — not ad impressions alone — decides whether satisfaction objectives are met.\n\nSo the statement is False.",
        "Satisfied guests often book extras or return for related offers. Claiming they never buy complementary products from the same firm is too absolute.\n\nSo the statement is False.",
        "A satisfied base means less dependence on endlessly hunting new guests. Retention carries more of the occupancy load.\n\nSo the statement is True.",
        "USP work still needs a good experience. Differentiation is not “purely visual”; satisfaction with the offer matters to USP success.\n\nSo the statement is False.",
        "Scores and repeat rates can diverge for real reasons — timing, switching costs, measurement lag — not only because of data error.\n\nSo the statement is False.",
    ],
    "CASE 5.2.14": [
        "Customer satisfaction is one marketing objective among several, not the whole list and not an outsider either.\n\nSo the statement is True.",
        "Repeat revenue from satisfied buyers supports profit indirectly. Satisfaction feeds the cash stream that margins ride on.\n\nSo the statement is True.",
        "When customers are satisfied they tend to stay rather than switch. Retention is the behavioural payoff.\n\nSo the statement is True.",
        "Satisfaction does not require being the cheapest. Price is only one lever; quality and fit can satisfy at higher prices.\n\nSo the statement is False.",
        "Marketing reviews often put satisfaction scores next to sales figures. Both are used when judging objective performance.\n\nSo the statement is True.",
    ],
    "CASE 5.2.15": [
        "Loyalty schemes do not cancel the need for satisfaction objectives. Points cannot permanently override a disappointing product.\n\nSo the statement is False.",
        "Enrolling a dissatisfied customer in rewards does not create real loyalty. The underlying experience still has to be fixed.\n\nSo the statement is False.",
        "A first-use delight puts the product in a strong position for loyalty targets. Early satisfaction is the launch pad.\n\nSo the statement is True.",
        "Satisfaction is a marketing outcome about customer experience, not a gross-profit line on the accounts.\n\nSo the statement is False.",
        "Satisfaction objectives are set in growing and declining markets alike. They are not reserved for downturns only.\n\nSo the statement is False.",
    ],
    "CASE 5.2.16": [
        "Even a satisfied bakery customer may switch if a rival’s USP is stronger. Satisfaction lowers the risk of exit; it does not lock buyers forever.\n\nSo the statement is False.",
        "Maxing production volume is not the same as hitting satisfaction objectives. Making more loaves does not mean buyers are content.\n\nSo the statement is False.",
        "A USP means the product stands out as different — not that it is identical to every similar item on every feature.\n\nSo the statement is False.",
        "A trial promotion can spike sales, then collapse if the product disappoints. Dissatisfaction after the trial undoes the short-term gain.\n\nSo the statement is True.",
        "Satisfaction objectives push the firm to deliver what differentiation messaging promised. The claim and the experience have to match.\n\nSo the statement is True.",
    ],
    "CASE 5.2.17": [
        "The same household returning to a retailer is a practical sign that satisfaction objectives are landing.\n\nSo the statement is True.",
        "Loyal buyers generate recurring revenue, so satisfaction and profitability interlock. One supports the other over time.\n\nSo the statement is True.",
        "Differentiation does not require objective uniqueness on every technical detail. Perceived difference — including brand and promotion — can be enough.\n\nSo the statement is False.",
        "Brand-building is a main route to a USP. Saying brand has no role in creating uniqueness contradicts the chapter link.\n\nSo the statement is False.",
        "Prioritising satisfaction does not drop share or sales from the plan. Firms still chase those objectives alongside it.\n\nSo the statement is True.",
    ],
    "CASE 5.2.18": [
        "Satisfaction ratings often soften before share does. A slide in scores can be an early warning of relative share loss.\n\nSo the statement is True.",
        "Satisfied buyers are more open to line extensions from the same firm. Trust earned on one product spills into the next.\n\nSo the statement is True.",
        "The framework assumes satisfied customers may buy again. That assumption underpins why satisfaction is an objective.\n\nSo the statement is True.",
        "A USP aims to attract loyal customers; failing on satisfaction makes that loyalty base hard to build.\n\nSo the statement is True.",
        "Wishes-and-needs analysis keeps satisfaction targets realistic. Without it, targets float free of what buyers actually want.\n\nSo the statement is True.",
    ],
    "CASE 5.2.19": [
        "After-sales service that satisfies reinforces overall marketing objective achievement. The furniture buyer’s delivery or warranty experience counts.\n\nSo the statement is True.",
        "A USP does not require 100% market share. Differentiation can succeed at much smaller shares.\n\nSo the statement is False.",
        "Product differentiation and USP are closely related ideas — positioning the offer as unlike substitutes — not unrelated concepts.\n\nSo the statement is False.",
        "A loyal repeater spreads acquisition cost over more units sold. That lowers average cost per unit sold over time.\n\nSo the statement is True.",
        "Satisfaction objectives exist to stop customers abandoning the product. Retention is the prevention goal.\n\nSo the statement is True.",
    ],
    "CASE 5.2.20": [
        "Promotion and customer perception can absolutely help build a USP. How the product is presented shapes uniqueness in buyers’ minds.\n\nSo the statement is False.",
        "A USP is not “worse but cheaper.” It is about standing out as different or better in a way customers value — price alone is not the definition.\n\nSo the statement is False.",
        "Firms create USPs to attract loyal customers, not to avoid them. The claim that businesses avoid USPs for that reason is backwards.\n\nSo the statement is False.",
        "When satisfaction is high, buyers are less tempted by rivals’ price cuts. That stabilises sales under promotional attack.\n\nSo the statement is True.",
        "Brand-building supports differentiation; it does not make every product look the same. The statement reverses the role of branding.\n\nSo the statement is False.",
    ],
    "CASE 5.2.21": [
        "Measuring satisfaction shows whether differentiation claims match lived experience. Gaps between promise and feel show up in the scores.\n\nSo the statement is True.",
        "Having a USP does not retire satisfaction work. Customers still must experience the claimed difference positively.\n\nSo the statement is False.",
        "Everyday products differentiate too — convenience, taste, reliability. Differentiation is not a luxury-only club.\n\nSo the statement is False.",
        "Promotion-based uniqueness still counts as differentiation in this framework. Perception shaped by messaging is recognised.\n\nSo the statement is False.",
        "Two products under one brand can each carry a distinct USP. Brand umbrella and product-level uniqueness can coexist.\n\nSo the statement is False.",
    ],
    "CASE 5.2.22": [
        "Disappointment with one skincare item can spill over: buyers may avoid the rest of the firm’s range. Reputation travels across the line.\n\nSo the statement is True.",
        "Without differentiation effort, attracting many loyal customers is hard. A product with no USP rarely builds that following by accident.\n\nSo the statement is False.",
        "Satisfaction objectives line up with marketing’s job of fulfilling wishes and needs. The fit is intentional.\n\nSo the statement is True.",
        "Copying the market leader exactly is the opposite of differentiation. Differentiation means standing apart, not cloning.\n\nSo the statement is False.",
        "Lowest price alone does not define a USP. Uniqueness can rest on quality, image, service, or other valued differences.\n\nSo the statement is False.",
    ],
    "CASE 5.2.23": [
        "In the textbook path, a satisfied customer is the natural candidate for loyalty. Satisfaction is the gateway.\n\nSo the statement is True.",
        "Repeat purchase is behavioural evidence that satisfaction and loyalty aims are moving forward.\n\nSo the statement is True.",
        "Keeping existing buyers through satisfaction protects share. Exit is reduced when experience is good.\n\nSo the statement is True.",
        "Firms link satisfaction to multi-period sales volume strategically. Happy buyers underpin volume across quarters, not just once.\n\nSo the statement is True.",
        "Differentiation claims without satisfactory delivery fail to create loyal customers. The experience has to back the story.\n\nSo the statement is True.",
    ],
    "CASE 5.2.24": [
        "The chapter presents satisfaction as interrelated with increasing sales. One supports the other rather than competing with it.\n\nSo the statement is True.",
        "Lift satisfaction now and retention metrics often improve in later quarters. The lag is normal; the direction is the point.\n\nSo the statement is True.",
        "A USP means the product is — or is seen as — different from similar offerings. Actual or perceived difference both count.\n\nSo the statement is True.",
        "Differentiation can rest on a product characteristic itself — design, durability, ingredients — not only on ads.\n\nSo the statement is True.",
        "Building a brand is a marketing differentiation activity, not a separate financial objective with no link to uniqueness.\n\nSo the statement is False.",
    ],
    "CASE 5.2.25": [
        "How a product is promoted and perceived can create differentiation even when physical features overlap with rivals.\n\nSo the statement is True.",
        "Functional similarity does not block a perceived USP. Branding and messaging can still make the offer feel unique.\n\nSo the statement is False.",
        "A USP does not hand over unlimited share automatically. Share still needs ongoing marketing effort.\n\nSo the statement is False.",
        "Packaging can be part of a USP. Excluding packaging from differentiation is too narrow.\n\nSo the statement is False.",
        "Brand-building is a standard support for creating a USP. Recognition and associations help the product stand apart.\n\nSo the statement is True.",
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
            assert expl.rstrip().endswith(ending), (cid, i, expl[-60:], ending)
            assert "TRUE —" not in expl and "FALSE —" not in expl
            assert "tied to buyer type" not in expl.lower()
            assert "whichever the stem" not in expl.lower()
        case["tactical_explanations"] = expls
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Rewrote {len(REWRITES)} cases: {sorted(REWRITES)}")


if __name__ == "__main__":
    main()
