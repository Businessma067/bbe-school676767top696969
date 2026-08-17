import fs from "fs";
const src = fs.readFileSync("src/data/math-ch1-logic.ts", "utf8");
const needles = [
  "comes free with it",
  "60 is right",
  "K does not pass",
  "L does not pass either",
  "The filter hides M",
  "N is hidden too",
  "shopper actually sees",
  "sufficient condition for",
  "forbids $Q$ from differing",
  "R is true as well",
  "different clothing",
  "P gets the discount",
  "The value checks out",
  "A faithful rewording",
  "Flight 305 is cancelled today",
  "works overtime today",
  "The inference is valid",
  "The symbolisation is correct",
  "N is eligible",
  "one counterexample settles",
  "lizard argument is sound",
  "does not guarantee this",
  "this must hold too",
  "No license",
  "Such a pilot exists",
  "condition holds at",
  "no reasoning required",
  "Y is a liar",
  "description is accurate",
  "M's claim is paid",
];
for (const n of needles) {
  let idx = 0;
  let c = 0;
  while ((idx = src.indexOf(n, idx)) !== -1) {
    c++;
    const start = Math.max(0, idx - 50);
    const end = Math.min(src.length, idx + n.length + 30);
    console.log("---", JSON.stringify(n), "#" + c, "at", idx);
    console.log(JSON.stringify(src.slice(start, end)));
    idx += n.length;
  }
  if (c === 0) console.log("MISSING", n);
}
