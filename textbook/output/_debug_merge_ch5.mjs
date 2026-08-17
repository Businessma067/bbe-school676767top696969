import fs from "node:fs";

const src = fs.readFileSync("src/data/math-ch5-linear-equations.ts", "utf8");
const at = src.indexOf("40(3.50) + 25(1.80)");
console.log(JSON.stringify(src.slice(at - 30, at + 160)));

const DISPLAY_RUN = /\$\$([\s\S]*?)\$\$((?:[ \t]*(?:\r?\n|\\n)[ \t]*)+)\$\$([\s\S]*?)\$\$/;
const window = src.slice(at - 40, at + 200);
const m = window.match(DISPLAY_RUN);
console.log("match:", m ? JSON.stringify([m[1], m[2], m[3]]) : "none");
