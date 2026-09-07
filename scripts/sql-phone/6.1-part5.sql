-- Update expanded explanations for 6.1-part5 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An operating licence is classified as a current asset. The reason — , being intangible, it is easily converted into cash within a year. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Vehicles as Fixed or Resale Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Because an operating licence cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet."

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A concession right lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Non-current assets can never include an operating licence. The reason — that section is reserved strictly for tangible items such as machinery. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An operating licence is treated as inventory. The reason — it is intended for use rather than for display. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.101' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a concession right cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cranes in Fixed Versus Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A concession right is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cranes in Fixed Versus Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a concession right from being classified as a non-current asset."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Cranes in Fixed Versus Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A concession right acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A concession right is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.102' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 103". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Any increase in the listed price of already-issued shares transfers that increase as cash directly onto the company''s bank account."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 29, \quad \text{Shares} = 889,000
$$

$$
\text{MCap} = 29 \times 889,000 = €25.78\text{ million}
$$

Threshold: exceeds €21.5 million. Actual €25.78 million.

Reading the arithmetic against the claim: market cap €25.78m exceeds €21.5m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 190, \quad \frac{\text{Shares}}{1,000} = 889
$$

$$
EPS = \frac{190}{889} = €0.2137
$$

Threshold: exceeds €0.15. Actual ≈ €0.21.

Reading the arithmetic against the claim: EPS €0.21 exceeds €0.15 so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 76,000 \quad (February)
$$

Threshold: exceeds 52,358. Actual 76,000.

Reading the arithmetic against the claim: peak volume 76,000 exceeds 52,358 so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 29
$$

$$
\frac{29 - 27}{27} = 7.4\%
$$

Threshold: more than 33.5%. Actual 7.4%.

Reading the arithmetic against the claim: the rise is 7.4%, which does not exceed 33.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.103' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 104". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 33
$$

$$
\frac{33 - 27}{27} = 22.2\%
$$

Threshold: more than 16.7%. Actual 22.2%.

Reading the arithmetic against the claim: the rise is 22.2%, which exceeds 16.7% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 33, \quad \text{Shares} = 629,000
$$

$$
\text{MCap} = 33 \times 629,000 = €20.76\text{ million}
$$

Threshold: exceeds €17 million. Actual €20.76 million.

Reading the arithmetic against the claim: market cap €20.76m exceeds €17m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 217, \quad \frac{\text{Shares}}{1,000} = 629
$$

$$
EPS = \frac{217}{629} = €0.3450
$$

Threshold: exceeds €0.27. Actual ≈ €0.34.

Reading the arithmetic against the claim: EPS €0.34 exceeds €0.27 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 33, \quad P_{\min} = 27
$$

$$
\frac{33 - 27}{27} = 22.2\%
$$

Threshold: more than 16.2%. Actual 22.2%.

Reading the arithmetic against the claim: the gap is 22.2%, which exceeds 16.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.104' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Ovens Held for Use or Sale". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "An operating licence loses its non-current classification as soon as the business begins actively using it."

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An exclusive distribution agreement lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although an exclusive distribution agreement cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Ovens Held for Use or Sale". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An exclusive distribution agreement is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A brand name is excluded from non-current assets. The reason — it has no physical substance. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.'] WHERE case_id = 'CASE 6.1.105' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 106". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 29, \quad \text{Shares} = 633,000
$$

$$
\text{MCap} = 29 \times 633,000 = €18.36\text{ million}
$$

Threshold: exceeds €15.4 million. Actual €18.36 million.

Reading the arithmetic against the claim: market cap €18.36m exceeds €15.4m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 37, \quad P_{\text{last}} = 29
$$

$$
\frac{29 - 37}{37} = -21.6\%
$$

Threshold: more than 29%. Actual -21.6%.

Reading the arithmetic against the claim: the rise is -21.6%, which does not exceed 29% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 37 \times 633,000 = €23.42\text{m}
$$

