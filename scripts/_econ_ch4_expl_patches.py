"""Hand-deepened tactical explanations for economics Ch4 (applied sequentially)."""

from __future__ import annotations

PATCHES: dict[str, list[str]] = {}

PATCHES['CASE 4.1.01'] = [
    'TRUE — A sole proprietorship is defined by concentrating both ownership and day-to-day control in one natural person. That person owns the business assets used in trading and also runs operations: setting prices, choosing suppliers, hiring help if needed, and deciding how profits are used. The legal form does not create a second company person who owns or manages separately from the proprietor. So the claim that one person owns, manages, and runs the business matches the structure of this form.\n\nThe statement is true.',
    "TRUE — Because ownership and control sit with the same individual, decision rights are not shared with co-owners. The sole proprietor can approve purchases, change strategy, or hire and fire without needing a partners' vote or a board resolution. In practice the owner may still listen to employees or advisers, but there is no legal duty to obtain co-owner consent before acting. That is what “without necessarily having to consider other opinions” means: consultation is optional, not a structural requirement of the form.\n\nThe statement is true.",
    "TRUE — A sole proprietorship has no separate legal personality. The business and the owner are the same legal unit for tax purposes. Therefore trading profit is not taxed inside a corporate entity; it flows through to the proprietor and is declared on the personal income tax return. Mechanically: revenues minus deductible expenses yield taxable business profit, and that profit is assessed as the owner's personal income for the year, not as corporate income tax of a distinct company.\n\nThe statement is true.",
    "FALSE — Separate legal personality and independent corporate income tax belong to incorporated forms (for example a limited company), not to a sole proprietorship. A sole trader is not a legal person distinct from the owner, so the firm cannot file a corporate tax return of its own. Profits are taxed on the owner's personal income tax statement. The statement reverses both features—legal personality and tax filing—and is therefore incorrect.\n\nThe statement is false.",
    "TRUE — Continuity of a sole proprietorship is tied to one person's capacity to own and manage. If that person retires or is unable to work for a long period because of illness, there is no automatic second owner or professional management layer that keeps the firm running under the same legal form. Without a planned transfer, sale, or succession arrangement, customers, contracts, and day-to-day control can stall. That dependence on a single manager is why retirement and long-term illness create continuity risk.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.02'] = [
    'TRUE — Compared with corporations that may need minimum share capital and formal incorporation steps, a sole proprietorship can be started with little legal formality and without a mandated minimum capital deposit. The neighbourhood bakery in the stem fits that pattern: one owner-manager can begin trading without first raising a statutory capital pot. Ease of establishment for small businesses is therefore a genuine advantage of this ownership form.\n\nThe statement is true.',
    'FALSE — Limited liability is not a feature of sole proprietorship. The owner and the business are not ring-fenced legal persons, so creditors are not restricted to assets formally recorded as business property. Under unlimited liability, personal wealth can be drawn on if business resources are insufficient. Claiming limited liability protection for a sole proprietor confuses this form with an incorporated limited company.\n\nThe statement is false.',
    "TRUE — Unlimited liability means the proprietor's private assets stand behind business debts. If the bakery's cash and business assets cannot cover what is owed to suppliers or lenders, creditors may pursue personal property belonging to the owner. That is the economic mechanism of unlimited liability: repayment is not capped at business-book assets alone.\n\nThe statement is true.",
    "FALSE — You cannot incorporate as a sole proprietorship. Incorporation creates a separate legal person, typically with limited liability for shareholders. A sole proprietorship remains unincorporated and the owner's liability stays unlimited; it is not capped at capital originally invested. The statement mixes two incompatible legal structures and invents limited liability where none exists.\n\nThe statement is false.",
    'FALSE — Trade credit is deferred payment for purchases, not a gift and not a shield against liability. When suppliers deliver goods on credit, the bakery owes those amounts until they are paid. The sole proprietor remains personally responsible for that payable. Trade credit changes cash timing; it does not erase the obligation or the unlimited-liability exposure attached to it.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.03'] = [
    "TRUE — Legal personality means the ability to hold rights and duties in one's own name as a distinct person in law. A sole proprietorship does not acquire that status: there is no company entity separate from the owner. Contracts, assets, and liabilities sit with the proprietor personally. That is the core legal distinction from an incorporated business.\n\nThe statement is true.",
    'TRUE — Because there is no separate corporate taxpayer, business profit is attributed to the owner. The fiscal path is: compute profit from the trading activity, then include that profit on the personal income tax statement. The owner does not file a stand-alone corporate tax return for the sole proprietorship as if it were a company.\n\nThe statement is true.',
    'TRUE — Managerial authority is not split among shareholders and a board in this form. The sole proprietor remains responsible for the decisive choices—strategy, major spending, hiring, and risk-taking—even if assistants handle routine tasks. Dependence of management on that one person is a defining organisational feature of the sole proprietorship.\n\nThe statement is true.',
    'FALSE — Pass-through personal taxation describes how profits are assessed; it does not disable ordinary commercial acts. A sole proprietor can employ staff and sign supplier contracts in the course of business. Those relationships create personal obligations for the owner, but they are fully compatible with unincorporated status. The statement wrongly treats tax treatment as a ban on hiring or contracting.\n\nThe statement is false.',
    'TRUE — Nothing in sole-proprietorship law prevents hiring. The owner may recruit personnel for production, sales, or administration when support is needed. What does not transfer is the central management role and the residual risk: key decisions and unlimited liability stay with the proprietor even after staff are on the payroll.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.04'] = [
    "TRUE — Employment is a commercial tool available to sole traders. If daily operations need more hands, the proprietor can hire assistants while remaining the owner. Hiring does not require converting to a partnership or company; it simply adds labour under the proprietor's direction.\n\nThe statement is true.",
    "FALSE — Employees work under contract; they do not become residual risk-bearers for the firm's debts. Unlimited liability attaches to the sole proprietor as owner, not to staff. Wages may be a business expense, but hiring does not shift creditor claims onto employees or relieve the owner of personal exposure.\n\nThe statement is false.",
    'TRUE — Delegation of routine work is not delegation of ownership risk. Assistants may serve customers or keep records, yet the proprietor still chooses strategy, commits the business financially, and bears unlimited liability if things go wrong. Important management decisions and risk-bearing remain concentrated in the owner.\n\nThe statement is true.',
    "TRUE — With no co-owners, the sole proprietor's decision rights are undivided. The owner can decide without a formal requirement to secure agreement from partners or shareholders. Advice from staff can be useful, but it is not a structural veto. Centralised authority is therefore correctly described.\n\nThe statement is true.",
    "TRUE — When operations hinge on one manager's presence and judgment, long-term illness interrupts that control channel. Employees may keep routine activity going for a while, but they do not automatically inherit ownership or full decision authority. Continuity can therefore be disrupted until the proprietor returns or a transfer is arranged.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.05'] = [
    'FALSE — Registering a trading name identifies the business in the marketplace; it does not incorporate the firm. Incorporation is a separate legal process that creates a company with its own personality and tax identity. A registered sole-trader name still leaves ownership and tax with the natural person who owns the business.\n\nThe statement is false.',
    'TRUE — Without a corporate shell, profit has nowhere else to be taxed. It is attributed directly to the owner and appears on the personal income tax statement. That pass-through treatment is the standard fiscal consequence of sole proprietorship.\n\nThe statement is true.',
    'FALSE — Sole proprietorships are characterised by the absence of a mandatory minimum share capital. Share capital rules belong to company formation. A sole trader may begin with little or no equity cushion; there is no statutory substantial minimum share capital gate before trading may start.\n\nThe statement is false.',
    'FALSE — Limited liability would wall off private assets such as a home from business creditors once business assets are exhausted. Sole proprietors do not enjoy that wall. Under unlimited liability, personal property remains reachable when business resources cannot cover debts. The statement attributes the wrong liability regime to the form.\n\nThe statement is false.',
    'FALSE — A sole proprietorship has exactly one owner. Two people who want to share tasks and risk on an equal footing need a multi-owner form—typically a partnership, or a company with shared shareholdings. Choosing sole proprietorship would force one of them into a non-owner role and would not match equal shared ownership.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.06'] = [
    'FALSE — Retirement removes the person in whom ownership and management are united. Nothing in the sole-proprietorship form automatically keeps the repair workshop running unchanged without a sale, gift, inheritance arrangement, or other transfer of the business. Without such a plan, continuity breaks rather than continuing by default.\n\nThe statement is false.',
    'TRUE — Continuity risk is the flip side of single-person control. When the workshop owner plans to retire or faces long-term illness, customers, licences, supplier relationships, and know-how are tied to that individual unless actively transferred. That dependence is why retirement and prolonged illness can threaten ongoing operations.\n\nThe statement is true.',
    'FALSE — Single-person ownership does not make succession simpler in any automatic sense. Transferable shares in a company can pass ownership without dismantling the legal person; a sole proprietorship has no such built-in share mechanism. Succession often requires finding a buyer or heir and transferring the business personally, which can be harder—not always simpler—than share transfer. The claim that succession is always simpler is therefore false.\n\nThe statement is false.',
    'FALSE — Staff do not legally become owners merely because the proprietor retires. Ownership changes only through an explicit transfer. Without that transfer, employees remain employees; they cannot “assume ownership without transfer.” Retirement therefore can disrupt continuity rather than leaving it unaffected.\n\nThe statement is false.',
    'TRUE — Until a transfer occurs, management still centres on the sole proprietor. Key decision rights—strategy, major spending, and risk-taking—remain with that person. Dependence of management on the owner is exactly why continuity planning matters in this form.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.07'] = [
    "TRUE — Unlimited liability means the proprietor stands behind every business debt and obligation. There is no corporate veil capping exposure at capital contributed. If the firm cannot pay suppliers, lenders, or other creditors, the owner's personal responsibility remains for the unpaid balance.\n\nThe statement is true.",
    'FALSE — Unlimited liability is not limited to short-term trade credit. Long-term bank loans—even when secured by property—are still obligations of the sole proprietor. Collateral gives the lender a preferred claim on the pledged asset; it does not redefine the loan as outside unlimited liability or erase personal exposure for any shortfall.\n\nThe statement is false.',
    'TRUE — Especially for longer-term lending, creditors reduce their risk by asking for collateral: assets that can be seized or sold if the borrower defaults. Land, buildings, or other pledgeable property commonly serve that role. Requiring collateral is a normal credit practice and does not contradict unlimited liability; it layers security on top of the personal obligation.\n\nThe statement is true.',
    "TRUE — When the business fails and debts remain after business assets are used, private assets are also at stake. That is the practical meaning of unlimited liability for a failing sole proprietorship: the owner's non-business wealth is not automatically shielded by a separate legal person.\n\nThe statement is true.",
    "FALSE — Pledging collateral secures the lender's claim on the pledged asset, but it does not fully exempt all remaining private assets from further claims. If the collateral sale does not cover the debt, or if other unsecured creditors remain unpaid, unlimited liability can still reach other personal property. Collateral is security, not a complete waiver of further personal exposure.\n\nThe statement is false.",
]

