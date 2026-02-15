
import { LessonContent, QuestionType } from '../../types';

export const NounsLesson: LessonContent = {
   meta: {
      id: 'grammar-nouns',
      title: 'Danh Từ (Nouns) - Tên gọi vạn vật',
      level: 'Beginner',
      category: 'Grammar',
      estimatedTime: 5,
      tags: ['Basic', 'Nouns'],
      order: 1,
   },
   theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-indigo-50 to-white rounded-3xl border border-indigo-100 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Nouns (Danh Từ)</h2>
        <div class="flex items-center gap-2 text-indigo-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Tên gọi của vạn vật
        </div>
      </header>

      <!-- Section 1: Definition -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">01</span>
          Danh từ là gì?
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Danh từ dùng để chỉ <strong>người, vật, địa điểm, con vật</strong> hoặc thậm chí là <strong>ý tưởng/cảm xúc</strong>.</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
           <div class="group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-indigo-200 transition-all">
              <span class="text-2xl mb-2 block group-hover:scale-125 transition-transform">👨‍🏫</span>
              <p class="font-bold text-gray-700">Người</p>
              <p class="text-[10px] text-gray-400">Teacher, Boy</p>
           </div>
           <div class="group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-indigo-200 transition-all">
              <span class="text-2xl mb-2 block group-hover:scale-125 transition-transform">🎁</span>
              <p class="font-bold text-gray-700">Vật</p>
              <p class="text-[10px] text-gray-400">Pen, Phone</p>
           </div>
           <div class="group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-indigo-200 transition-all">
              <span class="text-2xl mb-2 block group-hover:scale-125 transition-transform">🏞️</span>
              <p class="font-bold text-gray-700">Địa điểm</p>
              <p class="text-[10px] text-gray-400">Park, City</p>
           </div>
           <div class="group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center hover:border-indigo-200 transition-all">
              <span class="text-2xl mb-2 block group-hover:scale-125 transition-transform">💡</span>
              <p class="font-bold text-gray-700">Ý tưởng</p>
              <p class="text-[10px] text-gray-400">Love, Time</p>
           </div>
        </div>
      </section>

      <!-- Section 2: Countable vs Uncountable -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm">02</span>
          Đếm được & Không đếm được
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Countable -->
          <div class="bg-white rounded-3xl border border-emerald-100 p-5 shadow-sm space-y-3">
            <div class="flex items-center gap-2">
               <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg">C</span>
               <h4 class="font-bold text-gray-800">Danh từ Đếm được</h4>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed font-medium">Là những thứ vợ có thể dùng số để đếm trực tiếp (1, 2, 3...).</p>
            <div class="flex gap-2 text-xs">
              <span class="bg-gray-50 px-2 py-1 rounded-lg">One car</span>
              <span class="bg-gray-50 px-2 py-1 rounded-lg">Two cars</span>
            </div>
          </div>
          <!-- Uncountable -->
          <div class="bg-white rounded-3xl border border-rose-100 p-5 shadow-sm space-y-3">
            <div class="flex items-center gap-2">
               <span class="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-black rounded-lg">U</span>
               <h4 class="font-bold text-gray-800">Danh từ Không đếm được</h4>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed font-medium">Những thứ trừu tượng, chất lỏng hoặc quá nhỏ (nước, tình yêu, gạo).</p>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="bg-gray-50 px-2 py-1 rounded-lg">Water 💧</span>
              <span class="bg-gray-50 px-2 py-1 rounded-lg">Money 💸</span>
              <span class="bg-gray-50 px-2 py-1 rounded-lg">Rice 🍚</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Plural Rules & Irregulars -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 shadow-sm">03</span>
          Cách chuyển sang Số Nhiều
        </h3>
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-amber-50/50">
          <div class="p-5 border-b border-gray-50">
            <h4 class="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">Các quy tắc chính</h4>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-4 text-sm font-medium">
               <div class="flex justify-between border-b border-gray-50 pb-2">
                 <span class="text-gray-500">Thông thường: <strong class="text-gray-800">+ s</strong></span>
                 <span class="text-indigo-600 font-bold">Dog ➔ Dogs</span>
               </div>
               <div class="flex justify-between border-b border-gray-50 pb-2">
                 <span class="text-gray-500">Đuôi o, x, sh, ch, s: <strong class="text-gray-800">+ es</strong></span>
                 <span class="text-indigo-600 font-bold">Watch ➔ Watches</span>
               </div>
               <div class="flex justify-between border-b border-gray-50 pb-2">
                 <span class="text-gray-500">Phụ âm + y: <strong class="text-gray-800">➔ ies</strong></span>
                 <span class="text-indigo-600 font-bold">City ➔ Cities</span>
               </div>
               <div class="flex justify-between border-b border-gray-50 pb-2">
                 <span class="text-gray-500">Kết thúc f/fe: <strong class="text-gray-800">➔ ves</strong></span>
                 <span class="text-indigo-600 font-bold">Leaf ➔ Leaves</span>
               </div>
            </div>
          </div>
          <!-- Irregulars -->
          <div class="p-5 bg-amber-50/30">
            <div class="flex items-center gap-2 mb-4">
               <span class="w-2 h-2 rounded-full bg-amber-500"></span>
               <h4 class="font-bold text-sm text-amber-700">Dạng Bất Quy Tắc (Phải học thuộc nha vợ!)</h4>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Man</p>
                 <p class="font-black text-amber-600">MEN</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Woman</p>
                 <p class="font-black text-amber-600">WOMEN</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Child</p>
                 <p class="font-black text-amber-600">CHILDREN</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Tooth</p>
                 <p class="font-black text-amber-600">TEETH</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Foot</p>
                 <p class="font-black text-amber-600">FEET</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Person</p>
                 <p class="font-black text-amber-600">PEOPLE</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Mouse</p>
                 <p class="font-black text-amber-600">MICE</p>
               </div>
               <div class="bg-white p-2 rounded-xl border border-amber-100 shadow-sm">
                 <p class="text-[10px] text-gray-400">Sheep</p>
                 <p class="font-black text-amber-600">SHEEP (Giữ nguyên)</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Proper Nouns -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">04</span>
          Danh từ Riêng (Proper Nouns)
        </h3>
        <div class="p-6 bg-rose-50 rounded-3xl border border-rose-100 flex items-center gap-6">
           <div class="text-4xl">✍️</div>
           <div>
             <p class="text-sm text-gray-700 leading-relaxed font-medium">Nguyên tắc vàng: Luôn <strong class="text-rose-600 underline underline-offset-4">Viết Hoa</strong> chữ cái đầu cho tên người, địa danh, thứ, tháng, thương hiệu.</p>
             <p class="text-xs text-gray-400 mt-2 italic">Ví dụ: Tòng, Vietnam, Monday, January, Apple (Brand).</p>
           </div>
        </div>
      </section>
    </div>
  `,
   questions: [
      {
         id: 'n1',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "Which word is a NOUN (Danh từ)?",
         options: ["Run", "Happy", "Cat", "Quickly"],
         correctAnswer: "Cat",
         explanation: "'Cat' (con mèo) là danh từ chỉ con vật. Các từ còn lại là động từ, tính từ và trạng từ.",
      },
      {
         id: 'n2',
         type: QuestionType.FILL_GAP,
         question: "Plural form (số nhiều) of 'box' is _____",
         correctAnswer: "boxes",
         explanation: "Tận cùng là 'x' thì ta thêm 'es' nhé: box ➔ boxes.",
      },
      {
         id: 'n3',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "Chọn từ viết ĐÚNG chính tả (Danh từ riêng):",
         options: ["hanoi", "Hanoi", "haNoi", "HanoI"],
         correctAnswer: "Hanoi",
         explanation: "Danh từ riêng chỉ địa danh phải viết hoa chữ cái đầu tiên.",
      },
      {
         id: 'n4',
         type: QuestionType.FILL_GAP,
         question: "Plural form of 'baby' is _____",
         correctAnswer: "babies",
         explanation: "Tận cùng là phụ âm + 'y', ta đổi 'y' thành 'i' và thêm 'es'.",
      }
   ]
};
