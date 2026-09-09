-- Update expanded explanations for 2.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Free soup still feeds hungry people, so a real need for food is met. Exchange here need not involve a price: donated vegetables, kitchen space, and labour are handed over so that recipients receive a meal. The claim that free provision means nothing is fulfilled, and that no exchange occurs at all, is too absolute.

The statement is false.', 'Donated vegetables, kitchen hours, and volunteer labour are finite. Only so many bowls can be prepared from what arrives on a given day, so the organisers must decide how to stretch those inputs across recipients. Scarcity of donated means is exactly why economising still matters.

The statement is true.', 'Without money, people still choose how to use limited food, time, and kitchen space. Volunteers decide what to cook and how much to serve; recipients decide whether to queue and how much to take. Missing cash does not remove economic decisions about scarce resources.

The statement is false.', 'Supplies run out if every vegetable is used at once. Deciding which ingredients to cook first is allocating a limited stock among competing uses, which is a routine economic decision under scarcity.

The statement is true.', 'A church is not a for-profit firm, yet it still needs its kitchen for worship, events, and other community uses. Lending the space has an opportunity cost: those other needs wait. Non-profit status does not erase organisational needs.

The statement is false.'] WHERE case_id = 'CASE 2.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Assembling phones requires specialised parts that the firm cannot invent from thin air. Those components are operational needs of the producer, just as food is a need for a household. Without supplier inputs, manufacture stops.

The statement is true.', 'Final consumers are not the only actors with genuine needs. Firms need labour, materials, premises, and sales to keep producing. The claim that businesses have zero internal needs simply erases the production side of the economy.

The statement is false.', 'Staff wages and day-to-day running costs have to be covered. Customers and the revenue they bring are what keep employment and operations alive, so entrepreneurs treat them as real needs of the business.

The statement is true.', 'A firm needs workers, a place to operate, and raw materials whether or not a particular shopper is in the aisle. Those operational needs sit beside, and are distinct from, household demand for the finished product.

The statement is true.', 'Profit means revenue exceeds cost over a period; it does not turn materials, machine time, or skilled labour into unlimited stocks. Inputs remain scarce, so the firm still has to economise.

The statement is false.'] WHERE case_id = 'CASE 2.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash under a mattress is still limited purchasing power held in one form rather than spent, deposited, or invested. Choosing that use of money is an allocation of a scarce resource, so it counts as an economic decision.

The statement is true.', 'Consumers face limited income and time every week. Deciding what to buy, what to skip, and how to use leisure are economic decisions under scarcity. Running a business is not a prerequisite for facing those choices.

The statement is false.', 'Leaving an allowance unspent still decides what happens to that money: it is held rather than used for goods or services. Inaction is a choice about a scarce resource, not an exit from economics.

The statement is false.', 'A guaranteed pension is still a finite stream. Retirees choose how to split it among rent, food, healthcare, and leisure. Guaranteed income does not cancel those allocation decisions.

The statement is false.', 'Children already face limited toys, pocket money, and hours in a day. Sharing, saving sweets, or choosing one game over another are economising under scarcity, so they are not outside economic life.

The statement is false.'] WHERE case_id = 'CASE 2.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Food, shelter, and medical care support survival and basic health. In the usual textbook split, those items sit on the needs side of household well-being.

The statement is true.', 'Sports, cinema, and café visits are enjoyable and often desired, yet a household can maintain basic well-being without them. That places them with wants rather than strict needs.

The statement is true.', 'Paying for cinema tickets is a monetary exchange: the household gives money and the business provides entertainment. The purchase fulfils a want, not a bare survival need.

The statement is true.', 'When families buy goods and services from firms, households and entrepreneurs meet in exchange. That everyday purchase is the standard interaction between the two roles.

The statement is true.', 'Income does not stretch to every need and every want at once. Households therefore prioritise essentials against discretionary spending, which is economising under a limited budget.

The statement is true.'] WHERE case_id = 'CASE 2.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Groceries and school supplies support living and schooling, so they sit with household needs. A weekend trip is leisure and can be postponed without the same urgency, so it is a want.

The statement is true.', 'After rent, only 1,400 euros remain for several competing uses. That fixed remainder is scarce relative to everything the family might like to fund, so they must economise.

