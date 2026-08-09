#!/usr/bin/env python3
"""Generate WU BBE English Vocabulary task bank (6 subtopics × 30 tasks)."""
from __future__ import annotations

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "english" / "vocabulary.json"

CTX_MEANING = "Decide whether each statement about word meaning or usage is correct."
CTX_USAGE = "Decide whether the italicised word is used correctly in each sentence."
CTX_COLLOC = "Decide whether each collocation or fixed expression is used correctly."
CTX_BIZ = "Decide whether each statement about business/academic word usage is correct."
CTX_FORMAL = "Decide whether each sentence uses the highlighted word appropriately in formal English."
CTX_NEAR = "Decide whether each distinction between near-synonyms is accurate."

SUBSECTIONS = [
    {"id": "v.1", "title": "Confusable Pairs"},
    {"id": "v.2", "title": "Usage in Context"},
    {"id": "v.3", "title": "Business Collocations"},
    {"id": "v.4", "title": "Academic & Formal Vocabulary"},
    {"id": "v.5", "title": "Near-Synonyms & Nuance"},
    {"id": "v.6", "title": "Word Formation & Affixes"},
]


def diff_for(n: int) -> str:
    if n <= 6:
        return "1/5"
    if n <= 12:
        return "2/5"
    if n <= 18:
        return "3/5"
    if n <= 24:
        return "4/5"
    return "5/5"


def true_count_pattern(task_idx: int) -> int:
    # Mix 1–5 Trues per task.
    return [1, 2, 3, 4, 5, 2, 3, 4, 1, 5, 2, 3, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 2, 3, 1, 4, 5, 3][
        task_idx % 30
    ]


# --- Confusable pairs: (w1, def1, w2, def2) ---
CONFUSABLES = [
    ("lend", "to give something temporarily to someone else", "borrow", "to take something temporarily from someone else"),
    ("sensible", "having good judgement or practical reasoning", "sensitive", "easily affected by or responsive to stimuli"),
    ("accept", "to agree to receive something offered", "except", "to exclude or leave out"),
    ("affect", "to influence or produce a change in something", "effect", "a result or consequence of something"),
    ("principal", "main or most important; or the head of a school", "principle", "a fundamental rule or belief"),
    ("stationary", "not moving; fixed in place", "stationery", "writing materials such as paper and pens"),
    ("complement", "something that completes or goes well with something else", "compliment", "an expression of praise or admiration"),
    ("discrete", "separate and distinct", "discreet", "careful and tactful in speech or action"),
    ("economic", "relating to the economy or financial systems", "economical", "using resources carefully; not wasteful"),
    ("historic", "important or memorable in history", "historical", "relating to history or the past in general"),
    ("imply", "to suggest something without stating it directly", "infer", "to draw a conclusion from evidence"),
    ("precede", "to come before something in time or order", "proceed", "to continue or go forward"),
    ("raise", "to lift or increase something", "rise", "to go up by itself; to increase"),
    ("advise", "to give advice (verb)", "advice", "a recommendation (noun)"),
    ("practise", "to do something repeatedly to improve (verb, BrE)", "practice", "the noun form; repeated exercise of a skill"),
    ("assure", "to tell someone confidently that something is true", "ensure", "to make certain that something happens"),
    ("appraise", "to assess the value or quality of something", "apprise", "to inform someone of something"),
    ("prescribe", "to recommend or authorise a course of action", "proscribe", "to forbid or prohibit something"),
    ("adopt", "to formally take on a plan or approach", "adept", "highly skilled or proficient"),
    ("notable", "worthy of attention; remarkable", "notorious", "famous for something negative"),
    ("wary", "cautious about potential danger", "weary", "physically or mentally tired"),
    ("ingenious", "clever and inventive", "ingenuous", "innocent and lacking sophistication"),
    ("contemptuous", "showing scorn or disrespect", "contemptible", "deserving of scorn"),
    ("denote", "to indicate something directly or literally", "connote", "to suggest an additional secondary meaning"),
    ("exhaustive", "thorough and comprehensive", "exhausting", "causing extreme tiredness"),
    ("complacent", "self-satisfied and unaware of risk", "compliant", "willing to obey rules or requests"),
    ("venal", "capable of being bribed or corrupted", "venial", "a minor, easily forgivable fault"),
    ("bemused", "confused or puzzled", "amused", "entertained or finding something funny"),
    ("elicit", "to draw out a response or information", "illicit", "illegal or forbidden"),
    ("allude", "to refer to something indirectly", "elude", "to escape or avoid"),
    ("censor", "to suppress unacceptable material", "censure", "to express strong disapproval"),
    ("climactic", "relating to a climax or peak moment", "climatic", "relating to climate"),
    ("emigrant", "a person who leaves their country to settle elsewhere", "immigrant", "a person who arrives in a country to settle"),
    ("flaunt", "to display something ostentatiously", "flout", "to openly disregard a rule"),
    ("loath", "reluctant or unwilling", "loathe", "to feel intense dislike"),
    ("personal", "relating to a particular person; private", "personnel", "the people employed by an organisation"),
    ("perspective", "a particular way of viewing something", "prospective", "expected or likely to happen in the future"),
    ("respectfully", "in a way that shows respect", "respectively", "in the order previously mentioned"),
    ("uninterested", "not interested; bored", "disinterested", "impartial; having no personal stake"),
    ("adverse", "harmful or unfavourable", "averse", "having a strong dislike of something"),
]

