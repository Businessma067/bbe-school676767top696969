# -*- coding: utf-8 -*-
"""Rewrite g.20 solution_overview + tactical_explanations to Math Ch11 style."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")

LETTERS = "ABCDE"


def expl(letter: str, stmt: str, verdict: bool, body: str, tip: str | None = None) -> str:
    tag = "true" if verdict else "false"
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    out = f"**{letter}) {s}**  ({tag})\n\n{body.strip()}"
    if tip:
        out += f"\n\n**Tip:** {tip.strip()}"
    return out


def overview(scene: str, part1: str, part2: str, answers: list[bool]) -> str:
    ans = ", ".join(f"{LETTERS[i]}={'TRUE' if v else 'FALSE'}" for i, v in enumerate(answers))
    return (
        f"{scene.strip()}\n\n"
        f"**Part 1: What to watch for.**\n\n"
        f"{part1.strip()}\n\n"
        f"**Part 2: How to decide.**\n\n"
        f"{part2.strip()}\n\n"
        f"**Answer.** {ans}"
    )


def pack(stmts: list[str], keys: list[bool], bodies: list[tuple[str, str | None]], ov) -> tuple[str, list[str]]:
    tacs = [
        expl(LETTERS[i], stmts[i], keys[i], bodies[i][0], bodies[i][1])
        for i in range(5)
    ]
    return overview(ov[0], ov[1], ov[2], keys), tacs


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    rewrites: dict[str, tuple] = {}

    # --- Task 1 ---
    t = data["tasks"][0]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is the subject of finds inside the relative clause, so the nominative form is required. "
                "The preposition to governs the whole clause, not a lone object pronoun right after it. "
                "Read the clause on its own: whoever finds it — that is clearly a subject slot.",
                "Ignore the preposition; judge case inside the clause.",
            ),
            (
                "Trap: who's expands only to who is or who has, and neither fits before garden. "
                "Possession is marked with whose: whose garden. "
                "If expansion fails, switch to whose.",
                "If you cannot expand to who is, write whose.",
            ),
            (
                "Affect is the verb meaning influence, and that is exactly what late nights do to concentration. "
                "Effect as a noun would need a different frame (have an effect on…). "
                "Here the progressive/finite verb slot wants affect.",
                "Most exam sentences want the verb affect, not the noun effect.",
            ),
            (
                "Trap: after the preposition between, both pronouns must be object case. "
                "Between you and I is a common hypercorrection; repair to Between you and me. "
                "Strip you and — you would never say between I.",
                "Strip you and — you would never say between I.",
            ),
            (
                "Guests are a countable plural, so fewer is the careful choice. "
                "Less typically pairs with mass nouns (less sugar, less time). "
                "Headcount plurals take fewer in formal exam English.",
                "Countable plural → fewer; mass noun → less.",
            ),
        ],
        (
            "These five sentences are quick swaps among confusable pairs: case after to, possession vs contraction, affect vs effect, object pronouns after between, and fewer vs less.",
            "Each line turns on one classic exam trap. Watch subject case inside a clause after a preposition, whose versus who's, the verb affect for influence, object me after between, and fewer with countable plurals.",
            "For whoever/whomever, find the verb of the relative clause and ask who does the action. For who's/whose, try expanding who's. For affect/effect, ask influence or bring about. For pronouns after between, keep object case. For fewer/less, ask whether the noun is countable.",
        ),
    )

    # --- Task 2 ---
    t = data["tasks"][1]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: whomever looks formal after to, but the relative is the subject of arrives. "
                "Subjects need whoever: whoever arrives at the gate first. "
                "Find the verb in the clause; if the wh-word does the action, choose whoever.",
                "Find the verb in the clause; if the wh-word does the action, choose whoever.",
            ),
            (
                "Whose correctly marks possession before whistle: the coach's whistle. "
                "Who's would mean who is/has and would not fit before a noun of possession. "
                "Whose works for people and things in formal English.",
                "Whose works for people and things in formal English.",
            ),
            (
                "Trap: the meaning is influence on energy after lunch, so you need the verb affect. "
                "Will effect would mean bring about, which does not fit your energy as the direct object here. "
                "Repair: will affect your energy.",
                "Reserve verb effect for bring about / cause to happen.",
            ),
            (
                "Object pronouns after between are correct: you and me. "
                "Between you and I is the hypercorrection this line carefully avoids. "
                "Formal speech still uses me here.",
                "Formal speech still uses me here — I is the hypercorrection.",
            ),
            (
                "Trap: criteria is a plural Latin form, so it needs a plural verb. "
                "The selection criteria is must become are printed. "
                "The singular form is criterion.",
                "Singular form is criterion.",
            ),
        ],
        (
            "This set recycles the same confusable pairs with swapped outcomes, so do not answer by habit from Task 1.",
            "Ask whether the wh-word is a subject, whether the 's is a contraction or a possessive, whether the sentence means influence or bring about, whether the pronoun sits after a preposition, and whether criteria is treated as plural.",
            "Test case inside the clause after to, expand who's when you see it, swap effect to affect for influence, keep me after between, and pair criteria with are/were/have.",
        ),
    )

    # --- Task 3 ---
    t = data["tasks"][2]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever correctly acts as the subject of finishes at the head of the sentence. "
                "No outer preposition tempts you toward whomever here. "
                "Start-of-sentence subject slots almost always need whoever.",
                "Start-of-sentence subject slots almost always need whoever.",
            ),
            (
                "Who's expands cleanly to who is before responsible. "
                "That is exactly when the contraction is allowed. "
                "Always run the expansion test before you accept who's.",
                "Test expansion before you accept who's.",
            ),
            (
                "Verb effect meaning bring about is correct with a change. "
                "Effect a change/reform/improvement is the rare but valid formal pattern. "
                "This is not the everyday influence use of affect.",
                "Effect a change/reform/improvement is the rare but valid pattern.",
            ),
            (
                "Trap: messages are countable items, so Less messages is wrong. "
                "Repair to Fewer messages were left…. "
                "If you can count the noun, prefer fewer.",
                "If you can count the noun, prefer fewer.",
            ),
            (
                "Plural criteria correctly takes are. "
                "The line models the agreement pattern examiners expect. "
                "Formal exam English keeps criteria plural.",
                "Formal exam English keeps criteria plural.",
            ),
        ],
        (
            "Four of these are carefully correct models; one countable/mass slip remains.",
            "Confirm each pair quickly: whoever as subject, who's = who is, effect = bring about, fewer with countables, and criteria with a plural verb.",
            "Expand contractions, check whether effect means bring about, and ask whether the noun after less/fewer can be counted one by one.",
        ),
    )

    # --- Task 4 ---
    t = data["tasks"][3]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whomever is the object of nominates: the class nominates someone. "
                "When another subject does the verb, the wh-word is traditionally an object. "
                "Invite whomever the class nominates is the careful traditional form.",
                "If another subject does the verb, the wh-word is often the object.",
            ),
            (
                "Trap: possession is needed before notes, so write whose notes. "
                "Who's notes never expands to a sensible who is notes. "
                "Noun after the wh-form almost always signals whose.",
                "Who's notes never expands sensibly.",
            ),
            (
                "Cold weather influences joint pain, and the verb for that is affect. "
                "Ask whether something influences something else — if yes, choose affect. "
                "No bring-about result noun is in play here.",
                "Ask whether something influences something else.",
            ),
            (
                "Object pronouns after between are required: you and me. "
                "Everyday English still marks between you and I wrong. "
                "Keep both coordinated pronouns in object case.",
                "Everyday English still marks between you and I wrong.",
            ),
            (
                "Luggage is uncountable in this everyday sense, so less is appropriate. "
                "Mass nouns such as time, luggage, and advice take less. "
                "Fewer luggage would be the trap flip of this item.",
                "Mass nouns (time, luggage, advice) take less.",
            ),
        ],
        (
            "Watch the genuine object-case whomever and the mass-noun less; the rest hinge on possession, influence, and prepositional object pronouns.",
            "One line is a true object whomever after nominates; another correctly uses less with luggage. Only mark false where the wrong member of a confusable pair appears.",
            "Locate the clause verb to choose whoever/whomever, expand who's, confirm affect for influence, keep me after between, and treat luggage as mass.",
        ),
    )

    # --- Task 5 ---
    t = data["tasks"][4]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: is needs a subject form: whoever is at the front desk. "
                "Whomever after to is a false formal signal when the next verb is finite be. "
                "To + whomever + is is almost always wrong.",
                "To + whomever + is is almost always wrong.",
            ),
            (
                "Possessive whose correctly links the café to windows. "
                "Whose is fine with inanimate subjects in formal prose. "
                "Who's would fail the expansion test before windows.",
                "Whose is fine with inanimate subjects in formal prose.",
            ),
            (
                "Trap: the meaning is influence on the baby's nap, so write will affect. "
                "There is no a change/result object to license verb effect. "
                "If nothing is being brought about, prefer affect.",
                "No a change/result noun after the verb? Prefer affect.",
            ),
            (
                "Trap: the object of between must be me: between my sister and me. "
                "Sister and I is subject-case hypercorrection after a preposition. "
                "Same rule as between you and me.",
                "Same rule as between you and me.",
            ),
            (
                "Singular criterion correctly pairs with is. "
                "One key item forces the singular Latin form. "
                "One item → criterion; several → criteria.",
                "One item → criterion; several → criteria.",
            ),
        ],
        (
            "Difficulty steps up: clause subjects after to, possessive whose with places, affect vs effect, object pronouns after between, and criterion vs criteria.",
            "Several lines look polish-formal yet hide subject-case or influence errors. Check be after the wh-word, whose with café, affect for influence, me after between, and singular criterion.",
            "If a finite verb follows the wh-word, suspect subject case. Expand who's. Ask influence vs bring about. Strip the coordination after between. Match number: one criterion / several criteria.",
        ),
    )

    # --- Task 6 ---
    t = data["tasks"][5]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is widely accepted as the object of recommends and is the safer exam default when case is contested. "
                "Markers rarely accept whomever as a subject; they often accept whoever as an object. "
                "Ask whoever the tutor recommends reads cleanly in modern exam English.",
                "Markers rarely accept whomever as a subject; they often accept whoever as an object.",
            ),
            (
                "Who's = who has before the past participle been. "
                "Who's been watering… is a standard perfect contraction. "
                "Expansion: who has been.",
                "Who's been is a standard contraction.",
            ),
            (
                "Noun effect meaning result or impact is correct after little. "
                "Article or quantifier + effect usually signals the noun, not the verb. "
                "Had little effect on… is the classic frame.",
                "Article/quantifier + effect usually signals the noun.",
            ),
            (
                "Countable seats take fewer than: Fewer than twelve seats. "
                "Fewer than + number + plural noun is the careful form. "
                "Less than twelve seats is the common informal trap.",
                "Fewer than + number + plural noun is the careful form.",
            ),
            (
                "Trap: plural criteria needs were, not was. "
                "These criteria was written flips number. "
                "Never pair criteria with a singular verb in formal answers.",
                "Never pair criteria with a singular verb in formal answers.",
            ),
        ],
        (
            "Four statements are solid; one plural-agreement error with criteria closes the set.",
            "Confirm contractions (who's been), the noun effect after little, fewer with numbered countable items, and plural verb agreement with criteria.",
            "Accept whoever in contested object slots when unsure, expand who's, treat little effect as a noun phrase, prefer fewer than with plurals, and force were/are/have with criteria.",
        ),
    )

    # --- Task 7 ---
    t = data["tasks"][6]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever functions acceptably as the object of lists in modern exam English. "
                "Prefer whoever unless the object case is unmistakable and required. "
                "Assign… to whoever the rota lists as free is the safe mark-winning form.",
                "Prefer whoever unless the object case is unmistakable and required.",
            ),
            (
                "Trap: possession is needed — whose shoes, not who's. "
                "Who's expands to who is/has and fails before shoes. "
                "Expand every who's before you accept it.",
                "Expand every who's before you accept it.",
            ),
            (
                "Verb affect correctly means influence sleep after late spicy food. "
                "Subject influences object → affect. "
                "No bring-about result frame appears here.",
                "Subject influences object → affect.",
            ),
            (
                "Trap: volunteers are countable people, so use Fewer volunteers. "
                "Less volunteers is the headcount error examiners love. "
                "Headcount plurals → fewer.",
                "Headcount plurals → fewer.",
            ),
            (
                "Plural criteria correctly takes plural remain. "
                "Watch subject–verb number with Latin plurals. "
                "Remain is a clean plural partner for criteria.",
                "Watch subject–verb number with Latin plurals.",
            ),
        ],
        (
            "Scan for the possessive/contraction slip and the fewer/less headcount error; keep affect and criteria agreement clean.",
            "Two false lines misuse who's for whose and less for fewer. The affect and criteria lines should read true if you keep influence and plural agreement in mind.",
            "Expand who's, ask whether volunteers can be counted, confirm affect for influence, and match criteria to a plural verb.",
        ),
    )

    # --- Task 8 ---
    t = data["tasks"][7]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whomever is the object of choose: you choose someone. "
                "Subject you + verb choose → object whomever. "
                "Congratulate whomever you choose is traditionally correct.",
                "Subject you + verb choose → object whomever.",
            ),
            (
                "Whose ovens correctly shows possession for a place. "
                "Whose + noun is the safe possessive pattern. "
                "Who's would not expand before ovens.",
                "Whose + noun is the safe possessive pattern.",
            ),
            (
                "Verb effect meaning bring about fits schedule changes. "
                "Effect + concrete result noun is the cue. "
                "Management intends to effect several… is intentional formal diction.",
                "Effect + concrete result noun is the cue.",
            ),
            (
                "Between you and me uses correct object pronouns. "
                "Hypercorrect I fails after prepositions. "
                "Discuss… only between you and me is clean.",
                "Hypercorrect I fails after prepositions.",
            ),
            (
                "Trap: delays are countable, so write fewer delays. "
                "Less delays treats a plural count noun as mass. "
                "Plural -s nouns almost always take fewer.",
                "Plural -s nouns almost always take fewer.",
            ),
        ],
        (
            "Most lines are carefully correct, including a legitimate object-case whomever and verb effect; one countable less remains.",
            "Hold the true models (whose, effect a change-type verb, between you and me) and hunt the single less + plural trap.",
            "Confirm object case after choose, whose with bakery, effect as bring about, me after between, and fewer with delays.",
        ),
    )

    # --- Task 9 ---
    t = data["tasks"][8]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: the subject of finishes must be whoever. "
                "Whomever finishes wrongly uses object case in a subject slot. "
                "A verb immediately after the wh-word usually signals subject case.",
                "Verb immediately after the wh-word usually signals subject case.",
            ),
            (
                "Who's = who is before attending. "
                "Progressive after who's → contraction is fine. "
                "Tell me who's attending… expands cleanly.",
                "Progressive after who's → contraction is fine.",
            ),
            (
                "Verb affect correctly means influence her mood. "
                "Feelings and habits are typically affected, not effected. "
                "Did not affect is the right influence verb.",
                "Feelings and habits are typically affected.",
            ),
            (
                "Trap: use me — between the landlord and me. "
                "Coordinated pronouns keep the same case after between. "
                "Landlord and I is subject-case hypercorrection.",
                "Coordinated pronouns keep the same case.",
            ),
            (
                "Singular criterion correctly takes singular carries. "
                "Each + singular noun reinforces criterion. "
                "Plural criteria would need carry/are, not carries.",
                "Each + singular noun reinforces criterion.",
            ),
        ],
        (
            "Two classic traps appear: whomever used as a subject, and I after between.",
            "The remaining three are clean: who's as who is, affect as influence, and singular criterion agreement.",
            "If a finite verb follows the wh-form, choose whoever. Expand who's. Keep affect for mood. Force me after between. Match each criterion to a singular verb.",
        ),
    )

    # --- Task 10 ---
    t = data["tasks"][9]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is the subject of presents. "
                "Subject + verb right after whoever is the clean pattern. "
                "Support will go to whoever presents… keeps case inside the clause.",
                "Subject + verb right after whoever is the clean pattern.",
            ),
            (
                "Trap: possession required — whose suitcase. "
                "Who's suitcase cannot mean who is suitcase. "
                "Noun after the wh-form → almost always whose.",
                "Who's suitcase cannot mean who is suitcase.",
            ),
            (
                "Trap: influence meaning needs may affect parents. "
                "May effect wrongly suggests bring about. "
                "An adverbial after the verb often follows affect, not effect.",
                "Adverbial after the verb often follows affect, not effect.",
            ),
            (
                "Countable sunny days take fewer. "
                "Calendar units in the plural prefer fewer in careful English. "
                "Fewer sunny days remain… is correct.",
                "Calendar units in the plural prefer fewer.",
            ),
            (
                "Plural criteria correctly takes have. "
                "Have/are/were are the safe plural partners. "
                "The admission criteria have been tightened again reads clean.",
                "Have/are/were are the safe plural partners.",
            ),
        ],
        (
            "Focus on the two false lines: a who's/whose possession error and affect miswritten as effect.",
            "The whoever-subject, fewer-days, and criteria-have lines should all read true once you lock the pairs.",
            "Expand who's before nouns, swap effect→affect for influence, keep whoever when it does the verb, and match criteria to have.",
        ),
    )

    # --- Task 11 ---
    t = data["tasks"][10]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whomever is the object of had invited, so object case is traditionally right. "
                "Past perfect clauses often bury the object — find who receives the action. "
                "The host had invited someone → whomever.",
                "Past perfect clauses often bury the object — find who receives the action.",
            ),
            (
                "Non-defining whose chair correctly marks possession. "
                "Commas do not change the whose/who's rule. "
                "The club, whose chair resigned… is a standard relative.",
                "Commas do not change the whose/who's rule.",
            ),
            (
                "Verb affect correctly means influence outdoor matches. "
                "Weather and events affect plans and people. "
                "Can affect is the influence pattern.",
                "Weather/events affect plans and people.",
            ),
            (
                "All coordinated pronouns after between stay in object case; me is correct. "
                "Adding more nouns (and the rest of the team) does not license I. "
                "Between you and me… remains the core pattern.",
                "Adding more nouns does not license I.",
            ),
            (
                "Uncountable evidence takes less. "
                "Evidence, information, and research are mass nouns. "
                "Less evidence… is the careful mass pairing.",
                "Evidence, information, and research are mass nouns.",
            ),
        ],
        (
            "All five are carefully correct — use the set as an answer key for the right member of each pair.",
            "Lock in object whomever, possessive whose, verb affect, object me, and less with a mass noun.",
            "When every line looks right, still verify each pair deliberately so you do not invent false traps.",
        ),
    )

    # --- Task 12 ---
    t = data["tasks"][11]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: the subject of meets requires whoever. "
                "Award… to whomever meets… puts object case in a subject slot. "
                "Target-meeting clauses are subject cases.",
                "Target-meeting clauses are subject cases.",
            ),
            (
                "Trap: ask whose signature, not who's (= who is). "
                "A noun after the wh-word → almost always whose. "
                "Who's signature fails expansion.",
                "Noun after the wh-word → almost always whose.",
            ),
            (
                "Verb effect meaning bring about fits a settlement. "
                "Effect + indefinite article + result noun is classic. "
                "Failed to effect an early settlement is intentional formal use.",
                "Effect + indefinite article + result noun is classic.",
            ),
            (
                "Trap: countable applications prefer Fewer than forty applications. "
                "Exam English still prefers fewer with countable plurals after numbers. "
                "Less than forty applications is the trap form.",
                "Exam English still prefers fewer with countable plurals after numbers.",
            ),
            (
                "Trap: plural subject needs need — Several criteria need revision. "
                "Several + plural noun → plural verb. "
                "Needs wrongly treats criteria as singular.",
                "Several + plural noun → plural verb.",
            ),
        ],
        (
            "Only one sentence is true — the effect a settlement pattern — while the others mix subject/object, possession, fewer/less, and agreement traps.",
            "Four false lines pack four different confusable pairs around one clean bring-about use of effect.",
            "Force whoever before meets, whose before signature, fewer than with applications, and plural need with criteria; keep the true effect line.",
        ),
    )

    # --- Task 13 ---
    t = data["tasks"][12]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is the subject of can lock inside the nested clause. "
                "Case is decided in the innermost clause (you believe can…), not by to. "
                "Delegate… to whoever you believe can lock up… is correct.",
                "Case is decided in the innermost clause, not by to.",
            ),
            (
                "Trap: possessive needed — whose driveway. "
                "Driveway/garden after the wh-word → whose. "
                "Who's driveway fails who is driveway.",
                "Driveway/garden after the wh-word → whose.",
            ),
            (
                "Verb affect correctly means influence how well I sleep. "
                "Subject influences object → affect. "
                "Bright screens affect… is the influence stem.",
                "Subject influences object → affect.",
            ),
            (
                "Object pronoun me after between is correct. "
                "Between X and me is standard. "
                "Claimant and I would be the hypercorrection.",
                "Between X and me is standard.",
            ),
            (
                "Trap: furniture is typically uncountable here → less furniture (or fewer pieces of furniture). "
                "Do not use fewer with a mass noun. "
                "Fewer furniture mismatches count grammar with a mass head.",
                "Do not use fewer with a mass noun.",
            ),
        ],
        (
            "Nested clauses and mass/count swaps raise the difficulty.",
            "Decide case inside you believe can…, fix the who's/whose slip, keep affect and between…me, and reverse the fewer/furniture mismatch.",
            "Ignore outer to when nested verbs decide case; expand who's; treat furniture as mass unless you rewrite to pieces.",
        ),
    )

    # --- Task 14 ---
    t = data["tasks"][13]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whomever is the object of shortlist. "
                "Mentors shortlist someone → object case. "
                "Offer… to whomever the mentors shortlist is traditionally correct.",
                "Mentors shortlist someone → object case.",
            ),
            (
                "Whose hall correctly shows possession. "
                "Organisation/place + whose + noun is fine. "
                "The school whose hall was flooded… is standard.",
                "Organisation/place + whose + noun is fine.",
            ),
            (
                "Trap: confidence is influenced → will affect audience confidence. "
                "Abstract reactions (confidence, mood) take affect. "
                "Will effect audience confidence wrongly uses bring-about.",
                "Abstract reactions (confidence, mood) take affect.",
            ),
            (
                "Trap: object case required — between you and me. "
                "Until Friday does not change pronoun case. "
                "Keep this draft between you and I is the hypercorrection.",
                "Until Friday does not change pronoun case.",
            ),
            (
                "Plural criteria correctly takes are applied. "
                "Passive voice still needs plural agreement. "
                "The scoring criteria are applied… is clean.",
                "Passive voice still needs plural agreement.",
            ),
        ],
        (
            "Two false lines misuse effect for influence and I after between.",
            "Confirm the object-case whomever, the possessive whose, and plural criteria in the passive; reject the influence and pronoun traps.",
            "Ask who receives shortlist, expand whose with hall, swap effect→affect for confidence, force me after between, and keep are with criteria.",
        ),
    )

    # --- Task 15 ---
    t = data["tasks"][14]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is the subject of has delivered. "
                "Perfect aspect does not change the case rule. "
                "Promote whoever has delivered… keeps subject case.",
                "Perfect aspect does not change the case rule.",
            ),
            (
                "Who's been = who has been. "
                "Been after who's almost always means who has. "
                "Who's been responsible… passes expansion.",
                "Been after who's almost always means who has.",
            ),
            (
                "Trap: influence meaning → beginning to affect my morning runs. "
                "Progressive frames usually host affect. "
                "To effect my morning runs is the wrong verb for influence.",
                "Progressive frames usually host affect.",
            ),
            (
                "Countable discrepancies take fewer. "
                "Count nouns in samples prefer fewer. "
                "There were fewer discrepancies… is correct.",
                "Count nouns in samples prefer fewer.",
            ),
            (
                "Trap: singular is criterion — This single criterion determines…. "
                "Single/one/each before the noun forces criterion. "
                "This single criteria is a false plural.",
                "Single/one/each before the noun forces criterion.",
            ),
        ],
        (
            "Watch the subtler affect/effect slip inside a progressive and the false plural criteria after single.",
            "The whoever, who's been, and fewer lines are sound; two lines swap influence and number.",
            "Keep whoever before has delivered, expand who's been, rewrite effect→affect, keep fewer with discrepancies, and force criterion after single.",
        ),
    )

    # --- Task 16 ---
    t = data["tasks"][15]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: the subject of is appointed must be whoever. "
                "Passive is appointed still needs a subject form. "
                "Brief whomever is appointed hides a subject-case error.",
                "Passive is appointed still needs a subject form.",
            ),
            (
                "Whose parcels correctly marks possession. "
                "Neighbour/person + whose is standard. "
                "A neighbour whose parcels arrived… is clean.",
                "Neighbour/person + whose is standard.",
            ),
            (
                "Verb effect meaning bring about fits improvements. "
                "Lasting/major + noun after effect is a good cue. "
                "Hopes to effect lasting improvements… is formal but right.",
                "Lasting/major + noun after effect is a good cue.",
            ),
            (
                "Object pronoun me after between is correct. "
                "Parallel organisers and me, never I. "
                "Keep the surprise between the organisers and me.",
                "Parallel organisers and me, never I.",
            ),
            (
                "Trap: countable absences need fewer absences. "
                "Attendance counts are countable. "
                "Less absences is the mass/count flip.",
                "Attendance counts are countable.",
            ),
        ],
        (
            "Passive clauses hide subject-case whoever traps, and countable absences tempt less.",
            "Hold onto whose, effect-as-bring-about, and between…me as the true anchors; reject whomever is… and less absences.",
            "If be + participle follows the wh-word, choose whoever; keep whose; accept effect + improvements; keep me; swap less→fewer with absences.",
        ),
    )

    # --- Task 17 ---
    t = data["tasks"][16]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whoever is acceptable as the object of shows; when object case is unclear, whoever remains the safer exam form. "
                "When object case is unclear, whoever rarely costs marks. "
                "Allocate… to whoever the roster shows… is the cautious choice.",
                "When object case is unclear, whoever rarely costs marks.",
            ),
            (
                "Trap: possessive whose remit is required. "
                "Remit/mandate/role after the wh-word → whose. "
                "Who's remit fails expansion.",
                "Remit/mandate/role after the wh-word → whose.",
            ),
            (
                "Verb affect correctly means influence festival plans. "
                "Weather events affect outdoor schedules. "
                "Suddenly storms quickly affect… is influence, not bring-about.",
                "Weather events affect outdoor schedules.",
            ),
            (
                "Between you and me is the correct object-case pair. "
                "At this stage is irrelevant to case. "
                "Time hedges never license I after between.",
                "At this stage is irrelevant to case.",
            ),
            (
                "Trap: uncountable patience takes Less patience. "
                "Patience, advice, and information are mass nouns. "
                "Fewer patience flips the usual fewer/less intuition.",
                "Patience, advice, and information are mass nouns.",
            ),
        ],
        (
            "Harder items flip the usual fewer/less intuition: patience is mass, so fewer is wrong.",
            "Also catch the remit possession error while confirming whoever, affect, and between you and me.",
            "Prefer whoever in contested object slots, expand who's before remit, keep affect, keep me, and pair mass patience with less.",
        ),
    )

    # --- Task 18 ---
    t = data["tasks"][17]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Trap: innermost clause — who should review — subject case → whoever you think should review it. "
                "Ignore you think; case belongs to the embedded verb. "
                "Whomever you think should… wrongly object-cases a subject.",
                "Ignore you think; case belongs to the embedded verb.",
            ),
            (
                "Whose rooms correctly expresses possession. "
                "Place nouns after whose are routine. "
                "The hotel whose rooms were renovated… is fine.",
                "Place nouns after whose are routine.",
            ),
            (
                "Trap: influence on the timeline → will affect the project timeline. "
                "Severely/significantly after the verb often follows affect. "
                "Will effect the project timeline is the bring-about misuse.",
                "Severely/significantly after the verb often follows affect.",
            ),
            (
                "Object pronoun me after between is correct. "
                "Role names do not change pronoun case. "
                "Between the ushers and me stays object case.",
                "Role names do not change pronoun case.",
            ),
            (
                "Plural criteria correctly takes plural leave. "
                "Criteria + plural verb is the default formal choice. "
                "The shortlisting criteria leave little room… agrees.",
                "Criteria + plural verb is the default formal choice.",
            ),
        ],
        (
            "The nested you think should… clause is the main trap — the wh-word is a subject, so whoever is required.",
            "Pair that with an affect/effect influence error; the remaining three (whose, between…me, criteria leave) are solid.",
            "Decide case on the innermost verb, expand whose with rooms, rewrite effect→affect for timelines, keep me, and keep plural leave with criteria.",
        ),
    )

    # --- Task 19 ---
    t = data["tasks"][18]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "Whomever is the object of had shortlisted. "
                "Agency shortlisted someone → object case. "
                "We interviewed whomever the agency had shortlisted… is traditional object case.",
                "Agency shortlisted someone → object case.",
            ),
            (
                "Who's attending = who is attending. "
                "The expansion test passes cleanly. "
                "Direct-question frame does not change the contraction rule.",
                "Expansion test passes cleanly.",
            ),
            (
                "Verb effect meaning bring about fits a reduction. "
                "Effect + a + noun of result is intentional formal diction. "
                "May effect a reduction… is the bring-about pattern.",
                "Effect + a + noun of result is intentional formal diction.",
            ),
            (
                "Trap: object case — Between you and me. "
                "Informal tone does not excuse I. "
                "Between you and I remains a classic hypercorrection.",
                "Informal tone does not excuse I.",
            ),
            (
                "Trap: one of the criteria takes a singular verb — is inconsistent. "
                "One of + plural noun → singular verb for that one item. "
                "One of the criteria are… mismatches the head one.",
                "One of + plural noun → singular verb for one.",
            ),
        ],
        (
            "Two advanced traps: hypercorrect between you and I, and singular agreement after one of the criteria.",
            "The object-case whomever, who's contraction, and effect-a-reduction lines are correctly written.",
            "Keep object whomever after shortlisted, expand who's, accept effect a reduction, force me after between, and make one of the criteria take is.",
        ),
    )

    # --- Task 20 ---
    t = data["tasks"][19]
    rewrites[t["id"]] = pack(
        t["statements"],
        t["answer_key"],
        [
            (
                "With consider X capable, prefer whoever in careful exam answers. "
                "Nested complements after consider usually favour whoever. "
                "Appoint whoever the club considers capable… is the safer form.",
                "Nested complements after consider usually favour whoever.",
            ),
            (
                "Trap: possessive whose bags is required. "
                "Bags/luggage after the wh-word → whose. "
                "Who's bags fails who is bags.",
                "Bags/luggage after the wh-word → whose.",
            ),
            (
                "Verb affect correctly means influence drying times. "
                "Continues to + affect is a common formal stem. "
                "Humidity continues to affect… is influence.",
                "Continues to + affect is a common formal stem.",
            ),
            (
                "Object pronoun me after between is correct. "
                "Counsel and me is a frequent formal stem. "
                "Between the counsel and I would be the trap.",
                "Counsel and me is a frequent formal stem.",
            ),
            (
                "Trap: approvals are countable → fewer formal approvals. "
                "If the noun is plural and countable, choose fewer even with adjectives in between. "
                "Less formal approvals sneaks less past an adjective before a count plural.",
                "If the noun is plural and countable, choose fewer even with adjectives in between.",
            ),
        ],
        (
            "Finish with a dense mix: a club-considers clause, a who's/whose slip, solid affect and between…me, and a sneaky less before a countable plural.",
            "Only mark true when each confusable pair is already the right member; adjectives before a plural noun do not license less.",
            "Prefer whoever after consider, expand who's before bags, keep affect, keep me, and rewrite less→fewer before approvals.",
        ),
    )

    for task in data["tasks"]:
        ov, tacs = rewrites[task["id"]]
        assert len(tacs) == 5
        for i, (stmt, key, tac) in enumerate(zip(task["statements"], task["answer_key"], tacs)):
            assert f"**{LETTERS[i]}) {stmt}" in tac or f"**{LETTERS[i]}) {stmt.rstrip('.')}" in tac
            assert ("(true)" in tac) == key
            assert ("(false)" in tac) != key or ("(true)" in tac) == key
            if key:
                assert "(true)" in tac and "(false)" not in tac.split("\n")[0]
            else:
                assert "(false)" in tac and "(true)" not in tac.split("\n")[0]
        task["solution_overview"] = ov
        task["tactical_explanations"] = tacs

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    # validate
    again = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(again["tasks"]) == 20
    for task in again["tasks"]:
        assert "Part 1: What to watch for." in task["solution_overview"]
        assert "**Answer.**" in task["solution_overview"]
        assert len(task["tactical_explanations"]) == 5
        for i, tac in enumerate(task["tactical_explanations"]):
            assert tac.startswith(f"**{LETTERS[i]})")
            assert "(true)" in tac or "(false)" in tac
    print("OK wrote", PATH)


if __name__ == "__main__":
    main()
