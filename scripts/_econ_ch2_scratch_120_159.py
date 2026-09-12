#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch2 cases CASE 2.6.25 .. CASE 2.7.16 (indices 120:160)."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch2-subtopics.json"
FROM_ID = "CASE 2.6.25"
TO_ID = "CASE 2.7.16"

CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    # collapse excess internal whitespace but keep paragraph breaks
    paras = [re.sub(r"[ \t]+", " ", p).strip() for p in body.split("\n\n")]
    body = "\n\n".join(p for p in paras if p)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Bodies only (no closer). Lengths tuned to Compact/Standard/Expanded mix per case.
EXPL: dict[str, list[str]] = {}

EXPL["CASE 2.6.25"] = [
    # A True C ~220
    """Producers who expect lower costs next month often wait before running costly batches today.

Delaying output until the cheaper inputs arrive cuts today's offered quantity at each price, which is a leftward shift of current supply rather than a slide along an unchanged curve.""",
    # B False S ~420
    """An expected future shortage can raise the incentive to hold inventory for later delivery, but it does not force every producer to shut today's plant completely.

Sellers still fill contracted orders, keep reputation with regular buyers, and earn cash flow from current sales. Halting all output would forfeit those gains without guaranteeing a later windfall. Expectations change how much is offered now versus stored; they do not erase current supply to zero.""",
    # C False L ~650
    """If farmers expect wheat prices to climb next season, the usual response is to hold grain off today's market, not to dump inventory into current supply.

Dumping would lower the price they receive now and leave less stock to sell when the higher price arrives. The forward-looking choice therefore reduces current quantity supplied at each farmgate price, shifting today's supply leftward. The claim reverses that logic by treating a higher future price as a reason to flood the spot market. Storage, futures hedges, and delayed harvest sales all point the other way: withhold now, sell later when the expected premium appears.""",
    # D False S ~420
    """Expectations about next month's costs or prices are non-price determinants of supply. When they change, the entire supply schedule moves.

A movement along today's supply curve requires a change in today's own price of the good, holding other factors fixed. Outlook revisions are not that own-price change, so they shift the curve rather than tracing points on an unchanged one.""",
    # E False C ~220
    """Storage choices driven by future price outlook change how much reaches the spot market today.

More grain locked in silos means less current market supply at each price; less storage means more. Those decisions therefore alter today's supply, they do not leave it unchanged.""",
]

EXPL["CASE 2.6.26"] = [
    # A True S
    """Styrian vineyards that forecast a heavy crop need many seasonal pickers in August. Anticipating that surge, they post more contract slots and raise offered day rates before sugar peaks.

That response increases quantity of picker labour demanded and can shift the labour-demand schedule rightward for August contracts, so the harvest expectation shows up as stronger current demand for pickers.""",
    # B True C
    """Signing picker contracts before peak sugar locks in labour when grapes are still green.

Once sugar spikes, every estate wants hands at once. Early contracts reduce the scramble and the risk of unpicked fruit when the market for pickers tightens.""",
    # C True L
    """Wage offers below the market-clearing level leave more pickers willing to work elsewhere than vineyards can attract at that pay.

Quantity demanded of labour at the low wage exceeds quantity supplied to those estates, which is a shortage of available pickers. Raising the offered day rate, or improving housing and hours, is how the market clears. Leaving the wage stuck below equilibrium simply prolongs unfilled slots during the narrow harvest window when grapes cannot wait.""",
    # D True C
    """When neighbouring fruit regions raise picker wages, some seasonal workers relocate.

Fewer pickers remain available to Styrian vineyards at each local wage, which is a leftward shift of labour supply in Styria.""",
    # E True S
    """Higher day rates make seasonal picking more attractive relative to other short jobs.

Along the labour supply curve, a higher wage increases the quantity of pickers willing to offer their time. Estates that post better rates therefore typically see more applicants for the same harvest week.""",
]

EXPL["CASE 2.6.27"] = [
    # A True L
    """When demand and supply both move, equilibrium price is not pinned by either shift alone.

A large rightward demand shift tends to raise price; a large rightward supply shift tends to lower it. The net price change is the sum of those opposing or reinforcing pressures, so relative magnitudes decide whether the new intersection sits higher, lower, or roughly unchanged. Quantity can also move in either direction depending on which curve travels farther. Simultaneous-shift analysis therefore always asks which force dominates on price and which on quantity.""",
    # B True C
    """Diagrams compare the old intersection with the new one after both curves move.

Reading the new crossing point against the old one shows whether equilibrium price and quantity rose, fell, or stayed ambiguous.""",
    # C True S
    """Demand shifting right raises willingness to pay; supply shifting left cuts available output at each price.

Both forces push the intersection upward on the price axis, so equilibrium price is likely to rise even if the quantity change remains ambiguous without sizes.""",
    # D True L
    """Rightward demand and rightward supply both increase the quantity that clears at the new intersection.

Buyers want more at each price and sellers offer more at each price, so the equilibrium quantity almost always expands. Price may rise or fall depending on which shift is larger, but the quantity conclusion is firm when both curves move right. Natural examples include a tourism boom that lifts demand while new capacity comes online on the supply side.""",
    # E True C
    """A disaster can destroy plant (supply left) while also changing what households urgently buy (demand shifts).

Both schedules can therefore move in the same episode, not only one at a time.""",
]

EXPL["CASE 2.6.28"] = [
    # A True C
    """A binding ceiling holds price below the market-clearing level, so quantity demanded exceeds quantity supplied.

Queues, waiting lists, and other non-price rationing then allocate the scarce units that sellers still offer.""",
    # B True L
    """A legal maximum set above the equilibrium price does not constrain the market. Sellers and buyers already trade at a price below that cap, so the ceiling never binds.

The observed price stays at the free-market level, quantity clears without forced shortage, and the regulation is redundant unless something later pushes the free price up toward the cap. Binding ceilings are those set below equilibrium; caps above it leave the intersection unchanged.""",
    # C True S
    """Rent ceilings below market rents cut the return landlords earn on each flat.

Over time fewer units are offered for lease, maintenance may slip, and conversion to other uses becomes attractive. The regulated market therefore tends to show fewer available apartments than an uncontrolled market at the same demand.""",
    # D False C
    """At a binding ceiling, quantity demanded exceeds quantity supplied: that is shortage, not surplus.

The claim that supply exceeds demand at the ceiling reverses the shortage geometry.""",
    # E False L
    """A ceiling below equilibrium stops price from rising to clear a shortage; it does not address a surplus, and surplus is not the problem it creates.

When the legal maximum sits under the free-market price, buyers want more than sellers offer. The market would need a higher price to ration demand and draw out supply. The ceiling blocks that rise, so shortage persists. Surpluses appear under price floors above equilibrium, a different intervention. The statement mislabels both the direction of the needed price change and the type of imbalance a ceiling produces.""",
]

