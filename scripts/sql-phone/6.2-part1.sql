-- Update expanded explanations for 6.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investing: -246, -362.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Borrowing proceeds: 77 then 53.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dividends: 57 then 73.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term asset purchases are investing outflows.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.001' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term asset purchases are investing outflows.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 39.0% then 38.6%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Revenue changed by about 21.4% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The operating result changed by about 17.0% between the two years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Interest coverage in Year 1 ≈ 15.5 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.002' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit is the residual of revenues over costs and expenses.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Sum of annual charges ≈ €28,652.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Carrying value ≈ €26,500.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Useful life is 3 years with no residual value.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Combined carrying value ≈ €153,045.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.003' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Negative investing cash flow often just means assets were purchased.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loan repayments are financing, not operating.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.004' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The balance sheet does not show sales made during the year; that figure belongs in the statement of profit and loss.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Depreciation specifically reflects the loss of value a fixed asset experiences through use.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Without depreciation, an asset stays at its original cost in the accounts, overstating rather than reflecting its real worth.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Depreciation does not itself cause a cash payment in the year it is charged; the cash was paid when the asset was bought.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Depreciation allocates the loss of value a fixed asset suffers through use across the years it is expected to be used.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.005' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['It often only means assets were purchased.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Operating cash flow rose by about 14.3%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Financing moved from 21 to -6.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dividends grew ≈ 43.6%; operating cash flow grew ≈ 14.3%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.006' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land is not depreciated.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 410

Current liabilities gather the short-term claims:

Current liabilities = 278

Current ratio = 410 / 278 ≈ 1.47

The claim says the ratio below 1. We have about 1.47, which does not match that comparison.

The statement is false.', 'Equity ratio = total equity / total assets.

477 / 1063 ≈ 44.9%

The claim says the ratio below 23.4%. We have about 44.9%, which does not match that comparison.

The statement is false.', 'Working capital = current assets minus current liabilities.

410 - 278 = 132

The claim cites 132. We have 132, so the figures line up.

The statement is true.', 'From the figures or classification rule involved, debt ratio ≈ 55.1%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.007' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Straight-line depreciation produces an equal annual charge across the useful life, not a varying one.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Land is generally excluded from depreciation because it does not wear out through use the way other fixed assets do.

The absolute wording "all" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Profit increases equity, typically through retained earnings, rather than reducing it.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Skipping depreciation leaves an asset recorded above its real economic value once it has been used for some time.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A loss reduces equity by lowering retained earnings; it does not increase equity.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.008' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Customer collections belong in operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Long-term asset purchases are investing outflows.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.009' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A loss lowers retained earnings and therefore reduces total equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Non-cash items and timing differences mean profit and cash movement typically diverge.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Day-to-day trading, such as receipts from customers and payments to suppliers and employees, is captured in the operating section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Borrowing and loan repayments are financing activities; operating cash flow instead reflects core trading.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Spending on or proceeds from long-term assets such as equipment or property sit in the investing section.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.010' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Core trading is reflected in operating cash flow; investing cash flow relates to long-term assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Buying or selling long-term assets is an investing activity, not a financing one.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Transactions with lenders and owners are grouped in the financing section of the cash flow statement.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investing outflows often simply reflect spending on new long-term assets rather than financial distress.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The net change in cash is exactly the sum of the operating, investing and financing cash flows for the period.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.011' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Negative investing cash flow often just means assets were purchased.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Loan repayments are financing, not operating.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.012' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Operating cash flow rose by about 8.2%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'They are operating inflows.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Carrying value equals cost less accumulated depreciation.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Those sit outside cost of sales as operating expenses.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.013' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-cash charges and timing differences mean a profitable business can still see its cash balance fall during the year.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Depreciation is a non-cash charge, so it is added back to profit when working out cash generated from operations.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Carrying value equals original cost less the depreciation built up against the asset since it was acquired.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Working capital movements affect cash without moving through the statement of profit and loss in the same way, creating a gap between profit and operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.014' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['That is the balance sheet''s job; the income statement covers a period.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Gross margins were 36.0% then 35.7%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Revenue changed by about 21.3% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 18.6 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Operating margin in year 2 ≈ 27.2%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.015' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Depreciation is non-cash; the cash was usually paid when the asset was bought.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Sum of annual charges ≈ €32,833.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Residual value is deducted from cost before spreading the remainder.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'About 30.0% of the machinery''s cost is depreciated after three years.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Delivery truck ≈ €8,500 a year versus computer equipment ≈ €7,333 a year.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.016' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-cash charges and the timing of cash receipts and payments mean a profitable year can still coincide with a falling cash balance.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buying long-term assets such as heavy construction machinery is an investing decision, so the outflow is classified as an investing cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buying long-term assets such as point-of-sale tills is an investing decision, so the outflow is classified as an investing cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.017' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Negative investing cash flow often just means assets were purchased.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loan repayments are financing, not operating.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.018' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Straight-line yields equal annual charges.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Cost of sales excludes admin and distribution.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit and cash movement are different concepts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Depreciation spreads the cost of use over time.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.019' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Collecting money owed by a customer relates to core trading activity, so it is classified as an operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Repaying borrowed funds relates to how the business is financed, so it is classified as a financing cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buying long-term assets such as laptop computers is an investing decision, so the outflow is classified as an investing cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'The balance sheet is a snapshot at a single date; the statement of profit and loss instead summarises revenue and costs across a period.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Profit for the year raises retained earnings, which in turn increases total equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.020' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 230

Current liabilities gather the short-term claims:

Current liabilities = 176

Current ratio = 230 / 176 ≈ 1.31

The claim says the ratio below 1.28. We have about 1.31, which does not match that comparison.

The statement is false.', 'Buildings are about 39.4% of total assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Cash and cash equivalents are about 13.0% of current assets.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Current assets = 230

Current liabilities gather the short-term claims:

Current liabilities = 176

Current ratio = 230 / 176 ≈ 1.31

The claim says the ratio exceeds 1.21. We have about 1.31, which matches that comparison.

The statement is true.'] WHERE case_id = 'CASE 6.2.021' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Collecting money from a customer relates to core trading, so it belongs in the operating section, not the financing section.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Loan repayments relate to how the business is financed, so they belong in the financing section, not the operating section.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A loss for the year lowers retained earnings, which in turn reduces total equity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Buying long-term assets such as dispensing equipment is an investing decision, so the outflow belongs in the investing section, not the operating section.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'This reverses the two statements: the balance sheet is the point-in-time snapshot, and the statement of profit and loss covers the period.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.2.022' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Land is not depreciated.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Operating cash flow rose by about 17.6%.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'It often only means assets were purchased.

The absolute wording "always" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Profit and cash movement are different concepts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.023' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['This matches the textbook emphasis on operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Gross margins were 34.1% then 34.2%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Revenue changed by about 19.8% between the two years.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Finance costs moved from 15 to 22; operating result moved from 241 to 290.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Interest coverage in Year 1 ≈ 16.1 times.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.024' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are financing outflows, not investing.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Dividend payments are a financing activity.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Negative investing cash flow often just means assets were purchased.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Investing and financing are recorded separately.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Customer collections belong in operating cash flow.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.2.025' AND tier = 'full';
