#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch2 cases [0:40]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch2-subtopics.json")
CLOSER = re.compile(r"\s*So the statement is (True|False)\.?\s*$", re.I)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# Per case: list of 5 body strings (no closer). Truth taken from answer_key.
BODIES: dict[str, list[str]] = {}

BODIES["CASE 2.1.01"] = [
    # A F compact
    "A steady salary changes how a household budgets, but it does not erase scarcity. Food, rent, transport, and leisure still compete for the same euros after payday. Income rearranges limits; it does not abolish them. The claim that scarcity disappears once wages arrive is therefore wrong.",
    # B T standard
    "Economising is careful ranking of limited means against competing uses. Treating time, money, or materials as if they were unlimited is the opposite of that discipline. Households cut discretionary spending when cash is tight; firms delay purchases when stock is low. The statement names that careful use correctly, so it fits the chapter idea of economising.",
    # C T expanded
    "Refusing to choose is still a choice about scarce means. Sitting out a purchase leaves money for later and frees time that could have been spent shopping or working. Even \"doing nothing\" allocates hours that cannot be reused. Households decide whether to save or spend; workers decide whether to take overtime; students decide whether to study or rest. In each case limited time and money force an allocation, including the allocation called inaction. Nobody steps outside that logic by opting out of markets or businesses. The statement is right that economic decisions follow people into everyday life, not only into registered firms.",
    # D F standard
    "Households with regular income still face rent, food, energy, and transport bills that compete for one budget. Scarcity is not reserved for registered businesses. A salaried family that skips a holiday to cover heating is economising in the same sense as a shop managing stock. Restricting scarcity to firms alone misreads who faces limited means.",
    # E F compact
    "Households buy bread, pay for repairs, and sell used goods without becoming entrepreneurs. Exchange is any agreed swap of goods or services, including ordinary consumer purchases. Requiring an entrepreneur on at least one side invents a rule the chapter does not use.",
]

BODIES["CASE 2.1.02"] = [
    # A F compact
    "Goods are tangible items such as bread, phones, or spare parts. Services are intangible activities such as repairs or tutoring. Calling every tangible item a service reverses the definitions. A loaf of bread remains a good even though it is physical.",
    # B T standard
    "Installing software, preparing a drink, or cutting hair are activities performed for someone, not physical objects handed over as stock. That intangibility is what makes them services. The café sells both roasted beans (a good) and barista labour (a service) side by side, which shows the split in one shop.",
    # C T expanded
    "Needs cover what supports basic well-being: food, shelter, essential healthcare, reliable transport to work or school. Wants cover desired extras such as designer trainers, flavoured specialty drinks, or entertainment upgrades that life can continue without. The boundary can be fuzzy at the edges, yet the chapter still treats the distinction as useful. Craving a particular latte flavour is typically a want; securing calories and warmth is a need. Confusing the two labels muddles priorities when budgets are tight. The statement states the contrast cleanly and correctly.",
    # D T standard
    "Households need food and shelter; manufacturers need components and labour hours. Both sides meet those needs through buying and selling with other actors. Exchange is not reserved for one side of the market. Businesses purchase inputs just as families purchase groceries.",
    # E T compact
    "Scarcity means means are limited relative to uses. Individuals and firms therefore economise instead of assuming endless supply. Unlimited-stock thinking would erase the need to prioritise, which scarcity forbids.",
]

BODIES["CASE 2.1.03"] = [
    # A F compact
    "Businesses sell to households every day: bakeries, cafés, repair shops, and online retailers. Trade between firms and consumers is ordinary exchange, not a legal prohibition. Claiming only consumers may trade invents a ban that does not exist.",
    # B F standard
    "Firms need raw materials, spare parts, energy, and staff time to keep operating. Those internal requirements are genuine needs, not consumer-only feelings. A bakery without flour cannot bake; a repair shop without screens cannot fix phones. Zero internal needs would describe an empty shell, not a working business.",
    # C F expanded
    "Leaving pocket money unspent is itself an allocation of scarce cash and time. The teenager chooses saving over buying, which ranks one use of limited means above another. Economic decisions are not only purchases; holding money idle, delaying a trip, or skipping a market stall all rearrange scarce resources. Opting out of spending does not opt out of economics. The claim that unused pocket money means no decision was made confuses \"no purchase\" with \"no choice.\"",
    # D T standard
    "When households buy goods or services from businesses, and when businesses buy inputs from suppliers, needs and wants get fulfilled through exchange. Direct swaps and money-mediated trades both count. Exchange is one practical channel for satisfying those pressures, not a side show.",
    # E F compact
    "Barter is exchange without money: lessons for a bookshelf, vegetables for childcare. Using cash is common but not required for a swap to count as genuine exchange. Money facilitates trade; it does not define it.",
]

BODIES["CASE 2.1.04"] = [
    # A T compact
    "Computers are tangible goods; installing software is an intangible service. Businesses supply both so people can meet needs and wants. The statement pairs those examples correctly.",
    # B T standard
    "Smartphone makers depend on specialised electronic components from other firms. Without those inputs, assembly lines stop. That operational dependence is a business need satisfied through supplier exchange, not a consumer-only category.",
    # C T expanded
    "Fabricating components requires raw materials, machines, and a workforce. No manufacturer runs in isolation from input markets. Labour hours, metals, plastics, and energy must be obtained and allocated. The claim that production needs materials and people rather than magic self-sufficiency matches how firms actually operate. Isolation would mean no supply chain and no output. The statement therefore describes ordinary manufacturing correctly.",
    # D T standard
    "Individuals buy groceries, pay for repairs, sell used goods, and hire tutors. They are not passive spectators waiting for firms to invent trade. Direct household participation in exchange is normal economic life, not an exception.",
    # E T compact
    "Food, shelter, and medical care are household needs; cinema visits are wants. Families pursue both through limited budgets. The statement separates those categories in a way that matches the chapter.",
]

