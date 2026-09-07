-- Update expanded explanations for 4.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ownership and day-to-day management rest with a single proprietor.

Applied carefully, "A sole proprietorship is a business owned by one person who also manages and runs the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Centralised control allows the proprietor to decide without mandatory consultation.

Applied carefully, "The sole proprietor can make all management decisions without necessarily having to consider other opinions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Without separate legal personality, business profits are taxed as personal income.

Applied carefully, "Because the business is not a legal entity of its own, profits are reported on the owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A sole proprietorship lacks separate legal personality and is not taxed as a corporation.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Dependence on one manager creates continuity risk when the proprietor retires or falls ill.

Applied carefully, "Retirement or long-term illness of the sole proprietor may create continuity problems for the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['No minimum capital requirement makes sole proprietorships straightforward to set up.

Applied carefully, "Sole proprietorships are easy to establish, especially for small businesses, because there are no financial requirements to start this kind of business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietors face unlimited liability; private assets are also at stake.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Personal assets can be used to satisfy creditors when business funds fall short.

Applied carefully, "Unlimited liability means creditors may reach the proprietor''s personal property when business debts must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietorships remain unincorporated and carry unlimited, not limited, liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Trade credit is a liability the sole proprietor must repay according to the supplier agreement.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['The firm lacks independent legal personality distinct from its owner.

Applied carefully, "A sole proprietorship is not a legal entity of its own separate from the business owner" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Business profits are assessed as the proprietor''s personal taxable income.

Applied carefully, "The owner pays tax on the profits that are earned from the business through the personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Key strategic and management choices remain with the sole proprietor.

Applied carefully, "Management of the business largely depends on the sole proprietor, who retains responsibility for the most important decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Lack of separate legal personality does not prevent hiring staff or contracting with suppliers.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Personnel may be employed, yet the proprietor keeps ultimate decision authority and risk.

Applied carefully, "If the sole proprietor needs support, he or she can hire personnel while still bearing the central management role" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Sole proprietors may recruit employees to support operations.

Applied carefully, "The sole proprietor may hire personnel when additional support is required to run the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees do not assume the proprietor''s unlimited liability for business obligations.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Ultimate decisions and business risk stay with the sole proprietor despite hired help.

Applied carefully, "Even with hired personnel, it remains the sole proprietor''s task to make the most important management decisions and take all the risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Centralised authority allows unilateral management choices.

Applied carefully, "The sole proprietor can make all management decisions and does not necessarily have to consider other opinions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reliance on one manager creates continuity risk during prolonged absence.

Applied carefully, "Continuity of the business may be disrupted when the sole proprietor cannot continue managing due to long-term illness" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A sole proprietorship remains unincorporated and is not a separate legal entity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Without corporate personality, profits are taxed as the owner''s personal income.

Applied carefully, "Profits earned by a sole proprietorship are directly reported on the business owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'There are no financial requirements to start a sole proprietorship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietors face unlimited liability; private assets are also at stake.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shared ownership and equal responsibilities align with a partnership structure, not sole tradership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Business continuity depends on the proprietor; retirement creates continuity problems without transfer.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Single-person dependence creates vulnerability at retirement or prolonged illness.

Applied carefully, "Continuity problems may occur if the sole proprietor wants to retire or suffers a long-term illness" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Lack of separate shares or partners can complicate orderly succession.

The absolute wording "always" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Staff cannot automatically become owners; ownership rests with the sole proprietor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Central management authority remains with the sole proprietor throughout operations.

Applied carefully, "The management of the business largely depends on the sole proprietor, who retains the most important decision rights" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unlimited liability makes the proprietor responsible for all business debts.

Applied carefully, "The sole proprietor is liable for all debts and obligations of the business under unlimited liability" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability covers all debts and obligations, including long-term secured credit.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-term lenders commonly demand collateral such as land or property.

Applied carefully, "Creditors usually ask for assets that can serve as collateral, especially for long-term credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Creditors may reach personal property when business funds are insufficient.

Applied carefully, "Private assets of the sole proprietor are also at stake if the business fails and debts need to be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Collateral reduces lender risk but does not remove broader unlimited liability exposure.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Absence of corporate personality routes profits to personal taxation.

Applied carefully, "Because the sole proprietorship is not a legal entity, profits are reported on the owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Business profits remain taxable as the owner''s personal income.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'The proprietor pays income tax on business earnings as personal income.

Applied carefully, "The owner pays tax on the profits earned from the business rather than through a separate corporate tax return" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Combined personal reporting reflects the unincorporated structure.

