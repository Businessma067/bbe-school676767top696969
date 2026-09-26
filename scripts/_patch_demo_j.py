import json, re
from pathlib import Path
PATH = Path("src/data/mock-exam-demo-sourced.json")
TS = Path("src/lib/mock-exam-demo-content.ts")
data = json.loads(PATH.read_text(encoding="utf-8"))
D = chr(36)
ARROW = "→"
LETTERS = "ABCDE"

def md(*exprs):
    return ("\n\n").join(D+D+"\n"+e+"\n"+D+D for e in exprs)

def wrap(letter, truth, body):
    v = "True" if truth else "False"
    return ("**%s.** %s %s\n\n%s\n\nSo the statement is %s.") % (letter, ARROW, v, body.strip(), v)

def fmt(x):
    if abs(x - round(x)) < 1e-9:
        return str(int(round(x)))
    return ("%.6g" % x)

def ca_steps(inv, ar, cash):
    s1 = inv + ar
    ca = s1 + cash
    t = "Extract current-asset lines from the balance sheet:\n\n" + md(("%d + %d = %d") % (inv, ar, s1), ("%d + %d = %d") % (s1, cash, ca))
    return t, ca

def cl_steps(pay, od):
    cl = pay + od
    t = "Extract current-liability lines from the balance sheet:\n\n" + md(("%d + %d = %d") % (pay, od, cl))
    return t, cl

def div_display(num, den, places=3):
    val = num / float(den)
    approx = round(val + 1e-12, places)
    return md(("\\frac{%s}{%s}") % (fmt(num), fmt(den)), ("\\approx %s") % fmt(approx)), approx

def pct_display(ratio, pctv):
    return md(fmt(ratio) + " \\times 100\\%", "= " + fmt(pctv) + "\\%")

def cmp_gt(a, b, ok):
    return md(fmt(a) + (" > " if ok else " \\ngtr ") + fmt(b))

def cmp_lt(a, b, ok):
    return md(fmt(a) + (" < " if ok else " \\nless ") + fmt(b))

print("part1 ok")

SHEETS = {
    "CASE 6.4.010": dict(inv=156, ar=81, cash=119, pay=197, od=26, eq=478, ta=1181, bld=464, tl=703),
    "CASE 6.2.039": dict(inv=119, ar=60, cash=97, pay=74, od=58, eq=285, ta=860, bld=307, tl=575),
    "CASE 6.1.020": dict(inv=136, ar=162, cash=34, pay=150, od=48, eq=718, ta=1206, bld=492, tl=488),
    "CASE 6.5.068": dict(inv=215, ar=156, cash=80, pay=228, od=39, eq=447, ta=1089, bld=307, tl=642),
    "CASE 6.5.074": dict(inv=169, ar=103, cash=83, pay=143, od=34, eq=290, ta=933, bld=305, tl=643, loan=396),
    "CASE 6.5.060": dict(inv=97, ar=79, cash=104, pay=114, od=64, eq=310, ta=963, bld=474, tl=653),
    "CASE 6.5.077": dict(inv=231, ar=180, cash=105, pay=153, od=84, eq=584, ta=1214, bld=502, tl=630, loan=346, bonds=47, nca=(502, 124, 43, 29)),
    "CASE 6.5.029": dict(inv=273, ar=145, cash=45, pay=80, od=48, eq=882, ta=1347, bld=485, tl=465),
}

def thr_num(stmt):
    m = re.search(r"(\d+(?:\.\d+)?)\s*%", stmt)
    if m: return float(m.group(1))
    m = re.search("€\s*(\d+(?:\.\d+)?)", stmt)
    if m: return float(m.group(1))
    m = re.search(r"(?:below|above|exceeds|less than|more than|over)\s*(\d+(?:\.\d+)?)", stmt, re.I)
    if m: return float(m.group(1))
    m = re.search(r"(\d+(?:\.\d+)?)\s*times", stmt, re.I)
    if m: return float(m.group(1))
    nums = re.findall(r"(\d+(?:\.\d+)?)", stmt)
    return float(nums[-1]) if nums else None
print("part2b")

