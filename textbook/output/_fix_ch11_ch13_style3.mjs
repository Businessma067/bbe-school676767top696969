import fs from "node:fs";

const PATH = "src/data/math-ch11-financial.ts";
let s = fs.readFileSync(PATH, "utf8");

// Fix mangled "gives $R = nominal rate $= 7.20\%$"
s = s.replace(
  /\$([A-Za-z][A-Za-z0-9_]*) = nominal rate \$=\s*([0-9.]+)\\\%\$/g,
  "$$$1 = $2\\\\%$ (the nominal rate)",
);
s = s.replace(
  /\$([A-Za-z][A-Za-z0-9_]*) = nominal rate \$=\s*([0-9.]+)\\\%/g,
  "$$$1 = $2\\\\%",
);

function balanceDollars(body) {
  const n = (body.match(/\$/g) || []).length;
  if (n % 2 === 1) {
    if (body.trimEnd().endsWith("$")) {
      // odd but ends with $ — likely missing open; prepend $ after step head handled elsewhere
      return body;
    }
    return body.replace(/([.!]?)(\s*)$/, "$$$1$2");
  }
  return body;
}

function fixLine(line) {
  if (!line.includes("$=")) return line;

  const m = line.match(/^(\*\*\d+\.\*\*\s*)([\s\S]*)$/);
  const head = m ? m[1] : "";
  let body = m ? m[2] : line;

  // "At δ $=" / "At r $="
  body = body.replace(/\bAt δ \$= /g, "At $\\\\delta = ");
  body = body.replace(/\bAt ([A-Za-z]) \$= /g, "At $$$1 = ");

  // ": t $=" / ": |k| $=" / ": 10,000 $="
  body = body.replace(
    /:\s*([0-9|A-Za-zδ\\][^$=\n]{0,48}?) \$= /g,
    (full, expr) => {
      const e = expr.trim();
      if (/\b[a-z]{5,}\b/.test(e) && !/[0-9\\]/.test(e)) return `: ${e}: $`;
      return `: $${e} = `;
    },
  );

  // Remaining `$=` — split label vs math
  let guard = 0;
  while (body.includes("$=") && guard++ < 20) {
    body = body.replace(
      /(^|;\s*)([^$;\n]{1,120}?) \$= /,
      (full, sep, left) => {
        const L = left.trim();
        const hasProse =
          /\b(?:rate|gap|growth|interest|jump|sum|ratio|terms|loss|projection|combination|extraction|series|dividing|sides|option|offer|account|fund|periodic|nominal|effective|balance|value|deposit|difference|target|extra|first|second|total|quarterly|monthly|annual|doubling|tripling|present|future|naive|linear|infinite|constant|valid|convergent)\b/i.test(
            L,
          ) || /[a-z]{4,}.+[a-z]{4,}/i.test(L);
        if (hasProse && !/^[\d|\\]/.test(L)) {
          return `${sep}${L}: $`;
        }
        // Math expression: wrap left in $
        if (L.startsWith("$")) {
          // already in math — just drop the scar `$=` → `=`
          return `${sep}${L} = `;
        }
        return `${sep}$${L} = `;
      },
    );
  }

  // Clean "$$" accidents from wrapping
  body = body.replace(/\$\$+/g, "$$");
  // Prefer single $ for inline (Ch13 uses $$ only for display blocks on own lines)
  body = body.replace(/\$\$(?=[^$\n])/g, "$");

  body = balanceDollars(body);

  return m ? head + body : body;
}

s = s
  .split("\n")
  .map((line) => (line.includes("$=") ? fixLine(line) : line))
  .join("\n");

// Final sweep: any remaining `$=` → ` = ` inside existing math, or `: $` after words
s = s.replace(/ \$= /g, ": $");

// Fix double colons
s = s.replace(/:\s*:/g, ":");

// Fix "$R = 7.20\%$ (the nominal rate)$" double close
s = s.replace(/\\\%\$ \(the nominal rate\)\$/g, "\\\\%$ (the nominal rate)");

fs.writeFileSync(PATH, s);

const { MATH_CH11_FINANCIAL: T } = await import(
  "../../src/data/math-ch11-financial.ts?" + Date.now()
);
let labelEq = 0;
let broken = 0;
let text = 0;
const samples = [];
const oddDollar = [];
for (const t of T) {
  const blob = [t.solution_overview || "", ...t.tactical_explanations].join("\n");
  const m = blob.match(/\*\*\d+\.\*\*[^\n]*\$=/g) || [];
  labelEq += m.length;
  for (const x of m) if (samples.length < 15) samples.push(`${t.id}: ${x.slice(0, 110)}`);
  if (/\$[A-Za-z][A-Za-z0-9_]*\$\s*=/.test(blob)) broken++;
  text += (blob.match(/\\text\{/g) || []).length;
  for (const line of blob.split("\n")) {
    const c = (line.match(/\$/g) || []).length;
    if (c % 2 === 1 && oddDollar.length < 12) {
      oddDollar.push(`${t.id}: (${c}) ${line.slice(0, 100)}`);
    }
  }
}
console.log("---11-1---\n" + T[0].solution_overview.split("Part 3")[1]?.slice(0, 650));
console.log("---11-3---\n" + T[2].solution_overview.split("Part 3")[1]?.slice(0, 500));
console.log(JSON.stringify({ parse: T.length, labelEq, broken, text, samples, oddDollar }, null, 2));
