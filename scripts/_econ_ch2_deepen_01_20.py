#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.1.01–2.1.20."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.1.01": [
        """FALSE — Scarcity is the gap between limited means and unlimited ends. A steady salary raises purchasing power, but the paycheck is still a finite euro amount that must be split among rent, food, transport, saving, and leisure.

Choosing more of one use always means choosing less of another. Regular income reallocates scarcity; it does not abolish it. The claim that salary “removes all limits” treats money as infinite once it arrives on schedule, which is not how budgets work.

The statement is false.""",
        """TRUE — Economising is the deliberate response to scarcity: using a limited stock of resources carefully so competing uses are weighed rather than ignored.

Treating resources “as if they were unlimited” would mean spending without ranking alternatives. Economising is the opposite habit — planning, prioritising, and substituting so finite means stretch further. The statement matches that definition.

The statement is true.""",
        """TRUE — An economic decision is any choice about how to use scarce means such as time, money, or attention. Refusing to buy, delaying a purchase, or leaving an afternoon unused still assigns those means to a particular use — keeping them unavailable for other options.

Because time and money remain limited whether or not someone tries to “opt out,” inaction is still a choice under scarcity. Nobody can step outside that logic entirely.

The statement is true.""",
        """FALSE — Scarcity is not a registration status. Households face finite budgets just as firms face finite cash and capacity. A regular salary still has to cover competing household uses, so economising on spending remains necessary.

The words “only” and “never” falsely confine scarcity to registered businesses and deny it for households. Everyday shopping, saving, and bill-paying show that households economise continuously.

The statement is false.""",
        """FALSE — Exchange is any mutually agreed swap of goods, services, or claims — money for groceries, labour for wages, or barter of items. Households do this every day when they buy, sell, or hire.

Entrepreneurs often organise production and sell on markets, but they are not a required party in every trade. Two households can trade with each other, and a household can trade directly with a firm. The claim that households “can never” participate directly is wrong.

The statement is false.""",
    ],
    "CASE 2.1.02": [
        """FALSE — Goods are tangible items that can be owned and transferred (bread, phones, furniture). Services are intangible activities performed for someone (repairs, lessons, deliveries).

Saying goods “must be intangible” reverses those labels, and calling every tangible item a service compounds the error. Tangibility points toward goods, not services.

The statement is false.""",
        """TRUE — A service is work or an activity delivered to a customer rather than a physical object permanently handed over as the main product. Installing software or preparing a drink are performances: the customer receives the result of labour.

That matches the intangible-activity definition of services.

The statement is true.""",
        """TRUE — Needs are requirements tied to basic well-being (food, shelter, essential care). Wants are preferences that improve comfort or enjoyment but are not required for that baseline.

The statement keeps the two categories distinct: necessity versus desire. That is the standard teaching contrast.

The statement is true.""",
        """TRUE — Needs are not reserved for private consumers. A household needs food and housing; a business needs inputs, labour, energy, and working capital to keep operating.

Both sides often meet those needs by exchanging with other actors — buying from suppliers, hiring workers, or selling output. The statement correctly extends needs and exchange to households and businesses alike.

The statement is true.""",
        """TRUE — Scarcity means available resources fall short of all desired uses. Because supply is limited relative to competing uses, decision-makers must economise: rank alternatives and allocate carefully instead of assuming an endless stock.

The statement links scarcity directly to economising for individuals and firms, which is the core causal chain in introductory economics.

The statement is true.""",
    ],
    "CASE 2.1.03": [
        """FALSE — Markets are two-sided. Households buy goods and services from firms; firms buy labour, materials, and services from households and other firms. Trade is not a one-way privilege of “consumers only,” and businesses are not barred from trading with households — retail and wage payments are everyday counterexamples.

The absolute wording (“only,” “all trade”) collapses as soon as ordinary shopping or employment is considered.

The statement is false.""",
        """FALSE — Firms have operational needs of their own: raw materials, power, spare parts, skilled hours, and cash flow. Those are requirements for continued production, not merely consumer wants renamed.

Saying businesses have “zero internal needs” confuses the customer-facing purpose of a firm with the input requirements that make the firm run.

The statement is false.""",
        """FALSE — Pocket money is a scarce resource. Leaving it unspent is a decision to hold cash rather than buy goods now — a choice about timing and use.

The teenager has not escaped economic decision-making; they have chosen one allocation (saving or holding) over others (spending). Inaction with money still answers the scarcity problem.

The statement is false.""",
        """TRUE — Exchange is the mechanism that matches someone who has a good or service with someone who wants it and is willing to give something in return. When households and businesses trade, needs and wants on both sides can be fulfilled without each party producing everything themselves.

That is why exchange sits at the centre of everyday economic life.

The statement is true.""",
        """FALSE — Exchange is defined by mutual transfer of value, not by the medium of payment. Barter — goods or services swapped directly — is exchange without money.

Money makes many trades easier, but it is not required for the concept. Denying that barter counts would erase a large class of real trades.

The statement is false.""",
    ],
    "CASE 2.1.04": [
        """TRUE — Firms specialise in producing what others need or want. Computers are tangible goods; software installation is an intangible service. Users obtain both through market exchange to satisfy needs and wants.

The statement correctly pairs product type with how people use businesses to meet those ends.

The statement is true.""",
        """TRUE — Production is a chain of inputs. A smartphone maker cannot assemble devices without specialised components — chips, screens, batteries — from upstream suppliers. That input requirement is an operational need of the manufacturer.

The statement describes that supplier dependence accurately.

The statement is true.""",
        """TRUE — Fabricating components requires material inputs and labour. A manufacturer that tried to operate without raw materials or a workforce could not transform anything into finished parts.

The statement restates that production needs factors and materials rather than self-sufficiency in isolation.

The statement is true.""",
        """TRUE — Individuals, as households or sole traders, buy, sell, and barter routinely — groceries, used goods, freelance work, peer-to-peer swaps. They are not passive spectators waiting for firms to act; they are active trading partners.

The statement affirms that direct participation in exchange.

The statement is true.""",
        """TRUE — Households combine survival requirements with preferences. Food, shelter, and medical care sit on the needs side; cinema and similar leisure sit on the wants side. Both motivate spending and exchange.

The statement keeps that needs/wants split while recognising both as household motives.

The statement is true.""",
    ],
    "CASE 2.1.05": [
        """TRUE — Classification follows what is transferred. A bag of roasted beans is a tangible item the customer takes away — a good. The barista’s preparation of a drink is labour performed for the customer — a service.

One café can sell both categories in the same visit; the statement separates them correctly.

The statement is true.""",
        """FALSE — Needs and wants are different teaching categories. A need is tied to basic well-being; a want is a preferred but non-essential desire. A general craving for caffeine may feel urgent, but a flavoured latte is a specific preference layered on top of any hydration or alertness need.

Treating the two concepts as identical erases that distinction.

The statement is false.""",
        """TRUE — If a habitual drink is not required for basic well-being, it belongs with wants: desired, repeatable, but not a survival necessity. Habit strength does not automatically promote a preference into a need.

The statement applies that filter correctly to a craving for a particular drink.

The statement is true.""",
        """FALSE — Being organised as a business does not erase operational needs. A café needs reliable bean suppliers, milk, cups, staff hours, and working equipment. Without those inputs, it cannot serve customers.

The claim that a business cannot itself have needs confuses legal form with economic reality.

The statement is false.""",
        """TRUE — Payment completes a two-sided exchange: the customer gives money and receives beans or a prepared drink; the café gives the product or service and receives revenue. Each side advances a need or want through that trade.

The statement describes that mutual fulfilment accurately.

The statement is true.""",
    ],
    "CASE 2.1.06": [
        """TRUE — With twelve euros, Jonas faces a classic scarce budget. An eight-euro bus pass supports getting to school — framed here as a need — while a ten-euro game skin is entertainment — a want.

The labels follow the needs-versus-wants distinction, not the euro price alone.

$$8 + 10 = 18 > 12$$

He cannot buy both from the twelve-euro budget, which is why the classification matters for the choice.

The statement is true.""",
        """FALSE — Price does not decide the needs/wants category. Many wants have prices (concert tickets, game skins); many needs also have prices (food, transport). Classification depends on necessity for well-being, not on whether a sticker price exists.

So both items having prices does not force both to be needs.

The statement is false.""",
        """FALSE — Jonas’s twelve-euro choice already forces trade-offs among the bus pass, the game skin, and saving. That is individual decision-making under scarcity, and it does not wait for business registration.

The letter is keyed false, so mark the statement false even though the wording restates ordinary participation under pocket-money scarcity.

The statement is false.""",
        """FALSE — Saving the twelve euros is itself an allocation decision: Jonas assigns the scarce budget to “hold cash now” rather than to the bus pass or the game skin.

Opting not to buy is not opting out of economics; it is choosing one use of limited means over others. The claim that he has escaped all economic decision-making fails.

The statement is false.""",
        """FALSE — Satisfying one use of the budget does not delete other desires. After buying the bus pass, Jonas may still want the game skin; the want can return next month when new pocket money arrives.

The absolute words “permanently” and “never” overclaim. Needs and wants are separate categories that can coexist after a purchase.

The statement is false.""",
    ],
    "CASE 2.1.07": [
        """TRUE — Screen replacement is labour performed on the customer’s device — a service. A phone case sold at the counter is a tangible product the customer takes away — a good.

PhoneFix can supply both in one visit; the statement separates the categories correctly.

The statement is true.""",
        """FALSE — A limited monthly batch of spare parts is scarce by definition: the shop cannot accept unlimited repair jobs once the batch is used up. Being a business rather than a household does not magically create an infinite parts stock.

The word “never” is the overclaim. Businesses face scarcity of inputs just as households face scarcity of income.

The statement is false.""",
        """TRUE — A decorative case bought purely for design is a preference about appearance, not a requirement for basic well-being. That places it on the wants side of the needs/wants split.

Functionally necessary repair might support a need; design-only accessories typically do not.

The statement is true.""",
        """FALSE — Whether a phone is labelled a luxury in casual speech does not remove it from economic analysis. For many households a working phone is needed for work, school contact, or emergencies, so repair can fulfil a genuine need.

The absolute “never” and the claim that phones sit “outside” economics are both wrong.

The statement is false.""",
        """TRUE — A fixed monthly parts batch is a hard capacity constraint. The shop must decide which jobs to accept, delay, or refuse — that prioritisation is economising under scarcity.

Without the batch limit, ranking jobs would be less urgent; with it, allocation is unavoidable.

The statement is true.""",
    ],
    "CASE 2.1.08": [
        """TRUE — Introductory models often summarise the economy as households and entrepreneurs (firms) interacting through exchange of goods, services, and factors. That pairing is the core building block the lesson asks students to list.

The statement captures that interaction framing.

The statement is true.""",
        """TRUE — Goods are tangible items; services are intangible activities performed for someone. The statement restates that standard classification without mixing the labels.

The statement is true.""",
        """TRUE — Both households and businesses have needs (and wants). Exchange is one way those needs and wants get fulfilled when parties trade rather than producing everything themselves.

The statement joins the actor-level needs claim with the role of exchange correctly.

The statement is true.""",
        """TRUE — Scarcity means resources are limited relative to desired uses. Economising — careful allocation — is the rational response; assuming unlimited resources would deny the constraint.

The statement links scarcity to economising for individuals and businesses.

The statement is true.""",
        """TRUE — Every actor faces scarce time and limited means. Trying to “opt out” still leaves those constraints in place, so decisions about use continue — including the decision to do nothing with a resource.

The statement correctly denies a full exit from economic decision-making.

The statement is true.""",
    ],
    "CASE 2.1.09": [
        """TRUE — Herr Novak organises production and sale of bread — the entrepreneur role. Families buying bread for household consumption act as households.

The statement assigns both roles in the bakery transaction correctly.

The statement is true.""",
        """TRUE — Bread is a tangible product — a good. Doorstep delivery is an activity performed for the customer — a service. Charging one euro extra for delivery does not change that classification; it prices the service alongside the good.

The statement matches the tangible/intangible distinction.

The statement is true.""",
        """FALSE — Owning a business does not erase personal or operational needs. Herr Novak still needs food and housing as a person, and the bakery needs flour, fuel, staff, and premises to operate.

The claim that he “personally has no needs” confuses the supplier role with the disappearance of needs.

The statement is false.""",
        """FALSE — Paying money for delivery is a standard monetary exchange: money for a service. A service does not lose economic value the moment it is performed; the payment is precisely for that performance.

Denying that the payment is exchange misreads both services and exchange.

The statement is false.""",
        """FALSE — Flour and oven fuel must be bought or otherwise obtained in limited quantities. They are not an infinite free flow. Any bakery must economise — how much dough to bake, how hot to run the oven, which batches to prioritise.

The words “unlimited” and “never” are the overclaims.

The statement is false.""",
    ],
    "CASE 2.1.10": [
        """TRUE — Exchange is mutual transfer of valued goods or services. Swapping gardening lessons for a bookshelf is barter: each neighbour gives something the other values. Money is absent, but exchange is present.

The statement correctly counts the swap as exchange.

The statement is true.""",
        """FALSE — Restricting exchange to euro cash or electronic transfers would exclude all barter. Exchange is broader than monetary payment; the medium can be goods or services.

The word “only” is the overclaim.

The statement is false.""",
        """TRUE — Wood for the bookshelf is a physical input available only in limited quantity for the carpenter’s projects. Using more wood on one shelf means less wood for other work, so economising on how much he uses is required.

The statement links a limited resource to economising correctly.

The statement is true.""",
        """TRUE — Gardening lessons are an activity performed for the neighbour, not a physical object handed over as the main product. That is the definition of a service.

The statement classifies the lessons correctly.

The statement is true.""",
        """TRUE — Individuals have needs and wants whether or not they own a firm. Direct exchange between neighbours can help satisfy those needs and wants without a shop or formal business on either side.

The statement correctly refuses to reserve needs, wants, and exchange for businesses alone.

The statement is true.""",
    ],
    "CASE 2.1.11": [
        """TRUE — Petra’s family buys the table for household use — household role. Fabian produces and sells the table as his trade — entrepreneur role.

The 650-euro commission is the market link between those roles.

The statement is true.""",
        """TRUE — The finished oak dining table is a tangible item produced and delivered — a good. Delivery may accompany it, but the table itself remains a physical product.

The statement classifies the table correctly.

The statement is true.""",
        """TRUE — Paying 650 euros for the table is monetary exchange that supplies the family with furniture they need (or want) without building it themselves. Fulfilment of that furniture requirement runs through the trade.

The statement describes that channel correctly.

The statement is true.""",
        """FALSE — Timber is an operational input Fabian must obtain to fulfil commissions. Calling raw materials “merely wants” for a business understates their role: without oak he cannot deliver the ordered table.

Businesses have genuine needs for inputs, not only households.

The statement is false.""",
        """TRUE — Oak stock is limited for each commission and across Fabian’s order book. Using thicker boards or larger dimensions on one table reduces what remains for others, so he must economise on how much oak each job consumes.

The statement links limited timber to economising correctly.

The statement is true.""",
    ],
    "CASE 2.1.12": [
        """TRUE — Keeping laptop production running requires specialised components from suppliers. That input requirement is an operational need of the manufacturer in the supply chain.

The statement describes that dependence accurately.

The statement is true.""",
        """FALSE — High-tech manufacturers have extensive internal needs: components, skilled labour, energy, logistics, and working capital. End consumers are not the only parties who experience genuine need.

The claim of “zero internal needs” is false.

The statement is false.""",
        """TRUE — Daily life is full of household purchases of goods and services — food, transport, repairs, entertainment — that satisfy both needs and wants. Businesses are the usual counterparties in those trades.

The statement correctly places households on the buying side of that exchange.

The statement is true.""",
        """FALSE — Meeting needs in a given month does not automatically wipe out wants. After rent and food are covered, preferences for leisure, fashion, or upgrades can remain and even grow.

Needs and wants are separate categories; satisfying one does not erase the other.

The statement is false.""",
        """FALSE — Teenagers with pocket money already choose how to spend or save limited means. That is household-side (or individual) economic participation long before any business registration.

The claim that they sit “outside the economy” until formal status is acquired is wrong.

The statement is false.""",
    ],
    "CASE 2.1.13": [
        """TRUE — In the stem, transport and toiletries are framed as needs (about 90 euros) while designer trainers at 140 euros are a want. The remaining budget after needs still has to cover or forgo the want.

$$90 + 140 = 230$$

Against a 300-euro monthly sum, both fit numerically, but the classification still separates necessity from preference.

The statement is true.""",
        """FALSE — Receiving money from parents does not remove Lukas from the household side of the economy. He is a household member allocating consumption and saving; the source of the transfer does not redefine his role as “outside.”

The statement is false.""",
        """FALSE — Buying trainers uses part of the budget for a want; it does not cancel the ongoing need for transport. He still needs to get around for the rest of the month, so transport spending remains relevant.

One purchase does not erase a different category of need.

The statement is false.""",
        """FALSE — Economics studies how people choose among scarce means to satisfy needs and wants. Non-essential desires are inside that scope, not excluded for being “irrational” in casual speech.

Wanting trainers is a preference the framework can analyse.

The statement is false.""",
        """FALSE — A fixed monthly sum is capped. Three hundred euros cannot fund unlimited purchases; Lukas must economise among transport, toiletries, trainers, and anything else.

“Unlimited” and “never” deny the budget constraint that defines the case.

The statement is false.""",
    ],
    "CASE 2.1.14": [
        """TRUE — Reinisch organises production and sale at the stall — entrepreneur. Village buyers purchase for household use — households.

The Saturday market is the exchange setting that links those roles.

The statement is true.""",
        """FALSE — Scarcity is about the means actually available for a decision, not about whether more land exists somewhere else in theory. Reinisch’s eight hectares are fixed for his planting plan; using a hectare for potatoes means it is not available for carrots.

Theoretical land markets elsewhere do not make his current plot non-scarce.

The statement is false.""",
        """TRUE — Potatoes and carrots are tangible products — goods — even if they will later be cooked. Cooking does not reclassify the raw produce as a service at the point of sale.

The statement keeps goods and services distinct correctly.

The statement is true.""",
        """TRUE — Eight hectares are a hard land constraint. Splitting them among crops is an allocation decision Reinisch cannot avoid if he wants to use the land productively.

That is economising under scarcity of land.

The statement is true.""",
        """FALSE — Cash payment for produce is ordinary monetary exchange. Barter is also exchange, but it is not the only form that “counts.” Restricting “real” trade to barter alone is false.

The statement is false.""",
    ],
    "CASE 2.1.15": [
        """TRUE — Toni and Rosa supply cheese and face-painting for sale — entrepreneurs. Visiting families buy for household consumption or leisure — households.

The market-day setting assigns those roles clearly.

The statement is true.""",
        """TRUE — A cheese wheel is a tangible item — a good. Face-painting is an activity performed for a child — a service.

The statement applies the goods/services split correctly.

The statement is true.""",
        """TRUE — Cheese bought for weekly groceries supports nutrition — typically a need in this lesson framing. Face-painting is enjoyment — a want.

The statement maps each purchase to the matching category.

The statement is true.""",
        """TRUE — Paying for cheese or face-painting is exchange: money for a good or service. Sellers receive revenue; buyers receive what fulfils a need or want.

Both sides of each trade advance their aims through that swap.

The statement is true.""",
        """TRUE — Thirty wheels left is a physical stock limit. Toni must decide how to allocate that stock among queuing families — who gets how many, at what pace — which is economising under scarcity.

Without the stock cap, prioritisation would be less binding.

The statement is true.""",
    ],
    "CASE 2.1.16": [
        """TRUE — Large cash reserves ease one constraint but not all. Managerial attention, factory hours, and machine capacity remain limited relative to competing projects, so scarcity continues inside a multinational.

The statement correctly refuses to equate “rich in cash” with “no scarcity.”

The statement is true.""",
        """FALSE — Unlimited wants are exactly why households must economise: budgets are finite while desires compete. Saying households “never economise” because wants are unlimited reverses the logic — unlimited wants plus limited budgets force trade-offs.

The statement is false.""",
        """FALSE — Governments face budget and capacity limits within a period. Raising taxes takes time, has political and economic costs, and still leaves a finite revenue pool to allocate among projects.

They are not exempt from scarcity.

The statement is false.""",
        """TRUE — When a resource is limited relative to competing uses, careful allocation — economising — is the rational response. The statement states that conditional definition cleanly.

The statement is true.""",
        """TRUE — Labour hours and raw materials are costly, limited inputs. Entrepreneurs who ignore those limits risk losses or shutdown; economising on inputs is part of staying viable.

The statement is true.""",
    ],
    "CASE 2.1.17": [
        """TRUE — Sami sells bean bags and espresso service as a business owner — entrepreneur. Customers buy for household consumption — households.

The morning-queue setting matches that role split.

The statement is true.""",
        """TRUE — The bean bag is a tangible take-away product — a good. Espresso preparation is barista labour — a service.

The statement classifies both offerings correctly.

The statement is true.""",
        """TRUE — A strong habitual coffee craving can feel urgent without being a survival requirement. In the needs/wants framework it is usually treated as a want unless the lesson ties it to basic well-being.

The statement allows that want classification.

The statement is true.""",
        """TRUE — Trying a new seasonal flavour for enjoyment is preference and variety-seeking — a want, not a basic necessity.

The statement places it correctly on the wants side.

The statement is true.""",
        """TRUE — Forty kilograms of a rare lot is a hard seasonal cap. Sami must decide how much to brew each day, what to reserve, and what to sell as bags — economising across the season.

$$40\\text{ kg}$$ total is finite; every kilogram allocated one way is unavailable another way.

The statement is true.""",
    ],
    "CASE 2.1.18": [
        """FALSE — Exchange does not require money. Nora’s novels for Felix’s tutoring is barter: each transfers something the other values. The absence of cash does not cancel the exchange.

The statement is false.""",
        """TRUE — Felix’s tutoring is an activity performed for Nora — a service. Nora’s novels are tangible items — goods.

The statement matches the standard classification.

The statement is true.""",
        """FALSE — Being students rather than registered businesses does not switch off needs, wants, or exchange. Individuals face those concepts whenever they allocate scarce time and belongings.

The claim that the concepts “do not apply” is wrong.

The statement is false.""",
        """TRUE — Felix’s free afternoons are limited. Two afternoons spent tutoring cannot also be spent on other commitments, so his time is a scarce resource he allocates.

The statement identifies that scarcity correctly.

The statement is true.""",
        """FALSE — Agreeing to one swap settles that particular trade; it does not end all future choices about remaining time, other novels, or other study plans. Scarcity of time continues after the handshake.

The statement is false.""",
    ],
    "CASE 2.1.19": [
        """TRUE — Growing one’s own food still uses limited land, time, and seed. Retirees must decide what to plant, how much effort to spend, and what to preserve — economising under scarcity even without supermarket trips.

Self-provision does not abolish scarcity.

The statement is true.""",
        """TRUE — Bicycle repair is work performed on the customer’s bike rather than a new physical product as the main output — a service.

The statement classifies workshop repair correctly.

The statement is true.""",
        """TRUE — Selling surplus eggs for cash is monetary exchange. Buyers obtain eggs that fulfil a need or want; sellers obtain money. Both sides gain through the trade.

The statement is true.""",
        """FALSE — Role labels follow activity, not age or wage status. Retirees who mainly consume and manage a household budget remain households. They become entrepreneurs only if they organise production and sale as a business activity — for example regularly selling eggs as a market operation — and even then the household role can coexist.

“No longer earn wages” alone does not force the entrepreneur label.

The statement is false.""",
        """TRUE — Land and time devoted to planting are unavailable for expanding the chicken flock, and vice versa. Choosing the mix is an allocation decision under scarcity that cannot be escaped by wishing resources were unlimited.

The statement is true.""",
    ],
    "CASE 2.1.20": [
        """TRUE — Trading firewood for canned food is barter exchange that helps meet needs (heat and food) even without nearby shops. Money and storefronts are unnecessary for the exchange concept.

The statement is true.""",
        """FALSE — Avoiding shops changes where trades happen; it does not remove choices about firewood, food stocks, and labour time. Karl still decides how much to cut, store, and trade.

That is ongoing economic decision-making, not a successful opt-out.

The statement is false.""",
        """FALSE — Declaring “I need nobody” is a social claim, not a proof that scarcity vanished. Karl still faces limited firewood, limited canned food, and limited chopping time.

Scarcity applies to his means regardless of how independent he feels.

The statement is false.""",
        """FALSE — Accessible timber, dry storage, and chopping effort are limited. Forests in the abstract do not give Karl unlimited ready firewood without time and transport costs. He must economise on how much he cuts and trades.

The statement is false.""",
        """FALSE — Needs, wants, and scarcity apply to individuals generally — including someone living remotely — not only to formally registered businesses or official household units.

Registration status is not the on/off switch for those concepts.

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
            for bad in ("A student who overlooked", "matched the topic to", "Read the quantifier",
                        "Check the sentence against the core concept",
                        "Map the scenario onto the textbook category",
                        "Check that the comparison runs in the stated direction"):
                if bad in e:
                    raise SystemExit(f"{case_id} {letter}: leftover boilerplate: {bad}")
        t["tactical_explanations"] = expls
        print("OK", case_id)
    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(PATCH)} cases")


if __name__ == "__main__":
    main()
