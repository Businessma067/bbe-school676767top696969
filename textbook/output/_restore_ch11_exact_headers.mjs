import fs from "node:fs";

for (const name of ["01_30", "31_60", "61_90", "91_123"]) {
  const outputPath = `textbook/output/ch11_expanded_${name}.json`;
  const targetPath = `textbook/output/_ch11_expand_targets_${name}.json`;
  const output = JSON.parse(fs.readFileSync(outputPath, "utf8"));
  const targets = JSON.parse(fs.readFileSync(targetPath, "utf8"));
  let restored = 0;

  for (const [task, letters] of Object.entries(output)) {
    for (const [letter, explanation] of Object.entries(letters)) {
      const target = targets[task].letters[letter];
      const exactHeader = `**${letter}) ${target.statement}**  (${target.verdict})`;
      const separator = explanation.indexOf("\n\n");
      const body =
        separator === -1 ? explanation : explanation.slice(separator + 2);
      const rebuilt = `${exactHeader}\n\n${body}`;
      if (rebuilt !== explanation) restored += 1;
      letters[letter] = rebuilt;
    }
  }

  fs.writeFileSync(
    outputPath,
    `${JSON.stringify(output, null, 2)}\n`,
    "utf8",
  );
  console.log({ outputPath, restored });
}
