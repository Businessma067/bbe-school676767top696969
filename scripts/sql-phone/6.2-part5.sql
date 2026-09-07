-- Update expanded explanations for 6.2-part5 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 101". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 39, \quad P_{\text{last}} = 45
$$

$$
\frac{45 - 39}{39} = 15.4\%
$$

Threshold: more than 17%. Actual 15.4%.

Reading the arithmetic against the claim: the rise is 15.4%, which does not exceed 17% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 39 \times 717,000 = €27.96\text{m}
$$

$$
\text{MCap}_{\text{last}} = 45 \times 717,000 = €32.27\text{m}
$$

$$
\frac{32.27 - 27.96}{27.96} = 15.4\%
$$

Threshold: more than 18.7%. Actual 15.4%.

Reading the arithmetic against the claim: MCap rose 15.4%, which does not exceed 18.7% so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 101". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 101". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Any increase in the listed price of already-issued shares transfers that increase as cash directly onto the company''s bank account."

The statement is false.'] WHERE case_id = 'CASE 6.2.101' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 102". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Preferred shareholders vote at the stockholders'' meeting, while common shareholders never vote."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 33, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 33}{33} = 30.3\%
$$

Threshold: more than 33%. Actual 30.3%.

Reading the arithmetic against the claim: the rise is 30.3%, which does not exceed 33% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 43, \quad \text{Shares} = 497,000
$$

$$
\text{MCap} = 43 \times 497,000 = €21.37\text{ million}
$$

Threshold: exceeds €16.2 million. Actual €21.37 million.

Reading the arithmetic against the claim: market cap €21.37m exceeds €16.2m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 43, \quad P_{\min} = 33
$$

$$
\frac{43 - 33}{33} = 30.3\%
$$

Threshold: more than 40.6%. Actual 30.3%.

Reading the arithmetic against the claim: the gap is 30.3%, which does not exceed 40.6% so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 102". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation."

The statement is false.'] WHERE case_id = 'CASE 6.2.102' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 103". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders …"

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 32, \quad P_{\text{last}} = 38
$$

$$
\frac{38 - 32}{32} = 18.8\%
$$

Threshold: more than 29.8%. Actual 18.8%.

Reading the arithmetic against the claim: the rise is 18.8%, which does not exceed 29.8% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 95,000 \quad (March)
$$

Threshold: exceeds 97,827. Actual 95,000.

Reading the arithmetic against the claim: peak volume 95,000 does not exceed 97,827 so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 103". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock."

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 32 \times 603,000 = €19.30\text{m}
$$

$$
\text{MCap}_{\text{last}} = 38 \times 603,000 = €22.91\text{m}
$$

$$
\frac{22.91 - 19.30}{19.30} = 18.8\%
$$

Threshold: more than 14.5%. Actual 18.8%.

Reading the arithmetic against the claim: MCap rose 18.8%, which exceeds 14.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.103' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 104". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A high or rising price-earnings ratio can indicate either that a company''s shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 48, \quad \text{Shares} = 858,000
$$

$$
\text{MCap} = 48 \times 858,000 = €41.18\text{ million}
$$

Threshold: exceeds €35.4 million. Actual €41.18 million.

Reading the arithmetic against the claim: market cap €41.18m exceeds €35.4m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 222, \quad \frac{\text{Shares}}{1,000} = 858
$$

$$
EPS = \frac{222}{858} = €0.2587
$$

Threshold: exceeds €0.21. Actual ≈ €0.26.

Reading the arithmetic against the claim: EPS €0.26 exceeds €0.21 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 48, \quad P_{\min} = 38
$$

$$
\frac{48 - 38}{38} = 26.3\%
$$

Threshold: more than 22.9%. Actual 26.3%.

Reading the arithmetic against the claim: the gap is 26.3%, which exceeds 22.9% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 266,000, \quad \text{Shares} = 858,000
$$

$$
\frac{266,000}{858,000} = 31.0\%
$$

