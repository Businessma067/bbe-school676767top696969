import fs from "node:fs";

const wanted = process.argv.slice(2);
for (let b = 1; b <= 6; b++) {
  const input = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_batch_${b}.json`, "utf8"));
  const output = JSON.parse(fs.readFileSync(`textbook/output/_ch11_ov_out_${b}.json`, "utf8"));
  input.forEach((item, i) => {
    if (!wanted.includes(item.caseId)) return;
    const text = output[i].text;
    console.log(`\n########## ${item.caseId} (batch ${b}) ##########`);
    console.log("--- OLD opening ---");
    console.log(JSON.stringify(item.text.split("**Part")[0]));
    console.log("--- NEW opening ---");
    console.log(JSON.stringify(text.split("**Part")[0]));
    console.log("--- NEW full ---");
    console.log(text.slice(0, 1600));
  });
}