The statement is true.', 'The household is the decision unit. Supplies that children need for school are needs of that household, not a separate private claim outside the family''s budget.

The statement is true.', 'Booking the trip spends part of the 1,400 euros; skipping it leaves that money for groceries or supplies. Either path allocates the scarce remainder, so the choice (including inaction) is an economic decision.

The statement is true.', 'Skipping the trip this month leaves the desire unmet; it does not delete the want forever. The family may still want the same weekend outing later when the budget allows.

The statement is false.'] WHERE case_id = 'CASE 2.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Selling a used bicycle is still a household disposing of a personal possession. The family does not become a firm merely by listing one item; the household role remains even while it acts as seller in that trade.

The statement is true.', 'Trade usually happens because parties want different things: one side wants the good, the other wants money or something else in return. Identical needs on both sides are not required and would often remove the motive to trade.

The statement is false.', 'Basic definitions treat sole traders, craftspeople, and small shops as entrepreneurs when they sell output. Multinational scale is not the threshold for the entrepreneurial role.

The statement is false.', 'In the usual pattern, households buy finished goods and services from firms, and firms supply those outputs for payment. The reverse claim (households supplying finished goods while firms offer only unpaid advice) reverses both sides.

The statement is false.', 'A repair workshop sells a service for a fee, so it is the entrepreneur in the exchange. Customers who bring items for repair act as households or consumers; visiting the premises does not turn the business into a household.

The statement is false.'] WHERE case_id = 'CASE 2.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fifteen euros cannot fund both a full hot lunch and the same sum toward boots. That fixed pocket money is scarce relative to the two uses, so Mira must allocate it one way or the other.

The statement is true.', 'Once those fifteen euros buy lunch, that particular sum is no longer available for boots, so the immediate trade-off over that money is settled. The claim treats that completed spend as scarcity having finished its work for the choice at hand.

The statement is true.', 'Saving the fifteen euros still decides what happens to limited money: it is held for boots instead of spent on lunch. That allocation is an economic decision even though no purchase occurs today.

The statement is true.', 'A hot lunch supports nutrition and basic well-being, which places it with needs. Designer boots are typically desired beyond bare necessity, so they sit more with wants.

The statement is true.', 'Students who spend or save pocket money are already allocating scarce resources as household consumers. Economic participation is not reserved for business owners.

The statement is false.'] WHERE case_id = 'CASE 2.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The plated food is a tangible good, while cooking and waiting at the table are activities performed for the diner. A meal eaten on site therefore mixes goods with preparation and serving services.

The statement is true.', 'The heat pump unit is a physical capital good. Fitting it into the home is work performed on site, which economists classify as a service. The installation activity stays a service even though the equipment itself is a good.

The statement is true.', 'An invoice only records payment. Legal advice is still an intangible activity performed for the client, so billing does not turn the advice into a good.

The statement is false.', 'Digital delivery often means access or performance without a physical object changing hands, which points toward a service. Delivery channel alone does not automatically make every product a tangible good.

The statement is false.', 'A textbook is a physical (or downloadable file-as-product) item you can hold or store. The knowledge it conveys is intangible, but the book itself remains a good, not a service.

The statement is false.'] WHERE case_id = 'CASE 2.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Concert tickets are live entertainment. They are desired, but a teenager can maintain basic well-being without them, so saving for tickets pursues a want rather than a basic need.

The statement is true.', 'Cinema nights and premium streaming go beyond essentials for health and shelter. They are typically classified as wants, not strict needs.

The statement is true.', 'Shelter, food, and basic healthcare underpin survival and health. Standard teaching treats them as household needs.

The statement is true.', 'When income cannot fund every item on the list, households rank essentials ahead of discretionary spending. Separating needs from wants is what makes that prioritising, and economising, intelligible.

The statement is true.', 'Reliable suppliers keep production running, so they are operational needs. Brand recognition is a broader commercial ambition that a firm may want without it being required for each day''s output. Firms can hold both kinds of claim at once.

The statement is true.'] WHERE case_id = 'CASE 2.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Clara gives vegetables and receives honey; the beekeeper does the reverse. Each side values what it gets, so the swap is exchange even though no money changes hands.

