#!/usr/bin/env python3
"""
WU BBE English Grammar bank generator.
20 subsections × 30 tasks × 5 statements. Answers correct by template construction.
"""
from __future__ import annotations

import json
import random
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "english" / "grammar.json"

CTX = "Decide whether each sentence is grammatically correct as written."

SUBSECTIONS = [
    ("g.1", "Tenses & Aspect"),
    ("g.2", "Conditionals"),
    ("g.3", "Subject–Verb Agreement"),
    ("g.4", "Modals"),
    ("g.5", "Passive Voice"),
    ("g.6", "Relative Clauses"),
    ("g.7", "Gerunds vs Infinitives"),
    ("g.8", "Reported Speech"),
    ("g.9", "Articles & Determiners"),
    ("g.10", "Countable / Uncountable & Quantifiers"),
    ("g.11", "Comparatives & Superlatives"),
    ("g.12", "Linking Words"),
    ("g.13", "Parallel Structure"),
    ("g.14", "Formal Subjunctive"),
    ("g.15", "Negative Inversion"),
    ("g.16", "Participial Phrases"),
    ("g.17", "so / such / too / enough"),
    ("g.18", "Prepositions & Fixed Patterns"),
    ("g.19", "Indirect Questions & Word Order"),
    ("g.20", "Confusable Structures"),
]

ROLES = ["manager", "analyst", "director", "auditor", "consultant", "engineer", "regulator", "researcher"]
ORGS = ["the board", "the committee", "the firm", "the bank", "the agency", "the ministry", "the panel", "the council"]
NOUNS_PL = ["employees", "applicants", "investors", "suppliers", "clients", "reports", "proposals", "findings"]
NOUNS_SG = ["proposal", "report", "policy", "budget", "contract", "merger", "forecast", "audit"]


def difficulty(n: int) -> str:
    if n <= 6:
        return "1/5"
    if n <= 12:
        return "2/5"
    if n <= 18:
        return "3/5"
    if n <= 24:
        return "4/5"
    return "5/5"


def true_counts(i: int) -> int:
    # Mix 1–5 Trues per task (not a fixed overall 0.4–0.6 ratio target).
    return [1, 2, 3, 4, 5, 2, 3, 4, 1, 5, 2, 3, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 2, 3, 1, 4, 5, 3][i]


def item(ok: bool, sent: str, expl: str, hl: str):
    prefix = "TRUE. " if ok else "FALSE. "
    if not expl.startswith(("TRUE.", "FALSE.")):
        expl = prefix + expl
    return (ok, sent, expl, hl)


# Each topic returns a large list of (ok, sentence, explanation, highlight)
def gen_tenses(rng: random.Random) -> list:
    out = []
    for role in ROLES:
        out += [
            item(True, f"She has worked as a {role} here since 2019.", "Present perfect correctly pairs with \"since\" for a situation continuing to the present.", "has worked"),
            item(False, f"She has worked as a {role} here in 2019.", "A finished time expression (\"in 2019\") normally takes past simple, not present perfect.", "has worked"),
            item(True, f"By next March, the {role} will have completed the audit.", "Future perfect correctly expresses completion before a future point.", "will have completed"),
            item(False, f"By next March, the {role} will complete the audit already yesterday.", "\"Already yesterday\" clashes with a future time clause; the sentence is temporally incoherent.", "already yesterday"),
            item(True, f"While the team was reviewing the figures, the {role} called.", "Past continuous + past simple correctly frames a background action interrupted by a shorter event.", "was reviewing"),
            item(False, f"The {role} is knowing the answer to every question in the briefing.", "Stative \"know\" is not normally used in the continuous.", "is knowing"),
            item(True, f"They had already left when the {role} arrived.", "Past perfect correctly marks the earlier of two past events.", "had already left"),
            item(False, f"They already left when the {role} had arrived first.", "The time sequence is confused; the earlier event should take past perfect.", "had arrived first"),
        ]
    out += [
        item(True, "I have been waiting for the results all morning.", "Present perfect continuous correctly emphasises duration up to now.", "have been waiting"),
        item(False, "I am used to work long hours in this role.", "\"Be used to\" requires a gerund: \"used to working.\"", "used to work"),
        item(True, "I am used to working long hours in this role.", "\"Be used to\" + gerund is correct.", "used to working"),
        item(False, "She used to working in finance before she switched careers.", "\"Used to\" for past habit takes a base verb: \"used to work.\"", "used to working"),
        item(True, "She used to work in finance before she switched careers.", "Past habit with \"used to\" + base verb is correct.", "used to work"),
        item(True, "This is the first time I have seen such a sharp correction.", "\"This is the first time\" correctly takes present perfect.", "have seen"),
        item(False, "This is the first time I saw such a sharp correction.", "\"This is the first time\" requires present perfect, not past simple.", "I saw"),
    ]
    rng.shuffle(out)
    return out


def gen_conditionals(rng):
    out = []
    for org in ORGS:
        out += [
            item(True, f"If demand rises, {org} raises prices.", "Zero conditional: present simple in both clauses for a general truth.", "rises"),
            item(True, f"If the funding is approved, {org} will expand.", "First conditional: present simple + will.", "will expand"),
            item(False, f"If the funding is approved, {org} would expand next quarter for certain.", "Real future condition should take \"will,\" not \"would.\"", "would expand"),
            item(True, f"If {org} had more capital, it would invest earlier.", "Second conditional: past simple + would.", "would invest"),
            item(True, f"If {org} had invested earlier, it would have avoided the losses.", "Third conditional: past perfect + would have.", "would have avoided"),
            item(False, f"If {org} would have invested earlier, it would have avoided the losses.", "The if-clause should use past perfect, not \"would have.\"", "would have invested"),
            item(True, f"Had {org} invested earlier, it would have avoided the losses.", "Inverted third conditional is correct.", "Had"),
            item(False, f"Had {org} invested earlier, it will avoid the losses.", "Inverted third conditional requires \"would have,\" not \"will.\"", "will avoid"),
            item(True, f"If {org} had left earlier, it would be on schedule now.", "Valid mixed conditional: past cause → present result.", "would be"),
            item(False, f"If {org} knows the risks, it would have cancelled the deal yesterday.", "Present simple if-clause mismatched with third-conditional result.", "knows"),
        ]
    out += [
        item(True, "If I were you, I would accept the offer.", "Formal hypothetical \"were\" is correct.", "were"),
        item(False, "If I was you, I would accept the offer.", "In formal English, use \"were\" in this hypothetical.", "was"),
        item(False, "If it rains tomorrow, we would cancel the outdoor event.", "First-conditional if-clause needs \"will,\" not \"would,\" in the result.", "would cancel"),
        item(True, "If metals are heated sufficiently, they expand.", "Zero conditional for a scientific generalisation.", "expand"),
    ]
    rng.shuffle(out)
    return out