$$
\text{MCap}_{\text{last}} = 29 \times 633,000 = €18.36\text{m}
$$

$$
\frac{18.36 - 23.42}{23.42} = -21.6\%
$$

Threshold: more than 18.8%. Actual -21.6%.

Reading the arithmetic against the claim: MCap rose -21.6%, which does not exceed 18.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 38, \quad P_{\min} = 29
$$

$$
\frac{38 - 29}{29} = 31.0\%
$$

Threshold: more than 40%. Actual 31.0%.

Reading the arithmetic against the claim: the gap is 31.0%, which does not exceed 40% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.106' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 107". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the high…"

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 24, \quad P_{\text{last}} = 29
$$

$$
\frac{29 - 24}{24} = 20.8\%
$$

Threshold: more than 9.4%. Actual 20.8%.

Reading the arithmetic against the claim: the rise is 20.8%, which exceeds 9.4% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 29, \quad \text{Shares} = 799,000
$$

$$
\text{MCap} = 29 \times 799,000 = €23.17\text{ million}
$$

Threshold: exceeds €21.3 million. Actual €23.17 million.

Reading the arithmetic against the claim: market cap €23.17m exceeds €21.3m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 24 \times 799,000 = €19.18\text{m}
$$

$$
\text{MCap}_{\text{last}} = 29 \times 799,000 = €23.17\text{m}
$$

$$
\frac{23.17 - 19.18}{19.18} = 20.8\%
$$

Threshold: more than 30.8%. Actual 20.8%.

Reading the arithmetic against the claim: MCap rose 20.8%, which does not exceed 30.8% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 228, \quad \frac{\text{Shares}}{1,000} = 799
$$

$$
EPS = \frac{228}{799} = €0.2854
$$

Threshold: exceeds €0.25. Actual ≈ €0.29.

Reading the arithmetic against the claim: EPS €0.29 exceeds €0.25 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.107' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 108". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Skipping a dividend in a weak year is legally possible; the main risk is that investors find the shares less attractive if dividends stay unpaid for long."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 10, \quad \text{Shares} = 504,000
$$

$$
\text{MCap} = 10 \times 504,000 = €5.04\text{ million}
$$

Threshold: exceeds €4.3 million. Actual €5.04 million.

Reading the arithmetic against the claim: market cap €5.04m exceeds €4.3m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 18, \quad P_{\text{last}} = 10
$$

$$
\frac{10 - 18}{18} = -44.4\%
$$

Threshold: more than 27.8%. Actual -44.4%.

Reading the arithmetic against the claim: the rise is -44.4%, which does not exceed 27.8% so the statement does not hold.

The statement is false.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 267, \quad \frac{\text{Shares}}{1,000} = 504
$$

$$
EPS = \frac{267}{504} = €0.5298
$$

Threshold: exceeds €0.49. Actual ≈ €0.53.

Reading the arithmetic against the claim: EPS €0.53 exceeds €0.49 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 18, \quad P_{\min} = 10
$$

$$
\frac{18 - 10}{10} = 80.0\%
$$

Threshold: more than 17.8%. Actual 80.0%.

Reading the arithmetic against the claim: the gap is 80.0%, which exceeds 17.8% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.108' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Looms and Asset Classification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent an exclusive distribution agreement from being classified as a non-current asset."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A brand name is classified as a current asset. The reason — , being intangible, it is easily converted into cash within a year. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Looms and Asset Classification". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "An exclusive distribution agreement acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: An exclusive distribution agreement is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A software platform licence lacks physical substance but is classified as a non-current intangible asset. The reason given — it provides expected long-term benefit. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.109' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 110". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Any increase in the listed price of already-issued shares transfers that increase as cash directly onto the company''s bank account."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 28, \quad \text{Shares} = 635,000
$$

$$
\text{MCap} = 28 \times 635,000 = €17.78\text{ million}
$$

Threshold: exceeds €15.6 million. Actual €17.78 million.

