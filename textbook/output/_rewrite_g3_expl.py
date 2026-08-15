# -*- coding: utf-8 -*-
"""Rewrite g.3 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.3.json")
LETTERS = "ABCDE"


def expl(
    letter: str,
    stmt: str,
    body: str,
    *,
    tip: str | None = None,
    trap: str | None = None,
    holds: bool,
    close: str,
) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if trap:
        parts.extend(["", f"**Trap:** {trap.strip()}"])
    if tip:
        parts.extend(["", f"**Tip:** {tip.strip()}"])
    lead = "So the statement holds" if holds else "So the statement is false"
    parts.extend(["", f"{lead}: {close.strip()}"])
    return "\n".join(parts) + "\n"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of (body, tip|None, trap|None, close)
    # tip/trap keyed separately; holds comes from answer_key
    packs: dict[str, list[tuple[str, str | None, str | None, str]]] = {}

    # --- Task 1 (1/5) ---
    packs["en-g-3-01"] = [
        (
            'The head of this sentence is "the number," which names one count of overdue books, not the books themselves. '
            'Singular subjects take singular verbs, so "has risen" is the right match. '
            'Mentally swapping in "that total has risen" makes the agreement feel natural.',
            None,
            None,
            '"the number" correctly takes singular "has risen."',
        ),
        (
            '"A number of neighbours" means several neighbours, so the verb must be plural. '
            'The written "was unable" wrongly treats "number" as a singular head. '
            'Flip the article test: a number = many people, so the repair is "were unable."',
            None,
            None,
            'repair to "A number of neighbours were unable to join the street clean-up."',
        ),
        (
            "With neither…nor, agreement follows the nearer subject — the one sitting just before the verb. "
            'Here that noun is plural "players," so "were copied" is correct. '
            'Ignore "coach" when you choose the verb; proximity, not the first noun, decides.',
            'Cover the first noun and read only from "nor" onward.',
            None,
            'proximity after nor correctly yields plural "were copied."',
        ),
        (
            '"Each of the flatmates" is singular even though "flatmates" looks plural. '
            '"Each" picks out one member at a time, and the of-phrase never takes control of the verb. '
            'The written "have filed" agrees with the wrong noun.',
            None,
            None,
            'repair to "Each of the flatmates has filed a chore preference form."',
        ),
        (
            'The delayed subject after "there" is plural "typos," so "there are" agrees correctly. '
            "In there-constructions the real subject follows the verb — match that noun's number. "
            "Here several typos make the plural verb unavoidable.",
            None,
            None,
            'plural "typos" correctly takes "there are."',
        ),
    ]

    # --- Task 2 (1/5) ---
    packs["en-g-3-02"] = [
        (
            '"Every applicant" is grammatically singular even though many people are implied. '
            'Singular "receives" is therefore correct with "a starter kit." '
            "Words like every and each always pick units one at a time in formal exam English.",
            None,
            None,
            '"every" correctly locks in singular "receives."',
        ),
        (
            '"Along with two helpers" is only a parenthetical add-on; the subject remains singular "The chef." '
            'Inserts introduced by along with, as well as, or together with never create a compound plural subject. '
            'The written "were present" wrongly steals plurality from the helpers.',
            None,
            None,
            'repair to "The chef, along with two helpers, was present at the tasting."',
        ),
        (
            'The delayed subject is singular "a backlog," so "there is" agrees. '
            'Do not let the plural idea inside "of laundry" steal the agreement — the head noun is backlog. '
            "Once you isolate that head, the singular verb is obvious.",
            None,
            None,
            'singular "backlog" correctly takes "there is."',
        ),
        (
            'After neither…nor the nearer subject is singular "aunt," so "has signed" is right. '
            'Proximity overrides the plural feel of "twins" at the front of the chain. '
            'Read only from "nor" to the verb when you decide number.',
            "Neither…nor: last noun wins.",
            None,
            'nearer singular "aunt" correctly takes "has signed."',
        ),
        (
            '"A number of guests" means several guests, so plural "have requested" is correct. '
            "Flip the article test if you hesitate: a number = many, the number = one figure. "
            "Here the plural verb matches the plural sense cleanly.",
            None,
            None,
            '"a number of" correctly takes plural "have requested."',
        ),
    ]

    # --- Task 3 (1/5) ---
    packs["en-g-3-03"] = [
        (
            '"The number of complaints" is a singular total — one count of complaints after the repair. '
            'The written "have fallen" wrongly agrees with plural "complaints" in the of-phrase. '
            'Keep focusing on "number" as the true subject head.',
            None,
            None,
            'repair to "The number of complaints has fallen after the repair."',
        ),
        (
            'With neither…nor, only the nearer noun controls the verb. '
            'Here that noun is plural "bathrooms," so "was cleaned" is the wrong match. '
            'Singular "kitchen" at the front is irrelevant once nor has spoken.',
            None,
            None,
            'repair to "Neither the kitchen nor the bathrooms were cleaned last week."',
        ),
        (
            '"Three outstanding photos" is plural, so you need "there are," not "there is." '
            "Count what follows the verb in there-constructions. "
            "The numeral three is an immediate plural cue.",
            None,
            None,
            'repair to "There are three outstanding photos on the shared album."',
        ),
        (
            '"Each partner" takes a singular verb even when "duo" suggests two people. '
            'The written "have veto rights" agrees with the wrong idea of plurality. '
            'Strip the of-phrase and hear "each has."',
            None,
            None,
            'repair to "Each partner in the dance duo has veto rights over the routine."',
        ),
        (
            'In formal usage "data" is treated as plural, so "support" is the agreed verb here. '
            "On exam papers, keep that plural default unless the prompt clearly marks informal style. "
            'The of-phrase "from the pilot survey" does not change the number.',
            "Formal exam default: data → plural verb.",
            None,
            'formal plural "data" correctly takes "support."',
        ),
    ]

    # --- Task 4 (1/5) ---
    packs["en-g-3-04"] = [
        (
            'The nearer subject after neither…nor is plural "linesmen," so "were briefed" agrees. '
            'Cover "referee" and read from "nor" onward if you want a quick check. '
            "Proximity, not the first noun, decides the verb.",
            None,
            None,
            'nearer plural "linesmen" correctly takes "were briefed."',
        ),
        (
            '"Together with the volunteers" does not pluralise "The gardener"; singular "has approved" is correct. '
            "With-phrases are parenthetical, not co-subjects. "
            'Strip the insert and the sentence still stands as "the gardener has approved."',
            None,
            None,
            'the singular head gardener correctly takes "has approved."',
        ),
        (
            'Plural "objections" correctly takes "there are." '
            'The word "no" does not change number — you still match the noun that follows. '
            "Here further objections are clearly plural.",
            None,
            None,
            'plural "objections" correctly takes "there are."',
        ),
        (
            '"Every parcel" is singular, so "requires" is right. '
            "Every and each plus a singular noun lock in a singular verb even when many parcels are implied. "
            "Dual labelling does not affect agreement.",
            None,
            None,
            '"every parcel" correctly takes singular "requires."',
        ),
        (
            '"A number of interns" needs a plural verb because it means several interns. '
            'The written "was assigned" wrongly treats "number" as a singular head. '
            'Swap in "several interns" — if that feels plural, keep the plural verb.',
            None,
            None,
            'repair to "A number of interns were assigned to the summer festival."',
        ),
    ]

    # --- Task 5 (2/5) ---
    packs["en-g-3-05"] = [
        (
            'Singular "the number" correctly pairs with "is still above." '
            'Focus on "number," not plural "tickets," when you choose the verb. '
            "One count of open tickets stays singular even when that count is high.",
            None,
            None,
            '"the number of" correctly takes singular "is."',
        ),
        (
            'The nearer subject after neither…nor is plural "witnesses." '
            'The written "was available" wrongly follows singular "solicitor" at the front. '
            "Proximity overrides the first noun every time in this construction.",
            None,
            None,
            'repair to "Neither the solicitor nor the witnesses were available for the hearing."',
        ),
        (
            'Inverted "there remain" correctly agrees with plural "chores." '
            "There-constructions can use verbs other than be; you still match the following subject. "
            'Mentally flip it to "several chores remain" and the plural is obvious.',
            "There + plural subject → plural verb, even with remain.",
            None,
            'plural "chores" correctly takes "remain."',
        ),
        (
            '"As well as the stage managers" is parenthetical; the subject is singular "drama teacher." '
            'Managers in the insert are not co-subjects and must not pluralise the verb. '
            'Strip the as-well-as phrase before you choose the verb.',
            None,
            None,
            'repair to "The drama teacher, as well as the stage managers, is reviewing cues."',
        ),
        (
            '"Each of the hiking clubs" takes singular "files." '
            '"Of the hiking clubs" is a prepositional phrase, not the subject head. '
            '"Each" still points to one club at a time for agreement.',
            None,
            None,
            '"each of" correctly takes singular "files."',
        ),
    ]

    # --- Task 6 (2/5) ---
    packs["en-g-3-06"] = [
        (
            'The plural sense of "a number of cyclists" calls for "have demanded." '
            'In exam English, "a number of" almost always takes a plural verb. '
            "Safer bike lanes is just the content; agreement rides on cyclists as a group.",
            None,
            None,
            '"a number of" correctly takes plural "have demanded."',
        ),
        (
            'Nearer plural "chorus members" correctly takes "were ready." '
            'Trust the last noun after nor and ignore singular "understudy" for agreement. '
            "Proximity is the whole rule in this construction.",
            None,
            None,
            'nearer plural "chorus members" correctly takes "were ready."',
        ),
        (
            'Head subject "head gardener" stays singular despite "along with her deputies," so "was copied" is right. '
            "Commas around the insert are a clue that it is not part of a compound subject. "
            "Deputies in the aside never pluralise the verb.",
            None,
            None,
            'singular "head gardener" correctly takes "was copied."',
        ),
        (
            'Uncountable "room" is singular, so "there is" fits. '
            'After there is/are, uncountables take singular even when "little" softens the quantity. '
            "Another suitcase does not make the subject plural.",
            "Uncountable after there → there is.",
            None,
            'uncountable "room" correctly takes "there is."',
        ),
        (
            'Formal plural "data" correctly takes "indicate." '
            "Prefer plural agreement with data in formal writing and exam answers. "
            "Rainfall totals in the of-phrase do not turn data singular.",
            "Formal data → plural verb.",
            None,
            'formal plural "data" correctly takes "indicate."',
        ),
    ]

    # --- Task 7 (2/5) ---
    packs["en-g-3-07"] = [
        (
            '"Every member" takes singular "has cast." '
            'The of-phrase "of the book club" does not pluralise every/each. '
            "One member at a time is the agreement picture, even when the whole club votes.",
            None,
            None,
            '"every member" correctly takes singular "has cast."',
        ),
        (
            '"The number of broken toys" is one count, so the verb must be singular. '
            'The written "have doubled" wrongly agrees with "toys." '
            "Year-on-year growth does not change the subject's number.",
            None,
            None,
            'repair to "The number of broken toys has doubled year on year."',
        ),
        (
            'The nearer subject after neither…nor is plural "agents." '
            'Possessive markers such as "landlords\'" do not change that plural status. '
            'The written "is contesting" mismatches the nearer noun.',
            None,
            None,
            'repair to "Neither the tenant nor the landlords\' agents are contesting the clause."',
        ),
        (
            'The real subject after there is singular "a clear timeline." '
            'Articles and adjectives often hide a singular head behind a plural of-phrase. '
            'Renovation steps are not the subject, so "there are" is wrong.',
            None,
            None,
            'repair to "There is a clear timeline attached to the renovation steps."',
        ),
        (
            "Singular captain remains the subject; \"intends\" is correct despite \"together with the non-playing coaches.\" "
            "Together with never creates a plural compound subject. "
            "Coaches in the insert stay outside the verb's agreement.",
            None,
            None,
            'singular "captain" correctly takes "intends."',
        ),
    ]

    # --- Task 8 (2/5) ---
    packs["en-g-3-08"] = [
        (
            '"A number of bakers" means several bakers, so the verb must be plural. '
            'The written "was late" wrongly treats "number" as a singular head. '
            'If "their" later in the sentence feels natural, the verb is almost certainly plural.',
            None,
            None,
            'repair to "A number of bakers were late with their sourdough orders."',
        ),
        (
            'Nearer plural "hikers" controls the verb after neither…nor. '
            'Singular "guide" at the front cannot save a singular verb. '
            'The written "was notified" fails the proximity test.',
            None,
            None,
            'repair to "Neither the guide nor the hikers were notified of the trail closure."',
        ),
        (
            'Plural "pages" requires "there are," not "there is." '
            '"Several" is a strong plural cue after there. '
            "Missing pages do not become singular just because the scrapbook is one object.",
            None,
            None,
            'repair to "There are several pages missing from the scrapbook."',
        ),
        (
            '"Each of" needs a singular verb even when campsites look plural. '
            '"Its" already signals singular; keep the verb singular too. '
            "Campsites in the of-phrase do not govern agreement.",
            None,
            None,
            'repair to "Each of the campsites has its own fire pit."',
        ),
        (
            'Formal plural data correctly takes "show." '
            "Match data with plural verbs in exam answers unless told otherwise. "
            "Last month's surveys modify data; they do not make it singular.",
            "Formal data → plural.",
            None,
            'formal plural "data" correctly takes "show."',
        ),
    ]

    # --- Task 9 (3/5) ---
    packs["en-g-3-09"] = [
        (
            'Nearer plural "volunteers" correctly takes "have released." '
            'Read only from "nor" to the verb if the front of the sentence feels busy. '
            "Secretary at the start does not control agreement.",
            None,
            None,
            'nearer plural "volunteers" correctly takes "have released."',
        ),
        (
            "Singular project lead plus along with helpers correctly takes \"has signed.\" "
            "Parenthetical helpers do not join the subject. "
            'Strip the insert and "the project lead has signed" must stand alone.',
            "Along with ≠ and.",
            None,
            'singular "project lead" correctly takes "has signed."',
        ),
        (
            'Plural "conditions" correctly takes "remain." '
            'Invert mentally: "two conditions remain before we can start." '
            "There-lines with remain still match the postponed plural subject.",
            None,
            None,
            'plural "conditions" correctly takes "remain."',
        ),
        (
            '"Every one" is singular, so "meets" is right. '
            '"Every one of the shortlisted bakers" still points to a single unit for agreement. '
            "Hygiene checklist content does not change number.",
            None,
            None,
            '"every one of" correctly takes singular "meets."',
        ),
        (
            '"The number of active memberships" is singular — one count being reduced. '
            "Passive voice does not change the number of the subject. "
            'The written "are being reduced" wrongly agrees with "memberships."',
            None,
            "Agreeing with the of-phrase noun in a passive still looks polished — and still fails.",
            'repair to "The number of active memberships is being reduced this quarter."',
        ),
    ]

    # --- Task 10 (3/5) ---
    packs["en-g-3-10"] = [
        (
            'Nearer plural "passengers" needs a plural verb after neither…nor. '
            "Long titles after nor still keep their plural number. "
            "Driver at the front is irrelevant to the verb choice.",
            None,
            "A singular opener after neither…nor often fools you into writing was — proximity still rules.",
            'repair to "Neither the driver nor the passengers were listed on the boarding sheet."',
        ),
        (
            '"A number of rules" needs a plural verb because several rules have been waived. '
            'The of-phrase noun is plural, and "a number of" takes that plurality. '
            "House-agreement wording does not singularise the group.",
            None,
            'Perfect passive "has been waived" still looks careful while disagreeing with a plural group.',
            'repair to "A number of rules in the house agreement have been waived."',
        ),
        (
            '"Too many variables" is plural, so write "there are," not "there is." '
            '"Many" after there is a strong plural signal. '
            "Open variables in the recipe stay plural.",
            "Many / several / few after there → plural verb.",
            None,
            'repair to "There are too many variables still open in the recipe."',
        ),
        (
            'Singular "chair" governs "was delayed"; secretaries are only an as-well-as insert. '
            'Cross out the insert and re-read: "the chair was delayed by the vote." '
            "The insert never becomes a co-subject.",
            None,
            None,
            'singular "chair" correctly takes "was delayed."',
        ),
        (
            'Formal plural data correctly takes "do not yet justify." '
            'Past participles after data ("collected overnight") do not make the noun singular. '
            "Keep the plural exam default.",
            None,
            None,
            'formal plural "data" correctly takes "do not."',
        ),
    ]

    # --- Task 11 (3/5) ---
    packs["en-g-3-11"] = [
        (
            '"Each monthly playlist" takes singular "goes." '
            "Long modifiers after each do not change singularity. "
            "Submitted-by-the-DJs material is descriptive only.",
            None,
            None,
            '"each … playlist" correctly takes singular "goes."',
        ),
        (
            'Nearer plural "solicitors" correctly takes "have consented." '
            'Possessive "tenants\'" does not make the nearer noun singular. '
            "Repair-plan content is irrelevant to agreement.",
            None,
            None,
            'nearer plural "solicitors" correctly takes "have consented."',
        ),
        (
            'Although "appears" can introduce a clause, the logical subject "several gaps" is plural. '
            "In there + appear/seem, still match the notional plural subject in careful exam English. "
            "Formal tone does not excuse a number clash.",
            None,
            '"There appears to be several" sounds careful but still disagrees with a plural complement.',
            'repair to "There appear to be several gaps in the packing checklist."',
        ),
        (
            "Singular host plus together with two editors needs a singular verb. "
            "Editors after together with are not co-subjects. "
            "Pitching tomorrow does not change the head subject's number.",
            None,
            "Together with two editors looks like a compound subject — it is only an insert.",
            'repair to "The podcast host, together with two editors, is pitching tomorrow."',
        ),
        (
            '"The number of unsettled bookings" correctly takes singular "has dropped." '
            "Keep agreeing with number, not bookings. "
            "Below fifty describes the count; it does not pluralise the verb.",
            None,
            None,
            '"the number of" correctly takes singular "has dropped."',
        ),
    ]

    # --- Task 12 (3/5) ---
    packs["en-g-3-12"] = [
        (
            '"A number of regional coaches" needs a plural verb. '
            'Replace with "several coaches" to hear the plurality. '
            "Training-weekend content does not affect number.",
            None,
            'Singular "is attending" after "a number of" is the classic article-flip error.',
            'repair to "A number of regional coaches are attending the training weekend."',
        ),
        (
            'Nearer plural "guests" needs a plural verb after neither…nor. '
            'Do not let singular "host" pull the verb. '
            "Extending the stay is irrelevant to agreement.",
            None,
            "Singular host at the front routinely hijacks the verb choice after nor.",
            'repair to "Neither the host nor the guests were willing to extend the stay."',
        ),
        (
            'Singular "one schedule" correctly takes "there is." '
            '"Only one" is a reliable singular signal after there. '
            "Finalising before the show does not change the head.",
            None,
            None,
            'singular "one schedule" correctly takes "there is."',
        ),
        (
            '"Every volunteer" needs singular "has signed," not "have signed." '
            '"On the stall" is only a locator phrase. '
            "Rota-sheet detail does not pluralise every.",
            None,
            None,
            'repair to "Every volunteer on the stall has signed the rota sheet."',
        ),
        (
            'Formal plural data correctly takes "contradict." '
            "Plural verbs with data are expected in formal register. "
            "Appendix location does not singularise the noun.",
            "Formal data → plural.",
            None,
            'formal plural "data" correctly takes "contradict."',
        ),
    ]

    # --- Task 13 (4/5) ---
    packs["en-g-3-13"] = [
        (
            'Nearer singular "lawyer" correctly takes "has requested." '
            "A singular nearer noun wins even when plural sellers sit earlier in the chain. "
            "Delay content does not affect number.",
            "Neither…nor: nearer noun, whatever its number.",
            None,
            'nearer singular "lawyer" correctly takes "has requested."',
        ),
        (
            'Singular head chef governs "reviews" despite along with the sous-chefs. '
            'Strip the insert; "the head chef reviews" must stand alone. '
            "Nightly specials are just the object.",
            None,
            None,
            'singular "head chef" correctly takes "reviews."',
        ),
        (
            'Plural "RSVPs" correctly takes "there are." '
            '"A few" marks plurality after there. '
            "Classmates in the of-phrase do not change the head's number.",
            None,
            None,
            'plural "RSVPs" correctly takes "there are."',
        ),
        (
            '"Each of the flatshare partners" takes singular "retains." '
            "Partners in the of-phrase do not control the verb. "
            "Spare-key content is irrelevant to agreement.",
            None,
            None,
            '"each of" correctly takes singular "retains."',
        ),
        (
            'Formal plural data correctly takes "suggest." '
            'Participial modifiers ("underlying the fitness test") never change data\'s formal plurality. '
            "Limited injury risk is the claim, not the subject.",
            "Data stays plural under modifiers.",
            None,
            'formal plural "data" correctly takes "suggest."',
        ),
    ]

    # --- Task 14 (4/5) ---
    packs["en-g-3-14"] = [
        (
            '"The number of unresolved tickets" is a singular total alarming the helpdesk. '
            "Continuous forms still follow the head subject's number. "
            'The written "are alarming" wrongly agrees with "tickets."',
            None,
            "Progressive \"are alarming\" after \"the number of\" is a polished near-miss.",
            'repair to "The number of unresolved tickets is alarming the helpdesk."',
        ),
        (
            'Nearer plural "team captains" needs a plural verb after neither…nor. '
            "Long second nouns after nor are still plural when marked -s. "
            "Closed-meeting detail is irrelevant.",
            None,
            "Singular \"was invited\" after a plural nearer noun is the classic proximity miss.",
            'repair to "Neither the sponsor nor the team captains were invited to the closed meeting."',
        ),
        (
            'Prefer "there seem to be several inconsistencies" to match the plural complement. '
            "Seem/appear after there must still track the real subject's number in careful usage. "
            "Two diaries make the plural clear.",
            None,
            '"There seems to be several" looks formal while disagreeing with a plural complement.',
            'repair to "There seem to be several inconsistencies between the two diaries."',
        ),
        (
            "Singular managing editor plus as well as the reporters needs a singular verb. "
            "Reporters after as well as are not co-subjects. "
            "Feature approval is the object only.",
            None,
            "As well as the reporters looks like and — but it never creates a plural compound subject.",
            'repair to "The managing editor, as well as the reporters, has approved the feature."',
        ),
        (
            '"A number of clauses" correctly takes plural "survive." '
            "Present simple plural has no -s: survive, not survives. "
            "Completion timing does not change agreement.",
            None,
            None,
            '"a number of" correctly takes plural "survive."',
        ),
    ]

    # --- Task 15 (4/5) ---
    packs["en-g-3-15"] = [
        (
            'Nearer plural "branches" needs a plural verb after neither…nor. '
            'Possessives ("its") before the nearer noun do not singularise it. '
            "Sunday-rule content is irrelevant to number.",
            None,
            '"Its branches is" looks smooth because of the possessive, yet branches stay plural.',
            'repair to "Neither the shop nor its branches are bound by the Sunday rule."',
        ),
        (
            '"Every one of the contingent prizes" correctly takes singular "has been disclosed." '
            "Passive perfect still keeps singular agreement with every one. "
            "Notes disclosure does not pluralise the subject.",
            None,
            None,
            '"every one of" correctly takes singular "has been disclosed."',
        ),
        (
            'Plural "three material open points" correctly takes "remain," even with a mid-sentence insert. '
            'Ignore the comma aside ("after the rethink") and match the postponed plural subject. '
            "Rethink wording is padding only.",
            "Delete the aside; match the plural subject after there.",
            None,
            'plural "open points" correctly takes "remain."',
        ),
        (
            'Singular coach correctly takes "was accountable" despite together with the squad captains. '
            "Together with never creates a plural subject. "
            "Overspend accountability stays with the coach grammatically.",
            None,
            None,
            'singular "coach" correctly takes "was accountable."',
        ),
        (
            'Formal plural data correctly takes "confirm." '
            'Time adjuncts ("this morning") are irrelevant to number. '
            "Earlier forecast is the object, not the subject.",
            None,
            None,
            'formal plural "data" correctly takes "confirm."',
        ),
    ]

    # --- Task 16 (4/5) ---
    packs["en-g-3-16"] = [
        (
            '"A number of practice drills" needs a plural verb. '
            "Long plural noun phrases after a number of still take plural verbs. "
            "Club-meeting timing does not singularise the drills.",
            None,
            'Singular "was revised" after "a number of" is a near-miss that trusts the word number.',
            'repair to "A number of practice drills were revised after the club meeting."',
        ),
        (
            'Nearer plural "mentors" needs a plural verb after neither…nor. '
            '"Students\'" only marks possession; mentors remain plural. '
            "Timetable objections do not change number.",
            None,
            "A possessive before the nearer noun often disguises a plural subject after nor.",
            'repair to "Neither the tutor nor the students\' mentors have objected to the timetable."',
        ),
        (
            'Plural "bills" needs "there are," despite the interrupting phrase. '
            "Cross out the contrary-to aside before choosing is/are. "
            "Unpaid bills on the fridge stay plural.",
            None,
            "A long aside after there is designed to hide a plural delayed subject.",
            'repair to "There are, contrary to the notice, several unpaid bills still on the fridge."',
        ),
        (
            '"Each branch" needs singular "files," not "file." '
            'Relative clauses after each ("that operates abroad") do not licence a plural verb. '
            "Local certificates are the object only.",
            None,
            "A relative clause after each can make a plural verb look almost justified — it is not.",
            'repair to "Each branch that operates abroad files a local safety certificate."',
        ),
        (
            '"The number of noise complaints" correctly takes singular "has stabilised." '
            "Keep contrasting the number (singular) with a number (plural). "
            "Quiet hours describe the time frame, not the subject's number.",
            None,
            None,
            '"the number of" correctly takes singular "has stabilised."',
        ),
    ]

    # --- Task 17 (5/5) ---
    packs["en-g-3-17"] = [
        (
            'Nearer plural "teams" needs a plural verb after neither…nor. '
            "Extra adjectives before the nearer noun do not change its plural number. "
            "Report content is irrelevant to agreement.",
            None,
            "Satellite teams are still plural after nor, even with a singular club up front.",
            'repair to "Neither the parent club nor the satellite teams were named in the report."',
        ),
        (
            'Singular "box office" plus along with stewards needs "approves," not "approve." '
            "Box office is a singular institutional subject here. "
            "Front-of-house stewards stay in the insert.",
            None,
            "Institutional singulars plus human along-with inserts are a favourite reverse trap.",
            'repair to "The box office, along with the front-of-house stewards, approves large group bookings."',
        ),
        (
            'The complement "a single bottleneck" is singular, so write "there appears to be." '
            "Appear/seem after there must track a singular complement too — not only plurals. "
            "One bottleneck, singular verb.",
            None,
            "Learners overcorrect to plural appear after there even when the complement is singular.",
            'repair to "There appears to be a single bottleneck in the check-in workflow."',
        ),
        (
            '"Every set" is singular, so "is reviewed" is right. '
            '"Set of notes" is one unit; every keeps it singular. '
            "Director review is the passive agent, not the subject.",
            "Every set of… → singular.",
            None,
            '"every set" correctly takes singular "is reviewed."',
        ),
        (
            'Formal plural data correctly takes "are drawn," even inside a which-clause sandwich. '
            "Relative clauses around data do not convert it to singular on formal papers. "
            "Audited scores are the source, not a singulariser.",
            None,
            None,
            'formal plural "data" correctly takes "are drawn."',
        ),
    ]

    # --- Task 18 (5/5) ---
    packs["en-g-3-18"] = [
        (
            'Nearer plural "helpers" correctly takes "have accepted." '
            "Long nearer nouns after nor still obey proximity. "
            "Revised-timetable content does not affect number.",
            None,
            None,
            'nearer plural "helpers" correctly takes "have accepted."',
        ),
        (
            'Singular general editor governs "has cleared" despite together with outside advisers. '
            "Together with outside advisers is parenthetical only. "
            "Disclosure clearance stays with the editor grammatically.",
            "Together with ≠ and.",
            None,
            'singular "general editor" correctly takes "has cleared."',
        ),
        (
            'Plural "two rules" correctly takes "remain" despite the formal aside. '
            "Padding between there and the subject changes nothing. "
            "Avoidance-of-doubt wording is decorative.",
            "Delete the aside; two rules remain.",
            None,
            'plural "two rules" correctly takes "remain."',
        ),
        (
            '"Each of the house agreements" takes singular "provides." '
            "Agreements in the of-phrase stay out of the verb slot. "
            "Stepped fines are the object of the preposition, not the subject.",
            None,
            None,
            '"each of" correctly takes singular "provides."',
        ),
        (
            'Formal plural data correctly takes "support." '
            'Past participles like "furnished" do not singularise data. '
            "Higher ranking is the claim, not the subject.",
            None,
            None,
            'formal plural "data" correctly takes "support."',
        ),
    ]

    # --- Task 19 (5/5) ---
    packs["en-g-3-19"] = [
        (
            '"A number of material safety clauses" needs a plural verb. '
            "Dense noun phrases still follow the a-number-of plural rule. "
            "Overnight timing does not singularise the clauses.",
            None,
            "A long technical noun phrase makes singular \"was triggered\" look almost technical — it is not.",
            'repair to "A number of material safety clauses were triggered overnight."',
        ),
        (
            'Nearer plural "stewards" needs a plural verb after neither…nor. '
            'Extra modifiers after the nearer noun ("in the group") do not make it singular. '
            "Waiving the rule is content only.",
            None,
            "Modifiers after the nearer noun invite a false singular after nor.",
            'repair to "Neither the organiser nor the other stewards in the group were prepared to waive the rule."',
        ),
        (
            '"More than two conflicting dates" is plural, so write "there are," not "there is." '
            "Quantity phrases greater than one take plural after there. "
            "The long when-clause is only an interruption.",
            None,
            "A long when-clause after there is designed to hide a plural quantity phrase.",
            'repair to "There are, when one examines the schedules carefully, more than two conflicting dates."',
        ),
        (
            "Singular lead reviewer plus as well as the marking team needs a singular verb. "
            "Marking team after as well as is not a co-subject. "
            "Opinion content does not affect number.",
            None,
            "As well as the marking team looks like a plural co-subject — agreement still follows the head.",
            'repair to "The lead reviewer, as well as the marking team, was responsible for the opinion."',
        ),
        (
            'Formal plural data correctly takes "have been restated." '
            "Prefer plural agreement with data on formal exams unless the paper allows informal singular data. "
            "The model-relies-on clause does not singularise data.",
            None,
            None,
            'formal plural "data" correctly takes "have been restated."',
        ),
    ]

    # --- Task 20 (5/5) ---
    packs["en-g-3-20"] = [
        (
            'Nearer plural "shadow captains" correctly takes "have disclosed." '
            "Doublets after nor still obey proximity. "
            "Interest disclosures do not change number.",
            None,
            None,
            'nearer plural "shadow captains" correctly takes "have disclosed."',
        ),
        (
            '"The number of days between practices" correctly takes singular "has improved." '
            "Of-phrases do not pluralise the number. "
            "Fitness-drive timing is irrelevant to agreement.",
            None,
            None,
            '"the number of" correctly takes singular "has improved."',
        ),
        (
            'Plural "fewer exceptions" correctly takes "there appear to be." '
            "Fewer is a plural cue; match appear accordingly. "
            "Checklist content does not affect number.",
            "There appear to be + fewer…",
            None,
            'plural "fewer exceptions" correctly takes "appear."',
        ),
        (
            '"Every parcel that exceeds the weight limit" correctly takes singular "requires." '
            "Relative clauses after every keep the verb singular. "
            "Second-label content is the object only.",
            None,
            None,
            '"every parcel" correctly takes singular "requires."',
        ),
        (
            "Singular head teacher plus along with the independent governors needs a singular verb. "
            "Governors in the insert never join the subject. "
            "Dissenting-note content does not pluralise the head.",
            None,
            "Along with independent governors is the last plural distractor — strip it and the head stays singular.",
            'repair to "The head teacher, along with the independent governors, has tabled a dissenting note."',
        ),
    ]

    for task in data["tasks"]:
        tid = task["id"]
        assert tid in packs, tid
        stmts = task["statements"]
        keys = task["answer_key"]
        rows = packs[tid]
        assert len(rows) == 5
        out = []
        for i, (body, tip, trap, close) in enumerate(rows):
            out.append(
                expl(
                    LETTERS[i],
                    stmts[i],
                    body,
                    tip=tip,
                    trap=trap,
                    holds=bool(keys[i]),
                    close=close,
                )
            )
        task["tactical_explanations"] = out

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {PATH}")
    # quick sanity
    for task in data["tasks"]:
        assert len(task["tactical_explanations"]) == 5
        for i, e in enumerate(task["tactical_explanations"]):
            assert e.startswith(f"**{LETTERS[i]}) ")
            assert "So the statement" in e
            assert task["statements"][i] in e or task["statements"][i].rstrip(".") in e
    print("OK: 20 tasks × 5 explanations validated")


if __name__ == "__main__":
    main()
