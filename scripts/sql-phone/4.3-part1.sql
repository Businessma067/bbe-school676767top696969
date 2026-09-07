-- Update expanded explanations for 4.3-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Corporations are legal persons with rights and obligations comparable to natural persons.

Applied carefully, "A corporation is a legal entity of its own with the same rights and obligations as natural persons in business life" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal personality lets the firm own assets, employ staff, and contract independently.

Applied carefully, "As a legal person, a corporation can own land and property, hire people, and close contracts" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The incorporated business can initiate and face litigation in its corporate name.

Applied carefully, "A corporation may sue other parties and may itself be sued in its own name" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Founders who hold shares are not required to run daily operations.

Applied carefully, "Shareholders who found the corporation need not be involved in day-to-day management of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Directors and executives may manage the firm without holding shares.

Applied carefully, "Managers of a corporation need not own a share of the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Post-issue price gains do not add new share capital to the issuer.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Secondary trading transfers ownership among investors; it does not fund the corporation anew.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dividends remain discretionary and are not tied to market price movements.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Only primary issue proceeds finance the issuer; later price rises benefit shareholders.

Applied carefully, "An increase in share prices after they have been issued does not have any additional financing effect for the issuing corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trading gains accrue to selling shareholders, not to the issuing corporation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Limited liability confines exposure to the capital subscribed for shares.

Applied carefully, "Shareholders'' liability is usually limited to the amount of money they invested when buying the shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholders can lose invested capital if the business fails or share values fall.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Dividing capital into shares defines share capital.

Applied carefully, "The capital of a corporation is divided into shares, which is why it is called share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Purchasing shares confers shareholder status.

Applied carefully, "Persons who buy shares become shareholders of the corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Share capital is typically permanent long-term equity not repaid like a loan.

Applied carefully, "Share capital is usually not redeemed by the company and serves as long-term or permanent capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shareholders supply capital but need not manage the firm.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Managers need not own shares to serve on the board.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholders elect a board to take major decisions and represent them.

Applied carefully, "The corporation is managed by a board of directors elected by shareholders to make major business decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The ceo heads the board of directors.

Applied carefully, "The highest-ranking manager of the board is called the Chief Executive Officer" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Cfo and coo roles may sit on the management board.

Applied carefully, "Other board members may include the Chief Financial Officer and Chief Operating Officer" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Incorporation involves more formal steps than unincorporated forms.

Applied carefully, "Corporations are more difficult to set up than sole proprietorships or partnerships" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations can tap equity markets and debt sources more readily.

Applied carefully, "Corporations usually have more options to raise financial funds than sole proprietors and partnerships" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporations also use loans and credit alongside share capital.

The absolute wording "exclusively" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shareholder liability is usually limited to invested capital.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Corporate finance combines equity from shares with borrowed funds.

Applied carefully, "Financial funds for corporations mainly comprise share capital as well as loans and credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each share would represent 0.001 per cent, not one per cent, of that capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Selling all issued shares at par raises the full one million euros of share capital.

Applied carefully, "If all one hundred thousand shares are sold at issue, the corporation gains one million euros as share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shares may be bought at initial issue directly from the corporation.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Issue pricing follows market and listing conditions; it is not fixed above nominal value in all cases.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Primary share sales can mobilise very large sums for the corporation.

Applied carefully, "Huge amounts of money can be raised from the sale of shares when investors buy newly issued stock" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Listing is optional; unlisted corporations may still operate as legal persons.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Exchanges are regulated markets open to many buyers and sellers.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Listing itself requires complying with rules and listing requirements.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'After introduction, prices are driven by demand and supply.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Exchanges are authority-regulated markets for trading securities.

Applied carefully, "A stock exchange is a financial market, regulated by the authorities, where shares and other securities can be bought and sold" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Investors may buy at primary issue or on the secondary market.

Applied carefully, "Shares can be bought at the time they are initially issued by the corporation or later from another shareholder who sells" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The first exchange introduction of shares is termed an ipo.

Applied carefully, "The introduction of shares on a stock exchange at a set price is also called an initial public offering" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary resales transfer shares among investors without increasing issuer share capital.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Market prices after listing reflect demand and supply.

Applied carefully, "After the IPO, prices on the exchange are determined by demand and supply among buyers and sellers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Post-issue gains accrue to shareholders, not to the issuing corporation.

