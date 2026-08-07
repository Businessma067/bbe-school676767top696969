-- Update expanded explanations for 4.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. A sole proprietorship is a business owned by one person who also manages and runs the business.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, ownership and day-to-day management rest with a single proprietor. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. The sole proprietor can make all management decisions without necessarily having to consider other opinions.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, centralised control allows the proprietor to decide without mandatory consultation. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Because the business is not a legal entity of its own, profits are reported on the owner''s personal income tax statement.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, without separate legal personality, business profits are taxed as personal income. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. A sole proprietorship is a separate legal person that files corporate income tax independently of the owner.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, a sole proprietorship lacks separate legal personality and is not taxed as a corporation. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Retirement or long-term illness of the sole proprietor may create continuity problems for the business.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, dependence on one manager creates continuity risk when the proprietor retires or falls ill. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Sole proprietorships are easy to establish, especially for small businesses, because there are no financial requirements to start this kind of business.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, no minimum capital requirement makes sole proprietorships straightforward to set up. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Limited liability protects the sole proprietor''s private assets so creditors may claim only assets formally recorded as business property.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because sole proprietors face unlimited liability; private assets are also at stake. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Unlimited liability means creditors may reach the proprietor''s personal property when business debts must be repaid.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, personal assets can be used to satisfy creditors when business funds fall short. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Incorporating as a sole proprietorship grants the owner limited liability equal to the capital originally invested.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, sole proprietorships remain unincorporated and carry unlimited, not limited, liability. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. Trade credit from suppliers eliminates the sole proprietor''s liability for those purchase obligations.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because trade credit is a liability the sole proprietor must repay according to the supplier agreement. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. A sole proprietorship is not a legal entity of its own separate from the business owner.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, the firm lacks independent legal personality distinct from its owner. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. The owner pays tax on the profits that are earned from the business through the personal income tax statement.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, business profits are assessed as the proprietor''s personal taxable income. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Management of the business largely depends on the sole proprietor, who retains responsibility for the most important decisions.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, key strategic and management choices remain with the sole proprietor. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Because profits pass directly to the owner for tax purposes, the business cannot hire employees or enter supplier contracts.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because lack of separate legal personality does not prevent hiring staff or contracting with suppliers. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. If the sole proprietor needs support, he or she can hire personnel while still bearing the central management role.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, personnel may be employed, yet the proprietor keeps ultimate decision authority and risk. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The sole proprietor may hire personnel when additional support is required to run the business.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, sole proprietors may recruit employees to support operations. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. Hiring staff transfers unlimited liability for business debts entirely to the employees rather than the owner.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, employees do not assume the proprietor''s unlimited liability for business obligations. That is why the sentence does not survive careful reading.

Watch the absolute wording "entirely": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Even with hired personnel, it remains the sole proprietor''s task to make the most important management decisions and take all the risk.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, ultimate decisions and business risk stay with the sole proprietor despite hired help. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. The sole proprietor can make all management decisions and does not necessarily have to consider other opinions.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, centralised authority allows unilateral management choices. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Continuity of the business may be disrupted when the sole proprietor cannot continue managing due to long-term illness.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, reliance on one manager creates continuity risk during prolonged absence. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Registering a business name as a sole proprietorship converts the firm into an incorporated legal person with its own tax identity.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, a sole proprietorship remains unincorporated and is not a separate legal entity. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Profits earned by a sole proprietorship are directly reported on the business owner''s personal income tax statement.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, without corporate personality, profits are taxed as the owner''s personal income. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. A sole proprietorship requires substantial minimum share capital before the owner may begin trading legally.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because there are no financial requirements to start a sole proprietorship. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Limited liability protects a sole proprietor''s private home from creditors when business debts exceed available firm assets.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, sole proprietors face unlimited liability; private assets are also at stake. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Two persons who wish to share tasks and risk equally should choose a sole proprietorship rather than a partnership.

