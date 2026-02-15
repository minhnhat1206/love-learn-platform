
export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_GAP = 'FILL_GAP',
  REWRITE = 'REWRITE',
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For Multiple Choice
  correctAnswer: string; // The correct answer string
  explanation: string; // Shown after answering
}

export interface LessonMeta {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate';
  category: 'Grammar' | 'Vocabulary' | 'Structure';
  estimatedTime: number; // in minutes
  tags: string[];
  order?: number;
}

export interface LessonContent {
  meta: LessonMeta;
  theory: string; // HTML string for the lesson content
  questions: Question[];
}

// Spaced Repetition Data (SM-2)
export interface ReviewData {
  lessonId: string;
  lastReviewedAt: number; // Timestamp
  nextReviewAt: number; // Timestamp
  interval: number; // Days
  easeFactor: number; // Default 2.5
  repetitions: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  icon?: string;
  // Removed 'isRedeemed' from here because it's user-specific
}

export interface UserProgress {
  totalStudyMinutes: number;
  streakDays: number;
  lastStudyDate: string; // YYYY-MM-DD
  correctAnswers: number;
  totalAnswers: number;
  points: number;
  redeemedRewardIds: string[]; // New: Track redeemed IDs here
}

export interface DailyStat {
  date: string; // YYYY-MM-DD
  minutes: number;
  lessonsCompleted: number;
}

export interface AppState {
  userId: string;
  user: UserProgress;
  reviews: Record<string, ReviewData>;
  history: DailyStat[];
  rewards: Reward[]; // Shared list of available rewards
  settings: {
    dailyGoalMinutes: number;
    studyDays: number[];
  };
}

// Test Bank Types
export interface TestQuestion {
  id: string;
  type: QuestionType;
  question: string; // HTML supported
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TestMeta {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate';
  estimatedTime: number; // minutes
  totalQuestions: number;
  passScore: number; // e.g. 80%
}

export interface TestContent {
  meta: TestMeta;
  questions: TestQuestion[];
}

export interface TestResult {
  testId: string;
  score: number; // 0-100
  correctCount: number;
  totalQuestions: number;
  completedAt: string; // ISO Date
}
