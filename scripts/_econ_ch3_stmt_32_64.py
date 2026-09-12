#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch3 cases [32:64] (CASE 3.3.01–3.4.16)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch3-subtopics.json"
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# case_id -> five bodies (no closer). Lengths aimed at mix per case.
EXPL: dict[str, list[str]] = {}

EXPL["CASE 3.3.01"] = [
    "Strong customer demand can fill the order book and still leave a manufacturer unprofitable. Rent, wages, energy, and materials may absorb every euro of sales, so demand without cost control is not a profit guarantee.",
    "Break-even means revenue only equals total costs, with nothing left as surplus. Profit-oriented manufacturers treat that floor as survival, not as the long-run aim. They plan for revenue above expenses so owners can earn a return and the firm can fund future capacity.\n\nCalling break-even the primary long-run goal therefore reverses the commercial objective: covering costs keeps the lights on, while lasting success is measured by surplus, not by zero profit forever.",
    "Booking sales while ignoring cost control does not deliver profit. Profit compares revenue with all expenses in the period. A firm that records high turnover yet lets labour and materials overrun can still report a loss, so revenue alone fails the objective.",
    "Matching expenses exactly describes break-even, not profit. Profit is the surplus when revenue exceeds total costs. Ignoring that surplus empties the word of its usual commercial meaning.",
    "Covering costs is necessary but not the usual long-run target for profit-oriented manufacturers. Once costs are met, owners still seek a surplus for returns and reinvestment. Treating cost coverage as the end goal stops one step short of profit orientation.",
]

EXPL["CASE 3.3.02"] = [
    "When the bakery chain aims for revenue above costs specifically so it can buy new ovens, that surplus plan is classic profit-oriented reinvestment. The extra margin is not decorative; it is earmarked for productive equipment that expands capacity.",
    "A retained surplus after profitable sales is cash the business can keep and spend on upgrades. New ovens are a normal use of that retained earning rather than an outside gift.",
    "The shop's own logic is explicit: higher revenue than expenses creates the pool that pays for replacement ovens. Without that margin, oven purchases would require fresh loans or owner cash injections instead of internal surplus.\n\nTreating the revenue-cost gap as the basis for equipment spend therefore matches how commercial bakeries fund growth from operations rather than from charity.",
    "Durability does not require paying out every euro of earnings at once. Distributing all surplus immediately would leave nothing for oven replacements or buffer stock. Many firms retain part of earnings precisely so the shop can keep investing and lasting.",
    "Oven purchases in a commercial bakery normally come from business surplus or financed investment, not from donations. Charity funding is an NPO pattern, not the default path for a profit-oriented chain.",
]

EXPL["CASE 3.3.03"] = [
    "Profit is revenue minus total expenses. Cost control matters because every euro of waste shrinks that gap. Sales growth without expense discipline can erase the surplus the firm is chasing.",
    "Commercial expansion usually needs resources that come from profitable operations or from investors who expect profit. Persistent losses drain cash and make growth harder to fund. Relying on profit rather than ongoing losses is therefore the ordinary expansion path.",
    "A margin above break-even leaves funds that can hire staff, open another site, or buy machinery. Break-even alone only covers what already exists; expansion typically draws on surplus beyond that line.\n\nCommercial firms that keep clearing more than costs therefore hold a practical source of growth capital inside the business, which is why the statement links margin above break-even to expansion.",
    "In any given period, profit appears when revenue exceeds total costs for that period. Equal revenue and costs yield break-even; a shortfall is a loss. The statement simply restates that comparison.",
    "Profit orientation means aiming for revenues larger than costs and expenses, not merely matching them. That surplus target is what separates the commercial goal from pure cost recovery.",
]

