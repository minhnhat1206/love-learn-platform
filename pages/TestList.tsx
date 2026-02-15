
import React from 'react';
import { Link } from 'react-router-dom';
import { AllTests } from '../lessons/testRegistry';
import { ClipboardList, Clock, CheckCircle2, Trophy } from 'lucide-react';

const TestList: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in-up">
            <header className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Kho Bài Kiểm Tra 📝
                </h2>
                <p className="text-gray-500">
                    Thử sức mình xem vợ đã nắm chắc kiến thức chưa nhé!
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-4">
                {AllTests.map(test => (
                    <Link
                        key={test.meta.id}
                        to={`/tests/${test.meta.id}`}
                        className="group bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-pastel-pink hover:shadow-md transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-pastel-pink/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${test.meta.level === 'Beginner' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                    }`}>
                                    {test.meta.level}
                                </span>
                                <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                                    <Clock size={12} /> {test.meta.estimatedTime} phút
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                                {test.meta.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {test.meta.description}
                            </p>

                            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 border-t border-gray-50 pt-4">
                                <span className="flex items-center gap-1">
                                    <ClipboardList size={14} className="text-pastel-blue" /> {test.meta.totalQuestions} Câu hỏi
                                </span>
                                <span className="flex items-center gap-1">
                                    <Trophy size={14} className="text-yellow-400" /> Đậu: {test.meta.passScore}/100
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {AllTests.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                    <p className="text-gray-400">Chưa có bài kiểm tra nào nè vợ ơi! Tòng đang soạn thêm...</p>
                </div>
            )}
        </div>
    );
};

export default TestList;
