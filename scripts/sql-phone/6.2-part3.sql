-- Update expanded explanations for 6.2-part3 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Revenue and Operating Result Chart 51". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cost of sales includes administration costs, shipping to customers and sales-staff costs."

The statement is false.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{346}{897} = 38.6\%
$$

$$
GPM_{2} = \frac{401}{1,043} = 38.4\%
$$

$$
\Delta = -0.1\text{ percentage points}
$$

Threshold: more than 3.4 pp higher in Year 2. Actual Δ = -0.1 pp.

Reading the arithmetic against the claim: margin rose by -0.1 pp versus more than 3.4 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 278, \quad
\text{The operating result}_{\text{Y2}} = 309
$$

$$
\frac{309 - 278}{278} = 11.2\%
$$

$$
11.2\% \le  22.7\%
$$

The actual growth is 11.2%, which is not more than the claimed 22.7%.

The statement is false.', 'FALSE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 897, \quad
\text{Revenue}_{\text{Y2}} = 1,043
$$

$$
\frac{1,043 - 897}{897} = 16.3\%
$$

$$
16.3\% \le  19.9\%
$$

The actual growth is 16.3%, which is not more than the claimed 19.9%.

The statement is false.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 278 and finance costs = 22. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{278}{22}
$$

$$
Coverage = 12.6364
$$

Threshold: more than 11.31. Actual 12.64.

Reading the arithmetic against the claim: coverage 12.64 exceeds 11.31 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.051' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation Schedule Review 52". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Customer collections of receivables are classified as financing cash inflows."

The statement is false.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{46,000 - 7,000}{6} = 6,500
$$

$$
BV_{3} = 46,000 - 3 \times 6,500 = 26,500
$$

Claimed €31,138. Actual ≈ €26,500.

Reading the arithmetic against the claim: carrying value ≈ €26,500 versus claimed €31,138 so the statement does not hold.

The statement is false.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{168,000 - 0}{10} = 16,800
$$

$$
\text{Asset B – Delivery truck}: \frac{46,000 - 7,000}{6} = 6,500
$$

$$
\text{Asset C – Computer equipment}: \frac{18,000 - 0}{3} = 6,000
$$

$$
\text{Combined} = 29,300
$$

Claimed €29,300. Actual ≈ €29,300.

Reading the arithmetic against the claim: combined charge ≈ €29,300 versus claimed €29,300 so the statement holds.

The statement is true.', 'FALSE — Straight-line depreciation uses cost minus residual value over useful life.

Name the identity in words: depreciable amount = cost − residual; annual charge = depreciable amount ÷ life.

Residual value is deducted before spreading. Claiming that residual value is ignored contradicts the straight-line rule.

The statement is false.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 117,600
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 26,500
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €144,100
$$

Threshold: exceeds €135,854.

Reading the arithmetic against the claim: combined BV ≈ €144,100 versus exceeds €135,854 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.052' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 53". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Customer collections of receivables are classified as financing cash inflows."

The statement is false.', 'TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 321, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 388
$$

$$
\frac{388 - 321}{321} = 20.9\%
$$

$$
20.9\% > 12.6\%
$$

The actual growth is 20.9%, which is more than the claimed 12.6%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 53". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 53". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The income statement reports assets, liabilities and equity on a single reporting date."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Paying dividends is classified as an investing cash outflow. The reason — it uses cash belonging to shareholders. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.'] WHERE case_id = 'CASE 6.2.053' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Liquidity From the Balance Sheet 54". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year."

The statement is true.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 336 and current liabilities total 272:

$$
WC = CA - CL
$$

$$
CA = 336, \quad CL = 272
$$

$$
WC = 336 - 272 = 64
$$

The statement cites working capital of €64 thousand and that it is positive. Calculated WC is 64, which is positive.

Reading the arithmetic against the claim: WC = 64 is positive as claimed so the statement holds.

The statement is true.', 'TRUE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 298 and total assets = 975. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{298}{975}
$$

$$
ER = 30.6\%
$$

Claimed: is below 35.2%. Actual 30.6%.

Reading the arithmetic against the claim: actual equity ratio 30.6% matches ''is below 35.2%'' so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 234 + 62 + 40 = 336
$$

$$
CL = 209 + 63 = 272
$$

$$
\text{Current ratio} = \frac{336}{272} = 1.2353
$$

Claimed: is below 1.04. Actual 1.24.

