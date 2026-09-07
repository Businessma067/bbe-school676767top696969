-- Update expanded explanations for 4.4-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Separate legal personality is the defining split between unincorporated and incorporated structures in the overview.

Applied carefully, "Unincorporated businesses are not legal entities of their own, whereas incorporated businesses are legal persons" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Partnerships remain unincorporated even when partners pool capital; they are not legal persons of their own.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Personal tax reporting reflects the absence of separate legal personality rather than creating it.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Incorporation depends on legal structure, not merely whether shares trade on an exchange.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability companies are incorporated legal persons alongside corporations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Directors run the company; shareholders supply capital and need not manage day-to-day operations.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Sole traders are unincorporated and typically combine ownership and management in one person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Corporate structure allows shareholders to own while directors manage operations.

Applied carefully, "In incorporated businesses, owners and managers need not be the same persons because shareholders provide share capital and directors run the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partners are usually owners and managers themselves in unincorporated partnerships.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Sole proprietorships lack the shareholder-director split characteristic of incorporated firms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trading activity alone does not confer separate legal personality on an unincorporated sole trader.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A one-person operation where the proprietor runs the shop matches the sole trader pattern.

Applied carefully, "The bakery fits an unincorporated sole trader structure in which the owner and manager are typically the same person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated firms lack independent legal entity status from their owners.

Applied carefully, "As an unincorporated business, the bakery is not a legal entity of its own separate from the proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors characterise incorporated businesses, not a typical sole trader bakery.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Corporations and limited liability companies are incorporated, not unincorporated, forms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole traders and partnerships are listed under unincorporated ownership in the summary.

Applied carefully, "Figure 9 places sole traders and partnerships among unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations and limited liability companies appear as incorporated legal structures.

Applied carefully, "Figure 9 classifies corporations and limited liability companies as incorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships can have multiple owners yet remain unincorporated.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Owner-manager overlap is characteristic of unincorporated businesses in the figure.

Applied carefully, "In unincorporated forms, owners and managers are typically the same persons according to the overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated governance separates capital-providing shareholders from managing directors.

Applied carefully, "Shareholders provide share capital while directors run incorporated companies in the diagram''s logic" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The overview lists sole traders among unincorporated businesses with owner-manager overlap.

Applied carefully, "A sole trader or sole proprietor is an unincorporated form with typically one owner who also manages the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders lack separate legal personality and are not independent legal persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A single-shareholder company remains incorporated if it is a corporation or limited liability company.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnerships are unincorporated alongside sole traders, not incorporated with them.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietorships do not use a shareholder-director governance model.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Directors, not shareholders as a rule, run the company in incorporated structures.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Partners typically both own and manage in unincorporated partnerships.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Sole proprietors manage directly without mandatory external directors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Incorporated firms may separate ownership from management through directors.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The overview assigns day-to-day company management to directors in incorporated businesses.

Applied carefully, "Directors run incorporated companies, whereas unincorporated owners typically manage their own businesses directly" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.4.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital and shareholders belong to incorporated structures, not sole traders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partner capital contributions do not convert a partnership into an incorporated legal person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnerships are unincorporated forms that may have more than one owner.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The overview links shareholders with capital provision and directors with running the company.

Applied carefully, "Shareholders provide share capital to incorporated businesses while directors run the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Separation of owners and managers is a hallmark of incorporated businesses.

Applied carefully, "Incorporated businesses may have owners who do not manage operations because ownership and management can be separated" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Joint founding with shared management fits an unincorporated partnership, not a corporation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partners who manage client work embody the typical owner-manager overlap in partnerships.

Applied carefully, "The practice is an unincorporated partnership in which owners and managers are typically the same persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships lack separate legal personality from their owners.

Applied carefully, "As an unincorporated business, the partnership is not a legal entity of its own separate from the partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors characterise incorporated firms, not a consulting partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole traders are unincorporated; corporations and limited liability companies are incorporated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Lack of separate legal personality defines unincorporated structures.

Applied carefully, "Unincorporated businesses are not legal entities of their own" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated firms possess independent legal person status.

Applied carefully, "Incorporated businesses are legal persons distinct from their owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner-manager identity is typical in unincorporated businesses.

Applied carefully, "In unincorporated sole traders and partnerships, owners and managers are typically the same persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporate governance separates capital-providing shareholders from managing directors.

Applied carefully, "Shareholders provide share capital and directors run incorporated companies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both corporations and limited liability companies fall under incorporated ownership.

Applied carefully, "Corporations and limited liability companies are examples of incorporated business forms" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal personhood is the defining feature of incorporated businesses.