EXPL["CASE 3.3.04"] = [
    "Charging a cost-recovery fee for some flood-relief supplies can help an NPO stretch scarce donations without turning the organisation into a profit-maximising firm. Mission, ownership rules, and surplus use still define status, not the presence of a fee.\n\nA humanitarian group that bills a partial recovery charge while ploughing any residual into further kits remains an NPO. Equating every fee with conversion into a commercial maximiser overreads a financing tool.",
    "When donations leave a surplus after kits go out, that remainder can buy the next round of relief materials. Reinvestment into further aid is ordinary NPO surplus use.",
    "Not-for-profit status does not license ignoring funding. Warehouses, transport, and staff still need cash inflows. An NPO that stops raising donations or fees cannot keep dispatching kits, so funding remains essential.",
    "Dispatching kits before any inflows arrive is not typical sustainable practice. Materials and logistics usually require prior donations or grants. Urgency may pressure timing, but empty coffers still block shipment.",
    "Volunteers reduce some labour costs, yet relief organisations still need money for supplies, fuel, and storage. Claiming that volunteers alone remove every need for inflows understates those cash requirements.",
]

EXPL["CASE 3.3.05"] = [
    "Profit left after costs can buy tools, vehicles, or machines that raise future capacity. Using surplus that way funds better service tomorrow from today's earnings.",
    "Retained profit kept inside the firm can finance upgrades that make the business more durable. Sustainability improves when earnings refresh equipment instead of leaving capacity to age out.",
    "Reinvestment and owner returns often sit side by side: some surplus rewards capital, some renews the productive base. Long-run survival needs that refresh cycle even when owners also take a return.\n\nA repair shop that ploughs part of profit into diagnostic tools while still paying owners illustrates the dual use. The statement is right that reinvestment supports survival alongside those returns.",
    "A repair shop that buys better diagnostic tools out of profit is doing commercial reinvestment. The surplus is converted into capital that serves paying customers, which is the commercial pattern.",
    "Profit need not be paid out immediately in full. Firms routinely retain earnings for equipment. Saying profit cannot fund tools because distribution is mandatory invents a false payout rule.",
]

EXPL["CASE 3.3.06"] = [
    "Selling branded merchandise can raise cash that a conservation NPO then spends on habitat work. Trading for mission funds fits the NPO model without requiring private owners.",
    "Merchandise income can cover shop rent, staff, and postage while still leaving money for conservation projects. Earned revenue therefore supports both operations and habitat spending inside one organisation.",
    "Using surplus for habitat protection shows mission reinvestment, not owner-wealth maximisation. An NPO has no private shareholders collecting that surplus as personal wealth.\n\nFunding conservation from merchandise gains is evidence of purpose-driven surplus use. It does not prove the organisation maximises owner wealth the way a listed corporation would.",
    "A conservation NPO's primary aim is habitat and species outcomes, not maximum private owner wealth. Listed corporations answer to shareholders; mission-first NPOs answer to their purpose and governance rules. Equating the two erases that difference.",
    "Merchandise surplus in a conservation NPO is not owed as private shareholder dividends. Dividends belong to for-profit ownership structures, not to typical NPO surplus rules.",
]

EXPL["CASE 3.3.07"] = [
    "Investors put capital into ventures that may fail. Retained profit is one form of reward for that risk: earnings kept in the firm still belong to the residual claim of owners who funded the risk.",
    "Owner-return logic treats profit as payoff for committing capital when outcomes are uncertain. Without a prospect of surplus, risk capital has little commercial reason to stay invested.",
    "Customers paying prices fund revenue; that does not cancel owner returns. Profit orientation explicitly includes a surplus for owners after costs are covered. Excluding any return because buyers exist confuses who pays for goods with who bears residual risk.\n\nPrices cover operations and, when successful, leave something for capital providers. The exclusion claim therefore fails.",
    "Profits compensate owners and investors for accepting the chance of loss. That risk-reward link is a core reason commercial firms seek surplus rather than permanent break-even.",
    "When revenues exceed expenses, owners have a residual claim on the surplus. Saying they deserve no return at that point denies the ordinary reward for risk-bearing capital.",
]

