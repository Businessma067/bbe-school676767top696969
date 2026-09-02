import { readFileSync, writeFileSync } from "fs";

const patches = [
  {
    file: "01_10.json",
    id: "math-5-6",
    i: 4,
    old: "A solver who used five times the $30$-chair average $322$ would get $1610$, wait, $5 \\times 322 \\times 2 = 3220$, nearby but not the same.",
    neu: "A solver who used five times the $30$-chair average $322$ on both grades would get $5 \\times 322 \\times 2 = 3220$, nearby but not the same.",
  },
  {
    file: "21_30.json",
    id: "math-5-24",
    i: 3,
    old: "Low usage favours the plan with the fee and the shallower rate. High usage favours that same standard plan once the $\\$33$ is diluted. Wait: actually high usage favours the shallower rate, which is standard at $0.21$ versus Solar at $0.29$. Solar only wins below $412.5$ units, where avoiding the $\\$33$ fee outweighs the steeper rate.",
    neu: "Low usage can favour Solar, because avoiding the $\\$33$ fee outweighs the steeper $0.29$ rate. High usage favours the shallower standard rate $0.21$. Solar only wins below $412.5$ units.",
  },
  {
    file: "31_40.json",
    id: "math-5-37",
    i: 4,
    old: "A solver who used $1.555/16$, counting only Alvarez's $13$ plus Bianchi's wait, or $4+9=13$ and $7+3=10$, wait $23$ is correct.",
    neu: "A solver who used $1.555/16$, counting Alvarez's $4+9=13$ hours only, would overstate the average.",
  },
  {
    file: "51_60.json",
    id: "math-5-53",
    i: 4,
    old: "Job 1 is relatively stud-heavier, and stud waste is $12\\%$ while drywall waste is $8\\%$, wait: Job 1 has $200$ studs versus $150$ sheets, Job 2 has $350$ versus $175$, so Job 2 is actually more stud-heavy in count ratio $350/175=2$ versus $200/150 \\approx 1.33$. Studs have the higher waste rate, so Job 2's waste percentage of usable cost... hmm let me not overcomplicate. The arithmetic already shows Job 1's percentage is smaller.",
    neu: "Job 2 has the higher stud-to-sheet count ratio, $350/175=2$ versus Job 1's $200/150 \\approx 1.33$, and studs carry the higher waste rate of $12\\%$ against drywall's $8\\%$. That mix difference is why Job 2's waste percentage of usable cost sits slightly higher. The arithmetic already shows Job 1's percentage is smaller.",
  },
];

for (const p of patches) {
  const fp = new URL("./" + p.file, import.meta.url);
  const arr = JSON.parse(readFileSync(fp, "utf8"));
  const t = arr.find((x) => x.id === p.id);
  const s = t.tactical_explanations[p.i];
  if (!s.includes(p.old)) {
    console.log("MISS", p.id, p.i);
    const idx = s.toLowerCase().indexOf("wait");
    console.log("context:", JSON.stringify(s.slice(Math.max(0, idx - 80), idx + 120)));
    continue;
  }
  t.tactical_explanations[p.i] = s.replace(p.old, p.neu);
  writeFileSync(fp, JSON.stringify(arr, null, 2) + "\n");
  console.log("fixed", p.id);
}
