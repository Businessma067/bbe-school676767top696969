#!/usr/bin/env python3
"""Rewrite tactical_explanations for ch4 cases [40:80] (CASE 4.3.09–4.3.48).

Statement-only from scratch: varied length, no stock clones, rare Tip/Note/Trap,
no em dash, no scaffold phrases. Does not change statements/answer_key/context.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
PATH = ROOT / "src/data/economics-cases-ch4-subtopics.json"


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


EXPL: dict[str, list[str]] = {}

EXPL["CASE 4.3.09"] = [
    "Shareholders elect a board so major strategy and oversight sit with directors who represent capital providers, rather than with every investor trying to manage the firm in person.",
    "Inside that board structure the Chief Executive Officer ranks as the highest manager, coordinating other officers and carrying overall responsibility for how the corporation executes its plans.",
    """A Chief Information Officer can sit beside other executives on the same board and hold defined responsibility for systems, data, and technology programmes.

Corporate boards routinely mix functional chiefs this way: finance, operations, marketing, and information can all hold seats without collapsing ownership into day-to-day technical work. The CIO title fits that ordinary board roster.""",
    "Marketing leadership likewise belongs on many boards. A Chief Marketing Officer may hold a director seat while steering brand strategy, pricing campaigns, and customer-facing programmes for the firm as a whole.",
    "Investors who only contribute share capital remain owners, not operators. They are neither obliged nor entitled to manage the company themselves once directors and officers are in place.",
]

EXPL["CASE 4.3.10"] = [
    "When markets expect stronger future profits, buyers bid more eagerly for the stock today, so demand for those shares rises with the improved profit outlook rather than with yesterday's results alone.",
    "In a thriving economy more households and firms hold spare cash ready to invest, and that larger investable pool helps lift demand for corporate shares across many sectors.",
    """Comparatively higher inflation can still support equity demand when investors anticipate that share prices will climb alongside general prices, preserving real purchasing power better than idle cash.

That channel is comparative, not automatic: inflation expectations reshape the relative attractiveness of equities versus fixed nominal claims, which is why higher inflation rates can coincide with stronger share demand.""",
    "Low interest rates weaken the pull of deposits and bonds, so some funds shift toward shares. Demand for equity rises as those interest-bearing alternatives look less appealing on a relative-return basis.",
    "Economic growth, interest rates, and inflation sit among the wider indicators that routinely sway how strongly investors demand corporate shares in secondary markets.",
]

EXPL["CASE 4.3.11"] = [
    "Some buyers simply want to fund a firm they believe in, treating the share purchase as financial support for that business rather than as a purely speculative trade.",
    "Others focus on income: dividends paid from corporate profits can deliver a recurring cash return to the shareholder without any need to sell the stock itself.",
    """Capital growth is a third motive. If the market price rises after purchase, the investor can sell later at a higher price and pocket the difference as a gain.

That hope does not guarantee a rise, yet it is a standard reason people hold equities alongside or instead of dividend income. The letter names exactly that price-appreciation path.""",
    "Voting influence also matters for many holders. Attending the annual stockholders' meeting and casting votes lets shareholders shape major decisions through formal rights attached to the shares.",
    "Acquisition routes are two-fold in ordinary markets: buy at issue from the corporation, or later from another shareholder who decides to sell.",
]

EXPL["CASE 4.3.12"] = [
    "Once incorporated, the neighbourhood bakery is a legal person in its own right, so it can own the shop premises and employ bakers under the company's name rather than under each owner's personal title.",
    "Private limited status still caps liability for the family investors. Shareholders do not face unlimited personal exposure for every bakery debt merely because the firm stays private.",
    """Keeping the family's shares off a public exchange does not strip limited liability. Private limited companies routinely stay unlisted while owners remain protected up to their invested capital.

Public trading is optional for this form. Limited liability follows incorporation and the private limited rules, not a listing tick on an exchange board.""",
    "Private limited firms may issue shares to selected investors without ever listing. A stock-exchange flotation is not a precondition for any share issue to family or private backers.",
    "Ownership and management need not coincide at the bakery. Directors can run operations even when other family members hold the outstanding shares and stay out of daily work.",
]

EXPL["CASE 4.3.13"] = [
    "Shareholders have no legally fixed annual dividend entitlement that forces payouts every year. Corporations may skip payments when cash needs, losses, or board policy require retention.",
    "Dividends are slices of corporate profit that management may distribute, retain, or mix over time. The choice is discretionary policy rather than a rigid coupon owed like bond interest.",
    """Withholding dividends never guarantees an immediate capital gain. Retained profits might fund growth, yet markets can still mark the stock down if investors wanted cash income or doubted the reinvestment plan.

