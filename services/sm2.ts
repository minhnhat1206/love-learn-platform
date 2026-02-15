
import { ReviewData } from '../types';

// SM-2 Algorithm Implementation with Fixed Initial Intervals
// Quality: 0-5
export const calculateNextReview = (
  currentData: ReviewData | undefined,
  quality: number,
  lessonId: string
): ReviewData => {
  const now = Date.now();
  const ONE_DAY = 24 * 60 * 60 * 1000;

  // Defaults for a new card
  let interval = 1;
  let repetitions = 0;
  let easeFactor = 2.5;

  if (currentData) {
    interval = currentData.interval;
    repetitions = currentData.repetitions;
    easeFactor = currentData.easeFactor;
  }

  if (quality >= 3) {
    // Correct answer logic
    if (repetitions === 0) {
      interval = 1; // 1st review: 1 day later
    } else if (repetitions === 1) {
      interval = 3; // 2nd review: 3 days later
    } else if (repetitions === 2) {
      interval = 7; // 3rd review: 7 days later
    } else {
      // 4th+ review: Standard SM-2 calculation
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    // Incorrect answer: Reset progress
    repetitions = 0;
    interval = 1;
  }

  // Update Ease Factor
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  return {
    lessonId,
    lastReviewedAt: now,
    nextReviewAt: now + (interval * ONE_DAY),
    interval,
    easeFactor,
    repetitions
  };
};

export const isDue = (reviewData: ReviewData): boolean => {
  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today
  return reviewData.nextReviewAt <= today.getTime();
};
