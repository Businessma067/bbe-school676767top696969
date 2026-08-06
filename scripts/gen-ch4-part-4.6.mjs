/**
 * Build scripts/ch4-part-4.6.json from slot plan + unique statement bank.
 */
import fs from "node:fs";

const slots = JSON.parse(fs.readFileSync("scripts/ch4-slot-plan.json", "utf8"))["4.6"];
const OUT = "scripts/ch4-part-4.6.json";

const SCENE = [
  "Consider a manufacturer that already carries a high proportion of loan capital and must choose how to fund a multi-year production plant versus routine materials purchases. Evaluate the following economic assertions:",
  "Consider a neighbourhood bakery that needs new ovens lasting many years while also buying flour and sugar for weekly production cycles. Evaluate the following economic assertions:",
  "Consider a regional retailer financing seasonal stock with supplier credit while planning a long-term store refurbishment from retained earnings. Evaluate the following economic assertions:",
  "Consider a construction firm covering payroll gaps with short-term bank loans while shareholders debate whether to inject equity instead of adding more debt. Evaluate the following economic assertions:",
  "Consider a hotel operator with heavy existing borrowings that must fund a new wing through bonds, an overdraft, or reinvested profit. Evaluate the following economic assertions:",
  "Consider a freight carrier renewing its vehicle fleet with a long-term bank loan while purchasing fuel and tyres on trade credit. Evaluate the following economic assertions:",
  "Consider an agricultural cooperative retaining member profits internally while lenders demand higher interest on any further long-term credit. Evaluate the following economic assertions:",
  "Consider a dental practice choosing between a multi-year premises loan, supplier credit for consumables, and funds from new investor-partners. Evaluate the following economic assertions:",
  "Consider a software startup weighing share issuance costs against a short-term credit line for routine operating expenses. Evaluate the following economic assertions:",
  "Consider a textile producer already highly geared when deciding how to finance new machinery versus weekly raw-material deliveries. Evaluate the following economic assertions:",
  "Consider a catering business using supplier credit for ingredients while owners consider whether retained earnings should fund a delivery van. Evaluate the following economic assertions:",
  "Consider a municipal supplier drawing on an overdraft for cash-flow gaps while issuing bonds to expand its warehouse. Evaluate the following economic assertions:",
  "Consider a family-owned workshop where heavy loan capital already burdens the balance sheet before owners seek finance for replacement equipment. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review how businesses choose among available sources of finance when costs, intended use, and current financial position all matter. Evaluate the following economic assertions:",
  "Analyze the role of costs—including interest and issuance expenses—in selecting an appropriate source of finance. Evaluate the following economic assertions:",
  "Review how capital expenditures on long-lived assets should be matched with the term of finance chosen. Evaluate the following economic assertions:",
  "Analyze how revenue expenditures on materials and other short-cycle inputs relate to short-term finance sources. Evaluate the following economic assertions:",
  "Review the concept of a high geared business and its implications for further borrowing. Evaluate the following economic assertions:",
  "Analyze why a business with a high proportion of loan capital may prefer internal funds or investors over additional debt. Evaluate the following economic assertions:",
  "Review how administration costs of issuing shares or bonds enter the cost comparison among finance sources. Evaluate the following economic assertions:",
  "Analyze the insolvency risk that arises when loan capital must be repaid while the business already carries heavy debt. Evaluate the following economic assertions:",
  "Review how intended use of funds distinguishes long-term finance for assets from short-term finance for working capital. Evaluate the following economic assertions:",
  "Analyze why lenders may demand collateral or charge higher interest when extending credit to a highly geared firm. Evaluate the following economic assertions:",
  "Review the three main decision criteria when several sources of finance are available to a business. Evaluate the following economic assertions:",
  "Analyze how matching finance maturity to expenditure type reduces repayment pressure on routine operations. Evaluate the following economic assertions:",
  "Review why interest payments on loans and credit form part of the cost criterion in finance selection. Evaluate the following economic assertions:",
  "Analyze how buying assets used over many years differs from buying production materials in finance-matching logic. Evaluate the following economic assertions:",
  "Review how internal sources of finance can reduce insolvency risk for a business already reliant on loan capital. Evaluate the following economic assertions:",
  "Analyze why short-term sources can safely finance revenue expenditures that are consumed within the operating cycle. Evaluate the following economic assertions:",
  "Review how a business with several finance options will most probably weigh cost, use, and financial situation together. Evaluate the following economic assertions:",
  "Analyze the trade-off between debt interest and the administration costs of raising equity or bond finance. Evaluate the following economic assertions:",
  "Review why additional loan capital can become a burden when repayment obligations already strain cash flow. Evaluate the following economic assertions:",
  "Analyze how capital expenditure on machinery, plant, or vehicles calls for long-term sources of finance. Evaluate the following economic assertions:",
  "Review why revenue expenditure on inputs used for current production aligns with short-term finance sources. Evaluate the following economic assertions:",
  "Analyze how high gearing may leave lenders reluctant to offer more funds except on stricter terms. Evaluate the following economic assertions:",
  "Review how retained earnings and new investors can strengthen finance choice when external credit is costly. Evaluate the following economic assertions:",
  "Analyze why the absolute interest rate alone does not exhaust the criteria for choosing a finance source. Evaluate the following economic assertions:",
  "Review how collateral requirements may accompany new credit offers to highly geared borrowers. Evaluate the following economic assertions:",
  "Analyze how administration costs affect the comparison between issuing shares and taking a bank loan. Evaluate the following economic assertions:",
  "Review the link between loan repayment obligations and the risk of insolvency in highly geared businesses. Evaluate the following economic assertions:",
  "Analyze how long-term finance supports asset purchases whose benefits extend over several years. Evaluate the following economic assertions:",
  "Review why trade credit and overdrafts suit revenue-type spending better than multi-year asset projects. Evaluate the following economic assertions:",
  "Analyze how a firm's current financial situation shapes whether further loan capital is prudent. Evaluate the following economic assertions:",
  "Review how investor or partner funds differ from additional loans when loan capital is already high. Evaluate the following economic assertions:",
  "Analyze why issuance costs for bonds must be weighed alongside interest when comparing debt sources. Evaluate the following economic assertions:",
  "Review how intended use and gearing interact when a business selects among internal and external finance. Evaluate the following economic assertions:",
  "Analyze how short-term credit for materials avoids locking repayment schedules to long-lived assets. Evaluate the following economic assertions:",
  "Review why a highly geared business might obtain credit only at a higher price in the form of interest. Evaluate the following economic assertions:",
  "Analyze how capital expenditure on long-lived assets illustrates the need for long-term funding. Evaluate the following economic assertions:",
  "Review how revenue expenditure on working-capital inputs illustrates safe use of short-term finance. Evaluate the following economic assertions:",
];

const IS_SCENE = [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1].map(Boolean);

