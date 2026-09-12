#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch4 cases [120:159]."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch4-subtopics.json")
SLICE = slice(120, 159)


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    if "—" in body:
        raise ValueError("em dash in body")
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


BODIES: dict[str, list[str]] = {}

BODIES['CASE 4.4.10'] = [
    """Incorporation creates a legal person distinct from the people who own shares. The company can own assets, hire staff, and sue or be sued in its own name. That separate personality is exactly what the statement names.""",
    """Registering a trading name only labels how the partnership presents itself to customers. It does not turn an unincorporated partnership into a legal person. Creditors still look to the partners personally for unpaid debts. Automatic personality from a name plate invents a rule the overview does not use.""",
    """Hiring seasonal pickers or shop assistants changes the labour force, not the legal form of the business. A sole proprietorship remains the proprietor's personal undertaking even with a payroll. Separate legal personality arrives through incorporation formalities, not through employment contracts. Staff can work for an unincorporated farm or café for years without ever creating a company entity. The claim confuses workforce size with legal status and therefore misreads the classification of ownership forms.""",
    """Unincorporated sole traders and partnerships are not legal entities of their own; incorporated companies are. That difference in legal entity status is central to the overview, not a cosmetic label. Treating both sides as sharing the same entity status erases the chapter's main divide between the two groups.""",
    """A partnership agreement allocates ownership and duties among partners. It does not issue shares or create a company with separate personality. Partners stay partners until incorporation procedures turn the firm into a company with shareholders.""",
]

BODIES['CASE 4.4.11'] = [
    """Partnerships sit with unincorporated forms even when two or more people co-own the firm. Multiple owners do not by themselves create a separate legal person. The statement places partnerships correctly in that group.""",
    """A corporation is registered as an incorporated business and counts as a legal person in its own right. It can contract and hold assets apart from any single shareholder. Grouping corporations with incorporated legal persons matches the overview's categories cleanly.""",
    """Limited liability companies share the incorporated column with corporations because both are legal persons with capped owner liability under the forms studied here. Creditors claim against the company, not automatically against every owner's private house or savings. Placing LLCs among unincorporated sole traders would scramble liability and personality rules students rely on. The statement therefore ranks limited liability companies with incorporated forms alongside corporations.""",
    """Employing a non-partner manager only delegates day-to-day tasks such as shift planning or purchasing. The partnership remains unincorporated until formal incorporation creates a company. Management hiring does not flip legal personality on by itself.""",
    """Sole traders and partnerships both keep liabilities and contracts on the natural persons involved. The overview therefore lists both under unincorporated ownership without separate company personality.""",
]

BODIES['CASE 4.4.12'] = [
    """In sole trader and partnership settings the people who own the firm usually also run daily decisions. That owner-manager overlap is the typical pattern for unincorporated businesses in the overview.""",
    """Shareholders can appoint directors without serving on the board themselves. Corporations do not demand that every owner also act as a director in every period.""",
    """A sole trader who opens the shop, sets prices, and signs supplier invoices is both owner and manager in one person. That overlap is the usual unincorporated pattern before companies separate roles. Incorporated firms can leave capital providers off the factory floor while directors supervise managers. Pointing to the sole trader as an illustration of owner-manager overlap therefore fits the classification cleanly.""",
    """Partners may divide bookkeeping, sales, and production among themselves, yet the firm stays unincorporated. Specialisation inside a partnership does not create a separate legal person or turn partners into a company.""",
    """Shareholders often delegate running the company to directors and hired managers. Personal operation by every shareholder is not required once the firm is incorporated.""",
]

BODIES['CASE 4.4.13'] = [
    """Seasonal workers are employees, not incorporators of a company. Hiring them leaves the farm as the proprietor's unincorporated business without separate legal personality.""",
    """One proprietor owns the land, hires help, and decides planting and sales personally. That is the classic unincorporated sole trader pattern in which owner and manager are the same person. Nothing in the scene creates shareholders injecting capital or a board of directors.""",
    """Because the farm is unincorporated, contracts, debts, and land title sit with the proprietor as a natural person rather than with a company entity. There is no separate farm corporation that owns assets apart from the owner. Seasonal labour and personal decision-making do not manufacture that missing entity overnight. The statement correctly denies a distinct legal entity for this sole-trader agricultural operation.""",
    """Share capital and a director board belong to incorporated companies with separate personality. A one-owner farm run personally has neither shareholders injecting share capital nor directors managing on their behalf.""",
    """Limited liability companies are incorporated forms in the ownership overview. Using natural resources in agriculture does not move them into the unincorporated column.""",
]

