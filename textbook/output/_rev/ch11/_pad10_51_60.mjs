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
"math-11-57":["","","","",
`Waiting is free at a zero rate, so both payments enter at face. The recovered zero-rate combined PDV is exactly $\\$290,000$.`],
"math-11-58":["","","","",
`Twice the years at the same $0.625$ factor is half the rate. The recovered nine-year continuous rate is $5.22\\%$.`],
"math-11-59":["",
`Subtract $k=5$ from $2/0.075=26.67$ to reach $21.67$ years. The recovered particular $t^{*}$ is $21.67$ years.`,
`Stumpage near $\\$853,333$ times $e^{-1.625}\\approx 0.197$ is near $\\$168,031$. The recovered $f(t^{*})$ is $\\$168,031$.`,"",""],
"math-11-60":["","",
`Thirty thousand times $0.6703$ is $\\$20,110$. The recovered five-year PDV is $\\$20,109.60$.`,
`Fifty-five thousand times $0.4493$ is $\\$24,713$. The recovered ten-year PDV is $\\$24,713.09$.`,
`Those two recovered present values sum to $\\$44,823$, which is the amount to pay today, not $\\$47,500$.`],
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
