-- Update expanded explanations for 4.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnerships are not incorporated forms granting limited liability to all partners.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unequal ownership shares do not cap unlimited liability for general partners.

Applied carefully, "Each partner remains solely liable for all debts under unlimited liability despite unequal ownership shares in the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A partner who manages cannot retain liability limited only to contributed capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Specialisation is compatible with equal overall responsibilities in a general partnership.

Applied carefully, "Partners may share tasks and specialise while equal responsibilities continue to apply in management" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Governance clauses do not remove unlimited liability from managing partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Specialisation does not reduce a general partner''s unlimited liability exposure.

Applied carefully, "General partners may share tasks and specialise while retaining unlimited liability for all business debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A partner involved in management faces unlimited liability rather than capped contribution liability.

Applied carefully, "A limited partner who takes an active role in daily management faces unlimited liability for all partnership obligations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership shares and governance procedures are recorded in the partnership agreement.

Applied carefully, "A partnership agreement may specify ownership percentages together with decision-making and dispute-resolution procedures" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Default general partnership rules impose unlimited rather than limited liability.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Simply staying silent does not cap liability unless limited partnership rules apply.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The agreement formalises rights but does not replace joint founding by two or more persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Specialised role assignment does not eliminate joint liability among general partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Specialisation is permitted alongside equal partnership responsibilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partner rights and responsibilities are settled in the agreement.

Applied carefully, "Rights and responsibilities of partners must be settled through the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Refraining from management preserves capped liability, not unlimited liability.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Founders need an agreement to settle rights, responsibilities, and profit-loss division.

Applied carefully, "Partners who jointly found a business need a partnership agreement to formalise their arrangement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Several partners can pool savings and raise more funds than a lone proprietor.

Applied carefully, "Two partners may possibly invest more savings and raise more financial funds than one sole proprietor alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership finance broadly resembles sole proprietorship finance.

Applied carefully, "Partnership financial arrangements are in general similar to the financial aspects faced by sole proprietors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined partner assets typically improve collateral for loan applications.

Applied carefully, "Pooling private assets from several partners can strengthen collateral offered when applying for credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Personal savings can be invested similarly in partnerships and sole proprietorships.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Joint discussion in difficult situations can improve decision quality among partners.

Applied carefully, "Partners can exchange ideas in difficult situations and may thereby make better decisions than isolated managers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability does not prevent offering more combined collateral than a sole trader.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlimited liability applies individually to each general partner.

Applied carefully, "Each partner in a general partnership is solely liable for all debts of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Rights, responsibilities, and profit-loss division are core agreement matters.

Applied carefully, "A partnership agreement settles rights and responsibilities as well as the division of profits and losses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A single owner with employees is not a partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Founders still need an agreement to settle rights and profit division in a limited partnership.

Applied carefully, "Partners still set up a partnership agreement settling rights, responsibilities, and profit-loss division in a limited partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability applies to each partner regardless of pooled collateral.

Applied carefully, "Each partner is solely liable for all debts even when the partnership pools more collateral than one owner could" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited partners may supply capital without managing while liability stays capped at contribution.

Applied carefully, "Limited partners who avoid management still contribute capital that may help the partnership raise funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dispute resolution belongs in the partnership agreement.

Applied carefully, "Resolving disputes between partners is among the matters partners address in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership shares and profit-loss division are agreement topics.

Applied carefully, "A partnership agreement records each partner''s percentage of ownership alongside profit-loss division" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership terms and decision making belong in the agreement.

Applied carefully, "Terms of the partnership and decision-making procedures may also be documented in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'General partners face unlimited liability for all business debts.

Applied carefully, "Unlimited liability for business debts applies to every partner in a general partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Two or more joint founders create a partnership; the agreement settles detailed rights.

Applied carefully, "Joint founding by two or more persons establishes a partnership even before a written agreement is finalised" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement records ownership percentages alongside equal management rights.

Applied carefully, "A partnership agreement specifies ownership percentages even when partners share equal management rights" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Specialisation does not limit each partner''s unlimited liability exposure.

Applied carefully, "Partners who specialise in different tasks remain jointly liable for all debts under unlimited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['General partnership management comes with unlimited liability, not limited protection.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Joint discussion during difficult situations can improve partnership decisions.

Applied carefully, "When facing difficult situations partners can exchange ideas and perhaps reach better joint decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Daily management removes capped liability regardless of ownership percentage.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'General partners face unlimited liability, not ownership-proportional caps.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited partnerships require at least one partner outside management.

Applied carefully, "At least one partner in a limited partnership is not involved in the management of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited partner exposure stops at the contributed capital amount.

Applied carefully, "The limited partner''s liability is limited to the amount of money contributed to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners still face unlimited liability for all business debts.

Applied carefully, "General managing partners in a limited partnership remain subject to unlimited liability for firm debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership and profit-loss rules are settled in the partnership agreement.

Applied carefully, "Partners still document ownership shares and profit-loss division among all partners in a limited partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit-loss division does not limit each partner''s liability to their profit share.

