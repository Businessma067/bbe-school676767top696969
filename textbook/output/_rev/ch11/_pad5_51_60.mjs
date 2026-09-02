import fs from "node:fs";
const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));
const lookup = {
  "math-11-51":[1,2],"math-11-53":[0],"math-11-54":[1],
  "math-11-55":[0,1],"math-11-58":[0],"math-11-60":[0,1],
};

function splice(body, extraText) {
  if (!extraText) return body;
  const lines = body.replace(/\r\n/g,"\n").trimEnd().split("\n");
  const closer = lines.pop();
  while (lines.length && !lines[lines.length-1].trim()) lines.pop();
  return [...lines,"",extraText.trim(),"",closer].join("\n");
}
function words(s){return s.split(/\s+/).filter(Boolean).length;}

const extra = {
"math-11-52":[`The covenant conversation should quote $\\$35,264$ as the known piece, then $\\$64,736$ as the hole, then a face that fills the hole. Quoting $\\$42,000$ as known skips the discount and understates every later face. The recovered PDV of the existing receivable is $\\$35,264.01$.`,"","","",""],
"math-11-53":["","",
`Approximately more than $\\$11,000$ would have required $K$ above $\\$46,000$. The recovered $K$ is $\\$45,393$. The threshold fails by $\\$607$, which is not noise relative to a $\\$11,000$ cutoff. The recovered premium is not more than $\\$11,000$.`,"",""],
"math-11-54":[
`Corner solutions are first-order too: if $P'<rP$ at every $t\\ge 0$, the maximum of $f$ is at the left endpoint. That is this wine at $8\\%$. The recovered $t^{*}$ is $0$, sell now.`,
"",
`Net decay at $3\\%$ per year for ten years is $e^{-0.30}\\approx 0.7408$ times $\\$40,000$. That product is $\\$29,633$, about $\\$10,367$ below selling now. The recovered ten-year PDV is $\\$29,632.73$.`,
`Universal waiting-helps claims need $r$ below growth at every rate named. The stem's $8\\%$ is above growth. The recovered $f(0)>f(10)$ kills the universal.`,
`The $4\\%$ hypothetical is the other corner: wait. Immediate sale would be optimal only if $r$ still exceeded $5\\%$. It does not. The recovered $4\\%$ $f$ increases in $t$.`],
"math-11-55":["","", "",
`Opportunity cost is the comparative static. Raise $r$ and standing timber competes with a better bank account, so you cut sooner. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is negative, so $t^{*}$ shortens, it does not lengthen.`,
`Confirming a maximum is a sign check on $P''-rP'$. The recovered sign is negative. Positive $P''$ alone would have suggested the wrong test. The recovered second-order condition holds.`],
"math-11-56":[
`Eighteen years and a fraction is the rotation this $9\\%$ orchard supports. Later letters value $f$, sign curvature, and differentiate $t^{*}$ at that date. The recovered $t^{*}$ is $18.22$ years.`,
`About $\\$287,000$ today versus $\\$1.48$ million on the stump is the discounting. The claimed $\\$250,000$ is a round understatement of that present value. The recovered $f(t^{*})$ is $\\$287,378$.`,
`The sign of $P''-rP'$ is the whole letter. Magnitude $6{,}000$ without the minus is $P''$ alone. The recovered combination is $-6{,}000$.`,
`Sign of the sensitivity follows the sign of the denominator. Negative denominator, negative $\\mathrm{d}t^{*}/\\mathrm{d}r$. The recovered sensitivity is $-246.91$.`,
`Forty years and a fraction at $4.5\\%$, not $36.44$. The $-4$ shift is why doubling fails. The recovered $4.5\\%$ $t^{*}$ is $40.44$ years.`],
"math-11-57":[
`Large addend, long wait: $\\$189,893$ of a $\\$250,000$ exit after $2.5$ years of $11\\%$. Combined with letter B this will not reach $\\$230,000$. The recovered exit PDV is $\\$189,893.03$.`,
`Small addend, short wait: $\\$37,514$ of a $\\$40,000$ side payment after seven months of $11\\%$. Combined with letter A this will not reach $\\$230,000$. The recovered side-payment PDV is $\\$37,513.95$.`,
`Add recovered addends only. $\\$227,407$ is the pair. $\\$230,000$ is a round target the pair misses by $\\$2,593$. The recovered combined PDV is $\\$227,407$.`,
`More than $10\\%$ off $\\$40,000$ is more than $\\$4,000$ off. The recovered off-amount is $\\$2,486$. The recovered share is $6.2\\%$, not more than $10\\%$.`,
`Faces $\\$250,000$ and $\\$40,000$ become the present value when $r=0$. The recovered zero-rate combined PDV is $\\$290,000$.`],
"math-11-58":["",
`Implied $10.44\\%$ is the base for the $13.06\\%$, $15.67\\%$, and $5.22\\%$ neighbours in later letters. Linear $8.33\\%$ is not that base. The recovered implied continuous rate is $10.44\\%$.`,
"",
`Three years at the same $0.625$ factor is a $15.67\\%$ continuous rate, above $10.44\\%$, not below. The recovered three-year rate is higher.`,
`Nine years at the same $0.625$ factor is a $5.22\\%$ continuous rate, half of $10.44\\%$. The recovered $9$-year rate is $5.22\\%$.`],
"math-11-59":[
`General first, particular second. $t^{*}=2/r-k$ is general. Letter B is particular. $A$ is absent from both. The recovered formula is $t^{*}=2/r-k$.`,
`Particular: $21.67$ years at $7.5\\%$ with $k=5$. Unused: $A=1{,}200$. The recovered harvest date is $21.67$ years.`,
`Particular present value: about $\\$168,031$, not $\\$195,500$. Stumpage is $\\$853,333$. The recovered $f(t^{*})$ is $\\$168,031$.`,
`Larger $k$, shorter wait, one-for-one. The recovered $k=8$ date is $18.67$ years, shorter than $21.67$.`,
""],
"math-11-60":["","",
`First addend $\\$20,110$ is $30{,}000$ times $0.6703$. The claimed $\\$21,500$ would need a factor near $0.717$. The recovered five-year PDV is $\\$20,109.60$.`,
`Second addend $\\$24,713$ is $55{,}000$ times $0.4493$. The claimed $\\$26,000$ would need a factor near $0.473$. The recovered ten-year PDV is $\\$24,713.09$.`,
`Sum of recovered addends $\\$44,823$. Sum of claimed addends $\\$47,500$. Sum of faces $\\$85,000$. The recovered combined PDV is $\\$44,823$.`],
};

for (const t of arr) {
  const L = lookup[t.id] || [];
  const ex = extra[t.id] || ["","","","",""];
  t.tactical_explanations = t.tactical_explanations.map((e,i)=>{
    const nl=e.indexOf("\n");
    let body=e.slice(nl+1).replace(/^\n+/,"");
    if (!L.includes(i) && words(e)<350 && ex[i]) body=splice(body, ex[i]);
    return e.slice(0,nl)+"\n\n"+body;
  });
}
fs.writeFileSync(file, JSON.stringify(arr,null,2)+"\n");
for (const t of arr) {
  const L=lookup[t.id]||[];
  console.log(t.id, t.tactical_explanations.map((e,i)=>(L.includes(i)?"L":words(e)<350?"!":"")+words(e)).join(", "));
}
