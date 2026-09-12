#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch4 cases [0:40]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch4-subtopics.json")


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


# case_id -> five bodies (no closer). Apply slice data[0:40] only.
EXPL: dict[str, list[str]] = {}

EXPL["CASE 4.1.01"] = [
    "One natural person both owns the shop and runs its daily work: pricing, ordering, and serving customers. That single-owner, self-managed pattern is exactly what a sole proprietorship is.",
    "Without co-owners or a board, the proprietor sets hours, prices, and hiring choices alone. Advisers may offer views, yet no partner vote is required before a decision sticks. Management power sits undivided with that one owner.",
    """A sole proprietorship has no separate corporate taxpayer. Trading profit is attributed to the owner and declared on the personal income tax return rather than on a company form.

Because there is no distinct legal shell, the tax office treats business earnings as the proprietor's own income. Reporting profits on the personal statement follows directly from that missing separate personality.""",
    "A corporation can be a separate legal person that files its own corporate tax. A sole proprietorship cannot: contracts and tax liabilities attach to the owner personally. Calling the sole trader an independent corporate filer invents a shell that does not exist for this form.",
    "If the owner retires or falls seriously ill for months, customers and contracts often stall. Continuity depends on that one person unless a transfer is arranged first.",
]

EXPL["CASE 4.1.02"] = [
    "Starting as a sole trader typically needs no minimum share capital or formal company registration package. That low barrier is why the form is described as easy to establish for small shops and freelancers.",
    "Limited liability would fence private assets once business assets run out. Sole proprietors do not get that fence: creditors can reach the home, car, or savings when firm cash falls short.",
    """Unlimited liability means business debts are personal debts of the owner. A supplier unpaid after stock fails, or a bank loan left after a bad season, can be enforced against private property, not only against shelves labelled "business."

That reach into personal assets is the practical meaning of unlimited liability for a sole trader. Labelling assets as business property does not create a legal wall that stops creditors.""",
    "Incorporating as a company can create limited liability tied to invested capital. Simply calling the business a sole proprietorship does the opposite: liability stays unlimited. There is no incorporation trick that turns a sole trader into a capped-liability company while keeping that label.",
    "Buying stock on thirty-day terms still leaves an invoice to pay. Trade credit defers payment; it does not cancel the proprietor's obligation to the supplier.",
]

EXPL["CASE 4.1.03"] = [
    "Contracts, assets, and debts sit with the owner personally rather than with a company shell. The business is not a separate legal entity standing beside that person in commercial law.",
    "Without a corporate taxpayer, profit from trading is taxed as the owner's personal income. The personal tax return is where those earnings appear, not a separate company tax filing.",
    """Day-to-day and strategic choices remain the proprietor's job: what to sell, whom to hire, when to borrow. Staff may execute tasks, yet the central management responsibility stays with the owner.

That concentration of decision rights is a defining feature of the sole-trader form. The business largely depends on that one person's judgment even when helpers are present.""",
    "Pass-through tax treatment does not ban payroll or supplier deals. Many sole traders employ assistants and sign purchase contracts every week. Taxing profit on the personal return says nothing about headcount or contracting capacity.",
    "Extra hands can be hired for busy seasons while the owner still sets strategy and carries residual risk. Support staff expand capacity; they do not replace the central management role.",
]

EXPL["CASE 4.1.04"] = [
    "When workload exceeds one person's hours, the proprietor may recruit staff without changing ownership form. Hiring expands capacity while the firm remains a sole proprietorship.",
    """Employees draw wages under a contract; they do not absorb the owner's unlimited liability for firm debts. If invoices go unpaid, creditors still pursue the proprietor, not the cashier or delivery driver.

A counterexample is ordinary: a bakery hires two bakers, then fails to pay flour suppliers. The bakers' wages do not shift debt liability onto those workers. Risk stays with the owner.""",
    "Assistants handle routine work, yet major choices and residual risk remain with the sole proprietor. Delegating tasks is not the same as transferring ownership-level decision rights or personal exposure to debts.",
    "No partner or board must approve price cuts, opening hours, or supplier switches. The owner can decide alone, even after seeking informal advice. Undivided management rights match the one-person ownership structure.",
    "Long-term illness can leave orders unfilled and clients without a contact. Continuity is fragile when only one person owns and steers the firm through every major decision.",
]

