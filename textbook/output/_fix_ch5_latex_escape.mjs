import fs from "node:fs";

const paths = [
  "textbook/output/ch5_rightsized_01_15.json",
  "textbook/output/ch5_rightsized_16_30.json",
  "textbook/output/ch5_rightsized_31_45.json",
  "textbook/output/ch5_rightsized_46_60.json",
];

const report = [];
for (const path of paths) {
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  let fixed = 0;
  for (const entry of Object.values(data)) {
    entry.tactical_explanations = entry.tactical_explanations.map((text) =>
      // `\\frac` reaches KaTeX as a line break plus stray letters; collapse to `\frac`.
      text.replace(/\\{2}(?=[a-zA-Z])/g, () => {
        fixed += 1;
        return "\\";
      }),
    );
  }
  if (fixed > 0) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
  }
  report.push({ path, fixed });
}

console.log(JSON.stringify(report, null, 2));
