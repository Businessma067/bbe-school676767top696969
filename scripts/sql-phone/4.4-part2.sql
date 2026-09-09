-- Update expanded explanations for 4.4-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Private limited companies remain incorporated without public share listing.

Applied carefully, "A limited liability company with private shares is still an incorporated legal person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equal profit sharing among partners does not incorporate the practice.

Applied carefully, "A two-partner professional practice is an unincorporated partnership even when partners share profits equally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships exemplify multi-owner unincorporated businesses.

Applied carefully, "Unincorporated businesses may have more than one owner in partnership form" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Many passive shareholders illustrate separated ownership and management in corporations.

Applied carefully, "Incorporated corporations may have thousands of shareholders who do not manage the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trading names do not confer incorporated status on sole proprietorships.

Applied carefully, "Sole proprietorships are unincorporated even when the proprietor uses a trading name" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Two co-owners may operate as an unincorporated partnership without incorporating.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Practitioners who treat patients and manage scheduling embody owner-manager overlap.

Applied carefully, "Both practitioners act as owner-managers within an unincorporated partnership structure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated partnerships are not legal entities separate from partners.

Applied carefully, "The dental practice lacks legal personality apart from the individual partners who co-own it" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors characterise incorporated firms, not this partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Corporations are incorporated; sole traders are unincorporated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Directors, not shareholders as a rule, manage incorporated companies.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Share capital and stock certificates belong to incorporated share structures.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole traders manage directly without mandatory boards in unincorporated form.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The overview assigns company management to directors, not necessarily to shareholders.

Applied carefully, "Directors run incorporated companies while shareholders need not perform management duties" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships trade without shareholder-director governance mechanisms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited liability companies are listed among incorporated forms.

Applied carefully, "Limited liability companies are incorporated businesses and legal persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Both are incorporated legal structures in the summary diagram.

Applied carefully, "Corporations and limited liability companies share incorporated status in the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders are unincorporated; limited liability companies are incorporated.

Applied carefully, "Sole traders and limited liability companies are grouped together as unincorporated forms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Private companies remain incorporated without exchange listing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnerships lack legal personality; limited liability companies are separate legal persons.

Applied carefully, "Partnerships and limited liability companies both lack separate legal personality from owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Tax treatment alone is not the textbook criterion; legal personality defines incorporation.

Applied carefully, "Paying corporate tax is evidence of incorporated status because unincorporated owners never face business taxation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Formal partner agreements do not create a separate incorporated legal person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Secondary share transfers do not dissolve the corporation''s legal personality.

Applied carefully, "An incorporated corporation remains a legal person if shareholders sell shares to new investors on the secondary market" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Tax registration does not convert a sole proprietorship into an incorporated entity.

Applied carefully, "Sole traders remain unincorporated when the proprietor registers for value-added tax" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Passive shareholders with active directors exemplify incorporated governance separation.

Applied carefully, "Directors may manage an incorporated company while shareholders remain passive capital providers" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole traders are unincorporated single-owner forms in the classification.

Applied carefully, "A single proprietor running a shop alone exemplifies an unincorporated sole trader" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple owners may coexist within an unincorporated partnership.

Applied carefully, "Joint founding by two or more persons may create an unincorporated partnership with multiple owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated forms lack independent legal entity status.

Applied carefully, "Neither sole traders nor partnerships constitute separate legal persons under the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Direct owner-management is characteristic of unincorporated businesses.

Applied carefully, "Managing owners typify unincorporated firms rather than a shareholder-director split" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Unequal capital shares do not incorporate a partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited liability companies are incorporated legal persons.

Applied carefully, "The company is an incorporated legal person separate from its shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The overview assigns capital to shareholders and management to directors.

Applied carefully, "Shareholders provide share capital while directors run this incorporated business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Privacy of ownership does not remove incorporated legal personality.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Incorporated firms permit separation of owners and managers.

Applied carefully, "Owners and managers need not be the same persons in this incorporated structure" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders are unincorporated and typically lack shareholder-director governance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal personhood is the incorporated hallmark in the ownership overview.

Applied carefully, "Incorporated businesses are legal persons distinct from natural-person owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders are unincorporated and are not legal entities of their own.

Applied carefully, "A sole trader is an unincorporated form because the business lacks separate legal personality from the owner" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships remain unincorporated legal structures without separate personality.

