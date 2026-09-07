-- Update expanded explanations for 4.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A sole proprietorship is defined by concentrating both ownership and day-to-day control in one natural person. That person owns the business assets used in trading and also runs operations: setting prices, choosing suppliers, hiring help if needed, and deciding how profits are used. The legal form does not create a second company person who owns or manages separately from the proprietor. So the claim that one person owns, manages, and runs the business matches the structure of this form.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Because ownership and control sit with the same individual, decision rights are not shared with co-owners. The sole proprietor can approve purchases, change strategy, or hire and fire without needing a partners'' vote or a board resolution. In practice the owner may still listen to employees or advisers, but there is no legal duty to obtain co-owner consent before acting. That is what “without necessarily having to consider other opinions” means: consultation is optional, not a structural requirement of the form.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — A sole proprietorship has no separate legal personality. The business and the owner are the same legal unit for tax purposes. Therefore trading profit is not taxed inside a corporate entity; it flows through to the proprietor and is declared on the personal income tax return. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is assessed as the owner''s personal income for the year, not as corporate income tax of a distinct company.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Separate legal personality and independent corporate income tax belong to incorporated forms (for example a limited company), not to a sole proprietorship. A sole trader is not a legal person distinct from the owner, so the firm cannot file a corporate tax return of its own. Profits are taxed on the owner''s personal income tax statement. The statement reverses both features—legal personality and tax filing—and is therefore incorrect.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Continuity of a sole proprietorship is tied to one person''s capacity to own and manage. If that person retires or is unable to work for a long period because of illness, there is no automatic second owner or professional management layer that keeps the firm running under the same legal form. Without a planned transfer, sale, or succession arrangement, customers, contracts, and day-to-day control can stall. That dependence on a single manager is why retirement and long-term illness create continuity risk.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Compared with corporations that may need minimum share capital and formal incorporation steps, a sole proprietorship can be started with little legal formality and without a mandated minimum capital deposit. The neighbourhood bakery in the stem fits that pattern: one owner-manager can begin trading without first raising a statutory capital pot. Ease of establishment for small businesses is therefore a genuine advantage of this ownership form.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Limited liability is not a feature of sole proprietorship. The owner and the business are not ring-fenced legal persons, so creditors are not restricted to assets formally recorded as business property. Under unlimited liability, personal wealth can be drawn on if business resources are insufficient. Claiming limited liability protection for a sole proprietor confuses this form with an incorporated limited company.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Unlimited liability means the proprietor''s private assets stand behind business debts. If the bakery''s cash and business assets cannot cover what is owed to suppliers or lenders, creditors may pursue personal property belonging to the owner. That is the economic mechanism of unlimited liability: repayment is not capped at business-book assets alone.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — You cannot incorporate as a sole proprietorship. Incorporation creates a separate legal person, typically with limited liability for shareholders. A sole proprietorship remains unincorporated and the owner''s liability stays unlimited; it is not capped at capital originally invested. The statement mixes two incompatible legal structures and invents limited liability where none exists.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Trade credit is deferred payment for purchases, not a gift and not a shield against liability. When suppliers deliver goods on credit, the bakery owes those amounts until they are paid. The sole proprietor remains personally responsible for that payable. Trade credit changes cash timing; it does not erase the obligation or the unlimited-liability exposure attached to it.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Legal personality means the ability to hold rights and duties in one''s own name as a distinct person in law. A sole proprietorship does not acquire that status: there is no company entity separate from the owner. Contracts, assets, and liabilities sit with the proprietor personally. That is the core legal distinction from an incorporated business.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Because there is no separate corporate taxpayer, business profit is attributed to the owner. The fiscal path is: compute profit from the trading activity, then include that profit on the personal income tax statement. The owner does not file a stand-alone corporate tax return for the sole proprietorship as if it were a company.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Managerial authority is not split among shareholders and a board in this form. The sole proprietor remains responsible for the decisive choices—strategy, major spending, hiring, and risk-taking—even if assistants handle routine tasks. Dependence of management on that one person is a defining organisational feature of the sole proprietorship.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Pass-through personal taxation describes how profits are assessed; it does not disable ordinary commercial acts. A sole proprietor can employ staff and sign supplier contracts in the course of business. Those relationships create personal obligations for the owner, but they are fully compatible with unincorporated status. The statement wrongly treats tax treatment as a ban on hiring or contracting.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Nothing in sole-proprietorship law prevents hiring. The owner may recruit personnel for production, sales, or administration when support is needed. What does not transfer is the central management role and the residual risk: key decisions and unlimited liability stay with the proprietor even after staff are on the payroll.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

