-- Update expanded explanations for 4.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. A corporation is a legal entity of its own with the same rights and obligations as natural persons in business life.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, corporations are legal persons with rights and obligations comparable to natural persons. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. As a legal person, a corporation can own land and property, hire people, and close contracts.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, legal personality lets the firm own assets, employ staff, and contract independently. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A corporation may sue other parties and may itself be sued in its own name.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the incorporated business can initiate and face litigation in its corporate name. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Shareholders who found the corporation need not be involved in day-to-day management of the business.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, founders who hold shares are not required to run daily operations. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Managers of a corporation need not own a share of the business.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, directors and executives may manage the firm without holding shares. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. When share prices rise on the exchange after the IPO, the issuing corporation automatically receives fresh share capital equal to that gain.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because post-issue price gains do not add new share capital to the issuer. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A sustained increase in secondary-market prices injects permanent equity finance into the issuer beyond the original issue proceeds.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, secondary trading transfers ownership among investors; it does not fund the corporation anew. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Higher post-issue market prices oblige the corporation to pay matching dividends to all past and future shareholders.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because dividends remain discretionary and are not tied to market price movements. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. An increase in share prices after they have been issued does not have any additional financing effect for the issuing corporation.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, only primary issue proceeds finance the issuer; later price rises benefit shareholders. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. The corporation shares equally in capital gains when existing shareholders sell stock to one another at higher prices.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, trading gains accrue to selling shareholders, not to the issuing corporation. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Shareholders'' liability is usually limited to the amount of money they invested when buying the shares.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, limited liability confines exposure to the capital subscribed for shares. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Limited liability means shareholders can never lose any part of the money they paid for their shares.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because shareholders can lose invested capital if the business fails or share values fall. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. The capital of a corporation is divided into shares, which is why it is called share capital.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, dividing capital into shares defines share capital. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Persons who buy shares become shareholders of the corporation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, purchasing shares confers shareholder status. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Share capital is usually not redeemed by the company and serves as long-term or permanent capital.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, share capital is typically permanent long-term equity not repaid like a loan. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Because they provided share capital, the founders must personally manage every major business decision.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, shareholders supply capital but need not manage the firm. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. The appointed chief executive must own shares before the board of directors may elect that person.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because managers need not own shares to serve on the board. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — This statement is correct. The corporation is managed by a board of directors elected by shareholders to make major business decisions.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, shareholders elect a board to take major decisions and represent them. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. The highest-ranking manager of the board is called the Chief Executive Officer.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the ceo heads the board of directors. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Other board members may include the Chief Financial Officer and Chief Operating Officer.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, cfo and coo roles may sit on the management board. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Corporations are more difficult to set up than sole proprietorships or partnerships.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, incorporation involves more formal steps than unincorporated forms. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Corporations usually have more options to raise financial funds than sole proprietors and partnerships.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, corporations can tap equity markets and debt sources more readily. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — This statement is false. Corporations rely exclusively on share capital and cannot raise loans or credit like other businesses.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because corporations also use loans and credit alongside share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "exclusively": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Shareholders bear unlimited liability for all corporation debts beyond their original investment.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, shareholder liability is usually limited to invested capital. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Financial funds for corporations mainly comprise share capital as well as loans and credit.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, corporate finance combines equity from shares with borrowed funds. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. If share capital equals one million euros divided into one hundred thousand shares, each share represents one per cent of the capital.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because each share would represent 0.001 per cent, not one per cent, of that capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. If all one hundred thousand shares are sold at issue, the corporation gains one million euros as share capital.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, selling all issued shares at par raises the full one million euros of share capital. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Shares can only be purchased from other shareholders and never directly from the corporation at initial issue.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because shares may be bought at initial issue directly from the corporation. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — This statement is false. Each share sold at issue must always be priced above its nominal share of the registered capital.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because issue pricing follows market and listing conditions; it is not fixed above nominal value in all cases. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Huge amounts of money can be raised from the sale of shares when investors buy newly issued stock.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, primary share sales can mobilise very large sums for the corporation. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Every corporation must list its stock on a stock exchange before it may hire employees or close contracts.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because listing is optional; unlisted corporations may still operate as legal persons. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. A stock exchange is an unregulated venue where only the issuing corporation may trade its own shares.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because exchanges are regulated markets open to many buyers and sellers. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Listing on a stock exchange removes the need for corporations to comply with any authority-imposed rules.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because listing itself requires complying with rules and listing requirements. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. Shares introduced on a stock exchange always trade at a fixed price set permanently by the issuer.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, after introduction, prices are driven by demand and supply. That is why the sentence does not survive careful reading.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A stock exchange is a financial market, regulated by the authorities, where shares and other securities can be bought and sold.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, exchanges are authority-regulated markets for trading securities. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Shares can be bought at the time they are initially issued by the corporation or later from another shareholder who sells.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, investors may buy at primary issue or on the secondary market. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. The introduction of shares on a stock exchange at a set price is also called an initial public offering.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the first exchange introduction of shares is termed an ipo. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Every subsequent resale of shares on the exchange adds the full sale price to the corporation''s share capital account.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because secondary resales transfer shares among investors without increasing issuer share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. After the IPO, prices on the exchange are determined by demand and supply among buyers and sellers.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, market prices after listing reflect demand and supply. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — The claim is correct. Beneficiaries of a price rise after issue are the shareholders who hold or trade the stock, not the issuing corporation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, post-issue gains accrue to shareholders, not to the issuing corporation. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Shareholders elect a board of directors to make all major business decisions and represent shareholders.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