BODIES["CASE 2.1.05"] = [
    # A T compact
    "Roasted beans in a bag are a tangible good. The barista preparing a drink performs an intangible service. One café transaction can include both categories at once, exactly as the statement says.",
    # B F standard
    "Needs support basic well-being; wants are desired extras. Craving caffeine for alertness and ordering a flavoured specialty latte are not identical ideas. Collapsing them into one concept erases the prioritisation households use when money is tight. The café setting makes the difference visible: fuel versus flourish.",
    # C T expanded
    "A habitual craving for a particular branded drink usually sits in the want column if life continues without that exact flavour. Basic hydration and calories can come cheaper. Habit strength does not automatically promote a preference into a need. The chapter keeps needs tied to essential well-being, not to routine desire. Calling the specialty drink a want is the accurate label here, even for a daily customer who feels strongly about it.",
    # D F standard
    "Cafés need reliable bean suppliers, working machines, and staffed shifts. Those operational requirements are business needs. Being a registered firm does not erase them. Without suppliers, the corner café cannot sell drinks at all.",
    # E T compact
    "Customers pay; the café supplies beans or prepared drinks. Each side gets something it values through exchange. Needs or wants are fulfilled on both sides of that payment.",
]

BODIES["CASE 2.1.06"] = [
    # A T standard
    "Twelve euros cannot cover both an eight-euro bus pass and a ten-euro game skin. Getting to school sits closer to a need; a cosmetic game skin is a want. Jonas's budget forces a ranking between them, and the labels in the statement match that ranking.",
    # B F compact
    "Price alone does not turn an item into a need. Many wants are priced; many needs are cheap. A ten-euro skin remains a want even though it costs money. Classification follows well-being, not the price tag.",
    # C T expanded
    "Economic decisions begin whenever limited means meet competing uses, including pocket money before any business registration. Jonas chooses between transport and entertainment with a fixed twelve euros. Students, teenagers, and other individuals allocate scarce cash and time long before they become entrepreneurs. Restricting economics to registered firms would leave everyday budgets unexplained. The statement correctly places individuals inside economic decision-making from the start.",
    # D F standard
    "Saving the twelve euros and buying nothing is still a choice: hold cash now, forgo both the pass and the skin today. Inaction reallocates scarce money over time. Claiming that buying nothing opts Jonas out of economics confuses \"no purchase\" with \"no decision.\"",
    # E F compact
    "Buying the bus pass uses current cash; the desire for the game skin can return next week when new money arrives. Wants are not permanently erased by one purchase. Preferences can recur after budgets refresh.",
]

BODIES["CASE 2.1.07"] = [
    # A T compact
    "Replacing a cracked screen is labour performed for the customer, a service. A phone case sold at the counter is a tangible good. PhoneFix can offer both in one visit.",
    # B F standard
    "Spare parts arrive in limited monthly batches. Being a business does not create unlimited stock. When the batch runs down, further repairs wait. Scarcity of parts is exactly why the shop must prioritise jobs.",
    # C T standard
    "A decorative case bought for design rather than protection serves appearance and preference. That is a want, not a basic need for well-being. Functionally necessary repairs differ from optional styling accessories.",
    # D F compact
    "A working phone often supports work, school contact, and safety. Repairing it can restore a practical need, not merely a luxury whim. Excluding phones from economic analysis is artificial.",
    # E T expanded
    "A fixed monthly parts batch cannot cover every cracked screen that walks in. PhoneFix must decide which jobs to accept, which to delay, and how to stretch inventory. That prioritisation is economising under scarcity. Unlimited-parts thinking would remove the need to choose; limited batches force ranking. The statement links the shop's constraint to careful allocation correctly.",
]

BODIES["CASE 2.1.08"] = [
    # A T compact
    "Households and entrepreneurs interacting through exchange form the core cast of everyday economic life. The statement names those building blocks without inventing extra actors as mandatory.",
    # B T standard
    "Goods are tangible items you can hold; services are intangible activities performed for someone. Bread versus delivery, beans versus barista work, tables versus assembly labour all illustrate the split. First-lesson definitions start there for a reason.",
    # C T expanded
    "Families need food and shelter; firms need inputs and labour. Exchange is one channel that fulfils those pressures when parties trade. Needs and wants motivate both sides, and markets connect them. Listing households, businesses, needs, wants, and exchange together gives students a usable map of economic life rather than isolated vocabulary. The statement packs that map accurately.",
    # D T standard
    "Limited resources relative to uses is scarcity. Economising is the response: rank, cut, delay, or substitute. Assuming unlimited means would deny the problem economics studies. Individuals and businesses share that constraint.",
    # E T compact
    "Inaction, saving, spending, and producing are all allocations of scarce means. Neither households nor firms can step outside that logic permanently. Opting out of one market is still choosing how to use limited time and money.",
]