USAGE_ITEMS = [
    ("forgo", True, 'The board decided to forgo the annual bonus in order to reinvest the funds.', "TRUE. \"Forgo\" (to go without) fits: the board chooses to go without the bonus.", "forgo"),
    ("mutual", False, 'After months of negotiation, the two companies finally reached a mutual agreement that benefited only one party.', "FALSE. \"Mutual\" implies shared benefit; benefiting only one party contradicts it.", "mutual"),
    ("loath", True, 'The manager was loath to approve the proposal, given the obvious risks involved.', "TRUE. \"Loath\" (reluctant) fits the manager's unwillingness.", "loath"),
    ("convene", True, 'The committee will convene a meeting to discuss the budget shortfall next week.', "TRUE. \"Convene\" correctly means to formally call a meeting.", "convene"),
    ("succinct", False, 'Her explanation was so succinct that it took nearly twenty minutes and several tangents to finish.', "FALSE. \"Succinct\" means brief; a long, rambling explanation is the opposite.", "succinct"),
    ("ambiguous", False, 'The results were ambiguous, leaving no doubt whatsoever about which strategy had performed better.', "FALSE. \"Ambiguous\" means unclear; \"no doubt\" contradicts it.", "ambiguous"),
    ("precarious", True, 'Given the company\'s precarious financial position, further borrowing seemed like an unnecessary risk.', "TRUE. \"Precarious\" (unstable) fits a risky financial position.", "precarious"),
    ("widespread", True, 'The new policy was met with widespread approval, with almost every department expressing support.', "TRUE. \"Widespread\" matches approval across many departments.", "widespread"),
    ("coherent", False, 'His argument was entirely coherent, jumping erratically between unrelated points without any clear structure.', "FALSE. \"Coherent\" means logical; erratic jumping is incoherent.", "coherent"),
    ("diligently", True, 'The team worked diligently through the night to meet the deadline, checking every detail carefully.', "TRUE. \"Diligently\" fits careful, persistent effort.", "diligently"),
    ("mitigate", True, 'The firm introduced new controls to mitigate the risk of further compliance failures.', "TRUE. \"Mitigate\" correctly means to reduce the severity of risk.", "mitigate"),
    ("exacerbate", False, 'Cutting costs carefully helped exacerbate the budget crisis and restore financial stability.', "FALSE. \"Exacerbate\" means to make worse; restoring stability is the opposite.", "exacerbate"),
    ("redundant", True, 'Several roles were made redundant after the merger reduced overlapping functions.', "TRUE. \"Redundant\" correctly describes roles no longer needed.", "redundant"),
    ("viable", True, 'The proposal remains viable only if funding is secured within the quarter.', "TRUE. \"Viable\" correctly means workable/feasible.", "viable"),
    ("negligible", False, 'The accounting error was negligible, wiping out an entire quarter of reported profits.', "FALSE. Wiping out a quarter's profits is not negligible.", "negligible"),
    ("tentative", True, 'Analysts offered a tentative conclusion pending confirmation from the final dataset.', "TRUE. \"Tentative\" correctly signals a provisional conclusion.", "tentative"),
    ("stringent", True, 'The regulator imposed more stringent capital requirements on the largest banks.', "TRUE. \"Stringent\" correctly means strict/demanding.", "stringent"),
    ("obsolete", False, 'The newly released software update is already obsolete and represents the cutting edge of the industry.', "FALSE. Cutting-edge technology is not obsolete.", "obsolete"),
    ("plausible", True, 'Her explanation of the delay was plausible, given the documented supply shortages.', "TRUE. \"Plausible\" correctly means believable.", "plausible"),
    ("sporadic", False, 'Customer complaints arrived in a sporadic flood, with dozens of identical emails every minute without pause.', "FALSE. Unbroken continuous volume is not sporadic (irregular/occasional).", "sporadic"),
    ("imminent", True, 'With negotiations collapsing, a strike appeared imminent.', "TRUE. \"Imminent\" correctly means about to happen.", "imminent"),
    ("intrinsic", True, 'Trust is an intrinsic part of any long-term client relationship.', "TRUE. \"Intrinsic\" correctly means inherent/essential.", "intrinsic"),
    ("superficial", False, 'The audit was superficial, examining every ledger entry and interviewing all relevant staff in depth.', "FALSE. A thorough deep review is not superficial.", "superficial"),
    ("volatile", True, 'Oil prices remained volatile throughout the quarter, swinging sharply week to week.', "TRUE. \"Volatile\" correctly describes sharp unstable swings.", "volatile"),
    ("arbitrary", False, 'The promotion criteria were arbitrary, based on transparent performance metrics published in advance.', "FALSE. Transparent published metrics are not arbitrary.", "arbitrary"),
    ("robust", True, 'The model\'s findings remained robust after several alternative specifications were tested.', "TRUE. \"Robust\" correctly means strong under alternative checks.", "robust"),
    ("scarce", True, 'Skilled labour remained scarce in the region, pushing wages upward.', "TRUE. \"Scarce\" correctly means in short supply.", "scarce"),
    ("lucrative", False, 'The contract proved lucrative, generating almost no revenue and substantial losses.', "FALSE. Generating losses is not lucrative (profitable).", "lucrative"),
    ("prudent", True, 'A prudent approach would be to retain cash reserves before expanding overseas.', "TRUE. \"Prudent\" correctly means careful and wise.", "prudent"),
    ("ubiquitous", False, 'The device is ubiquitous, available only in a handful of specialist shops.', "FALSE. Limited availability contradicts ubiquitous (everywhere).", "ubiquitous"),
    ("adverse", True, 'Adverse weather delayed several outbound shipments from the port.', "TRUE. \"Adverse\" correctly means unfavourable.", "adverse"),
    ("averse", True, 'Many investors remain averse to highly leveraged acquisitions.', "TRUE. \"Averse to\" correctly means strongly dislike.", "averse"),
    ("candid", True, 'In a candid interview, the CEO admitted the forecast had been too optimistic.', "TRUE. \"Candid\" correctly means frank/open.", "candid"),
    ("chronic", False, 'The firm faced a chronic shortage that lasted exactly one afternoon.', "FALSE. One afternoon is not chronic (long-lasting).", "chronic"),
    ("credible", True, 'The witness provided a credible account consistent with the documentary evidence.', "TRUE. \"Credible\" correctly means believable.", "credible"),
    ("detrimental", True, 'Prolonged remote work without coordination proved detrimental to project quality.', "TRUE. \"Detrimental\" correctly means harmful.", "detrimental"),
    ("elaborate", False, 'His answer was elaborate: a single word, \"no.\"', "FALSE. A one-word answer is not elaborate.", "elaborate"),
    ("feasible", True, 'Completing the audit by Friday is feasible if two extra analysts are assigned.', "TRUE. \"Feasible\" correctly means possible to do.", "feasible"),
    ("hypothetical", True, 'The consultant presented a hypothetical scenario to illustrate worst-case losses.', "TRUE. \"Hypothetical\" correctly means imagined for analysis.", "hypothetical"),
    ("integral", True, 'Compliance checks are an integral part of the onboarding process.', "TRUE. \"Integral\" correctly means essential/built-in.", "integral"),
]

