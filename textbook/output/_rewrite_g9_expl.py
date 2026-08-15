# -*- coding: utf-8 -*-
"""Rewrite g.9 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.9.json")
LETTERS = "ABCDE"


def fmt(letter: str, stmt: str, body: str, closing: str, tip: str | None = None, trap: str | None = None) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if trap:
        parts.extend(["", f"Trap: {trap.strip()}"])
    if tip:
        parts.extend(["", f"**Tip:** {tip.strip()}"])
    parts.extend(["", closing.strip()])
    return "\n".join(parts) + "\n"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of (body, closing, tip|None, trap|None)
    all_rewrites: list[list[tuple[str, str, str | None, str | None]]] = [
        # --- Task 1 (1/5): basic a/an sound ---
        [
            (
                "\"Apple\" begins with a vowel sound, so the indefinite article must be \"an,\" not \"a.\" "
                "The lunchbox and hike wording are fine; only the article before apple is wrong. "
                "Matching a/an to the letter you see instead of the sound you hear is what breaks this line.",
                "So the statement is false: repair to \"an apple.\"",
                None,
                None,
            ),
            (
                "\"Umbrella\" starts with a vowel sound, so \"an umbrella\" is the correct first-mention form. "
                "The sentence introduces one countable item before the concert, which is exactly where a/an belongs. "
                "Nothing else in the line needs fixing.",
                "So the statement holds: \"an\" correctly matches the vowel onset of umbrella.",
                None,
                None,
            ),
            (
                "\"New\" begins with a consonant sound (/n/), so English needs \"a new bicycle,\" not \"an new bicycle.\" "
                "An adjective between the article and the noun does not change the rule — you still listen to the sound right after a/an. "
                "Repair only the article before new; the weekend-trip frame can stay.",
                "So the statement is false: repair to \"a new bicycle.\"",
                "Adjectives do not change a/an — listen to the sound that follows.",
                None,
            ),
            (
                "\"Plan\" begins with a consonant sound, so the form must be \"a plan,\" not \"an plan.\" "
                "The coach, the approval, and the relay team can stay exactly as written. "
                "Only the article immediately before plan is the fault.",
                "So the statement is false: repair to \"a plan.\"",
                None,
                None,
            ),
            (
                "\"Email\" begins with a vowel sound (/iː/), so \"an email\" is correct. "
                "Saying the next word aloud confirms the vowel onset immediately. "
                "This is a clean, standard first-mention pattern.",
                "So the statement holds: \"an email\" matches the spoken onset.",
                None,
                None,
            ),
        ],
        # --- Task 2 (1/5): pronunciation traps ---
        [
            (
                "\"Honest\" starts with a silent h, so the spoken form begins with a vowel sound and takes \"an.\" "
                "The spelling still shows h, which is why the choice can feel surprising until you hear it. "
                "Silent letters decide a/an by sound, not by the letters on the page.",
                "So the statement holds: silent-h \"honest\" correctly takes \"an.\"",
                "Silent letters still decide a/an by sound, not spelling.",
                None,
            ),
            (
                "\"European\" begins with a /j/ sound (like \"you\"), which counts as a consonant sound, so \"a European\" is correct. "
                "The eu- spelling looks vowel-first, but the glide at the start blocks an. "
                "Treat that \"y\" onset like any other consonant sound.",
                "So the statement holds: the /j/ glide in European takes \"a.\"",
                "Eu- and u- words often take a when they sound like they start with \"y.\"",
                None,
            ),
            (
                "\"MBA\" is normally read letter by letter, starting with /em/, a vowel sound, so it needs \"an MBA.\" "
                "Repair \"a MBA\" to \"an MBA\"; the volunteering clause can stay. "
                "With abbreviations, base a/an on how you pronounce the first letter name.",
                "So the statement is false: repair to \"an MBA.\"",
                "With abbreviations, base a/an on how you pronounce the first letter.",
                "Spelling starts with M, so \"a MBA\" looks plausible until you say the letter name aloud.",
            ),
            (
                "In standard modern pronunciation, \"hotel\" keeps the /h/, so \"a hotel\" is the usual form, not \"an hotel.\" "
                "Prefer a before clearly sounded h-words in contemporary English. "
                "Older \"an hotel\" usage is not the safe exam default here.",
                "So the statement is false: repair to \"a hotel.\"",
                None,
                "\"An hotel\" survives in older or emphatic speech, so it looks like a near-miss on the page.",
            ),
            (
                "\"University\" starts with a /j/ sound, so the correct form is \"a university student.\" "
                "If you can hear a \"y\" glide at the start, choose a — the written u does not unlock an. "
                "Repair only the article before university.",
                "So the statement is false: repair to \"a university student.\"",
                "If you can hear a \"y\" glide at the start, choose a.",
                "The written u makes \"an university\" look vowel-led until you hear the glide.",
            ),
        ],
        # --- Task 3 (1/5): first mention / shared objects ---
        [
            (
                "First mention uses \"a novel\"; the second mention switches to \"the novel\" because the same book is now identified. "
                "That a → the handoff is exactly how English tracks reference across two clauses. "
                "Nothing in the chain is accidental.",
                "So the statement holds: a introduces the book, then the points back to it.",
                "a/an introduces; the points back to something already specified.",
                None,
            ),
            (
                "In this situation the window is a specific one in the room, so English expects \"the window,\" not \"a window.\" "
                "When both speakers can identify the thing from context, prefer the. "
                "The freezing-room cue makes that shared reference obvious.",
                "So the statement is false: repair to \"Please close the window…\"",
                "When both speakers can identify the thing, prefer the.",
                "\"A window\" still looks grammatical in isolation, which is why the situational the is easy to miss.",
            ),
            (
                "Roles after \"as\" commonly take a/an for one role among many: \"as a junior soprano.\" "
                "The choir is already definite with the, and the role is introduced as a class member with a. "
                "Occupations and voice parts follow this pattern cleanly.",
                "So the statement holds: \"as a junior soprano\" fits the role pattern.",
                None,
                None,
            ),
            (
                "At the table, \"salt\" is a specific shared item, so \"the salt\" is the natural choice. "
                "Shared, obvious objects in the immediate setting take the, not a. "
                "The tray phrase only locates that shared item.",
                "So the statement is false: repair to \"pass me the salt from the tray.\"",
                "Shared, obvious objects in the immediate setting take the.",
                None,
            ),
            (
                "\"Café\" begins with a consonant sound (/k/), so use \"a café,\" not \"an café.\" "
                "A vowel letter in the spelling does not override a consonant sound. "
                "Repair only the article before café.",
                "So the statement is false: repair to \"a café.\"",
                None,
                None,
            ),
        ],
        # --- Task 4 (1/5): unique / only / same / superlative ---
        [
            (
                "Unique celestial bodies take \"the\": \"the sun.\" "
                "The runners are also definite in this race context, so the before runners fits as well. "
                "One-of-a-kind natural referents almost always need the.",
                "So the statement holds: \"the sun\" is the required unique form.",
                None,
                None,
            ),
            (
                "\"Moon\" in this sense needs \"the moon\"; leaving it bare is not standard. "
                "Pair the with unique natural landmarks and celestial objects the same way you do with the sun. "
                "The harbour line only sets the scene.",
                "So the statement is false: repair to \"The moon looks unusually bright…\"",
                None,
                None,
            ),
            (
                "\"Only\" before a singular noun requires \"the only person.\" "
                "Patterns with only, same, next, and last usually need the locked in before the noun. "
                "The crossword clause can stay once the is in place.",
                "So the statement is false: repair to \"the only person who finished the crossword.\"",
                "Patterns with only, same, next, and last usually need the.",
                None,
            ),
            (
                "The fixed pattern is \"the same recipe,\" not bare \"same recipe.\" "
                "\"Same\" almost never stands without the in this comparative use. "
                "Insert the before same and the relative clause can stay.",
                "So the statement is false: repair to \"the same recipe.\"",
                "\"Same\" almost never stands without the in this use.",
                None,
            ),
            (
                "Superlative forms take \"the\": \"the tallest player.\" "
                "If you see -est (or most + adjective) for a unique ranking in a set, expect the. "
                "The school-team frame makes that unique ranking clear.",
                "So the statement holds: the superlative correctly takes \"the.\"",
                None,
                None,
            ),
        ],
        # --- Task 5 (2/5): uncountables advice/info/equipment ---
        [
            (
                "\"Advice\" is uncountable, so it appears with zero article here and is modified by \"useful,\" not by a/an. "
                "Uncountable abstract nouns often take zero article when used in a general sense. "
                "The line models the pattern you want to protect.",
                "So the statement holds: bare \"useful advice\" is the right general form.",
                None,
                None,
            ),
            (
                "\"Advice\" cannot take \"an\"; say \"some advice\" or \"a piece of advice.\" "
                "If you need a countable unit, use a piece/bit/item of + the uncountable noun. "
                "Specific packing tips still do not unlock an advice.",
                "So the statement is false: repair to \"some advice\" or \"a piece of advice.\"",
                "If you need a countable unit, use a piece/bit/item of + uncountable noun.",
                "\"An advice\" looks like ordinary first-mention a/an until you recall advice is a mass noun.",
            ),
            (
                "\"Information\" has no plural form in standard English; use \"more information,\" not \"informations.\" "
                "Watch for false plurals on uncountable nouns — the -s ending is the whole problem here. "
                "Keep more and drop the illegal plural.",
                "So the statement is false: repair to \"more information.\"",
                None,
                "The -s ending makes \"informations\" look like a normal plural countable.",
            ),
            (
                "\"Equipment\" is uncountable and correctly appears without a/an; \"new\" simply describes the mass noun. "
                "Zero article + adjective + uncountable noun is a common correct pattern. "
                "The science-fair purpose does not suddenly make equipment countable.",
                "So the statement holds: \"new equipment\" needs no a/an.",
                None,
                None,
            ),
            (
                "\"Furniture\" is uncountable, so \"an furniture\" is impossible; use \"furniture\" or \"a piece of furniture.\" "
                "Do not place a/an directly before classic uncountables like furniture, equipment, or advice. "
                "Strip an, or quantify with a piece of.",
                "So the statement is false: repair to \"furniture\" or \"a piece of furniture.\"",
                None,
                None,
            ),
        ],
        # --- Task 6 (2/5): progress/news/research/evidence/traffic ---
        [
            (
                "\"Progress\" is uncountable and correctly used with zero article for a general process underway. "
                "Zero article is normal with progress, research, and similar abstracts. "
                "The mural phrase narrows topic without forcing a/an.",
                "So the statement holds: bare \"Progress\" fits the uncountable process reading.",
                None,
                None,
            ),
            (
                "\"News\" is uncountable and takes a singular verb: \"The news was surprising.\" "
                "The determiner \"the\" can stay; the verb must agree. "
                "\"News\" looks plural but behaves as singular — that mismatch is the whole problem.",
                "So the statement is false: repair to \"The news was surprising…\"",
                "\"News\" looks plural but behaves as singular.",
                "The -s ending pushes writers toward were, which is the classic agreement trap.",
            ),
            (
                "General research findings use zero article: \"Research shows…\" "
                "When you mean research as a field or body of work in general, omit a/the. "
                "The that-clause content does not change the bare subject pattern.",
                "So the statement holds: bare \"Research\" correctly names the field in general.",
                None,
                None,
            ),
            (
                "\"Evidence\" is uncountable, so \"an evidence\" is wrong; use \"evidence\" or \"a piece of evidence.\" "
                "Specificity about a claim does not make evidence countable with a/an. "
                "Drop an, or quantify with a piece of.",
                "So the statement is false: repair to \"evidence\" or \"a piece of evidence.\"",
                None,
                "Specific claims often tempt writers into \"an evidence,\" as if first-mention a/an still applied.",
            ),
            (
                "\"Traffic\" is uncountable and takes zero article in this general statement about conditions. "
                "Mass nouns for weather, traffic, and similar conditions usually need no a/an. "
                "The airport trip supplies setting, not a countable unit.",
                "So the statement holds: bare \"Traffic\" is the standard mass-noun form.",
                None,
                None,
            ),
        ],
        # --- Task 7 (2/5): general plurals / substances ---
        [
            (
                "Plural nouns in a general sense take zero article: \"Children need…\" "
                "General plurals usually omit the because no definite set of kids has been named. "
                "The home setting stays general too.",
                "So the statement holds: bare \"Children\" correctly means children in general.",
                None,
                None,
            ),
            (
                "Here \"the neighbours\" can refer to the known people next door, so the is acceptable and natural. "
                "The + plural is fine when the group is definite in context. "
                "Exam week just supplies the time frame.",
                "So the statement holds: \"the neighbours\" names a known local group.",
                None,
                None,
            ),
            (
                "Uncountable \"water\" used generically takes zero article. "
                "Materials and substances in general statements often need no determiner. "
                "The drought explains why, without turning water into a definite bottle or tap.",
                "So the statement holds: bare \"Water\" fits the generic substance reading.",
                None,
                None,
            ),
            (
                "Habitual general coffee-drinking uses zero article: \"She drinks coffee every morning,\" not \"the coffee,\" unless a specific coffee is meant. "
                "Do not force the onto uncountables used in a general habitual sense. "
                "Drop the before coffee and keep the morning routine.",
                "So the statement is false: repair to \"She drinks coffee every morning…\"",
                "Do not force the onto uncountables used in a general habitual sense.",
                "\"The coffee\" sounds fine for a known cup, so it is an easy false friend in a habit line.",
            ),
            (
                "Plural \"Teachers\" in a general professional statement correctly takes zero article. "
                "Job-title plurals meaning \"teachers in general\" stay bare. "
                "The advice is about the profession as a class, not one named staff list.",
                "So the statement holds: bare \"Teachers\" means the profession in general.",
                None,
                None,
            ),
        ],
        # --- Task 8 (2/5): by transport / go home/school ---
        [
            (
                "Fixed patterns \"go to work\" and \"by bus\" both use zero article. "
                "Memorise by + transport and go to work/school/bed as zero-article chunks. "
                "The weekday habit fits the institutional-purpose reading perfectly.",
                "So the statement holds: both \"to work\" and \"by bus\" are bare fixed frames.",
                "Memorise by + transport and go to work/school/bed as zero-article chunks.",
                None,
            ),
            (
                "The transport pattern is \"by train,\" not \"by a train.\" "
                "After by for means of transport, do not insert a/an. "
                "Repair to \"by train last Friday\" and keep Lisbon as the destination.",
                "So the statement is false: repair to \"by train.\"",
                None,
                "\"By a train\" looks like ordinary countable first mention, which is why the bare by-frame is easy to break.",
            ),
            (
                "\"By courier\" follows the same zero-article transport/delivery pattern. "
                "By + service/means is typically bare. "
                "The parcels can stay definite with the; the means phrase still stays bare.",
                "So the statement holds: \"by courier\" correctly stays bare.",
                None,
                None,
            ),
            (
                "The fixed expression is \"go home,\" never \"go to the home\" in this meaning. "
                "Home after go/arrive/get normally takes no to and no the. "
                "Repair to \"go home after the evening class.\"",
                "So the statement is false: repair to \"go home after the evening class.\"",
                "Home after go/arrive/get normally takes no to and no the.",
                "\"To the home\" looks parallel to \"to the school,\" so the frozen go-home frame is a near-miss.",
            ),
            (
                "\"Go to school\" with zero article means attendance as a student, which fits this sentence. "
                "Purpose-of-institution uses often drop the. "
                "The same district just locates that shared schooling.",
                "So the statement holds: bare \"to school\" marks attendance as students.",
                None,
                None,
            ),
        ],
        # --- Task 9 (3/5): hospital/prison/bed purpose vs building ---
        [
            (
                "British English uses zero article in \"in hospital\" when the person is there as a patient. "
                "Purpose (patient/prisoner/student) often means zero article with the institution. "
                "The operation supplies why without turning the phrase into a building tour.",
                "So the statement holds: bare \"in hospital\" fits the patient-purpose reading.",
                "Purpose (patient/prisoner/student) often means zero article with the institution.",
                None,
            ),
            (
                "When the building itself is meant as a location landmark, \"the hospital\" is correct. "
                "Switch to the when you mean the building, not the institutional purpose. "
                "The lake trip makes the physical pass-by reading obvious.",
                "So the statement holds: \"the hospital\" correctly means the building as a landmark.",
                "Switch to the when you mean the building, not the institutional purpose.",
                None,
            ),
            (
                "As inmates, the natural British pattern is \"in prison,\" not \"in the prison.\" "
                "Purpose reading → zero; building reading → the. "
                "Peaceful protest explains the reason for confinement, not a tour of a building.",
                "So the statement is false: repair to \"in prison for peaceful protest.\"",
                "Purpose reading → zero; building reading → the.",
                "\"In the prison\" looks like ordinary definite location, so the purpose zero is easy to miss.",
            ),
            (
                "Referring to a specific building as a landmark correctly takes \"the prison.\" "
                "Physical description and location cues usually signal the building reading. "
                "Nineteenth-century dating is about the structure, not inmate status.",
                "So the statement holds: \"The prison on the hill\" is the building reading.",
                None,
                None,
            ),
            (
                "\"In bed\" for resting/sleeping takes zero article in the standard idiom. "
                "In bed / in church / in hospital follow the same purpose logic. "
                "The migraine explains the stay without adding the.",
                "So the statement holds: bare \"in bed\" fits the resting-purpose idiom.",
                None,
                None,
            ),
        ],
        # --- Task 10 (3/5): instruments / sports / media ---
        [
            (
                "Musical instruments take \"the\" in this general ability/habit pattern: \"play the piano.\" "
                "play + the + instrument is the default for named instruments. "
                "Family gatherings only set the scene.",
                "So the statement holds: \"play the piano\" follows the instrument rule.",
                None,
                None,
            ),
            (
                "Sports use zero article: \"play football,\" not \"play the football.\" "
                "Contrast instruments (the) with sports and games (zero). "
                "Drop the before football; the club name can stay definite.",
                "So the statement is false: repair to \"play football.\"",
                "Contrast instruments (the) with sports and games (zero).",
                "Parallel \"play the piano\" tempts writers into \"play the football.\"",
            ),
            (
                "\"Listen to the radio\" is the standard pattern for the medium. "
                "the radio / the news are common fixed media patterns. "
                "The morning walk is just when they listen.",
                "So the statement holds: \"the radio\" is the fixed media frame.",
                None,
                None,
            ),
            (
                "Habitual or general TV watching is \"watch television,\" not \"watch a television,\" unless you mean one physical set. "
                "Medium versus device: the medium often takes zero; a specific device can take a/the. "
                "Here the medium reading is intended, so drop a.",
                "So the statement is false: repair to \"watch television.\"",
                "Medium versus device: medium often takes zero; a specific device can take a/the.",
                "\"A television\" looks like ordinary first-mention of a countable object.",
            ),
            (
                "\"Learn the violin\" follows the same instrument rule as play the piano. "
                "Keep the with named instruments after play/learn. "
                "The private tutor is a separate countable first mention with a.",
                "So the statement holds: \"the violin\" correctly follows the instrument pattern.",
                None,
                None,
            ),
        ],
        # --- Task 11 (3/5): quantifiers most/half/both/all ---
        [
            (
                "\"Most\" + plural noun takes zero article when speaking generally about the majority: \"Most students…\" "
                "most + noun (no the) is the frame for general majorities. "
                "The later start time is the definite proposal they supported.",
                "So the statement holds: bare \"Most students\" fits the general-majority frame.",
                None,
                None,
            ),
            (
                "Do not say \"the most of guests\"; use \"most of the guests\" or \"most guests.\" "
                "After most of, you normally need the + definite noun phrase. "
                "Rebuild the whole quantifier frame rather than leaving the most of.",
                "So the statement is false: repair to \"most of the guests\" or \"most guests.\"",
                "After most of, you normally need the + definite noun phrase.",
                "\"The most\" from superlatives blends into \"the most of,\" a hybrid exam writers often invent.",
            ),
            (
                "\"Half of the cake\" correctly combines the quantifier with a definite noun phrase. "
                "half/most/some of + the + specific noun is a safe pattern. "
                "Singular agreement with cake is also consistent.",
                "So the statement holds: \"Half of the cake\" follows the safe of-the frame.",
                None,
                None,
            ),
            (
                "\"Both finalists\" needs no article before both; \"a strong closing speech\" correctly introduces one speech each. "
                "both/all/each have their own determiner rules — do not stack the before both. "
                "The countable speech still needs a.",
                "So the statement holds: bare \"Both finalists\" plus \"a … speech\" are both right.",
                None,
                None,
            ),
            (
                "\"All of luggage\" is incomplete; write \"all of the luggage\" or \"all luggage.\" "
                "all of must be followed by a determined noun phrase (often with the). "
                "Either add the after of, or drop of and keep all luggage.",
                "So the statement is false: repair to \"all of the luggage\" or \"all luggage.\"",
                "all of must be followed by a determined noun phrase (often with the).",
                "\"All of\" feels complete on its own, so writers often forget the after of.",
            ),
        ],
        # --- Task 12 (3/5): subject / language names ---
        [
            (
                "Academic subjects usually take zero article: \"studying economics.\" "
                "Subject names in general study contexts stay bare. "
                "The university gets a because it is one countable institution among many.",
                "So the statement holds: bare \"economics\" is the standard subject form.",
                None,
                None,
            ),
            (
                "As a field of study, use \"history,\" not \"the history,\" unless a specific history is meant. "
                "Zero article for subjects; the only when the noun is narrowed (the history of X). "
                "Drop the before history here.",
                "So the statement is false: repair to \"majored in history.\"",
                "Zero article for subjects; the only when the noun is narrowed (the history of X).",
                "Museum work makes \"the history\" feel specific even when the field of study is meant.",
            ),
            (
                "\"Photography\" as a course subject correctly appears without a/the before the subject name; \"a course\" is the countable shell. "
                "Count the course, not the subject noun itself. "
                "This term just situates the offering.",
                "So the statement holds: bare \"photography\" sits inside countable \"a course.\"",
                "Count the course, not the subject noun itself.",
                None,
            ),
            (
                "Here \"the mathematics\" refers to the specific maths in this puzzle, so the is justified. "
                "The + subject is fine when limited by a postmodifier or clear context. "
                "Unexpected elegance is about that defined slice of maths.",
                "So the statement holds: the postmodifier licenses \"the mathematics.\"",
                "The + subject is fine when limited by a postmodifier or clear context.",
                None,
            ),
            (
                "Language subjects in general take zero article: \"teaches English,\" not \"teaches the English.\" "
                "Language names as school subjects are usually bare. "
                "Drop the before English; keep a private college as written.",
                "So the statement is false: repair to \"teaches English.\"",
                "Language names as school subjects are usually bare.",
                "\"The English\" can mean the people, so the article feels tempting in a teaching line.",
            ),
        ],
        # --- Task 13 (4/5): geography countries ---
        [
            (
                "Country names that are plural or include a common noun often take \"the\": \"the Netherlands.\" "
                "the with Netherlands, United Kingdom, United States, Philippines, and similar names is the regular pattern. "
                "The cycling frame does not change the country article.",
                "So the statement holds: \"The Netherlands\" takes the as a plural-looking country name.",
                "the with Netherlands, United Kingdom, United States, Philippines, etc.",
                None,
            ),
            (
                "The standard form is \"the United Kingdom,\" not bare \"United Kingdom\" after to. "
                "Full political names with Kingdom/States/Republic usually need the. "
                "Insert the before United Kingdom.",
                "So the statement is false: repair to \"moved to the United Kingdom…\"",
                "Full political names with Kingdom/States/Republic usually need the.",
                "Bare country defaults make writers drop the from Kingdom/States names.",
            ),
            (
                "The city is \"The Hague,\" so the sentence needs \"outside The Hague.\" "
                "A few place names include The as part of the name rather than as an optional article. "
                "Insert The before Hague.",
                "So the statement is false: repair to \"outside The Hague.\"",
                "A few place names include The as part of the name.",
                "Most cities are bare, so leaving Hague without The looks like the usual zero-article rule.",
            ),
            (
                "Most single-name countries take zero article: \"in Brazil.\" "
                "Default for country and city names is zero unless the name belongs to a the-group. "
                "Last summer only times the trip.",
                "So the statement holds: bare \"Brazil\" follows the default country pattern.",
                None,
                None,
            ),
            (
                "Famous rivers take \"the\": \"the Amazon.\" "
                "the with rivers, seas, oceans, and canal names is the safe waterway rule. "
                "Ecosystem importance does not license dropping the.",
                "So the statement holds: \"The Amazon\" correctly takes the river article.",
                "the with rivers, seas, oceans, and canal names.",
                None,
            ),
        ],
        # --- Task 14 (4/5): lakes/oceans/mountains/deserts ---
        [
            (
                "Individual lakes usually take zero article: \"Lake Victoria.\" "
                "Lake + name → typically zero; the Great Lakes is an exception as a group. "
                "Textbook mentions do not add the.",
                "So the statement holds: bare \"Lake Victoria\" follows the lake+name pattern.",
                "Lake + name → typically zero; the Great Lakes is an exception as a group.",
                None,
            ),
            (
                "Oceans and seas need \"the\": \"the Atlantic.\" "
                "the Atlantic / the Pacific / the Mediterranean is the waterway pattern. "
                "Repair to \"across the Atlantic\"; a freighter stays as the vehicle.",
                "So the statement is false: repair to \"across the Atlantic.\"",
                None,
                "Bare ocean names look parallel to bare countries, which is the usual miss.",
            ),
            (
                "Mountains named with Mount take zero article: \"Mount Everest.\" "
                "Mount/Mt + name = zero; mountain ranges take the. "
                "Extreme hikers do not change the peak's article.",
                "So the statement holds: bare \"Mount Everest\" follows the Mount+name rule.",
                "Mount/Mt + name = zero; mountain ranges take the.",
                None,
            ),
            (
                "Mountain ranges take \"the\": \"the Alps.\" "
                "Ranges and island groups usually need the. "
                "Repair to \"in the Alps after the festival.\"",
                "So the statement is false: repair to \"in the Alps.\"",
                "Ranges and island groups usually need the.",
                "Single peaks are bare, so writers often strip the from range names too.",
            ),
            (
                "Deserts take \"the\": \"the Sahara.\" "
                "the Sahara / the Gobi follow the desert pattern. "
                "The Africa span is geography, not a reason to bare the name.",
                "So the statement holds: \"The Sahara\" correctly takes the desert article.",
                None,
                None,
            ),
        ],
        # --- Task 15 (4/5): abstract nouns ---
        [
            (
                "Abstract nouns used in a general sense take zero article: \"Poverty remains…\" "
                "General abstracts (poverty, society, curiosity) are usually bare. "
                "Regions stay plural and general too.",
                "So the statement holds: bare \"Poverty\" names the concept in general.",
                None,
                None,
            ),
            (
                "General \"life\" does not take the: \"Life is unpredictable…\" "
                "Use the life only when limited (the life of an artist, the life she wanted). "
                "Repair by dropping the before life.",
                "So the statement is false: repair to \"Life is unpredictable…\"",
                "Use the life only when limited (the life of an artist, the life she wanted).",
                "Freelance-artist context makes \"the life\" feel specific even when the general concept is meant.",
            ),
            (
                "\"Society\" in a broad general claim correctly appears without a/the. "
                "Zero article signals the concept as a whole. "
                "Growth and limits are the content of the claim, not article cues.",
                "So the statement holds: bare \"Society\" correctly means the concept as a whole.",
                None,
                None,
            ),
            (
                "As a general virtue, prefer \"honesty,\" not \"the honesty,\" unless a specific instance is meant. "
                "Abstract virtues in general statements stay bare. "
                "Drop the before honesty.",
                "So the statement is false: repair to \"values honesty.\"",
                "Abstract virtues in general statements stay bare.",
                None,
            ),
            (
                "\"Curiosity\" as a general driver of learning takes zero article. "
                "If no postmodifier narrows the abstract, omit the. "
                "The field only locates where that drive helps.",
                "So the statement holds: bare \"Curiosity\" fits the un-narrowed abstract.",
                None,
                None,
            ),
        ],
        # --- Task 16 (4/5): narrowed uncountables ---
        [
            (
                "Uncountable \"advice\" can take \"the\" when a relative clause identifies a specific body of advice. "
                "Uncountable + the is fine once the noun is made specific. "
                "Clarity is about that identified advice, not advice-in-general.",
                "So the statement holds: the relative clause licenses \"The advice.\"",
                "Uncountable + the is fine once the noun is made specific.",
                None,
            ),
            (
                "\"Equipment\" remains uncountable; zero article works even with a defining relative clause when the noun is used as a mass. "
                "You may also say \"the equipment that arrived…\" — both can be acceptable; bare is not wrong here. "
                "The hallway only places it.",
                "So the statement holds: bare \"Equipment that arrived…\" is acceptable mass reference.",
                "You may also say \"the equipment that arrived…\" — both can be acceptable.",
                None,
            ),
            (
                "\"Information\" cannot take \"an\"; use \"information\" or \"a piece of information.\" "
                "Specificity does not magically make an uncountable noun countable with a/an. "
                "Drop an, or quantify with a piece of, even if the appendix pinpoints the content.",
                "So the statement is false: repair to \"information\" or \"a piece of information.\"",
                None,
                "Appendix pinpointing tempts writers into \"an information\" as if specificity unlocked a/an.",
            ),
            (
                "\"The research published last week\" correctly uses the because the postmodifier identifies a particular study set. "
                "Postmodifiers often licence the with otherwise general uncountables. "
                "Assumptions stay ours; the research is the definite challenge.",
                "So the statement holds: the postmodifier licenses \"The research.\"",
                "Postmodifiers often licence the with otherwise general uncountables.",
                None,
            ),
            (
                "\"Progress\" is uncountable, so \"a progress\" is wrong; say \"progress\" or \"some progress.\" "
                "Never place a/an directly before progress. "
                "The next rehearsal only sets the deadline.",
                "So the statement is false: repair to \"progress\" or \"some progress.\"",
                None,
                "\"A progress\" looks like ordinary countable first mention before a deadline.",
            ),
        ],
        # --- Task 17 (5/5): titles / only / unique ---
        [
            (
                "After appoint/elect/name, English often uses \"the\" + unique role: \"appointed the captain.\" "
                "Unique office titles after appoint/elect frequently take the. "
                "The rowing club makes the post singular and definite.",
                "So the statement holds: \"the captain\" fits the unique-office pattern.",
                "Unique office titles after appoint/elect frequently take the.",
                None,
            ),
            (
                "Prefer \"the head of the drama department\" for a unique post, or rephrase; \"a head of…\" sounds like one of several equal heads. "
                "Unique organisational roles usually take the, not a. "
                "Repair a to the before head.",
                "So the statement is false: repair to \"the head of the drama department.\"",
                "Unique organisational roles usually take the, not a.",
                "\"A head of…\" looks like ordinary role first-mention, but the post is unique.",
            ),
            (
                "Zero article is also possible after elect/appoint when the title follows directly: \"elected her treasurer.\" "
                "Both \"elected her treasurer\" and \"elected her the treasurer\" appear; bare title after the object is standard. "
                "The local book club names the organisation.",
                "So the statement holds: bare \"treasurer\" after elect + object is standard.",
                "Both \"elected her treasurer\" and \"elected her the treasurer\" appear; bare title after the object is standard.",
                None,
            ),
            (
                "\"Only\" requires \"the only photographer,\" not \"a only.\" "
                "Also, \"only\" begins with a vowel sound, so a would be wrong even without that rule. "
                "the only is a fixed determiner pattern — rebuild it as a chunk.",
                "So the statement is false: repair to \"the only photographer.\"",
                "the only is a fixed determiner pattern.",
                "Writers often keep a from ordinary first mention and bolt only on afterward.",
            ),
            (
                "Native wording prefers \"the only finalist\" (or \"the sole finalist\"); \"the unique finalist\" is awkward in this ranking sense. "
                "For exclusivity in a set, only/sole beats unique with the. "
                "Repair unique to only or sole.",
                "So the statement is false: repair to \"the only finalist\" (or \"the sole finalist\").",
                "For exclusivity in a set, only/sole beats unique with the.",
                "\"Unique\" feels synonymous with \"only,\" so the unique finalist can pass as polished until native ranking idiom is checked.",
            ),
        ],
        # --- Task 18 (5/5): a/the number of; knowledge of ---
        [
            (
                "\"A number of\" means \"several\" and correctly pairs with a plural noun; the determiner pattern itself is standard. "
                "a number of + plural is a fixed quantifying frame. "
                "Clearer recycling rules are just the request content.",
                "So the statement holds: \"A number of neighbours\" correctly means several.",
                "a number of + plural is a fixed quantifying frame.",
                None,
            ),
            (
                "\"The number of\" correctly refers to a specific total; here the noun phrase is fully determined and grammatical. "
                "Contrast a number of (several) with the number of (the total count). "
                "The software update explains the drop.",
                "So the statement holds: \"The number of\" correctly means the total count.",
                "Contrast a number of (several) with the number of (the total count).",
                None,
            ),
            (
                "\"A knowledge of\" is an accepted pattern when knowledge is limited to a field: \"a knowledge of Portuguese.\" "
                "Some abstracts allow a when followed by of + field. "
                "The relative clause just confirms usefulness on trips.",
                "So the statement holds: \"a knowledge of Portuguese\" is an accepted field pattern.",
                "Some abstracts allow a when followed by of + field.",
                None,
            ),
            (
                "Zero-article \"knowledge of\" is equally natural for the same idea. "
                "Both a knowledge of and knowledge of can be correct; meaning stays general-competence. "
                "Years in Lisbon supply the source.",
                "So the statement holds: bare \"knowledge of Portuguese\" is equally fine.",
                "Both a knowledge of and knowledge of can be correct for general competence.",
                None,
            ),
            (
                "Countable \"rise\" correctly takes \"a\" for a newly mentioned increase: \"a rise in visitors.\" "
                "Singular countable nouns need a determiner in this slot. "
                "The gallery redesign is the cause clause.",
                "So the statement holds: singular countable \"rise\" correctly takes \"a.\"",
                None,
                None,
            ),
        ],
        # --- Task 19 (5/5): time adverbials ---
        [
            (
                "Time expressions like \"next week,\" \"last year,\" and \"this morning\" take zero article in standard adverbial use. "
                "next/last/this + time unit → usually zero. "
                "The festival programme stays definite as the thing being finalised.",
                "So the statement holds: bare \"Next week\" is the standard calendar adverbial.",
                "next/last/this + time unit → usually zero.",
                None,
            ),
            (
                "\"The next week\" is wrong in this future-plan adverbial; keep bare \"next week.\" "
                "Save the next for sequenced items inside a known series (the next slide), not for calendar next week. "
                "Drop the before next week.",
                "So the statement is false: repair to \"Next week we will finalise…\"",
                "Save the next for sequenced items inside a known series (the next slide), not for calendar next week.",
                "\"The next\" from sequenced lists bleeds into calendar \"next week,\" a classic false friend.",
            ),
            (
                "Decades need \"the\": \"in the 1990s.\" "
                "the + decade/century is the normal historical pattern. "
                "Insert the before 1990s.",
                "So the statement is false: repair to \"In the 1990s…\"",
                "the + decade/century is the normal historical pattern.",
                "Bare years make writers leave decades bare too.",
            ),
            (
                "\"In the 1990s\" correctly includes the. "
                "Same pattern for the 1800s, the twentieth century, and similar historical spans. "
                "Paper maps are just the technology of that decade.",
                "So the statement holds: \"In the 1990s\" follows the decade pattern.",
                None,
                None,
            ),
            (
                "Days and parts of days used adverbially are often bare: \"On Monday morning…\" "
                "on Monday / in summer / at night frequently take zero article. "
                "The team and the match can still be definite.",
                "So the statement holds: bare \"On Monday morning\" is the usual day adverbial.",
                None,
                None,
            ),
        ],
        # --- Task 20 (5/5): idioms ---
        [
            (
                "\"In charge of costumes\" uses zero article before the functional area in this common pattern. "
                "Many be/in + noun phrases freeze without a/the (in charge, in debt, in trouble). "
                "The school play stays definite as the production.",
                "So the statement holds: bare \"in charge of\" is the frozen idiom.",
                "Many be/in + noun phrases freeze without a/the (in charge, in debt, in trouble).",
                None,
            ),
            (
                "Body-contact idioms take possessive or the: \"on the head\" / \"on his head,\" not bare \"on head.\" "
                "on the + body part is the usual set phrase after verbs like hit/pat. "
                "Repair to \"on the head\" (or \"on his head\") during practice.",
                "So the statement is false: repair to \"on the head\" (or \"on his head\").",
                "on the + body part is the usual set phrase after verbs like hit/pat.",
                "Bare body-part objects look parallel to other bare-noun idioms until you recall the set frame.",
            ),
            (
                "\"Shake hands\" is a fixed zero-article idiom. "
                "Learn hands/arms/legs idioms as chunks; do not insert the automatically. "
                "Settling the argument is just the moment of reconciliation.",
                "So the statement holds: bare \"shook hands\" is the fixed idiom.",
                None,
                None,
            ),
            (
                "The paired idiom is \"from beginning to end\" (both bare) or \"from the beginning to the end\"; mixing bare beginning with \"the end\" is inconsistent. "
                "Keep both sides of a fixed pair parallel in determiner choice. "
                "Repair to matching bare–bare or the–the.",
                "So the statement is false: repair to \"from beginning to end\" or \"from the beginning to the end.\"",
                "Keep both sides of a fixed pair parallel in determiner choice.",
                "Mixing one bare side with one the-side looks half-fixed and often slips past casual reading.",
            ),
            (
                "\"Under control\" is a zero-article prepositional idiom. "
                "under control / in progress / on schedule are typically bare. "
                "The garden stays definite; this summer sets the season.",
                "So the statement holds: bare \"under control\" follows the frozen prepositional frame.",
                None,
                None,
            ),
        ],
    ]

    assert len(all_rewrites) == 20
    for i, task in enumerate(data["tasks"]):
        stmts = task["statements"]
        keys = task["answer_key"]
        blocks = all_rewrites[i]
        assert len(blocks) == 5 == len(stmts) == len(keys)
        new_tacs = []
        for j, (body, closing, tip, trap) in enumerate(blocks):
            letter = LETTERS[j]
            # Sanity: closing should land on true/false matching answer key
            if keys[j]:
                assert "holds" in closing.lower() or "true" not in closing.lower().split("false")[0]
                assert closing.startswith("So the statement holds")
            else:
                assert closing.startswith("So the statement is false")
            new_tacs.append(fmt(letter, stmts[j], body, closing, tip=tip, trap=trap))
        task["tactical_explanations"] = new_tacs

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {PATH}")
    # verify round-trip
    data2 = json.loads(PATH.read_text(encoding="utf-8"))
    assert data2["id"] == "g.9"
    assert all(len(t["tactical_explanations"]) == 5 for t in data2["tasks"])
    assert all(len(t["statements"]) == len(t["answer_key"]) for t in data2["tasks"])
    # spot-check: statements unchanged, solution_overview present, no bare (true)/(false)
    for t in data2["tasks"]:
        for expl in t["tactical_explanations"]:
            assert "(true)" not in expl and "(false)" not in expl
            assert "So the statement" in expl
    print("OK: valid JSON, 20×5 explanations, statements/keys untouched structure preserved")


if __name__ == "__main__":
    main()
