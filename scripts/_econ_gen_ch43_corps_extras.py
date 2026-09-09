#!/usr/bin/env python3
"""Generate unique Fuhrmann-aligned corporation cases CASE 4.3.51–4.3.79."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"

# Length roles rotate so each case varies openings and depth.
# Roles: C=compact(~220-280), S=standard(~320-480), E=expanded(~550-750)

CASES = [
  {
    "case_id": "CASE 4.3.51",
    "title": "Alpine Sensors AG as a Separate Legal Person",
    "context": "Three engineers incorporate Alpine Sensors AG in Austria so the firm itself can hold patents, hire staff, and face suppliers in its own name. Evaluate the following economic assertions:",
    "statements": [
      "Once incorporated, Alpine Sensors AG is a legal entity of its own with rights and obligations comparable to those of natural persons in business life.",
      "As a legal person, Alpine Sensors AG can own laboratory equipment and land, hire technicians, and close supply contracts in the company’s name.",
      "If a supplier sues over unpaid circuit boards, the lawsuit is brought against Alpine Sensors AG rather than automatically against each engineer’s private name.",
      "The founding engineers must personally manage every production shift because shareholders of a corporation are always also its day-to-day managers.",
      "A hired plant manager at Alpine Sensors AG may run operations without owning any shares in the company.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "2/5",
    "scenes": [
      "Alpine Sensors AG filing patents under the company name",
      "the AG buying oscilloscopes for the lab",
      "a supplier lawsuit over unpaid boards",
      "engineers who want to stay at the bench while a CEO runs meetings",
      "a plant manager with no equity stake",
    ],
    "facts": [
      "Corporations are legal entities of their own with the same rights and obligations as people in business life.",
      "Legal persons can own land and property, hire people, and close contracts.",
      "Corporations can sue and be sued in their own name.",
      "Shareholders need not manage the business; managers need not own shares.",
      "Managers need not own a share of the business.",
    ],
    "notes": {3: "Shareholders elect a board; they are neither obliged nor automatically entitled to manage day to day."},
  },
  {
    "case_id": "CASE 4.3.52",
    "title": "Secondary Trading After HarborBake’s Share Rally",
    "context": "HarborBake AG issued shares at €12. Months later the stock trades at €19 on the exchange while the bakery expands ovens from retained earnings and a bank loan. Evaluate the following economic assertions:",
    "statements": [
      "When HarborBake’s share price rises from €12 to €19 in secondary trading, that price rise itself injects fresh share capital into the company’s bank account.",
      "Investors who bought HarborBake shares from other shareholders on the exchange are the parties who gain or lose from the secondary price move.",
      "HarborBake can still finance oven expansion with loans and credit even though share capital was raised earlier at issue.",
      "An increase in HarborBake’s listed share price after issue has no additional financing effect for the issuing corporation.",
      "Only secondary-market price rises, not the original sale of newly issued shares, can ever raise money for HarborBake.",
    ],
    "answer_key": [False, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "HarborBake shares jumping to €19 on the screen",
      "traders swapping HarborBake stock among themselves",
      "the bakery arranging a bank loan for new ovens",
      "finance staff noting no cash arrives from the ticker move",
      "the original IPO cash versus later trading",
    ],
    "facts": [
      "Secondary price rises benefit shareholders, not the issuer’s cash.",
      "Secondary trading is among investors; gains accrue to them.",
      "Corporate funds comprise share capital as well as loans and credit.",
      "Textbook: post-issue price increases have no additional financing effect for the issuer.",
      "Initial issue of shares raises share capital for the corporation.",
    ],
    "notes": {0: "Issue cash arrives when shares are first sold by the company; later exchange trades reshuffle ownership among investors."},
  },
  {
    "case_id": "CASE 4.3.53",
    "title": "Limited Liability at RiverGrid SE",
    "context": "RiverGrid SE raises share capital from many investors to build grid software. Creditors later claim unpaid server bills after a project fails. Evaluate the following economic assertions:",
    "statements": [
      "Shareholders of RiverGrid SE are usually liable only up to the money they invested when buying their shares.",
      "Creditors of RiverGrid SE claim first against the company’s assets rather than treating every shareholder’s private home as automatic collateral.",
      "Because RiverGrid SE is a corporation, every shareholder faces unlimited liability for all of the firm’s debts.",
      "Founding RiverGrid SE is typically more difficult than setting up a sole proprietorship, even though limited liability is a key advantage.",
      "Managers who run RiverGrid SE must personally guarantee every corporate debt with their private assets simply because they hold executive titles.",
    ],
    "answer_key": [True, True, False, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "investors writing cheques for RiverGrid shares",
      "creditors lining up against company servers and cash",
      "a false claim that private homes are automatically on the line",
      "lawyers filing more paperwork than a sole trader would",
      "a COO without a personal guarantee clause",
    ],
    "facts": [
      "Shareholders’ liability is usually limited to the amount invested when buying shares.",
      "Creditors pursue the company as legal person.",
      "Unlimited liability is for unincorporated forms, not the usual corporate rule.",
      "Corporations are more difficult to set up.",
      "Managers need not own shares and are not automatically unlimitedly liable as sole traders are.",
    ],
    "notes": {2: "Limited liability is the core owner protection of the corporate form in the book."},
  },
  {
    "case_id": "CASE 4.3.54",
    "title": "Ownership Without Day-to-Day Control at NordLift AG",
    "context": "NordLift AG builds warehouse elevators. Outside investors hold most shares while a professional board and CEO run strategy. Evaluate the following economic assertions:",
    "statements": [
      "Shareholders of NordLift AG provide share capital but are neither obliged nor automatically entitled to manage the company day to day.",
      "The board of directors of NordLift AG is elected by the shareholders to make major business decisions and represent the owners.",
      "The highest-ranking manager on NordLift’s board is commonly called the Chief Executive Officer (CEO).",
      "Because shareholders own NordLift AG, each shareholder must personally approve every purchase order before suppliers are paid.",
      "A Chief Financial Officer on NordLift’s board may oversee finance without personally owning any NordLift shares.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "2/5",
    "scenes": [
      "outside investors wiring capital but skipping the shop floor",
      "shareholders electing NordLift’s board at the AGM",
      "the CEO chairing strategy on elevators",
      "a purchase-order myth that every owner must sign",
      "a CFO without an equity stake",
    ],
    "facts": [
      "Shareholders need not manage; they elect directors.",
      "Board of directors is elected by shareholders for major decisions.",
      "CEO is the highest-ranking manager of the board in the book’s framing.",
      "Day-to-day purchasing is management, not a mandatory shareholder vote on every PO.",
      "Managers need not own shares.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.55",
    "title": "Why Mesa Parts Chooses Incorporation for Funding Reach",
    "context": "Mesa Parts compares staying a partnership with incorporating so it can attract more share capital and debt for a new plating line. Evaluate the following economic assertions:",
    "statements": [
      "Corporations such as a future Mesa Parts AG are generally more difficult to set up than sole proprietorships or partnerships.",
      "Corporations usually have more options to raise financial funds than sole proprietors and partnerships.",
      "Once Mesa Parts is a corporation, its financial funds can mainly comprise share capital as well as loans and credit.",
      "Incorporation would force Mesa Parts to finance the plating line exclusively with share capital and forbid any bank loan.",
      "Shareholders of Mesa Parts AG would usually face liability limited to the capital they invested in shares, unlike unlimited liability in a general partnership.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "3/5",
    "scenes": [
      "founders comparing AG paperwork to a simple partnership agreement",
      "bankers and equity investors both on Mesa Parts’ call list",
      "a funding mix of shares plus credit for the plating line",
      "a myth that corporations cannot borrow",
      "limited liability versus OG-style unlimited exposure",
    ],
    "facts": [
      "Corporations are more difficult to set up.",
      "Corporations usually have more funding options.",
      "Funds mainly comprise share capital as well as loans and credit.",
      "Loans and credit remain available.",
      "Limited liability to invested capital.",
    ],
    "notes": {3: "Share capital and debt sit side by side in the corporate funding menu."},
  },
  {
    "case_id": "CASE 4.3.56",
    "title": "Share Slices at VoltMeter AG",
    "context": "VoltMeter AG sets share capital at €800,000 divided into 40,000 shares. Evaluate the following economic assertions:",
    "statements": [
      "If VoltMeter’s €800,000 share capital is divided into 40,000 shares, each share represents €20 of that share capital at issue.",
      "Persons who buy VoltMeter shares become shareholders of the corporation.",
      "VoltMeter shares can be bought at initial issue by the corporation or later from another shareholder who sells.",
      "If all 40,000 shares are sold at the €20 issue amount, VoltMeter gains €800,000 as share capital.",
      "Share capital at VoltMeter must be redeemed by the company each year like a short-term bank overdraft.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "splitting €800,000 across 40,000 share certificates",
      "buyers becoming VoltMeter shareholders",
      "IPO desks and later private resales",
      "cash landing when the full issue sells",
      "a false annual redemption calendar",
    ],
    "facts": [
      "Value per share = share capital ÷ number of shares.",
      "Buyers of shares become shareholders.",
      "Shares bought at issue or later from other shareholders.",
      "Selling all shares raises the full share capital.",
      "Share capital is usually not redeemed; it is long-term or permanent capital.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.57",
    "title": "Listing Rules for Glacier Soft on the Exchange",
    "context": "Glacier Soft AG wants its shares listed so investors can trade them easily on a regulated stock exchange. Evaluate the following economic assertions:",
    "statements": [
      "A stock exchange is a financial market, regulated by the authorities, where shares and other securities such as bonds can be bought and sold.",
      "Corporations that want Glacier Soft shares listed must comply with certain rules and fulfil listing requirements.",
      "Every corporation automatically has its shares listed on a stock exchange whether or not it applies or meets listing rules.",
      "Among well-known exchanges the book cites markets such as the New York Stock Exchange, Nasdaq, and major European venues including Deutsche Börse.",
      "Once listed, Glacier Soft may also see bonds traded on exchanges as securities alongside shares.",
    ],
    "answer_key": [True, True, False, True, True],
    "difficulty_level": "3/5",
    "scenes": [
      "traders on a regulated exchange floor or screen",
      "Glacier Soft lawyers ticking listing checklists",
      "a private AG that never lists",
      "comparing NYSE, Nasdaq, and Frankfurt",
      "bond lots trading beside equity lots",
    ],
    "facts": [
      "Stock exchange definition with shares and bonds.",
      "Listing requires compliance with rules.",
      "Stock need not be listed; listing is optional.",
      "Book lists major world and European exchanges.",
      "Securities include bonds as well as shares.",
    ],
    "notes": {2: "A corporation’s stock can but does not have to be listed."},
  },
  {
    "case_id": "CASE 4.3.58",
    "title": "IPO Cash Versus Later Trades at CanvasWorks",
    "context": "CanvasWorks AG completes an IPO at €25 per share, then watches the price drift to €33 as investors trade among themselves. Evaluate the following economic assertions:",
    "statements": [
      "At the IPO, CanvasWorks introduces shares on the exchange at a certain issue price and raises share capital from buyers of the newly issued stock.",
      "After the IPO, secondary prices are determined by demand and supply among investors.",
      "When demand for CanvasWorks shares is high, prices usually go up according to the laws of supply and demand.",
      "The rise from €25 to €33 after issue automatically remits €8 per share of extra financing to CanvasWorks’ treasury.",
      "Share capital raised at issue is long-term or even permanent capital and is usually not redeemed like a loan.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "3/5",
    "scenes": [
      "CanvasWorks ringing the IPO bell at €25",
      "order books setting the secondary price",
      "crowds bidding shares higher",
      "treasury staff waiting for cash that never arrives from the €33 print",
      "share capital sitting as permanent equity",
    ],
    "facts": [
      "IPO introduces shares at an issue price and raises capital.",
      "Later prices follow demand and supply.",
      "High demand usually lifts prices.",
      "Post-issue rises do not finance the issuer.",
      "Share capital is long-term/permanent and usually not redeemed.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.59",
    "title": "Board Roles at AT&S-Style Management Structure",
    "context": "A listed electronics AG organises its board with a CEO, a finance lead, and a COO covering production, echoing the book’s AT&S example. Evaluate the following economic assertions:",
    "statements": [
      "The board of directors is elected by shareholders to make major business decisions and to represent the shareholders.",
      "Beside the CEO, board members may hold roles such as CFO, COO, CIO, or CMO with distinct task bundles.",
      "In the book’s AT&S illustration, different board members are responsible for areas such as finance and accounting, production, and sales or marketing clusters.",
      "Shareholders who only provide money for share capital are neither obliged nor entitled to manage the company in place of the board.",
      "Because a COO exists, the corporation no longer needs shareholders to elect any board at all.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "AGM ballots electing directors",
      "nameplates for CEO, CFO, and COO",
      "AT&S-style split of finance versus production briefs",
      "passive capital providers staying off the shop floor",
      "a myth that one COO replaces board elections",
    ],
    "facts": [
      "Board elected by shareholders.",
      "Multiple C-level roles on the board.",
      "AT&S example splits responsibilities across board members.",
      "Shareholders not obliged/entitled to manage.",
      "Board election remains the governance link from owners.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.60",
    "title": "Macro Drivers of Demand for GreenRail Shares",
    "context": "Investors debate whether to buy GreenRail AG shares as growth, inflation, and interest-rate news hits the headlines. Evaluate the following economic assertions:",
    "statements": [
      "Rising demand for GreenRail shares can reflect expectations that the business is doing well, will make profits soon, or will successfully introduce a new product.",
      "Demand for shares is also influenced by economic indicators such as economic growth, interest rates, and inflation.",
      "There is usually higher demand for shares when the economy is thriving because many people have money to invest.",
      "Comparatively high interest rates typically make other investments more attractive and can reduce the relative appeal of shares.",
      "Share demand is determined only by last quarter’s dividend and is completely unaffected by inflation or growth indicators.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "analysts forecasting GreenRail profits and a new train product",
      "screens flashing growth, rates, and inflation",
      "a booming economy freeing cash for equity",
      "high deposit rates pulling money away from shares",
      "a false single-factor dividend-only model",
    ],
    "facts": [
      "Expectations about performance and products lift demand.",
      "Growth, interest rates, inflation influence demand.",
      "Thriving economy → higher share demand.",
      "High interest rates make other investments more attractive.",
      "Multiple indicators matter, not dividends alone.",
    ],
    "notes": {4: "The book lists several demand drivers together, including macro indicators."},
  },
  {
    "case_id": "CASE 4.3.61",
    "title": "Why Lea Buys Shares in MeadowCare AG",
    "context": "Lea considers buying MeadowCare AG shares for support, income, growth, voting, and inflation-resistant real values. Evaluate the following economic assertions:",
    "statements": [
      "One reason to buy MeadowCare shares is the intent to provide money for a business Lea believes in and wants to support financially.",
      "Lea may seek annual income through dividends, which are parts of the corporation’s profits paid to shareholders.",
      "Lea may hope for capital growth if share prices rise and she can later sell above her purchase price.",
      "Holding common stock can let Lea attend the annual stockholders’ meeting and vote on some business decisions.",
      "A corporation is legally obliged to pay MeadowCare dividends every single year regardless of profits or board policy.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "Lea wiring support capital into MeadowCare",
      "waiting for a dividend credit",
      "watching the quote for capital growth",
      "Lea at the AGM with a voting card",
      "a board skipping a dividend in a weak year",
    ],
    "facts": [
      "Support motive listed in the book.",
      "Dividends are (part of) profits paid to shareholders.",
      "Capital growth motive.",
      "Common stock voting at the stockholders’ meeting.",
      "No obligation to pay dividends; prolonged non-payment may hurt attractiveness.",
    ],
    "notes": {4: "No obligation to pay dividends, but long droughts can make shares less attractive."},
  },
  {
    "case_id": "CASE 4.3.62",
    "title": "Corner Café GmbH Without a Public Float",
    "context": "Maya and Tom consider a GmbH for their neighbourhood café so liability is limited without listing shares on an exchange. Evaluate the following economic assertions:",
    "statements": [
      "As a private limited company, a GmbH is still a legal person and the owners’ liability is limited.",
      "Shares in such private limited companies are usually not sold to the general public on the stock exchange but offered among the owners.",
      "In Austria, the minimum capital for a GmbH is about €35,000, which is lower than the AG minimum but still a barrier versus a simple partnership.",
      "Examples of private limited forms include the US LLC, the UK private company limited by shares, and the Austrian/German GmbH.",
      "Choosing a GmbH means Maya and Tom automatically list the café’s shares on the Vienna Stock Exchange at founding.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "café owners signing GmbH papers for limited liability",
      "share transfers only among co-owners",
      "comparing €35,000 GmbH capital with €70,000 AG capital",
      "LLC / Ltd / GmbH nameplates across countries",
      "no IPO ticker for the corner café",
    ],
    "facts": [
      "Private limited companies are legal persons with limited liability.",
      "Shares usually not sold to the general public on exchanges.",
      "Austrian GmbH minimum ≈ €35,000.",
      "LLC, UK private company, GmbH are examples.",
      "No automatic public listing.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.63",
    "title": "Dividend Drought and PineTech Share Appeal",
    "context": "PineTech AG reports profits but pays no dividend for several years while investors watch the share price. Evaluate the following economic assertions:",
    "statements": [
      "Dividends are parts of the corporation’s profits that may be paid to shareholders.",
      "There is no obligation for PineTech AG to pay dividends every year.",
      "If no dividends are paid over a longer period, PineTech shares might become unattractive and falling demand might pressure the share price.",
      "Investors may still hold PineTech for capital growth even when current dividends are zero.",
      "Because PineTech made a profit, the law forces an immediate full payout of all profit as dividends to every shareholder.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "defining dividends from PineTech profits",
      "a board meeting that skips the payout",
      "investors drifting away after a long drought",
      "growth investors still watching the quote",
      "a false mandatory full-payout rule",
    ],
    "facts": [
      "Dividends are (part of) profits paid to shareholders.",
      "No obligation to pay.",
      "Long non-payment can reduce attractiveness and demand.",
      "Capital growth is a separate motive.",
      "No forced full annual payout of all profit.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.64",
    "title": "Preferred Stock Without AGM Votes at QuartzPay",
    "context": "QuartzPay AG issues both common shares with voting rights and preferred shares that pay a higher dividend but skip the vote. Evaluate the following economic assertions:",
    "statements": [
      "Common stock typically includes the right to vote at the stockholders’ meeting.",
      "Shareholders of preferred shares of stock do not have that voting right but earn a higher dividend.",
      "A wish to attend the annual stockholders’ meeting and influence decisions is one listed reason people invest in shares.",
      "Preferred QuartzPay shareholders automatically receive more votes per share than common shareholders.",
      "Dividend income and voting influence are distinct motives that need not travel together on every share class.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "3/5",
    "scenes": [
      "common holders raising hands at the AGM",
      "preferred holders collecting a richer dividend cheque",
      "an investor who mainly wants a voice at the meeting",
      "a false claim that preferred stock votes more",
      "separating income and control motives",
    ],
    "facts": [
      "Common stock includes voting rights.",
      "Preferred: no vote, higher dividend.",
      "AGM voting listed among investment reasons.",
      "Preferred do not get extra votes; they lack the vote.",
      "Motives differ by share class.",
    ],
    "notes": {3: "Preferred shares trade voting power for a higher dividend in the book’s contrast."},
  },
  {
    "case_id": "CASE 4.3.65",
    "title": "Supply, Demand, and BlueHarbor Quote Moves",
    "context": "BlueHarbor AG is already listed; order flow—not a new share issue—sets the daily price. Evaluate the following economic assertions:",
    "statements": [
      "After listing, BlueHarbor share prices are determined by demand and supply.",
      "According to the laws of supply and demand, prices usually go up if demand for shares is high and vice versa.",
      "Expectations that BlueHarbor will increase market share can raise demand for its shares.",
      "A secondary price jump finances BlueHarbor with new equity cash equal to the entire price increase times shares outstanding.",
      "Economic growth news can influence demand for BlueHarbor shares alongside firm-specific expectations.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "2/5",
    "scenes": [
      "the BlueHarbor order book balancing bids and offers",
      "a demand spike lifting the quote",
      "rumours of rising market share pulling buyers in",
      "no treasury wire from a secondary spike",
      "macro growth headlines on investor screens",
    ],
    "facts": [
      "Prices set by demand and supply.",
      "High demand → higher prices.",
      "Market-share expectations can lift demand.",
      "No issuer financing from secondary rises.",
      "Economic growth among demand influences.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.66",
    "title": "Two Designers Incorporating StudioPixel AG",
    "context": "Ira and Sam want equal ownership, limited liability, and the option to hire a managing director while they design. Evaluate the following economic assertions:",
    "statements": [
      "Incorporating as StudioPixel AG creates a legal person separate from Ira and Sam as natural persons.",
      "Ira and Sam can own shares without being obliged to manage every client meeting themselves.",
      "Their liability as shareholders is usually limited to the capital they invest in shares.",
      "Founding an Austrian AG requires meeting a minimum capital requirement of about €70,000.",
      "Because they are only two people, StudioPixel cannot be a corporation and must remain a sole proprietorship.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "StudioPixel appearing on contracts as its own person",
      "a hired MD taking client calls",
      "homes protected beyond invested share capital",
      "€70,000 AG capital hurdle in Austria",
      "a false rule that two founders block incorporation",
    ],
    "facts": [
      "Corporation = separate legal person.",
      "Shareholders need not manage.",
      "Limited liability to invested capital.",
      "AG minimum ≈ €70,000 in Austria.",
      "Corporations can have multiple shareholders; sole proprietorship is one owner unincorporated.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.67",
    "title": "Permanent Share Capital at Orbit Tools",
    "context": "Orbit Tools AG treats share capital as long-term equity while revolving an overdraft for materials. Evaluate the following economic assertions:",
    "statements": [
      "Share capital is usually not redeemed by Orbit Tools the way a loan principal is repaid on a schedule.",
      "Share capital is described as long-term capital or even permanent capital.",
      "Huge amounts of money can be raised from the sale of shares when many investors subscribe.",
      "Orbit Tools’ overdraft is a flexible short-term credit instrument, not the same thing as permanent share capital.",
      "Share capital must be fully repaid to shareholders within twelve months of issue like a short-term credit.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "no annual redemption cheque for share capital",
      "equity labelled permanent on the funding map",
      "a large subscription filling the share issue",
      "materials paid from an overdraft line",
      "a false twelve-month equity repayment myth",
    ],
    "facts": [
      "Share capital usually not redeemed.",
      "Long-term or permanent capital.",
      "Large sums possible via share sales.",
      "Overdraft ≠ share capital.",
      "Not short-term repayable like credit.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.68",
    "title": "Bond Issue Versus Bank Loan at SteelSpan AG",
    "context": "SteelSpan AG needs long-term funds for a plant and compares issuing bonds with taking a large bank loan. Evaluate the following economic assertions:",
    "statements": [
      "Big corporations can issue bonds, treated as a loan between investor-creditors and the corporation.",
      "Bond investors provide money for a period based on agreed repayment timing and interest.",
      "Issuing bonds can be more attractive than bank borrowing when the bond interest rate is lower than the bank loan rate.",
      "Bondholders of SteelSpan become shareholders with voting rights at the AGM simply by lending via bonds.",
      "Borrowing large sums at relatively low interest can help fund long-term assets such as plants and infrastructure.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "4/5",
    "scenes": [
      "SteelSpan packaging a bond for many creditors",
      "the bond prospectus fixing interest and tenor",
      "treasurers comparing bond coupons with bank quotes",
      "bondholders without AGM voting cards",
      "cash flowing into a new plant build",
    ],
    "facts": [
      "Bonds = loan from investors as creditors.",
      "Agreement on repayment and interest.",
      "Bond rates often lower than bank loans.",
      "Bondholders are creditors, not owners.",
      "Low-rate large borrowing funds long-term assets.",
    ],
    "notes": {3: "Bonds create creditors; shares create owners."},
  },
  {
    "case_id": "CASE 4.3.69",
    "title": "Contracts and Litigation in the Name of FoamLab AG",
    "context": "FoamLab AG signs leases, hires chemists, and litigates over a patent dispute entirely in the company’s name. Evaluate the following economic assertions:",
    "statements": [
      "As a legal person, FoamLab AG can close contracts in its own name.",
      "FoamLab AG can hire people as the employing legal person.",
      "FoamLab AG may sue and be sued in litigation concerning its business.",
      "Legal personality means FoamLab is completely identical with each shareholder’s private legal identity.",
      "Owning laboratory property in the company’s name is consistent with corporate legal personality.",
    ],
    "answer_key": [True, True, True, False, True],
    "difficulty_level": "2/5",
    "scenes": [
      "a lease signed by FoamLab AG",
      "chemists on the company payroll",
      "court papers naming FoamLab AG",
      "a false identity collapse into private persons",
      "title deeds listing the AG as owner",
    ],
    "facts": [
      "Legal persons close contracts.",
      "They hire people.",
      "They sue and are sued.",
      "Corporation is a legal entity of its own, not identical with owners.",
      "Can own land and property.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.70",
    "title": "Listed Retailer: Investor Gains Without Issuer Cash",
    "context": "ShopNova AG is listed; retail investors cheer a price rally while the firm’s next cash raise would require a new issue or debt. Evaluate the following economic assertions:",
    "statements": [
      "Investors may gain from capital growth when ShopNova’s share price rises and they sell above cost.",
      "That secondary rally does not by itself provide additional financing to ShopNova.",
      "ShopNova can still seek loans or credit as corporate funding tools alongside earlier share capital.",
      "Dividends, if paid, are income to shareholders from (part of) profits, not a repayment of share capital like a loan redemption.",
      "Every listed price increase must be matched by an equal cash deposit from the exchange into ShopNova’s account.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "a ShopNova holder selling into strength",
      "treasury unchanged by the ticker",
      "a parallel bank facility discussion",
      "a dividend labelled as profit share, not loan payback",
      "a mythical exchange cash pipe to the issuer",
    ],
    "facts": [
      "Capital growth motive for investors.",
      "No additional issuer financing from secondary rises.",
      "Loans and credit remain available.",
      "Dividends ≠ loan-style redemption of share capital.",
      "No automatic cash from price increases.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.71",
    "title": "Percent Ownership from NanoFilter Share Counts",
    "context": "NanoFilter AG has €1,000,000 share capital in 100,000 shares; each share is €10 or 0.001% of capital at that split. Evaluate the following economic assertions:",
    "statements": [
      "With €1,000,000 capital and 100,000 shares, each share represents €10 of share capital.",
      "Each such share also represents 0.001 percent of the share capital in the book’s illustrative arithmetic.",
      "Buying ten such shares at issue would represent 0.01 percent of NanoFilter’s share capital.",
      "Share capital figures like AT&S’s large euro total in the book show that substantial sums can be raised via shares.",
      "If NanoFilter later trades at €18, the company automatically rewrites share capital up to €1,800,000 without issuing new shares.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "dividing a million euros into 100,000 slices",
      "0.001% stamped on one certificate",
      "ten certificates as 0.01%",
      "AT&S-scale share capital as a real-world size hint",
      "market price ≠ automatic rewrite of issued share capital",
    ],
    "facts": [
      "Book example: €1,000,000 / 100,000 = €10.",
      "Also 0.001% of capital.",
      "Ten shares → 0.01%.",
      "Large AG share capital possible.",
      "Secondary prices do not redefine issued share capital as new financing.",
    ],
    "notes": {4: "Market price moves among traders; issued share capital is set by shares actually issued for capital."},
  },
  {
    "case_id": "CASE 4.3.72",
    "title": "Myths About Mandatory Listing for Every AG",
    "context": "Students claim every Austrian AG must list immediately; the book distinguishes incorporation from listing. Evaluate the following economic assertions:",
    "statements": [
      "A corporation’s stock can but does not have to be listed on a stock market or stock exchange.",
      "Listing requires compliance with rules and fulfilment of listing requirements.",
      "Private limited forms such as a GmbH usually keep shares off the public exchange.",
      "AT&S in the book is an AG whose shares were listed and later switched exchange venue, showing listing is a separate strategic choice.",
      "Forming an AG automatically lists the shares on every major world exchange on day one without applications.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "an unlisted AG still operating legally",
      "listing counsel reviewing requirements",
      "GmbH shares staying private among owners",
      "AT&S moving from Frankfurt’s Neuer Markt toward Vienna",
      "a fantasy of instant global multi-listing",
    ],
    "facts": [
      "Listing optional.",
      "Listing rules apply when seeking a listing.",
      "Private limited shares usually not public.",
      "AT&S listing history in the extract.",
      "No automatic worldwide listing at formation.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.73",
    "title": "Inflation, Rates, and Demand for CivicPrint Shares",
    "context": "CivicPrint AG investors weigh inflation and interest-rate regimes when sizing equity positions. Evaluate the following economic assertions:",
    "statements": [
      "Comparatively higher inflation can support share demand when investors expect share prices to rise with general prices.",
      "Comparatively low interest rates can support share demand because high rates would make other investments more attractive.",
      "An investment in shares can be seen as an investment in real values that may hold up better in high inflation than some pure cash holdings.",
      "Inflation and interest rates are among economic indicators that can influence demand for shares.",
      "Share demand ignores inflation completely and responds only to the font used in the annual report cover.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "4/5",
    "scenes": [
      "inflation headlines lifting equity appetite",
      "low policy rates leaving deposits less tempting",
      "shares framed as real-value claims",
      "macro indicator dashboards",
      "a silly font-only demand theory",
    ],
    "facts": [
      "Higher inflation may support share demand via expected price rises.",
      "Low rates support shares versus high-rate alternatives.",
      "Real-values motive under inflation.",
      "Inflation and rates listed as influences.",
      "Demand drivers are economic, not cosmetic.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.74",
    "title": "Tech Board Task Split at CloudNest AG",
    "context": "CloudNest AG assigns sales and compliance to the CEO track, finance and HR to the finance lead, and production-quality themes to the COO, following the book’s multi-role board idea. Evaluate the following economic assertions:",
    "statements": [
      "Different board members can carry different task and responsibility bundles.",
      "A finance-focused board member may oversee finance and accounting type responsibilities.",
      "A COO-type role may cover production and related operating responsibilities.",
      "Shareholders elect the board that represents them in major decisions.",
      "Once CloudNest has a CIO title on a business card, shareholders lose all legal personality of the corporation itself.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "splitting CloudNest briefs across directors",
      "finance lead deep in accounting packs",
      "COO on the production floor",
      "AGM electing that board",
      "legal personality untouched by a CIO title",
    ],
    "facts": [
      "Board members have different tasks.",
      "Finance roles cover finance/accounting clusters.",
      "COO covers production-type clusters.",
      "Shareholders elect the board.",
      "Titles do not erase corporate legal personality.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.75",
    "title": "Post-Issue Quotes and HelioChip’s Funding Plan",
    "context": "HelioChip AG’s post-IPO quote climbs, but the CFO still plans a bond and a bank line for a clean-room build. Evaluate the following economic assertions:",
    "statements": [
      "An increase in HelioChip’s share price after issue does not have any additional financing effect for the issuing corporation.",
      "The beneficiaries of that secondary increase are the shareholders trading the stock.",
      "HelioChip may still issue bonds to raise long-term funds from investor-creditors.",
      "Bank loans and credit remain part of the corporate funding menu alongside share capital.",
      "Because the share price rose, HelioChip is legally barred from any further debt finance.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "CFO explaining no cash from the quote",
      "shareholders celebrating paper gains",
      "a bond roadshow for the clean room",
      "negotiating a bank facility",
      "no legal ban on debt after a rally",
    ],
    "facts": [
      "No additional issuer financing from secondary rises.",
      "Shareholders benefit.",
      "Bonds available to big corporations.",
      "Loans and credit included in corporate funds.",
      "Debt remains possible.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.76",
    "title": "Private Limited Path for Birch & Co Consulting",
    "context": "Birch & Co weighs a private limited company so clients contract with a legal person while shares stay tightly held. Evaluate the following economic assertions:",
    "statements": [
      "Private limited companies are corporations that are legal persons with limited owner liability.",
      "Their shares are usually offered to other owners rather than sold to the general public on an exchange.",
      "The Austrian GmbH is an example of such a private limited company.",
      "Tina and Steve in the book note a GmbH might be interesting later even though €35,000 minimum capital steered them to a partnership at first.",
      "A private limited company has unlimited liability identical to a sole proprietorship.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "Birch & Co signing as a legal person",
      "share register limited to co-owners",
      "GmbH plaque on the door",
      "Tina and Steve eyeing GmbH for the future",
      "liability contrast with sole trading",
    ],
    "facts": [
      "Private limited = legal person, limited liability.",
      "Shares not generally public.",
      "GmbH example.",
      "Book narrative on Tina/Steve and €35,000.",
      "Liability is limited, not unlimited.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.77",
    "title": "Austrian Capital Hurdles: AG Versus GmbH",
    "context": "Founders compare Austrian AG and GmbH minimum capital when choosing a corporate shell. Evaluate the following economic assertions:",
    "statements": [
      "The minimum capital requirement for founding an Austrian AG is about €70,000.",
      "The minimum capital for an Austrian GmbH is about €35,000.",
      "Tina and Steve reject an AG mainly because of that €70,000 capital hurdle for their stage of business.",
      "A European Company (SE) is another corporate form governed by Community law in EU member states.",
      "Austrian AG and GmbH forms abolish limited liability and restore unlimited private liability for all owners.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "3/5",
    "scenes": [
      "€70,000 AG capital on the term sheet",
      "€35,000 GmbH capital alternative",
      "Tina and Steve walking away from AG cost",
      "SE as an EU-level company form",
      "limited liability still central to both shells",
    ],
    "facts": [
      "AG ≈ €70,000.",
      "GmbH ≈ €35,000.",
      "Book reason Tina/Steve skip AG.",
      "SE under EU law.",
      "Both keep limited liability as corporate forms.",
    ],
    "notes": {},
  },
  {
    "case_id": "CASE 4.3.78",
    "title": "FoodPack AG Mixing Bonds and Share Equity",
    "context": "FoodPack AG already has share capital and now issues bonds to fund a packaging line without diluting owners further. Evaluate the following economic assertions:",
    "statements": [
      "FoodPack’s share capital is equity finance from owners, while its bonds are debt owed to creditor-investors.",
      "Bond agreements specify when to repay and how much interest to pay.",
      "Issuing bonds can allow large sums at interest rates that may undercut bank loan rates.",
      "Bond finance can support long-term assets such as plants and infrastructure.",
      "Buying FoodPack bonds converts creditors into common shareholders with AGM votes automatically.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "4/5",
    "scenes": [
      "equity on one side of the ledger, bonds on the other",
      "coupon and maturity printed on the bond",
      "treasurer choosing bonds over a pricier loan",
      "funds pouring into packaging equipment",
      "bondholders still without owner votes",
    ],
    "facts": [
      "Shares = equity; bonds = debt.",
      "Repayment and interest agreed.",
      "Bond interest often lower than bank loans.",
      "Funds long-term assets.",
      "Bondholders remain creditors.",
    ],
    "notes": {4: "Debt instruments do not create voting shareholders."},
  },
  {
    "case_id": "CASE 4.3.79",
    "title": "AGM Voice, Common Stock, and Control at VoteLine",
    "context": "VoteLine AG investors care about attending the annual stockholders’ meeting and influencing decisions through common-stock votes. Evaluate the following economic assertions:",
    "statements": [
      "Common stock includes the right to vote at the stockholders’ meeting.",
      "One listed reason to invest in shares is the wish to go to the annual stockholders’ meeting and influence some business decisions.",
      "Preferred shareholders do not have that voting right but earn a higher dividend.",
      "The board of directors is elected by the shareholders to represent them in major decisions.",
      "Preferred stock always carries double voting power compared with common stock at VoteLine’s AGM.",
    ],
    "answer_key": [True, True, True, True, False],
    "difficulty_level": "2/5",
    "scenes": [
      "common holders marking ballots",
      "an investor who values AGM voice",
      "preferred holders paid more, voting less",
      "election of VoteLine’s board",
      "no double-vote preferred myth",
    ],
    "facts": [
      "Common stock voting right.",
      "AGM influence listed as investment reason.",
      "Preferred: no vote, higher dividend.",
      "Board elected by shareholders.",
      "Preferred lack the vote; they do not get double votes.",
    ],
    "notes": {},
  },
]


OPENINGS = [
    "Picture {scene}.",
    "Start with the claim on the board.",
    "Take the nouns in the statement seriously.",
    "Here is how the corporate chapter frames it.",
    "Walk the funding and ownership map carefully.",
]


def body_for(case: dict, idx: int) -> str:
    stmt = case["statements"][idx]
    truth = case["answer_key"][idx]
    scene = case["scenes"][idx]
    fact = case["facts"][idx]
    note = case.get("notes", {}).get(idx)
    opening = OPENINGS[idx % len(OPENINGS)].format(scene=scene)

    # Length targets by letter role within case (rotate by case number)
    # One E (>=550), at least one more >=400, and some compact (~180-280) for spread.
    roles = ["C", "E", "S", "C", "S"]
    shift = int(case["case_id"].split(".")[-1]) % 5
    roles = roles[shift:] + roles[:shift]
    role = roles[idx]

    if truth:
        if role == "C":
            core = (
                f"{opening} {fact} "
                f"Against «{stmt}», that is enough: the wording matches the corporate rule without an extra twist."
            )
        elif role == "S":
            core = (
                f"{opening} {fact} "
                f"In the concrete setting—{scene}—owners hold shares, liability is usually capped at invested capital, "
                f"and management runs through directors unless the stem says otherwise. "
                f"Reading «{stmt}» against that map, the claim survives."
            )
        else:  # E
            core = (
                f"{opening} {fact} "
                f"Stay with {scene} for a moment: corporations are legal persons that can own assets, hire, contract, and litigate; "
                f"shareholders supply share capital without having to manage day to day; boards and executives carry major decisions; "
                f"equity from shares is long-term, while secondary price moves enrich traders rather than the issuer’s cash tin; "
                f"bonds, when used, create creditors rather than owners. "
                f"Held beside that toolkit, «{stmt}» is simply the textbook point restated in exam clothes, "
                f"and nothing in the absolute quantifiers tries to smuggle unlimited liability or automatic listing back in."
            )
    else:
        if role == "C":
            core = (
                f"{opening} {fact} "
                f"«{stmt}» overreaches. One ordinary corporate counterexample drops it."
            )
        elif role == "S":
            core = (
                f"{opening} {fact} "
                f"If «{stmt}» were right, ordinary features of corporations would collapse: "
                f"limited liability would vanish, secondary rallies would mint issuer cash, or preferred shares would suddenly vote. "
                f"In the scene of {scene}, that is not how the book builds the corporate form, so the claim fails."
            )
        else:
            core = (
                f"{opening} {fact} "
                f"Treat «{stmt}» as a trap sentence. Corporations separate the firm as a legal person from the shareholders; "
                f"liability is usually limited to capital invested; managers need not own shares; listing is optional; "
                f"post-issue price rises do not finance the company; bondholders stay creditors. "
                f"Against {scene}, the absolute wording or swapped category cannot stand, "
                f"because the subsection keeps those channels distinct on purpose."
            )

    if note:
        core = core.rstrip() + f"\n\nNote: {note}"

    closer = "So the statement is True." if truth else "So the statement is False."
    text = core.strip() + "\n\n" + closer

    body_only = text[: text.rfind("So the statement is")].rstrip()
    if len(body_only) < 160:
        text = (
            body_only
            + " Keep legal person, shares, limited liability, board, and equity-versus-debt vocabulary precise here."
            + "\n\n"
            + closer
        )
    body_only = text[: text.rfind("So the statement is")].rstrip()
    if role == "E" and len(body_only) < 550:
        extra = (
            " Naming the pieces aloud helps: share capital is ownership finance raised when shares are issued; "
            "the board represents shareholders in major decisions; limited liability stops ordinary company debts from "
            "automatically devouring private assets beyond what was invested in the shares; "
            "and a stock-exchange listing is a separate choice, not the definition of being a corporation."
        )
        text = body_only + extra + "\n\n" + closer
    if role == "S" and len(body_only) < 400:
        text = (
            body_only
            + " Keep ownership, management, and financing channels distinct when you judge the wording, "
            "and do not let a familiar topic word rescue an absolute overclaim."
            + "\n\n"
            + closer
        )
    # Cap accidental over-long compact letters
    body_only = text[: text.rfind("So the statement is")].rstrip()
    if role == "C" and len(body_only) > 300:
        short = (
            f"{opening} {fact} "
            + (
                f"«{stmt}» matches that corporate rule cleanly."
                if truth
                else f"«{stmt}» conflicts with that corporate rule."
            )
        )
        if note:
            short = short + f"\n\nNote: {note}"
        text = short + "\n\n" + closer
        body_only = text[: text.rfind("So the statement is")].rstrip()
        if len(body_only) < 160:
            text = (
                short
                + " The subsection’s vocabulary on corporations settles it."
                + "\n\n"
                + closer
            )
    return text


def validate_case(case: dict, expl: list[str]) -> None:
    bodies = []
    for i, e in enumerate(expl):
        assert e.endswith("So the statement is True.") or e.endswith(
            "So the statement is False."
        ), case["case_id"]
        want = case["answer_key"][i]
        got = e.endswith("So the statement is True.")
        assert got == want, (case["case_id"], i, want, got)
        body = e[: e.rfind("So the statement is")].rstrip()
        assert len(body) >= 160, (case["case_id"], i, len(body))
        bodies.append(len(body))
        # forbidden meta
        low = e.lower()
        for bad in [
            "before you tick",
            "board check",
            "in class we would",
            "spell out the claim",
            "stem rubric",
            "exam trap",
            "true —",
            "false —",
            "hold the statement against the chapter map",
        ]:
            assert bad not in low, (case["case_id"], bad)
    assert sum(1 for b in bodies if b >= 400) >= 2, (case["case_id"], bodies)
    assert max(bodies) >= 550, (case["case_id"], bodies)
    assert max(bodies) - min(bodies) >= 200, (case["case_id"], bodies)
    notes = sum(1 for e in expl if "\nNote:" in e or e.startswith("Note:"))
    assert notes <= 2, (case["case_id"], notes)


def main() -> None:
    data = json.loads(PATH.read_text())
    by_id = {c["case_id"]: i for i, c in enumerate(data)}
    built = 0
    for spec in CASES:
        expl = [body_for(spec, i) for i in range(5)]
        validate_case(spec, expl)
        new = {
            "subsection": "4.3",
            "case_id": spec["case_id"],
            "title": spec["title"],
            "context": spec["context"],
            "statements": spec["statements"],
            "answer_key": spec["answer_key"],
            "tactical_explanations": expl,
            "difficulty_level": spec["difficulty_level"],
            "tier": "full",
        }
        idx = by_id[spec["case_id"]]
        data[idx] = new
        built += 1
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    # residual GENERATE check in 4.3
    left = [
        c["case_id"]
        for c in data
        if c.get("subsection") == "4.3" and str(c.get("title", "")).startswith("[GENERATE]")
    ]
    print(f"built {built}; remaining GENERATE in 4.3: {len(left)}")


if __name__ == "__main__":
    main()