Always raises share prices fails because price depends on demand and expectations, not on retention alone. Omission and rising prices are not locked together.""",
    "If dividends stay unpaid for a long stretch, income-seeking buyers may walk away. Demand can soften and the shares may look less attractive relative to stocks that still pay cash.",
    "A secondary-market price fall after omitted dividends does not inject fresh share capital onto the issuer's books or enlarge registered equity automatically.",
]

EXPL["CASE 4.3.14"] = [
    "Preferred stock usually trades voting power for a stronger dividend claim, so holders often skip or dilute votes at the stockholders' meeting in exchange for that income priority.",
    "Preferred investors do not always enjoy both superior dividends and full board-control voting at once. The usual bargain cuts voting rights rather than expanding control over every appointment.",
    """Common shareholders typically keep voting rights at the annual meeting, which is how ordinary equity exercises control over director elections and major resolutions.

That voting role is the counterpart to preferred stock's income priority. When the letter says common shareholders typically retain votes, it matches the standard class split used in corporate finance.""",
    "Bonds are debt securities issued to creditors. Issuing them does not turn lenders into preferred shareholders, so corporations can raise bond finance without that conversion occurring.",
    "Bond interest is often cheaper than a similar bank loan for large funding needs, which is why bond finance can look attractive beside ordinary credit facilities.",
]

EXPL["CASE 4.3.15"] = [
    "Exchange prices respond to buyers and sellers in the market. The board does not unilaterally fix the listed quote and freeze demand out of price formation on a regulated exchange.",
    "Under ordinary supply and demand, strong buying interest for a stock tends to push its exchange price upward when the float of available shares is limited relative to orders.",
    """Secondary purchases move existing shares between investors. High demand does not compel the issuer to mint a new share for every trade that clears on the exchange.

New issues happen only when the corporation deliberately raises fresh equity. Treating each market purchase as forced creation of stock misunderstands how listed trading works after flotation.""",
    "Falling demand may lower prices among traders, but the issuer is not obliged to redeem outstanding shares at the latest quote whenever interest in the stock fades.",
    "Secondary quotes do not flow into the issuer's paid-in share capital as automatic balance-sheet inflows when investors trade among themselves.",
]

EXPL["CASE 4.3.16"] = [
    "Incorporation does not lock the two consultants as the only managers forever. Boards and officers can change as ownership spreads and professional executives join the firm.",
    "Outside buyers of shares become shareholders and owners of equity stakes, yet they need not take seats on the board of directors simply because they bought stock from the founders.",
    """The founders can keep equity while hiring or electing a professional chief executive to run daily operations. Ownership and management separate cleanly in that design.

Delegating execution to the CEO is ordinary corporate practice and does not require the consultants to surrender every share they still hold in the venture.""",
    "Equity from new shareholders can sit beside bank loans in the same capital structure. The corporation may raise share capital and borrow from lenders at the same time.",
    "Selling shares to outsiders does not excuse the corporation from contract law. As a legal person it must still honour binding agreements with customers, staff, and suppliers.",
]

EXPL["CASE 4.3.17"] = [
    "Temporary dips in market prices do not force the company to repay share capital on demand to shareholders who want cash after a short slide.",
    "Share issues raise long-term equity for the firm, not short-term credit that must be redeemed inside a single accounting year like a seasonal working-capital loan.",
    """Bank overdrafts are revolving short-term facilities that lenders can call within weeks. Share capital is equity that normally stays in the firm without that repayment clock.

Equating the two roles because both involve money is wrong: maturity, claims, and redemption rules differ sharply between overdrafts and permanent equity funding.""",
    "Companies usually leave share capital unredeemed once it is raised, so it can function as permanent capital supporting the business over many years of operations.",
    "Secondary sales among investors on a listing do not oblige the issuer to buy back every share that changes hands whenever a holder wants to exit.",
]

