-- Update expanded explanations for 4.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Joint founding by two or more persons defines a partnership.

Applied carefully, "If two or more persons jointly found a business, that business is called a partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The partnership agreement records ownership, profit division, rights, and responsibilities.

Applied carefully, "Partners need to set up a partnership agreement to settle rights, responsibilities, and the division of profits and losses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal rights, liabilities, and responsibilities characterise the general partnership.

Applied carefully, "In a general partnership all partners have equal rights, liabilities, and responsibilities" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability means each partner may be held responsible for the entire debt.

Applied carefully, "Each of the partners is solely liable for all debts of the business under unlimited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partners may divide labour and specialise while remaining jointly responsible.

Applied carefully, "Partners can share the tasks and specialise in different areas of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One person operating alone creates a sole proprietorship, not a partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The non-managing limited partner''s liability stops at the contributed capital amount.

Applied carefully, "A limited partner who is not involved in management has liability limited to the amount of money contributed to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Active management disqualifies a partner from limited liability capped at contribution.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited partners are a feature of limited partnerships, not a requirement for general partnerships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'More owners do not by themselves incorporate the firm or cap partner liability.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A limited partnership requires at least one partner outside day-to-day management.

Applied carefully, "In a limited partnership there is at least one partner who is not involved in the management of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple partners can pool savings and raise more funds than one proprietor alone.

Applied carefully, "Two or more partners should possibly be able to invest more savings and raise more financial funds than a sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined private assets from several partners can strengthen loan collateral.

Applied carefully, "Partners together may offer more private assets as collateral when applying for a business loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership financial arrangements broadly resemble those of sole proprietors.

Applied carefully, "The financial aspects of partnerships are in general similar to those of sole proprietors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership shares and profit-loss division are documented in the partnership agreement.

Applied carefully, "The partnership agreement specifies each partner''s percentage of ownership and the division of profit and loss" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trust between founders does not replace the need for a partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnership requires joint founding by two or more owners, not hired managers alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dividing duties does not eliminate joint unlimited liability among general partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ownership share does not cap liability for general partners under unlimited liability rules.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Decision-making rules and dispute resolution belong in the partnership agreement.

Applied carefully, "Decision making and resolving disputes are among the details partners record in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status does not make every limited partner fully liable for all debts.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shared discussion in difficult situations can improve partnership decision quality.

Applied carefully, "In difficult situations partners can exchange ideas and perhaps make better decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing general partners still face unlimited liability for partnership obligations.

Applied carefully, "Managing partners in a limited partnership remain subject to unlimited liability for all firm debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership percentages do not limit unlimited liability for general partners.

Applied carefully, "Recording unequal ownership percentages in the agreement does not by itself cap each general partner''s liability at that share of debt" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Liability is not restricted to ownership percentage for general partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Specialisation does not limit a general partner''s exposure to firm-wide debts.

Applied carefully, "Specialising in one function does not release a general partner from unlimited liability for debts arising elsewhere in the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'General managing partners still face unlimited liability within a limited partnership.

Applied carefully, "Limited partnership status does not remove unlimited liability from partners who manage the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership is not an incorporated form that grants limited liability by default.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Profit share and legal liability are distinct; unlimited liability is not split strictly by profit share.

Applied carefully, "Profit-sharing proportions stated in the agreement do not automatically divide each partner''s legal liability in the same proportions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Creditors can seek full repayment from any partner when unlimited liability applies.

Applied carefully, "Creditors under unlimited liability may pursue any one general partner for the full outstanding debt of the partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership terms and further operational details can be included in the agreement.

Applied carefully, "Terms of the partnership and other operational details may appear alongside profit division in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal management involvement and shared risk align with a general partnership choice.

Applied carefully, "Partners who intend to be equally involved in management and share financial risk often choose a general partnership structure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partner rights and responsibilities are recorded in the partnership agreement.

Applied carefully, "Rights and responsibilities of each partner are among the matters settled in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Informal oral promises do not replace the need for a partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Enforcement is not restricted to collecting equal fractions from every partner at once.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A sole owner with employees remains a sole proprietorship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Legal liability is not automatically split strictly by profit share among general partners.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Equal responsibilities coexist with divided and specialised duties.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Different specialised roles are compatible with equal partnership rights.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Combined personal resources from partners can strengthen collateral for borrowing.

Applied carefully, "Offering more private assets as collateral is plausible when several partners combine their personal resources" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Non-managing capital contributors face liability capped at their contribution.