Employment is a commercial tool available to sole traders. If daily operations need more hands, the proprietor can hire assistants while remaining the owner. Hiring does not require converting to a partnership or company; it simply adds labour under the proprietor''s direction.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Employees work under contract; they do not become residual risk-bearers for the firm''s debts. Unlimited liability attaches to the sole proprietor as owner, not to staff. Wages may be a business expense, but hiring does not shift creditor claims onto employees or relieve the owner of personal exposure.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Delegation of routine work is not delegation of ownership risk. Assistants may serve customers or keep records, yet the proprietor still chooses strategy, commits the business financially, and bears unlimited liability if things go wrong. Important management decisions and risk-bearing remain concentrated in the owner.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

With no co-owners, the sole proprietor''s decision rights are undivided. The owner can decide without a formal requirement to secure agreement from partners or shareholders. Advice from staff can be useful, but it is not a structural veto. Centralised authority is therefore correctly described.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — When operations hinge on one manager''s presence and judgment, long-term illness interrupts that control channel. Employees may keep routine activity going for a while, but they do not automatically inherit ownership or full decision authority. Continuity can therefore be disrupted until the proprietor returns or a transfer is arranged.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Registering a trading name identifies the business in the marketplace; it does not incorporate the firm. Incorporation is a separate legal process that creates a company with its own personality and tax identity. A registered sole-trader name still leaves ownership and tax with the natural person who owns the business.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Without a corporate shell, profit has nowhere else to be taxed. It is attributed directly to the owner and appears on the personal income tax statement. That pass-through treatment is the standard fiscal consequence of sole proprietorship.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — There is no mandatory minimum share capital before a sole trader may begin. Confusing sole proprietorship with company capital rules, or reading ''no requirement'' as ''owners never contribute savings,'' misstates how start-up funding works in practice.

Sole proprietorships are characterised by the absence of a mandatory minimum share capital. Share capital rules belong to company formation. A sole trader may begin with little or no equity cushion; there is no statutory substantial minimum share capital gate before trading may start.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Limited liability would wall off private assets such as a home from business creditors once business assets are exhausted. Sole proprietors do not enjoy that wall. Under unlimited liability, personal property remains reachable when business resources cannot cover debts. The statement attributes the wrong liability regime to the form.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — A sole proprietorship has exactly one owner. Two people who want to share tasks and risk on an equal footing need a multi-owner form—typically a partnership, or a company with shared shareholdings. Choosing sole proprietorship would force one of them into a non-owner role and would not match equal shared ownership.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Retirement removes the person in whom ownership and management are united. Nothing in the sole-proprietorship form automatically keeps the repair workshop running unchanged without a sale, gift, inheritance arrangement, or other transfer of the business. Without such a plan, continuity breaks rather than continuing by default.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Continuity risk is the flip side of single-person control. When the workshop owner plans to retire or faces long-term illness, customers, licences, supplier relationships, and know-how are tied to that individual unless actively transferred. That dependence is why retirement and prolonged illness can threaten ongoing operations.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Single-person ownership does not make succession simpler in any automatic sense. Transferable shares in a company can pass ownership without dismantling the legal person; a sole proprietorship has no such built-in share mechanism. Succession often requires finding a buyer or heir and transferring the business personally, which can be harder—not always simpler—than share transfer. The claim that succession is always simpler is therefore false.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Staff do not legally become owners merely because the proprietor retires. Ownership changes only through an explicit transfer. Without that transfer, employees remain employees; they cannot “assume ownership without transfer.” Retirement therefore can disrupt continuity rather than leaving it unaffected.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Until a transfer occurs, management still centres on the sole proprietor. Key decision rights—strategy, major spending, and risk-taking—remain with that person. Dependence of management on the owner is exactly why continuity planning matters in this form.

