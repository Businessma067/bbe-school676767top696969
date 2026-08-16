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

### Why careful logic matters

Routine algebra without logic can produce nonsense. A classic warning is the equation

$$
x + 2 = \sqrt{4 - x}.
$$

Squaring both sides, expanding, and cancelling can lead you to $x = -5$. Substituting back shows that $-5$ fails: the left side is $-3$, while $\sqrt{9} = 3$. The algebraic steps were not all reversible, so a value that appeared at the end need not solve the original equation. Always check candidates in the original statement. The rest of this section explains the logical shape of such mistakes.

### A reminder about square roots

For $a \ge 0$, the symbol $\sqrt{a}$ means the unique **nonnegative** number $x$ with $x^2 = a$. So $\sqrt{9} = 3$, not $-3$. Older texts sometimes spoke of “two square roots”; modern notation avoids that confusion by writing $\pm\sqrt{a}$ when both signs are wanted. If $a < 0$, there is no real square root.

### Propositions

A **proposition** (or statement) is an assertion that is either true or false. “All individuals who breathe are alive” is a true proposition. “All individuals who breathe are healthy” is a false one. If the words are vague, truth may be undefined: “67 is a large number” is neither true nor false until “large” is defined.

An assertion that contains a variable, such as $x^2 - 1 = 0$, is an **open proposition**. Substituting different values for $x$ produces different propositions, some true and some false. The open claim $x^2 - 1 = 0$ is true for $x = 1$ and $x = -1$, and false otherwise. Until a value is chosen, the open proposition itself is not simply true or false.

### Implications

If whenever $P$ is true, $Q$ must also be true, we write

$$
P \Rightarrow Q
$$

and say “$P$ implies $Q$”, “if $P$, then $Q$”, “$Q$ is a consequence of $P$”, or “$P$ only if $Q$”. The same fact can be written $Q \Leftarrow P$.

**Example 1.** Correct implications include:

- $x > 2 \Rightarrow x^2 > 4$
- $xy = 0 \Rightarrow (x = 0\ \text{or}\ y = 0)$
- $S$ is a square $\Rightarrow$ $S$ is a rectangle
- She lives in Paris $\Rightarrow$ She lives in France

(Here “Paris” means Paris, France.)

When both $P \Rightarrow Q$ and $Q \Rightarrow P$ hold, we write the **equivalence**

$$
P \Leftrightarrow Q
$$

and say “$P$ is equivalent to $Q$”, or “$P$ if and only if $Q$” (often shortened to “iff”).

In Example 1, only the product rule is an equivalence in both directions. The others fail on the way back: $x = -3$ has $x^2 > 4$ without $x > 2$; a rectangle need not be a square; millions of people live in France outside Paris.

**Example 2.** Correct equivalences include:

$$
(x < -2\ \text{or}\ x > 2) \Leftrightarrow x^2 > 4,
$$

$$
xy = 0 \Leftrightarrow (x = 0\ \text{or}\ y = 0),
$$

$$
A \subseteq B \Leftrightarrow B^c \subseteq A^c.
$$

### The contrapositive

If $P \Rightarrow Q$ is valid, then whenever $Q$ is false, $P$ must also be false. That is,

$$
P \Rightarrow Q \quad\text{is equivalent to}\quad \neg Q \Rightarrow \neg P.
$$

This is the **contrapositive principle**. It is often the cleanest way to prove an implication: instead of assuming $P$ and deriving $Q$, assume $\neg Q$ and derive $\neg P$.

**Example 3.** A bank approves a loan only if the credit score is at least 700 and the debt-to-income ratio is below 40%. Write $L$ for approval and $R$ for “both requirements hold”. The rule is $L \Rightarrow R$. Its contrapositive is $\neg R \Rightarrow \neg L$: fail either requirement, and approval is impossible. Meeting $R$ does **not** force approval, because the bank never promised the reverse arrow $R \Rightarrow L$.

### Necessary and sufficient conditions

Vocabulary for the same arrows:

| Wording | Meaning |
| --- | --- |
| $P$ is **sufficient** for $Q$ | $P \Rightarrow Q$ |
| $Q$ is **necessary** for $P$ | $P \Rightarrow Q$ (same arrow, read from the other end) |
| $P$ is **necessary and sufficient** for $Q$ | $P \Leftrightarrow Q$ |

So “living in France is necessary for living in Paris” is true, while “living in Paris is necessary for living in France” is false. What is true is that living in Paris is **sufficient** for living in France.

**Example 4.** Compare $x > 10$ and $x > 5$.

- $x > 10$ is sufficient for $x > 5$, because the stronger inequality forces the weaker one.
- $x > 5$ is necessary for $x > 10$, for the same reason.
- $x > 10$ is not necessary for $x > 5$: $x = 7$ is a counterexample.
- The two conditions are not equivalent.

University prerequisite chains work the same way. “You may enrol in Advanced Macro only if you passed Intermediate” means Advanced $\Rightarrow$ Intermediate: Intermediate is necessary, not sufficient. Chaining “only if” rules gives a longer necessary path, never an automatic enrolment ticket.

