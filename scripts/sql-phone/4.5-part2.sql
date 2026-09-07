-- Update expanded explanations for 4.5-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Near-term bank loans for working capital are short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Commercial bank lending over many years is long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Multi-year scheduled bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds sold to investors are long-term debt with creditor status.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond issues raise long-term debt from external investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owner lending creates long-term external debt, not equity.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are long-term external debt; coupon receipts do not make bondholders equity owners.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Owner loans sit in long-term credit as external debt.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term external debt finance, not internal finance.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Repayable creditor funds are always external debt.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Outside creditor funds are debt finance under the overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Equity in the overview spans internal retention and external share capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Large-firm balance sheets show equity and debt funding sources.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Published balance sheets reveal the finance sources behind assets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Overdrafts appear in table 3 as short-term credit examples.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Trade credit and overdrafts are paired as short-term debt examples.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

The short-term credit category covers trade credit, overdrafts, and short-term loans.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Long-term credit groups bank loans, owner loans, and bonds together.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Long-term bank loans are long-term external debt even when the first instalment is due soon.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings fund the firm internally without creditor interest.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Retained earnings are internal equity, not external creditor finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Investor funds are external equity regardless of whether investors are also employees.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital adds external equity without creditor repayment obligations.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds create creditor claims distinct from share ownership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Seasonal overdraft use stays within short-term debt classification.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Purchasing new shares with investor funds is external equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Accumulated retained profit stays internal equity across reporting periods.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Balance-sheet share capital represents external equity from investors.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Inventory bank loans with near-term repayment are short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Asset-matched multi-year bank loans are long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Holding retained earnings does not convert external debt into internal finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Share capital is external equity; receiving dividends later does not make investor funds debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Repeated quarterly use does not convert overdrafts into long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Expansion bond issues provide long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Meeting coupons from operating cash flow does not make bond finance internal; bonds remain external debt.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Multi-year owner loans are long-term credit, not equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings remain internal equity despite arising from external trading.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Owner loans are classified as long-term credit in the overview, not automatically as short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Large businesses disclose both equity and debt on the balance sheet.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term debt despite long supplier relationships.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.5.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Share capital is external equity from outside investors, not internal equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

External audit verification does not convert retained earnings into external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Investor funds and retained earnings form the equity pair in the overview.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond debt carries interest obligations that retained earnings do not.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Registering shares internally does not make share capital internal equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Month-end supplier credit for materials is short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt; monthly net-asset effects do not reclassify them as equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Supplier loyalty does not make trade credit equity; it remains short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Semi-annual coupons do not make bonds short-term debt; bonds are long-term credit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Annual bank review does not reclassify a multi-year loan as short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

The equity side spans share capital, investor funds, and retained earnings.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Routine short-term needs are met by overdrafts, trade credit, and short-term loans.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Extended investments are funded by long-term bank loans, owner loans, and bonds.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Receiving dividends does not turn an owner loan into equity; it remains long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — A long banking relationship does not convert short-term loans into long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance appears only on the equity side; debt is external.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Repaying debt from internal cash flow does not make the original borrowing internal finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Retention uses kept profit; share capital brings new external investor funds.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Equity includes internal retained earnings as well as external share capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

The balance sheet reveals equity and/or debt funding of assets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Large firms'' balance sheets must show visible finance sources.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Short-term credit funds the firm externally without altering ownership.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital adds equity without converting debt obligations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings can fund projects without new shares or borrowing.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Possible future dividends do not reclassify retained earnings as debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary-market trading does not make share capital short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Manager-investors still supply external equity when they subscribe for shares.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds and long-term bank loans both carry interest owed to creditors.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Annual limit review keeps overdrafts in short-term debt, not long-term credit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Trade credit and overdrafts both cover near-term needs as short-term debt.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Public share issues raise external equity through share capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Year-round deliveries do not move trade credit into long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Profitable-year retention for expansion is internal equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Quarterly tax coverage via bank loan is short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond price changes do not make bonds equity; bonds remain creditor finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Owner loans in the overview are long-term credit, not automatically short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — A ten-year machinery loan is long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Fifteen-year bond maturity places the issue in long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — An eight-year owner loan is long-term external debt credit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Debt carries legal repayment duties that retained earnings do not.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Retained earnings are generated internally; share capital comes from outside.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Table 3 separates partly internal equity from wholly external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Temporary cash shortages funded by share subscriptions are still external equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Sales to customers do not reclassify retained earnings as external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Shareholder loss risk is an equity feature and does not reclassify share capital as debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.5.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 6 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Balance-sheet finance sources connect to the accounting treatment in chapter 6.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Other cash balances do not make overdrafts internal finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Investor funds and share capital add external equity, not creditor liabilities.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts and short-term loans both serve liquidity as short-term debt.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Owner loans and bonds share the long-term credit side of debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained profit was not lent by an outsider and therefore is internal equity.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Outside investors supplied subscribed funds, making share capital external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Operational supplier links do not make trade credit internal finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Servicing bonds from revenue does not make bond finance internal.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Suppliers grant payment delay as credit, not ownership, making trade credit short-term debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond investors lend on creditor terms, placing bonds in long-term debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Asset benefits to shareholders do not reclassify bank loans as equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Immediate cash shortfalls on current accounts are covered by overdraft short-term debt.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Brief repayment horizons place working-capital bank loans in short-term debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Extended repayment schedules place multi-year bank loans in long-term debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Possible early repayment does not automatically make owner loans short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Protecting solvency with a bank loan still leaves the borrowing classified as short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — A creditor who is also a shareholder still provides debt when lending under a loan contract.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Owner lending with creditor repayment terms is long-term credit debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Spending retention on near-term wages does not make retained earnings short-term debt.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Investors buying ownership receive external equity status, not creditor claims.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

The firm reuses its own kept profit as internal equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Each listed debt source in the overview involves an outside creditor.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Long holding periods do not convert share capital into long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Expecting future profits accompanies equity investment and does not create creditor status.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

An open facility does not move overdrafts from short-term to long-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings need no outsider and therefore give equity an internal component.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Supplier benefit from the buyer''s sales does not make trade credit equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Obligatory large-firm balance sheets expose equity and debt finance sources to users.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Table 3 finance categories are reflected on large firms'' balance sheets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Working capital uses short-term credit; longer-lived assets use long-term credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Maturity length alone in common examples places bonds in long-term credit in the overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — A near first instalment does not reclassify a multi-year bank loan as short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Choosing a loan rather than shares creates debt finance, not equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Possible later buy-backs do not reclassify investor subscriptions as debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Outside share capital is equity; outside bonds remain debt despite both involving third parties.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Visibility to outside readers does not make retained earnings external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Issued ownership instruments from outside investors are external equity, not internal.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Owner guarantees do not reclassify overdraft borrowing as equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Retention is internal equity; overdrafts are external debt.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.50' AND tier = 'full';
