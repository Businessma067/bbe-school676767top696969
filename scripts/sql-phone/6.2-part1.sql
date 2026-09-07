-- Update expanded explanations for 6.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 1". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 1". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Investing cash flow is an outflow in both years."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 1". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Proceeds from new borrowing were lower in Year 2 than in Year 1."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 1". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Dividends paid rose from Year 1 to Year 2."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 1". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 2". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities."

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{411}{1,055} = 39.0\%
$$

$$
GPM_{2} = \frac{494}{1,281} = 38.6\%
$$

$$
\Delta = -0.4\text{ percentage points}
$$

Threshold: more than 4.8 pp higher in Year 2. Actual Δ = -0.4 pp.

Reading the arithmetic against the claim: margin rose by -0.4 pp versus more than 4.8 pp so the statement does not hold.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 1,055, \quad
\text{Revenue}_{\text{Y2}} = 1,281
$$

$$
\frac{1,281 - 1,055}{1,055} = 21.4\%
$$

$$
21.4\% > 19.8\%
$$

The actual growth is 21.4%, which is more than the claimed 19.8%.

The statement is true.', 'FALSE — Use the case figures for The operating result and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{The operating result}_{\text{Y1}} = 342, \quad
\text{The operating result}_{\text{Y2}} = 400
$$

$$
\frac{400 - 342}{342} = 17.0\%
$$

$$
17.0\% \le  37.5\%
$$

The actual growth is 17.0%, which is not more than the claimed 37.5%.

The statement is false.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 342 and finance costs = 22. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{342}{22}
$$

$$
Coverage = 15.5455
$$

Threshold: more than 9.14. Actual 15.55.

Reading the arithmetic against the claim: coverage 15.55 exceeds 9.14 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Annual Depreciation Chart 3". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss."

The statement is true.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{174,000 - 0}{11} = 15,818
$$

$$
\text{Asset B – Delivery truck}: \frac{46,000 - 7,000}{6} = 6,500
$$

$$
\text{Asset C – Computer equipment}: \frac{19,000 - 0}{3} = 6,333
$$

$$
\text{Combined} = 28,652
$$

Claimed €28,652. Actual ≈ €28,652.

Reading the arithmetic against the claim: combined charge ≈ €28,652 versus claimed €28,652 so the statement holds.

The statement is true.', 'FALSE — Carrying value after three years subtracts three annual charges from cost.

Name the identity in words: carrying value = cost − years elapsed × annual charge.

$$
\text{Annual charge} = \frac{46,000 - 7,000}{6} = 6,500
$$

$$
BV_{3} = 46,000 - 3 \times 6,500 = 26,500
$$

Claimed €30,895. Actual ≈ €26,500.

Reading the arithmetic against the claim: carrying value ≈ €26,500 versus claimed €30,895 so the statement does not hold.

The statement is false.', 'TRUE — With nil residual, the asset is fully written down once elapsed years reach useful life.

$$
\text{Cost} = €19,000, \quad \text{Life} = 3\text{ years}, \quad \text{Residual} = €0
$$

After 3 years: fully written down to nil.

Reading the arithmetic against the claim: 3 years ≥ life 3 with residual 0 so the statement holds.

The statement is true.', 'TRUE — Sum each asset''s carrying value after three years (floored at residual once fully depreciated).

Name the identity in words: combined BV = sum of each asset''s cost − min(3, life) × annual charge (at residual if fully depreciated).

$$
\text{Asset A – Machinery}\ BV_{3} = 126,545
$$
$$
\text{Asset B – Delivery truck}\ BV_{3} = 26,500
$$
$$
\text{Asset C – Computer equipment}\ BV_{3} = 0
$$

$$
\text{Combined BV} \approx €153,045
$$

Threshold: exceeds €143,061.