EXPL["CASE 2.6.29"] = [
    # A True S
    """Long waiting lists for Graz rent-controlled flats mean more households want those units at the capped rent than landlords will lease.

That excess demand at the regulated price is exactly what shortage looks like when price cannot rise to clear the market.""",
    # B True L
    """When controlled rents sit below open-market leases for comparable flats, quantity demanded at the controlled rent exceeds quantity supplied of controlled units.

The gap shows up as queues, informal side payments, or years on a waiting list. Open-market rents can clear nearby, but the regulated segment remains short of available flats for as long as the cap binds below the would-be equilibrium. Persistence follows because the legal rent cannot climb to equate the two sides.""",
    # C True C
    """If regulated rents lag rising costs, landlords cut discretionary maintenance rather than lose money on each tenancy.

Redirected spending is a predictable response when the rent ceiling squeezes the net return.""",
    # D False S
    """Capped money rents do not make flats abundant; they typically create shortage, so tenants still pay in time, search effort, and weaker housing quality.

Those non-price costs matter precisely because the money price is not allowed to ration scarce controlled units.""",
    # E False L
    """Open-market leases posting higher monthly rates than controlled flats imply that the free-market equilibrium rent lies above the controlled cap, not below it.

If the equilibrium sat below the cap, uncontrolled landlords would already be advertising at or under the controlled level and the cap would not bind. Higher advertised open-market rents are evidence that the ceiling is holding regulated rents below what the uncontrolled market clears at. The statement flips that comparison.""",
]

EXPL["CASE 2.6.30"] = [
    # A True L
    """A floor set above equilibrium keeps the legal price from falling back to the market-clearing level.

At that high minimum, sellers offer more than buyers want, so unsold stock accumulates. Clearing the surplus would require a lower price, but the floor forbids trading below the minimum. The imbalance therefore persists until demand rises, supply falls, or policy absorbs the excess. That is why binding floors create lasting surplus rather than a quick return to the old intersection.""",
    # B True S
    """Agricultural floors often leave farmers with more output than buyers take at the support price.

Governments sometimes buy the excess, store it, or export it under subsidy so the floor can hold without unsold crops rotting in the field.""",
    # C True C
    """At a binding floor, quantity supplied exceeds quantity demanded by construction of the diagram.

That excess supply is the surplus the minimum price creates.""",
    # D True L
    """A floor below the free-market price does not bind. Trade already occurs above the legal minimum, so sellers receive more than the floor requires and the constraint is slack.

Only when the minimum sits above equilibrium does it force price up and create surplus. Non-binding floors are therefore common on paper yet irrelevant to observed price and quantity until market conditions drift down toward the legal line.""",
    # E False S
    """A higher minimum price intended to help sellers raises the chance of unsold stock; it does not magically clear every unit.

Buyers take less at the higher price while sellers offer more, so surplus appears rather than vanishing instantly.""",
]

EXPL["CASE 2.6.31"] = [
    # A True C
    """Wages are the price of labour services. They balance how much work households offer with how many hours firms want to hire.

That coordinating role is the same price mechanism used in goods markets, applied to labour.""",
    # B True S
    """When a binding minimum wage lifts the wage above the market-clearing level, each extra hour costs employers more.

Along the labour demand curve, higher wages reduce quantity demanded of labour. Some vacancies close, hours are cut, or hiring slows compared with the unregulated equilibrium.""",
    # C True C
    """A minimum wage below the equilibrium wage does not constrain bargains already struck above that floor.

The market wage stays at its clearing level, so the statute is not binding for outcomes.""",
    # D False L
    """A wage floor above the clearing wage creates surplus labour: more people want jobs at that pay than firms will hire.

Unemployment of that form can rise, not disappear. Instant elimination of all unemployment would require quantity demanded to jump to meet the larger quantity supplied, which higher mandatory wages work against. Other frictions may also remain. The absolute claim that a binding minimum clears every jobseeker immediately contradicts the surplus geometry of a wage floor.""",
    # E False S
    """At a binding minimum wage, quantity supplied of labour exceeds quantity demanded, so not every willing worker finds a post.

Instant full employment for all applicants is exactly what the surplus prevents.""",
]

EXPL["CASE 2.6.32"] = [
    # A True S
    """When feed costs jump, each litre of raw milk costs Alpine farms more to produce at any given farmgate price.

Higher input costs shift the milk supply curve leftward: less milk is offered at each price until farmgate prices adjust.""",
    # B True C
    """After a glut, cutting the cooperative quota reduces how much members may deliver.

Lower allowed deliveries shrink the surplus that piled up at the old farmgate price and nudge the market back toward balance.""",
    # C False S
    """Rising feed costs with a fixed farmgate price squeeze margins; farmers do not expand output to celebrate.

They typically cut production or exit, which is the opposite of an expansionary response to higher costs.""",
    # D False L
    """A quota that caps deliveries limits how much milk members may bring to the co-op; it does not force extra production.

Quantity supplied to the market falls or is capped relative to an unregulated surge. Forcing extra production would require a mandate to deliver more, not a ceiling on deliveries. After feed-cost shocks and output gluts, quotas are tools to restrain surplus, not engines that increase supply.""",
    # E False C
    """Surging milk output without matching demand creates surplus at the old farmgate price, not shortage.

Shortage would mean demand exceeding supply; here supply overshoots demand.""",
]

