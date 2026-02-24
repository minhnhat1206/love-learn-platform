
import { AppState, ReviewData, UserProgress, DailyStat, Reward } from '../types';
import { syncWithGoogleSheets, loadFromGoogleSheets } from './googleSheetService';

// Helper to get user ID from URL (?u=tong) or default to 'vo'
export const getUserId = (): string => {
  const params = new URLSearchParams(window.location.search);
  return params.get('u') || 'vo';
};

const USER_ID = getUserId();
const STORAGE_KEY = `love_learn_english_db_${USER_ID}`;

// Helper: Get local YYYY-MM-DD
export const getLocalISODate = (): string => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split('T')[0];
};

// Helper: Get Yesterday's local YYYY-MM-DD
const getYesterdayISODate = (): string => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split('T')[0];
};

const INITIAL_STATE: AppState = {
  userId: USER_ID,
  user: {
    totalStudyMinutes: 0,
    streakDays: 0,
    lastStudyDate: '',
    correctAnswers: 0,
    totalAnswers: 0,
    points: 0,
    redeemedRewardIds: [], // Init empty list
  },
  reviews: {},
  history: [],
  rewards: [
    { id: 'r1', title: 'Một ly trà sữa full topping', description: 'Tòng sẽ order ngay và luôn!', pointsRequired: 100, icon: '🧋' },
    { id: 'r2', title: 'Massage vai 15 phút', description: 'Thư giãn sau khi học bài chăm chỉ', pointsRequired: 50, icon: '💆‍♀️' },
    { id: 'r3', title: 'Được sai vặt Tòng 1 ngày', description: 'Muốn gì được nấy (trong khả năng)', pointsRequired: 500, icon: '🧞‍♂️' },
  ],
  settings: {
    dailyGoalMinutes: 15,
    studyDays: [1, 2, 3, 4, 5, 6, 0], // Every day
  }
};

// Cache state in memory to reduce reads
let memoryState: AppState | null = null;

export const getAppState = (): AppState => {
  if (memoryState) return memoryState;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    memoryState = INITIAL_STATE;
    return INITIAL_STATE;
  }
  memoryState = JSON.parse(stored);
  if (!memoryState) {
    memoryState = INITIAL_STATE;
    return INITIAL_STATE;
  }
  memoryState.userId = USER_ID;

  // Robust Migration & Safety Checks
  if (!memoryState.user) memoryState.user = { ...INITIAL_STATE.user };
  if (memoryState.user.points === undefined) memoryState.user.points = 0;
  if (!memoryState.user.redeemedRewardIds) memoryState.user.redeemedRewardIds = [];
  if (!memoryState.reviews) memoryState.reviews = {};
  if (!memoryState.history) memoryState.history = [];
  if (!memoryState.rewards) memoryState.rewards = INITIAL_STATE.rewards;
  if (!memoryState.settings) memoryState.settings = INITIAL_STATE.settings;

  // Validate streak on every load
  validateStreak(memoryState);

  return memoryState!;
};

// Resets streak if user missed a day
export const validateStreak = (state: AppState) => {
  const today = getLocalISODate();
  const yesterday = getYesterdayISODate();
  const { lastStudyDate } = state.user;

  if (lastStudyDate && lastStudyDate !== today && lastStudyDate !== yesterday) {
    // If last study date is neither today nor yesterday, streak is broken
    state.user.streakDays = 0;
  }
};

export const initDatabase = async () => {
  const cloudData = await loadFromGoogleSheets(USER_ID);
  if (cloudData) {
    console.log(`Loaded data for ${USER_ID} from Google Sheets!`);
    memoryState = cloudData;

    // Comprehensive Safety Checks & Defaults
    if (!memoryState.user) memoryState.user = INITIAL_STATE.user;
    if (memoryState.user.points === undefined) memoryState.user.points = 0;
    if (!memoryState.user.redeemedRewardIds) memoryState.user.redeemedRewardIds = [];

    if (!memoryState.reviews) memoryState.reviews = {};
    if (!memoryState.history) memoryState.history = [];
    if (!memoryState.rewards || memoryState.rewards.length === 0) memoryState.rewards = INITIAL_STATE.rewards;
    if (!memoryState.settings) memoryState.settings = INITIAL_STATE.settings;

    validateStreak(memoryState);
    saveAppState(memoryState!, false);
  } else {
    console.log(`Using Local Storage for ${USER_ID}`);
  }
};

export const saveAppState = (state: AppState, syncToCloud = true) => {
  state.userId = USER_ID;
  memoryState = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  if (syncToCloud) {
    syncWithGoogleSheets(state).then(ok => {
      if (ok) console.log("Synced to Cloud");
    });
  }
};

export const updateReview = (review: ReviewData) => {
  const state = getAppState();
  state.reviews[review.lessonId] = review;
  saveAppState(state);
};

export const updateUserStats = (
  minutesAdded: number,
  correct: boolean,
  lessonsCompleted: number = 0,
  pointsEarned: number = 0
) => {
  const state = getAppState();
  const today = getLocalISODate();
  const yesterday = getYesterdayISODate();

  // Update Daily Stats
  let todayStat = state.history.find(h => h.date === today);
  if (!todayStat) {
    todayStat = { date: today, minutes: 0, lessonsCompleted: 0 };
    state.history.push(todayStat);
  }
  todayStat.minutes += minutesAdded;
  todayStat.lessonsCompleted += lessonsCompleted;

  // Update User Totals
  state.user.totalStudyMinutes += minutesAdded;
  state.user.totalAnswers += 1;
  if (correct) state.user.correctAnswers += 1;

  // Add Points
  state.user.points += pointsEarned;

  // Streak Logic
  if (state.user.lastStudyDate !== today) {
    if (state.user.lastStudyDate === yesterday) {
      // Studied yesterday, increment streak
      state.user.streakDays += 1;
    } else {
      // Missed more than 1 day or first time studying
      state.user.streakDays = 1;
    }
    state.user.lastStudyDate = today;
  }

  saveAppState(state);
  return state;
};

export const updateSettings = (goal: number, days: number[]) => {
  const state = getAppState();
  state.settings.dailyGoalMinutes = goal;
  state.settings.studyDays = days;
  saveAppState(state);
};

// --- Reward Functions ---

export const addReward = (title: string, description: string, points: number, icon: string) => {
  const state = getAppState();
  const newReward: Reward = {
    id: Date.now().toString(),
    title,
    description,
    pointsRequired: points,
    icon
  };
  state.rewards.push(newReward);
  // Important: We save immediately. Since rewards are shared, syncing to cloud by Admin (Tong)
  // will update the Shared_Rewards sheet.
  saveAppState(state);
};

export const redeemReward = (rewardId: string) => {
  const state = getAppState();
  const reward = state.rewards.find(r => r.id === rewardId);
  const isRedeemed = state.user.redeemedRewardIds.includes(rewardId);

  if (reward && !isRedeemed && state.user.points >= reward.pointsRequired) {
    state.user.points -= reward.pointsRequired;
    state.user.redeemedRewardIds.push(rewardId); // Add ID to user's list
    saveAppState(state);
    return true;
  }
  return false;
};

export const deleteReward = (rewardId: string) => {
  const state = getAppState();
  state.rewards = state.rewards.filter(r => r.id !== rewardId);
  saveAppState(state);
};
