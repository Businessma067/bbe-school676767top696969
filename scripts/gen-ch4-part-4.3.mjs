import fs from "node:fs";

const slots = JSON.parse(fs.readFileSync("scripts/ch4-slot-plan.json", "utf8"))["4.3"];

const RAW = [
  {
    title: "Corporations as Legal Persons",
    context:
      "Review how incorporated businesses obtain separate legal personality and the rights that follow from that status. Evaluate the following economic assertions:",
    statements: [
      "A corporation is a legal entity of its own with the same rights and obligations as natural persons in business life.",
      "As a legal person, a corporation can own land and property, hire people, and close contracts.",
      "A corporation may sue other parties and may itself be sued in its own name.",
      "Shareholders who found the corporation need not be involved in day-to-day management of the business.",
      "Managers of a corporation need not own a share of the business.",
    ],
    explanations: [
      "TRUE — Corporations are legal persons with rights and obligations comparable to natural persons.",
      "TRUE — Legal personality lets the firm own assets, employ staff, and contract independently.",
      "TRUE — The incorporated business can initiate and face litigation in its corporate name.",
      "TRUE — Founders who hold shares are not required to run daily operations.",
      "TRUE — Directors and executives may manage the firm without holding shares.",
    ],
  },
  {
    title: "Secondary Market Price Rises and Corporate Finance",
    context:
      "Analyze how initial share issues differ from later trading on a regulated stock exchange when assessing corporate funding. Evaluate the following economic assertions:",
    statements: [
      "When share prices rise on the exchange after the IPO, the issuing corporation automatically receives fresh share capital equal to that gain.",
      "A sustained increase in secondary-market prices injects permanent equity finance into the issuer beyond the original issue proceeds.",
      "Higher post-issue market prices oblige the corporation to pay matching dividends to all past and future shareholders.",
      "An increase in share prices after they have been issued does not have any additional financing effect for the issuing corporation.",
      "The corporation shares equally in capital gains when existing shareholders sell stock to one another at higher prices.",
    ],
    explanations: [
      "FALSE — Post-issue price gains do not add new share capital to the issuer.",
      "FALSE — Secondary trading transfers ownership among investors; it does not fund the corporation anew.",
      "FALSE — Dividends remain discretionary and are not tied to market price movements.",
      "TRUE — Only primary issue proceeds finance the issuer; later price rises benefit shareholders.",
      "FALSE — Trading gains accrue to selling shareholders, not to the issuing corporation.",
    ],
  },
  {
    title: "Shareholder Liability and Share Capital",
    context:
      "Review the protection shareholders receive and how equity capital is structured within a corporation. Evaluate the following economic assertions:",
    statements: [
      "Shareholders' liability is usually limited to the amount of money they invested when buying the shares.",
      "Limited liability means shareholders can never lose any part of the money they paid for their shares.",
      "The capital of a corporation is divided into shares, which is why it is called share capital.",
      "Persons who buy shares become shareholders of the corporation.",
      "Share capital is usually not redeemed by the company and serves as long-term or permanent capital.",
    ],
    explanations: [
      "TRUE — Limited liability confines exposure to the capital subscribed for shares.",
      "FALSE — Shareholders can lose invested capital if the business fails or share values fall.",
      "TRUE — Dividing capital into shares defines share capital.",
      "TRUE — Purchasing shares confers shareholder status.",
      "TRUE — Share capital is typically permanent long-term equity not repaid like a loan.",
    ],
  },
  {
    title: "Manufacturing Corporation Ownership Structure",
    context:
      "Consider a manufacturing corporation whose founders invested capital but appointed an external chief executive to run operations. Evaluate the following economic assertions:",
    statements: [
      "Because they provided share capital, the founders must personally manage every major business decision.",
      "The appointed chief executive must own shares before the board of directors may elect that person.",
      "The corporation is managed by a board of directors elected by shareholders to make major business decisions.",
      "The highest-ranking manager of the board is called the Chief Executive Officer.",
      "Other board members may include the Chief Financial Officer and Chief Operating Officer.",
    ],
    explanations: [
      "FALSE — Shareholders supply capital but need not manage the firm.",
      "FALSE — Managers need not own shares to serve on the board.",
      "TRUE — Shareholders elect a board to take major decisions and represent them.",
      "TRUE — The CEO heads the board of directors.",
      "TRUE — CFO and COO roles may sit on the management board.",
    ],
  },
  {
    title: "Corporate Formation and Finance Options",
    context:
      "Analyze why corporations are more complex to establish yet attract broader sources of funding than unincorporated firms. Evaluate the following economic assertions:",
    statements: [
      "Corporations are more difficult to set up than sole proprietorships or partnerships.",
      "Corporations usually have more options to raise financial funds than sole proprietors and partnerships.",
      "Corporations rely exclusively on share capital and cannot raise loans or credit like other businesses.",
      "Shareholders bear unlimited liability for all corporation debts beyond their original investment.",
      "Financial funds for corporations mainly comprise share capital as well as loans and credit.",
    ],
    explanations: [
      "TRUE — Incorporation involves more formal steps than unincorporated forms.",
      "TRUE — Corporations can tap equity markets and debt sources more readily.",
      "FALSE — Corporations also use loans and credit alongside share capital.",
      "FALSE — Shareholder liability is usually limited to invested capital.",
      "TRUE — Corporate finance combines equity from shares with borrowed funds.",
    ],
  },
  {
    title: "Share Issuance and Nominal Value",
    context:
      "Review how total share capital is split among individual shares when a corporation first sells stock to investors. Evaluate the following economic assertions:",
    statements: [
      "If share capital equals one million euros divided into one hundred thousand shares, each share represents one per cent of the capital.",
      "If all one hundred thousand shares are sold at issue, the corporation gains one million euros as share capital.",
      "Shares can only be purchased from other shareholders and never directly from the corporation at initial issue.",
      "Each share sold at issue must always be priced above its nominal share of the registered capital.",
      "Huge amounts of money can be raised from the sale of shares when investors buy newly issued stock.",
    ],
    explanations: [
      "FALSE — Each share would represent 0.001 per cent, not one per cent, of that capital.",
      "TRUE — Selling all issued shares at par raises the full one million euros of share capital.",
      "FALSE — Shares may be bought at initial issue directly from the corporation.",
      "FALSE — Issue pricing follows market and listing conditions; it is not fixed above nominal value in all cases.",
      "TRUE — Primary share sales can mobilise very large sums for the corporation.",
    ],
  },
  {
    title: "Stock Exchange Listing Requirements",
    context:
      "Review the role of a stock exchange as a regulated financial market for corporate securities. Evaluate the following economic assertions:",
    statements: [
      "Every corporation must list its stock on a stock exchange before it may hire employees or close contracts.",
      "A stock exchange is an unregulated venue where only the issuing corporation may trade its own shares.",
      "Listing on a stock exchange removes the need for corporations to comply with any authority-imposed rules.",
      "Shares introduced on a stock exchange always trade at a fixed price set permanently by the issuer.",
      "A stock exchange is a financial market, regulated by the authorities, where shares and other securities can be bought and sold.",
    ],
    explanations: [
      "FALSE — Listing is optional; unlisted corporations may still operate as legal persons.",
      "FALSE — Exchanges are regulated markets open to many buyers and sellers.",
      "FALSE — Listing itself requires complying with rules and listing requirements.",
      "FALSE — After introduction, prices are driven by demand and supply.",
      "TRUE — Exchanges are authority-regulated markets for trading securities.",
    ],
  },
  {
    title: "IPO Versus Secondary Share Trading",
    context:
      "Consider a listed corporation whose shares were first sold at an initial public offering and later changed hands among investors on the exchange. Evaluate the following economic assertions:",
    statements: [
      "Shares can be bought at the time they are initially issued by the corporation or later from another shareholder who sells.",
      "The introduction of shares on a stock exchange at a set price is also called an initial public offering.",
      "Every subsequent resale of shares on the exchange adds the full sale price to the corporation's share capital account.",
      "After the IPO, prices on the exchange are determined by demand and supply among buyers and sellers.",
      "Beneficiaries of a price rise after issue are the shareholders who hold or trade the stock, not the issuing corporation.",
    ],
    explanations: [
      "TRUE — Investors may buy at primary issue or on the secondary market.",
      "TRUE — The first exchange introduction of shares is termed an IPO.",
      "FALSE — Secondary resales transfer shares among investors without increasing issuer share capital.",
      "TRUE — Market prices after listing reflect demand and supply.",
      "TRUE — Post-issue gains accrue to shareholders, not to the issuing corporation.",
    ],
  },
  {
    title: "Board of Directors and Executive Roles",
    context:
      "Analyze how major corporate decisions are taken when shareholders supply capital but delegate management. Evaluate the following economic assertions:",
    statements: [
      "Shareholders elect a board of directors to make all major business decisions and represent shareholders.",
      "The Chief Executive Officer is the highest-ranking manager on the board of directors.",
      "A Chief Information Officer may serve on the board alongside other executive officers.",
      "A Chief Marketing Officer may be responsible for marketing functions as a board member.",
      "Shareholders who only provide money for share capital are neither obliged nor entitled to manage the company.",
    ],
    explanations: [
      "TRUE — The board is elected to decide major matters on shareholders' behalf.",
      "TRUE — The CEO leads the management board.",
      "TRUE — A CIO may hold a board seat with defined duties.",
      "TRUE — A CMO may manage marketing from the board.",
      "TRUE — Capital providers need neither manage nor hold management rights by default.",
    ],
  },
  {
    title: "Demand for Shares and Economic Conditions",
    context:
      "Analyze how macroeconomic conditions and business expectations influence investor demand for corporate shares. Evaluate the following economic assertions:",
    statements: [
      "Rising expectations that a business will make future profits can increase demand for its shares.",
      "Higher demand for shares when the economy is thriving partly reflects that many people have money to invest.",
      "Comparatively higher rates of inflation can support share demand because share prices may also increase.",
      "Comparatively low interest rates can raise share demand because other investments become less attractive.",
      "Demand for shares is also influenced by economic indicators such as economic growth, interest rates, and inflation.",
    ],
    explanations: [
      "TRUE — Profit expectations can draw investors toward a corporation's stock.",
      "TRUE — Prosperity leaves more funds available for equity investment.",
      "TRUE — Inflation may lift expected share values and support demand.",
      "TRUE — Low interest rates reduce the appeal of fixed-return alternatives.",
      "TRUE — Growth, interest rates, and inflation all shape share demand.",
    ],
  },
];