EXPL["CASE 2.6.33"] = [
    # A True C
    """Inflation tracks a broad basket through price indices, not one shelf tag in isolation.

Indices average many goods and services so the measured price level reflects economy-wide movement.""",
    # B True S
    """Policy rates influence borrowing and spending, which feed into inflation pressure.

Central banks therefore watch inflation data closely when they set or change those rates, using the price-level path as a key target or guide.""",
    # C True L
    """Households who buy roughly the same mix of food, rent, energy, and services experience inflation as a rising cost of that basket over months and years.

Even if one item is cheaper in a sale, a sustained climb in the overall basket means money buys less of the usual living standard. That lived experience matches the statistical definition based on price indices. One-off discounts on a single product are noise around the trend, not inflation itself.""",
    # D True S
    """Cash sitting idle earns no interest while prices drift up, so each euro buys fewer goods later.

That loss of real purchasing power is why moderate inflation quietly taxes non-interest-bearing money balances.""",
    # E False C
    """A one-day sale discount on one product is a temporary fall in a single price, not a sustained rise in the overall price level.

Inflation is the opposite kind of movement, measured across many items over time.""",
]

EXPL["CASE 2.6.34"] = [
    # A True S
    """A crop failure can spike one food price without being monetary inflation.

Inflation from too much money chasing goods is a broad price-level rise tied to excess nominal spending, a different mechanism from a single harvest shock.""",
    # B True C
    """Newly printed balances spent quickly lift aggregate demand before real output can catch up.

That imbalance shows up as upward pressure on the general price level.""",
    # C True L
    """When the money stock grows faster than real goods and services, more nominal spending chases a slowly growing basket of output.

Prices throughout the economy tend to rise as sellers meet the extra demand with limited capacity. The phrase "too much money chasing too few goods" compresses that growth-rate comparison. Matching money growth to sustainable real output growth is the usual antidote sketched in monetary explanations of inflation.""",
    # D False C
    """Holding other factors fixed, a larger money supply increases spending power and pressure on limited goods; it does not reduce that pressure.

The claim reverses the monetary-demand channel.""",
    # E False S
    """Too much money chasing too few goods is a story about inflation, rising prices, not deflation.

Deflation is a sustained fall in the price level, the opposite diagnosis.""",
]

EXPL["CASE 2.6.35"] = [
    # A True L
    """Shopkeepers seeing supplier invoices climb across many inputs are watching cost pressure that feeds into retail prices.

When those increases are broad rather than confined to one niche item, they signal upward movement in the price level, the phenomenon inflation describes. Bridge-funding debates that inject new money can amplify that pressure if spending rises before repair materials and labour expand real supply. The invoice pattern is therefore relevant evidence in the note-issuance discussion, not a side anecdote.""",
    # B True C
    """Cash savings lose real value when prices rise faster than any interest those balances earn.

Inflation is exactly that erosion of purchasing power for idle money.""",
    # C True S
    """Paying for bridge repairs with newly issued notes puts spending power into contractors' hands before the repaired bridges add lasting services to households.

Extra nominal demand can therefore appear ahead of extra real output, a classic inflationary timing gap.""",
    # D True L
    """Rapid note issuance expands the money available to spend. If real output of goods and services does not grow in step, more money pursues roughly the same basket and prices tend to rise.

That contribution to inflationary pressure is why policymakers debate issuance speed even for popular projects like bridges. Matching finance to real capacity, or funding through taxes and borrowing that reshuffle existing balances, limits the pure money-injection channel.""",
    # E True C
    """Whether shops can meet extra spending with more real goods decides how much note issuance shows up as higher prices versus higher output.

Policymakers therefore ask if capacity can absorb the stimulus.""",
]

EXPL["CASE 2.6.36"] = [
    # A True C
    """Higher interest rates make loans costlier, so households and firms often borrow and spend less.

Weaker demand pressure eases the force pushing the price level up.""",
    # B True L
    """When deposit and bond yields rise, saving becomes more attractive relative to buying durables today.

Some consumption shifts into later periods as households earn more for waiting. That intertemporal substitution is one channel through which rate increases cool current demand and, with it, inflationary pressure. It complements the direct effect on loan-financed spending.""",
    # C True S
    """Mortgages and equipment loans become more expensive when policy rates climb.

Fewer homes and machines are financed at the margin, which is a concrete path from higher rates to lower interest-sensitive spending.""",
    # D True C
    """Tightening via higher rates aims to slow money and credit growth toward a pace real output can sustain.

Aligning those growth rates is the anti-inflation objective of the tightening.""",
    # E True L
    """When inflation runs above target for a stretch, many central banks raise the policy rate to restrain demand.

The move is not automatic every month, but persistent overshoots are a standard trigger for tightening cycles. Communication often ties the hike explicitly to bringing inflation back toward the mandated target band.""",
]

EXPL["CASE 2.6.37"] = [
    # A True S
    """Policy tightening that lifts mortgage reference rates raises the monthly cost of a new housing loan.

Along the demand curve for credit, higher borrowing costs reduce quantity demanded of new mortgages. Some buyers postpone purchases or shrink loan size, which is the intended cooling of interest-sensitive demand.""",
    # B True L
    """Rate changes do not hit spending, hiring, and prices on the same day they are announced.

Households refinance on schedules, firms complete projects already funded, and contracts reset with delay. Central banks therefore face a timing trade-off: tighten too late and inflation may embed; tighten too early or too hard and real activity may slow before price data confirm the turn. Lagged transmission is why policymakers watch leading indicators as well as current inflation prints.""",
    # C True C
    """Tightening usually means higher key policy rates, slower money or credit growth, or both.

Those tools aim to restrain nominal spending relative to capacity.""",
    # D False S
    """Higher rates raise the cost of financed equipment, which discourages investment at the margin rather than accelerating it.

Businesses delay or cancel projects when capital costs climb; they do not expand investment because loans got dearer.""",
    # E False L
    """Spending is not fixed with respect to interest rates. Rate-sensitive categories such as housing, cars, and equipment respond when financing costs change.

If tightening reduces those outlays, aggregate demand pressure eases and inflation can fall over time. Claiming that policy can never reduce inflation because spending is immutable denies the transmission channel the tools are built on. Evidence from tightening cycles shows demand and inflation often cool after lags, even if the size and timing vary.""",
]

