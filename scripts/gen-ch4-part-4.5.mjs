/**
 * Generate scripts/ch4-part-4.5.json — 50 cases for subsection 4.5.
 */
import fs from "node:fs";

const slots = JSON.parse(fs.readFileSync("scripts/ch4-slot-plan.json", "utf8"))["4.5"];
const OUT = "scripts/ch4-part-4.5.json";

const SCENE = [
  "Consider a neighbourhood bakery that funds daily ingredient purchases through supplier credit while reinvesting part of its annual profit into new ovens. Evaluate the following economic assertions:",
  "Consider a manufacturing corporation that combines share capital from outside investors, retained profits, and a multi-year bank loan to expand production capacity. Evaluate the following economic assertions:",
  "Consider a regional retailer that relies on a bank overdraft for seasonal stock, trade credit from wholesalers, and retained earnings for store refurbishment. Evaluate the following economic assertions:",
  "Consider a family-owned workshop where the owners inject a long-term loan while the firm also issues bonds to outside investors for equipment purchases. Evaluate the following economic assertions:",
  "Consider a construction firm financing payroll gaps with short-term bank loans and supplier trade credit while shareholders provide additional share capital. Evaluate the following economic assertions:",
  "Consider an agricultural cooperative that retains part of member profits, accepts funds from new investor-members, and borrows through a long-term bank loan. Evaluate the following economic assertions:",
  "Consider a hotel operator that uses retained earnings for refurbishment, a bank overdraft for cash-flow gaps, and bond finance for a new wing. Evaluate the following economic assertions:",
  "Consider a freight carrier that mixes short-term credit lines, owner-provided long-term loans, and reinvested earnings to renew its vehicle fleet. Evaluate the following economic assertions:",
  "Consider a dental practice that funds routine supplies on trade credit, keeps reinvested profits for equipment, and holds a long-term bank loan for premises. Evaluate the following economic assertions:",
  "Consider a software startup that raises share capital from external investors while using retained earnings and short-term bank loans during early growth. Evaluate the following economic assertions:",
  "Consider a municipal supplier that draws on trade credit, a renewable overdraft facility, and bond issues to finance warehouse expansion. Evaluate the following economic assertions:",
  "Consider a textile producer balancing retained earnings, investor share capital, short-term loans, and long-term bond finance across its balance sheet. Evaluate the following economic assertions:",
  "Consider a catering business that covers weekly purchases with supplier credit, reinvests surplus profit internally, and maintains a long-term loan from its owners. Evaluate the following economic assertions:",
];

const THEORY = [
  "Review the overview of sources of finance as classified into equity finance and debt finance. Evaluate the following economic assertions:",
  "Analyze how businesses distinguish internal equity finance from external equity and debt sources. Evaluate the following economic assertions:",
  "Review how short-term credit and long-term credit fit within external debt finance. Evaluate the following economic assertions:",
  "Analyze the role of the balance sheet in revealing the sources of finance a business has used. Evaluate the following economic assertions:",
  "Review how share capital, retained earnings, and funds from investors relate to equity finance. Evaluate the following economic assertions:",
  "Analyze the classification of bank overdrafts, trade credit, and short-term loans within debt finance. Evaluate the following economic assertions:",
  "Review long-term debt sources including bank loans, owner loans, and bonds. Evaluate the following economic assertions:",
  "Analyze why debt finance is treated as external finance in the sources-of-finance framework. Evaluate the following economic assertions:",
  "Review Table 3 on the most commonly used sources of finance for businesses. Evaluate the following economic assertions:",
  "Analyze how retained earnings differ from share capital as sources of equity finance. Evaluate the following economic assertions:",
  "Review why large businesses are obliged to draw up a balance sheet showing sources of finance. Evaluate the following economic assertions:",
  "Analyze how a loan provided by owners is classified among long-term credit sources. Evaluate the following economic assertions:",
  "Review the distinction between short-term credit and long-term credit within debt finance. Evaluate the following economic assertions:",
  "Analyze how funds provided by investors are classified relative to internal retained earnings. Evaluate the following economic assertions:",
  "Analyze how bond issues and bank loans both supply long-term external debt finance. Evaluate the following economic assertions:",
  "Review how trade credit from suppliers functions as short-term external debt finance. Evaluate the following economic assertions:",
  "Analyze why equity finance includes both internal and external components whereas debt finance is external. Evaluate the following economic assertions:",
  "Review how short-term bank loans differ from long-term bank loans in the finance overview. Evaluate the following economic assertions:",
  "Analyze how share capital and bonds both involve outside parties yet belong to different finance categories. Evaluate the following economic assertions:",
  "Review how reinvested profit supports internal equity finance without new borrowing. Evaluate the following economic assertions:",
  "Analyze how bank overdraft facilities meet short-term liquidity needs as debt finance. Evaluate the following economic assertions:",
  "Review the external classification of funds provided by investors under equity finance. Evaluate the following economic assertions:",
  "Analyze how owner-provided long-term loans differ from share capital as finance sources. Evaluate the following economic assertions:",
  "Review how the balance sheet links accounting records to the sources-of-finance overview. Evaluate the following economic assertions:",
  "Analyze how short-term credit sources support working-capital needs without altering ownership. Evaluate the following economic assertions:",
  "Review how retained earnings accumulate as internal equity from undistributed profit. Evaluate the following economic assertions:",
  "Analyze how bonds and long-term bank loans both create creditor claims on the business. Evaluate the following economic assertions:",
  "Review why supplier trade credit is grouped with other short-term debt sources. Evaluate the following economic assertions:",
  "Analyze how external equity from share capital contrasts with external debt from bond issues. Evaluate the following economic assertions:",
  "Review how internal equity from retained earnings avoids interest obligations on borrowed funds. Evaluate the following economic assertions:",
  "Analyze how short-term loans from banks differ in maturity from long-term bank loans. Evaluate the following economic assertions:",
  "Review how investor funds and share capital both represent external equity injections. Evaluate the following economic assertions:",
  "Analyze how a business may combine multiple debt and equity sources shown on its balance sheet. Evaluate the following economic assertions:",
  "Review how long-term credit from owners creates repayment obligations distinct from dividends. Evaluate the following economic assertions:",
  "Analyze how overdrafts and trade credit both provide flexible short-term external finance. Evaluate the following economic assertions:",
  "Review how the finance overview separates equity sources from short-term and long-term credit. Evaluate the following economic assertions:",
  "Analyze how retained earnings remain inside the firm as internal equity rather than creditor funds. Evaluate the following economic assertions:",
];

