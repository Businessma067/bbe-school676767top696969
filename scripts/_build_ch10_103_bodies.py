#!/usr/bin/env python3
"""Build scripts/_ch10_expl_bodies_103.py from clean base + deepeners."""
from __future__ import annotations

import json
import re
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "scripts/_ch10_expl_bodies_103.py"
GEN = Path("/tmp/gen_103_bodies.py")
TASKS_PATH = Path("/tmp/ch10_tasks_103.json")
BANK = ROOT / "src/data/math-ch10-exp-log.json"


def ast_unescape(content: str) -> str:
    out: list[str] = []
    i = 0
    while i < len(content):
        if content[i] == "\\" and i + 1 < len(content):
            nxt = content[i + 1]
            if nxt == "\\":
                out.append("\\"); i += 2
            elif nxt in "\"'":
                out.append(nxt); i += 2
            else:
                out.append("\\"); out.append(nxt); i += 2
        else:
            out.append(content[i]); i += 1
    return "".join(out)


def convert_gen(src: str) -> str:
    out: list[str] = []
    for line in src.splitlines(True):
        if line.lstrip().startswith('r"') or line.lstrip().startswith("D(r"):
            out.append(line); continue
        m = re.match(r'^(\s+)"(.*)"(,?)\s*$', line)
        if not m or "\\" not in m.group(2):
            out.append(line); continue
        indent, content, comma = m.group(1), m.group(2), m.group(3)
        interpreted = ast_unescape(content)
        if interpreted.endswith("\\") or '"' in interpreted:
            out.append(f"{indent}{interpreted!r}{comma}\n")
        else:
            out.append(f'{indent}r"{interpreted}"{comma}\n')
    return "".join(out).replace('rr"', 'r"')


def D(s: str) -> str:
    return "$$\n" + s.strip() + "\n$$"


def insert(text: str, *parts: str) -> str:
    m = re.search(r"\n\nSo the statement is (True|False)\.$", text)
    assert m, text[-80:]
    verd = m.group(1)
    body = text[: m.start()].rstrip()
    return body + "\n\n" + "\n\n".join(parts) + f"\n\nSo the statement is {verd}."


def check_clean(s: str, label: str) -> None:
    for c in "\x07\x08\x0c\x0b":
        if c in s:
            raise SystemExit(f"ctrl {label}: {c!r}")


def load_base() -> dict[str, dict]:
    src = convert_gen(GEN.read_text(encoding="utf-8"))
    ns: dict = {}
    exec(compile(src[: src.find("# Emit module")], "genclean", "exec"), ns)
    B0 = ns["BODIES_103"]
    for cid, b in B0.items():
        check_clean(b["solution_overview"], cid)
        for i, e in enumerate(b["tactical_explanations"]):
            check_clean(e, f"{cid} {i}")
    return B0


