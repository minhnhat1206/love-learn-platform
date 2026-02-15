import { TestContent, QuestionType } from '../types';

export const Test1: TestContent = {
    meta: {
        id: 'test-01-basic-tenses',
        title: 'Test 1: Present & Past Simple',
        description: 'Kiểm tra kiến thức về 2 thì cơ bản nhất: Hiện tại đơn & Quá khứ đơn.',
        level: 'Beginner',
        estimatedTime: 10,
        totalQuestions: 10,
        passScore: 70,
    },
    questions: [
        // Present Simple
        {
            id: 't1-q1',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "She _____ (work) in a bank.",
            options: ["work", "works", "working", "is work"],
            correctAnswer: "works",
            explanation: "Hiện tại đơn với ngôi thứ 3 số ít (She) -> thêm 's'.",
        },
        {
            id: 't1-q2',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "_____ you busy now?",
            options: ["Are", "Do", "Is", "Does"],
            correctAnswer: "Are",
            explanation: "Câu hỏi với tính từ (busy) phải dùng động từ To Be. Ngôi 'You' đi với 'Are'.",
        },
        {
            id: 't1-q3',
            type: QuestionType.FILL_GAP,
            question: "The sun _____ (rise) in the East.",
            correctAnswer: "rises",
            explanation: "Sự thật hiển nhiên -> Hiện tại đơn.",
        },
        {
            id: 't1-q4',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "He _____ (not/drink) coffee in the evening.",
            options: ["don't drink", "doesn't drink", "doesn't drinks", "not drink"],
            correctAnswer: "doesn't drink",
            explanation: "Phủ định hiện tại đơn với 'He' dùng 'doesn't' + V-nguyên mẫu.",
        },
        // Past Simple
        {
            id: 't1-q5',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "I _____ (see) a ghost last night!",
            options: ["seed", "see", "saw", "was see"],
            correctAnswer: "saw",
            explanation: "Quá khứ của 'see' là 'saw' (Bất quy tắc).",
        },
        {
            id: 't1-q6',
            type: QuestionType.FILL_GAP,
            question: "_____ (be) you tired yesterday?",
            correctAnswer: "Were",
            explanation: "Câu hỏi với tính từ (tired) ở quá khứ dùng To Be. Ngôi 'You' dùng 'Were'.",
        },
        {
            id: 't1-q7',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "They _____ (not/go) to school last Sunday.",
            options: ["didn't went", "didn't go", "weren't go", "don't went"],
            correctAnswer: "didn't go",
            explanation: "Phủ định quá khứ dùng 'didn't' + V-nguyên mẫu (go).",
        },
        {
            id: 't1-q8',
            type: QuestionType.REWRITE,
            question: "Rewrite: She bought a new car. (Change to Negative)",
            correctAnswer: "She didn't buy a new car",
            explanation: "Phủ định: didn't + V-nguyên mẫu (buy).",
        },
        // Mix
        {
            id: 't1-q9',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "Look! He _____ (run) very fast. (Trick question - Present Continuous context but checking verb form)",
            options: ["runs", "run", "running", "is running"],
            correctAnswer: "is running",
            explanation: "Dấu hiệu 'Look!' -> Hiện tại tiếp diễn (để lừa chút thôi, nhưng vợ nhớ là 'is running' nhé, bài sau sẽ học kỹ hơn).",
        },
        {
            id: 't1-q10',
            type: QuestionType.FILL_GAP,
            question: "I usually _____ (eat) breakfast at 7 AM, but yesterday I _____ (eat) at 9 AM.",
            correctAnswer: "eat / ate",
            explanation: "Vế đầu là thói quen (eat), vế sau là quá khứ (ate).",
        }
    ]
};
