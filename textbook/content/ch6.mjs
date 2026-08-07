export default {
  num: 6,
  title: "Accounting — keeping record of business transactions",
  intro:
    "During their first year in business, firms buy and sell goods, support customers, hire assistants and deal with paperwork and bookkeeping. This means that a lot of business transactions like purchases, sales, borrowing and lending money take place and businesses need to keep accurate records of these business transactions. Bookkeepers are responsible for recording these transactions that are always verified by a document (e.g. an invoice or a receipt). The aim of recording all transactions is to generate information on the financial status of the business. Statements that provide this information are called accounts.\n\nThis chapter explains the three main components of the financial statement — the balance sheet, the income statement (profit and loss account), and the cash flow statement — and how to read and analyse them.",

  sections: [
    {
      id: "6.1",
      title: "What a balance sheet is",
      blocks: [
        {
          type: "p",
          text: "When a business starts, it uses equipment it already has as well as new purchases. Computers, office equipment and cars — these things are all assets, “things” that the business owns and that are used for the business. Owners make a list with all the assets of their business and their values in euros (on the left side of the list) and compare it with the amount of money that had to be borrowed from the bank (on the right side of the list) to pay for some of their purchases.",
        },
        {
          type: "p",
          text: "Please note that there are two types of computers that may appear in such a list: computers that are used in the office and are not for sale, and other computers that were bought to be resold (inventory). This difference is important because they are different types of assets. Only part of the assets may be financed by using money from a bank loan. The rest may be financed by the owners’ own resources. Therefore, the total amount of the bank loan (which is a liability, i.e. money that is owed to someone else) is lower than the total amount of the assets. The difference between these two positions is the amount that the owners were able to finance themselves; it is called owner’s equity. It is the proportion of the assets that was NOT financed by debt. If we add this position to the list, the list becomes a balance sheet.",
        },
        {
          type: "definition",
          term: "Balance sheet",
          text: "A balance sheet comprises a company’s assets and reveals how they were financed. The amount of assets equals the amount of liabilities plus owner’s equity.",
        },
        {
          type: "formula",
          label: "Balance-sheet identity",
          text: "Assets = liabilities + owner's equity",
        },
        {
          type: "figure",
          id: "balance-sheet",
          caption:
            "The balance sheet: assets financed by liabilities and owner's equity.",
        },
        {
          type: "example",
          title: "Worked example — constructing a balance sheet",
          text: "A newly founded consultancy holds the following resources on 1 January: office equipment and computers used in the office €25,000; a delivery van €8,000; computers held in stock for resale (inventory) €12,500; cash and bank deposits €3,500. A bank loan of €25,000 financed part of these purchases; the rest was financed by the owners.\n\nTotal assets = 25,000 + 8,000 + 12,500 + 3,500 = €49,000.\nLiabilities (bank loan) = €25,000.\nOwner's equity = assets − liabilities = 49,000 − 25,000 = €24,000.",
        },
        {
          type: "table",
          caption: "Simplified opening balance sheet (€)",
          headers: ["Assets", "€", "Liabilities and equity", "€"],
          rows: [
            [
              "Office equipment (incl. computers)",
              "25,000",
              "Owner's equity (capital)",
              "24,000",
            ],
            ["Van", "8,000", "Bank loan (liabilities)", "25,000"],
            ["Inventory", "12,500", "", ""],
            ["Cash and bank deposit", "3,500", "", ""],
            ["Total assets", "49,000", "Total liabilities and equity", "49,000"],
          ],
        },
        {
          type: "bullets",
          items: [
            "All assets were funded either through equity or liabilities.",
            "All funds are somehow bound or invested in the business (even money held as cash or in a bank account was either funded through equity or liabilities).",
            "Any increase in assets must be financed by an increase in either liabilities or equity (capital).",
          ],
        },
        {
          type: "p",
          text: "Please note that if the firm buys computer software and pays cash, the total amount of the assets remains the same (one asset — software — increases, but another one — cash — decreases by the exact same amount, so it is just an “asset swap”). But if they buy the software on credit, then the amount of assets increases and liabilities also increase by the exact same amount. Accordingly, the balance sheet total increases.",
        },
        {
          type: "p",
          text: "Assets are usually listed in the balance sheet in a certain order. They comprise fixed assets (or non-current assets) that normally have a lifespan of more than one year and are intended to be used in the company for a longer time period than one year. Usually they cannot be turned into cash so easily. Current assets have higher liquidity. They are usually not used longer than a year because they are used up, spent in production or sold.",
        },
        {
          type: "definition",
          term: "Non-current (fixed) assets",
          text: "Assets with a useful life of more than one year that are intended for longer-term use in the business (e.g. property, plant, machinery, office equipment).",
        },
        {
          type: "definition",
          term: "Current assets",
          text: "Assets with higher liquidity that are normally used up, sold or converted into cash within one year (e.g. inventory, receivables, cash).",
        },
        {
          type: "p",
          text: "There are also intangible assets like trademarks, patents and copyrights. Although they cannot be seen or touched they are also of value for the business like tangible assets are. Liabilities are debts and obligations that are owed to other persons, businesses or banks and need to be repaid at a certain point in time and/or over a certain period of time. These funds are usually provided by banks or suppliers. Money owed to suppliers is also called trade credit or trade payables. Current liabilities are debts or obligations that are due within one year. Accordingly, non-current liabilities have a duration of more than one year.",
        },
        {
          type: "p",
          text: "Equity / owner’s equity is the difference of assets and liabilities. It is an indicator of the wealth of the company. A high equity ratio (= equity / total capital) indicates that the respective portion of assets was financed by the company’s own resources (for example with funds provided by the owners or shareholders of the company). It is important for a business to have sufficient equity because: 1) equity usually does not have to be repaid, 2) it helps a business to be relatively independent from its creditors and 3) if the company has a loss and there is a higher amount of equity, the company will not be over-indebted.",
        },
        {
          type: "formula",
          label: "Equity ratio",
          text: "Equity ratio = equity / total capital (total assets)",
        },
        {
          type: "p",
          text: "Determining the value of assets is an important but also tricky task. While it might not be difficult to determine the exact amount of a bank loan, it is more difficult to tell what a building is worth many years after it was built. Businesses usually want to present themselves in the best way possible when setting up their balance sheet. However, they need to stick to the legal rules and regulations that aim to ensure that information given in balance sheets can be trusted.",
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
      title: "Other components of the financial statement of a business",
      blocks: [
        {
          type: "p",
          text: "The balance sheet is not the only component of the financial statement of a business. The financial statement of the business aims to show the performance of the business over a certain period of time, but the balance sheet only shows the assets, liabilities and equity at a certain point in time. It does not contain information on total sales (turnover), nor does it reveal the cost of producing the goods and services or other expenses. Therefore, the financial statement consists of the balance sheet, the income statement (profit and loss account) and the cash flow statement, which gives an insight into the inflow and outflow of cash.",
        },
        {
          type: "figure",
          id: "financial-statements",
          caption:
            "Figure 24. The main components of a financial statement: balance sheet, income statement and cash flow statement.",
        },
        {
          type: "definition",
          term: "Income statement (profit and loss account)",
          text: "A period statement that summarises all revenues, costs and expenses over a time span (for example a year) to determine whether the business made a profit or a loss.",
        },
        {
          type: "p",
          text: "Revenues are the income (usually cash or accounts receivable) that is generated from selling goods or services to customers. Costs consist of resources that are consumed in order to produce the goods or provide the services. If the revenues exceed the costs and expenses, the company has a profit. If the company’s costs and expenses are higher than the revenue, it suffers a loss.",
        },
        {
          type: "example",
          title: "Worked example — simple profit",
          text: "In one financial year a service firm records sales revenue of €400,000 and costs and expenses (materials, wages, rent, energy, depreciation and other expenses) of €310,000.\nProfit = 400,000 − 310,000 = €90,000.\nThat profit increases equity by €90,000 if it is retained in the business.",
        },
        {
          type: "definition",
          term: "Depreciation",
          text: "Recognition that the value of fixed assets decreases as they are used up over time. Depreciation is an expense in the income statement, but unlike wages or energy it does not cause an actual cash payment in the period when it is charged.",
        },
        {
          type: "p",
          text: "Fixed assets are used again and again over a longer period of time. A delivery van, for example, will be used for at least five more years. A new computer will be used for three years. During that time, the value of these assets decreases; it is “used up”. Without depreciation, the values of assets that are shown in the accounts would be inaccurate. The value of the assets in the balance sheet would be overstated and the financial information given would be flawed.",
        },
        {
          type: "formula",
          label: "Straight-line depreciation (per year)",
          text: "Annual depreciation = depreciable cost / expected useful life\n(Equal charge each year; land is not depreciated.)",
        },
        {
          type: "example",
          title: "Worked example — straight-line depreciation",
          text: "A firm buys a computer for €2,100 and expects to use it for three years (expected useful life = 3 years), with no residual value for simplicity.\nAnnual depreciation = 2,100 / 3 = €700 per year.\n\nBook (carrying) values at year-end:\nAfter year 1: 2,100 − 700 = €1,400.\nAfter year 2: 1,400 − 700 = €700.\nAfter year 3: 700 − 700 = €0.\n\nEach year the income statement includes a €700 depreciation expense that reduces profit, while the cash outlay of €2,100 occurred when the computer was purchased.",
        },
        {
          type: "p",
          text: "At the end of a trading year, owners draw up another balance sheet to see how assets and capital structure have changed. Due to depreciation, fixed assets have a lower value than one year before. New equipment may have been bought, inventory levels adjust, some customers still owe money (accounts receivables), and the firm may still owe suppliers (trade credit or accounts payables). Part of a bank loan may have been repaid. Equity has increased significantly when the firm made a profit. To learn more about the performance of a business (profit or loss), you can either look at the income statement or at the development of (owner’s) equity. It is important to note that any profit increases and any loss decreases equity.",
        },
        {
          type: "table",
          caption: "Simplified year-end balance sheet after a profitable year (€)",
          headers: ["Assets", "€", "Liabilities and equity", "€"],
          rows: [
            [
              "Office equipment (incl. computers)",
              "42,000",
              "Owner's equity",
              "114,000",
            ],
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
          text: "A statement that reveals the flows of cash into and out of the business during a period, distinguishing operating, investing and financing activities. A positive cash flow is not identical with a profit.",
        },
        {
          type: "p",
          text: "This is important information because cash is needed for the operating activities of the business and for investing. To learn more about a cash flow’s origin, a cash flow statement is prepared that differentiates between changes in cash positions in operations (the core activities of a business), investments and financing activities.",
        },
        {
          type: "bullets",
          items: [
            "Cash flow from operations shows how well a business generates cash with its core business — usually the most important part and ideally positive.",
            "Cash flow from investments shows how cash is spent for long-term investments or generated by the sale of such assets. A negative figure often simply indicates that the business has invested.",
            "Financing activities refer to cash flowing in from investors or creditors and flowing out for paying interest, dividends or repaying debt.",
          ],
        },
        {
          type: "example",
          title: "Worked example — total cash change versus profit",
          text: "Opening cash (including bank deposits) is €3,500; closing cash is €23,000.\nTotal cash increase = 23,000 − 3,500 = €19,500.\n\nSuppose the same year reports a profit of €90,000. Profit and the cash increase differ because profit includes non-cash charges such as depreciation and accruals (sales on credit, unpaid expenses), while the cash figure only counts actual cash movements. A firm can be profitable yet short of cash, or can raise cash through borrowing without earning a matching profit.",
        },
        {
          type: "example",
          title: "Worked example — classifying cash flows",
          text: "Classify these cash movements for a manufacturing firm in one year:\n• Customers pay €120,000 of trade receivables → operating inflow.\n• Raw materials paid in cash €45,000 → operating outflow.\n• New machine bought for €80,000 cash → investing outflow.\n• Bank loan repayment €15,000 → financing outflow.\n• Dividend paid to owners €10,000 → financing outflow.\n\nNet operating cash (simplified) = 120,000 − 45,000 = €75,000 inflow.\nInvesting cash = −€80,000. Financing cash = −€25,000.\nApproximate net cash change from these items = 75,000 − 80,000 − 25,000 = −€30,000.",
        },
      ],
    },

    {
      id: "6.3",
      title: "What can be learnt from reading a balance sheet and an income statement",
      blocks: [
        {
          type: "p",
          text: "Balance sheets and income statements should always be read with some caution. A lot depends on the valuation of assets and businesses are not completely free to determine the values of their assets. Depreciation also decreases the value of assets in the balance sheet that might actually have a higher value. Nevertheless, a lot can be learnt by taking a closer look at the balance sheet and the income statement of a business. It is of particular interest to see how some positions have developed over time as well as in comparison to other competitors in the market.",
        },
        {
          type: "p",
          text: "This allows us to answer questions like:",
        },
        {
          type: "bullets",
          items: [
            "Which assets does the business have — is there a higher percentage of current or non-current assets and is this typical of that type of business?",
            "How has equity developed and how have the assets been financed? Is there a higher percentage of long-term or short-term liabilities?",
            "Is there a balance between non-current assets and long-term financial resources?",
            "How have revenues developed over the past year? Have costs, especially costs of sale, developed accordingly?",
            "How have profits (or losses) developed?",
          ],
        },
        {
          type: "p",
          text: "The first three questions can be answered by analysing the balance sheet. Questions about revenues, costs and profits require a look at the statement of profit and loss. Cost of sales (COS) (or cost of goods sold (COGS)) are the costs that are directly tied to the production of the products like the cost of labour (that is directly linked to production), materials and manufacturing overhead. Administration costs, the cost of shipping to customers or the cost of sales personnel is NOT included in COGS. Gross profit reveals the earnings of a business after deducting the direct costs of producing the goods (without operating expenses). Earnings before interest, taxes, depreciation and amortisation (EBITDA) allow analysis of operating performance while including operating expenses differently; by deducting depreciation and amortisation, the next metric is earnings before interest and taxes (EBIT).",
        },
        {
          type: "p",
          text: "In accounting, expenditures and expenses are not the same. While expenditures are payments that are either made to purchase (non-current as well as current) assets, expenses are costs that have expired or were “used up” in order to produce the goods or provide the services that were sold. For example, COGS are considered to be expenses, and so are other expenses such as salaries, marketing costs, interest, insurance, rent, and so on.",
        },
        {
          type: "example",
          title: "Worked example — reading structure and performance (euros in thousands)",
          text: "Suppose a manufacturing company reports at year-end: non-current assets 944; current assets 586; total assets 1,530. Equity 711; non-current liabilities 515; current liabilities 304; total equity and liabilities 1,530.\n\nShare of non-current assets = 944 / 1,530 ≈ 61.7%. A high fixed-asset share is typical of manufacturing that needs plant and machinery.\nEquity ratio = 711 / 1,530 ≈ 46.5% — almost half of assets financed by equity.\nLong-term finance available = equity 711 + non-current liabilities 515 = 1,226, which exceeds non-current assets 944. So long-term assets are covered by long-term resources.\n\nIncome statement: revenue rises from 815 to 992 (+177, about +21.7%), while cost of sales rises from 760 to 830 (+70, about +9.2%). Gross profit therefore rises sharply. Revenues grew faster than cost of sales — a favourable operating development.",
        },
      ],
    },

    {
      id: "6.4",
      title: "Use of these accounts – types of accounting",
      blocks: [
        {
          type: "p",
          text: "These accounts are needed for a number of stakeholders who are interested in the financial situation of a business. Some of them are internal users like the owners of the business, the managers and the employees. They are all interested to learn if the business is thriving. Managers need to make decisions based on financial information (like “Do we need to cut costs in marketing?”) and owners will want to know if their investment is worth the risk (like “How much profit do I get in return for investing and risking my money?”). There are also external users of financial information like tax authorities, suppliers, competitors, investors and the media.",
        },
        {
          type: "p",
          text: "For some companies it is mandatory to have their accounts checked for authenticity by an independent firm of accountants, an auditing company. This task is called auditing. The result of the auditing process can be read in the annual report.",
        },
        {
          type: "definition",
          term: "Managerial accounting",
          text: "Accounting focused on providing information for the management of the business so managers can decide where to cut costs, how to calculate prices, and how to allocate resources.",
        },
        {
          type: "definition",
          term: "Financial accounting",
          text: "Accounting aimed at producing information — such as the balance sheet and the income statement — that is of interest both inside the firm and to external decision makers (tax authorities, banks, investors).",
        },
        {
          type: "p",
          text: "Of course, managers are also interested in financial accounting, something that is also of interest for decision makers outside a business like tax authorities or banks. Information gained from financial accounting like the balance sheet and the income statement can be found in the annual reports for example. Many large businesses also publish selected information on their financials on their websites.",
        },
        {
          type: "example",
          title: "Worked example — who needs which information",
          text: "A bakery considers raising the price of a specialty bread. Management accounting estimates cost per loaf (€1.80 materials and labour), contribution after variable costs, and effect on monthly volume if the retail price rises from €3.20 to €3.50.\n\nSeparately, the bank financing a new oven asks for the latest balance sheet and income statement (financial accounting): total equity €90,000, bank loan €40,000, last year's profit €25,000. Tax authorities use the same financial accounts to assess taxable profit.",
        },
      ],
    },

    {
      id: "6.5",
      title: "Analysis of financial statements",
      blocks: [
        {
          type: "p",
          text: "The information given in the balance sheet and in the income statement can be used to calculate figures and ratios in order to learn more, e.g. about the liquidity (or the solvency) of a business, profitability (which refers to the relationship of profit to the capital employed or to the turnover), financial efficiency (which deals with the question how effectively a business has employed its resources) and financial structure (which can be evaluated on the basis of equity ratio and debt ratio).",
        },
        {
          type: "p",
          text: "Please note: Since these figures and ratios can vary a lot from one industry to another, some comparisons would not be very meaningful. Comparisons are meaningful for different businesses within the same industry or sector or for one single business over time (comparisons of several different financial years). There might also be different ways to calculate some of these ratios, so it is always important to know how ratios were calculated if you want to make comparisons.",
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
            [
              "Liquidity",
              "Acid-test ratio",
              "(current assets − inventory) / current liabilities",
            ],
            [
              "Profitability",
              "Return on equity",
              "profit before interest and tax / equity",
            ],
            [
              "Profitability",
              "Return on capital employed",
              "profit before interest and tax / capital employed",
            ],
            [
              "Profitability",
              "Capital employed (one definition)",
              "equity + non-current liabilities  (or assets − current liabilities)",
            ],
            ["Efficiency", "Asset turnover", "turnover / average assets"],
            [
              "Efficiency",
              "Inventory (stock) turnover",
              "cost of sales / average inventory",
            ],
            [
              "Shares",
              "Earnings per share",
              "profit for ordinary shareholders / shares outstanding",
            ],
            ["Shares", "Price–earnings ratio", "share price / earnings per share"],
            ["Shares", "Dividend yield", "dividend per share / share price"],
            [
              "Shares",
              "Market capitalisation",
              "shares outstanding × market price",
            ],
          ],
        },
        {
          type: "p",
          text: "The term liquidity refers to the ability of a business to pay its bills and repay its debts on time. One approach to evaluate liquidity is to calculate the working capital of a business. Working capital (or circulating capital) indicates whether or not a business is able to pay its day-to-day bills such as electricity, rent and wages and buy components for its production. Therefore, the focus is on short-term assets and liabilities.",
        },
        {
          type: "formula",
          label: "Working capital",
          text: "Working capital = current assets − current liabilities",
        },
        {
          type: "p",
          text: "The calculation of working capital is based on the idea that current assets of a business are relatively liquid (meaning that they can be easily turned into cash). If all the current assets are turned into cash to repay current liabilities, working capital is the amount that is left over after all current debts have been paid. Working capital should be positive, meaning that current assets should be higher than current liabilities. If they are not, this would indicate that part of the non-current assets was financed by short-term liabilities, which might cause problems when these liabilities need to be repaid.",
        },
        {
          type: "p",
          text: "Working capital problems and cash flow problems are interlinked but not identical. Cash flow problems can be mitigated by borrowing money using a short-term bank loan or using overdraft facilities and trade credit. Although this brings cash into the business, it will increase current liabilities and reduce working capital. The most effective way to improve both working capital and cash flow is to increase equity or borrow more long-term credit.",
        },
        {
          type: "formula",
          label: "Liquidity ratios",
          text: "Current ratio = current assets / current liabilities\nAcid test ratio = (current assets − inventory) / current liabilities",
        },
        {
          type: "p",
          text: "As current assets should exceed current liabilities, the current ratio should be greater than 1, ideally even between 1.5 and 2. It can be argued that inventories should not be taken into consideration for this calculation. There are many reasons why inventories could possibly not be turned into cash. This is why a modified calculation, the so-called acid test ratio, does not consider inventories and allows a stricter evaluation of liquidity.",
        },
        {
          type: "example",
          title: "Worked example — liquidity ratios (euros in thousands)",
          text: "Current assets 586; inventory 136; current liabilities 304.\n\nWorking capital = 586 − 304 = 282.\nCurrent ratio = 586 / 304 ≈ 1.93 (above 1, near the common 1.5–2 range).\nAcid-test ratio = (586 − 136) / 304 = 450 / 304 ≈ 1.48 (still above 1).\n\nInterpretation: short-term resources exceed short-term claims even after excluding inventory, so liquidity looks adequate on these measures — subject to industry comparison.",
        },
        {
          type: "p",
          text: "If revenues exceed costs, the business makes a profit. This does not necessarily mean that the business is sufficiently profitable because the amount of profit might be minuscule in relation to the money that has been invested (and the risk that has been taken). Hence, profitability refers to a business’s profit in relation to an indicator of the size of the business (total assets or total average assets, total equity, turnover).",
        },
        {
          type: "formula",
          label: "Return ratios",
          text: "ROE = profit before tax and interest (EBIT) / equity\nROCE = profit before tax and interest (EBIT) / capital employed\nCapital employed ≈ equity + non-current liabilities (or assets − current liabilities)",
        },
        {
          type: "example",
          title: "Worked example — return ratios (euros in thousands)",
          text: "Operating profit before interest and tax 90; equity 711; total assets 1,530; current liabilities 304.\n\nReturn on equity = 90 / 711 ≈ 12.7%.\nCapital employed = 1,530 − 304 = 1,226.\nReturn on capital employed = 90 / 1,226 ≈ 7.3%.\n\nIf average capital employed were 1,168, ROCE = 90 / 1,168 ≈ 7.7%. These figures are most useful when compared with peers in the same industry and with the firm's own history.",
        },
        {
          type: "p",
          text: "Financial efficiency refers to the question how efficiently a business has employed its resources. Two of the ratios that can be calculated to evaluate financial efficiency are asset turnover and inventory (stock) turnover. Asset turnover aims to indicate how much turnover was generated by every euro invested in total average assets or — alternatively — in net assets. Inventory turnover shows how many times a business has sold or used up and replaced inventory. High inventory turnover is important because it indicates that goods sell well and do not remain in stock for a long time.",
        },
        {
          type: "formula",
          label: "Efficiency ratios",
          text: "Asset turnover = turnover / average assets\nInventory (stock) turnover = cost of sales / average inventory",
        },
        {
          type: "example",
          title: "Worked example — turnover ratios (euros in thousands)",
          text: "Turnover 992; assets beginning 1,437; assets ending 1,530.\nAverage assets = (1,437 + 1,530) / 2 = 1,483.5.\nAsset turnover = 992 / 1,483.5 ≈ 0.67 (about €0.67 of sales per €1 of average assets).\n\nCost of sales 830; average inventory 122.5.\nInventory turnover = 830 / 122.5 ≈ 6.8 times per year → stock renewed roughly every 365 / 6.8 ≈ 54 days.",
        },
        {
          type: "p",
          text: "When analysing listed companies, investors also use share-related figures published with financial results. Earnings per share divide profit attributable to ordinary shareholders by the number of shares outstanding. The price-earnings ratio divides the current share price by earnings per share. Dividend yield expresses the dividend relative to the share price. Market capitalisation (shares outstanding × market price) gauges size but is not necessarily a meaningful metric for the fundamental value of a company, because there are many reasons why share price might be particularly high or low. After shares already trade on an exchange, a rise in market price does not by itself bring new cash into the company — only sellers benefit; new equity cash comes from issuing new shares.",
        },
        {
          type: "example",
          title: "Worked example — earnings per share and price-earnings ratio",
          text: "Profit attributable to ordinary shareholders €5,000,000; shares outstanding 2,000,000; market price €20.\n\nEarnings per share = 5,000,000 / 2,000,000 = €2.50.\nPrice-earnings ratio = 20 / 2.50 = 8.\nAn investor pays €8 of price per €1 of current earnings.\n\nIf the firm buys back 200,000 shares and profit stays €5,000,000, shares outstanding become 1,800,000 and earnings per share rise to ≈ €2.78 — higher per-share earnings without any change in total profit.",
        },
      ],
    },
  ],
};