BODIES["CASE 2.1.09"] = [
    # A T compact
    "Herr Novak runs the bakery as an entrepreneur; families buying bread act as households. Those roles meet at the counter when bread and money change hands.",
    # B T standard
    "Bread is a tangible good. Doorstep delivery is an activity performed for the customer, a service, often priced with an extra euro. Tangible versus intangible offerings sit side by side in one bakery order.",
    # C F expanded
    "Owning a bakery does not cancel Herr Novak's personal needs for food, rest, housing, and income. Entrepreneurs remain people with household pressures even while they supply others. Business ownership and personal needs coexist. Claiming he has no needs of his own confuses the firm role with a person who somehow stops needing anything. The counterexample is ordinary life after closing time.",
    # D F standard
    "Paying one euro extra for delivery is exchange of money for a service. The service has value at the moment of agreement even though the activity is intangible and finishes when the loaf arrives. Denying monetary value after performance misunderstands how services are traded.",
    # E F compact
    "Flour and oven fuel are limited stocks that cost money and run down. Bakeries economise on ingredients constantly. Unlimited flour is a fiction, not bakery practice.",
]

BODIES["CASE 2.1.10"] = [
    # A T standard
    "Gardening lessons swapped for a handmade bookshelf is barter: each side gives something valued. Exchange does not require banknotes. Neighbours completing that swap still trade goods and services in the economic sense.",
    # B F compact
    "Euro cash and electronic transfers are common media, not the definition of exchange. Barter and in-kind swaps count whenever parties agree to trade. Requiring money would erase those trades from economics.",
    # C T expanded
    "Wood for the bookshelf comes from limited timber. Using more on one project leaves less for the next commission or repair. The carpenter must decide thickness, waste, and offcuts carefully. That is economising under scarcity of materials. Treating wood as endless would ignore cost and availability. The statement ties limited wood to careful use correctly.",
    # D T standard
    "Gardening lessons are activities performed for the neighbour, not a physical object left behind like the bookshelf. That intangibility makes them a service. The swap therefore pairs a service with a good.",
    # E T compact
    "Individuals have needs and wants that direct neighbour-to-neighbour exchange can satisfy. Businesses are not the only actors with those motives. The gardening-for-bookshelf deal shows household-level trade working.",
]

BODIES["CASE 2.1.11"] = [
    # A T compact
    "Petra's family buys as a household; Fabian builds and sells as an entrepreneur. The 650-euro oak table deal places those roles on opposite sides of one exchange.",
    # B T standard
    "The finished dining table is a physical object Fabian produces and delivers. Tangibility puts it in the goods category, distinct from pure labour services such as advice without a delivered item.",
    # C T expanded
    "Furniture for daily meals is a practical household need. Paying Fabian transfers money for the table and thereby fulfils that need through exchange. The family does not fabricate the oak piece itself; market trade supplies it. Exchange here is the channel linking carpenter output to household use. The statement describes that fulfilment accurately.",
    # D F standard
    "Timber is an essential input for Fabian's commissions. Without oak he cannot build the table. Calling raw materials mere wants for any business understates operational necessity. Inputs required to produce are needs of the firm.",
    # E T compact
    "Oak stock is limited per purchase and per forest supply. Fabian must economise on how much wood each commission consumes. Wasteful cuts raise cost and shrink what remains for the next job.",
]

BODIES["CASE 2.1.12"] = [
    # A T compact
    "Laptop makers depend on specialised components from suppliers. Production stops without those parts. That dependence is a genuine manufacturing need met through exchange.",
    # B F standard
    "High-tech firms need chips, boards, energy, and skilled labour. End consumers are not the only actors who experience need. Zero internal needs would halt the plant. The claim invents a consumer-only monopoly on need.",
    # C T expanded
    "Households buy groceries, transport, repairs, and entertainment from businesses. Some purchases cover needs; others cover wants. Daily life runs through those exchanges. The statement correctly places both categories on the household shopping list and names businesses as the counterpart. Without that channel, families would have to produce everything themselves.",
    # D F standard
    "Satisfying food and rent this month does not erase desires for leisure, upgrades, or gifts. Wants can persist or return after needs are covered. Automatic disappearance of wants once needs are met is wishful, not descriptive.",
    # E F compact
    "Teenagers with pocket money already allocate scarce cash and time. They participate as individuals in the household sphere long before registering a firm. Excluding them until formal registration misdraws the boundary of the economy.",
]

BODIES["CASE 2.1.13"] = [
    # A T standard
    "Transport and toiletries support daily functioning; 140-euro designer trainers mainly express preference and style. With 300 euros monthly, Lukas covers needs first in the ninety-euro slice and a want in the trainers. The labels match the well-being split.",
    # B F compact
    "Money from parents still places Lukas inside a household budget. Receiving transfers does not eject him from the household side of the economy. Student allowances are ordinary household resource flows.",
    # C F expanded
    "Buying trainers spends part of the month's cash; it does not cancel the ongoing need to get to class or work. Transport remains a separate claim on the budget. One want purchase cannot retire a recurring need. Confusing categories this way would leave Lukas stranded without a pass after the shopping trip. Needs and wants compete for money; they do not erase each other when one is bought.",
    # D F standard
    "Economics studies how people allocate scarce means among valued ends, including wants others might call frivolous. Irrationality is not a ticket out of the subject. Trainer preferences still face a limited 300-euro constraint.",
    # E F compact
    "A fixed monthly sum is limited by definition. Competing uses force economising. Calling 300 euros unlimited denies the scarcity Lukas actually faces before month-end.",
]

