-- Update expanded explanations for 6.3-part5 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A dairy cooperative is regarded as financing its chilling and pasteurising plant soundly only when they are covered mainly by short-term credit from feed suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between chilling and pasteurising plant and dairy products awaiting delivery on a dairy cooperative''s statements has no bearing on whether the business is becoming more or less capital-…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of clerical support employees are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Understanding the Operating Result in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by freight dispatch clerks is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to customer account executives are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.101' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 102". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders …"

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 43, \quad \text{Shares} = 512,000
$$

$$
\text{MCap} = 43 \times 512,000 = €22.02\text{ million}
$$

Threshold: exceeds €17.6 million. Actual €22.02 million.

Reading the arithmetic against the claim: market cap €22.02m exceeds €17.6m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 282, \quad \frac{\text{Shares}}{1,000} = 512
$$

$$
EPS = \frac{282}{512} = €0.5508
$$

Threshold: exceeds €0.41. Actual ≈ €0.55.

Reading the arithmetic against the claim: EPS €0.55 exceeds €0.41 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 378,000, \quad \text{Shares} = 512,000
$$

$$
\frac{378,000}{512,000} = 73.8\%
$$

Threshold: exceed 26%. Actual 73.8%.

Reading the arithmetic against the claim: turnover 73.8% exceeds 26% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 37, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 37}{37} = 16.2\%
$$

Threshold: more than 33.4%. Actual 16.2%.

Reading the arithmetic against the claim: the rise is 16.2%, which does not exceed 33.4% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.102' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A mining equipment lessor is regarded as financing its heavy mining equipment held for hire soundly only when they are covered mainly by a short-term equipment rental payable."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between heavy mining equipment held for hire and replacement parts inventory on a mining equipment lessor''s statements has no bearing on whether the business is becoming more or less ca…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Production-line materials consumed in manufacturing are included within cost of sales. The reason given — they are incurred directly in producing the goods that a mining equipment lessor has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of head office coordinators are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A textile dyeing company is regarded as financing its dyeing vats and finishing lines soundly only when they are covered mainly by short-term credit from dye suppliers."

The statement is false.'] WHERE case_id = 'CASE 6.3.103' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 104". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time."

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 527,000 = €16.34\text{m}
$$

$$
\text{MCap}_{\text{last}} = 39 \times 527,000 = €20.55\text{m}
$$

$$
\frac{20.55 - 16.34}{16.34} = 25.8\%
$$

Threshold: more than 18%. Actual 25.8%.

Reading the arithmetic against the claim: MCap rose 25.8%, which exceeds 18% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 294, \quad \frac{\text{Shares}}{1,000} = 527
$$

$$
EPS = \frac{294}{527} = €0.5579
$$

Threshold: exceeds €0.4. Actual ≈ €0.56.

Reading the arithmetic against the claim: EPS €0.56 exceeds €0.4 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 314,000, \quad \text{Shares} = 527,000
$$

$$
\frac{314,000}{527,000} = 59.6\%
$$

Threshold: exceed 18.8%. Actual 59.6%.

Reading the arithmetic against the claim: turnover 59.6% exceeds 18.8% so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 39
$$

$$
\frac{39 - 31}{31} = 25.8\%
$$

Threshold: more than 31%. Actual 25.8%.

Reading the arithmetic against the claim: the rise is 25.8%, which does not exceed 31% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.104' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 105". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Only an issue of new shares by the corporation itself raises equity finance; later trading between investors does not."

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 409,000 = €14.72\text{m}
$$

$$
\text{MCap}_{\text{last}} = 45 \times 409,000 = €18.41\text{m}
$$

$$
\frac{18.41 - 14.72}{14.72} = 25.0\%
$$

Threshold: more than 15.2%. Actual 25.0%.

Reading the arithmetic against the claim: MCap rose 25.0%, which exceeds 15.2% so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 242, \quad \frac{\text{Shares}}{1,000} = 409
$$

$$
EPS = \frac{242}{409} = €0.5917
$$

Threshold: exceeds €0.44. Actual ≈ €0.59.

Reading the arithmetic against the claim: EPS €0.59 exceeds €0.44 so the statement holds.

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 85,000 \quad (March)
$$

Threshold: exceeds 95,451. Actual 85,000.

Reading the arithmetic against the claim: peak volume 85,000 does not exceed 95,451 so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 45, \quad P_{\min} = 36
$$

