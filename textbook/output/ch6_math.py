"""KaTeX conversion for inequalities practice tasks."""
from __future__ import annotations

import re

STOP_WORDS = {
    "the", "of", "is", "at", "so", "to", "for", "and", "or", "but", "with", "from",
    "that", "which", "this", "keep", "including", "never", "plug", "try", "confirming",
    "since", "then", "than", "when", "where", "while", "also", "not", "both", "its",
    "into", "onto", "over", "under", "after", "before", "because", "always",
    "every", "each", "true", "false", "solution", "region", "regions", "interval",
    "numerator", "denominator", "critical", "points", "point", "there", "here",
    "matches", "exactly", "strict", "excluded", "included", "giving", "gives",
    "meaning", "combined", "intersecting", "factor", "factors", "opens", "upward",
    "downward", "claim", "stated", "wrongly", "must", "does", "did", "can",
    "cannot", "only", "just", "still", "even", "far", "near", "inside", "outside",
    "between", "through", "across", "about", "above", "below", "left", "right",
    "middle", "outer", "inner", "whole", "full", "same", "next", "first", "second",
    "third", "case", "branch", "piece", "pieces", "set", "undefined", "division",
    "zero", "zeros", "root", "roots", "parabola", "positive", "negative", "valid",
    "invalid", "domain", "range", "boundary", "endpoint", "endpoints", "open",
    "closed", "union", "intersection", "in", "a", "an", "as", "by", "on", "if",
    "we", "it", "be", "are", "was", "were", "has", "have", "had", "do", "let",
    "use", "using", "used", "split", "test", "testing", "check", "checking",
    "rewrite", "expanding", "dividing", "squaring", "isolating", "contributes",
    "keeping", "dropping", "treating", "reporting", "disproving", "proving",
    "working", "asking", "coming", "comes", "came", "being", "been", "itself",
    "therefore", "hence", "thus", "plus", "minus", "times", "equals", "equal",
    "less", "more", "least", "most", "once", "twice", "original", "claimed",
    "tempting", "common", "habit", "always", "rather", "instead", "quite",
}

OPS = set("=<>≤≥≠+−-*/^_|∪∩±×·≈√")

CURRENCY_RE = re.compile(r"\$\d+(?:,\d{3})*(?:\.\d+)?")

INTERVAL_ATOM = r"(?:\{[^{}]+\}|[\(\[][^\(\)\[\]]*,[^\(\)\[\]]*[\)\]])"
INTERVAL_CHAIN_RE = re.compile(
    INTERVAL_ATOM + r"(?:\s*∪\s*" + INTERVAL_ATOM + r")+"
    r"|" + INTERVAL_ATOM
)


