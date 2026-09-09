-- Update expanded explanations for 4.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital comes from investors outside the firm and counts as external equity finance.

Applied carefully, "Share capital provided by outside investors is an external equity source of finance for the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit kept in the firm supplies internal equity without creating a repayment obligation to creditors.

Applied carefully, "Retained earnings that remain in the business count as internal equity finance under the standard overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor contributions enter as external equity under the textbook classification of finance sources.

Applied carefully, "Funds provided by investors are classified as external equity finance in the sources-of-finance framework" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts and supplier credit finance short-term obligations and are grouped as short-term debt.

Applied carefully, "Bank overdrafts and trade credit are commonly listed examples of short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year loans and bond issues provide longer-term creditor finance that must be serviced.

Applied carefully, "Long-term bank loans and bonds issued to investors are forms of long-term external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The overview treats equity as having internal and external elements, unlike debt which is external.

Applied carefully, "Equity finance encompasses both internal sources such as retained earnings and external sources such as share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term bank loans finance near-term needs and belong to short-term debt finance.

Applied carefully, "Short-term bank loans used to cover working capital are classified as short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All debt finance is external; creditors lie outside the firm regardless of loan maturity.

Applied carefully, "Debt finance is always external because borrowed funds create obligations to outside creditors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The balance sheet displays how assets are financed through equity and debt sources.

Applied carefully, "The balance sheet reveals the sources of finance that a business has used in building its assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Large firms must prepare a balance sheet under the accounting framework referenced in the chapter.

Applied carefully, "Large businesses are obliged to draw up a balance sheet showing how operations have been funded" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner loans appear under long-term credit as external debt, not as equity.

Applied carefully, "A loan provided by owners is classified as long-term credit within external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital comes from outside investors and is external equity, not internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity even though they originate from trading activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Debt finance is external; interest is a cost of borrowing, not internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are classified as short-term credit despite renewable facilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Bonds are long-term debt finance even when traded after issue.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Supplier credit is a textbook short-term debt source for routine purchases.

Applied carefully, "Trade credit from suppliers is short-term debt finance that postpones payment for goods and services" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond issues raise long-term external debt from investors who hold creditor status.

Applied carefully, "Bonds issued to investors provide long-term debt finance through formal creditor instruments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year bank loans are listed under long-term credit in the finance overview.

Applied carefully, "Long-term bank loans are a form of long-term external debt finance used for extended investment periods" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner loans are long-term credit and debt finance, not equity, despite the owners'' stake.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Overdrafts, trade credit, and short-term loans appear as short-term debt in the overview.

Applied carefully, "Table 3 groups bank overdrafts, trade credit, and short-term loans under short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bank loans, owner loans, and bonds are long-term credit examples in the table.

Applied carefully, "Table 3 includes bank loans, owner loans, and bonds among long-term credit sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Undistributed profit kept in the firm is internal equity, not external borrowing.

Applied carefully, "Retained earnings supply internal equity finance without bringing in new external funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdraft facilities are a standard short-term debt source in the finance table.

Applied carefully, "Bank overdrafts provide flexible short-term debt finance for day-to-day cash shortfalls" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity finance components including share capital and retained earnings fund the balance sheet.

Applied carefully, "Share capital and retained earnings both appear as equity finance sources on the balance sheet" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Creditor funds from short-term and long-term credit appear as debt finance sources.

Applied carefully, "Short-term and long-term credit from creditors are recorded as debt finance on the balance sheet" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier trade credit is short-term debt finance, not equity shared with suppliers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor funds are external equity; expecting a return does not reclassify them as debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity, not liabilities owed to external creditors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Equity spans external share capital and internal retained earnings in the overview.

Applied carefully, "Equity finance includes share capital from investors and retained earnings kept within the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Debt finance is split into short-term and long-term credit categories.

Applied carefully, "Debt finance covers short-term credit such as overdrafts and long-term credit such as bank loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor contributions are external equity under the sources-of-finance overview.

Applied carefully, "Funds provided by investors count as external equity when investors subscribe for ownership in the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit kept in the firm supplies internal equity without interest charges.

Applied carefully, "Retained earnings reinvested in the business represent internal equity finance rather than borrowed funds" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Short-term bank loans belong to short-term credit in the finance table.

Applied carefully, "Short-term bank loans are short-term debt finance used to cover temporary funding gaps" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner loans are long-term credit and remain debt finance despite the owners'' equity stake.

Applied carefully, "A loan provided by owners is long-term debt finance even though the lenders are also owners of the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Debt finance in the table is external; no internal debt category is listed.