EXPL["CASE 4.1.05"] = [
    "Registering a trading name for a sole proprietorship does not create a corporation. The owner remains the legal party to contracts and tax. Incorporation requires forming a company with separate legal personality, not merely listing a shop name.",
    "Trading profit flows onto the owner's personal income tax statement because there is no separate corporate taxpayer for a sole proprietorship. Personal reporting is the ordinary channel.",
    """Unlike many company forms, a sole proprietorship can begin without a substantial minimum share-capital deposit. A freelance designer or market stall can start trading with ordinary setup costs and no mandatory capital floor of the corporate kind.

Claiming a large capital threshold is required invents a barrier the sole-trader rules do not impose. Ease of establishment is one reason the form is common for small starts.""",
    "Private homes remain reachable under unlimited liability when business assets cannot cover debts. Limited liability would protect the home; sole proprietorship does not grant that shield.",
    "Equal shared ownership and risk for two founders points to a partnership, not a sole proprietorship built for one owner-manager. Two equals do not fit the one-person form.",
]

EXPL["CASE 4.1.06"] = [
    "Retirement does not leave the firm running under the same owner by magic. Without a sale, gift, or other transfer, continuity usually breaks when the proprietor exits.",
    "Illness or retirement can interrupt customers, contracts, and day-to-day control because ownership and management sit with one person. Continuity problems are a recognised drawback of that concentration.",
    """Transferable shares in a company often make succession cleaner: ownership can pass while the legal person continues. A sole proprietorship has no such share shell; the business is tied to one natural person.

Assuming succession is always simpler for a sole trader than for a share company reverses the usual picture. Handing over a sole business typically needs an explicit transfer arrangement, not automatic continuity.""",
    "Staff cannot legally inherit ownership just by showing up after the owner retires. Employment is not a transfer deed. Without a formal handover, employees have no automatic title to the business.",
    "Key decisions still rest with the sole proprietor even when helpers handle routine work. Management of the business largely depends on that owner retaining decision rights.",
]

EXPL["CASE 4.1.07"] = [
    "Every business debt and obligation sits with the sole proprietor under unlimited liability. There is no separate company to absorb the shortfall when creditors call.",
    "Unlimited liability is not limited to short-term supplier invoices. Long-term bank loans secured on property still leave the owner personally exposed if collateral and business funds prove insufficient. Duration of the credit does not switch the liability rule off.",
    """Lenders often want land, vehicles, or equipment pledged as collateral, especially for longer loans. Collateral reduces their loss if the borrower defaults, so they ask for it routinely.

That request for security sits alongside unlimited liability rather than replacing it. Creditors seek assets that can be seized; long-term credit is a common setting for those demands.""",
    "When firm assets cannot repay creditors, private savings, a car, or a house may still be claimed. Unlimited liability puts personal property at stake after business failure.",
    "Pledging collateral lowers lender risk but does not wipe remaining private assets from further claims if the loan still exceeds what was pledged.",
]

EXPL["CASE 4.1.08"] = [
    "Because the firm is not a separate legal entity, profit is taxed on the owner's personal income statement. Revenues minus allowable costs become part of that personal assessment.",
    "Sole trading does not create a tax holiday. Business profits remain taxable personal income; the form only changes where they are reported, not whether tax is due.",
    """There is no separate corporate tax return for a true sole proprietorship. The owner pays tax on trading profits through the personal income channel.

That personal-route taxation follows from the missing legal personality: the tax system treats the business earnings as the individual's. The statement describes that route correctly.""",
    "Wage income from another job and trading profit from the shop can appear on the same personal tax assessment. Personal and business earnings for the owner are often combined there.",
    "Personal taxation of profits is the default precisely because there is no separate legal personality. Requiring a corporate shell first reverses the rule for sole traders.",
]

EXPL["CASE 4.1.09"] = [
    "Ownership and daily management sit in one individual with no partners sharing title or control. That single-person combination is what defines a sole proprietorship.",
    "No minimum share capital or company-formation package is required to begin trading as a sole proprietor. Small traders often choose the form for that low setup barrier.",
    """Without a separate legal entity, profits are not taxed through a company return. They appear on the owner's personal income statement instead.

The tax treatment and the missing corporate shell are two sides of the same structure. Reporting on the personal statement is the ordinary consequence for this ownership form, and it is why the chapter links unincorporated status to personal income taxation rather than corporate filing.""",
    "Creditors are not stopped at assets labelled \"business.\" Private property can be reached when debts remain after firm assets are exhausted. That is unlimited liability in practice.",
    "Personnel may be hired for support while the proprietor keeps the important management decisions and residual risk. Staff expand capacity; they do not replace ownership control.",
]

