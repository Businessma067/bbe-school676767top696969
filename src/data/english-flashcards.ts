type FlashcardSection = {
  id: string;
  title: string;
  cards: { term: string; explanation: string }[];
};

/**
 * BBE-style English vocabulary drawn from business / work news register
 * (BBC Worklife, CNN Business, The Guardian Business, Business Insider, The Conversation).
 */

type Vocab = {
  word: string;
  definition: string;
  synonyms: string;
  antonyms: string;
};

const VOCAB: Vocab[] = [
  {
    word: "resilient",
    definition:
      "Able to recover quickly from shocks or setbacks — used of people, firms, supply chains, or markets.",
    synonyms: "robust, adaptable, durable",
    antonyms: "fragile, brittle, vulnerable",
  },
  {
    word: "downturn",
    definition: "A decline in economic or business activity; a period when growth slows or reverses.",
    synonyms: "slump, decline, slowdown",
    antonyms: "boom, upswing, recovery",
  },
  {
    word: "headwind",
    definition:
      "A force that makes progress harder (e.g. higher rates, weak demand). Opposite of a tailwind.",
    synonyms: "obstacle, drag, setback",
    antonyms: "tailwind, boost, catalyst",
  },
  {
    word: "tailwind",
    definition: "A favourable condition that helps growth or performance (e.g. falling costs, strong demand).",
    synonyms: "boost, impetus, catalyst",
    antonyms: "headwind, drag, hindrance",
  },
  {
    word: "volatile",
    definition: "Liable to change rapidly and unpredictably — often said of prices, markets, or moods.",
    synonyms: "unstable, erratic, turbulent",
    antonyms: "stable, steady, calm",
  },
  {
    word: "liquidity",
    definition:
      "How easily an asset can be turned into cash without a big price cut; also a firm’s ability to meet short-term bills.",
    synonyms: "cash availability, solvency (short-term), convertibility",
    antonyms: "illiquidity, cash shortage, freeze",
  },
  {
    word: "leverage",
    definition:
      "As a noun: debt used to amplify returns. As a verb: to use something to maximum advantage.",
    synonyms: "gearing, borrowing; exploit, harness",
    antonyms: "deleveraging; underuse, squander",
  },
  {
    word: "stakeholder",
    definition:
      "Anyone with an interest in an organisation’s outcomes — employees, customers, investors, communities, regulators.",
    synonyms: "interested party, constituent",
    antonyms: "bystander, outsider (no stake)",
  },
  {
    word: "disrupt",
    definition: "To overturn an established market or way of working, often with new technology or models.",
    synonyms: "upend, transform, unsettle",
    antonyms: "preserve, entrench, stabilise",
  },
  {
    word: "agile",
    definition: "Able to move or adapt quickly; in business, responsive teams and flexible processes.",
    synonyms: "nimble, flexible, responsive",
    antonyms: "rigid, cumbersome, sluggish",
  },
  {
    word: "bottleneck",
    definition: "A point of congestion that slows a whole process — in production, logistics, or hiring.",
    synonyms: "chokepoint, constraint, blockage",
    antonyms: "open capacity, free flow, surplus capacity",
  },
  {
    word: "backlog",
    definition: "A build-up of unfinished work or unfilled orders waiting to be processed.",
    synonyms: "queue, arrears, pile-up",
    antonyms: "clearance, catch-up, empty pipeline",
  },
  {
    word: "incentive",
    definition: "Something that motivates a person or firm to act in a certain way (bonus, tax break, subsidy).",
    synonyms: "inducement, spur, motive",
    antonyms: "deterrent, disincentive, penalty",
  },
  {
    word: "subsidy",
    definition: "Government money or support that lowers costs for producers or consumers.",
    synonyms: "grant, support, subvention",
    antonyms: "tax, levy, surcharge",
  },
  {
    word: "tariff",
    definition: "A tax on imports (or sometimes exports), often used in trade policy.",
    synonyms: "duty, import tax, levy",
    antonyms: "duty-free access, trade liberalisation",
  },
  {
    word: "inflationary",
    definition: "Tending to raise the general price level; related to inflation.",
    synonyms: "price-rising, reflationary (context-dependent)",
    antonyms: "deflationary, disinflationary",
  },
  {
    word: "recession",
    definition: "A sustained period of falling economic output and usually rising unemployment.",
    synonyms: "contraction, slump, downturn",
    antonyms: "expansion, boom, recovery",
  },
  {
    word: "fiscal",
    definition: "Relating to government taxing and spending (as opposed to monetary policy).",
    synonyms: "budgetary, public-finance",
    antonyms: "monetary (policy contrast), private",
  },
  {
    word: "monetary",
    definition: "Relating to money supply, interest rates, and central-bank policy.",
    synonyms: "money-related, central-bank",
    antonyms: "fiscal (policy contrast), non-financial",
  },
  {
    word: "forecast",
    definition: "A prediction of future values — sales, growth, inflation — based on data and models.",
    synonyms: "projection, outlook, estimate",
    antonyms: "hindsight, actual outcome, revision (after the fact)",
  },
  {
    word: "outlook",
    definition: "The expected future path of an economy, industry, or company.",
    synonyms: "prospects, forecast, trajectory",
    antonyms: "history, track record (past-facing)",
  },
  {
    word: "margin",
    definition:
      "Profit as a share of sales (e.g. gross or operating margin); also a buffer or difference between two values.",
    synonyms: "profitability ratio, spread, cushion",
    antonyms: "loss rate, squeeze (when margins fall)",
  },
  {
    word: "revenue",
    definition: "Income from selling goods or services before costs are subtracted.",
    synonyms: "turnover (UK), sales, top line",
    antonyms: "cost, expense, outgoings",
  },
  {
    word: "turnover",
    definition:
      "In UK business English: total sales revenue. Also: how quickly inventory or staff is replaced.",
    synonyms: "revenue, sales; replacement rate",
    antonyms: "stagnation; retention (for staff)",
  },
  {
    word: "equity",
    definition:
      "Ownership value in a firm (assets minus liabilities); also fairness. In markets: shares / stock.",
    synonyms: "ownership stake, shareholders’ funds; fairness",
    antonyms: "debt, liability; inequity",
  },
  {
    word: "merger",
    definition: "The combining of two companies into one.",
    synonyms: "amalgamation, consolidation, combination",
    antonyms: "demerger, spin-off, breakup",
  },
  {
    word: "acquisition",
    definition: "One company buying another (or a controlling stake).",
    synonyms: "takeover, buyout, purchase",
    antonyms: "divestiture, disposal, sell-off",
  },
  {
    word: "compliance",
    definition: "Following laws, regulations, and internal rules.",
    synonyms: "adherence, conformity, observance",
    antonyms: "breach, non-compliance, violation",
  },
  {
    word: "regulation",
    definition: "Official rules that constrain or guide business behaviour.",
    synonyms: "rules, oversight framework, legislation",
    antonyms: "deregulation, laissez-faire",
  },
  {
    word: "oversight",
    definition: "Supervision and monitoring to ensure standards and rules are met.",
    synonyms: "supervision, scrutiny, governance",
    antonyms: "neglect, laissez-faire, inattention",
  },
  {
    word: "transparency",
    definition: "Openness of information so outsiders can see how decisions and money flow.",
    synonyms: "openness, disclosure, clarity",
    antonyms: "opacity, secrecy, concealment",
  },
  {
    word: "accountability",
    definition: "Being answerable for decisions and results.",
    synonyms: "responsibility, answerability, liability (moral/organisational)",
    antonyms: "unaccountability, impunity",
  },
  {
    word: "productivity",
    definition: "Output per unit of input (often per worker or per hour).",
    synonyms: "efficiency, output rate, yield",
    antonyms: "inefficiency, waste, idle capacity",
  },
  {
    word: "scarcity",
    definition: "Limited availability of a resource relative to demand.",
    synonyms: "shortage, paucity, dearth",
    antonyms: "abundance, surplus, glut",
  },
  {
    word: "shortage",
    definition: "A situation where demand exceeds available supply.",
    synonyms: "shortfall, deficit, scarcity",
    antonyms: "surplus, glut, oversupply",
  },
  {
    word: "surplus",
    definition: "An excess of supply over demand, or of income over spending.",
    synonyms: "excess, glut, leftover",
    antonyms: "deficit, shortage, shortfall",
  },
  {
    word: "deficit",
    definition: "A shortfall — spending above income, or imports above exports.",
    synonyms: "shortfall, gap, red ink",
    antonyms: "surplus, surplus balance, black ink",
  },
  {
    word: "outsourcing",
    definition: "Paying an outside firm to do work previously done in-house.",
    synonyms: "contracting out, externalising",
    antonyms: "insourcing, in-house production",
  },
  {
    word: "offshore",
    definition:
      "To move operations or jobs to another country (often for lower cost); also: located abroad.",
    synonyms: "relocate abroad, outsource overseas",
    antonyms: "onshore, reshore, localise",
  },
  {
    word: "layoff",
    definition: "Dismissal of employees, usually for business reasons rather than misconduct.",
    synonyms: "redundancy (UK), downsizing, job cut",
    antonyms: "hiring, recruitment, headcount growth",
  },
  {
    word: "redundancy",
    definition: "UK term for job loss because the role is no longer needed.",
    synonyms: "layoff, dismissal for business reasons",
    antonyms: "recruitment, job creation",
  },
  {
    word: "workforce",
    definition: "The people employed by a firm or available in an economy.",
    synonyms: "staff, labour force, employees",
    antonyms: "management only (narrow); unemployment pool (contrast)",
  },
  {
    word: "freelance",
    definition: "Working independently for clients rather than as a permanent employee.",
    synonyms: "self-employed, contract, gig",
    antonyms: "salaried, permanent, staff",
  },
  {
    word: "hybrid",
    definition: "Combining two modes — e.g. office and remote work; or two technologies/models.",
    synonyms: "mixed, blended, combined",
    antonyms: "fully remote; fully on-site; single-mode",
  },
  {
    word: "remote",
    definition: "Working from outside a central office, usually from home.",
    synonyms: "distributed, work-from-home, virtual",
    antonyms: "on-site, in-office, office-based",
  },
  {
    word: "pivot",
    definition: "A deliberate change of strategy or business model when the old one is not working.",
    synonyms: "shift, reorientation, turnaround move",
    antonyms: "stay the course, persistence (unchanged strategy)",
  },
  {
    word: "mitigation",
    definition: "Action that reduces the severity of a risk or harm.",
    synonyms: "alleviation, reduction, cushioning",
    antonyms: "aggravation, exacerbation",
  },
  {
    word: "contingency",
    definition: "A backup plan for if something goes wrong; also an unexpected event.",
    synonyms: "backup, fallback, Plan B",
    antonyms: "certainty; no fallback",
  },
  {
    word: "sustainability",
    definition:
      "Meeting present needs without undermining future ones — environmental, social, and economic.",
    synonyms: "long-term viability, stewardship, ESG focus (broad)",
    antonyms: "short-termism, depletion, unsustainability",
  },
  {
    word: "consumer sentiment",
    definition: "How optimistic or pessimistic households feel about the economy and their finances.",
    synonyms: "consumer confidence, mood, outlook",
    antonyms: "business confidence (different group); hard data (contrast)",
  },
  {
    word: "sector",
    definition: "A slice of the economy or market (e.g. tech sector, energy sector).",
    synonyms: "industry segment, branch, vertical",
    antonyms: "whole economy, aggregate market",
  },
  {
    word: "monopoly",
    definition: "A market with a single dominant seller that can influence price.",
    synonyms: "sole supplier, market dominance",
    antonyms: "competition, competitive market, oligopoly (few sellers)",
  },
  {
    word: "negotiate",
    definition: "To discuss terms in order to reach an agreement.",
    synonyms: "bargain, haggle, broker",
    antonyms: "impose, dictate, accept unilaterally",
  },
  {
    word: "breakthrough",
    definition: "A sudden important advance in knowledge, technology, or talks.",
    synonyms: "advance, leap, discovery",
    antonyms: "setback, stalemate, deadlock",
  },
  {
    word: "bureaucracy",
    definition: "Complex official rules and hierarchies that can slow decisions.",
    synonyms: "red tape, officialdom, administration",
    antonyms: "streamlining, agility, deregulation (context)",
  },
  {
    word: "congestion",
    definition: "Overcrowding that slows movement — traffic, ports, networks, or systems.",
    synonyms: "gridlock, clogging, overload",
    antonyms: "free flow, clear capacity",
  },
  {
    word: "consolidation",
    definition: "Combining units into a stronger whole; also a pause after a rise in markets.",
    synonyms: "merger wave, amalgamation; stabilisation",
    antonyms: "fragmentation, breakup; sharp breakout (markets)",
  },
  {
    word: "fragile",
    definition: "Easily damaged or destabilised — economies, ceasefires, supply chains.",
    synonyms: "delicate, precarious, weak",
    antonyms: "resilient, robust, sturdy",
  },
  {
    word: "surge",
    definition: "A sudden strong increase (in demand, prices, infections, traffic).",
    synonyms: "spike, jump, upswing",
    antonyms: "plunge, drop, collapse",
  },
  {
    word: "yield",
    definition:
      "Return on an investment (e.g. bond yield); also output produced. As a verb: to produce or to give way.",
    synonyms: "return, payout; output",
    antonyms: "loss; input cost (contrast)",
  },
  {
    word: "inventory",
    definition: "Goods held in stock ready for sale or use in production.",
    synonyms: "stock, supplies, holdings",
    antonyms: "stockout, empty shelves",
  },
  {
    word: "logistics",
    definition: "The organisation of moving and storing goods efficiently.",
    synonyms: "supply-chain operations, distribution, fulfilment",
    antonyms: "disorganisation, supply breakdown",
  },
  {
    word: "capital",
    definition:
      "Money or assets invested in production; also financial resources of a firm or investor.",
    synonyms: "funds, investment, financing",
    antonyms: "debt-only funding (narrow contrast); consumption (econ contrast)",
  },
  {
    word: "cash flow",
    definition: "Money moving in and out of a business over a period.",
    synonyms: "liquidity stream, net cash movement",
    antonyms: "cash crunch, cash drain",
  },
  {
    word: "profitability",
    definition: "The ability to generate profit relative to sales, assets, or equity.",
    synonyms: "earnings power, returns, margins",
    antonyms: "loss-making, unprofitability",
  },
  {
    word: "negotiate a deal",
    definition: "Phrase: to work out and agree commercial terms between parties.",
    synonyms: "strike a bargain, clinch an agreement",
    antonyms: "walk away, deadlock, impose terms",
  },
];

function section(
  id: string,
  title: string,
  map: (v: Vocab) => { term: string; explanation: string },
): FlashcardSection {
  return {
    id,
    title,
    cards: VOCAB.map(map),
  };
}

export const ENGLISH_FLASHCARD_SECTIONS: FlashcardSection[] = [
  section("eng-synonyms", "Synonyms", (v) => ({
    term: v.word,
    explanation: `Synonyms: ${v.synonyms}.`,
  })),
  section("eng-antonyms", "Antonyms", (v) => ({
    term: v.word,
    explanation: `Antonyms: ${v.antonyms}.`,
  })),
  section("eng-definitions", "Definitions", (v) => ({
    term: v.word,
    explanation: v.definition,
  })),
];