The statement is true.', 'Buying eggs for family meals is household consumption. At the stall those buyers act in the household role, paying for food used at home.

The statement is true.', 'Feed stocks and Clara''s working hours are limited relative to how large a flock she might like to run. She has to allocate those scarce inputs carefully, which is economising on a small farm.

The statement is true.', 'Growing some food for oneself does not make stall sales disappear. When Clara sells eggs and trades surplus produce, she acts as an entrepreneur supplying others, not as a consumer only.

The statement is false.', 'Barter can deliver food, fuel, or other essentials just as cash sales can. Missing a price tag does not block need fulfilment through exchange.

The statement is false.'] WHERE case_id = 'CASE 2.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Scarcity is the gap between limited means and what people would like to do with them. Resources are scarce when they cannot cover every desired use at once.

The statement is true.', 'Flour, fuel, and oven time are limited. Scheduling batches so that loaves sell rather than spoil is careful use of those inputs, which is economising in production.

The statement is true.', 'Money may be plentiful for a wealthy household, but hours in a day are not. Choosing among competing activities still allocates scarce time, so economising continues.

The statement is true.', 'Tax revenue in any period is finite, and projects compete for that budget. Governments choose among programmes rather than funding everything at once, so they economise like other actors.

The statement is false.', 'Economising means using finite resources carefully, not refusing to spend until means become infinite. Infinite resources never arrive; careful allocation is the response to scarcity.

The statement is false.'] WHERE case_id = 'CASE 2.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A pension is still limited income. Choosing among insurance plans allocates that income (and related coverage) under uncertainty, so the retiree faces economic decisions even with guaranteed payments.

The statement is true.', 'Pausing hiring leaves payroll funds for other uses or as reserves. That is still a choice about limited money and labour capacity, so it remains an economic decision.

The statement is true.', 'Saving decides that scarce money will be held for later rather than spent now. Allocation toward saving is as much an economic decision as spending.

The statement is false.', 'Children already choose how to use limited pocket money, toys, and time. Formal wages are not the entry ticket to economic decision-making.

The statement is false.', 'Avoiding shops does not erase limited land, labour, and time. Self-sufficient or religious communities still allocate scarce resources, so they do not opt out of economics.

The statement is false.'] WHERE case_id = 'CASE 2.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each side gives something up to gain something it values more. That mutual gain is how exchange helps fulfil needs and wants on both sides.

The statement is true.', 'A local sale of second-hand furniture is household-to-household trade. Both parties are households exchanging a good for money, so exchange is not limited to firms.

The statement is true.', 'Notes for textbooks is a swap of useful items without cash. Each classmate gains something valued, so the barter counts as exchange.

The statement is true.', 'The café is an entrepreneur buying an input from another entrepreneur, the roaster. Business-to-business purchases are exchange between entrepreneurial units.

The statement is true.', 'A contactless payment still transfers purchasing power for groceries. The household buys from the supermarket acting as entrepreneur; the payment method does not change the exchange.

The statement is true.'] WHERE case_id = 'CASE 2.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fuel tanks and wage budgets do not stretch without limit across every possible trip. The owner must allocate those operating costs across the morning peak, which is economising on scarce inputs.

The statement is true.', 'Airport runs and city-centre fares typically differ in distance, waiting time, and fare mix. Assigning a cab to one area means forgoing the other during that slot, so route choice involves trade-offs.

The statement is false.', 'Running a taxi fleet and selling rides is entrepreneurial activity. Driving occasionally does not redefine the owner as a household for the business as a whole.

The statement is false.', 'During the peak, each vehicle can only be in one place at a time, and driver hours are finite. Fuel availability does not remove scarcity of vehicle slots and labour in that window.

The statement is false.', 'Passengers pay for a ride as consumers or household members for that journey. They need not register as entrepreneurs to enter a taxi.

The statement is false.'] WHERE case_id = 'CASE 2.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Suppliers must still be paid on schedule even if sales rise and fall with the season. Cash available to meet those obligations is an operational need of the retailer.

The statement is true.', 'Without enough customers and sales, a market firm cannot cover costs and stay open. Demand can therefore be a genuine need for viability, not only a pleasant extra.

