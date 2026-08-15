# -*- coding: utf-8 -*-
"""Rewrite g.4 tactical_explanations to _EXPL_STYLE.md v2."""
from __future__ import annotations

import json
from pathlib import Path

PATH = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.4.json")

# Each task: list of 5 explanation strings (A–E), already fully formatted.
REWRITES: dict[str, list[str]] = {}

REWRITES["en-g-4-01"] = [
    "**A) Cyclists must wear a helmet on this coastal path.**\n\n"
    "\"Must\" lays down a non-negotiable rule on this coastal path, and the bare infinitive \"wear\" is the required shape after a pure modal. "
    "The sentence is demanding a hard safety requirement, not a polite suggestion, so the modal’s force matches the job. "
    "Nothing in the wording undercuts obligation or smuggles an illicit \"to.\"\n\n"
    "So the statement holds: obligation \"must\" + bare infinitive is cleanly formed.",

    "**B) The match might be cancelled beyond any possible doubt.**\n\n"
    "\"Might\" only encodes weak possibility, so pairing it with \"beyond any possible doubt\" cancels the meaning. "
    "You cannot keep both a soft modal and absolute-certainty adverbials in one claim. "
    "Soften the certainty language or upgrade the modal — the clash itself is what fails.\n\n"
    "So the statement is false: repair by dropping the certainty phrase or replacing \"might\" with a stronger modal.",

    "**C) You need not bring a dish to the potluck if you are short on time.**\n\n"
    "\"Need not\" correctly lifts the duty: bringing a dish is optional if time is short. "
    "That is absence of obligation, not a ban on bringing food — guests may still bring a dish if they wish. "
    "The bare infinitive \"bring\" is the right form after modal \"need not.\"\n\n"
    "**Tip:** \"Need not\" = no duty; \"must not\" = prohibition.\n\n"
    "So the statement holds: waived obligation is formed and meant correctly.",

    "**D) We can must reserve a table before seven.**\n\n"
    "English allows only one pure modal before the main verb, so \"can must reserve\" is ungrammatical. "
    "Choose ability (\"can reserve\") or obligation (\"must reserve\"), never both stacked. "
    "Double modals are a classic form fail on exams.\n\n"
    "So the statement is false: repair to \"We can reserve…\" or \"We must reserve…\" — strip one modal.",

    "**E) She ought to stretch before the morning run.**\n\n"
    "\"Ought to stretch\" is sound advice before a run: \"ought\" always partners with \"to\" plus the base verb. "
    "The strength is recommendation, which fits a warm-up tip rather than a hard facility rule. "
    "The fixed pair \"ought to\" is intact here.\n\n"
    "So the statement holds: \"ought to\" + base verb correctly marks advice.",
]

REWRITES["en-g-4-02"] = [
    "**A) Visitors must to leave wet umbrellas by the door.**\n\n"
    "\"Must\" takes a bare infinitive, so write \"must leave,\" not \"must to leave.\" "
    "The extra \"to\" is borrowed from patterns like \"need to\" or \"ought to,\" which do not apply after pure modals. "
    "The obligation meaning is fine; only the form is broken.\n\n"
    "So the statement is false: repair to \"Visitors must leave wet umbrellas by the door.\"",

    "**B) You must not to feed the ducks near the jetty.**\n\n"
    "After \"must not,\" keep the bare infinitive: \"must not feed,\" not \"must not to feed.\" "
    "Prohibition uses the same base-verb pattern as positive \"must.\" "
    "Only \"ought\" and main-verb \"need to\" bring \"to\" into the chain.\n\n"
    "So the statement is false: repair to \"You must not feed the ducks near the jetty.\"",

    "**C) The delay may stem from a signal failure on the branch line.**\n\n"
    "\"May stem\" hedges carefully: a signal failure is a possible cause of the delay, not a proven one. "
    "The softness of \"may\" matches incomplete evidence, and the bare infinitive \"stem\" is correctly formed. "
    "Nothing in the sentence claims certainty that would fight the hedge.\n\n"
    "So the statement holds: possibility \"may\" + bare infinitive fits an open hypothesis.",

    "**D) They must have knew about the surprise party earlier.**\n\n"
    "Modal perfect needs a past participle: \"must have known,\" not \"must have knew.\" "
    "\"Knew\" is simple past; after \"have\" you need the participle form. "
    "The deduction strength of \"must have\" is fine — only the verb form fails.\n\n"
    "So the statement is false: repair to \"They must have known about the surprise party earlier.\"",

    "**E) The results could confirm the hypothesis in every scenario without exception.**\n\n"
    "\"Could\" encodes possibility, so it cannot underwrite an unconditional claim that the results confirm the hypothesis \"in every scenario without exception.\" "
    "Absolute certainty language and a weak modal cannot share one sentence. "
    "Soften the claim or harden the modal — keeping both is incoherent.\n\n"
    "So the statement is false: soften the certainty phrase or replace \"could\" with a stronger modal.",
]

