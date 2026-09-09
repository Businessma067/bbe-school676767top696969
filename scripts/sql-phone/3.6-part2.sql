-- Update expanded explanations for 3.6-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Communities are affected by business activity and count as stakeholders.

Applied carefully, "Local communities can be stakeholders affected by jobs, traffic, and spending from nearby firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are stakeholders even without direct commercial contracts.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Communities are affected by local employment and are stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Local amenities and jobs link communities to business outcomes.

Applied carefully, "Residents near an industrial plant may care about noise, pollution, and local jobs created by the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local spending and jobs link community interests to firm activity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tax and policy interests remain even where regulation is light.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Tax collection links government interests to business trading performance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Government is a stakeholder via regulation and policy.

Applied carefully, "Enforcement of business rules shows government acting as a stakeholder in firm conduct" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Government protects public interest through regulation and tax.

Applied carefully, "Compliance inspections link government oversight to how firms treat wider stakeholder interests" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fiscal policy links government interests to business activity.

Applied carefully, "Tax collection gives government a stake in the trading performance of local firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Genuine action is required, not greenwash slogans alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Real action, not slogans, is required on environmental issues.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Genuine environmental action is expected, not slogans alone.

Applied carefully, "Beyond slogans, environmental stakeholders still expect substantive measures rather than marketing alone" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Real operational action is expected, not cosmetic changes alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Genuine action is prioritised over superficial claims.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Stakeholder status does not require ownership.

Applied carefully, "Employees count as stakeholders through wages and job security even without owning shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Suppliers are stakeholders through payment and order dependency.

Applied carefully, "Suppliers are stakeholders because payment and order decisions affect their operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by business activity and count as stakeholders.

Applied carefully, "Communities affected by traffic and jobs from a nearby plant count as stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders are defined broadly as affected or interested parties.

Applied carefully, "Stakeholders include anyone affected by or interested in the business, extending beyond shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customers are affected by and interested in firm performance.

Applied carefully, "Customers who depend on a firm''s products are stakeholders through mutual dependency" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Risk bearing is central to the owner stakeholder position.

Applied carefully, "Poor trading performance can reduce owner returns and the value of capital they invested" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share or business value growth is a recognised owner interest.

Applied carefully, "Rising share or business value rewards owners who accepted earlier business risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners face risk when performance is poor despite seeking profit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owners want profit and reward for risk.

Applied carefully, "Owners typically seek profit and a return for bearing business risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Risk bearing includes potential loss of capital when performance is weak.

Applied carefully, "Owners accept that poor results can reduce the value of their invested capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Income and job security tie managers to firm performance.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Closure harms staff jobs and income tied to the firm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Mutual dependence links managers, employees, and the firm.

Applied carefully, "Managers and employees both rely on the firm''s continued operation for income and jobs" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The business depends on staff to operate and generate revenue.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Managers and employees are mutually dependent on the business.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Suppliers are stakeholders through payment and order dependency.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Suppliers expect payment and orders without needing ownership.

Applied carefully, "The flour supplier expects payment and future orders from a neighbourhood bakery" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mutual dependency runs both ways between buyers and suppliers.

Applied carefully, "The bakery depends on the supplier for quality flour while the supplier depends on bakery orders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Order volumes affect supplier livelihoods as stakeholders.

Applied carefully, "Delayed bakery orders threaten the flour supplier''s cash flow and staffing plans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier cash flow depends on steady bakery orders from buyers.

Applied carefully, "Buyers and suppliers rely on each other for orders and cash flow" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customers rely on specific firms for product quality and availability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Customer welfare ties to firm performance through mutual dependency.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Mutual dependency means customers rely on suppliers too.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Customer welfare ties to firm performance through mutual dependency.

Applied carefully, "Customers lose access if a relied-upon supplier closes" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mutual dependency runs both ways between customers and firms.

Applied carefully, "Buyers need reliable suppliers just as suppliers need paying customers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Communities are affected by business activity and count as stakeholders.

Applied carefully, "Communities affected by noise from a new plant hold stakeholder interests in how the firm operates" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local employment ties community interests to firm outcomes.

Applied carefully, "Local employment linked to a warehouse gives the community a stake in the firm''s continued operation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by facility impacts and local employment.

