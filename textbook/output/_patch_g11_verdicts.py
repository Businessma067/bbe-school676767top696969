"""Patch g.11 tactical_explanations: add missing **true**/**false** + cleanups."""
import json
from pathlib import Path

p = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.11.json")
data = json.loads(p.read_text(encoding="utf-8"))

# Map: (task_id, letter_index 0-4) -> new full explanation text
# Only include items we rewrite.
PATCHES: dict[tuple[str, int], str] = {}

# --- Missing verdict closings (22) + semantic polish on a few siblings ---

PATCHES[("en-g-11-02", 3)] = (
    '**D) This novel is more interesting than the film adaptation.**\n\n'
    'Multi-syllable "interesting" correctly takes more … than when the novel is set against the film. '
    'Longer adjectives almost never add -er. The more + base + than frame is exactly what this contrast wants.\n\n'
    'Long interesting takes more … than against the film, so the wording is **true**.\n'
)

PATCHES[("en-g-11-03", 3)] = (
    '**D) The weekend weather turned more worser after noon.**\n\n'
    '"Worse" is already comparative, and "worser" is nonstandard — "more worser" piles both errors. '
    'The fixed chain is bad → worse → worst with no extras. After noon the weather simply turned worse.\n\n'
    'Worse already is comparative and worser is nonstandard, so more worser is **false** — '
    '"The weekend weather turned worse after noon."\n'
)

PATCHES[("en-g-11-03", 4)] = (
    '**E) My laptop runs gooder after the software update.**\n\n'
    '"Gooder" is not English; the fixed chain stays good / better / best. Homemade -er forms on irregulars always fail. '
    'After the software update the laptop runs better.\n\n'
    'Gooder is not English, so the invented form is **false**: '
    '"My laptop runs better after the software update."\n'
)

PATCHES[("en-g-11-04", 3)] = (
    '**D) This playlist is the best of the three we built.**\n\n'
    '"The best of the three" correctly uses the irregular superlative inside a set of three playlists. '
    'Good → better → best fits group ranking without an extra most. Of the three cues the highest grade.\n\n'
    'Best of the three is the irregular superlative a set of three playlists needs, so the wording is **true**.\n'
)

PATCHES[("en-g-11-04", 4)] = (
    '**E) The museum was more farther from the hotel than we expected.**\n\n'
    '"Farther/further" is already comparative, so "more farther" doubles the mark. '
    'Irregular distance forms never take an extra more. Keep farther or further alone before from the hotel.\n\n'
    'Farther is already comparative, so more farther is **false** — '
    '"The museum was farther from the hotel than we expected."\n'
)

PATCHES[("en-g-11-06", 0)] = (
    '**A) The kitchen looked tidier after we cleared the counter.**\n\n'
    '"Tidy" → "tidier" after clearing the counter. Consonant + y → -ier is the expected spelling for this short adjective. '
    'The line reports a before-and-after look, not a group ranking.\n\n'
    '"Tidy" → "tidier" uses the expected -ier spelling after the clear-up, so the wording is **true**.\n'
)

PATCHES[("en-g-11-07", 3)] = (
    '**D) She felt more happier after the phone call.**\n\n'
    '"Happier" already includes the comparative, so "more happier" doubles the mark. '
    'Remember happy → happier → happiest with no stacked more. After the phone call she simply felt happier.\n\n'
    'Happier already includes the comparative, so more happier is **false**: '
    '"She felt happier after the phone call."\n'
)

PATCHES[("en-g-11-08", 0)] = (
    '**A) The second episode was less exciting than the pilot.**\n\n'
    '"Less exciting than the pilot" correctly softens a longer adjective across two episodes. '
    'Less + adjective + than is the comparative of inferiority. The second episode versus the pilot is a pair, so comparative is enough.\n\n'
    'Less exciting than softens a long adjective across two episodes, so the wording is **true**.\n'
)

PATCHES[("en-g-11-08", 2)] = (
    '**C) This rucksack is bigest than I need for a day hike.**\n\n'
    'Spelling and grade both fail — "bigest than" should be "bigger than." '
    'Double the g and use comparative with than: big → bigger → biggest. A than-clause wants comparative, not a mangled -est form.\n\n'
    'Bigest than is misspelled and the wrong grade — than wants bigger, so this is **false**: '
    '"This rucksack is bigger than I need for a day hike."\n'
)

PATCHES[("en-g-11-09", 0)] = (
    '**A) This tea is as strong as the one from the market stall.**\n\n'
    '"As strong as the one from the market stall" correctly states matched strength: as … as marks sameness, not ranking, and both markers are present. '
    'The tea and the stall brew sit in a full equality frame.\n\n'
    'As strong as keeps both equality markers between the two brews, so the wording is **true**.\n'
)