REWRITES["en-g-4-03"] = [
    "**A) The post cannot have arrived yet — the box is still empty.**\n\n"
    "\"Cannot have arrived\" is a solid negative modal-perfect deduction: an empty box backs the claim that the post has not come yet. "
    "The form (cannot + have + past participle) is exactly right for ruling out a past event on present evidence. "
    "The dash clause supplies the logical ground for the denial.\n\n"
    "So the statement holds: negative modal perfect correctly denies a past arrival.",

    "**B) Neighbours might have overlooked the note on the gate.**\n\n"
    "\"Might have overlooked\" softens a past guess — possible, not proven. "
    "That is the right strength when the neighbours may simply have missed the note. "
    "Modal + have + past participle is cleanly formed for tentative past speculation.\n\n"
    "So the statement holds: \"might have\" + past participle fits soft past speculation.",

    "**C) We ought revise the packing list before we leave.**\n\n"
    "\"Ought\" requires \"to\": write \"ought to revise,\" not \"ought revise.\" "
    "Even though \"ought\" feels like \"should,\" it keeps its \"to.\" "
    "Treat \"ought to\" as a fixed pair before the base verb.\n\n"
    "So the statement is false: repair to \"We ought to revise the packing list before we leave.\"",

    "**D) Guests may request an extra blanket at reception.**\n\n"
    "\"May request\" marks permission: guests are allowed to ask reception for an extra blanket. "
    "House-rule English often uses \"may\" for allowed actions, and the bare infinitive is correctly formed. "
    "Nothing in the sentence fights the permission reading.\n\n"
    "So the statement holds: permission \"may\" + bare infinitive is standard notice language.",

    "**E) The ferry will likely be delayed for certain and without any doubt.**\n\n"
    "\"Will likely\" already hedges, so adding \"for certain and without any doubt\" contradicts the hedge. "
    "Keep one line of force — either the soft prediction or the certainty claim, not both. "
    "The clash of strength, not the modal alone, is what fails the sentence.\n\n"
    "So the statement is false: strip either the hedge or the absolute certainty tag.",
]

REWRITES["en-g-4-04"] = [
    "**A) Swimmers must shower before entering the pool.**\n\n"
    "\"Must shower\" correctly imposes a non-negotiable pool hygiene rule with a bare infinitive. "
    "Safety and facility rules almost always take this shape. "
    "The obligation force matches a posted requirement before entering the water.\n\n"
    "So the statement holds: hard rule \"must\" + bare infinitive is correctly formed.",

    "**B) The forecast must show sunshine, though we have no evidence at all.**\n\n"
    "Strong epistemic \"must\" cannot coexist with \"though we have no evidence at all.\" "
    "Without evidence, downgrade to \"may\" or \"might\"; do not use deduction-strength \"must.\" "
    "The concessive clause undercuts the very grounds that \"must\" needs.\n\n"
    "So the statement is false: with no evidence, repair to \"may\" or \"might show sunshine.\"",

    "**C) She could have posted the parcel before the cut-off.**\n\n"
    "\"Could have posted\" correctly frames an open past possibility: maybe the parcel went before the cut-off, maybe not. "
    "The modal-perfect form (could + have + past participle) is clean. "
    "Nothing in the sentence claims a proven past fact that would fight the hedge.\n\n"
    "So the statement holds: \"could have\" + past participle marks open past possibility.",

    "**D) You need not to renew the library card today.**\n\n"
    "Modal \"need not\" takes a bare infinitive: \"need not renew,\" not \"need not to renew.\" "
    "Do not confuse it with main-verb \"need to,\" which does take \"to.\" "
    "The waived-duty meaning is fine; only the extra \"to\" breaks the form.\n\n"
    "**Tip:** \"You need to renew\" vs \"You need not renew\" — only the main verb brings \"to.\"\n\n"
    "So the statement is false: repair to \"You need not renew the library card today.\"",

    "**E) The coach should reconsider the batting order.**\n\n"
    "\"Should reconsider\" is measured coaching advice about the batting order. "
    "The strength is recommendation, which fits a strategic rethink rather than a posted ban. "
    "\"Should\" + bare infinitive is the default shape for that tone.\n\n"
    "So the statement holds: advice \"should\" + bare infinitive is correctly formed.",
]

REWRITES["en-g-4-05"] = [
    "**A) The nurse should have flagged the allergy sooner.**\n\n"
    "\"Should have flagged\" correctly criticises a past missed duty with modal perfect: the allergy ought to have been noted sooner. "
    "That is mild past reproach, not a present rule. "
    "The form should + have + past participle matches the timeline.\n\n"
    "So the statement holds: \"should have\" + past participle marks past advice not followed.",

    "**B) Campers may not light fires after dusk under site rules.**\n\n"
    "\"May not light\" denies permission under campsite rules after dusk. "
    "In regulatory context, \"may not\" routinely means \"are not allowed to.\" "
    "The cue \"under site rules\" locks the prohibition reading rather than a weak negative guess.\n\n"
    "**Tip:** Context decides: \"may not\" can be prohibition or weak negative possibility — here the rules cue locks prohibition.\n\n"
    "So the statement holds: rule-based \"may not\" correctly marks a ban.",

    "**C) He must sign the consent form before the trial starts.**\n\n"
    "\"Must sign\" correctly imposes a hard pre-trial requirement with a bare infinitive. "
    "Pure modals never take \"to\" before the main verb, and the timing clause fits a non-negotiable gate. "
    "Obligation force matches consent paperwork before a trial.\n\n"
    "So the statement holds: obligation \"must\" + bare infinitive is clean.",

    "**D) The clouds might suggest a short shower rather than a storm.**\n\n"
    "\"Might suggest\" hedges an interpretation of the clouds without overclaiming a storm. "
    "Soft epistemic modals protect you when signs admit more than one reading. "
    "The contrast \"rather than a storm\" reinforces that the claim stays tentative.\n\n"
    "So the statement holds: soft \"might\" fits suggestive, not decisive, evidence.",

    "**E) We could shorten the hike if we take the ridge path.**\n\n"
    "\"Could shorten\" marks a feasible shorter route via the ridge, not a guaranteed outcome. "
    "Possibility is exactly the right strength for a conditional option. "
    "The bare infinitive after \"could\" is correctly formed.\n\n"
    "So the statement holds: possibility \"could\" fits an optional shorter route.",
]

