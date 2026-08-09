# -*- coding: utf-8 -*-
"""Pass6: remaining 11.3/11.4/11.7 exponent & glue scars."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"


def polish_text(s: str) -> tuple[str, int]:
    if not s:
        return s, 0
    work = s
    n = 0

    def apply(pat: str, repl) -> None:
        nonlocal work, n

        def _r(m: re.Match) -> str:
            nonlocal n
            n += 1
            return repl(m) if callable(repl) else repl

        work, _ = re.subn(pat, _r, work)

    # --- 11.1 scars ---
    apply(r"\(502\s*=\s*2,?500\)", r"($50^{2} = 2{,}500$)")
    apply(r"(?<![\d.^$])502\s*=\s*2,?500", r"$50^{2} = 2{,}500$")

    # --- 11.3 glue: amount$(expr)$ ---
    apply(
        r"(\d{1,3}(?:,\d{3})*)\$(\([^$]+?\))\$",
        lambda m: f"${m.group(1)}{m.group(2)}$",
    )
    apply(
        r"\bP\(t\)\$e\^\{([^}]+)\}\$",
        lambda m: f"$P(t) e^{{{m.group(1)}}}$",
    )
    apply(
        r"\bf\(t\)\s*=\s*P\(t\)\$e\^\{([^}]+)\}\$",
        lambda m: f"$f(t) = P(t) e^{{{m.group(1)}}}$",
    )
    # 5,000(25)$2 e^{-1.84}$ / 5,000(25)$2$
    apply(
        r"(\d{1,3}(?:,\d{3})*)\((\d+)\)\$2\s*e\^\{([^}]+)\}\$",
        lambda m: f"${m.group(1)}({m.group(2)})^{{2}} e^{{{m.group(3)}}}$",
    )
    apply(
        r"(\d{1,3}(?:,\d{3})*)\((\d+)\)\$2\$",
        lambda m: f"${m.group(1)}({m.group(2)})^{{2}}$",
    )
    # 5,000(27)2e-2
    apply(
        r"(\d{1,3}(?:,\d{3})*)\((\d+)\)2e(-?\d+(?:\.\d+)?)",
        lambda m: f"${m.group(1)}({m.group(2)})^{{2}} e^{{{m.group(3)}}}$",
    )
    # $40,000 e^{-0.03}$(10) → ·10
    apply(
        r"\$(\d{1,3}(?:,\d{3})*)\s*e\^\{([^}]+)\}\$\((\d+(?:\.\d+)?)\)",
        lambda m: f"${m.group(1)} e^{{{m.group(2)} \\cdot {m.group(3)}}}$",
    )
    apply(
        r"(\d{1,3}(?:,\d{3})*)e\^\{([^}]+)\}\$\((\d+(?:\.\d+)?)\)",
        lambda m: f"${m.group(1)} e^{{{m.group(2)} \\cdot {m.group(3)}}}$",
    )
    # P(t*)$e^{-0.09}$(18.2222)
    apply(
        r"P\(t\*\)\$e\^\{([^}]+)\}\$\((\d+(?:\.\d+)?)\)",
        lambda m: f"$P(t*) e^{{{m.group(1)} \\cdot {m.group(2)}}}$",
    )
    apply(
        r"\$e\^\{([^}]+)\}\$\((\d+(?:\.\d+)?)\)",
        lambda m: f"$e^{{{m.group(1)} \\cdot {m.group(2)}}}$",
    )
    # 40,000e0 / Ke0
    apply(r"(\d{1,3}(?:,\d{3})*)e0\b", lambda m: f"${m.group(1)} e^{{0}}$")
    apply(r"\bKe0\b", r"$Ke^{0}$")
    # K(1 + 0)-t / K(1 + ra)-t
    apply(
        r"K\(1\s*\+\s*0\)-t\b",
        r"$K(1+0)^{-t}$",
    )
    apply(
        r"K\(1\s*\+\s*ra\)-t\b",
        r"$K(1+r_a)^{-t}$",
    )
    apply(r"\b1\s*\+\s*ra\s*=\s*er\b", r"$1+r_a = e^{r}$")
    apply(r"\b1\s*\+\s*ra\b", r"$1+r_a$")
    # 2A(t+k) = $r_A$$(t+k)^{2}$ → $2A(t+k)=r A (t+k)^{2}$ wait - actually 2A(t+k)=r*A*(t+k)^2?
    # From agent: `$2A(t+k) = r A(t+k)^{2}$`
    apply(
        r"2A\(t\+k\)\s*=\s*\$r_A\$\$(\(t\+k\)\^\{2\})\$",
        r"$2A(t+k) = r A(t+k)^{2}$",
    )
    apply(
        r"\$r_A\$\$(\([^$]+\))\$",
        lambda m: f"$r A{m.group(1)}$",
    )
    # e-rt2 = $(e-rt1)^{2}$
    apply(
        r"e-rt2\s*=\s*\$\(e-rt1\)\^\{2\}\$",
        r"$e^{-rt_2}=(e^{-rt_1})^{2}$",
    )
    apply(r"\be-rt(\d)\b", lambda m: f"$e^{{-rt_{m.group(1)}}}$")

    # --- 11.4 geometric glued decimals ---
    GEOM = [
        (r"\b1\.0510\b", r"$1.05^{10}$"),
        (r"\b0\.9720\b", r"$0.97^{20}$"),
        (r"\b0\.9010\b", r"$0.90^{10}$"),
        (r"\b1\.0415\b", r"$1.04^{15}$"),
        (r"\b1\.0810\b", r"$1.08^{10}$"),
        (r"\b1\.0811\b", r"$1.08^{11}$"),
        (r"\b1\.1210\b", r"$1.12^{10}$"),
        (r"\b0\.9810\b", r"$0.98^{10}$"),
        (r"\b0\.9819\b", r"$0.98^{19}$"),
        (r"\b0\.985\b(?!\d)", r"$0.98^{5}$"),  # careful
        (r"\b1\.028\b(?!\d)", r"$1.02^{8}$"),
        (r"\b1\.067\b(?!\d)", r"$1.06^{7}$"),
        (r"\b1\.027\b(?!\d)", r"$1.02^{7}$"),
        (r"\b1\.156\b(?!\d)", r"$1.15^{6}$"),
        (r"\b1\.155\b(?!\d)", r"$1.15^{5}$"),
        (r"\b1\.0111\b", r"$1.01^{11}$"),
        (r"\b1\.0515\b", r"$1.05^{15}$"),
        (r"\b1\.0612\b", r"$1.06^{12}$"),
        (r"\b1\.0710\b", r"$1.07^{10}$"),
        (r"\b1\.0912\b", r"$1.09^{12}$"),
        (r"\b1\.1010\b", r"$1.10^{10}$"),
        (r"\b0\.9510\b", r"$0.95^{10}$"),
        (r"\b0\.9612\b", r"$0.96^{12}$"),
    ]
    for pat, repl in GEOM:
        apply(pat, repl)

    # a·(kn - 1)/(k - 1)
    apply(
        r"a\s*[·⋅×]\s*\(\s*kn\s*-\s*1\s*\)\s*/\s*\(\s*k\s*-\s*1\s*\)",
        r"$a(k^{n}-1)/(k-1)$",
    )
    apply(
        r"\(\s*kn\s*-\s*1\s*\)\s*/\s*\(\s*k\s*-\s*1\s*\)",
        r"$(k^{n}-1)/(k-1)$",
    )
    apply(r"\bkn\s*-\s*1\b", r"$k^{n}-1$")
    apply(r"\b1\s*-kn\b", r"$1-k^{n}$")
    apply(r"\(1-kn\)", r"$(1-k^{n})$")
    apply(r"a\s*[·⋅×]\s*kt-1\b", r"$a k^{t-1}$")
    apply(r"\bkt-1\b", r"$k^{t-1}$")
    apply(r"\bk(\d+)-1\b", lambda m: f"$k^{{{m.group(1)}}}-1$")

    # 41.5 = 4 × √4 ; ∑5,000/n1.5
    apply(r"\b41\.5\s*=\s*4\s*[×x]\s*√4", r"$4^{1.5} = 4 \\times \\sqrt{4}$")
    apply(r"∑5,000/n1\.5", r"$\\sum 5{,}000/n^{1.5}$")
    apply(r"∑5,000/n0\.5", r"$\\sum 5{,}000/n^{0.5}$")
    apply(r"\\sum5,000/n1\.5", r"\\sum 5{,}000/n^{1.5}")
    apply(r"limn→∞\s*an", r"$\\lim_{n\\to\\infty} a_n$")
    apply(r"limn→∞ an", r"$\\lim_{n\\to\\infty} a_n$")
    apply(r"\bsrevenue\s*-\s*scost\b", r"$s_{\\mathrm{revenue}} - s_{\\mathrm{cost}}$")

    # --- 11.7 over-polish: 282 → 28^{2}, 1062 → 106^{2} ---
    apply(r"\b784\s*=\s*282\b", r"$784 = 28^{2}$")
    apply(r"\b11,?236\s*=\s*1062\b", r"$11{,}236 = 106^{2}$")
    apply(r"(?<![\d.^$])282(?=\s+exactly)", r"$28^{2}$")
    apply(r"(?<![\d.^$])1062(?=\s+exactly)", r"$106^{2}$")
    apply(r"=\s*282/", r"= $28^{2}$/")
    apply(r"/\s*1062\b", r"/$106^{2}$")

    # Undo dangerous 0.985 if it broke a real decimal - leave for audit

    work = re.sub(r"\${3,}", "$$", work)
    work = work.replace("$ $", " ")
    return work, n


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
    rx = re.compile(
        r"\$\([^$]+\)\^\{2\}\$|"  # catch? no
        r"\d\$\(|"  # 5,000$(
        r"\)\$2|"
        r"\)2e|"
        r"e\^\{[^}]+\}\$\(|"
        r"\b1\.0510\b|\b0\.9720\b|\bkn\s*-|"
        r"=\s*282\b|=\s*1062\b|"
        r"\(502\s*="
    )
    # refine
    rx = re.compile(
        r"\d{1,3}(?:,\d{3})*\$\(|"
        r"\)\$2|"
        r"\)2e-|"
        r"e\^\{[^}]+\}\$\(|"
        r"\b1\.0510\b|\b0\.9720\b|"
        r"\bkn\s*-\s*1\b|"
        r"=\s*282\b|=\s*1062\b|"
        r"\(502\s*=|"
        r"K\(1\s*\+\s*ra\)-|"
        r"e-rt2\s*="
    )
    hits = []
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
            for m in rx.finditer(blob):
                hits.append(
                    f"{sub['id']}/{t['local_num']}: {m.group(0)!r} :: "
                    f"{blob[max(0,m.start()-20):m.end()+25]!r}"
                )
    return hits


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("pass6 edits:", total)
    hits = leftover(data)
    print("leftover:", len(hits))
    for h in hits[:50]:
        print(" ", h)
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
