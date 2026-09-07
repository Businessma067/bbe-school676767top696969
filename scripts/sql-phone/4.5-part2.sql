-- Update expanded explanations for 4.5-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Near-term bank loans for working capital are short-term debt.

Applied carefully, "Working-capital bank loans repayable within a year belong to short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Commercial bank lending over many years is long-term debt.

Applied carefully, "Multi-year borrowing from a commercial bank is long-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year scheduled bank loans are long-term external debt.

Applied carefully, "Scheduled bank lending with repayment over several years counts as long-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds sold to investors are long-term debt with creditor status.

Applied carefully, "Marketable bonds sold to outside investors are long-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond issues raise long-term debt from external investors.

Applied carefully, "Issuing bonds to raise creditor funds from investors is long-term external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner lending creates long-term external debt, not equity.

Applied carefully, "Owners who lend money to their own firm provide long-term credit classified as external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds are long-term external debt; coupon receipts do not make bondholders equity owners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner loans sit in long-term credit as external debt.

Applied carefully, "A long-term loan from owners appears under long-term credit as external debt finance in the overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit is short-term external debt finance, not internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Repayable creditor funds are always external debt.

Applied carefully, "All borrowed funds that must be repaid to creditors constitute external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Outside creditor funds are debt finance under the overview.

Applied carefully, "Creditor finance obtained from parties outside the business is always classified as debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity in the overview spans internal retention and external share capital.

Applied carefully, "The finance overview lists both internal retained earnings and external share capital under equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Large-firm balance sheets show equity and debt funding sources.

Applied carefully, "Mandatory balance sheets for large firms disclose how equity and debt sources have funded assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Published balance sheets reveal the finance sources behind assets.

Applied carefully, "Large corporations must publish balance sheets showing the sources of finance used to acquire assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts appear in table 3 as short-term credit examples.

Applied carefully, "Table 3 places bank overdrafts among the commonly used short-term credit sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit and overdrafts are paired as short-term debt examples.

Applied carefully, "The overview lists trade credit alongside bank overdrafts as examples of short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The short-term credit category covers trade credit, overdrafts, and short-term loans.

Applied carefully, "Short-term credit in the overview includes trade credit, overdrafts, and short-term bank loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term credit groups bank loans, owner loans, and bonds together.

Applied carefully, "Long-term credit in the overview includes bank loans, loans from owners, and bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term bank loans are long-term external debt even when the first instalment is due soon.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings fund the firm internally without creditor interest.

Applied carefully, "Internal equity from retained earnings avoids the interest charges that accompany borrowed funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are internal equity, not external creditor finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor funds are external equity regardless of whether investors are also employees.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital adds external equity without creditor repayment obligations.

Applied carefully, "External equity from share capital increases ownership funding without creating creditor claims" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds create creditor claims distinct from share ownership.

Applied carefully, "Bondholders hold creditor claims, whereas shareholders hold ownership claims on the corporation" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Seasonal overdraft use stays within short-term debt classification.

Applied carefully, "A renewable overdraft used for seasonal cash management remains short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Purchasing new shares with investor funds is external equity finance.

Applied carefully, "Investor funds used to purchase newly issued shares are external equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Accumulated retained profit stays internal equity across reporting periods.

Applied carefully, "Retained earnings accumulated over several profitable years remain internal equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Balance-sheet share capital represents external equity from investors.

Applied carefully, "Share capital recorded on the balance sheet reflects external equity contributed by investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Inventory bank loans with near-term repayment are short-term debt.

Applied carefully, "Short-term bank loans arranged to finance inventory purchases are short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset-matched multi-year bank loans are long-term debt.

Applied carefully, "Long-term bank loans matched to factory assets with lengthy useful lives are long-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Holding retained earnings does not convert external debt into internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity; receiving dividends later does not make investor funds debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Repeated quarterly use does not convert overdrafts into long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Expansion bond issues provide long-term external debt.

Applied carefully, "Bond finance raised for a major expansion project is long-term external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Meeting coupons from operating cash flow does not make bond finance internal; bonds remain external debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multi-year owner loans are long-term credit, not equity.

Applied carefully, "Owner-provided loans with multi-year repayment schedules are long-term credit within debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings remain internal equity despite arising from external trading.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner loans are classified as long-term credit in the overview, not automatically as short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Large businesses disclose both equity and debt on the balance sheet.

Applied carefully, "Equity finance and debt finance are both disclosed through the balance sheet of a large business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit is short-term debt despite long supplier relationships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital is external equity from outside investors, not internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'External audit verification does not convert retained earnings into external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor funds and retained earnings form the equity pair in the overview.

