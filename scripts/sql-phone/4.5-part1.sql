-- Update expanded explanations for 4.5-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital comes from investors outside the firm and counts as external equity finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Profit kept in the firm supplies internal equity without creating a repayment obligation to creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Investor contributions enter as external equity under the textbook classification of finance sources.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts and supplier credit finance short-term obligations and are grouped as short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Multi-year loans and bond issues provide longer-term creditor finance that must be serviced.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

The overview treats equity as having internal and external elements, unlike debt which is external.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Short-term bank loans finance near-term needs and belong to short-term debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

All debt finance is external; creditors lie outside the firm regardless of loan maturity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

The balance sheet displays how assets are financed through equity and debt sources.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Large firms must prepare a balance sheet under the accounting framework referenced in the chapter.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owner loans appear under long-term credit as external debt, not as equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Share capital comes from outside investors and is external equity, not internal equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings are internal equity even though they originate from trading activity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Retained profit kept in the firm is not treated as a loan from the owner that must pay market interest. Avoiding creditor interest is precisely why internal finance is attractive.

Debt finance is external; interest is a cost of borrowing, not internal equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are classified as short-term credit despite renewable facilities.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital. Bonds are long-term debt finance even when traded after issue. Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Supplier credit is a textbook short-term debt source for routine purchases.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond issues raise long-term external debt from investors who hold creditor status.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Multi-year bank loans are listed under long-term credit in the finance overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Owner loans are long-term credit and debt finance, not equity, despite the owners'' stake.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Overdrafts, trade credit, and short-term loans appear as short-term debt in the overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Bank loans, owner loans, and bonds are long-term credit examples in the table.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Undistributed profit kept in the firm is internal equity, not external borrowing.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdraft facilities are a standard short-term debt source in the finance table.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Equity finance components including share capital and retained earnings fund the balance sheet.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Creditor funds from short-term and long-term credit appear as debt finance sources.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Supplier trade credit is short-term debt finance, not equity shared with suppliers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Investor funds are external equity; expecting a return does not reclassify them as debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Retained earnings are internal equity, not liabilities owed to external creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Equity spans external share capital and internal retained earnings in the overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Debt finance is split into short-term and long-term credit categories.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Investor contributions are external equity under the sources-of-finance overview.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Profit kept in the firm supplies internal equity without interest charges.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Short-term bank loans belong to short-term credit in the finance table.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Owner loans are long-term credit and remain debt finance despite the owners'' equity stake.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Debt finance in the table is external; no internal debt category is listed.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

The table places share capital, retained earnings, and investor funds within equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond issues are a textbook long-term debt source funded by outside investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are reinvested internally and classified as internal equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings remain internal equity; external reporting does not reclassify them as external.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.5.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Share capital is external equity, not debt, regardless of how long investors remain.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Trade credit is a textbook short-term debt source in the finance overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Short-term bank loans remain short-term debt regardless of renewal intentions.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Debt finance is external even if the creditor is also a shareholder; lending creates debt, not equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital is external equity from outside investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings are internal equity even though revenue comes from customers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds and long-term bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt finance, not equity, regardless of working-capital purpose.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — The statement uses quantitative claims that should be read in order:

Step 1: the amount 3 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Retained earnings are internal equity finance, not short-term debt.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Equity includes internal and external elements in the finance table.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Debt is external with short-term and long-term subdivisions.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bank loans, owner loans, and bonds are long-term debt sources.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts, trade credit, and short-term loans are short-term debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

The balance sheet shows the finance sources used by the business.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are internal equity from undistributed profit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Equity includes internal retained earnings as well as external share capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term debt despite ongoing supplier relationships.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Regular coupon payments do not make bonds short-term debt; bonds are long-term credit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital is external equity from outside investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Share capital is external equity; equity capital is not repaid like debt with interest.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings are internal equity despite arising from external trading.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts remain short-term debt even with repeated use within a year.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt; the customer''s shareholding in the bank does not reclassify the overdraft.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Owner loans are long-term credit and debt finance, not equity, despite shared ownership.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Long-term bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Investor funds are external equity, not short-term debt, regardless of expected holding period.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are long-term debt from external investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Using retained earnings to repay loans does not make debt finance internal; debt remains external.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Share capital is external equity from outside investors, not internal equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings are internal equity; publication in accounts does not make them external.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.5.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital and investor funds are external equity sources.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are internal equity from undistributed profit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt despite ongoing bank review of limits.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are long-term external debt from investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Trade credit is short-term debt from suppliers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Long-term bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Owner loans are long-term credit within debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Short-term bank loans are short-term debt for working capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Equity combines internal and external sources in the finance overview.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Debt is external and includes short-term credit categories.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term debt, not equity shared with suppliers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are long-term external debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are internal equity from kept profit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital is external equity from outside investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts are short-term debt for liquidity needs.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Investor contributions are external equity under the sources-of-finance framework.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital. Early redemption options do not reclassify bonds as short-term debt; bonds are long-term credit. Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Only part of equity is internal; debt finance is entirely external despite balance-sheet presentation.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Share capital is external equity, not long-term debt from creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Retained earnings are internal equity, not debt owed to creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.5.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are internal equity from kept profit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital is external equity from investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt finance, not equity, regardless of dividend protection purpose.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Owner loans are long-term credit classified as external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds and long-term bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained earnings are internal equity from undistributed profit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share capital is external equity from outside investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts are short-term debt for liquidity management.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term bank loans are long-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds are long-term external debt from investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Investor funds are external equity; equity capital is not repaid like debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Share capital subscribed by outside investors is external equity: investors hold ownership claims, not a fixed repayment schedule like a bank loan. It lengthens the firm''s equity base.

Share subscriptions from outside investors supply external equity through share capital.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Share issues to external parties raise external equity, not debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Profit retained rather than distributed is internal equity finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Dividends foregone in favour of retention create internal equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.5.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Short-term bank loans remain short-term debt despite a long banking relationship.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Earnings kept in the entity are internal equity, not external borrowing.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Share subscriptions bring external equity from subscribing investors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Customer-generated revenue does not reclassify retained earnings as external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Share capital is external equity; investment risk does not reclassify equity as debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.5.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term debt despite repeated negotiation of payment terms.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Periodic interest does not make bonds short-term; bonds are long-term debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt despite multi-year facilities.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

External audit reporting does not convert retained earnings from internal to external equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Current-account overdrafts are short-term debt for liquidity management.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Share capital from outside investors is external equity, not internal equity. Internal equity is retained earnings generated by the firm itself and kept rather than distributed.

Share capital is external equity from outside investors, not internal equity.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Owner loans are long-term credit and debt finance, not equity reinvestment.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Using an overdraft draws on short-term external debt.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Deferred supplier payment is short-term debt under trade credit.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Postponed supplier payment is short-term debt, not equity.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.5.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Investor funds are external equity; expecting returns classifies them as equity investors, not creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt finance, not equity, regardless of repeated use.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Retained earnings are internal equity finance, not short-term debt.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Share capital is external equity, not short-term debt from creditors.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Sub-one-year bank borrowing is short-term debt finance.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.5.25' AND tier = 'full';
