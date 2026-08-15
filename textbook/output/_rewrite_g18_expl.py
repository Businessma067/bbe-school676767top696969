# -*- coding: utf-8 -*-
"""Rewrite g.18 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.18.json")
LETTERS = "ABCDE"


def fmt(letter: str, stmt: str, body: str, tip_or_trap: str | None, closing: str) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if tip_or_trap:
        extra = tip_or_trap.strip()
        if extra.startswith("Tip:"):
            extra = "**Tip:**" + extra[4:]
        elif extra.startswith("Trap:"):
            extra = "**Trap:**" + extra[5:]
        elif not (extra.startswith("**Tip:**") or extra.startswith("**Trap:**")):
            raise ValueError(f"Tip/Trap must start with Tip:/Trap:: {extra[:40]!r}")
        parts.extend(["", extra])
    parts.extend(["", closing.strip()])
    return "\n".join(parts) + "\n"


def pack(stmts: list[str], items: list[tuple[str, str | None, str]]) -> list[str]:
    assert len(stmts) == 5 and len(items) == 5
    return [
        fmt(LETTERS[i], stmts[i], items[i][0], items[i][1], items[i][2])
        for i in range(5)
    ]


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of (body, tip_or_trap|None, closing)
    all_items: list[list[tuple[str, str | None, str]]] = [
        # Task 1 — 1/5: soft L1 transfers; no Trap; Tip only where cue adds value
        [
            (
                "In standard English, depend never partners with of. "
                "The locked pattern is depend on (or upon) plus a noun or gerund for the thing that controls the outcome. "
                "Here careful practice is that controller, so the satellite must be on.",
                None,
                'So the statement is false: repair to "Success depends on careful practice before the recital."',
            ),
            (
                "Responsible takes for when you name a duty or job. "
                "Responsible of is not an English ownership or duty frame. "
                "Keep the gerund watering; only the preposition needs to change.",
                None,
                'So the statement is false: repair to "She is responsible for watering the neighbour\'s plants."',
            ),
            (
                "As an adjective, interested locks to in: interested in learning or interested in Portuguese. "
                "On belongs with focus or concentrate, not with interested. "
                "Swap the satellite and the summer-course line becomes native.",
                None,
                'So the statement is false: repair to "They are interested in learning Portuguese this summer."',
            ),
            (
                "Despite is a single preposition and never takes of. "
                "You can write Despite the rain or In spite of the rain — but not Despite of. "
                "Either drop of after despite or switch the whole phrase to in spite of.",
                "Tip: Despite ∅; in spite of.",
                'So the statement is false: repair to "Despite the rain, the picnic went ahead."',
            ),
            (
                "Accuse (and be accused) locks to of plus a wrongdoing noun or gerund. "
                "Here accused of cheating is exactly the exam pattern. "
                "Keep of and the -ing form together; nothing else needs fixing.",
                None,
                "So the statement holds: accused of correctly marks the alleged wrongdoing.",
            ),
        ],
        # Task 2
        [
            (
                "Insist on plus a gerund is the fixed forcefulness pattern. "
                "He insisted on seeing the sheets, not a bare infinitive after insist. "
                "The form matches the textbook lock for this meaning.",
                None,
                "So the statement holds: insist on + -ing is correctly formed.",
            ),
            (
                "Differ compares one thing with another using from. "
                "Differs of is a transfer error, not a recognised variant. "
                "The recipe line needs from before last year's version.",
                None,
                'So the statement is false: repair to "Her recipe differs from last year\'s version."',
            ),
            (
                "Careful exam English wants apologise for a fault or inconvenience. "
                "Apologised about is weaker and often marked wrong even when it turns up in speech. "
                "Spilling juice is the fault, so for is the locked satellite.",
                None,
                'So the statement is false: repair to "We apologised for spilling juice on the carpet."',
            ),
            (
                "Focus and concentrate take on, never to, when they name a topic of attention. "
                "Ocean plastics is that topic, so the documentary must focus on it. "
                "To after focus is simply the wrong lock.",
                None,
                'So the statement is false: repair to "The documentary focuses on ocean plastics."',
            ),
            (
                "Participate in correctly names involvement in an event or activity. "
                "The weekend pottery workshop is exactly that kind of event. "
                "The preposition lock matches the meaning, so the line stands.",
                None,
                "So the statement holds: participated in correctly names the workshop involvement.",
            ),
        ],
        # Task 3
        [
            (
                "Object takes to, not against: objected to the new quiet-hours rule. "
                "Protest against is a different verb with a different preposition. "
                "Against after object is a classic false friend from other languages.",
                None,
                'So the statement is false: repair to "They objected to the new quiet-hours rule."',
            ),
            (
                "Capable of plus a gerund is the standard ability frame. "
                "Handling the front desk fits that slot cleanly. "
                "Do not confuse it with able to + infinitive — different head, different pattern.",
                "Tip: Capable of doing; able to do.",
                "So the statement holds: capable of + -ing is the right ability lock.",
            ),
            (
                "Skills and activities take good at in exam English: good at swimming. "
                "Good in is reserved, at best, for school subjects in some varieties, and even there at is safer for a sport or skill. "
                "Long-distance swimming is an activity, so at is required.",
                None,
                'So the statement is false: repair to "She is good at swimming long distances."',
            ),
            (
                "Look forward to is a multi-word unit; to is a preposition here, so it takes a noun or gerund. "
                "Meeting your cousins is the correct -ing complement, not a bare infinitive. "
                "The cousins line is correctly formed.",
                None,
                "So the statement holds: look forward to + -ing is correctly locked.",
            ),
            (
                "Succeed in plus -ing reports achievement. "
                "Succeeded to repair copies manage to, which is the wrong head for this verb. "
                "The bicycle-chain line needs in + repairing, not a to-infinitive.",
                "Tip: Succeed in + -ing; manage to + V.",
                'So the statement is false: repair to "He succeeded in repairing the bicycle chain."',
            ),
        ],
        # Task 4
        [
            (
                "Consist of lists the ingredients or parts of something. "
                "Consist from has no place in this frame (be made from is a different pattern). "
                "Tomatoes, cucumber, and feta are the parts, so of is required.",
                None,
                'So the statement is false: repair to "The salad consists of tomatoes, cucumber, and feta."',
            ),
            (
                "Belong to marks ownership cleanly: the jacket belongs to my older brother. "
                "Never write belong of for possession. "
                "The to satellite matches the ownership meaning here.",
                None,
                "So the statement holds: belongs to correctly marks ownership.",
            ),
            (
                "Rely, depend, and count all take on for trust. "
                "Rely of is the same transfer trap as depend of. "
                "Her as the trustworthy person needs on before the infinitive complement.",
                None,
                'So the statement is false: repair to "You can rely on her to bring the tent."',
            ),
            (
                "You complain about a problem (noise, service) and complain to a person. "
                "Complain for is non-standard for naming the grievance topic. "
                "Noisy neighbours upstairs are the problem, so about is the lock.",
                None,
                'So the statement is false: repair to "They complained about the noisy neighbours upstairs."',
            ),
            (
                "Prevent someone from + gerund is the restraint lock. "
                "The locked-gate line uses from entering correctly. "
                "Do not replace from with to after prevent.",
                None,
                "So the statement holds: prevented them from + -ing is the correct restraint frame.",
            ),
        ],
        # Task 5 — 2/5
        [
            (
                "Famous for plus a feature is the standard reputation pattern. "
                "Tiled façades fit that slot as a tourist trademark. "
                "Famous as would name a role, not a characteristic feature.",
                None,
                "So the statement holds: famous for correctly names Lisbon's trademark feature.",
            ),
            (
                "Similar, identical, and comparable take to, not with. "
                "With after similar is a near-miss that looks plausible but fails the exam lock. "
                "The lake trail comparison needs to.",
                "Trap: similar with looks close to compare with, but the adjective lock is similar to.",
                'So the statement is false: repair to "This trail is similar to the one near the lake."',
            ),
            (
                "In careful exam English prefer different from (or different to in some BrE). "
                "Different than is often marked down even where American speech allows it. "
                "Playlist comparisons are safest with from.",
                "Trap: different than is common in speech but exams usually want different from.",
                'So the statement is false: repair to "My playlist is different from yours in every genre."',
            ),
            (
                "Married to a person is the lock. "
                "Married with copies other languages and belongs instead in frames like live with. "
                "Her partner is a person, so to is required.",
                None,
                'So the statement is false: repair to "She has been married to her partner for twelve years."',
            ),
            (
                "Afraid of plus a noun (thunderstorms) is correct and natural. "
                "Frightened of follows the same of pattern. "
                "Night storms sit cleanly in that of slot.",
                None,
                "So the statement holds: afraid of correctly marks the feared noun.",
            ),
        ],
        # Task 6
        [
            (
                "Arrive at a station or building and arrive in a city or country — not arrive to. "
                "Get to is the pattern that keeps to for destinations. "
                "A station is a point location, so at is the lock.",
                "Trap: arrive to copies get to; stations take arrived at.",
                'So the statement is false: repair to "We arrived at the station just before midnight."',
            ),
            (
                "Listen to plus an object is obligatory in standard exam English. "
                "Hear can take a direct object; listen cannot. "
                "The podcast episode is the object of attention, so to must stay.",
                None,
                "So the statement holds: listen to correctly takes the podcast object.",
            ),
            (
                "Wait for someone or something. "
                "Wait cannot take the bus as a bare object here. "
                "Twenty minutes in the rain still needs for before the bus.",
                None,
                'So the statement is false: repair to "They waited for the bus for twenty minutes in the rain."',
            ),
            (
                "Look at directs visual attention to a target. "
                "The mural behind the café is that target, and at is the right preposition. "
                "Watch can take a bare object; look usually needs at.",
                None,
                "So the statement holds: look at correctly directs attention to the mural.",
            ),
            (
                "Talk about a topic (or talk to a person). "
                "Talk the film drops the required about before the topic. "
                "Discuss the film needs no about — different head, different pattern.",
                "Tip: Talk about a topic; discuss takes a bare object.",
                'So the statement is false: repair to "We talked about the film for almost an hour."',
            ),
        ],
        # Task 7
        [
            (
                "Walking uses on foot, not by foot. "
                "By is for vehicles: by bus, by train, by car. "
                "The morning commute on foot keeps on, the walking exception.",
                "Tip: By + vehicle; on foot.",
                'So the statement is false: repair to "She goes to work on foot every morning."',
            ),
            (
                "By train correctly names the means of transport. "
                "The coast journey uses the default by + vehicle lock. "
                "Nothing else in the line fights that pattern.",
                None,
                "So the statement holds: by train correctly names the means of travel.",
            ),
            (
                "Days and dated evenings take on: on Monday or on Monday evening. "
                "In Monday is wrong; in the evening is fine only without a weekday. "
                "Monday evening is a dated time slot, so on is required.",
                None,
                'So the statement is false: repair to "The match starts on Monday evening."',
            ),
            (
                "At night is the fixed time phrase. "
                "Bare in night is not standard. "
                "In the night is rarer and shaded differently; the quiet-house reading wants at night.",
                None,
                'So the statement is false: repair to "I usually read at night when the house is quiet."',
            ),
            (
                "On plus a day or date phrase is standard: on a cold Friday afternoon. "
                "The adjective cold sits inside the noun phrase and does not change the preposition lock. "
                "Everyday and exam English both accept this shape.",
                None,
                "So the statement holds: on + dated day/time phrase is correctly formed.",
            ),
        ],
        # Task 8
        [
            (
                "Congratulate someone on an achievement. "
                "For after congratulate is weaker and typically marked wrong in exams. "
                "Winning the baking contest is the achievement, so on is the lock.",
                None,
                'So the statement is false: repair to "We congratulated her on winning the baking contest."',
            ),
            (
                "Blame someone for something. "
                "About does not replace for after blame. "
                "Accuse of is a different head — do not import its satellite onto blame.",
                "Tip: Blame for / accuse of.",
                'So the statement is false: repair to "Don\'t blame me for the burnt toast."',
            ),
            (
                "Thanks for plus a gerund or noun is the correct gratitude frame. "
                "Helping me move the sofa fits that for slot cleanly. "
                "Thank someone for doing X follows the same for lock in full-sentence form.",
                None,
                "So the statement holds: thanks for + -ing is the correct gratitude pattern.",
            ),
            (
                "Provide someone with something is the classic ditransitive lock. "
                "Clean towels fit that with complement. "
                "Provide something to someone is another acceptable shape; with is right here.",
                None,
                "So the statement holds: provided us with correctly supplies the towels.",
            ),
            (
                "Charge someone with an offence. "
                "Of belongs to accuse, not to charge. "
                "Vandalising the bus stop is the charged offence, so with is required.",
                "Trap: charge/accuse near-synonyms do not share satellites — charge with, accuse of.",
                'So the statement is false: repair to "Police charged him with vandalising the bus stop."',
            ),
        ],
        # Task 9 — 3/5
        [
            (
                "Keen on plus a noun or gerund expresses enthusiasm, in the same neighbourhood as interested in. "
                "Early-morning runs along the canal fit that on slot. "
                "The canal-run line is correctly locked.",
                None,
                "So the statement holds: keen on correctly marks the enthusiasm frame.",
            ),
            (
                "Fond of names people or things you like. "
                "Fond from is never the pattern. "
                "Old jazz records need of after fond.",
                None,
                'So the statement is false: repair to "She is fond of old jazz records."',
            ),
            (
                "Take pride in an achievement. "
                "Pride of mixes the noun pride with the adjective proud of. "
                "Their community garden needs in after take pride.",
                "Trap: proud of invites of, but take pride locks to in.",
                'So the statement is false: repair to "They take pride in their community garden."',
            ),
            (
                "Tired of plus a gerund or noun is fixed for weariness with a situation. "
                "Waiting for the plumber fits that of slot. "
                "Exhausted from effort is a different idea with a different preposition.",
                None,
                "So the statement holds: tired of + -ing correctly marks weariness with the wait.",
            ),
            (
                "Careful English prefers bored with (or by). "
                "Bored of is informal and often marked non-standard in exams. "
                "Fed up with is the of-cousin — do not import of onto bored for this playlist line.",
                "Trap: bored of is common informally, but exams usually want bored with.",
                'So the statement is false: repair to "He gets bored with the same playlist every day."',
            ),
        ],
        # Task 10
        [
            (
                "According to plus a source is the reporting phrase. "
                "According with is not used for this meaning. "
                "The weather app is the source, so to is correctly locked.",
                None,
                "So the statement holds: according to correctly cites the weather app.",
            ),
            (
                "Because of plus a noun phrase correctly gives a reason for staying home. "
                "The flooding fills that noun slot. "
                "Because + clause would need a finite clause, not of.",
                "Tip: Because of + noun; because + clause.",
                "So the statement holds: because of correctly marks the reason noun phrase.",
            ),
            (
                "Instead of coffee is the comparison lock. "
                "Bare instead cannot take a following noun this way. "
                "As an adverb, instead stands alone; before a noun you need instead of.",
                "Trap: dropping of after instead is an easy chunk error — restore instead of.",
                'So the statement is false: repair to "She chose tea instead of coffee after dinner."',
            ),
            (
                "In addition to stretching pairs with as well as — both keep to, not of. "
                "Of after addition is a despite-style transfer onto the wrong chunk. "
                "Stretching needs to after in addition.",
                "Trap: in addition of looks like in spite of, but the lock is in addition to.",
                'So the statement is false: repair to "In addition to stretching, he iced his knee."',
            ),
            (
                "As a result of plus a noun phrase is the fixed causal chunk. "
                "The delay fills that noun slot and explains missing the opening act. "
                "As a result alone needs a comma and a following clause, not of + noun dropped.",
                None,
                "So the statement holds: as a result of correctly marks the causal noun phrase.",
            ),
        ],
        # Task 11
        [
            (
                "Insist that plus a clause is a valid frame alongside insist on + -ing. "
                "Leaving before dawn is correctly embedded under that. "
                "Both frames are fine; they are just different shapes for different complements.",
                "Tip: Insist that (clause) vs insist on (gerund).",
                "So the statement holds: insist that + clause is a correctly formed alternative frame.",
            ),
            (
                "Discourage someone from swimming, not to swim. "
                "The from + -ing pattern matches prevent and keep. "
                "After dark swimming needs from + swimming after discourage.",
                "Trap: to-infinitive after discourage looks like encourage to, but discourage takes from + -ing.",
                'So the statement is false: repair to "The coach discouraged them from swimming after dark."',
            ),
            (
                "Recover from an illness is the standard medical collocation. "
                "Recover of is wrong. "
                "Warm soup helping him recover from the cold uses the right lock.",
                None,
                "So the statement holds: recover from correctly names the illness source.",
            ),
            (
                "For prevention, stop someone from finishing (or stop someone finishing). "
                "Stop her to finish means pause in order to finish — the wrong reading for blocking the marathon. "
                "Nothing will stop her needs from + finishing here.",
                "Trap: stop to do ≠ stop from doing — to here reads as purpose, not prevention.",
                'So the statement is false: repair to "Nothing will stop her from finishing the marathon."',
            ),
            (
                "Specialise in a field is fixed. "
                "Marine biology at university fits that in lock. "
                "The subject line needs no other satellite.",
                None,
                "So the statement holds: specialised in correctly names the university field.",
            ),
        ],
        # Task 12
        [
            (
                "Be/get used to plus a gerund means accustomed to a habit. "
                "Waking before sunrise fits that familiarity frame. "
                "I'm used to waking is the present-habit reading, not past used to + base verb.",
                None,
                "So the statement holds: be used to + -ing correctly marks familiar habit.",
            ),
            (
                "Past habit needs used to + base verb: used to wake, not used to waking. "
                "Do not confuse this with be used to + -ing for present familiarity. "
                "When she worked nights is a past-habit setting, so the bare infinitive wake is required.",
                "Trap: used to waking mixes past-habit used to with the be used to + -ing pattern.",
                'So the statement is false: repair to "She used to wake up before sunrise when she worked nights."',
            ),
            (
                "Accustomed to mirrors used to for familiarity. "
                "Accustomed with is wrong. "
                "Long bus rides need to after accustomed.",
                None,
                'So the statement is false: repair to "They are accustomed to long bus rides."',
            ),
            (
                "Prefer X to Y correctly stacks two options: walking to cycling. "
                "That to comparison is the standard exam shape. "
                "Than would belong to rather, not prefer.",
                None,
                "So the statement holds: prefer A to B correctly compares walking and cycling.",
            ),
            (
                "Prefer … than is not the English comparison. "
                "Use prefer walking to cycling, or would rather walk than cycle. "
                "Rainy-day preferences keep to after prefer, not than.",
                "Trap: prefer … than imports rather than's satellite onto the wrong head.",
                'So the statement is false: repair to "We prefer walking to cycling when it rains."',
            ),
        ],
        # Task 13 — 4/5
        [
            (
                "In spite of plus a noun phrase equals despite. "
                "The of is part of the chunk, and the hike line keeps it. "
                "Despite the heat would also work — despite drops of; in spite keeps it.",
                "Tip: In spite of keeps of; despite drops it.",
                "So the statement holds: in spite of correctly includes the required of.",
            ),
            (
                "In spite must be followed by of before a noun. "
                "In spite the heat is an incomplete chunk. "
                "Insert of and the contrast phrase matches despite.",
                "Trap: dropping of from in spite of is a near-miss of the full multi-word preposition.",
                'So the statement is false: repair to "In spite of the heat, they finished the hike."',
            ),
            (
                "Notwithstanding takes a noun phrase with no extra of, like despite. "
                "The late start fills that bare noun slot. "
                "The choir line is correctly formed without of.",
                None,
                "So the statement holds: notwithstanding + noun needs no of.",
            ),
            (
                "Refrain from commenting, not refrain to comment. "
                "Abstain follows the same from + -ing shape. "
                "During the argument, the restraint frame wants from + commenting.",
                "Trap: to-infinitive after refrain copies refuse to; refrain locks to from + -ing.",
                'So the statement is false: repair to "She refrained from commenting during the argument."',
            ),
            (
                "Refrain from plus a gerund is the fixed restraint pattern. "
                "Posting spoilers fits that from slot. "
                "Keep from after refrain; a to-infinitive would break the same head as the previous false line.",
                None,
                "So the statement holds: refrain from + -ing correctly blocks the spoiler posting.",
            ),
        ],
        # Task 14
        [
            (
                "Depend on correctly ties the outcome to temperature. "
                "Outcome of X and depend on Y can both be right in one sentence. "
                "Experiment outcome and temperature condition use their private locks side by side.",
                None,
                "So the statement holds: depends on correctly links outcome to temperature.",
            ),
            (
                "Access to a place is the fixed pattern for entry rights. "
                "Access of is not used for places. "
                "The roof terrace after dusk keeps to for that entry meaning.",
                None,
                "So the statement holds: access to correctly names entry rights to the terrace.",
            ),
            (
                "Have no intention of cancelling is the preferred exam lock. "
                "Intention to is often marked wrong even when heard elsewhere. "
                "Cancelling the trip needs of + -ing after intention.",
                "Trap: intention to looks like a future infinitive, but exams prefer intention of + -ing.",
                'So the statement is false: repair to "She has no intention of cancelling the trip."',
            ),
            (
                "No point in arguing is the frame here. "
                "Point of arguing mismatches this no-point structure, though what's the point of is a related pattern. "
                "Match the whole fixed frame: there is no point in + -ing.",
                "Trap: of after no point mixes what's the point of with there is no point in.",
                'So the statement is false: repair to "There is no point in arguing about the score."',
            ),
            (
                "What's the point in staying matches an acceptable rhetorical frame with in + gerund. "
                "Point in and point of both appear; match the whole fixed question shape. "
                "If the museum is closed, staying is the pointless gerund under in.",
                None,
                "So the statement holds: what's the point in + -ing is an acceptable fixed question frame.",
            ),
        ],
        # Task 15
        [
            (
                "Angry with a person plus for a reason is a solid double pattern. "
                "With her brother names the person; for borrowing the headphones names the offence. "
                "Both locks can sit in one sentence without conflict.",
                "Tip: Angry with people; about situations; for a reason.",
                "So the statement holds: angry with … for correctly splits person and offence.",
            ),
            (
                "Angry about a cancelled ferry correctly targets a situation or event, not a person. "
                "If the complement were a sibling or colleague, you would switch to angry with. "
                "The ferry cancellation is a situation, so about is right.",
                None,
                "So the statement holds: angry about correctly targets the cancelled-ferry situation.",
            ),
            (
                "Pleased with or by — not pleased of. "
                "Proud of is the of-cousin; do not import it onto pleased. "
                "The surprise birthday brunch needs with or by after pleased.",
                "Trap: proud of invites of, but pleased locks to with/by.",
                'So the statement is false: repair to "They were pleased with the surprise birthday brunch."',
            ),
            (
                "Delighted with a result is natural and grammatical. "
                "Delighted by also works; delighted to hear that… is another frame. "
                "How the garden turned out is a result, so with fits.",
                None,
                "So the statement holds: delighted with correctly marks pleasure at the garden result.",
            ),
            (
                "Surprised by or at the news — not surprised from. "
                "From after surprised is a transfer that does not belong to this emotion adjective. "
                "Sudden snowfall needs by or at.",
                "Trap: from after surprised looks causal but the lock is surprised by/at.",
                'So the statement is false: repair to "We were surprised by the sudden snowfall."',
            ),
        ],
        # Task 16
        [
            (
                "Taste of a flavour is the fixed sensory pattern for substances in the soup. "
                "Smell of works the same way for a substance. "
                "Garlic and lemon fill that of slot as flavours present in the soup.",
                None,
                "So the statement holds: tastes of correctly names the flavours in the soup.",
            ),
            (
                "Smell like for resemblance is acceptable and grammatical here. "
                "Smell of woodsmoke would also work as a substance reading. "
                "Woodsmoke as a comparison keeps like in this jacket line.",
                "Tip: Of for substance; like for resemblance.",
                "So the statement holds: smells like correctly marks resemblance to woodsmoke.",
            ),
            (
                "Remind someone of a person or thing triggers memory or resemblance. "
                "My primary-school teacher is that memory or resemblance trigger. "
                "The of satellite is correct for this reading.",
                None,
                "So the statement holds: reminded me of correctly marks memory or resemblance.",
            ),
            (
                "For a future action, remind me to lock — not remind me of locking. "
                "Of would suggest memory or resemblance, not a prompt to act. "
                "Locking the back door is an instruction, so to + base verb is required.",
                "Trap: remind of vs remind to — of is memory; to is a future prompt.",
                'So the statement is false: repair to "Can you remind me to lock the back door?"',
            ),
            (
                "Remind someone to plus an infinitive correctly issues a prompt about a future action. "
                "Bring the picnic blanket is that instruction reading. "
                "Of would be for memory or resemblance, not for \"bring the blanket.\"",
                None,
                "So the statement holds: remind him to correctly issues the future-action prompt.",
            ),
        ],
        # Task 17 — 5/5
        [
            (
                "Owing to plus a noun phrase is a formal because-of equivalent. "
                "High winds fit the causal slot for cancelling the festival. "
                "The full chunk keeps to before the cause noun.",
                None,
                "So the statement holds: owing to correctly marks the formal causal phrase.",
            ),
            (
                "Owing needs to before the noun phrase. "
                "Bare Owing the… is an incomplete multi-word preposition. "
                "Insert to and the festival cancellation reason is restored.",
                "Trap: stripping to from owing to is a classic chunk scar — restore Owing to.",
                'So the statement is false: repair to "Owing to the high winds, the festival was cancelled."',
            ),
            (
                "Due to plus a noun is widely accepted as a causal preposition in modern exam English. "
                "It matches because of for this postponed-hike reading. "
                "Flooding on the trail fills that noun slot, so the line stands.",
                None,
                "So the statement holds: due to correctly marks the cause of the postponement.",
            ),
            (
                "Due the flooding drops the required to. "
                "Like owing to, due to is a fixed chunk that fails without its final preposition. "
                "Restore to before the flooding noun phrase.",
                "Trap: Due the… is the same missing-to error as Owing the… — both need to.",
                'So the statement is false: repair to "Due to the flooding, the hike was postponed."',
            ),
            (
                "Thanks to plus a noun credits a (usually positive) cause. "
                "A clear sky and the meteor shower fit that favourable shade. "
                "The to satellite is part of the fixed chunk and must stay.",
                "Tip: Thanks to (often positive); owing/due to (neutral or negative).",
                "So the statement holds: thanks to correctly credits the clear sky as cause.",
            ),
        ],
        # Task 18
        [
            (
                "Accuse someone of doing, not for. "
                "For belongs to blame. "
                "Leaving the gate open is the alleged act, so of is required after accuse.",
                "Trap: blame for vs accuse of — near-synonyms that refuse to share satellites.",
                'So the statement is false: repair to "She accused him of leaving the gate open."',
            ),
            (
                "Suspected of plus a gerund is the fixed collocation for alleged wrongdoing. "
                "The same of satellite appears after accuse; do not swap in for here. "
                "Feeding the stray cats fits that of + -ing slot.",
                None,
                "So the statement holds: suspected of correctly marks the alleged act.",
            ),
            (
                "Convicted of an offence is the standard legal and exam pattern. "
                "For appears in loose usage, but of is the safer lock here. "
                "Trespassing on farmland is the offence, so of is required.",
                "Trap: convicted for is heard, but exams prefer convicted of (charge with is different).",
                'So the statement is false: repair to "He was convicted of trespassing on farmland."',
            ),
            (
                "Ban someone from plus a gerund or noun is correct. "
                "Prohibit follows from; forbid someone to is a different shape. "
                "Using the tennis courts is blocked with from after banned.",
                None,
                "So the statement holds: banned him from + -ing correctly marks the prohibition.",
            ),
            (
                "Compensate for a loss. "
                "In this sense compensate cannot take the loss as a bare object. "
                "The old oak's loss needs for before the noun phrase.",
                None,
                'So the statement is false: repair to "Nothing can compensate for the loss of the old oak."',
            ),
        ],
        # Task 19
        [
            (
                "Contingent on plus a noun or gerund matches depend on for conditions. "
                "Dry weather this weekend fills that condition slot. "
                "The plan's dependency uses on, not of.",
                None,
                "So the statement holds: contingent on correctly marks the weather condition.",
            ),
            (
                "Contingent of is a depend-of style transfer. "
                "The condition lock after contingent is on. "
                "Approval waiting on dry weather needs that on satellite.",
                "Trap: of after contingent copies depend of — both heads want on.",
                'So the statement is false: repair to "Approval is contingent on dry weather this weekend."',
            ),
            (
                "Pride oneself on doing, not in, after the reflexive verb. "
                "In belongs to take pride in. "
                "Finishing every crossword needs on after prides herself.",
                "Trap: take pride in invites in onto pride oneself, which actually locks to on.",
                'So the statement is false: repair to "She prides herself on finishing every crossword."',
            ),
            (
                "Take pride in plus a gerund is fixed and correct here. "
                "Finishing every crossword fits that in slot. "
                "Be proud of is the adjective cousin with of — different head, different satellite.",
                "Tip: Take pride in / be proud of / pride oneself on — three different locks.",
                "So the statement holds: take pride in correctly marks pride in the achievement.",
            ),
            (
                "Proud of an achievement, not proud for. "
                "His daughter's science prize needs of after proud. "
                "For after proud is a false friend from other languages.",
                None,
                'So the statement is false: repair to "He is proud of his daughter\'s science prize."',
            ),
        ],
        # Task 20
        [
            (
                "Run out of plus a noun is the depletion pattern. "
                "Cups before arrival fit of after run out. "
                "By the time we arrived sets the past perfect depletion reading cleanly.",
                None,
                "So the statement holds: run out of correctly marks depleted cups.",
            ),
            (
                "Run out from cups is wrong; materials take of after run out. "
                "From does not replace of for supplies. "
                "Before noon, the café still needs run out of cups.",
                None,
                'So the statement is false: repair to "The café had run out of cups before noon."',
            ),
            (
                "Looking forward to the hike, not for. "
                "To is part of the multi-word verb and takes a noun or -ing. "
                "The weekend hike is that noun complement under to.",
                "Trap: for after look forward copies wait for; the chunk is look forward to.",
                'So the statement is false: repair to "I\'m looking forward to the weekend hike."',
            ),
            (
                "Object to plus a gerund is correct: objects to being photographed. "
                "Against is a false friend from other languages. "
                "Without consent is the setting; the satellite after object stays to.",
                None,
                "So the statement holds: objects to + -ing correctly marks the objection.",
            ),
            (
                "Succeeded in repairing, not on. "
                "On belongs to insist, not succeed. "
                "The leaky tap needs in + repairing after succeeded.",
                "Trap: succeeded on imports insist on onto the wrong head — succeed locks to in.",
                'So the statement is false: repair to "He succeeded in repairing the leaky tap."',
            ),
        ],
    ]

    for task, items in zip(data["tasks"], all_items, strict=True):
        stmts = task["statements"]
        keys = task["answer_key"]
        assert len(stmts) == 5 and len(keys) == 5
        task["tactical_explanations"] = pack(stmts, items)
        # sanity: closing lands on true/false matching key
        for i, expl in enumerate(task["tactical_explanations"]):
            if keys[i]:
                assert "So the statement holds" in expl, (task["id"], LETTERS[i])
            else:
                assert "So the statement is false" in expl, (task["id"], LETTERS[i])
            # claim repeats exact statement (allow added terminal punctuation only)
            header = expl.split("\n", 1)[0]
            claim = header[len(f"**{LETTERS[i]}) ") : -2]  # strip ** wrapper end
            # header is **X) text**
            assert header.startswith(f"**{LETTERS[i]}) ")
            assert header.endswith("**")
            claim = header[len(f"**{LETTERS[i]}) ") : -2]
            base = stmts[i].rstrip()
            assert claim.rstrip(".?!") == base.rstrip(".?!"), (task["id"], LETTERS[i], claim, base)

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {PATH}")
    print(f"tasks={len(data['tasks'])} expls={sum(len(t['tactical_explanations']) for t in data['tasks'])}")


if __name__ == "__main__":
    main()