PATCHES['CASE 4.1.08'] = [
    "TRUE — Because the sole proprietorship is not a legal entity separate from the owner, there is no corporate taxpayer for the trading profit. The fiscal channel is the owner's personal income tax statement: business profit is computed and then reported there as the proprietor's income.\n\nThe statement is true.",
    'FALSE — Unincorporated status changes how tax is reported, not whether profit is taxable. Operating as a sole proprietorship does not create an income-tax exemption for business earnings. The owner remains liable to income tax on those profits.\n\nThe statement is false.',
    'TRUE — The owner is taxed on profits earned from the business through personal income taxation rather than through a separate corporate tax return filed by a company. That follows directly from the absence of a distinct corporate legal person.\n\nThe statement is true.',
    "TRUE — On a personal tax assessment, business profit can sit alongside wages, interest, or other personal income belonging to the same individual. The assessment aggregates the proprietor's taxable amounts; it does not require a firewall that keeps business profit on a corporate return.\n\nThe statement is true.",
    'FALSE — The opposite is true: personal taxation of sole-trader profits is possible precisely because there is no separate legal personality. Separate personality would typically point toward corporate taxation of company profits, with distributions treated differently. Requiring separate personality before personal taxation reverses the logic.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.09'] = [
    'TRUE — By definition a sole proprietorship has one owner who also manages day-to-day operations. There are no partners sharing ownership rights. Ownership and management therefore combine in a single individual, which is the core organisational feature of this business form.\n\nThe statement is true.',
    'TRUE — Starting a sole proprietorship does not require depositing minimum share capital of the kind associated with company formation. That low formal finance barrier is why the form is described as easy to establish, especially for small businesses that need to begin trading quickly.\n\nThe statement is true.',
    'TRUE — Without separate legal personality, the firm is not a distinct taxpayer. Profit is attributed to the owner and taxed on the personal income statement. Legal status and tax treatment are linked: no corporate person means personal assessment of business profit.\n\nThe statement is true.',
    "TRUE — Unlimited liability extends creditor reach beyond business-book assets. If debts cannot be met from trading resources, the proprietor's private assets are also at stake. That personal exposure is the risk counterpart to undivided control.\n\nThe statement is true.",
    "TRUE — Hiring does not change the ownership form. The proprietor may recruit personnel for support while still making the key management decisions and bearing the residual risk. Staff add capacity; they do not replace the owner's central authority.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.10'] = [
    'TRUE — A corporation, as a legal person, can sue and be sued in its own name. A sole proprietorship lacks that separate personality, so legal actions connect to the owner personally rather than to an independent company entity. That is a central distinction between unincorporated and incorporated status.\n\nThe statement is true.',
    "TRUE — Profits of the sole proprietorship are reported on the owner's personal income tax statement because there is no separate corporate tax identity. Pass-through taxation follows from unincorporated legal status.\n\nThe statement is true.",
    'TRUE — Under unlimited liability, unpaid business debts can lead creditors to pursue private assets. The absence of a limited-liability shield is exactly how sole-trader creditor protection differs from that of shareholders in a limited company.\n\nThe statement is true.',
    'TRUE — With no mandatory capital requirement at start-up, sole proprietorships remain accessible for small businesses that cannot or prefer not to raise statutory share capital before trading.\n\nThe statement is true.',
    'TRUE — Because management and ownership centre on one person, long-term illness or retirement can interrupt continuity. There is no automatic share-transfer mechanism keeping an unchanged legal person in place; succession must be arranged deliberately.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.11'] = [
    'TRUE — A freelance designer operating alone as a sole proprietor has no co-owners whose consent is required. Management decisions can be taken without consulting other owners because there are no other owners. Occasional administrative help does not create co-ownership rights.\n\nThe statement is true.',
    'TRUE — Even with contracted administrative help, residual decision-making and risk stay with the designer-proprietor. Important management choices and unlimited liability are not transferred to contractors. Taking all the risk is part of sole-trader ownership.\n\nThe statement is true.',
    'TRUE — There is no separate board of directors in a sole proprietorship. Management depends on the proprietor personally rather than on a corporate governance layer. That concentration of control matches the form used by the freelance designer in the stem.\n\nThe statement is true.',
    'TRUE — Delegating bookkeeping or scheduling does not surrender strategic authority. The proprietor still decides product focus, pricing, major commitments, and whether to expand. Delegation of tasks is not delegation of ultimate management control.\n\nThe statement is true.',
    "FALSE — Hiring or contracting personnel does not hand strategic direction to employees. Staff execute assigned work; the sole proprietor retains authority over the firm's direction. The statement reverses the control relationship.\n\nThe statement is false.",
]

