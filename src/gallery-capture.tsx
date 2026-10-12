import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import * as T from './components/how-it-works/GalleryCaptureScenes';
import {CourseSolution} from './components/how-it-works/CourseSolution';
import {COURSE_ECON} from './components/how-it-works/course-tasks';
import {WisoHowItWorksDemo} from './components/how-it-works/WisoLiveDemos';
const n=new URLSearchParams(location.search).get('scene')||'dashboard';
const w=n.startsWith('wiso-');const scene=n.replace('wiso-','');
let content:React.ReactNode;
if(w&&!['dashboard','results','task','german'].includes(scene)) {
 const tab=scene==='theory'?'theory':scene==='mock'?'mock-exams':scene==='builder'?'mock-builder':scene==='flashcards'?'games':'course';
 content=<WisoHowItWorksDemo tab={tab} slideKey={scene} rest={25}/>;
} else switch(scene){
 case 'dashboard':content=<T.TourDash tab="courses"/>;break;
 case 'theory':content=<T.TourTheoryList/>;break;
 case 'task':content=<T.TourEconTask marks={{0:true,1:true}} timed checked={false}/>;break;
 case 'explanation':content=<><T.TourEconTask marks={{0:true,1:true}} timed checked/><CourseSolution open dimmed={false} answerKey={COURSE_ECON.answerKey} explanations={COURSE_ECON.explanations} active={0}/></>;break;
 case 'english':content=<T.TourEnglishTask shown/>;break;
 case 'math':content=<><T.TourMathTask calcOpen/><T.TourCalc/></>;break;
 case 'mock':content=<T.TourExam flagged/>;break;
 case 'results':content=<T.TourResults/>;break;
 case 'builder':content=<T.TourBuilder open built={false}/>;break;
 default:content=<T.TourTools mode="flash" flipped={false} matched={false} picked={false}/>;
}
createRoot(document.getElementById('root')!).render(<div id="capture" style={{width:1280,height:720,position:'relative',overflow:'hidden',padding:w?0:32,background:'var(--background)'}}>{content}</div>);
