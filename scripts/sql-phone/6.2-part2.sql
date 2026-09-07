-- Update expanded explanations for 6.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a construction firm is normally left out of the depreciation schedule. The reason given — , unlike its heavy construction machinery, land does not wear out through ordinary use. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Book Value After Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a garage makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Book Value After Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The depreciation that a hotel chain charges on its kitchen equipment each year is a non-cash expense, since the related cash was already paid out when the kitchen equipment was originally purchased."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Book Value After Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A complete financial statement for a business typically brings together a balance sheet, a statement of profit and loss and a cash flow statement."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Book Value After Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a furniture maker earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is false.'] WHERE case_id = 'CASE 6.2.026' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Annual Depreciation Chart 27". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement."

The statement is true.', 'FALSE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{170,000 - 0}{8} = 21,250
$$

$$
\text{Asset B – Delivery truck}: \frac{52,000 - 7,000}{6} = 7,500
$$

$$
\text{Asset C – Computer equipment}: \frac{20,000 - 0}{3} = 6,667
$$

$$
\text{Combined} = 35,417
$$

Claimed €32,858. Actual ≈ €35,417.

Reading the arithmetic against the claim: combined charge ≈ €35,417 versus claimed €32,858 so the statement does not hold.

The statement is false.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{52,000 - 7,000}{6} = 7,500
$$

$$
BV_{3} = 52,000 - 3 \times 7,500 = 29,500
$$

Claimed €33,574. Actual ≈ €29,500.

Reading the arithmetic against the claim: carrying value ≈ €29,500 versus claimed €33,574 so the statement does not hold.

The statement is false.', 'FALSE — Straight-line depreciation uses cost minus residual value over useful life.

Name the identity in words: depreciable amount = cost − residual; annual charge = depreciable amount ÷ life.

Residual value is deducted before spreading. Claiming that residual value is ignored contradicts the straight-line rule.

The statement is false.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €20,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.027' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 388, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 437
$$

$$
\frac{437 - 388}{388} = 12.6\%
$$

$$
12.6\% \le  28\%
$$

The actual growth is 12.6%, which is not more than the claimed 28%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 28". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 28". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 28". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 28". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets."

The statement is true.'] WHERE case_id = 'CASE 6.2.028' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Land and Non-Depreciable Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a brewery makes a loss for the year, that loss is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land and Non-Depreciable Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet is drawn up at a single point in time, whereas the statement of profit and loss and the cash flow statement each summarise activity across an accounting period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Land and Non-Depreciable Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a textile mill earns a profit for the year, that profit is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land and Non-Depreciable Assets". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Turnover for the year is reported in the statement of profit and loss rather than in the balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a bakery is depreciated in exactly the same way as its commercial ovens,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.'] WHERE case_id = 'CASE 6.2.029' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Liquidity From the Balance Sheet 30". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cost of sales includes administration costs, shipping to customers and sales-staff costs."

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 276 + 96 + 103 = 475
$$

$$
CL = 76 + 63 = 139
$$

$$
\text{Current ratio} = \frac{475}{139} = 3.4173
$$

Claimed: exceeds 1.65. Actual 3.42.

Reading the arithmetic against the claim: actual current ratio 3.42 versus ''exceeds 1.65'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 475 and current liabilities total 139:

$$
WC = CA - CL
$$

$$
CA = 475, \quad CL = 139
$$

$$
WC = 475 - 139 = 336
$$

The statement cites working capital of €336 thousand and that it is positive. Calculated WC is 336, which is positive.

Reading the arithmetic against the claim: WC = 336 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 475, \quad \text{Inventory} = 276, \quad CL = 139
$$

$$
CA - \text{Inventory} = 475 - 276 = 199
$$

$$
\text{Acid-test} = \frac{199}{139} = 1.4317
$$

Threshold: more than 0.96. Actual 1.43.

Reading the arithmetic against the claim: acid-test 1.43 is more than 0.96 so the statement holds.

The statement is true.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 835 and total assets = 1,257. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{835}{1,257}
$$

$$
ER = 66.4\%
$$

Claimed: is below 42.5%. Actual 66.4%.

Reading the arithmetic against the claim: actual equity ratio 66.4% does not match ''is below 42.5%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.030' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 31". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities."

The statement is true.', 'FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 388, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 416
$$

$$
\frac{416 - 388}{388} = 7.2\%
$$

$$
7.2\% \le  23.2\%
$$

