#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch4 cases [80:120] statement-only."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"


def wrap(text: str, truth: bool) -> str:
    text = text.replace("\u2014", ", ").replace("\u2013", "-").strip()
    v = "True" if truth else "False"
    return text + f"\n\nSo the statement is {v}."


EXPL: dict[str, list[str]] = {
    'CASE 4.3.49': [
        'Common stockholders ordinarily cast votes at the annual meeting on major resolutions such as electing directors or approving structural changes. That voting role is the ordinary control channel attached to common equity, not a rare exception.',
        'Preferred shares typically weaken or remove voting power in exchange for dividend priority. They do not always dominate common votes at every meeting. Treating preferred holders as perpetual vote superiors reverses the usual package: income preference often comes with less say, not more.',
        'Preferred equity is frequently designed as a bargain: holders accept thinner voting rights and receive earlier claim on dividends when profits are distributed. Corporations sell that package to investors who want steadier income more than boardroom influence. Common stock keeps the primary AGM voice; preferred stock often sits closer to hybrid income paper. The trade is intentional, not accidental wording. When a firm needs capital without diluting control as sharply, preferred classes can raise money while voting remains concentrated among common shares. The statement correctly names that exchange of voice for dividend priority.',
        'Buying shares can be partly about control. Voting rights let investors support or challenge board slates and major corporate acts, so some purchases are deliberate influence plays rather than pure portfolio bets.',
        'Preferred dividend priority ranks claims when dividends are declared; it does not turn dividends into a legal certainty every year. Boards still decide whether and how much to distribute overall, so discretionary dividend policy survives the preferred preference rule.',
    ],
    'CASE 4.3.50': [
        'A construction corporation can blend equity from share issues with long-term bank loans for equipment. Share capital and debt sit side by side on the balance sheet as normal corporate funding tools, not as mutually exclusive paths.',
        'Bank borrowing does not lock out equity finance. Firms routinely carry loans while still issuing shares when they need more owner capital. Using credit never forbids a later or parallel share issue.',
        'Loans and share capital are not identical instruments. Debt must be serviced and repaid under contract; equity is ownership capital that is not redeemed on a loan schedule. Limited liability for shareholders also does not erase the economic difference between owing a bank and owning residual claims. Calling both the same because each can coexist with limited liability collapses funding categories the chapter keeps separate. Equipment loans create creditors; share issues create owners. Liability caps and financing mix are related topics, but they do not make loan capital and share capital the same thing.',
        'Extra borrowing raises corporate leverage, yet shareholders still usually lose only what they put into shares if the firm fails. Limited liability is not cancelled merely because the company also uses bank debt for equipment.',
        'Owing a commercial bank does not ban bond issues. Corporations with existing loans can still place bonds if markets and covenants allow. Prior bank debt is ordinary, not a legal bar to public or private bond finance.',
    ],
    'CASE 4.3.51': [
        'Incorporation gives Alpine Sensors AG its own legal personality. The company holds rights and duties in business life much as a natural person would when owning assets, hiring, or contracting, separate from the three engineers as private individuals.',
        'As a legal person, Alpine Sensors AG can own lab gear and land, employ technicians, and sign supply contracts in the company name. Those acts attach to the firm, not to each founder’s private identity.',
        'Supplier suits over unpaid boards are filed against Alpine Sensors AG as the contracting party. Creditors pursue the corporate defendant first rather than automatically naming every engineer’s private identity as the debtor on the face of the claim.',
        'Shareholders fund and own the corporation; they are not forced to run every production shift. Alpine Sensors AG can hire managers and operators while founders remain owners without day-to-day shop-floor duty. Equating ownership with mandatory personal management confuses equity stakes with employment roles. Many corporations deliberately separate investors from operators so specialists run production. The engineers may choose to work in the plant, but corporate form does not compel that identity of owner and manager for every shift.',
        'A hired plant manager can direct operations with zero shareholding. Management authority comes from appointment and employment, not from an automatic equity ticket, which is why ownership and operational control can diverge inside Alpine Sensors AG.',
    ],
    'CASE 4.3.52': [
        'Secondary trading moves shares between investors. When HarborBake rises from €12 to €19 on the exchange, the buyer pays the seller; the company’s bank account does not receive that €7 jump as fresh share capital. Primary issue cash arrives when new shares are sold by the issuer. Later quotes reprice existing stock. Confusing a market rally with a capital injection treats portfolio gains as treasury deposits. Oven expansion still needs separate finance such as retained earnings, new issues, or loans; the secondary print alone does not refill corporate cash.',
        'Exchange buyers and sellers pocket secondary gains and losses. Investors who traded HarborBake among themselves are the parties exposed to the move from €12 to €19, not the bakery’s treasury through that trade alone.',
        'Earlier share capital does not block later debt. HarborBake can still borrow for ovens after equity was raised at issue, combining credit with the cash already booked from the primary sale.',
        'A higher listed quote after issue does not deliver extra financing to the issuer. HarborBake’s financing effect from equity happened when the new shares were sold; the later €19 price is a market valuation among holders.',
        'The original sale of newly issued shares is exactly when HarborBake raises equity cash. Secondary rises never replace that primary channel. Claiming only later price jumps fund the firm reverses which market actually capitalises the issuer.',
    ],
    'CASE 4.3.53': [
        'RiverGrid SE shareholders ordinarily risk only the capital paid for their shares. Private homes and other personal assets stay outside ordinary corporate creditor reach for unpaid share-funded losses.',
        'Creditors chase RiverGrid’s corporate assets first. Limited liability means unpaid server bills are company obligations, not automatic mortgages on every investor’s private residence simply for holding shares.',
        'Corporate form is built around limited, not unlimited, shareholder liability. RiverGrid SE’s investors do not personally guarantee every server invoice merely because they own shares. Unlimited personal exposure is the partnership or sole-trader pattern the chapter contrasts with corporations. Calling every shareholder unlimitedly liable for all firm debts erases the main protective feature that motivates incorporation. Creditors look to company assets; residual owner loss is typically capped at invested share capital unless separate personal guarantees were given.',
        'Forming RiverGrid SE usually costs more setup effort than a sole proprietorship: capital rules, filings, and governance. Limited liability is valuable, yet the incorporation path remains heavier than a one-person unincorporated start.',
        'Executive titles do not force personal guarantees of every corporate debt. Managers may run RiverGrid under employment contracts without pledging private assets unless they separately agree to guarantee specific obligations.',
    ],
    'CASE 4.3.54': [
        'NordLift shareholders supply equity capital without an automatic duty or right to manage elevators day to day. Ownership funds the firm; operational control sits with appointed management unless bylaws say otherwise.',
        'Shareholders elect NordLift’s board to take major decisions and represent owners. The board is the institutional link between dispersed equity and strategic control.',
        'On many boards the top executive role is labelled Chief Executive Officer. That CEO title marks the highest-ranking manager among board-level officers at firms structured like NordLift.',
        'Ownership does not require each shareholder to rubber-stamp every purchase order. Ordinary procurement runs through managers and internal authority limits, not through a referendum of all equity holders. Forcing personal approval of every supplier payment would freeze operations in any widely held company. Corporate governance concentrates routine spending with officers while reserving major acts for board or AGM levels. The claim that every owner must clear every order before payment misunderstands how NordLift-style firms actually buy inputs.',
        'A CFO can oversee finance without holding NordLift shares. Board and officer roles are appointments; share ownership is optional for those managers unless a separate ownership plan requires it.',
    ],
    'CASE 4.3.55': [
        'Turning Mesa Parts into an AG is generally harder than staying a sole trader or partnership. Incorporation brings capital thresholds, filings, and formal organs that simpler forms avoid.',
        'Corporations typically unlock broader funding: share issues to many investors plus varied debt markets. Sole traders and partnerships usually face narrower pools of equity and credit for a new plant.',
        'Once incorporated, Mesa Parts can fund mainly through share capital together with loans and credit. Equity and borrowed money are the twin pillars of the corporate financing menu for the plating line.',
        'Incorporation does not outlaw bank loans. A Mesa Parts AG could finance the plating line with a mix of shares and credit; nothing in corporate form forces equity-only funding. Debt remains a standard corporate tool for plant assets. Forbidding loans after incorporation would contradict the chapter’s picture of corporations combining share capital with borrowing. Founders choose the mix based on cost and control, not because the AG shell bans credit.',
        'Mesa Parts AG shareholders would usually lose only invested share capital, unlike general partners who often face unlimited liability. Limited liability is a central reason to prefer the corporate shell for plant-scale funding.',
    ],
    'CASE 4.3.56': [
        '€800,000 divided into 40,000 shares yields €20 of share capital per share at issue. That arithmetic simply apportions the stated capital across the share count.',
        'Buyers of VoltMeter shares become shareholders. Purchasing equity creates ownership stakes in the corporation rather than a mere customer or creditor relationship.',
        'Shares can be acquired at initial issue from the corporation or later from another shareholder who sells. Primary and secondary purchases are both valid ways to obtain VoltMeter equity.',
        'If all 40,000 shares sell at the €20 issue amount, VoltMeter receives €800,000 as share capital. Full subscription at par maps directly onto that capital total.',
        'Share capital is long-term or permanent ownership funding, not a short-term overdraft that the company must redeem each year. VoltMeter does not repay equity on an annual loan schedule the way it would clear a revolving credit. Shareholders may sell to others, and the firm may later repurchase under special rules, but routine yearly redemption like bank overdraft repayment is not how share capital works. Treating equity as an annual repayable credit confuses ownership capital with temporary borrowing.',
    ],
    'CASE 4.3.57': [
        'A stock exchange is a regulated financial market where shares and other securities such as bonds can be bought and sold under authority oversight. Listing venues organise that trading rather than leaving it purely private.',
        'Corporations seeking a Glacier Soft listing must meet rules and listing requirements. Exchange access is conditional compliance, not an automatic right of every AG.',
        'Not every corporation is listed. Firms must apply and satisfy disclosure, size, and governance hurdles before shares trade on a regulated exchange. Many AGs remain unlisted; private limited companies usually keep shares off public boards entirely. Automatic listing without application would erase those gatekeeping rules. Glacier Soft’s wish to list underscores that listing is a deliberate step, not a birthright of incorporation.',
        'Well-known venues include the New York Stock Exchange, Nasdaq, and major European markets such as Deutsche Börse. The chapter cites those names as examples of regulated exchanges where securities trade.',
        'Once markets admit the issuer’s securities, bonds as well as shares can trade as exchange-traded instruments. Listing culture covers debt securities alongside equity when the firm and exchange allow.',
    ],
    'CASE 4.3.58': [
        'At IPO, CanvasWorks places new shares at an issue price and raises share capital from buyers of that newly issued stock. Primary flotation is the moment equity cash enters the issuer.',
        'After the IPO, secondary prices form from investor demand and supply. Later quotes at €33 reflect trading among holders, not a fresh capital call by CanvasWorks.',
        'High demand usually lifts share prices under ordinary supply-and-demand logic. When more investors chase CanvasWorks stock than sellers offer at prior quotes, the clearing price tends to rise.',
        'A move from €25 to €33 after issue does not remit €8 per share into CanvasWorks’ treasury. Secondary buyers pay secondary sellers. The issuer already booked issue proceeds at the IPO; later markups are investor-to-investor transfers. Treating every euro of post-IPO appreciation as automatic corporate financing invents a cash flow that never hits the company account. Expansion finance still requires new issues, retained earnings, or debt rather than relying on the secondary print alone.',
        'Share capital raised at issue is long-term or even permanent capital and is usually not redeemed like a loan on a fixed timetable. Equity stays as ownership funding rather than scheduled principal repayment.',
    ],
    'CASE 4.3.59': [
        'Shareholders elect the board to make major business decisions and to represent owners. That election is the core governance link between equity holders and corporate direction.',
        'Beside the CEO, board members may carry CFO, COO, CIO, or CMO portfolios with distinct task bundles. Specialisation splits finance, operations, technology, and marketing responsibilities across officers.',
        'In the book’s AT&S-style illustration, different board members cover finance and accounting, production, and sales or marketing clusters. Task splits mirror how a listed electronics AG organises executive roles.',
        'Investors who only provide share capital are neither obliged nor entitled to manage in place of the board. Passive equity funds the firm while directors and officers handle strategy and operations.',
        'A COO role does not abolish the need for shareholders to elect a board. Operational officers execute within a governance frame that still requires an elected board for major decisions and representation. Removing board elections because a COO exists would hollow out shareholder control. Titles like COO presuppose a board structure; they do not replace it. The corporation still needs owners to choose directors even when production is professionally managed.',
    ],
    'CASE 4.3.60': [
        'Rising demand for GreenRail shares can mirror optimism that the rail business is healthy, will earn profits soon, or will launch a successful new product. Firm-level expectations pull buyers into the stock.',
        'Macro indicators also shape share demand. Growth, interest rates, and inflation alter how attractive equity looks versus other uses of savings, so GreenRail quotes respond to more than company gossip alone.',
        'When the economy thrives, more households and funds have cash to place in equities. Broader prosperity therefore often lifts demand for shares, including growth stories such as GreenRail.',
        'Comparatively high interest rates typically brighten bonds and deposits relative to shares. Higher yields elsewhere can drain relative appetite for GreenRail equity even if the firm’s own news is unchanged.',
        'Share demand is not fixed by last quarter’s dividend alone. Inflation, growth, and rate news continuously reprice risk and opportunity, so ignoring those indicators misstates how investors form demand for GreenRail. Dividends matter, yet they sit inside a wider macro and expectation set rather than monopolising the demand function.',
    ],
    'CASE 4.3.61': [
        'Providing money to a business Lea believes in is a recognised reason to buy MeadowCare shares. Equity can be a financial vote of support as well as a portfolio line.',
        'Dividends offer a path to annual income: parts of corporate profit paid to shareholders when the board distributes. Lea may buy partly for that income stream.',
        'Capital growth is another motive. If MeadowCare’s price rises, Lea can sell above her purchase price and realise a gain even without large current dividends.',
        'Common stock can admit Lea to the annual stockholders’ meeting with votes on some decisions. Influence through AGM participation sits beside income and growth as a purchase reason.',
        'Corporations are not legally forced to pay MeadowCare dividends every year regardless of profits or board policy. Dividend payments remain discretionary distributions of profit, not a fixed coupon owed each calendar year. Boards may retain earnings for investment, or profits may be too thin to distribute. Treating annual dividends as an unconditional legal duty confuses preferred hopes with mandatory cash outflow.',
    ],
    'CASE 4.3.62': [
        'A GmbH is still a legal person with limited owner liability. Private limited status does not erase corporate personality or restore unlimited personal exposure for Maya and Tom.',
        'GmbH shares are usually offered among owners rather than floated to the general public on an exchange. The private limited path keeps equity closely held instead of continuously listed.',
        'Austrian GmbH minimum capital sits near €35,000: lower than a typical AG hurdle yet still a barrier compared with a simple partnership. That capital gate shapes the Corner Café founders’ choice.',
        'Private limited cousins include the US LLC, the UK private company limited by shares, and the Austrian or German GmbH. Those labels share limited liability and non-public share placement patterns.',
        'Choosing a GmbH does not auto-list café shares on the Vienna Stock Exchange at founding. Listing requires separate applications, disclosure rules, and exchange approval; private limited design usually keeps equity off public boards. Maya and Tom therefore hold ownership among themselves unless they later pursue an exchange listing as a distinct strategic step. Incorporation as a GmbH creates personality and limited liability; it does not flip a switch that floats every share on day one.',
    ],
    'CASE 4.3.63': [
        'Dividends are portions of corporate profit that may be paid to shareholders. They are distributions, not automatic wages, and they depend on profit and board decisions at PineTech.',
        'PineTech AG has no duty to pay dividends every year. Retention, losses, or investment plans can leave the dividend at zero without breaking a fixed annual coupon rule.',
        'Long droughts can make PineTech shares look unattractive; weaker demand may then pressure the price. Income-seeking investors rotate away when cash yields stay missing for years.',
        'Some holders still keep PineTech for capital growth even with zero current dividends. Price appreciation hopes can substitute for income when the growth story remains credible.',
        'Making a profit does not legally force an immediate full payout of all earnings to every shareholder. Boards choose retention versus distribution; corporate law does not convert every euro of profit into a compulsory dividend cheque. PineTech can reinvest earnings in product or reserves. The statement’s forced full payout invents a rule the chapter does not teach.',
    ],
    'CASE 4.3.64': [
        'Common stock typically carries voting rights at the stockholders’ meeting. That AGM voice is the standard control feature of ordinary shares at QuartzPay.',
        'Preferred shareholders usually lack that voting right while earning a higher dividend. Income preference trades against meeting influence in the usual preferred design.',
        'Wanting to attend the annual meeting and shape decisions is one listed reason people buy shares. Control motives sit beside dividends and growth in the investment rationale list.',
        'Preferred QuartzPay holders do not automatically receive more votes per share than common holders. The opposite pattern is common: preferred often has fewer or no votes while common stock carries the AGM voice. Claiming automatic vote superiority for preferred reverses the typical rights package that trades influence for dividend priority. Investors who want meeting power usually look to common stock, not to preferred classes designed around income.',
        'Dividend income and voting influence are separate motives. An investor can chase yield without votes, or chase votes without high current yield, depending on share class. Those goals need not travel together on every security QuartzPay issues.',
    ],
    'CASE 4.3.65': [
        'After listing, BlueHarbor prices are set by demand and supply among traders. Quotes clear the market rather than being administratively fixed by the issuer each day.',
        'Under supply-and-demand logic, strong demand usually lifts prices and weak demand usually softens them. BlueHarbor’s secondary quote follows that same pressure.',
        'Expectations that BlueHarbor will gain market share can raise demand for its equity. Forward-looking buyers bid more when they anticipate stronger competitive position.',
        'A secondary price jump does not finance BlueHarbor with new equity cash equal to the rise times shares outstanding. Those trades settle between investors; the issuer’s treasury is not credited with the whole mark-to-market gain. Primary capital arrived at issue or would arrive only through a new offering. Treating the quote jump as automatic equity funding invents cash the company never receives from secondary trading alone.',
        'Economic growth news can shift demand for BlueHarbor shares alongside firm-specific stories. Macro optimism expands risk appetite while company news still matters for relative performance.',
    ],
    'CASE 4.3.66': [
        'Incorporating StudioPixel AG creates a legal person separate from Ira and Sam as natural persons. The design firm’s rights and duties attach to the company, not only to the two founders privately.',
        'Ira and Sam can hold shares without managing every client meeting themselves. Ownership permits hired or specialised managers to run client work while founders remain equity holders.',
        'Their shareholder liability is usually capped at capital invested in shares. Personal assets beyond that stake stay protected in the ordinary corporate pattern.',
        'An Austrian AG generally needs about €70,000 minimum capital. That threshold is part of founding StudioPixel as an AG rather than a lighter unincorporated shell.',
        'Having only two people does not bar corporate form or force a sole proprietorship. Two shareholders can found an AG if capital and formalities are met. Sole proprietorship is a one-owner unincorporated path, not the mandatory fate of every small founding team. StudioPixel’s headcount does not erase the option to incorporate.',
    ],
    'CASE 4.3.67': [
        'Share capital is usually not redeemed by Orbit Tools the way loan principal is repaid on a schedule. Equity stays as ownership funding rather than amortising like a term loan.',
        'Texts describe share capital as long-term or even permanent capital. That permanence contrasts with revolving short-term credit that must be cleared or renewed.',
        'Large sums can be raised when many investors subscribe to a share sale. Broad equity placement can mobilise far more money than a single bank line often supplies.',
        'Orbit Tools’ overdraft is flexible short-term credit, not permanent share capital. The two instruments differ in maturity, claims, and repayment logic even if both appear as funding sources.',
        'Share capital need not be fully repaid to shareholders within twelve months like short-term credit. Treating equity as a one-year redeemable loan misreads permanence. Investors exit by selling shares to others, not by forcing annual company repayment of the entire capital base. Orbit Tools keeps share capital as durable ownership money rather than a twelve-month credit that must be cleared.',
    ],
    'CASE 4.3.68': [
        'Large corporations can issue bonds treated as loans from investor-creditors to the firm. SteelSpan’s bondholders lend; they do not automatically become residual owners.',
        'Bond contracts fix repayment timing and interest. Investors advance money for a period on those agreed terms rather than on open-ended equity hopes.',
        'When bond rates undercut bank loan rates, issuing bonds can look more attractive than borrowing from a single bank. Relative interest cost steers the debt-channel choice.',
        'Bondholders do not become SteelSpan shareholders with AGM votes merely by lending. Debt claims and equity votes remain distinct; a bond is credit with interest and repayment terms, not common stock with residual control. Confusing lenders with voting owners collapses the chapter’s debt-versus-equity line. SteelSpan can owe bond investors large sums while voting power stays with share classes elected into the AGM.',
        'Borrowing large sums at relatively low interest can fund plants and infrastructure. Long-lived assets often match long-term debt such as bonds when the rate is competitive versus bank credit.',
    ],
    'CASE 4.3.69': [
        'As a legal person, FoamLab AG can close contracts in its own name. Counterparties deal with the company as the contracting party rather than with each shareholder privately.',
        'FoamLab AG can hire people as the employing legal person. Employment contracts run with the corporation, which pays wages and directs staff under labour law.',
        'The company may sue and be sued in business disputes. Litigation capacity is part of corporate personality, so FoamLab appears as plaintiff or defendant in its own right.',
        'Legal personality does not make FoamLab identical with each shareholder’s private legal identity. The firm is a separate person; owners remain distinct natural persons. Equating the company with every private identity would erase limited liability and separate contracting. FoamLab’s name on a lease or lawsuit is not the same as naming each owner’s private identity.',
        'Owning laboratory property in the company’s name fits corporate personality. Title can sit with FoamLab AG rather than on each founder’s private land register entry.',
    ],
    'CASE 4.3.70': [
        'Investors may gain from capital growth when ShopNova’s price rises and they sell above cost. That gain accrues to the selling shareholder, not automatically to the retailer’s cash account.',
        'A secondary rally alone does not provide additional financing to ShopNova. Issuer funding from equity happened at issue or would require a new offering, not a mere quote increase.',
        'ShopNova can still seek loans or credit alongside earlier share capital. Debt remains available as a corporate funding tool after equity has already been raised.',
        'Dividends, if paid, are income from part of profits to shareholders, not a repayment of share capital like redeeming a loan. Distribution and capital redemption are different cash stories.',
        'Every listed price increase need not be matched by an equal cash deposit from the exchange into ShopNova’s account. Exchanges clear trades between investors; they do not wire mark-to-market gains into the issuer’s treasury. Treating each tick higher as mandatory corporate cash inflow invents a financing channel secondary markets do not provide.',
    ],
    'CASE 4.3.71': [
        'With €1,000,000 capital and 100,000 shares, each share represents €10 of share capital at that split. The euro-per-share figure is capital divided by share count.',
        'Each such share also represents 0.001 percent of share capital in the book’s illustrative arithmetic. Tiny slices still encode ownership fractions of the whole capital base.',
        'Buying ten such shares at issue would represent 0.01 percent of NanoFilter’s share capital. Ownership percentage scales linearly with the number of shares held at that denomination.',
        'Large share-capital totals such as AT&S’s euro figures in the book show that substantial sums can be raised via shares. Equity markets can mobilise plant-scale money when many investors subscribe.',
        'If NanoFilter later trades at €18, the company does not automatically rewrite share capital up to €1,800,000 without issuing new shares. Secondary prices revalue holdings among investors; stated share capital changes through corporate capital measures, not through every market tick. Confusing the quote with a forced rewrite of legal capital invents an accounting event that trading alone does not create.',
    ],
    'CASE 4.3.72': [
        'A corporation’s stock can be listed on a stock market, but listing is optional rather than automatic. Forming an AG creates the company; exchange admission is a later strategic choice that many firms never take.',
        'Listing requires compliance with rules and fulfilment of listing requirements. Gatekeeping on disclosure and size keeps public markets selective.',
        'Private limited forms such as a GmbH usually keep shares off the public exchange. Closely held equity placement is the normal private-limited pattern.',
        'AT&S in the book is an AG whose shares were listed and later switched venue, showing listing as a separate strategic choice rather than a one-time birth event.',
        'Forming an AG does not automatically list shares on every major world exchange on day one without applications. Each venue needs filings, fees, and approvals; worldwide instant listing is a myth. Incorporation creates the corporate shell; listing is a later, optional market step that can be skipped entirely. AT&S-style venue switches in the book further show listing as managed strategy, not birthright.',
    ],
    'CASE 4.3.73': [
        'Comparatively higher inflation can support share demand when investors expect equities to rise with general prices. Shares can look like claims on real assets in that setting.',
        'Comparatively low interest rates can support share demand because high rates would make deposits and bonds more attractive. Cheap alternatives tilt savers toward CivicPrint equity.',
        'An equity stake can be viewed as investment in real values that may hold up better in high inflation than idle cash. That framing helps explain why inflation regimes shift demand toward shares.',
        'Inflation and interest rates belong among economic indicators that influence share demand. CivicPrint’s investor audience watches those macro dials alongside firm news.',
        'Share demand does not ignore inflation and respond only to the font on an annual report cover. Macro prices and rates reshape how attractive equities look versus cash or bonds; cosmetic report design does not monopolise demand. Treating typography as the sole driver while blanking inflation is a caricature of how investors price CivicPrint. Growth, inflation, and interest-rate news remain among the indicators the chapter ties to share demand.',
    ],
    'CASE 4.3.74': [
        'Different board members can carry different task and responsibility bundles. CloudNest need not give every director the same operational portfolio.',
        'A finance-focused board member may oversee finance and accounting type duties. That specialisation concentrates reporting and funding oversight in one officer’s remit.',
        'A COO-type role may cover production and related operating responsibilities. Day-to-day delivery sits with that portfolio while other directors handle distinct domains.',
        'Shareholders elect the board that represents them in major decisions. Election remains the owners’ channel into CloudNest’s strategic control even when titles proliferate.',
        'A CIO title on a business card does not strip the corporation of legal personality. CloudNest AG remains a legal person whether or not an information officer is named. Officer labels organise work inside the firm; they do not dissolve the company’s separate legal existence, cancel shareholder elections, or turn the AG back into a collection of private individuals. Governance and personality survive title proliferation.',
    ],
    'CASE 4.3.75': [
        'An increase in HelioChip’s share price after issue has no additional financing effect for the issuer. Secondary appreciation does not refill the corporate treasury by itself.',
        'Beneficiaries of that secondary increase are the shareholders trading the stock. Sellers capture gains; buyers take the new valuation risk among themselves.',
        'HelioChip may still issue bonds to raise long-term funds from investor-creditors. Debt markets remain open after equity has been placed and after quotes have moved.',
        'Bank loans and credit stay on the corporate funding menu alongside share capital. HelioChip can combine equity with borrowed money for further investment.',
        'A rising share price does not legally bar further debt finance. Quote strength may even ease credit discussions with banks or bond buyers; it never forbids loans or bonds. HelioChip remains free to borrow if covenants and markets allow, regardless of secondary equity performance. Equity valuation and debt capacity interact in credit analysis, but a rally is not a statutory ban on leverage.',
    ],
    'CASE 4.3.76': [
        'Private limited companies are corporations that are legal persons with limited owner liability. Birch & Co can use that shell without becoming a public floater.',
        'Their shares are usually offered to other owners rather than sold to the general public on an exchange. Closely held placement is the private-limited default.',
        'The Austrian GmbH is an example of such a private limited company. Local labelling matches the general private-limited pattern of personality plus limited liability.',
        'Tina and Steve in the book note a GmbH might interest them later even though the €35,000 minimum steered them to a partnership at first. Capital hurdles shape timing of the corporate step.',
        'A private limited company does not carry unlimited liability identical to a sole proprietorship. Limited liability is a defining contrast with unincorporated sole traders whose personal assets stand behind business debts. Equating GmbH-style private limited status with unlimited personal exposure erases the protective feature that motivates that form for Birch & Co. Personality plus capped owner loss is precisely why founders graduate from partnerships toward private limited shells.',
    ],
    'CASE 4.3.77': [
        'The minimum capital requirement for founding an Austrian AG is about €70,000. That euro hurdle is a central founding constraint when founders compare corporate shells and decide whether an AG fits their stage of funding.',
        'The minimum capital for an Austrian GmbH is about €35,000. That lower bar still matters as a cash commitment, yet it sits clearly below the AG threshold founders weigh side by side.',
        'Tina and Steve reject an AG mainly because of that €70,000 capital hurdle at their stage. Funding scale, not dislike of limited liability, drives the timing choice.',
        'A European Company (SE) is another corporate form governed by Community law in EU member states. Founders may consider SE rules alongside national AG or GmbH options.',
        'Austrian AG and GmbH forms do not abolish limited liability or restore unlimited private liability for all owners. Both corporate shells are built around limited owner exposure as a core advantage over many unincorporated paths. Claiming they wipe out limited liability reverses the point of choosing AG or GmbH when personal asset protection matters.',
    ],
    'CASE 4.3.78': [
        'FoodPack’s share capital is equity from owners, while its bonds are debt owed to creditor-investors. Mixing both funds the packaging line without treating lenders as residual owners.',
        'Bond agreements specify repayment timing and interest amounts. Those contractual terms define the credit relationship FoodPack owes bondholders.',
        'Issuing bonds can raise large sums at interest rates that may undercut bank loan rates. Relative pricing can make the bond channel cheaper than a single bank facility.',
        'Bond finance can support long-term assets such as plants and packaging infrastructure. Maturity of the debt can align with long-lived equipment needs.',
        'Buying FoodPack bonds does not automatically convert creditors into common shareholders with AGM votes. Bondholders remain lenders under the indenture; voting equity stays with shares unless a separate conversion feature is written in. Treating every bond purchase as an instant AGM ticket confuses debt with common stock.',
    ],
    'CASE 4.3.79': [
        'Common stock includes the right to vote at the stockholders’ meeting. VoteLine’s ordinary shares are the usual AGM voice for control-minded investors.',
        'One listed reason to invest in shares is the wish to attend the annual meeting and influence some decisions. Control motives sit openly in the chapter’s investor rationale list.',
        'Preferred shareholders typically lack that voting right but earn a higher dividend. Income priority substitutes for AGM influence in the standard preferred package.',
        'The board of directors is elected by shareholders to represent them in major decisions. Election links VoteLine owners to strategic oversight without making every owner a daily manager.',
        'Preferred stock does not always carry double voting power versus common stock at VoteLine’s AGM. Preferred often has reduced or zero votes, not doubled votes, because the class is sold as income-first paper. Claiming automatic double voting invents a privilege that contradicts the usual preferred trade of voice for dividend priority. Control-minded investors typically buy common stock when AGM influence is the goal.',
    ],
    'CASE 4.4.01': [
        'Unincorporated businesses are not legal entities of their own, whereas incorporated businesses are legal persons. Figure 9’s split turns on that personality line, not on casual trading alone.',
        'A partnership remains unincorporated even when partners contribute capital jointly. Joint funding does not create corporate legal personality by itself.',
        'Filing profits on personal income tax does not make a sole proprietorship a separate legal person. Tax reporting through the owner is consistent with unincorporated status, not proof of incorporation.',
        'Listing shares on an exchange is not the only criterion that separates incorporated from unincorporated firms. Many corporations never list yet remain legal persons; personality and formal incorporation matter more than flotation. Exchange trading is an optional market step layered on top of company status, not the sole definition of the incorporated column in Figure 9.',
        'Limited liability companies restrict owners’ liability yet are classified as incorporated, not unincorporated. Liability protection rides with corporate personality; it does not push LLCs into the unincorporated column of Figure 9.',
    ],
    'CASE 4.4.02': [
        'Shareholders need not personally manage daily operations in every corporation. Directors and officers can run the firm while owners remain investors.',
        'A sole trader typically is the manager; distinct hired directors are not the usual sole-trader pattern. Unincorporated one-owner firms rarely invent a separate board of directors as their default.',
        'In incorporated businesses, owners and managers need not be the same persons because shareholders provide share capital and directors run the company. Separation of ownership and management is a defining governance feature of that column.',
        'Partnership agreements do not require all partners to remain passive while hired directors make every decision. Partners typically manage actively; passive-director governance is the corporate pattern, not the general partnership default.',
        'Unincorporated sole proprietorships do not routinely separate share ownership from board-level management. There are usually no shares or boards in that simple form; the owner manages directly and bears the business through personal legal identity. Importing corporate share-and-board language into sole trading misreads the overview’s unincorporated column and invents governance organs the sole trader never creates.',
    ],
    'CASE 4.4.03': [
        'Regular trading does not turn the bakery into an incorporated legal person distinct from its owner. Activity volume is not the incorporation test; formal legal personality is.',
        'The bakery fits an unincorporated sole trader structure in which the owner and manager are typically the same person. One baker who also keeps the books matches that pattern.',
        'As an unincorporated business, the bakery is not a legal entity of its own separate from the proprietor. Contracts and liabilities attach through the owner’s personal legal identity.',
        'Shareholders providing share capital and appointing directors is the incorporated governance story, not the usual one-person retail bakery setup. That corporate language does not describe this neighbourhood shop.',
        'Limited liability companies and corporations belong with incorporated forms, not in the same unincorporated category as sole proprietorships. Figure 9 keeps those shells on the incorporated side because they are legal persons with owners who need not manage every shift. Placing LLCs and corporations beside sole traders as unincorporated erases the personality split the neighbourhood bakery example is meant to illustrate.',
    ],
    'CASE 4.4.04': [
        'Figure 9 places sole traders and partnerships among unincorporated businesses. Those forms lack separate legal personality in the overview’s logic.',
        'Figure 9 classifies corporations and limited liability companies as incorporated businesses. Legal personality and formal company status define that column.',
        'Having more than one owner does not force incorporation. Partnerships have multiple owners yet remain unincorporated in Figure 9, while single-shareholder companies can still be incorporated legal persons. Multi-owner status alone is not the dividing line; legal personality and formal company status are. The overview therefore refuses to treat headcount of owners as a sufficient test for the incorporated column.',
        'In unincorporated forms, owners and managers are typically the same persons according to the overview. Day-to-day control rides with ownership in that column.',
        'Shareholders provide share capital while directors run incorporated companies in the diagram’s logic. Funding and management roles can split once the firm is incorporated.',
    ],
    'CASE 4.4.05': [
        'A sole trader or sole proprietor is an unincorporated form with typically one owner who also manages the business. That dual role is the overview’s baseline for this structure.',
        'Sole traders are not legal persons that sue and are sued independently of the proprietor. The owner’s personal legal identity carries the business’s rights and duties.',
        'Incorporated limited liability companies do not merge into the sole trader category merely because they have one shareholder. One-shareholder companies remain incorporated legal persons, not sole proprietorships.',
        'Partnerships and sole traders share unincorporated status; they do not share incorporated status merely because both can operate without listing shares. Non-listing is common across many forms and does not define incorporation.',
        'Directors appointed by shareholders do not normally run a sole proprietorship on behalf of passive owners. That board-and-shareholder pattern belongs to incorporated companies where share capital funds the firm and directors steward it. Classic sole traders manage themselves; inventing a director layer as the normal sole-proprietor setup misplaces corporate governance into the unincorporated column of the ownership overview.',
    ],
    'CASE 4.4.06': [
        'Shareholders do not personally sign every supplier contract as the sole management authority in corporations. Directors and officers ordinarily bind the company within their authority.',
        'Partners in a general partnership usually manage themselves rather than delegate all management to non-owning directors. Active partner management is the unincorporated default.',
        'Sole proprietors need not hire external directors before they may legally trade as unincorporated businesses. The owner can manage and trade without inventing a corporate board first.',
        'Limited liability companies can appoint separate managers; shareholders are not forbidden from hiring professional directors under any circumstances. Separation of ownership and management is allowed and common.',
        'Directors run incorporated companies, whereas unincorporated owners typically manage their own businesses directly. That contrast is the overview’s clean split on who steers day-to-day decisions across the two columns. Corporations and LLCs can hire professional managers; sole traders and general partners usually keep operational control with the owners. Collapsing those patterns would erase why Figure 9 separates governance styles when it classifies ownership forms.',
    ],
    'CASE 4.4.07': [
        'Sole traders do not raise share capital by issuing stock to public investors on a regulated exchange. Share issues belong to incorporated companies that create transferable equity claims. An unincorporated sole proprietorship funds through the owner’s own means or personal borrowing, not through a listed stock flotation that presupposes corporate shares.',
        'Partnerships do not become incorporated merely because partners contribute capital. Funding does not replace the need for formal legal personality through incorporation.',
        'Unincorporated businesses can have more than one owner; partnerships prove that multi-owner unincorporated forms exist in the overview. The one-owner rule is for sole traders, not for the whole unincorporated column.',
        'Shareholders provide share capital to incorporated businesses while directors run the company. That division of funding and management is the corporate governance baseline.',
        'Incorporated businesses may have owners who do not manage operations because ownership and management can be separated. Passive shareholders and professional directors illustrate that split in practice.',
    ],
    'CASE 4.4.08': [
        'Investing time and capital together does not force classification as an incorporated corporation. Two consultants can remain an unincorporated partnership while sharing work and profits.',
        'The practice is an unincorporated partnership in which owners and managers are typically the same persons. Both consultants manage client work rather than sitting as passive shareholders behind a board.',
        'As an unincorporated business, the partnership is not a legal entity of its own separate from the partners. Rights and obligations run through the partners’ personal legal identities.',
        'Shareholders providing share capital while directors run the firm describes incorporated governance, not this two-person consulting partnership. Corporate vocabulary does not fit their partnership agreement setup.',
        'Limited liability companies and sole traders do not share the same incorporated legal status as stock corporations. LLCs are incorporated; sole traders are unincorporated; equating all three blurs Figure 9’s map. The consultants’ partnership sits with other unincorporated multi-owner forms rather than with stock corporations.',
    ],
    'CASE 4.4.09': [
        'Unincorporated businesses are not legal entities of their own. Personality remains with the owners rather than with a separate company person.',
        'Incorporated businesses are legal persons distinct from their owners. The company can hold rights and duties in its own name, sue and be sued, and own assets separately from the private identities of shareholders.',
        'In unincorporated sole traders and partnerships, owners and managers are typically the same persons. Direct management by owners is the overview’s default for that column.',
        'Shareholders provide share capital and directors run incorporated companies. Funding and operational control can therefore diverge once incorporation is in place.',
        'Corporations and limited liability companies are examples of incorporated business forms. Both sit on the incorporated side of the ownership classification the chapter overview presents, with legal personality and limited owner liability as central features that unincorporated sole traders and partnerships lack. That placement closes the map from personality through governance to naming the forms students must recognise.',
    ],
}


def apply() -> None:
    data = json.loads(PATH.read_text())
    slice_cases = data[80:120]
    ids = [c["case_id"] for c in slice_cases]
    assert ids[0] == "CASE 4.3.49" and ids[-1] == "CASE 4.4.09", ids[0:1] + ids[-1:]
    missing = [cid for cid in ids if cid not in EXPL]
    if missing:
        raise SystemExit(f"missing explanations for {missing}")
    extra = sorted(set(EXPL) - set(ids))
    if extra:
        raise SystemExit(f"extra keys {extra}")

    for c in slice_cases:
        key = c["answer_key"]
        bodies = list(EXPL[c["case_id"]])
        expl = [wrap(bodies[i], bool(key[i])) for i in range(5)]
        expl = [re.sub(r"^(TRUE|FALSE)\s*[—\-]\s*", "", e) for e in expl]
        expl = [e.replace("\u2014", ", ").replace("\u2013", "-") for e in expl]
        c["tactical_explanations"] = expl

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(slice_cases)} cases {ids[0]} .. {ids[-1]}")


if __name__ == "__main__":
    apply()
