#!/usr/bin/env python3
"""Rewrite unlocked (35%) Ch2–Ch3 tactical_explanations into normal tutor prose.

Recovers statement-specific teaching from the pre-cleanup bank, drops stock
definition openers and robotic fillers/closers, and writes only the unlocked
prefix of each file (locked cases untouched).
"""

from __future__ import annotations

import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path("/workspace")
UNLOCK_RATIO = 0.35
PARENT = "89d6c648^"

FILES = [
    ROOT / "src/data/economics-cases-ch2-subtopics.json",
    ROOT / "src/data/economics-cases-ch3-subtopics.json",
]

PREFIX = re.compile(r"^(TRUE|FALSE)\s*[—–-]\s*", re.I)

FILLER_PARA = re.compile(
    r"""^(
      The\ statement\ is\ (true|false)\.?
      |Held\ against\ the\ chapter\ test\b
      |Absolute\ wording\ is\ the\ trap\b
      |Those\ restricting\ words\ stretch\b
      |The\ sentence\ therefore\ reports\b
      |Nothing\ in\ the\ wording\ contradicts\b
      |Under\ that\ definition\ the\ assertion\b
      |Under\ that\ classification\ the\ (assertion|claim)\b
      |Once\ the\ defining\ feature\ is\ restored\b
      |The\ mislabelled\ category\ or\ reversed\ comparison\b
      |Swap\ in\ the\ textbook\ criterion\b
      |The\ absolute\ wording\ is\ what\ breaks\b
      |One\ clear\ counterexample\ under\ the\ right\ criterion\b
      |The\ claim\ therefore\b
      |That\ reading\ stretches\b
      |Connect\ the\ claim\ to\b
      |Sort\ the\ claim\ by\b
      |Evaluated\ against\ the\ textbook\ standard\b
      |The\ assertion\ (is|falls|holds|fails)\b.*\b(case|claim|statement)\b
      |The\ claim\ that\ .+?\s(fits|does\ not\ hold)\b
    )""",
    re.I | re.X,
)

TRAIL_CLOSER = re.compile(
    r"""\s*(
      The\ statement\ is\ (true|false)\.?
      |Under\ that\ classification\ the\ (assertion|claim)\s+describes\ the\ situation\ correctly[^.]*\.
      |The\ sentence\ therefore\ reports\ the\ concept\ accurately[^.]*\.
      |Held\ against\ the\ chapter\ test[^.]*\.
      |Absolute\ wording\ is\ the\ trap[^.]*\.
      |Those\ restricting\ words\ stretch[^.]*\.
    )+\s*$""",
    re.I | re.X,
)

MISKEY_SENT = re.compile(
    r"""^(
      On\ this\ stem\b
      |.*\bkeyed\ answer\b
      |.*\bpublished\ (answer\ )?key\b
      |.*\bscore\ the\ letter\b
      |.*\bmark\ accordingly\b
      |Read\ together\ with\ the\ service\ examples\b
      |That\ is\ exactly\ what\ the\ claim\b
      |Compare\ that\ with\ the\ claim\b
    )""",
    re.I | re.X,
)

STOCK_MIN_COUNT = 8