Threshold: exceed 26.5%. Actual 31.0%.

Reading the arithmetic against the claim: turnover 31.0% exceeds 26.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.104' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 105". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 24, \quad P_{\text{last}} = 16
$$

$$
\frac{16 - 24}{24} = -33.3\%
$$

Threshold: more than 14.4%. Actual -33.3%.

Reading the arithmetic against the claim: the rise is -33.3%, which does not exceed 14.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 24 \times 567,000 = €13.61\text{m}
$$

$$
\text{MCap}_{\text{last}} = 16 \times 567,000 = €9.07\text{m}
$$

$$
\frac{9.07 - 13.61}{13.61} = -33.3\%
$$

Threshold: more than 25.1%. Actual -33.3%.

Reading the arithmetic against the claim: MCap rose -33.3%, which does not exceed 25.1% so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 105". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Preferred shareholders vote at the stockholders'' meeting, while common shareholders never vote."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 16, \quad \text{Shares} = 567,000
$$

$$
\text{MCap} = 16 \times 567,000 = €9.07\text{ million}
$$

Threshold: exceeds €7.5 million. Actual €9.07 million.

Reading the arithmetic against the claim: market cap €9.07m exceeds €7.5m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.105' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 106". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Preferred shareholders vote at the stockholders'' meeting, while common shareholders never vote."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 24, \quad \text{Shares} = 524,000
$$

$$
\text{MCap} = 24 \times 524,000 = €12.58\text{ million}
$$

Threshold: exceeds €10.1 million. Actual €12.58 million.

Reading the arithmetic against the claim: market cap €12.58m exceeds €10.1m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 32, \quad P_{\text{last}} = 24
$$

$$
\frac{24 - 32}{32} = -25.0\%
$$

Threshold: more than 32.5%. Actual -25.0%.

Reading the arithmetic against the claim: the rise is -25.0%, which does not exceed 32.5% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 32, \quad P_{\min} = 24
$$

$$
\frac{32 - 24}{24} = 33.3\%
$$

Threshold: more than 19.2%. Actual 33.3%.

Reading the arithmetic against the claim: the gap is 33.3%, which exceeds 19.2% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 344,000, \quad \text{Shares} = 524,000
$$

$$
\frac{344,000}{524,000} = 65.6\%
$$

Threshold: exceed 8.6%. Actual 65.6%.

Reading the arithmetic against the claim: turnover 65.6% exceeds 8.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.106' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Cash Flow Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a courier firm makes a loss for the year, that loss is deducted from retained earnings and therefore reduces the equity shown on its balance sheet."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a packaging manufacturer is depreciated in exactly the same way as its packaging machinery,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Cash Flow Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "When a construction firm earns a profit for the year, that profit is added to retained earnings and therefore increases the equity shown on its balance sheet."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a bakery is normally left out of the depreciation schedule. The reason given — , unlike its commercial ovens, land does not wear out through ordinary use. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Reading a Cash Flow Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The depreciation that a courier firm charges on its delivery vans each year is a non-cash expense, since the related cash was already paid out when the delivery vans was originally purchased."

The statement is true.'] WHERE case_id = 'CASE 6.2.107' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 108". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover."

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 48, \quad P_{\min} = 35
$$

$$
\frac{48 - 35}{35} = 37.1\%
$$

Threshold: more than 42.7%. Actual 37.1%.

Reading the arithmetic against the claim: the gap is 37.1%, which does not exceed 42.7% so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 108". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 108". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Holders of preferred shares always vote at meetings, while common shareholders hold equity without voting rights."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 35, \quad P_{\text{last}} = 48
$$

$$
\frac{48 - 35}{35} = 37.1\%
$$

Threshold: more than 27.2%. Actual 37.1%.