$$
\frac{45 - 36}{36} = 25.0\%
$$

Threshold: more than 18.6%. Actual 25.0%.

Reading the arithmetic against the claim: the gap is 25.0%, which exceeds 18.6% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.105' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 106". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A high or rising price-earnings ratio can indicate either that a company''s shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth."

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 37, \quad P_{\text{last}} = 22
$$

$$
\frac{22 - 37}{37} = -40.5\%
$$

Threshold: more than 16.3%. Actual -40.5%.

Reading the arithmetic against the claim: the rise is -40.5%, which does not exceed 16.3% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 22, \quad \text{Shares} = 873,000
$$

$$
\text{MCap} = 22 \times 873,000 = €19.21\text{ million}
$$

Threshold: exceeds €17.7 million. Actual €19.21 million.

Reading the arithmetic against the claim: market cap €19.21m exceeds €17.7m so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 37 \times 873,000 = €32.30\text{m}
$$

$$
\text{MCap}_{\text{last}} = 22 \times 873,000 = €19.21\text{m}
$$

$$
\frac{19.21 - 32.30}{32.30} = -40.5\%
$$

Threshold: more than 8.5%. Actual -40.5%.

Reading the arithmetic against the claim: MCap rose -40.5%, which does not exceed 8.5% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €313\text{ thousand}
$$

The statement claims this amount is below €212 thousand. Actual €313 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €313k is not below €212k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.106' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between dyeing vats and finishing lines and dyed fabric stock on a textile dyeing company''s statements has no bearing on whether the business is becoming more or less capital-intensive."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Understanding the Operating Result for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by transport scheduling staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An appliance repair network is regarded as financing its diagnostic and repair equipment soundly only when they are covered mainly by short-term credit from components suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result for Analysts". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between diagnostic and repair equipment and spare repair components on an appliance repair network''s statements has no bearing on whether the business is becoming more or less capital-i…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to sales support staff are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.107' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 28, \quad P_{\text{last}} = 21
$$

$$
\frac{21 - 28}{28} = -25.0\%
$$

Threshold: more than 22.2%. Actual -25.0%.

Reading the arithmetic against the claim: the rise is -25.0%, which does not exceed 22.2% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 28 \times 431,000 = €12.07\text{m}
$$

$$
\text{MCap}_{\text{last}} = 21 \times 431,000 = €9.05\text{m}
$$

$$
\frac{9.05 - 12.07}{12.07} = -25.0\%
$$

Threshold: more than 19.9%. Actual -25.0%.

Reading the arithmetic against the claim: MCap rose -25.0%, which does not exceed 19.9% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 28, \quad P_{\min} = 21
$$

$$
\frac{28 - 21}{21} = 33.3\%
$$

Threshold: more than 35.9%. Actual 33.3%.

Reading the arithmetic against the claim: the gap is 33.3%, which does not exceed 35.9% so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €263\text{ thousand}
$$

The statement claims this amount is below €220 thousand. Actual €263 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €263k is not below €220k so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 108". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Investors may seek income from dividends, capital gains if prices rise, influence through voting, or a hedge of real values against inflation."

The statement is true.'] WHERE case_id = 'CASE 6.3.108' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A seed and fertiliser distributor is regarded as financing its seed processing plant soundly only when they are covered mainly by short-term credit from seed suppliers."

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between seed processing plant and seed and fertiliser stock on a seed and fertiliser distributor''s statements has no bearing on whether the business is becoming more or less capital-int…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct input costs of the manufacturing process are included within cost of sales. The reason given — they are incurred directly in producing the goods that a textile dyeing company has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "A scaffolding rental firm is regarded as financing its scaffolding held for long-term hire soundly only when they are covered mainly by a short-term scaffolding materials payable."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of general administrative staff are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.109' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Understanding the Operating Result in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by outbound packing staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between scaffolding held for long-term hire and scaffolding materials awaiting short-term hire on a scaffolding rental firm''s statements has no bearing on whether the business is becomi…"

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to territory sales representatives are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Understanding the Operating Result in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "An industrial cleaning company is regarded as financing its industrial cleaning machinery soundly only when they are covered mainly by short-term credit from chemical suppliers."

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct labour hours spent producing the goods sold are included within cost of sales. The reason given — they are incurred directly in producing the goods that an appliance repair network has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.110' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 111". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 21, \quad \text{Shares} = 713,000
$$

