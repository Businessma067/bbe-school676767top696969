import { allMathTasks } from "@/data/math-chapters";
import { allEnglishTasks, ENGLISH_CHAPTERS, passageForTask } from "@/data/english-chapters";
import ch2 from "@/data/economics-cases-ch2-subtopics.json";
import ch5 from "@/data/economics-cases-ch5-subtopics.json";
import ch6 from "@/data/economics-cases-ch6-subtopics.json";

const m = allMathTasks().filter(t => !t.placeholder && t.statements?.length === 5 && t.tactical_explanations?.every(e => e && e.length > 120) && !t.figure && !t.tables_markdown && t.context.length < 420);
console.log("math", m.length);
const pickM = [m[10], m[120], m[240], m[400]].filter(Boolean).map(t => ({id:t.id, case_id:t.case_id, title:t.title, chapter:t.id, ctx:t.context.slice(0,80)}));
console.log(JSON.stringify(pickM,null,1));
const e = allEnglishTasks("full").filter(t => t.statements?.length===5 && t.tactical_explanations?.every(x=>x&&x.length>100));
console.log("eng", e.length, e.slice(0,3).map(t=>[t.id,t.kind,t.subsection, (t.passage||"").length]));
const econ = [...(ch2 as any[]), ...(ch5 as any[]), ...(ch6 as any[])].filter(c=>c.statements?.length===5 && c.tactical_explanations?.every((x:string)=>x&&x.length>100));
console.log("econ", econ.length, econ.slice(0,3).map(c=>c.case_id));