def gen_agreement(rng):
    out = []
    for pl in NOUNS_PL:
        sg_role = rng.choice(ROLES)
        out += [
            item(True, f"The number of {pl} has increased this year.", "\"The number of\" takes a singular verb.", "has increased"),
            item(False, f"The number of {pl} have increased this year.", "\"The number of\" takes singular \"has,\" not \"have.\"", "have increased"),
            item(True, f"A number of {pl} were unable to attend.", "\"A number of\" takes a plural verb.", "were"),
            item(False, f"A number of {pl} was unable to attend.", "\"A number of\" takes plural \"were,\" not \"was.\"", "was"),
            item(True, f"Each of the {pl} has submitted a form.", "\"Each of\" takes a singular verb.", "has submitted"),
            item(False, f"Each of the {pl} have submitted a form.", "\"Each of\" requires singular \"has.\"", "have submitted"),
            item(True, f"Neither the {sg_role} nor the {pl} were informed.", "With neither…nor, the verb agrees with the nearer (plural) subject.", "were"),
            item(False, f"Neither the {sg_role} nor the {pl} was informed.", "Nearer subject \"{pl}\" is plural — use \"were.\"", "was"),
            item(True, f"Either the {pl} or the {sg_role} is responsible.", "With either…or, the verb agrees with the nearer singular subject.", "is"),
            item(False, f"Either the {sg_role} or the {pl} is responsible.", "Nearer subject is plural — use \"are.\"", "is responsible"),
        ]
    out += [
        item(True, "There are several reasons for the delay.", "Plural complement requires \"there are.\"", "There are"),
        item(False, "There is several reasons for the delay.", "Plural \"reasons\" requires \"there are.\"", "There is"),
        item(True, "The committee, along with its advisors, was consulted.", "Parenthetical \"along with\" does not pluralise the singular subject.", "was"),
        item(False, "The proposal, along with several amendments, were rejected.", "Subject is singular \"proposal\" — use \"was.\"", "were"),
        item(True, "The data suggest a clear trend.", "In formal register, \"data\" is plural.", "suggest"),
        item(False, "The data suggests a clear trend in this formal report.", "Formal agreement treats \"data\" as plural: \"suggest.\"", "suggests"),
        item(True, "Every one of the reports has been reviewed.", "\"Every one of\" takes singular.", "has been"),
        item(False, "Every one of the reports have been reviewed.", "Use singular \"has been.\"", "have been"),
    ]
    rng.shuffle(out)
    return out


def gen_modals(rng):
    out = []
    samples = [
        (True, "Applicants should submit all documents before the deadline.", "\"Should\" correctly expresses strong recommendation/obligation.", "should"),
        (False, "The results might confirm the hypothesis beyond any possible doubt.", "\"Might\" is too weak to express certainty beyond doubt.", "might"),
        (True, "The delay may be due to several overlapping factors.", "\"May\" correctly expresses cautious possibility.", "may"),
        (False, "The policy could reduce costs in every scenario without exception.", "\"Could\" does not guarantee an unconditional outcome.", "could"),
        (True, "The storm may weaken before landfall.", "\"May\" correctly hedges possibility.", "may"),
        (True, "You need not attend the optional briefing.", "\"Need not\" correctly expresses absence of obligation.", "need not"),
        (False, "You must not to enter the restricted area.", "After \"must not,\" use the bare infinitive: \"must not enter.\"", "must not to"),
        (True, "They cannot have received the email yet.", "Modal perfect correctly expresses a deduction about the past.", "cannot have received"),
        (False, "They must have knew about the leak earlier.", "After \"must have,\" use the past participle: \"known.\"", "must have knew"),
        (True, "We ought to revise the forecast before publication.", "\"Ought to\" correctly expresses advisability.", "ought to"),
        (False, "We ought revise the forecast before publication.", "\"Ought\" requires \"to\" before the infinitive.", "ought revise"),
        (True, "The sample size is small, so conclusions must be drawn with caution.", "\"Must\" correctly marks a strong methodological requirement.", "must be drawn"),
        (False, "The forecast will likely be wrong for certain and without any doubt.", "\"Will likely\" hedges probability and clashes with \"for certain and without any doubt.\"", "will likely"),
        (True, "Employees must complete the training before their start date.", "\"Must\" correctly expresses a strict requirement.", "must"),
    ]
    for org in ORGS:
        samples += [
            (True, f"{org.capitalize()} should reconsider the timeline.", "\"Should\" correctly advises reconsideration.", "should"),
            (False, f"{org.capitalize()} can must approve the deal today.", "Two conflicting modals stacked ungrammatically.", "can must"),
            (True, f"The report may indicate an emerging trend.", "\"May\" correctly hedges.", "may"),
            (False, f"The report must indicate an emerging trend, though we have no evidence at all.", "\"Must\" for strong deduction clashes with \"no evidence.\"", "must indicate"),
        ]
    for ok, s, e, h in samples:
        out.append(item(ok, s, e, h))
    rng.shuffle(out)
    return out


def gen_passive(rng):
    out = []
    for n in NOUNS_SG:
        out += [
            item(True, f"The committee approved the {n}. → The {n} was approved by the committee.", "Meaning-preserving active→passive with agent retained.", "was approved"),
            item(True, f"Engineers designed the {n}. → The {n} was designed by engineers.", "Clean active→passive transformation.", "was designed"),
            item(False, f"The {n} was announced yesterday. → Someone announced the {n} yesterday, and we know exactly who.", "The passive names no agent; the active fabricates certainty about who.", "we know exactly who"),
            item(False, f"Mistakes were made during the {n} review. → The review made mistakes deliberately.", "Distorts agency and adds intent absent from the original.", "deliberately"),
            item(True, f"The regulator fined the firm. → The firm was fined by the regulator.", "Clean passive with agent retained.", "was fined"),
            item(False, f"The photograph was altered before publication. → The photograph altered itself before publication.", "Nonsensical reflexive; loses the implied human agent.", "altered itself"),
        ]
    out += [
        item(True, "The policy was introduced in 2020.", "Correct passive focusing on the policy.", "was introduced"),
        item(False, "The results were announced by the process itself intentionally.", "A process cannot intentionally announce results.", "process itself intentionally"),
        item(True, "Several discrepancies were identified by the auditors.", "Correct passive with agent.", "were identified"),
        item(False, "No conclusions can be drawn from this data. → This data prevents anyone from drawing conclusions deliberately.", "Adds intent and distorts the neutral modal passive.", "deliberately"),
    ]
    rng.shuffle(out)
    return out


