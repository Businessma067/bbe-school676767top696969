# -*- coding: utf-8 -*-
"""Rewrite g.19 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.19.json")
LETTERS = "ABCDE"


def build(stmt: str, body: str, tip: str | None = None, trap: str | None = None, close: str = "") -> str:
    s = stmt.rstrip()
    # keep exact statement punctuation as in data
    out = f"**{s}**\n\n{body.strip()}"
    if tip:
        out += f"\n\n**Tip:** {tip.strip()}"
    if trap:
        out += f"\n\n**Trap:** {trap.strip()}"
    out += f"\n\n{close.strip()}\n"
    return out


def item(letter: str, stmt: str, body: str, close: str, tip: str | None = None, trap: str | None = None) -> str:
    # header must be **A) <exact statement>.** — statement already includes terminal punctuation
    header_stmt = f"{letter}) {stmt}"
    return build(header_stmt, body, tip=tip, trap=trap, close=close)


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each entry: list of 5 dicts with body, close, optional tip/trap
    # Tip and Trap are mutually exclusive per style preference when both would restate — use one max usually.
    all_expl: list[list[str]] = []

    # ========== Task 1 ==========
    t = data["tasks"][0]
    s, k = t["statements"], t["answer_key"]
    all_expl.append([
        item(
            "A", s[0],
            "After wonder, the embedded clause must keep statement order: where + subject + verb. "
            "Here that gives where he is, which matches the pattern exactly. "
            "The outer I wonder already asks; the inner clause does not need question order of its own.",
            "So the statement holds: the embed reads as a calm statement after wonder.",
        ),
        item(
            "B", s[1],
            "The string where is he inverts the verb and subject, which belongs only in a direct question. "
            "After I wonder you need where he is. "
            "Cover I wonder and you immediately hear a stand-alone quiz question — that is the scar.",
            'So the statement is false: repair to "I wonder where he is."',
            trap="where is he looks like ordinary spoken curiosity, but it is direct-question order jammed into an embed.",
        ),
        item(
            "C", s[2],
            "The polite frame Could you tell me… embeds what time the train leaves with subject before verb. "
            "No does appears inside the clause, which is exactly what an indirect question wants. "
            "The outer Could you… supplies the interrogative force for the whole sentence.",
            "So the statement holds: subject–verb order inside the what-time clause is correct.",
        ),
        item(
            "D", s[3],
            "does the train leave is direct-question word order jammed into an indirect question. "
            "Any do/does/did that jumps before the subject after tell me is almost always wrong. "
            "The frame already asks; the embed should stay flat.",
            'So the statement is false: repair to "what time the train leaves."',
            trap="Adding does after tell me feels like extra clarity, but it recreates a direct question.",
        ),
        item(
            "E", s[4],
            "whether correctly opens a yes/no embed and keeps statement order: the bakery was still open. "
            "There is no were-fronting after whether. "
            "Yes/no embeds follow the same calm subject–verb rule as wh-embeds.",
            "So the statement holds: whether + subject + verb is intact.",
        ),
    ])

    # ========== Task 2 ==========
    t = data["tasks"][1]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "if embeds a yes/no clause with normal order: the library has opened yet. "
            "has stays after the library, not before it. "
            "The outer Do you know… is already the direct question; the inner clause stays flat.",
            "So the statement holds: if + subject + auxiliary is correct.",
        ),
        item(
            "B", s[1],
            "if has the library… wrongly inverts the auxiliary into the embedded clause. "
            "Keep if the library has…. "
            "Treat any has/is/will sitting right after if as a red flag.",
            'So the statement is false: repair to "if the library has opened yet."',
            trap="Auxiliary fronting after if copies a yes/no question and looks almost right in exams.",
        ),
        item(
            "C", s[2],
            "why the soup burned is statement order after explain; no auxiliary is needed. "
            "The past verb burned already carries tense, so there is nowhere for did to go. "
            "Explain why… invites a reason clause, not a second question.",
            "So the statement holds: why + subject + past verb is the embed pattern.",
        ),
        item(
            "D", s[3],
            "why did the soup burn mirrors a direct question. "
            "The embedding verb already carries the interrogative force, so drop did. "
            "If you can strip the outer Please explain and still have a complete quiz question, the embed is inverted.",
            'So the statement is false: repair to "why the soup burned."',
            trap="did-support after why is the classic classroom leftover inside embeds.",
        ),
        item(
            "E", s[4],
            "which route was safer keeps subject–verb order inside the embedded choice. "
            "route is the subject of was; nothing is fronted. "
            "which + noun + verb is the calm pattern you want.",
            "So the statement holds: the which-clause reads like ordinary statement order.",
        ),
    ])

    # ========== Task 3 ==========
    t = data["tasks"][2]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "After The question is, how the team will respond uses statement order: subject team before will. "
            "The noun-phrase frame does not license inversion. "
            "Read it aloud without rising question intonation inside the how-clause — it should sound like news.",
            "So the statement holds: how + subject + modal is correct inside the frame.",
        ),
        item(
            "B", s[1],
            "how will the team respond? is a direct question glued onto The question is. "
            "You need subject, then modal: how the team will respond. "
            "The trailing question mark is another giveaway that someone forgot the clause was embedded.",
            'So the statement is false: repair to "how the team will respond."',
            trap="Modal inversion after how looks like a tidy question mark fix, but embeds forbid it.",
        ),
        item(
            "C", s[2],
            "what is the subject of caused, so no do-support is required or allowed. "
            "Subject wh-clauses already have their actor in the wh-word. "
            "what caused the blackout is the whole story.",
            "So the statement holds: subject what needs no did.",
        ),
        item(
            "D", s[3],
            "what did cause forces unnecessary do-support into an embedded subject question. "
            "Use what caused, not what did cause. "
            "Save did for object questions that need tense support in direct speech — not for subject who/what embeds.",
            'So the statement is false: repair to "what caused the blackout."',
            trap="did after subject what feels emphatic or 'complete,' but it is wrong in this embed.",
        ),
        item(
            "E", s[4],
            "whether were the tickets… inverts were and the subject after whether. "
            "whether never takes the yes/no flip that stand-alone Were the tickets…? uses. "
            "Slide were back after tickets.",
            'So the statement is false: repair to "whether the tickets were still valid."',
            trap="were-fronting after whether is a near-miss copy of a direct yes/no question.",
        ),
    ])

    # ========== Task 4 ==========
    t = data["tasks"][3]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "Extra pronoun it after was breaks the clause; which option was safer is already complete. "
            "Never park a dummy it after the verb in an embedded which-clause. "
            "The option is the subject — you do not need a second subject.",
            'So the statement is false: repair to "which option was safer."',
            trap="Adding it after was feels like filling a slot, but the which-phrase already filled the subject.",
        ),
        item(
            "B", s[1],
            "when the guests arrive keeps subject–verb order after I'd like to know. "
            "Softeners do not change the embedded word-order rule. "
            "arrive sits after guests, exactly where a statement puts it.",
            "So the statement holds: when + subject + verb is intact.",
        ),
        item(
            "C", s[2],
            "when do the guests arrive inserts do-support as if the clause were a direct question. "
            "The outer I'd like to know already asks; the inner clause should not. "
            "Delete do and keep statement order.",
            'So the statement is false: repair to "when the guests arrive."',
            trap="do after when is a plausible softener leftover from classroom drills.",
        ),
        item(
            "D", s[3],
            "where the spare keys are kept is passive statement order inside a polite question. "
            "are stays after the subject keys. "
            "Passives still obey the same subject-before-finite-verb rule.",
            "So the statement holds: where + subject + are kept is correct.",
        ),
        item(
            "E", s[4],
            "where are the spare keys… flips are before the subject inside the embed. "
            "where + subject + are/is is the pattern; where + are + subject is the scar. "
            "The softener Can you remind me does not license that flip.",
            'So the statement is false: repair to "where the spare keys are kept."',
            trap="Be-fronting after where is the most common location-embed trap.",
        ),
    ])

    # ========== Task 5 ==========
    t = data["tasks"][4]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "who is the subject of had locked, so statement order is natural and correct. "
            "Nobody could say… merely frames a subject question. "
            "Subject who/what never invert with the verb.",
            "So the statement holds: subject who + had locked needs no flip.",
        ),
        item(
            "B", s[1],
            "who had the gate been… forces awkward inversion and a stranded by that belongs in a rewritten object question. "
            "Prefer who had locked… or the formal by whom the gate had been locked. "
            "If the embed starts shoving auxiliaries past the subject just to save a passive, rewrite instead.",
            'So the statement is false: prefer "who had locked the gate."',
            trap="Passive who-embeds often look formal while quietly breaking subject–auxiliary order.",
        ),
        item(
            "C", s[2],
            "whether the courier can arrive… keeps modal can after the subject. "
            "That is the textbook whether + subject + modal + verb pattern. "
            "The outer We need to establish… does not license a yes/no flip inside.",
            "So the statement holds: can sits after courier, not before.",
        ),
        item(
            "D", s[3],
            "whether can the courier… is direct yes/no inversion after whether. "
            "Never put the modal before the subject in an embedded clause. "
            "Slide can back after courier.",
            'So the statement is false: repair to "whether the courier can arrive by noon."',
            trap="Modal fronting after whether copies Can the courier…? almost exactly.",
        ),
        item(
            "E", s[4],
            "how much the tickets will cost is statement order after Tell me. "
            "will stays after tickets, not before how much. "
            "Degree how much/how many phrases behave like other wh-embeds.",
            "So the statement holds: how much + noun phrase + will + verb is correct.",
        ),
    ])

    # ========== Task 6 ==========
    t = data["tasks"][5]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "how much will the tickets cost inverts will and the subject after Tell me. "
            "The same how much phrase is fine with statement order: how much the tickets will cost. "
            "That contrast is intentional across these tasks.",
            'So the statement is false: repair to "how much the tickets will cost."',
            trap="will-fronting after how much is a near-miss of the Direct How much will…? shape.",
        ),
        item(
            "B", s[1],
            "how long the delay lasted keeps statement order after say. "
            "lasted is a plain past verb after its subject; no auxiliary is waiting to front. "
            "Duration how long-clauses follow the same calm pattern as why-clauses.",
            "So the statement holds: how long + subject + past is intact.",
        ),
        item(
            "C", s[2],
            "how long did the delay last smuggles do-support into the embed. "
            "If the clause would be a perfect stand-alone question, it is too inverted for this frame. "
            "Delete did and keep the past verb after the subject.",
            'So the statement is false: repair to "how long the delay lasted."',
            trap="did after how long feels natural from oral drills, but embeds ban it here.",
        ),
        item(
            "D", s[3],
            "what the school intended… is an object-wh clause with subject before verb. "
            "school sits before intended; what is the object of intended. "
            "After asked, keep what + subject + verb.",
            "So the statement holds: object what still wants statement order inside.",
        ),
        item(
            "E", s[4],
            "what did the school intend… is a direct question sitting inside asked. "
            "Drop did and keep intended after school. "
            "Object what often tempts learners into full question order — resist it in embeds.",
            'So the statement is false: repair to "what the school intended to do next."',
            trap="Object what + did is a very plausible direct-question transfer.",
        ),
    ])

    # ========== Task 7 ==========
    t = data["tasks"][6]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "where I put my passport is statement order after remember. "
            "I is the subject; put is the past verb — nothing is inverted. "
            "Memory verbs still take embedded statement order.",
            "So the statement holds: where + subject + past is correct.",
        ),
        item(
            "B", s[1],
            "where did I put… is direct-question do-support inside an embedded clause. "
            "can't remember does not license a second, inverted question. "
            "Repair to where I put….",
            'So the statement is false: repair to "where I put my passport."',
            trap="did after where is the default oral memory-question shape learners paste into embeds.",
        ),
        item(
            "C", s[2],
            "whether the museum opens… keeps opens after the subject. "
            "No does appears, and none is needed. "
            "Perfect for a yes/no fact-check after find out.",
            "So the statement holds: whether + subject + verb is clean.",
        ),
        item(
            "D", s[3],
            "whether does the museum open… invents do-support after whether. "
            "does belongs in Does the museum open…? as a stand-alone question, not here. "
            "Use whether the museum opens….",
            'So the statement is false: repair to "whether the museum opens on Mondays."',
            trap="does after whether looks like careful tense marking but recreates a direct question.",
        ),
        item(
            "E", s[4],
            "why everyone was whispering keeps was after the subject. "
            "wonder why… wants a reason clause, not a flipped be-question. "
            "The progressive was whispering stays intact after everyone.",
            "So the statement holds: why + subject + was is the embed pattern.",
        ),
    ])

    # ========== Task 8 ==========
    t = data["tasks"][7]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "why was everyone… inverts was before the subject after wondered. "
            "The twin with why everyone was whispering is the correct shape. "
            "wonder why… never takes be-fronting inside the reason clause.",
            'So the statement is false: repair to "why everyone was whispering."',
            trap="Be-inversion after why is a classic wonder-clause near-miss.",
        ),
        item(
            "B", s[1],
            "which bus you are taking keeps you before are. "
            "which + noun + subject + verb is the embedded choice pattern. "
            "Let me know simply softens the request; it does not invert the clause.",
            "So the statement holds: which + noun + subject + verb is intact.",
        ),
        item(
            "C", s[2],
            "which bus are you taking flips are before you inside the embed. "
            "If you can hear Are you taking…? after stripping the frame, the item is false. "
            "Repair to which bus you are taking.",
            'So the statement is false: repair to "which bus you are taking."',
            trap="are-fronting after which + noun copies the Direct Which bus are you…? drill.",
        ),
        item(
            "D", s[3],
            "who broke the window is a clean subject question with no do-support. "
            "who is the agent; broke is the past verb. "
            "Subject who + past verb needs no did.",
            "So the statement holds: subject who stays simple.",
        ),
        item(
            "E", s[4],
            "who did break adds unnecessary emphatic or wrong do to a subject question. "
            "Emphatic did can appear in speech for contrast, but it is not the neutral embed pattern tested here. "
            "Use who broke, not who did break.",
            'So the statement is false: repair to "who broke the window."',
            trap="Emphatic did after subject who looks confident and still fails the exam pattern.",
        ),
    ])

    # ========== Task 9 (3/5) ==========
    t = data["tasks"][8]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "how often she practises… keeps subject–verb order after curious. "
            "Frequency phrases do not change the embedded rule. "
            "practises sits after she, as in ordinary prose.",
            "So the statement holds: how often + subject + verb is correct.",
            tip="Frequency wh-phrases still take statement order.",
        ),
        item(
            "B", s[1],
            "how often does she practise… inserts do-support as in a direct question. "
            "I'm curious already softens the ask; does is leftover from classroom drills. "
            "Repair to how often she practises….",
            'So the statement is false: repair to "how often she practises the piano."',
            trap="does after how often is a near-miss of How often does she…?",
        ),
        item(
            "C", s[2],
            "where the nearest pharmacy is places is after the subject noun phrase. "
            "That is the classic location embed. "
            "Can anyone say… is the outer question; the where-clause stays flat.",
            "So the statement holds: where + noun phrase + is is intact.",
        ),
        item(
            "D", s[3],
            "where is the nearest pharmacy flips is before the subject inside say. "
            "This is the same signature contrast you meet with wonder where… throughout the topic. "
            "Repair to where the nearest pharmacy is.",
            'So the statement is false: repair to "where the nearest pharmacy is."',
            trap="is-fronting after where remains the signature location trap at every difficulty.",
        ),
        item(
            "E", s[4],
            "if we had packed… is a yes/no embed with statement order. "
            "had stays after we; the past perfect is intact. "
            "if/whether + subject + verb — never invert.",
            "So the statement holds: if + subject + had packed is correct.",
        ),
    ])

    # ========== Task 10 (3/5) ==========
    t = data["tasks"][9]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "if had we packed… inverts had before we after asked. "
            "The true twin if we had packed… shows the correct order. "
            "Auxiliaries do not front after if.",
            'So the statement is false: repair to "if we had packed enough water."',
            trap="had-fronting after if is a close twin of Had we packed…?",
        ),
        item(
            "B", s[1],
            "how many people will show up keeps will after the subject people. "
            "how many + noun + will + verb is the calm degree pattern. "
            "Nobody knows… frames it without turning it into a direct question.",
            "So the statement holds: will sits after people, not before how many.",
        ),
        item(
            "C", s[2],
            "Extra will at the end is garbled; the clause is already complete after show up. "
            "Stop at how many people will show up. "
            "A trailing echo of will usually means someone rewrote the clause twice and forgot to delete.",
            'So the statement is false: drop the final "will."',
            # soft garbage — no Trap label
        ),
        item(
            "D", s[3],
            "whether the oven has preheated keeps has after the subject. "
            "whether + subject + auxiliary + participle is the perfect yes/no embed. "
            "Please check softens the request without inverting the clause.",
            "So the statement holds: has stays after oven.",
        ),
        item(
            "E", s[4],
            "whether has the oven… flips has before the subject. "
            "Same scar as if had we… — auxiliaries do not front after whether/if. "
            "Repair to whether the oven has….",
            'So the statement is false: repair to "whether the oven has preheated."',
            trap="has-fronting after whether is a textbook near-miss yes/no embed error.",
        ),
    ])

    # ========== Task 11 (3/5) ==========
    t = data["tasks"][10]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "how the bridge had been built keeps passive statement order after explained. "
            "had stays after bridge; the passive stack been built follows. "
            "Passive embeds still place the first auxiliary after the subject.",
            "So the statement holds: how + subject + had been built is correct.",
            tip="Passive embeds still place had after the subject.",
        ),
        item(
            "B", s[1],
            "how had the bridge been… inverts had into direct-question order. "
            "Explained how… does not invite a quiz-show flip of the auxiliary. "
            "Repair to how the bridge had been built.",
            'So the statement is false: repair to "how the bridge had been built."',
            trap="Passive stacks tempt had-fronting that looks especially 'complete' in exams.",
        ),
        item(
            "C", s[2],
            "whose jacket this is keeps this before is. "
            "whose + noun + subject + be is the ownership embed. "
            "find out frames the question without fronting is.",
            "So the statement holds: whose + noun + subject + be is intact.",
            tip="whose + noun + subject + be.",
        ),
        item(
            "D", s[3],
            "whose is this jacket flips is before this inside find out. "
            "Moving whose alone and fronting be is the classroom direct-question habit. "
            "Repair to whose jacket this is.",
            'So the statement is false: repair to "whose jacket this is."',
            trap="whose is this… looks polished and still breaks embed order.",
        ),
        item(
            "E", s[4],
            "when the concert starts is statement order after mention; the outer Did anyone… is the only direct question. "
            "Outer inversion does not license inner inversion. "
            "starts sits after concert, as a fact report would.",
            "So the statement holds: the embedded when-clause stays flat.",
            tip="Outer inversion does not license inner inversion.",
        ),
    ])

    # ========== Task 12 (3/5) ==========
    t = data["tasks"][11]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "when does the concert start inserts do-support inside the embedded clause. "
            "Did anyone mention… already asked; the embed should not ask again. "
            "Repair to when the concert starts.",
            'So the statement is false: repair to "when the concert starts."',
            trap="does inside when after a direct Did anyone… is a double-ask near-miss.",
        ),
        item(
            "B", s[1],
            "what the noise is coming from keeps is after the subject noise. "
            "Object what + subject + verb (+ stranded preposition) is the modern embed. "
            "work out only introduces the clause; it does not invert it.",
            "So the statement holds: stranded from does not force is-fronting.",
            tip="Object what + subject + verb (+ stranded preposition).",
        ),
        item(
            "C", s[2],
            "what is the noise coming from flips is before the subject inside work out. "
            "The stranded from is fine; the fronted is is not. "
            "Repair to what the noise is coming from.",
            'So the statement is false: repair to "what the noise is coming from."',
            trap="Stranded prepositions often co-travel with illegal is-fronting in learner English.",
        ),
        item(
            "D", s[3],
            "whether he would join… keeps would after the subject. "
            "whether + subject + modal + verb is the standard yes/no embed with a modal. "
            "refused to say frames it without flipping would.",
            "So the statement holds: would sits after he.",
        ),
        item(
            "E", s[4],
            "whether would he join… is modal inversion after whether. "
            "would before he is the direct Would he join…? shape wearing an embed costume. "
            "Repair to whether he would join….",
            'So the statement is false: repair to "whether he would join us later."',
            trap="would-fronting after whether is a high-yield exam scar.",
        ),
    ])

    # ========== Task 13 (4/5) ==========
    t = data["tasks"][12]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "which neighbour complained first is a subject which-clause with no do-support. "
            "which neighbour is the agent of complained. "
            "Subject which + noun + past verb needs no did.",
            "So the statement holds: subject which stays simple.",
            tip="Subject which + noun + past verb — no did.",
        ),
        item(
            "B", s[1],
            "which neighbour did complain adds fake do to a subject question. "
            "did here is not needed for tense and is not the neutral written pattern. "
            "Use which neighbour complained….",
            'So the statement is false: repair to "which neighbour complained first."',
            trap="Fake did after subject which looks emphatic and almost grown-up.",
        ),
        item(
            "C", s[2],
            "how far the campsite is… keeps is after the subject. "
            "Degree how far/how tall phrases behave like other wh-embeds. "
            "Could you clarify… softens without fronting be.",
            "So the statement holds: how far + subject + be is correct.",
            tip="how far/how tall + subject + be.",
        ),
        item(
            "D", s[3],
            "how far is the campsite… inverts is before the subject after clarify. "
            "The distance question tempts direct order; keep the campsite before is. "
            "Repair to how far the campsite is….",
            'So the statement is false: repair to "how far the campsite is from here."',
            trap="Degree how far often triggers Direct How far is…? order inside soft frames.",
        ),
        item(
            "E", s[4],
            "who would captain… keeps would after subject who. "
            "who is the subject; would captain is the modal verb phrase. "
            "Subject who + modal + verb — no inversion.",
            "So the statement holds: who + would + verb is intact.",
            tip="Subject who + modal + verb — no inversion.",
        ),
    ])

    # ========== Task 14 (4/5) ==========
    t = data["tasks"][13]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "who would the side be captained by… forces awkward inversion; prefer who would captain… "
            "or by whom the side would be captained. "
            "Avoid inverting inside a passive who-embed just to strand by. "
            "The previous true who would captain… is the better sibling.",
            'So the statement is false: prefer "who would captain the side on Saturday."',
            trap="Inverted passive who-embeds look formal while quietly failing word order.",
        ),
        item(
            "B", s[1],
            "whether the Wi-Fi password has changed keeps has after the subject inside a long polite frame. "
            "I'd appreciate it if you could tell me… is still just packaging. "
            "Long softeners take statement order in the embed.",
            "So the statement holds: has stays after password.",
            tip="Long softeners still take statement order in the embed.",
        ),
        item(
            "C", s[2],
            "whether has the Wi-Fi password… flips has before the subject. "
            "Password length and tech topic do not change the word-order rule. "
            "Repair to whether the Wi-Fi password has….",
            'So the statement is false: repair to "whether the Wi-Fi password has changed."',
            trap="has-fronting after whether survives even inside long polite packaging.",
        ),
        item(
            "D", s[3],
            "how the recipe went is statement order after remember. "
            "recipe is the subject; went is the past verb. "
            "how + subject + past — no did.",
            "So the statement holds: how the recipe went is clean.",
        ),
        item(
            "E", s[4],
            "how did the recipe go inserts do-support into the embed. "
            "If you can ask How did the recipe go? alone, you have reinvented a direct question. "
            "Repair to how the recipe went.",
            'So the statement is false: repair to "how the recipe went."',
            trap="how did… is the usual manner/story scar after remember/ask.",
        ),
    ])

    # ========== Task 15 (4/5) ==========
    t = data["tasks"][14]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "whether the supplier can meet… keeps can after the subject even after depends on. "
            "Preposition + whether still takes statement order. "
            "The economic topic does not change the grammar.",
            "So the statement holds: can sits after supplier.",
            tip="Preposition + whether still takes statement order.",
        ),
        item(
            "B", s[1],
            "whether can the supplier… is modal inversion after whether. "
            "can before supplier is Direct Can the supplier…? with a formal hat on. "
            "Repair to whether the supplier can….",
            'So the statement is false: repair to "whether the supplier can meet the deadline."',
            trap="Modal fronting after whether under a formal noun subject looks especially exam-like.",
        ),
        item(
            "C", s[2],
            "whom she should invite keeps she before should. "
            "Object whom + subject + modal + verb is the formal object pattern. "
            "decide whom… embeds that pattern without flipping should.",
            "So the statement holds: whom + subject + should is intact.",
            tip="Object whom + subject + modal + verb.",
        ),
        item(
            "D", s[3],
            "whom should she invite flips should before she inside decide. "
            "Formal whom does not revive direct-question order. "
            "Repair to whom she should invite.",
            'So the statement is false: repair to "whom she should invite first."',
            trap="Formal whom often smuggles Should she…? order into the embed.",
        ),
        item(
            "E", s[4],
            "what made the engine stall is a subject what-clause with no do-support. "
            "what is the cause; made is the past verb. "
            "what + past verb when what is the subject.",
            "So the statement holds: subject what made… needs no did.",
            tip="what + past verb when what is the subject.",
        ),
    ])

    # ========== Task 16 (4/5) ==========
    t = data["tasks"][15]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "what did make… adds unnecessary do to a subject question. "
            "The prior true Tell us what made… is your template. "
            "Use what made, not what did make.",
            'So the statement is false: repair to "what made the engine stall."',
            trap="did after subject what feels like careful tense but is the wrong twin.",
        ),
        item(
            "B", s[1],
            "how the app works offline keeps works after the subject after unsure of. "
            "Preposition + how still takes statement order. "
            "offline is just an adjunct; it does not move words.",
            "So the statement holds: how + subject + verb after of is correct.",
            tip="Preposition + how still takes statement order.",
        ),
        item(
            "C", s[2],
            "how does the app work… inserts do-support inside the embed. "
            "unsure of how… is not the same as asking How does…? aloud. "
            "Repair to how the app works….",
            'So the statement is false: repair to "how the app works offline."',
            trap="does after how under unsure of is a polished near-miss.",
        ),
        item(
            "D", s[3],
            "to whom the parcel should be delivered keeps should after the subject in a formal prepositional wh-clause. "
            "to whom + subject + modal + verb is the careful written pattern. "
            "Passive be delivered does not change the subject-first rule.",
            "So the statement holds: should stays after parcel.",
            tip="to whom + subject + modal + verb.",
        ),
        item(
            "E", s[4],
            "to whom should the parcel… inverts should before the subject. "
            "Formal register is not a license for modal fronting. "
            "Repair to to whom the parcel should be….",
            'So the statement is false: repair to "to whom the parcel should be delivered."',
            trap="Formal to whom often unlocks illegal should-fronting in learner writing.",
        ),
    ])

    # ========== Task 17 (5/5) ==========
    t = data["tasks"][16]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "under what conditions the yeast activates keeps the subject before the verb after a prepositional wh-opener. "
            "yeast is the subject; activates follows. "
            "Preposition + wh + subject + verb is the long-opener rule.",
            "So the statement holds: the yeast activates with statement order.",
            tip="Preposition + wh + subject + verb.",
        ),
        item(
            "B", s[1],
            "under what conditions does the yeast… adds do-support as in a direct question. "
            "Long scientific openers tempt classroom question order — resist it. "
            "Repair to under what conditions the yeast activates.",
            'So the statement is false: repair to "under what conditions the yeast activates."',
            trap="does after a long under what conditions opener is a high-difficulty near-miss.",
        ),
        item(
            "C", s[2],
            "why the lights flickered… is statement order after learned. "
            "lights before flickered; no auxiliary is waiting to front. "
            "why + subject + past — no did.",
            "So the statement holds: why the lights flickered is correct.",
        ),
        item(
            "D", s[3],
            "why did the lights flicker… smuggles do-support into the embed. "
            "We never learned why… already contains the questioning; did is leftover drill. "
            "Repair to why the lights flickered….",
            'So the statement is false: repair to "why the lights flickered every evening."',
            trap="why did… reappears even in narrative past embeds.",
        ),
        item(
            "E", s[4],
            "which shelf the spices belong on keeps the spices before belong. "
            "which + noun + subject + verb (+ stranded preposition) is modern and correct. "
            "Ask her frames it without flipping do.",
            "So the statement holds: stranded on does not require do-fronting.",
            tip="which + noun + subject + verb (+ stranded preposition).",
        ),
    ])

    # ========== Task 18 (5/5) ==========
    t = data["tasks"][17]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "which shelf do the spices… inserts do before the subject inside Ask her. "
            "The stranded on is fine; the fronted do is the error. "
            "Repair to which shelf the spices belong on.",
            'So the statement is false: repair to "which shelf the spices belong on."',
            trap="do after which + noun is the false twin of the prior stranded-preposition item.",
        ),
        item(
            "B", s[1],
            "whether or not the weather will clear… keeps will after the subject; or not does not change order. "
            "whether (or not) + subject + verb is the full pattern. "
            "hard to say merely frames the uncertainty.",
            "So the statement holds: or not is invisible for word order.",
            tip="whether (or not) + subject + verb.",
        ),
        item(
            "C", s[2],
            "whether or not will the weather… inverts will before the subject. "
            "Adding or not does not unlock Direct Will the weather…? order. "
            "Repair to whether or not the weather will….",
            'So the statement is false: repair to "whether or not the weather will clear by noon."',
            trap="or not often fools writers into thinking modal fronting is now allowed.",
        ),
        item(
            "D", s[3],
            "where Father Christmas lived is classic storybook statement order after asking. "
            "Father Christmas before lived — no auxiliary flip. "
            "where + subject + past.",
            "So the statement holds: the storybook embed stays flat.",
        ),
        item(
            "E", s[4],
            "where did Father Christmas live is direct-question order inside kept asking. "
            "Children's narratives still obey the embed rule in careful writing. "
            "Repair to where Father Christmas lived.",
            'So the statement is false: repair to "where Father Christmas lived."',
            trap="Storybook where did… is adult do-support scarring of a calm past embed.",
        ),
    ])

    # ========== Task 19 (5/5) ==========
    t = data["tasks"][18]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "on what basis the exemption had been granted keeps had after the subject. "
            "Prepositional wh-openers still take statement order. "
            "The minutes frame is formal packaging, not a license to invert.",
            "So the statement holds: had stays after exemption.",
            tip="Prepositional wh-openers still take statement order.",
        ),
        item(
            "B", s[1],
            "on what basis had the exemption… inverts had before the subject. "
            "Passive had been granted follows the subject; it does not jump ahead of it. "
            "Repair to on what basis the exemption had….",
            'So the statement is false: repair to "on what basis the exemption had been granted."',
            trap="had-fronting after on what basis looks boardroom-formal and still fails.",
        ),
        item(
            "C", s[2],
            "which vendor we should engage keeps we before should. "
            "which + noun + subject + modal + verb is the object-choice embed. "
            "divided over… is only the matrix scenery.",
            "So the statement holds: we should engage with statement order.",
            tip="which + noun + subject + modal + verb.",
        ),
        item(
            "D", s[3],
            "which vendor should we engage flips should before we. "
            "should we is the Direct Should we…? shape. "
            "Repair to which vendor we should engage.",
            'So the statement is false: repair to "which vendor we should engage."',
            trap="should-fronting after which vendor is a polished boardroom near-miss.",
        ),
        item(
            "E", s[4],
            "who seconded the motion is a clean subject who-clause. "
            "who is the agent; seconded is the past verb. "
            "Subject who + past — never invert or add did.",
            "So the statement holds: subject who + past is intact.",
            tip="Subject who + past — never invert or add did.",
        ),
    ])

    # ========== Task 20 (5/5) ==========
    t = data["tasks"][19]
    s = t["statements"]
    all_expl.append([
        item(
            "A", s[0],
            "who did second… adds emphatic or wrong do to a subject question. "
            "The prior true who seconded the motion is your answer key in miniature. "
            "Use who seconded — never who did second in this embed.",
            'So the statement is false: repair to "who seconded the motion."',
            trap="Emphatic did after subject who closes the topic on a familiar scar.",
        ),
        item(
            "B", s[1],
            "whether the trip itself makes… keeps makes after the subject; itself is just a focusing pronoun. "
            "Extra focus words do not change embedded order. "
            "divided over whether… still wants subject then verb.",
            "So the statement holds: itself does not license inversion.",
            tip="Extra focus words do not change embedded order.",
        ),
        item(
            "C", s[2],
            "whether does the trip… invents do-support after whether. "
            "does before the trip is Direct Does the trip…? wearing a whether hat. "
            "Repair to whether the trip makes….",
            'So the statement is false: repair to "whether the trip itself makes sense."',
            trap="does after whether with a focusing itself is still illegal do-support.",
        ),
        item(
            "D", s[3],
            "where the caretaker is… is the classic wonder pattern with statement order. "
            "caretaker before is; the blackout phrase is only a time adjunct. "
            "I wonder where + subject + is.",
            "So the statement holds: the topic's signature correct pattern.",
            tip="I wonder where + subject + is.",
        ),
        item(
            "E", s[4],
            "where is the caretaker… reverts to direct-question inversion after wonder. "
            "Repair to where the caretaker is — the core contrast of this topic. "
            "If you remember only one repair from G.19, make it this one.",
            'So the statement is false: repair to "where the caretaker is during the blackout."',
            trap="where is… after wonder is the opening scar of the whole chapter.",
        ),
    ])

    # Apply
    for task, expls in zip(data["tasks"], all_expl):
        assert len(expls) == 5, task["id"]
        for i, (stmt, expl) in enumerate(zip(task["statements"], expls)):
            assert expl.startswith(f"**{LETTERS[i]}) {stmt}"), (task["id"], i, expl[:100], stmt)
            assert "So the statement" in expl, (task["id"], i)
        # Tip and Trap mutually exclusive in same item? Style allows either optional; we used at most one of each
        task["tactical_explanations"] = expls

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Wrote", PATH)
    print("tasks", len(data["tasks"]), "expls", sum(len(t["tactical_explanations"]) for t in data["tasks"]))


if __name__ == "__main__":
    main()