REWRITES["en-g-4-06"] = [
    "**A) The museum might close early with absolute certainty.**\n\n"
    "\"Might\" and \"absolute certainty\" cancel each other out. "
    "Keep the soft modal and soften the claim, or upgrade the modal if you truly mean certainty. "
    "Weak possibility cannot underwrite an absolute claim in one sentence.\n\n"
    "So the statement is false: match modal strength to the adverbial — drop \"with absolute certainty\" or harden the modal.",

    "**B) Hosts ought to warn guests about the steep stairs.**\n\n"
    "\"Ought to warn\" correctly advises a prudent courtesy before guests meet the steep stairs. "
    "\"Ought to\" behaves like strong \"should,\" and the required \"to\" is present. "
    "Recommendation strength fits a safety courtesy rather than a posted ban.\n\n"
    "So the statement holds: \"ought to\" + bare infinitive correctly marks strong advice.",

    "**C) They cannot have ignored the fire alarm in the hallway.**\n\n"
    "\"Cannot have ignored\" is a firm negative deduction about a past event: given a hallway fire alarm, ignoring it is treated as logically untenable. "
    "Present or situational evidence licenses \"cannot have\" + past participle. "
    "The form and the force both fit a logical denial.\n\n"
    "So the statement holds: \"cannot have\" + past participle correctly rules out the past act.",

    "**D) You should of updated the packing list after the forecast changed.**\n\n"
    "\"Should of\" is a mishearing of \"should have.\" "
    "In writing, always use \"have\" after a modal — never the preposition \"of.\" "
    "The intended past criticism is clear; only the helper spelling fails.\n\n"
    "**Tip:** Say it aloud if you must, but write \"should have updated.\"\n\n"
    "So the statement is false: repair to \"You should have updated the packing list…\"",

    "**E) Volunteers need not bring their own tools to the park clean-up.**\n\n"
    "\"Need not bring\" correctly lifts the obligation to supply tools for the clean-up. "
    "Volunteers may still bring tools; they simply are not required to. "
    "Modal \"need not\" + bare infinitive is the right waiver shape.\n\n"
    "So the statement holds: \"need not\" removes duty without forbidding the action.",
]

REWRITES["en-g-4-07"] = [
    "**A) Students must have finished the quiz by now — every desk is empty.**\n\n"
    "\"Must have finished\" is a strong past deduction backed by empty desks right now. "
    "Present evidence often licenses \"must have\" about the recent past. "
    "The form must + have + past participle matches that evidence-based reading.\n\n"
    "So the statement holds: \"must have\" + past participle fits a confident past deduction.",

    "**B) You may borrow my spare charger if yours is dead.**\n\n"
    "\"May borrow\" correctly grants permission to use the spare charger. "
    "Offer/permission \"may\" takes a bare infinitive, and the conditional clause fits a polite offer. "
    "Nothing in the wording fights the permission reading.\n\n"
    "So the statement holds: permission \"may\" + bare infinitive is standard.",

    "**C) She might to join us after rehearsal.**\n\n"
    "Drop the \"to\": write \"might join,\" not \"might to join.\" "
    "Pure modals never take \"to\" before the main verb — the same rule as \"must,\" \"can,\" and \"should.\" "
    "Possibility meaning is fine; only the illicit \"to\" breaks the sentence.\n\n"
    "So the statement is false: repair to \"She might join us after rehearsal.\"",

    "**D) Drivers should check tyre pressure before a long trip.**\n\n"
    "\"Should check\" is measured advice before a long trip. "
    "The strength softens obligation into a wise recommendation about tyre pressure. "
    "\"Should\" + bare infinitive is the default for practical travel tips.\n\n"
    "So the statement holds: advice \"should\" + bare infinitive is correctly formed.",

    "**E) The cake need not be iced until tomorrow morning.**\n\n"
    "\"Need not be iced\" correctly says icing can wait until tomorrow — there is no present duty. "
    "Passive voice is fine after modal \"need not,\" so long as the infinitive stays bare. "
    "Waived duty, not prohibition, is the intended reading.\n\n"
    "So the statement holds: \"need not\" + bare passive infinitive correctly removes obligation.",
]

REWRITES["en-g-4-08"] = [
    "**A) They could of left the keys under the flowerpot.**\n\n"
    "Write \"could have left,\" never \"could of left.\" "
    "The spoken reduction sounds like \"of,\" but standard writing always keeps \"have.\" "
    "\"Of\" after a modal is always wrong on the page.\n\n"
    "So the statement is false: repair to \"They could have left the keys under the flowerpot.\"",

    "**B) You mustn’t park across the neighbour’s drive.**\n\n"
    "\"Mustn't park\" correctly forbids blocking the neighbour's drive. "
    "\"Must not / mustn't\" marks prohibition, not \"no need.\" "
    "The bare infinitive after the contracted modal is correctly formed.\n\n"
    "**Tip:** \"Mustn't\" = do not do this; different from \"needn't.\"\n\n"
    "So the statement holds: prohibition \"mustn't\" + bare infinitive is clean.",

    "**C) The trail may become muddy after overnight rain.**\n\n"
    "\"May become\" hedges a weather-linked possibility after overnight rain. "
    "Soft prediction is exactly the right strength for muddy trails, and the bare infinitive is clean. "
    "Nothing claims certainty that would fight the hedge.\n\n"
    "So the statement holds: soft \"may\" fits a weather-linked possibility.",

    "**D) We ought have booked tickets earlier.**\n\n"
    "\"Ought\" needs \"to\" even in the perfect: write \"ought to have booked,\" not \"ought have booked.\" "
    "Keep the fixed pair intact: ought to + have + past participle. "
    "Past regret meaning is clear; the missing \"to\" is the only failure.\n\n"
    "So the statement is false: repair to \"We ought to have booked tickets earlier.\"",

    "**E) She needn’t have cooked so much — half the trays went untouched.**\n\n"
    "\"Needn't have cooked\" correctly means she cooked in the past even though it was unnecessary — half the trays went untouched. "
    "That is the classic \"needn't have\" reading: past action done though it was not required. "
    "Present leftovers license the claim that the earlier effort was surplus.\n\n"
    "So the statement holds: \"needn't have\" + past participle marks unnecessary past effort.",
]