Reading the arithmetic against the claim: the rise is 37.1%, which exceeds 27.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.108' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Fixed Assets and Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The depreciation that a catering company charges on its catering vans each year is a cash expense that directly reduces its bank balance at the time it is recorded."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a recycling firm is depreciated in exactly the same way as its sorting machinery,. The reason — all fixed assets wear out identically through use. — does not support that label under the chapter definitions. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'FALSE — Profit and cash movement are different measures.

A firm can be profitable on an accrual basis while cash falls (e.g. heavy investment or slower collections).

Using the stem facts: "A complete financial statement is limited to a balance sheet alone and never includes a statement of profit and loss or a cash flow statement."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land owned by a construction firm is normally left out of the depreciation schedule. The reason given — , unlike its heavy construction machinery, land does not wear out through ordinary use. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Fixed Assets and Useful Life". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "The balance sheet, like the statement of profit and loss and the cash flow statement, is drawn up to summarise an entire accounting period rather than one specific date."

The statement is false.'] WHERE case_id = 'CASE 6.2.109' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 34, \quad P_{\text{last}} = 50
$$

$$
\frac{50 - 34}{34} = 47.1\%
$$

Threshold: more than 11.9%. Actual 47.1%.

Reading the arithmetic against the claim: the rise is 47.1%, which exceeds 11.9% so the statement holds.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 110". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Holders of preferred shares always vote at meetings, while common shareholders hold equity without voting rights."

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €296\text{ thousand}
$$

The statement claims this amount is below €217 thousand. Actual €296 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €296k is not below €217k so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 110". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Every corporation must distribute a cash dividend to shareholders in each financial year by law."

The statement is false.', 'FALSE — Secondary-market trades move cash between investors, not into the company.

When one shareholder sells shares to another on the exchange, the issuer is not a party to that trade and does not receive new share capital from it. Fresh equity cash arrives only from primary issues or similar company transactions.

Applied to this stem: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital."

The statement is false.'] WHERE case_id = 'CASE 6.2.110' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 111". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 36, \quad P_{\text{last}} = 44
$$

$$
\frac{44 - 36}{36} = 22.2\%
$$

Threshold: more than 34.9%. Actual 22.2%.

Reading the arithmetic against the claim: the rise is 22.2%, which does not exceed 34.9% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 882,000 = €31.75\text{m}
$$

$$
\text{MCap}_{\text{last}} = 44 \times 882,000 = €38.81\text{m}
$$

$$
\frac{38.81 - 31.75}{31.75} = 22.2\%
$$

Threshold: more than 26.3%. Actual 22.2%.

Reading the arithmetic against the claim: MCap rose 22.2%, which does not exceed 26.3% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 44, \quad \text{Shares} = 882,000
$$

$$
\text{MCap} = 44 \times 882,000 = €38.81\text{ million}
$$

Threshold: exceeds €29.1 million. Actual €38.81 million.

Reading the arithmetic against the claim: market cap €38.81m exceeds €29.1m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 44, \quad P_{\min} = 35
$$

$$
\frac{44 - 35}{35} = 25.7\%
$$

Threshold: more than 30.6%. Actual 25.7%.

Reading the arithmetic against the claim: the gap is 25.7%, which does not exceed 30.6% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.111' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Listed Company Performance Charts 112". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 39, \quad \text{Shares} = 734,000
$$

$$
\text{MCap} = 39 \times 734,000 = €28.63\text{ million}
$$

Threshold: exceeds €22.4 million. Actual €28.63 million.

Reading the arithmetic against the claim: market cap €28.63m exceeds €22.4m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 734,000 = €22.75\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 734,000 = €28.63\text{m}
$$

$$
\frac{28.63 - 22.75}{22.75} = 25.8\%
$$

Threshold: more than 16.3%. Actual 25.8%.

Reading the arithmetic against the claim: MCap rose 25.8%, which exceeds 16.3% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 200, \quad \frac{\text{Shares}}{1,000} = 734
$$

$$
EPS = \frac{200}{734} = €0.2725
$$

Threshold: exceeds €0.23. Actual ≈ €0.27.

