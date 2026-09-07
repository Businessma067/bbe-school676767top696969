-- Update expanded explanations for 4.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Separate legal personality is the defining split between unincorporated and incorporated structures in the overview.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships remain unincorporated even when partners pool capital; they are not legal persons of their own.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

Pass-through personal taxation does not create a corporate tax entity and does not exempt profits from tax. Dividends are a corporate distribution concept; sole traders do not need to issue dividends before personal tax is due on business profit.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Personal tax reporting reflects the absence of separate legal personality rather than creating it.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporation depends on legal structure, not merely whether shares trade on an exchange.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Limited liability companies are incorporated legal persons alongside corporations.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Directors run the company; shareholders supply capital and need not manage day-to-day operations.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders are unincorporated and typically combine ownership and management in one person.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporate structure allows shareholders to own while directors manage operations.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partners are usually owners and managers themselves in unincorporated partnerships.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole proprietorships lack the shareholder-director split characteristic of incorporated firms.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Trading activity alone does not confer separate legal personality on an unincorporated sole trader.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A one-person operation where the proprietor runs the shop matches the sole trader pattern.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated firms lack independent legal entity status from their owners.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital and directors characterise incorporated businesses, not a typical sole trader bakery.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations and limited liability companies are incorporated, not unincorporated, forms.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 9 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Sole traders and partnerships are listed under unincorporated ownership in the summary.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 9 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Corporations and limited liability companies appear as incorporated legal structures.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 9 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

Partnerships can have multiple owners yet remain unincorporated.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Owner-manager overlap is characteristic of unincorporated businesses in the figure.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated governance separates capital-providing shareholders from managing directors.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview lists sole traders among unincorporated businesses with owner-manager overlap.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders lack separate legal personality and are not independent legal persons.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A single-shareholder company remains incorporated if it is a corporation or limited liability company.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships are unincorporated alongside sole traders, not incorporated with them.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole proprietorships do not use a shareholder-director governance model.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Directors, not shareholders as a rule, run the company in incorporated structures.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partners typically both own and manage in unincorporated partnerships.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole proprietors manage directly without mandatory external directors.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated firms may separate ownership from management through directors.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview assigns day-to-day company management to directors in incorporated businesses.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital and shareholders belong to incorporated structures, not sole traders.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partner capital contributions do not convert a partnership into an incorporated legal person.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships are unincorporated forms that may have more than one owner.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview links shareholders with capital provision and directors with running the company.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Separation of owners and managers is a hallmark of incorporated businesses.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Joint founding with shared management fits an unincorporated partnership, not a corporation.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partners who manage client work embody the typical owner-manager overlap in partnerships.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships lack separate legal personality from their owners.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital and directors characterise incorporated firms, not a consulting partnership.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders are unincorporated; corporations and limited liability companies are incorporated.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Lack of separate legal personality defines unincorporated structures.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated firms possess independent legal person status.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Owner-manager identity is typical in unincorporated businesses.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporate governance separates capital-providing shareholders from managing directors.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Both corporations and limited liability companies fall under incorporated ownership.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Legal personhood is the defining feature of incorporated businesses.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Registration or trading names do not make unincorporated partnerships separate legal entities.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Employing staff does not confer incorporated legal personality on a sole proprietorship.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Only incorporated businesses are legal persons; unincorporated ones are not.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partners remain in an unincorporated structure unless the firm is formally incorporated.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships are listed as unincorporated and can involve multiple owners.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations are incorporated legal persons.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Limited liability companies share incorporated status with corporations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Hiring managers does not change a partnership''s unincorporated legal structure.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Both sole traders and partnerships are unincorporated forms.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview states that owners and managers are typically identical in unincorporated firms.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Shareholders need not be directors; ownership and management may diverge.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A managing sole trader exemplifies unincorporated owner-manager unity.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Task specialisation among partners does not make a partnership incorporated.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Directors run incorporated companies; shareholders need not manage directly.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Employment does not transform a sole proprietorship into an incorporated legal person.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A single decision-making owner matches the sole trader pattern.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated farms lack independent legal entity status.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital and directors characterise incorporated businesses, not a sole proprietor farm.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Limited liability companies are incorporated regardless of industry sector.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Legal personhood is confined to incorporated structures in the ownership overview.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnership agreements govern relations among partners but do not create a separate legal person.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Business branding does not confer incorporated legal personality on a sole trader.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Private limited companies remain incorporated legal persons without public listing.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The core distinction is legal entity status, not taxation alone.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Director-led operations within a separate legal person indicate an incorporated corporation.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations are incorporated legal entities distinct from owners.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated structures allow shareholders to own without managing operations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview assigns capital provision to shareholders and management to directors.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders typically combine ownership and management without a shareholder-director split.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Multiple owners are possible in unincorporated partnerships.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders combine single ownership with typical self-management.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Multiple shareholders characterise incorporated share ownership, not unincorporated status.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations retain incorporated legal personality with any number of shareholders.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partner co-ownership does not create a separate legal entity in unincorporated partnerships.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated status means the firm is not a legal entity of its own.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated businesses are legal persons distinct from owners.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Owner-manager overlap is typical where ownership and management coincide in unincorporated forms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated governance permits owners who do not manage and managers who do not own shares.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The statement uses quantitative claims that should be read in order:

