
import { LessonContent, QuestionType } from '../../types';

export const PresentSimpleLesson: LessonContent = {
  meta: {
    id: 'grammar-present-simple',
    title: 'Present Simple - Tình Yêu & Thói Quen',
    level: 'Beginner',
    category: 'Grammar',
    estimatedTime: 5,
    tags: ['Basic', 'Verbs'],
    order: 4,
  },
  theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-pastel-pink/20 to-white rounded-3xl border border-pastel-pink/30 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-pastel-pink/10 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Present Simple</h2>
        <div class="flex items-center gap-2 text-pastel-pinkDark font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-pastel-pink animate-pulse"></span>
          Thì Hiện Tại Đơn
        </div>
      </header>

      <!-- Section 1: Usage -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-pink-50 text-pastel-pinkDark shadow-sm">01</span>
          Cách Dùng (Usage)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Thì này dùng để diễn tả các chân lý, thói quen hoặc lịch trình cố định.</p>
        <div class="grid gap-3">
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-pastel-pink/30 transition-all hover:shadow-md hover:shadow-pink-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-pastel-pink mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-pastel-pinkDark transition-colors">Sự thật hiển nhiên</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Các quy luật tự nhiên, chân lý (The sun rises in the East).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-pastel-pink/30 transition-all hover:shadow-md hover:shadow-pink-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-pastel-pink mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-pastel-pinkDark transition-colors">Thói quen hằng ngày</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Các hành động lặp đi lặp lại (I drink coffee every morning).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-pastel-pink/30 transition-all hover:shadow-md hover:shadow-pink-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-pastel-pink mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-pastel-pinkDark transition-colors">Lịch trình/Thời gian biểu</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Tàu bè, máy bay, lịch học (The train leaves at 8 AM).</p>
             </div>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-pastel-pink/30 transition-all hover:shadow-md hover:shadow-pink-50 flex items-start gap-4">
             <div class="w-1.5 h-1.5 rounded-full bg-pastel-pink mt-2 group-hover:scale-150 transition-transform"></div>
             <div>
                <h4 class="font-bold text-gray-800 group-hover:text-pastel-pinkDark transition-colors">Trạng thái/Cảm xúc</h4>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Dùng với động từ chỉ tri giác (I love my wife, She knows the truth).</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Signals -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-50 text-pastel-blue shadow-sm">02</span>
          Dấu Hiệu Nhận Biết (Signal Words)
        </h3>
        <div class="bg-gray-50/50 p-5 rounded-3xl border border-gray-100 grid md:grid-cols-2 gap-6">
          <div>
            <span class="text-[10px] font-black uppercase text-gray-400 tracking-widest block mb-3">Tần suất cố định</span>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">Every day</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">Weekly</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">Once a month</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-gray-200 text-xs font-bold text-gray-600 shadow-sm">On Mondays</span>
            </div>
          </div>
          <div>
            <span class="text-[10px] font-black uppercase text-gray-400 tracking-widest block mb-3">Trạng từ tần suất (Adverbs)</span>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1.5 bg-white rounded-xl border border-blue-100 text-xs font-bold text-pastel-blue shadow-sm">Always</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-blue-100 text-xs font-bold text-pastel-blue shadow-sm">Usually</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-blue-100 text-xs font-bold text-pastel-blue shadow-sm">Often</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-blue-100 text-xs font-bold text-pastel-blue shadow-sm">Sometimes</span>
              <span class="px-3 py-1.5 bg-white rounded-xl border border-blue-100 text-xs font-bold text-pastel-blue shadow-sm">Never</span>
            </div>
            <p class="text-[10px] italic text-gray-400 mt-3 font-medium">Tip: Đứng TRƯỚC động từ thường, SAU To Be.</p>
          </div>
        </div>
      </section>

      <!-- Section 3: The 3 Forms - To Be -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-pastel-pink/10 text-pastel-pinkDark shadow-sm">03</span>
          Công Thức Động Từ To Be
        </h3>
        <div class="overflow-hidden rounded-3xl border border-pink-100 shadow-xl shadow-pink-50">
          <div class="grid grid-cols-3 bg-pastel-pink text-white font-bold p-4 text-center tracking-widest text-xs">
            <div>KHẲNG ĐỊNH (+)</div>
            <div>PHỦ ĐỊNH (-)</div>
            <div>NGHI VẤN (?)</div>
          </div>
          <div class="divide-y divide-gray-50">
            <div class="grid grid-cols-3 bg-white p-5 gap-4 text-center items-center">
              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400">Am / Is / Are</p>
                <p class="text-sm font-black text-pastel-pinkDark">I am <br/> He/She/It is <br/> You/We/They are</p>
              </div>
              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400">Not</p>
                <p class="text-sm font-black text-pastel-pinkDark">am not <br/> isn't <br/> aren't</p>
              </div>
              <div class="space-y-1 font-black text-pastel-pinkDark">
                <p class="text-xs font-bold text-gray-400">Am/Is/Are + S?</p>
                <p class="text-sm">Are you cold?<br/>Is she happy?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: The 3 Forms - Action Verbs -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-pastel-blue/10 text-pastel-blue shadow-sm">04</span>
          Công Thức Động Từ Thường
        </h3>
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl shadow-blue-50">
          <!-- Positive Form -->
          <div class="p-6 border-b border-gray-50 bg-gradient-to-r from-blue-50/30 to-white hover:from-blue-50 transition-all">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center text-xs font-black">+</span>
              <h4 class="font-bold text-gray-700 uppercase tracking-widest text-xs">Khẳng định (Positive)</h4>
            </div>
            <div class="pl-8 space-y-2">
              <p class="text-lg font-black text-gray-800">S + V(s/es)</p>
              <ul class="text-xs text-gray-500 space-y-1 italic">
                 <li>• I/You/We/They + V-nguyên mẫu (e.g., I <strong>love</strong> music)</li>
                 <li>• He/She/It + V-s/es (e.g., She <strong>loves</strong> music)</li>
              </ul>
            </div>
          </div>

          <!-- Negative Form -->
          <div class="p-6 border-b border-gray-50 bg-gradient-to-r from-pink-50/30 to-white hover:from-pink-50 transition-all">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-lg bg-pink-100 text-pink-500 flex items-center justify-center text-xs font-black">-</span>
              <h4 class="font-bold text-gray-700 uppercase tracking-widest text-xs">Phủ định (Negative)</h4>
            </div>
            <div class="pl-8 space-y-2">
              <p class="text-lg font-black text-gray-800">S + do/does + not + V(inf)</p>
              <p class="text-xs text-gray-500 leading-relaxed">Khi có trợ động từ <strong>do/does</strong>, động từ chính phải ở dạng <strong>nguyên mẫu</strong> vợ nha!</p>
            </div>
          </div>

          <!-- Question Form -->
          <div class="p-6 bg-gradient-to-r from-orange-50/30 to-white hover:from-orange-50 transition-all">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-black">?</span>
              <h4 class="font-bold text-gray-700 uppercase tracking-widest text-xs">Nghi vấn (Interrogative)</h4>
            </div>
            <div class="pl-8 space-y-2">
              <p class="text-lg font-black text-gray-800 font-mono">Do/Does + S + V(inf)?</p>
              <p class="text-xs text-gray-500 italic">Do you like tea? | Does she live here?</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Spelling Table -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-gray-100 text-gray-500 shadow-sm">05</span>
          Bảng Chia Đuôi Động Từ
        </h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <p class="text-xs font-bold text-pastel-pinkDark mb-2 underline">Thông thường (+s)</p>
            <p class="text-xl font-black text-gray-800">V + s</p>
            <p class="text-[10px] text-gray-400 mt-2 italic px-2 py-1 bg-gray-50 inline-block rounded-lg">loves, works, eats</p>
          </div>
          <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <p class="text-xs font-bold text-pastel-pinkDark mb-2 underline">O, CH, SH, X, S, Z (+es)</p>
            <p class="text-xl font-black text-gray-800">V + es</p>
            <p class="text-[10px] text-gray-400 mt-2 italic px-2 py-1 bg-gray-50 inline-block rounded-lg">watches, goes, fixes</p>
          </div>
          <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <p class="text-xs font-bold text-pastel-pinkDark mb-2 underline">Phụ âm + Y (ies)</p>
            <p class="text-xl font-black text-gray-800">y ➔ ies</p>
            <p class="text-[10px] text-gray-400 mt-2 italic px-2 py-1 bg-gray-50 inline-block rounded-lg">studies, flies, cries</p>
          </div>
        </div>
      </section>
    </div>
  `,
  questions: [
    {
      id: 'q1',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "Which sentence is CORRECT?",
      options: [
        "She is works at the hospital.",
        "She works at the hospital.",
        "She work at the hospital.",
        "She is work at the hospital."
      ],
      correctAnswer: "She works at the hospital.",
      explanation: "Lỗi phổ biến là thêm 'is' và 'works' cùng lúc. 'Work' là động từ thường, chỉ cần chia 'works' cho ngôi 'She'.",
    },
    {
      id: 'q2',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "Mary always _____ (study) English on Saturdays.",
      options: ["study", "studys", "studies", "studying"],
      correctAnswer: "studies",
      explanation: "'Study' kết thúc bằng phụ âm 'd' và 'y', ta đổi 'y' thành 'i' rồi thêm 'es'.",
    },
    {
      id: 'q3',
      type: QuestionType.FILL_GAP,
      question: "I _____ (never/be) late for work.",
      correctAnswer: "am never",
      explanation: "Trạng từ chỉ tần suất (never) đứng SAU động từ To Be (am).",
    },
    {
      id: 'q4',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "My cat _____ (not/like) milk.",
      options: ["not like", "don't like", "doesn't likes", "doesn't like"],
      correctAnswer: "doesn't like",
      explanation: "Phủ định ngôi số ít: 'doesn't' + Động từ nguyên mẫu (bỏ 's' đi nha vợ!).",
    },
    {
      id: 'q5',
      type: QuestionType.FILL_GAP,
      question: "Do you _____ (watch) TV every night?",
      correctAnswer: "watch",
      explanation: "Trong câu hỏi có trợ động từ 'Do', động từ chính giữ nguyên mẫu.",
    },
    {
      id: 'q6',
      type: QuestionType.REWRITE,
      question: "Rewrite: He plays tennis often. (Put 'often' in the correct position)",
      correctAnswer: "He often plays tennis",
      explanation: "Trạng từ chỉ tần suất (often) đứng TRƯỚC động từ thường (plays).",
    }
  ]
};