def tex_math(src: str) -> str:
    s = src.strip()
    if not s:
        return s
    set_braces = bool(re.search(r"\{[^{}\\]*[-−\d∞,][^{}\\]*\}", s)) and "\\frac" not in s
    s = (
        s.replace("\u2212", "-")
        .replace("\u2013", "-")
        .replace("\u00a0", " ")
    )
    if set_braces:
        s = s.replace("{", r"\{").replace("}", r"\}")
    s = s.replace("²", "^{2}").replace("³", "^{3}")
    s = re.sub(r"√\(([^()]*)\)", r"\\sqrt{\1}", s)
    s = re.sub(r"√(\d+(?:\.\d+)?)", r"\\sqrt{\1}", s)
    s = re.sub(r"√([A-Za-z])", r"\\sqrt{\1}", s)
    s = s.replace("≤", r" \le ")
    s = s.replace("≥", r" \ge ")
    s = s.replace("≠", r" \ne ")
    s = s.replace("∪", r" \cup ")
    s = s.replace("∩", r" \cap ")
    s = s.replace("∞", r"\infty")
    s = s.replace("±", r" \pm ")
    s = s.replace("×", r" \times ")
    s = s.replace("·", r" \cdot ")
    s = s.replace("≈", r" \approx ")
    s = s.replace("°", r"^{\circ}")

    s = re.sub(
        r"\(([^()]*)\)\(([^()]*)\)\s*/\s*\(([^()]*)\)",
        r"\\dfrac{(\1)(\2)}{\3}",
        s,
    )
    s = re.sub(
        r"\(([^()]*)\)\(([^()]*)\)\s*/\s*(-?\d+(?:\.\d+)?)",
        r"\\dfrac{(\1)(\2)}{\3}",
        s,
    )
    s = re.sub(
        r"\(([^()]*)\)\^\{2\}\s*/\s*\(([^()]*)\)",
        r"\\dfrac{(\1)^{2}}{\2}",
        s,
    )
    s = re.sub(
        r"\(([^()]*)\)\s*/\s*\(([^()]*)\)",
        r"\\dfrac{\1}{\2}",
        s,
    )
    s = re.sub(
        r"\(([^()]*)\)\s*/\s*(-?\d+(?:\.\d+)?)",
        r"\\dfrac{\1}{\2}",
        s,
    )
    s = re.sub(r"\((\d+)\s*/\s*(\d+)\)", r"\\frac{\1}{\2}", s)
    s = re.sub(
        r"(?<![0-9A-Za-z\\{])(-?\d+)\s*/\s*(\d+)(?![0-9A-Za-z}])",
        r"\\frac{\1}{\2}",
        s,
    )
    s = re.sub(
        r"\|\|([^|]+)\|([^|]+)\|",
        r"\\bigl|\,|\1|\2\\bigr|",
        s,
    )

    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"\(\s+", "(", s)
    s = re.sub(r"\s+\)", ")", s)
    s = re.sub(r"\[\s+", "[", s)
    s = re.sub(r"\s+\]", "]", s)
    s = re.sub(r"\{\s+", "{", s)
    s = re.sub(r"\s+\}", "}", s)
    s = re.sub(r"\s*,\s*", ", ", s)
    # Keep a letter minus a number readable: 1.08E-15 → 1.08E - 15, 5x-150 → 5x - 150
    s = re.sub(r"([A-Za-z])-(\d)", r"\1 - \2", s)
    s = re.sub(r"(?<![<>\\])=(?![=])", " = ", s)
    s = re.sub(r"\s+=\s+", " = ", s)
    s = s.strip()
    return s


HAS_VAR_RE = re.compile(r"(?<![A-Za-z])[abcxupFCnskthgLEw](?![A-Za-z])")


def worth_wrapping(core: str) -> bool:
    if not core:
        return False
    if core.endswith("="):
        return False
    if HAS_VAR_RE.search(core):
        return True
    if re.search(r"[√|∞∪]|\\sqrt", core):
        return True
    if re.match(r"^[\(\[{]", core) and ("," in core or "∪" in core or r"\cup" in core):
        return True
    return False


def dollar_wrap(tex: str) -> str:
    tex = tex.strip()
    if not tex:
        return ""
    if tex.startswith("$") and tex.endswith("$"):
        return tex
    # `$400 - 0.5x$` would be parsed as currency `$400` by FlashcardMath.
    if re.match(r"\d", tex):
        return f"${{{tex}}}$"
    return f"${tex}$"


def paren_is_english(s: str, i: int) -> bool:
    m = re.match(r"\(\s*([A-Za-z][A-Za-z']*)", s[i:])
    if not m:
        return False
    word = m.group(1).lower()
    if word in {"inf", "infty"}:
        return False
    if word in STOP_WORDS:
        return True
    return len(word) >= 2 and word.isalpha()


def next_nonspace(s: str, i: int) -> tuple[str, int]:
    j = i + 1
    while j < len(s) and s[j] in " \t":
        j += 1
    return (s[j] if j < len(s) else "", j)


def next_word(s: str, j: int) -> str:
    m = re.match(r"[A-Za-z][A-Za-z']*", s[j:])
    return m.group(0).lower() if m else ""