EXPL["CASE 4.1.10"] = [
    """A corporation can sue and be sued in its own name because it is a separate legal person. A sole proprietorship lacks that personality: lawsuits and contracts name the owner.

The contrast with corporations makes the missing shell clear. Without separate legal personality, the trader cannot litigate as an independent company entity.""",
    "Business profits are declared on the owner's personal income tax statement rather than on a corporate filing. That personal channel follows from missing separate legal personality.",
    "Under unlimited liability, unpaid business debts can be enforced against private assets. Creditors may pursue the proprietor's personal property when firm funds run out.",
    "Accessible setup with no capital requirements is why many small businesses start as sole proprietorships. The low formal bar matches the statement about easy establishment.",
    "Long-term illness or retirement can interrupt trading when everything hangs on one owner-manager. Continuity problems are a known practical risk of the sole-trader form.",
]

EXPL["CASE 4.1.11"] = [
    "No co-owner must be consulted before the proprietor sets prices or suppliers. Management decisions can be made alone because ownership is not shared with partners.",
    "Even with helpers, the most important choices and the full risk stay with the sole proprietor. That residual responsibility is part of the one-person ownership form.",
    """There is no separate board of directors running a sole proprietorship. Strategy and day-to-day control concentrate on the owner rather than on an elected board.

Management depending largely on that one person follows from the absence of corporate governance layers. The statement captures that concentration correctly and contrasts it with company boards.""",
    "Bookkeeping or counter work can be delegated, yet authority over major decisions remains with the proprietor. Delegation of tasks is not surrender of ownership-level control.",
    "Hiring staff does not hand strategic direction to employees. Workers execute assigned duties; the proprietor still sets the firm's course and bears residual risk.",
]

EXPL["CASE 4.1.12"] = [
    "No financial capital threshold blocks the start of a sole proprietorship. That absence of formal capital requirements makes establishment relatively easy for small starts.",
    "One person owns the business and carries central operational responsibility: buying, selling, staffing, and risk. Ownership and management coincide in that individual.",
    """Stepping away for retirement or a long illness can interrupt orders, client contact, and supplier relations. Continuity is personal rather than institutional.

Until ownership is transferred, the firm has no automatic second captain. Interruptions of that kind are a practical drawback of the sole-trader structure and explain why succession planning matters early.""",
    "When personal savings are not enough, the proprietor may seek bank loans or outside investors. Extra finance from those sources remains available in principle for the sole trader.",
    "Profits are taxed on the owner's personal income tax statement because the firm is not a separate legal entity. Personal reporting replaces a corporate tax return.",
]

EXPL["CASE 4.1.13"] = [
    "A trading name on the door does not incorporate the business. Separate legal personality requires forming a company, not merely listing a shop title for customers.",
    "Tax registration and a payroll of several employees leave the firm unincorporated if no company was formed. Incorporation turns on legal personality, not on headcount or tax IDs alone.",
    """Business profits are personal income for tax because the sole proprietorship is not a legal entity of its own. The owner pays personal income tax on those earnings.

That link between missing personality and personal tax treatment is standard. Employees and suppliers do not change the tax channel while the form stays a sole trader.""",
    "Short-term trade credit and long-term bank loans are both liabilities of the sole proprietor. Duration does not remove personal responsibility for repayment of either kind.",
    "Collateral is typically demanded for external loans such as bank credit, not for retained profit. Internal finance does not need a land pledge before it can be used.",
]

EXPL["CASE 4.1.14"] = [
    "One owner who manages the business and accepts the associated risk fits the sole proprietorship. The form is built around that single natural person from the start.",
    "Two equal co-owners sharing management rights need a partnership (or company), not sole-proprietorship rules. A sole trader structure has room for only one owner, not an equal pair without partnership arrangements.",
    """Several investors seeking limited liability through transferable shares are describing a corporation, not a sole proprietorship. Shares, limited liability, and a separate legal person belong to company law.

Using sole-trader rules for that group would leave them without share capital mechanics and without the liability cap they want. The appropriate structure is incorporation, not a one-person trading form.""",
    "Two people who want equal rights, shared tasks, and shared risk are better served by a partnership. That form is designed for joint ownership in a way sole proprietorship is not.",
    "Sole proprietorship rules do not create equal shared ownership for two founders. A partnership remains necessary when both want equal rights and shared risk.",
]