EXPL["CASE 2.6.38"] = [
    # A True L
    """After policy rates rise, deposit and savings yields often follow. Some Vienna households then shift euros from discretionary consumption into higher-yielding accounts.

That portfolio move reduces current spending on goods and services even before any mortgage decision. It is one quiet channel from rate rises to softer demand, sitting alongside the more visible effect on loan costs for flat buyers shopping the market.""",
    # B True S
    """Postponing a flat purchase means the household does not draw the mortgage this quarter.

Current quantity demanded for housing credit falls when many shoppers wait for lower rates or clearer prices.""",
    # C False C
    """Central bank rate rises are meant to slow spending that feeds inflation, not to accelerate it.

The claim reverses the direction of the policy goal.""",
    # D False L
    """If many households delay purchases, fewer buyers compete for the same listings in the short run.

Weaker demand pressure tends to soften equilibrium home prices or slow their rise, not push them higher. A price increase would require stronger demand or tighter supply, not a wave of postponed bids. The statement confuses delayed demand with intensified bidding.""",
    # E False S
    """Higher mortgage reference rates raise the monthly payment on a given loan amount; they do not reduce borrowing costs.

Shoppers comparing offers after a hike see dearer credit, which is why some postpone.""",
]

EXPL["CASE 2.6.39"] = [
    # A True C
    """A rightward demand shift meets an upward-sloping supply curve at a higher price and larger quantity.

Graphically the new equilibrium slides up along the unchanged supply schedule.""",
    # B False S
    """Higher equilibrium prices after a demand increase give producers incentive to offer more, not less, along the supply curve.

Quantity supplied rises with price; reducing supply along the curve would be the response to a price fall.""",
    # C False C
    """More buyers entering is a demand-curve shifter: the whole schedule moves right.

It is not a movement along a fixed demand curve, which would require only the good's own price to change.""",
    # D False L
    """With supply held fixed, a rightward demand shift raises both equilibrium price and equilibrium quantity.

Buyers compete the price up the supply curve, and sellers respond with more output. Lowering both price and quantity would require a leftward demand shift or a different double-shift story. The claim states the opposite of the standard single-shift result.""",
    # E False S
    """After demand increases, the market moves to a new intersection where quantity demanded again equals quantity supplied.

A permanent gap with demand below supply is not the equilibrium outcome of a demand increase.""",
]

EXPL["CASE 2.6.40"] = [
    # A True S
    """When supply shifts left, the new clearing point equates the smaller quantity sellers offer with the quantity buyers take at the higher price.

At that new equilibrium, quantity demanded equals the reduced quantity supplied by definition of equilibrium.""",
    # B True C
    """The higher price after a supply drop moves buyers up their demand curve.

They purchase fewer units; that is a fall in quantity demanded along an unchanged demand schedule.""",
    # C True S
    """A leftward supply shift with fixed demand typically lifts equilibrium price and cuts equilibrium quantity.

Less is available at each price, so the intersection moves up and left along demand.""",
    # D True L
    """Factory fires, port closures, or input embargoes reduce how much firms can offer even when consumer tastes stay the same.

Those events are supply shocks: the supply curve moves left while the demand curve can remain put. Prices rise and quantities fall until a new balance is found. Separating preference shifts from production disruptions keeps the diagnosis of the equilibrium change clear.""",
    # E True C
    """Graphically, supply shifting left slides the equilibrium up along a downward-sloping demand curve.

Price rises and quantity falls along that demand schedule.""",
]

EXPL["CASE 2.6.41"] = [
    # A True C
    """At the old price, population growth leaves more buyers wanting the good than before, so shortage pressure appears.

Price then rises to ration demand and draw out supply until the market clears again.""",
    # B True S
    """More residents in a city increase ridership interest in buses and trains at each fare.

That is a rightward shift of demand for public transport services, not a mere movement along the old curve.""",
    # C True L
    """Immigration that expands the local consumer base raises housing demand while apartment supply responds only slowly when construction lags.

Competition for scarce units pushes equilibrium rents up. The price adjustment is the market's way of allocating limited housing until new building or denser use expands supply. Ignoring the slow supply response would miss why rents often climb in growing cities even without a taste shock among incumbents.""",
    # D False S
    """Demographic changes alter how many buyers exist at each price, which shifts the demand curve.

Movements along demand require the good's own price to change with other determinants held fixed; population is one of those other determinants.""",
    # E False C
    """A shrinking town population reduces the number of buyers at each price, shifting demand leftward.

Remaining residents do not automatically spend enough more to reverse that leftward move.""",
]

EXPL["CASE 2.6.42"] = [
    # A True S
    """A per-unit tax on producers adds to the cost of each unit sold, much like a higher input price.

Sellers require a higher gross price to supply any given quantity, which appears as a leftward (or upward) shift of the supply curve.""",
    # B True C
    """After the tax, the new equilibrium typically involves a smaller market quantity than before.

Statutory incidence on producers still reduces traded volume through the supply shift.""",
    # C False L
    """With a producer tax, sellers need a higher market price to cover the tax and still supply the same quantity; they do not accept lower prices for the same volume.

The supply schedule shifts so that each quantity corresponds to a higher required price. Claiming sellers require lower prices reverses the cost logic of the tax.""",
    # D False C
    """Producer taxes that cut quantity supplied typically raise the price buyers pay, not lower it.

The burden is shared, but the buyer price usually rises relative to the pre-tax equilibrium.""",
    # E False S
    """A new tax is a non-price determinant that shifts supply; it is not a movement along an unchanged supply curve.

Along-curve moves come from changes in the good's own price alone.""",
]

EXPL["CASE 2.6.43"] = [
    # A True L
    """Per-unit subsidies pay farmers for each unit produced, lowering the net cost of bringing output to market.

At any given market price received from buyers, the subsidy makes production more worthwhile, so quantity supplied rises. Graphically the supply curve shifts rightward. That is why subsidised harvests can expand even when the sticker price buyers see has not yet fallen. The payment is a supply-side support, not a demand-curve shifter for the crop itself.""",
    # B False C
    """A rightward supply shift with unchanged demand lowers equilibrium price and raises quantity.

It does not raise price; that would be the leftward-supply result.""",
    # C False S
    """Subsidies support producers' returns or cut their costs; price ceilings legally cap what buyers may be charged.

They are different tools. A subsidy does not cap buyer prices the way a ceiling does.""",
    # D False L
    """Taxpayer-funded production subsidies increase the incentive to supply at each market price; they do not reduce quantity supplied by confusing producers.

Confusion is not the mechanism. The standard effect is a rightward supply shift and typically larger equilibrium quantity. Claiming subsidies shrink supply reverses both the incentive and the diagram.""",
    # E False C
    """Production subsidies that lower effective costs shift supply, not demand.

Demand would move if buyers' incomes or tastes changed; the subsidy hits the sellers' cost side.""",
]

