-- Update expanded explanations for 6.2-part4 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Electronics Retailer Till Upgrade". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a logistics company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Electronics Retailer Till Upgrade". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Electronics Retailer Till Upgrade". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Electronics Retailer Till Upgrade". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a dairy processor repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Electronics Retailer Till Upgrade". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.076' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Structure Review 77". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 185 + 65 + 37 = 287
$$

$$
CL = 115 + 43 = 158
$$

$$
\text{Current ratio} = \frac{287}{158} = 1.8165
$$

Claimed: is below 0.84. Actual 1.82.

Reading the arithmetic against the claim: actual current ratio 1.82 versus ''is below 0.84'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 287 and current liabilities total 158:

$$
WC = CA - CL
$$

$$
CA = 287, \quad CL = 158
$$

$$
WC = 287 - 158 = 129
$$

The statement cites working capital of €129 thousand and that it is positive. Calculated WC is 129, which is positive.

Reading the arithmetic against the claim: WC = 129 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 185 and current assets = 287. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{185}{287}
$$

$$
Share = 64.5\%
$$

Threshold: more than 51.9%. Actual 64.5%.

Reading the arithmetic against the claim: actual share 64.5% matches ''more than 51.9%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 65 and current assets = 287. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{65}{287}
$$

$$
Share = 22.6\%
$$

Threshold: less than 38.8%. Actual 22.6%.

Reading the arithmetic against the claim: actual share 22.6% matches ''less than 38.8%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.077' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Overstated Assets Without Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a fitness club chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Overstated Assets Without Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a restaurant chain repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Overstated Assets Without Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a IT consultancy purchases new laptop computers for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.', 'TRUE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Overstated Assets Without Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The balance sheet of a bakery reports the revenue earned and costs incurred across the whole accounting period, while its statement of profit and loss shows assets, equity and liabilities on one sp…"

The statement is false.'] WHERE case_id = 'CASE 6.2.078' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Understanding the Three Cash Flow Sections". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, the dividends paid line of (20100) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Understanding the Three Cash Flow Sections". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this printing company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Understanding the Three Cash Flow Sections". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, the investing outflow of 68,400 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this printing company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Understanding the Three Cash Flow Sections". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, repayments of borrowed money count as operating cash outflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.079' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 297, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 336
$$

$$
\frac{336 - 297}{297} = 13.1\%
$$

$$
13.1\% > 8\%
$$

The actual growth is 13.1%, which is more than the claimed 8%.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 80". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Customer collections of receivables are classified as financing cash inflows."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 80". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 80". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 80". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Purchase of office equipment for cash is classified as an operating cash outflow."

The statement is false.'] WHERE case_id = 'CASE 6.2.080' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Operating Cash Flow and Core Trading". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Operating Cash Flow and Core Trading". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a hotel chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Operating Cash Flow and Core Trading". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a software developer repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Operating Cash Flow and Core Trading". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a construction firm earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Operating Cash Flow and Core Trading". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a hotel chain makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is false.'] WHERE case_id = 'CASE 6.2.081' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 82". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost."

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 234 and finance costs = 21. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{234}{21}
$$

$$
Coverage = 11.1429
$$

Threshold: more than 7.88. Actual 11.14.

Reading the arithmetic against the claim: coverage 11.14 exceeds 7.88 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 261 and revenue = 1,002. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{261}{1,002}
$$

$$
OM = 26.0\%
$$

Threshold: exceeds 16.1% in Year 2. Actual 26.0%.

Reading the arithmetic against the claim: operating margin 26.0% exceeds 16.1% so the statement holds.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{301}{878} = 34.3\%
$$

$$
GPM_{2} = \frac{346}{1,002} = 34.5\%
$$

$$
\Delta = 0.2\text{ percentage points}
$$

Threshold: more than 5.9 pp higher in Year 2. Actual Δ = 0.2 pp.

Reading the arithmetic against the claim: margin rose by 0.2 pp versus more than 5.9 pp so the statement does not hold.

The statement is false.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 46 and profit before tax = 216. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{46}{216}
$$

$$
ETR = 21.3\%
$$

Threshold: below 30.7% in Year 1. Actual 21.3%.

Reading the arithmetic against the claim: ETR 21.3% is below 30.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.082' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Depreciation is a non-cash allocation of a past capital outlay.

Cash left the business when the asset was acquired. The annual depreciation charge merely allocates that past outlay across useful life; recording the charge does not require a fresh cash payment to an outside party in the year of the expense.

Applied to this stem: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged."

The statement is true.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{172,000 - 0}{12} = 14,333
$$

$$
\text{Asset B – Delivery truck}: \frac{57,000 - 8,000}{6} = 8,167
$$

$$
\text{Asset C – Computer equipment}: \frac{23,000 - 0}{3} = 7,667
$$