def gen_relative(rng):
    out = [
        item(True, "The stadium, which was built in 1998, underwent renovations.", "Non-restrictive \"which\" with commas is correct.", "which"),
        item(False, "The recipe, that was passed down for generations, remains secret.", "\"That\" is not used in non-restrictive clauses with commas.", "that"),
        item(True, "The chef whose restaurant won an award trained in Lyon.", "\"Whose\" correctly marks possession.", "whose"),
        item(False, "The player who's performance improved most won the award.", "Need possessive \"whose,\" not \"who's.\"", "who's"),
        item(True, "The wine that pairs best with this dish is a dry white.", "Restrictive \"that\" is correct.", "that"),
        item(False, "The bakery, who opened last year, became popular.", "\"Who\" is for people; a bakery takes \"which.\"", "who"),
        item(False, "The referee, that made the call, later apologised.", "Non-restrictive clause about a person needs \"who,\" not \"that.\"", "that"),
        item(True, "The coach, whose tactics were criticised, later won.", "Possessive \"whose\" is correct.", "whose"),
        item(True, "The tournament that attracted the most spectators was held in the capital.", "Restrictive \"that\" is correct.", "that"),
        item(False, "It was the engineers whom identified the flaw.", "Subject relative needs \"who,\" not \"whom.\"", "whom"),
        item(True, "The investors who backed the start-up exited early.", "Restrictive \"who\" for people is correct.", "who"),
        item(False, "The policies which were updated recently it apply to all staff.", "Extra pronoun \"it\" breaks the relative clause.", "it apply"),
    ]
    for n in NOUNS_SG:
        out += [
            item(True, f"The {n} that the board approved was controversial.", "Restrictive \"that\" correctly defines the noun.", "that"),
            item(False, f"The {n}, that the board approved, was controversial.", "Non-restrictive clause should use \"which,\" not \"that.\"", "that"),
        ]
    rng.shuffle(out)
    return out


def gen_gerund_inf(rng):
    out = []
    verbs_gerund = [("avoid", "revealing"), ("enjoy", "reading"), ("consider", "raising"), ("recommend", "watching"), ("suggest", "postponing"), ("finish", "drafting"), ("admit", "making"), ("deny", "sharing")]
    verbs_inf = [("decide", "to postpone"), ("refuse", "to release"), ("promise", "to offer"), ("agree", "to extend"), ("expect", "to receive"), ("hope", "to finalise"), ("plan", "to expand"), ("afford", "to delay")]
    for v, comp in verbs_gerund:
        wrong = "to " + comp.rstrip("ing") + ("e" if not comp.endswith("ing") else "")
        # build wrong infinitive simply
        base = {"revealing": "to reveal", "reading": "to read", "raising": "to raise", "watching": "to watch", "postponing": "to postpone", "drafting": "to draft", "making": "to make", "sharing": "to share"}[comp]
        out += [
            item(True, f"They {v} {comp} the details before the launch.", f"\"{v}\" correctly takes a gerund.", comp),
            item(False, f"They {v} {base} the details before the launch.", f"\"{v}\" takes a gerund, not an infinitive.", base),
        ]
    for v, comp in verbs_inf:
        ger = comp.replace("to ", "") + ("ing" if not comp.endswith("e") else "ing")
        # map properly
        ger_map = {"to postpone": "postponing", "to release": "releasing", "to offer": "offering", "to extend": "extending", "to receive": "receiving", "to finalise": "finalising", "to expand": "expanding", "to delay": "delaying"}
        ger = ger_map[comp]
        out += [
            item(True, f"They {v} {comp} the timeline.", f"\"{v}\" correctly takes an infinitive.", comp),
            item(False, f"They {v} {ger} the timeline.", f"\"{v}\" takes an infinitive, not a gerund.", ger),
        ]
    out += [
        item(True, "She stopped to ask a question.", "Infinitive of purpose after \"stopped\" is grammatical (paused in order to ask).", "to ask"),
        item(True, "She stopped asking questions.", "Gerund after \"stopped\" correctly means she quit the activity.", "asking"),
        item(False, "The director avoided to reveal the ending.", "\"Avoid\" requires a gerund.", "to reveal"),
        item(False, "The producers refused releasing the soundtrack early.", "\"Refuse\" requires an infinitive.", "releasing"),
    ]
    rng.shuffle(out)
    return out


def gen_reported(rng):
    out = [
        item(True, 'Direct: "The train is delayed." → "She said the train was delayed."', "Present \"is\" correctly backshifts to \"was.\"", "was delayed"),
        item(False, 'Direct: "We will arrive by noon." → "He said they will arrive by noon."', "\"Will\" should backshift to \"would.\"", "will arrive"),
        item(True, 'Direct: "I have checked the schedule." → "She said she had checked the schedule."', "Present perfect correctly backshifts to past perfect.", "had checked"),
        item(False, 'Direct: "I can fix it today." → "He said he can fix it today."', "\"Can\" should backshift to \"could\" in reported speech.", "can fix"),
        item(True, 'Direct: "I am reviewing it now." → "He said he was reviewing it then."', "Tense and time marker both shift correctly.", "was reviewing"),
        item(True, 'Direct: "I resigned yesterday." → "He said he had resigned the day before."', "Past tense and \"yesterday\" shift correctly.", "the day before"),
        item(False, 'Direct: "I am not sure." → "She said she is not sure."', "\"Am\" should backshift to \"was.\"", "is not sure"),
        item(True, 'Direct: "This will change next year." → "She said it would change the following year."', "\"Will\"→\"would\" and \"next year\"→\"the following year.\"", "would change"),
        item(True, 'Direct: "We must finish by Friday." → "She said they must finish by Friday."', "\"Must\" may remain unchanged for present obligation.", "must finish"),
        item(False, 'Direct: "Where is the office?" → "He asked where was the office."', "Indirect questions use statement word order: \"where the office was.\"", "where was"),
        item(True, 'Direct: "Where is the office?" → "He asked where the office was."', "Correct embedded question word order.", "where the office was"),
        item(False, 'Direct: "Did you see the memo?" → "She asked did I see the memo."', "Reported yes/no questions need if/whether + statement order.", "did I see"),
    ]
    for role in ROLES[:6]:
        out += [
            item(True, f'The {role} said that the deadline had been moved.', "Past perfect in reported speech is coherent after a past reporting verb.", "had been moved"),
            item(False, f'The {role} said that the deadline will been moved.', "Ungrammatical modal + past participle stacking.", "will been"),
        ]
    rng.shuffle(out)
    return out


