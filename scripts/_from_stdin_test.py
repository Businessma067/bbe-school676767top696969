import json,re
from pathlib import Path
PATH=Path("src/data/mock-exam-demo-sourced.json")
TS=Path("src/lib/mock-exam-demo-content.ts")
data=json.loads(PATH.read_text(encoding="utf-8"))
D=chr(36)
ARROW=chr(8594)
LETTERS="ABCDE"
def md(*exprs):
    return (chr(10)+chr(10)).join(D+D+chr(10)+e+chr(10)+D+D for e in exprs)
def wrap(letter,truth,body):
    v="True" if truth else "False"
    return "**"+letter+".** "+ARROW+" "+v+chr(10)+chr(10)+body.strip()+chr(10)+chr(10)+"So the statement is "+v+"."
def fmt(x):
    if abs(x-round(x))<1e-9: return str(int(round(x)))
    return ("%.6g"%x)
def ca_steps(inv,ar,cash):
    s1=inv+ar; ca=s1+cash
    t="Extract current-asset lines from the balance sheet:"+chr(10)+chr(10)+md("%d + %d = %d"%(inv,ar,s1),"%d + %d = %d"%(s1,cash,ca))
    return t,ca
def cl_steps(pay,od):
    cl=pay+od
    t="Extract current-liability lines from the balance sheet:"+chr(10)+chr(10)+md("%d + %d = %d"%(pay,od,cl))
    return t,cl
print("boot")
def div_display(num,den,places=3):
    val=num/float(den)
    approx=round(val+1e-12,places)
    return md("\\frac{%s}{%s}"%(fmt(num),fmt(den)), "\\approx %s"%fmt(approx)), approx
def pct_display(ratio,pctv):
    return md(fmt(ratio)+" \\times 100\\%", "= "+fmt(pctv)+"\\%")
def cmp_gt(a,b,ok):
    if ok: return md(fmt(a)+" > "+fmt(b))
    return md(fmt(a)+" \\ngtr "+fmt(b))
def cmp_lt(a,b,ok):
    if ok: return md(fmt(a)+" < "+fmt(b))
    return md(fmt(a)+" \\nless "+fmt(b))
SHEETS={
 "CASE 6.4.010":dict(inv=156,ar=81,cash=119,pay=197,od=26,eq=478,ta=1181,bld=464,tl=703,loan=401,bonds=79,nca=None),
 "CASE 6.2.039":dict(inv=119,ar=60,cash=97,pay=74,od=58,eq=285,ta=860,bld=307,tl=575,loan=388,bonds=55),
 "CASE 6.1.020":dict(inv=136,ar=162,cash=34,pay=150,od=48,eq=718,ta=1206,bld=492,tl=488,loan=207,bonds=83),
 "CASE 6.5.068":dict(inv=215,ar=156,cash=80,pay=228,od=39,eq=447,ta=1089,bld=307,tl=642,loan=286,bonds=89),
 "CASE 6.5.074":dict(inv=169,ar=103,cash=83,pay=143,od=34,eq=290,ta=933,bld=305,tl=643,loan=396,bonds=70),
 "CASE 6.5.060":dict(inv=97,ar=79,cash=104,pay=114,od=64,eq=310,ta=963,bld=474,tl=653,loan=424,bonds=51),
 "CASE 6.5.077":dict(inv=231,ar=180,cash=105,pay=153,od=84,eq=584,ta=1214,bld=502,tl=630,loan=346,bonds=47,nca_parts=(502,124,43,29)),
 "CASE 6.5.029":dict(inv=273,ar=145,cash=45,pay=80,od=48,eq=882,ta=1347,bld=485,tl=465,loan=288,bonds=49),
}
def build_ratio_letter(kind, truth, s, thr):
    inv,ar,cash,pay,od=s["inv"],s["ar"],s["cash"],s["pay"],s["od"]
    ca_t,ca=ca_steps(inv,ar,cash); cl_t,cl=cl_steps(pay,od)
    if kind=="wc":
        wc=ca-cl
        body=ca_t+chr(10)+chr(10)+cl_t+chr(10)+chr(10)+"Working capital is the difference:"+chr(10)+chr(10)+md("%s - %s = %s"%(fmt(ca),fmt(cl),fmt(wc)), "%s > 0"%fmt(wc))
        body+=chr(10)+chr(10)+"Working capital is EUR "+fmt(wc)+" thousand and positive, matching the claim."
        return body
    if kind=="current":
        steps,approx=div_display(ca,cl); body=ca_t+chr(10)+chr(10)+cl_t+chr(10)+chr(10)+"Divide current assets by current liabilities:"+chr(10)+chr(10)+steps
        if thr is not None and "below" in str(thr):
            pass
        return body
print("stub")

