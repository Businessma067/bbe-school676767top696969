-- Update expanded explanations for 4.6-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-debt finance avoids adding repayable obligations when debt is heavy.

Applied carefully, "Internal funds or investors can reduce insolvency risk when loan capital is already high" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'High loan capital makes internal equity or outside investors preferable.

Applied carefully, "Elevated gearing points the firm toward retained funds or new investors rather than stacking another major loan" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Issuance fees are part of the cost criterion next to borrowing interest.

Applied carefully, "Administration costs of issuing shares or bonds belong to the cost criterion alongside loan interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Total cost of bond or share finance includes non-interest fees.

Applied carefully, "A finance decision based only on loan interest ignores flotation and related costs of market issues" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term bonds mismatch the quick consumption of production materials.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset life determines finance maturity regardless of nominal coupon or dividend.

Applied carefully, "Intended use still requires matching long-term finance to capital expenditure on multi-year assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All three criteria jointly determine appropriate finance.

Applied carefully, "When several sources of finance are available, decision-making most probably weighs costs, intended use, and financial situation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset spending with extended life needs long-term funding.

Applied carefully, "Financial funds for capital expenditures require long-term finance because benefits extend over years" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Materials consumed in the cycle fit short-term finance.

Applied carefully, "Revenue expenditures on production inputs can safely use short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Lenders price and secure new loans more strictly when debt is heavy.

Applied carefully, "High gearing may mean credit is offered only at higher interest and/or with collateral" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-lived assets require finance whose term spans years of service.

Applied carefully, "Capital expenditure on machinery, plant, or vehicles used over many years should be matched with long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived buildings are capital expenditure needing long-term finance.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Intended use remains a core criterion regardless of gearing level.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Intended use and gearing still matter even when nominal interest appears attractive.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Different expenditure types require different finance maturities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Heavy debt often leads to higher pricing or refusal, not automatic low rates.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Both interest and issuance fees enter cost comparisons.

Applied carefully, "Costs include interest on loans and administration costs when issuing shares or bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Interest on loans and credit is explicitly part of the cost criterion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Revenue spending still suits short-term finance; collateral relates to lender risk on new debt.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Share capital is not repayable like loans; insolvency risk is tied to debt service.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Interest on loans is explicitly part of the cost criterion.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Further debt is often unwise when repayment obligations are already substantial.

Applied carefully, "A business with high gearing may prefer internal funds or investors over additional large loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share issues carry administration costs and materials suit short-term finance, not equity raises.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Debt service burden threatens solvency when loan capital is high.

Applied carefully, "Because loans must be repaid, heavy loan capital raises insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond and loan interest remain part of the cost criterion at any gearing level.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity and retained funds avoid new mandatory debt service when loan capital is already high.

Applied carefully, "When gearing is elevated, internal finance or investors may be preferable to stacking on more repayable debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share issues involve administration costs that enter finance comparisons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multi-year assets call for long-term funding.

Applied carefully, "Capital expenditure on long-lived assets requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The chapter''s trio of criteria frames finance decisions.

Applied carefully, "Businesses choose finance using costs, intended use, and current financial situation when several sources are available" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cost includes both interest and issuance administration expenses.

Applied carefully, "Interest on loans and administration costs of share or bond issues belong to the cost criterion" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Heavy debt limits further borrowing and repayment risk favours non-debt finance.

Applied carefully, "High gearing may push a firm toward internal funds or investors and raises insolvency risk from loan repayment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle revenue spending suits short-term sources, not long-term loans.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Security is commonly demanded when existing loan capital is already substantial.

Applied carefully, "Lenders may require collateral before extending further credit to a business with a high proportion of loan capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year assets call for long-term funding.

Applied carefully, "Capital expenditure on assets used over years requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Avoiding new debt reduces repayment burden and insolvency risk when gearing is high.

Applied carefully, "Internal funds or investors can be preferable when loan capital is already high because loans must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Administration costs for shares and bonds also count toward total finance cost.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'All three criteria jointly guide realistic finance selection.

Applied carefully, "A business with several finance sources will most probably decide using costs, intended use, and current financial situation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Expenditure type determines appropriate finance maturity.

Applied carefully, "Capital expenditure requires long-term finance; revenue expenditure can safely use short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Aligning repayment with years of service reduces cash-flow mismatch.

Applied carefully, "Matching long-term funding to multi-year assets spreads repayment over the period benefits are earned" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Revenue spending suits short-term finance; capital spending needs long-term funding.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Borrowing interest is an explicit element of the cost criterion.

Applied carefully, "Interest on loans and credit forms part of the cost comparison among finance options" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle inputs align with short-term credit without long repayment tails.