def gen_articles(rng):
    out = [
        item(True, "The exhibition features a rare collection of paintings.", "Indefinite article correctly introduces a non-specific singular countable.", "a rare"),
        item(False, "Museum announced a new wing yesterday.", "A specific known institution normally needs \"The museum.\"", "Museum announced"),
        item(False, "The gallery is closed on Mondays for the maintenance.", "General uncountable \"maintenance\" typically needs no article here.", "the maintenance"),
        item(True, "An artist whose work is featured will give a talk.", "\"An\" correctly precedes a vowel sound.", "An artist"),
        item(False, "The farmer relies on a irrigation system.", "\"Irrigation\" begins with a vowel sound — use \"an.\"", "a irrigation"),
        item(True, "Soil quality in the region has improved.", "Uncountable general noun correctly takes zero article.", "Soil quality"),
        item(False, "The cooperative distributes an equipment to farmers.", "\"Equipment\" is uncountable and cannot take \"an.\"", "an equipment"),
        item(True, "Rice remains the staple crop in the region.", "Zero article for the substance; definite article for the identified role.", "Rice remains"),
        item(False, "She studied the fine arts as a general subject at university last year only for the fun.", "Prefer zero article for the general subject \"fine arts\" in this sense; also \"for fun.\"", "the fine arts"),
        item(True, "She studied fine arts at a renowned university.", "Zero article for the general subject is correct.", "fine arts"),
        item(True, "The board approved the proposal unanimously.", "Definite articles correctly mark known referents.", "The board"),
        item(False, "A unemployment rate rose last month.", "Use \"An unemployment rate\" or better \"Unemployment/The unemployment rate.\"", "A unemployment"),
    ]
    for n in NOUNS_SG:
        out += [
            item(True, f"The {n} was rejected after a lengthy debate.", "Definite article for a known specific noun is correct.", f"The {n}"),
            item(False, f"A {n} were rejected after a lengthy debate.", "Singular \"a {n}\" cannot take plural \"were.\"", "were rejected"),
        ]
    rng.shuffle(out)
    return out


def gen_quantifiers(rng):
    out = [
        item(True, "There is little doubt about the outcome.", "Uncountable \"doubt\" with \"little\" takes singular \"is.\"", "little doubt"),
        item(False, "There are little doubt about the outcome.", "Uncountable \"doubt\" needs \"is,\" not \"are.\"", "are little"),
        item(True, "Many applicants submitted forms early.", "\"Many\" correctly quantifies a plural countable.", "Many"),
        item(False, "Much applicants submitted forms early.", "\"Much\" is for uncountables; use \"many.\"", "Much applicants"),
        item(True, "Few investors supported the hostile bid.", "\"Few\" correctly marks a small plural number.", "Few"),
        item(False, "Fewer information was available than expected.", "\"Information\" is uncountable — use \"less.\"", "Fewer information"),
        item(True, "Less information was available than expected.", "\"Less\" with uncountable \"information\" is correct.", "Less information"),
        item(True, "The amount of waste has decreased.", "\"Amount of\" with uncountable is correct.", "amount of"),
        item(False, "The amount of complaints has decreased.", "Prefer \"number of\" with countable \"complaints.\"", "amount of complaints"),
        item(True, "The number of complaints has decreased.", "\"Number of\" with countable + singular verb is correct.", "number of"),
        item(False, "There is many evidence supporting the claim.", "\"Evidence\" is uncountable; use \"much evidence\" / \"is.\"", "many evidence"),
        item(True, "There is much evidence supporting the claim.", "Uncountable \"evidence\" with \"much\" is correct.", "much evidence"),
        item(True, "Both proposals have merit.", "\"Both\" with plural verb is correct.", "Both"),
        item(False, "Both proposal have merit.", "\"Both\" requires a plural noun.", "Both proposal"),
        item(True, "All of the equipment is new.", "Uncountable \"equipment\" takes singular \"is.\"", "is new"),
        item(False, "All of the equipment are new.", "Uncountable \"equipment\" takes \"is.\"", "are new"),
    ]
    for pl in NOUNS_PL:
        out += [
            item(True, f"Several of the {pl} were incomplete.", "\"Several\" + plural verb is correct.", "were"),
            item(False, f"Much of the {pl} was incomplete.", f"\"{pl}\" is countable plural — prefer \"many of.\"", "Much of"),
        ]
    rng.shuffle(out)
    return out


def gen_comparatives(rng):
    out = [
        item(True, "This apartment is more spacious than the one we viewed.", "Multi-syllable comparative with \"more\" is correct.", "more spacious"),
        item(True, "It is the most affordable option among the properties.", "Correct superlative with \"most.\"", "most affordable"),
        item(False, "The new building is more taller than the older ones.", "Double comparative: use \"taller,\" not \"more taller.\"", "more taller"),
        item(False, "The renovated unit looks gooder than before.", "Irregular comparative of \"good\" is \"better.\"", "gooder"),
        item(True, "Fuel consumption is lower in the updated model.", "One-syllable comparative \"lower\" is correct.", "lower"),
        item(False, "Of all the vehicles, this one performed the worse.", "Superlative of \"bad\" is \"worst,\" not \"worse.\"", "the worse"),
        item(False, "This is the most fastest car the firm has produced.", "Double superlative: use \"the fastest.\"", "most fastest"),
        item(True, "The newer design is significantly lighter than its predecessor.", "Correct comparative \"lighter.\"", "lighter"),
        item(True, "Of the three neighbourhoods, this one has the least traffic noise.", "Correct superlative of inferiority.", "the least"),
        item(False, "She is more smarter than her colleague.", "Double comparative — use \"smarter.\"", "more smarter"),
        item(True, "This engine is more efficient than the previous model's.", "Correct \"more efficient.\"", "more efficient"),
        item(False, "He ran more better than anyone expected.", "Double comparative — use \"better.\"", "more better"),
        item(True, "The revised forecast is less optimistic than the original.", "Correct comparative of inferiority.", "less optimistic"),
        item(False, "This option is the less expensive of the ten available.", "For more than two, prefer \"least expensive.\"", "the less expensive"),
    ]
    rng.shuffle(out)
    return out