def hyphen_continues_english(s: str, hyphen_i: int) -> bool:
    """True for x-axis / x-values, not x-1 or x-y."""
    ch = s[hyphen_i] if hyphen_i < len(s) else ""
    if ch not in "-−–":
        return False
    nxt, j = next_nonspace(s, hyphen_i)
    if not nxt.isalpha():
        return False
    word = next_word(s, j)
    if len(word) <= 1:
        return False
    return word not in {"inf", "infty"}


def looks_like_formula_from_number(s: str, i: int) -> bool:
    """True if a number here begins an equation/inequality, not a prose count."""
    j = i
    if s[j] in "-−":
        j += 1
    while j < len(s) and (s[j].isdigit() or s[j] in ".,"):
        j += 1
    ch, k = next_nonspace(s, j - 1) if j > i else next_nonspace(s, i)
    if ch in "xyupFCnskthgLEabc√(|":
        if ch.isalpha() and k + 1 < len(s) and s[k + 1].isalpha():
            return False
        return True
    if ch in "=<>≤≥≠+−-/×·∪":
        rest = s[k : k + 24]
        if re.search(r"[A-Za-z√(]", rest) or re.search(r"[<>=≤≥≠]", rest):
            return True
        if ch in "=<>≤≥≠/":
            return True
    return False


def can_start_math(s: str, i: int) -> bool:
    if i >= len(s):
        return False
    ch = s[i]
    if ch == "$":
        return False
    if i > 0 and s[i - 1] in "'’":
        return False
    if ch == "√" or ch == "|" or ch == "{":
        return True
    if ch in "([":
        if ch == "(" and paren_is_english(s, i):
            return False
        return True
    if ch in "-−":
        prev = s[i - 1] if i else " "
        nxt = s[i + 1] if i + 1 < len(s) else ""
        if prev.isalpha() and nxt.isalpha():
            return False
        if nxt.isdigit() or nxt in "∞(√":
            return looks_like_formula_from_number(s, i) if nxt.isdigit() else True
        return False
    if ch == "∞":
        return True
    if ch.isdigit():
        return looks_like_formula_from_number(s, i)
    if ch.isalpha() and not (i > 0 and s[i - 1].isalpha()):
        if ch not in "abcxupFCnskthgLE":
            return False
        if i + 1 < len(s) and s[i + 1].isalpha():
            return False
        nxt, k = next_nonspace(s, i)
        if nxt in "-−–" and hyphen_continues_english(s, k):
            return False
        return nxt in "=<>≤≥≠+−-*/^_|∪∩±×·≈√({[²³" or nxt.isdigit()
    if ch in "<>≤≥≠±":
        return True
    return False


def consume_math(s: str, start: int) -> int:
    i = start
    depth = 0
    last = start
    n = len(s)
    while i < n:
        ch = s[i]
        if ch == "$":
            break
        if ch in "([{":
            if ch == "(" and depth == 0 and paren_is_english(s, i) and i > start:
                break
            depth += 1
            i += 1
            last = i
            continue
        if ch in ")]}":
            if depth == 0:
                break
            depth -= 1
            i += 1
            last = i
            if i < n and s[i] in "²³":
                i += 1
                last = i
            continue
        if ch in " \t":
            j = i
            while j < n and s[j] in " \t":
                j += 1
            if j >= n:
                break
            if s[j] == "∪":
                i = j
                continue
            w = next_word(s, j)
            if w in STOP_WORDS and depth == 0:
                break
            if w and len(w) >= 3 and s[j].isalpha() and not can_start_math(s, j) and depth == 0:
                break
            if s[j] in ".,;:!?\"”" and depth == 0:
                break
            i = j
            continue
        if ch == "∪":
            i += 1
            last = i
            continue
        if ch in ".,":
            if depth:
                i += 1
                last = i
                continue
            nxt = s[i + 1] if i + 1 < n else ""
            if ch == "." and nxt.isdigit():
                i += 1
                last = i
                continue
            break
        if ch in ";:!?":
            break
        if ch.isalpha():
            m = re.match(r"[A-Za-z][A-Za-z']*", s[i:])
            word = m.group(0) if m else ch
            low = word.lower()
            if low in STOP_WORDS and depth == 0:
                break
            if len(word) >= 4 and low not in {"sqrt", "infty", "dfrac", "frac"}:
                break
            i += len(word)
            last = i
            continue
        if ch in "-−–" and depth == 0 and hyphen_continues_english(s, i):
            break
        if ch.isdigit() or ch in OPS or ch in "²³¹∞\\%":
            i += 1
            last = i
            continue
        break
    while last > start and s[last - 1] in " \t":
        last -= 1
    piece = s[start:last].strip()
    if last <= start or not piece:
        return start
    if re.fullmatch(r"-?\d+(?:,\d{3})*(?:\.\d+)?%?", piece):
        return start
    return last