PATCHES['CASE 4.1.12'] = [
    'TRUE — Ease of establishment comes from the absence of financial requirements such as minimum share capital before trading may begin. That feature makes sole proprietorship attractive for small start-ups that need a simple legal path into the market.\n\nThe statement is true.',
    'TRUE — One person owns and manages the firm and therefore bears central operational responsibility. That unity of ownership and control is the organisational reason the form is simple at launch yet personally demanding in day-to-day running.\n\nThe statement is true.',
    'TRUE — Stepping away through retirement or prolonged illness removes the person on whom operations depend. Continuity may be interrupted unless a transfer or covering arrangement is in place—hence the succession challenge over time.\n\nThe statement is true.',
    'TRUE — When personal funds are not enough, the sole proprietor can seek extra money from investors and/or banks. Those injections are external finance sources; they expand funding capacity without changing the fact that the owner still carries unlimited liability for resulting obligations.\n\nThe statement is true.',
    "TRUE — Because the firm is not a legal entity of its own, profits are taxed on the owner's personal income tax statement. Fiscal treatment follows the unincorporated legal structure from the start.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.13'] = [
    'FALSE — A trading name is a label used in commerce. Listing or registering it does not transform the sole proprietorship into a corporation or create separate legal personality. Incorporation requires forming a company; a name alone does not do that.\n\nThe statement is false.',
    'TRUE — Tax registration and hiring employees are ordinary operating steps. Neither step incorporates the business. The firm remains an unincorporated sole proprietorship even with a registered tax identity and multiple staff.\n\nThe statement is true.',
    'TRUE — Personal income tax on business profits follows from the absence of a separate legal entity. The proprietor pays tax on those profits personally rather than through a corporate tax return of a company.\n\nThe statement is true.',
    'TRUE — Whether credit is short-term (for example trade credit or an overdraft) or long-term (for example a mortgage-backed loan), the amounts owed are liabilities of the sole proprietor. Duration changes maturity, not the fact of obligation.\n\nThe statement is true.',
    'FALSE — Collateral is security requested by external creditors, especially for longer-term lending. Internal sources such as retained profit do not involve a creditor who demands collateral—the funds already belong to the business/owner. Saying collateral applies only to internal finance reverses the usual pattern.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.14'] = [
    'TRUE — Sole proprietorship fits a single owner who both manages the business and accepts the associated unlimited-liability risk. That one-person match is when the form is appropriate.\n\nThe statement is true.',
    'FALSE — Two equal co-owners cannot both be sole proprietors of the same business. Dividing management rights between two owners requires a multi-owner structure such as a partnership (with an agreement), not sole proprietorship rules.\n\nThe statement is false.',
    'FALSE — Limited liability through transferable shares is a corporate feature. Several investors seeking that package need an incorporated company, not a sole proprietorship, which has one owner and unlimited liability.\n\nThe statement is false.',
    'TRUE — Two persons who want to share tasks and risk with equal rights align with partnership: joint ownership, shared responsibilities, and typically a partnership agreement covering profit division and decision rules.\n\nThe statement is true.',
    'FALSE — Sole proprietorship rules do not provide equal shared ownership for two founders. Relying on them instead of partnership leaves no legal basis for equal co-ownership. Partnerships remain necessary when equal shared ownership is the goal.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.15'] = [
    "TRUE — When the business lacks separate legal personality, trading profit has no corporate pocket to stay in for tax. It flows directly onto the owner's personal income tax statement as the proprietor's income.\n\nThe statement is true.",
    'TRUE — The owner pays tax on profits earned from the business precisely because the firm is not a separate legal entity. Personal taxation is the fiscal counterpart of unincorporated status.\n\nThe statement is true.',
    'FALSE — Dividends are a corporate distribution concept. Personal income tax treatment of sole-trader profit does not require issuing dividends to the owner before tax is due. Profit is assessed as personal income without that corporate step.\n\nThe statement is false.',
    'TRUE — Operating without corporate personality changes the filing channel, not the existence of tax. The proprietor remains taxable on business profits; lack of incorporation is not an exemption.\n\nThe statement is true.',
    'FALSE — A separate corporate tax return presupposes a corporation. Sole proprietorships report through personal income taxation. Requiring a corporate return regardless of legal status contradicts the unincorporated nature of the form.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.16'] = [
    'FALSE — Trade credit is deferred payment under a supplier agreement, not a grant. The amounts must be repaid within the agreed period. Saying trade credit never requires repayment misrepresents supplier credit as free money.\n\nThe statement is false.',
    'TRUE — When a supplier allows deferred payment, the sole trader records a short-term payable until settlement. That payable is a liability the proprietor must honour under the credit terms.\n\nThe statement is true.',
    "FALSE — Securing a long-term bank loan with land gives the bank collateral rights over that property; it does not exclude the loan from unlimited liability or protect the owner completely. If collateral proceeds do not cover the debt, or other debts remain, personal exposure can continue. Collateral reduces lender risk; it does not erase the proprietor's unlimited liability.\n\nThe statement is false.",
    'TRUE — If the business fails and debts exceed available business funds, private assets are also at stake. That personal reach is how unlimited liability operates across the mix of trade credit, overdraft, and long-term loan in the stem.\n\nThe statement is true.',
    "TRUE — Short-term instruments and long-term loans alike create obligations of the sole proprietor. Using several credit types at once multiplies payables; it does not move any of them outside the owner's responsibility.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.17'] = [
    'FALSE — Registering a commercial trading name does not automatically create separate corporate legal personality. Name registration and incorporation are different acts. The business remains a sole proprietorship unless a company is actually formed.\n\nThe statement is false.',
    'FALSE — Equal management shares for two friends require shared ownership. A sole proprietorship admits only one owner, so partnership (or another multi-owner form) is the suitable choice—not sole proprietorship.\n\nThe statement is false.',
    "TRUE — Without separate legal personality, business profits are assessed as the proprietor's personal income. That tax treatment is the consistent fiscal consequence of the unincorporated form.\n\nThe statement is true.",
    'FALSE — A business bank account organises payments; it does not incorporate the firm or grant limited liability. Incorporated limited liability requires forming a limited company, not merely opening an account.\n\nThe statement is false.',
    'FALSE — Hiring employees expands labour capacity. It does not automatically convert the sole proprietorship into a limited liability company. Legal form changes only through formal incorporation, not through headcount.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.18'] = [
    'FALSE — There is no mandatory minimum share capital deposit before a sole proprietorship may start trading. Minimum capital rules belong to company formation. Sole traders can commence without that corporate capital gate.\n\nThe statement is false.',
    'FALSE — A sole proprietorship is not a separate legal person and does not file corporate income tax independently of the owner. Profits are taxed through personal income taxation.\n\nThe statement is false.',
    'FALSE — Limited liability does not protect a sole proprietor. When business debts exceed assets held in the business name, unlimited liability can extend claims to private assets. The statement assigns the wrong liability regime.\n\nThe statement is false.',
    'TRUE — The owner pays tax on profits earned from the business through personal income taxation. That is the standard fiscal treatment for this unincorporated form.\n\nThe statement is true.',
    "FALSE — Corporate income tax on a separate return is for corporations. Sole proprietorship profits are not assessed that way; they enter the owner's personal tax affairs. The statement invents a corporate filing obligation that the form does not have.\n\nThe statement is false.",
]