def expl_wc(s):
    ca_t, ca = ca_steps(s["inv"], s["ar"], s["cash"])
    cl_t, cl = cl_steps(s["pay"], s["od"])
    wc = ca - cl
    body = ca_t + "\n\n" + cl_t + "\n\nWorking capital is the difference:\n\n"
    body += md(("%s - %s = %s") % (fmt(ca), fmt(cl), fmt(wc)), ("%s > 0") % fmt(wc))
    body += "\n\nWorking capital is EUR " + fmt(wc) + " thousand and positive, matching the claim."
    return body

def expl_current(s, thr, below):
    ca_t, ca = ca_steps(s["inv"], s["ar"], s["cash"])
    cl_t, cl = cl_steps(s["pay"], s["od"])
    steps, approx = div_display(ca, cl)
    body = ca_t + "\n\n" + cl_t + "\n\nDivide current assets by current liabilities:\n\n" + steps + "\n\n"
    if below:
        ok = approx < thr
        body += cmp_lt(approx, thr, ok)
        body += "\n\nThe current ratio is about " + fmt(approx) + (", which is below " if ok else ", so it is not below ") + fmt(thr) + "."
    else:
        ok = approx > thr
        body += cmp_gt(approx, thr, ok)
        body += "\n\nThe current ratio is about " + fmt(approx) + (", which clears the " if ok else ", so it does not clear the ") + fmt(thr) + " hurdle."
    return body

def expl_quick(s, thr):
    ca_t, ca = ca_steps(s["inv"], s["ar"], s["cash"])
    cl_t, cl = cl_steps(s["pay"], s["od"])
    inv = s["inv"]
    qn = ca - inv
    body = ca_t + "\n\n" + cl_t + "\n\nStrip inventory from current assets:\n\n"
    body += md(("%s - %s = %s") % (fmt(ca), fmt(inv), fmt(qn)))
    body += "\n\nDivide by current liabilities:\n\n"
    steps, approx = div_display(qn, cl)
    body += steps + "\n\n"
    ok = approx > thr
    body += cmp_gt(approx, thr, ok)
    body += "\n\nQuick cover is " + ("about " if ok else "only about ") + fmt(approx) + (" times, which clears the " if ok else " times, so it does not exceed ") + fmt(thr) + (" hurdle." if ok else ".")
    return body
print("part3")

def expl_share(num_label, num, den_label, den, thr, more):
    steps, approx = div_display(num, den)
    pctv = round(approx * 100 + 1e-12, 1)
    body = "Read " + num_label + " and " + den_label + " from the extract:\n\n" + md(fmt(num), fmt(den))
    body += "\n\nForm the share:\n\n" + steps + "\n\nConvert to a percent:\n\n" + pct_display(approx, pctv) + "\n\n"
    if more:
        ok = pctv > thr
        body += cmp_gt(pctv, thr, ok)
        body += "\n\n" + num_label.capitalize() + " are about " + fmt(pctv) + "% of " + den_label + (", above the " if ok else ", so the claim of more than ") + fmt(thr) + "%" + (" threshold." if ok else " fails.")
    else:
        ok = pctv < thr
        body += cmp_lt(pctv, thr, ok)
        body += "\n\n" + num_label.capitalize() + " are about " + fmt(pctv) + "% of " + den_label + (", below the " if ok else ", so they are not below ") + fmt(thr) + "%" + (" claim." if ok else ".")
    return body

def expl_leverage(kind, s, thr, below):
    if kind == "debt":
        num, den, label = s["tl"], s["ta"], "debt ratio"
        body = "Read total liabilities and total assets from the extract:\n\n" + md(fmt(num), fmt(den))
    else:
        num, den, label = s["eq"], s["ta"], "equity ratio"
        body = "Read total equity and total assets from the extract:\n\n" + md(fmt(num), fmt(den))
    body += "\n\nForm the ratio:\n\n"
    steps, approx = div_display(num, den)
    pctv = round(approx * 100 + 1e-12, 1)
    body += steps + "\n\nConvert to a percent:\n\n" + pct_display(approx, pctv) + "\n\n"
    if below:
        ok = pctv < thr
        body += cmp_lt(pctv, thr, ok)
        body += "\n\nThe " + label + " is about " + fmt(pctv) + "%" + (", which is below " if ok else ", so it is not below ") + fmt(thr) + "%."
    else:
        ok = pctv > thr
        body += cmp_gt(pctv, thr, ok)
        body += "\n\nThe " + label + " is about " + fmt(pctv) + "%" + (", which clears the " if ok else ", so it does not exceed ") + fmt(thr) + "%" + (" hurdle." if ok else ".")
    return body