Applied carefully, "A silent capital contributor who does not manage the firm has liability limited to the money contributed in a limited partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both partnership types require joint founding by two or more persons.

Applied carefully, "Joint founding by two or more persons remains necessary before general or limited partnership rules apply" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal management rights may continue even when ownership percentages differ in the agreement.

Applied carefully, "Equal rights in a general partnership can coexist with unequal ownership percentages recorded in the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Decision making and dispute resolution are partnership agreement provisions.

Applied carefully, "The partnership agreement should address decision-making procedures together with methods for resolving disputes between partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership percentages are explicitly documented for each partner in the agreement.

Applied carefully, "Each partner''s percentage of ownership is among the details settled when partners set up the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Creditors may look to partners'' private assets when business assets are insufficient.

Applied carefully, "Unlimited liability means private assets of partners may be reached if business assets cannot cover unpaid debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Liability rules do not replace the partnership agreement for governance and profit sharing.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Joint founding with equal management involvement fits a general partnership structure.

Applied carefully, "Two consultants who jointly found a firm and intend equal management involvement are describing a general partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited partners stay outside management; general partners run the firm.

Applied carefully, "Limited partners are not involved in the management of the business while general partners manage operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined savings from partners can exceed one proprietor''s investment capacity.

Applied carefully, "Pooling partner savings can increase total investable funds available to the business compared with a single owner" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Managing general partners still face unlimited liability in a limited partnership.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Multiple partners often offer more collateral together than a single proprietor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnerships and sole proprietors handle personal savings investment in broadly similar ways.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited liability capped at contribution applies only to non-managing limited partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited partnerships combine unlimited liability for managers with capped liability for non-managers.

Applied carefully, "A limited partnership may include both managing partners with unlimited liability and a non-managing partner with capped liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A general partnership can record unequal ownership shares without becoming a limited partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Collective discussion can improve decisions during difficult business situations.

Applied carefully, "Exchanging ideas in difficult situations may help partners reach better decisions than isolated decision makers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-managing limited partners stay outside daily operations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private assets can serve as collateral despite unlimited liability exposure.

Applied carefully, "Partners may pledge private assets as loan collateral even though each general partner faces unlimited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Oral understandings do not replace the required partnership agreement.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trust does not remove the need to document profit-loss division in the agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Governance and dispute rules are partnership agreement topics.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Two or more partners typically pledge more combined collateral than one proprietor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dispute resolution procedures belong in the partnership agreement.

Applied carefully, "Resolving disputes between partners is a matter partners may address within the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners remain personally liable for all debts despite limited partnership status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Management participation removes capped liability for a would-be limited partner.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Internal recovery between partners may arise after one partner satisfies a creditor.

Applied carefully, "A partner who paid the full debt to a creditor may still have internal recovery claims against co-partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Two founders still require a partnership agreement to settle their arrangement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Daily management removes capped liability for a limited partner.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Joint founding by two or more persons defines a partnership.

Applied carefully, "Two or more persons who jointly found a business create what is economically termed a partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The agreement documents rights, responsibilities, and profit-loss division jointly.

Applied carefully, "Rights, responsibilities, and profit-loss division are recorded together in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Decision making and dispute resolution are standard agreement provisions.

Applied carefully, "Partners specify decision-making procedures and methods for resolving disputes within the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Not selling public shares does not prevent partnerships from combining partner resources.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'General partnerships suit equal management involvement; limited partnerships require non-managing limited partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'General partners remain liable for all firm debts regardless of specialisation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership terms and further operational details can be included in the agreement.

Applied carefully, "Terms of the partnership and other operational details may also appear in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unequal ownership shares do not cap liability for all partners.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Managers in a limited partnership carry unlimited liability for firm obligations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ownership percentages do not limit each general partner''s liability for the full debt.

Applied carefully, "Each general partner remains solely liable for all debts even when the partnership agreement assigns unequal ownership percentages" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Additional partners can strengthen rather than automatically destroy creditworthiness.

Applied carefully, "More combined savings and collateral can make partnership borrowing plausible compared with sole trading" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited partnerships require managing partners alongside non-managing limited partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Non-managing limited partners face liability capped at their contribution.

Applied carefully, "The limited partner''s liability is limited to the amount of money that he or she has contributed to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit sharing does not give every limited partner unlimited liability.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Two or more joint founders define a partnership.

Applied carefully, "Joint founding by two or more persons is the defining condition for recognising a partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Founders need an agreement to settle rights, responsibilities, and profit-loss division.