def gen_linking(rng):
    out = [
        item(True, "Despite the rising costs, the company expanded.", "\"Despite\" + noun phrase is correct.", "Despite"),
        item(False, "Despite of the rising costs, the company expanded.", "\"Despite\" is never followed by \"of.\"", "Despite of"),
        item(True, "In spite of the rising costs, the company expanded.", "\"In spite of\" + noun phrase is correct.", "In spite of"),
        item(True, "Although costs rose, the company expanded.", "\"Although\" correctly introduces a concessive clause.", "Although"),
        item(False, "Although the rising costs, the company expanded.", "\"Although\" needs a clause, not a bare noun phrase.", "Although the rising"),
        item(True, "Costs rose; however, the company expanded.", "\"However\" correctly links contrasting independent clauses.", "however"),
        item(False, "Costs rose, however the company expanded without any punctuation change needed ever.", "With \"however\" as a conjunctive adverb, a semicolon/period is preferred before it.", "however"),
        item(True, "Because of the delay, the launch slipped.", "\"Because of\" + noun is correct.", "Because of"),
        item(False, "Because the delay, the launch slipped.", "\"Because\" needs a clause: \"Because of the delay\" or \"Because there was a delay.\"", "Because the delay"),
        item(True, "The plan failed owing to insufficient demand.", "\"Owing to\" correctly introduces a reason.", "owing to"),
        item(False, "The plan failed owing insufficient demand.", "\"Owing\" requires \"to.\"", "owing insufficient"),
        item(True, "Whereas revenue rose, margins fell.", "\"Whereas\" correctly contrasts clauses.", "Whereas"),
        item(False, "Whereas rising revenue, margins fell.", "\"Whereas\" needs a full clause.", "Whereas rising"),
        item(True, "The deal was approved even though risks remained.", "\"Even though\" + clause is correct.", "even though"),
        item(False, "The deal was approved even though the remaining risks.", "\"Even though\" needs a clause, not a noun phrase.", "even though the remaining"),
    ]
    rng.shuffle(out)
    return out


def gen_parallel(rng):
    out = [
        item(True, "The report was thorough, well-organised, and persuasive.", "Parallel adjectives.", "thorough, well-organised, and persuasive"),
        item(False, "The proposal was both innovative and it saved money.", "\"Both…and\" must join matching structures.", "both innovative and it"),
        item(True, "The manager not only approved the budget but also extended the deadline.", "Parallel verb phrases with not only…but also.", "not only"),
        item(False, "Employees must arrive on time, complete tasks, and following protocols.", "List breaks parallel: need \"follow,\" not \"following.\"", "following"),
        item(False, "She enjoys hiking, swimming, and to cycle.", "Mixes gerunds with an infinitive.", "to cycle"),
        item(False, "The goal was to reduce costs, improving morale, and increase output.", "Infinitive series broken by a gerund.", "improving"),
        item(True, "Investors valued its stability, its growth, and its transparency.", "Parallel noun phrases.", "stability, its growth, and its transparency"),
        item(False, "The policy aims to protect consumers, encourage competition, and boosting innovation.", "Final item breaks the infinitive series.", "boosting"),
        item(True, "He is skilled at negotiating deals but weak in managing teams.", "Parallel adjective + preposition + gerund.", "skilled at negotiating"),
        item(False, "Not only she arrived late, but she also forgot the documents.", "Fronted \"not only\" needs inversion: \"Not only did she arrive.\"", "Not only she"),
        item(True, "Not only did she arrive late, but she also forgot the documents.", "Correct inversion and parallelism.", "Not only did"),
        item(True, "The training covers how to operate the machine, safety procedures, and how to report faults.", "Acceptable parallel \"how to\" framing around a noun phrase.", "how to operate"),
        item(False, "The committee's goal was reducing costs, to improve morale, and increase output.", "Mixed gerund/infinitive list.", "reducing costs, to improve"),
        item(True, "She likes reading reports and writing summaries.", "Parallel gerunds.", "reading reports and writing"),
    ]
    rng.shuffle(out)
    return out


def gen_subjunctive(rng):
    out = []
    triggers = [
        ("recommended that", "be reviewed", "is reviewed"),
        ("insisted that", "be finalised", "is finalised"),
        ("suggested that", "reconsider", "reconsiders"),
        ("demanded that", "pay", "pays"),
        ("requested that", "submit", "submits"),
        ("required that", "disclose", "discloses"),
        ("proposed that", "be postponed", "is postponed"),
    ]
    for org in ORGS:
        for trig, good, bad in triggers:
            out += [
                item(True, f"{org.capitalize()} {trig} the {rng.choice(NOUNS_SG)} {good} before the vote.", f"\"{trig}\" correctly triggers the formal subjunctive base form.", good),
                item(False, f"{org.capitalize()} {trig} the {rng.choice(NOUNS_SG)} {bad} before the vote.", f"\"{trig}\" requires the base form, not \"{bad}.\"", bad),
            ]
    out += [
        item(True, "It is essential that every applicant submit the form by Monday.", "\"It is essential that\" takes the base form \"submit.\"", "submit"),
        item(False, "It is essential that every applicant submits the form by Monday.", "Use base form \"submit,\" not \"submits.\"", "submits"),
        item(True, "It is imperative that the results be verified.", "Impersonal necessity triggers the subjunctive.", "be verified"),
        item(False, "It is crucial that the sample remains uncontaminated.", "Use base form \"remain.\"", "remains"),
        item(True, "It was recommended that the policy remain unchanged.", "Correct subjunctive after \"recommended that.\"", "remain"),
        item(False, "It was recommended that the policy remains unchanged.", "Use \"remain,\" not \"remains.\"", "remains"),
    ]
    rng.shuffle(out)
    return out


