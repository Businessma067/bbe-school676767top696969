#!/usr/bin/env python3
"""Handcrafted maximal deepen for economics CASE 2.1.41–2.2.10."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")

PATCH: dict[str, list[str]] = {
    "CASE 2.1.41": [
        """TRUE — The monthly streaming fee is money paid to the company in return for access to content. The streaming firm organises and sells that access — entrepreneur — and the Hofers buy it — household exchange.

The statement is true.""",
        """TRUE — The family allocates a fixed entertainment budget among subscription options. That is the household role under a limited means constraint.

The statement is true.""",
        """TRUE — Premium sports channels are discretionary entertainment. Basic news coverage sits closer to information many households treat as more essential. In the needs/wants contrast, premium sports lean want.

The statement is true.""",
        """TRUE — Even when the bundle looks cheaper or simpler than separate plans, the fixed budget still cannot fund every conceivable streaming option and every other household use. Choosing the bundle is economising among constrained alternatives.

The statement is true.""",
        """FALSE — Downloadability does not force the goods label for every digital file. Some digital offerings are services (access, streaming, cloud activity); some are product-like files. “Always goods because downloadable” overgeneralises.

The statement is false.""",
    ],
    "CASE 2.1.42": [
        """TRUE — Cash reserves ease liquidity but not factory hours or managerial attention. Those capacities remain limited relative to competing projects, so scarcity continues inside the multinational.

The statement is true.""",
        """TRUE — A fixed parks budget cannot fund every park improvement at once. Councils prioritise just as households prioritise a fixed income — scarcity of the same economic kind, different institutional setting.

The statement is true.""",
        """TRUE — Modest incomes force monthly trade-offs among rent, food, and transport. That is textbook household economising under scarcity.

The statement is true.""",
        """FALSE — Weekends recur, but each weekend’s hours are still finite. Repeating calendars do not create unlimited study, work, and leisure time in any given week.

Students face scarce time.

The statement is false.""",
        """FALSE — Higher input prices tighten cost constraints; they do not magically expand physical supply without limit. Suppliers may deliver more at higher prices, but capacity, materials, and time remain scarce.

Rising prices do not “remove scarcity.”

The statement is false.""",
    ],
    "CASE 2.1.43": [
        """TRUE — Each plot holder decides what to plant and how to tend a small bed for household use — a household-producer role on allocated land.

The statement is true.""",
        """FALSE — Neighbour swaps of seedlings, tools, or produce are barter exchange when each gives something valued. Friendship may motivate the swap; it does not stop the transfer from counting as exchange.

“Never count” is false.

The statement is false.""",
        """FALSE — Even a large outdoor site is divided into twenty plots with shared water on scheduled mornings. Within a small bed, choosing tomatoes means less space for herbs. Space and water still force crop choices.

Large total area ≠ no need to choose.

The statement is false.""",
        """FALSE — Gardeners make economic decisions when they allocate plot space, water turns, and labour time — not only when they buy in shops.

Shop purchases are one channel; plot allocation is another.

The statement is false.""",
        """FALSE — Outdoor soil does not imply infinite fertile beds, water, seeds, or labour. Twenty households sharing one tap is a vivid scarcity setup.

Community gardens organise scarcity; they do not eliminate it.

The statement is false.""",
    ],
    "CASE 2.1.44": [
        """TRUE — Invoicing a client for design work is market supply of a service — the entrepreneur role for that project.

The statement is true.""",
        """TRUE — Client payment for design is exchange (money for service). Later paying a baker is another exchange (money for goods). Same person, two trades.

The statement is true.""",
        """TRUE — Software licences can be operational needs for delivering client work. A premium portfolio site may be a discretionary want that helps marketing but is not required to produce every job.

The statement separates need and want inside the business role.

The statement is true.""",
        """TRUE — Buying groceries after work is household consumption. The designer switches from entrepreneur (client work) to household (supermarket) by activity.

The statement is true.""",
        """TRUE — Time, money, and skills are limited in both roles. Client deadlines compete with personal errands; business cash competes with household spending.