Reading the arithmetic against the claim: actual current ratio 1.24 versus ''is below 1.04'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 677 and total assets = 975. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{677}{975}
$$

$$
DR = 69.4\%
$$

Claimed: exceeds 45.4%. Actual 69.4%.

Reading the arithmetic against the claim: actual debt ratio 69.4% matches ''exceeds 45.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.054' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 316, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 347
$$

$$
\frac{347 - 316}{316} = 9.8\%
$$

$$
9.8\% > 7.5\%
$$

The actual growth is 9.8%, which is more than the claimed 7.5%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 55". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow state…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 55". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 55". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instea…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 55". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.055' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Software Developer Profit and Cash Gap". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, the dividends paid line of (26800) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Software Developer Profit and Cash Gap". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this bakery, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Software Developer Profit and Cash Gap". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Software Developer Profit and Cash Gap". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, buying new commercial ovens is classified as an investing cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.056' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Revenue and Operating Result Chart 57". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost."

The statement is true.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 860, \quad
\text{Revenue}_{\text{Y2}} = 986
$$

$$
\frac{986 - 860}{860} = 14.7\%
$$

$$
14.7\% > 10.6\%
$$

The actual growth is 14.7%, which is more than the claimed 10.6%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 57.1\%
$$

$$
\text{OR growth} = 10.5\%
$$

Finance costs did grow by more than 22.9%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 57.1% vs threshold 22.9% and OR growth 10.5% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 277 and finance costs = 14. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{277}{14}
$$

$$
Coverage = 19.7857
$$

Threshold: more than 5.11. Actual 19.79.

Reading the arithmetic against the claim: coverage 19.79 exceeds 5.11 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 306 and revenue = 986. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{306}{986}
$$

$$
OM = 31.0\%
$$

Threshold: exceeds 21.9% in Year 2. Actual 31.0%.

Reading the arithmetic against the claim: operating margin 31.0% exceeds 21.9% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.057' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Schedule Review 58". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow state…"

The statement is true.', 'TRUE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{49,000 - 4,000}{6} = 7,500
$$

$$
BV_{3} = 49,000 - 3 \times 7,500 = 26,500
$$

Claimed €26,500. Actual ≈ €26,500.

Reading the arithmetic against the claim: carrying value ≈ €26,500 versus claimed €26,500 so the statement holds.

The statement is true.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 121,500
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 26,500
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €148,000
$$

Threshold: exceeds €135,918.

Reading the arithmetic against the claim: combined BV ≈ €148,000 versus exceeds €135,918 so the statement holds.

The statement is true.', 'TRUE — Depreciation writes assets down as their service potential is consumed.

If depreciation is omitted, non-current assets stay at historical cost on the balance sheet. That overstates the assets relative to the portion of benefits already used up in operations.

Applied to this stem: "Without recording depreciation on the €162,000 machinery, non-current assets on the balance sheet would be overstated."

The statement is true.', 'FALSE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{162,000 - 0}{12} = 13,500
$$

$$
\text{Asset B – Delivery truck}: \frac{49,000 - 4,000}{6} = 7,500
$$

$$
\text{Asset C – Computer equipment}: \frac{18,000 - 0}{3} = 6,000
$$

$$
\text{Combined} = 27,000
$$

Claimed €29,072. Actual ≈ €27,000.

Reading the arithmetic against the claim: combined charge ≈ €27,000 versus claimed €29,072 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.058' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 373, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 434
$$

$$
\frac{434 - 373}{373} = 16.4\%
$$

$$
16.4\% \le  26.3\%
$$

The actual growth is 16.4%, which is not more than the claimed 26.3%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 59". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 59". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities always proves the business is in financial trouble."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 59". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A positive cash flow is not identical with a profit,. The reason given — profit includes non-cash charges and accruals that cash flow does not. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.059' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Garage Diagnostic Equipment Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Turnover for the year is reported in the statement of profit and loss rather than in the balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Garage Diagnostic Equipment Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Profit for the year and the net change in cash and cash equivalents for the year are always identical figures."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Garage Diagnostic Equipment Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation reflects the gradual wearing out of a fixed asset as it is used to help generate revenue over its useful life."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Garage Diagnostic Equipment Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Garage Diagnostic Equipment Charge". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth."

The statement is true.'] WHERE case_id = 'CASE 6.2.060' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Asset Composition Chart 61". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities always proves the business is in financial trouble."

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 403 and current liabilities total 237:

$$
WC = CA - CL
$$