In this setting, the board is elected to decide major matters on shareholders'' behalf. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — The claim is correct. The Chief Executive Officer is the highest-ranking manager on the board of directors.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the ceo leads the management board. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A Chief Information Officer may serve on the board alongside other executive officers.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a cio may hold a board seat with defined duties. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A Chief Marketing Officer may be responsible for marketing functions as a board member.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a cmo may manage marketing from the board. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Shareholders who only provide money for share capital are neither obliged nor entitled to manage the company.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, capital providers need neither manage nor hold management rights by default. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Rising expectations that a business will make future profits can increase demand for its shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, profit expectations can draw investors toward a corporation''s stock. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Higher demand for shares when the economy is thriving partly reflects that many people have money to invest.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, prosperity leaves more funds available for equity investment. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Comparatively higher rates of inflation can support share demand because share prices may also increase.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, inflation may lift expected share values and support demand. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Comparatively low interest rates can raise share demand because other investments become less attractive.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, low interest rates reduce the appeal of fixed-return alternatives. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Demand for shares is also influenced by economic indicators such as economic growth, interest rates, and inflation.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, growth, interest rates, and inflation all shape share demand. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Investors may buy shares to provide money for a business they believe in and want to support financially.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, supporting a favoured business is a common investment motive. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — This statement is correct. Investors may seek annual income through dividends paid from the corporation''s profits.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, dividends offer annual income from distributed profits. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Investors may hope for capital growth if share prices rise and the stock can later be sold at a higher price.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, capital growth arises when resale prices exceed purchase prices. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Investors may wish to attend the annual stockholders'' meeting and influence decisions through voting rights.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, meetings allow shareholders to vote on major matters. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — The claim is correct. Shares can be bought either at initial issue by the corporation or later from another shareholder who sells.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, stock may be acquired at issue or through later secondary sales. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. As an incorporated business, the bakery is a legal entity that can own property and hire staff in its own name.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, incorporated firms are legal persons with property and employment capacity. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Because it is private, shareholders face unlimited liability for all bakery debts regardless of investment.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because private limited shareholders still enjoy limited liability on invested capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. The family''s shareholding can remain off a public stock exchange while still conferring limited liability.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, shares need not be exchange-listed to keep limited liability. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. Private limited companies must list on a stock exchange before they may issue any shares to investors.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, private companies issue shares without public listing. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Managers of the bakery are legally required to be the same persons who hold all outstanding shares.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because ownership and management may be separated in corporations. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.3.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Corporations must pay dividends every year because shareholders have a legally fixed income entitlement.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, dividend payments are not legally mandatory each year. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Dividends are part of the profits of the corporation that may be paid to shareholders at management discretion.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, dividends are discretionary distributions from profits. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'FALSE — The claim is false. Withholding dividends always raises share prices because retained profits guarantee immediate capital gains.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, omitted dividends can reduce attractiveness rather than guarantee gains. That is why the sentence does not survive careful reading.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. If no dividends are paid over a longer period, shares might become unattractive and demand may fall.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, prolonged non-payment may weaken demand and pressure prices. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Falling share prices after omitted dividends automatically increase the corporation''s available share capital.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, price falls do not inject share capital into the issuer. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — This statement is correct. Holders of preferred shares usually forgo voting rights at the stockholders'' meeting in exchange for a higher dividend claim.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, preferred stock often trades voting rights for dividend priority. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Preferred shareholders always receive both superior dividends and full voting control over every board appointment.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because preferred holders usually sacrifice voting power for income preference. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Common shareholders typically retain voting rights at the annual stockholders'' meeting.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, common shares generally carry meeting voting rights. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. A corporation cannot issue bonds because bondholders would automatically become preferred shareholders.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, bonds are debt securities distinct from preferred equity. That is why the sentence does not survive careful reading.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. Issuing bonds can be attractive because the interest rate on bonds is often lower than on a comparable bank loan.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, bond finance may cost less interest than comparable bank borrowing. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Share prices on an exchange are set solely by the corporation''s board and never respond to buyer demand.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, exchange prices respond to market demand and supply. That is why the sentence does not survive careful reading.