PATCHES['CASE 4.1.19'] = [
    'TRUE — The integrated profile begins with unity of ownership and management: one person owns, manages, and runs the business and keeps the most important decision authority. That single-person core defines the form.\n\nThe statement is true.',
    "TRUE — Without separate legal personality, business profits are assessed on the owner's personal income tax statement. Legal status and tax channel move together.\n\nThe statement is true.",
    'TRUE — No minimum capital requirement applies when establishing a sole proprietorship for a small business, which is why the form is accessible at start-up.\n\nThe statement is true.',
    'TRUE — Unlimited liability means private assets are also at stake if business debts must be repaid beyond what business resources can cover. Personal wealth backs residual obligations.\n\nThe statement is true.',
    "TRUE — Continuity problems may occur when the sole proprietor retires or suffers long-term illness, because operations depend on that one person's capacity to own and manage.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.20'] = [
    'TRUE — Retained profit is surplus earned by the business and kept in the firm rather than withdrawn. Reinvesting that surplus funds expansion from inside the operating cycle, so it is classified as an internal source of finance.\n\nThe statement is true.',
    "TRUE — The owner's initial investment from personal savings comes from outside the business's own trading surplus. In the sources-of-finance framework used here, that owner capital injection is classified as external finance—even though the money comes from the same natural person—because it is not generated internally by retained operations.\n\nThe statement is true.",
    'FALSE — Retained earnings and sale of unused assets arise from the business itself: profit kept after trading, or cash released by disposing of assets already owned. Those are internal sources, not external ones. Saying they originate outside the business reverses the classification.\n\nThe statement is false.',
    'FALSE — Bank credit is money provided by an outside creditor and must be repaid with interest according to the loan terms. Depositing the borrowed cash in the business bank account does not convert it into internal finance; the source remains external debt.\n\nThe statement is false.',
    'TRUE — Internal sources such as retained profit do not create a creditor relationship, so they avoid interest and similar financial charges that lenders attach to borrowed funds. That cost advantage is a main reason internal finance is attractive when it is available.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.21'] = [
    'TRUE — A bank overdraft is arranged on a business current account. Once that account exists, the bank may allow the balance to go negative up to an agreed limit, giving flexible short-term credit for temporary cash gaps. Flexibility comes from drawing only what is needed, when it is needed, within the facility.\n\nThe statement is true.',
    'TRUE — Trade credit is a supplier agreement that postpones payment for goods already delivered or invoiced. The business receives materials or stock now and settles within the agreed credit period. Deferral is contractual timing, not cancellation of the purchase price.\n\nThe statement is true.',
    'TRUE — Overdraft interest is charged on the overdrawn amount during periods when the account is below zero (or beyond any interest-free buffer). When the balance is positive and the facility is unused, that overdraft interest does not accrue on a healthy credit balance. Cost follows actual use of the credit.\n\nThe statement is true.',
    'TRUE — Long-term bank loans are frequently secured by mortgages over land and property. The pledged asset serves as collateral: if the borrower defaults, the lender can enforce against that property. Collateral does not remove the debt; it backs repayment over a multi-year horizon.\n\nThe statement is true.',
    'FALSE — Trade credit is short-term finance tied to purchase cycles—typically days or weeks, not years. Deferring payment does not reclassify supplier credit as long-term debt finance. Long-term debt usually covers facilities lasting beyond a year, such as term loans or mortgages.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.22'] = [
    "TRUE — In the sources-of-finance framework used here, money the owner injects from personal savings at start-up is treated as an external source: it comes from outside the business's own retained trading surplus. Most sole proprietors begin that way, funding launch costs from personal wealth before operations generate internal funds.\n\nThe statement is true.",
    "TRUE — Because funding capacity largely tracks the proprietor's personal resources at launch, a lack of financial funds makes establishment very difficult. Easy legal entry does not invent capital; without savings or access to outside finance, paying start-up costs remains hard.\n\nThe statement is true.",
    'FALSE — Internal finance is generated by the business itself—retained profit or sale of assets already owned after trading has begun. Personal savings invested at start-up are not earlier business profits; they precede operations. Classifying them as internal because they later sit in the business account confuses source with deposit location.\n\nThe statement is false.',
    'FALSE — “No financial requirements” means no mandatory minimum capital rule, not that owners never put money in. Most sole traders voluntarily contribute personal capital to buy stock, equipment, and working cash. Absence of a legal minimum does not imply zero owner contribution in practice.\n\nThe statement is false.',
    'FALSE — Funds available to the business depend heavily on what the sole proprietor can supply or attract. Personal financial capability therefore has a direct bearing on start-up and early funding. Claiming it has no bearing contradicts how sole-trader finance usually works.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.23'] = [
    'FALSE — Selling assets the business no longer needs releases cash from resources already inside the firm. That is internal finance. Creditors are not providing the money; the business is monetising its own surplus assets. Labelling asset sales as external creditor finance misstates the source.\n\nThe statement is false.',
    'FALSE — Legal identity of owner and business does not decide the internal/external finance label. Owner savings injected into the firm are classified as external finance in this framework because they are not generated by retained operations. Sameness of legal person does not convert owner capital into internal finance.\n\nThe statement is false.',
    "TRUE — When profit is kept in the firm and reinvested instead of withdrawn, the funding comes from the business's own surplus. That retained profit is the textbook internal source once the sole proprietorship is operating and generating revenue.\n\nThe statement is true.",
    'FALSE — Investor funds and bank loans originate outside the firm and create claims by outsiders. Depositing the cash in the business account only records receipt; it does not turn external capital or debt into internal finance.\n\nThe statement is false.',
    'FALSE — Internal sources are valued partly because they avoid interest charges payable to external lenders. The proprietor is not treated as a market lender who must be paid interest on retained profit. Requiring market interest to the owner as if internal funds were a loan invents a cost the classification exists to avoid.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.24'] = [
    "TRUE — Owner investment, investor capital, and creditor loans all come from outside the firm's retained operating surplus, so they are external sources. Together they expand what the sole proprietor can fund beyond internal generation alone.\n\nThe statement is true.",
    'TRUE — Once operations produce surplus, retained profit kept in the business and cash from selling unneeded assets are internal sources. They recycle resources already earned or owned inside the firm.\n\nThe statement is true.',
    'TRUE — Every credit facility—overdraft, trade credit, term loan, mortgage—creates an amount owed. For the sole proprietor those amounts are personal liabilities regardless of whether maturity is short or long.\n\nThe statement is true.',
    'TRUE — Profit exists when revenues exceed expenses. The proprietor then chooses: withdraw the surplus for personal use, or retain and reinvest it in the business. Retention is possible only if withdrawal does not take the funds out.\n\nThe statement is true.',
    'TRUE — Unlimited liability is a property of the ownership form, not of the finance label. Whether expansion is funded from retained profit or from bank loans, the proprietor remains personally exposed to business debts. Internal finance does not create a limited-liability shield.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.25'] = [
    'TRUE — Low entry barriers mean no mandatory financial requirements must be met before starting as a sole trader. That legal simplicity lets small ventures begin without first raising statutory share capital.\n\nThe statement is true.',
    'TRUE — In practice most sole proprietors still invest their own savings at launch to cover stock, tools, and early expenses. Easy legal entry and voluntary owner funding commonly appear together.\n\nThe statement is true.',
    'TRUE — When personal funds fall short, the proprietor can seek extra money from investors and/or banks. Those routes add external finance capacity after or alongside owner savings.\n\nThe statement is true.',
    'TRUE — After trading begins, retained profit can supplement external borrowing. The finance mix then combines internal surplus with outside credit rather than relying on only one channel.\n\nThe statement is true.',
    'TRUE — Long-term lenders typically ask for pledgeable assets as collateral to secure repayment over multi-year horizons. Requiring collateral is a standard condition when extending long-term credit to sole proprietors.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.26'] = [
    'TRUE — Profit is the surplus when revenues exceed expenses. That surplus can be left in the business and used to buy new equipment or otherwise reinvest—exactly the decision facing the profitable sole trader in the stem.\n\nThe statement is true.',
    'TRUE — If the proprietor does not withdraw the profit, the retained amount funds the firm from inside. Classification as internal finance follows from keeping earned surplus in the business.\n\nThe statement is true.',
    'TRUE — Withdrawal is always an available choice for a sole trader: the owner can take profit out for personal use instead of funding expansion. Reinvestment is optional, not automatic.\n\nThe statement is true.',
    'TRUE — Creditor borrowing typically carries interest and related financial charges. Funding equipment from retained profit avoids those charges because no lender is providing the money.\n\nThe statement is true.',
    'TRUE — Internally generated funds similarly avoid interest payments that external creditors would charge on a loan of the same amount. The cost saving is the economic reason retained profit is attractive when surplus exists.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.27'] = [
    'FALSE — Collateral means pledgeable assets a lender can claim if the borrower defaults. Retained profit is not itself a collateral object—it is an internal funding source—but assets built up with retained profit can still be pledged for a loan. The statement’s claim that retained profit is “never accepted as security,” and its leap that collateral therefore “applies only to external borrowing,” muddles source-of-finance labels with security practice. External borrowing is where collateral requirements appear, yet the wording falsely treats retained profit as a rejected form of security rather than explaining that collateral attaches to assets in creditor relationships. The assertion as stated is not a correct principle.\n\nThe statement is false.',
    'TRUE — For long-term credit, financial institutions typically want pledgeable assets as collateral so they have recourse if the borrower defaults over a multi-year loan life. That security demand is standard lending practice for sole proprietors seeking long-term bank finance.\n\nThe statement is true.',
    'TRUE — Mortgages over land and property are a common way to back long-term bank loans. The property is pledged; the loan remains repayable according to the mortgage and loan agreement.\n\nThe statement is true.',
    'TRUE — A creditor advances money for an agreed period. Repayment follows the contract and usually includes interest as the price of borrowing. Time-limited advance plus contractual repayment is the basic lending mechanism.\n\nThe statement is true.',
    'TRUE — If private property was mortgaged as collateral and the business cannot repay, that property remains at stake: the lender can enforce the security. Unlimited liability and collateral enforcement can both put the pledged private asset at risk when default occurs.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.28'] = [
    "TRUE — When business debts exceed what firm resources can cover, unlimited liability lets creditors pursue the sole proprietor's private assets for the shortfall. That personal reach is the insolvency principle the stem asks for.\n\nThe statement is true.",
    'FALSE — There is no such thing as incorporating informally as a sole trader. Sole proprietorship remains unincorporated; creditor claims are not limited to balance-sheet business assets. Limited claims of that sort belong to limited companies, not to this form.\n\nThe statement is false.',
    'FALSE — Employees do not share unlimited liability equally with the owner. Residual responsibility for business obligations stays with the sole proprietor. Wages do not convert staff into co-liable owners.\n\nThe statement is false.',
    'FALSE — Lack of separate legal personality does not dissolve trade credit obligations. Amounts owed to suppliers remain payable by the proprietor. Unincorporated status explains personal exposure; it does not make payables disappear.\n\nThe statement is false.',
    'FALSE — Unlimited liability covers business debts and obligations generally, not only formal external borrowing. Trade payables, unpaid expenses, and other obligations can all engage personal exposure. Confining unlimited liability to bank-style external loans is too narrow.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.29'] = [
    'TRUE — After a business current account is opened, an overdraft facility lets the balance go negative within a limit. That supplies flexible short-term credit to bridge seasonal gaps between receipts and payments without arranging a new term loan each time.\n\nThe statement is true.',
    'FALSE — An overdraft is a banking product, not an incorporation event. It does not convert the sole proprietorship into a corporation or create limited liability. Legal form and liability regime stay as they were.\n\nThe statement is false.',
    "FALSE — Short maturity does not remove liability recognition. An overdrawn balance is still an amount owed to the bank and counts among the proprietor's business liabilities until cleared.\n\nThe statement is false.",
    'FALSE — Overdraft interest is charged when the account is overdrawn (on the borrowed amount), not on a full positive balance sitting safely in credit. Charging interest on a healthy positive balance as if it were borrowed misstates overdraft pricing.\n\nThe statement is false.',
    "FALSE — The account may be the proprietor's business account, but the overdraft funds are bank credit. Classification is external short-term debt finance, not internal finance generated by the firm.\n\nThe statement is false.",
]