BODIES['CASE 4.4.14'] = [
    """Separate legal personality attaches to incorporated businesses in this classification. Sole traders and ordinary partnerships lack that separate entity status in the overview.""",
    """Signing a partnership agreement organises ownership shares and duties among partners. It does not confer legal personality on the partnership as a company-like entity. Personality still requires incorporation under the forms compared here.""",
    """Putting the proprietor's name on invoices or letterheads is ordinary trading practice for a sole trader. Stationery does not incorporate the business or create a legal person separate from the owner. Creditors still treat the proprietor as the contracting party on unpaid bills. Confusing branding with incorporation swaps a cosmetic detail for a legal status change the chapter never equates.""",
    """Private limited companies remain incorporated even when shares are not traded on a public exchange. Public listing is not the switch that creates or cancels incorporated status for an LLC.""",
    """Tax treatment can differ across forms, yet the deeper split is legal entity status: separate personality versus none. Reducing the contrast to tax alone is too narrow for the overview.""",
]

BODIES['CASE 4.4.15'] = [
    """Directors managing a factory is normal inside a corporation with separate personality. That management structure does not reclassify the firm as an unincorporated partnership.""",
    """Shareholders invest capital while the corporation itself is the legal person that owns plant and signs contracts. Separation from any one shareholder is what incorporation means in this manufacturing scene.""",
    """Incorporated companies are built so ownership and day-to-day management can differ without breaking the form. Shareholders need not stand on the production line; directors and hired managers can run machines and shifts. Requiring personal operation by every shareholder would erase limited liability's practical point. The claim that owners and managers cannot differ is therefore false for this manufacturing corporation.""",
    """Share capital comes from shareholders; operational oversight sits with directors of the company. That division is the standard picture for an incorporated manufacturing company in the overview.""",
    """Ownership tables place sole traders beside corporations so students can compare how control is organised. A sole trader concentrates ownership and management in one person, while this manufacturer splits share capital from board oversight. Both forms are read through that same control-comparison schema in the overview.""",
]

BODIES['CASE 4.4.16'] = [
    """Several partners can co-own a firm without incorporating into a company. Partnerships remain unincorporated businesses despite having more than one owner.""",
    """A sole trader is typically one owner who also manages daily work at the counter or site. That single-person pattern is the usual unincorporated starting point before partnerships or companies appear.""",
    """Owner headcount alone never proves incorporation: partnerships already show multiple owners without legal personality. Shareholder labels usually signal a company, but classification still turns on whether a separate legal person exists. Counting multi-shareholder heads as if that tally itself proved an unincorporated shell follows the trap built into this item.""",
    """Corporation status rests on incorporation and legal personality, which can hold with few shareholders or many. A blanket 'regardless of how many shareholders' line overstates how particular rules may set membership floors. On that absolute wording the claim is marked overstated rather than cleanly correct for every statute.""",
    """Even with several partners, an unincorporated firm is not a legal entity of its own. Contracts and liabilities stay with the partners as natural persons rather than with a company shell.""",
]

BODIES['CASE 4.5.01'] = [
    """Outside investors who subscribe for shares provide equity from beyond the firm's own surplus. That share capital is external equity finance for the corporation in the sources overview.""",
    """Profit kept in the business instead of being paid out becomes retained earnings. Those funds are internal equity because they arise inside the firm rather than from a new outside subscription. No fresh creditor is created when managers simply leave surplus undistributed.""",
    """When investors inject ownership funds, the source is external equity in the sources-of-finance framework. The investors stand outside retained trading surplus and take ownership claims rather than creditor claims. Dividends may follow later, yet the initial classification is equity, not a bank loan. That placement matches how the overview sorts investor funds beside retained earnings and debt lines.""",
    """An overdraft lets the firm draw beyond its credit balance for short periods; trade credit postpones paying suppliers. Both are standard short-term debt examples in the finance tables rather than equity injections.""",
    """A multi-year bank loan and a bond issue both create long-term repayment duties to outside creditors. They sit under long-term external debt finance rather than under share capital or retained earnings.""",
]

BODIES['CASE 4.5.02'] = [
    """Equity finance is not only new share issues from the market. Retained earnings supply internal equity while share capital supplies external equity under one equity heading.""",
    """Borrowing for a few months to bridge payroll or inventory is short-term debt finance. Working-capital loans of that kind do not become equity merely because production capacity expands afterward.""",
    """Borrowed money creates repayment obligations to creditors, so debt finance is treated as external in the overview. Even an owner loan is still debt owed outward from the entity's point of view when classed as credit. The manufacturing corporation's multi-year bank loan therefore sits with external debt beside share capital and retained profit. Internal equity and external equity remain separate from that borrowed slice.""",
    """Assets on one side of the balance sheet are funded by equity and liabilities on the other. Reading that statement of sources shows how the business has financed the plant and working capital it owns.""",
    """Large firms are required to present a balance sheet that discloses funding structure to readers. That obligation is why sources of finance appear in published statements rather than only in informal notes.""",
]