REWRITES["en-g-4-09"] = [
    "**A) The lights are on, so someone must be home.**\n\n"
    "Present deduction \"must be home\" fits strong evidence — the lights are on. "
    "Present cues often license \"must\" + bare infinitive for a now-time conclusion. "
    "The \"so\" clause supplies the logical link from evidence to claim.\n\n"
    "So the statement holds: epistemic \"must\" correctly marks a confident present deduction.",

    "**B) He might have been waiting at the wrong platform.**\n\n"
    "\"Might have been waiting\" softens a past progressive speculation about the wrong platform. "
    "Modal + have been + -ing is the standard shape for a tentative continuous past guess. "
    "Nothing claims proof that would fight the soft reading.\n\n"
    "So the statement holds: progressive modal perfect correctly hedges a continuous past guess.",

    "**C) You should must confirm the reservation by Friday.**\n\n"
    "**Trap:** \"Should must confirm\" stacks two obligation modals and looks like \"stronger advice,\" but English allows only one pure modal before the verb. "
    "Use \"should confirm\" or \"must confirm\" — never both. "
    "One obligation word is enough for the Friday deadline.\n\n"
    "So the statement is false: repair to \"You should confirm…\" or \"You must confirm…\" — strip one modal.",

    "**D) Artists may exhibit in the foyer during festival week.**\n\n"
    "\"May exhibit\" correctly allows artists to show work in the foyer during festival week. "
    "Permission \"may\" fits temporary openings and invitations, and the bare infinitive is clean. "
    "The time phrase does not change the modal’s job.\n\n"
    "So the statement holds: permission \"may\" fits an event-week allowance.",

    "**E) We need not to worry about tickets — the show is free.**\n\n"
    "**Trap:** Drop the \"to\": write \"need not worry,\" not \"need not to worry.\" "
    "Modal \"need not\" takes a bare verb; only main-verb \"need\" takes \"to.\" "
    "Borrowing \"need to\"’s \"to\" into modal \"need not\" is a common near-miss.\n\n"
    "So the statement is false: repair to \"We need not worry about tickets — the show is free.\"",
]

REWRITES["en-g-4-10"] = [
    "**A) The soup must taste better once it has simmered a little longer.**\n\n"
    "\"Must taste\" here is a confident prediction from cooking know-how once the soup has simmered longer — epistemic \"must,\" not a facility rule. "
    "Experience can license near-certain projected outcomes. "
    "The bare infinitive after \"must\" is correctly formed.\n\n"
    "So the statement holds: epistemic \"must\" can project a near-certain result from experience.",

    "**B) She could have been practising piano when you called.**\n\n"
    "\"Could have been practising\" correctly frames an open past continuous possibility for when the call came. "
    "Progressive modal perfect softens what someone may have been doing at a past moment. "
    "Nothing claims a proven fact that would fight the open reading.\n\n"
    "So the statement holds: \"could have been\" + -ing marks open continuous past possibility.",

    "**C) Players ought to arrive forty minutes before kick-off.**\n\n"
    "\"Ought to arrive\" advises a sensible buffer before kick-off. "
    "Keep \"to\" after \"ought\" even when a time phrase follows. "
    "Recommendation strength fits game-day timing advice.\n\n"
    "So the statement holds: \"ought to\" + bare infinitive correctly marks advice.",

    "**D) You may not take photographs inside the chapel.**\n\n"
    "\"May not take\" denies permission to photograph inside the chapel. "
    "In posted rules, \"may not\" often equals \"are not allowed to.\" "
    "The bare infinitive after \"may not\" is correctly formed.\n\n"
    "So the statement holds: site-rule \"may not\" correctly marks prohibition.",

    "**E) They must have forgot the picnic basket in the boot.**\n\n"
    "**Trap:** Past participle required: \"must have forgotten,\" not \"must have forgot.\" "
    "Irregular verbs still need the participle after \"have\" in modal perfect, and \"forgot\" looks plausible because it is a common base/past form. "
    "Deduction strength is fine — only the participle fails.\n\n"
    "So the statement is false: repair to \"They must have forgotten the picnic basket in the boot.\"",
]

