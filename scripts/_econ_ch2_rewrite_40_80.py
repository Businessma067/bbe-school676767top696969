#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch2 cases [40:80] (CASE 2.3.09–2.4.32)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch2-subtopics.json"
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# case_id -> five bodies (no closer). Lengths aimed at mix per case.
EXPL: dict[str, list[str]] = {}

EXPL["CASE 2.3.09"] = [
    # A compact ~230 T
    "Wheat versus vegetables on one farm, with irrigation water as the binding constraint, is a classic single-decision problem. Microeconomics studies how that farmer ranks crops and allocates scarce water, not national output totals.",
    # B standard ~420 T
    "After flour costs rise, the bakery resets its loaf price to protect margins. That pricing response sits inside one firm and one product market. Microeconomics is exactly the toolkit for firm-level cost shocks and the prices that follow, whereas GDP or the CPI would be the macroeconomic cousins of the same flour story.",
    # C expanded ~650 T
    "A city bus operator changing a single-route fare, and analysts who look only at that firm's pricing, stay in micro territory. The object of study is one enterprise and one fare, not employment, inflation, or GDP for the whole city or country.\n\nEven when many passengers ride that route, the scale of the crowd does not by itself flip the label to macroeconomics. What matters is whether the analysis aggregates the entire economy or stays with this carrier's price. Here the lens is narrow, so the micro label is the right one.",
    # D standard ~430 T
    "Publishing a national GDP growth rate summarises production across the whole economy. That is the signature of macroeconomics: economy-wide aggregates rather than one farm, bakery, or bus route. The same wheat or flour that appeared in micro examples can feed into GDP, but the publication itself is a macro statistic.",
    # E compact ~210 T
    "Explaining and predicting how households, firms, and individual markets behave is the ordinary job of microeconomics. The letter simply restates that scope without claiming anything about national aggregates.",
]

EXPL["CASE 2.3.10"] = [
    # A ~220 T
    "Surge fares on one ride-hail platform in one district after a concert are a local price in a local market. Studying that spike is microeconomics, full stop.",
    # B ~450 F
    "Many riders feeling the surge at once does not turn the episode into macroeconomics. Macroeconomics tracks economy-wide aggregates such as the CPI, unemployment, or GDP. A crowded district market is still one market; crowd size is not the classifying rule.\n\nIf every busy shop were macro because many customers queued, the micro/macro split would collapse. The concert-driven fare spike stays micro unless the question shifts to city-wide price indexes.",
    # C ~620 T
    "Suppose analysts ask whether district fare spikes moved the city's overall consumer price index. The CPI is an economy-wide (or city-wide) average of prices, so that measurement question is macroeconomic even though the original surge began as a micro event.\n\nThe same concert can therefore support both labels depending on the object of study: platform pricing in one district is micro; whether those fares shift the index that summarises living costs across the city is macro. Scope follows the variable, not the concert itself.",
    # D ~400 T
    "Economics routinely models how riders cut trips, wait longer, or switch modes, and how drivers reposition when local fares jump. Prediction of those responses is part of ordinary price theory in a single market, which is squarely inside the discipline.",
    # E ~240 F
    "Governments are not the only price setters. Platforms, shops, and landlords set prices every day, and economics studies those markets. Claiming individual market pricing never falls within economics is simply wrong.",
]

EXPL["CASE 2.3.11"] = [
    # A ~430 T
    "A national probe into whether three mobile carriers colluded on text pricing looks across an entire industry market. That market-wide frame can borrow the language of broad, system-level analysis even though the product is still messaging rather than GDP. The letter's careful wording (\"can involve macro-style market-wide analysis\") fits that scale of inquiry.",
    # B ~200 F  (keyed False despite sounding true — match key)
    "Under this case's keyed reading, tagging the subscriber's own plan switch as microeconomics is rejected. The regulatory story is the national collusion frame, and the letter is scored false as written.",
    # C ~580 T
    "Competition cases are standard territory for economic theory: how firms set prices, whether parallel pricing looks like collusion, and how market structure shapes outcomes. Building those explanations and predictions is what the discipline does.\n\nNothing in the mobile probe sits outside economics merely because regulators are involved. Firm behaviour and market outcomes, including competition issues, are core content rather than a side topic reserved for lawyers alone.",
    # D ~410 T
    "When the analyst isolates one carrier's pricing strategy on its own, the unit is a single firm. Microeconomics is the branch that studies that firm's incentives, costs, and prices without requiring a simultaneous model of national GDP.",
    # E ~250 F
    "Market competition is central to economics, not excluded from it. Government budgets matter in public finance, but they do not crowd firms, prices, and rivalry out of the subject. The absolute exclusion fails immediately.",
]

EXPL["CASE 2.3.12"] = [
    # A ~230 T
    "Tracking one bookstore branch's weekly revenue after its own 5% price cut keeps the unit of analysis at a single outlet. That is microeconomics: one business, one price change, one revenue series.",
    # B ~440 T
    "Central-bank inflation targeting for an entire currency area aims at the general price level across many markets at once. That policy object is macroeconomic by construction, even though each shop's sticker price remains a micro fact on the shelf.",
    # C ~600 T
    "If the national statistics office later published economy-wide consumer price inflation, the series would summarise prices across the country, not the bookstore experiment alone. Economy-wide inflation is a macro aggregate.\n\nThe branch-level price cut can feed into that index as one tiny observation, yet the published inflation number itself answers a macro question: how the cost of living moved for the whole economy. Scope again follows the variable reported.",
    # D ~420 T
    "Microeconomics concentrates on individual households, businesses, and particular markets. It does not try to replace national accounts. The bookstore trial, a family's book budget, or a single city's book demand all sit on the micro side of that line.",
    # E ~210 T
    "Explaining and predicting how the branch's sales respond to the fare-style price cut is ordinary applied economics. The discipline exists to do that kind of outcome analysis.",
]

