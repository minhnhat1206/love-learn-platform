
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById } from '../lessons/registry';
import { calculateNextReview } from '../services/sm2';
import { getAppState, updateReview, updateUserStats } from '../services/storage';
import { QuestionType } from '../types';
import { Check, X, ArrowRight, Heart, BookOpen, BrainCircuit, PartyPopper } from 'lucide-react';

const LessonPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [lesson, setLesson] = useState(getLessonById(id || ''));
  // Phases: 'theory' -> 'quiz' -> 'completed'
  const [phase, setPhase] = useState<'theory' | 'quiz' | 'completed'>('theory');
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [startTime] = useState(Date.now());
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);

  useEffect(() => {
    // If there is no theory content, jump straight to quiz (backward compatibility)
    if (lesson && !lesson.theory) {
      setPhase('quiz');
    }
  }, [lesson]);
  
  if (!lesson) return <div className="p-10 text-center">Không tìm thấy bài học này :(</div>;

  const currentQuestion = lesson.questions[currentIndex];
  const progress = ((currentIndex) / lesson.questions.length) * 100;

  const handleStartQuiz = () => {
    setPhase('quiz');
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    if (!userAnswer.trim()) return;

    const correct = userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);
    if (correct) setCorrectCount(c => c + 1);
  };

  const handleNext = (qualityScore: number) => {
    if (currentIndex < lesson.questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setUserAnswer('');
      setShowResult(false);
    } else {
      finishLesson();
    }
  };

  const finishLesson = () => {
    setPhase('completed');
    const endTime = Date.now();
    const durationMinutes = (endTime - startTime) / 1000 / 60;
    
    // Calculate overall quality (0-5) based on correct percentage
    const percentage = correctCount / lesson.questions.length;
    let quality = 0;
    if (percentage === 1) quality = 5;
    else if (percentage > 0.8) quality = 4;
    else if (percentage > 0.6) quality = 3;
    else if (percentage > 0.4) quality = 2;
    else quality = 1;

    // --- POINTS CALCULATION ---
    // 10 points base, +5 points for >80%, +5 points for 100%
    let points = 10; 
    if (percentage > 0.8) points += 5;
    if (percentage === 1) points += 5;
    setEarnedPoints(points);

    // Save SM-2 Data
    const appState = getAppState();
    const currentReview = appState.reviews[lesson.meta.id];
    const newReview = calculateNextReview(currentReview, quality, lesson.meta.id);
    
    updateReview(newReview);
    // Add points to stats
    updateUserStats(Math.ceil(durationMinutes), true, 1, points);
  };

  // --- RENDER COMPLETED SCREEN ---
  if (phase === 'completed') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 animate-fade-in-up">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce-slow">
          <Heart className="text-green-500 fill-green-500" size={48} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Tuyệt vời ông mặt trời! ☀️</h2>
        <p className="text-gray-500 max-w-md">
          Vợ đã hoàn thành bài <strong>{lesson.meta.title}</strong>. Tòng tự hào về vợ lắm!
        </p>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm">
           <div className="flex justify-between items-center mb-2">
             <span>Đúng:</span>
             <span className="font-bold text-green-600">{correctCount}/{lesson.questions.length}</span>
           </div>
           <div className="flex justify-between items-center bg-yellow-50 p-3 rounded-xl border border-yellow-100">
             <span className="flex items-center gap-2 text-yellow-800 font-bold">
                <PartyPopper size={20} /> Điểm thưởng:
             </span>
             <span className="font-bold text-yellow-600 text-xl">+{earnedPoints} tim ❤️</span>
           </div>
        </div>
        <div className="flex gap-3">
            <button 
              onClick={() => navigate('/rewards')}
              className="bg-white text-pastel-pinkDark font-bold py-3 px-6 rounded-full border-2 border-pink-100 hover:bg-pink-50 transition-all"
            >
              Đổi quà ngay
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-pastel-pink text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-pink-200 hover:bg-pink-400 transition-all"
            >
              Về trang chủ
            </button>
        </div>
      </div>
    );
  }

  // --- RENDER THEORY SCREEN ---
  if (phase === 'theory') {
    return (
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 text-sm">
            ✕ Thoát
          </button>
          <div className="flex items-center gap-2 text-pastel-pinkDark font-bold">
            <BookOpen size={18} />
            <span>Góc học tập</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
           <h2 className="text-2xl font-bold text-gray-800 mb-6">{lesson.meta.title}</h2>
           
           {/* Render HTML content safely */}
           <div 
             className="prose prose-pink max-w-none"
             dangerouslySetInnerHTML={{ __html: lesson.theory }} 
           />
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleStartQuiz}
            className="bg-pastel-pink text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-400 transition-all flex items-center gap-3 active:scale-95"
          >
            <BrainCircuit size={24} />
            <span>Vợ đã hiểu, kiểm tra thôi!</span>
          </button>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-4 italic">
          Đọc kỹ nha, lát nữa Tòng hỏi đó! 🧐
        </p>
      </div>
    );
  }

  // --- RENDER QUIZ SCREEN ---
  return (
    <div className="max-w-2xl mx-auto animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-gray-600 text-sm">
          ✕ Thoát
        </button>
        <div className="text-sm font-bold text-pastel-pinkDark">
            {lesson.meta.title} (Câu hỏi)
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-pastel-pink transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[300px] flex flex-col justify-center mb-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-bold mb-4 w-max">
          Câu {currentIndex + 1}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
           {currentQuestion.question}
        </h3>

        {!showResult && (
           <div className="space-y-4">
              {currentQuestion.type === QuestionType.MULTIPLE_CHOICE ? (
                <div className="grid grid-cols-1 gap-3">
                   {currentQuestion.options?.map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => setUserAnswer(opt)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${userAnswer === opt ? 'border-pastel-pink bg-pink-50 text-pastel-pinkDark font-bold' : 'border-gray-100 hover:border-pink-100'}`}
                      >
                        {opt}
                      </button>
                   ))}
                </div>
              ) : (
                <input 
                  type="text" 
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Nhập câu trả lời của vợ..."
                  // FIX: Added bg-white and text-gray-900 for high contrast input
                  className="w-full p-4 text-lg bg-white text-gray-900 border-2 border-gray-200 rounded-xl focus:border-pastel-pink focus:outline-none focus:ring-4 focus:ring-pink-50 transition-all placeholder:text-gray-400"
                  autoFocus
                />
              )}
           </div>
        )}

        {showResult && (
           <div className={`mt-4 p-4 rounded-xl ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} animate-fade-in`}>
              <div className="flex items-center gap-2 font-bold mb-1">
                 {isCorrect ? <Check size={20}/> : <X size={20}/>}
                 {isCorrect ? "Chính xác! Vợ giỏi quá đi 😍" : "Suýt đúng rồi! 🥺"}
              </div>
              {!isCorrect && (
                 <p className="text-sm mt-1">Đáp án đúng là: <span className="font-bold">{currentQuestion.correctAnswer}</span></p>
              )}
              <p className="text-sm mt-2 text-gray-600 italic border-t border-black/5 pt-2">
                 💡 {currentQuestion.explanation}
              </p>
           </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end">
         {!showResult ? (
            <button 
              onClick={handleSubmit}
              disabled={!userAnswer}
              className="bg-pastel-pink text-white font-bold py-3 px-8 rounded-2xl shadow-md shadow-pink-200 hover:bg-pink-400 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2"
            >
              Trả lời
            </button>
         ) : (
            <button 
              onClick={() => handleNext(isCorrect ? 5 : 2)}
              className="bg-pastel-blue text-white font-bold py-3 px-8 rounded-2xl shadow-md shadow-blue-200 hover:bg-blue-400 transition-all flex items-center gap-2"
            >
              Tiếp tục <ArrowRight size={20}/>
            </button>
         )}
      </div>
    </div>
  );
};

export default LessonPlayer;
