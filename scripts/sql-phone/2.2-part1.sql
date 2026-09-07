-- Update expanded explanations for 2.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Opportunity cost is the benefit of the next-best alternative she gives up. If Elif takes the internship, she cannot keep the overlapping tutoring, so she forgoes that 400-euro monthly income. That forgone pay is exactly the financial opportunity cost named in the claim.

The statement is true.', 'Pay on the chosen path is not what defines opportunity cost. The internship pays zero, yet Elif still gives up the tutoring income she could have earned instead. Zero pay on the internship does not erase that forgone benefit.

The statement is false.', 'If she stays with tutoring, the next-best path she turns down is the internship. She therefore forgoes the career experience and architecture prospects that internship would have offered. Those forgone benefits are her opportunity cost of keeping the tutoring.

The statement is true.', 'Opportunity cost is the value of the alternative forgone, and that value need not be stated only in euros. Experience, skills, and other non-money dimensions can count. The absolute rule that only euros are allowed is too narrow.

The statement is false.', 'Her calendar hours are limited. Tutoring and the internship overlap, so she cannot fully do both. Being a student does not remove that scarcity of time; she still has to allocate the hours between the two uses.

The statement is true.'] WHERE case_id = 'CASE 2.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Same Saturday, two uses. If Simon volunteers, he cannot take the car wash shift, so he forgoes the 45 euros that shift would have paid. That forgone wage is the financial benefit of his next-best alternative.

The statement is true.', 'Scarcity is not limited to money. Saturday hours are finite, and Simon can use them for the car wash or for volunteering, not both fully. Time remains scarce even when cash is not the only concern.

The statement is false.', 'Enjoying volunteering may make the choice feel worthwhile, but it does not wipe out what he gives up. He still forgoes the 45-euro car wash wage. Satisfaction and opportunity cost can coexist.

The statement is false.', 'Age does not exempt anyone from scarce-resource choices. A teenager still has only one Saturday to allocate between paid work and volunteering, so the usual opportunity-cost logic applies.

The statement is false.', 'Opportunity cost is what Simon himself gives up by volunteering, namely the car wash earnings and whatever else he personally forgoes. The shelter''s dog food bill is the organisation''s cost, not Simon''s forgone alternative.

The statement is false.'] WHERE case_id = 'CASE 2.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The Webers, the firm, and the ministry each work with a limited budget for the year. Holiday versus repayment, hire versus vans, and motorway versus railway are competing uses of those funds. All three actor types face the same kind of allocation problem.

The statement is true.', 'If the Webers take the holiday, they do not use that money for early loan repayment. The benefit of that repayment is the next-best alternative they forgo, so it is the holiday''s opportunity cost.

The statement is true.', 'The firm can fund either the sales hire or the van upgrade with the same limited resources. Choosing the hire means giving up the delivery-van benefits. That forgone upgrade is the opportunity cost of the hire.

The statement is true.', 'The ministry''s budget cannot fully deliver both projects. Choosing the motorway resurfacing means residents forgo the railway extension''s benefits. That forgone railway benefit is the opportunity cost.

The statement is true.', 'A teenager who studies on Saturday cannot also take a paid shift in those same hours. The forgone wage from that job alternative is the financial opportunity cost of studying.

The statement is true.'] WHERE case_id = 'CASE 2.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sara faces two concrete options: the washer and the laptop. Buying the laptop means she forgoes the washer''s benefit, which is her next-best alternative. Opportunity cost is that one forgone path, not a pile of every purchase she might ever have rejected.

The statement is true.', 'The standard definition uses only the next-best alternative, not the sum of every rejected option''s price. Robin''s additive rule therefore does not match the economic definition.

The statement is false.', 'Scarcity appears whenever limited means meet competing uses. Two options and a limited budget are enough. Sara cannot buy both the washer and the laptop with the same money, so scarcity is present.

The statement is false.', 'If she buys the washer, she forgoes the laptop. The relevant figure is the benefit of that 700-euro laptop alternative, not 500 + 700 = 1,200. Adding both prices double-counts and invents a cost she never pays.

The statement is false.', 'Opportunity cost asks what she gives up by choosing one path. It is the alternative forgone, not the sticker price of the item she actually buys.