The statement is true.', 'Laptop assembly depends on specialised components arriving from suppliers. Those parts are operational needs that keep the line running.

The statement is true.', 'Reliable staff and usable premises are what allow the entrepreneur to keep serving paying customers. They are ongoing business needs, not optional extras.

The statement is true.', 'Wage bills keep current operations going; expansion plans are discretionary ambitions about future scale. Treating them as identical categories erases the usual need-versus-want distinction inside the firm.

The statement is false.'] WHERE case_id = 'CASE 2.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The family pays a monthly fee and receives access to streaming content. That is monetary exchange with the streaming company acting as entrepreneur.

The statement is true.', 'The Hofers decide how to split a fixed entertainment budget among subscription options. That constrained family choice is household economic behaviour.

The statement is true.', 'Basic news can support staying informed; premium sports channels are mainly entertainment. Relative to household well-being, sports packages sit more with wants than with strict needs.

The statement is true.', 'The monthly budget cannot buy every bundle and every separate plan at once. Choosing one package over another is still allocating scarce funds, which is economising.

The statement is true.', 'Many digital offers grant access or streaming without transferring a lasting owned object. Downloadability alone does not make every digital product a good; streaming access is often classified as a service.

The statement is false.'] WHERE case_id = 'CASE 2.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash reserves do not multiply factory floors or hours of managerial attention. Capacity and focus remain limited, so even a large multinational still faces scarcity of those inputs.

The statement is true.', 'A fixed parks budget cannot fund every playground and path at once. Councils rank projects under that limit in the same basic way households rank spending under a fixed income.

The statement is true.', 'Modest monthly income forces trade-offs among rent, food, and transport. Choosing how to cover those essentials is economising under scarcity.

The statement is true.', 'Weekends recur, but each weekend still contains a finite number of hours. Students must choose among study, rest, and leisure within that limit, so time is not unlimited.

The statement is false.', 'Higher input prices make each unit more costly; they do not create unlimited supply. Scarcity remains, and firms often need to economise more carefully on each unit produced.

The statement is false.'] WHERE case_id = 'CASE 2.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each plot is a small allocated bed used largely for the household''s own food. Deciding what to plant and how to tend it is household production under a limited plot size.

The statement is true.', 'Swapping surplus seedlings or produce among neighbours can fulfil wants on both sides. Informal barter is still exchange, even when friendship is part of the relationship.

The statement is false.', 'A small bed cannot grow every crop at full size. Gardeners still choose among tomatoes, herbs, and flowers because space on the plot is limited.

The statement is false.', 'Scheduling water turns, choosing crops, and allocating morning hours are decisions about scarce resources. Shop purchases are only one form of economic choice.

The statement is false.', 'Outdoor soil does not create unlimited water during the shared tap''s morning window. Twenty plots still compete for limited irrigation time, so scarcity remains.

The statement is false.'] WHERE case_id = 'CASE 2.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Invoicing a client for design work is supplying a paid service. For that project the freelancer acts as an entrepreneur.

The statement is true.', 'Payment from the corporate client is exchange for the design service; paying the baker later is exchange for bread. Both monetary transactions are exchange, just on opposite sides of the person''s day.

The statement is true.', 'Software licences keep the design business able to deliver work, so they are operational needs. A premium portfolio site may be desired for marketing without being required for each invoice, so it can sit with wants.

The statement is true.', 'Buying groceries for personal consumption is household behaviour. After work, the same person is a household shopper in the supermarket.

The statement is true.', 'Time, money, and skills are limited in both the freelance and the personal setting. Scarcity shapes choices whether the person is billing a client or shopping for dinner.

The statement is true.'] WHERE case_id = 'CASE 2.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A luxury handbag is discretionary fashion relative to food, shelter, and basic clothing. The purchase primarily satisfies a want, not a basic household need.

The statement is true.', 'A bus ticket buys the right to be carried from one place to another. That performed activity is usually classified as a transport service, not as a tangible good taken home.

The statement is true.', 'Classification looks at what the customer buys: access to storage activity, not ownership of the server rack. Hardware sitting in a data centre does not force digital storage to be labelled a good.