$$
\text{MCap} = 21 \times 713,000 = €14.97\text{ million}
$$

Threshold: exceeds €13.4 million. Actual €14.97 million.

Reading the arithmetic against the claim: market cap €14.97m exceeds €13.4m so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 30, \quad P_{\text{last}} = 21
$$

$$
\frac{21 - 30}{30} = -30.0\%
$$

Threshold: more than 21.6%. Actual -30.0%.

Reading the arithmetic against the claim: the rise is -30.0%, which does not exceed 21.6% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 30, \quad P_{\min} = 21
$$

$$
\frac{30 - 21}{21} = 42.9\%
$$

Threshold: more than 39%. Actual 42.9%.

Reading the arithmetic against the claim: the gap is 42.9%, which exceeds 39% so the statement holds.

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 30 \times 713,000 = €21.39\text{m}
$$

$$
\text{MCap}_{\text{last}} = 21 \times 713,000 = €14.97\text{m}
$$

$$
\frac{14.97 - 21.39}{21.39} = -30.0\%
$$

Threshold: more than 34.3%. Actual -30.0%.

Reading the arithmetic against the claim: MCap rose -30.0%, which does not exceed 34.3% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.111' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 112". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A high or rising price-earnings ratio can indicate either that a company''s shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth."

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 20, \quad P_{\min} = 11
$$

$$
\frac{20 - 11}{11} = 81.8\%
$$

Threshold: more than 19.5%. Actual 81.8%.

Reading the arithmetic against the claim: the gap is 81.8%, which exceeds 19.5% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 342,000, \quad \text{Shares} = 446,000
$$

$$
\frac{342,000}{446,000} = 76.7\%
$$

Threshold: exceed 21.9%. Actual 76.7%.

Reading the arithmetic against the claim: turnover 76.7% exceeds 21.9% so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 446,000
$$

The statement claims exactly 446,000. The extract reports 446,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 446,000 versus claimed 446,000 so the statement holds.

The statement is true.', 'TRUE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €212\text{ thousand}
$$

The statement claims this amount is below €257 thousand. Actual €212 thousand is below that threshold.

Reading the arithmetic against the claim: operating result €212k is below €257k so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.112' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 113". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the high…"

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 19, \quad P_{\min} = 14
$$

$$
\frac{19 - 14}{14} = 35.7\%
$$

Threshold: more than 34.7%. Actual 35.7%.

Reading the arithmetic against the claim: the gap is 35.7%, which exceeds 34.7% so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 353,000, \quad \text{Shares} = 688,000
$$

$$
\frac{353,000}{688,000} = 51.3\%
$$

Threshold: exceed 23.6%. Actual 51.3%.

Reading the arithmetic against the claim: turnover 51.3% exceeds 23.6% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 88,000 \quad (May)
$$

Threshold: exceeds 77,004. Actual 88,000.

Reading the arithmetic against the claim: peak volume 88,000 exceeds 77,004 so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 14
$$

$$
\frac{14 - 19}{19} = -26.3\%
$$

Threshold: more than 18.5%. Actual -26.3%.

Reading the arithmetic against the claim: the rise is -26.3%, which does not exceed 18.5% so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.113' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of office-based support personnel are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense in Practice". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by courier dispatch personnel is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to the wholesale sales team are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Materials directly used assembling the units sold are included within cost of sales. The reason given — they are incurred directly in producing the goods that a seed and fertiliser distributor has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The direct cost of inventory purchased for resale are included within cost of sales. The reason given — they are incurred directly in producing the goods that a scaffolding rental firm has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.'] WHERE case_id = 'CASE 6.3.114' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 33
$$

$$
\frac{33 - 31}{31} = 6.5\%
$$

Threshold: more than 8.1%. Actual 6.5%.

Reading the arithmetic against the claim: the rise is 6.5%, which does not exceed 8.1% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 115". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time."

The statement is true.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 831,000 = €25.76\text{m}
$$

$$
\text{MCap}_{\text{last}} = 33 \times 831,000 = €27.42\text{m}
$$

$$
\frac{27.42 - 25.76}{25.76} = 6.5\%
$$

Threshold: more than 25.8%. Actual 6.5%.

Reading the arithmetic against the claim: MCap rose 6.5%, which does not exceed 25.8% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 33, \quad P_{\min} = 28
$$

$$
\frac{33 - 28}{28} = 17.9\%
$$