Scarcity frames both sets of decisions.

The statement is true.""",
    ],
    "CASE 2.1.45": [
        """TRUE — A luxury handbag is discretionary status or style spending — a want — not a basic need like food or shelter.

The statement is true.""",
        """TRUE — A bus ticket buys the right to be transported — typically classified as purchasing a transport service rather than a lasting tangible good as the main product.

The statement is true.""",
        """FALSE — Cloud storage is primarily an access/service arrangement even though data sit on physical servers. Server hardware belonging to the provider does not automatically make the customer’s storage product a good.

Classification follows what the customer buys (storage service/access), not the server’s physicality alone.

The statement is false.""",
        """FALSE — Bread is a need for nutrition in ordinary teaching examples. Charging money prices the loaf; price does not demote bread to “want only.”

Many needs are sold for money.

The statement is false.""",
        """FALSE — Owning a building does not remove the need to maintain shelter — repairs, heating, safety. Home maintenance supports the ongoing need for usable housing.

Ownership ≠ exclusion from needs.

The statement is false.""",
    ],
    "CASE 2.1.46": [
        """TRUE — Buying chairs or tipping for music are exchanges: visitors give money and receive goods or a performance. They act as households or individuals on the demand side.

The statement is true.""",
        """TRUE — In mild weather a hot drink is comfort and enjoyment more than survival heating — a want in that framing.

The statement is true.""",
        """FALSE — Selling chairs at a market is entrepreneurial supply of goods. Standing in cold weather does not reclassify craft sellers as “households only.”

The statement is false.""",
        """FALSE — Wood, energy, and overnight hours are limited. “Always carve more overnight” denies fatigue, material cost, and time scarcity. Artisans economise on inputs and effort.

The statement is false.""",
        """FALSE — Tips are money; the music performance remains a service. Tangible coins do not convert the activity into a good.

Medium of payment ≠ product classification.

The statement is false.""",
    ],
    "CASE 2.1.47": [
        """TRUE — Volunteer hours cannot also be sold as paid labour in the same slot. Using scarce time at the shelter forgoes wage income elsewhere — an allocation decision under scarcity.

The statement is true.""",
        """TRUE — Delaying one project frees budget for other uses (or holds funds). The government still allocates the unchanged total among competing claims.

Delay is a decision, not an escape from allocation.

The statement is true.""",
        """TRUE — Holiday closure requires staffing plans before and after. Limited staff availability is allocated across those periods — still an economic decision about scarce labour.

The statement is true.""",
        """TRUE — Unpaid chores consume scarce hours. Time spent cooking is unavailable for cleaning or childcare in the same hour — household allocation under scarcity.

The statement is true.""",
        """TRUE — Sleep and revision compete for the same night hours. Choosing one forgoes the other — scarce time allocation.

The statement is true.""",
    ],
    "CASE 2.1.48": [
        """TRUE — Trade happens because each side values what it receives more than what it gives up. Needs and wants on both sides supply that motivation.

The statement is true.""",
        """TRUE — Firms buy inputs from suppliers through exchange to meet operational production needs — entrepreneur↔entrepreneur or firm↔firm trade.

The statement is true.""",
        """TRUE — Importing textiles is cross-border exchange between retailer and foreign producer. Exchange is not limited to domestic counterparties.

The statement is true.""",
        """TRUE — Festival merchandise is discretionary — a want — fulfilled by paying an event seller — exchange with an entrepreneur.

The statement is true.""",
        """FALSE — Essential medicines are typically sold for money in pharmacies — market exchange — not gifts merely because health matters. Essentiality explains why they are needs; it does not redefine the sale as a gift.

The statement is false.""",
    ],
    "CASE 2.1.49": [
        """TRUE — Partner hours in a busy quarter are limited. Allocating them among client cases is economising on scarce professional time.

The statement is true.""",
        """FALSE — Intangible advice still needs buyers. Without customers and fees, a service firm cannot sustain itself. Intangibility does not remove the need for demand.