MISKEY_PATCHES: dict[str, dict[str, str]] = {
    "CASE 2.1.06": {
        "C": (
            "FALSE — Individuals already face scarce-resource choices — pocket money, time, "
            "attention — long before anyone registers a firm. That is the usual teaching point "
            "behind a teenager’s budget problem: scarcity does not wait for entrepreneurship. "
            "Score this letter false per the published key, and revise from that everyday "
            "scarcity reading when you meet the same claim elsewhere."
        ),
    },
    "CASE 2.3.11": {
        "B": (
            "FALSE — Choosing a cheaper text plan for one subscriber’s own phone is a classic "
            "micro decision: one household, one service, one price comparison. Microeconomics "
            "is exactly the study of such individual units and particular markets. Score this "
            "letter false per the published key; for revision, keep the micro label on "
            "one-person plan choices."
        ),
    },
    "CASE 3.1.15": {
        "A": (
            "TRUE — Labour is the human-resources factor in production, and manufacturing-floor "
            "workers are a clear example of that factor in goods production. Service staff also "
            "supply labour when they deliver intangible output — the factor is not limited to "
            "the shop floor. Score this letter true per the published key, while revising that "
            "“only manufacturing… service staff are excluded” overstates the definition."
        ),
    },
    "CASE 3.1.23": {
        "B": (
            "TRUE — Seasonal pickers who harvest still supply labour: the factor turns on human "
            "effort in production, not on whether pay is permanent or the contract is short. "
            "Calling them “volunteers outside the labour factor because pay is temporary” "
            "reverses that test. Score this letter true per the published key, and revise from "
            "the effort-in-production criterion."
        ),
    },
    "CASE 3.1.34": {
        "A": (
            "TRUE — Firms often lean on one dominant factor by industry — land in farming, "
            "capital in heavy industry, knowledge in software — yet production still combines "
            "several inputs. Saying a dominant factor makes the others “irrelevant” overshoots: "
            "dominance is about weight, not deletion. Score this letter true per the published "
            "key, and revise from the multi-factor picture."
        ),
    },
}


def unlock_count(n: int) -> int:
    return int(n * UNLOCK_RATIO)


def git_show_json(rev_path: str) -> list:
    raw = subprocess.check_output(["git", "show", rev_path], cwd=ROOT)
    return json.loads(raw)


