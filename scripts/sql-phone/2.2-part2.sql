-- Update expanded explanations for 2.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['The concert ticket may cost nothing, but the evening hours still have a next-best use. Taking the free concert means skipping the overtime shift, so the wage income that shift would have paid is what is given up. That forgone wage is the opportunity cost of the concert.

The statement is true.', 'Opportunity cost is the benefit of the next-best alternative forgone, not a rule that both options must carry sticker prices. Time, leisure, and unpaid activities can define forgone benefits just as cash prices can. Requiring explicit price tags on both sides is too narrow.

The statement is false.', 'Hours spent volunteering cannot also be sold as paid labour. The next-best paid shift that could have filled those hours is forgone, so volunteer leisure still carries an opportunity cost in lost wage income.

The statement is true.', 'Enjoyment and experience can be part of what someone gains or gives up. Opportunity cost can include non-financial benefits of the next-best alternative; the claim that enjoyment never enters the reasoning is too absolute.

The statement is false.', 'Even when money, prices, and other conditions stay put, a finite block of time cannot serve two uses at once. Choosing one use forgoes the benefit of the next-best use of those hours, so scarce time alone is enough to create opportunity cost.

The statement is true.'] WHERE case_id = 'CASE 2.2.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A household with limited funds cannot both repay debt early and build the extension in full. That is the same scarce-budget allocation problem a government faces when it chooses among programmes, only scaled down to family size.

The statement is true.', 'Scarcity is not reserved for public budgets. Households and firms also have limited resources relative to wants, so Tobias''s claim that scarcity never touches them is wrong by definition.

The statement is false.', 'Opportunity cost depends on what is forgone, not on how large the euro amounts look. A small family budget still forces a choice between alternatives, and the benefit of the option not taken remains real.

The statement is false.', 'A registered business form is irrelevant. When a family uses scarce funds to repay debt rather than pursue another use, the forgone benefit of that next-best use is still opportunity cost.

The statement is false.', 'Opportunity cost applies wherever resources are limited and a choice is made, whether the decision touches millions or a single household. Scale does not gate the concept.

The statement is false.'] WHERE case_id = 'CASE 2.2.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One remaining ICU bed cannot serve both the scheduled patient and the emergency arrival at once. That bed is scarce medical capacity that must be allocated between those two uses.

The statement is true.', 'Giving the bed to the emergency case means the scheduled surgery cannot go ahead in that slot. The health benefit that surgery would have delivered is the next-best alternative forgone, so it is the opportunity cost.

The statement is true.', 'Giving the bed to the scheduled patient means the emergency admission waits or is diverted. The treatment benefit the emergency patient would have received is what is given up.

The statement is true.', 'Ethics guide how clinicians weigh outcomes, but they do not erase the fact that one bed forces a trade-off. Limited capacity still creates opportunity cost even when medical values shape the choice.

The statement is false.', 'Opportunity cost need not be priced in euros. Forgone life-saving or health benefits for the patient who does not get the bed can define what is given up.

The statement is true.'] WHERE case_id = 'CASE 2.2.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['By definition, opportunity cost is the value of the single next-best alternative forgone. Adding every rejected option would double-count uses that could not all have been taken at once.

The statement is true.', 'Each side of a trade gives something up, but each party''s next-best alternative is usually different in kind and amount. Opportunity cost is not automatically the same figure for both parties.

The statement is false.', 'Financial measurement is convenient, not required. Leisure, health, learning, and other non-cash benefits can still be forgone, so a missing euro figure does not force opportunity cost to zero.

The statement is false.', 'Choosing the lower-return option is exactly when opportunity cost bites hardest: the higher-return alternative is what was available and not taken. That forgone higher return is the opportunity cost, not zero.

The statement is false.', 'Whenever households, firms, or governments allocate scarce resources among competing uses, choosing one path means forgoing the next-best path. The concept applies across all three actor types.

The statement is true.'] WHERE case_id = 'CASE 2.2.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Wants outrun available means for households, firms, and governments alike. Limited resources relative to those wants force each group to choose among alternatives.

The statement is true.', 'Allocation is exactly that distribution decision: how scarce resources are split among competing uses rather than spread without limit.

The statement is true.', 'That sentence is the standard definition of opportunity cost. Taking one feasible course means giving up the benefit the next-best feasible course would have delivered.

The statement is true.', 'When resources are scarce, careful use matters. Economising is the response to that limit; it would be unnecessary only if resources were truly unlimited.

The statement is true.', 'The scarcity logic does not depend on the resource being cash. Money, land, labour hours, and hospital beds are all finite relative to competing claims, so the same choice-and-trade-off pattern applies.

The statement is true.'] WHERE case_id = 'CASE 2.2.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The press has limited hours this week. Cutting setup time between runs stretches that scarce capacity so both queues get some space. That careful use under a binding limit is economising.

The statement is true.', 'Scarce means force choices for households, firms, and governments. Each allocates limited resources among competing uses, so the print shop''s problem sits in the same family.

The statement is true.', 'Prioritising wedding jobs occupies press time that could have printed workbooks. The income from that workbook contract is the next-best alternative forgone, so it is the opportunity cost.

The statement is true.', 'One machine and one week''s hours cannot print unlimited volumes of both products. Press capacity is scarce and must be split between the workbook and wedding queues.

The statement is true.', 'Electricity is a cost of running the chosen jobs, not the benefit of the alternative forgone. Opportunity cost is what the next-best use of the press would have delivered, such as forgone wedding or workbook revenue, not the power bill itself.

The statement is false.'] WHERE case_id = 'CASE 2.2.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lena has one Tuesday evening. She cannot be fully in class and fully on a babysitting shift at the same time, so those hours are scarce and must be allocated one way or the other.

The statement is true.', 'Liking babysitting may make that choice pleasant, but it does not erase what class would have delivered. Forgone classroom benefits still sit in the opportunity-cost comparison.

The statement is true.', 'Cash wages are one common measure, not the only admissible one. Learning, contacts, and other non-financial gains can count as benefits of a forgone alternative.

The statement is false.', 'Valuable skills make the course attractive; they do not cancel opportunity cost. Choosing class still forgoes the babysitting wage (or other next-best use of the evening).

The statement is false.', 'A personal evening schedule and a government budget look different in scale, but both allocate limited resources among competing uses. The same scarcity logic links them.

The statement is false.'] WHERE case_id = 'CASE 2.2.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Water sent through the turbines is not available in the same volume for downstream fields. The crop-yield benefit that irrigation would have delivered is the next-best use forgone when hydropower is prioritised.

The statement is true.', 'Timing releases to cut evaporation during heatwaves squeezes more useful water from a limited stock. That reduction of waste under scarcity is economising.

The statement is true.', 'Water held for irrigation does not spin the turbines as hard. The electricity revenue that fuller turbine flow would have earned is what is given up.

The statement is true.', 'Public dam managers, like households and firms, work with limited inputs and competing goals. Scarce water forces the same kind of allocation problem.

The statement is true.', 'This season''s release volume is finite. Power and irrigation both claim it, so the water must be allocated between those uses.

The statement is true.'] WHERE case_id = 'CASE 2.2.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The fee for the shoot that is booked is the price of the chosen use. Opportunity cost is instead the benefit of the next-best booking that is turned away, such as the forgone hire from the other crew.

The statement is true.', 'Calling a project "art" does not delete trade-offs. Booking the stage for a documentary still forgoes the commercial hire (and vice versa), so creative work carries opportunity cost like any other use of scarce stage time.

The statement is false.', 'A waiting list signals strong demand; it does not create extra Friday hours on the only sound stage. Physical stage time remains scarce precisely because more users want it than can be served at once.

The statement is false.', 'Corporate booking software and household budgets differ in tools and scale, but both choose among alternatives under limited means. There is no separate economic law that exempts studio scheduling.

The statement is false.', 'Even if commercials often win commercially, a documentary booking still forgoes whatever benefit the commercial would have brought, and the reverse is also true. Neither side has automatic zero forgone value.

The statement is false.'] WHERE case_id = 'CASE 2.2.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Maya spends 300 euros on the tablet and forgoes the bike. Opportunity cost is the benefit that bike would have provided, not 300 + 450 = 750 euros. She never could have enjoyed both purchases with the same funds at once, so summing both prices overstates the forgone alternative.

The statement is true.', 'A binary choice already creates a next-best alternative that is not taken. A third option is unnecessary for opportunity cost to exist.

The statement is true.', 'Whenever scarce resources are allocated, households, firms, and governments forgo the next-best use. Opportunity cost shows up for all three.

The statement is true.', 'The standard definition picks the single next-best alternative forgone. Adding every rejected price is a common student error, not the textbook rule.

The statement is false.', 'Preferring the tablet explains why Maya chooses it; it does not wipe out what the bike would have delivered. That forgone bike benefit remains the opportunity cost.

The statement is false.'] WHERE case_id = 'CASE 2.2.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Librarian hours this quarter are finite. Longer weekday opening and a weekend children''s programme both draw on that same pool, so the hours must be split between those uses.

The statement is true.', 'Staff time spent on weekend sessions is not available to lengthen weekday opening. The extra weekday access that longer hours would have given readers is the benefit forgone.

The statement is true.', 'The council, like a family choosing roof repair versus a holiday, has limited means and competing goals. Both decisions allocate scarce resources among alternatives.

The statement is true.', 'Cross-training so the same team can cover more tasks stretches limited staff capacity. That careful use under scarcity is economising.

The statement is true.', 'Hours devoted to longer weekdays cannot also launch the children''s programme. The programme''s benefit is the next-best alternative forgone.

The statement is true.'] WHERE case_id = 'CASE 2.2.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['With 180 euros, buying the measuring set means the portable chest is not bought this month. The storage and mobility the chest would have provided are the next-best benefits forgone.

The statement is true.', 'Limited cash forces a binary purchase choice in the same way limited evening hours force a choice between overtime and study. Different resource types, same scarcity logic.

The statement is true.', 'The apprentice has a fixed 180-euro pot that cannot cover both the measuring set and the tool chest in full. That budget is allocated between those two uses.

The statement is true.', 'Labelling storage a "need" does not make the choice free. Choosing the chest still forgoes the measuring set''s capability, so opportunity cost remains.

The statement is false.', 'Personal tool spending already involves scarce funds and forgone alternatives. Incorporation as a business is not a precondition for opportunity cost.

The statement is false.'] WHERE case_id = 'CASE 2.2.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Overnight centrifuge slots are limited equipment time. Research labs allocate that scarce capacity among competing sample types just as firms and households allocate their scarce means.

The statement is true.', 'Medical priority may decide which samples run first; it does not make forgone results disappear. Slots given to blood work still forgo protein-culture progress that night, so opportunity cost is not zero.

The statement is false.', 'Funding pays for machines and staff; it does not create unlimited overnight slots. A funded lab still chooses which experiment runs and forgoes the other.

The statement is false.', 'When experiments share one centrifuge schedule, they compete for the same machine hours. Different projects in one building absolutely can crowd each other out.

The statement is false.', 'Extra machines ease capacity, but each machine still has finite slots. Queues appear whenever samples arrive faster than those slots clear.

The statement is false.'] WHERE case_id = 'CASE 2.2.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Deck area and safe tonnage are binding limits. Arranging vehicles to fill that capacity without waste stretches scarce space, which is economising.

The statement is true.', 'The ferry has fixed deck capacity this sailing; a government has fixed transport funds. Both allocate scarce means between competing uses such as freight versus cars, or rail versus road.

The statement is true.', 'Space filled with trailers cannot also carry the cars left ashore. Passenger-ticket revenue those cars would have paid is the next-best benefit forgone.

The statement is true.', 'One sailing''s deck is finite. Freight trailers and passenger cars both claim it, so the space must be split between those vehicle types.

The statement is true.', 'Calling cars a "need" for travellers does not erase the operator''s trade-off. Prioritising cars still forgoes freight income; freight income does not simply disappear from the comparison.

The statement is false.'] WHERE case_id = 'CASE 2.2.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Spending the jar on cinema tickets means the board game is not bought this month. The repeated home entertainment that game would have provided is the next-best benefit forgone.

The statement is true.', 'Sixty euros is small next to a government budget, but the siblings still cannot fund both the game and the tickets from this jar. Forgone alternatives create opportunity cost at any scale.

The statement is true.', 'Parents might top up later, but this month''s agreed 60-euro jar is what they are choosing with now. That pool is treated as fixed for the decision, not unlimited.

The statement is false.', 'A longer-lived game may be a reason to prefer it; it does not wipe cinema benefits out of existence. Choosing the game still forgoes the outing''s enjoyment as opportunity cost.

The statement is false.', 'Whether parents "should" fund wishes is a separate normative claim. With a fixed jar, comparing prices and picking one purchase is already economising behaviour by the children.

The statement is false.'] WHERE case_id = 'CASE 2.2.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Crane and hoist time inside the low-wind window is scarce. Bundling tasks that share one setup avoids repeated moves and stretches that limited hoist capacity, which is economising.

The statement is true.', 'Calm wind opens a maintenance window; it does not remove fatigue, daylight, or shift limits. Technician hours remain finite even when turbines are idle.

The statement is false.', 'Energy firms schedule crews and equipment under the same scarcity logic as other firms. There is no exemption from opportunity-cost reasoning.

The statement is false.', 'Safety rules constrain how work is done; they do not erase trade-offs inside a short window. Choosing inspections still delays repairs (and the reverse), so opportunity cost remains.

The statement is false.', 'Calling inspections a regulatory need explains why they matter; it does not set repair benefits to zero. Delayed blade repairs still forgo reliability and output gains those repairs would have delivered.

The statement is false.'] WHERE case_id = 'CASE 2.2.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One staff week cannot fully develop both major proposals. Writer time is scarce and must be allocated between the housing application and the arts application.

The statement is true.', 'Time spent on the arts grant is time not spent on the housing proposal. The housing programme benefit that successful housing funding would have supported is the next-best alternative forgone.

The statement is true.', 'Choosing housing means the arts proposal is skipped this week. The arts funding benefit that proposal might have unlocked is what is given up.

The statement is true.', 'The writer''s salary is a cost of employing the person who does the chosen work. Opportunity cost is the benefit of the forgone proposal, not the payroll line for the hours used.

The statement is false.', 'Nonprofits also face limited staff weeks and competing projects. Scarce-resource allocation is not reserved for profit-seeking firms.

The statement is false.'] WHERE case_id = 'CASE 2.2.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Plough hours spent on school routes first leave hospital roads uncleared longer. The emergency-access benefit faster hospital clearance would have provided is the next-best alternative forgone.

The statement is true.', 'Prioritising hospital roads delays school routes. Pupil transport benefits from earlier school clearance are what the city gives up.

The statement is true.', 'A city with limited plough hours and a household with a limited monthly budget both split scarce means among competing claims. The allocation problem is the same in kind.

The statement is true.', 'Sequencing routes to cut empty return mileage saves scarce fuel and crew hours inside the storm window. That careful use of limited capacity is economising.

The statement is true.', 'After the storm, available plough hours are finite. School routes and hospital roads both need them, so those hours must be allocated between the two.

The statement is true.'] WHERE case_id = 'CASE 2.2.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One graduate cannot work two full-time summer paths at once. Those weeks are scarce and must be allocated to either the paid placement or the museum internship.

The statement is true.', 'A person choosing between two full-time offers faces limited time and mutually exclusive options, just as a firm choosing between two training programmes does. The scarce-resource structure matches.

The statement is true.', 'Enjoying museum work can tip the preference, but it does not cancel the wages the industry placement would have paid. Forgone pay still belongs in the comparison.

The statement is true.', 'Taking the unpaid museum path means not taking the paid industry weeks. Those forgone wages are the financial next-best alternative and thus the opportunity cost on that dimension.

The statement is true.', 'Euros are one way to express forgone benefits, not the only way. Experience, contacts, and portfolio gains from either path can also enter opportunity-cost reasoning.

The statement is false.'] WHERE case_id = 'CASE 2.2.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Feeling good about volunteering explains why someone chooses it. It does not erase the income or leisure that the next-best Saturday use would have delivered; those forgone benefits still count.

The statement is true.', 'Saturday hours spent volunteering cannot also be sold as a paid shift. The wage that shift would have paid is forgone financial opportunity cost.

The statement is true.', 'Zero sticker price does not mean zero opportunity cost. Unpriced hours still have alternative uses, so unpaid activities create forgone benefits too.

The statement is false.', 'Charity describes the motive, not an exemption from scarcity. Choosing volunteer hours still forgoes other uses of the same time.

The statement is false.', 'How happy the volunteer feels is a benefit of the chosen activity. Opportunity cost is the benefit of the alternative not taken, not a happiness score for the path that was chosen.

The statement is false.'] WHERE case_id = 'CASE 2.2.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Using the only large room for internal training means the client workshop does not get that morning. The hire fee and relationship benefit the client booking would have brought are the next-best benefits forgone.

The statement is true.', 'Foldable walls let both groups share the space at reduced capacity instead of leaving one group fully locked out. Stretching scarce room capacity that way is economising when both sides accept the compromise.

The statement is true.', 'One large room for one morning cannot host both events fully at once. That room-morning is scarce and must be allocated between the workshop and the training.

The statement is true.', 'The hub chooses how to use scarce room time among competing claims, just as a firm chooses how to spend a scarce marketing budget between channels. Same allocation structure, different resource.

The statement is true.', 'Client revenue often weighs heavily, but it does not automatically erase internal training benefits from the comparison. Those internal benefits remain real forgone value when clients book the room.

The statement is false.'] WHERE case_id = 'CASE 2.2.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Crew hours spent picking cherries are hours not spent repairing trellises before the rain. The storm-damage reduction those repairs would have delivered is the next-best benefit forgone.

The statement is true.', 'Euros are a common yardstick, not a mandatory one. Avoided spoilage, saved vines, and other physical outcomes can represent forgone benefits without a cash quote attached.

The statement is false.', 'Weather risk may lower expected fruit value; it does not automatically make unpicked cherries worthless before the storm hits. Revenue still forgone by leaving fruit on the tree is not definitionally zero.

The statement is false.', 'Rain may halt some outdoor work, but assignable crew hours before and around the weather window remain finite. Scarcity of labour time does not vanish because rain is coming.

The statement is false.', 'Biology sets growth and spoilage constraints; economics still governs how limited crew hours are allocated among urgent tasks. Farm decisions are both biological and economic.

The statement is false.'] WHERE case_id = 'CASE 2.2.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shorter breaks stretch a scarce day so some paid hours and some revision both fit. That careful packing under a time limit is economising.

The statement is true.', 'Hours on the ward are hours not revising. Improved exam readiness from that lost study time is part of what is forgone when the shift is chosen.

The statement is true.', 'Trainees allocate personal time under scarcity just as firms allocate project time. Opportunity cost does not wait for company registration.

The statement is false.', 'Licensing may be essential, but choosing revision still forgoes the paid shift (and choosing the shift forgoes readiness). Calling study a need does not set its opportunity cost to zero.

The statement is false.', 'Sundays recur on the calendar, yet each Sunday still has a finite number of hours. Repetition of the weekday name does not create unlimited hours inside any one day.

The statement is false.'] WHERE case_id = 'CASE 2.2.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The park visit may be free at the gate, but the hours still could have been sold as a paid shift. Forgone wage income is the financial opportunity cost of that recreation.

The statement is true.', 'A small budget still forces a choice between alternatives. The benefit of the option not taken remains genuine opportunity cost even when the euro amounts look modest.

The statement is true.', 'Plot area is finite. Splitting it between vegetables and flowers is a land-allocation problem, showing scarcity of a physical resource rather than cash alone.

The statement is true.', 'Economising is the careful response to any scarce means, whether money, land, time, or equipment. The resource type does not remove the need to use limited stocks carefully.

The statement is true.', 'One specialist nurse cannot cover two wards fully at once. Administrators face scarce nurse hours and forgo the care benefits of the ward that waits, which is opportunity cost.

The statement is true.'] WHERE case_id = 'CASE 2.2.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The treasurer has a fixed 900-euro pot. Kits and fridge repair both claim it, so that limited fund must be allocated between those two uses.

The statement is true.', 'Money spent on kits is not available to fix the fridge. The food-storage benefit a working fridge would have provided is the next-best alternative forgone.

The statement is true.', 'Money spent on the fridge is not available for new kits. Training and kit benefits those uniforms would have supported are what is given up.

The statement is true.', 'Charitable purpose describes why the club exists; it does not erase scarce funds. Nonprofit budgets still require economic allocation among competing projects.

The statement is false.', 'The invoice for kits or for the repair is the price of the chosen purchase. Opportunity cost is the benefit of the project not funded, not the euro total on the chosen invoice.

The statement is false.'] WHERE case_id = 'CASE 2.2.50' AND tier = 'full';
