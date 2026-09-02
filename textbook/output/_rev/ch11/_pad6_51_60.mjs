import fs from "node:fs";
const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));
const lookup = {
  "math-11-51":[1,2],"math-11-53":[0],"math-11-54":[1],
  "math-11-55":[0,1],"math-11-58":[0],"math-11-60":[0,1],
};
function splice(body, x) {
  if (!x) return body;
  const lines = body.replace(/\r\n/g,"\n").trimEnd().split("\n");
  const c = lines.pop();
  while (lines.length && !lines[lines.length-1].trim()) lines.pop();
  return [...lines,"",x.trim(),"",c].join("\n");
}
function words(s){return s.split(/\s+/).filter(Boolean).length;}
const extra = {
"math-11-54":["","",
`Selling in ten years is a $\\$10,367$ present-value loss relative to selling now at $8\\%$. That loss is the meaning of $f$ decreasing. The recovered $f(10)$ is $\\$29,632.73$.`,"",""],
"math-11-55":["","","",
`A negative derivative is an earlier harvest when $r$ rises. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r\\approx -476$ is that earlier harvest, not a later one.`,
`The maximum test passed because $-1{,}092<0$, not because $P''$ was negative. $P''$ is positive. The recovered second-order condition holds.`],
"math-11-56":[
`Use $18.22$ years as the date on which $f$, $P''-rP'$, and $\\mathrm{d}t^{*}/\\mathrm{d}r$ are evaluated. The recovered $t^{*}$ is $18.22$ years.`,
`Understatement of $\\$37,000$ is not an approximation of $\\$287,378$. The recovered present value at $t^{*}$ is $\\$287,378$.`,
`Letter D divides by this signed quantity. A plus would reverse the harvest response. The recovered $P''-rP'$ is $-6{,}000$.`,
`Forward harvest when $r$ rises is the meaning of $-246.91$. The recovered sensitivity is $-246.91$.`,
`More than double, not exactly double: $40.44$ versus $36.44$. The recovered $4.5\\%$ date is $40.44$ years.`],
"math-11-57":[
`Without this $\\$189,893$, letter C cannot total $\\$227,407$. The recovered exit PDV is $\\$189,893.03$.`,
`Without this $\\$37,514$, letter C cannot total $\\$227,407$. The recovered side-payment PDV is $\\$37,513.95$.`,
`Missed by $\\$2,593$, not by cents. The recovered combined PDV is $\\$227,407$, not $\\$230,000$.`,
"",
`Discount disappears at $r=0$ and the total jumps by $\\$62,593$ to the faces. The recovered zero-rate combined PDV is $\\$290,000$.`],
"math-11-58":["","","",
`Inverse in $t$: shorter $t$, larger $r$. The recovered three-year rate $15.67\\%$ is not lower than $10.44\\%$.`,
`Inverse in $t$: longer $t$, smaller $r$. Doubling $t$ halves $r$ at a fixed factor. The recovered $9$-year rate is $5.22\\%$.`],
"math-11-59":[
`$A$ out, $k$ in with a minus, $2/r$ in with a plus. That is the recovered general $t^{*}$.`,
`$21.67$ years is $26.67$ minus $5$. The recovered particular $t^{*}$ is $21.67$ years.`,
`About $\\$168,000$ today, not $\\$195,500$. The recovered $f(t^{*})$ is $\\$168,031$.`,
`Shorter by three years when $k$ rises by three. The recovered $k=8$ date is $18.67$ years.`,
""],
"math-11-60":["","",
`Lock $\\$20,110$ so letter E cannot honestly total $\\$47,500$. The recovered five-year PDV is $\\$20,109.60$.`,
`Lock $\\$24,713$ so letter E cannot honestly total $\\$47,500$. The recovered ten-year PDV is $\\$24,713.09$.`,
`Honest total $\\$44,823$. Claimed total $\\$47,500$. The recovered combined PDV is $\\$44,823$.`],
};
for (const t of arr) {
  const L = lookup[t.id]||[];
  const ex = extra[t.id]||["","","","",""];
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
