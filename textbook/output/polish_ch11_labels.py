# -*- coding: utf-8 -*-
"""Normalize glued math labels ↔ proper KaTeX vs prose across Ch11."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\bubli\Projects\bbe-school-fixed")
RAW = ROOT / "textbook" / "output" / "ch11_raw.json"
EMIT = ROOT / "textbook" / "output" / "emit_ch11_from_raw.py"

# Bare identifiers → KaTeX body (no $). Use callables so \mathrm isn't a re escape.
LABEL_MAP: list[tuple[str, str]] = [
    (r"\bSdiscrete\b", r"S_{\mathrm{discrete}}"),
    (r"\bScont\b", r"S_{\mathrm{cont}}"),
    (r"\bScontinuous\b", r"S_{\mathrm{cont}}"),
    (r"\bSyearly\b", r"S_{\mathrm{yearly}}"),
    (r"\bSannual\b", r"S_{\mathrm{annual}}"),
    (r"\bSmonthly\b", r"S_{\mathrm{monthly}}"),
    (r"\bSquarterly\b", r"S_{\mathrm{quarterly}}"),
    (r"\bSsemi\b", r"S_{\mathrm{semi}}"),
    (r"\bKyearly\b", r"K_{\mathrm{yearly}}"),
    (r"\bKsemi\b", r"K_{\mathrm{semi}}"),
    (r"\bKcont\b", r"K_{\mathrm{cont}}"),
    (r"\bKcontinuous\b", r"K_{\mathrm{cont}}"),
    (r"\bKmonthly\b", r"K_{\mathrm{monthly}}"),
    (r"\bKquarterly\b", r"K_{\mathrm{quarterly}}"),
    (r"\bEARmax\b", r"EAR_{\mathrm{max}}"),
    (r"\brnet\b", r"r_{\mathrm{net}}"),
    (r"\baordinary\b", r"a_{\mathrm{ordinary}}"),
    (r"\badue\b", r"a_{\mathrm{due}}"),
    (r"\bPVIII\b", r"PV_{\mathrm{III}}"),
    (r"\bPVII\b", r"PV_{\mathrm{II}}"),
    (r"\bPVI\b", r"PV_{\mathrm{I}}"),
    (r"\bS0,X\b", r"S_{0,X}"),
    (r"\bS0,Y\b", r"S_{0,Y}"),
    (r"\bS_0,X\b", r"S_{0,X}"),
    (r"\bS_0,Y\b", r"S_{0,Y}"),
]

LABEL_BODY = (
    r"S_\{\\mathrm\{[^}]+\}\}|K_\{\\mathrm\{[^}]+\}\}|EAR_\{\\mathrm\{[^}]+\}\}|"
    r"PV_\{\\mathrm\{[^}]+\}\}|a_\{\\mathrm\{[^}]+\}\}|"
    r"S_\{0,[XY]\}|r_\{\\mathrm\{[^}]+\}\}|S_[XYZ]"
)


def protect_math(text: str) -> tuple[str, list[str]]:
    bag: list[str] = []

    def keep(m: re.Match) -> str:
        bag.append(m.group(0))
        return f"§M{len(bag)-1}§"

    work = re.sub(r"\$\$[\s\S]*?\$\$", keep, text or "")
    work = re.sub(r"\$(?![\d])[^$\n]+?\$", keep, work)
    return work, bag


def restore_math(text: str, bag: list[str]) -> str:
    out = text
    for i, v in enumerate(bag):
        out = out.replace(f"§M{i}§", v)
    return out


def apply_labels(text: str) -> str:
    work, bag = protect_math(text)
    for pat, repl in LABEL_MAP:
        work = re.sub(pat, lambda _m, r=repl: r, work)
    work = re.sub(r"\bSX\b(?=\s*=)", "S_X", work)
    work = re.sub(r"\bSY\b(?=\s*=)", "S_Y", work)
    work = re.sub(r"\bSZ\b(?=\s*=)", "S_Z", work)
    return restore_math(work, bag)


def normalize_math_rhs(head: str) -> str:
    """Fold nested $algebra$ into one math RHS; keep thousands as {,}."""
    h = head.strip()
    h = re.sub(r"\$(\([^)]+\)\^\{[^}]+\})\$", r"\1", h)
    h = re.sub(r"\$e\^\{([^}]+)\}\$", r"e^{\1}", h)
    h = re.sub(r"\$([^$]*?[\\^_{][^$]*?)\$", r"\1", h)  # other math fragments
    h = h.replace("×", r" \times ").replace("·", r" \cdot ")
    h = re.sub(r"(?<!\{),(?=\d{3}\b)", r"{,}", h)
    h = re.sub(r"\s{2,}", " ", h).strip()
    return h


def wrap_assignment_lines(text: str) -> str:
    """
    Convert glued assignments into math+prose:
    S_... = 75,000 × $(1.0625)^{9}$ = $129,426.15, matching...
    → $S_... = 75{,}000 \\times (1.0625)^{9}$ = $129,426.15, matching...
    """
    if not text:
        return text
    out_lines: list[str] = []
    assign_re = re.compile(rf"^({LABEL_BODY})\s*=\s*(.+)$")
    for line in text.splitlines():
        if line.lstrip().startswith("$"):
            out_lines.append(line)
            continue
        m = assign_re.match(line.strip())
        if not m:
            out_lines.append(line)
            continue
        label, rest = m.group(1), m.group(2).strip()
        # Split trailing currency result + prose
        m_tail = re.search(
            r"^(?P<head>.*?)\s*(?P<tail>=\s*\$\d[\d,]*(?:\.\d+)?(?![0-9A-Za-z^{\\_]).*)$",
            rest,
        )
        if m_tail:
            head, tail = m_tail.group("head").strip(), " " + m_tail.group("tail")
        else:
            m_prose = re.search(
                r"^(?P<head>.*?)(?P<tail>,\s*(?:matching|which|not|so|though)\b.*)$",
                rest,
            )
            if m_prose and (
                "$" in m_prose.group("head")
                or "×" in m_prose.group("head")
                or "e^" in m_prose.group("head")
            ):
                head, tail = m_prose.group("head").strip(), m_prose.group("tail")
            else:
                head, tail = rest, ""
        math = f"${label} = {normalize_math_rhs(head)}$"
        out_lines.append((math + tail).strip())
    return "\n".join(out_lines)


def wrap_bare_labels(text: str) -> str:
    """Wrap remaining bare LABEL_BODY tokens in $…$ (not already in math)."""
    work, bag = protect_math(text)

    def wrap(m: re.Match) -> str:
        return f"${m.group(1)}$"

    work = re.sub(rf"(?<!\$)\b({LABEL_BODY})\b(?!\$)", wrap, work)
    return restore_math(work, bag)


def polish_text(s: str) -> str:
    if not s:
        return s
    s = apply_labels(s)
    s = wrap_assignment_lines(s)
    s = wrap_bare_labels(s)
    # Fix accidental $$ from double wrap
    s = re.sub(r"\$\$(?=S_|K_|EAR_|PV_|a_|r_)", "$", s)
    s = re.sub(r"(?<=\})\$\$", "$", s)
    return s


def polish_task(task: dict) -> int:
    n = 0
    for key in ("given", "formulas", "steps", "context", "title"):
        old = task.get(key) or ""
        new = polish_text(old)
        if new != old:
            task[key] = new
            n += 1
    for i, e in enumerate(task.get("explanations") or []):
        new = polish_text(e)
        if new != e:
            task["explanations"][i] = new
            n += 1
    for i, st in enumerate(task.get("statements") or []):
        new = polish_text(st)
        if new != st:
            task["statements"][i] = new
            n += 1
    return n


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    total = sum(polish_task(t) for sub in data["subsections"] for t in sub["tasks"])
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("fields updated:", total)
    # leftover bare glued forms
    bad = []
    rx = re.compile(r"\b(Sdiscrete|Scont|Kyearly|Kcont|EARmax|aordinary|PVII|PVIII|PVI)\b")
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            blob = "\n".join(
                [t.get(k) or "" for k in ("given", "formulas", "steps")]
                + (t.get("explanations") or [])
            )
            for m in rx.finditer(blob):
                bad.append(f"{sub['id']}/{t['local_num']}: {m.group(0)}")
    print("leftover glued:", len(bad))
    for b in bad[:20]:
        print(" ", b)
    # sample discrete
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            for e in t.get("explanations") or []:
                if "mathrm{discrete}" in e or "mathrm{cont}" in e:
                    print("SAMPLE:", sub["id"], t["local_num"], e[:200])
                    raise SystemExit(subprocess.call([sys.executable, str(EMIT)]))
    subprocess.check_call([sys.executable, str(EMIT)])


if __name__ == "__main__":
    main()
