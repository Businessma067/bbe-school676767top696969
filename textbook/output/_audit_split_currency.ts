import { __splitMathForAudit } from "../../src/components/FlashcardMath";

const cases: { name: string; input: string }[] = [
  {
    name: "OLD screenshot bug",
    input:
      "Here $a_0$ = -$8,000 < 0 and $a_1$ = $9,600 > 0, so the condition is satisfied.",
  },
  {
    name: "NEW escaped math",
    input:
      "Here $a_0 = -\\$8{,}000 < 0$ and $a_1 = \\$9{,}600 > 0$, so the condition is satisfied.",
  },
  {
    name: "NEW steps Identify",
    input:
      "Identify $a = \\$8{,}000$ (amount invested) and $b = \\$9{,}600$ (amount returned).",
  },
  {
    name: "given S0",
    input: "• $S_0 = \\$6{,}000$",
  },
];

for (const c of cases) {
  const parts = __splitMathForAudit(c.input);
  console.log("---", c.name);
  console.log(
    parts.map((p) => `${p.type}:${JSON.stringify(p.value)}`).join(" | "),
  );
  const glued = parts.some(
    (p) => p.type !== "text" && /\band\b/i.test(p.value),
  );
  console.log(glued ? "FAIL: English inside math" : "OK");
}
