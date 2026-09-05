#!/usr/bin/env python3
"""Rewrite Ch1 exam tactical explanations to MATH 13.18 depth."""

from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/math-ch1-exam.json")
L = "ABCDE"


def hdr(letter: str, truth: bool) -> str:
    return f"**{letter}.** → {'True' if truth else 'False'}"


def pack(letter: str, truth: bool, parts: list[str]) -> str:
    body = "\n\n".join(p for p in parts if p and str(p).strip())
    if not re.search(r"so the statement is\s+(True|False)", body, re.I):
        body += f"\n\nSo the statement is {'True' if truth else 'False'}."
    return f"{hdr(letter, truth)}\n\n{body}"


def apply(task: dict, ov: str, bodies: list[list[str]]) -> None:
    keys = task["answer_key"]
    task["solution_overview"] = ov
    task["tactical_explanations"] = [
        pack(L[i], bool(keys[i]), bodies[i]) for i in range(5)
    ]


def rewrite_all(tasks: list[dict]) -> None:
    by = {t["case_id"]: t for t in tasks}

    # ---- 1.109 ----
    apply(
        by["MATH 1.109"],
        "Five independent logic checks spanning membership versus subset, "
        "set algebra, propositional equivalence, a finite quantifier claim, "
        "and power-set cardinality. No shared numerical recovery is required.",
        [
            [
                "Membership asks whether an object is listed; subset asks whether every member of the smaller set sits in the larger one.",
                "The roster is",
                r"$$R=\{0,\{0\},\{\{0\}\}\}$$",
                "The object $\{0\}$ appears as a listed member, so",
                r"$$\{0\}\in R$$",
                "Because $\{0\}\\in R$, the singleton of that object is a subset:",
                r"$$\{\{0\}\}\subseteq R$$",
                "Both relations hold together, so the statement is True.",
            ],
            [
                "Compute the inner intersection first, then form the union with $C$.",
                "Shared members of $A$ and $B$:",
                r"$$A\cap B=\{2,4\}$$",
                "Attach $C$:",
                r"$$(A\cap B)\cup C=\{2,4\}\cup\{4,5,8\}$$",
                r"$$(A\cap B)\cup C=\{2,4,5,8\}$$",
                "The computed roster matches the claim, so the statement is True.",
            ],
            [
                "Rewrite each implication as a disjunction and compare the resulting formulas.",
                "Export the outer implication:",
                r"$$p\rightarrow(q\rightarrow r)\equiv\neg p\vee(\neg q\vee r)$$",
                r"$$\equiv\neg p\vee\neg q\vee r$$",
                "Export the other formula:",
                r"$$(p\wedge q)\rightarrow r\equiv\neg(p\wedge q)\vee r$$",
                r"$$\equiv\neg p\vee\neg q\vee r$$",
                "Both reduce to the same disjunction, so they are logically equivalent. So the statement is True.",
            ],
            [
                "For a universal claim on a finite domain, exhibit a witness $y$ that may depend on the chosen $x$.",
                "Fix an arbitrary $x\\in D=\\{1,2,3,4,5\\}$ and set",
                r"$$y=6-x$$",
                "Then $y$ lands in $D$ as well:",
                r"$$y\in\{5,4,3,2,1\}=D$$",
                "and",
                r"$$x+y=x+(6-x)=6$$",
                "Every $x$ has such a partner, so the statement is True.",
            ],
            [
                "Each element of a finite set may be included or omitted independently when building a subset.",
                "With $|C|=5$,",
                r"$$|\mathcal P(C)|=2^{|C|}=2^5$$",
                r"$$2^5=32$$",
                "The claim asserts $31$ members. Since $32\\ne31$, the statement is False.",
            ],
        ],
    )

    # ---- 1.110 ----
    apply(
        by["MATH 1.110"],
        "Five independent checks: two-set inclusion-exclusion, converse of an implication, "
        "order of quantifiers, restricted power-set counting, and De Morgan's law for unions.",
        [
            [
                "Count the union with inclusion-exclusion, then subtract from the conference total.",
                "The union size is",
                r"$$|L\cup D|=|L|+|D|-|L\cap D|$$",
                "Substitute the survey numbers:",
                r"$$|L\cup D|=52+41-18$$",
                r"$$|L\cup D|=75$$",
                "Those who attended neither panel:",
                r"$$90-75=15$$",
                "The claim asserts $17$ neither-attendees. Since $15\\ne17$, the statement is False.",
            ],
            [
                "A single truth assignment that separates $p\\rightarrow q$ from $q\\rightarrow p$ disproves universal equivalence.",
                "Take $(p,q)=(F,T)$:",
                r"$$p\rightarrow q=F\rightarrow T=T$$",
                r"$$q\rightarrow p=T\rightarrow F=F$$",
                "The two formulas disagree on this row, so they are not always equivalent. So the statement is False.",
            ],
            [
                "An existential witness $y$ must work for every $x$ once it is chosen.",
                "The equation $x+y=4$ forces $y=4-x$. On $\\{1,2,3\\}$ that would require",
                r"$$x=1\Longrightarrow y=3$$",
                r"$$x=2\Longrightarrow y=2$$",
                "No single $y$ equals both $3$ and $2$, so the quantified sentence fails. So the statement is False.",
            ],
            [
                "Fix the required and forbidden members, then count free binary choices for everyone else.",
                "Ava is forced in, Ben and Chen are forced out, leaving",
                r"$$8-1-2=5$$",
                "free delegates. Each may be included or omitted:",
                r"$$2^5=32$$",
                "Exactly $32$ committees meet the rules, so the statement is True.",
            ],
            [
                "An element lies outside a union precisely when it lies outside each set separately.",
                "Unpack the left side:",
                r"$$x\in(A\cup B)^c\Longleftrightarrow x\notin A\cup B$$",
                r"$$\Longleftrightarrow(x\notin A)\wedge(x\notin B)$$",
                r"$$\Longleftrightarrow x\in A^c\cap B^c$$",
                "The two sides describe the same collection, so the statement is True.",
            ],
        ],
    )

    # ---- 1.111 ----
    apply(
        by["MATH 1.111"],
        "Five independent checks: De Morgan's law for conjunction, an integer successor witness, "
        "duplicate roster entries, symmetric-difference size, and modus ponens as a tautology.",
        [
            [
                "A conjunction fails exactly when at least one conjunct fails.",
                "Negate and distribute:",
                r"$$\neg(p\wedge q)\equiv\neg p\vee\neg q$$",
                "That is De Morgan's law for $\\wedge$, matching the claim. So the statement is True.",
            ],
            [
                "For any integer, the next integer is a strictly larger witness.",
                "Fix $n\\in\\mathbb{Z}$ and choose",
                r"$$m=n+1$$",
                "Then $m\\in\\mathbb{Z}$ and",
                r"$$m-n=1>0$$",
                "so $m>n$. Every integer has such an $m$, so the statement is True.",
            ],
            [
                "Sets ignore repetition: listing an element twice does not create a new member.",
                "Collapse the roster:",
                r"$$\{\alpha,\beta,\alpha\}=\{\alpha,\beta\}$$",
                "Order is irrelevant, so",
                r"$$\{\alpha,\beta\}=\{\beta,\alpha\}$$",
                "but the cardinality is",
                r"$$|\{\alpha,\beta,\alpha\}|=2$$",
                "not $3$. The equality is fine; the claimed size is not. So the statement is False.",
            ],
            [
                "Symmetric difference is the disjoint union of the two exclusive parts.",
                "Exclusive pieces:",
                r"$$|A\setminus B|=|A|-|A\cap B|=18-5=13$$",
                r"$$|B\setminus A|=|B|-|A\cap B|=14-5=9$$",
                "Add them:",
                r"$$|A\triangle B|=13+9=22$$",
                "The claim asserts $23$. Since $22\\ne23$, the statement is False.",
            ],
            [
                "An implication is false only when its antecedent is true and its consequent is false.",
                "Suppose the antecedent $(p\\rightarrow q)\\wedge p$ is true. Then $p$ is true, and $p\\rightarrow q$ true forces $q$ true.",
                "Hence the consequent $q$ holds whenever the antecedent does, so",
                r"$$((p\rightarrow q)\wedge p)\rightarrow q$$",
                "never fails. It is a tautology, so the statement is True.",
            ],
        ],
    )

    # ---- 1.112 ----
    apply(
        by["MATH 1.112"],
        "Five independent checks: no greatest integer, iterated power-set size, three-set "
        "inclusion-exclusion, a contradictory propositional demand, and quantifier negation.",
        [
            [
                "Any proposed upper bound among the integers has a strictly larger successor.",
                "Fix a candidate $g\\in\\mathbb{Z}$ and set $n=g+1$. Then",
                r"$$n\le g\Longleftrightarrow g+1\le g\Longleftrightarrow 1\le0$$",
                "which is false. No such greatest integer exists, so the statement is False.",
            ],
            [
                "Apply the power-set cardinality rule once at each level.",
                "With $|X|=3$,",
                r"$$|\mathcal P(X)|=2^3=8$$",
                "Iterate:",
                r"$$|\mathcal P(\mathcal P(X))|=2^8=256$$",
                "The second power set has the claimed size, so the statement is True.",
            ],
            [
                "Three-set inclusion-exclusion removes pairwise double counts and restores the triple overlap.",
                "Write",
                r"$$|A\cup D\cup M|=|A|+|D|+|M|-|A\cap D|-|A\cap M|-|D\cap M|+|A\cap D\cap M|$$",
                "Substitute:",
                r"$$=46+39+31-17-12-10+4$$",
                r"$$=116-39+4=81$$",
                "The at-least-one count is $81$, so the statement is True.",
            ],
            [
                "The last two conjuncts force $(p,q)=(F,F)$, which makes $p\\vee q$ false.",
                "From $\\neg p\\wedge\\neg q$ one gets $(p,q)=(F,F)$, hence $p\\vee q=F$.",
                "Therefore",
                r"$$(p\vee q)\wedge\neg p\wedge\neg q$$",
                "is false on every assignment — no valuation satisfies the whole demand. So the statement is True.",
            ],
            [
                "Push the negation inward by flipping each quantifier in order.",
                "First step:",
                r"$$\neg[\forall x\ \exists y\ R(x,y)]\equiv\exists x\ \neg[\exists y\ R(x,y)]$$",
                "Second step:",
                r"$$\neg[\exists y\ R(x,y)]\equiv\forall y\ \neg R(x,y)$$",
                "Combine:",
                r"$$\neg[\forall x\ \exists y\ R(x,y)]\equiv\exists x\ \forall y\ \neg R(x,y)$$",
                "That matches the claimed negation, so the statement is True.",
            ],
        ],
    )

    # ---- 1.113 ----
    apply(
        by["MATH 1.113"],
        "Five independent checks: restricted two-element subsets, an exclusive Venn region, "
        "exclusive-or truth count, a categorical syllogism, and empty-set roles.",
        [
            [
                "After fixing $x$ in and $y$ out, the second symbol comes from the remaining four letters.",
                "Free symbols:",
                r"$$6-2=4$$",
                "Choose one of them to pair with $x$:",
                r"$$\binom{4}{1}=4$$",
                "Only four such subsets exist, not five. So the statement is False.",
            ],
            [
                "The red-only region is the red total minus the overlap.",
                "Partition:",
                r"$$|R\setminus F|=|R|-|R\cap F|$$",
                "Substitute:",
                r"$$|R\setminus F|=30-9=21$$",
                "The claim asserts $19$. Since $21\\ne19$, the statement is False.",
            ],
            [
                "The formula $(p\\vee q)\\wedge\\neg(p\\wedge q)$ is exclusive or: exactly one of $p,q$ true.",
                "Check all four rows:",
                r"$$(T,F)\Longrightarrow T,\qquad(F,T)\Longrightarrow T$$",
                r"$$(T,T)\Longrightarrow F,\qquad(F,F)\Longrightarrow F$$",
                "Exactly two assignments satisfy it, so the statement is True.",
            ],
            [
                "Chain the two universal premises through an arbitrary novelist.",
                "From $\\forall x\\,(N(x)\\rightarrow O(x))$ and $\\forall x\\,(O(x)\\rightarrow\\neg C(x))$,",
                "if $N(a)$ then $O(a)$, and then $\\neg C(a)$.",
                "Hence $\\forall x\\,(N(x)\\rightarrow\\neg C(x))$ — no novelist is careless. So the statement is True.",
            ],
            [
                "The empty set can appear as a listed element and is also a subset of every set.",
                "Membership:",
                r"$$\emptyset\in\{\emptyset,\{\emptyset\}\}$$",
                "Subset: the empty set has no element that fails to lie in $E$, so",
                r"$$\emptyset\subseteq E$$",
                "Both roles hold, so the statement is True.",
            ],
        ],
    )

    # ---- 1.114 ----
    apply(
        by["MATH 1.114"],
        "Five independent checks: complement of a coded union, biconditional agreement form, "
        "illicit conversion of a class inclusion, a strict subset chain, and exactly-two counting.",
        [
            [
                "List $A$, form $A\\cup B$, then retain the unused members of $U$.",
                "Multiples of $3$ in $U$:",
                r"$$A=\{3,6,9,12,15\}$$",
                "Union with $B=\\{1,2,3,4\\}$:",
                r"$$A\cup B=\{1,2,3,4,6,9,12,15\}$$",
                "Complement:",
                r"$$U\setminus(A\cup B)=\{5,7,8,10,11,13,14\}$$",
                "The roster matches, so the statement is True.",
            ],
            [
                "A biconditional is true exactly on the rows where the two propositions agree.",
                "Agreement rows give",
                r"$$(T,T)\Longrightarrow p\wedge q=T$$",
                r"$$(F,F)\Longrightarrow\neg p\wedge\neg q=T$$",
                "so",
                r"$$p\leftrightarrow q\equiv(p\wedge q)\vee(\neg p\wedge\neg q)$$",
                "The displayed form is correct. So the statement is True.",
            ],
            [
                "Membership in a larger class does not force membership in a named subclass.",
                "Premises: $\\forall x\\,(V(x)\\rightarrow M(x))$ and $M(\\mathrm{Lee})$.",
                "Countermodel: Lee is a musician who is not a violinist.",
                "The conclusion $V(\\mathrm{Lee})$ need not follow. So the statement is False.",
            ],
            [
                "Strict inclusion forces bounds on $|B|$ but does not pin a unique value.",
                "From $A\\subsetneq B\\subsetneq C$ with $|A|=2$ and $|C|=5$,",
                r"$$2<|B|<5$$",
                r"$$|B|\in\{3,4\}$$",
                "A three-element middle set is also possible, so \"must have four\" fails. So the statement is False.",
            ],
            [
                "Subtract the triple intersection from each pairwise count, then add the three exclusive double regions.",
                r"$$|A\cap B\text{ only}|=15-5=10$$",
                r"$$|A\cap C\text{ only}|=13-5=8$$",
                r"$$|B\cap C\text{ only}|=11-5=6$$",
                r"$$10+8+6=24$$",
                "Exactly $24$ names sit in exactly two lists, so the statement is True.",
            ],
        ],
    )

    # Fix English-in-math for 1.114 E - \text{ only} has space+English
    t = by["MATH 1.114"]
    t["tactical_explanations"][4] = pack(
        "E",
        True,
        [
            "Subtract the triple intersection from each pairwise count, then add the three exclusive double regions.",
            "Pairwise-only sizes:",
            r"$$|(A\cap B)\setminus C|=15-5=10$$",
            r"$$|(A\cap C)\setminus B|=13-5=8$$",
            r"$$|(B\cap C)\setminus A|=11-5=6$$",
            "Sum:",
            r"$$10+8+6=24$$",
            "Exactly $24$ names sit in exactly two lists, so the statement is True.",
        ],
    )

    # ---- 1.115 ----
    apply(
        by["MATH 1.115"],
        "Five independent false claims: inverse of a conditional, square roots over the reals, "
        "even-cardinality subsets, a failed distributive identity, and a misplaced parentheses claim.",
        [
            [
                "Replacing both sides of $p\\rightarrow q$ by their negations yields the inverse $\\neg p\\rightarrow\\neg q$, which is not equivalent to the original.",
                "Counter-row $(p,q)=(T,F)$:",
                r"$$p\rightarrow q=F$$",
                r"$$\neg p\rightarrow\neg q=T\rightarrow T=T$$",
                "Truth values differ, so the inverse does not always preserve truth. So the statement is False.",
            ],
            [
                "Over the reals, $y^{2}=x$ requires $x\\ge0$; negative $x$ have no real square root.",
                "Take $x=-1$. No real $y$ satisfies $y^{2}=-1$.",
                "Hence $\\forall x\\ \\exists y\\ (y^{2}=x)$ fails on $\\mathbb{R}$. So the statement is False.",
            ],
            [
                "Exactly half of the subsets of a nonempty finite set have even cardinality.",
                "With $|S|=5$,",
                r"$$|\mathcal P(S)|=2^5=32$$",
                "Even-cardinality subsets:",
                r"$$\binom{5}{0}+\binom{5}{2}+\binom{5}{4}=1+10+5=16$$",
                "The claim asserts $15$. Since $16\\ne15$, the statement is False.",
            ],
            [
                "Test the proposed distributive identity on the given singletons.",
                "Left side:",
                r"$$A\cup(B\cap C)=\{1\}\cup\emptyset=\{1\}$$",
                "Right side:",
                r"$$(A\cup B)\cap C=\{1,2\}\cap\{3\}=\emptyset$$",
                "The two sides differ, so the equality fails. So the statement is False.",
            ],
            [
                "Disjunction does not absorb a trailing conjunct the way the claim suggests.",
                "Counter-row $(p,q,r)=(T,F,F)$:",
                r"$$p\vee(q\wedge r)=T\vee F=T$$",
                r"$$(p\vee q)\wedge r=(T\vee F)\wedge F=F$$",
                "The formulas disagree, so they are not equivalent. So the statement is False.",
            ],
        ],
    )

    # ---- 1.116 ----
    apply(
        by["MATH 1.116"],
        "Five independent checks: a zero additive identity witness, membership versus elementhood "
        "in a root set, an impossible two-set survey, counting falsifying rows of an implication, "
        "and distributing a universal quantifier over disjunction.",
        [
            [
                "The integer $x=0$ satisfies $x+y=y$ for every integer $y$.",
                "Check:",
                r"$$0+y=y$$",
                "for each $y\\in\\mathbb{Z}$. So such an $x$ exists, and the statement is True.",
            ],
            [
                "The set-builder $A=\\{n\\in\\mathbb{Z}:n^{2}=16\\}$ has members $\\pm4$, so $|A|=2$ is correct, but $\\{4\\}$ is not an element of $A$.",
                "Roster:",
                r"$$A=\{-4,4\}$$",
                "Membership of the number $4$ holds, yet",
                r"$$\{4\}\notin A$$",
                "because $A$'s elements are integers, not singletons. The conjunction fails. So the statement is False.",
            ],
            [
                "Inclusion-exclusion forbids an overlap smaller than $|A|+|B|-100$ in a $100$-person survey.",
                "Lower bound:",
                r"$$|A\cap B|\ge|A|+|B|-100=70+50-100=20$$",
                "An overlap of only $10$ is impossible. So the statement is False.",
            ],
            [
                "The implication $p\\rightarrow(q\\vee r)$ fails only when $p$ is true and both $q,r$ are false.",
                "That single bad row is $(p,q,r)=(T,F,F)$.",
                "Among eight assignments, exactly one falsifies the formula. So the statement is True.",
            ],
            [
                "A universal quantifier does not distribute over disjunction.",
                "Countermodel on $\\{1,2\\}$: let $P$ hold only at $1$ and $Q$ only at $2$.",
                "Then $\\forall x\\,(P(x)\\vee Q(x))$ is true, but neither $\\forall x\\,P(x)$ nor $\\forall x\\,Q(x)$ holds.",
                "So the claimed equivalence fails. So the statement is False.",
            ],
        ],
    )

    # ---- 1.117 ----
    apply(
        by["MATH 1.117"],
        "Five independent checks: subsets excluding empty and full, complement of a difference, "
        "negation of an implication, distributing an existential over disjunction, and counting "
        "nested subset pairs.",
        [
            [
                "A four-element set has $2^{4}=16$ subsets; remove $\\emptyset$ and the full set.",
                r"$$2^4-2=16-2=14$$",
                "Fourteen subsets remain, so the statement is True.",
            ],
            [
                "An element fails to lie in $A\\setminus B$ when it misses $A$ or sits in $B$.",
                "Unpack:",
                r"$$x\notin A\setminus B\Longleftrightarrow\neg(x\in A\wedge x\notin B)$$",
                r"$$\Longleftrightarrow x\notin A\ \vee\ x\in B$$",
                r"$$\Longleftrightarrow x\in A^c\cup B$$",
                "So $(A\\setminus B)^{c}=A^{c}\\cup B$. So the statement is True.",
            ],
            [
                "The negation of $p\\rightarrow q$ is $p\\wedge\\neg q$, not $\\neg p\\wedge q$.",
                "Since $p\\rightarrow q\\equiv\\neg p\\vee q$,",
                r"$$\neg(p\rightarrow q)\equiv p\wedge\neg q$$",
                "The claim writes $\\neg p\\wedge q$ instead. So the statement is False.",
            ],
            [
                "An existential witness for a disjunction is a witness for at least one disjunct, and conversely.",
                "If $\\exists x\\,(P(x)\\vee Q(x))$, some $a$ satisfies $P(a)$ or $Q(a)$, hence "
                "$(\\exists x\\,P(x))\\vee(\\exists x\\,Q(x))$.",
                "The reverse direction is the same argument run backwards.",
                "So the equivalence holds. So the statement is True.",
            ],
            [
                "For each of the four elements, decide among \"in neither\", \"in $B$ only\", or \"in both $A$ and $B$\".",
                "Three independent choices per element give",
                r"$$3^4=81$$",
                "ordered pairs $(A,B)$ with $A\\subseteq B\\subseteq G$. So the statement is True.",
            ],
        ],
    )

    # ---- 1.118 ----
    apply(
        by["MATH 1.118"],
        "Five independent checks: complement of symmetric difference, contrapositive equivalence, "
        "existential transfer along a universal implication, membership in a power set, "
        "and exclusive-or counting in a two-set survey.",
        [
            [
                "Symmetric difference is \"in exactly one of $A,B$\"; its complement is \"in both or in neither\".",
                "So",
                r"$$(A\triangle B)^c=(A\cap B)\cup(A^c\cap B^c)$$",
                "which is exactly the claimed description. So the statement is True.",
            ],
            [
                "The contrapositive is obtained by negating and swapping antecedent and consequent.",
                "On every truth row,",
                r"$$p\rightarrow q\equiv\neg q\rightarrow\neg p$$",
                "so the two formulas always agree. So the statement is True.",
            ],
            [
                "From $\\forall x\\,(M(x)\\rightarrow L(x))$ and $\\exists x\\,M(x)$, pick a medic witness $a$.",
                "Then $M(a)$ forces $L(a)$, so $\\exists x\\,L(x)$.",
                "At least one licensed person exists. So the statement is True.",
            ],
            [
                "Power-set members are subsets of $S$, not bare elements of $S$.",
                "With $S=\\{r,s\\}$,",
                r"$$\{r\}\in\mathcal P(S)$$",
                "is true, but",
                r"$$r\notin\mathcal P(S)$$",
                "because $r$ is not a subset of $S$. The conjunction fails. So the statement is False.",
            ],
            [
                "Animals that like exactly one of dogs or cats form the symmetric difference.",
                r"$$|D\triangle C|=|D|+|C|-2|D\cap C|$$",
                r"$$=28+24-2\cdot11=30$$",
                "The claim asserts $35$. Since $30\\ne35$, the statement is False.",
            ],
        ],
    )

    # ---- Shared-stem tasks 1.119–1.128 ----
    rewrite_shared(by)