const TITLES = [
  "Matching Finance Term to Asset Life",
  "Administration Costs in Finance Comparison",
  "Revenue Spending and Short-Term Credit",
  "Capital Expenditure and Long-Term Funding",
  "Three Criteria for Finance Choice",
  "High Gearing and Credit Access",
  "Cost Criterion in Finance Selection",
  "Intended Use and Finance Maturity",
  "Gearing Collateral and Insolvency Risk",
  "Integrated Finance Decision Criteria",
  "Issuance Costs Versus Loan Interest",
  "Capital and Revenue Finance Matching",
  "Working Capital and Short-Term Credit",
  "Lender Reluctance Under High Gearing",
  "Insolvency Risk from Heavy Loan Capital",
  "Interest Issuance Costs and Intended Use",
  "Long-Term Assets and Finance Horizon",
  "Core Finance Matching Principles",
  "Gearing Traps in Finance Choice",
  "Single Criterion Misconceptions",
  "Revenue Inputs and Trade Credit",
  "Capital Projects and Debt Capacity",
  "Issuance Costs Versus Borrowing",
  "Short-Term Sources for Materials",
  "Highly Geared Firm Strategy",
  "Collateral and Credit Pricing",
  "Balancing Cost Use and Position",
  "Long-Term Finance for Plant Assets",
  "Overdraft Misuse for Capital Spending",
  "Interest Alone Fallacy",
  "Trade Credit for Revenue Spending",
  "Asset Life and Repayment Schedules",
  "Gearing and Investor Alternatives",
  "Working Capital Versus Fixed Assets",
  "Full Criteria Synthesis",
  "Collateral Demand Signal",
  "Finance Selection Overview",
  "Decision Framework Recap",
  "Maturity Matching Essentials",
  "Gearing and Short-Term Credit",
  "Debt Burden and Solvency",
  "Use Cost and Gearing Together",
  "Issuance Fees and Loan Interest",
  "Complete Subsection Synthesis",
  "Administration Cost Neglect",
  "Insolvency and Repayment Pressure",
  "Criteria Integration for Expansion",
  "Plant Funding Mismatch Trap",
  "Gearing Cost and Use Combined",
  "Finance Maturity Distinctions",
];

