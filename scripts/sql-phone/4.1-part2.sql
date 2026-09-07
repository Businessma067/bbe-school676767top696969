-- Update expanded explanations for 4.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Profit is the surplus when revenues exceed expenses. That surplus can be left in the business and used to buy new equipment or otherwise reinvest—exactly the decision facing the profitable sole trader in the stem.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

If the proprietor does not withdraw the profit, the retained amount funds the firm from inside. Classification as internal finance follows from keeping earned surplus in the business.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Withdrawal is always an available choice for a sole trader: the owner can take profit out for personal use instead of funding expansion. Reinvestment is optional, not automatic.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Creditor borrowing typically carries interest and related financial charges. Funding equipment from retained profit avoids those charges because no lender is providing the money.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Internally generated funds similarly avoid interest payments that external creditors would charge on a loan of the same amount. The cost saving is the economic reason retained profit is attractive when surplus exists.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Collateral means pledgeable assets a lender can claim if the borrower defaults. Retained profit is not itself a collateral object—it is an internal funding source—but assets built up with retained profit can still be pledged for a loan. The statement’s claim that retained profit is “never accepted as security,” and its leap that collateral therefore “applies only to external borrowing,” muddles source-of-finance labels with security practice. External borrowing is where collateral requirements appear, yet the wording falsely treats retained profit as a rejected form of security rather than explaining that collateral attaches to assets in creditor relationships. The assertion as stated is not a correct principle.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

For long-term credit, financial institutions typically want pledgeable assets as collateral so they have recourse if the borrower defaults over a multi-year loan life. That security demand is standard lending practice for sole proprietors seeking long-term bank finance.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Mortgages over land and property are a common way to back long-term bank loans. The property is pledged; the loan remains repayable according to the mortgage and loan agreement.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A creditor advances money for an agreed period. Repayment follows the contract and usually includes interest as the price of borrowing. Time-limited advance plus contractual repayment is the basic lending mechanism.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

If private property was mortgaged as collateral and the business cannot repay, that property remains at stake: the lender can enforce the security. Unlimited liability and collateral enforcement can both put the pledged private asset at risk when default occurs.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

When business debts exceed what firm resources can cover, unlimited liability lets creditors pursue the sole proprietor''s private assets for the shortfall. That personal reach is the insolvency principle the stem asks for.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — There is no such thing as incorporating informally as a sole trader. Sole proprietorship remains unincorporated; creditor claims are not limited to balance-sheet business assets. Limited claims of that sort belong to limited companies, not to this form.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Employees do not share unlimited liability equally with the owner. Residual responsibility for business obligations stays with the sole proprietor. Wages do not convert staff into co-liable owners.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Lack of separate legal personality does not dissolve trade credit obligations. Amounts owed to suppliers remain payable by the proprietor. Unincorporated status explains personal exposure; it does not make payables disappear.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Unlimited liability covers business debts and obligations generally, not only formal external borrowing. Trade payables, unpaid expenses, and other obligations can all engage personal exposure. Confining unlimited liability to bank-style external loans is too narrow.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

After a business current account is opened, an overdraft facility lets the balance go negative within a limit. That supplies flexible short-term credit to bridge seasonal gaps between receipts and payments without arranging a new term loan each time.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

An overdraft is a banking product, not an incorporation event. It does not convert the sole proprietorship into a corporation or create limited liability. Legal form and liability regime stay as they were.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Short maturity does not remove liability recognition. An overdrawn balance is still an amount owed to the bank and counts among the proprietor''s business liabilities until cleared.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdraft interest is charged when the account is overdrawn (on the borrowed amount), not on a full positive balance sitting safely in credit. Charging interest on a healthy positive balance as if it were borrowed misstates overdraft pricing.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

The account may be the proprietor''s business account, but the overdraft funds are bank credit. Classification is external short-term debt finance, not internal finance generated by the firm.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Trade credit rests on a supplier agreement that allows payment later than delivery or invoice. Deferred settlement under agreed terms is the financing arrangement between sole trader and materials suppliers.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit must be repaid at the end of the credit period. It is external short-term finance from the supplier, not internal finance, and it does carry a repayment obligation.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Deferring payment changes when cash leaves; it does not remove the need to plan cash-flow timing. The proprietor must still ensure funds are available when the credit period ends. Trade credit relocates the timing problem; it does not abolish it.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Until the invoice is paid, the outstanding supplier balance is an external short-term liability. External describes the supplier as outside financier; short-term describes the usual purchase-cycle maturity.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