Applied carefully, "Table 3 shows that debt finance is always external to the business entity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The table places share capital, retained earnings, and investor funds within equity finance.

Applied carefully, "Table 3 lists share capital, retained earnings, and investor funds under equity finance categories" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond issues are a textbook long-term debt source funded by outside investors.

Applied carefully, "Bonds issued to investors are long-term external debt finance creating creditor claims on the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings are reinvested internally and classified as internal equity finance.

Applied carefully, "Retained earnings are internal equity finance because undistributed profit remains within the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings remain internal equity; external reporting does not reclassify them as external.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital is external equity, not debt, regardless of how long investors remain.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Trade credit is a textbook short-term debt source in the finance overview.

Applied carefully, "Trade credit from suppliers is short-term external debt finance for purchases on deferred payment terms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term bank loans remain short-term debt regardless of renewal intentions.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Debt finance is external even if the creditor is also a shareholder; lending creates debt, not equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity from outside investors.

Applied carefully, "Share capital from investors is external equity finance contributing to the ownership base of the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are internal equity even though revenue comes from customers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds and long-term bank loans are long-term external debt.

Applied carefully, "Bonds and long-term bank loans are long-term debt finance creating creditor claims on the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt finance, not equity, regardless of working-capital purpose.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity finance, not short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Equity includes internal and external elements in the finance table.

Applied carefully, "Equity finance comprises internal retained earnings and external share capital and investor funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Debt is external with short-term and long-term subdivisions.

Applied carefully, "Debt finance is external and divided into short-term credit and long-term credit components" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bank loans, owner loans, and bonds are long-term debt sources.

Applied carefully, "Long-term bank loans, owner loans, and bonds exemplify long-term external debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts, trade credit, and short-term loans are short-term debt.

Applied carefully, "Bank overdrafts, trade credit, and short-term loans exemplify short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The balance sheet shows the finance sources used by the business.

Applied carefully, "The balance sheet reveals which equity and debt sources have funded the business assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings are internal equity from undistributed profit.

Applied carefully, "Retained earnings are internal equity finance because profit kept in the firm does not come from new external borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity includes internal retained earnings as well as external share capital.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Trade credit is short-term debt despite ongoing supplier relationships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regular coupon payments do not make bonds short-term debt; bonds are long-term credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity from outside investors.

Applied carefully, "Share capital is external equity finance because investors contribute ownership funds from outside the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital is external equity; equity capital is not repaid like debt with interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are internal equity despite arising from external trading.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts remain short-term debt even with repeated use within a year.

Applied carefully, "Bank overdrafts are short-term debt finance even when used repeatedly throughout the trading year" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt; the customer''s shareholding in the bank does not reclassify the overdraft.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner loans are long-term credit and debt finance, not equity, despite shared ownership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-term bank loans are long-term external debt.

Applied carefully, "Long-term bank loans are long-term external debt finance with scheduled repayment over extended periods" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investor funds are external equity, not short-term debt, regardless of expected holding period.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds are long-term debt from external investors.

Applied carefully, "Bonds issued to investors are long-term debt finance creating creditor claims traded in capital markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Using retained earnings to repay loans does not make debt finance internal; debt remains external.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity from outside investors, not internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity; publication in accounts does not make them external.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital and investor funds are external equity sources.

Applied carefully, "Share capital and funds from investors are external equity finance sources listed in the finance overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings are internal equity from undistributed profit.

Applied carefully, "Retained earnings are internal equity finance sourced from profits not distributed to shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt despite ongoing bank review of limits.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds are long-term external debt from investors.

Applied carefully, "Bonds are long-term debt finance raising external creditor funds from investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit is short-term debt from suppliers.

Applied carefully, "Trade credit is short-term debt finance allowing suppliers to defer cash receipt for goods delivered" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term bank loans are long-term external debt.

Applied carefully, "Long-term bank loans are long-term debt finance with repayment schedules extending beyond one year" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner loans are long-term credit within debt finance.

Applied carefully, "A loan provided by owners is long-term credit classified as external debt finance in the overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term bank loans are short-term debt for working capital.

Applied carefully, "Short-term bank loans are short-term debt finance covering near-term working-capital requirements" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity combines internal and external sources in the finance overview.

Applied carefully, "Equity finance includes both internal retained earnings and external share capital from investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Debt is external and includes short-term credit categories.

