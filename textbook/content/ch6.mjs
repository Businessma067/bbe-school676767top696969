export default {
  num: 6,
  title: "Accounting — keeping record of business transactions",
  intro:
    "Every business generates a stream of transactions: purchases, sales, borrowings, repayments, wages, rents and many others. Bookkeepers record those transactions from supporting documents such as invoices and receipts so that the firm can later present a clear picture of its financial status. The reports built from that record are called accounts, and together they form the financial statement of the business.\n\nThis chapter explains the three main components of that statement — the balance sheet, the income statement (also called the profit and loss account), and the cash flow statement — and how to read them carefully. You will learn the balance-sheet identity, how assets and claims on assets are classified, how profit relates to equity, why depreciation matters, why profit is not the same as cash flow, how financial accounting differs from management accounting, and how common ratios help you judge liquidity, profitability, leverage and efficiency. Share-related figures that investors use when reading published statements are included where they support analysis.",

  sections: [
    {
      id: "6.1",
      title: "What a balance sheet is",
      blocks: [
        {
          type: "p",
          text: "A balance sheet is a snapshot of what a business owns and how that ownership was financed on a particular date. On one side it lists assets — the resources controlled by the business and used in its operations. On the other side it lists claims on those assets: liabilities (amounts owed to outsiders) and owner's equity (the residual claim of the owners). Because every euro bound in an asset must have come from somewhere, the two sides always add up to the same total.",
        },
        {
          type: "definition",
          term: "Balance sheet",
          text: "A statement of a company's assets and of how those assets were financed by liabilities and owner's equity at a specific point in time.",
        },
        {
          type: "definition",
          term: "Assets",
          text: "Resources the business owns or controls that are used for the business and that have economic value (for example equipment, inventory, receivables and cash).",
        },
        {
          type: "definition",
          term: "Liabilities",
          text: "Debts and obligations owed to other persons, businesses or banks that must be repaid at a certain point in time and/or over a certain period. Funds are often provided by banks or suppliers; money owed to suppliers is also called trade credit or trade payables.",
        },
        {
          type: "definition",
          term: "Owner's equity (capital)",
          text: "The residual interest in the assets after deducting liabilities — the portion of assets not financed by debt. It reflects funds provided by owners or shareholders and profits retained in the business.",
        },
        {
          type: "formula",
          label: "Balance-sheet identity",
          text: "Assets = liabilities + owner's equity",
        },
        {
          type: "p",
          text: "This identity must hold because (1) all assets were funded either through equity or through liabilities, (2) all funds are somehow bound or invested in the business — even cash held in a bank account was funded through equity or liabilities and is now bound in that form — and (3) any increase in assets must be financed by an increase in either liabilities or equity.",
        },
        {
          type: "figure",
          id: "balance-sheet",
          caption: "The balance sheet: assets financed by liabilities and owner's equity.",
        },
        {
          type: "example",
          title: "Worked example — constructing a balance sheet",
          text: "A newly founded consultancy holds the following resources on 1 January: office equipment and computers used in the office €25,000; a delivery van €8,000; computers held in stock for resale (inventory) €12,500; cash and bank deposits €3,500. A bank loan of €25,000 financed part of these purchases; the rest was financed by the owners.\n\nTotal assets = 25,000 + 8,000 + 12,500 + 3,500 = €49,000.\nLiabilities (bank loan) = €25,000.\nOwner's equity = assets − liabilities = 49,000 − 25,000 = €24,000.\n\nNotice that office computers (used in operations) and computers held for resale are different types of asset even though the physical items look similar: classification follows intended use, not appearance.",
        },
        {
          type: "table",
          caption: "Simplified opening balance sheet (€)",
          headers: ["Assets", "€", "Liabilities and equity", "€"],
          rows: [
            ["Office equipment (incl. computers)", "25,000", "Owner's equity (capital)", "24,000"],
            ["Van", "8,000", "Bank loan (liabilities)", "25,000"],
            ["Inventory", "12,500", "", ""],
            ["Cash and bank deposit", "3,500", "", ""],
            ["Total assets", "49,000", "Total liabilities and equity", "49,000"],
          ],
        },
        {
          type: "p",
          text: "Assets are usually listed in a standard order. Fixed assets (also called non-current assets) normally have a lifespan of more than one year and are intended to be used in the company for longer than one year; they usually cannot be turned into cash so easily. Current assets have higher liquidity: they are usually not used longer than a year because they are used up, spent in production, or sold. Examples of non-current assets include property, plant, premises, buildings, machinery, office equipment (including computers used in the office), and financial assets meant to be kept longer than a year. Examples of current assets include inventory (merchandise not yet sold), accounts receivable / debtors (trade receivables — money owed to the business), and cash. Intangible assets such as trademarks, patents, copyrights and acquired licences cannot be seen or touched but still have value; they are assets just as tangible items are.",
        },
        {
          type: "definition",
          term: "Non-current (fixed) assets",
          text: "Assets with a useful life of more than one year that are intended for longer-term use in the business.",
        },
        {
          type: "definition",
          term: "Current assets",
          text: "Assets with higher liquidity that are normally used up, sold or converted into cash within one year.",
        },
        {
          type: "p",
          text: "Liabilities are split by timing. Current liabilities are debts or obligations due within one year. Non-current liabilities have a duration of more than one year. Equity is the difference of assets and liabilities and is an indicator of the wealth of the company.",
        },
        {
          type: "formula",
          label: "Equity ratio",
          text: "Equity ratio = equity / total capital (total assets)",
        },
        {
          type: "p",
          text: "A high equity ratio indicates that a larger portion of assets was financed by the company's own resources (funds from owners or shareholders) rather than by creditors. Sufficient equity matters because (1) equity usually does not have to be repaid on a fixed schedule, (2) it helps the business stay relatively independent from its creditors, and (3) if the company records a loss, a larger equity cushion reduces the risk of over-indebtedness. Using the opening balance sheet above: equity €24,000, total assets €49,000, so equity ratio = 24,000 / 49,000 ≈ 0.490, or about 49%. Almost half of the assets were financed by own resources; the remainder (about 51%) was financed by the bank loan.",
        },
        {
          type: "p",
          text: "Changes in the balance sheet depend on how a purchase is financed. If a firm buys software and pays cash, one asset (software) rises and another (cash) falls by the same amount: total assets remain unchanged. This is an asset swap. If instead the firm buys the software on credit, assets rise and liabilities rise by the same amount, so the balance-sheet total increases. The identity still holds in both cases. Buying an asset with cash does not automatically increase total assets; total assets rise only when the purchase is financed by new liabilities or new equity. Valuing assets is important and tricky. The outstanding amount of a bank loan is usually clear, but the worth of a building many years after it was built is harder to pin down. Businesses may wish to present themselves favourably, yet they must follow legal rules and regulations so that balance-sheet information can be trusted. Carrying amounts are not the same as market prices.",
        },
        {
          type: "example",
          title: "Worked example — asset swap versus financed purchase",
          text: "Start from total assets €49,000, liabilities €25,000, equity €24,000.\n\nCase A — buy €2,000 of software for cash:\nSoftware +2,000; cash −2,000. Total assets still €49,000. Liabilities and equity unchanged.\n\nCase B — buy the same €2,000 of software on credit:\nSoftware +2,000; trade payables +2,000. Total assets €51,000; liabilities €27,000; equity still €24,000. Identity: 51,000 = 27,000 + 24,000.",
        },
      ],
    },
    {
      id: "6.2",
      title: "Other components of the financial statement",
      blocks: [
        {
          type: "p",
          text: "The balance sheet alone cannot show how a business performed over a period. It states assets, liabilities and equity on a certain day, but it does not report total sales (turnover), the cost of producing goods and services, or other expenses. The financial statement therefore combines three main components: the balance sheet (assets, liabilities and equity), the income statement or profit and loss account (revenues, costs and expenses), and the cash flow statement (inflows and outflows of cash). Together they reveal performance over time as well as the position at a date.",
        },
        {
          type: "figure",
          id: "financial-statements",
          caption: "Main components of a financial statement: balance sheet, income statement and cash flow statement.",
        },
        {
          type: "definition",
          term: "Income statement (profit and loss account)",
          text: "A period statement that summarises all revenues, costs and expenses over a time span (for example a year) to determine whether the business made a profit or a loss.",
        },
        {
          type: "definition",
          term: "Revenues",
          text: "Income (usually cash or accounts receivable) generated from selling goods or services to customers.",
        },
        {
          type: "definition",
          term: "Costs",
          text: "Resources consumed in order to produce the goods or provide the services sold.",
        },
        {
          type: "p",
          text: "If revenues exceed costs and expenses, the company has a profit. If costs and expenses are higher than revenue, it suffers a loss. Profit for the year increases owner's equity (typically through retained earnings); a loss decreases equity. You can therefore learn about profit either from the income statement or from the change in equity between two balance-sheet dates (other owner transactions aside).",
        },
        {
          type: "example",
          title: "Worked example — simple profit",
          text: "In one financial year a service firm records sales revenue of €400,000 and costs and expenses (materials, wages, rent, energy, depreciation and other expenses) of €310,000.\nProfit = 400,000 − 310,000 = €90,000.\nThat profit increases equity by €90,000 if it is retained in the business.",
        },
        {
          type: "p",
          text: "Cost of sales (also called cost of goods sold) covers costs directly tied to production — materials, labour linked to production, and manufacturing overhead. Administration costs, shipping to customers and sales-staff costs are not included in cost of sales; they are operating expenses below gross profit. Gross profit shows earnings after deducting the direct costs of producing the goods, before those further operating expenses. In accounting, expenditures and expenses are not the same. Expenditures are payments made to purchase assets (non-current or current). Expenses are costs that have expired or been \"used up\" in producing the goods or services sold — for example cost of sales, salaries, marketing, interest, insurance and rent.",
        },
        {
          type: "definition",
          term: "Depreciation",
          text: "Recognition that the value of fixed assets decreases as they are used up over time. Without depreciation, asset values in the accounts would be overstated and financial information flawed. Depreciation is an expense in the income statement, but unlike wages or energy it does not cause an actual cash payment in the period when it is charged.",
        },
        {
          type: "formula",
          label: "Straight-line depreciation (per year)",
          text: "Annual depreciation = depreciable cost / expected useful life\n(Equal charge each year; land is not depreciated.)",
        },
        {
          type: "example",
          title: "Worked example — straight-line depreciation",
          text: "A firm buys a computer for €2,100 and expects to use it for three years (expected useful life = 3 years), with no residual value for simplicity.\nAnnual depreciation = 2,100 / 3 = €700 per year.\n\nBook (carrying) values at year-end:\nAfter year 1: 2,100 − 700 = €1,400.\nAfter year 2: 1,400 − 700 = €700.\nAfter year 3: 700 − 700 = €0.\n\nEach year the income statement includes a €700 depreciation expense that reduces profit, while the cash outlay of €2,100 occurred when the computer was purchased (an investing cash outflow if paid then), not when depreciation is later recognised. Typical useful lives in practice vary by asset class (buildings longer than machinery; tools and office equipment often a few years). Land is not subject to depreciation.",
        },
        {
          type: "p",
          text: "Over a trading year, the balance sheet also changes for many other reasons: new equipment may be bought, inventory levels adjust, customers may still owe money (receivables), the firm may still owe suppliers (trade payables), and part of a bank loan may be repaid. Equity rises when the firm is profitable and falls when it makes a loss. The following year-end statement illustrates those movements after a profitable first year.",
        },
        {
          type: "table",
          caption: "Simplified year-end balance sheet after a profitable year (€)",
          headers: ["Assets", "€", "Liabilities and equity", "€"],
          rows: [
            ["Office equipment (incl. computers)", "42,000", "Owner's equity", "114,000"],
            ["Van", "40,000", "Bank loan", "12,500"],
            ["Car", "6,000", "Trade credit / payables", "15,000"],
            ["Inventory", "18,000", "", ""],
            ["Receivables", "12,500", "", ""],
            ["Cash and bank deposit", "23,000", "", ""],
            ["Total assets", "141,500", "Total liabilities and equity", "141,500"],
          ],
        },
        {
          type: "definition",
          term: "Cash flow statement",
          text: "A statement that reveals the flows of cash into and out of the business during a period, distinguishing operating, investing and financing activities. Cash is needed for day-to-day operations and for investing; a positive cash flow is not identical with a profit.",
        },
        {
          type: "p",
          text: "Cash flow from operations shows how well a business generates cash with its core activities (for example collecting receivables, paying for materials, settling trade credit). This section is usually treated as the most important and should ideally be positive. Cash flow from investments shows cash spent on long-term assets (plant, office equipment) or received from selling such assets. A negative investing cash flow often simply means the firm invested; it is not automatically a crisis signal. Cash flow from financing refers to cash from investors or creditors, and outflows for interest in some presentations, dividends, or debt repayment. At the bottom of the cash flow statement, the net change in cash and cash equivalents reconciles opening and closing cash. If that figure is positive, more cash is available for further activities such as investment, expansion or debt repayment.",
        },
        {
          type: "example",
          title: "Worked example — total cash change versus profit",
          text: "Opening cash (including bank deposits) is €3,500; closing cash is €23,000.\nTotal cash increase = 23,000 − 3,500 = €19,500.\n\nSuppose the same year reports a profit of €90,000. Profit and the cash increase differ because profit includes non-cash charges such as depreciation and accruals (sales on credit, unpaid expenses), while the cash figure only counts actual cash movements. A firm can be profitable yet short of cash, or can raise cash through borrowing without earning a matching profit.",
        },
        {
          type: "example",
          title: "Worked example — classifying cash flows",
          text: "Classify these cash movements for a manufacturing firm in one year:\n• Customers pay €120,000 of trade receivables → operating inflow.\n• Raw materials paid in cash €45,000 → operating outflow.\n• New machine bought for €80,000 cash → investing outflow.\n• Bank loan repayment €15,000 → financing outflow.\n• Dividend paid to owners €10,000 → financing outflow.\n\nNet operating cash (simplified here) = 120,000 − 45,000 = €75,000 inflow.\nInvesting cash = −€80,000. Financing cash = −15,000 − 10,000 = −€25,000.\nApproximate net cash change from these items = 75,000 − 80,000 − 25,000 = −€30,000.",
        },
      ],
    },
    {
      id: "6.3",
      title: "What can be learnt from reading a balance sheet and an income statement",
      blocks: [
        {
          type: "p",
          text: "Balance sheets and income statements should always be read with caution. Asset values depend on valuation rules; depreciation may lower carrying amounts below what an outsider thinks an asset is \"really\" worth. Still, careful reading — especially comparing positions over time and against competitors in the same industry — answers important questions about structure and performance.",
        },
        {
          type: "p",
          text: "From the balance sheet one asks: Which assets does the business have — is there a higher percentage of current or non-current assets, and is that mix typical for this type of business? How has equity developed, and how have the assets been financed? Is there a higher share of long-term or short-term liabilities? Is there a balance between non-current assets and long-term financial resources (equity plus non-current liabilities)? Long-term assets should preferably be financed with long-term funds. If non-current assets clearly exceed the sum of equity and non-current liabilities, part of the long-term asset base is implicitly financed by short-term liabilities — a structural risk when those short-term claims must be refinanced.",
        },
        {
          type: "p",
          text: "From the income statement one asks: How have revenues developed? Have costs — especially cost of sales — moved in line with revenues? How have profits or losses developed? A single year's profit or asset mix is less informative than trends over several years and comparisons with similar firms in the same sector. Industry norms for fixed-asset intensity differ sharply between manufacturers and service firms.",
        },
        {
          type: "example",
          title: "Worked example — reading structure and performance (euros in thousands)",
          text: "Suppose a manufacturing company reports at year-end: non-current assets 944; current assets 586; total assets 1,530. Equity 711; non-current liabilities 515; current liabilities 304; total equity and liabilities 1,530.\n\nShare of non-current assets = 944 / 1,530 ≈ 61.7%. A high fixed-asset share is typical of manufacturing that needs plant and machinery.\nEquity ratio = 711 / 1,530 ≈ 46.5% — almost half of assets financed by equity.\nLong-term finance available = equity 711 + non-current liabilities 515 = 1,226, which exceeds non-current assets 944. So long-term assets are covered by long-term resources.\n\nIncome statement (same year versus prior year): revenue rises from 815 to 992 (+177, about +21.7%), while cost of sales rises from 760 to 830 (+70, about +9.2%). Gross profit therefore rises sharply (from about 55 to about 162). Operating profit also improves strongly. Revenues grew faster than cost of sales — a favourable operating development when reading the income statement.",
        },
        {
          type: "p",
          text: "Two further earnings ideas appear when statements are read in detail. Earnings before interest, taxes, depreciation and amortisation add back non-cash charges to focus on operating cash-like performance; deducting depreciation and amortisation yields earnings before interest and taxes, a common operating-result measure. You do not need to memorise every line of a published statement, but you should know that gross profit focuses on production margins, while operating result also reflects distribution and administration costs.",
        },
      ],
    },
    {
      id: "6.4",
      title: "Types of accounting — financial versus management accounting",
      blocks: [
        {
          type: "p",
          text: "Accounts exist because many stakeholders need reliable information on the financial situation of a business. Internal users include owners, managers and employees: they want to know whether the business is thriving. Managers decide on cost cuts, pricing and investment; owners ask whether the return justifies the capital at risk. External users include tax authorities, suppliers, competitors, investors, banks and the media.",
        },
        {
          type: "definition",
          term: "Financial accounting",
          text: "Accounting aimed at producing information — such as the balance sheet and the income statement — that is of interest both inside the firm and to external decision makers (tax authorities, banks, investors). Key outputs appear in annual reports and, for many large businesses, in selected figures published on company websites.",
        },
        {
          type: "definition",
          term: "Managerial (management) accounting",
          text: "Accounting focused on providing information for the management of the business so managers can decide where to cut costs, how to calculate prices, and how to allocate resources. It is primarily an internal decision-support tool.",
        },
        {
          type: "definition",
          term: "Auditing",
          text: "Independent checking of accounts for authenticity by an auditing company. For some companies this check is mandatory. The result of the auditing process appears in the annual report.",
        },
        {
          type: "p",
          text: "Managers use both forms: they need management-accounting detail for operational decisions, and they also care about financial-accounting outcomes because banks, tax authorities and investors read those published figures. The same transaction may therefore feed both systems, but the reports differ in audience, detail, legal form and often in time horizon (historical external reporting versus forward-looking internal analysis). Managerial accounting does not exist mainly to satisfy tax authorities; it primarily supports internal decisions. Tax and creditor reporting belong to the domain of financial accounting (subject to local law). Internal users need accounting information as much as external users do.",
        },
        {
          type: "example",
          title: "Worked example — who needs which information",
          text: "A bakery considers raising the price of a specialty bread. Management accounting estimates cost per loaf (€1.80 materials and labour), contribution after variable costs, and effect on monthly volume if the retail price rises from €3.20 to €3.50.\n\nSeparately, the bank financing a new oven asks for the latest balance sheet and income statement (financial accounting): total equity €90,000, bank loan €40,000, last year's profit €25,000. Tax authorities use the same financial accounts to assess taxable profit.\n\nBoth information sets matter, but they answer different questions for different users.",
        },
      ],
    },
    {
      id: "6.5",
      title: "Analysis of financial statements",
      blocks: [
        {
          type: "p",
          text: "Figures from the balance sheet and income statement can be turned into ratios that shed light on liquidity (or solvency), profitability (profit relative to capital employed or turnover), financial efficiency (how effectively resources are used), and financial structure (equity ratio and debt ratio). Because ratios vary widely across industries, comparisons are meaningful mainly within the same industry or sector, or for one business over several years. There may also be different accepted ways to calculate a given ratio — always check the definition before comparing. Making an absolute profit does not automatically mean the business is sufficiently profitable: profitability ratios relate profit to equity, capital employed or turnover.",
        },
        {
          type: "table",
          caption: "Selected ratio formulas used in financial analysis",
          headers: ["Theme", "Ratio", "Formula"],
          rows: [
            ["Structure", "Equity ratio", "equity / total assets"],
            ["Structure", "Debt ratio", "total debt / total assets"],
            ["Liquidity", "Working capital", "current assets − current liabilities"],
            ["Liquidity", "Current ratio", "current assets / current liabilities"],
            ["Liquidity", "Acid-test ratio", "(current assets − inventory) / current liabilities"],
            ["Profitability", "Return on equity", "profit before interest and tax / equity"],
            ["Profitability", "Return on capital employed", "profit before interest and tax / capital employed"],
            ["Profitability", "Capital employed (one definition)", "equity + non-current liabilities  (or assets − current liabilities)"],
            ["Efficiency", "Asset turnover", "turnover / average assets"],
            ["Efficiency", "Inventory (stock) turnover", "cost of sales / average inventory"],
            ["Shares", "Earnings per share", "profit for ordinary shareholders / shares outstanding"],
            ["Shares", "Price–earnings ratio", "share price / earnings per share"],
            ["Shares", "Dividend yield", "dividend per share / share price"],
            ["Shares", "Market capitalisation", "shares outstanding × market price"],
          ],
        },
        {
          type: "p",
          text: "Liquidity is the ability of a business to pay its bills and repay its debts on time. One approach uses working capital (circulating capital), which focuses on short-term assets and liabilities and indicates whether the firm can cover day-to-day bills such as electricity, rent and wages and buy inputs for production. Working capital should be positive: current assets above current liabilities. If not, part of non-current assets may have been financed by short-term liabilities, which can cause trouble when those liabilities fall due. A low working capital level may also mean too little cash or too much reliance on trade credit. Retailers that hold a lot of inventory often need higher working capital than pure service businesses. High inventory helps meet customer demand quickly but ties up money, takes space, and risks obsolescence.",
        },
        {
          type: "p",
          text: "Working-capital and cash-flow problems are linked but not identical. Short-term borrowing or overdrafts can ease a cash shortage yet raise current liabilities and thus reduce working capital. Improving both often requires more equity or more long-term credit. The current ratio should exceed 1 and is often considered healthy roughly between 1.5 and 2 (rules of thumb, industry-dependent). The acid test excludes inventories for a stricter liquidity check, because inventories may not turn into cash reliably.",
        },
        {
          type: "example",
          title: "Worked example — liquidity ratios (euros in thousands)",
          text: "Current assets 586; inventory 136; current liabilities 304.\n\nWorking capital = 586 − 304 = 282.\nCurrent ratio = 586 / 304 ≈ 1.93 (above 1, near the common 1.5–2 range).\nAcid-test ratio = (586 − 136) / 304 = 450 / 304 ≈ 1.48 (still above 1).\n\nInterpretation: short-term resources exceed short-term claims even after excluding inventory, so liquidity looks adequate on these measures — subject to industry comparison.",
        },
        {
          type: "p",
          text: "Profitability relates profit to the size of the business. A small absolute profit may be inadequate relative to capital invested and risk taken. Common measures use profit before interest and tax relative to equity or to capital employed. Capital employed is often equity plus non-current liabilities (or assets minus current liabilities). Average capital employed (average of opening and closing) is sometimes used instead of a period-end figure.",
        },
        {
          type: "example",
          title: "Worked example — return ratios (euros in thousands)",
          text: "Operating profit before interest and tax 90; equity 711; total assets 1,530; current liabilities 304.\n\nReturn on equity = 90 / 711 ≈ 12.7%.\nCapital employed = 1,530 − 304 = 1,226.\nReturn on capital employed = 90 / 1,226 ≈ 7.3%.\n\nIf average capital employed were 1,168, return on capital employed = 90 / 1,168 ≈ 7.7%.\nThese figures are most useful when compared with peers in the same industry and with the firm's own history. Investors typically prefer comparatively high returns on capital employed, other things equal.",
        },
        {
          type: "p",
          text: "Financial efficiency asks how well resources generate activity. Asset turnover relates turnover (revenue) to average assets or to average net assets (assets minus long-term liabilities). Inventory (stock) turnover relates cost of sales to average inventory and shows how many times stock was sold or used and replaced in a year. High inventory turnover usually means goods move quickly and less cash is tied up in stock.",
        },
        {
          type: "example",
          title: "Worked example — turnover ratios (euros in thousands)",
          text: "Turnover 992; assets beginning 1,437; assets ending 1,530.\nAverage assets = (1,437 + 1,530) / 2 = 1,483.5.\nAsset turnover = 992 / 1,483.5 ≈ 0.67 (about €0.67 of sales per €1 of average assets).\n\nCost of sales 830; average inventory 122.5.\nInventory turnover = 830 / 122.5 ≈ 6.8 times per year → stock renewed roughly every 365 / 6.8 ≈ 54 days.",
        },
        {
          type: "p",
          text: "When analysing listed companies, investors also use share-related figures published with financial results. These bridge the income statement and market prices. Earnings per share divide profit attributable to ordinary shareholders by the number of shares outstanding. A share buyback reduces shares outstanding and can raise earnings per share even if total profit is unchanged. The price-earnings ratio divides the current share price by earnings per share: a ratio of about 16 means an investor pays roughly €16 of price for €1 of earnings. A low price-earnings ratio may suggest undervaluation or simply high current earnings; a high or rising ratio may mean the shares look expensive relative to earnings, or that investors expect stronger future growth. Dividend yield expresses the dividend relative to the share price. Market capitalisation (shares outstanding × market price) gauges size but is not automatically a measure of fundamental value, because prices move for many reasons. After shares already trade on an exchange, a rise in market price does not by itself bring new cash into the company — only sellers benefit; new equity cash comes from issuing new shares.",
        },
        {
          type: "example",
          title: "Worked example — earnings per share and price-earnings ratio",
          text: "Profit attributable to ordinary shareholders €5,000,000; shares outstanding 2,000,000; market price €20.\n\nEarnings per share = 5,000,000 / 2,000,000 = €2.50.\nPrice-earnings ratio = 20 / 2.50 = 8.\nAn investor pays €8 of price per €1 of current earnings.\n\nIf the firm buys back 200,000 shares and profit stays €5,000,000, shares outstanding become 1,800,000 and earnings per share rise to 5,000,000 / 1,800,000 ≈ €2.78 — higher per-share earnings without any change in total profit.",
        },
      ],
    },
  ],
};
