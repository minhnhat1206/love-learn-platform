
import { LessonContent, QuestionType } from '../../types';

export const PronounsLesson: LessonContent = {
  meta: {
    id: 'grammar-pronouns',
    title: 'Đại Từ (Pronouns) - Xưng hô & Thay thế',
    level: 'Beginner',
    category: 'Grammar',
    estimatedTime: 5,
    tags: ['Basic', 'Pronouns'],
    order: 3,
  },
  theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-emerald-50 to-white rounded-3xl border border-emerald-100 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-100/50 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Pronouns (Đại Từ)</h2>
        <div class="flex items-center gap-2 text-emerald-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Người thay thế thầm lặng
        </div>
      </header>

      <!-- Section 1: Subject vs Object -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">01</span>
          Chủ ngữ & Tân ngữ
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Đại từ giúp câu văn ngắn gọn hơn bằng cách thay thế cho danh từ đã nhắc đến.</p>
        
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-emerald-50/50">
           <table class="w-full text-xs text-left">
              <thead class="bg-emerald-500 text-white uppercase font-black">
                 <tr>
                    <th class="px-4 py-3">Chủ ngữ (Đầu câu)</th>
                    <th class="px-4 py-3 text-center">➔</th>
                    <th class="px-4 py-3">Tân ngữ (Sau động từ)</th>
                 </tr>
              </thead>
              <tbody class="divide-y divide-gray-50 font-bold">
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">I</span> (Tôi)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">Me</td>
                 </tr>
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">You</span> (Bạn)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">You</td>
                 </tr>
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">He</span> (Anh ấy)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">Him</td>
                 </tr>
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">She</span> (Cô ấy)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">Her</td>
                 </tr>
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">We</span> (Chúng ta)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">Us</td>
                 </tr>
                 <tr class="hover:bg-emerald-50/50 transition-colors">
                    <td class="px-4 py-3"><span class="text-emerald-600">They</span> (Họ)</td>
                    <td class="px-4 py-3 text-center text-gray-300">➔</td>
                    <td class="px-4 py-3 font-black">Them</td>
                 </tr>
              </tbody>
           </table>
        </div>
        <div class="px-6 py-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-start gap-3">
           <span class="text-lg">📢</span>
           <p class="text-[11px] text-emerald-800 leading-relaxed font-medium"><strong>Ví dụ:</strong> <u>I</u> love Tòng. Tòng loves <u>me</u> too. (I là chủ ngữ, me là tân ngữ).</p>
        </div>
      </section>

      <!-- Section 2: Possessive -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 shadow-sm">02</span>
          Của ai đó? (Sở hữu)
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
           <!-- Possessive Adjective -->
           <div class="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
              <h4 class="font-bold text-sky-600 mb-3 flex items-center gap-2">
                 <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                 Tính từ sở hữu
              </h4>
              <p class="text-[10px] text-gray-400 mb-4 tracking-tighter uppercase font-black">Phải đi kèm với DANH TỪ</p>
              <div class="space-y-2 text-xs font-bold text-gray-600">
                 <div class="flex justify-between"><span>My cat</span> <span class="bg-sky-50 px-2 rounded">Của tôi</span></div>
                 <div class="flex justify-between"><span>Your cat</span> <span class="bg-sky-50 px-2 rounded">Của bạn</span></div>
                 <div class="flex justify-between"><span>His/Her cat</span> <span class="bg-sky-50 px-2 rounded">Của anh/cô ấy</span></div>
                 <div class="flex justify-between"><span>Our/Their cat</span> <span class="bg-sky-50 px-2 rounded">Của chúng ta/họ</span></div>
              </div>
           </div>
           <!-- Reflexive -->
           <div class="bg-white p-6 rounded-3xl border border-rose-100 shadow-sm">
              <h4 class="font-bold text-rose-600 mb-3 flex items-center gap-2">
                 <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                 Đại từ Phản thân
              </h4>
              <p class="text-[10px] text-gray-400 mb-4 tracking-tighter uppercase font-black">Tự mình làm gì đó</p>
              <div class="flex flex-wrap gap-2">
                 <span class="px-2 py-1 bg-rose-50 rounded-lg text-[11px] font-bold text-rose-700 border border-rose-100">Myself</span>
                 <span class="px-2 py-1 bg-rose-50 rounded-lg text-[11px] font-bold text-rose-700 border border-rose-100">Yourself</span>
                 <span class="px-2 py-1 bg-rose-50 rounded-lg text-[11px] font-bold text-rose-700 border border-rose-100">Himself</span>
                 <span class="px-2 py-1 bg-rose-50 rounded-lg text-[11px] font-bold text-rose-700 border border-rose-100">Herself</span>
              </div>
              <p class="text-[10px] text-gray-400 mt-4 italic">Ví dụ: I cook <strong>myself</strong>. (Tôi tự nấu ăn).</p>
           </div>
        </div>
      </section>
    </div>
  `,
  questions: [
    {
      id: 'p1',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "_____ is my best friend.",
      options: ["He", "Him", "His", "Self"],
      correctAnswer: "He",
      explanation: "Vị trí chủ ngữ (đầu câu) cần dùng đại từ nhân xưng 'He'.",
    },
    {
      id: 'p2',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "I love Tòng. I love _____ very much.",
      options: ["he", "him", "his", "ho"],
      correctAnswer: "him",
      explanation: "Vị trí tân ngữ (sau động từ 'love') cần dùng 'him'.",
    },
    {
      id: 'p3',
      type: QuestionType.FILL_GAP,
      question: "This is my wife. _____ name is Vo.",
      correctAnswer: "Her",
      explanation: "Tính từ sở hữu của 'cô ấy' (She) là 'Her'.",
    },
    {
      id: 'p4',
      type: QuestionType.MULTIPLE_CHOICE,
      question: "Look at _____! Note: 'us' means Tòng and Vợ.",
      options: ["we", "us", "our", "ours"],
      correctAnswer: "us",
      explanation: "Sau giới từ 'at' cần dùng đại từ tân ngữ 'us'.",
    }
  ]
};