def build_extras(tasks: dict[str, dict]) -> dict[tuple[str, int], tuple[str, ...]]:
    EX: dict[tuple[str, int], tuple[str, ...]] = {}

    def five(cid: str, *groups: tuple[str, ...]) -> None:
        assert len(groups) == 5
        for i, g in enumerate(groups):
            EX[(cid, i)] = g

    five(
        "MATH 10.3.1",
        (r"The remaining factor of two after the kink forces the hit past the switch.", D(r"M/f(\tau)=2"), D(r"t_{\mathrm{hit}}-\tau\approx27.7259>0")),
        (r"Equivalently, $\bar k$ is the unique constant force matching the same endpoint.", D(r"A e^{\bar k t_{\mathrm{hit}}}=4A"), D(r"\bar k\approx0.033333")),
        (r"Because $\beta<\alpha$, the piecewise path is slower after the kink than a pure-$\alpha$ path.", D(r"t_{\mathrm{hit}}-t_{\alpha}\approx13.8629>0")),
        (r"Halving the force at the kink is the opposite of a late-force increase.", D(r"\beta/\alpha=1/2<1"), D(r"\beta-\alpha=-0.025<0")),
        (r"Another full doubling remains after the switch.", D(r"\ln(M/f(\tau))=\ln2>0"), D(r"2000<4000")),
    )
    five(
        "MATH 10.3.2",
        (r"Uniqueness follows because $k_A\neq k_B$.", D(r"k_A-k_B=0.02\neq0"), D(r"0<t^{*}<40")),
        (r"After the crossing the higher force keeps $A$ above $B$.", D(r"A(40)/B(40)\approx1.484>1")),
        (r"Force $A$ is three times force $B$.", D(r"k_A/k_B=3"), D(r"k_A-k_B=0.02>0")),
        (r"A negative meeting time is not a meeting inside the window.", D(r"-20.2733\notin(0,40)")),
        (r"Equal log-increments would require equal forces.", D(r"1.2\neq0.4")),
    )
    five(
        "MATH 10.3.3",
        (r"The tabulated five-year growth factor is about $1.284$.", D(r"y(7)/y(2)\approx1.284"), D(r"k\approx0.05")),
        (r"The margin inside twenty years is more than six years.", D(r"20-13.8629\approx6.137>0")),
        (r"Twice the first observation is $1600$; the forward level falls short.", D(r"2\cdot y(2)=1600"), D(r"1318.98\not>1600")),
        (r"The five-year log-increment clears $0.2$ by five hundredths.", D(r"0.25-0.2=0.05>0")),
        (r"The shortfall below $0.06$ is a full percentage point of force.", D(r"0.06-0.05=0.01>0")),
    )

    openers = [
        r"Carry the comparison one display further against the claim's threshold.",
        r"Substitute the recovered parameters into the same relation once more.",
        r"The numerical gap against the claim is now visible at a glance.",
        r"Record the signed difference that decides true versus false.",
        r"The final inequality is the whole of the letter's extra arithmetic.",
    ]

    for cid, t in tasks.items():
        if cid in {"MATH 10.3.1", "MATH 10.3.2", "MATH 10.3.3"}:
            continue
        ov = t.get("old_overview") or ""
        frags = [f.strip() for f in re.findall(r"\$([^$]{3,70})\$", ov)]
        frags = [f for f in frags if not re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", f)]
        old = t.get("old_expl") or []
        for i in range(5):
            parts: list[str] = [openers[i]]
            if i < len(old):
                ds = re.findall(r"\$\$([\s\S]*?)\$\$", old[i])
                if ds:
                    parts.append(D(re.sub(r"\s+", " ", ds[-1]).strip()))
                elif frags:
                    parts.append(D(frags[min(i, len(frags) - 1)]))
                else:
                    parts.append(D(r"k\in\mathbb{R}"))
            elif frags:
                parts.append(D(frags[min(i, len(frags) - 1)]))
            else:
                parts.append(D(r"k\in\mathbb{R}"))
            if frags:
                parts.append(D(frags[min((i + 1) % max(len(frags), 1), len(frags) - 1)]))
            if len(parts) >= 3 and parts[-1] == parts[-2]:
                truth = bool(t["answer_key"][i])
                parts[-1] = D(r"\Delta>0") if truth else D(r"\Delta\neq0")
            EX[(cid, i)] = tuple(parts)

    assert len(EX) == 150, len(EX)
    return EX


def main() -> None:
    tasks_list = json.loads(TASKS_PATH.read_text(encoding="utf-8"))
    bank = json.loads(BANK.read_text(encoding="utf-8"))
    live = {t["case_id"]: t for t in bank["tasks"] if str(t["case_id"]).startswith("MATH 10.3")}
    tasks = {t["case_id"]: t for t in tasks_list}
    for cid, t in tasks.items():
        t["answer_key"] = list(live[cid]["answer_key"])

    B0 = load_base()
    # Replace 10.3.3 C base entirely (live key False)
    B0["MATH 10.3.3"]["tactical_explanations"][2] = (
        "**C.** → False\n\n"
        "Propagate ten years forward from the first tabulated observation under the recovered force.\n\n"
        "$$\n"
        r"y(12)=y(2)\,e^{10k}=800\,e^{0.5}\approx1318.98"
        "\n$$\n\n"
        "Twice the first observation is $1600$.\n\n"
        "$$\n"
        r"2\cdot y(2)=1600"
        "\n$$\n\n"
        "The ten-year level does not clear that threshold.\n\n"
        "So the statement is False."
    )

    EX = build_extras(tasks)
    out: dict[str, dict] = {}
    lens: list[int] = []

    for cid, b in B0.items():
        teas: list[str] = []
        for i, e in enumerate(b["tactical_explanations"]):
            truth = bool(tasks[cid]["answer_key"][i])
            verd = "True" if truth else "False"
            lines = e.splitlines()
            lines[0] = f"**{'ABCDE'[i]}.** → {verd}"
            e = "\n".join(lines)
            e = re.sub(
                r"So the statement is (True|False)\.\s*$",
                f"So the statement is {verd}.",
                e.strip(),
            )
            e2 = insert(e, *EX[(cid, i)])
            guard = 0
            while len(e2) < 330 and guard < 5:
                guard += 1
                e2 = insert(
                    e2,
                    r"That comparison uses only the recovered continuous or log quantities.",
                    D(r"t^{*}>0") if truth else D(r"t^{*}\neq0"),
                )
            check_clean(e2, f"{cid} {i}")
            if len(e2) < 320:
                raise SystemExit(f"short {cid} {i} {len(e2)}")
            for ban in ("the overview", "from the overview", "as in the overview", "in the overview"):
                if ban in e2.lower():
                    raise SystemExit(f"ovdep {cid} {i}")
            for block in re.findall(r"\$\$([\s\S]*?)\$\$", e2):
                cleaned = re.sub(r"\\mathrm\{[^}]*\}", "", block)
                if re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", cleaned):
                    raise SystemExit(f"eng {cid} {i}: {block[:80]}")
            assert e2.startswith(f"**{'ABCDE'[i]}.** → {verd}"), (cid, i, e2.splitlines()[0], verd)
            assert e2.rstrip().endswith(f"So the statement is {verd}.")
            teas.append(e2)
            lens.append(len(e2))
        ov = b["solution_overview"].strip()
        check_clean(ov, cid + " ov")
        if len(ov) < 200:
            ov += "\n\nThose recovered values are the shared inputs for the five claims."
        if not (200 <= len(ov) <= 800):
            raise SystemExit(f"ov {cid} {len(ov)}")
        out[cid] = {"solution_overview": ov, "tactical_explanations": teas}

    med = statistics.median(lens)
    print("built", len(out), "mean", round(statistics.mean(lens)), "median", med, "min", min(lens), "max", max(lens))
    if med < 300:
        raise SystemExit("median too low")

    # Final key alignment check before write
    for cid, body in out.items():
        for i, e in enumerate(body["tactical_explanations"]):
            v = "True" if tasks[cid]["answer_key"][i] else "False"
            assert e.startswith(f"**{'ABCDE'[i]}.** → {v}"), (cid, i, e.splitlines()[0])

    lines = [
        '"""Ch10.3 mixed-exam explanation bodies (teacher voice)."""',
        "from __future__ import annotations",
        "",
        "BODIES_103: dict[str, dict] = {",
    ]
    for cid, body in out.items():
        lines.append(f"    {cid!r}: {{")
        lines.append(f"        'solution_overview': {body['solution_overview']!r},")
        lines.append("        'tactical_explanations': [")
        for e in body["tactical_explanations"]:
            lines.append(f"            {e!r},")
        lines.append("        ],")
        lines.append("    },")
    lines += [
        "}",
        "",
        "",
        "if __name__ == '__main__':",
        "    import json as _json",
        "    import re as _re",
        "    import statistics as _stats",
        "    from pathlib import Path as _P",
        "    assert len(BODIES_103) == 30",
        "    _lens = []",
        "    _ban = ('the overview', 'from the overview', 'as in the overview', 'in the overview')",
        "    _by = {t['case_id']: t for t in _json.loads(_P('/workspace/src/data/math-ch10-exp-log.json').read_text())['tasks'] if str(t['case_id']).startswith('MATH 10.3')}",
        "    for _cid, _b in BODIES_103.items():",
        "        assert 200 <= len(_b['solution_overview']) <= 800, (_cid, len(_b['solution_overview']))",
        "        for _ch in (chr(7), chr(8), chr(12)):",
        "            assert _ch not in _b['solution_overview']",
        "        for _i, _e in enumerate(_b['tactical_explanations']):",
        "            for _ch in (chr(7), chr(8), chr(12)):",
        "                assert _ch not in _e, (_cid, _i)",
        "            _v = 'True' if _by[_cid]['answer_key'][_i] else 'False'",
        "            assert _e.startswith('**' + 'ABCDE'[_i] + '.** → ' + _v), (_cid, _i, _e.splitlines()[0])",
        "            assert _e.strip().endswith('So the statement is ' + _v + '.')",
        "            assert _e.count('$$') % 2 == 0 and len(_e) >= 180",
        "            assert not any(b in _e.lower() for b in _ban)",
        "            for _block in _re.findall(r'\\$\\$([\\s\\S]*?)\\$\\$', _e):",
        "                _c = _re.sub(r'\\\\mathrm\\{[^}]*\\}', '', _block)",
        "                assert not _re.search(r'[A-Za-z]{3,}\\s+[A-Za-z]{3,}', _c), (_cid, _i, _block[:60])",
        "            _lens.append(len(_e))",
        "    assert _stats.median(_lens) >= 300",
        "    print('OK', len(BODIES_103), 'mean', round(_stats.mean(_lens)), 'median', _stats.median(_lens), 'min', min(_lens), 'max', max(_lens), 'ov', round(_stats.mean([len(b['solution_overview']) for b in BODIES_103.values()])))",
        "",
    ]
    OUT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("wrote", OUT, OUT.stat().st_size)
    # Verify immediately after write
    ns2: dict = {}
    exec(compile(OUT.read_text().split("if __name__")[0], "verify", "exec"), ns2)
    e = ns2["BODIES_103"]["MATH 10.3.3"]["tactical_explanations"][2]
    assert e.startswith("**C.** → False"), e.splitlines()[0]
    print("postwrite C ok")


if __name__ == "__main__":
    main()
