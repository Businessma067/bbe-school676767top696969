# Chapter 1 — Logic and set theory

Modern economic arguments are mathematical arguments. They need clean logic, and they constantly talk about collections of alternatives: budget sets, feasible choices, groups of workers, and so on. This chapter builds those tools from the start.

You will learn what a set is, how to combine sets, how to write “if … then …” correctly, and how to check whether a conclusion really follows. The ideas match the exam topics in §§1.1–1.4. Nothing here assumes you already know formal logic.

## Learning objectives

- Specify a set by listing members or by stating a defining property.
- Use membership $\in$ and inclusion $\subseteq$, and tell them apart from each other.
- Form unions, intersections, differences and complements, and read them on a Venn diagram.
- Count finite overlaps with the inclusion–exclusion formula.
- Recognise propositions and open propositions, and use $\Rightarrow$ and $\Leftrightarrow$ carefully.
- Tell necessary conditions from sufficient ones, and use the contrapositive.
- Negate statements with $\forall$ and $\exists$, and respect quantifier order.
- Follow direct, contrapositive and contradiction proofs, and run a correct induction argument.

---

## 1.1 Sets: Elements, Subsets & Power Sets

### What a set is

In ordinary language we group similar objects all the time: the academic staff of a university, the plants in a garden, all Scottish firms with more than 300 employees, or all German taxpayers who earned between €50 000 and €100 000 in a given year. In mathematics such a collection is called a **set**, and the objects that belong to it are its **elements** (or members).

The simplest way to write a set is to list its members between braces, in any order:

$$
S = \{a,b,c\}.
$$

Read the braces as “the set consisting of”. Two sets are **equal** when they contain exactly the same elements. Order does not matter, and repeating a name does not add a new member:

$$
\{1,2,3\} = \{3,2,1\}, \qquad \{1,1,2,3\} = \{1,2,3\}.
$$

The set with no elements at all is written $\emptyset$ and is called the **empty set**. There is only one empty set: a set is completely determined by its members, so there cannot be two different collections that both contain nothing.

### Specifying a property

Not every set can be listed. Many economic sets are infinite. A standard example is a **budget set**. Suppose two goods have quantities $x$ and $y$, prices $p$ and $q$, and the consumer has money $m$. If the consumer may underspend and quantities must be nonnegative, the budget set is

$$
B = \{(x,y) : px + qy \le m,\ x \ge 0,\ y \ge 0\}.
$$

[[FIGURE:budget-set|The budget set B is the filled triangle of nonnegative bundles that cost at most m.]]

The general pattern is

$$
S = \{\text{typical member} : \text{defining properties}\}.
$$

Before the colon you name the typical object. After the colon you list the conditions that object must satisfy. The colon is read “such that” (some texts use $|$ instead). Finite sets can be written this way too, for example “all people currently alive”.

**Example 1.** Let

$$
A = \{x \in \mathbb{Z} : x^2 = 9\}.
$$

Solve $x^2 = 9$ first: $x = 3$ or $x = -3$. Both are integers, so $A = \{-3,3\}$. If the universe were the natural numbers instead of the integers, $-3$ would be dropped and only $\{3\}$ would remain. Always watch which universe the set-builder uses.

### Membership

Write

$$
x \in S
$$

to say that $x$ is an element of $S$, and $x \notin S$ to say that it is not. For instance $d \notin \{a,b,c\}$.

Think of a student who must buy a laptop and a smartphone, each available as “cheap” or “expensive”, but who cannot afford the expensive–expensive pair. The affordable set $B$ has three combinations. The student’s choice $s$ must satisfy $s \in B$. The unaffordable combination $t$ satisfies $t \notin B$.

### Subsets

Let $A$ and $B$ be sets. We say $A$ is a **subset** of $B$, and write $A \subseteq B$, when every member of $A$ is also a member of $B$. In particular

$$
A \subseteq A, \qquad \emptyset \subseteq A
$$

always hold. Two sets are equal precisely when each is a subset of the other:

$$
A = B \quad\text{if and only if}\quad A \subseteq B\ \text{and}\ B \subseteq A.
$$

A **proper** subset of $B$ is a subset that is not equal to $B$. A set is never a proper subset of itself.

**Example 2.** Suppose the student above decides never to buy an expensive smartphone. The remaining options form a set $A$ with two combinations. Then $A \subseteq B$: every remaining option was already affordable, but $B$ is larger.

### Elements versus subsets

Membership and inclusion answer different questions.

| Claim | Question it asks |
| --- | --- |
| $x \in A$ | Is $x$ one of the objects listed in $A$? |
| $S \subseteq A$ | Is every object inside $S$ also listed in $A$? |

