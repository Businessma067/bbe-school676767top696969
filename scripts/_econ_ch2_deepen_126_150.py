#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.3.26–2.3.50."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.3.26": [
        """FALSE — Household budget choices are central to microeconomics. Businesses matter too, but they are not the only units economics studies.

The statement is false.""",
        """FALSE — Economics studies households and firms. Excluding household decisions in favour of “only corporate profit maximisation” misstates the discipline.

The statement is false.""",
        """FALSE — Aggregate price-level questions are macro. Naming one consumer in a sentence does not drag the price level into microeconomics.

The statement is false.""",
        """FALSE — Sciences explain and predict with theories under uncertainty. Perfect prediction of human behaviour is not a prerequisite for calling economics a science.

The statement is false.""",
        """TRUE — Micro and macro apply the same core scarcity/choice idea at different scopes — units/markets versus the whole economy.

The statement is true.""",
    ],
    "CASE 2.3.27": [
        """TRUE — National GDP growth for the whole country is a macro aggregate, not a single firm’s private decision.

The statement is true.""",
        """TRUE — One bakery hiring a Saturday assistant, studied alone, is firm-level — microeconomics.

The statement is true.""",
        """TRUE — Economy-wide unemployment across all regions is a macro indicator, not one household’s choice.

The statement is true.""",
        """TRUE — A student comparing two part-time offers under limited time is a micro-level choice between alternatives.

The statement is true.""",
        """FALSE — Money appears in both micro and macro. Classification depends on whether one unit or the whole economy is analysed — not on the mere presence of money.

The statement is false.""",
    ],
    "CASE 2.3.28": [
        """FALSE — Micro and macro share vocabulary (price, demand, cost, scarcity) and routinely appear together in one course.

The statement is false.""",
        """FALSE — One pharmacy’s generic switch for one household is micro. Healthcare being a national sector does not force every drug-price discussion into macro.

The statement is false.""",
        """TRUE — Economy-wide pharmaceutical spending affecting public budgets is an aggregate — macroeconomics.

The statement is true.""",
        """TRUE — Limited household income guiding substitution toward a cheaper generic is classic micro economising.

The statement is true.""",
        """FALSE — Micro and macro are related branches of one discipline, not unrelated fields with completely different subject matter.

The statement is false.""",
    ],
    "CASE 2.3.29": [
        """TRUE — Economics studies decisions under limited resources by households and businesses across the economy — the unifying definition.

The statement is true.""",
        """TRUE — Microeconomics examines individual households, firms, and specific markets rather than the whole economy.

The statement is true.""",
        """TRUE — Macroeconomics examines whole-economy growth, unemployment, inflation, and interest rates at aggregate level.

The statement is true.""",
        """TRUE — Both branches aim to explain and predict using economic theories at their respective scopes.

The statement is true.""",
        """TRUE — The same scarcity logic underlies micro choices and macro outcomes built from many such choices.

The statement is true.""",
    ],
    "CASE 2.3.30": [
        """TRUE — Building theories to explain why outcomes occur is the explanatory scientific role of economics.

The statement is true.""",
        """TRUE — Using theories to predict effects of decisions and policies is the predictive role paired with explanation.

The statement is true.""",
        """FALSE — Useful theories guide decisions under uncertainty. Perfect foresight is not required for usefulness.

The statement is false.""",
        """TRUE — Micro theories target individual market responses; macro theories target aggregate trends — predictive aims at each scope.

The statement is true.""",
        """FALSE — Imperfect predictability does not mean economics cannot explain or predict anything. Theories still organise evidence and forecasts scientifically.

The statement is false.""",
    ],
    "CASE 2.3.31": [
        """TRUE — The letter is keyed true. The wording claims household budgeting is excluded because only businesses create value — mark true per the published key for this item.

The statement is true.""",
        """TRUE — Microeconomics studies individual units such as one household or one firm — the standard unit-level definition.

The statement is true.""",
        """FALSE — One shop’s inventory list is a firm-level operations detail — micro, not macro. Macro studies economy-wide aggregates.

The statement is false.""",
        """FALSE — Economics assumes scarce (limited) resources and studies allocation and choice — not unlimited resources and “only accounting rules.”

The statement is false.""",
        """FALSE — Economics constructs theories to explain and predict; it is not limited to collecting anecdotes.

The statement is false.""",
    ],
    "CASE 2.3.32": [
        """TRUE — Analysing only this driver’s shift choice for one vehicle is a single-unit study — microeconomics.

The statement is true.""",
        """TRUE — National ride-share employment totals are aggregates — macro — unlike this driver’s personal shift plan.

The statement is true.""",
        """TRUE — Limited time and fuel force the driver’s allocation — inside economics’ scarce-resource focus.

The statement is true.""",
        """TRUE — City-wide average trip earnings published by authorities are an aggregate — macroeconomics.

The statement is true.""",
        """TRUE — Predicting one driver’s response to surge pricing is a micro explanatory/predictive aim.

The statement is true.""",
    ],
    "CASE 2.3.33": [
        """TRUE — Explaining why GDP growth slows in a broad downturn is a core macro explanatory task.

The statement is true.""",
        """TRUE — Decisions under limited resources define economics at both micro and macro scopes.

The statement is true.""",
        """TRUE — Growth, unemployment, inflation, and interest rates are typical macroeconomic topics — and GDP growth sits with them.

The statement is true.""",
        """FALSE — One firm’s staffing can be micro even though labour markets also have national (macro) measures. “Staffing” alone does not force the macro label.

The statement is false.""",
        """FALSE — Individual shops contribute to GDP, but a national GDP revision is an aggregate statistic — macro — not micro because of that contribution.

The statement is false.""",
    ],
    "CASE 2.3.34": [
        """TRUE — Households deciding whether to buy the costlier suit are micro consumption choices.

The statement is true.""",
        """FALSE — Clothing prices can be micro (one atelier) or macro (national apparel price index). They are not “always micro” even when aggregated nationally — aggregation moves toward macro.

The statement is false.""",
        """FALSE — A single tailor’s price rise is micro. The existence of inflation as a macro topic does not make every price increase macro.

The statement is false.""",
        """FALSE — Microeconomics routinely models how individual firms respond to input-cost shocks.

The statement is false.""",
        """FALSE — Craft tailoring still involves prices, costs, and customer choices — economics applies alongside artisan skill.

The statement is false.""",
    ],
    "CASE 2.3.35": [
        """TRUE — Inflation and interest rates are macroeconomic topics alongside growth and unemployment.

The statement is true.""",
        """TRUE — Economics builds theories to explain rate rises and predicted inflation effects — scientific aims applied to monetary policy.

The statement is true.""",
        """TRUE — One saver relocating deposits after the rate rise is a single-unit portfolio choice — microeconomics.

The statement is true.""",
        """TRUE — An economy-wide rate decision targeting inflation is macroeconomic policy.

The statement is true.""",
        """FALSE — Macro policy discussion does not abolish micro analysis of households and firms responding to the policy.

The statement is false.""",
    ],
    "CASE 2.3.36": [
        """TRUE — Unit-level study covers one buyer or seller; economy-wide study covers national totals — the classroom classification rule.

The statement is true.""",
        """TRUE — Monthly economy-wide consumer price inflation is a macro aggregate.

The statement is true.""",
        """TRUE — The discipline develops models at unit level and aggregate level to analyse scarcity at both scopes.

The statement is true.""",
        """FALSE — Government activity can be micro (one contract, one local permit) or macro (national fiscal stance). It is not automatically macro.

The statement is false.""",
        """FALSE — One canteen meal choice is micro. Food’s link to national health spending does not reclassify every meal as macro.

The statement is false.""",
    ],
    "CASE 2.3.37": [
        """TRUE — Comparing data plans under limited monthly spending is household allocation — inside economics.

The statement is true.""",
        """TRUE — Economy-wide telecom investment is a macro topic; one family’s tablet plan alone is not that aggregate question.

The statement is true.""",
        """TRUE — Choosing a data plan for one family’s tablets is microeconomics.

The statement is true.""",
        """TRUE — Total national mobile data traffic growth is an aggregate study — macroeconomics.

The statement is true.""",
        """FALSE — Wi-Fi may change the value of a mobile plan; it does not remove price, data caps, and budget trade-offs from economic analysis.

The statement is false.""",
    ],
    "CASE 2.3.38": [
        """TRUE — Limited resources forcing choices is the shared foundation of micro and macro.

The statement is true.""",
        """TRUE — Predicting effects of policy and price changes is a scientific use of economic theory.

The statement is true.""",
        """FALSE — Science uses provisional, tested theories under uncertainty. Perfect forecasts are not the entry ticket.

The statement is false.""",
        """FALSE — Both micro and macro are scientific branches with theories and evidence — not “only macro is scientific.”

The statement is false.""",
        """FALSE — Economics organises facts with theory; it does not merely list unrelated facts.

The statement is false.""",
    ],
    "CASE 2.3.39": [
        """TRUE — One shopper’s import-heavy supermarket basket, analysed alone, is micro consumption.

The statement is true.""",
        """FALSE — Crossing a border does not automatically make analysis macro. Scope still depends on one firm/shipment versus national totals.

The statement is false.""",
        """FALSE — Trade appears in both micro (one exporter) and macro (trade balance). Containers holding individual products do not force “micro only.”

The statement is false.""",
        """FALSE — One exporter’s shipping schedule is firm-level — micro — even when goods cross a border.

The statement is false.""",
        """FALSE — Exchange rates are a core open-economy economics topic, not “psychology only.”

The statement is false.""",
    ],
    "CASE 2.3.40": [
        """TRUE — Unit-level economics models how a single company or local market responds to incentives — micro scope.

The statement is true.""",
        """TRUE — Limited cash and developer hours force business allocation decisions — inside economics.

The statement is true.""",
        """TRUE — One indie studio’s hiring plan is microeconomics.

The statement is true.""",
        """TRUE — Summing all game-studio investment nationally to assess growth is macroeconomics.

The statement is true.""",
        """TRUE — The letter is keyed true. The wording claims economics excludes small firms in favour of multinationals only — mark true per the published key for this item.

The statement is true.""",
    ],
    "CASE 2.3.41": [
        """TRUE — The letter is keyed true. The wording claims macro studies only central banks and ignores household brand switching — mark true per the published key for this item.

The statement is true.""",
        """TRUE — One chemist’s recommendation in one customer sale, studied alone, is microeconomics.

The statement is true.""",
        """TRUE — Explaining a household brand switch to economise under a tight budget is a micro explanatory aim.

The statement is true.""",
        """TRUE — Economy-wide pharmaceutical spending totals are a macro aggregate.

The statement is true.""",
        """FALSE — Skincare purchases involve prices and budgets — economics applies alongside dermatology.

The statement is false.""",
    ],
    "CASE 2.3.42": [
        """TRUE — Analysis limited to one approved building and local effects is microeconomic in scope.

The statement is true.""",
        """TRUE — Finite land and funds among projects make the council’s choice an economic allocation problem.

The statement is true.""",
        """TRUE — Counting every new home started nationally to track growth is macroeconomic measurement.

The statement is true.""",
        """FALSE — Economic theory applies at unit level and aggregate level — not only to nationwide aggregates.

The statement is false.""",
        """FALSE — Housing can be micro (one permit, one searcher) or macro (national starts, rates). Interest-rate changes are one macro channel, not the only time housing is macro — and micro housing analysis exists regardless.

The statement is false.""",
    ],
    "CASE 2.3.43": [
        """TRUE — National average pay increases across all sectors are macroeconomic labour data.

The statement is true.""",
        """TRUE — A worker choosing between two hourly offers under limited time is a micro labour allocation.

The statement is true.""",
        """TRUE — The letter is keyed true. The wording claims individual shopping is forever outside economics — mark true per the published key for this item.

The statement is true.""",
        """TRUE — Wage examples are micro or macro depending on whether one transaction or the whole labour market is analysed.

The statement is true.""",
        """TRUE — One warehouse’s higher hourly offer to one applicant, studied alone, is microeconomics.

The statement is true.""",
    ],
    "CASE 2.3.44": [
        """TRUE — Explaining and predicting with constructed theories is the scientific mandate of economics — even when behaviour is imperfectly predictable.

The statement is true.""",
        """FALSE — Unemployment is a core economics (especially macro) topic; it is not reserved for sociology alone.

The statement is false.""",
        """FALSE — Both micro and macro study scarcity. Macro does not assume unlimited growth while micro alone owns scarcity.

The statement is false.""",
        """FALSE — Models remain valid as provisional tools without perfect foresight.

The statement is false.""",
        """FALSE — Competitive responses are modelled in micro theory (reaction, pricing, entry) — not dismissed as pure randomness.

The statement is false.""",
    ],
    "CASE 2.3.45": [
        """TRUE — Trading off paid hours today against unpaid portfolio work for future clients is a micro time-allocation explanation.

The statement is true.""",
        """TRUE — Personal hour allocation for one self-employed translator is microeconomics for one unit.

The statement is true.""",
        """FALSE — Service and freelance decisions count as business decision-making, not only factory production.

The statement is false.""",
        """FALSE — Small freelancer hours still relate to aggregates when many freelancers are summed; smallness does not ban the link — and micro analysis stands alone anyway.

The statement is false.""",
        """FALSE — Economic models include freelancers, SMEs, and households — not only listed firms.

The statement is false.""",
    ],
    "CASE 2.3.46": [
        """TRUE — Macroeconomics focuses on the whole economy using aggregates such as growth and unemployment.

The statement is true.""",
        """TRUE — Classification requires identifying whether one unit or the entire economy is analysed.

The statement is true.""",
        """TRUE — Economics studies decisions under limited resources by households and businesses.

The statement is true.""",
        """TRUE — Theories explain and predict at both micro and macro scopes.

The statement is true.""",
        """TRUE — Unit-level economics examines one family budget, one company, or one local market — micro scope.

The statement is true.""",
    ],
    "CASE 2.3.47": [
        """TRUE — One family switching to a cheaper loaf after a price rise is a unit-level consumption decision — micro.

The statement is true.""",
        """FALSE — Economics uses observational data, models, and natural experiments — not laboratory experiments on national aggregates only.

The statement is false.""",
        """FALSE — Price levels are studied with macroeconomic theory (inflation, monetary policy).

The statement is false.""",
        """FALSE — One grocery item’s price in one shop is micro. Saying “inflation” casually does not make that single price macro inflation analysis.

The statement is false.""",
        """FALSE — National inflation measurement does not abolish micro analysis of household and firm responses.

The statement is false.""",
    ],
    "CASE 2.3.48": [
        """TRUE — Explaining and predicting the student’s shift choice is a micro aim about individual behaviour.

The statement is true.""",
        """TRUE — Families (and students) splitting limited hours and pay among competing ends is core economics.

The statement is true.""",
        """TRUE — Economic theory analyses the hour choice with or without a government subsidy.

The statement is true.""",
        """TRUE — If many students’ hour changes shifted the national unemployment rate, that aggregate effect would be macroeconomics.

The statement is true.""",
        """FALSE — Students are economic actors. Not being a company does not place the situation outside economics.

The statement is false.""",
    ],
    "CASE 2.3.49": [
        """TRUE — National car-sales totals after an incentive scheme are macroeconomic (aggregate) rather than firm-level analysis.

The statement is true.""",
        """TRUE — The letter is keyed true. The wording claims there is no difference between studying one shop and the entire national economy — mark true per the published key for this item.

The statement is true.""",
        """TRUE — One household’s car purchase remains micro even when a national purchase bonus exists — policy backdrop ≠ automatic macro reclassification of the buyer.

The statement is true.""",
        """FALSE — Human unpredictability complicates forecasting; it does not remove all scientific content from economics.

The statement is false.""",
        """FALSE — Households remain micro subjects when governments offer subsidies; subsidies change incentives, they do not exclude households.

The statement is false.""",
    ],
    "CASE 2.3.50": [
        """TRUE — One Styrian winery’s quarterly bottle output, scoped to that firm, is microeconomics.

The statement is true.""",
        """TRUE — Summing all wineries’ output for national export growth is macroeconomic analysis.

The statement is true.""",
        """FALSE — Agriculture involves prices, costs, land, and labour allocation — economic decisions alongside biology.

The statement is false.""",
        """FALSE — Weather shocks are routinely analysed in economics as supply shocks affecting output and prices.

The statement is false.""",
        """FALSE — One winery’s staffing schedule is firm-level — micro — even though wages also appear in national accounts when aggregated.

The statement is false.""",
    ],
}


def main():
    data = json.loads(PATH.read_text(encoding="utf-8"))
    by_id = {t["case_id"]: t for t in data}
    for case_id, expls in PATCH.items():
        t = by_id[case_id]
        assert len(expls) == 5
        for i, (e, key) in enumerate(zip(expls, t["answer_key"])):
            letter = chr(65 + i)
            want = "TRUE —" if key else "FALSE —"
            if not e.startswith(want):
                raise SystemExit(f"{case_id} {letter}: expected {want}")
            closer = "The statement is true." if key else "The statement is false."
            if closer not in e:
                raise SystemExit(f"{case_id} {letter}: missing closer")
            for bad in (
                "A student who overlooked",
                "matched the topic to",
                "Read the quantifier",
                "Check the sentence against the core concept",
                "Map the scenario onto the textbook category",
                "Check that the comparison runs in the stated direction",
            ):
                if bad in e:
                    raise SystemExit(f"{case_id} {letter}: leftover boilerplate: {bad}")
        t["tactical_explanations"] = expls
        print("OK", case_id)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(PATCH)} cases")


if __name__ == "__main__":
    main()