def gen_inversion(rng):
    out = [
        item(True, "No sooner had the meeting started than the alarm went off.", "\"No sooner…than\" correctly triggers inversion.", "No sooner had"),
        item(False, "Not only she arrived late, but she also forgot the files.", "Fronted \"not only\" requires inversion.", "Not only she"),
        item(True, "Hardly had the announcement been made when questions began.", "Correct inversion after \"hardly.\"", "Hardly had"),
        item(False, "Scarcely the project had begun before funding was cut.", "Requires \"Scarcely had the project begun.\"", "Scarcely the project"),
        item(True, "Under no circumstances should this information be disclosed.", "Correct inversion after negative adverbial.", "should this"),
        item(False, "Rarely we see such a dramatic shift.", "Requires \"Rarely do we see.\"", "Rarely we"),
        item(True, "Only after the audit was completed did the errors become apparent.", "Correct inversion in the main clause.", "did the errors"),
        item(True, "Little did the committee realise how controversial it would be.", "Correct inversion after \"little.\"", "Little did"),
        item(False, "Seldom the board meets without dissent.", "Requires \"Seldom does the board meet.\"", "Seldom the board"),
        item(True, "Not until the treaty was signed did hostilities end.", "Correct inversion after \"not until.\"", "did hostilities"),
        item(False, "Under no circumstances the court will permit delays.", "Requires \"will the court permit.\"", "the court will"),
        item(True, "Not only did the report highlight risks, but it also proposed solutions.", "Correct inversion and parallelism.", "Not only did"),
        item(False, "Never the company had faced such scrutiny.", "Requires \"Never had the company faced.\"", "Never the company"),
        item(True, "So great was the outcry that the policy was withdrawn.", "Correct emphatic inversion.", "So great was"),
        item(False, "No longer the firm relies on a single supplier.", "Requires \"No longer does the firm rely.\"", "No longer the firm"),
        item(True, "Gone are the days when one product could dominate.", "Correct fixed inverted structure.", "Gone are"),
    ]
    rng.shuffle(out)
    return out


def gen_participial(rng):
    out = [
        item(True, "Having reviewed the data, the analyst revised the forecast.", "Logical subject matches the participle.", "Having reviewed"),
        item(False, "Walking through the building, the fire alarm suddenly went off.", "Dangling modifier: the alarm was not walking.", "Walking through"),
        item(True, "Exhausted after the long shift, the nurse went straight home.", "Logical subject matches.", "Exhausted"),
        item(False, "Having been delayed by traffic, the meeting started without her.", "Dangling: the meeting was not delayed by traffic.", "Having been delayed"),
        item(True, "Reviewing the figures, the manager noticed a discrepancy.", "Logical subject matches.", "Reviewing"),
        item(False, "Concerned about the delay, the shipment was rerouted.", "Dangling: the shipment cannot be \"concerned.\"", "Concerned"),
        item(True, "Having missed the deadline, the applicant was disqualified.", "Logical subject matches.", "Having missed"),
        item(False, "Startled by the noise, the meeting was interrupted.", "Dangling: the meeting cannot be startled.", "Startled"),
        item(True, "Frustrated by the lack of progress, the engineer requested resources.", "Logical subject matches.", "Frustrated"),
        item(False, "Exhausted from the climb, the summit finally came into view.", "Dangling: the summit was not exhausted.", "Exhausted from"),
        item(True, "Having crossed the border, the travellers presented their passports.", "Logical subject matches.", "Having crossed"),
        item(True, "Delayed by the storm, the flight departed three hours late.", "The flight is a logical subject of \"delayed.\"", "Delayed by"),
        item(False, "Having analysed the data thoroughly, several inconsistencies were identified.", "Dangling: inconsistencies did not analyse the data.", "Having analysed"),
        item(False, "Having reviewed the plans, several safety concerns were raised.", "Dangling modifier.", "Having reviewed"),
        item(True, "Surprised by the weather change, the hikers turned back.", "Logical subject matches.", "Surprised"),
        item(True, "Despite facing obstacles, the team finished on time.", "Logical subject matches.", "Despite facing"),
    ]
    rng.shuffle(out)
    return out


def gen_so_such(rng):
    out = [
        item(True, "The results were so clear that no further test was needed.", "\"So\" + adjective + that-clause is correct.", "so clear"),
        item(False, "It was so a clear result that no further test was needed.", "Use \"such a clear result,\" not \"so a clear.\"", "so a clear"),
        item(True, "It was such a clear result that no further test was needed.", "\"Such a\" + adjective + noun is correct.", "such a"),
        item(True, "The sample is too small to support firm conclusions.", "\"Too\" + adjective + to-infinitive is correct.", "too small"),
        item(False, "The sample is enough small to support firm conclusions.", "Word order should be \"small enough.\"", "enough small"),
        item(True, "The sample is small enough to raise concerns.", "Adjective + enough is correct.", "small enough"),
        item(False, "She spoke so quickly speech that few followed.", "Malformed — use \"so quickly that\" or \"such quick speech that.\"", "so quickly speech"),
        item(True, "There was such demand that the venue expanded capacity.", "\"Such\" + uncountable noun is correct.", "such demand"),
        item(False, "There was so demand that the venue expanded capacity.", "Use \"such demand\" or \"so much demand.\"", "so demand"),
        item(True, "He is not experienced enough for this role.", "Correct \"enough\" placement after the adjective.", "experienced enough"),
        item(False, "He is not enough experienced for this role.", "\"Enough\" follows the adjective.", "enough experienced"),
        item(True, "The briefing was too technical for the audience.", "Correct \"too\" + adjective.", "too technical"),
        item(False, "The briefing was too much technical for the audience.", "Do not insert \"much\" before a single adjective here.", "too much technical"),
        item(True, "It was such an important meeting that everyone attended.", "Correct \"such an\" before vowel sound.", "such an"),
        item(False, "It was so an important meeting that everyone attended.", "Use \"such an,\" not \"so an.\"", "so an"),
    ]
    rng.shuffle(out)
    return out