### And, or, not

Three connectives build compound propositions from simpler ones.

| Connective | Symbol | True when |
| --- | --- | --- |
| and (conjunction) | $\land$ | both parts are true |
| or (disjunction) | $\lor$ | at least one part is true (inclusive) |
| not (negation) | $\neg$ | the inner claim is false |

**Example 5.** The number 7 is prime and not even. Write $P$ for “7 is prime” (true) and $Q$ for “7 is even” (false). Then:

| Compound | Value | Reason |
| --- | --- | --- |
| $P \land Q$ | false | both parts needed |
| $P \lor Q$ | true | one true part is enough |
| $\neg(P \land Q)$ | true | the “both” claim fails |
| $\neg P \land \neg Q$ | false | “neither” fails because 7 is prime |

Negating a whole bracket is not the same as negating each piece. De Morgan’s rules for propositions match the set laws:

$$
\neg(P \land Q) \equiv \neg P \lor \neg Q, \qquad \neg(P \lor Q) \equiv \neg P \land \neg Q.
$$

### Why checking solutions is forced by logic

Return to $x + 2 = \sqrt{4 - x}$. A careful chain of implications can show:

$$
x + 2 = \sqrt{4 - x}
\ \Rightarrow\
(x + 2)^2 = 4 - x
\ \Rightarrow\
\cdots
\ \Rightarrow\
(x = 0\ \text{or}\ x = -5).
$$

The first step uses $a = b \Rightarrow a^2 = b^2$, which is true but **not reversible**: $a^2 = b^2$ allows $a = -b$ as well as $a = b$. So the chain only proves that any solution must be $0$ or $-5$. It does not prove that either value works. Substituting shows that only $x = 0$ survives. Cancelling $x$ from $x^2 + 5x = 0$ and losing the root $x = 0$ is a second, separate error.

The lesson is general: a one-way implication narrows the candidates; only an equivalence, or an explicit check, confirms them.

---

## 1.4 Quantifiers, Validity & Deduction

### Theorems as implications

A mathematical theorem can be written as one or more implications

$$
P \Rightarrow Q,
$$

where $P$ collects the **premises** (what is assumed) and $Q$ collects the **conclusions** (what is claimed). Proofs come in several standard shapes.

### Direct proof

Assume $P$, and derive $Q$ by a sequence of valid steps.

**Example 1.** Show that $-x^2 + 5x - 4 > 0 \Rightarrow x > 0$.

Assume the left-hand inequality. Add $x^2 + 4$ to both sides to get $5x > x^2 + 4$. Since $x^2 + 4 \ge 4$ for every real $x$, it follows that $5x > 4$, so $x > 4/5$, and in particular $x > 0$.

### Contrapositive proof

Prove $\neg Q \Rightarrow \neg P$ instead. By the contrapositive principle, that establishes $P \Rightarrow Q$.

In the same example, assume $x \le 0$. Then $5x \le 0$, so $-x^2 + 5x - 4$ is a sum of three nonpositive terms and cannot be positive. That is exactly $\neg Q \Rightarrow \neg P$.

### Proof by contradiction

Assume $P$ together with $\neg Q$, and derive something impossible. Then $P$ and $\neg Q$ cannot both hold, so $P \Rightarrow Q$.

Assuming $-x^2 + 5x - 4 > 0$ and $x \le 0$ at once forces both $5x > x^2 + 4$ and $5x \le 0$, hence $0 > x^2 + 4$, which is absurd.

### Deductive versus inductive reasoning

**Deductive** reasoning follows rules of logic from premises to conclusions. Mathematical proofs are deductive.

**Inductive** reasoning in the everyday scientific sense draws a general claim from many observations: “the price level rose for each of the last $n$ years, so it will rise next year.” That kind of induction can be useful empirically, but it is never a mathematical proof. Measuring the angles of a thousand triangles and always getting $180^\circ$ is strong evidence, not a proof that every triangle has angle sum $180^\circ$.

### Mathematical induction

**Mathematical induction** is a different, fully logical method for proving a statement $P(n)$ for every natural number $n$.

**THE PRINCIPLE OF MATHEMATICAL INDUCTION.** Suppose:

1. $P(1)$ is true (the **base case**);
2. for each natural number $k$, if $P(k)$ is true then $P(k + 1)$ is true (the **induction step**).

Then $P(n)$ is true for every natural number $n$.

The assumption that $P(k)$ holds, used inside the induction step, is the **induction hypothesis**.

**Example 2.** Prove that the sum of the first $n$ odd numbers equals $n^2$:

$$
P(n):\quad 1 + 3 + 5 + \cdots + (2n - 1) = n^2.
$$

Base case: for $n = 1$, both sides equal $1$.

Induction step: assume $P(k)$, so the first $k$ odd numbers sum to $k^2$. Add the next odd number $2k + 1$:

$$
1 + 3 + \cdots + (2k - 1) + (2k + 1) = k^2 + (2k + 1) = (k + 1)^2.
$$

That is $P(k + 1)$. By induction, $P(n)$ holds for all natural $n$.

