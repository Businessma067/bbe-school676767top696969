-- Update expanded explanations for 4.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Corporations are legal persons with rights and obligations comparable to natural persons.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Legal personality lets the firm own assets, employ staff, and contract independently.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

The incorporated business can initiate and face litigation in its corporate name.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

Founders who hold shares are not required to run daily operations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Directors and executives may manage the firm without holding shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Post-issue price gains do not add new share capital to the issuer.

Share capital is built from the capital attached to issued shares. Where nominal (par) value is used, total share capital is thought of as nominal value times the number of shares issued. Ownership fractions follow how many shares each investor holds, not who holds the CEO title.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Secondary trading transfers ownership among investors; it does not fund the corporation anew.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends remain discretionary and are not tied to market price movements.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

Finance choice weighs cost (interest and issuance costs), gearing risk (heavy loan capital raises fixed burdens and insolvency exposure), and matching (long-lived assets with long-term finance; short-cycle materials with short-term credit). No single criterion replaces the others.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Only primary issue proceeds finance the issuer; later price rises benefit shareholders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Trading gains accrue to selling shareholders, not to the issuing corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Limited liability confines exposure to the capital subscribed for shares.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Shareholders can lose invested capital if the business fails or share values fall.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Dividing capital into shares defines share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Purchasing shares confers shareholder status.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers. Share capital is typically permanent long-term equity not repaid like a loan.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Shareholders supply capital but need not manage the firm.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Managers need not own shares to serve on the board.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Shareholders elect a board to take major decisions and represent them.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Cfo and coo roles may sit on the management board.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Incorporation involves more formal steps than unincorporated forms.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporations can tap equity markets and debt sources more readily.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporations also use loans and credit alongside share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Shareholder liability is usually limited to invested capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporate finance combines equity from shares with borrowed funds.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Each share would represent 0.001 per cent, not one per cent, of that capital.

Share capital is built from the capital attached to issued shares. Where nominal (par) value is used, total share capital is thought of as nominal value times the number of shares issued. Ownership fractions follow how many shares each investor holds, not who holds the CEO title.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Selling all issued shares at par raises the full one million euros of share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Shares may be bought at initial issue directly from the corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Share capital is built from the capital attached to issued shares (often thought of via nominal or par amounts × number of shares, depending on the jurisdiction''s presentation). Ownership fractions follow shareholdings, not day-to-day managerial titles.

Issue pricing follows market and listing conditions; it is not fixed above nominal value in all cases.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Primary share sales can mobilise very large sums for the corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Listing is optional; unlisted corporations may still operate as legal persons.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Exchanges are regulated markets open to many buyers and sellers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Listing itself requires complying with rules and listing requirements.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

After introduction, prices are driven by demand and supply.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Exchanges are authority-regulated markets for trading securities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Investors may buy at primary issue or on the secondary market.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — After issue, shares trade among investors. A rise in the secondary-market price enriches the selling shareholder relative to their purchase price; it does not by itself inject new cash into the corporation''s accounts.

An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

The first exchange introduction of shares is termed an ipo.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary resales transfer shares among investors without increasing issuer share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Market prices after listing reflect demand and supply.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Post-issue gains accrue to shareholders, not to the issuing corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The board is elected to decide major matters on shareholders'' behalf.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

A cio may hold a board seat with defined duties.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

A cmo may manage marketing from the board.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

Capital providers need neither manage nor hold management rights by default.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Profit expectations can draw investors toward a corporation''s stock.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Prosperity leaves more funds available for equity investment.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Inflation may lift expected share values and support demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Low interest rates reduce the appeal of fixed-return alternatives.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Growth, interest rates, and inflation all shape share demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Supporting a favoured business is a common investment motive.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends offer annual income from distributed profits.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Capital growth arises when resale prices exceed purchase prices.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Meetings allow shareholders to vote on major matters.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Stock may be acquired at issue or through later secondary sales.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated firms are legal persons with property and employment capacity.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Private limited shareholders still enjoy limited liability on invested capital.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Shares need not be exchange-listed to keep limited liability.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Private companies issue shares without public listing.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Ownership and management may be separated in corporations.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividend payments are not legally mandatory each year.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Dividends are discretionary distributions from profits.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Omitted dividends can reduce attractiveness rather than guarantee gains.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Prolonged non-payment may weaken demand and pressure prices.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Price falls do not inject share capital into the issuer.

Dividends distribute corporate profit to shareholders under board/company policy. They are not the same as sole-trader drawings, and skipping dividends does not by itself invalidate share ownership.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Preferred stock often trades voting rights for dividend priority.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Dividends distribute part of corporate profit to shareholders. Dividend policy affects how attractive shares look versus capital gains, but paying dividends is a distribution choice — not the same mechanism as sole-trader profit drawings.

Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Preferred holders usually sacrifice voting power for income preference.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Common shares generally carry meeting voting rights.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Bonds are debt securities distinct from preferred equity.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporate bonds and bank loans are both debt, but bonds are issued to investors in the market whereas bank loans are negotiated with lenders. Neither is equity: both create repayment obligations rather than residual ownership claims.