Applied carefully, "Debt finance is external and includes short-term credit such as overdrafts and trade credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit is short-term debt, not equity shared with suppliers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds are long-term external debt finance.

Applied carefully, "Bonds issued to investors are long-term debt finance creating marketable creditor instruments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings are internal equity from kept profit.

Applied carefully, "Retained earnings are internal equity finance because kept profit funds the business without new borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital is external equity from outside investors.

Applied carefully, "Share capital is external equity finance from investors who subscribe for shares in the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt for liquidity needs.

Applied carefully, "Bank overdrafts are short-term debt finance for bridging temporary cash shortfalls on current accounts" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investor contributions are external equity under the sources-of-finance framework.

Applied carefully, "Funds provided by investors are external equity finance when investors supply ownership capital to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Early redemption options do not reclassify bonds as short-term debt; bonds are long-term credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Only part of equity is internal; debt finance is entirely external despite balance-sheet presentation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity, not long-term debt from creditors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity, not debt owed to creditors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are internal equity from kept profit.

Applied carefully, "Retained earnings are internal equity finance representing profit reinvested rather than paid to owners" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Share capital is external equity from investors.

Applied carefully, "Share capital is external equity finance contributed by investors who acquire ownership stakes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt finance, not equity, regardless of dividend protection purpose.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner loans are long-term credit classified as external debt.

Applied carefully, "A loan provided by owners is long-term credit within external debt finance despite the lenders'' ownership role" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds and long-term bank loans are long-term external debt.

Applied carefully, "Bonds and long-term bank loans are long-term debt finance sources from external creditors" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings are internal equity from undistributed profit.

Applied carefully, "Profit kept inside the firm rather than distributed to owners supplies internal equity finance through retained earnings" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Share capital is external equity from outside investors.

Applied carefully, "Share capital is external equity finance when investors provide ownership funding from outside the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdrafts are short-term debt for liquidity management.

Applied carefully, "Bank overdrafts are short-term debt finance used to cover temporary cash shortfalls on current accounts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term bank loans are long-term external debt.

Applied carefully, "Long-term bank loans are long-term debt finance with repayment extending beyond the short-term credit category" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds are long-term external debt from investors.

Applied carefully, "Bonds issued to investors are long-term external debt finance listed among long-term credit sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investor funds are external equity; equity capital is not repaid like debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share subscriptions from outside investors supply external equity through share capital.

Applied carefully, "When investors subscribe for newly issued shares, the resulting share capital counts as external equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share issues to external parties raise external equity, not debt.

Applied carefully, "Ownership funding raised by issuing shares to outside parties is classified as external equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit retained rather than distributed is internal equity finance.

Applied carefully, "Undistributed profit retained for reinvestment supplies internal equity finance within the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dividends foregone in favour of retention create internal equity.

Applied carefully, "Profit kept within the firm rather than paid as dividends represents internal equity finance" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-term bank loans remain short-term debt despite a long banking relationship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Earnings kept in the entity are internal equity, not external borrowing.

Applied carefully, "Reinvested earnings that remain inside the business entity count as internal equity finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share subscriptions bring external equity from subscribing investors.

Applied carefully, "Investor subscriptions for shares supply external equity finance to the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customer-generated revenue does not reclassify retained earnings as external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity; investment risk does not reclassify equity as debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit is short-term debt despite repeated negotiation of payment terms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Periodic interest does not make bonds short-term; bonds are long-term debt finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are short-term debt despite multi-year facilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'External audit reporting does not convert retained earnings from internal to external equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Current-account overdrafts are short-term debt for liquidity management.

Applied carefully, "A bank overdraft facility on a current account is classified as short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital is external equity from outside investors, not internal equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner loans are long-term credit and debt finance, not equity reinvestment.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Using an overdraft draws on short-term external debt.

Applied carefully, "Drawing on an agreed overdraft limit to cover cash shortfalls represents short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Deferred supplier payment is short-term debt under trade credit.

Applied carefully, "Delayed payment to suppliers under trade credit terms qualifies as short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Postponed supplier payment is short-term debt, not equity.

Applied carefully, "Supplier credit that postpones cash payment for delivered goods is short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investor funds are external equity; expecting returns classifies them as equity investors, not creditors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are short-term debt finance, not equity, regardless of repeated use.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings are internal equity finance, not short-term debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital is external equity, not short-term debt from creditors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sub-one-year bank borrowing is short-term debt finance.

Applied carefully, "Borrowing from a bank for a period of less than one year is short-term debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.5.25' AND tier = 'full';