$$
\text{Combined} = 30,167
$$

Claimed €30,167. Actual ≈ €30,167.

Reading the arithmetic against the claim: combined charge ≈ €30,167 versus claimed €30,167 so the statement holds.

The statement is true.', 'FALSE — Depreciated share of machinery cost after three years is three charges over purchase price.

Name the identity in words: depreciated share = (3 × annual charge) ÷ cost.

$$
\text{Annual} = 14,333, \quad \text{Cost} = 172,000
$$

$$
\frac{3 \times 14,333}{172,000} = 25.0\%
$$

Threshold: more than 34.5%. Actual 25.0%.

Reading the arithmetic against the claim: depreciated share 25.0% does not exceed 34.5% so the statement does not hold.

The statement is false.', 'FALSE — Compare the truck''s straight-line annual charge with the computer''s.

$$
\text{Truck annual} = 8,167, \quad \text{Computer annual} = 7,667
$$

$$
\frac{8,167 - 7,667}{7,667} = 6.5\%
$$

Threshold: more than 78.8% higher. Actual premium 6.5%.

Reading the arithmetic against the claim: premium 6.5% versus more than 78.8% so the statement does not hold.

The statement is false.', 'FALSE — Machinery''s share of combined annual depreciation is its charge over the total of all charges.

Name the identity in words: machinery share = machinery annual charge ÷ combined annual charges.

From the extract, machinery charge = 14333.3333 and combined charges = 30166.6667. Plug the figures step by step:

$$
Share = \frac{\text{machinery charge}}{\text{combined charges}}
$$

$$
Share = \frac{14333.3333}{30166.6667}
$$

$$
Share = 47.5\%
$$

Threshold: more than 59.5%. Actual 47.5%.

Reading the arithmetic against the claim: share 47.5% does not exceed 59.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.083' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 314, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 380
$$

$$
\frac{380 - 314}{314} = 21.0\%
$$

$$
21.0\% > 10.6\%
$$

The actual growth is 21.0%, which is more than the claimed 10.6%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 84". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instea…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 84". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 84". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 84". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period."

The statement is true.'] WHERE case_id = 'CASE 6.2.084' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Asset Composition Chart 85". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period."

The statement is true.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 234 + 128 + 42 = 404
$$

$$
CL = 215 + 34 = 249
$$

$$
\text{Current ratio} = \frac{404}{249} = 1.6225
$$

Claimed: exceeds 1.5. Actual 1.62.

Reading the arithmetic against the claim: actual current ratio 1.62 versus ''exceeds 1.5'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 404 and current liabilities total 249:

$$
WC = CA - CL
$$

$$
CA = 404, \quad CL = 249
$$

$$
WC = 404 - 249 = 155
$$

The statement cites working capital of €155 thousand and that it is positive. Calculated WC is 155, which is positive.

Reading the arithmetic against the claim: WC = 155 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 591 and total assets = 1,030. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{591}{1,030}
$$

$$
DR = 57.4\%
$$

Claimed: exceeds 57.3%. Actual 57.4%.

Reading the arithmetic against the claim: actual debt ratio 57.4% matches ''exceeds 57.3%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 234 and current assets = 404. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{234}{404}
$$

$$
Share = 57.9\%
$$

Threshold: more than 51.3%. Actual 57.9%.

Reading the arithmetic against the claim: actual share 57.9% matches ''more than 51.3%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.085' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is not subject to depreciation. The reason given — it does not wear out through use the way buildings and machinery do. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 86". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 86". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 86". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Collecting payment on a trade receivable is cash from operating activities. The reason given — it comes from the core trading cycle. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.086' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Investing Cash Flow and Fixed Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a software developer earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Investing Cash Flow and Fixed Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a garage purchases new diagnostic equipment for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Investing Cash Flow and Fixed Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a garage makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a bakery is depreciated in exactly the same way as its commercial ovens,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Investing Cash Flow and Fixed Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a courier firm charges on its delivery vans each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.'] WHERE case_id = 'CASE 6.2.087' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Financing Cash Flow and Borrowing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this logistics company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Financing Cash Flow and Borrowing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this logistics company, the dividends paid line of (25200) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this logistics company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Financing Cash Flow and Borrowing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this logistics company, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Financing Cash Flow and Borrowing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this logistics company, buying new forklift trucks is classified as an investing cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.088' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Revenue and Operating Result Chart 89". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost."

The statement is true.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 313, \quad
\text{The operating result}_{\text{Y2}} = 345
$$

$$
\frac{345 - 313}{313} = 10.2\%
$$

$$
10.2\% \le  57\%
$$

The actual growth is 10.2%, which is not more than the claimed 57%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 230, \quad
\text{Profit for the year}_{\text{Y2}} = 250
$$