Reading the arithmetic against the claim: combined BV ≈ €153,045 versus exceeds €143,061 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Balance Sheet as a Point-in-Time Snapshot". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet as a Point-in-Time Snapshot". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, the dividends paid line of (8000) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this bakery, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet as a Point-in-Time Snapshot". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, the investing outflow of 9,000 euros means the business must be failing."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet as a Point-in-Time Snapshot". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, repayments of borrowed money count as operating cash outflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over an Accounting Period". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Turnover for the year is reported in the statement of profit and loss rather than in the balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit and Loss Over an Accounting Period". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation has nothing to do with the wearing out of a fixed asset and is simply an arbitrary entry with no economic meaning."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit and Loss Over an Accounting Period". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit and Loss Over an Accounting Period". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation is a cash expense in the statement of profit and loss that triggers an actual cash payment in the year it is recorded."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over an Accounting Period". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation reflects the gradual wearing out of a fixed asset as it is used to help generate revenue over its useful life."

The statement is true.'] WHERE case_id = 'CASE 6.2.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 6". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities always proves the business is in financial trouble."

The statement is false.', 'TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 314, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 359
$$

$$
\frac{359 - 314}{314} = 14.3\%
$$

$$
14.3\% > 13.7\%
$$

The actual growth is 14.3%, which is more than the claimed 13.7%.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 6". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from financing activities was higher in Year 2 than in Year 1."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Over Two Years 6". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The increase in dividends paid from Year 1 to Year 2 was proportionally smaller than the increase in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Paying dividends is classified as an investing cash outflow. The reason — it uses cash belonging to shareholders. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.'] WHERE case_id = 'CASE 6.2.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Asset Composition Chart 7". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Land is depreciated on a straight-line basis just like buildings and machinery."

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 159 + 158 + 93 = 410
$$

$$
CL = 197 + 81 = 278
$$

$$
\text{Current ratio} = \frac{410}{278} = 1.4748
$$

Claimed: is below 1. Actual 1.47.

Reading the arithmetic against the claim: actual current ratio 1.47 versus ''is below 1'' so the statement does not hold.

The statement is false.', 'FALSE — The equity ratio places equity against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: equity ratio = equity ÷ total assets.

From the extract, equity = 477 and total assets = 1,063. Plug the figures step by step:

$$
ER = \frac{\text{equity}}{\text{total assets}}
$$

$$
ER = \frac{477}{1,063}
$$

$$
ER = 44.9\%
$$

Claimed: is below 23.4%. Actual 44.9%.

Reading the arithmetic against the claim: actual equity ratio 44.9% does not match ''is below 23.4%'' so the statement does not hold.

The statement is false.', 'TRUE — Working capital is the euro surplus (or deficit) of current assets over current liabilities on this balance sheet.

Name the identity in words: working capital = current assets − current liabilities.

From the extract, current assets total 410 and current liabilities total 278:

$$
WC = CA - CL
$$

$$
CA = 410, \quad CL = 278
$$

$$
WC = 410 - 278 = 132
$$

The statement cites working capital of €132 thousand and that it is positive. Calculated WC is 132, which is positive.

Reading the arithmetic against the claim: WC = 132 is positive as claimed so the statement holds.

The statement is true.', 'FALSE — The debt ratio places debt against total assets so the financing structure can be judged on one balance sheet.

Name the identity in words: debt ratio = debt ÷ total assets.

From the extract, debt = 586 and total assets = 1,063. Plug the figures step by step:

$$
DR = \frac{\text{debt}}{\text{total assets}}
$$

$$
DR = \frac{586}{1,063}
$$

$$
DR = 55.1\%
$$

Claimed: exceeds 57.6%. Actual 55.1%.

Reading the arithmetic against the claim: actual debt ratio 55.1% does not match ''exceeds 57.6%'' so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Components of a Financial Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Under the straight-line method, the depreciable amount of an asset is spread unevenly across its useful life, producing a different charge each year."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is depreciated in exactly the same way as buildings, machinery and vehicles. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Components of a Financial Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A profit earned during the year reduces the equity reported on the balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Components of a Financial Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Components of a Financial Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A loss incurred during the year increases the equity reported on the balance sheet."