This tests discrimination within sole proprietorship / sole traders: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because shared ownership and equal responsibilities align with a partnership structure, not sole tradership. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A sole proprietorship automatically continues unchanged when the owner retires without any transfer arrangement.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, business continuity depends on the proprietor; retirement creates continuity problems without transfer. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Continuity problems may occur if the sole proprietor wants to retire or suffers a long-term illness.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, single-person dependence creates vulnerability at retirement or prolonged illness. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. Because one person owns and manages the firm, succession planning is always simpler than in structures with transferable shares.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because lack of separate shares or partners can complicate orderly succession. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. Retirement of the sole proprietor has no effect on business continuity because staff can legally assume ownership without transfer.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, staff cannot automatically become owners; ownership rests with the sole proprietor. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. The management of the business largely depends on the sole proprietor, who retains the most important decision rights.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, central management authority remains with the sole proprietor throughout operations. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. The sole proprietor is liable for all debts and obligations of the business under unlimited liability.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, unlimited liability makes the proprietor responsible for all business debts. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Unlimited liability applies only to short-term trade credit and not to long-term bank loans secured by property.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because unlimited liability covers all debts and obligations, including long-term secured credit. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Creditors usually ask for assets that can serve as collateral, especially for long-term credit.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, long-term lenders commonly demand collateral such as land or property. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Private assets of the sole proprietor are also at stake if the business fails and debts need to be repaid.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, creditors may reach personal property when business funds are insufficient. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. Pledging collateral for a bank loan fully exempts all remaining private assets from any further creditor claims.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, collateral reduces lender risk but does not remove broader unlimited liability exposure. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Because the sole proprietorship is not a legal entity, profits are reported on the owner''s personal income tax statement.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, absence of corporate personality routes profits to personal taxation. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Operating as a sole proprietorship exempts the owner from income tax on business profits entirely.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because business profits remain taxable as the owner''s personal income. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "entirely": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. The owner pays tax on the profits earned from the business rather than through a separate corporate tax return.

The section on sole proprietorship / sole traders frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, the proprietor pays income tax on business earnings as personal income. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Business profits and the proprietor''s other personal income may appear on the same personal tax assessment.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, combined personal reporting reflects the unincorporated structure. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Separate legal personality is required before profits can be taxed as personal income of the owner.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because sole proprietorships lack separate legal personality yet profits are taxed personally. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A sole proprietorship combines ownership and day-to-day management in a single individual without separate partners.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, one person owns and runs the business in a sole proprietorship. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Sole proprietorships are easy to establish, especially for small businesses, with no financial requirements to start.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, minimal formal capital requirements facilitate establishment. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. The business is not a legal entity of its own, so profits are taxed on the owner''s personal income statement.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, profits flow to the owner''s personal tax without corporate separation. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Unlimited liability means the sole proprietor''s private assets are also at stake when business debts must be repaid.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, creditors may reach personal property under unlimited liability. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. If the sole proprietor needs support, personnel may be hired while the proprietor retains key management decisions.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, staff may assist operations but the proprietor keeps decisive authority. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A sole proprietorship lacks the separate legal personality that allows a corporation to sue and be sued in its own name.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, without incorporation, the business is not an independent legal person. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Profits of a sole proprietorship are reported on the business owner''s personal income tax statement.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, taxation follows the owner personally because there is no separate entity. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Under unlimited liability, creditors may pursue the proprietor''s private assets when business debts remain unpaid.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, unlimited liability exposes personal wealth to business failure. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Easy establishment with no capital requirements makes sole proprietorships accessible for small businesses.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, no minimum capital requirement lowers barriers to starting a sole tradership. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Continuity problems may arise if the sole proprietor suffers a long-term illness or wishes to retire.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, dependence on one manager creates continuity risk. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. The sole proprietor can make all management decisions without necessarily consulting other owners.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, no co-owners require consultation for management choices. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. It remains the sole proprietor''s task to make the most important management decisions and take all the risk.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, ultimate decisions and risk remain with the sole proprietor. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Management of the business largely depends on the sole proprietor rather than on a separate board of directors.