**Example 3.** Let $A = \{a,b,c\}$. Then $a \in A$ is true, but $\{a\} \in A$ is false: the elements of $A$ are the letters $a$, $b$, $c$, not the singleton set $\{a\}$. Meanwhile $\{a\} \subseteq A$ is true, because its only member $a$ sits in $A$. The empty set satisfies $\emptyset \subseteq A$, but $\emptyset \in A$ is false unless $\emptyset$ is written as an element.

Confusing $\in$ with $\subseteq$ is one of the most common exam traps in this chapter.

### The power set

The **power set** $\mathcal{P}(A)$ is the set of all subsets of $A$. If $A$ has $n$ distinct elements, each element may be kept or left out of a subset, independently, so

$$
|\mathcal{P}(A)| = 2^n.
$$

**Example 4.** For $A = \{a,b,c\}$,

$$
\mathcal{P}(A) = \bigl\{\emptyset,\ \{a\},\ \{b\},\ \{c\},\ \{a,b\},\ \{a,c\},\ \{b,c\},\ A\bigr\}.
$$

That is $2^3 = 8$ subsets: one empty set, three singletons, three pairs, and $A$ itself.

### Cardinality of a finite set

If $A$ is finite, write $n(A)$ (or $|A|$) for the number of distinct elements in $A$. Two finite sets have the same cardinality when there is a one-to-one correspondence between them. Infinite sets can also share a cardinality in that sense; the deep theory of that idea goes back to Cantor, but the exam only needs the finite counting rules of the next section.

---

## 1.2 Set Operations, Complements & Counting

### Union, intersection and difference

Three basic operations combine two sets $A$ and $B$:

| Notation | Name | Meaning |
| --- | --- | --- |
| $A \cup B$ | union | elements in $A$, or in $B$, or in both |
| $A \cap B$ | intersection | elements in both $A$ and $B$ |
| $A \setminus B$ | difference | elements in $A$ but not in $B$ |

In symbols:

$$
\begin{align*}
A \cup B &= \{x : x \in A\ \text{or}\ x \in B\},\\
A \cap B &= \{x : x \in A\ \text{and}\ x \in B\},\\
A \setminus B &= \{x : x \in A\ \text{and}\ x \notin B\}.
\end{align*}
$$

In mathematics the word “or” is **inclusive**: “$x \in A$ or $x \in B$” allows $x$ to sit in both.

**Example 1.** Let $A = \{1,2,3,4,5\}$ and $B = \{3,6\}$. Then

$$
A \cup B = \{1,2,3,4,5,6\}, \quad
A \cap B = \{3\}, \quad
A \setminus B = \{1,2,4,5\}, \quad
B \setminus A = \{6\}.
$$

[[FIGURE:venn-two-set-ops|Elementary set operations and inclusion (compare Sydsaeter Fig. 1.1.1).]]

An economic reading of the same operations: among workers in California in a given year, let $A$ be those who earned at least \$35 000 and let $B$ be those with net worth at least \$200 000. Then $A \cup B$ is the “or” group, $A \cap B$ is the “and” group, and $A \setminus B$ is high earners whose net worth stays below \$200 000.

Two sets are **disjoint** when they share nothing:

$$
A \cap B = \emptyset.
$$

### Universal set and complement

When you work with several sets at once, it often helps to view them all as subsets of one fixed **universal set** $U$. If $A \subseteq U$, the **complement** of $A$ in $U$ is

$$
A^c = U \setminus A,
$$

the set of elements of $U$ that are not in $A$. Complements make sense only relative to a stated universe. Change $U$, and $A^c$ changes with it.

[[FIGURE:venn-complement|Complement of A inside the universal set U.]]

**Example 2.** Let $U$ be all students at a university. Let $F$ be the female students, $M$ the mathematics students, $C$ the choir, $B$ the biology students, and $T$ the tennis players. Then:

- $U \setminus M$ is everyone not studying mathematics;
- $M \cup C$ is everyone who studies mathematics, sings in the choir, or both;
- $F \cap T$ is the female tennis players;
- $M \setminus (B \cap T)$ is the mathematics students who are not both biologists and tennis players.

The last set equals $(M \setminus B) \cup (M \setminus T)$. That is a special case of a general identity you can check with a Venn diagram:

$$
M \setminus (B \cap T) = (M \setminus B) \cup (M \setminus T).
$$

### Venn diagrams

Draw each set as a region in the plane. Overlaps show shared members. For two sets the usual picture has four regions: only $A$, only $B$, both, and neither. For three sets $A$, $B$, $C$ a correct diagram must leave room for all eight combinations:

