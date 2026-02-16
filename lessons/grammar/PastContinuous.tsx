
import { LessonContent, QuestionType } from '../../types';

export const PastContinuousLesson: LessonContent = {
   meta: {
      id: 'grammar-past-continuous',
      title: 'Past Continuous - Đang diễn ra trong quá khứ',
      level: 'Beginner',
      category: 'Grammar',
      estimatedTime: 5,
      tags: ['Basic', 'Verbs', 'Past', 'Continuous'],
      order: 7,
   },
   theory: `
    <div class="space-y-10 text-gray-700 pb-8 px-1">
      <!-- Header -->
      <header class="relative p-6 bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-orange-100/50 rounded-full blur-2xl"></div>
        <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter mb-2">Past Continuous</h2>
        <div class="flex items-center gap-2 text-orange-600 font-bold text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Thì Quá Khứ Tiếp Diễn
        </div>
      </header>

      <!-- Section 1: Usage -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 shadow-sm">01</span>
          Cách Dùng (Usage)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2">Dùng để diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ.</p>
        
        <div class="grid gap-3">
          <!-- Specific Time -->
          <div class="group p-5 rounded-3xl bg-white border border-gray-100 hover:border-orange-200 transition-all hover:shadow-lg hover:shadow-orange-50 flex flex-col md:flex-row gap-4 items-center">
             <div class="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl">⏰</div>
             <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Thời điểm cụ thể</h4>
                <p class="text-xs text-gray-500 leading-relaxed">At 8 PM last night, I <strong>was watching</strong> TV. (Lúc 8h tối qua, Tòng đang xem TV).</p>
             </div>
          </div>

          <!-- Interrupted Action -->
          <div class="group p-5 rounded-3xl bg-white border border-l-4 border-l-orange-400 border-y border-r border-gray-100 transition-all hover:shadow-lg hover:shadow-orange-50 flex flex-col md:flex-row gap-4 items-center">
             <div class="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl">⚡</div>
             <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Hành động bị cắt ngang</h4>
                <p class="text-xs text-gray-500 leading-relaxed mb-2">Hành động đang diễn ra (dài) thì có hành động khác (ngắn) xen vào.</p>
                <div class="bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <p class="text-xs font-bold text-gray-700">I <span class="text-orange-600">was sleeping</span> when the phone <span class="text-blue-600">rang</span>.</p>
                    <p class="text-[10px] text-gray-400 mt-1 italic">(Tòng đang ngủ thì điện thoại reo).</p>
                    <div class="flex gap-4 mt-2 text-[10px] font-bold uppercase tracking-wider">
                        <span class="text-orange-600">Was sleeping: Quá khứ tiếp diễn</span>
                        <span class="text-blue-600">Rang: Quá khứ đơn</span>
                    </div>
                </div>
             </div>
          </div>

          <!-- Parallel Actions -->
          <div class="group p-5 rounded-3xl bg-white border border-gray-100 hover:border-orange-200 transition-all hover:shadow-lg hover:shadow-orange-50 flex flex-col md:flex-row gap-4 items-center">
             <div class="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl">⏸️</div>
             <div class="flex-1">
                <h4 class="font-bold text-gray-800 mb-1">Hai hành động song song</h4>
                <p class="text-xs text-gray-500 leading-relaxed">Cả hai cùng đang diễn ra trong quá khứ.</p>
                <p class="text-xs text-gray-600 mt-1 italic">I <strong>was reading</strong> while she <strong>was cooking</strong>.</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Formula -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 shadow-sm">02</span>
          Công Thức (Formula)
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed font-medium pl-2 italic">Chỉ cần thay 'am/is/are' bằng <strong class="text-orange-600">was/were + V_ing</strong> là xong!</p>
        
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-xl shadow-blue-50/50">
          <!-- Table -->
          <table class="w-full text-left text-xs">
            <thead class="bg-gray-50 text-gray-400 uppercase font-black">
                <tr>
                    <th class="px-6 py-4">Chủ ngữ (S)</th>
                    <th class="px-6 py-4">To Be</th>
                    <th class="px-6 py-4">V-ing</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-50 font-bold text-gray-600">
                <tr class="hover:bg-orange-50/50 transition-colors">
                    <td class="px-6 py-4">I / He / She / It (Số ít)</td>
                    <td class="px-6 py-4 text-orange-600 text-lg">WAS</td>
                    <td class="px-6 py-4">working</td>
                </tr>
                <tr class="hover:bg-orange-50/50 transition-colors">
                    <td class="px-6 py-4">You / We / They (Số nhiều)</td>
                    <td class="px-6 py-4 text-orange-600 text-lg">WERE</td>
                    <td class="px-6 py-4">working</td>
                </tr>
            </tbody>
          </table>
          
          <!-- Examples -->
          <div class="p-5 bg-blue-50/30 border-t border-gray-50 space-y-2">
             <div class="flex gap-3 items-center">
                <span class="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">+</span>
                <p class="text-sm font-medium text-gray-700">She <strong>was</strong> sleeping.</p>
             </div>
             <div class="flex gap-3 items-center">
                <span class="w-6 h-6 rounded bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">-</span>
                <p class="text-sm font-medium text-gray-700">She <strong>wasn't</strong> sleeping.</p>
             </div>
             <div class="flex gap-3 items-center">
                <span class="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">?</span>
                <p class="text-sm font-medium text-gray-700"><strong>Was</strong> she sleeping?</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Signal Words -->
      <section class="space-y-4">
        <h3 class="flex items-center gap-3 font-bold text-xl text-gray-800">
          <span class="flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 shadow-sm">03</span>
          Dấu Hiệu Nhận Biết
        </h3>
        <div class="grid md:grid-cols-2 gap-4">
           <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                 <span class="text-xl">🕰️</span> Giờ + Quá khứ
              </h4>
              <ul class="text-xs text-gray-500 space-y-2 font-medium">
                 <li>• At 8 PM last night</li>
                 <li>• At this time yesterday</li>
                 <li>• All day yesterday</li>
              </ul>
           </div>
           
           <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
              <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
                 <span class="text-xl">🔗</span> Từ nối (Connectors)
              </h4>
              <ul class="text-xs text-gray-500 space-y-2 font-medium">
                 <li class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                       <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-lg font-bold">WHEN</span>
                       <span>Thường đi với Quá khứ đơn (hành động ngắn)</span>
                    </div>
                    <p class="text-[10px] text-gray-400 italic pl-16">Ví dụ: I was sleeping <strong>when</strong> the phone rang.</p>
                 </li>
                 <li class="flex flex-col gap-1">
                    <div class="flex items-center gap-2">
                       <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-lg font-bold">WHILE</span>
                       <span>Thường đi với Quá khứ tiếp diễn (hành động dài)</span>
                    </div>
                    <p class="text-[10px] text-gray-400 italic pl-16">Ví dụ: <strong>While</strong> I was sleeping, the phone rang.</p>
                 </li>
              </ul>
           </div>
        </div>
      </section>
    </div>
  `,
   questions: [
      {
         id: 'pc2-q1',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "At 7 PM yesterday, I _____ (have) dinner.",
         options: ["had", "was having", "have", "am having"],
         correctAnswer: "was having",
         explanation: "Có giờ cụ thể trong quá khứ (7 PM yesterday) -> Dùng Quá khứ tiếp diễn.",
      },
      {
         id: 'pc2-q2',
         type: QuestionType.FILL_GAP,
         question: "I was watching TV when the phone _____ (ring).",
         correctAnswer: "rang",
         explanation: "Hành động đang xảy ra (xem TV) thì hành động khác xen vào (điện thoại reo). Hành động xen vào dùng Quá khứ đơn (ring -> rang).",
      },
      {
         id: 'pc2-q3',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "While my mom was cooking, my dad _____ (read) books.",
         options: ["read", "is reading", "was reading", "reads"],
         correctAnswer: "was reading",
         explanation: "Hai hành động xảy ra song song trong quá khứ (trong khi mẹ nấu ăn thì bố đọc sách) -> Cả 2 đều dùng Quá khứ tiếp diễn.",
      },
      {
         id: 'pc2-q4',
         type: QuestionType.FILL_GAP,
         question: "What _____ (be) you doing at this time last Sunday?",
         correctAnswer: "were",
         explanation: "Chủ ngữ 'You' đi với 'Were'.",
      },
      {
         id: 'pc2-q5',
         type: QuestionType.MULTIPLE_CHOICE,
         question: "They _____ (not/sleep) when I arrived.",
         options: ["weren't sleeping", "wasn't sleeping", "didn't sleep", "not sleeping"],
         correctAnswer: "weren't sleeping",
         explanation: "Hành động đang không diễn ra tại thời điểm bị cắt ngang. Họ không đang ngủ khi tôi đến. 'They' -> 'were not' -> 'weren't'.",
      }
   ]
};
