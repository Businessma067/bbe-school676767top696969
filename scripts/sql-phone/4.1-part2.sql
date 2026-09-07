-- Update expanded explanations for 4.1-part2 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Operating surplus creates profit available for retention or withdrawal.

Applied carefully, "When revenues exceed expenses, the business makes a profit that can be retained and reinvested" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reinvested earnings are an internal funding source.

Applied carefully, "Profit retained in the business rather than withdrawn by the proprietor counts as internal finance" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'The proprietor may withdraw profit rather than retain it.

Applied carefully, "The sole proprietor may take profit out of the business instead of reinvesting it for expansion" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal funds avoid borrowing costs such as interest.

Applied carefully, "Retained profit reinvested avoids the financial charges associated with creditor borrowing" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal finance carries no creditor interest charges.

Applied carefully, "Using internally generated funds avoids interest payments that external creditors would charge" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.26' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Retained profit is internal finance and involves no creditor collateral.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Lenders commonly demand security for longer-term exposure.

Applied carefully, "Financial institutions typically require pledgeable assets as collateral when granting long-term credit" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mortgages on land and property frequently back long-term loans.

Applied carefully, "Property-backed mortgages commonly secure long-term bank lending to sole proprietors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Credit agreements specify repayment periods and interest as the rate of return.

Applied carefully, "The creditor provides money for a certain time period that must be repaid according to the agreement, usually with interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mortgaged private property can be claimed upon default.

Applied carefully, "If private property served as mortgage collateral, it remains at stake when the business cannot repay the loan" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.27' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unlimited liability extends creditor reach to personal property.

Applied carefully, "When business debts exceed firm resources, unlimited liability allows creditors to reach the sole proprietor''s private assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole proprietorships are unincorporated and do not confer limited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Employees do not assume the proprietor''s unlimited liability.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Lack of legal personality does not cancel trade credit liabilities.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unlimited liability covers all business debts, not only external borrowing.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.28' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Overdrafts are flexible short-term credit linked to a business bank account.

Applied carefully, "Once a business current account is opened, an overdraft facility can provide flexible short-term credit for cash shortfalls" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Overdraft arrangements do not change legal structure or liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Short-term credit still counts as a liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdraft interest applies only when the account is overdrawn, not on positive balances.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts are external short-term credit from the bank, not internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.29' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Supplier agreements define deferred payment terms.

Applied carefully, "Trade credit is based on an agreement with the supplier allowing deferred payment for purchases" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit is external short-term finance, not internal.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Trade credit assists timing but repayment obligations remain.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Payables to suppliers are liabilities of the sole proprietor.

Applied carefully, "Outstanding supplier balances from trade credit are external short-term liabilities until payment is made" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Purchases may be settled after an agreed credit period.

Applied carefully, "A business using trade credit does not have to pay all purchases immediately but receives a credit period" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.30' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Owner injection from personal wealth is external to operating surplus.

Applied carefully, "The owner''s investment from personal funds is an external source of finance for the sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor contributions enter from outside the firm.

Applied carefully, "Financial funds from investors who provide capital to the business are external sources of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Bank credit is external finance creating repayment duties.

Applied carefully, "Funds from creditors such as banks are external sources that must be repaid according to the credit agreement" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Insufficient personal funds constrain establishment.

Applied carefully, "Limited personal wealth makes it very difficult for a sole proprietor to set up the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Personal savings commonly provide initial external finance at launch.

Applied carefully, "Launching a sole tradership typically begins with the proprietor''s own savings as initial funding" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.31' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal funds avoid borrowing costs like interest.

Applied carefully, "Internal sources of finance are important because no financial charges such as interest have to be paid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reinvested surplus is generated within operations.

Applied carefully, "Retained profit reinvested in the business is an internal source of finance once revenues exceed expenses" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Disposing unused assets releases internal funds.

Applied carefully, "Sale of assets that are not needed anymore can provide internal finance for the sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset sales supply internal finance without external borrowing.

Applied carefully, "Disposing of surplus equipment can release internal funds for reinvestment without borrowing from creditors" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Liability structure is unchanged by the finance source used.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.32' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Banks offer both short-term and long-term credit to sole proprietors.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Overdrafts are a standard short-term facility.

Applied carefully, "A bank overdraft is among the most common forms of short-term credit for a sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Supplier credit periods cover near-term purchases.

Applied carefully, "Trade credit from suppliers typically functions as short-term finance for purchase obligations" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Short-term credit remains a liability until repaid.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Mortgage loans remain liabilities despite property collateral.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.33' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Initial savings are owner investment from outside operating surplus.