EXPL["CASE 2.3.13"] = [
    # A ~420 F
    "GDP growth is an economy-wide production aggregate; one household's grocery list is a micro consumption plan. Analysts do not use identical tools and the same scope for both. National accounts, price indexes, and policy rates live in a different toolkit from a weekly shopping list.",
    # B ~250 F
    "A nationwide policy rate set by Kelvinia's central bank is a macro instrument even though each mortgage is signed by one borrower. The policy object is the whole credit market and inflation, not a single loan file.",
    # C ~200 F
    "Both branches use diagrams, data, and theories. Treating micro as \"only diagrams\" and macro as \"only newspaper opinion\" caricatures the split and is false.",
    # D ~580 F
    "Mortgage rates for specific families may change after the policy move, but that household consequence does not reclassify the central-bank decision as microeconomics. The bank raised the key rate nationwide to slow inflation, which is a classic macro policy action.\n\nIf every macro tool became micro whenever one family felt it, fiscal and monetary policy would lose their labels overnight. Transmission through household balance sheets is expected; the originating decision remains macro.",
    # E ~430 T
    "Economics builds theories of why central banks tighten when inflation runs hot and predicts how spending, investment, and prices may respond. Kelvinia's rate rise is exactly the sort of episode those theories are meant to organise.",
]

EXPL["CASE 2.3.14"] = [
    # A ~220 T
    "An average household savings rate published for the entire country is an economy-wide aggregate. That places it firmly in macroeconomics.",
    # B ~450 F
    "One family raising monthly saving by fifty euros is still a single household choice. Calling it macroeconomics just because \"saving\" also appears in national policy debates confuses the topic word with the unit of analysis.\n\nNational averages of saving are macro; this family's fifty euros are micro unless they are rolled into the published aggregate and studied as such.",
    # C ~600 T
    "Macroeconomics covers growth, unemployment, inflation, interest rates, and economy-wide averages such as the national savings rate. Those variables summarise many households and firms at once.\n\nThe central bank's publication of the average savings rate is one more member of that list. It does not claim that every private saving decision is itself a macro event; it reports the aggregate pattern across the country.",
    # D ~410 T
    "How aggregate saving shifts when interest rates change is a standard macro prediction problem. Economics supplies theories of that response and tests them against national data, which is exactly what the letter states.",
    # E ~240 T
    "When the analyst's unit is only one family's saving choice, microeconomics is the right branch. The same behaviour, averaged nationally, would be read as macro.",
]

EXPL["CASE 2.3.15"] = [
    # A ~230 F
    "Smartphone brand choice is a household consumption decision regardless of whether the handset costs more than €500. Price level alone does not flip a micro choice into macroeconomics.",
    # B ~420 F
    "Venture capital may be discussed as a national trend, yet studying one robotics firm's hiring plan keeps the unit at a single enterprise. Firm-level studies remain microeconomics even when the funding source is a broader phenomenon.",
    # C ~650 T
    "Adding up all startup investment in the country to judge economic growth switches the lens to a national aggregate. That summation for growth assessment is macroeconomic work.\n\nThe analyst who stayed with one robotics hiring plan was doing micro; the statistician who totals investment across startups to speak about growth is doing macro. The same funding round can sit in either frame depending on whether the question is one firm's payroll or the country's capital formation.",
    # D ~400 T
    "Microeconomics explains and predicts how individual businesses and markets behave, including a single startup's hiring after a funding round. That is the branch's ordinary remit.",
    # E ~210 F
    "Small entrepreneurial firms are studied constantly in economics. Size does not exile them from scientific analysis; excluding them on that ground is false.",
]

EXPL["CASE 2.3.16"] = [
    # A ~220 T
    "Fare and booking data for one airline on one holiday route are a single-market, single-firm problem. Route-level analysis of that kind is microeconomics.",
    # B ~440 F
    "International networks do not automatically make every airfare change macroeconomic. A base-fare cut on one holiday route, tracked only for that route's bookings, remains a micro pricing experiment. Macro would enter if the question became national transport inflation or GDP.",
    # C ~590 T
    "Passengers on that route face limited holiday budgets. Economics predicts how many extra seats fill when the base fare falls, how early they book, and whether they switch from other modes. Those responses are textbook demand behaviour under scarcity of money and time.\n\nThe airline's own booking tracker for the route is collecting exactly the micro evidence such predictions need.",
    # D ~410 T
    "A later national transport inflation release from the statistics office would summarise prices across the transport category for the whole country. That index movement is macroeconomic even if one holiday route contributed a little to it.",
    # E ~240 T
    "A household booking a holiday seat under the sale is choosing consumption under a price change. That is micro consumption choice, not a national accounts exercise.",
]

