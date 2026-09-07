-- Update expanded explanations for 6.2-part6 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Combining Three Financial Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The net change in cash and cash equivalents for a period has no relationship to the cash flows from operating, investing and financing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Combining Three Financial Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is deducted a second time from profit."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Combining Three Financial Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Accumulated depreciation is added to the original cost of a fixed asset to arrive at its carrying value."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Combining Three Financial Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Combining Three Financial Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A rise in inventory or trade receivables during the year has no effect on cash and is fully reflected in profit for the period in exactly the same way."

The statement is false.'] WHERE case_id = 'CASE 6.2.126' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 127". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required e…"

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 23, \quad P_{\text{last}} = 31
$$

$$
\frac{31 - 23}{23} = 34.8\%
$$

Threshold: more than 30.4%. Actual 34.8%.

Reading the arithmetic against the claim: the rise is 34.8%, which exceeds 30.4% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 31, \quad \text{Shares} = 608,000
$$

$$
\text{MCap} = 31 \times 608,000 = €18.85\text{ million}
$$

Threshold: exceeds €15.3 million. Actual €18.85 million.

Reading the arithmetic against the claim: market cap €18.85m exceeds €15.3m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 23 \times 608,000 = €13.98\text{m}
$$

$$
\text{MCap}_{\text{last}} = 31 \times 608,000 = €18.85\text{m}
$$

$$
\frac{18.85 - 13.98}{13.98} = 34.8\%
$$

Threshold: more than 23.3%. Actual 34.8%.

Reading the arithmetic against the claim: MCap rose 34.8%, which exceeds 23.3% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 295, \quad \frac{\text{Shares}}{1,000} = 608
$$

$$
EPS = \frac{295}{608} = €0.4852
$$

Threshold: exceeds €0.35. Actual ≈ €0.49.

Reading the arithmetic against the claim: EPS €0.49 exceeds €0.35 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.127' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business that reports a profit for the year can never see its cash and cash equivalents fall over that same year."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Point-in-Time Versus Period Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm repays part of a long-term bank loan, that cash outflow belongs in cash flow from financing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Point-in-Time Versus Period Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm purchases new heavy construction machinery for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Point-in-Time Versus Period Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a hotel chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Point-in-Time Versus Period Statements". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a electronics retailer purchases new point-of-sale tills for use in the business, the resulting cash outflow belongs in cash flow from investing activities."

The statement is true.'] WHERE case_id = 'CASE 6.2.128' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this hotel chain, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Equity Movements From Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this hotel chain, the dividends paid line of (28700) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this hotel chain, buying new kitchen equipment is classified as an investing cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.129' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The balance sheet of a courier firm shows its assets, equity and liabilities on one specific date, while its statement of profit and loss reports the revenue earned and costs incurred across the wh…"

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Equity Movements From Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a hotel chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a bakery earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Equity Movements From Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a software developer repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Equity Movements From Loss". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is true.'] WHERE case_id = 'CASE 6.2.130' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 131". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 25, \quad P_{\text{last}} = 30
$$

$$
\frac{30 - 25}{25} = 20.0\%
$$

Threshold: more than 12.8%. Actual 20.0%.

Reading the arithmetic against the claim: the rise is 20.0%, which exceeds 12.8% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 25 \times 532,000 = €13.30\text{m}
$$

$$
\text{MCap}_{\text{last}} = 30 \times 532,000 = €15.96\text{m}
$$

$$
\frac{15.96 - 13.30}{13.30} = 20.0\%
$$

Threshold: more than 34.5%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which does not exceed 34.5% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 30, \quad \text{Shares} = 532,000
$$

$$
\text{MCap} = 30 \times 532,000 = €15.96\text{ million}
$$

Threshold: exceeds €12.9 million. Actual €15.96 million.

Reading the arithmetic against the claim: market cap €15.96m exceeds €12.9m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 287, \quad \frac{\text{Shares}}{1,000} = 532
$$

$$
EPS = \frac{287}{532} = €0.5395
$$

Threshold: exceeds €0.5. Actual ≈ €0.54.

Reading the arithmetic against the claim: EPS €0.54 exceeds €0.5 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.131' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 132". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Skipping a dividend in a weak year is legally possible; the main risk is that investors find the shares less attractive if dividends stay unpaid for long."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 54, \quad \text{Shares} = 525,000
$$

