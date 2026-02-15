import { LessonContent } from '../types';
import { PresentSimpleLesson } from './grammar/PresentSimple';
import { PastSimpleLesson } from './grammar/PastSimple';
import { NounsLesson } from './grammar/Nouns';
import { ArticlesLesson } from './grammar/Articles';
import { PronounsLesson } from './grammar/Pronouns';

// Add new lessons here to register them in the system
export const AllLessons: LessonContent[] = [
  NounsLesson,
  ArticlesLesson,
  PronounsLesson,
  PresentSimpleLesson,
  PastSimpleLesson,
];

export const getLessonById = (id: string): LessonContent | undefined => {
  return AllLessons.find(l => l.meta.id === id);
};