BODIES["CASE 2.1.14"] = [
    # A T compact
    "Reinisch sells produce as an entrepreneur at the stall; village buyers act as households. Market day pairs those roles over potatoes and carrots.",
    # B F expanded
    "Eight hectares on this farm are limited land for this season's planting. The theoretical chance to buy other land elsewhere does not make today's hectares unlimited. Opportunity to expand later still leaves current acreage scarce relative to crop plans. Treating theoretical purchase options as proof of non-scarcity would erase almost every resource constraint. Reinisch must still split what he has now.",
    # C T standard
    "Potatoes and carrots are tangible products, hence goods, even if cooking comes later. Services would be activities such as delivery or catering. Raw vegetables remain goods on the stall.",
    # D T standard
    "Limited land forces crop choices: more potatoes mean fewer carrots on the same eight hectares. Reinisch cannot avoid that allocation. Economic decision-making is built into the field plan.",
    # E F compact
    "Cash payment for produce is money-mediated exchange, fully genuine. Barter is one form of trade, not the only valid one. Requiring barter alone would dismiss ordinary market stalls.",
]

BODIES["CASE 2.1.15"] = [
    # A T compact
    "Toni and Rosa sell at the market as entrepreneurs; visiting families buy as households. Those roles structure the Hallstatt market day.",
    # B T standard
    "A cheese wheel is a tangible good. Face-painting is an activity performed for a child, a service. One market can sell both categories from neighbouring stalls.",
    # C T expanded
    "Cheese for weekly groceries supports nutrition and household provisioning, closer to a need. Face-painting is enjoyable decoration, closer to a want. Families may buy both, yet the motives differ when budgets tighten. The statement uses that contrast without claiming wants are worthless. Needs and wants can share one market trip while remaining distinct labels.",
    # D T standard
    "Paying for cheese or face-painting completes exchange: money for a good or service. Sellers receive revenue; buyers receive what they sought. Fulfilment of needs or wants runs through that two-sided trade.",
    # E T compact
    "Thirty wheels left cannot serve an endless queue. Toni must allocate remaining stock among families. That limited inventory forces economising on the spot.",
]

BODIES["CASE 2.1.16"] = [
    # A T standard
    "Large cash reserves do not create unlimited managerial attention or infinite factory capacity. Multinationals still rank projects and shift lines. Scarcity of attention and plant time survives big balance sheets.",
    # B F compact
    "Unlimited wants colliding with limited budgets is exactly why households economise. The claim reverses the logic: wants being many is a reason to prioritise, not a reason to ignore constraints.",
    # C F expanded
    "Raising taxes takes political time, faces resistance, and still leaves this year's appropriated funds limited. Governments choose among roads, schools, and transfers under scarcity of current revenue and capacity. Immediate funding of every project is not available on demand. Excluding governments from scarcity misreads public budgeting. Councils and ministries economise too.",
    # D T standard
    "When a resource is limited relative to competing uses, ranking those uses is rational economising. Spending without priority would waste means that could serve higher-valued ends. The statement links limitation to careful allocation correctly.",
    # E T compact
    "Labour hours and raw materials cost money and run short. Entrepreneurs who ignore those limits lose viability. Economising on inputs is ordinary firm survival, not optional polish.",
]

BODIES["CASE 2.2.01"] = [
    # A T standard
    "Taking the unpaid internship means Elif forgoes the 400 euros monthly she could earn tutoring. That forgone tutoring income is the opportunity cost of accepting the internship. Next-best paid alternative, not zero because the internship wage is zero.",
    # B F compact
    "Zero internship pay does not mean zero opportunity cost. The cost is what she gives up elsewhere, here tutoring income. Unpaid choices can be costly in forgone alternatives.",
    # C T expanded
    "Keeping tutoring preserves cash but forgoes career experience and prospects the internship might open. Opportunity cost runs both ways: whichever path she picks, she loses the leading benefit of the other. Non-financial gains such as skills and networks count among those forgone benefits. The statement correctly names experience and prospects as what tutoring retains at the expense of the internship path.",
    # D F standard
    "Opportunity cost can be money, time, experience, health coverage, or other valued outcomes. Insisting on euros alone would shrink the concept. Elif's internship trade-off includes career dimensions that a pure euro rule would miss.",
    # E T compact
    "Student status does not remove scarce time. Elif still allocates hours between tutoring and internship. Individuals face allocation problems before they run firms.",
]

BODIES["CASE 2.2.02"] = [
    # A T compact
    "Volunteering on Saturday means Simon does not take the car-wash shift. The 45 euros he would have earned is the leading forgone benefit, his opportunity cost.",
    # B F standard
    "Saturday hours are limited whether or not money is scarce that week. Choosing volunteering uses time that cannot also wash cars. Scarcity covers time and other means, not only cash balances.",
    # C F expanded
    "Enjoying volunteering does not cancel the forgone car-wash wage. Satisfaction is a benefit of the chosen option; opportunity cost is still the next-best alternative given up. Feeling good about the shelter does not erase the 45 euros left on the table. Mixing personal satisfaction into a cancellation of cost confuses benefit of the chosen path with cost of what was rejected.",
    # D F standard
    "Teenagers allocate scarce Saturday hours among work, rest, and volunteering. Age does not exempt them from opportunity cost. Simon's choice is a clean classroom example of the idea.",
    # E F compact
    "Dog food costs belong to the shelter's budget, not to Simon's forgone alternative. His opportunity cost is what he personally gives up, mainly the car-wash earnings, not the shelter's expenses.",
]

