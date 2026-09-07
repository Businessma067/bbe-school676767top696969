-- Update expanded explanations for 3.6-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customers are affected by and interested in firm performance.

Applied carefully, "Customers who rely on a firm''s products count as stakeholders even without owning shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders include anyone affected or interested, not shareholders alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Payment does not remove stakeholder status when parties are affected or interested.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Stakeholders are defined broadly as affected or interested parties.

Applied carefully, "Stakeholders include anyone affected by or interested in the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders include customers, suppliers, communities, and others beyond senior managers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners remain interested in profit, risk, and value throughout operation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profit reflects return for entrepreneurial coordination and risk.

Applied carefully, "Profit rewards a small IT-support venture for coordinating staff, suppliers, and customer service" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners may want share or business value to increase.

Applied carefully, "Growing the bakery''s reputation may increase the value of their investment over time" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners bear risk and seek reward for doing so.

Applied carefully, "They accept business risk because poor trading could reduce their personal return" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners typically seek profit from business performance.

Applied carefully, "A small IT-support venture as owners seek profit from daily bread and pastry sales" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner returns depend on business performance and profitability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Risk bearing is central to the owner stakeholder position.

Applied carefully, "Owners bear financial risk when revenue falls short of costs and may lose invested capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners can lose value and returns when trading performance is poor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owners face risk and seek reward for capital invested.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability limits personal loss but does not remove owner risk entirely.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.6.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Managers are stakeholders because firm outcomes affect their careers and income.

Applied carefully, "Restructuring decisions that threaten jobs show managers are affected as stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Security of employment is part of manager stakeholder interests.

Applied carefully, "Job security matters to managers because firm failure could end their employment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Income is listed among manager stakeholder concerns.

Applied carefully, "Managers seek stable income from the employing firm as a core stakeholder interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Manager livelihoods tie to firm performance.

Applied carefully, "Managers depend on continued firm success for promotion and salary prospects" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managers are included among business stakeholders.

Applied carefully, "Managers are stakeholders because business outcomes affect their careers and pay" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees depend on firm success for livelihood.

Applied carefully, "Staff depend on the bakery''s continued operation for wages and job security" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees are stakeholders even without share ownership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Security of employment sits alongside income for employees.

Applied carefully, "Job security is a legitimate employee stakeholder interest alongside monthly wages" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Identification with firm success is an employee stakeholder theme.

Applied carefully, "Employees may identify with the bakery and feel pride when it succeeds locally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Job security and identification tie employees to ongoing firm outcomes.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mutual dependence links managers, employees, and the firm.

Applied carefully, "Managers and employees are mutually dependent on the business with the owners'' venture" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The business depends on staff to operate and generate revenue.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Closure harms staff jobs and income tied to the firm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Managers and employees are mutually dependent on the business.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Both staff and the firm need each other for ongoing success.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Alignment of values supports cooperation on business goals.

Applied carefully, "When personal values align with company practices, staff engagement often improves" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shared values support alignment but conflicts can still arise among stakeholders.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shared values between staff and organisation matter in stakeholder analysis.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shared values support mutual dependence and identification themes.

Applied carefully, "Shared values can strengthen cooperation between employees and management on firm goals" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shared values link employees with organisational performance.

Applied carefully, "Shared values between staff and the organisation can support business success" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Payment is a core supplier stakeholder interest.

Applied carefully, "Suppliers expect to be paid for goods delivered to the buying business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier interests combine cash flow and order volume.

Applied carefully, "Stakeholder analysis includes suppliers expecting both payment and continued commercial relationship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Suppliers are stakeholders through payment and order dependency.

Applied carefully, "Suppliers are stakeholders because firm decisions affect their cash flow and volumes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Payment and order treatment reflect supplier stakeholder interests.

Applied carefully, "Fair payment terms reflect supplier stakeholder interests, not only accounting detail" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Future orders matter to suppliers as ongoing stakeholders.

Applied carefully, "Suppliers rely on future orders, not only payment for past deliveries" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Supplier performance affects the buyer''s ability to serve customers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Timely delivery is a supplier responsibility in the mutual dependency chain.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Suppliers must deliver quality and timeliness to fulfil their role.

