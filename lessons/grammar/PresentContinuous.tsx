
import { LessonContent, QuestionType } from '../../types';

export const PresentContinuousLesson: LessonContent = {
    meta: {
        id: 'grammar-present-continuous',
        title: 'Present Continuous - Đang diễn ra & Kế hoạch',
        level: 'Beginner',
        category: 'Grammar',
        estimatedTime: 5,
        tags: ['Basic', 'Verbs', 'Continuous'],
        order: 6,
    },
    theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-violet-50 to-white rounded-3xl border border-violet-100 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-violet-100/50 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Present Continuous</h2>
        <div class="flex items-center gap-2 text-violet-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          Thì Hiện Tại Tiếp Diễn
        </div>
      </header>

      <!-- Section 1: Usage -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-violet-100 text-violet-600 shadow-sm">01</span>
          Cách Dùng (Usage)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Dùng để diễn tả những gì ĐANG xảy ra tại thời điểm nói hoặc xung quanh thời điểm nói.</p>
        <div class="grid md:grid-cols-2 gap-3">
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md hover:shadow-violet-50">
             <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">⏳</span>
                <h4 class="font-bold text-gray-800">Hành động đang xảy ra</h4>
             </div>
             <p class="text-xs text-gray-500 leading-relaxed">Ví dụ: I <strong>am teaching</strong> English right now. (Tòng đang dạy tiếng Anh ngay lúc này).</p>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md hover:shadow-violet-50">
             <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">📅</span>
                <h4 class="font-bold text-gray-800">Kế hoạch tương lai</h4>
             </div>
             <p class="text-xs text-gray-500 leading-relaxed">Đã lên lịch chắc chắn. (I <strong>am flying</strong> to Paris tomorrow).</p>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md hover:shadow-violet-50">
             <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">😡</span>
                <h4 class="font-bold text-gray-800">Phàn nàn (Always)</h4>
             </div>
             <p class="text-xs text-gray-500 leading-relaxed">Dùng với 'always' để phàn nàn về thói quen xấu. (He <strong>is always</strong> losing his keys).</p>
          </div>
          <div class="group p-4 rounded-2xl bg-white border border-gray-100 hover:border-violet-200 transition-all hover:shadow-md hover:shadow-violet-50">
             <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">📈</span>
                <h4 class="font-bold text-gray-800">Xu hướng thay đổi</h4>
             </div>
             <p class="text-xs text-gray-500 leading-relaxed">Sự thay đổi dần dần. (Your English <strong>is getting</strong> better).</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Formula -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-fuchsia-100 text-fuchsia-600 shadow-sm">02</span>
          Công Thức (Formula)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2 italic">Luôn nhớ: <strong class="text-violet-600">Be + V-ing</strong>. Thiếu một trong hai là sai đó vợ nha!</p>
        
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-fuchsia-50/50">
          <!-- Positive -->
          <div class="p-5 border-b border-gray-50 flex items-center gap-4">
             <div class="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center font-black text-sm">+</div>
             <div>
                <p class="text-lg font-black text-gray-800">S + am/is/are + V-ing</p>
                <p class="text-xs text-gray-400 italic">I am working / She is sleeping / They are running</p>
             </div>
          </div>
          <!-- Negative -->
          <div class="p-5 border-b border-gray-50 flex items-center gap-4">
             <div class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-black text-sm">-</div>
             <div>
                <p class="text-lg font-black text-gray-800">S + am/is/are + NOT + V-ing</p>
                <p class="text-xs text-gray-400 italic">I am not working / She isn't sleeping</p>
             </div>
          </div>
          <!-- Question -->
          <div class="p-5 flex items-center gap-4">
             <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm">?</div>
             <div>
                <p class="text-lg font-black text-gray-800">Am/Is/Are + S + V-ing?</p>
                <p class="text-xs text-gray-400 italic">Are you listening? / Is he coming?</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Spelling Rules -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 shadow-sm">03</span>
          Quy Tắc Thêm -ING
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
           <div class="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase">Tận cùng là 'e'</h4>
              <p class="text-xs text-gray-600 font-medium mb-1">Bỏ 'e' rồi thêm 'ing'</p>
              <div class="flex gap-2">
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Make ➔ Making</span>
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Write ➔ Writing</span>
              </div>
           </div>
           <div class="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase">1 nguyên âm + 1 phụ âm</h4>
              <p class="text-xs text-gray-600 font-medium mb-1">Gấp đôi phụ âm cuối</p>
              <div class="flex gap-2">
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Run ➔ Running</span>
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Sit ➔ Sitting</span>
              </div>
           </div>
           <div class="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase">Tận cùng là 'ie'</h4>
              <p class="text-xs text-gray-600 font-medium mb-1">Đổi 'ie' thành 'y' rồi thêm 'ing'</p>
              <div class="flex gap-2">
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Die ➔ Dying</span>
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Lie ➔ Lying</span>
              </div>
           </div>
           <div class="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase">Ngoại lệ (w, x, y)</h4>
              <p class="text-xs text-gray-600 font-medium mb-1">Không gấp đôi phụ âm cuối</p>
              <div class="flex gap-2">
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Play ➔ Playing</span>
                <span class="bg-white px-2 py-1 rounded text-[10px] font-bold text-gray-500 shadow-sm">Fix ➔ Fixing</span>
              </div>
           </div>
        </div>
      </section>

      <!-- Section 4: Signal Words -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-cyan-100 text-cyan-600 shadow-sm">04</span>
          Dấu Hiệu Nhận Biết
        </h3>
        <div class="p-6 bg-cyan-50/50 rounded-3xl border border-cyan-100 flex flex-wrap gap-3 justify-center">
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">Now</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">Right now</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">At the moment</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">Look!</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">Listen!</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">Be quiet!</span>
           <span class="px-4 py-2 bg-white rounded-xl shadow-sm text-cyan-700 font-bold text-sm transform hover:scale-105 transition-transform cursor-default">This week/month</span>
        </div>
      </section>

      <!-- Section 5: State Verbs Note -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 shadow-sm">⚠️</span>
          Lưu ý quan trọng
        </h3>
        <div class="p-5 bg-rose-50 border border-rose-100 rounded-3xl">
           <p class="text-sm font-bold text-rose-800 mb-2">Không dùng V-ing với các động từ chỉ tri giác/cảm xúc (Stative Verbs):</p>
           <p class="text-xs text-rose-600 leading-relaxed italic">Like, Love, Hate, Need, Want, Know, Understand, Believe...</p>
           <div class="mt-3 flex gap-4 text-xs font-bold">
              <span class="text-green-600">✅ I love you</span>
              <span class="text-red-500 line-through">❌ I am loving you</span>
           </div>
        </div>
      </section>
    </div>
  `,
    questions: [
        {
            id: 'pc-q1',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "Listen! Someone _____ (sing) in the bathroom.",
            options: ["sings", "is singing", "are singing", "sing"],
            correctAnswer: "is singing",
            explanation: "Dấu hiệu 'Listen!' (Nghe kìa!) cho thấy hành động đang xảy ra -> dùng hiện tại tiếp diễn với 'Someone' (số ít) -> is singing.",
        },
        {
            id: 'pc-q2',
            type: QuestionType.FILL_GAP,
            question: "Look at the sky! It _____ (rain).",
            correctAnswer: "is raining",
            explanation: "Dấu hiệu 'Look!' -> Hành động đang xảy ra. Chủ ngữ 'It' đi với 'is'.",
        },
        {
            id: 'pc-q3',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "I _____ (not/work) today. I'm on holiday.",
            options: ["am not working", "don't work", "isn't working", "not working"],
            correctAnswer: "am not working",
            explanation: "Diễn tả tình trạng tạm thời (today) -> dùng hiện tại tiếp diễn. 'I' đi với 'am not working'.",
        },
        {
            id: 'pc-q4',
            type: QuestionType.FILL_GAP,
            question: "Review: She _____ (want) to go home now.",
            correctAnswer: "wants",
            explanation: "Cẩn thận! 'Want' là động từ chỉ mong muốn (Stative Verb), KHÔNG dùng ở tiếp diễn dù có 'now'. Dùng hiện tại đơn: want -> wants.",
        },
        {
            id: 'pc-q5',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "Choose the correct spelling (V-ing) of 'Lie' (nằm/nói dối):",
            options: ["liing", "lieing", "lying", "lyying"],
            correctAnswer: "lying",
            explanation: "Quy tắc: Động từ tận cùng là 'ie' -> đổi thành 'y' rồi thêm 'ing'.",
        },
        {
            id: 'pc-q6',
            type: QuestionType.FILL_GAP,
            question: "They _____ (play) football in the park at the moment.",
            correctAnswer: "are playing",
            explanation: "Dấu hiệu 'at the moment' -> Hiện tại tiếp diễn. 'They' đi với 'are'.",
        },
        {
            id: 'pc-q7',
            type: QuestionType.MULTIPLE_CHOICE,
            question: "Why _____ (you/cry)?",
            options: ["are you crying", "do you cry", "you are crying", "is you crying"],
            correctAnswer: "are you crying",
            explanation: "Câu hỏi thì hiện tại tiếp diễn: Wh-word + am/is/are + S + V-ing?",
        }
    ]
};