This tests discrimination within sole proprietorship / sole traders: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, there is no corporate board; the proprietor directs the firm. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Even when administrative tasks are delegated, the proprietor retains authority over the most important management decisions.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, delegation of routine work does not remove the proprietor''s decisive role. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Hiring personnel means the employees rather than the proprietor decide the firm''s strategic direction.

This tests discrimination within sole proprietorship / sole traders: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

The statement overreaches because employees execute tasks; strategic authority stays with the proprietor. The trap is to agree with the topic while missing the one detail that breaks the logic.

If two ideas are related, the statement may be false because it attributes the feature to the wrong member of the pair.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Sole proprietorships are easy to establish because there are no financial requirements to start this kind of business.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, minimal entry barriers make sole tradership accessible for small ventures. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. A sole proprietorship is owned and managed by one person who bears the central operational responsibility.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, single ownership and management define the structure. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Stepping away through retirement or prolonged illness may interrupt continuity in a sole proprietorship.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, reliance on one individual creates succession and continuity risk. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Extra money can be sought from investors and/or from banks when personal funds prove insufficient.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, investors and banks can supply finance when personal resources are insufficient. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Because the firm is not a legal entity, profits are taxed on the owner''s personal income tax statement.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, unincorporated status routes profits to personal taxation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Listing a trading name transforms a sole proprietorship into a corporation with its own legal personality.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because registration of a name does not create separate legal personality. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A sole proprietorship remains unincorporated even when the owner registers for tax and hires multiple employees.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, hiring staff and tax registration do not incorporate the business. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The sole proprietor pays personal income tax on business profits because the business is not a legal entity of its own.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, unincorporated status routes profits to personal income tax. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. All kinds of credit, short-term as well as long-term, are liabilities for the sole proprietor.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, every credit arrangement creates a repayment liability for the proprietor. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Collateral requirements apply only to internal sources of finance such as retained profit.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because retained profit is internal finance and involves no creditor collateral. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A sole proprietorship suits one owner who both manages the business and accepts the associated risk.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, single ownership and management align with sole tradership. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A sole proprietorship allows two equal co-owners to divide management rights without a partnership agreement.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, sole proprietorship has one owner; co-ownership requires a different structure. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. A sole proprietorship is the appropriate structure when several investors seek limited liability through transferable shares.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because limited liability and share transfer belong to incorporated forms, not sole tradership. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Two persons who want to share tasks and risk with equal rights would better realise their business as a partnership.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, shared tasks, risk, and equal rights fit a partnership rather than sole ownership. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Partnerships are unnecessary when two founders can rely on sole proprietorship rules to share ownership equally.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because joint founding with equal rights requires a partnership agreement, not sole tradership. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Business profits of an unincorporated sole trader flow directly onto the owner''s personal income tax statement.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, unincorporated profits flow to the owner''s personal tax. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. The owner pays tax on profits earned from the business because the firm is not a separate legal entity.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, absence of legal separation links business profit to personal taxation. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. Personal income tax treatment means the sole proprietorship must issue dividends to the owner before tax is due.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because dividends are a corporate concept; sole traders report profits directly as personal income. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Operating without corporate personality does not exempt the proprietor from tax on business profits.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, business profits remain taxable even without incorporation. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. A separate corporate tax return is required for every sole proprietorship regardless of legal status.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because sole proprietorships report through personal income tax, not a corporate return. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Trade credit from a supplier never requires repayment because deferred payment is a grant from the supplier.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, trade credit must be repaid within the agreed supplier credit period. That is why the sentence does not survive careful reading.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Trade credit from a supplier creates a short-term liability that the sole proprietor must honour.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, supplier credit is a payable liability under the agreed terms. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Long-term bank loans secured by land are excluded from unlimited liability because collateral protects the owner completely.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because collateral reduces lender risk but unlimited liability still exposes the proprietor broadly. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. If the business fails, private assets are also at stake when debts need to be repaid beyond available business funds.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, personal assets can satisfy creditors when business assets are insufficient. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. All kinds of credit, whether short-term or long-term, remain obligations of the sole proprietor.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, every credit form creates proprietor liability. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Registering a commercial trading name automatically gives a sole proprietorship separate corporate legal personality.

