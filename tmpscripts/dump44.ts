import { MATH_CH4_EXP_LOG } from "../src/data/math-ch4-exp-log";
import fs from "node:fs";
fs.writeFileSync("/tmp/ch44.json", JSON.stringify(MATH_CH4_EXP_LOG, null, 1));
console.log(MATH_CH4_EXP_LOG.length);