BODIES["CASE 2.2.03"] = [
    # A T compact
    "Households, firms, and governments all face fixed budgets and competing uses within a year. Allocation under scarcity is shared across those actors.",
    # B T standard
    "If the Webers take the holiday, they forgo early loan repayment benefits such as lower interest and faster debt reduction. That forgone repayment benefit is the holiday's opportunity cost.",
    # C T expanded
    "Hiring a sales rep uses funds that could have upgraded delivery vans. The benefit of better vans is what the firm gives up when it chooses the hire. Opportunity cost tracks that next-best use of the same limited budget, not the sticker price of the new employee alone. Firms face the same trade-off structure households do when cash is limited this quarter.",
    # D T standard
    "Resurfacing the motorway means the railway extension waits. Residents forgo rail benefits when road work wins the budget. Public projects compete for the same scarce fiscal envelope.",
    # E T compact
    "Study hours on Saturday replace paid work hours. Forgone wage income is the opportunity cost of studying. Teenagers illustrate the same logic at small scale.",
]

BODIES["CASE 2.2.04"] = [
    # A T standard
    "If Sara buys the laptop, she forgoes the washer's benefit, the next-best use of that money. Opportunity cost is not the sum of every other rejected catalogue item. One leading alternative defines the cost.",
    # B F compact
    "Adding every rejected option's value invents a bloated total that is not the economic definition. Robin's sum-of-all-rejected rule mismatches the standard next-best-alternative idea.",
    # C F expanded
    "Two options are enough for scarcity: the same euros cannot buy both the laptop and the washer. Scarcity does not require a long menu. Binary choice already forces ranking of limited means. Claiming scarcity appears only with many options would erase most textbook examples. Sara's two-item decision is scarce-resource allocation in full.",
    # D F standard
    "If she buys the washer, opportunity cost is the laptop's benefit forgone, not 1,200 euros as a combined price of both. Combining prices double-counts and misstates the forgone alternative.",
    # E T compact
    "Opportunity cost names the alternative forgone, not the cash price of what you actually buy. Purchase price is what you pay; opportunity cost is what you give up instead.",
]

BODIES["CASE 2.2.05"] = [
    # A T compact
    "Eighteen thousand euros cannot fund a full kitchen and a full bathroom renovation at once. The sum is a limited resource that must be allocated between the projects.",
    # B T standard
    "Choosing the kitchen means living without the bathroom upgrade for now. The bathroom renovation's benefit is the opportunity cost of the kitchen path. Next-best home improvement forgone, not a combined fantasy budget.",
    # C T expanded
    "Choosing the bathroom instead forgoes greater resale value the kitchen might have added. Non-cash dimensions such as resale still count in opportunity cost when they are the leading alternative benefit. The Bergmanns compare more than identical euro stickers; they compare what each project would deliver. Opportunity cost follows that forgone delivery.",
    # D F standard
    "Identical 18,000-euro costs do not erase opportunity cost. Same price tags still leave only one project fundable. Equal costs make the forgone benefit comparison clearer, not empty.",
    # E T compact
    "Households allocate limited savings among competing uses just as firms and governments do. The Bergmanns illustrate that shared structure at home scale.",
]

BODIES["CASE 2.2.06"] = [
    # A T compact
    "Saturday morning cannot be spent both at the bookstore and at the swimming academy. Hours that morning are scarce between the two commitments.",
    # B T standard
    "Choosing the academy means Mila forgoes about 60 euros she could earn at the bookstore. That forgone wage is the opportunity cost of training that morning.",
    # C T expanded
    "Choosing the bookstore job means she forgoes training time and any scholarship edge the academy might support. Opportunity cost need not be a sure euro amount; valued athletic progress and future funding chances still count as forgone benefits. The statement names those dimensions correctly for the job path.",
    # D F standard
    "Uncertainty about a scholarship does not eject it from opportunity-cost thinking. Expected or potential benefits of the rejected path still matter. Demanding certainty would erase many real trade-offs students face.",
    # E T compact
    "Individuals allocate scarce time and money, not only firms and governments. Mila's Saturday choice is a personal scarce-resource problem.",
]

BODIES["CASE 2.2.07"] = [
    # A T compact
    "Five hundred thousand euros this year cannot fully fund both transport projects. City hall must allocate that limited budget between them.",
    # B F standard
    "Tax-funded projects still forgo alternative public uses of the same money. Absence of a market sticker price does not erase opportunity cost. Bike lanes versus a bus line compete for one fiscal pot.",
    # C F expanded
    "Both projects improve transport, yet they help different users and routes. Opportunity cost compares the forgone benefit of the rejected project, not a claim that similar goals make comparison impossible. Choosing bike lanes means bus-line benefits wait. Similarity of sector does not cancel trade-offs inside the sector.",
    # D T standard
    "Selecting bike lanes forgoes the bus line's benefits for commuters who would have used it. That forgone commuter benefit is the opportunity cost of the bike-lane choice.",
    # E F compact
    "Governments face scarce revenue, staff time, and political capital. They are not exempt from the scarce-resources problem households and firms know. Public budgets force ranking too.",
]

BODIES["CASE 2.2.08"] = [
    # A F compact
    "Opportunity cost is the next-best alternative forgone, not a sum of every rejected option's price. Adding all rejected prices inflates the concept beyond the definition.",
    # B F standard
    "Even if the stall pays more, leaving the bakery means giving up bakery wages, habits, and any non-pay benefits of staying. Higher stall pay does not drive opportunity cost to zero; it changes which path looks attractive.",
    # C T expanded
    "If Ana stays at the bakery, she forgoes the 2,100 euros the stall could pay. That forgone stall income is the opportunity cost of staying. The comparison runs through the leading rejected path's benefit, here higher stall earnings. Staying is costly in that precise sense even when bakery life feels familiar.",
    # D F standard
    "Jobs compete for the same limited working time. Choosing between two jobs is scarce-resource allocation even without physical goods on a shelf. Labour hours are the scarce means.",
    # E F compact
    "Paid holidays and other benefits are valued outcomes that can enter opportunity cost. Restricting the idea to raw euro wages alone is too narrow for Ana's comparison.",
]