EXPL["CASE 4.3.18"] = [
    "Besides equity from share issues, corporations routinely tap loans and other credit facilities when they need additional financial funds for investment or working capital.",
    "Bonds are tradable securities in their own right and can change hands on a stock exchange in the same regulated venue where shares are bought and sold.",
    """Large projects sometimes favour a bond issue because the coupon can undercut the interest a bank would charge on a comparable loan, stretching scarce cash further across the investment.

That cost comparison is exactly why bond finance appears beside bank borrowing in corporate funding menus. Lower interest is not guaranteed every time, yet it is often the stated attraction.""",
    "Bond interest is a debt cost paid to creditors. Bondholders remain lenders rather than co-owners, so interest is not share capital and does not make them equity partners in the firm.",
    "Authorities regulate the stock exchange as a financial market, and that venue facilitates trading in shares and in other securities such as corporate bonds.",
]

EXPL["CASE 4.3.19"] = [
    "A corporation hires employees in its own name as a legal person. Workers need not be contracted under each shareholder's personal signature for the employment relationship to bind.",
    "Separate legal personality lets the company close contracts, sue counterparties, and be sued on its own account without dragging individual shareholders into every filing.",
    """Supplier agreements bind the corporation when authorised officers sign for the firm. Shareholders do not personally execute every purchase order just because they own stock.

Separate personality exists precisely so day-to-day contracting stays with the company. Claiming owners must sign each supplier deal erases that separation of roles.""",
    "Legal personality enables land and buildings to sit in the company's name. It does not bar property ownership on the false ground that title must always rest with natural persons.",
    "Incorporation does not make the firm lawsuit-proof. The corporation itself can still be sued even when shareholders' personal liability for company debts is capped by limited liability.",
]

EXPL["CASE 4.3.20"] = [
    "A holiday-driven price jump on already issued shares does not raise the corporation's registered share capital by the full market value of that surge on the exchange.",
    "Shareholders who sell during the surge transfer voting rights to the buyers of their stock, not back to the corporation as if the firm collected those votes for itself.",
    """After issue, prices move with investor demand and supply for the shares already outstanding. Strong holiday results can shift that balance without any new equity leaving the treasury.

The retailer's secondary quote therefore reflects trading among investors, not a fresh capital subscription recorded as share capital for the issuer.""",
    "No rule forces the corporation to issue bonus shares equal to every euro of secondary-market price increase. Issuers are not obliged to match market moves with free stock.",
    "Shareholders who sold at the higher prices realise capital gains for themselves. The issuer does not receive those secondary trading proceeds as corporate cash.",
]

EXPL["CASE 4.3.21"] = [
    "If share capital of one million euros is divided into one hundred thousand shares, each share represents a fixed one-hundred-thousandth fraction of that capital pool.",
    "A doubled exchange price does not automatically double registered share capital on the balance sheet; market quotes and book equity are different quantities.",
    """At initial issue, cash moves from the investor to the corporation and the buyer receives an ownership stake in return. That primary subscription is how equity funding enters the firm.

Later market trades among investors do not repeat that cash-inflow path. The letter correctly ties the funding transfer to purchase at issue from the company.""",
    "A shareholder may sell shares later to another investor without requiring the corporation to redeem or cancel the stock as if it were a callable loan.",
    "Preferred and common classes often differ on voting rights. Not every share always carries exactly one vote regardless of the class terms written into the issue.",
]

EXPL["CASE 4.3.22"] = [
    "Selling products to customers does not require a stock-exchange listing first. Many corporations trade goods and services for years while remaining entirely unlisted.",
    "An unlisted corporation can still place shares with private investors and raise share capital without using a public exchange as the subscription venue.",
    """After listing, later trades move money between sellers and buyers of existing stock. The issuer does not collect every future euro paid whenever shares change hands on the market.

Confusing secondary turnover with ongoing capital inflows to the company is the core error. Listing opens a market; it does not route all subsequent payments into the treasury.""",
    "Delisting ends exchange trading of the stock for public investors. It does not automatically convert the corporation into an unincorporated partnership under commercial law.",
    "Listing remains optional in corporate design: a corporation's stock can trade on a stock market or exchange, but it does not have to do so to exist.",
]