Applied carefully, "A new warehouse affects traffic and jobs in a town, creating community stakeholder interests" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Community and owner interests may conflict on expansion impacts.

Applied carefully, "Community opposition to a new warehouse signals conflicting interests with the developer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Traffic impacts create community stakeholder interests.

Applied carefully, "Residents near a new facility may experience stakeholder effects from increased lorry movements" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Government stakeholder role includes protecting public interest via regulation.

Applied carefully, "Regulation aims to balance business activity with protection of wider stakeholder interests" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Government protects public interest through regulation.

Applied carefully, "Business rules set by regulators reflect protection of the wider public interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Government is a stakeholder via tax, regulation, and policy.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regulation can represent environmental and community stakeholder concerns.

Applied carefully, "Environmental rules reflect government acting as a stakeholder for the wider community" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Infrastructure links to economic activity affecting business and public stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Environmental reporting serves stakeholder information needs.

Applied carefully, "Published sustainability data can inform investors and communities about environmental impacts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting addresses community stakeholder information needs.

Applied carefully, "Communities may rely on published environmental data when assessing local facility impacts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting supports stakeholder evaluation of environmental performance.

Applied carefully, "Investors may use sustainability disclosures to judge whether environmental claims are credible" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting remains part of environmental stakeholder expectations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Reporting informs stakeholders rather than concealing impacts by design.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit and environmental goals can conflict in the same decision.

Applied carefully, "Higher profit targets may clash with environmental spending on cleaner production" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Conflicting stakeholder interests include environmental tensions.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Conflicting interests among stakeholders are common.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Owner profit aims can clash with environmental demands.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner profit aims can clash with environmental demands.

Applied carefully, "Cleaner production spending can lower short-term profit and tension owner and environmental aims" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Community and owner interests may conflict on expansion impacts.

Applied carefully, "Expansion plans may clash with community preferences about noise and traffic" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Conflicting stakeholder interests arise when growth affects local amenities.

Applied carefully, "Community objections to a bakery extension illustrate conflicting stakeholder interests in practice" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Neighbour objections to a bakery extension illustrate owner-community tension.

Applied carefully, "A small IT-support venture''s growth ambitions may conflict with neighbours'' wish to limit delivery traffic" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profit and community concerns can conflict in expansion decisions.

Applied carefully, "Profit from a larger bakery and community concerns about noise can pull owners and neighbours in different directions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local amenity concerns can pull neighbours and owners in different directions.

Applied carefully, "Neighbours opposing a small IT-support venture''s extension show conflicting stakeholder interests over local amenities" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mutual dependence links managers, employees, customers, suppliers, and the firm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Stakeholders are defined broadly as affected or interested parties.

Applied carefully, "Exam review: stakeholders include anyone affected by or interested in the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders include anyone affected or interested, not shareholders alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Genuine environmental action is expected, not greenwash slogans alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Conflicting stakeholder interests arise in many decisions.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees depend on firm success for livelihood.

Applied carefully, "Bakery staff depend on the shop for wages and job security as employee stakeholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners typically seek profit and bear business risk.

Applied carefully, "Bakery owners seek profit and bear risk from how the shop trades" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple groups affected by the bakery fit the stakeholder definition.

Applied carefully, "The owners, staff, flour suppliers, and neighbours all hold stakeholder interests in the bakery" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders include staff, suppliers, customers, and neighbours too.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Suppliers expect payment and orders without needing ownership.

Applied carefully, "The flour supplier expects payment and future orders as a supplier stakeholder" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employees are stakeholders through income, security, and identification.

Applied carefully, "Employees at a components manufacturer''s plants are stakeholders affected by corporate decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Government is a stakeholder via regulation, tax, and policy.

Applied carefully, "Government regulators in host countries hold stakeholder interests in a components manufacturer''s operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by business activity and count as stakeholders.

Applied carefully, "Communities near a components manufacturer''s facilities may be stakeholders affected by jobs and local spending" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Large multinationals have broad stakeholder groups.

Applied carefully, "A components manufacturer affects employees, suppliers, communities, and regulators across its operating countries" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stakeholders include employees, suppliers, communities, and regulators too.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Greenwash misleads stakeholders and undermines trust when uncovered.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Real action, not slogans, is required on environmental issues.

