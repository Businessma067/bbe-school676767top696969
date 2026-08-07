export default {
  "num": 6,
  "title": "Accounting — keeping record of business transactions",
  "intro": "Every sale, purchase, wage payment and loan leaves a trail, and accounting is the craft of turning that trail into statements you can actually read — what the firm owns, what it owes, whether it earned a profit, and whether cash really moved. This chapter builds that picture step by step, from the balance-sheet identity through the income and cash-flow statements, and then shows how ratios turn the same numbers into answers about liquidity, profitability, efficiency and gearing.",
  "objectives": [
    "Construct and interpret a balance sheet using assets = liabilities + equity, and classify fixed (non-current) versus current items.",
    "Explain the roles of the income statement and the cash flow statement, and calculate straight-line depreciation.",
    "Distinguish expenditures from expenses, and read COS/COGS, gross profit, EBITDA and EBIT in a structured income statement.",
    "Contrast financial accounting with management accounting and identify who uses accounts.",
    "Analyse liquidity, profitability, efficiency and gearing by moving from intuition to formula to interpretation of the same firm."
  ],
  "sections": [
    {
      "id": "6.1",
      "title": "The balance sheet — what the firm owns and how it is financed",
      "blocks": [
        {
          "type": "p",
          "text": "Opening day at Northline Bike Workshop finds Mira and Jonas listing everything the new bicycle repair and retail business can use: tools and benches for €18,000, a small delivery van for €14,000, bikes held for resale for €9,200, and €4,800 in the business bank account. A bank has lent them €22,000, and the rest has come from money and equipment they put in themselves, so that list of resources — and the story of who financed it — is already the seed of a balance sheet."
        },
        {
          "type": "idea",
          "term": "Assets",
          "text": "Resources the business owns and uses. Office tools that stay in the workshop and bikes waiting to be sold are both assets — but they are different kinds of assets, because one is kept for use and the other is held to be sold."
        },
        {
          "type": "idea",
          "term": "Liabilities",
          "text": "Debts and obligations owed to others (banks, suppliers, and similar creditors) that must be repaid at a stated time or over a period."
        },
        {
          "type": "idea",
          "term": "Owner's equity (equity)",
          "text": "The portion of assets not financed by debt — what the owners have funded themselves. Equity = assets − liabilities. It is also a signal of the firm's wealth cushion."
        },
        {
          "type": "idea",
          "term": "Balance sheet",
          "text": "A statement at a point in time that lists assets on one side and shows how those assets were financed through liabilities and equity on the other. The two sides must equal."
        },
        {
          "type": "p",
          "text": "The identity must hold because every euro of asset was funded either by owners (equity) or by creditors (liabilities), and those funds are bound in whatever form the business currently holds — including cash. If assets rise, either liabilities or equity must rise by the same amount, unless another asset falls in an asset swap that leaves the total unchanged."
        },
        {
          "type": "formula",
          "label": "Balance-sheet identity",
          "text": "Assets = liabilities + owner's equity",
          "vars": "Assets = resources owned and used by the business; liabilities = amounts owed to outsiders; owner's equity = owners' financing claim (assets − liabilities)."
        },
        {
          "type": "figure",
          "id": "balance-sheet",
          "caption": "Balance sheet identity: every asset is financed by liabilities or by equity — the two financing sides add up to total assets."
        },
        {
          "type": "p",
          "text": "Building Northline's opening balance sheet means summing assets first: tools and benches 18,000 + van 14,000 + inventory (bikes) 9,200 + cash 4,800 = €46,000. Liabilities are the bank loan of €22,000, so equity = assets − liabilities = 46,000 − 22,000 = €24,000, and the check 46,000 = 22,000 + 24,000 confirms that opening totals balance at €46,000 on each side."
        },
        {
          "type": "table",
          "caption": "Northline Bike Workshop — opening balance sheet (€)",
          "headers": [
            "Assets",
            "€",
            "Liabilities and equity",
            "€"
          ],
          "rows": [
            [
              "Tools and workshop benches",
              "18,000",
              "Owner's equity",
              "24,000"
            ],
            [
              "Delivery van",
              "14,000",
              "Bank loan",
              "22,000"
            ],
            [
              "Inventory (bikes for resale)",
              "9,200",
              "",
              ""
            ],
            [
              "Cash and bank",
              "4,800",
              "",
              ""
            ],
            [
              "Total assets",
              "46,000",
              "Total liabilities and equity",
              "46,000"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Before you read on, pause on a small financing choice: if Northline buys €1,500 of spare parts for cash, does total assets change, and what if the same purchase is on supplier credit? Paying cash for an asset is an asset swap in which one asset rises and cash falls by the same amount, so total assets stay unchanged; buying on credit raises the asset and a liability (trade payable) together, so the balance-sheet total rises. Starting from assets 46,000, liabilities 22,000 and equity 24,000, a cash purchase leaves inventory +1,500 and cash −1,500 with totals still 46,000 = 22,000 + 24,000, while a credit purchase leaves inventory +1,500 and trade payables +1,500, so assets become 47,500, liabilities 23,500 and equity 24,000 — the same economic item, but different financing changes the totals."
        },
        {
          "type": "p",
          "text": "Assets are also split by how long they stay in the business. Fixed or non-current assets normally have a useful life of more than one year, are intended for longer-term use, and are usually harder to turn into cash quickly; examples include property, plant, buildings, machinery, office equipment kept for use, longer-term financial assets, and intangible assets such as patents, trademarks and copyrights. Current assets have higher liquidity and are normally used up, sold or converted within a year — inventory (merchandise not yet sold), trade receivables or debtors (money customers owe), and cash. Intangible assets cannot be touched, but they still have value for the business under the same logic as tangible ones: a workshop may own none yet, while a manufacturing group may report large patents, trademarks and licences."
        },
        {
          "type": "p",
          "text": "Liabilities follow a similar duration split. Current liabilities are due within one year and include trade payables (trade credit to suppliers), bank overdrafts and other short-term obligations, whereas non-current liabilities last more than one year and include long-term bank loans and bonds payable. A useful structure measure is the equity ratio, which asks what share of total capital the owners themselves have financed."
        },
        {
          "type": "formula",
          "label": "Equity ratio",
          "text": "Equity ratio = equity / total capital",
          "vars": "Equity = owners' claim; total capital = total assets (same as total equity + liabilities). A higher ratio means a larger share of assets was financed with the firm's own resources."
        },
        {
          "type": "p",
          "text": "Equity usually does not have to be repaid like a loan, so a higher equity share supports independence from creditors and gives a larger cushion against over-indebtedness if the firm makes a loss. One classification trap worth keeping in mind is that office computers used in the business are not the same line as computers held for resale: the physical object type can be identical, yet one is a fixed asset and the other is inventory (a current asset). In exams, section 6.1 often signals a point-in-time snapshot, the identity assets = liabilities + equity, a non-current versus current classification, or a cash purchase that leaves the balance-sheet total unchanged — and valuation is constrained by rules, so firms cannot freely invent asset values."
        }
      ]
    },
    {
      "id": "6.2",
      "title": "Income statement, cash flow and depreciation",
      "blocks": [
        {
          "type": "p",
          "text": "One statement is never enough on its own. Northline's end-of-year balance sheet may show stronger equity and more cash than on day one, yet that still does not say how much was sold, what it cost to serve customers, or which cash movements came from repairs versus a new loan, so performance over a period needs the full financial statement set."
        },
        {
          "type": "figure",
          "id": "financial-statements",
          "caption": "Three components of the financial statement: balance sheet (stock at a date), income statement (revenues, costs and expenses over a period), cash flow statement (cash in and cash out over a period)."
        },
        {
          "type": "idea",
          "term": "Financial statement",
          "text": "The package that reveals performance over a period: balance sheet + income statement (profit and loss account) + cash flow statement. The balance sheet alone cannot show turnover or production costs."
        },
        {
          "type": "idea",
          "term": "Income statement (profit and loss account)",
          "text": "A period summary of revenues, costs and expenses. If revenues exceed costs and expenses → profit. If costs and expenses exceed revenue → loss."
        },
        {
          "type": "p",
          "text": "Revenue is income from selling goods or services (cash or receivables), costs are resources consumed to produce those goods or services, and other expenses such as rent, admin wages, energy and depreciation also reduce the result — so profit is not “cash left in the till” but the accounting surplus for the period. In a simple year for Northline, sales revenue of €268,000 against costs and expenses of €214,000 (materials, wages, rent, energy, depreciation and other) gives profit = 268,000 − 214,000 = €54,000, and that €54,000 profit increases equity if it is retained in the business. A loss would lower equity instead, and you can spot the same economic story either in the income statement or in the change in equity between two balance-sheet dates."
        },
        {
          "type": "idea",
          "term": "Depreciation",
          "text": "Recognition that fixed assets lose value as they are used up over time. Without it, balance-sheet asset values would be overstated and profit would ignore the wearing-out of equipment."
        },
        {
          "type": "p",
          "text": "Straight-line logic spreads the depreciable cost evenly across the expected useful life so each year carries the same charge; land is not depreciated, and depreciation is an expense in the income statement that — unlike wages or energy — does not cause a cash payment in the period when it is charged."
        },
        {
          "type": "formula",
          "label": "Straight-line depreciation (annual)",
          "text": "Annual depreciation = (cost − residual value) / expected useful life",
          "vars": "Cost = purchase price of the fixed asset; residual value = expected value at the end of useful life (often zero in simple cases); expected useful life = years the asset will be used. If residual value is zero: annual depreciation = cost / useful life."
        },
        {
          "type": "p",
          "text": "For a diagnostic laptop costing €2,400 with a three-year useful life and residual €0, annual depreciation = 2,400 / 3 = €800, so book values fall to €1,600 after year 1, €800 after year 2 and €0 after year 3. For the van costing €14,000 with a five-year useful life and residual €2,000, depreciable cost is 12,000 and annual depreciation = 12,000 / 5 = €2,400. Each year the income statement includes these charges even though the cash outlay happened when the assets were bought, and carrying (book) value equals cost minus accumulated depreciation. The cash-flow trap is never to treat depreciation as a cash outflow in the year it is charged — the cash left when the asset was purchased as an investing outflow then."
        },
        {
          "type": "idea",
          "term": "Expenditures vs expenses",
          "text": "Expenditures are payments to purchase assets (non-current or current). Expenses are costs that have expired or been used up to produce the goods or services sold — for example COGS, salaries, marketing, interest, insurance and rent."
        },
        {
          "type": "p",
          "text": "An expenditure is not yet an expense when Northline spends €12,000 cash on a new alignment machine (an investing cash outflow): if useful life is six years and residual is €0, annual depreciation expense = 12,000 / 6 = €2,000, so in year 1 cash fell by €12,000 while the income statement expense is only €2,000. Buying the machine is the expenditure; using it up over time creates the expenses."
        },
        {
          "type": "table",
          "caption": "Northline — simplified year-end balance sheet after a profitable first year (€)",
          "headers": [
            "Assets",
            "€",
            "Liabilities and equity",
            "€"
          ],
          "rows": [
            [
              "Tools and equipment (after depreciation; plus additions)",
              "31,000",
              "Owner's equity",
              "78,000"
            ],
            [
              "Delivery van (carrying value)",
              "11,600",
              "Bank loan",
              "15,000"
            ],
            [
              "Inventory",
              "11,400",
              "Trade payables",
              "8,500"
            ],
            [
              "Trade receivables",
              "6,800",
              "",
              ""
            ],
            [
              "Cash and bank",
              "40,700",
              "",
              ""
            ],
            [
              "Total assets",
              "101,500",
              "Total liabilities and equity",
              "101,500"
            ]
          ]
        },
        {
          "type": "idea",
          "term": "Cash flow statement",
          "text": "Shows cash flowing into and out of the business during the period. Positive cash flow is not the same as profit."
        },
        {
          "type": "p",
          "text": "Cash movements are grouped by purpose. Operating activities cover core business cash — customers paying, and payments to suppliers and wages linked to operations — and ideally this section is positive, because it is the most important signal of day-to-day health. Investing activities show cash spent on long-term assets or received from selling them, and a negative figure often means the firm invested rather than that it failed. Financing activities cover cash from investors or creditors and outflows for interest, dividends or debt repayment."
        },
        {
          "type": "p",
          "text": "Cash change and profit can diverge sharply. Opening cash of €4,800 and closing cash of €40,700 imply a cash increase of €35,900 in the same year that profit was €54,000, and the gap exists because profit includes non-cash depreciation and accruals (credit sales, unpaid bills) while cash only counts actual movements — and because investing and financing cash also move the bank balance. A firm can therefore be profitable and still short of cash, or raise cash by borrowing without matching profit. Classifying a few movements makes the split concrete: customers settle €38,000 of receivables (operating inflow), parts paid in cash €16,000 (operating outflow), a new bench system bought for €9,000 cash (investing outflow), loan principal repaid €7,000 (financing outflow), and owners' drawings or dividend €5,000 (financing outflow), so the net from these items is (38,000 − 16,000) − 9,000 − 7,000 − 5,000 = +€1,000. Exam questions for 6.2 typically ask you to separate period from point-in-time, remember that profit is not cash, classify operating / investing / financing flows, compute straight-line depreciation and carrying value, spot that depreciation is an expense without a same-period cash payment, and keep expenditure (buy the asset) distinct from expense (use the asset up)."
        }
      ]
    },
    {
      "id": "6.3",
      "title": "Reading balance sheets and income statements",
      "blocks": [
        {
          "type": "p",
          "text": "Reading statements needs caution and then purpose, because asset values depend on valuation rules and depreciation can push book values below what an asset might fetch in a private sale — yet comparing structure over time and against similar firms still answers sharp questions about how the business is built and how it performed. On the balance sheet you ask what the asset mix looks like (mostly non-current or current, and whether that is typical), how financing has developed (equity path, more long-term or short-term liabilities), and whether non-current assets are covered by long-term finance (equity plus non-current liabilities). On the income statement you ask whether sales rose and whether cost of sales moved in line, and how gross profit and operating profit developed."
        },
        {
          "type": "p",
          "text": "Cedar Circuit Components provides a sample statement of financial position in € thousands. Property, plant and equipment moves from 388 in Year 1 to 412 in Year 2; intangible assets from 52 to 48; other non-current assets from 30 to 35; so non-current assets rise from 470 to 495. Inventories move from 78 to 92, trade and other receivables from 64 to 71, and cash and cash equivalents from 86 to 118, so current assets rise from 228 to 281 and total assets from 698 to 776. On the financing side, share capital stays at 120 while reserves and retained earnings rise from 214 to 268, taking total equity from 334 to 388; non-current financial liabilities fall from 230 to 210 and other non-current liabilities rise from 24 to 28, so non-current liabilities fall from 254 to 238; trade and other payables rise from 78 to 96 and other current liabilities from 32 to 54, so current liabilities rise from 110 to 150; total liabilities therefore move from 364 to 388, and total equity and liabilities match total assets at 776 in Year 2 (698 in Year 1)."
        },
        {
          "type": "p",
          "text": "Reading that structure, non-current assets / total assets = 495 / 776 ≈ 63.8%, a plant-heavy mix typical of manufacturing, while the equity ratio = 388 / 776 = 50% means half of assets are financed by equity. Long-term finance = equity 388 + non-current liabilities 238 = 626, which exceeds non-current assets of 495, so long-term assets are covered by long-term resources, and cash of 118 exceeds trade payables of 96, so bills could be cleared from cash alone if needed. Overall the structure looks manufacturing-typical, moderately equity-funded, and matched on the long-term side."
        },
        {
          "type": "p",
          "text": "Cedar's sample income statement (also € thousands) shows revenue rising from 520 to 640, cost of sales from 430 to 498, and gross profit from 90 to 142. Distribution costs move from 24 to 28, general and administrative costs from 30 to 36, and other operating result from 2 to 4, so operating result (EBIT) rises from 38 to 82. Finance costs net fall from 16 to 14, profit before tax rises from 22 to 68, income taxes from 8 to 16, and profit for the year from 14 to 52."
        },
        {
          "type": "idea",
          "term": "Cost of sales (COS) / cost of goods sold (COGS)",
          "text": "Costs tied directly to producing the products sold — direct materials, direct production labour and manufacturing overhead. Not included: administration, shipping to customers, or sales-personnel costs."
        },
        {
          "type": "idea",
          "term": "Gross profit",
          "text": "Earnings after deducting direct production costs from revenue — before operating expenses such as distribution and administration. It focuses on production-related margin."
        },
        {
          "type": "idea",
          "term": "EBITDA and EBIT",
          "text": "EBITDA (earnings before interest, taxes, depreciation and amortisation) looks at operating performance with a different treatment of non-cash charges. Deducting depreciation and amortisation yields EBIT (earnings before interest and taxes) — the operating result line used widely in analysis."
        },
        {
          "type": "p",
          "text": "Reading down the income statement, revenue minus COS gives gross profit, then operating expenses and other operating items shape the path toward EBIT, while finance income and costs sit below operating result and taxes sit near the bottom — each layer answering a different question about production margin, operating strength, then financing and tax effects. For Cedar, revenue rose by 640 − 520 = 120 (about +23.1%) while cost of sales rose by 498 − 430 = 68 (about +15.8%), so revenue grew faster than COS and gross profit jumped from 90 to 142, while EBIT more than doubled from 38 to 82. Top-line growth with a favourable COS relationship improved both gross profit and operating result; if instead revenue had risen only 10% while COS rose 18%, you would expect gross profit pressure and a story about weaker production efficiency or higher input prices. A common misreading is to put distribution or admin staff costs into COGS, which makes gross profit look worse for the wrong reason and confuses production performance with broader operating costs. Exam cues for 6.3 include calculating structure percentages, testing long-term matching, identifying what belongs in COS, interpreting gross profit versus EBIT, and remembering that statements need careful valuation awareness — and the durable lesson is that the balance sheet shows mix of assets and financing while the income statement shows revenue, costs and layered profits, with COS production-tied, gross profit as pre-operating-expense margin, and EBIT as the operating result, always stronger when compared across periods or peers than as a single lonely number."
        }
      ]
    },
    {
      "id": "6.4",
      "title": "Who uses accounts — financial vs management accounting",
      "blocks": [
        {
          "type": "p",
          "text": "Two rooms ask two different questions of the same business. In the workshop office Mira wonders whether specialty helmets cover their true cost if priced at €49, while at the bank the loan officer asks whether Northline can service debt and whether last year's accounts were reliable — same firm, different information jobs."
        },
        {
          "type": "idea",
          "term": "Users of accounts",
          "text": "Internal users include owners, managers and employees — they care whether the business is thriving, whether costs need cutting, and whether the investment earns a return for the risk taken. External users include tax authorities, suppliers, competitors, investors, banks and the media."
        },
        {
          "type": "p",
          "text": "Those users are served by two types of accounting. Management (managerial) accounting is built for managers inside the firm and supports decisions about where to cut costs, how to set prices and how to allocate resources, often with more detailed and forward-looking figures for internal use. Financial accounting produces statements such as the balance sheet and income statement for decision makers inside and outside the firm — owners, banks, tax authorities, investors — appears in annual reports, and for large firms often means selected figures published on websites as well."
        },
        {
          "type": "idea",
          "term": "Auditing",
          "text": "For some companies it is mandatory that an independent firm of accountants checks the accounts for authenticity. The outcome appears in the annual report."
        },
        {
          "type": "p",
          "text": "Managers need both: management accounting for operational choices, and financial accounting because banks, tax authorities and investors will judge the firm on those statements. On the same decision day, a management pack might show estimated cost per custom bike build of €1,120, a proposed list price of €1,490, and expected monthly volume if price rises by €40, while the financial pack for the bank shows equity €78,000, remaining loan €15,000, last year's profit €54,000 and audited year-end statements — and tax authorities use the financial accounts to assess taxable profit. Price design therefore leans on management accounting, whereas external financing and tax lean on financial accounting; management accounting does not replace the balance sheet and income statement, because external parties and many mandatory duties rely on financial accounting. Exam recognition for 6.4 is mainly matching a user to internal versus external, deciding whether a task is management accounting (pricing, cost cutting) or financial accounting (published statements, bank review), and knowing that auditing is independent verification for authenticity."
        }
      ]
    },
    {
      "id": "6.5",
      "title": "Analysis of financial statements",
      "blocks": [
        {
          "type": "p",
          "text": "Once Cedar's statements are complete, a lender still wants sharper answers: can the firm pay bills on time, does profit justify the capital tied up, does stock sit too long, and how heavily is it geared with debt? Ratios turn raw lines into comparable answers and cluster into liquidity (solvency in the short term), profitability (profit relative to capital or size), financial efficiency (how well resources generate activity), and financial structure or gearing (equity versus debt). Because ratios vary sharply by industry, you compare peers in the same sector or one firm over several years, and you always know which definition was used before you compare."
        },
        {
          "type": "p",
          "text": "The ratio map for this course pairs each theme with a measure and a core idea: liquidity uses working capital (current assets left after current liabilities), the current ratio (current assets per €1 of current liabilities) and the acid-test ratio (the same idea excluding inventory); profitability uses ROE (EBIT relative to equity) and ROCE (EBIT relative to capital employed); efficiency uses asset turnover (turnover per €1 of average assets) and inventory turnover (how many times stock is sold or replaced); and gearing or structure uses the equity ratio (equity as a percentage of total assets) and the debt ratio (total debt as a percentage of total assets)."
        },
        {
          "type": "p",
          "text": "Liquidity starts with an intuition: imagine every short-term claim lands at once, and ask whether the firm's relatively liquid resources — cash, receivables, inventory — can cover those claims and leave anything over. That leftover idea is working capital; retailers with heavy stock often need more of it than a service firm with little inventory, and high inventory can serve customers quickly while also tying up money, needing space and risking obsolescence."
        },
        {
          "type": "formula",
          "label": "Working capital",
          "text": "Working capital = current assets − current liabilities",
          "vars": "Current assets = short-term resources (cash, receivables, inventory, etc.); current liabilities = obligations due within one year. Positive working capital means current assets exceed current liabilities."
        },
        {
          "type": "formula",
          "label": "Current ratio (working capital ratio)",
          "text": "Current ratio = current assets / current liabilities",
          "vars": "Same inputs as working capital, expressed as a ratio. Should exceed 1; a common comfort band discussed in the course is about 1.5 to 2."
        },
        {
          "type": "formula",
          "label": "Acid-test ratio",
          "text": "Acid-test ratio = (current assets − inventory) / current liabilities",
          "vars": "Removes inventory because stock may not convert to cash when needed. A stricter liquidity test; still preferably above 1."
        },
        {
          "type": "p",
          "text": "For Cedar in Year 2 (€ thousands), current assets = 281, inventory = 92 and current liabilities = 150, so working capital = 281 − 150 = 131 (positive), the current ratio = 281 / 150 ≈ 1.87 (above 1 and inside the 1.5–2 comfort discussion), and the acid-test = (281 − 92) / 150 = 189 / 150 = 1.26 (still above 1). Short-term cover looks adequate on these measures, though you still judge against industry peers. A short-term loan, overdraft or extra trade credit can ease a cash squeeze, but it raises current liabilities and can shrink working capital, whereas improving both cash and working capital more sustainably usually means adding equity or longer-term borrowing. A current ratio above 1 is not automatically “safe” if most current assets are slow-moving inventory — that is why the acid test exists — and fixing cash with short-term borrowing can worsen the working-capital picture. Liquidity exam work usually asks you to compute working capital, current ratio and acid test, interpret “greater than 1”, explain why inventory is dropped in the acid test, and link short-term borrowing to lower working capital."
        },
        {
          "type": "p",
          "text": "Profitability starts from a similar intuition: a profit of €50,000 sounds fine until you ask relative to how much capital was risked, so profitability compares profit to a size base — equity, capital employed, or turnover — and tiny profits on huge capital look weak."
        },
        {
          "type": "formula",
          "label": "Return on equity (ROE)",
          "text": "ROE = profit before tax and interest (EBIT) / equity",
          "vars": "EBIT = operating profit before interest and tax (as used in this course's ROE definition); equity = owners' financing on the balance sheet."
        },
        {
          "type": "formula",
          "label": "Return on capital employed (ROCE)",
          "text": "ROCE = profit before tax and interest (EBIT) / capital employed",
          "vars": "Capital employed ≈ equity + non-current liabilities, or equivalently assets − current liabilities. Average capital employed (beginning and end of year, ÷ 2) may be used instead of the year-end figure."
        },
        {
          "type": "p",
          "text": "For Cedar Year 2 (€ thousands), EBIT = 82 and equity = 388, so ROE = 82 / 388 ≈ 21.1%. Capital employed = assets − current liabilities = 776 − 150 = 626 (also equity 388 + non-current liabilities 238), so ROCE = 82 / 626 ≈ 13.1%; if average capital employed were 640, ROCE = 82 / 640 = 12.8%. Those returns look meaningful only beside peer ROCE/ROE and Cedar's own trend."
        },
        {
          "type": "p",
          "text": "Efficiency asks how well resources generate activity: asset turnover asks how many euros of sales each euro of assets supports, while inventory turnover asks how often stock is sold or used up and replaced, with high turnover meaning money is not trapped in the warehouse for long."
        },
        {
          "type": "formula",
          "label": "Asset turnover",
          "text": "Asset turnover = turnover / average assets",
          "vars": "Turnover = sales revenue for the period; average assets = (assets at beginning + assets at end) / 2. An alternative form uses average net assets (assets − long-term / non-current liabilities)."
        },
        {
          "type": "formula",
          "label": "Inventory (stock) turnover",
          "text": "Inventory turnover = cost of sales / average inventory",
          "vars": "Cost of sales = COS/COGS for the period; average inventory = typical stock level over the year. Result is 'times per year'. Days in inventory ≈ 365 / inventory turnover."
        },
        {
          "type": "p",
          "text": "For Cedar (€ thousands), turnover (revenue) = 640 with assets of 698 in Year 1 and 776 in Year 2, so average assets = (698 + 776) / 2 = 737 and asset turnover = 640 / 737 ≈ 0.87 — about €0.87 of sales per €1 of average assets. Using net assets instead, Year 2 net assets = 776 − 238 = 538 and Year 1 = 698 − 254 = 444, so average = 491 and turnover / average net assets = 640 / 491 ≈ 1.30. Average inventory = (92 + 78) / 2 = 85, so inventory turnover = 498 / 85 ≈ 5.9 times per year, or roughly 365 / 5.9 ≈ 62 days. Stock renews about six times a year, and asset productivity must still be judged against manufacturing peers."
        },
        {
          "type": "p",
          "text": "Gearing, or financial structure, asks how heavily the asset base leans on debt versus owners' funds: high debt can amplify returns but also raises dependence on creditors and loss pressure, and the course measures that structure with the equity ratio and the debt ratio."
        },
        {
          "type": "formula",
          "label": "Equity ratio",
          "text": "Equity ratio = equity / total assets",
          "vars": "Equity = total equity; total assets = balance-sheet total (equals equity + liabilities)."
        },
        {
          "type": "formula",
          "label": "Debt ratio",
          "text": "Debt ratio = total debt / total assets",
          "vars": "Total debt = total liabilities (amounts owed); total assets = balance-sheet total. Equity ratio and debt ratio together describe the financing split (they add to 1 if debt means all liabilities)."
        },
        {
          "type": "p",
          "text": "For Cedar Year 2, equity = 388, total assets = 776 and total liabilities (debt) = 388, so the equity ratio = 388 / 776 = 50% and the debt ratio = 388 / 776 = 50% — half equity, half debt financing, a balanced structure on these definitions that still needs sector comparison. If Cedar financed a new plant mostly with short-term overdraft instead of equity or a long-term loan, liquidity would worsen first as current liabilities rose and working capital fell, while gearing would also shift toward more debt, so both clusters would move, not only one. Rounding the Year 2 picture: working capital €131k (positive short-term buffer), current ratio 1.87 (above 1, near the 1.5–2 band), acid-test 1.26 (above 1 without inventory), ROE 21.1% (return on owners' funds), ROCE 13.1% (return on long-term capital), asset turnover 0.87 (sales per €1 of assets), inventory turnover 5.9× (~62 days in stock), equity ratio 50% and debt ratio 50%. Liquidity, profitability, efficiency and gearing answer different questions about the same statements, so a firm can look profitable on ROE yet strained on the acid test, or highly efficient at turning assets while heavily geared — which is why you read the set together, always comparing within industry or over time and knowing the definition used."
        }
      ]
    }
  ],
  "recap": [
    "The balance-sheet identity is assets = liabilities + equity; classify fixed/non-current versus current assets and liabilities, and treat equity as the owners' financing share.",
    "Financial statements combine a balance sheet (point in time), an income statement (period profit or loss) and a cash flow statement (operating, investing and financing cash).",
    "Straight-line depreciation spreads depreciable cost over useful life as an expense without a same-period cash payment; expenditures buy assets, while expenses are used-up costs.",
    "Reading skill means structure and matching on the balance sheet, and COS/COGS, gross profit, EBITDA and EBIT layers on the income statement.",
    "Management accounting supports internal decisions; financial accounting informs internal and external users; auditing checks authenticity where required.",
    "Analysis moves from intuition to formula to interpretation across liquidity (working capital, current ratio, acid test), profitability (ROE, ROCE), efficiency (asset turnover, inventory turnover) and gearing (equity ratio, debt ratio)."
  ]
};