REWRITES["en-g-4-11"] = [
    "**A) The bus might well be late in this fog.**\n\n"
    "\"Might well be\" idiomatically strengthens a serious present possibility in fog — quite possible / rather likely, still not proven. "
    "The idiom is standard exam English and does not claim absolute certainty. "
    "Fog supplies a natural ground for the strengthened hedge.\n\n"
    "**Tip:** \"Might well\" ≈ \"it is quite possible / rather likely.\"\n\n"
    "So the statement holds: idiomatic \"might well\" correctly marks a strong possibility.",

    "**B) You should have told me about the detour sooner.**\n\n"
    "\"Should have told\" criticises a past missed courtesy about the detour. "
    "Modal perfect here marks reproach about what did not happen in time. "
    "The form should + have + past participle matches that past complaint.\n\n"
    "So the statement holds: \"should have\" + past participle correctly marks past reproach.",

    "**C) He must to have left his scarf on the train.**\n\n"
    "**Trap:** No \"to\" after \"must\": write \"must have left,\" not \"must to have left.\" "
    "Modal perfect is modal + have + past participle — never insert \"to\" into the chain. "
    "Learners often wedge \"to\" in by analogy with \"ought to have,\" which does not transfer.\n\n"
    "So the statement is false: repair to \"He must have left his scarf on the train.\"",

    "**D) We needn’t stay for the encore if you are tired.**\n\n"
    "\"Needn't stay\" correctly lifts the obligation to remain for the encore if you are tired. "
    "Contracted \"needn't\" + bare infinitive is fully standard. "
    "Waiver of duty, not a ban on staying, is the intended reading.\n\n"
    "So the statement holds: \"needn't\" + bare infinitive correctly removes present duty.",

    "**E) The painting could be a later copy, though experts disagree.**\n\n"
    "\"Could be\" hedges an attribution of the painting as a later copy without claiming proof — which fits expert disagreement. "
    "Soft epistemic \"could\" and the concessive clause work together rather than fighting. "
    "The bare infinitive after \"could\" is clean.\n\n"
    "So the statement holds: soft \"could\" fits a scholarly hedge under dispute.",
]

REWRITES["en-g-4-12"] = [
    "**A) Hikers must not leave litter on the ridge.**\n\n"
    "\"Must not leave\" clearly prohibits littering on the ridge. "
    "\"Must not\" means do not do this — different from \"need not,\" which only removes duty. "
    "The bare infinitive after \"must not\" is correctly formed.\n\n"
    "**Tip:** \"Must not\" = prohibition; \"need not\" = no obligation.\n\n"
    "So the statement holds: \"must not\" correctly marks a ban.",

    "**B) She may have been about to call when the signal dropped.**\n\n"
    "\"May have been about to call\" hedges an interrupted near-future-in-the-past plan when the signal dropped. "
    "\"Be about to\" can sit inside modal perfect for near-miss timing. "
    "The soft modal fits an interrupted imminent plan that was not proven.\n\n"
    "So the statement holds: nested \"may have been about to\" correctly hedges a near-miss past plan.",

    "**C) You ought to of packed a spare battery.**\n\n"
    "**Trap:** Write \"ought to have packed,\" never \"ought to of packed.\" "
    "Even after \"ought to,\" the perfect helper is \"have,\" not \"of\" — the spoken reduction still looks wrong on the page. "
    "Past advice meaning is clear; only the spelling of the helper fails.\n\n"
    "So the statement is false: repair to \"You ought to have packed a spare battery.\"",

    "**D) They couldn’t have finished the jigsaw already — half the pieces are still on the table.**\n\n"
    "\"Couldn't have finished\" denies a past completion on clear present evidence — half the pieces are still on the table. "
    "Visible leftovers license a firm negative past deduction. "
    "The form could + have + past participle under negation matches that reading.\n\n"
    "So the statement holds: \"couldn't have\" + past participle correctly denies past completion.",

    "**E) We should water the seedlings every other morning.**\n\n"
    "\"Should water\" advises a regular care routine for the seedlings. "
    "Habitual practical advice often takes \"should\" + bare infinitive. "
    "The frequency phrase fits measured recommendation rather than a hard ban.\n\n"
    "So the statement holds: advice \"should\" + bare infinitive is correctly formed.",
]

REWRITES["en-g-4-13"] = [
    "**A) The choir must have been rehearsing for hours — their voices sound tired.**\n\n"
    "Progressive modal perfect \"must have been rehearsing\" fits present evidence of tired voices: they sound worn out because the continuous past effort was long. "
    "Must + have been + -ing is the right shape for a strong continuous past deduction. "
    "The dash clause supplies the evidential link.\n\n"
    "So the statement holds: progressive \"must have been\" correctly deduces continuous past rehearsal.",

    "**B) You may as well take the later train if the earlier one is packed.**\n\n"
    "\"May as well take\" idiomatically recommends the practical later train when the earlier one is packed. "
    "There is little reason not to choose the workable option. "
    "The bare infinitive after the idiom is correctly formed.\n\n"
    "**Tip:** \"May as well\" + bare infinitive = \"there is little reason not to.\"\n\n"
    "So the statement holds: idiomatic \"may as well\" correctly marks the practical choice.",

    "**C) She needn’t have to bring dessert; the host already baked two cakes.**\n\n"
    "**Trap:** \"Needn't have to bring\" double-marks absence of obligation and looks tidy because both halves waive duty on their own. "
    "Write \"needn't bring\" or \"doesn't have to bring\" — pick one marker, not both. "
    "The host’s two cakes explain why dessert is optional; the stacking is the only fail.\n\n"
    "So the statement is false: repair to \"She needn't bring dessert…\" or \"She doesn't have to bring dessert…\"",

    "**D) They mightn’t have noticed the small print on the ticket.**\n\n"
    "\"Mightn't have noticed\" softens a past negative deduction about noticing the ticket small print. "
    "Contracted \"mightn't have\" is acceptable in informal prose. "
    "The soft force fits an unproven past miss rather than a firm denial.\n\n"
    "So the statement holds: \"mightn't have\" + past participle correctly softens a past negative guess.",

    "**E) We should have been leaving earlier to catch the opening act.**\n\n"
    "\"Should have been leaving\" criticises a past progressive plan that started too late to catch the opening act. "
    "Progressive \"should have been + -ing\" means we ought already to have been in the middle of leaving. "
    "Process timing, not just a point action, is what the form targets.\n\n"
    "So the statement holds: progressive past advisability correctly criticises delayed leaving.",
]

