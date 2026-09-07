-- Update expanded explanations for 4.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived asset spending calls for long-term finance so repayment timing aligns with the period of use.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Cost matters, but intended use and current gearing also shape the appropriate choice.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Share and bond issues carry administration costs that must be weighed against borrowing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

High gearing complicates further borrowing but does not ban routine short-term credit for revenue spending.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived assets require long-term finance; short-term supplier credit mismatches repayment to asset life.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Long-term debt would mismatch repayment to the brief consumption period of materials.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond issuance costs are part of the cost criterion in finance selection.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle materials need short-term credit such as overdrafts or trade credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Gearing affects overall finance strategy even when short-term credit suits revenue spending.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Materials for current production suit short-term sources, not equity issues for long-lived capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Lenders often charge higher interest or demand collateral when loan capital is already high.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Intended use is a core criterion linking expenditure type to finance maturity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Intended use and gearing also matter; interest alone does not govern finance choice.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

High gearing makes lenders cautious and often raises the price or collateral demand of new debt.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Administration costs for shares and bonds remain part of the cost criterion regardless of gearing.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Retained earnings or investors avoid adding further mandatory repayment obligations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Intended use is a separate criterion from cost; both matter alongside financial position.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Low quoted interest does not override high gearing and repayment risk in finance choice.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance expenses belong to the cost criterion alongside interest on loans and credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived capital projects need long-term finance, not brief supplier credit.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Cost, use, and financial position are the main decision criteria in the chapter framework.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Share issuance incurs administration costs that must be weighed against loans.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets call for finance whose maturity aligns with years of service.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Heavy existing debt makes lenders cautious about extending additional credit.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Stricter pricing or collateral often accompanies new loans to highly geared borrowers.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Expenditure type determines appropriate finance maturity; they are not interchangeable.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Retained earnings or investor funds avoid adding further mandatory repayment obligations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Repayment pressure on existing and new loans raises insolvency risk when debt is already high.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

The cost criterion covers both interest and issuance-related administration expenses.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset purchases with extended useful lives call for comparably long finance.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Aligning maturity to asset life reduces cash-flow strain from premature principal repayment.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Collateral often becomes a condition for new credit when existing loan capital is substantial.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity-type injections reduce reliance on repayable debt when gearing is already elevated.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending. Interest on loans and credit is explicitly part of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Factory construction is capital expenditure needing long-term finance, not material trade credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Cost, use, and financial situation are joint criteria, not interest alone.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

All three criteria—cost, use, and position—frame realistic finance choice.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset spending with multi-year benefits should be funded over a comparable long horizon.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Borrowing costs include interest, which businesses weigh when selecting finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Issuance costs are part of the cost criterion, not a description of fund use.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle inputs align with short-term finance such as trade credit or overdrafts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond finance price reflects interest plus related administration costs.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle production inputs align with brief credit facilities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Heavy debt loads make creditors cautious about increasing exposure.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Risk pricing often raises interest when gearing is already elevated.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity and retained earnings do not carry the same contractual repayment burden as loans.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Borrowing carries explicit interest that forms part of the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Matching finance term to expenditure type remains necessary regardless of nominal interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Internal funds and investors are recommended when further loans would worsen repayment pressure.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived assets should be funded over a horizon comparable to their useful life.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year asset spending calls for long-term funding to match benefit periods.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Both interest and issuance costs belong in the cost comparison.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Cost is one of three criteria; use and financial situation also govern choice.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are still loan capital that must be repaid with interest; gearing risk remains.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Short-cycle materials suit short-term finance, not long-term bond funding.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Retained earnings and investor funds reduce reliance on new repayable debt when gearing is high.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Heavy loan capital makes additional borrowing harder to secure.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance fees belong in the cost criterion next to loan interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle spending fits short-term credit without lengthy principal schedules.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Share issuance costs remain part of the cost criterion even when gearing motivates equity.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Existing heavy debt makes creditors wary of increasing exposure.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

The chapter advises against piling on debt when gearing is high; internal or investor funds are preferred.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Security requirements often accompany new loans when loan capital is already substantial.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-term finance for revenue spending remains appropriate even when long-term debt is already high.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Both shares and bonds carry administration costs in the cost criterion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived plant assets need long-term finance, not reliance on short overdraft facilities.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset life governs the appropriate maturity of finance.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

The chapter presents this trio as the decision framework.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived assets require long-term finance, not rolling short-term overdraft reliance.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

