-- Update expanded explanations for 4.3-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['They remain incorporated legal persons despite private ownership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private shares are not freely sold to the public on exchanges.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private limited firms combine incorporation with limited liability.

Applied carefully, "Private limited companies are incorporated businesses with limited liability for shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Listing is not required for incorporated status.

Applied carefully, "Private limited companies need not list shares on a stock exchange to exist as legal persons" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Liability is generally capped at invested capital.

Applied carefully, "Shareholders in a private limited company are typically not liable beyond the capital they invested" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Minimum capital rules target certain incorporated forms, not sole traders or partnerships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Some corporations must meet capital thresholds at formation.

Applied carefully, "Some incorporated forms face minimum capital requirements that must be met when the company is established" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Minimum capital provides a creditor protection buffer.

Applied carefully, "Minimum capital rules aim to protect creditors by ensuring a base equity buffer in the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dividends remain discretionary even after capital requirements are met.

The absolute wording "guarantees" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Formal capital and registration add setup complexity versus unincorporated firms.

Applied carefully, "Corporations remain more difficult to set up than unincorporated businesses partly because of formal capital and registration rules" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Corporations may combine equity with bonds and bank loans.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Bond interest may undercut comparable bank rates.

Applied carefully, "Issuing bonds may offer a lower interest rate than a comparable bank loan for large-scale investment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds can trade on regulated markets alongside shares.

Applied carefully, "Bonds, like shares, may be securities traded on regulated financial markets subject to authority oversight" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Debt must be repaid; equity does not carry the same obligation.

Applied carefully, "Bond finance adds debt obligations, whereas share capital does not create a contractual repayment like a loan" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'The incorporated firm contracts in its own name with limited owner exposure.

Applied carefully, "The corporation remains a legal person that can contract for the plant independently of bondholders'' personal assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shareholders may attend meetings even if they are not directors.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Voting rights motivate attendance at the annual meeting.

Applied carefully, "Investors may buy shares partly to attend the annual stockholders'' meeting and vote on major decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Preferred stock often limits voting in return for dividend priority.

Applied carefully, "Preferred shareholders usually trade stronger dividend claims for reduced or no voting rights at that meeting" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Voting does not require shareholders to manage daily operations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ownership persists even when management is delegated.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Separate legal personality defines incorporation.

Applied carefully, "Corporations are incorporated businesses that are legal entities separate from their owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited liability caps owner exposure at invested capital.

Applied carefully, "Shareholders'' liability is usually limited to the amount invested when purchasing shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Primary share sales can mobilise substantial equity.

Applied carefully, "Share capital divided into shares can raise large sums when investors buy newly issued stock" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Listing facilitates trading but remains optional.

Applied carefully, "Corporations may list shares on a regulated stock exchange but are not required to do so" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Boards run operations while shareholders may remain passive owners.

Applied carefully, "Management by a board of directors allows separation of ownership and control within the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shares trade at issue and on secondary markets, not only at meetings.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Secondary trading continues without repeating an ipo annually.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shares trade at initial issue or on the secondary market between shareholders.

Applied carefully, "Investors may acquire shares directly from the corporation at issue or purchase them later from an existing shareholder" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Only primary sales fund the issuer; later trades swap owners.

Applied carefully, "Buying at initial issue provides share capital to the corporation; buying later transfers ownership between investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Any share purchase confers shareholder status.

Applied carefully, "Persons who buy shares become shareholders regardless of whether purchase occurs at issue or on the secondary market" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary rallies do not increase registered share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Profit expectations can lift investor demand and prices.

Applied carefully, "Expectations of higher future profits from the contract can increase demand and push up share prices" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Holders may realise capital growth on later sales.

Applied carefully, "Shareholders holding stock during the rally may benefit from capital growth if they later sell at higher prices" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade proceeds flow between investors, not to the issuer.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dividends remain discretionary and are not tied to price spikes.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Authority oversight defines regulated exchanges.

Applied carefully, "A stock exchange is regulated by the authorities as a financial market for securities" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Listing demands compliance with exchange rules.

Applied carefully, "Corporations seeking a listing must comply with certain rules and fulfil listing requirements" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Post-ipo prices reflect market demand and supply.

Applied carefully, "Shares introduced on an exchange at the IPO are thereafter priced largely by demand and supply" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond trading may occur alongside share trading.

Applied carefully, "Bonds as well as shares may be bought and sold on such regulated markets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Later trades benefit transacting investors, not the issuer''s capital account.

Applied carefully, "Listing facilitates trading among many people and businesses but does not oblige the issuer to receive later trade proceeds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shareholders are not generally liable for all corporate tax debts beyond investment.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Exposure is usually capped at subscribed capital.

Applied carefully, "Shareholders'' liability is usually confined to the money they invested when buying shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market losses on share values can still occur.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Non-shareholder managers do not automatically share the same liability shield as investors.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlimited or broader owner liability marks many unincorporated structures.

Applied carefully, "Limited liability distinguishes corporations from many unincorporated forms where owners face broader personal exposure" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal personality does not require distributing all profit as dividends.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Dividends are not fixed to market prices nor strictly mandatory.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Omitted dividends can weaken demand and affect prices.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Dividends come from profits, not mandatory interest on capital.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Discretionary dividends affect attractiveness when withheld too long.

Applied carefully, "Dividends are discretionary profit distributions; prolonged omission can reduce share attractiveness and demand" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Private limited firms retain limited liability without public listing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Incorporation gives separate legal personality for assets and hiring.

Applied carefully, "The manufacturer remains an incorporated legal person able to own equipment and hire workers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Minimum capital can apply at formation regardless of listing plans.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private firms may still elect boards and delegate management.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Private limited companies operate without public share sales.

Applied carefully, "Shares need not be sold to the general public on an exchange for the firm to operate as a private limited company" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Low rates raise the relative appeal of equity.

Applied carefully, "Comparatively low interest rates can increase share demand by making other investments less attractive" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'High rates favour fixed-return alternatives over shares.

Applied carefully, "Comparatively high interest rates can pull investors toward interest-bearing alternatives and away from shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Growth signals are among demand influences cited for shares.

Applied carefully, "Economic growth indicators form part of the wider set of factors influencing share demand" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'High rates tend to reduce share demand rather than automatically lift prices.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Price effects from demand do not fund the issuer after shares are issued.

Applied carefully, "Demand shifts from such conditions affect market prices but do not by themselves add share capital to the issuer after issue" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Inflation may lift expected share values and demand.

Applied carefully, "Comparatively higher inflation may support share demand when investors expect share prices to rise with general prices" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Inflation appears among cited demand influences.

Applied carefully, "Inflation is among the economic indicators that can influence demand for corporate shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Prosperity can coincide with stronger equity demand.

Applied carefully, "Thriving economic conditions with available investable funds can coincide with stronger share demand" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Registered share capital is not automatically adjusted with inflation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Market gains from inflation expectations accrue to shareholders, not issuer finance.

Applied carefully, "Price changes driven by inflation expectations benefit trading shareholders rather than financing the issuer anew" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.3.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The ceo heads the management board.

Applied carefully, "The management board''s highest-ranking officer is the Chief Executive Officer who leads corporate execution" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cfo duties do not require holding the largest share block.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The coo may sit on the board managing operations.

Applied carefully, "The Chief Operating Officer may manage operations as a member of the board of directors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Capital providers need not run daily operations.

Applied carefully, "Shareholders elect the board but are neither obliged nor entitled to manage daily operations themselves" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations separate owners from professional managers.

Applied carefully, "Separation of ownership and management is a defining feature of corporate organisation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Primary ipo sales raise share capital inside the firm.

Applied carefully, "Proceeds from shares sold at the IPO entered the corporation as share capital when investors bought at issue" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary doubling does not double internal cash capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regulators do not capture trading gains as issuer equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Holders are not obliged to pay market premiums back to the firm.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Higher prices do not grant unlimited interest-free debt rights.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Incorporated firms hold assets in the corporate name.

Applied carefully, "A corporation may own land and property in its own name rather than in shareholders'' personal names" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'The legal entity remains suable despite owners'' limited liability.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The corporation hires staff under its own legal personality.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Litigation runs against or by the firm itself.

Applied carefully, "The corporation may sue and be sued as a legal entity independent of individual owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Contracts bind the corporation rather than each owner personally.

Applied carefully, "Legal personality allows the business to close contracts that bind the corporation, not shareholders personally" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary payments go to selling shareholders, not share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Exchange trades normally occur between investors, not as issuer capital inflows.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Trading premiums do not expand permanent registered equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Primary issue proceeds are what raise issuer share capital.

Applied carefully, "Only proceeds from shares bought at initial issue from the corporation typically increase its share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Price falls do not force capital redemption.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Founders may remain investors without managing.

Applied carefully, "People who found the corporation and own shares need not manage the business themselves" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Managers may be non-owners appointed to the board.

Applied carefully, "Managers running the corporation need not own shares of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Passive shareholders elect representatives to the board.

Applied carefully, "Shareholders may elect directors to represent their interests while remaining passive investors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Major decisions sit with the board rather than each owner.

Applied carefully, "The board of directors, not every shareholder, makes major business decisions in typical corporations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporation persists; ownership can change without losing legal personality.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.3.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividends are discretionary, not legally guaranteed each year.

Applied carefully, "The corporation was not legally obliged to pay dividends despite shareholders'' wish for annual income" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retention alone does not guarantee price rises.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Limited liability is unaffected by dividend policy.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long non-payment can reduce attractiveness and demand.

Applied carefully, "Prolonged omission of dividends may make shares less attractive and weaken investor demand" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dividends distribute a portion of profits to owners.

Applied carefully, "Dividends, when paid, represent part of the corporation''s profits distributed to shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital is capital split into shares.

Applied carefully, "Share capital is the capital of a corporation divided into shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stock represents a fraction of total share capital.

Applied carefully, "Each share, also called stock, represents a portion of the total share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Primary sales can raise large sums.

Applied carefully, "Selling newly issued shares to investors can raise substantial funds for the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity is typically permanent and unredeemed.

Applied carefully, "Share capital is generally long-term capital that the company usually does not redeem" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share buyers become owners of the corporation.

Applied carefully, "Shareholders are persons who buy shares and thereby own a stake in the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Primary issues fund the corporation through share capital.

Applied carefully, "Initial share sales can raise large amounts of share capital for the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary trades move ownership without issuer finance.

Applied carefully, "Later exchange trading transfers shares among investors without adding finance to the issuer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Post-introduction prices follow market forces.

Applied carefully, "Demand and supply on the exchange determine prices after the initial introduction of shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Motives include income, growth, and voting rights.

Applied carefully, "Investors may seek dividends, capital growth, or voting influence when buying stock" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Multiple macro indicators shape share demand.

Applied carefully, "Economic growth, inflation, and interest rates can all influence demand for shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Equity and debt both fund corporations.

Applied carefully, "Share capital is a principal financial fund available to corporations alongside borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Borrowing complements share capital.

Applied carefully, "Loans and credit also form part of the financial funds corporations may use" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Incorporated firms access broader finance channels.

Applied carefully, "Corporations typically have more funding options than sole proprietors or partnerships" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds compete with bank loans as debt sources.

Applied carefully, "Bonds may be issued as an alternative to bank loans for raising debt finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity lacks the fixed repayment duty of debt.

Applied carefully, "Share capital differs from debt because it does not create the same contractual repayment obligation as a loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Private placements can raise equity without listing.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlisted firms remain incorporated legal persons.

Applied carefully, "An unlisted corporation may still be a legal person owning laboratories and hiring researchers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity can be raised off-exchange through private sales.

Applied carefully, "Private share placements can supply equity without an initial public offering on an exchange" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited liability applies to private shareholders.

Applied carefully, "Shareholders in such a corporation retain limited liability tied to their investment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Listing is optional and mainly aids broad secondary trading.

Applied carefully, "Listing remains optional; exchange trading mainly facilitates secondary transfers among many market participants" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Common stock usually carries meeting votes.

Applied carefully, "At the annual stockholders'' meeting, common stockholders ordinarily exercise voting rights on major resolutions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Preferred holders typically forgo voting for dividend priority.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Preferred shares exchange votes for income preference.

Applied carefully, "Preferred shares often trade voting rights for priority in dividend payments" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Voting rights motivate some equity purchases.

Applied carefully, "Investors may purchase shares partly to influence corporate decisions through those voting rights" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Even preferred priority leaves dividends discretionary overall.

Applied carefully, "Dividend priority for preferred stock does not eliminate the discretionary nature of overall dividend policy" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Corporations mix equity with debt finance.

Applied carefully, "The corporation may finance operations through both share capital and loans" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bank loans do not block subsequent share issues.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Debt and equity differ; neither removes limited liability for shareholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Borrowing does not expand shareholders'' personal liability beyond investment.

Applied carefully, "Shareholders'' liability generally remains limited to their invested capital despite additional borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond issues may still be used alongside existing bank debt.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.50' AND tier = 'full';