The statement is false.'] WHERE case_id = 'CASE 6.2.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Operating Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this hotel chain, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Operating Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Operating Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, buying new kitchen equipment is classified as an investing cash outflow."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Operating Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this hotel chain, the dividends paid line of (13100) euros belongs in investing activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Investing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A loss incurred during the year reduces the equity reported on the balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Investing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Profit for the year and the net change in cash and cash equivalents for the year are different measures that will not usually be equal."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Investing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Investing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Investing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is true.'] WHERE case_id = 'CASE 6.2.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Financing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from investing activities reflects cash movements arising from the core day-to-day trading of a business during the period."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Financing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from financing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow From Financing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Financing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities is always a definite sign that a business is in financial difficulty, regardless of the cause."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow From Financing Activities". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The net change in cash and cash equivalents for a period has no relationship to the cash flows from operating, investing and financing activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Negative Investing Cash Flow Explained". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the dividends paid line of (18200) euros belongs in investing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Negative Investing Cash Flow Explained". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the investing outflow of 19,800 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Negative Investing Cash Flow Explained". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this furniture maker, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this furniture maker, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Negative Investing Cash Flow Explained". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, repayments of borrowed money count as operating cash outflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 367, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 397
$$

$$
\frac{397 - 367}{367} = 8.2\%
$$

$$
8.2\% \le  11.7\%
$$

The actual growth is 8.2%, which is not more than the claimed 11.7%.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 13". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow state…"

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 13". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Customer collections of receivables are classified as financing cash inflows."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 13". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 13". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cost of sales includes administration costs, shipping to customers and sales-staff costs."

The statement is false.'] WHERE case_id = 'CASE 6.2.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business that reports a profit for the year can never see its cash and cash equivalents fall over that same year."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Collecting a Trade Receivable". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'TRUE — Under the indirect method, non-cash expenses are added back to profit.

Depreciation reduced profit without using cash, so it is added back when reconciling to operating cash.

Using the stem facts: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Collecting a Trade Receivable". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Collecting a Trade Receivable". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ."

The statement is true.'] WHERE case_id = 'CASE 6.2.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Revenue and Operating Result Chart 15". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The income statement reports assets, liabilities and equity on a single reporting date."

The statement is false.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{381}{1,057} = 36.0\%
$$

$$
GPM_{2} = \frac{458}{1,282} = 35.7\%
$$

$$
\Delta = -0.3\text{ percentage points}
$$

Threshold: more than 4 pp higher in Year 2. Actual Δ = -0.3 pp.

Reading the arithmetic against the claim: margin rose by -0.3 pp versus more than 4 pp so the statement does not hold.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 1,057, \quad
\text{Revenue}_{\text{Y2}} = 1,282
$$

$$
\frac{1,282 - 1,057}{1,057} = 21.3\%
$$

$$
21.3\% > 11.3\%
$$

The actual growth is 21.3%, which is more than the claimed 11.3%.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 297 and finance costs = 16. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{297}{16}
$$

$$
Coverage = 18.5625
$$

Threshold: more than 7.14. Actual 18.56.

Reading the arithmetic against the claim: coverage 18.56 exceeds 7.14 so the statement holds.

The statement is true.', 'TRUE — Operating margin in Year 2 is operating result divided by revenue.

Name the identity in words: operating margin = operating result ÷ revenue.

From the extract, operating result = 349 and revenue = 1,282. Plug the figures step by step:

$$
OM = \frac{\text{operating result}}{\text{revenue}}
$$

$$
OM = \frac{349}{1,282}
$$

$$
OM = 27.2\%
$$

Threshold: exceeds 8.2% in Year 2. Actual 27.2%.

Reading the arithmetic against the claim: operating margin 27.2% exceeds 8.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Depreciation is a non-cash allocation of a past capital outlay.

Cash left the business when the asset was acquired. The annual depreciation charge merely allocates that past outlay across useful life; recording the charge does not require a fresh cash payment to an outside party in the year of the expense.

Applied to this stem: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded."

The statement is false.', 'TRUE — Straight-line annual charge for each asset is (cost − residual) ÷ useful life; sum the three charges.

Name the identity in words: annual charge = (cost − residual) ÷ life; combined = sum of charges.

$$
\text{Asset A – Machinery}: \frac{170,000 - 0}{10} = 17,000
$$

$$
\text{Asset B – Delivery truck}: \frac{57,000 - 6,000}{6} = 8,500
$$

$$
\text{Asset C – Computer equipment}: \frac{22,000 - 0}{3} = 7,333
$$

$$
\text{Combined} = 32,833
$$

Claimed €32,833. Actual ≈ €32,833.

Reading the arithmetic against the claim: combined charge ≈ €32,833 versus claimed €32,833 so the statement holds.

The statement is true.', 'FALSE — Straight-line depreciation uses cost minus residual value over useful life.