Applied carefully, "Revenue expenditure on production materials can safely use short-term finance such as trade credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Further debt is often costly or unavailable when loan capital is already high.

Applied carefully, "High gearing may force a firm toward internal funds or investors rather than another large loan" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Intended use and gearing still matter even when one source quotes a low interest rate.

Applied carefully, "Once loan capital is high, a business may ignore intended use and select finance solely by the lowest advertised interest rate" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

Applied carefully, "Funding a multi-year production facility exclusively through short-term overdraft drawings mismatches short-term finance to capital expenditure" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Issuance costs are part of the cost criterion alongside borrowing interest.

Applied carefully, "Administration costs of bond issues belong in the cost comparison with loan interest for highly geared borrowers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Collateral demands commonly rise when loan capital is already high.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-cycle spending fits short-term credit without locking repayment to long asset lives.

Applied carefully, "Revenue expenditure on inputs for current production can safely be financed through short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Intended use and gearing matter alongside cost; lowest admin cost alone is insufficient.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'More long-term debt when gearing is high worsens repayment pressure rather than removing risk.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['High gearing often leads to higher interest, collateral demands, or refusal of new loans.

Applied carefully, "A high proportion of loan capital can make lenders reluctant to extend further credit except on stricter terms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity raising carries administration costs that must enter the finance comparison.

Applied carefully, "Comparing share finance with a bank loan requires weighing issuance administration costs against loan interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term credit matches quickly consumed revenue expenditure.

Applied carefully, "Short-term credit suits revenue spending on inputs consumed quickly because it avoids locking the firm into long repayment schedules" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All three criteria jointly guide realistic finance selection.

Applied carefully, "A business with several finance options will most probably weigh costs, intended use, and current financial situation together" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Production materials used within the cycle fit short-term credit such as supplier terms.

Applied carefully, "Revenue expenditure on materials consumed in current production can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Capital market issues involve administration expenses beyond any coupon or dividend.

Applied carefully, "Administration costs of issuing shares or bonds also enter that cost comparison" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Expenditure type determines appropriate finance maturity.

Applied carefully, "Intended use of funds distinguishes long-term finance for assets from short-term finance for working capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-debt finance becomes attractive when lenders tighten terms.

Applied carefully, "Retained earnings and new investors can strengthen finance choice when external credit is costly" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Security requirements commonly accompany new lending to highly geared borrowers.

Applied carefully, "Collateral may be required before lenders extend additional loans to a high geared firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor funds avoid new mandatory repayment streams when debt is already heavy.

Applied carefully, "Share capital from investors is preferable to loans when gearing is high because loans must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Brief supplier credit suits inputs consumed within the operating cycle.

Applied carefully, "Trade credit for weekly ingredients aligns revenue expenditure with short-term finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fleet renewal calls for finance whose maturity spans years of service.

Applied carefully, "Long-term bank loans suit capital expenditure on vehicles used over many years" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cost comparison spans recurring interest and one-off issuance fees.

Applied carefully, "Total finance cost includes both loan interest and share-issue administration expenses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Gearing shapes whether additional debt is wise alongside cost and intended use.

Applied carefully, "A firm''s current financial situation influences whether further loan capital is prudent" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Issuance expenses belong in the cost criterion for bond finance.

Applied carefully, "Bond flotation costs should be weighed alongside coupon interest when comparing debt sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reinvested profit does not create new fixed repayment schedules like loans.

Applied carefully, "Internal equity from retained earnings avoids adding repayable debt when gearing is already elevated" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Materials for current production suit short-term finance; equity is not required for every revenue item.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Multi-year assets should not rely on short-term overdraft facilities alone.

Applied carefully, "Capital expenditure on a production line used for ten years requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Expenditure type still determines appropriate finance maturity regardless of gearing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Gearing and repayment risk still matter even when a loan quotes a low interest rate.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Materials for current production still suit short-term finance regardless of gearing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share issuance costs remain part of the cost criterion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Different expenditure types require different finance maturities.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Short-cycle inputs align with brief credit terms.

Applied carefully, "Revenue spending on packaging consumed within weeks can safely use supplier trade credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Risk pricing rises when loan capital is already substantial.

Applied carefully, "High gearing may leave lenders offering credit only at a higher price in the form of interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity injections reduce reliance on repayable debt under high gearing.

Applied carefully, "Investor or partner funds can substitute for additional loans when repayment risk is already high" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Intended use remains central even when gearing is elevated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Both shares and bonds carry administration costs in the cost criterion.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Aligning term to use keeps debt service proportional to benefit periods.

Applied carefully, "Matching finance maturity to expenditure type reduces repayment pressure on routine operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Borrowing interest enters the cost comparison among sources.

Applied carefully, "Interest payments for loans and credit are part of the cost criterion in finance selection" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity issuance is not cost-free in the finance comparison.

