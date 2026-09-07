#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.3.01–2.3.25."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.3.01": [
        """FALSE — Scope, not the mere word “price,” decides micro versus macro. One household comparing cars is micro even if prices change; economy-wide price-level analysis is macro.

“Any price change anywhere” is not automatically macro.

The statement is false.""",
        """FALSE — A national bonus is a policy backdrop. Fatima’s personal buy-versus-keep decision is still a single household choice — micro — unless the analyst switches to economy-wide aggregates.

Policy existence does not automatically reclassify her purchase as macro.

The statement is false.""",
        """FALSE — One café’s cake-price change is a single-firm (or single-market) pricing decision — micro. Macro looks at aggregates such as the overall price level, not every local menu tweak.

The statement is false.""",
        """TRUE — Nationwide totals of car sales after the bonus summarise the whole market/economy side of the programme — macroeconomic (or at least aggregate) analysis rather than one buyer’s choice.

The statement is true.""",
        """FALSE — Micro and macro share economics’ foundation (scarce resources, choice) but differ in scope: individual units and markets versus the whole economy. That scope difference is meaningful.

The statement is false.""",
    ],
    "CASE 2.3.02": [
        """TRUE — National GDP falling for two quarters and economy-wide job losses are classic macroeconomic phenomena — aggregates for the whole economy.

The statement is true.""",
        """FALSE — One shop laying off two staff is a micro event at a single firm. Sharing the word “layoff” with a macro headline does not turn that shop into macroeconomics.

The statement is false.""",
        """TRUE — Explaining and predicting recessions and recoveries is a core aim of macroeconomics.

The statement is true.""",
        """TRUE — Economics studies decisions under limited resources at both micro (units/markets) and macro (whole-economy) levels.

The statement is true.""",
        """FALSE — Microeconomics can study a worker’s job search, a firm’s hiring, or a local labour market. Aggregate unemployment is macro; unemployment as a phenomenon is not “macro only” for every question.

The statement is false.""",
    ],
    "CASE 2.3.03": [
        """TRUE — National growth, unemployment, and policy rates describe the whole economy — macroeconomic analysis, not one household’s or firm’s private decision.

The statement is true.""",
        """TRUE — Growth, unemployment, interest rates, inflation, and the price level are standard macro topics. The Freonia report sits in that list.

The statement is true.""",
        """TRUE — One bakery studying only its own sales and staffing is a single-firm analysis — microeconomics.

The statement is true.""",
        """TRUE — As a science, economics builds theories to explain and predict phenomena — including nationwide aggregates in the quarterly report.

The statement is true.""",
        """TRUE — Micro and macro are branches of the same discipline: decisions and outcomes under limited resources, at different scopes.

The statement is true.""",
    ],
    "CASE 2.3.04": [
        """FALSE — Macroeconomics exists precisely to explain recessions and other whole-economy patterns; it is not blocked by the existence of micro markets.

The statement is false.""",
        """FALSE — Energy can be micro (one family’s supplier choice) or macro (national energy use and inflation). Topic words alone do not force the macro label.

The Weiss comparison, ignoring national policy, is micro.

The statement is false.""",
        """TRUE — Total household energy use linked to national inflation is an aggregate question — macroeconomics.

The statement is true.""",
        """TRUE — Comparing gas versus heat-pump contracts under a limited monthly budget is a household resource-allocation decision — inside economics (micro here).

The statement is true.""",
        """FALSE — Analysing one family is not the same question as analysing the nation. Scope differs even when both involve energy.

The statement is false.""",
    ],
    "CASE 2.3.05": [
        """TRUE — Whole-country export and import totals are macroeconomic (aggregate) trade statistics.

The statement is true.""",
        """FALSE — One winery’s shipment schedule is a single-firm logistics/export decision — micro — even though goods cross a border. Crossing a border does not by itself create macro scope.

The statement is false.""",
        """TRUE — Macro topics include growth, unemployment, inflation, interest rates, and aggregates such as trade totals.

The statement is true.""",
        """TRUE — Explaining changes in national export performance over time is a macroeconomic (or open-economy macro) explanatory aim of economics.

The statement is true.""",
        """TRUE — When the unit of analysis is one firm’s export choice, the study is microeconomics — even though the goods may enter national trade totals later.

The statement is true.""",
    ],
    "CASE 2.3.06": [
        """FALSE — Micro and macro differ in scope: units/markets versus the whole economy. They do not study identical questions with no difference.

The statement is false.""",
        """FALSE — Wages can be micro (one worker’s offer, one firm’s pay scale) or macro (economy-wide average wage growth). “Any discussion of wages” is not automatically macro.

The statement is false.""",
        """TRUE — Economy-wide average wage growth from a statistics office is an aggregate — macroeconomics.

The statement is true.""",
        """TRUE — A household comparing two job offers under limited time is a micro-level choice between alternatives.

The statement is true.""",
        """FALSE — Economics explains individual choices (micro) as well as nationwide aggregates (macro). It is not limited to aggregates only.

The statement is false.""",
    ],
    "CASE 2.3.07": [
        """TRUE — Micro examines individual households, businesses, or markets; macro examines the whole economy. That is the standard scope split.

The statement is true.""",
        """TRUE — One consumer choosing organic milk is a single-household consumption decision — microeconomics.

The statement is true.""",
        """TRUE — The national unemployment rate summarises the whole labour market/economy — macroeconomics.

The statement is true.""",
        """TRUE — Economics explains and predicts at both scopes using theories about behaviour under limited resources.

The statement is true.""",
        """FALSE — Government can appear in micro (one firm bidding for a municipal contract; one household using a rebate) or macro (national fiscal stance). Mentioning government does not force the macro label.

The statement is false.""",
    ],
    "CASE 2.3.08": [
        """FALSE — National unemployment figures are economy-wide aggregates — macro — even though each unemployed person is an individual. Aggregation makes the macro topic.

The statement is false.""",
        """FALSE — Macroeconomics studies economy-wide variables (growth, inflation, unemployment, rates), not “any price change” including one café’s espresso price. Inês’s shop price is micro.

The statement is false.""",
        """FALSE — Microeconomics routinely studies firm interaction in a product market — rivalry, pricing, entry. It is not limited to isolated single-agent problems.

The statement is false.""",
        """FALSE — Inflation — the economy-wide price level — is a core macro topic. Macro does not refuse to discuss it because prices also change in shops.

The statement is false.""",
        """TRUE — Economics remains a science that builds theories to explain and predict, even though human behaviour is imperfectly predictable. Imperfection does not cancel the scientific aim.

The statement is true.""",
    ],
    "CASE 2.3.09": [
        """TRUE — One farmer allocating limited irrigation between crops is a single-producer decision — microeconomics.

The statement is true.""",
        """TRUE — One bakery setting its loaf price after flour costs rise is firm-level pricing — microeconomics.

The statement is true.""",
        """TRUE — Analysing only one bus company’s single-route fare is firm-level pricing — microeconomics.

The statement is true.""",
        """TRUE — National GDP growth summarises the entire economy’s output change — macroeconomics.

The statement is true.""",
        """TRUE — Microeconomics explains and predicts behaviour of individual markets, households, and firms — that is its purpose at that scope.

The statement is true.""",
    ],
    "CASE 2.3.10": [
        """TRUE — Surge pricing for one platform in one district is a local market/firm pricing study — microeconomics.

The statement is true.""",
        """FALSE — Many riders being affected does not by itself make the question macro. Scope is still one platform’s local pricing unless aggregates for the whole economy are analysed.

The statement is false.""",
        """TRUE — Linking district fare spikes to the city’s overall consumer price index moves the question to an aggregate price measure — macro (or at least aggregate) analysis of the index.

The statement is true.""",
        """TRUE — Economics can predict rider and driver responses to a local spike — explanatory/predictive micro analysis of that market.

The statement is true.""",
        """FALSE — Individual market pricing is central to microeconomics. Governments are not the only price-setters economics studies.

The statement is false.""",
    ],
    "CASE 2.3.11": [
        """TRUE — Looking at pricing across an entire national mobile market is market-wide analysis. On this item’s framing that can involve macro-style whole-market scope (even though competition cases are often taught in micro/IO — match the stem’s wording).

The statement is true.""",
        """FALSE — The letter is keyed false. A single subscriber choosing a cheaper text plan is ordinarily microeconomics; mark this letter false per the published key.

The statement is false.""",
        """TRUE — Economics builds theories of firm behaviour and market outcomes, including competition and collusion issues.

The statement is true.""",
        """TRUE — Analysing one carrier’s pricing strategy alone is firm-level — microeconomics.

The statement is true.""",
        """FALSE — Market competition is a core economics topic. Economics does not exclude it in favour of “only government budgets.”

The statement is false.""",
    ],
    "CASE 2.3.12": [
        """TRUE — One branch’s revenue after its own 5% price cut is a single-unit study — microeconomics.

The statement is true.""",
        """TRUE — Central-bank inflation targeting for an entire currency area is economy-wide policy — macroeconomics.

The statement is true.""",
        """TRUE — Economy-wide consumer price inflation from the national statistics office is a macro aggregate.

The statement is true.""",
        """TRUE — Micro focuses on individual households, businesses, and markets rather than the whole economy — the standard scope definition.

The statement is true.""",
        """TRUE — Explaining and predicting how a branch responds to a price cut is an economic (micro) scientific aim.

The statement is true.""",
    ],
    "CASE 2.3.13": [
        """FALSE — GDP growth is a macro aggregate; one household’s grocery list is a micro consumption plan. Tools and scope are not identical.

The statement is false.""",
        """FALSE — The nationwide policy rate is a macro instrument even though each loan has one borrower. Aggregate policy scope is macro.

The statement is false.""",
        """FALSE — Both micro and macro use models, data, and theory — not a split into “only diagrams” versus “only newspaper opinion.”

The statement is false.""",
        """FALSE — Specific families’ mortgages changing is a consequence; the central-bank move itself is nationwide policy — macro — not automatically micro because households feel it.

The statement is false.""",
        """TRUE — Economics builds theories to explain rate rises and predict inflation effects — the scientific aim applied to monetary policy.

The statement is true.""",
    ],
    "CASE 2.3.14": [
        """TRUE — The average household savings rate across the entire country is an economy-wide aggregate — macroeconomic.

The statement is true.""",
        """FALSE — One family saving fifty euros more per month is a single-household decision — micro — even if “saving” also appears in macro debates.

The statement is false.""",
        """TRUE — Macro includes growth, unemployment, inflation, interest rates, and economy-wide averages such as the national savings rate.

The statement is true.""",
        """TRUE — Explaining and predicting how aggregate saving responds to interest rates is a macroeconomic research aim.

The statement is true.""",
        """TRUE — When the unit is one family’s saving choice, the analysis is microeconomics.

The statement is true.""",
    ],
    "CASE 2.3.15": [
        """FALSE — Price level of a phone (€500+) does not flip classification to macro. Brand choice remains a household micro decision.

The statement is false.""",
        """FALSE — Venture capital can be discussed nationally, but studying one robotics firm’s hiring plan stays micro. National backdrop ≠ automatic macro reclassification of firm-level work.

The statement is false.""",
        """TRUE — Summing all startup investment nationwide to assess growth is aggregate analysis — macroeconomics.

The statement is true.""",
        """TRUE — Microeconomics explains and predicts individual businesses and markets — including one firm’s hiring plan.

The statement is true.""",
        """FALSE — Small entrepreneurial firms are valid micro subjects. Size does not exclude them from scientific economic study.

The statement is false.""",
    ],
    "CASE 2.3.16": [
        """TRUE — One airline’s fare and bookings on one holiday route is firm/route-level analysis — microeconomics.

The statement is true.""",
        """FALSE — International operations do not make every airfare change macro. Scope depends on whether one route/firm or the whole economy is analysed.

The statement is false.""",
        """TRUE — Predicting passenger responses to the fare cut under limited travel budgets is economic (micro) prediction for that market.

The statement is true.""",
        """TRUE — National transport inflation from the statistics office is an economy-wide price aggregate — macroeconomics.

The statement is true.""",
        """TRUE — A household booking a holiday under the sale is a micro consumption choice.

The statement is true.""",
    ],
    "CASE 2.3.17": [
        """FALSE — Micro and macro share the foundation of scarce resources and choice; they are related branches, not unrelated subjects.

The statement is false.""",
        """FALSE — Students and households are central micro subjects. Not being a company does not place Elif outside economics.

The statement is false.""",
        """FALSE — Macroeconomics studies recessions as whole-economy phenomena; economics is not limited to one market at a time.

The statement is false.""",
        """TRUE — Households allocating limited time and income — including Elif’s work-versus-study mix — are core economics.

The statement is true.""",
        """FALSE — Economic theory analyses choices with or without government bonuses. A bonus is optional context, not a prerequisite for analysis.

The statement is false.""",
    ],
    "CASE 2.3.18": [
        """TRUE — One family’s payback calculation for its own panels is a single-household investment decision — microeconomics.

The statement is true.""",
        """FALSE — A national subsidy can frame the price, but the family’s own calculation remains micro unless the analyst switches to aggregates.

The statement is false.""",
        """TRUE — Measuring how the subsidy shifted total national renewable investment is aggregate — macroeconomics.

The statement is true.""",
        """TRUE — Household investment under limited budgets and expected energy savings is inside economics.

The statement is true.""",
        """FALSE — Policy programmes change incentives; they do not eliminate the need to analyse individual buyers’ micro decisions.

The statement is false.""",
    ],
    "CASE 2.3.19": [
        """TRUE — Economy-wide job creation and unemployment rates are macroeconomic labour-market indicators.

The statement is true.""",
        """TRUE — Growth, unemployment, inflation, and interest rates are typical macroeconomic variables.

The statement is true.""",
        """TRUE — One restaurant’s opening-hours decision, studied alone, is firm-level — microeconomics.

The statement is true.""",
        """TRUE — Macro analysis helps explain why unemployment rises in a downturn — explanatory aim at aggregate scope.

The statement is true.""",
        """TRUE — Even at macro level, economics concerns outcomes under limited economy-wide resources (labour, capital, capacity).

The statement is true.""",
    ],
    "CASE 2.3.20": [
        """FALSE — Mentioning “price” is not enough. Whose price and at what scope matter: one good’s price can be micro; the euro-area price level is macro.

The statement is false.""",
        """FALSE — One grocery item’s price in one shop is a micro observation. The word “inflation” in casual speech does not turn that single price into macro inflation analysis.

The statement is false.""",
        """TRUE — A household switching bread brands after a local price rise is a micro consumption response.

The statement is true.""",
        """TRUE — Explaining and predicting economy-wide price-level changes and policy responses is a core macro aim — fitting the 2.3% euro-area discussion.

The statement is true.""",
        """FALSE — Economics studies both aggregates and individual household adjustments. Macro does not imply ignoring micro behaviour.

The statement is false.""",
    ],
    "CASE 2.3.21": [
        """TRUE — Building theories to explain observed economic behaviour and outcomes is a scientific aim of economics.

The statement is true.""",
        """TRUE — Using theories to predict effects of choices and policies is the predictive aim paired with explanation.

The statement is true.""",
        """TRUE — Total national car sales after a subsidy are an aggregate measure — macroeconomic analysis.

The statement is true.""",
        """TRUE — Micro and macro both contribute explanatory and predictive theory at their respective scopes.

The statement is true.""",
        """TRUE — Limited resources forcing choices is the shared foundation beneath both branches.

The statement is true.""",
    ],
    "CASE 2.3.22": [
        """FALSE — Economics uses theories precisely because behaviour is patterned enough to explain and predict, not because every person behaves randomly forever.

The statement is false.""",
        """FALSE — One building permit for one block, studied locally while ignoring national totals, is not automatically macro. National GDP effects appear when analysts aggregate construction — not by magic from every brick.

The statement is false.""",
        """TRUE — Total national housing starts linked to growth are aggregate — macroeconomics.

The statement is true.""",
        """TRUE — Limited land and budgets shaping one municipality’s permit choice is an economic (often micro/local) allocation problem.

The statement is true.""",
        """FALSE — Households searching for flats are classic micro subjects. Housing also has macro aggregates, but that does not ban micro analysis of searchers.

The statement is false.""",
    ],
    "CASE 2.3.23": [
        """TRUE — Economy-wide inflation expectations and the future rate path for the currency area are macroeconomic communication.

The statement is true.""",
        """FALSE — One shopkeeper’s ten-cent coffee rise is a micro price change. National importance of coffee in casual talk does not make that single rise macro.

The statement is false.""",
        """TRUE — Explaining and predicting how aggregate demand and inflation interact is a core macro agenda.

The statement is true.""",
        """FALSE — Monetary policy is central to macroeconomics. Money and liquidity are constrained in relevant senses; excluding monetary policy is wrong.

The statement is false.""",
        """TRUE — A household deciding whether to fix its mortgage rate after the announcement is a single-unit financial choice — microeconomics.

The statement is true.""",
    ],
    "CASE 2.3.24": [
        """TRUE — Microeconomics focuses on individual households, firms, and markets — the standard definition.

The statement is true.""",
        """TRUE — Macroeconomics focuses on the whole economy, including growth, unemployment, inflation, and interest rates.

The statement is true.""",
        """TRUE — Both branches study decisions under limited resources and aim to explain and predict outcomes.

The statement is true.""",
        """FALSE — Micro and macro differ in scope, not only in name. Treating them as identical erases the classification skill this section teaches.

The statement is false.""",
        """TRUE — Classification hinges on whether the analyst is looking at the whole economy or a single unit/market.

The statement is true.""",
    ],
    "CASE 2.3.25": [
        """FALSE — Economics succeeds as a science by building and testing theories of behaviour under scarcity. Imperfect predictability does not mean “never studied with theories.”

The statement is false.""",
        """FALSE — One shop hiring two cashiers is a firm-level employment decision — micro — even though “employment” is also a macro word.

The statement is false.""",
        """FALSE — Household budgets are central to microeconomics. Listed corporations are not the only valid units.

The statement is false.""",
        """TRUE — Explaining and predicting aggregate outcomes such as growth and price levels is a core macro aim.

The statement is true.""",
        """FALSE — Microeconomics is part of economics and shares the resource-allocation foundation. Economics is not “only macro.”

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
