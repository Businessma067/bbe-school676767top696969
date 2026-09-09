-- Update expanded explanations for 6.1-part6 (5 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market capitalisation = shares × price; price can move for reasons unrelated to value.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €6.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.51.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €15-€24. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 84.7% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.126' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common shares vote; preferred shares usually emphasise dividend priority.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: Price change ≈ 25.8%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €16.4 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Apply the case evidence: €13.0m → €16.4m. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Earnings per share ≈ €0.55.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.127' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['These are the textbook''s key stock figures.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Market capitalisation ≈ €8.8 million.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'From the figures or classification rule involved, range €13-€24. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Turnover ≈ 52.2% of shares outstanding.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'Price change ≈ -45.8%.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.128' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Apply the case evidence: Price change ≈ 40.7%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'There is no universal legal duty to pay a dividend every year.

The absolute wording "every" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Operating result = 276.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'Listed price rises do not transfer cash to the issuer.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'That would be negative working capital and a liquidity concern; healthy working capital needs short-term resources above short-term debts.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.'] WHERE case_id = 'CASE 6.1.129' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A development patent with expected long-term benefit is recorded as an intangible non-current asset, not expensed immediately.

The absolute wording "cannot" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'The non-current assets section includes intangible items such as a development patent alongside tangible assets.

The absolute wording "never" turns a familiar idea into an overclaim. One ordinary counterexample is enough to reject it.

The statement is false.', 'Long-term exclusive use, not physical display, places a development patent among non-current intangible assets, not inventory.

Because that detail fails, the whole statement fails even if the topic word looks familiar.

The statement is false.', 'A longer settlement horizon separates the corporate debenture from the current liabilities of a clothing retailer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.', 'A short settlement horizon places the overdraft borrowings within the current liabilities of a clothing retailer.

That is exactly what the claim asserts, so the wording survives a careful check against the standard idea.

The statement is true.'] WHERE case_id = 'CASE 6.1.130' AND tier = 'full';