BODIES['CASE 4.5.03'] = [
    """When owners lend money rather than buy more shares, the firm owes them repayment like other creditors. The overview places such owner loans with long-term credit inside external debt finance.""",
    """Recording shares on the company's balance sheet does not make the capital internal. Internal equity means funds generated inside, such as retained profit; share subscriptions arrive from outside investors. Balance-sheet presentation alone cannot re-label external equity as internal finance.""",
    """Customer revenue may have created the profit, yet once earnings are retained they sit inside the firm as internal equity. Calling them external because customers paid earlier confuses the origin of sales with the source label after retention. Internal versus external asks whether new outside finance entered, not whether customers ever existed in the market. Retained earnings therefore stay internal equity even though sales were paid by outsiders.""",
    """Interest is a cost of debt, not a channel that returns borrowed principal to owners as equity profit. Debt remains external finance owed to creditors until principal is repaid. Labelling debt internal because interest is paid misreads both interest and source class.""",
    """An overdraft facility may be renewed for years, yet each drawing is short-term credit on the current account. Facility longevity does not convert overdrafts into long-term debt finance in Table 3.""",
]

BODIES['CASE 4.5.04'] = [
    """Secondary-market liquidity lets bondholders sell quickly, but the issuer still owes long-term principal under the bond terms. Resale speed among investors does not redefine the bond as short-term debt for the borrowing firm.""",
    """Supplier trade credit delays cash payment for goods already delivered to the buyer. That postponement is short-term debt finance until the invoice is settled in full.""",
    """Bond investors lend for extended periods under formal instruments with interest and maturity terms. Those issues supply long-term debt finance rather than ownership equity with voting rights. The creditor claim is what places bonds on the debt side of the overview beside long-term bank loans. Coupon schedules organise interest; they do not shrink the principal into a short-term working-capital tool.""",
    """Bank loans spanning several years fund extended investment and appear as long-term external debt. They differ from overdrafts and trade credit, which cover nearer-term gaps in cash or stock.""",
    """Owners can lend to their own firm; that loan is still debt with repayment terms written down. Ownership already held through shares does not automatically turn a loan into equity finance.""",
]

BODIES['CASE 4.5.05'] = [
    """Table 3 clusters bank overdrafts, trade credit, and short-term loans together as short-term debt finance. Payroll bridges and supplier delays sit in that short-term debt group for the construction firm.""",
    """Longer bank loans, loans from owners, and bonds appear among long-term credit sources in the same table. Those instruments stretch repayment beyond ordinary short-cycle credit used for weekly gaps.""",
    """Keeping profit inside the firm adds equity without a new outside subscription or loan agreement. Retained earnings are therefore internal equity finance on the sources map. Shareholders who later inject share capital add a separate external equity route beside that retained slice. The construction scene can use both equity routes while still relying on short-term debt for payroll timing.""",
    """Overdrafts flex with daily cash needs: interest typically applies while the account is overdrawn. That flexibility is why they are listed as short-term debt for day-to-day shortfalls rather than as equity.""",
    """Share capital from investors and retained earnings kept in the firm both strengthen equity on the balance sheet. One is external equity; the other is internal equity; both remain equity finance sources.""",
]

BODIES['CASE 4.5.06'] = [
    """Credit from overdrafts through to multi-year loans shows up as debt finance among liabilities. Short-term and long-term labels mark maturity, not a shift into equity ownership claims.""",
    """Suppliers who wait for payment remain creditors, not residual owners of the buying firm. Trade credit does not become equity merely because commercial risk exists in the buyer's product market.""",
    """Investors who subscribe for ownership take equity claims, even though they hope for a financial return. Expecting a return does not turn share subscriptions into debt finance. Dividends differ from contractual loan interest and scheduled principal repayment. Mixing 'return' with 'debt' collapses ownership and creditor categories the overview keeps apart.""",
    """Retained earnings are ownership funds kept in the business, not sums that must be repaid to creditors on a schedule. Calling retained profit debt invents a repayment duty that equity does not carry under the sources map.""",
    """Equity finance covers both share capital raised from investors and earnings retained inside the firm. Those two routes together form the equity side of the sources overview students apply.""",
]

BODIES['CASE 4.5.07'] = [
    """Debt finance spans short-term tools such as overdrafts and longer facilities such as bank loans. Both create creditor claims; they differ mainly in maturity and repayment horizon.""",
    """Investors who subscribe for ownership inject external equity into the firm. Their funds arrive from outside retained surplus and create ownership stakes rather than loan contracts.""",
    """Reinvested profit stays inside the business as internal equity finance rather than borrowed funds. It is not a bank loan and does not create a new creditor when managers simply keep surplus. That is why retained earnings sit beside share capital under equity, separated from overdrafts and bonds. Internal equity can fund growth without adding scheduled debt service on that particular slice.""",
    """A short-term bank loan bridges a temporary gap and is classed as short-term debt finance. The near-term horizon is what keeps it out of the long-term credit column with bonds and owner loans.""",
    """Owners may lend for years while also holding shares in the same business. The loan piece is still long-term debt finance because repayment is owed, separate from any equity stake.""",
]