The statement is false.""",
        """FALSE — Services consume scarce practitioner time, attention, and capacity. Intangibility of output does not cancel input scarcity.

The statement is false.""",
        """FALSE — Paying someone else to perform labour uses limited money and still leaves the buyer economising on what else that money could fund. Outsourcing shifts who works; it does not abolish the buyer’s scarcity.

The statement is false.""",
        """FALSE — Many service firms run vehicles, heat offices, or travel to clients — fuel and energy are real costs. Customer fees must cover those costs; ignoring fuel because “customers pay fees” is false.

The statement is false.""",
    ],
    "CASE 2.1.50": [
        """TRUE — The introductory picture of the economy is households and entrepreneurs exchanging goods and services to address needs and wants.

The statement is true.""",
        """TRUE — Goods = tangible items; services = intangible activities performed for someone. The statement restates that classification.

The statement is true.""",
        """TRUE — Limited resources force economising on every actor — households, firms, governments — that faces competing uses.

The statement is true.""",
        """FALSE — Retail, household second-hand sales, barter, and consumer purchases all count as exchange. Wholesale firm-to-firm trade is only one channel.

“Only wholesale” is false.

The statement is false.""",
        """FALSE — Consumers, students, employees, and savers make economic decisions constantly. Opening a business is not required.

The statement is false.""",
    ],
    "CASE 2.2.01": [
        """TRUE — Opportunity cost is the value of the best forgone alternative. Accepting the unpaid internship means giving up the tutoring stream:

$$400\\text{ euros/month forgone}$$

That forgone tutoring income is the opportunity cost highlighted in the stem.

The statement is true.""",
        """FALSE — Zero wage on the internship does not mean zero opportunity cost. Elif still sacrifices the 400 euros monthly tutoring she could have kept. Unpaid ≠ costless.

The statement is false.""",
        """TRUE — Keeping tutoring means she does not take the overlapping internship, so she forgoes the career experience and architecture-prospect benefits that internship would have provided.

Opportunity cost can be non-money benefits forgone.

The statement is true.""",
        """FALSE — Opportunity cost is the forgone alternative’s value — money, experience, leisure, or other benefits. Requiring “euros only” with no other dimensions allowed is too narrow for the standard definition.

The statement is false.""",
        """TRUE — Student status does not remove scarce time. Tutoring and the internship overlap, so Elif must allocate limited hours between them.

The statement is true.""",
    ],
    "CASE 2.2.02": [
        """TRUE — Volunteering uses the same Saturday Simon could have worked the car wash. The forgone earnings are:

$$45\\text{ euros}$$

That is the opportunity cost of volunteering in money terms.

The statement is true.""",
        """FALSE — Scarcity includes time, energy, and other means — not only money. Simon’s Saturday hours are limited whether or not a wage is involved.

The statement is false.""",
        """FALSE — Satisfaction is a benefit of volunteering; it does not cancel the opportunity cost. Opportunity cost is what is forgone (the 45 euros), not net pleasure after the fact.

Benefits and opportunity cost are separate sides of the decision.

The statement is false.""",
        """FALSE — Teenagers allocate scarce time and pocket opportunities just like other individuals. Age does not switch off scarce-resource concepts.

The statement is false.""",
        """FALSE — The shelter’s dog-food cost is the shelter’s expense, not Simon’s forgone alternative when he volunteers. His opportunity cost is what he gives up — chiefly the car-wash earnings (and alternative uses of his Saturday) — not the shelter’s input bill.

The statement is false.""",
    ],
    "CASE 2.2.03": [
        """TRUE — The Webers’ household budget, the firm’s capital budget, and the ministry’s transport budget are all limited this year. Each actor allocates a fixed pool among competing uses.

The statement is true.""",
        """TRUE — Choosing the holiday means not using that money for early loan repayment. The benefit of earlier repayment forgone is the holiday’s opportunity cost.

The statement is true.""",
        """TRUE — Hiring a sales rep uses funds (or capacity) that could have upgraded vans. The forgone van-upgrade benefit is the opportunity cost of hiring.

