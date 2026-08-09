# -*- coding: utf-8 -*-
"""Global presentation scrub on ch11_raw.json while subsection agents work."""
from __future__ import annotations

import json
import re
from pathlib import Path

RAW = Path(r"C:\Users\bubli\Projects\bbe-school-fixed\textbook\output\ch11_raw.json")


def bulletize(s: str) -> str:
    if not s:
        return s
    work = re.sub(r"([a-zA-Z0-9.%])•", r"\1\n• ", s)
    work = re.sub(r"•([A-Za-z0-9$])", r"• \1", work)
    # If single line with multiple •, force newlines
    if work.count("•") >= 2 and "\n" not in work:
        bits = [b.strip() for b in work.split("•") if b.strip()]
        work = "\n".join(f"• {b}" for b in bits)
    return work.strip()


def fix_english_in_math(s: str) -> str:
    if not s:
        return s
    s = s.replace(
        "$(1 + monthly rate)^{12}$",
        "$(1+i_m)^{12}$",
    )
    s = s.replace(
        "R = $(1 + monthly rate)^{12}$ - 1",
        "$R=(1+i_m)^{12}-1$",
    )
    s = s.replace(
        "Nominal annual rate = 12 × monthly rate R = $(1+i_m)^{12}$ - 1",
        "Nominal annual rate $=12 i_m$; effective annual rate $R=(1+i_m)^{12}-1$",
    )
    # Target glue
    s = re.sub(
        r"\$S_0\s*=\s*\\mathrm\{Target\}/\(1\+r/n\)\^\{nt\}\s*R\s*=\s*\(1\s*\+\s*r/n\)\^\{n\}\s*-\s*1\$",
        r"$S_0=T/(1+r/n)^{nt}$ (T = target); $R=(1+r/n)^{n}-1$",
        s,
    )
    s = re.sub(
        r"\$S_0\s*=\s*\\mathrm\{Target\}/\(1\+r/n\)\^\{nt\}\$",
        r"$S_0=T/(1+r/n)^{nt}$ (T = target amount)",
        s,
    )
    # fraction remaining inside math leftover
    s = re.sub(
        r"\$e\^\{-\\delta t\}\$\s*=\s*fraction remaining",
        r"fraction remaining $=e^{-\\delta t}$",
        s,
    )
    # money smash
    s = re.sub(
        r"\$?(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\+(\d{1,3}(?:,\d{3})*(?:\.\d+)?)=\$?(\d{1,3}(?:,\d{3})*(?:\.\d+)?)",
        r"$\1 + $\2 = $\3",
        s,
    )
    s = re.sub(
        r"(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\+(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\+(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*=\s*\$",
        r"$\1 + $\2 + $\3 = $",
        s,
    )
    s = s.replace("f100", "$f_{100}$")
    return s


def main() -> None:
    data = json.loads(RAW.read_text(encoding="utf-8"))
    n = 0
    for sub in data["subsections"]:
        for t in sub["tasks"]:
            for key in ("given", "formulas", "steps", "context"):
                old = t.get(key) or ""
                new = fix_english_in_math(bulletize(old) if key in ("given", "formulas") else fix_english_in_math(old))
                if new != old:
                    t[key] = new
                    n += 1
            for i, e in enumerate(t.get("explanations") or []):
                new = fix_english_in_math(e)
                if new != e:
                    t["explanations"][i] = new
                    n += 1
    RAW.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("fields touched:", n)


if __name__ == "__main__":
    main()