EXPL["CASE 4.3.23"] = [
    "Expectations of successful new products can lift forecast profits and draw more buyers into the stock, raising demand for the corporation's shares ahead of full realisation.",
    "Expectations of increasing market share likewise feed optimism about future earnings and can push share demand higher among investors watching the competitive outlook.",
    """When the wider economy thrives, more investors hold surplus funds and look for places to put them. Equity markets often absorb part of that cash, so thriving conditions can support stronger demand for shares.

The link is capacity to invest plus confidence, not a mechanical rule that every boom must lift every stock equally across the market.""",
    "High interest rates make deposits and bonds more competitive with equities, so some money leaves the share market and demand for stock can fall as relative returns shift.",
    "An increase in share prices after issue benefits shareholders who hold or sell at the higher quotes; it does not supply new finance to the issuing corporation.",
]

EXPL["CASE 4.3.24"] = [
    "The chief information officer may sit on the board of directors with defined operational responsibilities for systems, data security, and technology delivery across the firm.",
    "Shareholders who elected the board are not drafted into performing the CIO's daily technical tasks. Specialists and officers handle those duties after delegation is complete.",
    """Choosing directors does not cancel attendance rights at the annual stockholders' meeting. Owners still gather to vote, hear reports, and exercise residual control even after delegation.

Board election organises management of the corporation; it does not exile shareholders from the meeting that remains their formal forum for major decisions.""",
    "The board of directors makes major business decisions on behalf of shareholders who supplied capital, which is the core representation role directors play in corporate governance.",
    "A chief information officer need not hold the largest block of shares before joining the management board; expertise and appointment matter more than maximum ownership.",
]

EXPL["CASE 4.3.25"] = [
    "Rising secondary-market prices do not require the issuer to record additional share capital equal to traders' paper gains on shares already outstanding.",
    "A corporation does not finance expansion automatically whenever its listed share price reaches a new high; it still needs cash from operations, debt, or a deliberate new issue.",
    """Investors who sell at a profit keep the gain between themselves and the buyer. No mandatory claw-back forces part of that rise back into the corporation as an equity injection.

Treating private trading profits as company capital contributions invents an obligation the corporate form does not impose on holders after the primary issue.""",
    "IPO proceeds are primary equity inflows to the issuer. Later exchange gains among traders are not identical recurring share-capital receipts booked the same way for the company.",
    "Price increases after shares have already been issued do not provide further financing to the issuing corporation through the secondary market alone.",
]

EXPL["CASE 4.3.26"] = [
    "Private limited companies are incorporated businesses. The fact that their shares are not publicly traded does not turn them into unincorporated sole traders or partnerships.",
    "Shares in a private limited company are typically restricted and may not be sold freely to the general public on any stock exchange the way listed stock can be.",
    """As incorporated entities, private limited companies give shareholders limited liability while the firm itself holds separate legal personality from its owners.

That package is the usual textbook contrast with sole traders and many partnerships: incorporation plus capped owner exposure, even when shares never reach a public market.""",
    "Private limited companies need not list shares on a stock exchange to exist as legal persons; personality and registration do not depend on a public quotation.",
    "Shareholders in a private limited company are typically not liable beyond the capital they invested when they acquired their equity stakes in the firm.",
]

EXPL["CASE 4.3.27"] = [
    "Sole proprietorships and partnerships are not held to the same minimum capital requirements that apply to many large listed corporations at formation.",
    "Some incorporated forms face statutory minimum capital amounts that must be met when the company is established and before registration is treated as complete.",
    """Those minimum capital rules create a baseline equity cushion so creditors face a firm with some committed owners' funds rather than an empty shell at start-up.

Protection is incomplete and does not insure every claim, yet the policy aim is creditor safeguarding through a required equity buffer when the company is formed.""",
    "Meeting minimum capital requirements does not guarantee that shareholders will receive annual dividend payments; profit distribution remains a separate discretionary board decision.",
    "Corporations remain more difficult to set up than unincorporated businesses partly because of formal capital thresholds and registration rules that sole traders can skip.",
]

