import fs from "fs";
import path from "path";

const BOILER = [
  "Linear interpolation between two dollar amounts ignores that each extra year compounds on a larger base. The opposite verdict would require simple interest, which is not the model here.",
  "A solver who compared face amounts without discounting, or who added rates instead of compounding them, would agree with the wording. The overview's conversion is what blocks that reading.",
];

const LINEAR = {
  "math-8-23:A":
    "A square-root campaign grows more slowly than the budget; twice the spend is not twice the revenue.",
  "math-8-65:C":
    "A square law on span makes a longer beam sag four times as far, not twice as far.",
  "math-8-77:C":
    "Mass scales with the cube of height, so a twice-as-tall bell is eight times as heavy, not twice as heavy.",
  "math-8-84:B":
    "A fourth-power pipe law turns a doubled radius into a sixteenfold flow, not a doubled flow.",
  "math-8-91:B":
    "A square-root humidity law will not keep evaporation in step with the deficit; twice the deficit is not twice the loss.",
};

let stripped = 0;
let linear = 0;

for (const ch of ["ch1", "ch5", "ch8", "ch11"]) {
  const dir = path.join("textbook/output/_rev", ch);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
    const fp = path.join(dir, f);
    const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
    let changed = false;
    for (const t of arr) {
      t.tactical_explanations = t.tactical_explanations.map((e, i) => {
        let next = e;
        for (const b of BOILER) {
          if (next.includes(b)) {
            next = next.split(b).join("").replace(/\n{3,}/g, "\n\n").replace(/[ \t]+\n/g, "\n").trimEnd();
            stripped++;
            changed = true;
          }
        }
        const key = `${t.id}:${"ABCDE"[i]}`;
        if (LINEAR[key] && next.includes("Linear thinking is the trap.")) {
          next = next.replace("Linear thinking is the trap.", LINEAR[key]);
          linear++;
          changed = true;
        }
        return next;
      });
    }
    if (changed) fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  }
}

console.log("stripped", stripped, "linear replaced", linear);