EXPL["CASE 2.6.44"] = [
    # A True C
    """Drought that cuts yields means less harvest available at each price.

That is a leftward shift of agricultural supply for the affected crop.""",
    # B True L
    """When domestic harvests shrink, importers can raise inbound shipments if foreign stocks and logistics allow.

Extra foreign supply partially offsets the domestic leftward shift, limiting how far local prices spike. The offset is rarely perfect in the short run because shipping takes time and world prices may rise too, but the direction is clear: imports are a supply-side relief valve, not a demand shock.""",
    # C True S
    """Sudden leftward supply shifts in food markets often produce sharp short-run price spikes while inventories and imports catch up.

Inelastic short-run demand amplifies those spikes for staples.""",
    # D True C
    """Frost that ruins orchard output cuts fruit supply while demand often stays similar.

Equilibrium fruit prices therefore tend to rise.""",
    # E False L
    """Weather shocks hit production possibilities: yields, herds, and transport through storms. They are supply-side events.

Changes in consumer tastes are demand-side shifters. Treating drought or frost as identical to a taste change misclassifies the curve that moves and predicts the wrong combination of price and quantity responses. Supply left with stable demand raises price and cuts quantity; a pure taste boom raises both price and quantity.""",
]

EXPL["CASE 2.6.45"] = [
    # A True S
    """If buyers expect next month's prices to be lower, waiting becomes attractive.

Current quantity demanded can fall today as purchases are deferred, which is an expectations-driven softening of present demand.""",
    # B True L
    """Expecting higher future petrol prices, drivers may fill tanks and store cans now while the pump price is still lower.

That stock-up behaviour raises current demand for petrol at today's prices, a rightward shift (or increase in current quantity demanded) driven by the outlook, not by a fall in today's pump price. Expectations are classic demand shifters when they change the preferred timing of purchases.""",
    # C True C
    """Households who expect rising future income often bring forward durable purchases such as appliances.

Current demand shifts right in anticipation of stronger budgets.""",
    # D False S
    """Expectations about future prices or income are non-price determinants; when they change, the demand curve shifts.

Movements along demand require the good's own current price to change with other factors held fixed.""",
    # E False L
    """Panic buying before announced rationing raises current demand at the still-official prices as shoppers race to shelves.

That is a rightward demand impulse, not a leftward shift. Leftward would mean less willingness to buy at each price. The queues and empty aisles reflect excess demand from the rush, which matches a demand increase ahead of the rationing rule.""",
]

EXPL["CASE 2.6.46"] = [
    # A True L
    """Labour-market equilibrium is the wage and employment pair where the quantity of labour workers offer equals the quantity firms want to hire.

At that point there is neither a general shortage of workers nor a general surplus of jobseekers created by a mis-set wage. Price (the wage) coordinates the two sides just as product prices coordinate goods markets. Deviations above or below that wage create surplus labour or shortage labour until adjustment occurs.""",
    # B True S
    """When workers are scarce relative to openings, employers compete by raising wage offers.

That bidding lifts wages toward the clearing level where quantity demanded and supplied of labour meet.""",
    # C False C
    """Higher wages normally attract more hours and applicants along the labour supply curve; workers do not typically reject paid work because pay rose.

The claim reverses the usual supply response.""",
    # D False L
    """Skill shortages in tech mean quantity demanded of specialised labour exceeds quantity supplied at the going wage: shortage, not surplus.

Shortage puts upward pressure on wages and offers, not downward pressure. Goods-market surpluses are the opposite imbalance and push prices down. Mapping a hiring shortage onto surplus-with-falling-wages swaps both the imbalance label and the wage direction.""",
    # E False S
    """When wages rise above the value of a worker's marginal output, hiring that extra worker reduces profit, so employers hire fewer, not more, at the margin.

Demand for labour slopes downward in that productivity comparison.""",
]

EXPL["CASE 2.6.47"] = [
    # A True C
    """If import supply shrinks while domestic demand holds steady, less total supply meets the same demand curve.

Domestic equilibrium price tends to rise and quantity falls.""",
    # B False S
    """Global supply shocks transmit into domestic markets through trade prices and import volumes.

Domestic equilibrium is not sealed off from foreign disruptions; integrated markets import those shocks.""",
    # C False C
    """Seeking alternate suppliers is a supply-side adaptation that can eventually restore offered quantity.

It does not permanently shift demand leftward for the components firms still need.""",
    # D False L
    """Port closures that delay imports reduce the flow of components into domestic assembly; that is a leftward supply shock for those parts (and for goods that use them).

Demand for components does not jump right merely because ships are stuck; if anything, assembly slows. Calling a port closure a rightward demand shift mislabels which curve moves and predicts the wrong price-quantity pattern.""",
    # E False S
    """Shortages of imported parts constrain finished-goods production, cutting quantity supplied of assemblies rather than increasing it.

Factories cannot ship more finished units when critical inputs are missing.""",
]

EXPL["CASE 2.6.48"] = [
    # A True S
    """Own-price changes move buyers or sellers along a given curve; income, tastes, costs, and similar factors shift the curve.

Keeping those two motions separate is required to read any market diagram correctly.""",
    # B True C
    """When inflation traces to excessive money growth, tighter policy that raises interest rates can slow spending and money creation.

That is a standard monetary response path.""",
    # C True S
    """Ceilings below equilibrium hold price down and create shortage; floors above equilibrium hold price up and create surplus.

The two controls produce opposite imbalances by blocking opposite price adjustments.""",
    # D True L
    """Demand shifters include income, tastes, expectations, and prices of related goods such as substitutes and complements.

Supply shifters include input costs, technology, taxes and subsidies, and producer expectations. Own-price is not listed among either set because own-price changes trace movements along the curves. Reviewing markets means applying that catalogue rather than treating every change as a slide along a fixed schedule.""",
    # E True C
    """Surplus pushes prices down and shortage pushes them up in competitive settings.

Those signals guide the market back toward equilibrium through price adjustment.""",
]