BODIES['CASE 4.5.08'] = [
    """Table 3 treats debt finance as external because borrowed funds create obligations to creditors outside the equity residual. Overdrafts, trade credit, bank loans, and bonds all sit on that external debt side of the map.""",
    """Share capital, retained earnings, and other investor ownership funds are grouped under equity finance categories in Table 3. Those headings separate ownership claims from creditor claims for the freight carrier's funding mix.""",
    """Bondholders lend for long horizons and hold creditor claims, not residual equity with ordinary voting control. Issuing bonds therefore supplies long-term external debt finance to the business renewing its fleet. Interest and maturity terms organise the creditor relationship from issue through final repayment. That debt path sits beside owner loans and short-term credit lines without becoming share capital.""",
    """Undistributed profit that stays in the firm is internal equity finance for vehicle renewal or other uses. No new outside subscriber is required for that slice of funding once surplus is retained.""",
    """Publishing audited accounts informs outsiders about results; it does not move retained earnings into external equity. Disclosure is reporting, not a change of source class from internal to external finance.""",
]

BODIES['CASE 4.5.09'] = [
    """Shareholders commit ownership capital, not a loan that must be repaid with interest on a fixed schedule. Long holding periods do not convert share capital into long-term debt finance in Table 3.""",
    """Buying now and paying the supplier later under agreed terms is short-term external debt for the purchaser. Trade credit remains a liability until settlement, which is why Table 3 lists it with short-term debt.""",
    """Intention to renew a short-term bank loan repeatedly does not rewrite its maturity class in the overview. Each facility is still short-term debt finance until the contract itself becomes a long-term loan. Borrower hopes about rolling credit cannot relocate the instrument into the long-term credit column. Classification follows the terms of the debt, not an informal plan to keep renewing.""",
    """Debt is classed as external finance even when a shareholder is the lender on paper. Dividend rights on shares do not turn a loan into internal finance; repayment duty still marks debt.""",
    """Investors who buy shares contribute external equity that builds the ownership base of the corporation. Those funds sit on the equity side, not among creditor loans or overdrafts.""",
]

BODIES['CASE 4.5.10'] = [
    """Customer payments may generate the profit, yet retained earnings are already inside the firm once kept. Labelling them external equity confuses sales origin with the internal-versus-external source test.""",
    """Bonds and multi-year bank loans both create long-term creditor claims on the firm as borrower. They belong with long-term debt finance in the overview rather than with share subscriptions.""",
    """An overdraft is borrowed headroom on a bank account, not an ownership stake in the startup. Using it for working capital shortfalls does not turn overdraft drawings into equity finance. Equity would require share capital or retained earnings, not a current-account credit line. Mixing those labels would hide the repayment character of the overdraft.""",
    """Retained earnings are equity, not short-term debt, even if managers plan to spend them within a year. Spendability inside twelve months does not move retained profit into Table 3's short-term debt column.""",
    """Internal retained earnings plus external share capital and investor funds together make up equity finance. The equity heading therefore mixes internal and external ownership sources by design in the framework.""",
]

BODIES['CASE 4.5.11'] = [
    """Debt finance is external and then split by maturity into short-term credit and long-term credit. That two-step sorting is how the overview organises borrowed funds on the balance sheet story.""",
    """Multi-year bank loans, owner loans, and bonds are standard long-term external debt examples. Each creates extended repayment duties to creditors beyond ordinary invoice cycles.""",
    """Bank overdrafts, trade credit, and short-term loans illustrate short-term debt finance for near-term gaps. They cover cash and purchasing timing rather than multi-year plant investment. Large businesses still show these short-term lines beside equity when they draw up required balance sheets. Maturity keeps them out of the long-term credit group even when facilities are familiar year after year.""",
    """The balance sheet shows which mix of equity and debt has funded the assets in place. Readers can see ownership capital beside liabilities that financed the same resource base.""",
    """Profit kept in the firm is internal equity because it does not arrive as a new external loan or share subscription. Retention recycles surplus already inside the business into further funding.""",
]

BODIES['CASE 4.5.12'] = [
    """Equity finance is not always external: retained earnings are internal equity on the sources map. Shareholders are a major external equity route, but they are not the only equity source in the overview.""",
    """Supplier relationships may last for years as commercial partnerships, yet each invoice is short-cycle credit. Relationship length does not push trade credit into the long-term debt column with bonds.""",
    """Regular coupon payments mark the interest schedule on a bond, not short maturity of the principal amount. Bonds remain long-term debt finance for the issuer despite periodic coupons to investors. Treating coupons as proof of short-term debt confuses payment frequency with the life of the borrowing. Long-term credit is about the financing horizon, not how often interest is posted.""",
    """Investors who contribute ownership funds from outside the business provide external equity finance. Share capital therefore sits with external equity rather than with retained internal surplus.""",
    """Share subscriptions create ownership claims, not loans that must be repaid with contractual interest. Calling share capital debt finance confuses residual owners with creditors on the balance sheet.""",
]