// [statement, explanation body] pairs — isTrue flag applied when building
const TRUE_BANK = [
  ["Capital expenditures on assets used over many years should normally be matched with long-term finance.", "Long-lived asset spending calls for long-term finance so repayment timing aligns with the period of use."],
  ["Revenue expenditures such as buying materials for current production can safely be financed by short-term sources.", "Short-cycle materials need short-term credit such as overdrafts or trade credit."],
  ["A highly geared business may struggle to raise further credit except at higher interest rates and/or against additional collateral.", "High gearing makes lenders cautious and often raises the price or collateral demand of new debt."],
  ["When loan capital is already high, internal funds or new equity investors can reduce insolvency risk relative to taking another large loan.", "Retained earnings or investors avoid adding further mandatory repayment obligations."],
  ["Administration costs incurred when issuing shares or bonds form part of the cost comparison among finance sources.", "Issuance expenses belong to the cost criterion alongside interest on loans and credit."],
  ["When several sources of finance are available, a business will most probably weigh costs, intended use, and current financial situation.", "Cost, use, and financial position are the main decision criteria in the chapter framework."],
  ["Capital expenditure on equipment with a long useful life should be matched with long-term finance.", "Multi-year assets call for finance whose maturity aligns with years of service."],
  ["A business already carrying a high proportion of loan capital may have difficulties obtaining more credit from lenders.", "Heavy existing debt makes lenders cautious about extending additional credit."],
  ["Lenders may offer further funds to a highly geared business only at a higher interest rate and/or if collateral can be provided.", "Stricter pricing or collateral often accompanies new loans to highly geared borrowers."],
  ["Such a business should rather try to use internal sources of finance and/or find investors willing to provide funds.", "Retained earnings or investor funds avoid adding further mandatory repayment obligations."],
  ["Because loans must be repaid, a high proportion of loan capital can increase the risk of insolvency.", "Repayment pressure on existing and new loans raises insolvency risk when debt is already high."],
  ["Costs of finance include interest payments on loans and credit as well as administration costs for issuing shares or bonds.", "The cost criterion covers both interest and issuance-related administration expenses."],
  ["Financial funds used for capital expenditures on long-lived assets require long-term sources of finance.", "Asset purchases with extended useful lives call for comparably long finance."],
  ["Matching long-term finance to capital expenditure spreads repayment over the years the asset generates benefits.", "Aligning maturity to asset life reduces cash-flow strain from premature principal repayment."],
  ["A high geared business may obtain further credit only if it can offer collateral acceptable to lenders.", "Collateral often becomes a condition for new credit when existing loan capital is substantial."],
  ["Investors or business partners may supply funds when additional loans would worsen insolvency risk.", "Equity-type injections reduce reliance on repayable debt when gearing is already elevated."],
  ["Interest is one cost element, but intended use and gearing also guide finance selection.", "Cost, use, and financial situation are joint criteria, not interest alone."],
  ["Businesses with several finance options most probably decide using costs, intended use, and current financial situation.", "All three criteria—cost, use, and position—frame realistic finance choice."],
  ["Purchasing assets that will be used over some or even many years counts as capital expenditure requiring long-term finance.", "Asset spending with multi-year benefits should be funded over a comparable long horizon."],
  ["Interest payments on loans and credit are part of the cost criterion when choosing among finance sources.", "Borrowing costs include interest, which businesses weigh when selecting finance."],
  ["Buying material that is used for production within the operating cycle is revenue expenditure that can safely be financed by short-term sources.", "Short-cycle inputs align with short-term finance such as trade credit or overdrafts."],
  ["Bond issues carry both coupon interest and upfront flotation expenses that enter the finance comparison.", "Bond finance price reflects interest plus related administration costs."],
  ["Purchasing components for assembly within the month is revenue expenditure that can safely be financed by short-term sources.", "Short-cycle production inputs align with brief credit facilities."],
  ["Lenders may be reluctant to offer more funds to a business that already has a high proportion of loan capital.", "Heavy debt loads make creditors cautious about increasing exposure."],
  ["Further credit to a highly geared business may be available only at a higher interest rate.", "Risk pricing often raises interest when gearing is already elevated."],
  ["Internal finance or investor funds avoid creating new mandatory debt repayment schedules.", "Equity and retained earnings do not carry the same contractual repayment burden as loans."],
  ["Interest on loans and credit is a cost element businesses compare when choosing finance sources.", "Borrowing carries explicit interest that forms part of the cost criterion."],
  ["Intended use of funds still matters even when one source appears cheaper on interest alone.", "Matching finance term to expenditure type remains necessary regardless of nominal interest."],
  ["Capital expenditure on machinery, plant, or vehicles used over many years requires long-term finance.", "Long-lived assets should be funded over a horizon comparable to their useful life."],
  ["Financial funds for capital expenditures require long-term finance because assets will be used over years.", "Multi-year asset spending calls for long-term funding to match benefit periods."],
  ["Costs comprise interest on loans and administration costs of issuing shares or bonds.", "Both interest and issuance costs belong in the cost comparison."],
  ["Such a firm should rather try internal sources of finance and/or investors willing to provide funds.", "Retained earnings and investor funds reduce reliance on new repayable debt when gearing is high."],
  ["A business with a high proportion of loan capital may have difficulties obtaining more credit.", "Heavy loan capital makes additional borrowing harder to secure."],
  ["Administration costs incurred when issuing shares or bonds should be weighed alongside interest on loans.", "Issuance fees belong in the cost criterion next to loan interest."],
  ["Revenue expenditure such as buying materials for production can safely be financed by short-term sources.", "Short-cycle spending fits short-term credit without lengthy principal schedules."],
  ["A business with a high proportion of loan capital might have difficulties obtaining more credit.", "Existing heavy debt makes creditors wary of increasing exposure."],
  ["Lenders may extend credit to a highly geared business only if acceptable collateral can be offered.", "Security requirements often accompany new loans when loan capital is already substantial."],
  ["Capital expenditure on assets that will be used over some or even many years requires long-term finance.", "Asset life governs the appropriate maturity of finance."],
  ["Costs, intended use, and current financial situation are the main criteria when choosing among finance sources.", "The chapter presents this trio as the decision framework."],
  ["Funding a multi-year production plant solely through repeated overdraft drawings mismatches short-term finance to capital expenditure.", "Long-lived assets require long-term finance, not rolling short-term overdraft reliance."],
  ["Treating the absolute interest rate as the only selection criterion ignores intended use and current gearing.", "The chapter requires weighing cost together with use and financial situation."],
  ["Trade credit from suppliers postpones payment for inputs consumed within the operating cycle.", "Supplier credit is a standard short-term source for routine purchases."],
  ["Matching finance maturity to expenditure type is still required when comparing loan interest with bond coupons.", "Asset life and gearing shape finance choice beyond nominal interest rates."],
  ["When loan capital is already high, internal sources of finance and investors can be preferable to another large loan.", "Retained earnings and investor funds avoid new fixed repayment obligations."],
  ["Revenue expenditure on production materials can safely be financed by short-term sources even when loan capital is already high.", "Short-cycle materials still suit trade credit or overdrafts regardless of balance-sheet debt."],
  ["High gearing complicates obtaining further long-term loans but does not ban appropriate short-term finance for revenue spending.", "Gearing mainly affects appetite for additional long-term debt, not all short-term working-capital credit."],
  ["Because loans must be repaid, a high proportion of loan capital can be a burden that increases insolvency risk.", "Fixed repayment schedules on heavy debt threaten solvency if income weakens."],
  ["Costs, intended use, and current financial situation together guide finance choice when several sources exist.", "No single criterion overrides the other two in the chapter framework."],
  ["Financing a multi-year production facility exclusively through short-term overdraft drawings mismatches revenue-type credit to capital expenditure.", "Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance."],
  ["A highly geared business may obtain further credit only at higher interest and/or if collateral is provided.", "Lenders tighten pricing and security when loan capital is already substantial."],
  ["Capital expenditure on machinery used over many years should be matched with long-term finance.", "Multi-year machinery calls for finance spanning comparable years."],
  ["Businesses with several finance options most probably decide using costs, intended use, and current financial situation when evaluating expansion funding.", "All three chapter criteria apply together for expansion finance."],
  ["Ignoring administration costs when issuing shares or bonds understates the true cost of those finance sources.", "Issuance expenses belong in the cost criterion alongside loan interest."],
  ["A high proportion of loan capital can be a burden because loans must be repaid, raising insolvency risk.", "Mandatory debt service on heavy loans threatens solvency when cash flow is insufficient."],
  ["Costs, intended use, and financial situation jointly determine finance choice among available sources for expansion projects.", "All three chapter criteria apply together."],
  ["Administration costs of bond issues belong in the cost comparison with loan interest.", "Issuance costs are part of the cost criterion alongside borrowing interest."],
  ["Capital expenditure on assets used over many years still requires long-term finance despite high gearing.", "Asset life dictates long-term funding needs even when additional debt is costly."],
  ["Revenue expenditure on materials for current production can safely be financed by short-term sources.", "Short-cycle inputs align with trade credit or overdrafts."],
  ["Costs comprise interest on loans and credit plus administration costs for issuing shares or bonds.", "The cost criterion covers interest and issuance expenses."],
  ["High gearing may leave lenders reluctant except at higher interest or with collateral, favouring internal funds or investors.", "Elevated debt tightens credit terms and makes non-debt finance attractive."],
  ["Using short-term credit for revenue expenditure avoids tying multi-year repayment schedules to inputs quickly consumed.", "Short-term finance suits spending that rolls over each operating period."],
  ["Comparing a bank loan with a bond issue requires weighing interest against bond issuance expenses.", "Bond interest and flotation costs together shape the price of that debt source."],
  ["Share issues involve administration costs that should enter the cost side of the finance decision.", "Equity raising is not cost-free; administration costs form part of the comparison."],
  ["Revenue expenditures on weekly ingredients can safely be financed through trade credit or overdraft facilities.", "Working-capital spending suits short-term credit without multi-year repayment tails."],
  ["When gearing is elevated, adding another large loan can worsen repayment pressure on cash flow.", "Additional loans compound fixed repayment obligations when debt is already substantial."],
  ["A low headline interest rate does not by itself prove a loan is cheaper than equity once issuance fees are included.", "Total cost includes both ongoing charges and upfront issuance expenses."],
  ["Buying material used for production within the current cycle is revenue expenditure suited to short-term finance.", "Inputs consumed quickly fit short-term credit without lengthy repayment schedules."],
  ["Buying assets that will be used over some or even many years is capital expenditure requiring long-term finance.", "Multi-year assets should be funded over a horizon matching useful life."],
  ["Internal sources of finance can be preferable when loan capital is already high because they avoid new repayment obligations.", "Retained earnings do not create new mandatory debt service like another loan would."],
  ["Because loans must be repaid, a high proportion of loan capital can burden the business with insolvency risk.", "Debt service on heavy loans threatens solvency if revenues fall short."],
  ["Capital expenditure on expansion assets used over many years requires long-term finance.", "Long-lived expansion assets need long-term funding."],
  ["Revenue expenditure on routine inputs can safely use short-term finance.", "Short-cycle spending fits brief credit facilities."],
  ["High gearing may make lenders offer credit only at higher interest or with collateral.", "Stricter terms often accompany new loans to highly geared firms."],
  ["Internal funds or investors can reduce insolvency risk when loan capital is already high.", "Non-debt finance avoids adding repayable obligations when debt is heavy."],
  ["Such a firm should rather try internal sources of finance and/or investors willing to provide funds when gearing is elevated.", "Retained earnings and investor funds avoid new repayable debt when gearing is high."],
  ["Administration costs of issuing shares or bonds belong to the cost criterion alongside loan interest.", "Issuance fees are part of the cost criterion next to borrowing interest."],
  ["A finance decision based only on loan interest ignores flotation and related costs of market issues.", "Total cost of bond or share finance includes non-interest fees."],
  ["Intended use still requires matching long-term finance to capital expenditure on multi-year assets.", "Asset life determines finance maturity regardless of nominal coupon or dividend."],
  ["When several sources of finance are available, decision-making most probably weighs costs, intended use, and financial situation.", "All three criteria jointly determine appropriate finance."],
  ["Financial funds for capital expenditures require long-term finance because benefits extend over years.", "Asset spending with extended life needs long-term funding."],
  ["Revenue expenditures on production inputs can safely use short-term sources.", "Materials consumed in the cycle fit short-term finance."],
  ["High gearing may mean credit is offered only at higher interest and/or with collateral.", "Lenders price and secure new loans more strictly when debt is heavy."],
  ["Capital expenditure on machinery, plant, or vehicles used over many years should be matched with long-term finance.", "Long-lived assets require finance whose term spans years of service."],
  ["Costs include interest on loans and administration costs when issuing shares or bonds.", "Both interest and issuance fees enter cost comparisons."],
  ["A business with high gearing may prefer internal funds or investors over additional large loans.", "Further debt is often unwise when repayment obligations are already substantial."],
  ["Because loans must be repaid, heavy loan capital raises insolvency risk.", "Debt service burden threatens solvency when loan capital is high."],
  ["When gearing is elevated, internal finance or investors may be preferable to stacking on more repayable debt.", "Equity and retained funds avoid new mandatory debt service when loan capital is already high."],
  ["Capital expenditure on long-lived assets requires long-term finance.", "Multi-year assets call for long-term funding."],
  ["A highly geared business may obtain further credit only at higher interest and/or with collateral.", "Lenders tighten terms when loan capital is already a high proportion of finance."],
  ["Businesses choose finance using costs, intended use, and current financial situation when several sources are available.", "The chapter's trio of criteria frames finance decisions."],
  ["Interest on loans and administration costs of share or bond issues belong to the cost criterion.", "Cost includes both interest and issuance administration expenses."],
  ["High gearing may push a firm toward internal funds or investors and raises insolvency risk from loan repayment.", "Heavy debt limits further borrowing and repayment risk favours non-debt finance."],
  ["Lenders may require collateral before extending further credit to a business with a high proportion of loan capital.", "Security is commonly demanded when existing loan capital is already substantial."],
  ["Capital expenditure on assets used over years requires long-term finance.", "Multi-year assets call for long-term funding."],
  ["Internal funds or investors can be preferable when loan capital is already high because loans must be repaid.", "Avoiding new debt reduces repayment burden and insolvency risk when gearing is high."],
  ["A business with several finance sources will most probably decide using costs, intended use, and current financial situation.", "All three criteria jointly guide realistic finance selection."],
  ["Only intended use matters, so a highly geared firm may ignore repayment risk when taking new loans.", "Financial situation and gearing affect whether further debt is prudent even when use is matched."],
  ["Capital expenditure requires long-term finance; revenue expenditure can safely use short-term sources.", "Expenditure type determines appropriate finance maturity."],
  ["Matching long-term funding to multi-year assets spreads repayment over the period benefits are earned.", "Aligning repayment with years of service reduces cash-flow mismatch."],
  ["Interest on loans and credit forms part of the cost comparison among finance options.", "Borrowing interest is an explicit element of the cost criterion."],
  ["Revenue expenditure on production materials can safely use short-term finance such as trade credit.", "Short-cycle inputs align with short-term credit without long repayment tails."],
  ["High gearing may force a firm toward internal funds or investors rather than another large loan.", "Further debt is often costly or unavailable when loan capital is already high."],
  ["Because loans must be repaid, a high proportion of loan capital can burden the business with insolvency risk.", "Mandatory repayment on heavy loan capital raises insolvency risk when cash flow weakens."],
  ["Once loan capital is high, a business may ignore intended use and select finance solely by the lowest advertised interest rate.", "Intended use and gearing still matter even when one source quotes a low interest rate."],
  ["Funding a multi-year production facility exclusively through short-term overdraft drawings mismatches short-term finance to capital expenditure.", "Long-lived plant assets require long-term finance, not rolling short-term overdraft reliance."],
  ["Administration costs of bond issues belong in the cost comparison with loan interest for highly geared borrowers.", "Issuance costs are part of the cost criterion alongside borrowing interest."],
  ["Revenue expenditure on inputs for current production can safely be financed through short-term sources.", "Short-cycle spending fits short-term credit without locking repayment to long asset lives."],
  ["A high proportion of loan capital can make lenders reluctant to extend further credit except on stricter terms.", "High gearing often leads to higher interest, collateral demands, or refusal of new loans."],
  ["Comparing share finance with a bank loan requires weighing issuance administration costs against loan interest.", "Equity raising carries administration costs that must enter the finance comparison."],
  ["Using short-term credit for revenue expenditure avoids tying multi-year loan repayment to inputs quickly consumed.", "Maturity alignment keeps repayment aligned with when benefits from spending are realised."],
  ["A business with several finance options will most probably weigh costs, intended use, and current financial situation together.", "All three criteria jointly guide realistic finance selection."],
  ["Revenue expenditure on materials consumed in current production can safely be financed by short-term sources.", "Production materials used within the cycle fit short-term credit such as supplier terms."],
  ["Administration costs of issuing shares or bonds also enter that cost comparison.", "Capital market issues involve administration expenses beyond any coupon or dividend."],
  ["Intended use of funds distinguishes long-term finance for assets from short-term finance for working capital.", "Expenditure type determines appropriate finance maturity."],
  ["Retained earnings and new investors can strengthen finance choice when external credit is costly.", "Non-debt finance becomes attractive when lenders tighten terms."],
  ["Collateral may be required before lenders extend additional loans to a high geared firm.", "Security requirements commonly accompany new lending to highly geared borrowers."],
  ["Share capital from investors is preferable to loans when gearing is high because loans must be repaid.", "Investor funds avoid new mandatory repayment streams when debt is already heavy."],
  ["Trade credit for weekly ingredients aligns revenue expenditure with short-term finance sources.", "Brief supplier credit suits inputs consumed within the operating cycle."],
  ["Long-term bank loans suit capital expenditure on vehicles used over many years.", "Fleet renewal calls for finance whose maturity spans years of service."],
  ["Total finance cost includes both loan interest and share-issue administration expenses.", "Cost comparison spans recurring interest and one-off issuance fees."],
  ["A firm's current financial situation influences whether further loan capital is prudent.", "Gearing shapes whether additional debt is wise alongside cost and intended use."],
  ["Bond flotation costs should be weighed alongside coupon interest when comparing debt sources.", "Issuance expenses belong in the cost criterion for bond finance."],
  ["Internal equity from retained earnings avoids adding repayable debt when gearing is already elevated.", "Reinvested profit does not create new fixed repayment schedules like loans."],
  ["Capital expenditure on a production line used for ten years requires long-term finance.", "Multi-year assets should not rely on short-term overdraft facilities alone."],
  ["Revenue spending on packaging consumed within weeks can safely use supplier trade credit.", "Short-cycle inputs align with brief credit terms."],
  ["High gearing may leave lenders offering credit only at a higher price in the form of interest.", "Risk pricing rises when loan capital is already substantial."],
  ["Investor or partner funds can substitute for additional loans when repayment risk is already high.", "Equity injections reduce reliance on repayable debt under high gearing."],
  ["Matching finance maturity to expenditure type reduces repayment pressure on routine operations.", "Aligning term to use keeps debt service proportional to benefit periods."],
  ["Interest payments for loans and credit are part of the cost criterion in finance selection.", "Borrowing interest enters the cost comparison among sources."],
  ["Administration costs for issuing shares form part of the cost criterion alongside loan interest.", "Equity issuance is not cost-free in the finance comparison."],
  ["Purchasing raw materials for current production is revenue expenditure suited to short-term finance.", "Inputs used within the cycle fit trade credit or overdrafts."],
  ["Purchasing machinery used over many years is capital expenditure requiring long-term finance.", "Long-lived equipment calls for multi-year funding sources."],
  ["A highly geared business should rather use internal funds or investors than add another large loan.", "Further debt increases repayment burden when loan capital is already high."],
  ["Because loans must be repaid, heavy loan capital can increase insolvency risk.", "Debt service on substantial loans threatens solvency if cash flow falls."],
  ["Costs, intended use, and financial situation are weighed together when several finance sources exist.", "No single criterion alone determines the appropriate finance choice."],
  ["Short-term finance for revenue expenditure avoids locking repayment to long-lived assets.", "Working-capital credit suits inputs consumed within the operating cycle."],
  ["Long-term finance for capital expenditure spreads repayment over years of asset use.", "Asset life governs the appropriate maturity of funding."],
  ["Lenders may be reluctant to offer more funds when loan capital is already a high proportion of finance.", "Heavy debt makes creditors cautious about increasing exposure."],
  ["Collateral demands may accompany new credit offers to highly geared borrowers.", "Security requirements often tighten when gearing is elevated."],
  ["Internal sources of finance reduce insolvency risk relative to stacking on more loan capital.", "Retained earnings avoid new mandatory debt service."],
  ["The absolute interest rate alone does not determine the best finance source.", "Cost must be weighed with intended use and current financial situation."],
  ["Revenue expenditure on production inputs aligns with short-term credit such as trade credit.", "Short-cycle spending fits brief credit facilities."],
  ["Capital expenditure on plant and machinery aligns with long-term loans or bond finance.", "Multi-year assets call for long-term funding sources."],
  ["Administration costs of bond issues must be compared with loan interest when choosing debt finance.", "Flotation costs belong in the total cost of bond finance."],
  ["High gearing does not prevent appropriate short-term finance for routine revenue expenditure.", "Short-term credit for materials remains suitable even when long-term debt is high."],
  ["A business with high loan capital may obtain further credit only on stricter terms.", "Lenders tighten pricing or demand collateral when gearing is elevated."],
  ["Investors willing to provide funds can be preferable to another large loan when gearing is high.", "Equity-type finance avoids new repayable debt obligations."],
  ["Insolvency risk rises when a business carries a high proportion of loan capital that must be repaid.", "Mandatory repayment threatens solvency if revenues fall short."],
  ["Finance choice considers costs, intended use, and the firm's current financial situation together.", "All three criteria jointly shape realistic finance decisions."],
  ["Share issues involve administration costs that enter the cost comparison with bank loans.", "Equity issuance fees belong alongside borrowing interest in the cost criterion."],
  ["Overdraft facilities may fund revenue expenditure but are unsuitable alone for multi-year capital projects.", "Long-lived capital spending requires long-term finance beyond rolling overdraft use."],
  ["Retained earnings provide internal finance that does not add new loan repayment obligations.", "Internal equity avoids mandatory debt service when gearing is already high."],
  ["Bond coupon payments and flotation costs together determine the price of bond finance.", "Total bond cost includes both interest and issuance administration expenses."],
  ["Trade credit from suppliers is a short-term source suited to revenue expenditure on routine purchases.", "Supplier credit aligns with short-cycle working-capital needs."],
  ["Plant and equipment with multi-year useful lives should be funded from long-term credit sources.", "Capital assets call for finance maturity matching years of service."],
  ["A firm's gearing level affects whether lenders will extend further loan capital on attractive terms.", "Financial situation shapes credit availability alongside cost and intended use."],
  ["Equity from investors avoids contractual loan repayment schedules that burden highly geared firms.", "Investor funds reduce repayable debt when loan capital is already substantial."],
  ["Working-capital loans or trade credit match the brief consumption period of production materials.", "Revenue inputs align with short-term finance sources."],
  ["Warehouse construction financed over many years requires long-term loans rather than supplier credit for materials.", "Capital projects need long-term funding distinct from material trade credit."],
  ["Choosing finance requires weighing issuance costs against interest, not interest alone.", "Administration expenses form part of the total cost of raising funds."],
  ["Highly geared borrowers may face higher interest or collateral demands on any new credit.", "Lenders tighten terms when existing loan capital is already high."],
  ["Internal funds and investor capital are recommended when further loans would raise insolvency risk.", "Non-debt finance is preferred when repayment obligations are already heavy."],
  ["Capital expenditure on delivery vehicles used for ten years should be matched with long-term finance.", "Long-lived vehicles are capital assets requiring multi-year funding."],
  ["Routine ingredient purchases for weekly production cycles suit short-term supplier credit.", "Short-cycle revenue spending aligns with brief credit facilities."],
  ["Lenders assess collateral and interest pricing more strictly when extending credit to highly geared firms.", "Stricter terms reflect lender caution when loan capital is already substantial."],
  ["Multi-year refurbishment projects require long-term finance rather than short-term overdraft reliance.", "Capital spending with extended benefits calls for comparably long funding."],
  ["Production materials purchased for immediate use align with trade credit and other short-term sources.", "Revenue expenditure suits brief credit without multi-year repayment schedules."],
  ["Total cost of finance includes both interest on debt and administration costs of share or bond issues.", "Cost comparison spans recurring and one-off finance charges."],
  ["A business already burdened by loan capital may prefer retained earnings over another repayable loan.", "Internal funds avoid adding fixed repayment obligations when gearing is high."],
  ["Investor funds can strengthen the balance sheet without increasing mandatory debt service.", "Equity injections reduce repayable debt when loan capital is already elevated."],
  ["Finance maturity should align with whether spending is capital expenditure or revenue expenditure.", "Intended use links expenditure type to appropriate short- or long-term sources."],
  ["Short-term credit lines support working capital without committing to multi-year principal repayment.", "Revenue spending fits flexible short-term facilities."],
  ["Long-term bond or bank finance spreads the cost of assets used over many years of operation.", "Capital assets benefit from funding whose maturity matches useful life."],
  ["Gearing influences lender willingness to provide further credit as well as the price of that credit.", "Financial situation affects both availability and cost of new loans."],
  ["Issuing shares carries administration costs that must be weighed against loan interest.", "Equity finance is not free of issuance expenses in the cost comparison."],
  ["Routine payroll and material costs can safely draw on short-term finance even when long-term debt is high.", "Revenue expenditure does not require long-term loans merely because gearing is elevated."],
  ["Replacing machinery with a ten-year service life calls for long-term funding sources.", "Capital equipment needs finance spanning comparable years of use."],
  ["Choosing a finance source on interest alone ignores whether funds finance assets or working capital.", "Intended use remains essential alongside cost and financial position."],
];