EXPL["CASE 3.3.08"] = [
    "Startup founders and equity investors still bear failure risk even when lenders are present. Debt does not absorb all uncertainty; equity can be wiped out while loans are only partly covered.",
    "Early low margins do not turn a startup into an NPO. Legal form, ownership, and aims decide that label. Many young for-profit firms lose money or earn thin margins while still seeking owner profit later.",
    "Fully covering costs reaches break-even, yet risk-bearing owners still seek a surplus above that line. Cost recovery alone does not erase the need to reward capital that could have been lost.\n\nFounders who risk savings expect more than zero residual return once revenues clear expenses. Declaring that need gone at break-even misstates startup finance.",
    "Profit is tightly linked to capital placed at risk: surplus is the residual reward when the venture succeeds. Claiming no connection ignores why equity investors wait for earnings rather than a fixed wage.",
    "Risk-bearing founders reasonably expect a return when revenues exceed expenses. Denying any return in that case contradicts ordinary equity logic.",
]

EXPL["CASE 3.3.09"] = [
    "Mission work still needs rent, wages, and materials. Enough inflows to finance those operations are required even when the aim is social rather than private profit.",
    "Not-for-profit organisations organise around a social or environmental mission instead of maximising owner profit. That purpose shift is the defining aim contrast with commercial firms.",
    "When an NPO records a surplus, the usual path is to plough it into further mission activity: more programmes, better facilities, or larger outreach. Private dividend payouts are not the template.\n\nSurplus therefore becomes fuel for purpose rather than a personal owner prize, which is exactly what the statement describes.",
    "Humanitarian relief groups, conservation bodies, and environmental campaign organisations all organise around mission delivery. Private profit for owners is not their primary objective across those NPO types.",
    "Not-for-profit status never cancels funding needs. Ignoring donations, fees, or grants would shut operations down. Mission without money is not a workable model.",
]

EXPL["CASE 3.3.10"] = [
    "A charity clinic that bills insurers and then spends any surplus on better patient services is using residual funds for mission, not for private owner payouts. That surplus path fits NPO practice.",
    "Treating patients while keeping costs covered combines mission delivery with financial discipline. Care continues because inflows meet running expenses.",
    "Billing insurers enough to cover staff, supplies, and facilities is cost coverage, not a conversion into shareholder capitalism. The clinic still exists to treat patients rather than to maximise private returns.\n\nInsurer payments function as earned revenue that keeps the mission solvent. Aligning bills with running costs is therefore consistent with not-for-profit cost coverage.",
    "Sending invoices to insurers does not list the clinic on a stock exchange or create private shareholders. Billing is a payment mechanism. Corporate listing status depends on legal form and ownership, not on whether insurers are charged.",
    "Community clinics still need to pay nurses, buy supplies, and heat rooms. NPO status does not prove costs can be ignored. Coverage remains necessary.",
]

EXPL["CASE 3.3.11"] = [
    "Many NPO roles are paid, and even volunteer-heavy groups need cash for rent and goods. Ignoring revenue because some work is voluntary misreads how missions stay funded.",
    "Food banks watch whether donated money and goods cover warehouse rent and utilities. That tracking is ordinary operating discipline for ongoing distribution work.",
    "Not-for-profit status allows surplus so long as it advances the mission rather than private owner dividends. Earning more than costs in a period and ploughing the remainder into programmes is compatible with NPO rules.\n\nA food bank that raises more than rent and then expands distribution is still an NPO. Surplus reinvested for purpose does not cancel the status.",
    "Registration papers do not create a permanent free pass on funding. After registration, inflows are still required for staff, space, and supplies. Mission delivery without finance collapses quickly.",
    "Donor income must still be managed against rent, transport, and wages. Gifts do not free an NPO from covering operating costs responsibly; they are the means used to cover them.",
]