Applied carefully, "Beneficiaries of a price rise after issue are the shareholders who hold or trade the stock, not the issuing corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The board is elected to decide major matters on shareholders'' behalf.

Applied carefully, "Shareholders elect a board of directors to make all major business decisions and represent shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The ceo leads the management board.

Applied carefully, "The Chief Executive Officer is the highest-ranking manager on the board of directors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A cio may hold a board seat with defined duties.

Applied carefully, "A Chief Information Officer may serve on the board alongside other executive officers" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A cmo may manage marketing from the board.

Applied carefully, "A Chief Marketing Officer may be responsible for marketing functions as a board member" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Capital providers need neither manage nor hold management rights by default.

Applied carefully, "Shareholders who only provide money for share capital are neither obliged nor entitled to manage the company" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit expectations can draw investors toward a corporation''s stock.

Applied carefully, "Rising expectations that a business will make future profits can increase demand for its shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Prosperity leaves more funds available for equity investment.

Applied carefully, "Higher demand for shares when the economy is thriving partly reflects that many people have money to invest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Inflation may lift expected share values and support demand.

Applied carefully, "Comparatively higher rates of inflation can support share demand because share prices may also increase" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Low interest rates reduce the appeal of fixed-return alternatives.

Applied carefully, "Comparatively low interest rates can raise share demand because other investments become less attractive" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Growth, interest rates, and inflation all shape share demand.

Applied carefully, "Demand for shares is also influenced by economic indicators such as economic growth, interest rates, and inflation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Supporting a favoured business is a common investment motive.

Applied carefully, "Investors may buy shares to provide money for a business they believe in and want to support financially" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dividends offer annual income from distributed profits.

Applied carefully, "Investors may seek annual income through dividends paid from the corporation''s profits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Capital growth arises when resale prices exceed purchase prices.

Applied carefully, "Investors may hope for capital growth if share prices rise and the stock can later be sold at a higher price" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Meetings allow shareholders to vote on major matters.

Applied carefully, "Investors may wish to attend the annual stockholders'' meeting and influence decisions through voting rights" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Stock may be acquired at issue or through later secondary sales.

Applied carefully, "Shares can be bought either at initial issue by the corporation or later from another shareholder who sells" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Incorporated firms are legal persons with property and employment capacity.

Applied carefully, "As an incorporated business, the bakery is a legal entity that can own property and hire staff in its own name" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Private limited shareholders still enjoy limited liability on invested capital.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shares need not be exchange-listed to keep limited liability.

Applied carefully, "The family''s shareholding can remain off a public stock exchange while still conferring limited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Private companies issue shares without public listing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ownership and management may be separated in corporations.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.3.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Dividend payments are not legally mandatory each year.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Dividends are discretionary distributions from profits.

Applied carefully, "Dividends are part of the profits of the corporation that may be paid to shareholders at management discretion" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Omitted dividends can reduce attractiveness rather than guarantee gains.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Prolonged non-payment may weaken demand and pressure prices.

Applied carefully, "If no dividends are paid over a longer period, shares might become unattractive and demand may fall" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Price falls do not inject share capital into the issuer.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.3.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Preferred stock often trades voting rights for dividend priority.

Applied carefully, "Holders of preferred shares usually forgo voting rights at the stockholders'' meeting in exchange for a higher dividend claim" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Preferred holders usually sacrifice voting power for income preference.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Common shares generally carry meeting voting rights.

Applied carefully, "Common shareholders typically retain voting rights at the annual stockholders'' meeting" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds are debt securities distinct from preferred equity.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Bond finance may cost less interest than comparable bank borrowing.

Applied carefully, "Issuing bonds can be attractive because the interest rate on bonds is often lower than on a comparable bank loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Exchange prices respond to market demand and supply.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'High demand tends to push prices up under supply-and-demand logic.

Applied carefully, "According to the laws of supply and demand, share prices usually rise when demand for the stock is high" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary purchases transfer existing shares; they need not trigger new issuance.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The corporation is not obliged to redeem shares when demand falls.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Secondary trade proceeds do not increase issuer share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Shareholders need not manage; a board may run the firm.

The absolute wording "regardless" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Shareholders may invest without holding board seats.

Applied carefully, "Outside investors who buy shares become shareholders without necessarily joining the board of directors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owners can delegate operations to an elected ceo.