Reading the arithmetic against the claim: market cap €17.78m exceeds €15.6m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 22, \quad P_{\text{last}} = 28
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 32.8%. Actual 27.3%.

Reading the arithmetic against the claim: the rise is 27.3%, which does not exceed 32.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 22
$$

$$
\frac{28 - 22}{22} = 27.3\%
$$

Threshold: more than 37.8%. Actual 27.3%.

Reading the arithmetic against the claim: the gap is 27.3%, which does not exceed 37.8% so the statement does not hold.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 110". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock."

The statement is false.'] WHERE case_id = 'CASE 6.1.110' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 111". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Common shareholders are entitled to vote at the annual stockholders'' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 25, \quad \text{Shares} = 501,000
$$

$$
\text{MCap} = 25 \times 501,000 = €12.53\text{ million}
$$

Threshold: exceeds €11.6 million. Actual €12.53 million.

Reading the arithmetic against the claim: market cap €12.53m exceeds €11.6m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 216, \quad \frac{\text{Shares}}{1,000} = 501
$$

$$
EPS = \frac{216}{501} = €0.4311
$$

Threshold: exceeds €0.37. Actual ≈ €0.43.

Reading the arithmetic against the claim: EPS €0.43 exceeds €0.37 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 31, \quad P_{\min} = 25
$$

$$
\frac{31 - 25}{25} = 24.0\%
$$

Threshold: more than 19.1%. Actual 24.0%.

Reading the arithmetic against the claim: the gap is 24.0%, which exceeds 19.1% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 387,000, \quad \text{Shares} = 501,000
$$

$$
\frac{387,000}{501,000} = 77.2\%
$$

Threshold: exceed 32.5%. Actual 77.2%.

Reading the arithmetic against the claim: turnover 77.2% exceeds 32.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.111' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Although a software platform licence cannot be touched, it appears among non-current assets rather than current assets. The reason given — of its long-term value. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tanks as Operating Equipment". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A software platform licence is recorded as an intangible non-current asset alongside tangible assets such as buildings and machinery."

The statement is true.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tanks as Operating Equipment". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "The absence of physical form does not prevent a software platform licence from being classified as a non-current asset."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Tanks as Operating Equipment". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Because a brand name cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet."

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tanks as Operating Equipment". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A software platform licence acquired to protect or support a business''s operations over several years is grouped with intangible non-current assets."

The statement is true.'] WHERE case_id = 'CASE 6.1.112' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 113". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 21, \quad \text{Shares} = 671,000
$$

$$
\text{MCap} = 21 \times 671,000 = €14.09\text{ million}
$$

Threshold: exceeds €11.7 million. Actual €14.09 million.

Reading the arithmetic against the claim: market cap €14.09m exceeds €11.7m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 31, \quad P_{\min} = 21
$$

$$
\frac{31 - 21}{21} = 47.6\%
$$

Threshold: more than 20%. Actual 47.6%.

Reading the arithmetic against the claim: the gap is 47.6%, which exceeds 20% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 347,000, \quad \text{Shares} = 671,000
$$

$$
\frac{347,000}{671,000} = 51.7\%
$$

Threshold: exceed 31.5%. Actual 51.7%.

Reading the arithmetic against the claim: turnover 51.7% exceeds 31.5% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 671,000
$$

The statement claims exactly 671,000. The extract reports 671,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 671,000 versus claimed 671,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.113' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A software platform licence is not classified as a current asset. The reason given — it is not expected to convert into cash within the normal operating cycle. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Non-current assets can never include a brand name. The reason — that section is reserved strictly for tangible items such as machinery. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A brand name is treated as inventory. The reason — it is intended for use rather than for display. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Tractors in Farm Business Balance Sheets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "A brand name loses its non-current classification as soon as the business begins actively using it."

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Tractors in Farm Business Balance Sheets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A packaging manufacturer that takes out a ten-year bank loan repayable in more than one year classifies the obligation as a non-current liability."