print("part4")

CONCEPT = {
    ("CASE 6.4.010", 0): "Tax authorities and banks are standard external users of financial accounting reports such as the balance sheet and the income statement, alongside internal managers. The claim restates that audience fact.",
    ("CASE 6.2.039", 0): "Under the straight-line method, depreciable cost is spread evenly across useful life, so every year carries the same depreciation charge. That is exactly the rule the claim restates.",
    ("CASE 6.3.027", 1): "Current assets such as inventory, trade receivables and cash are the short-term, more liquid stock of resources. They are not expected to be held for use beyond one year, which is exactly the classification the claim states.",
    ("CASE 6.1.020", 0): "Non-current assets are held for use in the business beyond one year and normally have a useful life longer than one year. That is the standard classification the claim restates.",
    ("CASE 6.5.074", 3): "A long-term bank loan is borrowed money owed to a lender. Read the loan figure from the extract:\n\n" + md("396") + "\n\nIt belongs with non-current liabilities, not with equity (share capital and retained earnings). Classifying the EUR 396 thousand loan inside equity would misclassify a liability as an ownership claim.",
}
print("part5", len(CONCEPT))

def build_sheet_letter(cid, idx, stmt, truth, s):
    low = stmt.lower()
    thr = thr_num(stmt)
    if (cid, idx) in CONCEPT:
        body = CONCEPT[(cid, idx)]
        if cid == "CASE 6.5.074" and idx == 3:
            body = "A long-term bank loan is borrowed money owed to a lender. Read the loan figure from the extract:\n\n" + md("396") + "\n\nIt belongs with non-current liabilities, not with equity (share capital and retained earnings). Classifying the EUR 396 thousand loan inside equity would misclassify a liability as an ownership claim."
        return wrap(LETTERS[idx], truth, body)
    if "working capital" in low:
        return wrap(LETTERS[idx], truth, expl_wc(s))
    if "excluding inventory" in low or "after excluding" in low:
        return wrap(LETTERS[idx], truth, expl_quick(s, thr))
    if "current ratio" in low or ("current liabilities are covered by current assets" in low):
        below = ("below" in low) or ("less than" in low)
        return wrap(LETTERS[idx], truth, expl_current(s, thr, below))
    if "debt ratio" in low:
        return wrap(LETTERS[idx], truth, expl_leverage("debt", s, thr, below=False))
    if "equity ratio" in low:
        below = "below" in low
        return wrap(LETTERS[idx], truth, expl_leverage("equity", s, thr, below=below))
    if "buildings" in low:
        return wrap(LETTERS[idx], truth, expl_share("buildings", s["bld"], "total assets", s["ta"], thr, more=True))
    if low.startswith("inventory") or ("inventory make" in low):
        ca = s["inv"] + s["ar"] + s["cash"]
        return wrap(LETTERS[idx], truth, expl_share("inventory", s["inv"], "current assets", ca, thr, more=("more than" in low)))
    if "trade receivables" in low:
        ca = s["inv"] + s["ar"] + s["cash"]
        return wrap(LETTERS[idx], truth, expl_share("trade receivables", s["ar"], "current assets", ca, thr, more=False))
    if "cash" in low:
        ca = s["inv"] + s["ar"] + s["cash"]
        return wrap(LETTERS[idx], truth, expl_share("cash", s["cash"], "current assets", ca, thr, more=True))
    raise ValueError("Unhandled " + cid + " " + LETTERS[idx] + ": " + stmt)
print("part6")