1. $(A \cap B) \setminus C$
2. $(B \cap C) \setminus A$
3. $(C \cap A) \setminus B$
4. $A \setminus (B \cup C)$
5. $B \setminus (C \cup A)$
6. $C \setminus (A \cup B)$
7. $A \cap B \cap C$
8. $(A \cup B \cup C)^c$

[[FIGURE:venn-three-regions|Venn diagram for three sets with all eight regions labelled (Sydsaeter Fig. 1.1.3).]]

With four or more sets the picture becomes unmanageable ($2^n$ regions for $n$ sets), so use algebra instead.

### Identities that always hold

From the definitions, or by shading Venn regions, you get identities that are true for every choice of sets. Two important distributive laws are

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C),
$$

$$
A \cup (B \cap C) = (A \cup B) \cap (A \cup C).
$$

[[FIGURE:venn-distributive|The shaded region is A ∩ (B ∪ C), which equals (A ∩ B) ∪ (A ∩ C) (Sydsaeter Fig. 1.1.2).]]

Union and intersection are associative, so parentheses may be dropped in $A \cup B \cup C$ and $A \cap B \cap C$. They cannot be dropped freely in mixed expressions: $A \cap (B \cup C)$ is generally not equal to $(A \cap B) \cup C$.

**De Morgan’s laws** (for complements relative to $U$) are

$$
(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c.
$$

[[FIGURE:venn-de-morgan-union|De Morgan: the complement of a union is the intersection of the complements.]]

[[FIGURE:venn-de-morgan-inter|De Morgan: the complement of an intersection is the union of the complements.]]

In words: the complement of a union is the intersection of the complements, and the complement of an intersection is the union of the complements. The same pattern extends to any finite family of sets.

**Example 3.** Let $A = \{1,2,3\}$, $B = \{2,3\}$, $C = \{4,5\}$. Then

$$
A \cap (B \cup C) = \{1,2,3\} \cap \{2,3,4,5\} = \{2,3\},
$$

while

$$
(A \cap B) \cup C = \{2,3\} \cup \{4,5\} = \{2,3,4,5\}.
$$

The two results differ, which shows why the parentheses in $A \cap (B \cup C)$ matter.

### Counting with overlaps

For finite sets,

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B),
$$

because the intersection was counted twice when you added $n(A)$ and $n(B)$. Also

$$
n(A \setminus B) = n(A) - n(A \cap B).
$$

**Example 4.** A survey finds that 50 people like coffee and 40 like tea, including 35 who like both, and that 10 like neither. How many people responded?

The “coffee or tea” group has size

$$
n(C \cup T) = 50 + 40 - 35 = 55.
$$

Add the 10 who like neither:

$$
n(U) = 55 + 10 = 65.
$$

[[FIGURE:venn-survey-count|Coffee-and-tea survey: overlap 35, neither 10, so |U| = 65.]]

**Example 5.** Among 1000 newspaper readers, 420 read $A$, 316 read $B$, 160 read $C$, with pairwise overlaps $n(A \cap B) = 116$, $n(A \cap C) = 100$, $n(B \cap C) = 30$, and triple overlap $n(A \cap B \cap C) = 16$.

To find how many read $A$ but not $B$:

$$
n(A \setminus B) = n(A) - n(A \cap B) = 420 - 116 = 304.
$$

To find how many read $C$ but neither $A$ nor $B$, start from those in $C$ and remove everyone who also sits in $A$ or $B$. Using the three-set inclusion–exclusion formula for the full union is the systematic route when several overlaps are given at once.

---

## 1.3 Propositional Logic & Implications

This section is about reading everyday rules the way an exam reads them: as precise arrows, ands, and ors. Banks, universities, shops and contracts all speak in “if / only if / if and only if”. The mathematics is the same in each case. The hard part is hearing which arrow was actually promised.

### Why careful logic matters

Routine algebra without logic can produce nonsense. Consider

$$
x + 2 = \sqrt{4 - x}.
$$

Squaring, expanding and cancelling can spit out $x = -5$. Substituting back fails: the left side is $-3$, while $\sqrt{9} = 3$. Some algebraic steps were one-way only. A value that appears at the end of a chain of implications need not solve the original equation. Always check candidates in the original statement. The rest of this section explains the logical shape of that mistake, and of the worded rules you meet in economics.

### A reminder about square roots

For $a \ge 0$, the symbol $\sqrt{a}$ means the unique **nonnegative** number $x$ with $x^2 = a$. So $\sqrt{9} = 3$, not $-3$. If both signs are wanted, write $\pm\sqrt{a}$. If $a < 0$, there is no real square root.

### Propositions and open propositions

A **proposition** is an assertion that is either true or false.