BODIES['CASE 4.5.13'] = [
    """Revenue from outside customers can create profit, but retained earnings are internal once kept in the firm. Customer location does not make retained profit external equity for the catering business.""",
    """Repeated use across a trading year does not redefine an overdraft as long-term debt finance. Each drawing remains short-term debt on the current account even when the habit is continuous.""",
    """Even if the account holder also owns major shares in the bank, an overdraft is still bank credit. Shareholder status at the bank does not convert the overdraft into equity finance for the caterer. The business still owes the drawn amount under credit terms rather than holding a residual ownership claim on itself via that line. Equity for the caterer would be share capital or retained earnings, not the bank facility.""",
    """Owners who lend create a creditor relationship alongside any shares they already hold. The loan is debt finance, not equity, because repayment is owed on the lending terms.""",
    """Long-term bank loans schedule repayment over extended periods and count as long-term external debt. They differ from overdrafts and supplier credit used for weekly food purchases.""",
]

BODIES['CASE 4.5.14'] = [
    """Investors who take ownership stakes supply equity, not short-term debt, even if they hope to exit within a year. Exit timing does not rewrite an equity subscription as short-term debt finance in the overview.""",
    """Bond issues create long-term creditor claims that can trade among investors in capital markets. Marketability leaves the issuer with long-term debt finance regardless of secondary sales.""",
    """Using retained earnings later to repay a loan does not make the original debt an internal source of finance. Debt finance remains external credit when raised; internal funds may service it without changing its class. Source labels attach when funds enter, not when a different internal pot is used to settle the creditor. Otherwise every repaid loan would be rewritten as internal finance after the fact.""",
    """Keeping a share register in the company's office is administration of ownership records. It is not proof that share capital is internal equity; external investors still provided the funds.""",
    """Publishing retained earnings in financial statements discloses internal equity to readers. Disclosure does not turn that equity external; transparency differs from the source test.""",
]

BODIES['CASE 4.5.15'] = [
    """Share capital and other investor ownership funds are listed as external equity in the finance overview. They enlarge ownership claims rather than creditor claims on the firm.""",
    """Profits not distributed to shareholders and kept in the firm are internal equity finance. Retention avoids both new borrowing and a fresh share issue for that particular funding slice.""",
    """Banks may review and maintain overdraft limits for years as a banking relationship continues. The product nevertheless remains short-term debt finance for day-to-day drawings. Limit maintenance is administration of a short-term facility, not a reclassification into long-term bonds or mortgages. Maturity class follows how the credit is used and repaid, not how long the bank has known the client.""",
    """Bonds raise long-term debt by selling creditor instruments to investors outside the firm. The funds are external and create repayment and interest duties for the issuer.""",
    """Suppliers who defer cash receipt after delivery extend short-term debt finance to the buyer. Trade credit ends when the invoice is paid, which keeps it in the short-term column.""",
]

BODIES['CASE 4.5.16'] = [
    """Bank loans with repayment schedules beyond one year are long-term debt finance in the overview. The extended horizon matches investment periods longer than ordinary working-capital cycles.""",
    """Owner loans appear among long-term credit and are classed as external debt finance despite the lenders' dual role. Being an owner does not cancel the repayment character of the loan on the sources map.""",
    """Short-term bank loans cover near-term working-capital needs and sit in short-term debt finance. They are the debt counterpart to overdrafts and trade credit for temporary gaps in cash. Trade credit from suppliers similarly postpones payment without creating equity claims. Together those short-term tools fund operations while longer loans and equity cover deeper commitments.""",
    """Equity finance includes internal retained earnings and external share capital from investors. Both strengthen ownership funding on different internal-versus-external routes in the same framework.""",
    """Debt finance is external and includes short-term credit such as overdrafts and trade credit. Those tools sit beside longer loans on the borrowed-funds side of the finance map.""",
]

BODIES['CASE 4.6.01'] = [
    """Assets that serve for many years should be funded with finance that is also long-term. Matching repayment to the asset's life keeps capital spending from relying on credit that falls due in weeks.""",
    """Interest rates matter, yet they are not the only relevant criterion when choosing finance. Matching term to asset life and watching gearing risk still shape the decision beside the headline rate.""",
    """Interest is one cost element, not the sole cost businesses must weigh when comparing loans with share issues. Issuance and administration expenses, advisory fees, and ongoing compliance can add material cost to a share or bond issue. Gearing already on the books also changes how risky further debt looks compared with equity. Treating interest alone as the complete cost comparison therefore understates what the chapter asks firms to consider.""",
    """High gearing warns that further borrowing is harder, but it does not ban every short-term trade-credit purchase of materials. Routine supplier credit for inputs can still fit revenue spending even when long-term loan capital is already heavy.""",
    """A warehouse extension binds capital for years; weekly supplier credit falls due far sooner. Funding that capital expenditure from rolling short trade credit mismatches term to asset life.""",
]