EXPL["CASE 4.1.15"] = [
    "An unincorporated sole trader has no corporate profit account for tax. Business profits flow straight onto the owner's personal income tax statement as personal earnings.",
    "Because the firm is not a separate legal entity, the owner pays tax on trading profits as personal income rather than through a corporate tax return.",
    """Dividends are a corporate distribution mechanism for shareholders. A sole proprietorship does not need to declare a dividend before personal tax on profits is due; earnings are already the owner's for tax purposes.

Requiring a dividend step invents company procedure that does not apply. Personal income tax treatment here means pass-through of profit, not a dividend pipeline.""",
    "Missing corporate personality does not create a tax exemption. The proprietor still owes tax on business profits through the personal income channel each year.",
    "A separate corporate tax return is for companies with legal personality. Sole proprietorships report through personal income tax, not a mandatory company return.",
]

EXPL["CASE 4.1.16"] = [
    "Deferred payment from a supplier is still a debt that must be settled. Trade credit is not a grant; invoices remain payable when the agreed term ends.",
    "Goods taken now and paid in thirty days create a short-term liability. The sole proprietor must honour that supplier credit like any other business obligation.",
    """Land pledged as collateral for a long-term bank loan does not erase unlimited liability. If the loan exceeds the collateral value, or other debts remain, private assets can still be reached.

Collateral protects the lender's recovery path; it does not convert the owner into a limited-liability shareholder. Long-term secured loans remain inside unlimited liability for a sole trader.""",
    "Business failure with unpaid debts can put private assets at stake once firm funds are gone. Unlimited liability makes that reach into personal property possible.",
    "Short-term and long-term credit alike remain obligations of the sole proprietor. All kinds of credit sit on that personal unlimited liability.",
]

EXPL["CASE 4.2.01"] = [
    "When two or more persons jointly found and own a business, the ownership form is called a partnership rather than a one-person sole proprietorship.",
    "A partnership agreement records rights, responsibilities, and how profits and losses are split. Written terms give a baseline when partners later disagree on control or residual claims.",
    """In a general partnership the default pattern is equal rights, liabilities, and responsibilities among the partners unless the agreement rearranges ownership shares.

That equality of standing is why the form fits founders who intend to share management and risk symmetrically. The statement names that general-partnership baseline correctly.""",
    "Under unlimited liability each general partner can be pursued for the full remaining business debt. \"Solely liable\" here means creditors need not stop at that partner's ownership percentage.",
    "One partner may focus on clients while another runs operations. Task-sharing and specialisation are ordinary partnership practice without ending joint ownership.",
]

EXPL["CASE 4.2.02"] = [
    "One person owning and managing alone is a sole proprietorship. Partnership requires two or more joint founders, not a single owner acting by themselves.",
    "A limited partner who stays out of management normally loses only the capital contributed. The liability cap is tied to that passive capital role in the firm.",
    """Taking an active daily management role usually breaks limited-partner protection. Courts and partnership rules treat managing partners as general partners with unlimited exposure.

A silent investor who then starts signing contracts and hiring staff is a clear counterexample: capped liability does not survive that active role. The statement's claim that the cap remains is false.""",
    "A general partnership is built from general partners who manage and share unlimited liability. It does not require a limited partner sitting outside management; that feature belongs to limited partnerships.",
    "Multiple owners do not automatically incorporate or grant limited liability. Partnerships can remain unincorporated with unlimited exposure for general partners.",
]

EXPL["CASE 4.2.03"] = [
    "A limited partnership includes at least one partner who does not manage. That non-managing partner is the limited partner beside one or more managing general partners.",
    "Two or more partners can often pool more savings and raise more financial funds than one sole proprietor acting alone with a thinner personal base.",
    """When partners combine private assets, lenders may accept a larger collateral package than one owner could offer. More houses, vehicles, or deposits pledged together strengthen a loan application.

That combined collateral capacity is a practical finance advantage of multi-owner structures compared with a lone sole trader. The statement describes that advantage accurately.""",
    "Personal savings, bank loans, and trade credit remain central funding tools for partnerships much as for sole proprietors. The financial toolkit is broadly similar even though more people contribute.",
    "Ownership percentages and profit-loss splits are specified in the partnership agreement for each partner so residual claims are clear from the start.",
]

