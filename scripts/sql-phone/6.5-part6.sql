-- Update expanded explanations for 6.5-part6 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a cinema chain is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A cinema chain is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a cinema chain sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a cinema chain relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a cinema chain carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.'] WHERE case_id = 'CASE 6.5.126' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 349,000, \quad \text{Shares} = 666,000
$$

$$
\frac{349,000}{666,000} = 52.4\%
$$

Threshold: exceed 14.4%. Actual 52.4%.

Reading the arithmetic against the claim: turnover 52.4% exceeds 14.4% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 36, \quad P_{\text{last}} = 39
$$

$$
\frac{39 - 36}{36} = 8.3\%
$$

Threshold: more than 33.7%. Actual 8.3%.

Reading the arithmetic against the claim: the rise is 8.3%, which does not exceed 33.7% so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 94,000 \quad (June)
$$

Threshold: exceeds 71,634. Actual 94,000.

Reading the arithmetic against the claim: peak volume 94,000 exceeds 71,634 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 666,000
$$

The statement claims exactly 666,000. The extract reports 666,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 666,000 versus claimed 666,000 so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 666,000 = €23.98\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 666,000 = €25.97\text{m}
$$

$$
\frac{25.97 - 23.98}{23.98} = 8.3\%
$$

Threshold: more than 31.8%. Actual 8.3%.

Reading the arithmetic against the claim: MCap rose 8.3%, which does not exceed 31.8% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.127' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 39, \quad P_{\text{last}} = 47
$$

$$
\frac{47 - 39}{39} = 20.5\%
$$

Threshold: more than 34%. Actual 20.5%.

Reading the arithmetic against the claim: the rise is 20.5%, which does not exceed 34% so the statement does not hold.

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 39 \times 520,000 = €20.28\text{m}
$$

$$
\text{MCap}_{\text{last}} = 47 \times 520,000 = €24.44\text{m}
$$

$$
\frac{24.44 - 20.28}{20.28} = 20.5\%
$$

Threshold: more than 19.8%. Actual 20.5%.

Reading the arithmetic against the claim: MCap rose 20.5%, which exceeds 19.8% so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 47, \quad P_{\min} = 39
$$

$$
\frac{47 - 39}{39} = 20.5\%
$$

Threshold: more than 36.3%. Actual 20.5%.

Reading the arithmetic against the claim: the gap is 20.5%, which does not exceed 36.3% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 68,000 \quad (January)
$$

Threshold: exceeds 77,534. Actual 68,000.

Reading the arithmetic against the claim: peak volume 68,000 does not exceed 77,534 so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 300, \quad \frac{\text{Shares}}{1,000} = 520
$$

$$
EPS = \frac{300}{520} = €0.5769
$$

Threshold: exceeds €0.51. Actual ≈ €0.58.

Reading the arithmetic against the claim: EPS €0.58 exceeds €0.51 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.128' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 44, \quad P_{\text{last}} = 55
$$

$$
\frac{55 - 44}{44} = 25.0\%
$$

Threshold: more than 17.9%. Actual 25.0%.

Reading the arithmetic against the claim: the rise is 25.0%, which exceeds 17.9% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 55, \quad \text{Shares} = 679,000
$$

$$
\text{MCap} = 55 \times 679,000 = €37.34\text{ million}
$$

Threshold: exceeds €30.9 million. Actual €37.34 million.

Reading the arithmetic against the claim: market cap €37.34m exceeds €30.9m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 44 \times 679,000 = €29.88\text{m}
$$

$$
\text{MCap}_{\text{last}} = 55 \times 679,000 = €37.34\text{m}
$$

$$
\frac{37.34 - 29.88}{29.88} = 25.0\%
$$

Threshold: more than 15%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 15% so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 55, \quad P_{\min} = 44
$$

$$
\frac{55 - 44}{44} = 25.0\%
$$

Threshold: more than 14%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 14% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 679,000
$$

The statement claims exactly 679,000. The extract reports 679,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 679,000 versus claimed 679,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.129' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a cinema chain relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a cinema chain expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Equity Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for an online retailer is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a cinema chain draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Equity Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a brewery group is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.'] WHERE case_id = 'CASE 6.5.130' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 22
$$

