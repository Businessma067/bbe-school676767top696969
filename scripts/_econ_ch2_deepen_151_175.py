#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.4.01–2.4.25."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.4.01": [
        """FALSE — High, unpredictable inflation erodes real purchasing power of cash. That weakens money’s store-of-value function; it does not strengthen it.

The statement is false.""",
        """TRUE — A lighthouse beam is hard to withhold from non-payers. Under purely voluntary funding, ships could enjoy the light without contributing — classic free riders.

The statement is true.""",
        """TRUE — Tax financing requires contributions from a broad base, reducing the free-rider gap that voluntary donations leave open for shared benefits like the beam.

The statement is true.""",
        """FALSE — Public-good status depends on non-rivalry/non-excludability of the service, not on whether users are private businesses. Ship owners can still benefit from a public good.

The statement is false.""",
        """FALSE — Public goods are often tax-funded, which means taxpayers bear costs. “Free to users at the point of use” is not the same as “zero cost to any taxpayer.”

The statement is false.""",
    ],
    "CASE 2.4.02": [
        """TRUE — Cash still functions as a store of value in the short run, but positive inflation (even near 2%) slowly reduces what 1,000 euros buy.

Purchasing power drifts down as the price level rises.

The statement is true.""",
        """FALSE — Inflation slightly below 2% is still positive inflation. Cash holders typically lose some purchasing power each year; prices do not fall just because inflation is “slightly below 2%.”

The statement is false.""",
        """TRUE — Any positive inflation weakens the store-of-value function relative to stable prices, even when the rate is moderate.

The statement is true.""",
        """TRUE — The ECB’s near-2% aim is price stability, far from destabilising very high inflation that wrecks cash’s real value.

The statement is true.""",
        """TRUE — Domestic general price-level changes determine how much a held euro buys at home — purchasing power of cash.

The statement is true.""",
    ],
    "CASE 2.4.03": [
        """FALSE — Nominal face value can stay “€20” while prices rise, so real purchasing power falls. Unchanged nominal amounts do not freeze real value.

The statement is false.""",
        """FALSE — A banknote’s face value is nominal. Real purchasing power changes with the price level over decades.

The statement is false.""",
        """FALSE — In the circular flow, households supply labour (and often capital) to firms and receive income — they are not only spenders.

The statement is false.""",
        """TRUE — The circular flow links production income to spending on output: earnings return as demand for goods and services.

The statement is true.""",
        """FALSE — Extended circular-flow diagrams routinely add government, banks (financial sector), and foreign trade. The claim that they “never appear” is false.

The statement is false.""",
    ],
    "CASE 2.4.04": [
        """TRUE — When prices rise very rapidly, the same 20-euro note buys far less candy — sharp erosion of purchasing power at unchanged nominal amounts.

The statement is true.""",
        """TRUE — A mobile transfer pays for goods or services — money acting as medium of exchange in electronic form.

The statement is true.""",
        """TRUE — If inflation outpaces the ability to spend or invest quickly, holding money as a store of value fails — cash melts in real terms.

The statement is true.""",
        """TRUE — The ECB’s slightly-below-2% target aims at stability, far from hyperinflation scenarios like the candy example.

The statement is true.""",
        """TRUE — Cash-holding households and firms both lose real purchasing power when inflation is rapid.

The statement is true.""",
    ],
    "CASE 2.4.05": [
        """TRUE — Clean air and landscape benefits can spill over to non-visitors — public-good (or positive-externality) elements beyond gate-paying tourists.

The statement is true.""",
        """TRUE — Gate fees can exclude low-income residents while ecosystem services still benefit people who never enter — incomplete exclusion of beneficiaries.

The statement is true.""",
        """TRUE — When many benefit without direct payment, tax funding can mitigate free riding that pure gate fees leave open.

The statement is true.""",
        """FALSE — Touchable trees do not decide public-good status. Non-rival enjoyment of conservation benefits can still have public-good features.

The statement is false.""",
        """FALSE — Free-rider problems appear in domestic environmental policy whenever shared benefits are hard to charge for — not only in foreign trade.

The statement is false.""",
    ],
    "CASE 2.4.06": [
        """FALSE — High, erratic inflation makes cash a worse long-term store of value, not a safer one.

The statement is false.""",
        """FALSE — Inflation is a sustained rise in the general price level, not merely one product getting dearer in a single aisle.

The statement is false.""",
        """FALSE — Neighbours often free-ride on street lighting under voluntary funding; voluntary chipping-in is not guaranteed. Free-rider problems are real for lighting.

The statement is false.""",
        """FALSE — Store-of-value is a function of money, but purchasing power still changes with inflation. The function does not imply never-changing real value.

The statement is false.""",
        """TRUE — Barter needs a double coincidence of wants. Money as medium of exchange lets people sell and buy separately, overcoming that match problem.

The statement is true.""",
    ],
    "CASE 2.4.07": [
        """TRUE — Government collects taxes from households and firms and spends on public services and transfers — the public-sector link in the flow.

The statement is true.""",
        """TRUE — Extended circular-flow models include government spending and taxation connecting the public sector to private actors.

The statement is true.""",
        """FALSE — Households receive public services, transfers, and sometimes wages from government employment — return flows exist.

The statement is false.""",
        """TRUE — Subsidies and transfers are redistribution channels in the circular flow from government to private actors.

The statement is true.""",
        """FALSE — The circular flow is typically drawn with money mediating exchange, not as pure barter only.

The statement is false.""",
    ],
    "CASE 2.4.08": [
        """TRUE — Splitting billing from technical queries lets agents specialise, which often speeds resolution through practice and focused knowledge.

The statement is true.""",
        """TRUE — Agents train mainly for their queue type, so training time per agent for that category can fall versus training everyone for everything.

The statement is true.""",
        """TRUE — Households supply factors, earn income, and spend on firms’ output — the circular-flow loop restated.

The statement is true.""",
        """TRUE — Without cross-training, technical agents lack billing procedures (and vice versa). Understaffing in one team leaves a coverage gap.

The statement is true.""",
        """TRUE — Specialised teams depend on each other; overflow in one queue creates bottlenecks for overall service.

The statement is true.""",
    ],
    "CASE 2.4.09": [
        """FALSE — Barter partners often want different things; double coincidence is a problem precisely because matching wants is not automatic.

The statement is false.""",
        """FALSE — Call centres specialise by query type just as factories divide tasks. Specialisation is not factory-only.

The statement is false.""",
        """FALSE — Subsidies support specific activities or users; public goods are defined by non-rivalry/non-excludability. Both may use tax revenue, but they are not identical concepts.

The statement is false.""",
        """TRUE — Lower subsidised fares can shift commuters toward rail while tickets remain excludable — rail is not thereby a pure public good.

The statement is true.""",
        """TRUE — Transfers redistribute resources and can target mobility or environmental goals without needing to be pure public goods.

The statement is true.""",
    ],
    "CASE 2.4.10": [
        """TRUE — Export subsidies move public funds to support a targeted industry or export activity — a transfer/support instrument.

The statement is true.""",
        """TRUE — Subsidised dairy remains excludable and rival when consumed. That differs from pure public goods (non-excludable, non-rival).

The statement is true.""",
        """FALSE — Government spending funds many private or club-like goods and transfers. Spending alone does not make the funded item a public good.

The statement is false.""",
        """TRUE — Subsidies change incentives and prices while the product can still be sold only to paying buyers — still excludable.

The statement is true.""",
        """TRUE — Tax revenue paid out as subsidies links government to firms in the circular flow.

The statement is true.""",
    ],
    "CASE 2.4.11": [
        """TRUE — Each swap needs a partner who wants what you offer and offers what you want — double coincidence of wants.

The statement is true.""",
        """TRUE — Without money, arranging multi-person chains (honey→bread→pottery) is harder than pairwise cash trades.

The statement is true.""",
        """TRUE — Direct swaps are still exchange: mutually agreed transfers of valued goods.

The statement is true.""",
        """FALSE — Traders often disagree on relative values; barter does not eliminate comparison and bargaining problems.

The statement is false.""",
        """TRUE — Money as medium of exchange lets each person sell for cash and buy what they want — simplifying what barter complicates.

The statement is true.""",
    ],
    "CASE 2.4.12": [
        """FALSE — Free-rider problems arise for many domestic public services (defence, lighting, clean parks), not only in foreign trade.

The statement is false.""",
        """FALSE — Nominal €100 can buy less as prices rise. Nominal amounts do not automatically preserve real purchasing power.

The statement is false.""",
        """TRUE — Positive inflation over decades weakens money’s store-of-value performance for long-held cash.

The statement is true.""",
        """TRUE — Slightly below 2% is a stability target, not a licence for unbounded ever-rising prices.

The statement is true.""",
        """FALSE — Domestic price levels are the main determinant of euro cash’s home purchasing power; FX rates matter for foreign goods but do not monopolise the concept.

The statement is false.""",
    ],
    "CASE 2.4.13": [
        """FALSE — Barter requires matching wants; partners do not automatically desire identical goods.

The statement is false.""",
        """FALSE — Inflation reduces money’s purchasing power when the price level rises. Prices and money’s real value do not “always move upward together” in a way that raises purchasing power.

The statement is false.""",
        """FALSE — Unit of account can be one currency (euros) even if tourists also hold another. Two currencies in tourism do not erase the unit-of-account function.

The statement is false.""",
        """TRUE — If prices rise faster than incomes, the same nominal cash buys fewer goods — lower real purchasing power for households.

The statement is true.""",
        """FALSE — Inflation directly affects domestic purchasing power of euro cash, not only foreign trade.

The statement is false.""",
    ],
    "CASE 2.4.14": [
        """TRUE — Enjoying cleaner paths without donating is free riding on others’ contributions.

The statement is true.""",
        """TRUE — Voluntary funding often underprovides shared cleanup benefits because free riders withhold donations.

The statement is true.""",
        """TRUE — Taxes compel broad contributions, shrinking the free-rider gap relative to pure voluntary funding.

The statement is true.""",
        """FALSE — Free riders appear with public services regardless of whether money also serves as medium of exchange in shops.

The statement is false.""",
        """FALSE — Voluntary funding frequently falls short of socially desired public-good levels — shortfalls are common, not “always optimal.”

The statement is false.""",
    ],
    "CASE 2.4.15": [
        """TRUE — Paying euros for bread does not require the baker to want socks — money removes the double-coincidence requirement.

The statement is true.""",
        """TRUE — Sell for money, then buy what you want later — medium of exchange separates selling from buying.

The statement is true.""",
        """TRUE — Local-tax street lighting funds a shared service and reduces free riding relative to pure voluntary funding.

The statement is true.""",
        """TRUE — Medium of exchange, unit of account, and store of value are money’s three core functions.

The statement is true.""",
        """TRUE — Without a medium of exchange, each purchase needs direct want-matching as in barter.

The statement is true.""",
    ],
    "CASE 2.4.16": [
        """TRUE — The ECB’s price-stability objective is inflation slightly below 2% (as taught in this bank’s framing).

The statement is true.""",
        """FALSE — The target is near 2%, not a requirement of exactly zero inflation forever with no deviation.

The statement is false.""",
        """TRUE — Price stability supports more predictable purchasing power than high, volatile inflation.

The statement is true.""",
        """FALSE — Slightly-below-2% inflation is mild stability targeting; hyperinflation is extreme price explosion — not identical in effect.

The statement is false.""",
        """TRUE — Central-bank inflation targets aim at macroeconomic stability of the general price level.

The statement is true.""",
    ],
    "CASE 2.4.17": [
        """TRUE — Living-cost grants to low-income students are transfers redistributing income to a targeted group.

The statement is true.""",
        """TRUE — Transfers move purchasing power to recipients; they need not be pure public goods like defence or lighting.

The statement is true.""",
        """TRUE — A transport subsidy uses public funds to cover part of the fare — lowering user prices.

The statement is true.""",
        """TRUE — Grant money becomes household income and is later spent on goods and services — re-entering the circular flow.

The statement is true.""",
        """TRUE — Transfers can pursue equity while remaining conceptually distinct from tax-funded public goods such as defence or street lighting.

The statement is true.""",
    ],
    "CASE 2.4.18": [
        """FALSE — Taxes commonly fund public goods such as defence; private firms do not “always” supply defence at market prices.

The statement is false.""",
        """FALSE — Saving is a leakage in extended models, but wages continue for workers; the circular flow does not stop and wages do not “cease to exist” when some income is saved.

The statement is false.""",
        """FALSE — Specialisation can raise productivity yet also bring monotony, skill narrowness, and dependency — downsides exist.

The statement is false.""",
        """TRUE — Narrow bolt-tightening focus may leave workers with few transferable skills if that job disappears — a drawback of extreme specialisation.

The statement is true.""",
        """TRUE — Despite human and flexibility drawbacks, specialisation often lowers average production cost per unit through repetition and learning.

The statement is true.""",
    ],
    "CASE 2.4.19": [
        """TRUE — Splitting surgery, diagnostics, and nursing deepens skill and often raises treatment efficiency — division of labour in healthcare.

The statement is true.""",
        """TRUE — Specialised departments depend on each other: diagnostic delay postpones surgery — interdependence.

The statement is true.""",
        """FALSE — Healthcare is highly specialised; doctors and departments do not each perform every task.

The statement is false.""",
        """TRUE — Coordination costs and bottlenecks between departments are recognised drawbacks alongside the gains.

The statement is true.""",
        """TRUE — Despite coordination needs, specialisation typically raises output per specialist hour through focused expertise.

The statement is true.""",
    ],
    "CASE 2.4.20": [
        """FALSE — Mastering one narrow product still leaves demand risk, input risk, and technological change — specialisation does not remove all firm risk forever.

The statement is false.""",
        """FALSE — Police protection is hard to withhold from non-payers in a locality — free-rider incentives exist for domestic security services.

The statement is false.""",
        """FALSE — Unpredictable weekly price jumps destroy store-of-value reliability; the function works best under stable prices.

The statement is false.""",
        """FALSE — Street lighting is typically non-excludable for passers-by, so free-rider problems arise under voluntary funding.

The statement is false.""",
        """TRUE — Transfers and subsidies redistribute or support groups; they are not always pure public goods.

The statement is true.""",
    ],
    "CASE 2.4.21": [
        """TRUE — When each worker does one step, a missing chip at one stage can stop the whole line — fine division of labour raises vulnerability to specialised failures.

The statement is true.""",
        """TRUE — Specialisation raises productivity but ties stages together — interdependence among sequential tasks.

The statement is true.""",
        """TRUE — Without a common unit of account, comparing many barter ratios is cumbersome; money prices simplify comparison.

The statement is true.""",
        """TRUE — Monotonous single-step work is a human drawback of extreme specialisation.

The statement is true.""",
        """TRUE — When all stages run, specialisation often lowers average cost despite shutdown risk when a stage fails.

The statement is true.""",
    ],
    "CASE 2.4.22": [
        """FALSE — Services specialise too (hospitals, call centres, law firms). Division of labour is not factory-only.

The statement is false.""",
        """FALSE — Transfers redistribute income inside the circular flow; they do not permanently break it.

The statement is false.""",
        """FALSE — Division of labour can bring monotony and stage dependency — drawbacks exist.

The statement is false.""",
        """FALSE — Specialisation occurs in manufacturing and services as well as agriculture.

The statement is false.""",
        """TRUE — Interdependent stations mean one breakdown can halt the whole assembly line.

The statement is true.""",
    ],
    "CASE 2.4.23": [
        """TRUE — Firms pay wages, rent, interest, and profit to households — factor payments become household income.

The statement is true.""",
        """TRUE — Households spend that income on goods and services, returning revenue to firms — closing the loop.

The statement is true.""",
        """FALSE — The circular flow assumes households supply labour and capital to production.

The statement is false.""",
        """TRUE — Money as medium of exchange links sales and purchases inside the flow.

The statement is true.""",
        """TRUE — Saving and taxes are leakages that can withdraw spending temporarily in extended models (with injections elsewhere).

The statement is true.""",
    ],
    "CASE 2.4.24": [
        """FALSE — Money typically makes modern exchange easier than pure barter by removing double coincidence and easing price comparison.

The statement is false.""",
        """TRUE — Unit of account means money is the common measuring rod for prices and debts — euros on every label.

The statement is true.""",
        """FALSE — Unit of account is about measuring value in money terms; it does not require barter or direct goods-for-goods trading.

The statement is false.""",
        """TRUE — Without a common measure, comparing bread and cinema tickets is harder than with euro prices on both.

The statement is true.""",
        """FALSE — Medium of exchange (what you pay with) and unit of account (how you measure prices) are distinct functions, even when the same currency serves both.

The statement is false.""",
    ],
    "CASE 2.4.25": [
        """TRUE — Cleared streets benefit many residents and are hard to meter and charge at the moment each person uses them.

The statement is true.""",
        """TRUE — Under voluntary payments, some households would enjoy cleared streets without paying — free-rider issues.

The statement is true.""",
        """TRUE — General taxation spreads cost so the shared clearing service can be provided reliably.

The statement is true.""",
        """FALSE — Snow clearing has strong shared-service features and imperfect exclusion — not a pure private good with perfect excludability at all times.

The statement is false.""",
        """FALSE — Tax-financed public services appear in extended circular-flow diagrams linking government and households.

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
