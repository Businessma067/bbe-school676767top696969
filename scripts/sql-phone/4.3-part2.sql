-- Update expanded explanations for 4.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Private limited companies are unincorporated businesses because their shares are not publicly traded.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, they remain incorporated legal persons despite private ownership. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Shares in a private limited company may be sold freely to the general public on any stock exchange.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because private shares are not freely sold to the public on exchanges. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Private limited companies are incorporated businesses with limited liability for shareholders.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, private limited firms combine incorporation with limited liability. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Private limited companies need not list shares on a stock exchange to exist as legal persons.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, listing is not required for incorporated status. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Shareholders in a private limited company are typically not liable beyond the capital they invested.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, liability is generally capped at invested capital. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Sole proprietorships and partnerships must satisfy the same minimum capital requirements as large listed corporations.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because minimum capital rules target certain incorporated forms, not sole traders or partnerships. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Some incorporated forms face minimum capital requirements that must be met when the company is established.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, some corporations must meet capital thresholds at formation. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Minimum capital rules aim to protect creditors by ensuring a base equity buffer in the corporation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, minimum capital provides a creditor protection buffer. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Meeting minimum capital requirements guarantees that shareholders will receive annual dividend payments.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, dividends remain discretionary even after capital requirements are met. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Corporations remain more difficult to set up than unincorporated businesses partly because of formal capital and registration rules.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, formal capital and registration add setup complexity versus unincorporated firms. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Corporations planning large projects may use only share capital and cannot issue bonds or borrow from banks.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because corporations may combine equity with bonds and bank loans. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Issuing bonds may offer a lower interest rate than a comparable bank loan for large-scale investment.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, bond interest may undercut comparable bank rates. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Bonds, like shares, may be securities traded on regulated financial markets subject to authority oversight.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, bonds can trade on regulated markets alongside shares. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Bond finance adds debt obligations, whereas share capital does not create a contractual repayment like a loan.