$$
\frac{22 - 28}{28} = -21.4\%
$$

Threshold: more than 30%. Actual -21.4%.

Reading the arithmetic against the claim: the rise is -21.4%, which does not exceed 30% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 22, \quad \text{Shares} = 777,000
$$

$$
\text{MCap} = 22 \times 777,000 = €17.09\text{ million}
$$

Threshold: exceeds €15.5 million. Actual €17.09 million.

Reading the arithmetic against the claim: market cap €17.09m exceeds €15.5m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 22
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 17.5%. Actual 27.3%.

Reading the arithmetic against the claim: the gap is 27.3%, which exceeds 17.5% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 234,000, \quad \text{Shares} = 777,000
$$

$$
\frac{234,000}{777,000} = 30.1\%
$$

Threshold: exceed 11.4%. Actual 30.1%.

Reading the arithmetic against the claim: turnover 30.1% exceeds 11.4% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 59,000 \quad (April)
$$

Threshold: exceeds 47,258. Actual 59,000.

Reading the arithmetic against the claim: peak volume 59,000 exceeds 47,258 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.131' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A brewery group is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a brewery group sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a brewery group relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a brewery group carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a brewery group relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.132' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 34, \quad P_{\text{last}} = 22
$$

$$
\frac{22 - 34}{34} = -35.3\%
$$

Threshold: more than 13.2%. Actual -35.3%.

Reading the arithmetic against the claim: the rise is -35.3%, which does not exceed 13.2% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 34 \times 407,000 = €13.84\text{m}
$$

$$
\text{MCap}_{\text{last}} = 22 \times 407,000 = €8.95\text{m}
$$

$$
\frac{8.95 - 13.84}{13.84} = -35.3\%
$$

Threshold: more than 30.3%. Actual -35.3%.

Reading the arithmetic against the claim: MCap rose -35.3%, which does not exceed 30.3% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 34, \quad P_{\min} = 22
$$

$$
\frac{34 - 22}{22} = 54.5\%
$$

Threshold: more than 24.8%. Actual 54.5%.

Reading the arithmetic against the claim: the gap is 54.5%, which exceeds 24.8% so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 42,000 \quad (April)
$$

Threshold: exceeds 46,668. Actual 42,000.

Reading the arithmetic against the claim: peak volume 42,000 does not exceed 46,668 so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 170,000, \quad \text{Shares} = 407,000
$$

$$
\frac{170,000}{407,000} = 41.8\%
$$

Threshold: exceed 28.8%. Actual 41.8%.

Reading the arithmetic against the claim: turnover 41.8% exceeds 28.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.133' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 584,000 = €18.10\text{m}
$$

$$
\text{MCap}_{\text{last}} = 35 \times 584,000 = €20.44\text{m}
$$

$$
\frac{20.44 - 18.10}{18.10} = 12.9\%
$$

Threshold: more than 32.7%. Actual 12.9%.

Reading the arithmetic against the claim: MCap rose 12.9%, which does not exceed 32.7% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 35, \quad \text{Shares} = 584,000
$$

$$
\text{MCap} = 35 \times 584,000 = €20.44\text{ million}
$$

Threshold: exceeds €19 million. Actual €20.44 million.

Reading the arithmetic against the claim: market cap €20.44m exceeds €19m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 35, \quad P_{\min} = 28
$$

$$
\frac{35 - 28}{28} = 25.0\%
$$

Threshold: more than 32.8%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which does not exceed 32.8% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (January)
$$

Threshold: exceeds 93,947. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 does not exceed 93,947 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €280\text{ thousand}
$$

The statement claims this amount is below €229 thousand. Actual €280 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €280k is not below €229k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.134' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a brewery group expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a brewery group draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a packaging plant is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A packaging plant is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for an online retailer is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.'] WHERE case_id = 'CASE 6.5.135' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 94,000 \quad (January)
$$

Threshold: exceeds 97,257. Actual 94,000.