REWRITES["en-g-4-14"] = [
    "**A) The battery must be dead — nothing lights up when I press the switch.**\n\n"
    "Present \"must be dead\" is a strong deduction from immediate evidence — nothing lights when the switch is pressed. "
    "Dead indicators license a confident now-time conclusion. "
    "Epistemic \"must\" + bare infinitive matches that evidential frame.\n\n"
    "So the statement holds: epistemic \"must\" correctly marks a present deduction from failure cues.",

    "**B) He could have been going to apologise before the argument flared again.**\n\n"
    "\"Could have been going to apologise\" hedges an aborted past intention before the argument flared again. "
    "\"Be going to\" can nest under modal perfects for plans that never landed. "
    "Soft possibility fits an intention that was interrupted, not proven.\n\n"
    "So the statement holds: nested \"going to\" under modal perfect correctly marks a failed-to-complete plan.",

    "**C) You mustn’t have borrowed my bike without asking — and the lock is still on it.**\n\n"
    "Here \"mustn't have borrowed\" works with evidence that the lock is still on the bike, denying the past act. "
    "Context matters: past \"must not have\" can deny an action that evidence shows did not occur. "
    "The corroborating clause keeps the denial coherent rather than contradictory.\n\n"
    "**Tip:** Corroborating evidence lets past \"mustn't have\" deny the action.\n\n"
    "So the statement holds: evidenced \"mustn't have\" correctly denies the past borrowing.",

    "**D) She ought to have been practising scales daily, not only before exams.**\n\n"
    "\"Ought to have been practising\" criticises a past continuous habit that fell short — scales daily, not only before exams. "
    "Progressive past advisability keeps \"ought to\" intact: ought to + have been + -ing. "
    "The contrast clause clarifies the missed continuous habit.\n\n"
    "So the statement holds: progressive \"ought to have been\" correctly marks missed continuous practice.",

    "**E) We may to have misread the trail markers in the dusk.**\n\n"
    "**Trap:** \"May to have\" inserts an illegal \"to\" after the modal and looks almost right because \"ought to have\" does need \"to.\" "
    "The pattern is \"may have misread,\" never \"may to have.\" "
    "Modal perfect = modal + have + past participle — no \"to\" in the middle.\n\n"
    "So the statement is false: repair to \"We may have misread the trail markers in the dusk.\"",
]

REWRITES["en-g-4-15"] = [
    "**A) The garden cannot but have suffered after three weeks without rain.**\n\n"
    "\"Cannot but have suffered\" is a formal idiom meaning the garden must inevitably have suffered after three dry weeks. "
    "The shape is elevated but grammatical: \"cannot but\" + bare infinitive / perfect signals inevitability. "
    "Three rainless weeks ground the inevitable deduction.\n\n"
    "**Tip:** \"Cannot but\" + bare infinitive / perfect signals inevitability.\n\n"
    "So the statement holds: formal \"cannot but have\" correctly marks inevitable past suffering.",

    "**B) You should of been checking the oven timer more carefully.**\n\n"
    "**Trap:** \"Should of been\" must be \"should have been.\" "
    "The same rule applies every time: write \"have,\" never \"of,\" after a modal — progressive aspect does not change the helper. "
    "Past process criticism is clear; only the spelling fails.\n\n"
    "So the statement is false: repair to \"You should have been checking the oven timer more carefully.\"",

    "**C) They may well have taken the scenic route to avoid the motorway.**\n\n"
    "\"May well have taken\" strengthens a serious past possibility that they chose the scenic route to avoid the motorway. "
    "It is still a possibility, not proven fact. "
    "The motivation clause supports the strengthened hedge without claiming proof.\n\n"
    "**Tip:** \"May well have\" = \"it is quite possible that … did.\"\n\n"
    "So the statement holds: \"may well have\" correctly strengthens past possibility.",

    "**D) We needn’t have reserved seats — the hall was half empty.**\n\n"
    "\"Needn't have reserved\" correctly means the past reservation was unnecessary — the hall was half empty. "
    "Empty seats now prove the earlier booking was surplus. "
    "Present counter-evidence licenses \"needn't have\" + past participle.\n\n"
    "So the statement holds: \"needn't have\" correctly marks an unnecessary past booking.",

    "**E) She must can speak Spanish after a year in Madrid.**\n\n"
    "**Trap:** \"Must can\" stacks two pure modals and looks like \"obligation + ability,\" but English does not allow that pairing. "
    "Write \"must be able to speak\" or simply \"can speak\" after a year in Madrid. "
    "Need ability after \"must\"? Use \"be able to,\" not a second modal.\n\n"
    "So the statement is false: repair to \"She must be able to speak Spanish…\" or \"She can speak Spanish…\"",
]

REWRITES["en-g-4-16"] = [
    "**A) The soup should have been simmering gently, not boiling hard.**\n\n"
    "\"Should have been simmering\" criticises the wrong past continuous cooking method — gentle simmer, not a hard boil. "
    "Progressive modal perfect can target how something was being done. "
    "The contrast clause makes the missed process clear.\n\n"
    "So the statement holds: \"should have been\" + -ing correctly criticises a past process.",

    "**B) He might have left already, but we cannot be sure.**\n\n"
    "\"Might have left\" correctly softens an uncertain past deduction, and pairing it with \"we cannot be sure\" is coherent hedging rather than a contradiction. "
    "Soft \"might have\" loves an explicit uncertainty coda. "
    "The form might + have + past participle matches that open reading.\n\n"
    "So the statement holds: soft \"might have\" plus an uncertainty coda is coherent.",

    "**C) You need not have brought an umbrella — it never rained.**\n\n"
    "\"Need not have brought\" correctly marks an unnecessary past action — it never rained, so the umbrella was surplus after the fact. "
    "Dry outcome after the event licenses the \"need not have\" reading. "
    "The form need not + have + past participle is clean.\n\n"
    "So the statement holds: \"need not have\" correctly marks unnecessary past effort.",

    "**D) They mustn’t of crossed the frozen lake on foot.**\n\n"
    "**Trap:** Write \"mustn't have crossed,\" never \"mustn't of crossed.\" "
    "Contractions do not license \"of\" for \"have\" — the same spelling rule under every modal. "
    "Past denial meaning is fine; only the helper spelling fails.\n\n"
    "So the statement is false: repair to \"They mustn't have crossed the frozen lake on foot.\"",

    "**E) We ought to update the shared shopping list before Friday.**\n\n"
    "\"Ought to update\" correctly advises a timely refresh of the shared shopping list before Friday. "
    "Present advice still needs \"ought to\" + bare infinitive. "
    "Recommendation strength fits a forward-looking household tip.\n\n"
    "So the statement holds: present \"ought to\" + bare infinitive correctly marks advice.",
]