def build_034():
    A = wrap("A", True, "Average inventory uses the opening and closing inventory balances from the extract:\n\n" + md("169 + 179 = 348", "\\frac{348}{2}", "174") + "\n\nCost of sales is read from the extract as 674. Divide by average inventory:\n\n" + md("\\frac{674}{174}", "\\approx 3.87", "3.87 < 6.87") + "\n\nInventory turns about 3.87 times a year, which is below the 6.87 claim.")
    B = wrap("B", False, "Average total assets uses the opening and closing total-asset balances:\n\n" + md("823 + 1028 = 1851", "\\frac{1851}{2}", "925.5") + "\n\nRevenue is read from the extract as 1019. Divide by average total assets:\n\n" + md("\\frac{1019}{925.5}", "\\approx 1.101", "1.101 \\ngtr 1.48") + "\n\nAsset turnover is about 1.10, so it does not clear the 1.48 hurdle.")
    C = wrap("C", True, "Recompute inventory turnover from the extract figures used in letter A:\n\n" + md("169 + 179 = 348", "\\frac{348}{2}", "174", "\\frac{674}{174}", "\\approx 3.87") + "\n\nThe recovered turnover is about 3.87, which rounds to the claim" + chr(39) + "s about 3.9. A higher turnover means stock is sold and replaced more often, so less cash sits tied up in inventory. That is exactly the reading the claim states.")
    D = wrap("D", True, "Read revenue from the extract line:\n\n" + md("1019", "1019 > 999") + "\n\nRevenue of EUR 1019 thousand exceeds the EUR 999 thousand threshold.")
    E = wrap("E", False, "Average trade receivables uses the opening and closing receivables balances:\n\n" + md("135 + 107 = 242", "\\frac{242}{2}", "121") + "\n\nRevenue is 1019. Divide by average receivables:\n\n" + md("\\frac{1019}{121}", "\\approx 8.42", "8.42 \\ngtr 10.4") + "\n\nReceivables turn about 8.42 times a year, so the claim of more than 10.4 fails.")
    return [A,B,C,D,E]
print("part7", [len(x) for x in build_034()])

def build_027():
    # Year1 equity 542, Year2 532; TA 1102/1144; Y2 NCL=388+53=441; Y2 CA=85+193+58=336; Y2 CL=104+67=171
    A = wrap("A", False, "Read Year-1 and Year-2 total equity from the extract:\n\n" + md("542", "532") + "\n\nCompute the change and the growth rate:\n\n" + md("532 - 542 = -10", "\\frac{-10}{542}", "\\approx -0.0185") + "\n\nConvert to a percent:\n\n" + pct_display(-0.0185, -1.8) + "\n\n" + cmp_gt(-1.8, 21.7, False) + "\n\nTotal equity actually fell by about 1.8%, so growth above 21.7% is false.")
    B = wrap("B", True, CONCEPT[("CASE 6.3.027", 1)])
    C = wrap("C", True, "Extract Year-2 non-current liabilities:\n\n" + md("388 + 53 = 441") + "\n\nRead Year-2 total equity:\n\n" + md("532") + "\n\nForm the NCL-to-equity share:\n\n" + div_display(441, 532)[0] + "\n\nConvert to a percent:\n\n" + pct_display(0.829, 82.9) + "\n\n" + cmp_lt(82.9, 91.7, True) + "\n\nYear-2 NCL over equity is about 82.9%, which is below the 91.7% claim.")
    D = wrap("D", True, "Extract Year-2 current assets:\n\n" + md("85 + 193 = 278", "278 + 58 = 336") + "\n\nExtract Year-2 current liabilities:\n\n" + md("104 + 67 = 171") + "\n\nDivide:\n\n" + div_display(336, 171)[0] + "\n\n" + cmp_lt(1.965, 2.02, True) + "\n\nCurrent assets cover current liabilities about 1.97 times in Year 2, which is less than 2.02.")
    E = wrap("E", False, "Read Year-1 and Year-2 total assets from the extract:\n\n" + md("1102", "1144") + "\n\nCompute the change and the growth rate:\n\n" + md("1144 - 1102 = 42", "\\frac{42}{1102}", "\\approx 0.0381") + "\n\nConvert to a percent:\n\n" + pct_display(0.0381, 3.8) + "\n\n" + cmp_gt(3.8, 12.2, False) + "\n\nTotal assets grew by only about 3.8%, so the claim of more than 12.2% fails.")
    return [A,B,C,D,E]
print("part8", [len(x) for x in build_027()])

