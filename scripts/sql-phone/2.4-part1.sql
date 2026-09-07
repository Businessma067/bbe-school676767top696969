-- Update expanded explanations for 2.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

High, unpredictable inflation erodes real purchasing power of cash. That weakens money’s store-of-value function; it does not strengthen it.

Map that definition onto the case where a coastal town funds a lighthouse through general taxation rather than individual tolls. Even if the stem mentions related details (here: inflation), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

A lighthouse beam is hard to withhold from non-payers. Under purely voluntary funding, ships could enjoy the light without contributing — classic free riders.

Map that definition onto the case where a coastal town funds a lighthouse through general taxation rather than individual tolls. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Tax financing requires contributions from a broad base, reducing the free-rider gap that voluntary donations leave open for shared benefits like the beam.

Map that definition onto the case where a coastal town funds a lighthouse through general taxation rather than individual tolls. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Public-good status depends on non-rivalry/non-excludability of the service, not on whether users are private businesses. Ship owners can still benefit from a public good.

Map that definition onto the case where a coastal town funds a lighthouse through general taxation rather than individual tolls. Even if the stem mentions related details (here: services, goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Public goods are often tax-funded, which means taxpayers bear costs. “Free to users at the point of use” is not the same as “zero cost to any taxpayer.”.

Map that definition onto the case where a coastal town funds a lighthouse through general taxation rather than individual tolls. Even if the stem mentions related details (here: goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Cash still functions as a store of value in the short run, but positive inflation (even near 2%) slowly reduces what 1,000 euros buy. Purchasing power drifts down as the price level rises.

Map that definition onto the case where a worker holds 1,000 euros in a current account while inflation runs slightly below 2%. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Inflation slightly below 2% is still positive inflation. Cash holders typically lose some purchasing power each year; prices do not fall just because inflation is “slightly below 2%.”.

Map that definition onto the case where a worker holds 1,000 euros in a current account while inflation runs slightly below 2%. Even if the stem mentions related details (here: inflation, 2%), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Any positive inflation weakens the store-of-value function relative to stable prices, even when the rate is moderate.

Map that definition onto the case where a worker holds 1,000 euros in a current account while inflation runs slightly below 2%. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

The ECB’s near-2% aim is price stability, far from destabilising very high inflation that wrecks cash’s real value.

Map that definition onto the case where a worker holds 1,000 euros in a current account while inflation runs slightly below 2%. The claim’s actors and constraints (here: inflation, 2%) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Domestic general price-level changes determine how much a held euro buys at home — purchasing power of cash.

Map that definition onto the case where a worker holds 1,000 euros in a current account while inflation runs slightly below 2%. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Nominal face value can stay “€20” while prices rise, so real purchasing power falls. Unchanged nominal amounts do not freeze real value.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

A banknote’s face value is nominal. Real purchasing power changes with the price level over decades.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

In the circular flow, households supply labour (and often capital) to firms and receive income — they are not only spenders.

Held against the chapter test (here: supply), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

The circular flow links production income to spending on output: earnings return as demand for goods and services.

Held against the chapter test, each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Extended circular-flow diagrams routinely add government, banks (financial sector), and foreign trade. The claim that they “never appear” is false.

Held against the chapter test (here: Government), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

When prices rise very rapidly, the same 20-euro note buys far less candy — sharp erosion of purchasing power at unchanged nominal amounts.

Map that definition onto the case where in a country with very rapid price rises, a child''s 20-euro note buys far less candy monthly. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

A mobile transfer pays for goods or services — money acting as medium of exchange in electronic form.

Map that definition onto the case where in a country with very rapid price rises, a child''s 20-euro note buys far less candy monthly. The claim’s actors and constraints (here: transfer) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

If inflation outpaces the ability to spend or invest quickly, holding money as a store of value fails — cash melts in real terms.

Map that definition onto the case where in a country with very rapid price rises, a child''s 20-euro note buys far less candy monthly. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

The ECB’s slightly-below-2% target aims at stability, far from hyperinflation scenarios like the candy example.

Map that definition onto the case where in a country with very rapid price rises, a child''s 20-euro note buys far less candy monthly. The claim’s actors and constraints (here: 2%) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Cash-holding households and firms both lose real purchasing power when inflation is rapid.

Map that definition onto the case where in a country with very rapid price rises, a child''s 20-euro note buys far less candy monthly. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Clean air and landscape benefits can spill over to non-visitors — public-good (or positive-externality) elements beyond gate-paying tourists.

Map that definition onto the case where policals debate funding a national park via general tax versus gate fees only. The claim’s actors and constraints (here: good) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Gate fees can exclude low-income residents while ecosystem services still benefit people who never enter — incomplete exclusion of beneficiaries.

Map that definition onto the case where policals debate funding a national park via general tax versus gate fees only. The claim’s actors and constraints (here: services) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

When many benefit without direct payment, tax funding can mitigate free riding that pure gate fees leave open.

Map that definition onto the case where policals debate funding a national park via general tax versus gate fees only. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Touchable trees do not decide public-good status. Non-rival enjoyment of conservation benefits can still have public-good features.

Map that definition onto the case where policals debate funding a national park via general tax versus gate fees only. Even if the stem mentions related details (here: goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Free-rider problems appear in domestic environmental policy whenever shared benefits are hard to charge for — not only in foreign trade.

Map that definition onto the case where policals debate funding a national park via general tax versus gate fees only. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Do not collapse money’s three functions into one, treat one shop’s price change as inflation, or convert every tax-funded item into a pure public good. Specialisation raises output but also creates interdependence — denying either side misstates the lesson. Focus points: inflation.

Held against the chapter test (here: inflation), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The mismatch is in the defining feature, not in a missing buzzword; fix the feature and the claim disappears.

The statement is false.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Inflation is a sustained rise in the general price level, not merely one product getting dearer in a single aisle.

Held against the chapter test (here: Inflation), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Neighbours often free-ride on street lighting under voluntary funding; voluntary chipping-in is not guaranteed. Free-rider problems are real for lighting.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Store-of-value is a function of money, but purchasing power still changes with inflation. The function does not imply never-changing real value.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Barter needs a double coincidence of wants. Money as medium of exchange lets people sell and buy separately, overcoming that match problem.

Held against the chapter test (here: Barter), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem. Focus points: Government, services.

Map that definition onto the case where evaluate government''s role in an extended circular flow:. The claim’s actors and constraints (here: Government, services) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Extended circular-flow models include government spending and taxation connecting the public sector to private actors.

Map that definition onto the case where evaluate government''s role in an extended circular flow:. The claim’s actors and constraints (here: Government) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Households receive public services, transfers, and sometimes wages from government employment — return flows exist.

Map that definition onto the case where evaluate government''s role in an extended circular flow:. Even if the stem mentions related details (here: government), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Subsidies and transfers are redistribution channels in the circular flow from government to private actors.

Map that definition onto the case where evaluate government''s role in an extended circular flow:. The claim’s actors and constraints (here: government) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

The circular flow is typically drawn with money mediating exchange, not as pure barter only.

Map that definition onto the case where evaluate government''s role in an extended circular flow:. Even if the stem mentions related details (here: barter), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Splitting billing from technical queries lets agents specialise, which often speeds resolution through practice and focused knowledge.

Map that definition onto the case where a support centre separates billing queries from technical troubleshooting across two teams. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Agents train mainly for their queue type, so training time per agent for that category can fall versus training everyone for everything.

Map that definition onto the case where a support centre separates billing queries from technical troubleshooting across two teams. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Households supply factors, earn income, and spend on firms’ output — the circular-flow loop restated.

Map that definition onto the case where a support centre separates billing queries from technical troubleshooting across two teams. The claim’s actors and constraints (here: supply) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Without cross-training, technical agents lack billing procedures (and vice versa). Understaffing in one team leaves a coverage gap.

Map that definition onto the case where a support centre separates billing queries from technical troubleshooting across two teams. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Specialised teams depend on each other; overflow in one queue creates bottlenecks for overall service.

Map that definition onto the case where a support centre separates billing queries from technical troubleshooting across two teams. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Barter partners often want different things; double coincidence is a problem precisely because matching wants is not automatic.

Map that definition onto the case where government pays a per-trip subsidy lowering commuter rail tickets. Evaluate transfers and subsidies:. Even if the stem mentions related details (here: Barter), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Call centres specialise by query type just as factories divide tasks. Specialisation is not factory-only.

Map that definition onto the case where government pays a per-trip subsidy lowering commuter rail tickets. Evaluate transfers and subsidies:. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Subsidies support specific activities or users; public goods are defined by non-rivalry/non-excludability. Both may use tax revenue, but they are not identical concepts.

Map that definition onto the case where government pays a per-trip subsidy lowering commuter rail tickets. Evaluate transfers and subsidies:. Even if the stem mentions related details (here: goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'TRUE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Lower subsidised fares can shift commuters toward rail while tickets remain excludable — rail is not thereby a pure public good.

Map that definition onto the case where government pays a per-trip subsidy lowering commuter rail tickets. Evaluate transfers and subsidies:. The claim’s actors and constraints (here: shift, good) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

A useful check is the opposite error: treat opportunity cost as the money paid, or treat one buyer’s choice as macro, or treat a shift as a movement — those near-misses fail, which confirms this wording.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Transfers redistribute resources and can target mobility or environmental goals without needing to be pure public goods.

Map that definition onto the case where government pays a per-trip subsidy lowering commuter rail tickets. Evaluate transfers and subsidies:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Export subsidies move public funds to support a targeted industry or export activity — a transfer/support instrument.

Map that definition onto the case where government considers export subsidies for dairy cooperatives. Evaluate subsidies versus public goods:. The claim’s actors and constraints (here: transfer) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Subsidised dairy remains excludable and rival when consumed. That differs from pure public goods (non-excludable, non-rival).

Map that definition onto the case where government considers export subsidies for dairy cooperatives. Evaluate subsidies versus public goods:. The claim’s actors and constraints (here: goods) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Keep the reason clause: it names why the classification holds (forgone alternative, scope of analysis, price signal, or institutional rule) rather than restating the conclusion alone.

The statement is true.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Government spending funds many private or club-like goods and transfers. Spending alone does not make the funded item a public good.

Map that definition onto the case where government considers export subsidies for dairy cooperatives. Evaluate subsidies versus public goods:. Even if the stem mentions related details (here: government, good), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'TRUE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Subsidies change incentives and prices while the product can still be sold only to paying buyers — still excludable.

Map that definition onto the case where government considers export subsidies for dairy cooperatives. Evaluate subsidies versus public goods:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Anchor the claim in money’s functions, the circular flow of income and spending, public-good properties, transfers versus pure public provision, or gains from specialisation. Focus points: government.

Map that definition onto the case where government considers export subsidies for dairy cooperatives. Evaluate subsidies versus public goods:. The claim’s actors and constraints (here: government) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Each swap needs a partner who wants what you offer and offers what you want — double coincidence of wants.

Map that definition onto the case where a hobby market allows only direct swaps: honey for bread, bread for pottery. The claim’s actors and constraints (here: Barter) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Without money, arranging multi-person chains (honey→bread→pottery) is harder than pairwise cash trades.

Map that definition onto the case where a hobby market allows only direct swaps: honey for bread, bread for pottery. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Map that definition onto the case where a hobby market allows only direct swaps: honey for bread, bread for pottery. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Traders often disagree on relative values; barter does not eliminate comparison and bargaining problems.

Map that definition onto the case where a hobby market allows only direct swaps: honey for bread, bread for pottery. Even if the stem mentions related details (here: Barter, goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Money as medium of exchange lets each person sell for cash and buy what they want — simplifying what barter complicates.

Map that definition onto the case where a hobby market allows only direct swaps: honey for bread, bread for pottery. The claim’s actors and constraints (here: barter) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Free-rider problems arise for many domestic public services (defence, lighting, clean parks), not only in foreign trade.

Map that definition onto the case where a pensioner notes the same nominal 100 euros buys fewer groceries than thirty years ago. Even if the stem mentions related details (here: services), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Nominal €100 can buy less as prices rise. Nominal amounts do not automatically preserve real purchasing power.

Map that definition onto the case where a pensioner notes the same nominal 100 euros buys fewer groceries than thirty years ago. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Positive inflation over decades weakens money’s store-of-value performance for long-held cash.

Map that definition onto the case where a pensioner notes the same nominal 100 euros buys fewer groceries than thirty years ago. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Anchor the claim in money’s functions, the circular flow of income and spending, public-good properties, transfers versus pure public provision, or gains from specialisation. Focus points: Inflation, 2%.

Map that definition onto the case where a pensioner notes the same nominal 100 euros buys fewer groceries than thirty years ago. The claim’s actors and constraints (here: Inflation, 2%) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Domestic price levels are the main determinant of euro cash’s home purchasing power; FX rates matter for foreign goods but do not monopolise the concept.

Map that definition onto the case where a pensioner notes the same nominal 100 euros buys fewer groceries than thirty years ago. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
'] WHERE case_id = 'CASE 2.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Salary, registration status, or use of money does not abolish scarcity, redefine goods as services, or bar households from exchange. Absolute exclusions are the usual failure mode. Focus points: Barter, goods.

Held against the chapter test (here: Barter, goods), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The because-clause attaches the wrong reason to the label. A real detail (a national programme, a zero wage, shared premises, use of money) does not justify the over-broad conclusion.

The statement is false.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Inflation reduces money’s purchasing power when the price level rises. Prices and money’s real value do not “always move upward together” in a way that raises purchasing power.

Held against the chapter test (here: Inflation), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Unit of account can be one currency (euros) even if tourists also hold another. Two currencies in tourism do not erase the unit-of-account function.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

If prices rise faster than incomes, the same nominal cash buys fewer goods — lower real purchasing power for households.

Held against the chapter test (here: goods), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Inflation directly affects domestic purchasing power of euro cash, not only foreign trade.

Held against the chapter test (here: Inflation), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
'] WHERE case_id = 'CASE 2.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a river park cleanup relies on voluntary donations; many residents enjoy cleaner paths without donating. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Voluntary funding often underprovides shared cleanup benefits because free riders withhold donations.

Map that definition onto the case where a river park cleanup relies on voluntary donations; many residents enjoy cleaner paths without donating. The claim’s actors and constraints (here: good) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Taxes compel broad contributions, shrinking the free-rider gap relative to pure voluntary funding.

Map that definition onto the case where a river park cleanup relies on voluntary donations; many residents enjoy cleaner paths without donating. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Free riders appear with public services regardless of whether money also serves as medium of exchange in shops.

Map that definition onto the case where a river park cleanup relies on voluntary donations; many residents enjoy cleaner paths without donating. Even if the stem mentions related details (here: services), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Voluntary funding frequently falls short of socially desired public-good levels — shortfalls are common, not “always optimal.”.

Map that definition onto the case where a river park cleanup relies on voluntary donations; many residents enjoy cleaner paths without donating. Even if the stem mentions related details (here: good), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Paying euros for bread does not require the baker to want socks — money removes the double-coincidence requirement.

Map that definition onto the case where shoppers pay euros for bread instead of trading socks directly with the baker. The claim’s actors and constraints (here: barter) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Sell for money, then buy what you want later — medium of exchange separates selling from buying.

Map that definition onto the case where shoppers pay euros for bread instead of trading socks directly with the baker. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Local-tax street lighting funds a shared service and reduces free riding relative to pure voluntary funding.

Map that definition onto the case where shoppers pay euros for bread instead of trading socks directly with the baker. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Map that definition onto the case where shoppers pay euros for bread instead of trading socks directly with the baker. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Map that definition onto the case where shoppers pay euros for bread instead of trading socks directly with the baker. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
'] WHERE case_id = 'CASE 2.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

The ECB’s price-stability objective is inflation slightly below 2% (as taught in this bank’s framing).

Map that definition onto the case where evaluate precise claims about ECB inflation targeting:. The claim’s actors and constraints (here: inflation, 2%) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

The target is near 2%, not a requirement of exactly zero inflation forever with no deviation.

Map that definition onto the case where evaluate precise claims about ECB inflation targeting:. Even if the stem mentions related details (here: inflation), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'TRUE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Anchor the claim in money’s functions, the circular flow of income and spending, public-good properties, transfers versus pure public provision, or gains from specialisation. Focus points: inflation.

Map that definition onto the case where evaluate precise claims about ECB inflation targeting:. The claim’s actors and constraints (here: inflation) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'FALSE — Inflation is a sustained rise in the general price level, which changes the real goods a given nominal sum can buy. One shop’s promotion or a single relative price move is not the same thing.

Slightly-below-2% inflation is mild stability targeting; hyperinflation is extreme price explosion — not identical in effect.

Map that definition onto the case where evaluate precise claims about ECB inflation targeting:. Even if the stem mentions related details (here: Inflation, 2%), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Ask what unit is being studied: one household, firm, or transaction is micro; nationwide totals and overall price-level or output aggregates are macro. Scope decides the label.

Map that definition onto the case where evaluate precise claims about ECB inflation targeting:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

If you replaced the key term with its neighbour (accounting outlay, micro/macro swap, movement vs shift), the sentence would stop matching the stem — that contrast locks the idea.

The statement is true.
'] WHERE case_id = 'CASE 2.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Living-cost grants to low-income students are transfers redistributing income to a targeted group.

Map that definition onto the case where government pays living-cost grants to low-income students. Evaluate transfers:. The claim’s actors and constraints (here: Student, government) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Transfers move purchasing power to recipients; they need not be pure public goods like defence or lighting.

Map that definition onto the case where government pays living-cost grants to low-income students. Evaluate transfers:. The claim’s actors and constraints (here: good) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check. Focus points: subsidy.

Map that definition onto the case where government pays living-cost grants to low-income students. Evaluate transfers:. The claim’s actors and constraints (here: subsidy) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Grant money becomes household income and is later spent on goods and services — re-entering the circular flow.

Map that definition onto the case where government pays living-cost grants to low-income students. Evaluate transfers:. The claim’s actors and constraints (here: household, goods, services) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Transfers can pursue equity while remaining conceptually distinct from tax-funded public goods such as defence or street lighting.

Map that definition onto the case where government pays living-cost grants to low-income students. Evaluate transfers:. The claim’s actors and constraints (here: defence) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Taxes commonly fund public goods such as defence; private firms do not “always” supply defence at market prices.

Map that definition onto the case where workers on one repetitive bolt-tightening task report fatigue and cannot switch lines quickly. Even if the stem mentions related details (here: goods, supply, defence), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Saving is a leakage in extended models, but wages continue for workers; the circular flow does not stop and wages do not “cease to exist” when some income is saved.

Map that definition onto the case where workers on one repetitive bolt-tightening task report fatigue and cannot switch lines quickly. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Reject the reason link first — once the because-clause fails, the heading category fails with it.

The statement is false.
', 'FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Specialisation can raise productivity yet also bring monotony, skill narrowness, and dependency — downsides exist.

Map that definition onto the case where workers on one repetitive bolt-tightening task report fatigue and cannot switch lines quickly. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Narrow bolt-tightening focus may leave workers with few transferable skills if that job disappears — a drawback of extreme specialisation.

Map that definition onto the case where workers on one repetitive bolt-tightening task report fatigue and cannot switch lines quickly. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Despite human and flexibility drawbacks, specialisation often lowers average production cost per unit through repetition and learning.

Map that definition onto the case where workers on one repetitive bolt-tightening task report fatigue and cannot switch lines quickly. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
'] WHERE case_id = 'CASE 2.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Splitting surgery, diagnostics, and nursing deepens skill and often raises treatment efficiency — division of labour in healthcare.

Map that definition onto the case where hospital splits surgery, diagnostics, and nursing into specialised departments. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Specialised departments depend on each other: diagnostic delay postpones surgery — interdependence.

Map that definition onto the case where hospital splits surgery, diagnostics, and nursing into specialised departments. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Do not collapse money’s three functions into one, treat one shop’s price change as inflation, or convert every tax-funded item into a pure public good. Specialisation raises output but also creates interdependence — denying either side misstates the lesson.

Map that definition onto the case where hospital splits surgery, diagnostics, and nursing into specialised departments. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Coordination costs and bottlenecks between departments are recognised drawbacks alongside the gains.

Map that definition onto the case where hospital splits surgery, diagnostics, and nursing into specialised departments. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Despite coordination needs, specialisation typically raises output per specialist hour through focused expertise.

Map that definition onto the case where hospital splits surgery, diagnostics, and nursing into specialised departments. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Mastering one narrow product still leaves demand risk, input risk, and technological change — specialisation does not remove all firm risk forever.

Held against the chapter test (here: firm), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Police protection is hard to withhold from non-payers in a locality — free-rider incentives exist for domestic security services.

Held against the chapter test (here: services), the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Unpredictable weekly price jumps destroy store-of-value reliability; the function works best under stable prices.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Street lighting is typically non-excludable for passers-by, so free-rider problems arise under voluntary funding.

Held against the chapter test, the familiar vocabulary may sound economic, but the operative restriction or reason fails — so the sentence mislabels the situation.

Absolute wording is the trap: economics definitions leave room for counterexamples — another actor, another scope, a non-money cost, or a public function that still exists. One clear counterexample rejects the sentence.

The statement is false.
', 'TRUE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Transfers and subsidies redistribute or support groups; they are not always pure public goods.

Held against the chapter test (here: goods), each operative word earns its place: the category, the comparison, and the mechanism survive when checked one by one.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
'] WHERE case_id = 'CASE 2.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

When each worker does one step, a missing chip at one stage can stop the whole line — fine division of labour raises vulnerability to specialised failures.

Map that definition onto the case where a single missing chip halts an electronics assembly line where each worker performs one step. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Specialisation raises productivity but ties stages together — interdependence among sequential tasks.

Map that definition onto the case where a single missing chip halts an electronics assembly line where each worker performs one step. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Without a common unit of account, comparing many barter ratios is cumbersome; money prices simplify comparison.

Map that definition onto the case where a single missing chip halts an electronics assembly line where each worker performs one step. The claim’s actors and constraints (here: barter, goods) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Anchor the claim in money’s functions, the circular flow of income and spending, public-good properties, transfers versus pure public provision, or gains from specialisation.

Map that definition onto the case where a single missing chip halts an electronics assembly line where each worker performs one step. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

When all stages run, specialisation often lowers average cost despite shutdown risk when a stage fails.

Map that definition onto the case where a single missing chip halts an electronics assembly line where each worker performs one step. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Services specialise too (hospitals, call centres, law firms). Division of labour is not factory-only.

Map that definition onto the case where a car assembly line splits welding, painting, and electronics into separate tasks. Evaluate specialisation:. Even if the stem mentions related details (here: service), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Salary, registration status, or use of money does not abolish scarcity, redefine goods as services, or bar households from exchange. Absolute exclusions are the usual failure mode. Focus points: Transfer.

Map that definition onto the case where a car assembly line splits welding, painting, and electronics into separate tasks. Evaluate specialisation:. Even if the stem mentions related details (here: Transfer), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Swap in the correct criterion and the sentence no longer describes the case — that is enough to mark it false.

The statement is false.
', 'FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Do not collapse money’s three functions into one, treat one shop’s price change as inflation, or convert every tax-funded item into a pure public good. Specialisation raises output but also creates interdependence — denying either side misstates the lesson.

Map that definition onto the case where a car assembly line splits welding, painting, and electronics into separate tasks. Evaluate specialisation:. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Salary, registration status, or use of money does not abolish scarcity, redefine goods as services, or bar households from exchange. Absolute exclusions are the usual failure mode. Focus points: services.

Map that definition onto the case where a car assembly line splits welding, painting, and electronics into separate tasks. Evaluate specialisation:. Even if the stem mentions related details (here: services), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Division of labour assigns stages to different workers so repetition raises output per person. Specialisation also creates interdependence: a delay at one station can stall the next.

Walk the definition onto the stem’s actors and constraints, then confirm the sentence’s category and reason both survive that check.

Map that definition onto the case where a car assembly line splits welding, painting, and electronics into separate tasks. Evaluate specialisation:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
'] WHERE case_id = 'CASE 2.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Firms pay wages, rent, interest, and profit to households — factor payments become household income.

Map that definition onto the case where evaluate how income and spending connect households and firms:. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Households spend that income on goods and services, returning revenue to firms — closing the loop.

Map that definition onto the case where evaluate how income and spending connect households and firms:. The claim’s actors and constraints (here: Household, goods, services) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

The claim confuses a shift with a movement, or misreads surplus/shortage signs. Cutting price raises quantity demanded; vacant stock at a sticky asking price usually signals the price is too high, not too low. Focus points: supply.

Map that definition onto the case where evaluate how income and spending connect households and firms:. Even if the stem mentions related details (here: supply), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Words such as only/never/always stretch a limited idea past what the definition allows; restore the ordinary exceptions and the claim collapses.

The statement is false.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem.

Map that definition onto the case where evaluate how income and spending connect households and firms:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'TRUE — In the circular flow, firms pay households for factor services and households return spending as consumption revenue to firms. Extended diagrams add taxes, transfers, and government purchases without erasing that loop.

Saving and taxes are leakages that can withdraw spending temporarily in extended models (with injections elsewhere).

Map that definition onto the case where evaluate how income and spending connect households and firms:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
'] WHERE case_id = 'CASE 2.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Money typically makes modern exchange easier than pure barter by removing double coincidence and easing price comparison.

Map that definition onto the case where prices in a supermarket are all labelled in euros. Evaluate money''s unit-of-account function:. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Unit of account means money is the common measuring rod for prices and debts — euros on every label.

Map that definition onto the case where prices in a supermarket are all labelled in euros. Evaluate money''s unit-of-account function:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

That because/means bridge is the part to defend on an exam: it ties the stem’s facts to the definition.

The statement is true.
', 'FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Unit of account is about measuring value in money terms; it does not require barter or direct goods-for-goods trading.

Map that definition onto the case where prices in a supermarket are all labelled in euros. Evaluate money''s unit-of-account function:. Even if the stem mentions related details (here: barter, goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'TRUE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Without a common measure, comparing bread and cinema tickets is harder than with euro prices on both.

Map that definition onto the case where prices in a supermarket are all labelled in euros. Evaluate money''s unit-of-account function:. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Under that classification the claim describes the situation correctly rather than a lookalike category.

The statement is true.
', 'FALSE — Money’s three functions are medium of exchange (accepted in payment), unit of account (common price measure), and store of value (carrying purchasing power over time). The functions are related but distinct.

Medium of exchange (what you pay with) and unit of account (how you measure prices) are distinct functions, even when the same currency serves both.

Map that definition onto the case where prices in a supermarket are all labelled in euros. Evaluate money''s unit-of-account function:. Even if the stem mentions related details, those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

Restore the textbook test and the assertion falls away: it mislabels the category or reverses the comparison the chapter actually teaches.

The statement is false.
'] WHERE case_id = 'CASE 2.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Cleared streets benefit many residents and are hard to meter and charge at the moment each person uses them.

Map that definition onto the case where city clears snow from all residential streets using general taxation. The claim’s actors and constraints line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Under voluntary payments, some households would enjoy cleared streets without paying — free-rider issues.

Map that definition onto the case where city clears snow from all residential streets using general taxation. The claim’s actors and constraints (here: household) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

The sentence therefore reports the concept accurately for this item once the definition is held fixed.

The statement is true.
', 'TRUE — Taxes, transfers, and subsidies link government budgets to household and firm budgets. Transfers pursue distributional goals; they differ from providing a non-excludable public good, though both appear in public finance.

Tie the claim to limited means versus unlimited ends, to goods versus services, or to the household/entrepreneur role actually performing the action in the stem. Focus points: service.

Map that definition onto the case where city clears snow from all residential streets using general taxation. The claim’s actors and constraints (here: service) line up with the concept: the sentence describes the same mechanism the chapter teaches, not a neighbouring idea with similar vocabulary.

Nothing in the stem contradicts that reading, so the assertion stands as a correct application of the definition.

The statement is true.
', 'FALSE — Connect the claim to money’s functions, the circular flow of income and spending, public goods and transfers, or gains and interdependence from specialisation.

Snow clearing has strong shared-service features and imperfect exclusion — not a pure private good with perfect excludability at all times.

Map that definition onto the case where city clears snow from all residential streets using general taxation. Even if the stem mentions related details (here: good), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
', 'FALSE — Public goods are typically non-excludable and non-rival: excluding non-payers is hard and one person’s use does not much reduce another’s. Tax finance or a subsidy alone does not automatically turn every product into a pure public good.

Tax-financed public services appear in extended circular-flow diagrams linking government and households.

Map that definition onto the case where city clears snow from all residential streets using general taxation. Even if the stem mentions related details (here: goods), those details do not carry the claim’s conclusion — the sentence either widens the concept past its test or attaches the wrong label to the facts.

The absolute quantifier is doing the damage. Soften it to the chapter’s actual scope and the remaining content no longer supports a false blanket rule.

The statement is false.
'] WHERE case_id = 'CASE 2.4.25' AND tier = 'full';