EXPL["CASE 4.2.04"] = [
    "Trust between two founders does not replace a partnership agreement. Profit splits and dispute rules still need to be settled in writing before conflict appears.",
    "A salaried manager is an employee, not a co-owner. Hiring one does not turn a one-person business into a partnership, which requires joint founding ownership.",
    """Assigning supplier talks to one partner is a task division, not a liability shield for the others. General partners keep unlimited liability for firm debts regardless of who handles which vendor.

If Partner A buys flour and Partner B never meets the miller, creditors can still pursue Partner B for unpaid invoices. Specialisation of roles does not carve liability away from co-general partners.""",
    "Ownership percentage in the agreement does not cap a general partner's debt exposure at that fraction. Creditors may pursue one partner for the full outstanding amount under unlimited liability.",
    "Decision-making rules and dispute-resolution methods are among the details partners record in the partnership agreement alongside ownership and profit terms.",
]

EXPL["CASE 4.2.05"] = [
    """Limited partnerships distinguish managing partners with unlimited liability from limited partners capped at their contribution. Not everyone shares equal unlimited exposure.

A silent capital partner who stays out of management is the counterexample: that partner's loss is normally limited to money put in. Claiming all partners share equal unlimited liability ignores the limited-partner role.""",
    "Partners can exchange ideas in tough situations and may reach better decisions than one person deciding alone under pressure without other viewpoints.",
    "Managing partners in a limited partnership keep unlimited liability for firm debts. The limited-liability privilege belongs to the non-managing limited partner, not to those who run operations.",
    "Unequal ownership percentages rearrange profit shares; they do not by themselves cap each general partner's liability at that debt fraction. Unlimited liability still allows full pursuit of a general partner.",
    "Sixty percent ownership does not cap that partner's liability at sixty percent of debts. Unlimited liability can still reach the full shortfall against one partner.",
]

EXPL["CASE 4.2.06"] = [
    "Specialising in sales does not free a general partner from debts that arise in purchasing or elsewhere. Unlimited liability covers obligations across the whole firm.",
    "Limited partnership status caps limited partners at their contribution; it does not remove unlimited liability from partners who manage. Managing partners remain fully exposed.",
    """Calling the business a partnership does not incorporate it or grant every partner a liability cap equal to capital contributed. Incorporation and limited liability for all owners are company features.

A general partnership remains unincorporated with unlimited personal exposure for general partners. The automatic limited-liability grant described in the statement does not exist.""",
    "Profit shares in the agreement allocate residual income; they do not automatically split each partner's legal liability in the same proportions. Creditors may still pursue one partner for the full debt.",
    "Under unlimited liability a creditor may pursue any one general partner for the entire outstanding partnership debt without first splitting claims evenly.",
]

EXPL["CASE 4.2.07"] = [
    "Operational terms can sit beside profit division in the same partnership agreement. Hours, roles, and procedures are common extras beyond the money split.",
    "Founders who want equal management involvement and shared financial risk often choose a general partnership structure rather than a limited one.",
    """Rights and responsibilities of each partner belong in the agreement alongside ownership percentages. Clear allocation of duties reduces later conflict over who must do what.

Settling those matters in writing is part of forming a workable partnership. The statement correctly includes rights and responsibilities among the agreement's contents.""",
    "Oral promises leave profit division hard to prove when trust frays. A written partnership agreement remains the proper place to settle how returns are shared, even among friends.",
    "Creditors need not collect equal fractions from every partner at once. One general partner can be pursued for the full debt under unlimited liability rules.",
]

EXPL["CASE 4.2.08"] = [
    "A one-person owner who hires a salaried manager still runs a sole proprietorship. Employment creates a payroll relationship, not joint ownership with the manager.",
    "Sharing profits does not automatically divide legal liability in the same proportions. A general partner can face the full debt even when profit share is only one third.",
    """Partners may specialise: one on clients, one on operations, one on finance. Equal rights do not mean every partner must personally perform every task.

Forbidding specialisation would make ordinary partnerships unworkable. Task-sharing is allowed and common; the claim that partners must do everything themselves is false.""",
    "Equal rights concern standing and liability, not identical job descriptions. Partners may take different specialised roles while remaining equal in ownership status.",
    "Several partners pooling private assets can offer more collateral for a loan than one owner alone typically can pledge from a single household.",
]

EXPL["CASE 4.2.09"] = [
    "A silent capital contributor who does not manage has liability limited to money contributed in a limited partnership. The cap follows the passive role.",
    "General or limited partnership rules apply only after two or more persons jointly found the business. A lone owner cannot invent partnership status alone.",
    """Equal rights as general partners can coexist with unequal ownership percentages written into the agreement. One partner may own sixty percent of profits while both still share unlimited liability status.

Ownership fractions rearrange residual claims; they need not destroy equal legal standing as general partners. The statement allows that coexistence correctly.""",
    "Decision-making procedures and dispute-resolution methods belong in the partnership agreement. Recording them early reduces costly fights when partners later disagree.",
    "Each partner's ownership percentage is among the details settled when the agreement is drawn up, alongside profit and loss division for every founder.",
]

