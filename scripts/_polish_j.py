import json
from pathlib import Path
p=Path("src/data/mock-exam-demo-sourced.json")
data=json.loads(p.read_text(encoding="utf-8"))
D=chr(36)
print("loaded", len(data["math"]))
def md(*e):
    return ("\n\n").join(D+D+"\n"+x+"\n"+D+D for x in e)
def wrap(L,t,body):
    v="True" if t else "False"
    return ("**%s.** → %s\n\n%s\n\nSo the statement is %s.")%(L,v,body.strip(),v)
by={t["case_id"]:t for t in data["math"]}
by["DEMO MATH 7.H01"]["tactical_explanations"][1]=wrap("B",True,"For a monic quadratic "+D+"x^{2}-Bx+C"+D+", the axis is "+D+"x=B/2"+D+". Read the linear coefficient from "+D+"g_k"+D+":\n\n"+md("B=2k+1")+"\n\nDivide by 2:\n\n"+md("x=\\frac{B}{2}", "x=\\frac{2k+1}{2}")+"\n\nSplit the numerator:\n\n"+md("\\frac{2k}{2}+\\frac{1}{2}", "k+\\frac{1}{2}")+"\n\nHence "+D+"x=k+\\tfrac12"+D+" for every real "+D+"k"+D+".")
print("7B", len(by["DEMO MATH 7.H01"]["tactical_explanations"][1]))
by["DEMO MATH 7.H01"]["tactical_explanations"][2]=wrap("C",False,"Substitute "+D+"k=2"+D+" into the linear coefficient:\n\n"+md("2k+1=2\\cdot 2+1", "2\\cdot 2+1=5")+"\n\nSubstitute into the constant term:\n\n"+md("k^{2}-4=2^{2}-4", "4-4=0")+"\n\nAssemble the quadratic:\n\n"+md("g_2(x)=x^{2}-5x+0", "g_2(x)=x^{2}-5x")+"\n\nFactor:\n\n"+md("g_2(x)=x(x-5)")+"\n\nThe roots are "+D+"0"+D+" and "+D+"5"+D+", not "+D+"1"+D+" and "+D+"5"+D+".")
by["DEMO MATH 8.H01"]["tactical_explanations"][0]=wrap("A",True,"Daytime tariff has two pieces. Read the fixed base from the stem:\n\n"+md("12")+"\n\nRead the per-kilometre rate:\n\n"+md("0.8")+"\n\nFor distance "+D+"d"+D+" the kilometre charge is "+D+"0.8d"+D+". Add the base:\n\n"+md("C_{\\mathrm{day}}(d)=12+0.8d")+"\n\nwhich is exactly the claimed daytime bill.")
by["DEMO MATH 8.H01"]["tactical_explanations"][3]=wrap("D",True,"Original daytime bill at "+D+"d=20"+D+". First form the kilometre part:\n\n"+md("0.8\\cdot 20", "16")+"\n\nAdd the base:\n\n"+md("12+16", "28")+"\n\nAfter waiving the base, only the kilometre charge remains:\n\n"+md("16")+"\n\nSubtract to get the saving:\n\n"+md("28-16", "12")+"\n\nexactly the waived EUR 12 base fee.")
print("7C8", [len(by["DEMO MATH 7.H01"]["tactical_explanations"][i]) for i in (2,)], [len(by["DEMO MATH 8.H01"]["tactical_explanations"][i]) for i in (0,3)])
by["DEMO MATH 9.H01"]["tactical_explanations"][2]=wrap("C",True,"Assume both vanishing conditions hold at "+D+"x=2"+D+":\n\n"+md("r(2)=0", "r'(2)=0")+"\n\nIf a polynomial and its first derivative both vanish at a point, that point is a root of multiplicity at least two. The factorisation theorem therefore supplies the squared factor:\n\n"+md("(x-2)^{2}\\mid r(x)")+"\n\nHence "+D+"x=2"+D+" is at least a double root of "+D+"r"+D+".")
by["DEMO MATH 11.H01"]["tactical_explanations"][0]=wrap("A",True,"Start from the demand form and expand revenue:\n\n"+md("R(q)=q(90-3q)", "R(q)=90q-3q^{2}")+"\n\nDifferentiate term by term:\n\n"+md("R^{\\prime}(q)=90-6q")+"\n\nSubstitute "+D+"q=4"+D+":\n\n"+md("6\\cdot 4=24", "90-24=66")+"\n\nso "+D+"R^{\\prime}(4)=66"+D+", matching the claim.")
by["DEMO MATH 11.H01"]["tactical_explanations"][1]=wrap("B",False,"Set marginal revenue to zero to locate the revenue maximiser:\n\n"+md("R^{\\prime}(q)=0", "90-6q=0", "6q=90", "q=15")+"\n\nThe choke quantity where price vanishes solves:\n\n"+md("90-3q=0", "3q=90", "q=30")+"\n\nCompare the two quantities:\n\n"+md("15\\neq 30")+"\n\nThe revenue maximiser is "+D+"q=15"+D+", not the choke quantity "+D+"q=30"+D+".")
by["DEMO MATH 11.H01"]["tactical_explanations"][3]=wrap("D",False,"From letter B the revenue maximiser is "+D+"q=15"+D+". Price there is:\n\n"+md("P(15)=90-3\\cdot 15", "3\\cdot 15=45", "90-45=45")+"\n\nMarginal revenue there is:\n\n"+md("R^{\\prime}(15)=90-6\\cdot 15", "6\\cdot 15=90", "90-90=0")+"\n\nCompare:\n\n"+md("45\\neq 0")+"\n\nAt the quantity that maximises "+D+"R"+D+", price equals 45 while marginal revenue equals 0, so they are not equal.")
print("9c11", len(by["DEMO MATH 9.H01"]["tactical_explanations"][2]), [len(by["DEMO MATH 11.H01"]["tactical_explanations"][i]) for i in (0,1,3)])
eby={t["case_id"]:t for t in data["economics"]}
eby["CASE 6.5.034"]["tactical_explanations"][3]=wrap("D",True,"Read the revenue line from the extract:\n\n"+md("1019")+"\n\nRead the claimed threshold:\n\n"+md("999")+"\n\nCompare:\n\n"+md("1019 > 999")+"\n\nRevenue of EUR 1019 thousand exceeds the EUR 999 thousand threshold.")
p.write_text(json.dumps(data, ensure_ascii=False, indent=2)+chr(10), encoding="utf-8")
def stats(sub):
    xs=[len(e) for t in data[sub] for e in t["tactical_explanations"]]
    return round(sum(xs)/len(xs),1), min(xs), max(xs), sum(1 for x in xs if x<400)
