import fs from "node:fs";
import katex from "katex";

const out = JSON.parse(
  fs.readFileSync("textbook/output/_ch11_textcmd_out_4.json", "utf8"),
);

const hasProseWords = (s) => /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(s);
const errs = [];
let displays = 0;
let inlines = 0;

out.forEach((o, i) => {
  for (const m of o.text.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
    displays++;
    const src = m[1].trim();
    if (hasProseWords(src)) errs.push(`${i} display would print raw: ${src}`);
    try {
      katex.renderToString(src, { displayMode: true, throwOnError: true, strict: "ignore" });
    } catch (e) {
      errs.push(`${i} katex display error: ${src} :: ${e.message}`);
    }
  }
  const rest = o.text.replace(/\$\$[\s\S]*?\$\$/g, "\u0000");
  for (const m of rest.matchAll(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g)) {
    inlines++;
    const src = m[1].trim();
    if (hasProseWords(src)) errs.push(`${i} inline would print raw: ${src}`);
    const noCmd = src.replace(/\\[a-zA-Z]+/g, " ");
    if (
      /\b(?:and|or|the|for|with|from|that|which|this|into|onto|than|then|when|where|while|also|but|not|amount|invested|returned|matching|statement|condition|satisfied|exists)\b/i.test(
        noCmd,
      )
    ) {
      errs.push(`${i} inline has glue word: ${src}`);
    }
    try {
      katex.renderToString(src.replace(/\\\$/g, "\\$"), {
        displayMode: false,
        throwOnError: true,
        strict: "ignore",
      });
    } catch (e) {
      errs.push(`${i} katex inline error: ${src} :: ${e.message}`);
    }
  }
});

console.log(`displays: ${displays}  inlines: ${inlines}`);
console.log(errs.length ? errs.join("\n") : "KATEX + RENDERER CHECKS PASS");