PATCHES['CASE 4.1.30'] = [
    'TRUE — Trade credit rests on a supplier agreement that allows payment later than delivery or invoice. Deferred settlement under agreed terms is the financing arrangement between sole trader and materials suppliers.\n\nThe statement is true.',
    'FALSE — Trade credit must be repaid at the end of the credit period. It is external short-term finance from the supplier, not internal finance, and it does carry a repayment obligation.\n\nThe statement is false.',
    'FALSE — Deferring payment changes when cash leaves; it does not remove the need to plan cash-flow timing. The proprietor must still ensure funds are available when the credit period ends. Trade credit relocates the timing problem; it does not abolish it.\n\nThe statement is false.',
    'TRUE — Until the invoice is paid, the outstanding supplier balance is an external short-term liability. External describes the supplier as outside financier; short-term describes the usual purchase-cycle maturity.\n\nThe statement is true.',
    'TRUE — With trade credit the business need not pay for all purchases immediately; it receives a credit period before settlement. That delay is the liquidity benefit of the arrangement.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.31'] = [
    'TRUE — Owner investment from personal funds is classified as an external source in this framework: it enters from outside retained trading surplus. It is a primary way sole proprietors raise capital beyond what operations have already earned.\n\nThe statement is true.',
    'TRUE — When outside investors provide capital to the business, those funds are external finance. They expand resources when personal savings alone are not enough.\n\nThe statement is true.',
    'TRUE — Bank and other creditor funds are external sources that create repayment duties under the credit agreement. Interest and schedule terms define how that external debt must be serviced.\n\nThe statement is true.',
    'TRUE — If personal wealth is limited, the proprietor struggles to fund establishment even though legal barriers are low. Scarce personal resources make set-up very difficult unless other external finance is obtained.\n\nThe statement is true.',
    "TRUE — Launching a sole tradership typically begins with the proprietor's own savings as initial funding before or alongside later investor or bank support. Owner savings are the common starting block.\n\nThe statement is true.",
]