def gen_prepositions(rng):
    out = [
        item(True, "Success depends on careful planning.", "\"Depend on\" is the correct dependency.", "depends on"),
        item(False, "Success depends of careful planning.", "Use \"depends on,\" not \"of.\"", "depends of"),
        item(True, "She is responsible for the budget.", "\"Responsible for\" is correct.", "responsible for"),
        item(False, "She is responsible of the budget.", "Use \"for,\" not \"of.\"", "responsible of"),
        item(True, "They are interested in the proposal.", "\"Interested in\" is correct.", "interested in"),
        item(False, "They are interested on the proposal.", "Use \"in,\" not \"on.\"", "interested on"),
        item(True, "The firm was accused of misleading investors.", "\"Accused of\" is correct.", "accused of"),
        item(False, "The firm was accused for misleading investors.", "Use \"of,\" not \"for.\"", "accused for"),
        item(True, "He insisted on seeing the raw data.", "\"Insist on\" + gerund is correct.", "insisted on"),
        item(False, "He insisted to see the raw data.", "Use \"insist on seeing,\" not \"insist to see.\"", "insisted to"),
        item(True, "The outcome differs from last year's.", "\"Differ from\" is correct.", "differs from"),
        item(False, "The outcome differs of last year's.", "Use \"from,\" not \"of.\"", "differs of"),
        item(True, "We apologised for the delay.", "\"Apologise for\" is correct.", "apologised for"),
        item(False, "We apologised about the delay in this exact wording only.", "Prefer \"apologise for\" the delay.", "apologised about"),
        item(True, "The report focuses on cost control.", "\"Focus on\" is correct.", "focuses on"),
        item(False, "The report focuses to cost control.", "Use \"on,\" not \"to.\"", "focuses to"),
        item(True, "She participated in the workshop.", "\"Participate in\" is correct.", "participated in"),
        item(False, "She participated at the workshop as the only possible preposition ever.", "Standard collocation is \"participate in.\"", "participated at"),
        item(True, "They objected to the clause.", "\"Object to\" is correct.", "objected to"),
        item(False, "They objected against the clause.", "Use \"object to.\"", "objected against"),
    ]
    # clean a couple awkward falses
    out = [x for x in out if "only possible preposition ever" not in x[1] and "exact wording only" not in x[1]]
    out += [
        item(False, "We apologised about the delay.", "Prefer \"apologise for\" the delay in careful usage.", "apologised about"),
        item(False, "She participated at the workshop.", "Standard collocation is \"participate in.\"", "participated at"),
    ]
    rng.shuffle(out)
    return out


def gen_indirect(rng):
    out = [
        item(True, "I wonder where he is.", "Embedded question uses statement word order.", "where he is"),
        item(False, "I wonder where is he.", "Do not invert in embedded questions.", "where is he"),
        item(True, "Could you tell me what time the meeting starts?", "Polite embedded question with statement order.", "what time the meeting starts"),
        item(False, "Could you tell me what time does the meeting start?", "Auxiliary inversion is wrong inside the embedded clause.", "does the meeting"),
        item(True, "She asked whether the figures were final.", "\"Whether\" correctly introduces a yes/no embedded question.", "whether"),
        item(False, "She asked whether were the figures final.", "Wrong inversion after \"whether.\"", "whether were"),
        item(True, "Do you know if the report has been filed?", "Correct embedded yes/no question.", "if the report"),
        item(False, "Do you know if has the report been filed?", "Wrong inversion after \"if.\"", "if has"),
        item(True, "The question is how the firm will respond.", "Statement order after \"how.\"", "how the firm will"),
        item(False, "The question is how will the firm respond?", "Avoid inversion in the embedded clause.", "how will the firm"),
        item(True, "I am not sure what caused the outage.", "Correct embedded wh-clause.", "what caused"),
        item(False, "I am not sure what did cause the outage in forced inversion.", "Unnecessary \"did\" inversion in an embedded clause.", "what did cause"),
        item(True, "Please explain why costs rose.", "Correct embedded why-clause.", "why costs rose"),
        item(False, "Please explain why did costs rise.", "No inversion after \"why\" in an embedded statement.", "why did"),
        item(True, "They could not decide which option was safer.", "Correct embedded choice question.", "which option was"),
        item(False, "They could not decide which option was it safer.", "Extra pronoun \"it\" breaks the clause.", "was it safer"),
    ]
    out = [x for x in out if "forced inversion" not in x[1]]
    out.append(item(False, "I am not sure what did cause the outage.", "Unnecessary \"did\" in an embedded wh-clause.", "what did cause"))
    rng.shuffle(out)
    return out


def gen_confusable(rng):
    cleaned = [
        item(True, "Whoever is responsible should acknowledge the error.", "\"Whoever\" as subject of the subordinate clause is correct.", "Whoever"),
        item(True, "Give the files to whoever asks for them.", "Subject of \"asks\" is \"whoever.\"", "whoever asks"),
        item(False, "Give the prize to whomever finishes first.", "Subject of \"finishes\" should be \"whoever.\"", "whomever finishes"),
        item(True, "The manager, whose advice we trust, approved the plan.", "Possessive \"whose\" is correct.", "whose"),
        item(False, "The manager, who's advice we trust, approved the plan.", "Need \"whose,\" not \"who's.\"", "who's"),
        item(True, "Interest rates affect investment decisions.", "\"Affect\" as verb meaning \"influence\" is correct.", "affect"),
        item(False, "The new rule will effect investment decisions.", "For \"influence,\" use \"affect,\" not \"effect.\"", "will effect"),
        item(True, "The policy will effect a change in reporting standards.", "\"Effect\" as verb meaning \"bring about\" is correct.", "effect a change"),
        item(True, "Compared with last year, sales improved.", "\"Compared with\" introducing a comparison is standard.", "Compared with"),
        item(True, "She is older than I am.", "Full comparative clause is correct.", "than I am"),
        item(False, "She is older than me is.", "If \"is\" is kept, the pronoun should be \"I.\"", "than me is"),
        item(True, "Between you and me, the forecast is soft.", "Object pronoun after a preposition is correct.", "between you and me"),
        item(False, "Between you and I, the forecast is soft.", "After \"between,\" use object pronouns: \"me.\"", "Between you and I"),
        item(True, "Fewer errors were found this quarter.", "\"Fewer\" with countable plural is correct.", "Fewer"),
        item(False, "Less errors were found this quarter.", "Use \"fewer\" with countable \"errors.\"", "Less errors"),
        item(True, "The counsel advised caution.", "\"Counsel\" meaning advice/legal adviser fits.", "counsel"),
        item(True, "It is I who am responsible.", "Formal agreement after \"it is I who…\" is acceptable.", "It is I"),
        item(False, "Me and the director approved the memo.", "Subject pronoun should be \"The director and I.\"", "Me and the director"),
        item(True, "The director and I approved the memo.", "Correct subject pronouns.", "The director and I"),
        item(False, "Each of the candidates have their reasons.", "\"Each\" takes a singular verb: \"has.\"", "have their"),
        item(True, "Neither claim is convincing.", "Singular agreement with \"neither\" is correct.", "is"),
        item(False, "Neither claim are convincing.", "Use singular \"is\" with \"neither.\"", "are"),
        item(True, "The amount of work is manageable.", "\"Amount of\" with uncountable \"work\" is correct.", "amount of work"),
        item(False, "He did good on the exam according to careful formal usage.", "Prefer \"did well\" (adverb) in careful usage.", "did good"),
        item(True, "He did well on the exam.", "Adverb \"well\" correctly modifies \"did.\"", "did well"),
        item(False, "Irregardless of the cost, they proceeded.", "Non-standard — use \"regardless.\"", "Irregardless"),
        item(True, "Regardless of the cost, they proceeded.", "Standard form \"regardless\" is correct.", "Regardless"),
    ]
    cleaned += [
        item(True, "The criteria are clear.", "\"Criteria\" is plural in formal usage.", "are"),
        item(False, "The criteria is clear.", "Prefer plural \"are\" with \"criteria\" in formal usage.", "is clear"),
        item(True, "This phenomenon is rare.", "Singular \"phenomenon\" is correct.", "phenomenon"),
        item(False, "These phenomenon are rare.", "Plural form is \"phenomena.\"", "These phenomenon"),
    ]
    rng.shuffle(cleaned)
    return cleaned


