-- Update expanded explanations for 4.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

They remain incorporated legal persons despite private ownership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Private shares are not freely sold to the public on exchanges.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Private limited firms combine incorporation with limited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Listing is not required for incorporated status.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Liability is generally capped at invested capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Minimum capital rules target certain incorporated forms, not sole traders or partnerships.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Some corporations must meet capital thresholds at formation.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Minimum capital provides a creditor protection buffer.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends remain discretionary even after capital requirements are met.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Formal capital and registration add setup complexity versus unincorporated firms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporations may combine equity with bonds and bank loans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporate bonds and bank loans are both debt, but bonds are issued to investors in the market whereas bank loans are negotiated with lenders. Neither is equity: both create repayment obligations rather than residual ownership claims.

Bond interest may undercut comparable bank rates.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds can trade on regulated markets alongside shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporate bonds and bank loans are both debt, but bonds are issued to investors in the market whereas bank loans are negotiated with lenders. Neither is equity: both create repayment obligations rather than residual ownership claims.

Debt must be repaid; equity does not carry the same obligation.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The incorporated firm contracts in its own name with limited owner exposure.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Shareholders may attend meetings even if they are not directors.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Voting rights motivate attendance at the annual meeting.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Preferred stock often limits voting in return for dividend priority.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Voting does not require shareholders to manage daily operations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Ownership persists even when management is delegated.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.3.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Separate legal personality defines incorporation.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Limited liability caps owner exposure at invested capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Primary share sales can mobilise substantial equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Listing facilitates trading but remains optional.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Boards run operations while shareholders may remain passive owners.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Shares trade at issue and on secondary markets, not only at meetings.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Secondary trading continues without repeating an ipo annually.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Shares trade at initial issue or on the secondary market between shareholders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Only primary sales fund the issuer; later trades swap owners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — After issue, shares trade among investors. A rise in the secondary-market price enriches the selling shareholder relative to their purchase price; it does not by itself inject new cash into the corporation''s accounts.

Any share purchase confers shareholder status.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary rallies do not increase registered share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Profit expectations can lift investor demand and prices.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Holders may realise capital growth on later sales.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Trade proceeds flow between investors, not to the issuer.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Dividends remain discretionary and are not tied to price spikes.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.3.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Authority oversight defines regulated exchanges.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Listing demands compliance with exchange rules.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Post-ipo prices reflect market demand and supply.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond trading may occur alongside share trading.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Later trades benefit transacting investors, not the issuer''s capital account.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Shareholders are not generally liable for all corporate tax debts beyond investment.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Exposure is usually capped at subscribed capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Market losses on share values can still occur.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Non-shareholder managers do not automatically share the same liability shield as investors.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unlimited or broader owner liability marks many unincorporated structures.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Legal personality does not require distributing all profit as dividends.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends are not fixed to market prices nor strictly mandatory.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Omitted dividends can weaken demand and affect prices.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends come from profits, not mandatory interest on capital.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Discretionary dividends affect attractiveness when withheld too long.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Private limited firms retain limited liability without public listing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporation gives separate legal personality for assets and hiring.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Minimum capital can apply at formation regardless of listing plans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Private firms may still elect boards and delegate management.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Private limited companies operate without public share sales.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Low rates raise the relative appeal of equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

High rates favour fixed-return alternatives over shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Growth signals are among demand influences cited for shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

High rates tend to reduce share demand rather than automatically lift prices.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Price effects from demand do not fund the issuer after shares are issued.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Inflation may lift expected share values and demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Inflation appears among cited demand influences.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Prosperity can coincide with stronger equity demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Registered share capital is not automatically adjusted with inflation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Market gains from inflation expectations accrue to shareholders, not issuer finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Cfo duties do not require holding the largest share block.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The coo may sit on the board managing operations.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Capital providers need not run daily operations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporations separate owners from professional managers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Primary ipo sales raise share capital inside the firm.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Secondary doubling does not double internal cash capital.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Regulators do not capture trading gains as issuer equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Holders are not obliged to pay market premiums back to the firm.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Higher prices do not grant unlimited interest-free debt rights.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Incorporated firms hold assets in the corporate name.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The legal entity remains suable despite owners'' limited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

The corporation hires staff under its own legal personality.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Litigation runs against or by the firm itself.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Contracts bind the corporation rather than each owner personally.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Secondary payments go to selling shareholders, not share capital.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Exchange trades normally occur between investors, not as issuer capital inflows.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Trading premiums do not expand permanent registered equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Primary issue proceeds are what raise issuer share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Price falls do not force capital redemption.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Founders may remain investors without managing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Managers may be non-owners appointed to the board.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Passive shareholders elect representatives to the board.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Major decisions sit with the board rather than each owner.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Incorporation persists; ownership can change without losing legal personality.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends are discretionary, not legally guaranteed each year.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Retention alone does not guarantee price rises.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Limited liability is unaffected by dividend policy.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Long non-payment can reduce attractiveness and demand.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends distribute a portion of profits to owners.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Share capital is capital split into shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Stock represents a fraction of total share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Equity is typically permanent and unredeemed.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Share buyers become owners of the corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Primary issues fund the corporation through share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary trades move ownership without issuer finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Post-introduction prices follow market forces.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Motives include income, growth, and voting rights.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Multiple macro indicators shape share demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Incorporated firms access broader finance channels.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporate bonds and bank loans are both debt, but bonds are issued to investors in the market whereas bank loans are negotiated with lenders. Neither is equity: both create repayment obligations rather than residual ownership claims.

Bonds compete with bank loans as debt sources.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Equity lacks the fixed repayment duty of debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Private placements can raise equity without listing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Unlisted firms remain incorporated legal persons.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Equity can be raised off-exchange through private sales.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Limited liability applies to private shareholders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — After issue, shares trade among investors. A rise in the secondary-market price enriches the selling shareholder relative to their purchase price; it does not by itself inject new cash into the corporation''s accounts.

Listing is optional and mainly aids broad secondary trading.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Common stock usually carries meeting votes.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Preferred holders typically forgo voting for dividend priority.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Preferred shares exchange votes for income preference.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Voting rights motivate some equity purchases.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Even preferred priority leaves dividends discretionary overall.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporations mix equity with debt finance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers. Bank loans do not block subsequent share issues.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Debt and equity differ; neither removes limited liability for shareholders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Borrowing does not expand shareholders'' personal liability beyond investment.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bond issues may still be used alongside existing bank debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.3.50' AND tier = 'full';