BODIES['CASE 4.6.02'] = [
    """Materials for current production are revenue spending with a short cycle. Locking them to a twenty-year mortgage mismatches long-term debt to short-lived inputs.""",
    """Bond issues carry flotation and administration expenses before the first coupon is even paid. Ignoring those costs when comparing finance sources understates the true burden of a bond route.""",
    """Buying materials for current production can safely use short-term sources such as trade credit or a brief bank facility. The input is consumed inside the operating cycle, so repayment can sit near the same horizon. Long mortgages would over-extend term relative to how quickly the materials turn into output and sales. The statement therefore matches revenue expenditure to short-term finance in the chapter's pairing logic.""",
    """Even weekly raw-materials purchases sit inside a wider financial situation that includes current gearing. Lenders and managers still notice loan burden when another credit line is added, however small the invoice.""",
    """Share issues are one possible route, not the exclusive route, for funding materials consumed in production. Short-term credit often fits revenue expenditure better than exclusive reliance on new equity.""",
]

BODIES['CASE 4.6.03'] = [
    """High gearing usually raises the price or scarcity of new loans compared with a low-debt rival. Equal interest rates are not guaranteed merely because both firms seek credit.""",
    """Intended use helps decide whether short-term or long-term finance fits the spending. Capital projects and revenue purchases are not interchangeable when matching term.""",
    """Choosing finance by absolute interest rate alone leaves out matching term to asset life and the firm's gearing. A cheap-looking short facility can still be wrong for a multi-year plant, and a low coupon can still worsen insolvency risk. The chapter therefore treats interest as one input among costs, intended use, and financial situation. Declaring matching unnecessary because a rate looks attractive oversimplifies the selection criteria.""",
    """A highly geared business may obtain further credit only at higher interest and/or against extra collateral lenders accept. Reluctance and tougher terms are the practical response to heavy existing loan capital.""",
    """High gearing does not license firms to ignore issuance administration costs when comparing share finance with bonds. Those costs still enter the comparison beside interest and risk.""",
]

BODIES['CASE 4.6.04'] = [
    """When loan capital is already high, internal funds or new equity investors can reduce insolvency risk versus another large loan. Avoiding fresh mandatory repayment schedules is the point of that preference.""",
    """Intended use is a matching criterion, not itself a 'cost' that replaces interest or issuance expenses. Choosing between overdraft and trade credit still involves cost elements as well as what the money will buy.""",
    """A low headline rate on a new loan does not let a highly geared business ignore its financial situation. Existing repayment burdens still raise insolvency risk when another debt layer is added. Lenders may also demand collateral or widen spreads once gearing is already elevated. Interest appearance alone therefore cannot silence the gearing criterion in the chapter's three-way test.""",
    """Administration costs of issuing shares or bonds belong in the cost comparison among finance sources. They sit beside interest on loans and credit when managers weigh alternatives.""",
    """A ten-year production line should not rely on a thirty-day trade credit facility alone. Capital expenditure needs long-term finance so repayment can track the asset's service life.""",
]

BODIES['CASE 4.6.05'] = [
    """When several sources are available, businesses most probably weigh costs, intended use, and current financial situation together. That three-criterion habit is the overview's practical decision frame.""",
    """Issuing shares involves administration and flotation expenses even though there is no loan interest schedule. Equity finance therefore still carries a cost element managers must count.""",
    """New ovens that last many years are capital expenditure and should be matched with long-term finance. Flour and sugar bought for weekly batches are revenue spending that can use short-term credit instead. The bakery scene makes the pairing vivid: long-lived equipment versus short-cycle ingredients. Matching term to use keeps oven finance from depending on invoices that fall due before the ovens have earned their keep.""",
    """A business already heavy with loan capital may struggle to persuade lenders to extend still more credit. Gearing raises both refusal risk and the chance of tougher terms if funds appear at all.""",
    """Further funds for a highly geared borrower may come only at a higher interest rate and/or if collateral can be offered. Those conditions are how lenders protect themselves when loan capital is already high.""",
]

BODIES['CASE 4.6.06'] = [
    """Capital expenditure and revenue expenditure do not both require identical long-term mortgage funding. Short-cycle materials can use short-term credit; long-lived assets need longer sources.""",
    """A firm already loaded with loans should rather try internal sources and/or investors willing to provide funds. That path avoids stacking another repayment schedule onto an already geared balance sheet.""",
    """Loans must be repaid with interest regardless of how sales turn out in a weak month. A high proportion of loan capital therefore increases insolvency risk when cash inflows dip. Equity investors share residual outcomes differently from creditors with fixed claims. Preferring internal funds or new investors in that setting is a direct response to repayment burden.""",
    """Costs of finance include interest on loans and credit as well as administration costs for issuing shares or bonds. Both interest and issuance expenses belong in the comparison among available sources.""",
    """Financial funds for capital expenditures on long-lived assets require long-term sources of finance. Repayment then lines up with years of service from plant, vehicles, or buildings.""",
]