Watch the absolute wording "never": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. According to the laws of supply and demand, share prices usually rise when demand for the stock is high.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, high demand tends to push prices up under supply-and-demand logic. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. High demand for shares always forces the issuing corporation to create new shares equal to each purchase on the exchange.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, secondary purchases transfer existing shares; they need not trigger new issuance. That is why the sentence does not survive careful reading.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. When demand falls, the corporation must redeem outstanding shares at the latest market price.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because the corporation is not obliged to redeem shares when demand falls. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Secondary trading prices feed directly into the issuer''s balance sheet as additional paid-in share capital.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because secondary trade proceeds do not increase issuer share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.'] WHERE case_id = 'CASE 4.3.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Incorporation means both consultants must remain the only managers regardless of who buys shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, shareholders need not manage; a board may run the firm. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — This statement is correct. Outside investors who buy shares become shareholders without necessarily joining the board of directors.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, shareholders may invest without holding board seats. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. The consultants may retain shares while delegating daily management to the elected chief executive.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, owners can delegate operations to an elected ceo. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The corporation can raise share capital from new shareholders in addition to any bank loans it arranges.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, equity and debt funding may be combined. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Selling shares to outside investors eliminates the need for the corporation to comply with contract law as a legal person.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, legal personality still requires the corporation to honour contracts. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. Share capital must be repaid to shareholders on demand whenever market prices fall temporarily.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because share capital is not repayable on demand like a loan. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — This statement is false. Issuing shares provides short-term credit that the corporation redeems within one accounting year.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because equity is long-term, not short-term credit redeemed annually. The trap is to agree with the topic while missing the one detail that breaks the logic.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Share capital and bank overdrafts serve identical roles because both must be repaid within weeks.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, overdrafts are short-term debt; share capital is permanent equity. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — This statement is correct. Share capital is usually not redeemed by the company and may serve as permanent capital.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, companies typically do not redeem share capital. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Once listed, a corporation must buy back all shares whenever investors sell on the secondary market.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, secondary sales occur between investors without mandatory issuer buybacks. That is why the sentence does not survive careful reading.

Watch the absolute wording "all": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — Evaluated against the textbook standard, this assertion is correct. Corporations may raise financial funds through loans and credit in addition to share capital.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, corporations combine equity with loans and credit. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — This statement is correct. Bonds are securities that can be traded on a stock exchange alongside shares.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, bonds may trade on regulated securities markets. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Issuing bonds may finance large projects at an interest rate often lower than a comparable bank loan.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, bond coupons may undercut comparable bank loan rates. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.', 'FALSE — This statement is false. Bond interest is classified as share capital because bondholders become co-owners of the corporation.

Start from the textbook definition in corporations and limited liability. A statement is true only if every scope word in the definition is respected—location, purpose, distribution rule, or time horizon.

The statement overreaches because bondholders are creditors, not equity owners. The trap is to agree with the topic while missing the one detail that breaks the logic.