print("FINAL econ", stats("economics"))
print("FINAL math", stats("math"))
for cid in ["DEMO MATH 7.H01", "DEMO MATH 8.H01", "DEMO MATH 9.H01", "DEMO MATH 11.H01"]:
    print(cid, [len(e) for e in by[cid]["tactical_explanations"]])
by["DEMO MATH 9.H01"]["tactical_explanations"][3]=wrap("D",False,"Compare degrees of numerator and denominator:\n\n"+md("\\deg r=3", "\\deg(x^{2}+4)=2", "3>2")+"\n\nLetter A already recovered the leading asymptotic "+D+"s(x)\\sim ax"+D+". Therefore\n\n"+md("|s(x)|\\to\\infty")+"\n\nas "+D+"|x|\\to\\infty"+D+". A horizontal asymptote "+D+"y=0"+D+" would require "+D+"s(x)\\to 0"+D+", which fails for every choice with "+D+"a\\neq 0"+D+".")\nby["DEMO MATH 11.H01"]["tactical_explanations"][0]=wrap("A",True,"Start from the linear demand and form revenue:\n\n"+md("P(q)=90-3q", "R(q)=q\\cdot P(q)", "R(q)=q(90-3q)")+"\n\nExpand:\n\n"+md("R(q)=90q-3q^{2}")+"\n\nDifferentiate term by term:\n\n"+md("R^{\\prime}(q)=90-6q")+"\n\nSubstitute "+D+"q=4"+D+":\n\n"+md("6\\cdot 4", "24", "90-24", "66")+"\n\nso "+D+"R^{\\prime}(4)=66"+D+", matching the claim.")\n