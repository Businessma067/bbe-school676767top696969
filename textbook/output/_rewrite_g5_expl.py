# -*- coding: utf-8 -*-
"""Rewrite g.5 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.5.json")

# Each task: list of 5 explanation strings (body already includes Tip/Trap/verdict).
REWRITES: list[list[str]] = [
    # Task 1 — 1/5
    [
        "**A) The neighbours painted the fence. → The fence was painted by the neighbours.**\n\n"
        "The active sentence names the neighbours as painters and the fence as the thing painted. "
        "The passive promotes the fence to subject, uses was painted, and keeps the neighbours in a by-phrase. "
        "Tense and participants stay the same, so the arrow is a clean voice flip.\n\n"
        "So the statement holds: the passive correctly mirrors the active without adding or dropping anything.",

        "**B) The cake was baked yesterday. → The chef baked the cake yesterday, and we know that for certain.**\n\n"
        "The cake was baked yesterday never names a chef and never claims certainty about who did it. "
        "The rewrite invents both a baker and we know that for certain, adding knowledge the source never supplied. "
        "A fair active would stay vague about the agent, not pretend we know the cook.\n\n"
        'So the statement is false: repair to an agentless active such as "Someone baked the cake yesterday."',

        "**C) Several windows were broken by the storm.**\n\n"
        "This is a clear past passive: plural windows with were broken, past participle broken, and an explicit cause in by the storm. "
        "Form and meaning line up cleanly without inventing a human doer.\n\n"
        "So the statement holds: were broken by the storm is well-formed past passive.",

        "**D) The photograph was cropped before posting. → The photograph cropped itself before posting.**\n\n"
        "Photographs do not crop themselves. The rewrite invents a reflexive agent and erases the implied human editor that cropped is meant to leave open. "
        "Patient nouns are not self-acting agents, so the flip changes both grammar and sense.\n\n"
        'So the statement is false: keep "The photograph was cropped before posting," or name a real editor if the source supplies one.',

        "**E) My sister watered the plants. → The plants were watered by my sister.**\n\n"
        "My sister watered the plants flips cleanly to The plants were watered by my sister. "
        "The object becomes subject, past simple becomes were + past participle, and the agent stays as by my sister. "
        "Nothing in meaning or tense is altered.\n\n"
        "So the statement holds: tense and agent are preserved across the voice change.",
    ],
    # Task 2 — 1/5
    [
        "**A) The tickets were booked last Friday.**\n\n"
        "Were booked is a correct past passive focusing on the tickets. "
        "No agent is required when the booker is unimportant or unknown, and last Friday sits naturally with the past form.\n\n"
        "So the statement holds: agentless past passive with a time phrase is grammatical.",

        "**B) Mistakes were made during the rehearsal. → The rehearsal made mistakes deliberately.**\n\n"
        "Mistakes were made during the rehearsal is a classic agentless hedge. "
        "It does not say the rehearsal caused the mistakes on purpose. "
        "The rewrite smuggles in both agency and deliberately, changing force and meaning.\n\n"
        "So the statement is false: leave the passive as is, or name a real person only if the source does.",

        "**C) The librarian shelved the returns. → The returns were shelved by the librarian.**\n\n"
        "The librarian shelved the returns becomes The returns were shelved by the librarian without losing participants. "
        "Shelved is the right participle, and the agent stays explicit in the by-phrase.\n\n"
        "So the statement holds: the active–passive pair keeps the same people and action.",

        "**D) The concert was cancelled yesterday. → Someone cancelled the concert yesterday, and we know exactly who.**\n\n"
        "The concert was cancelled yesterday hides the canceller. "
        "Claiming someone cancelled it and we know exactly who fabricates identity the passive never supplied. "
        "Someone cancelled… without fake certainty would be a fair vague active; certainty is not.\n\n"
        'So the statement is false: keep the agentless passive, or use "Someone cancelled the concert yesterday" without claiming you know who.',

        "**E) The parcel been delivered by the courier this morning.**\n\n"
        "The parcel been delivered drops the required auxiliary. "
        "Passive needs was delivered or has been delivered, not bare been + past participle. "
        "The by-phrase cannot rescue a missing be form.\n\n"
        'So the statement is false: repair to "The parcel was delivered by the courier this morning" (or "has been delivered…").',
    ],
    # Task 3 — 1/5
    [
        "**A) Volunteers designed the mural. → The mural was designed by volunteers.**\n\n"
        "Volunteers designed the mural flips to The mural was designed by volunteers. "
        "The object becomes subject, designed becomes was designed, and the agent is retained. "
        "Number agreement is right: the mural was, not were.\n\n"
        "So the statement holds: subject–verb number and agent both survive the voice flip.",

        "**B) The bridge was repaired in 2019.**\n\n"
        "The bridge was repaired in 2019 is a grammatical agentless past passive. "
        "The time phrase fits the finished past frame without needing an agent.\n\n"
        "So the statement holds: past passive with a closed time phrase is fine.",

        "**C) Lost dogs are returned by the local shelter.**\n\n"
        "Lost dogs are returned by the local shelter uses present simple passive for a habitual process, with a clear by-agent. "
        "Form and meaning are both sound for a standing practice.\n\n"
        "So the statement holds: present passive correctly marks a habitual return process.",

        "**D) The groceries unpacked by my brother yesterday.**\n\n"
        "The groceries unpacked by my brother yesterday is missing its auxiliary. "
        "A lone past participle cannot make a finite passive clause; you need were unpacked (or have been unpacked). "
        "Yesterday only confirms the intended past frame — it does not replace be.\n\n"
        'So the statement is false: repair to "The groceries were unpacked by my brother yesterday."',

        "**E) The coach cancelled practice. → Practice was cancelled by the coach.**\n\n"
        "The coach cancelled practice becomes Practice was cancelled by the coach. "
        "Tense matches, the object becomes subject, and the coach stays as by-agent.\n\n"
        "So the statement holds: the past simple active maps cleanly onto past simple passive.",
    ],
    # Task 4 — 1/5
    [
        "**A) The playlist was shared online. → The playlist shared itself online.**\n\n"
        "A playlist cannot share itself. The reflexive rewrite invents an impossible agent and treats the patient as if it performed the action on itself. "
        "The original passive correctly leaves the human sharer unspoken.\n\n"
        'So the statement is false: keep "The playlist was shared online," or name a real sharer if known.',

        "**B) No lessons can be scheduled this week. → This calendar prevents anyone from scheduling lessons deliberately.**\n\n"
        "No lessons can be scheduled this week is a neutral modal passive. "
        "The rewrite invents a calendar that prevents scheduling and adds deliberately, changing both modality and force. "
        "The source never named a preventer or intentional sabotage.\n\n"
        "So the statement is false: keep the modal passive without inventing prevention or intent.",

        "**C) The invitation was sent by the host. → We know the mayor personally sent the invitation.**\n\n"
        "By the host names the host, not the mayor. "
        "Upgrading the agent into a more specific celebrity invents identity the source never gave. "
        "Knowing who sent it stays limited to the host already on the page.\n\n"
        'So the statement is false: keep "The invitation was sent by the host," or "The host sent the invitation."',

        "**D) The tent was damaged during the wind. → The wind damaged the tent.**\n\n"
        "During the wind supplies the cause of the damage. "
        "The wind damaged the tent restates that cause in the active without inventing a human doer, so the meaning holds. "
        "Event or cause subjects are allowed when the passive already places the damage in that event.\n\n"
        "So the statement holds: the active simply names the cause already present in the passive.",

        "**E) The guests were notify of the delay on Monday.**\n\n"
        "Were notify uses the base verb after be. "
        "Passive needs the past participle: were notified. "
        "The delay and on Monday are fine; only the verb form is broken.\n\n"
        'So the statement is false: repair to "The guests were notified of the delay on Monday."',
    ],
    # Task 5 — 2/5
    [
        "**A) The suitcase is being weighed by airport staff.**\n\n"
        "Is being weighed is present continuous passive, with airport staff retained as the agent. "
        "Being sits correctly between is and the past participle weighed.\n\n"
        "**Tip:** Continuous passive needs being between be and the participle.\n\n"
        "So the statement holds: is being weighed by airport staff is the right continuous shape.",

        "**B) The teacher has marked three essays. → Three essays have been marked by the teacher.**\n\n"
        "Present perfect active The teacher has marked three essays flips to Three essays have been marked by the teacher. "
        "Perfect passive stacks been after have/has and keeps the named agent.\n\n"
        "**Tip:** Perfect passive = have/has been + past participle.\n\n"
        "So the statement holds: perfect aspect and agent survive the voice change.",

        "**C) The photos will be printed after the trip.**\n\n"
        "Will be printed is a clean future passive; the agent is optional and the time phrase after the trip fits well. "
        "Nothing in the line invents a doer or breaks the will be + past participle pattern.\n\n"
        "So the statement holds: future passive does not require an explicit agent.",

        "**D) The dog must be walked before dinner.**\n\n"
        "Must be walked places obligation on the walk itself. "
        "Modal + be + past participle is the standard pattern for obligation passives, and the walker need not be named.\n\n"
        "So the statement holds: the modal passive correctly encodes the duty before dinner.",

        "**E) The attic was cleared by an old school friend.**\n\n"
        "Was cleared by an old school friend is a sound past passive with an explicit agent. "
        "Cleared is the correct participle of clear, and the by-phrase names a real doer.\n\n"
        "So the statement holds: past passive with by-agent is well formed.",
    ],
    # Task 6 — 2/5
    [
        "**A) The recipes are still being debated. → We know precisely which cousin is debating them.**\n\n"
        "Are still being debated hides who is debating. "
        "Claiming we know precisely which cousin invents both identity and certainty the progressive agentless passive never supplied. "
        "The continuous form focuses on the ongoing debate, not a named discussant.\n\n"
        "**Trap:** Agentless progressive passives often tempt exam writers to invent a specific person and certainty.\n\n"
        "So the statement is false: leave the agentless continuous passive as written.",

        "**B) Dad sent us the bus timetable. → We were sent the bus timetable by Dad.**\n\n"
        "Dad sent us the bus timetable allows the indirect-object subject We were sent the bus timetable by Dad. "
        "Double-object verbs often permit this flip without changing meaning, and Dad stays named.\n\n"
        "**Tip:** With give, send, or offer, either object can become the passive subject.\n\n"
        "So the statement holds: the recipient-as-subject passive is fair for send.",

        "**C) The lamp crashed overnight. → The lamp was crashed overnight by itself intentionally.**\n\n"
        "Crash is intransitive here; was crashed… by itself intentionally is ungrammatical and adds nonsense intent. "
        "The lamp crashed overnight already states an event, not deliberate agency.\n\n"
        "**Trap:** Intransitive crash resists an agentive passive — by itself intentionally is a classic overreach.\n\n"
        'So the statement is false: keep "The lamp crashed overnight," or use "was damaged" if you mean an external cause.',

        "**D) New park rules have been posted by the city council.**\n\n"
        "New park rules have been posted by the city council is present perfect passive with a clear agent and plural agreement (have been, not has been). "
        "The council is a legitimate named doer already on the page.\n\n"
        "So the statement holds: plural have been + past participle with by-agent is correct.",

        "**E) The birthday banner design by Maya last week.**\n\n"
        "The birthday banner design by Maya last week lacks be + past participle. "
        "A bare noun phrase plus by does not make a passive clause, even with a time phrase.\n\n"
        'So the statement is false: repair to "The birthday banner was designed by Maya last week."',
    ],
    # Task 7 — 2/5
    [
        "**A) The club is considering the proposal. → The proposal is being considered by the club.**\n\n"
        "The club is considering the proposal becomes The proposal is being considered by the club. "
        "Continuous active flips to is/are being + past participle with the agent retained.\n\n"
        "**Tip:** Continuous passive = am/is/are being + past participle.\n\n"
        "So the statement holds: progressive meaning is preserved in the passive.",

        "**B) All hikers must carry a map. → A map must be carried by all hikers.**\n\n"
        "All hikers must carry a map flips to A map must be carried by all hikers. "
        "The obligation modal stays as must; force is unchanged, and the hikers remain the agent.\n\n"
        "So the statement holds: modal force and participants match across the arrow.",

        "**C) The delay was occurred during the morning rush.**\n\n"
        "Occur is intransitive, so was occurred is ungrammatical. "
        "Delays occur; they are not occurred by someone in this pattern. "
        "The morning-rush time phrase cannot license an illegal passive.\n\n"
        "**Trap:** Intransitives like occur, happen, and arrive often lure learners into was + past participle.\n\n"
        'So the statement is false: repair to "The delay occurred during the morning rush," or "The delay was caused…."',

        "**D) Mum postponed the picnic. → The picnic was postponed by Mum.**\n\n"
        "Mum postponed the picnic becomes The picnic was postponed by Mum. "
        "Regular participle postponed matches the active verb, and meaning is preserved.\n\n"
        "So the statement holds: the past simple active–passive pair is clean.",

        "**E) The pool filters are cleaned every Friday by the caretaker.**\n\n"
        "The pool filters are cleaned every Friday by the caretaker is present habitual passive with an explicit agent. "
        "Form and routine meaning both work for a standing Friday task.\n\n"
        "So the statement holds: present passive correctly marks the habitual cleaning.",
    ],
    # Task 8 — 2/5
    [
        "**A) The deposit will be paid on 15 March.**\n\n"
        "Will be paid is a correct future passive; the date adverbial on 15 March sits fine after it. "
        "The payer can stay unnamed without harming form.\n\n"
        "So the statement holds: will be + past participle with a date is grammatical.",

        "**B) IT locked the old tablets. → The old tablets were locked by IT.**\n\n"
        "IT locked the old tablets becomes The old tablets were locked by IT. "
        "Plural tablets take were, and the agent stays named.\n\n"
        "So the statement holds: plural agreement and agent are both right.",

        "**C) The complaint has been escalate to the landlord.**\n\n"
        "Has been escalate uses a base verb where the past participle belongs. "
        "Perfect passive needs has been escalated. "
        "To the landlord is fine; only escalate vs escalated is wrong.\n\n"
        "**Trap:** After been, exams expect a past participle — a bare base verb is a common slip.\n\n"
        'So the statement is false: repair to "The complaint has been escalated to the landlord."',

        "**D) The toast was delivered by a tired waiter.**\n\n"
        "The toast was delivered by a tired waiter is a clean past passive with the agent retained. "
        "Delivered is the right participle of deliver.\n\n"
        "So the statement holds: past passive with by-agent is well formed.",

        "**E) The school awarded the prize to a Year 9 pupil. → The prize was awarded to a Year 9 pupil by the school.**\n\n"
        "The school awarded the prize to a Year 9 pupil becomes The prize was awarded to a Year 9 pupil by the school. "
        "The prize is subject, the to-phrase stays, and by the school names the agent.\n\n"
        "**Tip:** Keep prepositional complements when you flip voice.\n\n"
        "So the statement holds: recipient phrase and agent both survive the flip.",
    ],
    # Task 9 — 3/5
    [
        "**A) The rumour was confirmed this morning. → The class president confirmed the rumour this morning, so we know the speaker.**\n\n"
        "Was confirmed this morning does not name the class president. "
        "The rewrite fabricates both the speaker and the claim that we therefore know who spoke. "
        "Agentless confirmation forbids inventing a named confirmer.\n\n"
        "**Trap:** Agentless was confirmed… often looks like an invitation to guess a plausible school figure — that guess still fails the meaning test.\n\n"
        'So the statement is false: keep "The rumour was confirmed this morning" without inventing an agent.',

        "**B) Staff uniforms are going to be washed next week.**\n\n"
        "Staff uniforms are going to be washed next week is a well-formed going-to future passive. "
        "Be sits before the participle washed, and next week frames a planned future.\n\n"
        "**Tip:** Insert be before the participle in going-to passives.\n\n"
        "So the statement holds: are going to be washed is the correct future shape.",

        "**C) The suitcase arrived damaged. → The suitcase was arrived damaged by the airline deliberately.**\n\n"
        "Arrive is intransitive, so was arrived is wrong, and deliberately invents intent the arrival event never stated. "
        "The suitcase arrived damaged already reports a result, not deliberate airline sabotage.\n\n"
        "**Trap:** Pairing was arrived with deliberately stacks an illegal intransitive passive and a fake motive.\n\n"
        'So the statement is false: keep "The suitcase arrived damaged," or say "The suitcase was damaged in transit."',

        "**D) Nothing further can be done until the rain stops. → The groundskeeper is refusing to do anything further on purpose.**\n\n"
        "Nothing further can be done until the rain stops is a neutral modal passive about possibility. "
        "Rewriting it as a groundskeeper refusing on purpose invents both an agent and motive. "
        "The rain sets a condition, not a human refusal.\n\n"
        "**Trap:** Turning can be done into is refusing… on purpose looks dramatic but changes force completely.\n\n"
        "So the statement is false: keep the modal passive; do not invent deliberate refusal.",

        "**E) The posters were update last night by the art club.**\n\n"
        "Were update uses a base verb after be. "
        "Passive needs were updated. "
        "The art club and last night are fine; only the participle is broken.\n\n"
        'So the statement is false: repair to "The posters were updated last night by the art club."',
    ],
    # Task 10 — 3/5
    [
        "**A) The organisers had already finalised the seating. → The seating had already been finalised by the organisers.**\n\n"
        "Had already finalised flips to had already been finalised by the organisers. "
        "Past perfect passive stacks been after had and keeps the agent.\n\n"
        "**Tip:** Perfect passive stacks been after had/has/have.\n\n"
        "So the statement holds: past perfect aspect and agent are preserved.",

        "**B) Access to the gym is restricted to members.**\n\n"
        "Access to the gym is restricted to members is a present passive stating a standing rule. "
        "The to-phrase keeps the limitation clear; no agent is required for a policy statement.\n\n"
        "So the statement holds: is restricted to… correctly encodes the membership limit.",

        "**C) The samples are currently taste by the judges.**\n\n"
        "Are currently taste uses a base verb. "
        "Progressive sense wants are currently being tasted (or are currently tasted in a habitual reading), never taste after are. "
        "The judges can stay, but the participle must be right.\n\n"
        "**Trap:** Currently + are often tempts a bare verb instead of being + past participle.\n\n"
        'So the statement is false: repair to "The samples are currently being tasted by the judges."',

        "**D) Our cousins invited us to the barbecue. → We were invited to the barbecue by our cousins.**\n\n"
        "Our cousins invited us to the barbecue becomes We were invited to the barbecue by our cousins. "
        "The recipient can be the passive subject, and the to-phrase stays.\n\n"
        "So the statement holds: invite as recipient passive keeps meaning intact.",

        "**E) The mouldy bread was thrown away immediately.**\n\n"
        "The mouldy bread was thrown away immediately is a clean agentless past passive focusing on the bread. "
        "Thrown is the irregular participle of throw, and immediately fits the finished past frame.\n\n"
        "So the statement holds: agentless was thrown away is grammatical.",
    ],
    # Task 11 — 3/5
    [
        "**A) The scores were announced by the process itself intentionally.**\n\n"
        "A process cannot intentionally announce scores. "
        "Both the agent and the intent word are wrong; by… itself intentionally is almost always a fail. "
        "Scores need a human or organisational announcer, not a reflexive process.\n\n"
        "**Trap:** Itself intentionally after an abstract by-agent is a near-miss that can look technical but collapses meaning.\n\n"
        "So the statement is false: repair to The scores were announced (by the organisers / by officials), without reflexive intent.",

        "**B) The guide will present the route on Tuesday. → The route will be presented by the guide on Tuesday.**\n\n"
        "The guide will present the route on Tuesday becomes The route will be presented by the guide on Tuesday. "
        "Object becomes subject, will be stays, and the time phrase is kept.\n\n"
        "So the statement holds: future active maps cleanly onto future passive.",

        "**C) Bikes should not be left in the hallway.**\n\n"
        "Bikes should not be left in the hallway is a modal passive prohibition. "
        "Negation sits with the modal: should not be + past participle, and no agent is required.\n\n"
        "**Tip:** Negation sits with the modal: should not be + past participle.\n\n"
        "So the statement holds: the prohibition form is intact.",

        "**D) The vacancy was filled last month. → We know exactly which neighbour filled the vacancy.**\n\n"
        "Was filled last month names no agent. "
        "We know exactly which neighbour filled the vacancy invents both a person and certainty. "
        "Agentless filling forbids precise neighbour-identification.\n\n"
        "**Trap:** Exactly which neighbour is a classic certainty upgrade on a hidden agent.\n\n"
        'So the statement is false: keep "The vacancy was filled last month" without naming a neighbour.',

        "**E) The translation is being check by a native speaker.**\n\n"
        "Is being check uses a base verb after being. "
        "Continuous passive needs is being checked. "
        "The native speaker can stay; only the participle fails.\n\n"
        'So the statement is false: repair to "The translation is being checked by a native speaker."',
    ],
    # Task 12 — 3/5
    [
        "**A) The passport application is being processed this week.**\n\n"
        "The passport application is being processed this week is present continuous passive without an agent, focusing on the ongoing process. "
        "This week frames a current stretch, which fits is being + past participle.\n\n"
        "So the statement holds: continuous passive correctly marks work in progress.",

        "**B) Security locked the gates at midnight. → The gates were locked at midnight by security.**\n\n"
        "Security locked the gates at midnight becomes The gates were locked at midnight by security. "
        "Meaning is preserved; the time adverbial can sit before the by-phrase.\n\n"
        "So the statement holds: time and agent both survive the voice flip.",

        "**C) Further tips can be found in the guidebook.**\n\n"
        "Further tips can be found in the guidebook is a modal passive typical of how-to notes. "
        "No need to invent who finds the tips; the guidebook is the location, not a fake agent.\n\n"
        "So the statement holds: agentless can be found is fair instructional English.",

        "**D) The internship offers have been accepted by both students.**\n\n"
        "The internship offers have been accepted by both students is present perfect passive with plural agreement and a clear by-agent. "
        "Both students stay named as doers.\n\n"
        "So the statement holds: have been accepted by both students is well formed.",

        "**E) The agenda was circulated to all attendees before noon.**\n\n"
        "The agenda was circulated to all attendees before noon keeps the recipient phrase to all attendees, which carries essential meaning. "
        "Before noon frames the finished past without needing a named circulator.\n\n"
        "So the statement holds: recipient to-phrase and past passive work together.",
    ],
    # Task 13 — 4/5
    [
        "**A) It is said that the ferry service stopped overnight.**\n\n"
        "It is said that the ferry service stopped overnight is a standard impersonal reporting passive. "
        "No speaker needs to be named; the hedge is intentional and exam-friendly.\n\n"
        "**Tip:** It is said/believed/expected that… hedges without naming a speaker.\n\n"
        "So the statement holds: impersonal reporting passive is well formed.",

        "**B) They gave the runners revised numbers. → Revised numbers were given to the runners.**\n\n"
        "They gave the runners revised numbers allows Revised numbers were given to the runners. "
        "Dropping vague they is fine; inventing a named VIP would not be. "
        "The to-phrase keeps the recipients clear.\n\n"
        "So the statement holds: omitting vague they after a double-object verb is allowed.",

        "**C) The fridge crashed. → The fridge was crashed by the update script on purpose.**\n\n"
        "The fridge crashed states an event. "
        "Adding by the update script on purpose invents both an agent and deliberate intent the original never stated. "
        "Crash here behaves like an intransitive event, not a sabotage claim.\n\n"
        "**Trap:** On purpose after a guessed software agent looks technical but still fabricates motive.\n\n"
        'So the statement is false: keep "The fridge crashed," or say it was damaged only if the source supplies a non-intentional cause.',

        "**D) A decision has yet to be reached on the picnic date.**\n\n"
        "A decision has yet to be reached on the picnic date embeds a perfect passive inside yet to be reached — formal and correct for unfinished decisions. "
        "The picnic date remains open, which the hedge marks clearly.\n\n"
        "**Tip:** has yet to be + past participle is a common hedge for unfinished decisions.\n\n"
        "So the statement holds: nested perfect passive correctly signals incompleteness.",

        "**E) The costumes will have been fitted before the play opens.**\n\n"
        "The costumes will have been fitted before the play opens is future perfect passive: will have been + past participle, with a clear deadline clause. "
        "Fitting will already be done when the play opens.\n\n"
        "**Tip:** Future perfect passive = will have been + past participle.\n\n"
        "So the statement holds: completion before a future deadline is marked correctly.",
    ],
    # Task 14 — 4/5
    [
        "**A) The scores were being finalised when the lights froze. → We know the junior scorer was finalising them alone.**\n\n"
        "Were being finalised when the lights froze still hides the agent. "
        "Claiming we know a junior scorer was finalising them alone invents identity and solitude the continuous passive never gave. "
        "The lights freeze is background, not a clue to who scored.\n\n"
        "**Trap:** Continuous agentless passives often invite named-alone inventiveness that still fails the meaning test.\n\n"
        "So the statement is false: leave the continuous passive without naming a scorer.",

        "**B) Nobody can be blamed for the weather delay. → The bus driver is to blame for the weather delay.**\n\n"
        "Nobody can be blamed for the weather delay directly contradicts naming the bus driver as blameworthy. "
        "Negation forbids that rewrite; weather delay is not a bus-driver fault in the source.\n\n"
        "**Trap:** Flipping nobody can be blamed into a named scapegoat is a near-miss that reverses polarity.\n\n"
        'So the statement is false: keep "Nobody can be blamed for the weather delay."',

        "**C) The manuscript got published without peer review. → The manuscript published without peer review by itself.**\n\n"
        "Even if get-passive is colloquially fine, by itself erases any external publisher and invents self-publication. "
        "Get-passive still implies an external process, not a manuscript acting alone.\n\n"
        "**Trap:** By itself after a get-passive looks like a tidy rewrite but deletes the external publishing process.\n\n"
        'So the statement is false: keep "The manuscript got published without peer review" (or "was published…"), without by itself.',

        "**D) Concerns have been raised about crowded platforms.**\n\n"
        "Concerns have been raised about crowded platforms is a standard present perfect passive, often kept agentless in everyday English. "
        "Form and tone are both sound for reporting ongoing worry.\n\n"
        "So the statement holds: agentless have been raised is fair.",

        "**E) The tokens are expired by the security protocol every night intentionally by the tokens themselves.**\n\n"
        "The line stacks contradictory agents and intent: the security protocol and the tokens themselves cannot both be the intentional doer. "
        "Form and meaning both collapse under the double by-phrase.\n\n"
        "**Trap:** Double by-agents plus intentionally is a deliberate near-miss that looks dense but is incoherent.\n\n"
        "So the statement is false: repair to The tokens are expired by the security protocol every night — one clear by-agent, no reflexive intentionality.",
    ],
    # Task 15 — 4/5
    [
        "**A) The roadblocks were lifted last week. → Last week saw the roadblocks lift themselves.**\n\n"
        "Roadblocks do not lift themselves. "
        "The reflexive rewrite is absurd; were lifted already states the correct passive. "
        "Last week saw… does not license self-acting roadblocks.\n\n"
        'So the statement is false: keep "The roadblocks were lifted last week," or name a real authority if known.',

        "**B) Fans expect a decision by Friday. → A decision is expected by Friday.**\n\n"
        "Fans expect a decision by Friday becomes A decision is expected by Friday. "
        "Here by Friday is a deadline, not a fake human agent, and the meaning still fits. "
        "Expecting a decision can surface as an impersonal is expected…\n\n"
        "**Tip:** by + time is not a by-agent; do not confuse the two.\n\n"
        "So the statement holds: by Friday marks a deadline, not a named doer.",

        "**C) The wiring diagram should have been attached to the handbook.**\n\n"
        "The wiring diagram should have been attached to the handbook is modal perfect passive for past criticism or missed duty: should have been + past participle. "
        "The attachment should already have happened relative to the handbook context.\n\n"
        "**Tip:** should have been + past participle for past criticism or missed duty.\n\n"
        "So the statement holds: modal perfect passive correctly marks the missed attachment.",

        "**D) The council owns the riverside path. → The riverside path is owned by the council.**\n\n"
        "The council owns the riverside path flips cleanly to The riverside path is owned by the council. "
        "Ownership passives are common when naming who holds something, and the council stays the owner.\n\n"
        "So the statement holds: ownership survives the voice change.",

        "**E) The samples were being store in the cold room overnight.**\n\n"
        "Were being store uses a base verb after being. "
        "Continuous passive needs were being stored. "
        "The cold room and overnight are fine; only the participle fails.\n\n"
        'So the statement is false: repair to "The samples were being stored in the cold room overnight."',
    ],
    # Task 16 — 4/5
    [
        "**A) The shortlist will be announced tomorrow. → Tomorrow the panel chair will announce the shortlist, and that is certain.**\n\n"
        "Will be announced tomorrow does not identify the panel chair or make that identity certain. "
        "Certainty claims about a hidden agent fail the meaning test. "
        "Tomorrow sets time, not who speaks.\n\n"
        "**Trap:** And that is certain after inventing a panel chair is a near-miss that upgrades a hedge into false knowledge.\n\n"
        'So the statement is false: keep "The shortlist will be announced tomorrow" without naming a chair.',

        "**B) Two seats have been reserved for the grandparents.**\n\n"
        "Two seats have been reserved for the grandparents is present perfect passive with a clear beneficiary for-phrase and plural agreement (have been). "
        "The grandparents are beneficiaries, not inventively blamed agents.\n\n"
        "So the statement holds: plural have been reserved with for-phrase is correct.",

        "**C) The bakery produces these loaves in Poland. → These loaves are produced in Poland.**\n\n"
        "The bakery produces these loaves in Poland can become These loaves are produced in Poland. "
        "Dropping the generic producer is allowed when place remains; inventing a celebrity baker would not be.\n\n"
        "**Tip:** Omitting a generic producer is fine; inventing a celebrity baker is not.\n\n"
        "So the statement holds: place-focused passive may omit a generic bakery.",

        "**D) The breach was reported anonymously. → A named neighbour reported the breach to take revenge.**\n\n"
        "Anonymously blocks naming a neighbour and inventing revenge. "
        "An anonymous passive forbids a named-agent active with motive. "
        "Those two facts cannot co-exist with anonymously.\n\n"
        "**Trap:** Named neighbour + revenge is a dramatic near-miss that directly contradicts anonymously.\n\n"
        'So the statement is false: keep "The breach was reported anonymously."',

        "**E) The forms need signing before the trip. → The forms need to be signed before the trip.**\n\n"
        "Need signing and need to be signed are both acceptable obligation passives here; the paraphrase keeps the same duty before the trip. "
        "British exam English routinely treats them as near-equivalents.\n\n"
        "**Tip:** need signing ≈ need to be signed in formal British usage.\n\n"
        "So the statement holds: the two obligation frames match in meaning.",
    ],
    # Task 17 — 5/5
    [
        "**A) Had the warning been heeded, the flood might have been avoided.**\n\n"
        "Had the warning been heeded and might have been avoided are both passive perfect shapes inside a conditional. "
        "Each layer still needs been + past participle, and both layers here are intact.\n\n"
        "**Tip:** Stacked passives in conditionals still need been + past participle each time.\n\n"
        "So the statement holds: both conditional passive layers are well formed.",

        "**B) They are repairing the path now. → The path is repaired now by them as we speak.**\n\n"
        "They are repairing the path now describes an action in progress. "
        "Is repaired now is simple passive and does not match as we speak; you need is being repaired. "
        "The progressive cue as we speak exposes the aspect mismatch.\n\n"
        "**Trap:** Simple is repaired for an as we speak progressive is a near-miss many learners miss.\n\n"
        'So the statement is false: repair to "The path is being repaired now by them as we speak."',

        "**C) The visitor was shown the garden before lunch.**\n\n"
        "The visitor was shown the garden before lunch is a double-object passive with the recipient as subject. "
        "Show/give/offer commonly allow this pattern without naming a fake second agent.\n\n"
        "**Tip:** Show, give, and offer commonly allow the recipient as passive subject.\n\n"
        "So the statement holds: recipient-subject passive is fair for show.",

        "**D) It was agreed that bedtime would remain unchanged for six months.**\n\n"
        "It was agreed that bedtime would remain unchanged for six months reports a decision without naming voters. "
        "Do not invent which relative agreed; the impersonal hedge is the point.\n\n"
        "So the statement holds: impersonal it-passive correctly hedges the decision.",

        "**E) The photos cannot be shared externally without permission.**\n\n"
        "The photos cannot be shared externally without permission is a modal passive prohibition. "
        "The without-phrase is part of the meaning and should stay with the modal passive.\n\n"
        "So the statement holds: cannot be shared… without permission keeps force and condition.",
    ],
    # Task 18 — 5/5
    [
        "**A) The motion was passed unanimously. → Every club member who opposed it still somehow passed it deliberately.**\n\n"
        "Unanimously already states the outcome. "
        "Inventing opposing members who somehow passed it deliberately contradicts the source and makes a paradoxical agent story. "
        "A unanimous pass cannot be rewritten as deliberate opposition-plus-passing.\n\n"
        "**Trap:** Somehow… deliberately after unanimously is a paradox dressed as explanation.\n\n"
        'So the statement is false: keep "The motion was passed unanimously."',

        "**B) Little progress has been made on the kitchen renovation. → The landlord personally stalled the kitchen renovation on purpose.**\n\n"
        "Little progress has been made on the kitchen renovation is agentless. "
        "Naming a landlord who personally stalled it on purpose invents both agent and motive. "
        "Slow progress is not evidence of deliberate stalling by a named person.\n\n"
        "**Trap:** Personally… on purpose upgrades an agentless hedge into fabricated blame.\n\n"
        "So the statement is false: leave the progress passive without fake blame.",

        "**C) The cookies were allowed to cool before icing. → The cookies allowed themselves to cool before icing.**\n\n"
        "Were allowed to cool implies an external controller. "
        "Allowed themselves invents reflexive agency the allow-passive does not support. "
        "Cookies do not grant themselves permission to cool.\n\n"
        "**Trap:** Reflexive allowed themselves after were allowed is a near-miss that deletes the external controller.\n\n"
        'So the statement is false: keep "The cookies were allowed to cool before icing."',

        "**D) The community centre based in Leeds oversees local youth clubs. → Local youth clubs are overseen by the community centre based in Leeds.**\n\n"
        "The community centre based in Leeds oversees local youth clubs becomes Local youth clubs are overseen by the community centre based in Leeds. "
        "The same centre remains the agent, Leeds detail included.\n\n"
        "**Tip:** Carry modifiers of the agent into the by-phrase when they identify which centre.\n\n"
        "So the statement holds: identifying modifiers travel with the agent into the by-phrase.",

        "**E) The password must changed every ninety days.**\n\n"
        "Must changed is missing be. "
        "Modal passives need must be changed. "
        "Every ninety days is fine; only the auxiliary is absent.\n\n"
        'So the statement is false: repair to "The password must be changed every ninety days."',
    ],
    # Task 19 — 5/5
    [
        "**A) Having been briefed by the nurse, the parents approved the treatment. → The parents were briefed by the nurse and then approved the treatment.**\n\n"
        "Having been briefed by the nurse unpacks fairly into The parents were briefed by the nurse and then approved the treatment. "
        "The same nurse remains the agent; nothing new is invented. "
        "The participial passive and finite paraphrase carry the same sequence.\n\n"
        "So the statement holds: the participial passive unpacks without fake agents.",

        "**B) The library books are to be returned within fourteen days.**\n\n"
        "The library books are to be returned within fourteen days uses be to + passive for scheduled obligation: are to be + past participle. "
        "Fourteen days frames a formal loan deadline.\n\n"
        "**Tip:** are to be + past participle is formal diary-style passive.\n\n"
        "So the statement holds: be-to passive correctly marks scheduled return.",

        "**C) What remains to be decided is the venue. → Someone has already decided the venue, and we know who.**\n\n"
        "What remains to be decided is the venue means the venue is still open. "
        "Claiming someone has already decided it — and that we know who — reverses the meaning. "
        "Remains to be decided signals incompleteness, not a finished secret decision.\n\n"
        "**Trap:** Already decided… and we know who is a near-miss that flips open → closed plus fake certainty.\n\n"
        'So the statement is false: keep "What remains to be decided is the venue."',

        "**D) The rare manuscript was being carefully restored when funding paused.**\n\n"
        "The rare manuscript was being carefully restored when funding paused is past continuous passive. "
        "The adverb carefully can sit between being and the participle without breaking form.\n\n"
        "**Tip:** Adverbs can sit between being and the participle.\n\n"
        "So the statement holds: continuous passive with mid-position adverb is well formed.",

        "**E) Under no circumstances should guest passwords be shared without encryption.**\n\n"
        "Under no circumstances should guest passwords be shared without encryption keeps the modal passive after inversion: should… be shared. "
        "Inversion does not remove be, and without encryption stays part of the rule.\n\n"
        "**Tip:** Inversion does not remove the passive be.\n\n"
        "So the statement holds: inverted modal passive remains grammatical.",
    ],
    # Task 20 — 5/5
    [
        "**A) No conclusions can be drawn from this data. → This data prevents anyone from drawing conclusions deliberately.**\n\n"
        "No conclusions can be drawn from this data is a neutral modal passive. "
        "Saying the data prevents anyone from drawing conclusions deliberately invents both agency and intent. "
        "The data is a source of limits on inference, not a wilful preventer.\n\n"
        "**Trap:** Deliberately after a prevention rewrite turns a hedge into fake purposeful agency.\n\n"
        'So the statement is false: keep "No conclusions can be drawn from this data."',

        "**B) The school newsletter is expected to be published before the open day.**\n\n"
        "The school newsletter is expected to be published before the open day nests two passives: is expected + to be published. "
        "Both layers are well formed for a formal forecast ahead of the open day.\n\n"
        "**Tip:** Expect + to-infinitive passive is common in formal forecasts.\n\n"
        "So the statement holds: nested expectation passives are intact.",

        "**C) They had the boilers replaced overnight. → The boilers were replaced overnight.**\n\n"
        "They had the boilers replaced overnight pairs with The boilers were replaced overnight. "
        "Causative have + object + past participle often aligns with a simple passive of the object without inventing who did the work.\n\n"
        "**Tip:** Causative get/have + object + past participle often aligns with a simple passive of the object.\n\n"
        "So the statement holds: causative have… replaced and were replaced match in result.",

        "**D) It is believed the mix-up was caused by a booking error. → We know which clerk caused the mix-up and that the clerk acted deliberately.**\n\n"
        "It is believed the mix-up was caused by a booking error is a hedge. "
        "Naming a clerk and alleging deliberate action fabricates both agent and intent. "
        "A booking error is not a known wilful clerk.\n\n"
        "**Trap:** Clerk + deliberately after a belief hedge is a classic certainty-and-motive upgrade.\n\n"
        "So the statement is false: keep the belief passive without certainty-plus-motive claims.",

        "**E) Were the rules not to be enforced, the queue would lengthen. → If the rules were not enforced, the queue would lengthen.**\n\n"
        "Were the rules not to be enforced paraphrases cleanly as If the rules were not enforced…. "
        "Formal inversion still encodes the same passive enforcement meaning and the same queue result.\n\n"
        "**Tip:** Formal inversion still encodes the same passive obligation or enforcement meaning.\n\n"
        "So the statement holds: inverted and if-clause paraphrases match in force.",
    ],
]


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20
    assert len(REWRITES) == 20

    for task, expls in zip(data["tasks"], REWRITES, strict=True):
        assert len(expls) == 5, task["id"]
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        letters = "ABCDE"
        for i, (stmt, expl) in enumerate(zip(task["statements"], expls)):
            prefix = f"**{letters[i]}) {stmt}**"
            assert expl.startswith(prefix), (task["id"], i, expl[:100], prefix[:100])
            assert "So the statement" in expl, (task["id"], i)
            if task["answer_key"][i]:
                assert "So the statement holds" in expl, (task["id"], i)
            else:
                assert "So the statement is false" in expl, (task["id"], i)
        task["tactical_explanations"] = expls

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote", PATH)
    print("tasks", len(data["tasks"]), "explanations", sum(len(t["tactical_explanations"]) for t in data["tasks"]))


if __name__ == "__main__":
    main()