def rewrite_shared(by: dict) -> None:
    # 1.119 teams
    apply(
        by["MATH 1.119"],
        "Universe of seven finalists with morning team $M=\\{Ada,Cleo,Eli,Finn\\}$, "
        "evening team $E=\\{Ben,Cleo,Dara,Finn\\}$, and prize shortlist $P=\\{Ada,Dara,Finn,Gia\\}$.\n\n"
        "Recovered operations used below:\n\n"
        r"$$M\cap E=\{Cleo,Finn\}$$"
        "\n\n"
        r"$$M\cup E=\{Ada,Ben,Cleo,Dara,Eli,Finn\}$$"
        "\n\n"
        r"$$|M\cup E|=6$$"
        "\n\n"
        r"$$P\setminus M=\{Dara,Gia\}$$"
        "\n\n"
        r"$$|M\triangle E|=4$$",
        [
            [
                "Intersection keeps names that sit on both morning and evening rosters.",
                "Shared names are Cleo and Finn:",
                r"$$M\cap E=\{Cleo,Finn\}$$",
                "That matches the claim, so the statement is True.",
            ],
            [
                "The overview recovered $|M\\cup E|=6$ by listing the six distinct names "
                "Ada, Ben, Cleo, Dara, Eli, Finn.",
                "The claim asserts $7$. Since $6\\ne7$, the statement is False.",
            ],
            [
                "Difference $P\\setminus M$ keeps shortlist names that miss the morning team.",
                "From $P$, Ada and Finn also sit in $M$, leaving",
                r"$$P\setminus M=\{Dara,Gia\}$$",
                "That matches the claim, so the statement is True.",
            ],
            [
                "Membership $\\{Ada,Finn\\}\\in P$ would require the pair itself to be listed as an element of $P$.",
                "But $P$'s elements are people, not two-person sets:",
                r"$$\{Ada,Finn\}\notin P$$",
                "while both names separately satisfy $Ada\\in P$ and $Finn\\in P$. So the statement is False.",
            ],
            [
                "Symmetric difference size is $|M|+|E|-2|M\\cap E|$.",
                "Substitute the recovered figures:",
                r"$$|M\triangle E|=4+4-2\cdot2=4$$",
                "The claim asserts $3$. Since $4\\ne3$, the statement is False.",
            ],
        ],
    )

    # 1.120 training center
    apply(
        by["MATH 1.120"],
        "Three courses on $180$ participants with $|A|=105$, $|B|=92$, $|C|=80$, "
        "pairwise overlaps $48$, $41$, $36$, and triple overlap $20$.\n\n"
        "Inclusion-exclusion recovers the union:\n\n"
        r"$$|A\cup B\cup C|=105+92+80-48-41-36+20=172$$"
        "\n\n"
        "Hence none-of-three is $180-172=8$. "
        "Only-analytics is $105-48-41+20=36$. "
        "Exactly-two total is $(48-20)+(41-20)+(36-20)=65$. "
        "At-least-two is exactly-two plus the triple, $65+20=85$. "
        "Only-compliance is $80-41-36+20=23$.",
        [
            [
                "Subtract the recovered union from the center total.",
                r"$$180-172=8$$",
                "Exactly $8$ participants take none of the three courses, so the statement is True.",
            ],
            [
                "Only-analytics removes the pairwise overlaps and restores the triple once.",
                r"$$|A\setminus(B\cup C)|=|A|-|A\cap B|-|A\cap C|+|A\cap B\cap C|$$",
                r"$$=105-48-41+20=36$$",
                "The claim asserts $56$. Since $36\\ne56$, the statement is False.",
            ],
            [
                "Sum the three pairwise-only regions.",
                r"$$(48-20)+(41-20)+(36-20)=28+21+16=65$$",
                "Exactly $65$ take exactly two courses, so the statement is True.",
            ],
            [
                "At least two courses means exactly two plus the triple overlap.",
                r"$$65+20=85$$",
                "The claim asserts $65$, which counts only the exactly-two region. So the statement is False.",
            ],
            [
                "Only-compliance is the compliance total minus its pairwise overlaps, plus the triple.",
                r"$$80-41-36+20=23$$",
                "Exactly $23$ take only compliance, so the statement is True.",
            ],
        ],
    )

    # 1.121 door
    apply(
        by["MATH 1.121"],
        "Door opens on $D=(p\\wedge q)\\vee(p\\wedge r)\\equiv p\\wedge(q\\vee r)$. "
        "Alarm on $A=p\\wedge\\neg q\\wedge\\neg r$. All eight truth rows are available.\n\n"
        "Shipping-like open rows: $(T,T,T)$, $(T,T,F)$, $(T,F,T)$ — three assignments. "
        "Alarm requires $p$ true and both $q,r$ false, disjoint from every open row.",
        [
            [
                "A valid badge with current training means $(p,q)=(T,T)$, regardless of $r$.",
                "Then $p\\wedge(q\\vee r)$ is true, so the door opens. So the statement is True.",
            ],
            [
                "An invalid badge means $p=F$. Factoring gives $D\\equiv p\\wedge(q\\vee r)$, which is false whenever $p$ is false.",
                "A supervisor ($r=T$) cannot open the door without a valid badge. So the statement is False.",
            ],
            [
                "Factor $p$ from the original disjunction:",
                r"$$(p\wedge q)\vee(p\wedge r)\equiv p\wedge(q\vee r)$$",
                "That is the claimed equivalent form. So the statement is True.",
            ],
            [
                "Count open rows: $p$ must be true and at least one of $q,r$ true — three rows, not four.",
                "The claim asserts four opening assignments. Since there are only three, the statement is False.",
            ],
            [
                "Alarm needs $p\\wedge\\neg q\\wedge\\neg r$, while open needs $p\\wedge(q\\vee r)$. Those conjuncts on $q,r$ contradict.",
                "No assignment is both alarming and open. So the statement is False.",
            ],
        ],
    )

    # 1.122 parcels
    apply(
        by["MATH 1.122"],
        "Domain $D=\\{a,b,c,d\\}$ with $P=\\{a,c\\}$, $S=\\{a,b,c\\}$, $L=\\{c,d\\}$.\n\n"
        "Every priority parcel is scanned; $c$ is both priority and late; "
        "$b$ is scanned and not late; $d$ is late and not priority; "
        "parcels neither scanned nor late: only — wait, unscanned are $\\{d\\}$, "
        "and $d$ is late, so none are neither scanned nor late? "
        "Unscanned: $D\\setminus S=\\{d\\}$; late includes $d$; so zero parcels are neither scanned nor late.\n\n"
        "Actually claim D says exactly one is neither scanned nor late — false because count is $0$.",
        [
            [
                "Check each priority parcel against the scanned list.",
                "Both $a$ and $c$ lie in $S$, so $\\forall x\\,(P(x)\\rightarrow S(x))$ holds. So the statement is True.",
            ],
            [
                "The parcel $c$ is priority and late simultaneously.",
                "Hence $\\exists x\\,(P(x)\\wedge L(x))$ holds. So the statement is True.",
            ],
            [
                "The claim would say no scanned parcel is late, but $c\\in S\\cap L$.",
                "So $\\forall x\\,(S(x)\\rightarrow\\neg L(x))$ fails. So the statement is False.",
            ],
            [
                "Neither scanned nor late means outside $S\\cup L$.",
                r"$$S\cup L=\{a,b,c,d\}=D$$",
                "The complement is empty, so the count is $0$, not $1$. So the statement is False.",
            ],
            [
                "Parcel $d$ is late and not priority.",
                "Hence $\\exists x\\,(L(x)\\wedge\\neg P(x))$ holds. So the statement is True.",
            ],
        ],
    )
    # Fix overview - remove my thinking aloud
    by["MATH 1.122"]["solution_overview"] = (
        "Domain $D=\\{a,b,c,d\\}$ with priority $P=\\{a,c\\}$, scanned $S=\\{a,b,c\\}$, "
        "and late $L=\\{c,d\\}$.\n\n"
        "Both priority parcels sit in $S$. The overlap $P\\cap L=\\{c\\}$ is nonempty. "
        "The overlap $S\\cap L=\\{c\\}$ shows a scanned late parcel. "
        "Also $S\\cup L=D$, so no parcel is neither scanned nor late. "
        "Finally $d\\in L\\setminus P$."
    )

    # 1.123 library
    apply(
        by["MATH 1.123"],
        "Modules $C=\\{a,b,d,f\\}$, $E=\\{b,c,e,f,g\\}$, $A=\\{a,c,f,h\\}$ inside "
        "$U=\\{a,b,c,d,e,f,g,h\\}$.\n\n"
        r"$$C\cap E=\{b,f\}$$"
        "\n\n"
        r"$$E\cup A=\{a,b,c,e,f,g,h\}$$"
        "\n\n"
        r"$$|E\cup A|=7$$"
        "\n\n"
        r"$$C\setminus A=\{b,d\}$$"
        "\n\n"
        r"$$C\cap A=\{a,f\}$$"
        "\n\n"
        r"$$|C\triangle E|=5$$",
        [
            [
                "Shared core and elective labels are $b$ and $f$.",
                r"$$C\cap E=\{b,f\}$$",
                "That matches the claim, so the statement is True.",
            ],
            [
                "The overview recovered $|E\\cup A|=7$ (everything in $U$ except $d$).",
                "The claim asserts $8$. Since $7\\ne8$, the statement is False.",
            ],
            [
                "Difference $C\\setminus A$ keeps core labels missing from $A$.",
                "From $C$, only $a$ and $f$ also sit in $A$, so",
                r"$$C\setminus A=\{b,d\}$$",
                "The claim lists $\\{b,d,f\\}$ and wrongly keeps $f$. So the statement is False.",
            ],
            [
                "Both $a$ and $f$ sit in $C\\cap A=\\{a,f\\}$, so the two-element set is a subset.",
                r"$$\{a,f\}\subseteq C\cap A$$",
                "So the statement is True.",
            ],
            [
                "Symmetric difference size:",
                r"$$|C\triangle E|=|C|+|E|-2|C\cap E|=4+5-2\cdot2=5$$",
                "The claim asserts $4$. Since $5\\ne4$, the statement is False.",
            ],
        ],
    )

    # 1.124 services
    apply(
        by["MATH 1.124"],
        "Services on $240$ customers: $|M|=138$, $|I|=124$, $|S|=96$, pairwise $68$, $52$, $46$, "
        "triple $28$.\n\n"
        r"$$|M\cup I\cup S|=138+124+96-68-52-46+28=220$$"
        "\n\n"
        "None: $240-220=20$. "
        "Exactly one: only-$M$ $138-68-52+28=46$, only-$I$ $124-68-46+28=38$, "
        "only-$S$ $96-52-46+28=26$, total $46+38+26=110$. "
        "Mobile$\\cap$internet only: $68-28=40$. "
        "At least two: $(68-28)+(52-28)+(46-28)+28=40+24+18+28=110$. "
        "Only streaming: $26$.",
        [
            [
                "Subtract the recovered union from the survey total.",
                r"$$240-220=20$$",
                "Exactly $20$ customers use none of the services, so the statement is True.",
            ],
            [
                "Sum the three only-one regions recovered in the overview:",
                r"$$46+38+26=110$$",
                "Exactly $110$ use exactly one service, so the statement is True.",
            ],
            [
                "Mobile and internet only means the pairwise overlap minus the triple.",
                r"$$68-28=40$$",
                "The claim asserts $68$, which forgets to remove the triple. So the statement is False.",
            ],
            [
                "At least two is exactly-two plus the triple.",
                "Exactly-two: $(68-28)+(52-28)+(46-28)=82$, plus triple $28$ gives $110$.",
                "The claim asserts $82$, omitting the all-three customers. So the statement is False.",
            ],
            [
                "Only streaming is $96-52-46+28=26$, not $34$.",
                r"$$96-52-46+28=26$$",
                "Since $26\\ne34$, the statement is False.",
            ],
        ],
    )

    # 1.125 warehouse
    apply(
        by["MATH 1.125"],
        "Ship on $S=p\\wedge(q\\vee r)$, hold on $H=p\\wedge\\neg q\\wedge\\neg r$, "
        "reject on $\\neg p$. These three regimes partition the eight rows.\n\n"
        "Shipping rows: $(T,T,T)$, $(T,T,F)$, $(T,F,T)$ — three assignments. "
        "Holding is the single row $(T,F,F)$. Rejection is every row with $p=F$.",
        [
            [
                "At $(p,q,r)=(T,F,T)$ one has $p$ true and $r$ true, so $q\\vee r$ is true.",
                "Hence $p\\wedge(q\\vee r)$ holds and the order ships. So the statement is True.",
            ],
            [
                "Shipping needs $q\\vee r$, while holding needs $\\neg q\\wedge\\neg r$. Those cannot hold together.",
                "So shipping and holding are mutually exclusive. So the statement is True.",
            ],
            [
                "At $(F,T,T)$ the inventory bit $p$ is false, so $S=p\\wedge(q\\vee r)$ is false.",
                "The order does not ship (it is rejected). So the statement is False.",
            ],
            [
                "Only three assignments make $S$ true, not four.",
                "The claim overcounts the shipping rows. So the statement is False.",
            ],
            [
                "A held order has $p$ true, while rejection requires $\\neg p$.",
                "Those contradict, so a held order never satisfies the rejection rule. So the statement is False.",
            ],
        ],
    )

    # 1.126 employees
    apply(
        by["MATH 1.126"],
        "Employees $\\{Ava,Bo,Cy,Di\\}$ with $C=\\{Ava,Bo,Di\\}$, $R=\\{Bo,Cy\\}$, $L=\\{Ava,Cy\\}$.\n\n"
        "Cy is a lead who is not certified. Bo is certified and remote. "
        "Not every remote employee is a lead (Bo). "
        "Neither certified nor remote: empty? Uncertified $=\\{Cy\\}$, and Cy is remote — "
        "so zero employees are neither certified nor remote. "
        "Ava is a lead who is not remote.",
        [
            [
                "Cy is a team lead ($Cy\\in L$) but $Cy\\notin C$.",
                "So not every team lead is certified. So the statement is False.",
            ],
            [
                "Bo is certified and remote.",
                "Hence some certified employee is remote. So the statement is True.",
            ],
            [
                "Bo is remote but not a team lead.",
                "So not every remote employee is a team lead. So the statement is False.",
            ],
            [
                "Uncertified employees are $\\{Cy\\}$, and Cy is remote, so",
                r"$$(C\cup R)^c=\emptyset$$",
                "The count of neither certified nor remote is $0$, not $1$. So the statement is False.",
            ],
            [
                "Ava is a team lead outside the remote set.",
                "Hence some team lead is not remote. So the statement is True.",
            ],
        ],
    )
    by["MATH 1.126"]["solution_overview"] = (
        "Employees $\\{Ava,Bo,Cy,Di\\}$ with certified $C=\\{Ava,Bo,Di\\}$, "
        "remote $R=\\{Bo,Cy\\}$, and leads $L=\\{Ava,Cy\\}$.\n\n"
        "Cy is a lead who is not certified. Bo is certified and remote but not a lead. "
        "Also $C\\cup R=\\{Ava,Bo,Cy,Di\\}$, so nobody is neither certified nor remote. "
        "Ava is a non-remote lead."
    )

    # 1.127 transit
    apply(
        by["MATH 1.127"],
        "Routes $U=\\{1,2,3,4,5,6,7,8\\}$ with $X=\\{1,3,4,7\\}$, $N=\\{2,3,5,7,8\\}$, "
        "$A=\\{1,2,3,6,8\\}$.\n\n"
        r"$$X\cap N=\{3,7\}$$"
        "\n\n"
        r"$$N^c=\{1,4,6\}$$"
        "\n\n"
        r"$$X\cup A=\{1,2,3,4,6,7,8\}\ne U$$"
        "\n\n"
        r"$$|A\setminus N|=2$$"
        "\n\n"
        "Also $\\{3,7\\}\\in\\mathcal{P}(X)$ because $\\{3,7\\}\\subseteq X$.",
        [
            [
                "Shared express and night routes are $3$ and $7$.",
                r"$$X\cap N=\{3,7\}$$",
                "That matches the claim, so the statement is True.",
            ],
            [
                "Complement of $N$ in $U$ keeps routes missing from the night list.",
                r"$$N^c=U\setminus N=\{1,4,6\}$$",
                "That matches the claim, so the statement is True.",
            ],
            [
                "The overview recovered $X\\cup A=\\{1,2,3,4,6,7,8\\}$, which misses $5\\in U$.",
                "So $X\\cup A\\ne U$. So the statement is False.",
            ],
            [
                "Accessible routes missing from night:",
                r"$$A\setminus N=\{1,6\}$$",
                r"$$|A\setminus N|=2$$",
                "The claim asserts $3$. Since $2\\ne3$, the statement is False.",
            ],
            [
                "The set $\\{3,7\\}$ is a subset of $X$, hence a member of $\\mathcal{P}(X)$.",
                "The claim says that membership is false, which is wrong. So the statement is False.",
            ],
        ],
    )

    # 1.128 festival
    apply(
        by["MATH 1.128"],
        "Programs on $300$ visitors: $|J|=170$, $|T|=145$, $|F|=130$, pairwise $80$, $72$, $61$, "
        "triple $35$.\n\n"
        r"$$|J\cup T\cup F|=170+145+130-80-72-61+35=267$$"
        "\n\n"
        "None: $300-267=33$. "
        "Jazz$\\cap$theater only: $80-35=45$. "
        "Exactly two: $(80-35)+(72-35)+(61-35)=45+37+26=108$. "
        "Only jazz: $170-80-72+35=53$.",
        [
            [
                "Inclusion-exclusion recovers the three-program union as $267$.",
                r"$$170+145+130-80-72-61+35=267$$",
                "So the statement is True.",
            ],
            [
                "Subtract the union from the survey total.",
                r"$$300-267=33$$",
                "Exactly $33$ chose no program, so the statement is True.",
            ],
            [
                "Jazz and theater only is the pairwise overlap minus the triple.",
                r"$$80-35=45$$",
                "The claim asserts $50$. Since $45\\ne50$, the statement is False.",
            ],
            [
                "Exactly-two total:",
                r"$$(80-35)+(72-35)+(61-35)=108$$",
                "The claim asserts $100$. Since $108\\ne100$, the statement is False.",
            ],
            [
                "Only jazz:",
                r"$$170-80-72+35=53$$",
                "The claim asserts $72$. Since $53\\ne72$, the statement is False.",
            ],
        ],
    )


def main() -> None:
    data = json.loads(PATH.read_text())
    tasks = data["tasks"]
    rewrite_all(tasks)
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    lens = [len(e) for t in tasks for e in t["tactical_explanations"]]
    sl = sorted(lens)
    ov = sorted(len(t["solution_overview"]) for t in tasks)
    print(
        f"ch1 exam letters median {sl[len(sl)//2]} min {sl[0]} "
        f"ov median {ov[len(ov)//2]}"
    )


if __name__ == "__main__":
    main()
