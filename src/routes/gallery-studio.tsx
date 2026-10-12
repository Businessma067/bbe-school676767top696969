import { createFileRoute } from '@tanstack/react-router';
import { CourseTheoryDemo } from '@/components/how-it-works/CourseTheoryDemo';
import { CourseEconDemo } from '@/components/how-it-works/CourseEconDemo';
import { CourseMathDemo } from '@/components/how-it-works/CourseMathDemo';
import { CourseEnglishDemo } from '@/components/how-it-works/CourseEnglishDemo';
import { CourseMockDemo } from '@/components/how-it-works/CourseMockDemo';
import { CourseMockExamDemo } from '@/components/how-it-works/CourseMockExamDemo';
import { CourseFlashDemo, CourseMatchDemo, CourseTutorDemo } from '@/components/how-it-works/StudyToolsDemos';
import { WisoHowItWorksDemo } from '@/components/how-it-works/WisoLiveDemos';
import { ExamAnswerSheet } from '@/components/mock-exam/ExamAnswerSheet';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/gallery-studio')({ component: Studio });
function Studio() {
  const [config, setConfig] = useState({track:'bbe', feature:'practice'});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setConfig({track:p.get('track') ?? 'bbe',feature:p.get('feature') ?? 'practice'});
  }, []);
  const {track, feature} = config;
  const tab = ['chapters','theory'].includes(feature) ? 'theory' : ['mock','results','sheet'].includes(feature) ? 'mock-exams' : feature === 'builder' ? 'mock-builder' : ['flashcards','matching','tutor'].includes(feature) ? 'games' : 'course';
  const slideKey = feature === 'tutor' ? 'tutor-exam' : feature === 'language' ? 'german' : feature === 'math' ? 'math' : feature;
  const demo = track === 'wiso' ? <WisoHowItWorksDemo tab={tab} slideKey={slideKey} rest={1} /> : tab === 'theory' ? <CourseTheoryDemo /> : tab === 'mock-exams' ? <CourseMockExamDemo /> : tab === 'mock-builder' ? <CourseMockDemo /> : feature === 'flashcards' ? <CourseFlashDemo /> : feature === 'matching' ? <CourseMatchDemo /> : feature === 'tutor' ? <CourseTutorDemo /> : feature === 'math' ? <CourseMathDemo /> : feature === 'language' ? <CourseEnglishDemo /> : <CourseEconDemo />;
  return <div data-no-i18n data-capture-stage data-feature={feature} data-track={track} className="fixed left-0 top-0 z-[9999] h-[720px] w-[1280px] overflow-hidden bg-background">
    {demo}
    {feature === 'sheet' && <div className="absolute bottom-6 right-6 top-20 z-50 w-[500px] overflow-hidden bg-card p-4"><ExamAnswerSheet variant={track === 'wiso' ? 'wiso' : 'bbe'} marksByNumber={{1:[true,false,true,false,false],3:[false,true,false,true,false]}} questionCount={34} currentQuestion={3} flaggedNumbers={new Set([5])} onNavigate={() => {}} onToggle={() => {}} /></div>}
  </div>;
}