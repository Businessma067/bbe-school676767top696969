#!/usr/bin/env python3
"""Length-mix rewrite: CASE 2.1.01–2.1.25 tactical_explanations from scratch."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

# Body length targets per letter rotate across cases: SHORT 40–100, MEDIUM 160–320, LONG >=360
REWRITES: dict[str, list[str]] = {
    "CASE 2.1.01": [
        "Steady salary does not switch scarcity off. A household with regular pay still faces a finite monthly budget and finite hours in the day — rent, food, transport, and leisure compete for the same euros. Income changes which constraint bites hardest; it does not remove the fact that wants exceed what the paycheck can cover.\n\nPicture a nurse who earns a reliable wage yet still chooses between a weekend trip and repairing the washing machine. That choice only exists because scarcity survived the salary. The claim that income removes all limits confuses “more room to choose” with “no limits left.”\n\nSo the statement is False.",
        "Economising is careful use of limited resources, not treating them as endless.\n\nSo the statement is True.",
        "Skipping a purchase is still a decision about scarce time or money. Sitting on the sofa instead of shopping does not eject you from economic life; it ranks “do nothing now” above other uses of those hours and euros. Nobody gets a clean exit simply by inactivity.\n\nSo the statement is True.",
        "Registered firms are not the only ones who meet limits. A family with steady income still rations rent, groceries, and leisure against a finite budget each month. Treating scarcity as a business-only problem ignores ordinary household economising — the weekly shop, the heating bill, the decision to repair rather than replace.\n\nSo the statement is False.",
        "Households trade every day: buying bread, paying for a haircut, selling a used bike. Entrepreneur status is not a ticket of admission to exchange.\n\nSo the statement is False.",
    ],
    "CASE 2.1.02": [
        "Goods are tangible items — a loaf, a phone, a coat — not intangible activities. Calling every physical object a service swaps the labels.\n\nSo the statement is False.",
        "A service is work done for someone without handing over a lasting object: installing software or preparing a drink fits that test. The intangibility of the activity is what places it on the service side of the goods–services line.\n\nSo the statement is True.",
        "Needs keep basic well-being going — food, shelter, essential care — while wants are desired extras that are not required for that baseline. The statement’s split matches how the chapter separates what you must cover from what you merely desire.\n\nA household can skip a cinema night and still be okay; skipping food or heat is a different category. That contrast is exactly the needs-versus-wants distinction.\n\nSo the statement is True.",
        "Families need food and shelter; firms need staff, materials, and working equipment. Either side can meet those needs by trading with the other — groceries for cash, wages for labour, parts for invoices.\n\nSo the statement is True.",
        "Limited resources force careful choices: that is scarcity, and economising is the response. Assuming unlimited supply would ignore the constraint the chapter starts from. Individuals and businesses alike face that limit and must allocate what they have.\n\nSo the statement is True.",
    ],
    "CASE 2.1.03": [
        "Businesses trade with households every day — selling goods, buying labour, hiring suppliers. There is no legal bar that confines exchange to consumers alone.\n\nA bakery sells loaves to families; a café buys milk from a dairy; a teenager sells a used console online. Trade runs both ways across the household–firm boundary, not only from shoppers toward empty shelves.\n\nSo the statement is False.",
        "A shop needs stock, premises, and staff just as a family needs food and heat. Registered businesses are not need-free shells.\n\nSo the statement is False.",
        "Leaving pocket money unspent is still a choice about scarce cash — save now, spend later, or hold it. The teenager has not stepped outside economic decision-making by refusing to buy.\n\nSo the statement is False.",
        "When a household pays a firm (or another household) for something useful, exchange is doing the work of fulfilling a need or want. Trade is one standard channel for getting those things met.\n\nSo the statement is True.",
        "Barter is exchange without money: gardening help for a bookshelf still swaps valued things. Cash is common, not required for the swap to count as genuine exchange.\n\nImagine two neighbours agreeing that one mows the lawn while the other builds a shelf. No euros change hands, yet each gives something the other values — that is exchange under another payment form.\n\nSo the statement is False.",
    ],
    "CASE 2.1.04": [
        "Computers are goods; installing software is a service — both help people meet needs.\n\nSo the statement is True.",
        "A smartphone maker cannot assemble handsets without specialised electronic parts from suppliers. That input requirement is an operational need of the manufacturer, not a consumer-side curiosity. Without those components, the production line stops regardless of how strong final demand looks.\n\nSo the statement is True.",
        "Fabricating components means drawing on raw materials and a workforce; isolation is not how production works. A plant that tried to invent every input alone would still need people and materials from somewhere.\n\nSo the statement is True.",
        "People buy, sell, and swap goods and services directly — they are full participants in trade, not spectators standing outside the market while firms alone move resources.\n\nSo the statement is True.",
        "Food, shelter, and medical care are household needs; cinema nights are wants layered on top. Both sit inside everyday household demand, but only the first group is essential for basic well-being.\n\nA family that skips the film is still housed and fed; a family that cannot cover rent faces a different problem. Keeping that split clear matters when you classify why households enter exchange.\n\nSo the statement is True.",
    ],
    "CASE 2.1.05": [
        "Roasted beans in a bag are a tangible good; the barista’s drink preparation is an intangible service. One is an object you take home; the other is work performed at the counter.\n\nSo the statement is True.",
        "Needing enough caffeine to function is not the same as craving a flavoured latte for pleasure. Needs cover basic well-being; wants cover non-essential desires — the concepts are not identical, even when both involve coffee.\n\nA customer who buys plain filter coffee to stay awake for a night shift is closer to a functional need than one who orders a caramel-syrup cappuccino purely for taste. Collapsing both into one label erases that difference.\n\nSo the statement is False.",
        "A habitual craving for a particular drink is more accurately a want when it is not essential for basic well-being. Enjoyment and habit do not automatically turn the order into a need.\n\nSo the statement is True.",
        "Cafés need reliable bean suppliers, working machines, and staff just as any other firm needs inputs. Being a business does not erase those operational needs.\n\nSo the statement is False.",
        "Paying for beans or drinks is exchange: the customer gets a good or service, the café gets revenue. Both sides can be meeting a need or a want through that trade.\n\nSo the statement is True.",
    ],
    "CASE 2.1.06": [
        "The bus pass gets Jonas to school — that sits on the need side — while a game skin is a non-essential desire. Price tags alone do not make them the same category.\n\nSo the statement is True.",
        "A price on both items does not turn the game skin into a need. Needs and wants can both cost money; classification follows well-being, not the sticker.\n\nJonas could skip the skin and still reach school with a pass. Treating every priced item as a need would erase the chapter’s distinction the moment a shop attaches a euro amount.\n\nSo the statement is False.",
        "Scarce time and pocket money force choices long before anyone registers a firm. Individuals face economic decisions as soon as resources are limited relative to competing uses — school transport versus game cosmetics included.\n\nSo the statement is False.",
        "Saving the twelve euros and buying nothing is still a ranking of scarce cash: hold it, spend later, or spend now. Jonas has not opted out of economic decision-making by refusing the purchase.\n\nSo the statement is False.",
        "Buying the bus pass does not delete the want for the game skin forever. Wants can return next month when pocket money refreshes; satisfying one claim on the budget does not erase other desires.\n\nPicture Jonas riding to school with the pass and still browsing the skin shop on his phone. The want survived the purchase. Permanent disappearance is not how wants behave after a single alternative spend.\n\nSo the statement is False.",
    ],
    "CASE 2.1.07": [
        "Screen replacement is work performed for the customer — a service — while a phone case on the shelf is a tangible good sold as an object.\n\nSo the statement is True.",
        "PhoneFix still faces scarce spare parts each month even though it is a business. Firm status does not invent unlimited inventory; a thin batch of screens forces triage of which repairs to take.\n\nA shop that burns through its monthly allotment by Wednesday cannot magic more modules into existence because it has a trade licence. Scarcity of parts is an operational fact, not a household-only problem.\n\nSo the statement is False.",
        "A decorative case bought purely for design satisfies a want, not a basic need. Style preference does not become essential well-being just because the item protects a phone.\n\nSo the statement is True.",
        "Phones can be central to work and contact; repairing one can fulfil a genuine need. Calling every handset a luxury outside economics misreads how households use communication devices.\n\nSo the statement is False.",
        "A limited monthly batch of parts forces the shop to economise: prioritise urgent jobs, defer others, or refuse overflow. That allocation under a hard stock cap is textbook economising.\n\nSo the statement is True.",
    ],
    "CASE 2.1.08": [
        "Households and entrepreneurs interacting is the core cast of the economy as the chapter frames it — families and firms meeting in exchange.\n\nSo the statement is True.",
        "Goods are tangible items you can hold; services are intangible activities performed for someone. A loaf versus a haircut is the standard illustration of that split.\n\nSo the statement is True.",
        "Both households and businesses have needs — food and shelter on one side, stock and staff on the other — and exchange is one way those needs and wants get fulfilled when the two sides trade.\n\nA family pays a bakery for bread; the bakery pays a miller for flour. Needs travel through those swaps rather than vanishing because one party is a firm.\n\nSo the statement is True.",
        "Scarcity means resources are limited relative to competing uses, so individuals and businesses must economise instead of assuming unlimited supply. Careful allocation is the rational response to that constraint.\n\nIgnoring the limit — spending as if time, money, and materials never run out — is exactly what economising rejects.\n\nSo the statement is True.",
        "Nobody truly opts out: even “doing nothing” ranks scarce time or money against other options. Households and businesses alike stay inside economic decision-making.\n\nSo the statement is True.",
    ],
    "CASE 2.1.09": [
        "Herr Novak organises production and sells bread as an entrepreneur; the families buying loaves act as households on the other side of the counter.\n\nSo the statement is True.",
        "Bread is a tangible good; doorstep delivery is an intangible service. The bakery can sell both in one order without collapsing the distinction.\n\nSo the statement is True.",
        "Owning a business does not erase personal needs. Herr Novak still needs food, rest, and income for his own household life even while he runs the bakery. Entrepreneur status and personal needs coexist.\n\nA baker who works sixteen-hour days still has to eat and sleep. Treating the owner as a need-free machine confuses the firm’s role with the person’s biology and budget.\n\nSo the statement is False.",
        "Paying for delivery is still exchange: money for a service that has value at the moment it is performed. Value does not vanish just because the activity is finished.\n\nSo the statement is False.",
        "Flour and oven fuel are limited inputs. Any bakery that treats them as unlimited will over-order, waste heat, or run out mid-bake — so Herr Novak must economise on ingredients like every other producer.\n\nSo the statement is False.",
    ],
    "CASE 2.1.10": [
        "Two neighbours swapping gardening lessons for a handmade bookshelf still exchange valued things without euros. Money is common, not required for the swap to count.\n\nSo the statement is True.",
        "Exchange does not require euro banknotes or electronic transfers. Barter — lessons for a bookshelf — is exchange under another payment form. Insisting on cash-only trade would erase neighbour swaps that clearly move valued goods and services.\n\nIf only bank transfers counted, those two neighbours would be “outside” exchange while each still gains something the other supplies. That is an artificial gate the chapter does not set.\n\nSo the statement is False.",
        "Wood used to build the bookshelf is a limited resource, so the carpenter must economise on how much he uses per piece — cut carefully, avoid waste, choose dimensions that fit the available timber.\n\nSo the statement is True.",
        "Gardening lessons are an activity performed for the neighbour, not a physical object handed over — that places them as a service.\n\nSo the statement is True.",
        "Individuals, not only businesses, have needs and wants that direct exchange can help satisfy — food grown, shelves built, skills shared between people.\n\nSo the statement is True.",
    ],
    "CASE 2.1.11": [
        "Petra’s family commissions furniture as a household; Fabian produces and sells the table as an entrepreneur. Roles sit on opposite sides of that trade.\n\nSo the statement is True.",
        "The finished dining table is a tangible item Fabian produces and delivers — a good, not a pure service.\n\nSo the statement is True.",
        "Paying for the table fulfils the family’s furniture need through exchange: money for a usable good that meets a household requirement.\n\nSo the statement is True.",
        "Timber is a genuine operational need for a carpenter, not a mere want. Without oak or similar stock, Fabian cannot build the commission. Calling raw materials “only wants” mislabels a production input as optional desire.\n\nA workshop that runs out of boards cannot deliver tables no matter how strong customer demand is. That shortage is a needs problem on the firm side.\n\nSo the statement is False.",
        "Timber is limited, so Fabian must economise on how much oak he uses per commission — design cuts, scrap rates, and board choice all ration the stock.\n\nSo the statement is True.",
    ],
    "CASE 2.1.12": [
        "A laptop manufacturer needs specialised electronic components from suppliers to keep production running. Those parts are operational inputs, not optional consumer tastes.\n\nSo the statement is True.",
        "High-tech firms have internal needs — components, skilled staff, power, premises — just as end consumers have needs. Restricting “genuine need” to shoppers alone would leave the factory unexplained when parts run short.\n\nAn assembler waiting on delayed chips is experiencing a real production need. Pretending only final buyers feel need erases that side of the economy.\n\nSo the statement is False.",
        "Households buy goods and services from businesses to satisfy both needs and wants in daily life — groceries and heating alongside cinema tickets and gadgets.\n\nSo the statement is True.",
        "Wants do not vanish automatically once monthly needs are covered. Extra desires can appear or persist even after rent and food are paid — new trainers, a trip, a better phone.\n\nSo the statement is False.",
        "Teenagers with pocket money already make scarce-resource choices inside the economy. They do not wait for a business licence or formal household registration to start economising.\n\nSo the statement is False.",
    ],
    "CASE 2.1.13": [
        "Ninety euros for transport and toiletries covers needs; 140-euro trainers are a want. The price gap and purpose separate essential well-being from non-essential desire.\n\nSo the statement is True.",
        "Receiving money from parents still places Lukas on the household side of the economy. Pocket money is a household transfer, not an exit pass from economic life.\n\nA student who budgets the allowance between bus fares and trainers is exactly the household decision-maker the chapter describes — dependent funding does not erase the role.\n\nSo the statement is False.",
        "Buying trainers does not cancel the need for transport for the rest of the month. Needs and wants compete for the same budget; satisfying one claim leaves the other intact.\n\nSo the statement is False.",
        "Wanting trainers is a preference economics can analyse; “irrational” is not a reason to eject the desire from the subject. Scarce money still forces a choice whether or not outsiders approve of the purchase.\n\nSo the statement is False.",
        "A fixed monthly sum is a limited resource that must be economised across competing uses. Calling it unlimited contradicts the hard cap of the allowance itself.\n\nSo the statement is False.",
    ],
    "CASE 2.1.14": [
        "Reinisch organises the stall and sells produce as an entrepreneur; village buyers act as households on the other side of the table.\n\nSo the statement is True.",
        "Farmland elsewhere does not make Reinisch’s eight hectares non-scarce for him. What he can plant this season is limited by the fields he controls; theoretical purchases elsewhere do not expand today’s acreage.\n\nIf he splits the eight hectares between potatoes and carrots, every extra row of one crop means fewer rows of the other. That trade-off is scarcity on his own land, regardless of listings in another district.\n\nSo the statement is False.",
        "Potatoes and carrots are tangible goods even though they are cooked later. Requiring preparation does not turn a vegetable into a service.\n\nSo the statement is True.",
        "Splitting eight hectares between crops is an economic decision Reinisch cannot avoid given limited land. Allocation under a hard acreage cap is economising in plain form.\n\nSo the statement is True.",
        "Cash at the stall is genuine exchange — money for goods. Barter is one form of exchange, not the only form that “counts.”\n\nSo the statement is False.",
    ],
    "CASE 2.1.15": [
        "Toni and Rosa organise stalls and sell as entrepreneurs; visiting families buy as households. Market day puts those roles face to face.\n\nSo the statement is True.",
        "A cheese wheel is a tangible good; face-painting is an activity performed for a child — a service.\n\nSo the statement is True.",
        "Cheese for weekly groceries leans toward a need; face-painting for festival fun leans toward a want. Both can be bought on the same square without collapsing the categories.\n\nSo the statement is True.",
        "Paying for cheese or face-painting is exchange on both sides: buyers get a good or service, sellers get revenue that can meet their own needs or wants.\n\nSo the statement is True.",
        "With only thirty wheels left, Toni must allocate stock among queuing families — who gets a full wheel, who gets a half, who waits. That rationing under a hard inventory cap is economising in public view.\n\nA seller who pretends the remaining wheels are unlimited will over-promise and leave the last customers empty-handed. Scarcity of stock forces the allocation choice whether or not Toni likes making it.\n\nSo the statement is True.",
    ],
    "CASE 2.1.16": [
        "Large cash reserves do not erase scarce managerial attention or factory capacity. A multinational still chooses which projects get executive hours and which lines run overtime.\n\nSo the statement is True.",
        "Unlimited wants do not free households from budgets. Wants being open-ended is exactly why limited income forces economising — more desires than euros.\n\nA family that wants a holiday, new furniture, and a car still faces a paycheck that cannot fund all three at once. Pretending budgets do not constrain because wants are unlimited reverses the logic: unlimited wants make the budget bite harder.\n\nSo the statement is False.",
        "Governments face scarce time, political capital, and real resources even when they can tax. Raising revenue does not instantly create unlimited capacity for every project.\n\nSo the statement is False.",
        "Economising is rational when a resource is limited relative to competing uses — allocate carefully instead of treating the stock as endless.\n\nSo the statement is True.",
        "Entrepreneurs must economise on labour hours and raw materials to stay viable. Input limits are everyday firm constraints, not optional thrift.\n\nSo the statement is True.",
    ],
    "CASE 2.1.17": [
        "Sami supplies bean bags and prepared espresso as an entrepreneur; customers buy as households. The morning queue is that interaction in miniature.\n\nSo the statement is True.",
        "The bean bag is a tangible good; espresso preparation is work performed — a service. Both can leave the same counter without merging categories.\n\nSo the statement is True.",
        "A strong habitual coffee craving may still be a want rather than a strict survival need. Habit and enjoyment do not automatically equal essential well-being.\n\nSo the statement is True.",
        "Trying a new seasonal flavour for enjoyment is best classified as a want — pleasant, not required for basic well-being.\n\nSo the statement is True.",
        "A forty-kilogram seasonal bean cap forces Sami to allocate roast across drinks, retail bags, and days of the week. That hard weight limit is scarcity; spreading it carefully is economising.\n\nIf he pours most of the stock into one popular drink in week one, later weeks run dry. The cap makes those trade-offs unavoidable whether or not demand feels endless.\n\nSo the statement is True.",
    ],
    "CASE 2.1.18": [
        "Novels-for-tutoring is exchange without money: each classmate gives something the other values. Cash is not a required ingredient for the swap to count.\n\nIf only euros defined exchange, Felix’s algebra help and Nora’s books would sit outside economics while clearly moving valued services and goods between them. That cash-only gate is artificial.\n\nSo the statement is False.",
        "Felix’s tutoring is a service; Nora’s novels are goods. The classification matches the intangible-activity versus tangible-item split.\n\nSo the statement is True.",
        "Students still have needs, wants, and scarce time. Being not-yet-businesses does not eject them from exchange concepts — the swap itself is economic activity.\n\nSo the statement is False.",
        "Felix’s limited free time is a scarce resource allocated between tutoring and other commitments. Agreeing to help Nora means fewer hours for something else.\n\nSo the statement is True.",
        "Agreeing the swap does not end further economic decisions. Both still choose how to use remaining time, revise plans, or trade again later.\n\nSo the statement is False.",
    ],
    "CASE 2.1.19": [
        "Retired couples growing their own food still face scarce land, time, and seed. Self-provisioning does not abolish economising — it relocates it to the garden plot.\n\nSo the statement is True.",
        "Repairing a customer’s bicycle at a workshop is work performed rather than an item handed over as the main product — a service.\n\nSo the statement is True.",
        "Selling surplus eggs to neighbours for cash is exchange that can fulfil buyers’ needs or wants while giving the retirees income or trade value.\n\nSo the statement is True.",
        "No longer earning wages does not reclassify retirees as entrepreneurs by default. Growing food and selling eggs can include household roles; pension status alone does not force the entrepreneur label.\n\nA couple planting for their own kitchen is acting as a household meeting its own needs. Occasional egg sales do not automatically rewrite that primary role into “entrepreneur instead of household.”\n\nSo the statement is False.",
        "Deciding how much land to plant versus how many chickens to keep is an unavoidable economic choice under limited space and time.\n\nSo the statement is True.",
    ],
    "CASE 2.1.20": [
        "Occasional firewood-for-food trade fulfils needs through exchange even without nearby shops. Remoteness changes the venue, not the economic character of the swap.\n\nSo the statement is True.",
        "Avoiding shops does not mean Karl has opted out of economic decisions. He still allocates scarce time to chopping wood, storing food, and arranging trades with neighbours.\n\nA cabin dweller who spends a morning on firewood instead of fishing has ranked scarce hours. Distance from retail does not create an exit from that kind of choice.\n\nSo the statement is False.",
        "Claiming he needs nobody does not abolish scarcity for Karl. Land, time, tools, and energy remain limited relative to what he wants done.\n\nSo the statement is False.",
        "Forests are not unlimited for one person in one season. Chopping firewood still requires economising on time, dry wood access, and storage — remote living does not invent infinite timber on demand.\n\nSo the statement is False.",
        "Needs, wants, and scarcity affect individuals whether or not they hold a business licence or sit in an “official” household form. Karl’s cabin life is still inside those constraints.\n\nSo the statement is False.",
    ],
    "CASE 2.1.21": [
        "The Hoffmanns pay for repair as a household; Boris supplies the electrical work as an entrepreneur. Money for service puts those roles on opposite sides.\n\nSo the statement is True.",
        "Electrical repair is work performed rather than a physical item delivered as the product — a service that restores function in the home.\n\nSo the statement is True.",
        "Faulty wiring created a need for a working system; paying Boris fulfils that need through exchange of money for service.\n\nSo the statement is True.",
        "When Boris buys groceries later, he acts as a household with needs of his own. Entrepreneur by day does not erase household roles after hours.\n\nAn electrician who invoices the Hoffmanns in the afternoon and shops for dinner in the evening switches roles without contradiction. Both sides of economic life apply to the same person at different moments.\n\nSo the statement is True.",
        "Boris’s limited working hours are a scarce resource he must economise across jobs — take one call and another waits.\n\nSo the statement is True.",
    ],
    "CASE 2.1.22": [
        "Installing software on a customer’s computer is work performed — a service — even though a physical machine is involved. The activity, not the hardware nearby, sets the category.\n\nSo the statement is True.",
        "A downloadable e-book is still a good in the digital sense: a lasting product transferred to the buyer, not an activity performed live. Lack of weight does not automatically make it a service.\n\nCalling every weightless file a service would turn music downloads, e-books, and software licences into “services” by mass alone, blurring the chapter’s activity-versus-item line.\n\nSo the statement is False.",
        "Services are exchanged in markets every day — repairs, lessons, deliveries — alongside goods. Markets are not goods-only clubs.\n\nSo the statement is False.",
        "A restaurant meal mixes food with preparation and service on the premises; treating it as “always only a good because food is tangible” oversimplifies what the diner pays for.\n\nSo the statement is False.",
        "Delivering a pizza does not convert the pizza from a service into a good by magic of the doorbell. The food remains a good; the delivery run is a service layered on top.\n\nSo the statement is False.",
    ],
    "CASE 2.1.23": [
        "Elena’s performance is an activity enjoyed in the moment rather than a physical item handed over — a service.\n\nSo the statement is True.",
        "Listeners tipping for atmosphere are satisfying a want, not a basic survival need. Enjoyment of music is desirable, not essential well-being.\n\nSo the statement is True.",
        "Voluntary, unfixed tip amounts can still be exchange: listeners give money, Elena gives a performance they value. Lack of a posted price does not erase the swap.\n\nA passer-by who drops two euros because the song was worth it has traded money for a service. Fixed menus are common in shops, not a requirement for exchange to exist on a street corner.\n\nSo the statement is False.",
        "Elena’s need to cover rent shows individuals, not only registered businesses, experience economic needs. Housing costs do not wait for a company registration.\n\nSo the statement is True.",
        "Limited Sunday performing time is a scarce resource Elena must economise across locations — more time in one square means less elsewhere.\n\nSo the statement is True.",
    ],
    "CASE 2.1.24": [
        "The haircut is work performed — a service — and the shampoo bottle is a tangible good sold as an object. One appointment can include both without merging labels.\n\nSo the statement is True.",
        "Paying with money does not turn a haircut into a good. Payment method does not rewrite the intangible-activity versus tangible-item distinction.\n\nSabine can pay cash for both the cut and the bottle; the cut remains a service and the bottle a good. Euros on the counter are common to both, not a classifier.\n\nSo the statement is False.",
        "Self-employed Timo still has personal needs — food, rent, rest — even while he stands on the entrepreneur side of the chair. Role at work does not erase household needs.\n\nSo the statement is False.",
        "Routine six-week visits do not abolish scarcity. Sabine still faces limited money and time; habit only makes the purchase familiar, not unlimited.\n\nSo the statement is False.",
        "Paying for either the cut or the shampoo still involves exchange that can fulfil a need or want — grooming or product use against money.\n\nSo the statement is True.",
    ],
    "CASE 2.1.25": [
        "Households exchange with firms when they buy groceries, and with other households when they sell used furniture. Trade is not limited to one channel.\n\nSo the statement is True.",
        "Households trade constantly — buying food, selling used goods, hiring help. Entrepreneurs are not the only party entitled to exchange; consumption does not ban trade.\n\nA family that sells a sofa online and buys milk at the supermarket is exchanging as a household. Restricting trade rights to entrepreneurs alone contradicts everyday market life.\n\nSo the statement is False.",
        "Barter between two individuals still counts as exchange when each gives something the other values. Money is optional packaging, not the definition.\n\nSo the statement is True.",
        "Exchange does not always require a written government-registered contract. Oral deals, till receipts, and informal swaps can all be genuine exchange.\n\nSo the statement is False.",
        "A mobile app transfer pays for something valued just as coins or banknotes do — same exchange, different payment rail.\n\nSo the statement is True.",
    ],
}


def main() -> None:
    data = json.loads(PATH.read_text())
    by_id = {c["case_id"]: c for c in data}
    for cid, expls in REWRITES.items():
        c = by_id[cid]
        assert len(expls) == 5
        for i, e in enumerate(expls):
            want = "True" if c["answer_key"][i] else "False"
            assert e.rstrip().endswith(f"So the statement is {want}."), (cid, chr(65 + i), want)
        c["tactical_explanations"] = expls
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Updated {len(REWRITES)} cases")


if __name__ == "__main__":
    main()