PATCHES['CASE 4.1.32'] = [
    'TRUE — Internal sources matter because they do not require paying interest or similar financial charges to outside lenders. Avoiding those borrowing costs is the practical advantage when reinvested earnings or asset sales can meet the need.\n\nThe statement is true.',
    "TRUE — Once revenues exceed expenses, profit retained and put back into the business is internal finance. The funding is the firm's own surplus.\n\nThe statement is true.",
    'TRUE — Selling assets that are no longer needed converts idle owned resources into cash inside the firm. That cash is internal finance available for other uses.\n\nThe statement is true.',
    'TRUE — Disposing of surplus equipment likewise releases internal funds for reinvestment without creating a new creditor relationship. No borrowing means no new interest-bearing liability from that step.\n\nThe statement is true.',
    'FALSE — Finance source and liability regime are separate. Using internal finance avoids interest on that slice of funding; it does not abolish unlimited liability for business debts. The proprietor still bears personal exposure for obligations of the firm.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.33'] = [
    'FALSE — Banks offer both short-term and long-term credit to sole proprietors. Overdrafts and other facilities with duration under a year are common short-term products. Claiming banks offer only long-term credit and never short-term facilities is false.\n\nThe statement is false.',
    'TRUE — A bank overdraft is among the most common short-term credits for sole traders: flexible, linked to the current account, and typically intended to cover temporary needs within the year.\n\nThe statement is true.',
    'TRUE — Trade credit from suppliers is also typically short-term, aligned with purchase and invoice cycles rather than multi-year project finance.\n\nThe statement is true.',
    'FALSE — Quick repayment does not erase the liability while the amount is outstanding. Short-term credit is recorded as a liability until paid. Speed of expected settlement does not mean “never recorded.”\n\nThe statement is false.',
    'FALSE — Pledging land and property as collateral secures the lender; it does not cancel the loan as a liability. The mortgage loan remains payable according to its terms even after collateral is in place.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.34'] = [
    'TRUE — Owner savings invested at start-up are treated as an external source: they are not retained trading profit. Most sole proprietors begin with that external owner injection.\n\nThe statement is true.',
    'FALSE — The two are classified differently. Start-up owner savings are external; retained profit from later years is internal. Bundling both as internal finance erases that distinction.\n\nThe statement is false.',
    "TRUE — After successful trading, profit kept and reinvested is internal finance generated by operations. That label applies specifically to retained surplus, not to the owner's original savings.\n\nThe statement is true.",
    'FALSE — Bank credit and trade credit remain external even when the cash or goods are in the business. Holding funds in the business account does not convert creditor finance into an internal source.\n\nThe statement is false.',
    'FALSE — Investor funds obtained when savings are insufficient are external capital from outside parties. They are not internal operating cash generated by the firm.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.35'] = [
    'TRUE — When revenues exceed expenses, a surplus exists. The sole trader can retain and reinvest it—or withdraw it. Retention for working capital happens only if the proprietor leaves the profit in the business.\n\nThe statement is true.',
    'TRUE — Selling obsolete equipment no longer needed turns an owned asset into cash without taking an interest-bearing loan. That is internal finance without interest charges from creditors.\n\nThe statement is true.',
    'TRUE — More generally, internal sources avoid financial charges such as interest paid on borrowed funds, which is why reinvestment and asset disposal are useful when they can cover the need.\n\nThe statement is true.',
    'TRUE — Reinvested surplus funds operations without creating a new creditor liability for that funding slice. No lender is owed repayment on retained profit itself.\n\nThe statement is true.',
    'FALSE — Once profit is withdrawn for personal spending, it has left the business. It is no longer available as internal finance for the firm. Withdrawal and internal reinvestment are mutually exclusive uses of the same surplus.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.36'] = [
    'FALSE — Using property as mortgage collateral is a security arrangement for a loan. It does not automatically incorporate the sole proprietorship as a limited company. Legal form changes only through formal incorporation, not through pledging assets.\n\nThe statement is false.',
    "FALSE — Collateral reduces the lender's risk; it does not oblige creditors to waive all interest. Long-term loans secured by land and buildings still normally charge interest as the price of credit.\n\nThe statement is false.",
    'FALSE — Registering a mortgage puts the pledged assets at stake if default occurs; it does not completely protect them from claims. The point of collateral is enforceability against those assets, not immunity for them.\n\nThe statement is false.',
    'TRUE — Both a short-term overdraft and a long-term mortgage loan create amounts the sole proprietor owes. Different maturities, same status as liabilities.\n\nThe statement is true.',
    "FALSE — Pledging collateral does not remove the loan from the liability side. Long-term mortgaged credit remains a liability until repaid; security backs the claim, it does not exclude it from the proprietor's obligations.\n\nThe statement is false.",
]