REWRITES["en-g-4-17"] = [
    "**A) The archivist cannot have been other than delighted by the recovered letters.**\n\n"
    "\"Cannot have been other than delighted\" is a formal double negation meaning the archivist must have been delighted by the recovered letters. "
    "The ornate dress still yields a strong positive deduction. "
    "Recovered letters ground the near-inevitable reading.\n\n"
    "**Tip:** \"Cannot have been other than …\" = strong positive deduction in formal style.\n\n"
    "So the statement holds: formal \"cannot have been other than\" correctly forces a strong positive reading.",

    "**B) You should must label the allergy on the lunchbox clearly.**\n\n"
    "**Trap:** \"Should must label\" stacks two obligation modals and can look like \"extra-strong advice\" under a safety topic. "
    "Use \"should label\" or \"must label\" — never both on the lunchbox allergy line. "
    "One obligation word is enough; strip the extra modal.\n\n"
    "So the statement is false: repair to \"You should label…\" or \"You must label…\" — one modal only.",

    "**C) We ought to have been watering the balcony plants daily in this heat.**\n\n"
    "\"Ought to have been watering\" correctly criticises a past continuous habit that fell short in the heat. "
    "Progressive past advisability keeps \"ought to\" + have been + -ing. "
    "Daily care in heat is exactly the continuous routine the form targets.\n\n"
    "So the statement holds: progressive \"ought to have been\" correctly marks missed continuous care.",

    "**D) He mightn’t have realised the path forked behind the barn.**\n\n"
    "\"Mightn't have realised\" softens a past negative deduction about noticing that the path forked behind the barn. "
    "Contracted \"mightn't have\" fits informal narrative. "
    "Soft force keeps the miss possible rather than proven.\n\n"
    "So the statement holds: \"mightn't have\" + past participle correctly softens past unawareness.",

    "**E) She need not have to renew the membership until autumn.**\n\n"
    "**Trap:** \"Need not have to renew\" double-marks waived duty and looks careful because both markers alone are valid. "
    "Write \"need not renew\" or \"does not have to renew\" — one marker is enough until autumn. "
    "Pick \"need not\" or negated \"have to,\" not both stacked.\n\n"
    "So the statement is false: repair to \"She need not renew…\" or \"She does not have to renew…\"",
]

REWRITES["en-g-4-18"] = [
    "**A) The ranger cannot but have noticed the abandoned campfire.**\n\n"
    "\"Cannot but have noticed\" means the ranger must inevitably have noticed the abandoned campfire. "
    "Formal \"cannot but\" + perfect is grammatical for inevitability. "
    "An abandoned campfire is the sort of visible cue that licenses the strong reading.\n\n"
    "**Tip:** \"Cannot but\" + perfect = formal \"must have\" inevitability.\n\n"
    "So the statement holds: formal \"cannot but have\" correctly marks inevitable noticing.",

    "**B) We should have had the boots resoled before the trek.**\n\n"
    "\"Should have had the boots resoled\" correctly frames a past causative expectation before the trek. "
    "Modal perfect can wrap \"have + object + past participle.\" "
    "The timing cue \"before the trek\" fits past advice about a service that should already have been done.\n\n"
    "So the statement holds: causative inside modal perfect is a legitimate advanced shape.",

    "**C) She may to have understated how steep the final climb was.**\n\n"
    "**Trap:** \"May to have\" inserts an illegal \"to\" after the modal, likely by false analogy with \"ought to have.\" "
    "Write \"may have understated,\" never \"may to have understated.\" "
    "Modal + have + past participle — no wedged \"to.\"\n\n"
    "So the statement is false: repair to \"She may have understated how steep the final climb was.\"",

    "**D) Flatmates mustn’t have taken cash from the jar overnight — and the note count proves they did not.**\n\n"
    "Here \"mustn't have taken\" works as a past denial supported by evidence that the cash is untouched — the note count proves they did not. "
    "Context and corroboration matter with past \"must not have.\" "
    "The evidence clause licenses reading the modal as \"did not happen.\"\n\n"
    "**Tip:** Evidence clause can license past \"mustn't have\" as \"did not happen.\"\n\n"
    "So the statement holds: evidenced \"mustn't have\" correctly denies the past taking.",

    "**E) The guide might well have taken a shortcut through the orchard.**\n\n"
    "\"Might well have taken\" idiomatically strengthens a serious past suspicion that the guide used an orchard shortcut. "
    "Still possibility, but a strong one — not proven fact. "
    "The orchard cue supports the strengthened hedge without claiming certainty.\n\n"
    "**Tip:** \"Might well have\" = \"it is quite possible that … did.\"\n\n"
    "So the statement holds: \"might well have\" correctly strengthens past possibility.",
]