COLLOCATIONS = [
    (True, "The company decided to raise capital through a secondary share issue.", "TRUE. \"Raise capital\" is the standard business collocation.", "raise capital"),
    (False, "The company decided to lift capital through a secondary share issue.", "FALSE. The standard collocation is \"raise capital,\" not \"lift capital.\"", "lift capital"),
    (True, "Managers must take responsibility for the outcomes of their decisions.", "TRUE. \"Take responsibility\" is the correct collocation.", "take responsibility"),
    (False, "Managers must make responsibility for the outcomes of their decisions.", "FALSE. We \"take\" responsibility, not \"make\" it.", "make responsibility"),
    (True, "The board reached a decision after several hours of debate.", "TRUE. \"Reach a decision\" is a standard collocation.", "reached a decision"),
    (False, "The board arrived a decision after several hours of debate.", "FALSE. We \"reach/arrive at\" a decision; \"arrived a decision\" is ungrammatical.", "arrived a decision"),
    (True, "Inflation poses a serious threat to household purchasing power.", "TRUE. \"Pose a threat\" is the correct collocation.", "poses a serious threat"),
    (False, "Inflation puts a serious threat to household purchasing power.", "FALSE. The standard phrase is \"pose a threat,\" not \"put a threat.\"", "puts a serious threat"),
    (True, "The firm will conduct a thorough review of its supply chain.", "TRUE. \"Conduct a review\" is standard.", "conduct a thorough review"),
    (False, "The firm will make a thorough review of its supply chain.", "FALSE. Prefer \"conduct/carry out a review\"; \"make a review\" is non-standard.", "make a thorough review"),
    (True, "She drew a clear distinction between short-term noise and long-term trends.", "TRUE. \"Draw a distinction\" is correct.", "drew a clear distinction"),
    (False, "She pulled a clear distinction between short-term noise and long-term trends.", "FALSE. We \"draw\" a distinction, not \"pull\" one.", "pulled a clear distinction"),
    (True, "The announcement had a significant impact on share prices.", "TRUE. \"Have an impact on\" is the standard collocation.", "had a significant impact"),
    (False, "The announcement did a significant impact on share prices.", "FALSE. We \"have/make an impact,\" not \"do an impact.\"", "did a significant impact"),
    (True, "Investors paid close attention to the central bank's statement.", "TRUE. \"Pay attention\" is correct.", "paid close attention"),
    (False, "Investors paid a close attention on the central bank's statement.", "FALSE. The idiom is \"pay close attention to,\" not \"paid a close attention on.\"", "paid a close attention on"),
    (True, "The start-up struggled to gain a foothold in the market.", "TRUE. \"Gain a foothold\" is a standard business idiom.", "gain a foothold"),
    (False, "The start-up struggled to win a foothold in the market.", "FALSE. The established collocation is \"gain/establish a foothold.\"", "win a foothold"),
    (True, "The ministry imposed strict sanctions on the exporters.", "TRUE. \"Impose sanctions\" is correct.", "imposed strict sanctions"),
    (False, "The ministry applied strict sanctions on the exporters.", "FALSE. Standard collocation is \"impose sanctions on,\" not \"apply sanctions on.\"", "applied strict sanctions"),
    (True, "They struck a balance between growth and risk control.", "TRUE. \"Strike a balance\" is idiomatic.", "struck a balance"),
    (False, "They hit a balance between growth and risk control.", "FALSE. The idiom is \"strike a balance,\" not \"hit a balance.\"", "hit a balance"),
    (True, "The report sheds light on the causes of the shortfall.", "TRUE. \"Shed light on\" is correct.", "sheds light on"),
    (False, "The report throws light about the causes of the shortfall.", "FALSE. The idiom is \"shed/throw light on,\" not \"throw light about.\"", "throws light about"),
    (True, "Demand for the product has risen sharply this year.", "TRUE. \"Rise sharply\" is a natural collocation.", "risen sharply"),
    (False, "Demand for the product has raised sharply this year.", "FALSE. Intransitive increase uses \"risen,\" not \"raised.\"", "raised sharply"),
    (True, "The CEO issued a statement denying the rumours.", "TRUE. \"Issue a statement\" is standard.", "issued a statement"),
    (False, "The CEO released a statement denying the rumours, which is never acceptable wording.", "FALSE. \"Release a statement\" is also acceptable; the claim that it is never acceptable is wrong — treat as False for the meta-claim. Actually mark sentence about usage: wait — simplify."),
]

