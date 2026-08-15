# -*- coding: utf-8 -*-
"""Patch g.20.json punct/symbol Format-notes issues."""
from __future__ import annotations

import json
import re
from pathlib import Path

P = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\src\data\english\grammar_parts\g.20.json")
raw = P.read_text(encoding="utf-8-sig")
data = json.loads(raw)

# Exact string replacements inside tactical_explanations only
REPLACEMENTS: list[tuple[str, str]] = [
    # t2/E — become → quoted arrow transform
    (
        "The selection criteria is must become are printed.",
        '"The selection criteria is" → "The selection criteria are".',
    ),
    # t6/B, t9/B, t15/B, t19/B — equals → quoted arrow expansions
    (
        "Who's equals who has before the past participle been.",
        '"Who\'s" → "who has" before the past participle been.',
    ),
    (
        "Who's equals who is before attending.",
        '"Who\'s" → "who is" before attending.',
    ),
    (
        "Who's been equals who has been.",
        '"Who\'s been" → "who has been".',
    ),
    (
        "Who's attending equals who is attending.",
        '"Who\'s attending" → "who is attending".',
    ),
    # tip / form-pair arrows — keep →, quote sides where transform-like
    (
        "One item → criterion; several → criteria.",
        'one item → "criterion"; several → "criteria".',
    ),
    (
        "Subject influences object → affect.",
        '"subject influences object" → "affect".',
    ),
    (
        "Subject you plus verb choose → object whomever.",
        '"you choose someone" → object "whomever".',
    ),
    (
        "The host had invited someone → whomever.",
        '"the host had invited someone" → "whomever".',
    ),
    (
        "Furniture is typically uncountable here → less furniture (or fewer pieces of furniture).",
        'Mass reading here: "furniture" → "less furniture" (or "fewer pieces of furniture").',
    ),
    (
        "Mentors shortlist someone → object case.",
        '"mentors shortlist someone" → object case.',
    ),
    (
        "Confidence is influenced → will affect audience confidence.",
        '"confidence is influenced" → "will affect audience confidence".',
    ),
    (
        "Influence meaning → beginning to affect my morning runs.",
        '"influence meaning" → "beginning to affect my morning runs".',
    ),
    (
        "Innermost clause — who should review — is subject case → whoever you think should review it.",
        'Innermost clause (who should review) is subject case: "who should review" → "whoever you think should review it".',
    ),
    (
        "Influence on the timeline → will affect the project timeline.",
        '"influence on the timeline" → "will affect the project timeline".',
    ),
    (
        "Agency shortlisted someone → object case.",
        '"agency shortlisted someone" → object case.',
    ),
    (
        "One of + plural noun → singular verb for that one item.",
        '"one of" + plural noun → singular verb for that one item.',
    ),
    (
        "Approvals are countable → fewer formal approvals.",
        'Countable approvals: "approvals" → "fewer formal approvals".',
    ),
]

# Also fix duplicate Subject influences Object that appears twice — already covered by replace_all

n_tasks = len(data["tasks"])
hits = {old: 0 for old, _ in REPLACEMENTS}

for task in data["tasks"]:
    expls = task["tactical_explanations"]
    for i, expl in enumerate(expls):
        new = expl
        for old, rep in REPLACEMENTS:
            if old in new:
                hits[old] += new.count(old)
                new = new.replace(old, rep)
        expls[i] = new

missing = [old for old, c in hits.items() if c == 0]
multi = {old: c for old, c in hits.items() if c > 1}
log_lines = [
    "HITS " + repr({k: v for k, v in hits.items()}),
    "MISSING " + repr(missing),
    "MULTI " + repr(multi),
]

# Verify claim headers match statements exactly (period rule)
claim_issues = []
for ti, task in enumerate(data["tasks"]):
    for ei, (stmt, expl) in enumerate(zip(task["statements"], task["tactical_explanations"])):
        m = re.match(r"^\*\*([A-E])\)\s*(.+?)\*\*", expl.strip(), re.S)
        if not m:
            claim_issues.append((ti + 1, ei, "NO_CLAIM"))
            continue
        letter = m.group(1)
        claim_text = m.group(2)
        expected_letter = chr(65 + ei)
        if letter != expected_letter:
            claim_issues.append((ti + 1, ei, f"LETTER {letter}!={expected_letter}"))
        if stmt[-1] in ".?!":
            if claim_text != stmt:
                claim_issues.append((ti + 1, ei, f"CLAIM!=STMT"))
        else:
            if claim_text not in (stmt, stmt + "."):
                claim_issues.append((ti + 1, ei, f"CLAIM!=STMT soft"))

log_lines.append(f"claim_issues {len(claim_issues)}")
for c in claim_issues:
    log_lines.append(repr(c))

# Ban scan (statements + explanations)
BACKREF = re.compile(r"(?<!\\)\\[0-9]")
bans = []
for ti, task in enumerate(data["tasks"]):
    for si, stmt in enumerate(task["statements"]):
        loc = f"t{ti+1}/S{chr(65+si)}"
        if "\ufffd" in stmt or BACKREF.search(stmt) or "\\1" in stmt:
            bans.append(("STMT_BAN", loc, stmt[:60]))
        if re.search(r'(?i)Direct:\s*"[^"]+"\s+"[^"]+"', stmt) and "→" not in stmt:
            bans.append(("STMT_ARROW", loc, stmt[:60]))
    for ei, expl in enumerate(task["tactical_explanations"]):
        loc = f"t{ti+1}/E{chr(65+ei)}"
        if "\ufffd" in expl or BACKREF.search(expl) or "\\1" in expl:
            bans.append(("EXPL_BAN", loc, "backref/fffd"))
        if re.search(r"(?i)must become\s+(?![\"""])", expl):
            bans.append(("MUST_BECOME", loc, "still"))
        if re.search(r"(?i)\bWho's equals\b", expl):
            bans.append(("WHO_EQUALS", loc, "still"))
        m2 = re.search(
            r'(?i)(unpacks?|paraphrase[sd]?|equals?|becomes?|maps?)\s+[^.\"“]{0,60}\.\s+[A-Z]',
            expl,
        )
        if m2 and "→" not in m2.group(0):
            if re.search(r"(?i)\bequals?\b", m2.group(0)) and not re.search(
                r"(?i)\bequal\s+weight\b", m2.group(0)
            ):
                bans.append(("PARA_GAP", loc, m2.group(0)[:80]))
            elif re.search(r"(?i)\b(become|unpack|paraphrase|maps?)\b", m2.group(0)):
                bans.append(("PARA_GAP", loc, m2.group(0)[:80]))
        m = re.match(r"^(\*\*[A-E]\).+?\*\*)", expl.strip(), re.S)
        if m:
            claim = m.group(1).replace("\n", " ")
            if re.search(r'\."\.\*\*$', claim) or re.search(r'[.?!]\.\*\*$', claim):
                bans.append(("CLAIM_DBL", loc, claim[-70:]))

log_lines.append(f"bans {len(bans)}")
for b in bans:
    log_lines.append(repr(b))

P.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
log_lines.append(f"Wrote {P}")
log_lines.append(f"tasks {n_tasks}")
Path(__file__).with_name("_patch_g20_punct_log.txt").write_text("\n".join(log_lines), encoding="utf-8")
print("bans", len(bans), "missing", len(missing), "claims", len(claim_issues))
