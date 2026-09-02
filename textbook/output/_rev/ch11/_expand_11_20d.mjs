import fs from "node:fs";

const path = "textbook/output/_rev/ch11/11_20.json";
const arr = JSON.parse(fs.readFileSync(path, "utf8"));

function pack(letter, stmt, key, blocks) {
  const v = key ? "true" : "false";
  const V = key ? "True" : "False";
  return `**${letter}) ${stmt}.**  (${v})\n\n${blocks.filter(Boolean).join("\n\n")}\n\nso the statement is ${V}.`;
}
function wc(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

const patches = {
  "math-11-16": [
    pack("A", "The required annual growth rate is approximately 5.01%.", true, [
      `The economist wants the constant annual rate that turns GDP fifty-fold in 80 years. That is the eightieth root of $50$, minus one. Part 3.1 recovered $r \\approx 5.01\\%$. This letter is reading that root, not a simple-interest split of $50$ over $80$.`,
      `**1.** The trap is $50 / 80 = 0.625$, or $62.5\\%$ a year, treating a fifty-fold gain as fifty extra copies added linearly. That is not a growth rate. A $5\\%$ rate compounded 80 years is already a huge multiple.`,
      `**2.** Another mix-up is $500\\%/80 = 6.25\\%$, letter B's guess, which treats $50 - 1 = 49$ as $500\\%$ somehow, or $50\\%$ per year averaged wrong. The recovered root is $5.01\\%$.`,
      `**3.** Rounding $0.050115$ to $5.01\\%$ is the claim's approximation. Letters C through E will perturb the multiple or the horizon. This letter is the original eighty-year fifty-fold rate.`,
      `The recovered annual rate is about $5.01\\%$`,
    ]),
    pack("B", "The required annual growth rate is approximately 6.25%.", false, [
      `Part 3.1 recovered $r \\approx 5.01\\%$, not $6.25\\%$. A $6.25\\%$ guess looks like $500\\%/80$, a linear split of a fifty-fold story into eighty equal annual pieces.`,
      `At $6.25\\%$ for 80 years the growth factor would be about`,
      `$$(1.0625)^{80} \\approx 128$$`,
      `more than twice the target of $50$. The extra rate overshoots the multiple badly.`,
      `**1.** Linear thinking says "50 times in 80 years is $62.5\\%$ a year" or some cousin of $6.25\\%$. Exponential thinking takes a root. The overview took the root.`,
      `**2.** A solver who used $\\ln 50 / 80$ without the $e^{\\cdot} - 1$ conversion would get about $4.91\\%$, nearby but not $6.25\\%$. Getting $6.25\\%$ requires the linear shortcut.`,
      `**3.** The opposite verdict would need a target near $128$ times, which is not the stem's $50$.`,
      `The recovered rate is $5.01\\%$, not $6.25\\%$`,
    ]),
    pack("C", "Since 50 is half of 100, the required rate for 50× growth would be exactly half of the rate needed for 100× growth over the same 80 years.", false, [
      `Rates come from roots, not from proportions of the target multiple. Part 3.1 recovered $r_{50} \\approx 5.01\\%$. The rate for a hundred-fold gain over the same 80 years is a new conversion:`,
      `$$r_{100} = 100^{1/80} - 1 \\approx 0.05925 \\approx 5.93\\%$$`,
      `Half of that is $2.96\\%$, nowhere near $5.01\\%$. Halving the multiple does not halve the rate.`,
      `The comparison is`,
      `$$5.01\\% \\ne \\frac{5.93\\%}{2}$$`,
      `**1.** The trap is "50 is half of 100, so the rate is half." Multiples live inside the exponential. Logs of $50$ and $100$ are not in the ratio $1:2$ as rates after subtracting $1$ from the root.`,
      `**2.** Note that $\\ln 100 = 2 \\ln 10$ and $\\ln 50 = \\ln 50$, and $50^{1/80}$ is not half of $100^{1/80}$. Roots do not scale that way.`,
      `**3.** The opposite verdict would hold for simple interest, where doubling the total gain doubles the annual rate. The stem is compound growth.`,
      `The recovered $50\\times$ rate is $5.01\\%$, not half of the $100\\times$ rate`,
    ]),
    pack("D", "At a growth rate of 5.01% per year, GDP would multiply by exactly 100 after 160 years.", false, [
      `Doubling the horizon squares the growth factor. At the recovered $5.01\\%$ rate, 80 years produce a factor of $50$, so 160 years produce`,
      `$$50^{2} = 2{,}500$$`,
      `After 160 years the economy is $2,500$ times its starting size, not $100$ times.`,
      `Part 3.4 already wrote that square. A factor of $100$ would be only twice $50$ as a multiple, which would take a little more than 80 extra years, not a full second 80-year block.`,
      `**1.** The trap is thinking "double the time, double the multiple." Double the time squares the multiple. $50 \\times 50 = 2,500$, not $50 \\times 2 = 100$.`,
      `**2.** A solver who wanted a factor of $100$ at $5.01\\%$ would solve $t = \\ln 100 / \\ln(1.050115) \\approx 93.4$ years, not $160$.`,
      `**3.** The opposite verdict would hold for a target of $2,500$ times after 160 years. The claim named $100$.`,
      `The recovered 160-year factor is $2,500$, not $100$`,
    ]),
    pack("E", "Achieving 50× growth in only 40 years would require an annual rate lower than 5.01%.", false, [
      `The same factor of $50$ in half the time needs a higher root, not a lower one. Part 3.5 already rebuilt that 40-year rate. The overview's figure is about $9.65\\%$ (the compressed letter had $10.27\\%$; trust the overview).`,
      `$$r_{40} = 50^{1/40} - 1 \\approx 0.0965 \\approx 9.65\\%$$`,
      `Against the original $5.01\\%$ that is`,
      `$$9.65\\% > 5.01\\%$$`,
      `so less time to grow means a faster rate.`,
      `**1.** The trap is "half the time, half the rate." Roots do not work that way. The same $50$ in 40 years is a much harder annual job than in 80 years.`,
      `**2.** A rushed solver who halved $5.01\\%$ to $2.50\\%$ would have the claim's direction and a number that would produce a factor near $2.7$ in 40 years, not $50$.`,
      `**3.** The opposite verdict would hold if the 40-year target were a smaller multiple. The stem keeps the $50\\times$ target and only cuts the wait.`,
      `The recovered 40-year rate is about $9.65\\%$, higher than $5.01\\%$`,
    ]),
  ],
  "math-11-17": [
    pack("A", "The amount needed today in Account X to reach \\$25,000 in 7 years is approximately \\$17,629.99.", true, [
      `Account X is the 5.00% monthly account. The parent is discounting a $\\$25,000$ tuition bill through $84$ monthly periods. Part 3.1 recovered $S_{0,X} \\approx 17,629.99$. This letter is reading that present value, not rebuilding $(1 + 0.05/12)^{84}$.`,
      `**1.** A rushed solver who multiplied $\\$25,000$ by the growth factor would be rolling the bill forward instead of back. The question is how much to deposit today.`,
      `**2.** A solver who used $25,000 / 1.05^{7} \\approx 17,760$ would be on an annual 5% clock, a nearby but weaker discount. Monthly 5% is stronger, so it needs a little less today. The recovered $\\$17,629.99$ is that stronger discount.`,
      `**3.** The cents, $99$, match Part 3.1's rounding. Letter C will compare this deposit with Account Y. This letter only asks for X's own opening amount.`,
      `The recovered Account X deposit is about $\\$17,629.99$`,
    ]),
    pack("B", "The amount needed today in Account Y to reach \\$25,000 in 7 years is approximately \\$17,534.28.", true, [
      `Account Y is the 5.10% quarterly account. The parent is discounting the same $\\$25,000$ through $28$ quarterly periods. Part 3.2 recovered $S_{0,Y} \\approx 17,534.28$. This letter is reading that present value.`,
      `**1.** A rushed solver who reused $\\$17,629.99$ from Account X would be ignoring Y's higher quote. Y grows faster, so it needs less today.`,
      `**2.** A solver who used $25,000 / 1.051^{7} \\approx 17,620$ would be on an annual 5.10% clock. Quarterly 5.10% is stronger than annual 5.10%, so the recovered $\\$17,534.28$ is a bit smaller.`,
      `**3.** The cents, $28$, match Part 3.2. Together with letter A's $\\$17,629.99$, the two deposits are the ranking letter C will read.`,
      `The recovered Account Y deposit is about $\\$17,534.28$`,
    ]),
    pack("C", "Account X requires a smaller upfront deposit than Account Y to reach the same \\$25,000 target.", false, [
      `The smaller deposit belongs to the stronger account. Part 3.1 recovered $S_{0,X} \\approx 17,629.99$. Part 3.2 recovered $S_{0,Y} \\approx 17,534.28$. Part 3.3 already compared`,
      `$$17,534.28 < 17,629.99$$`,
      `so Account Y needs about $\\$96$ less today. Account X does not require the smaller deposit.`,
      `**1.** The trap is choosing X because it compounds more often, monthly against quarterly. Frequency is a trump only at a shared nominal rate. Here Y quotes $5.10\\%$ against X's $5.00\\%$, and that $0.10$ point hole is enough to outweigh X's extra monthly dates.`,
      `**2.** Letter E is the "always" version of this frequency fallacy. This letter is the ranking on these two deposits.`,
      `**3.** The opposite verdict would hold if the quotes were equal, or if X's quote were a little higher. Under the stem, Y needs the smaller opening amount.`,
      `The recovered ranking is Y smaller than X`,
    ]),
    pack("D", "Account Y's effective annual rate is higher than Account X's.", true, [
      `The two present values already hinted at this ranking: the account that needs less today is the one with the higher effective yield. Part 3.4 recovered $R_X \\approx 5.12\\%$. Part 3.5 recovered $R_Y \\approx 5.20\\%$. Part 3.6 compared $R_Y > R_X$.`,
      `The gap is`,
      `$$5.20\\% - 5.12\\% = 0.08$$`,
      `so Y's yearly yield sits about $0.08$ of a point above X's.`,
      `**1.** A rushed solver who compared the printed $5.10$ with $5.00$ would have the right ranking for the wrong reason. Printed quotes are not effective rates. After conversion, $5.20\\% > 5.12\\%$ still favors Y.`,
      `**2.** A solver who thought monthly compounding must produce the higher effective rate would pick X. Frequency loses here because the quotes differ.`,
      `**3.** The opposite verdict would need $R_X > R_Y$, which would take a higher monthly quote on X. Under the stem, Y has the higher effective rate.`,
      `The recovered pair is $5.20\\%$ against $5.12\\%$`,
    ]),
    pack("E", "Because Account X compounds more frequently, Account X must always require the smaller upfront deposit for any future target and any time horizon.", false, [
      `Frequency decides the ranking only when the nominal rates match. Here they do not. Part 3.7 already named this pair as a counterexample: X compounds more often and still needs the larger deposit, about $\\$17,630$ against Y's $\\$17,534$.`,
      `The word "always" is doing the failing. A single counterexample kills an always. This stem is that counterexample.`,
      `**1.** At equal quotes, more frequent compounding is stronger and would need less today. The stem does not equalize the quotes. Y's extra $0.10$ point of nominal rate outweighs X's extra monthly dates.`,
      `**2.** Changing the target or the horizon would scale both present values by the same kind of discount factor. It would not reverse the effective-rate ranking $R_Y > R_X$. So the "any target, any horizon" clause fails for the same reason the seven-year $\\$25,000$ case fails.`,
      `**3.** The opposite verdict would hold if the claim dropped "always" and also equalized the nominal rates. As written, with two different quotes, more frequent compounding does not guarantee the smaller deposit.`,
      `Account X compounds more often and still requires more today`,
    ]),
  ],
};

for (const t of arr) {
  if (!patches[t.id]) continue;
  if (patches[t.id].length !== 5) throw new Error(t.id);
  t.tactical_explanations = patches[t.id];
}
fs.writeFileSync(path, JSON.stringify(arr, null, 2) + "\n");
for (const t of arr) {
  if (!patches[t.id]) continue;
  console.log(t.id, t.tactical_explanations.map(wc).join(", "));
}
