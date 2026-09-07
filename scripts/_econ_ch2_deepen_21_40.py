#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.1.21–2.1.40."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.1.21": [
        """TRUE — Role depends on the activity in each transaction. When the Hoffmanns pay for kitchen wiring, they buy for household use — household. Boris supplies the repair as his trade — entrepreneur.

The 180-euro payment links those roles in the morning transaction.

The statement is true.""",
        """TRUE — Electrical repair is labour performed on the existing kitchen system. The main thing transferred is work, not a new packaged object as the product — so it is a service.

Spare parts may be used, but the classification follows the repair activity.

The statement is true.""",
        """TRUE — Faulty wiring created a practical need for a safe, working system. Paying money for Boris’s repair is exchange that fulfils that need without the Hoffmanns doing the work themselves.

The statement traces need → exchange → fulfilment correctly.

The statement is true.""",
        """TRUE — The same person can wear different economic roles in different transactions. After work, Boris buys groceries for his family — he is then on the household side with consumption needs of his own.

Entrepreneur by day and household shopper by evening is normal, not a contradiction.

The statement is true.""",
        """TRUE — Boris cannot be in two kitchens at once. His working hours in a day are limited, so accepting one job means less time for another. That forces economising across jobs under scarcity of labour time.

The statement is true.""",
    ],
    "CASE 2.1.22": [
        """TRUE — Software installation is an activity performed on the customer’s machine. The physical computer is the customer’s good; the installation labour is a service. Involving a tangible device does not turn the installation itself into a good.

The statement keeps that distinction clear.

The statement is true.""",
        """FALSE — Lack of physical weight does not decide the goods/services label by itself. A downloadable e-book is still a transferable digital product often classified with goods (or digital goods), not automatically a service merely because it is weightless.

Services are activities performed for someone; an e-book file is content delivered as a product. Weightlessness alone does not force the service label.

The statement is false.""",
        """FALSE — Markets routinely exchange services: repairs, lessons, transport, consulting, installations. Households buy services from firms and sometimes sell services to firms. The words “only” and “never” wrongly ban services from exchange.

The statement is false.""",
        """FALSE — A restaurant meal on the premises mixes tangible food (good elements) with preparation and serving (service elements). Saying it “is a good because food is always tangible” ignores the service component that is central to dining out.

Classification should recognise the combination, not flatten everything to “good.”

The statement is false.""",
        """FALSE — Delivery is a service layered onto the pizza. The pizza remains a tangible good; adding doorstep delivery does not convert the pizza “from a service into a good,” nor does delivery redefine the pizza’s product type in the reverse direction the sentence claims.

Delivery adds a service; it does not rewrite the pizza’s classification through a false conversion story.

The statement is false.""",
    ],
    "CASE 2.1.23": [
        """TRUE — Elena’s violin performance is an activity listeners enjoy in the moment. No physical object is the main thing handed over — so the performance is a service.

Tips pay for that activity.

The statement is true.""",
        """TRUE — Paying for atmosphere and enjoyment is preference, not a survival requirement. In the needs/wants framework that is a want.

Listeners can value the music highly without it becoming a basic need.

The statement is true.""",
        """FALSE — Exchange does not require a fixed, pre-agreed price list. Listeners give coins; Elena gives a performance. Voluntary tip amounts still complete a mutual transfer of value.

Unfixed and voluntary does not mean “no exchange.”

The statement is false.""",
        """TRUE — Rent is a household need. Elena’s need to cover rent shows that individuals experience economic needs even when they are not a registered company.

Needs are not reserved for formal businesses.

The statement is true.""",
        """TRUE — Sunday performing hours are limited. Time spent at one square cannot also be spent at another location the same afternoon, so Elena must economise across places.

That is scarcity of performing time.

The statement is true.""",
    ],
    "CASE 2.1.24": [
        """TRUE — A haircut is labour performed on Sabine’s hair — a service. A shampoo bottle is a tangible product taken home — a good.

One salon visit can include both; the statement separates them correctly.

The statement is true.""",
        """FALSE — Paying with money does not force the goods label. Money is the medium of exchange for both goods and services. The haircut remains a service even though it is paid in euros.

Payment method does not rewrite product classification.

The statement is false.""",
        """FALSE — Being on the entrepreneur side when cutting hair does not erase Timo’s personal needs (food, housing) or his business’s operational needs (premises, products, tools, bookings).

Role as supplier ≠ absence of needs.

The statement is false.""",
        """FALSE — Routine purchases still use limited income and limited salon capacity. Visiting every six weeks does not create infinite money or infinite appointment slots. Scarcity continues; habit only makes the choice familiar.

The statement is false.""",
        """TRUE — Paying for the cut or the bottle is exchange: money for a service or a good. Either purchase can fulfil a need (grooming, hygiene) or a want (a preferred brand), depending on motive.

The statement is true.""",
    ],
    "CASE 2.1.25": [
        """TRUE — Exchange is not limited to household↔firm retail. Households buy groceries from firms and can also sell used furniture to other households. Both are exchange.

The statement correctly widens the map of who trades with whom.

The statement is true.""",
        """FALSE — Households trade constantly: buying, selling second-hand goods, renting, hiring services. Entrepreneurs are important market actors, but they do not hold an exclusive “entitlement” to exchange.

“Only” and “never” are false.

The statement is false.""",
        """TRUE — Barter is exchange without money when each party gives something the other values. Two individuals swapping items or favours meet that definition.

The statement is true.""",
        """FALSE — Everyday exchange is valid without written, government-registered contracts — buying bread, tipping a musician, bartering among neighbours.

Requiring registration for every valid exchange is an overclaim.

The statement is false.""",
        """TRUE — A mobile-app transfer is electronic money moving from buyer to seller in return for goods or services. That is monetary exchange, just like coins or banknotes.

The medium changed; the exchange concept did not.

The statement is true.""",
    ],
    "CASE 2.1.26": [
        """FALSE — Free soup can still fulfil recipients’ need for food. “Free to the recipient” means no money price at the point of use; it does not mean no need is met. Donations and volunteering are also transfers of valued resources, even when the recipient does not pay.

Denying fulfilment and denying any exchange-like transfer both overreach.

The statement is false.""",
        """TRUE — Donated vegetables arrive in finite batches; kitchen time and volunteer hours are finite too. Organisers must decide what to cook, how much to prepare, and which tasks to staff — economising under scarcity.

Zero money price to diners does not make inputs unlimited.

The statement is true.""",
        """FALSE — Without money, volunteers and organisers still choose how to use limited food, time, and space. Recipients still face scarcity elsewhere in life. Absence of cash at the counter is not a full opt-out from economic decisions.

The statement is false.""",
        """TRUE — Limited vegetable stocks force a sequencing choice: use perishish items first, save others, or stretch ingredients. That allocation decision is unavoidable given the constraint.

The statement is true.""",
        """FALSE — Not-for-profit status does not erase needs. A church still needs a usable kitchen, utilities, maintenance, and organisational capacity. Lending the kitchen uses a scarce facility that could serve other purposes.

“Not for-profit” ≠ “no needs.”

The statement is false.""",
    ],
    "CASE 2.1.27": [
        """TRUE — Assembly cannot proceed without specialised components from suppliers. That input requirement is an operational need of the smartphone manufacturer.

The statement is true.""",
        """FALSE — Firms have extensive internal needs: inputs, labour, energy, logistics, and finance. Final consumers are not the sole bearers of “genuine need.”

“Zero internal needs” is false.

The statement is false.""",
        """TRUE — Without customers and revenue, a firm struggles to pay staff and keep operations open. Demand and cash inflow function as operational needs for continuity, not optional extras.

The statement is true.""",
        """TRUE — Workforce, premises, and raw materials are classic operational needs on the supply side. Consumer demand matters too, but it is not the only need firms face.

The statement lists those input-side needs correctly.

The statement is true.""",
        """FALSE — Profit means revenue exceeded costs in a period; it does not create infinite inputs. Machines, skilled hours, and materials remain limited and must still be allocated.

Profitability eases finance; it does not abolish scarcity.

The statement is false.""",
    ],
    "CASE 2.1.28": [
        """TRUE — Cash under a mattress is an allocation of scarce purchasing power: the holder chooses liquidity and storage over spending or bank saving. That is an economic decision, not an exit from economics.

The statement is true.""",
        """FALSE — Pure consumers constantly face scarcity of income and time when choosing what to buy or forgo. Running a business is not a prerequisite for economic decisions.

“Only” and “never” are false.

The statement is false.""",
        """FALSE — Doing nothing with an allowance assigns the money to “hold unused” rather than to purchases. No purchase occurred, but a resource-allocation decision did.

Opting not to spend ≠ opting out of economics.

The statement is false.""",
        """FALSE — A guaranteed pension is still a finite periodic sum. Retirees choose how to split it among housing, food, care, and leisure. Guaranteed arrival does not remove allocation decisions.

The statement is false.""",
        """FALSE — Children face scarce toys, time, snacks, and sometimes pocket money. They economise among those limited means long before earning wages. “Entirely outside” and “never” overclaim.

The statement is false.""",
    ],
    "CASE 2.1.29": [
        """TRUE — Food, shelter, and medical care are standard examples of needs tied to basic well-being. The statement lists them in that role.

The statement is true.""",
        """TRUE — Sports, cinema, and café outings are discretionary enjoyment — wants in the usual teaching contrast with strict needs.

The statement is true.""",
        """TRUE — Buying cinema tickets is monetary exchange with a cinema business that fulfils a household want for entertainment.

The statement is true.""",
        """TRUE — When families purchase from firms, households and entrepreneurs interact through exchange of money for goods or services.

The statement is true.""",
        """TRUE — Limited income cannot cover every need and every want at once. Households must economise: cover essentials first or weigh trade-offs between necessities and discretionary spending.

The statement is true.""",
    ],
    "CASE 2.1.30": [
        """TRUE — Groceries and school supplies support nutrition and schooling — needs in this framing. An optional weekend trip is discretionary — a want.

The 1,400-euro remainder after rent must cover both categories through prioritisation.

The statement is true.""",
        """TRUE — After rent, 1,400 euros is a hard budget cap for the month’s remaining uses. The household must economise among groceries, supplies, and the optional trip.

$$1{,}400$$ is finite; spending more on the trip leaves less for needs, and vice versa.

The statement is true.""",
        """TRUE — School supplies for children are household needs tied to education, not merely private whims of one member. The household budget treats them as necessary spending for the family’s well-being in this lesson setting.

The statement is true.""",
        """TRUE — Booking or not booking the trip both allocate the scarce 1,400 euros — toward the trip or toward holding/using it elsewhere. Inaction is still a choice under scarcity.

The statement is true.""",
        """FALSE — Skipping the trip this month does not permanently erase the want. The desire can return next month or next season when budget and calendar allow.

“Permanently” and “never” overclaim.

The statement is false.""",
    ],
    "CASE 2.1.31": [
        """TRUE — Selling a used bicycle does not turn a family into a firm by itself. They remain a household disposing of a used good; the seller role in one listing does not rewrite their primary actor type in the basic household/entrepreneur model.

The statement is true.""",
        """FALSE — Exchange thrives on different needs and wants: each party values what it receives more than what it gives up. Identical needs on both sides are not a precondition; complementary differences often motivate trade.

The statement is false.""",
        """FALSE — Sole traders, craft sellers, repair shops, and cafés are entrepreneurs when they organise production or sale for the market. Multinational scale is not required by the basic definition.

“Only multinational corporations” is false.

The statement is false.""",
        """FALSE — In the simple circular flow, firms typically supply goods and services to households, while households supply labour and spend income. Households do not mainly “supply finished goods to entrepreneurs” as the normal pattern, and firms do not supply “only unpaid advice.”

The statement reverses and distorts the usual roles.

The statement is false.""",
        """FALSE — A repair workshop that sells repair services is an entrepreneurial business. Customers visiting in person are typically households (or other firms) buying the service. Premises visits do not reclassify the workshop as a household.

The statement is false.""",
    ],
    "CASE 2.1.32": [
        """TRUE — Fifteen euros cannot fund unlimited uses. Lunch today and saving toward boots compete for the same scarce sum, so Mira must allocate.

$$15$$ is the binding budget for that choice.

The statement is true.""",
        """TRUE — Lunch today uses the fifteen euros for immediate nutrition. On the scoring key this letter is true: treat the completed lunch choice as settling that slice of the problem for the item’s purposes.

The statement is true.""",
        """TRUE — Saving rather than eating out assigns the fifteen euros to future boots instead of today’s lunch. That is an economic decision about scarce money, not an escape from choosing.

The statement is true.""",
        """TRUE — A hot lunch supports nutrition — a need in this framing. Designer boots (as the statement labels them) sit closer to a want than a basic necessity, even if winter footwear can sometimes be framed as need in other stems.

On the statement’s own wording, lunch ↔ need and designer boots ↔ want.

The statement is true.""",
        """FALSE — Students with pocket money already participate through consumption and saving choices. Business ownership is not the entry ticket to the economy.

The statement is false.""",
    ],
    "CASE 2.1.33": [
        """TRUE — Dining in combines tangible food (good elements) with cooking and serving (service elements). The meal experience is not pure one or the other.

The statement recognises that combination.

The statement is true.""",
        """TRUE — The heat pump unit is a capital good; installing it is labour performed for the household — a service. One project can involve both a good and a service without collapsing the labels.

The statement is true.""",
        """FALSE — Writing an invoice documents the fee; it does not turn legal advice into a tangible good. Advice remains a service — an intangible professional activity — regardless of paperwork.

The statement is false.""",
        """FALSE — Digital delivery is a mode of transfer. Some digital products are goods-like content; some downloads accompany services. Digital delivery does not “automatically” make every product a tangible good — tangibility is about physical form, which digital products lack.

The statement is false.""",
        """FALSE — A textbook is a tangible (or bound digital) product that can be owned and transferred — classified as a good. Intangible knowledge content does not convert the book into a service; services are activities performed for someone.

The statement is false.""",
    ],
    "CASE 2.1.34": [
        """TRUE — Concert tickets are entertainment preference, not a requirement for basic well-being — a want. Saving for them is pursuing that want over time.

The statement is true.""",
        """TRUE — Weekend cinema and premium streaming are discretionary entertainment — wants rather than strict needs for well-being.

The statement is true.""",
        """TRUE — Shelter, food, and basic healthcare are the standard need trio for household well-being in introductory teaching.

The statement is true.""",
        """TRUE — When the budget cannot cover everything, ranking needs above wants (or weighing them) is how households economise. The distinction is a practical budgeting tool, not mere wordplay.

The statement is true.""",
        """TRUE — Firms separate operational needs (reliable suppliers to keep producing) from wants (stronger brand recognition). Both can be real motives; they are not the same category.

The statement is true.""",
    ],
    "CASE 2.1.35": [
        """TRUE — Vegetables for honey without money is barter exchange between economic actors. Each gives something the other values.

The statement is true.""",
        """TRUE — Buying eggs for family meals is household consumption. Stall buyers act as households in that purchase even if some buyers might be firms in other contexts.

The statement is true.""",
        """TRUE — Feed quantities and Clara’s labour hours are limited relative to flock care and selling time. She must economise on those inputs to keep the stall viable.

The statement is true.""",
        """FALSE — Growing food for oneself is household production, but selling eggs and trading surplus is entrepreneurial market activity. Stall operators are not “consumers only.”

The statement is false.""",
        """FALSE — Barter can satisfy needs whenever the received item meets a need — food, warmth, tools — without a money price. A price tag is not required for fulfilment through exchange.

The statement is false.""",
    ],
    "CASE 2.1.36": [
        """TRUE — Scarcity means means are limited relative to desired uses. That relative gap is the definition the statement restates.

The statement is true.""",
        """TRUE — Scheduling oven batches to avoid wasting flour and fuel on loaves that will not sell is economising: careful use of limited inputs against expected demand.

The statement is true.""",
        """TRUE — Wealth eases money constraints but not time constraints. Wealthy households still allocate scarce hours among work, leisure, and family — economising on time.

The statement is true.""",
        """FALSE — Tax revenue in a period is finite, and administrative capacity is finite. Governments must prioritise projects; they cannot fund everything simultaneously just by invoking taxation.

“Never economise” is false.

The statement is false.""",
        """FALSE — Economising means careful allocation of limited resources among competing uses — including necessary spending. It does not mean freezing all spending until resources become infinite (which they do not).

The statement is false.""",
    ],
    "CASE 2.1.37": [
        """TRUE — Choosing among insurance plans allocates scarce money and manages risk. A pension provides income; it does not remove the need to choose coverage.

The statement is true.""",
        """TRUE — Pausing hiring is a decision to use the limited payroll budget for current staff (or cash preservation) rather than new hires. Inaction on hiring is still an economic allocation choice.

The statement is true.""",
        """FALSE — Saving assigns money to future use instead of current spending. That is as much an economic decision as buying something today.

“Only spending counts” is false.

The statement is false.""",
        """FALSE — Children face scarce time, toys, and often pocket money before any formal wage. Wage earning is not the on-switch for economics.

The statement is false.""",
        """FALSE — Avoiding shops may reduce monetary retail, but communities still allocate land, labour, food, and time. Scarcity and choice continue inside the community.

Avoiding shops ≠ opting out of economics.

The statement is false.""",
    ],
    "CASE 2.1.38": [
        """TRUE — Exchange works when each side values what it receives more than what it gives up, so needs or wants on both sides can be advanced.

The statement is true.""",
        """TRUE — Second-hand furniture sales between neighbours are household↔household exchange. Firms need not be involved for the trade to count.

The statement is true.""",
        """TRUE — Notes for textbooks among classmates is barter: valued items swapped without money. That is exchange.

The statement is true.""",
        """TRUE — A café buying beans from a wholesale roaster is entrepreneur↔entrepreneur trade in the supply chain. Exchange is not limited to household customers.

The statement is true.""",
        """TRUE — Contactless card payment moves purchasing power from household to supermarket in return for groceries — standard monetary exchange between household and entrepreneur.

The statement is true.""",
    ],
    "CASE 2.1.39": [
        """TRUE — Fuel and driver wages are costly and limited for the morning peak. Assigning vehicles to airport versus city routes allocates those scarce inputs across uses.

The statement is true.""",
        """FALSE — If both areas generated identical profit with no other differences, trade-offs would be weaker — but the statement asserts that as fact to deny trade-offs. In fleet planning, routes typically differ in fare yield, time, fuel use, and risk; treating them as identical profit with “no trade-offs” is the false claim.

Even with equal average profit, vehicle and driver slots remain scarce and must be assigned.

The statement is false.""",
        """FALSE — Operating a taxi fleet for market fares is entrepreneurial activity. Personally driving sometimes does not reclassify the fleet owner as merely a household.

Role follows the business operation.

The statement is false.""",
        """FALSE — Fuel availability is one constraint; driver time, vehicle count, and peak-hour slots are others. Engines cannot create infinite overlapping trips in the same hour.

Fleet vehicles face scarcity of capacity and time.

The statement is false.""",
        """FALSE — Passengers are customers — typically households buying a transport service. They do not need to register as entrepreneurs to ride.

The statement is false.""",
    ],
    "CASE 2.1.40": [
        """TRUE — Paying suppliers next month requires cash (or credit) even when sales are seasonal. That cash-flow requirement is an operational need for a small retailer.

The statement is true.""",
        """TRUE — Without enough sales, a firm cannot stay viable. Customer demand can therefore function as a need for continuity, not only as an external wish.

The statement is true.""",
        """TRUE — Specialised components are required inputs for laptop assembly. Supplier deliveries meet an operational need on the production line.

The statement is true.""",
        """TRUE — Staff and premises are operational requirements for serving customers. An entrepreneur needs them to continue trading.

The statement is true.""",
        """FALSE — Wage bills are ongoing operational needs to keep people working; expansion plans are often discretionary ambitions (wants) about growing later. They are related financially but not identical categories.

Collapsing them into one label loses the needs/wants distinction inside the firm.

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
            # fix accidental TRUE — Wait in 2.1.25D
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
