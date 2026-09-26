import json, re
from pathlib import Path
data=json.loads(Path("src/data/mock-exam-demo-sourced.json").read_text(encoding="utf-8"))
LETTERS="ABCDE"
D=chr(36)
BLOCK_RE=re.compile(D+D+"(.+?)"+D+D, re.S)
def count_eqs(body):
    cleaned=re.sub(r"\\(?:neq|leq|geq|approx|equiv|cong|doteq)\\b", "", body)
    cleaned=cleaned.replace("\ngtr", "").replace("\nless", "")
    return cleaned.count("=")
def audit(subject):
    lens,shorts,chains=[],[],[]
    for t in data[subject]:
        cid=t["case_id"]
        for i,e in enumerate(t["tactical_explanations"]):
            n=len(e)
            lens.append((cid,LETTERS[i],n))
            for m in BLOCK_RE.finditer(e):
                body=m.group(1).strip()
                eqs=count_eqs(body)
                if eqs>=2:
                    preview=(" ").join(body.split())[:140]
                    chains.append((cid,LETTERS[i],eqs,n,preview))
            if n<400:
                shorts.append((cid,LETTERS[i],n))
    avg=sum(x[2] for x in lens)/len(lens)
    print(subject, len(lens), round(avg,1), min(x[2] for x in lens), max(x[2] for x in lens))
    print("chains", len(chains))
    for c in chains: print(c)
    print("short400", len(shorts))
print("CURRENT")
audit("economics")
audit("math")
