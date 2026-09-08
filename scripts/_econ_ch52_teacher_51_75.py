#!/usr/bin/env python3
"""Rewrite tactical_explanations for CASE 5.2.51–CASE 5.2.75 from scratch (ch6 teacher voice)."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch5-subtopics.json")

REWRITES: dict[str, list[str]] = {
    "CASE 5.2.51": [
        "Share percentages are only stable under a fixed market definition and simultaneous reporting. The statement treats an unchanged slice as automatic whenever sales double across the field, which over-simplifies how share is read in contested markets.\n\nSo the statement is False.",
        "When differentiated rivals lock in satisfied loyal buyers, holding share gets harder. Switching costs and preference work against you.\n\nSo the statement is True.",
        "Meeting absolute sales targets does not make share maintenance unnecessary. Relative standing can still slip while volume looks fine.\n\nSo the statement is False.",
        "Share objectives force attention onto competitor moves, not only internal sales charts. Rival actions shape your slice.\n\nSo the statement is True.",
        "A market leader’s share signals relative importance among industry firms. Leadership is read from that comparative weight.\n\nSo the statement is True.",
    ],
    "CASE 5.2.52": [
        "Marketing plans routinely set share targets next to volume and profit goals. The three sit on one planning sheet.\n\nSo the statement is True.",
        "Share is measured from sales in the market, not from production-cost currency. Cost is an input; share is a sales-based slice.\n\nSo the statement is False.",
        "Shrinking your own share does not automatically improve competitiveness. Competitiveness usually tracks holding or gaining relative weight.\n\nSo the statement is False.",
        "Share objectives apply to large and small competitors alike — not only when the firm is the smallest.\n\nSo the statement is False.",
        "If the whole market grows faster than you do, share can fall even while your sales rise. That divergence is common in expanding categories.\n\nSo the statement is True.",
    ],
    "CASE 5.2.53": [
        "Whether share holds steady against key rivals is part of reading competitiveness. Stability versus named peers is informative.\n\nSo the statement is True.",
        "Rising share can come from many causes — better offers, distribution, pricing — not only from rivals’ buyers becoming dissatisfied.\n\nSo the statement is False.",
        "Market analysis helps estimate what share targets are achievable. Objectives follow that reading of the field.\n\nSo the statement is True.",
        "Share is built from sales figures; it is not unrelated to revenue. Saying share excludes revenue entirely is wrong.\n\nSo the statement is False.",
        "Gaining share means competing harder in the market, not exiting it temporarily. Exit cannot raise your in-market slice.\n\nSo the statement is False.",
    ],
    "CASE 5.2.54": [
        "Single-product firms still use share indicators. Product count does not make relative position irrelevant.\n\nSo the statement is False.",
        "Relative position is read from several signals — satisfaction, differentiation, and sales trends — not from share alone. Treating share-versus-competitors as the sole assessment of position overstates what one indicator does.\n\nSo the statement is False.",
        "Share objectives do not require acquiring every competitor. You can raise relative weight without buying the field.\n\nSo the statement is False.",
        "When a new entrant gains share, incumbents’ relative positions usually shrink. Gains come from the existing pie.\n\nSo the statement is True.",
        "Stable share in a growing market means absolute sales rise with the market, not fall. The claim of falling absolute sales is backwards.\n\nSo the statement is False.",
    ],
    "CASE 5.2.55": [
        "Share comparisons are among firms serving the same customer base — the specialty segment, for example.\n\nSo the statement is True.",
        "Share is not net margin. Profitability measures earnings; share measures relative sales weight.\n\nSo the statement is False.",
        "Sales remain important; production costs are covered from revenue, not from share capital alone.\n\nSo the statement is False.",
        "In a declining market, holding share may still mean fighting for sales while the total shrinks. Relative defence and absolute pressure coexist.\n\nSo the statement is True.",
        "Maintaining or increasing sales is included among marketing objectives. Excluding sales from the set is wrong.\n\nSo the statement is False.",
    ],
    "CASE 5.2.56": [
        "Share objectives push firms to watch rivals’ promotional and pricing moves. Competitive monitoring is built in.\n\nSo the statement is True.",
        "When share declines, relative importance falls. The firm weighs less in the market than before.\n\nSo the statement is True.",
        "Even a strong brand needs sales revenue to cover production costs. Brand strength does not replace cash from sales.\n\nSo the statement is False.",
        "Higher sales do not always guarantee higher profit — cost and price limits apply. The “no limitations whatsoever” claim is too strong.\n\nSo the statement is False.",
        "Share charts are a standard way for marketing staff to show competitiveness trends to management.\n\nSo the statement is True.",
    ],
    "CASE 5.2.57": [
        "Awareness impressions alone do not meet sales objectives. Sales require actual purchases, not only reach counts.\n\nSo the statement is False.",
        "Gaining share can strengthen distributor negotiating power in some industries. Relative weight brings commercial leverage.\n\nSo the statement is True.",
        "High inventory without sales does not cover production costs from revenue. Costs are covered by selling, not by stock sitting in the warehouse.\n\nSo the statement is False.",
        "Increasing sales is tightly related to profitability objectives — revenue is the path toward covering costs and earning profit.\n\nSo the statement is False.",
        "Sales volume objectives apply whether or not the firm also pursues share. The two can travel together.\n\nSo the statement is False.",
    ],
    "CASE 5.2.58": [
        "Any positive unit price does not automatically make revenue exceed production costs. Volume, costs, and discounts decide the outcome.\n\nSo the statement is False.",
        "Awareness campaigns without sell-through do not fulfil sales volume objectives. Knowing about the hotel is not the same as booking it.\n\nSo the statement is False.",
        "Share is an objective because it summarises standing versus competitors in one relative figure.\n\nSo the statement is True.",
        "Sales matter to profit-seeking firms at least as much as to not-for-profits. Calling sales important only for non-profits is backwards.\n\nSo the statement is False.",
        "Satisfied loyal customers help hold share when rivals attack. Retention protects the slice.\n\nSo the statement is True.",
    ],
    "CASE 5.2.59": [
        "Maintaining sales volume is about demand and revenue, not locking production output regardless of demand.\n\nSo the statement is False.",
        "A USP that attracts loyal buyers supports share objectives. Stickiness from uniqueness helps hold relative weight.\n\nSo the statement is True.",
        "Share data benchmarks performance against the competitive set. Comparison is the managerial use.\n\nSo the statement is True.",
        "Falling unit sales is a miss on sales growth objectives, not a success signal.\n\nSo the statement is False.",
        "Sales revenue and production costs are tightly related: revenue must cover costs. Calling them unrelated is wrong.\n\nSo the statement is False.",
    ],
    "CASE 5.2.60": [
        "Raising sales does not require cutting satisfaction. Pushing quick unhappy transactions fights long-run volume.\n\nSo the statement is False.",
        "For competitiveness, relative share comparisons matter more than isolated internal sales figures. Context versus rivals is the signal.\n\nSo the statement is True.",
        "Firms sometimes accept short-term profit hits to invest in share gains. Share building can lead profitability chronologically.\n\nSo the statement is True.",
        "Losing share to a rival with a stronger USP signals differentiation weakness. The uniqueness gap shows up in the slice.\n\nSo the statement is True.",
        "Maintaining share is distinct from merely raising absolute sales. Relative weight and absolute volume are different targets.\n\nSo the statement is True.",
    ],
    "CASE 5.2.61": [
        "Market share is how much of the market’s total sales the firm captures. That portion definition is the core idea.\n\nSo the statement is True.",
        "Gaining share while rivals lose ground is a competitiveness improvement. Relative movement favours you.\n\nSo the statement is True.",
        "Share targets follow analysis of the market the business wants to operate in. Objectives come after that reading.\n\nSo the statement is True.",
        "Falling satisfaction often precedes share loss as customers switch. Experience problems show up in the slice.\n\nSo the statement is True.",
        "Share objectives align with wanting a defined portion of market sales. The target is that portion.\n\nSo the statement is True.",
    ],
    "CASE 5.2.62": [
        "Industry reports ranking firms by share illustrate relative importance. The ranking is the comparative story.\n\nSo the statement is True.",
        "Sales objectives rest on market analysis of wishes and needs. Treating them as independent of that analysis is wrong.\n\nSo the statement is False.",
        "Rising sales still require cost monitoring. Volume growth does not retire attention to production costs.\n\nSo the statement is False.",
        "Peak warehouse stock is not sales volume success. Sales are customer purchases, not inventory sitting on pallets.\n\nSo the statement is False.",
        "Revenue must still cover costs when pursuing differentiation. Differentiation does not make cost coverage irrelevant.\n\nSo the statement is False.",
    ],
    "CASE 5.2.63": [
        "Defensive marketing aims to stop share loss to aggressive competitors. Holding the line is the defence goal.\n\nSo the statement is True.",
        "Share and sales objectives together give relative and absolute views. Managers need both lenses.\n\nSo the statement is True.",
        "A competitiveness review typically puts market share next to rival trends. Comparative reading is standard.\n\nSo the statement is True.",
        "In a mature market, gaining share usually means taking customers from established rivals. Growth comes from switching.\n\nSo the statement is True.",
        "Share is an indicator, not a substitute for profitability analysis. Both still need separate attention.\n\nSo the statement is True.",
    ],
    "CASE 5.2.64": [
        "Sales growth built on dissatisfied one-time buyers is not a sustainable long-run strategy. Repeat custom fails to appear.\n\nSo the statement is False.",
        "Businesses monitor share because it shows position relative to competitors. That comparative use is the reason.\n\nSo the statement is True.",
        "Unit sales targets sit inside quarterly marketing planning. Calling them unrelated misreads how plans are built.\n\nSo the statement is False.",
        "Sales feed profitability through revenue; profit does not come only from asset sales. Operating sales matter.\n\nSo the statement is False.",
        "Maintaining sales does not mean raising prices every month regardless of demand. Price paths follow the market.\n\nSo the statement is False.",
    ],
    "CASE 5.2.65": [
        "A grow-share objective implies outperforming rivals in relative terms. Beating the field’s growth is the point.\n\nSo the statement is True.",
        "Awareness without purchases does not meet sales objectives. Reach is not sell-through.\n\nSo the statement is False.",
        "Sales volume is measured by customer purchases, not by headcount. Employees are not the volume metric.\n\nSo the statement is False.",
        "Loyalty built through satisfaction supports share maintenance. Retained buyers hold the slice.\n\nSo the statement is True.",
        "Relative importance in the market is the concept share is meant to convey.\n\nSo the statement is True.",
    ],
    "CASE 5.2.66": [
        "Maintaining or increasing sales is a marketing objective because sales generate the revenue the business needs.\n\nSo the statement is True.",
        "Satisfaction and sales growth are compatible. Raising sales does not become impossible when satisfaction is pursued.\n\nSo the statement is False.",
        "Differentiated products still need sales revenue to fund production costs. Differentiation does not block that funding role.\n\nSo the statement is False.",
        "Sales matter because revenues must cover production costs. That coverage role is why volume sits among the objectives.\n\nSo the statement is True.",
        "Forecasts without actual sales do not meet sales volume objectives. Objectives are judged on realised volume.\n\nSo the statement is False.",
    ],
    "CASE 5.2.67": [
        "Sales revenue is what makes profit possible after costs are met. No revenue path, no operating profit.\n\nSo the statement is True.",
        "Pursuing higher sales means strengthening revenue inflow. That cash stream is the immediate aim.\n\nSo the statement is True.",
        "Campaigns often target a sales volume increase in a defined period — a launch quarter, a season, a year.\n\nSo the statement is True.",
        "Sales objectives do not replace profitability analysis. Volume and profit both need review.\n\nSo the statement is False.",
        "Sales objectives may be stated in units or in revenue. Either formulation is standard.\n\nSo the statement is True.",
    ],
    "CASE 5.2.68": [
        "Without adequate sales, production costs cannot be covered from revenue. Volume is the funding engine.\n\nSo the statement is True.",
        "Increasing sales is listed among marketing objectives businesses may pursue. It is a core entry on the list.\n\nSo the statement is True.",
        "Seasonal peaks can still serve an annual volume-increase objective. Timing within the year does not cancel the yearly aim.\n\nSo the statement is True.",
        "Export revenue counts toward sales volume objectives. Geography of the sale does not exclude it.\n\nSo the statement is False.",
        "Sales growth supports cash inflows for day-to-day operations. Working cash rides on selling.\n\nSo the statement is True.",
    ],
    "CASE 5.2.69": [
        "Higher sales do not drive production costs per unit to zero. Unit costs may fall with scale, but they do not vanish.\n\nSo the statement is False.",
        "A promotional discount is a common tool to lift short-term sales volume. Price incentives move units now.\n\nSo the statement is True.",
        "Sales growth objectives link to loyalty from satisfaction — repeat buyers add volume. Calling them unrelated cuts that path.\n\nSo the statement is False.",
        "A temporary spike from a failed product does not satisfy long-term sales objectives. Sustainability matters.\n\nSo the statement is False.",
        "Sales targets are set after analysing the market the firm wishes to serve. Analysis precedes the numbers.\n\nSo the statement is True.",
    ],
    "CASE 5.2.70": [
        "For profit to be possible, sales revenue must exceed production costs. That surplus condition is basic.\n\nSo the statement is True.",
        "When a market matures, maintaining sales volume can itself be the objective — hold the line rather than chase growth.\n\nSo the statement is True.",
        "Sales performance is monitored to judge progress toward marketing objectives. Tracking is how managers know.\n\nSo the statement is True.",
        "A decline in unit sales may signal failure on sales-related objectives. Falling volume is a warning.\n\nSo the statement is True.",
        "Higher sales usually support profitability, subject to cost and pricing limitations the chapter states.\n\nSo the statement is True.",
    ],
    "CASE 5.2.71": [
        "Sales and satisfaction interrelate because repeat buyers add volume. Happy customers feed the sales objective.\n\nSo the statement is True.",
        "Distribution expansion is a route to higher sales in new geographic areas. Reach growth supports volume.\n\nSo the statement is True.",
        "Quarterly sales targets are a normal part of a marketing plan. Periodised volume aims are standard.\n\nSo the statement is True.",
        "Sales matter alongside share, not as a licence to ignore share completely. Relative position still counts.\n\nSo the statement is False.",
        "Volume growth on a new product launch is a common marketing objective. Launch plans almost always include it.\n\nSo the statement is True.",
    ],
    "CASE 5.2.72": [
        "Maintaining sales usually needs continued marketing spend, not a total shut-down of expenditure.\n\nSo the statement is False.",
        "Sales volume and revenue are related concepts in the framework — units and the money they bring. Calling them unrelated is wrong.\n\nSo the statement is False.",
        "Production costs are covered from sales revenue in the marketing framework, not from government grants as a general rule.\n\nSo the statement is False.",
        "Sales matter beyond busy-looking activity because revenue must cover costs. Coverage is the deeper reason.\n\nSo the statement is True.",
        "Wholesale and retail channels both feed total sales volume. Channel mix still counts toward the firm total.\n\nSo the statement is True.",
    ],
    "CASE 5.2.73": [
        "Rising sales does not make profitability objectives unnecessary. Costs and margins still need managing.\n\nSo the statement is False.",
        "When supply constraints cap growth, a maintain-volume sales objective can still apply. Hold what you can sell.\n\nSo the statement is True.",
        "Building distribution centres without sell-through does not fulfil sales objectives. Capacity is not purchases.\n\nSo the statement is False.",
        "Advertising spend may aim to raise sales of a specific product line. That line-level volume aim is standard.\n\nSo the statement is True.",
        "High satisfaction without sales does not create profit. Profit needs revenue after costs, not goodwill alone.\n\nSo the statement is False.",
    ],
    "CASE 5.2.74": [
        "Unit sales growth enlarges the revenue pool from which costs are paid. More units, more revenue capacity.\n\nSo the statement is True.",
        "Profitability is linked to sales through operating revenue. Profits do not come only from borrowed funds.\n\nSo the statement is False.",
        "Higher sales do not always reduce profit through infinitely rising costs. Scale and margins can improve with volume.\n\nSo the statement is False.",
        "Profits can be retained in the business for reinvestment. Retention is a normal use of earnings.\n\nSo the statement is False.",
        "Sales data helps managers see whether marketing objectives are being achieved. Numbers check the plan.\n\nSo the statement is True.",
    ],
    "CASE 5.2.75": [
        "Rising sales with rising costs can still miss profit objectives. Volume without margin control fails the profit aim.\n\nSo the statement is True.",
        "Profitability objectives include reimbursing owners for invested capital. Excluding that reimbursement misreads the aim.\n\nSo the statement is False.",
        "Marketing objectives do include profitability — not awareness alone. Profit sits in the objective set.\n\nSo the statement is False.",
        "Falling sales does not let a firm raise profit without cost changes. Shrinking revenue usually pressures profit unless costs fall too.\n\nSo the statement is False.",
        "Retained profit is earnings kept in the business, not short-term trade credit from suppliers. Those are different financing ideas.\n\nSo the statement is False.",
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
            assert "Keep … tied" not in expl and "Keep ... tied" not in expl
            low = expl.lower()
            assert "tied to buyer type, exchange, or orientation" not in low
            assert "whichever the stem is testing" not in low
        case["tactical_explanations"] = expls
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Rewrote {len(REWRITES)} cases")


if __name__ == "__main__":
    main()