# Fix the broken last collocation item - remove meta nonsense
COLLOCATIONS = [c for c in COLLOCATIONS if "never acceptable" not in c[1]]
COLLOCATIONS += [
    (False, "The CEO emitted a statement denying the rumours.", "FALSE. We \"issue/release\" a statement, not \"emit\" one.", "emitted a statement"),
    (True, "The bank extended credit to several mid-sized firms.", "TRUE. \"Extend credit\" is a standard banking collocation.", "extended credit"),
    (False, "The bank stretched credit to several mid-sized firms.", "FALSE. The collocation is \"extend credit,\" not \"stretch credit.\"", "stretched credit"),
    (True, "Negotiators broke the deadlock after midnight.", "TRUE. \"Break a deadlock\" is idiomatic.", "broke the deadlock"),
    (False, "Negotiators cracked the deadlock after midnight.", "FALSE. The idiom is \"break a deadlock.\"", "cracked the deadlock"),
    (True, "The policy aims to curb inflation without stalling growth.", "TRUE. \"Curb inflation\" is a standard collocation.", "curb inflation"),
    (False, "The policy aims to brake inflation without stalling growth.", "FALSE. Prefer \"curb/contain inflation,\" not \"brake inflation.\"", "brake inflation"),
    (True, "She filed for bankruptcy after the subsidiary collapsed.", "TRUE. \"File for bankruptcy\" is correct legal-business English.", "filed for bankruptcy"),
    (False, "She applied for bankruptcy after the subsidiary collapsed.", "FALSE. The fixed phrase is \"file for bankruptcy.\"", "applied for bankruptcy"),
    (True, "The acquisition is subject to regulatory approval.", "TRUE. \"Subject to approval\" is standard.", "subject to regulatory approval"),
    (False, "The acquisition is submitted to regulatory approval.", "FALSE. Use \"subject to\" approval, not \"submitted to approval.\"", "submitted to regulatory approval"),
]

