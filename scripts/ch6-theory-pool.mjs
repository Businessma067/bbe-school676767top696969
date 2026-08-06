/**
 * Fuhrmann (2019) Chapter 6 (+ Ch.4 share concepts) theory statements
 * for PDF-style cases: mix calc/table reading with book concepts.
 * No abbreviations; no parenthetical formula hints.
 */

/** @typedef {{ stmt: string, val: boolean, expl: string, theory: true }} TheoryCand */

/** @type {Record<string, TheoryCand[]>} */
export const THEORY_BY_TOPIC = {
  balance: [
    {
      theory: true,
      val: true,
      stmt: "The balance sheet identity requires that total assets always equal the sum of total liabilities and total equity, which is why any increase in assets must be matched by an increase in either liabilities or equity.",
      expl: "Assets = liabilities + equity is the fundamental balance sheet equation.",
    },
    {
      theory: true,
      val: true,
      stmt: "Owner's equity is the residual claim remaining after liabilities are deducted from assets, and it is the portion of assets not financed by debt.",
      expl: "Equity equals assets minus liabilities.",
    },
    {
      theory: true,
      val: true,
      stmt: "Non-current assets normally have a useful life of more than one year and are intended to be used in the business for longer than one year.",
      expl: "This matches the textbook distinction between non-current and current assets.",
    },
    {
      theory: true,
      val: true,
      stmt: "Current assets such as inventory, trade receivables and cash normally have higher liquidity and are not expected to be used longer than a year.",
      expl: "Current assets turn into cash within the normal operating cycle.",
    },
    {
      theory: true,
      val: true,
      stmt: "The same physical item can be inventory for a dealer that holds it for sale and a non-current asset for a business that uses it in operations.",
      expl: "Classification follows intended use, not physical form alone.",
    },
    {
      theory: true,
      val: true,
      stmt: "A high equity ratio indicates that a larger portion of assets was financed by the company's own resources rather than by creditors.",
      expl: "Equity ratio expresses equity relative to assets.",
    },
    {
      theory: true,
      val: true,
      stmt: "Equity usually does not have to be repaid on a fixed schedule, helps the business stay relatively independent from creditors, and cushions losses.",
      expl: "These are textbook advantages of equity finance.",
    },
    {
      theory: true,
      val: true,
      stmt: "Profit for the year increases equity through retained earnings, while a loss decreases equity.",
      expl: "The income statement links to the balance sheet via retained earnings.",
    },
    {
      theory: true,
      val: false,
      stmt: "Buying software with cash always increases total assets because a new asset is added without reducing any other asset.",
      expl: "Cash falls by the same amount as the software rises, so total assets stay unchanged.",
    },
    {
      theory: true,
      val: false,
      stmt: "Owner's equity is the portion of assets financed by bank loans and trade creditors.",
      expl: "That portion is liabilities; equity is the residual not financed by debt.",
    },
    {
      theory: true,
      val: false,
      stmt: "Long-term assets should preferably be financed only with short-term trade credit.",
      expl: "Long-term assets should be financed with long-term financial resources.",
    },
    {
      theory: true,
      val: false,
      stmt: "Current liabilities are debts that must be repaid after more than one year.",
      expl: "Current liabilities are due within one year; longer debts are non-current.",
    },
  ],
  cashflow: [
    {
      theory: true,
      val: true,
      stmt: "Dividends paid to shareholders are recorded within cash flow from financing activities, not cash flow from operating activities.",
      expl: "Dividend payments are a financing activity.",
    },
    {
      theory: true,
      val: true,
      stmt: "A business can have a negative cash flow from investing activities in the same year that it pays a dividend, since investment spending and dividends sit in different sections of the cash flow statement.",
      expl: "Investing and financing are recorded separately.",
    },
    {
      theory: true,
      val: true,
      stmt: "Collecting payment on a trade receivable is cash from operating activities because it comes from the core trading cycle.",
      expl: "Customer collections belong in operating cash flow.",
    },
    {
      theory: true,
      val: true,
      stmt: "Purchase of a plant, machinery or other long-term asset for cash is classified as cash flow from investing activities.",
      expl: "Long-term asset purchases are investing outflows.",
    },
    {
      theory: true,
      val: true,
      stmt: "Repaying a bank loan is classified as a financing cash outflow, not an operating cash outflow.",
      expl: "Debt repayments sit in financing activities.",
    },
    {
      theory: true,
      val: true,
      stmt: "A positive cash flow is not identical with a profit, because profit includes non-cash charges and accruals that cash flow does not.",
      expl: "Profit and cash movement are different concepts.",
    },
    {
      theory: true,
      val: true,
      stmt: "Cash flow from operations shows how well a business generates cash from its core business and is the most important part of the cash flow statement.",
      expl: "This matches the textbook emphasis on operating cash flow.",
    },
    {
      theory: true,
      val: true,
      stmt: "A negative cash flow from investing activities does not necessarily indicate a problem; it often means the business invested in long-term assets.",
      expl: "Investing outflows frequently reflect growth spending.",
    },
    {
      theory: true,
      val: true,
      stmt: "Profit for the year is reported in the income statement and increases retained earnings on the balance sheet, but it does not appear as a separate line item in the cash flow statement, which instead records actual cash inflows and outflows.",
      expl: "The three statements serve different purposes and link through retained earnings and cash, not by repeating profit as a cash-flow line.",
    },
    {
      theory: true,
      val: false,
      stmt: "Paying dividends is classified as an investing cash outflow because it uses cash belonging to shareholders.",
      expl: "Dividends are financing outflows, not investing.",
    },
    {
      theory: true,
      val: false,
      stmt: "Customer collections of receivables are classified as financing cash inflows.",
      expl: "They are operating inflows.",
    },
    {
      theory: true,
      val: false,
      stmt: "A negative cash flow from investing activities always proves the business is in financial trouble.",
      expl: "It often only means assets were purchased.",
    },
    {
      theory: true,
      val: false,
      stmt: "Purchase of office equipment for cash is classified as an operating cash outflow.",
      expl: "Long-term equipment purchases are investing activities.",
    },
  ],
  income: [
    {
      theory: true,
      val: true,
      stmt: "The balance sheet shows assets, liabilities and equity at a point in time, while the income statement summarises revenues, costs and expenses over a period.",
      expl: "Snapshot versus period statement.",
    },
    {
      theory: true,
      val: true,
      stmt: "If revenues exceed costs and expenses, the company has a profit; if costs and expenses exceed revenue, it suffers a loss.",
      expl: "Profit is the residual of revenues over costs and expenses.",
    },
    {
      theory: true,
      val: true,
      stmt: "Cost of sales covers costs directly tied to production, such as materials and labour linked to production, not administration or distribution costs.",
      expl: "Cost of sales excludes admin and distribution.",
    },
    {
      theory: true,
      val: true,
      stmt: "Gross profit shows earnings after deducting the direct costs of producing the goods, before operating expenses are deducted.",
      expl: "Gross profit comes before operating expenses.",
    },
    {
      theory: true,
      val: false,
      stmt: "The income statement reports assets, liabilities and equity on a single reporting date.",
      expl: "That is the balance sheet's job; the income statement covers a period.",
    },
    {
      theory: true,
      val: false,
      stmt: "Cost of sales includes administration costs, shipping to customers and sales-staff costs.",
      expl: "Those sit outside cost of sales as operating expenses.",
    },
  ],
  depreciation: [
    {
      theory: true,
      val: true,
      stmt: "Depreciation recognises that the value of fixed assets decreases as they are used up over time, so without it asset values in the accounts would be overstated.",
      expl: "Depreciation spreads the cost of use over time.",
    },
    {
      theory: true,
      val: true,
      stmt: "Under the straight-line method, the depreciable cost is spread evenly over the expected useful life, giving the same depreciation charge each year.",
      expl: "Straight-line yields equal annual charges.",
    },
    {
      theory: true,
      val: true,
      stmt: "Unlike wages or energy costs, depreciation does not cause an actual cash payment in the period when it is charged.",
      expl: "Depreciation is a non-cash expense.",
    },
    {
      theory: true,
      val: true,
      stmt: "Land is not subject to depreciation because it does not wear out through use the way buildings and machinery do.",
      expl: "Land is normally excluded from depreciation.",
    },
    {
      theory: true,
      val: true,
      stmt: "After depreciation, the carrying value of an asset on the balance sheet is lower than its original cost.",
      expl: "Carrying value equals cost less accumulated depreciation.",
    },
    {
      theory: true,
      val: false,
      stmt: "Depreciation each year requires an equal cash payment to an outside party when the charge is recorded.",
      expl: "Depreciation is non-cash; the cash was usually paid when the asset was bought.",
    },
    {
      theory: true,
      val: false,
      stmt: "Land is depreciated on a straight-line basis just like buildings and machinery.",
      expl: "Land is not depreciated.",
    },
  ],
  financial_mgmt: [
    {
      theory: true,
      val: true,
      stmt: "Managerial accounting focuses on providing information for the management of the business to support decisions such as where to cut costs and how to calculate prices.",
      expl: "Management accounting serves internal decision makers.",
    },
    {
      theory: true,
      val: true,
      stmt: "Financial accounting information such as the balance sheet and the income statement is also of interest to decision makers outside the business, for example tax authorities or banks.",
      expl: "Financial accounting serves external as well as internal users.",
    },
    {
      theory: true,
      val: true,
      stmt: "Auditing is the independent checking of accounts for authenticity by an auditing company.",
      expl: "Auditing is an independent verification of the accounts.",
    },
    {
      theory: true,
      val: false,
      stmt: "Managerial accounting exists mainly to satisfy tax authorities rather than to support internal decisions.",
      expl: "Management accounting primarily supports internal decisions.",
    },
    {
      theory: true,
      val: false,
      stmt: "Only external users need accounting information; owners and managers do not.",
      expl: "Internal users include owners, managers and employees.",
    },
  ],
  shares: [
    {
      theory: true,
      val: true,
      stmt: "Common shareholders are entitled to vote at the annual stockholders' meeting, whereas holders of preferred shares do not have this right but typically receive a higher dividend.",
      expl: "Common shares vote; preferred shares usually trade voting rights for a higher dividend.",
    },
    {
      theory: true,
      val: true,
      stmt: "Once shares are already trading on a stock exchange, a rise in their market price does not itself provide the issuing company with additional funds; only shareholders who sell benefit from the higher price.",
      expl: "Secondary-market price rises do not raise new company cash.",
    },
    {
      theory: true,
      val: true,
      stmt: "Dividend yield and capital growth are both reasons why investors buy shares, alongside voting rights and the wish to invest in real values that may hold up during inflation.",
      expl: "These match the textbook motives for buying shares.",
    },
    {
      theory: true,
      val: true,
      stmt: "A corporation is not obliged to pay a dividend every year regardless of performance; unpaid dividends over a longer period may make the shares less attractive, but payment is not legally required every year.",
      expl: "Dividends are not a mandatory annual cash outflow.",
    },
    {
      theory: true,
      val: true,
      stmt: "A high or rising price-earnings ratio can indicate either that a company's shares have become relatively expensive compared with its earnings, or that investors expect stronger future earnings growth.",
      expl: "This matches the textbook reading of a high price-earnings ratio.",
    },
    {
      theory: true,
      val: true,
      stmt: "Carrying value per share, together with closing share price, high and low prices, dividend per share, dividend yield, earnings per share and the price-earnings ratio, are figures that shareholders and potential investors typically use when evaluating a company's shares.",
      expl: "These are the textbook's key stock figures.",
    },
    {
      theory: true,
      val: true,
      stmt: "A share buyback reduces the number of shares outstanding, which can raise earnings per share even if total profit stays exactly the same.",
      expl: "Fewer shares increase earnings per share for an unchanged profit.",
    },
    {
      theory: true,
      val: true,
      stmt: "Market capitalisation is the total market value of a company's outstanding shares and is often used to gauge size, but it is not necessarily a meaningful measure of fundamental value.",
      expl: "Market capitalisation = shares × price; price can move for reasons unrelated to value.",
    },
    {
      theory: true,
      val: false,
      stmt: "After shares are already trading, any rise in the market price automatically provides new cash funds to the issuing corporation.",
      expl: "Secondary trading does not raise new company funds.",
    },
    {
      theory: true,
      val: false,
      stmt: "Preferred shareholders vote at the stockholders' meeting, while common shareholders never vote.",
      expl: "Common shares typically vote; preferred shares usually do not.",
    },
    {
      theory: true,
      val: false,
      stmt: "When one shareholder sells shares to another on the stock exchange, the corporation always receives the sale proceeds as new share capital.",
      expl: "Secondary-market transfers do not bring cash into the corporation.",
    },
  ],
  analysis: [
    {
      theory: true,
      val: true,
      stmt: "Liquidity refers to the ability of a business to pay its bills and repay its debts on time.",
      expl: "Liquidity is about timely payment of obligations.",
    },
    {
      theory: true,
      val: true,
      stmt: "Working capital should be positive, meaning current assets should be higher than current liabilities.",
      expl: "Positive working capital supports day-to-day payment capacity.",
    },
    {
      theory: true,
      val: true,
      stmt: "Making a profit alone does not prove sufficient profitability; profitability ratios relate profit to an indicator of business size such as assets, equity or turnover.",
      expl: "Absolute profit is not enough without relating it to capital employed.",
    },
    {
      theory: true,
      val: true,
      stmt: "Return on equity and return on capital employed are most meaningful when comparing similar businesses or the same business over time, not as isolated absolute numbers.",
      expl: "Comparative context matters for return ratios.",
    },
    {
      theory: true,
      val: true,
      stmt: "High inventory turnover indicates that goods sell well and do not remain in stock for a long time.",
      expl: "Fast inventory turnover signals healthy stock movement.",
    },
    {
      theory: true,
      val: true,
      stmt: "The acid test excludes inventories to give a stricter evaluation of liquidity than the current ratio.",
      expl: "Inventories are left out of the acid-test calculation.",
    },
    {
      theory: true,
      val: false,
      stmt: "Working capital is healthy only when short-term debts stay larger than liquid short-term resources on a lasting basis.",
      expl: "That would be negative working capital and a liquidity concern; healthy working capital needs short-term resources above short-term debts.",
    },
    {
      theory: true,
      val: false,
      stmt: "Any absolute profit proves the business is sufficiently profitable relative to the capital invested.",
      expl: "Profit must be judged relative to capital or turnover.",
    },
    {
      theory: true,
      val: false,
      stmt: "Low inventory turnover always proves that goods sell quickly and cash is not tied up in stock.",
      expl: "Low turnover means goods stay in stock longer.",
    },
  ],
};