In the repair-workshop setting, continuity and decision authority still centre on the sole proprietor until a deliberate transfer is made.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Unlimited liability means the proprietor stands behind every business debt and obligation. There is no corporate veil capping exposure at capital contributed. If the firm cannot pay suppliers, lenders, or other creditors, the owner''s personal responsibility remains for the unpaid balance.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Unlimited liability is not limited to short-term trade credit. Long-term bank loans—even when secured by property—are still obligations of the sole proprietor. Collateral gives the lender a preferred claim on the pledged asset; it does not redefine the loan as outside unlimited liability or erase personal exposure for any shortfall.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Especially for longer-term lending, creditors reduce their risk by asking for collateral: assets that can be seized or sold if the borrower defaults. Land, buildings, or other pledgeable property commonly serve that role. Requiring collateral is a normal credit practice and does not contradict unlimited liability; it layers security on top of the personal obligation.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

When the business fails and debts remain after business assets are used, private assets are also at stake. That is the practical meaning of unlimited liability for a failing sole proprietorship: the owner''s non-business wealth is not automatically shielded by a separate legal person.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Pledging collateral secures the lender''s claim on the pledged asset, but it does not fully exempt all remaining private assets from further claims. If the collateral sale does not cover the debt, or if other unsecured creditors remain unpaid, unlimited liability can still reach other personal property. Collateral is security, not a complete waiver of further personal exposure.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Because the sole proprietorship is not a legal entity separate from the owner, there is no corporate taxpayer for the trading profit. The fiscal channel is the owner''s personal income tax statement: business profit is computed and then reported there as the proprietor''s income.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Unincorporated status changes how tax is reported, not whether profit is taxable. Operating as a sole proprietorship does not create an income-tax exemption for business earnings. The owner remains liable to income tax on those profits.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

The owner is taxed on profits earned from the business through personal income taxation rather than through a separate corporate tax return filed by a company. That follows directly from the absence of a distinct corporate legal person.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — On a personal tax assessment, business profit can sit alongside wages, interest, or other personal income belonging to the same individual. The assessment aggregates the proprietor''s taxable amounts; it does not require a firewall that keeps business profit on a corporate return.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — The opposite is true: personal taxation of sole-trader profits is possible precisely because there is no separate legal personality. Separate personality would typically point toward corporate taxation of company profits, with distributions treated differently. Requiring separate personality before personal taxation reverses the logic.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — By definition a sole proprietorship has one owner who also manages day-to-day operations. There are no partners sharing ownership rights. Ownership and management therefore combine in a single individual, which is the core organisational feature of this business form.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit. That low formal barrier is why the form is described as easy to establish for small businesses — even though owners often still inject personal savings voluntarily.

Starting a sole proprietorship does not require depositing minimum share capital of the kind associated with company formation. That low formal finance barrier is why the form is described as easy to establish, especially for small businesses that need to begin trading quickly.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Without separate legal personality, the firm is not a distinct taxpayer. Profit is attributed to the owner and taxed on the personal income statement. Legal status and tax treatment are linked: no corporate person means personal assessment of business profit.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Unlimited liability extends creditor reach beyond business-book assets. If debts cannot be met from trading resources, the proprietor''s private assets are also at stake. That personal exposure is the risk counterpart to undivided control.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Hiring does not change the ownership form. The proprietor may recruit personnel for support while still making the key management decisions and bearing the residual risk. Staff add capacity; they do not replace the owner''s central authority.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

A corporation, as a legal person, can sue and be sued in its own name. A sole proprietorship lacks that separate personality, so legal actions connect to the owner personally rather than to an independent company entity. That is a central distinction between unincorporated and incorporated status.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Profits of the sole proprietorship are reported on the owner''s personal income tax statement because there is no separate corporate tax identity. Pass-through taxation follows from unincorporated legal status.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Under unlimited liability, unpaid business debts can lead creditors to pursue private assets. The absence of a limited-liability shield is exactly how sole-trader creditor protection differs from that of shareholders in a limited company.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — With no mandatory capital requirement at start-up, sole proprietorships remain accessible for small businesses that cannot or prefer not to raise statutory share capital before trading.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Continuity is tied to one person''s capacity to own and manage. Retirement or long-term illness removes that centre of control. Without a planned transfer, sale, or covering arrangement, customers, contracts, and decisions can stall — staff do not automatically become owners.

Because management and ownership centre on one person, long-term illness or retirement can interrupt continuity. There is no automatic share-transfer mechanism keeping an unchanged legal person in place; succession must be arranged deliberately.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

A freelance designer operating alone as a sole proprietor has no co-owners whose consent is required. Management decisions can be taken without consulting other owners because there are no other owners. Occasional administrative help does not create co-ownership rights.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Even with contracted administrative help, residual decision-making and risk stay with the designer-proprietor. Important management choices and unlimited liability are not transferred to contractors. Taking all the risk is part of sole-trader ownership.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