const TITLES = [
  "Equity Finance and Debt Finance Overview",
  "Internal and External Finance Classification",
  "Misclassifying Retained Earnings",
  "Core Sources of Finance Definitions",
  "Equity and Debt Sources in Practice",
  "Short-Term Debt and Internal Equity",
  "Balance Sheet and Finance Sources",
  "Long-Term Credit and Bond Finance",
  "Owner Loans Versus Share Capital",
  "Nuanced Debt and Equity Distinctions",
  "Table 3 Finance Sources",
  "Single Correct Bond Classification",
  "Trade Credit and Overdraft Traps",
  "Investor Funds Classification",
  "Mixed Finance Source Assertions",
  "Comprehensive Finance Source Review",
  "External Debt and Equity Boundaries",
  "Retained Earnings as Internal Equity",
  "Basic Equity and Debt Pairings",
  "Full Sources-of-Finance Matrix",
  "Investor Equity and Owner Debt",
  "Short-Term Versus Long-Term Debt",
  "Isolated Long-Term Bond Source",
  "Late-Stage Debt Classifications",
  "Single Internal Equity Statement",
  "Integrated Finance Source Set",
  "Alternating True and False Pattern",
  "Standard Finance Table Assertions",
  "Bonds Versus Share Capital",
  "Late Long-Term Debt Focus",
  "Complete True Set With Balance Sheet",
  "Single Short-Term Debt Example",
  "Equity Internal-External Mix",
  "Paired Long-Term Debt Sources",
  "Single External Equity Claim",
  "Introductory Finance Classifications",
  "Mid-Level Debt Maturity Traps",
  "Owner Loan and Retained Earnings",
  "Clear Core Definitions Set",
  "Scattered True Statements",
  "Working Capital Finance Mix",
  "External Equity and Debt Quartet",
  "Two True Equity Statements",
  "Owner Loan Among Debt Sources",
  "Finance Source Combination Review",
  "Accessible Finance Distinctions",
  "Single Owner Loan Classification",
  "Three True Core Concepts",
  "Alternating Debt Maturity Cases",
  "Single Investor Equity Statement",
  "Closing Finance Source Pair",
];

