-- Update expanded explanations for 4.2-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Joint founding by two or more persons defines a partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The partnership agreement records ownership, profit division, rights, and responsibilities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal rights, liabilities, and responsibilities characterise the general partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability means each partner may be held responsible for the entire debt.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Partners may divide labour and specialise while remaining jointly responsible.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

One person operating alone creates a sole proprietorship, not a partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

The non-managing limited partner''s liability stops at the contributed capital amount.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Active management disqualifies a partner from limited liability capped at contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Limited partners are a feature of limited partnerships, not a requirement for general partnerships.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

More owners do not by themselves incorporate the firm or cap partner liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

A limited partnership requires at least one partner outside day-to-day management.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Multiple partners can pool savings and raise more funds than one proprietor alone.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Combined private assets from several partners can strengthen loan collateral.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership financial arrangements broadly resemble those of sole proprietors.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership shares and profit-loss division are documented in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Trust between founders does not replace the need for a partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership requires joint founding by two or more owners, not hired managers alone.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Dividing duties does not eliminate joint unlimited liability among general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership share does not cap liability for general partners under unlimited liability rules.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Decision-making rules and dispute resolution belong in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated status does not make every limited partner fully liable for all debts.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Shared discussion in difficult situations can improve partnership decision quality.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managing general partners still face unlimited liability for partnership obligations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Ownership percentages do not limit unlimited liability for general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Liability is not restricted to ownership percentage for general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Specialisation does not limit a general partner''s exposure to firm-wide debts.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

General managing partners still face unlimited liability within a limited partnership.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership is not an incorporated form that grants limited liability by default.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Profit share and legal liability are distinct; unlimited liability is not split strictly by profit share.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Creditors can seek full repayment from any partner when unlimited liability applies.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partnership terms and further operational details can be included in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal management involvement and shared risk align with a general partnership choice.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partner rights and responsibilities are recorded in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Informal oral promises do not replace the need for a partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Enforcement is not restricted to collecting equal fractions from every partner at once.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

A sole owner with employees remains a sole proprietorship.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Legal liability is not automatically split strictly by profit share among general partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Equal responsibilities coexist with divided and specialised duties.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Different specialised roles are compatible with equal partnership rights.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Combined personal resources from partners can strengthen collateral for borrowing.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing capital contributors face liability capped at their contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Both partnership types require joint founding by two or more persons.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Equal management rights may continue even when ownership percentages differ in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Decision making and dispute resolution are partnership agreement provisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Ownership percentages are explicitly documented for each partner in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Creditors may look to partners'' private assets when business assets are insufficient.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Liability rules do not replace the partnership agreement for governance and profit sharing.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Joint founding with equal management involvement fits a general partnership structure.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partners stay outside management; general partners run the firm.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Combined savings from partners can exceed one proprietor''s investment capacity.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Managing general partners still face unlimited liability in a limited partnership.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Multiple partners often offer more collateral together than a single proprietor.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnerships and sole proprietors handle personal savings investment in broadly similar ways.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Limited liability capped at contribution applies only to non-managing limited partners.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Limited partnerships combine unlimited liability for managers with capped liability for non-managers.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

A general partnership can record unequal ownership shares without becoming a limited partnership.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Collective discussion can improve decisions during difficult business situations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Non-managing limited partners stay outside daily operations.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Private assets can serve as collateral despite unlimited liability exposure.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Oral understandings do not replace the required partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Trust does not remove the need to document profit-loss division in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Governance and dispute rules are partnership agreement topics.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Pledging collateral secures the lender; it does not waive all interest, exclude the loan from liabilities, incorporate the firm, or remove unlimited liability for any remaining shortfall. Short-term supplier trade credit also does not typically demand a mortgage over the home.

Two or more partners typically pledge more combined collateral than one proprietor.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Dispute resolution procedures belong in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Managing partners remain personally liable for all debts despite limited partnership status.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Management participation removes capped liability for a would-be limited partner.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Internal recovery between partners may arise after one partner satisfies a creditor.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Two founders still require a partnership agreement to settle their arrangement.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Daily management removes capped liability for a limited partner.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Joint founding by two or more persons defines a partnership.

Applied to the bakery (or other named sole trader) in the stem, the same ownership and finance rules hold: one owner-manager, personal tax and liability, and ordinary credit instruments as personal obligations.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement documents rights, responsibilities, and profit-loss division jointly.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Decision making and dispute resolution are standard agreement provisions.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Not selling public shares does not prevent partnerships from combining partner resources.

Internal finance recycles surplus already inside the firm (retained profit, asset sales). External finance comes from outside providers (owner start-up savings in this framework, investors, banks, suppliers on credit). Where the cash sits in the bank account does not decide the label.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

General partnerships suit equal management involvement; limited partnerships require non-managing limited partners.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

