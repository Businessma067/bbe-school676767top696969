/**
 * Real practice tasks (verbatim from the live banks) powering the homepage
 * "How it works" animation. Regenerated from src/data/* banks — the richest
 * tactical explanations available, so the animation shows real full solutions.
 */
export type SimTask = {
  caseId: string;
  chapter: string;
  title: string;
  context: string;
  statements: string[];
  answerKey: boolean[];
  explanations: string[];
};

export const SIM_TASKS: Record<"economics" | "math" | "english", SimTask[]> =
{
  "economics": [
    {
      "caseId": "CASE 5.4.45",
      "chapter": "Chapter 5.4",
      "title": "Marketing Cycles and Early Replacement",
      "context": "Review why both supply-side marketing conduct and demand-side purchasing choices matter for sustainable consumption. Evaluate the following economic assertions:",
      "statements": [
        "For footwear brands among households tracking monthly budgets, firms never shape demand and solely follow needs that customers already expressed without any promotional influence.",
        "For eyewear retailers in consumer electronics markets, advertising and new launches leave customer wishes unchanged and add no stimulated wants.",
        "For music-instrument dealers in apparel retailing, demand is treated as fixed: sellers neither create wishes nor alter needs through marketing.",
        "For camping-gear suppliers in household durable-goods sectors, firms never shape demand and solely follow needs that customers already expressed without any promotional influence.",
        "For kitchen-equipment firms when seasonal campaigns intensify, some promotional practices are judged unethical when they manipulate buyers instead of informing them fairly."
      ],
      "answerKey": [
        false,
        false,
        false,
        false,
        true
      ],
      "explanations": [
        "FALSE — Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.\n\nThe overview states that businesses also create wishes and needs through development and advertising, not merely respond to existing demand this holds for footwear brands among households tracking monthly budgets.\n\nThe statement is false. A student who overlooked the word \"never\" in \"For footwear brands among households tracking monthly budgets, firms never shape demand and solely…\" would treat the restriction as absent and mark the statement true.",
        "FALSE — Check the sentence against the core concept named in the stem, including every scope word.\n\nThe overview states that businesses also create wishes and needs through development and advertising, not merely respond to existing demand this holds for eyewear retailers in consumer electronics markets.\n\nThe statement is false. A student who matched the topic to \"For eyewear retailers in consumer electronics markets, advertising and new launches leave customer wishes…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Check the sentence against the core concept named in the stem, including every scope word.\n\nThe overview states that businesses also create wishes and needs through development and advertising, not merely respond to existing demand this holds for music-instrument dealers in apparel retailing.\n\nThe statement is false. A student who matched the topic to \"For music-instrument dealers in apparel retailing, demand is treated as fixed: sellers neither create…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.\n\nThe overview states that businesses also create wishes and needs through development and advertising, not merely respond to existing demand this holds for camping-gear suppliers in household durable-goods sectors.\n\nThe statement is false. A student who overlooked the word \"never\" in \"For camping-gear suppliers in household durable-goods sectors, firms never shape demand and solely follow…\" would treat the restriction as absent and mark the statement true.",
        "TRUE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nThe responsibility overview acknowledges that promotional activity can cross into unethical practice, not merely factual product description this holds for kitchen-equipment firms when seasonal campaigns intensify.\n\nThe statement is true."
      ]
    },
    {
      "caseId": "CASE 6.3.099",
      "chapter": "Chapter 6.3",
      "title": "Calculating Gross Profit in Context",
      "context": "Assess how the balance between current and non-current assets signals how capital-intensive a business is. Evaluate the following economic assertions:",
      "statements": [
        "A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly only when they are covered mainly by short-term credit from timber suppliers.",
        "The direct cost of goods acquired for resale are included within cost of sales because they are incurred directly in producing the goods that a dairy cooperative has sold.",
        "The balance between joinery workshop machinery and unsold furniture stock on a joinery and furniture workshop's statements has no bearing on whether the business is becoming more or less capital-intensive.",
        "A plastics moulding company is regarded as financing its injection-moulding machinery soundly only when they are covered mainly by short-term credit from resin suppliers.",
        "The balance between injection-moulding machinery and moulded component stock on a plastics moulding company's statements has no bearing on whether the business is becoming more or less capital-intensive."
      ],
      "answerKey": [
        false,
        true,
        false,
        false,
        false
      ],
      "explanations": [
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nCovering long-term assets mainly with current liabilities is considered risky, not sound financing.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"A joinery and furniture workshop is regarded as financing its joinery workshop machinery soundly…\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Classify the item on the correct statement (balance sheet versus income/cash flow) and check the direction of the change.\n\nDirect production or acquisition costs are exactly what cost of sales is meant to capture.\n\nThe statement is true.",
        "FALSE — Classify the item on the correct statement (balance sheet versus income/cash flow) and check the direction of the change.\n\nThe asset mix directly reflects capital intensity; the balance is not irrelevant.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"The balance between joinery workshop machinery and unsold furniture stock on a joinery and…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nCovering long-term assets mainly with current liabilities is considered risky, not sound financing.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"A plastics moulding company is regarded as financing its injection-moulding machinery soundly only when…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Classify the item on the correct statement (balance sheet versus income/cash flow) and check the direction of the change.\n\nThe asset mix directly reflects capital intensity; the balance is not irrelevant.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"The balance between injection-moulding machinery and moulded component stock on a plastics moulding company's…\" without checking the rest of the sentence would mark the statement true."
      ]
    },
    {
      "caseId": "CASE 6.1.057",
      "chapter": "Chapter 6.1",
      "title": "Liquidity From the Balance Sheet 57",
      "context": "Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n[[CHART type=\"bar\" title=\"Current assets and current liabilities\"]]\nCurrent assets=454\nCurrent liabilities=277\n[[/CHART]]\n\n| € in thousands | Amount |\n| --- | ---: |\n| **ASSETS** | |\n| Buildings | 433 |\n| Machinery | 172 |\n| Office equipment | 77 |\n| Patents, trademarks and licences | 47 |\n| Inventory | 222 |\n| Trade receivables | 143 |\n| Cash and cash equivalents | 89 |\n| Total assets | **1183** |\n| **EQUITY** | |\n| Share capital | 195 |\n| Retained earnings | 473 |\n| Total equity | **668** |\n| **LIABILITIES** | |\n| Long-term bank loan | 187 |\n| Bonds payable | 51 |\n| Trade payables | 205 |\n| Bank overdraft | 72 |\n| Total liabilities | **515** |\n| Total equity and liabilities | **1183** |\n\nEvaluate the following economic assertions:",
      "statements": [
        "Owner's equity is the portion of assets financed by bank loans and trade creditors.",
        "The current ratio exceeds 1.74.",
        "The current ratio is below 1.03.",
        "After excluding inventory, the remaining current assets still cover current liabilities more than 0.78 times over.",
        "The equity ratio is below 40.1%."
      ],
      "answerKey": [
        false,
        false,
        false,
        true,
        false
      ],
      "explanations": [
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nThat portion is liabilities; equity is the residual not financed by debt.\n\nThe statement is false. A student who matched the topic to \"Owner's equity is the portion of assets financed by bank loans and trade creditors\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nApply the case evidence: Current ratio ≈ 1.64. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"The current ratio exceeds 1.74\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nApply the case evidence: Current ratio ≈ 1.64. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.\n\nThe statement is false. A student who recognised the topic word and stopped reading would miss the qualifier that breaks the claim.\n\nThe statement is false. A student who matched the topic to \"The current ratio is below 1.03\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nAcid-test ratio ≈ 0.84.\n\nThe statement is true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nFrom the figures or classification rule involved, equity ratio ≈ 56.5%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.\n\nThe statement is false. A student who matched the topic to \"The equity ratio is below 40.1%\" without checking the rest of the sentence would mark the statement true."
      ]
    },
    {
      "caseId": "CASE 5.3.95",
      "chapter": "Chapter 5.3",
      "title": "Personal Data Indispensable Sensitivity",
      "context": "Analyze why suitability of product versus market orientation depends on the product itself and the number of competitors. Evaluate the following economic assertions:",
      "statements": [
        "A common misconception at consumer electronics retailers is that firms mislabels market orientation as specification-first when balancing product focus with customer data use.",
        "A product-oriented team may refine the product design conceived internally extensively before surveying whether buyers value those priorities.",
        "Managers at consumer electronics retailers may denies sensitive data importance if orientation and CRM principles are misunderstood.",
        "Managers at consumer electronics retailers may claims tailoring without behavioural data if orientation and CRM principles are misunderstood.",
        "A common misconception at consumer electronics retailers is that firms claims tailoring without behavioural data when balancing product focus with customer data use."
      ],
      "answerKey": [
        false,
        true,
        false,
        false,
        false
      ],
      "explanations": [
        "FALSE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nMarket orientation analyses needs before tailoring products. this misconception misstates orientation or crm practice at consumer electronics retailers.\n\nThe statement is false. A student who matched the topic to \"A common misconception at consumer electronics retailers is that firms mislabels market orientation as…\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Check the sentence against the core concept named in the stem, including every scope word.\n\nSpecification-led work on product design conceived internally precedes market validation in product orientation.\n\nThe statement is true.",
        "FALSE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nSensitive use of personal data is indispensable. the error would misapply orientation or crm concepts at consumer electronics retailers.\n\nThe statement is false. A student who matched the topic to \"Managers at consumer electronics retailers may denies sensitive data importance if orientation and CRM…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nBusinesses collect buying-behaviour data to tailor offers. the error would misapply orientation or crm concepts at consumer electronics retailers.\n\nThe statement is false. A student who matched the topic to \"Managers at consumer electronics retailers may claims tailoring without behavioural data if orientation and…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nBusinesses collect buying-behaviour data to tailor offers. this misconception misstates orientation or crm practice at consumer electronics retailers.\n\nThe statement is false. A student who matched the topic to \"A common misconception at consumer electronics retailers is that firms claims tailoring without behavioural…\" without checking the rest of the sentence would mark the statement true."
      ]
    },
    {
      "caseId": "CASE 6.5.041",
      "chapter": "Chapter 6.5",
      "title": "Balance Sheet Structure Review 41",
      "context": "Consider the following balance sheet (in € thousands) for a business whose identity is not disclosed.\n\n[[CHART type=\"pie\" title=\"Asset composition\"]]\nBuildings=493\nMachinery=254\nPatents, trademarks and licences=36\nInventory=113\nTrade receivables=64\nCash and cash equivalents=91\n[[/CHART]]\n\n| € in thousands | Amount |\n| --- | ---: |\n| **ASSETS** | |\n| Buildings | 493 |\n| Machinery | 254 |\n| Office equipment | 43 |\n| Patents, trademarks and licences | 36 |\n| Inventory | 113 |\n| Trade receivables | 64 |\n| Cash and cash equivalents | 91 |\n| Total assets | **1094** |\n| **EQUITY** | |\n| Share capital | 221 |\n| Retained earnings | 299 |\n| Total equity | **520** |\n| **LIABILITIES** | |\n| Long-term bank loan | 388 |\n| Bonds payable | 40 |\n| Trade payables | 96 |\n| Bank overdraft | 50 |\n| Total liabilities | **574** |\n| Total equity and liabilities | **1094** |\n\nEvaluate the following economic assertions:",
      "statements": [
        "The current ratio is below 0.87.",
        "The equity ratio is below 36.9%.",
        "The debt ratio exceeds 54.2%.",
        "The current ratio exceeds 1.68.",
        "Buildings make up more than 55.6% of total assets."
      ],
      "answerKey": [
        false,
        false,
        false,
        true,
        false
      ],
      "explanations": [
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nFrom the figures or classification rule involved, current ratio ≈ 1.84. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.\n\nThe statement is false. A student who matched the topic to \"The current ratio is below 0.87\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nFrom the figures or classification rule involved, equity ratio ≈ 47.5%. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.\n\nThe statement is false. A student who matched the topic to \"The equity ratio is below 36.9%\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nApply the case evidence: Debt ratio ≈ 52.5%. Check whether the direction of change (higher/lower, above/below the threshold) matches what the statement asserts.\n\nThe statement is false. A student who matched the topic to \"The debt ratio exceeds 54.2%\" without checking the rest of the sentence would mark the statement true.",
        "TRUE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nFrom the figures or classification rule involved, current ratio ≈ 1.84. Accounting statements fail when a loss is treated as increasing equity, when a flow is placed on the balance sheet, or when a ratio inequality is reversed.\n\nThe statement is true.",
        "FALSE — Apply the statement's figure to the named accounting identity or ratio, using the case numbers rather than a memorised benchmark.\n\nBuildings are about 45.1% of total assets.\n\nThe statement is false. A student who matched the topic to \"Buildings make up more than 55.6% of total assets\" without checking the rest of the sentence would mark the statement true."
      ]
    },
    {
      "caseId": "CASE 5.6.46",
      "chapter": "Chapter 5.6",
      "title": "Niche Leaders Despite Small Size",
      "context": "Analyze niche specialists potentially becoming market leaders despite small firm size. Evaluate the following economic assertions:",
      "statements": [
        "Positioning toward trial buyers before occasional repeat purchase is unnecessary if the firm already completed geographic segmentation.",
        "Targeting trial buyers before occasional repeat purchase means listing every possible subgroup without evaluating attractiveness.",
        "A segment of contract renewers rather than first-time adopters is durable when usage patterns remain stable enough to justify product and promotion planning.",
        "Economies of scale for a niche offer to clients seeking personalised service rather than self-service are identical to those for undifferentiated mass production.",
        "A firm serving buyers classified by completed education level with strategic fit should spread resources evenly across every segment in the economy."
      ],
      "answerKey": [
        false,
        false,
        true,
        false,
        false
      ],
      "explanations": [
        "FALSE — Map the scenario onto the textbook category first, then test whether the sentence describes that category accurately.\n\nPositioning still creates identity for the chosen subgroup after segmentation and targeting.\n\nThe statement is false. A student who matched the topic to \"Positioning toward trial buyers before occasional repeat purchase is unnecessary if the firm already…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.\n\nTargeting evaluates attractiveness before selecting trial buyers before occasional repeat purchase or any subgroup.\n\nThe statement is false. A student who overlooked the word \"every\" in \"Targeting trial buyers before occasional repeat purchase means listing every possible subgroup without evaluating…\" would treat the restriction as absent and mark the statement true.",
        "TRUE — Check that the comparison runs in the stated direction and attaches the feature to the correct member of the pair.\n\nDurability for contract renewers rather than first-time adopters means the behavioural pattern persists long enough for planning.\n\nThe statement is true.",
        "FALSE — Check that the comparison runs in the stated direction and attaches the feature to the correct member of the pair.\n\nNiche focus on clients seeking personalised service rather than self-service typically lacks the very large identical output that drives scale economies.\n\nThe statement is false. A student who matched the topic to \"Economies of scale for a niche offer to clients seeking personalised service rather than…\" without checking the rest of the sentence would mark the statement true.",
        "FALSE — Read the quantifier. Words such as never, always, only, or all turn a generally valid idea into a claim that one counterexample rejects.\n\nStrategic fit implies focus on chosen segments such as buyers classified by completed education level, not equal coverage of all segments.\n\nThe statement is false. A student who overlooked the word \"every\" in \"A firm serving buyers classified by completed education level with strategic fit should spread…\" would treat the restriction as absent and mark the statement true."
      ]
    }
  ],
  "math": [
    {
      "caseId": "MATH 12.25",
      "chapter": "Chapter 12.1",
      "title": "Poker Night",
      "context": "At a friend's poker night, the host shuffles a standard, well-mixed 52-card deck and deals a 5-card hand to the first player, Amanda. No cards are shown or removed beforehand - Amanda's hand is a uniformly random 5-card subset of the deck.",
      "statements": [
        "The total number of distinct 5-card hands that could be dealt is greater than 2.5 million.",
        "The probability of being dealt a full house is more than 10 times the probability of being dealt four of a kind.",
        "The probability of being dealt a flush (5 cards of one suit, excluding straight flushes) is less than 1 in 500.",
        "The probability that Amanda's hand contains at least one pair (i.e., is not a 'nothing' / high-card hand) is greater than 50%.",
        "The probability of being dealt a straight (excluding straight flushes) is greater than the probability of being dealt three of a kind."
      ],
      "answerKey": [
        true,
        false,
        true,
        false,
        false
      ],
      "explanations": [
        "**A.** → True\n\nThis statement asks for the total number of distinct 5-card hands that can be dealt. This is the size of the sample space and is calculated by finding the number of combinations of 5 cards chosen from 52, since the order of the cards in a hand does not matter. The general formula for combinations is $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$.\n\nApplying this formula to select 5 cards from 52:\n$$N_{\\text{total}} = \\binom{52}{5}$$\n$$N_{\\text{total}} = \\frac{52 \\times 51 \\times 50 \\times 49 \\times 48}{5 \\times 4 \\times 3 \\times 2 \\times 1}$$\n$$N_{\\text{total}} = 2,598,960$$\n\nThis calculation shows there are $2,598,960$ distinct 5-card hands possible. The claim states that this number is greater than $2.5$ million, which is $2,500,000$. Since $2,598,960 > 2,500,000$, the statement is True.",
        "**B.** → False\n\nThis statement compares the probability of being dealt a full house to the probability of being dealt four of a kind. To do this, we count the number of hands for each type. The probability of each hand type is its count divided by the total number of hands, $N_{\\text{total}}$, so comparing the counts is sufficient.\n\nFirst, we calculate the number of ways to be dealt a full house. A full house consists of three cards of one rank and two cards of another rank. We choose 1 rank for the three cards (out of 13), then 3 suits for these 3 cards (out of 4). We then choose 1 different rank for the two cards (out of the remaining 12 ranks), and 2 suits for these 2 cards (out of 4):\n$$N_{\\text{full house}} = \\binom{13}{1} \\binom{4}{3} \\times \\binom{12}{1} \\binom{4}{2}$$\n$$N_{\\text{full house}} = 13 \\times 4 \\times 12 \\times 6$$\n$$N_{\\text{full house}} = 3,744$$\n\nNext, we calculate the number of ways to be dealt four of a kind. Four of a kind consists of four cards of one rank and one card of any other rank. We choose 1 rank for the four cards (out of 13), then all 4 suits for these 4 cards (out of 4). We then choose 1 card from the remaining $52 - 4 = 48$ cards, ensuring it is not of the same rank as the four of a kind:\n$$N_{\\text{four of a kind}} = \\binom{13}{1} \\binom{4}{4} \\times \\binom{48}{1}$$\n$$N_{\\text{four of a kind}} = 13 \\times 1 \\times 48$$\n$$N_{\\text{four of a kind}} = 624$$\n\nTo compare the probabilities, we find the ratio of these counts:\n$$\\frac{P(\\text{full house})}{P(\\text{four of a kind})} = \\frac{N_{\\text{full house}}}{N_{\\text{four of a kind}} = \\frac{3,744}{624}}$$\n$$\\frac{P(\\text{full house})}{P(\\text{four of a kind})} = 6$$\n\nThis calculation shows that the probability of being dealt a full house is $6$ times the probability of being dealt four of a kind. The claim states that it is more than $10$ times this probability. Since $6 \\not> 10$, the statement is False.",
        "**C.** → True\n\nThis statement asks for the probability of being dealt a flush, excluding straight flushes, and compares it to $1$ in $500$. A flush consists of 5 cards of the same suit. To count these hands, we first count all hands with 5 cards of the same suit, then subtract the straight flushes.\n\nTo count hands with 5 cards of the same suit, we choose 1 suit out of 4, and then choose 5 cards from the 13 cards of that chosen suit:\n$$N_{\\text{5 cards of same suit}} = \\binom{4}{1} \\times \\binom{13}{5}$$\n$$N_{\\text{5 cards of same suit}} = 4 \\times 1,287$$\n$$N_{\\text{5 cards of same suit}} = 5,148$$\n\nFrom these hands, we must exclude straight flushes. A straight flush is 5 cards of the same suit in sequential rank (e.g., $A\\clubsuit, 2\\clubsuit, 3\\clubsuit, 4\\clubsuit, 5\\clubsuit$). There are 10 possible rank sequences for straights (A-5, 2-6, ..., 10-A). Since there are 4 suits, there are $10 \\times 4 = 40$ straight flushes.\n\nSo, the number of flushes (excluding straight flushes) is:\n$$N_{\\text{flush (excl. straight flushes)}} = N_{\\text{5 cards of same suit}} - N_{\\text{straight flushes}}$$\n$$N_{\\text{flush (excl. straight flushes)}} = 5,148 - 40$$\n$$N_{\\text{flush (excl. straight flushes)}} = 5,108$$\n\nThe probability of being dealt such a flush is this count divided by the total number of distinct hands, $N_{\\text{total}} = 2,598,960$, as calculated in the overview:\n$$P_{\\text{flush (excl. straight flushes)}} = \\frac{5,108}{2,598,960}$$\n$$P_{\\text{flush (excl. straight flushes)}} \\approx 0.0019653$$\n\nThe claim states this probability is less than $1$ in $500$. We convert $1/500$ to a decimal: $1/500 = 0.002$. Since $0.0019653 < 0.002$, the statement is True.",
        "**D.** → False\n\nThis statement asks about the probability that Amanda's hand contains at least one pair, meaning it is not a 'nothing' or high-card hand. This is the complement of having a high-card hand (which has no pair, no straight, and no flush). The probability of at least one pair is $1 - P(\\text{high-card hand})$.\n\nFirst, we count the number of hands with 5 distinct ranks, ignoring suits for a moment. We choose 5 ranks from 13 available ranks ($\\binom{13}{5}$). For each of these 5 chosen ranks, there are 4 possible suits, so $4^5$ suit combinations:\n$$N_{\\text{5 distinct ranks}} = \\binom{13}{5} \\times 4^5$$\n$$N_{\\text{5 distinct ranks}} = 1,287 \\times 1,024$$\n$$N_{\\text{5 distinct ranks}} = 1,317,888$$\n\nFrom these hands, we must subtract the hands that are straights or flushes, as these also consist of 5 distinct ranks but are not classified as 'high-card' hands. We already know the number of straight flushes is 40. From statement C, the number of non-straight flushes is 5,108. From statement E, the number of non-flush straights is 10,200.\n\nSo, the number of high-card hands is:\n$$N_{\\text{high-card}} = N_{\\text{5 distinct ranks}} - N_{\\text{non-flush straights}} - N_{\\text{non-straight flushes}} - N_{\\text{straight flushes}}$$\n$$N_{\\text{high-card}} = 1,317,888 - 10,200 - 5,108 - 40$$\n$$N_{\\text{high-card}} = 1,302,540$$\n\nThe probability of a high-card hand is this count divided by $N_{\\text{total}} = 2,598,960$:\n$$P_{\\text{high-card}} = \\frac{1,302,540}{2,598,960}$$\n$$P_{\\text{high-card}} \\approx 0.501169$$\n\nTherefore, the probability of at least one pair is:\n$$P_{\\text{at least one pair}} = 1 - P_{\\text{high-card}}$$\n$$P_{\\text{at least one pair}} = 1 - 0.501169$$\n$$P_{\\text{at least one pair}} \\approx 0.498831$$\n\nAs a percentage, this is approximately $49.88\\%$. The claim states this probability is greater than $50\\%$. Since $49.88\\% \\not> 50\\%$, the statement is False.",
        "**E.** → False\n\nThis statement compares the probability of being dealt a straight (excluding straight flushes) with the probability of being dealt three of a kind. We determine the number of ways to form each hand, and then compare these counts.\n\nFirst, we count the number of straights, excluding straight flushes. A straight consists of 5 cards of sequential rank. There are 10 possible sequential rank combinations (A2345 through 10JQKA). For each of these 10 sequences, there are $4^5$ ways to assign suits to the five cards. From these $4^5$ combinations, we must subtract the 4 combinations that form a straight flush (one for each suit).\n$$N_{\\text{straight (excl. straight flushes)}} = 10 \\times (4^5 - 4)$$\n$$N_{\\text{straight (excl. straight flushes)}} = 10 \\times (1,024 - 4)$$\n$$N_{\\text{straight (excl. straight flushes)}} = 10 \\times 1,020$$\n$$N_{\\text{straight (excl. straight flushes)}} = 10,200$$\n\nNext, we count the number of three of a kind hands. A three of a kind hand consists of three cards of one rank and two other cards of different ranks that do not form a pair or a full house. We choose 1 rank for the three cards (out of 13), then 3 suits for these 3 cards (out of 4). We then choose 2 ranks from the remaining 12 ranks for the other two cards (ensuring they are different from each other and the triplet's rank), and 1 suit for each of these two cards (out of 4):\n$$N_{\\text{three of a kind}} = \\binom{13}{1} \\binom{4}{3} \\times \\binom{12}{2} \\binom{4}{1} \\binom{4}{1}$$\n$$N_{\\text{three of a kind}} = 13 \\times 4 \\times 66 \\times 4 \\times 4$$\n$$N_{\\text{three of a kind}} = 54,912$$\n\nComparing the counts, $N_{\\text{straight (excl. straight flushes)}} = 10,200$ and $N_{\\text{three of a kind}} = 54,912$. Since $10,200 < 54,912$, the probability of being dealt a straight (excluding straight flushes) is less than the probability of being dealt three of a kind. The claim states that the probability of a straight is greater than that of three of a kind, so the statement is False."
      ]
    },
    {
      "caseId": "MATH 12.102",
      "chapter": "Chapter 12.3",
      "title": "Two fair six-sided dice are rolled once",
      "context": "Two fair six-sided dice are rolled once. Consider probabilities conditional on whether the sum of the two dice is even or odd.",
      "statements": [
        "The probability that the two dice show the same number given that the sum is even, equals 1/3.",
        "The probability that the sum is at least 8 given that the sum is even, equals 50%.",
        "The probability that at least one die shows a 6 given that the sum is even, is greater than 28%.",
        "The probability that the sum is even equals the probability that the sum is odd.",
        "The probability that the sum is at least 8 given that the sum is even, is greater than the probability that the sum is at least 8 given that the sum is odd."
      ],
      "answerKey": [
        true,
        true,
        false,
        true,
        true
      ],
      "explanations": [
        "**A.** → True\n\nThis statement asks for the probability that the two dice show the same number, given that their sum is even. Let $A$ be the event that the two dice show the same number, and $E$ be the event that the sum is even. We need to find $P(A \\mid E)$.\n\nThe rule for conditional probability in a sample space with equally likely outcomes is $P(A \\mid E) = \\frac{N(A \\cap E)}{N(E)}$.\n\nFirst, we identify the outcomes where the two dice show the same number:\n$$(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)$$\nThere are $N(A) = 6$ such outcomes.\n\nAll of these outcomes result in an even sum. For instance, $1+1=2$ (even), $2+2=4$ (even), etc. Therefore, the number of outcomes where the dice show the same number AND the sum is even is $N(A \\cap E) = 6$.\n\nFrom the overview, the total number of outcomes where the sum is even is $N(E) = 18$.\n\nNow, we substitute these values into the conditional probability formula:\n$$P(A \\mid E) = \\frac{N(A \\cap E)}{N(E)}$$\n$$P(A \\mid E) = \\frac{6}{18}$$\n$$P(A \\mid E) = \\frac{1}{3}$$\n\nThis probability is $\\frac{1}{3}$. The claim states that this probability equals $\\frac{1}{3}$, so the statement is True.",
        "**B.** → True\n\nThis statement asks for the probability that the sum of the two dice is at least $8$, given that the sum is even. Let $S_{\\ge 8}$ be the event that the sum is at least $8$, and $E$ be the event that the sum is even. We need to find $P(S_{\\ge 8} \\mid E)$.\n\nThe rule for conditional probability in a sample space with equally likely outcomes is $P(S_{\\ge 8} \\mid E) = \\frac{N(S_{\\ge 8} \\cap E)}{N(E)}$.\n\nFirst, we find the number of outcomes where the sum is at least $8$ AND the sum is even. These are the outcomes where the sum $S$ can be $8$, $10$, or $12$. From the overview, we have:\n$$N(S=8) = 5$$\n$$N(S=10) = 3$$\n$$N(S=12) = 1$$\nSo, the number of outcomes for $S_{\\ge 8} \\cap E$ is:\n$$N(S_{\\ge 8} \\cap E) = N(S=8) + N(S=10) + N(S=12)$$\n$$N(S_{\\ge 8} \\cap E) = 5 + 3 + 1 = 9$$\n\nFrom the overview, the total number of outcomes where the sum is even is $N(E) = 18$.\n\nNow, we substitute these values into the conditional probability formula:\n$$P(S_{\\ge 8} \\mid E) = \\frac{N(S_{\\ge 8} \\cap E)}{N(E)}$$\n$$P(S_{\\ge 8} \\mid E) = \\frac{9}{18}$$\n$$P(S_{\\ge 8} \\mid E) = \\frac{1}{2}$$\n\nAs a percentage, this is $50\\%$. The claim states that this probability equals $50\\%$, so the statement is True.",
        "**C.** → False\n\nThis statement asks for the probability that at least one die shows a $6$, given that the sum is even. Let $A_{\\text{six}}$ be the event that at least one die shows a $6$, and $E$ be the event that the sum is even. We need to find $P(A_{\\text{six}} \\mid E)$.\n\nThe rule for conditional probability in a sample space with equally likely outcomes is $P(A_{\\text{six}} \\mid E) = \\frac{N(A_{\\text{six}} \\cap E)}{N(E)}$.\n\nFirst, we list all outcomes where at least one die shows a $6$: \n$$(1,6), (2,6), (3,6), (4,6), (5,6), (6,6)$$\n$$(6,1), (6,2), (6,3), (6,4), (6,5)$$\nThere are $6 + 5 = 11$ such outcomes.\n\nNext, we identify which of these outcomes also result in an even sum. We examine each outcome and its sum:\n$$(1,6) \\to S=7 \\text{ (odd)}$$\n$$(2,6) \\to S=8 \\text{ (even)}$$\n$$(3,6) \\to S=9 \\text{ (odd)}$$\n$$(4,6) \\to S=10 \\text{ (even)}$$\n$$(5,6) \\to S=11 \\text{ (odd)}$$\n$$(6,6) \\to S=12 \\text{ (even)}$$\n$$(6,1) \\to S=7 \\text{ (odd)}$$\n$$(6,2) \\to S=8 \\text{ (even)}$$\n$$(6,3) \\to S=9 \\text{ (odd)}$$\n$$(6,4) \\to S=10 \\text{ (even)}$$\n$$(6,5) \\to S=11 \\text{ (odd)}$$\nThe outcomes where at least one die shows a $6$ AND the sum is even are:\n$$(2,6), (4,6), (6,6), (6,2), (6,4)$$\nThere are $N(A_{\\text{six}} \\cap E) = 5$ such outcomes.\n\nFrom the overview, the total number of outcomes where the sum is even is $N(E) = 18$.\n\nNow, we substitute these values into the conditional probability formula:\n$$P(A_{\\text{six}} \\mid E) = \\frac{N(A_{\\text{six}} \\cap E)}{N(E)}$$\n$$P(A_{\\text{six}} \\mid E) = \\frac{5}{18}$$\n$$P(A_{\\text{six}} \\mid E) \\approx 0.2777$$\n\nAs a percentage, this is approximately $27.77\\%$. The claim states that this probability is greater than $28\\%$. Since $27.77\\% \\not> 28\\%$, the statement is False.",
        "**D.** → True\n\nThis statement compares the probability that the sum is even with the probability that the sum is odd. Let $E$ be the event that the sum is even, and $O$ be the event that the sum is odd. We need to compare $P(E)$ and $P(O)$.\n\nThe probability of an event in a sample space with equally likely outcomes is given by the ratio of the number of outcomes favorable to the event to the total number of outcomes in the sample space, $N(\\Omega) = 36$.\n\nFrom the overview, the number of outcomes where the sum is even is $N(E) = 18$.\nThus, the probability of an even sum is:\n$$P(E) = \\frac{N(E)}{N(\\Omega)}$$\n$$P(E) = \\frac{18}{36}$$\n$$P(E) = \\frac{1}{2}$$\n\nAlso from the overview, the number of outcomes where the sum is odd is $N(O) = 18$.\nThus, the probability of an odd sum is:\n$$P(O) = \\frac{N(O)}{N(\\Omega)}$$\n$$P(O) = \\frac{18}{36}$$\n$$P(O) = \\frac{1}{2}$$\n\nComparing the two probabilities, $P(E) = \\frac{1}{2}$ and $P(O) = \\frac{1}{2}$. Since $P(E) = P(O)$, the statement is True.",
        "**E.** → True\n\nThis statement asks us to compare the probability that the sum is at least $8$ given that the sum is even, with the probability that the sum is at least $8$ given that the sum is odd. We need to compare $P(S_{\\ge 8} \\mid E)$ with $P(S_{\\ge 8} \\mid O)$.\n\nFrom the calculation in statement B, we found that the probability that the sum is at least $8$ given that the sum is even is:\n$$P(S_{\\ge 8} \\mid E) = \\frac{1}{2}$$\n\nNow, we need to calculate $P(S_{\\ge 8} \\mid O)$. Let $S_{\\ge 8}$ be the event that the sum is at least $8$, and $O$ be the event that the sum is odd. The rule for conditional probability is $P(S_{\\ge 8} \\mid O) = \\frac{N(S_{\\ge 8} \\cap O)}{N(O)}$.\n\nFirst, we find the number of outcomes where the sum is at least $8$ AND the sum is odd. These are the outcomes where the sum $S$ can be $9$ or $11$. From the overview, we have:\n$$N(S=9) = 4$$\n$$N(S=11) = 2$$\nSo, the number of outcomes for $S_{\\ge 8} \\cap O$ is:\n$$N(S_{\\ge 8} \\cap O) = N(S=9) + N(S=11)$$\n$$N(S_{\\ge 8} \\cap O) = 4 + 2 = 6$$\n\nFrom the overview, the total number of outcomes where the sum is odd is $N(O) = 18$.\n\nNow, we substitute these values into the conditional probability formula:\n$$P(S_{\\ge 8} \\mid O) = \\frac{N(S_{\\ge 8} \\cap O)}{N(O)}$$\n$$P(S_{\\ge 8} \\mid O) = \\frac{6}{18}$$\n$$P(S_{\\ge 8} \\mid O) = \\frac{1}{3}$$\n\nComparing the two probabilities: $P(S_{\\ge 8} \\mid E) = \\frac{1}{2}$ and $P(S_{\\ge 8} \\mid O) = \\frac{1}{3}$. Since $\\frac{1}{2} = 0.5$ and $\\frac{1}{3} \\approx 0.333$, it is clear that $\\frac{1}{2} > \\frac{1}{3}$. Therefore, the probability that the sum is at least $8$ given that the sum is even is greater than the probability that the sum is at least $8$ given that the sum is odd, so the statement is True."
      ]
    },
    {
      "caseId": "MATH 12.68",
      "chapter": "Chapter 12.2",
      "title": "Auto-save, dark mode, and cloud sync",
      "context": "An app studies which features its customers use: Auto-save (P), Dark mode (Q), and Cloud sync (R). The Venn diagram below shows the probability of a randomly selected customer falling into each region, including customers who use none of the three features.",
      "statements": [
        "The probability that the customer uses at least one of the three features is greater than 52%.",
        "The probability that the customer uses exactly two of the three features equals 15%.",
        "The probability that the customer uses Auto-save, given that they use Dark mode or Cloud sync, is greater than 37%.",
        "The probability that the customer uses exactly one of Auto-save and Dark mode is greater than 32%.",
        "The probability that the customer uses all three features is less than one-quarter of the probability that they use exactly two features."
      ],
      "answerKey": [
        false,
        true,
        false,
        true,
        true
      ],
      "explanations": [
        "**A.** → False\n\nThis statement asks for the probability that a customer uses at least one of the three features. This event is the complement of using none of the features. The probability of using none of the features is directly given by the region $P^c \\cap Q^c \\cap R^c$.\n\nThe probability of a customer using none of the features is:\n$$P(P^c \\cap Q^c \\cap R^c) = 0.49$$\n\nUsing the complement rule, the probability of using at least one feature is $1$ minus the probability of using none:\n$$P(\\text{at least one}) = 1 - P(P^c \\cap Q^c \\cap R^c)$$\n$$P(\\text{at least one}) = 1 - 0.49$$\n$$P(\\text{at least one}) = 0.51$$\n\nAs a percentage, this is $51\\%$. The claim states that this probability is greater than $52\\%$. Since $51\\% \\not> 52\\%$, the statement is False.",
        "**B.** → True\n\nThis statement requests the probability that a customer uses exactly two of the three features. This event corresponds to the union of three mutually exclusive regions in the Venn diagram: using Auto-save and Dark mode but not Cloud sync ($P \\cap Q \\cap R^c$), using Auto-save and Cloud sync but not Dark mode ($P \\cap Q^c \\cap R$), and using Dark mode and Cloud sync but not Auto-save ($P^c \\cap Q \\cap R$).\n\nThe probability for each of these regions is given:\n$$P(P \\cap Q \\cap R^c) = 0.06$$\n$$P(P \\cap Q^c \\cap R) = 0.04$$\n$$P(P^c \\cap Q \\cap R) = 0.05$$\n\nTo find the probability of using exactly two features, we sum the probabilities of these three regions:\n$$P(\\text{exactly two features}) = P(P \\cap Q \\cap R^c) + P(P \\cap Q^c \\cap R) + P(P^c \\cap Q \\cap R)$$\n$$P(\\text{exactly two features}) = 0.06 + 0.04 + 0.05$$\n$$P(\\text{exactly two features}) = 0.15$$\n\nAs a percentage, this is $15\\%$. The claim states that this probability equals $15\\%$. Since $0.15 = 15\\%$, the statement is True.",
        "**C.** → False\n\nThis statement asks for the conditional probability that a customer uses Auto-save, given that they use Dark mode or Cloud sync. This is written as $P(P \\mid Q \\cup R)$. The formula for conditional probability is $P(P \\mid Q \\cup R) = \\frac{P(P \\cap (Q \\cup R))}{P(Q \\cup R)}$.\n\nFirst, we calculate the probability of the conditioning event, $Q \\cup R$, which is the event that a customer uses Dark mode or Cloud sync (or both). This is the sum of probabilities of all regions where $Q$ or $R$ (or both) are present:\n$$P(Q \\cup R) = P(P^c \\cap Q \\cap R^c) + P(P^c \\cap Q^c \\cap R) + P(P \\cap Q \\cap R^c) + P(P \\cap Q^c \\cap R) + P(P^c \\cap Q \\cap R) + P(P \\cap Q \\cap R)$$\n$$P(Q \\cup R) = 0.10 + 0.08 + 0.06 + 0.04 + 0.05 + 0.03$$\n$$P(Q \\cup R) = 0.36$$\n\nNext, we calculate the probability of the intersection event, $P \\cap (Q \\cup R)$, which means the customer uses Auto-save AND either Dark mode or Cloud sync (or both). This includes the regions where $P$ is present along with $Q$ or $R$: $P \\cap Q \\cap R^c$, $P \\cap Q^c \\cap R$, and $P \\cap Q \\cap R$.\n$$P(P \\cap (Q \\cup R)) = P(P \\cap Q \\cap R^c) + P(P \\cap Q^c \\cap R) + P(P \\cap Q \\cap R)$$\n$$P(P \\cap (Q \\cup R)) = 0.06 + 0.04 + 0.03$$\n$$P(P \\cap (Q \\cup R)) = 0.13$$\n\nNow we can compute the conditional probability:\n$$P(P \\mid Q \\cup R) = \\frac{P(P \\cap (Q \\cup R))}{P(Q \\cup R)}$$\n$$P(P \\mid Q \\cup R) = \\frac{0.13}{0.36}$$\n$$P(P \\mid Q \\cup R) \\approx 0.3611$$\n\nAs a percentage, this is approximately $36.11\\%$. The claim states that this probability is greater than $37\\%$. Since $36.11\\% \\not> 37\\%$, the statement is False.",
        "**D.** → True\n\nThis statement asks for the probability that a customer uses exactly one of Auto-save and Dark mode. This means the customer uses Auto-save but not Dark mode, OR uses Dark mode but not Auto-save. These are two mutually exclusive events, so their probabilities can be added.\n\nThe event 'uses Auto-save but not Dark mode' is $P \\cap Q^c$. This comprises two regions from the Venn diagram: $P \\cap Q^c \\cap R^c$ (only Auto-save) and $P \\cap Q^c \\cap R$ (Auto-save and Cloud sync, but not Dark mode).\n$$P(P \\cap Q^c) = P(P \\cap Q^c \\cap R^c) + P(P \\cap Q^c \\cap R)$$\n$$P(P \\cap Q^c) = 0.15 + 0.04$$\n$$P(P \\cap Q^c) = 0.19$$\n\nThe event 'uses Dark mode but not Auto-save' is $P^c \\cap Q$. This also comprises two regions: $P^c \\cap Q \\cap R^c$ (only Dark mode) and $P^c \\cap Q \\cap R$ (Dark mode and Cloud sync, but not Auto-save).\n$$P(P^c \\cap Q) = P(P^c \\cap Q \\cap R^c) + P(P^c \\cap Q \\cap R)$$\n$$P(P^c \\cap Q) = 0.10 + 0.05$$\n$$P(P^c \\cap Q) = 0.15$$ \n\nTo find the probability of using exactly one of Auto-save and Dark mode, we sum these two probabilities:\n$$P(\\text{exactly one of P and Q}) = P(P \\cap Q^c) + P(P^c \\cap Q)$$\n$$P(\\text{exactly one of P and Q}) = 0.19 + 0.15$$\n$$P(\\text{exactly one of P and Q}) = 0.34$$\n\nAs a percentage, this is $34\\%$. The claim states that this probability is greater than $32\\%$. Since $34\\% > 32\\%$, the statement is True.",
        "**E.** → True\n\nThis statement compares the probability of a customer using all three features with one-quarter of the probability that they use exactly two features.\n\nFirst, we identify the probability that a customer uses all three features. This is directly given by the region $P \\cap Q \\cap R$.\n$$P(\\text{all three features}) = P(P \\cap Q \\cap R)$$\n$$P(\\text{all three features}) = 0.03$$\n\nNext, we use the result from statement B for the probability that a customer uses exactly two features.\n$$P(\\text{exactly two features}) = 0.15$$\n\nNow, we calculate one-quarter of this probability:\n$$\\frac{1}{4} \\times P(\\text{exactly two features}) = \\frac{1}{4} \\times 0.15$$\n$$\\frac{1}{4} \\times P(\\text{exactly two features}) = 0.0375$$\n\nFinally, we compare the probability of using all three features with this calculated value. We check if $P(\\text{all three features}) < 0.0375$.\n$$0.03 < 0.0375$$\nThis inequality is true. Therefore, the probability that the customer uses all three features is less than one-quarter of the probability that they use exactly two features, so the statement is True."
      ]
    },
    {
      "caseId": "MATH 12.143",
      "chapter": "Chapter 12.4",
      "title": "Chebyshev's Inequality",
      "context": "A machine's fill weight X (in grams) has an unknown, possibly non-normal, distribution with μ = 50 and σ = 5. Chebyshev's inequality is used to bound tail probabilities without assuming a specific distribution shape.",
      "statements": [
        "Chebyshev's inequality guarantees that the probability that X is between 40 and 60 is at least 0.75.",
        "Chebyshev's inequality guarantees that the probability that X is between 45 and 55 is at least 0.75.",
        "Chebyshev's inequality guarantees that the probability that X is less than 30 or greater than 70 is at most 0.0625.",
        "Because the Chebyshev bound for the probability of given X - 50 given is at least 12.5 works out to exactly 0.16, the true value of the probability of given X - 50 given is at least 12.5 must also equal 0.16.",
        "Using k = 3 instead of k = 2 in the inequality the probability of given X - μ given is at least kσ is at most 1/k² produces a tighter (smaller) upper bound on the tail probability."
      ],
      "answerKey": [
        true,
        false,
        true,
        false,
        true
      ],
      "explanations": [
        "**A.** → True\n\nThis statement asks for the guaranteed minimum probability that the fill weight $X$ is between $40$ and $60$ grams. This range can be expressed as $40 < X < 60$. To apply Chebyshev's inequality, we first express this range in terms of deviations from the mean. The mean is $\\mu = 50$. The interval $(40, 60)$ is symmetric around the mean, with $40 = 50 - 10$ and $60 = 50 + 10$. Therefore, we are interested in $P(|X - 50| < 10)$.\n\nNext, we need to determine the value of $k$ such that $k\\sigma = 10$. Given $\\sigma = 5$, we set up the equation:\n$$k \\cdot 5 = 10$$\nSolving for $k$:\n$$k = \\frac{10}{5}$$\n$$k = 2$$\n\nNow we apply the first form of Chebyshev's inequality, which gives a lower bound for the probability that $X$ is within $k$ standard deviations of the mean:\n$$P(|X - \\mu| < k\\sigma) \\ge 1 - \\frac{1}{k^2}$$\nSubstituting $\\mu=50$, $\\sigma=5$, and $k=2$:\n$$P(|X - 50| < 2 \\cdot 5) \\ge 1 - \\frac{1}{2^2}$$\n$$P(|X - 50| < 10) \\ge 1 - \\frac{1}{4}$$\n$$P(|X - 50| < 10) \\ge \\frac{3}{4}$$\n$$P(|X - 50| < 10) \\ge 0.75$$\n\nChebyshev's inequality guarantees that the probability of $X$ being between $40$ and $60$ is at least $0.75$. The claim states that this probability is at least $0.75$, so the statement is True.",
        "**B.** → False\n\nThis statement concerns the probability that the fill weight $X$ is between $45$ and $55$ grams. This range is $45 < X < 55$. We express this in terms of deviations from the mean, $\\mu = 50$. The interval $(45, 55)$ is symmetric around the mean, with $45 = 50 - 5$ and $55 = 50 + 5$. So, we are interested in $P(|X - 50| < 5)$.\n\nTo use Chebyshev's inequality, we find $k$ such that $k\\sigma = 5$. Given $\\sigma = 5$:\n$$k \\cdot 5 = 5$$\nSolving for $k$:\n$$k = \\frac{5}{5}$$\n$$k = 1$$\n\nNow we apply the first form of Chebyshev's inequality:\n$$P(|X - \\mu| < k\\sigma) \\ge 1 - \\frac{1}{k^2}$$\nSubstituting $\\mu=50$, $\\sigma=5$, and $k=1$:\n$$P(|X - 50| < 1 \\cdot 5) \\ge 1 - \\frac{1}{1^2}$$\n$$P(|X - 50| < 5) \\ge 1 - 1$$\n$$P(|X - 50| < 5) \\ge 0$$\n\nChebyshev's inequality guarantees that the probability of $X$ being between $45$ and $55$ is at least $0$. The claim states this probability is at least $0.75$. Since $0.75$ is not necessarily at least $0$, the inequality does not support the claim that the probability is at least $0.75$, so the statement is False.",
        "**C.** → True\n\nThis statement asks for the upper bound on the probability that $X$ is less than $30$ or greater than $70$. This corresponds to the condition $X < 30$ or $X > 70$. We express this as a deviation from the mean, $\\mu = 50$. The values $30$ and $70$ are symmetric around the mean: $30 = 50 - 20$ and $70 = 50 + 20$. So, the condition $X < 30$ or $X > 70$ is equivalent to $|X - 50| \\ge 20$.\n\nWe need to find $k$ such that $k\\sigma = 20$. Given $\\sigma = 5$:\n$$k \\cdot 5 = 20$$\nSolving for $k$:\n$$k = \\frac{20}{5}$$\n$$k = 4$$ \n\nNow we apply the second form of Chebyshev's inequality, which gives an upper bound for the probability that $X$ is at least $k$ standard deviations away from the mean:\n$$P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$$\nSubstituting $\\mu=50$, $\\sigma=5$, and $k=4$:\n$$P(|X - 50| \\ge 4 \\cdot 5) \\le \\frac{1}{4^2}$$\n$$P(|X - 50| \\ge 20) \\le \\frac{1}{16}$$\n$$P(|X - 50| \\ge 20) \\le 0.0625$$\n\nChebyshev's inequality guarantees that the probability of $X$ being less than $30$ or greater than $70$ is at most $0.0625$. The claim states this probability is at most $0.0625$, so the statement is True.",
        "**D.** → False\n\nThis statement claims that if the Chebyshev bound for $P(|X - 50| \\ge 12.5)$ is exactly $0.16$, then the true value of this probability must also equal $0.16$. Chebyshev's inequality provides an *upper bound* for tail probabilities. For example, $P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$. This means the actual probability could be any value from $0$ up to this upper bound, inclusive. It does not mean the actual probability is equal to the bound.\n\nLet's verify the calculation mentioned in the claim. If $P(|X - 50| \\ge 12.5)$, we find $k$ such that $k\\sigma = 12.5$. Given $\\sigma = 5$:\n$$k \\cdot 5 = 12.5$$\n$$k = \\frac{12.5}{5}$$\n$$k = 2.5$$\n\nThe Chebyshev upper bound is then:\n$$\\frac{1}{k^2} = \\frac{1}{(2.5)^2}$$\n$$\\frac{1}{6.25} = 0.16$$\n\nSo, Chebyshev's inequality guarantees that $P(|X - 50| \\ge 12.5) \\le 0.16$. This implies that the true probability could be $0.05$, $0.10$, or any value less than or equal to $0.16$. It does not require the true probability to be exactly $0.16$. Therefore, the statement is False.",
        "**E.** → True\n\nThis statement evaluates the effect of increasing $k$ on the upper bound for the tail probability $P(|X - \\mu| \\ge k\\sigma)$. The upper bound given by Chebyshev's inequality is $\\frac{1}{k^2}$. A tighter bound means a smaller numerical value for this upper bound.\n\nLet's calculate the upper bound for $k=2$:\n$$\\text{Bound for } k=2: \\frac{1}{2^2} = \\frac{1}{4} = 0.25$$\n\nNow, let's calculate the upper bound for $k=3$:\n$$\\text{Bound for } k=3: \\frac{1}{3^2} = \\frac{1}{9} \\approx 0.1111$$\n\nComparing the two bounds, $0.1111 < 0.25$. This means that when we use $k=3$ instead of $k=2$, the resulting upper bound on the tail probability is smaller. A smaller upper bound provides a more precise, or \"tighter,\" constraint on the probability. Therefore, using a larger $k$ value, like $k=3$, produces a tighter (smaller) upper bound on the tail probability, so the statement is True."
      ]
    },
    {
      "caseId": "MATH 13.55",
      "chapter": "Math",
      "title": "Air Traffic Control Simulator",
      "context": "An air traffic control simulator runs 32 scenarios per certification attempt. Controller A is a trainee (p = 0.44 of correctly resolving a scenario). Controller B is a certified controller (p = 0.92). To pass certification, a controller must correctly resolve at least 27 of the 32 scenarios. (Scoring scheme used in statement F: +5 points for each correct call, −2 points for each miss.). Evaluate each statement. Mark it TRUE or FALSE.",
      "statements": [
        "Controller A's probability of correctly resolving all 32 scenarios is less than 0.00000000038%.",
        "Controller A's probability of between 20 and 24 correct resolutions is greater than the probability of exactly 20.",
        "Controller B is more than 320,000 times as likely as Controller A to pass certification.",
        "Controller A is more than 9 times as likely as Controller B to land in the 20–24 range.",
        "Controller A's standard deviation in number of correct resolutions is more than 1.8 times Controller B's standard deviation."
      ],
      "answerKey": [
        false,
        true,
        false,
        false,
        true
      ],
      "explanations": [
        "**A.** → False\n\nA perfect run means every one of the $n$ trials succeeds. Independence lets us multiply the success probability across all trials, which is the binomial PMF at $k = n$:\n\n$$P(X = n) = p^{n}$$\n\nFor side A, $p = 0.44$ and $n = 32$:\n\n$$P(X = 32) = (0.44)^{32}$$\n\n$$\\approx 3.8948 \\times 10^{-12} \\approx 3.8948 \\times 10^{-10}\\%$$\n\nThe claim compares this with $3.8 \\times 10^{-10}\\%$. We got about $3.8948 \\times 10^{-10}\\%$, which is above the cutoff, so the statement is False.",
        "**B.** → True\n\nThe named event covers every admissible count from 20 through 24, not only the single count 20. Those extra counts have positive probability when $0<p<1$, so the event probability is strictly larger than $P(X=20)$.\n\nSo the statement is True.",
        "**C.** → False\n\nClearing the cutoff means at least 27 successes out of 32. That event is the union of the mutually exclusive outcomes $X = 27, 28, \\ldots, 32$, so we add the individual binomial probabilities:\n\n$$P(X \\ge 27) = \\sum_{x=27}^{32} \\binom{32}{x} p^{x} (1-p)^{32-x}$$\n\nA single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, so it understates the chance of meeting the cutoff. We need the full upper tail for each side, then the ratio of those two probabilities — not the ratio of the two success probabilities $p$.\n\nSide A ($n = 32$, $p = 0.44$):\n\n$$\\binom{32}{27}(0.44)^{27}(0.56)^{5}$$\n\n$$\\approx 2.6192 \\times 10^{-6}$$\n\n$$\\binom{32}{28}(0.44)^{28}(0.56)^{4}$$\n\n$$\\approx 3.6749 \\times 10^{-7}$$\n\n$$\\binom{32}{29}(0.44)^{29}(0.56)^{3}$$\n\n$$\\approx 3.9827 \\times 10^{-8}$$\n\n$$\\binom{32}{30}(0.44)^{30}(0.56)^{2}$$\n\n$$\\approx 3.1292 \\times 10^{-9}$$\n\n$$\\binom{32}{31}(0.44)^{31}(0.56)^{1}$$\n\n$$\\approx 1.5862 \\times 10^{-10}$$\n\n$$\\binom{32}{32}(0.44)^{32}(0.56)^{0}$$\n\n$$\\approx 3.8948 \\times 10^{-12}$$\n\nAdding the mutually exclusive pieces:\n\n$$2.6192 \\times 10^{-6} + 3.6749 \\times 10^{-7} + 3.9827 \\times 10^{-8}$$\n\n$$+ 3.1292 \\times 10^{-9} + 1.5862 \\times 10^{-10} + 3.8948 \\times 10^{-12}$$\n\n$$P(X \\ge 27) \\approx 3.0298 \\times 10^{-6} \\approx 0\\%$$\n\nSide B ($n = 32$, $p = 0.92$):\n\n$$\\binom{32}{27}(0.92)^{27}(0.08)^{5}$$\n\n$$\\approx 0.0695$$\n\n$$\\binom{32}{28}(0.92)^{28}(0.08)^{4}$$\n\n$$\\approx 0.1426$$\n\n$$\\binom{32}{29}(0.92)^{29}(0.08)^{3}$$\n\n$$\\approx 0.2263$$\n\n$$\\binom{32}{30}(0.92)^{30}(0.08)^{2}$$\n\n$$\\approx 0.2602$$\n\n$$\\binom{32}{31}(0.92)^{31}(0.08)^{1}$$\n\n$$\\approx 0.193$$\n\n$$\\binom{32}{32}(0.92)^{32}(0.08)^{0}$$\n\n$$\\approx 0.0694$$\n\nAdding the mutually exclusive pieces:\n\n$$0.0695 + 0.1426 + 0.2263$$\n\n$$+ 0.2602 + 0.193 + 0.0694$$\n\n$$P(X \\ge 27) \\approx 0.961 \\approx 96.1\\%$$\n\nThe ratio in the claim’s order (B relative to A):\n\n$$\\frac{P_B(X \\ge 27)}{P_A(X \\ge 27)}$$\n\n$$\\approx \\frac{96.1\\%}{0\\%} \\approx 317170.85$$\n\nSince $317170.85 \\le 320000$, the statement is False.",
        "**D.** → False\n\nClearing the cutoff means at least 27 successes out of 32. That event is the union of the mutually exclusive outcomes $X = 27, 28, \\ldots, 32$, so we add the individual binomial probabilities:\n\n$$P(X \\ge 27) = \\sum_{x=27}^{32} \\binom{32}{x} p^{x} (1-p)^{32-x}$$\n\nA single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, so it understates the chance of meeting the cutoff. We need the full upper tail for each side, then the ratio of those two probabilities — not the ratio of the two success probabilities $p$.\n\nSide A ($n = 32$, $p = 0.44$):\n\n$$\\binom{32}{27}(0.44)^{27}(0.56)^{5}$$\n\n$$\\approx 2.6192 \\times 10^{-6}$$\n\n$$\\binom{32}{28}(0.44)^{28}(0.56)^{4}$$\n\n$$\\approx 3.6749 \\times 10^{-7}$$\n\n$$\\binom{32}{29}(0.44)^{29}(0.56)^{3}$$\n\n$$\\approx 3.9827 \\times 10^{-8}$$\n\n$$\\binom{32}{30}(0.44)^{30}(0.56)^{2}$$\n\n$$\\approx 3.1292 \\times 10^{-9}$$\n\n$$\\binom{32}{31}(0.44)^{31}(0.56)^{1}$$\n\n$$\\approx 1.5862 \\times 10^{-10}$$\n\n$$\\binom{32}{32}(0.44)^{32}(0.56)^{0}$$\n\n$$\\approx 3.8948 \\times 10^{-12}$$\n\nAdding the mutually exclusive pieces:\n\n$$2.6192 \\times 10^{-6} + 3.6749 \\times 10^{-7} + 3.9827 \\times 10^{-8}$$\n\n$$+ 3.1292 \\times 10^{-9} + 1.5862 \\times 10^{-10} + 3.8948 \\times 10^{-12}$$\n\n$$P(X \\ge 27) \\approx 3.0298 \\times 10^{-6} \\approx 0\\%$$\n\nSide B ($n = 32$, $p = 0.92$):\n\n$$\\binom{32}{27}(0.92)^{27}(0.08)^{5}$$\n\n$$\\approx 0.0695$$\n\n$$\\binom{32}{28}(0.92)^{28}(0.08)^{4}$$\n\n$$\\approx 0.1426$$\n\n$$\\binom{32}{29}(0.92)^{29}(0.08)^{3}$$\n\n$$\\approx 0.2263$$\n\n$$\\binom{32}{30}(0.92)^{30}(0.08)^{2}$$\n\n$$\\approx 0.2602$$\n\n$$\\binom{32}{31}(0.92)^{31}(0.08)^{1}$$\n\n$$\\approx 0.193$$\n\n$$\\binom{32}{32}(0.92)^{32}(0.08)^{0}$$\n\n$$\\approx 0.0694$$\n\nAdding the mutually exclusive pieces:\n\n$$0.0695 + 0.1426 + 0.2263$$\n\n$$+ 0.2602 + 0.193 + 0.0694$$\n\n$$P(X \\ge 27) \\approx 0.961 \\approx 96.1\\%$$\n\nThe ratio in the claim’s order (A relative to B):\n\n$$\\frac{P_A(X \\ge 27)}{P_B(X \\ge 27)}$$\n\n$$\\approx \\frac{0\\%}{96.1\\%} \\approx 3.1529 \\times 10^{-6}$$\n\nSince $3.1529 \\times 10^{-6} \\le 9$, the statement is False.",
        "**E.** → True\n\nThe standard deviation is the positive square root of the variance. For $X \\sim \\mathrm{Bin}(n,p)$,\n\n$$\\mathrm{SD}(X) = \\sqrt{np(1-p)}$$\n\nSide A ($n_A = 32$, $p_A = 0.44$):\n\n$$\\mathrm{Var}(A) = 7.8848$$\n\n$$\\mathrm{SD}(A) = \\sqrt{7.8848} \\approx 2.808$$\n\nSide B ($n_B = 32$, $p_B = 0.92$):\n\n$$\\mathrm{Var}(B) = 2.3552$$\n\n$$\\mathrm{SD}(B) = \\sqrt{2.3552} \\approx 1.535$$\n\n$$\\frac{\\mathrm{SD}(A)}{\\mathrm{SD}(B)}$$\n\n$$\\approx \\frac{2.808}{1.535} \\approx 1.83$$\n\nAgainst the claim, the statement is True."
      ]
    },
    {
      "caseId": "MATH 13.52",
      "chapter": "Math",
      "title": "Vaccine Antibody Classification",
      "context": "A vaccine trial has lab technicians classify antibody responses across 35 samples. Tech A is a first-year analyst (p = 0.38 of correctly classifying a sample). Tech B is a lead analyst (p = 0.94). To pass certification, a technician must correctly classify at least 30 of the 35 samples. (Scoring scheme used in statement F: +5 points for each correct call, −2 points for each miss.). Evaluate each statement. Mark it TRUE or FALSE.",
      "statements": [
        "Tech A's probability of correctly classifying all 35 samples is less than 0.0000000000002%.",
        "Tech A's probability of between 22 and 27 correct classifications is greater than the probability of exactly 22.",
        "Tech B is more than 150,000,000 times as likely as Tech A to pass certification.",
        "Tech A is more than 3 times as likely as Tech B to land in the 22–27 range.",
        "Tech A's standard deviation in number of correct classifications is more than double Tech B's standard deviation."
      ],
      "answerKey": [
        true,
        true,
        false,
        false,
        true
      ],
      "explanations": [
        "**A.** → True\n\nA perfect run means every one of the $n$ trials succeeds. Independence lets us multiply the success probability across all trials, which is the binomial PMF at $k = n$:\n\n$$P(X = n) = p^{n}$$\n\nFor side A, $p = 0.38$ and $n = 35$:\n\n$$P(X = 35) = (0.38)^{35}$$\n\n$$\\approx 0 \\approx 0\\%$$\n\nThe claim compares this with $0\\%$. We got about $0\\%$, which is below the cutoff, so the statement is True.",
        "**B.** → True\n\nThe named event covers every admissible count from 22 through 27, not only the single count 22. Those extra counts have positive probability when $0<p<1$, so the event probability is strictly larger than $P(X=22)$.\n\nSo the statement is True.",
        "**C.** → False\n\nClearing the cutoff means at least 30 successes out of 35. That event is the union of the mutually exclusive outcomes $X = 30, 31, \\ldots, 35$, so we add the individual binomial probabilities:\n\n$$P(X \\ge 30) = \\sum_{x=30}^{35} \\binom{35}{x} p^{x} (1-p)^{35-x}$$\n\nA single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, so it understates the chance of meeting the cutoff. We need the full upper tail for each side, then the ratio of those two probabilities — not the ratio of the two success probabilities $p$.\n\nSide A ($n = 35$, $p = 0.38$):\n\n$$\\binom{35}{30}(0.38)^{30}(0.62)^{5}$$\n\n$$\\approx 7.3597 \\times 10^{-9}$$\n\n$$\\binom{35}{31}(0.38)^{31}(0.62)^{4}$$\n\n$$\\approx 7.2754 \\times 10^{-10}$$\n\n$$\\binom{35}{32}(0.38)^{32}(0.62)^{3}$$\n\n$$\\approx 5.5739 \\times 10^{-11}$$\n\n$$\\binom{35}{33}(0.38)^{33}(0.62)^{2}$$\n\n$$\\approx 3.1057 \\times 10^{-12}$$\n\n$$\\binom{35}{34}(0.38)^{34}(0.62)^{1}$$\n\n$$\\approx 0$$\n\n$$\\binom{35}{35}(0.38)^{35}(0.62)^{0}$$\n\n$$\\approx 0$$\n\nAdding the mutually exclusive pieces:\n\n$$7.3597 \\times 10^{-9} + 7.2754 \\times 10^{-10} + 5.5739 \\times 10^{-11}$$\n\n$$+ 3.1057 \\times 10^{-12} + 0 + 0$$\n\n$$P(X \\ge 30) \\approx 8.1462 \\times 10^{-9} \\approx 8.1462 \\times 10^{-7}\\%$$\n\nSide B ($n = 35$, $p = 0.94$):\n\n$$\\binom{35}{30}(0.94)^{30}(0.06)^{5}$$\n\n$$\\approx 0.0394$$\n\n$$\\binom{35}{31}(0.94)^{31}(0.06)^{4}$$\n\n$$\\approx 0.0997$$\n\n$$\\binom{35}{32}(0.94)^{32}(0.06)^{3}$$\n\n$$\\approx 0.1952$$\n\n$$\\binom{35}{33}(0.94)^{33}(0.06)^{2}$$\n\n$$\\approx 0.278$$\n\n$$\\binom{35}{34}(0.94)^{34}(0.06)^{1}$$\n\n$$\\approx 0.2562$$\n\n$$\\binom{35}{35}(0.94)^{35}(0.06)^{0}$$\n\n$$\\approx 0.1147$$\n\nAdding the mutually exclusive pieces:\n\n$$0.0394 + 0.0997 + 0.1952$$\n\n$$+ 0.278 + 0.2562 + 0.1147$$\n\n$$P(X \\ge 30) \\approx 0.9832 \\approx 98.32\\%$$\n\nThe ratio in the claim’s order (B relative to A):\n\n$$\\frac{P_B(X \\ge 30)}{P_A(X \\ge 30)}$$\n\n$$\\approx \\frac{98.32\\%}{8.1462 \\times 10^{-7}\\%} \\approx 120691097.19$$\n\nSince $120691097.19 \\le 150000000$, the statement is False.",
        "**D.** → False\n\nClearing the cutoff means at least 30 successes out of 35. That event is the union of the mutually exclusive outcomes $X = 30, 31, \\ldots, 35$, so we add the individual binomial probabilities:\n\n$$P(X \\ge 30) = \\sum_{x=30}^{35} \\binom{35}{x} p^{x} (1-p)^{35-x}$$\n\nA single term $P(X = k)$ would only count “exactly $k$” and would miss the rest of the tail, so it understates the chance of meeting the cutoff. We need the full upper tail for each side, then the ratio of those two probabilities — not the ratio of the two success probabilities $p$.\n\nSide A ($n = 35$, $p = 0.38$):\n\n$$\\binom{35}{30}(0.38)^{30}(0.62)^{5}$$\n\n$$\\approx 7.3597 \\times 10^{-9}$$\n\n$$\\binom{35}{31}(0.38)^{31}(0.62)^{4}$$\n\n$$\\approx 7.2754 \\times 10^{-10}$$\n\n$$\\binom{35}{32}(0.38)^{32}(0.62)^{3}$$\n\n$$\\approx 5.5739 \\times 10^{-11}$$\n\n$$\\binom{35}{33}(0.38)^{33}(0.62)^{2}$$\n\n$$\\approx 3.1057 \\times 10^{-12}$$\n\n$$\\binom{35}{34}(0.38)^{34}(0.62)^{1}$$\n\n$$\\approx 0$$\n\n$$\\binom{35}{35}(0.38)^{35}(0.62)^{0}$$\n\n$$\\approx 0$$\n\nAdding the mutually exclusive pieces:\n\n$$7.3597 \\times 10^{-9} + 7.2754 \\times 10^{-10} + 5.5739 \\times 10^{-11}$$\n\n$$+ 3.1057 \\times 10^{-12} + 0 + 0$$\n\n$$P(X \\ge 30) \\approx 8.1462 \\times 10^{-9} \\approx 8.1462 \\times 10^{-7}\\%$$\n\nSide B ($n = 35$, $p = 0.94$):\n\n$$\\binom{35}{30}(0.94)^{30}(0.06)^{5}$$\n\n$$\\approx 0.0394$$\n\n$$\\binom{35}{31}(0.94)^{31}(0.06)^{4}$$\n\n$$\\approx 0.0997$$\n\n$$\\binom{35}{32}(0.94)^{32}(0.06)^{3}$$\n\n$$\\approx 0.1952$$\n\n$$\\binom{35}{33}(0.94)^{33}(0.06)^{2}$$\n\n$$\\approx 0.278$$\n\n$$\\binom{35}{34}(0.94)^{34}(0.06)^{1}$$\n\n$$\\approx 0.2562$$\n\n$$\\binom{35}{35}(0.94)^{35}(0.06)^{0}$$\n\n$$\\approx 0.1147$$\n\nAdding the mutually exclusive pieces:\n\n$$0.0394 + 0.0997 + 0.1952$$\n\n$$+ 0.278 + 0.2562 + 0.1147$$\n\n$$P(X \\ge 30) \\approx 0.9832 \\approx 98.32\\%$$\n\nThe ratio in the claim’s order (A relative to B):\n\n$$\\frac{P_A(X \\ge 30)}{P_B(X \\ge 30)}$$\n\n$$\\approx \\frac{8.1462 \\times 10^{-7}\\%}{98.32\\%} \\approx 8.2856 \\times 10^{-9}$$\n\nSince $8.2856 \\times 10^{-9} \\le 3$, the statement is False.",
        "**E.** → True\n\nThe standard deviation is the positive square root of the variance. For $X \\sim \\mathrm{Bin}(n,p)$,\n\n$$\\mathrm{SD}(X) = \\sqrt{np(1-p)}$$\n\nSide A ($n_A = 35$, $p_A = 0.38$):\n\n$$\\mathrm{Var}(A) = 8.246$$\n\n$$\\mathrm{SD}(A) = \\sqrt{8.246} \\approx 2.872$$\n\nSide B ($n_B = 35$, $p_B = 0.94$):\n\n$$\\mathrm{Var}(B) = 1.974$$\n\n$$\\mathrm{SD}(B) = \\sqrt{1.974} \\approx 1.405$$\n\n$$\\frac{\\mathrm{SD}(A)}{\\mathrm{SD}(B)}$$\n\n$$\\approx \\frac{2.872}{1.405} \\approx 2.044$$\n\nAgainst the claim, the statement is True."
      ]
    }
  ],
  "english": [
    {
      "caseId": "ENG G.18.07",
      "chapter": "Prepositions & Fixed Patterns",
      "title": "Task 7",
      "context": "Decide whether each sentence is grammatically correct as written.",
      "statements": [
        "She goes to work by foot every morning.",
        "They travelled to the coast by train.",
        "The match starts in Monday evening.",
        "I usually read in night when the house is quiet.",
        "We met on a cold Friday afternoon."
      ],
      "answerKey": [
        false,
        true,
        false,
        false,
        true
      ],
      "explanations": [
        "**A) She goes to work by foot every morning.**\n\nWalking uses on foot, not by foot. By is for vehicles: by bus, by train, by car. The morning commute on foot keeps on, the walking exception.\n\n**Tip:** By → vehicle; on → foot.\n\nWalking means on foot, not by foot, so this is **false** — \"She goes to work on foot every morning.\"",
        "**B) They travelled to the coast by train.**\n\nBy train correctly names the means of transport. The coast journey uses the default by + vehicle lock. Nothing else in the line fights that pattern.\n\nBy train is the default by + vehicle lock, so the coast journey is **true**.",
        "**C) The match starts in Monday evening.**\n\nDays and dated evenings take on: on Monday or on Monday evening. In Monday is wrong; in the evening is fine only without a weekday. Monday evening is a dated time slot, so on is required.\n\nDated days take on, so in Monday evening is **false**: \"The match starts on Monday evening.\"",
        "**D) I usually read in night when the house is quiet.**\n\nAt night is the fixed time phrase. Bare in night is not standard. In the night is rarer and shaded differently; the quiet-house reading wants at night.\n\nAt night is the fixed time phrase, so in night is **false** — \"I usually read at night when the house is quiet.\"",
        "**E) We met on a cold Friday afternoon.**\n\nOn plus a day or date phrase is standard: on a cold Friday afternoon. The adjective cold sits inside the noun phrase and does not change the preposition lock. Everyday and exam English both accept this shape.\n\nOn + dated day/time phrase is correctly formed here, so the wording is **true**."
      ]
    }
  ]
};