BODIES["CASE 2.2.09"] = [
    # A T compact
    "Freelancing means Nina gives up the 2,700-euro agency salary. That forgone salary is the opportunity cost of going independent.",
    # B F standard
    "Higher freelance pay may make freelancing attractive, but it does not eliminate opportunity cost. She still forgoes agency salary, stability, and related benefits. Pay gaps change the balance; they do not erase the forgone path.",
    # C T expanded
    "Staying at the agency means she forgoes potential 3,100-euro freelance income. Opportunity cost of staying is that higher freelance path's benefit. Both directions of the choice carry a next-best alternative. Nina cannot collect both full incomes at once because working time is limited. The statement names the staying-side cost correctly.",
    # D F standard
    "Admin burden may affect net attractiveness, but opportunity cost is not defined as salary plus admin hours glued into one mechanical total. The core is the leading alternative forgone, not an arbitrary add-on formula.",
    # E T compact
    "Nina cannot work full-time agency and full-time freelance simultaneously. Limited working time forces one allocation. That scarcity frames her choice.",
]

BODIES["CASE 2.2.10"] = [
    # A T compact
    "Forty square metres cannot be fully vegetables and fully flowers at once. Plot area is limited and must be split or dedicated.",
    # B T standard
    "Choosing flowers means forgoing roughly 250 euros a year in grocery savings from vegetables. That forgone saving is a clear financial opportunity cost of the flower garden.",
    # C T expanded
    "Choosing vegetables means giving up enjoyment of flowers even when that enjoyment has no price tag. Non-financial benefits still count as opportunity cost when they are what the rejected planting would have delivered. Beauty and pleasure are real forgone outcomes. The Almeidas' plot decision shows opportunity cost beyond invoices.",
    # D T standard
    "Overtime hours spent on maintenance cannot also clear backlog orders. Forgone backlog revenue is the opportunity cost of maintenance time. The same hour pool cannot serve both uses fully.",
    # E T compact
    "Households allocate scarce land, time, and money under the same logic firms and governments use. The garden plot is a small-scale allocation problem of that shared type.",
]

BODIES["CASE 2.2.11"] = [
    # A T compact
    "Mateo has limited working time and two income paths. He must allocate hours toward salaried work or freelancing, not both at full scale.",
    # B T standard
    "Taking freelance means giving up the 3,600-euro salary and employer-paid health insurance. Those forgone benefits are the opportunity cost of freelancing, not only the headline wage gap.",
    # C T expanded
    "Staying salaried means forgoing potential 4,200-euro freelance income. Opportunity cost of the safe path is the higher freelance earnings left behind. Benefits and risk differ across paths, yet the forgone freelance total remains the leading money measure of staying. Mateo weighs both directions under one scarce time budget.",
    # D T standard
    "Full-time on both paths is impossible. Working hours are scarce, so one choice crowds out the other. That constraint is what forces the trade-off into the open.",
    # E T compact
    "Opportunity cost as next-best alternative benefit applies directly here: salary-plus-benefits versus freelance pay. Mateo's decision is a textbook fit for the definition.",
]

BODIES["CASE 2.2.12"] = [
    # A T compact
    "Capital available this year cannot open both stores at full planned scale. Location A versus B is an allocation of scarce expansion funds.",
    # B T standard
    "Opening at A forgoes the 180,000-euro profit projected at B. That forgone B profit is the opportunity cost of choosing A, the next-best site left behind.",
    # C F expanded
    "Opening at B forgoes A's 220,000-euro profit, not 400,000 euros as a sum of both locations. Combining profits invents a total the firm never could have earned at once with one store. Opportunity cost is the single next-best forgone path. Adding A and B double-counts capacity the chain does not have this year.",
    # D F standard
    "Large firms still face scarce capital, locations, and managerial attention. Size does not abolish scarcity; it changes the scale of the constraint. Expansion choices remain scarce-resource problems.",
    # E T compact
    "Firms allocate limited resources among competing uses just as households do. The store-location choice illustrates that parallel cleanly.",
]

BODIES["CASE 2.2.13"] = [
    # A T compact
    "Irrigation water this month cannot fully cover wheat and vegetables together. Limited water must be allocated between field types.",
    # B F standard
    "Irrigating vegetables forgoes wheat's 12,000-euro revenue, not 27,500 euros as a combined total. Adding both fields' revenues invents output water cannot produce simultaneously.",
    # C F expanded
    "Farmers face opportunity cost whenever scarce water, land, or time has competing uses. Registration status as a \"firm\" is irrelevant to the logic. Ilić forgoes one crop's revenue when he irrigates the other. Excluding farmers from opportunity cost would carve a hole in agricultural economics without reason.",
    # D T standard
    "Irrigating wheat means vegetables' 15,500-euro revenue is forgone. That vegetable total is the opportunity cost of the wheat watering choice.",
    # E F compact
    "Same-farm fields still compete for one scarce water flow. Watering one is allocating a limited resource even when both fields share an owner.",
]