EXPL["CASE 4.2.10"] = [
    "If business assets cannot cover debts, private assets of partners may be reached under unlimited liability. Personal property stays exposed after firm funds run out.",
    """Liability rules alone do not settle voting, profit splits, or exit procedures. A limited partnership still needs a partnership agreement for governance details.

Without written terms, partners lack a clear baseline when disputes arise. Claiming no agreement is needed because liability statutes exist overstates what those statutes cover.""",
    "Two consultants who jointly found a firm and plan equal management involvement are describing a general partnership: shared ownership, shared management, shared unlimited risk.",
    "Limited partners stay out of management while general partners run operations. That division of roles defines the limited partnership pattern in practice.",
    "Pooling partner savings can raise more investable funds than a single owner typically brings alone, which can support larger projects at launch.",
]

EXPL["CASE 4.2.11"] = [
    "Only limited partners enjoy a capital-contribution cap. Managing general partners in a limited partnership keep unlimited liability for firm debts.",
    "A multi-partner firm can usually pledge more combined private collateral than one sole proprietor. Claiming the opposite reverses the usual collateral advantage of partnerships.",
    """Partnerships and sole proprietors both use personal savings, bank loans, and trade credit. Financial rules are similar in kind even if more people contribute.

Partners routinely invest personal savings just as a sole trader does. Saying partnerships face entirely different finance rules and cannot invest savings similarly is false.""",
    "A limited partner who manages daily operations typically loses the liability cap. Active management treats that person like a general partner with unlimited exposure, not a percentage-capped investor.",
    "A limited partnership can mix managing partners with unlimited liability and a non-managing partner whose loss is capped at capital contributed.",
]

EXPL["CASE 4.2.12"] = [
    "Unequal ownership percentages do not convert a general partnership into a limited partnership. Limited status needs a non-managing limited partner, not merely uneven shares.",
    "Exchanging ideas in difficult situations can help partners reach better decisions than isolated sole decision makers. Collective deliberation is a practical advantage of the form.",
    """The silent capital contributor in a limited partnership stays out of daily management by definition. Managing daily operations would break the limited-partner pattern.

If the silent investor starts running the shop floor, capped liability is usually lost. The statement wrongly assigns management to the silent contributor.""",
    "Partners may pledge private assets as loan collateral even while general partners face unlimited liability. Collateral and unlimited liability can coexist for the same loan.",
    "Oral understandings are fragile when money or control is disputed. Founders still need a partnership agreement; spoken deals do not always suffice later.",
]

EXPL["CASE 4.2.13"] = [
    "Trust does not remove the need to document profit and loss division. When relationships sour, an undocumented split becomes a costly fight. The agreement should record the division.",
    "Decision-making and dispute procedures belong in the partnership agreement. Leaving them out invites deadlock when partners disagree on strategy or money.",
    """Two partners acting together can normally pledge more combined private collateral than one sole proprietor. Houses, cars, and deposits from two people add up.

Claiming a single sole proprietor usually out-pledges two partners reverses that arithmetic. Combined collateral capacity is a recognised partnership advantage.""",
    "Resolving disputes between partners is a matter the agreement may address with mediation clauses, voting rules, or exit paths. Including that topic is ordinary good practice.",
    "Limited partnership status still leaves managing partners with personal unlimited liability. Not every partner escapes personal exposure to firm debts.",
]

EXPL["CASE 4.2.14"] = [
    "Active management while claiming limited-partner status usually destroys the liability cap. Capped liability requires staying out of management of the business.",
    """If one partner pays a creditor the full firm debt, internal contribution claims against co-partners may follow under the agreement or partnership law. External payment does not end internal sharing.

Creditors care about recovery from any general partner; partners then settle among themselves. The statement correctly notes those internal recovery claims after one partner clears the debt.""",
    "Even two founders need a partnership agreement. Equal shares are not safely assumed by default when later disputes arise over money, control, or exit.",
    "Limited partners who manage daily operations typically lose the capital-contribution cap. Management activity is incompatible with keeping limited-partner protection.",
    "Two or more persons who jointly found a business create what is termed a partnership in this ownership chapter, distinct from a one-person sole trader.",
]

