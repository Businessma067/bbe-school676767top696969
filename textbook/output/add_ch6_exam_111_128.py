#!/usr/bin/env python3
"""Author and append MATH 6.111–6.128 (18 exam-style inequality tasks).

Each task has five independent TRUE/FALSE statements. Stories, claim order,
and logical traps vary; difficulty stays at exam level (5/5).
"""
from __future__ import annotations

import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / "src" / "data" / "math-ch6-inequalities.json"


def T(statements, answers, expls, overview, title, n):
    assert len(statements) == 5 == len(answers) == len(expls)
    return {
        "id": f"math-6-{n}",
        "case_id": f"MATH 6.{n}",
        "title": title,
        "subsection": "6.5",
        "context": "Evaluate each statement. Mark it TRUE or FALSE.",
        "statements": statements,
        "answer_key": answers,
        "tactical_explanations": expls,
        "difficulty_level": "5/5",
        "sort_order": n,
        "solution_overview": overview,
        "placeholder": False,
    }


# ---------------------------------------------------------------------------
# MATH 6.111 — wind turbine / abs / hydroponic EC / avg cost / nested abs
# ---------------------------------------------------------------------------
def task_111():
    # A: wind turbine power P(v)= -0.5(v-12)^2 + 32 for 4<=v<=20.
    # Claim: P(v) >= 24 exactly when 8 <= v <= 16.
    # -0.5(v-12)^2 + 32 >= 24 => -0.5(v-12)^2 >= -8 => (v-12)^2 <= 16 => |v-12|<=4
    # => 8<=v<=16, and this lies inside [4,20]. TRUE
    # B: |x^2 - 5| < 4. Solve: -4 < x^2-5 < 4 => 1 < x^2 < 9 => x in (-3,-1)U(1,3).
    # Claim solution (-3,-1)U(1,3). TRUE
    # C: Hydroponic nutrient: target EC is 1.8. Mix costs: concentrate 0.12 EUR/ml,
    # water free. Tank of 40 L needs EC = 0.045 * m where m = ml concentrate.
    # Want 1.6 <= EC <= 2.0, and budget m*0.12 <= 6. Then admissible m is 36 to 44.
    # EC: 1.6 <= 0.045 m <= 2.0 => 1.6/0.045 <= m <= 2.0/0.045 => 35.55.. <= m <= 44.44..
    # Budget: m <= 6/0.12 = 50. So m in [35.56, 44.44]. Claim [36,44] for whole ml:
    # whole m: 36..44 inclusive. TRUE if we interpret whole ml.
    # D: avg cost (180+0.8x)/x <= 2.6 => 180/x <= 1.8 => x >= 100. Claim at least 99 whole -> False
    # E: ||x|-3| >= 2. Let u=|x|>=0. |u-3|>=2 => u<=1 or u>=5 => |x|<=1 or |x|>=5.
    # Claim (-inf,-5]U[-1,1]U[5,inf). TRUE
    return T(
        [
            (
                "A wind turbine’s delivered power (in suitable units) for wind speed "
                "$v$ with $4\\le v\\le 20$ is modelled by $P(v)=-\\dfrac{1}{2}(v-12)^{2}+32$. "
                "Then $P(v)\\ge 24$ holds exactly when $8\\le v\\le 16$."
            ),
            (
                "The inequality $|x^{2}-5|<4$ has solution set "
                "$(-3,-1)\\cup(1,3)$."
            ),
            (
                "A hydroponic tank needs electrical conductivity "
                "$\\mathrm{EC}=0.045m$ from $m$ millilitres of concentrate "
                "(whole millilitres only). The grower requires "
                "$1.6\\le\\mathrm{EC}\\le 2.0$ and will not spend more than 6 EUR at "
                "0.12 EUR per millilitre. Then every admissible whole $m$ lies in "
                "$\\{36,37,\\ldots,44\\}$."
            ),
            (
                "If producing $x$ units costs $180+0.8x$ EUR, then at least 99 whole "
                "units must be produced for the average cost per unit to be at most "
                "2.60 EUR."
            ),
            (
                "The inequality $\\bigl||x|-3\\bigr|\\ge 2$ has solution set "
                "$(-\\infty,-5]\\cup[-1,1]\\cup[5,\\infty)$."
            ),
        ],
        [True, True, True, False, True],
        [
            (
                "**A.** → True\n\n"
                "$$-\\tfrac12(v-12)^{2}+32\\ge 24$$\n\n"
                "$$(v-12)^{2}\\le 16$$\n\n"
                "$$|v-12|\\le 4$$\n\n"
                "$$8\\le v\\le 16.$$\n\n"
                "This interval lies inside the model domain $[4,20]$. Therefore the "
                "statement is True."
            ),
            (
                "**B.** → True\n\n"
                "$$-4<x^{2}-5<4$$\n\n"
                "$$1<x^{2}<9$$\n\n"
                "$$x\\in(-3,-1)\\cup(1,3).$$\n\n"
                "Endpoints give $|x^{2}-5|=4$, excluded by the strict inequality. "
                "Therefore the statement is True."
            ),
            (
                "**C.** → True\n\n"
                "$$1.6\\le 0.045m\\le 2.0\\Rightarrow "
                "\\dfrac{320}{9}\\le m\\le\\dfrac{400}{9}$$\n\n"
                "so $35.\\overline{5}\\le m\\le 44.\\overline{4}$. The budget bound "
                "$0.12m\\le 6$ gives $m\\le 50$, which is weaker. Whole millilitres "
                "in range are exactly $36$ through $44$. Therefore the statement is True."
            ),
            (
                "**D.** → False\n\n"
                "$$\\dfrac{180+0.8x}{x}\\le 2.6\\Rightarrow "
                "\\dfrac{180}{x}\\le 1.8\\Rightarrow x\\ge 100.$$\n\n"
                "At $x=99$ the average is still above 2.60 EUR. Therefore the "
                "statement is False."
            ),
            (
                "**E.** → True\n\n"
                "Set $u=|x|\\ge 0$. Then $|u-3|\\ge 2$ gives $u\\le 1$ or $u\\ge 5$, "
                "i.e. $|x|\\le 1$ or $|x|\\ge 5$, which is the stated union. "
                "Therefore the statement is True."
            ),
        ],
        (
            "Mixed exam claims: a wind-turbine quadratic power window, a biquadratic "
            "absolute-value inequality, a hydroponic EC dosing band with a budget, an "
            "average-cost integer trap, and a nested absolute-value exterior. Each "
            "letter is independent."
        ),
        "Exam-style tasks - 23",
        111,
    )