EXPL["CASE 4.3.28"] = [
    "Corporations planning large projects may use bonds and bank loans as well as share capital. Equity is not the only permitted funding route for plant or capacity investment.",
    "Issuing bonds may offer a lower interest rate than a comparable bank loan for large-scale investment, improving the financing cost of the project relative to bilateral credit.",
    """Bonds can trade as securities on regulated markets under authority oversight, just as shares do. Investors buy and sell claims on the issuer within that supervised venue.

Food processors and other industrial firms use that channel when they want tradable debt rather than relying only on a bilateral bank facility for the plant.""",
    "Bond finance adds contractual repayment and interest duties to the issuer, whereas share capital does not create the same loan-style repayment schedule to equity holders.",
    "The corporation remains a legal person that can contract for the plant independently of bondholders' personal assets or household balance sheets.",
]

EXPL["CASE 4.3.29"] = [
    "Shareholders who do not sit on the board are not barred from the annual stockholders' meeting. Board seats are not an entry ticket required for attendance and voting.",
    "Investors may buy shares partly to attend that meeting and vote on major decisions, using the formal control rights that come with ownership of voting stock.",
    """Preferred shareholders commonly accept thinner or zero voting rights in return for a stronger dividend claim at the same meeting.

That trade-off is the usual preferred-versus-common bargain: income priority comes first, while control rights are reduced or removed. The letter restates that exchange of claims accurately for preferred stock.""",
    "Voting at the stockholders' meeting does not legally oblige shareholders to perform the chief executive officer's daily operating duties inside the firm.",
    "Electing directors keeps ownership with the shareholders. Management and ownership need not become identical sets of people after the board is chosen.",
]

EXPL["CASE 4.3.30"] = [
    "Corporations are incorporated businesses that stand as legal entities separate from the people who own their shares and supply the firm's capital.",
    "Shareholders' liability is usually limited to the amount invested when purchasing shares, so personal wealth beyond that stake is generally protected from company creditors.",
    """Share capital divided into shares lets the firm invite many investors to subscribe new stock and pool large amounts of equity in one coordinated issue.

That scalability is a central reason corporations can fund projects beyond the reach of a single proprietor. Newly issued equity is the funding channel the letter describes for raising large sums.""",
    "Corporations may list shares on a regulated stock exchange but are not required to do so; many remain private while still fully incorporated under company law.",
    "Management by a board of directors allows separation of ownership and control within the corporation as a defining organisational feature of the form.",
]

EXPL["CASE 4.3.31"] = [
    "Investors may not acquire shares only by purchasing them from the corporation at the annual stockholders' meeting; primary issues and secondary sales both operate outside that event.",
    "Once shares are issued, further investors may still buy stock from existing holders. A brand-new IPO each year is not required before any additional purchase can occur.",
    """Investors may acquire shares directly from the corporation at issue or purchase them later from an existing shareholder who wants to sell on the secondary market.

Both paths produce share ownership once the transfer completes. The annual meeting is a governance event, not the exclusive shop window for buying stock in the firm.""",
    "Buying at initial issue provides share capital to the corporation. Buying later on the secondary market only transfers ownership between investors without adding issuer cash.",
    "Persons who buy shares become shareholders regardless of whether the purchase occurs at issue from the company or later on the secondary market from another holder.",
]

EXPL["CASE 4.3.32"] = [
    "The contract win did not oblige the engineering firm to register the rally amount as new share capital on its books; secondary price moves are not automatic equity subscriptions.",
    "Expectations of higher future profits from the contract can increase demand for the stock and push exchange prices up as investors reprice the earnings outlook.",
    """Shareholders holding stock during the rally may benefit from capital growth if they later sell at higher prices than they paid for the shares.

Nothing in the rally forces an immediate cash distribution from the board. The investor benefit arrives if and when the holder sells into the higher quote or marks a higher valuation.""",
    "The corporation does not receive the full trading profit whenever existing shareholders sell to new buyers on the exchange; those gains stay with the selling investors.",
    "Rising prices after issue do not force the board to pay immediate dividends equal to the full price increase recorded on the secondary market.",
]

EXPL["CASE 4.3.33"] = [
    "A stock exchange is regulated by the authorities as a financial market where securities can be bought and sold under official oversight and published rules.",
    "Corporations seeking a listing must comply with certain rules and fulfil listing requirements before their stock is admitted to trading on that exchange.",
    """Shares introduced on an exchange at the IPO are thereafter priced largely by demand and supply among investors rather than by repeated board-set stickers.

Primary pricing at issue and secondary market clearing afterward are different stages. After introduction, the exchange quote tracks that buyer-seller balance day by day.""",
    "Bonds as well as shares may be bought and sold on such regulated markets, so both debt and equity securities can change hands in the same supervised venue.",
    "Listing facilitates trading among many people and businesses but does not oblige the issuer to receive later trade proceeds when shares change hands secondarily.",
]