Reading the arithmetic against the claim: EPS €0.27 exceeds €0.23 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 39, \quad P_{\min} = 31
$$

$$
\frac{39 - 31}{31} = 25.8\%
$$

Threshold: more than 23.2%. Actual 25.8%.

Reading the arithmetic against the claim: the gap is 25.8%, which exceeds 23.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.112' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary-market trades move cash between investors, not into the company.

When one shareholder sells shares to another on the exchange, the issuer is not a party to that trade and does not receive new share capital from it. Fresh equity cash arrives only from primary issues or similar company transactions.

Applied to this stem: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 10, \quad \text{Shares} = 869,000
$$

$$
\text{MCap} = 10 \times 869,000 = €8.69\text{ million}
$$

Threshold: exceeds €8 million. Actual €8.69 million.

Reading the arithmetic against the claim: market cap €8.69m exceeds €8m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 10
$$

$$
\frac{10 - 20}{20} = -50.0\%
$$

Threshold: more than 24.3%. Actual -50.0%.

Reading the arithmetic against the claim: the rise is -50.0%, which does not exceed 24.3% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 20 \times 869,000 = €17.38\text{m}
$$

$$
\text{MCap}_{\text{last}} = 10 \times 869,000 = €8.69\text{m}
$$

$$
\frac{8.69 - 17.38}{17.38} = -50.0\%
$$

Threshold: more than 32.8%. Actual -50.0%.

Reading the arithmetic against the claim: MCap rose -50.0%, which does not exceed 32.8% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €316\text{ thousand}
$$

The statement claims this amount is below €231 thousand. Actual €316 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €316k is not below €231k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.2.113' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Accumulated Depreciation Over Time". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this publishing house, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this publishing house, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Accumulated Depreciation Over Time". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this publishing house, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Accumulated Depreciation Over Time". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this publishing house, buying new binding machines is classified as an investing cash outflow."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this publishing house, a positive cash figure is still not the same thing as a profit,. The reason given — profit includes non-cash charges and accruals. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.'] WHERE case_id = 'CASE 6.2.114' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 115". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Preferred shareholders vote at the stockholders'' meeting, while common shareholders never vote."

The statement is false.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 9
$$

$$
\frac{9 - 19}{19} = -52.6\%
$$

Threshold: more than 25.4%. Actual -52.6%.

Reading the arithmetic against the claim: the rise is -52.6%, which does not exceed 25.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 900,000 = €17.10\text{m}
$$

$$
\text{MCap}_{\text{last}} = 9 \times 900,000 = €8.10\text{m}
$$

$$
\frac{8.10 - 17.10}{17.10} = -52.6\%
$$

Threshold: more than 34.8%. Actual -52.6%.

Reading the arithmetic against the claim: MCap rose -52.6%, which does not exceed 34.8% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 9, \quad \text{Shares} = 900,000
$$

$$
\text{MCap} = 9 \times 900,000 = €8.10\text{ million}
$$

Threshold: exceeds €6.8 million. Actual €8.10 million.

Reading the arithmetic against the claim: market cap €8.10m exceeds €6.8m so the statement holds.

The statement is true.', 'FALSE — Secondary-market trades move cash between investors, not into the company.

When one shareholder sells shares to another on the exchange, the issuer is not a party to that trade and does not receive new share capital from it. Fresh equity cash arrives only from primary issues or similar company transactions.

Applied to this stem: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital."

The statement is false.'] WHERE case_id = 'CASE 6.2.115' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 116". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Market capitalisation is the total market value of a company''s outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 19, \quad \text{Shares} = 855,000
$$

$$
\text{MCap} = 19 \times 855,000 = €16.25\text{ million}
$$

Threshold: exceeds €12.3 million. Actual €16.25 million.

Reading the arithmetic against the claim: market cap €16.25m exceeds €12.3m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 19
$$

$$
\frac{36 - 19}{19} = 89.5\%
$$

Threshold: more than 23.8%. Actual 89.5%.

