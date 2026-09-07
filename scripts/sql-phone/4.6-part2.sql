-- Update expanded explanations for 4.6-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Non-debt finance avoids adding repayable obligations when debt is heavy.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

High loan capital makes internal equity or outside investors preferable.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance fees are part of the cost criterion next to borrowing interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Total cost of bond or share finance includes non-interest fees.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Long-term bonds mismatch the quick consumption of production materials.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset life determines finance maturity regardless of nominal coupon or dividend.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

All three criteria jointly determine appropriate finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset spending with extended life needs long-term funding.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Materials consumed in the cycle fit short-term finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Lenders price and secure new loans more strictly when debt is heavy.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived assets require finance whose term spans years of service.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived buildings are capital expenditure needing long-term finance.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Intended use remains a core criterion regardless of gearing level.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Intended use and gearing still matter even when nominal interest appears attractive.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Different expenditure types require different finance maturities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Heavy debt often leads to higher pricing or refusal, not automatic low rates.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Both interest and issuance fees enter cost comparisons.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending. Interest on loans and credit is explicitly part of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Revenue spending still suits short-term finance; collateral relates to lender risk on new debt.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Share capital is not repayable like loans; insolvency risk is tied to debt service.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Interest on loans is explicitly part of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Further debt is often unwise when repayment obligations are already substantial.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Share issues carry administration costs and materials suit short-term finance, not equity raises.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Debt service burden threatens solvency when loan capital is high.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Bond and loan interest remain part of the cost criterion at any gearing level.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Equity and retained funds avoid new mandatory debt service when loan capital is already high.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Share issues involve administration costs that enter finance comparisons.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets call for long-term funding.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

The chapter''s trio of criteria frames finance decisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Cost includes both interest and issuance administration expenses.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Heavy debt limits further borrowing and repayment risk favours non-debt finance.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Short-cycle revenue spending suits short-term sources, not long-term loans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Security is commonly demanded when existing loan capital is already substantial.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets call for long-term funding.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Avoiding new debt reduces repayment burden and insolvency risk when gearing is high.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Administration costs for shares and bonds also count toward total finance cost.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

All three criteria jointly guide realistic finance selection.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Expenditure type determines appropriate finance maturity.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Aligning repayment with years of service reduces cash-flow mismatch.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Revenue spending suits short-term finance; capital spending needs long-term funding.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Borrowing interest is an explicit element of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle inputs align with short-term credit without long repayment tails.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Further debt is often costly or unavailable when loan capital is already high.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Intended use and gearing still matter even when one source quotes a low interest rate.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance costs are part of the cost criterion alongside borrowing interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Collateral demands commonly rise when loan capital is already high.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle spending fits short-term credit without locking repayment to long asset lives.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending. Intended use and gearing matter alongside cost; lowest admin cost alone is insufficient.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

More long-term debt when gearing is high worsens repayment pressure rather than removing risk.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

High gearing often leads to higher interest, collateral demands, or refusal of new loans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity raising carries administration costs that must enter the finance comparison.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-term credit matches quickly consumed revenue expenditure.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

All three criteria jointly guide realistic finance selection.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Production materials used within the cycle fit short-term credit such as supplier terms.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Capital market issues involve administration expenses beyond any coupon or dividend.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Expenditure type determines appropriate finance maturity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Non-debt finance becomes attractive when lenders tighten terms.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Security requirements commonly accompany new lending to highly geared borrowers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Investor funds avoid new mandatory repayment streams when debt is already heavy.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Brief supplier credit suits inputs consumed within the operating cycle.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Fleet renewal calls for finance whose maturity spans years of service.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Cost comparison spans recurring interest and one-off issuance fees.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Gearing shapes whether additional debt is wise alongside cost and intended use.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance expenses belong in the cost criterion for bond finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Reinvested profit does not create new fixed repayment schedules like loans.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Materials for current production suit short-term finance; equity is not required for every revenue item.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets should not rely on short-term overdraft facilities alone.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Expenditure type still determines appropriate finance maturity regardless of gearing.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Gearing and repayment risk still matter even when a loan quotes a low interest rate.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Materials for current production still suit short-term finance regardless of gearing.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Share issuance costs remain part of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Different expenditure types require different finance maturities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Short-cycle inputs align with brief credit terms.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Risk pricing rises when loan capital is already substantial.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity injections reduce reliance on repayable debt under high gearing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Intended use remains central even when gearing is elevated.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Both shares and bonds carry administration costs in the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Aligning term to use keeps debt service proportional to benefit periods.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Borrowing interest enters the cost comparison among sources.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity issuance is not cost-free in the finance comparison.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Inputs used within the cycle fit trade credit or overdrafts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Intended use remains central to matching finance maturity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Revenue expenditure should not be forced into long-term loans merely because gearing is high.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived equipment calls for multi-year funding sources.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

High gearing makes internal finance or investors preferable to additional large borrowing.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Debt service on substantial loans threatens solvency if cash flow falls.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

No single criterion alone determines the appropriate finance choice.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Working-capital credit suits inputs consumed within the operating cycle.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset life governs the appropriate maturity of funding.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Administration costs for shares and bonds are part of the cost criterion alongside loan interest.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Heavy debt makes creditors cautious about increasing exposure.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Materials are revenue expenditure suited to short-term finance regardless of debt instrument.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Further large loans raise insolvency risk; internal funds or investors are safer options.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Costs, intended use, and financial situation are all weighed when several finance sources exist.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Share issues involve administration costs that enter finance comparisons.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Heavy debt often leads to higher pricing or refusal, not automatic low rates.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Short-cycle packaging is revenue expenditure suited to short-term finance, not long-term bonds.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Security requirements often tighten when gearing is elevated.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Retained earnings avoid new mandatory debt service.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Cost must be weighed with intended use and current financial situation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle spending fits brief credit facilities.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets call for long-term funding sources.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Flotation costs belong in the total cost of bond finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-term credit for materials remains suitable even when long-term debt is high.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Materials are revenue expenditure suited to short-term finance regardless of debt instrument.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Investor equity remains equity finance even when investors seek financial return.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are classified as short-term credit despite renewable facilities.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings stay internal equity after profit is kept in the firm.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Lenders tighten pricing or demand collateral when gearing is elevated.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Supplier trade credit is short-term debt finance, not equity shared with suppliers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Equity-type finance avoids new repayable debt obligations.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Mandatory repayment threatens solvency if revenues fall short.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond financing remains long-term debt for the issuer regardless of secondary trading.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

All three criteria jointly shape realistic finance decisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity issuance fees belong alongside borrowing interest in the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Administration costs for shares and bonds remain part of the cost criterion regardless of gearing.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Long-lived capital spending requires long-term finance beyond rolling overdraft use.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Expenditure classification depends on use and asset life, not on the firm''s debt ratio.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Intended use remains a core criterion regardless of gearing level.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Short-cycle materials suit short-term finance, not long-term mortgage loans.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Internal equity avoids mandatory debt service when gearing is already high.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Total bond cost includes both interest and issuance administration expenses.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Multi-year assets require long-term finance, not brief supplier credit.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.50' AND tier = 'full';
