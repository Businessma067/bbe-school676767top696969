import fs from "node:fs";
import path from "node:path";

const filePath = path.join(
  "C:\\Users\\bubli\\Projects\\bbe-school-fixed",
  "textbook",
  "output",
  "ch5_rightsized_31_45.json",
);

const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
let fixedCurrency = 0;

for (const entry of Object.values(data)) {
  entry.tactical_explanations = entry.tactical_explanations.map((text) =>
    text.replace(/\\{2,}\$(?=\d)/g, () => {
      fixedCurrency += 1;
      return "\\$";
    }),
  );
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ file: filePath, fixedCurrency }, null, 2));