Applied carefully, "A partnership is likewise unincorporated: the firm is not treated as a legal person separate from the partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Licensing does not by itself create incorporated legal personality.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Single-shareholder corporations remain incorporated legal persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole traders exemplify owner-manager unity.

Applied carefully, "Sole traders typically manage the businesses they own as unincorporated firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managing partners typify unincorporated owner-manager overlap.

Applied carefully, "Partners usually participate in management as owners of unincorporated partnerships" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations allow shareholders to remain non-managing owners.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Director management with shareholder capital illustrates incorporated separation.

Applied carefully, "Directors may run an incorporated company while shareholders focus on capital investment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Hiring staff does not change unincorporated legal structure.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Accounting practices do not confer separate legal personality.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'A single managing owner fits the sole trader pattern.

Applied carefully, "The shop is an unincorporated sole trader in which the owner and manager are typically the same person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated shops lack independent legal entity status.

Applied carefully, "The shop is not a legal entity of its own separate from the proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholder-director governance belongs to incorporated structures.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability companies are incorporated regardless of local operation.

Applied carefully, "Limited liability companies share unincorporated classification with sole traders because both may operate locally" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnership deeds govern unincorporated partnerships rather than creating legal persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Corporations are incorporated legal persons in the classification.

Applied carefully, "A stock-issuing corporation qualifies as an incorporated legal person under the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited liability companies are incorporated alongside corporations.

Applied carefully, "A private limited liability company shares incorporated status with a publicly traded corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholders provide share capital in incorporated structures.

Applied carefully, "Investors who buy shares supply share capital to an incorporated company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Director management with non-managing owners typifies incorporated governance.

Applied carefully, "A board of directors may manage an incorporated firm while passive shareholders retain ownership" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Directors typically manage operations; shareholders need not sign staff contracts personally.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shareholder capital and director management may involve different persons.

Applied carefully, "Incorporated businesses may separate owners who provide share capital from managers who direct operations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Delegating bookkeeping does not incorporate a sole proprietorship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Directors need not be shareholders in incorporated companies.

Applied carefully, "Directors run the company in incorporated structures even when they own no shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partner voting does not create incorporated legal personality.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.4.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share issuance belongs to incorporated capital structures, not sole traders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholders supply share capital in incorporated firms.

Applied carefully, "Shareholders provide share capital to incorporated businesses under the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Partnerships are unincorporated and do not raise share capital via stock markets as legal persons.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Directors run incorporated companies in the overview.

Applied carefully, "Directors hold management authority to run incorporated companies" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Direct owner-management typifies unincorporated businesses.

Applied carefully, "Unincorporated owners typically manage their businesses directly rather than through a board of directors" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.4.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shared asset ownership can occur within an unincorporated partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Managing builder-partners illustrate owner-manager overlap.

Applied carefully, "The builders operate an unincorporated partnership in which owners and managers are typically the same persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholder-director governance applies to incorporated firms, not this partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Partnerships lack separate legal personality.

Applied carefully, "The partnership is not a legal entity of its own separate from the partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated forms possess legal personhood unlike unincorporated partnerships.

Applied carefully, "Corporations and limited liability companies differ from this partnership because they are incorporated legal persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Subcontracting does not alter unincorporated sole trader status.

Applied carefully, "A sole trader who subcontracts delivery work remains unincorporated with the proprietor as typical owner-manager" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Non-partner managers do not by themselves incorporate a partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited liability reflects incorporated form, not unincorporated status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dispersed ownership with director management fits incorporated structure.

Applied carefully, "An incorporated corporation with widely dispersed shareholders still relies on directors to run the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset ownership alone does not create legal personality for unincorporated firms.

Applied carefully, "Unincorporated businesses remain non-legal-person entities even when they own substantial physical assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Corporations are incorporated legal persons distinct from owners.

Applied carefully, "The startup is an incorporated legal person separate from its shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor capital with executive management matches incorporated governance.

Applied carefully, "Shareholders provide share capital while directors or senior managers run the incorporated company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Founder involvement in work does not remove incorporated legal personality.

Applied carefully, "Because founders also work on code, the firm must be reclassified as an unincorporated sole trader" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholders may remain non-managing owners in corporations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietors manage directly without shareholder governance requirements.

Applied carefully, "Sole proprietorships require shareholder meetings before the owner may write software" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated businesses lack separate legal entity status.

Applied carefully, "Under the ownership overview, no unincorporated firm exists as a legal entity wholly apart from its owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated businesses possess legal personality.