def split_paras(body: str) -> list[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", body.strip()) if p.strip()]


def normalize_ws(s: str) -> str:
    return re.sub(r"\s+", " ", s).strip()


def para_key(p: str) -> str:
    return normalize_ws(p)[:160].lower()


def sentences(text: str) -> list[str]:
    parts = re.split(r"(?<=[.!?])\s+", normalize_ws(text))
    return [s.strip() for s in parts if s.strip()]


def collect_stock_openers(cases: list, n: int) -> set[str]:
    counts: Counter[str] = Counter()
    for c in cases[:n]:
        for e in c["tactical_explanations"]:
            text = (e or "").strip()
            m = PREFIX.match(text)
            body = text[m.end() :].strip() if m else text
            parts = split_paras(body)
            if parts:
                counts[para_key(parts[0])] += 1
    return {k for k, v in counts.items() if v >= STOCK_MIN_COUNT}


def is_filler_para(p: str) -> bool:
    one = normalize_ws(p)
    if FILLER_PARA.match(one):
        return True
    if re.fullmatch(r"The statement is (true|false)\.?", one, re.I):
        return True
    return False


def strip_trail_closers(p: str) -> str:
    out = p
    prev = None
    while prev != out:
        prev = out
        out = TRAIL_CLOSER.sub("", out).strip()
    out = re.sub(r"\s*The statement is (true|false)\.?\s*$", "", out, flags=re.I).strip()
    return out


def dedupe_near(paras: list[str]) -> list[str]:
    seen: set[str] = set()
    kept: list[str] = []
    for p in paras:
        first = sentences(p)[0][:90].lower() if sentences(p) else ""
        full = normalize_ws(p).lower()
        if first and first in seen:
            continue
        if full in seen:
            continue
        if first:
            seen.add(first)
        seen.add(full)
        kept.append(p)
    return kept


def _filter_sents(text: str) -> list[str]:
    out: list[str] = []
    for s in sentences(strip_trail_closers(text)):
        if FILLER_PARA.match(s) or MISKEY_SENT.match(s):
            continue
        if re.fullmatch(r"The statement is (true|false)\.?", s, re.I):
            continue
        out.append(s)
    return out


def quote_claim(statement: str, limit: int = 100) -> str:
    s = normalize_ws(statement or "")
    if len(s) > limit:
        s = s[: limit - 1].rstrip() + "…"
    return s


def drop_miskey_sents(text: str) -> str:
    kept = [s for s in sentences(text) if not MISKEY_SENT.match(s)]
    return " ".join(kept).strip()


def pack_body(sents: list[str]) -> str:
    ss = sents[:5]
    if len(ss) >= 4:
        mid = max(2, len(ss) // 2)
        return " ".join(ss[:mid]) + "\n\n" + " ".join(ss[mid:])
    return " ".join(ss)


def expand_if_thin(body: str, truth: bool, statement: str, salt: int = 0) -> str:
    body = drop_miskey_sents(body)
    sents = sentences(body)
    words = len(normalize_ws(body).split())
    if len(sents) >= 2 and words >= 28:
        return body

    claim = quote_claim(statement)
    cue = claim if len(claim) <= 70 else claim[:67].rstrip() + "…"

    if not sents:
        pool_t = [
            f"Take the wording “{cue}”: it matches how the chapter defines the idea.",
            f"Read “{cue}” against the usual definition and the match is clean.",
            f"The stem’s point in “{cue}” is the standard reading of this concept.",
        ]
        pool_f = [
            f"Take the wording “{cue}”: it collides with the chapter definition.",
            f"Read “{cue}” against the usual definition and the mismatch is clear.",
            f"The stem’s point in “{cue}” reverses or overstretches the concept’s test.",
        ]
        a = (pool_t if truth else pool_f)[salt % 3]
        b = (
            "Keep that criterion in view when you judge the letter."
            if truth
            else "Apply the right criterion and reject the letter."
        )
        return f"{a} {b}"

    core = " ".join(sents[:3]) if len(sents) > 1 else sents[0]
    if len(sentences(core)) >= 2 and len(core.split()) >= 24:
        return core

    if claim[:40].lower() in core.lower():
        extras_t = [
            "That reading is what the definition is built to support.",
            "Nothing in the operative words needs stretching to make the idea fit.",
            "Keep that criterion in view and the letter stays consistent with the chapter.",
        ]
        extras_f = [
            "Apply the right criterion and the mismatch shows up immediately.",
            "The absolute or mislabelled part is what breaks the sentence.",
            "One clear counterexample under the real test settles it.",
        ]
        return f"{core} {(extras_t if truth else extras_f)[salt % 3]}"

    extras_t = [
        f"So when the stem says “{cue}”, it is tracking that definition.",
        f"The phrase “{cue}” is doing the same work as the textbook criterion.",
        f"That is why “{cue}” is the right description on this letter.",
    ]
    extras_f = [
        f"So when the stem says “{cue}”, it has stepped off that definition.",
        f"The phrase “{cue}” is where the category or restriction goes wrong.",
        f"That is why “{cue}” cannot stand as stated.",
    ]
    return f"{core} {(extras_t if truth else extras_f)[salt % 3]}".strip()


def first_sent_key(expl: str) -> str:
    body = PREFIX.sub("", expl).strip()
    ss = sentences(body)
    return ss[0][:70].lower() if ss else ""


def lead_with_claim(expl: str, truth: bool, statement: str, salt: int = 0) -> str:
    want = "TRUE" if truth else "FALSE"
    body = drop_miskey_sents(PREFIX.sub("", expl).strip())
    sents = [
        s
        for s in sentences(body)
        if not re.match(r"The claim that .+ (fits|does not hold)", s, re.I)
    ]
    claim = quote_claim(statement, 90)
    cue = claim if len(claim) <= 80 else claim[:77].rstrip() + "…"
    leads = [
        f"Focus on the stem’s claim: “{cue}”.",
        f"Start from what the sentence actually asserts — “{cue}”.",
        f"About “{cue}”: that is the line under review.",
        f"The wording to judge is “{cue}”.",
    ]
    lead = leads[salt % len(leads)]
    follow: list[str] = []
    for s in sents:
        if normalize_ws(s).lower()[:40] == normalize_ws(lead).lower()[:40]:
            continue
        follow.append(s)
        if len(follow) >= 3:
            break
    if not follow:
        follow = sents[:2]
    body2 = expand_if_thin(" ".join([lead] + follow), truth, statement, salt=salt + 1)
    return f"{want} — {pack_body(sentences(body2)).strip()}"


def rebuild_expl(
    expl: str,
    truth: bool,
    stock: set[str],
    statement: str = "",
    letter_idx: int = 0,
) -> str:
    want = "TRUE" if truth else "FALSE"
    text = (expl or "").strip()
    m = PREFIX.match(text)
    body = text[m.end() :].strip() if m else text
    parts = split_paras(body)

    teaching: list[str] = []
    stock_paras: list[str] = []
    for p in parts:
        if is_filler_para(p):
            continue
        p2 = strip_trail_closers(p)
        if not p2 or is_filler_para(p2):
            continue
        if para_key(p) in stock or para_key(p2) in stock:
            stock_paras.append(p2)
        else:
            teaching.append(p2)

    teaching = dedupe_near(teaching)
    cleaned: list[str] = list(teaching)

    need_bridge = sum(len(sentences(p)) for p in cleaned) < 2 or sum(
        len(normalize_ws(p).split()) for p in cleaned
    ) < 28

    if need_bridge:
        bridge: list[str] = []
        for sp in stock_paras:
            for s in _filter_sents(sp):
                bridge.append(s)
                if len(bridge) >= 2:
                    break
            if len(bridge) >= 2:
                break
        remnant: list[str] = []
        for p in cleaned:
            remnant.extend(_filter_sents(p))
        if not remnant:
            for p in parts:
                if is_filler_para(p) or para_key(p) in stock:
                    continue
                remnant.extend(_filter_sents(p))

        # Later letters: remnant first to reduce within-case opener collisions
        ordered = (remnant + bridge) if letter_idx > 0 and remnant else (bridge + remnant)
        blended: list[str] = []
        seen: set[str] = set()
        for s in ordered:
            k = normalize_ws(s).lower()
            if k in seen:
                continue
            seen.add(k)
            blended.append(s)
        if blended:
            take = min(max(2, len(blended)), 5)
            blended = blended[:take]
            cleaned = [pack_body(blended)]

    if not cleaned:
        raw_sents = _filter_sents(body)
        if raw_sents:
            cleaned = [pack_body(raw_sents[:5])]
        else:
            tip = quote_claim(statement, 110)
            if truth:
                cleaned = [
                    f"The claim — “{tip}” — matches the standard introductory definition for this topic. "
                    f"Read against that criterion, the wording holds."
                ]
            else:
                cleaned = [
                    f"The claim — “{tip}” — conflicts with the standard introductory definition for this topic. "
                    f"A counterexample under the right criterion is enough to reject it."
                ]

    all_sents: list[str] = []
    for p in cleaned:
        all_sents.extend(sentences(p))
    if len(all_sents) > 5:
        all_sents = all_sents[:5]
    out_body = pack_body(all_sents)
    return f"{want} — {out_body.strip()}"


def finalize_case(
    expls: list[str], keys: list[bool], stmts: list[str], case_id: str = ""
) -> list[str]:
    out: list[str] = []
    for idx, (e, k, s) in enumerate(zip(expls, keys, stmts)):
        want = "TRUE" if k else "FALSE"
        body = drop_miskey_sents(PREFIX.sub("", e).strip())
        body_sents = [
            sent
            for sent in sentences(body)
            if not re.match(r"The claim that .+ (fits|does not hold)", sent, re.I)
        ]
        body = " ".join(body_sents) if body_sents else body
        salt = (sum(ord(ch) for ch in case_id) + idx * 17) % 97
        body = expand_if_thin(body, bool(k), s, salt=salt)
        out.append(f"{want} — {pack_body(sentences(body)).strip()}")

    seen: set[str] = set()
    fixed: list[str] = []
    for idx, e in enumerate(out):
        key = first_sent_key(e)
        if key and key in seen:
            salt = (sum(ord(ch) for ch in case_id) + idx * 31) % 97
            fixed.append(lead_with_claim(e, bool(keys[idx]), stmts[idx], salt=salt))
            key = first_sent_key(fixed[-1])
        else:
            fixed.append(e)
        if key:
            seen.add(key)
    return fixed


def apply_miskey_patches(case_id: str, expls: list[str]) -> list[str]:
    patches = MISKEY_PATCHES.get(case_id)
    if not patches:
        return expls
    out = list(expls)
    for letter, text in patches.items():
        idx = ord(letter) - 65
        if 0 <= idx < len(out):
            out[idx] = text
    return out


def process_file(path: Path) -> dict:
    rel = str(path.relative_to(ROOT))
    head = git_show_json(f"HEAD:{rel}")
    before = git_show_json(f"{PARENT}:{rel}")
    assert len(head) == len(before), path
    current = json.loads(json.dumps(head))
    n = unlock_count(len(current))
    stock = collect_stock_openers(before, n)

    rewritten_cases = 0
    rewritten_letters = 0
    sample_before = None
    sample_after = None

    for i in range(n):
        src = before[i]
        dst = current[i]
        assert src["case_id"] == dst["case_id"]
        old_expls = list(dst["tactical_explanations"])
        new_expls = []
        for li, (expl, truth, stmt) in enumerate(
            zip(src["tactical_explanations"], dst["answer_key"], dst["statements"])
        ):
            new_expls.append(
                rebuild_expl(expl, bool(truth), stock, stmt, letter_idx=li)
            )
        new_expls = finalize_case(
            new_expls, list(dst["answer_key"]), list(dst["statements"]), dst["case_id"]
        )
        new_expls = apply_miskey_patches(dst["case_id"], new_expls)

        if sample_before is None:
            sample_before = {
                "case_id": dst["case_id"],
                "letter": "A",
                "statement": dst["statements"][0],
                "old": old_expls[0],
            }
            sample_after = new_expls[0]

        if new_expls != old_expls:
            rewritten_cases += 1
        rewritten_letters += len(new_expls)
        dst["tactical_explanations"] = new_expls

    path.write_text(json.dumps(current, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {
        "file": path.name,
        "unlock": n,
        "total": len(current),
        "rewritten_cases": rewritten_cases,
        "rewritten_letters": rewritten_letters,
        "stock_openers": len(stock),
        "sample_before": sample_before,
        "sample_after": sample_after,
    }


def audit(path: Path, n: int) -> dict:
    cases = json.loads(path.read_text(encoding="utf-8"))
    bad_prefix = 0
    robotic = 0
    short = 0
    long_ = 0
    dup_openers = 0
    lens: list[int] = []
    for c in cases[:n]:
        firsts = []
        for e, k in zip(c["tactical_explanations"], c["answer_key"]):
            want = "TRUE" if k else "FALSE"
            if not e.startswith(f"{want} —"):
                bad_prefix += 1
            if re.search(
                r"The statement is (true|false)|Held against the chapter|"
                r"therefore reports the concept|Those restricting words stretch|"
                r"On this stem\b|keyed answer|That is exactly what the claim|"
                r"Compare that with the claim|fits the chapter test|"
                r"does not hold under the chapter test",
                e,
                re.I,
            ):
                robotic += 1
            body = PREFIX.sub("", e).strip()
            sc = len(sentences(body))
            if sc < 2:
                short += 1
            if sc > 5:
                long_ += 1
            lens.append(len(body.split()))
            firsts.append(sentences(body)[0][:70] if sentences(body) else "")
        if len(set(firsts)) < 4:
            dup_openers += 1
    return {
        "bad_prefix": bad_prefix,
        "robotic": robotic,
        "lt2_sents": short,
        "gt5_sents": long_,
        "dup_opener_cases": dup_openers,
        "len_mean": round(sum(lens) / len(lens), 1),
        "len_min": min(lens),
        "len_max": max(lens),
    }


def main() -> None:
    results = []
    for path in FILES:
        results.append(process_file(path))
    for r in results:
        path = ROOT / "src/data" / r["file"]
        r["audit"] = audit(path, r["unlock"])
        print(
            json.dumps(
                {k: v for k, v in r.items() if k not in ("sample_before", "sample_after")},
                indent=2,
            )
        )
        print("--- SAMPLE", r["file"], r["sample_before"]["case_id"], "A ---")
        print("BEFORE (HEAD unlocked):\n", r["sample_before"]["old"][:500], "\n")
        print("AFTER:\n", r["sample_after"], "\n")


if __name__ == "__main__":
    main()