RAW.push(
  {
    title: "Reasons for Investing in Shares",
    context:
      "Review the main motives that lead households and businesses to purchase corporate stock. Evaluate the following economic assertions:",
    statements: [
      "Investors may buy shares to provide money for a business they believe in and want to support financially.",
      "Investors may seek annual income through dividends paid from the corporation's profits.",
      "Investors may hope for capital growth if share prices rise and the stock can later be sold at a higher price.",
      "Investors may wish to attend the annual stockholders' meeting and influence decisions through voting rights.",
      "Shares can be bought either at initial issue by the corporation or later from another shareholder who sells.",
    ],
    explanations: [
      "TRUE — Supporting a favoured business is a common investment motive.",
      "TRUE — Dividends offer annual income from distributed profits.",
      "TRUE — Capital growth arises when resale prices exceed purchase prices.",
      "TRUE — Meetings allow shareholders to vote on major matters.",
      "TRUE — Stock may be acquired at issue or through later secondary sales.",
    ],
  },
  {
    title: "Neighbourhood Bakery as Private Limited Company",
    context:
      "Consider a neighbourhood bakery structured as a private limited company whose shares are held by a small group of family investors. Evaluate the following economic assertions:",
    statements: [
      "As an incorporated business, the bakery is a legal entity that can own property and hire staff in its own name.",
      "Because it is private, shareholders face unlimited liability for all bakery debts regardless of investment.",
      "The family's shareholding can remain off a public stock exchange while still conferring limited liability.",
      "Private limited companies must list on a stock exchange before they may issue any shares to investors.",
      "Managers of the bakery are legally required to be the same persons who hold all outstanding shares.",
    ],
    explanations: [
      "TRUE — Incorporated firms are legal persons with property and employment capacity.",
      "FALSE — Private limited shareholders still enjoy limited liability on invested capital.",
      "TRUE — Shares need not be exchange-listed to keep limited liability.",
      "FALSE — Private companies issue shares without public listing.",
      "FALSE — Ownership and management may be separated in corporations.",
    ],
  },
  {
    title: "Dividend Policy and Share Attractiveness",
    context:
      "Analyze how discretionary dividend payments interact with investor expectations and secondary-market prices. Evaluate the following economic assertions:",
    statements: [
      "Corporations must pay dividends every year because shareholders have a legally fixed income entitlement.",
      "Dividends are part of the profits of the corporation that may be paid to shareholders at management discretion.",
      "Withholding dividends always raises share prices because retained profits guarantee immediate capital gains.",
      "If no dividends are paid over a longer period, shares might become unattractive and demand may fall.",
      "Falling share prices after omitted dividends automatically increase the corporation's available share capital.",
    ],
    explanations: [
      "FALSE — Dividend payments are not legally mandatory each year.",
      "TRUE — Dividends are discretionary distributions from profits.",
      "FALSE — Omitted dividends can reduce attractiveness rather than guarantee gains.",
      "TRUE — Prolonged non-payment may weaken demand and pressure prices.",
      "FALSE — Price falls do not inject share capital into the issuer.",
    ],
  },
  {
    title: "Preferred Shares and Voting Rights",
    context:
      "Review how different classes of shares allocate dividend priority and control rights among investors. Evaluate the following economic assertions:",
    statements: [
      "Holders of preferred shares usually forgo voting rights at the stockholders' meeting in exchange for a higher dividend claim.",
      "Preferred shareholders always receive both superior dividends and full voting control over every board appointment.",
      "Common shareholders typically retain voting rights at the annual stockholders' meeting.",
      "A corporation cannot issue bonds because bondholders would automatically become preferred shareholders.",
      "Issuing bonds can be attractive because the interest rate on bonds is often lower than on a comparable bank loan.",
    ],
    explanations: [
      "TRUE — Preferred stock often trades voting rights for dividend priority.",
      "FALSE — Preferred holders usually sacrifice voting power for income preference.",
      "TRUE — Common shares generally carry meeting voting rights.",
      "FALSE — Bonds are debt securities distinct from preferred equity.",
      "TRUE — Bond finance may cost less interest than comparable bank borrowing.",
    ],
  },
  {
    title: "Supply and Demand in Share Pricing",
    context:
      "Analyze how trading on a regulated exchange translates changing investor sentiment into market prices. Evaluate the following economic assertions:",
    statements: [
      "Share prices on an exchange are set solely by the corporation's board and never respond to buyer demand.",
      "According to the laws of supply and demand, share prices usually rise when demand for the stock is high.",
      "High demand for shares always forces the issuing corporation to create new shares equal to each purchase on the exchange.",
      "When demand falls, the corporation must redeem outstanding shares at the latest market price.",
      "Secondary trading prices feed directly into the issuer's balance sheet as additional paid-in share capital.",
    ],
    explanations: [
      "FALSE — Exchange prices respond to market demand and supply.",
      "TRUE — High demand tends to push prices up under supply-and-demand logic.",
      "FALSE — Secondary purchases transfer existing shares; they need not trigger new issuance.",
      "FALSE — The corporation is not obliged to redeem shares when demand falls.",
      "FALSE — Secondary trade proceeds do not increase issuer share capital.",
    ],
  },
  {
    title: "Two Consultants Founding a Corporation",
    context:
      "Consider two consultants who incorporate their joint venture, sell shares to outside investors, and appoint a professional chief executive. Evaluate the following economic assertions:",
    statements: [
      "Incorporation means both consultants must remain the only managers regardless of who buys shares.",
      "Outside investors who buy shares become shareholders without necessarily joining the board of directors.",
      "The consultants may retain shares while delegating daily management to the elected chief executive.",
      "The corporation can raise share capital from new shareholders in addition to any bank loans it arranges.",
      "Selling shares to outside investors eliminates the need for the corporation to comply with contract law as a legal person.",
    ],
    explanations: [
      "FALSE — Shareholders need not manage; a board may run the firm.",
      "TRUE — Shareholders may invest without holding board seats.",
      "TRUE — Owners can delegate operations to an elected CEO.",
      "TRUE — Equity and debt funding may be combined.",
      "FALSE — Legal personality still requires the corporation to honour contracts.",
    ],
  },
  {
    title: "Long-Term Nature of Share Capital",
    context:
      "Review how equity raised through share issues differs in maturity from short-term borrowing. Evaluate the following economic assertions:",
    statements: [
      "Share capital must be repaid to shareholders on demand whenever market prices fall temporarily.",
      "Issuing shares provides short-term credit that the corporation redeems within one accounting year.",
      "Share capital and bank overdrafts serve identical roles because both must be repaid within weeks.",
      "Share capital is usually not redeemed by the company and may serve as permanent capital.",
      "Once listed, a corporation must buy back all shares whenever investors sell on the secondary market.",
    ],
    explanations: [
      "FALSE — Share capital is not repayable on demand like a loan.",
      "FALSE — Equity is long-term, not short-term credit redeemed annually.",
      "FALSE — Overdrafts are short-term debt; share capital is permanent equity.",
      "TRUE — Companies typically do not redeem share capital.",
      "FALSE — Secondary sales occur between investors without mandatory issuer buybacks.",
    ],
  },
  {
    title: "Corporate Bonds Versus Bank Loans",
    context:
      "Analyze debt funding choices available to corporations beyond equity raised through share issues. Evaluate the following economic assertions:",
    statements: [
      "Corporations may raise financial funds through loans and credit in addition to share capital.",
      "Bonds are securities that can be traded on a stock exchange alongside shares.",
      "Issuing bonds may finance large projects at an interest rate often lower than a comparable bank loan.",
      "Bond interest is classified as share capital because bondholders become co-owners of the corporation.",
      "A stock exchange is regulated by the authorities and facilitates trading in shares and other securities such as bonds.",
    ],
    explanations: [
      "TRUE — Corporations combine equity with loans and credit.",
      "TRUE — Bonds may trade on regulated securities markets.",
      "TRUE — Bond coupons may undercut comparable bank loan rates.",
      "FALSE — Bondholders are creditors, not equity owners.",
      "TRUE — Regulated exchanges handle multiple security types including bonds.",
    ],
  },
  {
    title: "Legal Personality and Contractual Capacity",
    context:
      "Review the business acts that a corporation may undertake independently of its shareholders. Evaluate the following economic assertions:",
    statements: [
      "Only natural persons may hire employees; a corporation must contract workers in each shareholder's personal name.",
      "A corporation as legal person can close contracts, sue, and be sued independently of individual shareholders.",
      "Shareholders personally sign every supplier contract even when a corporation has separate legal personality.",
      "Separate legal personality prevents a corporation from owning land because property must rest with natural persons.",
      "Incorporation removes the corporation's ability to be sued because liability stops with shareholders.",
    ],
    explanations: [
      "FALSE — Legal persons may hire staff in the corporate name.",
      "TRUE — The firm contracts and litigates independently of owners.",
      "FALSE — Corporate personality binds contracts to the firm, not each owner personally.",
      "FALSE — Corporations may own land and property directly.",
      "FALSE — The corporation itself can be sued despite shareholders' limited liability.",
    ],
  },
  {
    title: "Listed Retail Corporation and Investor Gains",
    context:
      "Consider a retail corporation whose shares jumped in price after strong holiday sales reports, while the firm made no new share issue. Evaluate the following economic assertions:",
    statements: [
      "The holiday price surge increased the corporation's registered share capital by the full market value of the rise.",
      "Existing shareholders who sold during the surge transferred their voting rights to the corporation itself.",
      "Higher prices after issue reflect changed demand and supply among investors trading existing shares.",
      "The corporation must issue bonus shares equal to every euro of secondary-market price increase.",
      "Shareholders who sold at higher prices realise capital gains; the issuer does not receive those trading proceeds.",
    ],
    explanations: [
      "FALSE — Secondary price moves do not alter registered share capital.",
      "FALSE — Voting rights pass to buyers, not back to the corporation.",
      "TRUE — Market prices follow investor demand and supply after issue.",
      "FALSE — Price rises do not oblige automatic bonus share issuance.",
      "TRUE — Sellers capture capital gains; the issuer receives no trade proceeds.",
    ],
  },
);