Threshold: more than 20.8%. Actual 17.9%.

Reading the arithmetic against the claim: the gap is 17.9%, which does not exceed 20.8% so the statement does not hold.

The statement is false.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 33, \quad \text{Shares} = 831,000
$$

$$
\text{MCap} = 33 \times 831,000 = €27.42\text{ million}
$$

Threshold: exceeds €21.2 million. Actual €27.42 million.

Reading the arithmetic against the claim: market cap €27.42m exceeds €21.2m so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.115' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 116". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same."

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 265, \quad \frac{\text{Shares}}{1,000} = 790
$$

$$
EPS = \frac{265}{790} = €0.3354
$$

Threshold: exceeds €0.3. Actual ≈ €0.34.

Reading the arithmetic against the claim: EPS €0.34 exceeds €0.3 so the statement holds.

The statement is true.', 'TRUE — Six-month share turnover compares cumulative volume traded with the number of shares outstanding.

Name the identity in words: turnover = six-month volume ÷ shares outstanding.

$$
\text{Volume} = 364,000, \quad \text{Shares} = 790,000
$$

$$
\frac{364,000}{790,000} = 46.1\%
$$

Threshold: exceed 16.5%. Actual 46.1%.

Reading the arithmetic against the claim: turnover 46.1% exceeds 16.5% so the statement holds.

The statement is true.', 'TRUE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 85,000 \quad (March)
$$

Threshold: exceeds 63,134. Actual 85,000.

Reading the arithmetic against the claim: peak volume 85,000 exceeds 63,134 so the statement holds.

The statement is true.', 'TRUE — Shares outstanding are an annual stock figure reported beside the price table; the claim is simply whether that figure equals the stated count.

Read shares outstanding from the annual figures attached to the extract:

$$
\text{Shares outstanding} = 790,000
$$

The statement claims exactly 790,000. The extract reports 790,000, which matches the claim.

Reading the arithmetic against the claim: extract reports 790,000 versus claimed 790,000 so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.116' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 36, \quad P_{\text{last}} = 43
$$

$$
\frac{43 - 36}{36} = 19.4\%
$$

Threshold: more than 27.4%. Actual 19.4%.

Reading the arithmetic against the claim: the rise is 19.4%, which does not exceed 27.4% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 36 \times 801,000 = €28.84\text{m}
$$

$$
\text{MCap}_{\text{last}} = 43 \times 801,000 = €34.44\text{m}
$$

$$
\frac{34.44 - 28.84}{28.84} = 19.4\%
$$

Threshold: more than 32.6%. Actual 19.4%.

Reading the arithmetic against the claim: MCap rose 19.4%, which does not exceed 32.6% so the statement does not hold.

The statement is false.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 87,000 \quad (June)
$$

Threshold: exceeds 94,422. Actual 87,000.

Reading the arithmetic against the claim: peak volume 87,000 does not exceed 94,422 so the statement does not hold.

The statement is false.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €309\text{ thousand}
$$

The statement claims this amount is below €219 thousand. Actual €309 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €309k is not below €219k so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Share Price and Market Capitalisation 117". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Working capital should be positive, meaning current assets should be higher than current liabilities."

The statement is true.'] WHERE case_id = 'CASE 6.3.117' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

Absolute or misapplied wording conflicts with the rule for "Expenditure Versus Expense Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Rejected claim: "The balance between industrial cleaning machinery and cleaning supplies inventory on an industrial cleaning company''s statements has no bearing on whether the business is becoming more or less capi…"

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of head office administrators are included within cost of sales. The reason — every employee contributes in some way to the goods that are sold. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Pay earned by despatch and loading staff is included within cost of sales. The reason — moving finished goods is considered part of manufacturing them. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of head office clerical staff are kept out of cost of sales. The reason given — their duties are not directly involved in producing the goods that are sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense Explained". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Pay earned by distribution warehouse staff is treated as a distribution cost rather than cost of sales, since their work happens after production of the goods is complete."

The statement is true.'] WHERE case_id = 'CASE 6.3.118' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 119". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time."

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 12, \quad \text{Shares} = 512,000
$$

$$
\text{MCap} = 12 \times 512,000 = €6.14\text{ million}
$$

Threshold: exceeds €4.8 million. Actual €6.14 million.

Reading the arithmetic against the claim: market cap €6.14m exceeds €4.8m so the statement holds.