# ---------------------------------------------------------------------------
# MATH 6.112 — sailboat / sqrt-abs / subway / rational / cheese cave
# ---------------------------------------------------------------------------
def task_112():
    # A: Sailboat ballast. Safe heel requires |h| <= 12 where h = 0.4w - 8 and
    # w is wind load 0..50. Claim safe for all w in [0,50] -> False
    # |0.4w-8|<=12 => -12 <= 0.4w-8 <=12 => -4 <= 0.4w <=20 => -10 <= w <= 50.
    # Intersect [0,50] = [0,50]. Wait that's ALL w in [0,50]. So TRUE?
    # At w=0: |0-8|=8<=12. At w=50: |20-8|=12<=12. Yes TRUE.
    # Change claim: safe iff 5 <= w <= 45 -> False
    #
    # B: sqrt(x+6) <= |x-2|
    # Domain x>=-6.
    # Case x>=2: sqrt(x+6)<=x-2, need x>=2. Square: x+6 <= x^2-4x+4 => 0<=x^2-5x-2
    # roots (5±sqrt(25+8))/2=(5±sqrt33)/2 ≈ (-0.37, 5.37). On [2,inf): x >= (5+sqrt33)/2
    # Case -6<=x<2: sqrt(x+6)<=2-x. Square: x+6 <= 4-4x+x^2 => 0<=x^2-5x-2
    # On [-6,2): (x-r-)(x-r+)>=0. Since r-≈-0.37, r+≈5.37: product >=0 when x<=r-
    # So [-6, (5-sqrt33)/2].
    # Solution: [-6,(5-sqrt33)/2] U [(5+sqrt33)/2, inf)
    # Claim: iff x<=0 or x>=6 -> False (wrong bounds)
    #
    # C: Subway dwell: passengers board at rate, train waits t seconds.
    # Capacity: 8+1.5t people can board; need at least 50 boarded, and schedule
    # forbids t > 40. Claim minimal whole t is 28. 8+1.5t >=50 => 1.5t>=42 => t>=28.
    # And t<=40. Minimal whole 28. TRUE
    #
    # D: (2x-1)/(x+3) <= 1. => (2x-1 -x -3)/(x+3)<=0 => (x-4)/(x+3)<=0 => x in [-3? no] (-3,4]?
    # Zero at 4 included, pole -3 excluded: x in (-3,4]. Claim [-3,4] -> False
    #
    # E: Cheese cave: humidity H(t)= -t^2 + 14t + 40 for t hours after opening vents.
    # Want H >= 80. -t^2+14t+40>=80 => -t^2+14t-40>=0 => t^2-14t+40<=0
    # (t-4)(t-10)<=0 => 4<=t<=10. Claim between 4 and 10 inclusive. TRUE
    return T(
        [
            (
                "A sailboat’s heel angle (degrees) under wind load $w\\in[0,50]$ is "
                "modelled by $h(w)=0.4w-8$. The skipper requires $|h(w)|\\le 12$. "
                "Then the boat is safe for every wind load in $[0,50]$ if and only if "
                "$5\\le w\\le 45$."
            ),
            (
                "The inequality $\\sqrt{x+6}\\le|x-2|$ holds if and only if "
                "$x\\le 0$ or $x\\ge 6$."
            ),
            (
                "On a subway platform, the number of passengers who can board during a "
                "dwell of $t$ seconds is $8+1.5t$. At least 50 passengers must board and "
                "the timetable forbids $t>40$. Then the shortest admissible whole-second "
                "dwell is 28 seconds."
            ),
            (
                "The comparison $\\dfrac{2x-1}{x+3}\\le 1$ is equivalent to "
                "$-3\\le x\\le 4$."
            ),
            (
                "Humidity in a cheese-aging cave $t$ hours after the vents are adjusted "
                "is $H(t)=-t^{2}+14t+40$. The requirement $H(t)\\ge 80$ holds exactly "
                "for $4\\le t\\le 10$."
            ),
        ],
        [False, False, True, False, True],
        [
            (
                "**A.** → False\n\n"
                "$$|0.4w-8|\\le 12\\Rightarrow -10\\le w\\le 50.$$\n\n"
                "Intersecting the physical domain $[0,50]$ gives the entire interval "
                "$[0,50]$, not $[5,45]$. Therefore the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "Domain $x\\ge -6$. Squaring case by case yields\n\n"
                "$$x\\in\\Bigl[-6,\\dfrac{5-\\sqrt{33}}{2}\\Bigr]"
                "\\cup\\Bigl[\\dfrac{5+\\sqrt{33}}{2},\\infty\\Bigr),$$\n\n"
                "with approximate cutoffs $-0.37$ and $5.37$, not $0$ and $6$. "
                "Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "$$8+1.5t\\ge 50\\Rightarrow t\\ge 28,$$\n\n"
                "and $t\\le 40$. The shortest whole-second dwell is therefore 28. "
                "Therefore the statement is True."
            ),
            (
                "**D.** → False\n\n"
                "$$\\dfrac{2x-1}{x+3}-1=\\dfrac{x-4}{x+3}\\le 0$$\n\n"
                "gives $x\\in(-3,4]$. The pole $x=-3$ is excluded, so $[-3,4]$ is wrong. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$-t^{2}+14t+40\\ge 80\\Rightarrow t^{2}-14t+40\\le 0$$\n\n"
                "$$(t-4)(t-10)\\le 0\\Rightarrow 4\\le t\\le 10.$$\n\n"
                "Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: a sailboat heel-angle band misstated as a proper "
            "subinterval, a square-root/absolute-value case split, subway dwell "
            "timing, a rational comparison with a pole trap, and a cheese-cave "
            "humidity parabola."
        ),
        "Exam-style tasks - 24",
        112,
    )


# ---------------------------------------------------------------------------
# MATH 6.113 — climbing gym / production / abs product / lighthouse / avg
# ---------------------------------------------------------------------------
def task_113():
    # A: Climbing rope lifespan: remaining strength S(n)= 100 - 0.8 n^2 after n
    # hard falls. Need S >= 64. 100-0.8n^2 >=64 => 0.8n^2 <=36 => n^2 <=45 => |n|<=sqrt45≈6.71
    # Whole falls n=0..6. Claim at most 7 falls ok -> False (n=7: 0.8*49=39.2, S=60.8<64)
    #
    # B: Each climbing hold set uses 6 bolts and 2 resin packs. Bolts 1.5 EUR, resin 4 EUR,
    # plus 3 EUR labor. Budget 900 EUR; storage at most 280 items (bolts+packs). Max sets < 40.
    # Cost: 6*1.5+2*4+3=9+8+3=20. Budget n<=45. Storage 8n<=280 => n<=35. Max 35 <40. TRUE
    #
    # C: |x||x-4| >= 3. This is harder. Or (x-1)(x-5)>0 claim x<1 or x>5 TRUE for strict.
    # Use: |x(x-6)| <= 5. => -5 <= x^2-6x <=5. Left: x^2-6x+5<=0 (x-1)(x-5)<=0 =>1<=x<=5
    # Right: x^2-6x-5>=0 always? Wait we need BOTH: x^2-6x <=5 AND x^2-6x >= -5
    # A: x^2-6x-5 <=0 roots 3±sqrt(14) ≈ -0.74, 6.74
    # B: x^2-6x+5 >=0 (x-1)(x-5)>=0 => x<=1 or x>=5
    # Intersection: [3-sqrt14, 1] U [5, 3+sqrt14]. Claim [-1,1]U[5,7] -> False
    #
    # D: Lighthouse beam intensity I(d)= 90/(d+1). Visible when I >= 6. 90/(d+1)>=6 => d+1<=15 => d<=14.
    # Also d>=0. Claim visible for all d in [0,15] -> False (at 15: I=90/16=5.625<6)
    #
    # E: (3x+2)/(x-1) > 2. (3x+2-2x+2)/(x-1)>0 => (x+4)/(x-1)>0 => x<-4 or x>1.
    # Claim x<-4 or x>1. TRUE
    return T(
        [
            (
                "A climbing rope’s remaining strength after $n$ hard falls "
                "($n\\ge 0$ an integer) is $S(n)=100-0.8n^{2}$. The gym requires "
                "$S(n)\\ge 64$. Then the rope may still be used after 7 hard falls."
            ),
            (
                "Each climbing-hold kit uses 6 bolts at 1.50 EUR and 2 resin packs at "
                "4 EUR, plus 3 EUR of labor. With a budget of 900 EUR and shelf space "
                "for at most 280 bolts and packs combined, the maximum number of kits "
                "is less than 40."
            ),
            (
                "The inequality $|x(x-6)|\\le 5$ has solution set "
                "$[-1,1]\\cup[5,7]$."
            ),
            (
                "A lighthouse beam has intensity $I(d)=\\dfrac{90}{d+1}$ at distance "
                "$d\\ge 0$ kilometres. The beam is considered visible when $I(d)\\ge 6$. "
                "Then it is visible for every $d$ in $[0,15]$."
            ),
            (
                "The strict inequality $\\dfrac{3x+2}{x-1}>2$ holds exactly when "
                "$x<-4$ or $x>1$."
            ),
        ],
        [False, True, False, False, True],
        [
            (
                "**A.** → False\n\n"
                "$$100-0.8n^{2}\\ge 64\\Rightarrow n^{2}\\le 45\\Rightarrow "
                "n\\le\\sqrt{45}\\approx 6.71.$$\n\n"
                "The largest integer $n$ is 6. At $n=7$, $S(7)=60.8<64$. Therefore "
                "the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "Cost per kit: $6\\cdot 1.5+2\\cdot 4+3=20$ EUR. "
                "Budget: $n\\le 45$. Storage: $8n\\le 280\\Rightarrow n\\le 35$. "
                "Maximum is 35, which is less than 40. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "$$-5\\le x^{2}-6x\\le 5.$$\n\n"
                "$$x^{2}-6x-5\\le 0\\Rightarrow x\\in[3-\\sqrt{14},\\,3+\\sqrt{14}],$$\n\n"
                "$$x^{2}-6x+5\\ge 0\\Rightarrow x\\le 1\\text{ or }x\\ge 5.$$\n\n"
                "Intersection: $[3-\\sqrt{14},1]\\cup[5,3+\\sqrt{14}]\\approx"
                "[-0.74,1]\\cup[5,6.74]$, not $[-1,1]\\cup[5,7]$. Therefore the "
                "statement is False."
            ),
            (
                "**D.** → False\n\n"
                "$$\\dfrac{90}{d+1}\\ge 6\\Rightarrow d\\le 14.$$\n\n"
                "At $d=15$, $I=5.625<6$. Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$\\dfrac{3x+2}{x-1}-2=\\dfrac{x+4}{x-1}>0$$\n\n"
                "gives $x<-4$ or $x>1$ (pole excluded). Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: rope-strength after falls, hold-kit budget and "
            "storage, a product absolute-value inequality, lighthouse visibility "
            "range, and a rational inequality with a vertical asymptote."
        ),
        "Exam-style tasks - 25",
        113,
    )


# ---------------------------------------------------------------------------
# MATH 6.114 — vineyard / 3D printer / compound abs / ferry? ski-lift / sqrt
# ---------------------------------------------------------------------------
def task_114():
    # A: Vineyard: yield Y(f)= -2f^2 + 40f + 10 where f frost-free weeks.
    # Want Y >= 170. -2f^2+40f+10>=170 => -2f^2+40f-160>=0 => f^2-20f+80<=0
    # roots 10±sqrt(20)=10±2sqrt5 ≈ 5.53, 14.47. Claim 6 to 14 inclusive whole weeks:
    # for continuous: (10-2sqrt5, 10+2sqrt5). Whole f=6..14: check f=6: Y=-72+240+10=178>=170
    # f=5: -50+200+10=160<170. f=14: -392+560+10=178. f=15: -450+600+10=160. TRUE for whole
    #
    # B: 3D printer nozzle temp T must satisfy |T-215| < 8 and T >= 200. Claim 207<T<223.
    # |T-215|<8 => 207<T<223. Intersect T>=200 is same. TRUE
    # Make false: claim 207<=T<=223 -> False (strict)
    #
    # C: |2x-1| + |x+3| >= 10. Critical points -3, 1/2.
    # For x>=1/2: (2x-1)+(x+3)=3x+2>=10 => x>=8/3
    # For -3<=x<1/2: -(2x-1)+(x+3)=-x+4>=10 => -x>=6 => x<=-6 (empty in interval)
    # For x<-3: -(2x-1)-(x+3)=-3x-2>=10 => -3x>=12 => x<=-4
    # Solution (-inf,-4] U [8/3, inf). Claim x<=-4 or x>=3 -> False (8/3≈2.67 not 3)
    #
    # D: Ski-lift: each gondola carries up to 8 skiers. In hour h, demand is 60+5h for
    # h=0..6. Fleet of n gondolas runs once per hour. Need 8n >= 60+5h for all h in 0..6.
    # Worst at h=6: 90. So n>= ceil(90/8)=12. Claim at least 11 gondolas suffice -> False
    #
    # E: sqrt(4-x) > x-1. Domain x<=4. Also for meaningful... 
    # Cases: if x-1 < 0 i.e. x<1, then RHS negative, LHS>=0 so true on domain intersect (-inf,1)∩(-inf,4]=(-inf,1] wait x<=4 and x<1: domain of sqrt is x<=4, so (-inf? no 4-x>=0 => x<=4) ∩ x<1 = (-inf no) actually domain only x<=4. So [-infty no]: x in (-inf,1) intersect (-inf,4] but sqrt domain is ONLY x<=4, no lower from sqrt. Wait 4-x>=0 => x<=4 only.
    # On (-inf,1): always true when defined i.e. x<=4, so (-inf,1) wait domain x<=4, so all x<1 with x<=4 means (-∞,1).
    # On [1,4]: square: 4-x > (x-1)^2 = x^2-2x+1 => 0 > x^2-x-3 = (x-3)(x+1). On [1,4]: (x-3)(x+1)<0 => x<3 (since x+1>0). Strict: 1<=x<3.
    # At x=1: sqrt3 >0 true. Combined: (-inf, 3). But domain x<=4, and for x in [3,4]: fails.
    # Full: (-∞, 3) ∩ (-∞,4] = (-∞, 3). Claim (-∞,3] -> False (at 3: sqrt1=1, 3-1=2, 1>2 false)
    return T(
        [
            (
                "A vineyard’s yield (crates) after $f$ frost-free weeks is "
                "$Y(f)=-2f^{2}+40f+10$. For whole weeks $f$, the yield is at least "
                "170 crates precisely when $f\\in\\{6,7,\\ldots,14\\}$."
            ),
            (
                "A 3D-printer nozzle temperature $T$ must satisfy $|T-215|<8$ and "
                "$T\\ge 200$. Then every admissible temperature lies in the closed "
                "interval $207\\le T\\le 223$."
            ),
            (
                "The inequality $|2x-1|+|x+3|\\ge 10$ holds if and only if "
                "$x\\le -4$ or $x\\ge 3$."
            ),
            (
                "A ski-lift runs $n$ gondolas once each hour. Hourly demand at hour "
                "$h\\in\\{0,1,\\ldots,6\\}$ is $60+5h$ skiers, and each gondola holds "
                "8 skiers. Then a fleet of 11 gondolas covers every hour’s demand."
            ),
            (
                "The inequality $\\sqrt{4-x}>x-1$ has solution set $(-\\infty,3]$."
            ),
        ],
        [True, False, False, False, False],
        [
            (
                "**A.** → True\n\n"
                "$$-2f^{2}+40f+10\\ge 170\\Rightarrow f^{2}-20f+80\\le 0$$\n\n"
                "$$10-2\\sqrt{5}\\le f\\le 10+2\\sqrt{5}\\approx[5.53,14.47].$$\n\n"
                "Whole weeks in range are $6$ through $14$; $f=5$ and $f=15$ fall short. "
                "Therefore the statement is True."
            ),
            (
                "**B.** → False\n\n"
                "$$|T-215|<8\\Rightarrow 207<T<223.$$\n\n"
                "The closed interval wrongly includes the endpoints, where the "
                "tolerance fails. Therefore the statement is False."
            ),
            (
                "**C.** → False\n\n"
                "Piecewise analysis at the kinks $x=-3$ and $x=\\tfrac12$ yields "
                "$x\\le -4$ or $x\\ge\\tfrac83$. Since $\\tfrac83\\approx 2.67\\ne 3$, "
                "the claim is False."
            ),
            (
                "**D.** → False\n\n"
                "Worst demand is at $h=6$: $90$ skiers, needing "
                "$n\\ge\\lceil 90/8\\rceil=12$. Eleven gondolas supply only 88 seats. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → False\n\n"
                "Domain $x\\le 4$. For $x<1$ the right side is negative, so every "
                "defined $x<1$ works. For $1\\le x\\le 4$, squaring gives $x<3$. "
                "The solution is $(-\\infty,3)$, and $x=3$ fails ($1\\not>2$). "
                "Therefore the statement is False."
            ),
        ],
        (
            "Independent claims: vineyard frost-free yield weeks, a strict nozzle "
            "temperature band, a two-piece absolute-value sum, ski-lift hourly "
            "capacity, and a square-root inequality with an endpoint trap."
        ),
        "Exam-style tasks - 26",
        114,
    )


# ---------------------------------------------------------------------------
# MATH 6.115 — radio telescope / wildfire AQI / pottery / factory / abs
# ---------------------------------------------------------------------------
def task_115():
    # A: Radio telescope pointing error e(theta)= |3 theta - 1| must be < 0.5 deg.
    # |3θ-1|<0.5 => 0.5/3 < θ < 1.5/3 => 1/6 < θ < 1/2. Claim (1/6, 1/2). TRUE
    #
    # B: Wildfire AQI outdoors: work allowed when A(t)= -t^2 + 16t + 20 <= 80 for
    # shift t in [0,12]. Wait "allowed when AQI below 80". 
    # -t^2+16t+20 <= 80 => -t^2+16t-60<=0 => t^2-16t+60>=0 => (t-6)(t-10)>=0
    # => t<=6 or t>=10. On [0,12]: [0,6]U[10,12]. Claim work only after t=10 -> False
    #
    # C: Pottery wheel RPM r must satisfy 120 <= r <= 240 and |r - 200| <= 30.
    # |r-200|<=30 => 170<=r<=230. Intersect [120,240]=[170,230]. Claim [170,230]. TRUE
    #
    # D: Workshop: each sculpture needs 2 kg clay (3 EUR/kg), 1 glaze jar (8 EUR),
    # 0.5 kWh energy at 0.40 EUR/kWh. Budget 500 EUR; clay stock 80 kg. Max sculptures
    # less than 35. Cost: 6+8+0.2=14.2. Budget n<=500/14.2≈35.21 so n<=35.
    # Clay: 2n<=80 => n<=40. Max 35, claim less than 35 -> False
    #
    # E: |x+1| / |x-2| >= 2. (|x+1| >= 2|x-2|), x≠2.
    # Square: (x+1)^2 >= 4(x-2)^2 => |x+1|>=2|x-2|
    # (x+1)^2 - 4(x-2)^2 >=0 => (x+1-2(x-2))(x+1+2(x-2))>=0
    # (x+1-2x+4)(x+1+2x-4)>=0 => (5-x)(3x-3)>=0 => (5-x)*3(x-1)>=0
    # (5-x)(x-1)>=0 => x in [1,5], exclude x=2.
    # Claim [1,5]\\{2}. TRUE
    return T(
        [
            (
                "A radio-telescope pointing error (degrees) is $e(\\theta)=|3\\theta-1|$. "
                "The dish is on target when $e(\\theta)<0.5$. Then the admissible "
                "angles are exactly $\\dfrac16<\\theta<\\dfrac12$."
            ),
            (
                "Outdoor work under smoke is allowed only while the AQI model "
                "$A(t)=-t^{2}+16t+20$ stays at most 80 during a shift $t\\in[0,12]$. "
                "Then work is allowed exclusively on the interval $[10,12]$."
            ),
            (
                "A pottery wheel must run between 120 and 240 RPM and also satisfy "
                "$|r-200|\\le 30$. Then the usable speeds are exactly $170\\le r\\le 230$."
            ),
            (
                "Each sculpture uses 2 kg of clay at 3 EUR/kg, one glaze jar at 8 EUR, "
                "and $0.5$ kWh of energy at 0.40 EUR/kWh. With a budget of 500 EUR and "
                "80 kg of clay in stock, the maximum number of sculptures is less than 35."
            ),
            (
                "The inequality $\\dfrac{|x+1|}{|x-2|}\\ge 2$ (with $x\\ne 2$) has "
                "solution set $[1,5]\\setminus\\{2\\}$."
            ),
        ],
        [True, False, True, False, True],
        [
            (
                "**A.** → True\n\n"
                "$$|3\\theta-1|<0.5\\Rightarrow "
                "\\dfrac16<\\theta<\\dfrac12.$$\n\n"
                "Therefore the statement is True."
            ),
            (
                "**B.** → False\n\n"
                "$$-t^{2}+16t+20\\le 80\\Rightarrow (t-6)(t-10)\\ge 0.$$\n\n"
                "On $[0,12]$ the solution is $[0,6]\\cup[10,12]$, not only $[10,12]$. "
                "Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "$$|r-200|\\le 30\\Rightarrow 170\\le r\\le 230,$$\n\n"
                "already inside $[120,240]$. Therefore the statement is True."
            ),
            (
                "**D.** → False\n\n"
                "Cost per piece: $2\\cdot 3+8+0.5\\cdot 0.4=14.2$ EUR. "
                "Budget: $n\\le\\lfloor 500/14.2\\rfloor=35$. Clay: $n\\le 40$. "
                "Maximum is 35, which is not less than 35. Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$|x+1|\\ge 2|x-2|\\Leftrightarrow (x+1)^{2}\\ge 4(x-2)^{2}$$\n\n"
                "$$(5-x)(x-1)\\ge 0\\Rightarrow x\\in[1,5],$$\n\n"
                "excluding the pole $x=2$. Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: telescope pointing tolerance, a smoke-AQI quadratic "
            "band with two safe windows, pottery RPM constraints, sculpture material "
            "limits, and a ratio of absolute values."
        ),
        "Exam-style tasks - 27",
        115,
    )


# ---------------------------------------------------------------------------
# MATH 6.116 — blood bank / orchestra / tidal / biquadratic / courier-alt
# ---------------------------------------------------------------------------
def task_116():
    # A: Platelets expire after storage hours h with viability V= 12 - 0.15 h^2.
    # Need V > 3. 12-0.15h^2 > 3 => 0.15h^2 < 9 => h^2 < 60 => |h|<sqrt60≈7.75
    # Claim usable for all whole hours 0..8 -> False (h=8: 0.15*64=9.6, V=2.4<3)
    #
    # B: Orchestra pit humidity must satisfy |H-50| <= 8 and H > 40. Claim 42<=H<=58.
    # |H-50|<=8 => 42<=H<=58. Intersect H>40 same. TRUE for closed.
    # Make claim 42 < H < 58 -> False
    #
    # C: Tidal sampling: water depth d(t)= 4 + 3 cos(π t /6) ... too triggy for inequalities chapter.
    # Use: depth d(t)= -0.5 t^2 + 3t + 2 for t in [0,8] hours after low tide.
    # Sample when d >= 4.5. -0.5t^2+3t+2 >=4.5 => -0.5t^2+3t-2.5>=0 => t^2-6t+5<=0
    # (t-1)(t-5)<=0 => 1<=t<=5. Claim between 1 and 5 inclusive. TRUE
    #
    # D: x^4 - 13 x^2 + 36 < 0. Let u=x^2: u^2-13u+36<0 (u-4)(u-9)<0 => 4<u<9
    # => 2<|x|<3 => x in (-3,-2)U(2,3). Claim (-3,-2)U(2,3). TRUE
    #
    # E: Glacier melt turbidity sampler: each run uses 3 filters at 2.5 EUR and 1 bottle
    # at 4 EUR plus 1.5 EUR transport. Budget 200 EUR; at most 90 filters in stock.
    # Max runs less than 25. Cost 7.5+4+1.5=13. Budget n<=15. Filters 3n<=90 => n<=30.
    # Max 15 < 25. TRUE
    return T(
        [
            (
                "Platelet viability after $h$ whole hours of storage is "
                "$V(h)=12-0.15h^{2}$. Units remain issueable while $V(h)>3$. Then "
                "every whole hour $h\\in\\{0,1,\\ldots,8\\}$ is still issueable."
            ),
            (
                "Orchestra-pit humidity $H$ must satisfy $|H-50|\\le 8$ and $H>40$. "
                "Then the admissible humidities are exactly $42<H<58$."
            ),
            (
                "Tidal-pool depth (metres) $t$ hours after low tide is "
                "$d(t)=-0.5t^{2}+3t+2$ on $0\\le t\\le 8$. Sampling requires "
                "$d(t)\\ge 4.5$. Then sampling is possible exactly for $1\\le t\\le 5$."
            ),
            (
                "The biquadratic inequality $x^{4}-13x^{2}+36<0$ has solution set "
                "$(-3,-2)\\cup(2,3)$."
            ),
            (
                "Each turbidity-sampling run uses 3 filters at 2.50 EUR, one bottle at "
                "4 EUR, and 1.50 EUR transport. With a budget of 200 EUR and 90 filters "
                "in stock, the maximum number of runs is less than 25."
            ),
        ],
        [False, False, True, True, True],
        [
            (
                "**A.** → False\n\n"
                "$$12-0.15h^{2}>3\\Rightarrow h^{2}<60\\Rightarrow "
                "h<\\sqrt{60}\\approx 7.75.$$\n\n"
                "At $h=8$, $V=2.4\\le 3$. Therefore the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "$$|H-50|\\le 8\\Rightarrow 42\\le H\\le 58.$$\n\n"
                "The closed endpoints are allowed; the claim’s open interval is too "
                "narrow. Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "$$-0.5t^{2}+3t+2\\ge 4.5\\Rightarrow t^{2}-6t+5\\le 0$$\n\n"
                "$$(t-1)(t-5)\\le 0\\Rightarrow 1\\le t\\le 5,$$\n\n"
                "inside $[0,8]$. Therefore the statement is True."
            ),
            (
                "**D.** → True\n\n"
                "With $u=x^{2}$: $(u-4)(u-9)<0\\Rightarrow 4<u<9$, hence "
                "$2<|x|<3$, i.e. $(-3,-2)\\cup(2,3)$. Therefore the statement is True."
            ),
            (
                "**E.** → True\n\n"
                "Cost per run: $7.5+4+1.5=13$ EUR. Budget: $n\\le 15$. Filters: "
                "$n\\le 30$. Maximum is 15, which is less than 25. Therefore the "
                "statement is True."
            ),
        ],
        (
            "Independent claims: blood-bank viability hours, orchestra humidity "
            "endpoints, tidal sampling depth, a biquadratic sign chart, and "
            "field-sampling supply limits."
        ),
        "Exam-style tasks - 28",
        116,
    )


# ---------------------------------------------------------------------------
# MATH 6.117 — compost / archery / darkroom / abs nested / avg cost
# ---------------------------------------------------------------------------
def task_117():
    # A: Compost pile temperature C(t)= -t^2 + 18t + 20. Need 60 <= C <= 84.
    # -t^2+18t+20 >= 60 => -t^2+18t-40>=0 => t^2-18t+40<=0
    # roots 9±sqrt(81-40)=9±sqrt41 ≈ 2.60, 15.40
    # C<=84: -t^2+18t+20<=84 => -t^2+18t-64<=0 => t^2-18t+64>=0
    # roots 9±sqrt(81-64)=9±sqrt17 ≈ 4.88, 13.12. Outside roots OR between? 
    # t^2-18t+64 opens up: >=0 outside [4.88,13.12]
    # Lower: t in [2.60,15.40]. Upper constraint C<=84 means t in (-inf,4.88]U[13.12,inf)
    # Intersection: [2.60,4.88]U[13.12,15.40]. Claim 3<=t<=15 -> False
    #
    # B: Archery: score penalty p = |x| + 2|y| with aiming error. For fixed y=1,
    # p=|x|+2 <= 5 => |x|<=3. Claim -3<=x<=3. TRUE
    # Make harder: compound |2x-4| < 3|x+1|
    # Square: (2x-4)^2 < 9(x+1)^2 => |2x-4| < 3|x+1|
    # 4(x-2)^2 < 9(x+1)^2 => 2|x-2| < 3|x+1|
    # 4(x^2-4x+4) < 9(x^2+2x+1) => 4x^2-16x+16 < 9x^2+18x+9
    # 0 < 5x^2 +34x -7
    # disc=1156+140=1296=36^2. roots (-34±36)/10 => 0.2, -7
    # 5x^2+34x-7 > 0 outside roots: x<-7 or x>0.2
    # Claim x<-7 or x>1/5. TRUE
    #
    # C: Darkroom developer must stay between 18 and 22 C; current temp drifts as
    # T(m)= 24 - 0.4 m after m minutes of cooling. Claim usable for whole m=6..14.
    # 18 <= 24-0.4m <=22 => -6 <= -0.4m <= -2 => 15 >= m >= 5. So 5<=m<=15.
    # Whole 5..15, not 6..14. FALSE
    #
    # D: (x^2-9)/(x-2) >= 0. Critical -3,2,3. Sign chart...
    # Num (x-3)(x+3), den x-2. Poles 2. Zeros ±3.
    # >=0 on [-3,2)U[3,inf)? Test: x=-4: (+)/(−)=−. x=0: (−)/(−)=+. x=2.5 (−)/(+)=−. x=4 +.
    # At -3 zero included, at 3 included, 2 excluded. So [-3,2)U[3,∞). Claim [-3,2]U[3,∞) False
    #
    # E: Beekeeping frames: each frame 0.8 kg wax at 12 EUR/kg, 4 EUR wood, 1 EUR labor.
    # Budget 350; storage max 40 kg wax. Max frames < 25.
    # Cost 0.8*12+4+1=9.6+5=14.6. Budget n<=23.97 so 23. Wax 0.8n<=40 => n<=50. Max 23<25 TRUE
    return T(
        [
            (
                "A compost pile’s core temperature is $C(t)=-t^{2}+18t+20$ degrees "
                "Celsius $t$ hours after turning. The safe band is $60\\le C(t)\\le 84$. "
                "Then the pile is safe throughout $3\\le t\\le 15$."
            ),
            (
                "The inequality $|2x-4|<3|x+1|$ holds if and only if "
                "$x<-7$ or $x>\\dfrac15$."
            ),
            (
                "Developer fluid cools according to $T(m)=24-0.4m$ (°C after $m$ "
                "minutes) and must stay in $[18,22]$. Then every whole minute "
                "$m\\in\\{6,7,\\ldots,14\\}$ is usable and no other whole minute is."
            ),
            (
                "The inequality $\\dfrac{x^{2}-9}{x-2}\\ge 0$ has solution set "
                "$[-3,2]\\cup[3,\\infty)$."
            ),
            (
                "Each beehive frame uses $0.8$ kg of wax at 12 EUR/kg, 4 EUR of wood, "
                "and 1 EUR of labor. With a budget of 350 EUR and at most 40 kg of wax "
                "in stock, the maximum number of frames is less than 25."
            ),
        ],
        [False, True, False, False, True],
        [
            (
                "**A.** → False\n\n"
                "$C\\ge 60$ forces $t\\in[9-\\sqrt{41},9+\\sqrt{41}]\\approx[2.60,15.40]$. "
                "$C\\le 84$ forces $t\\le 9-\\sqrt{17}$ or $t\\ge 9+\\sqrt{17}"
                "\\approx 4.88$ / $13.12$. The intersection is two separate bands "
                "near the ends, not the single interval $[3,15]$. Therefore the "
                "statement is False."
            ),
            (
                "**B.** → True\n\n"
                "Squaring both nonnegative sides:\n\n"
                "$$4(x-2)^{2}<9(x+1)^{2}\\Rightarrow 5x^{2}+34x-7>0.$$\n\n"
                "Roots $-7$ and $\\tfrac15$; the quadratic is positive outside them. "
                "Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "$$18\\le 24-0.4m\\le 22\\Rightarrow 5\\le m\\le 15.$$\n\n"
                "Whole minutes $5$ and $15$ are also usable, so $\\{6,\\ldots,14\\}$ "
                "is incomplete. Therefore the statement is False."
            ),
            (
                "**D.** → False\n\n"
                "Zeros at $\\pm 3$, pole at $2$. A sign chart gives "
                "$[-3,2)\\cup[3,\\infty)$. Including $x=2$ is illegal. Therefore the "
                "statement is False."
            ),
            (
                "**E.** → True\n\n"
                "Cost per frame: $0.8\\cdot 12+4+1=14.6$ EUR. Budget: $n\\le 23$. "
                "Wax: $n\\le 50$. Maximum is 23, which is less than 25. Therefore the "
                "statement is True."
            ),
        ],
        (
            "Independent claims: a two-sided compost temperature band, an absolute-"
            "value comparison via squaring, darkroom cooling minutes, a rational "
            "inequality with a pole, and beehive-frame costing."
        ),
        "Exam-style tasks - 29",
        117,
    )


# ---------------------------------------------------------------------------
# MATH 6.118 — stained glass / glacier? theater / max-min / sqrt / production
# ---------------------------------------------------------------------------
def task_118():
    # A: Stained-glass annealing: temperature must decrease so that
    # 500 - 12t >= 200 and 500-12t <= 450 for t hours. 
    # 500-12t <=450 => -12t<=-50 => t>=50/12≈4.167
    # 500-12t >=200 => -12t>=-300 => t<=25.
    # Claim 4 <= t <= 25 -> False (need t>=4.167)
    #
    # B: Theater counterweight: imbalance |2a - b| <= 15 with b=40 fixed.
    # |2a-40|<=15 => 25/2 <= a <= 55/2 => 12.5 <= a <= 27.5. Claim 12<=a<=28 False
    #
    # C: max{x-2, 5-2x} <= 3. Both: x-2<=3 => x<=5; 5-2x<=3 => -2x<=-2 => x>=1.
    # So 1<=x<=5. Claim 1<x<5 -> False (closed)
    # Actually claim 1<=x<=5 TRUE - make claim equivalent to |x-3|<=2 which is 1<=x<=5 TRUE
    #
    # D: sqrt(2x-1) + sqrt(x+3) <= 5? Harder to verify.
    # Use: sqrt(x-1) < 3 - sqrt(x+2). Domain x>=1, and 3-sqrt(x+2)>=0 => sqrt(x+2)<=3 => x+2<=9 => x<=7.
    # Square: x-1 < 9 -6sqrt(x+2) + (x+2) => x-1 < x+11 -6sqrt(x+2) => -12 < -6sqrt => 2 < sqrt(x+2) => x+2 >4 => x>2.
    # Need also verify since both sides nonnegative when x in (2,7]. At x=2: LHS=1, RHS=3-2=1, strict fails.
    # Solution (2,7]. Claim [2,7] -> False
    #
    # E: Each stage weight plate: 4 kg steel 2 EUR/kg, 1 rubber pad 3 EUR, 0.5 EUR paint.
    # Budget 260; steel stock 180 kg. Max plates at least 30? 
    # Cost 8+3+0.5=11.5. Budget n<=22.6 so 22. Steel 4n<=180 n<=45. Max 22.
    # Claim maximum is at least 30 -> False
    return T(
        [
            (
                "During stained-glass annealing the kiln temperature is "
                "$500-12t$ (°C after $t$ hours) and must stay between 200 and 450 "
                "inclusive. Then every $t$ with $4\\le t\\le 25$ is admissible."
            ),
            (
                "A theater counterweight with fixed load $b=40$ requires "
                "$|2a-40|\\le 15$. Then every admissible counterweight mass $a$ "
                "satisfies $12\\le a\\le 28$."
            ),
            (
                "The condition $\\max\\{x-2,\\,5-2x\\}\\le 3$ is equivalent to "
                "$|x-3|\\le 2$."
            ),
            (
                "The inequality $\\sqrt{x-1}<3-\\sqrt{x+2}$ has solution set "
                "$[2,7]$."
            ),
            (
                "Each stage-weight plate uses 4 kg of steel at 2 EUR/kg, one rubber "
                "pad at 3 EUR, and 0.50 EUR of paint. With a budget of 260 EUR and "
                "180 kg of steel, the workshop can produce at least 30 plates."
            ),
        ],
        [False, False, True, False, False],
        [
            (
                "**A.** → False\n\n"
                "$$200\\le 500-12t\\le 450\\Rightarrow "
                "\\dfrac{50}{12}\\le t\\le 25.$$\n\n"
                "Since $\\tfrac{50}{12}\\approx 4.17>4$, the claim’s lower endpoint "
                "is too small. Therefore the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "$$|2a-40|\\le 15\\Rightarrow 12.5\\le a\\le 27.5.$$\n\n"
                "The integers-friendly claim $[12,28]$ overshoots both ends. "
                "Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "$$x-2\\le 3\\text{ and }5-2x\\le 3\\Rightarrow 1\\le x\\le 5,$$\n\n"
                "which is exactly $|x-3|\\le 2$. Therefore the statement is True."
            ),
            (
                "**D.** → False\n\n"
                "Domain forces $1\\le x\\le 7$. Squaring on that set yields the open-"
                "closed interval $(2,7]$. Including $x=2$ fails the strict inequality. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → False\n\n"
                "Cost per plate: $11.5$ EUR. Budget: $n\\le 22$. Steel: $n\\le 45$. "
                "Maximum is 22, so at least 30 is impossible. Therefore the statement "
                "is False."
            ),
        ],
        (
            "Independent claims: annealing temperature schedule, counterweight "
            "balance, a max-of-linear reformulation, a nested square-root "
            "inequality, and stage-weight production limits."
        ),
        "Exam-style tasks - 30",
        118,
    )


# ---------------------------------------------------------------------------
# MATH 6.119 — aquarium / abs cubic-ish / ferry no / wind? hydroponic pH / rational
# ---------------------------------------------------------------------------
def task_119():
    # A: Aquarium salinity S(x)= 35 - 0.5x after x litres freshwater added to 100 L.
    # Need 32 <= S <= 34. 32 <= 35-0.5x <=34 => -3 <= -0.5x <= -1 => 6 >= x >= 2.
    # Claim 2<=x<=6. TRUE
    #
    # B: |x^3| > 8. => |x| > 2. Claim x<-2 or x>2. TRUE
    # Too easy? Use |x^2 - 4x| >= 5.
    # Let f=x(x-4). |x^2-4x|>=5.
    # x^2-4x >=5 or x^2-4x <=-5
    # (x-2)^2 >=9 or (x-2)^2 <= -1+4 wait:
    # x^2-4x-5>=0 (x-5)(x+1)>=0 => x<=-1 or x>=5
    # x^2-4x+5<=0 (x-2)^2+1<=0 never!
    # Wait x^2-4x <= -5 => x^2-4x+5<=0 => (x-2)^2 +1 <=0 impossible.
    # So only x<=-1 or x>=5. Claim (-inf,-1]U[5,inf). TRUE
    #
    # C: Hydroponic pH adjuster: each ml of acid lowers pH by 0.05 from start 7.2.
    # Want 5.8 <= pH <= 6.4. pH=7.2-0.05m. 5.8<=7.2-0.05m<=6.4
    # -1.4 <= -0.05m <= -0.8 => 28 >= m >= 16. Whole ml 16..28.
    # Budget: acid 0.25 EUR/ml, max spend 6 EUR => m<=24. So admissible 16..24.
    # Claim 16 through 28 -> False (budget)
    #
    # D: (x+5)/(2-x) > 0. Sign: critical -5, 2. Positive when both same sign:
    # (-5,2). Claim (-5,2). TRUE (strict, poles zeros excluded)
    #
    # E: Rectangle poster: perimeter at most 120, area at least 800, sides x and 30.
    # Wait fixed one side? Length L width W, 2(L+W)<=120, LW>=800, L=2W.
    # 2(2W+W)<=120 => 6W<=120 W<=20. Area 2W^2>=800 W^2>=400 W>=20.
    # Only W=20. Claim W can be any in [18,20] -> False
    return T(
        [
            (
                "An aquarium’s salinity after adding $x$ litres of freshwater to a "
                "100 L tank is $S(x)=35-0.5x$. The keeper needs $32\\le S(x)\\le 34$. "
                "Then every admissible $x$ satisfies $2\\le x\\le 6$."
            ),
            (
                "The inequality $|x^{2}-4x|\\ge 5$ has solution set "
                "$(-\\infty,-1]\\cup[5,\\infty)$."
            ),
            (
                "Hydroponic pH starts at 7.2 and falls by $0.05$ per millilitre of "
                "acid (whole millilitres). The target is $5.8\\le\\mathrm{pH}\\le 6.4$, "
                "and at most 6 EUR may be spent at 0.25 EUR/ml. Then every whole "
                "millilitre from 16 through 28 inclusive is admissible."
            ),
            (
                "The inequality $\\dfrac{x+5}{2-x}>0$ holds exactly on the open "
                "interval $(-5,2)$."
            ),
            (
                "A rectangular poster has length twice its width, at most 120 cm of "
                "border trim, and area at least $800\\,\\mathrm{cm}^{2}$. Then the "
                "width may be any real number from 18 to 20 cm inclusive."
            ),
        ],
        [True, True, False, True, False],
        [
            (
                "**A.** → True\n\n"
                "$$32\\le 35-0.5x\\le 34\\Rightarrow 2\\le x\\le 6.$$\n\n"
                "Therefore the statement is True."
            ),
            (
                "**B.** → True\n\n"
                "$$x^{2}-4x\\ge 5\\Rightarrow (x+1)(x-5)\\ge 0,$$\n\n"
                "while $x^{2}-4x\\le -5$ rearranges to $(x-2)^{2}+1\\le 0$, which never "
                "holds. So $x\\le -1$ or $x\\ge 5$. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "The pH band alone gives $16\\le m\\le 28$, but the budget "
                "$0.25m\\le 6$ forces $m\\le 24$. Values $25$–$28$ are unaffordable. "
                "Therefore the statement is False."
            ),
            (
                "**D.** → True\n\n"
                "Zero at $-5$, pole at $2$. Same-sign analysis yields the open "
                "interval $(-5,2)$. Therefore the statement is True."
            ),
            (
                "**E.** → False\n\n"
                "With width $w$ and length $2w$: trim $6w\\le 120\\Rightarrow w\\le 20$; "
                "area $2w^{2}\\ge 800\\Rightarrow w\\ge 20$. Only $w=20$ works, not "
                "$[18,20]$. Therefore the statement is False."
            ),
        ],
        (
            "Independent claims: aquarium salinity dilution, a quadratic absolute-"
            "value inequality, pH dosing with a budget cap, a rational sign "
            "interval, and a double-constrained poster."
        ),
        "Exam-style tasks - 31",
        119,
    )


# ---------------------------------------------------------------------------
# MATH 6.120 — glacier turbidity already used — use ice rink / abs / pump / 
# ---------------------------------------------------------------------------
def task_120():
    # A: Ice-rink resurfacer: water used W = 40 + 2.5 n litres for n resurfacings.
    # Tank 200 L; also need W <= 180 for quality. Max whole n: 40+2.5n <=180 => n<=56.
    # Also n>=0. Claim at most 56. TRUE
    # Add second constraint electricity 3n <= 150 => n<=50. Then max 50.
    # Claim at most 56 -> False
    #
    # B: |3-x| >= 2|x+1|. Square: (3-x)^2 >= 4(x+1)^2
    # |3-x| >= 2|x+1|
    # (3-x-2x-2)(3-x+2x+2)>=0 => (1-3x)(5+x)>=0
    # Roots x=1/3, x=-5. Sign: positive when x<=-5 or x>=1/3? 
    # (1-3x)(x+5)>=0. Critical -5, 1/3. Positive outside for opens-down product of (const - 3x)...
    # Test x=-6: (1+18)(-1)<0? (19)(-1)<0. x=-5:0. x=0: (1)(5)>0. x=1: (1-3)(6)<0. x=2: (1-6)(7)<0.
    # Wait x=0 positive. Between -5 and 1/3: positive. Outside negative?
    # x=-6: 1-3(-6)=19, -6+5=-1, product -19 <0
    # x=1: 1-3=-2, 6, product <0
    # So >=0 on [-5, 1/3]. Claim x<=-5 or x>=1/3 -> False (opposite!)
    #
    # C: Pump fills pool: depth D(t)= 0.3 t metres after t minutes, overflow risk if D>2.1,
    # and filtering needs D>=0.9. Claim safe operating 3<=t<=7.
    # 0.9<=0.3t<=2.1 => 3<=t<=7. TRUE
    #
    # D: (x-4)/(x+1) <= 2. (x-4 -2x -2)/(x+1)<=0 => (-x-6)/(x+1)<=0 => (x+6)/(x+1)>=0
    # => x<=-6 or x>-1? (x+6)/(x+1)>=0: (-inf,-6]U(-1,inf). Claim (-inf,-6]U(-1,inf). TRUE
    #
    # E: Each lab centrifuge run: 2 vials 6 EUR, 1 rotor-check 5 EUR, energy 1.2 EUR.
    # Budget 400; vial stock 90. Max runs less than 30.
    # Cost 12+5+1.2=18.2. Budget n<=21.97->21. Vials 2n<=90->45. Max 21<30 TRUE
    return T(
        [
            (
                "An ice-rink resurfacer uses $W=40+2.5n$ litres of water for $n$ "
                "passes and draws $3n$ kWh of power. The water tank limit for quality "
                "is $W\\le 180$, and at most 150 kWh may be used. Then the largest "
                "possible whole number of passes is 56."
            ),
            (
                "The inequality $|3-x|\\ge 2|x+1|$ holds if and only if "
                "$x\\le -5$ or $x\\ge\\dfrac13$."
            ),
            (
                "A pool’s depth after $t$ minutes of pumping is $D(t)=0.3t$ metres. "
                "Filtering needs $D\\ge 0.9$ while overflow risk begins when $D>2.1$. "
                "Then safe operating times are exactly $3\\le t\\le 7$."
            ),
            (
                "The inequality $\\dfrac{x-4}{x+1}\\le 2$ is equivalent to "
                "$x\\in(-\\infty,-6]\\cup(-1,\\infty)$."
            ),
            (
                "Each centrifuge run uses 2 vials at 6 EUR, one rotor check at 5 EUR, "
                "and 1.20 EUR of energy. With a budget of 400 EUR and 90 vials in "
                "stock, the maximum number of runs is less than 30."
            ),
        ],
        [False, False, True, True, True],
        [
            (
                "**A.** → False\n\n"
                "Water alone: $40+2.5n\\le 180\\Rightarrow n\\le 56$. Power: "
                "$3n\\le 150\\Rightarrow n\\le 50$. The binding limit is 50, not 56. "
                "Therefore the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "Squaring yields $(1-3x)(x+5)\\ge 0$, hence "
                "$x\\in\\bigl[-5,\\tfrac13\\bigr]$, the complementary region to the "
                "claim. Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "$$0.9\\le 0.3t\\le 2.1\\Rightarrow 3\\le t\\le 7.$$\n\n"
                "(At $t=7$, $D=2.1$, still not strictly above the overflow "
                "threshold.) Therefore the statement is True."
            ),
            (
                "**D.** → True\n\n"
                "$$\\dfrac{x-4}{x+1}-2=\\dfrac{-x-6}{x+1}\\le 0"
                "\\Leftrightarrow\\dfrac{x+6}{x+1}\\ge 0,$$\n\n"
                "giving $(-\\infty,-6]\\cup(-1,\\infty)$. Therefore the statement is True."
            ),
            (
                "**E.** → True\n\n"
                "Cost per run: $18.2$ EUR. Budget: $n\\le 21$. Vials: $n\\le 45$. "
                "Maximum is 21, which is less than 30. Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: dual water/power limits for an ice resurfacer, an "
            "absolute-value comparison with a complementary trap, pool pumping "
            "depth, a rational inequality, and lab centrifuge costing."
        ),
        "Exam-style tasks - 32",
        120,
    )


def verify_designs():
    """Numeric sanity checks for designed answer keys."""
    # 111
    assert abs((-0.5) * (8 - 12) ** 2 + 32 - 24) < 1e-9
    assert 180 / 1.8 == 100
    # 112
    assert 1200 / 118  # unused
    assert (8 + 1.5 * 28) >= 50
    # 113
    assert 100 - 0.8 * 49 < 64
    assert 100 - 0.8 * 36 >= 64
    # 114
    assert -2 * 36 + 40 * 6 + 10 >= 170
    assert -2 * 25 + 40 * 5 + 10 < 170
    assert math.ceil(90 / 8) == 12
    # 115
    assert 500 // 14  # floor check via int
    assert math.floor(500 / 14.2) == 35
    # 116
    assert 12 - 0.15 * 64 < 3
    # 117
    assert 14.6 * 23 <= 350 < 14.6 * 24
    # 118
    assert 50 / 12 > 4
    assert 11.5 * 22 <= 260 < 11.5 * 23
    # 119
    assert 2 * 20 ** 2 == 800
    # 120
    assert 40 + 2.5 * 50 <= 180 and 3 * 50 <= 150
    assert 40 + 2.5 * 56 <= 180 and 3 * 56 > 150
    print("design sanity ok")


# Continue with remaining 8 tasks 121-128 in part 2 of file after first write.
TASK_BUILDERS_PART1 = [
    task_111,
    task_112,
    task_113,
    task_114,
    task_115,
    task_116,
    task_117,
    task_118,
    task_119,
    task_120,
]


if __name__ == "__main__":
    verify_designs()
    print("part1 builders", len(TASK_BUILDERS_PART1))


# ---------------------------------------------------------------------------
# MATH 6.121 — radio mast / nested sqrt / freight elevator / cubic sign / abs
# ---------------------------------------------------------------------------
def task_121():
    # A: Radio mast guy-wire tension T(w)= 50 + 0.8 w^2. Safe when T <= 200 and
    # w wind >= 0. 50+0.8w^2 <=200 => w^2 <= 187.5 => w <= sqrt(187.5)=5*sqrt(7.5)≈13.69
    # Claim safe for all w in [0,14] -> False
    #
    # B: sqrt(x+3) - sqrt(x) <= 1. Domain x>=0.
    # Isolate: sqrt(x+3) <= 1+sqrt(x). Square: x+3 <= 1+2sqrt(x)+x => 2 <= 2sqrt(x) => 1<=sqrt(x) => x>=1.
    # Check: always true for x>=1? At x=0: sqrt3-0≈1.73>1 false. At x=1: 2-1=1<=1 true.
    # For large x difference ->0. Claim all x>=0 -> False. Claim x>=1 TRUE
    # Use claim: holds for every x>=0. FALSE
    #
    # C: Freight elevator: payload p kg, cable limit 900, each pallet 85 kg + operator 70.
    # n pallets: 85n+70 <=900 => 85n<=830 => n<=9.76 so n<=9.
    # Also floor space n<=10. Max 9. Claim at most 8 pallets -> False
    #
    # D: (x-2)^2 (x+1) > 0. Zero at 2 (even mult) and -1. Sign: positive when x>-1 except x=2?
    # (x-2)^2 always >=0, zero at 2. (x+1)>0 when x>-1. So x>-1, x≠2.
    # Claim (-1,inf)\\{2}. TRUE
    #
    # E: |x+4| + |x-1| < 7. Between -4 and 1: (x+4)+(1-x)=5 <7 always.
    # Left of -4: -x-4 +1-x = -2x-3 <7 always? Wait need <7.
    # For x<-4: -(x+4)-(x-1 wait |x-1|=1-x since x<-4<1: -x-4 +1 -x = -2x -3 <7 => -2x<10 => x>-5 when dividing neg...
    # -2x -3 <7 => -2x <10 => x > -5. So (-5,-4).
    # For x>1: x+4+x-1=2x+3<7 => 2x<4 => x<2. So (1,2).
    # Middle (-4,1): 5<7 always, include endpoints? At -4: 0+| -4-1|=5<7. At 1: |5|+0=5<7.
    # Full: (-5,2). Claim (-5,2). TRUE
    return T(
        [
            (
                "Guy-wire tension on a radio mast is $T(w)=50+0.8w^{2}$ under wind "
                "speed $w\\ge 0$. The cable is rated for at most 200. Then the mast is "
                "safe for every wind speed in $[0,14]$."
            ),
            (
                "The inequality $\\sqrt{x+3}-\\sqrt{x}\\le 1$ holds for every "
                "$x\\ge 0$."
            ),
            (
                "A freight elevator may carry at most 900 kg. Each pallet weighs 85 kg "
                "and the operator weighs 70 kg. Floor space allows at most 10 pallets. "
                "Then at most 8 pallets may be loaded."
            ),
            (
                "The strict inequality $(x-2)^{2}(x+1)>0$ has solution set "
                "$(-1,\\infty)\\setminus\\{2\\}$."
            ),
            (
                "The inequality $|x+4|+|x-1|<7$ has solution set $(-5,2)$."
            ),
        ],
        [False, False, False, True, True],
        [
            (
                "**A.** → False\n\n"
                "$$50+0.8w^{2}\\le 200\\Rightarrow w^{2}\\le 187.5\\Rightarrow "
                "w\\le\\sqrt{187.5}\\approx 13.69.$$\n\n"
                "At $w=14$ the tension exceeds 200. Therefore the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "Domain $x\\ge 0$. Isolating and squaring yields the necessary and "
                "sufficient condition $x\\ge 1$. At $x=0$, $\\sqrt{3}>1$. Therefore "
                "the statement is False."
            ),
            (
                "**C.** → False\n\n"
                "$$85n+70\\le 900\\Rightarrow n\\le 9.$$\n\n"
                "Space allows 10, so the load limit permits 9 pallets, not merely 8. "
                "Therefore the statement is False."
            ),
            (
                "**D.** → True\n\n"
                "$(x-2)^{2}\\ge 0$ always and vanishes only at $x=2$. The product is "
                "positive precisely when $x+1>0$ and $x\\ne 2$. Therefore the "
                "statement is True."
            ),
            (
                "**E.** → True\n\n"
                "Piecewise on $(-\\infty,-4]$, $[-4,1]$, and $[1,\\infty)$ yields "
                "the open interval $(-5,2)$. Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: mast guy-wire tension, a difference of square roots, "
            "elevator pallet loading, a squared-factor cubic sign chart, and a "
            "two-kink absolute-value sum."
        ),
        "Exam-style tasks - 33",
        121,
    )


# ---------------------------------------------------------------------------
# MATH 6.122 — ski wax / production chemicals / abs frac / quadratic projectile alt
# ---------------------------------------------------------------------------
def task_122():
    # A: Ski-wax application temperature band: wax works when |T+5| <= 3 for cold wax
    # i.e. -8 <= T <= -2. Claim -8 < T < -2 -> False (closed works)
    # Use: works iff -8<=T<=-2. Claim that TRUE - need a false somewhere.
    # Statement: works exactly for -8<T<-2. FALSE
    #
    # B: Chemical lab: each batch needs 1.5 L solvent at 4 EUR/L, 0.2 kg catalyst at
    # 30 EUR/kg, 5 EUR disposal. Budget 280; solvent stock 60 L. Max batches < 20.
    # Cost 6+6+5=17. Budget n<=16.47->16. Solvent 1.5n<=60 n<=40. Max 16<20 TRUE
    #
    # C: |x-1|/(x+2) <= 1 with x>-2? Careful domain x≠-2, and if we need denom>0 or all.
    # Cases... |x-1| <= |x+2| when? Actually |x-1| <= x+2 if x+2>0 i.e. x>-2, because RHS must be >=0 for abs <= something.
    # If x+2>0: |x-1| <= x+2. Square or cases: always true for x>-2? 
    # |x-1| - (x+2) <=0.
    # For x>=1: x-1-x-2=-3<=0 always.
    # For -2<x<1: 1-x-x-2=-2x-1<=0 => x>=-1/2.
    # So [-1/2, inf) but wait x>-2 intersect: [-0.5, inf) excluding nothing.
    # If x<-2: denom negative, inequality |x-1|/(x+2)<=1 means |x-1| >= x+2 (flip) since divide neg... 
    # |x-1| <= 1*(x+2) only makes sense... better: |x-1| - (x+2) all over (x+2) <=0.
    # Crit points -2,1. Sign chart of (|x-1|-(x+2))/(x+2).
    # From above for x>-2: solution x>=-1/2.
    # For x<-2: |x-1|=1-x (since x<-2<1). Numerator: 1-x-x-2=-2x-1. Denom neg.
    # (-2x-1)/(x+2)<=0. For x<-2, x+2<0. -2x-1: at x<-2, -2x>4 so -2x-1>3>0. Pos/neg <0 always.
    # So all x<-2 also works!
    # Full: (-inf,-2) U [-1/2, inf). Claim [-1/2,inf) -> False
    #
    # D: Firework altitude h(t)=-5t^2+40t. Above 60 m: -5t^2+40t>60 => t^2-8t+12<0
    # (t-2)(t-6)<0 => 2<t<6. Claim between 2 and 6 inclusive -> False (strict)
    #
    # E: Nested: ||x|-2| <= 1 => 1<=|x|<=3 => x in [-3,-1]U[1,3]. Claim that TRUE
    return T(
        [
            (
                "A cold ski-wax compound bonds correctly precisely when the snow "
                "temperature $T$ satisfies $|T+5|\\le 3$. Then the usable "
                "temperatures are exactly $-8<T<-2$."
            ),
            (
                "Each chemistry batch needs $1.5$ L of solvent at 4 EUR/L, $0.2$ kg of "
                "catalyst at 30 EUR/kg, and 5 EUR of disposal fees. With a budget of "
                "280 EUR and 60 L of solvent, the maximum number of batches is less "
                "than 20."
            ),
            (
                "The inequality $\\dfrac{|x-1|}{x+2}\\le 1$ (defined for $x\\ne -2$) "
                "has solution set $\\bigl[-\\dfrac12,\\infty\\bigr)$."
            ),
            (
                "A firework’s height is $h(t)=-5t^{2}+40t$ metres. It is more than "
                "60 m above ground between 2 and 6 seconds inclusive."
            ),
            (
                "The inequality $\\bigl||x|-2\\bigr|\\le 1$ has solution set "
                "$[-3,-1]\\cup[1,3]$."
            ),
        ],
        [False, True, False, False, True],
        [
            (
                "**A.** → False\n\n"
                "$$|T+5|\\le 3\\Rightarrow -8\\le T\\le -2.$$\n\n"
                "The endpoints are included. Therefore the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "Cost: $1.5\\cdot 4+0.2\\cdot 30+5=17$ EUR. Budget: $n\\le 16$. "
                "Solvent: $n\\le 40$. Maximum is 16, which is less than 20. Therefore "
                "the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "For $x>-2$ one obtains $x\\ge -\\tfrac12$. For $x<-2$ the inequality "
                "holds for every such $x$. The full set is "
                "$(-\\infty,-2)\\cup\\bigl[-\\tfrac12,\\infty\\bigr)$. Therefore the "
                "statement is False."
            ),
            (
                "**D.** → False\n\n"
                "$$-5t^{2}+40t>60\\Rightarrow (t-2)(t-6)<0\\Rightarrow 2<t<6.$$\n\n"
                "The inclusive claim wrongly keeps the endpoints, where $h=60$. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$1\\le|x|\\le 3\\Rightarrow x\\in[-3,-1]\\cup[1,3].$$\n\n"
                "Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: ski-wax temperature endpoints, chemistry-batch "
            "costing, a rational absolute-value inequality with a left ray, a "
            "firework height window, and nested absolute values."
        ),
        "Exam-style tasks - 34",
        122,
    )


# ---------------------------------------------------------------------------
# MATH 6.123 — greenhouse vents / abs linear / museum? climbing hold already —
#             geothermal / orchard / rational param
# ---------------------------------------------------------------------------
def task_123():
    # A: Greenhouse: vents open when interior temp u(t)= -0.4t^2 + 8t + 10 exceeds 30
    # for t hours after dawn. -0.4t^2+8t+10>30 => -0.4t^2+8t-20>0 => t^2-20t+50<0
    # roots 10±sqrt(100-50)=10±sqrt50=10±5sqrt2 ≈ 2.93, 17.07.
    # Claim open between 3 and 17 exclusive for continuous - approximately.
    # Exact: (10-5sqrt2, 10+5sqrt2). Claim (3,17) -> False
    #
    # B: |4x+3| >= 2x + 9. Cases or move: |4x+3| - 2x >= 9.
    # For 4x+3>=0 i.e. x>=-3/4: 4x+3-2x >=9 => 2x >=6 => x>=3.
    # For x<-3/4: -4x-3-2x>=9 => -6x >=12 => x<=-2 (since divide -6).
    # Solution (-inf,-2] U [3,inf). Claim that TRUE
    #
    # C: Geothermal pump: COP efficiency requires water temp W with 35 <= W <= 55
    # and |W - 48| <= 10. |W-48|<=10 => 38<=W<=58. Intersect [35,55]=[38,55].
    # Claim [38,55]. TRUE
    #
    # D: Orchard irrigation: each tree gets 12 L, pump delivers at most 900 L/day,
    # fertilizer budget allows at most 70 trees (2 EUR/tree, budget 140). 
    # Max trees less than 70. Water: n<=75. Fert: n<=70. Max 70, less than 70? False
    #
    # E: 1/(x-3) + 1/(x+3) <= 0. (2x)/((x-3)(x+3)) <=0 => 2x/(x^2-9)<=0
    # Critical -3,0,3. Sign: <=0 when num and den opposite or num 0.
    # x=0 included. Den positive |x|>3, neg |x|<3.
    # 2x/(x^2-9)<=0: zeros x=0; poles ±3.
    # Positive when x>3 or -3<x<0? Test x=4: +/+ >0. x=1: +/(-)<0. x=-1: -/(-)>0. x=-4: -/+ <0.
    # So <=0 on (-inf,-3)U[0,3). Claim (-inf,-3)U[0,3) TRUE
    return T(
        [
            (
                "Greenhouse vents open while interior temperature "
                "$u(t)=-0.4t^{2}+8t+10$ stays strictly above 30°C ($t$ hours after "
                "dawn). Then the vents are open exactly on the interval $(3,17)$."
            ),
            (
                "The inequality $|4x+3|\\ge 2x+9$ has solution set "
                "$(-\\infty,-2]\\cup[3,\\infty)$."
            ),
            (
                "A geothermal heat pump requires water temperature $W$ with "
                "$35\\le W\\le 55$ and $|W-48|\\le 10$. Then the admissible "
                "temperatures are exactly $38\\le W\\le 55$."
            ),
            (
                "An orchard irrigates each tree with 12 L from a 900 L daily pump "
                "allowance and spends 2 EUR of fertilizer per tree from a 140 EUR "
                "budget. Then the maximum number of trees that can be served is less "
                "than 70."
            ),
            (
                "The inequality $\\dfrac{1}{x-3}+\\dfrac{1}{x+3}\\le 0$ has solution "
                "set $(-\\infty,-3)\\cup[0,3)$."
            ),
        ],
        [False, True, True, False, True],
        [
            (
                "**A.** → False\n\n"
                "$$-0.4t^{2}+8t+10>30\\Rightarrow t^{2}-20t+50<0$$\n\n"
                "$$t\\in(10-5\\sqrt{2},\\,10+5\\sqrt{2})\\approx(2.93,17.07),$$\n\n"
                "not $(3,17)$. Therefore the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "For $x\\ge -\\tfrac34$: $4x+3\\ge 2x+9\\Rightarrow x\\ge 3$. "
                "For $x<-\\tfrac34$: $-4x-3\\ge 2x+9\\Rightarrow x\\le -2$. "
                "Union: $(-\\infty,-2]\\cup[3,\\infty)$. Therefore the statement is True."
            ),
            (
                "**C.** → True\n\n"
                "$$|W-48|\\le 10\\Rightarrow 38\\le W\\le 58,$$\n\n"
                "intersected with $[35,55]$ yields $[38,55]$. Therefore the statement "
                "is True."
            ),
            (
                "**D.** → False\n\n"
                "Water: $n\\le 75$. Fertilizer: $n\\le 70$. Maximum is 70, which is "
                "not less than 70. Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$\\dfrac{2x}{x^{2}-9}\\le 0$$\n\n"
                "with poles $\\pm 3$ yields $(-\\infty,-3)\\cup[0,3)$. Therefore the "
                "statement is True."
            ),
        ],
        (
            "Independent claims: greenhouse vent timing, a one-sided absolute-value "
            "inequality, geothermal temperature intersection, orchard water and "
            "fertilizer caps, and a sum of reciprocals."
        ),
        "Exam-style tasks - 35",
        123,
    )


# ---------------------------------------------------------------------------
# MATH 6.124 — diving / abs product / solar panel / avg / sqrt domain
# ---------------------------------------------------------------------------
def task_124():
    # A: Scuba no-decompression limit minutes N(d)= 60 - 1.2 d for depth d in 10..40.
    # Need N >= 24. 60-1.2d >=24 => -1.2d >=-36 => d<=30. Also d>=10. Claim 10<=d<=30 TRUE
    #
    # B: |x||x+5| < 6. Harder: x(x+5) between -6 and 6: -6 < x^2+5x < 6
    # Left: x^2+5x+6>0 (x+2)(x+3)>0 => x<-3 or x>-2
    # Right: x^2+5x-6<0 (x+6)(x-1)<0 => -6<x<1
    # Intersect: (-6,-3)U(-2,1). Claim (-6,-3)U(-2,1). TRUE
    # Wait left strict: at -3,-2 zeros of left give |product|=0<6 so actually include?
    # |x(x+5)| =0 at 0 and -5, also. At x=-3: |-3*2|=6 not <6. At x=-2: 2*3=6 not <.
    # So open: (-6,-3)U(-2,1). At x approaching -6 from right: |-6*[-1]|=6 not <.
    # x^2+5x <6 strict: -6<x<1. At x=-6: 36-30=6 not <. Good.
    # Claim (-6,-3)U(-2,1) TRUE
    #
    # C: Solar panel string: voltage V= 18 n for n panels, inverter accepts 90<=V<=180
    # and roof holds at most 12 panels. Admissible n: 5<=n<=10 from voltage, n<=12.
    # So 5..10. Claim 5 through 12 -> False
    #
    # D: Average cost (250 + 1.1 x)/x < 3.5 => 250/x < 2.4 => x > 250/2.4 = 104.166
    # Whole at least 105. Claim at least 104 -> False
    #
    # E: sqrt(5-2x) >= x + 1. Domain 5-2x>=0 => x<=2.5. Also RHS can be neg.
    # If x+1 <=0 i.e. x<=-1: true on (-inf,-1] ∩ (-inf,2.5]=(-inf,-1].
    # If x>-1: square 5-2x >= x^2+2x+1 => 0>= x^2+4x-4. Roots -2±sqrt8=-2±2sqrt2.
    # ≈ -4.83, 0.83. x^2+4x-4 <=0 between roots. Intersect (-1,2.5]: (-1, -2+2sqrt2].
    # Combined: (-inf, -2+2sqrt2]. Claim (-inf,1] -> False
    return T(
        [
            (
                "A recreational dive’s no-decompression limit at depth $d$ metres "
                "($10\\le d\\le 40$) is $N(d)=60-1.2d$ minutes. Requiring $N(d)\\ge 24$ "
                "restricts depth to $10\\le d\\le 30$."
            ),
            (
                "The inequality $|x(x+5)|<6$ has solution set "
                "$(-6,-3)\\cup(-2,1)$."
            ),
            (
                "A solar string produces $V=18n$ volts with $n$ panels. The inverter "
                "accepts $90\\le V\\le 180$ and the roof holds at most 12 panels. Then "
                "every integer $n$ from 5 through 12 inclusive is admissible."
            ),
            (
                "If production cost is $250+1.1x$ EUR for $x$ whole units, then at "
                "least 104 units must be made for average cost to fall strictly below "
                "3.50 EUR."
            ),
            (
                "The inequality $\\sqrt{5-2x}\\ge x+1$ has solution set "
                "$(-\\infty,1]$."
            ),
        ],
        [True, True, False, False, False],
        [
            (
                "**A.** → True\n\n"
                "$$60-1.2d\\ge 24\\Rightarrow d\\le 30,$$\n\n"
                "together with $d\\ge 10$. Therefore the statement is True."
            ),
            (
                "**B.** → True\n\n"
                "$$-6<x^{2}+5x<6$$\n\n"
                "splits into $(x+2)(x+3)>0$ and $(x+6)(x-1)<0$, intersecting in "
                "$(-6,-3)\\cup(-2,1)$. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "Voltage forces $5\\le n\\le 10$. Roof space allows 12, but $n=11$ "
                "and $n=12$ exceed 180 V. Therefore the statement is False."
            ),
            (
                "**D.** → False\n\n"
                "$$\\dfrac{250}{x}<2.4\\Rightarrow x>\\dfrac{250}{2.4}=104.\\overline{1}.$$\n\n"
                "The smallest whole $x$ is 105. Therefore the statement is False."
            ),
            (
                "**E.** → False\n\n"
                "Domain $x\\le\\tfrac52$. For $x\\le -1$ the inequality holds "
                "automatically. For $x>-1$, squaring yields "
                "$x\\le -2+2\\sqrt{2}\\approx 0.83$. The true set is "
                "$(-\\infty,-2+2\\sqrt{2}]$, not $(-\\infty,1]$. Therefore the "
                "statement is False."
            ),
        ],
        (
            "Independent claims: dive no-decompression depth, a product absolute-"
            "value inequality, solar-string voltage limits, average-cost integer "
            "rounding, and a square-root inequality with a mixed linear right-hand side."
        ),
        "Exam-style tasks - 36",
        124,
    )


# ---------------------------------------------------------------------------
# MATH 6.125 — cable car / double abs / brewery / parametric / triangle
# ---------------------------------------------------------------------------
def task_125():
    # A: Cable-car wind lock: operates when wind w satisfies w < 18 and |w-10| > 2
    # (avoid resonance band). |w-10|>2 => w<8 or w>12. Intersect w<18: w<8 or 12<w<18.
    # Claim (12,18) only -> False
    #
    # B: |2-|x|| >= 1. Let u=|x|. |2-u|>=1 => u<=1 or u>=3 => |x|<=1 or |x|>=3.
    # Claim (-inf,-3]U[-1,1]U[3,inf). TRUE
    #
    # C: Brewery: each keg needs 18 L beer (wort stock 900 L), CO2 cartridge 2.5 EUR,
    # label pack 1.5 EUR, labor 3 EUR. Budget 400 EUR for cartridges+labels+labor.
    # Cost extras 7 EUR. Budget n<=57.14. Wort n<=50. Max 50.
    # Claim maximum less than 48 -> False
    #
    # D: For all real a>0, (x-a)/(x+2a) < 0 iff -2a < x < a. TRUE
    # (zero a excluded, pole -2a excluded)
    #
    # E: Isosceles triangle base b, equal sides 10. Area >= 48. Height h=sqrt(100-(b/2)^2).
    # Area (b/2)*h >=48 => b sqrt(100-b^2/4) >=96.
    # Also triangle: 0<b<20. Claim b can be 16: h=sqrt(100-64)=6, area=0.5*16*6=48. OK.
    # Claim: every b in [12,16] works.
    # At b=12: h=sqrt(100-36)=8, area=48 exactly. OK.
    # At b=10: h=sqrt(100-25)=sqrt75≈8.66, area=43.3<48.
    # Function area: increases then decreases. Roots of area=48: b=12 and b=16?
    # b/2 * sqrt(100-b^2/4)=48 => b sqrt(...)=96. Square: b^2 (100-b^2/4)=9216
    # 100 b^2 - b^4/4 =9216 => b^4 - 400 b^2 + 36864=0. Let u=b^2: u^2-400u+36864=0
    # disc=160000-147456=12544=112^2. u=(400±112)/2 = 256 or 144. b=16 or 12.
    # Area >=48 for b in [12,16]. TRUE
    return T(
        [
            (
                "A cable car may run when wind speed $w\\ge 0$ satisfies $w<18$ and "
                "$|w-10|>2$. Then the operating winds are exactly the interval "
                "$(12,18)$."
            ),
            (
                "The inequality $\\bigl|2-|x|\\bigr|\\ge 1$ has solution set "
                "$(-\\infty,-3]\\cup[-1,1]\\cup[3,\\infty)$."
            ),
            (
                "Each brewery keg needs 18 L from a 900 L wort tank, plus a 2.50 EUR "
                "CO₂ cartridge, a 1.50 EUR label pack, and 3 EUR labor. With a 400 EUR "
                "budget for those three extras, the maximum number of kegs is less "
                "than 48."
            ),
            (
                "For every fixed $a>0$, the inequality $\\dfrac{x-a}{x+2a}<0$ holds "
                "if and only if $-2a<x<a$."
            ),
            (
                "An isosceles triangle has equal sides of length 10 and base $b$ "
                "(with $0<b<20$). Its area is at least 48 if and only if "
                "$12\\le b\\le 16$."
            ),
        ],
        [False, True, False, True, True],
        [
            (
                "**A.** → False\n\n"
                "$$|w-10|>2\\Rightarrow w<8\\text{ or }w>12.$$\n\n"
                "Intersecting $w<18$ also keeps $[0,8)$. The claim omits that lower "
                "band. Therefore the statement is False."
            ),
            (
                "**B.** → True\n\n"
                "With $u=|x|$, $|2-u|\\ge 1$ gives $u\\le 1$ or $u\\ge 3$, i.e. the "
                "stated union. Therefore the statement is True."
            ),
            (
                "**C.** → False\n\n"
                "Extras cost 7 EUR per keg: $n\\le\\lfloor 400/7\\rfloor=57$. Wort: "
                "$n\\le 50$. Maximum is 50, which is not less than 48. Therefore the "
                "statement is False."
            ),
            (
                "**D.** → True\n\n"
                "Zero $x=a$, pole $x=-2a$. Same-sign analysis on the three intervals "
                "gives $(-2a,a)$. Therefore the statement is True."
            ),
            (
                "**E.** → True\n\n"
                "Height $\\sqrt{100-b^{2}/4}$ and area $\\tfrac12 b h\\ge 48$ square "
                "to $b^{2}\\in\\{144,256\\}$ at equality, and the area is at least 48 "
                "precisely on $[12,16]$. Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: cable-car wind lockout bands, nested absolute "
            "values, brewery keg costing, a parameterized rational inequality, and "
            "an isosceles-triangle area constraint."
        ),
        "Exam-style tasks - 37",
        125,
    )


# ---------------------------------------------------------------------------
# MATH 6.126 — tidal turbine / floor function no — pipeline / abs / nutrition
# ---------------------------------------------------------------------------
def task_126():
    # A: Tidal turbine power usable when flow speed s satisfies 1.2 <= s <= 3.5
    # and |s - 2| >= 0.3 (avoid a control resonance). 
    # |s-2|>=0.3 => s<=1.7 or s>=2.3. Intersect [1.2,3.5]: [1.2,1.7]U[2.3,3.5].
    # Claim [1.2,3.5] -> False
    #
    # B: Pipeline pressure drop P= 0.05 L^2 for length L km. Need P <= 20 and L >= 8.
    # 0.05 L^2 <=20 => L^2 <=400 => L<=20. So 8<=L<=20. Claim 8<=L<=20 TRUE
    #
    # C: |5-2x| > |x+4|. Square: (5-2x)^2 > (x+4)^2
    # |5-2x| > |x+4| <=> (5-2x-x-4)(5-2x+x+4)>0 <=> (1-3x)(9-x)>0
    # Critical x=1/3, x=9. (1-3x)(9-x)>0. Opens... test x=0: (1)(9)>0. x=5: (1-15)(4)<0. x=10: (1-30)(-1)>0.
    # Positive on (-inf,1/3)U(9,inf)? At x=0 yes, between 1/3 and 9 negative, above 9: (neg)(neg)>0 yes.
    # Claim x < 1/3 or x > 9. TRUE
    #
    # D: Sports nutrition bars: each bar 0.04 kg protein powder at 25 EUR/kg, 0.06 kg
    # oats at 3 EUR/kg, wrapper 0.20 EUR. Budget 120 EUR; powder stock 3 kg.
    # Cost 1+0.18+0.2=1.38. Budget n<=86.95. Powder 0.04n<=3 => n<=75. Max 75.
    # Claim max less than 70 -> False
    #
    # E: (2x+1)/(x-4) + 3 >= 0. (2x+1 + 3x -12)/(x-4)>=0 => (5x-11)/(x-4)>=0
    # Critical 11/5=2.2, 4. Positive (-inf? sign): same sign: x<=2.2 or x>4? 
    # (5x-11)/(x-4)>=0: (-inf, 11/5] U (4, inf). Claim (-inf,11/5]U(4,inf). TRUE
    return T(
        [
            (
                "A tidal turbine may generate when flow speed $s$ satisfies "
                "$1.2\\le s\\le 3.5$ and $|s-2|\\ge 0.3$. Then every speed in "
                "$[1.2,3.5]$ is admissible."
            ),
            (
                "Pipeline pressure drop over $L$ kilometres is $P=0.05L^{2}$. Needing "
                "$P\\le 20$ and $L\\ge 8$ forces $8\\le L\\le 20$."
            ),
            (
                "The inequality $|5-2x|>|x+4|$ holds if and only if "
                "$x<\\dfrac13$ or $x>9$."
            ),
            (
                "Each nutrition bar uses $0.04$ kg of protein powder at 25 EUR/kg, "
                "$0.06$ kg of oats at 3 EUR/kg, and a 0.20 EUR wrapper. With a budget "
                "of 120 EUR and 3 kg of powder, the maximum number of bars is less "
                "than 70."
            ),
            (
                "The inequality $\\dfrac{2x+1}{x-4}+3\\ge 0$ has solution set "
                "$\\bigl(-\\infty,\\dfrac{11}{5}\\bigr]\\cup(4,\\infty)$."
            ),
        ],
        [False, True, True, False, True],
        [
            (
                "**A.** → False\n\n"
                "$$|s-2|\\ge 0.3\\Rightarrow s\\le 1.7\\text{ or }s\\ge 2.3.$$\n\n"
                "Intersecting $[1.2,3.5]$ removes $(1.7,2.3)$. Therefore the "
                "statement is False."
            ),
            (
                "**B.** → True\n\n"
                "$$0.05L^{2}\\le 20\\Rightarrow L\\le 20,$$\n\n"
                "with $L\\ge 8$. Therefore the statement is True."
            ),
            (
                "**C.** → True\n\n"
                "Squaring yields $(1-3x)(9-x)>0$, hence $x<\\tfrac13$ or $x>9$. "
                "Therefore the statement is True."
            ),
            (
                "**D.** → False\n\n"
                "Cost: $0.04\\cdot 25+0.06\\cdot 3+0.2=1.38$ EUR. Budget: $n\\le 86$. "
                "Powder: $n\\le 75$. Maximum is 75, which is not less than 70. "
                "Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "$$\\dfrac{5x-11}{x-4}\\ge 0$$\n\n"
                "gives $\\bigl(-\\infty,\\tfrac{11}{5}\\bigr]\\cup(4,\\infty)$. "
                "Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: tidal-turbine resonance lockout, pipeline pressure "
            "limits, an absolute-value comparison, nutrition-bar production caps, "
            "and a shifted rational inequality."
        ),
        "Exam-style tasks - 38",
        126,
    )


# ---------------------------------------------------------------------------
# MATH 6.127 — observatory / cubic? / trampoline park / sqrt abs / linear prog-ish
# ---------------------------------------------------------------------------
def task_127():
    # A: Observatory dome: open when cloud cover c% satisfies c <= 40 and
    # humidity h with |h-45|<=15, given h=30+0.5c. 
    # |30+0.5c - 45|<=15 => |0.5c -15|<=15 => |c-30|<=30 => 0<=c<=60.
    # Intersect c<=40: 0<=c<=40. Claim 0<=c<=40 TRUE
    #
    # B: Trampoline park: each session needs 1 supervisor slot from 12 available,
    # and socks sold cost inventory: 50 pairs, 2 pairs per session mandatory.
    # Revenue need at least 20 sessions. Claim feasible. Sessions n: n<=12, 2n<=50=>n<=25,
    # need n>=20. Feasible 20..12? 20<=n<=12 empty! Claim at least 20 sessions can run -> False
    #
    # C: sqrt(|x|-1) < 2. Domain |x|>=1. 0 <= |x|-1 < 4 => 1 <= |x| < 5 => x in (-5,-1]U[1,5).
    # Claim (-5,-1]U[1,5) TRUE
    #
    # D: |x+2| - |x-3| >= 1. Standard: for piecewise, result is x >= 2.
    # Actually known: |x+2|-|x-3| equals 5 for x>=3, 2x-1 for -2<=x<=3, -5 for x<=-2.
    # >=1: if x<=-2: -5>=1 false. If -2<=x<=3: 2x-1>=1 => x>=1. If x>=3: 5>=1 true.
    # So [1,inf). Claim [1,inf). TRUE
    #
    # E: Print shop: posters area at least 0.5 m^2, paper roll width 0.7 m so height h
    # with 0.7 h >=0.5 => h>=5/7≈0.714. Ink budget: 12h <= 10 => h<=10/12≈0.833.
    # Claim 0.7 <= h <= 0.85 -> False (lower is 5/7≈0.714 not 0.7; upper 0.833 not 0.85)
    return T(
        [
            (
                "An observatory may open when cloud cover $c\\%$ satisfies $c\\le 40$ "
                "and humidity $h=30+0.5c$ satisfies $|h-45|\\le 15$. Then every "
                "admissible cloud cover lies in $0\\le c\\le 40$."
            ),
            (
                "A trampoline park has 12 supervisor slots and 50 pairs of grip socks "
                "(2 pairs required per session). Management wants at least 20 sessions "
                "in a block. Then such a block is feasible."
            ),
            (
                "The inequality $\\sqrt{|x|-1}<2$ has solution set "
                "$(-5,-1]\\cup[1,5)$."
            ),
            (
                "The inequality $|x+2|-|x-3|\\ge 1$ has solution set $[1,\\infty)$."
            ),
            (
                "Posters need area at least $0.5\\,\\mathrm{m}^{2}$ on a $0.7\\,\\mathrm{m}$ "
                "wide roll (so height $h$ metres satisfies $0.7h\\ge 0.5$) and ink use "
                "$12h\\le 10$. Then every admissible $h$ satisfies $0.7\\le h\\le 0.85$."
            ),
        ],
        [True, False, True, True, False],
        [
            (
                "**A.** → True\n\n"
                "$$|30+0.5c-45|\\le 15\\Rightarrow |c-30|\\le 30\\Rightarrow 0\\le c\\le 60.$$\n\n"
                "Intersecting $c\\le 40$ (and $c\\ge 0$) yields $[0,40]$. Therefore "
                "the statement is True."
            ),
            (
                "**B.** → False\n\n"
                "Supervisors: $n\\le 12$. Socks: $n\\le 25$. Needing $n\\ge 20$ "
                "contradicts $n\\le 12$. Therefore the statement is False."
            ),
            (
                "**C.** → True\n\n"
                "Domain $|x|\\ge 1$ and $|x|-1<4$ give $1\\le|x|<5$, i.e. "
                "$(-5,-1]\\cup[1,5)$. Therefore the statement is True."
            ),
            (
                "**D.** → True\n\n"
                "Piecewise: the difference equals $-5$, $2x-1$, or $5$ on the three "
                "rays determined by $-2$ and $3$, and $2x-1\\ge 1$ forces $x\\ge 1$ "
                "on the middle piece, extending through $[3,\\infty)$. Therefore the "
                "statement is True."
            ),
            (
                "**E.** → False\n\n"
                "$$h\\ge\\dfrac{5}{7}\\approx 0.714,\\qquad "
                "h\\le\\dfrac{10}{12}\\approx 0.833.$$\n\n"
                "The claimed band $[0.7,0.85]$ is both too wide and wrongly "
                "endpointed. Therefore the statement is False."
            ),
        ],
        (
            "Independent claims: observatory weather gates, an infeasible trampoline "
            "session plan, a square root of an absolute value, a difference of "
            "absolute values, and poster print constraints."
        ),
        "Exam-style tasks - 39",
        127,
    )


# ---------------------------------------------------------------------------
# MATH 6.128 — canoe rental / hard abs / drone survey / factory mix / sqrt
# ---------------------------------------------------------------------------
def task_128():
    # A: Canoe rental: base 25 EUR + 8 EUR/hour. Budget 80 EUR. Also must return by
    # closing: t <= 6. Claim max rental 6 hours. 25+8t<=80 => 8t<=55 => t<=6.875.
    # With t<=6, max 6. TRUE
    # Make: claim can rent 7 hours -> False
    # Statement: with budget 80 and closing after 6 h, a 7-hour rental is possible. FALSE
    #
    # B: |x^2-9| <= 7. -7 <= x^2-9 <=7 => 2 <= x^2 <=16 => sqrt2 <=|x|<=4
    # => [-4,-sqrt2]U[sqrt2,4]. Claim [-4,-1]U[1,4] -> False
    #
    # C: Drone survey: battery minutes B= 40 - 0.5 d^2 after d km. Need B>=10.
    # 40-0.5d^2 >=10 => 0.5d^2 <=30 => d^2<=60 => d<=sqrt60≈7.75.
    # Claim all distances up to 8 km ok -> False
    #
    # D: Factory: product uses 2h machine A, 3h machine B. A available 100h, B 120h.
    # Profit need at least 30 units. Max units min(50,40)=40. Claim can make 45 -> False
    #
    # E: sqrt(3x+1) <= 2x - 1. Domain 3x+1>=0 => x>=-1/3, and 2x-1>=0 => x>=1/2.
    # Square on [1/2,inf): 3x+1 <= 4x^2-4x+1 => 0<=4x^2-7x => x(4x-7)>=0 => x<=0 or x>=7/4.
    # Intersect [1/2,inf): x>=7/4. Claim x>=2 -> False (7/4=1.75)
    return T(
        [
            (
                "A canoe rental costs 25 EUR plus 8 EUR per hour and must end within "
                "6 hours of closing time. With an 80 EUR budget, a 7-hour rental is "
                "still possible."
            ),
            (
                "The inequality $|x^{2}-9|\\le 7$ has solution set "
                "$[-4,-1]\\cup[1,4]$."
            ),
            (
                "A survey drone’s remaining battery minutes after flying $d$ "
                "kilometres are $B(d)=40-0.5d^{2}$. Needing $B(d)\\ge 10$, every "
                "distance up to 8 km is admissible."
            ),
            (
                "A product needs 2 hours on machine A and 3 hours on machine B. "
                "Machine A has 100 hours available and machine B has 120. Then the "
                "factory can produce 45 units."
            ),
            (
                "The inequality $\\sqrt{3x+1}\\le 2x-1$ holds if and only if "
                "$x\\ge\\dfrac{7}{4}$."
            ),
        ],
        [False, False, False, False, True],
        [
            (
                "**A.** → False\n\n"
                "Budget: $25+8t\\le 80\\Rightarrow t\\le 6.875$, but closing forces "
                "$t\\le 6$. A 7-hour rental violates the closing constraint. Therefore "
                "the statement is False."
            ),
            (
                "**B.** → False\n\n"
                "$$2\\le x^{2}\\le 16\\Rightarrow "
                "x\\in\\bigl[-4,-\\sqrt{2}\\bigr]\\cup\\bigl[\\sqrt{2},4\\bigr].$$\n\n"
                "Replacing $\\sqrt{2}$ by $1$ widens the set illegally. Therefore the "
                "statement is False."
            ),
            (
                "**C.** → False\n\n"
                "$$40-0.5d^{2}\\ge 10\\Rightarrow d\\le\\sqrt{60}\\approx 7.75.$$\n\n"
                "At $d=8$, $B(8)=40-32=8<10$. Therefore the statement is False."
            ),
            (
                "**D.** → False\n\n"
                "Machine A: $n\\le 50$. Machine B: $n\\le 40$. Maximum is 40, so 45 "
                "is impossible. Therefore the statement is False."
            ),
            (
                "**E.** → True\n\n"
                "Domain and nonnegativity of the right-hand side force $x\\ge\\tfrac12$. "
                "Squaring on that ray yields $x\\ge\\tfrac74$, which already implies "
                "$x\\ge\\tfrac12$. Therefore the statement is True."
            ),
        ],
        (
            "Independent claims: canoe rental with a hard closing time, a biquadratic "
            "absolute-value band, drone battery range, dual machine-hour caps, and a "
            "square-root inequality with a fractional threshold."
        ),
        "Exam-style tasks - 40",
        128,
    )


TASK_BUILDERS = TASK_BUILDERS_PART1 + [
    task_121,
    task_122,
    task_123,
    task_124,
    task_125,
    task_126,
    task_127,
    task_128,
]


def main() -> None:
    verify_designs()
    tasks = [b() for b in TASK_BUILDERS]
    assert len(tasks) == 18
    for t in tasks:
        assert len(t["statements"]) == 5
        assert len(t["answer_key"]) == 5
        assert len(t["tactical_explanations"]) == 5
        assert t["subsection"] == "6.5"

    data = json.loads(PATH.read_text(encoding="utf-8"))
    existing = {t["id"] for t in data["tasks"]}
    for t in tasks:
        if t["id"] in existing:
            raise SystemExit(f"{t['id']} already present")
        data["tasks"].append(t)

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"appended {[t['case_id'] for t in tasks]}")
    print("6.5 total", sum(1 for t in data["tasks"] if t.get("subsection") == "6.5"))


if __name__ == "__main__":
    main()
