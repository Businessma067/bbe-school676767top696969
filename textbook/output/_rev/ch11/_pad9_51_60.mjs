import fs from "node:fs";
const file = "textbook/output/_rev/ch11/51_60.json";
const arr = JSON.parse(fs.readFileSync(file, "utf8"));
const lookup = {
  "math-11-51":[1,2],"math-11-53":[0],"math-11-54":[1],
  "math-11-55":[0,1],"math-11-58":[0],"math-11-60":[0,1],
};
function splice(body,x){
  if(!x) return body;
  const L=body.replace(/\r\n/g,"\n").trimEnd().split("\n");
  const c=L.pop();
  while(L.length && !L[L.length-1].trim()) L.pop();
  return [...L,"",x.trim(),"",c].join("\n");
}
function words(s){return s.split(/\s+/).filter(Boolean).length;}
const extra = {
"math-11-56":["","",
`The recovered signed curvature is $-6{,}000$, which both confirms a maximum and feeds $\\mathrm{d}t^{*}/\\mathrm{d}r$.`,
`The recovered harvest sensitivity is $-246.91$ years per unit rate, a forward cut when $r$ rises.`,""],
"math-11-57":[
`The recovered exit present value $\\$189,893$ is the large piece of the fund's combined $\\$227,407$.`,"","","",
`The recovered zero-rate total is the two faces, $\\$290,000$, because both continuous factors equal $1$.`],
"math-11-58":["","","","",
`The recovered nine-year implied rate is $5.22\\%$, half of $10.44\\%$ at twice the horizon.`],
"math-11-59":[
`The recovered general timing rule is $t^{*}=2/r-k$ after the scale $A$ cancels.`,
`The recovered particular timing is $t^{*}\\approx 21.67$ years at $7.5\\%$ with shift $5$.`,
`The recovered present value at that harvest is about $\\$168,031$, well below the claimed $\\$195,500$.`,"",""],
"math-11-60":["","",
`The recovered first franchise PDV is $\\$20,109.60$, not the claimed $\\$21,500$.`,
`The recovered second franchise PDV is $\\$24,713.09$, not the claimed $\\$26,000$.`,
`The recovered combined franchise PDV is $\\$44,823$, not the claimed $\\$47,500$.`],
};
for (const t of arr) {
  const L=lookup[t.id]||[];
  const ex=extra[t.id]||["","","","",""];
  t.tactical_explanations=t.tactical_explanations.map((e,i)=>{
    const nl=e.indexOf("\n");
    let body=e.slice(nl+1).replace(/^\n+/,"");
    if(!L.includes(i)&&words(e)<350&&ex[i]) body=splice(body,ex[i]);
    return e.slice(0,nl)+"\n\n"+body;
  });
}
fs.writeFileSync(file, JSON.stringify(arr,null,2)+"\n");
for (const t of arr) {
  const L=lookup[t.id]||[];
  console.log(t.id, t.tactical_explanations.map((e,i)=>(L.includes(i)?"L":words(e)<350?"!":"")+words(e)).join(", "));
}
