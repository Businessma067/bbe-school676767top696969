# -*- coding: utf-8 -*-
"""Rewrite g.7 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.7.json")


def build(letter: str, stmt: str, body: str, tip_or_trap: str | None, verdict: str) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if tip_or_trap:
        parts.extend(["", tip_or_trap.strip()])
    parts.extend(["", verdict.strip()])
    return "\n".join(parts) + "\n"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of (body, tip_or_trap|None, verdict) for A–E
    packs: list[list[tuple[str, str | None, str]]] = []

    # --- Task 1 (1/5) ---
    packs.append([
        (
            "Avoid is one of the classic gerund verbs, so \"avoids talking\" matches the pattern exactly. "
            "The rest of the sentence — cycling through traffic — does not change what avoid requires. "
            "Mia is simply naming the activity she stays away from.",
            None,
            "So the statement holds: avoid correctly takes the gerund talking.",
        ),
        (
            "Enjoy needs a gerund when its object is an activity, not a to-infinitive. "
            "Like and love can sound flexible in casual speech, but enjoy almost never takes to + verb here. "
            "Repair it to \"enjoy baking cinnamon rolls.\"",
            "**Tip:** If enjoy names an activity, use -ing.",
            "So the statement is false: repair to \"enjoy baking cinnamon rolls.\"",
        ),
        (
            "Decide takes a to-infinitive, so the coach should have \"decided to postpone,\" not \"decided postponing.\" "
            "A bare gerund after decide is a frequent wrong choice because gerund verbs sit nearby in memory. "
            "The match-and-training context does not rewrite decide's pattern.",
            "**Tip:** Decide / refuse / promise / plan lean toward to + base verb.",
            "So the statement is false: repair to \"decided to postpone the next training session.\"",
        ),
        (
            "Refuse correctly pairs with a to-infinitive: \"refuse to share.\" "
            "The meaning is a willful no — he will not share the notes — and English packages that as refuse + to + verb. "
            "Nothing after the chemistry quiz changes the complement.",
            None,
            "So the statement holds: refuse correctly takes the to-infinitive to share.",
        ),
        (
            "Promise wants to + verb for a commitment: \"promised to deliver the costumes,\" not \"promised delivering.\" "
            "Commitment language after promise follows the same family as decide and refuse. "
            "The school-play deadline does not unlock a gerund after promise.",
            "**Tip:** Promise patterns like decide — to + verb, not -ing.",
            "So the statement is false: repair to \"promised to deliver the costumes.\"",
        ),
    ])

    # --- Task 2 (1/5) ---
    packs.append([
        (
            "Consider takes a gerund, so \"considering organising a dawn walk\" is the right shape. "
            "The club is weighing an activity as an idea, which is exactly what consider + -ing expresses. "
            "The hiking context does not change the complement.",
            None,
            "So the statement holds: consider correctly takes the gerund organising.",
        ),
        (
            "Enjoy + gerund is the standard pattern: \"enjoy reading graphic novels.\" "
            "Reading is the liked activity, so -ing is required. "
            "A to-infinitive after enjoy would be wrong here.",
            None,
            "So the statement holds: enjoy correctly takes the gerund reading.",
        ),
        (
            "Decide + to-infinitive is correct: \"decided to camp beside the lake.\" "
            "They made a future plan, and decide packages plans with to + base verb. "
            "The weekend setting is just context.",
            None,
            "So the statement holds: decide correctly takes the to-infinitive to camp.",
        ),
        (
            "Refuse needs a to-infinitive — \"refused to accept tips,\" not \"refused accepting.\" "
            "The charity-day setting does not change the grammar. "
            "Borrowing an -ing shape from avoid or enjoy is the usual misfire.",
            "**Tip:** After refuse, swap a bare gerund for to + verb.",
            "So the statement is false: repair to \"refused to accept tips.\"",
        ),
        (
            "Promise correctly takes a to-infinitive: \"promised to text when his flight landed.\" "
            "That is a future commitment, which is the natural job of promise + to. "
            "The landed-flight clause is fine after the infinitive.",
            None,
            "So the statement holds: promise correctly takes the to-infinitive to text.",
        ),
    ])

    # --- Task 3 (1/5) ---
    packs.append([
        (
            "Avoid needs -ing — \"avoided mentioning the overdue fines,\" not \"avoided to mention.\" "
            "Do not borrow the to-infinitive from decide or promise just because they sound similar. "
            "Mentioning the fines is the activity being steered clear of, so the gerund fits.",
            "**Tip:** Avoid + gerund is fixed.",
            "So the statement is false: repair to \"avoided mentioning the overdue fines.\"",
        ),
        (
            "Enjoy takes a gerund — \"enjoy practising knife skills,\" not \"enjoy to practise.\" "
            "Trainee chefs still follow the same grammar rule as anyone else. "
            "Practising is the liked activity, so -ing is required.",
            "**Tip:** Enjoy / avoid / consider share the -ing pattern.",
            "So the statement is false: repair to \"enjoy practising knife skills.\"",
        ),
        (
            "Consider takes -ing — \"considering outsourcing the school canteen,\" not \"considering to outsource.\" "
            "If you can paraphrase as \"the idea of …ing,\" you want a gerund. "
            "Consider to + verb is a frequent exam miss.",
            "**Tip:** Reject consider to + verb; use consider + -ing.",
            "So the statement is false: repair to \"considering outsourcing the school canteen.\"",
        ),
        (
            "Decide needs to + verb — \"decided to expand their tour,\" not \"decided expanding.\" "
            "Decide never takes a bare gerund as its direct complement. "
            "The tour expansion is a future plan, which is classic decide + to.",
            "**Tip:** Decide → to + base verb.",
            "So the statement is false: repair to \"decided to expand their tour.\"",
        ),
        (
            "Refuse + to-infinitive is correct: \"refused to open the boot without seeing ID.\" "
            "Refusal language almost always pairs with to + base verb, and this line does it right. "
            "The ID condition sits after the infinitive without rewriting refuse's pattern.",
            None,
            "So the statement holds: refuse correctly takes the to-infinitive to open.",
        ),
    ])

    # --- Task 4 (1/5) stop meaning ---
    packs.append([
        (
            "Stop + to-infinitive means they interrupted the journey in order to buy ice cream. "
            "That purpose reading fits the pier scene perfectly. "
            "The same verb with a gerund would mean quit buying, which is not the sense here.",
            "**Tip:** Stop to = pause activity A in order to do B.",
            "So the statement holds: stop to buy correctly marks purpose after a pause.",
        ),
        (
            "Here you want quit the habit of chewing gum during the recital — \"stop chewing,\" not \"stop to chew.\" "
            "Stop to chew would oddly mean pause something else in order to start chewing. "
            "The polite command is cessation of the same action.",
            "**Tip:** Stop -ing = quit / no longer do that activity.",
            "So the statement is false: repair to \"stop chewing gum during the recital.\"",
        ),
        (
            "Stop + gerund means they quit talking and listened instead. "
            "On the motorway, the meaning is cessation of the same action, so -ing is the right form. "
            "A to-infinitive would wrongly read as pausing in order to talk.",
            None,
            "So the statement holds: stop talking correctly marks cessation.",
        ),
        (
            "Habit quitting needs the gerund alone — \"stopped smoking,\" not \"stopped to smoking.\" "
            "You cannot mix to and -ing in the same complement slot after stop. "
            "The doctor's warning frames a quit-habit sense, not a purpose pause.",
            "**Trap:** \"Stop to smoking\" glues to onto an -ing form — that hybrid is never valid.",
            "So the statement is false: repair to \"stopped smoking.\"",
        ),
        (
            "Stop + gerund correctly means he quit typing when the fire alarm sounded. "
            "The typing itself ends; that is cessation, not purpose. "
            "Stop to type would mean pause something else in order to start typing.",
            None,
            "So the statement holds: stop typing correctly marks cessation of the same action.",
        ),
    ])

    # --- Task 5 (2/5) ---
    packs.append([
        (
            "Avoid + gerund is correct: \"avoid eating heavy meals right before a race.\" "
            "Health and habit advice often uses this pattern, and athletes are a natural context for it. "
            "A to-infinitive after avoid would break the fixed rule.",
            None,
            "So the statement holds: avoid correctly takes the gerund eating.",
        ),
        (
            "Enjoy + gerund names a liked activity: \"enjoy gardening in the late afternoon.\" "
            "Enjoy almost never takes to + verb in standard exam English. "
            "Gardening is simply the activity they like.",
            None,
            "So the statement holds: enjoy correctly takes the gerund gardening.",
        ),
        (
            "Consider + gerund is correct: \"considered joining the community choir.\" "
            "Consider means think about doing something, which takes -ing. "
            "The polite question form does not unlock consider to.",
            None,
            "So the statement holds: consider correctly takes the gerund joining.",
        ),
        (
            "Decide needs to + verb — \"decided to study abroad,\" not \"decided studying.\" "
            "Choose, refuse, and promise sit in the same to-infinitive family. "
            "A semester abroad is a future plan, so the infinitive is required.",
            "**Tip:** Decide / choose / refuse / promise → to-infinitive.",
            "So the statement is false: repair to \"decided to study abroad.\"",
        ),
        (
            "Promise + to-infinitive is correct: \"promised to reopen the sculpture wing in May.\" "
            "Commitments after promise use to + base verb. "
            "Public or personal promises both keep the to.",
            None,
            "So the statement holds: promise correctly takes the to-infinitive to reopen.",
        ),
    ])

    # --- Task 6 (2/5) ---
    packs.append([
        (
            "Avoid takes -ing — \"avoid swimming near the rocks,\" not \"avoid to swim.\" "
            "Warnings with avoid always want the gerund. "
            "Do not borrow to from decide just because the sentence feels advisory.",
            "**Tip:** Avoid + gerund is fixed; do not borrow to from decide.",
            "So the statement is false: repair to \"avoid swimming near the rocks.\"",
        ),
        (
            "Enjoy + gerund is correct: \"enjoy building sandcastles at low tide.\" "
            "Building is the liked activity, so -ing is required. "
            "Enjoy to build would be the wrong camp.",
            None,
            "So the statement holds: enjoy correctly takes the gerund building.",
        ),
        (
            "Consider takes -ing — \"considering renting bikes,\" not \"considering to rent.\" "
            "Consider to + verb is a frequent exam trap. "
            "If you can swap in \"the idea of …ing,\" you want a gerund after consider.",
            "**Tip:** If you can say \"the idea of …ing,\" keep -ing after consider.",
            "So the statement is false: repair to \"considering renting bikes.\"",
        ),
        (
            "Refuse + to-infinitive is correct: \"refused to discuss the case outside the room.\" "
            "Refuse patterns with decide and promise, and this line keeps that to. "
            "The jury setting does not change the complement.",
            None,
            "So the statement holds: refuse correctly takes the to-infinitive to discuss.",
        ),
        (
            "Promise needs to + verb — \"promised to call us,\" not \"promised calling.\" "
            "Promise + -ing is not standard for future commitments. "
            "The ferry-docked timing clause belongs after the infinitive.",
            "**Tip:** Promise + to-infinitive for commitments.",
            "So the statement is false: repair to \"promised to call us.\"",
        ),
    ])

    # --- Task 7 (2/5) stop ---
    packs.append([
        (
            "Stop to stretch means pause the run in order to stretch at the water station. "
            "Purpose after an interruption is exactly what stop + to-infinitive expresses. "
            "Stop stretching would mean quit stretching, which is the opposite sense.",
            "**Tip:** Purpose after an interruption → stop + to-infinitive.",
            "So the statement holds: stop to stretch correctly marks purpose.",
        ),
        (
            "Stop shouting means quit the noisy behaviour. "
            "The neighbours can hear you, so the command is to cease that same action — gerund territory. "
            "Stop to shout would mean pause something else in order to start shouting.",
            None,
            "So the statement holds: stop shouting correctly marks cessation.",
        ),
        (
            "After stop, use to + verb for purpose, not for + -ing — \"stopped to buy tickets,\" not \"stopped for buying.\" "
            "For + -ing is not the purpose pattern you want here. "
            "The kiosk scene is a pause in order to buy.",
            "**Trap:** \"Stopped for buying\" looks like purpose but the fixed purpose form is stop to + verb.",
            "So the statement is false: repair to \"stopped to buy tickets at the kiosk.\"",
        ),
        (
            "Stop to check means interrupt travel in order to check the map because the path forked. "
            "Reason or purpose after a pause takes the to-infinitive. "
            "Stop checking the map would mean quit checking, not pause to look.",
            None,
            "So the statement holds: stop to check correctly marks purpose after a pause.",
        ),
        (
            "As written, both form and preposition fail. "
            "You need either \"stopped listening to music\" (quit) or \"stopped to listen to music\" (pause in order to) — "
            "and listen always keeps to before music. "
            "The announcement-missed outcome also fits either repair once listen to is intact.",
            "**Trap:** \"Stop to listen music\" drops listen's to and muddies the stop meaning choice.",
            "So the statement is false: repair to \"stopped listening to music\" or \"stopped to listen to music.\"",
        ),
    ])

    # --- Task 8 (2/5) ---
    packs.append([
        (
            "Avoid + gerund is correct: \"avoid checking social media before breakfast.\" "
            "That is a habit she tries not to do, which is classic avoid + -ing. "
            "Avoid to check would be the crossed pattern.",
            None,
            "So the statement holds: avoid correctly takes the gerund checking.",
        ),
        (
            "Enjoy needs -ing — \"enjoy watching documentaries,\" not \"enjoy to watch.\" "
            "Enjoy to + verb is almost never right in carefully marked English. "
            "Watching is the liked activity, so the gerund is required.",
            "**Tip:** Enjoy to + verb is almost never right.",
            "So the statement is false: repair to \"enjoy watching documentaries.\"",
        ),
        (
            "Consider + gerund is correct: \"considered changing your route to avoid the roadworks.\" "
            "Weighing an option takes -ing after consider. "
            "The nested avoid the roadworks phrase does not rewrite consider's complement.",
            None,
            "So the statement holds: consider correctly takes the gerund changing.",
        ),
        (
            "Decide + to-infinitive is correct: \"decided to cancel the outdoor picnic.\" "
            "Decisions about future actions take to + verb. "
            "The committee subject does not change the pattern.",
            None,
            "So the statement holds: decide correctly takes the to-infinitive to cancel.",
        ),
        (
            "Refuse needs to + verb — \"refused to help with the dishes,\" not \"refused helping.\" "
            "Refuse + -ing is a classic false friend with avoid and enjoy. "
            "The homework condition does not unlock a gerund after refuse.",
            "**Trap:** Refuse + -ing mimics avoid wrongly — flip it to to + verb.",
            "So the statement is false: repair to \"refused to help with the dishes.\"",
        ),
    ])

    # --- Task 9 (3/5) ---
    packs.append([
        (
            "Stop + gerund means quit the habit of drinking energy drinks after years of late nights. "
            "Habit change is the cessation reading, so -ing is correct. "
            "Stop to drink would mean pause in order to drink — not a quit story.",
            None,
            "So the statement holds: stop drinking correctly marks habit cessation.",
        ),
        (
            "Stop to ask means pause the journey in order to ask a local which tram went to the museum. "
            "Purpose after a pause takes stop + to. "
            "Stop asking would mean quit asking, which is not the travel sense.",
            None,
            "So the statement holds: stop to ask correctly marks purpose after a pause.",
        ),
        (
            "Quit arguing needs the gerund alone — \"stopped arguing,\" not \"stopped to arguing.\" "
            "Do not glue to onto a gerund after stop. "
            "When the teacher walked in, the intended sense is cessation of arguing.",
            "**Trap:** \"Stopped to arguing\" mixes the purpose to with an -ing form — never valid after stop.",
            "So the statement is false: repair to \"stopped arguing when the teacher walked in.\"",
        ),
        (
            "Enjoy + gerund is correct even when negated: \"never enjoys waiting in long airport queues.\" "
            "Negation does not change the enjoy + -ing pattern. "
            "Never does not unlock enjoy to.",
            None,
            "So the statement holds: enjoy correctly takes the gerund waiting even under negation.",
        ),
        (
            "Promise needs to + verb — \"promised to rehearse every evening,\" not \"promised rehearsing.\" "
            "Promise + -ing fails the commitment pattern. "
            "Opening-night urgency does not rewrite promise's complement.",
            "**Trap:** Promise + -ing looks busy but commitments still want to + verb.",
            "So the statement is false: repair to \"promised to rehearse every evening.\"",
        ),
    ])

    # --- Task 10 (3/5) ---
    packs.append([
        (
            "Avoid + gerund is correct: \"avoid blocking the aisle with large suitcases.\" "
            "Public notices often use avoid + -ing, and this one is textbook. "
            "Avoid to block would be the wrong camp.",
            None,
            "So the statement holds: avoid correctly takes the gerund blocking.",
        ),
        (
            "Consider takes -ing — \"consider volunteering at the food bank,\" not \"consider to volunteer.\" "
            "Consider to is a frequent trap in polite offers. "
            "Would you consider still wants the gerund.",
            "**Trap:** Consider to + verb is a common exam near-miss; rewrite with -ing.",
            "So the statement is false: repair to \"consider volunteering at the food bank.\"",
        ),
        (
            "Decide + to-infinitive is correct: \"decided to turn back because of the fog.\" "
            "Sudden decisions still take to + verb. "
            "The fog reason clause does not change decide's pattern.",
            None,
            "So the statement holds: decide correctly takes the to-infinitive to turn back.",
        ),
        (
            "Refuse needs to + verb — \"refuses to admit he lost the house keys,\" not \"refuses admitting.\" "
            "Refuse + -ing wrongly mimics avoid. "
            "Admitting the loss is still a refuse + to situation.",
            "**Trap:** Refuse + -ing borrows avoid's shape — flip to to + verb.",
            "So the statement is false: repair to \"refuses to admit he lost the house keys.\"",
        ),
        (
            "Enjoy + gerund is correct: \"enjoys knitting scarves for the whole family.\" "
            "Hobby verbs after enjoy always take -ing. "
            "Enjoy to knit would be wrong in exam English.",
            None,
            "So the statement holds: enjoy correctly takes the gerund knitting.",
        ),
    ])

    # --- Task 11 (3/5) negation ---
    packs.append([
        (
            "Decide + not + to-infinitive is the correct negation: \"decided not to climb the ridge.\" "
            "You negate the infinitive with not before to, not by switching to a gerund. "
            "The weather warning explains why, without changing the pattern.",
            None,
            "So the statement holds: decided not to climb correctly negates the infinitive.",
        ),
        (
            "Avoid already means \"not do\"; use \"avoids sitting near the speakers,\" not \"avoids not to sit.\" "
            "Do not stack an extra not + to onto avoid. "
            "The concert setting still wants plain avoid + -ing.",
            "**Trap:** Avoid + not to double-negates a verb that already means \"stay away from.\"",
            "So the statement is false: repair to \"avoids sitting near the speakers.\"",
        ),
        (
            "The intended sense is almost always \"refused to apologise\" (would not apologise). "
            "\"Refused not to apologise\" is a double-negative mess unless you truly mean they insisted on apologising. "
            "Everyone expected an apology, so the natural reading fails as written.",
            "**Trap:** Refused not to usually muddles refuse to; put not only when you truly mean \"refuse to not do X.\"",
            "So the statement is false: repair to \"refused to apologise\" (unless insistence is truly meant).",
        ),
        (
            "Promise + not + to-infinitive is correct: \"promised not to spoil the ending.\" "
            "Negation sits before to in the infinitive pattern, same family as decide. "
            "The film context does not change the placement of not.",
            None,
            "So the statement holds: promised not to spoil correctly negates the infinitive.",
        ),
        (
            "Enjoy + gerund works with negation inside the activity: \"enjoy not waking up to an alarm on Sundays.\" "
            "Enjoy still wants -ing even when the activity is a negative state. "
            "Not belongs with the gerund phrase, not with a to-infinitive after enjoy.",
            None,
            "So the statement holds: enjoy not waking correctly keeps the gerund under internal negation.",
        ),
    ])

    # --- Task 12 (3/5) stop / prevent ---
    packs.append([
        (
            "Stop + gerund means quit the activity of drinking from the stream and switch to bottled water. "
            "The same action ends, so -ing is correct. "
            "Stop to drink would mean pause hiking in order to drink — a different sense.",
            None,
            "So the statement holds: stop drinking correctly marks cessation of the same action.",
        ),
        (
            "Stop to drink means pause walking in order to drink from our bottles. "
            "The purpose of the pause is the drink, so to-infinitive is correct. "
            "Stop drinking would mean quit drinking, not pause to drink.",
            None,
            "So the statement holds: stop to drink correctly marks purpose of the pause.",
        ),
        (
            "Stop someone from + -ing is a related but valid pattern: the guide prevented them from approaching the cliff edge. "
            "That is not the same as stop to or bare stop -ing, but it is grammatical. "
            "The object us + from + approaching carries the prevent sense.",
            "**Tip:** Stop + object + from + -ing = prevent.",
            "So the statement holds: stop us from approaching correctly marks prevention.",
        ),
        (
            "Quit interrupting needs \"stop interrupting,\" not \"stop to interrupting.\" "
            "Never attach to directly to an -ing form after stop. "
            "The speaker-command sense is cessation of the same annoying act.",
            "**Trap:** \"Stop to interrupting\" is the hybrid purpose-marker glued onto a gerund.",
            "So the statement is false: repair to \"stop interrupting the speaker.\"",
        ),
        (
            "Stop + gerund means they quit singing as soon as the conductor raised her hand. "
            "Instant cessation of the same action takes -ing. "
            "Stop to sing would mean pause in order to start singing.",
            None,
            "So the statement holds: stop singing correctly marks instant cessation.",
        ),
    ])

    # --- Task 13 (4/5) ---
    packs.append([
        (
            "Consider + gerund and decide + to-infinitive both follow their fixed patterns in one sentence: "
            "having considered moving, they decided to stay. "
            "Different verbs keep their own complements; one correct pattern does not rewrite its neighbour.",
            "**Tip:** Different verbs in the same sentence can still keep their own complements.",
            "So the statement holds: considered moving and decided to stay each match their verb's rule.",
        ),
        (
            "Enjoy needs -ing — \"enjoys being the first to arrive,\" not \"enjoys to be.\" "
            "Enjoy + being / doing, never enjoy to be in this sense. "
            "Being first is the liked state, so the gerund is required.",
            "**Trap:** Enjoy to be looks polished but enjoy still wants being / doing.",
            "So the statement is false: repair to \"enjoys being the first to arrive.\"",
        ),
        (
            "Avoid + gerund is correct: \"avoided discussing politics at the family dinner.\" "
            "Sensitive topics often pair with avoid + -ing. "
            "Avoid to discuss would be the wrong camp.",
            None,
            "So the statement holds: avoid correctly takes the gerund discussing.",
        ),
        (
            "Refuse needs to + verb — \"refused to be photographed without his consent,\" not \"refused being.\" "
            "Passive infinitives still follow refuse + to. "
            "Being photographed after refuse wrongly borrows the gerund camp.",
            "**Trap:** Passive voice does not unlock refuse + -ing — keep refuse to be + past participle.",
            "So the statement is false: repair to \"refused to be photographed without his consent.\"",
        ),
        (
            "Promise + to-infinitive is correct: \"promised to fund the new skate park next spring.\" "
            "Public commitments use promise + to. "
            "A gerund after promise would break the commitment pattern.",
            None,
            "So the statement holds: promise correctly takes the to-infinitive to fund.",
        ),
    ])

    # --- Task 14 (4/5) idioms ---
    packs.append([
        (
            "The intended idiom is continuous curiosity — \"never stop wondering\" (gerund), not pause-in-order-to wonder. "
            "Stop to wonder would mean interrupt something else so you can wonder, which is not the usual reading. "
            "I never stop + -ing means keep doing that all the time.",
            "**Trap:** Never stop to + verb sounds close to the idiom but the fixed phrase wants never stop + -ing.",
            "So the statement is false: repair to \"never stop wondering.\"",
        ),
        (
            "Never stop + gerund correctly means the wondering continues without pause. "
            "Idiomatic \"can't/never stop -ing\" always wants the gerund. "
            "The magician clause is simply the object of wondering.",
            None,
            "So the statement holds: never stop wondering correctly marks continuous curiosity.",
        ),
        (
            "Quit smoking needs \"stop smoking\"; \"stop to smoke\" would mean pause something else in order to smoke — "
            "the opposite of medical advice to quit. "
            "Doctors advised him to stop smoking immediately.",
            "**Trap:** Stop to smoke after quit-advice flips the intended cease sense into purpose.",
            "So the statement is false: repair to \"stop smoking immediately.\"",
        ),
        (
            "Decide against + gerund is a valid related pattern: \"decided against postponing the wedding.\" "
            "You can also say decide to + verb; against + -ing is the negative sibling. "
            "Here postponing sits under against, not as decide's bare complement.",
            "**Tip:** Decide to + verb OR decide against + -ing.",
            "So the statement holds: decide against postponing is a legal alternative structure.",
        ),
        (
            "Consider whether + to-infinitive is grammatical when whether introduces the option: \"considering whether to accept.\" "
            "Bare consider + verb still wants -ing; the whether-clause changes the frame. "
            "The internship offer is the embedded choice, not a bare consider + verb slot.",
            "**Tip:** Bare consider + verb → -ing; consider whether → to is fine.",
            "So the statement holds: considering whether to accept correctly uses the wh- + to frame.",
        ),
    ])

    # --- Task 15 (4/5) ---
    packs.append([
        (
            "Decide + to-infinitive is correct: \"decided to sleep on the problem.\" "
            "The opener \"Rather than argue\" does not change decide's to-pattern. "
            "Sleeping on the problem is the planned action packaged with to.",
            None,
            "So the statement holds: decide correctly takes the to-infinitive to sleep.",
        ),
        (
            "Avoid needs -ing — \"avoids being seen wearing the same outfit twice,\" not \"avoids to be seen.\" "
            "Passive gerunds still follow avoid + -ing. "
            "Being seen is the state she steers clear of.",
            "**Trap:** Passive \"to be seen\" after avoid is a polished near-miss; keep avoid + being.",
            "So the statement is false: repair to \"avoids being seen wearing the same outfit twice.\"",
        ),
        (
            "Enjoy + gerund (passive) is correct: \"enjoy being invited to their rooftop barbecues.\" "
            "Enjoy + being + past participle is a common natural pattern. "
            "Active or passive form does not unlock enjoy to.",
            None,
            "So the statement holds: enjoy being invited correctly keeps the gerund, even passive.",
        ),
        (
            "Refuse + to-infinitive is correct: \"refused to let the puppy sleep on the sofa.\" "
            "Refuse to let / refuse to allow keep the to. "
            "The puppy clause is the object of let, not a gerund after refuse.",
            None,
            "So the statement holds: refuse correctly takes the to-infinitive to let.",
        ),
        (
            "Promise needs to + verb — \"promised to arrange free coaching,\" not \"promised arranging.\" "
            "Promise + -ing is still wrong even with a kind offer. "
            "Beginners' coaching does not rewrite the commitment pattern.",
            "**Trap:** Kind offers after promise still want to + verb, not a bare gerund.",
            "So the statement is false: repair to \"promised to arrange free coaching.\"",
        ),
    ])

    # --- Task 16 (4/5) all true ---
    packs.append([
        (
            "Stop to check means pause driving in order to check the tyre pressure after a strange vibration. "
            "The cleft \"what made them…\" still keeps stop's meaning split intact. "
            "Purpose of the pause is what the to-infinitive marks.",
            None,
            "So the statement holds: stop to check correctly marks purpose inside the cleft.",
        ),
        (
            "Stop checking means quit the phone-checking habit because of the no-device rule. "
            "Same cleft frame, opposite stop pattern — meaning decides. "
            "The gerund marks cessation of the same action.",
            None,
            "So the statement holds: stop checking correctly marks cessation inside the cleft.",
        ),
        (
            "Consider + gerund is correct: \"considering selling a small stake in the start-up.\" "
            "Even in money contexts, consider still wants -ing. "
            "Consider to sell would be the crossed camp.",
            None,
            "So the statement holds: consider correctly takes the gerund selling.",
        ),
        (
            "Decide that + clause is grammatical; the gerund postponing is the subject of the that-clause, not decide's complement. "
            "Decide to + verb OR decide that + clause — both work. "
            "Here that carries the content of the decision.",
            "**Tip:** Decide to + verb OR decide that + clause — both work.",
            "So the statement holds: decide that postponing… would be wiser is a legal clause object.",
        ),
        (
            "Enjoy can take a when-clause as its object; no verb-complement conflict arises. "
            "Enjoy + noun/gerund/clause are fine — but not enjoy to + verb. "
            "Friends dropping by is a situation clause, not an activity infinitive.",
            "**Tip:** Enjoy + noun/gerund/clause — but not enjoy to + verb.",
            "So the statement holds: enjoy when… correctly uses a clause object.",
        ),
    ])

    # --- Task 17 (5/5) ---
    packs.append([
        (
            "Avoid still needs -ing — \"avoiding answering,\" not \"avoiding to answer.\" "
            "Far from + -ing does not license avoid + to. "
            "Strip the wrapper and the bare rule is still avoid + gerund.",
            "**Trap:** Far from… does not unlock avoid to; the complement rule survives the wrapper.",
            "So the statement is false: repair to \"avoiding answering.\"",
        ),
        (
            "Promise needs to + verb — \"promising to finish the mural,\" not \"promising finishing.\" "
            "Keep / start do not change promise's to-pattern. "
            "Kept promising still embeds finish as an infinitive.",
            "**Trap:** Keep -ing around promise still leaves promise wanting to + verb.",
            "So the statement is false: repair to \"promising to finish the mural.\"",
        ),
        (
            "Refuse + to-infinitive is correct inside the inversion: \"refusing to compromise.\" "
            "Inversion and emphasis leave the refuse + to pattern intact. "
            "Only after… did… is wrapper, not a new complement rule.",
            None,
            "So the statement holds: refusing to compromise correctly keeps refuse + to under inversion.",
        ),
        (
            "Enjoy needs -ing — \"enjoyed sailing as children,\" not \"enjoyed to sail.\" "
            "The perfect participle having enjoyed still takes -ing. "
            "Childhood hobby language does not unlock enjoy to.",
            "**Trap:** Having enjoyed still takes -ing; the participle wrapper does not license to.",
            "So the statement is false: repair to \"Having enjoyed sailing as children.\"",
        ),
        (
            "Quit pretending needs \"stop pretending,\" not \"stop to pretend\" (which would mean pause in order to pretend). "
            "Commands to quit an act use stop + -ing. "
            "You did not hear the question is the act being told to cease.",
            "**Trap:** Stop to pretend reads as purpose; quit-commands need stop + -ing.",
            "So the statement is false: repair to \"Stop pretending you did not hear the question.\"",
        ),
    ])

    # --- Task 18 (5/5) ---
    packs.append([
        (
            "Stop to mean is not English for \"intend.\" "
            "Use something like \"She did not mean that she was leaving; she simply paused for breath.\" "
            "Stop to only works when the infinitive is a real purpose action — mean is not one.",
            "**Trap:** Stop to + verb only works for real purpose actions; \"mean\" fails that test.",
            "So the statement is false: repair the sense — e.g. \"She did not mean that she was leaving…\"",
        ),
        (
            "Stop + gerund twice: quit meaning what you say / quit trusting you. "
            "Parallel stop + -ing structures keep the \"cease\" sense cleanly. "
            "The conditional frame does not rewrite stop's cessation pattern.",
            None,
            "So the statement holds: stop meaning / stop trusting correctly mark parallel cessation.",
        ),
        (
            "Consider + how + to-infinitive is fine when how introduces the method: \"considering how to phrase the apology.\" "
            "Consider + -ing OR consider + wh-word + to both work. "
            "Here how to phrase is the embedded method question.",
            "**Tip:** Consider + -ing OR consider + wh-word + to.",
            "So the statement holds: considering how to phrase correctly uses the wh- + to frame.",
        ),
        (
            "Decide on + gerund/noun is a valid alternative to decide to + verb: \"decided on renting the attic flat.\" "
            "Decide to go OR decide on going — both grammatical. "
            "On renting carries the choice as a prepositional object.",
            "**Tip:** Decide to go OR decide on going — both grammatical.",
            "So the statement holds: decide on renting is a legal alternative structure.",
        ),
        (
            "Refuse can take a noun object (\"refused their friends' offer\"); the of + -ing belongs to offer, not to refuse. "
            "Refuse + noun and refuse + to + verb are both correct. "
            "Do not force a to-infinitive when the object is already a noun phrase.",
            "**Tip:** Refuse + noun and refuse + to + verb are both correct.",
            "So the statement holds: refused their friends' offer correctly uses a noun object.",
        ),
    ])

    # --- Task 19 (5/5) ---
    packs.append([
        (
            "Avoid + gerund is correct: \"avoided interrupting the poet mid-line.\" "
            "Fronted participle clauses (Not wishing to appear rude) do not change avoid's -ing rule. "
            "Interrupting is still the activity she steers clear of.",
            None,
            "So the statement holds: avoid correctly takes the gerund interrupting after the fronted clause.",
        ),
        (
            "Same sentence with the wrong complement — avoid needs -ing, not to. "
            "Compare the pair; only the gerund version works. "
            "Not wishing to appear rude does not license avoid to interrupt.",
            "**Trap:** The fronted clause makes avoid to look elegant, but avoid still wants -ing.",
            "So the statement is false: repair to \"avoided interrupting the poet mid-line.\"",
        ),
        (
            "Promise that + clause is a valid alternative to promise to + verb: \"promised that they would water the plants.\" "
            "Promise to water OR promise that we will water. "
            "The that-clause carries the commitment content.",
            "**Tip:** Promise to water OR promise that we will water.",
            "So the statement holds: promise that… would water is a legal clause alternative.",
        ),
        (
            "Enjoy that + clause is acceptable; the that-clause is the object of enjoy. "
            "Enjoy + -ing for activities; enjoy that for facts or situations. "
            "His sister remembering the birthday is a fact/situation, not an infinitive activity.",
            "**Tip:** Enjoy + -ing for activities; enjoy that for facts/situations.",
            "So the statement holds: enjoy that… correctly uses a clause object.",
        ),
        (
            "Stop short of + -ing is an idiom meaning \"almost but not quite\"; promising keeps its own to inside the gerund phrase. "
            "Idioms can nest: stop short of + gerund, and inside it promise + to. "
            "Hosting the reunion is the nearly-made promise, not a bare stop to host.",
            "**Tip:** Idioms can nest stop short of + gerund with promise + to inside.",
            "So the statement holds: stopped short of promising to host nests both patterns legally.",
        ),
    ])

    # --- Task 20 (5/5) ---
    packs.append([
        (
            "Consider + gerund and decide + to-infinitive are both correct inside a conditional: "
            "had they considered postponing, they might have decided to wait. "
            "Complex syntax still respects each verb's fixed complement.",
            "**Tip:** Complex syntax still respects each verb's fixed complement.",
            "So the statement holds: considered postponing and decided to wait each keep their own rule.",
        ),
        (
            "Enjoy needs -ing — \"enjoying winning,\" not \"enjoying to win.\" "
            "Cannot help + -ing is itself a gerund pattern and does not license enjoy to. "
            "Nested -ing still leaves enjoy wanting a gerund object.",
            "**Trap:** Cannot help enjoying does not unlock enjoy to; keep enjoying winning.",
            "So the statement is false: repair to \"enjoying winning.\"",
        ),
        (
            "Refuse + to and avoid + -ing are both correct in parallel clauses: "
            "whatever they refuse to discuss, they still avoid lying. "
            "Different verbs, different complements — both can be right at once.",
            None,
            "So the statement holds: refuse to discuss and avoid lying both match their verbs.",
        ),
        (
            "The contrast is precisely the teaching point: stop to worry is not the same as stop worrying. "
            "Infinitive subjects can showcase the stop meaning split cleanly, and both halves are grammatical as a contrast. "
            "Purpose pause versus cessation sit side by side on purpose.",
            "**Tip:** Infinitive subjects can showcase the stop meaning split cleanly.",
            "So the statement holds: the stop to / stop -ing contrast is grammatical as a teaching contrast.",
        ),
        (
            "Promise needs to + verb — \"promise to deliver results on time,\" not \"promise delivering.\" "
            "Relative clauses do not unlock promise + -ing. "
            "Those who… still wrap a complement that must match promise.",
            "**Trap:** Relative-clause wrappers do not unlock promise + -ing.",
            "So the statement is false: repair to \"promise to deliver results on time.\"",
        ),
    ])

    letters = "ABCDE"
    for task, pack in zip(data["tasks"], packs, strict=True):
        stmts = task["statements"]
        keys = task["answer_key"]
        assert len(stmts) == 5 and len(pack) == 5
        new_exps = []
        for i, (body, tip, verdict) in enumerate(pack):
            # Sanity: verdict language should match key
            if keys[i]:
                assert "holds" in verdict.lower() or "true" in verdict.lower(), (task["id"], letters[i], verdict)
            else:
                assert "false" in verdict.lower(), (task["id"], letters[i], verdict)
            new_exps.append(build(letters[i], stmts[i], body, tip, verdict))
        task["tactical_explanations"] = new_exps

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {PATH}")
    print(f"Tasks: {len(data['tasks'])}, explanations: {sum(len(t['tactical_explanations']) for t in data['tasks'])}")


if __name__ == "__main__":
    main()