Reading the arithmetic against the claim: peak volume 94,000 does not exceed 97,257 so the statement does not hold.

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 26, \quad P_{\text{last}} = 35
$$

$$
\frac{35 - 26}{26} = 34.6\%
$$

Threshold: more than 14.2%. Actual 34.6%.

Reading the arithmetic against the claim: the rise is 34.6%, which exceeds 14.2% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €318\text{ thousand}
$$

The statement claims this amount is below €198 thousand. Actual €318 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €318k is not below €198k so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 35, \quad \text{Shares} = 427,000
$$

$$
\text{MCap} = 35 \times 427,000 = €14.95\text{ million}
$$

Threshold: exceeds €12.2 million. Actual €14.95 million.

Reading the arithmetic against the claim: market cap €14.95m exceeds €12.2m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 26 \times 427,000 = €11.10\text{m}
$$

$$
\text{MCap}_{\text{last}} = 35 \times 427,000 = €14.95\text{m}
$$

$$
\frac{14.95 - 11.10}{11.10} = 34.6\%
$$

Threshold: more than 21%. Actual 34.6%.

Reading the arithmetic against the claim: MCap rose 34.6%, which exceeds 21% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.136' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for an online retailer always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a packaging plant sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a hotel operator is calculated by subtracting current assets from current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A hotel operator reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a hotel operator includes inventory within current assets before comparing the total with current liabilities."

The statement is false.'] WHERE case_id = 'CASE 6.5.137' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a packaging plant relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a packaging plant carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a packaging plant relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a packaging plant expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a packaging plant draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.138' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 26 \times 670,000 = €17.42\text{m}
$$

$$
\text{MCap}_{\text{last}} = 19 \times 670,000 = €12.73\text{m}
$$

$$
\frac{12.73 - 17.42}{17.42} = -26.9\%
$$

Threshold: more than 27.7%. Actual -26.9%.

Reading the arithmetic against the claim: MCap rose -26.9%, which does not exceed 27.7% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 26, \quad P_{\min} = 19
$$

$$
\frac{26 - 19}{19} = 36.8\%
$$

Threshold: more than 43.3%. Actual 36.8%.

Reading the arithmetic against the claim: the gap is 36.8%, which does not exceed 43.3% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 19, \quad \text{Shares} = 670,000
$$

$$
\text{MCap} = 19 \times 670,000 = €12.73\text{ million}
$$

Threshold: exceeds €10.3 million. Actual €12.73 million.

Reading the arithmetic against the claim: market cap €12.73m exceeds €10.3m so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €279\text{ thousand}
$$

The statement claims this amount is below €234 thousand. Actual €279 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €279k is not below €234k so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 60,000 \quad (June)
$$

Threshold: exceeds 56,065. Actual 60,000.

Reading the arithmetic against the claim: peak volume 60,000 exceeds 56,065 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.139' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a hotel operator is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a hotel operator is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "The Debt Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for an office-furniture retailer is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a hotel operator is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "The Debt Ratio in Financial Structure in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a hotel operator always produce identical results, regardless of how much inventory the business holds."

The statement is false.'] WHERE case_id = 'CASE 6.5.140' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 21, \quad P_{\text{last}} = 26
$$

$$
\frac{26 - 21}{21} = 23.8\%
$$

Threshold: more than 11.4%. Actual 23.8%.

Reading the arithmetic against the claim: the rise is 23.8%, which exceeds 11.4% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 26, \quad \text{Shares} = 658,000
$$

$$
\text{MCap} = 26 \times 658,000 = €17.11\text{ million}
$$

Threshold: exceeds €13.6 million. Actual €17.11 million.

Reading the arithmetic against the claim: market cap €17.11m exceeds €13.6m so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 396,000, \quad \text{Shares} = 658,000
$$

$$
\frac{396,000}{658,000} = 60.2\%
$$

Threshold: exceed 31.3%. Actual 60.2%.

Reading the arithmetic against the claim: turnover 60.2% exceeds 31.3% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 93,000 \quad (June)
$$

Threshold: exceeds 73,114. Actual 93,000.