def expl_077_E(s):
    # equity 584, NCL 346+47=393, NCA 502+124+43+29=698
    body = "Extract equity from the extract:\n\n" + md("584")
    body += "\n\nExtract non-current liabilities:\n\n" + md("346 + 47 = 393")
    body += "\n\nExtract non-current assets:\n\n" + md("502 + 124 = 626", "626 + 43 = 669", "669 + 29 = 698")
    body += "\n\nAdd equity and non-current liabilities:\n\n" + md("584 + 393 = 977")
    body += "\n\nSubtract non-current assets:\n\n" + md("977 - 698 = 279")
    body += "\n\nExpress the excess relative to non-current assets:\n\n" + div_display(279, 698)[0]
    body += "\n\nConvert to a percent:\n\n" + pct_display(0.4, 40.0)
    body += "\n\n" + cmp_gt(40.0, 26.8, True)
    body += "\n\nEquity plus non-current liabilities exceeds non-current assets by about 40.0%, clearing the 26.8% hurdle."
    return body

def build_all_econ():
    out = {}
    out["CASE 6.5.034"] = build_034()
    out["CASE 6.3.027"] = build_027()
    for t in data["economics"]:
        cid = t["case_id"]
        if cid in out: continue
        if cid not in SHEETS: raise SystemExit("missing sheet "+cid)
        s = SHEETS[cid]
        letters = []
        for i, (stmt, truth) in enumerate(zip(t["statements"], t["answer_key"])):
            if cid == "CASE 6.5.077" and i == 4:
                letters.append(wrap("E", True, expl_077_E(s)))
            else:
                letters.append(build_sheet_letter(cid, i, stmt, truth, s))
        out[cid] = letters
    return out

econ = build_all_econ()
print("econ cases", len(econ))
for cid, ls in econ.items():
    print(cid, [len(x) for x in ls], "avg", round(sum(map(len,ls))/5,1))

def M(letter, truth, *parts):
    body = ("\n\n").join(parts)
    return wrap(letter, truth, body)

MATH_NEW = {}

MATH_NEW["DEMO MATH 7.H01"] = [
  None,  # A keep existing (already detailed)
  M("B", True,
    "For a monic quadratic "+D+"x^{2}-Bx+C"+D+", the axis is "+D+"x=B/2"+D+". Here the linear coefficient is",
    md("B=2k+1"),
    "so the axis formula is",
    md("x=\\frac{2k+1}{2}"),
    "Split the fraction:",
    md("\\frac{2k}{2}+\\frac{1}{2}", "k+\\frac{1}{2}"),
    "Hence "+D+"x=k+\\tfrac12"+D+" for every real "+D+"k"+D+".",
  ),
  M("C", False,
    "Substitute "+D+"k=2"+D+" into each coefficient:",
    md("2k+1=2\\cdot 2+1", "2\\cdot 2+1=5", "k^{2}-4=4-4", "4-4=0"),
    "so",
    md("g_2(x)=x^{2}-5x+0", "g_2(x)=x^{2}-5x"),
    "Factor:",
    md("g_2(x)=x(x-5)"),
    "The roots are "+D+"0"+D+" and "+D+"5"+D+", not "+D+"1"+D+" and "+D+"5"+D+".",
  ),
  None,  # D keep
  M("E", True,
    "For "+D+"k=0"+D+" the quadratic is",
    md("g_0(x)=x^{2}-(0+1)x+(0-4)", "g_0(x)=x^{2}-x-4"),
    "The axis is "+D+"x=\\tfrac12"+D+". Evaluate term by term at that point:",
    md("\\left(\\tfrac12\\right)^{2}=\\tfrac14", "\\tfrac14-\\tfrac12=-\\tfrac14", "-\\tfrac14-4=-\\tfrac{17}{4}"),
    "which matches the claimed vertex "+D+"y"+D+"-coordinate.",
  ),
]
print("math7", [None if x is None else len(x) for x in MATH_NEW["DEMO MATH 7.H01"]])

