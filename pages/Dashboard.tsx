
import React, { useEffect, useState } from 'react';
import { getAppState, initDatabase } from '../services/storage';
import { AppState } from '../types';
import { AllLessons } from '../lessons/registry';
import { isDue } from '../services/sm2';
import { Flame, Star, Clock, ArrowRight, BookHeart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const Dashboard: React.FC = () => {
  const [state, setState] = useState<AppState | null>(null);
  const [dueLessonIds, setDueLessonIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // Try to sync with cloud on first load
      await initDatabase();
      const appState = getAppState();
      setState(appState);
      setLoading(false);

      // Identify due reviews
      const due = Object.values(appState.reviews)
        .filter(r => isDue(r))
        .map(r => r.lessonId);

      setDueLessonIds(due);
    };
    load();
  }, []);

  if (loading || !state) return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-pastel-pink border-t-transparent rounded-full animate-spin"></div>
      <div className="text-pastel-pinkDark font-bold animate-pulse">Đang đồng bộ dữ liệu...</div>
    </div>
  );

  const { user, history } = state;

  // Prepare chart data (last 7 entries)
  const chartData = history.slice(-7).map(h => ({
    name: new Date(h.date).toLocaleDateString('vi-VN', { weekday: 'short' }),
    min: h.minutes
  }));

  const accuracy = user.totalAnswers > 0
    ? Math.round((user.correctAnswers / user.totalAnswers) * 100)
    : 100;

  // Get full lesson objects for due lessons
  const dueLessons = AllLessons.filter(l => dueLessonIds.includes(l.meta.id));

  return (
    <div className="space-y-8 animate-fade-in-up">
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Helu Vợ yêu! 🌷🥰
        </h2>
        <p className="text-gray-500">
          Tòng đã chuẩn bị bài học cho vợ rồi nè. Cố lên nhé!
        </p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-orange-100 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <div className="p-3 bg-orange-50 rounded-full mb-2">
            <Flame className="text-orange-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-700">{user.streakDays}</span>
          <span className="text-xs text-gray-400 font-medium">Ngày liên tiếp</span>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-yellow-100 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <div className="p-3 bg-yellow-50 rounded-full mb-2">
            <Star className="text-yellow-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-700">{accuracy}%</span>
          <span className="text-xs text-gray-400 font-medium">Chính xác</span>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-blue-100 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <div className="p-3 bg-blue-50 rounded-full mb-2">
            <Clock className="text-blue-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-700">{Math.round(user.totalStudyMinutes / 60)}h</span>
          <span className="text-xs text-gray-400 font-medium">Tổng thời gian</span>
        </div>

        <div className="bg-white p-5 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center justify-center hover:scale-105 transition-transform">
          <div className="p-3 bg-pink-50 rounded-full mb-2">
            <BookHeart className="text-pink-400" size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-700">{AllLessons.length}</span>
          <span className="text-xs text-gray-400 font-medium">Bài học có sẵn</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="md:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-700 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-pastel-pink rounded-full"></span>
            Thời gian học tuần này
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.length > 0 ? chartData : [{ name: 'Today', min: 0 }]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                  cursor={{ fill: '#FFF5F7' }}
                />
                <Bar dataKey="min" fill="#FFB7C5" radius={[10, 10, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Due Today / Action - UPDATED SECTION */}
        <div className="flex flex-col gap-4">
          {/* Review Card */}
          <div className={`flex-1 p-6 rounded-3xl text-white shadow-lg transition-all ${dueLessonIds.length > 0 ? 'bg-gradient-to-br from-red-400 to-pink-500 shadow-red-200' : 'bg-gradient-to-br from-pastel-green to-green-400 shadow-green-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              {dueLessonIds.length > 0 ? <RefreshCw className="animate-spin-slow" /> : <CheckCircle2 />}
              <h3 className="text-xl font-bold">{dueLessonIds.length > 0 ? "Cần ôn tập gấp!" : "Xuất sắc!"}</h3>
            </div>

            <p className="opacity-90 text-sm mb-4">
              {dueLessonIds.length > 0
                ? `Vợ ơi, có ${dueLessonIds.length} bài kiến thức đang bị "rơi rụng" nè. Ôn lại ngay cho nhớ lâu nhé!`
                : "Vợ đã hoàn thành xuất sắc nhiệm vụ hôm nay. Giờ thì thư giãn hoặc học bài mới thôi! 😘"}
            </p>

            {dueLessonIds.length > 0 && (
              <div className="space-y-2">
                {dueLessons.slice(0, 3).map(lesson => (
                  <Link
                    key={lesson.meta.id}
                    to={`/learn/${lesson.meta.id}`}
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-xl flex items-center justify-between backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-bold truncate pr-2">{lesson.meta.title}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
                {dueLessons.length > 3 && (
                  <Link to="/lessons" className="block text-center text-xs font-bold hover:underline pt-1">
                    Xem thêm {dueLessons.length - 3} bài nữa
                  </Link>
                )}
              </div>
            )}

            {dueLessonIds.length === 0 && (
              <Link to="/lessons" className="bg-white text-green-500 font-bold py-3 px-6 rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors mt-auto">
                Học bài mới <ArrowRight size={18} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple helper for icon
const CheckCircle2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
)

export default Dashboard;