There is no separate board of directors in a sole proprietorship. Management depends on the proprietor personally rather than on a corporate governance layer. That concentration of control matches the form used by the freelance designer in the stem.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

Delegating bookkeeping or scheduling does not surrender strategic authority. The proprietor still decides product focus, pricing, major commitments, and whether to expand. Delegation of tasks is not delegation of ultimate management control.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Hiring or contracting personnel does not hand strategic direction to employees. Staff execute assigned work; the sole proprietor retains authority over the firm''s direction. The statement reverses the control relationship.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit. That low formal barrier is why the form is described as easy to establish for small businesses — even though owners often still inject personal savings voluntarily.

Ease of establishment comes from the absence of financial requirements such as minimum share capital before trading may begin. That feature makes sole proprietorship attractive for small start-ups that need a simple legal path into the market.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — A sole proprietorship concentrates ownership and day-to-day control in a single natural person. That person owns the trading assets, makes the operating decisions, and bears the residual risk. There is no co-owner layer and no separate company person standing between the proprietor and the business.

One person owns and manages the firm and therefore bears central operational responsibility. That unity of ownership and control is the organisational reason the form is simple at launch yet personally demanding in day-to-day running.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Continuity is tied to one person''s capacity to own and manage. Retirement or long-term illness removes that centre of control. Without a planned transfer, sale, or covering arrangement, customers, contracts, and decisions can stall — staff do not automatically become owners.

Stepping away through retirement or prolonged illness removes the person on whom operations depend. Continuity may be interrupted unless a transfer or covering arrangement is in place—hence the succession challenge over time.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — When personal funds are not enough, the sole proprietor can seek extra money from investors and/or banks. Those injections are external finance sources; they expand funding capacity without changing the fact that the owner still carries unlimited liability for resulting obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Because the firm is not a legal entity of its own, profits are taxed on the owner''s personal income tax statement. Fiscal treatment follows the unincorporated legal structure from the start.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

A trading name is a label used in commerce. Listing or registering it does not transform the sole proprietorship into a corporation or create separate legal personality. Incorporation requires forming a company; a name alone does not do that.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Hiring is allowed. Assistants can handle routine work, but key management decisions and residual risk stay with the proprietor. Employment expands capacity; it does not transfer ownership or unlimited liability to staff.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Tax registration and hiring employees are ordinary operating steps. Neither step incorporates the business. The firm remains an unincorporated sole proprietorship even with a registered tax identity and multiple staff.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Personal income tax on business profits follows from the absence of a separate legal entity. The proprietor pays tax on those profits personally rather than through a corporate tax return of a company.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Whether credit is short-term (for example trade credit or an overdraft) or long-term (for example a mortgage-backed loan), the amounts owed are liabilities of the sole proprietor. Duration changes maturity, not the fact of obligation.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Collateral is security requested by external creditors, especially for longer-term lending. Internal sources such as retained profit do not involve a creditor who demands collateral—the funds already belong to the business/owner. Saying collateral applies only to internal finance reverses the usual pattern.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Sole proprietorship fits a single owner who both manages the business and accepts the associated unlimited-liability risk. That one-person match is when the form is appropriate.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Two equal co-owners cannot both be sole proprietors of the same business. Dividing management rights between two owners requires a multi-owner structure such as a partnership (with an agreement), not sole proprietorship rules.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited liability through transferable shares is a corporate feature. Several investors seeking that package need an incorporated company, not a sole proprietorship, which has one owner and unlimited liability.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Two persons who want to share tasks and risk with equal rights align with partnership: joint ownership, shared responsibilities, and typically a partnership agreement covering profit division and decision rules.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Sole proprietorship rules do not provide equal shared ownership for two founders. Relying on them instead of partnership leaves no legal basis for equal co-ownership. Partnerships remain necessary when equal shared ownership is the goal.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

When the business lacks separate legal personality, trading profit has no corporate pocket to stay in for tax. It flows directly onto the owner''s personal income tax statement as the proprietor''s income.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — The owner pays tax on profits earned from the business precisely because the firm is not a separate legal entity. Personal taxation is the fiscal counterpart of unincorporated status.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Pass-through personal taxation does not create a corporate tax entity and does not exempt profits from tax. Dividends are a corporate distribution concept; sole traders do not need to issue dividends before personal tax is due on business profit.