MATH_NEW["DEMO MATH 8.H01"] = [
  M("A", True,
    "Daytime tariff: fixed base plus kilometre charge. Read the base:",
    md("12"),
    "Read the per-kilometre rate:",
    md("0.8"),
    "Combine into the daytime bill for distance "+D+"d"+D+":",
    md("C_{\\mathrm{day}}(d)=12+0.8d"),
    "which is exactly the claimed daytime bill.",
  ),
  M("B", True,
    "Night runs keep the same kilometre rate and add a flat surcharge. Read the surcharge:",
    md("5"),
    "So the night bill is",
    md("C_{\\mathrm{night}}(d)=C_{\\mathrm{day}}(d)+5", "C_{\\mathrm{night}}(d)=(12+0.8d)+5", "C_{\\mathrm{night}}(d)=17+0.8d"),
    "The difference night minus day is",
    md("(17+0.8d)-(12+0.8d)", "5"),
    "for every "+D+"d>0"+D+". The night bill is therefore exactly EUR 5 more than the day bill at the same distance.",
  ),
  M("C", False,
    "Set the two bills equal and write both sides explicitly:",
    md("12+0.8d", "12+0.8d+5"),
    "Equate them:",
    md("12+0.8d=12+0.8d+5"),
    "Subtract "+D+"12+0.8d"+D+" from both sides:",
    md("0=5"),
    "The identity "+D+"0=5"+D+" is absurd, so no real break-even distance "+D+"d^{*}"+D+" exists. Parallel affine tariffs with a positive gap never meet.",
  ),
  M("D", True,
    "Original daytime bill at "+D+"d=20"+D+". First the kilometre part:",
    md("0.8\\cdot 20", "16"),
    "Add the base:",
    md("12+16", "28"),
    "Waiving the base leaves only the kilometre charge:",
    md("16"),
    "The saving is",
    md("28-16", "12"),
    "exactly the waived EUR 12 base fee.",
  ),
  None,  # E already detailed
]
print("math8", [None if x is None else len(x) for x in MATH_NEW["DEMO MATH 8.H01"]])

MATH_NEW["DEMO MATH 9.H01"] = [
  M("A", True,
    "Factor "+D+"ax"+D+" out of the cubic numerator of "+D+"s(x)"+D+":",
    md("s(x)=ax\\cdot\\frac{1+\\frac{b}{ax}+\\frac{c}{ax^{2}}+\\frac{d}{ax^{3}}}{1+\\frac{4}{x^{2}}}"),
    "As "+D+"x\\to+\\infty"+D+" the correction terms all tend to 0, so the fraction tends to 1:",
    md("s(x)\\sim ax"),
    "When "+D+"a>0"+D+" the product "+D+"ax"+D+" tends to "+D+"+\\infty"+D+".",
  ),
  M("B", True,
    "Write the leading term of the cubic:",
    md("r(x)=ax^{3}+bx^{2}+cx+d"),
    "As "+D+"x\\to-\\infty"+D+" one has "+D+"x^{3}\\to-\\infty"+D+". If "+D+"a>0"+D+" then",
    md("ax^{3}\\to-\\infty"),
    "and the lower-degree terms cannot cancel that divergence, so",
    md("\\lim_{x\\to-\\infty}r(x)=-\\infty"),
    "whenever "+D+"a>0"+D+".",
  ),
  M("C", True,
    "Assume "+D+"r(2)=0"+D+" and "+D+"r'(2)=0"+D+". A root at which the derivative also vanishes has multiplicity at least two, so",
    md("(x-2)^{2}\\mid r(x)"),
    "hence "+D+"x=2"+D+" is at least a double root of "+D+"r"+D+".",
  ),
  M("D", False,
    "Because "+D+"\\deg r=3>2=\\deg(x^{2}+4)"+D+", the asymptotic from letter A yields",
    md("|s(x)|\\to\\infty"),
    "as "+D+"|x|\\to\\infty"+D+". A horizontal asymptote "+D+"y=0"+D+" would require "+D+"s(x)\\to 0"+D+", which fails for every choice with "+D+"a\\neq 0"+D+".",
  ),
  M("E", True,
    "Substitute "+D+"a=3"+D+", "+D+"b=-6"+D+", "+D+"c=0"+D+", "+D+"d=0"+D+":",
    md("r(x)=3x^{3}+(-6)x^{2}+0\\cdot x+0", "r(x)=3x^{3}-6x^{2}"),
    "Factor step by step:",
    md("r(x)=3x^{2}(x-2)"),
    "The factor "+D+"x^{2}"+D+" makes "+D+"x=0"+D+" a double root, and the remaining linear factor makes "+D+"x=2"+D+" a simple root.",
  ),
]
print("math9", [len(x) for x in MATH_NEW["DEMO MATH 9.H01"]])