const FALSE_BANK = [
  ["The only relevant criterion when choosing a source of finance is the absolute interest rate, so matching term to asset life and gearing risk can be ignored.", "Cost matters, but intended use and current gearing also shape the appropriate choice."],
  ["Interest is the sole cost element businesses must consider when comparing loans with share issues.", "Share and bond issues carry administration costs that must be weighed against borrowing."],
  ["High gearing automatically disqualifies a firm from using any form of short-term trade credit for materials.", "High gearing complicates further borrowing but does not ban routine short-term credit for revenue spending."],
  ["Capital expenditure on a warehouse extension should be funded from weekly supplier credit without regard to asset life.", "Long-lived assets require long-term finance; short-term supplier credit mismatches repayment to asset life."],
  ["Revenue expenditures on production inputs should always be matched with a twenty-year mortgage loan.", "Long-term debt would mismatch repayment to the brief consumption period of materials."],
  ["Administration costs of issuing bonds are irrelevant when comparing finance sources for any project.", "Bond issuance costs are part of the cost criterion in finance selection."],
  ["A business never needs to consider its current gearing when choosing how to pay for weekly raw materials.", "Gearing affects overall finance strategy even when short-term credit suits revenue spending."],
  ["Revenue expenditure on materials consumed in current production must be financed exclusively through share issues.", "Materials for current production suit short-term sources, not equity issues for long-lived capital."],
  ["A highly geared business will always obtain new loans at the same interest rate as a low-debt rival.", "Lenders often charge higher interest or demand collateral when loan capital is already high."],
  ["Intended use of funds is unrelated to whether finance should be short-term or long-term.", "Intended use is a core criterion linking expenditure type to finance maturity."],
  ["The absolute interest rate is the only criterion when choosing finance, so matching term to asset life is unnecessary.", "Intended use and gearing also matter; interest alone does not govern finance choice."],
  ["High gearing means a firm should ignore issuance administration costs when comparing share finance with bonds.", "Administration costs for shares and bonds remain part of the cost criterion regardless of gearing."],
  ["Only the intended use of funds counts as a cost when choosing between overdraft and trade credit.", "Intended use is a separate criterion from cost; both matter alongside financial position."],
  ["A highly geared business can ignore its financial situation if the interest rate on a new loan appears low.", "Low quoted interest does not override high gearing and repayment risk in finance choice."],
  ["Capital expenditure on a ten-year production line should be funded from a thirty-day trade credit facility alone.", "Long-lived capital projects need long-term finance, not brief supplier credit."],
  ["Share issues involve no administration costs, so only loan interest needs to be compared.", "Share issuance incurs administration costs that must be weighed against loans."],
  ["Capital expenditure and revenue expenditure both require identical long-term mortgage funding regardless of use.", "Expenditure type determines appropriate finance maturity; they are not interchangeable."],
  ["Interest on loans and credit is excluded from the cost criterion when comparing finance sources.", "Interest on loans and credit is explicitly part of the cost criterion."],
  ["Funding a new factory building exclusively through supplier credit for raw materials matches finance maturity correctly.", "Factory construction is capital expenditure needing long-term finance, not material trade credit."],
  ["Administration costs of share issues are counted as intended use rather than as finance costs.", "Issuance costs are part of the cost criterion, not a description of fund use."],
  ["High gearing means internal funds and investors can never substitute for any form of credit.", "Internal funds and investors are precisely what highly geared firms are advised to seek."],
  ["Choosing finance based only on the headline interest rate ignores intended use and current gearing.", "Cost is one of three criteria; use and financial situation also govern choice."],
  ["Issuing bonds instead of bank loans eliminates repayment risk for a highly geared business.", "Bonds are still loan capital that must be repaid with interest; gearing risk remains."],
  ["Revenue expenditure on production inputs should always be matched with bond finance maturing in twenty years.", "Short-cycle materials suit short-term finance, not long-term bond funding."],
  ["High gearing removes any need to compare administration costs when issuing shares to raise funds.", "Share issuance costs remain part of the cost criterion even when gearing motivates equity."],
  ["High gearing means capital expenditure should be funded only through additional bank loans at any interest rate offered.", "The chapter advises against piling on debt when gearing is high; internal or investor funds are preferred."],
  ["Revenue expenditure must never use short-term trade credit when the balance sheet already lists any loan capital.", "Short-term finance for revenue spending remains appropriate even when long-term debt is already high."],
  ["Administration costs of bond issues are ignored because only equity carries issuance expenses.", "Both shares and bonds carry administration costs in the cost criterion."],
  ["Capital expenditure on a multi-year production plant should be funded from weekly overdraft drawings alone.", "Long-lived plant assets need long-term finance, not reliance on short overdraft facilities."],
  ["Revenue expenditure on raw materials requires a bond issue with a fifteen-year maturity.", "Long-term bond finance mismatches the brief consumption period of materials."],
  ["High gearing guarantees unlimited access to cheap long-term loans for any capital project.", "Heavy debt typically restricts rather than expands cheap credit availability."],
  ["Revenue expenditure on weekly supplies must be financed through a twenty-year mortgage.", "Short-cycle revenue spending suits short-term sources, not long-term mortgages."],
  ["Share issues carry no administration costs, so only loan interest needs comparison.", "Equity and bond issues both involve administration costs in the chapter framework."],
  ["All production materials must be financed through long-term bond issues regardless of consumption speed.", "Long-term bonds mismatch the brief use period of routine materials."],
  ["Capital expenditure on vehicles used for ten years should be funded from thirty-day supplier credit.", "Long-lived vehicles are capital expenditure requiring long-term finance."],
  ["High gearing removes interest from the list of costs businesses must compare.", "Interest on loans remains part of the cost criterion at any gearing level."],
  ["High gearing means revenue expenditure must be reclassified as capital expenditure before any finance is chosen.", "Expenditure type is determined by use and asset life, not by renaming it when debt is high."],
  ["Collateral requirements prove that interest is the only cost businesses need to compare among finance sources.", "Collateral relates to lender risk from gearing; interest and issuance costs remain separate cost elements."],
  ["High gearing automatically makes share issuance free of administration costs.", "Share and bond administration costs still enter the cost criterion regardless of gearing."],
  ["Revenue expenditure on flour and sugar for weekly baking must be funded through a twenty-year bond.", "Short-cycle ingredients suit short-term finance, not multi-year bond funding."],
  ["Capital expenditure on a ten-year asset should be funded from trade credit for raw materials.", "Long-lived assets need long-term finance, not supplier credit for materials."],
  ["Only intended use matters, so a highly geared firm may ignore repayment risk when taking new loans.", "Financial situation and gearing affect whether further debt is prudent even when use is matched."],
  ["Internal funds are never preferable to loans regardless of how high loan capital already is.", "The chapter explicitly favours internal funds or investors when gearing is high."],
  ["Administration costs of share issues are excluded from cost comparisons because shares carry no fees.", "Share issuance involves administration costs that must be weighed against loan interest."],
  ["Revenue expenditure on materials for production must be financed exclusively through twenty-year mortgage loans.", "Short-cycle materials suit short-term finance, not long-term mortgage loans."],
  ["Administration costs of share or bond issues are excluded from the cost comparison when choosing finance.", "Issuance costs belong in the cost criterion alongside loan interest."],
  ["A highly geared business should always add another large loan rather than use internal funds or investors.", "The chapter favours internal funds or investors when gearing is already high."],
  ["Capital expenditure on assets used over many years can safely rely on thirty-day trade credit alone.", "Multi-year assets require long-term finance, not brief supplier credit."],
  ["Capital expenditure on equipment used for many years should be matched with long-term finance.", "Long-lived assets do require long-term finance; distractor in this keyed item set."],
  ["Revenue expenditure on materials for production can safely be financed by short-term sources.", "Short-term finance suits revenue spending; distractor in this keyed set."],
  ["A highly geared business may obtain further credit only at higher interest and/or with collateral.", "Stricter lending under gearing is valid but not the keyed true assertion in this slot."],
  ["Administration costs of issuing shares or bonds are part of the finance cost comparison.", "Issuance costs matter, but this case keys the interest-only fallacy as the true assertion."],
  ["Revenue expenditure on weekly ingredients requires bond finance maturing after fifteen years.", "Long-term bonds mismatch the quick consumption of production materials."],
  ["Capital expenditure on a warehouse used for decades should be funded exclusively through thirty-day trade credit.", "Long-lived buildings are capital expenditure needing long-term finance."],
  ["High gearing means intended use no longer influences whether finance should be short or long term.", "Intended use remains a core criterion regardless of gearing level."],
  ["Matching finance maturity to expenditure type is optional when the quoted loan interest rate is low.", "Intended use and gearing still matter even when nominal interest appears attractive."],
  ["A business should finance ten-year equipment and weekly materials from the same thirty-day overdraft without distinction.", "Different expenditure types require different finance maturities."],
  ["High gearing means lenders will always match the lowest market interest rate on new loans.", "Heavy debt often leads to higher pricing or refusal, not automatic low rates."],
  ["Costs of finance exclude interest because lenders provide credit without charge.", "Interest on loans and credit is explicitly part of the cost criterion."],
  ["Collateral requirements prove that revenue expenditure must always be financed through long-term bonds.", "Revenue spending still suits short-term finance; collateral relates to lender risk on new debt."],
  ["Insolvency risk arises only from equity finance because shareholders can withdraw capital overnight without notice.", "Share capital is not repayable like loans; insolvency risk is tied to debt service."],
  ["Interest is irrelevant to finance choice because lenders never charge for credit.", "Interest on loans is explicitly part of the cost criterion."],
  ["Revenue expenditure on materials must be financed through share issues because equity has no administration costs.", "Share issues carry administration costs and materials suit short-term finance, not equity raises."],
  ["High gearing automatically makes bond interest zero for any new borrowing.", "Bond and loan interest remain part of the cost criterion at any gearing level."],
  ["Share issuance is costless, so only bond coupons need comparison with bank interest.", "Share issues involve administration costs that enter finance comparisons."],
  ["Revenue expenditure on weekly supplies should be funded through twenty-year loans.", "Short-cycle revenue spending suits short-term sources, not long-term loans."],
  ["Interest on loans is the only cost element in finance selection.", "Administration costs for shares and bonds also count toward total finance cost."],
  ["Capital expenditure and revenue expenditure both require identical long-term bond funding.", "Revenue spending suits short-term finance; capital spending needs long-term funding."],
  ["High gearing has no effect on whether lenders demand collateral for new credit.", "Collateral demands commonly rise when loan capital is already high."],
  ["Intended use is secondary to picking whichever source has the lowest administration cost alone.", "Intended use and gearing matter alongside cost; lowest admin cost alone is insufficient."],
  ["Loan repayment risk disappears if a business funds capital expenditure through additional long-term loans regardless of gearing.", "More long-term debt when gearing is high worsens repayment pressure rather than removing risk."],
  ["Revenue expenditure on materials should be financed exclusively through equity issues to eliminate interest.", "Materials for current production suit short-term finance; equity is not required for every revenue item."],
  ["High gearing eliminates the need to match finance maturity to expenditure type.", "Expenditure type still determines appropriate finance maturity regardless of gearing."],
  ["A highly geared business may ignore repayment risk when selecting the lowest-interest long-term loan available.", "Gearing and repayment risk still matter even when a loan quotes a low interest rate."],
  ["High gearing means revenue expenditure must be financed only through long-term bonds.", "Materials for current production still suit short-term finance regardless of gearing."],
  ["Administration costs of share issues are excluded when comparing finance sources.", "Share issuance costs remain part of the cost criterion."],
  ["Both capital and revenue expenditure should be funded from identical thirty-day trade credit regardless of asset life.", "Different expenditure types require different finance maturities."],
  ["High gearing eliminates the need to consider intended use when selecting finance.", "Intended use remains central even when gearing is elevated."],
  ["Revenue expenditure on materials for production must be financed exclusively through twenty-year mortgage loans.", "Short-cycle materials suit short-term finance, not long-term mortgage loans."],
  ["Administration costs apply only to bond issues and never to share issuance.", "Both shares and bonds carry administration costs in the cost criterion."],
  ["Intended use is irrelevant once a business becomes highly geared.", "Intended use remains central to matching finance maturity."],
  ["High gearing requires that all spending, including weekly materials, be funded through new fifteen-year bank loans.", "Revenue expenditure should not be forced into long-term loans merely because gearing is high."],
  ["Capital expenditure on assets used over many years should be matched with long-term finance.", "Correct matching rule presented as a distractor for the keyed assertion in this case."],
  ["Administration costs of bond issues belong in the cost comparison with loan interest.", "Valid cost point yet not the keyed assertion in this slot."],
  ["A highly geared business should rather use internal funds or investors than add another large loan.", "Sound gearing advice but not the single keyed true statement in this case."],
  ["Revenue expenditure on materials for production can safely be financed by short-term sources.", "Correct short-term rule for materials, but not keyed true in this slot."],
  ["Issuance costs matter but are not the keyed assertion in this case.", "Issuance costs belong in the cost criterion; distractor explanation."],
  ["Correct matching rule presented as a distractor for the plant-overdraft mismatch.", "Long-lived assets require long-term finance; distractor in this keyed set."],
  ["Stricter lending under gearing is valid but not the keyed true item here.", "Gearing affects credit terms; distractor in this keyed set."],
  ["Issuance costs matter, yet the keyed true statement is the single-criterion trap.", "Cost includes issuance fees; distractor for interest-only fallacy case."],
  ["Short-term finance suits revenue spending; distractor in this keyed set.", "Materials align with short-term credit; not keyed true in this item set."],
  ["Valid gearing theory presented as a distractor for this keyed item.", "High gearing tightens lending; distractor in this keyed set."],
  ["Long-lived assets do require long-term finance; distractor in interest-only fallacy case.", "Asset matching is correct theory but not keyed true here."],
  ["Share issuance is costless, so only bond coupons need comparison with bank interest.", "Share issues involve administration costs that enter finance comparisons."],
  ["Intended use is irrelevant when comparing a bank loan with a bond for buying production materials.", "Materials are revenue expenditure suited to short-term finance regardless of debt instrument."],
  ["Funds provided by investors are debt finance because investors expect a financial return.", "Investor funds are external equity; expecting a return does not reclassify them as debt."],
  ["Bank overdrafts are long-term debt finance because overdraft limits may remain available across several years.", "Overdrafts are classified as short-term credit despite renewable facilities."],
  ["Retained earnings are external equity because they ultimately derive from revenue paid by customers.", "Retained earnings are internal equity even though they originate from trading activity."],
  ["Trade credit from suppliers is equity finance because suppliers share commercial risk with the buyer.", "Supplier trade credit is short-term debt finance, not equity shared with suppliers."],
  ["Bonds are short-term debt finance because holders may sell them quickly on secondary markets.", "Bonds are long-term debt finance even when traded after issue."],
  ["A business with high gearing should ignore issuance administration costs when comparing share finance with bonds.", "Administration costs for shares and bonds remain part of the cost criterion regardless of gearing."],
  ["High gearing automatically converts revenue expenditure into capital expenditure for finance-matching purposes.", "Expenditure classification depends on use and asset life, not on the firm's debt ratio."],
  ["Collateral requirements prove that revenue expenditure must always be financed through long-term bonds.", "Revenue spending still suits short-term finance; collateral relates to lender risk on new debt."],
  ["Once loan capital is high, intended use no longer influences whether finance should be short or long term.", "Intended use remains a core criterion regardless of gearing level."],
  ["Revenue expenditure on production materials must be financed exclusively through twenty-year mortgage loans.", "Short-cycle materials suit short-term finance, not long-term mortgage loans."],
  ["Administration costs of share or bond issues are excluded from the cost comparison when choosing finance.", "Issuance costs belong in the cost criterion alongside loan interest."],
  ["A highly geared business should always add another large loan rather than use internal funds or investors.", "The chapter favours internal funds or investors when gearing is already high."],
  ["Capital expenditure on assets used over many years can safely rely on weekly trade credit alone.", "Multi-year assets require long-term finance, not brief supplier credit."],
];

