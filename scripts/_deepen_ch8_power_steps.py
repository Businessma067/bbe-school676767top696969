#!/usr/bin/env python3
"""Deepen Ch8 power-functions.ts + math-ch8-exam.json to maximal step density."""
from __future__ import annotations
import argparse, json, re
from pathlib import Path

ROOT = Path("/workspace")
TS_PATH = ROOT / "src/data/math-ch8-power-functions.ts"
EXAM_PATH = ROOT / "src/data/math-ch8-exam.json"
DISPLAY_RE = re.compile(r"\$\$(.+?)\$\$", re.S)
LETTERS = "ABCDE"

def tidy(s):
    s = re.sub(r"[ \t]+\n", "\n", s)
    return re.sub(r"\n{3,}", "\n\n", s).strip()

def norm(inner): return re.sub(r"\s+", " ", inner).strip()
def D(inner): return f"$${norm(inner)}$$"
def ts_to_math(s): return s.replace("\\\\", "\\")
def math_to_ts(s): return s.replace("\\", "\\\\")

def split_eq(s):
    protected=[]
    def prot(m):
        protected.append(m.group(0)); return f"«P{len(protected)-1}»"
    tmp=re.sub(r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|to)", prot, s)
    parts=tmp.split("=")
    def unprot(c): return re.sub(r"«P(\d+)»", lambda m: protected[int(m.group(1))], c)
    return [unprot(p).strip() for p in parts]

def tokenize(text):
    parts=[]; pos=0
    for m in DISPLAY_RE.finditer(text):
        if m.start()>pos: parts.append(("prose", text[pos:m.start()]))
        parts.append(("disp", norm(m.group(1)))); pos=m.end()
    if pos<len(text): parts.append(("prose", text[pos:]))
    return parts

def reassemble(parts):
    buf=[]
    for kind,val in parts:
        if kind=="prose": buf.append(val)
        else:
            if buf and not buf[-1].endswith("\n") and buf[-1]: buf.append("\n\n")
            buf.append(D(val))
    return "".join(buf)

def expand_equals_chain(body):
    s=norm(body)
    if r"\begin{" in s or r"\qquad" in s: return None
    if re.search(r"\\(?:neq|leq|geq|leqslant|geqslant|approx|equiv|iff|Rightarrow|to)", s): return None
    parts=split_eq(s)
    if len(parts)<3: return None
    blocks=[D(f"{parts[0]}={parts[1]}")]
    lhs=parts[0].strip()
    simple=bool(re.match(r"^[A-Za-z\\][A-Za-z0-9_\\{}()]*$", lhs) or re.match(r"^[A-Za-z]\([^)]*\)$", lhs))
    for p in parts[2:]:
        blocks.append(D(f"{lhs}={p}") if simple else D(f"={p}"))
    return "\n\n".join(blocks)

def expand_all_displays(text):
    def one(m):
        out=expand_equals_chain(m.group(1))
        return out if out is not None else D(m.group(1))
    prev=cur=None; cur=text
    for _ in range(6):
        if cur==prev: break
        prev,cur=cur, DISPLAY_RE.sub(one, cur)
    return cur

def ensure_header_closer(text, letter, truth):
    verd="True" if truth else "False"
    text=text.strip()
    text=re.sub(r"^\*\*[A-E]\.\*\* → (?:True|False)", f"**{letter}.** → {verd}", text, count=1)
    if not text.startswith(f"**{letter}.**"):
        text=f"**{letter}.** → {verd}\n\n"+text
    text=re.sub(r"\n*QED\.?\s*$", "", text, flags=re.I)
    text=re.sub(r"(?i)so the statement is (?:True|False)\.\s*$", f"So the statement is {verd}.", text)
    if not re.search(r"So the statement is (?:True|False)\.\s*$", text):
        text=text.rstrip()+f"\n\nSo the statement is {verd}."
    return tidy(text)

def deepen_recovered_formula_prose(text):
    return re.sub(
        r"((?:The overview recovered|overview recovered|recovered)\s+)\$([^$]{3,100})\$\.?",
        lambda m: f"{m.group(1)}\n\n{D(m.group(2))}\n\n", text, flags=re.I)