MATH_NEW["DEMO MATH 11.H01"] = [
  M("A", True,
    "Expand revenue as a product:",
    md("R(q)=q(90-3q)", "R(q)=90q-3q^{2}"),
    "Differentiate term by term:",
    md("R^{\\prime}(q)=90-6q"),
    "Evaluate at "+D+"q=4"+D+":",
    md("6\\cdot 4=24", "90-24=66"),
    "so "+D+"R^{\\prime}(4)=66"+D+", matching the claim.",
  ),
  M("B", False,
    "Revenue is maximised where marginal revenue is zero:",
    md("R^{\\prime}(q)=0", "90-6q=0", "6q=90", "q=15"),
    "The choke quantity where price is zero solves",
    md("90-3q=0", "3q=90", "q=30"),
    "Since "+D+"15\\neq 30"+D+", the revenue maximiser is not the choke quantity.",
  ),
  M("C", True,
    "True revenue change from "+D+"q=4"+D+" to "+D+"q=5"+D+":",
    md("R(4)=4\\cdot(90-12)", "90-12=78", "4\\cdot 78=312"),
    md("R(5)=5\\cdot(90-15)", "90-15=75", "5\\cdot 75=375"),
    md("R(5)-R(4)=375-312", "63"),
    "Linear approximation using "+D+"R^{\\prime}(4)=66"+D+":",
    md("66\\cdot 1=66"),
    "Compare:",
    md("66>63"),
    "The linear estimate overshoots the true increase because "+D+"R"+D+" is a concave quadratic.",
  ),
  M("D", False,
    "At the revenue maximiser "+D+"q=15"+D+" from letter B, price is",
    md("P(15)=90-3\\cdot 15", "3\\cdot 15=45", "90-45=45"),
    "while marginal revenue is",
    md("R^{\\prime}(15)=90-6\\cdot 15", "6\\cdot 15=90", "90-90=0"),
    "So price equals 45, not marginal revenue 0.",
  ),
  M("E", False,
    "Revenue at "+D+"q=16"+D+":",
    md("P(16)=90-3\\cdot 16", "3\\cdot 16=48", "90-48=42", "R(16)=16\\cdot 42", "672"),
    "Revenue at "+D+"q=17"+D+":",
    md("P(17)=90-3\\cdot 17", "3\\cdot 17=51", "90-51=39", "R(17)=17\\cdot 39", "663"),
    "Compare:",
    md("663<672"),
    "Cutting price to move from 16 to 17 units lowers revenue, because one is already past the maximiser "+D+"q=15"+D+".",
  ),
]
print("math11", [len(x) for x in MATH_NEW["DEMO MATH 11.H01"]])

BEFORE = {"economics": [], "math": []}
for sub in ("economics", "math"):
    for t in data[sub]:
        for e in t["tactical_explanations"]:
            BEFORE[sub].append(len(e))
def avg(xs):
    return round(sum(xs)/len(xs), 1) if xs else 0
print("BEFORE econ", avg(BEFORE["economics"]), "math", avg(BEFORE["math"]))
for t in data["economics"]:
    t["tactical_explanations"] = econ[t["case_id"]]
for t in data["math"]:
    cid = t["case_id"]
    if cid not in MATH_NEW: continue
    cur = list(t["tactical_explanations"])
    for i, neu in enumerate(MATH_NEW[cid]):
        if neu is not None: cur[i] = neu
    t["tactical_explanations"] = cur
AFTER = {"economics": [], "math": []}
for sub in ("economics", "math"):
    for t in data[sub]:
        for e in t["tactical_explanations"]:
            AFTER[sub].append(len(e))
print("AFTER econ", avg(AFTER["economics"]), "math", avg(AFTER["math"]))
PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + chr(10), encoding="utf-8")
print("wrote json")