BODIES["CASE 2.2.14"] = [
    # A T compact
    "Overtime hours are limited. Assigning them to backlog clearance means fewer hours for Line 2 maintenance, and the reverse.",
    # B T standard
    "Backlog overtime forgoes the breakdown-risk reduction maintenance would have bought. That forgone reliability benefit is the opportunity cost of chasing shipments instead.",
    # C T expanded
    "Maintenance overtime forgoes revenue from clearing delayed shipments. Opportunity cost of preventive work is the backlog payoff left unearned this period. Managers compare those leading alternatives when the hour pool is fixed. The statement names delayed-shipment revenue as the forgone benefit correctly.",
    # D F standard
    "Worker willingness to take overtime does not create unlimited hours in the budget or the week. Agreed overtime remains a scarce pool to allocate. No allocation problem would require truly endless hours.",
    # E T compact
    "Opportunity cost helps rank backlog versus maintenance when both claim the same limited hours. Comparing forgone benefits is how the manager chooses.",
]

BODIES["CASE 2.2.15"] = [
    # A F compact
    "Scarcity covers time, land, labour, and materials as well as money. Restricting it to cash alone is too narrow for Bergdorf's choices and for economics generally.",
    # B F standard
    "Unlimited wants meet limited household budgets, which is why opportunity cost appears at home. Claiming households never face it reverses the usual scarcity story. Budgets constrain families constantly.",
    # C F expanded
    "Councils can raise taxes in principle, yet this year's 90,000 euros is already fixed for the skate park versus library choice. Future revenue tools do not make the current envelope non-scarce. Bergdorf still picks one project now. Treating potential tax rises as proof of non-scarcity would excuse every public trade-off from analysis.",
    # D F standard
    "Individuals and students forgo alternatives whenever they allocate scarce time or money. Opportunity cost is not a company-only concept. A student's study hours illustrate it as clearly as a firm's investment.",
    # E T compact
    "Choosing the library forgoes the skate park's benefit, not a fantasy sum of both projects. Opportunity cost is the next-best forgone project, one alternative.",
]

BODIES["CASE 2.2.16"] = [
    # A F compact
    "Choosing the lower-return bookshelves still forgoes the 40,000-euro table profit. Opportunity cost is not zero merely because a better option existed; that forgone better option is the cost.",
    # B F standard
    "Personal satisfaction with bookshelf work does not erase the forgone table profit. Enjoyment is a benefit of the chosen line; opportunity cost remains the next-best profit left behind.",
    # C F expanded
    "Economising means prioritising limited resources among competing uses, not pretending oak is unlimited. Treating the batch as endless would skip ranking product lines. Handwerk GmbH must choose tables or bookshelves with one oak batch. The false definition in the statement is the opposite of economising.",
    # D F standard
    "Using the timber \"either way\" does not remove opportunity cost. Whichever product is made, the other product's profit is forgone. Shared material makes the trade-off sharper, not empty.",
    # E T compact
    "Limited oak forces selection of the more profitable line if profit is the goal. That ranking under scarcity is economising on the timber batch.",
]

BODIES["CASE 2.3.01"] = [
    # A F compact
    "Scope, not the mere word \"price,\" decides micro versus macro. A single shop's price change is micro; national price-level movements are macro. Automatic macro labeling for any price change is wrong.",
    # B F standard
    "A national bonus programme in the background does not turn Fatima's personal car choice into macroeconomics. Her purchase decision remains a household-level micro problem. Policy context alone does not flip scope.",
    # C F expanded
    "One café adjusting cake prices is a single-firm pricing decision, classic microeconomics. Macro looks at aggregates such as the overall price level or total output. Calling every local menu change macroeconomic empties the micro category. Scope follows the unit analysed, not the presence of the word price.",
    # D T standard
    "Nationwide totals for car sales after the bonus describe whole-economy outcomes. That aggregate lens is macroeconomic analysis, distinct from Fatima's individual purchase.",
    # E F compact
    "Micro asks about individual units and markets; macro asks about the whole economy. Those scopes differ in meaningful ways. Treating them as identical questions erases the branch split.",
]

BODIES["CASE 2.3.02"] = [
    # A T compact
    "Falling national GDP and economy-wide job losses describe whole-economy performance. Those are macroeconomic phenomena, not one shop's story.",
    # B F standard
    "Two staff laid off in one closed shop is a micro event even if headlines also discuss national layoffs. Scale and aggregation matter. Local closures do not become macro merely because the word layoff appears nearby.",
    # C T expanded
    "Macroeconomics builds theories about recessions, recoveries, unemployment swings, and related aggregates. Explaining and predicting those patterns is a core aim of the branch. Two consecutive quarters of falling GDP fit that agenda. The statement correctly assigns recession analysis to macro rather than to a single firm's accounts.",
    # D T standard
    "Economics as a whole studies decisions under limited resources at both micro and macro levels. The recession headline sits in that wider science without ejecting micro topics elsewhere.",
    # E F compact
    "Microeconomics can study a firm's hiring and firing or a worker's job search. Unemployment also appears at macro level as an aggregate rate. The topic is not macro-exclusive.",
]

BODIES["CASE 2.3.03"] = [
    # A T compact
    "National growth, unemployment, and policy rates in one quarterly pack describe the whole economy. That is macroeconomic analysis, not one bakery's ledger.",
    # B T standard
    "Growth, unemployment, interest rates, inflation, and price levels are standard macro topics. Freonia's report sits among those aggregates rather than among single-unit decisions.",
    # C T expanded
    "A bakery studying only its own sales and staffing is examining one firm. That unit of analysis is microeconomics even when national headlines run in the background. Scope follows what is being explained: one shop versus the nation. The contrast with Freonia's whole-economy report makes the branch split concrete for students.",
    # D T standard
    "Economics as a science builds theories to explain and predict nationwide phenomena such as growth and unemployment. Freonia's statistics are the kind of facts those theories organise.",
    # E T compact
    "Both micro and macro fall under economics defined around decisions under limited resources. Branching by scope does not invent a second unrelated subject.",
]