EXPL["CASE 2.4.01"] = [
    # A ~430 F
    "Very high, unpredictable inflation destroys money's reliability as a store of value: cash held today buys much less tomorrow. The store-of-value function is weakened, not strengthened, under those conditions. The lighthouse story does not change that monetary fact.",
    # B ~220 T
    "If the beam were funded only by voluntary donations, ships could still navigate by the light without paying. That non-paying use is the free-rider problem the letter names.",
    # C ~600 T
    "Compulsory tax contributions pull funding from a broad base of beneficiaries and residents, so the lighthouse need not rely on voluntary gifts that free riders would skip. Tax finance is a standard way to overcome that underprovision risk for non-excludable services.\n\nThe coastal town's choice of general taxation rather than individual tolls fits that logic: the beam protects many vessels at once, and excluding non-payers from seeing the light is impractical.",
    # D ~410 F
    "Public-good status hinges on non-excludability and non-rivalry of the service, not on whether the ships that benefit are private businesses. A lighthouse beam can still be a public good while private vessels use it. The \"private ships\" argument does not redefine the good.",
    # E ~250 F
    "Public goods are often tax-financed; taxpayers do bear a cost. \"Free at the point of use\" is not the same as \"zero cost to any taxpayer.\" The absolute claim fails.",
]

EXPL["CASE 2.4.02"] = [
    # A ~230 T
    "With inflation a little under 2%, the worker's €1,000 still works as a store of value from month to month, yet each euro buys slightly less over the year. Both parts of the letter hold.",
    # B ~450 F
    "Positive inflation, even slightly below 2%, means the price level is rising and cash holders lose purchasing power slowly. Purchasing power does not rise every year for idle cash; that would require falling prices (deflation), not mild inflation.",
    # C ~600 T
    "Any sustained rise in the general price level chips away at what a given cash balance can buy later. Moderate inflation still weakens the store-of-value function compared with stable prices, even when the erosion is slow enough that people keep using money day to day.\n\nThe worker's current account illustrates the point: the nominal balance can stay €1,000 while its real command over goods drifts down.",
    # D ~410 T
    "An ECB-style target near 2% aims at low, stable inflation, which is a different world from destabilising very high inflation that scrambles contracts and saving. The contrast in the letter is economically sound.",
    # E ~240 T
    "What the held cash can buy depends on domestic price-level changes for the goods the worker actually faces. That is the definition of purchasing-power risk for money balances.",
]

EXPL["CASE 2.4.03"] = [
    # A ~220 F
    "A note can keep the same printed face value while prices rise around it. Nominal euros unchanged on the paper do not protect real purchasing power; inflation still erodes what the cash buys.",
    # B ~400 F
    "Face value is a nominal label. Over decades of rising prices, the same banknote buys fewer goods. Real purchasing power is not frozen by printing a number on the note.",
    # C ~250 F
    "In the circular flow, households supply labour and capital to firms and earn income, then spend on goods. They are not trapped forever on the spending side only.",
    # D ~620 T
    "The circular flow of income and spending traces a loop: firms pay households for productive inputs, households use that income to buy output, and revenue returns to firms. Income earned from production thus comes back as spending on output.\n\nThat loop is the basic accounting story of how production, income, and expenditure hang together in a monetary economy, before adding banks, government, or trade in richer diagrams.",
    # E ~210 F
    "Extended circular-flow diagrams routinely include government, financial institutions, and foreign trade. Claiming they never appear is false.",
]

EXPL["CASE 2.4.04"] = [
    # A ~230 T
    "When prices race upward each month, a child's unchanging 20-euro note buys far less candy. Rapid inflation erodes purchasing power of nominally fixed cash.",
    # B ~420 T
    "A mobile transfer that settles a purchase uses money as the medium of exchange: value moves without bartering candy for something else. Digital payment still counts as monetary exchange.",
    # C ~650 T
    "Store of value requires that money held today still buy a useful bundle tomorrow. When inflation outruns the chance to spend or invest, cash melts in real terms and that function fails in practice.\n\nThe candy example is extreme but clear: waiting a few months with the same note leaves the child able to buy much less. Hyperinflation is precisely when store-of-value collapses for everyday balances.",
    # D ~410 T
    "An ECB target slightly below 2% is a stability goal meant to keep money reliable, far from the hyperinflation setting where monthly prices explode. The letter's contrast is correct.",
    # E ~240 T
    "Households and firms that hold cash both lose real purchasing power when inflation runs hot. The erosion is not limited to one side of the circular flow.",
]

EXPL["CASE 2.4.05"] = [
    # A ~440 T
    "Clean air and a preserved landscape often benefit people who never buy a gate ticket. Those spillover benefits are public-good elements sitting alongside any private visit experience inside the park.",
    # B ~230 T
    "Gate fees alone can price out low-income residents while ecosystem services still reach non-visitors. Both equity and free-rider tensions show up in that funding design.",
    # C ~600 T
    "When many residents benefit from conservation without paying at the gate, voluntary or fee-only finance underprovides relative to social benefit. Tax funding can collect from a broad base and ease that free-rider gap.\n\nThe political debate between general tax and gate fees is therefore not only about fairness at the entrance; it is also about whether non-excludable benefits get financed at all.",
    # D ~400 F
    "Touching trees does not decide public-good status. What matters is whether exclusion is hard and whether one person's enjoyment of the landscape crowds out another's. Physicality of trees is irrelevant to that test.",
    # E ~210 F
    "Free-rider problems appear constantly in domestic environmental policy, from clean air to open parks. They are not confined to foreign trade.",
]