- True: “All individuals who breathe are alive.”
- False: “All individuals who breathe are healthy.”
- Not yet a proposition: “67 is a large number,” until “large” is defined.

An assertion with a free variable, such as $x^2 - 1 = 0$, is an **open proposition**. Plug in different values of $x$ and you get different closed propositions, some true and some false. Until a value is chosen, the open claim itself is not simply true or false. The same idea appears in economics as “profit equals zero when price equals average cost”: it becomes a yes/no statement only after numbers are fixed.

### The truth table of an implication

If whenever $P$ is true, $Q$ must also be true, write

$$
P \Rightarrow Q.
$$

Read it as “$P$ implies $Q$”, “if $P$, then $Q$”, “$Q$ if $P$”, or “$P$ only if $Q$”.

The crucial exam fact is when $P \Rightarrow Q$ is **false**. It fails in exactly one case: $P$ true and $Q$ false. In every other row it holds.

| $P$ | $Q$ | $P \Rightarrow Q$ |
| --- | --- | --- |
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

So an implication with a false “if” part is automatically true, whatever the “then” part does. That is why a dry day never breaks the rule “if it rains, the picnic is cancelled,” even if the picnic is cancelled for another reason.

**Example 1.** Correct implications:

- $x > 2 \Rightarrow x^2 > 4$
- $xy = 0 \Rightarrow (x = 0\ \text{or}\ y = 0)$
- $S$ is a square $\Rightarrow$ $S$ is a rectangle
- She lives in Paris $\Rightarrow$ She lives in France

(Here Paris means Paris, France.)

### Converse, inverse, contrapositive

From one implication $P \Rightarrow Q$ three relatives are named constantly on exams:

| Name | Form | Same truth value as the original? |
| --- | --- | --- |
| Original | $P \Rightarrow Q$ | — |
| **Converse** | $Q \Rightarrow P$ | no |
| **Inverse** | $\neg P \Rightarrow \neg Q$ | no |
| **Contrapositive** | $\neg Q \Rightarrow \neg P$ | **yes, always** |

Only the contrapositive is logically equivalent to the original. The converse and the inverse are equivalent to each other, but not to the original.

**Example 2 (picnic).** Organiser’s rule: “If it rains, the picnic is cancelled.” Write $P$ for rain and $Q$ for cancellation, so $P \Rightarrow Q$.

| Relative | In words | Follows from the rule? |
| --- | --- | --- |
| Converse | If cancelled, then it rained | no |
| Inverse | If no rain, then not cancelled | no |
| Contrapositive | If not cancelled, then no rain | yes |

Test day: no rain, but the picnic is cancelled because of a venue conflict. Then $P$ is false and $Q$ is true.

- Original $P \Rightarrow Q$: true (false antecedent).
- Converse $Q \Rightarrow P$: false (cancelled without rain).
- Inverse $\neg P \Rightarrow \neg Q$: false (no rain, yet cancelled).
- Contrapositive: still true whenever the original is.

So one everyday day separates the original from its converse and inverse.

The **negation** of $P \Rightarrow Q$ is not another implication. It is the single failure row:

$$
\neg(P \Rightarrow Q) \equiv P \land \neg Q.
$$

For the picnic: “it rains **and** the picnic is not cancelled.”

### Equivalence

When both $P \Rightarrow Q$ and $Q \Rightarrow P$ hold, write

$$
P \Leftrightarrow Q
$$

(“$P$ if and only if $Q$”, or “iff”). A biconditional is true precisely when $P$ and $Q$ have the **same** truth value: both true, or both false. One true part is not enough. That is the difference between $\Leftrightarrow$ and $\lor$.

**Example 3.** Correct equivalences:

$$
(x < -2\ \text{or}\ x > 2) \Leftrightarrow x^2 > 4,
$$

$$
xy = 0 \Leftrightarrow (x = 0\ \text{or}\ y = 0),
$$

$$
A \subseteq B \Leftrightarrow B^c \subseteq A^c.
$$

In Example 1, only the product rule is a two-way equivalence. $x = -3$ has $x^2 > 4$ without $x > 2$. A rectangle need not be a square. Millions of people live in France outside Paris.

### Necessary and sufficient conditions

Same arrows, different vocabulary:

| Wording | Meaning |
| --- | --- |
| $P$ is **sufficient** for $Q$ | $P \Rightarrow Q$ |
| $Q$ is **necessary** for $P$ | $P \Rightarrow Q$ (same arrow, other end) |
| $P$ is **necessary and sufficient** for $Q$ | $P \Leftrightarrow Q$ |

“Living in France is necessary for living in Paris” is true. “Living in Paris is necessary for living in France” is false. Living in Paris **is** sufficient for living in France.