BODIES["CASE 2.3.04"] = [
    # A F compact
    "Macroeconomics exists precisely to explain recessions and other whole-economy swings. Denying that role because micro markets also exist misunderstands the branch division.",
    # B F standard
    "Heating can appear in national statistics, yet the Weiss family's supplier choice for next winter is still a household micro decision when national policy is ignored. Topic labels do not force macro scope.",
    # C T expanded
    "If policymakers study total household energy use because it feeds national inflation, the unit becomes an aggregate. That lens is macroeconomic even though the underlying fuel is the same commodity families buy. Scope shifts with the question asked. The statement correctly marks the aggregate energy-inflation analysis as macro.",
    # D T standard
    "Comparing gas and heat-pump contracts under a limited monthly budget is economics: scarce means, competing uses. Household trade-offs belong in the subject whether or not macro aggregates are in view.",
    # E F compact
    "Analysing one family is not the same as analysing the nation. Micro and macro ask different scope questions even when energy appears in both.",
]

BODIES["CASE 2.3.05"] = [
    # A T compact
    "Whole-country export and import totals summarise national trade. Those aggregates are macroeconomic statistics.",
    # B F standard
    "One winery's shipment schedule to Germany is a firm-level logistics and sales plan. Crossing a border does not automatically make the unit macroeconomic. Micro still covers individual exporters.",
    # C T expanded
    "Macro topics include growth, unemployment, inflation, interest rates, and aggregates such as trade totals. Export and import sums sit beside those headline variables as whole-economy measures. The ministry release belongs in that set. Listing trade totals with the classic macro list is accurate, not a stretch.",
    # D T standard
    "Economics seeks to explain why national export performance rises or falls over time using theories and evidence. That explanatory aim covers the ministry's aggregate series.",
    # E T compact
    "When the unit analysed is an individual firm's export choice, the work is microeconomics. Scope follows the decision maker, not the word export alone.",
]

BODIES["CASE 2.3.06"] = [
    # A F compact
    "Micro and macro differ by scope: individual units versus the whole economy. Calling their questions identical erases that distinction students are meant to learn.",
    # B F standard
    "A single employer's wage offer or one worker's job choice is micro even though labour markets can also be studied nationally. \"Wages\" as a word does not force macro scope.",
    # C T expanded
    "Economy-wide average wage growth from a statistics office is an aggregate series. That publication is macroeconomic analysis of labour-market outcomes for the nation. Contrast a household picking between two job offers, which stays micro. The same topic family, wages, splits by the unit measured.",
    # D T standard
    "Choosing between two job offers under limited time and attention is a household-level comparison. That is microeconomics even though wages are discussed.",
    # E F compact
    "Economics explains individual choices as well as nationwide aggregates. Micro exists for a reason. Restricting the science to aggregates alone is false.",
]

BODIES["CASE 2.3.07"] = [
    # A T compact
    "Micro examines individual households, businesses, or markets; macro examines the whole economy. That scope split is the standard branch definition.",
    # B T standard
    "One consumer choosing organic milk is a single-household purchase decision. Unit of analysis is micro regardless of how large the dairy industry is nationally.",
    # C T expanded
    "The national unemployment rate summarises labour-market outcomes across the economy. That aggregate is a macroeconomic statistic used to track recessions and recoveries. It is not a story about one worker's Tuesday interview. Scope is national by construction in the rate itself.",
    # D T standard
    "Economics builds theories about limited resources at both micro and macro scopes and uses them to explain and predict. Branching does not abandon the scarce-means core.",
    # E F compact
    "Government appears in micro settings too, such as a firm bidding on a local contract. Mentioning government does not force a macro label by itself.",
]

BODIES["CASE 2.3.08"] = [
    # A F compact
    "National unemployment figures are aggregates about the whole labour market. They belong to macroeconomics even though each worker is an individual person. Aggregation defines the scope.",
    # B F standard
    "Macroeconomics studies whole-economy variables, not every local price tweak. Inês raising espresso prices in one Porto shop is a micro pricing decision. Equating macro with any price change is a category error.",
    # C F expanded
    "Microeconomics routinely studies how two firms interact in one product market: rivalry, pricing, entry, and customer switching. Denying that interaction work would empty industrial organisation and market analysis. BrewPeak competing with nearby cafés is exactly the kind of micro interaction the branch covers. The claim is false.",
    # D F standard
    "Inflation is a core macro topic: movements in the overall price level. Macro discusses inflation constantly; it does not refuse the subject because prices begin in shops. Aggregation from shops to the price level is the point.",
    # E T compact
    "Economics remains a science that builds theories to explain and predict behaviour even when human forecasts are imperfect. Imperfect prediction does not strip the subject of scientific aims.",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    ids = [c["case_id"] for c in data[:40]]
    missing = [cid for cid in ids if cid not in BODIES]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(BODIES) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")

    for c in data[:40]:
        bodies = BODIES[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        expl = []
        for i, body in enumerate(bodies):
            if "—" in body:
                raise SystemExit(f"{c['case_id']} {chr(65+i)}: em dash in body")
            expl.append(wrap(body, bool(c["answer_key"][i])))
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases)")


if __name__ == "__main__":
    main()