Applied carefully, "Most sole proprietors invest their own savings as an external source of finance when starting the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Start-up savings are external; only later retained profit is internal.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Reinvested earnings originate within the business.

Applied carefully, "Retained profit reinvested after successful trading is an internal source of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Creditor and supplier credit are external liabilities.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investor capital supplements owner funds from outside.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.34' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Surplus may be kept in the firm or taken by the owner.

Applied carefully, "When revenues exceed expenses, profit can be retained and reinvested unless withdrawn by the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset disposal releases internal funds without borrowing.

Applied carefully, "Sale of assets no longer needed provides internal finance without incurring interest charges" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal funding avoids creditor interest costs.

Applied carefully, "Internal sources of finance avoid financial charges such as interest paid on borrowed funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Retained earnings kept in the firm supply internal finance.

Applied carefully, "Reinvested surplus can fund operations without creating creditor liabilities for the sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Withdrawn profit leaves the business and is no longer internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.35' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Mortgage collateral does not change the unincorporated legal structure.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Credit agreements still specify interest as the rate of return.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Collateral assets can be claimed upon default.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'All credit forms create repayment obligations.

Applied carefully, "Short-term overdrafts and long-term mortgage loans both create liabilities for the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mortgage loans remain liabilities despite collateral.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.36' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Available funds reflect the proprietor''s financial capacity.

Applied carefully, "Financial funds of the business mainly depend on the financial capabilities of the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'These funds enter from outside accumulated internal surplus.

Applied carefully, "Owner investment, investor funds, and creditor loans are external sources of finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reinvested earnings and asset sales fund from within.

Applied carefully, "Retained profit and sale of unused assets are internal sources of finance once operations are under way" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability applies to all business debts regardless of finance source.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Every credit arrangement creates repayment duty.

Applied carefully, "All credit, whether short-term overdraft or long-term mortgage, is a liability for the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.37' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Staff may be recruited to support operations.

Applied carefully, "The sole proprietor can hire personnel when support is needed to operate the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Strategic authority stays with the proprietor, not employees.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Ultimate decisions and risk remain with the owner.

Applied carefully, "Despite employed assistants, the proprietor must make the key management decisions and accept the associated business risk" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'The proprietor retains central management responsibility.

Applied carefully, "Management of the business largely depends on the sole proprietor even when staff are present" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees do not share the proprietor''s unlimited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.38' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status does not bar employment.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Sole traders may recruit staff despite lacking separate legal personality.

Applied carefully, "A sole proprietorship that is not a legal entity of its own may still hire personnel when support is required" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Sole traders routinely contract with suppliers and banks.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Employment does not incorporate the business or change liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Employees do not acquire ownership; the sole proprietor remains the owner.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.39' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Prolonged absence disrupts management continuity.

Applied carefully, "Continuity problems may occur if the sole proprietor suffers a long-term illness" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Employees do not automatically acquire ownership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Temporary absence does not change the legal structure to a partnership.

The absolute wording "automatically" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Retirement removes the central owner-manager.

Applied carefully, "Retirement plans of the sole proprietor can create continuity problems for the business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Single ownership makes succession planning more pressing, not less.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.40' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Single ownership and management define the form.

Applied carefully, "One person owns, manages, and runs the business as a sole proprietorship" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No minimum capital is required.

Applied carefully, "Establishment is easy with no financial requirements to start this kind of business" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unincorporated profits are personal income.

Applied carefully, "Profits are taxed on the owner''s personal income tax statement because the firm is not a legal entity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability exposes personal wealth.

Applied carefully, "The sole proprietor faces unlimited liability with private assets also at stake" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal funds avoid interest; external credit carries repayment costs.

Applied carefully, "Internal finance from retained profit avoids interest charges, while external credit creates liabilities with interest" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.41' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Borrowing does not limit the proprietor''s unlimited liability.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Investors and banks supplement personal resources.

Applied carefully, "Extra money can be sought from investors and/or from banks when the sole proprietor needs additional funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Owner investment plus investor and creditor funds are external sources of finance.

Applied carefully, "Capital contributed by the owner together with investor funds and creditor finance counts as external finance for the firm" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Credit agreements require repayment with interest regardless of asset use.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Limited personal funds make establishment very difficult.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.42' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit remains short-term purchase finance despite deferral.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdraft interest applies during overdrawn periods only.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdrafts and trade credit cover near-term needs.

Applied carefully, "Short-term credit includes bank overdrafts and trade credit with duration typically less than a year" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Mortgage loans remain liabilities despite collateral.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Every credit form creates repayment obligations.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.43' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Available capital reflects the owner''s financial position.

