import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { inject, wc } from "./_expand_apply.mjs";

const fp = path.join(path.dirname(fileURLToPath(import.meta.url)), "03_12.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const add = {
  "math-1-81": { 4: "The recovered unique picture is X truthful and Y lying. Liar-X is not a second picture. It is a contradiction on Y, and it is rejected. Two equally valid solutions would have required Case 1 to survive. It does not. This letter is that rejection, named as a contradiction from the liar-X hypothesis. Letter A is the same collapse read as X's type." },
  "math-1-82": { 1: "The recovered rotating class is two exams, two students, each exam covered, nobody covering both. That is $S_2$ true and $S_1$ false. The reverse arrow is not a law of quantifiers. Student-first is strictly stronger than exam-first once there are two exams. A class of one student would collapse them; a class of two with a rotating top scorer splits them. The stem's comparison is for a general class. This split is legal." },
  "math-1-83": { 1: "The recovered R2-and-R3 row is $Y=2$ with R1 outside, both gates shut, rejected. Same count as the given approved candidate, opposite outcome, because the named tie-break is missing. Gate 2 is not 'any two yes-votes.' It is two yes-votes including R1. What would approve this pair? Rewriting gate 2 to ignore names, or dropping the count to $Y\\ge 2$ as gate 1. The stem does neither." },
  "math-1-84": { 4: "The recovered nesting is $S$ inside $W$ inside $C$. If $C$ is false, the whole commercial-use clause is idle, and annual servicing is never asked. Reading that nested half as a standing duty applies a rescue condition to people who never entered the danger the rescue was written for. Non-commercial use never voids the warranty under this clause, so there is nothing for servicing to save. Letter D nested $S$ inside $W$ on the commercial side. This letter nests the rescue inside $C$ itself." },
  "math-1-85": { 2: "The recovered negation is some flight on time or some train delayed, an or of two existentials. The offered double ban 'no delayed flight and no on-time train' is a different, stronger sentence. One on-time flight falsifies the original and does not make the offered sentence true, so the offered sentence cannot be the negation. De Morgan flips and to or; quantifier flip turns all into some-not. Both flips are required. The offered sentence performs neither." },
  "math-1-86": { 1: "The recovered counter-world is empty of game theorists. Modified premises hold, conclusion fails, so the modified argument is invalid. The original's validity used P2 to supply a witness. 'No economists specialize in game theory' removes that supply. Validity is about every world where the premises hold. This world is one of them, and the conclusion is false in it. That is the definition of invalid. The original argument is not this modified one; letter A already found the original valid." },
  "math-1-87": { 3: "The recovered game cannot test the converse, because the team lost. $Q$ is false, so $Q\\Rightarrow P$ is idle, vacuously true in this one game and unsettled as a general rule. Spreading the original's failure onto the converse is a false figure. The four relatives are two pairs. Failure of one pair does not settle the other. A later win is what would test $Q\\Rightarrow P$. This game is not a win." },
  "math-1-88": { 4: "The recovered exception moved the live cutoff to $60$, so $65$ is a B below $70$. Necessity of $70$ in all circumstances is false on this exam. The baseline iff is the no-curve rule. The unless clause replaces it when a curve is applied, and a curve was applied. Freezing $70$ through that clause pretends the exception is decorative. It is not. Letters A through D all use the dropped bar. This letter refuses to ignore it." },
  "math-1-89": { 4: "The recovered Pair 1 is $15$ and $28$, both composite, gcd $1$. Coprime is empty shared primes, not 'one factor is prime.' Plenty of counterexamples exist: $9$ and $4$, $8$ and $9$, $15$ and $28$. The stem already factored the last of those. The false figure would ban Pair 1 after letter A just accepted it as coprime. Those two letters cannot both hold if 'must include a prime' is the definition. It is not the definition." },
  "math-1-90": { 4: "The recovered policy reads timing first. Early cancel never consults usage. Late cancel consults usage only for the nested refund iff. Claiming the $10\\%$ test applies regardless of days treats that nest as a standing duty. It is not. Letter D already moved K to $4$ days and found $15\\%$ unread. This letter is that nesting in general. What would make usage global? Writing it outside both branches. The stem wrote it only in the late paragraph." },
};

for (const t of arr) {
  const map = add[t.id] || {};
  t.tactical_explanations = t.tactical_explanations.map((L, i) => inject(L, map[i] || ""));
  console.log(t.id, t.tactical_explanations.map(wc).join(","));
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
