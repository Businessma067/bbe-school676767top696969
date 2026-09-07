-- Update expanded explanations for 6.1-part6 (5 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 126". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Market capitalisation is the total market value of a company''s outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 15, \quad \text{Shares} = 450,000
$$

$$
\text{MCap} = 15 \times 450,000 = €6.75\text{ million}
$$

Threshold: exceeds €6.2 million. Actual €6.75 million.

Reading the arithmetic against the claim: market cap €6.75m exceeds €6.2m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 230, \quad \frac{\text{Shares}}{1,000} = 450
$$

$$
EPS = \frac{230}{450} = €0.5111
$$

Threshold: exceeds €0.38. Actual ≈ €0.51.

Reading the arithmetic against the claim: EPS €0.51 exceeds €0.38 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 15
$$

$$
\frac{24 - 15}{15} = 60.0\%
$$

Threshold: more than 12.4%. Actual 60.0%.

Reading the arithmetic against the claim: the gap is 60.0%, which exceeds 12.4% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 381,000, \quad \text{Shares} = 450,000
$$

$$
\frac{381,000}{450,000} = 84.7\%
$$

Threshold: exceed 31.7%. Actual 84.7%.

Reading the arithmetic against the claim: turnover 84.7% exceeds 31.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.126' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 127". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Voting rights ordinarily attach to common shares, while preferred shareholders usually accept limited voting rights in return for a preferential dividend."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 39
$$

$$
\frac{39 - 31}{31} = 25.8\%
$$

Threshold: more than 16.2%. Actual 25.8%.

Reading the arithmetic against the claim: the rise is 25.8%, which exceeds 16.2% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 39, \quad \text{Shares} = 420,000
$$

$$
\text{MCap} = 39 \times 420,000 = €16.38\text{ million}
$$

Threshold: exceeds €12.5 million. Actual €16.38 million.

Reading the arithmetic against the claim: market cap €16.38m exceeds €12.5m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 420,000 = €13.02\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 420,000 = €16.38\text{m}
$$

$$
\frac{16.38 - 13.02}{13.02} = 25.8\%
$$

Threshold: more than 16.5%. Actual 25.8%.

Reading the arithmetic against the claim: MCap rose 25.8%, which exceeds 16.5% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 230, \quad \frac{\text{Shares}}{1,000} = 420
$$

$$
EPS = \frac{230}{420} = €0.5476
$$

Threshold: exceeds €0.39. Actual ≈ €0.55.

Reading the arithmetic against the claim: EPS €0.55 exceeds €0.39 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.127' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 128". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders …"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 13, \quad \text{Shares} = 676,000
$$

$$
\text{MCap} = 13 \times 676,000 = €8.79\text{ million}
$$

Threshold: exceeds €8.3 million. Actual €8.79 million.

Reading the arithmetic against the claim: market cap €8.79m exceeds €8.3m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 13
$$

$$
\frac{24 - 13}{13} = 84.6\%
$$

Threshold: more than 42.4%. Actual 84.6%.

Reading the arithmetic against the claim: the gap is 84.6%, which exceeds 42.4% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 353,000, \quad \text{Shares} = 676,000
$$

$$
\frac{353,000}{676,000} = 52.2\%
$$

Threshold: exceed 19.1%. Actual 52.2%.

Reading the arithmetic against the claim: turnover 52.2% exceeds 19.1% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 24, \quad P_{\text{last}} = 13
$$

$$
\frac{13 - 24}{24} = -45.8\%
$$

Threshold: more than 28.5%. Actual -45.8%.

Reading the arithmetic against the claim: the rise is -45.8%, which does not exceed 28.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.128' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 38
$$

$$
\frac{38 - 27}{27} = 40.7\%
$$

Threshold: more than 16%. Actual 40.7%.

Reading the arithmetic against the claim: the rise is 40.7%, which exceeds 16% so the statement holds.

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 129". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Every corporation must distribute a cash dividend to shareholders in each financial year by law."

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €276\text{ thousand}
$$

The statement claims this amount is below €213 thousand. Actual €276 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €276k is not below €213k so the statement does not hold.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 129". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Any increase in the listed price of already-issued shares transfers that increase as cash directly onto the company''s bank account."

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 129". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis."

The statement is false.'] WHERE case_id = 'CASE 6.1.129' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Franchise Agreements as Intangibles". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Because a development patent cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet."

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Non-current assets can never include a development patent. The reason — that section is reserved strictly for tangible items such as machinery. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A development patent is treated as inventory. The reason — it is intended for use rather than for display. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: For a clothing retailer, a corporate debenture appears separately from current liabilities. The reason given — it falls due after more than one year. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: For a clothing retailer, the overdraft borrowings appear within current liabilities. The reason given — settlement is expected within one year. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.130' AND tier = 'full';