The statement is true.', 'TRUE — EPS here links the operating result (in € thousands) to shares outstanding (scaled to thousands of shares).

Name the identity in words: EPS = operating result (€ thousands) ÷ (shares outstanding ÷ 1,000).

$$
\text{Operating result} = 287, \quad \frac{\text{Shares}}{1,000} = 512
$$

$$
EPS = \frac{287}{512} = €0.5605
$$

Threshold: exceeds €0.45. Actual ≈ €0.56.

Reading the arithmetic against the claim: EPS €0.56 exceeds €0.45 so the statement holds.

The statement is true.', 'FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 18, \quad P_{\text{last}} = 12
$$

$$
\frac{12 - 18}{18} = -33.3\%
$$

Threshold: more than 21.1%. Actual -33.3%.

Reading the arithmetic against the claim: the rise is -33.3%, which does not exceed 21.1% so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 18, \quad P_{\min} = 12
$$

$$
\frac{18 - 12}{12} = 50.0\%
$$

Threshold: more than 35.5%. Actual 50.0%.

Reading the arithmetic against the claim: the gap is 50.0%, which exceeds 35.5% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.119' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to account managers are included within cost of sales. The reason — generating sales is necessary before any revenue can be recognised. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Raw materials consumed directly in production are excluded from cost of sales. The reason — only costs paid in cash during the same month count toward it. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to key account managers are excluded from cost of sales. The reason given — selling activity takes place only after the goods have already been produced. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of payroll and accounts clerks are included within cost of sales. The reason — every employee contributes in some way to the goods that are sold. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Pay earned by outbound freight handlers is included within cost of sales. The reason — moving finished goods is considered part of manufacturing them. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.'] WHERE case_id = 'CASE 6.3.120' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 24, \quad P_{\text{last}} = 19
$$

$$
\frac{19 - 24}{24} = -20.8\%
$$

Threshold: more than 24.2%. Actual -20.8%.

Reading the arithmetic against the claim: the rise is -20.8%, which does not exceed 24.2% so the statement does not hold.

The statement is false.', 'FALSE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 24 \times 453,000 = €10.87\text{m}
$$

$$
\text{MCap}_{\text{last}} = 19 \times 453,000 = €8.61\text{m}
$$

$$
\frac{8.61 - 10.87}{10.87} = -20.8\%
$$

Threshold: more than 8.4%. Actual -20.8%.

Reading the arithmetic against the claim: MCap rose -20.8%, which does not exceed 8.4% so the statement does not hold.

The statement is false.', 'FALSE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 24, \quad P_{\min} = 19
$$

$$
\frac{24 - 19}{19} = 26.3\%
$$

Threshold: more than 32.1%. Actual 26.3%.

Reading the arithmetic against the claim: the gap is 26.3%, which does not exceed 32.1% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Listed Company Performance Charts 121". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover."

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 84,000 \quad (January)
$$

Threshold: exceeds 87,473. Actual 84,000.

Reading the arithmetic against the claim: peak volume 84,000 does not exceed 87,473 so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.121' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 122". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Working capital should be positive, meaning current assets should be higher than current liabilities."

The statement is true.', 'TRUE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 31, \quad P_{\text{last}} = 40
$$

$$
\frac{40 - 31}{31} = 29.0\%
$$

Threshold: more than 13.9%. Actual 29.0%.

Reading the arithmetic against the claim: the rise is 29.0%, which exceeds 13.9% so the statement holds.

The statement is true.', 'TRUE — Market capitalisation values the equity at the latest closing price times shares outstanding.

Name the identity in words: market capitalisation = last closing price × shares outstanding.

$$
P_{\text{last}} = 40, \quad \text{Shares} = 636,000
$$

$$
\text{MCap} = 40 \times 636,000 = €25.44\text{ million}
$$

Threshold: exceeds €21.7 million. Actual €25.44 million.

Reading the arithmetic against the claim: market cap €25.44m exceeds €21.7m so the statement holds.

The statement is true.', 'TRUE — With shares outstanding unchanged, market-cap growth equals the percentage change in the share price between first and last month.

Name the identity in words: market-cap change = (last MCap − first MCap) ÷ first MCap.

$$
\text{MCap}_{\text{first}} = 31 \times 636,000 = €19.72\text{m}
$$

$$
\text{MCap}_{\text{last}} = 40 \times 636,000 = €25.44\text{m}
$$

$$
\frac{25.44 - 19.72}{19.72} = 29.0\%
$$