RAW.push(
  {
    title: "Share Capital Calculation and Ownership",
    context:
      "Analyze the relationship between total share capital, the number of shares issued, and each investor's stake. Evaluate the following economic assertions:",
    statements: [
      "If share capital of one million euros is divided into one hundred thousand shares, each share represents a fixed fraction of that capital.",
      "Doubling the market price on the exchange automatically doubles the corporation's registered share capital on the balance sheet.",
      "Buying shares at initial issue transfers cash to the corporation in exchange for an ownership stake.",
      "A shareholder may sell shares later to another investor without requiring the corporation to redeem the stock.",
      "Each share always carries exactly one vote regardless of whether it is preferred or common stock.",
    ],
    explanations: [
      "TRUE — Each share corresponds to a defined portion of total share capital.",
      "FALSE — Market prices and registered share capital are not mechanically linked after issue.",
      "TRUE — Primary purchases fund the corporation and confer ownership.",
      "TRUE — Secondary sales transfer ownership between investors without obliging the corporation to redeem the stock.",
      "FALSE — Preferred shares often carry reduced or no voting rights.",
    ],
  },
  {
    title: "Misconceptions About Corporate Listing",
    context:
      "Review optional stock-exchange listing and its implications for corporate finance and governance. Evaluate the following economic assertions:",
    statements: [
      "Listing on a stock exchange is mandatory for every corporation before it may sell products to customers.",
      "An unlisted corporation cannot issue shares to private investors or raise share capital off the exchange.",
      "Initial listing means the corporation will receive every future euro paid whenever shares change hands on the market.",
      "Delisting from an exchange automatically converts a corporation into an unincorporated partnership.",
      "A corporation's stock can but does not have to be listed on a stock market or stock exchange.",
    ],
    explanations: [
      "FALSE — Listing is optional for operating as a corporation.",
      "FALSE — Unlisted firms may still place shares privately.",
      "FALSE — Only IPO proceeds and new issues fund the issuer, not all later trades.",
      "FALSE — Delisting does not remove incorporated legal status.",
      "TRUE — Exchange listing remains a choice, not a universal requirement.",
    ],
  },
  {
    title: "Share Demand Drivers and Market Expectations",
    context:
      "Analyze factors that shift investor demand for shares beyond current dividend payments. Evaluate the following economic assertions:",
    statements: [
      "Expectations of successful new products can raise demand for a corporation's shares.",
      "Expectations of increasing market share can contribute to higher share demand.",
      "Thriving economic conditions can support share demand because more investors have funds available.",
      "High interest rates can reduce share demand by making interest-bearing investments more attractive.",
      "An increase in share prices after issue benefits shareholders rather than supplying new finance to the issuer.",
    ],
    explanations: [
      "TRUE — Product success expectations can attract buyers.",
      "TRUE — Growing market share signals may lift demand.",
      "TRUE — Prosperity leaves more money available to invest in equity.",
      "TRUE — Higher interest rates draw funds toward fixed-return assets.",
      "TRUE — Post-issue gains enrich shareholders, not issuer share capital.",
    ],
  },
  {
    title: "Technology Corporation Board Responsibilities",
    context:
      "Consider a technology corporation whose shareholders elect a board including a chief information officer responsible for systems and tools. Evaluate the following economic assertions:",
    statements: [
      "The chief information officer may sit on the board of directors with defined operational responsibilities.",
      "Shareholders who elected the board must personally perform the chief information officer's daily technical tasks.",
      "Electing a board eliminates shareholders' right to attend the annual stockholders' meeting.",
      "The board of directors makes major business decisions on behalf of shareholders who supplied capital.",
      "A chief information officer must hold the largest block of shares before joining the management board.",
    ],
    explanations: [
      "TRUE — A CIO may be a board member with IT duties.",
      "FALSE — Shareholders delegate operations; they need not run systems personally.",
      "FALSE — Shareholders may still attend meetings and vote.",
      "TRUE — The board decides major matters for capital providers.",
      "FALSE — Board members need not be largest shareholders.",
    ],
  },
  {
    title: "Post-Issue Price Changes and Issuer Finance",
    context:
      "Analyze the boundary between primary share issues and secondary-market trading for corporate funding. Evaluate the following economic assertions:",
    statements: [
      "Rising secondary-market prices require the issuer to record additional share capital equal to traders' gains.",
      "A corporation finances expansion automatically whenever its listed share price reaches a new high.",
      "Shareholders who profit from price rises must return part of the gain to the corporation as mandatory equity injections.",
      "IPO proceeds and later exchange gains are treated identically as recurring share-capital inflows to the issuer.",
      "Price increases after shares have been issued do not provide further financing to the issuing corporation.",
    ],
    explanations: [
      "FALSE — Market gains are not booked as new issuer share capital.",
      "FALSE — Price highs alone do not fund corporate expansion.",
      "FALSE — Trading profits remain with shareholders unless new shares are sold.",
      "FALSE — Only primary issue proceeds count as share-capital inflows.",
      "TRUE — Secondary appreciation does not finance the issuer.",
    ],
  },
  {
    title: "Private Limited Company Characteristics",
    context:
      "Review how private limited companies combine incorporation with restrictions on public share trading. Evaluate the following economic assertions:",
    statements: [
      "Private limited companies are unincorporated businesses because their shares are not publicly traded.",
      "Shares in a private limited company may be sold freely to the general public on any stock exchange.",
      "Private limited companies are incorporated businesses with limited liability for shareholders.",
      "Private limited companies need not list shares on a stock exchange to exist as legal persons.",
      "Shareholders in a private limited company are typically not liable beyond the capital they invested.",
    ],
    explanations: [
      "FALSE — They remain incorporated legal persons despite private ownership.",
      "FALSE — Private shares are not freely sold to the public on exchanges.",
      "TRUE — Private limited firms combine incorporation with limited liability.",
      "TRUE — Listing is not required for incorporated status.",
      "TRUE — Liability is generally capped at invested capital.",
    ],
  },
  {
    title: "Minimum Capital Requirements for Incorporation",
    context:
      "Analyze incorporation rules that require registered capital before certain corporate forms may begin trading. Evaluate the following economic assertions:",
    statements: [
      "Sole proprietorships and partnerships must satisfy the same minimum capital requirements as large listed corporations.",
      "Some incorporated forms face minimum capital requirements that must be met when the company is established.",
      "Minimum capital rules aim to protect creditors by ensuring a base equity buffer in the corporation.",
      "Meeting minimum capital requirements guarantees that shareholders will receive annual dividend payments.",
      "Corporations remain more difficult to set up than unincorporated businesses partly because of formal capital and registration rules.",
    ],
    explanations: [
      "FALSE — Minimum capital rules target certain incorporated forms, not sole traders or partnerships.",
      "TRUE — Some corporations must meet capital thresholds at formation.",
      "TRUE — Minimum capital provides a creditor protection buffer.",
      "FALSE — Dividends remain discretionary even after capital requirements are met.",
      "TRUE — Formal capital and registration add setup complexity versus unincorporated firms.",
    ],
  },
  {
    title: "Food Processing Corporation and Bond Finance",
    context:
      "Consider a food processing corporation planning a new plant and weighing a bond issue against a long-term bank loan. Evaluate the following economic assertions:",
    statements: [
      "Corporations planning large projects may use only share capital and cannot issue bonds or borrow from banks.",
      "Issuing bonds may offer a lower interest rate than a comparable bank loan for large-scale investment.",
      "Bonds, like shares, may be securities traded on regulated financial markets subject to authority oversight.",
      "Bond finance adds debt obligations, whereas share capital does not create a contractual repayment like a loan.",
      "The corporation remains a legal person that can contract for the plant independently of bondholders' personal assets.",
    ],
    explanations: [
      "FALSE — Corporations may combine equity with bonds and bank loans.",
      "TRUE — Bond interest may undercut comparable bank rates.",
      "TRUE — Bonds can trade on regulated markets alongside shares.",
      "TRUE — Debt must be repaid; equity does not carry the same obligation.",
      "TRUE — The incorporated firm contracts in its own name with limited owner exposure.",
    ],
  },
  {
    title: "Annual Stockholders' Meeting and Control",
    context:
      "Review how common shareholders exercise influence despite not managing daily operations. Evaluate the following economic assertions:",
    statements: [
      "Shareholders who do not sit on the board are barred from attending the annual stockholders' meeting.",
      "Investors may buy shares partly to attend the annual stockholders' meeting and vote on major decisions.",
      "Preferred shareholders usually trade stronger dividend claims for reduced or no voting rights at that meeting.",
      "Voting at the stockholders' meeting legally obliges shareholders to perform the chief executive officer's daily duties.",
      "Electing directors removes shareholders' ownership stake because management and ownership must be identical.",
    ],
    explanations: [
      "FALSE — Shareholders may attend meetings even if they are not directors.",
      "TRUE — Voting rights motivate attendance at the annual meeting.",
      "TRUE — Preferred stock often limits voting in return for dividend priority.",
      "FALSE — Voting does not require shareholders to manage daily operations.",
      "FALSE — Ownership persists even when management is delegated.",
    ],
  },
  {
    title: "Comprehensive Corporate Legal Status",
    context:
      "Analyze the integrated features that define corporations within the spectrum of business ownership forms. Evaluate the following economic assertions:",
    statements: [
      "Corporations are incorporated businesses that are legal entities separate from their owners.",
      "Shareholders' liability is usually limited to the amount invested when purchasing shares.",
      "Share capital divided into shares can raise large sums when investors buy newly issued stock.",
      "Corporations may list shares on a regulated stock exchange but are not required to do so.",
      "Management by a board of directors allows separation of ownership and control within the corporation.",
    ],
    explanations: [
      "TRUE — Separate legal personality defines incorporation.",
      "TRUE — Limited liability caps owner exposure at invested capital.",
      "TRUE — Primary share sales can mobilise substantial equity.",
      "TRUE — Listing facilitates trading but remains optional.",
      "TRUE — Boards run operations while shareholders may remain passive owners.",
    ],
  },
);