EXPL["CASE 4.2.15"] = [
    "Rights, responsibilities, and profit-loss division are recorded together in the partnership agreement so each partner's standing is documented from day one.",
    "Partners specify how decisions are made and how disputes are resolved inside that same agreement. Governance mechanics sit beside money terms in the document.",
    """Partnerships can raise bank loans, trade credit, and sometimes private investment without public share sales. They are not doomed to raise less external finance than every corporation.

Some small companies also struggle to sell shares publicly. Claiming partnerships always raise less because shares cannot be sold publicly overstates a tendency into an absolute falsehood.""",
    "Equal management involvement points to a general partnership. A limited partnership requires at least one non-managing limited partner, which conflicts with everyone managing equally.",
    "Specialising in client relations does not confine liability to client-contract debts. A general partner remains exposed to firm debts arising from every function.",
]

EXPL["CASE 4.2.16"] = [
    "Terms of the partnership and other operational details may also appear in the partnership agreement beside profit rules and ownership percentages.",
    "Unequal ownership percentages rearrange profit shares; they do not convert unlimited liability into limited liability for all partners. General partners stay fully exposed.",
    """General managing partners in a limited partnership keep unlimited liability. Ownership percentage does not become their liability ceiling.

Only the non-managing limited partner normally enjoys a contribution cap. Treating managing partners as percentage-capped investors misreads limited partnership rules and confuses profit shares with debt exposure.""",
    "Each general partner remains solely liable for all debts even when ownership percentages are unequal. Creditors may still pursue one partner for the full shortfall.",
    "More combined savings and collateral can make partnership borrowing more plausible than sole trading with thinner personal security for lenders.",
]

EXPL["CASE 4.3.01"] = [
    "A corporation is a legal entity of its own with business rights and obligations similar to those of natural persons in commercial life, including contracting capacity.",
    "As a legal person it can own land and property, hire employees, and close contracts in its own name. Those capacities do not require every shareholder to act personally in each deal.",
    """Because the corporation is a separate legal person, it may sue other parties and may itself be sued under its own name. Litigation does not have to name each shareholder individually for ordinary company disputes.

That standing in court is a direct consequence of legal personality. The statement lists both directions of litigation correctly.""",
    "Shareholders provide capital but need not run day-to-day operations. Founders can appoint managers and stay out of daily work while remaining owners of the company.",
    "Hired managers need not own shares in the company. Professional executives can run day-to-day operations without holding any equity themselves.",
]

EXPL["CASE 4.3.02"] = [
    "After the IPO, secondary trading passes shares between investors. Price rises on the exchange do not automatically send matching fresh capital to the issuer.",
    "Secondary-market gains enrich sellers among themselves. They do not inject permanent new equity into the corporation beyond the original issue proceeds already received.",
    """Higher market prices after issue do not force the company to pay matching dividends to all past and future shareholders. Dividend policy is a separate board decision, not an automatic twin of the share price.

A stock can double on the exchange while the firm pays zero dividend that year. The claimed obligation to match dividends to price gains does not exist.""",
    "Once shares are issued, later price increases on the market have no additional financing effect for the issuing corporation. Cash already arrived at issue; secondary moves rearrange investor wealth.",
    "When existing shareholders sell to one another at higher prices, capital gains go to those sellers, not equally to the corporation as a co-beneficiary of the trade.",
]

EXPL["CASE 4.3.03"] = [
    "Shareholders' liability is usually limited to what they paid for their shares. Creditors of the company do not normally reach the shareholders' other private assets.",
    "Limited liability still allows shareholders to lose the money they invested if the firm fails. \"Never lose any part\" overstates the protection; the stake itself remains at risk.",
    """Corporate capital is divided into shares, which is why it is called share capital. Each share represents a fraction of that capital and an ownership claim.

Buyers of those units become shareholders. The vocabulary of share capital follows directly from dividing ownership into share units, exactly as the statement says.""",
    "Persons who buy shares become shareholders of the corporation. Purchase of shares is how outsider ownership of the company is acquired in ordinary cases.",
    "Share capital is usually not redeemed by the company and serves as long-term or permanent equity finance rather than short-term credit from lenders.",
]

EXPL["CASE 4.3.04"] = [
    "Providing share capital does not force founders to manage every major decision personally. Boards and hired executives can run the firm while founders remain owners.",
    "A chief executive need not own shares before appointment. Professional managers can be hired and elected without prior equity ownership in the corporation.",
    """Shareholders elect a board of directors to make major business decisions for the corporation. Governance sits with that board rather than requiring every shareholder to manage daily affairs.

The board structure separates ownership from day-to-day control in the classic corporate pattern. The statement describes that elected-board management correctly.""",
    "The highest-ranking manager of the board is called the Chief Executive Officer. The CEO title marks that top executive role under board oversight.",
    "Other board or top roles may include the Chief Financial Officer and Chief Operating Officer alongside the CEO in the corporate management team.",
]