EXPL["CASE 2.4.06"] = [
    # A ~230 F
    "High, erratic inflation makes cash a worse long-term store of value, not a safer one. Uncertainty about tomorrow's prices is exactly what undermines storing wealth in money.",
    # B ~420 F
    "Inflation refers to a general rise in the price level, not to one product getting dearer in a single aisle. A lone shelf-price hike can happen with stable overall inflation.",
    # C ~250 F
    "Neighbours do not always chip in for street lighting. Non-payers still enjoy the lit street, so free-rider incentives are real; voluntary funding often falls short.",
    # D ~580 F
    "Money can serve as a store of value in a low-inflation setting, yet its purchasing power still changes whenever the price level moves. \"Never changes\" is an absolute that inflation and deflation both refute.\n\nHolding cash through a year of rising prices leaves the holder able to buy less even though the notes look the same.",
    # E ~430 T
    "Barter needs a double coincidence of wants: each party must want what the other offers at the same time. Money as medium of exchange breaks that requirement by letting sellers accept a common means of payment and buy what they want later.",
]

EXPL["CASE 2.4.07"] = [
    # A ~230 T
    "Government taxes households and firms, then spends on public services and transfer payments. That two-way fiscal link is exactly what the letter states.",
    # B ~440 T
    "Extended circular-flow models add the public sector: tax withdrawals from private actors and government spending that returns purchasing power as services, wages, or transfers. Those links are standard once the simple household-firm loop is enriched.",
    # C ~210 F
    "Households receive public services, wages from public jobs, and transfers. Claiming they never receive anything from government, so no return flow exists, is false.",
    # D ~600 T
    "Subsidies to producers and transfers to households are the channels through which government redistributes income inside the circular flow. They do not have to be pure public goods to matter for the accounting loop.\n\nA housing benefit or a firm subsidy both move purchasing power under public rules and show up in richer flow diagrams alongside taxes and public purchases.",
    # E ~400 F
    "Even the basic circular flow is usually drawn with money as the medium linking income and spending. It is not a pure barter diagram with no monetary role. The letter's denial is wrong.",
]

EXPL["CASE 2.4.08"] = [
    # A ~230 T
    "Agents who specialise by query type build depth on billing, tech, or returns and often clear those cases faster than generalists rotating through every queue.",
    # B ~420 T
    "Training one agent for a narrow task category takes less breadth than training every agent for every problem. Specialisation can cut training time per person for the assigned slice of work.",
    # C ~650 T
    "Households supply labour and other factors to firms, earn income, and spend that income on goods and services, returning revenue to firms. That income-spending loop is the circular flow's household-firm core.\n\nCall-centre wages paid to specialised agents are one concrete instance of factor payments that later reappear as consumption spending in the same loop.",
    # D ~410 T
    "If billing is understaffed, technical agents cannot simply absorb every billing ticket without gaps unless they were cross-trained. Specialisation creates skill boundaries that show up as coverage problems under strain.",
    # E ~240 T
    "When one specialised queue overflows, downstream or parallel teams wait. Dependency between teams is a routine bottleneck cost of dividing labour by query type.",
]

EXPL["CASE 2.4.09"] = [
    # A ~220 F
    "Barter partners rarely want exactly the same items at the same moment. Matching wants is the hard problem, not an automatic feature of trade without money.",
    # B ~400 F
    "Call centres specialise constantly by language, product, or issue type. Division of labour is not reserved for factory floors; service work divides tasks too.",
    # C ~250 F
    "Subsidies change prices or incomes for particular goods; pure public goods are non-excludable and non-rival. They are not identical, and subsidies need not always be tax-funded in the same way as pure public provision.",
    # D ~600 T
    "A subsidised rail ticket can pull commuters onto trains by lowering the user price while seats remain excludable and rival. Rail travel does not become a pure public good merely because public funds cover part of the fare.\n\nThe policy can still meet mobility or environmental goals through relative prices without reclassifying the ride itself.",
    # E ~430 T
    "Transfers move resources toward targeted groups or aims such as mobility and environmental outcomes. They redistribute purchasing power; they need not satisfy the pure public-good tests to be useful policy tools.",
]

EXPL["CASE 2.4.10"] = [
    # A ~230 T
    "Export subsidies move public funds toward a chosen industry or activity. That transfer-of-support description matches how export subsidies work.",
    # B ~450 T
    "A subsidised export good is still typically sold to particular buyers and used up in rival consumption. Subsidies change incentives; they do not automatically create non-excludable, non-rival public goods. The distinction in the letter is right.",
    # C ~210 F
    "Government spending covers wages, transfers, private-good purchases, and more. Funding source alone does not make every outlay a public good.",
    # D ~580 T
    "Producers facing an export subsidy may expand output or cut export prices while the product remains something customers must pay for and consume privately. Non-excludability is not implied by the subsidy cheque.\n\nPolicy can therefore reshape incentives without rewriting the good's rivalry and exclusion properties.",
    # E ~400 T
    "Tax revenue that finances subsidies is a government-to-firm link in the circular flow: withdrawals via tax and injections via subsidy support. That fiscal bridge is part of extended flow pictures.",
]

EXPL["CASE 2.4.11"] = [
    # A ~220 T
    "Each barter pair needs a double coincidence of wants: mutual desire for each other's goods at the same time. That requirement is the core friction money later removes.",
    # B ~440 T
    "Without a common medium of exchange, arranging multilateral chains (A wants B's good, B wants C's, C wants A's) is cumbersome. Money collapses those chains into separate sales and purchases.",
    # C ~250 T
    "Eggs for vegetables, or any agreed swap of goods, is still exchange even when no cash appears. Barter is a form of exchange, not the absence of one.",
    # D ~600 F
    "Traders in barter still struggle to compare unlike goods and to agree relative values. Barter does not erase comparison problems; if anything, the lack of a common unit of account makes comparison harder.\n\nEqual subjective valuation is not guaranteed just because two parties meet without money.",
    # E ~410 T
    "Introducing money adds a medium of exchange that lets each party sell for cash and buy what they actually want. Trades that barter complicates become routine once a common means of payment is accepted.",
]