Applied carefully, "Incorporated businesses are legal persons that exist separately from their owners in law" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Registration or trading names do not make unincorporated partnerships separate legal entities.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Employing staff does not confer incorporated legal personality on a sole proprietorship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Only incorporated businesses are legal persons; unincorporated ones are not.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partners remain in an unincorporated structure unless the firm is formally incorporated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnerships are listed as unincorporated and can involve multiple owners.

Applied carefully, "Partnerships are unincorporated businesses that may have more than one owner" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations are incorporated legal persons.

Applied carefully, "Corporations are incorporated businesses and legal persons in their own right" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited liability companies share incorporated status with corporations.

Applied carefully, "Limited liability companies belong among incorporated forms alongside corporations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Hiring managers does not change a partnership''s unincorporated legal structure.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Both sole traders and partnerships are unincorporated forms.

Applied carefully, "Sole traders and partnerships both fall under unincorporated ownership in the overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The overview states that owners and managers are typically identical in unincorporated firms.

Applied carefully, "In unincorporated businesses, owners and managers are typically the same persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholders need not be directors; ownership and management may diverge.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'A managing sole trader exemplifies unincorporated owner-manager unity.

Applied carefully, "A sole trader who manages daily operations illustrates the usual owner-manager overlap in unincorporated forms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Task specialisation among partners does not make a partnership incorporated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Directors run incorporated companies; shareholders need not manage directly.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.4.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Employment does not transform a sole proprietorship into an incorporated legal person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A single decision-making owner matches the sole trader pattern.

Applied carefully, "The farm operates as an unincorporated sole trader in which the owner and manager are typically the same person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated farms lack independent legal entity status.

Applied carefully, "As an unincorporated business, the farm is not a legal entity of its own distinct from the proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors characterise incorporated businesses, not a sole proprietor farm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability companies are incorporated regardless of industry sector.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal personhood is confined to incorporated structures in the ownership overview.

Applied carefully, "Only incorporated businesses possess legal personality as entities separate from their owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnership agreements govern relations among partners but do not create a separate legal person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Business branding does not confer incorporated legal personality on a sole trader.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private limited companies remain incorporated legal persons without public listing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The core distinction is legal entity status, not taxation alone.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Director-led operations within a separate legal person indicate an incorporated corporation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Corporations are incorporated legal entities distinct from owners.

Applied carefully, "The corporation is an incorporated legal person separate from its shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated structures allow shareholders to own without managing operations.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The overview assigns capital provision to shareholders and management to directors.

Applied carefully, "Shareholders provide share capital while directors run this incorporated company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders typically combine ownership and management without a shareholder-director split.

Applied carefully, "Unincorporated sole traders follow the same shareholder-director split as this manufacturing corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Multiple owners are possible in unincorporated partnerships.

Applied carefully, "Partnerships may have more than one owner yet remain unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders combine single ownership with typical self-management.

Applied carefully, "Sole traders typically have one owner who also manages the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple shareholders characterise incorporated share ownership, not unincorporated status.

Applied carefully, "Having multiple shareholders automatically means a firm is unincorporated" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations retain incorporated legal personality with any number of shareholders.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Partner co-ownership does not create a separate legal entity in unincorporated partnerships.

Applied carefully, "Unincorporated businesses are not legal entities of their own even when several partners co-own the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status means the firm is not a legal entity of its own.

Applied carefully, "The ownership overview treats unincorporated firms as lacking independent legal entity status from their proprietors or partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated businesses are legal persons distinct from owners.

Applied carefully, "Incorporated firms possess legal personality that exists separately from natural-person owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner-manager overlap is typical where ownership and management coincide in unincorporated forms.

Applied carefully, "Sole traders and partners usually combine ownership with direct management in unincorporated structures" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated governance permits owners who do not manage and managers who do not own shares.

Applied carefully, "Shareholders and directors may represent different persons within incorporated companies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The diagram explicitly maps these forms to unincorporated and incorporated sides respectively.

Applied carefully, "Figure 9 groups sole traders and partnerships under unincorporated ownership and places corporations plus limited liability companies under incorporated ownership" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole traders exemplify owner-manager unity in unincorporated forms.

Applied carefully, "Sole traders typically both own and manage their unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partners typically manage as well as own in unincorporated partnerships.

Applied carefully, "Partners in partnerships usually combine ownership with active management roles" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital flows from shareholders to incorporated firms.

Applied carefully, "Shareholders in corporations provide share capital to the incorporated legal person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Directors handle company management in incorporated structures.