Name the identity in words: depreciable amount = cost − residual; annual charge = depreciable amount ÷ life.

Residual value is deducted before spreading. Claiming that residual value is ignored contradicts the straight-line rule.

The statement is false.', 'FALSE — Depreciated share of machinery cost after three years is three charges over purchase price.

Name the identity in words: depreciated share = (3 × annual charge) ÷ cost.

$$
\text{Annual} = 17,000, \quad \text{Cost} = 170,000
$$

$$
\frac{3 \times 17,000}{170,000} = 30.0\%
$$

Threshold: more than 34%. Actual 30.0%.

Reading the arithmetic against the claim: depreciated share 30.0% does not exceed 34% so the statement does not hold.

The statement is false.', 'FALSE — Compare the truck''s straight-line annual charge with the computer''s.

$$
\text{Truck annual} = 8,500, \quad \text{Computer annual} = 7,333
$$

$$
\frac{8,500 - 7,333}{7,333} = 15.9\%
$$

Threshold: more than 71.5% higher. Actual premium 15.9%.

Reading the arithmetic against the claim: premium 15.9% versus more than 71.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Repaying a Long-Term Loan". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Repaying a Long-Term Loan". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Repaying a Long-Term Loan". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Repaying a Long-Term Loan". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a electronics retailer purchases new point-of-sale tills for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Net Change in Cash and Cash Equivalents". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this printing company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Net Change in Cash and Cash Equivalents". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, the dividends paid line of (23300) euros belongs in investing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Net Change in Cash and Cash Equivalents". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, the investing outflow of 25,200 euros means the business must be failing."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Net Change in Cash and Cash Equivalents". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, repayments of borrowed money count as operating cash outflows."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this printing company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 19". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 19". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A positive cash flow is not identical with a profit,. The reason given — profit includes non-cash charges and accruals that cash flow does not. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 19". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow state…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Mix Over Two Years 19". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated."

The statement is true.'] WHERE case_id = 'CASE 6.2.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation and Asset Wear". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a fitness club chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation and Asset Wear". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a restaurant chain repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation and Asset Wear". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a IT consultancy purchases new laptop computers for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation and Asset Wear". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet of a bakery shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the whole ac…"

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation and Asset Wear". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is true.'] WHERE case_id = 'CASE 6.2.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Paying dividends is classified as an investing cash outflow. The reason — it uses cash belonging to shareholders. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 124 + 76 + 30 = 230
$$

$$
CL = 142 + 34 = 176
$$

$$
\text{Current ratio} = \frac{230}{176} = 1.3068
$$

Claimed: is below 1.28. Actual 1.31.

Reading the arithmetic against the claim: actual current ratio 1.31 versus ''is below 1.28'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Buildings as a percentage of total assets.

Name the identity in words: Buildings share of total assets = Buildings ÷ total assets.

From the extract, Buildings = 351 and total assets = 890. Plug the figures step by step:

$$
Share = \frac{\text{Buildings}}{\text{total assets}}
$$

$$
Share = \frac{351}{890}
$$

$$
Share = 39.4\%
$$

Threshold: more than 48.3%. Actual 39.4%.

Reading the arithmetic against the claim: actual share 39.4% does not match ''more than 48.3%'' so the statement does not hold.

The statement is false.', 'FALSE — This is a composition claim: express Cash and cash equivalents as a percentage of current assets.

Name the identity in words: Cash and cash equivalents share of current assets = Cash and cash equivalents ÷ current assets.

From the extract, Cash and cash equivalents = 30 and current assets = 230. Plug the figures step by step:

$$
Share = \frac{\text{Cash and cash equivalents}}{\text{current assets}}
$$

$$
Share = \frac{30}{230}
$$

$$
Share = 13.0\%
$$

Threshold: more than 22.6%. Actual 13.0%.

Reading the arithmetic against the claim: actual share 13.0% does not match ''more than 22.6%'' so the statement does not hold.

The statement is false.', 'TRUE — The current ratio is the standard liquidity cover of current assets over current liabilities.

Name the identity in words: current ratio = current assets ÷ current liabilities.

Build current assets and current liabilities from the extract:

$$
CA = 124 + 76 + 30 = 230
$$