$$
\text{MCap} = 54 \times 525,000 = €28.35\text{ million}
$$

Threshold: exceeds €26.9 million. Actual €28.35 million.

Reading the arithmetic against the claim: market cap €28.35m exceeds €26.9m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 40 \times 525,000 = €21.00\text{m}
$$

$$
\text{MCap}_{\text{last}} = 54 \times 525,000 = €28.35\text{m}
$$

$$
\frac{28.35 - 21.00}{21.00} = 35.0\%
$$

Threshold: more than 21.2%. Actual 35.0%.

Reading the arithmetic against the claim: MCap rose 35.0%, which exceeds 21.2% so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 54, \quad P_{\min} = 40
$$

$$
\frac{54 - 40}{40} = 35.0\%
$$

Threshold: more than 34%. Actual 35.0%.

Reading the arithmetic against the claim: the gap is 35.0%, which exceeds 34% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 322,000, \quad \text{Shares} = 525,000
$$

$$
\frac{322,000}{525,000} = 61.3\%
$$

Threshold: exceed 29.3%. Actual 61.3%.

Reading the arithmetic against the claim: turnover 61.3% exceeds 29.3% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.132' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Policy and Reported Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Policy and Reported Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a hotel chain makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a bakery is normally left out of the depreciation schedule. The reason given — , unlike its commercial ovens, land does not wear out through ordinary use. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Policy and Reported Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The depreciation that a courier firm charges on its delivery vans each year is a non-cash expense, since the related cash was already paid out when the delivery vans was originally purchased."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Policy and Reported Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A complete financial statement for a business typically brings together a balance sheet, a statement of profit and loss and a cash flow statement."

The statement is true.'] WHERE case_id = 'CASE 6.2.133' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Non-Cash Adjustments to Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the dividends paid line of (11800) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Non-Cash Adjustments to Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this furniture maker, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Non-Cash Adjustments to Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this furniture maker, the investing outflow of 106,200 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this furniture maker, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Non-Cash Adjustments to Profit". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this furniture maker, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.'] WHERE case_id = 'CASE 6.2.134' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 135". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A high or rising price-earnings ratio can indicate either that a company''s shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 33, \quad \text{Shares} = 647,000
$$

$$
\text{MCap} = 33 \times 647,000 = €21.35\text{ million}
$$

Threshold: exceeds €19.5 million. Actual €21.35 million.

Reading the arithmetic against the claim: market cap €21.35m exceeds €19.5m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 26 \times 647,000 = €16.82\text{m}
$$

$$
\text{MCap}_{\text{last}} = 33 \times 647,000 = €21.35\text{m}
$$

$$
\frac{21.35 - 16.82}{16.82} = 26.9\%
$$

Threshold: more than 14.9%. Actual 26.9%.

Reading the arithmetic against the claim: MCap rose 26.9%, which exceeds 14.9% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 33, \quad P_{\min} = 26
$$

$$
\frac{33 - 26}{26} = 26.9\%
$$

Threshold: more than 42%. Actual 26.9%.

Reading the arithmetic against the claim: the gap is 26.9%, which does not exceed 42% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €319\text{ thousand}
$$

The statement claims this amount is below €271 thousand. Actual €319 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €319k is not below €271k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.135' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 29, \quad P_{\text{last}} = 36
$$

$$
\frac{36 - 29}{29} = 24.1\%
$$

Threshold: more than 29.6%. Actual 24.1%.

Reading the arithmetic against the claim: the rise is 24.1%, which does not exceed 29.6% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 29 \times 688,000 = €19.95\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 688,000 = €24.77\text{m}
$$

$$
\frac{24.77 - 19.95}{19.95} = 24.1\%
$$

Threshold: more than 30.7%. Actual 24.1%.

Reading the arithmetic against the claim: MCap rose 24.1%, which does not exceed 30.7% so the statement does not hold.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 136". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A high or rising price-earnings ratio can indicate either that a company''s shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth."

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 29
$$

$$
\frac{36 - 29}{29} = 24.1\%
$$

Threshold: more than 30.1%. Actual 24.1%.

Reading the arithmetic against the claim: the gap is 24.1%, which does not exceed 30.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €312\text{ thousand}
$$

The statement claims this amount is below €226 thousand. Actual €312 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €312k is not below €226k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.136' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 137". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Only an issue of new shares by the corporation itself raises equity finance; later trading between investors does not."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 33, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 33}{33} = 30.3\%
$$