GENERATORS = {
    "g.1": gen_tenses,
    "g.2": gen_conditionals,
    "g.3": gen_agreement,
    "g.4": gen_modals,
    "g.5": gen_passive,
    "g.6": gen_relative,
    "g.7": gen_gerund_inf,
    "g.8": gen_reported,
    "g.9": gen_articles,
    "g.10": gen_quantifiers,
    "g.11": gen_comparatives,
    "g.12": gen_linking,
    "g.13": gen_parallel,
    "g.14": gen_subjunctive,
    "g.15": gen_inversion,
    "g.16": gen_participial,
    "g.17": gen_so_such,
    "g.18": gen_prepositions,
    "g.19": gen_indirect,
    "g.20": gen_confusable,
}


def build_subsection(sub_id: str, sub_num: int, title: str, rng: random.Random):
    pool = GENERATORS[sub_id](rng)
    # ensure pool large enough by cycling
    if len(pool) < 160:
        pool = pool * (1 + 160 // max(len(pool), 1))
    rng.shuffle(pool)
    tasks = []
    used = set()
    cursor = 0
    for n in range(1, 31):
        n_true = true_counts(n - 1)
        picked = []
        guard = 0
        trues = []
        falses = []
        # pull from rotating pool
        while len(trues) < n_true or len(falses) < 5 - n_true:
            it = pool[cursor % len(pool)]
            cursor += 1
            guard += 1
            if guard > 2000:
                break
            if it[0] and len(trues) < n_true:
                if it[1] not in {x[1] for x in trues}:
                    trues.append(it)
            elif (not it[0]) and len(falses) < 5 - n_true:
                if it[1] not in {x[1] for x in falses}:
                    falses.append(it)
        picked = trues + falses
        rng.shuffle(picked)
        key = tuple(p[1] for p in picked)
        if key in used:
            # reshuffle once
            rng.shuffle(picked)
            key = tuple(p[1] for p in picked)
        used.add(key)
        # pad if short
        while len(picked) < 5:
            picked.append(pool[cursor % len(pool)])
            cursor += 1
        picked = picked[:5]
        tasks.append(
            {
                "id": f"en-g-{sub_num}-{n:02d}",
                "case_id": f"ENG G.{sub_num}.{n:02d}",
                "title": f"Task {n}",
                "context": CTX,
                "statements": [p[1] for p in picked],
                "answer_key": [p[0] for p in picked],
                "tactical_explanations": [p[2] for p in picked],
                "highlights": [p[3] for p in picked],
                "difficulty_level": difficulty(n),
                "sort_order": n,
                "subsection": sub_id,
            }
        )
    return tasks


def audit(payload: dict) -> None:
    subs = payload["subsections"]
    tasks = payload["tasks"]
    assert len(subs) == 20, len(subs)
    by = {}
    for t in tasks:
        by.setdefault(t["subsection"], []).append(t)
    assert len(by) == 20
    truths = 0
    total = 0
    ids = set()
    for sid, ts in by.items():
        assert len(ts) == 30, (sid, len(ts))
        for t in ts:
            assert t["id"] not in ids
            ids.add(t["id"])
            assert len(t["statements"]) == 5
            assert len(t["answer_key"]) == 5
            assert len(t["tactical_explanations"]) == 5
            assert len(t["highlights"]) == 5
            n = t["sort_order"]
            assert t["difficulty_level"] == difficulty(n)
            for a, e in zip(t["answer_key"], t["tactical_explanations"]):
                if a:
                    assert e.startswith("TRUE."), e[:40]
                else:
                    assert e.startswith("FALSE."), e[:40]
            truths += sum(1 for a in t["answer_key"] if a)
            total += 5
    ratio = truths / total
    # Per-task True counts must be in 1..5; overall ratio is informative only.
    counts = {}
    for t in tasks:
        k = sum(1 for a in t["answer_key"] if a)
        assert 1 <= k <= 5, (t["id"], k)
        counts[k] = counts.get(k, 0) + 1
    assert set(counts) >= {1, 2, 3, 4, 5}, counts
    print(f"AUDIT OK — {len(tasks)} tasks, true-count dist={dict(sorted(counts.items()))}, overall true ratio={ratio:.3f}")


def main():
    rng = random.Random(99)
    all_tasks = []
    subsections = []
    for i, (sid, title) in enumerate(SUBSECTIONS, start=1):
        subsections.append({"id": sid, "title": title})
        all_tasks.extend(build_subsection(sid, i, title, rng))
    payload = {"subsections": subsections, "tasks": all_tasks}
    audit(payload)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