The actual growth is 7.2%, which is not more than the claimed 23.2%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 31". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 31". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Land is depreciated on a straight-line basis just like buildings and machinery."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 31". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Purchase of office equipment for cash is classified as an operating cash outflow."

The statement is false.'] WHERE case_id = 'CASE 6.2.031' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Raises Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this fitness club chain, the dividends paid line of (11500) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Raises Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this fitness club chain, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this fitness club chain, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Raises Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this fitness club chain, the investing outflow of 36,000 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Raises Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this fitness club chain, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.'] WHERE case_id = 'CASE 6.2.032' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loss Reduces Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable amount of an asset, its cost less any expected residual value, is spread evenly over its useful life."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is generally treated differently from buildings, machinery and vehicles. The reason given — it does not wear out through use and is normally not depreciated. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A profit earned during the year increases the equity reported on the balance sheet, usually. The reason given — it is added to retained earnings. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loss Reduces Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A loss incurred during the year reduces the equity reported on the balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loss Reduces Equity". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year and the net change in cash and cash equivalents for the year are different measures that will not usually be equal."

The statement is true.'] WHERE case_id = 'CASE 6.2.033' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 34". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs."

The statement is true.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 805, \quad
\text{Revenue}_{\text{Y2}} = 972
$$

$$
\frac{972 - 805}{805} = 20.7\%
$$

$$
20.7\% > 20.7\%
$$

The actual growth is 20.7%, which is more than the claimed 20.7%.

The statement is true.', 'TRUE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 195, \quad
\text{Profit for the year}_{\text{Y2}} = 241
$$

$$
\frac{241 - 195}{195} = 23.6\%
$$

$$
23.6\% > 9.1\%
$$

The actual growth is 23.6%, which is more than the claimed 9.1%.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 256 and finance costs = 15. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{256}{15}
$$

$$
Coverage = 17.0667
$$

Threshold: more than 9.29. Actual 17.07.

Reading the arithmetic against the claim: coverage 17.07 exceeds 9.29 so the statement holds.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{328}{805} = 40.7\%
$$

$$
GPM_{2} = \frac{404}{972} = 41.6\%
$$

$$
\Delta = 0.8\text{ percentage points}
$$

Threshold: more than 2.5 pp higher in Year 2. Actual Δ = 0.8 pp.

Reading the arithmetic against the claim: margin rose by 0.8 pp versus more than 2.5 pp so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.034' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Annual Depreciation Chart 35". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement."

The statement is true.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{124,000 - 0}{11} = 11,273
$$

$$
\text{Asset B – Delivery truck}: \frac{46,000 - 4,000}{6} = 7,000
$$

$$
\text{Asset C – Computer equipment}: \frac{18,000 - 0}{3} = 6,000
$$

$$
\text{Combined} = 24,273
$$

Claimed €24,273. Actual ≈ €24,273.

Reading the arithmetic against the claim: combined charge ≈ €24,273 versus claimed €24,273 so the statement holds.

The statement is true.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €18,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 90,182
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 25,000
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €115,182
$$

Threshold: exceeds €106,072.

Reading the arithmetic against the claim: combined BV ≈ €115,182 versus exceeds €106,072 so the statement holds.

The statement is true.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{46,000 - 4,000}{6} = 7,000
$$

$$
BV_{3} = 46,000 - 3 \times 7,000 = 25,000
$$

Claimed €28,880. Actual ≈ €25,000.

Reading the arithmetic against the claim: carrying value ≈ €25,000 versus claimed €28,880 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.035' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 325, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 367
$$

$$
\frac{367 - 325}{325} = 12.9\%
$$

$$
12.9\% \le  24.7\%
$$

The actual growth is 12.9%, which is not more than the claimed 24.7%.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 36". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Purchase of office equipment for cash is classified as an operating cash outflow."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 36". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The income statement reports assets, liabilities and equity on a single reporting date."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 36". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 36". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs."

The statement is true.'] WHERE case_id = 'CASE 6.2.036' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Versus Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Versus Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a hotel chain charges on its kitchen equipment each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Versus Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a software developer is depreciated in exactly the same way as its office computer equipment,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Versus Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period."

The statement is true.'] WHERE case_id = 'CASE 6.2.037' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Turnover and the Balance Sheet". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this publishing house, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Turnover and the Balance Sheet". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this publishing house, the dividends paid line of (16600) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this publishing house, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Turnover and the Balance Sheet". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this publishing house, the investing outflow of 41,400 euros means the business must be failing."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Turnover and the Balance Sheet". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this publishing house, repayments of borrowed money count as operating cash outflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.038' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Liquidity From the Balance Sheet 39". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year."