General partners remain liable for all firm debts regardless of specialisation.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
'] WHERE case_id = 'CASE 4.2.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Partnership terms and further operational details can be included in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unequal ownership shares do not cap liability for all partners.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Managers in a limited partnership carry unlimited liability for firm obligations.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Ownership percentages do not limit each general partner''s liability for the full debt.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Additional partners can strengthen rather than automatically destroy creditworthiness.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Limited partnerships require managing partners alongside non-managing limited partners.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing limited partners face liability capped at their contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Profit sharing does not give every limited partner unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Two or more joint founders define a partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Founders need an agreement to settle rights, responsibilities, and profit-loss division.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Private property can be offered as collateral even when partners face unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Multiple partners can invest more savings together than a sole proprietor acting alone.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Unlimited liability and pooled investment operate together.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Unlimited liability exposes each general partner to the full debt.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Minority ownership does not automatically eliminate equal management rights in a general partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Unlimited liability extends to debts created by other partners, not only self-created obligations.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Ownership share does not restrict creditor claims to a proportional amount from each partner.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Recovery is not restricted to proportional shares after business assets are exhausted.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Default partnership rules expose general partners'' private assets through unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Observing or participating in management can remove limited partner protection.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That misclassification is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 4.2.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated status does not impose unlimited liability on non-managing limited partners.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Additional operational details may be documented in the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Verbal profit promises do not replace the partnership agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'TRUE — Unlimited liability means repayment is not capped at assets labelled as business property. If business resources cannot cover debts, creditors may reach the proprietor''s private assets. That personal exposure is the risk counterpart of undivided control.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Sole proprietors and general partners both bear unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Combined savings and collateral from partners can exceed sole proprietorship capacity.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Limited partnerships include a non-managing partner whose liability is capped at contribution.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — When two or more persons jointly found a business, the ownership form is a partnership. Joint founding — shared ownership intent — is the defining step that distinguishes it from a sole proprietorship.

Joint founding by two or more persons defines the partnership.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

The agreement settles governance and financial division among founders.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'TRUE — Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Task sharing, specialisation, and joint discussion are partnership features.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Decision making, disputes, and ownership shares belong in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Silent participation without limited partnership structure still leaves general partners with unlimited liability.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'FALSE — In a general partnership, partners typically share equal rights, liabilities, and responsibilities unless varied by agreement. Unlimited liability means each partner can be pursued for the firm''s debts.

Partners may specialise in finance and sales while retaining equal overall responsibilities.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing limited partners have liability capped at contributed capital.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership finance broadly matches sole proprietorship finance and permits pooled resources.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Combined partner savings can exceed one proprietor''s resources.

Sole proprietorship unites ownership and control in one person, has no separate legal personality (personal tax on profits), and carries unlimited liability so private assets can be reached if business resources fall short.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
'] WHERE case_id = 'CASE 4.2.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Pooled collateral strengthens credit applications for partnerships.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Partners can divide tasks and specialise — one in sales, another in operations — while still sharing ownership. Specialisation is an operational advantage of multi-person ownership.

Task specialisation does not automatically cap a general partner''s liability.

That misclassification is enough to reject the claim.

The statement is false.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Silent partner capital does not remove unlimited liability from managing partners.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Creditors can seek the full debt from any one partner under unlimited liability.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
', 'FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

General managing partners remain personally liable for all debts beyond contributed capital.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
'] WHERE case_id = 'CASE 4.2.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership funding differs from corporation share issues on public markets.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'TRUE — Long-term lenders commonly require pledgeable assets — often land and property via a mortgage — as security. Collateral backs repayment; the loan remains a liability. If private property was pledged and the business cannot repay, that property remains at stake.

Pooled private assets strengthen loan collateral for partnerships.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Managing general partners still face unlimited liability alongside any limited partner.

So the sentence is a correct description of the mechanism at work in this case.

The statement is true.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Non-managing capital providers face liability capped at their contribution.

Limited partners trade a liability cap for staying out of management. If they take part in running the firm, they risk losing that shield; general partners continue with management and typically unlimited liability.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
', 'TRUE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

Terms, decision making, and dispute resolution belong in the agreement.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

That is why the claim stands for this form of business or source of finance.

The statement is true.
'] WHERE case_id = 'CASE 4.2.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Limited partners who take part in management risk losing the liability shield that limited status provides. Limited liability is not a free add-on to active control; the non-management rule is structural.

The unincorporated/incorporated split turns on legal personality. Unincorporated firms (sole traders, partnerships) are not legal entities of their own; incorporated companies are legal persons. Pooling capital, filing personal tax, listing shares, or enjoying limited liability must be attached to the correct side of that split — limited liability marks incorporated forms, and listing is not the sole criterion of incorporation.

Unincorporated limited partnerships still impose unlimited liability on managing partners.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership requires joint ownership by two or more partners, not hired managers alone.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

On that basis the assertion attaches the wrong legal, tax, liability, or finance label.

The statement is false.
', 'FALSE — Keep the partnership triad in view: multi-person ownership, an agreement governing rights and profit shares, and unlimited liability for general partners (with limited partners capped only if they stay out of management).

Partnership formation does not demand immediate daily management by every founder.

Apply the chapter mechanism to the exact wording: name the ownership form or finance source correctly, then check whether the claimed tax, liability, repayment, or matching consequence actually follows from that category.

So the sentence does not survive once the correct mechanism is applied.

The statement is false.
', 'FALSE — Partners need a partnership agreement to settle ownership shares, decision rights, responsibilities, and how profits and losses are divided. Without clear terms, disputes over control and residual claims are harder to resolve.

As a legal person, a corporation holds rights and obligations in its own name: it can own land and property, hire people, close contracts, sue, and be sued. Those capacities do not require every shareholder to act personally in each transaction.

The agreement does not incorporate the firm or create corporate legal personality.

That misclassification is enough to reject the claim.

The statement is false.
', 'TRUE — In a limited partnership, limited partners'' liability is capped at what they contributed, and they normally must not take part in management — that is the price of the liability cap. General partners continue to manage and usually retain unlimited liability.

Under unlimited liability in a general partnership, each partner can be solely liable for all debts of the business: creditors need not split claims proportionally before pursuing one partner''s private assets.

Managing partners carry unlimited liability for firm obligations in a limited partnership.

On that basis the assertion matches the ownership or finance rule being tested.

The statement is true.
'] WHERE case_id = 'CASE 4.2.25' AND tier = 'full';