With trade credit the business need not pay for all purchases immediately; it receives a credit period before settlement. That delay is the liquidity benefit of the arrangement.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Owner investment from personal funds is classified as an external source in this framework: it enters from outside retained trading surplus. It is a primary way sole proprietors raise capital beyond what operations have already earned.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

When outside investors provide capital to the business, those funds are external finance. They expand resources when personal savings alone are not enough.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Bank and other creditor funds are external sources that create repayment duties under the credit agreement. Interest and schedule terms define how that external debt must be serviced.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — If personal wealth is limited, the proprietor struggles to fund establishment even though legal barriers are low. Scarce personal resources make set-up very difficult unless other external finance is obtained.

Funding capacity for a sole proprietorship tracks what the owner can supply or attract. Personal financial capacity therefore shapes how much finance is available at start-up and in early expansion — legal ease of entry does not invent capital by itself.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Launching a sole tradership typically begins with the proprietor''s own savings as initial funding before or alongside later investor or bank support. Owner savings are the common starting block.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal sources matter because they do not require paying interest or similar financial charges to outside lenders. Avoiding those borrowing costs is the practical advantage when reinvested earnings or asset sales can meet the need.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Once revenues exceed expenses, profit retained and put back into the business is internal finance. The funding is the firm''s own surplus.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Selling assets that are no longer needed converts idle owned resources into cash inside the firm. That cash is internal finance available for other uses.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Disposing of surplus equipment likewise releases internal funds for reinvestment without creating a new creditor relationship. No borrowing means no new interest-bearing liability from that step.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Finance source and liability regime are separate. Using internal finance avoids interest on that slice of funding; it does not abolish unlimited liability for business debts. The proprietor still bears personal exposure for obligations of the firm.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Banks offer both short-term and long-term credit to sole proprietors. Overdrafts and other facilities with duration under a year are common short-term products. Claiming banks offer only long-term credit and never short-term facilities is false.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

A bank overdraft is among the most common short-term credits for sole traders: flexible, linked to the current account, and typically intended to cover temporary needs within the year.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Trade credit from suppliers is also typically short-term, aligned with purchase and invoice cycles rather than multi-year project finance.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Quick repayment does not erase the liability while the amount is outstanding. Short-term credit is recorded as a liability until paid. Speed of expected settlement does not mean “never recorded.”.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Pledging land and property as collateral secures the lender; it does not cancel the loan as a liability. The mortgage loan remains payable according to its terms even after collateral is in place.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owner savings invested at start-up are treated as an external source: they are not retained trading profit. Most sole proprietors begin with that external owner injection.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

The two are classified differently. Start-up owner savings are external; retained profit from later years is internal. Bundling both as internal finance erases that distinction.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

After successful trading, profit kept and reinvested is internal finance generated by operations. That label applies specifically to retained surplus, not to the owner''s original savings.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Bank credit and trade credit remain external even when the cash or goods are in the business. Holding funds in the business account does not convert creditor finance into an internal source.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Investor funds obtained when savings are insufficient are external capital from outside parties. They are not internal operating cash generated by the firm.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When revenues exceed expenses, a surplus exists. The sole trader can retain and reinvest it—or withdraw it. Retention for working capital happens only if the proprietor leaves the profit in the business.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Selling obsolete equipment no longer needed turns an owned asset into cash without taking an interest-bearing loan. That is internal finance without interest charges from creditors.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — More generally, internal sources avoid financial charges such as interest paid on borrowed funds, which is why reinvestment and asset disposal are useful when they can cover the need.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Reinvested surplus funds operations without creating a new creditor liability for that funding slice. No lender is owed repayment on retained profit itself.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Once profit is withdrawn for personal spending, it has left the business. It is no longer available as internal finance for the firm. Withdrawal and internal reinvestment are mutually exclusive uses of the same surplus.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Using property as mortgage collateral is a security arrangement for a loan. It does not automatically incorporate the sole proprietorship as a limited company. Legal form changes only through formal incorporation, not through pledging assets.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Collateral reduces the lender''s risk; it does not oblige creditors to waive all interest. Long-term loans secured by land and buildings still normally charge interest as the price of credit.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Registering a mortgage puts the pledged assets at stake if default occurs; it does not completely protect them from claims. The point of collateral is enforceability against those assets, not immunity for them.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Both a short-term overdraft and a long-term mortgage loan create amounts the sole proprietor owes. Different maturities, same status as liabilities.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Pledging collateral does not remove the loan from the liability side. Long-term mortgaged credit remains a liability until repaid; security backs the claim, it does not exclude it from the proprietor''s obligations.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Because the form centres on one person, the business''s financial funds mainly track what that sole proprietor can provide or attract. Personal financial capability heavily shapes the funding envelope.