The statement is true.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 276, \quad \text{Inventory} = 119, \quad CL = 132
$$

$$
CA - \text{Inventory} = 276 - 119 = 157
$$

$$
\text{Acid-test} = \frac{157}{132} = 1.1894
$$

Threshold: more than 1.35. Actual 1.19.

Reading the arithmetic against the claim: acid-test 1.19 is not more than 1.35 so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 119 + 60 + 97 = 276
$$

$$
CL = 74 + 58 = 132
$$

$$
\text{Current ratio} = \frac{276}{132} = 2.0909
$$

Claimed: exceeds 1.28. Actual 2.09.

Reading the arithmetic against the claim: actual current ratio 2.09 versus ''exceeds 1.28'' so the statement holds.

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 276 and current liabilities total 132:

$$
WC = CA - CL
$$

$$
CA = 276, \quad CL = 132
$$

$$
WC = 276 - 132 = 144
$$

The statement cites working capital of €144 thousand and that it is positive. Calculated WC is 144, which is positive.

Reading the arithmetic against the claim: WC = 144 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 307 and total assets = 860. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{307}{860}
$$

$$
Share = 35.7\%
$$

Threshold: more than 47.1%. Actual 35.7%.

Reading the arithmetic against the claim: actual share 35.7% does not match ''more than 47.1%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.039' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 391, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 441
$$

$$
\frac{441 - 391}{391} = 12.8\%
$$

$$
12.8\% > 7.2\%
$$

The actual growth is 12.8%, which is more than the claimed 7.2%.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 40". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The income statement reports assets, liabilities and equity on a single reporting date."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 40". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 40". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Land is depreciated on a straight-line basis just like buildings and machinery."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 40". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Customer collections of receivables are classified as financing cash inflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.040' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Revenue and Operating Result Chart 41". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities."

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{349}{913} = 38.2\%
$$

$$
GPM_{2} = \frac{408}{1,073} = 38.0\%
$$

$$
\Delta = -0.2\text{ percentage points}
$$

Threshold: more than 6 pp higher in Year 2. Actual Δ = -0.2 pp.

Reading the arithmetic against the claim: margin rose by -0.2 pp versus more than 6 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 268, \quad
\text{The operating result}_{\text{Y2}} = 310
$$

$$
\frac{310 - 268}{268} = 15.7\%
$$

$$
15.7\% \le  22.2\%
$$

The actual growth is 15.7%, which is not more than the claimed 22.2%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 198, \quad
\text{Profit for the year}_{\text{Y2}} = 223
$$

$$
\frac{223 - 198}{198} = 12.6\%
$$

$$
12.6\% \le  29.8\%
$$

The actual growth is 12.6%, which is not more than the claimed 29.8%.

The statement is false.', 'FALSE — Compute each year''s effective tax rate, then the change in percentage points.

Name the identity in words: ETR = income taxes ÷ profit before tax; Δ = ETR₂ − ETR₁.

$$
ETR_{1} = 22.4\%
$$

$$
ETR_{2} = 22.8\%
$$

$$
\Delta = +0.5\text{ percentage points}
$$

Threshold: rose by more than 1.3 pp. Actual +0.5 pp.

Reading the arithmetic against the claim: ETR changed by +0.5 pp versus more than 1.3 pp so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.041' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under the indirect method, non-cash expenses are added back to profit.

Depreciation reduced profit without using cash, so it is added back when reconciling to operating cash.

Using the stem facts: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciable Amount and Residual Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The balance sheet, like the statement of profit and loss and the cash flow statement, is drawn up to summarise an entire accounting period rather than one specific date."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciable Amount and Residual Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciable Amount and Residual Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ."

The statement is true.', 'TRUE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.042' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Bakery Oven Depreciation Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Bakery Oven Depreciation Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Turnover for the year is reported in the balance sheet rather than in the statement of profit and loss."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Bakery Oven Depreciation Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Bakery Oven Depreciation Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Bakery Oven Depreciation Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a electronics retailer purchases new point-of-sale tills for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.043' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Schedule Review 44". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period."

The statement is true.', 'TRUE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{48,000 - 7,000}{6} = 6,833
$$