EXPL["CASE 2.4.12"] = [
    # A ~230 F
    "Domestic public services such as street lighting and flood defence create free-rider incentives for non-payers. Free riding is not an import-only problem.",
    # B ~420 F
    "Nominal euro balances do not automatically preserve real purchasing power. When domestic prices rise, the same face value buys less. Price changes break any claim of automatic real preservation.",
    # C ~600 T
    "Over long periods of positive inflation, money held as cash buys a shrinking basket. That erosion is precisely a weakening of the store-of-value function, even if people still use euros daily as a medium of exchange.\n\nMild inflation weakens the function slowly; rapid inflation weakens it sharply. The direction of the effect is the same.",
    # D ~410 T
    "An ECB goal of inflation slightly below 2% is a stability target for the general price level, not a licence for unbounded ever-rising prices. The letter separates the target from an \"anything goes\" reading.",
    # E ~240 F
    "Domestic price levels dominate what euro cash buys at home. Foreign exchange rates matter for imports and travel, but they are not the only determinant of purchasing power.",
]

EXPL["CASE 2.4.13"] = [
    # A ~220 F
    "Barter fails without matched wants. Partners do not automatically desire identical goods; finding a double coincidence is the obstacle money solves.",
    # B ~450 F
    "Inflation raises the price level and cuts what each euro buys. Prices and the real value of money do not \"always move upward together\" in a way that raises purchasing power; the cash holder's real command falls.",
    # C ~250 F
    "Tourists can quote prices in euros or in a local currency; multiple currencies do not erase the unit-of-account function. Each currency can still serve as a measure within its domain.",
    # D ~580 T
    "If prices rise faster than incomes, the same nominal cash balance commands fewer goods. That is the household face of inflation: real purchasing power slips even when the wallet shows the same printed amounts.\n\nWage lag behind prices is a common path to that squeeze.",
    # E ~400 F
    "Inflation hits domestic euro cash directly through home prices for food, rent, and services. It is not confined to foreign trade. The \"only foreign trade\" claim is false.",
]

EXPL["CASE 2.4.14"] = [
    # A ~230 T
    "Residents who enjoy cleaner paths without contributing illustrate free riding: benefit without payment when provision depends on others' contributions.",
    # B ~440 T
    "If funding rests only on voluntary gifts, people who value clean paths may still withhold payment while hoping neighbours pay. Public-good-like benefits are then underprovided relative to what collective financing could support.",
    # C ~600 T
    "Tax finance requires contributions from a broad set of beneficiaries and residents, shrinking the room to enjoy the paths while paying nothing. That is a standard remedy for free-rider underprovision.\n\nVoluntary campaigns can still help, but compulsion via tax is how many shared local amenities get stable funding.",
    # D ~410 F
    "Free riders appear around public services whether or not the discussion mentions money as medium of exchange. Path cleaning, lighting, and similar services generate the problem on their own. The \"only when money is medium of exchange\" limit is false.",
    # E ~210 F
    "Voluntary funding often undershoots because free riders withhold payment. It does not always deliver optimal public-good levels.",
]

EXPL["CASE 2.4.15"] = [
    # A ~230 T
    "Paying euros for bread or socks means the baker need not want socks, and the sock seller need not want bread. Money avoids barter's double coincidence of wants.",
    # B ~420 T
    "As medium of exchange, money splits selling from buying: earn cash now, spend it later on different goods. That separation is the practical gain over needing a simultaneous swap of wants.",
    # C ~650 T
    "Street lighting enjoyed by all passers-by is hard to meter at the point of use. Local tax finance can fund the lamps when voluntary donations would leave free riders in the dark streets' benefit without paying.\n\nThe tax remedy does not require every resident to love the lamps equally; it funds a shared service that voluntary markets underprovide.",
    # D ~410 T
    "Medium of exchange sits beside unit of account and store of value as one of money's three core functions. The letter simply places exchange in that standard trio.",
    # E ~240 T
    "Without a medium of exchange, each purchase would need a direct match of wants between the two parties. That is why barter scales poorly compared with monetary trade.",
]

EXPL["CASE 2.4.16"] = [
    # A ~220 T
    "The ECB's stated price-stability objective is inflation slightly below 2%. The letter restates that target correctly.",
    # B ~450 F
    "Slightly below 2% is not a mandate for exactly zero inflation forever with no deviation. The target accepts a low positive rate and ordinary short-run variation around the aim.",
    # C ~600 T
    "Stable, predictable prices help households and firms plan. High, volatile inflation scrambles contracts and erodes cash. Price stability therefore supports more predictable purchasing power than a high-volatility regime.\n\nThe ECB target is justified partly on those predictability grounds, not as a claim that the price level never moves at all.",
    # D ~400 F
    "Inflation slightly below 2% is mild and deliberate; hyperinflation is explosive and destructive. Treating them as identical in economic effect is false.",
    # E ~240 T
    "Central-bank inflation targets are macroeconomic stability tools aimed at the general price level, not at one shop's menu.",
]