EXPL["CASE 4.3.34"] = [
    "Limited liability does not mean shareholders are personally liable without limit for all corporation tax debts; the usual cap is the capital they invested in the shares.",
    "Shareholders' liability is usually confined to the money they invested when buying shares, so creditors look first to company assets rather than owners' private wealth.",
    """Limited liability caps personal claims beyond the investment; it does not insure shareholders against losing market value when share prices fall on the exchange.

Paper losses remain real for the holder. Confusing personal debt protection with a floor under market prices misreads what limited liability actually covers.""",
    "Managers who are not shareholders do not always enjoy the same limited liability cap as investors who bought stock; the investor protection attaches to share ownership.",
    "Limited liability distinguishes corporations from many unincorporated forms where owners face broader personal exposure to business debts and claims.",
]

EXPL["CASE 4.3.35"] = [
    "Every corporation need not distribute the entire annual profit as dividends to keep its legal personality; retention is compatible with remaining an incorporated legal person.",
    "Shareholders may not sue successfully merely to force dividend payments equal to the latest market price of their shares; dividends are not priced as a market-value coupon.",
    """Omitting dividends can move prices either way. Income investors may sell when cash payments stop, while growth investors may stay if they trust retention plans and future earnings.

The absolute claim that omission always leaves quotes unchanged fails as soon as dividend clienteles react to missing cash income from the stock.""",
    "Dividends are not interest payments on share capital that the corporation must pay regardless of profit; they are distributions that presuppose earnings and board approval.",
    "Dividends are discretionary profit distributions. Prolonged omission can reduce share attractiveness and demand among investors who wanted income from the stock.",
]

EXPL["CASE 4.3.36"] = [
    "Private limited status does not remove limited liability merely because shares are not publicly traded on an exchange; the liability cap follows incorporation, not listing.",
    "The family manufacturer remains an incorporated legal person able to own equipment and hire workers in the company's name even while equity stays inside the family.",
    """Minimum capital requirements can apply to private limited companies that never list. Listing is not the trigger that suddenly switches those formation rules on.

Family manufacturers that meet capital thresholds at start-up illustrate the point: the buffer is about creditor protection at incorporation, not about an immediate IPO.""",
    "Family shareholders need not personally manage production every day. Private companies may elect boards and professional managers rather than forbidding delegated control.",
    "Shares need not be sold to the general public on an exchange for the firm to operate as a private limited company with full corporate status.",
]

EXPL["CASE 4.3.37"] = [
    "Comparatively low interest rates can increase share demand by making deposits and bonds less attractive, so some investable funds shift toward equities instead.",
    "Comparatively high interest rates can pull investors toward interest-bearing alternatives and away from shares when relative returns favour fixed-income claims.",
    """Economic growth indicators form part of the wider set of factors influencing share demand. Stronger growth can lift earnings hopes and investable income, while weak growth can dampen both.

Interest rates alone never tell the whole demand story; growth readings sit beside them when investors judge how much equity to hold.""",
    "High interest rates do not always increase share prices because corporations earn more from bank deposits. More often, high rates compete with equities and can pressure stock prices.",
    "Demand shifts from such macro conditions affect market prices but do not by themselves add share capital to the issuer after the shares have already been issued.",
]

EXPL["CASE 4.3.38"] = [
    "Comparatively higher inflation may support share demand when investors expect share prices to rise with general prices and protect real purchasing power better than cash.",
    "Inflation is among the economic indicators that can influence demand for corporate shares as investors reassess relative returns across asset classes.",
    """Thriving economic conditions with available investable funds can coincide with stronger share demand as households and firms look for places to put surplus cash.

That coincidence is empirical and comparative, yet it is a standard channel linking the real economy's health to equity demand in secondary markets after shares are already trading.""",
    "Higher inflation does not oblige the issuing corporation to inflate its registered share capital whenever consumer prices rise in the wider economy.",
    "Price changes driven by inflation expectations benefit trading shareholders rather than financing the issuer anew with fresh equity subscriptions.",
]