Although the subject matter is sole proprietorship / sole traders, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, registration of a name does not create separate legal personality. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Two friends planning equal management shares should form a sole proprietorship rather than a partnership.

The section on sole proprietorship / sole traders frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

Applied to this claim, equal shared management requires a partnership or other multi-owner form. That is why the sentence does not survive careful reading.

Students often remember that two concepts differ but swap the direction of the comparison. Verify which side of the pair is longer, larger, riskier, or more regulated.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Because the firm lacks separate legal personality, business profits are assessed as the proprietor''s personal income.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, unincorporated status routes profits to personal income tax. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Incorporated limited liability automatically applies once a sole trader opens a business bank account.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because a bank account alone does not confer limited liability or incorporation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Hiring several employees automatically incorporates a sole proprietorship as a limited liability company.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because employment does not change legal structure or liability status. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Mandatory minimum share capital must be deposited before any sole proprietorship may legally commence trading.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, no financial requirements apply to starting a sole proprietorship. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. A sole proprietorship is a separate legal person that must file corporate income tax independently of the owner.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because sole proprietorships lack separate legal personality and are not taxed as corporations. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Limited liability protects the sole proprietor when business debts exceed assets held in the business name.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, sole proprietors carry unlimited liability extending to private assets. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The owner pays tax on profits earned from the business through personal income taxation.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, business earnings are taxed as the proprietor''s personal income. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Corporate income tax is assessed on sole proprietorship profits in a separate return from the owner''s personal affairs.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because there is no separate corporate tax entity for a sole trader. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. One person owns, manages, and runs the business while retaining the most important decision authority.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, ownership and management converge in one individual. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Without separate legal personality, business profits are assessed on the owner''s personal income tax statement.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, unincorporated profits are personal taxable income. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. No minimum capital requirement applies when establishing a sole proprietorship for a small business.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, no minimum capital is required to begin trading. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Unlimited liability means private assets are also at stake if business debts must be repaid.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, creditors may reach beyond business assets under unlimited liability. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Continuity problems may occur when the sole proprietor retires or suffers long-term illness.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, single-person dependence creates continuity risk. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Retained profit reinvested in the business counts as an internal source of finance for the sole proprietorship.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, profit kept in the firm supplies internal finance once operations generate surplus. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. The owner''s initial investment from personal savings is classified as an external source of finance.

Start from the textbook definition in sole proprietorship / sole traders. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

Applied carefully, owner investment from outside the operating cycle is external finance. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Retained earnings and sale of unused assets are external sources because they originate outside the business.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because retained profit and asset sales are internal sources generated within the business. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. Bank credit is internal finance for a sole proprietorship because borrowed money is deposited in the business bank account.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because bank credit is external finance regardless of which account receives the funds. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Internal sources of finance avoid financial charges such as interest that apply to borrowed funds.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, internal funds do not carry interest charges unlike creditor finance. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A bank overdraft is a flexible short-term credit instrument once a business bank account has been opened.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, overdraft facilities provide flexible short-term withdrawal beyond the account balance. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Trade credit allows a business to defer payment for purchases according to an agreement with the supplier.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, suppliers may grant a credit period before payment is due. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Interest on a bank overdraft is paid only when the account is overdrawn.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, overdraft interest accrues when the account balance falls below zero. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Long-term bank loans are often based on land and property serving as collateral through a mortgage arrangement.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, property-backed mortgages commonly secure long-term bank lending. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Trade credit from suppliers is classified as long-term debt finance because payment is deferred.