EXPL["CASE 3.3.12"] = [
    "If nightly ticket sales cover cast, venue, and utilities, performances can continue. Covered running costs keep the cultural programme alive night after night.",
    "When ticket surplus funds outreach programmes, the NGO theatre is reinvesting NPO gains into mission work. Extra box-office margin becomes community engagement rather than private dividends.",
    "Cultural outreach does not abolish the need to pay performers and landlords. Performances stop if costs go uncovered, whatever the artistic mission says.\n\nTicket income that meets nightly expenses is therefore a practical precondition for mission delivery, not a betrayal of it. The statement correctly keeps cost coverage in view.",
    "Reinvesting ticket surplus in outreach expands the mission with earned gains. That use of residual box-office funds is classic NPO surplus deployment.",
    "The theatre both sells tickets and ploughs leftover margin into outreach. Earned income and mission reinvestment operate together in one organisation.",
]

EXPL["CASE 3.3.13"] = [
    "When earned fees are thin, donor gifts can still pay for campaigns. Donation revenue fills gaps that trading income alone may not cover for advocacy or relief work.",
    "NPOs routinely mix donations, membership fees, grants, and some trading income. No rule limits them to a single revenue pipe. A campaign group can take gifts and charge workshop fees in the same year.\n\nClaiming mixed sources cannot sustain an NPO invents a one-source ban that practice rejects. Diversity of inflows is common and often stabilising.",
    "Humanitarian organisations often hold surplus from one appeal to fund later shipments. Prior surplus is a normal buffer for the next aid wave. Saying it cannot fund later kits contradicts ordinary reserve use.",
    "Urgency does not magically create kits without funding. Materials and logistics still need money first, even in disasters. Dispatch before any funding is not the sustainable template.",
    "Donor gifts are meant to cover operating costs, not to erase them. Rent, transport, and coordination still require careful spending of those gifts. Responsibility for cost coverage remains.",
]

EXPL["CASE 3.3.14"] = [
    "Retained profit still belongs to the residual owners who risked capital. Keeping earnings in the firm can reward investors through a stronger balance sheet and future claims, not only through cash dividends.",
    "Investors commit funds without a guaranteed outcome. Profit is the compensation they expect when the firm succeeds, matching risk with residual reward for that capital.",
    "Both retained earnings and explicit investor payouts rest on the same idea: capital bore uncertainty, so surplus attaches to that claim. Retention strengthens the firm; distribution hands cash to owners; either way the link to risk-bearing remains.\n\nTreating those channels as unrelated to business risk would detach profit from why equity was supplied in the first place.",
    "Investors are not ordinarily paid a fixed wage independent of performance. Employees may earn wages; equity holders seek profit that varies with results. Replacing profit with fixed wages for investors mislabels the residual claim.",
    "Capital at risk deserves a return when revenues exceed expenses. Denying that residual reward empties equity of its ordinary commercial purpose for owners.",
]

EXPL["CASE 3.3.15"] = [
    "Donations and membership fees are standard inflows that keep not-for-profit operations running. Many NPOs rely on those gifts and dues as core funding.",
    "Trading surplus from shops or events can be spent on mission programmes. Earned income inside an NPO model still serves purpose spending rather than private dividends.",
    "Not-for-profit organisations can and do generate surplus in some periods. The constraint is how surplus is used, not a ban on ever earning more than costs.\n\nA charity shop that clears a margin and funds counselling services has generated surplus by definition. Claiming NPOs never do so invents a ban the sector does not follow.",
    "Mission spending can be financed by donations, fees, trading, and grants, not by government grants alone. Many NPOs run with little or no state money. Grant-only financing is not a rule.",
    "NPO surplus is not paid out as private-owner dividends. Dividend distribution is a for-profit ownership pattern, not the usual NPO surplus rule.",
]