Applied carefully, "Partners must set up a partnership agreement to settle rights, responsibilities, and profit-loss division" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Private property can be offered as collateral even when partners face unlimited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multiple partners can invest more savings together than a sole proprietor acting alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Unlimited liability and pooled investment operate together.

Applied carefully, "Partners remain fully liable for partnership debts even while they pool personal savings to invest in the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability exposes each general partner to the full debt.

Applied carefully, "Each partner is solely liable for all debts of the business under unlimited liability rules in a general partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Minority ownership does not automatically eliminate equal management rights in a general partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unlimited liability extends to debts created by other partners, not only self-created obligations.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Ownership share does not restrict creditor claims to a proportional amount from each partner.

Applied carefully, "Creditors may demand full repayment from one partner even if other partners hold greater ownership shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Recovery is not restricted to proportional shares after business assets are exhausted.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Default partnership rules expose general partners'' private assets through unlimited liability.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Observing or participating in management can remove limited partner protection.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status does not impose unlimited liability on non-managing limited partners.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Additional operational details may be documented in the partnership agreement.

Applied carefully, "Other details of the partnership beyond profit division may also appear in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Verbal profit promises do not replace the partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietors and general partners both bear unlimited liability.

Applied carefully, "A sole proprietor and each general partner both face unlimited liability for business debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined savings and collateral from partners can exceed sole proprietorship capacity.

Applied carefully, "Two or more partners may possibly raise more financial funds and offer more collateral than a sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited partnerships include a non-managing partner whose liability is capped at contribution.

Applied carefully, "A limited partnership requires at least one partner who is not involved in management with liability capped at contribution" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Joint founding by two or more persons defines the partnership.

Applied carefully, "Two or more persons jointly found the business to create a partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement settles governance and financial division among founders.

Applied carefully, "Partners set up a partnership agreement settling rights, responsibilities, and profit-loss division" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Task sharing, specialisation, and joint discussion are partnership features.

Applied carefully, "Partners share tasks, may specialise, and can exchange ideas to improve difficult decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Decision making, disputes, and ownership shares belong in the agreement.

Applied carefully, "The partnership agreement specifies decision making, dispute resolution, and each partner''s ownership percentage" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Silent participation without limited partnership structure still leaves general partners with unlimited liability.

Applied carefully, "A general partner who stays silent at meetings still faces unlimited liability for all firm debts in a general partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partners may specialise in finance and sales while retaining equal overall responsibilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Non-managing limited partners have liability capped at contributed capital.

Applied carefully, "A limited partner excluded from management has liability limited to the capital contributed to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership finance broadly matches sole proprietorship finance and permits pooled resources.

Applied carefully, "Financial aspects of partnerships are in general similar to those of sole proprietors while still allowing pooled resources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined partner savings can exceed one proprietor''s resources.

Applied carefully, "Several partners may invest more combined savings than a lone sole proprietor can provide alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Pooled collateral strengthens credit applications for partnerships.

Applied carefully, "More private assets offered as collateral can make partnership borrowing plausible relative to sole trading" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Task specialisation does not automatically cap a general partner''s liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Silent partner capital does not remove unlimited liability from managing partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Creditors can seek the full debt from any one partner under unlimited liability.

Applied carefully, "Under unlimited liability any one partner may be pursued by a creditor for the full outstanding debt of the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'General managing partners remain personally liable for all debts beyond contributed capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership funding differs from corporation share issues on public markets.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Pooled private assets strengthen loan collateral for partnerships.

Applied carefully, "Partners together may offer more private assets as collateral when jointly applying for a loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing general partners still face unlimited liability alongside any limited partner.

Applied carefully, "General partners remain liable for all debts even when a limited partner also contributes capital without managing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-managing capital providers face liability capped at their contribution.

Applied carefully, "The capital provider who does not manage the business has liability limited to the money contributed in a limited partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Terms, decision making, and dispute resolution belong in the agreement.

Applied carefully, "Partnership terms, decision making, and resolving disputes may all be included in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated limited partnerships still impose unlimited liability on managing partners.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Partnership requires joint ownership by two or more partners, not hired managers alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnership formation does not demand immediate daily management by every founder.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The agreement does not incorporate the firm or create corporate legal personality.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Managing partners carry unlimited liability for firm obligations in a limited partnership.

Applied carefully, "Managing partners in a limited partnership structure remain subject to unlimited liability for all partnership debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.25' AND tier = 'full';