Threshold: more than 22.3%. Actual 29.0%.

Reading the arithmetic against the claim: MCap rose 29.0%, which exceeds 22.3% so the statement holds.

The statement is true.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 40, \quad P_{\min} = 31
$$

$$
\frac{40 - 31}{31} = 29.0\%
$$

Threshold: more than 18.7%. Actual 29.0%.

Reading the arithmetic against the claim: the gap is 29.0%, which exceeds 18.7% so the statement holds.

The statement is true.'] WHERE case_id = 'CASE 6.3.122' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Production costs directly tied to units manufactured are included within cost of sales. The reason given — they are incurred directly in producing the goods that an industrial cleaning company has sold. — fits the chapter rule. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "When a beverage bottling company buys a bottling line, only the depreciation charged in each period becomes an expense in that period''s income statement, even though the full expenditure occurs at …"

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to field sales representatives are included within cost of sales. The reason — generating sales is necessary before any revenue can be recognised. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Not every expenditure a beverage bottling company makes during a year shows up as an expense in that same year''s income statement."

The statement is true.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense Over Time". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Not every expenditure a joinery and furniture workshop makes during a year shows up as an expense in that same year''s income statement."

The statement is true.'] WHERE case_id = 'CASE 6.3.123' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Expenditure Versus Expense in Context". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "When a plastics moulding company buys an injection-moulding machine, only the depreciation charged in each period becomes an expense in that period''s income statement, even though the full expendit…"

The statement is true.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Direct factory labour on the production line are excluded from cost of sales. The reason — only costs paid in cash during the same month count toward it. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: The wages of reception and clerical staff are included within cost of sales. The reason — every employee contributes in some way to the goods that are sold. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Pay earned by delivery drivers is included within cost of sales. The reason — moving finished goods is considered part of manufacturing them. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.', 'FALSE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The claim states: Amounts paid to the retail sales team are included within cost of sales. The reason — generating sales is necessary before any revenue can be recognised. — does not support that label under the chapter definitions. Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance.

The statement is false.'] WHERE case_id = 'CASE 6.3.124' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Price appreciation from the first listed month to the last is a simple percentage change on the closing prices.

Name the identity in words: price rise = (last closing price − first closing price) ÷ first closing price.

$$
P_{\text{first}} = 19, \quad P_{\text{last}} = 11
$$

$$
\frac{11 - 19}{19} = -42.1\%
$$

Threshold: more than 16.5%. Actual -42.1%.

Reading the arithmetic against the claim: the rise is -42.1%, which does not exceed 16.5% so the statement does not hold.

The statement is false.', 'TRUE — Single-year statements need cautious reading: policies, estimates, and one-offs matter.

The wording matches the relevant rule for "Earnings Per Share From Reported Figures 125". Single-year statements need cautious reading: policies, estimates, and one-offs matter. Ratios (liquidity, gearing, margins, returns) put line items in context. Financial accounting serves external users; audits give reasonable, not absolute, assurance. Applied here: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers."

The statement is true.', 'FALSE — Peak monthly turnover is simply the largest shares-traded figure among the months in the table.

Scan each month''s volume and take the maximum.

$$
\text{Peak volume} = 87,000 \quad (May)
$$

Threshold: exceeds 88,732. Actual 87,000.

Reading the arithmetic against the claim: peak volume 87,000 does not exceed 88,732 so the statement does not hold.

The statement is false.', 'TRUE — The high–low gap is the percentage by which the peak closing price exceeds the trough closing price in the table.

Name the identity in words: high–low gap = (highest close − lowest close) ÷ lowest close.

$$
P_{\max} = 19, \quad P_{\min} = 11
$$

$$
\frac{19 - 11}{11} = 72.7\%
$$

Threshold: more than 23.5%. Actual 72.7%.

Reading the arithmetic against the claim: the gap is 72.7%, which exceeds 23.5% so the statement holds.

The statement is true.', 'FALSE — Operating result is taken from the annual figures beside the share table and compared with the stated euro-thousand threshold.

Read the operating result from the extract:

$$
\text{Operating result} = €310\text{ thousand}
$$

The statement claims this amount is below €270 thousand. Actual €310 thousand is not below that threshold.

Reading the arithmetic against the claim: operating result €310k is not below €270k so the statement does not hold.

The statement is false.'] WHERE case_id = 'CASE 6.3.125' AND tier = 'full';