EXPL["CASE 2.7.01"] = [
    # A True C
    """Under perfect competition each firm is too small to move the market price by its own output choice.

It takes the going price as given and chooses quantity; that is the price-taker assumption.""",
    # B False S
    """Standardised grain grades on exchanges can approximate competitive conditions for that commodity.

Retail clothing is differentiated by brand, style, and fit, so those markets do not inherit perfect competition from the mere fact that clothes are physical goods. One sector's near-competitive features do not prove every clothing market worldwide is perfectly competitive.""",
    # C False L
    """Perfect competition requires many sellers, none of whom dominate the market price.

A single dominant seller setting price for the whole market is monopoly, the opposite structure. The competitive model needs price takers, free entry in the long run, and homogeneous products among numerous firms. Replacing that swarm with one price-setting firm abandons every core assumption of perfect competition.""",
    # D False S
    """Competitive models assume buyers and sellers are well informed about prices, not deliberately kept in the dark.

Incomplete information about rivals is a friction, not a defining requirement of perfect competition.""",
    # E False C
    """Heavy differentiation and permanent legal entry barriers break perfect competition assumptions.

The model needs homogeneous products and free entry, not brand moats and blocked entry.""",
]

EXPL["CASE 2.7.02"] = [
    # A True S
    """A town with one piped-water seller faces a local monopoly or monopoly-like utility.

Households lack a rival pipe network at the tap, so that single provider sets the local structure.""",
    # B False C
    """Monopoly is defined for a relevant market, often local or product-specific.

It does not require one firm to dominate every related product on the entire planet at once.""",
    # C False L
    """Legal exclusivity for a water utility grants market power by blocking rival networks, whether the owner is private or public.

Public ownership may change objectives and regulation, but it does not erase the single-seller structure or the ability to set prices above competitive levels absent caps. Profit motive is not required for market power to exist; exclusivity is enough to remove competitive constraint from other pipe providers.""",
    # D False C
    """Sunk pipe costs and scale economies discourage duplicate networks; entry is costly, not costless.

Those conditions support natural monopoly-like supply rather than many rival grids.""",
    # E False S
    """A licence that grants exclusive supply rights does not force the monopolist to charge exactly marginal cost.

Without regulation, monopoly pricing can exceed marginal cost; regulation may impose caps, but the licence alone does not.""",
]

EXPL["CASE 2.7.03"] = [
    # A True L
    """In an oligopoly of a few mobile carriers, each firm knows rivals will notice and may match plan changes.

Pricing and promotion choices therefore weigh likely reactions, not only own-cost and own-demand schedules. That strategic interdependence is the hallmark that separates oligopoly from many-seller competition where one firm's plan tweak is invisible to the market price. Mutual awareness shows up in matched data allowances, handset deals, and copycat tariffs after a leader moves.""",
    # B False C
    """Secret or coordinated identical pricing among rivals to suppress competition is cartel conduct, typically unlawful.

Publishing signed minutes does not turn collusion into a lawful cartel.""",
    # C False S
    """Three national carriers serving most subscribers is concentrated oligopoly, not perfect competition.

Phones being physical objects does not create many price-taking sellers or homogeneous service plans.""",
    # D False L
    """Publishing list prices on websites does not dissolve mutual dependence among few carriers.

Rivals still observe each other's posted plans and can respond within days. Transparency of list prices can even sharpen strategic interaction. Oligopoly interdependence is about recognising rivals' reactions, not about whether prices are hidden. Open websites are compatible with intense oligopolistic rivalry or with collusion; they do not redefine the market as many-seller competition.""",
    # E False C
    """Oligopoly means few sellers, not a mathematical rule of exactly two firms worldwide.

Duopoly is one special case; three or four carriers also fit.""",
]

EXPL["CASE 2.7.04"] = [
    # A True C
    """Competition authorities look for evidence such as collusive meetings and suspicious parallel pricing.

Those patterns help detect cartels that replace independent rivalry.""",
    # B True L
    """Oligopoly is a market structure with few interdependent firms that may still compete vigorously.

A cartel appears when those firms collude on price or output instead of setting strategies independently. The structure (few sellers) is not itself illegal; the collusive agreement is. Headlines about enforcement typically target that shift from rivalry to coordination, using meeting records, chats, or parallel moves that lack a competitive explanation.""",
    # C False S
    """Many small bakeries competing openly on price are the opposite of a cartel.

Cartel behaviour is collusion among rivals to restrict competition, not ordinary price rivalry among numerous shops.""",
    # D False C
    """Cartels aim to raise prices or cut output for joint profit, not to force daily undercutting among members.

Undercutting would break the collusive deal.""",
    # E False L
    """Anti-cartel policy seeks to preserve competition so prices and output reflect rivalry, not to assign every firm an identical legal market share.

Equal shares by decree would be central planning of structure, not the usual goal of cartel bans. Enforcement breaks collusive agreements and deters meetings that fix prices; it does not hand each participant the same percentage of sales by statute.""",
]

EXPL["CASE 2.7.05"] = [
    # A True S
    """Homogeneous grade standards let one farmer's wheat substitute for another's on the exchange.

That product uniformity, plus many participants, helps agricultural commodities approximate perfect competition more closely than branded consumer goods.""",
    # B False L
    """Clothing shops sell differentiated styles, brands, and fits; buyers do not treat every garment as a perfect substitute.

Physical existence of fabric does not satisfy the homogeneous-product and many-price-taker conditions of perfect competition. Using wheat-grade logic to declare every clothing shop worldwide perfectly competitive ignores branding, location, and design rivalry that define those retail markets.""",
    # C True C
    """A handful of luxury houses competing on design fit oligopoly or monopolistic competition, not grain-style perfect competition.

Few sellers and differentiated products drive that classification.""",
    # D False S
    """Two farmers on an exchange are far too few for perfect competition, even if wheat is a crop.

Perfect competition needs many sellers each too small to move price; a two-seller market is duopoly territory.""",
    # E False L
    """On a competitive commodity exchange, the market price emerges from aggregate bids and offers; no single farmer sets the national wheat price each morning.

Each grower is a price taker who decides how much to deliver at the posted grade price. Independent national price-setting by every farmer would be incoherent and contradicts the price-taker role. The claim invents price-making power the competitive commodity story denies.""",
]

