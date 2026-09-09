-- Update expanded explanations for 4.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-lived asset spending calls for long-term finance so repayment timing aligns with the period of use.

Applied carefully, "Capital expenditures on assets used over many years should normally be matched with long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cost matters, but intended use and current gearing also shape the appropriate choice.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share and bond issues carry administration costs that must be weighed against borrowing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'High gearing complicates further borrowing but does not ban routine short-term credit for revenue spending.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Long-lived assets require long-term finance; short-term supplier credit mismatches repayment to asset life.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-term debt would mismatch repayment to the brief consumption period of materials.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Bond issuance costs are part of the cost criterion in finance selection.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-cycle materials need short-term credit such as overdrafts or trade credit.

Applied carefully, "Revenue expenditures such as buying materials for current production can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Gearing affects overall finance strategy even when short-term credit suits revenue spending.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Materials for current production suit short-term sources, not equity issues for long-lived capital.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders often charge higher interest or demand collateral when loan capital is already high.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Intended use is a core criterion linking expenditure type to finance maturity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Intended use and gearing also matter; interest alone does not govern finance choice.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'High gearing makes lenders cautious and often raises the price or collateral demand of new debt.

Applied carefully, "A highly geared business may struggle to raise further credit except at higher interest rates and/or against additional collateral" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Administration costs for shares and bonds remain part of the cost criterion regardless of gearing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings or investors avoid adding further mandatory repayment obligations.

Applied carefully, "When loan capital is already high, internal funds or new equity investors can reduce insolvency risk relative to taking another large loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Intended use is a separate criterion from cost; both matter alongside financial position.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Low quoted interest does not override high gearing and repayment risk in finance choice.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Issuance expenses belong to the cost criterion alongside interest on loans and credit.

Applied carefully, "Administration costs incurred when issuing shares or bonds form part of the cost comparison among finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived capital projects need long-term finance, not brief supplier credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cost, use, and financial position are the main decision criteria in the chapter framework.

Applied carefully, "When several sources of finance are available, a business will most probably weigh costs, intended use, and current financial situation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share issuance incurs administration costs that must be weighed against loans.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Multi-year assets call for finance whose maturity aligns with years of service.

Applied carefully, "Capital expenditure on equipment with a long useful life should be matched with long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Heavy existing debt makes lenders cautious about extending additional credit.

Applied carefully, "A business already carrying a high proportion of loan capital may have difficulties obtaining more credit from lenders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stricter pricing or collateral often accompanies new loans to highly geared borrowers.

Applied carefully, "Lenders may offer further funds to a highly geared business only at a higher interest rate and/or if collateral can be provided" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Expenditure type determines appropriate finance maturity; they are not interchangeable.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Retained earnings or investor funds avoid adding further mandatory repayment obligations.

Applied carefully, "Such a business should rather try to use internal sources of finance and/or find investors willing to provide funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Repayment pressure on existing and new loans raises insolvency risk when debt is already high.

Applied carefully, "Because loans must be repaid, a high proportion of loan capital can increase the risk of insolvency" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The cost criterion covers both interest and issuance-related administration expenses.

Applied carefully, "Costs of finance include interest payments on loans and credit as well as administration costs for issuing shares or bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset purchases with extended useful lives call for comparably long finance.

Applied carefully, "Financial funds used for capital expenditures on long-lived assets require long-term sources of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Aligning maturity to asset life reduces cash-flow strain from premature principal repayment.

Applied carefully, "Matching long-term finance to capital expenditure spreads repayment over the years the asset generates benefits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Collateral often becomes a condition for new credit when existing loan capital is substantial.

Applied carefully, "A high geared business may obtain further credit only if it can offer collateral acceptable to lenders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity-type injections reduce reliance on repayable debt when gearing is already elevated.

Applied carefully, "Investors or business partners may supply funds when additional loans would worsen insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Interest on loans and credit is explicitly part of the cost criterion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Factory construction is capital expenditure needing long-term finance, not material trade credit.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cost, use, and financial situation are joint criteria, not interest alone.

Applied carefully, "Interest is one cost element, but intended use and gearing also guide finance selection" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All three criteria-cost, use, and position-frame realistic finance choice.

Applied carefully, "Businesses with several finance options most probably decide using costs, intended use, and current financial situation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset spending with multi-year benefits should be funded over a comparable long horizon.

Applied carefully, "Purchasing assets that will be used over some or even many years counts as capital expenditure requiring long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Borrowing costs include interest, which businesses weigh when selecting finance.

Applied carefully, "Interest payments on loans and credit are part of the cost criterion when choosing among finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Issuance costs are part of the cost criterion, not a description of fund use.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-cycle inputs align with short-term finance such as trade credit or overdrafts.

Applied carefully, "Buying material that is used for production within the operating cycle is revenue expenditure that can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond finance price reflects interest plus related administration costs.

Applied carefully, "Bond issues carry both coupon interest and upfront flotation expenses that enter the finance comparison" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle production inputs align with brief credit facilities.