Applied carefully, "Funds from investors and retained earnings are the two broad equity components in the finance overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond debt carries interest obligations that retained earnings do not.

Applied carefully, "External debt from bonds must be serviced with interest, unlike internal equity from retained earnings" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Registering shares internally does not make share capital internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Month-end supplier credit for materials is short-term debt.

Applied carefully, "Trade credit for raw materials delivered today but paid for next month is short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt; monthly net-asset effects do not reclassify them as equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Supplier loyalty does not make trade credit equity; it remains short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Semi-annual coupons do not make bonds short-term debt; bonds are long-term credit.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Annual bank review does not reclassify a multi-year loan as short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The equity side spans share capital, investor funds, and retained earnings.

Applied carefully, "Share capital, investor funds, and retained earnings together cover the equity side of the finance table" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Routine short-term needs are met by overdrafts, trade credit, and short-term loans.

Applied carefully, "Bank overdrafts, trade credit, and short-term loans jointly cover routine short-term funding needs" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Extended investments are funded by long-term bank loans, owner loans, and bonds.

Applied carefully, "Long-term bank loans, owner loans, and bonds jointly fund investments with extended payback periods" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Receiving dividends does not turn an owner loan into equity; it remains long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A long banking relationship does not convert short-term loans into long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal finance appears only on the equity side; debt is external.

Applied carefully, "Only equity finance includes an internal source, whereas all debt finance is obtained externally" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Repaying debt from internal cash flow does not make the original borrowing internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retention uses kept profit; share capital brings new external investor funds.

Applied carefully, "Retained earnings differ from share capital because retention uses past profit while shares bring new investor funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity includes internal retained earnings as well as external share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The balance sheet reveals equity and/or debt funding of assets.

Applied carefully, "A corporation''s balance sheet shows whether assets were financed through equity sources, debt sources, or both" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Large firms'' balance sheets must show visible finance sources.

Applied carefully, "Large businesses must draw up a balance sheet that makes their sources of finance visible to users" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term credit funds the firm externally without altering ownership.

Applied carefully, "Short-term credit sources leave ownership unchanged while providing temporary external funding" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital adds equity without converting debt obligations.

Applied carefully, "External equity through share capital dilutes neither creditor claims nor repayment obligations on debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings can fund projects without new shares or borrowing.

Applied carefully, "Internal equity through retained earnings can fund projects without issuing new shares or new debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Possible future dividends do not reclassify retained earnings as debt finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary-market trading does not make share capital short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Manager-investors still supply external equity when they subscribe for shares.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds and long-term bank loans both carry interest owed to creditors.

Applied carefully, "Bond issues and long-term bank loans both require interest payments to external creditors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Annual limit review keeps overdrafts in short-term debt, not long-term credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Trade credit and overdrafts both cover near-term needs as short-term debt.

Applied carefully, "Supplier trade credit is grouped with overdrafts because both finance near-term obligations as short-term debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Public share issues raise external equity through share capital.

Applied carefully, "Share capital from a public share issue is external equity finance under the standard classification" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Year-round deliveries do not move trade credit into long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profitable-year retention for expansion is internal equity.

Applied carefully, "Retained earnings from a profitable year kept for expansion are internal equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Quarterly tax coverage via bank loan is short-term debt.

Applied carefully, "A short-term loan from a bank to cover a quarterly tax payment is short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond price changes do not make bonds equity; bonds remain creditor finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner loans in the overview are long-term credit, not automatically short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A ten-year machinery loan is long-term external debt.

Applied carefully, "A ten-year bank loan to purchase production machinery is long-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fifteen-year bond maturity places the issue in long-term debt.

Applied carefully, "A bond issue with a fifteen-year maturity is long-term debt finance from external investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'An eight-year owner loan is long-term external debt credit.

Applied carefully, "An owner loan repayable over eight years is long-term credit classified as external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Debt carries legal repayment duties that retained earnings do not.

Applied carefully, "Debt finance creates a legal obligation to repay borrowed amounts, unlike retained earnings kept as equity" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are generated internally; share capital comes from outside.

Applied carefully, "Equity finance from retained earnings is generated inside the firm, whereas share capital is contributed from outside" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Table 3 separates partly internal equity from wholly external debt.

Applied carefully, "Table 3 distinguishes equity finance with internal and external parts from wholly external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Temporary cash shortages funded by share subscriptions are still external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sales to customers do not reclassify retained earnings as external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholder loss risk is an equity feature and does not reclassify share capital as debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Balance-sheet finance sources connect to the accounting treatment in chapter 6.