The statement is true.'] WHERE case_id = 'CASE 6.1.114' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Listed Company Performance Charts 115". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Market capitalisation is the total market value of a company''s outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 23, \quad P_{\text{last}} = 31
$$

$$
\frac{31 - 23}{23} = 34.8\%
$$

Threshold: more than 23%. Actual 34.8%.

Reading the arithmetic against the claim: the rise is 34.8%, which exceeds 23% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 31, \quad \text{Shares} = 860,000
$$

$$
\text{MCap} = 31 \times 860,000 = €26.66\text{ million}
$$

Threshold: exceeds €22.6 million. Actual €26.66 million.

Reading the arithmetic against the claim: market cap €26.66m exceeds €22.6m so the statement holds.

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Listed Company Performance Charts 115". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested."

The statement is false.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 23 \times 860,000 = €19.78\text{m}
$$

$$
\text{MCap}_{\text{last}} = 31 \times 860,000 = €26.66\text{m}
$$

$$
\frac{26.66 - 19.78}{19.78} = 34.8\%
$$

Threshold: more than 28.2%. Actual 34.8%.

Reading the arithmetic against the claim: MCap rose 34.8%, which exceeds 28.2% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.115' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 116". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Skipping a dividend in a weak year is legally possible; the main risk is that investors find the shares less attractive if dividends stay unpaid for long."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 15, \quad \text{Shares} = 654,000
$$

$$
\text{MCap} = 15 \times 654,000 = €9.81\text{ million}
$$

Threshold: exceeds €7.9 million. Actual €9.81 million.

Reading the arithmetic against the claim: market cap €9.81m exceeds €7.9m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 283, \quad \frac{\text{Shares}}{1,000} = 654
$$

$$
EPS = \frac{283}{654} = €0.4327
$$

Threshold: exceeds €0.31. Actual ≈ €0.43.

Reading the arithmetic against the claim: EPS €0.43 exceeds €0.31 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 22, \quad P_{\min} = 15
$$

$$
\frac{22 - 15}{15} = 46.7\%
$$

Threshold: more than 34.1%. Actual 46.7%.

Reading the arithmetic against the claim: the gap is 46.7%, which exceeds 34.1% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 363,000, \quad \text{Shares} = 654,000
$$

$$
\frac{363,000}{654,000} = 55.5\%
$$

Threshold: exceed 9%. Actual 55.5%.

Reading the arithmetic against the claim: turnover 55.5% exceeds 9% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.116' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 117". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Holders of preferred shares always vote at meetings, while common shareholders hold equity without voting rights."

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 86,000 \quad (June)
$$

Threshold: exceeds 95,580. Actual 86,000.

Reading the arithmetic against the claim: peak volume 86,000 does not exceed 95,580 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €212\text{ thousand}
$$

The statement claims this amount is below €201 thousand. Actual €212 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €212k is not below €201k so the statement does not hold.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 117". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock."

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 20, \quad P_{\text{last}} = 30
$$

$$
\frac{30 - 20}{20} = 50.0\%
$$

Threshold: more than 20.7%. Actual 50.0%.

Reading the arithmetic against the claim: the rise is 50.0%, which exceeds 20.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.117' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Scanners as Fixed Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A packaging manufacturer that owes supplier balances due within the next year classifies the obligation as a current liability."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A registered design is excluded from non-current assets. The reason — it has no physical substance. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: For a packaging manufacturer, a ten-year bank loan appears separately from current liabilities. The reason given — it falls due after more than one year. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A registered design is classified as a current asset. The reason — , being intangible, it is easily converted into cash within a year. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: For a packaging manufacturer, the supplier balances appear within current liabilities. The reason given — settlement is expected within one year. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.118' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary-market trades move cash between investors, not into the company.

When one shareholder sells shares to another on the exchange, the issuer is not a party to that trade and does not receive new share capital from it. Fresh equity cash arrives only from primary issues or similar company transactions.