Near-miss definitions are deliberately written to sound familiar. Compare the statement phrase by phrase with the book version instead of trusting the overall topic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. A stock exchange is regulated by the authorities and facilitates trading in shares and other securities such as bonds.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, regulated exchanges handle multiple security types including bonds. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.'] WHERE case_id = 'CASE 4.3.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Only natural persons may hire employees; a corporation must contract workers in each shareholder''s personal name.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because legal persons may hire staff in the corporate name. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A corporation as legal person can close contracts, sue, and be sued independently of individual shareholders.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the firm contracts and litigates independently of owners. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Shareholders personally sign every supplier contract even when a corporation has separate legal personality.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, corporate personality binds contracts to the firm, not each owner personally. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Separate legal personality prevents a corporation from owning land because property must rest with natural persons.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

The statement overreaches because corporations may own land and property directly. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. Incorporation removes the corporation''s ability to be sued because liability stops with shareholders.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

Applied to this claim, the corporation itself can be sued despite shareholders'' limited liability. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.'] WHERE case_id = 'CASE 4.3.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — This statement is false. The holiday price surge increased the corporation''s registered share capital by the full market value of the rise.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because secondary price moves do not alter registered share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. Existing shareholders who sold during the surge transferred their voting rights to the corporation itself.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because voting rights pass to buyers, not back to the corporation. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Higher prices after issue reflect changed demand and supply among investors trading existing shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, market prices follow investor demand and supply after issue. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. The corporation must issue bonus shares equal to every euro of secondary-market price increase.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because price rises do not oblige automatic bonus share issuance. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. Shareholders who sold at higher prices realise capital gains; the issuer does not receive those trading proceeds.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, sellers capture capital gains; the issuer receives no trade proceeds. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. If share capital of one million euros is divided into one hundred thousand shares, each share represents a fixed fraction of that capital.

The scenario is a worked example of corporations and limited liability. Translate the story into the textbook category first; only then judge whether the sentence describes that category accurately.

In this setting, each share corresponds to a defined portion of total share capital. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Doubling the market price on the exchange automatically doubles the corporation''s registered share capital on the balance sheet.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, market prices and registered share capital are not mechanically linked after issue. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'TRUE — The claim is correct. Buying shares at initial issue transfers cash to the corporation in exchange for an ownership stake.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, primary purchases fund the corporation and confer ownership. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. A shareholder may sell shares later to another investor without requiring the corporation to redeem the stock.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, secondary sales transfer ownership between investors without obliging the corporation to redeem the stock. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — This statement is false. Each share always carries exactly one vote regardless of whether it is preferred or common stock.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because preferred shares often carry reduced or no voting rights. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "always": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — The claim is false. Listing on a stock exchange is mandatory for every corporation before it may sell products to customers.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, listing is optional for operating as a corporation. That is why the sentence does not survive careful reading.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. An unlisted corporation cannot issue shares to private investors or raise share capital off the exchange.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, unlisted firms may still place shares privately. That is why the sentence does not survive careful reading.

Watch the absolute wording "cannot": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — This statement is false. Initial listing means the corporation will receive every future euro paid whenever shares change hands on the market.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because only ipo proceeds and new issues fund the issuer, not all later trades. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "every": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — The claim is false. Delisting from an exchange automatically converts a corporation into an unincorporated partnership.

Although the subject matter is corporations and limited liability, this is really a logic check on overstatement. Non-profit surpluses, mixed economies, and partial market failure are classic cases where absolute wording fails.

Applied to this claim, delisting does not remove incorporated legal status. That is why the sentence does not survive careful reading.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. A corporation''s stock can but does not have to be listed on a stock market or stock exchange.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, exchange listing remains a choice, not a universal requirement. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — The claim is correct. Expectations of successful new products can raise demand for a corporation''s shares.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, product success expectations can attract buyers. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Expectations of increasing market share can contribute to higher share demand.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

Applied carefully, growing market share signals may lift demand. Nothing in the sentence stretches the concept beyond its standard use.

No qualifying word breaks the definition or scenario, so the answer is true.', 'TRUE — Evaluated against the textbook standard, this assertion is correct. Thriving economic conditions can support share demand because more investors have funds available.