**Example 4 (thresholds).** Compare $x > 10$ and $x > 5$.

- $x > 10$ is sufficient for $x > 5$: the stronger inequality forces the weaker one.
- $x > 5$ is necessary for $x > 10$: same arrow, read backwards.
- $x > 10$ is not necessary for $x > 5$: $x = 7$ is a counterexample.
- The two conditions are not equivalent: the open interval $(5,10]$ satisfies the weaker one alone.

**Example 5 (university chain).** Rules:

1. Enrol in Advanced Macro only if Intermediate Macro is passed.
2. Enrol in Intermediate Macro only if Principles is passed.

Maria is enrolled in Advanced. “Only if” means Advanced $\Rightarrow$ Intermediate, not the reverse. So Maria has passed Intermediate, and then Principles. Passing Principles is **necessary** for Advanced, but not **sufficient**: a student may pass Principles and never take Intermediate.

**Example 6 (bank loan).** A bank approves a loan **only if** credit score $\ge 700$ **and** debt-to-income ratio $< 40\%$. Write $L$ for approval and $R$ for “both hurdles cleared”. The rule is

$$
L \Rightarrow R.
$$

Applicant P has score $750$ and ratio $35\%$: $R$ holds. That does **not** force approval. Meeting a necessary condition keeps the file alive; it does not create a yes.

Applicant Q has score $720$ and ratio $45\%$: $R$ fails. The contrapositive $\neg R \Rightarrow \neg L$ refuses the loan at once.

**Example 7 (doctor).** Diagnosed with $X$ only if symptoms A and B both appear; both symptoms still do not guarantee the diagnosis, because other conditions must be ruled out. So diagnosis $\Rightarrow$ (A and B), while (A and B) $\Rightarrow$ diagnosis is refused. Symptoms are necessary, not sufficient. A patient with A but not B cannot be diagnosed with $X$. A patient with both may still wait while other causes are excluded.

### And, or, not

| Connective | Symbol | True when |
| --- | --- | --- |
| and | $\land$ | both parts true |
| or | $\lor$ | at least one part true (**inclusive**) |
| not | $\neg$ | the inner claim false |

Inclusive “or” always allows both. Exclusive “or” (exactly one) is a different claim and must be stated explicitly.

**Example 8.** The number 7 is prime and not even. $P$: “7 is prime” (T). $Q$: “7 is even” (F).

| Compound | Value |
| --- | --- |
| $P \land Q$ | F |
| $P \lor Q$ | T |
| $\neg(P \land Q)$ | T |
| $\neg P \land \neg Q$ | F |

Negating the whole bracket is not the same as negating each piece. De Morgan:

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q, \qquad \neg(P \lor Q) \equiv \neg P \land \neg Q.
$$

**Example 9 (course pass).** Pass if and only if attendance $\ge 80\%$ **and** final $\ge 50$:

$$
\text{Pass} \Leftrightarrow A \land F.
$$

Student K: $85\%$ attendance, final $48$. Then $A$ true, $F$ false, so no pass. Student L: $75\%$ attendance, final $90$. Then $A$ false, $F$ true, so no pass. A high exam mark never repairs missing attendance, and near-miss scores never count: $49$ fails exactly as $10$ does. The rule checks two separate thresholds, not an average. That is why $(80\%,50)$ can pass while $(79\%,100)$ fails.

**Example 10 (online filter).** A shop shows an item exactly when it is **not** (on sale **or** out of stock). Write $S$ for sale and $O$ for out of stock. Display means

$$
\neg(S \lor O) \equiv \neg S \land \neg O:
$$

neither on sale nor out of stock. An item on sale but in stock is hidden. An item not on sale but out of stock is hidden. Only “not on sale and in stock” is shown. The wrong rewrite $\neg S \lor \neg O$ would display the first two items; De Morgan forbids keeping the “or” when the “not” moves inside.

**Example 11 (market survey).** Of 100 consumers, 40 bought X, 35 bought Y, and 15 bought both. Inclusive “X or Y” counts

$$
40 + 35 - 15 = 60.
$$

Exclusive “exactly one of X, Y” drops the both-buyers and leaves $25 + 20 = 45$.

### Why checking solutions is forced by logic

Return to $x + 2 = \sqrt{4 - x}$. Marking implication arrows:

$$
\begin{align*}
x + 2 = \sqrt{4 - x}
&\Rightarrow (x + 2)^2 = 4 - x \\
&\Rightarrow x^2 + 4x + 4 = 4 - x \\
&\Rightarrow x^2 + 5x = 0 \\
&\Rightarrow x(x + 5) = 0 \\
&\Rightarrow (x = 0\ \text{or}\ x = -5).
\end{align*}
$$