Applied carefully, "Administration costs for issuing shares form part of the cost criterion alongside loan interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Inputs used within the cycle fit trade credit or overdrafts.

Applied carefully, "Purchasing raw materials for current production is revenue expenditure suited to short-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Intended use remains central to matching finance maturity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Revenue expenditure should not be forced into long-term loans merely because gearing is high.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Long-lived equipment calls for multi-year funding sources.

Applied carefully, "Purchasing machinery used over many years is capital expenditure requiring long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['High gearing makes internal finance or investors preferable to additional large borrowing.

Applied carefully, "When gearing is already high, management should prefer internal funds or new equity investors over another major loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Debt service on substantial loans threatens solvency if cash flow falls.

Applied carefully, "Because loans must be repaid, heavy loan capital can increase insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No single criterion alone determines the appropriate finance choice.

Applied carefully, "Costs, intended use, and financial situation are weighed together when several finance sources exist" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Working-capital credit suits inputs consumed within the operating cycle.

Applied carefully, "Short-term finance for revenue expenditure avoids locking repayment to long-lived assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset life governs the appropriate maturity of funding.

Applied carefully, "Long-term finance for capital expenditure spreads repayment over years of asset use" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Administration costs for shares and bonds are part of the cost criterion alongside loan interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Heavy debt makes creditors cautious about increasing exposure.

Applied carefully, "Lenders may be reluctant to offer more funds when loan capital is already a high proportion of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Materials are revenue expenditure suited to short-term finance regardless of debt instrument.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Further large loans raise insolvency risk; internal funds or investors are safer options.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Costs, intended use, and financial situation are all weighed when several finance sources exist.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share issues involve administration costs that enter finance comparisons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Heavy debt often leads to higher pricing or refusal, not automatic low rates.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Short-cycle packaging is revenue expenditure suited to short-term finance, not long-term bonds.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Security requirements often tighten when gearing is elevated.

Applied carefully, "Collateral demands may accompany new credit offers to highly geared borrowers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings avoid new mandatory debt service.

Applied carefully, "Internal sources of finance reduce insolvency risk relative to stacking on more loan capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cost must be weighed with intended use and current financial situation.

Applied carefully, "The absolute interest rate alone does not determine the best finance source" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle spending fits brief credit facilities.

Applied carefully, "Revenue expenditure on production inputs aligns with short-term credit such as trade credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year assets call for long-term funding sources.

Applied carefully, "Capital expenditure on plant and machinery aligns with long-term loans or bond finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Flotation costs belong in the total cost of bond finance.

Applied carefully, "Administration costs of bond issues must be compared with loan interest when choosing debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-term credit for materials remains suitable even when long-term debt is high.

Applied carefully, "High gearing does not prevent appropriate short-term finance for routine revenue expenditure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Materials are revenue expenditure suited to short-term finance regardless of debt instrument.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor equity remains equity finance even when investors seek financial return.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are classified as short-term credit despite renewable facilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained earnings stay internal equity after profit is kept in the firm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders tighten pricing or demand collateral when gearing is elevated.

Applied carefully, "A business with high loan capital may obtain further credit only on stricter terms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier trade credit is short-term debt finance, not equity shared with suppliers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Equity-type finance avoids new repayable debt obligations.

Applied carefully, "Investors willing to provide funds can be preferable to another large loan when gearing is high" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mandatory repayment threatens solvency if revenues fall short.

Applied carefully, "Insolvency risk rises when a business carries a high proportion of loan capital that must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond financing remains long-term debt for the issuer regardless of secondary trading.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['All three criteria jointly shape realistic finance decisions.

Applied carefully, "Finance choice considers costs, intended use, and the firm''s current financial situation together" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity issuance fees belong alongside borrowing interest in the cost criterion.

Applied carefully, "Share issues involve administration costs that enter the cost comparison with bank loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Administration costs for shares and bonds remain part of the cost criterion regardless of gearing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-lived capital spending requires long-term finance beyond rolling overdraft use.

Applied carefully, "Overdraft facilities may fund revenue expenditure but are unsuitable alone for multi-year capital projects" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Expenditure classification depends on use and asset life, not on the firm''s debt ratio.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Intended use remains a core criterion regardless of gearing level.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-cycle materials suit short-term finance, not long-term mortgage loans.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Internal equity avoids mandatory debt service when gearing is already high.

Applied carefully, "Retained earnings provide internal finance that does not add new loan repayment obligations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Total bond cost includes both interest and issuance administration expenses.

Applied carefully, "Bond coupon payments and flotation costs together determine the price of bond finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year assets require long-term finance, not brief supplier credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.50' AND tier = 'full';