$$
\frac{250 - 230}{230} = 8.7\%
$$

$$
8.7\% \le  17.2\%
$$

The actual growth is 8.7%, which is not more than the claimed 17.2%.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 958, \quad
\text{Revenue}_{\text{Y2}} = 1,086
$$

$$
\frac{1,086 - 958}{958} = 13.4\%
$$

$$
13.4\% > 8.6\%
$$

The actual growth is 13.4%, which is more than the claimed 8.6%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 26.3\%
$$

$$
\text{OR growth} = 10.2\%
$$

Finance costs did grow by more than 12.7%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 26.3% vs threshold 12.7% and OR growth 10.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.089' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Collecting payment on a trade receivable is cash from operating activities. The reason given — it comes from the core trading cycle. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{125,000 - 0}{8} = 15,625
$$

$$
\text{Asset B – Delivery truck}: \frac{56,000 - 7,000}{6} = 8,167
$$

$$
\text{Asset C – Computer equipment}: \frac{23,000 - 0}{3} = 7,667
$$

$$
\text{Combined} = 31,458
$$

Claimed €32,549. Actual ≈ €31,458.

Reading the arithmetic against the claim: combined charge ≈ €31,458 versus claimed €32,549 so the statement does not hold.

The statement is false.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €23,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{56,000 - 7,000}{6} = 8,167
$$

$$
BV_{3} = 56,000 - 3 \times 8,167 = 31,500
$$

Claimed €34,424. Actual ≈ €31,500.

Reading the arithmetic against the claim: carrying value ≈ €31,500 versus claimed €34,424 so the statement does not hold.

The statement is false.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 78,125
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 31,500
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €109,625
$$

Threshold: exceeds €100,238.

Reading the arithmetic against the claim: combined BV ≈ €109,625 versus exceeds €100,238 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.090' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 318, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 348
$$

$$
\frac{348 - 318}{318} = 9.4\%
$$

$$
9.4\% > 8.4\%
$$

The actual growth is 9.4%, which is more than the claimed 8.4%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 91". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 91". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 91". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Purchase of office equipment for cash is classified as an operating cash outflow."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 91". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets."

The statement is true.'] WHERE case_id = 'CASE 6.2.091' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 92". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Every corporation must distribute a cash dividend to shareholders in each financial year by law."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 44, \quad \text{Shares} = 604,000
$$

$$
\text{MCap} = 44 \times 604,000 = €26.58\text{ million}
$$

Threshold: exceeds €20.3 million. Actual €26.58 million.

Reading the arithmetic against the claim: market cap €26.58m exceeds €20.3m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 44, \quad P_{\min} = 35
$$

$$
\frac{44 - 35}{35} = 25.7\%
$$

Threshold: more than 14.3%. Actual 25.7%.

Reading the arithmetic against the claim: the gap is 25.7%, which exceeds 14.3% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 376,000, \quad \text{Shares} = 604,000
$$

$$
\frac{376,000}{604,000} = 62.3\%
$$

Threshold: exceed 28%. Actual 62.3%.

Reading the arithmetic against the claim: turnover 62.3% exceeds 28% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 89,000 \quad (March)
$$

Threshold: exceeds 65,605. Actual 89,000.

Reading the arithmetic against the claim: peak volume 89,000 exceeds 65,605 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.092' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Retained Earnings and Equity Growth". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a hotel chain charges on its kitchen equipment each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a software developer is depreciated in exactly the same way as its office computer equipment,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Retained Earnings and Equity Growth". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a electronics retailer charges on its point-of-sale tills each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Retained Earnings and Equity Growth". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a logistics company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Retained Earnings and Equity Growth". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a dairy processor repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.093' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 94". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the high…"

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 25
$$

$$
\frac{25 - 20}{20} = 25.0\%
$$

Threshold: more than 16.8%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 16.8% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 656,000
$$

$$
\text{MCap} = 25 \times 656,000 = €16.40\text{ million}
$$

Threshold: exceeds €12.6 million. Actual €16.40 million.

Reading the arithmetic against the claim: market cap €16.40m exceeds €12.6m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 367,000, \quad \text{Shares} = 656,000
$$

$$
\frac{367,000}{656,000} = 55.9\%
$$

Threshold: exceed 26.4%. Actual 55.9%.

Reading the arithmetic against the claim: turnover 55.9% exceeds 26.4% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 93,000 \quad (April)
$$

Threshold: exceeds 56,226. Actual 93,000.

Reading the arithmetic against the claim: peak volume 93,000 exceeds 56,226 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.094' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 95". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Working capital should be positive, meaning current assets should be higher than current liabilities."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 510,000 = €10.20\text{m}
$$

$$
\text{MCap}_{\text{last}} = 24 \times 510,000 = €12.24\text{m}
$$

$$
\frac{12.24 - 10.20}{10.20} = 20.0\%
$$