const TOPIC_ALIASES = {
  bs: "balance",
  bs1y: "balance",
  bs2y: "balance",
  bsSmall: "balance",
  cf: "cashflow",
  cf2y: "cashflow",
  pnl: "income",
  pnl2y: "income",
  dep: "depreciation",
  depSmall: "depreciation",
  combined: ["balance", "cashflow", "analysis"],
  turnover: "analysis",
  share: "shares",
  financial: "financial_mgmt",
  general: ["balance", "cashflow", "income", "shares", "analysis"],
};

/**
 * @param {string|string[]} topic
 * @param {() => number} rng
 * @param {number} [n]
 * @returns {TheoryCand[]}
 */
export function sampleTheory(topic, rng, n = 8) {
  const keys = Array.isArray(topic) ? topic : TOPIC_ALIASES[topic] || topic;
  const list = Array.isArray(keys) ? keys : [keys];
  /** @type {TheoryCand[]} */
  let pool = [];
  for (const k of list) {
    const items = THEORY_BY_TOPIC[k];
    if (items) pool = pool.concat(items);
  }
  if (!pool.length) pool = Object.values(THEORY_BY_TOPIC).flat();
  // shuffle copy
  const arr = pool.map((x) => ({ ...x }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

export function topicsForSubsection(sub) {
  switch (sub) {
    case "6.1":
      return ["balance"];
    case "6.2":
      return ["cashflow", "income", "depreciation"];
    case "6.3":
      return ["balance", "income", "cashflow"];
    case "6.4":
      return ["financial_mgmt", "depreciation", "balance"];
    case "6.5":
      return ["analysis", "shares"];
    default:
      return ["general"];
  }
}
