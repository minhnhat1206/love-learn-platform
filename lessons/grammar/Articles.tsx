
import { LessonContent, QuestionType } from '../../types';

export const ArticlesLesson: LessonContent = {
   meta: {
      id: 'grammar-articles',
      title: 'Mạo Từ (A / An / The)',
      level: 'Beginner',
      category: 'Grammar',
      estimatedTime: 5,
      tags: ['Basic', 'Articles'],
      order: 2,
   },
   theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-100/50 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Articles (Mạo Từ)</h2>
        <div class="flex items-center gap-2 text-amber-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          A, An, The & Ø
        </div>
      </header>

      <!-- Section 1: A / An -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 shadow-sm">01</span>
          A & An (Mạo từ bất định)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Dùng cho danh từ số ít, đếm được khi nhắc đến lần đầu hoặc chưa xác định.</p>
        
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg shadow-amber-50/50 flex flex-col md:flex-row">
           <div class="md:w-1/2 p-6 bg-amber-50/30 border-b md:border-b-0 md:border-r border-gray-100">
              <div class="flex items-center gap-2 mb-4">
                <p class="text-4xl font-black text-amber-400">A</p>
                <div class="text-[10px] font-bold text-gray-400 leading-none">Dùng trước<br/>PHỤ ÂM</div>
              </div>
              <ul class="text-sm space-y-2 text-gray-600 font-medium">
                 <li class="flex items-center gap-2 animate-fade-in"><span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> a <strong>Boy</strong>, a <strong>Car</strong></li>
                 <li class="flex items-center gap-2 text-orange-600 bg-orange-50 p-2 rounded-xl text-xs">💬 Trick: <strong>a university</strong> (âm /ju:/ là phụ âm)</li>
              </ul>
           </div>
           <div class="md:w-1/2 p-6 bg-blue-50/30">
              <div class="flex items-center gap-2 mb-4">
                <p class="text-4xl font-black text-blue-400">An</p>
                <div class="text-[10px] font-bold text-gray-400 leading-none">Dùng trước<br/>NGUYÊN ÂM</div>
              </div>
              <ul class="text-sm space-y-2 text-gray-600 font-medium">
                 <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> an <strong>apple, an <strong>egg</li>
                 <li class="flex items-center gap-2 text-blue-600 bg-blue-100/50 p-2 rounded-xl text-xs">💬 Trick: <strong>an hour</strong> (âm /h/ câm, bắt đầu bằng nguyên âm)</li>
              </ul>
           </div>
        </div>
      </section>

      <!-- Section 2: The -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">02</span>
          The (Mạo từ xác định)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Dùng khi vật đó đã được xác định, cả vợ và Tòng đều biết là cái nào.</p>
        
        <div class="grid md:grid-cols-3 gap-4">
           <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div class="text-2xl mb-2">☝️</div>
              <h4 class="font-bold text-gray-800 text-sm">Nhắc lại</h4>
              <p class="text-[10px] text-gray-400 leading-relaxed mt-1">Vật đã được nhắc đến trước đó. (I saw a dog. <strong>The dog</strong> ran away).</p>
           </div>
           <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div class="text-2xl mb-2">🌍</div>
              <h4 class="font-bold text-gray-800 text-sm">Duy nhất</h4>
              <p class="text-[10px] text-gray-400 leading-relaxed mt-1">Vật chỉ có một trên đời. (The Sun, The Moon, The President).</p>
           </div>
           <div class="p-5 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <div class="text-2xl mb-2">🏆</div>
              <h4 class="font-bold text-gray-800 text-sm">So sánh nhất</h4>
              <p class="text-[10px] text-gray-400 leading-relaxed mt-1">Trước tính từ so sánh nhất. (The best, The tallest boy).</p>
           </div>
        </div>

        <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl">
           <p class="text-xs text-indigo-700 font-bold">💡 Tip thêm cho vợ: "The" cũng dùng cho nhạc cụ (The guitar, The piano) và các dãy núi, con sông (The Mekong river).</p>
        </div>
      </section>

      <!-- Section 3: No Article -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">03</span>
          Trường hợp KHÔNG dùng mạo từ (Ø)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2 italic">Vợ đừng điền gì vào trước các danh từ này nha:</p>
        
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
           <table class="w-full text-xs text-left">
              <thead class="bg-gray-50 text-gray-400 uppercase font-black">
                 <tr>
                    <th class="px-6 py-3">Loại</th>
                    <th class="px-6 py-3">Ví dụ</th>
                 </tr>
              </thead>
              <tbody class="divide-y divide-gray-50 font-bold text-gray-600">
                 <tr>
                    <td class="px-6 py-4">Tên quốc gia (trừ vài nước)</td>
                    <td class="px-6 py-4 text-rose-500">Vietnam, Japan</td>
                 </tr>
                 <tr>
                    <td class="px-6 py-4">Môn học / Thể thao</td>
                    <td class="px-6 py-4 text-rose-500">English, Football</td>
                 </tr>
                 <tr>
                    <td class="px-6 py-4">Các bữa ăn</td>
                    <td class="px-6 py-4 text-rose-500">Breakfast, Lunch</td>
                 </tr>
                 <tr>
                    <td class="px-6 py-4">Danh từ số nhiều (chung chung)</td>
                    <td class="px-6 py-4 text-rose-500">I love cats (Mèo nói chung)</td>
                 </tr>
              </tbody>
           </table>
        </div>
      </section>
    </div>
  `,
   questions: [
      {
         id: 'a1',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "I have _____ apple.",
         options: ["a", "an", "the", "zero"],
         correctAnswer: "an",
         explanation: "'apple' bắt đầu bằng nguyên âm 'a', nên dùng 'an'.",
      },
      {
         id: 'a2',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "Look at _____ sun!",
         options: ["a", "an", "the", "zero"],
         correctAnswer: "the",
         explanation: "Mặt trời (sun) là duy nhất, nên dùng 'The'.",
      },
      {
         id: 'a3',
         type: QuestionType.FILL_GAP,
         question: "She plays _____ piano very well.",
         correctAnswer: "the",
         explanation: "Trước tên nhạc cụ, ta luôn dùng 'the'.",
      },
      {
         id: 'a4',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "I live in _____ Vietnam.",
         options: ["a", "an", "the", "zero (không điền)"],
         correctAnswer: "zero (không điền)",
         explanation: "Trước tên quốc gia (trừ vài ngoại lệ như The USA), ta KHÔNG dùng mạo từ.",
      }
   ]
};
