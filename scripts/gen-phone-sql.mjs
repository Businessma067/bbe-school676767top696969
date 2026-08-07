/**
 * Generate small per-subtopic SQL files (UPDATE only) for phone-friendly Supabase runs.
 * Output: scripts/sql-phone/<subsection>.sql
 */
import fs from "node:fs";
import path from "node:path";

const OUT = "scripts/sql-phone";

function esc(s) {
  return String(s).replace(/'/g, "''");
}
function arr(a) {
  return "ARRAY[" + a.map((x) => `'${esc(x)}'`).join(", ") + "]";
}

fs.mkdirSync(OUT, { recursive: true });

const chapters = [2, 3, 4, 5, 6];
const index = ["# Phone-friendly SQL updates", "", "Run **one file at a time** in Supabase → SQL → New query.", "", "| # | Subtopic | File |", "|---|---|---|"];

let n = 0;
for (const ch of chapters) {
  const cases = JSON.parse(
    fs.readFileSync(`src/data/economics-cases-ch{ch}-subtopics.json`.replace("{ch}", String(ch)), "utf8"),
  );
  const bySub = new Map();
  for (const c of cases) {
    const list = bySub.get(c.subsection) ?? [];
    list.push(c);
    bySub.set(c.subsection, list);
  }

  for (const [sub, rows] of [...bySub.entries()].sort((a, b) => a[0].localeCompare(b[0], "en", { numeric: true }))) {
    rows.sort((a, b) => a.case_id.localeCompare(b.case_id, "en", { numeric: true }));

    const chunks = [];
    const CHUNK = 25;
    if (rows.length <= CHUNK) {
      chunks.push({ label: sub, rows });
    } else {
      for (let i = 0; i < rows.length; i += CHUNK) {
        const part = Math.floor(i / CHUNK) + 1;
        const total = Math.ceil(rows.length / CHUNK);
        chunks.push({
          label: total > 1 ? `${sub}-part${part}` : sub,
          rows: rows.slice(i, i + CHUNK),
        });
      }
    }

    for (const chunk of chunks) {
      const lines = [
        `-- Update expanded explanations for ${chunk.label} (${chunk.rows.length} cases).`,
        `-- Safe to re-run: only updates tactical_explanations.`,
        "",
      ];
      for (const c of chunk.rows) {
        lines.push(
          `UPDATE public.economics_cases SET tactical_explanations = ${arr(c.tactical_explanations)} WHERE case_id = '${esc(c.case_id)}' AND tier = 'full';`,
        );
      }
      lines.push("");
      const file = `${chunk.label}.sql`;
      const outPath = path.join(OUT, file);
      fs.writeFileSync(outPath, lines.join("\n"));
      const kb = Math.round(fs.statSync(outPath).size / 1024);
      n += 1;
      index.push(`| ${n} | ${chunk.label} | [\`${file}\`](./${file}) (~${kb} KB) |`);
      console.log(file, chunk.rows.length, `${kb} KB`);
    }
  }
}

index.push("", `**Total: ${n} files.** Do them in order when possible (2.1 → 6.5).`);
fs.writeFileSync(path.join(OUT, "README.md"), index.join("\n") + "\n");
console.log("wrote", n, "files to", OUT);