Applied carefully, "Purchasing components for assembly within the month is revenue expenditure that can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Heavy debt loads make creditors cautious about increasing exposure.

Applied carefully, "Lenders may be reluctant to offer more funds to a business that already has a high proportion of loan capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Risk pricing often raises interest when gearing is already elevated.

Applied carefully, "Further credit to a highly geared business may be available only at a higher interest rate" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity and retained earnings do not carry the same contractual repayment burden as loans.

Applied carefully, "Internal finance or investor funds avoid creating new mandatory debt repayment schedules" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Borrowing carries explicit interest that forms part of the cost criterion.

Applied carefully, "Interest on loans and credit is a cost element businesses compare when choosing finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Matching finance term to expenditure type remains necessary regardless of nominal interest.

Applied carefully, "Intended use of funds still matters even when one source appears cheaper on interest alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal funds and investors are recommended when further loans would worsen repayment pressure.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-lived assets should be funded over a horizon comparable to their useful life.

Applied carefully, "Capital expenditure on machinery, plant, or vehicles used over many years requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multi-year asset spending calls for long-term funding to match benefit periods.

Applied carefully, "Financial funds for capital expenditures require long-term finance because assets will be used over years" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both interest and issuance costs belong in the cost comparison.

Applied carefully, "Costs comprise interest on loans and administration costs of issuing shares or bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cost is one of three criteria; use and financial situation also govern choice.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bonds are still loan capital that must be repaid with interest; gearing risk remains.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-cycle materials suit short-term finance, not long-term bond funding.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained earnings and investor funds reduce reliance on new repayable debt when gearing is high.

Applied carefully, "Such a firm should rather try internal sources of finance and/or investors willing to provide funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Heavy loan capital makes additional borrowing harder to secure.

Applied carefully, "A business with a high proportion of loan capital may have difficulties obtaining more credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Issuance fees belong in the cost criterion next to loan interest.

Applied carefully, "Administration costs incurred when issuing shares or bonds should be weighed alongside interest on loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle spending fits short-term credit without lengthy principal schedules.

Applied carefully, "Revenue expenditure such as buying materials for production can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share issuance costs remain part of the cost criterion even when gearing motivates equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Existing heavy debt makes creditors wary of increasing exposure.

Applied carefully, "A business with a high proportion of loan capital might have difficulties obtaining more credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The chapter advises against piling on debt when gearing is high; internal or investor funds are preferred.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Security requirements often accompany new loans when loan capital is already substantial.

Applied carefully, "Lenders may extend credit to a highly geared business only if acceptable collateral can be offered" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term finance for revenue spending remains appropriate even when long-term debt is already high.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Both shares and bonds carry administration costs in the cost criterion.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-lived plant assets need long-term finance, not reliance on short overdraft facilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Asset life governs the appropriate maturity of finance.

Applied carefully, "Capital expenditure on assets that will be used over some or even many years requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The chapter presents this trio as the decision framework.

Applied carefully, "Costs, intended use, and current financial situation are the main criteria when choosing among finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived assets require long-term finance, not rolling short-term overdraft reliance.

Applied carefully, "Funding a multi-year production plant solely through repeated overdraft drawings mismatches short-term finance to capital expenditure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The chapter requires weighing cost together with use and financial situation.

Applied carefully, "Treating the absolute interest rate as the only selection criterion ignores intended use and current gearing" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Supplier credit is a standard short-term source for routine purchases.

Applied carefully, "Trade credit from suppliers postpones payment for inputs consumed within the operating cycle" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term bond finance mismatches the brief consumption period of materials.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Heavy debt typically restricts rather than expands cheap credit availability.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Asset life and gearing shape finance choice beyond nominal interest rates.

Applied carefully, "Matching finance maturity to expenditure type is still required when comparing loan interest with bond coupons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings and investor funds avoid new fixed repayment obligations.

Applied carefully, "When loan capital is already high, internal sources of finance and investors can be preferable to another large loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-cycle materials still suit trade credit or overdrafts regardless of balance-sheet debt.

Applied carefully, "Revenue expenditure on production materials can safely be financed by short-term sources even when loan capital is already high" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Gearing mainly affects appetite for additional long-term debt, not all short-term working-capital credit.

Applied carefully, "High gearing complicates obtaining further long-term loans but does not ban appropriate short-term finance for revenue spending" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fixed repayment schedules on heavy debt threaten solvency if income weakens.

Applied carefully, "Because loans must be repaid, a high proportion of loan capital can be a burden that increases insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No single criterion overrides the other two in the chapter framework.

Applied carefully, "Costs, intended use, and current financial situation together guide finance choice when several sources exist" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

Applied carefully, "Financing a multi-year production facility exclusively through short-term overdraft drawings mismatches revenue-type credit to capital expenditure" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lenders tighten pricing and security when loan capital is already substantial.

