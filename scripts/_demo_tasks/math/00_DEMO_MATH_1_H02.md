# DEMO MATH 1.H02

ak=[True, True, True, False, False]

current_lens=[526, 609, 637, 660, 514]

## title
Conference attendance rules — hard roster

## context
Four colleagues — Ana, Boris, Ceci, and Dmitri — decide whether to attend a conference.

(1) If Ana attends, then Boris does not attend.

(2) If Boris does not attend, then Ceci attends.

(3) If Ceci attends, then Dmitri does not attend — unless Ana also attends, in which case Dmitri is unrestricted.

(4) Dmitri attends.

(5) At most three of the four attend.

(6) If Ana stays away, then Boris attends.

(7) Ceci and Boris never attend together.

(8) It is not the case that nobody from {Ana, Ceci} attends.

Decide whether each claim is true or false.

## statement A
Dmitri attends in every roster consistent with the rules.

## current A
**A.** → True

Rule (4) is an unconditional atomic fact, not an implication:

$$
D=\mathsf{true}
$$

Write the attendance bit explicitly:

$$
D
$$

No later rule ever forces Dmitri out. Rule (3) can constrain Dmitri only when Ceci attends and Ana does not; that branch never opens once Ana is forced in (see letter B). Rules (1), (2), (5), (6), (7), and (8) do not mention Dmitri at all. Therefore every roster consistent with the eight rules contains Dmitri:

$$
D=\mathsf{true}
$$

in every model.

So the statement is True.

## statement B
Ana must attend in every legal roster.

## current B
**B.** → True

Argue by contradiction. Suppose Ana stays away:

$$
\neg A
$$

Rule (6) then forces Boris:

$$
\neg A\Rightarrow B
$$

$$
B
$$

Rule (7) forbids Ceci once Boris is present:

$$
\neg(B\land C)
$$

$$
\neg C
$$

Rule (2) is the implication $\neg B\Rightarrow C$. Its antecedent is false (Boris attends), so (2) does not resurrect Ceci.

Rule (8) demands that at least one of Ana or Ceci attends:

$$
A\lor C
$$

With both $A$ and $C$ false, the disjunction fails:

$$
\neg(A\lor C)
$$

The assumption $\neg A$ is therefore impossible. Ana attends in every legal roster.

So the statement is True.

## statement C
There exists a legal roster in which exactly three people attend.

## current C
**C.** → True

From B, Ana always attends:

$$
A=\mathsf{true}
$$

Rule (1) is $A\Rightarrow\neg B$. With $A$ true this forces

$$
\neg B
$$

Rule (2) with Boris absent forces Ceci:

$$
\neg B\Rightarrow C
$$

$$
C
$$

Because Ana is present, the "unless Ana attends" exception in (3) fires, so Ceci does not force Dmitri out. Rule (4) still requires Dmitri. The resulting roster is

$$
\{A,C,D\}
$$

— exactly three people. Rule (5) allows at most three, so three is admissible. Rule (7) holds because Boris is absent. Rule (8) holds because both Ana and Ceci attend.

Thus a legal three-person roster exists.

So the statement is True.

## statement D
Boris can attend in some legal roster.

## current D
**D.** → False

Ask whether Boris can appear in any roster that obeys all eight rules. From letter B, Ana is present in every legal roster:

$$
A=\mathsf{true}
$$

Rule (1) is the implication

$$
A\Rightarrow\neg B
$$

The antecedent is always true, so modus ponens forces

$$
\neg B
$$

in every model. Write the forced bit explicitly:

$$
B=\mathsf{false}
$$

Suppose for a moment that some model had $B=\mathsf{true}$. Then rule (1) would require $\neg A$, but letter B already showed $\neg A$ collapses via (6), (7), and (8). The contradiction confirms Boris is permanently ejected: there is no legal roster in which he attends.

So the statement is False.

## statement E
If the “unless Ana attends” exception were removed from rule (3), the rules would still admit a solution with Dmitri attending.

## current E
**E.** → False

Remove the Ana-exception from rule (3). The new rule (3′) reads simply

$$
C\Rightarrow\neg D
$$

The earlier forcing still applies. From letter B:

$$
A=\mathsf{true}
$$

From rule (1):

$$
\neg B
$$

From rule (2):

$$
C
$$

Rule (4) still needs

$$
D
$$

But $C$ together with (3′) forces

$$
\neg D
$$

Compare the two requirements on Dmitri:

$$
D
$$

$$
\neg D
$$

Contradiction. The constraint set becomes unsatisfiable. No solution with Dmitri attending remains.

So the statement is False.