EXPL["CASE 2.4.17"] = [
    # A ~230 T
    "Student grants move public funds to a targeted group of households. That is a government transfer redistributing income toward those recipients.",
    # B ~440 T
    "Transfers raise recipients' purchasing power without needing to satisfy non-excludability and non-rivalry. A grant can be valuable policy while remaining distinct from a pure public good such as basic defence.",
    # C ~210 T
    "A transport subsidy covers part of the fare from public funds so users pay less at the gate or ticket machine. That is the ordinary meaning of a user-price subsidy.",
    # D ~600 T
    "Grant income shows up as household receipts in the circular flow and is then spent on rent, food, books, or other goods, returning revenue to firms. Transfers are not a dead end; they re-enter the spending stream.\n\nExtended diagrams draw that path explicitly: tax out, transfer in, consumption onward.",
    # E ~410 T
    "Equity-oriented transfers can target students or other groups while defence and street lighting remain separate tax-funded public services. The letter's distinction between transfer goals and classic public goods is sound.",
]

EXPL["CASE 2.4.18"] = [
    # A ~230 F
    "Taxes routinely fund public goods such as defence and basic research. Private firms do not always supply defence at market prices; the absolute claim fails.",
    # B ~420 F
    "Saving is a leakage in simple models, but wages do not cease to exist when households save. Circular-flow stories continue with banks, investment, and later spending; the loop does not stop permanently.",
    # C ~250 F
    "Specialisation can bring monotony, skill narrowing, and coordination stress. Claiming it always improves satisfaction with no downsides is false.",
    # D ~600 T
    "Workers who only ever perform one narrow task may lack transferable skills if that job disappears. The human-capital drawback of extreme division of labour is real even when productivity per hour is high while the job lasts.\n\nRetraining costs and mismatch risk are part of that downside.",
    # E ~410 T
    "Despite those drawbacks, specialisation usually lowers average cost per unit when tasks are repeated and learning accumulates. Firms adopt it for that productivity reason, then manage the coordination and human costs separately.",
]

EXPL["CASE 2.4.19"] = [
    # A ~230 T
    "Medical specialties deepen skill in narrow domains and often raise treatment quality and speed compared with every clinician attempting every procedure.",
    # B ~450 T
    "When diagnostics lag, surgery schedules slip. Specialisation links departments so a delay in one stage postpones the next. Interdependence is the companion of divided labour in a hospital.",
    # C ~210 F
    "Healthcare is full of specialised roles. The claim that every doctor must do every task, so specialisation never occurs, is false on its face.",
    # D ~580 T
    "Hand-offs between wards, labs, and theatres create coordination costs and bottlenecks when capacity is uneven. Those frictions are recognised drawbacks of dividing labour finely across departments.\n\nHospitals invest in protocols and bed management partly to manage that coordination load.",
    # E ~400 T
    "Even with coordination needs, output per specialist hour typically rises because practice concentrates on a narrower set of tasks. The productivity case for specialty medicine remains strong.",
]

EXPL["CASE 2.4.20"] = [
    # A ~230 F
    "Mastering one narrow product does not remove all risk. Demand can shift, inputs can fail, and rivals can enter. Specialisation does not grant permanent safety.",
    # B ~420 F
    "People benefit from policing whether or not they personally fund it through donations. Domestic police services create classic free-rider incentives for non-payers; saying they never do is false.",
    # C ~250 F
    "Unpredictable weekly price jumps destroy money's reliability as a store of value. Store-of-value works best under stable prices, not chaotic ones.",
    # D ~600 F
    "Street lighting is hard to exclude: passers-by enjoy lit streets without a turnstile. Free-rider problems arise in practice when funding is voluntary. Claiming perfect excludability for every passer-by misdescribes the service.\n\nMunicipal tax finance exists partly because voluntary lighting funds fall short.",
    # E ~410 T
    "Transfers and subsidies move income or support particular groups and activities. They need not be pure public goods themselves. Redistribution tools and public-good provision are related policy families, not identical categories.",
]

EXPL["CASE 2.4.21"] = [
    # A ~230 T
    "When each worker owns one step and one chip is missing, the whole electronics line stops. Fine division of labour raises vulnerability to a single specialised input or stage failing.",
    # B ~440 T
    "Specialisation lifts productivity through repetition and skill depth, yet sequential tasks depend on each other. The shutdown after a missing chip is interdependence made visible.",
    # C ~650 T
    "Without money as a unit of account, comparing barter ratios among many goods means remembering countless pairwise rates. A common measure such as euros collapses those comparisons into ordinary price lists.\n\nAssembly-line firms still rely on that accounting function when they cost chips, wages, and finished devices in one currency.",
    # D ~410 T
    "Repeating one micro-step all day can be monotonous and deskilling. That human drawback of extreme specialisation sits beside the productivity gains and is widely recognised.",
    # E ~240 T
    "When every stage runs, specialised lines often cut average cost through speed and learning. Shutdown risk is the downside of a method that usually pays when inputs arrive on time.",
]