This tests discrimination within corporations and limited liability: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, debt must be repaid; equity does not carry the same obligation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. The corporation remains a legal person that can contract for the plant independently of bondholders'' personal assets.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the incorporated firm contracts in its own name with limited owner exposure. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Shareholders who do not sit on the board are barred from attending the annual stockholders'' meeting.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, shareholders may attend meetings even if they are not directors. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Investors may buy shares partly to attend the annual stockholders'' meeting and vote on major decisions.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, voting rights motivate attendance at the annual meeting. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Preferred shareholders usually trade stronger dividend claims for reduced or no voting rights at that meeting.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, preferred stock often limits voting in return for dividend priority. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Voting at the stockholders'' meeting legally obliges shareholders to perform the chief executive officer''s daily duties.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because voting does not require shareholders to manage daily operations. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Electing directors removes shareholders'' ownership stake because management and ownership must be identical.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, ownership persists even when management is delegated. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Corporations are incorporated businesses that are legal entities separate from their owners.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, separate legal personality defines incorporation. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Shareholders'' liability is usually limited to the amount invested when purchasing shares.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, limited liability caps owner exposure at invested capital. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Share capital divided into shares can raise large sums when investors buy newly issued stock.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, primary share sales can mobilise substantial equity. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Corporations may list shares on a regulated stock exchange but are not required to do so.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, listing facilitates trading but remains optional. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Management by a board of directors allows separation of ownership and control within the corporation.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, boards run operations while shareholders may remain passive owners. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Investors may only acquire shares by purchasing them from the corporation at the annual stockholders'' meeting.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, shares trade at issue and on secondary markets, not only at meetings. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Once shares are issued, no further investor may buy stock unless the corporation executes a new IPO each year.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, secondary trading continues without repeating an ipo annually. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Investors may acquire shares directly from the corporation at issue or purchase them later from an existing shareholder.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, shares trade at initial issue or on the secondary market between shareholders. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Buying at initial issue provides share capital to the corporation; buying later transfers ownership between investors.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, only primary sales fund the issuer; later trades swap owners. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Persons who buy shares become shareholders regardless of whether purchase occurs at issue or on the secondary market.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, any share purchase confers shareholder status. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. The contract win obliged the firm to register the rally amount as new share capital on its books.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because secondary rallies do not increase registered share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. Expectations of higher future profits from the contract can increase demand and push up share prices.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, profit expectations can lift investor demand and prices. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Shareholders holding stock during the rally may benefit from capital growth if they later sell at higher prices.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, holders may realise capital growth on later sales. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. The corporation receives the full trading profit whenever existing shareholders sell to new buyers on the exchange.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, trade proceeds flow between investors, not to the issuer. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Rising prices after issue force the board to pay immediate dividends equal to the price increase.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because dividends remain discretionary and are not tied to price spikes. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. A stock exchange is regulated by the authorities as a financial market for securities.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, authority oversight defines regulated exchanges. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Corporations seeking a listing must comply with certain rules and fulfil listing requirements.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, listing demands compliance with exchange rules. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Shares introduced on an exchange at the IPO are thereafter priced largely by demand and supply.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, post-ipo prices reflect market demand and supply. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Bonds as well as shares may be bought and sold on such regulated markets.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, bond trading may occur alongside share trading. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Listing facilitates trading among many people and businesses but does not oblige the issuer to receive later trade proceeds.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, later trades benefit transacting investors, not the issuer''s capital account. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Limited liability means shareholders are personally liable for all corporation tax debts without limit.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, shareholders are not generally liable for all corporate tax debts beyond investment. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Shareholders'' liability is usually confined to the money they invested when buying shares.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, exposure is usually capped at subscribed capital. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Limited liability protects shareholders from ever losing the market value of their shares when prices fall.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, market losses on share values can still occur. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Managers who are not shareholders always enjoy the same limited liability cap as investors who bought stock.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, non-shareholder managers do not automatically share the same liability shield as investors. That is why the sentence does not survive careful reading.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Limited liability distinguishes corporations from many unincorporated forms where owners face broader personal exposure.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, unlimited or broader owner liability marks many unincorporated structures. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Every corporation must distribute the entire annual profit as dividends to keep its legal personality.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because legal personality does not require distributing all profit as dividends. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Shareholders may sue to force dividend payments equal to the latest market price of their shares.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because dividends are not fixed to market prices nor strictly mandatory. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Omitting dividends always leaves share prices unchanged because investors care only about capital growth.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because omitted dividends can weaken demand and affect prices. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Dividends are interest payments on share capital that the corporation must pay regardless of profit.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, dividends come from profits, not mandatory interest on capital. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Dividends are discretionary profit distributions; prolonged omission can reduce share attractiveness and demand.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, discretionary dividends affect attractiveness when withheld too long. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Private limited status removes limited liability because shares are not publicly traded on an exchange.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, private limited firms retain limited liability without public listing. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. The manufacturer remains an incorporated legal person able to own equipment and hire workers.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, incorporation gives separate legal personality for assets and hiring. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Minimum capital requirements apply only to corporations that immediately list on a stock exchange.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because minimum capital can apply at formation regardless of listing plans. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Family shareholders must personally manage production because private companies forbid elected boards.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, private firms may still elect boards and delegate management. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Shares need not be sold to the general public on an exchange for the firm to operate as a private limited company.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, private limited companies operate without public share sales. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Comparatively low interest rates can increase share demand by making other investments less attractive.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, low rates raise the relative appeal of equity. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Comparatively high interest rates can pull investors toward interest-bearing alternatives and away from shares.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, high rates favour fixed-return alternatives over shares. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Economic growth indicators form part of the wider set of factors influencing share demand.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, growth signals are among demand influences cited for shares. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. High interest rates always increase share prices because corporations earn more from bank deposits.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because high rates tend to reduce share demand rather than automatically lift prices. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Demand shifts from such conditions affect market prices but do not by themselves add share capital to the issuer after issue.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, price effects from demand do not fund the issuer after shares are issued. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Comparatively higher inflation may support share demand when investors expect share prices to rise with general prices.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, inflation may lift expected share values and demand. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Inflation is among the economic indicators that can influence demand for corporate shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, inflation appears among cited demand influences. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Thriving economic conditions with available investable funds can coincide with stronger share demand.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, prosperity can coincide with stronger equity demand. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Higher inflation obliges the issuing corporation to inflate its registered share capital whenever consumer prices rise.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because registered share capital is not automatically adjusted with inflation. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Price changes driven by inflation expectations benefit trading shareholders rather than financing the issuer anew.