RAW.push(
  {
    title: "Share Purchase Channels",
    context:
      "Review the two main ways investors acquire corporate stock after incorporation. Evaluate the following economic assertions:",
    statements: [
      "Investors may only acquire shares by purchasing them from the corporation at the annual stockholders' meeting.",
      "Once shares are issued, no further investor may buy stock unless the corporation executes a new IPO each year.",
      "Shares can be bought at initial issue by the corporation or later from another shareholder who sells.",
      "Buying at initial issue provides share capital to the corporation; buying later transfers ownership between investors.",
      "Persons who buy shares become shareholders regardless of whether purchase occurs at issue or on the secondary market.",
    ],
    explanations: [
      "FALSE — Shares trade at issue and on secondary markets, not only at meetings.",
      "FALSE — Secondary trading continues without repeating an IPO annually.",
      "TRUE — Both primary and secondary purchase channels exist.",
      "TRUE — Only primary sales fund the issuer; later trades swap owners.",
      "TRUE — Any share purchase confers shareholder status.",
    ],
  },
  {
    title: "Engineering Firm Share Price Rally",
    context:
      "Consider an engineering firm whose shares rallied after a contract win, though the firm issued no new equity during the rally. Evaluate the following economic assertions:",
    statements: [
      "The contract win obliged the firm to register the rally amount as new share capital on its books.",
      "Expectations of higher future profits from the contract can increase demand and push up share prices.",
      "Shareholders holding stock during the rally may benefit from capital growth if they later sell at higher prices.",
      "The corporation receives the full trading profit whenever existing shareholders sell to new buyers on the exchange.",
      "Rising prices after issue force the board to pay immediate dividends equal to the price increase.",
    ],
    explanations: [
      "FALSE — Secondary rallies do not increase registered share capital.",
      "TRUE — Profit expectations can lift investor demand and prices.",
      "TRUE — Holders may realise capital growth on later sales.",
      "FALSE — Trade proceeds flow between investors, not to the issuer.",
      "FALSE — Dividends remain discretionary and are not tied to price spikes.",
    ],
  },
  {
    title: "Exchange Regulation and Securities Trading",
    context:
      "Analyze the institutional setting in which shares and bonds change hands after a corporation lists. Evaluate the following economic assertions:",
    statements: [
      "A stock exchange is regulated by the authorities as a financial market for securities.",
      "Corporations seeking a listing must comply with certain rules and fulfil listing requirements.",
      "Shares introduced on an exchange at the IPO are thereafter priced largely by demand and supply.",
      "Bonds as well as shares may be bought and sold on such regulated markets.",
      "Listing facilitates trading among many people and businesses but does not oblige the issuer to receive later trade proceeds.",
    ],
    explanations: [
      "TRUE — Authority oversight defines regulated exchanges.",
      "TRUE — Listing demands compliance with exchange rules.",
      "TRUE — Post-IPO prices reflect market demand and supply.",
      "TRUE — Bond trading may occur alongside share trading.",
      "TRUE — Later trades benefit transacting investors, not the issuer's capital account.",
    ],
  },
  {
    title: "Limited Liability Scope",
    context:
      "Review what limited shareholder liability protects and what it does not guarantee. Evaluate the following economic assertions:",
    statements: [
      "Limited liability means shareholders are personally liable for all corporation tax debts without limit.",
      "Shareholders' liability is usually confined to the money they invested when buying shares.",
      "Limited liability protects shareholders from ever losing the market value of their shares when prices fall.",
      "Managers who are not shareholders always enjoy the same limited liability cap as investors who bought stock.",
      "Limited liability distinguishes corporations from many unincorporated forms where owners face broader personal exposure.",
    ],
    explanations: [
      "FALSE — Shareholders are not generally liable for all corporate tax debts beyond investment.",
      "TRUE — Exposure is usually capped at subscribed capital.",
      "FALSE — Market losses on share values can still occur.",
      "FALSE — Non-shareholder managers do not automatically share the same liability shield as investors.",
      "TRUE — Unlimited or broader owner liability marks many unincorporated structures.",
    ],
  },
  {
    title: "Dividends Versus Mandatory Profit Distribution",
    context:
      "Analyze the discretionary nature of dividend policy and its link to investor demand. Evaluate the following economic assertions:",
    statements: [
      "Every corporation must distribute the entire annual profit as dividends to keep its legal personality.",
      "Shareholders may sue to force dividend payments equal to the latest market price of their shares.",
      "Omitting dividends always leaves share prices unchanged because investors care only about capital growth.",
      "Dividends are interest payments on share capital that the corporation must pay regardless of profit.",
      "Dividends are discretionary profit distributions; prolonged omission can reduce share attractiveness and demand.",
    ],
    explanations: [
      "FALSE — Legal personality does not require distributing all profit as dividends.",
      "FALSE — Dividends are not fixed to market prices nor strictly mandatory.",
      "FALSE — Omitted dividends can weaken demand and affect prices.",
      "FALSE — Dividends come from profits, not mandatory interest on capital.",
      "TRUE — Discretionary dividends affect attractiveness when withheld too long.",
    ],
  },
  {
    title: "Family-Owned Private Limited Manufacturer",
    context:
      "Consider a family-owned private limited manufacturer that meets minimum capital requirements but keeps all shares within the family. Evaluate the following economic assertions:",
    statements: [
      "Private limited status removes limited liability because shares are not publicly traded on an exchange.",
      "The manufacturer remains an incorporated legal person able to own equipment and hire workers.",
      "Minimum capital requirements apply only to corporations that immediately list on a stock exchange.",
      "Family shareholders must personally manage production because private companies forbid elected boards.",
      "Shares need not be sold to the general public on an exchange for the firm to operate as a private limited company.",
    ],
    explanations: [
      "FALSE — Private limited firms retain limited liability without public listing.",
      "TRUE — Incorporation gives separate legal personality for assets and hiring.",
      "FALSE — Minimum capital can apply at formation regardless of listing plans.",
      "FALSE — Private firms may still elect boards and delegate management.",
      "TRUE — Private limited companies operate without public share sales.",
    ],
  },
  {
    title: "Interest Rates and Share Investment Alternatives",
    context:
      "Analyze how relative returns on interest-bearing assets shape demand for corporate equity. Evaluate the following economic assertions:",
    statements: [
      "Comparatively low interest rates can increase share demand by making other investments less attractive.",
      "Comparatively high interest rates can pull investors toward interest-bearing alternatives and away from shares.",
      "Economic growth indicators form part of the wider set of factors influencing share demand.",
      "High interest rates always increase share prices because corporations earn more from bank deposits.",
      "Demand shifts from such conditions affect market prices but do not by themselves add share capital to the issuer after issue.",
    ],
    explanations: [
      "TRUE — Low rates raise the relative appeal of equity.",
      "TRUE — High rates favour fixed-return alternatives over shares.",
      "TRUE — Growth signals are among demand influences cited for shares.",
      "FALSE — High rates tend to reduce share demand rather than automatically lift prices.",
      "TRUE — Price effects from demand do not fund the issuer after shares are issued.",
    ],
  },
  {
    title: "Inflation Expectations and Equity Demand",
    context:
      "Review links between inflation, investor behaviour, and secondary-market share prices. Evaluate the following economic assertions:",
    statements: [
      "Comparatively higher inflation may support share demand when investors expect share prices to rise with general prices.",
      "Inflation is among the economic indicators that can influence demand for corporate shares.",
      "Thriving economic conditions with available investable funds can coincide with stronger share demand.",
      "Higher inflation obliges the issuing corporation to inflate its registered share capital whenever consumer prices rise.",
      "Price changes driven by inflation expectations benefit trading shareholders rather than financing the issuer anew.",
    ],
    explanations: [
      "TRUE — Inflation may lift expected share values and demand.",
      "TRUE — Inflation appears among cited demand influences.",
      "TRUE — Prosperity can coincide with stronger equity demand.",
      "FALSE — Registered share capital is not automatically adjusted with inflation.",
      "TRUE — Market gains from inflation expectations accrue to shareholders, not issuer finance.",
    ],
  },
  {
    title: "Chief Executive Officer and Board Structure",
    context:
      "Analyze executive roles within the board that runs a corporation on shareholders' behalf. Evaluate the following economic assertions:",
    statements: [
      "The management board's highest-ranking officer is the Chief Executive Officer who leads corporate execution.",
      "The Chief Financial Officer must be the largest shareholder before overseeing finance and accounting functions.",
      "The Chief Operating Officer may manage operations as a member of the board of directors.",
      "Shareholders elect the board but are neither obliged nor entitled to manage daily operations themselves.",
      "Separation of ownership and management is a defining feature of corporate organisation.",
    ],
    explanations: [
      "TRUE — The CEO heads the management board.",
      "FALSE — CFO duties do not require holding the largest share block.",
      "TRUE — The COO may sit on the board managing operations.",
      "TRUE — Capital providers need not run daily operations.",
      "TRUE — Corporations separate owners from professional managers.",
    ],
  },
  {
    title: "Startup Corporation IPO Proceeds",
    context:
      "Consider a startup corporation that raised funds through an initial public offering and later saw its share price double on the exchange. Evaluate the following economic assertions:",
    statements: [
      "Proceeds from shares sold at the IPO entered the corporation as share capital when investors bought at issue.",
      "Doubling of the secondary-market price after the IPO doubled the cash share capital available inside the firm.",
      "The startup must surrender half of trading gains on the exchange to regulators as additional equity.",
      "Existing shareholders who hold stock after the IPO owe the corporation the difference between issue price and market price.",
      "A higher post-IPO market price creates an automatic right for the corporation to issue unlimited new debt free of interest.",
    ],
    explanations: [
      "TRUE — Primary IPO sales raise share capital inside the firm.",
      "FALSE — Secondary doubling does not double internal cash capital.",
      "FALSE — Regulators do not capture trading gains as issuer equity.",
      "FALSE — Holders are not obliged to pay market premiums back to the firm.",
      "FALSE — Higher prices do not grant unlimited interest-free debt rights.",
    ],
  },
);