ACADEMIC = [
    (True, "\"Substantiate\" means to provide evidence in support of a claim.", "TRUE. Correct definition of \"substantiate.\"", "Substantiate"),
    (False, "\"Substantiate\" means to replace a solid argument with speculation.", "FALSE. \"Substantiate\" means to support with evidence, not to speculate.", "Substantiate"),
    (True, "\"Corroborate\" means to confirm or support with additional evidence.", "TRUE. Correct definition.", "Corroborate"),
    (False, "\"Corroborate\" means to contradict earlier findings.", "FALSE. Corroborate means confirm, not contradict.", "Corroborate"),
    (True, "\"Caveat\" refers to a warning or limiting condition attached to a statement.", "TRUE. Correct definition.", "Caveat"),
    (False, "\"Caveat\" refers to an unconditional guarantee of success.", "FALSE. A caveat is a warning/limitation, not a guarantee.", "Caveat"),
    (True, "\"Nullify\" means to make something legally or practically void.", "TRUE. Correct definition.", "Nullify"),
    (False, "\"Nullify\" means to strengthen the legal force of a contract.", "FALSE. Nullify means void, not strengthen.", "Nullify"),
    (True, "\"Allocate\" means to distribute resources for a particular purpose.", "TRUE. Correct definition.", "Allocate"),
    (False, "\"Allocate\" means to permanently discard unused resources.", "FALSE. Allocate means assign/distribute, not discard.", "Allocate"),
    (True, "\"Omit\" means to leave out or exclude something.", "TRUE. Correct definition.", "Omit"),
    (False, "\"Omit\" means to emphasise something repeatedly.", "FALSE. Omit means leave out.", "Omit"),
    (True, "\"Subsequent\" means coming after something in time.", "TRUE. Correct definition.", "Subsequent"),
    (False, "\"Subsequent\" means occurring before something else.", "FALSE. Subsequent means after, not before.", "Subsequent"),
    (True, "\"Prerequisite\" means something required before something else can happen.", "TRUE. Correct definition.", "Prerequisite"),
    (False, "\"Prerequisite\" means an optional extra after completion.", "FALSE. A prerequisite is required beforehand.", "Prerequisite"),
    (True, "\"Deem\" means to regard or consider in a specified way.", "TRUE. Correct definition.", "Deem"),
    (False, "\"Deem\" means to measure something with scientific instruments only.", "FALSE. Deem means consider/regard.", "Deem"),
    (True, "\"Alleviate\" means to make a problem less severe.", "TRUE. Correct definition.", "Alleviate"),
    (False, "\"Alleviate\" means to intensify a problem deliberately.", "FALSE. Alleviate means lessen severity.", "Alleviate"),
    (True, "\"Consolidate\" means to combine into a more coherent or stronger whole.", "TRUE. Correct definition.", "Consolidate"),
    (False, "\"Consolidate\" means to scatter resources across unrelated projects.", "FALSE. Consolidate means combine/strengthen, not scatter.", "Consolidate"),
    (True, "\"Inherent\" means existing as a permanent or essential characteristic.", "TRUE. Correct definition.", "Inherent"),
    (False, "\"Inherent\" means temporarily added from outside.", "FALSE. Inherent means built-in/essential, not external and temporary.", "Inherent"),
    (True, "\"Marginal\" can mean small or relatively unimportant in economic analysis.", "TRUE. Correct in academic/business usage.", "Marginal"),
    (False, "\"Marginal\" always means the absolute centre of importance.", "FALSE. Marginal often means small/peripheral, not central.", "Marginal"),
    (True, "\"Offset\" means to counterbalance the effect of something.", "TRUE. Correct definition.", "Offset"),
    (False, "\"Offset\" means to amplify an effect without counterbalance.", "FALSE. Offset means counterbalance.", "Offset"),
    (True, "\"Tentative\" means provisional and not yet definite.", "TRUE. Correct definition.", "Tentative"),
    (False, "\"Tentative\" means final and legally binding.", "FALSE. Tentative means provisional, not final.", "Tentative"),
    (True, "\"Unprecedented\" means never done or known before.", "TRUE. Correct definition.", "Unprecedented"),
    (False, "\"Unprecedented\" means routinely repeated every year.", "FALSE. Unprecedented means never before known.", "Unprecedented"),
    (True, "\"Ambiguous\" means open to more than one interpretation.", "TRUE. Correct definition.", "Ambiguous"),
    (False, "\"Ambiguous\" means completely clear and unmistakable.", "FALSE. Ambiguous means unclear/open to interpretation.", "Ambiguous"),
    (True, "\"Compel\" means to force or oblige someone to do something.", "TRUE. Correct definition.", "Compel"),
    (False, "\"Compel\" means to politely invite without obligation.", "FALSE. Compel implies force/obligation.", "Compel"),
    (True, "\"Discretion\" means the freedom to decide according to one's judgement.", "TRUE. Correct definition.", "Discretion"),
    (False, "\"Discretion\" means a legal duty with no room for judgement.", "FALSE. Discretion implies room for judgement.", "Discretion"),
    (True, "\"Incentive\" means something that motivates action.", "TRUE. Correct definition.", "Incentive"),
    (False, "\"Incentive\" means a penalty designed solely to punish.", "FALSE. An incentive motivates; a penalty punishes.", "Incentive"),
]