Funding capacity for a sole proprietorship tracks what the owner can supply or attract. Personal financial capacity therefore shapes how much finance is available at start-up and in early expansion — legal ease of entry does not invent capital by itself.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Owner investment, investor funds, and creditor loans all enter from outside retained operations, so they are external sources in the standard classification.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained profit and sale of unused assets arise from the firm''s own resources once operations are under way, so they are internal sources.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Unlimited liability is not confined to external borrowing. It covers business debts and obligations broadly—including obligations that arise even when funding has been internal. Narrowing it to creditor loans alone is incorrect.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Whether the instrument is a short-term overdraft or a long-term mortgage, the credit is a liability of the sole proprietor until discharged.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

A retail sole proprietor may hire sales staff for daily customer service when support is needed. Employment expands capacity without changing the ownership form.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Hiring sales staff does not permanently transfer the most important management decisions to employees. Staff serve customers under the owner''s direction; strategic and key managerial authority remains with the proprietor.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Despite assistants on the floor, the proprietor must still make key management decisions and accept the associated business risk, including unlimited liability. Delegation of service tasks is not transfer of residual control and risk.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Even with staff present, management largely depends on the sole proprietor. The organisational centre stays with the owner-manager.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Employees do not assume unlimited liability in proportion to wages. Personal exposure for business debts stays with the sole proprietor; pay levels do not allocate owner liability to staff.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Lack of separate legal personality does not ban hiring. Sole traders routinely employ staff. Saying personnel cannot be hired under any circumstances is false.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

The same point affirmatively: an unincorporated sole proprietorship may still hire personnel when support is required. Operational capacity includes employment even without corporate personality.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

Sole proprietors can and do enter contracts with suppliers and banks; the contracts bind the owner personally. Absence of separate legal personality changes who is bound, not whether contracting is possible.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Headcount does not trigger automatic incorporation. Becoming a limited company requires formal incorporation steps, not merely hiring a second employee.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Hiring does not transfer ownership to the workforce. Employees remain employees; the sole proprietor remains the owner unless an explicit ownership transfer occurs.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Continuity is tied to one person''s capacity to own and manage. Retirement or long-term illness removes that centre of control. Without a planned transfer, sale, or covering arrangement, customers, contracts, and decisions can stall — staff do not automatically become owners.

Long-term illness removes or impairs the person on whom management depends. Continuity problems may therefore occur until the proprietor recovers or a transfer arrangement is made.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Nothing in the sole-proprietorship form automatically preserves unchanged operations when the owner retires or is long-term absent. Employees do not inherit ownership by default, and the firm does not silently convert into a partnership. Succession must be arranged.

Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Employees do not legally become co-owners automatically when the owner is ill. Without a transfer, ownership is unchanged, and continuity can still suffer. The “no continuity effect” claim is false.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Prolonged inability to work does not automatically convert a sole proprietorship into a partnership. Partnership requires a multi-owner founding arrangement, not mere absence of the owner.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Continuity is tied to one person''s capacity to own and manage. Retirement or long-term illness removes that centre of control. Without a planned transfer, sale, or covering arrangement, customers, contracts, and decisions can stall — staff do not automatically become owners.

Retirement plans likewise threaten continuity because the controlling owner intends to step away. Without succession or sale arrangements, the business can face interruption.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Nothing in the sole-proprietorship form automatically preserves unchanged operations when the owner retires or is long-term absent. Employees do not inherit ownership by default, and the firm does not silently convert into a partnership. Succession must be arranged.

Dependence on one manager makes succession planning more pressing, not less, compared with firms that can transfer ownership shares while the legal person continues. The statement reverses the urgency.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A sole proprietorship concentrates ownership and day-to-day control in a single natural person. That person owns the trading assets, makes the operating decisions, and bears the residual risk. There is no co-owner layer and no separate company person standing between the proprietor and the business.

Single ownership and management define the form.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit. That low formal barrier is why the form is described as easy to establish for small businesses — even though owners often still inject personal savings voluntarily.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Unincorporated profits are personal income.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Unlimited liability exposes personal wealth.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Internal funds avoid interest; external credit carries repayment costs.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Borrowing does not limit the proprietor''s unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the sole-trader triad in view: one owner-manager, no separate legal personality with personal tax on profits, and unlimited liability for debts. Investors and banks supplement personal resources.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Owner investment plus investor and creditor funds are external sources of finance.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Credit agreements require repayment with interest regardless of asset use.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Limited personal funds make establishment very difficult.

