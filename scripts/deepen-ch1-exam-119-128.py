#!/usr/bin/env python3
"""Deepen Ch1 exam MATH 1.119–1.128 letter explanations to binomial tutoring depth."""

from __future__ import annotations

import json
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "src" / "data" / "math-ch1-exam.json"

# Bodies only (no header/closer). Keys: case_id -> list of 5 bodies.
DEEP: dict[str, list[str]] = {
    "MATH 1.119": [
        r"""Read the morning and evening rosters from the stem and keep only the names that appear in both:

$$M=\{Ada,Cleo,Eli,Finn\}$$

$$E=\{Ben,Cleo,Dara,Finn\}$$

$$M\cap E=\{Cleo,Finn\}$$

That roster is exactly the claimed intersection.""",
        r"""Form the union by listing every name that appears in $M$ or in $E$ (or both):

$$M\cup E=\{Ada,Ben,Cleo,Dara,Eli,Finn\}$$

$$|M\cup E|=6$$

The claim says the union has size $7$, but the computed size is $6$.""",
        r"""Remove from the prize shortlist every name that already sits in the morning team:

$$P=\{Ada,Dara,Finn,Gia\}$$

$$P\setminus M=\{Dara,Gia\}$$

The remaining roster matches the claim.""",
        r"""Elements of $P$ are individual names. The object $\{Ada,Finn\}$ is a two-element set of names, not one of those names:

$$Ada\in P,\qquad Finn\in P$$

$$\{Ada,Finn\}\notin P$$

Membership fails, even though both people appear separately in $P$.""",
        r"""Symmetric difference is the disjoint union of the two exclusive regions:

$$M\setminus E=\{Ada,Eli\}$$

$$E\setminus M=\{Ben,Dara\}$$

$$|M\triangle E|=2+2=4\neq 3$$

The size is $4$, not $3$.""",
    ],
    "MATH 1.120": [
        r"""Three-set inclusion-exclusion recovers the union first:

$$|A\cup B\cup C|=105+92+80-48-41-36+20$$

$$|A\cup B\cup C|=172$$

The outside region is then

$$180-172=8$$

Exactly $8$ participants take none of the three courses.""",
        r"""Only-analytics removes the two pairwise overlaps and restores the triple count once:

$$|A\setminus(B\cup C)|=105-48-41+20$$

$$=36\neq 56$$

The analytics-only region is $36$, not $56$.""",
        r"""Each pair-only region is the pairwise overlap minus the triple:

$$|A\cap B\setminus C|=48-20=28$$

$$|A\cap C\setminus B|=41-20=21$$

$$|B\cap C\setminus A|=36-20=16$$

$$28+21+16=65$$

Exactly two courses total $65$.""",
        r"""At least two courses means the exactly-two total plus the triple region:

$$65+20=85\neq 65$$

The claim reused the exactly-two figure and missed the $20$ people in all three.""",
        r"""Only-compliance is the compliance total after removing its two pairwise overlaps and restoring the triple:

$$|C\setminus(A\cup B)|=80-41-36+20$$

$$=23$$

That matches the claimed only-compliance count.""",
    ],
    "MATH 1.121": [
        r"""Substitute a valid badge with current training into the door formula:

$$(p,q,r)=(T,T,*)$$

$$(p\wedge q)\vee(p\wedge r)=(T\wedge T)\vee(T\wedge *)=T$$

The first disjunct already opens the door.""",
        r"""An invalid badge forces both opening conjuncts to fail:

$$p=F$$

$$(p\wedge q)\vee(p\wedge r)=F$$

A supervisor cannot open the door when $p$ is false.""",
        r"""Factor the common proposition out of the two opening disjuncts:

$$(p\wedge q)\vee(p\wedge r)\equiv p\wedge(q\vee r)$$

The rewritten formula is logically equivalent to the original door rule.""",
        r"""With $p=T$, the pair $(q,r)$ must be one of $(T,T)$, $(T,F)$, or $(F,T)$:

$$\#\{(p,q,r):p\wedge(q\vee r)\}=3\neq 4$$

Only three of the eight assignments open the door.""",
        r"""The alarm lives on the single assignment $(T,F,F)$. On that row:

$$q\vee r=F$$

$$p\wedge(q\vee r)=F$$

So the door is closed whenever the alarm sounds.""",
    ],
    "MATH 1.122": [
        r"""Check every priority parcel against the scanned set:

$$P=\{a,c\},\qquad S=\{a,b,c\}$$

$$a\in S,\qquad c\in S$$

Every priority parcel is scanned, so the universal implication holds.""",
        r"""A single witness is enough for an existential claim. Parcel $c$ lies in both sets:

$$c\in P\cap L=\{c\}$$

$$P(c)\wedge L(c)$$

The required joint witness exists.""",
        r"""Universal claims fail from one counterexample. Parcel $c$ is scanned and late:

$$c\in S\cap L$$

$$S(c)\wedge L(c)$$

So scanned does not imply not-late.""",
        r"""Form the union of scanned and late parcels inside $D$:

$$S\cup L=\{a,b,c,d\}=D$$

$$|D\setminus(S\cup L)|=0\neq 1$$

No parcel is outside both sets.""",
        r"""Parcel $d$ is late but not priority:

$$d\in L,\qquad d\notin P$$

$$L(d)\wedge\neg P(d)$$

That witness makes the existential claim true.""",
    ],
    "MATH 1.123": [
        r"""Intersect the core and elective rosters label by label:

$$C=\{a,b,d,f\}$$

$$E=\{b,c,e,f,g\}$$

$$C\cap E=\{b,f\}$$

The shared labels match the claim.""",
        r"""List every label that appears in $E$ or in $A$:

$$E\cup A=\{a,b,c,e,f,g,h\}$$

$$|E\cup A|=7\neq 8$$

The union omits $d$, so it is not the full eight-module universe.""",
        r"""Remove audited labels from the core set:

$$C\setminus A=\{b,d\}$$

The claim listed $\{b,d,f\}$, but $f$ is audited and must leave. The true difference is $\{b,d\}$.""",
        r"""First form the core-audited intersection, then test the proposed subset:

$$C\cap A=\{a,f\}$$

$$\{a,f\}\subseteq\{a,f\}$$

The inclusion holds.""",
        r"""Symmetric difference adds the two exclusive regions:

$$C\setminus E=\{a,d\}$$

$$E\setminus C=\{c,e,g\}$$

$$|C\triangle E|=2+3=5\neq 4$$

The size is $5$, not $4$.""",
    ],
    "MATH 1.124": [
        r"""Apply three-set inclusion-exclusion to the service totals:

$$|M\cup I\cup S|=138+124+96-68-52-46+28$$

$$=220$$

$$240-220=20$$

Exactly $20$ customers use none of the services.""",
        r"""Compute each only-one region, restoring the triple once:

$$|M\text{ only}|=138-68-52+28=46$$

$$|I\text{ only}|=124-68-46+28=38$$

$$|S\text{ only}|=96-52-46+28=26$$

$$46+38+26=110$$

Exactly one service totals $110$.""",
        r"""Mobile-and-internet only is the pairwise count with the triple removed:

$$|M\cap I\setminus S|=68-28=40\neq 68$$

Leaving the pairwise figure unadjusted overstates the only-two region.""",
        r"""At least two services is the sum of the three pair-only regions and the triple:

$$(68-28)+(52-28)+(46-28)+28$$

$$=40+24+18+28=110\neq 82$$

The correct at-least-two total is $110$.""",
        r"""Streaming only removes both pairwise overlaps and restores the triple:

$$|S\text{ only}|=96-52-46+28=26\neq 34$$

The streaming-only region is $26$.""",
    ],
    "MATH 1.125": [
        r"""Substitute the given assignment into the shipping rule:

$$(p,q,r)=(T,F,T)$$

$$q\vee r=F\vee T=T$$

$$p\wedge(q\vee r)=T$$

The override alone is enough to ship when inventory matches.""",
        r"""Shipping needs $q\vee r=T$, while holding needs $q=r=F$:

$$S=p\wedge(q\vee r)$$

$$H=p\wedge\neg q\wedge\neg r$$

Those conditions on $(q,r)$ cannot hold together, so $S$ and $H$ are disjoint.""",
        r"""False inventory forces the shipping conjunction to fail regardless of payment or override:

$$(p,q,r)=(F,T,T)$$

$$p\wedge(q\vee r)=F$$

The order does not ship.""",
        r"""With $p=T$, the pairs $(q,r)\in\{(T,T),(T,F),(F,T)\}$ are the only shipping rows:

$$\#\{(p,q,r):S\}=3\neq 4$$

Exactly three assignments ship, not four.""",
        r"""Holding requires matching inventory, while rejection requires a mismatch:

$$H\Longrightarrow p=T$$

$$J=\neg p\Longrightarrow p=F$$

No assignment can be both held and rejected.""",
    ],
    "MATH 1.126": [
        r"""Universal claims fail from one counterexample. Cy is a team lead outside the certified set:

$$L=\{Ava,Cy\},\qquad C=\{Ava,Bo,Di\}$$

$$Cy\in L,\qquad Cy\notin C$$

So not every team lead is certified.""",
        r"""Bo belongs to both the certified and remote rosters:

$$Bo\in C\cap R=\{Bo\}$$

That single witness makes the existential claim true.""",
        r"""Bo is remote but is not listed as a team lead:

$$Bo\in R,\qquad Bo\notin L$$

Remote does not universally imply lead.""",
        r"""Form the union of certified and remote employees:

$$C\cup R=\{Ava,Bo,Cy,Di\}$$

That union is the whole four-person domain, so

$$|\{x:\neg C(x)\wedge\neg R(x)\}|=0\neq 1$$

Nobody is outside both sets.""",
        r"""Ava is a team lead who is not remote:

$$Ava\in L,\qquad Ava\notin R$$

That witness makes the existential claim true.""",
    ],
    "MATH 1.127": [
        r"""Intersect the express and night route lists:

$$X=\{1,3,4,7\}$$

$$N=\{2,3,5,7,8\}$$

$$X\cap N=\{3,7\}$$

The shared routes match the claim.""",
        r"""Complement night routes relative to the eight-route universe:

$$U=\{1,2,3,4,5,6,7,8\}$$

$$N^c=U\setminus N=\{1,4,6\}$$

The complement roster is exactly as claimed.""",
        r"""Form the union of express and accessible routes:

$$X\cup A=\{1,2,3,4,6,7,8\}$$

Route $5$ is missing, so

$$X\cup A\neq U$$""",
        r"""Accessible routes outside the night list are

$$A\setminus N=\{1,6\}$$

$$|A\setminus N|=2\neq 3$$

Only two routes meet the description.""",
        r"""Both $3$ and $7$ lie in $X$, so the two-element set is a subset of $X$:

$$\{3,7\}\subseteq X$$

$$\{3,7\}\in\mathcal P(X)$$

The claim that this membership is false is itself false.""",
    ],
    "MATH 1.128": [
        r"""Apply three-set inclusion-exclusion to the festival totals:

$$|J\cup T\cup F|=170+145+130-80-72-61+35$$

$$=267$$

The three-program union has size $267$.""",
        r"""Subtract the union from the survey size:

$$300-267=33$$

Exactly $33$ visitors chose no program.""",
        r"""Jazz-and-theater only removes the triple overlap from the pairwise count:

$$|J\cap T\setminus F|=80-35=45\neq 50$$

The pair-only region is $45$, not $50$.""",
        r"""Sum the three pair-only regions:

$$(80-35)+(72-35)+(61-35)$$

$$=45+37+26=108\neq 100$$

Exactly two programs total $108$.""",
        r"""Jazz only restores the triple after removing both jazz pairwise overlaps:

$$|J\text{ only}|=170-80-72+35=53\neq 72$$

The jazz-only region is $53$.""",
    ],
}


def wrap(letter: str, answer: bool, body: str) -> str:
    verd = "True" if answer else "False"
    return (
        f"**{letter}.** → {verd}\n\n"
        f"{body.strip()}\n\n"
        f"so the statement is {verd}."
    )


def main() -> None:
    data = json.loads(PATH.read_text(encoding="utf-8"))
    tasks = data["tasks"]
    lens: list[int] = []
    for t in tasks:
        cid = t["case_id"]
        if cid not in DEEP:
            continue
        bodies = DEEP[cid]
        assert len(bodies) == 5
        t["tactical_explanations"] = [
            wrap(L, ans, body)
            for L, ans, body in zip("ABCDE", t["answer_key"], bodies)
        ]
        for e in t["tactical_explanations"]:
            lens.append(len(e))
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Updated {len(DEEP)} tasks; letter lens avg={sum(lens)/len(lens):.0f} min={min(lens)} max={max(lens)}")


if __name__ == "__main__":
    main()