The statement is true.'] WHERE case_id = 'CASE 2.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['They have 18,000 euros saved and can fund only one full renovation this year. That fixed sum is a limited resource that must be allocated to either the kitchen or the bathroom, not both.

The statement is true.', 'Choosing the kitchen uses up the savings, so the bathroom renovation does not happen. The bathroom''s benefits are the next-best alternative forgone, which is the opportunity cost of the kitchen.

The statement is true.', 'Choosing the bathroom means they forgo the kitchen. If the kitchen would have added more to resale value, that greater resale benefit is what they give up. That forgone kitchen payoff is the opportunity cost of the bathroom.

The statement is true.', 'Equal price tags do not cancel opportunity cost. Even when both projects cost 18,000 euros, choosing one still means giving up the other project''s benefits. Matching costs are not the same as zero forgone benefit.

The statement is false.', 'Households, like firms and governments, work with limited resources and competing uses. The Bergmanns'' renovation choice is the same basic allocation problem in household clothing.

The statement is true.'] WHERE case_id = 'CASE 2.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Saturday morning is one block of hours. Mila can work at the bookstore or attend the academy, but she cannot fully do both at once. Those hours are scarce between the two uses.

The statement is true.', 'If she goes to the academy, she skips the bookstore shift and forgoes the 60 euros it would have paid. That forgone wage is the financial opportunity cost of attending.

The statement is true.', 'If she takes the job, she misses the academy session. She forgoes the training time and whatever scholarship prospects that session might support. Those forgone benefits are the opportunity cost of working.

The statement is true.', 'Uncertainty does not ban a benefit from opportunity-cost thinking. A possible scholarship gain is still a forgone alternative when she works instead. Risk or doubt may change how she weighs it, but it can still count.

The statement is false.', 'Individuals allocate scarce time and money just as firms and governments do. Mila''s Saturday choice is a personal version of the same scarce-resource problem.

The statement is true.'] WHERE case_id = 'CASE 2.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['City hall has 500,000 euros and cannot fully fund both the bus line and the bike lanes this year. That fixed envelope must be allocated between the two transport projects.

The statement is true.', 'Tax finance does not erase trade-offs. Spending the money on one project still means forgoing the other project''s benefits. Public funding and the absence of a market price do not cancel opportunity cost.

The statement is false.', 'Both projects may improve transport, yet they compete for the same limited budget. Opportunity cost compares those alternative uses: what one project delivers that the other would have delivered instead.

The statement is false.', 'Choosing bike lanes uses the budget, so the bus line is not built. Commuters forgo the bus line''s benefits. That forgone bus benefit is the opportunity cost of the bike lanes.

The statement is true.', 'Governments work with limited budgets and competing programmes just as households and firms do. There is no exemption from the scarce-resources problem.

The statement is false.'] WHERE case_id = 'CASE 2.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Opportunity cost is the benefit of the single next-best alternative forgone, not a sum of every rejected option''s price. Adding all rejections together overstates the cost and misstates the definition.

The statement is false.', 'A higher expected stall income may make leaving attractive, but leaving still means giving up the bakery job''s pay and security. Higher expected gain does not drive opportunity cost to zero.

The statement is false.', 'If Ana stays at the bakery, her next-best alternative is the stall. She forgoes the 2,100 euros she could have earned there, so that figure is the financial opportunity cost of staying.

The statement is true.', 'Labour time is scarce whether the choice is over goods or over jobs. She cannot work both paths fully at once, so choosing between the bakery and the stall is still a scarce-resource allocation.

The statement is false.', 'Opportunity cost is the value of what is forgone, and that value is not restricted to pure euro totals. Job security and paid holidays can matter as part of what she keeps or gives up. The claim that only euro amounts ever count is too narrow.

The statement is false.'] WHERE case_id = 'CASE 2.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['If Nina freelances, she gives up the agency job. The next-best alternative''s financial benefit is the 2,700-euro salary she forgoes. That forgone salary is the opportunity cost named here.

The statement is true.', 'Higher freelance pay may tip her decision, but it does not erase what she gives up. She still forgoes the agency salary and whatever else employment provided. Opportunity cost remains.

The statement is false.', 'If she stays at the agency, she forgoes freelancing. The potential 3,100-euro freelance income is the financial benefit of that next-best alternative, so it is the opportunity cost of staying.

The statement is true.', 'By definition, opportunity cost is the benefit of the alternative forgone, not a mechanical sum of salary plus hours of admin. Admin burden may affect how she values freelancing, but it is not added onto salary as the definition of opportunity cost.

The statement is false.', 'She has limited working time and cannot pursue both career paths fully at once. Choosing agency or freelance is therefore an allocation of a scarce resource.

The statement is true.'] WHERE case_id = 'CASE 2.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Forty square metres is a fixed plot. Using it for vegetables means less space for flowers, and the reverse. That land is a limited resource allocated between the two uses.

The statement is true.', 'Vegetables would save about 250 euros a year on groceries. Choosing flowers instead forgoes those savings. Roughly 250 euros of annual grocery benefit is therefore the financial opportunity cost of the flower garden.

The statement is true.', 'Choosing vegetables means the flower garden does not happen. Enjoyment of flowers is a real benefit even when it is not priced in euros, and forgoing that enjoyment is part of the opportunity cost of growing vegetables.

The statement is true.', 'Overtime hours spent on maintenance cannot also clear backlog. The revenue those hours could have earned from backlog work is forgone, so that forgone revenue is the opportunity cost of maintenance.

The statement is true.', 'Households, firms, and governments all allocate scarce means among competing uses. The Almeidas'' garden choice is the household version of that shared problem.

The statement is true.'] WHERE case_id = 'CASE 2.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mateo has one stock of working time and two income paths: salaried employment and freelancing. He must allocate that limited time between those competing uses rather than fully living both.

The statement is true.', 'Freelancing means leaving the salaried job. He forgoes the 3,600-euro salary and the employer-paid benefits, including health insurance. Those forgone employment benefits are the opportunity cost of freelancing.

The statement is true.', 'Staying salaried means he does not take the freelance path. He forgoes the potential 4,200-euro freelance income, which is the financial benefit of the next-best alternative.

The statement is true.', 'He cannot work both full-time careers at once. Working hours are therefore scarce, and that scarcity forces a choice between the two paths.

The statement is true.', 'Opportunity cost is defined as the benefit of the next-best alternative given up. Mateo''s salary-versus-freelance choice is a direct application of that definition in either direction.

The statement is true.'] WHERE case_id = 'CASE 2.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The chain can open only one store this year with the capital available. That limited capital must be allocated to either location A or location B, so it is scarce between the two sites.

The statement is true.', 'Opening at A means location B is not opened. The next-best alternative''s profit is B''s projected 180,000 euros, which is therefore the opportunity cost of choosing A.

The statement is true.', 'Opportunity cost of opening at B is the profit forgone from A, which is 220,000 euros, not 220,000 + 180,000 = 400,000. Combining both profits invents a total the firm never earns from a single store.

The statement is false.', 'Firm size does not create unlimited capital each period. Even a large chain has a finite expansion budget and must choose among sites, so scarce resources still matter.

The statement is false.', 'The location choice is a firm allocating limited capital among competing uses, the same basic problem households face with limited budgets.

The statement is true.'] WHERE case_id = 'CASE 2.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['This month''s irrigation water is limited and can fully support either wheat or vegetables, not both. That water is scarce and must be allocated between the two field types.

The statement is true.', 'Irrigating vegetables forgoes wheat revenue of 12,000 euros, not 12,000 + 15,500 = 27,500. Opportunity cost is the next-best field''s revenue, not the sum of both.

The statement is false.', 'Legal form does not decide whether opportunity cost exists. A farmer allocating scarce water still forgoes one crop''s revenue when watering the other. Registration as a firm is irrelevant.

The statement is false.', 'Irrigating wheat means vegetables are not fully irrigated. Vegetable revenue of 15,500 euros is forgone, so that figure is the opportunity cost of watering wheat.

The statement is true.', 'Being on the same farm does not make water unlimited. One scarce water supply still forces a choice between wheat and vegetables, which is precisely an allocation problem.

The statement is false.'] WHERE case_id = 'CASE 2.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The plant has a limited pool of overtime hours. Assigning them to backlog clearance means they are not available for Line 2 maintenance, and the reverse. Those hours are scarce between the two tasks.

The statement is true.', 'If overtime clears backlog, preventive maintenance is postponed. The benefit of lower breakdown risk from that maintenance is forgone, and that forgone benefit is the opportunity cost of backlog overtime.

The statement is true.', 'If overtime goes to maintenance, backlog work waits. Delayed-shipment revenue that backlog clearance could have protected is forgone, so that forgone revenue is the opportunity cost of maintenance.

The statement is true.', 'Worker willingness does not make overtime unlimited. Budgets, fatigue rules, and legal caps still constrain usable hours, so an allocation problem remains.

The statement is false.', 'Both uses draw on the same limited overtime pool and deliver different benefits. Opportunity cost is the natural way to compare what one use gains against what the other would have delivered.

The statement is true.'] WHERE case_id = 'CASE 2.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Money is one scarce resource, not the only one. Time, land, and labour hours are also limited and must be allocated among competing uses. The claim that scarcity never applies to those other resources is wrong.

The statement is false.', 'Households have limited budgets even when wants are large. Choosing one purchase means forgoing another, so opportunity cost is a everyday household idea, not something households escape.

The statement is false.', 'A future power to raise taxes does not make this year''s 90,000-euro envelope unlimited. Within the current year the council can fund either the skate park or the library renovation, not both, so that budget is scarce now.

The statement is false.', 'Opportunity cost attaches to any decision-maker who forgoes an alternative, including individuals and students. Company registration is not a prerequisite.

The statement is false.', 'Choosing the library means the skate park is not built. Opportunity cost is the skate park''s forgone benefit, the next-best alternative, not a combined total of both projects.

The statement is true.'] WHERE case_id = 'CASE 2.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Choosing bookshelves (28,000) instead of tables (40,000) still has an opportunity cost: the higher table profit forgone. The existence of a better option is precisely why that cost is large, not why it is zero.

The statement is false.', 'Enjoying an activity may make it feel worthwhile, but it does not erase the benefits of the path not taken. Opportunity cost remains the forgone alternative''s benefit.

The statement is false.', 'Economising means using scarce resources carefully and setting priorities. Treating limited resources as unlimited is the opposite of economising.

The statement is false.', 'The oak batch can become tables or bookshelves, not both. Using the wood one way forgoes the other product''s profit. Shared limited timber is exactly why opportunity cost arises, not why it disappears.

The statement is false.', 'With one oak batch and two product lines, Handwerk must choose. Economising with that scarce timber points toward the more profitable tables (40,000) over bookshelves (28,000).

The statement is true.'] WHERE case_id = 'CASE 2.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The trust has 25,000 euros and can fund either the youth music programme or the seniors'' literacy class. That grant pool is scarce and must be split by choosing one programme over the other.

The statement is true.', 'Funding music means the literacy class is not funded. Seniors forgo the literacy benefits that class would have provided. Those forgone benefits are the opportunity cost of the music grant.

The statement is true.', 'Donations and non-profit status do not remove trade-offs. Limited grant money spent on one cause still forgoes another. The absence of a market price does not cancel opportunity cost.

The statement is false.', 'Funding literacy means the music programme is not funded. Youth forgo the music programme''s benefits, which are the opportunity cost of the literacy grant.

The statement is true.', 'Philanthropic committees face limited funds and more worthy causes than they can support. Allocating those funds among competing programmes is a classic scarce-resource problem.

The statement is true.'] WHERE case_id = 'CASE 2.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Petr works alone on Saturdays. Hours spent on repairs cannot also be spent fully on sales. Those Saturday hours are scarce between the two focuses.

The statement is true.', 'A repair-focused day forgoes a sales-focused day. Sales would have earned 460 euros, so that forgone sales outcome is the opportunity cost of repairs.

The statement is true.', 'A sales-focused day forgoes a repair-focused day. Repairs would have earned 380 euros, so that forgone repair outcome is the opportunity cost of sales.

The statement is true.', 'One person and one day cannot fully cover both tasks. That inability is exactly the scarcity that forces an allocation between competing uses of his time.

The statement is true.', 'In either direction, opportunity cost is the benefit of the next-best alternative he gives up: 460 euros when he repairs, 380 euros when he sells. That definition sets his cost either way.

The statement is true.'] WHERE case_id = 'CASE 2.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Within the fiscal year the ministry has a limited health budget and two competing uses: mobile vaccine vans and clinic refrigeration upgrades. It must allocate that fixed budget between them.

The statement is true.', 'Funding vans means the refrigeration upgrades are not fully funded. Underserved districts forgo the clinic refrigeration benefits those upgrades would have delivered. That forgone benefit is the opportunity cost of the vans.

The statement is true.', 'Even life-saving programmes compete for limited funds. Choosing vans still means forgoing refrigeration upgrades. The importance of health goals does not erase budget trade-offs or opportunity cost.

The statement is false.', 'Choosing one project means rejecting another, and the rejected project''s benefits are given up. Governments do not escape that forgone-benefit logic.

The statement is false.', 'Fiscal-year funding is capped. That limited envelope makes the health budget scarce this year and forces a choice between vans and refrigeration.

The statement is true.'] WHERE case_id = 'CASE 2.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The startup can afford only one hire. The hiring budget is therefore scarce and must be allocated to either a developer or a marketer, not both.

The statement is true.', 'The developer''s salary is what the firm pays for the chosen hire, not the opportunity cost. Opportunity cost is the marketer''s forgone contribution, the benefit of the next-best role not filled.

The statement is false.', 'Being new does not create unlimited capital or spare roles. Startups face the same scarce-resource constraints as established firms when they can fund only one hire.

The statement is false.', 'Hiring the marketer means the developer is not hired. The product-speed benefit that developer would have brought is forgone, and that forgone benefit is the opportunity cost.

The statement is true.', 'Similar salaries do not make the roles interchangeable in benefit. Choosing one still forgoes the other role''s contribution, so opportunity cost remains meaningful.

The statement is false.'] WHERE case_id = 'CASE 2.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One forklift crew and one Saturday cannot cover both jobs fully. That crew-day is a scarce resource that must be allocated to either clearing imports or reorganising the outbound bay.

The statement is true.', 'Clearing imports uses the Saturday crew, so the outbound bay is not reorganised. The reorganisation benefit is forgone, and that forgone benefit is the opportunity cost of choosing imports.

The statement is true.', 'Sharing a warehouse does not make the crew unlimited. Labour hours remain scarce even when both tasks sit under the same roof.

The statement is false.', 'Internal tasks still compete for the same limited labour. Firms face opportunity cost whenever choosing one internal use of hours means forgoing another.

The statement is false.', 'The crew''s salary is the wage cost of employing them, paid whichever task they do. Opportunity cost is the benefit of the task not chosen, not that salary figure.

The statement is false.'] WHERE case_id = 'CASE 2.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The household, the firm, and the government each have fixed budgets and more they would like to fund than those budgets can cover. Resources are limited relative to desired uses in every example.

The statement is true.', 'Across actor types the core problem is the same: scarce resources must be allocated among competing uses. That is the shared lesson in the household, firm, and government examples.

The statement is true.', 'By definition, the opportunity cost of a chosen option is the benefit of the next-best alternative given up. That definition fits all three settings in the lesson.

The statement is true.', 'Buying the sofa means the household does not keep that money as savings. The benefit of saving instead is the next-best alternative forgone, so it is the opportunity cost of the sofa.

The statement is true.', 'When government funds one infrastructure project, the other project is not funded. The forgone benefit of that other project is the opportunity cost of the chosen one.

The statement is true.'] WHERE case_id = 'CASE 2.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The museum visit and the lunch overlap, so David cannot do both. Choosing the museum means forgoing the lunch with his friend. That forgone lunch benefit is the opportunity cost.

The statement is true.', 'Wealth may ease money constraints, but it does not multiply hours in the afternoon. Overlapping events still make time scarce, so opportunity cost remains.

The statement is false.', 'Opportunity cost is about alternatives forgone, not about anxiety over cash. Wealthy people still give up one use of time when they choose another.

The statement is false.', 'Personal choices about scarce time create opportunity cost whether or not someone runs a registered business. David''s afternoon is still an allocation problem.

The statement is false.', 'Similar money outlays do not erase the distinct benefits of each activity. Choosing the museum still forgoes the lunch experience, so a real opportunity cost remains.

The statement is false.'] WHERE case_id = 'CASE 2.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One kitchen service window can host either the tasting menu or the banquet, not both. That slot is a scarce resource allocated between the two events.

The statement is true.', 'Running the tasting menu uses the slot, so the banquet does not run. Banquet revenue and any reputation gains from hosting it are forgone, and those forgone benefits are the opportunity cost.

The statement is true.', 'Running the banquet means the tasting menu does not run. Tasting-menu margin and goodwill with regular clientele are forgone, which is the opportunity cost of the banquet.

The statement is true.', 'Paying customers do not create unlimited kitchen capacity, labour, or stove time. Strong demand makes scarce kitchen resources more valuable, not unlimited, so restaurants still economise.

The statement is false.', 'Prep time and stove capacity are limited inputs. Lina must allocate them to either the tasting menu or the banquet for that evening service.

The statement is true.'] WHERE case_id = 'CASE 2.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Leo has 400 euros and can buy either the refurbished laptop or the full textbook set, not both. That fixed student budget is scarce and must be allocated between the two purchases.

The statement is true.', 'Buying the laptop uses the 400 euros, so the textbook set is not bought. The study benefit from owning that standard economics set is forgone, which is the opportunity cost of the laptop.

The statement is true.', 'Buying the textbooks means the laptop is not bought. The productivity benefit the laptop would have provided is forgone, which is the opportunity cost of the textbooks.

The statement is true.', 'Students face limited budgets and competing uses of money just as other households do. Education ideals do not remove real trade-offs or opportunity cost.

The statement is false.', 'Two alternatives are enough. Opportunity cost is the benefit of the next-best option forgone, and with laptop versus textbooks that next-best option is clearly defined.

The statement is false.'] WHERE case_id = 'CASE 2.2.25' AND tier = 'full';