$$
CA = 403, \quad CL = 237
$$

$$
WC = 403 - 237 = 166
$$

The statement cites working capital of €166 thousand and that it is positive. Calculated WC is 166, which is positive.

Reading the arithmetic against the claim: WC = 166 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 185 + 170 + 48 = 403
$$

$$
CL = 193 + 44 = 237
$$

$$
\text{Current ratio} = \frac{403}{237} = 1.7004
$$

Claimed: exceeds 1.71. Actual 1.70.

Reading the arithmetic against the claim: actual current ratio 1.70 versus ''exceeds 1.71'' so the statement does not hold.

The statement is false.', 'TRUE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 734 and total assets = 1,100. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{734}{1,100}
$$

$$
DR = 66.7\%
$$

Claimed: exceeds 60.3%. Actual 66.7%.

Reading the arithmetic against the claim: actual debt ratio 66.7% matches ''exceeds 60.3%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Inventory as a percentage of current assets.

Name the identity in words: Inventory share of current assets = Inventory ÷ current assets.

From the extract, Inventory = 185 and current assets = 403. Plug the figures step by step:

$$
Share = \frac{\text{Inventory}}{\text{current assets}}
$$

$$
Share = \frac{185}{403}
$$

$$
Share = 45.9\%
$$

Threshold: more than 37.4%. Actual 45.9%.

Reading the arithmetic against the claim: actual share 45.9% matches ''more than 37.4%'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.061' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Furniture Maker Depreciation Policy". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from investing activities reflects cash movements arising from the core day-to-day trading of a business during the period."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Furniture Maker Depreciation Policy". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation is charged as an expense in the statement of profit and loss without itself requiring a fresh cash payment in the year it is recorded."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Furniture Maker Depreciation Policy". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from financing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Furniture Maker Depreciation Policy". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities is always a definite sign that a business is in financial difficulty, regardless of the cause."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Furniture Maker Depreciation Policy". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The net change in cash and cash equivalents for a period has no relationship to the cash flows from operating, investing and financing activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.062' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 286, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 328
$$

$$
\frac{328 - 286}{286} = 14.7\%
$$

$$
14.7\% \le  18\%
$$

The actual growth is 14.7%, which is not more than the claimed 18%.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 63". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Purchase of office equipment for cash is classified as an operating cash outflow."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 63". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities always proves the business is in financial trouble."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 63". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cost of sales includes administration costs, shipping to customers and sales-staff costs."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 63". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss."

The statement is true.'] WHERE case_id = 'CASE 6.2.063' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit and Loss Over Two Years 64". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cost of sales includes administration costs, shipping to customers and sales-staff costs."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 64". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The operating result covers finance costs less than 10.26 times over in Year 2."

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 221 and revenue = 833. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{221}{833}
$$

$$
OM = 26.5\%
$$

Threshold: exceeds 16.7% in Year 2. Actual 26.5%.

Reading the arithmetic against the claim: operating margin 26.5% exceeds 16.7% so the statement holds.

The statement is true.', 'TRUE — Effective tax rate in Year 1 is income taxes divided by profit before tax.

Name the identity in words: effective tax rate = income taxes ÷ profit before tax.

From the extract, income taxes = 40 and profit before tax = 197. Plug the figures step by step:

$$
ETR = \frac{\text{income taxes}}{\text{profit before tax}}
$$

$$
ETR = \frac{40}{197}
$$

$$
ETR = 20.3\%
$$

Threshold: below 21.9% in Year 1. Actual 20.3%.

Reading the arithmetic against the claim: ETR 20.3% is below 21.9% so the statement holds.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 64". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales is deducted from revenue to arrive at gross profit."

The statement is true.'] WHERE case_id = 'CASE 6.2.064' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Collecting payment on a trade receivable is cash from operating activities. The reason given — it comes from the core trading cycle. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{135,000 - 0}{11} = 12,273
$$

$$
\text{Asset B – Delivery truck}: \frac{55,000 - 7,000}{6} = 8,000
$$

$$
\text{Asset C – Computer equipment}: \frac{19,000 - 0}{3} = 6,333
$$

$$
\text{Combined} = 26,606
$$

Claimed €27,656. Actual ≈ €26,606.

Reading the arithmetic against the claim: combined charge ≈ €26,606 versus claimed €27,656 so the statement does not hold.

The statement is false.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 98,182
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 31,000
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €129,182
$$

Threshold: exceeds €111,069.