REWRITES["en-g-4-19"] = [
    "**A) The chef must have been about to plate the dessert when the power cut hit.**\n\n"
    "\"Must have been about to plate\" correctly deduces an imminent past plan interrupted by the power cut. "
    "\"Be about to\" can sit inside a modal perfect for near-future-in-the-past deductions. "
    "The when-clause supplies the interrupt that freezes the imminent action.\n\n"
    "So the statement holds: \"must have been about to\" correctly marks a confident interrupted imminent action.",

    "**B) You needn’t to have packed both jumpers and a heavy coat.**\n\n"
    "**Trap:** Drop the \"to\": write \"needn't have packed,\" not \"needn't to have packed.\" "
    "Modal \"need not / needn't\" never takes \"to\" before the verb chain, even in modal perfect. "
    "Unnecessary double packing is the meaning; the illicit \"to\" is the only fail.\n\n"
    "So the statement is false: repair to \"You needn't have packed both jumpers and a heavy coat.\"",

    "**C) They could have been going to cycle the coastal path before the wind rose.**\n\n"
    "\"Could have been going to cycle\" hedges a past intention to ride the coastal path that never completed once the wind rose. "
    "\"Be going to\" nests under modal perfects for aborted plans. "
    "Soft force fits an intention that the wind cut short.\n\n"
    "So the statement holds: \"could have been going to\" correctly marks a soft aborted plan.",

    "**D) The map should not of omitted the footbridge over the creek.**\n\n"
    "**Trap:** \"Should not of omitted\" must be \"should not have omitted.\" "
    "Negation does not change the helper — still \"have,\" never \"of,\" after a modal. "
    "Past criticism of the map is clear; only the spelling fails.\n\n"
    "So the statement is false: repair to \"The map should not have omitted the footbridge over the creek.\"",

    "**E) We may as well have walked for all the good the crowded bus did.**\n\n"
    "\"May as well have walked\" idiomatically means the crowded bus achieved nothing useful — walking would have made little difference. "
    "The ironic past idiom is standard. "
    "\"For all the good…\" cues the \"little difference\" reading.\n\n"
    "**Tip:** \"May as well have\" + past participle = ironic \"it would have made little difference.\"\n\n"
    "So the statement holds: ironic \"may as well have\" correctly marks a pointless past choice.",
]

REWRITES["en-g-4-20"] = [
    "**A) The volunteers cannot have been other than exhausted after the night shift at the shelter.**\n\n"
    "\"Cannot have been other than exhausted\" means the volunteers must have been exhausted after the night shift. "
    "Formal \"cannot have been other than …\" is a strong positive deduction in ornate clothing. "
    "A night shift at the shelter grounds the near-inevitable reading.\n\n"
    "**Tip:** Formal double negation here collapses to must-have-been certainty.\n\n"
    "So the statement holds: formal \"cannot have been other than\" correctly forces exhaustion as the reading.",

    "**B) She should must escalate any safety concern to the site supervisor the same day.**\n\n"
    "**Trap:** \"Should must escalate\" stacks two obligation modals about safety concerns and can look \"extra serious\" because of the topic. "
    "Use \"should escalate\" or \"must escalate\" — never both the same day. "
    "One obligation modal only; safety tone does not license doubling.\n\n"
    "So the statement is false: repair to \"She should escalate…\" or \"She must escalate…\" — one modal only.",

    "**C) We ought to have been updating the trail conditions continuously, not weekly.**\n\n"
    "\"Ought to have been updating\" correctly criticises a past continuous practice that fell short — trail conditions continuously, not weekly. "
    "Progressive past advisability is the intended advanced shape: ought to + have been + -ing. "
    "The contrast clause clarifies the missed continuous procedure.\n\n"
    "So the statement holds: progressive \"ought to have been\" correctly marks missed continuous updating.",

    "**D) He mightn’t have realised the ferry required advance booking in peak season.**\n\n"
    "\"Mightn't have realised\" softens a past negative deduction about knowing that peak-season ferry booking was required. "
    "Contracted \"mightn't have\" is acceptable in less formal prose. "
    "Soft force keeps the miss possible rather than proven.\n\n"
    "So the statement holds: \"mightn't have\" + past participle correctly softens past unawareness.",

    "**E) The book club need not have to maintain two separate reading lists after the groups joined.**\n\n"
    "**Trap:** \"Need not have to maintain\" double-marks absence of obligation after the groups joined and looks careful because each half waives duty alone. "
    "Write \"need not maintain\" or \"do not have to maintain\" — pick one no-obligation marker. "
    "\"Need not\" or negated \"have to,\" never both stacked.\n\n"
    "So the statement is false: repair to \"The book club need not maintain…\" or \"…do not have to maintain…\"",
]


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    assert len(data["tasks"]) == 20, len(data["tasks"])
    for task in data["tasks"]:
        tid = task["id"]
        assert tid in REWRITES, tid
        exps = REWRITES[tid]
        assert len(exps) == 5, (tid, len(exps))
        assert len(task["statements"]) == 5
        assert len(task["answer_key"]) == 5
        # Verify header letter+statement match
        for i, (stmt, exp) in enumerate(zip(task["statements"], exps)):
            letter = "ABCDE"[i]
            # statements already end with punctuation
            expected_head = f"**{letter}) {stmt}**"
            assert exp.startswith(expected_head), (tid, letter, exp[:80], expected_head[:80])
            # Must land on true/false in closing
            assert "So the statement" in exp, (tid, letter)
        task["tactical_explanations"] = exps

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {PATH} — {sum(len(v) for v in REWRITES.values())} explanations")


if __name__ == "__main__":
    main()