The statement is false.', 'Bread for household meals is a staple supporting nutrition. Shops charging money does not turn that staple into a mere want; price is how exchange often works for needs as well.

The statement is false.', 'Owning the building does not remove the need to keep shelter sound and usable. Home maintenance supports the household need for housing.

The statement is false.'] WHERE case_id = 'CASE 2.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Paying for a chair or leaving a tip exchanges money for a good or a performance. Visitors act as households or individuals on the buying side of that exchange.

The statement is true.', 'In mild weather a hot drink is mainly comfort, not survival. That places the purchase with wants more than with a strict need.

The statement is true.', 'Cold weather at the stall does not redefine the seller''s role. Selling chairs to buyers is entrepreneurial provision of goods, not household-only behaviour.

The statement is false.', 'Wood, tools, and overnight hours are still limited. Artisans cannot carve without bound, so they must economise on materials and time.

The statement is false.', 'Coins used as tips are tangible, but the music itself is a performance. Payment medium does not turn a service into a good.

The statement is false.'] WHERE case_id = 'CASE 2.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Hours spent volunteering cannot also be sold as paid work in the same slot. Choosing the shelter allocates scarce time and forgoes other uses of those hours.

The statement is true.', 'Delaying a project leaves the budget for other programmes or for later use. Postponement is still an allocation decision over limited public funds.

The statement is true.', 'A holiday closure still requires planning who works the days before and after. Limited staff availability is being allocated around the break.

The statement is true.', 'Cooking, cleaning, and childcare compete for the same unpaid hours. Choosing how to split that day is allocating scarce time inside the household.

The statement is true.', 'Sleep and revision both consume hours that cannot be used twice. Students choosing between them allocate scarce time.

The statement is true.'] WHERE case_id = 'CASE 2.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each party enters a trade because it values what it receives more than what it gives up. Needs and wants on both sides are what motivate that exchange.

The statement is true.', 'Firms buy materials, parts, and services from suppliers so production can continue. Those input purchases are exchange that meets operational needs.

The statement is true.', 'An Austrian retailer paying a foreign textile producer is still a voluntary trade of money for goods. Cross-border distance does not stop the transaction from counting as exchange.

The statement is true.', 'Festival merchandise is discretionary for most buyers. Paying an event seller for it fulfils a want through exchange with an entrepreneur.

The statement is true.', 'Essential health goods can still be sold for money. Payment for medicine is exchange that fulfils a need; calling every such sale a gift erases the market transaction.

The statement is false.'] WHERE case_id = 'CASE 2.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partner hours in a busy quarter are finite. Assigning them across competing client cases is allocating a scarce professional resource, which is economising.

The statement is true.', 'Intangible advice still has to be sold if the firm is to cover costs and stay open. Service entrepreneurs need customers and revenue like other businesses.

The statement is false.', 'Intangibility does not create unlimited lawyer, consultant, or technician time. Practitioner hours remain scarce and must be allocated.

The statement is false.', 'Buyers still have limited money and must choose among service providers and packages. Someone else performing the labour does not remove the buyer''s need to economise.

The statement is false.', 'Many service firms still run vehicles, heat premises, or travel to clients. Fee income does not make fuel and similar costs irrelevant; those inputs still require careful use.

The statement is false.'] WHERE case_id = 'CASE 2.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Basic models centre on households and entrepreneurs trading goods and services so needs and wants on both sides can be addressed. That two-actor exchange picture is the core of everyday economic life in the chapter.

The statement is true.', 'Goods are tangible items that can be held or stored; services are intangible activities performed for someone. That tangible-intangible split is the standard classification.

The statement is true.', 'When resources are limited relative to desires, every actor (household, firm, or government) must use them carefully. Scarcity is what makes economising necessary.

The statement is true.', 'Retail purchases, household-to-household sales, and barter are exchange as well. Restricting the word to wholesale firm-to-firm trade is far too narrow.

The statement is false.', 'Consumers, savers, and people who simply hold cash still allocate scarce time and money. Opening a business is not required to make economic decisions.

The statement is false.'] WHERE case_id = 'CASE 2.1.50' AND tier = 'full';