Applied carefully, "The balance sheet links to chapter 6 accounting by showing which finance sources fund recorded assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Other cash balances do not make overdrafts internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor funds and share capital add external equity, not creditor liabilities.

Applied carefully, "Investor funds and share capital both increase external equity without adding creditor liabilities" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts and short-term loans both serve liquidity as short-term debt.

Applied carefully, "Overdrafts and short-term loans both address liquidity needs classified as short-term external debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner loans and bonds share the long-term credit side of debt finance.

Applied carefully, "Owner loans and bonds both appear on the long-term credit side of the debt finance overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained profit was not lent by an outsider and therefore is internal equity.

Applied carefully, "Retained earnings appear as internal equity because no outside party supplied the retained profit as a loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Outside investors supplied subscribed funds, making share capital external equity.

Applied carefully, "Share capital appears as external equity because outside investors supplied the subscribed funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Operational supplier links do not make trade credit internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Servicing bonds from revenue does not make bond finance internal.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Suppliers grant payment delay as credit, not ownership, making trade credit short-term debt.

Applied carefully, "Trade credit appears as short-term debt because suppliers extend payment terms rather than ownership rights" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.5.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Bond investors lend on creditor terms, placing bonds in long-term debt.

Applied carefully, "Bonds appear as long-term debt because investors lend funds with fixed creditor repayment terms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset benefits to shareholders do not reclassify bank loans as equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Immediate cash shortfalls on current accounts are covered by overdraft short-term debt.

Applied carefully, "Bank overdrafts appear as short-term debt because they cover immediate cash shortfalls on current accounts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Brief repayment horizons place working-capital bank loans in short-term debt.

Applied carefully, "Short-term bank loans appear as short-term debt because repayment is expected within a relatively brief period" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Extended repayment schedules place multi-year bank loans in long-term debt.

Applied carefully, "Long-term bank loans appear as long-term debt because repayment is spread over an extended schedule" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Possible early repayment does not automatically make owner loans short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Protecting solvency with a bank loan still leaves the borrowing classified as short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A creditor who is also a shareholder still provides debt when lending under a loan contract.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner lending with creditor repayment terms is long-term credit debt.

Applied carefully, "A loan provided by owners appears as long-term credit because owners lend with repayment terms like other creditors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Spending retention on near-term wages does not make retained earnings short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investors buying ownership receive external equity status, not creditor claims.

Applied carefully, "Funds provided by investors appear as external equity because investors buy ownership rather than creditor instruments" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'The firm reuses its own kept profit as internal equity.

Applied carefully, "Retained earnings appear as internal equity because the firm keeps its own undistributed profit for reuse" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Each listed debt source in the overview involves an outside creditor.

Applied carefully, "Debt finance is external in the overview because every listed debt source involves an outside creditor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long holding periods do not convert share capital into long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Expecting future profits accompanies equity investment and does not create creditor status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['An open facility does not move overdrafts from short-term to long-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings need no outsider and therefore give equity an internal component.

Applied carefully, "Equity finance includes an internal component because retained earnings need not be raised from outsiders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier benefit from the buyer''s sales does not make trade credit equity finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Obligatory large-firm balance sheets expose equity and debt finance sources to users.

Applied carefully, "Large businesses are obliged to draw up a balance sheet so users can see equity and debt finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Table 3 finance categories are reflected on large firms'' balance sheets.

Applied carefully, "The sources-of-finance overview in Table 3 is reflected in how large firms report funding on the balance sheet" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital uses short-term credit; longer-lived assets use long-term credit.

Applied carefully, "Short-term credit supports working capital while long-term credit supports assets with longer useful lives" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Maturity length alone in common examples places bonds in long-term credit in the overview.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A near first instalment does not reclassify a multi-year bank loan as short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Choosing a loan rather than shares creates debt finance, not equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Possible later buy-backs do not reclassify investor subscriptions as debt finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Outside share capital is equity; outside bonds remain debt despite both involving third parties.

Applied carefully, "Share capital and bonds both involve outside parties, yet share capital is equity and bonds are debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Visibility to outside readers does not make retained earnings external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Issued ownership instruments from outside investors are external equity, not internal.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner guarantees do not reclassify overdraft borrowing as equity finance.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Retention is internal equity; overdrafts are external debt.

Applied carefully, "Retained earnings and bank overdrafts differ because retention is internal equity and overdrafts are external debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.50' AND tier = 'full';