EXPL["CASE 4.3.05"] = [
    "Setup is harder than for sole traders or partnerships: capital rules, registration, and formal governance make corporations more difficult to establish.",
    "Corporations usually have a wider menu for raising funds, including share issues plus loans and credit. That broader access is a common reason larger firms incorporate.",
    """Share capital is central equity finance, but corporations are not barred from bank loans, bonds, or trade credit. Debt finance sits beside equity in ordinary corporate funding.

A company that borrows to buy equipment while also having shareholders shows both channels at once. Exclusive reliance on share capital alone is not required.""",
    "Shareholders typically face limited liability, not unlimited exposure beyond their investment. Claiming unlimited liability for all corporation debts reverses the usual corporate rule.",
    "Financial funds for corporations mainly comprise share capital as well as loans and credit from banks and other lenders, not equity finance alone.",
]

EXPL["CASE 4.3.06"] = [
    """One million euros divided into one hundred thousand shares means each share is one hundred-thousandth of the capital, or 0.001 percent, not one percent.

One percent would require only one hundred shares for the whole capital. The arithmetic in the statement is wrong by a factor of a thousand, so the claimed share of capital fails.""",
    "If all one hundred thousand shares are sold at the issue that raises one million euros, the corporation gains that million as share capital from investors.",
    "At initial issue, shares can be purchased directly from the corporation. Secondary purchases from other shareholders come later; they are not the only route into ownership.",
    "Issue price can equal nominal value; a permanent premium above nominal is not mandatory for every share sold. Pricing depends on the offer terms, not an always-above-nominal rule.",
    "Huge amounts can be raised when investors buy newly issued stock in large offerings. Share sales at issue are a powerful funding channel for corporations.",
]

EXPL["CASE 4.3.07"] = [
    "Many private companies hire staff and sign contracts without listing on an exchange. Listing is optional, not a precondition for ordinary trading activity.",
    "A stock exchange is a regulated market where many investors buy and sell securities, not an unregulated venue reserved for the issuer trading only its own shares.",
    """Listing typically increases disclosure and compliance duties under authority-imposed rules. It does not remove the need to follow regulation.

A listed firm that ignored reporting requirements would face sanctions from regulators and the exchange. Claiming listing lifts all rule compliance reverses the usual effect of going public.""",
    "After introduction, exchange prices move with demand and supply among traders. They are not frozen forever at a single issuer-set figure for the life of the stock.",
    "A stock exchange is a financial market, regulated by the authorities, where shares and other securities can be bought and sold by investors.",
]

EXPL["CASE 4.3.08"] = [
    "Shares can be bought at initial issue from the corporation or later from another shareholder who sells. Primary and secondary routes both exist for acquiring stock.",
    "Introducing shares on a stock exchange at a set price is also called an initial public offering, the moment the stock becomes publicly tradable.",
    """Subsequent resales on the exchange transfer ownership between investors. The full sale price does not add again to the corporation's share capital account.

Only the original issue (or a new issue) raises equity for the company. Treating every secondary trade as fresh share capital double-counts investor-to-investor payments.""",
    "After the IPO, exchange prices are determined by demand and supply among buyers and sellers. The market, not a fixed issuer decree, sets ongoing prices.",
    "Beneficiaries of a post-issue price rise are shareholders who hold or trade the stock, not the issuing corporation itself receiving matching cash.",
]


def apply() -> None:
    data = json.loads(PATH.read_text())
    subset = data[0:40]
    ids = [c["case_id"] for c in subset]
    missing = [cid for cid in ids if cid not in EXPL]
    extra = [cid for cid in EXPL if cid not in ids]
    if missing or extra:
        raise SystemExit(f"id mismatch missing={missing} extra={extra}")
    for c in subset:
        bodies = EXPL[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        for i, body in enumerate(bodies):
            if "—" in body:
                raise SystemExit(f"{c['case_id']} {chr(65+i)}: em dash in body")
        c["tactical_explanations"] = [
            wrap(bodies[i], bool(c["answer_key"][i])) for i in range(5)
        ]
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {PATH} cases {ids[0]} .. {ids[-1]} ({len(ids)})")


if __name__ == "__main__":
    apply()
