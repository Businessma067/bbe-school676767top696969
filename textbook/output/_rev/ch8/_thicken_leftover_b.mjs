import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words, spliceBeforeCloser } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fp = path.join(__dirname, "81_90.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));

const extras = {
  "math-8-85": {
    4: "Twelve metres is the fourfold of the $3$ m survey, because a factor $\\frac{1}{16}$ on an inverse square is a fourfold on distance. Fifteen metres is past that barrier.",
  },
  "math-8-86": {
    0: "Squaring $r=15 t^{\\frac{2}{3}}$ produces $225 t^{\\frac{4}{3}}$, then times $\\pi$. That is one monomial in $t$, leftover exponent $\\frac{4}{3}$.",
  },
  "math-8-87": {
    1: "A linear weir, leftover exponent $1$, would have doubled discharge with doubled head. The gauging and every rewrite refuse that flatten. The leftover exponent stays $\\frac{3}{2}$. Checking $Q(1)=16$ against $Q(0.25)=2$ is an eightfold discharge on a fourfold head, $4^{\\frac{3}{2}}=8$, which is the same outrunning in metres.",
    4: "Four metres is a sixteenfold of the gauged $0.25$ m head. A three-halves power turns that into a $64$-fold discharge, $2\\times 64=128$, past $100$. The $100$ cutoff is a nearby figure, not a rounding of $128$.",
  },
  "math-8-88": {
    0: "Matching $2^{r}=4$ is leftover exponent $2$, not a percentage shortcut $300/100=3$. A cube would have been a $700\\%$ rise on a doubling. The note is $300\\%$, a square.",
    1: "A $100\\%$ rise on a doubling would have been leftover exponent $1$. The note is $300\\%$, leftover exponent $2$, fuel $\\times 4$.",
  },
};

for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = spliceBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (extras[t.id]) console.log(t.id, t.tactical_explanations.map(words).join(" "));
}