RAW.push(
  {
    title: "Corporate Property Ownership and Litigation",
    context:
      "Review legal capacities that flow from treating the corporation as a person under the law. Evaluate the following economic assertions:",
    statements: [
      "A corporation may own land and property in its own name rather than in shareholders' personal names.",
      "Because shareholders have limited liability, the corporation itself cannot be sued for breach of contract.",
      "Hiring employees requires each shareholder to sign every employment contract personally.",
      "The corporation may sue and be sued as a legal entity independent of individual owners.",
      "Legal personality allows the business to close contracts that bind the corporation, not shareholders personally.",
    ],
    explanations: [
      "TRUE — Incorporated firms hold assets in the corporate name.",
      "FALSE — The legal entity remains suable despite owners' limited liability.",
      "FALSE — The corporation hires staff under its own legal personality.",
      "TRUE — Litigation runs against or by the firm itself.",
      "TRUE — Contracts bind the corporation rather than each owner personally.",
    ],
  },
  {
    title: "Nuanced IPO and Capital Accounting",
    context:
      "Analyze accounting for equity when shares move from primary issue to secondary trading. Evaluate the following economic assertions:",
    statements: [
      "The full amount investors pay on the exchange after the IPO is credited to the corporation's share capital account.",
      "Secondary-market buyers pay share capital directly to the issuer unless the board approves a private sale.",
      "Market premiums above issue price during secondary trading increase the corporation's permanent equity base.",
      "Only proceeds from shares bought at initial issue from the corporation typically increase its share capital.",
      "Redemption of share capital is required whenever secondary-market prices fall below the IPO price.",
    ],
    explanations: [
      "FALSE — Secondary payments go to selling shareholders, not share capital.",
      "FALSE — Exchange trades normally occur between investors, not as issuer capital inflows.",
      "FALSE — Trading premiums do not expand permanent registered equity.",
      "TRUE — Primary issue proceeds are what raise issuer share capital.",
      "FALSE — Price falls do not force capital redemption.",
    ],
  },
  {
    title: "Founding Shareholders and Management Roles",
    context:
      "Review whether owners who establish a corporation must also run it. Evaluate the following economic assertions:",
    statements: [
      "People who found the corporation and own shares need not manage the business themselves.",
      "Managers running the corporation need not own shares of the business.",
      "Shareholders may elect directors to represent their interests while remaining passive investors.",
      "The board of directors, not every shareholder, makes major business decisions in typical corporations.",
      "Founders who sell all their shares immediately lose the corporation's legal personality and incorporation status.",
    ],
    explanations: [
      "TRUE — Founders may remain investors without managing.",
      "TRUE — Managers may be non-owners appointed to the board.",
      "TRUE — Passive shareholders elect representatives to the board.",
      "TRUE — Major decisions sit with the board rather than each owner.",
      "FALSE — Incorporation persists; ownership can change without losing legal personality.",
    ],
  },
  {
    title: "Logistics Corporation Dividend Decision",
    context:
      "Consider a logistics corporation that retained all profits for expansion and skipped dividend payments for several years. Evaluate the following economic assertions:",
    statements: [
      "The corporation was not legally obliged to pay dividends despite shareholders' wish for annual income.",
      "Retaining all profits guarantees rising share prices even when no dividends are paid.",
      "Shareholders' limited liability disappears in years when dividends are omitted.",
      "Prolonged omission of dividends may make shares less attractive and weaken investor demand.",
      "Dividends, when paid, represent part of the corporation's profits distributed to shareholders.",
    ],
    explanations: [
      "TRUE — Dividends are discretionary, not legally guaranteed each year.",
      "FALSE — Retention alone does not guarantee price rises.",
      "FALSE — Limited liability is unaffected by dividend policy.",
      "TRUE — Long non-payment can reduce attractiveness and demand.",
      "TRUE — Dividends distribute a portion of profits to owners.",
    ],
  },
  {
    title: "Basic Features of Share Capital",
    context:
      "Analyze how equity funding is organised when a corporation divides ownership into tradable units. Evaluate the following economic assertions:",
    statements: [
      "Share capital is the capital of a corporation divided into shares.",
      "Each share, also called stock, represents a portion of the total share capital.",
      "Selling newly issued shares to investors can raise substantial funds for the corporation.",
      "Share capital is generally long-term capital that the company usually does not redeem.",
      "Shareholders are persons who buy shares and thereby own a stake in the corporation.",
    ],
    explanations: [
      "TRUE — Share capital is capital split into shares.",
      "TRUE — Stock represents a fraction of total share capital.",
      "TRUE — Primary sales can raise large sums.",
      "TRUE — Equity is typically permanent and unredeemed.",
      "TRUE — Share buyers become owners of the corporation.",
    ],
  },
  {
    title: "Integrated Share Market Mechanics",
    context:
      "Analyze primary issuance, exchange listing, and investor motives as one corporate finance system. Evaluate the following economic assertions:",
    statements: [
      "Initial share sales can raise large amounts of share capital for the corporation.",
      "Later exchange trading transfers shares among investors without adding finance to the issuer.",
      "Demand and supply on the exchange determine prices after the initial introduction of shares.",
      "Investors may seek dividends, capital growth, or voting influence when buying stock.",
      "Economic growth, inflation, and interest rates can all influence demand for shares.",
    ],
    explanations: [
      "TRUE — Primary issues fund the corporation through share capital.",
      "TRUE — Secondary trades move ownership without issuer finance.",
      "TRUE — Post-introduction prices follow market forces.",
      "TRUE — Motives include income, growth, and voting rights.",
      "TRUE — Multiple macro indicators shape share demand.",
    ],
  },
  {
    title: "Corporate Debt and Equity Mix",
    context:
      "Review the main external funding sources highlighted for incorporated businesses. Evaluate the following economic assertions:",
    statements: [
      "Share capital is a principal financial fund available to corporations alongside borrowing.",
      "Loans and credit also form part of the financial funds corporations may use.",
      "Corporations typically have more funding options than sole proprietors or partnerships.",
      "Bonds may be issued as an alternative to bank loans for raising debt finance.",
      "Share capital differs from debt because it does not create the same contractual repayment obligation as a loan.",
    ],
    explanations: [
      "TRUE — Equity and debt both fund corporations.",
      "TRUE — Borrowing complements share capital.",
      "TRUE — Incorporated firms access broader finance channels.",
      "TRUE — Bonds compete with bank loans as debt sources.",
      "TRUE — Equity lacks the fixed repayment duty of debt.",
    ],
  },
  {
    title: "Pharmaceutical Corporation Listing Choice",
    context:
      "Consider a pharmaceutical corporation that remains unlisted while still issuing shares privately to institutional investors. Evaluate the following economic assertions:",
    statements: [
      "A corporation cannot raise share capital unless its stock is listed on a public stock exchange.",
      "An unlisted corporation may still be a legal person owning laboratories and hiring researchers.",
      "Private share placements can supply equity without an initial public offering on an exchange.",
      "Shareholders in such a corporation retain limited liability tied to their investment.",
      "Listing remains optional; exchange trading mainly facilitates secondary transfers among many market participants.",
    ],
    explanations: [
      "FALSE — Private placements can raise equity without listing.",
      "TRUE — Unlisted firms remain incorporated legal persons.",
      "TRUE — Equity can be raised off-exchange through private sales.",
      "TRUE — Limited liability applies to private shareholders.",
      "TRUE — Listing is optional and mainly aids broad secondary trading.",
    ],
  },
  {
    title: "Voting Rights and Share Classes",
    context:
      "Analyze how common and preferred stock divide control and income rights among shareholders. Evaluate the following economic assertions:",
    statements: [
      "At the annual stockholders' meeting, common stockholders ordinarily exercise voting rights on major resolutions.",
      "Preferred shareholders always hold superior voting power over common shareholders at every meeting.",
      "Preferred shares often trade voting rights for priority in dividend payments.",
      "Investors may purchase shares partly to influence corporate decisions through those voting rights.",
      "Dividend priority for preferred stock does not eliminate the discretionary nature of overall dividend policy.",
    ],
    explanations: [
      "TRUE — Common stock usually carries meeting votes.",
      "FALSE — Preferred holders typically forgo voting for dividend priority.",
      "TRUE — Preferred shares exchange votes for income preference.",
      "TRUE — Voting rights motivate some equity purchases.",
      "TRUE — Even preferred priority leaves dividends discretionary overall.",
    ],
  },
  {
    title: "Construction Corporation Capital Structure",
    context:
      "Consider a construction corporation combining share capital from investors with a long-term bank loan for equipment. Evaluate the following economic assertions:",
    statements: [
      "The corporation may finance operations through both share capital and loans.",
      "Using bank loans prevents the corporation from also issuing shares to raise equity.",
      "Loan capital and share capital are identical because both eliminate shareholder liability completely.",
      "Shareholders' liability generally remains limited to their invested capital despite additional borrowing.",
      "Bond issues are unavailable to corporations that already owe money to a commercial bank.",
    ],
    explanations: [
      "TRUE — Corporations mix equity with debt finance.",
      "FALSE — Bank loans do not block subsequent share issues.",
      "FALSE — Debt and equity differ; neither removes limited liability for shareholders.",
      "TRUE — Borrowing does not expand shareholders' personal liability beyond investment.",
      "FALSE — Bond issues may still be used alongside existing bank debt.",
    ],
  },
);