EXPL["CASE 3.3.16"] = [
    "Flood-relief kits need purchased materials and paid logistics before they leave the warehouse. Prior inflows fund that pipeline; empty accounts cannot stock trucks.",
    "A humanitarian NPO's primary aim is mission delivery such as relief, not maximising private owner profit. Purpose, not shareholder wealth, leads the organisation.",
    "Legal form, ownership, and profit rules separate a humanitarian NPO from a listed for-profit corporation. Shares, dividends, and shareholder primacy belong to the latter.\n\nTreating them as legally the same collapses distinct governance models. Relief NPOs are not interchangeable with listed commercial companies on either ownership or surplus rules.",
    "Staff wages and warehouse costs still appear on a humanitarian NPO's books. Operating without covering those expenses is not a viable model, whatever the mission urgency.",
    "Any surplus is directed back into relief work, not handed out as private shareholder dividends. Dividend payouts contradict typical NPO surplus rules.",
]

EXPL["CASE 3.4.01"] = [
    "Headcount under ten is only one micro test. Turnover above €2m can still block micro status even with a tiny payroll. Staff alone never completes the EU micro definition.",
    "Forty-five staff sit inside the small employee band, yet turnover above €10m can push the firm out of small status. Headcount guarantees nothing once the financial caps are breached.",
    "Micro status needs fewer than ten people plus a financial test: turnover or balance sheet not above €2m. Meeting the staff ceiling while blowing past both financial caps fails the definition.\n\nA nine-person firm with €3m turnover and a €3m balance sheet is not micro under those figures. Staff sufficiency alone is therefore not enough for the label.",
    "Under the EU definition, a micro enterprise may employ fewer than ten people as its staff ceiling. That headcount limit is the employment half of the micro tests.",
    "A balance sheet below €2m helps only if the other micro tests also hold. Turnover above €2m can still disqualify micro status even when the balance sheet looks small.",
]

EXPL["CASE 3.4.02"] = [
    "A firm can stay under fifty staff and still leave the small category if turnover rises above €10m. The financial breach alone is enough to push it out.",
    "Micro status pairs fewer than ten staff with a financial OR: turnover up to €2m or a balance sheet total up to €2m. Passing one of those financial caps alongside the staff limit can keep the firm micro.\n\nThe bakery with six staff and €2.1m turnover may still qualify if its balance sheet stays within €2m. That OR structure is what the statement records.",
    "Even with fewer than ten employees, turnover above €2m can remove micro status when the balance sheet also fails its €2m cap. Crossing the turnover ceiling is a real disqualification path.",
    "Small status requires turnover not exceeding €10m (or the parallel balance-sheet route) together with the staff limit. The €10m turnover ceiling is part of that package.",
    "EU small-enterprise rules allow fewer than fifty people on the payroll. That staff band is the employment side of the official small definition.",
]

EXPL["CASE 3.4.03"] = [
    "Medium classification uses an OR on the financial side: turnover up to €50m or balance sheet up to €43m, plus fewer than 250 staff. Both financial figures need not sit under their caps at once.\n\nA firm can miss one financial ceiling and still pass medium if the other financial measure and staff tests hold. Demanding both financial figures below their caps invents an AND rule the definition does not use.",
    "EU medium enterprises employ fewer than two hundred and fifty people. That staff ceiling is the employment half of the medium size tests used with the financial caps.",
    "Turnover within €50m does not make balance sheet size irrelevant. A balance sheet above €43m can still fail medium status when that route is the one being relied on and the other financial test also fails.",
    "Two hundred and forty employees sit under the medium staff ceiling of fewer than 250. That headcount clears rather than exceeds the official limit.",
    "Thirty-eight staff fit the small employee band, yet turnover above €10m can knock the firm out of small status. Staff alone cannot keep the small label once financial caps break.",
]

