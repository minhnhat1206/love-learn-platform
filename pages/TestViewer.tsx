
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTestById } from '../lessons/testRegistry';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { syncTestResult } from '../services/googleSheetService';
import { getUserId, updateUserStats } from '../services/storage';

const TestViewer: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const test = getTestById(id || '');

    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
    const [bonusPoints, setBonusPoints] = useState(0);

    if (!test) return <div className="p-8 text-center text-gray-500">Không tìm thấy bài kiểm tra này!</div>;

    const handleSelectOption = (questionId: string, option: string) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [questionId]: option }));
    };

    const handleFillGap = (questionId: string, value: string) => {
        if (submitted) return;
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const calculateScore = () => {
        let correctCount = 0;
        test.questions.forEach(q => {
            const userAnswer = answers[q.id]?.trim().toLowerCase();
            const correct = q.correctAnswer.toLowerCase();
            if (userAnswer === correct || (q.correctAnswer.includes('/') && q.correctAnswer.toLowerCase().split(' / ').includes(userAnswer))) {
                correctCount++;
            }
        });
        return Math.round((correctCount / test.meta.totalQuestions) * 100);
    };

    const handleSubmit = async () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setSubmitted(true);
        setSyncStatus('syncing');

        // New Reward Formula: score > 50 ? (score - 50) / 2 : 0
        let calculatedBonus = 0;
        if (finalScore > 50) {
            calculatedBonus = Math.floor((finalScore - 50) / 2);
        }
        setBonusPoints(calculatedBonus);

        if (finalScore >= test.meta.passScore) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFB6C1', '#FF69B4', '#FFD700']
            });
        }

        // Update local points immediately for instant feedback
        if (calculatedBonus > 0) {
            updateUserStats(0, false, 0, calculatedBonus);
        }

        // Sync to Cloud
        const currentUserId = getUserId();
        const resultData = {
            testId: test.meta.id,
            score: finalScore,
            correctCount: Math.round((finalScore / 100) * test.meta.totalQuestions),
            totalQuestions: test.meta.totalQuestions
        };

        const result = await syncTestResult(currentUserId, resultData);
        if (result.success) {
            setSyncStatus('success');
        } else {
            setSyncStatus('error');
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in pb-20">
            {/* Header */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pastel-pink to-pastel-blue"></div>
                <h2 className="text-2xl font-black text-gray-800 mb-2">{test.meta.title}</h2>
                <p className="text-gray-500 text-sm">{test.meta.description}</p>

                {submitted && (
                    <div className={`mt-6 p-4 rounded-2xl animate-fade-in-up ${score >= test.meta.passScore ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        <p className="text-xs font-bold uppercase tracking-widest mb-1">Kết quả của vợ</p>
                        <p className="text-4xl font-black mb-2">{score}/100</p>
                        <p className="text-sm font-medium mb-2">
                            {score >= test.meta.passScore ? "Giỏi quá vợ ơi! Đậu rồi nha! 🎉" : "Cố lên vợ ơi, thử lại lần nữa nhé! 💪"}
                        </p>

                        {/* Sync Status */}
                        {syncStatus === 'syncing' && <p className="text-xs text-gray-500 animate-pulse">Đang lưu điểm lên mây... ☁️</p>}
                        {syncStatus === 'success' && (
                            <div className="mt-2 text-xs font-bold text-blue-600 flex flex-col items-center">
                                <span>✅ Đã lưu kết quả!</span>
                                {bonusPoints > 0 && <span className="text-orange-500 mt-1">🎁 +{bonusPoints} điểm thưởng!</span>}
                            </div>
                        )}
                        {syncStatus === 'error' && <p className="text-xs text-red-400 mt-1">⚠️ Không lưu được điểm (Lỗi mạng hoặc Script)</p>}
                    </div>
                )}
            </div>

            {/* Questions */}
            <div className="space-y-6">
                {test.questions.map((q, index) => {
                    const isCorrect = submitted && (answers[q.id]?.toLowerCase() === q.correctAnswer.toLowerCase() || (q.correctAnswer.includes('/') && q.correctAnswer.toLowerCase().split(' / ').includes(answers[q.id]?.toLowerCase())));

                    return (
                        <div key={q.id} className={`bg-white p-6 rounded-3xl border transition-all ${submitted
                            ? (isCorrect ? 'border-green-200 ring-1 ring-green-100' : 'border-red-200 ring-1 ring-red-100')
                            : 'border-gray-100 shadow-sm'
                            }`}>
                            <div className="flex gap-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 text-gray-500 font-bold flex items-center justify-center text-sm">
                                    {index + 1}
                                </span>
                                <div className="flex-1 space-y-4">
                                    <p className="font-bold text-gray-800 text-lg">{q.question}</p>

                                    {/* Options or Input based on type */}
                                    {q.options ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {q.options.map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => handleSelectOption(q.id, opt)}
                                                    disabled={submitted}
                                                    className={`p-3 rounded-xl text-left text-sm font-medium transition-all ${answers[q.id] === opt
                                                        ? 'bg-pastel-pink text-white shadow-md'
                                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                                        } ${submitted && opt.toLowerCase() === q.correctAnswer.toLowerCase() ? '!bg-green-100 !text-green-700 !border-green-300 border' : ''}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            disabled={submitted}
                                            value={answers[q.id] || ''}
                                            onChange={(e) => handleFillGap(q.id, e.target.value)}
                                            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-pastel-pink transition-all font-medium"
                                            placeholder="Nhập câu trả lời..."
                                        />
                                    )}

                                    {/* Feedback */}
                                    {submitted && (
                                        <div className="pt-4 border-t border-gray-50 mt-4 text-sm">
                                            <div className="flex items-center gap-2 font-bold mb-1">
                                                {isCorrect ? (
                                                    <span className="text-green-600 flex items-center gap-1"><CheckCircle2 size={16} /> Chính xác!</span>
                                                ) : (
                                                    <span className="text-red-500 flex items-center gap-1"><XCircle size={16} /> Chưa đúng rồi...</span>
                                                )}
                                            </div>
                                            {!isCorrect && (
                                                <div className="text-gray-600">
                                                    Đáp án đúng: <span className="font-bold text-gray-800">{q.correctAnswer}</span>
                                                </div>
                                            )}
                                            <p className="text-gray-500 italic mt-2 bg-gray-50 p-3 rounded-xl text-xs leading-relaxed">
                                                💡 {q.explanation}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Action Bar */}
            <div className="sticky bottom-6 flex justify-center gap-4">
                {submitted ? (
                    <>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-white text-gray-600 font-bold rounded-2xl shadow-lg shadow-gray-200 hover:bg-gray-50 transition-all flex items-center gap-2"
                        >
                            <RefreshCcw size={20} /> Làm lại bài
                        </button>
                        <button
                            onClick={() => navigate('/tests')}
                            className="px-6 py-3 bg-pastel-pink text-white font-bold rounded-2xl shadow-lg shadow-pink-200 hover:bg-pastel-pinkDark transition-transform hover:scale-105 flex items-center gap-2"
                        >
                            Học bài khác <ArrowRight size={20} />
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length < test.questions.length}
                        className={`px-8 py-4 rounded-2xl font-black text-white shadow-xl transition-all flex items-center gap-2 ${Object.keys(answers).length < test.questions.length
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-pastel-pink to-pink-400 hover:scale-105 shadow-pink-200'
                            }`}
                    >
                        Nộp bài thi <ArrowRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TestViewer;