EXPL["CASE 4.3.39"] = [
    "The management board's highest-ranking officer is the Chief Executive Officer, who leads corporate execution and coordinates the rest of the executive team.",
    "The Chief Financial Officer need not be the largest shareholder before overseeing finance and accounting functions; appointment and competence matter more than maximum ownership.",
    """The Chief Operating Officer may manage operations as a member of the board of directors, sitting with other executives who hold functional portfolios.

Functional chiefs on the board are normal corporate architecture. The COO seat does not require collapsing ownership into that single office or into one dominant share block.""",
    "Shareholders elect the board but are neither obliged nor entitled to manage daily operations themselves once directors and officers carry that operational mandate.",
    "Separation of ownership and management is a defining feature of corporate organisation, allowing capital providers to stay distinct from day-to-day controllers.",
]

EXPL["CASE 4.3.40"] = [
    "Proceeds from shares sold at the IPO entered the startup corporation as share capital when investors bought stock directly from the issuer at the flotation.",
    "Doubling of the secondary-market price after the IPO does not double the cash share capital available inside the firm; later quotes reshuffle investor wealth, not treasury cash.",
    """The startup must not surrender half of trading gains on the exchange to regulators as additional equity. Secondary gains belong to investors who sell, not to a mandatory company levy.

No such automatic transfer turns market appreciation into forced corporate capital. The letter invents a payment the corporate form does not require after flotation.""",
    "Existing shareholders who hold stock after the IPO do not owe the corporation the difference between issue price and the new market price as a catch-up subscription.",
    "A higher post-IPO market price creates no automatic right for the corporation to issue unlimited new debt free of interest merely because the equity quote rose.",
]

EXPL["CASE 4.3.41"] = [
    "A corporation may own land and property in its own name rather than placing title in shareholders' personal names for every site the business uses.",
    "Limited liability for shareholders does not mean the corporation itself cannot be sued for breach of contract; the company remains a liable legal person.",
    """Hiring employees does not require each shareholder to sign every employment contract personally. Authorised officers sign for the firm as employer.

Legal personality concentrates hiring capacity in the entity, which is why payroll and labour agreements name the corporation rather than listing every owner as a co-signer.""",
    "The corporation may sue and be sued as a legal entity independent of individual owners, so disputes name the company rather than each shareholder by default.",
    "Legal personality allows the business to close contracts that bind the corporation, not shareholders personally, for ordinary commercial commitments.",
]

EXPL["CASE 4.3.42"] = [
    "The full amount investors pay on the exchange after the IPO is not credited to the corporation's share capital account; those payments go to the selling shareholders.",
    "Secondary-market buyers pay the seller of the stock. They do not pay share capital directly to the issuer unless a new primary placement is arranged separately.",
    """Market premiums above issue price during secondary trading change what investors pay each other. Those premiums do not by themselves enlarge the issuer's permanent equity base.

Permanent equity rises when the corporation issues stock or books other equity events, not when two investors reprice an already outstanding share between themselves.""",
    "Only proceeds from shares bought at initial issue from the corporation typically increase its share capital as primary equity funding on the books.",
    "Redemption of share capital is not required whenever secondary-market prices fall below the IPO price; market dips do not trigger automatic buybacks by the issuer.",
]

EXPL["CASE 4.3.43"] = [
    "People who found the corporation and own shares need not manage the business themselves; they may remain capital providers while others run operations.",
    "Managers running the corporation need not own shares of the business. Professional executives can lead without holding an equity stake in the firm they direct.",
    """Shareholders may elect directors to represent their interests while remaining passive investors outside daily operations of the business.

The board stands between capital providers and the executive team, which is how ownership retains influence without requiring personal management by every shareholder who supplied funds.""",
    "The board of directors, not every shareholder, makes major business decisions in typical corporations once that governance structure is in place.",
    "Founders who sell all their shares transfer ownership to new investors. The corporation keeps its legal personality and incorporation status after that exit.",
]