def lift_inline_power_math(text):
    inline=re.compile(r"(?<!\$)\$(?!\$)([^$\n]{3,120})\$(?!\$)")
    def should_lift(inner):
        if re.fullmatch(r"[A-Za-z](?:\([^)]*\))?", inner): return False
        if "^" in inner or r"\frac" in inner or r"\cdot" in inner or r"\to" in inner: return True
        if "=" in inner and re.search(r"\d|[A-Za-z]\(", inner): return True
        return False
    def repl(m):
        inner=m.group(1).strip()
        if not should_lift(inner): return m.group(0)
        parts=split_eq(inner)
        if len(parts)>=3:
            lhs=parts[0].strip()
            blocks=[D(f"{parts[0]}={parts[1]}")]
            for p in parts[2:]: blocks.append(D(f"{lhs}={p}"))
            return "\n\n"+"\n\n".join(blocks)+"\n\n"
        return "\n\n"+D(inner)+"\n\n"
    chunks=[]; pos=0
    for m in DISPLAY_RE.finditer(text):
        chunks.append(inline.sub(repl, text[pos:m.start()])); chunks.append(m.group(0)); pos=m.end()
    chunks.append(inline.sub(repl, text[pos:]))
    return "".join(chunks)

def _pow_eval(expr):
    def powi(m): return str(int(m.group(1))**int(m.group(2)))
    s2=re.sub(r"(?<![A-Za-z{])(\d+)\^\{(\d+)\}", powi, expr)
    s2=re.sub(r"(?<![A-Za-z{])(\d+)\^(\d+)(?!\d)", powi, s2)
    return s2 if s2!=expr else None

def _cdot_once(expr):
    m=re.search(r"(?<![A-Za-z{])(\d+)\\cdot(-?\d+)", expr)
    if not m: return None
    return expr[:m.start()]+str(int(m.group(1))*int(m.group(2)))+expr[m.end():]

def expand_numeric_eval_chain(text):
    parts=tokenize(text); out=[]; i=0
    while i<len(parts):
        kind,val=parts[i]
        if kind!="disp":
            out.append((kind,val)); i+=1; continue
        m=re.match(r"^(.+?)=(.+)$", val)
        if not m or not re.search(r"\^|\\cdot", m.group(2)):
            out.append((kind,val)); i+=1; continue
        lhs,rhs=m.group(1).strip(), m.group(2).strip()
        steps=[rhs]; cur=rhs
        for _ in range(6):
            nxt=_pow_eval(cur)
            if not nxt or nxt==cur: break
            steps.append(nxt); cur=nxt
        for _ in range(8):
            nxt=_cdot_once(cur)
            if not nxt or nxt==cur: break
            steps.append(nxt); cur=nxt
        emitted=False
        for pm in re.finditer(r"(?<![A-Za-z{])(\d+)\^\{(\d+)\}", rhs):
            b,e=int(pm.group(1)), int(pm.group(2))
            out.append(("disp", f"{lhs}={rhs}"))
            out.append(("disp", f"{b}^{{{e}}}={b**e}"))
            for s in steps[1:]: out.append(("disp", f"{lhs}={s}"))
            emitted=True; break
        if not emitted:
            if len(steps)>1:
                for s in steps: out.append(("disp", f"{lhs}={s}"))
            else:
                out.append((kind,val)); i+=1; continue
        j=i+1
        while j<len(parts):
            if parts[j][0]=="prose" and not parts[j][1].strip(): j+=1; continue
            if parts[j][0]=="disp" and parts[j][1].startswith(lhs+"="): j+=1; continue
            break
        i=j
    return reassemble(out)