EXPL["CASE 3.4.04"] = [
    "MSME is an umbrella that includes micro as well as small and medium firms. Excluding micro from the term contradicts the usual European grouping of those tiers.",
    "SMEs are the vast majority of EU businesses by count, not a narrow minority. Large corporations are few in number even when they are large in employment or turnover.",
    "SME labels affect access to support schemes, reporting burdens, and sometimes finance eligibility. Calling them purely decorative ignores those regulatory and funding consequences.\n\nA components maker that crosses out of SME bands can lose programme access and face heavier accounting duties. The labels therefore have practical bite.",
    "International sales do not by themselves create medium status. Medium status follows staff and financial thresholds, not the mere fact of exporting or operating across borders.",
    "Medium status allows turnover up to €50m or a balance sheet up to €43m together with the staff cap under EU rules. That pairing is the financial half of the definition.",
]

EXPL["CASE 3.4.05"] = [
    "About ten thousand employees far exceeds the medium staff ceiling of fewer than 250. A components manufacturer at that scale sits outside EU medium limits.",
    "Roughly ninety-nine percent of EU businesses are classed as SMEs by number. That prevalence statistic is a standard chapter fact about the business population.",
    "Accounting and disclosure duties typically lighten for smaller size bands and tighten for large multinationals. Treating micro firms and large groups as identical reporters contradicts that graduated practice.\n\nSimplified regimes exist precisely because size categories differ. Identical requirements would erase the point of the tiers.",
    "Two hundred employees fall under the medium threshold of fewer than 250. That headcount remains inside the medium staff band if financial tests also pass.",
    "Seven staff and a €1.9m balance sheet cannot guarantee micro status if turnover sits above €2m and the OR financial test therefore fails. Turnover breach can still disqualify.",
]

EXPL["CASE 3.4.06"] = [
    "Official SME classification often gates EU support programmes and finance schemes. Applicants may need to prove they sit inside the relevant size band before funds are released.",
    "Accounting rules can ease for smaller firms and tighten as size rises. Definitions matter because those reporting packages track the official size categories.",
    "Micro status needs fewer than ten employees. Exactly ten staff already fails that ceiling. Counting ten as still micro misreads \"fewer than ten.\"\n\nA family firm with ten people has crossed the micro headcount line even if turnover looks modest. The threshold is strict on that employment point, and financial caps cannot revive a failed staff test.",
    "Medium status needs fewer than 250 employees. Exactly 250 does not satisfy \"fewer than 250.\" That headcount sits on the wrong side of the ceiling.",
    "Small enterprises need fewer than fifty staff. Exactly fifty fails that test. Fifty is not inside the small employee limit under EU wording.",
]

EXPL["CASE 3.4.07"] = [
    "More than ten employees does not automatically mean large. Small and medium bands cover many firms well above ten staff. Large status requires crossing medium thresholds.",
    "MSME is the common umbrella term that groups micro, small, and medium enterprises together in EU policy talk. The three tiers sit under one family name.",
    "When a growing firm crosses official size lines, the accounting and reporting package that applies can change. Thresholds are not cosmetic labels; they can switch which rule set binds the business.\n\nApproaching medium limits therefore has compliance consequences as well as statistical ones. Crossing bands can rewrite filing duties.",
    "A local shop is not micro by location alone. Staff count and financial figures still have to meet the micro tests. Geography never replaces those thresholds.",
    "Exactly ten staff is not fewer than ten, so it exceeds the micro employee ceiling. The firm needs another size band once headcount hits ten.",
]

EXPL["CASE 3.4.08"] = [
    "Breaching medium staff or financial ceilings generally takes a firm out of SME status. Those thresholds mark the outer edge of the whole SME set.",
    "Grant schemes frequently ask applicants to document official micro criteria with staff and financial evidence. Proof of status is part of eligibility, not an optional extra.",
    "Small enterprises require fewer than fifty employees. A payroll of exactly fifty already fails that ceiling and pushes the firm beyond the small staff band.\n\nLogistics firms that hit fifty heads therefore need to check whether they still fit any SME tier through other routes, because the small employee limit has been crossed.",
    "Micro firms must clear the staff cap and also satisfy either the turnover or the balance-sheet financial limit. Both the employment test and one financial route are required.",
    "Exactly 250 staff is not fewer than 250, so it exceeds the medium employee ceiling. Medium status fails on headcount at that exact payroll figure.",
]

