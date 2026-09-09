-- Update expanded explanations for 2.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Even a steady salary remains finite. The household still allocates limited income among competing needs and wants, so scarcity does not disappear when pay arrives on schedule. The absolute claim that income "removes all limits" is what makes the sentence fail.

The statement is false.', 'Economising is the careful use of resources that are limited relative to what people would like to do with them. Treating those resources as if they were unlimited is the opposite of that idea, so the definition in the claim is sound.

The statement is true.', 'Sitting still or spending nothing still uses scarce time or money in a particular way. That allocation is itself an economic decision, so nobody can step fully outside economic choice by refusing to act.

The statement is true.', 'Households work with limited budgets just as firms work with limited inputs. Regular income does not cancel the need to prioritise spending, and scarcity is not reserved for registered businesses alone.

The statement is false.', 'Exchange is trade between parties who value what the other offers. Households routinely buy goods and services with money or goods of their own, so they participate directly; entrepreneurship is not a prerequisite for exchange.

The statement is false.'] WHERE case_id = 'CASE 2.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Goods are the tangible items that can be handed over, such as a phone or a bag of beans. Services are the intangible activities performed for someone. The claim reverses that distinction and therefore fails.

The statement is false.', 'A service is work done for a customer rather than a physical object taken away. Installing software or preparing a drink fits that definition cleanly.

The statement is true.', 'Needs are what is necessary for well-being. Wants are desired extras that go beyond that baseline. Keeping those two categories apart is exactly what the claim does.

The statement is true.', 'Firms need inputs, labour, and premises just as households need food and shelter. Both sides can meet those needs by trading with other actors, so the claim holds.

The statement is true.', 'When resources are limited relative to wants, every actor has to allocate carefully. That is economising under scarcity, not an assumption of unlimited supply.

The statement is true.'] WHERE case_id = 'CASE 2.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Markets are built on trade between households and businesses. Firms sell to consumers every day, so the claim that businesses are barred from trading with households is simply wrong.

The statement is false.', 'A workshop still needs parts, tools, and workers. Operational needs belong to businesses as well as to consumers, so zero internal need is an overclaim.

The statement is false.', 'Leaving pocket money unspent is a choice about how to use a scarce resource. Inaction still allocates time or cash, so it does not escape economic decision-making.

The statement is false.', 'When a household pays a firm, or a firm pays a supplier, each side gets something it values. That mutual fulfilment through trade is what exchange means.

The statement is true.', 'Barter is exchange without money: each party gives something the other wants. Monetary payment is common but not required for a trade to count.

The statement is false.'] WHERE case_id = 'CASE 2.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A computer is a tangible good; installing software is an activity performed for the buyer. Firms routinely supply both so that people can meet needs.

The statement is true.', 'Assembling a smartphone depends on specialised electronic parts. Those components are operational inputs the manufacturer genuinely needs from suppliers.

The statement is true.', 'Fabrication cannot run on empty shelves. Raw materials and a workforce are scarce inputs the manufacturer must secure, so isolation from suppliers is not an option.

The statement is true.', 'People buy from shops, sell used goods, and trade with neighbours. Individuals are active participants in exchange, not spectators on the sidelines.

The statement is true.', 'Food, shelter, and medical care sit on the needs side. Cinema visits sit on the wants side. Households hold both kinds of demand at once.

The statement is true.'] WHERE case_id = 'CASE 2.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Roasted beans are a physical product the customer can take home. The barista''s preparation of a drink is work performed for that customer. Good and service line up exactly that way.

The statement is true.', 'Necessity for well-being marks a need; a preferred flavoured latte beyond that baseline is a want. The two concepts are not identical, so collapsing them fails.

The statement is false.', 'A habitual craving for one particular drink is usually about preference, not survival. Unless it is essential for basic well-being, it belongs with wants.

The statement is true.', 'A café still needs reliable bean suppliers, staff, and premises. Being a business does not erase those operational needs.

The statement is false.', 'Paying for beans or a prepared drink is monetary exchange. Each side gets something it values, so needs or wants are fulfilled through the trade.

The statement is true.'] WHERE case_id = 'CASE 2.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Getting to school is necessary for Jonas''s well-being in this setting, so the bus pass is a need. A game skin is enjoyable but not essential, so it is a want. The pairing is correct.

The statement is true.', 'Price tells you that something is traded in a market, not that it is necessary for well-being. Both items can have prices while only one counts as a need.

The statement is false.', 'The claim treats every individual as already making full economic decisions in the textbook sense before any household or firm role appears. In this framing, facing scarce pocket money is real, but the sentence still overreaches the roles the chapter assigns, so it does not stand as stated.