BODIES['CASE 4.6.07'] = [
    """Matching long-term finance to capital expenditure spreads repayment across the years the asset generates benefits. Cash pressure stays closer to the earning life of the investment rather than to a short invoice cycle.""",
    """A highly geared business may obtain further credit only if it can offer collateral acceptable to lenders. Without security, additional loans may be refused or priced out of reach.""",
    """Investors or business partners may supply funds when another loan would worsen insolvency risk. Their ownership or partnership capital does not add the same fixed repayment timetable as bank debt. Internal retained funds play a similar risk-reducing role when surplus is available. The statement correctly opens that non-debt path as gearing climbs.""",
    """Interest on loans and credit is included in the cost criterion, not excluded from it. Leaving interest out would empty the cost comparison of its most obvious debt component.""",
    """Funding a new factory exclusively through supplier credit for raw materials mismatches maturity badly. Buildings need long-term finance; materials credit is short-term by design.""",
]

BODIES['CASE 4.6.08'] = [
    """Interest is one cost element, but intended use and gearing also guide finance selection in the overview. Rate shopping alone does not complete the decision.""",
    """Businesses facing several finance options most probably decide using costs, intended use, and current financial situation. Those three criteria organise the comparison when more than one source is open.""",
    """Purchasing assets used over some or even many years counts as capital expenditure requiring long-term finance. Repayment horizons should track the service life of machinery, buildings, or vehicles. Short-term credit that falls due before the asset has earned returns creates unnecessary rollover pressure. The statement therefore links long-lived purchases to long-term sources rather than to weekly facilities.""",
    """Interest payments on loans and credit are part of the cost criterion when choosing among finance sources. Managers compare those payments with issuance costs and other burdens on alternative routes.""",
    """Administration costs of share issues are finance costs, not a relabelling of intended use. Intended use asks what the money will buy; issuance fees ask what raising the money costs.""",
]

BODIES['CASE 4.6.09'] = [
    """Material used within the operating cycle is revenue expenditure that can safely use short-term sources. Supplier credit for seasonal stock fits that short-cycle pairing for the retailer.""",
    """Bond issues carry coupon interest and upfront flotation expenses that both enter the finance comparison. Counting only coupons would understate the cost of choosing bonds over other routes.""",
    """Components bought for assembly within the month are revenue expenditure suited to short-term finance. The parts turn quickly into finished goods and sales, so near-term credit matches the cycle. Long-term store refurbishment, by contrast, is capital spending better paired with longer funds such as retained earnings. Keeping those two horizons distinct is the matching logic the chapter trains.""",
    """Lenders may be reluctant to offer more funds once loan capital is already high on the balance sheet. Reluctance is a standard gearing consequence before any new project is approved.""",
    """Further credit to a highly geared business may be available only at a higher interest rate than peers pay. Price and access both tighten as gearing rises.""",
]

BODIES['CASE 4.6.10'] = [
    """Internal finance or investor funds avoid creating new mandatory debt repayment schedules. That is why they can look safer than another loan when gearing is already elevated.""",
    """Interest on loans and credit is a cost element businesses compare when choosing finance sources. It sits beside issuance costs and risk when alternatives are ranked.""",
    """Intended use of funds still matters even when one source looks cheaper on interest alone. A low-rate short facility can still be wrong for a multi-year machine, and a dearer long loan can still fit better. Matching term to what the money buys prevents cheap-looking mismatches. Interest comparison is necessary but not sufficient without that use test.""",
    """When loan capital is already high, rejecting internal funds and investors would remove the very options that reduce insolvency risk. Debt is not the only route that can fund expansion; equity and retained funds remain available in the overview.""",
    """Capital expenditure on machinery, plant, or vehicles used over many years requires long-term finance. Short-term rollover credit is a poor match for those long-lived assets.""",
]

BODIES['CASE 4.6.11'] = [
    """Financial funds for capital expenditures require long-term finance because the assets will be used over years. Repayment should track that multi-year service life rather than a short invoice cycle.""",
    """Costs comprise interest on loans and administration costs of issuing shares or bonds. Both pieces belong in the cost criterion when several sources are compared.""",
    """Headline-rate shopping can still leave managers talking about use and gearing in the same meeting. The absolute claim that choosing on interest alone always ignores those factors overstates how decisions are described. Costs, intended use, and financial situation should still be weighed together even when a rate looks attractive first.""",
    """Bonds still require interest and principal repayment, so swapping a bank loan for bonds does not eliminate repayment risk. A highly geared issuer remains exposed to creditor claims whichever long-term debt instrument is used.""",
    """Revenue expenditure on production inputs should not always be paired with twenty-year bond finance. Short-term sources usually match short-cycle materials better than ultra-long bond maturity.""",
]

BODIES['CASE 4.6.12'] = [
    """Such a firm should rather try internal sources of finance and/or investors willing to provide funds. That preference responds to heavy loan capital without stacking another creditor claim immediately.""",
    """A business with a high proportion of loan capital may have difficulties obtaining more credit from lenders. Access tightens as gearing rises, even before project quality is debated.""",
    """Administration costs incurred when issuing shares or bonds should be weighed alongside interest on loans. Ignoring flotation expenses would bias the cost comparison toward instruments that look cheap on coupons alone. Share and bond routes both carry paperwork, fees, and timing costs before funds arrive. Putting those costs beside loan interest keeps the three-criterion frame honest.""",
    """Revenue expenditure such as buying materials for production can safely be financed by short-term sources. The operating cycle and the credit horizon can line up without a multi-year facility.""",
    """High gearing does not remove the need to compare administration costs when issuing shares to raise funds. Issuance expenses still matter in the cost criterion regardless of existing loan burden.""",
]