The section on corporations and limited liability frequently contrasts two similar ideas side by side. A comparison statement is true only if the relationship is stated in the right direction and applies to the right concept pair.

In this setting, market gains from inflation expectations accrue to shareholders, not issuer finance. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The management board''s highest-ranking officer is the Chief Executive Officer who leads corporate execution.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the ceo heads the management board. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. The Chief Financial Officer must be the largest shareholder before overseeing finance and accounting functions.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because cfo duties do not require holding the largest share block. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. The Chief Operating Officer may manage operations as a member of the board of directors.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, the coo may sit on the board managing operations. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. Shareholders elect the board but are neither obliged nor entitled to manage daily operations themselves.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, capital providers need not run daily operations. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Separation of ownership and management is a defining feature of corporate organisation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, corporations separate owners from professional managers. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Proceeds from shares sold at the IPO entered the corporation as share capital when investors bought at issue.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, primary ipo sales raise share capital inside the firm. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Doubling of the secondary-market price after the IPO doubled the cash share capital available inside the firm.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, secondary doubling does not double internal cash capital. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. The startup must surrender half of trading gains on the exchange to regulators as additional equity.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because regulators do not capture trading gains as issuer equity. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Existing shareholders who hold stock after the IPO owe the corporation the difference between issue price and market price.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, holders are not obliged to pay market premiums back to the firm. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A higher post-IPO market price creates an automatic right for the corporation to issue unlimited new debt free of interest.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, higher prices do not grant unlimited interest-free debt rights. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A corporation may own land and property in its own name rather than in shareholders'' personal names.

This tests discrimination within corporations and limited liability: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, incorporated firms hold assets in the corporate name. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Because shareholders have limited liability, the corporation itself cannot be sued for breach of contract.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because the legal entity remains suable despite owners'' limited liability. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Hiring employees requires each shareholder to sign every employment contract personally.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because the corporation hires staff under its own legal personality. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The corporation may sue and be sued as a legal entity independent of individual owners.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, litigation runs against or by the firm itself. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Legal personality allows the business to close contracts that bind the corporation, not shareholders personally.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, contracts bind the corporation rather than each owner personally. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. The full amount investors pay on the exchange after the IPO is credited to the corporation''s share capital account.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, secondary payments go to selling shareholders, not share capital. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Secondary-market buyers pay share capital directly to the issuer unless the board approves a private sale.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, exchange trades normally occur between investors, not as issuer capital inflows. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. Market premiums above issue price during secondary trading increase the corporation''s permanent equity base.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because trading premiums do not expand permanent registered equity. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. Only proceeds from shares bought at initial issue from the corporation typically increase its share capital.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, primary issue proceeds are what raise issuer share capital. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Redemption of share capital is required whenever secondary-market prices fall below the IPO price.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, price falls do not force capital redemption. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. People who found the corporation and own shares need not manage the business themselves.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, founders may remain investors without managing. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Managers running the corporation need not own shares of the business.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, managers may be non-owners appointed to the board. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Shareholders may elect directors to represent their interests while remaining passive investors.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, passive shareholders elect representatives to the board. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. The board of directors, not every shareholder, makes major business decisions in typical corporations.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, major decisions sit with the board rather than each owner. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Founders who sell all their shares immediately lose the corporation''s legal personality and incorporation status.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, incorporation persists; ownership can change without losing legal personality. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. The corporation was not legally obliged to pay dividends despite shareholders'' wish for annual income.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, dividends are discretionary, not legally guaranteed each year. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Retaining all profits guarantees rising share prices even when no dividends are paid.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because retention alone does not guarantee price rises. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Shareholders'' limited liability disappears in years when dividends are omitted.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, limited liability is unaffected by dividend policy. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. Prolonged omission of dividends may make shares less attractive and weaken investor demand.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, long non-payment can reduce attractiveness and demand. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Dividends, when paid, represent part of the corporation''s profits distributed to shareholders.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, dividends distribute a portion of profits to owners. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Share capital is the capital of a corporation divided into shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, share capital is capital split into shares. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Each share, also called stock, represents a portion of the total share capital.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, stock represents a fraction of total share capital. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. Selling newly issued shares to investors can raise substantial funds for the corporation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, primary sales can raise large sums. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Share capital is generally long-term capital that the company usually does not redeem.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, equity is typically permanent and unredeemed. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Shareholders are persons who buy shares and thereby own a stake in the corporation.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, share buyers become owners of the corporation. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Initial share sales can raise large amounts of share capital for the corporation.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, primary issues fund the corporation through share capital. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Later exchange trading transfers shares among investors without adding finance to the issuer.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, secondary trades move ownership without issuer finance. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Demand and supply on the exchange determine prices after the initial introduction of shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, post-introduction prices follow market forces. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Investors may seek dividends, capital growth, or voting influence when buying stock.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, motives include income, growth, and voting rights. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Economic growth, inflation, and interest rates can all influence demand for shares.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

