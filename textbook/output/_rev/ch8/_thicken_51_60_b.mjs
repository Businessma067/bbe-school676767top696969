import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { words } from "./_expand_apply.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function insertBeforeCloser(text, extra) {
  const t = text.trimEnd();
  const idx = t.lastIndexOf("\n");
  return t.slice(0, idx).trimEnd() + "\n\n" + extra.trim() + "\n\n" + t.slice(idx + 1);
}

const extras = {
  "math-8-53": {
    0: `A reinsurer who reported loss as a table of surge heights, without substituting $s(w)$, would still be looking at a cubic in $s$ rather than a three-halves power of wind. The claim is about the composed map.`,
    3: `The leftover slope of the composed rule is $L'(w)=6\\sqrt{w}$. At wind $16$ that slope is $24$; at wind $64$ it is $48$. Later wind is dearer in loss, which is the same $r>1$ story as the doubling factor $2\\sqrt{2}>2$. The first stage alone, with exponent $\\frac{1}{2}$, would have flattened; the cube is what accelerates the index.`,
    4: `At $w=50$ the composed rule is $4\\cdot 50^{\\frac{3}{2}}=4\\cdot 50\\sqrt{50}$. Because $\\sqrt{50}>7$, that product already sits past $1400$, well above a loss of $1000$. The cutoff $50$ is not a near miss on $39.7$; it is the other side of the inverse.`,
  },
  "math-8-54": {
    1: `A linear impact $I\\propto v$ would have made the charge quadratic and the doubling factor $4$, still not $2$. Only a constant impact would have doubled the charge on a doubled order. The logged $6$ basis-point gap between $0.04$ and $0.09$ ADV already forced a square root.`,
  },
  "math-8-55": {
    0: `A change of units from kilograms to grams would rescale the coefficient by $1000^{\\frac{2}{3}}$ and leave the inverse still a power of energy. The opposite verdict would have needed an exponential metabolic rule, which inverts to a logarithm, not to a monomial.`,
  },
  "math-8-57": {
    3: `The same $a=400$ reappears in letter E as a level. This letter is the inversion that produces it. A coefficient of $24$ is locked by $A\\cdot 10=240$; a larger $A$ would have made the doubling array smaller than $400$, possibly a mere doubling of $100$ m², and flipped the letter.`,
  },
  "math-8-58": {
    1: `An inverse-square unit cost, $b=-2$, would have made spend fall as $N^{-1}$. The two milestones $80$ then $40$ over a quadrupling of volume already refuse any $b$ other than $-\\frac{1}{2}$. When the unit-cost exponent sits above $-1$, volume wins and the cheque still grows.`,
  },
  "math-8-60": {
    1: `The usual unit-elastic boundary is leftover exponent $0$ on $R$, which would have needed demand exponent $-1$. The stem is $p^{-3}$. A $10\\%$ indexation would raise the till only on the inelastic side of that boundary. Along this curve it cuts the till, which is the same fact letter E reads against a reversed slogan.`,
  },
};

const fp = path.join(__dirname, "51_60.json");
const arr = JSON.parse(fs.readFileSync(fp, "utf8"));
for (const t of arr) {
  const ex = extras[t.id];
  if (!ex) continue;
  for (const [j, extra] of Object.entries(ex)) {
    t.tactical_explanations[Number(j)] = insertBeforeCloser(
      t.tactical_explanations[Number(j)],
      extra
    );
  }
}
fs.writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  const wc = t.tactical_explanations.map(words);
  console.log(t.id, wc.join(" "));
}
