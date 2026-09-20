import json
import re
from pathlib import Path

live = json.loads(Path(r"src/data/wiso/math-de-ch11.json").read_text(encoding="utf-8"))
pack = json.loads(
    Path(r"textbook/output/wiso_math_retranslate/ch11-p01.json").read_text(encoding="utf-8")
)
done = json.loads(
    Path(r"textbook/output/wiso_math_retranslate_done/ch11-p01.json").read_text(encoding="utf-8")
)
done_by = {r["case_id"]: r for r in done}
CLOSER = re.compile(r"Die Aussage ist (wahr|falsch)\.\s*$")

errs = []
for c in pack:
    cid = c["case_id"]
    L = live[cid]
    expl = L["tactical_explanations"]
    key = c["answer_key"]
    if len(expl) != 5:
        errs.append(f"{cid}: not 5")
        continue
    for i, e in enumerate(expl):
        letter = chr(65 + i)
        if "\u2014" in e:
            errs.append(f"{cid} {letter}: emdash")
        m = CLOSER.search(e.strip())
        if not m:
            errs.append(f"{cid} {letter}: closer")
        elif (m.group(1) == "wahr") != bool(key[i]):
            errs.append(f"{cid} {letter}: key mismatch")
        if re.search(r"\b(So the statement|which matches|Rephrasing)\b", e):
            errs.append(f"{cid} {letter}: english")
        en_len = len(c["tactical_explanations_en"][i])
        if len(e) < 0.7 * en_len:
            errs.append(f"{cid} {letter}: short DE={len(e)} EN={en_len}")
    drow = done_by[cid]
    if c["solution_overview_short"]:
        if "solution_overview" not in drow:
            errs.append(f"{cid}: done missing overview")
        if "\u2014" in L.get("solution_overview", ""):
            errs.append(f"{cid}: overview emdash")
    else:
        if "solution_overview" in drow:
            errs.append(f"{cid}: unexpected overview in done")

print("patched", len(done), "errs", len(errs))
for e in errs[:40]:
    print(e)
print("11.13 has overview in done:", "solution_overview" in done_by["MATH 11.13"])
print("11.04 has overview in done:", "solution_overview" in done_by["MATH 11.04"])