def expand_frac_power_evals(text):
    parts=tokenize(text); out=[]; seen=set()
    for kind,val in parts:
        if kind!="disp":
            out.append((kind,val)); continue
        compact=norm(val)
        m=re.search(r"(?<![A-Za-z{])(\d+)\^\{\\frac\{(\d+)\}\{(\d+)\}\}", compact)
        if not m:
            out.append((kind,val)); continue
        base,p,q=int(m.group(1)),int(m.group(2)),int(m.group(3))
        key=f"{base}:{p}:{q}"; root=round(base**(1/q))
        if root**q!=base or key in seen:
            out.append((kind,val)); continue
        seen.add(key); powered=root**p
        law=f"{base}^{{\\frac{{{p}}}{{{q}}}}}=\\bigl({base}^{{\\frac{{1}}{{{q}}}}}\\bigr)^{{{p}}}"
        mm=re.match(r"^(.+?)=(.+)$", compact)
        out += [("disp", compact), ("disp", law),
                ("disp", f"{base}^{{\\frac{{1}}{{{q}}}}}={root}"),
                ("disp", f"{root}^{{{p}}}={powered}")]
        if mm:
            lhs=mm.group(1).strip()
            new_rhs=mm.group(2).replace(m.group(0), str(powered))
            if new_rhs!=mm.group(2):
                out.append(("disp", f"{lhs}={new_rhs}"))
                mprod=re.match(r"^(\d+)\\cdot(\d+)$", new_rhs.replace(" ",""))
                if mprod: out.append(("disp", f"{lhs}={int(mprod.group(1))*int(mprod.group(2))}"))
    return reassemble(out)

def unpack_scale_ratio_display(text):
    parts=tokenize(text); out=[]
    for kind,val in parts:
        if kind!="disp":
            out.append((kind,val)); continue
        m2=re.match(r"^(.+?)=(2|3|4|5|10)\^\{(\d+)\}$", norm(val))
        if m2 and re.search(r"\\frac", m2.group(1)):
            base,exp=int(m2.group(2)),int(m2.group(3))
            out.append(("disp", f"{m2.group(1)}={base}^{{{exp}}}"))
            out.append(("disp", f"{m2.group(1)}={base**exp}"))
            continue
        out.append((kind,val))
    return reassemble(out)

def dedupe_consecutive_displays(text):
    parts=tokenize(text); out=[]; last=None
    for kind,val in parts:
        if kind=="disp":
            if val==last: continue
            last=val; out.append((kind,val))
        else:
            out.append((kind,val))
            if val.strip(): last=None
    return reassemble(out)

def strip_duplicate_prose(text):
    blocks=re.split(r"\n\n+", text); out=[]; prev=None
    for b in blocks:
        b2=b.strip()
        if b2==prev and not b2.startswith("$$") and not b2.startswith("**"): continue
        out.append(b); prev=b2
    return "\n\n".join(out)

def process_explanation(text, letter, truth, stmt="", *, from_ts=False):
    if from_ts:
        text=ts_to_math(text); stmt=ts_to_math(stmt)
    text=deepen_recovered_formula_prose(text)
    text=lift_inline_power_math(text)
    text=expand_all_displays(text)
    text=expand_numeric_eval_chain(text)
    text=expand_frac_power_evals(text)
    text=unpack_scale_ratio_display(text)
    text=expand_all_displays(text)
    text=lift_inline_power_math(text)
    text=dedupe_consecutive_displays(text)
    text=strip_duplicate_prose(text)
    text=ensure_header_closer(text, letter, truth)
    text=tidy(text)
    return math_to_ts(text) if from_ts else text

def audit(text, letter, truth, case_id):
    problems=[]; verd="True" if truth else "False"
    if not text.startswith(f"**{letter}.** → {verd}"): problems.append(f"{case_id} {letter}: bad header")
    if text.count("$$")%2: problems.append(f"{case_id} {letter}: uneven $$")
    if not text.rstrip().endswith(f"So the statement is {verd}."): problems.append(f"{case_id} {letter}: bad closer")
    if re.search(r"QED", text, re.I): problems.append(f"{case_id} {letter}: QED")
    return problems

_TASK_RE=re.compile(
    r"(case_id:\s*`([^`]+)`,[\s\S]*?answer_key:\s*\[(.*?)\],\s*tactical_explanations:\s*\[)([\s\S]*?)(\n\s*\],)", re.S)