const BANNED = [
  /\bAT&S\b/i,
  /\bTina\b/i,
  /\bSteve\b/i,
  /\bGerstenmayer\b/i,
  /\bStoisser/i,
  /\bMoitzi\b/i,
  /\baccording to the book\b/i,
  /\bthe book\b/i,
  /\(alt/i,
];

const endRe = /Evaluate the following economic assertions:\s*$/i;

function wordCount(s) {
  return String(s).trim().split(/\s+/).length;
}

function validate(cases) {
  const errors = [];
  const stmts = new Map();
  const trueHist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const diffHist = {};

  if (cases.length !== 50) errors.push(`Total ${cases.length} ≠ 50`);

  for (const c of cases) {
    const tc = c.answer_key.filter(Boolean).length;
    trueHist[tc] = (trueHist[tc] || 0) + 1;
    diffHist[c.difficulty_level] = (diffHist[c.difficulty_level] || 0) + 1;

    if (c.subsection !== "4.3") errors.push(`${c.case_id}: bad subsection`);
    if (c.tier !== "full") errors.push(`${c.case_id}: tier must be full`);
    if (c.statements.length !== 5) errors.push(`${c.case_id}: need 5 statements`);
    if (!endRe.test(String(c.context).trim())) errors.push(`${c.case_id}: bad context ending`);
    if (String(c.context).trim().length < 70) errors.push(`${c.case_id}: context too short`);

    const slot = slots.find((s) => s.case_id === c.case_id);
    if (!slot) errors.push(`${c.case_id}: missing slot`);
    else {
      if (c.difficulty_level !== slot.difficulty_level)
        errors.push(`${c.case_id}: difficulty ${c.difficulty_level} ≠ ${slot.difficulty_level}`);
      for (let i = 0; i < 5; i++) {
        if (c.answer_key[i] !== slot.answer_key[i])
          errors.push(`${c.case_id}[${i}]: answer mismatch`);
      }
    }

    const blob = [c.context, c.title, ...c.statements, ...c.tactical_explanations].join(" ");
    for (const ban of BANNED) {
      if (ban.test(blob)) errors.push(`${c.case_id}: banned ${ban}`);
    }

    for (let i = 0; i < 5; i++) {
      const pref = c.answer_key[i] ? "TRUE —" : "FALSE —";
      if (!c.tactical_explanations[i].startsWith(pref))
        errors.push(`${c.case_id}[${i}]: explanation prefix`);
      const fp = c.statements[i].trim().toLowerCase();
      if (stmts.has(fp)) errors.push(`Duplicate: ${c.case_id} <-> ${stmts.get(fp)}`);
      else stmts.set(fp, c.case_id);
      const w = wordCount(c.statements[i]);
      if (w < 5 || w > 45) errors.push(`${c.case_id}[${i}]: words ${w}`);
    }
  }

  for (let k = 1; k <= 5; k++) {
    if (trueHist[k] !== 10) errors.push(`true-count ${k}: ${trueHist[k]} (want 10)`);
  }

  return { errors, trueHist, diffHist };
}

if (RAW.length !== 50) throw new Error(`RAW length ${RAW.length} ≠ 50`);

const cases = RAW.map((r, i) => {
  const slot = slots[i];
  return {
    subsection: "4.3",
    case_id: slot.case_id,
    title: r.title,
    context: r.context,
    statements: r.statements,
    answer_key: slot.answer_key,
    tactical_explanations: r.explanations,
    difficulty_level: slot.difficulty_level,
    tier: "full",
  };
});

cases.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));

const { errors, trueHist, diffHist } = validate(cases);
if (errors.length) {
  console.error("Validation failed:\n" + errors.join("\n"));
  process.exit(1);
}

const outPath = "scripts/ch4-part-4.3.json";
fs.writeFileSync(outPath, JSON.stringify(cases, null, 2) + "\n");
console.log("OK:", outPath);
console.log("Cases:", cases.length);
console.log("TRUE hist:", trueHist);
console.log("DIFF hist:", diffHist);
console.log("Unique statements:", new Set(cases.flatMap((c) => c.statements.map((s) => s.toLowerCase()))).size);
