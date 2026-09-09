-- Update expanded explanations for 2.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Money stores value only when what a euro buys stays reasonably stable. Very high and unpredictable inflation eats that real value quickly, so the store-of-value function weakens rather than strengthens. The claim has the effect backwards.

The statement is false.', 'A lighthouse beam is hard to withhold from ships that did not donate. If funding rested only on voluntary gifts, non-payers would still navigate by the light. That is the free-rider problem in plain form.

The statement is true.', 'General taxation gathers contributions from the wider community that benefits from safer navigation. Compulsory payment closes the gap voluntary funding leaves open, so tax finance can overcome free riding for this kind of shared service.

The statement is true.', 'Public goods are defined by non-excludability and non-rivalry in use, not by whether the users are private firms. Ships can be private businesses and still rely on a classic public good. User type does not rewrite the category.

The statement is false.', 'Public goods are often tax-funded, but that does not make them costless. Society still pays through taxes and forgone alternatives. "Free at the point of use" is not the same as "zero cost to any taxpayer."

The statement is false.'] WHERE case_id = 'CASE 2.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['With inflation slightly below 2%, the nominal 1,000 euros still sits in the account, yet each euro buys a little less over time. Money continues to store value, but positive inflation slowly erodes purchasing power.

The statement is true.', 'Positive inflation, even when low, means the general price level is rising. Cash holders therefore lose purchasing power gradually; they do not gain it. "Slightly below 2%" is still inflation, not deflation.

The statement is false.', 'Store of value is about keeping real buying power into the future. When inflation is positive, uninvested cash loses some of that power even if the rate is moderate. The function still works, but it works more weakly than under zero inflation.

The statement is true.', 'A low, stable target near 2% is meant to keep prices predictable. That setting is far from the chaos of very high inflation that wrecks planning and contracts. The contrast in the claim is economically sound.

The statement is true.', 'What held euros buy at home depends on domestic prices. If grocery and rent prices rise, the same balance stretches less far, regardless of other markets. Purchasing power of cash is tied to the local price level.

The statement is true.'] WHERE case_id = 'CASE 2.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The printed number on a note can stay fixed while prices rise. Real purchasing power is what goods that cash can buy, so inflation can shrink it even when the nominal amount never changes. "Stored cash never loses purchasing power" is too strong.

The statement is false.', 'Face value is a nominal figure. Over decades of rising prices, the same banknote typically buys fewer goods. Real purchasing power is not frozen by the digits on the paper.

The statement is false.', 'In the circular flow, households supply labour and capital to firms and receive income in return. They also spend on goods and services. Confining households to the spending side alone erases half of the basic model.

The statement is false.', 'Production generates factor incomes for households; households then spend on the goods and services firms produce. That loop of income returning as spending is exactly what the circular-flow idea captures.

The statement is true.', 'Simple textbook sketches start with households and firms, but extended diagrams routinely add government, banks, and foreign trade. Saying those actors never appear is incorrect.

The statement is false.'] WHERE case_id = 'CASE 2.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When prices surge month after month, a fixed 20-euro note buys fewer sweets even though the face amount is unchanged. Rapid inflation cuts real purchasing power of nominal cash sharply.

The statement is true.', 'A mobile transfer settles a purchase with money balances rather than a direct swap of goods. That is money acting as a medium of exchange, just as a cash handover would.

The statement is true.', 'Store of value means holding money for later use without watching its real worth collapse. When inflation races ahead of any chance to spend or reinvest, cash fails at that job. Hyperinflation is the textbook case.

The statement is true.', 'The ECB''s aim of inflation slightly below 2% is a price-stability target. It sits nowhere near the extreme instability of hyperinflation. The contrast in the claim holds.

The statement is true.', 'Anyone holding cash, household or firm, sees real balances shrink when the price level jumps. Purchasing-power erosion under inflation is not limited to one sector.

The statement is true.'] WHERE case_id = 'CASE 2.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Clean air and landscape quality can spill beyond those who buy a ticket. When benefits are widely shared and hard to fence off, the park has public-good elements even if gate fees exist for entry.

The statement is true.', 'Gate fees can shut out low-income visitors while people who never enter may still enjoy cleaner air or biodiversity. Exclusive pricing neither captures every benefit nor settles equity concerns.

The statement is true.', 'When many enjoy ecosystem services without paying at the gate, voluntary funding underprovides upkeep. Tax finance spreads the cost across beneficiaries and can ease that free-rider shortfall.

The statement is true.', 'Whether something is a public good turns on excludability and rivalry, not on whether you can touch trees. Physical objects can still deliver non-excludable shared benefits. Tangibility alone does not settle the definition.

The statement is false.', 'Free-rider logic applies whenever people can enjoy a shared benefit without contributing, including domestic environmental policy. It is not confined to foreign trade.

The statement is false.'] WHERE case_id = 'CASE 2.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A long-term store of value needs reasonably stable purchasing power. High, erratic inflation does the opposite: it eats cash balances. Calling that environment "safer" for storing value reverses the lesson.

The statement is false.', 'Inflation is a rise in the general price level, not the story of one product becoming dearer in a single aisle. One shelf price can move for many reasons without counting as inflation.

The statement is false.', 'Street lighting is hard to exclude from neighbours who refuse to chip in. Voluntary funding invites free riding; neighbours do not "always" pay. The absolute claim fails.

The statement is false.', 'Money can store value, but inflation can still change what a stored euro buys. The store-of-value function does not freeze purchasing power forever.

The statement is false.', 'Barter works only when each party wants what the other offers at the same time. Money as a medium of exchange breaks that double coincidence by letting people sell for cash and buy elsewhere later.

The statement is true.'] WHERE case_id = 'CASE 2.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['In an extended circular flow, government takes taxes from households and firms and channels spending into public services and transfers. That two-way link is standard in the model.

The statement is true.', 'Fuller circular-flow diagrams place the public sector between private actors through tax withdrawals and spending injections. Government is not left off the map in those versions.

The statement is true.', 'Households often receive transfers, public services, and sometimes public-sector wages. Saying they never get anything back from government erases those return flows.

The statement is false.', 'Subsidies and transfers shift purchasing power among households and firms by design. They are the channels through which government redistributes within the flow.

The statement is true.', 'Modern circular-flow thinking assumes monetary payments for goods, factors, taxes, and transfers. It is not a barter-only sketch with no medium of exchange.

The statement is false.'] WHERE case_id = 'CASE 2.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Splitting billing from technical work lets each team deepen routines for one query type. Specialisation of that kind usually speeds resolution on familiar cases.

The statement is true.', 'Agents trained only on billing, or only on troubleshooting, cover a narrower skill set. Onboarding can therefore be shorter than training everyone for every call type.

The statement is true.', 'Households supply labour and capital, earn income, and spend on firms'' output. That income-spending loop is the core circular flow, and the claim states it correctly.

The statement is true.', 'Without cross-training, technical staff lack billing scripts and access. An understaffed billing queue then cannot be covered cleanly, so the staffing claim fits specialisation''s downside.

The statement is true.', 'When teams depend on each other, overload in one queue spills into the other. That bottleneck risk is the interdependence that comes with divided tasks.

The statement is true.'] WHERE case_id = 'CASE 2.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Barter needs a double coincidence of wants: each side must desire what the other offers. That match is not automatic, which is why barter is cumbersome.

The statement is false.', 'Division of labour appears in services as well as factories. Call centres routinely split query types across specialised teams. The "only factory workers" limit is wrong.

The statement is false.', 'Subsidies support particular goods or groups; public goods are defined by non-excludability and shared consumption. Taxation can fund either, but that does not make the two identical.

The statement is false.', 'A fare subsidy can nudge travellers onto rail while seats remain rival and tickets remain excludable. Price support changes incentives; it does not turn rail into a pure public good.

The statement is true.', 'Transfers move resources toward chosen groups or aims, including mobility and environmental goals. That redistributive and policy role is exactly what transfers do.

The statement is true.'] WHERE case_id = 'CASE 2.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An export subsidy channels public money toward a named industry or activity, here dairy cooperatives. That targeted fiscal support is what a subsidy is.

The statement is true.', 'Subsidised cheese or milk still goes to paying buyers and is used up by those who consume it. Rivalry and excludability remain, unlike classic pure public goods such as defence or street lighting.

The statement is true.', 'Government spending covers many things: transfers, subsidies, private-type purchases, and public goods. Funding source alone does not make every outlay a public good.

The statement is false.', 'A subsidy can raise producer receipts or lower buyer prices and still leave the product sellable only to those who pay. Incentives shift; excludability need not vanish.

The statement is true.', 'Taxes withdraw income from the private sector; subsidy payments inject funds to firms. That tax-and-spend link is how government connects to producers in the circular flow.

The statement is true.'] WHERE case_id = 'CASE 2.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each direct swap works only if both traders want each other''s goods at the same moment. That mutual alignment is the double coincidence of wants.

The statement is true.', 'Without money, a honey seller who wants pottery may need a chain of intermediate swaps. Arranging those multilateral matches is far harder than a cash sale.

The statement is true.', 'Honey for bread is still exchange: each party gives up something to obtain something preferred. Absence of euros does not erase the trade.

The statement is true.', 'Barter leaves traders without a shared unit for quoting values, so comparing unlike goods is often harder, not automatic equality of valuation. The claim overstates barter''s simplicity.

The statement is false.', 'Money as a medium of exchange lets each person sell for cash and buy later from someone else. That removes much of the matching friction barter creates.

The statement is true.'] WHERE case_id = 'CASE 2.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Free-rider problems show up wherever shared benefits are hard to exclude, including domestic parks, lighting, and other public services. Foreign trade is not the only setting.

The statement is false.', 'Nominal balances can sit unchanged while prices rise. Real purchasing power then falls. Automatic preservation of real value does not follow from a fixed euro face amount.

The statement is false.', 'Positive inflation over long stretches means cash held idle buys less. That erosion weakens money''s performance as a store of value, which matches the pensioner''s grocery observation.

The statement is true.', 'The ECB''s price-stability aim is inflation slightly below 2%, a low stable rate, not an instruction to let prices race without limit. The claim states that distinction correctly.

The statement is true.', 'Domestic purchasing power of euro cash turns first on domestic prices. Exchange rates matter for foreign goods, but they do not alone determine what groceries cost at home.

The statement is false.'] WHERE case_id = 'CASE 2.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Barter requires a double coincidence of wants. Partners do not automatically desire identical goods; matching those wants is the hard part.

The statement is false.', 'Inflation raises the general price level, so each euro typically buys less, not more. Purchasing power falls when prices climb; it does not rise in lockstep with "money value upward."

The statement is false.', 'A unit of account is a common measuring stick for prices and debts. Tourists may see two currencies, yet each still quotes prices in its own unit. Multiple currencies do not erase the function.

The statement is false.', 'If prices outpace incomes, the same nominal cash covers a smaller basket. Real consumption capacity shrinks even though the face amounts look unchanged.

The statement is true.', 'Domestic inflation directly cuts what euro cash buys at home. The effect is not limited to foreign trade.

The statement is false.'] WHERE case_id = 'CASE 2.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Residents who walk cleaner paths without donating enjoy a benefit others fund. That pattern is the free-rider problem.

The statement is true.', 'When enjoyment is shared and payment is voluntary, many hold back and hope others pay. Shared cleanup then tends to be underfunded relative to what the community would collectively prefer.

The statement is true.', 'Tax finance requires broader contribution from those who benefit, including people who would otherwise free ride. Compulsory funding can close the voluntary shortfall.

The statement is true.', 'Free riding is about enjoying a shared benefit without paying. It arises with public services whether or not money is also used as a medium of exchange elsewhere.

The statement is false.', 'Voluntary donation schemes often fall short of the socially preferred level of a shared good. "Always optimal" is too strong.

The statement is false.'] WHERE case_id = 'CASE 2.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Paying euros for bread means the shopper need not find a baker who wants socks. Money removes that double coincidence of wants.

The statement is true.', 'The baker accepts money now and later spends it on whatever she needs from others. Selling and buying become separate acts instead of one simultaneous swap.

The statement is true.', 'Street lighting is hard to charge per passer-by. Local tax spreads the cost so voluntary free riding does not leave the streets dark.

The statement is true.', 'Textbook money has three core roles: medium of exchange, unit of account, and store of value. Medium of exchange sits alongside the other two.

The statement is true.', 'Without a medium of exchange, each purchase would need reciprocal want matching as in barter. That is exactly the friction money avoids.

The statement is true.'] WHERE case_id = 'CASE 2.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The ECB''s price-stability objective is inflation slightly below 2%. That is the standard statement of the target.

The statement is true.', 'Slightly below 2% already allows small positive inflation. The mandate is not exact zero forever with no room to move.

The statement is false.', 'Low, stable inflation keeps the real value of money more predictable than high, volatile inflation. Price stability supports planning for households and firms.

The statement is true.', 'Hyperinflation destroys purchasing power and contracts; a near-2% target aims at stability. The economic effects are not identical.

The statement is false.', 'Central-bank inflation targets are tools for keeping the general price level on a stable path, a macroeconomic stability goal.

The statement is true.'] WHERE case_id = 'CASE 2.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Living-cost grants to low-income students shift public funds toward a defined group. That is a government transfer by design.

The statement is true.', 'A transfer raises the recipient''s purchasing power without turning the grant itself into a non-excludable shared service like street lighting. Support to individuals and pure public goods are different tools.

The statement is true.', 'A transport subsidy uses public money to cover part of the fare, so users pay less at the ticket office. That is the ordinary meaning of a user subsidy.

The statement is true.', 'Grant income becomes household income and is then spent on rent, food, and other goods. Those purchases feed spending back to firms in the circular flow.

The statement is true.', 'Transfers can chase equity aims while defence or street lighting remain separate, tax-funded public goods. Redistribution and classic public-good provision are related fiscal choices, not the same thing.

The statement is true.'] WHERE case_id = 'CASE 2.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Defence and many other public goods are typically tax-funded because markets alone underprovide them. Private firms do not always supply defence at market prices.

The statement is false.', 'Saving is a leakage in extended models, but wages still exist and banks can channel funds back as investment. The circular flow does not stop, and wages do not vanish, just because households save.

The statement is false.', 'Narrow, repetitive tasks can bring monotony and fatigue, as the bolt-tightening workers show. Specialisation is not an automatic boost to satisfaction with no downsides.

The statement is false.', 'Workers locked into one tiny task build deep but narrow skills. If that job disappears, transferable options may be limited. That skill-narrowing risk is real.

The statement is true.', 'Despite human and coordination costs, repeating a specialised task usually raises productivity and cuts average unit cost when the line runs smoothly.

The statement is true.'] WHERE case_id = 'CASE 2.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Separate surgery, diagnostics, and nursing teams deepen expertise in each role. That division of labour often raises treatment quality and speed for complex care.

The statement is true.', 'Surgery waits on diagnostic results. A backlog in scanning delays theatre schedules, so specialisation creates interdependence across departments.

The statement is true.', 'Modern hospitals run on specialised roles; no credible system requires every doctor to perform every task. The absolute claim is false.

The statement is false.', 'Handoffs, queues, and waiting between departments are coordination costs. Those bottlenecks are recognised drawbacks of specialised organisation.

The statement is true.', 'Focusing skilled staff on their specialty typically raises output per specialist hour even when coordination work remains. Efficiency gains are why hospitals specialise.

The statement is true.'] WHERE case_id = 'CASE 2.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mastering one narrow product still leaves demand shifts, input failures, and competitor risk. Specialisation does not erase all firm risk forever.

The statement is false.', 'Police protection is hard to withhold street by street from non-payers. Domestic policing therefore creates free-rider incentives under voluntary funding, just like other local public goods.

The statement is false.', 'Store of value works best when purchasing power is reasonably stable. Weekly unpredictable price jumps destroy that stability, so the claim has the condition backwards.

The statement is false.', 'Street lighting is difficult to exclude for every passer-by. Non-payers still walk under the lamps, so free-rider problems arise in practice for this local public good.

The statement is false.', 'Transfers and subsidies move income or support chosen groups. They need not be non-excludable shared services, so they are fiscal tools distinct from pure public goods even when tax-funded.

The statement is true.'] WHERE case_id = 'CASE 2.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['When each worker owns one thin stage, a missing chip stops everyone downstream. Fine division of labour raises that single-point vulnerability.

The statement is true.', 'Specialisation lifts productivity on each step, yet sequential tasks lean on one another. Interdependence is the flip side of the efficiency gain.

The statement is true.', 'Without a shared unit of account, traders must juggle many pairwise barter ratios. A common measure makes relative values far easier to compare.

The statement is true.', 'Repeating one tiny step all day can feel monotonous. That human cost is a classic drawback of extreme specialisation.

The statement is true.', 'When every stage is supplied and running, specialised lines usually cut average cost through repetition and skill. Shutdown risk does not cancel that efficiency advantage in normal conditions.

The statement is true.'] WHERE case_id = 'CASE 2.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Services divide tasks constantly: call centres, hospitals, restaurants, and offices all specialise. Factories are not the only setting.

The statement is false.', 'Transfers are income flowing to households, who then spend. That spending re-enters the circular flow; transfers do not break the loop permanently.

The statement is false.', 'Monotony, narrow skills, and dependence on other stages are well-known drawbacks. Claiming division of labour never creates such problems is false.

The statement is false.', 'Specialisation shows up in agriculture, manufacturing, and services alike. Limiting it to farming alone is incorrect.

The statement is false.', 'On an assembly line, stations feed one another. If welding, painting, or electronics stalls, the whole line can stop. Interdependence creates that vulnerability.

The statement is true.'] WHERE case_id = 'CASE 2.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Firms pay wages, rent, interest, and profit to the owners of labour and capital. Those factor payments are household income in the circular flow.

The statement is true.', 'Households spend that income on goods and services, sending revenue back to firms. Spending closing the loop is the second half of the basic diagram.

The statement is true.', 'The model rests on households supplying factors to production. Saying they never supply labour or capital contradicts the circular-flow setup.

The statement is false.', 'Sales and purchases inside the flow are settled with money. Medium of exchange is what links those monetary transactions.

The statement is true.', 'Saving and taxes pull spending out of the simple loop as leakages. Extended circular-flow models show those withdrawals explicitly.

The statement is true.'] WHERE case_id = 'CASE 2.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Money reduces matching frictions that barter creates. Modern exchange is generally easier with money than without it. The claim reverses that point.

The statement is false.', 'Unit of account means prices, wages, and debts are quoted in a common measure, here euros on supermarket labels. That measuring-stick role is the definition.

The statement is true.', 'A unit of account supports priced monetary exchange; it does not require traders to swap goods directly. Barter is what you fall back on without money, not a precondition for a unit of account.

The statement is false.', 'With euro prices, bread and a cinema ticket share one scale. Without that common measure, comparing their values means awkward pairwise judgments.

The statement is true.', 'Medium of exchange is about settling trades; unit of account is about measuring value. Related functions, not identical ones.

The statement is false.'] WHERE case_id = 'CASE 2.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cleared streets help many households at once, and charging each driver or walker at the moment of use is impractical. That shared-benefit pattern fits public-good logic.

The statement is true.', 'If each household could refuse to pay yet still use cleared roads, many would free ride. Voluntary funding would underprovide snow clearing.

The statement is true.', 'General taxation spreads the cost across taxpayers so the city can clear streets reliably instead of waiting on voluntary gifts.

The statement is true.', 'Snow clearing on open residential streets is hard to exclude perfectly and benefits many users together. Treating it as a pure private good with perfect excludability overstates how market-like it is.

The statement is false.', 'Extended circular-flow diagrams include government tax receipts and public spending with households and firms. Tax-financed services do appear in those models.

The statement is false.'] WHERE case_id = 'CASE 2.4.25' AND tier = 'full';