$$
BV_{3} = 48,000 - 3 \times 6,833 = 27,500
$$

Claimed €27,500. Actual ≈ €27,500.

Reading the arithmetic against the claim: carrying value ≈ €27,500 versus claimed €27,500 so the statement holds.

The statement is true.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €21,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 88,727
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 27,500
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €116,227
$$

Threshold: exceeds €101,344.

Reading the arithmetic against the claim: combined BV ≈ €116,227 versus exceeds €101,344 so the statement holds.

The statement is true.', 'TRUE — Depreciation writes assets down as their service potential is consumed.

If depreciation is omitted, non-current assets stay at historical cost on the balance sheet. That overstates the assets relative to the portion of benefits already used up in operations.

Applied to this stem: "Without recording depreciation on the €122,000 machinery, non-current assets on the balance sheet would be overstated."

The statement is true.'] WHERE case_id = 'CASE 6.2.044' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 305, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 354
$$

$$
\frac{354 - 305}{305} = 16.1\%
$$

$$
16.1\% \le  19.1\%
$$

The actual growth is 16.1%, which is not more than the claimed 19.1%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 45". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 45". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instea…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 45". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Paying dividends is classified as an investing cash outflow. The reason — it uses cash belonging to shareholders. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.'] WHERE case_id = 'CASE 6.2.045' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Courier Van Fleet Cash Outflow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this catering company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Courier Van Fleet Cash Outflow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this catering company, the dividends paid line of (21700) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this catering company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Courier Van Fleet Cash Outflow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this catering company, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Courier Van Fleet Cash Outflow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this catering company, buying new catering vans is classified as an investing cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.046' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Structure Review 47". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Land is depreciated on a straight-line basis just like buildings and machinery."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 190 + 96 + 82 = 368
$$

$$
CL = 227 + 86 = 313
$$

$$
\text{Current ratio} = \frac{368}{313} = 1.1757
$$

Claimed: exceeds 1.58. Actual 1.18.

Reading the arithmetic against the claim: actual current ratio 1.18 versus ''exceeds 1.58'' so the statement does not hold.

The statement is false.', 'FALSE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 368, \quad \text{Inventory} = 190, \quad CL = 313
$$

$$
CA - \text{Inventory} = 368 - 190 = 178
$$

$$
\text{Acid-test} = \frac{178}{313} = 0.5687
$$

Threshold: more than 1.15. Actual 0.57.

Reading the arithmetic against the claim: acid-test 0.57 is not more than 1.15 so the statement does not hold.

The statement is false.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 746 and total assets = 1,145. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{746}{1,145}
$$

$$
DR = 65.2\%
$$

Claimed: exceeds 66.8%. Actual 65.2%.

Reading the arithmetic against the claim: actual debt ratio 65.2% does not match ''exceeds 66.8%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 368 and current liabilities total 313:

$$
WC = CA - CL
$$

$$
CA = 368, \quad CL = 313
$$

$$
WC = 368 - 313 = 55
$$

The statement cites working capital of €55 thousand and that it is positive. Calculated WC is 55, which is positive.

Reading the arithmetic against the claim: WC = 55 is positive as claimed so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.047' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Construction Firm Machinery Financing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet of a courier firm shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the wh…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Construction Firm Machinery Financing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Construction Firm Machinery Financing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a bakery is normally left out of the depreciation schedule. The reason given — , unlike its commercial ovens, land does not wear out through ordinary use. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Construction Firm Machinery Financing". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use."

The statement is false.'] WHERE case_id = 'CASE 6.2.048' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A positive cash flow is not identical with a profit,. The reason given — profit includes non-cash charges and accruals that cash flow does not. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 49". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 49". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 49". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 49". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.049' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Hotel Chain Kitchen Equipment Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation is a cash expense in the statement of profit and loss that triggers an actual cash payment in the year it is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Hotel Chain Kitchen Equipment Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Under the straight-line method, the depreciable amount of an asset is spread unevenly across its useful life, producing a different charge each year."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is depreciated in exactly the same way as buildings, machinery and vehicles. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Hotel Chain Kitchen Equipment Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The depreciation that a courier firm charges on its delivery vans each year is a non-cash expense, since the related cash was already paid out when the delivery vans was originally purchased."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Hotel Chain Kitchen Equipment Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A profit earned during the year reduces the equity reported on the balance sheet."

The statement is false.'] WHERE case_id = 'CASE 6.2.050' AND tier = 'full';