The chapter requires weighing cost together with use and financial situation.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Supplier credit is a standard short-term source for routine purchases.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Long-term bond finance mismatches the brief consumption period of materials.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Heavy debt typically restricts rather than expands cheap credit availability.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Asset life and gearing shape finance choice beyond nominal interest rates.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Retained earnings and investor funds avoid new fixed repayment obligations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle materials still suit trade credit or overdrafts regardless of balance-sheet debt.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Gearing mainly affects appetite for additional long-term debt, not all short-term working-capital credit.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Fixed repayment schedules on heavy debt threaten solvency if income weakens.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

No single criterion overrides the other two in the chapter framework.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Lenders tighten pricing and security when loan capital is already substantial.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year machinery calls for finance spanning comparable years.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Costs, intended use, and financial situation jointly shape the choice.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance expenses belong in the cost criterion alongside loan interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Mandatory debt service on heavy loans threatens solvency when cash flow is insufficient.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Short-cycle revenue spending suits short-term sources, not long-term mortgages.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Equity and bond issues both involve administration costs in the chapter framework.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Long-term bonds mismatch the brief use period of routine materials.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending. All three chapter criteria apply together.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance costs are part of the cost criterion alongside borrowing interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Asset life dictates long-term funding needs even when additional debt is costly.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived vehicles are capital expenditure requiring long-term finance.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Interest on loans remains part of the cost criterion at any gearing level.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Expenditure type is determined by use and asset life, not by renaming it when debt is high.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Collateral relates to lender risk from gearing; interest and issuance costs remain separate cost elements.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle inputs align with trade credit or overdrafts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Share and bond administration costs still enter the cost criterion regardless of gearing.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

The cost criterion covers interest and issuance expenses.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Elevated debt tightens credit terms and makes non-debt finance attractive.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Short-cycle ingredients suit short-term finance, not multi-year bond funding.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Long-lived assets need long-term finance, not supplier credit for materials.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-term finance suits spending that rolls over each operating period.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond interest and flotation costs together shape the price of that debt source.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Equity raising is not cost-free; administration costs form part of the comparison.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Financial situation and gearing affect whether further debt is prudent even when use is matched.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

The chapter explicitly favours internal funds or investors when gearing is high.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Share issuance involves administration costs that must be weighed against loan interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Working-capital spending suits short-term credit without multi-year repayment tails.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle materials suit short-term finance, not long-term mortgage loans.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Additional loans compound fixed repayment obligations when debt is already substantial.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Issuance costs belong in the cost criterion alongside loan interest.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Total cost includes both ongoing charges and upfront issuance expenses.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Inputs consumed quickly fit short-term credit without lengthy repayment schedules.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Multi-year assets should be funded over a horizon matching useful life.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Retained earnings do not create new mandatory debt service like another loan would.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending. The chapter favours internal funds or investors when gearing is already high.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Funding long-lived assets from short-term supplier credit ignores matching: the asset still binds capital for years while the credit may fall due in days or weeks, creating refinancing pressure.

Multi-year assets require long-term finance, not brief supplier credit.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the three choice criteria in view: cost (interest and issuance costs), gearing/insolvency risk, and matching finance term to the life of the asset or spending.

Debt service on heavy loans threatens solvency if revenues fall short.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Administration costs for shares and bonds are part of the cost criterion alongside loan interest.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Financial situation and gearing still matter even when one source quotes a low interest rate.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Capital expenditure on assets used over many years should normally be matched with long-term finance so repayment horizons align with the asset''s service life. Funding a multi-year plant from rolling weekly supplier credit mismatches term and use.

Long-lived expansion assets need long-term funding.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Revenue spending and routine materials purchases are typically suited to short-term credit (trade credit, overdrafts) because the cash cycle is short. Matching still applies — just toward shorter instruments.

Short-cycle spending fits brief credit facilities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — High gearing is a risk warning; it does not automatically forbid every short-term trade-credit purchase of materials, nor is interest the only criterion when choosing finance. Matching asset life and overall risk still matter.

Lenders typically tighten terms when loan capital is already substantial, not maintain identical pricing.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Gearing reflects how heavily the firm relies on loan capital relative to equity. High gearing raises fixed interest burdens and insolvency risk if revenues dip, and can make new lenders reluctant to extend further credit.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Stricter terms often accompany new loans to highly geared firms.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Interest matters, but it is not the sole cost or sole criterion. Issuance and administration costs, gearing risk, and intended use / term matching also shape the choice between loans, share issues, and short-term credit.

Flotation costs belong in the total cost of bond finance alongside coupon interest.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.6.25' AND tier = 'full';