Threshold: more than 30.9%. Actual 30.3%.

Reading the arithmetic against the claim: the rise is 30.3%, which does not exceed 30.9% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 33 \times 782,000 = €25.81\text{m}
$$

$$
\text{MCap}_{\text{last}} = 43 \times 782,000 = €33.63\text{m}
$$

$$
\frac{33.63 - 25.81}{25.81} = 30.3\%
$$

Threshold: more than 34.9%. Actual 30.3%.

Reading the arithmetic against the claim: MCap rose 30.3%, which does not exceed 34.9% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 43, \quad \text{Shares} = 782,000
$$

$$
\text{MCap} = 43 \times 782,000 = €33.63\text{ million}
$$

Threshold: exceeds €26.1 million. Actual €33.63 million.

Reading the arithmetic against the claim: market cap €33.63m exceeds €26.1m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 318, \quad \frac{\text{Shares}}{1,000} = 782
$$

$$
EPS = \frac{318}{782} = €0.4066
$$

Threshold: exceeds €0.34. Actual ≈ €0.41.

Reading the arithmetic against the claim: EPS €0.41 exceeds €0.34 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.137' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Asset Purchase and Investing Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Asset Purchase and Investing Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation is charged as an expense in the statement of profit and loss without itself requiring a fresh cash payment in the year it is recorded."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Asset Purchase and Investing Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable amount of an asset, its cost less any expected residual value, is spread evenly over its useful life."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is generally treated differently from buildings, machinery and vehicles. The reason given — it does not wear out through use and is normally not depreciated. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Asset Purchase and Investing Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a brewery repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.138' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Financing and Cash Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a textile mill purchases new spinning machinery for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Financing and Cash Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a printing company collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Financing and Cash Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a arable farm repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Financing and Cash Outflows". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a electronics retailer purchases new point-of-sale tills for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A profit earned during the year increases the equity reported on the balance sheet, usually. The reason given — it is added to retained earnings. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.139' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 140". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 14
$$

$$
\frac{14 - 20}{20} = -30.0\%
$$

Threshold: more than 33.1%. Actual -30.0%.

Reading the arithmetic against the claim: the rise is -30.0%, which does not exceed 33.1% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 14, \quad \text{Shares} = 766,000
$$

$$
\text{MCap} = 14 \times 766,000 = €10.72\text{ million}
$$

Threshold: exceeds €9.3 million. Actual €10.72 million.

Reading the arithmetic against the claim: market cap €10.72m exceeds €9.3m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 766,000 = €15.32\text{m}
$$

$$
\text{MCap}_{\text{last}} = 14 \times 766,000 = €10.72\text{m}
$$

$$
\frac{10.72 - 15.32}{15.32} = -30.0\%
$$

Threshold: more than 11.2%. Actual -30.0%.

Reading the arithmetic against the claim: MCap rose -30.0%, which does not exceed 11.2% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 340,000, \quad \text{Shares} = 766,000
$$

$$
\frac{340,000}{766,000} = 44.4\%
$$

Threshold: exceed 18.7%. Actual 44.4%.

Reading the arithmetic against the claim: turnover 44.4% exceeds 18.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.140' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 141". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders …"

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 34, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 34}{34} = 26.5\%
$$

Threshold: more than 15.5%. Actual 26.5%.

Reading the arithmetic against the claim: the rise is 26.5%, which exceeds 15.5% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 43, \quad \text{Shares} = 890,000
$$

$$
\text{MCap} = 43 \times 890,000 = €38.27\text{ million}
$$

Threshold: exceeds €32 million. Actual €38.27 million.

Reading the arithmetic against the claim: market cap €38.27m exceeds €32m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 34 \times 890,000 = €30.26\text{m}
$$

$$
\text{MCap}_{\text{last}} = 43 \times 890,000 = €38.27\text{m}
$$

$$
\frac{38.27 - 30.26}{30.26} = 26.5\%
$$

Threshold: more than 13.9%. Actual 26.5%.

Reading the arithmetic against the claim: MCap rose 26.5%, which exceeds 13.9% so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 43, \quad P_{\min} = 34
$$

$$
\frac{43 - 34}{34} = 26.5\%
$$

Threshold: more than 14.5%. Actual 26.5%.