Applied carefully, "Superficial eco-labels without operational change fail environmental stakeholder expectations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Genuine action is required, not greenwash slogans alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Greenwash means exaggerated claims without real action.

Applied carefully, "Greenwash misleads stakeholders by exaggerating environmental performance in advertising" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Misleading green claims without real action exemplify greenwash.

Applied carefully, "Advertising recyclable boxes while dumping waste illegally illustrates greenwash risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Cash-flow pressure from delayed payment affects suppliers as stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Payment timing affects supplier stakeholders directly.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Fair payment terms reflect how the buyer treats supplier stakeholders.

Applied carefully, "Fair payment terms matter to suppliers as stakeholder treatment, not only to accountants" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Timely payment is a core supplier stakeholder interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Supplier fairness concerns extend beyond narrow legal formalities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Alignment of values supports cooperation on business goals.

Applied carefully, "Staff engagement improves when employees feel company practices match their personal values" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shared values link employees with organisational performance.

Applied carefully, "Shared values between staff and the organisation can support overall business success" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Value alignment can improve day-to-day cooperation at work.

Applied carefully, "Alignment of personal and company values can improve cooperation on business objectives" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Identification with firm success is an employee stakeholder theme.

Applied carefully, "Staff who share organisational values may identify more closely with firm success" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shared values support mutual dependence and identification themes.

Applied carefully, "Aligned values help employees and managers cooperate on shared business objectives" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owners may want share or business value to increase.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Value growth links to owner risk and reward.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Reinvestment versus payout shapes owner value interests.

Applied carefully, "Weighing dividends against reinvestment affects the long-term value owners seek" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reinvestment choices shape owner value interests.

Applied carefully, "Retaining profit in the business rather than paying dividends can build long-term owner value" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Reinvestment choices shape owner value interests.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mutual dependency gives customers influence when they can switch.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Customers depend on firms for product quality and availability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Poor performance can drive customers to switch suppliers.

Applied carefully, "Customers may switch if quality falls, exercising stakeholder influence on revenue" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Customers can influence firms through switching or boycotts.

Applied carefully, "Customer boycotts after poor service show stakeholder power over firm revenue" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Even small-quantity buyers can switch when quality or service disappoints.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Community interests are affected when a major local employer closes.

Applied carefully, "If the factory closes, the community loses jobs linked to that employer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Communities are affected by business activity and count as stakeholders.

Applied carefully, "A major employer''s expansion or closure decision affects community stakeholders beyond the factory gate" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Residents with family members at the plant hold a community stake in its future.

Applied carefully, "Residents whose family members work at the plant hold a community stakeholder interest in its future" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local spending and jobs link community welfare to the firm''s continued operation.

Applied carefully, "Local spending from factory wages links community welfare to the firm''s continued operation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Local employment ties community interests to firm outcomes.

Applied carefully, "Local jobs concentrating on a single company give the community a direct interest in that firm''s continuity" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Government affects and is affected by business as a stakeholder.

Applied carefully, "Infrastructure used by firms links government investment to business stakeholder context" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Fiscal links connect government and business stakeholder interests.

Applied carefully, "Tax revenue from trading firms helps fund public infrastructure used by business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Infrastructure links to economic activity affecting business and public stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Government stakeholder role includes regulation affecting business logistics.

Applied carefully, "Regulators may set transport standards affecting firms that depend on road networks" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Infrastructure links government investment to business activity.

Applied carefully, "Roads built for public use also support business logistics and distributor operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 3.6.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Environment is treated as a stakeholder expecting action and reporting.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Environment is a stakeholder expecting genuine action and reporting.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Real action, not slogans, is required on environmental issues.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Environment is a stakeholder expecting action and reporting.

Applied carefully, "Environmental stakeholder theory treats nature as a party expecting action and reporting" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reporting communicates impacts to environment-focused stakeholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal and financial structure are success factors affecting stakeholders.

Applied carefully, "Legal and financial structure shapes how well a firm can meet stakeholder expectations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market awareness helps meet customer and competitive pressures.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Costs and profitability connect to owner and employee outcomes.

Applied carefully, "Cost control and profitability influence wages, orders, and returns for stakeholder groups" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market awareness supports meeting customer and competitive pressures.

Applied carefully, "Understanding market trends helps firms respond to customer and competitive pressures" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal structure is listed among success factors affecting performance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 3.6.50' AND tier = 'full';