Applied carefully, "Business profits and the proprietor''s other personal income may appear on the same personal tax assessment" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietorships lack separate legal personality yet profits are taxed personally.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['One person owns and runs the business in a sole proprietorship.

Applied carefully, "A sole proprietorship combines ownership and day-to-day management in a single individual without separate partners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Minimal formal capital requirements facilitate establishment.

Applied carefully, "Sole proprietorships are easy to establish, especially for small businesses, with no financial requirements to start" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Profits flow to the owner''s personal tax without corporate separation.

Applied carefully, "The business is not a legal entity of its own, so profits are taxed on the owner''s personal income statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Creditors may reach personal property under unlimited liability.

Applied carefully, "Unlimited liability means the sole proprietor''s private assets are also at stake when business debts must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Staff may assist operations but the proprietor keeps decisive authority.

Applied carefully, "If the sole proprietor needs support, personnel may be hired while the proprietor retains key management decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Without incorporation, the business is not an independent legal person.

Applied carefully, "A sole proprietorship lacks the separate legal personality that allows a corporation to sue and be sued in its own name" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Taxation follows the owner personally because there is no separate entity.

Applied carefully, "Profits of a sole proprietorship are reported on the business owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability exposes personal wealth to business failure.

Applied carefully, "Under unlimited liability, creditors may pursue the proprietor''s private assets when business debts remain unpaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No minimum capital requirement lowers barriers to starting a sole tradership.

Applied carefully, "Easy establishment with no capital requirements makes sole proprietorships accessible for small businesses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dependence on one manager creates continuity risk.

Applied carefully, "Continuity problems may arise if the sole proprietor suffers a long-term illness or wishes to retire" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['No co-owners require consultation for management choices.

Applied carefully, "The sole proprietor can make all management decisions without necessarily consulting other owners" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Ultimate decisions and risk remain with the sole proprietor.

Applied carefully, "It remains the sole proprietor''s task to make the most important management decisions and take all the risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'There is no corporate board; the proprietor directs the firm.

Applied carefully, "Management of the business largely depends on the sole proprietor rather than on a separate board of directors" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Delegation of routine work does not remove the proprietor''s decisive role.

Applied carefully, "Even when administrative tasks are delegated, the proprietor retains authority over the most important management decisions" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees execute tasks; strategic authority stays with the proprietor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Minimal entry barriers make sole tradership accessible for small ventures.

Applied carefully, "Sole proprietorships are easy to establish because there are no financial requirements to start this kind of business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Single ownership and management define the structure.

Applied carefully, "A sole proprietorship is owned and managed by one person who bears the central operational responsibility" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reliance on one individual creates succession and continuity risk.

Applied carefully, "Stepping away through retirement or prolonged illness may interrupt continuity in a sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investors and banks can supply finance when personal resources are insufficient.

Applied carefully, "Extra money can be sought from investors and/or from banks when personal funds prove insufficient" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated status routes profits to personal taxation.

Applied carefully, "Because the firm is not a legal entity, profits are taxed on the owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Registration of a name does not create separate legal personality.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Hiring staff and tax registration do not incorporate the business.

Applied carefully, "A sole proprietorship remains unincorporated even when the owner registers for tax and hires multiple employees" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated status routes profits to personal income tax.

Applied carefully, "The sole proprietor pays personal income tax on business profits because the business is not a legal entity of its own" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Every credit arrangement creates a repayment liability for the proprietor.

Applied carefully, "All kinds of credit, short-term as well as long-term, are liabilities for the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained profit is internal finance and involves no creditor collateral.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Single ownership and management align with sole tradership.

Applied carefully, "A sole proprietorship suits one owner who both manages the business and accepts the associated risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietorship has one owner; co-ownership requires a different structure.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited liability and share transfer belong to incorporated forms, not sole tradership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Shared tasks, risk, and equal rights fit a partnership rather than sole ownership.

Applied carefully, "Two persons who want to share tasks and risk with equal rights would better realise their business as a partnership" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Joint founding with equal rights requires a partnership agreement, not sole tradership.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated profits flow to the owner''s personal tax.

Applied carefully, "Business profits of an unincorporated sole trader flow directly onto the owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Absence of legal separation links business profit to personal taxation.

Applied carefully, "The owner pays tax on profits earned from the business because the firm is not a separate legal entity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Dividends are a corporate concept; sole traders report profits directly as personal income.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Business profits remain taxable even without incorporation.

Applied carefully, "Operating without corporate personality does not exempt the proprietor from tax on business profits" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietorships report through personal income tax, not a corporate return.

The absolute wording "every" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit must be repaid within the agreed supplier credit period.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Supplier credit is a payable liability under the agreed terms.

Applied carefully, "Trade credit from a supplier creates a short-term liability that the sole proprietor must honour" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Collateral reduces lender risk but unlimited liability still exposes the proprietor broadly.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Personal assets can satisfy creditors when business assets are insufficient.

Applied carefully, "If the business fails, private assets are also at stake when debts need to be repaid beyond available business funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Every credit form creates proprietor liability.

Applied carefully, "All kinds of credit, whether short-term or long-term, remain obligations of the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Registration of a name does not create separate legal personality.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Equal shared management requires a partnership or other multi-owner form.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Unincorporated status routes profits to personal income tax.

Applied carefully, "Because the firm lacks separate legal personality, business profits are assessed as the proprietor''s personal income" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'A bank account alone does not confer limited liability or incorporation.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Employment does not change legal structure or liability status.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['No financial requirements apply to starting a sole proprietorship.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietorships lack separate legal personality and are not taxed as corporations.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Sole proprietors carry unlimited liability extending to private assets.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Business earnings are taxed as the proprietor''s personal income.

Applied carefully, "The owner pays tax on profits earned from the business through personal income taxation" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'There is no separate corporate tax entity for a sole trader.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Ownership and management converge in one individual.

Applied carefully, "One person owns, manages, and runs the business while retaining the most important decision authority" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated profits are personal taxable income.

Applied carefully, "Without separate legal personality, business profits are assessed on the owner''s personal income tax statement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No minimum capital is required to begin trading.

Applied carefully, "No minimum capital requirement applies when establishing a sole proprietorship for a small business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Creditors may reach beyond business assets under unlimited liability.

Applied carefully, "Unlimited liability means private assets are also at stake if business debts must be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Single-person dependence creates continuity risk.

Applied carefully, "Continuity problems may occur when the sole proprietor retires or suffers long-term illness" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Profit kept in the firm supplies internal finance once operations generate surplus.

Applied carefully, "Retained profit reinvested in the business counts as an internal source of finance for the sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner investment from outside the operating cycle is external finance.

Applied carefully, "The owner''s initial investment from personal savings is classified as an external source of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained profit and asset sales are internal sources generated within the business.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Bank credit is external finance regardless of which account receives the funds.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Internal funds do not carry interest charges unlike creditor finance.

Applied carefully, "Internal sources of finance avoid financial charges such as interest that apply to borrowed funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Overdraft facilities provide flexible short-term withdrawal beyond the account balance.

Applied carefully, "A bank overdraft is a flexible short-term credit instrument once a business bank account has been opened" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Suppliers may grant a credit period before payment is due.

Applied carefully, "Trade credit allows a business to defer payment for purchases according to an agreement with the supplier" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdraft interest accrues when the account balance falls below zero.

Applied carefully, "Interest on a bank overdraft is paid only when the account is overdrawn" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Property-backed mortgages commonly secure long-term bank lending.

Applied carefully, "Long-term bank loans are often based on land and property serving as collateral through a mortgage arrangement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit typically covers short-term purchase obligations, not long-term finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner savings are a common external funding source at establishment.

Applied carefully, "Most sole proprietors invest their own savings in their business as an external source of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Limited personal funds constrain the ability to launch and operate.

Applied carefully, "If the sole proprietor lacks financial funds, setting up the business will be very difficult" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Start-up savings are owner investment (external), not retained operating profit (internal).

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Voluntary owner investment from savings is common despite no minimum rule.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Available funds largely reflect the proprietor''s financial capacity.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Proceeds from disposing unused assets are internal funds, not external creditor finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Owner investment is external finance even though ownership is unified.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Reinvested profit remains inside the business as internal finance.

Applied carefully, "Retained profit that is reinvested rather than withdrawn by the proprietor supplies internal finance" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'Investors and banks provide external finance regardless of the receiving account.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Internal finance avoids interest charges; it is not a loan from the owner-as-creditor.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner, investor, and creditor funds enter from outside accumulated internal surplus.

Applied carefully, "The owner''s investment and funds from investors and creditors are external sources of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings and asset sales fund the firm from within.

Applied carefully, "Retained profit and sale of unneeded assets are internal sources of finance once operations generate surplus" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Every credit arrangement creates repayment obligations for the proprietor.

Applied carefully, "All kinds of credit, short-term and long-term, are liabilities for the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Surplus profit may be reinvested or taken by the proprietor.

Applied carefully, "If revenues exceed expenses, profit can be retained and reinvested unless the sole proprietor withdraws it" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability persists regardless of whether finance is internal or external.

Applied carefully, "Unlimited liability still applies to the sole proprietor whether finance is sourced internally or externally" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['No minimum capital requirement simplifies start-up.

Applied carefully, "Entry as a sole trader is straightforward because no financial requirements must be met before starting this type of business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Personal savings commonly seed the business.

Applied carefully, "Most sole proprietors invest their own savings when launching the venture" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investors and banks provide additional external funds when needed.

Applied carefully, "Extra money can be sought from investors and/or from banks when personal funds are insufficient" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Operating surplus can be reinvested alongside external finance.

Applied carefully, "Once operating, internal sources such as retained profit may supplement external borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Long-term lenders commonly demand security such as land or property.

Applied carefully, "Lenders extending long-term credit commonly require assets that can serve as collateral" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.25' AND tier = 'full';
