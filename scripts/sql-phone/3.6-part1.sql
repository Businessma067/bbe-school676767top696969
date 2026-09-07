-- Update expanded explanations for 3.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers are affected by and interested in firm performance.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include anyone affected or interested, not shareholders alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Payment does not remove stakeholder status when parties are affected or interested.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders are defined broadly as affected or interested parties.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholders include customers, suppliers, communities, and others beyond senior managers.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners remain interested in profit, risk, and value throughout operation.

Against the scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Profit reflects return for entrepreneurial coordination and risk.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners may want share or business value to increase.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners bear risk and seek reward for doing so.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners typically seek profit from business performance.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner returns depend on business performance and profitability.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing is central to the owner stakeholder position.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Owners can lose value and returns when trading performance is poor.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Owners face risk and seek reward for capital invested.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Limited liability limits personal loss but does not remove owner risk entirely.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers are stakeholders because firm outcomes affect their careers and income.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment is part of manager stakeholder interests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Income is listed among manager stakeholder concerns.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Manager livelihoods tie to firm performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers are included among business stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees depend on firm success for livelihood.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees are stakeholders even without share ownership.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment sits alongside income for employees.

The scenario (bakery staff may identify with a small IT-support venture''s business success) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Identification with firm success is an employee stakeholder theme.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Job security and identification tie employees to ongoing firm outcomes.

Against the scenario (bakery staff may identify with a small IT-support venture''s business success), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Mutual dependence links managers, employees, and the firm.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

The business depends on staff to operate and generate revenue.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Closure harms staff jobs and income tied to the firm.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers and employees are mutually dependent on the business.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Both staff and the firm need each other for ongoing success.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Alignment of values supports cooperation on business goals.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Shared values support alignment but conflicts can still arise among stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Shared values between staff and organisation matter in stakeholder analysis.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values support mutual dependence and identification themes.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values link employees with organisational performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Payment is a core supplier stakeholder interest.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Supplier interests combine cash flow and order volume.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers are stakeholders through payment and order dependency.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Payment and order treatment reflect supplier stakeholder interests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Supplier performance affects the buyer''s ability to serve customers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Timely delivery is a supplier responsibility in the mutual dependency chain.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers must deliver quality and timeliness to fulfil their role.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Quality and timely delivery are supplier responsibilities.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Suppliers must meet quality and delivery expectations toward customers.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency runs between customers and firms.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency means firms rely on customers for revenue.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers rely on firms for products and services.

The scenario (neighbourhood bakery customers who depend on the shop for fresh bread) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Firms depend on customers for sales and revenue.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customer welfare ties to firm performance through mutual dependency.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local amenities and jobs link communities to business outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Community and owner interests may conflict on expansion impacts.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local employment ties community interests to firm outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'] WHERE case_id = 'CASE 3.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Tax and policy interests remain even where regulation is light.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government interest arises from regulation, tax, and public policy broadly.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government protects public interest through regulation.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Tax collection links government interests to business trading performance.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government is a stakeholder via tax, regulation, and policy.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real action, not slogans, is required on environmental issues.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Genuine action is prioritised over superficial claims.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Real operational action is expected, not cosmetic logo changes alone.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine environmental action is expected, not slogans alone.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine action is required, not greenwash slogans alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash means exaggerated claims without real action.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash misleads stakeholders and undermines trust when uncovered.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Greenwash exaggerates performance rather than understating genuine achievement.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Misleading green claims without real action exemplify greenwash.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Misleading claims undermine long-term stakeholder trust.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting supports stakeholder evaluation of real environmental performance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting addresses environmental stakeholder information needs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Environmental reporting serves stakeholder information needs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting must reflect real action to remain credible.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Environment is a stakeholder expecting action and reporting.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner profit aims can clash with environmental demands.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Profit and community welfare can conflict.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting stakeholder interests arise in many decisions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting interests among stakeholders are common.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Conflicts can arise among many stakeholder groups.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'] WHERE case_id = 'CASE 3.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal and financial structure are success factors affecting stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Legal form affects how risk and duties are distributed among stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Legal structure appears among contextual success factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal structure shapes how firms communicate with stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal structure shapes duties to stakeholder groups.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences risk sharing among owners.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences risk sharing and success for stakeholders.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Financial structure choices affect how risk is shared among stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Financial structure shapes risk and returns for stakeholder groups.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences outcomes for owners and creditors.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Market awareness affects ability to serve customer and owner interests.

The scenario (a small IT-support venture assess how market awareness affects their bakery stakeholders) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Responding to customers strengthens mutual dependency.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Market awareness supports meeting customer and competitive pressures.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Market awareness helps meet customer and competitive pressures.

Against the scenario (a small IT-support venture assess how market awareness affects their bakery stakeholders), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Market awareness supports serving customer stakeholder needs.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
'] WHERE case_id = 'CASE 3.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Costs and profitability connect to owner and employee outcomes.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Profitability underpins wages, orders, and returns for multiple groups.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Cost decisions can affect quality and therefore customer stakeholders.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Profitability underpins employment sustainability for staff.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Profitability affects ability to pay suppliers and place orders.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'] WHERE case_id = 'CASE 3.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Reinvestment choices shape owner value interests.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing is central to the owner stakeholder position.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Value growth links to owner risk and reward.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Share or business value growth is a recognised owner interest.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Brand strength supports owner interest in rising business value.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'] WHERE case_id = 'CASE 3.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers seek income and security and are listed as stakeholders.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers are stakeholders through mutual dependency without board seats.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include all affected or interested parties, not shareholders alone.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholders include anyone affected or interested, not owners alone.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

The stakeholder definition is broader than share ownership.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees generally seek security alongside income.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment sits alongside income for employees.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees depend on firm success for livelihood.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholder status does not require ownership.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Staff livelihoods depend on firm performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'] WHERE case_id = 'CASE 3.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

In the case setting — suppliers need predictable orders as well as payment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

Against the scenario (suppliers need predictable orders as well as payment), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Order volumes affect supplier livelihoods as stakeholders.

In the case setting — suppliers need predictable orders as well as payment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers remain stakeholders through ongoing orders and payment.

Against the scenario (suppliers need predictable orders as well as payment), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Orders and payment together define supplier stakeholder interests.

In the case setting — suppliers need predictable orders as well as payment — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'] WHERE case_id = 'CASE 3.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customer welfare ties to firm performance through mutual dependency.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers depend on firms for product quality and fair pricing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Customers depend on firms for product quality and availability.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers rely on firms for products and services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers depend on the bakery through mutual dependency.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'] WHERE case_id = 'CASE 3.6.25' AND tier = 'full';