The first step uses $a = b \Rightarrow a^2 = b^2$, which is true but **not reversible**: $a^2 = b^2$ also allows $a = -b$. So the chain only proves that any real solution must be $0$ or $-5$. It does not prove that either value works. Substituting shows that only $x = 0$ survives. Separately, jumping from $x^2 + 5x = 0$ to $x + 5 = 0$ wrongly drops the root $x = 0$.

One-way implications narrow the candidates. Only an equivalence, or an explicit check in the original equation, confirms them. The same habit applies to worded rules: after you translate “only if” into an arrow, ask whether the reverse arrow was ever granted.

---

## 1.4 Quantifiers, Validity & Deduction

Section 1.3 built single arrows. This section builds longer arguments: how theorems are proved, how “for every” and “there exists” interact, and when a conclusion really follows from given premises.

### Theorems as implications

A mathematical theorem can be written

$$
P \Rightarrow Q,
$$

where $P$ collects the **premises** and $Q$ the **conclusions**. Three standard proof shapes appear again and again.

### Direct proof

Assume $P$, and derive $Q$ by valid steps.

**Example 1.** Show $-x^2 + 5x - 4 > 0 \Rightarrow x > 0$.

Assume the left-hand inequality. Add $x^2 + 4$ to both sides: $5x > x^2 + 4$. Since $x^2 + 4 \ge 4$ for every real $x$, one gets $5x > 4$, so $x > 4/5$, and in particular $x > 0$.

### Contrapositive proof

Prove $\neg Q \Rightarrow \neg P$ instead. Equivalence with the original gives $P \Rightarrow Q$ for free.

In the same example, assume $x \le 0$. Then $5x \le 0$, so $-x^2 + 5x - 4$ is a sum of three nonpositive terms and cannot be positive.

**Example 2 (integers).** If $x$ and $y$ are integers and $xy$ is odd, then both $x$ and $y$ are odd. Contrapositive: if at least one of $x,y$ is even, then $xy$ is even. That is immediate, because an even factor forces an even product.

### Proof by contradiction

Assume $P$ together with $\neg Q$, and derive something impossible. Then $P$ and $\neg Q$ cannot both hold, so $P \Rightarrow Q$.

Assuming $-x^2 + 5x - 4 > 0$ and $x \le 0$ at once forces both $5x > x^2 + 4$ and $5x \le 0$, hence $0 > x^2 + 4$, which is absurd.

### Deductive versus inductive reasoning

**Deductive** reasoning follows logical rules from premises to conclusions. Mathematical proofs are deductive.

**Inductive** reasoning in everyday science draws a general claim from observations: “the price level rose for each of the last $n$ years, so it will rise next year.” Useful empirically, never a mathematical proof. Measuring angles in a thousand triangles and always finding $180^\circ$ is strong evidence, not a proof for every triangle. A firm’s profits rising for twenty years does not prove they rise this year.

### Mathematical induction

**Mathematical induction** is a fully logical method for proving $P(n)$ for every natural number $n$. It is not the same as everyday inductive reasoning.

**THE PRINCIPLE OF MATHEMATICAL INDUCTION.** Suppose:

1. $P(1)$ is true (**base case**);
2. for each natural $k$, if $P(k)$ is true then $P(k + 1)$ is true (**induction step**).

Then $P(n)$ is true for every natural $n$.

The assumption $P(k)$ inside the step is the **induction hypothesis**. Think of an infinite ladder: if you can climb the first rung, and from any rung you can always climb the next, you can reach every rung.

**Example 3.** Sum of the first $n$ odd numbers:

$$
P(n):\quad 1 + 3 + 5 + \cdots + (2n - 1) = n^2.
$$

Base: $n = 1$ gives $1 = 1^2$.

Step: assume $P(k)$, add the next odd number $2k + 1$:

$$
1 + 3 + \cdots + (2k - 1) + (2k + 1) = k^2 + (2k + 1) = (k + 1)^2.
$$

That is $P(k + 1)$. By induction, $P(n)$ holds for all natural $n$.

**Example 4.** For every positive integer $n$,

$$
3 + 3^2 + \cdots + 3^n = \tfrac12\bigl(3^{n+1} - 3\bigr).
$$

Both sides equal $3$ when $n = 1$. If the formula holds for $n = k$, add $3^{k+1}$ and simplify to the formula for $n = k + 1$.

Checking $n = 1,2,3,4,5$ is evidence, not a proof. Without the general step from $k$ to $k + 1$, case $n = 6$ is still open. The principle extends to all $n \ge n_0$: verify $P(n_0)$, then show $P(k) \Rightarrow P(k + 1)$ for $k \ge n_0$.