NEAR_SYNONYMS = [
    (True, "\"Sparse\" suggests thinly distributed items, while \"scarce\" emphasises insufficient supply relative to demand.", "TRUE. Accurate nuance distinction.", "Sparse"),
    (False, "\"Sparse\" and \"scarce\" are perfect synonyms with no difference in emphasis.", "FALSE. Sparse stresses thin distribution; scarce stresses shortage vs demand.", "Sparse"),
    (True, "\"Keen\" can mean eager or sharp, while \"eager\" focuses specifically on strong desire.", "TRUE. Accurate distinction.", "Keen"),
    (False, "\"Keen\" can never mean eager in standard English.", "FALSE. \"Keen to\" commonly means eager.", "Keen"),
    (True, "\"Assert\" means to state confidently, while \"allege\" often implies an unproven claim.", "TRUE. Accurate distinction.", "Assert"),
    (False, "\"Allege\" always means to prove a claim beyond doubt.", "FALSE. Allege typically introduces an unproven claim.", "Allege"),
    (True, "\"Refuse\" is a direct rejection, while \"decline\" is often more polite or formal.", "TRUE. Accurate register distinction.", "Refuse"),
    (False, "\"Decline\" is always ruder than \"refuse\".", "FALSE. Decline is typically more polite.", "Decline"),
    (True, "\"House\" is more general; \"household\" refers to the people living together as a unit.", "TRUE. Accurate distinction.", "household"),
    (False, "\"Household\" always means the physical building only, never the people.", "FALSE. Household usually means the people as an economic/social unit.", "Household"),
    (True, "\"Wage\" often refers to hourly/weekly pay; \"salary\" usually refers to fixed regular pay, often monthly/annual.", "TRUE. Accurate distinction.", "Wage"),
    (False, "\"Wage\" and \"salary\" are legally identical terms with no usage difference.", "FALSE. They differ in typical payment structure and usage.", "Wage"),
    (True, "\"Client\" often implies a professional service relationship; \"customer\" is broader for buyers of goods/services.", "TRUE. Accurate distinction.", "Client"),
    (False, "\"Client\" can never be used for professional services.", "FALSE. Client is standard for professional services.", "Client"),
    (True, "\"Strategy\" is a high-level plan; \"tactic\" is a specific action used to implement it.", "TRUE. Accurate distinction.", "Strategy"),
    (False, "\"Tactic\" is always broader and more abstract than \"strategy\".", "FALSE. Strategy is broader; tactics are specific actions.", "Tactic"),
    (True, "\"Risk\" is exposure to possible loss; \"uncertainty\" is lack of knowledge about outcomes.", "TRUE. Accurate economic nuance.", "Risk"),
    (False, "In careful usage, \"risk\" and \"uncertainty\" are always identical concepts.", "FALSE. Economics often distinguishes measurable risk from uncertainty.", "Risk"),
    (True, "\"Efficient\" means achieving results with little waste; \"effective\" means successfully producing the desired result.", "TRUE. Accurate distinction.", "Efficient"),
    (False, "\"Efficient\" always means the same as \"effective\" with no difference.", "FALSE. One can be effective but inefficient, and vice versa.", "Efficient"),
    (True, "\"Continual\" often means repeated frequently; \"continuous\" means without interruption.", "TRUE. Accurate distinction.", "Continual"),
    (False, "\"Continual\" and \"continuous\" are never distinguished in careful English.", "FALSE. Careful usage often distinguishes repeated vs uninterrupted.", "Continual"),
    (True, "\"Fewer\" is used with countable nouns; \"less\" with uncountable nouns in careful formal English.", "TRUE. Accurate distinction.", "Fewer"),
    (False, "\"Fewer\" should be used with uncountable nouns like \"information\".", "FALSE. Uncountables take \"less,\" not \"fewer\".", "Fewer"),
    (True, "\"Convince\" means to persuade someone that something is true; \"persuade\" often means to get someone to do something.", "TRUE. Accurate distinction (though overlap exists).", "Convince"),
    (False, "\"Persuade that\" is always preferred to \"convince that\" in every context.", "FALSE. \"Convince that\" is standard; persuade often takes an infinitive of action.", "Persuade"),
    (True, "\"Partly\" means to some extent; \"partially\" often stresses incompleteness of a whole.", "TRUE. Reasonable nuance distinction.", "Partly"),
    (False, "\"Partly\" and \"partially\" are banned from formal English entirely.", "FALSE. Both are acceptable in formal English.", "Partly"),
    (True, "\"Ability\" is general capacity; \"capability\" often stresses potential under conditions.", "TRUE. Reasonable nuance.", "Ability"),
    (False, "\"Capability\" can never refer to potential capacity.", "FALSE. Capability often denotes potential capacity.", "Capability"),
    (True, "\"Problem\" is general; \"issue\" is often used for a matter under discussion, sometimes more diplomatic.", "TRUE. Accurate register note.", "Issue"),
    (False, "\"Issue\" always means a magazine edition and never a matter for discussion.", "FALSE. \"Issue\" commonly means a matter under discussion.", "Issue"),
    (True, "\"Estimate\" is an approximate calculation; \"forecast\" projects a future value or event.", "TRUE. Accurate distinction.", "Estimate"),
    (False, "\"Forecast\" can only describe the past, never the future.", "FALSE. Forecasts concern the future.", "Forecast"),
    (True, "\"Audience\" typically hears/watches; \"readership\" refers to readers of a publication.", "TRUE. Accurate distinction.", "Audience"),
    (False, "\"Readership\" always means people watching a live speech.", "FALSE. Readership refers to readers.", "Readership"),
    (True, "\"Border\" is a dividing line; \"boundary\" can be physical or abstract (limits of a concept).", "TRUE. Accurate distinction.", "Boundary"),
    (False, "\"Boundary\" can never be used abstractly.", "FALSE. Boundaries of concepts/disciplines are common.", "Boundary"),
    (True, "\"Salary\" is typically fixed pay; \"remuneration\" is a broader formal term for total pay/rewards.", "TRUE. Accurate distinction.", "Remuneration"),
    (False, "\"Remuneration\" exclusively means unpaid voluntary work.", "FALSE. Remuneration means payment/reward for work.", "Remuneration"),
]