Reading the arithmetic against the claim: combined BV ≈ €129,182 versus exceeds €111,069 so the statement holds.

The statement is true.', 'TRUE — Depreciation writes assets down as their service potential is consumed.

If depreciation is omitted, non-current assets stay at historical cost on the balance sheet. That overstates the assets relative to the portion of benefits already used up in operations.

Applied to this stem: "Without recording depreciation on the €135,000 machinery, non-current assets on the balance sheet would be overstated."

The statement is true.', 'TRUE — Straight-line spreads the depreciable amount evenly over useful life.

Name the identity in words: annual charge = (cost − residual) ÷ life.

With a fixed depreciable amount and a fixed life, each year receives the same charge. When residual is nil, that charge is simply cost ÷ life.

Applied to this stem: "Straight-line depreciation on the €135,000 machinery charges the same amount each year of its useful life, since it has no residual value."

The statement is true.'] WHERE case_id = 'CASE 6.2.065' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Brewery Investing Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this hotel chain, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Brewery Investing Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Brewery Investing Cash Flow". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, buying new kitchen equipment is classified as an investing cash outflow."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this hotel chain, a positive cash figure is still not the same thing as a profit,. The reason given — profit includes non-cash charges and accruals. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.066' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Textile Mill Machinery Book Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Textile Mill Machinery Book Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is deducted a second time from profit."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Textile Mill Machinery Book Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Textile Mill Machinery Book Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Textile Mill Machinery Book Value". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities in a given year often simply reflects that a business has been purchasing long-term assets, rather than facing financial difficulty."

The statement is true.'] WHERE case_id = 'CASE 6.2.067' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 376, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 413
$$

$$
\frac{413 - 376}{376} = 9.8\%
$$

$$
9.8\% > 9.1\%
$$

The actual growth is 9.8%, which is more than the claimed 9.1%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 68". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 68". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 68". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 68". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.068' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Printing Press Cash Flow Impact". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Accumulated depreciation is added to the original cost of a fixed asset to arrive at its carrying value."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Printing Press Cash Flow Impact". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A rise in inventory or trade receivables during the year has no effect on cash and is fully reflected in profit for the period in exactly the same way."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Printing Press Cash Flow Impact". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The net change in cash and cash equivalents for a period is calculated by adding together the cash flows from operating, investing and financing activities."

The statement is true.', 'FALSE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business that reports a profit for the year can never see its cash and cash equivalents fall over that same year."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Printing Press Cash Flow Impact". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.069' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Asset Composition Chart 70". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted."

The statement is true.', 'TRUE — The acid-test (quick) ratio is a stricter liquidity test: inventory is removed from current assets before dividing by current liabilities.

Name the identity in words: acid-test ratio = (current assets − inventory) ÷ current liabilities.

$$
CA = 276, \quad \text{Inventory} = 87, \quad CL = 285
$$

$$
CA - \text{Inventory} = 276 - 87 = 189
$$

$$
\text{Acid-test} = \frac{189}{285} = 0.6632
$$

Threshold: more than 0.66. Actual 0.66.

Reading the arithmetic against the claim: acid-test 0.66 is more than 0.66 so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Trade receivables as a percentage of current assets.

Name the identity in words: Trade receivables share of current assets = Trade receivables ÷ current assets.

From the extract, Trade receivables = 109 and current assets = 276. Plug the figures step by step:

$$
Share = \frac{\text{Trade receivables}}{\text{current assets}}
$$

$$
Share = \frac{109}{276}
$$

$$
Share = 39.5\%
$$

Threshold: less than 44.1%. Actual 39.5%.

Reading the arithmetic against the claim: actual share 39.5% matches ''less than 44.1%'' so the statement holds.

The statement is true.', 'TRUE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 80 and current assets = 276. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{80}{276}
$$

$$
Share = 29.0\%
$$

Threshold: more than 16.8%. Actual 29.0%.

Reading the arithmetic against the claim: actual share 29.0% matches ''more than 16.8%'' so the statement holds.

The statement is true.', 'TRUE — Inventory is held for sale or for consumption in the operating cycle.

On the balance sheet that places inventory among current assets. It is not an intangible (no physical stock for sale) and not a non-current operating asset (those are used in the business beyond one year rather than turned over as stock).

Applied to this stem: "Inventory of €87 thousand is correctly classified as a current asset rather than a non-current intangible asset."

The statement is true.'] WHERE case_id = 'CASE 6.2.070' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 377, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 415
$$

