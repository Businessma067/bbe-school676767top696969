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
"math-11-55":["","","","","A maximum of discounted timber value can coexist with accelerating stumpage. The recovered test $P''-rP'<0$ is that coexistence, and it holds."],
"math-11-56":[
`Later letters sit on $t^{*}=18.22$ years. The recovered interior harvest is $18.22$ years.`,
"",
`Signed $-6{,}000$ is the maximum test and the sensitivity denominator together. The recovered $P''-rP'$ is $-6{,}000$.`,
`Earlier harvest when rates rise is $-246.91$ in words. The recovered sensitivity is $-246.91$.`,""],
"math-11-57":[
`This is the large addend of $\\$227,407$. The recovered exit PDV is $\\$189,893.03$.`,
"",
`Addends $\\$189,893$ and $\\$37,514$ do not make $\\$230,000$. The recovered combined PDV is $\\$227,407$.`,
"",
`Zero rate restores the faces $\\$250,000+\\$40,000$. The recovered zero-rate combined PDV is $\\$290,000$.`],
"math-11-58":["","","","",
`Fixed $0.625$ over nine years is $5.22\\%$ continuous. The recovered $9$-year rate is $5.22\\%$.`],
"math-11-59":[
`The recovered general harvest date is $t^{*}=2/r-k$, with $A$ cancelled.`,
`The recovered particular harvest date is $21.67$ years at $r=0.075$ and $k=5$.`,
`The recovered present value at that date is $\\$168,031$, not $\\$195,500$.`,"",""],
"math-11-60":["","",
`The recovered five-year PDV is $\\$20,109.60$, the first addend of $\\$44,823$.`,
`The recovered ten-year PDV is $\\$24,713.09$, the second addend of $\\$44,823$.`,
`The recovered combined PDV is $\\$44,823$, not $\\$47,500$.`],
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