Reading the arithmetic against the claim: the gap is 89.5%, which exceeds 23.8% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 36, \quad P_{\text{last}} = 19
$$

$$
\frac{19 - 36}{36} = -47.2\%
$$

Threshold: more than 22.4%. Actual -47.2%.

Reading the arithmetic against the claim: the rise is -47.2%, which does not exceed 22.4% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 246,000, \quad \text{Shares} = 855,000
$$

$$
\frac{246,000}{855,000} = 28.8\%
$$

Threshold: exceed 17.4%. Actual 28.8%.

Reading the arithmetic against the claim: turnover 28.8% exceeds 17.4% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.116' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Share Price and Market Capitalisation 117". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Common shareholders are entitled to vote at the annual stockholders'' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend."

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 94,000 \quad (May)
$$

Threshold: exceeds 96,071. Actual 94,000.

Reading the arithmetic against the claim: peak volume 94,000 does not exceed 96,071 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €295\text{ thousand}
$$

The statement claims this amount is below €242 thousand. Actual €295 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €295k is not below €242k so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 117". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 38
$$

$$
\frac{38 - 27}{27} = 40.7\%
$$

Threshold: more than 27.7%. Actual 40.7%.

Reading the arithmetic against the claim: the rise is 40.7%, which exceeds 27.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.117' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 118". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 40, \quad P_{\text{last}} = 50
$$

$$
\frac{50 - 40}{40} = 25.0\%
$$

Threshold: more than 14.1%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 14.1% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 50, \quad \text{Shares} = 684,000
$$

$$
\text{MCap} = 50 \times 684,000 = €34.20\text{ million}
$$

Threshold: exceeds €25.7 million. Actual €34.20 million.

Reading the arithmetic against the claim: market cap €34.20m exceeds €25.7m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 325,000, \quad \text{Shares} = 684,000
$$

$$
\frac{325,000}{684,000} = 47.5\%
$$

Threshold: exceed 13.7%. Actual 47.5%.

Reading the arithmetic against the claim: turnover 47.5% exceeds 13.7% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 89,000 \quad (June)
$$

Threshold: exceeds 72,088. Actual 89,000.

Reading the arithmetic against the claim: peak volume 89,000 exceeds 72,088 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.118' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Charge Consistency". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation reflects the gradual wearing out of a fixed asset as it is used to help generate revenue over its useful life."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation Charge Consistency". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Turnover for the year is reported in the balance sheet rather than in the statement of profit and loss."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Depreciation Charge Consistency". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Depreciation has nothing to do with the wearing out of a fixed asset and is simply an arbitrary entry with no economic meaning."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Charge Consistency". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "If a fixed asset were never depreciated, it would remain on the accounts at its original cost even after years of productive use, overstating its true worth."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Depreciation Charge Consistency". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Depreciation is charged as an expense in the statement of profit and loss without itself requiring a fresh cash payment in the year it is recorded."

The statement is true.'] WHERE case_id = 'CASE 6.2.119' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 120". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 11, \quad \text{Shares} = 822,000
$$

$$
\text{MCap} = 11 \times 822,000 = €9.04\text{ million}
$$

Threshold: exceeds €7.1 million. Actual €9.04 million.

Reading the arithmetic against the claim: market cap €9.04m exceeds €7.1m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 17 \times 822,000 = €13.97\text{m}
$$

$$
\text{MCap}_{\text{last}} = 11 \times 822,000 = €9.04\text{m}
$$

$$
\frac{9.04 - 13.97}{13.97} = -35.3\%
$$

Threshold: more than 10.8%. Actual -35.3%.

Reading the arithmetic against the claim: MCap rose -35.3%, which does not exceed 10.8% so the statement does not hold.

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 120". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation."

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 380,000, \quad \text{Shares} = 822,000
$$

$$
\frac{380,000}{822,000} = 46.2\%
$$

Threshold: exceed 14.5%. Actual 46.2%.