$$
CL = 142 + 34 = 176
$$

$$
\text{Current ratio} = \frac{230}{176} = 1.3068
$$

Claimed: exceeds 1.21. Actual 1.31.

Reading the arithmetic against the claim: actual current ratio 1.31 versus ''exceeds 1.21'' so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation as a Non-Cash Expense". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a logistics company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation as a Non-Cash Expense". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a dairy processor repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation as a Non-Cash Expense". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation as a Non-Cash Expense". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation as a Non-Cash Expense". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The balance sheet of a bakery reports the revenue earned and costs incurred across the whole accounting period, while its statement of profit and loss shows assets, equity and liabilities on one sp…"

The statement is false.'] WHERE case_id = 'CASE 6.2.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Paying dividends is classified as an investing cash outflow. The reason — it uses cash belonging to shareholders. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 23". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Land is depreciated on a straight-line basis just like buildings and machinery."

The statement is false.', 'TRUE — Use the case figures for Cash flow from operating activities and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Cash flow from operating activities}_{\text{Y1}} = 397, \quad
\text{Cash flow from operating activities}_{\text{Y2}} = 467
$$

$$
\frac{467 - 397}{397} = 17.6\%
$$

$$
17.6\% > 17.4\%
$$

The actual growth is 17.6%, which is more than the claimed 17.4%.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Mix Over Two Years 23". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A negative cash flow from investing activities always proves the business is in financial trouble."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A positive cash flow is not identical with a profit,. The reason given — profit includes non-cash charges and accruals that cash flow does not. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit and Loss Over Two Years 24". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement."

The statement is true.', 'FALSE — Gross margin is gross profit divided by revenue; the claim compares the Year-2 margin with Year 1 in percentage points.

Name the identity in words: gross margin = gross profit ÷ revenue; Δ = GPM₂ − GPM₁.

$$
GPM_{1} = \frac{330}{967} = 34.1\%
$$

$$
GPM_{2} = \frac{396}{1,158} = 34.2\%
$$

$$
\Delta = 0.1\text{ percentage points}
$$

Threshold: more than 5.5 pp higher in Year 2. Actual Δ = 0.1 pp.

Reading the arithmetic against the claim: margin rose by 0.1 pp versus more than 5.5 pp so the statement does not hold.

The statement is false.', 'TRUE — Use the case figures for Revenue and compute the percentage change between Year 1 and Year 2 before comparing it with the claimed threshold.

From the extract:

$$
\text{Revenue}_{\text{Y1}} = 967, \quad
\text{Revenue}_{\text{Y2}} = 1,158
$$

$$
\frac{1,158 - 967}{967} = 19.8\%
$$

$$
19.8\% > 9.7\%
$$

The actual growth is 19.8%, which is more than the claimed 9.7%.

The statement is true.', 'TRUE — Compare finance-cost growth with operating-result growth; the claim needs both a finance-cost rise above the threshold and outpacing of operating result.

Name the identity in words: growth = (Year 2 − Year 1) ÷ Year 1 for each line.

$$
\text{FC growth} = 46.7\%
$$

$$
\text{OR growth} = 20.3\%
$$

Finance costs did grow by more than 40%; they do outpace operating result.

Reading the arithmetic against the claim: FC growth 46.7% vs threshold 40% and OR growth 20.3% so the statement holds.

The statement is true.', 'TRUE — Interest coverage in Year 1 is operating result divided by finance costs.

Name the identity in words: interest coverage = operating result ÷ finance costs.

From the extract, operating result = 241 and finance costs = 15. Plug the figures step by step:

$$
Coverage = \frac{\text{operating result}}{\text{finance costs}}
$$

$$
Coverage = \frac{241}{15}
$$

$$
Coverage = 16.0667
$$

Threshold: more than 5.39. Actual 16.07.

Reading the arithmetic against the claim: coverage 16.07 exceeds 5.39 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Straight-Line Depreciation Method". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this logistics company, the dividends paid line of (28400) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Straight-Line Depreciation Method". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this logistics company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Straight-Line Depreciation Method". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this logistics company, the investing outflow of 30,600 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this logistics company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Straight-Line Depreciation Method". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this logistics company, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.'] WHERE case_id = 'CASE 6.2.025' AND tier = 'full';