Threshold: more than 23.2%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which does not exceed 23.2% so the statement does not hold.

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 24
$$

$$
\frac{24 - 20}{20} = 20.0\%
$$

Threshold: more than 15.9%. Actual 20.0%.

Reading the arithmetic against the claim: the rise is 20.0%, which exceeds 15.9% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 24, \quad \text{Shares} = 510,000
$$

$$
\text{MCap} = 24 \times 510,000 = €12.24\text{ million}
$$

Threshold: exceeds €11.5 million. Actual €12.24 million.

Reading the arithmetic against the claim: market cap €12.24m exceeds €11.5m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 363,000, \quad \text{Shares} = 510,000
$$

$$
\frac{363,000}{510,000} = 71.2\%
$$

Threshold: exceed 10.4%. Actual 71.2%.

Reading the arithmetic against the claim: turnover 71.2% exceeds 10.4% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.095' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a logistics company is depreciated in exactly the same way as its forklift trucks,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loss and Retained Earnings Decline". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a dairy processor charges on its refrigerated trucks each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loss and Retained Earnings Decline". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a fitness club chain charges on its exercise equipment each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loss and Retained Earnings Decline". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a car parts manufacturer charges on its stamping presses each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loss and Retained Earnings Decline". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.096' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 97". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Holders of preferred shares always vote at meetings, while common shareholders hold equity without voting rights."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 45, \quad \text{Shares} = 639,000
$$

$$
\text{MCap} = 45 \times 639,000 = €28.75\text{ million}
$$

Threshold: exceeds €23.7 million. Actual €28.75 million.

Reading the arithmetic against the claim: market cap €28.75m exceeds €23.7m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 639,000 = €23.00\text{m}
$$

$$
\text{MCap}_{\text{last}} = 45 \times 639,000 = €28.75\text{m}
$$

$$
\frac{28.75 - 23.00}{23.00} = 25.0\%
$$

Threshold: more than 14.6%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 14.6% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 45, \quad P_{\min} = 36
$$

$$
\frac{45 - 36}{36} = 25.0\%
$$

Threshold: more than 31.3%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which does not exceed 31.3% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 63,000 \quad (April)
$$

Threshold: exceeds 63,979. Actual 63,000.

Reading the arithmetic against the claim: peak volume 63,000 does not exceed 63,979 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.097' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Statement of Profit and Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this fitness club chain, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this fitness club chain, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Statement of Profit and Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this fitness club chain, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Statement of Profit and Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this fitness club chain, buying new exercise equipment is classified as an investing cash outflow."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this fitness club chain, a positive cash figure is still not the same thing as a profit,. The reason given — profit includes non-cash charges and accruals. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.098' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 99". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 35
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 15.7%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 15.7% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 35, \quad \text{Shares} = 796,000
$$

$$
\text{MCap} = 35 \times 796,000 = €27.86\text{ million}
$$

Threshold: exceeds €22 million. Actual €27.86 million.

Reading the arithmetic against the claim: market cap €27.86m exceeds €22m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 28 \times 796,000 = €22.29\text{m}
$$

$$
\text{MCap}_{\text{last}} = 35 \times 796,000 = €27.86\text{m}
$$

$$
\frac{27.86 - 22.29}{22.29} = 25.0\%
$$

Threshold: more than 23.5%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 23.5% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 364,000, \quad \text{Shares} = 796,000
$$

$$
\frac{364,000}{796,000} = 45.7\%
$$

Threshold: exceed 28.1%. Actual 45.7%.

Reading the arithmetic against the claim: turnover 45.7% exceeds 28.1% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.099' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 100". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Market capitalisation is the total market value of a company''s outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 23, \quad P_{\text{last}} = 28
$$

$$
\frac{28 - 23}{23} = 21.7\%
$$

Threshold: more than 15%. Actual 21.7%.

Reading the arithmetic against the claim: the rise is 21.7%, which exceeds 15% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 28, \quad \text{Shares} = 474,000
$$

$$
\text{MCap} = 28 \times 474,000 = €13.27\text{ million}
$$

Threshold: exceeds €10.4 million. Actual €13.27 million.

Reading the arithmetic against the claim: market cap €13.27m exceeds €10.4m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 23 \times 474,000 = €10.90\text{m}
$$

$$
\text{MCap}_{\text{last}} = 28 \times 474,000 = €13.27\text{m}
$$

$$
\frac{13.27 - 10.90}{10.90} = 21.7\%
$$

Threshold: more than 13.4%. Actual 21.7%.

Reading the arithmetic against the claim: MCap rose 21.7%, which exceeds 13.4% so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 22
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 20.6%. Actual 27.3%.

Reading the arithmetic against the claim: the gap is 27.3%, which exceeds 20.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.100' AND tier = 'full';