**Example 3.** Prove

$$
3 + 3^2 + \cdots + 3^n = \tfrac12\bigl(3^{n+1} - 3\bigr)
$$

for every positive integer $n$. Both sides equal $3$ when $n = 1$. If the formula holds for $n = k$, add $3^{k+1}$ to both sides and simplify to obtain the formula for $n = k + 1$.

Checking a formula for $n = 1,2,3,4,5$ is evidence, not a proof. Without the general step from $k$ to $k + 1$, the sixth case is still open.

The principle extends to statements true for all integers $n \ge n_0$: verify $P(n_0)$, then show $P(k) \Rightarrow P(k + 1)$ for every $k \ge n_0$.

### Quantifiers

Two symbols bind variables over a universe:

| Symbol | Read as | True when |
| --- | --- | --- |
| $\forall x$ | for every $x$ | every object in the universe works |
| $\exists x$ | there exists an $x$ | at least one object works |

A single counterexample kills a $\forall$ claim. A single witness confirms an $\exists$ claim.

Negation swaps the quantifier and negates the inner claim:

$$
\neg\forall x\, P(x) \equiv \exists x\, \neg P(x),
$$

$$
\neg\exists x\, P(x) \equiv \forall x\, \neg P(x).
$$

**Example 4.** Over the real numbers, $\forall x\,(x^2 \ge 0)$ is true, so its negation $\exists x\,(x^2 < 0)$ is false. The claim $\exists x\,(x^2 = -1)$ is false in $\mathbb{R}$. The negation of $\exists x\,(x > 100)$ is $\forall x\,(x \le 100)$.

**Example 5.** “Every prime $p > 2$ is odd” is true: any even integer greater than 2 has at least three positive divisors, so it cannot be prime. The number 2 is not a counterexample, because it fails the domain condition $p > 2$. The correct negation is “there exists a prime $p > 2$ that is even.” The converse “every odd integer greater than 2 is prime” is false; $9$ is a counterexample.

### Quantifier order

The order of $\forall$ and $\exists$ changes the meaning.

**Example 6.** Over the positive reals:

$$
\forall x > 0\ \exists y\ (y > x)
$$

is true: given $x$, take $y = x + 1$. The reversed sentence

$$
\exists y\ \forall x > 0\ (y > x)
$$

is false: no single $y$ can exceed every positive number, because $x = y + 1$ defeats it.

The same pattern appears in exam language. “There exists a student who scored above 90 on every exam” is $\exists s\,\forall e\, G(s,e)$. “For every exam there exists a student who scored above 90” is $\forall e\,\exists s\, G(s,e)$. The first implies the second, but not conversely: different students may clear different exams.

### Validity of an argument

An argument with premises $P_1,\ldots,P_n$ and conclusion $C$ is **valid** when it is impossible for all the premises to be true while $C$ is false. Validity is about logical shape, not about whether the premises are true in the real world.

**Example 7.** Premises: all economists study human behaviour; some economists specialise in game theory. Conclusion: some game theorists study human behaviour.

Write $E(x)$, $H(x)$, $G(x)$ for the three properties. The argument is

$$
\forall x\,(E(x) \Rightarrow H(x)), \qquad
\exists x\,(E(x) \land G(x)), \qquad
\text{therefore}\quad
\exists x\,(G(x) \land H(x)).
$$

From the existential premise pick a witness $a$ with $E(a)$ and $G(a)$. The universal premise then gives $H(a)$. So $G(a) \land H(a)$, and the conclusion follows in every situation where the premises hold. The argument is valid.

Changing the second premise to “no economists specialise in game theory” destroys validity: you can imagine a world with economists who all study behaviour and with nobody in game theory at all. Premises true, conclusion false.

A valid argument with true premises is sometimes called **sound**. Validity alone does not guarantee that the conclusion is true in the world; it only guarantees that the conclusion cannot fail while the premises succeed.

### Putting a deduction together

When you analyse a chain of clues or a worded rule:

1. Rewrite each sentence as $\Rightarrow$, $\land$, $\lor$, $\forall$, or $\exists$.
2. Separate necessary conditions (“only if”) from sufficient ones (“if”, “whenever”).
3. Use the contrapositive when a failure of the conclusion is easier to handle.
4. For nested quantifiers, ask who is chosen first, and whether later choices may depend on earlier ones.
5. To show invalidity, exhibit one concrete situation where the premises hold and the conclusion fails.

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
| Read $P \Rightarrow Q$ | If $P$ then $Q$; $P$ sufficient for $Q$; $Q$ necessary for $P$ |
| Form the contrapositive | $\neg Q \Rightarrow \neg P$ |
| Confirm a candidate solution | Substitute into the original equation or statement |
| Negate $\forall$ / $\exists$ | Swap the quantifier and negate the inner claim |
| Compare $\forall\exists$ with $\exists\forall$ | Later variables may / may not depend on earlier ones |
| Prove $P(n)$ for all $n$ | Base case $P(1)$, then $P(k) \Rightarrow P(k + 1)$ |
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
