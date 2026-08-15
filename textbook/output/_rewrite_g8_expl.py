# -*- coding: utf-8 -*-
"""Rewrite g.8 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.8.json")


def hdr(letter: str, stmt: str) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    return f"**{letter}) {s}**"


def build(letter: str, stmt: str, body: str, tip_or_trap: str | None, closing: str) -> str:
    parts = [hdr(letter, stmt), "", body.strip()]
    if tip_or_trap:
        parts.extend(["", tip_or_trap.strip()])
    parts.extend(["", closing.strip()])
    return "\n".join(parts) + "\n"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of 5 (body, tip_or_trap|None, closing)
    rewrites: list[list[tuple[str, str | None, str]]] = [
        # --- Task 1 (1/5) ---
        [
            (
                "After a past reporting verb like said, present simple normally moves one step back to past simple. "
                "Here \"starts\" becomes \"started,\" which is exactly the expected backshift for a factual present in the original line. "
                "The report keeps the same content about the match time; only the tense moves with the reporting frame.",
                None,
                "So the statement holds: past said correctly pulls starts back to started.",
            ),
            (
                "Embedded wh-questions keep statement order — subject before the verb — so you need \"where the bus stop was,\" not \"where was the bus stop.\" "
                "The version with \"where was\" is still direct-question inversion after asked. "
                "Put the subject first inside the reported clause: He asked where the bus stop was.",
                "**Trap:** Leaving \"where was\" after asked looks like a real question, but reports must flatten to statement order.",
                "So the statement is false: repair to \"He asked where the bus stop was.\"",
            ),
            (
                "\"Will\" normally backshifts to \"would\" after past said, and \"tomorrow\" usually becomes \"the next day\" (or \"the following day\"). "
                "Leaving both unshifted keeps the report locked in the original speaker's present. "
                "The full repair is: They said they would bake bread the next day.",
                None,
                "So the statement is false: repair to \"They said they would bake bread the next day.\"",
            ),
            (
                "Yes/no questions report with if or whether plus statement order, and past simple often deepens to past perfect. "
                "\"Asked if I had locked the bike\" does both jobs cleanly for \"Did you lock…?\" "
                "The subject comes before the verb, and the lock action sits one step further back than the asking.",
                "**Tip:** Pattern: asked if/whether + subject + had + past participle.",
                "So the statement holds: if + past perfect correctly reports the yes/no question.",
            ),
            (
                "Time markers shift with the tense. Once you backshift \"finished\" to \"had finished,\" \"yesterday\" should become \"the day before\" (or \"the previous day\"), not stay as yesterday. "
                "The report already moved the verb, so the leftover deictic is what breaks the line. "
                "Repair: He said he had finished the essay the day before.",
                None,
                "So the statement is false: repair to \"He said he had finished the essay the day before.\"",
            ),
        ],
        # --- Task 2 (1/5) ---
        [
            (
                "Ability \"can\" typically backshifts to \"could\" after a past reporting verb. "
                "Leaving \"can\" unchanged freezes the ability in the reporter's present instead of the reported past. "
                "Repair: She said she could swim across the lake.",
                None,
                "So the statement is false: repair to \"She said she could swim across the lake.\"",
            ),
            (
                "The wh-word stays, the tense backshifts (does open → opened), and the clause keeps subject–verb statement order. "
                "\"He asked when the museum opened\" is the clean pattern. "
                "You never reinstate \"when does\" or \"when did\" after asked.",
                None,
                "So the statement holds: asked when + subject + past verb is the correct report.",
            ),
            (
                "Obligation \"must\" often becomes \"had to\" in past reports, and \"today\" shifts to \"that day.\" "
                "Both changes appear here, so the line is a solid report of \"We must pack today.\" "
                "Present obligation markers usually reshape once the reporting frame is past.",
                "**Tip:** must/today in direct speech → had to / that day in the report.",
                "So the statement holds: had to and that day both match the past frame.",
            ),
            (
                "Present perfect backshifts cleanly to past perfect after said: have watered → had watered. "
                "The report places the watering firmly before the speaking moment. "
                "No extra inversion or deictic leftover is required here.",
                None,
                "So the statement holds: have watered correctly became had watered.",
            ),
            (
                "Reported yes/no questions need if or whether plus statement order — not inverted \"are the tickets ready.\" "
                "That shape is still a direct question after asked. "
                "Repair: She asked whether the tickets were ready (tense also backshifts are → were).",
                "**Trap:** Bare \"are the tickets…\" after asked looks unfinished as a report — always insert if/whether and flatten the order.",
                "So the statement is false: repair to \"She asked whether the tickets were ready.\"",
            ),
        ],
        # --- Task 3 (1/5) ---
        [
            (
                "Place and time markers usually shift with a past report. "
                "Keeping \"here\" and \"tomorrow\" leaves the choir rehearsal anchored in the original speaker's location and day even though said pushes the frame back. "
                "Repair: He said the choir rehearsed there the following day.",
                None,
                "So the statement is false: repair to \"He said the choir rehearsed there the following day.\"",
            ),
            (
                "Embedded why-questions need statement order and usually past-perfect backshift for a finished past event. "
                "\"Why did the neighbour leave\" still looks like a direct question with do-support. "
                "Repair: She asked why the neighbour had left.",
                "**Trap:** Leftover did-inversion after asked is a classic near-miss that still reads like a live question.",
                "So the statement is false: repair to \"She asked why the neighbour had left.\"",
            ),
            (
                "Present continuous backshifts to past continuous, and \"now\" becomes \"then.\" "
                "\"He said he was reading the novel then\" is the textbook mapping for \"I am reading… now.\" "
                "Both the aspect and the time word move with the reporting verb.",
                None,
                "So the statement holds: was reading and then correctly replace am reading and now.",
            ),
            (
                "Negative commands in reports use told/asked + object + not + to-infinitive. "
                "Leaving \"do not feed\" keeps an imperative shape that does not belong after told. "
                "Repair: She told me not to feed the stray cats.",
                None,
                "So the statement is false: repair to \"She told me not to feed the stray cats.\"",
            ),
            (
                "\"May\" for possibility often becomes \"might,\" and \"next weekend\" should become \"the following weekend.\" "
                "Leaving both unshifted under-reports the past frame. "
                "Repair: They said they might hike the following weekend.",
                None,
                "So the statement is false: repair to \"They said they might hike the following weekend.\"",
            ),
        ],
        # --- Task 4 (1/5) ---
        [
            (
                "Polite requests report as asked + object + to-infinitive. "
                "\"Please text me the address\" becomes \"He asked me to text him the address,\" with the pronoun also shifting to the new viewpoint. "
                "The imperative disappears; the to-clause carries the instruction.",
                None,
                "So the statement holds: asked me to + object pronoun is the clean request report.",
            ),
            (
                "Subject questions keep who as the subject of the reported clause; the tense still backshifts. "
                "\"She asked who had watered the garden\" is statement-like and correctly shifted from \"Who watered…?\" "
                "There is no do-support to delete because who is already the subject.",
                None,
                "So the statement holds: who stays as subject while the verb moves to past perfect.",
            ),
            (
                "Future perfect \"will have finished\" backshifts to \"would have finished\" after past said. "
                "The \"by Friday\" deadline can stay when it is still a named calendar point relative to the report. "
                "Only the will piece moves to would inside the perfect stack.",
                None,
                "So the statement holds: would have finished is the right backshift of will have finished.",
            ),
            (
                "\"This\" often becomes \"that\" after a past report, with present → past: needs → needed. "
                "\"She said that recipe needed more salt\" bundles both shifts cleanly. "
                "Demonstratives move with the reporting viewpoint just like here/now.",
                None,
                "So the statement holds: this→that and needs→needed travel together.",
            ),
            (
                "Yes/no perfect questions need if or whether plus statement order — not \"had I seen…\" inversion. "
                "That shape still looks like a direct question after asked. "
                "Repair: He asked whether I had seen his keys.",
                "**Trap:** \"Had I…\" after asked looks sophisticated but is still inverted order.",
                "So the statement is false: repair to \"He asked whether I had seen his keys.\"",
            ),
        ],
        # --- Task 5 (2/5) ---
        [
            (
                "\"Tell\" needs a personal object — tell someone that… — so bare \"Mia told that…\" is ungrammatical. "
                "Without an object, use \"said that…\" instead. "
                "Repair: Mia said that the soup was too salty (or Mia told us that…).",
                "**Trap:** \"Told that\" looks parallel to \"said that,\" but tell always wants a person as object.",
                "So the statement is false: repair to \"Mia said that the soup was too salty\" (or \"told us that…\").",
            ),
            (
                "Present perfect → past perfect, \"here\" → \"there,\" and statement order after how long all appear together. "
                "\"She asked how long I had lived there\" is a complete report of the original question. "
                "Bundle tense, place, and order rather than fixing only one layer.",
                "**Tip:** how long + subject + had + past participle; here → there.",
                "So the statement holds: tense, place, and order all shifted together.",
            ),
            (
                "Formal \"shall\" for future often reports as \"should\" (or sometimes \"would\") after past said. "
                "\"He said they should meet at noon\" treats shall like a future marker that backshifts. "
                "The subject also shifts from we to they with the reporting viewpoint.",
                None,
                "So the statement holds: shall backshifts to should and we becomes they.",
            ),
            (
                "Past simple → past perfect and \"last night\" → \"the night before\" work as a pair. "
                "\"She said she had seen the fox the night before\" places the sighting before the speaking and rewrites the relative night. "
                "Relative past time phrases shift just like yesterday/tomorrow.",
                None,
                "So the statement holds: had seen paired with the night before is the full shift.",
            ),
            (
                "Modal yes/no reports need if or whether + subject + could, not \"could I join…\" inversion. "
                "The inverted modal is still direct-question order after asked. "
                "Repair: He asked if I could join the hike.",
                "**Trap:** Backshifting can→could is not enough if the clause stays inverted.",
                "So the statement is false: repair to \"He asked if I could join the hike.\"",
            ),
        ],
        # --- Task 6 (2/5) ---
        [
            (
                "Imperatives report as tell/ask + object + to-infinitive. "
                "\"Bring a spare towel\" becomes \"She told us to bring a spare towel\" — the command verb drops and the to-clause carries the instruction. "
                "The addressee appears as the object of told.",
                None,
                "So the statement holds: told us to bring is the standard command report.",
            ),
            (
                "Possibility \"may\" commonly becomes \"might\" in past reports. "
                "\"He said he might be late\" is the safe mapping for \"I may be late.\" "
                "No further change is required beyond that modal step.",
                None,
                "So the statement holds: may correctly backshifts to might.",
            ),
            (
                "Wh-word + statement order + present perfect → past perfect give \"She asked where they had put the map.\" "
                "There is no auxiliary before the subject. "
                "The put-action sits before the asking, which is why past perfect fits.",
                None,
                "So the statement holds: where they had put keeps order and tense in line.",
            ),
            (
                "Past continuous often becomes past perfect continuous after a past reporting verb when you need a further step back: were discussing → had been discussing. "
                "That form keeps the ongoing sense while lining the discussion up before he said. "
                "The subject also shifts from we to they with the reporting viewpoint.",
                None,
                "So the statement holds: had been discussing deepens the past continuous appropriately.",
            ),
            (
                "Present simple for a near arrangement can report as past continuous, with \"tonight\" → \"that night.\" "
                "\"She said she was leaving for Lisbon that night\" is a natural report of a planned departure. "
                "Timetabled or arranged futures often surface as was/were + -ing in reports.",
                "**Tip:** Arranged present → was/were + -ing; tonight → that night.",
                "So the statement holds: was leaving and that night report the arranged departure.",
            ),
        ],
        # --- Task 7 (2/5) ---
        [
            (
                "Deduction \"must have\" often stays unchanged because it already refers to a past conclusion. "
                "\"He said he must have left his scarf at the café\" keeps the logical guess intact under said. "
                "Logical deduction with must have need not backshift further.",
                "**Tip:** Leave must have alone when it marks past deduction.",
                "So the statement holds: must have for deduction rightly stays put.",
            ),
            (
                "Yes/no with will needs if or whether + would + subject, not \"would the library renew…\" inversion. "
                "That order is still a direct question after asked. "
                "Repair: She asked whether the library would renew the card.",
                "**Trap:** Changing will→would while keeping inversion is a frequent near-miss.",
                "So the statement is false: repair to \"She asked whether the library would renew the card.\"",
            ),
            (
                "\"These\" → \"those\" and present continuous → past continuous: \"He said those clouds were gathering.\" "
                "Demonstratives and tense move together with the reporting viewpoint. "
                "The gathering is reported as ongoing relative to the past speaking moment.",
                None,
                "So the statement holds: those and were gathering both match the past report.",
            ),
            (
                "\"Used to\" already marks past habit and normally stays as used to after said. "
                "No further backshift is required, and inventing \"had used to\" would sound wrong. "
                "The habit meaning is already past-oriented, so the form can survive the report unchanged.",
                "**Tip:** used to typically does not change after said.",
                "So the statement holds: used to for past habit stays used to.",
            ),
            (
                "Negative reminders use not + to-infinitive after remind/tell. "
                "\"He reminded me not to forget the tickets\" mirrors \"told me not to…\" for \"Don't forget…\" "
                "The imperative becomes a to-clause headed by not.",
                None,
                "So the statement holds: reminded me not to correctly reports the negative command.",
            ),
        ],
        # --- Task 8 (2/5) ---
        [
            (
                "Keep statement order after asked — \"why we were delaying,\" not \"why were we delaying.\" "
                "Reinverting the auxiliary before the subject leaves a direct-question shape inside the report. "
                "Repair: She asked why we were delaying the trip.",
                "**Trap:** were after why still looks like a live question even though the tense has shifted.",
                "So the statement is false: repair to \"She asked why we were delaying the trip.\"",
            ),
            (
                "\"Ought to\" typically remains ought to in reported speech. "
                "It is already modal-like and usually does not change form under said. "
                "\"He said he ought to call his sister\" is therefore a clean report of the original obligation.",
                None,
                "So the statement holds: ought to survives reporting unchanged.",
            ),
            (
                "\"Ago\" normally becomes \"before\" or \"earlier\" in past reports; keeping \"two days ago\" clashes with the shifted frame even when the tense has moved to past perfect. "
                "The verb shift alone is not enough while the deictic stays speaker-centred. "
                "Repair: They said they had arrived two days before.",
                "**Trap:** Past perfect with leftover \"ago\" looks almost finished — the time word still has to move.",
                "So the statement is false: repair to \"They said they had arrived two days before.\"",
            ),
            (
                "Yes/no with if, this→that, and present→past all apply together: \"He asked if that was the final draft.\" "
                "The line bundles the three expected shifts without leftover inversion. "
                "Treat if, demonstrative, and tense as one package.",
                None,
                "So the statement holds: if + that + was covers order, deixis, and tense.",
            ),
            (
                "\"Will\" backshifts to \"would\" and \"today\" to \"that day\" after past said. "
                "\"She said she would phone me later that day\" moves both the future marker and the same-day time word. "
                "Future markers and calendar \"today\" words both move with the reporting frame.",
                None,
                "So the statement holds: would and that day both shifted with the past report.",
            ),
        ],
        # --- Task 9 (3/5) ---
        [
            (
                "\"Need not\" for lack of obligation often stays need not (or becomes did not need to). "
                "Leaving it unchanged after said is acceptable exam English for \"We need not renew… yet.\" "
                "Bare \"needed not\" would be wrong; unchanged need not or didn't need to both work.",
                "**Tip:** Prefer unchanged need not or did not need to — never needed not.",
                "So the statement holds: need not may remain after past said.",
            ),
            (
                "Wh-clause with statement order and present→past: \"He asked what time the ferry left.\" "
                "The timetable question loses do-support and keeps the subject before the verb. "
                "That is the standard pattern for \"What time does…?\"",
                None,
                "So the statement holds: what time the ferry left is the correct embedded form.",
            ),
            (
                "Present perfect continuous backshifts to past perfect continuous: have been waiting → had been waiting. "
                "The since Monday starting point can stay as a named anchor. "
                "The continuous span sits before she said, which is why past perfect continuous fits.",
                None,
                "So the statement holds: had been waiting is the right perfect-continuous backshift.",
            ),
            (
                "\"The day after tomorrow\" can paraphrase as \"in two days' time\" or \"two days later.\" "
                "Distant relative time phrases are often reworded rather than left literal after told. "
                "\"They told us to come back in two days' time\" is a natural advanced report of Come back the day after tomorrow.",
                "**Tip:** Far deixis is often paraphrased in polished reports.",
                "So the statement holds: in two days' time is an allowed rewrite of the day after tomorrow.",
            ),
            (
                "Can→could and this→that appear in one tidy report: \"He said he couldn't approve that design.\" "
                "Modal ability and demonstratives usually shift together after past said. "
                "Negation rides with could as couldn't.",
                None,
                "So the statement holds: couldn't and that design both match the past frame.",
            ),
        ],
        # --- Task 10 (3/5) ---
        [
            (
                "Object questions drop do-support and use statement order — \"who I had invited,\" not \"who did I invite.\" "
                "After asked, there is no \"did\" before the subject. "
                "Repair: She asked who I had invited.",
                "**Trap:** Keeping did after asked looks like a careful tense report but is still direct-question scaffolding.",
                "So the statement is false: repair to \"She asked who I had invited.\"",
            ),
            (
                "Past simple → past perfect and \"last year\" → \"the year before\" work as a pair. "
                "\"He said the cherries had ripened the year before\" rewrites both the tense and the calendar phrase. "
                "Calendar \"last…\" phrases become \"the … before / previous …\"",
                None,
                "So the statement holds: had ripened plus the year before completes the shift.",
            ),
            (
                "Offer or suggestion \"Shall I…?\" reports as if/whether + should. "
                "\"She asked if she should postpone the picnic\" is the standard mapping. "
                "Shall's offer meaning becomes should inside the if-clause with statement order.",
                "**Tip:** Shall I…? → asked if + subject + should…",
                "So the statement holds: if + should correctly reports the offer/suggestion.",
            ),
            (
                "\"Be going to\" backshifts to was/were going to after past said. "
                "\"They said they were going to plant lavender\" treats the going-to future like other present forms that shift one step. "
                "The planned planting stays intentional under the past report.",
                None,
                "So the statement holds: were going to is the expected backshift of are going to.",
            ),
            (
                "\"Won't\" should become \"wouldn't\" after a past reporting verb. "
                "Leaving won't unshifted keeps the refusal in the reporter's present future instead of the reported past. "
                "Repair: He said he wouldn't leave until Friday.",
                "**Trap:** Until Friday looks fixed, so it's easy to forget that won't still needs would.",
                "So the statement is false: repair to \"He said he wouldn't leave until Friday.\"",
            ),
        ],
        # --- Task 11 (3/5) ---
        [
            (
                "When the situation is still true, some writers keep present tense after a past report. "
                "\"…reported that water freezes at zero\" is acceptable for an ongoing scientific fact. "
                "Backshift is usual but not compulsory for permanently or still-valid truths.",
                "**Tip:** Still-true facts may keep present after said.",
                "So the statement holds: present freezes is allowed for an eternal fact.",
            ),
            (
                "Polite \"Could you…?\" can report as asked + if + could + statement order. "
                "\"She asked me if I could pass the salt\" keeps could inside a well-formed if-clause. "
                "Ability/request could often stays could rather than being forced further back.",
                None,
                "So the statement holds: asked if + could with statement order is the right request report.",
            ),
            (
                "Over-shifting both verbs to past perfect can distort simultaneous past events. "
                "Keep the time-clause past simple if it marks the interrupting moment: prefer \"had been cooking when the power failed.\" "
                "Repair: He said he had been cooking when the power failed.",
                "**Trap:** Doubling past perfect on a when-clause looks thorough but often misrepresents simultaneous timing.",
                "So the statement is false: repair to \"He said he had been cooking when the power failed.\"",
            ),
            (
                "Statement order is needed — \"whose umbrella this was,\" not \"whose umbrella was this.\" "
                "Possessive wh-questions still lose inversion in reports. "
                "Repair: He asked whose umbrella this was.",
                "**Trap:** Whose does not excuse leaving was before this after asked.",
                "So the statement is false: repair to \"He asked whose umbrella this was.\"",
            ),
            (
                "\"Needn't have\" for unnecessary past action commonly remains needn't have. "
                "Perfect modal forms for past comments often stay put under said. "
                "\"She said they needn't have brought extra chairs\" keeps the \"unnecessary past\" meaning intact.",
                "**Tip:** Needn't have usually does not backshift further.",
                "So the statement holds: needn't have for past unused necessity stays unchanged.",
            ),
        ],
        # --- Task 12 (3/5) ---
        [
            (
                "\"Let's…\" suggestions often report as suggested + gerund (or suggested that…). "
                "\"She suggested postponing the rehearsal\" is a natural mapping for \"Let's postpone…\" "
                "Suggest takes a gerund or a that-clause, not a bare to-infinitive without that.",
                "**Tip:** Let's… → suggested + -ing / suggested that…",
                "So the statement holds: suggested postponing correctly reports the let's-suggestion.",
            ),
            (
                "Wish-clauses already sit in a past-like form; reporting them usually keeps wished + past form. "
                "\"He said he wished he knew the answer\" does not invent a further unnatural backshift inside the wish. "
                "Do not force past perfect inside wish unless meaning truly requires it.",
                None,
                "So the statement holds: wished he knew keeps the wish-clause without overshifting.",
            ),
            (
                "Past perfect yes/no questions report with if/whether + had + past participle and statement order. "
                "The inversion from direct \"Had you finished…?\" disappears after asked. "
                "\"She asked whether I had finished before the storm\" is exactly that pattern.",
                None,
                "So the statement holds: whether + subject + had finished removes the inversion.",
            ),
            (
                "Past simple → past perfect plus here→there and last→previous: \"They said they had thrived there the previous spring.\" "
                "Stack place and calendar shifts with the tense change. "
                "All three layers move together under they said.",
                "**Tip:** here/last spring → there/the previous spring with past perfect.",
                "So the statement holds: had thrived, there, and the previous spring all shifted.",
            ),
            (
                "\"Had better\" for advice typically remains had better after said. "
                "It does not become would better, and inventing a further backshift would break the idiom. "
                "\"He said I had better rest\" keeps the advice force of the original line.",
                "**Tip:** had better stays had better — never would better.",
                "So the statement holds: had better for advice survives reporting unchanged.",
            ),
        ],
        # --- Task 13 (4/5) ---
        [
            (
                "After would rather, keep the base verb — \"would rather stay,\" not \"would rather stayed.\" "
                "The past form after rather breaks the preference construction. "
                "Repair: She said she would rather stay indoors.",
                "**Trap:** Backshifting the verb after rather looks consistent with other past reports, but would rather wants a bare infinitive.",
                "So the statement is false: repair to \"She said she would rather stay indoors.\"",
            ),
            (
                "Will→would inside a wh-clause with statement order: \"He asked when we would publish the photos.\" "
                "The future marker backshifts without reinverting the auxiliary. "
                "Pattern: asked when + subject + would + verb.",
                None,
                "So the statement holds: when we would publish keeps order and future backshift.",
            ),
            (
                "\"Might have\" for past possibility usually stays might have. "
                "Perfect modals of speculation rarely need further change under said. "
                "\"He said he might have misread the map\" keeps the uncertain past reading intact.",
                "**Tip:** Might have typically does not backshift further.",
                "So the statement holds: might have for past possibility stays put.",
            ),
            (
                "Imperative plus embedded where-clause: use a to-infinitive outside and backshift inside the where-clause. "
                "\"Security told us to stay where we were\" handles both layers. "
                "Stay becomes to stay; are → were inside the location clause.",
                None,
                "So the statement holds: to stay where we were shifts both command and inner clause.",
            ),
            (
                "\"Yesterday\" should become \"the day before\" once the reporting verb is past, even when the tense has already moved to past perfect. "
                "If and had called are fine; the leftover deictic is the fault. "
                "Repair: She asked if the nurse had called me the day before.",
                "**Trap:** A fully shifted tense can hide an unmoved yesterday.",
                "So the statement is false: repair to \"She asked if the nurse had called me the day before.\"",
            ),
        ],
        # --- Task 14 (4/5) ---
        [
            (
                "Formal mandative subjunctive after insist often stays be + past participle in the report. "
                "\"She insisted that the lyrics be rewritten\" preserves the base-form subjunctive from the direct line. "
                "Reporting insist that… can keep that formal be rather than forcing were/should be.",
                "**Tip:** Mandative be can survive after insisted that.",
                "So the statement holds: be rewritten keeps the mandative subjunctive.",
            ),
            (
                "Object how-much questions drop did and backshift to past perfect with statement order. "
                "\"He asked how much the festival had cost\" removes do-support and deepens the tense. "
                "Pattern: asked how much + subject + had + past participle.",
                None,
                "So the statement holds: how much the festival had cost is the clean object-question report.",
            ),
            (
                "Future continuous will be + -ing → would be + -ing, and next → the following: "
                "\"They said they would be launching the following Monday.\" "
                "Progressive futures backshift the will piece only while the launching stays continuous.",
                None,
                "So the statement holds: would be launching and the following Monday both shift correctly.",
            ),
            (
                "Past simple negation becomes past perfect in a past report when the earlier speech act is prior. "
                "\"She claimed she had never said that\" places the denial further back than the claiming. "
                "Had never said lines up the original refusal before her claim.",
                None,
                "So the statement holds: had never said correctly marks the earlier speech act.",
            ),
            (
                "Present continuous being → past continuous being after if: \"He asked if I was being serious.\" "
                "Statement order and tense shift both apply. "
                "\"Are you being…?\" loses inversion and becomes if + subject + was being.",
                None,
                "So the statement holds: if I was being serious is the right continuous yes/no report.",
            ),
        ],
        # --- Task 15 (4/5) ---
        [
            (
                "Conditional perfect forms already sit far back and typically stay would have / had + past participle when reported. "
                "\"She said she would have called if she had known\" needs no invented extra layer. "
                "Do not invent a further stack beyond would have + past perfect.",
                "**Tip:** Leave remote conditionals as would have / had + past participle.",
                "So the statement holds: the remote conditional stays would have / had known.",
            ),
            (
                "No do-support belongs in the embedded clause — \"which shelf held the spices,\" not \"which shelf did hold…\" "
                "Wh-determiners keep statement order without did. "
                "Repair: He asked which shelf held the spices.",
                "**Trap:** Inserting did after which looks like careful backshift but reinjects question scaffolding.",
                "So the statement is false: repair to \"He asked which shelf held the spices.\"",
            ),
            (
                "\"The day after tomorrow\" → \"two days later\" (or \"in two days\") is a natural time rewrite. "
                "Far deixis is often paraphrased in polished reports. "
                "\"They said the offer expired two days later\" keeps the relative delay without a literal day-after-tomorrow.",
                None,
                "So the statement holds: two days later is an acceptable paraphrase of the day after tomorrow.",
            ),
            (
                "Obligation must in questions often becomes had to after asked if. "
                "\"She asked if they had to disclose the allergy\" is the usual mapping for \"Must we…?\" "
                "The yes/no frame takes if, and must softens to had to under the past report.",
                "**Tip:** Must we…? → asked if + subject + had to…",
                "So the statement holds: if + had to correctly reports the must-question.",
            ),
            (
                "Formal \"be to\" for scheduled duty backshifts was/were to. "
                "\"He said he was to present at nine\" is the expected report of \"I am to present…\" "
                "Am/is/are to → was/were to after past said.",
                None,
                "So the statement holds: was to present is the standard be-to schedule backshift.",
            ),
        ],
        # --- Task 16 (4/5) ---
        [
            (
                "\"Needn't\" can report as didn't need to (or needn't) after a past frame. "
                "\"He told me I didn't need to worry about the weather\" adds the personal object after told and shifts the lack-of-obligation form. "
                "Either didn't need to or unchanged needn't is acceptable; the object after told is required.",
                None,
                "So the statement holds: told + object + didn't need to is a valid report of needn't.",
            ),
            (
                "Even with whereabouts, keep statement order — \"whereabouts the camping stove was,\" not \"whereabouts was the camping stove.\" "
                "Any wh-word still bans auxiliary-before-subject after asked. "
                "Repair: She asked whereabouts the camping stove was.",
                "**Trap:** Unusual wh-words like whereabouts do not license leftover inversion.",
                "So the statement is false: repair to \"She asked whereabouts the camping stove was.\"",
            ),
            (
                "\"Have got to\" obligation backshifts to had got to, and now→then. "
                "\"He said he had got to leave then\" treats have got to like must for backshift purposes. "
                "Both the modal-like obligation and the time word move.",
                None,
                "So the statement holds: had got to and then both match the past report.",
            ),
            (
                "Shall have + past participle (future perfect) → would have + past participle. "
                "\"They said they would have completed the mural by June\" is the standard past-report form. "
                "Future perfect always yields would have in ordinary past reports.",
                None,
                "So the statement holds: would have completed is the right future-perfect backshift.",
            ),
            (
                "Why + must → why + had to with statement order. "
                "\"She asked why the window had to stay open\" loses must-inversion and usually becomes had to. "
                "Obligation questions follow the same wh statement-order rules as other reports.",
                None,
                "So the statement holds: why the window had to stay open flattens and backshifts correctly.",
            ),
        ],
        # --- Task 17 (5/5) ---
        [
            (
                "Passive past yes/no → whether + past perfect passive + last→previous: "
                "\"She asked whether the paths had been cleared the previous winter.\" "
                "Voice stays passive; only tense and time words move, placing the clearing before the asking.",
                None,
                "So the statement holds: whether + past perfect passive with the previous winter is correct.",
            ),
            (
                "Would prefer + object + not to stays structurally; pronouns and this→that adjust. "
                "\"She said she would prefer us not to spoil that yet\" keeps the preference pattern under said. "
                "Preference constructions largely keep their skeleton when reported.",
                None,
                "So the statement holds: would prefer us not to spoil that keeps the frame while shifting deixis.",
            ),
            (
                "Rare dare questions can report as if + dared + bare infinitive. "
                "\"He asked if he dared ask for a refund\" turns modal-like dare into a past lexical dare inside if. "
                "That is acceptable advanced reporting for \"Dare I ask…?\"",
                "**Tip:** Dare I…? → asked if + subject + dared + bare infinitive.",
                "So the statement holds: if he dared ask is an acceptable advanced report.",
            ),
            (
                "Future perfect continuous will have been + -ing → would have been + -ing. "
                "\"She said the team would have been rehearsing for six hours by then\" changes only will to would; the rest of the stack stays. "
                "By then can remain because it is already relative.",
                None,
                "So the statement holds: only will→would moves inside the long perfect-continuous stack.",
            ),
            (
                "\"What if…\" hypotheticals often keep what if and simply backshift the following verb. "
                "\"He asked what if we delayed the concert\" is natural exam English for \"What if we delay…?\" "
                "You do not need to force a full if/whether paraphrase here.",
                None,
                "So the statement holds: what if with delayed is a natural hypothetical report.",
            ),
        ],
        # --- Task 18 (5/5) ---
        [
            (
                "Negative inversion can survive inside the reported clause after said, with pronoun and tense already matching. "
                "\"She said seldom had they seen such fog\" keeps the inverted rhetorical shape. "
                "Reporting rare inverted rhetoric may keep that shape when the rest aligns.",
                "**Tip:** Flashy inversion is optional but grammatical if tenses and pronouns fit.",
                "So the statement holds: seldom had they seen may keep its inverted rhetoric.",
            ),
            (
                "\"Was to have + past participle\" (unfulfilled plan) typically remains was to have…. "
                "This past-scheduled perfect form needs no further shift under said. "
                "\"He said he was to have signed before noon\" keeps the missed-plan meaning intact.",
                None,
                "So the statement holds: was to have signed stays unchanged as an unfulfilled plan.",
            ),
            (
                "Embedded object questions need statement order — \"who we should notify first,\" not \"who should we notify first.\" "
                "Modal should still follows the subject after asked. "
                "Repair: She asked who we should notify first.",
                "**Trap:** Modal should does not license question order once the clause is embedded after asked.",
                "So the statement is false: repair to \"She asked who we should notify first.\"",
            ),
            (
                "Future will → would, and tomorrow morning → the next morning. "
                "\"He said the bread would still be warm the next morning\" moves both pieces after past said. "
                "Will and time words travel together.",
                None,
                "So the statement holds: would and the next morning both shifted with the report.",
            ),
            (
                "Yes/no might needs if or whether + subject + might, not \"might the shop extend…\" "
                "Bare modal inversion is still a direct question after asked. "
                "Repair: They asked whether the shop might extend its hours.",
                "**Trap:** Leaving might before the subject looks modal-aware but skips if/whether entirely.",
                "So the statement is false: repair to \"They asked whether the shop might extend its hours.\"",
            ),
        ],
        # --- Task 19 (5/5) ---
        [
            (
                "Would rather + past clause for preference about someone else keeps that past shape; this→that adjusts. "
                "\"She said she'd rather I didn't spoil that\" does not force past perfect inside the rather-clause. "
                "Preferential rather-clauses are not automatically deepened further.",
                None,
                "So the statement holds: she'd rather I didn't spoil that keeps the preference clause intact.",
            ),
            (
                "Informal how come reports with statement order and optional past perfect for a prior failure. "
                "\"He asked how come the cake had collapsed\" keeps how come and deepens the collapse. "
                "Pattern: asked how come + subject + (had) + past participle.",
                None,
                "So the statement holds: how come the cake had collapsed is a valid informal report.",
            ),
            (
                "\"Used not to\" (or didn't use to) for past habit can remain used not to. "
                "Habitual used-to patterns are already past-oriented, so further backshift is unnecessary. "
                "\"They said they used not to skip breakfast\" keeps the old habit meaning.",
                None,
                "So the statement holds: used not to can stay as-is under past said.",
            ),
            (
                "Future perfect in a yes/no question → if + would have, and the time-clause present→past. "
                "\"She asked if I would have finished by the time she called\" shifts both the main future perfect and the by-the-time clause. "
                "Both layers move together under past asked.",
                "**Tip:** will you have… by the time I…? → if + would have… by the time + past.",
                "So the statement holds: would have finished and she called both backshift together.",
            ),
            (
                "Suppose-ideas often become suggested that + base (or past) form in formal reports. "
                "\"He suggested that we freeze the leftovers\" is exam-friendly for \"Suppose we freeze…\" "
                "Mandative or tentative freeze after suggested that is acceptable.",
                None,
                "So the statement holds: suggested that we freeze correctly maps the suppose-idea.",
            ),
        ],
        # --- Task 20 (5/5) ---
        [
            (
                "Correlative not only…but also can keep inversion after said while tenses sit in the past. "
                "\"She said not only was the path steep, but the wind was fierce\" is optional but grammatical when pronouns and tenses align. "
                "Reporting flashy inversion is allowed if the rest of the clause matches the past frame.",
                None,
                "So the statement holds: not-only inversion may survive when tenses already fit.",
            ),
            (
                "Needn't have for unnecessary past action stays needn't have. "
                "Perfect absence-of-need does not become hadn't need under said. "
                "\"He said he needn't have packed every jumper\" keeps the \"did it but didn't need to\" meaning.",
                "**Tip:** Needn't have stays; do not invent hadn't need.",
                "So the statement holds: needn't have for unused past necessity remains unchanged.",
            ),
            (
                "Statement order is required — \"where the chairs should sit,\" not \"where should the chairs sit.\" "
                "Modal should follows the subject in embedded wh-questions. "
                "Repair: She asked where the chairs should sit.",
                "**Trap:** Where + should still needs subject-before-modal after asked.",
                "So the statement is false: repair to \"She asked where the chairs should sit.\"",
            ),
            (
                "Next→the following and will have been + -ing → would have been + -ing. "
                "\"They said that by the following March they would have been leasing the studio for a decade\" changes only will→would in the long stack. "
                "Long future-perfect-continuous stacks shift the will piece and the next calendar word.",
                None,
                "So the statement holds: the following March and would have been leasing both shifted correctly.",
            ),
            (
                "Yes/no past continuous needs if or whether + statement order — \"whether anyone was monitoring…\" — never bare \"was anyone…\" after asked. "
                "Leaving then unchanged does not excuse the missing if/whether frame. "
                "Repair: She asked whether anyone was monitoring the feed then.",
                "**Trap:** A matching then can hide bare was-anyone inversion after asked.",
                "So the statement is false: repair to \"She asked whether anyone was monitoring the feed then.\"",
            ),
        ],
    ]

    for ti, task in enumerate(data["tasks"]):
        stmts = task["statements"]
        keys = task["answer_key"]
        bundle = rewrites[ti]
        assert len(bundle) == 5 == len(stmts) == len(keys)
        new_explanations = []
        for i, (body, tip, closing) in enumerate(bundle):
            letter = "ABCDE"[i]
            new_explanations.append(build(letter, stmts[i], body, tip, closing))
        task["tactical_explanations"] = new_explanations

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Rewrote tactical_explanations for {len(data['tasks'])} tasks in {PATH.name}")


if __name__ == "__main__":
    main()
