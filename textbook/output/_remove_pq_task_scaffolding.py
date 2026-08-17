# -*- coding: utf-8 -*-
from pathlib import Path

p = Path("src/data/math-ch1-logic.ts")
t = p.read_text(encoding="utf-8")
repls = {
'''context: "Let P: \"7 is a prime number\" and Q: \"7 is an even number.\" (P is true, Q is false.)"''': '''context: "The number 7 is prime and is not even."''',
'''"$P \\land Q$ is true",
 "$P \\lor Q$ is true",
 "$\\neg(P \\land Q)$ is true",
 "$\\neg P \\land \\neg Q$ is true",
 "$\\neg(P \\lor Q)$ is true",''': '''"7 is both prime and even.",
 "7 is prime or even.",
 "It is not true that 7 is both prime and even.",
 "7 is neither prime nor even.",
 "It is not true that 7 is prime or even.",''',
'''context: "Let x be a real number, and let P: \"x > 10\" and Q: \"x > 5.\""''': '''context: "Let x be a real number. Compare the conditions $x>10$ and $x>5$."''',
'''"P is a sufficient condition for Q.",
 "P is a necessary condition for Q.",
 "Q is a necessary condition for P.",
 "P and Q are equivalent conditions $(P \\Leftrightarrow Q)$.",
 "x = 7 is a counterexample showing that Q does not imply P.",''': '''"The condition $x>10$ is sufficient for $x>5$.",
 "The condition $x>10$ is necessary for $x>5$.",
 "The condition $x>5$ is necessary for $x>10$.",
 "The conditions $x>10$ and $x>5$ are equivalent.",
 "$x=7$ is a counterexample to the claim that $x>5$ implies $x>10$.",''',
'''"Proving $P \\Rightarrow Q$ by contradiction means assuming P is true and Q is false, then deriving a contradiction.",''': '''"A contradiction proof of an implication assumes that its condition holds while its conclusion fails, then derives a contradiction.",''',
'''context: "An event organizer's rule is $P \\Rightarrow Q$: \"If it rains, the picnic is cancelled.\""''': '''context: "An event organizer states: \"If it rains, the picnic is cancelled.\""''',
'''"Suppose it did not rain, yet the picnic was cancelled due to a venue conflict. This contradicts the inverse statement, but does NOT contradict the original rule $P \\Rightarrow Q$.",''': '''"Suppose it did not rain, yet the picnic was cancelled due to a venue conflict. This contradicts the inverse statement but does not contradict the organizer's rule.",''',
'''"The biconditional $P \\Leftrightarrow Q$ means P and Q always have the same truth value.",
 "$P \\Leftrightarrow Q$ is true whenever at least one of P or Q is true.",''': '''"A biconditional means that its two components always have the same truth value.",
 "A biconditional is true whenever at least one of its two components is true.",''',
'''context: "Consider the statement $P \\Rightarrow Q$, where P: \"a country's inflation rate exceeds 10%\" and Q: \"the central bank raises interest rates.\""''': '''context: "If a country's inflation rate exceeds 10%, the central bank raises interest rates."''',
'''"The contrapositive of $P \\Rightarrow Q$ is: \"If the central bank does not raise interest rates, then inflation is at most 10%.\"",
 "The converse of $P \\Rightarrow Q$, \"If the central bank raises interest rates, then inflation exceeds 10%,\" is logically equivalent to $P \\Rightarrow Q$.",
 "$P \\Rightarrow Q$ means that P is a sufficient condition for Q.",
 "$P \\Rightarrow Q$ means that P is a necessary condition for Q.",
 "If we are told that the bank raised interest rates (Q is true), we may validly conclude that inflation exceeded 10% (P is true).",''': '''"The contrapositive is: \"If the central bank does not raise interest rates, then inflation is at most 10%.\"",
 "The converse, \"If the central bank raises interest rates, then inflation exceeds 10%,\" is logically equivalent to the original statement.",
 "Inflation above 10% is sufficient for the central bank to raise interest rates.",
 "Inflation above 10% is necessary for the central bank to raise interest rates.",
 "If the bank raised interest rates, we may validly conclude that inflation exceeded 10%.",''',
'''context: "Let P, Q, and R be propositions about a number x. It is known that $P \\Leftrightarrow Q$ and $Q \\Leftrightarrow R$. Suppose P is true."''': '''context: "Three propositions have matching truth values: the first matches the second, and the second matches the third. The first proposition is true."''',
'''"Q is true.",
 "R is true.",
 "$P \\Leftrightarrow R$ must also hold, even though it isn't stated directly.",
 "If R were false instead, then P would have to be false too.",
 "Knowing only that $P \\Leftrightarrow R$ is true (without the individual facts $P \\Leftrightarrow Q$ and $Q \\Leftrightarrow R)$, we could still conclude that Q always shares the same truth value as P and R.",''': '''"The second proposition is true.",
 "The third proposition is true.",
 "The first and third propositions must also have the same truth value.",
 "If the third proposition were false, the first would also be false.",
 "Knowing only that the first and third propositions match is enough to conclude that the second always matches them.",''',
'''context: "Consider the (debatable) economic claim $P \\Rightarrow Q$: \"If inflation increases, then unemployment decreases.\" Each statement below is a proposed rewording - decide whether it is logically equivalent to $P \\Rightarrow Q$."''': '''context: "Consider the economic claim: \"If inflation increases, then unemployment decreases.\" Decide whether each statement is logically equivalent to this claim."''',
'''\"For unemployment to decrease, inflation must increase\" is equivalent to $P \\Rightarrow Q$.''': '''\"For unemployment to decrease, inflation must increase\" is equivalent to the original claim.''',
'''\"A sufficient condition for unemployment to decrease is that inflation increases\" is equivalent to $P \\Rightarrow Q$.''': '''\"A sufficient condition for unemployment to decrease is that inflation increases\" is equivalent to the original claim.''',
'''\"Unemployment can only decrease if inflation increases\" is equivalent to $P \\Rightarrow Q$.''': '''\"Unemployment can only decrease if inflation increases\" is equivalent to the original claim.''',
'''\"If unemployment does not decrease, then inflation does not increase\" is equivalent to $P \\Rightarrow Q$.''': '''\"If unemployment does not decrease, then inflation does not increase\" is equivalent to the original claim.''',
'''\"A necessary condition for inflation to increase is that unemployment decreases\" is equivalent to $P \\Rightarrow Q$.''': '''\"A necessary condition for inflation to increase is that unemployment decreases\" is equivalent to the original claim.''',
'''context: "A professor's claim is $P \\Rightarrow Q$: \"If a student studies at least 10 hours, they pass the exam.\""''': '''context: "A professor claims: \"If a student studies at least 10 hours, they pass the exam.\""''',
'''context: "A contract clause states: “If the contractor fails to complete the project by the deadline, then a penalty fee applies.” Let F: “the contractor fails to complete by the deadline”, P: “a penalty fee applies.”"''': '''context: "A contract clause states: “If the contractor fails to complete the project by the deadline, then a penalty fee applies.”"''',
'''"The clause is symbolized as $F \\Rightarrow P$.",''': '''"Failing to complete the project by the deadline is sufficient for a penalty fee to apply.",''',
'''"The converse $(P \\Rightarrow F)$ must also be true simply because the original clause is true.",''': '''"The converse, “If a penalty fee applies, then the contractor missed the deadline,” must also be true simply because the original clause is true.",''',
'''"The contrapositive, “If no penalty fee applies, then the contractor did not fail to complete by the deadline” $(\\neg P \\Rightarrow \\neg F)$, is logically guaranteed to be true given the original clause.",''': '''"The contrapositive, “If no penalty fee applies, then the contractor did not fail to complete by the deadline,” is logically guaranteed by the original clause.",''',
'''"The inverse, “If the contractor does not fail to complete by the deadline, then no penalty fee applies” $(\\neg F \\Rightarrow \\neg P)$, must also be true given the original clause.",''': '''"The inverse, “If the contractor does not fail to complete by the deadline, then no penalty fee applies,” must also be true given the original clause.",''',
'''context: "An election law states $P \\Rightarrow Q$: \"If a person is a citizen, they are eligible to vote.\""''': '''context: "An election law states: \"If a person is a citizen, they are eligible to vote.\""''',
'''"John is not eligible to vote $(\\neg Q)$; by the contrapositive, we may conclude John is not a citizen $(\\neg P)$. This reasoning is logically valid.",''': '''"John is not eligible to vote; by the contrapositive, we may conclude that John is not a citizen. This reasoning is logically valid.",''',
'''"To prove a universal statement \" $\\forall x\\,P(x)$\" is true, it suffices to check it for x = 1 and x = 2",''': '''"To prove a universal statement, it suffices to check it for $x=1$ and $x=2$.",''',
'''"To prove an existential statement \" $\\exists x\\,P(x)$\" is true, it suffices to exhibit just one value of x for which P(x) holds",''': '''"To prove an existential statement, it suffices to exhibit one value for which the stated property holds.",''',
'''context: "A biology rule states $P \\Rightarrow Q$: \"If an animal is a fish, then it lives in water.\""''': '''context: "A biology rule states: \"If an animal is a fish, then it lives in water.\""''',
'''context: "A store's policy is $P \\Rightarrow Q$: \"If a customer pays within 30 days, they receive a 5% discount.\""''': '''context: "A store's policy states: \"If a customer pays within 30 days, they receive a 5% discount.\""''',
'''context: "A regulation states $P \\Rightarrow Q$: \"If a company's annual revenue exceeds \\$1 million, then it must file an annual audit.\""''': '''context: "A regulation states: \"If a company's annual revenue exceeds \\$1 million, then it must file an annual audit.\""''',
'''"Company X has revenue of \\$2 million (so P is true) but did not file an audit (so Q is false). This is a valid counterexample that would prove the original regulation false.",''': '''"Company X has revenue of \\$2 million but did not file an audit. This is a valid counterexample that would prove the original regulation false.",''',
'''context: "A restaurant's policy is $P \\Rightarrow Q$: \"If a customer orders dessert, they receive one loyalty point.\" Diner Sam received a loyalty point despite NOT ordering dessert - he got one as part of a birthday promotion."''': '''context: "A restaurant's policy states: \"If a customer orders dessert, they receive one loyalty point.\" Diner Sam received a loyalty point despite not ordering dessert; he got one as part of a birthday promotion."''',
'''"Sam's case also disproves the original policy statement $P \\Rightarrow Q$ (\"if dessert is ordered, a point is received\").",''': '''"Sam's case also disproves the policy that ordering dessert guarantees a loyalty point.",''',
'''"To prove $\\exists x\\,P(x)$ is true, one satisfying value suffices; to prove $\\forall x\\,P(x)$ is true, one needs a general argument for an arbitrary $x$, not a finite check.",''': '''"One satisfying value proves an existential claim; a universal claim needs an argument for an arbitrary value, not a finite check.",''',
'''context: "A sports fan claims $P \\Rightarrow Q$: \"If a player scores over 30 points in a game, the team wins.\" In one specific game, Player X scored 35 points, but the team lost 90-95."''': '''context: "A sports fan claims: \"If a player scores over 30 points in a game, the team wins.\" In one game, Player X scored 35 points, but the team lost 90-95."''',
'''context: "A clinical guideline states $P \\Rightarrow Q$: \"If a patient has a fever above 38°C, then antibiotics are prescribed.\""''': '''context: "A clinical guideline states: \"If a patient has a fever above 38°C, then antibiotics are prescribed.\""''',
'''context: "A security policy claims $P \\Rightarrow Q$: \"If a password is at least 12 characters, it is classified as strong.\" The password \"aaaaaaaaaaaa\" (12 identical letters) is NOT classified as strong due to low complexity."''': '''context: "A security policy claims: \"If a password is at least 12 characters, it is classified as strong.\" The password \"aaaaaaaaaaaa\" has 12 identical letters and is not classified as strong because of its low complexity."''',
'''"The password \"aaaaaaaaaaaa\" is a genuine counterexample showing the policy's claim $P \\Rightarrow Q$ is false as an absolute rule.",''': '''"The password \"aaaaaaaaaaaa\" is a genuine counterexample showing that the policy is false as an absolute rule.",''',
'''context: "In number theory: $P \\Rightarrow Q$: \"If n is divisible by 6, then n is divisible by 3.\""''': '''context: "In number theory: \"If n is divisible by 6, then n is divisible by 3.\""''',
'''context: "A number-theory theorem states $P \\Rightarrow Q$: \"If a number is a perfect square, then it has an odd number of positive divisors.\" (This is a proven true theorem.)"''': '''context: "A number-theory theorem states: \"If a number is a perfect square, then it has an odd number of positive divisors.\""''',
'''context: "A real-analysis theorem states $P \\Rightarrow Q$: \"If a sequence converges, then it is bounded.\" (This is a proven true theorem.)"''': '''context: "A real-analysis theorem states: \"If a sequence converges, then it is bounded.\""''',
}

missing=[]
for old,new in repls.items():
    if old not in t:
        missing.append(old[:100])
    else:
        t=t.replace(old,new)
if missing:
    print('MISSING',len(missing))
    for x in missing: print(repr(x))
    raise SystemExit(1)
p.write_text(t,encoding='utf-8')
print('replacements',len(repls))
