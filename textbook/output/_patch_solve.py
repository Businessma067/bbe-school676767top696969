# -*- coding: utf-8 -*-
from pathlib import Path

path = Path(__file__).with_name("rebuild_ch5_overviews_setup.py")
text = path.read_text(encoding="utf-8")
start = text.index("def format_solution_steps")
end = text.index("def build_overview")
new = r'''def format_solution_steps(solution: str) -> str:
    """Safe Solve steps: numbered prose + inline KaTeX (no aggressive $$ lifting)."""
    sol = normalize_solution(solution)
    if not sol:
        return ""
    sents = [s.strip() for s in re.split(r"(?<=[.!?])\s+(?=[A-Z0-9$\\\"(])", sol) if s.strip()]
    merged: list[str] = []
    for s in sents:
        if merged and re.search(r"[+\-×·/=]$", merged[-1].rstrip()):
            merged[-1] = merged[-1] + " " + s
        elif merged and merged[-1].rstrip().endswith(("vs.", "vs")):
            merged[-1] = merged[-1] + " " + s
        else:
            merged.append(s)
    out: list[str] = []
    for i, s in enumerate(merged, 1):
        s = mathify(s)
        sm = re.match(r"^(.+?[.!?])\s+(.*)$", s)
        if (
            sm
            and 12 <= len(sm.group(1)) <= 110
            and not re.search(r"[+\-×·/=]$", sm.group(1).rstrip("."))
        ):
            title = sm.group(1).rstrip(".")
            rest = sm.group(2).strip()
            block = f"**{i}. {title}.**"
            if rest:
                block += f"\n\n{rest}"
            out.append(block)
        else:
            out.append(f"**{i}.** {s}")
    return "\n\n".join(out)


def polish_numbered_step(block: str) -> str:
    """No-op: equation-lifting mangled PDF mid-line breaks."""
    return block.strip()


def polish_solve_section(solve: str) -> str:
    return (solve or "").strip()


'''
path.write_text(text[:start] + new + text[end:], encoding="utf-8")
print("ok", start, end)