EXPL["CASE 2.7.06"] = [
    # A True L
    """An exclusive concession for airport parking removes rival operators from that terminal's curb and garage.

The holder then faces monopoly-like power over on-site parking at that location, even if city-centre garages exist miles away. Drivers who need to park at the terminal have little substitute inside the same relevant geographic market. Concession design therefore shapes structure as much as technology does.""",
    # B True S
    """Without regulation, a local parking monopolist can hold prices above the level many competing lots would produce.

Exclusive rights sustain that gap by blocking entry at the same site.""",
    # C True C
    """For time-sensitive travellers, the relevant parking market can be as narrow as that airport's on-site lots.

One concessionaire then dominates that narrow geography.""",
    # D True L
    """Perfect competition would require many parking operators offering essentially the same on-site spaces at the terminal at once, each unable to move the market price alone.

Exclusive contracts prevent that swarm by design. Calling a single concessionaire "competitive" in the perfect-competition sense stretches the definition past its assumptions about seller count and free entry into the identical location.""",
    # E True S
    """Drivers who insist on on-site terminal parking meet only the concessionaire at the curb lot.

Off-site shuttles are imperfect substitutes for many travellers on tight connections.""",
]

EXPL["CASE 2.7.07"] = [
    # A True C
    """Cereal brands watching and answering each other's promotions display oligopoly interdependence.

Each seller anticipates rivals' campaign responses when planning its own.""",
    # B False S
    """Product differentiation is compatible with oligopoly and is common among breakfast cereals.

It does not require perfect competition; perfect competition assumes homogeneous products among many tiny sellers.""",
    # C False C
    """Wheat grading rules govern commodity wheat, not branded cereal boxes on supermarket shelves.

Similar box dimensions do not import grain-exchange structure into cereal branding.""",
    # D False L
    """Four-brand dominance on the cereal aisle is concentrated oligopoly: few sellers, mutual awareness, and heavy promotion.

Physical boxes on shelves do not make the market perfect competition. Perfect competition needs many price takers and homogeneous goods, not a handful of branded rivals spending on advertising to steal share. Concentration plus differentiation points away from the competitive benchmark.""",
    # E False S
    """Private identical pricing agreements among rivals are cartel collusion, generally unlawful whether or not a government witness sits in the room.

Legality does not turn on attendance by an official observer.""",
]

EXPL["CASE 2.7.08"] = [
    # A True S
    """An exclusive bus franchise leaves passengers on that route without a rival operator on the same line.

The lack of a close substitute seller on the identical route is monopoly-like from the rider's perspective.""",
    # B True C
    """Law can create single-seller structures through franchises and licences, just as cost conditions can create natural monopoly.

Legal origin does not change the market-power result.""",
    # C True S
    """Regulators often cap fares when franchise or monopoly power would otherwise let operators overcharge captive riders.

Fare regulation is a substitute for competition on the protected route.""",
    # D True L
    """The legal barrier that blocks competing bus companies reinforces the single-seller structure locally.

Even if a rival could operate profitably on paper, the franchise rule stops entry onto the same routes. That barrier is why exclusivity persists and why price and quality oversight matter. Removing the legal block would be required before many-operator competition could appear on those lines.""",
    # E False C
    """Exclusive franchise removes rival operators; it does not create perfect competition.

Passengers choosing among stops on one franchise still face a single seller of that service.""",
]

EXPL["CASE 2.7.09"] = [
    # A False C
    """Heavy advertising that builds strong brand loyalty undermines the homogeneous-product and price-taker assumptions of perfect competition.

It strengthens differentiation, not the competitive ideal.""",
    # B True S
    """Many small firms selling an identical wheat grade, each too small to move the price, approximate perfect competition.

That setting matches the model's seller-count and product assumptions closely.""",
    # C True L
    """Free entry and exit without artificial barriers is a standard perfect-competition condition.

It disciplines profits in the long run: if returns are high, new firms enter and expand industry supply until economic profits erode. Blocking entry would allow persistent market power and move the model toward monopoly or oligopoly. The assumption is therefore structural, not ornamental.""",
    # D False S
    """Perfect competition assumes good information about prices so trade can clear efficiently.

Deliberate misinformation about rival prices is a market failure, not a required efficiency ingredient.""",
    # E False C
    """Competitive firms are price takers with negligible market share, not price makers holding large slices such as ten percent each.

Price-making power belongs to imperfectly competitive structures.""",
]

EXPL["CASE 2.7.10"] = [
    # A True S
    """An illegal cartel coordinates prices or output in secret rather than letting firms choose capacity and prices independently in open rivalry.

The secrecy and joint plan distinguish collusion from ordinary competitive announcements.""",
    # B True C
    """Capacity announcements among a few steel producers are strategic signals rivals watch.

That mutual awareness is typical oligopoly interdependence.""",
    # C False L
    """Monopoly means a single seller (or a dominant one) in the relevant market, not a rule that monopoly is "more than ten firms."

Three-firm concentration is oligopoly. The claim both miscounts sellers and invents a nonsensical definition that would label fragmented industries as monopolies. Structure labels follow seller count and power, not that inverted threshold.""",
    # D False C
    """Three producers are too few for perfect competition even if steel is fairly homogeneous.

Few sellers imply oligopoly, where strategic interaction matters.""",
    # E False S
    """International trade in metals does not automatically create perfect competition among three domestic planners of investment.

Three firms still watch each other's capacity plans; that is oligopoly, not a many-seller price-taking market.""",
]

EXPL["CASE 2.7.11"] = [
    # A True L
    """When the next pharmacy is twenty kilometres away, travel cost and time shrink the relevant geographic market for many prescriptions.

Patients who need medicine today may treat the local shop as the only practical option. Market boundaries therefore can be local even if other pharmacies exist in distant towns. Antitrust and regulation often start from that narrow geography rather than a national map of every chemist.""",
    # B True C
    """Even with local market power, rules may limit prescription margins or dispensing fees.

Regulation can constrain pricing the isolation would otherwise allow.""",
    # C True S
    """Many pharmacies competing on the same village square would restore choice and price pressure locally.

That seller count moves the setting toward near-perfect competition for routine retail pharmacy services.""",
    # D True L
    """Geographic isolation can leave one pharmacy as the sole nearby seller, creating local monopoly-like power for urgent or repeated prescriptions.

Distance acts like an entry barrier for rivals who would need to open closer. Prices and opening hours then reflect that thin competition until another shop enters or patients accept long travel as a substitute.""",
    # E False C
    """Long travel distances strengthen local pricing power; they do not force the sole pharmacy to charge marginal cost on every prescription.

Absent regulation, markups above marginal cost remain possible.""",
]