def wrap_math(text: str) -> str:
    if not text:
        return text

    stash: list[str] = []

    def hold(chunk: str) -> str:
        stash.append(chunk)
        return f"§§{len(stash) - 1}§§"

    def restore(s: str) -> str:
        while True:
            m = re.search(r"§§(\d+)§§", s)
            if not m:
                return s
            s = s[: m.start()] + stash[int(m.group(1))] + s[m.end() :]

    work = text
    work = CURRENCY_RE.sub(lambda m: hold(m.group(0)), work)

    def hold_interval(m: re.Match) -> str:
        raw = m.group(0)
        if re.search(r"[A-Za-z]{3,}", raw):
            return raw
        return hold(dollar_wrap(tex_math(raw)))

    work = INTERVAL_CHAIN_RE.sub(hold_interval, work)

    out: list[str] = []
    i = 0
    n = len(work)
    while i < n:
        if work.startswith("§§", i):
            j = work.find("§§", i + 2)
            if j == -1:
                out.append(work[i:])
                break
            out.append(work[i : j + 2])
            i = j + 2
            continue
        if can_start_math(work, i):
            end = consume_math(work, i)
            if end > i and "§§" not in work[i:end]:
                piece = work[i:end]
                lead = len(piece) - len(piece.lstrip())
                trail = len(piece) - len(piece.rstrip())
                core = piece.strip()
                if worth_wrapping(core):
                    out.append(
                        piece[:lead]
                        + dollar_wrap(tex_math(core))
                        + (piece[len(piece) - trail :] if trail else "")
                    )
                    i = end
                    continue
        out.append(work[i])
        i += 1

    s = restore("".join(out))
    s = s.replace("\u2212", "-")
    s = re.sub(r"\$([^$]+)\$²", r"$\1^{2}$", s)
    s = s.replace("²", r"$^{2}$")
    s = s.replace("³", r"$^{3}$")

    def map_outside_math(text: str, fn) -> str:
        pieces: list[str] = []
        i = 0
        n = len(text)
        while i < n:
            cur = CURRENCY_RE.match(text, i)
            if cur:
                pieces.append(cur.group(0))
                i += len(cur.group(0))
                continue
            if text[i] == "$":
                j = text.find("$", i + 1)
                if j == -1:
                    pieces.append(fn(text[i:]))
                    break
                pieces.append(text[i : j + 1])
                i = j + 1
                continue
            j = i + 1
            while j < n and text[j] != "$":
                j += 1
            pieces.append(fn(text[i:j]))
            i = j
        return "".join(pieces)

    s = map_outside_math(
        s,
        lambda chunk: (
            chunk.replace("×", r" $\times$ ")
            .replace("≤", r" $\le$ ")
            .replace("≥", r" $\ge$ ")
            .replace("≠", r" $\ne$ ")
            .replace("∪", r" $\cup$ ")
            .replace("∞", r" $\infty$ ")
            .replace("±", r" $\pm$ ")
        ),
    )
    s = re.sub(r"\$\\le (?=\d)", r"$\\le$ $", s)
    s = re.sub(r"\$\\ge (?=\d)", r"$\\ge$ $", s)
    s = re.sub(r" {2,}", " ", s)
    return s