Applied carefully, "The amount of finance available to the business is closely tied to the sole proprietor''s personal financial capacity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'No such capital requirement applies to sole proprietorships.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Voluntary owner investment from savings is common despite no minimum rule.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Personal savings commonly fund initial operations.

Applied carefully, "Most sole proprietors invest their own savings in their business at the start" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Initial owner investment from savings is external finance at start-up.

The absolute wording "entirely" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.44' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Internal finance avoids creditor interest charges.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Credit agreements require repayment with interest regardless of revenue.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Retained profit is internal and does not incur borrowing interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Overdraft interest applies during overdrawn periods only.

Applied carefully, "Using a bank overdraft means interest is paid only when the account is overdrawn" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Trade credit is a payable liability until settled.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.45' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Trade credit is supplier agreement finance, not typically mortgage-backed.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Long-term lenders commonly demand security.

Applied carefully, "Long-term lenders commonly insist on pledgeable assets as security when extending credit beyond one year" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Property mortgages frequently back long-term loans.

Applied carefully, "Mortgage arrangements often tie long-term bank loans to land and property owned by the proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Pledged assets can be seized upon default.

Applied carefully, "If private assets served as collateral and the business fails, those assets remain at stake" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Unlimited liability persists; collateral does not remove broader exposure.

The absolute wording "all" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.'] WHERE case_id = 'CASE 4.1.46' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated profits are personal taxable income.

Applied carefully, "Profits are reported on the owner''s personal income tax statement because the business is not a legal entity" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Reinvested surplus is internal and avoids borrowing costs.

Applied carefully, "Retained profit reinvested rather than withdrawn supplies internal finance without interest charges" lines up with the textbook idea without adding an extra restriction.

The comparison runs in the right direction and attaches the feature to the correct side of the pair.

The statement is true.', 'There is no separate corporate tax on retained earnings for a sole trader.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'External finance enters from investors and creditors.

Applied carefully, "Funds from investors and banks are external sources that create liabilities or ownership claims from outside" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Asset disposal releases internal funds during operations.

Applied carefully, "Sale of unused assets can provide internal finance once the business is operating" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.47' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Liability structure is independent of funding source.

Applied carefully, "The sole proprietor is liable for all debts and obligations regardless of whether finance is internal or external" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Personal wealth remains exposed under unlimited liability.

Applied carefully, "Private assets are also at stake if the business fails and debts need to be repaid" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'All credit forms create repayment duties.

Applied carefully, "Bank overdrafts, trade credit, and long-term loans all count as liabilities for the sole proprietor" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal finance does not remove unlimited liability for business debts.

Applied carefully, "Unlimited liability applies even when the sole proprietorship relies on retained profit or asset sales for finance" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Internal and external finance alike leave the proprietor fully liable.

Applied carefully, "Unlimited liability applies to all business debts and is not limited to externally borrowed funds" lines up with the textbook idea without adding an extra restriction.

The statement is true.'] WHERE case_id = 'CASE 4.1.48' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Unincorporated status does not prevent hiring personnel.

The absolute wording "cannot" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Unincorporated profits are personal taxable income.

Applied carefully, "Because the business lacks separate legal personality, operating profits are included on the proprietor''s personal income tax return" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'External versus internal classification follows the textbook definitions.

Applied carefully, "Owner savings and bank credit are external sources; retained profit and asset sales are internal sources" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Credit creates liabilities under unlimited liability reaching private assets.

Applied carefully, "All credit including overdrafts and trade credit creates liabilities, and unlimited liability exposes private assets" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Single-person dependence creates succession and continuity risk.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.49' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Strategic authority remains with the proprietor despite hired staff.

Applied carefully, "The sole proprietor retains the most important management decisions even when employees handle routine tasks" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Easy start-up does not remove continuity risk or unlimited liability.

The absolute wording "never" is what breaks the claim. One ordinary counterexample is enough to reject a universal statement like this.

The statement is false.', 'Retained profit is internal finance and does not incur creditor interest.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.', 'Operating surplus may be reinvested or taken personally.

Applied carefully, "If revenues exceed expenses, profit may be retained for reinvestment unless the proprietor withdraws it" lines up with the textbook idea without adding an extra restriction.

The statement is true.', 'Investor and bank funds are external sources, not internal finance.

The familiar topic word is not enough. A scope detail, a swapped comparison, or a wrong classification makes the whole sentence fail.

The statement is false.'] WHERE case_id = 'CASE 4.1.50' AND tier = 'full';