Dividends are a corporate distribution concept. Personal income tax treatment of sole-trader profit does not require issuing dividends to the owner before tax is due. Profit is assessed as personal income without that corporate step.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Operating without corporate personality changes the filing channel, not the existence of tax. The proprietor remains taxable on business profits; lack of incorporation is not an exemption.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — A separate corporate tax return presupposes a corporation. Sole proprietorships report through personal income taxation. Requiring a corporate return regardless of legal status contradicts the unincorporated nature of the form.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is deferred payment under a supplier agreement, not a grant. The amounts must be repaid within the agreed period. Saying trade credit never requires repayment misrepresents supplier credit as free money.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

When a supplier allows deferred payment, the sole trader records a short-term payable until settlement. That payable is a liability the proprietor must honour under the credit terms.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Securing a long-term bank loan with land gives the bank collateral rights over that property; it does not exclude the loan from unlimited liability or protect the owner completely. If collateral proceeds do not cover the debt, or other debts remain, personal exposure can continue. Collateral reduces lender risk; it does not erase the proprietor''s unlimited liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

If the business fails and debts exceed available business funds, private assets are also at stake. That personal reach is how unlimited liability operates across the mix of trade credit, overdraft, and long-term loan in the stem.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Short-term instruments and long-term loans alike create obligations of the sole proprietor. Using several credit types at once multiplies payables; it does not move any of them outside the owner''s responsibility.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

Registering a commercial trading name does not automatically create separate corporate legal personality. Name registration and incorporation are different acts. The business remains a sole proprietorship unless a company is actually formed.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Equal management shares for two friends require shared ownership. A sole proprietorship admits only one owner, so partnership (or another multi-owner form) is the suitable choice—not sole proprietorship.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Without separate legal personality, business profits are assessed as the proprietor''s personal income. That tax treatment is the consistent fiscal consequence of the unincorporated form.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

A business bank account organises payments; it does not incorporate the firm or grant limited liability. Incorporated limited liability requires forming a limited company, not merely opening an account.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Employment does not shift unlimited liability onto workers, hand them strategic control, or incorporate the firm. Headcount is not an incorporation trigger and wages do not allocate owner liability.

Hiring employees expands labour capacity. It does not automatically convert the sole proprietorship into a limited liability company. Legal form changes only through formal incorporation, not through headcount.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — There is no mandatory minimum share capital before a sole trader may begin. Confusing sole proprietorship with company capital rules, or reading ''no requirement'' as ''owners never contribute savings,'' misstates how start-up funding works in practice.

There is no mandatory minimum share capital deposit before a sole proprietorship may start trading. Minimum capital rules belong to company formation. Sole traders can commence without that corporate capital gate.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — A sole proprietorship is not a separate legal person. Features that belong to corporations — independent corporate personality, corporate tax filing, or limited liability by default — do not arise merely because a trading name is registered, a bank account is opened, or staff are hired.

A sole proprietorship is not a separate legal person and does not file corporate income tax independently of the owner. Profits are taxed through personal income taxation.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited liability does not protect a sole proprietor. When business debts exceed assets held in the business name, unlimited liability can extend claims to private assets. The statement assigns the wrong liability regime.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

The owner pays tax on profits earned from the business through personal income taxation. That is the standard fiscal treatment for this unincorporated form.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Corporate income tax on a separate return is for corporations. Sole proprietorship profits are not assessed that way; they enter the owner''s personal tax affairs. The statement invents a corporate filing obligation that the form does not have.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A sole proprietorship concentrates ownership and day-to-day control in a single natural person. That person owns the trading assets, makes the operating decisions, and bears the residual risk. There is no co-owner layer and no separate company person standing between the proprietor and the business.

With no co-owners, decision rights are undivided. The proprietor can act without a partners'' vote or board resolution. Advice may be taken, but consultation is not a structural requirement of the form.

The integrated profile begins with unity of ownership and management: one person owns, manages, and runs the business and keeps the most important decision authority. That single-person core defines the form.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Legal personality means a firm can hold rights and duties in its own name as a distinct person in law. A sole proprietorship does not have that status: contracts, assets, and liabilities attach to the owner personally. Unincorporated status is therefore the correct description.

Because there is no separate corporate taxpayer, trading profit is attributed to the proprietor. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is declared on the owner''s personal income tax statement rather than on a stand-alone corporate return.