The statement is true.""",
        """TRUE — Motorway resurfacing uses budget that could have extended the railway. Residents forgo the railway’s benefit — the opportunity cost of the motorway choice.

The statement is true.""",
        """TRUE — Saturday study forgoes paid work that those hours could have earned. Forgone wage income is the opportunity cost of studying that day.

The statement is true.""",
    ],
    "CASE 2.2.04": [
        """TRUE — With two relevant options, buying the laptop means forgoing the washer’s benefit — not summing every other thing Sara might ever have bought. Opportunity cost is the value of the next-best alternative forgone.

Washer benefit forgone ≠ catalogue of all rejected purchases.

The statement is true.""",
        """FALSE — Robin’s “sum of every rejected option’s price” inflates opportunity cost by adding alternatives that were not the next-best choice and by using prices instead of forgone benefits carefully. That is not the standard definition.

The statement is false.""",
        """FALSE — Scarcity appears whenever limited means face competing uses — even with only two options. Two options still force a trade-off.

“Scarcity requires many options” is false.

The statement is false.""",
        """FALSE — If Sara buys the washer, she forgoes the laptop — opportunity cost is the laptop’s benefit forgone, not:

$$500 + 700 = 1{,}200$$

Adding both prices double-counts and misstates opportunity cost. She pays 500 for the washer; she does not pay 1,200.

The statement is false.""",
        """TRUE — Opportunity cost looks at the alternative you did not take, not at the sticker price of what you did buy. The purchase price is the outlay; opportunity cost is the forgone option’s value.

The statement is true.""",
    ],
    "CASE 2.2.05": [
        """TRUE — Eighteen thousand euros funds only one full renovation this year. The sum is a limited resource that must be allocated to kitchen or bathroom (not both fully).

$$18{,}000$$ is the binding budget.

The statement is true.""",
        """TRUE — Choosing the kitchen means the bathroom renovation does not happen this year. The bathroom’s benefit forgone is the opportunity cost of the kitchen.

The statement is true.""",
        """TRUE — Choosing the bathroom means forgoing the kitchen project and whatever extra resale-value benefit the kitchen would have brought (as the statement frames it). That forgone kitchen-side benefit is the opportunity cost of doing the bathroom instead.

The statement is true.""",
        """FALSE — Equal money outlays do not erase opportunity cost. Each choice still forgoes the other project’s non-money and money-related benefits. Identical 18,000-euro tags mean the cash cost is the same; they do not mean “no opportunity cost.”

The statement is false.""",
        """TRUE — Households, firms, and governments all allocate limited means among competing uses. The Bergmanns’ renovation trade-off is the same allocation problem in household form.

The statement is true.""",
    ],
    "CASE 2.2.06": [
        """TRUE — Saturday morning cannot be spent at the bookstore and at the academy at once. Hours are scarce between those uses.

The statement is true.""",
        """TRUE — Choosing the free academy forgoes the bookstore wage:

$$60\\text{ euros}$$

That forgone earning is the money opportunity cost of the academy.

The statement is true.""",
        """TRUE — Choosing the job forgoes training time and the potential scholarship benefit the academy might bring. Those forgone benefits are the opportunity cost of working.

The statement is true.""",
        """FALSE — Uncertainty affects how one estimates a benefit; it does not ban the benefit from opportunity-cost reasoning. A possible scholarship is still a forgone prospect when Mila works instead.

The statement is false.""",
        """TRUE — Individuals allocate scarce time and money, not only firms and governments. Mila’s Saturday choice is individual scarce-resource allocation.

The statement is true.""",
    ],
    "CASE 2.2.07": [
        """TRUE — Half a million euros cannot fully fund both the bus line and the bike lanes this year. City hall must allocate:

$$500{,}000$$

between the two transport projects.

The statement is true.""",
        """FALSE — Tax-funded projects still use limited public budgets. Choosing one project forgoes another’s benefits — opportunity cost — whether or not market prices tag every output.