// [statement, explanation] pairs — TRUE
const TRUE = [
  ["Share capital provided by outside investors is an external equity source of finance for the corporation.", "Share capital comes from investors outside the firm and counts as external equity finance."],
  ["Retained earnings that remain in the business count as internal equity finance under the standard overview.", "Profit kept in the firm supplies internal equity without creating a repayment obligation to creditors."],
  ["Funds provided by investors are classified as external equity finance in the sources-of-finance framework.", "Investor contributions enter as external equity under the textbook classification of finance sources."],
  ["Bank overdrafts and trade credit are commonly listed examples of short-term debt finance.", "Overdrafts and supplier credit finance short-term obligations and are grouped as short-term debt."],
  ["Long-term bank loans and bonds issued to investors are forms of long-term external debt finance.", "Multi-year loans and bond issues provide longer-term creditor finance that must be serviced."],
  ["Equity finance encompasses both internal sources such as retained earnings and external sources such as share capital.", "The overview treats equity as having internal and external elements, unlike debt which is external."],
  ["Short-term bank loans used to cover working capital are classified as short-term debt finance.", "Short-term bank loans finance near-term needs and belong to short-term debt finance."],
  ["Debt finance is always external because borrowed funds create obligations to outside creditors.", "All debt finance is external; creditors lie outside the firm regardless of loan maturity."],
  ["The balance sheet reveals the sources of finance that a business has used in building its assets.", "The balance sheet displays how assets are financed through equity and debt sources."],
  ["Large businesses are obliged to draw up a balance sheet showing how operations have been funded.", "Large firms must prepare a balance sheet under the accounting framework referenced in the chapter."],
  ["A loan provided by owners is classified as long-term credit within external debt finance.", "Owner loans appear under long-term credit as external debt, not as equity."],
  ["Trade credit from suppliers is short-term debt finance that postpones payment for goods and services.", "Supplier credit is a textbook short-term debt source for routine purchases."],
  ["Bonds issued to investors provide long-term debt finance through formal creditor instruments.", "Bond issues raise long-term external debt from investors who hold creditor status."],
  ["Long-term bank loans are a form of long-term external debt finance used for extended investment periods.", "Multi-year bank loans are listed under long-term credit in the finance overview."],
  ["Table 3 groups bank overdrafts, trade credit, and short-term loans under short-term debt finance.", "Overdrafts, trade credit, and short-term loans appear as short-term debt in the overview."],
  ["Table 3 includes bank loans, owner loans, and bonds among long-term credit sources.", "Bank loans, owner loans, and bonds are long-term credit examples in the table."],
  ["Retained earnings supply internal equity finance without bringing in new external funds.", "Undistributed profit kept in the firm is internal equity, not external borrowing."],
  ["Bank overdrafts provide flexible short-term debt finance for day-to-day cash shortfalls.", "Overdraft facilities are a standard short-term debt source in the finance table."],
  ["Share capital and retained earnings both appear as equity finance sources on the balance sheet.", "Equity finance components including share capital and retained earnings fund the balance sheet."],
  ["Short-term and long-term credit from creditors are recorded as debt finance on the balance sheet.", "Creditor funds from short-term and long-term credit appear as debt finance sources."],
  ["Equity finance includes share capital from investors and retained earnings kept within the firm.", "Equity spans external share capital and internal retained earnings in the overview."],
  ["Debt finance covers short-term credit such as overdrafts and long-term credit such as bank loans.", "Debt finance is split into short-term and long-term credit categories."],
  ["Funds provided by investors count as external equity when investors subscribe for ownership in the firm.", "Investor contributions are external equity under the sources-of-finance overview."],
  ["Retained earnings reinvested in the business represent internal equity finance rather than borrowed funds.", "Profit kept in the firm supplies internal equity without interest charges."],
  ["Short-term bank loans are short-term debt finance used to cover temporary funding gaps.", "Short-term bank loans belong to short-term credit in the finance table."],
  ["A loan provided by owners is long-term debt finance even though the lenders are also owners of the firm.", "Owner loans are long-term credit and remain debt finance despite the owners' equity stake."],
  ["Table 3 shows that debt finance is always external to the business entity.", "Debt finance in the table is external; no internal debt category is listed."],
  ["Table 3 lists share capital, retained earnings, and investor funds under equity finance categories.", "The table places share capital, retained earnings, and investor funds within equity finance."],
  ["Bonds issued to investors are long-term external debt finance creating creditor claims on the business.", "Bond issues are a textbook long-term debt source funded by outside investors."],
  ["Retained earnings are internal equity finance because undistributed profit remains within the business.", "Retained earnings are reinvested internally and classified as internal equity finance."],
  ["Trade credit from suppliers is short-term external debt finance for purchases on deferred payment terms.", "Trade credit is a textbook short-term debt source in the finance overview."],
  ["Share capital from investors is external equity finance contributing to the ownership base of the corporation.", "Share capital is external equity from outside investors."],
  ["Bonds and long-term bank loans are long-term debt finance creating creditor claims on the firm.", "Bonds and long-term bank loans are long-term external debt."],
  ["Equity finance comprises internal retained earnings and external share capital and investor funds.", "Equity includes internal and external elements in the finance table."],
  ["Debt finance is external and divided into short-term credit and long-term credit components.", "Debt is external with short-term and long-term subdivisions."],
  ["Long-term bank loans, owner loans, and bonds exemplify long-term external debt finance.", "Bank loans, owner loans, and bonds are long-term debt sources."],
  ["Bank overdrafts, trade credit, and short-term loans exemplify short-term debt finance.", "Overdrafts, trade credit, and short-term loans are short-term debt."],
  ["The balance sheet reveals which equity and debt sources have funded the business assets.", "The balance sheet shows the finance sources used by the business."],
  ["Retained earnings are internal equity finance because profit kept in the firm does not come from new external borrowing.", "Retained earnings are internal equity from undistributed profit."],
  ["Share capital is external equity finance because investors contribute ownership funds from outside the business.", "Share capital is external equity from outside investors."],
  ["Bank overdrafts are short-term debt finance even when used repeatedly throughout the trading year.", "Overdrafts remain short-term debt even with repeated use within a year."],
  ["Long-term bank loans are long-term external debt finance with scheduled repayment over extended periods.", "Long-term bank loans are long-term external debt."],
  ["Bonds issued to investors are long-term debt finance creating creditor claims traded in capital markets.", "Bonds are long-term debt from external investors."],
  ["Share capital and funds from investors are external equity finance sources listed in the finance overview.", "Share capital and investor funds are external equity sources."],
  ["Retained earnings are internal equity finance sourced from profits not distributed to shareholders.", "Retained earnings are internal equity from undistributed profit."],
  ["Bonds are long-term debt finance raising external creditor funds from investors.", "Bonds are long-term external debt from investors."],
  ["Trade credit is short-term debt finance allowing suppliers to defer cash receipt for goods delivered.", "Trade credit is short-term debt from suppliers."],
  ["Long-term bank loans are long-term debt finance with repayment schedules extending beyond one year.", "Long-term bank loans are long-term external debt."],
  ["A loan provided by owners is long-term credit classified as external debt finance in the overview.", "Owner loans are long-term credit within debt finance."],
  ["Short-term bank loans are short-term debt finance covering near-term working-capital requirements.", "Short-term bank loans are short-term debt for working capital."],
  ["Equity finance includes both internal retained earnings and external share capital from investors.", "Equity combines internal and external sources in the finance overview."],
  ["Debt finance is external and includes short-term credit such as overdrafts and trade credit.", "Debt is external and includes short-term credit categories."],
  ["Bonds issued to investors are long-term debt finance creating marketable creditor instruments.", "Bonds are long-term external debt finance."],
  ["Retained earnings are internal equity finance because kept profit funds the business without new borrowing.", "Retained earnings are internal equity from kept profit."],
  ["Share capital is external equity finance from investors who subscribe for shares in the corporation.", "Share capital is external equity from outside investors."],
  ["Bank overdrafts are short-term debt finance for bridging temporary cash shortfalls on current accounts.", "Overdrafts are short-term debt for liquidity needs."],
  ["Funds provided by investors are external equity finance when investors supply ownership capital to the business.", "Investor contributions are external equity under the sources-of-finance framework."],
  ["Retained earnings are internal equity finance representing profit reinvested rather than paid to owners.", "Retained earnings are internal equity from kept profit."],
  ["Share capital is external equity finance contributed by investors who acquire ownership stakes.", "Share capital is external equity from investors."],
  ["A loan provided by owners is long-term credit within external debt finance despite the lenders' ownership role.", "Owner loans are long-term credit classified as external debt."],
  ["Bonds and long-term bank loans are long-term debt finance sources from external creditors.", "Bonds and long-term bank loans are long-term external debt."],
  ["Retained earnings are internal equity finance because undistributed profit remains available within the business.", "Retained earnings are the internal equity source listed in the finance overview."],
  ["Share capital is external equity finance when investors provide ownership funding from outside the business.", "Share capital is external equity from outside investors."],
  ["Bank overdrafts are short-term debt finance used to cover temporary cash shortfalls on current accounts.", "Overdrafts are short-term debt for liquidity management."],
  ["Long-term bank loans are long-term debt finance with repayment extending beyond the short-term credit category.", "Long-term bank loans are long-term external debt."],
  ["Bonds issued to investors are long-term external debt finance listed among long-term credit sources.", "Bonds are long-term external debt from investors."],
  ["When investors subscribe for newly issued shares, the resulting share capital counts as external equity finance.", "Share subscriptions from outside investors supply external equity through share capital."],
  ["Ownership funding raised by issuing shares to outside parties is classified as external equity finance.", "Share issues to external parties raise external equity, not debt."],
  ["Undistributed profit retained for reinvestment supplies internal equity finance within the business.", "Profit retained rather than distributed is internal equity finance."],
  ["Profit kept within the firm rather than paid as dividends represents internal equity finance.", "Dividends foregone in favour of retention create internal equity."],
  ["Reinvested earnings that remain inside the business entity count as internal equity finance.", "Earnings kept in the entity are internal equity, not external borrowing."],
  ["Investor subscriptions for shares supply external equity finance to the corporation.", "Share subscriptions bring external equity from subscribing investors."],
  ["A bank overdraft facility on a current account is classified as short-term debt finance.", "Current-account overdrafts are short-term debt for liquidity management."],
  ["Drawing on an agreed overdraft limit to cover cash shortfalls represents short-term debt finance.", "Using an overdraft draws on short-term external debt."],
  ["Delayed payment to suppliers under trade credit terms qualifies as short-term debt finance.", "Deferred supplier payment is short-term debt under trade credit."],
  ["Supplier credit that postpones cash payment for delivered goods is short-term debt finance.", "Postponed supplier payment is short-term debt, not equity."],
  ["Borrowing from a bank for a period of less than one year is short-term debt finance.", "Sub-one-year bank borrowing is short-term debt finance."],
  ["Working-capital bank loans repayable within a year belong to short-term debt finance.", "Near-term bank loans for working capital are short-term debt."],
  ["Multi-year borrowing from a commercial bank is long-term debt finance.", "Commercial bank lending over many years is long-term debt."],
  ["Scheduled bank lending with repayment over several years counts as long-term debt finance.", "Multi-year scheduled bank loans are long-term external debt."],
  ["Marketable bonds sold to outside investors are long-term debt finance.", "Bonds sold to investors are long-term debt with creditor status."],
  ["Issuing bonds to raise creditor funds from investors is long-term external debt finance.", "Bond issues raise long-term debt from external investors."],
  ["Owners who lend money to their own firm provide long-term credit classified as external debt finance.", "Owner lending creates long-term external debt, not equity."],
  ["A long-term loan from owners appears under long-term credit as external debt finance in the overview.", "Owner loans sit in long-term credit as external debt."],
  ["All borrowed funds that must be repaid to creditors constitute external debt finance.", "Repayable creditor funds are always external debt."],
  ["Creditor finance obtained from parties outside the business is always classified as debt finance.", "Outside creditor funds are debt finance under the overview."],
  ["The finance overview lists both internal retained earnings and external share capital under equity finance.", "Equity in the overview spans internal retention and external share capital."],
  ["Mandatory balance sheets for large firms disclose how equity and debt sources have funded assets.", "Large-firm balance sheets show equity and debt funding sources."],
  ["Large corporations must publish balance sheets showing the sources of finance used to acquire assets.", "Published balance sheets reveal the finance sources behind assets."],
  ["Table 3 places bank overdrafts among the commonly used short-term credit sources.", "Overdrafts appear in Table 3 as short-term credit examples."],
  ["The overview lists trade credit alongside bank overdrafts as examples of short-term debt finance.", "Trade credit and overdrafts are paired as short-term debt examples."],
  ["Short-term credit in the overview includes trade credit, overdrafts, and short-term bank loans.", "The short-term credit category covers trade credit, overdrafts, and short-term loans."],
  ["Long-term credit in the overview includes bank loans, loans from owners, and bonds.", "Long-term credit groups bank loans, owner loans, and bonds together."],
  ["Internal equity from retained earnings avoids the interest charges that accompany borrowed funds.", "Retained earnings fund the firm internally without creditor interest."],
  ["External equity from share capital increases ownership funding without creating creditor claims.", "Share capital adds external equity without creditor repayment obligations."],
  ["Bondholders hold creditor claims, whereas shareholders hold ownership claims on the corporation.", "Bonds create creditor claims distinct from share ownership."],
  ["A renewable overdraft used for seasonal cash management remains short-term debt finance.", "Seasonal overdraft use stays within short-term debt classification."],
  ["Investor funds used to purchase newly issued shares are external equity finance.", "Purchasing new shares with investor funds is external equity finance."],
  ["Retained earnings accumulated over several profitable years remain internal equity finance.", "Accumulated retained profit stays internal equity across reporting periods."],
  ["Share capital recorded on the balance sheet reflects external equity contributed by investors.", "Balance-sheet share capital represents external equity from investors."],
  ["Short-term bank loans arranged to finance inventory purchases are short-term debt finance.", "Inventory bank loans with near-term repayment are short-term debt."],
  ["Long-term bank loans matched to factory assets with lengthy useful lives are long-term debt finance.", "Asset-matched multi-year bank loans are long-term debt."],
  ["Bond finance raised for a major expansion project is long-term external debt finance.", "Expansion bond issues provide long-term external debt."],
  ["Owner-provided loans with multi-year repayment schedules are long-term credit within debt finance.", "Multi-year owner loans are long-term credit, not equity."],
  ["Equity finance and debt finance are both disclosed through the balance sheet of a large business.", "Large businesses disclose both equity and debt on the balance sheet."],
  ["Funds from investors and retained earnings are the two broad equity components in the finance overview.", "Investor funds and retained earnings form the equity pair in the overview."],
  ["External debt from bonds must be serviced with interest, unlike internal equity from retained earnings.", "Bond debt carries interest obligations that retained earnings do not."],
  ["Trade credit for raw materials delivered today but paid for next month is short-term debt finance.", "Month-end supplier credit for materials is short-term debt."],
  ["Share capital, investor funds, and retained earnings together cover the equity side of the finance table.", "The equity side spans share capital, investor funds, and retained earnings."],
  ["Bank overdrafts, trade credit, and short-term loans jointly cover routine short-term funding needs.", "Routine short-term needs are met by overdrafts, trade credit, and short-term loans."],
  ["Long-term bank loans, owner loans, and bonds jointly fund investments with extended payback periods.", "Extended investments are funded by long-term bank loans, owner loans, and bonds."],
  ["Only equity finance includes an internal source, whereas all debt finance is obtained externally.", "Internal finance appears only on the equity side; debt is external."],
  ["Retained earnings differ from share capital because retention uses past profit while shares bring new investor funds.", "Retention uses kept profit; share capital brings new external investor funds."],
  ["A corporation's balance sheet shows whether assets were financed through equity sources, debt sources, or both.", "The balance sheet reveals equity and/or debt funding of assets."],
  ["Large businesses must draw up a balance sheet that makes their sources of finance visible to users.", "Large firms' balance sheets must show visible finance sources."],
  ["Short-term credit sources leave ownership unchanged while providing temporary external funding.", "Short-term credit funds the firm externally without altering ownership."],
  ["External equity through share capital dilutes neither creditor claims nor repayment obligations on debt.", "Share capital adds equity without converting debt obligations."],
  ["Internal equity through retained earnings can fund projects without issuing new shares or new debt.", "Retained earnings can fund projects without new shares or borrowing."],
  ["Bond issues and long-term bank loans both require interest payments to external creditors.", "Bonds and long-term bank loans both carry interest owed to creditors."],
  ["Supplier trade credit is grouped with overdrafts because both finance near-term obligations as short-term debt.", "Trade credit and overdrafts both cover near-term needs as short-term debt."],
  ["Share capital from a public share issue is external equity finance under the standard classification.", "Public share issues raise external equity through share capital."],
  ["Retained earnings from a profitable year kept for expansion are internal equity finance.", "Profitable-year retention for expansion is internal equity."],
  ["A short-term loan from a bank to cover a quarterly tax payment is short-term debt finance.", "Quarterly tax coverage via bank loan is short-term debt."],
  ["A ten-year bank loan to purchase production machinery is long-term debt finance.", "A ten-year machinery loan is long-term external debt."],
  ["A bond issue with a fifteen-year maturity is long-term debt finance from external investors.", "Fifteen-year bond maturity places the issue in long-term debt."],
  ["An owner loan repayable over eight years is long-term credit classified as external debt finance.", "An eight-year owner loan is long-term external debt credit."],
  ["Debt finance creates a legal obligation to repay borrowed amounts, unlike retained earnings kept as equity.", "Debt carries legal repayment duties that retained earnings do not."],
  ["Equity finance from retained earnings is generated inside the firm, whereas share capital is contributed from outside.", "Retained earnings are generated internally; share capital comes from outside."],
  ["Table 3 distinguishes equity finance with internal and external parts from wholly external debt finance.", "Table 3 separates partly internal equity from wholly external debt."],
  ["The balance sheet links to chapter 6 accounting by showing which finance sources fund recorded assets.", "Balance-sheet finance sources connect to the accounting treatment in chapter 6."],
  ["Investor funds and share capital both increase external equity without adding creditor liabilities.", "Investor funds and share capital add external equity, not creditor liabilities."],
  ["Overdrafts and short-term loans both address liquidity needs classified as short-term external debt.", "Overdrafts and short-term loans both serve liquidity as short-term debt."],
  ["Owner loans and bonds both appear on the long-term credit side of the debt finance overview.", "Owner loans and bonds share the long-term credit side of debt finance."],
  ["Retained earnings appear as internal equity because no outside party supplied the retained profit as a loan.", "Retained profit was not lent by an outsider and therefore is internal equity."],
  ["Share capital appears as external equity because outside investors supplied the subscribed funds.", "Outside investors supplied subscribed funds, making share capital external equity."],
  ["Trade credit appears as short-term debt because suppliers extend payment terms rather than ownership rights.", "Suppliers grant payment delay as credit, not ownership, making trade credit short-term debt."],
  ["Bonds appear as long-term debt because investors lend funds with fixed creditor repayment terms.", "Bond investors lend on creditor terms, placing bonds in long-term debt."],
  ["Bank overdrafts appear as short-term debt because they cover immediate cash shortfalls on current accounts.", "Immediate cash shortfalls on current accounts are covered by overdraft short-term debt."],
  ["Short-term bank loans appear as short-term debt because repayment is expected within a relatively brief period.", "Brief repayment horizons place working-capital bank loans in short-term debt."],
  ["Long-term bank loans appear as long-term debt because repayment is spread over an extended schedule.", "Extended repayment schedules place multi-year bank loans in long-term debt."],
  ["A loan provided by owners appears as long-term credit because owners lend with repayment terms like other creditors.", "Owner lending with creditor repayment terms is long-term credit debt."],
  ["Funds provided by investors appear as external equity because investors buy ownership rather than creditor instruments.", "Investors buying ownership receive external equity status, not creditor claims."],
  ["Retained earnings appear as internal equity because the firm keeps its own undistributed profit for reuse.", "The firm reuses its own kept profit as internal equity."],
  ["Debt finance is external in the overview because every listed debt source involves an outside creditor.", "Each listed debt source in the overview involves an outside creditor."],
  ["Equity finance includes an internal component because retained earnings need not be raised from outsiders.", "Retained earnings need no outsider and therefore give equity an internal component."],
  ["Large businesses are obliged to draw up a balance sheet so users can see equity and debt finance sources.", "Obligatory large-firm balance sheets expose equity and debt finance sources to users."],
  ["The sources-of-finance overview in Table 3 is reflected in how large firms report funding on the balance sheet.", "Table 3 finance categories are reflected on large firms' balance sheets."],
  ["Short-term credit supports working capital while long-term credit supports assets with longer useful lives.", "Working capital uses short-term credit; longer-lived assets use long-term credit."],
  ["Share capital and bonds both involve outside parties, yet share capital is equity and bonds are debt.", "Outside share capital is equity; outside bonds remain debt despite both involving third parties."],
  ["Retained earnings and bank overdrafts differ because retention is internal equity and overdrafts are external debt.", "Retention is internal equity; overdrafts are external debt."],
  ["Investor funds differ from owner loans because investor funds are equity subscriptions and owner loans are credit.", "Investor subscriptions are equity; owner loans are credit."],
  ["Trade credit and retained earnings differ because trade credit is external short-term debt and retention is internal equity.", "Trade credit is external short-term debt; retention is internal equity."],
  ["Bonds and share capital differ because bonds create creditor claims and share capital creates ownership claims.", "Bonds give creditors claims; share capital gives ownership claims."],
  ["Bank overdrafts and long-term bank loans differ because overdrafts are short-term credit and multi-year loans are long-term credit.", "Overdrafts are short-term credit; multi-year bank loans are long-term credit."],
  ["Owner loans and share capital differ because owner loans must be repaid as debt and share capital does not.", "Owner loans must be repaid; share capital does not create the same repayment duty."],
  ["Retained earnings and investor funds differ because retention is internal equity and investor subscriptions are external equity.", "Retention is internal equity; investor subscriptions are external equity."],
  ["Short-term bank loans and bonds differ because near-term bank loans are short-term debt and bonds are long-term debt.", "Near-term bank loans are short-term debt; bonds are long-term debt."],
  ["The balance sheet reveals finance sources because it shows how assets are matched to equity and liability funding.", "Asset matching to equity and liabilities reveals finance sources on the balance sheet."],
  ["External equity from share capital can be combined with external debt from bonds on the same balance sheet.", "Share capital and bonds can coexist as external equity and external debt on one balance sheet."],
  ["Internal equity from retained earnings can be combined with short-term debt from trade credit in the same business.", "Retained earnings and trade credit can coexist as internal equity and short-term debt."],
  ["A firm may use retained earnings as internal equity and simultaneously maintain a bank overdraft as short-term debt.", "Internal retention and an overdraft can coexist as equity and short-term debt."],
  ["A firm may raise share capital as external equity and later issue bonds as additional long-term debt finance.", "Share capital and later bond issues can combine external equity with long-term debt."],
  ["A firm may borrow through a long-term bank loan while also using supplier trade credit for short-term purchases.", "Long-term bank loans and supplier trade credit can fund different horizons together."],
  ["A firm may accept investor funds as external equity while owners also provide a separate long-term loan as debt.", "Investor equity and a separate owner loan can coexist as external equity and debt."],
  ["Large firms reporting a balance sheet allow users to identify whether funding came from equity or debt sources.", "Balance-sheet reporting lets users see equity versus debt funding."],
  ["Table 3 lists funds from investors beside share capital because both are external equity sources.", "Investor funds sit beside share capital as external equity in Table 3."],
  ["Table 3 lists retained earnings separately from share capital because retention is internal and shares are external.", "Retained earnings are internal equity; share capital is external equity in Table 3."],
  ["Table 3 lists overdrafts beside trade credit because both are short-term external debt examples.", "Overdrafts and trade credit are paired short-term debt examples in Table 3."],
  ["Table 3 lists bank loans beside bonds because both are long-term external debt examples.", "Bank loans and bonds are paired long-term debt examples in Table 3."],
  ["Table 3 lists owner loans with other long-term credit because owner lending creates external debt obligations.", "Owner loans join long-term credit because owner lending creates debt obligations."],
  ["Equity finance can be internal through retention or external through share capital and investor funds.", "Equity may be internal via retention or external via shares and investor funds."],
  ["Debt finance can be short-term through overdrafts, trade credit, and short-term loans, or long-term through bank loans, owner loans, and bonds.", "Debt spans short-term overdrafts, trade credit, and short-term loans plus long-term bank, owner, and bond credit."],
];