def extract_bt(inner):
    items=[]; i=0
    while i<len(inner):
        while i<len(inner) and inner[i] in " \n\t,": i+=1
        if i>=len(inner) or inner[i]!="`": break
        start=i; i+=1; buf=[]
        while i<len(inner):
            if inner[i]=="\\" and i+1<len(inner):
                buf.append(inner[i:i+2]); i+=2; continue
            if inner[i]=="`": break
            buf.append(inner[i]); i+=1
        items.append((start, i+1, "".join(buf))); i+=1
    return items

def process_ts(start=0, end=None):
    text=TS_PATH.read_text(encoding="utf-8")
    matches=list(_TASK_RE.finditer(text))
    end_i=len(matches) if end is None else min(end, len(matches))
    case_starts=[m.start() for m in re.finditer(r"case_id:\s*`", text)]
    changed,problems,ranges=0,[],[]
    pieces=[]; last=0
    for ti,m in enumerate(matches):
        pieces.append(text[last:m.start()]); case_id=m.group(2)
        if start<=ti<end_i:
            truths=[]
            for tok in m.group(3).split(","):
                tok=tok.strip()
                if tok in ("true","True"): truths.append(True)
                elif tok in ("false","False"): truths.append(False)
            task_slice=text[case_starts[ti] if ti<len(case_starts) else m.start():m.end()]
            sm=re.search(r"statements:\s*\[([\s\S]*?)\],\s*\n\s*answer_key", task_slice)
            stmts=[b for _,_,b in extract_bt(sm.group(1))] if sm else []
            inner=m.group(4); items=extract_bt(inner)
            new_inner_parts=[]; cursor=0; task_changed=False
            for i,(s,e,body) in enumerate(items):
                new_inner_parts.append(inner[cursor:s])
                letter=LETTERS[i] if i<5 else "A"
                truth=truths[i] if i<len(truths) else True
                stmt=stmts[i] if i<len(stmts) else ""
                if re.match(r"\*\*[A-E]\.\*\*", body.lstrip()):
                    new=process_explanation(body, letter, truth, stmt, from_ts=True)
                    if ts_to_math(new)!=ts_to_math(body):
                        changed+=1; task_changed=True
                    problems.extend(audit(ts_to_math(new), letter, truth, case_id))
                    new_inner_parts.append("`"+new.replace("`","\\`")+"`")
                else:
                    new_inner_parts.append(inner[s:e])
                cursor=e
            new_inner_parts.append(inner[cursor:])
            pieces.append(m.group(1)+"".join(new_inner_parts)+m.group(5))
            if task_changed: ranges.append(case_id)
            print(f"  audited {case_id} A–E")
        else:
            pieces.append(m.group(0))
        last=m.end()
    pieces.append(text[last:])
    TS_PATH.write_text("".join(pieces), encoding="utf-8")
    return changed, problems, ranges

def process_exam():
    data=json.loads(EXAM_PATH.read_text(encoding="utf-8"))
    changed,problems,ranges=0,[],[]
    for t in data["tasks"]:
        new_expls=[]; task_changed=False
        for i,e in enumerate(t["tactical_explanations"]):
            letter,truth=LETTERS[i], bool(t["answer_key"][i])
            new=process_explanation(e, letter, truth, t["statements"][i], from_ts=False)
            if new!=e: changed+=1; task_changed=True
            problems.extend(audit(new, letter, truth, t["case_id"]))
            new_expls.append(new)
        t["tactical_explanations"]=new_expls
        if task_changed: ranges.append(t["case_id"])
        print(f"  audited {t['case_id']} A–E")
    EXAM_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    return changed, problems, ranges

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--mode", choices=["ts","exam","all"], default="all")
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--end", type=int, default=None)
    args=ap.parse_args()
    if args.mode in ("ts","all"):
        ch,probs,ranges=process_ts(args.start, args.end)
        print(f"ch8-ts: changed {ch}, audit {len(probs)}, tasks {len(ranges)}")
        for p in probs[:20]: print(" ", p)
    if args.mode in ("exam","all"):
        ch,probs,ranges=process_exam()
        print(f"ch8-exam: changed {ch}, audit {len(probs)}, tasks {len(ranges)}")
        for p in probs[:20]: print(" ", p)

if __name__=="__main__":
    main()