Reading the arithmetic against the claim: turnover 46.2% exceeds 14.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.2.120' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Financial Statement Structure Overview". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A fixed asset that is never depreciated will automatically show a reduced value in the accounts that reflects its true worth after years of use."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Financial Statement Structure Overview". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Under the straight-line method, the depreciable amount of an asset, its cost less any expected residual value, is spread evenly over its useful life."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: Land is generally treated differently from buildings, machinery and vehicles. The reason given — it does not wear out through use and is normally not depreciated. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: A profit earned during the year increases the equity reported on the balance sheet, usually. The reason given — it is added to retained earnings. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Financial Statement Structure Overview". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A loss incurred during the year reduces the equity reported on the balance sheet."

The statement is true.'] WHERE case_id = 'CASE 6.2.121' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Versus Income Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this catering company, the dividends paid line of (18500) euros belongs in investing activities."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Versus Income Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this catering company, the investing outflow of 90,000 euros means the business must be failing."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Versus Income Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this catering company, repayments of borrowed money count as operating cash outflows."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Balance Sheet Versus Income Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this catering company, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Balance Sheet Versus Income Statement". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this catering company, customer collections of receivables are financing cash inflows."

The statement is false.'] WHERE case_id = 'CASE 6.2.122' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Purpose". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "A loss incurred during the year increases the equity reported on the balance sheet."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Purpose". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from operating activities reflects cash movements arising from the core trading activities of a business during the period."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Purpose". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from investing activities reflects cash movements arising from buying or selling long-term assets during the period."

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Cash Flow Statement Purpose". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Profit for the year and the net change in cash and cash equivalents for the year are always identical figures."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Cash Flow Statement Purpose". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "Cash flow from financing activities reflects cash movements arising from borrowing, repaying loans, raising share capital or paying dividends during the period."

The statement is true.'] WHERE case_id = 'CASE 6.2.123' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Trade Receivable Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "A negative cash flow from investing activities in a given year often simply reflects that a business has been purchasing long-term assets, rather than facing financial difficulty."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Trade Receivable Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "The net change in cash and cash equivalents for a period is calculated by adding together the cash flows from operating, investing and financing activities."

The statement is true.', 'TRUE — Under the indirect method, non-cash expenses are added back to profit.

Depreciation reduced profit without using cash, so it is added back when reconciling to operating cash.

Using the stem facts: "When reconciling profit to cash generated from operating activities under the indirect method, depreciation charged during the year is added back to profit because it did not involve a cash payment."

The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Trade Receivable Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from operating activities reflects cash movements arising from borrowing and repaying loans during the period."

The statement is false.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Trade Receivable Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "Cash flow from investing activities reflects cash movements arising from the core day-to-day trading of a business during the period."

The statement is false.'] WHERE case_id = 'CASE 6.2.124' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Repayment Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, the dividends paid line of (23600) euros belongs in investing activities."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loan Repayment Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, dividends paid to shareholders sit in financing activities, not operating activities."

The statement is true.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The claim states: For this bakery, an investing outflow and a dividend payment can appear in the same year. The reason given — investing and financing are separate sections. — fits the chapter rule. The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue.

The statement is true.', 'FALSE — The income statement reports period performance (revenue, costs, profit).

Absolute or misapplied wording conflicts with the rule for "Loan Repayment Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Rejected claim: "For this bakery, the investing outflow of 95,400 euros means the business must be failing."

The statement is false.', 'TRUE — The income statement reports period performance (revenue, costs, profit).

The wording matches the relevant rule for "Loan Repayment Cash Classification". The income statement reports period performance (revenue, costs, profit). The cash-flow statement splits operating, investing, and financing cash movements. Profit is an accrual measure; depreciation is a non-cash expense; collecting receivables is operating cash, not new revenue. Applied here: "For this bakery, collecting payment on a trade receivable is an operating cash inflow from the core trading cycle."

The statement is true.'] WHERE case_id = 'CASE 6.2.125' AND tier = 'full';