EXPL["CASE 3.4.09"] = [
    "A balance sheet above €43m can knock out medium status even when turnover looks low, if the firm cannot rely on a qualifying financial alternative under the rules. Financial breaches matter on either route.",
    "Leaving micro limits while still satisfying small thresholds reclassifies the firm as small. Growth past micro does not jump straight to large if small tests still hold.",
    "Because SMEs dominate EU business counts, policies aimed at SMEs reach most firms by number. Support, reporting relief, or finance programmes tagged to SME status therefore touch the bulk of the population.\n\nThe prevalence point makes size definitions consequential for policy design, not merely for a few niche traders.",
    "A micro supplier and a large components manufacturer can face different accounting packages precisely because size categories differ. Those differences are why the tiers exist.",
    "Small enterprises must keep turnover from exceeding €10m on the turnover route of the definition. That ceiling is part of remaining inside the small band.",
]

EXPL["CASE 3.4.10"] = [
    "Medium enterprises may report turnover up to €50m under EU definitions. That figure is the medium turnover ceiling on the official turnover route.",
    "Micro classification does not demand that turnover and balance sheet both stay under €2m at the same time. The financial test is an OR: either measure within €2m can suffice with the staff limit.\n\nA studio with €2.4m turnover but a €1.7m balance sheet can still meet the financial side via the balance sheet. Requiring both ceilings simultaneously invents a stricter AND rule.",
    "Micro combines fewer than ten staff with €2m financial caps, which is stricter on headcount than the small band's fewer-than-fifty staff limit. The micro package is the tightest SME tier.",
    "Small firms do not enjoy a €50m turnover allowance. That €50m figure belongs to the medium band. Small turnover is capped near €10m on the turnover route.",
    "If the balance sheet breaches its medium ceiling and turnover also fails its route, medium status is not confirmed merely because staff look fine. All required tests must hold.",
]

EXPL["CASE 3.4.11"] = [
    "Two employees sit far below the micro ceiling of fewer than ten. That headcount clears the staff half of the micro tests with room to spare on payroll.",
    "SME failures can still hurt local employment, suppliers, and services even though SMEs are numerous. Prevalence does not make each closure costless for a community.\n\nA town that loses several small employers feels real impact. Numerically common firms are not individually disposable for local livelihoods and tax bases.",
    "Lenders often check official headcount and turnover thresholds before treating an applicant as an SME for a programme or product. Verification against those numbers is ordinary credit practice.",
    "SME tiers ask for joint satisfaction of staff limits and the relevant financial thresholds. Passing only one side is not enough to lock in a size band.",
    "Most EU businesses by count fall inside SME size bands. Large firms are rare in the population count even when they are large in employment scale.",
]

EXPL["CASE 3.4.12"] = [
    "Turnover above €50m can remove medium status even if the balance sheet would have fitted its €43m cap. Either financial breach path can disqualify.",
    "The medium turnover cap is €50m, not €10m. The €10m figure is the small-enterprise turnover ceiling. Treating them as identical mixes two different bands.",
    "Forty staff can fit small or even medium employment bands, but micro requires fewer than ten people. Being under fifty does not make a firm micro.\n\nA forty-person workshop is past the micro headcount line by a wide margin. Staff below fifty is a small-band clue, not a micro proof, and financial caps still apply afterward.",
    "Adding staff and sales that cross small thresholds moves the firm out of micro. It cannot remain micro after those crossings; the definition reclassifies it upward when limits break.",
    "EU filing duties often vary by size category. Micro and small firms may use simplified accounts while larger entities face fuller public reporting. Identical full accounts for all sizes is false.",
]

