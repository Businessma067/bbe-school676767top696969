#!/usr/bin/env python3
"""Rewrite unlocked Ch2–Ch3 tactical_explanations into math-panel free style.

Keeps TRUE — / FALSE — prefixes, varies 1–4 teaching paragraphs before the
closer, ends every letter with `So the statement is True.` / `False.`, and
leaves locked cases untouched.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
UNLOCK = {
    ROOT / "src/data/economics-cases-ch2-subtopics.json": 122,
    ROOT / "src/data/economics-cases-ch3-subtopics.json": 105,
}

PREFIX = re.compile(r"^(TRUE|FALSE)\s*[—–-]\s*", re.I)

DROP_SENT = re.compile(
    r"""^(
      The\ statement\ is\ (true|false)\.?
      |So\ the\ statement\ is\ (True|False)\.?
      |Held\ against\ the\ chapter\ test\b
      |Absolute\ wording\ is\ the\ trap\b
      |Nothing\ exotic\b
      |settle\ the\ letter\b
      |Keep\ the\ reason\ clause\b
      |The\ causal\ link\ is\ doing\ the\ teaching\ work\b
      |Score\ this\ letter\b
      |Nothing\ in\ the\ wording\ contradicts\b
      |If\ two\ readings\ seem\ plausible\b
      |Map\ that\ definition\ onto\ the\ case\b
      |Even\ if\ the\ stem\ mentions\ related\ details\b
      |Those\ details\ do\ not\ carry\ the\ claim
      |Under\ that\ (definition|classification)\ the\ (assertion|claim)\b
      |The\ sentence\ therefore\ reports\b
      |Those\ restricting\ words\ stretch\b
      |Once\ the\ defining\ feature\ is\ restored\b
      |The\ mislabelled\ category\ or\ reversed\ comparison\b
      |Swap\ in\ the\ textbook\ criterion\b
      |One\ clear\ counterexample\ under\ the\ right\ criterion\b
      |Keep\ that\ criterion\ in\ view\b
      |Apply\ the\ right\ criterion\ and\ reject\b
      |Nothing\ in\ the\ operative\ words\ needs\ stretching\b
      |That\ reading\ is\ what\ the\ definition\ is\ built\ to\ support\b
      |Connect\ the\ claim\ to\b
      |Sort\ the\ claim\ by\b
      |Evaluated\ against\ the\ textbook\ standard\b
      |The\ claim.?s\ actors\ and\ constraints\b
      |neighbouring\ idea\ with\ similar\ vocabulary\b
      |Nothing\ in\ the\ stem\ contradicts\ that\ reading\b
      |Nothing\ in\ the\ keyed\ reading\ contradicts\b
      |That\ because/?means\ bridge\b
      |part\ to\ defend\ on\ an\ exam\b
      |Words\ such\ as\ only/?never/?always\ stretch\b
      |The\ absolute\ quantifier\ is\ doing\ the\ damage\b
      |Restore\ the\ textbook\ test\ and\ the\ assertion\ falls\ away\b
      |A\ useful\ check\ is\ the\ opposite\ error\b
      |line\ up\ with\ the\ concept\b
    )""",
    re.I | re.X,
)

DROP_CLAUSE = re.compile(
    r"""\s*(
      Keep\ the\ reason\ clause:[^.]*\.
      |The\ causal\ link\ is\ doing\ the\ teaching\ work[^.]*\.
      |strip\ it\ out\ and\ the\ remaining\ label\ would\ be\ too\ thin\ to\ judge\.
      |Score\ this\ letter[^.]*\.
      |and\ revise\ from[^.]*\.
      |while\ revising\ that[^.]*\.
      |Map\ that\ definition\ onto\ the\ case[^.]*\.
      |Even\ if\ the\ stem\ mentions\ related\ details[^.]*\.
      |The\ claim.?s\ actors\ and\ constraints[^.]*\.
      |Nothing\ in\ the\ stem\ contradicts\ that\ reading[^.]*\.
      |Nothing\ in\ the\ keyed\ reading\ contradicts[^.]*\.
      |That\ because/?means\ bridge[^.]*\.
      |Words\ such\ as\ only/?never/?always\ stretch[^.]*\.
      |The\ absolute\ quantifier\ is\ doing\ the\ damage[^.]*\.
      |Restore\ the\ textbook\ test\ and\ the\ assertion\ falls\ away[^.]*\.
      |A\ useful\ check\ is\ the\ opposite\ error[^.]*\.
    )""",
    re.I | re.X,
)

SETUPS_T = [
    "Read the claim against the chapter definition.",
    "Check the wording on this letter against the usual test.",
    "Apply the chapter label to the sentence as written.",
    "Name the concept first, then test the claim.",
]
SETUPS_F = [
    "Read the claim against the chapter definition.",
    "The wording fights the usual test on this letter.",
    "Apply the chapter label — the mismatch shows quickly.",
    "Name the concept first, then spot where the claim slips.",
]

STOP = {
    "a",
    "an",
    "the",
    "and",
    "or",
    "of",
    "to",
    "in",
    "on",
    "for",
    "is",
    "are",
    "was",
    "were",
    "be",
    "as",
    "by",
    "with",
    "that",
    "this",
    "these",
    "those",
    "it",
    "its",
    "from",
    "at",
    "into",
    "not",
    "no",
    "only",
    "also",
    "than",
    "then",
    "when",
    "while",
    "because",
    "about",
    "over",
    "under",
    "after",
    "before",
    "between",
    "their",
    "they",
    "them",
    "his",
    "her",
    "have",
    "has",
    "had",
    "can",
    "may",
    "must",
    "does",
    "do",
    "did",
    "if",
    "so",
    "such",
    "any",
    "all",
    "each",
    "both",
    "more",
    "most",
    "other",
    "some",
    "very",
    "just",
    "but",
}


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", normalize_ws(text))
    out: list[str] = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        if not re.search(r"[.!?]$", p):
            p = p + "."
        out.append(p)
    return out


def tokens(s: str) -> set[str]:
    return {
        w
        for w in re.findall(r"[A-Za-z][A-Za-z'-]{2,}", s.lower())
        if w not in STOP
    }


def clean_body(raw: str, statement: str = "") -> list[str]:
    text = PREFIX.sub("", (raw or "").strip())
    text = re.sub(
        r"\s*So the statement is (True|False)\.?\s*$", "", text, flags=re.I
    )
    text = re.sub(
        r"\s*The statement is (true|false)\.?\s*$", "", text, flags=re.I
    )
    text = DROP_CLAUSE.sub(" ", text)
    kept: list[str] = []
    for s in sentences(text):
        one = normalize_ws(s)
        if DROP_SENT.match(one):
            continue
        if re.search(
            r"score this letter|keyed answer|published key|map that definition|"
            r"actors and constraints|neighbouring idea|because/?means bridge|"
            r"part to defend on an exam|keyed reading contradicts",
            one,
            re.I,
        ):
            continue
        if re.fullmatch(
            r"(Yes[,—-].*|That is (exactly )?how .+ works in this chapter\.)",
            one,
            re.I,
        ) and len(one.split()) < 12:
            continue
        kept.append(one)
    # Prefer denser / more statement-tied wording when two sentences largely repeat.
    tentative: list[str] = []
    tent_tok: list[set[str]] = []
    for s in kept:
        tok = tokens(s)
        replaced = False
        for i, prev in enumerate(tent_tok):
            if not tok or not prev:
                continue
            inter = len(tok & prev)
            jacc = inter / len(tok | prev)
            smaller = min(len(tok), len(prev))
            if jacc >= 0.5 or inter >= max(3, int(0.6 * smaller)):
                old = tentative[i]
                # Prefer higher statement overlap; break ties toward concrete contrast.
                new_score = (
                    len(tokens(statement) & tok),
                    (" not " in f" {s.lower()} "),
                    len(s),
                )
                old_score = (
                    len(tokens(statement) & tokens(old)),
                    (" not " in f" {old.lower()} "),
                    len(old),
                )
                if new_score > old_score:
                    tentative[i] = s
                    tent_tok[i] = tok
                replaced = True
                break
        if not replaced:
            key = s[:70].lower()
            if any(t[:70].lower() == key for t in tentative):
                continue
            tentative.append(s)
            tent_tok.append(tok)
    return tentative


def target_paras(case_idx: int, letter_idx: int, n_sents: int, diff: str) -> int:
    patterns = [
        (1, 2, 3, 2, 1),
        (2, 1, 2, 3, 2),
        (1, 3, 2, 1, 2),
        (2, 2, 1, 3, 4),
        (3, 1, 2, 2, 3),
        (1, 2, 4, 2, 1),
        (2, 3, 1, 2, 3),
        (1, 1, 2, 3, 2),
        (2, 1, 3, 1, 2),
        (3, 2, 1, 2, 4),
    ]
    pat = patterns[case_idx % len(patterns)]
    t = pat[letter_idx]

    # Prefer short only when material is thin; otherwise keep the pattern.
    if n_sents <= 1:
        t = 1
    elif n_sents == 2:
        t = min(t, 2)
    else:
        # With 3+ teaching sentences, avoid collapsing everything to 1 too often.
        if t == 1 and n_sents >= 4 and letter_idx in (1, 2, 4):
            t = 2
        if diff.startswith(("3/", "4/", "5/")) and n_sents >= 4:
            t = max(t, 2)
            if n_sents >= 5 and letter_idx == 2:
                t = max(t, 3)

    t = max(1, min(t, min(4, max(1, n_sents))))
    return t


def score_sent(sent: str, statement: str) -> float:
    st = tokens(statement)
    se = tokens(sent)
    overlap = len(st & se)
    # Prefer concrete / corrective / decision sentences over pure definitions.
    bonus = 0.0
    low = sent.lower()
    for cue in (
        "because",
        "therefore",
        "so ",
        "not ",
        "never",
        "still",
        "example",
        "counter",
        "claim",
        "wording",
        "household",
        "manager",
        "seasonal",
        "fails",
        "wrong",
        "false",
        "matches",
    ):
        if cue in low:
            bonus += 0.35
    # Mild penalty for very long definitional openers alone.
    if sent.startswith(
        (
            "Scarcity is the gap",
            "Exchange is any",
            "Labour covers all",
            "Human resources as",
            "Capital refers",
        )
    ):
        bonus -= 0.2
    return overlap + bonus + min(len(sent), 160) / 200.0


def pick_short(sents: list[str], statement: str) -> str:
    """One short statement-tied paragraph (~80–200 chars body)."""
    if not sents:
        return "The claim matches the chapter reading of this idea."

    ranked = sorted(
        range(len(sents)),
        key=lambda i: (-score_sent(sents[i], statement), i),
    )
    best_i = ranked[0]
    candidates: list[str] = []

    best = sents[best_i]
    if 80 <= len(best) <= 200:
        candidates.append(best)

    # Always consider first+best and best+neighbour pairs.
    for j in range(len(sents)):
        if j == best_i:
            continue
        ordered = sorted([best_i, j])
        pair = normalize_ws(sents[ordered[0]] + " " + sents[ordered[1]])
        if 80 <= len(pair) <= 260:
            candidates.append(pair)

    if len(sents) >= 2:
        pair = normalize_ws(sents[0] + " " + sents[1])
        if len(pair) <= 260:
            candidates.append(pair)
    if len(sents) >= 3:
        for k in ranked[:3]:
            if k == 0:
                continue
            pair = normalize_ws(sents[0] + " " + sents[k])
            if 90 <= len(pair) <= 280:
                candidates.append(pair)

    if candidates:
        def cand_score(c: str) -> float:
            # Strongly prefer statement overlap; soft preference for ~120–180 chars.
            return score_sent(c, statement) * 2 - abs(len(c) - 150) / 160.0

        return max(candidates, key=cand_score)

    if len(best) > 220:
        cut = best[:210]
        sp = cut.rfind(" ")
        if sp > 120:
            cut = cut[:sp].rstrip(",;:") + "."
        return cut
    if len(best) < 80 and len(sents) >= 2:
        return normalize_ws(sents[0] + " " + sents[1])
    # If still thin, append a second sentence when available.
    if len(best) < 80 and len(sents) >= 2:
        return normalize_ws(best + " " + sents[1 if best_i == 0 else 0])
    return best


def split_long_atom(a: str) -> tuple[str, str] | None:
    for sep in ("; ", " — ", " - ", ", "):
        mid = len(a) // 2
        pos = a.find(sep, max(0, mid - 50))
        if pos == -1:
            pos = a.rfind(sep, 0, mid + 50)
        if pos > 25:
            left = a[:pos].rstrip(",;:—- ") + "."
            right = a[pos + len(sep) :].lstrip()
            if right and not right[0].isupper():
                right = right[0].upper() + right[1:]
            if not re.search(r"[.!?]$", right):
                right = right.rstrip(".") + "."
            if len(left) >= 35 and len(right) >= 35:
                return left, right
    return None


def pack_paras(sents: list[str], n_para: int, statement: str) -> list[str]:
    if not sents:
        return ["The claim lines up with the chapter test on this letter."]
    if n_para <= 1:
        return [pick_short(sents, statement)]

    atoms = list(sents)
    # Grow atoms if we need more paragraphs than sentences.
    guard = 0
    while len(atoms) < n_para and guard < 6:
        guard += 1
        i = max(range(len(atoms)), key=lambda k: len(atoms[k]))
        spl = split_long_atom(atoms[i])
        if not spl:
            break
        left, right = spl
        atoms = atoms[:i] + [left, right] + atoms[i + 1 :]

    n_para = max(1, min(n_para, len(atoms), 4))
    if n_para == 1:
        return [pick_short(atoms, statement)]

    paras: list[str] = []
    base, rem = divmod(len(atoms), n_para)
    idx = 0
    for p in range(n_para):
        take = base + (1 if p < rem else 0)
        take = max(1, take)
        chunk = atoms[idx : idx + take]
        idx += take
        if not chunk:
            break
        paras.append(normalize_ws(" ".join(chunk)))
    # Drop empties / near-duplicates (including overlapping definition dumps)
    out: list[str] = []
    seen: set[str] = set()
    seen_tok: list[set[str]] = []
    for p in paras:
        key = p[:60].lower()
        if key in seen:
            continue
        tok = tokens(p)
        # Skip if largely repeating an earlier paragraph's vocabulary.
        dup = False
        for prev in seen_tok:
            if not tok or not prev:
                continue
            inter = len(tok & prev)
            jacc = inter / len(tok | prev)
            smaller = min(len(tok), len(prev))
            if jacc >= 0.45 or inter >= max(3, int(0.55 * smaller)):
                dup = True
                break
        if dup:
            continue
        seen.add(key)
        seen_tok.append(tok)
        out.append(p)
    return out[:4] or [pick_short(sents, statement)]


def maybe_setup(
    truth: bool, case_idx: int, letter_idx: int, n_para: int
) -> str | None:
    if n_para == 1:
        return None
    if (case_idx + letter_idx) % 3 != 0:
        return None
    # Skip setup when we already have 4 teaching paras (keep closer-side clean).
    if n_para >= 4:
        return None
    pool = SETUPS_T if truth else SETUPS_F
    return pool[(case_idx + 2 * letter_idx) % len(pool)]


def rewrite_expl(
    expl: str,
    truth: bool,
    statement: str,
    case_idx: int,
    letter_idx: int,
    diff: str,
) -> str:
    want = "TRUE" if truth else "FALSE"
    closer = (
        "So the statement is True." if truth else "So the statement is False."
    )
    sents = clean_body(expl, statement)
    if not sents:
        cue = normalize_ws(statement or "this claim")
        if len(cue) > 90:
            cue = cue[:87].rstrip() + "…"
        if truth:
            sents = [
                f"The wording “{cue}” matches how the chapter defines the idea."
            ]
        else:
            sents = [
                f"The wording “{cue}” collides with the chapter definition; a corrected reading rejects it."
            ]

    n_para = target_paras(case_idx, letter_idx, len(sents), diff or "2/5")
    paras = pack_paras(sents, n_para, statement)
    setup = maybe_setup(truth, case_idx, letter_idx, len(paras))

    blocks: list[str] = []
    if setup:
        blocks.append(setup)
    blocks.extend(paras)
    if len(blocks) > 5:
        blocks = blocks[:5]

    body = "\n\n".join(blocks)
    return f"{want} — {body}\n\n{closer}"


def main() -> None:
    for path, n in UNLOCK.items():
        data = json.loads(path.read_text())
        assert n == int(len(data) * 0.35), (path, n, int(len(data) * 0.35))
        # Snapshot locked bodies for integrity check.
        locked_before = [
            list(c["tactical_explanations"]) for c in data[n:]
        ]
        for i in range(n):
            case = data[i]
            diff = str(case.get("difficulty_level") or "2/5")
            case["tactical_explanations"] = [
                rewrite_expl(
                    case["tactical_explanations"][j],
                    bool(case["answer_key"][j]),
                    case["statements"][j],
                    i,
                    j,
                    diff,
                )
                for j in range(5)
            ]
        for i, before in enumerate(locked_before):
            assert data[n + i]["tactical_explanations"] == before

        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")

        # Stats
        hist: dict[int, int] = {}
        short = mid = long_ = 0
        bad_pref = bad_close = 0
        within_flat = 0
        for i, case in enumerate(data[:n]):
            counts = []
            for j, expl in enumerate(case["tactical_explanations"]):
                truth = case["answer_key"][j]
                pref = "TRUE —" if truth else "FALSE —"
                closer = (
                    "So the statement is True."
                    if truth
                    else "So the statement is False."
                )
                if not expl.startswith(pref):
                    bad_pref += 1
                if not expl.rstrip().endswith(closer):
                    bad_close += 1
                body = PREFIX.sub("", expl)
                body = re.sub(
                    r"\n*\s*So the statement is (True|False)\.?\s*$",
                    "",
                    body,
                    flags=re.I,
                ).strip()
                paras = [p for p in re.split(r"\n\s*\n", body) if p.strip()]
                hist[len(paras)] = hist.get(len(paras), 0) + 1
                counts.append(len(paras))
                L = len(body)
                if L <= 220:
                    short += 1
                elif L <= 480:
                    mid += 1
                else:
                    long_ += 1
            if len(set(counts)) == 1:
                within_flat += 1
        print(
            f"{path.name}: unlocked {n}/{len(data)} "
            f"para_hist={hist} lens={short}/{mid}/{long_} "
            f"flat_cases={within_flat} bad_pref={bad_pref} bad_close={bad_close}"
        )


if __name__ == "__main__":
    main()