Step 1: the amount 9 is a named quantity in the stem and must be kept attached to the item it measures (capital, shares, price, or debt).

The diagram explicitly maps these forms to unincorporated and incorporated sides respectively.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders exemplify owner-manager unity in unincorporated forms.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partners typically manage as well as own in unincorporated partnerships.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital flows from shareholders to incorporated firms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Directors handle company management in incorporated structures.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Revenue size does not confer legal personality on unincorporated businesses.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview lists sole traders among unincorporated ownership forms.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships are unincorporated and may have multiple owners.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations are incorporated with separated ownership and management roles.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Contracting does not by itself determine incorporated versus unincorporated status.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Limited liability companies share incorporated classification with corporations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A single managing owner matches the unincorporated sole trader pattern.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Public trading does not create separate legal personality for a sole proprietorship.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Share capital and directors belong to incorporated structures, not a sole proprietor café.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated cafés lack independent legal entity status.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations and limited liability companies are incorporated, unlike sole proprietorships.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole proprietors manage directly; they do not use a shareholder-director split.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated structure permits separation of owning shareholders from managing directors.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Task delegation among partners does not incorporate the partnership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

The overview links shareholders with capital and directors with running the company.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Owner-manager overlap is typical of unincorporated forms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Growth and staffing do not change a sole trader''s unincorporated status.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Name registration alone does not create incorporated legal personality for a partnership.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Limited liability companies are incorporated despite limited owner liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unlisted corporations are still incorporated legal persons.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Legal personality versus absence of it is the central classification criterion.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Figure 9 lists sole traders and partnerships among unincorporated forms.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations and limited liability companies are incorporated forms in the summary.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated firms lack separate legal personality from owners.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Legal personhood is the incorporated marker in the framework.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Shareholder capital and director management define incorporated governance.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Activity scale does not convert an unincorporated partnership into an incorporated entity.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated legal personality persists regardless of geographic scope.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders typify owner-manager unity in unincorporated forms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Incorporated governance allows passive share ownership separate from management.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated firms lack independent legal entity status.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Separate legal personhood is the incorporated marker in the overview.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated firms are not legal entities of their own.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Sole traders and partnerships are listed as unincorporated forms.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Corporations and limited liability companies are incorporated forms.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Ownership and management can separate: shareholders who found or fund the corporation need not run daily operations, and hired managers need not own shares. Boards and executives supply the governance layer.

The board of directors oversees strategy and appoints or supervises executive management. Day-to-day running typically sits with managers; shareholders exercise control mainly through appointments and major votes, not by personally managing every contract.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Ownership and management may diverge in incorporated structures.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.4.25' AND tier = 'full';