Applied to this stem: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 33, \quad \text{Shares} = 514,000
$$

$$
\text{MCap} = 33 \times 514,000 = €16.96\text{ million}
$$

Threshold: exceeds €15.2 million. Actual €16.96 million.

Reading the arithmetic against the claim: market cap €16.96m exceeds €15.2m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 33
$$

$$
\frac{33 - 27}{27} = 22.2\%
$$

Threshold: more than 25.5%. Actual 22.2%.

Reading the arithmetic against the claim: the rise is 22.2%, which does not exceed 25.5% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 33, \quad P_{\min} = 27
$$

$$
\frac{33 - 27}{27} = 22.2\%
$$

Threshold: more than 18.2%. Actual 22.2%.

Reading the arithmetic against the claim: the gap is 22.2%, which exceeds 18.2% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 27 \times 514,000 = €13.88\text{m}
$$

$$
\text{MCap}_{\text{last}} = 33 \times 514,000 = €16.96\text{m}
$$

$$
\frac{16.96 - 13.88}{13.88} = 22.2\%
$$

Threshold: more than 23.7%. Actual 22.2%.

Reading the arithmetic against the claim: MCap rose 22.2%, which does not exceed 23.7% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.119' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 120". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Common shareholders are entitled to vote at the annual stockholders'' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 10, \quad \text{Shares} = 729,000
$$

$$
\text{MCap} = 10 \times 729,000 = €7.29\text{ million}
$$

Threshold: exceeds €6 million. Actual €7.29 million.

Reading the arithmetic against the claim: market cap €7.29m exceeds €6m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 314, \quad \frac{\text{Shares}}{1,000} = 729
$$

$$
EPS = \frac{314}{729} = €0.4307
$$

Threshold: exceeds €0.36. Actual ≈ €0.43.

Reading the arithmetic against the claim: EPS €0.43 exceeds €0.36 so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 18, \quad P_{\min} = 10
$$

$$
\frac{18 - 10}{10} = 80.0\%
$$

Threshold: more than 20.5%. Actual 80.0%.

Reading the arithmetic against the claim: the gap is 80.0%, which exceeds 20.5% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 18, \quad P_{\text{last}} = 10
$$

$$
\frac{10 - 18}{18} = -44.4\%
$$

Threshold: more than 17.8%. Actual -44.4%.

Reading the arithmetic against the claim: the rise is -44.4%, which does not exceed 17.8% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.1.120' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Printers for Office Use". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Because a registered design cannot be touched, it is recorded as an expense rather than as an asset on the balance sheet."

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: Non-current assets can never include a registered design. The reason — that section is reserved strictly for tangible items such as machinery. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A registered design is treated as inventory. The reason — it is intended for use rather than for display. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Printers for Office Use". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "A registered design loses its non-current classification as soon as the business begins actively using it."

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A ten-year bank loan owed by a packaging manufacturer does not increase current liabilities. The reason given — it is not due within the coming year. — fits the chapter rule. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is true.'] WHERE case_id = 'CASE 6.1.121' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 122". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Preferred shareholders vote at the stockholders'' meeting, while common shareholders never vote."

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 34, \quad P_{\min} = 27
$$

$$
\frac{34 - 27}{27} = 25.9\%
$$

Threshold: more than 26.3%. Actual 25.9%.

Reading the arithmetic against the claim: the gap is 25.9%, which does not exceed 26.3% so the statement does not hold.

The statement is false.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 27, \quad P_{\text{last}} = 34
$$

$$
\frac{34 - 27}{27} = 25.9\%
$$

Threshold: more than 16.9%. Actual 25.9%.

Reading the arithmetic against the claim: the rise is 25.9%, which exceeds 16.9% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 34, \quad \text{Shares} = 549,000
$$

$$
\text{MCap} = 34 \times 549,000 = €18.67\text{ million}
$$