Reading the arithmetic against the claim: peak volume 93,000 exceeds 73,114 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 658,000
$$

The statement claims exactly 658,000. The extract reports 658,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 658,000 versus claimed 658,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.141' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "An office-furniture retailer is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for an office-furniture retailer sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for an office-furniture retailer relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for an office-furniture retailer carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Practice". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for an office-furniture retailer relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.'] WHERE case_id = 'CASE 6.5.142' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 34, \quad P_{\text{last}} = 36
$$

$$
\frac{36 - 34}{34} = 5.9\%
$$

Threshold: more than 9.3%. Actual 5.9%.

Reading the arithmetic against the claim: the rise is 5.9%, which does not exceed 9.3% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 34 \times 649,000 = €22.07\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 649,000 = €23.36\text{m}
$$

$$
\frac{23.36 - 22.07}{22.07} = 5.9\%
$$

Threshold: more than 25%. Actual 5.9%.

Reading the arithmetic against the claim: MCap rose 5.9%, which does not exceed 25% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 36, \quad \text{Shares} = 649,000
$$

$$
\text{MCap} = 36 \times 649,000 = €23.36\text{ million}
$$

Threshold: exceeds €18.8 million. Actual €23.36 million.

Reading the arithmetic against the claim: market cap €23.36m exceeds €18.8m so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 30
$$

$$
\frac{36 - 30}{30} = 20.0\%
$$

Threshold: more than 32.3%. Actual 20.0%.

Reading the arithmetic against the claim: the gap is 20.0%, which does not exceed 32.3% so the statement does not hold.

The statement is false.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 316,000, \quad \text{Shares} = 649,000
$$

$$
\frac{316,000}{649,000} = 48.7\%
$$

Threshold: exceed 19.4%. Actual 48.7%.

Reading the arithmetic against the claim: turnover 48.7% exceeds 19.4% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.143' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 24 \times 732,000 = €17.57\text{m}
$$

$$
\text{MCap}_{\text{last}} = 30 \times 732,000 = €21.96\text{m}
$$

$$
\frac{21.96 - 17.57}{17.57} = 25.0\%
$$

Threshold: more than 8.8%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 8.8% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €293\text{ thousand}
$$

The statement claims this amount is below €285 thousand. Actual €293 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €293k is not below €285k so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 30, \quad P_{\min} = 24
$$

$$
\frac{30 - 24}{24} = 25.0\%
$$

Threshold: more than 18.8%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 18.8% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 91,000 \quad (May)
$$

Threshold: exceeds 81,445. Actual 91,000.

Reading the arithmetic against the claim: peak volume 91,000 exceeds 81,445 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 732,000
$$

The statement claims exactly 732,000. The extract reports 732,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 732,000 versus claimed 732,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.5.144' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 36, \quad \text{Shares} = 655,000
$$

$$
\text{MCap} = 36 \times 655,000 = €23.58\text{ million}
$$

Threshold: exceeds €18.9 million. Actual €23.58 million.

Reading the arithmetic against the claim: market cap €23.58m exceeds €18.9m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 655,000 = €19.65\text{m}
$$

$$
\text{MCap}_{\text{last}} = 36 \times 655,000 = €23.58\text{m}
$$

$$
\frac{23.58 - 19.65}{19.65} = 20.0\%
$$

Threshold: more than 23%. Actual 20.0%.

Reading the arithmetic against the claim: MCap rose 20.0%, which does not exceed 23% so the statement does not hold.

The statement is false.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 79,000 \quad (January)
$$

Threshold: exceeds 64,747. Actual 79,000.

Reading the arithmetic against the claim: peak volume 79,000 exceeds 64,747 so the statement holds.

The statement is true.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 36, \quad P_{\min} = 29
$$

$$
\frac{36 - 29}{29} = 24.1\%
$$

Threshold: more than 30%. Actual 24.1%.

Reading the arithmetic against the claim: the gap is 24.1%, which does not exceed 30% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €309\text{ thousand}
$$

The statement claims this amount is below €266 thousand. Actual €309 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €309k is not below €266k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.145' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 16
$$

$$
\frac{16 - 27}{27} = -40.7\%
$$