A famous false “induction” claims that in any room of $n$ people, all have the same income. The base $n = 1$ is fine. The broken step pretends that overlapping groups of $n$ force a group of $n + 1$ to match, which fails already when going from $1$ to $2$. The moral: the inductive step must work for **every** $k$, including the awkward ones.

### Quantifiers

| Symbol | Read as | True when |
| --- | --- | --- |
| $\forall x$ | for every $x$ | every object in the universe works |
| $\exists x$ | there exists an $x$ | at least one object works |

One counterexample kills $\forall$. One witness confirms $\exists$.

Negation swaps the quantifier and negates the inner claim:

$$
\neg\forall x\, P(x) \equiv \exists x\, \neg P(x),
$$

$$
\neg\exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

For an implication inside a universal claim,

$$
\neg\forall x\,(P(x) \Rightarrow Q(x)) \equiv \exists x\,(P(x) \land \neg Q(x)):
$$

an exception is a case where the “if” holds and the “then” fails.

**Example 5.** Over the reals: $\forall x\,(x^2 \ge 0)$ is true, so $\exists x\,(x^2 < 0)$ is false. $\exists x\,(x^2 = -1)$ is false in $\mathbb{R}$. The negation of $\exists x\,(x > 100)$ is $\forall x\,(x \le 100)$.

**Example 6 (primes).** “Every prime $p > 2$ is odd” is true: an even integer above $2$ has at least three positive divisors. The number $2$ is not a counterexample, because it fails the domain $p > 2$. Correct negation: “there exists a prime $p > 2$ that is even.” The converse “every odd integer $> 2$ is prime” is false; $9$ is a counterexample.

**Example 7 (restricted domain).** Let $P = \{2,3,5,7,11,13\}$ and $E = \{2,4,6,8,10,12,14\}$. Then $P \cap E = \{2\}$ and $P \setminus E = \{3,5,7,11,13\}$. The claim “$\forall x \in P$, $x$ is odd” fails at $2$. The restricted claim “for every $x \in P$ with $x \ne 2$, $x$ is odd” holds. Subsethood $P \subseteq E$ fails at $3$.

### Quantifier order

Who is chosen first changes the meaning.

**Example 8.** Over positive reals:

$$
\forall x > 0\ \exists y\ (y > x)
$$

is true: given $x$, take $y = x + 1$. Reversed,

$$
\exists y\ \forall x > 0\ (y > x)
$$

is false: no single $y$ beats every positive number, because $x = y + 1$ defeats it.

**Example 9 (exams).** Statement 1: “There exists a student who scored above 90 on every exam,” $\exists s\,\forall e\, G(s,e)$. Statement 2: “For every exam there exists a student who scored above 90,” $\forall e\,\exists s\, G(s,e)$.

Statement 1 implies Statement 2: reuse the same strong student on every exam. The converse fails. Picture two exams and two students:

| | Exam 1 | Exam 2 |
| --- | --- | --- |
| Student X | above 90 | below 90 |
| Student Y | below 90 | above 90 |

Every exam has a high scorer, so Statement 2 is true. Nobody clears both, so Statement 1 is false. With only one exam the two statements collapse to the same claim.

**Example 10 (products).** “For every positive integer $m$ there exists a positive integer $n$ with $m \cdot n = 100$” is $\forall m\,\exists n:\ mn = 100$. At $m = 4$, take $n = 25$. At $m = 3$, $n = 100/3$ is not an integer, so the universal claim fails. Correct negation: $\exists m\,\forall n:\ mn \ne 100$, and $m = 3$ is a witness. Reversing to $\exists n\,\forall m:\ mn = 100$ asks for one $n$ serving every $m$, which is also false.

### Validity of an argument

An argument with premises $P_1,\ldots,P_n$ and conclusion $C$ is **valid** when it is impossible for all premises to be true while $C$ is false. Validity is about shape, not about whether the premises are true in the real world. A valid argument with true premises is called **sound**. Validity alone does not make the conclusion true in the world; it only forbids the pattern “premises true, conclusion false.”

**Example 11 (economists).** Premises: all economists study human behaviour; some economists specialise in game theory. Conclusion: some game theorists study human behaviour.

$$
\forall x\,(E(x) \Rightarrow H(x)), \qquad
\exists x\,(E(x) \land G(x)), \qquad
\text{therefore}\quad
\exists x\,(G(x) \land H(x)).
$$

From the existential premise take a witness $a$ with $E(a)$ and $G(a)$. The universal premise gives $H(a)$. So $G(a) \land H(a)$. The conclusion follows in every situation where the premises hold: the argument is valid.

Change the second premise to “no economists specialise in game theory.” Now picture a world with economists who all study behaviour and with nobody in game theory. Premises true, conclusion false: the modified argument is invalid.