Applied carefully, multiple macro indicators shape share demand. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Share capital is a principal financial fund available to corporations alongside borrowing.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, equity and debt both fund corporations. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Loans and credit also form part of the financial funds corporations may use.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, borrowing complements share capital. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Corporations typically have more funding options than sole proprietors or partnerships.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, incorporated firms access broader finance channels. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Bonds may be issued as an alternative to bank loans for raising debt finance.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, bonds compete with bank loans as debt sources. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Share capital differs from debt because it does not create the same contractual repayment obligation as a loan.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, equity lacks the fixed repayment duty of debt. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. A corporation cannot raise share capital unless its stock is listed on a public stock exchange.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, private placements can raise equity without listing. That is why the sentence does not survive careful reading.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. An unlisted corporation may still be a legal person owning laboratories and hiring researchers.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, unlisted firms remain incorporated legal persons. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Private share placements can supply equity without an initial public offering on an exchange.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, equity can be raised off-exchange through private sales. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Shareholders in such a corporation retain limited liability tied to their investment.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, limited liability applies to private shareholders. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Listing remains optional; exchange trading mainly facilitates secondary transfers among many market participants.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, listing is optional and mainly aids broad secondary trading. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. At the annual stockholders'' meeting, common stockholders ordinarily exercise voting rights on major resolutions.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, common stock usually carries meeting votes. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Preferred shareholders always hold superior voting power over common shareholders at every meeting.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because preferred holders typically forgo voting for dividend priority. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Preferred shares often trade voting rights for priority in dividend payments.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, preferred shares exchange votes for income preference. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Investors may purchase shares partly to influence corporate decisions through those voting rights.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, voting rights motivate some equity purchases. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Dividend priority for preferred stock does not eliminate the discretionary nature of overall dividend policy.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, even preferred priority leaves dividends discretionary overall. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. The corporation may finance operations through both share capital and loans.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, corporations mix equity with debt finance. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Using bank loans prevents the corporation from also issuing shares to raise equity.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, bank loans do not block subsequent share issues. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Loan capital and share capital are identical because both eliminate shareholder liability completely.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because debt and equity differ; neither removes limited liability for shareholders. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. Shareholders'' liability generally remains limited to their invested capital despite additional borrowing.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, borrowing does not expand shareholders'' personal liability beyond investment. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. Bond issues are unavailable to corporations that already owe money to a commercial bank.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, bond issues may still be used alongside existing bank debt. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.50' AND tier = 'full';