// [statement, explanation] pairs — FALSE (traps)
const FALSE = [
  ["Share capital is internal equity finance because issued shares are recorded on the corporation's own balance sheet.", "Share capital comes from outside investors and is external equity, not internal equity."],
  ["Retained earnings are external equity because they ultimately derive from revenue paid by customers.", "Retained earnings are internal equity even though they originate from trading activity."],
  ["Debt finance is classified as internal finance because interest payments return profit to the owners.", "Debt finance is external; interest is a cost of borrowing, not internal equity."],
  ["Bank overdrafts are long-term debt finance because the overdraft limit may remain available for years.", "Overdrafts are classified as short-term credit despite renewable facilities."],
  ["Bonds are short-term debt finance because holders may sell them quickly on secondary markets.", "Bonds are long-term debt finance even when traded after issue."],
  ["A loan provided by owners is equity finance because owners already participate in business ownership.", "Owner loans are long-term credit and debt finance, not equity, despite the owners' stake."],
  ["Trade credit is equity finance because suppliers effectively share the commercial risk of the buyer.", "Supplier trade credit is short-term debt finance, not equity shared with suppliers."],
  ["Funds provided by investors are debt finance because investors expect a financial return.", "Investor funds are external equity; expecting a return does not reclassify them as debt."],
  ["Retained earnings are debt finance because they must eventually be repaid to creditors.", "Retained earnings are internal equity, not liabilities owed to external creditors."],
  ["Retained earnings become external equity once the firm publishes audited accounts to outside parties.", "Retained earnings remain internal equity; external reporting does not reclassify them as external."],
  ["Share capital is long-term debt finance because shareholders commit funds for many years.", "Share capital is external equity, not debt, regardless of how long investors remain."],
  ["Short-term bank loans are long-term debt finance when the borrower intends to renew them repeatedly.", "Short-term bank loans remain short-term debt regardless of renewal intentions."],
  ["Debt finance can be internal when the lender is a shareholder who also receives dividend payments.", "Debt finance is external even if the creditor is also a shareholder; lending creates debt, not equity."],
  ["Retained earnings are external equity because they represent value generated from outside customer payments.", "Retained earnings are internal equity even though revenue comes from customers."],
  ["Bank overdrafts are equity finance when used to cover working capital shortfalls.", "Overdrafts are short-term debt finance, not equity, regardless of working-capital purpose."],
  ["Table 3 classifies retained earnings as short-term debt because they can be spent within one year.", "Retained earnings are internal equity finance, not short-term debt."],
  ["Equity finance is always external because only shareholders provide it.", "Equity includes internal retained earnings as well as external share capital."],
  ["Trade credit is long-term debt finance because supplier relationships often continue for many years.", "Trade credit is short-term debt despite ongoing supplier relationships."],
  ["Bonds are short-term debt finance because coupon payments occur at regular intervals.", "Regular coupon payments do not make bonds short-term debt; bonds are long-term credit."],
  ["Share capital is debt finance because investors provide funds that must eventually be repaid with interest.", "Share capital is external equity; equity capital is not repaid like debt with interest."],
  ["Retained earnings are external equity because they arise from revenue paid by outside customers.", "Retained earnings are internal equity despite arising from external trading."],
  ["Bank overdrafts are equity finance when the account holder is also a major shareholder of the bank.", "Overdrafts are short-term debt; the customer's shareholding in the bank does not reclassify the overdraft."],
  ["A loan provided by owners is equity finance because the lenders share in the ownership of the business.", "Owner loans are long-term credit and debt finance, not equity, despite shared ownership."],
  ["Funds provided by investors are short-term debt finance when investors expect to exit within one reporting cycle.", "Investor funds are external equity, not short-term debt, regardless of expected holding period."],
  ["Debt finance includes internal sources when the firm repays loans using its own retained earnings.", "Using retained earnings to repay loans does not make debt finance internal; debt remains external."],
  ["Share capital is internal equity finance because share registers are maintained within the corporation's offices.", "Share capital is external equity from outside investors, not internal equity."],
  ["Retained earnings are external equity because they are disclosed in published financial statements.", "Retained earnings are internal equity; publication in accounts does not make them external."],
  ["Bank overdrafts are long-term debt finance because banks review and maintain overdraft limits over time.", "Overdrafts are short-term debt despite ongoing bank review of limits."],
  ["Trade credit is equity finance because suppliers extend payment terms as a commercial partnership.", "Trade credit is short-term debt, not equity shared with suppliers."],
  ["Bonds are short-term debt finance because issuers may redeem some issues before the final maturity date.", "Early redemption options do not reclassify bonds as short-term debt; bonds are long-term credit."],
  ["Equity finance and debt finance are both primarily internal because they appear on the firm's balance sheet.", "Only part of equity is internal; debt finance is entirely external despite balance-sheet presentation."],
  ["Share capital is long-term debt finance because equity investors commit capital for extended periods.", "Share capital is external equity, not long-term debt from creditors."],
  ["Retained earnings are debt finance because accumulated profit must eventually be returned to creditors.", "Retained earnings are internal equity, not debt owed to creditors."],
  ["Bank overdrafts are equity finance when the firm uses them to protect owner dividends from cash shortfalls.", "Overdrafts are short-term debt finance, not equity, regardless of dividend protection purpose."],
  ["Funds provided by investors are debt finance because capital injections must eventually be returned to providers.", "Investor funds are external equity; equity capital is not repaid like debt."],
  ["Short-term bank loans are long-term debt finance when the borrower holds a multi-year banking relationship.", "Short-term bank loans remain short-term debt despite a long banking relationship."],
  ["Retained earnings are external equity because they reflect earnings generated from trading with outside customers.", "Customer-generated revenue does not reclassify retained earnings as external equity."],
  ["Share capital is debt finance because shareholders may lose their investment if the corporation fails.", "Share capital is external equity; investment risk does not reclassify equity as debt."],
  ["Trade credit is long-term debt finance because payment terms may be negotiated repeatedly with suppliers.", "Trade credit is short-term debt despite repeated negotiation of payment terms."],
  ["Bonds are short-term debt finance because issuers make periodic interest payments to holders.", "Periodic interest does not make bonds short-term; bonds are long-term debt finance."],
  ["Bank overdrafts are long-term debt finance because overdraft facilities may continue across several financial years.", "Overdrafts are short-term debt despite multi-year facilities."],
  ["Retained earnings are external equity because they are reported to external auditors each year.", "External audit reporting does not convert retained earnings from internal to external equity."],
  ["Share capital is internal equity because the shares are recorded on the company's own books.", "Share capital is external equity from outside investors, not internal equity."],
  ["A loan provided by owners is equity finance because owners reinvest through their existing ownership stake.", "Owner loans are long-term credit and debt finance, not equity reinvestment."],
  ["Investor funds are debt finance because investors supply capital expecting future returns.", "Investor funds are external equity; expecting returns classifies them as equity investors, not creditors."],
  ["Bank overdrafts are equity finance when used repeatedly to fund the owner's working capital cycle.", "Overdrafts are short-term debt finance, not equity, regardless of repeated use."],
  ["Retained earnings are short-term debt because they can be deployed for working capital within one year.", "Retained earnings are internal equity finance, not short-term debt."],
  ["Share capital is short-term debt finance because new shares may be issued to raise quick funds.", "Share capital is external equity, not short-term debt from creditors."],
  ["Bonds are equity finance because bondholders participate indirectly in corporate performance through coupons.", "Bonds are long-term external debt; coupon receipts do not make bondholders equity owners."],
  ["Trade credit is internal finance because it uses supplier relationships already embedded in operations.", "Trade credit is short-term external debt finance, not internal finance."],
  ["Long-term bank loans are short-term debt finance when the first repayment falls due within twelve months.", "Long-term bank loans are long-term external debt even when the first instalment is due soon."],
  ["Retained earnings are creditor funds because undistributed profit could otherwise be paid to shareholders.", "Retained earnings are internal equity, not external creditor finance."],
  ["Funds provided by investors are internal equity when the investors are also employees of the firm.", "Investor funds are external equity regardless of whether investors are also employees."],
  ["Debt finance is internal when the borrowing firm already holds substantial retained earnings on its balance sheet.", "Holding retained earnings does not convert external debt into internal finance."],
  ["Share capital is external debt finance because investors advance funds before receiving dividend income.", "Share capital is external equity; receiving dividends later does not make investor funds debt."],
  ["Bank overdrafts are long-term debt finance because the same facility is used repeatedly each quarter.", "Repeated quarterly use does not convert overdrafts into long-term debt."],
  ["Bonds are internal finance because coupon payments are met from the issuer's own operating cash flows.", "Meeting coupons from operating cash flow does not make bond finance internal; bonds remain external debt."],
  ["Retained earnings are external equity because they increase when the firm trades with outside customers.", "Retained earnings remain internal equity despite arising from external trading."],
  ["A loan provided by owners is short-term debt finance when repayment is scheduled within one year.", "Owner loans are classified as long-term credit in the overview, not automatically as short-term debt."],
  ["Trade credit is long-term debt finance because supplier agreements often span many accounting periods.", "Trade credit is short-term debt despite long supplier relationships."],
  ["Share capital is internal equity because share certificates are held within the corporation's records.", "Share capital is external equity from outside investors, not internal equity."],
  ["Investor funds are debt finance because investors supply capital expecting future returns.", "Investor funds are external equity; expecting returns does not reclassify them as debt."],
  ["Retained earnings are external equity because auditors verify them in published annual accounts.", "External audit verification does not convert retained earnings into external equity."],
  ["Share capital is internal equity because the corporation registers the shares on its own books.", "Registering shares internally does not make share capital internal equity."],
  ["Bank overdrafts are equity finance because they adjust net assets available to shareholders each month.", "Overdrafts are short-term debt; monthly net-asset effects do not reclassify them as equity."],
  ["Trade credit is equity finance because loyal suppliers effectively co-invest in the buyer's stock.", "Supplier loyalty does not make trade credit equity; it remains short-term debt."],
  ["Bonds are short-term debt finance because issuers pay coupons every six months.", "Semi-annual coupons do not make bonds short-term debt; bonds are long-term credit."],
  ["Long-term bank loans are short-term debt finance when the bank reviews the loan each year.", "Annual bank review does not reclassify a multi-year loan as short-term debt."],
  ["Owner loans are equity finance because owners already receive dividends from the same business.", "Receiving dividends does not turn an owner loan into equity; it remains long-term debt."],
  ["Short-term bank loans are long-term debt finance when the borrower has used the same bank for decades.", "A long banking relationship does not convert short-term loans into long-term debt."],
  ["Debt finance is internal when repayments are made from cash generated inside the business.", "Repaying debt from internal cash flow does not make the original borrowing internal finance."],
  ["Equity finance is wholly external because only outside shareholders can provide ownership funding.", "Equity includes internal retained earnings as well as external share capital."],
  ["Retained earnings are debt finance because directors could decide to pay them out as dividends later.", "Possible future dividends do not reclassify retained earnings as debt finance."],
  ["Share capital is short-term debt finance because shares can be sold quickly on a stock exchange.", "Secondary-market trading does not make share capital short-term debt."],
  ["Investor funds are internal equity when investors also serve as managers of the corporation.", "Manager-investors still supply external equity when they subscribe for shares."],
  ["Bank overdrafts are long-term debt finance because the overdraft limit is reviewed annually.", "Annual limit review keeps overdrafts in short-term debt, not long-term credit."],
  ["Trade credit is long-term debt finance because some suppliers deliver goods throughout the year.", "Year-round deliveries do not move trade credit into long-term debt."],
  ["Bonds are equity finance because rising bond prices reward holders when the firm performs well.", "Bond price changes do not make bonds equity; bonds remain creditor finance."],
  ["A loan provided by owners is short-term debt finance when the owners expect repayment within months.", "Owner loans in the overview are long-term credit, not automatically short-term debt."],
  ["Funds provided by investors are short-term debt finance when raised to cover a temporary cash shortage.", "Temporary cash shortages funded by share subscriptions are still external equity."],
  ["Retained earnings are external equity because they grow when the firm sells to outside customers.", "Sales to customers do not reclassify retained earnings as external equity."],
  ["Share capital is debt finance because failing firms may leave shareholders with no recovery.", "Shareholder loss risk is an equity feature and does not reclassify share capital as debt."],
  ["Bank overdrafts are internal finance because the borrowing firm already holds cash in other accounts.", "Other cash balances do not make overdrafts internal finance."],
  ["Trade credit is internal finance because it uses existing supplier relationships within normal operations.", "Operational supplier links do not make trade credit internal finance."],
  ["Bonds are internal finance because the issuer services them from internally generated revenue.", "Servicing bonds from revenue does not make bond finance internal."],
  ["Long-term bank loans are equity finance because they support assets that benefit shareholders.", "Asset benefits to shareholders do not reclassify bank loans as equity."],
  ["Owner loans are short-term debt finance because owners may demand early repayment in a crisis.", "Possible early repayment does not automatically make owner loans short-term debt."],
  ["Short-term bank loans are equity finance when used to protect the firm's solvency for owners.", "Protecting solvency with a bank loan still leaves the borrowing classified as short-term debt."],
  ["Debt finance is internal when the creditor is also listed as a shareholder in the annual report.", "A creditor who is also a shareholder still provides debt when lending under a loan contract."],
  ["Retained earnings are short-term debt because they can be spent on wages within the next month.", "Spending retention on near-term wages does not make retained earnings short-term debt."],
  ["Share capital is long-term debt finance because shareholders may hold shares for many years.", "Long holding periods do not convert share capital into long-term debt."],
  ["Investor funds are creditor finance because investors expect the business to generate future profits.", "Expecting future profits accompanies equity investment and does not create creditor status."],
  ["Bank overdrafts are long-term debt finance because the facility remains open until the bank closes it.", "An open facility does not move overdrafts from short-term to long-term debt."],
  ["Trade credit is equity finance because suppliers benefit when the buyer sells the supplied goods.", "Supplier benefit from the buyer's sales does not make trade credit equity finance."],
  ["Bonds are short-term debt finance because some bonds mature in less than five years.", "Maturity length alone in common examples places bonds in long-term credit in the overview."],
  ["Long-term bank loans are short-term debt finance when the first instalment is due next quarter.", "A near first instalment does not reclassify a multi-year bank loan as short-term debt."],
  ["Owner loans are equity finance because owners could have injected the same amount as share capital instead.", "Choosing a loan rather than shares creates debt finance, not equity."],
  ["Funds provided by investors are debt finance because corporations may buy back shares later.", "Possible later buy-backs do not reclassify investor subscriptions as debt finance."],
  ["Retained earnings are external equity because they are visible to outside readers of the accounts.", "Visibility to outside readers does not make retained earnings external equity."],
  ["Share capital is internal equity because it represents the firm's own issued ownership instruments.", "Issued ownership instruments from outside investors are external equity, not internal."],
  ["Bank overdrafts are equity finance when the overdraft is fully covered by owner guarantees.", "Owner guarantees do not reclassify overdraft borrowing as equity finance."],
  ["Trade credit is long-term debt finance because some suppliers allow sixty-day payment terms.", "Sixty-day supplier terms still fall within short-term debt finance."],
];