EXPL["CASE 3.4.13"] = [
    "A small IT-support venture with a handful of staff illustrates micro-scale operations next to a components manufacturer with thousands of workers. The contrast shows how far size bands can differ.",
    "Verifying micro or other SME tiers needs complete staff counts and financial figures. Partial data leave the official size tests unfinished for auditors.",
    "Exporting does not cancel SME definitions. A firm that sells abroad is still measured against staff and financial thresholds for size status.\n\nCross-border sales may change markets, but they do not erase EU size tests. Export activity alone never makes the official categories irrelevant for classification or programme eligibility.",
    "One hundred and eighty employees sit under the medium staff ceiling of fewer than 250. If financial tests also pass, that headcount fits the medium staff band.",
    "Micro pairs fewer than ten staff with €2m turnover or balance-sheet limits. Those paired tests form the complete official micro package under EU rules.",
]

EXPL["CASE 3.4.14"] = [
    "Operating alone with one person can still be micro if financial caps hold. Micro has no minimum of five staff; fewer than ten includes solo operators.",
    "Large components manufacturers can employ thousands while remaining few in number across the economy. Scale of payroll and rarity in the firm count often travel together for large enterprises.",
    "Three thousand staff smash the medium ceiling of fewer than 250 regardless of how carefully turnover is managed. Headcount alone can eject a firm from medium status.\n\nNo amount of turnover management restores medium status once employment is in the thousands. The staff test is independent and binding on that scale of payroll.",
    "Turnover within €10m cannot make a firm small if it employs three hundred people. Small status also needs fewer than fifty staff. Headcount at three hundred fails that band.",
    "Turnover above €50m prevents medium classification on the turnover route when that cap is breached. The breach itself blocks medium status via that test.",
]

EXPL["CASE 3.4.15"] = [
    "Micro enterprises make up a large share of the SME population that dominates EU business counts. Many of those numerous SMEs are themselves micro.",
    "€43m is the medium balance-sheet ceiling used with the sub-250 staff rule. That pairing is the balance-sheet route for medium enterprise status.",
    "Nine staff and a €1.6m balance sheet look micro-friendly, yet €2.05m turnover can still fail the financial OR if the balance-sheet route is also judged against the rules in play. Crossing €2m turnover is a live disqualification risk.\n\nConfirming micro status despite that turnover figure is therefore unsafe. Financial caps must actually be met, not merely almost met.",
    "Eight staff fit the micro headcount band, but turnover and balance-sheet figures still need checking before micro status is confirmed. Staff fit is necessary, not sufficient alone.",
    "The ninety-nine percent SME count statistic does not prove SMEs produce ninety-nine percent of EU GDP. Headcount of firms and share of output are different measures.",
]

EXPL["CASE 3.4.16"] = [
    "Leaving SME status can cut eligibility for EU finance programmes reserved for SMEs. Crossing out of the bands is not only a label change; funding doors can close.",
    "A balance sheet within €43m does not save medium status if turnover sits above €50m and that is the failing route. One breached financial ceiling can be enough to fail.",
    "Medium status pairs fewer than 250 staff with a €50m turnover cap on the turnover route, not a €10m cap. The €10m figure belongs to small enterprises.\n\nAttaching a €10m turnover ceiling to medium classification mixes tiers. Medium financial room is much larger than the small band allows on that turnover measure for growing firms.",
    "Thirty staff sit under the small enterprise employee limit of fewer than fifty. That headcount clears the employment half of the small tests.",
    "One hundred and eighty staff already exceed the small ceiling of fewer than fifty. Turnover below €50m cannot keep the firm in the small category once headcount is that high.",
]


def apply() -> None:
    data = json.loads(PATH.read_text())
    subset = data[32:64]
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