Applied carefully, "Each general partner remains solely liable for all debts regardless of the profit-loss split in the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners still face unlimited liability in a limited partnership.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equal rights coexist with possibly unequal ownership percentages in the agreement.

Applied carefully, "Equal rights in a general partnership refer to management standing rather than identical ownership percentages" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Profit-loss division is a required agreement topic.

Applied carefully, "Division of profit and loss must be settled within the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership percentages are documented when setting up the agreement.

Applied carefully, "Recording each partner''s percentage of ownership is part of setting up the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managers face unlimited liability regardless of how much capital silent partners contribute.

Applied carefully, "Managing partners in a limited partnership retain unlimited liability even when a silent partner invests most of the capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Joint founding by two or more persons underpins both partnership types.

Applied carefully, "Two or more persons must jointly found a business before either general or limited partnership rules apply" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unlimited liability coexists with pooling partner savings for investment.

Applied carefully, "Unlimited liability does not stop partners from combining personal savings to fund the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'General partnerships assign equal rights, liabilities, and responsibilities to all partners.

Applied carefully, "Equal rights, liabilities, and responsibilities apply to every partner in a general partnership structure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal management rights can coexist with unequal ownership percentages.

Applied carefully, "Equal rights allow each partner to participate in management even when ownership percentages differ in the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability does not block partners from combining private assets for credit.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Specialisation is compatible with equal overall responsibilities.

Applied carefully, "Partners can share tasks and specialise while equal responsibilities continue to apply overall" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status does not impose unlimited liability on every limited partner.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Liability is not reduced to ownership percentage for general partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profit share does not cap each general partner''s liability for the entire debt.

Applied carefully, "Unlimited liability extends to every general partner even when the partnership agreement assigns unequal profit shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Departmental specialisation does not shield general partners from firm-wide debts.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Non-managing limited partners face liability capped at their contribution.

Applied carefully, "Limited partners who refrain from management have liability limited to their contributed capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership finance broadly resembles sole proprietorship finance.

Applied carefully, "Financial aspects of the partnership remain in general similar to those of a sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Informal agreement does not replace the required partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'More partners typically mean more combined collateral for credit applications.

Applied carefully, "Combined private assets from partners may provide more collateral when the partnership seeks credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple owners do not automatically grant corporate-style limited liability.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Founders require an agreement covering rights, responsibilities, and profit sharing.

Applied carefully, "A written partnership agreement is used to define partners'' rights, duties, and how profit and loss are shared" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multiple partners can pool savings beyond one proprietor''s capacity.

Applied carefully, "Two or more partners should possibly be able to invest more savings than a sole proprietor alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined private assets strengthen loan collateral for partnerships.

Applied carefully, "Partners together may offer more private assets as collateral when seeking a business loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Joint discussion in difficult situations can improve partnership decision quality.

Applied carefully, "Partners in a general partnership can exchange ideas in difficult situations and perhaps reach stronger collective decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Founders need an agreement to settle rights, responsibilities, and profit-loss division.

Applied carefully, "Setting up a partnership agreement is necessary to settle rights and responsibilities among the founders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Rights, responsibilities, and profit-loss division belong in the agreement.

Applied carefully, "The partnership agreement records rights and responsibilities together with the division of profits and losses" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Managing general partners still face unlimited liability for partnership obligations.

Applied carefully, "Managing partners in a limited partnership remain subject to unlimited liability for business debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Role assignment for suppliers does not eliminate joint unlimited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Multiple partners often invest more combined savings than one proprietor.

Applied carefully, "Relative to a sole trader, several partners can usually contribute a larger pool of personal funds at start-up" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Methods for resolving disputes belong in the partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Combined collateral from partners can support larger loans.

Applied carefully, "When seeking bank credit, partners may collectively pledge more private property as security than a lone owner could" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Task sharing and specialisation do not remove unlimited liability for each partner.

Applied carefully, "Each partner is solely liable for all debts of the business even when partners share tasks and specialise" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership terms and governance details belong in the agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Each partner''s ownership share is documented in the agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Unlimited liability applies to general partners rather than limited liability for all.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'General partners remain liable for all firm debts regardless of specialisation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equal management intent does not remove the need for a partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Terms, decision making, and dispute resolution are documented in the partnership agreement.

Applied carefully, "Partners specify terms of the partnership, decision making, and resolving disputes within the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners retain unlimited liability; only non-managing limited partners are capped.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Partners may invest personal savings much like sole proprietors do.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Specialisation does not limit a general partner''s exposure to firm-wide debts.

Applied carefully, "General partners who specialise in operations remain fully exposed to liability for debts incurred anywhere in the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit-loss division is settled through the partnership agreement.

Applied carefully, "Partners who jointly found a business must settle the division of profits and losses in a partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-managing limited partners face liability limited to contributed capital.

Applied carefully, "Silent limited partners supply capital without managing while their liability remains capped at the contribution amount" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement covers rights, responsibilities, governance, and dispute resolution.