Applied carefully, "An incorporated firm is recognised in law as a legal person distinct from shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Figure 9 places sole traders and partnerships among unincorporated forms.

Applied carefully, "Sole proprietorship and partnership structures sit on the unincorporated branch of the classification diagram" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations and limited liability companies are incorporated forms.

Applied carefully, "Corporate and limited-liability-company structures sit on the incorporated branch of that diagram" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholder funding and director management characterise incorporated firms.

Applied carefully, "Capital from shareholders combined with executive direction by directors defines incorporated company governance" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Size alone does not determine legal personality in the overview.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Tax routing reflects structure but legal personality is the core split.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Public naming does not create or remove legal personhood.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Industry sector does not define incorporated versus unincorporated status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Legal personality versus its absence is the central textbook distinction.

Applied carefully, "Whether the business is a legal person separate from its owners is the central distinction in the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partner-managed professional firms fit unincorporated partnerships.

Applied carefully, "The firm is an unincorporated partnership rather than an incorporated legal person" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Managing partners embody typical unincorporated owner-manager unity.

Applied carefully, "Partners who manage audits typify owner-manager overlap in unincorporated businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated partnerships are not legal entities of their own.

Applied carefully, "The accounting partnership does not exist as an independent legal person distinct from its partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital and directors characterise incorporated businesses.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability companies are incorporated regardless of service sector.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['International activity does not by itself incorporate a sole trader.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Branding alone does not create incorporated legal personality for a partnership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Hired managers do not automatically convert unincorporated firms into corporations.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Bank lending does not solely determine incorporated versus unincorporated status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Separate legal personhood is the defining incorporated characteristic.

Applied carefully, "Being a legal person distinct from owners defines incorporated businesses in the ownership overview" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shared vineyard ownership can exist within an unincorporated partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Managing sibling-partners illustrate unincorporated owner-manager unity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Incorporated wineries possess separate legal personality from shareholders.

Applied carefully, "The incorporated winery is a legal person separate from its shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholder capital and director management characterise the incorporated winery.

Applied carefully, "Shareholders provide share capital to the incorporated winery while directors run the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Industry does not force identical legal structure across different firms.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated businesses are not legal entities of their own.

Applied carefully, "Classification under Figure 9 denies separate legal entity status to every unincorporated business form" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated businesses are legal persons.

Applied carefully, "Classification under Figure 9 assigns legal personhood to every incorporated business form" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner-manager overlap is typical in unincorporated structures.

Applied carefully, "Proprietors and partners who run daily operations illustrate typical owner-manager unity in unincorporated firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated governance allows different persons to own and manage.

Applied carefully, "Passive shareholders alongside active directors illustrate that ownership and management may diverge in incorporated firms" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Figure 9 explicitly separates these unincorporated and incorporated groupings.

Applied carefully, "The diagram contrasts unincorporated sole traders and partnerships with incorporated corporations and limited liability companies" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Partnerships are unincorporated and lack separate legal personality.

Applied carefully, "A partnership is an unincorporated business that is not a legal entity of its own" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporate legal personhood defines incorporated status.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholders need not manage; partners typically do manage in unincorporated form.

Applied carefully, "Partners and shareholders play identical legal roles because both groups always manage daily operations personally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporate governance separates shareholder capital from director management.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Operating alone describes a sole trader, which remains unincorporated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A self-managing freelancer matches the unincorporated sole trader pattern.

Applied carefully, "The designer operates as an unincorporated sole trader in which the owner and manager are typically the same person" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Invoicing clients does not confer separate legal personality.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Share capital and directors belong to incorporated structures.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Service revenue alone does not make an unincorporated sole trader a legal person.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Contractual liability limits do not convert a sole trader into an incorporated limited liability company.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.4.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit earning does not create separate legal personality for sole proprietorships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Unincorporated businesses are not legal entities of their own.

Applied carefully, "Every unincorporated ownership form in the summary lacks status as an independent legal entity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated businesses are legal persons with shareholders and directors.

Applied carefully, "Every incorporated ownership form in the summary holds status as a legal person with distinct governance roles" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple managing partners fit unincorporated partnership classification.

Applied carefully, "A multi-partner venture may remain unincorporated even when partners share management duties equally" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Listing status does not determine incorporated versus unincorporated classification.

Applied carefully, "Both exchange-listed corporations and privately held limited liability companies remain incorporated legal structures" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.4.50' AND tier = 'full';
