#!/usr/bin/env python3
"""
Rewrite Part 3 steps for math-11-81..123 to Ch13 font style.

Gold pattern:
  $PV_1 = 42,000 \\times (1.06)^{-3} = 42,000/1.191016 \\approx \\$35,264.01$.
  Needed: $PV_2 = 100,000 - 35,264.01 = \\$64,735.99$.
  At $r = 8\\%$: $K_2 = ...$.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / "src" / "data" / "math-ch11-financial.ts"
DUMP = Path(__file__).resolve().parent / "_ch11_part3_dump.json"

TEX = r"approx|times|leq|geq|ln|log|frac|quad|mathrm|cdot|div|sqrt|left|right|infty|mid|to|rightarrow|Rightarrow"

# Words that end a math span when seen as a whole token
STOP = {
    "the", "is", "of", "at", "not", "than", "which", "over", "under", "so",
    "and", "or", "for", "as", "an", "a", "to", "in", "on", "by", "from",
    "into", "with", "between", "them", "their", "its", "this", "that",
    "these", "those", "would", "were", "was", "are", "has", "have", "does",
    "did", "also", "still", "indeed", "instead", "well", "far", "about",
    "more", "less", "larger", "smaller", "above", "below", "exactly",
    "nowhere", "near", "half", "double", "first", "second", "third",
    "fourth", "fifth", "full", "after", "before", "during", "each",
    "every", "both", "then", "now", "yes", "no", "true", "false",
    "interest", "earned", "lower", "higher", "rate", "years", "year",
    "months", "month", "extending", "horizon", "doubling", "since",
    "directly", "needed", "compare", "comparing", "gap", "difference",
    "total", "deposits", "payments", "payment", "principal", "balance",
    "raising", "shortening", "exceeds", "exceed", "gives", "giving",
    "matching", "within", "confirms", "confirming", "consistent",
    "ranking", "growth", "factor", "multiple", "return", "required",
    "nominal", "effective", "periodic", "combined", "immediate",
    "deferred", "perpetuity", "annuity", "due", "ordinary", "maintenance",
    "lease", "asking", "price", "margin", "cushion", "fair", "stock",
    "trades", "dividend", "cut", "drop", "approaches", "shrinks",
    "undefined", "breaks", "model", "entirely", "infinity", "toward",
    "driving", "result", "using", "mistake", "understates", "overstating",
    "overstates", "naively", "halved", "proportionally", "lump", "sum",
    "cash", "cheaper", "preferred", "schedule", "component", "step",
    "option", "deal", "strategy", "account", "figure", "amount", "target",
    "original", "correct", "wrong", "claimed", "stated", "period",
    "continuous", "compounding", "discounting", "present", "future",
    "value", "values", "installment", "instalment", "loan", "debt",
    "remaining", "carrying", "forward", "final", "smallest", "integer",
    "satisfying", "condition", "valued", "actually", "paid", "true",
    "mistakenly", "treated", "incorrect", "overstating", "though",
    "comes", "very", "close", "overtaking", "becomes", "become",
    "flipped", "compared", "case", "remains", "cheapest", "all",
    "three", "both", "rates", "later", "progressively", "time",
    "earn", "unlike", "compounds", "investing", "discrete", "annual",
    "monthly", "quarterly", "semi-annual", "falls", "short", "always",
    "holds", "shifting", "earlier", "simply", "multiplies", "extra",
    "check", "identity", "any", "without", "bound", "limit", "grows",
    "falls", "rose", "large", "increase", "but", "if", "when", "while",
    "because", "despite", "equal", "contributions", "hallmark",
    "compound", "ever-larger", "accumulated", "passes", "block",
    "blocks", "period's", "periods", "five", "six", "seven", "eight",
    "nine", "ten", "twelve", "fifteen", "twenty", "thirty", "forty",
    "hundred", "points", "point", "percentage", "points", "higher",
    "lower", "not", "more", "less", "larger", "smaller", "well",
    "short", "above", "below", "far", "about", "approximately",
    "roughly", "nearly", "quite", "just", "only", "even", "much",
    "slightly", "considerably", "significantly", "rather", "versus",
    "vs", "against", "across", "throughout", "within", "outside",
    "inside", "here", "there", "where", "what", "who", "how", "why",
    "can", "could", "should", "must", "may", "might", "will", "shall",
    "being", "been", "having", "doing", "making", "taking", "getting",
    "going", "coming", "looking", "seeing", "knowing", "thinking",
    "saying", "telling", "asking", "trying", "using", "working",
    "need", "needs", "want", "wants", "like", "likes", "such",
    "same", "other", "another", "own", "new", "old", "good", "bad",
    "great", "small", "big", "long", "short", "high", "low", "next",
    "last", "few", "many", "some", "most", "several", "various",
    "different", "similar", "general", "specific", "particular",
    "certain", "sure", "clear", "obvious", "possible", "impossible",
    "available", "necessary", "important", "significant", "relevant",
    "valid", "invalid", "unique", "common", "rare", "typical",
    "standard", "basic", "advanced", "simple", "complex", "easy",
    "hard", "difficult", "fast", "slow", "early", "late", "soon",
    "already", "yet", "again", "once", "twice", "often", "sometimes",
    "always", "never", "ever", "almost", "enough", "too", "very",
    "quite", "rather", "pretty", "fairly", "extremely", "highly",
    "completely", "totally", "entirely", "fully", "partly", "partially",
    "mainly", "mostly", "largely", "primarily", "especially",
    "particularly", "specifically", "generally", "usually", "normally",
    "typically", "actually", "really", "indeed", "certainly", "probably",
    "perhaps", "maybe", "possibly", "likely", "unlikely", "apparently",
    "clearly", "obviously", "simply", "merely", "just", "only", "even",
    "also", "too", "either", "neither", "both", "all", "none", "any",
    "some", "many", "much", "more", "most", "less", "least", "few",
    "fewer", "little", "less", "enough", "several", "various",
    "HIGHER", "LOWER", "NOT", "MORE", "LESS", "LARGER", "SMALLER",
    "EXCEEDS", "TRUE", "FALSE", "SECOND", "FIRST", "FASTER",
}


def fix_scars(s: str) -> str:
    s = re.sub(rf"\\{{3,}}({TEX}|%)", r"\\\\\1", s)
    prev = None
    while prev != s:
        prev = s
        s = re.sub(r"(\d)\$, \$(\d)", r"\1,\2", s)
        s = re.sub(r"(\d)\$,\s*\$(\d)", r"\1,\2", s)
    return s


def protect(s: str) -> tuple[str, list[str]]:
    cur: list[str] = []

    def save(m: re.Match[str]) -> str:
        cur.append(m.group(0))
        return f"¤{len(cur)-1}¤"

    return re.sub(r"\\\$", save, s), cur


def restore(s: str, cur: list[str]) -> str:
    for i, c in enumerate(cur):
        s = s.replace(f"¤{i}¤", c)
    return s


def digits_outside(s: str) -> bool:
    t = s.replace("\\$", "")
    t = re.sub(r"\$[^$]*\$", "", t)
    return bool(re.search(r"\d", t))


def is_stop_token(tok: str) -> bool:
    bare = tok.strip(".,;:()[]\"'")
    if not bare:
        return False
    if bare in STOP or bare.lower() in STOP:
        return True
    # hyphenated prose
    if "-" in bare and all(p.lower() in STOP or not p for p in bare.split("-")):
        return True
    return False


def is_mathish_token(tok: str) -> bool:
    if not tok:
        return False
    if re.search(r"\d|¤|\\|[=+^*/]|×|·", tok):
        return True
    # short math identifiers / TeX
    if re.match(
        r"^(?:\\mathrm\{[^}]+\}|[A-Za-z][A-Za-z0-9]*(?:_\{?[A-Za-z0-9]+\}?|\([^)]*\))?)$",
        tok,
    ):
        return True
    return False


def tokenize(s: str) -> list[str]:
    """Split into whitespace-separated tokens, keeping punctuation attached."""
    return s.split()


def join_math(tokens: list[str]) -> str:
    return " ".join(tokens)


def rewrite_flat(flat: str) -> str:
    """Rebuild flat (no $) text into Ch13 prose/math mixture."""
    flat = flat.strip().rstrip(".")
    if not flat:
        return flat

    # Normalize awkward colon-results into equations
    flat = re.sub(
        r"^(Interest earned(?:[^:]{0,40})?)\s+is\s+(.+?):\s*(.+)$",
        r"\1: \2 = \3",
        flat,
        flags=re.I,
    )
    flat = re.sub(
        r"^(Total (?:deposits|nominal withdrawals|Option-\d payments|Strategy-\w deposits)[^:]{0,60}?)\s+are\s+(.+?):\s*(.+)$",
        r"\1: \2 = \3",
        flat,
        flags=re.I,
    )
    flat = re.sub(
        r"^(The gap between them)\s+is\s+",
        r"\1: ",
        flat,
        flags=re.I,
    )
    flat = re.sub(r"^(The gap)\s+is\s+", r"Gap: ", flat, flags=re.I)
    flat = re.sub(r"^Gap is\s+", "Gap: ", flat, flags=re.I)
    # PV_2 needed =
    flat = re.sub(
        r"^(?:\\mathrm\{)?PV_?([0-9])\}?\s+needed\s*=\s*",
        r"Needed: PV_\1 = ",
        flat,
        flags=re.I,
    )
    # Math var labeled with colon → equals
    flat = re.sub(
        r"^((?:\\mathrm\{[A-Za-z]+\}|[A-Za-z][A-Za-z0-9]*)(?:_\{?[A-Za-z0-9]+\}?)?):\s*(?=[\d¤(\\])",
        r"\1 = ",
        flat,
    )

    tokens = tokenize(flat)
    if not tokens:
        return flat

    # Leading label "Word:" / "Word Word:" with no digits
    label = ""
    if ":" in tokens[0] or (len(tokens) >= 2 and tokens[1].endswith(":") and not re.search(r"\d|¤", tokens[0])):
        # collect leading digit-free label ending with :
        lab_toks = []
        for i, tok in enumerate(tokens):
            lab_toks.append(tok)
            if tok.endswith(":"):
                label_candidate = " ".join(lab_toks)
                if not re.search(r"\d|¤", label_candidate):
                    label = label_candidate
                    tokens = tokens[i + 1 :]
                break
            if re.search(r"\d|¤", tok) or i > 6:
                break

    # Special: "At ... :" cond
    at_head = ""
    if tokens and tokens[0] == "At":
        # At r=0.10:  or At the lower rate of 5%:
        for i, tok in enumerate(tokens):
            if tok.endswith(":") and i > 0:
                head = " ".join(tokens[: i + 1])
                # If head has digits/math, we'll wrap insides later via general pass
                at_head = head
                tokens = tokens[i + 1 :]
                break

    out: list[str] = []
    if label:
        out.append(label)
    if at_head:
        # Rewrite At-head: wrap math inside the head
        out.append(_wrap_at_head(at_head))

    i = 0
    while i < len(tokens):
        tok = tokens[i]
        # Start of math span?
        if is_mathish_token(tok) and not is_stop_token(tok):
            j = i
            span = [tokens[j]]
            j += 1
            while j < len(tokens):
                t = tokens[j]
                if is_stop_token(t):
                    break
                # punctuation-only that ends clause
                if t in {",", ";", "."}:
                    break
                # comma often separates clauses in dump — but also thousands already intact
                if t.endswith(",") and not re.search(r"\d", t):
                    # prose comma after math
                    break
                span.append(t)
                j += 1
            math = join_math(span)
            # trim trailing punctuation outside
            trail = ""
            while math and math[-1] in ",;":
                trail = math[-1] + trail
                math = math[:-1].rstrip()
            if math:
                out.append(f"${math}$")
            if trail:
                out.append(trail)
            i = j
            continue
        # prose token
        out.append(tok)
        i += 1

    text = " ".join(out)
    text = re.sub(r"\s+([,;.])", r"\1", text)
    text = re.sub(r"\$\s+", "$", text)
    text = re.sub(r"\s+\$", " $", text)
    text = re.sub(r" +", " ", text).strip()
    return text


def _wrap_at_head(head: str) -> str:
    """'At the lower rate of 5%:' or 'At r=0.10:' → Ch13."""
    head = head.strip()
    # At r=0.10: / At r = 8%:
    m = re.match(r"^At\s+(.+):$", head)
    if not m:
        return head
    cond = m.group(1).strip()
    # If cond is pure math-ish (r=..., t=...)
    if re.match(r"^[A-Za-z0-9_\\.\s=%¤+\-]+$", cond) and ("=" in cond or re.search(r"\d", cond)):
        cond = re.sub(r"(?<!\\)%", r"\\%", cond)
        return f"At ${cond}$:"
    # Prose cond with embedded numbers: wrap numbers/% 
    cond2, cur = protect(cond) if "¤" not in cond else (cond, [])
    # already protected at top level — cond may have ¤ from parent
    cond2 = cond
    cond2 = re.sub(r"(\d+(?:\.\d+)?)\\%", r"$\1\\%$", cond2)
    cond2 = re.sub(
        r"(?<!\$)(\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?)(?!\$)",
        r"$\1$",
        cond2,
    )
    return f"At {cond2}:"


def finalize_step(body: str) -> str:
    body = fix_scars(body.strip())
    body, cur = protect(body)
    body = body.replace("$", "")
    body = rewrite_flat(body)
    body = restore(body, cur)
    body = fix_scars(body)
    body = body.replace("$$", "$")
    # $Var: → $Var =
    body = re.sub(
        r"\$((?:\\mathrm\{[^}]+\}|[A-Za-z][A-Za-z0-9]*)(?:_\{?[A-Za-z0-9]+\}?)?):\s*",
        r"$\1 = ",
        body,
    )
    # Wrap any remaining digits outside math
    if digits_outside(body):
        body = wrap_remaining_digits(body)
    body = body.rstrip()
    if body.endswith("$"):
        body += "."
    elif not body.endswith("."):
        body += "."
    body = body.replace("$.$.", "$.")
    body = re.sub(r"  +", " ", body)
    # tidy "$ ," 
    body = re.sub(r"\$\s*,", "$,", body)
    return body


def wrap_remaining_digits(body: str) -> str:
    body2, cur = protect(body)
    out: list[str] = []
    i = 0
    in_math = False
    while i < len(body2):
        ch = body2[i]
        if ch == "$":
            in_math = not in_math
            out.append(ch)
            i += 1
            continue
        if not in_math:
            m = re.match(
                r"(¤\d+¤|\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d+(?:\.\d+)?(?:\\%)?)",
                body2[i:],
            )
            if m:
                out.append(f"${m.group(1)}$")
                i += len(m.group(1))
                continue
        out.append(ch)
        i += 1
    return fix_scars(restore("".join(out), cur).replace("$$", "$"))


def extract_steps(part3: str) -> list[tuple[str, str]]:
    steps = []
    for m in re.finditer(
        r"\*\*(\d+)\.\*\*\s+(.*?)(?=\n\n\*\*|\Z)", part3, re.S
    ):
        num, body = m.group(1), m.group(2).strip()
        body = re.split(r"\n\n\*\*Answer", body)[0].strip()
        steps.append((num, body))
    return steps


def english_in_math(s: str) -> bool:
    for m in re.finditer(r"\$([^$]*)\$", s.replace("\\$", "")):
        inner = m.group(1)
        # remove tex and short vars
        check = re.sub(rf"\\(?:{TEX})", " ", inner)
        check = re.sub(r"\\[A-Za-z]+(?:\{[^}]*\})?", " ", check)
        check = re.sub(r"\b[A-Za-z]'?\b", " ", check)
        check = re.sub(r"[A-Za-z]+_\{?[A-Za-z0-9]*\}?", " ", check)
        for w in re.findall(r"[A-Za-z]{3,}", check):
            if w.lower() in STOP or w in STOP:
                return True
    return False


def main() -> None:
    dump = {d["id"]: d["part3"] for d in json.loads(DUMP.read_text(encoding="utf-8"))}
    src = PATH.read_text(encoding="utf-8")
    touched = 0
    sample = None

    for n in range(81, 124):
        tid = f"math-11-{n}"
        id_pos = src.find(f"id: `{tid}`")
        p3 = src.find("**Part 3: Solve.**", id_pos)
        ans = src.find("**Answer.**", p3)
        steps = extract_steps(dump[tid])
        lines = ["**Part 3: Solve.**", ""]
        for num, body in steps:
            lines.append(f"**{num}.** {finalize_step(body)}")
            lines.append("")
        while lines and lines[-1] == "":
            lines.pop()
        new_block = "\n".join(lines) + "\n\n"
        if src[p3:ans] != new_block:
            touched += 1
            src = src[:p3] + new_block + src[ans:]
        if n == 81:
            sample = new_block

    PATH.write_text(src, encoding="utf-8")
    print("tasks_touched", touched)
    print("--- SAMPLE ---")
    print(sample)

    bad_d = bad_e = 0
    samples = []
    for n in range(81, 124):
        tid = f"math-11-{n}"
        i = src.find(f"id: `{tid}`")
        j = src.find("**Part 3: Solve.**", i)
        k = src.find("**Answer.**", j)
        for line in src[j:k].splitlines():
            m = re.match(r"^\*\*\d+\.\*\*\s+(.*)$", line)
            if not m:
                continue
            b = m.group(1)
            if digits_outside(b):
                bad_d += 1
                if len(samples) < 12:
                    samples.append(("digit", tid, b[:130]))
            if english_in_math(b):
                bad_e += 1
                if len(samples) < 12:
                    samples.append(("eng", tid, b[:130]))
    thou = len(re.findall(r"\d\$, \$", src[src.find("id: `math-11-81`") :]))
    print("audit digits_outside", bad_d, "eng_in_math", bad_e, "comma_split_in_range", thou)
    for s in samples:
        print(" ", s)


if __name__ == "__main__":
    main()
