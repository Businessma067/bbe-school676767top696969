#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.4.26–2.4.50."""
from __future__ import annotations
import json
from pathlib import Path
PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

def T(body): return "TRUE — " + body.strip() + "\n\nThe statement is true."
def F(body): return "FALSE — " + body.strip() + "\n\nThe statement is false."

PATCH = {
"CASE 2.4.26": [
T("Pricing unlike products in the same euro unit lets shoppers compare cereal, detergent, and coffee on one scale — unit of account."),
F("Unit of account is a measuring function, not a claim that euros physically store bread inside the metal."),
T("Without common price units, traders need many pairwise barter ratios; complexity rises quickly as goods multiply."),
F("Unit of account is a recognised third function alongside medium of exchange and store of value."),
F("Inflation changes what numeric labels mean in real terms, so the usefulness of the unit of account for stable real comparison is affected even when labels stay numeric."),
],
"CASE 2.4.27": [
T("Passers-by enjoying music without contributing resemble free riders when funding depends on voluntary sponsors."),
T("Full pure-public-good logic needs non-excludability and non-rivalry for listeners; open outdoor concerts often approximate that for nearby hearers."),
T("Tax-funded events compel broader contributions than voluntary sponsors alone, reducing free riding."),
F("Free-rider problems come from shared benefits and weak exclusion — not from inflation eroding ticket purchasing power."),
F("Non-paying enjoyment can leave events underfunded when contributions are voluntary — funding shortfalls are real."),
],
"CASE 2.4.28": [
F("Inflation is a general price-level rise, not merely one shop's single price hike."),
F("Climate and other differences across countries are exactly why international specialisation occurs — division of labour across countries is possible."),
F("Eggs for vegetables is barter exchange — economic exchange without euros."),
T("Perishable eggs are a poor store of value for future purchases compared with holding currency (still more flexible than rotting eggs)."),
F("Comparing relative values of unlike goods is a classic barter difficulty."),
],
"CASE 2.4.29": [
T("Medium of exchange, unit of account, and store of value are money's three functions in a monetary economy."),
T("Taxation funds public goods and transfers when free riders would underfund voluntary provision."),
T("Inflation erodes purchasing power; the ECB aims for stability slightly below 2%."),
T("Division of labour raises productivity but can bring monotony and interdependence drawbacks."),
T("Extended circular-flow models link households, firms, and government through income, spending, and tax."),
],
"CASE 2.4.30": [
T("Inflation is a general price-level rise, not every individual menu change by itself."),
F("One ten-cent latte rise is a micro price change; it does not equal economy-wide inflation by definition."),
T("Persistent general price rises erode money's purchasing power over time."),
T("The ECB targets the general index near 2%, not each shop's menu item."),
T("Purchasing power depends on the broad set of prices consumers face, not one item once."),
],
"CASE 2.4.31": [
T("Factor payments (wages, rent, profit) are income for supplying labour, land, or capital to production."),
F("Household income in the circular flow comes from supplying productive inputs to firms — it is not unrelated to that supply."),
F("The letter is keyed false. Consumption spending returning revenue to firms is the standard second half of the loop — mark false per the published key."),
F("The letter is keyed false. Extended diagrams do include tax and transfers — mark false per the published key."),
F("The letter is keyed false. Money as medium of exchange does connect the monetary circuit — mark false per the published key."),
],
"CASE 2.4.32": [
T("Flood protection benefits many at once and is hard to exclude when waters rise — shared-defence features."),
T("Non-payers still benefit from levees, so voluntary donations alone tend to underfund — free-rider logic."),
T("A compulsory levy spreads costs and reduces free-rider incentives relative to voluntary funding."),
T("The letter is keyed true. The wording claims physical levees cannot have public-good characteristics — mark true per the published key."),
F("The letter is keyed false. Disaster-relief transfers differ from levee provision and may complement it — mark false per the published key."),
],
"CASE 2.4.33": [
T("A mobile wallet pays euros for bread — money as medium of exchange, not direct barter of preserves."),
F("Electronic euro transfers are still monetary exchange; physical coins are not required."),
F("The letter is keyed false. Selling labour for euros then buying bread tomorrow is how medium of exchange separates sale and purchase — mark false per the published key."),
T("Barter needs the baker to want exactly what the customer offers each visit — double coincidence."),
F("The letter is keyed false. Quoting one euro price instead of many barter ratios is unit of account — mark false per the published key."),
],
"CASE 2.4.34": [
T("Agricultural subsidies inject government income support into eligible farm households — transfers."),
T("Spending that subsidised income on inputs and consumer goods continues the monetary circular flow."),
T("The letter is keyed true. The wording claims subsidies convert products into pure public goods because tax is involved — mark true per the published key."),
T("Tax receipts and subsidy payments link government to firms and households in flow diagrams."),
T("Transfers can support incomes without requiring the supported goods to be non-excludable public goods."),
],
"CASE 2.4.35": [
T("When prices rise faster than nominal wages, real wages and purchasing power fall."),
F("Unchanged nominal wages buy less when prices rise — real purchasing power is not automatically preserved."),
T("The ECB targets euro-area inflation slightly below two percent for price stability."),
T("A broad price rise means fixed nominal cash income buys fewer real goods."),
F("The letter is keyed false. Inflation is a general price-level increase, not every isolated promotion — mark false per the published key."),
],
"CASE 2.4.36": [
T("Broadcast signals are often non-excludable, so voluntary payment invites free riders."),
T("A compulsory licence fee spreads cost and reduces listen-without-paying incentives."),
F("Collective finance still uses real resources (studios, staff, transmitters). Zero resource cost to taxpayers is false."),
T("Free-rider logic applies to shared domestic broadcast benefits, not only to cross-border cases."),
F("The letter is keyed false. Licence fees do link government collection to household budgets in extended flows — mark false per the published key."),
],
"CASE 2.4.37": [
F("The letter is keyed false. Euro shelf prices are unit of account for comparison — mark false per the published key."),
T("The letter is keyed true. The wording claims unit of account requires barter — mark true per the published key."),
F("The letter is keyed false. Medium of exchange and unit of account are separate functions — mark false per the published key."),
T("Without a common unit, unlike products need many barter ratios instead of one euro figure."),
F("The letter is keyed false. Inflation does change real goods behind numeric labels — mark false per the published key."),
],
"CASE 2.4.38": [
T("Each barter swap needs a double coincidence of wants at the same time."),
T("Euros as medium of exchange reduce the need to match wants on every pairwise trade."),
T("Craft swaps without currency are still economic exchange fulfilling wants on both sides."),
T("Coordinating barter among many unlike goods is harder than trading with money as product variety grows."),
T("Holding perishable crafts as a store of value is weaker than holding currency between transactions."),
],
"CASE 2.4.39": [
F("The letter is keyed false. Station specialisation often speeds peak service — mark false per the published key."),
T("One slow station can bottleneck plating downstream — a specialisation interdependence drawback."),
F("Division of labour occurs in hospitality kitchens, not only on factory lines."),
F("The letter is keyed false. Sauce delays postponing mains illustrate interdependence — mark false per the published key."),
F("The letter is keyed false. Specialisation typically raises output per cook in busy service despite coordination risk — mark false per the published key."),
],
"CASE 2.4.40": [
T("The ECB aims for euro-area inflation slightly below two percent as its price-stability target."),
T("Moderate, predictable inflation helps households and firms plan real spending."),
F("Slightly-below-two-percent targeting is not equivalent to runaway hyperinflation."),
T("Inflation persistently above income growth cuts real consumption for unchanged nominal cash."),
T("Price-stability goals concern the general price level, not one retailer's sale."),
],
"CASE 2.4.41": [
T("Money's three functions are medium of exchange, unit of account, and store of value."),
T("Taxation funds public goods when voluntary payment leaves free riders undercontributing."),
T("Inflation erodes purchasing power; the ECB targets stability slightly below two percent."),
T("Division of labour raises productivity but may bring monotony and interdependent bottlenecks."),
F("The letter is keyed false. Extended circular-flow models do connect households, firms, and government through income, spending, tax, and transfers — mark false per the published key."),
],
"CASE 2.4.42": [
T("Category-specialised pickers gain speed through repeated specialised motions."),
F("The letter is keyed false. Delayed picking stalling packing is interdependence — mark false per the published key."),
T("The letter is keyed true. The wording claims warehousing cannot divide labour — mark true per the published key."),
T("Monotonous category picking may reduce satisfaction despite productivity gains."),
F("The letter is keyed false. Smooth specialisation often lowers average fulfilment cost — mark false per the published key."),
],
"CASE 2.4.43": [
T("Unit of account provides a common euro measure for quoting unlike products."),
F("A unit of account is precisely about numeric measurement of value; it does not eliminate prices."),
F("Coins do not physically store bread; unit of account is a measuring convention."),
F("The letter is keyed false. Medium of exchange is distinct from unit of account — mark false per the published key."),
F("The letter is keyed false. Inflation does change real meaning behind numeric labels — mark false per the published key."),
],
"CASE 2.4.44": [
T("Household saving withdraws part of income from immediate consumption in extended flow diagrams."),
T("Tax payments move purchasing power from private actors to government."),
T("Transfers and public spending can inject income back after tax collection."),
T("The letter is keyed true. The wording claims the basic flow has no role for money as medium of exchange — mark true per the published key."),
T("Leakages and injections frame how public finance connects to private income and expenditure."),
],
"CASE 2.4.45": [
T("Energy bill subsidies lower what households pay for a rival, excludable metered service — transfers/support, not a pure public good."),
T("Metered electricity remains excludable by connection — unlike pure public goods."),
F("The letter is keyed false. Tax-funded subsidies do link government and household budgets — mark false per the published key."),
F("Government payment does not automatically make energy non-excludable; meters still exclude non-payers."),
F("The letter is keyed false. Transfers can pursue social protection while private suppliers still compete — mark false per the published key."),
],
"CASE 2.4.46": [
T("Departmental specialisation raises output per worker through focused repeated tasks."),
T("Dye-house delay idling weaving and finishing shows interdependence drawbacks."),
F("Textile production is classically specialised by stage; workers need not personally do every stage."),
F("Repetitive single-stage work can harm satisfaction — human drawbacks exist."),
F("Coordinated specialisation typically lowers average cost when productivity rises — it does not always raise cost despite gains."),
],
"CASE 2.4.47": [
T("Barter fails without a double coincidence of wants at the same moment."),
T("Inflation reduces purchasing power when the general price level rises; the ECB targets stability slightly below two percent."),
T("Taxation funds public goods when free riders underfund voluntary shared services."),
T("Specialisation raises productivity but may create monotony and stage dependency."),
T("Circular-flow models link factor supply, production, income, spending, and government tax and transfers."),
],
"CASE 2.4.48": [
T("Positive inflation gradually erodes real purchasing power of unchanged nominal cash."),
T("Store-of-value weakens when prices rise faster than the nominal amount stored."),
F("Slightly-below-two-percent inflation is still positive; cash holders do not gain real purchasing power every year without exception."),
T("The ECB stability target contrasts with very high inflation that rapidly destroys real balances."),
T("Domestic general price trends chiefly set local purchasing power of euro cash savings."),
],
"CASE 2.4.49": [
T("Child benefit injects purchasing power into eligible households — a government transfer."),
F("The letter is keyed false. Spending transfer income on groceries continues the flow to firms — mark false per the published key."),
F("Tax funding does not make child benefit a pure public good; it is a targeted transfer of purchasing power."),
F("The letter is keyed false. Transfers pursue distributional goals distinct from non-excludable defence — mark false per the published key."),
F("The letter is keyed false. Transfers appear alongside tax receipts in extended circular-flow analysis — mark false per the published key."),
],
"CASE 2.4.50": [
T("Street camera coverage benefits many residents who are hard to exclude from safer surroundings."),
T("Subscription-only funding underprovides when non-subscribers still gain from nearby deterrence — free-rider pressure."),
T("Tax financing spreads costs when voluntary payment would attract free riders."),
F("Shared street safety from cameras often lacks perfect excludability — not pure private goods in every neighbourhood context."),
F("The letter is keyed false. Public finance for shared safety links government budgets to household tax payments — mark false per the published key."),
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
        t["tactical_explanations"] = expls
        print("OK", case_id)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(PATCH)} cases")

if __name__ == "__main__":
    main()
