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
"math-11-55":["","","","","The recovered $-1{,}092$ is the whole second-order story. Positive $P''$ would have misled a curvature-only reader. The maximum condition holds because $P''-rP'<0$."],
"math-11-56":[
`Evaluate everything later at $18.22$ years. That is the recovered interior harvest, not $22.22$ and not $11.11$.`,
"",
`Divide $P$ by this signed $-6{,}000$ in letter D. A plus would reverse $\\mathrm{d}t^{*}/\\mathrm{d}r$. The recovered second-order quantity is $-6{,}000$.`,
`Negative sensitivity means earlier harvest when $r$ rises. The recovered $\\mathrm{d}t^{*}/\\mathrm{d}r$ is $-246.91$.`,
""],
"math-11-57":[
`Large piece of the $\\$227,407$ total. The recovered exit PDV is $\\$189,893.03$.`,
`Small piece of the $\\$227,407$ total. The recovered side-payment PDV is $\\$37,513.95$.`,
`The pair misses $\\$230,000$ by thousands, not by rounding. The recovered combined PDV is $\\$227,407$.`,
"",
`At $r=0$ the dates drop out and the faces remain. The recovered zero-rate combined PDV is $\\$290,000$.`],
"math-11-58":["","","","",
`Half of $10.44\\%$ at twice the horizon is exact for this inversion. The recovered $9$-year rate is $5.22\\%$.`],
"math-11-59":[
`No $A$ in the date. Minus $k$. Plus $2/r$. The recovered general $t^{*}$ is $2/r-k$.`,
`Twenty-one years and two-thirds, after subtracting $k=5$ from $26.67$. The recovered particular $t^{*}$ is $21.67$ years.`,
`Present value about $\\$168,000$ versus a claimed $\\$195,500$. The recovered $f(t^{*})$ is $\\$168,031$.`,"",""],
"math-11-60":["","",
`First true addend $\\$20,110$, not $\\$21,500$. The recovered five-year PDV is $\\$20,109.60$.`,
`Second true addend $\\$24,713$, not $\\$26,000$. The recovered ten-year PDV is $\\$24,713.09$.`,
`True sum $\\$44,823$, not $\\$47,500$. The recovered combined PDV is $\\$44,823$.`],
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