EXPL["CASE 4.3.44"] = [
    "The logistics corporation was not legally obliged to pay dividends despite shareholders' wish for annual income; retention for expansion remains a lawful board choice.",
    "Retaining all profits does not guarantee rising share prices even when no dividends are paid. Markets can still fall if growth hopes disappoint or income buyers leave.",
    """Shareholders' limited liability does not disappear in years when dividends are omitted. Skipping payouts may annoy investors, yet it does not reopen personal liability for company debts.

Owners remain capped at their investment even while the board ploughs profits into fleet, warehouses, or other expansion projects for the logistics network.""",
    "Prolonged omission of dividends may make shares less attractive to income seekers and weaken investor demand for the stock over a longer horizon.",
    "Dividends, when paid, represent part of the corporation's profits distributed to shareholders rather than interest owed on a fixed debt claim.",
]

EXPL["CASE 4.3.45"] = [
    "Share capital is the capital of a corporation organised as a pool that is divided into shares which investors can hold as units of ownership in the firm.",
    "Each share, also called stock, represents a portion of the total share capital and therefore a corresponding slice of ownership in the business.",
    """Selling newly issued shares to investors can raise substantial funds for the corporation to invest, repay debt, or strengthen liquidity on the balance sheet.

That primary equity raise is one of the corporation's distinctive financing strengths compared with forms that cannot invite broad share subscriptions as easily.""",
    "Share capital is generally long-term capital that the company usually does not redeem the way it would repay a short-term bank facility on a fixed date.",
    "Shareholders are persons who buy shares and thereby own a stake in the corporation as residual claimants on its equity capital and future profits.",
]

EXPL["CASE 4.3.46"] = [
    "Initial share sales are the stage at which large amounts of share capital can flow into the corporation from subscribers who buy newly issued stock.",
    "Later exchange trading transfers shares among investors without adding finance to the issuer; cash moves from buyer to seller, not into the company's treasury.",
    """Demand and supply on the exchange determine prices after the initial introduction of shares. Bullish buyers lift quotes; eager sellers or thin interest pull them down.

Board wishes do not replace that market mechanism once the shares are trading. Post-issue pricing follows the balance of orders on the venue among investors.""",
    "Investors may seek dividends, capital growth from rising prices, or voting influence at meetings when they decide to buy stock in a corporation.",
    "Economic growth, inflation, and interest rates can all influence how strongly investors demand shares relative to competing asset classes nearby.",
]

EXPL["CASE 4.3.47"] = [
    "Share capital is a principal financial fund available to corporations and sits alongside borrowing as a core external funding source for incorporated firms.",
    "Loans and credit also form part of the financial funds corporations may use when equity alone is insufficient or when leverage is preferred for a project.",
    """Corporations typically have more funding options than sole proprietors or partnerships: equity issues, bank credit, and often access to bond markets as well.

That broader toolkit follows from legal personality, limited liability, and the ability to divide ownership into shares that many outside investors can hold at once.""",
    "Bonds may be issued as an alternative to bank loans for raising debt finance when the firm wants tradable fixed-income claims instead of a bilateral facility.",
    "Share capital differs from debt because it does not create the same contractual repayment obligation as a loan owed to creditors on a fixed schedule.",
]

EXPL["CASE 4.3.48"] = [
    "A corporation can raise share capital without listing on a public stock exchange. Private issues and placements remain available funding routes for unlisted firms.",
    "An unlisted corporation may still be a legal person owning laboratories and hiring researchers in its own name while equity stays off a public market.",
    """Private share placements can supply equity without an initial public offering on an exchange. The company issues shares under negotiated terms to selected institutions.

That route is how many growth firms fund research before any listing decision. The letter's claim matches that private equity-raising path for pharmaceuticals and similar ventures.""",
    "Shareholders in such a corporation retain limited liability tied to their investment whether or not the stock ever lists for public trading.",
    "Listing remains optional for the pharmaceutical firm. Exchange trading mainly facilitates secondary transfers among many market participants once a quotation exists.",
]


def apply() -> None:
    data = json.loads(PATH.read_text())
    subset = data[40:80]
    ids = [c["case_id"] for c in subset]
    missing = [cid for cid in ids if cid not in EXPL]
    extra = [cid for cid in EXPL if cid not in ids]
    if missing or extra:
        raise SystemExit(f"id mismatch missing={missing} extra={extra}")
    for c in subset:
        bodies = EXPL[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        c["tactical_explanations"] = [
            wrap(bodies[i], bool(c["answer_key"][i])) for i in range(5)
        ]
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {PATH} cases {ids[0]} .. {ids[-1]} ({len(ids)})")


if __name__ == "__main__":
    apply()
