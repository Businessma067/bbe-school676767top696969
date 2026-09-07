-- Update expanded explanations for 3.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit compares revenue with total costs and expenses. Strong demand raises the chance of sales, but costs can still erase any surplus.

Rising costs can erase profit despite revenue.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented firms seek surplus above break-even.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit requires revenues to exceed costs, not revenue alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit requires revenues to exceed costs and expenses.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented firms aim for revenue above costs to grow and reward risk.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.3.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit funds capital renewal in commercial firms.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit enables reinvestment in commercial businesses.

The scenario (a bakery chain targets revenue above costs to fund new ovens in a growing shop) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit orientation links surplus to reinvestment.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment also supports long-run business sustainability.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial firms reinvest profit into equipment.

Against the scenario (a bakery chain targets revenue above costs to fund new ovens in a growing shop), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Both revenue and costs determine profit outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Commercial expansion relies on profit, not persistent losses.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Surplus above costs supports growth in profit-oriented firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Margin appears only when revenue exceeds costs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit means higher revenues than total costs.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.3.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Cost recovery does not redefine a humanitarian npo as profit-oriented.

In the case setting — a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses are typically reinvested into the mission.

The scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must still secure and manage revenues or donations.

Against the scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Relief delivery requires funding for materials and logistics.

Against the scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Humanitarian delivery requires funded materials and logistics.

In the case setting — a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Reinvested profit supports capital renewal.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens long-run business capacity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment supports durability and future returns.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit funds capital renewal in profit-oriented firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profits can be reinvested in the business.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.3.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading can fund mission activities within an npo.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Trading can supplement donations to cover mission costs.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Merchandising surpluses can fund mission work without implying owner profit-maximisation.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

A conservation npo is mission-driven and not organised to maximise private owner wealth.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses support mission reinvestment, not owner payouts.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.3.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit compensates owners and investors for risk taken.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates owners for capital risk.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect reward when revenues exceed costs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Returns compensate capital providers for bearing business risk.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect profit as reward for risk.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors bear risk rewarded by profit.

The scenario (startup founders who expect profit as compensation for the risk they have invested) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Profit orientation depends on aims, not temporary margin levels.

In the case setting — startup founders who expect profit as compensation for the risk they have invested — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Founders seek surplus beyond break-even to reward risk.

In the case setting — startup founders who expect profit as compensation for the risk they have invested — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates capital exposed to business risk.

Against the scenario (startup founders who expect profit as compensation for the risk they have invested), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Founders and investors expect profit as reward for risk.

Against the scenario (startup founders who expect profit as compensation for the risk they have invested), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.3.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos still need revenues or donations to operate.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

The defining aim is mission delivery, not owner profit.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surpluses typically return to the mission.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Different mission types can still share npo characteristics.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must still fund staff, materials, and logistics.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surpluses reinvest in mission delivery.

The scenario (a charity clinic bills insurers enough to cover running costs while treating patients) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos combine service delivery with cost coverage.

The scenario (a charity clinic bills insurers enough to cover running costs while treating patients) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos seek to cover costs while delivering mission services.

In the case setting — a charity clinic bills insurers enough to cover running costs while treating patients — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos can bill for cost coverage without profit-maximising aims.

Against the scenario (a charity clinic bills insurers enough to cover running costs while treating patients), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo healthcare must cover operating costs.

In the case setting — a charity clinic bills insurers enough to cover running costs while treating patients — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'] WHERE case_id = 'CASE 3.3.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need inflows to operate.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must ensure operating costs are covered.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may earn surplus reinvested into mission activities.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos need revenues or donations to operate.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need enough revenue to cover costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.3.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ticket receipts must at least cover nightly operating expenses to sustain shows.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Reinvested surplus can broaden mission reach.

The scenario (an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Cultural missions still rely on revenue covering performance running costs.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses fund expanded mission activities.

The scenario (an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Npos may combine fees and mission surplus use.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.3.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Donations finance mission operations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may combine multiple inflow types.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surpluses and donations enable ongoing services.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Even urgent relief requires funded materials and logistics.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need enough revenue to cover costs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.3.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained earnings reward shareholders for capital placed at business risk.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Investors receive profit as reward for risk taken.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit on retained funds compensates owners who bear uncertainty of operations.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit rewards vary with business performance and risk.

In the case setting — how investors treat retained profit as reward for capital placed at risk — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect profit as reward for risk.

In the case setting — how investors treat retained profit as reward for capital placed at risk — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Donations and fees are common npo inflows.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading can support mission costs without turning the npo into a profit-maximiser.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may generate surplus; they reinvest it rather than maximise owner profit.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Funding sources can include donations, fees, and trading.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports the mission, not private dividends.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.3.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Aid delivery needs funded materials and logistics.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos pursue mission aims rather than owner profit.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo legal purpose differs from profit-maximising corporations.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Staff and facilities still require funding.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surpluses support mission reinvestment.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Donor income helps npos finance operating expenses.

In the case setting — a food bank tracks whether donations cover warehouse rent for its depot — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos must ensure operating costs are covered.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Premises and logistics still require funding.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Covering costs is central to npo operation.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo costs are covered by donations and mission revenues.

In the case setting — a food bank tracks whether donations cover warehouse rent for its depot — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.3.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Mission-funded trading is compatible with npo status.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission reinvestment is core npo behaviour.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission use of trading income does not redefine the organisation as profit-maximising.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

A conservation npo is mission-driven, not owner-wealth-maximising.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports the mission.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission-focused spending is characteristic of npos.

The scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Campaign delivery still has operating costs.

The scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Fundraising for a mission is not the same as owner profit-maximisation.

In the case setting — how an environmental campaign NPO raises funds while limiting spending to mission delivery — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surplus is reinvested in the mission.

Against the scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need inflows to operate.

Against the scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Returns compensate capital providers for bearing business risk.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Investors receive profit as reward for risk taken.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Commercial firms target profit above costs to reward risk.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors bear risk rewarded by profit.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners expect reward when revenues exceed costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.3.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment also supports durability.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens the firm''s long-run capacity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Most businesses aim to make profit to thrive over time.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit supports reinvestment and long-run survival.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens durability.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.3.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

The core distinction is primary aim: profit versus mission.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surplus reinvested in the mission is compatible with npo status.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Trading does not automatically imply profit-maximisation.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Many npos employ paid staff funded by inflows.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos can pursue a mission while managing a surplus.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.3.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses support mission reinvestment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit orientation includes surplus, reinvestment, and risk reward.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Fee income can support npo cost coverage without profit-maximisation.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos prioritise mission over owner profit-maximisation.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Both need inflows to operate.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.3.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses fund mission activities rather than owner returns.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses are reinvested, not owner dividends.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports mission reinvestment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Both involve revenues above costs when surplus arises.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Improving services aligns with npo aims.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.3.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit supports long-run survival and growth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit supports long-run capacity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented businesses target revenue above costs.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit supports long-run survival and reinvestment.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ongoing inflows remain necessary.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.3.25' AND tier = 'full';
