import fs from "node:fs";

const findInlineEnd = (text, start) => {
  for (let i = start; i < text.length; i += 1) {
    if (text[i] === "$" && text[i - 1] !== "\\") return i;
  }
  return -1;
};

const findDisplayEnd = (text, start) => {
  for (let i = start; i < text.length - 1; i += 1) {
    if (
      text[i] === "$" &&
      text[i + 1] === "$" &&
      text[i - 1] !== "\\"
    ) {
      return i;
    }
  }
  return -1;
};

const normalize = (text) => {
  let output = "";
  let i = 0;
  let changed = 0;

  while (i < text.length) {
    if (
      text[i] === "$" &&
      text[i + 1] === "$" &&
      text[i - 1] !== "\\"
    ) {
      const end = findDisplayEnd(text, i + 2);
      if (end !== -1) {
        const inner = text.slice(i + 2, end);
        const fixed = inner.replace(/\\\$(?=\d)/g, () => {
          changed += 1;
          return "";
        });
        output += `$$${fixed}$$`;
        i = end + 2;
        continue;
      }
    }

    if (text[i] === "$" && text[i - 1] !== "\\") {
      const end = findInlineEnd(text, i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        const fixed = inner.replace(/\\\$(?=\d)/g, () => {
          changed += 1;
          return "";
        });
        output += `$${fixed}$`;
        i = end + 1;
        continue;
      }
    }

    output += text[i];
    i += 1;
  }

  return { text: output, changed };
};

const report = [];
for (const name of ["01_30", "31_60", "61_90", "91_123"]) {
  const path = `textbook/output/ch11_expanded_${name}.json`;
  const data = JSON.parse(fs.readFileSync(path, "utf8"));
  let changed = 0;

  for (const letters of Object.values(data)) {
    for (const [letter, explanation] of Object.entries(letters)) {
      const result = normalize(explanation);
      letters[letter] = result.text;
      changed += result.changed;
    }
  }

  fs.writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  report.push({ path, changed });
}

console.log(JSON.stringify(report, null, 2));
