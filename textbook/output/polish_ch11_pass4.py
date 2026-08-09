# -*- coding: utf-8 -*-
"""Pass4: strip PDF headers + fix flat/nested math across Ch11."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"

CHAPTER_HEADER = re.compile(
    r"\s*Chapter\s+11\.\d\s*[-–—]\s*[^({\n]*?\(Tasks\s+\d+\s*[-–—]\s*\d+\)\s*"
    r"(?:Financial\s+Mathematics\s+Practice\s+Worksheet\s*)?",
    re.IGNORECASE,
)
WORKSHEET = re.compile(
    r"\s*Financial\s+Mathematics\s+Practice\s+Worksheet\s*",
    re.IGNORECASE,
)

CURRENCY_RE = re.compile(
    r"\$\d+(?:,\d{3})*(?:\.\d+)?(?:/[A-Za-z%]+)?(?!\.\d)(?!,\d)"
    r"(?![0-9A-Za-z+\-*=<>\u2260\u2264\u2265(\\{^_$])"
)


def protect_currency(text: str) -> tuple[str, list[str]]:
    bag: list[str] = []

    def keep(m: re.Match) -> str:
        bag.append(m.group(0))
        return f"§C{len(bag)-1}§"

    return CURRENCY_RE.sub(keep, text or ""), bag


def restore_currency(text: str, bag: list[str]) -> str:
    out = text
    for i, v in enumerate(bag):
        out = out.replace(f"§C{i}§", v)
    return out


def strip_headers(s: str) -> tuple[str, int]:
    n = 0
    work, c = CHAPTER_HEADER.subn(" ", s)
    n += c
    work, c = WORKSHEET.subn(" ", work)
    n += c
    work = re.sub(r"[ \t]{2,}", " ", work)
    work = re.sub(r"\s+([,.;:])", r"\1", work)
    work = re.sub(r"\(\s+>", "(>", work)
    work = re.sub(r"\s{2,}", " ", work).strip()
    # repair spaces after strip mid-sentence
    work = re.sub(r"\b([A-Za-z])\s+and\b", r"\1 and", work)  # noop mostly
    return work, n


def fix_math(s: str) -> tuple[str, int]:
    """Apply KaTeX/structure repairs. Currency already protected → §C§."""
    work = s
    n = 0

    def apply(pat: str, repl) -> None:
        nonlocal work, n

        def _r(m: re.Match) -> str:
            nonlocal n
            n += 1
            return repl(m) if callable(repl) else repl

        work, _ = re.subn(pat, _r, work)

    # --- Nested $ money/math ---
    # 40,000/$(1.05)^{2}$ → $40,000/(1.05)^{2}$
    apply(
        r"(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/\$\(([^)]+)\)\^\{([^}]+)\}\$",
        lambda m: f"${m.group(1)}/({m.group(2)})^{{{m.group(3)}}}$",
    )
    # [1 - 1/$(1.045)^{15}$] → $[1 - 1/(1.045)^{15}]$
    apply(
        r"\[\s*1\s*-\s*1/\$\(([^)]+)\)\^\{([^}]+)\}\$\s*\]",
        lambda m: f"$[1 - 1/({m.group(1)})^{{{m.group(2)}}}]$",
    )
    # (a/r)$[1 - $1/(1+r)^{n}$]$ → $(a/r)[1 - 1/(1+r)^{n}]$
    apply(
        r"\(a/r\)\$\[\s*1\s*-\s*\$1/\(1\+r\)\^\{n\}\$\s*\]\$",
        "$(a/r)[1 - 1/(1+r)^{n}]$",
    )
    apply(
        r"\(a/r\)\$\[\s*1\s*-\s*1/\(1\+r\)\^\{n\}\s*\]\$",
        "$(a/r)[1 - 1/(1+r)^{n}]$",
    )
    apply(
        r"\(a/r\)\[\s*1\s*-\s*\$1/\(1\+r\)\^\{n\}\$\s*\]",
        "$(a/r)[1 - 1/(1+r)^{n}]$",
    )
    # [1-$(1+r)^{-n}$] → $[1-(1+r)^{-n}]$
    apply(
        r"\[\s*1\s*-\s*\$(\(1\+r\)\^\{[^}]+\})\$\s*\]",
        lambda m: f"$[1-{m.group(1)}]$",
    )
    apply(
        r"\[\s*1\s*-\s*\$(\(1\+r\)\^\{-\(n-m\)\})\$\s*\]",
        lambda m: f"$[1-{m.group(1)}]$",
    )
    # [1-$(1+r)^{-(n-1)}$]
    apply(
        r"\[\s*1-\s*\$(\([^$]+?\))\$\s*\]",
        lambda m: f"$[1-{m.group(1)}]$",
    )

    # $S_0$ = $S(t)$/$(1+r)^{t}$ → $S_0 = S(t)/(1+r)^{t}$
    apply(
        r"\$S_0\$\s*=\s*\$S\(t\)\$/\$\(1\+r\)\^\{t\}\$",
        "$S_0 = S(t)/(1+r)^{t}$",
    )
    apply(
        r"\$S_0\$\s*=\s*Target\s*/\s*\$\(1\s*\+\s*r/n\)\^\{nt\}\$",
        r"$S_0 = \mathrm{Target}/(1+r/n)^{nt}$",
    )

    # K$(1+r)^{-1}$ → $K(1+r)^{-1}$
    apply(
        r"\b([A-Za-z]\w*)\$(\([^$]+?\))\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )
    # 5,000$(t + 2)^{2}$ → $5,000(t + 2)^{2}$
    apply(
        r"(\d{1,3}(?:,\d{3})*)\$(\([^$]+?\))\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )
    # A$(t + k)^{2}$
    apply(
        r"\b([A-Z])\$(\([^$]+?\))\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )

    # S = $P $e^{rt}$$ → $S = P e^{rt}$
    apply(r"S\s*=\s*\$P\s*\$e\^\{rt\}\$\$", "$S = P e^{rt}$")
    apply(r"\$P\s*\$e\^\{rt\}\$\$?", "$P e^{rt}$")

    # --- Flat / PDF exponents ---
    # (1.006)t = → $(1.006)^{t}$
    apply(
        r"\((\d+\.\d+)\)([tnNmT])\b(?!\^)",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )
    # (1 + r/n)t = / (1+r/n)t
    apply(
        r"\((1\s*\+\s*r/n)\)([tnNmT])\b(?!\^)",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )
    # (1+r/n)^n already ok; (1+r/n)n bare
    apply(
        r"\((1\s*\+\s*r/n)\)n\b",
        r"$(1+r/n)^{n}$",
    )
    # (1+i/m)^(mt) → braces
    apply(
        r"\((1\s*\+\s*i/m)\)\^\(?([a-zA-Z]+)\)?",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}}$",
    )
    apply(r"\((1\s*\+\s*r/n)\)\^n\b", r"$(1+r/n)^{n}$")

    # (1.05)-2 → $(1.05)^{-2}$
    apply(
        r"\((\d+\.\d+)\)-(\d+)\b",
        lambda m: f"$({m.group(1)})^{{-{m.group(2)}}}$",
    )
    # (1.0075)-48
    apply(
        r"\((1\.\d+)\)-(\d+)\b",
        lambda m: f"$({m.group(1)})^{{-{m.group(2)}}}$",
    )
    # (1+r)-(n-m) mid formula → (1+r)^{-(n-m)}
    apply(
        r"\(1\+r\)-\((n-m)\)",
        r"(1+r)^{-(n-m)}",
    )
    apply(
        r"\[1-\(1\+r\)-\(n-m\)\]",
        r"$[1-(1+r)^{-(n-m)}]$",
    )
    apply(
        r"\(1\+r\)-(n-1)\b",
        r"(1+r)^{-(n-1)}",
    )
    apply(
        r"\(1\+r\)-n\b",
        r"(1+r)^{-n}",
    )

    # K·(1+r)m → $K(1+r)^{m}$
    apply(
        r"K\s*[·⋅×x]\s*\(1\+r\)([mnNM])\b",
        lambda m: f"$K(1+r)^{{{m.group(1)}}}$",
    )
    apply(
        r"\[\(1\+r\)([mnNM])\s*-\s*1\]",
        lambda m: f"$[(1+r)^{{{m.group(1)}}} - 1]$",
    )
    apply(
        r"\[\(1\+r\)N\s*-\s*1\]",
        r"$[(1+r)^{N} - 1]$",
    )

    # e^r → $e^{r}$ (not already braced)
    apply(r"(?<![A-Za-z\\$])e\^r\b(?!\{)", r"$e^{r}$")
    apply(r"(?<![A-Za-z\\$])e\^rt\b(?!\{)", r"$e^{rt}$")
    # e0.225 / e-0.10 / e0.05t
    apply(
        r"(?<![A-Za-z\\0-9])e(-?\d+\.\d+)([a-zA-Z]?)\b",
        lambda m: f"$e^{{{m.group(1)}{m.group(2)}}}$",
    )
    # 40,000e0.05t / 40,000e(0.05-0.08)t / 40,000e-0.10
    apply(
        r"(\d{1,3}(?:,\d{3})*)e\(([^)]+)\)([a-zA-Z]?)\b",
        lambda m: f"${m.group(1)} e^{{({m.group(2)}){m.group(3)}}}$",
    )
    apply(
        r"(\d{1,3}(?:,\d{3})*)e(-?\d+\.\d+)([a-zA-Z]?)\b",
        lambda m: f"${m.group(1)} e^{{{m.group(2)}{m.group(3)}}}$",
    )

    # P(23)$e^{-0.08}$(23) → $P(23) e^{-0.08 \cdot 23}$
    apply(
        r"P\((\d+)\)\$e\^\{([^}]+)\}\$\((\d+)\)",
        lambda m: f"$P({m.group(1)}) e^{{{m.group(2)} \\cdot {m.group(3)}}}$",
    )
    # (25)2e-1.84 → $25^{2} e^{-1.84}$
    apply(
        r"\((\d+)\)(\d)e(-?\d+\.\d+)",
        lambda m: f"$({m.group(1)})^{{{m.group(2)}}} e^{{{m.group(3)}}}$",
    )
    apply(
        r"(\d{{2,}})(\d)e(-?\d+\.\d+)",
        lambda m: f"${m.group(1)}^{{{m.group(2)}}} e^{{{m.group(3)}}}$",
    )

    # e^{(rA + \delta B}$t) broken brace
    apply(
        r"\$?e\^\{\(rA\s*\+\s*\\delta B\s*\}\$?t\)?",
        r"$e^{(r_A + \delta_B)t}$",
    )
    apply(
        r"e\^\{\(rA\s*\+\s*\\delta B\s*\}\$?t\)?",
        r"e^{(r_A + \\delta_B)t}",
    )
    apply(r"\brA\b", r"$r_A$")
    apply(r"\bδB\b", r"$\delta_B$")
    apply(r"\\delta B\b", r"\\delta_B")

    # e^{r1t1} → e^{r_1 t_1}
    apply(
        r"e\^\{r(\d)t(\d)\}",
        lambda m: f"e^{{r_{m.group(1)} t_{m.group(2)}}}",
    )
    apply(
        r"e\^\{r(\d)t(\d)\+r(\d)t(\d)\}",
        lambda m: (
            f"e^{{r_{m.group(1)} t_{m.group(2)}+r_{m.group(3)} t_{m.group(4)}}}"
        ),
    )

    # a·k4 → $a \cdot k^{4}$
    apply(
        r"\ba\s*[·⋅×]\s*k(\d+)\b",
        lambda m: f"$a \\cdot k^{{{m.group(1)}}}$",
    )
    apply(r"\bk(\d+)\s*=", lambda m: f"$k^{{{m.group(1)}}}$ =")

    # 7,000s2 → $7,000 s^{2}$
    apply(
        r"(\d{1,3}(?:,\d{3})*)s(\d+)\b",
        lambda m: f"${m.group(1)} s^{{{m.group(2)}}}$",
    )
    # Discriminant = 72 + → $7^{2} +$
    apply(
        r"Discriminant\s*=\s*(\d)2\s*\+",
        lambda m: f"Discriminant = ${m.group(1)}^{{2}}$ +",
    )
    apply(
        r"(?<![\d.^])(\d{1,2})2\s*\+\s*",
        lambda m: f"${m.group(1)}^{{2}}$ + ",
    )

    # $(1.6)^{1}$/32 → $(1.6)^{1/32}$
    apply(
        r"\$\((\d+\.\d+)\)\^\{1\}\$/(\d+)",
        lambda m: f"$({m.group(1)})^{{1/{m.group(2)}}}$",
    )

    # r = 501/80 - 1 → $r = 50^{1/80} - 1$
    apply(r"\br\s*=\s*501/80\s*-\s*1", r"$r = 50^{1/80} - 1$")
    apply(r"\b501/80\b", r"$50^{1/80}$")
    apply(r"\b501/40\b", r"$50^{1/40}$")

    # Geometric glued powers: 1.0812 ≈ → $1.08^{12}$ (careful lists)
    GEOM = [
        (r"\b1\.0812\b", r"$1.08^{12}$"),
        (r"\b1\.129(?=-1|\b)", r"$1.12^{9}$"),
        (r"\b0\.9615\b", r"$0.96^{15}$"),
        (r"\b0\.9820\b", r"$0.98^{20}$"),
        (r"\b1\.068(?=-1|\b)", r"$1.06^{8}$"),
        (r"\b1\.0112\b", r"$1.01^{12}$"),
        (r"\b1\.0312\b", r"$1.03^{12}$"),
        (r"\b1\.079(?=\b)", r"$1.07^{9}$"),
        (r"\b1\.105\b", r"$1.10^{5}$"),  # can be rate — only if with k^ context earlier
        (r"\b4\.15?\s*=\s*8\b", r"$4^{1.5}=8$"),  # fragile
        (r"\b41\.5\s*=\s*8\b", r"$4^{1.5} = 8$"),
        (r"\b1001\.5\b", r"$100^{1.5}$"),
        (r"\ban\s*=\s*5,000/np\b", r"$a_n = 5{,}000/n^{p}$"),
        (r"∑1/np", r"$\sum 1/n^{p}$"),
        (r"\\sum1/np", r"\\sum 1/n^{p}"),
    ]
    for pat, repl in GEOM:
        apply(pat, repl)

    # e0.42 leftover
    apply(r"(?<![A-Za-z\\0-9$])e0\.42\b", r"$e^{0.42}$")

    # Collapse $$$ and fix double wraps
    work = re.sub(r"\${3,}", "$$", work)
    work = re.sub(r"\$\$([^$]+)\$\$", r"$$\1$$", work)
    # $$e^{r}$$ already ok

    # Clean " $ " empty
    work = work.replace("$ $", " ")
    work = re.sub(r"\$\s+\$", " ", work)

    return work, n


def polish_text(s: str) -> tuple[str, int]:
    if not s:
        return s, 0
    work, n1 = strip_headers(s)
    work, bag = protect_currency(work)
    work, n2 = fix_math(work)
    work = restore_currency(work, bag)
    # whitespace tidy
    work = re.sub(r"[ \t]+\n", "\n", work)
    work = re.sub(r"\n{3,}", "\n\n", work)
    return work, n1 + n2


def polish_task(task: dict) -> int:
    total = 0
    for key in ("title", "context", "given", "formulas", "steps"):
        if task.get(key):
            task[key], c = polish_text(task[key])
            total += c
    for i, s in enumerate(task.get("statements") or []):
        task["statements"][i], c = polish_text(s)
        total += c
    for i, e in enumerate(task.get("explanations") or []):
        task["explanations"][i], c = polish_text(e)
        total += c
    return total


def leftover(data: dict) -> list[str]:
    hits = []
    rx = re.compile(
        r"Chapter\s+11\.|"
        r"Practice\s+Worksheet|"
        r"/\$\(|"
        r"\[\s*1\s*-\s*\$|"
        r"\(a/r\)\$\[|"
        r"(?<![A-Za-z\\0-9$])e\d+\.\d|"
        r"\(\d+\.\d+\)-\d|"
        r"501/80|"
        r"\$P\s*\$e"
    )
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            blob = "\n".join(
                [
                    t.get("title") or "",
                    t.get("context") or "",
                    t.get("given") or "",
                    t.get("formulas") or "",
                    t.get("steps") or "",
                    *(t.get("statements") or []),
                    *(t.get("explanations") or []),
                ]
            )
            if CHAPTER_HEADER.search(blob) or WORKSHEET.search(blob):
                hits.append(f"{sub['id']}/{t['local_num']}: HEADER still present")
            for m in rx.finditer(blob):
                hits.append(
                    f"{sub['id']}/{t['local_num']}: {m.group(0)!r} :: "
                    f"{blob[max(0,m.start()-20):m.end()+30]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("pass4 edits:", total)
    hits = leftover(data)
    print("leftover:", len(hits))
    for h in hits[:60]:
        print(" ", h)
    # spot checks
    t20 = next(x for x in data["subsections"][1]["tasks"] if x["local_num"] == 20)
    for i, e in enumerate(t20["explanations"]):
        if "Chapter" in e:
            print("FAIL 11.2/20 still has Chapter in E", i, e[:120])
        else:
            print(f"11.2/20 E{i} clean head:", e[:100].replace("\n", " "))
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