WORD_FORMATION = [
    (True, "The adjective form related to \"decide\" is \"decisive\" (able to decide quickly/effectively) or \"decided\".", "TRUE. Correct word-family note.", "decisive"),
    (False, "The only correct adjective from \"decide\" is \"decidely\".", "FALSE. \"Decidedly\" is an adverb; adjectives include decisive/decided.", "decidely"),
    (True, "\"Strength\" is the noun; \"strengthen\" is the verb; \"strong\" is the adjective.", "TRUE. Correct morphology.", "strengthen"),
    (False, "\"Strength\" is the verb form of \"strong\".", "FALSE. The verb is \"strengthen\"; \"strength\" is a noun.", "Strength"),
    (True, "\"Analysis\" is the noun; \"analyse\" (BrE) / \"analyze\" (AmE) is the verb; \"analytical\" is an adjective.", "TRUE. Correct word family.", "Analysis"),
    (False, "\"Analysis\" is the present-tense verb form.", "FALSE. Analysis is a noun.", "Analysis"),
    (True, "The opposite of \"legal\" can be \"illegal\"; the noun is \"legality\".", "TRUE. Correct affixation.", "illegal"),
    (False, "The standard opposite of \"legal\" is \"unlegal\".", "FALSE. The standard form is \"illegal,\" not \"unlegal\".", "unlegal"),
    (True, "\"Employ\" → \"employer\" (who employs), \"employee\" (who is employed), \"employment\" (noun).", "TRUE. Correct word family.", "employee"),
    (False, "\"Employer\" and \"employee\" are perfect synonyms.", "FALSE. Employer hires; employee is hired.", "Employer"),
    (True, "\"Predict\" → \"prediction\" (noun) → \"predictable\" (adjective) → \"unpredictable\" (negative).", "TRUE. Correct morphology.", "predictable"),
    (False, "The adjective from \"predict\" is always \"predictionful\".", "FALSE. The adjective is predictable, not predictionful.", "predictionful"),
    (True, "\"Compete\" → \"competition\" → \"competitive\" → \"competitor\".", "TRUE. Correct word family.", "competitive"),
    (False, "\"Competition\" is the adjective form of \"compete\".", "FALSE. Competition is a noun; competitive is the adjective.", "Competition"),
    (True, "Adding \"-ment\" often forms nouns from verbs (e.g., \"develop\" → \"development\").", "TRUE. Correct affix pattern.", "-ment"),
    (False, "Adding \"-ment\" always forms adjectives, never nouns.", "FALSE. -ment commonly forms nouns.", "-ment"),
    (True, "The prefix \"mis-\" often means wrongly (e.g., \"mislead\", \"misinterpret\").", "TRUE. Correct prefix meaning.", "mis-"),
    (False, "The prefix \"mis-\" always means \"again\".", "FALSE. \"Again\" is typically \"re-\"; \"mis-\" means wrongly.", "mis-"),
    (True, "\"Responsible\" (adjective) → \"responsibility\" (noun) → \"irresponsible\" (negative adjective).", "TRUE. Correct morphology.", "responsibility"),
    (False, "\"Responsibility\" is the adverb form of \"responsible\".", "FALSE. It is a noun; the adverb is \"responsibly\".", "Responsibility"),
    (True, "\"Economy\" → \"economic\" (relating to the economy) → \"economical\" (thrifty).", "TRUE. Correct distinction within the family.", "economical"),
    (False, "\"Economic\" and \"economical\" are always interchangeable.", "FALSE. Economic ≠ economical in careful usage.", "Economic"),
    (True, "\"Benefit\" (noun/verb) → \"beneficial\" (adjective).", "TRUE. Correct derivation.", "beneficial"),
    (False, "The adjective from \"benefit\" is \"beneficious\".", "FALSE. The standard adjective is beneficial.", "beneficious"),
    (True, "\"Conclude\" → \"conclusion\" → \"conclusive\" → \"inconclusive\".", "TRUE. Correct word family.", "conclusive"),
    (False, "\"Conclusion\" is an adjective meaning definitive.", "FALSE. Conclusion is a noun; conclusive is the adjective.", "Conclusion"),
    (True, "The suffix \"-able\" often means \"can be\" (e.g., \"measurable\", \"taxable\").", "TRUE. Correct suffix meaning.", "-able"),
    (False, "The suffix \"-able\" always means \"without\".", "FALSE. \"Without\" is often \"-less\"; \"-able\" means capable of being.", "-able"),
    (True, "\"Innovate\" → \"innovation\" → \"innovative\" → \"innovator\".", "TRUE. Correct morphology.", "innovative"),
    (False, "\"Innovation\" is the person who innovates.", "FALSE. The person is an innovator; innovation is the noun for the new idea/process.", "Innovation"),
    (True, "\"Stable\" → \"stability\" → \"stabilise/stabilize\" → \"unstable\".", "TRUE. Correct word family.", "stability"),
    (False, "\"Stability\" is the verb meaning to make stable.", "FALSE. The verb is stabilise; stability is a noun.", "Stability"),
    (True, "\"Prefer\" → \"preference\" → \"preferable\" → \"preferably\".", "TRUE. Correct morphology.", "preferable"),
    (False, "\"Preference\" is the comparative adverb of \"prefer\".", "FALSE. Preference is a noun; preferably is the adverb.", "Preference"),
    (True, "\"Produce\" → \"product\" / \"production\" → \"productive\" → \"productivity\".", "TRUE. Correct word family.", "productive"),
    (False, "\"Productivity\" is the past tense of \"produce\".", "FALSE. Productivity is a noun.", "Productivity"),
    (True, "The prefix \"over-\" can mean excessively (e.g., \"overestimate\", \"overstate\").", "TRUE. Correct prefix use.", "over-"),
    (False, "The prefix \"over-\" always means \"under\" or insufficient.", "FALSE. Over- often means excessively; under- means insufficient.", "over-"),
    (True, "\"Assess\" → \"assessment\" → \"assessable\".", "TRUE. Correct derivation.", "assessment"),
    (False, "\"Assessment\" is the person who assesses.", "FALSE. The person is an assessor; assessment is the noun for the act/result.", "Assessment"),
]