The statement is false.', 'Saving the twelve euros is itself a decision about scarce cash. Opting out of purchases is not opting out of economic choice.

The statement is false.', 'Buying the bus pass meets a need; it does not delete the desire for the skin. Wants can remain after a need has been covered.

The statement is false.'] WHERE case_id = 'CASE 2.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Screen replacement is work performed on the device, so it is a service. A phone case sold at the counter is a tangible product, so it is a good.

The statement is true.', 'Spare parts arrive in fixed monthly batches. A fixed batch is limited by definition, so scarcity still binds a business the same way it binds a household.

The statement is false.', 'Choosing a case for its look is about preference, not basic necessity. That purchase satisfies a want.

The statement is true.', 'A working phone often supports daily communication and coordination. Repair can therefore meet a genuine household need; calling every phone a luxury outside economics is too strong.

The statement is false.', 'With only a limited batch of parts, the shop cannot accept every job at once. Prioritising which repairs to take is economising under scarcity.

The statement is true.'] WHERE case_id = 'CASE 2.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['In the basic picture used here, the economy is households and entrepreneurs interacting through production and trade. That is the essential cast of characters.

The statement is true.', 'Tangible items are goods; intangible activities performed for someone are services. The contrast is the standard classification.

The statement is true.', 'Both households and firms hold needs and wants. Exchange is one channel through which those needs and wants get met on each side of a trade.

The statement is true.', 'Limited resources relative to competing uses force careful allocation. Economising is the response; assuming unlimited supply is not.

The statement is true.', 'Even refusing to buy or to produce still allocates scarce time or money. Neither households nor businesses can step fully outside that kind of choice.

The statement is true.'] WHERE case_id = 'CASE 2.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Herr Novak supplies bread as a business owner, so he acts as an entrepreneur. The families who buy from him act as households.

The statement is true.', 'Bread is a tangible loaf; doorstep delivery is an activity performed for the customer. That is the goods-versus-services split.

The statement is true.', 'Owning a bakery does not erase personal or operational needs. He still needs flour, fuel, staff, and premises to keep going.

The statement is false.', 'Paying one euro extra for delivery is money given for a service. That is exchange, and the service retains value in the trade even after it is performed.

The statement is false.', 'Flour and oven fuel must be bought and are limited relative to how much bread he could bake. He has to economise on those inputs like any other producer.

The statement is false.'] WHERE case_id = 'CASE 2.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each neighbour gives something the other values: lessons for a bookshelf. Needs or wants are fulfilled on both sides without money, so the swap is still exchange.

The statement is true.', 'Exchange is mutual fulfilment through trade, not a rule that only euros count. Barter qualifies even when no banknote or transfer is used.

The statement is false.', 'Wood for the bookshelf is a limited raw material. Using more on one project means less for another, so the carpenter must economise.

The statement is true.', 'Gardening lessons are an activity performed for the neighbour, not a physical object handed over. That makes them a service.

The statement is true.', 'Individuals hold needs and wants of their own. Direct exchange, including neighbour-to-neighbour trades, is one way those needs and wants get satisfied.

The statement is true.'] WHERE case_id = 'CASE 2.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Petra''s family is buying for household use; Fabian is a self-employed craftsperson supplying the table. Household and entrepreneur roles fit the transaction.

The statement is true.', 'The finished oak table is a physical item produced and delivered. Tangible products of that kind are goods.

The statement is true.', 'Paying 650 euros for the table is monetary exchange. The family''s need for usable furniture is met through that trade.

The statement is true.', 'Without timber Fabian cannot fulfil commissions. Raw materials are operational needs for the business, not mere decorative wants.

The statement is false.', 'Oak is costly and finite for each job. Using more on one table leaves less for the next, so he must economise on material.

The statement is true.'] WHERE case_id = 'CASE 2.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Laptop production depends on specialised electronic parts from suppliers. Those components are an operational need if assembly is to continue.

The statement is true.', 'Manufacturers need inputs, labour, and customers just as end users need finished devices. Need is not reserved for final consumers alone.

The statement is false.', 'Daily life is full of purchases from firms: food, transport, repairs, entertainment. Households use those trades to cover both needs and wants.

The statement is true.', 'Meeting every need in a month does not erase desires for extras. Wants can remain after necessities are covered.

The statement is false.', 'Teenagers already choose how to spend limited pocket money. They participate as consumers long before they register a business or form a formal household of their own.

The statement is false.'] WHERE case_id = 'CASE 2.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Transport and toiletries support basic functioning, so the ninety euros cover needs. Designer trainers are desired but not essential, so they cover a want.

The statement is true.', 'Parental support funds household consumption; it does not eject Lukas from the household side of the economy. He still makes spending choices with that money.

The statement is false.', 'Trainers and transport compete for the same monthly budget. Buying one does not cancel the ongoing need to get around for the rest of the month.

The statement is false.', 'Economics studies how people allocate scarce means among needs and wants. Non-essential desires are inside that scope, not outside it.

The statement is false.', 'Three hundred euros a month is a capped sum. Competing claims on that sum force economising; the allowance is not an unlimited resource.

The statement is false.'] WHERE case_id = 'CASE 2.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reinisch produces and sells at the stall, so he acts as an entrepreneur. Village buyers purchasing vegetables act as households.

The statement is true.', 'Land somewhere else does not enlarge the eight hectares he actually farms. For his planting decisions that acreage remains fixed and scarce.

The statement is false.', 'Potatoes and carrots are tangible produce. Needing to cook them before eating does not turn them into services.

The statement is true.', 'Eight hectares cannot grow every crop at once. Splitting the land between uses is an allocation choice he cannot avoid under scarcity.

The statement is true.', 'Cash paid for potatoes is money given for goods. Monetary payment is a standard form of exchange, not a non-trade.

The statement is false.'] WHERE case_id = 'CASE 2.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Toni and Rosa supply cheese and face-painting as stallholders, so they act as entrepreneurs. Visiting families buy as households.

The statement is true.', 'A cheese wheel is a tangible product. Face-painting is an activity performed on the child. Good and service again line up that way.

The statement is true.', 'Weekly groceries support basic nutrition, so cheese for the household table meets a need. Face-painting for fun is optional enjoyment, so it meets a want.

The statement is true.', 'Money changes hands for cheese or for painting. Each side of the trade gets something it values, which is exchange fulfilling needs or wants.

The statement is true.', 'Thirty wheels left is a fixed stock. Toni must decide how to allocate that scarce remaining supply among the queue.

The statement is true.'] WHERE case_id = 'CASE 2.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash on the balance sheet does not multiply managerial hours or factory floors. Attention and capacity remain limited among competing projects, so scarcity still binds a large firm.

The statement is true.', 'Household wants may be open-ended, but budgets are not. Finite income forces trade-offs, which is exactly economising.

The statement is false.', 'Tax capacity and political capital are limited within any budget period. Governments still allocate among projects rather than funding every idea at once.

The statement is false.', 'When a resource has more valuable uses than units available, careful prioritisation is the rational response. That is what economising means.

The statement is true.', 'Labour hours and raw materials are limited inputs. Entrepreneurs who ignore that limit struggle to stay viable, so economising on inputs is required.

The statement is true.'] WHERE case_id = 'CASE 2.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sami owns the café and supplies beans and prepared drinks, so he acts as an entrepreneur. Customers buying from him act as households.

The statement is true.', 'A bag of beans is a tangible product. Espresso preparation is work performed for the customer. That is the familiar goods-versus-services split.

The statement is true.', 'A strong coffee habit is usually about preference rather than bare survival. Treated that way, it sits with wants more than with strict needs.

The statement is true.', 'Trying a seasonal flavour for pleasure goes beyond necessity. Enjoyment-driven tasting is a want.

The statement is true.', 'Forty kilograms for the season is a hard cap. Sami must decide how to stretch that scarce lot across weeks and drinks.

The statement is true.'] WHERE case_id = 'CASE 2.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Nora gives novels; Felix gives tutoring time. Each side gets something it values without money changing hands, so the swap is barter exchange.

The statement is false.', 'Novels are tangible items; tutoring is an activity performed for Nora. Goods and services classify exactly that way.

The statement is true.', 'Students still have scarce time, books, and study needs. Economic concepts apply to individuals, not only to registered firms.

The statement is false.', 'Felix has only so many free afternoons. Choosing tutoring over other uses of those hours is allocating a scarce resource.

The statement is true.', 'Agreeing to one swap settles that trade only. Remaining evenings, other books, and other commitments still require fresh choices.

The statement is false.'] WHERE case_id = 'CASE 2.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Home-grown food still depends on limited land, time, and seed. Those constraints force economising even when no wage is earned.

The statement is true.', 'Bicycle repair is work performed on the customer''s bike. That activity is a service even if some physical parts are fitted along the way.

The statement is true.', 'Eggs sold for cash meet the neighbours'' demand for food. Money for produce is exchange that fulfils needs or wants.

The statement is true.', 'Retirement changes labour-market status, not the household-versus-entrepreneur distinction by itself. Growing food for their own table keeps them on the household side unless they are running a business.

The statement is false.', 'Land and animals cannot be devoted fully to every use at once. Choosing how much to plant versus how many chickens to keep is a scarce-resource decision.

The statement is true.'] WHERE case_id = 'CASE 2.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Firewood for canned food is a direct swap that meets needs on both sides. Distance from shops does not stop that trade from counting as exchange.

The statement is true.', 'Karl still decides how much wood to cut, what to trade, and how to use his time. Avoiding shops does not remove those economic choices.

The statement is false.', 'Claiming independence does not create unlimited labour, food, or firewood. Scarcity of effort and stores still applies to him personally.

The statement is false.', 'Accessible wood and the hours needed to chop it are limited. Remote living does not turn forests into an unlimited free resource for any one person.

The statement is false.', 'Needs, wants, and scarcity apply to people generally. Formal business or household registration is not a ticket into those concepts.

The statement is false.'] WHERE case_id = 'CASE 2.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The Hoffmanns buy repair for their kitchen, so they act as a household. Boris supplies the wiring as a tradesperson, so he acts as an entrepreneur in that deal.

The statement is true.', 'Electrical repair is work performed on the property rather than a finished object simply handed over. That makes it a service.

The statement is true.', 'Faulty wiring created a need for a safe, working system. Paying 180 euros for the repair meets that need through exchange.

The statement is true.', 'Later the same day Boris shops for his family''s groceries. In that role he is a household with needs of his own, not an entrepreneur selling repair.

The statement is true.', 'Working hours in a day are finite. Spreading them across jobs means prioritising, which is economising on a scarce resource.

The statement is true.'] WHERE case_id = 'CASE 2.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Installation is an activity performed on the customer''s machine. The physical computer in the room does not turn that activity into a good.

The statement is true.', 'An e-book file is a transferable product the buyer obtains, even without physical weight. Digital goods still count as goods when they are items delivered, not merely work performed.

The statement is false.', 'Haircuts, repairs, lessons, and transport are routinely bought and sold. Services are exchanged in markets just as goods are.

The statement is false.', 'Sitting down for a prepared meal is mainly the catering service of cooking and serving, not merely taking home a tangible product. Calling every on-site meal "always a good" oversimplifies the classification.

The statement is false.', 'The pizza remains a tangible good; bringing it to the door is an added delivery service. Delivery does not flip the pizza from service into good or the other way around.

The statement is false.'] WHERE case_id = 'CASE 2.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Live violin playing is an activity listeners enjoy in the moment. Nothing physical is handed over as the main product, so the performance is a service.

The statement is true.', 'Enjoying atmosphere on the square is not required for survival. Tips given for that enjoyment satisfy a want.

The statement is true.', 'Listeners still give money in return for the music they heard. Voluntary, unfixed amounts do not erase the exchange; they only leave the price open.

The statement is false.', 'Rent is a personal housing need. Individuals face such needs whether or not they run a registered company.

The statement is true.', 'A Sunday has only so many performing hours. Choosing where to busk allocates that scarce time across locations.

The statement is true.'] WHERE case_id = 'CASE 2.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A haircut is work performed on Sabine''s hair, so it is a service. A shampoo bottle taken home is a tangible product, so it is a good.

The statement is true.', 'Paying with money does not decide the classification. The haircut remains an activity performed; only the bottle is a good.

The statement is false.', 'Timo still needs premises, products, and personal living costs. Supplying haircuts as an entrepreneur does not erase those needs.

The statement is false.', 'Repeating the visit every six weeks does not create unlimited time or money. Each appointment is still a scarce-resource choice.

The statement is false.', 'Whether Sabine pays for the cut or the bottle, money is given for something she values. That is exchange fulfilling a need or a want.

The statement is true.'] WHERE case_id = 'CASE 2.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Buying groceries is household-to-firm trade. Selling used furniture to another family is household-to-household trade. Both are exchange.

The statement is true.', 'Households purchase, sell, and barter every day. Consumption does not bar them from trading; they are active exchange partners.

The statement is false.', 'When each person gives something the other values, needs or wants are fulfilled on both sides. Money is optional for that definition of exchange.

The statement is true.', 'Everyday purchases work without a registered written contract. Formal paperwork can help in some deals, but it is not required for exchange to exist.

The statement is false.', 'A mobile transfer moves purchasing power just as coins or notes do. Electronic payment is monetary exchange in another form.

The statement is true.'] WHERE case_id = 'CASE 2.1.25' AND tier = 'full';
