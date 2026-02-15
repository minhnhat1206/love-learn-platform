
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllLessons } from '../lessons/registry';
import { getAppState } from '../services/storage';
import { isDue } from '../services/sm2';
import { AppState } from '../types';
import { PlayCircle, Clock, Filter, CheckCircle2, Circle, AlarmClock } from 'lucide-react';

type FilterStatus = 'ALL' | 'NEW' | 'REVIEW' | 'LEARNED' | 'LEARNING';
type FilterLevel = 'ALL' | 'Beginner' | 'Intermediate';

const LessonList: React.FC = () => {
  const [appState, setAppState] = useState<AppState | null>(null);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('ALL');
  const [levelFilter, setLevelFilter] = useState<FilterLevel>('ALL');

  useEffect(() => {
    setAppState(getAppState());
  }, []);

  if (!appState) return <div>Loading...</div>;

  // Enhance lessons with status data
  const enrichedLessons = AllLessons.map(lesson => {
    const reviewData = appState.reviews[lesson.meta.id];
    let status: 'NEW' | 'REVIEW' | 'LEARNED' | 'LEARNING' = 'NEW';
    let nextReviewDate: Date | null = null;

    if (reviewData) {
      if (isDue(reviewData)) {
        status = 'REVIEW';
      } else if (reviewData.repetitions >= 3) {
        status = 'LEARNED';
        nextReviewDate = new Date(reviewData.nextReviewAt);
      } else {
        status = 'LEARNING';
        nextReviewDate = new Date(reviewData.nextReviewAt);
      }
    }

    return { ...lesson, status, nextReviewDate };
  });

  // Filter Logic
  const filteredLessons = enrichedLessons.filter(lesson => {
    const matchLevel = levelFilter === 'ALL' || lesson.meta.level === levelFilter;
    const matchStatus = statusFilter === 'ALL' || lesson.status === statusFilter;
    return matchLevel && matchStatus;
  });

  // Sort: 
  // 1. Due for review first
  // 2. Then by order
  // 3. Then by status priority
  filteredLessons.sort((a, b) => {
    // If one is due for review and other isn't, due one comes first
    if (a.status === 'REVIEW' && b.status !== 'REVIEW') return -1;
    if (a.status !== 'REVIEW' && b.status === 'REVIEW') return 1;

    // If both have same status or both aren't due, sort by order
    if (a.meta.order !== undefined && b.meta.order !== undefined) {
      return a.meta.order - b.meta.order;
    }

    // Fallback status sort
    const score = (status: string) => {
      if (status === 'REVIEW') return 0;
      if (status === 'LEARNING') return 1;
      if (status === 'NEW') return 2;
      return 3;
    };
    return score(a.status) - score(b.status);
  });

  const StatusBadge = ({ status, date }: { status: string, date: Date | null }) => {
    if (status === 'REVIEW') {
      return (
        <span className="flex items-center gap-1 bg-red-100 text-red-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider animate-pulse">
          <AlarmClock size={12} /> Cần ôn tập
        </span>
      );
    }
    if (status === 'LEARNED') {
      return (
        <span className="flex items-center gap-1 bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          <CheckCircle2 size={12} /> Đã thuộc
        </span>
      );
    }
    if (status === 'LEARNING') {
      const dateStr = date ? date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }) : '';
      return (
        <span className="flex items-center gap-1 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          <Clock size={12} /> Đang học (Hẹn: {dateStr})
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1 bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        <Circle size={12} /> Bài mới
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Kho bài học 📚</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <div className="flex bg-white p-1 rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
            {(['ALL', 'REVIEW', 'LEARNING', 'NEW', 'LEARNED'] as FilterStatus[]).map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${statusFilter === s
                  ? 'bg-pastel-pink text-white shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
                  }`}
              >
                {s === 'ALL' ? 'Tất cả' : s === 'REVIEW' ? 'Cần ôn' : s === 'LEARNING' ? 'Đang học' : s === 'NEW' ? 'Chưa học' : 'Đã thuộc'}
              </button>
            ))}
          </div>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as FilterLevel)}
            className="bg-white border border-gray-100 text-gray-600 text-sm rounded-xl px-3 py-2 focus:ring-2 focus:ring-pastel-pink outline-none shadow-sm font-bold"
          >
            <option value="ALL">Mọi cấp độ</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
          </select>
        </div>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400">Không tìm thấy bài học nào theo lọc nè vợ ơi! 🥺</p>
          <button onClick={() => setStatusFilter('ALL')} className="text-pastel-pink font-bold mt-2 hover:underline">Xem tất cả nha</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson) => (
            <Link
              key={lesson.meta.id}
              to={`/learn/${lesson.meta.id}`}
              className={`group bg-white p-6 rounded-3xl shadow-sm border transition-all flex items-center justify-between hover:shadow-md hover:scale-[1.01] ${lesson.status === 'REVIEW' ? 'border-red-200 ring-2 ring-red-50' : 'border-gray-100 hover:border-pastel-pink'
                }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <StatusBadge status={lesson.status} date={lesson.nextReviewDate} />
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${lesson.meta.level === 'Beginner' ? 'bg-blue-50 text-blue-500' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                    {lesson.meta.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-700 group-hover:text-pastel-pink transition-colors">
                  {lesson.meta.order && <span className="text-pastel-pink mr-2">Bài {lesson.meta.order}:</span>}
                  {lesson.meta.title}
                </h3>
                <div className="flex items-center gap-3 text-gray-400 text-sm mt-2">
                  <span className="flex items-center gap-1"><Clock size={14} /> {lesson.meta.estimatedTime}p</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{lesson.meta.category}</span>
                </div>
              </div>

              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${lesson.status === 'REVIEW'
                ? 'bg-red-100 text-red-500 group-hover:bg-red-500 group-hover:text-white'
                : 'bg-pink-50 text-pastel-pink group-hover:bg-pastel-pink group-hover:text-white'
                }`}>
                <PlayCircle size={24} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonList;
