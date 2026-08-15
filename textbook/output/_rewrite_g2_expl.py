# -*- coding: utf-8 -*-
"""Rewrite g.2 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.2.json")
LETTERS = "ABCDE"


def fmt(letter: str, stmt: str, body: str, tip_or_trap: str | None, closing: str) -> str:
    s = stmt.rstrip()
    if not s.endswith((".", "?", "!")):
        s += "."
    parts = [f"**{letter}) {s}**", "", body.strip()]
    if tip_or_trap:
        parts.extend(["", tip_or_trap.strip()])
    parts.extend(["", closing.strip()])
    return "\n".join(parts) + "\n"


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20

    # Each task: list of (body, tip_or_trap|None, closing) for A–E
    rewrites: dict[str, list[tuple[str, str | None, str]]] = {}

    rewrites["en-g-2-01"] = [
        (
            "This is a clean zero conditional: a general scientific fact uses present simple on both sides. "
            "Heating ice always leads to melting, so there is no need for will. "
            "The sentence reads like a law of nature, which is exactly when zero is the right frame.",
            None,
            "So the statement holds: present + present correctly marks a timeless fact.",
        ),
        (
            "A real morning plan: present simple after if, will + base verb in the result. "
            "Opening early is possible, and finishing before lunch is an open future outcome. "
            "That present-plus-will pairing is the classic first conditional.",
            None,
            "So the statement holds: first conditional correctly frames a real near-future plan.",
        ),
        (
            "After will the verb must stay bare — will cancel, not will cancels. "
            "The if-clause is fine (present for a real future); only the result form is broken. "
            "Modals never take a third-person -s on the following verb.",
            '**Trap:** will cancels looks almost like ordinary present, but will freezes the next verb as V1.',
            'So the statement is false: repair to "If it rains tomorrow, we will cancel the picnic."',
        ),
        (
            "A real future result pinned to next week needs will pass (or similar), not bare present passes. "
            "Present + present would only fit a zero-style habit or general truth. "
            "This next-week quiz is an open plan, not a law of nature.",
            "**Trap:** bare present in the result can look tidy, but next week forces a will result.",
            'So the statement is false: repair to "If Leo studies tonight, he will pass the quiz for certain next week."',
        ),
        (
            "Will takes the base form bake, not bakes. "
            "The condition is a fine first-conditional if-clause; only the -s after will wrecks the result. "
            "Strip the inflection and the open-future plan is clean.",
            None,
            'So the statement is false: repair to "If the oven is ready, Sara will bake the muffins."',
        ),
    ]

    rewrites["en-g-2-02"] = [
        (
            "Zero conditional correctly states a general consequence with present simple on both sides. "
            "No water → death is a habitual natural truth, not a one-off future plan. "
            "Will would wrongly pull this permanent result into a first-conditional frame.",
            None,
            "So the statement holds: present + present marks the habitual scientific consequence.",
        ),
        (
            "First conditional links a real booking decision today to a future seating plan. "
            "Present in the if-clause, will + base verb in the result — textbook open future. "
            "Both halves stay aligned with a possible today→later chain.",
            None,
            "So the statement holds: present + will correctly frames the open seating plan.",
        ),
        (
            "Will misses is ungrammatical; use will miss. "
            "The late-bus condition is fine first-conditional material — only the -s after will is wrong. "
            "Keep the verb after will in the bare infinitive.",
            "**Trap:** will misses mirrors third-person present, so it looks almost right at speed.",
            'So the statement is false: repair to "If the bus is late, Tom will miss his lecture."',
        ),
        (
            "A timeless colour fact belongs in zero conditional (you get purple), not first with will. "
            "The phrase as a law of nature is a strong clue that will is the wrong mood for a permanent truth. "
            "Drop will and keep both clauses in present simple.",
            "**Trap:** will get feels natural for results, but a named law of nature wants zero, not first.",
            'So the statement is false: repair to "If you mix red and blue, you get purple every time as a law of nature."',
        ),
        (
            "Clean first conditional for a real morning timetable and intention. "
            "Opens is present; will train is the open future result. "
            "Nothing in the line forces a zero-style habit frame.",
            None,
            "So the statement holds: present + will fits the real gym plan.",
        ),
    ]

    rewrites["en-g-2-03"] = [
        (
            "Second conditional with formal were after if I, plus would + base verb for unreal advice. "
            "The speaker is not claiming to be you — the role is hypothetical. "
            "This is the classic advice pattern exams reward.",
            None,
            "So the statement holds: If I were … would … correctly marks the unreal role.",
        ),
        (
            "Past/were in the if-clause plus would marks an unreal present wish about the weather. "
            "We are not claiming the weather is better — we are imagining it. "
            "Would cycle is the unreal result that depends on that imagined improvement.",
            None,
            "So the statement holds: were + would correctly frames the unreal present wish.",
        ),
        (
            "Do not put would in the if-clause; write If she had more free time, she would join the choir. "
            "Keep would for the result only; the condition wants past simple. "
            "Stacking would on both sides is a classic second-conditional break.",
            "**Trap:** If she would have … looks polite, but standard conditionals ban would in the if-clause.",
            'So the statement is false: repair to "If she had more free time, she would join the choir."',
        ),
        (
            "Standard second conditional for a counterfactual present about distance and commuting. "
            "Lived + would walk is the default unreal-present frame. "
            "Dan does not live closer; the daily walk is only imagined.",
            None,
            "So the statement holds: past simple + would marks the counterfactual commute.",
        ),
        (
            "Careful exam English prefers were for unreal be after if, not was, especially in formal true/false items. "
            "The rest of the pattern (would change) is fine; only was is the fail. "
            "Swap was → were and the hypothetical captain role is exam-safe.",
            "**Trap:** If I was is common in speech, so it can feel acceptable — exams still prefer were here.",
            'So the statement is false: repair to "If I were the team captain tomorrow in this hypothetical, I would change the formation."',
        ),
    ]

    rewrites["en-g-2-04"] = [
        (
            "Unless (= if not) + present simple pairs cleanly with will for a real future sports plan. "
            "The match goes ahead if rain does not intervene. "
            "Will sits in the result, not in the unless-clause.",
            None,
            "So the statement holds: unless + present + will correctly frames the open match plan.",
        ),
        (
            "As long as (= provided that) takes present simple for a real ongoing condition, then will in the result. "
            "Watering is the proviso that keeps the herbs fine. "
            "The connector behaves like if for open conditions.",
            None,
            "So the statement holds: as long as + present + will is the right open-condition frame.",
        ),
        (
            "After unless, avoid will; use present — Unless you hurry, we will miss the opening credits. "
            "Will belongs in the result, not stacked into the condition. "
            "The double will makes the polarity and timing messy.",
            "**Trap:** Unless you will hurry mirrors ordinary future talk, but unless rarely takes will.",
            'So the statement is false: repair to "Unless you hurry, we will miss the opening credits."',
        ),
        (
            "If only + past simple correctly wishes about an unreal present lack of knowledge. "
            "Knew is the backshifted form for a present gap. "
            "The speaker does not have the number now, so past form carries the regret.",
            None,
            "So the statement holds: if only + past simple marks the unreal present wish.",
        ),
        (
            "Wish about present ability needs past form — I wish I could speak…, not can. "
            "After wish, shift the tense back one step from reality. "
            "Ordinary present modal can does not belong after wish.",
            "**Trap:** I wish I can … keeps everyday present can, which looks fluent but fails the backshift.",
            'So the statement is false: repair to "I wish I could speak Italian fluently this semester."',
        ),
    ]

    rewrites["en-g-2-05"] = [
        (
            "Second conditional for an unreal present about the cinema timetable. "
            "Had (past meaning) + would go imagines a better schedule that does not actually exist. "
            "The go-more-often result depends on that counterfactual slots claim.",
            None,
            "So the statement holds: past + would correctly marks the unreal present wish.",
        ),
        (
            "Third conditional: past perfect in the if-clause and would have + past participle for a missed past opportunity. "
            "The sale is over; the jacket stays unbought in this alternate past. "
            "Both halves stay locked in closed unreal past.",
            None,
            "So the statement holds: had + V3 / would have + V3 frames the missed purchase.",
        ),
        (
            "Would does not belong in the if-clause; use If they practised every day, they would improve faster. "
            "Ban would from the condition; leave it for the result. "
            "Double would is the signature second-conditional error here.",
            "**Trap:** If they would practise … can sound like polite pressure, but the if-clause wants past simple.",
            'So the statement is false: repair to "If they practised every day, they would improve faster."',
        ),
        (
            "Unless + present correctly sets a real study condition before a future entertainment plan. "
            "Finishes is present; will not watch is the open future result. "
            "Unless already means if not, so one layer of negation is enough.",
            None,
            "So the statement holds: unless + present + will not fits the real study proviso.",
        ),
        (
            "As long as + present states a real proviso that enables present ability with can. "
            "Not every as long as line needs will — can / may work when the result is present capability. "
            "Keep quiet stays present; can revise is the enabled present result.",
            None,
            "So the statement holds: as long as + present + can correctly marks the present proviso.",
        ),
    ]

    rewrites["en-g-2-06"] = [
        (
            "Classic third conditional for a missed travel outcome in the past. "
            "Had left + would have reached keeps both halves in unreal past. "
            "The ferry did not leave on time, and the island arrival before dusk did not happen.",
            None,
            "So the statement holds: past perfect + would have marks the missed ferry outcome.",
        ),
        (
            "Inverted third conditional (Had she set…) correctly replaces If she had set… "
            "The meaning and the would not have overslept result stay fully unreal past. "
            "Inversion is a formal shortcut, not a different tense.",
            None,
            "So the statement holds: Had + subject + V3 is valid third-conditional inversion.",
        ),
        (
            "The result must stay in the unreal past — would have won, not will have won. "
            "Will have is ordinary future perfect, not third-conditional regret. "
            "Past perfect in the if-clause forces would have in the result.",
            "**Trap:** will have won looks like a polished perfect form, but third conditional needs would have.",
            'So the statement is false: repair to "If Ben had trained harder, he would have won the race."',
        ),
        (
            "Wish + past perfect correctly regrets a past packing choice. "
            "Yesterday locks the regret in closed past, so past perfect is the right shift. "
            "A present wish would use past simple instead.",
            None,
            "So the statement holds: wish + past perfect correctly regrets the closed past packing miss.",
        ),
        (
            "If only + past simple correctly wishes about an unreal present problem. "
            "Right now signals present inconvenience, so worked (past form) is the backshift — not past perfect. "
            "Past perfect would wrongly push the café Wi-Fi problem into finished past.",
            None,
            "So the statement holds: if only + past simple fits the present Wi-Fi regret.",
        ),
    ]

    rewrites["en-g-2-07"] = [
        (
            "First conditional with a negative if-clause correctly predicts a real future result. "
            "Don't water is still present tense after if; will wilt is the open outcome. "
            "Negation in the condition does not force a different conditional type.",
            None,
            "So the statement holds: if + present negative + will correctly predicts the open future.",
        ),
        (
            "Unless already means if not, so Unless you don't creates a messy double negative. "
            "Use Unless you water… or If you don't… — not both layers of negation. "
            "The intended polarity becomes unclear, and exam English rejects the stack.",
            "**Trap:** Unless you don't … can look carefully cautious, but the double negation is the fail.",
            'So the statement is false: repair to "Unless you water the tomatoes, they will wilt." '
            '(or "If you don\'t water the tomatoes, they will wilt.").',
        ),
        (
            "As long as + present correctly sets a real academic condition for a future result. "
            "Submit is present; will give is the open Monday plan. "
            "Provided / as long as behave like if for real conditions.",
            None,
            "So the statement holds: as long as + present + will frames the feedback plan.",
        ),
        (
            "Wish + would correctly complains about someone else's annoying present habit and asks for a change. "
            "This is the behaviour-change use of wish, not a simple state wish. "
            "Would stop is the plea for different neighbour behaviour.",
            None,
            "So the statement holds: wish + would correctly marks the behaviour-change complaint.",
        ),
        (
            "If only for a present/future wish needs past or would, not will — If only she would listen… / If only she listened… "
            "Ordinary will does not belong after if only. "
            "Keep will for ordinary first-conditional results, not wishful if only clauses.",
            "**Trap:** If only she will … feels like urgent future hopes, but if only rejects ordinary will.",
            'So the statement is false: repair to "If only she would listen to the podcast before the seminar."',
        ),
    ]

    rewrites["en-g-2-08"] = [
        (
            "Second conditional with were for an unreal present outdoor scenario. "
            "The trail is muddy; we only imagine it cleaner. "
            "Would hike is the unreal result that depends on that cleaner trail.",
            None,
            "So the statement holds: were + would correctly marks the unreal hiking wish.",
        ),
        (
            "First conditional: a real possible price change pairs with will switch. "
            "Fall is present; will switch is the open future lifestyle result. "
            "Nothing here is hypothetical enough to force second conditional.",
            None,
            "So the statement holds: present + will correctly frames the real price possibility.",
        ),
        (
            "Never write If I would be; use If I were / If I was (exam: were). "
            "Would stays out of the if-clause in standard conditionals; only the result may keep would reach. "
            "The height wish is unreal present, so were is the safe condition form.",
            "**Trap:** If I would be … doubles would and looks like cautious future English — it is still wrong.",
            'So the statement is false: repair to "If I were taller, I would reach the top shelf easily."',
        ),
        (
            "Unless + present + will correctly frames a real museum visit plan. "
            "Closes is present; will see is the open result if early closing does not intervene. "
            "Unless already means if not, so the polarity is clear.",
            None,
            "So the statement holds: unless + present + will fits the real visit plan.",
        ),
        (
            "Wish + were correctly marks an unreal present ability. "
            "Formal exam English likes were here for present counterfactuals with be. "
            "The speaker is not better at mental arithmetic now — were carries that gap.",
            None,
            "So the statement holds: wish + were correctly frames the present ability counterfactual.",
        ),
    ]

    rewrites["en-g-2-09"] = [
        (
            "Mixed conditional: past unreal cause (had taken) with present result (would be). "
            "The missed bus is finished; the empty seat at the theatre is the present consequence. "
            "Matching cause time to result time is what makes the mix legal.",
            "**Tip:** Past perfect in if + would + V1 = past cause, present effect.",
            "So the statement holds: the mixed past→present pattern is correctly aligned.",
        ),
        (
            "Mixed conditional: unreal present character (were) with past result (would have handed). "
            "The trait is imagined as present; the missed Friday deadline is the past fallout. "
            "Were keeps the personality claim unreal now; would have locks the Friday fail in the past.",
            "**Tip:** If + past / were + would have + V3 = present unreal trait, past consequence.",
            "So the statement holds: present unreal trait correctly feeds a past would-have result.",
        ),
        (
            "A finished past result needs would have arrived, not would arrive, after a past perfect condition. "
            "Yesterday evening locks the outcome in the past, so plain would + V1 is the wrong half of the mix. "
            "Past condition plus past result wants full third conditional.",
            "**Trap:** would arrive can look like a sleek mix, but yesterday evening forces would have arrived.",
            'So the statement is false: repair to "If they had left earlier, they would have arrived yesterday evening."',
        ),
        (
            "A childhood past state needs past perfect — If I had had more patience as a child… "
            "Pure past regrets need had + past participle in the if-clause when the cause itself is past. "
            "Bare had + noun underpowers the childhood timeline here.",
            "**Trap:** If I had more patience as a child looks almost second-conditional, but as a child pushes it into past.",
            'So the statement is false: repair to "If I had had more patience as a child, I would have learned piano sooner."',
        ),
        (
            "Second conditional can use past simple heated for an unreal or unlikely present suggestion. "
            "Now softens into a hypothetical offer rather than a firm first-conditional plan. "
            "Would taste is the imagined better result under that soft suggestion.",
            None,
            "So the statement holds: past + would correctly softens the present soup suggestion.",
        ),
    ]

    rewrites["en-g-2-10"] = [
        (
            "As long as takes present for real conditions — As long as you follow…, not will follow. "
            "Will belongs in the result (will rise), not twice. "
            "The double will breaks the open-condition connector pattern.",
            "**Trap:** as long as you will follow feels like careful future English, but the proviso wants present.",
            'So the statement is false: repair to "As long as you follow the recipe, the cake will rise."',
        ),
        (
            "Provided that + present + will is a clean real-future proviso. "
            "Is open sets the condition; will swim is the plan. "
            "Provided that ≈ if / as long as for open conditions.",
            None,
            "So the statement holds: provided that + present + will correctly frames the swim plan.",
        ),
        (
            "Wish + past simple correctly regrets a present obligation. "
            "Didn't have to is the backshift from present have to. "
            "Tonight keeps the annoyance in present time, so past simple — not past perfect — is enough.",
            None,
            "So the statement holds: wish + past simple marks the present revision regret.",
        ),
        (
            "If only + past perfect correctly regrets a finished past cancellation. "
            "Last Saturday closes the event in the past. "
            "Present-backshift past simple would underpower that closed-date regret.",
            None,
            "So the statement holds: if only + past perfect correctly regrets the finished cancellation.",
        ),
        (
            "The timelines clash. A past-perfect unless-clause wants a past result (would have answered), "
            "or rephrase carefully as a matching mixed / first pattern. "
            "Do not paste past perfect onto plain would + V1 present without a clear mixed design.",
            "**Trap:** Unless she had missed… would answer now looks mixed at a glance, but the times do not lock cleanly.",
            'So the statement is false: repair to something time-matched such as '
            '"Unless she had missed the call, she would have answered it" '
            '(or rebuild a clean first/mixed pattern).',
        ),
    ]

    rewrites["en-g-2-11"] = [
        (
            "Mixed conditional: unreal present teaching style (explained) with a finished past result (would have passed). "
            "The slow-explanation habit is imagined as a present trait; last week's scores are the past consequence. "
            "Cause time and result time each get the form that matches them.",
            "**Tip:** If + past + would have + V3 = present unreal trait, past consequence.",
            "So the statement holds: the present-trait → past-result mix is correctly built.",
        ),
        (
            "A finished past explanation (had explained) does not pair cleanly with plain future would pass next month. "
            "Use would have passed for a past test, or If she explained… would pass for unreal present/future. "
            "The times of cause and result must align before the line can pass.",
            "**Trap:** had explained + would pass next month mixes closed past with open future without a legal hinge.",
            "So the statement is false: align the times — past test → would have passed, or unreal now/future → explained / would pass.",
        ),
        (
            "Mixed: past unreal teaching (had explained) with present result (would understand now). "
            "Last term is the cause; now is the effect. "
            "Past perfect in the if-clause and would + V1 in the result is the standard past→present mix.",
            None,
            "So the statement holds: past cause + present would-result is correctly aligned.",
        ),
        (
            "Inverted third conditional correctly reports a past hiking mishap avoided in an alternate past. "
            "Had the trail been… replaces If the trail had been… "
            "Would not have got lost keeps the result in unreal past.",
            None,
            "So the statement holds: Had-inversion correctly stands in for if + past perfect.",
        ),
        (
            "If it weren't for + noun correctly introduces an unreal present obstacle, with could in the result. "
            "Without the fog, the lights would be visible now. "
            "Weren't for marks the fog as the present barrier.",
            None,
            "So the statement holds: If it weren't for correctly marks the unreal present obstacle.",
        ),
    ]

    rewrites["en-g-2-12"] = [
        (
            "Wish + would correctly asks for a change in habitual annoying behaviour. "
            "The shoes keep appearing; wouldn't leave is the plea to stop. "
            "This behaviour-change use is distinct from a simple state wish.",
            None,
            "So the statement holds: wish + would correctly seeks a change in the hallway habit.",
        ),
        (
            "Wish does not take present simple like a command; use wouldn't leave or didn't leave. "
            "After wish, shift the tense — don't keep ordinary present. "
            "The hallway complaint needs a backshift, not a direct present imperative shape.",
            "**Trap:** I wish you don't … sounds like a firm request, but wish still demands the backshift.",
            'So the statement is false: repair to "I wish you wouldn\'t leave your shoes in the hallway." '
            '(or "I wish you didn\'t leave…").',
        ),
        (
            "If only + were correctly wishes for an unreal present length of break. "
            "The break is not longer; were marks the counterfactual. "
            "Past perfect would wrongly push the semester-break wish into finished past.",
            None,
            "So the statement holds: if only + were marks the present counterfactual length wish.",
        ),
        (
            "A scientific fact belongs in zero conditional, and will expands is doubly wrong (will + -s). "
            "Write it expands — present + present, no will. "
            "Permanent physical laws do not take first-conditional will.",
            "**Trap:** will expands piles a wrong mood and a wrong -s onto a timeless fact.",
            'So the statement is false: repair to "If water freezes, it expands."',
        ),
        (
            "Clean zero conditional for a physical law. "
            "Both clauses stay in present simple for a permanent truth. "
            "Freezing → expanding is always true, so will is unnecessary.",
            None,
            "So the statement holds: present + present correctly states the physical law.",
        ),
    ]

    rewrites["en-g-2-13"] = [
        (
            "Second conditional can mark an unlikely or tentative future plan (studied / would improve). "
            "Next year does not force first conditional when the speaker treats the plan as remote. "
            "Past + would softens the abroad year into a hypothetical step.",
            "**Tip:** Unlikely future → past + would, even with a future time cue like next year.",
            "So the statement holds: second conditional correctly marks the remote study-abroad plan.",
        ),
        (
            "Will in the if-clause plus bare present improves is a broken first-conditional attempt. "
            "Real future: If she studies… she will improve… "
            "Keep will out of the if-clause and put it in the result.",
            "**Trap:** If she will study … she improves flips the will into the wrong clause and drops it from the result.",
            'So the statement is false: repair to "If she studies abroad next year, she will improve her Spanish dramatically."',
        ),
        (
            "Should you need… is a polite inverted first-conditional alternative to If you need… "
            "Formal offers often prefer this shape. "
            "Will help keeps the open real result.",
            None,
            "So the statement holds: Should-inversion correctly stands in for if + present.",
        ),
        (
            "Were the path safer… correctly inverts a second-conditional if-clause. "
            "It replaces If the path were safer… with the same unreal-present meaning. "
            "Would use is the unreal result after dark.",
            None,
            "So the statement holds: Were-inversion correctly marks the unreal safer-path wish.",
        ),
        (
            "Inverted past perfect needs would have visited for a past result, not would visit yesterday. "
            "Yesterday forces third-conditional result shape. "
            "Had we known… only works when the result stays in unreal past.",
            "**Trap:** would visit yesterday looks like a light mix, but yesterday locks the result into would have + V3.",
            'So the statement is false: repair to "Had we known the gallery was free on Mondays, we would have visited yesterday."',
        ),
    ]

    rewrites["en-g-2-14"] = [
        (
            "Mixed pattern: past obstacle (had not been) with present/future-facing result (would be camping tonight). "
            "The puncture is finished; tonight's campsite is the imagined present. "
            "If it had not been for X is the formal past-cause frame for that mix.",
            "**Tip:** If it had not been for X + would + V1 = past cause, present effect.",
            "So the statement holds: past obstacle + present camping result is correctly mixed.",
        ),
        (
            "But for + noun is a compact equivalent of if it were not / had not been for. "
            "Same camping counterfactual, tighter wording. "
            "The flat tyre remains the blocking condition for tonight's campsite.",
            None,
            "So the statement holds: But for correctly compresses the same counterfactual obstacle.",
        ),
        (
            "Prefer If it hadn't been for… would have arrived… (past) or If it weren't for… would be… (present). "
            "Was not for with would have is non-standard for this item. "
            "Keep weren't for and hadn't been for distinct by time.",
            "**Trap:** If it was not for … would have arrived mixes present-looking was not for with a past result.",
            'So the statement is false: repair to "If it hadn\'t been for the flat tyre, we would have arrived hours ago."',
        ),
        (
            "As long as + present + can correctly sets a real group condition. "
            "Objects is present; can move is present capability under that proviso. "
            "As long as supports present modal results as well as will.",
            None,
            "So the statement holds: as long as + present + can fits the rehearsal proviso.",
        ),
        (
            "Unless + will is wrong; use Unless anyone complains… "
            "Will does not belong in the unless-clause. "
            "Keep the condition in present for this open group plan.",
            "**Trap:** Unless anyone will complain inserts future will where unless wants present.",
            'So the statement is false: repair to "Unless anyone complains, we can move the rehearsal to Thursday."',
        ),
    ]

    rewrites["en-g-2-15"] = [
        (
            "Wish + would have is wrong for a present lack; use wish + past simple (had). "
            "Wish I would have… is a classic exam error for present wishes about states. "
            "Free evenings are a present desire, so had — not would have — is the backshift.",
            "**Trap:** I wish I would have … borrows third-conditional furniture for a present state wish.",
            'So the statement is false: repair to "I wish I had more free evenings."',
        ),
        (
            "Wish + past simple correctly expresses an unreal present desire about free time. "
            "Had is the backshift from present have. "
            "The speaker does not have those free evenings now.",
            None,
            "So the statement holds: wish + past simple correctly marks the present free-time wish.",
        ),
        (
            "If only + past perfect cause with wouldn't be now is a valid mixed regret linking past delay to present queue. "
            "The delay is finished; the queue is happening. "
            "Past perfect after if only can feed a present would/wouldn't result when times match.",
            None,
            "So the statement holds: past delay → present queue is correctly mixed after if only.",
        ),
        (
            "Same mixed pattern with ordinary if instead of if only. "
            "Past unreal cause → present continuous-looking result with wouldn't + be + -ing. "
            "If and if only both allow this past→present mix when the times are clear.",
            None,
            "So the statement holds: if + past perfect correctly feeds the present queueing result.",
        ),
        (
            "Supposing + past simple introduces a second-conditional hypothesis with would in the question. "
            "Closed + would we study is the tentative-scenario frame. "
            "Supposing / suppose ≈ if for tentative scenarios.",
            None,
            "So the statement holds: supposing + past + would correctly frames the café hypothesis.",
        ),
    ]

    rewrites["en-g-2-16"] = [
        (
            "Even if + present + will correctly means the result holds despite the condition. "
            "Expense does not block the festival plan. "
            "Even if is not ordinary if — the main clause still uses real-future will here.",
            None,
            "So the statement holds: even if + present + will correctly keeps the festival plan despite cost.",
        ),
        (
            "Even if + past (were) wants would stay, not will stay. "
            "Match even if tense to the result: past → would; present → will. "
            "Were free clashes with will stay and breaks the unreal/real pairing.",
            "**Trap:** Even if the tickets were free, we will still… mixes second-conditional were with first-conditional will.",
            'So the statement is false: repair to "Even if the tickets were free, we would still stay home."',
        ),
        (
            "Whether or not + present + will correctly says the run happens regardless of rain. "
            "The start time is fixed either way. "
            "Whether or not = no matter if.",
            None,
            "So the statement holds: whether or not + present + will correctly ignores the rain alternative.",
        ),
        (
            "If so be is archaic and not exam-standard; use If the weather improves… "
            "Stick to standard if + present for real futures. "
            "Modern keys do not reward this set-phrase fossil.",
            None,
            'So the statement is false: repair to "If the weather improves, we will hike."',
        ),
        (
            "If need be is an accepted fixed phrase meaning if it is necessary, here with can. "
            "Do not \"correct\" it to if needs be in formal keys. "
            "The idiom stands as a set form for this open contingency.",
            "**Tip:** If need be is a set idiom — leave the wording alone.",
            "So the statement holds: if need be correctly means if it is necessary.",
        ),
    ]

    rewrites["en-g-2-17"] = [
        (
            "If she were to apply is a formal second-conditional way to mark a hypothetical future step. "
            "Were to + V1 softens the plan into something remote or tentative. "
            "Would need keeps the unreal/formal result about references.",
            "**Tip:** If + were to + V1 ≈ unlikely/formal if + past.",
            "So the statement holds: were to correctly marks the remote scholarship application.",
        ),
        (
            "Was to have applied mixed with would need now is over-stacked and non-standard for this item. "
            "Prefer clear mixed or third forms; avoid was to have + mismatched results. "
            "Formal keys stay on clear were to / had + V3 patterns.",
            "**Trap:** was to have applied + would need now piles formal layers without a clean time match.",
            "So the statement is false: rebuild with a clear were to / had + V3 pattern and matching result time.",
        ),
        (
            "Were he to practise… correctly inverts were to for a hypothetical training plan. "
            "Same meaning as If he were to practise… "
            "Would improve stays the remote/formal result within weeks.",
            None,
            "So the statement holds: Were … to inversion correctly replaces if + were to.",
        ),
        (
            "Knew then is underpowered for a clear past knowledge gap; the standard line uses had known then. "
            "Past counterfactual knowledge → past perfect in the if-clause. "
            "Would have chosen already locks the module decision in the past, so the if-clause must match.",
            "**Trap:** If I knew then … looks idiomatic, but then + past ignorance wants had known.",
            'So the statement is false: repair to "If I had known then what I know now, I would have chosen a different module."',
        ),
        (
            "Classic form: past perfect for past ignorance, would have chosen for the past decision. "
            "This is the polished exam hindsight pattern. "
            "Then and the closed module choice stay fully aligned in unreal past.",
            None,
            "So the statement holds: had known then … would have chosen is the safe hindsight form.",
        ),
    ]

    rewrites["en-g-2-18"] = [
        (
            "Would rather + past simple correctly softens a present preference about someone else's behaviour. "
            "Didn't stream is the polite backshift, not a past-time narrative. "
            "The revising scene is happening now; the past form is only the courtesy shift.",
            None,
            "So the statement holds: I'd rather you + past correctly marks the polite present preference.",
        ),
        (
            "After I'd rather you, use past simple, not present don't. "
            "Same backshift habit as wish — prefer past after I'd rather you. "
            "Present don't leaves the line looking like a flat present command.",
            "**Trap:** I'd rather you don't … keeps ordinary present and misses the required backshift.",
            'So the statement is false: repair to "I\'d rather you didn\'t stream loud videos while I\'m revising."',
        ),
        (
            "It's time + past simple is the standard formal pattern for present urgency. "
            "Left means we should leave now, not that we already departed. "
            "The past form is the marked formal choice after it's time.",
            None,
            "So the statement holds: it's time + past correctly marks present airport urgency.",
        ),
        (
            "Careful exam keys usually want It's time we left, not leave. "
            "It's time + past is the marked formal choice. "
            "Present leave is too bare for this set pattern in formal true/false items.",
            "**Trap:** It's time we leave sounds natural in speech, but formal keys prefer left.",
            'So the statement is false: repair to "It\'s time we left for the airport."',
        ),
        (
            "Suppose + past + would correctly frames a second-conditional daydream. "
            "Won + would you do matches if + past + would. "
            "Suppose / supposing pattern like if + past for tentative scenarios.",
            None,
            "So the statement holds: suppose + past + would correctly frames the concert-ticket hypothesis.",
        ),
    ]

    rewrites["en-g-2-19"] = [
        (
            "First conditional with a real possible macro change and a future lifestyle effect. "
            "Drops is present; will feel is open future. "
            "Next quarter keeps the budget relief in open future time.",
            None,
            "So the statement holds: present + will correctly frames the real inflation→budget chain.",
        ),
        (
            "Mixed: past unreal storm (Had … not hit) with present result (would still be open). "
            "Negative inversion can feed a present would result when this afternoon is the effect time. "
            "The storm is finished; the market's open state is the present counterfactual.",
            "**Tip:** Had … not + V3 can pair with present would + V1 when the effect time is now.",
            "So the statement holds: past storm cause + present market result is correctly mixed.",
        ),
        (
            "If only + could have + V3 correctly regrets a missed past ability or opportunity. "
            "Last month locks the regret in closed past. "
            "Could have attended carries both ability and the missed chance.",
            None,
            "So the statement holds: if only + could have correctly regrets the missed reunion.",
        ),
        (
            "Wish + could have + V3 matches the same past missed opportunity. "
            "Wish and if only parallel here for past ability regrets. "
            "Last month again keeps the reunion firmly in closed past.",
            None,
            "So the statement holds: wish + could have correctly parallels the past ability regret.",
        ),
        (
            "Unless needs a finite clause (Unless she has finished…), not Unless having finished… "
            "Avoid a dangling -ing after unless. "
            "Rebuild with subject + finite verb before you attach will not join us.",
            "**Trap:** Unless having finished … looks like a compressed participle clause, but unless rejects bare -ing.",
            'So the statement is false: repair to "Unless she has finished the essay, she will not join us."',
        ),
    ]

    rewrites["en-g-2-20"] = [
        (
            "It's high time + past simple correctly marks present urgency with the same backshift as wish / it's time. "
            "Booked means we should book now. "
            "The past form does not claim that the campsite is already booked.",
            None,
            "So the statement holds: it's high time + past correctly marks present booking urgency.",
        ),
        (
            "Clear first-conditional imperative result: if + present, imperative bring… "
            "Instructions work fine as first-conditional results. "
            "Come is present; bring is the real-instruction outcome.",
            None,
            "So the statement holds: if + present + imperative is a valid first-conditional instruction.",
        ),
        (
            "Provided + present (holds) correctly sets a real weather condition for a future plan with will come. "
            "Holds stays present in the proviso. "
            "Provided / providing take present, not will, just like if / as long as.",
            None,
            "So the statement holds: provided + present correctly conditions the Sunday cycling plan.",
        ),
        (
            "Provided the weather will hold wrongly inserts will into the condition. "
            "Same rule as if / as long as: no will in the proviso clause. "
            "Keep will come in the main clause and strip will from the weather proviso.",
            "**Trap:** provided the weather will hold doubles future will and breaks the connector pattern.",
            'So the statement is false: repair to "I\'ll come cycling with you on Sunday provided the weather holds."',
        ),
        (
            "No sooner… than needs a simple past result (went off), not conditional would go off. "
            "No sooner is past sequencing, not a conditional frame. "
            "Leave would out of this narrative pattern.",
            "**Trap:** would go off sneaks conditional mood into a past-sequencing idiom that wants went off.",
            'So the statement is false: repair to "No sooner had we sat down than the fire alarm went off."',
        ),
    ]

    for task in data["tasks"]:
        tid = task["id"]
        assert tid in rewrites, tid
        stmts = task["statements"]
        keys = task["answer_key"]
        rows = rewrites[tid]
        assert len(rows) == 5
        new_tacs = []
        for i, (body, tip, closing) in enumerate(rows):
            new_tacs.append(fmt(LETTERS[i], stmts[i], body, tip, closing))
            # Sanity: closing should mention true/false matching key
            low = closing.lower()
            if keys[i]:
                assert "holds" in low or "true" in low, (tid, LETTERS[i], closing)
            else:
                assert "false" in low, (tid, LETTERS[i], closing)
        task["tactical_explanations"] = new_tacs

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    # validate
    again = json.loads(PATH.read_text(encoding="utf-8"))
    assert again["id"] == "g.2"
    assert len(again["tasks"]) == 20
    for t in again["tasks"]:
        assert len(t["statements"]) == len(t["answer_key"]) == len(t["tactical_explanations"]) == 5
        for i, expl in enumerate(t["tactical_explanations"]):
            assert expl.startswith(f"**{LETTERS[i]}) {t['statements'][i]}")
            assert "So the statement" in expl
    print("OK: rewrote 100 tactical_explanations in g.2.json")


if __name__ == "__main__":
    main()