Applied carefully, "Rights, responsibilities, decision making, and resolving disputes are settled through the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal rights, liabilities, and responsibilities persist even when partners specialise.

Applied carefully, "All partners in a general partnership have equal rights, liabilities, and responsibilities despite task specialisation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Additional partnership details may appear in the agreement beyond core financial terms.

Applied carefully, "Partners may document other details of the partnership beyond ownership percentages and profit-loss division" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Joint founding with equal management involvement fits a general partnership.

Applied carefully, "Two consultants jointly founding a firm with equal management intent illustrate a general partnership arrangement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Verbal profit-sharing promises do not replace the partnership agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ownership percentages do not automatically remove equal partnership rights.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Voting on major contracts can constitute management involvement that removes capped liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Recovery is not limited to equal shares collected jointly from every partner.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.2.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited partnerships mix capped liability for non-managers with unlimited liability for managers.

Applied carefully, "Limited partnerships combine at least one non-managing partner with capped liability and managing partners with unlimited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement does not replace joint founding by two or more persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnership finance broadly resembles sole proprietorship finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'All partners cannot both manage and retain capped liability in a limited partnership.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Combined savings from partners can raise more financial funds than one proprietor alone.

Applied carefully, "Partners together can raise more financial funds by combining savings than a single sole proprietor typically can" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Decision making and dispute resolution belong in the partnership agreement.

Applied carefully, "The partnership agreement should specify decision making together with methods for resolving disputes between partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Several partners may invest more savings together than one sole proprietor.

Applied carefully, "Financial funds available to partnerships may exceed those of a sole proprietor because several partners can combine savings" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Pooling collateral does not remove unlimited liability for each general partner.

Applied carefully, "Each general partner remains exposed to unlimited liability even when the partnership pools more collateral than one owner could" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement specifies ownership, profit-loss division, and dispute resolution among other details.

Applied carefully, "Partners set up a partnership agreement in which they specify ownership percentages, profit-loss division, and dispute resolution" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited partner liability stops at the contributed amount.

Applied carefully, "In a limited partnership the limited partner''s liability is limited to the amount of money contributed to the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited partner capital does not remove unlimited liability from managing partners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Task sharing, specialisation, and joint discussion are features of partnership operation.

Applied carefully, "Partners can share the tasks, specialise, and in difficult situations exchange ideas to improve decision quality" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners face unlimited liability for all firm debts in either partnership type.

Applied carefully, "General managing partners remain solely liable for all debts of the business in both general and limited partnerships" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership percentages are recorded when partners set up the agreement.

Applied carefully, "Partnership founders document each partner''s percentage of ownership when they set up the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Combined partner assets can offer more collateral than a sole trader typically pledges.

Applied carefully, "Multiple partners may combine private assets so the partnership can offer more collateral than a sole trader when seeking credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal liability is not automatically limited to profit share proportions.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Equal liabilities continue despite specialised role assignment among partners.

Applied carefully, "Partners in a general partnership retain equal liabilities even when they assign different specialised roles in the agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit-loss division is settled in the partnership agreement.

Applied carefully, "The division of profit and loss is among the financial matters settled in the partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-managing limited partners have capped liability at their contribution.

Applied carefully, "At least one partner in a limited partnership stays outside management while liability remains capped at that partner''s contribution" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership terms may be recorded together with rights and profit-loss rules.

Applied carefully, "Partnership agreements may record terms of the partnership alongside rights, responsibilities, and profit-loss division" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each general partner faces unlimited liability individually, not merely proportionally by ownership.

Applied carefully, "Unlimited liability applies to each partner individually in a general partnership rather than strictly by ownership share" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Shared judgment in difficult situations can improve partnership decisions.

Applied carefully, "Partners who exchange ideas in difficult situations may make better decisions through shared judgment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement settles rights, responsibilities, ownership, and dispute resolution.

Applied carefully, "Joint founders use the partnership agreement to settle rights, responsibilities, ownership shares, and dispute resolution" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Implicit understanding does not replace settling rights in a partnership agreement.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlimited liability covers all firm debts, not only personally authorised obligations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.2.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The partnership agreement settles rights, responsibilities, and profit-loss division among joint founders.

Applied carefully, "Partners who jointly found a business are required to settle rights, responsibilities, and profit-loss division through a partnership agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Task division does not remove joint unlimited liability for all partnership debts.

Applied carefully, "General partners remain jointly responsible for all partnership debts even when they divide operational tasks among themselves" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The agreement settles ownership percentages, profit-loss division, and governance among founders.

Applied carefully, "Founders of a partnership use their agreement to settle ownership percentages, profit-loss shares, and governance rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal responsibilities coexist with divided and specialised duties.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shared management duties coexist with each partner''s unlimited liability for all firm debts.

Applied carefully, "Sharing management duties in a general partnership does not reduce each partner''s unlimited liability for firm debts" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.2.50' AND tier = 'full';