BODIES['CASE 4.6.13'] = [
    """A business with a high proportion of loan capital might have difficulties obtaining more credit. Lenders already see elevated repayment risk before the next facility is discussed.""",
    """High gearing argues against funding capital expenditure only through additional bank loans at any rate offered. Internal funds or investors can be safer than accepting every expensive debt offer on the table.""",
    """Lenders may extend credit to a highly geared business only if acceptable collateral can be offered. Security becomes a gate when unsecured appetite is already exhausted by existing loans. Higher interest alone may not suffice if the lender wants assets pledged against further exposure. The construction firm's equity debate sits beside that collateral reality when debt is already heavy.""",
    """Revenue expenditure may still use short-term trade credit even when some loan capital already appears on the balance sheet. A blanket ban on supplier credit whenever any loan exists overstates gearing caution.""",
    """Bond issues also carry administration and flotation expenses, not only equity issues. Ignoring bond issuance costs because 'only equity has fees' misreads the cost comparison.""",
]

BODIES['CASE 4.6.14'] = [
    """A multi-year production plant should not be funded from weekly overdraft drawings alone. Capital expenditure needs long-term finance; overdrafts are short-term credit tools.""",
    """Assets used over some or even many years require long-term finance for the capital expenditure involved. Matching term to service life is the core pairing rule in this part of the chapter.""",
    """Costs, intended use, and current financial situation are the main criteria when choosing among finance sources. Interest, issuance fees, what the money will buy, and gearing all enter that ranking. No single criterion silently cancels the other two when several sources remain open. The statement restates that three-part frame without inventing a fourth mandatory test.""",
    """Funding a multi-year plant solely through repeated overdraft drawings mismatches short-term finance to capital expenditure. Rollover risk and near-term repayment collide with an asset that earns over years.""",
    """Treating the absolute interest rate as the only selection criterion ignores intended use and current gearing. Cheap short credit can still be the wrong tool for long-lived plant under heavy existing loans.""",
]

BODIES['CASE 4.6.15'] = [
    """Trade credit from suppliers postpones payment for inputs consumed within the operating cycle. That deferral is short-term external debt until the invoice is cleared.""",
    """Raw materials as revenue expenditure do not require a fifteen-year bond issue. Short-term sources usually match materials better than ultra-long creditor instruments.""",
    """High gearing does the opposite of guaranteeing cheap unlimited long-term loans for any project. Access typically tightens, prices rise, and collateral demands grow as loan capital mounts. Unlimited cheap credit would erase the insolvency warning the chapter attaches to heavy gearing. Managers facing that burden often prefer internal funds or investors instead of another large loan.""",
    """Matching finance maturity to expenditure type remains required even while comparing loan interest with bond coupons. Cost comparison does not cancel the need to pair long assets with long funds.""",
    """When loan capital is already high, internal sources and investors can be preferable to another large loan. They avoid adding a fresh fixed repayment layer onto an already geared structure.""",
]

BODIES['CASE 4.6.16'] = [
    """Revenue expenditure on production materials can safely use short-term sources even when loan capital is already high. Gearing complicates new long loans; it does not outlaw appropriate short credit for short-cycle inputs.""",
    """High gearing complicates obtaining further long-term loans but does not ban appropriate short-term finance for revenue spending. Hotel materials and similar operating purchases can still sit on short facilities.""",
    """Because loans must be repaid, a high proportion of loan capital can be a burden that increases insolvency risk. The hotel operator with heavy borrowings faces that burden before choosing among bonds, overdraft, or retained profit for a new wing. Fixed creditor claims continue even if occupancy dips, which is why gearing raises failure risk. Internal reinvestment or careful long-term funding for the wing responds to that repayment pressure.""",
    """Costs, intended use, and current financial situation together guide finance choice when several sources exist. The new wing, an overdraft habit, and reinvested profit must be ranked through that full frame.""",
    """Financing a multi-year production facility exclusively through short-term overdraft drawings mismatches horizons. Capital expenditure needs long-term funds; overdrafts are short-term credit by nature.""",
]


def main() -> None:
    data = json.loads(PATH.read_text())
    chunk = data[SLICE]
    ids = [c["case_id"] for c in chunk]
    missing = [cid for cid in ids if cid not in BODIES]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(BODIES) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")

    for c in chunk:
        bodies = BODIES[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        c["tactical_explanations"] = [
            wrap(body, bool(c["answer_key"][i])) for i, body in enumerate(bodies)
        ]

    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases)")


if __name__ == "__main__":
    main()