Bond finance may cost less interest than comparable bank borrowing.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Exchange prices respond to market demand and supply.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

High demand tends to push prices up under supply-and-demand logic.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary purchases transfer existing shares; they need not trigger new issuance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

The corporation is not obliged to redeem shares when demand falls.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Secondary trade proceeds do not increase issuer share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.3.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Shareholders need not manage; a board may run the firm.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Shareholders may invest without holding board seats.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Owners can delegate operations to an elected ceo.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Legal personality still requires the corporation to honour contracts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.3.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Share capital is not repayable on demand like a loan.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Equity is long-term, not short-term credit redeemed annually.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — An overdraft does not incorporate the firm, create limited liability, or cease to be a liability because it is short-term. Interest is not charged as if a positive credit balance were borrowed.

Overdrafts are short-term debt; share capital is permanent equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Companies typically do not redeem share capital.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Secondary sales occur between investors without mandatory issuer buybacks.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.3.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Corporations combine equity with loans and credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bonds may trade on regulated securities markets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Corporate bonds and bank loans are both debt, but bonds are issued to investors in the market whereas bank loans are negotiated with lenders. Neither is equity: both create repayment obligations rather than residual ownership claims.

Bond coupons may undercut comparable bank loan rates.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Bondholders are creditors, not equity owners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Bonds issued to investors are a form of long-term external debt finance: the company borrows from bondholders and owes interest and principal according to the bond terms, distinct from equity share capital.

Regulated exchanges handle multiple security types including bonds.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Legal persons may hire staff in the corporate name.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The firm contracts and litigates independently of owners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Corporate personality binds contracts to the firm, not each owner personally.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

Corporations may own land and property directly.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

The corporation itself can be sued despite shareholders'' limited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.3.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary price moves do not alter registered share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Voting rights pass to buyers, not back to the corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Market prices follow investor demand and supply after issue.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Price rises do not oblige automatic bonus share issuance.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Sellers capture capital gains; the issuer receives no trade proceeds.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Each share corresponds to a defined portion of total share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Market prices and registered share capital are not mechanically linked after issue.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Primary purchases fund the corporation and confer ownership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Secondary sales transfer ownership between investors without obliging the corporation to redeem the stock.

After issue, shares are transferable property of the investor. A later sale on the secondary market moves ownership from one investor to another; the corporation is not required to buy the shares back (redeem them) merely because a shareholder wants to exit. Primary issue raises cash for the firm; secondary transfer generally does not.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Preferred shares often carry priority on dividends (and sometimes on liquidation proceeds) while voting rights may be reduced or absent compared with ordinary shares. Preference is about financial priority, not identical control rights.

Preferred shares often carry reduced or no voting rights.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.3.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Listing is optional for operating as a corporation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers. Unlisted firms may still place shares privately.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Only ipo proceeds and new issues fund the issuer, not all later trades.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Delisting does not remove incorporated legal status.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Exchange listing remains a choice, not a universal requirement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.3.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Product success expectations can attract buyers.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Growing market share signals may lift demand.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Prosperity leaves more money available to invest in equity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Higher interest rates draw funds toward fixed-return assets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Post-issue gains enrich shareholders, not issuer share capital.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.3.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

A cio may be a board member with it duties.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Shareholders delegate operations; they need not run systems personally.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Shareholders may still attend meetings and vote.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The board decides major matters for capital providers.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

Board members need not be largest shareholders.

The board oversees strategy and monitors executives; day-to-day operations usually sit with managers. Shareholders influence mainly through elections and major votes rather than by personally signing every contract.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.3.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Secondary-market appreciation is not a corporate financing inflow. The issuer receives proceeds at issue (for example at an IPO); later price changes between investors do not automatically raise new share capital for the firm.

Market gains are not booked as new issuer share capital.

Share capital is built from the capital attached to issued shares. Where nominal (par) value is used, total share capital is thought of as nominal value times the number of shares issued. Ownership fractions follow how many shares each investor holds, not who holds the CEO title.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Price highs alone do not fund corporate expansion.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Trading profits remain with shareholders unless new shares are sold.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — An IPO (or other primary issue) sells new shares and can raise equity finance for the issuer. Later exchange trading is mainly secondary: ownership passes between investors without a new capital raise unless the company issues again.

Only primary issue proceeds count as share-capital inflows.

An IPO is a primary issue: new shares are sold and the issuer can receive equity finance. Later exchange trades are typically secondary transactions among investors unless the company issues again.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the corporate triad in view: separate legal personality, transferable share capital with limited shareholder liability, and possible separation of shareholders from day-to-day managers.

Secondary appreciation does not finance the issuer.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.3.25' AND tier = 'full';