$$
\frac{415 - 377}{377} = 10.1\%
$$

$$
10.1\% > 8.9\%
$$

The actual growth is 10.1%, which is more than the claimed 8.9%.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 71". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow state…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Collecting payment on a trade receivable is cash from operating activities. The reason given — it comes from the core trading cycle. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 71". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instea…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 71". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets."

The statement is true.'] WHERE case_id = 'CASE 6.2.071' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A positive cash flow is not identical with a profit,. The reason given — profit includes non-cash charges and accruals that cash flow does not. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{337}{804} = 41.9\%
$$

$$
GPM_{2} = \frac{387}{915} = 42.3\%
$$

$$
\Delta = 0.4\text{ percentage points}
$$

Threshold: more than 5.4 pp higher in Year 2. Actual Δ = 0.4 pp.

Reading the arithmetic against the claim: margin rose by 0.4 pp versus more than 5.4 pp so the statement does not hold.

The statement is false.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 245, \quad
\text{The operating result}_{\text{Y2}} = 272
$$

$$
\frac{272 - 245}{245} = 11.0\%
$$

$$
11.0\% \le  28.4\%
$$

The actual growth is 11.0%, which is not more than the claimed 28.4%.

The statement is false.', 'FALSE — Use the case figures for Profit for the year and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Profit for the year}_{\text{Y1}} = 176, \quad
\text{Profit for the year}_{\text{Y2}} = 196
$$

$$
\frac{196 - 176}{176} = 11.4\%
$$

$$
11.4\% \le  22\%
$$

The actual growth is 11.4%, which is not more than the claimed 22%.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 804, \quad
\text{Revenue}_{\text{Y2}} = 915
$$

$$
\frac{915 - 804}{804} = 13.8\%
$$

$$
13.8\% > 13.8\%
$$

The actual growth is 13.8%, which is more than the claimed 13.8%.

The statement is true.'] WHERE case_id = 'CASE 6.2.072' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Depreciation is a non-cash allocation of a past capital outlay.

Cash left the business when the asset was acquired. The annual depreciation charge merely allocates that past outlay across useful life; recording the charge does not require a fresh cash payment to an outside party in the year of the expense.

Applied to this stem: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded."

The statement is false.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{172,000 - 0}{12} = 14,333
$$

$$
\text{Asset B – Delivery truck}: \frac{57,000 - 4,000}{6} = 8,833
$$

$$
\text{Asset C – Computer equipment}: \frac{24,000 - 0}{3} = 8,000
$$

$$
\text{Combined} = 31,167
$$

Claimed €31,167. Actual ≈ €31,167.

Reading the arithmetic against the claim: combined charge ≈ €31,167 versus claimed €31,167 so the statement holds.

The statement is true.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{57,000 - 4,000}{6} = 8,833
$$

$$
BV_{3} = 57,000 - 3 \times 8,833 = 30,500
$$

Claimed €27,929. Actual ≈ €30,500.

Reading the arithmetic against the claim: carrying value ≈ €30,500 versus claimed €27,929 so the statement does not hold.

The statement is false.', 'FALSE — Depreciated share of machinery cost after three years is three charges over purchase price.

Name the identity in words: depreciated share = (3 × annual charge) ÷ cost.

$$
\text{Annual} = 14,333, \quad \text{Cost} = 172,000
$$

$$
\frac{3 \times 14,333}{172,000} = 25.0\%
$$

Threshold: more than 41.2%. Actual 25.0%.

Reading the arithmetic against the claim: depreciated share 25.0% does not exceed 41.2% so the statement does not hold.

The statement is false.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €24,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.073' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 392, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 451
$$

$$
\frac{451 - 392}{392} = 15.1\%
$$

$$
15.1\% \le  29.8\%
$$

The actual growth is 15.1%, which is not more than the claimed 29.8%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 74". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 74". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Over Two Years 74". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instea…"

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 74". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The income statement reports assets, liabilities and equity on a single reporting date."

The statement is false.'] WHERE case_id = 'CASE 6.2.074' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Arable Farm Land and Tractor". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the dividends paid line of (15000) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Arable Farm Land and Tractor". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this furniture maker, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Arable Farm Land and Tractor". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the investing outflow of 63,000 euros means the business must be failing."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Arable Farm Land and Tractor". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, repayments of borrowed money count as operating cash outflows."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Arable Farm Land and Tractor". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, customer collections of receivables are financing cash inflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.075' AND tier = 'full';