def wrap_statement(text: str) -> str:
    t = re.sub(r"\s+", " ", text.strip())

    m = re.match(
        r"^(The solution set of the inequality )(.+?)( is(?: exactly)? )(.+)$",
        t,
    )
    if m:
        rest = m.group(4)
        period = rest.endswith(".")
        if period:
            rest = rest[:-1]
        out = f"{m.group(1)}{wrap_math(m.group(2))}{m.group(3)}{wrap_math(rest)}"
        return out + ("." if period else "")

    m = re.match(
        r"^(The inequality )(.+?)( (?:has solution set|implies that|has solution) )(.+)$",
        t,
    )
    if m:
        rest = m.group(4)
        period = rest.endswith(".")
        if period:
            rest = rest[:-1]
        out = f"{m.group(1)}{wrap_math(m.group(2))}{m.group(3)}{wrap_math(rest)}"
        return out + ("." if period else "")

    return wrap_math(t)


def leftover_unicode(s: str) -> list[str]:
    tmp = re.sub(r"\$\$[\s\S]*?\$\$", "", s)
    tmp = re.sub(r"\$[^$]*\$", "", tmp)
    return re.findall(r"[≤≥≠∪∩∞±×√²³]", tmp)


def unpaired_dollars(s: str) -> bool:
    i = 0
    count = 0
    while i < len(s):
        if s[i] != "$":
            i += 1
            continue
        if i > 0 and s[i - 1] == "\\":
            i += 1
            continue
        if CURRENCY_RE.match(s, i):
            m = CURRENCY_RE.match(s, i)
            i += len(m.group(0))
            continue
        count += 1
        i += 1
    return count % 2 != 0


def _self_test() -> None:
    cases = [
        (
            wrap_statement(
                "The solution set of the inequality (x − 2)/(x + 1) ≤ 0 is −1 < x ≤ 2."
            ),
            ["dfrac", r"\le 0", r"-1 < x \le 2"],
        ),
        (
            wrap_statement(
                "The solution set of the inequality (x² − 16)/(x − 1) ≤ 0 is (−∞, −4] ∪ (1, 4]."
            ),
            [r"\infty", r"\cup"],
        ),
        (
            wrap_statement(
                "The solution set of the inequality (x + 2)²/(x − 3) ≥ 0 is exactly x > 3."
            ),
            ["dfrac", "^{2}"],
        ),
        (wrap_math("It's tempting to think"), []),
        (wrap_math("Keep the non-negative regions"), []),
        (wrap_math("A bill is $400, but wants $250 or less."), ["$400", "$250"]),
        (wrap_math("Redeeming 300 points brings the bill"), ["300 points"]),
        (wrap_math("Solving 400 − 0.5x ≤ 250 gives x ≥ 300."), [r"\le", r"\ge"]),
        (wrap_math("stays entirely above the x-axis"), ["x-axis", "!$x-$"]),
        (wrap_math("some negative x-values might work"), ["x-values", "!$x-$"]),
        (wrap_math("Solving 1.08E−15 ≥ 500"), ["1.08E - 15"]),
        (wrap_math("the break-even point solves 5x-150=0"), ["5x - 150"]),
        (wrap_math("x² − x − 2 > 0, which factors"), [r"x^{2} - x - 2 > 0"]),
    ]
    for got, needles in cases:
        print("TEST:", got)
        for n in needles:
            if n.startswith("!") :
                if n[1:] in got:
                    print("  UNWANTED", n[1:])
                continue
            if n not in got:
                print("  MISSING", n)
        if leftover_unicode(got):
            print("  leftover", leftover_unicode(got))
        if unpaired_dollars(got):
            print("  unpaired dollars")
        if "It's" in got.replace("It's tempting", "") and "$s$" in got:
            print("  bad apostrophe wrap")
        if "$s$" in got:
            print("  wrapped s")
        if "non$-$" in got:
            print("  wrapped hyphen")


if __name__ == "__main__":
    _self_test()
