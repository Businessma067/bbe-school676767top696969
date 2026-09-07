-- Update expanded explanations for 4.2-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Partnerships are not incorporated forms granting limited liability to all partners.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unequal ownership shares do not cap unlimited liability for general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

A partner who manages cannot retain liability limited only to contributed capital.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation is compatible with equal overall responsibilities in a general partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Governance clauses do not remove unlimited liability from managing partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation does not reduce a general partner''s unlimited liability exposure.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

A partner involved in management faces unlimited liability rather than capped contribution liability.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership shares and governance procedures are recorded in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Default general partnership rules impose unlimited rather than limited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Simply staying silent does not cap liability unless limited partnership rules apply.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.2.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement formalises rights but does not replace joint founding by two or more persons.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Specialised role assignment does not eliminate joint liability among general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation is permitted alongside equal partnership responsibilities.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partner rights and responsibilities are settled in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Refraining from management preserves capped liability, not unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Founders need an agreement to settle rights, responsibilities, and profit-loss division.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Several partners can pool savings and raise more funds than a lone proprietor.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership finance broadly resembles sole proprietorship finance.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Combined partner assets typically improve collateral for loan applications.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Personal savings can be invested similarly in partnerships and sole proprietorships.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.2.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Joint discussion in difficult situations can improve decision quality among partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited liability would wall off private assets once business assets are exhausted; sole proprietors do not enjoy that wall. Collateral pledged to a lender secures that lender''s claim — it does not convert the firm into a limited company or erase unlimited liability for remaining shortfalls.

Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability does not prevent offering more combined collateral than a sole trader.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability applies individually to each general partner.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Rights, responsibilities, and profit-loss division are core agreement matters.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

A single owner with employees is not a partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Founders still need an agreement to settle rights and profit division in a limited partnership.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability applies to each partner regardless of pooled collateral.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partners may supply capital without managing while liability stays capped at contribution.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Dispute resolution belongs in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership shares and profit-loss division are agreement topics.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partnership terms and decision making belong in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

General partners face unlimited liability for all business debts.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Two or more joint founders create a partnership; the agreement settles detailed rights.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement records ownership percentages alongside equal management rights.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation does not limit each partner''s unlimited liability exposure.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

General partnership management comes with unlimited liability, not limited protection.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Joint discussion during difficult situations can improve partnership decisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Daily management removes capped liability regardless of ownership percentage.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

General partners face unlimited liability, not ownership-proportional caps.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partnerships require at least one partner outside management.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partner exposure stops at the contributed capital amount.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managing partners still face unlimited liability for all business debts.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Ownership and profit-loss rules are settled in the partnership agreement.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Profit-loss division does not limit each partner''s liability to their profit share.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Managing partners still face unlimited liability in a limited partnership.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal rights coexist with possibly unequal ownership percentages in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Profit-loss division is a required agreement topic.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership percentages are documented when setting up the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managers face unlimited liability regardless of how much capital silent partners contribute.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Joint founding by two or more persons underpins both partnership types.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability coexists with pooling partner savings for investment.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

General partnerships assign equal rights, liabilities, and responsibilities to all partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal management rights can coexist with unequal ownership percentages.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Unlimited liability does not block partners from combining private assets for credit.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation is compatible with equal overall responsibilities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated status does not impose unlimited liability on every limited partner.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Liability is not reduced to ownership percentage for general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Profit share does not cap each general partner''s liability for the entire debt.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Departmental specialisation does not shield general partners from firm-wide debts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing limited partners face liability capped at their contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership finance broadly resembles sole proprietorship finance.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Informal agreement does not replace the required partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

More partners typically mean more combined collateral for credit applications.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Shareholders'' financial exposure is generally limited to what they invested in share capital. Creditors claim against the company as legal person; they do not automatically seize shareholders'' private homes for ordinary company debts.

Multiple owners do not automatically grant corporate-style limited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Founders require an agreement covering rights, responsibilities, and profit sharing.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Multiple partners can pool savings beyond one proprietor''s capacity.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Combined private assets strengthen loan collateral for partnerships.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Joint discussion in difficult situations can improve partnership decision quality.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Founders need an agreement to settle rights, responsibilities, and profit-loss division.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Rights, responsibilities, and profit-loss division belong in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managing general partners still face unlimited liability for partnership obligations.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Role assignment for suppliers does not eliminate joint unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Multiple partners often invest more combined savings than one proprietor.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Methods for resolving disputes belong in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Combined collateral from partners can support larger loans.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Task sharing and specialisation do not remove unlimited liability for each partner.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partnership terms and governance details belong in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Each partner''s ownership share is documented in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Unlimited liability applies to general partners rather than limited liability for all.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

General partners remain liable for all firm debts regardless of specialisation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal management intent does not remove the need for a partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Terms, decision making, and dispute resolution are documented in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Managing partners retain unlimited liability; only non-managing limited partners are capped.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partners may invest personal savings much like sole proprietors do.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation does not limit a general partner''s exposure to firm-wide debts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Profit-loss division is settled through the partnership agreement.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing limited partners face liability limited to contributed capital.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement covers rights, responsibilities, governance, and dispute resolution.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Equal rights, liabilities, and responsibilities persist even when partners specialise.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Additional partnership details may appear in the agreement beyond core financial terms.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Joint founding with equal management involvement fits a general partnership.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Verbal profit-sharing promises do not replace the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Ownership percentages do not automatically remove equal partnership rights.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Voting on major contracts can constitute management involvement that removes capped liability.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Recovery is not limited to equal shares collected jointly from every partner.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Limited partnerships mix capped liability for non-managers with unlimited liability for managers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement does not replace joint founding by two or more persons.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Partnership finance broadly resembles sole-proprietorship finance (owner capital, retained profit, bank and trade credit) but can draw on several partners'' savings and collateral, often expanding capacity.

Partnership finance broadly resembles sole proprietorship finance.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

All partners cannot both manage and retain capped liability in a limited partnership.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Combined savings from partners can raise more financial funds than one proprietor alone.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Decision making and dispute resolution belong in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Several partners may invest more savings together than one sole proprietor.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Pooling collateral does not remove unlimited liability for each general partner.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement specifies ownership, profit-loss division, and dispute resolution among other details.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partner liability stops at the contributed amount.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Limited partner capital does not remove unlimited liability from managing partners.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Task sharing, specialisation, and joint discussion are features of partnership operation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managing partners face unlimited liability for all firm debts in either partnership type.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership percentages are recorded when partners set up the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Combined partner assets can offer more collateral than a sole trader typically pledges.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Legal liability is not automatically limited to profit share proportions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Equal liabilities continue despite specialised role assignment among partners.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Profit-loss division is settled in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing limited partners have capped liability at their contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partnership terms may be recorded together with rights and profit-loss rules.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Each general partner faces unlimited liability individually, not merely proportionally by ownership.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Shared judgment in difficult situations can improve partnership decisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement settles rights, responsibilities, ownership, and dispute resolution.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Implicit understanding does not replace settling rights in a partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability covers all firm debts, not only personally authorised obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The partnership agreement settles rights, responsibilities, and profit-loss division among joint founders.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Task division does not remove joint unlimited liability for all partnership debts.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

The agreement settles ownership percentages, profit-loss division, and governance among founders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal responsibilities coexist with divided and specialised duties.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Shared management duties coexist with each partner''s unlimited liability for all firm debts.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.50' AND tier = 'full';