Reading the arithmetic against the claim: the gap is 26.5%, which exceeds 14.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.141' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 142". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio."

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 23, \quad P_{\min} = 14
$$

$$
\frac{23 - 14}{14} = 64.3\%
$$

Threshold: more than 30.3%. Actual 64.3%.

Reading the arithmetic against the claim: the gap is 64.3%, which exceeds 30.3% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 23, \quad P_{\text{last}} = 14
$$

$$
\frac{14 - 23}{23} = -39.1\%
$$

Threshold: more than 11.7%. Actual -39.1%.

Reading the arithmetic against the claim: the rise is -39.1%, which does not exceed 11.7% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 23 \times 843,000 = €19.39\text{m}
$$

$$
\text{MCap}_{\text{last}} = 14 \times 843,000 = €11.80\text{m}
$$

$$
\frac{11.80 - 19.39}{19.39} = -39.1\%
$$

Threshold: more than 19.1%. Actual -39.1%.

Reading the arithmetic against the claim: MCap rose -39.1%, which does not exceed 19.1% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €279\text{ thousand}
$$

The statement claims this amount is below €193 thousand. Actual €279 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €279k is not below €193k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.142' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 143". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders …"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 16, \quad \text{Shares} = 451,000
$$

$$
\text{MCap} = 16 \times 451,000 = €7.22\text{ million}
$$

Threshold: exceeds €5.8 million. Actual €7.22 million.

Reading the arithmetic against the claim: market cap €7.22m exceeds €5.8m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 32, \quad P_{\min} = 16
$$

$$
\frac{32 - 16}{16} = 100.0\%
$$

Threshold: more than 33.1%. Actual 100.0%.

Reading the arithmetic against the claim: the gap is 100.0%, which exceeds 33.1% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 393,000, \quad \text{Shares} = 451,000
$$

$$
\frac{393,000}{451,000} = 87.1\%
$$

Threshold: exceed 22.7%. Actual 87.1%.

Reading the arithmetic against the claim: turnover 87.1% exceeds 22.7% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 95,000 \quad (March)
$$

Threshold: exceeds 73,341. Actual 95,000.

Reading the arithmetic against the claim: peak volume 95,000 exceeds 73,341 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.143' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Straight-Line Charges Across Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this printing company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Straight-Line Charges Across Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this printing company, the dividends paid line of (16900) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this printing company, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Straight-Line Charges Across Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this printing company, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Straight-Line Charges Across Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this printing company, buying new printing press is classified as an investing cash outflow."

The statement is true.'] WHERE case_id = 'CASE 6.2.144' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land Excluded From Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land Excluded From Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities in a given year often simply reflects that a business has been purchasing long-term assets, rather than facing financial difficulty."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land Excluded From Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The net change in cash and cash equivalents for a period is calculated by adding together the cash flows from operating, investing and financing activities."

The statement is true.', 'TRUE — Under the indirect method, non-cash expenses are added back to profit.

Depreciation reduced profit without using cash, so it is added back when reconciling to operating cash.

Using the stem facts: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Land Excluded From Depreciation". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Accumulated depreciation is deducted from the original cost of a fixed asset to arrive at its carrying value, also called its carrying value."

The statement is true.'] WHERE case_id = 'CASE 6.2.145' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 146". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation."

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 23, \quad P_{\min} = 18
$$

$$
\frac{23 - 18}{18} = 27.8\%
$$

Threshold: more than 32.5%. Actual 27.8%.

Reading the arithmetic against the claim: the gap is 27.8%, which does not exceed 32.5% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 23, \quad \text{Shares} = 694,000
$$

$$
\text{MCap} = 23 \times 694,000 = €15.96\text{ million}
$$

Threshold: exceeds €14.1 million. Actual €15.96 million.

Reading the arithmetic against the claim: market cap €15.96m exceeds €14.1m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 694,000 = €13.88\text{m}
$$

$$
\text{MCap}_{\text{last}} = 23 \times 694,000 = €15.96\text{m}
$$

$$
\frac{15.96 - 13.88}{13.88} = 15.0\%
$$

Threshold: more than 12.8%. Actual 15.0%.

Reading the arithmetic against the claim: MCap rose 15.0%, which exceeds 12.8% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 184, \quad \frac{\text{Shares}}{1,000} = 694
$$

$$
EPS = \frac{184}{694} = €0.2651
$$

Threshold: exceeds €0.24. Actual ≈ €0.27.