Applied carefully, "Timely delivery is part of the supplier''s stakeholder duty toward the buying firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Quality and timely delivery are supplier responsibilities.

Applied carefully, "Suppliers must deliver quality goods on time to satisfy the buying business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Suppliers must meet quality and delivery expectations toward customers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mutual dependency runs between customers and firms.

Applied carefully, "Mutual dependency means both parties need each other for continued benefit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mutual dependency means firms rely on customers for revenue.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Customers rely on firms for products and services.

Applied carefully, "Customers depend on the bakery for product quality and daily availability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Firms depend on customers for sales and revenue.

Applied carefully, "The bakery depends on customers for revenue that keeps the shop trading" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customer welfare ties to firm performance through mutual dependency.

Applied carefully, "If the bakery closes, regular customers lose a relied-upon source of fresh bread" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Local amenities and jobs link communities to business outcomes.

Applied carefully, "Residents may care about noise, pollution, and employment created by a nearby firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by business activity and count as stakeholders.

Applied carefully, "Communities near a plant can be stakeholders affected by jobs, traffic, and local spending" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Community and owner interests may conflict on expansion impacts.

Applied carefully, "Community opposition to expansion can signal conflicting stakeholder interests" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local employment ties community interests to firm outcomes.

Applied carefully, "A town relying on one major employer shows community stake in that firm''s survival" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by business activity and count as stakeholders.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 3.6.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tax and policy interests remain even where regulation is light.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Government interest arises from regulation, tax, and public policy broadly.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Government protects public interest through regulation.

Applied carefully, "Regulators represent broader public interest when setting business rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Tax collection links government interests to business trading performance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Government is a stakeholder via tax, regulation, and policy.

Applied carefully, "Government has an interest in business activity through tax, regulation, and public policy" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Real action, not slogans, is required on environmental issues.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Genuine action is prioritised over superficial claims.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Real operational action is expected, not cosmetic logo changes alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Genuine environmental action is expected, not slogans alone.

Applied carefully, "Environmental stakeholders expect real action rather than superficial green marketing alone" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Genuine action is required, not greenwash slogans alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Greenwash means exaggerated claims without real action.

Applied carefully, "Greenwash misleads stakeholders by exaggerating environmental performance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Greenwash misleads stakeholders and undermines trust when uncovered.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Greenwash exaggerates performance rather than understating genuine achievement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Misleading green claims without real action exemplify greenwash.

Applied carefully, "Advertising recyclable packaging while increasing pollution illustrates greenwash risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Misleading claims undermine long-term stakeholder trust.

Applied carefully, "Empty eco-slogans without process change can erode stakeholder trust over time" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reporting supports stakeholder evaluation of real environmental performance.

Applied carefully, "Disclosing environmental impacts helps stakeholders assess whether firms take genuine action" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting addresses environmental stakeholder information needs.

Applied carefully, "Environmental reporting communicates firm impacts to interested stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Environmental reporting serves stakeholder information needs.

Applied carefully, "Sustainability reports can inform communities and investors about environmental impacts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting must reflect real action to remain credible.

Applied carefully, "Environmental reporting without operational improvement may still mislead stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Environment is a stakeholder expecting action and reporting.

Applied carefully, "The natural environment is treated as a stakeholder expecting substantive corporate response" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner profit aims can clash with environmental demands.

Applied carefully, "Environmental spending may reduce short-term profit, creating owner-environment tension" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit and community welfare can conflict.

Applied carefully, "Profit maximisation plans may conflict with community noise or pollution concerns" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Conflicting stakeholder interests arise in many decisions.

Applied carefully, "Different stakeholder groups can have conflicting interests in the same decision" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Conflicting interests among stakeholders are common.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Conflicts can arise among many stakeholder groups.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal and financial structure are success factors affecting stakeholders.

Applied carefully, "Legal and financial structure can influence how successfully a business meets stakeholder needs" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal form affects how risk and duties are distributed among stakeholders.

Applied carefully, "Choosing a partnership rather than a company can change how owner risk is shared" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Legal structure appears among contextual success factors.