def pick_true_false(items: list, n_true: int, rng: random.Random):
    trues = [x for x in items if x[0] is True]
    falses = [x for x in items if x[0] is False]
    n_false = 5 - n_true
    # Allow reuse if pools are small
    t = [rng.choice(trues) for _ in range(n_true)] if trues else []
    f = [rng.choice(falses) for _ in range(n_false)] if falses else []
    # Prefer unique
    def unique_sample(pool, k):
        pool = pool[:]
        rng.shuffle(pool)
        if len(pool) >= k:
            return pool[:k]
        out = pool[:]
        while len(out) < k:
            out.append(rng.choice(pool))
        return out

    t = unique_sample(trues, n_true)
    f = unique_sample(falses, n_false)
    mixed = t + f
    rng.shuffle(mixed)
    return mixed


def confusable_items():
    items = []
    for w1, d1, w2, d2 in CONFUSABLES:
        items.append(
            (
                True,
                f'"{w1.capitalize()}" means {d1}, while "{w2}" means {d2}.',
                f'TRUE. Correctly distinguishes "{w1}" from "{w2}".',
                w1.capitalize(),
            )
        )
        items.append(
            (
                False,
                f'"{w1.capitalize()}" means {d2}, while "{w2}" means {d1}.',
                f'FALSE. Reversed — "{w1}" means {d1}; "{w2}" means {d2}.',
                w1.capitalize(),
            )
        )
    return items


def usage_as_items():
    out = []
    for word, ok, sent, expl, hl in USAGE_ITEMS:
        out.append((ok, f'"{sent}"', expl, hl))
    return out


def build_tasks(sub_id: str, sub_num: int, items: list, context: str, rng: random.Random):
    tasks = []
    used_sets = set()
    for n in range(1, 31):
        n_true = true_count_pattern(n - 1)
        # retry for uniqueness
        for _attempt in range(40):
            picked = pick_true_false(items, n_true, rng)
            key = tuple(s[1] for s in picked)
            if key not in used_sets:
                used_sets.add(key)
                break
        statements = [p[1] for p in picked]
        answer_key = [p[0] for p in picked]
        tactical = [p[2] for p in picked]
        highlights = [p[3] for p in picked]
        tasks.append(
            {
                "id": f"en-v-{sub_num}-{n:02d}",
                "case_id": f"ENG V.{sub_num}.{n:02d}",
                "title": f"Task {n}",
                "context": context,
                "statements": statements,
                "answer_key": answer_key,
                "tactical_explanations": tactical,
                "highlights": highlights,
                "difficulty_level": diff_for(n),
                "sort_order": n,
                "subsection": sub_id,
            }
        )
    return tasks


def main():
    rng = random.Random(42)
    all_tasks = []
    builders = [
        ("v.1", 1, confusable_items(), CTX_MEANING),
        ("v.2", 2, usage_as_items(), CTX_USAGE),
        ("v.3", 3, COLLOCATIONS, CTX_COLLOC),
        ("v.4", 4, ACADEMIC, CTX_BIZ),
        ("v.5", 5, NEAR_SYNONYMS, CTX_NEAR),
        ("v.6", 6, WORD_FORMATION, CTX_FORMAL),
    ]
    for sub_id, num, items, ctx in builders:
        all_tasks.extend(build_tasks(sub_id, num, items, ctx, rng))

    payload = {"subsections": SUBSECTIONS, "tasks": all_tasks}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    truths = sum(1 for t in all_tasks for a in t["answer_key"] if a)
    total = sum(len(t["answer_key"]) for t in all_tasks)
    print(f"Wrote {OUT} — {len(all_tasks)} tasks, true ratio={truths/total:.3f}")


if __name__ == "__main__":
    main()