Applied carefully, "The consultants may retain shares while delegating daily management to the elected chief executive" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Equity and debt funding may be combined.

Applied carefully, "The corporation can raise share capital from new shareholders in addition to any bank loans it arranges" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Legal personality still requires the corporation to honour contracts.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Share capital is not repayable on demand like a loan.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Equity is long-term, not short-term credit redeemed annually.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are short-term debt; share capital is permanent equity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Companies typically do not redeem share capital.

Applied carefully, "Share capital is usually not redeemed by the company and may serve as permanent capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary sales occur between investors without mandatory issuer buybacks.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.3.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Corporations combine equity with loans and credit.

Applied carefully, "Corporations may raise financial funds through loans and credit in addition to share capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bonds may trade on regulated securities markets.

Applied carefully, "Bonds are securities that can be traded on a stock exchange alongside shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bond coupons may undercut comparable bank loan rates.

Applied carefully, "Issuing bonds may finance large projects at an interest rate often lower than a comparable bank loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bondholders are creditors, not equity owners.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Regulated exchanges handle multiple security types including bonds.

Applied carefully, "A stock exchange is regulated by the authorities and facilitates trading in shares and other securities such as bonds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Legal persons may hire staff in the corporate name.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The firm contracts and litigates independently of owners.

Applied carefully, "A corporation as legal person can close contracts, sue, and be sued independently of individual shareholders" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Corporate personality binds contracts to the firm, not each owner personally.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Corporations may own land and property directly.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The corporation itself can be sued despite shareholders'' limited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary price moves do not alter registered share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Voting rights pass to buyers, not back to the corporation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Market prices follow investor demand and supply after issue.

Applied carefully, "Higher prices after issue reflect changed demand and supply among investors trading existing shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Price rises do not oblige automatic bonus share issuance.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Sellers capture capital gains; the issuer receives no trade proceeds.

Applied carefully, "Shareholders who sold at higher prices realise capital gains; the issuer does not receive those trading proceeds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Each share corresponds to a defined portion of total share capital.

Applied carefully, "If share capital of one million euros is divided into one hundred thousand shares, each share represents a fixed fraction of that capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Market prices and registered share capital are not mechanically linked after issue.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Primary purchases fund the corporation and confer ownership.

Applied carefully, "Buying shares at initial issue transfers cash to the corporation in exchange for an ownership stake" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Secondary sales transfer ownership between investors without obliging the corporation to redeem the stock.

Applied carefully, "A shareholder may sell shares later to another investor without requiring the corporation to redeem the stock" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Preferred shares often carry reduced or no voting rights.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.3.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Listing is optional for operating as a corporation.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlisted firms may still place shares privately.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Only ipo proceeds and new issues fund the issuer, not all later trades.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Delisting does not remove incorporated legal status.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Exchange listing remains a choice, not a universal requirement.

Applied carefully, "A corporation''s stock can but does not have to be listed on a stock market or stock exchange" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Product success expectations can attract buyers.

Applied carefully, "Expectations of successful new products can raise demand for a corporation''s shares" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Growing market share signals may lift demand.

Applied carefully, "Expectations of increasing market share can contribute to higher share demand" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Prosperity leaves more money available to invest in equity.

Applied carefully, "Thriving economic conditions can support share demand because more investors have funds available" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Higher interest rates draw funds toward fixed-return assets.

Applied carefully, "High interest rates can reduce share demand by making interest-bearing investments more attractive" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Post-issue gains enrich shareholders, not issuer share capital.

Applied carefully, "An increase in share prices after issue benefits shareholders rather than supplying new finance to the issuer" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.'] WHERE case_id = 'CASE 4.3.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A cio may be a board member with it duties.

Applied carefully, "The chief information officer may sit on the board of directors with defined operational responsibilities" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Shareholders delegate operations; they need not run systems personally.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shareholders may still attend meetings and vote.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'The board decides major matters for capital providers.

Applied carefully, "The board of directors makes major business decisions on behalf of shareholders who supplied capital" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Board members need not be largest shareholders.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.3.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Market gains are not booked as new issuer share capital.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Price highs alone do not fund corporate expansion.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Trading profits remain with shareholders unless new shares are sold.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Only primary issue proceeds count as share-capital inflows.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Secondary appreciation does not finance the issuer.

Applied carefully, "Price increases after shares have been issued do not provide further financing to the issuing corporation" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.3.25' AND tier = 'full';