PATCHES['CASE 4.1.37'] = [
    "TRUE — Because the form centres on one person, the business's financial funds mainly track what that sole proprietor can provide or attract. Personal financial capability heavily shapes the funding envelope.\n\nThe statement is true.",
    'TRUE — Owner investment, investor funds, and creditor loans all enter from outside retained operations, so they are external sources in the standard classification.\n\nThe statement is true.',
    "TRUE — Retained profit and sale of unused assets arise from the firm's own resources once operations are under way, so they are internal sources.\n\nThe statement is true.",
    'FALSE — Unlimited liability is not confined to external borrowing. It covers business debts and obligations broadly—including obligations that arise even when funding has been internal. Narrowing it to creditor loans alone is incorrect.\n\nThe statement is false.',
    'TRUE — Whether the instrument is a short-term overdraft or a long-term mortgage, the credit is a liability of the sole proprietor until discharged.\n\nThe statement is true.',
]

PATCHES['CASE 4.1.38'] = [
    'TRUE — A retail sole proprietor may hire sales staff for daily customer service when support is needed. Employment expands capacity without changing the ownership form.\n\nThe statement is true.',
    "FALSE — Hiring sales staff does not permanently transfer the most important management decisions to employees. Staff serve customers under the owner's direction; strategic and key managerial authority remains with the proprietor.\n\nThe statement is false.",
    'TRUE — Despite assistants on the floor, the proprietor must still make key management decisions and accept the associated business risk, including unlimited liability. Delegation of service tasks is not transfer of residual control and risk.\n\nThe statement is true.',
    'TRUE — Even with staff present, management largely depends on the sole proprietor. The organisational centre stays with the owner-manager.\n\nThe statement is true.',
    'FALSE — Employees do not assume unlimited liability in proportion to wages. Personal exposure for business debts stays with the sole proprietor; pay levels do not allocate owner liability to staff.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.39'] = [
    'FALSE — Lack of separate legal personality does not ban hiring. Sole traders routinely employ staff. Saying personnel cannot be hired under any circumstances is false.\n\nThe statement is false.',
    'TRUE — The same point affirmatively: an unincorporated sole proprietorship may still hire personnel when support is required. Operational capacity includes employment even without corporate personality.\n\nThe statement is true.',
    'FALSE — Sole proprietors can and do enter contracts with suppliers and banks; the contracts bind the owner personally. Absence of separate legal personality changes who is bound, not whether contracting is possible.\n\nThe statement is false.',
    'FALSE — Headcount does not trigger automatic incorporation. Becoming a limited company requires formal incorporation steps, not merely hiring a second employee.\n\nThe statement is false.',
    'FALSE — Hiring does not transfer ownership to the workforce. Employees remain employees; the sole proprietor remains the owner unless an explicit ownership transfer occurs.\n\nThe statement is false.',
]

PATCHES['CASE 4.1.40'] = [
    'TRUE — Long-term illness removes or impairs the person on whom management depends. Continuity problems may therefore occur until the proprietor recovers or a transfer arrangement is made.\n\nThe statement is true.',
    'FALSE — Employees do not legally become co-owners automatically when the owner is ill. Without a transfer, ownership is unchanged, and continuity can still suffer. The “no continuity effect” claim is false.\n\nThe statement is false.',
    'FALSE — Prolonged inability to work does not automatically convert a sole proprietorship into a partnership. Partnership requires a multi-owner founding arrangement, not mere absence of the owner.\n\nThe statement is false.',
    'TRUE — Retirement plans likewise threaten continuity because the controlling owner intends to step away. Without succession or sale arrangements, the business can face interruption.\n\nThe statement is true.',
    'FALSE — Dependence on one manager makes succession planning more pressing, not less, compared with firms that can transfer ownership shares while the legal person continues. The statement reverses the urgency.\n\nThe statement is false.',
]

