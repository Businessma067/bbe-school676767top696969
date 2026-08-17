import fs from "node:fs";

const unescapeTemplate = (raw) =>
  raw
    .replaceAll("\\`", "`")
    .replaceAll("\\${", "${")
    .replaceAll("\\\\", "\\");

const source = fs.readFileSync("src/data/math-ch11-financial.ts", "utf8");
for (const [n, letter, range] of [
  [77, "D", "61_90"],
  [80, "E", "61_90"],
  [122, "E", "91_123"],
]) {
  const re = new RegExp(
    "id: `math-11-" +
      n +
      "`,[\\s\\S]*?statements: \\[([\\s\\S]*?)\\],\\r?\\n\\s*answer_key: \\[([^\\]]+)\\]",
  );
  const match = source.match(re);
  const statements = [
    ...match[1].matchAll(/`((?:\\`|[^`])*)`/g),
  ].map((m) => unescapeTemplate(m[1]));
  const answers = match[2]
    .split(",")
    .map((value) => value.trim() === "true");
  const data = JSON.parse(
    fs.readFileSync(`textbook/output/ch11_expanded_${range}.json`, "utf8"),
  );
  const candidate = data[String(n)][letter].split("\n")[0];
  const i = "ABCDE".indexOf(letter);
  const expected = `**${letter}) ${statements[i]}**  (${answers[i] ? "true" : "false"})`;
  let position = 0;
  while (
    position < expected.length &&
    expected[position] === candidate[position]
  ) {
    position += 1;
  }
  console.log({
    id: `T${n}${letter}`,
    expected,
    candidate,
    position,
    expectedTail: expected.slice(position, position + 50),
    candidateTail: candidate.slice(position, position + 50),
  });
}