Threshold: more than 34.8%. Actual -40.7%.

Reading the arithmetic against the claim: the rise is -40.7%, which does not exceed 34.8% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 16, \quad \text{Shares} = 538,000
$$

$$
\text{MCap} = 16 \times 538,000 = €8.61\text{ million}
$$

Threshold: exceeds €7.8 million. Actual €8.61 million.

Reading the arithmetic against the claim: market cap €8.61m exceeds €7.8m so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 94,000 \quad (February)
$$

Threshold: exceeds 66,814. Actual 94,000.

Reading the arithmetic against the claim: peak volume 94,000 exceeds 66,814 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 538,000
$$

The statement claims exactly 538,000. The extract reports 538,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 538,000 versus claimed 538,000 so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 27 \times 538,000 = €14.53\text{m}
$$

$$
\text{MCap}_{\text{last}} = 16 \times 538,000 = €8.61\text{m}
$$

$$
\frac{8.61 - 14.53}{14.53} = -40.7\%
$$

Threshold: more than 9.6%. Actual -40.7%.

Reading the arithmetic against the claim: MCap rose -40.7%, which does not exceed 9.6% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.5.146' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for an office-furniture retailer expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If an office-furniture retailer draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a dairy cooperative is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a pharmaceutical distributor is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Explained". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A dairy cooperative is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.147' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The current ratio for a dairy cooperative sets total current assets against total current liabilities to judge whether short-term resources comfortably cover short-term obligations."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Return on equity for a dairy cooperative relates the profit before interest and tax generated during the period to the equity that owners have invested in the business."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A pharmaceutical distributor reporting negative working capital always holds more cash than it needs for its daily operations."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The acid-test ratio for a pharmaceutical distributor includes inventory within current assets before comparing the total with current liabilities."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers for Analysts". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "A single return on capital employed figure for a pharmaceutical distributor is always fully meaningful on its own, without any need to compare it against other years or similar businesses."

The statement is false.'] WHERE case_id = 'CASE 6.5.148' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Return on equity for a pharmaceutical distributor is calculated by comparing the cash balance on the balance sheet with total liabilities rather than relating profit to equity."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A return on capital employed figure for a dairy cooperative carries more weight when read alongside the business''s own results from earlier years or against similar firms in its industry."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Asset turnover for a dairy cooperative relates revenue earned during the period to the average total assets employed to generate that revenue."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers Across Sectors". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "The equity ratio for a dairy cooperative expresses the proportion of total assets financed by owners'' equity rather than by borrowed funds."

The statement is true.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The claim states: If a dairy cooperative draws on a short-term facility to settle supplier invoices, its cash position may improve while its working capital can simultaneously weaken. The reason given — current liabilities rise. — fits the chapter rule. Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding.

The statement is true.'] WHERE case_id = 'CASE 6.5.149' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Inventory turnover for a pharmaceutical distributor is calculated by dividing revenue by average inventory rather than by relating cost of sales to average inventory."

The statement is false.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "The current ratio and the acid-test ratio for a pharmaceutical distributor always produce identical results, regardless of how much inventory the business holds."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "Working capital for a publishing house is found by subtracting current liabilities from current assets, so a widening gap in favour of current assets raises working capital."

The statement is true.', 'FALSE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

Absolute or misapplied wording conflicts with the rule for "Comparing Ratios Across Time and Peers in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Rejected claim: "Working capital for a transport operator is calculated by subtracting current assets from current liabilities."

The statement is false.', 'TRUE — Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover.

The wording matches the relevant rule for "Comparing Ratios Across Time and Peers in Context". Activity ratios use averages: asset turnover = revenue / average assets; inventory turnover = cost of sales / average inventory; receivables turnover = revenue / average receivables; days ≈ 365 / turnover. Market capitalisation = price × shares; EPS relates earnings to shares outstanding. Applied here: "A publishing house is generally better placed with positive working capital, since current assets then exceed current liabilities once short-term obligations are taken into account."

The statement is true.'] WHERE case_id = 'CASE 6.5.150' AND tier = 'full';