Applied carefully, "Legal structure is listed among factors that can affect overall business success" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal structure shapes how firms communicate with stakeholders.

Applied carefully, "A company''s legal form can determine reporting duties toward different stakeholder groups" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal structure shapes duties to stakeholder groups.

Applied carefully, "Legal form can shape duties owed to different stakeholder groups" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Financial structure influences risk sharing among owners.

Applied carefully, "Financial structure choices can affect how risk is shared among owner stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Financial structure influences risk sharing and success for stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial structure choices affect how risk is shared among stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial structure shapes risk and returns for stakeholder groups.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Financial structure influences outcomes for owners and creditors.

Applied carefully, "Financial structure matters to creditors and owners as well as to accountants" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market awareness affects ability to serve customer and owner interests.

Applied carefully, "Ignoring local taste trends could harm a small IT-support venture''s customers and their own returns" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Responding to customers strengthens mutual dependency.

Applied carefully, "Tracking customer preferences helps the bakery retain mutual dependency with its buyers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market awareness supports meeting customer and competitive pressures.

Applied carefully, "Market awareness helps a firm respond to customer and competitive stakeholder pressures" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market awareness helps meet customer and competitive pressures.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Market awareness supports serving customer stakeholder needs.

Applied carefully, "Understanding rival bakeries helps a small IT-support venture keep quality attractive to regular buyers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Costs and profitability connect to owner and employee outcomes.

Applied carefully, "Managing costs and profitability affects what returns owners and jobs employees can sustain" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profitability underpins wages, orders, and returns for multiple groups.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Cost decisions can affect quality and therefore customer stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profitability underpins employment sustainability for staff.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profitability affects ability to pay suppliers and place orders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Reinvestment choices shape owner value interests.

Applied carefully, "Reinvesting profit rather than paying it out may aim to build long-term business value" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Risk bearing is central to the owner stakeholder position.

Applied carefully, "Owners bear losses when trading performance is poor, linking risk to reward" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Value growth links to owner risk and reward.

Applied carefully, "Rising business value can reward owners for successful risk bearing over time" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share or business value growth is a recognised owner interest.

Applied carefully, "Owners may want the value of shares or the business to increase" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Brand strength supports owner interest in rising business value.

Applied carefully, "Building a stronger brand can contribute to higher business valuation for owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Managers seek income and security and are listed as stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Customers are stakeholders through mutual dependency without board seats.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Stakeholders include all affected or interested parties, not shareholders alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Stakeholders include anyone affected or interested, not owners alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The stakeholder definition is broader than share ownership.

Applied carefully, "Stakeholders include anyone affected by or interested in the business, not shareholders alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees generally seek security alongside income.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Security of employment sits alongside income for employees.

Applied carefully, "Job security is a legitimate employee stakeholder interest alongside wages" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees depend on firm success for livelihood.

Applied carefully, "Staff depend on the firm''s continued operation for wages and job security" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholder status does not require ownership.

Applied carefully, "Employees are stakeholders even if they do not own shares in the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Staff livelihoods depend on firm performance.

Applied carefully, "Employees and managers share dependence on continued profitable operation for livelihoods" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Future orders matter to suppliers as ongoing stakeholders.

Applied carefully, "Suppliers rely on predictable orders, not only on being paid for past deliveries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Future orders matter to suppliers as ongoing stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Order volumes affect supplier livelihoods as stakeholders.

Applied carefully, "Delayed or cancelled orders can threaten a supplier''s ability to retain staff and pay bills" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Suppliers remain stakeholders through ongoing orders and payment.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Orders and payment together define supplier stakeholder interests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customer welfare ties to firm performance through mutual dependency.

Applied carefully, "Customers suffer if a relied-upon provider fails to supply quality products on time" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customers depend on firms for product quality and fair pricing.

Applied carefully, "Fair pricing and reliable quality keep a bakery''s regular buyers returning to the bakery" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customers depend on firms for product quality and availability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Customers rely on firms for products and services.

Applied carefully, "Customers depend on firms for product quality and availability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customers depend on the bakery through mutual dependency.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.25' AND tier = 'full';