PATCHES[("en-g-11-09", 2)] = (
    '**C) The park feels as peaceful as it did in spring.**\n\n'
    '"As peaceful as it did in spring" correctly keeps both as-markers for matched calm — dropping the second as would break the equality pattern. '
    'The park now versus spring uses a full as … as frame.\n\n'
    'Both as-markers keep the park-versus-spring equality intact, so the wording is **true**.\n'
)

PATCHES[("en-g-11-09", 4)] = (
    '**E) The sequel was as good than the original.**\n\n'
    '"As good than" mixes equality with a comparative closer. Never write as … than; rebuild with a second as. '
    'The sequel-versus-original idea still wants sameness, not ranking.\n\n'
    '**Trap:** as … than is a polished-looking hybrid that is always wrong.\n\n'
    'As good than mixes systems; a second as restores equality, so this is **false**: '
    '"The sequel was as good as the original."\n'
)

PATCHES[("en-g-11-11", 2)] = (
    '**C) This is one of the best meals we have cooked at home.**\n\n'
    '"One of the best meals" correctly pairs the irregular superlative with a plural noun. '
    'Best / worst fit the same frame as most + adjective. Home-cooked meals form the plural set behind one of the.\n\n'
    'Best meals pairs irregular superlative with plural after one of the, so the wording is **true**.\n'
)

PATCHES[("en-g-11-14", 2)] = (
    '**C) Fresh pasta is preferable to the dried kind for this sauce.**\n\n'
    '"Preferable to the dried kind" correctly states a preference between two pasta options. '
    'Preferable to ≈ better as a choice than, but the preposition stays to. Fresh versus dried stays inside that locked pattern.\n\n'
    'Preferable to correctly states the fresh-versus-dried pasta choice, so the wording is **true**.\n'
)

PATCHES[("en-g-11-14", 3)] = (
    '**D) The coastal path is preferable than the inland route.**\n\n'
    'Preferable never takes than. Swap than for to and keep the coastal-versus-inland contrast. '
    'The meaning is preference, but the grammar is the Latinate to-frame.\n\n'
    '**Trap:** preferable than is the twin of superior than — wrong preposition on a fixed adjective.\n\n'
    'Preferable never takes than, so the coastal line is **false**: '
    '"The coastal path is preferable to the inland route."\n'
)

PATCHES[("en-g-11-15", 2)] = (
    '**C) She made less mistakes on the second draft.**\n\n'
    '"Mistakes" is countable, so "less mistakes" is wrong in careful English. If you can count them, prefer fewer. '
    'The second-draft contrast still wants a quantity comparative, just the countable one.\n\n'
    '**Trap:** less + countable plural is common in speech but fails careful/exam English.\n\n'
    'Mistakes are countable, so less mistakes is **false** — '
    '"She made fewer mistakes on the second draft."\n'
)

PATCHES[("en-g-11-15", 4)] = (
    '**E) There is fewer traffic on this road after nine.**\n\n'
    '"Traffic" is uncountable, so "fewer traffic" fails. Fewer needs a plural countable noun. '
    'After nine the road has less traffic, not fewer traffic.\n\n'
    '**Trap:** fewer + mass noun echoes the countable rule but picks the wrong noun type.\n\n'
    'Traffic is uncountable, so fewer traffic is **false**: '
    '"There is less traffic on this road after nine."\n'
)

PATCHES[("en-g-11-16", 0)] = (
    '**A) My week got busier and busier as the festival approached.**\n\n'
    '"Busier and busier" correctly shows gradual increase with a repeated comparative as the festival nears. '
    'Adj-er and adj-er means steadily more. The week intensifies in one comparative system only.\n\n'
    'Busier and busier marks the week\'s steady climb toward the festival, so the wording is **true**.\n'
)

PATCHES[("en-g-11-16", 4)] = (
    '**E) The puzzle grew increasingly more difficult toward the end.**\n\n'
    '"Increasingly" already means more and more, so "increasingly more difficult" is redundant. '
    'Do not stack increasingly with more. Toward the end the puzzle simply grew increasingly difficult — or more and more difficult.\n\n'
    '**Trap:** increasingly more looks emphatic but restates the same booster twice.\n\n'
    'Increasingly already means more and more, so stacking more is **false**: '
    '"The puzzle grew increasingly difficult toward the end."\n'
)

PATCHES[("en-g-11-18", 1)] = (
    '**B) She prefers tea than coffee in the morning.**\n\n'
    'Prefer takes to, not than. Prefer … than is almost always wrong in exam English. '
    'Morning tea versus coffee still wants the locked to-frame.\n\n'
    '**Trap:** prefers … than borrows comparative than but prefer refuses that preposition.\n\n'
    'Prefer takes to, not than, so the morning drinks are **false**: '
    '"She prefers tea to coffee in the morning."\n'
)