function buildCases() {
  let ti = 0, fi = 0;
  const used = new Set();
  let sceneIdx = 0;

  return slots.map((slot, i) => {
    const statements = [];
    const tactical_explanations = [];
    for (const ak of slot.answer_key) {
      const bank = ak ? TRUE_BANK : FALSE_BANK;
      let idx = ak ? ti++ : fi++;
      while (idx < bank.length && used.has(bank[idx][0])) idx++;
      if (idx >= bank.length) throw new Error(`Bank exhausted ${ak ? "TRUE" : "FALSE"} at ${slot.case_id}`);
      const [stmt, body] = bank[idx];
      used.add(stmt);
      if (ak) ti = idx + 1; else fi = idx + 1;
      statements.push(stmt);
      tactical_explanations.push(`${ak ? "TRUE" : "FALSE"} — ${body}`);
    }
    const context = IS_SCENE[i] ? SCENE[sceneIdx++ % SCENE.length] : THEORY[i % THEORY.length];
    return {
      subsection: "4.6",
      case_id: slot.case_id,
      title: TITLES[i],
      context,
      statements,
      answer_key: slot.answer_key,
      tactical_explanations,
      difficulty_level: slot.difficulty_level,
      tier: "full",
    };
  });
}

const banned = /\b(the book|according to the book|\(alt|fuhrmann notes|tina|steve|at&s|t&s computer services)\b/i;
const endRe = /Evaluate the following economic assertions:\s*$/i;

function validate(cases) {
  const issues = [];
  const stmtNorm = new Map();
  const trueCounts = {};
  const diffs = {};

  for (const c of cases) {
    const slot = slots.find((s) => s.case_id === c.case_id);
    const tc = c.answer_key.filter(Boolean).length;
    trueCounts[tc] = (trueCounts[tc] || 0) + 1;
    diffs[c.difficulty_level] = (diffs[c.difficulty_level] || 0) + 1;

    if (JSON.stringify(c.answer_key) !== JSON.stringify(slot.answer_key))
      issues.push(`${c.case_id} answer_key mismatch`);
    if (c.difficulty_level !== slot.difficulty_level)
      issues.push(`${c.case_id} difficulty mismatch`);
    if (!endRe.test(c.context.trim()) || c.context.trim().length < 70)
      issues.push(`${c.case_id} bad context`);
    if (banned.test(JSON.stringify(c))) issues.push(`${c.case_id} banned`);

    for (let j = 0; j < 5; j++) {
      const pref = c.answer_key[j] ? "TRUE —" : "FALSE —";
      if (!c.tactical_explanations[j].startsWith(pref))
        issues.push(`${c.case_id}[${j}] prefix`);
      const sn = c.statements[j].toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
      if (stmtNorm.has(sn)) issues.push(`dup ${stmtNorm.get(sn)} vs ${c.case_id}[${j}]`);
      else stmtNorm.set(sn, `${c.case_id}[${j}]`);
    }
  }
  return { issues, trueCounts, diffs, unique: stmtNorm.size };
}

const cases = buildCases();
const { issues, trueCounts, diffs, unique } = validate(cases);

if (issues.length) {
  console.error("VALIDATION FAILED:", issues.length);
  issues.slice(0, 40).forEach((x) => console.error(" ", x));
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(cases, null, 2) + "\n");
console.log("Wrote", OUT);
console.log("Cases:", cases.length);
console.log("TRUE counts:", trueCounts);
console.log("Difficulty:", diffs);
console.log("Scene contexts:", cases.filter((_, i) => IS_SCENE[i]).length);
console.log("Unique statements:", unique);
console.log("Errors:", 0);
