/**
 * Strip book-specific character/org names from ch2/ch3 banks.
 * Keep general theory terms (e.g. printed circuit boards as a manufactured good is fine).
 */
import fs from "node:fs";

const files = [
  "src/data/economics-cases-ch2-subtopics.json",
  "src/data/economics-cases-ch3-subtopics.json",
];

function scrub(text) {
  let s = String(text);
  // Orgs / brands from the narrative
  s = s.replace(/\bWorld Wildlife Fund\b/gi, "a wildlife conservation organisation");
  s = s.replace(/\bWWF\b/g, "a wildlife conservation organisation");
  s = s.replace(/\bGreenpeace\b/gi, "an environmental campaign organisation");
  s = s.replace(/\bRed Cross\b/gi, "a humanitarian relief organisation");
  s = s.replace(/\bRuntastic\b/gi, "a fitness-app company");
  s = s.replace(/\bAdidas\b/gi, "a large sportswear company");
  s = s.replace(/\bFuhrmann\b/gi, "the textbook");
  // Characters
  s = s.replace(/\bTina'?s and Steve'?s\b/gi, "a small local IT-support firm's");
  s = s.replace(/\bTina and Steve\b/gi, "two local IT-support entrepreneurs");
  s = s.replace(/\bTina & Steve\b/gi, "two local IT-support entrepreneurs");
  s = s.replace(/\bTina\b/g, "one of the co-founders");
  s = s.replace(/\bSteve\b/g, "the other co-founder");
  // AT&S variants
  s = s.replace(/\bAT&S\b/gi, "an electronics-components manufacturer");
  s = s.replace(/\baT&S\b/gi, "an electronics-components manufacturer");
  // Fix awkward leftovers
  s = s.replace(/\ban electronics-components manufacturer Leoben\b/gi, "an electronics-components plant in Leoben");
  s = s.replace(/\bConsider how an electronics-components manufacturer\b/gi, "Consider how an electronics-components manufacturer");
  s = s.replace(/\bthe textbook notes\b/gi, "economic analysis notes");
  s = s.replace(/\bthe textbook\b/gi, "standard economic reasoning");
  // Collapse doubled articles
  s = s.replace(/\ba an /gi, "an ");
  s = s.replace(/\ban an /gi, "an ");
  s = s.replace(/\bthe an /gi, "an ");
  s = s.replace(/\bthe a /gi, "a ");
  return s;
}

function stillDirty(s) {
  return /\b(AT&S|Tina|Steve|Red Cross|WWF|World Wildlife|Greenpeace|Runtastic|Adidas|Fuhrmann)\b/i.test(
    s,
  );
}

let total = 0;
for (const f of files) {
  const cases = JSON.parse(fs.readFileSync(f, "utf8"));
  let changed = 0;
  for (const c of cases) {
    const before = JSON.stringify(c);
    c.title = scrub(c.title);
    c.context = scrub(c.context);
    c.statements = c.statements.map(scrub);
    c.tactical_explanations = c.tactical_explanations.map(scrub);
    // Title case cleanup if scrub made lowercase mid-title mess — leave as is
    if (JSON.stringify(c) !== before) changed++;
  }
  // second pass report leftovers
  const left = [];
  for (const c of cases) {
    const blob = JSON.stringify(c);
    if (stillDirty(blob)) left.push(c.case_id);
  }
  fs.writeFileSync(f, JSON.stringify(cases, null, 2) + "\n");
  console.log(f, "cases touched", changed, "still dirty", left.length, left.slice(0, 20));
  total += left.length;
}

process.exit(total ? 1 : 0);