const SCENE_IDX = new Set([1, 4, 7, 9, 12, 20, 21, 26, 32, 37, 40, 44, 47]);

const TRUE_POOL = TRUE;
const FALSE_POOL = FALSE;
const usedGlobal = new Set();

function tokens(s) {
  return new Set(
    s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length > 2),
  );
}

function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}

function pickFrom(pool, cursorRef, localStmts) {
  for (let n = 0; n < pool.length; n++) {
    const item = pool[(cursorRef.i + n) % pool.length];
    if (usedGlobal.has(item[0])) continue;
    if (localStmts.some((s) => jaccard(s, item[0]) >= 0.68)) continue;
    usedGlobal.add(item[0]);
    cursorRef.i = (cursorRef.i + n + 1) % pool.length;
    return item;
  }
  throw new Error(`Ran out of unique statements (${localStmts.length} local)`);
}

const tCursor = { i: 0 };
const fCursor = { i: 0 };

const cases = slots.map((slot, idx) => {
  const statements = [];
  const tactical_explanations = [];
  for (const t of slot.answer_key) {
    const [s, e] = (t ? pickFrom(TRUE_POOL, tCursor, statements) : pickFrom(FALSE_POOL, fCursor, statements));
    statements.push(s);
    tactical_explanations.push(`${t ? "TRUE" : "FALSE"} — ${e}`);
  }
  const ctxPool = SCENE_IDX.has(idx) ? SCENE : THEORY;
  return {
    subsection: "4.5",
    case_id: slot.case_id,
    title: TITLES[idx] ?? `Sources of Finance Case ${idx + 1}`,
    context: ctxPool[idx % ctxPool.length],
    statements,
    answer_key: slot.answer_key,
    tactical_explanations,
    difficulty_level: slot.difficulty_level,
    tier: "full",
  };
});