Reading the arithmetic against the claim: EPS €0.27 exceeds €0.24 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.146' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 147". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 39
$$

$$
\frac{39 - 31}{31} = 25.8\%
$$

Threshold: more than 8.6%. Actual 25.8%.

Reading the arithmetic against the claim: the rise is 25.8%, which exceeds 8.6% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 39, \quad \text{Shares} = 889,000
$$

$$
\text{MCap} = 39 \times 889,000 = €34.67\text{ million}
$$

Threshold: exceeds €26.7 million. Actual €34.67 million.

Reading the arithmetic against the claim: market cap €34.67m exceeds €26.7m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 889,000 = €27.56\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 889,000 = €34.67\text{m}
$$

$$
\frac{34.67 - 27.56}{27.56} = 25.8\%
$$

Threshold: more than 18.3%. Actual 25.8%.

Reading the arithmetic against the claim: MCap rose 25.8%, which exceeds 18.3% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 220, \quad \frac{\text{Shares}}{1,000} = 889
$$

$$
EPS = \frac{220}{889} = €0.2475
$$

Threshold: exceeds €0.18. Actual ≈ €0.25.

Reading the arithmetic against the claim: EPS €0.25 exceeds €0.18 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.147' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 148". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Skipping a dividend in a weak year is legally possible; the main risk is that investors find the shares less attractive if dividends stay unpaid for long."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 34 \times 602,000 = €20.47\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 602,000 = €21.67\text{m}
$$

$$
\frac{21.67 - 20.47}{20.47} = 5.9\%
$$

Threshold: more than 9.8%. Actual 5.9%.

Reading the arithmetic against the claim: MCap rose 5.9%, which does not exceed 9.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 31
$$

$$
\frac{36 - 31}{31} = 16.1\%
$$

Threshold: more than 20.1%. Actual 16.1%.

Reading the arithmetic against the claim: the gap is 16.1%, which does not exceed 20.1% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 351,000, \quad \text{Shares} = 602,000
$$

$$
\frac{351,000}{602,000} = 58.3\%
$$

Threshold: exceed 23.1%. Actual 58.3%.

Reading the arithmetic against the claim: turnover 58.3% exceeds 23.1% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €307\text{ thousand}
$$

The statement claims this amount is below €225 thousand. Actual €307 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €307k is not below €225k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.148' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 149". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 30, \quad P_{\text{last}} = 17
$$

$$
\frac{17 - 30}{30} = -43.3\%
$$

Threshold: more than 30.5%. Actual -43.3%.

Reading the arithmetic against the claim: the rise is -43.3%, which does not exceed 30.5% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 447,000 = €13.41\text{m}
$$

$$
\text{MCap}_{\text{last}} = 17 \times 447,000 = €7.60\text{m}
$$

$$
\frac{7.60 - 13.41}{13.41} = -43.3\%
$$

Threshold: more than 17.6%. Actual -43.3%.

Reading the arithmetic against the claim: MCap rose -43.3%, which does not exceed 17.6% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 59,000 \quad (February)
$$

Threshold: exceeds 59,702. Actual 59,000.

Reading the arithmetic against the claim: peak volume 59,000 does not exceed 59,702 so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 17, \quad \text{Shares} = 447,000
$$

$$
\text{MCap} = 17 \times 447,000 = €7.60\text{ million}
$$

Threshold: exceeds €6.6 million. Actual €7.60 million.

Reading the arithmetic against the claim: market cap €7.60m exceeds €6.6m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.149' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Profit Reported Versus Cash Generated". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A rise in inventory or trade receivables during the year uses cash but does not by itself reduce the profit reported for the period, which helps explain why profit and operating cash flow can differ."

The statement is true.', 'TRUE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A business can report a profit for the year in its statement of profit and loss while still seeing its cash and cash equivalents fall, because profit and cash movement are not the same thing."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Reported Versus Cash Generated". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a dairy processor repays part of a long-term bank loan, that cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Reported Versus Cash Generated". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a pharmacy chain purchases new dispensing equipment for use in the business, the resulting cash outflow belongs in cash flow from operating activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Profit Reported Versus Cash Generated". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "When a fitness club chain collects payment from a customer who owed money on an overdue invoice, the resulting cash inflow belongs in cash flow from financing activities."

The statement is false.'] WHERE case_id = 'CASE 6.2.150' AND tier = 'full';