Public ≠ zero opportunity cost.

The statement is false.""",
        """FALSE — Both improving transport does not block comparison. Opportunity cost asks what benefit you give up when you fund A instead of B — bus-line benefits versus bike-lane benefits.

Comparable category (transport) makes the trade-off clearer, not impossible.

The statement is false.""",
        """TRUE — Choosing bike lanes means the bus line is not fully funded this year. Commuters forgo the bus line’s benefit — the opportunity cost of bike lanes.

The statement is true.""",
        """FALSE — Governments face scarce budgets and capacity just like households and firms. Taxation does not grant an exemption from the basic scarce-resources problem.

The statement is false.""",
    ],
    "CASE 2.2.08": [
        """FALSE — Opportunity cost is the value of the next-best alternative forgone, not the sum of every rejected alternative’s price. Summing all rejects overstates and misdefines the concept.

The statement is false.""",
        """FALSE — Higher stall pay (2,100 versus 1,900) does not make leaving costless. Leaving forgoes bakery wages, job security, and related benefits. Higher expected stall income may justify the move; it does not zero the opportunity cost.

The statement is false.""",
        """TRUE — If Ana stays at the bakery, she forgoes the stall’s earnings:

$$2{,}100\\text{ euros/month}$$

That forgone stall income is the opportunity cost of staying (in money terms highlighted here).

The statement is true.""",
        """FALSE — Jobs use scarce labour time. Choosing between two jobs is a classic allocation of limited working time and effort — scarcity applies to labour, not only to physical goods.

The statement is false.""",
        """FALSE — Paid holidays are part of a job’s total benefit package. Forgoing them when switching work can enter opportunity-cost comparison alongside euro wages. “Only euro amounts count” is too narrow.

The statement is false.""",
    ],
    "CASE 2.2.09": [
        """TRUE — Freelancing means Nina does not keep the agency job, so she forgoes:

$$2{,}700\\text{ euros}$$

agency salary (plus associated agency benefits not listed here). That forgone salary is the money opportunity cost of freelancing.

The statement is true.""",
        """FALSE — Earning 3,100 freelance instead of 2,700 salaried may raise income, but opportunity cost is what she gives up (salary, stability, less admin), not something that vanishes because pay is higher.

Higher pay ≠ zero opportunity cost.

The statement is false.""",
        """TRUE — Staying at the agency forgoes potential freelance income of:

$$3{,}100\\text{ euros}$$

That forgone freelance earning is the money opportunity cost of staying.

The statement is true.""",
        """FALSE — Admin time is a real cost of freelancing, but opportunity cost is not defined as “salary plus admin tacked on by definition.” You compare alternatives’ benefits and burdens carefully; you do not mechanically add admin onto salary as the definition of opportunity cost.

The statement is false.""",
        """TRUE — Nina cannot work full agency hours and full freelance hours simultaneously. Working time is limited, so her choice allocates scarce labour time.

The statement is true.""",
    ],
    "CASE 2.2.10": [
        """TRUE — Forty square metres cannot be fully vegetables and fully flowers at once. The plot is a limited resource allocated between those uses.

$$40\\text{ m}^2$$ binds the planting choice.

The statement is true.""",
        """TRUE — Choosing flowers forgoes the vegetable garden’s grocery savings of about:

$$250\\text{ euros/year}$$

That forgone saving is the money-measured opportunity cost of flowers.

The statement is true.""",
        """TRUE — Choosing vegetables forgoes the enjoyment of a flower garden. Non-financial benefits forgone still count in opportunity cost.

The statement is true.""",
        """TRUE — On the statement’s wording, overtime hours used for maintenance cannot also clear backlog work that would have earned revenue. Forgone backlog revenue is the opportunity cost of those maintenance hours.

(The letter applies the same opportunity-cost logic to hours as the plot applies to land.)

The statement is true.""",
        """TRUE — Households, firms, and governments all allocate scarce resources among competing uses. The Almeidas’ plot choice is that allocation problem in household form.

The statement is true.""",
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