Here you must apply ideas from corporations and limited liability to a concrete situation rather than recite a definition from memory. Ownership, customer type, stakeholder group, or country of production usually decides the verdict.

Applied carefully, prosperity leaves more money available to invest in equity. Nothing in the sentence stretches the concept beyond its standard use.

Every part of the claim aligns with the standard concept, so the statement stands.', 'TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. High interest rates can reduce share demand by making interest-bearing investments more attractive.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, higher interest rates draw funds toward fixed-return assets. The wording matches the textbook relationship without adding extra conditions.

The reasoning chain is complete, so mark the statement true.', 'TRUE — This statement is correct. An increase in share prices after issue benefits shareholders rather than supplying new finance to the issuer.

This tests discrimination within corporations and limited liability: local versus international scope, equity versus debt, product versus market orientation, and similar pairs.

Applied carefully, post-issue gains enrich shareholders, not issuer share capital. Nothing in the sentence stretches the concept beyond its standard use.

The reasoning chain is complete, so mark the statement true.'] WHERE case_id = 'CASE 4.3.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['TRUE — On the Fuhrmann definition used in the entrance exam, the sentence is correct. The chief information officer may sit on the board of directors with defined operational responsibilities.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, a cio may be a board member with it duties. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.', 'FALSE — The claim is false. Shareholders who elected the board must personally perform the chief information officer''s daily technical tasks.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, shareholders delegate operations; they need not run systems personally. That is why the sentence does not survive careful reading.

Because the decisive detail is wrong, mark the statement false.', 'FALSE — The claim is false. Electing a board eliminates shareholders'' right to attend the annual stockholders'' meeting.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, shareholders may still attend meetings and vote. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'TRUE — The claim is correct. The board of directors makes major business decisions on behalf of shareholders who supplied capital.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, the board decides major matters for capital providers. The wording matches the textbook relationship without adding extra conditions.

No qualifying word breaks the definition or scenario, so the answer is true.', 'FALSE — The claim is false. A chief information officer must hold the largest block of shares before joining the management board.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, board members need not be largest shareholders. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.'] WHERE case_id = 'CASE 4.3.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['FALSE — Evaluated against the textbook standard, this assertion is false. Rising secondary-market prices require the issuer to record additional share capital equal to traders'' gains.

The relevant theory comes from corporations and limited liability. Identify which definition or relationship the sentence is trying to test before deciding true or false.

The statement overreaches because market gains are not booked as new issuer share capital. The trap is to agree with the topic while missing the one detail that breaks the logic.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — Evaluated against the textbook standard, this assertion is false. A corporation finances expansion automatically whenever its listed share price reaches a new high.

The topic is corporations and limited liability, but the decisive skill here is reading quantifiers. Words such as never, always, only, or all turn a generally true idea into a claim that can be rejected by one routine counterexample.

The statement overreaches because price highs alone do not fund corporate expansion. The trap is to agree with the topic while missing the one detail that breaks the logic.

Watch the absolute wording "automatically": exam statements often sound plausible until a single scope word turns an otherwise familiar idea into an overclaim.

The statement sounds plausible but fails on precision, so it is false.', 'FALSE — On the Fuhrmann definition used in the entrance exam, the sentence is false. Shareholders who profit from price rises must return part of the gain to the corporation as mandatory equity injections.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, trading profits remain with shareholders unless new shares are sold. That is why the sentence does not survive careful reading.

Once the overclaim or mislabel is exposed, the only consistent answer is false.', 'FALSE — The claim is false. IPO proceeds and later exchange gains are treated identically as recurring share-capital inflows to the issuer.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

Applied to this claim, only primary issue proceeds count as share-capital inflows. That is why the sentence does not survive careful reading.

The statement sounds plausible but fails on precision, so it is false.', 'TRUE — The claim is correct. Price increases after shares have been issued do not provide further financing to the issuing corporation.

This statement draws on corporations and limited liability. Treat it as a checklist against the core concept named in the stem, not as a general opinion about business.

In this setting, secondary appreciation does not finance the issuer. The wording matches the textbook relationship without adding extra conditions.

Every part of the claim aligns with the standard concept, so the statement stands.'] WHERE case_id = 'CASE 4.3.25' AND tier = 'full';