Without separate legal personality, business profits are assessed on the owner''s personal income tax statement. Legal status and tax channel move together.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit. That low formal barrier is why the form is described as easy to establish for small businesses — even though owners often still inject personal savings voluntarily.

No minimum capital requirement applies when establishing a sole proprietorship for a small business, which is why the form is accessible at start-up.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Unlimited liability means private assets are also at stake if business debts must be repaid beyond what business resources can cover. Personal wealth backs residual obligations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Continuity is tied to one person''s capacity to own and manage. Retirement or long-term illness removes that centre of control. Without a planned transfer, sale, or covering arrangement, customers, contracts, and decisions can stall — staff do not automatically become owners.

Continuity problems may occur when the sole proprietor retires or suffers long-term illness, because operations depend on that one person''s capacity to own and manage.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Retained profit is surplus earned by the business and kept in the firm rather than withdrawn. Reinvesting that surplus funds expansion from inside the operating cycle, so it is classified as an internal source of finance.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — The owner''s initial investment from personal savings comes from outside the business''s own trading surplus. In the sources-of-finance framework used here, that owner capital injection is classified as external finance—even though the money comes from the same natural person—because it is not generated internally by retained operations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Retained earnings and sale of unused assets arise from the business itself: profit kept after trading, or cash released by disposing of assets already owned. Those are internal sources, not external ones. Saying they originate outside the business reverses the classification.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Bank credit is money provided by an outside creditor and must be repaid with interest according to the loan terms. Depositing the borrowed cash in the business bank account does not convert it into internal finance; the source remains external debt.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Internal sources such as retained profit do not create a creditor relationship, so they avoid interest and similar financial charges that lenders attach to borrowed funds. That cost advantage is a main reason internal finance is attractive when it is available.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — A bank overdraft is arranged on a business current account. Once that account exists, the bank may allow the balance to go negative up to an agreed limit, giving flexible short-term credit for temporary cash gaps. Flexibility comes from drawing only what is needed, when it is needed, within the facility.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Trade credit is a supplier agreement allowing deferred payment for purchases. It creates a short-term external liability until settlement. Deferral changes cash timing; it is not a grant and not internal finance.

Trade credit is a supplier agreement that postpones payment for goods already delivered or invoiced. The business receives materials or stock now and settles within the agreed credit period. Deferral is contractual timing, not cancellation of the purchase price.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Overdraft interest is charged on the overdrawn amount during periods when the account is below zero (or beyond any interest-free buffer). When the balance is positive and the facility is unused, that overdraft interest does not accrue on a healthy credit balance. Cost follows actual use of the credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Long-term bank loans are frequently secured by mortgages over land and property. The pledged asset serves as collateral: if the borrower defaults, the lender can enforce against that property. Collateral does not remove the debt; it backs repayment over a multi-year horizon.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Trade credit must be repaid within the agreed period. It is typically short-term purchase-cycle finance, not long-term debt, and it does not erase the proprietor''s liability or the need to manage cash-flow timing.

Trade credit is short-term finance tied to purchase cycles—typically days or weeks, not years. Deferring payment does not reclassify supplier credit as long-term debt finance. Long-term debt usually covers facilities lasting beyond a year, such as term loans or mortgages.

Equity finance creates ownership claims (share capital, retained earnings); debt finance creates repayment obligations (overdrafts, trade credit, loans, bonds). Internal versus external further asks whether funds came from inside surplus or from outside providers.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In the sources-of-finance framework used here, money the owner injects from personal savings at start-up is treated as an external source: it comes from outside the business''s own retained trading surplus. Most sole proprietors begin that way, funding launch costs from personal wealth before operations generate internal funds.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Because funding capacity largely tracks the proprietor''s personal resources at launch, a lack of financial funds makes establishment very difficult. Easy legal entry does not invent capital; without savings or access to outside finance, paying start-up costs remains hard.

Funding capacity for a sole proprietorship tracks what the owner can supply or attract. Personal financial capacity therefore shapes how much finance is available at start-up and in early expansion — legal ease of entry does not invent capital by itself.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Internal finance is generated by the business itself—retained profit or sale of assets already owned after trading has begun. Personal savings invested at start-up are not earlier business profits; they precede operations. Classifying them as internal because they later sit in the business account confuses source with deposit location.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — There is no mandatory minimum share capital before a sole trader may begin. Confusing sole proprietorship with company capital rules, or reading ''no requirement'' as ''owners never contribute savings,'' misstates how start-up funding works in practice.