Personal wealth and funding capacity do affect whether and how easily a sole proprietorship can be established or expanded. Claiming they have no bearing reverses the usual finance constraint for this form.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit remains short-term purchase finance despite deferral.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdraft interest applies during overdrawn periods only.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdrafts and trade credit cover near-term needs.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Mortgage loans remain liabilities despite collateral.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the sole-trader triad in view: one owner-manager, no separate legal personality with personal tax on profits, and unlimited liability for debts. Every credit form creates repayment obligations.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Available capital reflects the owner''s financial position.

Funding capacity for a sole proprietorship tracks what the owner can supply or attract. Personal financial capacity therefore shapes how much finance is available at start-up and in early expansion — legal ease of entry does not invent capital by itself.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — There is no mandatory minimum share capital before a sole trader may begin. Confusing sole proprietorship with company capital rules, or reading ''no requirement'' as ''owners never contribute savings,'' misstates how start-up funding works in practice.

No such capital requirement applies to sole proprietorships.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Voluntary owner investment from savings is common despite no minimum rule.

No mandatory minimum capital means the law does not force a deposit before trading — it does not mean owners contribute nothing. In practice most sole traders still inject personal savings voluntarily despite the zero entry gate. The useful contrast is ‘no legal minimum’ versus ‘no owner funding at all,’ which are not the same claim.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the sole-trader triad in view: one owner-manager, no separate legal personality with personal tax on profits, and unlimited liability for debts. Personal savings commonly fund initial operations.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Initial owner investment from savings is external finance at start-up.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained profit kept in the firm is not treated as a loan from the owner that must pay market interest. Avoiding creditor interest is precisely why internal finance is attractive.

Internal finance avoids creditor interest charges.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Credit agreements require repayment with interest regardless of revenue.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Retained profit kept in the firm is not treated as a loan from the owner that must pay market interest. Avoiding creditor interest is precisely why internal finance is attractive.

Retained profit is internal and does not incur borrowing interest.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Overdraft pricing follows use: interest accrues on the overdrawn amount during overdrawn periods, not on unused positive balances.

Overdraft interest applies during overdrawn periods only.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is a payable liability until settled.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Trade credit is supplier agreement finance, not typically mortgage-backed.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Long-term lenders commonly demand security.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Property mortgages frequently back long-term loans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Pledged assets can be seized upon default.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Unlimited liability persists; collateral does not remove broader exposure.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Unincorporated profits are personal taxable income.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Reinvested surplus is internal and avoids borrowing costs.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Pass-through personal taxation does not create a corporate tax entity and does not exempt profits from tax. Dividends are a corporate distribution concept; sole traders do not need to issue dividends before personal tax is due on business profit.

There is no separate corporate tax on retained earnings for a sole trader.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

External finance enters from investors and creditors.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Asset disposal releases internal funds during operations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Liability structure is independent of funding source.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Personal wealth remains exposed under unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

All credit forms create repayment duties.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Internal finance does not remove unlimited liability for business debts.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Internal and external finance alike leave the proprietor fully liable.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Unincorporated status does not prevent hiring personnel.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Unincorporated profits are personal taxable income.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

External versus internal classification follows the textbook definitions.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

A bank overdraft is flexible short-term credit on a current account: the balance may go negative within a limit. Interest is charged when the account is overdrawn, not on a healthy positive balance. The facility is external debt, not internal finance.

Credit creates liabilities under unlimited liability reaching private assets.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Nothing in the sole-proprietorship form automatically preserves unchanged operations when the owner retires or is long-term absent. Employees do not inherit ownership by default, and the firm does not silently convert into a partnership. Succession must be arranged.

Single-person dependence creates succession and continuity risk.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Strategic authority remains with the proprietor despite hired staff.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Nothing in the sole-proprietorship form automatically preserves unchanged operations when the owner retires or is long-term absent. Employees do not inherit ownership by default, and the firm does not silently convert into a partnership. Succession must be arranged.

Easy start-up does not remove continuity risk or unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained profit kept in the firm is not treated as a loan from the owner that must pay market interest. Avoiding creditor interest is precisely why internal finance is attractive.

Retained profit is internal finance and does not incur creditor interest.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the finance map in view: internal (retained profit, asset sales) versus external (owner start-up savings, investors, creditors), and equity claims versus debt obligations with short- versus long-term maturity.

Operating surplus may be reinvested or taken personally.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Investor and bank funds are external sources, not internal finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.50' AND tier = 'full';
