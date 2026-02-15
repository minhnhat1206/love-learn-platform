import React, { useState, useEffect } from 'react';
import { getAppState, updateSettings } from '../services/storage';
import { AppState, DailyStat, ReviewData } from '../types';
import { AllLessons, getLessonById } from '../lessons/registry';
import { Clock, Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, AlarmClock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedule: React.FC = () => {
   const [state, setState] = useState<AppState | null>(null);
   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDateStr, setSelectedDateStr] = useState<string>(new Date().toISOString().split('T')[0]);

   // Settings State
   const [goal, setGoal] = useState(15);
   const [days, setDays] = useState<number[]>([]);
   const [saved, setSaved] = useState(false);

   useEffect(() => {
      const appState = getAppState();
      setState(appState);
      setGoal(appState.settings.dailyGoalMinutes);
      setDays(appState.settings.studyDays);
   }, []);

   if (!state) return <div>Loading...</div>;

   // --- CALENDAR LOGIC ---

   const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
   const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 0 is Sun

   // Adjust to start Week on Monday (1) -> Sunday (7) if preferred, 
   // but standard JS 0=Sun is fine if labels match. 
   // Let's use 0=Sun for simplicity of labels.
   const weekDayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   const prevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
   };
   const nextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
   };

   // Map Data for Lookup
   const historyMap: Record<string, DailyStat> = {};
   state.history.forEach(h => {
      historyMap[h.date] = h;
   });

   const reviewsMap: Record<string, string[]> = {};
   Object.values(state.reviews).forEach((r: ReviewData) => {
      const dateStr = new Date(r.nextReviewAt).toISOString().split('T')[0];
      if (!reviewsMap[dateStr]) reviewsMap[dateStr] = [];
      reviewsMap[dateStr].push(r.lessonId);
   });

   // Generate Calendar Grid
   const calendarDays = [];
   // Empty slots for days before 1st
   for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(null);
   }
   // Days of month
   for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
   }

   // Helper for Selected Date Details
   const getSelectedDateDetails = () => {
      const stat = historyMap[selectedDateStr];
      const reviews = reviewsMap[selectedDateStr] || [];

      // Convert reviews to lesson objects
      const reviewLessons = reviews.map(id => getLessonById(id)).filter(Boolean);

      return { stat, reviewLessons };
   };

   const { stat: selectedStat, reviewLessons: selectedReviews } = getSelectedDateDetails();

   // --- SETTINGS LOGIC ---
   const handleSaveSettings = () => {
      updateSettings(goal, days);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
   };

   const toggleDay = (day: number) => {
      if (days.includes(day)) {
         setDays(days.filter(d => d !== day));
      } else {
         setDays([...days, day]);
      }
   };

   const settingsWeekDays = [
      { id: 1, label: 'Mon' }, { id: 2, label: 'Tue' }, { id: 3, label: 'Wed' },
      { id: 4, label: 'Thu' }, { id: 5, label: 'Fri' }, { id: 6, label: 'Sat' },
      { id: 0, label: 'Sun' },
   ];

   return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-20">

         {/* --- CALENDAR SECTION --- */}
         <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-pastel-pink/10 p-6 flex justify-between items-center border-b border-pink-50">
               <button onClick={prevMonth} className="p-2 hover:bg-white rounded-full transition-colors"><ChevronLeft className="text-pastel-pinkDark" /></button>
               <h2 className="text-xl font-bold text-gray-800">
                  Tháng {currentDate.getMonth() + 1}, {currentDate.getFullYear()}
               </h2>
               <button onClick={nextMonth} className="p-2 hover:bg-white rounded-full transition-colors"><ChevronRight className="text-pastel-pinkDark" /></button>
            </div>

            {/* Grid */}
            <div className="p-6">
               <div className="grid grid-cols-7 mb-4 text-center">
                  {weekDayLabels.map(d => (
                     <div key={d} className="text-xs font-bold text-gray-400 uppercase tracking-wider">{d}</div>
                  ))}
               </div>

               <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, idx) => {
                     if (!day) return <div key={idx} className="aspect-square"></div>;

                     // Construct date string YYYY-MM-DD
                     // Note: Be careful with Timezones. 
                     // Simple approach: Create date object, force set hours to avoid shift, convert to ISO.
                     const dObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                     // Adjust timezone offset to get correct local YYYY-MM-DD
                     const offset = dObj.getTimezoneOffset();
                     const localDate = new Date(dObj.getTime() - (offset * 60 * 1000));
                     const dateStr = localDate.toISOString().split('T')[0];

                     const hasStudy = !!historyMap[dateStr];
                     const hasReview = !!reviewsMap[dateStr];
                     const isSelected = selectedDateStr === dateStr;
                     const isToday = new Date().toISOString().split('T')[0] === dateStr;

                     return (
                        <button
                           key={idx}
                           onClick={() => setSelectedDateStr(dateStr)}
                           className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative transition-all border-2 ${isSelected
                              ? 'border-pastel-pink bg-pink-50 shadow-md scale-105 z-10'
                              : isToday
                                 ? 'border-pastel-blue bg-blue-50'
                                 : 'border-transparent hover:bg-gray-50'
                              }`}
                        >
                           <span className={`text-sm font-bold ${isSelected ? 'text-pastel-pinkDark' : 'text-gray-600'}`}>
                              {day}
                           </span>

                           {/* Simplified Indicators */}
                           <div className="absolute bottom-1.5 flex gap-1">
                              {(hasStudy || hasReview) && (
                                 <div className={`w-1.5 h-1.5 rounded-full ${hasReview ? 'bg-red-400' : 'bg-pastel-green'}`}></div>
                              )}
                           </div>
                        </button>
                     );
                  })}
               </div>
            </div>
         </section>

         {/* --- SELECTED DATE DETAILS (AGENDA VIEW) --- */}
         <section className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
               <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <CalendarIcon className="text-pastel-pink" size={24} />
                  <span>{new Date(selectedDateStr).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long' })}</span>
               </h3>
               {new Date().toISOString().split('T')[0] === selectedDateStr && (
                  <span className="text-xs font-bold bg-pastel-blue/10 text-pastel-blue px-3 py-1 rounded-full uppercase tracking-wider">Hôm nay</span>
               )}
            </div>

            <div className="grid gap-4">
               {/* List Actions/Items */}
               {selectedReviews.length > 0 && (
                  <div className="bg-white p-5 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <AlarmClock size={64} className="text-red-500" />
                     </div>
                     <div className="relative z-10">
                        <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                           <AlarmClock size={18} /> Cần ôn tập ({selectedReviews.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                           {selectedReviews.map((l, i) => (
                              <Link
                                 key={i}
                                 to={`/learn/${l?.meta.id}`}
                                 className="bg-red-50 hover:bg-red-500 hover:text-white px-4 py-2 rounded-xl text-sm font-bold text-red-600 transition-all border border-red-100"
                              >
                                 {l?.meta.title}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
               )}

               {selectedStat ? (
                  <div className="bg-white p-5 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={64} className="text-green-500" />
                     </div>
                     <div className="relative z-10">
                        <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                           <CheckCircle2 size={18} /> Đã hoàn thành
                        </h4>
                        <div className="flex items-center justify-between bg-green-50/50 p-4 rounded-2xl border border-green-50">
                           <div className="flex gap-6">
                              <div>
                                 <div className="text-xs text-green-700/60 font-bold uppercase mb-1">Thời gian</div>
                                 <div className="text-lg font-bold text-green-700">{selectedStat.minutes} phút</div>
                              </div>
                              <div className="w-px h-10 bg-green-100"></div>
                              <div>
                                 <div className="text-xs text-green-700/60 font-bold uppercase mb-1">Bài học</div>
                                 <div className="text-lg font-bold text-green-700">{selectedStat.lessonsCompleted} bài</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  !selectedReviews.length && (
                     <div className="bg-white p-10 rounded-3xl border border-dashed border-gray-200 text-center">
                        <p className="text-gray-400 font-medium">Vợ chưa có lịch trình gì cho ngày này hết trơn! 🍃</p>
                        <Link to="/lessons" className="text-pastel-pink font-bold mt-2 inline-block hover:underline">Học bài mới nha</Link>
                     </div>
                  )
               )}
            </div>
         </section>

         <hr className="border-gray-100" />

         {/* --- SETTINGS SECTION --- */}
         <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cài đặt mục tiêu 🎯</h2>
            <div className="grid md:grid-cols-2 gap-6">
               {/* Goal Section */}
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-pink-50 rounded-lg text-pastel-pink">
                        <Clock size={24} />
                     </div>
                     <h3 className="font-bold text-gray-700 text-lg">Mục tiêu mỗi ngày</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                     {[15, 30, 45].map((min) => (
                        <button
                           key={min}
                           onClick={() => setGoal(min)}
                           className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${goal === min
                              ? 'border-pastel-pink bg-pink-50 text-pastel-pinkDark'
                              : 'border-gray-100 text-gray-400 hover:border-pink-100'
                              }`}
                        >
                           {min}p
                        </button>
                     ))}
                  </div>
               </div>

               {/* Days Section */}
               <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-blue-50 rounded-lg text-pastel-blue">
                        <CalendarIcon size={24} />
                     </div>
                     <h3 className="font-bold text-gray-700 text-lg">Ngày học</h3>
                  </div>

                  <div className="flex justify-between gap-1">
                     {settingsWeekDays.map((d) => (
                        <button
                           key={d.id}
                           onClick={() => toggleDay(d.id)}
                           className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${days.includes(d.id)
                              ? 'bg-pastel-blue text-white shadow-md shadow-blue-200'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                              }`}
                        >
                           {d.label.charAt(0)}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <button
               onClick={handleSaveSettings}
               className="w-full mt-6 py-4 bg-pastel-pink text-white font-bold rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-400 transition-all active:scale-95"
            >
               {saved ? "Đã lưu rồi nha! 😘" : "Lưu cài đặt"}
            </button>
         </section>
      </div>
   );
};

export default Schedule;