“No financial requirements” means no mandatory minimum capital rule, not that owners never put money in. Most sole traders voluntarily contribute personal capital to buy stock, equipment, and working cash. Absence of a legal minimum does not imply zero owner contribution in practice.

No mandatory minimum capital means the law does not force a deposit before trading — it does not mean owners contribute nothing. In practice most sole traders still inject personal savings voluntarily despite the zero entry gate. The useful contrast is ‘no legal minimum’ versus ‘no owner funding at all,’ which are not the same claim.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Funds available to the business depend heavily on what the sole proprietor can supply or attract. Personal financial capability therefore has a direct bearing on start-up and early funding. Claiming it has no bearing contradicts how sole-trader finance usually works.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Retained profit and asset disposals are internal, not external. They originate from the firm''s own surplus or owned assets — not from an outside investor or lender — even though the cash ends up in the business bank account.

Selling assets the business no longer needs releases cash from resources already inside the firm. That is internal finance. Creditors are not providing the money; the business is monetising its own surplus assets. Labelling asset sales as external creditor finance misstates the source.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Legal identity of owner and business does not decide the internal/external finance label. Owner savings injected into the firm are classified as external finance in this framework because they are not generated by retained operations. Sameness of legal person does not convert owner capital into internal finance.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

When profit is kept in the firm and reinvested instead of withdrawn, the funding comes from the business''s own surplus. That retained profit is the textbook internal source once the sole proprietorship is operating and generating revenue.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Depositing borrowed or invested cash in the business account only records receipt. Owner start-up savings, investor funds, and bank credit remain external sources — they are not internal finance generated by operations.

Investor funds and bank loans originate outside the firm and create claims by outsiders. Depositing the cash in the business account only records receipt; it does not turn external capital or debt into internal finance.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Internal sources are valued partly because they avoid interest charges payable to external lenders. The proprietor is not treated as a market lender who must be paid interest on retained profit. Requiring market interest to the owner as if internal funds were a loan invents a cost the classification exists to avoid.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In this chapter''s sources-of-finance framework, money injected from outside retained trading surplus is external: owner savings at start-up, investor capital, and bank or other creditor funds. Legal sameness of owner and firm does not re-label owner capital as internal.

Owner investment, investor capital, and creditor loans all come from outside the firm''s retained operating surplus, so they are external sources. Together they expand what the sole proprietor can fund beyond internal generation alone.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

Once operations produce surplus, retained profit kept in the business and cash from selling unneeded assets are internal sources. They recycle resources already earned or owned inside the firm.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Every credit facility—overdraft, trade credit, term loan, mortgage—creates an amount owed. For the sole proprietor those amounts are personal liabilities regardless of whether maturity is short or long.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Profit exists when revenues exceed expenses. The proprietor then chooses: withdraw the surplus for personal use, or retain and reinvest it in the business. Retention is possible only if withdrawal does not take the funds out.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Unlimited liability is a property of the ownership form, not of the finance label. Whether expansion is funded from retained profit or from bank loans, the proprietor remains personally exposed to business debts. Internal finance does not create a limited-liability shield.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Unlike many company forms, a sole proprietorship can start without a mandatory minimum share-capital deposit. That low formal barrier is why the form is described as easy to establish for small businesses — even though owners often still inject personal savings voluntarily.

Low entry barriers mean no mandatory financial requirements must be met before starting as a sole trader. That legal simplicity lets small ventures begin without first raising statutory share capital.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In practice most sole proprietors still invest their own savings at launch to cover stock, tools, and early expenses. Easy legal entry and voluntary owner funding commonly appear together.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — When personal funds fall short, the proprietor can seek extra money from investors and/or banks. Those routes add external finance capacity after or alongside owner savings.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Internal finance comes from resources already inside the firm: profit kept rather than withdrawn, or cash released by selling assets the business no longer needs. No new creditor is created for that funding slice, so interest charges attached to borrowing are avoided.

After trading begins, retained profit can supplement external borrowing. The finance mix then combines internal surplus with outside credit rather than relying on only one channel.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Long-term lenders typically ask for pledgeable assets as collateral to secure repayment over multi-year horizons. Requiring collateral is a standard condition when extending long-term credit to sole proprietors.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.1.25' AND tier = 'full';