// --- validation ---
const banned = /\b(the book|according to the book|\(alt|fuhrmann notes|tina|steve|at&s|t&s computer services)\b/i;
const endRe = /Evaluate the following economic assertions:\s*$/i;
const issues = [];
const stmtNorm = new Map();

if (cases.length !== 50) issues.push(`count ${cases.length} !== 50`);

for (let i = 0; i < slots.length; i++) {
  const c = cases[i];
  const s = slots[i];
  if (c.case_id !== s.case_id) issues.push(`${c.case_id} id mismatch`);
  if (JSON.stringify(c.answer_key) !== JSON.stringify(s.answer_key))
    issues.push(`${c.case_id} answer_key mismatch`);
  if (c.difficulty_level !== s.difficulty_level)
    issues.push(`${c.case_id} difficulty mismatch`);
  if (!endRe.test(c.context.trim()) || c.context.trim().length < 70)
    issues.push(`${c.case_id} bad context`);
  if (banned.test(JSON.stringify(c))) issues.push(`${c.case_id} banned phrase`);
  for (let j = 0; j < 5; j++) {
    const expect = c.answer_key[j] ? "TRUE" : "FALSE";
    if (!c.tactical_explanations[j].startsWith(`${expect} —`))
      issues.push(`${c.case_id}[${j}] expl prefix`);
    const sn = c.statements[j].toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    if (stmtNorm.has(sn)) issues.push(`dup stmt ${stmtNorm.get(sn)} vs ${c.case_id}[${j}]`);
    else stmtNorm.set(sn, `${c.case_id}[${j}]`);
    for (let k = j + 1; k < 5; k++) {
      const a = new Set(sn.split(" ").filter((w) => w.length > 2));
      const bn = c.statements[k].toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
      const b = new Set(bn.split(" ").filter((w) => w.length > 2));
      let inter = 0;
      for (const w of a) if (b.has(w)) inter++;
      const sim = inter / (a.size + b.size - inter);
      if (sim >= 0.72) issues.push(`${c.case_id} near-dup ${j}/${k} sim=${sim.toFixed(2)}`);
    }
  }
}

const trueCounts = {};
const diffs = {};
for (const s of slots) {
  trueCounts[s.trueCount] = (trueCounts[s.trueCount] || 0) + 1;
  diffs[s.difficulty_level] = (diffs[s.difficulty_level] || 0) + 1;
}

if (issues.length) {
  console.error("VALIDATION FAILED:", issues.length);
  for (const x of issues.slice(0, 40)) console.error(" ", x);
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(cases, null, 2) + "\n");
console.log("Wrote", OUT);
console.log("Cases:", cases.length);
console.log("Unique statements:", stmtNorm.size);
console.log("TRUE counts:", trueCounts);
console.log("Difficulty:", diffs);
console.log("Scene contexts:", cases.filter((c) => SCENE.includes(c.context)).length);