**Example 12 (theft clues).** Exactly one of Ann, Ben, Cara, Dan is guilty. Clues:

1. If Ann is guilty, then Dan is innocent.
2. If Ben is innocent, then Cara is innocent.
3. Dan is guilty.
4. If Cara is guilty, then Ann is guilty.

Clue (3) is a flat assertion, not an implication: Dan is guilty. With “exactly one guilty,” Ann, Ben and Cara are cleared at once. The conditional clues are then consistent but redundant for naming the guilty person. A clue with a false “if” part (Ann innocent makes clue (1) vacuous) adds no new information.

**Example 13 (truth-tellers and liars).** On an island, everyone always tells the truth or always lies. X says “Y always lies.” Y says “X and I are both liars.”

Case X liar: then Y would be a truth-teller, so Y’s sentence would be true, forcing Y to be a liar. Contradiction. Case X truth-teller: then Y is a liar, and Y’s conjunction “both liars” is false because X is not a liar. Consistent. So X tells the truth and Y lies. The method is proof by cases plus contradiction on the impossible case.

### Putting a deduction together

1. Rewrite each sentence as $\Rightarrow$, $\Leftrightarrow$, $\land$, $\lor$, $\forall$, or $\exists$.
2. Separate “only if” (necessary) from “if / whenever” (sufficient) and from “if and only if” (both ways).
3. Use the contrapositive when a failure is easier to handle than a success.
4. For nested quantifiers, ask who moves first, and whether later choices may depend on earlier ones.
5. To show invalidity, exhibit one concrete situation where the premises hold and the conclusion fails.
6. After a chain of one-way implications in algebra, check candidates in the original statement.

---

## Summary reference

| Task | Method |
| --- | --- |
| Define a set | List members, or use $\{\text{object} : \text{property}\}$ |
| Test $A = B$ | Check both $A \subseteq B$ and $B \subseteq A$ |
| Tell $\in$ from $\subseteq$ | Element listed in the set vs every member of a collection sits in the set |
| Count subsets of an $n$-element set | $2^n$ |
| Form $A \cup B$, $A \cap B$, $A \setminus B$ | or / and / in $A$ but not $B$ |
| Take a complement | Relative to a stated universe $U$ |
| Use De Morgan | Complement turns $\cup$ into $\cap$ and $\cap$ into $\cup$ |
| Count a union of two finite sets | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ |
| Read $P \Rightarrow Q$ | If $P$ then $Q$; fails only when $P$ true and $Q$ false |
| Form converse / inverse / contrapositive | $Q \Rightarrow P$ / $\neg P \Rightarrow \neg Q$ / $\neg Q \Rightarrow \neg P$; only the last matches the original |
| Read necessary vs sufficient | “only if” → necessary; “if / whenever” → sufficient; “iff” → both |
| Negate an implication | $P \land \neg Q$, not another implication |
| Confirm a candidate solution | Substitute into the original equation or statement |
| Negate $\forall$ / $\exists$ | Swap the quantifier and negate the inner claim |
| Compare $\forall\exists$ with $\exists\forall$ | Later variables may / may not depend on earlier ones |
| Prove $P(n)$ for all $n$ | Base case $P(1)$, then $P(k) \Rightarrow P(k + 1)$ for every $k$ |
| Test validity | Ask whether premises can be true while the conclusion is false |

Key formulas:

$$
A \cap (B \cup C) = (A \cap B) \cup (A \cap C),
$$

$$
(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c,
$$

$$
n(A \cup B) = n(A) + n(B) - n(A \cap B),
$$

$$
P \Rightarrow Q \ \equiv\ \neg Q \Rightarrow \neg P,
$$

$$
\neg\forall x\, P(x) \equiv \exists x\, \neg P(x), \qquad
\neg\exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

**Working order on an exam statement.** Name the universe and rewrite the claim in symbols. For sets, compute or shade the relevant regions before comparing. For implications, decide which arrow is claimed and test the converse separately. For quantifiers, fix the order and try a witness or a counterexample. For induction, write the base case and the exact inductive step, not a handful of numerical checks.

**Self-check.** When are two sets equal? Why is $\emptyset \subseteq A$ always true while $\emptyset \in A$ usually false? What does inclusive “or” allow that exclusive “or” would forbid? How do you read “$P$ only if $Q$” as an arrow? Why does a one-way implication after squaring force you to check solutions? How do you negate “for every prime $p > 2$, $p$ is odd”? Why does $\forall x\,\exists y$ not mean the same as $\exists y\,\forall x$? What two ingredients make a proof by induction complete? What single picture shows that an argument is invalid?