Threshold: exceeds €14.6 million. Actual €18.67 million.

Reading the arithmetic against the claim: market cap €18.67m exceeds €14.6m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 27 \times 549,000 = €14.82\text{m}
$$

$$
\text{MCap}_{\text{last}} = 34 \times 549,000 = €18.67\text{m}
$$

$$
\frac{18.67 - 14.82}{14.82} = 25.9\%
$$

Threshold: more than 25.6%. Actual 25.9%.

Reading the arithmetic against the claim: MCap rose 25.9%, which exceeds 25.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.122' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Share Price and Market Capitalisation 123". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "Investors may seek income from dividends, capital gains if prices rise, influence through voting, or a hedge of real values against inflation."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 24
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 28.4%. Actual 26.3%.

Reading the arithmetic against the claim: the rise is 26.3%, which does not exceed 28.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 19 \times 807,000 = €15.33\text{m}
$$

$$
\text{MCap}_{\text{last}} = 24 \times 807,000 = €19.37\text{m}
$$

$$
\frac{19.37 - 15.33}{15.33} = 26.3\%
$$

Threshold: more than 30%. Actual 26.3%.

Reading the arithmetic against the claim: MCap rose 26.3%, which does not exceed 30% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 63,000 \quad (May)
$$

Threshold: exceeds 70,004. Actual 63,000.

Reading the arithmetic against the claim: peak volume 63,000 does not exceed 70,004 so the statement does not hold.

The statement is false.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Share Price and Market Capitalisation 123". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis."

The statement is false.'] WHERE case_id = 'CASE 6.1.123' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Delivery Vehicles as Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "If part of a packaging manufacturer''s ten-year bank loan becomes due within the next twelve months, that portion should move into current liabilities."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A development patent is excluded from non-current assets. The reason — it has no physical substance. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Delivery Vehicles as Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A clothing retailer that takes out a corporate debenture repayable in more than one year classifies the obligation as a non-current liability."

The statement is true.', 'FALSE — The balance sheet identity is Assets = Liabilities + Equity.

The claim states: A development patent is classified as a current asset. The reason — , being intangible, it is easily converted into cash within a year. — does not support that label under the chapter definitions. The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment.

The statement is false.', 'TRUE — The balance sheet identity is Assets = Liabilities + Equity.

The wording matches the relevant rule for "Delivery Vehicles as Non-Current Assets". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Applied here: "A clothing retailer that owes overdraft borrowings due within the next year classifies the obligation as a current liability."

The statement is true.'] WHERE case_id = 'CASE 6.1.124' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The balance sheet identity is Assets = Liabilities + Equity.

Absolute or misapplied wording conflicts with the rule for "Earnings Per Share From Reported Figures 125". The balance sheet identity is Assets = Liabilities + Equity. Classification follows intended use and timing: non-current vs current assets and liabilities; inventory is held for sale; fixed assets are used in operations beyond one year; equity is the owners'' residual claim and is not a scheduled debt repayment. Rejected claim: "Every corporation must distribute a cash dividend to shareholders in each financial year by law."

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 23, \quad \text{Shares} = 759,000
$$

$$
\text{MCap} = 23 \times 759,000 = €17.46\text{ million}
$$

Threshold: exceeds €16.3 million. Actual €17.46 million.

Reading the arithmetic against the claim: market cap €17.46m exceeds €16.3m so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 32, \quad P_{\min} = 23
$$

$$
\frac{32 - 23}{23} = 39.1\%
$$

Threshold: more than 27%. Actual 39.1%.

Reading the arithmetic against the claim: the gap is 39.1%, which exceeds 27% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 90,000 \quad (March)
$$

Threshold: exceeds 74,170. Actual 90,000.

Reading the arithmetic against the claim: peak volume 90,000 exceeds 74,170 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 759,000
$$

The statement claims exactly 759,000. The extract reports 759,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 759,000 versus claimed 759,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.1.125' AND tier = 'full';
