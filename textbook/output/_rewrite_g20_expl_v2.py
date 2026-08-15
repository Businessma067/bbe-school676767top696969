# -*- coding: utf-8 -*-
"""Rewrite g.20 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
LETTERS = "ABCDE"


def fmt(letter: str, stmt: str, body: str, tip_or_trap: str | None, closing: str) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if tip_or_trap:
        parts += ["", tip_or_trap.strip()]
    parts += ["", closing.strip()]
    return "\n".join(parts) + "\n"


# Each task: list of 5 tuples (body, tip_or_trap|None, closing)
# tip_or_trap includes the **Tip:** / **Trap:** label when present.

REWRITE: dict[str, list[tuple[str, str | None, str]]] = {
    "en-g-20-01": [
        (
            "Whoever is the subject of finds inside the relative clause, so the nominative form is required. "
            "The preposition to governs the whole clause, not a lone object pronoun right after it. "
            "Read the clause on its own: whoever finds it — that is clearly a subject slot.",
            "**Tip:** Ignore the preposition; judge case inside the clause.",
            "So the statement holds: whoever correctly fills the subject slot after to.",
        ),
        (
            "Who's expands only to who is or who has, and neither fits before garden. "
            "Possession before a noun is marked with whose: whose garden. "
            "If the expansion test fails, the form cannot be a contraction.",
            "**Trap:** Who's looks like a neat possessive but collapses under expansion — examiners count on that.",
            'So the statement is false: repair to "The neighbour, whose garden we borrowed tools from, waved hello."',
        ),
        (
            "Affect is the verb meaning influence, and that is exactly what late nights do to concentration. "
            "Effect as a noun would need a different frame such as have an effect on…. "
            "Here the finite verb slot wants affect.",
            None,
            "So the statement holds: affect correctly names the influence on concentration.",
        ),
        (
            "After the preposition between, both pronouns must be object case. "
            "Between you and I is a familiar hypercorrection; the careful form is Between you and me. "
            "Strip you and — nobody would say between I.",
            "**Trap:** Polished between you and I still fails the object-case test.",
            'So the statement is false: repair to "Between you and me, the reunion dinner felt awkward."',
        ),
        (
            "Guests are a countable plural, so fewer is the careful choice. "
            "Less typically pairs with mass nouns such as less sugar or less time. "
            "Headcount plurals take fewer in formal exam English.",
            None,
            "So the statement holds: fewer correctly pairs with countable guests.",
        ),
    ],
    "en-g-20-02": [
        (
            "Whomever looks formal after to, but the relative is the subject of arrives. "
            "Subjects need whoever: whoever arrives at the gate first. "
            "Find the verb in the clause; if the wh-word does the action, choose whoever.",
            "**Trap:** Object-looking whomever after a preposition is a classic false formal cue.",
            'So the statement is false: repair to "Give the spare ticket to whoever arrives at the gate first."',
        ),
        (
            "Whose correctly marks possession before whistle: the coach's whistle. "
            "Who's would mean who is or who has and would not fit before a noun of possession. "
            "Whose works for people and things in formal English.",
            None,
            "So the statement holds: whose correctly marks the coach's possession of the whistle.",
        ),
        (
            "The meaning is influence on energy after lunch, so you need the verb affect. "
            "Will effect would mean bring about, which does not fit your energy as the direct object here. "
            "Reserve verb effect for bring about or cause to happen.",
            "**Trap:** Effect after will looks lofty but mismatches influence meaning.",
            'So the statement is false: repair to "Too much sugar will affect your energy after lunch."',
        ),
        (
            "Object pronouns after between are correct: you and me. "
            "Between you and I is the hypercorrection this line carefully avoids. "
            "Formal speech still uses me here.",
            None,
            "So the statement holds: between you and me keeps both pronouns in object case.",
        ),
        (
            "Criteria is a plural Latin form, so it needs a plural verb. "
            "The selection criteria is must become are printed. "
            "The singular form is criterion.",
            "**Trap:** Singular is with plural criteria is a frequent Latin-loan slip.",
            'So the statement is false: repair to "The selection criteria are printed on the club noticeboard."',
        ),
    ],
    "en-g-20-03": [
        (
            "Whoever correctly acts as the subject of finishes at the head of the sentence. "
            "No outer preposition tempts you toward whomever here. "
            "Start-of-sentence subject slots almost always need whoever.",
            None,
            "So the statement holds: whoever rightly heads the subject clause.",
        ),
        (
            "Who's expands cleanly to who is before responsible. "
            "That is exactly when the contraction is allowed. "
            "Always run the expansion test before you accept who's.",
            None,
            "So the statement holds: who's equals who is in this question.",
        ),
        (
            "Verb effect meaning bring about is correct with a change. "
            "Effect a change, reform, or improvement is the rare but valid formal pattern. "
            "This is not the everyday influence use of affect.",
            "**Tip:** Effect a change/reform is the one frame where verb effect is intentional.",
            "So the statement holds: effect correctly means bring about a change.",
        ),
        (
            "Messages are countable items, so Less messages is wrong. "
            "Repair to Fewer messages were left…. "
            "If you can count the noun one by one, prefer fewer.",
            "**Trap:** Less before a plural count noun is a mass/count mix-up exams love.",
            'So the statement is false: repair to "Fewer messages were left on the noticeboard this week."',
        ),
        (
            "Plural criteria correctly takes are. "
            "The line models the agreement pattern examiners expect. "
            "Formal exam English keeps criteria plural.",
            None,
            "So the statement holds: plural criteria agrees with are.",
        ),
    ],
    "en-g-20-04": [
        (
            "Whomever is the object of nominates: the class nominates someone. "
            "When another subject does the verb, the wh-word is traditionally an object. "
            "Invite whomever the class nominates is the careful traditional form.",
            "**Tip:** If another subject does the verb, the wh-word is often the object.",
            "So the statement holds: whomever correctly fills the object slot of nominates.",
        ),
        (
            "Possession is needed before notes, so write whose notes. "
            "Who's notes never expands to a sensible who is notes. "
            "A noun right after the wh-form almost always signals whose.",
            "**Trap:** Who's before a noun looks possessive but fails the expansion test.",
            'So the statement is false: repair to "Please name the classmate whose notes we borrowed."',
        ),
        (
            "Cold weather influences joint pain, and the verb for that is affect. "
            "Ask whether something influences something else — if yes, choose affect. "
            "No bring-about result noun is in play here.",
            None,
            "So the statement holds: affect correctly names the influence on joint pain.",
        ),
        (
            "Object pronouns after between are required: you and me. "
            "Everyday English still marks between you and I wrong. "
            "Keep both coordinated pronouns in object case.",
            None,
            "So the statement holds: between you and me uses correct object case.",
        ),
        (
            "Luggage is uncountable in this everyday sense, so less is appropriate. "
            "Mass nouns such as time, luggage, and advice take less. "
            "Fewer luggage would be the trap flip of this item.",
            None,
            "So the statement holds: less correctly pairs with mass luggage.",
        ),
    ],
    "en-g-20-05": [
        (
            "Is needs a subject form: whoever is at the front desk. "
            "Whomever after to is a false formal signal when the next verb is finite be. "
            "To + whomever + is is almost always wrong.",
            "**Trap:** Formal-looking whomever after to collapses when is follows immediately.",
            'So the statement is false: repair to "Forward the parcel to whoever is at the front desk."',
        ),
        (
            "Possessive whose correctly links the café to windows. "
            "Whose is fine with inanimate subjects in formal prose. "
            "Who's would fail the expansion test before windows.",
            None,
            "So the statement holds: whose correctly marks possession for the café's windows.",
        ),
        (
            "The meaning is influence on the baby's nap, so write will affect. "
            "There is no a change or result object to license verb effect. "
            "If nothing is being brought about, prefer affect.",
            "**Trap:** Will effect sounds deliberate but only fits bring-about objects.",
            'So the statement is false: repair to "Loud music will affect the baby\'s nap downstairs."',
        ),
        (
            "The object of between must be me: between my sister and me. "
            "Sister and I is subject-case hypercorrection after a preposition. "
            "The same rule applies as between you and me.",
            "**Trap:** Coordinated I after between looks elegant but is still wrong.",
            'So the statement is false: repair to "This argument stays between my sister and me."',
        ),
        (
            "Singular criterion correctly pairs with is. "
            "One key item forces the singular Latin form. "
            "One item → criterion; several → criteria.",
            None,
            "So the statement holds: singular criterion agrees with is.",
        ),
    ],
    "en-g-20-06": [
        (
            "Whoever is widely accepted as the object of recommends and is the safer exam default when case is contested. "
            "Markers rarely accept whomever as a subject; they often accept whoever as an object. "
            "Ask whoever the tutor recommends reads cleanly in modern exam English.",
            "**Tip:** Prefer whoever in contested object slots unless traditional object case is unmistakable.",
            "So the statement holds: whoever is the safe object form after recommends.",
        ),
        (
            "Who's equals who has before the past participle been. "
            "Who's been watering… is a standard perfect contraction. "
            "Expansion: who has been.",
            None,
            "So the statement holds: who's correctly contracts who has before been.",
        ),
        (
            "Noun effect meaning result or impact is correct after little. "
            "Article or quantifier + effect usually signals the noun, not the verb. "
            "Had little effect on… is the classic frame.",
            None,
            "So the statement holds: effect as a noun correctly names the result.",
        ),
        (
            "Countable seats take fewer than: Fewer than twelve seats. "
            "Fewer than + number + plural noun is the careful form. "
            "Less than twelve seats is the common informal trap.",
            None,
            "So the statement holds: fewer than correctly counts the free seats.",
        ),
        (
            "Plural criteria needs were, not was. "
            "These criteria was written flips number against the plural head. "
            "Never pair criteria with a singular verb in formal answers.",
            "**Trap:** Was with these criteria is a textbook Latin-plural agreement miss.",
            'So the statement is false: repair to "These criteria were written after the rehearsal."',
        ),
    ],
    "en-g-20-07": [
        (
            "Whoever functions acceptably as the object of lists in modern exam English. "
            "Prefer whoever unless the object case is unmistakable and required. "
            "Assign… to whoever the rota lists as free is the safe mark-winning form.",
            None,
            "So the statement holds: whoever is the safer object form after lists.",
        ),
        (
            "Possession is needed — whose shoes, not who's. "
            "Who's expands to who is or who has and fails before shoes. "
            "Expand every who's before you accept it.",
            "**Trap:** Who's shoes looks neat but cannot mean who is shoes.",
            'So the statement is false: repair to "The runner whose shoes came untied lost several seconds."',
        ),
        (
            "Verb affect correctly means influence sleep after late spicy food. "
            "Subject influences object → affect. "
            "No bring-about result frame appears here.",
            None,
            "So the statement holds: affect correctly names the influence on sleep.",
        ),
        (
            "Volunteers are countable people, so use Fewer volunteers. "
            "Less volunteers is the headcount error examiners love. "
            "Headcount plurals take fewer.",
            "**Trap:** Less before a countable people plural is a classic fewer/less flip.",
            'So the statement is false: repair to "Fewer volunteers signed up for the clean-up."',
        ),
        (
            "Plural criteria correctly takes plural remain. "
            "Watch subject–verb number with Latin plurals. "
            "Remain is a clean plural partner for criteria.",
            None,
            "So the statement holds: remain correctly agrees with plural criteria.",
        ),
    ],
    "en-g-20-08": [
        (
            "Whomever is the object of choose: you choose someone. "
            "Subject you plus verb choose → object whomever. "
            "Congratulate whomever you choose is traditionally correct.",
            None,
            "So the statement holds: whomever correctly fills the object of choose.",
        ),
        (
            "Whose ovens correctly shows possession for a place. "
            "Whose + noun is the safe possessive pattern. "
            "Who's would not expand before ovens.",
            None,
            "So the statement holds: whose correctly marks the bakery's ovens.",
        ),
        (
            "Verb effect meaning bring about fits schedule changes. "
            "Effect + concrete result noun is the cue. "
            "Management intends to effect several… is intentional formal diction.",
            "**Tip:** Effect + concrete result noun licenses the bring-about verb.",
            "So the statement holds: effect correctly means bring about schedule changes.",
        ),
        (
            "Between you and me uses correct object pronouns. "
            "Hypercorrect I fails after prepositions. "
            "Discuss… only between you and me is clean.",
            None,
            "So the statement holds: between you and me keeps object case.",
        ),
        (
            "Delays are countable, so write fewer delays. "
            "Less delays treats a plural count noun as mass. "
            "Plural -s nouns almost always take fewer.",
            "**Trap:** Less before a countable -s plural is a reliable exam miss.",
            'So the statement is false: repair to "We noticed fewer delays on the morning bus route."',
        ),
    ],
    "en-g-20-09": [
        (
            "The subject of finishes must be whoever. "
            "Whomever finishes wrongly uses object case in a subject slot. "
            "A verb immediately after the wh-word usually signals subject case.",
            "**Trap:** Whomever before a finite verb is a polished-looking subject-case error.",
            'So the statement is false: repair to "Hand the microphone to whoever finishes speaking next."',
        ),
        (
            "Who's equals who is before attending. "
            "Progressive after who's means the contraction is fine. "
            "Tell me who's attending… expands cleanly.",
            None,
            "So the statement holds: who's correctly contracts who is before attending.",
        ),
        (
            "Verb affect correctly means influence her mood. "
            "Feelings and habits are typically affected, not effected. "
            "Did not affect is the right influence verb.",
            None,
            "So the statement holds: affect correctly names the influence on mood.",
        ),
        (
            "Use me — between the landlord and me. "
            "Coordinated pronouns keep the same case after between. "
            "Landlord and I is subject-case hypercorrection.",
            "**Trap:** I after between still fails even when the other noun sounds formal.",
            'So the statement is false: repair to "The dispute should stay between the landlord and me."',
        ),
        (
            "Singular criterion correctly takes singular carries. "
            "Each + singular noun reinforces criterion. "
            "Plural criteria would need carry or are, not carries.",
            None,
            "So the statement holds: each criterion agrees with singular carries.",
        ),
    ],
    "en-g-20-10": [
        (
            "Whoever is the subject of presents. "
            "Subject plus verb right after whoever is the clean pattern. "
            "Support will go to whoever presents… keeps case inside the clause.",
            None,
            "So the statement holds: whoever correctly acts as subject of presents.",
        ),
        (
            "Possession is required — whose suitcase. "
            "Who's suitcase cannot mean who is suitcase. "
            "A noun after the wh-form almost always means whose.",
            "**Trap:** Who's before suitcase fails expansion every time.",
            'So the statement is false: repair to "Name the cousin whose suitcase we found at the station."',
        ),
        (
            "Influence meaning needs may affect parents. "
            "May effect wrongly suggests bring about. "
            "An adverbial after the verb often follows affect, not effect.",
            "**Trap:** Effect for influence on people is a near-miss verb swap.",
            'So the statement is false: repair to "The new timetable may affect parents with early starts."',
        ),
        (
            "Countable sunny days take fewer. "
            "Calendar units in the plural prefer fewer in careful English. "
            "Fewer sunny days remain… is correct.",
            None,
            "So the statement holds: fewer correctly counts sunny days.",
        ),
        (
            "Plural criteria correctly takes have. "
            "Have, are, and were are the safe plural partners. "
            "The admission criteria have been tightened again reads clean.",
            None,
            "So the statement holds: have correctly agrees with plural criteria.",
        ),
    ],
    "en-g-20-11": [
        (
            "Whomever is the object of had invited, so object case is traditionally right. "
            "Past perfect clauses often bury the object — find who receives the action. "
            "The host had invited someone → whomever.",
            None,
            "So the statement holds: whomever correctly fills the object of had invited.",
        ),
        (
            "Non-defining whose chair correctly marks possession. "
            "Commas do not change the whose versus who's rule. "
            "The club, whose chair resigned… is a standard relative.",
            None,
            "So the statement holds: whose correctly marks the club's chair.",
        ),
        (
            "Verb affect correctly means influence outdoor matches. "
            "Weather and events affect plans and people. "
            "Can affect is the influence pattern.",
            None,
            "So the statement holds: affect correctly names weather's influence on matches.",
        ),
        (
            "All coordinated pronouns after between stay in object case; me is correct. "
            "Adding more nouns (and the rest of the team) does not license I. "
            "Between you and me… remains the core pattern.",
            None,
            "So the statement holds: me stays in object case even in a longer between-list.",
        ),
        (
            "Uncountable evidence takes less. "
            "Evidence, information, and research are mass nouns. "
            "Less evidence… is the careful mass pairing.",
            None,
            "So the statement holds: less correctly pairs with mass evidence.",
        ),
    ],
    "en-g-20-12": [
        (
            "The subject of meets requires whoever. "
            "Award… to whomever meets… puts object case in a subject slot. "
            "Target-meeting clauses are subject cases.",
            "**Trap:** Whomever before meets is the polished-looking subject trap after to.",
            'So the statement is false: repair to "Award the points to whoever meets the weekly target."',
        ),
        (
            "Ask whose signature, not who's (who is). "
            "A noun after the wh-word almost always means whose. "
            "Who's signature fails expansion.",
            "**Trap:** Who's signature looks possessive but expands to nonsense.",
            'So the statement is false: repair to "Whose signature appears on the permission slip?"',
        ),
        (
            "Verb effect meaning bring about fits a settlement. "
            "Effect + indefinite article + result noun is classic. "
            "Failed to effect an early settlement is intentional formal use.",
            "**Tip:** Effect + a + result noun is the licensed bring-about pattern.",
            "So the statement holds: effect correctly means bring about a settlement.",
        ),
        (
            "Countable applications prefer Fewer than forty applications. "
            "Exam English still prefers fewer with countable plurals after numbers. "
            "Less than forty applications is the trap form.",
            "**Trap:** Less than + number + countable plural remains informal for exams.",
            'So the statement is false: repair to "Fewer than forty applications arrived before noon."',
        ),
        (
            "Plural subject needs need — Several criteria need revision. "
            "Several plus a plural noun takes a plural verb. "
            "Needs wrongly treats criteria as singular.",
            "**Trap:** Singular needs with several criteria mismatches number.",
            'So the statement is false: repair to "Several criteria need revision before publication."',
        ),
    ],
    "en-g-20-13": [
        (
            "Whoever is the subject of can lock inside the nested clause. "
            "Case is decided in the innermost clause (you believe can…), not by to. "
            "Delegate… to whoever you believe can lock up… is correct.",
            "**Tip:** Case is decided in the innermost clause, not by the outer preposition.",
            "So the statement holds: whoever correctly subjects can lock inside the embed.",
        ),
        (
            "Possessive is needed — whose driveway. "
            "Driveway or garden after the wh-word means whose. "
            "Who's driveway fails who is driveway.",
            "**Trap:** Who's before driveway cannot expand to a coherent phrase.",
            'So the statement is false: repair to "A neighbour whose driveway floods after storms asked for help."',
        ),
        (
            "Verb affect correctly means influence how well I sleep. "
            "Subject influences object → affect. "
            "Bright screens affect… is the influence stem.",
            None,
            "So the statement holds: affect correctly names the influence on sleep quality.",
        ),
        (
            "Object pronoun me after between is correct. "
            "Between X and me is standard. "
            "Claimant and I would be the hypercorrection.",
            None,
            "So the statement holds: between the claimant and me uses object case.",
        ),
        (
            "Furniture is typically uncountable here → less furniture (or fewer pieces of furniture). "
            "Do not use fewer with a mass noun. "
            "Fewer furniture mismatches count grammar with a mass head.",
            "**Trap:** Fewer before mass furniture flips the usual count intuition.",
            'So the statement is false: repair to "We have less furniture than last year after the move."',
        ),
    ],
    "en-g-20-14": [
        (
            "Whomever is the object of shortlist. "
            "Mentors shortlist someone → object case. "
            "Offer… to whomever the mentors shortlist is traditionally correct.",
            None,
            "So the statement holds: whomever correctly fills the object of shortlist.",
        ),
        (
            "Whose hall correctly shows possession. "
            "Organisation or place + whose + noun is fine. "
            "The school whose hall was flooded… is standard.",
            None,
            "So the statement holds: whose correctly marks the school's hall.",
        ),
        (
            "Confidence is influenced → will affect audience confidence. "
            "Abstract reactions such as confidence or mood take affect. "
            "Will effect audience confidence wrongly uses bring-about.",
            "**Trap:** Effect before abstract reactions is a near-miss influence swap.",
            'So the statement is false: repair to "The announcement will affect audience confidence tomorrow."',
        ),
        (
            "Object case is required — between you and me. "
            "Until Friday does not change pronoun case. "
            "Keep this draft between you and I is the hypercorrection.",
            "**Trap:** A time adjunct after the phrase never licenses I after between.",
            'So the statement is false: repair to "Keep the draft between you and me until Friday."',
        ),
        (
            "Plural criteria correctly takes are applied. "
            "Passive voice still needs plural agreement. "
            "The scoring criteria are applied… is clean.",
            None,
            "So the statement holds: are applied agrees with plural criteria.",
        ),
    ],
    "en-g-20-15": [
        (
            "Whoever is the subject of has delivered. "
            "Perfect aspect does not change the case rule. "
            "Promote whoever has delivered… keeps subject case.",
            None,
            "So the statement holds: whoever correctly subjects has delivered.",
        ),
        (
            "Who's been equals who has been. "
            "Been after who's almost always means who has. "
            "Who's been responsible… passes expansion.",
            None,
            "So the statement holds: who's correctly contracts who has before been.",
        ),
        (
            "Influence meaning → beginning to affect my morning runs. "
            "Progressive frames usually host affect. "
            "To effect my morning runs is the wrong verb for influence.",
            "**Trap:** Effect inside a progressive influence frame is a subtle swap.",
            'So the statement is false: repair to "Late nights are beginning to affect my morning runs."',
        ),
        (
            "Countable discrepancies take fewer. "
            "Count nouns in samples prefer fewer. "
            "There were fewer discrepancies… is correct.",
            None,
            "So the statement holds: fewer correctly counts discrepancies.",
        ),
        (
            "Singular is criterion — This single criterion determines…. "
            "Single, one, or each before the noun forces criterion. "
            "This single criteria is a false plural.",
            "**Trap:** Criteria after single contradicts number with a familiar Latin form.",
            'So the statement is false: repair to "This single criterion determines eligibility on its own."',
        ),
    ],
    "en-g-20-16": [
        (
            "The subject of is appointed must be whoever. "
            "Passive is appointed still needs a subject form. "
            "Brief whomever is appointed hides a subject-case error.",
            "**Trap:** Whomever before passive is… looks formal but needs subject case.",
            'So the statement is false: repair to "We will brief whoever is appointed as interim captain."',
        ),
        (
            "Whose parcels correctly marks possession. "
            "Neighbour or person + whose is standard. "
            "A neighbour whose parcels arrived… is clean.",
            None,
            "So the statement holds: whose correctly marks the neighbour's parcels.",
        ),
        (
            "Verb effect meaning bring about fits improvements. "
            "Lasting or major + noun after effect is a good cue. "
            "Hopes to effect lasting improvements… is formal but right.",
            "**Tip:** Lasting/major result nouns often license verb effect.",
            "So the statement holds: effect correctly means bring about improvements.",
        ),
        (
            "Object pronoun me after between is correct. "
            "Keep organisers and me parallel — never I. "
            "Please keep the surprise between the organisers and me.",
            None,
            "So the statement holds: between the organisers and me uses object case.",
        ),
        (
            "Countable absences need fewer absences. "
            "Attendance counts are countable. "
            "Less absences is the mass/count flip.",
            "**Trap:** Less before countable absences flips fewer/less the wrong way.",
            'So the statement is false: repair to "Managers reported fewer absences after flexible hours began."',
        ),
    ],
    "en-g-20-17": [
        (
            "Whoever is acceptable as the object of shows; when object case is unclear, whoever remains the safer exam form. "
            "When object case is unclear, whoever rarely costs marks. "
            "Allocate… to whoever the roster shows… is the cautious choice.",
            "**Tip:** Prefer whoever in contested object slots unless object case is unmistakable.",
            "So the statement holds: whoever is the safer object form after shows.",
        ),
        (
            "Possessive whose remit is required. "
            "Remit, mandate, or role after the wh-word means whose. "
            "Who's remit fails expansion.",
            "**Trap:** Who's remit looks official but expands to who is remit.",
            'So the statement is false: repair to "Identify the officer whose remit covers weekend shifts."',
        ),
        (
            "Verb affect correctly means influence festival plans. "
            "Weather events affect outdoor schedules. "
            "Sudden storms quickly affect… is influence, not bring-about.",
            None,
            "So the statement holds: affect correctly names storms' influence on plans.",
        ),
        (
            "Between you and me is the correct object-case pair. "
            "At this stage is irrelevant to case. "
            "Time hedges never license I after between.",
            None,
            "So the statement holds: between you and me keeps object case despite the hedge.",
        ),
        (
            "Uncountable patience takes Less patience. "
            "Patience, advice, and information are mass nouns. "
            "Fewer patience flips the usual fewer/less intuition.",
            "**Trap:** Fewer before mass patience looks careful but mismatches mass grammar.",
            'So the statement is false: repair to "Less patience was left after the third delay."',
        ),
    ],
    "en-g-20-18": [
        (
            "Innermost clause — who should review — is subject case → whoever you think should review it. "
            "Ignore you think; case belongs to the embedded verb. "
            "Whomever you think should… wrongly object-cases a subject.",
            "**Trap:** Nested you think buries the real subject whoever under fake object case.",
            'So the statement is false: repair to "Send the draft to whoever you think should review it first."',
        ),
        (
            "Whose rooms correctly expresses possession. "
            "Place nouns after whose are routine. "
            "The hotel whose rooms were renovated… is fine.",
            None,
            "So the statement holds: whose correctly marks the hotel's rooms.",
        ),
        (
            "Influence on the timeline → will affect the project timeline. "
            "Severely or significantly after the verb often follows affect. "
            "Will effect the project timeline is the bring-about misuse.",
            "**Trap:** Effect before a timeline with a degree adverb is a classic influence miss.",
            'So the statement is false: repair to "Further delays will affect the project timeline severely."',
        ),
        (
            "Object pronoun me after between is correct. "
            "Role names do not change pronoun case. "
            "Between the ushers and me stays object case.",
            None,
            "So the statement holds: between the ushers and me uses object case.",
        ),
        (
            "Plural criteria correctly takes plural leave. "
            "Criteria + plural verb is the default formal choice. "
            "The shortlisting criteria leave little room… agrees.",
            None,
            "So the statement holds: leave correctly agrees with plural criteria.",
        ),
    ],
    "en-g-20-19": [
        (
            "Whomever is the object of had shortlisted. "
            "Agency shortlisted someone → object case. "
            "We interviewed whomever the agency had shortlisted… is traditional object case.",
            None,
            "So the statement holds: whomever correctly fills the object of had shortlisted.",
        ),
        (
            "Who's attending equals who is attending. "
            "The expansion test passes cleanly. "
            "A direct-question frame does not change the contraction rule.",
            None,
            "So the statement holds: who's correctly contracts who is before attending.",
        ),
        (
            "Verb effect meaning bring about fits a reduction. "
            "Effect + a + noun of result is intentional formal diction. "
            "May effect a reduction… is the bring-about pattern.",
            "**Tip:** Effect + a + result noun is the intentional formal bring-about frame.",
            "So the statement holds: effect correctly means bring about a reduction.",
        ),
        (
            "Object case — Between you and me. "
            "Informal tone does not excuse I. "
            "Between you and I remains a classic hypercorrection.",
            "**Trap:** Colloquial between you and I still fails the object-case rule.",
            'So the statement is false: repair to "Between you and me, the seating plan is flawed."',
        ),
        (
            "One of the criteria takes a singular verb — is inconsistent. "
            "One of + plural noun → singular verb for that one item. "
            "One of the criteria are… mismatches the head one.",
            "**Trap:** Plural are after one of the criteria ignores the singular head one.",
            'So the statement is false: repair to "One of the criteria is inconsistent with the handbook."',
        ),
    ],
    "en-g-20-20": [
        (
            "With consider X capable, prefer whoever in careful exam answers. "
            "Nested complements after consider usually favour whoever. "
            "Appoint whoever the club considers capable… is the safer form.",
            None,
            "So the statement holds: whoever is the safer form after consider capable.",
        ),
        (
            "Possessive whose bags is required. "
            "Bags or luggage after the wh-word means whose. "
            "Who's bags fails who is bags.",
            "**Trap:** Who's bags cannot expand and looks like possession by mistake.",
            'So the statement is false: repair to "A guest whose bags remain unpacked will miss the bus."',
        ),
        (
            "Verb affect correctly means influence drying times. "
            "Continues to + affect is a common formal stem. "
            "Humidity continues to affect… is influence.",
            None,
            "So the statement holds: affect correctly names humidity's influence on drying times.",
        ),
        (
            "Object pronoun me after between is correct. "
            "Counsel and me is a frequent formal stem. "
            "Between the counsel and I would be the trap.",
            None,
            "So the statement holds: between the counsel and me uses object case.",
        ),
        (
            "Approvals are countable → fewer formal approvals. "
            "If the noun is plural and countable, choose fewer even with adjectives in between. "
            "Less formal approvals sneaks less past an adjective before a count plural.",
            "**Trap:** An adjective before a countable plural does not license less.",
            'So the statement is false: repair to "We now require fewer formal approvals than before the overhaul."',
        ),
    ],
}


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20
    assert set(REWRITE) == {t["id"] for t in data["tasks"]}

    for task in data["tasks"]:
        tid = task["id"]
        rows = REWRITE[tid]
        assert len(rows) == 5, tid
        stmts = task["statements"]
        keys = task["answer_key"]
        new_tacs: list[str] = []
        for i, (body, tip, closing) in enumerate(rows):
            letter = LETTERS[i]
            text = fmt(letter, stmts[i], body, tip, closing)
            # sanity: body has at least 2 sentences
            body_sents = re.findall(r"[.!?]", body)
            assert len(body_sents) >= 2, (tid, letter, body)
            # closing must land true/false
            if keys[i]:
                assert closing.startswith("So the statement holds:"), (tid, letter, closing)
            else:
                assert closing.startswith("So the statement is false:"), (tid, letter, closing)
            # no bare (true)/(false) on first line
            first = text.split("\n", 1)[0]
            assert "(true)" not in first and "(false)" not in first, first
            # statement preserved
            assert text.startswith(f"**{letter}) {stmts[i]}"), (tid, letter)
            new_tacs.append(text)
        task["tactical_explanations"] = new_tacs

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # reload validate
    check = json.loads(PATH.read_text(encoding="utf-8"))
    for task in check["tasks"]:
        assert len(task["tactical_explanations"]) == 5
        for i, e in enumerate(task["tactical_explanations"]):
            assert e.startswith(f"**{LETTERS[i]}) {task['statements'][i]}")
            last = e.strip().split("\n")[-1]
            assert last.startswith("So the statement"), (task["id"], LETTERS[i], last)
            assert last.endswith((".", '."', ".'", '?"', "?'")), (task["id"], LETTERS[i], last)
    print(f"OK: rewrote {len(check['tasks'])} tasks × 5 explanations")


if __name__ == "__main__":
    main()