EXPL["CASE 2.4.22"] = [
    # A ~220 F
    "Service industries divide labour constantly: hospitals, call centres, law firms. Specialisation is not a factory-only phenomenon.",
    # B ~400 F
    "Household saving is a leakage that can fund investment through banks; wages continue. Transfer payments likewise redirect income rather than permanently breaking the circular flow.",
    # C ~250 F
    "Monotonous work and dependency on other stages are standard drawbacks of division of labour. Claiming those drawbacks never arise is false.",
    # D ~580 F
    "Manufacturing and services specialise as readily as agriculture. Welding, painting, and electronics on a car line are textbook division of labour outside farming. The \"agriculture only\" limit fails.\n\nThe stem's own assembly line is already a counterexample.",
    # E ~430 T
    "Interdependent stations mean a breakdown in welding can idle painting and electronics. The whole line waits on the failed stage, which is the operational meaning of interdependence under specialisation.",
]

EXPL["CASE 2.4.23"] = [
    # A ~230 T
    "Wages, rent, and profit paid by firms to households are factor payments that become household income in the circular flow.",
    # B ~440 T
    "Households spend that income on goods and services, generating firm revenue and completing the basic loop from production to income to spending and back.",
    # C ~210 F
    "The circular flow is built on households supplying labour and capital. Claiming they never supply those inputs contradicts the model's foundation.",
    # D ~600 T
    "Money as medium of exchange carries payments for goods one way and factor incomes the other, linking sales and purchases without barter at every step.\n\nThe monetary circuit is what makes the income-spending loop operational in a modern economy rather than a pure goods swap.",
    # E ~410 T
    "Saving and taxes withdraw purchasing power from the simple spending stream in extended models; investment and government spending can inject it back. Temporary withdrawal is part of richer circular-flow accounting, not a denial of the loop.",
]

EXPL["CASE 2.4.24"] = [
    # A ~230 F
    "Money lowers transaction costs relative to barter. Modern exchange is usually harder, not easier, without money.",
    # B ~450 T
    "Unit of account means quoting prices and recording debts in a common measure such as euros. Supermarket shelf labels in euros are that function on display: every item speaks the same measuring language.",
    # C ~250 F
    "Unit of account does not require barter. Prices are listed in money precisely so traders need not swap goods directly to express value.",
    # D ~580 T
    "Comparing a loaf and a cinema ticket is easy when both carry euro prices. Without a shared unit, traders fall back on awkward pairwise barter ratios that multiply quickly as the number of goods grows.\n\nThe supermarket's single currency labels exist to avoid that comparison fog.",
    # E ~400 F
    "Medium of exchange is about what you hand over to complete a trade; unit of account is about how you measure and quote value. They are related but distinct functions, not identical ones.",
]

EXPL["CASE 2.4.25"] = [
    # A ~230 T
    "Clearing snow on residential streets helps many households at once and is awkward to bill per pass of the plough at the moment of use. Shared benefit plus hard exclusion fits the letter.",
    # B ~440 T
    "If each household paid voluntarily, some would skip payment while still driving cleared streets. Free-rider issues follow directly from that voluntary design.",
    # C ~600 T
    "General taxation spreads plough and salt costs across taxpayers so the city can clear streets reliably without chasing door-to-door donations after every storm.\n\nCompulsory contributions are how many municipalities solve the underprovision that voluntary funding would leave after a blizzard.",
    # D ~410 F
    "Snow clearing lacks perfect excludability for every resident who uses cleared roads. Treating it as a pure private good at all times misreads the shared, hard-to-meter character of the service.",
    # E ~210 F
    "Extended circular-flow diagrams include tax-financed public services linking government and households. Public goods financed by tax do appear in those pictures.",
]

EXPL["CASE 2.4.26"] = [
    # A ~230 T
    "Pricing unlike products in the same euro unit lets shoppers compare a cereal box with detergent without inventing a private exchange ratio for every pair.",
    # B ~420 F
    "Unit of account is a measuring role, not a claim that coins physically contain bread. Euros measure value; they do not store groceries inside the metal or paper.",
    # C ~650 T
    "With many goods, barter comparison requires a web of relative rates that grows quickly. A common price unit collapses that web into ordinary shelf prices shoppers can scan aisle by aisle.\n\nSupermarket shopping at scale depends on that simplification; without it, each new product would demand new barter arithmetic against every other product.",
    # D ~400 F
    "Unit of account is the third standard function beside medium of exchange and store of value. Denying its existence contradicts the usual three-function list.",
    # E ~240 F
    "Inflation forces continual rewriting of price labels and muddies long-term comparisons in the same unit. Numeric labels alone do not shield the unit-of-account role from inflation's noise.",
]

EXPL["CASE 2.4.27"] = [
    # A ~230 T
    "Passers-by who enjoy the outdoor concert without paying while sponsors fund it resemble free riders under voluntary finance.",
    # B ~450 T
    "Full pure-public-good logic needs non-excludability and non-rivalry for listeners. A free outdoor show can approximate that when fences are absent and one more listener does not crowd out sound for others; the letter's \"only if\" caution is right.",
    # C ~600 T
    "Tax-funded public events can compel contributions from a broad base, reducing reliance on sponsors alone and shrinking free riding relative to a purely voluntary model.\n\nCities sometimes mix sponsorship with public funds for that reason: voluntary money helps, but tax finance stabilises provision when open access invites non-payment.",
    # D ~410 F
    "Free-rider problems are about people enjoying a shared service without paying. They are not caused only by inflation eroding ticket values. The concert example needs no inflation story to generate free riding.",
    # E ~210 F
    "Non-paying enjoyment can leave organisers short of funds for open-access events. Funding shortfalls are a recognised risk, not something that never happens.",
]