PATCHES[("en-g-11-18", 2)] = (
    '**C) They would rather stay in than go out tonight.**\n\n'
    '"Would rather stay in than go out tonight" correctly contrasts two base-verb options. '
    'Would rather + bare infinitive + than + bare infinitive. Stay and go are parallel bare verbs under rather … than.\n\n'
    'Would rather … than … pairs two bare infinitives for tonight\'s choice, so the wording is **true**.\n'
)

PATCHES[("en-g-11-19", 3)] = (
    '**D) The second half was half as long than the opening act.**\n\n'
    'Write "half as long as," not "half as long than." Multipliers still need as … as even when the idea is reduction. '
    'The second half versus the opening act is scaled equality, not a plain comparative.\n\n'
    '**Trap:** half as … than is the reduction twin of as … than — wrong closer after a multiplier.\n\n'
    'Half as long than swaps the closer; multipliers still need as … as, so this is **false**: '
    '"The second half was half as long as the opening act."\n'
)

PATCHES[("en-g-11-20", 3)] = (
    '**D) He is easily the funniest host on the late-night shows.**\n\n'
    '"Easily the funniest host on the late-night shows" correctly strengthens a superlative ranking. '
    'Easily the + superlative is common in speech and exams. The late-night host field is a group, so funniest is the right grade.\n\n'
    'Easily the funniest intensifies a genuine superlative among late-night hosts, so the sentence is **true**.\n'
)

PATCHES[("en-g-11-20", 4)] = (
    '**E) That was by far a better concert than the one in March.**\n\n'
    '"By far a better concert than the one in March" can intensify a comparative when exactly two concerts are compared. '
    'By far works with both superlatives and clear two-item comparatives. March versus that night is a pair, so better after by far is allowed.\n\n'
    '**Tip:** by far works with both superlatives and clear two-item comparatives.\n\n'
    'By far a better … than correctly intensifies a clear two-concert comparative, so the wording is **true**.\n'
)

# Extra polish: 1E avoids "**true** version" inside a false closing
PATCHES[("en-g-11-01", 4)] = (
    '**E) She sings more better than she did at the school concert.**\n\n'
    '"Better" is already the irregular comparative of well/good, so "more better" stacks a second marker. '
    'Irregular comparatives never take an extra more. Keep only better before the than-clause about the school concert.\n\n'
    'Irregular better already carries the degree, so more better is **false** — '
    '"She sings better than she did at the school concert."\n'
)

# 19E: mid-body "**true** comparative" → genuine (closing already has **true**)
PATCHES[("en-g-11-19", 4)] = (
    '**E) Today feels slightly less humid than yesterday.**\n\n'
    '"Slightly less humid than yesterday" correctly softens a comparative of inferiority. '
    'Less + adjective + than remains available beside as … as patterns. Today versus yesterday is a genuine comparative, so than is right here.\n\n'
    'Slightly less humid than correctly softens today\'s humidity against yesterday, so the sentence is **true**.\n'
)

applied = []
for task in data["tasks"]:
    tid = task["id"]
    for i in range(5):
        key = (tid, i)
        if key in PATCHES:
            old = task["tactical_explanations"][i]
            new = PATCHES[key]
            if old == new:
                applied.append(f"{tid} {i}: UNCHANGED (already matched)")
            else:
                task["tactical_explanations"][i] = new
                applied.append(f"{tid} {'ABCDE'[i]}: patched")

p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# Re-validate verdicts
import re

missing = []
for task in data["tasks"]:
    for i, (expl, key) in enumerate(zip(task["tactical_explanations"], task["answer_key"])):
        parts = [x.strip() for x in expl.strip().split("\n\n") if x.strip()]
        closing = parts[-1]
        has_true = "**true**" in closing
        has_false = "**false**" in closing
        m = re.match(r"\*\*([A-E])\) (.+?)\*\*", parts[0], re.S)
        claim = m.group(2) if m else None
        stmt = task["statements"][i]
        ends_punct = stmt[-1] in ".?!"
        header_ok = (claim == stmt) if ends_punct else (claim == stmt + ".")
        issues = []
        if key and not has_true:
            issues.append("missing **true**")
        if (not key) and not has_false:
            issues.append("missing **false**")
        if not header_ok:
            issues.append("claim mismatch")
        if issues:
            missing.append((task["id"], "ABCDE"[i], issues, closing[:100]))

log = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\_audit_g11_patch_log.txt")
log.write_text(
    "APPLIED:\n" + "\n".join(applied) + "\n\nREMAINING VERDICT ISSUES:\n"
    + ("\n".join(f"{a} {b}: {c} | {d}" for a, b, c, d in missing) if missing else "(none)")
    + f"\n\nPatched count: {len(PATCHES)}\n",
    encoding="utf-8",
)
print(f"patched {len(PATCHES)}; remaining issues {len(missing)}; log {log}")
