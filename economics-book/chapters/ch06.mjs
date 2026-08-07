export default {
  "num": 6,
  "title": "Accounting — keeping record of business transactions",
  "intro": "Every sale, purchase, wage payment and loan leaves a trail. Accounting turns that trail into statements you can read: what the firm owns, what it owes, whether it earned a profit, and whether cash actually moved. This chapter trains you to build that picture — and then to analyse it with ratios that answer real business questions.",
  "objectives": [
    "Construct and interpret a balance sheet using assets = liabilities + equity, and classify fixed (non-current) versus current items.",
    "Explain the roles of the income statement and the cash flow statement, and calculate straight-line depreciation.",
    "Distinguish expenditures from expenses, and read COS/COGS, gross profit, EBITDA and EBIT in a structured income statement.",
    "Contrast financial accounting with management accounting and identify who uses accounts.",
    "Analyse liquidity, profitability, efficiency and gearing (financial structure) — intuition first, then formula, example, trap and exam recognition."
  ],
  "sections": [
    {
      "id": "6.1",
      "title": "The balance sheet — what the firm owns and how it is financed",
      "blocks": [
        {
          "type": "p",
          "text": "Opening day at Northline Bike Workshop. Mira and Jonas open a bicycle repair and retail workshop. On day one they list everything the business can use: tools and benches (€18,000), a small delivery van (€14,000), bikes held for resale (€9,200), and €4,800 in the business bank account. A bank lent them €22,000. The rest came from money and equipment they put in themselves. That list — and the story of who financed it — is the seed of a balance sheet."
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
          "text": "Why the identity must hold. Every euro of asset was funded either by owners (equity) or by creditors (liabilities). Those funds are bound in whatever form the business currently holds — including cash. If assets rise, either liabilities or equity must rise by the same amount (unless another asset falls in an asset swap)."
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
          "text": "Build Northline's opening balance sheet. Sum assets: tools & benches 18,000 + van 14,000 + inventory (bikes) 9,200 + cash 4,800 = €46,000. Liabilities: bank loan = €22,000. Equity = assets − liabilities = 46,000 − 22,000 = €24,000. Check: 46,000 = 22,000 + 24,000. Opening totals balance at €46,000 on each side."
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
          "type": "think",
          "prompt": "Before reading on: if Northline buys €1,500 of spare parts for cash, does total assets change? What if the same purchase is on supplier credit?"
        },
        {
          "type": "p",
          "text": "Asset swap versus financed purchase. Pay cash for an asset → one asset rises, cash falls by the same amount → total assets unchanged. Buy on credit → the asset rises and a liability (trade payable) rises by the same amount → balance-sheet total rises."
        },
        {
          "type": "p",
          "text": "Two ways to buy €1,500 of spare parts. Start: assets 46,000; liabilities 22,000; equity 24,000. Cash purchase: inventory +1,500; cash −1,500. Totals still 46,000 = 22,000 + 24,000. Credit purchase: inventory +1,500; trade payables +1,500. Assets 47,500; liabilities 23,500; equity 24,000. Same economic item; different financing changes the totals."
        },
        {
          "type": "p",
          "text": "Fixed (non-current) assets vs current assets."
        },
        {
          "type": "p",
          "text": "Fixed / non-current assets: Useful life normally more than one year; Intended for longer-term use in the business; Usually harder to turn into cash quickly; Examples: property, plant, buildings, machinery, office equipment kept for use; longer-term financial assets; intangible assets (patents, trademarks, copyrights)."
        },
        {
          "type": "p",
          "text": "Current assets: Higher liquidity; Normally used up, sold or converted within a year; Examples: inventory (merchandise not yet sold), trade receivables / debtors (money customers owe), cash."
        },
        {
          "type": "p",
          "text": "Intangible assets cannot be touched, but they still have value for the business — the same logic as tangible assets. A workshop may own none yet; a manufacturing group may report large patents, trademarks and licences."
        },
        {
          "type": "p",
          "text": "Liabilities by duration."
        },
        {
          "type": "p",
          "text": "Current liabilities: Due within one year; Examples: trade payables (trade credit to suppliers), bank overdraft, other short-term obligations."
        },
        {
          "type": "p",
          "text": "Non-current liabilities: Duration more than one year; Examples: long-term bank loans, bonds payable."
        },
        {
          "type": "formula",
          "label": "Equity ratio",
          "text": "Equity ratio = equity / total capital",
          "vars": "Equity = owners' claim; total capital = total assets (same as total equity + liabilities). A higher ratio means a larger share of assets was financed with the firm's own resources."
        },
        {
          "type": "bullets",
          "items": [
            "Equity usually does not have to be repaid like a loan.",
            "Higher equity supports independence from creditors.",
            "A larger equity cushion reduces the risk of over-indebtedness if the firm makes a loss."
          ]
        },
        {
          "type": "trap",
          "text": "Do not treat office computers used in the business as the same line as computers held for resale. Same physical object type, different asset class: fixed asset versus inventory (current asset)."
        },
        {
          "type": "exam",
          "text": "Exam cues for 6.1: 'point in time', 'assets = liabilities + equity', classify an item as non-current vs current, or decide whether a cash purchase changes the balance-sheet total. Valuation is constrained by rules — firms cannot freely invent asset values."
        }
      ]
    },
    {
      "id": "6.2",
      "title": "Income statement, cash flow and depreciation",
      "blocks": [
        {
          "type": "p",
          "text": "Why one statement is not enough. Northline's end-of-year balance sheet shows stronger equity and more cash than on day one. That still does not say how much was sold, what it cost to serve customers, or which cash movements came from repairs versus a new loan. Performance over a period needs the full financial statement set."
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
          "text": "Revenue, costs and the profit test. Revenue is income from selling goods or services (cash or receivables). Costs are resources consumed to produce those goods or services. Other expenses (rent, admin wages, energy, depreciation, and similar) also reduce the result. Profit is not 'cash left in the till' — it is the accounting surplus for the period."
        },
        {
          "type": "p",
          "text": "Simple period profit. Sales revenue for the year = €268,000. Costs and expenses (materials, wages, rent, energy, depreciation, other) = €214,000. Profit = 268,000 − 214,000 = €54,000. A €54,000 profit increases equity if retained in the business."
        },
        {
          "type": "p",
          "text": "Profit raises equity; a loss lowers equity. You can spot performance in the income statement or in the change in equity between two balance-sheet dates — same economic story, two presentations."
        },
        {
          "type": "idea",
          "term": "Depreciation",
          "text": "Recognition that fixed assets lose value as they are used up over time. Without it, balance-sheet asset values would be overstated and profit would ignore the wearing-out of equipment."
        },
        {
          "type": "p",
          "text": "Straight-line logic. Spread the depreciable cost evenly across the expected useful life so each year carries the same charge. Land is not depreciated. Depreciation is an expense in the income statement, but — unlike wages or energy — it does not cause a cash payment in the period when it is charged."
        },
        {
          "type": "formula",
          "label": "Straight-line depreciation (annual)",
          "text": "Annual depreciation = (cost − residual value) / expected useful life",
          "vars": "Cost = purchase price of the fixed asset; residual value = expected value at the end of useful life (often zero in simple cases); expected useful life = years the asset will be used. If residual value is zero: annual depreciation = cost / useful life."
        },
        {
          "type": "p",
          "text": "Depreciate a diagnostic laptop and a van. Laptop: cost €2,400; useful life 3 years; residual €0 → annual depreciation = 2,400 / 3 = €800. Book values: year 1 → €1,600; year 2 → €800; year 3 → €0. Van: cost €14,000; useful life 5 years; residual €2,000 → depreciable cost = 12,000; annual depreciation = 12,000 / 5 = €2,400. Each year the income statement includes these charges; the cash outlay happened when the assets were bought. Carrying (book) value = cost − accumulated depreciation."
        },
        {
          "type": "trap",
          "text": "Never treat depreciation as a cash outflow in the cash flow statement for the year it is charged. The cash left when the asset was purchased (an investing outflow then)."
        },
        {
          "type": "idea",
          "term": "Expenditures vs expenses",
          "text": "Expenditures are payments to purchase assets (non-current or current). Expenses are costs that have expired or been used up to produce the goods or services sold — for example COGS, salaries, marketing, interest, insurance and rent."
        },
        {
          "type": "p",
          "text": "Expenditure that is not (yet) an expense. Northline spends €12,000 cash on a new alignment machine (expenditure; investing cash outflow). If useful life is 6 years and residual is €0, annual depreciation expense = 12,000 / 6 = €2,000. In year 1, cash fell by €12,000, but the income statement expense is only €2,000. Buying the machine is an expenditure; using it up over time creates expenses."
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
          "type": "bullets",
          "items": [
            "Operating activities — core business cash (customers paying; paying suppliers, wages linked to operations). Ideally positive; the most important section for day-to-day health.",
            "Investing activities — cash spent on long-term assets or received from selling them. A negative figure often means the firm invested, not that it failed.",
            "Financing activities — cash from investors or creditors; outflows for interest, dividends or debt repayment."
          ]
        },
        {
          "type": "p",
          "text": "Cash change versus profit. Opening cash €4,800; closing cash €40,700 → cash increase = €35,900. Same year profit was €54,000. The gap exists because profit includes non-cash depreciation and accruals (credit sales, unpaid bills), while cash only counts actual movements — and because investing and financing cash also move the bank balance. A firm can be profitable and still short of cash, or raise cash by borrowing without matching profit."
        },
        {
          "type": "p",
          "text": "Classify cash movements. Customers settle €38,000 of receivables → operating inflow. Parts paid in cash €16,000 → operating outflow. New bench system bought for €9,000 cash → investing outflow. Loan principal repaid €7,000 → financing outflow. Owners' drawings / dividend €5,000 → financing outflow. Net from these items: (38,000 − 16,000) − 9,000 − 7,000 − 5,000 = +€1,000."
        },
        {
          "type": "exam",
          "text": "Exam cues for 6.2: period vs point-in-time; profit ≠ cash; classify operating / investing / financing; compute straight-line depreciation and carrying value; spot that depreciation is an expense without a same-period cash payment; separate expenditure (buy asset) from expense (use asset up)."
        }
      ]
    },
    {
      "id": "6.3",
      "title": "Reading balance sheets and income statements",
      "blocks": [
        {
          "type": "p",
          "text": "Reading with caution — then with purpose. Asset values depend on valuation rules; depreciation can push book values below what an asset might fetch in a private sale. Still, comparing structure over time and against similar firms answers sharp questions about how the business is built and how it performed."
        },
        {
          "type": "bullets",
          "items": [
            "Asset mix — mostly non-current or current, and is that typical for this kind of business?",
            "Financing mix — how has equity developed? More long-term or short-term liabilities?",
            "Matching — are non-current assets covered by long-term finance (equity + non-current liabilities)?",
            "Revenue path — did sales rise, and did cost of sales move in line?",
            "Profit path — how did gross profit and operating profit develop?"
          ]
        },
        {
          "type": "p",
          "text": "The first three questions are balance-sheet questions. The last two need the income statement."
        },
        {
          "type": "p",
          "text": "Sample statement of financial position — Cedar Circuit Components (€ thousands). Item: Property, plant and equipment — Year 2: 412 — Year 1: 388 Item: Intangible assets — Year 2: 48 — Year 1: 52 Item: Other non-current assets — Year 2: 35 — Year 1: 30 Item: Non-current assets — Year 2: 495 — Year 1: 470 Item: Inventories — Year 2: 92 — Year 1: 78 Item: Trade and other receivables — Year 2: 71 — Year 1: 64 Item: Cash and cash equivalents — Year 2: 118 — Year 1: 86 Item: Current assets — Year 2: 281 — Year 1: 228 Item: Total assets — Year 2: 776 — Year 1: 698 Item: Share capital — Year 2: 120 — Year 1: 120 Item: Reserves and retained earnings — Year 2: 268 — Year 1: 214 Item: Total equity — Year 2: 388 — Year 1: 334 Item: Non-current financial liabilities — Year 2: 210 — Year 1: 230 Item: Other non-current liabilities — Year 2: 28 — Year 1: 24 Item: Non-current liabilities — Year 2: 238 — Year 1: 254 Item: Trade and other payables — Year 2: 96 — Year 1: 78 Item: Other current liabilities — Year 2: 54 — Year 1: 32 Item: Current liabilities — Year 2: 150 — Year 1: 110 Item: Total liabilities — Year 2: 388 — Year 1: 364 Item: Total equity and liabilities — Year 2: 776 — Year 1: 698"
        },
        {
          "type": "p",
          "text": "Structure read on Cedar's balance sheet. Non-current assets / total assets = 495 / 776 ≈ 63.8% — a plant-heavy mix typical of manufacturing. Equity ratio = 388 / 776 = 50% — half of assets financed by equity. Long-term finance = equity 388 + non-current liabilities 238 = 626, which exceeds non-current assets 495 → long-term assets are covered by long-term resources. Cash 118 exceeds trade payables 96 — bills could be cleared from cash alone if needed. Structure looks manufacturing-typical, moderately equity-funded, and matched on the long-term side."
        },
        {
          "type": "p",
          "text": "Sample income statement — Cedar Circuit Components (€ thousands). Item: Revenue — Year 2: 640 — Year 1: 520 Item: Cost of sales — Year 2: (498) — Year 1: (430) Item: Gross profit — Year 2: 142 — Year 1: 90 Item: Distribution costs — Year 2: (28) — Year 1: (24) Item: General and administrative costs — Year 2: (36) — Year 1: (30) Item: Other operating result — Year 2: 4 — Year 1: 2 Item: Operating result (EBIT) — Year 2: 82 — Year 1: 38 Item: Finance costs — net — Year 2: (14) — Year 1: (16) Item: Profit before tax — Year 2: 68 — Year 1: 22 Item: Income taxes — Year 2: (16) — Year 1: (8) Item: Profit for the year — Year 2: 52 — Year 1: 14"
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
          "text": "Reading down the income statement. Revenue − COS → gross profit. Then operating expenses (and other operating items) shape the path toward EBIT. Finance income and costs sit below operating result. Taxes sit near the bottom. Each layer answers a different question: production margin, operating strength, then financing and tax effects."
        },
        {
          "type": "p",
          "text": "Performance read on Cedar's income statement. Revenue rose by 640 − 520 = 120 → about +23.1%. Cost of sales rose by 498 − 430 = 68 → about +15.8%. Revenue grew faster than COS → gross profit jumped from 90 to 142. EBIT more than doubled (38 → 82). Top-line growth with a favourable COS relationship improved both gross profit and operating result."
        },
        {
          "type": "think",
          "prompt": "If revenue rose 10% but COS rose 18%, what would you expect for gross profit — and what story might that tell about production efficiency or input prices?"
        },
        {
          "type": "trap",
          "text": "Do not put distribution or admin staff costs into COGS. Gross profit would look worse for the wrong reason, and you would misread production performance."
        },
        {
          "type": "exam",
          "text": "Exam cues for 6.3: calculate structure percentages; test long-term matching; identify what belongs in COS; interpret gross profit vs EBIT; remember statements need careful valuation awareness."
        },
        {
          "type": "takeaways",
          "items": [
            "Balance sheet → mix of assets and financing; income statement → revenue, costs and layered profits.",
            "COS is production-tied; gross profit is pre-operating-expense margin; EBIT is the operating result.",
            "Compare periods and peers — a single number rarely speaks alone."
          ]
        }
      ]
    },
    {
      "id": "6.4",
      "title": "Who uses accounts — financial vs management accounting",
      "blocks": [
        {
          "type": "p",
          "text": "Two rooms, two questions. In the workshop office, Mira asks whether specialty helmets cover their true cost if priced at €49. At the bank, the loan officer asks whether Northline can service debt and whether last year's accounts were reliable. Same business — different information jobs."
        },
        {
          "type": "idea",
          "term": "Users of accounts",
          "text": "Internal users include owners, managers and employees — they care whether the business is thriving, whether costs need cutting, and whether the investment earns a return for the risk taken. External users include tax authorities, suppliers, competitors, investors, banks and the media."
        },
        {
          "type": "p",
          "text": "Two types of accounting."
        },
        {
          "type": "p",
          "text": "Management (managerial) accounting: Built for managers inside the firm; Supports decisions: where to cut costs, how to set prices, how to allocate resources; Often more detailed and forward-looking for internal use."
        },
        {
          "type": "p",
          "text": "Financial accounting: Produces statements such as the balance sheet and income statement; Serves decision makers inside and outside the firm (owners, banks, tax authorities, investors); Appears in annual reports; large firms often publish selected figures on their websites."
        },
        {
          "type": "idea",
          "term": "Auditing",
          "text": "For some companies it is mandatory that an independent firm of accountants checks the accounts for authenticity. The outcome appears in the annual report."
        },
        {
          "type": "p",
          "text": "Managers use both. Managers need management accounting for operational choices, but they also watch financial accounting because banks, tax authorities and investors will judge the firm on those statements."
        },
        {
          "type": "p",
          "text": "Same decision day, two information packs. Management pack: estimated cost per custom bike build €1,120; proposed list price €1,490; expected monthly volume if price rises €40. Financial pack for the bank: equity €78,000; remaining loan €15,000; last year's profit €54,000; audited year-end statements. Tax authorities use the financial accounts to assess taxable profit. Price design leans on management accounting; external financing and tax lean on financial accounting."
        },
        {
          "type": "trap",
          "text": "Do not assume management accounting replaces the balance sheet and income statement. External parties — and many mandatory duties — rely on financial accounting."
        },
        {
          "type": "exam",
          "text": "Exam cues for 6.4: match a user to internal vs external; decide whether a task is management accounting (pricing, cost cutting) or financial accounting (published statements, bank review); know that auditing is independent verification for authenticity."
        }
      ]
    },
    {
      "id": "6.5",
      "title": "Analysis of financial statements",
      "blocks": [
        {
          "type": "p",
          "text": "From statements to ratios. Cedar's statements are complete — yet a lender still asks: can it pay bills on time? Does profit justify the capital tied up? Does stock sit too long? How heavily is it geared with debt? Ratios turn raw lines into comparable answers."
        },
        {
          "type": "p",
          "text": "Analysis clusters into liquidity (solvency in the short term), profitability (profit relative to capital or size), financial efficiency (how well resources generate activity), and financial structure / gearing (equity versus debt). Ratios vary sharply by industry — compare peers in the same sector, or one firm over several years. Always know which definition was used before you compare."
        },
        {
          "type": "p",
          "text": "Ratio map used in this course. Theme: Liquidity — Measure: Working capital — Core idea: Current assets left after current liabilities Theme: Liquidity — Measure: Current ratio — Core idea: Current assets per €1 of current liabilities Theme: Liquidity — Measure: Acid-test ratio — Core idea: Same idea, excluding inventory Theme: Profitability — Measure: ROE — Core idea: EBIT relative to equity Theme: Profitability — Measure: ROCE — Core idea: EBIT relative to capital employed Theme: Efficiency — Measure: Asset turnover — Core idea: Turnover per €1 of (average) assets Theme: Efficiency — Measure: Inventory turnover — Core idea: How many times stock is sold/replaced Theme: Gearing / structure — Measure: Equity ratio — Core idea: Equity as % of total assets Theme: Gearing / structure — Measure: Debt ratio — Core idea: Total debt as % of total assets"
        },
        {
          "type": "p",
          "text": "Liquidity — intuition first. Imagine every short-term claim lands at once. Can the firm's relatively liquid resources (cash, receivables, inventory) cover those claims, and is anything left? That leftover idea is working capital. Retailers with heavy stock often need more working capital than a service firm with little inventory. High inventory can serve customers quickly, but it ties up money, needs space, and can become obsolete."
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
          "text": "Liquidity for Cedar (Year 2, € thousands). Current assets = 281; inventory = 92; current liabilities = 150. Working capital = 281 − 150 = 131 (positive). Current ratio = 281 / 150 ≈ 1.87 (above 1; inside a 1.5–2 comfort discussion). Acid-test = (281 − 92) / 150 = 189 / 150 = 1.26 (still above 1). Short-term cover looks adequate on these measures — still judge against industry peers."
        },
        {
          "type": "p",
          "text": "Cash-flow patch vs working-capital health. A short-term loan, overdraft or extra trade credit can ease a cash squeeze — but it raises current liabilities and can shrink working capital. Improving both cash and working capital more sustainably usually means adding equity or longer-term borrowing."
        },
        {
          "type": "trap",
          "text": "A current ratio above 1 is not automatically 'safe' if most current assets are slow-moving inventory. That is why the acid test exists. Also: fixing cash with short-term borrowing can worsen the working-capital picture."
        },
        {
          "type": "exam",
          "text": "Liquidity exam cues: compute working capital, current ratio and acid test; interpret 'greater than 1'; explain why inventory is dropped in the acid test; link short-term borrowing to lower working capital."
        },
        {
          "type": "p",
          "text": "Profitability — intuition first. A profit of €50,000 sounds fine until you ask: relative to how much capital was risked? Profitability compares profit to a size base — equity, capital employed, or turnover — so tiny profits on huge capital look weak."
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
          "text": "ROE and ROCE for Cedar (Year 2, € thousands). EBIT = 82; equity = 388. ROE = 82 / 388 ≈ 21.1%. Capital employed = assets − current liabilities = 776 − 150 = 626 (also equity 388 + non-current liabilities 238). ROCE = 82 / 626 ≈ 13.1%. If average capital employed were 640: ROCE = 82 / 640 = 12.8%. Returns look meaningful only beside peer ROCE/ROE and Cedar's own trend."
        },
        {
          "type": "p",
          "text": "Efficiency — intuition first. Asset turnover asks how many euros of sales each euro of assets supports. Inventory turnover asks how often stock is sold or used up and replaced — high turnover means money is not trapped in the warehouse for long."
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
          "text": "Efficiency for Cedar (€ thousands). Turnover (revenue) = 640; assets Year 1 = 698; assets Year 2 = 776. Average assets = (698 + 776) / 2 = 737. Asset turnover = 640 / 737 ≈ 0.87 → about €0.87 of sales per €1 of average assets. Alternative with net assets: Year 2 net assets = 776 − 238 = 538; Year 1 = 698 − 254 = 444; average = 491; turnover / average net assets = 640 / 491 ≈ 1.30. Average inventory = (92 + 78) / 2 = 85; inventory turnover = 498 / 85 ≈ 5.9 times per year → roughly 365 / 5.9 ≈ 62 days. Stock renews about six times a year; asset productivity must be judged against manufacturing peers."
        },
        {
          "type": "p",
          "text": "Gearing / financial structure — intuition first. Gearing asks how heavily the asset base leans on debt versus owners' funds. High debt can amplify returns but also raises dependence on creditors and loss pressure. The course measures structure with the equity ratio and the debt ratio."
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
          "text": "Gearing for Cedar Year 2. Equity = 388; total assets = 776; total liabilities (debt) = 388. Equity ratio = 388 / 776 = 50%. Debt ratio = 388 / 776 = 50%. Half equity, half debt financing — a balanced structure on these definitions; still compare within the sector."
        },
        {
          "type": "think",
          "prompt": "If Cedar financed a new plant mostly with short-term overdraft instead of equity or a long-term loan, which ratios would worsen first — liquidity, gearing, or both?"
        },
        {
          "type": "p",
          "text": "Cedar Year 2 — ratio summary (figures rounded). Ratio: Working capital — Value: €131k — Quick reading: Positive short-term buffer Ratio: Current ratio — Value: 1.87 — Quick reading: Above 1; near 1.5–2 band Ratio: Acid-test ratio — Value: 1.26 — Quick reading: Above 1 without inventory Ratio: ROE (EBIT / equity) — Value: 21.1% — Quick reading: Return on owners' funds Ratio: ROCE (EBIT / capital employed) — Value: 13.1% — Quick reading: Return on long-term capital Ratio: Asset turnover (avg assets) — Value: 0.87 — Quick reading: Sales per €1 of assets Ratio: Inventory turnover — Value: 5.9× — Quick reading: ~62 days in stock Ratio: Equity ratio — Value: 50% — Quick reading: Half owner-financed Ratio: Debt ratio — Value: 50% — Quick reading: Half creditor-financed"
        },
        {
          "type": "p",
          "text": "Liquidity, profitability, efficiency and gearing answer different questions about the same statements. A firm can look profitable (ROE) yet strained on the acid test, or highly efficient at turning assets while heavily geared. Read the set together."
        },
        {
          "type": "takeaways",
          "items": [
            "Liquidity: working capital, current ratio, acid test — can short-term claims be met?",
            "Profitability: ROE and ROCE relate EBIT to equity or capital employed.",
            "Efficiency: asset turnover and inventory turnover show resource use.",
            "Gearing: equity ratio and debt ratio describe financial structure.",
            "Always compare within industry or over time; know the definition used."
          ]
        }
      ]
    }
  ],
  "recap": [
    "Balance sheet identity: assets = liabilities + equity; classify fixed/non-current vs current assets and liabilities; equity is the owners' financing share.",
    "Financial statements combine balance sheet (point in time), income statement (period profit or loss) and cash flow statement (operating, investing, financing cash).",
    "Straight-line depreciation spreads depreciable cost over useful life; it is an expense without a same-period cash payment. Expenditures buy assets; expenses are used-up costs.",
    "Reading skill: structure and matching on the balance sheet; COS/COGS, gross profit, EBITDA and EBIT layers on the income statement.",
    "Management accounting supports internal decisions; financial accounting informs internal and external users; auditing checks authenticity where required.",
    "Analysis: liquidity (working capital, current ratio, acid test), profitability (ROE, ROCE), efficiency (asset turnover, inventory turnover), gearing (equity ratio, debt ratio) — intuition, formula, example, trap, exam recognition."
  ]
};