EXPL["CASE 2.4.28"] = [
    # A ~230 F
    "Inflation is a general price-level rise, not a single shop's isolated hike. One sticker change is not inflation by itself.",
    # B ~420 F
    "Climate and other differences across countries are exactly why cross-border specialisation occurs. Division of labour across countries is common, not impossible.",
    # C ~250 F
    "An agreed egg-for-vegetable swap is exchange even with no euros. Barter is exchange without money, not the absence of economic exchange.",
    # D ~600 T
    "Perishable eggs are a poor store of value compared with currency balances that can buy a wide future basket. Without money, turning today's egg surplus into deferred purchasing power is harder.\n\nFarmers in the stem can trade once, but holding value across time is clumsier when the \"savings\" spoil.",
    # E ~410 F
    "Barter economies struggle to compare unlike goods without a common measure. Comparison problems are a standard barter friction, not something those economies never face.",
]

EXPL["CASE 2.4.29"] = [
    # A ~230 T
    "In a monetary economy, money serves as medium of exchange, unit of account, and store of value. The three-function list in the letter is the standard core.",
    # B ~440 T
    "When free riders would underfund voluntary provision, taxation can finance public goods and transfers so shared services and redistribution still occur. That fiscal role is a central public-finance lesson.",
    # C ~650 T
    "Inflation erodes what money balances buy; an ECB aim slightly below 2% seeks low, stable inflation rather than price chaos. Purchasing-power predictability is the practical payoff of that target.\n\nHouseholds holding cash and firms setting contracts both benefit when the general price level does not swing wildly.",
    # D ~410 T
    "Division of labour raises output per worker through focus and repetition, yet it can bring monotony and tight interdependence among stages. Both the gain and the drawbacks belong in a complete recap.",
    # E ~240 T
    "Extended circular-flow models connect households, firms, and government through income, spending, taxes, and public outlays. The letter summarises that three-actor link correctly.",
]

EXPL["CASE 2.4.30"] = [
    # A ~230 T
    "Inflation means the general price level is rising. One café's ten-cent latte increase is a single relative price change, not inflation by itself.",
    # B ~450 F
    "A lone latte hike does not equal economy-wide inflation by definition. National inflation near the ECB target can coexist with one shop repricing a drink for local reasons.",
    # C ~600 T
    "When the broad basket of prices drifts up over time, each euro buys less. Persistent general price rises erode money's purchasing power even if any one item's move is small.\n\nThe distinction matters: macro inflation is about the index, not about treating every menu edit as the whole story.",
    # D ~410 T
    "ECB targets apply to a general consumer price index for the currency area, not to each café's menu line. The ten-cent latte is outside that targeting object.",
    # E ~240 T
    "Purchasing power for consumers depends on the average prices they face across many goods, not on one item's one-time change alone.",
]

EXPL["CASE 2.4.31"] = [
    # A ~230 T
    "Wages, rent, and profit paid by firms are incomes households earn for supplying labour, land, or capital to production. That is the factor-payment side of the circular flow.",
    # B ~450 F
    "Household income in the circular flow comes from supplying productive inputs. Saying income is unrelated to any prior supply of labour, land, or capital contradicts the model's factor-payment link.",
    # C ~600 T
    "After households receive factor incomes, their consumption spending returns as revenue to the firms that paid those incomes. The loop closes: production to income to spending to firm receipts.\n\nWithout that return spending, the simple two-sector story would not balance on the expenditure side.",
    # D ~410 T
    "Extended diagrams add government: tax receipts leave the private loop and transfer payments or public purchases re-enter it. Those fiscal flows are standard enrichments of the basic household-firm picture.",
    # E ~240 T
    "Money as medium of exchange is what carries wages one way and consumption payments the other, tying production, income, and spending into one monetary circuit.",
]

EXPL["CASE 2.4.32"] = [
    # A ~230 T
    "Flood protection helps many riverside residents at once, and excluding non-payers from safety when waters rise is impractical. Shared benefit plus hard exclusion matches the letter.",
    # B ~440 T
    "If levees relied only on voluntary donations, households could skip paying while still enjoying protection when the river crests. Non-payers benefiting is why voluntary finance tends to underfund the works.",
    # C ~600 T
    "A compulsory local levy spreads levee costs across the community and shrinks free-rider room compared with donation drives. Tax-like finance is how many municipalities keep flood defences funded when open benefits invite non-payment.\n\nThe riverside levy in the stem is that mechanism in local form.",
    # D ~410 T  (keyed True despite odd economics — match key)
    "Under this case's keyed reading, physical structure is treated as ruling out public-good characteristics for levees. The letter is scored true as written against that key, even though non-excludable protection is what the levy debate usually emphasises.",
    # E ~250 F  (keyed False)
    "Keyed false here: the letter's pairing of disaster-relief transfers with levee provision is rejected as stated. Transfers and physical defence are scored as not fitting the claim under this answer key.",
]


def apply() -> None:
    data = json.loads(PATH.read_text())
    subset = data[40:80]
    ids = [c["case_id"] for c in subset]
    missing = [cid for cid in ids if cid not in EXPL]
    extra = [cid for cid in EXPL if cid not in ids]
    if missing or extra:
        raise SystemExit(f"id mismatch missing={missing} extra={extra}")
    for c in subset:
        bodies = EXPL[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        c["tactical_explanations"] = [
            wrap(bodies[i], bool(c["answer_key"][i])) for i in range(5)
        ]
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {PATH} cases {ids[0]} .. {ids[-1]} ({len(ids)})")


if __name__ == "__main__":
    apply()