EXPL["CASE 2.7.12"] = [
    # A True C
    """Two carriers dominating one thin route form a duopoly, a special case of oligopoly with few interdependent sellers.

Structure follows that seller count on the route.""",
    # B True L
    """Matching fares can be ordinary competitive response: each airline cuts or raises when it sees the rival move, without a secret joint plan.

Illegal cartel requires collusive agreement, not mere parallel prices that arise from watching each other. Investigators look for communication and enforcement mechanisms, not solely for similar fares on a duopoly route where matching is also what rivalry predicts.""",
    # C True S
    """On a thin-route duopoly each carrier knows the other will notice fare changes.

That mutual awareness differs from many-seller markets where one airline's tweak is lost in the crowd.""",
    # D True C
    """Rapid fare matching is strategic interdependence in action between the two sellers.

Each reacts to the other's posted prices within the oligopoly setting.""",
    # E False L
    """A secret fare agreement between the two carriers is still cartel collusion and typically unlawful, even on a thin international route.

Duopoly structure does not grant a legal privilege to fix prices jointly. Competition law targets the agreement, not the mere fact that only two firms serve the city pair. Claiming lawfulness because seller count equals two confuses structure with permitted conduct.""",
]

EXPL["CASE 2.7.13"] = [
    # A True S
    """Thousands of vendors posting interchangeable standardised products leave any one shop unable to raise price without losing buyers to rivals.

Homogeneous specs plus numerous sellers produce near price-taking behaviour on the platform.""",
    # B False L
    """Unique handmade cases from individual artists are differentiated products; buyers care which maker produced them.

Near-perfect competition fits standardised bulk listings better, where items are close substitutes and sellers are many. Differentiation pushes the setting toward monopolistic competition or niche branding, not closer to the homogeneous many-seller ideal. The claim reverses that comparison.""",
    # C False C
    """Interchangeable listings intensify competition among sellers; they do not eliminate it.

Buyers can choose across many shops, not only the platform owner's own listing.""",
    # D False S
    """Price-taking arises when many sellers each have negligible share, not when exactly one seller remains.

One seller is monopoly, the polar opposite of the competitive price-taker model.""",
    # E False L
    """A platform logo on the screen does not automatically make every product market a monopoly.

Competition among third-party sellers can remain intense for standardised goods even though the platform sets marketplace rules. Monopoly would require a single seller of the relevant product without close substitutes. Presence of hosting technology is not the same as exclusive control over every listing's price.""",
]

EXPL["CASE 2.7.14"] = [
    # A True L
    """Secret meetings among regional coffee roasters to fix wholesale bean prices are cartel behaviour: rivals replace independent pricing with a joint plan.

Competition law treats that collusion as illegal because it raises prices and restricts rivalry that would otherwise benefit buyers. Convictions rest on evidence of the agreement and its effects, not on whether the product is coffee versus another wholesale input.""",
    # B True S
    """Four regional roasters already form an oligopoly before any deal: few sellers, each aware of the others.

That structure makes cartel temptation higher than in a fragmented many-seller market.""",
    # C False C
    """Oligopoly rivalry means competing independently; cartel collusion means coordinating to limit that rivalry.

They are not identical labels for the same lawful conduct.""",
    # D False L
    """Competition law does not protect a right to fix prices jointly in private meetings; it prohibits that conduct.

Cartel members face fines and other sanctions precisely because the meetings aim to suppress competition. Framing price-fixing as a protected right inverts the legal baseline that independent pricing is required.""",
    # E False S
    """Cartels try to raise prices and restrict output for joint profit, not to intensify daily undercutting among members.

Forced undercutting would destroy the collusive price the cartel exists to defend.""",
]

EXPL["CASE 2.7.15"] = [
    # A True C
    """A cartel is illegal collusion among oligopolists to coordinate prices or output.

The label names the agreement, not merely the few-seller structure.""",
    # B True S
    """Perfect competition combines many price takers, a homogeneous product, and free entry.

Standardised agricultural grades on exchanges are often cited as near examples of that benchmark.""",
    # C True C
    """Oligopoly features few large interdependent sellers, such as mobile carriers or concentrated consumer brands.

Mutual awareness of rivals' moves defines the structure.""",
    # D False L
    """Monopoly is a single seller (or a dominant firm) in the relevant market, not a requirement of at least twenty sellers each holding five percent.

Twenty sellers at five percent each would be a fragmented industry, closer to competition than monopoly. The claim invents a headcount rule that contradicts the ordinary definition. Market power rises as effective seller count falls, other things equal.""",
    # E False S
    """Market power typically rises as the number of rivals falls, because fewer sellers face less competitive constraint.

Fewer rivals mean less competition, not more; the statement reverses that relationship.""",
]

EXPL["CASE 2.7.16"] = [
    # A True S
    """Where transmission shows natural monopoly-like cost structure, duplicating grids is wasteful, so regulation often replaces rivalry.

Price and access rules substitute for the competition that parallel networks would otherwise supply.""",
    # B True C
    """Perfect competition would need many sellers of identical transmission service in one neighbourhood.

Real grids rarely look like that; scale economies favour one network.""",
    # C True S
    """Legal exclusivity over regional transmission lines creates a monopoly-like infrastructure structure.

One authorised grid operator controls the wires rivals would need to duplicate.""",
    # D False L
    """Natural monopoly-like conditions arise when one network supplies the market at lower cost than two or more parallel systems, not when fifty rival grids must operate side by side.

Requiring fifty parallel networks would be the opposite of the cost logic that justifies a single grid. The claim invents a minimum-rival count that contradicts scale-economy reasoning for transmission.""",
    # E False C
    """Duplicate parallel grids usually raise total cost compared with one efficiently scaled network.

That cost pattern works against perfect competition in transmission, not for it.""",
]


def main() -> int:
    data = json.loads(PATH.read_text())
    ids = [c["case_id"] for c in data]
    i0 = ids.index(FROM_ID)
    i1 = ids.index(TO_ID)
    assert i1 - i0 + 1 == 40, (i0, i1)
    missing = [cid for cid in ids[i0 : i1 + 1] if cid not in EXPL]
    if missing:
        print("MISSING", missing)
        return 1
    for c in data[i0 : i1 + 1]:
        key = c["answer_key"]
        bodies = EXPL[c["case_id"]]
        if len(bodies) != 5:
            print(c["case_id"], "bad len", len(bodies))
            return 1
        c["tactical_explanations"] = [wrap(bodies[i], bool(key[i])) for i in range(5)]
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {FROM_ID} .. {TO_ID} ({i1 - i0 + 1} cases)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