Applied carefully, "Directors run incorporated companies on behalf of shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Revenue size does not confer legal personality on unincorporated businesses.

Applied carefully, "Unincorporated businesses cannot be legal persons even when they earn large revenues" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The overview lists sole traders among unincorporated ownership forms.

Applied carefully, "Sole traders and sole proprietors are unincorporated forms of business ownership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships are unincorporated and may have multiple owners.

Applied carefully, "Partnerships are unincorporated businesses that may involve more than one owner" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations are incorporated with separated ownership and management roles.

Applied carefully, "Corporations are incorporated legal persons with shareholders and directors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Contracting does not by itself determine incorporated versus unincorporated status.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited liability companies share incorporated classification with corporations.

Applied carefully, "Limited liability companies are incorporated businesses alongside corporations" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A single managing owner matches the unincorporated sole trader pattern.

Applied carefully, "The café is an unincorporated sole trader in which the owner and manager are typically the same person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Public trading does not create separate legal personality for a sole proprietorship.

Applied carefully, "Because the café serves the public daily, it becomes an incorporated legal person independent of the proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors belong to incorporated structures, not a sole proprietor café.

Applied carefully, "Shareholders provide share capital while directors run this one-person café operation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated cafés lack independent legal entity status.

Applied carefully, "The café is not a legal entity of its own separate from the proprietor as an unincorporated business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations and limited liability companies are incorporated, unlike sole proprietorships.

Applied carefully, "Corporations and limited liability companies share unincorporated status with sole proprietorships" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole proprietors manage directly; they do not use a shareholder-director split.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Incorporated structure permits separation of owning shareholders from managing directors.

Applied carefully, "Incorporated businesses allow owners and managers to be different persons through shareholders and directors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Task delegation among partners does not incorporate the partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The overview links shareholders with capital and directors with running the company.

Applied carefully, "Shareholders provide share capital to incorporated companies whose directors run operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner-manager overlap is typical of unincorporated forms.

Applied carefully, "Unincorporated businesses typically combine ownership and management in the same persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Growth and staffing do not change a sole trader''s unincorporated status.

Applied carefully, "A sole trader remains unincorporated even when the business grows and hires many employees" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Name registration alone does not create incorporated legal personality for a partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited liability companies are incorporated despite limited owner liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Unlisted corporations are still incorporated legal persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Legal personality versus absence of it is the central classification criterion.

Applied carefully, "The overview distinguishes ownership forms primarily by whether the business is a legal person, not by firm size alone" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Figure 9 lists sole traders and partnerships among unincorporated forms.

Applied carefully, "Sole proprietorships and partnerships appear on the unincorporated side of the ownership classification diagram" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations and limited liability companies are incorporated forms in the summary.

Applied carefully, "Stock corporations and limited liability companies appear on the incorporated side of that diagram" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated firms lack separate legal personality from owners.

Applied carefully, "No unincorporated business constitutes a legal entity wholly separate from its owners under the overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal personhood is the incorporated marker in the framework.

Applied carefully, "Every incorporated business counts as a legal person in the classification framework" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholder capital and director management define incorporated governance.

Applied carefully, "Funding from shareholders paired with management by directors typifies incorporated company structure" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Activity scale does not convert an unincorporated partnership into an incorporated entity.

Applied carefully, "A partnership conducting client projects remains unincorporated even when revenue is substantial" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated legal personality persists regardless of geographic scope.

Applied carefully, "An incorporated corporation remains a legal person whether it operates locally or internationally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders typify owner-manager unity in unincorporated forms.

Applied carefully, "Sole traders combine ownership and management as unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated governance allows passive share ownership separate from management.

Applied carefully, "Shareholders may own an incorporated company without participating in daily management" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated firms lack independent legal entity status.

Applied carefully, "Unincorporated status implies the business is not a separate legal person from its owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Separate legal personhood is the incorporated marker in the overview.

Applied carefully, "Legal personality separate from owners identifies incorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated firms are not legal entities of their own.

Applied carefully, "Absence of separate legal personality identifies unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders and partnerships are listed as unincorporated forms.

Applied carefully, "Sole traders and partnerships fall on the unincorporated side of the ownership divide" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations and limited liability companies are incorporated forms.

Applied carefully, "Corporations and limited liability companies fall on the incorporated side of the ownership divide" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ownership and management may diverge in incorporated structures.

Applied carefully, "In incorporated businesses, shareholders need not manage and directors need not own shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.25' AND tier = 'full';