Start from the textbook definition in sole proprietorship / sole traders. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

The statement overreaches because trade credit typically covers short-term purchase obligations, not long-term finance. The trap is to agree with the topic while missing the one detail that breaks the logic.

Near-miss definitions are deliberately written to sound familiar. Compare the statement phrase by phrase with the book version instead of trusting the overall topic.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Most sole proprietors invest their own savings in their business as an external source of finance.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, owner savings are a common external funding source at establishment. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. If the sole proprietor lacks financial funds, setting up the business will be very difficult.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, limited personal funds constrain the ability to launch and operate. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Personal savings invested at start-up are internal finance because they are generated from earlier business profits.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because start-up savings are owner investment (external), not retained operating profit (internal). The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. No financial requirements to start a sole proprietorship mean the owner never contributes personal capital.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because voluntary owner investment from savings is common despite no minimum rule. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Financial capability of the sole proprietor has no bearing on funds available to the business.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because available funds largely reflect the proprietor''s financial capacity. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Sale of assets that are no longer needed is classified as external finance provided by creditors.

The question tests a precise definition from the section on sole proprietorship / sole traders. Entrance-exam statements often copy a definition almost correctly; one altered phrase is enough to make the whole sentence wrong.

Applied to this claim, proceeds from disposing unused assets are internal funds, not external creditor finance. That is why the sentence does not survive careful reading.

A common mistake is to recognise the topic word (GDP, NPO, SME, liability) and stop reading. The exam rewards checking every qualifier in the definition.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. The owner''s investment from savings is internal finance because the owner and the business are the same legal person.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, owner investment is external finance even though ownership is unified. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Retained profit that is reinvested rather than withdrawn by the proprietor supplies internal finance.

This tests discrimination within sole proprietorship / sole traders: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, reinvested profit remains inside the business as internal finance. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Investor funds and creditor loans from banks are internal sources because they are deposited in the business account.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, investors and banks provide external finance regardless of the receiving account. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Internal sources of finance require paying market interest rates to the proprietor acting as a lender.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because internal finance avoids interest charges; it is not a loan from the owner-as-creditor. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. The owner''s investment and funds from investors and creditors are external sources of finance.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, owner, investor, and creditor funds enter from outside accumulated internal surplus. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Retained profit and sale of unneeded assets are internal sources of finance once operations generate surplus.

The relevant theory comes from sole proprietorship / sole traders. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, retained earnings and asset sales fund the firm from within. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. All kinds of credit, short-term and long-term, are liabilities for the sole proprietor.

The topic is sole proprietorship / sole traders, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, every credit arrangement creates repayment obligations for the proprietor. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. If revenues exceed expenses, profit can be retained and reinvested unless the sole proprietor withdraws it.

The scenario is a worked example of sole proprietorship / sole traders. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, surplus profit may be reinvested or taken by the proprietor. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Unlimited liability still applies to the sole proprietor whether finance is sourced internally or externally.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, unlimited liability persists regardless of whether finance is internal or external. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Entry as a sole trader is straightforward because no financial requirements must be met before starting this type of business.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, no minimum capital requirement simplifies start-up. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Most sole proprietors invest their own savings when launching the venture.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, personal savings commonly seed the business. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Extra money can be sought from investors and/or from banks when personal funds are insufficient.

Here you must apply ideas from sole proprietorship / sole traders to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, investors and banks provide additional external funds when needed. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Once operating, internal sources such as retained profit may supplement external borrowing.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, operating surplus can be reinvested alongside external finance. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Lenders extending long-term credit commonly require assets that can serve as collateral.

This statement draws on sole proprietorship / sole traders. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, long-term lenders commonly demand security such as land or property. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.1.25' AND tier = 'full';