Applied carefully, "A highly geared business may obtain further credit only at higher interest and/or if collateral is provided" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year machinery calls for finance spanning comparable years.

Applied carefully, "Capital expenditure on machinery used over many years should be matched with long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Costs, intended use, and financial situation jointly shape the choice.

Applied carefully, "When several funding routes exist, selection usually weighs costs, the purpose of the funds, and the firm''s gearing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Issuance expenses belong in the cost criterion alongside loan interest.

Applied carefully, "Ignoring administration costs when issuing shares or bonds understates the true cost of those finance sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mandatory debt service on heavy loans threatens solvency when cash flow is insufficient.

Applied carefully, "A high proportion of loan capital can be a burden because loans must be repaid, raising insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-cycle revenue spending suits short-term sources, not long-term mortgages.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Equity and bond issues both involve administration costs in the chapter framework.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-term bonds mismatch the brief use period of routine materials.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'All three chapter criteria apply together.

Applied carefully, "Costs, intended use, and financial situation jointly determine finance choice among available sources for expansion projects" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Issuance costs are part of the cost criterion alongside borrowing interest.

Applied carefully, "Administration costs of bond issues belong in the cost comparison with loan interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Asset life dictates long-term funding needs even when additional debt is costly.

Applied carefully, "Capital expenditure on assets used over many years still requires long-term finance despite high gearing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-lived vehicles are capital expenditure requiring long-term finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Interest on loans remains part of the cost criterion at any gearing level.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Expenditure type is determined by use and asset life, not by renaming it when debt is high.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Collateral relates to lender risk from gearing; interest and issuance costs remain separate cost elements.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Short-cycle inputs align with trade credit or overdrafts.

Applied carefully, "Revenue expenditure on materials for current production can safely be financed by short-term sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share and bond administration costs still enter the cost criterion regardless of gearing.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The cost criterion covers interest and issuance expenses.

Applied carefully, "Costs comprise interest on loans and credit plus administration costs for issuing shares or bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Elevated debt tightens credit terms and makes non-debt finance attractive.

Applied carefully, "High gearing may leave lenders reluctant except at higher interest or with collateral, favouring internal funds or investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle ingredients suit short-term finance, not multi-year bond funding.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-lived assets need long-term finance, not supplier credit for materials.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-term finance suits spending that rolls over each operating period.

Applied carefully, "Using short-term credit for revenue expenditure avoids tying multi-year repayment schedules to inputs quickly consumed" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond interest and flotation costs together shape the price of that debt source.

Applied carefully, "Comparing a bank loan with a bond issue requires weighing interest against bond issuance expenses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity raising is not cost-free; administration costs form part of the comparison.

Applied carefully, "Share issues involve administration costs that should enter the cost side of the finance decision" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial situation and gearing affect whether further debt is prudent even when use is matched.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The chapter explicitly favours internal funds or investors when gearing is high.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Share issuance involves administration costs that must be weighed against loan interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Working-capital spending suits short-term credit without multi-year repayment tails.

Applied carefully, "Revenue expenditures on weekly ingredients can safely be financed through trade credit or overdraft facilities" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle materials suit short-term finance, not long-term mortgage loans.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Additional loans compound fixed repayment obligations when debt is already substantial.

Applied carefully, "When gearing is elevated, adding another large loan can worsen repayment pressure on cash flow" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Issuance costs belong in the cost criterion alongside loan interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Total cost includes both ongoing charges and upfront issuance expenses.

Applied carefully, "A low headline interest rate does not by itself prove a loan is cheaper than equity once issuance fees are included" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Inputs consumed quickly fit short-term credit without lengthy repayment schedules.

Applied carefully, "Buying material used for production within the current cycle is revenue expenditure suited to short-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multi-year assets should be funded over a horizon matching useful life.

Applied carefully, "Buying assets that will be used over some or even many years is capital expenditure requiring long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings do not create new mandatory debt service like another loan would.

Applied carefully, "Internal sources of finance can be preferable when loan capital is already high because they avoid new repayment obligations" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The chapter favours internal funds or investors when gearing is already high.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Multi-year assets require long-term finance, not brief supplier credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Debt service on heavy loans threatens solvency if revenues fall short.

Applied carefully, "Because loans must be repaid, a high proportion of loan capital can burden the business with insolvency risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Administration costs for shares and bonds are part of the cost criterion alongside loan interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial situation and gearing still matter even when one source quotes a low interest rate.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Long-lived expansion assets need long-term funding.

Applied carefully, "Capital expenditure on expansion assets used over many years requires long-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-cycle spending fits brief credit facilities.

Applied carefully, "Revenue expenditure on routine inputs can safely use short-term finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Lenders typically tighten terms when loan capital is already substantial, not maintain identical pricing.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Stricter terms often accompany new loans to highly geared firms.

Applied carefully, "High gearing may make lenders offer credit only at higher interest or with collateral" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Flotation costs belong in the total cost of bond finance alongside coupon interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.6.25' AND tier = 'full';
